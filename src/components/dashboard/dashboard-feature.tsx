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
    "4H7LTdzQQd6eNGjHq25DSprJo331on3UcPCxBzrpTWNQUPtrXu9BmuHm95SoaMLPfyA1qBN6qVuAor2FBcSyLFte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K37XtcjkvgiL9DZPXAYgDmjTYh35QgGKpkBV2yoBJM9sAiy9vTZgrP91tWbWH9bAsjfTfioeGvNg5JWaXaQ1Cxc",
  "key1": "5ZjWPi9MUwyQ4a6zePSw13YyigJto51MHcehs6np4UsJxkBo6hnqXJMjYXsPDEukgw5eGx8vv8NRLLnqfwaHyrzY",
  "key2": "2Wwgcwrun6RitNMjn7AnPsqh9oAGjGuwhBxnHXXznbRpEZSaQB8ARFacZunhuEUoqNSFVQKiujMXMvkgPiM9ochu",
  "key3": "Bfw7eSehrouBszTKP6kGZQJvEEstEdMCcAKw6opNtLSRUnfQLha1xZ9trYX5VBWufnLiQEpaohQ8m3sdN49cJVm",
  "key4": "5qmmFv6QZqoEUSdFUzpuU1iSQELusnc5CVPfadi42Y3aTwhtasqxnsJkg766Pd19qseXfZN1WCdmh3RmysDb1HxN",
  "key5": "27Y3XomNTyXi4F7L4NhRRq6TAZLBwY6MRRHSJYr6ARZygFA2GsaoreSYtBRR7Pp6xMZY9u31GnvSNjCz96f64o6Y",
  "key6": "5Gru3Y1Hck4cRF6ypdozvz3VyqpPyJhuYrEY4XevsKJ9DjEAmBw9Q7Rs753vtRVUy5KCt4SQeXMRR4EEAprNTQxn",
  "key7": "hEFF5vaFaodTu8a6AtvRf3yLvrKthMgXFwiBeZHvtYNe77B3ggRj61wFpD9TsZBXD3diA9aFAxGBLzWpygXyVNA",
  "key8": "3qYhTAu3hFCYMU6FugUaDTJMmLGZ9PujYP9METi7dDArXu4JeW1zC5jS9fq4tJLbbY3mjgZqCgjRGH4LgjVrsNhr",
  "key9": "5ezinovgNVFvXzzC4bWHHxti87hHZMUtdKb34AeGZuLbZuP1NK1q2y2FRx7hqN1vmarajeZnkWpp4E1vXjYyb37h",
  "key10": "2LmvEucSrGtNFdgb5VMNvhv2TG1yapo33L127v7vQ6QwKkAcRz1RatYXSzuxegH38R1rp9zwu2LBkxUsXhkrSJph",
  "key11": "3xri4DrBHEdmwiPYhKFnGjrDMUhTBzFRtAAZzPyWacaFjp7ijfFb7Gm4gLkcvmGDKR5AHPgCJdoNPFnfJzZYvuh3",
  "key12": "23QUBEA6SB4aCnmC2qJMbDrHgocmJ8S7EE21cfzNHWRx9BSzrKF2DzT5pMAQwNqazQD7njMqd7aieWAzrtN2oZN8",
  "key13": "47XSnDfqYj5RRNq67VqzWND2GSECRGPB7FtCGm9JvHgdd7YianWzTBNZQKEA2uH4dZm3M5jcYTxJFKWTTnZcyAHC",
  "key14": "222kDKw1ppnuStD5ziLXNVFSKi4ZJJ2tLLGcK1Zq4iQRVYFuxkEJMrefXvmF1Wk3obHPi9fkzu2cKTZGuKnRAYyg",
  "key15": "eXqx8p2Gxbj1hDfj9u3Q3sPQt2pbnJfBBHnzFbxLz7uU5G7zhxEqnLWtfSSFpVRhj2JhjrmQjZrY3RBbpmiRoAk",
  "key16": "FTKBMABXHGgcELPsLMHZBHHPsaqjEk2pebMTK7LXset2tjg4Eey8B7FWB1BRehKE7yjqUaCq6EXf9LsGfTT1xxn",
  "key17": "5HqX4ubjPFNwBCaZpkrj1EHU6hNAxVdZGCZtgn2fYoq6vBN5468fZVXWpS91rJaGnoZZcVgrAjyBz1ReSBM9hwz6",
  "key18": "HYG2opPBHp1xJVoXLCF1SteZpEB4tJrTyHBWPQ48SZ74ufroqFhCnkezzwTpwmYGEJ73d5VK7JRPwPiCmg4RygZ",
  "key19": "aBznuRSJ9cHBKvBXGF4WjXJPXbwNxW8A8oa3JkTaBNXbkcuu9jwWoS2D6ep4X353ysfpmdWHxrXU78bHKeVEC3j",
  "key20": "4heCnJeaHVDWPVBpPSBuAatXJujzHmSRFgrMoXjeaYVnTEzFyzNM8Ux4ey6PuZTqNXSZz1LEfkRi9BGUaxtvgF2z",
  "key21": "2tT2MNWnCHX2tzMF1bUeTfdSs6SY5gqmtwVTmXiBtwgWqMn4EP96a77tTkcLFrbRde8fbvn3KbP9Yof7SX1bfTEv",
  "key22": "2UfXYcdHij78mYKbuEatc2dGiVrJyZid45pb98EtHZssFJA3Ko2zUbnfX8wNHupNVVUUpfdnWBXvC94CZuu9ycNU",
  "key23": "3BNxs35SSgWX6mhYj8uA45u7P3XiTiJR4Qy2KuTgE224Btbjp2y2ZsQmeDw4ZtsWak8Y7nBsTY1DYHeu3pTZ42Za",
  "key24": "3PacjpNp1biHeN3rW6HjBAU2zBKiV3FvjXUxQrzVGTrXg1BKhiQmK8zKKB8JqFNPYEHzusthmCtkPYHBWtycKQ7K",
  "key25": "5LPr5hyz9suddZyKMeAzJPFdoKbgjemkYpTaujyqVGM9ot5fqsKhakqBn9AH1SQkkQdAwUeSuRB68eatQj7b9hDq",
  "key26": "2SUN4oiHmHtJL3JrLVEbNoPwH3UMVTtgircD26FGLAW8BDPq696ZiYXAkRJuuGSDw7faCfYsyH6yicFTgsukWcvS",
  "key27": "4prFh9tkL8jZUnm81SAVj7tDnUv93Mbo6qtzT3ERLenStc5iuVar43FmmaMHhakX6xUySDVuUSU9u1S2VdZuSEJR",
  "key28": "3Dt1sqqgnML9yUzgnjgTXjPthyXZP2oZXpwGVH8RkJYJ8AWyH5GsT3LsuXBMHiB8kAaYrXVsiUqzf5qFL2fWKZao",
  "key29": "4ZfKBMS6e7qoFhK7p3EVD6dnPTh8c1mY34Q1FPSzyEXMDT7cVeHYKnWfb5oEG8kmN8afSJ57AWao51xwX6VfBPDb",
  "key30": "4w33c9sTotXaVDAYa6dZUzycfbPYBucyP95ZbR3fSSotxEVWE6mQPCQHgePTtK2bP6PHWbWsfkZrYdiZXY25bhoA",
  "key31": "DvtjZAQRGMSnVtbeu9Sf5eQA25gKsG6QEgdvFVeMyfC4Xn8cedANWWCkgzVpH2mu3wYVytVwJn3x19YwwoJd3YG",
  "key32": "4MPF88rw7jRseJP6eXEBteJbSdFo8cGpnAViMKLWf6oZX5f4HYgSyhTPu37W2L6653GRAgLhJdZRUoSopLC4HF8S",
  "key33": "weqeNHpEoNZUsRXUCv1CBqixaRJAmzaxJNPJok26PE74YuJrct2WJTqRh17yU1AnEm1SVDXHyyHCimPUqrvXPdK",
  "key34": "2hVwaReaWaTLXHks6Ewf3SrBCDwWpzWBPB2tM6sQ4fQoqPCRM8zDyVLziztpKQT9nWFss3WR4UW7t587mwaRUfmv",
  "key35": "3T1c9fY6jE7PNK5V4eQyzaGtCamRFD4mz6H81xrH18ha3WQqtTBFJrB7ZT3sT4DdvbwsXLK7zNfHJ7QtiXYa2N3G",
  "key36": "424wyLrqoZyn7PfDRa62c7gdtSnmqwu2iyzN1g5991gz7NdTTQMwQCy6SjJawhbRTXu3FSJVzceRwCunMoSTc7KH",
  "key37": "4o3t1zQodMrEt8qRPLM3gjdLWVWBuQX28jWexJUMf6zSkyJxkMMPHdTfhK67VQsaJzf7fD6aGemHuPbCV8YUcME3",
  "key38": "23mnwpfktNR2xathAuwmGgrwwMjRsfVMufnZc67bScEk9PyEncz2BzTWDAcqXUdgsogZEcWua8oLSekD6SKdzJhG",
  "key39": "64BHhPVv1sPCFVS4GNxaQLarZbSYqDEmwWnJ2vUQeScACN9cwVpKV4W9wg2h8dC9uXpP5U8kxuqoZyEHQZjDBwNp",
  "key40": "3M6RymHR5CzJ67pZoqcuTY93gT4uabBSY62A4xXX3yTGDU5Ai4ERxe5uoKAbidDjxNAs14KZEoPXjDzsg7UkYzrZ",
  "key41": "oCK6rteYmFp6WnaDXncpTBqNYqkvG1wTP4SP2pXDUitP9XeuALirH9YAQUJajMVvvmSrYv7VQkF87RgDqFYjnfu",
  "key42": "3M1vKuWGb71v6b7vwAA1jVsShM2Z7ketvR9LaG6WMAbQAgWTHzjkTUS8qgHwQTnAabDd3ybMvFiExnBa2TvCWK2x",
  "key43": "2ZC171fy8N6wPBW2mp8avZWh4V4YZN3hBtoAYMLVdU3tzKMEyeLPbf9bUeRUMP2W3SB39LtbxiuCpC4Z4uniEimv",
  "key44": "57E8CWmVg9JWB6FFi2bT2sNLKuoxGMbHinDoDXwuxgVGZmfrkhEF3255i8f95CUBk7vS7phRCNb5XqD68s2g8VdS",
  "key45": "3XxytCMKLKi3JqV1YSiqbL5Z15MEKPFN6HzXuYnWuX3R9iBoDBbJjQecbEXDcx37AJA3SwRQmonn9d3MfMJrzNAw",
  "key46": "2bLQC6dR3xCqb7GTF7EGno6S955ZjHMT1y2DLT6YKzPdmBJLQogCsNBKyeHQh782nfYLxfm5ukhXcyvA3kdoowcJ",
  "key47": "44s23nbuWdxob6Vfitcjnwsa6E1TW7sLzbitqwPGDnpfLkYnRKuqYavALuTY44Yc3RfzN4WpyQkR9jtuYbHpSssR"
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
