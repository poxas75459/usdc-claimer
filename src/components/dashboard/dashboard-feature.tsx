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
    "Krpu3Y6YzVwBtFFaqVF2D2njzXjBo4Htm26Z7zJWTj4m5q2gmT7hw3sBAu38kVE2hb513xNkuGN9ykXfDoKwJuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7XVhEyN6DE13hxSTWrRUNia3YbZdmqKgNoGuX1ugXH4zP6o5oJakxVc8oYBmfCvJA3n2GWnz78sQnfKVdStgNde",
  "key1": "2rUhUYWCUefi5NV7CL88G1B58jtCknBQSfeKbQA9cXrq68hQd2n2eKi88CaDRZ9m3mx6kADLsgJ8AZDn1Api42Kq",
  "key2": "8n648mpYQhvpdAyCunpsHDThD1VD3GdgPLLMk8XueCf5eXvEBoJLcnhgReJJJzUkw7VYqYonYVAkNhfXqctu2YB",
  "key3": "3J7pbBHGmaK6zz5ShpU9xPUhe6tuwr5fF5tkemUN3tmyVE1qFq5TeUL6CcZAhcA29TJC8gePGVUHKzadwowWsouM",
  "key4": "4JX1NY6vkbhynV379Q4yQXNGkcxCqEcXWDZpvUmoJwsqprMUcXcR4X29qKw2Krp6efTTYAV8YUgabkqWUf3snrjU",
  "key5": "5xowWPPajQiYvjkB8TUxHCXKvAQxMPj5hC2CtbDfrp4egCoAkYPCkLFmdrrA6agJ3ARt6guEothTxCT4LQvTkuMA",
  "key6": "3BYn35vyKW3KbQf8Cswm112Ryso6GhnS7nZTBvij1e7MPt63DYbjDuQdpN86pigLzkVsJM7SWBqjBaZQSsWxpSxm",
  "key7": "wxmKsoxzawkxxaN7ryqHNTYc1CYUbXkE1wiz2zkUYeWkBUMDtVtooVR4mc88PUpYsTw7jC9NWXaZr5WmCFvAmy5",
  "key8": "2cVQ3yC7KNBfRRJji9m5Ta2JWUnFmzAc8KBUNHSavgnk1i4v2XDuhZ8q7Ao7uq818LoKjEHBuxV25z5YqbzEa6ks",
  "key9": "2NoAe9E1oUh533j8SruHMugnHziHCL2hrdLwQdLZV3K2tXigM4qARP9ne6zgBiCrM6Hvsf9FwTi9QTuiPXa1maWH",
  "key10": "2FsZXUuBeB3mbUmosyHjJ25qUQFmoWeVYFZ1ojCSsJ7bViZR7PBQrjmP39sT5K9U2c25FmBGLF4rFZHRwxbLhmft",
  "key11": "377Gg6KegSbk9A9kSvrf8BJgbHtvaQQJfReVSKrnRR7Jv9N4Kokt1G1J9DwvXjMzp9YhMAipu2VFQktUjKLDVMFF",
  "key12": "3pSUxTA3n4Bd7uPu489p5nsNuRbLDMtB7P37Qw8DXHxc5iSAq7JWjoiuPcfKj17bjXFTw4FBK36NYgMQkX5La6Wf",
  "key13": "3LvTksbuAtGxGXYVagcmPPKS8LmmTSEpBmoeNBz6xqQnL4FFAvp99VdRQ9DRozsdMmkJ2FsntxLFvZ8bbY5jYUMf",
  "key14": "2nZKdZehSwLVNuqyg9kLtfpbWXWVAX7Tyafcs3X1hN4G2p1WyQrWcULhytpKgnkgVnFJdvxjm7imips5ee6LkrEb",
  "key15": "4Nt2vUbcMVYWLgkedrGBskJcSqk1HJonWeAR9eUFXb36JXwSbFYuqWvfXR1iZzo8wj1tCtSF19L3mYa1sixbR6XV",
  "key16": "5btGhh7XedSnpxsfRvHgUSE6gWhLV2nkV4ziaKCv1X5CW8qqWcsHfxVt6Z7Pik3CkAFd6xoGxTCMqJTuSiYfD9ED",
  "key17": "BCym2kuhWwXoGohfj6g9Po34HJzYHUGvCDhAu1e5iPbDZhM19m7fPAKG2gN1CrjvKgggz1r1HQX4SMjkLtR1SXX",
  "key18": "oHRbo1GxTaPFv1RbWvUzN8HbPdbth7zLmRqkYCwF9M5J5uVWZ4aFBY8hDSLCfLx8HPQmZ3kLUfXV3dpYEtXcEeS",
  "key19": "3iJhwb6YmSiYJGPJLkaj3pzvh4eAkwpqb1DNgUQVqZ4dy7j2Va4z2dCs6BDR2gNp13aZh3Tqi8eiTU1WeLyRU3eb",
  "key20": "4qK1VcjWju2zKjrbtNfd56BeyngVfDr1LxSHHXHzB2383NR9JZ2qqvw8wsKmJydgSs41FUTDM2ZKJXyq5aWn3vN9",
  "key21": "2SVhFXHPYHx8pjTWTef8WLrrvtmr6gL8y8RJcQ7nFjhzUUHtKGh8RV6e1Y9hYrDdqZ9hG4ZzR34JyhjrQX2BDHyo",
  "key22": "5gGA99VEgK8GJAu2BrKHxn4pZhbgbaYCMe2mBHb5RKsAScVwhXKfDhxLWAPECTN8YxhEWLYtjYrBNhjrgEJjFrGf",
  "key23": "39poXRTRBLHT7Xbd4ZEZTVWf8wvA7Qfs4TcZY8fTwSUaUtZUqvqbUfrHmuw12YV5Z1RHJ11ywiknehgjPBtJEuiM",
  "key24": "55hPvQaXitrGmvqzPPxTeJfUodkiarTkwxYENhnMkydq3jYeqh8abAvPpZgG4XTWEKmfXJ3eXh3BguMemA9sff8z",
  "key25": "4ZKnCzyTceH6n9auRKTEUx7TSw58eHSR9XR9Toen7ncVmnECYyLqmmnXu39ck3c4hDysWeGVPGvCyzZkjB6i2eDC",
  "key26": "5x6nkAzgJJt9xSR1gA7d6vDqLoKQacPHYwMxTYjAxbBUTwmr2afJdAZVtt2pJ1bQ3JRqbKDbob1vM4YFHaiybzZS",
  "key27": "34PSgFLesh6sng3hrzZZm2dySfUUFGpL8mH3Cf32bJfBmr19EFC1QB5koKckB6mEDiwuCURpt1b5deH5kj3jBuy4",
  "key28": "2nym7NEHcy3L6BZUdeaXigsNvr9Uu44UKEBQGm7NmLPTJsSsVvf5aTWji8wwZ4pZc9r44c2QHCpf9UfLQzWBg9cb",
  "key29": "5oVFC9uoQGCcEtDsZtPo1NVszr48gjL13QDoCw6ngigyxcbT5UWXiijK7BjKoerRysuEyX4zaZAiTTybURvM1VES",
  "key30": "52BsTugVZxDhAajsy78UUXdAvpDyw8y8xeSfHEZzKYQkDMgKcqzwpBbLh8o4fnUV3Fc5pL21qgxRjiUGcCrbwPyw",
  "key31": "eWvhFQPtrs6581wpNeMCNGD5i2MGMqkoQZy18yHMaKWGyURWenbUCVpB9EorqZcqdBTquxas6GcHAu5HHkD37Z6",
  "key32": "5jG4bP8LFJKfkurwHaHHycnCzr2ZikJbv7cw5Mcoy1H1m8xJFnxFWud9PmJ42JrQpAxq8xhvCWq9UY6oG924P9pi",
  "key33": "uBdQ3huVwrL1iJGLxTYLWqnnm9xtMH43tKyrDFdiB8Z3HwS8p6ZSewYductTdiSJdFd7qsSHoDtzXmX9VxDqWH6",
  "key34": "65k9XhJavMn6s22CxZ9RhaekZCwkoTZrwqjJVdNMkYY5TQrEY4eYXuzJcqLDmYMR57CWh7b5DEm6bxs9Cf5MBxgm",
  "key35": "57W1feCAYQcDdyGyHo7S4owdziiuqVFKNSwp45gA6RnNNj6VFTPDBvgK9PsJvRju3PazWfULd3MYipsre7282zLc",
  "key36": "3QNPj9z26nm5WnrvXKzPKab1TrDadV3RF2Zbv59iQj6GVFLRkzup4Q5zyW5yWBQuUvodfJT1ns3ncrHxwVyy9Pvg",
  "key37": "3gv5dn2nDiCuCSkGUDnNbwoNdM5wQjkeftWJ3L7nPLxYoAcEhD16GjBEPi3f5hc2nLYdqFABtRV7zS9j4cHQuhzJ"
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
