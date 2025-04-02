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
    "LRNDQWRSK7GNabMPqeZ7W6F4oFoocbfoUSHPNCX6ahYts5ytdnRWqQNqisU78UNmvYqoDs7oQbKfTo5kiZZRYiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YFKqcATdspqb9xecioWb4bzYBzaxubE9PvUPXuGBxzyD38X66SL8AY2achg1Bzw165BjX74jaXfNJjrSpZrdXoN",
  "key1": "NPAQMXqDSLeCdvk77ofYA9KWw3ckdxWTeLNHuaXKVi5pAiNGF9HdFg4Yg6fs7SFr4DWM4SEM61cenHJVNGdEMEf",
  "key2": "4GazFfMrKYou6mvtZoC7QLC1f78yXu2hav28GvUc8qaE555DDXjS3L4jvYjc2LgQDLDb2qjtZguiUYNdEPskJFo7",
  "key3": "4Vdtj2sCwRFkbKWu2smePgQZ8s3wNvFiWiJsWU5UirB1knEhxdnXe9CYN2JLQaEArNdt32wNKDqRjM1VfcNb1x31",
  "key4": "h7wu7qq4HZra9UTYoFYiAs21afw4PqRKnZ62GHLyidNpmyDQc73wBZ5phJyhQEz2xGVqUxfZEymZWbZKA1PJsfY",
  "key5": "hRZBWeRMdvdj7azkbNUvoDh7f2D7isA2T1w78XHFfhkcbMkUPJ6NE9DtnJFC8C14znw1DDwpycA5kmnoqpzz1Pe",
  "key6": "5zKTV2BWaXSPycGDDzcqBC9rQCmHWFCeiT1AaqGxqXNfGZ1iCn6a1jo6cGYKQ6AsKrP49nzYvmu5NdNJiBsEEcie",
  "key7": "aa6mh4uCwvgKfdc3amZCqKJVVgPGDePnZM3fWRn4DT738P3PHmMcnuBBtaWQJbjBnF8wtS5yzJEVmh8sheQva6P",
  "key8": "5HkH79kXQ5CN2g57KspGfbYjTNfa1JnLk7neiEP24cwnxQpdTM3UkrVHSSHmP72vzejcB3TCS9yDWhCW6XzCoPFa",
  "key9": "2HN5q67Qeu8yM2VwNcKafjtWWScJbq15G4SHiJLWv1zTGK5SmPYcn61fCsAXrA38q6aAUdJLYL4AVjnSCkt8rRxS",
  "key10": "3hrQujcF5BMhmyZmCM1jgHUuQnhpGdRLYKNCLzHHJwAcR5Rt4J3aBLXoKtmtauPjYYeiirvEgYrLep9AP27T6Q8U",
  "key11": "2ouWnYNDTu5t1x6B88wmf11uoRMVx8BUcy8n87rdJM7xv4NXZDu2AtfkeWVLi2g5jTTvoqDyHUn6uYhzhq9oPWgZ",
  "key12": "b21tdbsmPQYzRCm8e9k4v6hx9TfS89oPi58y2Kqmgp9agtcRXpZacbJdZFfhQ9a2biYnA7oAh6FbUJjHpz9nWma",
  "key13": "4rMf4UX7nBfPsuCuUzKBQExXjUh5Ae7NpHVSc6d3Kth8gjtarmm4B1sCg7mVS3Takm36bjLEtkoDtunYrykD15nE",
  "key14": "3cXFMuDBtub5uTxVvv8JcGy6shPG1JMqVKSUJDtHGedEHRXpA2mSofVJ2BxmPx6MNHVt5syNoyHBesRu2YkZ6jJE",
  "key15": "4pdXuKBqnFGrTsmcE4KmDYWN2F3qRy27fLkmWJa1cr4NrpT3F6snMmkqgGmnViYZ29put4MSv3KX7VYKsHfxbcxg",
  "key16": "2PRmqXzBad41HSkfUU9qmJmu3NewSnw94c5JXdqqyEtZykkkbY6AcRHBeAdvhah6Hj8Zf6gyy9T6ggENNcF2aW2J",
  "key17": "5Jnq3ia468D9EUwiZrZr3eGabzJrkZ4YBMkxrXrbwTxpaTabAGqMZG399iGCdGefyN1m7KBpimvMUHdqfpTv4uTJ",
  "key18": "5DkvKrmJQj4mp54gpTars79ijcFgE2UmaDs8vwaosW8QJoULKh4sRyN8HTzLn5a6LbrqM6E91KNKJubUxyVu3LiQ",
  "key19": "XVsRYTxHaGMKr4QGUzMCZBi3kkAoxeG6XjxM5z2KZyEojqKehaz4q2eCq1PXR6SD214NFtjgsZAdwMWzLq3EjqL",
  "key20": "2pvWg2an713Wa1r6MrxYtQACDYjZuYGcfQQTrHjxqVUT5TeTcBpE7TgH4m8YuErZ3eCznoGoxhnz6BswR3RHM56q",
  "key21": "61EMQ91Hn6UB7c6KPrbXsh7HGwterhd8VFzzMcXsPiKvUSSEHepjq4yXHqAKNN2XyEUPQzj4gyFPCKZhDERocgZw",
  "key22": "5MjiTbEtZ6BWGNgk5acyZp54sZRNubxUqPBhqH372o8yBUNLVtK4dHepPhTtZwSiaRj1JYzhDyX3RhAXFBATQh7a",
  "key23": "V4JNWi14MAMNe3KRXPdvE8vJjrpYkRnHgNQNZ1Z6xpSoBxB2sVWJZJEqVGNppqjWGwxsHbLuSvzD7iLAjeRyTD3",
  "key24": "4GviBR392ao26XFmo9vasnJdQ5tV63L9ZWfAG5EAAWDQ5NDf7rSjrDW2Z9vjRceFeTKTW5bFW9n6LUaNZpqPfT5u",
  "key25": "3pLAEwo1mnDEpJmL3fkaFj2Vbm42g2cyUPJtVcNk7r6X7GmjAqcC3CD1jJYisqqzrhazVJYJz3Fn8SjveoTnB2be",
  "key26": "22aMxkvy6ykzQFyyECmRkD3oZScdy6aFyrwTJU6eJGpnDsmK3duBPiXCvyE4cDankR3gYezdxAw1rWDS24vJQh6a",
  "key27": "66vXVaQsYhLXEQwik3T2LnKqVmDHf4xnKKoEqE6LcFjFXbPjPAuiMyJxzh3S79ie9vz4kKeVWigsEgfe9NMDv99R",
  "key28": "5q9XAvU48fKV95jXuCcV5cPu3zrPuTtqhwFBjBRwKwod5Q1VtS4sMkezbPcC6YsTFzDW5MU3mtkRZyukZDM9LRW2",
  "key29": "vXzkkWxYjfGtjqzA85azEAQoNP2Fy7sBDkQmLTUMYkgriUhrK8ck7Z6oNxBVt7hTgutL1eGGcqdzeUraTudnXmF",
  "key30": "Y81uwaSFHHWZFnmKHDdJLdAK1ukwjm5LokgDod2GpXiHFotGCE9CMD9oHbbaNQ3nsWmBHeduwrcJtXbv8qhzHxA",
  "key31": "rcRNHZ5fevkATaV3zSfjs5CaqUuydTSYCi5TFzomo1sn9VuDxHK3FxVNEjXL8Tu8VjqDDVunfXCwqSUPb6WdEt4",
  "key32": "2X8Qo8n7ZqiXZW91uQkfXHSKZ1cWUa8BH8vQ9WLccxpvjoZDvyFu5wJjDdtyBfMB8QfVRLUpdfh2bgMscaLt3ctL",
  "key33": "2DbnQRwkEQB6xGcduWVCgP2QpTp1WEvhnoZht6fQpzBT5fwCfDE2ieX2qxALgKzGk46UE8B39Qz7t7j8E5iP8Koh",
  "key34": "r3GHm9mcmSq6gN7yon6diwKaYFe4t5juG3pDf1LhNYdTH7xV23gL4tWMVwouFuw2cCxLssN9z3zFxtAMhYiGwst",
  "key35": "57xoUkjLgUdPojvKc1H6rUiVxeEJaRAw2u68TrbbnoQQrqExwnEPErynixJsUBEJarrHLyfdd4uJWqWNgdsjMBrx",
  "key36": "4zD6RVKoBm7mSJotBi4LN18gTiK4snLYhWv3pr79nxfQDEXbDLnqS2ShTJz9oQkDRCtBfvjULjtbTQwcZVy9WxTm",
  "key37": "fF1inGCQoMFcbkjwk6VurbjKaPShhgUEeqEwnyqLo9oF28qMYtyFs5TMNYh8YfietioYGgkqjmoNm3qA14CgU2k",
  "key38": "2A2u6QdWKr7uVxD1qi6uL9G5FAZddqthrNqeFY9yrfGW9GZkL1AVLnvvJAoeKPQVFEAEpNojYj4Au5CQuXfr9sdg",
  "key39": "2SFrYDV34f4dV93HRLoQmmKX6rnbXpSLBawqXn3zC3Qb4U6o32EJiN5ZKmQ6JYhkERkBxyLd8FvvYuE3c8RjZwM2",
  "key40": "4ZBFWX8mhgm88oy9ph5eEXn9wDmSUgC1NoUdUkTgiG3M2nYC8NfeZQsW9HH6jpKAiz9JxMhozEQH7x6ovu34SYzL",
  "key41": "haqv1N4mCuqE7EucfgZG9QppCYg5cwJFsYWjvdzm7Abk3Wg2Dr24fPQ4ijWeJxb5LEQ4wWd3C7wtWHjjhxHXnNB",
  "key42": "5ZxQNzwKcatU4b6bwGMbWtqaRQ99N7SNDoAdJ1A1NnYAQ6L68pwT62z5z6eQ5AeSZbKSreq8r1HdkFo5iLMmJyxj",
  "key43": "453SXuM6SxdLjkPdEDMVMU19MwZEbQQWyFCkP3dTCM8mBLASqkDFHpVYwakC9xYrrLS91TD6jMPp1m2N7KtyHes6",
  "key44": "3wRgqZ9Z72qPksF2W4bWR7yzNeJHYxxU779w1tZK1KMTN9MwUJZVro71QkruFMHS8etYcrqSAKsiwi33Rx3uLMub",
  "key45": "NYeWCzWkTrhQynS3EDhatGU6rp3L8sfBTgLSdwdAeLdZVbHohjG5T7h2xSbXJHrTv25BAeE7Kesr35GXZCmk6Cv",
  "key46": "5GVQGUC2HnkRVc8SNKFTVMXtzFRu9o1uSct9Mt2cT22iU4KeBe3cCwXjYUKMPuZzEFUT5XCwm31kb6T7zTg6fFQz",
  "key47": "sN6YEtKxpJmDAwbtYpfrVU2ENRVfWphS6yjQiMLrPjCi3p1rWgiDxgoSMZDm92jJsNXRTJyrd5KrsMVUaJ9bEPs",
  "key48": "3GvyQwjcnrGesbxiUR8JNq5AaDREoY9jToT1P6SRMXZnNSqzwH7mPAoPwvS3oxr9sUHvKwz9k2asWLc1ZzxrFVic",
  "key49": "557nMLShNKn3rNEgXZtyNpnkyZ4Ny1k94zJx663tjroonj4e5yU8PVUcsfybt9vfrqSU7VAPKpjkwsZTWNwRAWaP"
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
