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
    "5zJ4bGZHtvokyn8jbf5xjLpa8pZZzpEUXJrCpkuCPRHR5NnJcxYbkDmZ2u8gyoVhCQGCZ1k6KpFqn1xqgbrbN9F8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CW5enYUcYr6A5jzy8E3GBGzBa4QCmiEr2L9iSZmnEHS699PSpRJmEqkv1S7h1hiVgpgQ1Z7CCRAomQHsenA6DNb",
  "key1": "5qkKXd9ACdzRKGzXD53uyycdQcZyFSmJYZs4tgB1F8d58svwG5TTE5tkiq4odv33N3wnXYRFv9GREKEYyVJjcwpc",
  "key2": "3tHrToq1c8RzTMhaujuCCs8oXqSvngAEHMdftYTjC6nVjoY1VB4GYxfN2jryUwHrYJDkKUteP9C3vGNgY1xyLAQ",
  "key3": "3nBtNi1YXBARLHJHhJpz4cZQxFqtLRFRT8aJp5TwnAiEnqJbQLivkVcY5SQASgytj9ZYhoPjVKgr2tHtTE2h8nqq",
  "key4": "Qfb51tejKEQg3BM6jQzmK6tJRF5senq1AmLKW5FWCUBJTb87conXFL6yqkvjbjahbHQeGEUsED48rFJf6ks5xAT",
  "key5": "XXDUrLDc3quwRR8cMfFxr9Ca6EhwnhHxnJioiZ6cD8SSdQo9T6Qtf7pWfRa5k7qATvS7uJkZXwFf9G8ePqyakVa",
  "key6": "4CHP7prmtwRedAbYvQKn2HoqXG434XXrY2xw4jtToE6oHFWkigjL1SJX3vV2hacZr7BMHExgSxHNStqSLLVFGXfu",
  "key7": "2XHFyi7td5U9CtJpkdjeGdYSCD6dhzxZ5chB2n4XfLVwHAgD2ZF2hZekmnobWAMwfEYjUJygTJ12rusao27ZpzNf",
  "key8": "4CSrSKyVAWGhLZYtcWaNwapd1MwtPGZ9kBZPaBeaGqynmzYck9H9HJydJyg5dRsawurR71K5Af6tNo5rQAMRnhFW",
  "key9": "2R6eSradxBajuVtWys4Q8v8T9G5BBgkP8uMahNPPziUHsgzAHrmWPRZuezeH9LVg6cqqmwhWDdV4ULP7qfkQYnmG",
  "key10": "knkHJFyTCGnWWVnF8NArT9bXhKJiYFiju4FH5friWeDPzi9Q4UqsYFn2jDNEc3pwr5MzxbYkFvaE4r8wGbJoSzk",
  "key11": "7YnpQn8qq6vtBEEvYrgsUCrCBgYrBFx6vVJG1vjhBfheZiisKXjEYnQghtLSFbznUvk7fA5DEMh4BuDHAktvUaM",
  "key12": "3mE1g6CeB5Vdv7R5QYsJ4XPcucHJDXwwZptA4BNpsnXniP3f6b5KMzVpHDMaEtEYxKDotUCQpZWRyQHJHcq1fYbk",
  "key13": "4rLH5UxUp1fq69jTFknZBhWxiivnTfKgoT1XLiAuxMVGxc9GQhy8CLjoJC2GPwwXzSU3hmW6zK1hqCH1CXBz2qVA",
  "key14": "5gyyvPCpgsvhJYNvF2cqoWuJuhV83ePJFbVJ3ppDLbHvNbZ93pRKM6eXRWYGH4CUmTPRdNxdQRzM59uZoaLRChWM",
  "key15": "3VvYZbbkLKzuY1mbmfBbhYRWkqGKwrw4cGaL4YGnf4Nrn7RioKHFwQ9RyWNGnbmLTwbA4xLz4EyuyiPYn7TaRVWq",
  "key16": "9GpB3XHAfNC5dh5QKPFRDTH2sx3Qam5QXGpqKTByzxcCnGFP9pUz9Qv47JaMyf7J8izGdSMEDuVuETSF8NJN4qD",
  "key17": "64LKFMeqcXp5awbG1KQKmfpDtRuQWN5pTRK3eUpeQNsck5cRQAAE9xKmYym75SCC1p4UXUrSSVSsSTpruYUpTjor",
  "key18": "3RMMnTzoqXU5bULFbEmYFjvNxoAHfRcpZxXE5FDEZvbiHNWhS1BTnB6k6wAo5rJcg3va49vR5NmptwyK5unTYEjm",
  "key19": "4douPMT29KvcmABg458aeL2NydfkTcJFyt8kQUFbYzogwxHtmRzU14hksD6bdRrPNQr7x9j6zvSMWSHPxfmiwD2X",
  "key20": "47ZjJ3gd5AokLp1jwCEtGuzkaT85hotHP4jb8xKgPojZoPMZ4NeYFNGP8RBDxHp6PXvjwBSfMJ4CTDCAy9DrDHt4",
  "key21": "5dBHx4BLkBTP8rbmptpXhU6aGqimK432eLGNcrzHXEXcTwd45pabGeV2yQKJNF44WrHwTsSM33jUrYjJuT4Cb2GU",
  "key22": "4JXazq2dbtj2BCohQpACvpbK4Ckj6Q94z67D28Ji2p6pbAbALsZq16cj8YWdqXjYCYbQX4oJ6LjrRGgYyDctMEH7",
  "key23": "NY5H22KdpAHmn4p3Bv7tkLEZCcLzsi2DrDuebXcauXk6FUUGsCReLS4sm7ahJXsQ5v36hiFBfd8hmfAvp5hjfxt",
  "key24": "3b15VgCa7KULZbitxnX6jNyjkojUcPu9q4e84JuyWteECKV4tA2x7fxNq8ABXLvbVWE4BSojgFabpYrgD7EiZbc6",
  "key25": "5E8ePiR21QYkovQjvtj7oqJGJHiYhGpr9HtVFQZA1M7oRRzQv6KiqnAuky8ppDDrefNKitP8VVDca1bGQXb72k7T",
  "key26": "3zyrZaarN3tNse12pw9kHj4rPLbfntfAK3stQyZd4s8kBhZM45irZwjQJ1oC9nkc3VUVRHZEPHAhhJ5rFWc932gh",
  "key27": "3UqL6RovFshkhhQbgCDf42D3NVCvdognTAiZqUmQ6gPtLKScc4MviST6s6BoRWngS4hy8NgjDu7bS7fZ5hY4tJ6V",
  "key28": "5Cmaa5i5Wvu3dVTXrajRL91jguFxjFpj5TTXWbZeJvMrG35FK6wz6XycMh4Nx4dzRNLAYoZPX3eJRKRKPVMNDwk",
  "key29": "4Xyn21FQkfCWxzU9UDiagMtbxFf4gYcHaNgZT4mDHdLKrhj7Ks3XgYyyTbhpB3QMGMxAezwCiZMJtSQA4uKCnijL",
  "key30": "35CEpyVt5W5ZBDkFL9drNaeyfrXMp2K5D9hNPpUzuab3K5qLGByDmRdqgsNnrp5eAqNC6VD33TPTBtET7LZP2UCL",
  "key31": "3KTtRB5t5t9E5HX1tTBexSttm9xWj21j5LLHnhN6bU71AyZGS3T3QAiqaroUe12iKQ9CSH6oS7A1LAAEAP2jojpW",
  "key32": "4SYFxEB15zSpUge3DGfFjTdaP9Zhc9kV8ia8aBj9TGtPS1x1Gb3FNkRLvHKJvQ3uAQn4fNHdMaMVCfJZt1aHtUJq",
  "key33": "5sXkns9GWvLQyAe1RyyesPbM3UJjmj2jZyP1UxC4TUJmgiLCLQeAkezVmyqMFyvtK8uRx9UoocirwEhBTiXpwRar",
  "key34": "9MX8sLBb1Ape4SVipYF3LxkLbNvcH7kxNV91aonRe98FHUoGktFh6LbJqAPpivM7RNsDjKWwyCCsXFS1VcKdVi5",
  "key35": "GPGc5ZvjobfJGVdYuWsThpM2avygJeDsyhDkTpHgrgruBtqcdhvBMEqZjxRrTFADV9TfLcZFj97NeA3LHU8pAZT",
  "key36": "dMDFKew1yG4Pz5WRagYRwVzaHhy1oDMpMiLmA6Dhd2TAjsj3HHHiDZdQvRxLJ3LRgopnbKhjDYWGVga6mMXxYEK",
  "key37": "3b73osTK1LZrUN51zUfrQ2JrunLbpzj7CENQ8uiG27hQfJnGFvxc9LT888m6om2E7adNjUuRhc6qYLRP4T6AYu7s",
  "key38": "2J8TQEiXu6zPQCYRezo7ARQ4gyCEFyrhPLZ3Jzcf3pqHSR3PyhmsqLe4nXuMxKfPizviNWQeeSkGsJorJiySYTn",
  "key39": "3RD3sJoyBuDYLWx4rKaHmQK5CxgmTuUujsApHuWRBS9afx5gFzKPcdTYwFuzW4RRoNyiiCN9oNPnLEdqjsPyhsp7",
  "key40": "519ap1wAG6jrVTS9ZMYNsQ9A6bwdGyPmg3zGX5QJaEA5wNfBSWncyATxgjfdcnxtLj4jXgUon9bL64UAeQBSLxrE"
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
