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
    "3ei116r1PkuLD6rxWCa6Ww16owSuSjxNaXHL7qQViVo2wUFkpwsNVgUgJz8tUZqVdxapSNJWWgJZYMb8cwzi7E2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yx5ogW2zkEr2sGq1gY2fByxgcfoH2ggygj3ypLyzeStACpChuArFW7p5VS2VgDRxkfohi8Pa3zqRKsfwg8AB1ap",
  "key1": "V9cPdXNtUahB6Bb5nxyYq35VL9M8kU3hS7MkeAR68o7bexjWeDNNcH7fWQcEL1ukzTSw5xwJv3kjKYk8f8CjY9e",
  "key2": "7UdVH1qKThy7NKeUcaMnHabMEaTLJQWu3z93eNukmEuTjyY1XTHS4exmtELNZwmRkB1dYpvvuEyLQJWwN4y7dA4",
  "key3": "5DyYzjLJwXSqiqckNuSHor6z5HtiMbpjLZWUgTC2ojmYsumoXdy1Gn83HQWokSHo22JduKJ8vdR2DiJsMTPg8Vep",
  "key4": "5EwivqmQsGEKsNpivoYosPP87ck2SXNomkGCe4g4anHbtcJQMQU4sU38JmTvo6EqrP9xHHbj1bRKZ4KjZXkPE4A1",
  "key5": "49fdeeQVQYX2kGcmJMH94eA4VZbRVTk6iSEWVv9t8BdrtndqKzcqJBByVWThY954znr76jS91R51dFNLx1nG4jpN",
  "key6": "3xUDxJUqi9sceJow4SdbPCt76nBBQAvKidS4Jd2KjPCh5va7mn6dZgU2G5DoscUc8c8gXYVQQaahxH4gyCNPQVMi",
  "key7": "4ai7KUM5XR4yRLqVYXC7v5qd1uhEgpm1JbtUrhoN4jB66wuQ9n6AR4yEPDEgwvqBK14a7EjrZrRE4peyJBg9obtB",
  "key8": "5DuTWSb1quQiZ51w2kukN1vQsVkP2uh8knm6HXtR6Xn9u4CPWpcn86cmnPxrjqTiiikV27LbddvAHKgJqHKRabtV",
  "key9": "67PtXD74K9i6a8PB4c1H3GqMc2tZVYC5iMsRLeL9RJU7jSa4Aqsi6zgmdJjKqhcTpMR7RdntgJK9iLhPWQYQhZvy",
  "key10": "4vcKvvPRqJi7C7hGX15Hh7zbSMC4WjWA8ma6wpwZvqq6Ai3vgavYXwLXwKQ4K28ZD4mGMvSRLQZFhRxvGpeso4sy",
  "key11": "5oZkP4Gb444xwUnbeks5UJq9UBsWigS5hnNXkcbWK2sntf8jfjnu7bwK831HUNPAr4yh9bEczbTCArx4xAkPjCVH",
  "key12": "33WyrRXvhe5Bq3DUofGG4ZURwN7TWn75nt7jp8ATdPcN4V9zsG64jX6JT4Bk6R5WMfnr7sNaB3GRaX7P7AvZcm14",
  "key13": "4WD1MS8xbVHNnUWHZ35Ji1yBZMGb6Hrm98s6nSYA3mN5nH5npexWZmzW7MqALxrNyn47fRK91QamH5Zpd7HLLH7Z",
  "key14": "3o3VFAQ6MS25s33xN8KqWCGx1iiAcd9jioini8jLCx9g4rUUPy2aCHsG12jUPtkyKGkFrhvdFxvX71g3qamPGvUW",
  "key15": "t7NgwgbrwYZ2LCHsuGX5S5bqeQ6yhRujeo1NjmUUMn4GyWPFx6z5sFhhT8i91NHhPj5on8wTH6DWeiawKb8o3g6",
  "key16": "3bRq561bTmkktGxW4aXQUQyY3pPnRYhvoyr7wWBh4AP2cxWUjxz1KYDqHAajZkphrjhgmhgQdZYM7VohQD2bfsTN",
  "key17": "3CaVXzdNCVLQ8jqXgTErXynR8PQ2bU5Hury8nAquzeET2VFs91p3e96bbaAzTtg4mdS199kTYnDzdNpbTrxVNyPz",
  "key18": "59SgFzBtVYrNdQsCz2xbLwgbFgTbceBCMAdrsi3mS3sNsNXC7GbD5PtnFytkEYNCRKhyRQqPw9tjy7TLko28B2dZ",
  "key19": "52XbWxeq8hA9WDuUU4uhP6x93FgweVMVrvGQn38ZDSi3gigYLwdRxAU9gSNnQgS47obPMYEKzN3HKawubEAi9SEQ",
  "key20": "5W3N3YfPFmFiuKjoKKAzXGvoMXt52uSdhYkduhBoptTH4t1dw7CfRuwGCyTF1Bm7NH4GauAxxJuJD7Kfe5b7XtW8",
  "key21": "5w2gPnbDAmCQgc3thD8LB9xQDYfSojLy6zT975CBEfG5XLcwCTNGgWpq5fujECVp9MetLzXtCf7z2Tfop1HqvqF9",
  "key22": "29YYmsPRmGkDvV1bAGKNkmbVKTKMjuWheePdjJr53xWKFK42mkFK4ZE5LprSSu3C6JuZNTbTPLFUGv9873oWsAHU",
  "key23": "5oFoatkTP1hfhRnaCSJgXr29Wjg17MphocPomLwRDkkFeB61cajWBvnay8htGYZY6LMBcDdqP7CAai3F6sQ4fGqX",
  "key24": "2EbJVUrdShgHzXka42JmjScco4DtWzzq38mvP8Hba7DgiV6q2kGch3cVquwwgvE4FBKqjKof3FyU5dTQZWWBg4tx",
  "key25": "4daHx1ZKJnKD4zGZovhNbitaVE5prMJq8Q8QAsZg7SKnti7LQicKpmFE61Nt7EW7RhJBGTQhYkKoDi4wZ2L83x3d",
  "key26": "5coPjBwGvV8knSDQoDDika1LTkSdXePSuBH9xvXd1L26iDtVcvQpSVHTSxQGdMuqeV5js35dregwRPQ94XUVRznK",
  "key27": "EXmwRbGnnHC2RXYUgEhtzWfi2nTLH59vKE57PmfgsPnsFXtuQ9ytqQT3pxVit9T4yhDDu3PSv4VCYg2D1wk2mu4",
  "key28": "33wR73HrstfTNrDJbmMU65uuaot2RXQJumjqTJ8f9D9tF9oMe6oayXUjg4vESgQeYmF2vX4BzKyFQjvKLg43xRWW",
  "key29": "5menEUv2ncPTysAscS71HgMCMMyJTfAkBfvvtHxfEnGA6FY1Fo5TS21UoeJ3h7BWuE4GUvrjehwW8aQ4rdDLwAvo",
  "key30": "cspYX6z39ucopBuQFKJQuWVHwN4i7ngWKaxproBzJLhsUFG2jmA9nVEvRrgezhbdoi7TQyxhgE3MvBP68RGLjkg",
  "key31": "xmtBA5QYiMHAD2PAF1QPRpH6J3zM5ec9Y88oRczWEQbNAVFukQnsfwgRENxZGVPDWkJy5cRWg8QyRzcmN52CGEa",
  "key32": "3E4TNxdbRxa65B2ZTuhf15x4kTApzDvf1VVRrL2PagLCLXTp7sCxHVXD1Rwdmizh9i2aFTXRCguyai7XLHGTXBGP",
  "key33": "4a7ZMkaEMyKDc8Yj8DZAefYRusdNy7Xd7K9f1NfHEM9wm3NSgPDkHXbxMwtuVVTmUg7CT6HazE6jE3ypXrJTdBng"
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
