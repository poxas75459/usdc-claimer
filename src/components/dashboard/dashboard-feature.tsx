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
    "5cnBHNAtdQHXNCGdwFtXU38CAAEyTNknK4rPpWQ5Zouajn7EYMBpc3krhbpXA5JVVdCTAUySqFRUdabhutXyTFvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41A949p731WXBMAeETtSyWomZr4gq1GBQd6BLL9WFBM3rzZxfjdW1Zx8EmA3wLWCCzggFcQtfD5WVZBKjR34xaeL",
  "key1": "5qqNnQ8UGDLgmxj8Aqkiaj9C5PUXp7T6KLj3Ah1w4ZAhrJxzHNNJKzrVY3sv1QrNjbrjwSc7usvdNpAruSfXtSRo",
  "key2": "2JnCxKo69Ln71F7xXQQcmpBFuzYvcaAf6zjkGC25vY3Ka2nHdHyt64dvesJ9e9hRYbvz8XvJjUEWLQ496EvqENbZ",
  "key3": "4JzD5gywC8fyCsT4rMK8oWGkKaNBRpjTq3o8XqMdfQiLAaj8iyrZtuAMrNc6GUFJRDigoxuv2e17T1xg4z9Ya9gf",
  "key4": "1bKcaohuaTLWNxZC9dD5YjC4wCrLqj85ab4P8cdsUriTtj9Wka75VcDok4fDqGeFz6xRTY8zbpbLQ6fuc6Sdgv6",
  "key5": "37LDm9QAziYyags9CvbQ7dYHhWBUAV4HKGgJB3JPNZg3hVwozbZ7JdkBBYjmdppS4t14HF5J9bT4RBvdAzVo5cAj",
  "key6": "2QktxS58XiPvKurHBqUcEK9McqFmt8NRzLVfpXcSVYnhCVXBQ11dmGpZFGZa4qtrmanQtvLpYSMDhzVcwzqBfQB8",
  "key7": "3hht1eUTB2CPdnKfC6DzBEiGCp1zec9Bp8hfvEdhukGdNW7qYBqbcuKbrU67eYFHY3cs1q7Uv5NMSEyMDUoZe13P",
  "key8": "zwRTty841qjtEJGEkx5whUPEc9GKua451CxqDmj3rCGJj9aihAswTxnXrdo3Ai2GNhooSvmLVpACB1VyNKZzbQM",
  "key9": "4MLFyAZkAb1pasxssttrKwStbpk9joJu33Xr85NhZWLKiRMZe1biCeoDkhEFD6W4XvhjLCw6PKnxHxGgBTx2CBDk",
  "key10": "qAkJtX3i6Eu1BCRTtLC96suvo5RhVC8LPw6eJ3DNKtXRxq1ci36pKutnGLL4JC9P514bEm47tHWH3EKH3AGKdyr",
  "key11": "3R4adrvDvNtt8EXv5UZyVK9RfT8vsQ7osgP5e9ufQdS7WkhoPbspryiDza8gezFkBzyde6YMeJFmhmPqApdiWKBP",
  "key12": "3KaxFqz5xTnAjZQwrq3h9b2x3BneXp1Rd7DbdiKJNGbdLnUfZDRJR2Q36dBa4NFDiyfC1bYDHXUjbJTKT6HdqNom",
  "key13": "4nXgJudm268bozJJVNxzCMzAddTxBiejJHwnmBZbcsTHFEx5N4NhVvTGnCrvJAuTGjA4NW1SnSmpWrNnvH3Y9c8w",
  "key14": "MNQrcFMG1bZMoT1w9mLx2Y54d8EgwuDjRJx5ZSwpqhRrw7hoXi4h6rD8DNbf7zuqcTzKDqWHkgjnjffdUsJ4vT6",
  "key15": "5wg5rEJMqy8CJXVrrwyJES1D9ED2Vo5UhnnqDS68wHfgBCNA3jj34qVVyZfCNKsbiPhtc14ZCV4a4Brdi3Zn4c8r",
  "key16": "5igHNgJTmdcwFhyXZkQjyjUC4HDnqSGY91w2rMNRmVQ3CyzHVv7WNekrAVyAbeUTsCAbdY2jCcR1ZHyVjJ1pt95F",
  "key17": "mymAxXLiX3w6yFxLzpBD6teud9mn8n5UmZHmx3qTP3r771tfWhkVrwb99f1Ww4mC1H8QpW7hME7kYSVhLP8xLSG",
  "key18": "AYT2YUkrZHW4S3rvqemGKERYKLK5Fk3y3aqYSi1XrFTv9HqTXsFup1YWaQDsohiCABirHKZpa8vkydLBXhS1MkN",
  "key19": "3P1S4KXsfzpQkah3vxzLf11D6wrUjR76UWpoqFi5z8rfX95H7Cih113tP7RYdpAdvmiqs3aEsEKogb4Hzi2TDLPE",
  "key20": "3mcJndxQ6hye3fsD7CsEFMH24ZTo53Z7GJZPwdFHeJPrNShzKBvnHqqzijMSmXywUFhMSwE9bLoMKQmUovn13vy4",
  "key21": "4s1nQNsE1PhWox4YrzNcHf1pnrCZcx9VzZJ3brYYTAWuPR1q7bG4g1KNfJeRpu6jT2wdNCsSYKsSSTAppNSzZhTn",
  "key22": "51ZMNwq7kV8YpKVghMSvwF9oEP397sTWABGNSx2YLBhgDo74qcAYpDC1yv5jTdKtKt5zdk2fJWZ3KjG5pyeP5qPB",
  "key23": "2uWgHRK4oBmjwTQB5dJiLxqLWsXakisyhqNxcJiQcnDs3Q9pSUHiW3xhTd1DK2paVZh8UrJFH1VMmXfZ8y6dYrTe",
  "key24": "52JsCoxL7S7t7zMy236AnwjRCbbAKU12BfnhDXd8d56tjPTKxTDNEdYenanM2QBSAGgNBjUnRZP6717kvBCear4Y",
  "key25": "3XYUsq4z4kGsoydbj6NzeqVDm2Q8B4odCJFMW6S5eNy76TD8LVAEULMPyoDdtm4rcnbg7rHRRnrh9tnLgFwTSm2j",
  "key26": "4GgvRWnV79Sr8pjwqmMPgLKjqnf5bw8wHsfio5QXjNv3hHgHDXu3Hsnrh1PK1ts8X5UMF56D7esZ3vJh8RQWKmQH",
  "key27": "2YkVgLQXeq4CzbTXb7FJbExGqKjE19rWUBxr8NxNzNGXRydFS9jgez4o4b9YxFkpSAYfQ1wEbDyqEQ39WubBzwDP",
  "key28": "3VTZgsyjSZfX9BPn9rK5sWA3eoZUkf1xp9SfmnwWKVREo7yqVeEsdYe1zrKhvUCJGrtW7sGaKhjedXtykRG9mkma",
  "key29": "5sQdH5Rxt6cPyEKKAdfW45aSsfWNr4TGydULpQAYUrHAJwMaSEV5fheMz6Jkzun5nvu1iNkDnmvGkKUouFqzBmww",
  "key30": "5nh1cjhtQ4Lh2EwHQTFxKGZN94qT1kdZzH8tTLxkkbnqDzdZpWa28usE6wtEwtMRVPo9zT1L79Uk9jo9W9e1RwRK",
  "key31": "3AZ42f3CdsGiLvvwhG6iE27AGMM9dSvVGUe7t6FkSUnKSpDxpAy1nJgSL2gzGxHSupDid3XYYdeeehbdss7qbhyz",
  "key32": "J3vtqrSAnS1EvMCy4tKZ3AJJwGRoJYYi14nDR9WRwebQjPZuVfJcYtx88inNCGV5qKhT13QsQjWEwwmaTHFkkpo",
  "key33": "2Y8TuHVk5ULWHbDjFRVcVKqfPeWwgdvUaMkXGd9mozyBD9JHCDWuosB2PMJrm1Mis76KpJnucDkk6Ui8W3wS9SYL",
  "key34": "2Hc4BDgsd9wWSZqTej5TX5jfzRUyripFeYD8do1kRptixQ9k7f6QLoWNKnRGk4GzYmWDYrm7bqAH2KWXLUVn5U8z",
  "key35": "fXPXgQuKp6tAYXVKekMdBUa3pAPmgmni1eYmWGzEtnn5MY7Zz1kUStd9je47rZoaYEvEnjdTgF8gkPqpmmXAM8X",
  "key36": "2PCkGMyiVZdJ7tDVKAW42xR4zmDha2gBdP4Pn85BBF9fwAmHhBQvkXbmUH9wgo3zLjuYPKBwRWGokVw6W9h7ANE7",
  "key37": "1KDNUJEPXa673g3BJWcSsg22PFmXRaeMRyasrsjHVgXRe81QiTWamBBDsR4TWAmHgQPrZeeBY6ByMW73c2SkUoX",
  "key38": "4Q7oWyV2QKyba6wfRfMrEwawJh3EttMm6fimgMnbgGjzmdLQ1LvnpfNv2E7q25jBJT6ZC5BQEynTqfTksXorbuhH",
  "key39": "3tvRSR2ypJiEFv8qbu8wc25qexdz3NHWczjP5ngpCTcSwCDtoedYxQdvGMhdJbVfoHuLVBwoG5k4HaaUKtgAXZGp",
  "key40": "2YQUPGaWe91va56Hm2t1UsjjGtWKoa1vQzUQwTT6J5zmT2d37ZEkN2Hwp9SwtSx9vXTQBhdg5MNmqfFSRu3uLfsH",
  "key41": "5PTmmT7TVXwFkewn6fRrgEZnD4o7JS6BGXHFSM2UiEpyt6cQ4ocWb2iDqtx2NSQ5kHWNzp8U24qYZszGiJCQsg8a",
  "key42": "uZD2tMqzig2Cste3W1f9kopbCkFQh6vKvCi3CNFZBNnCU7UJG23RfiffBasJjeChGqMnq5Tn5XD2YqPrRnsAoAE"
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
