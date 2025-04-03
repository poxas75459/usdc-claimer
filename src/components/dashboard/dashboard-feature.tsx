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
    "4ydW5A2TkvyEKDjiSjqp6Xxs578qaQrLTbi5dZ1mBKCpQfAV8UNQjhYKUBWtUpipHLgEK88oa8HUVNdnb1kR7Pro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "461nJBS3QbxMWACjtWFBJNiK9iLLrzbpJCSHeefXAoR4zHj3NAQwdHobV8NnAcWd2RaNMthYjPkiZKYLjxKbPDCV",
  "key1": "3Tt5YzpkxM4PJrX9PyoHJWwn9n3rRzy1uCrHYLaNQ1kW2sC4NkTTqhQG52U7TZx7WdJ3N1R6ME5sJYD2K1wVzfqV",
  "key2": "61nFXLoc9EvhzTtmfKpntEzU6AyyRMbkgG8AM3CddVaFktrpDbyBsecdwFiHBUbRwuCVg7s9bWhuapk5jgWbgs8M",
  "key3": "49ahGcBkuYQ2KjTtPsw2kMWK2VP6sgDGEgihbkFsbTQnAoREE8LwN57EzV59FMYkdeN8e8MXEqrVnc4FnQusKfzt",
  "key4": "4hLQnS3RmnqRJPV3am3scqznvSDpEMWarpmtYrFXhXMtGHftwY4xdwmih92qCAuPfshy99Zv7erRQgm8CKTWjipU",
  "key5": "cj1p8ka9mww5XDeNRm5Q4DPvPXsdAyQtf9US8eWznta9Zjs9XfAoGtJmcSxcoh55HeyYMMvXGJ1bnWH9iPYJw55",
  "key6": "585zj39xLvrKpVt9wL84ryfmhEXEwWy12hBJ9EseTuHxDiRL7oQgNyJUJxwBTPXEd5bdMBp3ah7DaY1JQgdqG75p",
  "key7": "5nQxQpwAgd4CQjzmEFsPcwvwYL3XdfcKMrPnxP4b3hgcaWUC14VGgrem4gKkjU8Lc5juLnuWShr3KcH5Qrz4Y4fJ",
  "key8": "5mQJPVPYyCFAaj8AZZJTrKSEvZjMvkavx3HWrnoAfwbVtughupYxkSSy8L1xFQMGX1wYt9K6h2axokdB8W31zTv7",
  "key9": "53JYC7HBRZkk7B2xHkGCfSS7us74zx8rDWdLVTTFDrc41Mk2fe5MdEJQDMMhzd2xzuMXPNvLTqHvrU4imr2fxMDy",
  "key10": "2VqZsJE7hgzJ96QGaEZeaBeyHkurtm14G5YrvaQFGizhWGqx7c8uM6CUJZG3D2qtxtupLRda8dwU8Hu53YGy7nzf",
  "key11": "452gjU9CMgZ9U7ZmPWkpPb245yTPDNjtXo2a6mxeuwZd6yXPvAvLNbQogV9kKZGqedjMriUcYWnS8pjZy2oix1Pn",
  "key12": "5KYNeeG8PNfF7dSpGJNwf37mpexM3v4FQzKvgz8msvF9LroZ8XFrJjLUusCcMY7UR3foEtvpT8Pt5ip1BJkcXe7G",
  "key13": "fB8L7AE7PRhehTkV6GJATCsviHx7S8jy9KqzY7JsD4CrRibczZKxoE3HwT8fFkfvpDiAo11HayqHaWpmrFYtrj1",
  "key14": "2tYkvCiprSsD7HJgnaLXRhgzMYTeqXyB6R8jR84BFigJvyUMPFvqcdM6x1EXeA1Gah47jkzToFCtb3EA41FNSnFa",
  "key15": "28HfBQ4XrnCyxZoH4MZooDo5wK4CGDuJmEiXBzqpA9PBKgE9isZ9pLd8eJtYf9Phq5DhV6LDZvoHHqiKCWxRY5d6",
  "key16": "2fLHMt2giYonstrnwk8WLTTycEc5NFQdVE8PFwMXJFUXemws1RYpfag3ntrP4LPoZjWFLc93iNN8vjVg3kjNWjJp",
  "key17": "9G5QxgVx4ekSxVzSnN2755xZdEsbvJU35PzHqFXme3WUCTxmR3ahkYAMcDytpPzFyWXRmKVJxEwNN7i4xbWbvSb",
  "key18": "3TcEzUYWbGAQjfyPBc4odmb7fxiqEwrNpb9tVkWLUaCr6bfTpdqumrw8o8Ny7z9CMfEpCUCNks41zZWgmdiAMeWK",
  "key19": "5vB2pi9BBSgYqL2isALQX2jQrvSEbU1imLtnuS3MSzgGUuSWdujN48FNFVnreWitT9avRwckegxHibiNJ4Nq5w3",
  "key20": "3GvUbtGBU8xyJtAQFTEYWqx9qZjkqJHjrvbWtzCZcriuv5shsdfbaSSwLHkRJzc4npxvHGBqYfXLhaG4Bq8wJ7BZ",
  "key21": "2kJxhdaGKjTcz3wrAJSpaqnaUDXUxp6zPMP122NKW15X5Ma71K2ft6bqapCUj1yt7gjYhuZwPPwo5An9wF5tNrpP",
  "key22": "6jURhCc3TYThLHGUKnJwQ7FMQ18jDKsCYPoM1EX4KvoCkQY9HTTYE2dwVuQshwW1VQhusm8VfA5Z6rSar8Vkbvf",
  "key23": "5cVJKB4XJSWZYiSFJAUN78b1hgT5c7LjcDQjuzWFGf9KBt9saHTwpWDN5tThYoywQELk5jNPz35k8Ufnnd9Lvkse",
  "key24": "4Bn3Ri16duMAsJro7UJrUDDAC6dB1oARArTWDS2nybkAuh4wBJR1BYnF2gBhgE9w9bEN35sq83pBq6yNCNC1Ynt8",
  "key25": "42zS4ybDuhYG38fSEb9FSXzsD38rRzSwWjDsuYqHXh3ASVrtwvUvR4ETtosMJbeXyo3iKMv5xrWo97DsCeZUNVxS",
  "key26": "5N52La9f1Gii8vdLGuHZ3dJ7pUJMYrDWMS99Auwra5tFQCUQM4rYiGDqoMWPHzbkDRNgvTwgfddaW84FpS2R3H3u",
  "key27": "47K6eRXdGQheeaAjXcYRvRATpfmK9gnLQ2BdDVGo653wVJNMq4vk2oRXn6FwBJ627Qv43CZEgZ886bW9SumZSU4Y",
  "key28": "92FmKNEQhH4CXfQrzVPwTT4yaGn8th1vDytgAnkn6wB4HnoVnzDaqoi5UYWVXe3VnKbvVkcBqRJHKQP1phGWhwk",
  "key29": "3JehSxj1WraqAyX2yKnBy6BYDmPf8sRsmsz5bKQbDbBwk1unhK7kHHjArbcMWarWVNxKc9LHJ6yrZ4j9941dDEZ2",
  "key30": "KVmQUd4x8tfvpPpK3hecwKr58j75oDyLezjuQ2BTSMjgKDd7q7rjD77ntHY24j1L1HjxeU9K2fiDkL9FJax2X6D",
  "key31": "2QecaaYEvW99ddwTWDfqvBeFkzsX4JUAn7jtmNxhp5g15f8RDhvn4LQpeXN9KmRotAyQkdFrpuYAd7U3BGMyCW1X",
  "key32": "DmM1hR9CRuT5kbgVd7nVGVzs2tySRQPqtHnF4SRsLuta2m9nEkZYdLZY3zKLWtq3kR6JHrsQoDaGA5v8H2Re1AD",
  "key33": "4HMf1t14NFedpcFPhcBG2JhdiX44vvYN5ikqbkcVu1TqCVA3kBRZ7Qdkr6fA6KJtmxaiaNEHH699kKHqPg6kThBd",
  "key34": "33UiTNAryE8FMPAHkeoaJURWUfvKdgScUV6mQQa1CzXbjXsP2xYuh1APbSwaT3tczxQd96pdYBXPjXSuXT2XnQXa",
  "key35": "3rXwbp7rSJGw15cg2XAu82X7e5m796Jyry9g76bMSYs3tDLKyabC8rU3yAgFLaFUX6QyMofHwWA2HDYpABYCXmHv",
  "key36": "89xPDLF5S8LBiehVgg2xfpJHr6By6nfcdnJYyj2BAstYomV5buhW7hWcxhB1dFeW1Tem4frdyf5eS9xXcqng4ad",
  "key37": "2ipmCHiXHaybXZWCp7b14KYzHwQqPFS6GzAziQfYcg1x3j3ZMhD2buzKyp5trmfgqL78NrXtfXUzQbcfLHsqiXTy"
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
