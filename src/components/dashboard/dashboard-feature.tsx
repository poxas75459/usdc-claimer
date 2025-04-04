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
    "3LZvVTMybuCR2Wyws7FoxALoGYdCmFu3aHj54Eo93m35fR7WdBFhtRpzVaKf2vhZ281ySX2Lonb6ES12awAfnGsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQJg38ZmsJoTwhgyi6rbefiWF7ay2pZdNX1peiuF5puHMFGoKD3TouLDjeLAhoZaf9HWq6ZfgLMFFNcAfvmKS6U",
  "key1": "C3uWTWVeJDjCMUye7DRTtewAxwoDiHkUZ1UeSKnx7shBHk5mrLPdbgckmjHoU3ThQfFe1wu6eC6YHFnWWtNAdN6",
  "key2": "4MuXrF5TQ3oSfQU2ScNMwPerSpL9E83hqfaiUaVtXStQ4zqyjgBNfxgdQv7UXhrZykRr2xcZg6opqxR4a99cdbby",
  "key3": "22PM1YCsPiWcpMoMwbbNJhhkWD8ZWrVTYGuGgDUq5hAJVhd3gXKPdQPHi3EXxg5tpiaViDoh75Ctrn5Tdif6GEMz",
  "key4": "5PYtdZN8vL2jLLmSU2vrMACSzdeeW7kTRHdT6oTNBVYKJvtnnqQ4wNzCd24UmmngWwXP6J6ABvuJeTPE6thftHcA",
  "key5": "3a3z6zoKp7fGKJQSpuDHw2twgHmszmNr5LZcD2qtuAPm4S8Tm9u2HL1AunM86tCCJ4bVwQ6zKLqHx4Y7qsMDKqxE",
  "key6": "yKADU1RqYoJrqvCqcHvdZewmS1iZqEj6cxhHLk8ekEkm2sqZa5nFY4doaGKr79xifnCT2zxTYGxFzviwwXdwAfv",
  "key7": "5dpU5xKKwBXghbEigZQHhi5hQ1L7mme3TqRNtPxomdAK7CX8XDedFpVEopsfY1nJeunVxewMpTxMMdr53HgYoK9G",
  "key8": "2SsjCYEfEnQiHSBuMi65R1QXKuG42E86wbK2nN5oYSjGtxPdVS29hB9BC6JbzD4Sq5KJDBKRqgJEX8Af8xqzh9gQ",
  "key9": "wUPPeA3y4fP9KDXjhVJSpnNvHeUY4tbNq6EUxPkpZLeMgLbmccAEi8xh3Uk2gCnpUh7dhhrAT42c5QMiNmHSCNp",
  "key10": "5NfAtBosdzcCYpSYG3DtASCy72aqPFHUiTHc21f7U6WQDQ3Lp7dASBRxa9hwjNBtxNL22b5ECVwPybncDoSTEHmt",
  "key11": "5QBY7vRhBKvL7NpjWr7xaHXE8ee6YtH5FPcQihaJFeW5K3pKKJmQyp5CgxAASgAeMXgit41oTtTRmp233GTDrGWN",
  "key12": "27cs6ioAJ6tzzY17YhAH88fD4uCKZhAHbUD6af6mVgDWsFD2d7odRy9SRjeBNWnW6mABPtfaqnntfVeAx5DUep7m",
  "key13": "4BQBiFqiJAPMHWdyK5mXNp7DZA3EQQNfgsVbP1FpsHXAZFdaZQAThgW63hdMoeje6TN6ugM7zz4qmnZEnBLZ7Mw3",
  "key14": "3TU8Wpk4b48fX8sr2Gvcxm19vwzEcrAdKR8zssw677ApvSadDKX6mv6AsnaYoV8HV3AYu4hFuUSYF5Hs8FNyW8P4",
  "key15": "3b6QnsJ1RNP9pZRTCKH1ETnx97iFKW3gTtrWSNVwJSeUE9CQcZLMjj8zqjBRAQrZ5eY9N9oFgqeF4D64z3dNaDdZ",
  "key16": "4KjavtuL8dkCFF1wH1TahvoVraqW55d3xGuQtdsnQAsVG11mgGPNHdjqLSVxMyysZc4CA7us3pVk3kacwTP7HHCX",
  "key17": "2cD6iRfSp3kwTwDnRUyhWs9w6N7eoSP6g99kEgyiCCusitb2AQggiHNXkVfWdw9Rj9qhxEkX4fDAwwTiqcpbsBzF",
  "key18": "22NgSyxxdsErPHL3Nck4NLwzEk1uexRRAZPw61L4kbiGXG27Dc95jxtwZTvyysWZLTHyt1CfBJiXBamv4TcsVFCV",
  "key19": "5Xen8jjz3GFSCjZNGvgxvgeyx5B95Pm8GM8L6DVK22GhfDey5BwN6zMSBxWfyMc2PM7mqEefWMgk6H7JqwibchpW",
  "key20": "493DNnAapaEe49HHZfbGZdVysA7UyzzZ234cFdyD4fQBuT7dPjeNQ26sYADKJtUJk2akgcTLAez2Jf5cHUUpLMPG",
  "key21": "2JYZC8Mn93ZMsVHvdBpSNh4u5p5JbXbYG3PprZux5ZjXbX7yFsSkJeefeta9RPbdQkW8PnPPcjAsLsMppMCfeYTY",
  "key22": "5XVdqjAALchREJHUWkg9AHoGMBMuaFaijpUzxDzbk4PdfkYe1yedvhxB9QATHGCgDt5d6yGmabZr4z89pTEpU1CM",
  "key23": "554oTBh81szaLsDgBiZ3MFW7uwSQSzg6dDHqgoqPPKPS1EUPjLRUpdySUg2QhV7PwS4epq8gdtGndZ4Kz1eBpsGc",
  "key24": "3GHCPMBxga8Y5Snni7RHjVZja6x6HNP8zzhX6MrYMbRGVEZbWQGTwWgaeBgTChFMVeukqfz5rycpXS4QaeN81PqH",
  "key25": "QjLK6L1MUm989Fjd7cKE1EaJJ97H9XZSi9uGZkPZUmFAww8Fx8e9VtxUwnvXrExUU19QkS1r636GkVSR1hekwer",
  "key26": "WXcdWr5pv25YTBEGQufCMg5RxkHbniiPDane2Po191J1V3HxUgLfLakQQnn1LxdmYv8tfKDzBwDGgiRHKfhXiFb",
  "key27": "2NKk1UTRzgfrUAaP2HeyZ6NQHHR9L22jfxxQxDQxrAkivcnpGRufKd71DvikYyD9kK4Wa6NWrZ7bHKXqm5NR2N3q",
  "key28": "5BC1hL4tVLuMa9gtH1ovadW2nydzJNhh8ZeUhXG4SSPPwDZK8DA9DukM1N3u8U3RhzN2YoForzMkUoRv1BpLaoHQ",
  "key29": "4B1BkHFKC1ATHMpTKmWroNt2K7fiZCch39d73XAFjeD119QHbT2JMDxK3zi9RB2H8oCS5mU3467PZGUPDkxstbrk",
  "key30": "4Cew3eZYKBeoQhbR9ZvSAEFTGbnR73UuNED2JehdzNNonF3nRkPZYwngAQX8PRBtNtmJheQano5h69shSzCJ7pzg",
  "key31": "2DxAmyy5mMbt3hY1ys92GkWoVUhM2EJkETLBhSPhSYNHyWCoi5cBkdUETz3o8bwHhiSPk4eDnYqUFixuCZNHi1ZY",
  "key32": "yqLam731gc2NuZvjVtWg1PRUAuuMjgCyeGAiSyHjhuXfSyYvpk1sYpzPchfAmbMSwStW6YMjiZbLKqGbsgJzE8J",
  "key33": "2BrpSmtpnq9aL1dUr4oX4hBhw9yZMBaCmUb3g2MbC3mcdPjyYXhvkRGsp6kuHywJXiGjngEtJVGXrUP2usf72Jg9",
  "key34": "5nkf4oij3n3EmRTxz1GWymbrkc1GYKcxNfKHMHYLyey6pNvJ8stGvhTbMhAp2hDpdpRFrfEnBipKhzN1cQT6YRm2",
  "key35": "4PCpi6dnaGqxkbrFuvjHw9yCyTk2xkotnFP6Nc7Loqj5NBczDZtJ135RQZrckaRLjfndSGQnYw8bon5fYLyj8gtq",
  "key36": "4mQP6GWep3AgMfb4mEdUBmA58XccWx2mz3UBxmRw3o9iCRyTfvWiJTPbB4ZsPj1LFuTaq13GTrKPDtDysa3B6nQP",
  "key37": "4HK3WNirPnopA4ErcMBDR4g1bPjgNc72s8Z63TMuGAYK2uTqBcQvkKXriAY8EUv987ipSTnMTAaNmNAmpEMKeT2p",
  "key38": "X9ftqsF1NWmyrQXyybm7H5mkjggUUTz4ex3UGikqL3vbtEzYMcWvznq9aAHjJTUdRJA51Z5CBr5UcrhCDqJddjx"
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
