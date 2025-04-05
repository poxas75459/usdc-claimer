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
    "1agT6HSaPXAV2ayauGxf4JAWhvc4g3MV7Upi886gEWArLscGeHqmGeAWQjqffrvjFQqvNoCZEuEZY5mmYfAvEQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43wQcxRfZwN1bojcpgfbg9tHK4dxUATdtSxX4cdsqRRgfY666JkWBBUcL54tKWVaQ7rdEhEZZtemoHS9czVGotLY",
  "key1": "rXqrpnMowPMeTTgfAcv98YRPoZo7C2g6hiDxHmM74h9ZBAC4gogwvmY4BE37qBKspB7evxXbkYtkSt5fLVmFrie",
  "key2": "4NVDn8C6effy6M8Qv6xqt1LniGURTZ7hXsQsVXLFg7cMV67cCFaGy465Jh3uiKXuZFK5Bu51Djo9DpyUquGJchAt",
  "key3": "3yUH8PbncvS4J1e9A9VEdMEB6r92SuWxbpwS3Ha6L8wFZzTEmcVJ9czE4wiRje3VRaMYsHGi3FtTcRGVzYSAuxBB",
  "key4": "wRkYBjoGRcdzAcfpUjM3sSogug7ZQuUGTYwHxZXeqvJYAyoEj5s6QaCmnXaiAjvSHc1Xrkdn9DMG4yM5Kc6mCPr",
  "key5": "3x3feLnA8NQVbaMQiFuE8UosVRdktqoxVeow71BuzhFJAUNTHXqT6Ky3AJna7ofwijJJtaGV1qkRngUYB9qZgxu6",
  "key6": "4wZfdb52SLZpvkmXxvnjpQRqk3eX1m2g6fb4mZsMWgpFQUMrhpn7jR6ohrv7YaBdGBJUWznbbxCdca4h65keJN1D",
  "key7": "Q9KfJA61YnjCizPyH2mnqj7tpZnXm2EtiygCeSZ36rCZR8sSEGYYcvbZuyUBbaqPLMMomHB3EyQ8H8xFM3yhsL1",
  "key8": "LY7TV5fAJuG4REnQTqkiGiRvuno4iXtjTVDsGhH73Cdqzm8rD9F3bZ2ZMKFNvQosH7GpGy6ooDDzVnK13nXLw5i",
  "key9": "25mtV3EGXyXT1xZcihzJGk8yjQSC5iqzz3z5VBLpAGZQzPfijSLMmD8NHkFTdjVKcvbbjvuYLCpHysfqM9TiR3cq",
  "key10": "4XWFwzsNGfiPNY9i1pWPVeqhFCejHnZbgSUsRbCFXu33GcjND9WbsDMdhiRVZbp4FQCb7U2d4wow9bX1hr3CGnVu",
  "key11": "97yyRmqmjDv8x9YgNJMqiAqfHmuY3u4omymqKYEuT3jk8dr1n5s6jwfzvyoG9LGLd7qjEEzRdCBKfSQMWZW9Z4Z",
  "key12": "28uhodTBEtzWVDnGNXnzeGqapfYA5zRsvHPJLgDTh5jH8kxRf7BoTL7G5XfrK7YVxZoXBCXFwiRiza9uWTQdK34F",
  "key13": "5RtjnNhWyFE25YcnHaCvkPaXTZ9Rr7y7TPy5DVPN25YDoorDkdgNwrdMkPRmAbv4rJgj3Lp4gHbWoondFR1hGeqJ",
  "key14": "3ss247YDHY3Ad52x7JUcECa3p1uP3frvuoPFhN4FCxAJXBC3RtGsBcCQnJrzHPfDdaCUqD2hwxY81CpoX8raRBaj",
  "key15": "2g3BtTmi43CZbswb6xbuBS5AD13RBf7q8hzUgGYe9vEkZfK2HMTNvX3jh1iHJyQ69SuwYNAkT3g4Bcdi7dtzMLDw",
  "key16": "25JDqEd6CdgqfCp9Rf6SrRKyroHazyekKEkCYr8ZLR2Z6uNAk4tXiyYWRttEeEKoLxUsU64T7KwXAafNjnzYyHzb",
  "key17": "5hfyPhGALRzZVVxBLJtE7BxtuLnx37DGwZhFwxLg6v1PbT9hjvKckE6ipaRrQVAwRZgkb6B2vgewojUkQWp83weA",
  "key18": "5CzmnU5w5NcZwKQVG7AV8gJminG7nVwv4o7dJ2jE49BHQbxHzSf6C1tTZsqTtjiHrVg5UejVFGMYXwGGvvB7EARq",
  "key19": "dfZfXwhddGsiucJdQy4rj4hQ3KAqYTAdaaXjsJXifmKKjbBuBHCh2YthwWDA1XxhNoXc2BASEHkZJhkm3uA9axE",
  "key20": "22WTgEhQgXwCG9JsUfhe24rWN8te4bbysKRfa8yKgEQMAVjtBJDmvF4Qj85D8Y2xEmQDJKH4munrmqJpqh7Uw8ry",
  "key21": "4VHZrDcdVaR9yYdhrbrbmE33p2Sq3QwyeKdAHCa73jEf5XBsTazNpToEzpNvqcWGSvhX4MXDd5MM1tWm7ZRUeL7G",
  "key22": "baeaQQQJfCpgK22eMqn3ABoxLz6Z5hKftboCPfduTfPW6RrEA3KmYneFQWQJLnV9pChMj1VxKFQncadYJkEmo3W",
  "key23": "3BdDaPTmEeh6xA28Ez6ksNNjQLAmdAwj773Y7StLiNs1qHSHpBn7Uw7UjpfpXmBxFi1nVF7BqtJURbtxRNJj4ksv",
  "key24": "5AkYHt7yQjkmoocaxbBzenUFEEL2xxF9qThKx11wQzSxTzjfSmjbRPmnw7MQjoDiqPgoZeL2oGaPDJddr1fzuExM",
  "key25": "5aN8kJx3iE2kwtYBqtG7YC5bZqu6X2E3cveeq746GE5RksdCgcVWqaCP1yUQrX9APwkmQpTMwhh2odJvqWwFQjvK",
  "key26": "3GAEMDYWmXjAsLBKmpRHDGH9s4wB4GnwUjUFGDgZUivEtuUDPDDRa6wMDvpoovKoqEy3HxX9DW7dd7yawy4aGgUy",
  "key27": "5LKBmLEmWxDXJRaAw14cpMPgD733bk2pcuejzpHYhcHmJcNZ3b1hiaE1drTGZY7gNB9YiWL8k4iWKJTGKjYxk5bT",
  "key28": "5pgKUExppM7ktVwaTgHoSMkL2idrF1uiA1wdCSHseY87MKZysspRw9YZ5eJ9jwPt8Mh7iur7e3Uh91SYhCT23PDP",
  "key29": "5677gufW3PXTTigVhRcsA2LncaLrV3J2pH9e4o6UBgoeR6xZhKUKvexJ45avkwSmuiovpkBzXjWdf4ERHX4ccgHH",
  "key30": "3qPpjgqkESjh8rE7HRt5tALWVUAoo1suT4kSxCckJmXiWUT3cxZCLorU9N924iKB7cA1qvUYiB6R1P2F2xwwyWtX",
  "key31": "34Hqwpndyt81tHXpJu89EaUgou76nBMKeustBfmL9i8hYEZRG8uFo91Nq47nrRxUjo56wNAw8reyQbwaXAAbFsn",
  "key32": "2xsdekgYMUNFQHyymNopeEdX9BiNVc4jA7Q3G7dJ1PJso4owXh1KHpmxSfF3b58YY54nrzrb9f89kMC37RGHKkvg",
  "key33": "4AWtvbT9fnk87PzGvQkZRNBdGzZJ9WZvk12G1Fi3JoMnh97EZ7YaVmyh9Ug9bKS5HMXat6ZzK2GhkKP23tmeX1xz",
  "key34": "4mjcrXoJPoNqXGXSsSqPZDzKLiu2tJjBJ4sQdJgdoMx32vz8RoWni8Q2CvgKzyQ8PWfsm9nVkKJwDA71JVuK67t2",
  "key35": "hm8ErcFYKZK3LTS9zgmKiL48wKkVxDDst6aPdY3mfz76cetfN8GDvhrDrmtKLDFQd49JGn1JbL7D8b5tyHDwXjx",
  "key36": "3NUQxq28RoqzbvY816UjwY7QkznKPbFMe8fXJYL1c5i4PcpuiNmCgKYYrEVtNWNAeckiNkAMy4XTbH9pvioqKA2o",
  "key37": "49QG7TaP2wgRvuAw7ZdHn4AJEaSNoKzEPe7h6L4oGXpqFwwhNHB92mkhZGLM9g2WJuJBu5MgybtPiFZkhp5LAq52",
  "key38": "5MWtCNSdztLycQZvVikuRgqDGtGWADS4jLcoyA9HRnWHx47VSUJMxsikVprbJz3z9NmB8ZQnUTGQqAFjhLN7M7Sp",
  "key39": "x5DtdC7bPcjhtGtr9UT4nP3xjEQS7jf88swTLXyRRT8mbgY3YCBSB96Z6dsh3iwq2YqhmEgGSn8RGXPqSrNEFAs",
  "key40": "4ZfMxzEA6Ndj5JdqLUJ8QYBxqJN9u6t2KZ1VM9sUqc7YYwXbQoBAKzCennxgKanbDWviW4krmgUjm62rbZmAvsT1",
  "key41": "4p1Y6NQrgVNzLWZ9TEmRmyJWUKfFAxEubxTrzLofig4AnW5WBPajFYA4tTPCDuYw22eQNjZB5NRNEarT46771uCW",
  "key42": "4teyZ5YJbUeJPjYuVDWLnQGAZXBdB3cVh2kbuvBnUFTM1nrYJESeYkEuQxT3g17HzLV7NmTgDoegCvkbHZNdY2rF",
  "key43": "57opxxx48JzRh2D27jmRqunS7VecVSmd3tECceu6CAMsJgymVdPbkt2pqN8i1drdFrfFzegVQ8FFLAU2N93qeDGG",
  "key44": "2QX1GxBQ8SPoAfTZeT1hvABjPdtk6bzNCzMwaCt6AD43bdRMvUQVh8GR5BXF741KpXCPY1q5wkfj5t4niQQnvuez",
  "key45": "3wQEym543yvfcenptXhsUWCHB7ZSyrx96Y4LqE7JcLCgj5sg2jwAZTNTaQMMiA2LgxrNWbiujKvjFBTARpni4v3U",
  "key46": "3RYUpzLBHM9e5yWC9YJJaBxyTGs83DiPtAsCgWN3NP5AB8paCZRvRqWQxMzED2spntMbT1hkVVrNAs45YExHzkyZ",
  "key47": "2BicmHgkPY2pYittTes3WYFhPEVdHBNN3T3QiwHd3YEYyaArCGr4TJTWdG49CcYtX5A3iYUzFzck9EuocgFfBcj3",
  "key48": "a72WBy54jVwxiKrELtQUHFjz4KkYtj5eaCUeDfsw3Zmb4SdqVipRk9H5fjcKcF4FT1H3eAytZ3zi8cLUV4wdAeR"
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
