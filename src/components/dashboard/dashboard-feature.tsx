/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "CYhtudiSqkhEc1pJXhLeqgoc4Mo4r6tjJ6SW4Bzp9EXBXWM3pZbWCmAYLSixA2S7mSXVFZNmj4rw8K5QLfa2Y4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67otPLP8bNNSHVuQDDXrNdvfYhR6p9UwzW1T7NbdgzA8Cr5E1pfuvVsAKRzk1D3Jd3TZ7TvvLqVVGsKDdFJFNL2P",
  "key1": "2ougvfmrzDdnAFH6vBCqxndhutPN9kLRtJd1pwNP8oiY2gujfYaxDGuUATQVemnuwFwAmJs6kvHHdvdCa2PGDTK3",
  "key2": "2d5YGBYPDVk1H8Utw7ajYSJK3UhGayZpPfFZXKLZ3AnTBMKPQyZoHob5kTN6CnohYwPf5bkufcExLRfFDoUspLVh",
  "key3": "3VppGEZdoDu2DHXAizxRzCEDeAHTeYg47ReJqtVrb7mf7DbfWRGN2B1JbzRHb3e8VwR8xMugrGKqt1onvomCiy1d",
  "key4": "2MUBdZi5BAeEp8hg81HgWL3GCZ7uwat9SF2p6jRid4tB7CNg2W8KdN9gyc5t3C7ZqFW4xhspDccSSbdqMYuDrA83",
  "key5": "2i9z2AXrjnnCMVxShcqDQbWZFk4zRC2VdkuNH46bqvvybytCRNJMLQR7h9SiNLCWSbkQxyTKfD1GbZGdHNT1ktcp",
  "key6": "539HUqUXXyMXMRQXB2nGuvd2sMTN5qj9nsgeZnZNZAQVb2UGfo4cjNnpiXw6A4MmvCSK7UrgofmyN5Ap56dMAf1P",
  "key7": "5aTVpZJNyEbq2sD4mZJvoJmmjuJ9q2nTtyaM2JdmSgFhjaDPHg6J2JC5snKvJpuugerZ2neCzT87RYR5k91aEP37",
  "key8": "2cDSs15EaumB7icL97NPcFjG72Mhb27tsRyMVvXntHE1YRsUgtktY3E279iiPDY5dayH467jMEq1hxjww6PdKmit",
  "key9": "3QVBZNAWsoPtvUEqZuk8Q7EVdbkTfXKQf8G18vtNucm9Whu4zZhzxinYyah9zLuemiyPdFttpb2voB5KoVn4Rt3g",
  "key10": "4cmZgekJFyiYvan679gFmfgRkhbGEggLLzLhmub6uY62eqnuSj6DTbPGLSgCu9AtEyfggvnkdjZqkjCxWyrDfyps",
  "key11": "2oiqstYCtALdcHTowPUDuvWMziYXeT3GMxB6nFN3mCc7gDefwhAoufBvabygEj9eVi3XYcozmFSqcXqVR33VnUhJ",
  "key12": "5dqz3MNGR47uAzp1oT2au2E6iAie3d1qwWSFuvZw4YrykF7E5AMCZjrBJPDT2B4dZaooxwh3shoGZDYqWRLZgefk",
  "key13": "tWERETw2vuqGTvGNTTFpdfrR7Kv3afqniX1C1KWJhdAQfrQ4SF8Us8rCVkKAQEMvHzG9QjrLmowyFkgLePqbJds",
  "key14": "3Xo9AAVLjZAPMK4UKi8P23YvKPWHFnFkLKKq3TEoJU4xUehYqwJ7E5w282j4fgcL3k6jTQ5c7WurKidhrUwEcgG8",
  "key15": "5APTLJiF6iPveBUMjFYSjBP7axTo3FVgPWJRBBwP9eEMRJPnXmpycokKrRaDkfFEy6ocbNPkPdhNpH9wMMrnrUT1",
  "key16": "5QTrc52WaeozcsduZbnXuWvk6DCGU3FuqZfDVkHXpycGxhaFcRdgBrup8SvvNG5FAwyWeYTm1JVXd6mg8StSs3JU",
  "key17": "3Ca83VcpdZXeMZMH6hLz7ixE51rRSoHTimCGcFV4WFdVBYqfYeuD1ApQVY8iGoBGFrpVks3DeqDWH6yEsW43Jnjp",
  "key18": "5yCPzgst4vydP3tDTNyzk6KdiHTpnvW9U3Hx4Xx6oetWzGHvituvpdcG2yXWtwGZQzPSq4br2xe8tiqXSWDqZQM4",
  "key19": "eYpM5mMugkXM8NkjquwwuLgMgfjPFCke4trieuJtyL5PhhXA9kvnLR1U6sSYFKZvAtBLRw1dQUTo2jPZ4NRY3K9",
  "key20": "2c4cHrTdJFSA2n19ZypjAo3fNhnEzBSBANCAUCKxv6AK2ynsfdznYWYjawyvSpaGGsrjN4BZdWgG1WDcm8WUpAtK",
  "key21": "3GymVfz5y1UqHRAHC6RmK5UNnLJXNs5sEuFPhRH48zX2Epq22AuYhCmYprgkiaFoF25U9b99XcxchHis3Do7t645",
  "key22": "25Q9zrfbBuXd7niduQV2WMq5YTKL6mqZ7tgrwGHv8Sqbfm6ta8o3aZXg4aCSV9CGjZEFRhkKbLRXvkUgWvUdppMc",
  "key23": "2b74LP9HjpPTLMAV9q3WfZVdmoRcYuxPwjqFf9woSM6yEABgMpepaLUSSDZegSGQk7yuG6bbLMTkvFuJQzaCszmH",
  "key24": "VNHeti8Gcb9dBT8yHTv1rRYjb4Z8bBeDs91a8YaKtGBPnrZ4SLTtZoZQd8QiYjYFMhDJHGQwV8SnXxK9ZbDhV2Z",
  "key25": "5TCGYoh3uenSqTMsDHne7kaNFegpKrTKm7yhLvPjtNr1QjFtnuCNVemiPBufAf694k5JAgoPfzNA2DJPdE4pBP83",
  "key26": "5ybuDCutBUz7vWg5ySB9cEx3eiuFSQqvrDWTyDLWjFRjVEJnznBVRwHuXZkwktnJLU3UqjBzNFC8Wji3bzgeAhch",
  "key27": "57W99sjzqzaJcfieAMbYv3Zyd2CErryAB3zpdaBCyFgrGRcWJGJgst716FgmSp1sXN5sAiLFssSCwavz3iKvbNfE",
  "key28": "61w8Udsx2LyiNxTt8K8PedYX8NvWeQEYM4BLTrZxCdRbXy2uD6DmBP8ibFh5ogvxBxtFDP8UgDuZUuEyuzo8cdnz",
  "key29": "3UXFc2cKsYxouAmcWXHus2QFB444sM89tQJqpK69iMCMbhcxAwpCskYiNUhaNVSznJQZ9yPMcD13NVhDXu9FXyMd",
  "key30": "5Sw6LKU3QxKBFmjN2Rb5nWN7E6UnCVv9GmWQvut5EfVb5gxYvRsyFuLjbaKAa6EAc3RTUQDX31cYQYkCpYLdZiNY",
  "key31": "5Tot3NDW1cU7JQr5VXyqfxZ9znF2f6xV5uji6ydcJ1EYWGs3EES8kDFGfUDUk8miL2558N51fjXkUmZ91LC16G96",
  "key32": "5EkULdgqK15PzhkzWSEewd3vTeDTvfpRQCUno5nTq6qBHjCD57Lr765vZV1J2Gyx2z6J6UdpyhAqBnLgRSSHDsvT",
  "key33": "4UkRWXNvEm2wZoiVZDR8mUdVdReiAevQv7UmK72rVa9CDDUDV2aAJ2jP6phbQxYAnyChrub1bRvAZ4iK4Jq7uFrX",
  "key34": "4J8mxPEYbkurwPPG1ZK5vEoz4U6TJgB9Lb8DyugHbaJbUSKxDGad2RDMFETBjTA4x2oam7ZYWB8ZmANEXitscG15",
  "key35": "64PY33KGpNobCG6bgDWzFBRT194XsGqXUGircdq7uXQtbNwZfzEhwnUuLjKe9ZDK1RyVcMx8DyYGc3tksriUNubC",
  "key36": "axTNsfRp6XwVuuA8rfgbRWuU3PKkcjop1yp866qzxskdG3iRmN2faLoBv1rvAart5MaYZDBTHomZfLUFMGQgDTR",
  "key37": "4wcDUDx3umFKo2T4GyeByWMcMmik3UQu5ci1LfDjhBEnkaxaSXdXf4aQTyQKioKZ67W3BD3uJu9mqZUoDma7ar8a",
  "key38": "3yE4qhUBs3MKhXdQDwnTBLg37JJ9iDWeQCrMN9vpCjngcbVPsFaVnwqbCn3bunS86VwGQEh5kN7vH71nn6S9V54D",
  "key39": "4PmEeqLdvAcvywgfRNRsv5BiLHYM4PBYDwh9nLqJrp92wpTLQRq4o97wiWFEa17q51r6bBG7tJAC4nABuvpbHa9t",
  "key40": "5D7g4SwXykSD5rcyrQLYPjCKQscWHgDjusUwv5FVExyT8FrZ9RjCBnvT2DNJLLXnNYzJM6Hvno6JvSWVikdzEQyC",
  "key41": "SjQJBZbzyHWcN5xoUxSL5x5gf3uDJ7256fFva5QMTnKK88C96amEZB4ARYkk7GQx2yJB682eXr77pzbLzwfKzMH",
  "key42": "3aM14ye9cxkcF62m2kYJXtCp4sDmAADuYTgpf8SfH1TinHeku8syftK9Cwp8G9EmDdfXmvvLE8sgVR964v6VBQi9",
  "key43": "3JLwqnXEQTY1jy3wux3L6FbkxgQcvQtsRg2ghtd8Qjja4CX3Tu91wyEfBmypyjcg7hXhzxuHR3DLBNN9kQhkBSjj",
  "key44": "51ZzQdkuXUgkxjJhiZYVdYj2ydCYZLEGdUeMo6nvwKYesR3CQcm1tHumSThDTbYpCQagC1omhApTkr4NkknKjHmM",
  "key45": "39a4TKpqVktSkf8aRMmQ77Drj5uNeeiMp2V2LGQA9LF9jVMpvxVSgZW64KUcU7USsS8yHNvhXMRWy5L11eHkqtpV"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
