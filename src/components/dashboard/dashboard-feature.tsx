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
    "TcgratdKYLV4KmzJHo4n3woGYMCDJVvQedBemAznFViLBPoGsEG1UbSuoQ89Ce5Exemz6YSVyxLVqUq73yZGqna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MF3qwTYmfqrHgt2KYdivYnCSxZFe61TVBQSLsYc1kh9EqFbHhLnvN8cT9FzVNE2wXcHpUvi588J2Auu8K5j5y2Q",
  "key1": "5tGrc4mXwmS5sVcf34wkiZUFAnQYG2nMkQPZt6H1ivQdQ7s3DEYzWZQXTSFsuwBdqmcPjajSXPVeaix2LeP54KvH",
  "key2": "2EB587kuiZWXJEwbdJMwkEFj1SK3W5w3j8h8CkKQBbySqT9mdt2obtpiNd8MjHXpuAbNnEFBoy4XPbpoNJMJzLuX",
  "key3": "b5jYG9J5TgpMjYTpKgLvJ4mAk44YfdZoDKkHxs2PCJaLnP2wTi3uamoLNKS5tKZZGCAjgM4zjjt7AkMQV8NSYej",
  "key4": "2ZVCSwqgKpBgcaN5HjkSnnXGEfLHGCfbeYfMGi5d9eDj5MJMv4JXko4FdjScq7QEPo8ZaxGfnBPMjxEzRHUUg8qn",
  "key5": "54sSBMe9bwFvYEJUvmvjRzs6A7XB8ofN5JX2dL5sXgXBVU1V9MhypaLeCASBczKfceUUgPc2BJPNvpAbvM4Ngs8S",
  "key6": "2VV6C6wwuYVaww5FahiDf3Qd5ynL63BSMN8K3QUcjVVB7qGbHpRhhKogYYqAwcbXvadac6GyGF9vFjS98uTCHusu",
  "key7": "2th5umxXSH8y4CHrfvEi9FPJ9dX1kCFL5j7LrzoEFiEDFZf9M3bZbYN1kPn3yiEkZqoEfF9s6teEj6JK5RwckcMW",
  "key8": "o279P4Lsjtz6LnUro1WPurk69Ldiz2dqCC5U6ubUzSx4Uc386Q1BBpN4Kn8uC2NoZyXX3SE3iQ5T2AZ8bQnjpus",
  "key9": "2UjHbACMPBQZtMsEZddv1paNEGHTbYv6tPPPjEdEXwC5TuRDRJZs5wg93vXRYh8pP6uF1nyvq95JF4FraxEz1FT9",
  "key10": "4VcmWY5NVpA7nis6C8JXDZTcD8jRF9pVVq7pNEq3ScBmMJ8sMB1SuWPxyB9D7aAYPZATm3UAxSCq5cGat9DgsAjq",
  "key11": "2QW6k6BbBUT168opwGKcYNPBNV5MMNGPPVwHsyCBTbJ4xGUBhiNjBANPZ1swvH7NVUg8odtNxvR4KVf3yasSiQog",
  "key12": "5HsgUjNiXoVZdYrh2ji5qNAtkcRZ7cYj4324ZwM7REjFprHhzpekdHGNY5w2ARwotxTs6YpwwUKqiJeTqpNi1RFz",
  "key13": "3A1mnUVf9NVfMBnJDqa2U7Tjz9LwobqDog1CHBbkaQvf3Sa8Vqs4L1JkAQiYEVSxkytQPzfQMgEdai6s5b9ZSRRZ",
  "key14": "muyh11zArbBjJFXHTL1QaAeTUJKDzGbJLgTqN7PLfuGJ2dpdPEwqRZLrPumGDv8kvJtmfxmkvXZxR3P4gP6yY8v",
  "key15": "4Ez2GJ8FVPLCQYxP4QYTNAGHSfszh9hatKbuSMGmgGxtNSchSQMmwcak8ubCKrXyAXc5eqEHqeNhViA19nHTvMrT",
  "key16": "3P6XqhaqtWgmEwJ8E8mX4KZy1iBWoFMTt2iDni1a9J1mj8CnXHAdx41W6uqZkpLtWw15YrJSjwBpLtx37Wqrhbv",
  "key17": "3RQsdjW7NtmnBMS1F5FqCw6Ub5ZJ2HvCwi3s3jinJsdr37K65qTBeDhqykJ5yPkC1sUtbPXXw6k1osgzSejdHJRb",
  "key18": "2mPJCDN9ozsddtqV3qeAgDaN92Dsgz4zGPVCU4H3vByiUjzg1nW66eUwAqChkfuLvqncsLCyoWKEJEyCU7ipEE8G",
  "key19": "3MibBWkFhbXCU34MHyArCkqv2wTf7p328ruSqZ5uNSY7CtaQFJZXNwjwdeq2oTDnL21uv3x8vrBEztzWQN4V8C2N",
  "key20": "27HqQBQiuV13fCWQKZufdJhu2ABS3GerxBF2HTAfSe2cG7QiUvnsLoFLUqSMFHvgrva7fZG5Y8kmaRv72BCQXa5r",
  "key21": "3HViXnu1ajjEjCRJjqfkB7W9eFwLMpSmhvBdxYcBjhZu6hNY2LJ5TXMMgfYBBo8R5yxtAogX6c26TdvAQSB7Duht",
  "key22": "35qrQAce9HPpBvVoK51DJDkMQGZrw2bVzpQvJ6259TFNiTajsbS82LpySWvVJ9ZQbRB3w9NZavATiFBbqjDaxzkP",
  "key23": "67Vzi8FbtFuLS4Qhubo9HA6MZ1ntB2AJthcpkzHhoF9E5Cg89KRW1UiLWbpzK7YDQ6LeTKwEY52CEyLNGFHrqoGD",
  "key24": "2Uyf6zSAbhh8kJ7ckDgKBBC8f9iNyegxdWfnUEhkZwdEU5aGPXbxy4sG8h7Tw6dHkDCnpXxgKjLuctLNuBSmjvCj",
  "key25": "2n1271aJSikP4zRNcFR4NAg71VGjjA4rw577GwTh6FGKpnLKDvWuZDeaaj54tdSu26x3VweJxjt1J1FgLekcV8rB",
  "key26": "5Mh3GYwzRox2HtSzqzdzvEYSUUmTLKxgqMznn7gLw8uHxuEizxosF4bNfqGWwido2TjgqU3A6CacWp7x4xXgYZFa",
  "key27": "3rkr47cdHntLZREr5jPJAnRQg3eG9cnTsP1Dotwj1qwMnccshKfjCgqA3r5xi27VaqP6K8rfjyWuWyv1wESMZsk2",
  "key28": "52fnYkSYpUWC4ZJP5GWmRpWzXvpLJeaykEYAKk5ULPXCzq7rcdaAgGerC6f7afnHWdB7STxSGcU8TgFYGvd3qsR2",
  "key29": "2bccdyydKR3mVvnS4FJgbxuehyDDmPGSTKmTo3ksQMzkwQWVpeBCGzbSrneWFb23xjf4Qz7LMf9fa8f7BdW5kzi5",
  "key30": "36g7euRmcvQhLA7RKQiqmm1s66Wp1BqmHmCzC37tm1ExZ6Qmxcv31kuZERjcCd49mz5wHHDqMmeDiwudTWPfjfzq",
  "key31": "39gkJFRQv2iChNxtuidSEd2gDokM4j59XKz8JRUKPxLHrNQfBUiZ9GYkvs3REVagg5kLfqT2g2buECmR8mM8TwEA",
  "key32": "5YcVHtncaxHTHdjtWinQdqVRBQp1seVSf37kMQdz9R1Tf6fmvqW3dsZzr4aTzXPtGN2mk1mrnj1sNsb1X66cRKdm",
  "key33": "5yg6LPxyt98fLj1stzWkuVymVYsPBDeDYJYMYxDDbwRywK2evQ2hAakB79y3NdzZEsyFSMj3eaMFZMt7VXFpwiPC",
  "key34": "4tKuJLf8LeMJTpoMXooqN2ofCm6rsBmmVfBF4epLinQP85c92cfvDzWkjLbvF9S7EfPH58eEQHdpxn3jJEzE8JMV",
  "key35": "2LXkfYEQy5pxCXEskCvfFn48weQBxjGZZt2eeerHXHZRaYXMBwt2o3WKhadLbJk7SEoGB7hwA2aUUzb8dG4KLLJ2",
  "key36": "5ZToonhRfcTd7TDxmm9g2e5fVXNtFtWq6Fp5Jth7qFbfLYmwE4ZwKVvPA62QdTBtTMeVFyWMCycwqaU2Y9U3vTD3",
  "key37": "5D2ckkBuPohcwAo176Wv7sMEx6QRZ4YW9SYS6bHWcZJmfWxpFHRDnvDBRWZfX6id6Uem1Ae9Wn2L8zmuH6SiLTrG",
  "key38": "2jdm5w1CDHJZzhM7G1n31wvSWVhFeQTD4h1RK6sUgb4GGsWYy9x4pYxfNvGtWn3ixNAdAuo7VvFtn6qFMYtCNw76",
  "key39": "345so9mASNA4HGpe9xph29a2X3v8bhDdqAYdemFM4rKnffsdTnEdqKfBGiQjE3C61B7TyhJ2uZMe2n9y7fSgcwiB",
  "key40": "21LvTzBnxbxe41BvYyYwECJr2kV9etywS8GY7hKU9KaJGhHvwgCDVsaJ6xFd66FbCAbnAJMq6G36xoLoVaRs3222",
  "key41": "36qaXnKYrUGgUdvy5CrUFY9bhCxhxxRLazV18Vyh49YX9uPgNEjdGEhCDCTKse1BosxCEvWCxudSQEZj9STLP3No",
  "key42": "5dV1Ea8ujUjCv7ucCPeyQzDfZztLAVB1iq8p9GHPzmWnsSkNqf1Nmms8NUncUYyfAYm4KCSsg6ga7GcvNkoWR16V",
  "key43": "4DHDRVbhPUau2MELXgJi1TTX9YAoVLkzEjhMr6TaaZMoaLmmBA1WWbGogMynPnmY1DyBmbAXg276FmVzJYT9Jivn",
  "key44": "4mgrkRQ93Zm16iRTn7utPiEZZTUoJbN8TU2VDHx6Ji8xrcQxzCFVcvxsQ4nhagrfE3ZfehSAmSbmdRwioYNnkuUy",
  "key45": "3uJ1B6UGdhVzqqvTchRDUuQuD4ayGWHAJhUrs9zUuXqWAHgJofFYge6rLDE49ReGZ55gGoFisKRcqpRMNfUgVviH"
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
