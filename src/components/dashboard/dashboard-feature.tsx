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
    "5wp8DLKWhxMFqPXpAUaUPjPMY51tzxqcrEaf4LBNfnFf4bx7JLMkKvTdL5GCsMtnTERw9esPv3qJjdMWSxLNWJ5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RWgYzXQZyaTuCjUGTJepv7V1VEd7HqvKFeqm1n8Vw42VSAfqpR74WubGgpFxbyeAfbwnczBNaSBaxZ5usnUf6Cj",
  "key1": "vaaGLL4c5Bng4LH1WZFxbcMU4ZwXQ8mDkM7xV7151PZHFFraYo5f6W6xGCvSP9jdweddtxjPNGctD3iaTh15Dse",
  "key2": "2KLgMrr2KNhqcqYeiA7wfiB2R3J7UAsnbtgAxMqH3WSFPGoLbNejYUb6Vk2fezdg2ycm9VTtCchinspV5p3V6cX9",
  "key3": "4mfbucNr7nywmAZuafnbAdK2sCccKKrj8TSGBct28EEmVBRuZez37J2pA2FE6h3U5jZhjpjs1HxmwUZiuZBa4HFY",
  "key4": "2uvvwVubvZzWA2Eev76oB7yu26KNfLpgmqLyWCj61opBU8iESpicRp3wDz33PFKcY6tKgQuEjSJ3tYqnPrEEv5sH",
  "key5": "4H3baLDGKW3wZ53JVwPNuEr1gyfuFya3W3UXj3fEC2G1D4NAK3XJdqaBma1cnheLQXPbPeEsx36JzBjSChuHX184",
  "key6": "EtWsMjMG4dE9LcMNjozeegDgUXjrgZnvRmqXSVdLfMLyWYkhj5FUrqG3Bjfwhae3ZBuvxGxYC1FDDVweNGGAczC",
  "key7": "34ccs1yFSU7tK92SBdVKjibW2hY47EajAr6iMVfeGTiBrNPGrAo8jW5Z3hqZEpb2vwmCRdn8hfJkKd1xVuGZDj5F",
  "key8": "2pXvwmvCJywSHuH9MDivBAAUktz14pqq1v4uyTucmGuq1uZc5omd2hfLKG7CzonW8BjvtiiNS9WDSi2FnwhsQYfv",
  "key9": "514Z82qKkfqzH6oKfoNgTyjE5W62uUqpn4c1bXuji5qSLU8bZSiKMEtr7f3rKa35qp3CyHSvRYhnzowG82HzTPp5",
  "key10": "2UdYQq9X9J5R9wLu8xeaeekzkH7rGC81jdTzoodoxeSz2n5xUBABxxZcKG5bCYYCKS2D9k3PhRYSkUg5Z8tKFc71",
  "key11": "dvyGrRKbXHhmUvsuuQnSTHGymLk1cLc135WQD3ktav8uLUyX25fFvtor1awtjEzzEyV3TpxCnhC5wGpUEJ73uzz",
  "key12": "2zDtVvxQWwMWcdkWNHXo4pcnbrUbeVyenCH5PssMEfhhiYgqXrM9ZgiwHqDPkdcaVJvazU1FWPvobU8cctaGNwUX",
  "key13": "bJvysMAf4zZicfD9gWnEe7yGtdGUnG67D39SFeUidhJU9ioP3FdHq2JFBrSFb47NAuG4BEWtyG4d3DJy5wwJRc7",
  "key14": "44YXaAWY7Ea5g7wmbPvSGzGeZoFubrhMX6PcQ4DroFb8fMW98jBGfBKJu4NZPKu5ubkGT4XvsNLjoURpc9qjjAYj",
  "key15": "HK2hkKTwr3i6XdtXwE2nG8ERot2nerUfYfD4FZKManePKePrYo13EZDgs2Q9SkNubVEqXwWymG91rFUyktnwEu5",
  "key16": "43XKgLXZBWAv2fzAj1fe8QivNVxmozi1koxpVVuEvtNXPhLqXEgbua4ci1WTiK6xZtmeBF2XK3U6W45R1hSx8rZ6",
  "key17": "3W9XPiVuRucbGxkZTzBPuTEMv6XWjvB87ZgYqU5HhWx6qZYVsEzUaqZtxA1jhR6257ux7wSMGuRfEbUjNaG6k8an",
  "key18": "hTfbAF4wrMPTifwnKa8otpDFMayJGDhHnUohtrR4mzpuvdUNiNeGU3XaQs4fsRftvpkVxDUSawcUgPMJcppDLE7",
  "key19": "38ptbUXu3w8o5DRcUWxMA52btbgev7e53ZAK3xCJ5BaynSqDp2X5rUkSF5RwY2yPVvwFsPuSCkjVTvTT5Sdwri7B",
  "key20": "5gawfdNJAtfrMxfUfxPivvRibZ1FN5hb7bMt3E5RZGthaBNz6RJEee14BkC3nXZJ1keYnES4dbuRbXHZxmmbX8Ai",
  "key21": "1v5qGkkGhYenpKVDpVoPV5MVU4zZzQAhpNuF69jfC4VXWv1M6h2GgonuVD1zARLz8E2CGLLbzmEGXHTzw914Jnj",
  "key22": "4u1gPiJS5BdLhAUSUGj9aMvEtN4ankfCuU6uEWmeZT6NXa89hZWSPx2GQA5Sg85P2KgRCenTgWWCLidiMCRJZJ9n",
  "key23": "5SScX32jERGkn9eDUsmunpuRqwoo8qtnLYE82w7qYtSDPX31c2KjTBfyrgmJgmVwysuM6ResxWHkZq4e3Hi685wA",
  "key24": "3MQY3GUViZ2p7tDDujqimzXLfXNWdddTnwPmxdGRwKJwE7ULA8JD8wMYYXgX7VfFYWAdGEUWUbHDXQ3mB5sn9Q7U",
  "key25": "7nGbdapo6fL1F6r7SVwa8MkBDLJMKXe7wPqFKE57AqUGWzrN9xTsT6U4TJUtgWUwZRpkveYcZcH5ob2fjNUSomB",
  "key26": "4dDELgWTeu151E3TBc1BSeT8Y6kLLwfNaE75sJ1v15YUE2kRH5ru4e75nuAADvLyaAdmcdN6b7SyBV1WaWyYVPm3",
  "key27": "5MQ9MJ8Sk6gV12xYum8UoMAgdt7mAXwRRbDVh9pcHP89qU8MxrLRA1qbPMWks4U52vcCCWs6TFbUzcrsCxXGfPHW",
  "key28": "kXmQ9Mx7pBSmtbaJvZEERZbF7jyT3bu8wzaTCvj8EjbDAHPuF3aoRiDzuahcw7r2a6srLnN2WG41EKVgKhbp17h",
  "key29": "5QYyEMisYD94h1FK1vFgVv8paEYZYfzWjmmyqxcmuH42Rwjps7VhrsV2ChL6NTH44frwwhNFPn3xFKUs8EiUdygs",
  "key30": "4qPh4TQ1XzSEi4Hv3JcFaALWRAb5EvM7RJtfFL6poegb5rDpnZPkqU9iNeTnB1yj4EZZKi6XkzgWaM7oJuRk7US6",
  "key31": "4hHsmiKjsuPbFUs1VH7xRx3dzPvAfAhn5s9mMu62XCtkL37GThbvpKFodRdiG6k2U4EPfh19KGXNmaNEKkFEVTZs",
  "key32": "23cjbPCThCJMU3ECSg67HkEzdZDN6JonSwZ1cG6PRhc7NakjoJFwBikfZgmtyLJ2qe7rr46Vt3FCUJTTnCPa8L5H",
  "key33": "Gvi17a65ZSUVmRUXNf4XRtPG3PVHetQYq49fNNDCMJhpwUt2d27JPe83XdTtddV5sPvSLNJkxT23AP4xUY4BgmA",
  "key34": "3izGJUJvAmsJ89SXdrMxZJohiQNXpqghHxXfAevZvGmRRczvDvyKqGZn9fiEjJx1Ci5ksWUgKDVAmKPd3RNtDUSN",
  "key35": "33y72EvktwoAkfk8RaDpVYKxsLVb9YGuTmj1vWKGbKXFVCUEhTjAZKXNUnCLzr8nJjCkc5TU6YBGj4Rx7qTL9EgZ",
  "key36": "2uMseLtFLsdSng46LTGY8MLXmqnvrpnGjQLdLW5n7Sxjcr8HPWbT7AACSkjpRnaieLxLtgdssypkbFKXTPTmLfUd",
  "key37": "4rdxiBzzMgvZetf3kPiAjxKyPPTZWnGbZeA1dgTv4h5Ew68Eq8hgQqRkp6ucUdy6qJBHGEQ3ZvJBXXgK38mNv1u5",
  "key38": "5skLs6xnPw3NWwkBpUixhRNNPGHiySukJGK5jvKW82oD9TP8QHggZzfsXM5iUg5SrrCn5fm8EAaSRRW2cuyU6doa",
  "key39": "2KrW9gBcF9rDcd9Voe1gYBW37xFqHGDx9pRXaBUuDtW4B3ThDkVLRzDmzVQRnPUqWvqoJtHBSc9Tz9FzQXVtVrFP",
  "key40": "441vZMFW8GAHB9EqkCbcNdcxAfFnYve92NumXKoPEVkEv5Ad7k8McKtQV6edBiJbCD86EXsV9xWMVpaByDh9GJ21",
  "key41": "4Zd8GrjkCpSifXzeeVsAivSPkr3ZaAtKANBEYxJJ6tX3Q9iNL3wArDQqiHNvQcVVcG2DTA938p8FriQvzRUrTRcZ",
  "key42": "4yDL4godhbUMTRh3gmfwsHCQfJqzJYSXUK1BnmPsoiFxv4Y7XhLGNNvapXPbPT1Av2Q9cuzAR973tBShQAkqCBSL"
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
