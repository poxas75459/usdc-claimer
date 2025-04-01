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
    "5Y69tMqW1m6JXAUBe8xYqv5myXVUXBPTqUNZjhNAaebxGM5ExACNd8iirbLWKPyu712W1pXJM8CshgXyEaaCigXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q2kmVFRaYCdDJAUz6bcyrjFQURwNqLs4uSroavADuiXyL3AVdHRNm6SVbXzNFF4r8RfEdZ7X4yeydqRLSNEmVhx",
  "key1": "5UWJTKfMPte4hoswZGXJi2ZR7eFBH8MTLHtQPdAfgCKg5sL527HbBaYRTAX18ZCmwpdV5y9j97Z7mvVkWgPJr1Lh",
  "key2": "4D4CiBXJDCDr8n7MFTW1pbRsHB37oo4bMe5Jj54pAefoW8vGRkAZLhAKGKgDJmNgQtqiFv9gqisdsPRTBJ2kpiY",
  "key3": "33zWif4gqVmNsdjiJ7fuGaH5ripe3Y8pyU2zEj1iUbtYbxR3iqbjWPQ7kuaLytzdpNUZ9Hv54t37L2TMWRNNUwbd",
  "key4": "4xFZvtD1kmUD77qKYTtojjvswcnxirwHq41tP1UYsH53GvRPTDPzb8gXF3WdaKVbgWSDrRPCwFEc9tGZ6JggdAWL",
  "key5": "3QXQdtx8k4ycBs2Xnqrs2uNuEDtXnm5w3G5AspsmqBkUhaEj6vBTYH21UB5xsMYerS9k9esTAhjzPiBc4QvZeJdt",
  "key6": "3orwMiAwmC16JJS5fd5BbYmoDQNjBwvNcsvTYxChsx3Sj3rW1Ckc9cZtGYFzQJaHoS8whzbYVacA5RziK5YH28Vf",
  "key7": "LfFz7rgcRrYabojgEgzx8xVwec6R8o2EYm5CSo2W2smmHG8NyAEEj82s8BhkBSD4kZQAdArDq8iDwaCdyggmyK7",
  "key8": "4L3nmry4XrdvvTgvwpnX1CZpH2hjPSZTmgsJQ8DxxrRHapNMGM9s774YTf6NmxJHnmsP4Te1YsFsAwzMFcZ1iExS",
  "key9": "57ccpxbUDgej4hdaLm5mt6NDXhLtz6xbRVKZihS4W22xKAMzfQomJKWxpEk5yYYCPS2SEUr1zyBvMUPYxX7cPxvG",
  "key10": "4XPd2giZMMzFeG2ikRxBmagNgZ4RwTSgnVcszPF7tWuFKTuvHFBx3YKXAVBu1nXvVzWhka3QW9sKgU22n2WqrofQ",
  "key11": "4d1a37pBWqN8wfGWUGwNQgiez6geugr8XfrtXEtosngCzGtEiWbPdv5vfeRyBWYsgmFwZP5KioEs6FsawFVDyQSF",
  "key12": "4JqyHVo212ps8cSZd9wU6oJ3ABLiG9Ys1U2n8KuKQYZHWNiyB5rXCiVtWr5eGijfXdQR5RfLiq4w6DJDvJ6R3pz5",
  "key13": "5sABew81nP9x7zWjFxo9N5JTzbrNgcJpHD98bAF1mNBVY6tPS9K5kvLbsWKoCEAoS6iogzeeMNKiFztASC5ubd1P",
  "key14": "2Ws4LMC1So7a2oy6pvTLHiu783wo53S2hWw3xXHJ6QBwpmGtx7nwtR3k1Pr7VUFPLNLHUoVJkdWbxK59HsnyvbEf",
  "key15": "61MzE6upHJ7N3Lx1qE23b66gtPMWKjcC7YRcYBp1Rk1nNCHnSxyyhkLuzyhZazrc49SUzeQjvc8AcUf8xvJmSAgH",
  "key16": "3XfcMAKoRmUirWQVYouPN4zSYZLRABtX5rjAV6PWJLfHqaSNY9c9SAyAwSp6EifQsyQ6wVVksdXcmXMbgPLLTmrL",
  "key17": "63GmqMfSSKecttJ4RiZXL5BA43fKwV9rpMijWGPyriJztocWTtEt1jy4nxunBqv6GBMmP21Shhtim9ZgcLKBKVxY",
  "key18": "264niwx9p2VYQcXDUU2mKY7yuqodfRZDmPMMYfMxSh9Pm5doeaxr1Jocw8x46V7RkB4RUyC4Lz5GGYk3i4ByXWAs",
  "key19": "5RcL3i6vkGMz1oNXK2dbnHAKhYcNxDZKFaUby9dHW93A7UGzvia4xePqx65Y79zX6zyLAzbm2rJehz1sPmGupyot",
  "key20": "w5MhzoHGYkwWZ6qF1zohQsBhsjtcK6oFVXHCCdqaVAA3pkD8KL6tcAqarEgzUk74asEGbTgatZnhYzTFPHKc4kP",
  "key21": "4zR11s3fjpEPRyDiDF5vs1r2kJmAXBuZ4CuKLJb9CEiUmhtfHbwa7DLzgsdfHowPX8o7Kb3ycKhPNGaTLnfUXvEw",
  "key22": "64RTFYTVPqXH5tzsNAa3akSRAT3qVvwYR34VzTgeyEPCUsHq9dn1g1F2q3A1RfY98GXsBwFmNGEPTf2s4WoRbC97",
  "key23": "5mye6gGQ28rsUP66sX15M8xe7c751bm74SpFrPi6uxq6hByFTqYZzJktDNw6K7rQxjh9B615VPns5vR3eCz7ua96",
  "key24": "2cQ6PiCg8NdZbFp7Fuhj4A4YA8L5RzFYFMXvyPzcg7hG1te8GXrZQRrPCtxQz31tFZLbEvFfNKwQCjC7z6toKCVF",
  "key25": "4wQmiTcwrKgbderGfPhQo54qqVq7QRqYsUEeE8soDzyow5gc4eeegHtFrTQR5LbGNXgCjs7dzVsUSpmm7wNbkAbb",
  "key26": "3QpYr1D5BW3BGJW57A7V5SQEL7nUkz4HuBFfgJHn4CH5Vfc6pjiYMUodm6mPUVujqMozK7bg6ySSGUZ9w6sYgmbR",
  "key27": "qJFyvinsww2eLi9FFqXEpZEcxVw4cQDM3w9oYR5nqcG4ynTm4gmSxbWSQs2XvBnj4BQ1Tb7SyzTuoqsUnDDnMcv",
  "key28": "3HvW8JEVja75KqiFMs546XsMv2beSUJCurZJ7QyWWHTTwqrTxGUyTTqfF73AvBj9zPatjEwownZzHwEYkDVSMUor",
  "key29": "4gjWyJgqYxBmzZagoaUb8UBaLWmSXb3YGBZo61eQcVhRgaAg882CLT45iRVjTT2SiKFtdqhpNySVVQop6KzrA6UJ",
  "key30": "2uNZ8PCoyPWkYmdtyk5aJeZWdBUVFAEk9ToPSoyXaBpmrEz42EYec2Yuf7P4LSNrWAUwqrp5RZ536DuoReCht1Y",
  "key31": "2GN13Nv1jCwbRgtsqTsRH7T6VPNs9TLdTYzocmA7zk7SsMFQP2sF2fqrUdZff4ztuAidc4tKL39Pyuw13BhuyMGt",
  "key32": "kYVNvRpHj7hwmCyeHciUz3fCdvQfDiEeNDto523JzCNcAzBP7xobwdSteoY8s7WahhgXj7qTjBuSg7RnuDMXicM",
  "key33": "4uYFgySDghEwjXxfYw9FWoqbbtYiJozWnk86QRCHz5wrBZmnauvnj7V8h7jBYuSQCSb3jSYGGQTcxJbL5THhrvT8",
  "key34": "51sGEqYeqXfieWiRyzZgerqMz66zYWAmYGFV9pwopeNrj6GawgohEG7cjDNf5uaHH1qaNLHqihWxWhfVs3HBEvKM"
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
