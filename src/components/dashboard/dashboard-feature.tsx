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
    "FYzAZ6R1bx4xycdCEsDUbZwxgobucEfcYgnvfEJLwARVjSGeYMHprDVPczj8UsZ6Zi1NiucpDKq5JTBycYztDR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W37V772f1oUeB4tsMi99i7kTKHA5PXy63xpkjYWZQuLyRMvLmU7wr6N9CdV8jAYcLBQgnEuR5Qtx55p2yhrA7hD",
  "key1": "3v34h3vzKWRauuuU8KedVdj885ct426VFaq7c2Vt7rpadg3W1E7biXJopgMG22tkjMngWqHg298o7GCPY5bV6c1Z",
  "key2": "4C5VDEGfVsf39GJBQWn6UunLeAUJRkDbF7iViJg1koABsYXyuUt2YAWYwaB7yGAjKLYuLwZaGzXPRx9mJ8nFCiDv",
  "key3": "kBQ3BaxkvzsdtQ3wKWhoxqJTkGFRmeE2syXvJfLp9DtFWgv9tQgLBCVcF7fxjHQe6KX1x5PQYKFvR1YjiXacPs3",
  "key4": "3jqjJhNHpVM6ViHogPTWPfCPciYD7WTVJF4JXhDj1zjZ4CXhw2X43epTQ78M5eHroVBdcs2oUimZ9Bkf9U56ymgy",
  "key5": "43WoZc1b5nMniNy5zAtpfmyxQwFQ2KRPCMNYqFS7kfDkWgMw5qfbeZnbUSa8hJpU1T3mcse7fJe2p7E1pTyimZBu",
  "key6": "2H8xQv2AcyiPmQDbbnrPwaWGjAscC1nuDb8wgUcpk3yQSnGZsNuqcLbcVmSkdiyRpwDHdKvhWtKx26RqCosF3Jiy",
  "key7": "2EV9T1CopQGJjJhMhQGxMeizgi7gpptViLuQqjqtnJag7a1D2HG8JrXUsMBEbZ6j1jVKWKF8WaizXmLdiFZAW58K",
  "key8": "4xjVBuqUX4GY9tgeasRDv9kn3CEuTcanVjkXxhrG9VR58T7fMurCwWqaS4cCRz7QsVCKDo6ncybXfqGF8u5tux3k",
  "key9": "4tubCqxxFQLtC525roX7hThTFTo3NNpA61bHr4ZxbSN7fsQTnZ2nFxu5fr7rjNKpW5SbVVeBKhGp39GdjCYnaJR",
  "key10": "QY2Ufp8ZYUxrhUb3Vny5tCyzSxwMQXggmTP3PNCmwi5igY1zGKK27yTE84VXhVb2LcXr1BCSKDJExnUNR4aXobM",
  "key11": "5d3tNRejA4qpAEBawQYabz151N8XqVuNrX5Jyghr6Qekok66UNRhfJebXzLh3yNMFjRW8faFcDQ1zayaf7q3eiYS",
  "key12": "2CRvXt9wPMVn6TQUnGTfxmgjPmxJmQLB4PEm3STv9TULXvtWqF7MjVri6WnVwJQynVoAdLspcd2BhsGbVhff5cxA",
  "key13": "1PkVAf1HUjBoXfK4oNDdpR1az4Lo2YD8zHAK881WFRycQiawJSbEcz7QGj99NvbyxHTtnqgMEwR8etBAg8iR7oK",
  "key14": "uff9PL536Hv2YhYJzHzwotiYkZ8W6YkngCdvdkSXWhGGRef6NGrepLV7vgJjVGprigNxq6GgaUhTHuWnLJ5DJDz",
  "key15": "5pJbShMjM77NepXqRbPviC2a6Tbxfe2JiYs2hXDv4nKYnnCXGXJbaR6UFmM6GrxURmEieqeg9dFH1doXUUfzofd7",
  "key16": "5F16xfTTEEzMGmmbZDSbbtSLaz8tTGvSsb34YaAjcRCrR7muE8h4dNsr1MwnNMqCH9yqS3at2qA1wX2BdCK5ctkA",
  "key17": "Tixb18QvFtUaoZBBmsLHTYddAzzdBaDo4Rq1a8BZMurXnE5ABk4b9ijmBobBQekLqVvgZXL7hwfjdgCL7gGrv28",
  "key18": "7LZ3NDT8Qyp72AfoByv68F5uqi5fRNGJ6wBjzewniAjFhPVVpechkpYqJMGAAk5VneF3f9uBnu2ie4jbjEfVeGs",
  "key19": "DujVNZrEAXTk2V5iK7d9D2QRYFZmsvkA2TrGdzQGbM25T6Zbbpbhk7WUGQqH7pvzvjd5tTA5THKGjvDJR6poBMA",
  "key20": "ZdTVCpQFcoiBjc8HEZ2yGHBF6PMaHmZTq1FhonMR7zT71DFmUH5PSvuabBAbMnvhgK7PGvkdZNQLCPzWzkU24ck",
  "key21": "2gmcnGULPzvK4xuqE792ARfaef41mVD3UYrNCFbvzeeCyLFSVFD1LtuyYG7zs5Z8za2e63ZZa3MkLBy3L6nGZ58R",
  "key22": "5nkdtYk9Bnpmcftoh8uNsQTMXNGWRoHTkiyd7xehLZ5phZ9hVbdE7xdKU2v1xVgh6DmUzh3u2ei1qGezvfvMRzQ8",
  "key23": "4ajVkCJ5g4ZxTeXR6QLXakX1NQFVLRHvWfotb5ydyK36YPWySims4Cc6o3974q4o2xkNbNgMf7J1pWPn8ktHcSM2",
  "key24": "4FAFcDZSMonYnQL4TFMVCNj1qvigEU61zhKs66y6bLinJmonnnrHh7jR6GwyhGzJ4wkmyzdeJXagMBpgk58z9nwE",
  "key25": "3reuiz4Tgtjyh9KAVYstfDKt966sFyNLZSSm6Dy6dZAGtLfzzKhgHiXMRb2FEb85Z57F8oNDqjtidGd6dMDhVAis",
  "key26": "5jphvPEKmzGkcpZnNYFcnBDKd1TL7MuVCM1Dby8cDf3nbs4ogCxp6odXYqBZCt9wLvgP7wXQgQfqPTbJTucZ45RZ",
  "key27": "5VYU9NEm2JzpSxrXi1MyeTt79uhw9z3zWhDyDoES4GcsUxnAdbT3NxFkphpSYdMMLeWuMdHDe9ywd7ivDkrWV4o8",
  "key28": "5jJujTUokhD9T4hbfvoCo9yTXVLMbwXnhwCmHfQKAESFSHkvGyTAPhNmsvH7ZGAPnY8A7aKSPFbVus7uCbFFnRUE",
  "key29": "5zJPeteAemLszsuFr2BbxY6eBxQGY1va8gzfJ4ivnACPFDbRd3MRV8iweRjpj4AJVPE2yVUxHrdRwP8obBVioWpF",
  "key30": "45QARYXG3tLK2gDnkexeZMzu8N287yg5khU9WLgcoaTFD3jHcRMvX6JM6czp57iev1tgiCqrnMVw3tJLKRdn9WKJ",
  "key31": "283h3zwHjWqvYtUD72vovyBrFVKCSbwc9uETDRK4vykuGARbhq5CXBypNF4JDTvcQCAW2ZPeMzELzRVmGBk26V1V",
  "key32": "5vvsk5bRxDJ85c5oytq5Y5HFkN7yvLmrcgtGj45qJvAjcH21qJPt7CKBxY9GVAtvFmDGRzQUSRa38UJc2zVQCc13",
  "key33": "2wDrXu5449RGzVbw9vUeqBcDaATnDJGAy5TFgTew9JdMhoPnEUrfUWtcsmndXUvYz3ZoWKr2SWN4GGsCFTNJ4BwY",
  "key34": "4SjrBdQ977QRqW4eKmjG5Bio3gebNYdMtZH4r9AstNdMyWU1Xtzw1HBM6KJ2Jx1NjFMtrxpUUHiyRedQGVemFf8",
  "key35": "3zxskCt2bsjgQSxt9xoSR6gLf2p4ZhUYjBiKvxNLpJKD6n27SoqjriLVK4mbmWHvigZ7k9evfN7QVPZkgPJ3HqQi",
  "key36": "4PPPpGgaJ5qg85FkcieSYMt4kZe932wtmBVPzFgViNPbWYtvxRmWYvsq1mJVFaqBzq1KvH41XGx6V9JQVZvSvoDG",
  "key37": "3DZuAUjLvbSCP8qn5qRLvKSMc2RohATTDi8yYTZwzs9HqF9tc7srAUj2FUAbMqxHhDxJw1ruhG9xPcbrN7tXxgMH",
  "key38": "ey8pqXJksU1upkBhHSRAoeAaAZ2R13WbAVaRWcFcYixLLQNvMFsJyJcU6i6BsJLhHiqLzLaP35BRGHzNNqygtTy",
  "key39": "5s5ZkYbYFqhDjb5Cob6EGMVmHhPkVLreztM9bQsCdi3RNeUui5LxEbdPinciS2imqRXS7S8QvAz89moqWR9jxqs7",
  "key40": "3v6AcJtY4ohDG9cMmA8xUvZiQMMZvNHR9xR7ZkP5DjeaF6j85t4ZFuWs13izrERgNbavHSf1u5ZTAQtNrZLM76so",
  "key41": "5z5x4WgtGqNt1Y1DzktJ2yH37iPqNmVXN4iQ5nPRerB5gMTn6PzxKqAjPpgxNKqbLD8gzWkJv7T8WjrQd2KteUCU",
  "key42": "3TaSQmKHJFaK7Z8jEf942Qp84dbSHSNPL47pU9Du3LoW4ZfWFY3woJ3HuQjrCuZG4EVtJxu5YbjXmCLhyTezAy5S",
  "key43": "1k2o8f44KiTaKXLezSawqZAr6Z9T54okdrPn8bPjdKPBgwyuFLwnGsHGkDsT5hHFz4xG6UfgahLdftd6YkTDDd8",
  "key44": "3hTFCiwv6Rhy7rK23fBM7rbuE5Zy3RW7Umza62p8gu9oTXZKDTRVPoVTupfhpCXwkfMkEPzDNZoRMtz6Dtkb2BBB"
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
