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
    "QJMf7xmzpxTJ9yTxNx8xfCqa1zD6eEDPECnndv32gbA6vnqSeExKcKwvBDhQY2VXXAjXuHf4iWsm2fswVuQKTw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4yct2Vxb1vkQn4412uWNdTQVdvV9dzYJK2zXjy7iuyMoXN9Mk4kbPXEJBmM6soSbKKdFaY7GDL73Nx7HzbcDNw",
  "key1": "64Q6hAWbkHXDB1ciBdS7QmVi59BAqK7QwExNus7Nxzj9bP8wBuLJLgKhdeFGGsnQp596p1WCV94cyiPEpB5vfAML",
  "key2": "4z91h6UgeZn5QyuzsTFje4i7MR9NNbyeYj1XFE2B82aQTtt5YLNytwCZqrTrHr8tabVZFPhTf4UHA2AyqwKjxmS3",
  "key3": "4aCKJGeLw7K5PBZ3isR4FquZu3vecn4K7C5QEbMxS9za6m9MAf7CnoGsoJCheFJPC7zktQmNFUgv7CcFU8Rntrip",
  "key4": "5WWbGwp3SjNYfbvHdY4h5TbwmoSPbHX6hXr9h36knFTs57cpHXY3pF5GBqiraue5fVif4izzBCyzQYESbsKomWKx",
  "key5": "5BQo81tTYsxiEE39Vbu6iy7vnRMq6NX8oDmzEtPgpP4WP8AuSLSzex9vKmXHs2ZF8dHu7meb32yT6yn45QNARqyf",
  "key6": "KY6engFvLFe2SZzLgb6XCfMAGE1kF5iJGQRrjrbrQJbGy6czNg4bHKvQTqDMEHo1FksouAp52oZqnAoqvAgG2aN",
  "key7": "2FoMY7aLadAhZ3RHUykqfGTvX7wBb9stjrS7akUxGj46ne65uaZWmAUzU9EbYmoAKjabAtptLNLEQuPJthkP4wcr",
  "key8": "5q5SBdixUHJUWnVU82NRxKdMjtcpK2xY8TynQQimuT5ESoKAEbFCYwqhp68Ab5pZx3FTE9y6EaEuTgAhd284zDBh",
  "key9": "gvsxp8yL3W6m4CdyCwX5VZGWeHJ6LpC2n8rJJQgkzjeMsLXMCb62CvgBKq2gwYVGYYDguuda7cRb6X24w6AUccg",
  "key10": "UPpmKsHEgaKgNu7P2ef4swdjkRxpofk5pCDUkEDFX1zPJsAyfJP4TKGt68jw6wzeQYaJqGACLL1toHfrcswdWEp",
  "key11": "7Njc97ktMiP1anYKf26NFsDYVz8aAHGWSPrrbZTtWD8xT9p9aQ7cFLJVpUaqtZQrNrNV9AmE7drKgJAtHYHa6pi",
  "key12": "3CWYVtvALWAkY6Un9fN4sLRujjHgbBjYok5KDP1gW7rJkw78oL8QYUJKhivx3xVvGYNN1LxffDWJPbGmJbJnFTE4",
  "key13": "5q3kCmMxBY9MjFLQr529tooU3DYKQUq15cJQyyQDuFPoCAtTHkoZd6CjWkfkc8oXDz6bjPe4h47vcHvd5J8kNovn",
  "key14": "4N48qqhx2XHR7Js4bxNtqjT46zFbHbFBgyfGCBLT3g8JpK2Nm2rsEqeQNqTG7tT5cd9bcA36XhYf6bgrFHyE8Z1k",
  "key15": "2tCHjww2fC4fk89Cz16TVpsrsh6aATdDWtiGs3THWNY4aULGDTsgWrMPC5Z2ntFSW78bgwHM5tbgVG7ifc32xGGL",
  "key16": "o4mmssiuyAae2xQN6meTFsocBwkhrzzd51Uih3ZCuFngcXgi4AMowhQmcLfaxdGaNdtNXfcQHCy7MoaULq2WAxa",
  "key17": "5HusbN3Xy5Cquw8eXRBQXn5GLVwnhiQstFN6C6iu48QL8rhud9yhnWBXnzFQE44b63DjnYcDkzLKT7gaVoH91rg",
  "key18": "mhzNW8kaS8CXs4qiCxkyERpurJ69k4j7JGBE72qZsdtZpPjqJ4UpGkDDLTFLxMTTTwTgbTBRxT36PHKp2A8vzi8",
  "key19": "3qXV5GbSEMvfT3ndhnxRRCdVQ6NY9c2wEt5jPYauybikVjMu2arXWF9GTprFXWj6hDsJv6dWVGcptUpCPg5uPH4u",
  "key20": "DbkgzsD41H4Na9WjpEH76Ps1YjWnfAkZsxcRjp45Lyiw78Nfq4DGtP36uns34qafRUkAYAUR5FdhwjhAWK2X68V",
  "key21": "27jTn5x8skDCyZDjtsrXByz5LydWJQai4ceoHTVUG56HJYUF6vSD5mBeopLcsconDBWsb36Crz9RTVVcXWxABDQJ",
  "key22": "3hZPtpXuC2CJZ8oJhWpAW7ZZJNRx2xVh9VpVkcYZV7TGT9eeBx3KtnV1bFswfQkH1Bh9KmCDoigBVNrSE9U4TX5D",
  "key23": "2ZkjndzLgCZFpLUrojfUi6VFFNxHgm56YyxvbKPN9ee6DW4aTex1RSRCk6gAnKqPGfasCqDVbM1F231CjBVdu8iR",
  "key24": "4vgjtuKsafS4jCSBiey3PiKQnW6RjUa2FYRzpXxkoAdqgXszcXU9HtRv6SHAdoZULRRinBdEYAsrUXyUdnUeynE6",
  "key25": "5MwSFKC7ReyqiZMS4nwWVaDYFUQiMyCUujq1GRKNAz8WcMCfG6mWAGM6v2AGMza1Rv8523GUdwuku37Vyt32rnsa",
  "key26": "5mRhSzCjzNH6hPk53YnN9tw2MsjkXF9fx9N2mJp8CHjuRbaQmkGdg1tPGVEFwUbhS8WVb2XxhBay2d5aR2bTtxAy",
  "key27": "4mH5d5peLa3VQCSL1kA8EKvhsbv8yJ4gMkdzC9AhZZBik3Qs92Ku4XyGe4q8LWR7Ma1wNiWJZa3oS64rd4YBDnx9",
  "key28": "4gUhsrWvz9Rnez81CucStLwspENY9dckg9sCxSNgi61NMrUXqaSb8nxj1aEKKnAPwYxpDiz5dGNAyu1dUdrYstxE",
  "key29": "3hnm2XwZmZYgup7ec3cSCdWFN8EP4NnYxKeQgiUtLWX1PNJhap3aGH8CUpLtEfowfH6x3qonXcoZoXnWuSn2nd9S",
  "key30": "4beiawgYz3xiDwpPEbDmZ68S1vLCsrKZy2ofBsSqzrfYAKw3MxWLaxHg8914CThwHjB3PPrNpRCbqfLtQK6udDsN",
  "key31": "5otyUe3cpZiTTBdDVQ5pnMvLvR7kaBh5CiBAArZ5tNPiYePug4ujoCmkacSsvQFm5Q6b1fxjY6og1UahcFyiLjkd",
  "key32": "3BNGd2jj1cxeHd1zXnr66FWVykhVqoSudo4LWeRYMDYcM9E7NtUAwDN2oBQ4QRPab5xtE67TcHbdHrXENXkfW4Y5",
  "key33": "4sB4Zdv5C9Q8hbtRmtLZPuyrAQAvwyvVV29YHqyqztNnY74SPufsQ7U3r46ZWcEcD8UTebCGKjMygzgjPNYC2Nxp",
  "key34": "5EQtsmQUkdrsyXXfpzwKFMeLB1kUB574icnrXXSgU6qfDoLxvAgmRSTRnQ9RMUoR6S8LQYz4pd9zYvTndsCBPa6m",
  "key35": "3EyMa4v7G38grtqmhSfrCPmrLi6kxdCivUnbWUxKviWVy8YCrVXbZ2UtRwBavTxNw9E9zepd4Qtw7ZUY88a6GzTZ",
  "key36": "2j3Jnn1f5SxaFjgQrU3sHVbJ2uAz2k4JSwp8UuKHeCLB9wGu9VTTFiHpS6ZNN8wFiP17YxNsKpQQ6222s1JY6bLA",
  "key37": "47qn8wtuNv6PSTNqzdTFVmuuELaws1vCPwUCehKwhHr1XK4Y9KCfvSHGtJJj5Tsg5GZJ6oVzrQFfpfbkog7ooWdL",
  "key38": "29wouc7KtKzHStaCWn9xxe8TU8LGZjruoaRHwkMDfD8nsyZCPcthuLDPXPLLh3v3rb6DKUobnUWUUaPqipawshHV"
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
