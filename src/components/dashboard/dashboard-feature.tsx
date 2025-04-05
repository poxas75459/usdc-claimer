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
    "3KRuVUwHBMjHmGb3pvuA25m6ZnLmA7isc7dfjVWDnpEzaoofFyBgGTTGVCPvL2cBwCog1YF4KdS7kUcPpNzJps8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gq8wVjh8zRhw3xMzVKdT9ocMnEMRudLjugLB5tvVtxY9jyWqZYsinqRBQE6mb78Mq4jdih4EnnzpZBXHNpXEkYL",
  "key1": "wHknWZBkEDJbfRxuoAoUQTSH9m5e8gcGeNMdTFkWXUFHSgXuJoM2TT2Yuzsqo3dmErwqKvE4noA4x5gK31PiabL",
  "key2": "5kKKQaeJ7VeojcSWjBAugNvHKcUi7j89e2KWkKPyovv6wiadG9qaYq1hFccvkrJkY5PaHMoHMRAKnBgf4eCw9zxD",
  "key3": "4cYA7ewLxmvaiodwCGjMEzDFK4nHuEaduQU3bc9nAkuS7jDLqDabG4M7xYcuw4iAYssEVw3QhYCX2QEVNPykjGDm",
  "key4": "2UGcW48PzifH6L15rZr2wVejDhN46geHJrsHXTfHwMN7bnqCuqAZhocRAhmCVDn14rvXpcF7cBPwsYaoGFqCqAWs",
  "key5": "5Q3YsaWbj56naW4U5VpKPpz5Cu9cPpSUDitgrMHfF93F6QA1M1tS64yXUkfk6aFwjmQ2BSjU2nMEyjYE9vNnR28y",
  "key6": "3poLrKXCbjCrTLycEqbrsP4xPtQDJXocpYrMHyZ2CYF7RGC9VjA9g87ijr4Euwjw5xkypFweMXCQZw8BESPPb4Ms",
  "key7": "5TWYDLkMJPrzdoP1AVAv9v8wnRrZtm1CNdGKavyvaHfee5ME8qyP7V6PAEL6gxBKoEoh9UG7gMrdshCPHPoRWUKf",
  "key8": "3aTzNafhzNdJBbruUVeyNgwt3EKH3w8gD8yVrseJLewGKjMWippGcBVHuKqhdtq4BBmMChXkhCtEeHVrdvFhoBv4",
  "key9": "2BhYonUvH8b85PVFPGtFoAtcdzUYmEy8PAGt6ybHn2YADy8bDF1oz1CqDoCsPwgxwJfEjxgFZTqeEUMmUXncfnZK",
  "key10": "66vP5W1GAeuZ9Y5vgDxfiBpZeXUrWjmVgYPVC24rQGncB1vCHDFAZ2DAZ2E3nrC4pob1cTafSqUbbbn9NXtSqs81",
  "key11": "bbskT1Bf7foFTgTLnMocBU2AaE7Rtu81A5UhHcjK5W3NatNLpyVmfudy8mzGmZjrQs2F8nMP1Utk98Wnm4E38LD",
  "key12": "5Fhuyj1dx8PupVHiqbmMNFsdN2f5QnX1MdCtX6BrthEPu1Lzbidf3qe9eATYdGnZ97FiFtbv9y3eNzPMhychkzXq",
  "key13": "5TTaDJbHQ9W9zPbn7QfqfcH7gACrdxT9x7g5whSzjQDErpUuqM263VjDLEYeZWgAXhKipKAj2R6Ppi2gXXZKgQzc",
  "key14": "sccfV2bX4cLvc2tjUg78weKUEyxkXRHekbPXjvXYzeFyfrPLFzhw1LArorZvdYpyMYZUpwoBfkNuM4Rg17DjRQB",
  "key15": "4Ay5eKLRcnZfUyihXygaLvJC4Ew6JTS7SvJ6Grw5ngm2xX5ih1zaQepmzzr4jR9vK1Sw1f2RoEoThNmfGMy69ETw",
  "key16": "hAcGibwFCV763KqNXdRR455XZJDeoBz4GoXnDZ1Sd5BU5bUzR175kGnFQNeUZc1nsWMLpw7m6U38BHAZEaC12mo",
  "key17": "EfxM9bAQtZmzWVrYJbHaWpKXXE2qFWmdnGo5gENnxAc1CxiQJzagzMamX7B1ViHSEwtSHHmH6S8bu3S1cSJ5jtw",
  "key18": "3tKK7NmVEZ667XkBSYvnFvF1o6GcyNieyAxpriUuZQSu5RCMhMUzDdjXqiYf7DkREcjYhRKQPJEtB62X6b2NihbF",
  "key19": "2VLSCTacEQEjaY89XfHQDZi5jV1me8FAGLj6t6Z5KttE48aJPes5w5wFjtqR87ZTb8agFcdXZNC3xwnQA2wsMEmJ",
  "key20": "3Nup3HAh9izBaNCAW8NCZYFDMZwQMkQCuS32xRyEf6kfDdPsr2pweQR7xBvTfSnFs1khd7RtsQ9x2yBcNuXdGqjD",
  "key21": "3Rk9ihzPntYuxEGTSC1uucV98yVpTKbLwmkXunagFmxNBCEy9ugSd8sx5eBe3ft5RGQctECsvzNGzrRrRoque8yL",
  "key22": "21X6F8kWHFWruHC9wTQ9bccXP4JG7krtvShWA5HMPmBWPUiRvSDaBPf7FkyD81S2dCDg4wqJnQwkN7MwkPqG5mHC",
  "key23": "wUSquCHfN1ScPu3a4SXM7VR8A9xHyPyprQ9BxoZX1L6cABLnbsrEYoss3MU8o2cgMU5hzxosTjce3PHR5dpX6jy",
  "key24": "2T9qNVMcLBmHadYjg2GfrNTGKE2u3tx5iJrnRMSqAeDbEnyb5wE4cVwispi3WfSRA3M6bxT32JFro7zT2iZXxApb",
  "key25": "4daVT1UwUXHthyrZzHJqvi74Qxjp71UkLM6sS7izmKHJtApsNHqHp7kekZUbKLHd6CiW38AwtsNC1y1NJANgLUJW",
  "key26": "3SioJrbjnDtuYq4tuwsxh9AeAKf4rY33zbAuug7yd4bt9wwCy3TJQbQpazBRdVMvN1Jv8xjQiZtM9S7D992VCVLf",
  "key27": "5CJqnQZeBKMC6PqUceEtDYC3rsQ1BbSZMdpPqfhRhb1hFr7heZcnHdqZcX5QA1pbKHptSg3DkbdrWw3uD8hLs3ef",
  "key28": "3dVuCmsgsmm6jmeQSUgg9TQ8xv8PL2jTnBSKhtD7HEYJsNpiCdrRx1HwU3Af6FWGGnyU6Y5qVrhCdyQoAf7TtKES",
  "key29": "2tDLWYRtvC81CjgGYkMrGAy6Cw5ZxphShDtRVZTUnuBw4GwE6MMAPceyswjp1VuXKvhVGF86GmTJXqAmN1mvFGhz",
  "key30": "2qy77Tmw71bAdy4zyyyf41jQfMErAUvqHwdcVHkxYZVQv3gbsS84v2qJdePjD3QAryfZk4H2HgswpjUKQVbxKi4G",
  "key31": "AaKwbcBwvPo8BvNrqtHEDrbW4fq6HWxt4BqYayJGLXdD2Ldh1Q4zQvdqDDGWi2hCepxWfKYJmxBCZebYrZQXQ76",
  "key32": "5dRG52e8Cu7sYJVTwQf3Tka7ndEfbAD5DRxzpHZgXBFmNu42oYwsT8o141jsrmqv4VFNWdtX8Ky4jT2KmNpfmNVC",
  "key33": "4m6k1panXEBEGoRamfGaDrErrm4buqyFVbHtaCRg7z37UPtf6WtVERu3w87DZ2uwGE8yfwVSWiyCmvswi187Tb6m",
  "key34": "2iXpx6z4zBc4jn534Uur1KQgwuzGikb2WD7i7pWDcCMY9aqAVtYzC1VzLXvN4AbhfeNLUDUbwnFJfD5xVo27mFFf",
  "key35": "43sgDPCN8MrpdXTpyGi9iQU5Awpzav9oKrveo8bFzCPDoTJcKbSjTyvZXXWromVTCxuKSvSvHb71fk3fpBfAjc4L",
  "key36": "21ZQb1wpcQteDbYTji6wHiTTfbmvpGGmDNPR6JpxL5aG8hTsaqwaZLSLVJMWmKwtYbwEAUUz2btxsTT8E1wNuXMT",
  "key37": "5LJRXx2yr7Ejens1K7ktdSrtfUDvfJ8bBvgam4VEt3dZB8mJvvzx8a6sj3koKLKDQb1hQuJc1JFRRUS2XNEVyLb",
  "key38": "3SBg5EaKU8YLZHUtFtZHC16U8LhRzZbqCqFWt8rC3EdprqgDu6wPwZ7oSK5APMXtwVz7D7vvhDBFVKFQW21HoqTb",
  "key39": "47ZuwwjWuWi47G4tLmpfPg1QsvvVwKRM6JwB7KqhdAEXzKPhGbsJ6xYXzuwJUd1fG3QWtcj7zSq5agj8pzRW7YMm",
  "key40": "3rgLxJQ3otHdQoDf7s6YdH9XTPYyT71tw6Eevv26ZELr3FGjS3P6KxEqE5x8k3y6eAu9oFtbpoFConwUQ5jsaEDY",
  "key41": "E2VYAgYSh6As2eAy3RGz6GUpCBSttMGXwpC1HDX3qQ8ZmM7e9HAB78g2qePegDKGihHHZrSdDb4WbMDXZrWt7kb"
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
