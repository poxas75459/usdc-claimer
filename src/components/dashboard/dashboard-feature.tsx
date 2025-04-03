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
    "3UYWdow93LqZscrPWYk61Rnn8aLNS1tFSYSazuAAHHv8xZG3U2WyZwHVdnD2A18Z9AuzqJJ1tTxmfqhceZX6rhTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ux12UsFjVhJhuoNZ9kboQzCmGh2BQZvBGV7kSs2jxBLLS4h98VYc7Hm6TjNeDfz9CTtxrRDfqKgdYdB8iXLMHvH",
  "key1": "xovdGxfSytoTmZ7vaWdRWySX85cEmbWq5JJPaUpYnwtFkNYAsWuVTo63n366Z239rjSKa41EbGJ9PvZFCyfwozs",
  "key2": "2XjsJ3qtFgMnTmQ8sxf9tP6Zfp4swBQoDrvJsSUhYJea8WvPd68yCTZKTTt43GAjQxnQNZJdsC9wjhwYmkVzxZdW",
  "key3": "hs8DrLMUFhBo4zyp5q7QUdT9DBYYYWc4BNJzbex6SPpXwDwe9UycaHM3uUJakvZxsrVp8QDYtFje2cHsxNmXLXM",
  "key4": "5PP2L8bJjF1EZAEmsTvpao5Zze8bb7oY8EV4HJ5kPo1u2y23ZEWwWZZ7GWpZCgfzYa5rLWnRbd5mvmtg73cw1ziB",
  "key5": "4x9G5T5Zo9P1gyXtgfLkv1eZCWV9fNaqupfWDaE2SxxSLyEvTSpsMPj3zVXWa2ZCfPRz2mnBmYEwx4AQ2ShpjwKf",
  "key6": "5Jf3Bv3HayxTsQgz26rLBNkZo8HnvVpFiHViRU68r9KvPx7yRh8XCMvt6iGRFrDCBTifQDvRZLnzS8vNUVejv4gE",
  "key7": "4C4BLfUm9eiENcv9eL2gav4FyuSGyL8HFaAhGzJe7cjDueyAkiTKYjgkCFwJf1Fe6xqZFWEHBhmDPYhNtCHoSrKG",
  "key8": "5np4rWd99JdbWzCL1mKknSTKMinFL8F1GjKH8QQbX6CdzehLKXHuDo7vM2k8jiwZNSaq8TTujdqCwDiUKLyWGcor",
  "key9": "2rrXMQWqwzuPaTVxqZ8o4Pjf454FxacS6HZYHtQghfiJEYHuuvkeav5NDGyaMBiZ5FPYfXrpAW1ZvPuGHx9rPQq",
  "key10": "64kxTQv4oPzgzbM8miGbZHdEvbZKmj9vTux63LwQy543UFoXmgCssonXRFyzLti7ex62fGcX31PZ8xiYMcem4kDt",
  "key11": "4WnYwBMj71QPiPwP6snLdFgzuiEARG5vyeQtqNy2nYzb8ToYrnep34igzGCjkUADvMADf69UcdN86DBVBAqVarko",
  "key12": "2VHSGJrvBBSYi3hbLjbxKJFUW6j2mUbSEjCMzVpYdLsAjodm4TaKd1PXPDrXzuvmAbHA3JLRErdk47SgfKeztJfk",
  "key13": "4PCr36f1kwkaaXE9thuP85CrU3gYmpDi4vEnjrpRFTNXBvCUmSMqXAC5Y1K51grQVzKGWapJ9o3JaQ5efjfR7eTG",
  "key14": "35nh6f92kzojDK4hYWcQf4mZg4k8iqSt1ZhXyxYV6EApBh8o22ifVNSNd9v6UhDUcJoKaitQb2xC3keS9AZw3xqS",
  "key15": "2eF5aEGBi6ZWXb5gaByd4YtvujVkgCwJMTTVC3gj9BNxp7RQBphEgH56Rf5nhoNbpBgAX1YgtRGeJBwZb3vhdXnf",
  "key16": "DvzFDQxY3oh8fKCC4hE6ofST9v848ucKqXyQEtC2jFV3ZfRPpKg2sK9cvnangrH9NYuGKunN9xpKW3JxM2VhcUA",
  "key17": "3F5BHHzHb2nSqnsZcELr3WE1fM5G83EF1yLb5BW41dQJ46RzEZpm1yUhLwMetEqxoYhjhbaSJvzAyEabuxNqUUg",
  "key18": "3qY5zB9McZRGiPEvSNh4zfsrNemnfNGkaqsmqWq6A2hDmAPa9QtYrWcWMwCnaLbe2KYSpXbR9b9kjGEwrqXcKj5i",
  "key19": "5vbvKfzFLEKmrRkUaTirdMxkZNUdVBdv51kJfweLsTXJqH5pdjJ6kh1Zyw94G2opBGRGWSVdvUEkMCtNZMCVgkKD",
  "key20": "5VZWeySwBneJGWbPdyX9WguM4VouJv6Tp4Z5eQ9QoAs99svsyS1Z9Qc41Bh4QwtquYMiacQcopsVqGrLi7a75PNJ",
  "key21": "27bggt2uveSrvQ8Mt1QNXX7DWawJTdKTRxgLJ6QEUWkx77Dh3gjv7CcuJf1UchN5Daf1WpjdiuZqyCBgBW2MuY4x",
  "key22": "4R23PHVUVp1F3mLwgFajRAkV9j8hADWBJ5DzYSPsdLzCU3Mq1jUWinH6i1CS3qXVCfboja8MXGUTnLfPQYRr7pTN",
  "key23": "3JbzzVyDC5JJKdGyTA8zvNviD8L9TVDoNC5aynmaV4sCefESpbZAc4zH2SifWPENxj1r6PqLRA6cbFEkX1bFvR1f",
  "key24": "45Q7YpjJ4R94Yu4tdhV77E5KvQkndquNacgqBDXmYUGUdESbkZi5FLW4mXo3EZkJ4jp1qXG7SPMZLpJMEPCfCGE7",
  "key25": "3YWNy9KWUzpePJtB4Ss1Nnv6YRMSHRvu6khShbK7HZWmKXeo6VsgcWRzWQfaeAy53oBpjL6V9uxq98uGpBF5Lxuk",
  "key26": "4dMuqbLbAo5XC2mDszzLeuArWzAJ3xs8FSfrk8aSSmgDFupC8YxaMQ7AVQkhaHNQaewyusgUwJcXFS9jjBPWrZwt",
  "key27": "3XwxzKD8UUfqLKJK4uZuP9ptoQsZzJUQSMZGmPqRHexp6nuUzjEmUXuTe7aWET9gxwWgD7fbnfsXmEoP2YggyNwM",
  "key28": "3bS4ArRyu73UaNv7pzNGjzCmqdkAxoSxGk3qG3uN8DEXtSqGPoitibZR8qs8ThBnUqxbErZ5xSkXUxwCVJQvL7BL",
  "key29": "2kNPyb6cpmAopFyg6cvX6qeH81ahQ6dPRusZRcTAfumiZ5KEPSX8WQNujngKMHciJgTRAPcJ3uYGZ6rMphKXJnJT",
  "key30": "48AD7WAFbgGF8UEXJZAokaZbfdKcKaS3XN5ouY1QEQeL2Bo1YiZGhZj1bvMLrBuotqJZEa5K22VyRrZWAStg7tTN",
  "key31": "5EN7sZrngW4kBs9YtACBMPJR3gyJGGoBsshfxKNg5Uui3iQjJ8itof59UnXCX4xqbNBVQPdHnak111Su4tQouhr9",
  "key32": "2t5Sh2bHZ7kmEkDutNrdcFtfQ3jMrVqSjaoYUNxy4sDTgACLN1bvziLSkZqHEJRsx6VPhmz9Nk1iHQd6XKCyeNKD",
  "key33": "5jvbRUhkuGUhxDNJv8iQ1mYzHxDtKd8ZEvsTvHdwaLijDvmVPeisQzLvHDfbaxG9WrsWHv3x8fEVYqSMvGxEgdUi",
  "key34": "hdwz8Bw3eojK5Sy3WCMG64LShgEGQytiaMdXHmHBqdeu6CbY1XR8bDvwpoQGU2qPb3TujAziSJiDwtDQJ85eJFJ",
  "key35": "4FqbvJSTdBvskABCGWRs9vrgFAprWGiD1rSpgSy9XHFXuvPN1vCzFnwk72Si9kcUaHLBoPP3W8jEMYkfUimfwJZP"
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
