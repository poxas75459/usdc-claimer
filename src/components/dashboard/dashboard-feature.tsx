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
    "3p4eyJGoqWHbHjTVGazjRU9gP7cmHpFGyHj8B4odQB3bDksTSpCAG1Z61tL2WzoYpvum5N7Gq5To4DA6XM7sYSwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bKzseW8m5Yh6uzXP1UPch1QyJvSzdwLsp9hS9YJ7taSWJv9aDKRPBx3FREUkfzP7dpwGgqu6f7uBnZGzr4ovggx",
  "key1": "3xm4uvcBq8H7ZADAoGe7G7QhnY7Y774Fw6x5yV1jqqTEJ6FoXDcXoQvmVeGkAwrFCLVq2nYq2CD9onYvoVD3U3uj",
  "key2": "2vfh5gTVfrrmuiyhCukGbXd3xVGdrTQnvdGfHGmmKXzvRwz8KK8d37e8xAkciGniBxYu3hLCWzShZQgj6Q32b4qS",
  "key3": "3dat8ET8UAy8MECmcVRUMPDTqdThBzNugw3bqRspPv2eDYqSY17P2AzTNBqA9nVwfMMAPP1cpUqojYTaaHZKwC4B",
  "key4": "3SJCz8zg15nsURZvwbSU6xSyacri4T8kX78A114DnkePwT7zcd7XfNe6VcQWHD1p9rGDiEUv7V3jxctHc2L7AySP",
  "key5": "3mUpY76qZSKG5VF8qZ5SQWdsmVpdmxUT1WpufXdm9P1pnz3dpuKjRMcQYKZriXG75QjcoYa7CEfoKyRYSpA8FWS9",
  "key6": "yKudnNdYKfH9J2C1b6PTgEBk2SPzggFyDCDv4mCkpLAw3vLvpF4E2uTR2JaHakqPMHfepJMyQ8FLJ9UYMDjebZp",
  "key7": "aXYPZc8iAymktagSrLH7hosZqsc9fhJLxrivC8dF2Pq1Cf42AA64XsHBb1EZ1Ez8TmsFvRZE22PkAM2E2UnvNa8",
  "key8": "5YcrC9MjWECN9stqVvwb8Z8wp66zG9LFXiSWCQNGxuHoePJYKn9MDism8tgEE7iDETdPvSbotDoh2kkmaKNiVLH5",
  "key9": "2ypP1x4gaC2NrNkS9u5Kdcw3gUPaPaJngWJCNYZQL7Nx79jFd6NbvfZrJA94nvrk9mowP7JzX8iGK8Nc6U5T9AcX",
  "key10": "52aLp8uB2G8Mka1ziBBcX5TQbJjZB8VDdA3Y2oCyu6r19NDCjg7ERzSecu19e5Fc1hTfsYM4cLm5XVamV6YPJgo2",
  "key11": "61VYR7eMUbPRviAzo5iKLwvrbFxSiA1U2rQtXngSJpA4N5SErRGt4VrNUrekFWcCNiiCoQLikGi6gcGa3oBq2CWA",
  "key12": "3ZdJbgAwKjtkWrYozCfHa9mLvDxfyaWnpHtNPXxLjn28pPBAFvDFhChdq3VRNVYjH3ugq5ccxyENimg2UgkHw3oG",
  "key13": "4dfL1T5gWkFZXMkbg38RiCEYWC8aQEoE4y157W1zYbffeotMxtRoymTiPZeNm8LWUByePmKg3ejCTrqdAs6G1BGv",
  "key14": "4RnFN1QVjwbG1oUuusKqDFHahVetB9Q45xMfcy7S4jmt2unpFRW5aFidDmMStPa44noauG3YLyp5YSoT6MUzWA9t",
  "key15": "49i3qSQXZdQf3CMTP66y3BX7m51gAJF8op2KK7RvDaYGXu2fWfo5KSSQHY2NDhaFqoCAemKJYA5iTcfBLyg8nFsf",
  "key16": "42gsZJ6GH5Y3NXPwyGUC2JyzdMDgrBF8YkoWj2EeTLAjjPz7j2yi4uwRdJQyNLMfJFDEowg9zdLztFUybEnxuPJR",
  "key17": "3P8iEMAqddnmRwdYYbZ7Lr7uKafGrRMJM1UYikzGvcYWifH2EAacSGbEWPvnsQaxQ2NoNLUoLzLDLUVoU59micRx",
  "key18": "5t13X4ihpFeViS63QbYNLxT6pAtVVprEvYioGr3ZhUN3j47H2GeqBHUGiMJFePuB6G95kAktu6T5FNuFrQ7nQVsz",
  "key19": "2kFAF2uGQsqdWmv661iwqm6qvGLuHtj943EmkMiiyosMzhR2sDorLZUi9gcmBACHWqdbZLsNoN83crh6KAxZKxEg",
  "key20": "4oK7M6AFFdmB2HG7FVw2b1mZhYWLzBUGKgVHM6U7b5JeyrvGEwMy6vejwLf5sLq2Kf9pHe29p77FycmVqtBnh1Bg",
  "key21": "sxkvejzLehuw9W38pJ1g5fRpCyR5Sjk8E1NAr6qadpmmLGarj6L8ex9qrk48rPHHDHPHM7bxeC5zqBH4Gcksnhg",
  "key22": "9mGZgRmhnbT639tDaR9NjBbbuGM7YTebvPLrtWqNyi2mH7tSTS2anWzSzafp8SxomMsk4FX4pfjb4NzCr6iX5hJ",
  "key23": "2AfozjqAJk95sEhMcEcbpnCbipqhu9D33rY2nHRhsY4yQ4SoWuUqAJkhxmQdwunnMS3U8bo47sXXD14ifbUTdho8",
  "key24": "2aGa9YCqTHVySHGQZ8USzxVog9KdCF3Txdz4cT47cAabNKbiUNzoStgHdCcuNjZ7zcmGzUcJtVz8CMots3C3hvjE",
  "key25": "oN14N2E2fCbGxRK4ka6QWMf3J7qXQiWZh6YMgo7xwE6hQtwT4mjjAJLayCYTLDw1CcKhgcP6pi7gbrVs1oXDJm8",
  "key26": "fGfAo5BTBQcegqmEojK3PGNw6niBqGqJUVwgkvWHk8psmzEHGoaz51opjRzfT5fZf8U8R3e7z4t9B2rhcoCY4Ln",
  "key27": "2vN272JBcqiTPosQ2CCHazHdub4USL5zMEdZkTW3AHmY3dJYd7D8L8bXuQS9eXei5xMbb5Zo7rUGLkfZ9LA345ns",
  "key28": "3tYzGUzM1CgeFvWLxLMqMXctrLZ4rVzX56xqHQoAi7iKzrERQBexqaeQy1pXkajxsB39PsWTBAG4D58EuxVNiPT6",
  "key29": "5Xg7CfTtPQKHCam196WU6XiTtVwcyqujiGeeC3drzQu5gF78qqhLJJdJAGKaW7wL3rjCHXybVK9gLWyDWPtairbb",
  "key30": "5RMgMfmtvr1xddZJaUiq1JnujT7ZREJWhMcFqNS4ThADbe11J2PdKkznpCWF7y2XHP8hnK6tGHkNNF5bAmUFkP7g",
  "key31": "529VydGAASZAnDuMf4jN5PwVL2Z9VeFc8dCAB9uMtBeMvVhRfczTYuGdsXkD8rusVgHokNWh57TNzuyuExapLjCh",
  "key32": "3XrKoMMNVEpfSr7ELJv8K9q3kR4vxy4N9eaCx7RKqRgzZoLV3Reb9KZeXnWpaSWaNtP8ZxUCsDvqp3DVkQrSjDzp",
  "key33": "5FntJcMgwgoinz3iYxdpe88TCmmWms7YxsErhr7nDjVzd99bwr5GmScNya8ZBXpBjTYwt7YQju6cDcNJWcAhJhuU",
  "key34": "56UxKNQjLdpX7M9s1H6gwtXGrEDbXx5hxKcKDa2ZAgLeQdRDVSkmbCyH3QTxKxiYP7Yp778yLmo9A7RQ4onEhNoh",
  "key35": "4quWKuLFBY5duRYwC77BxbDPiak1gS9kAhasY4p2iNDG5S7TuFwgvRbsHzq4DtCXVHFUPLStAbxwMaT9iLzsZdHi",
  "key36": "5i9h1WQMcCU7B4wJgsbMQz5x6tQgFraimcXPsSTTTWzRFkdPycYWeBXH8jhgw2jX9udtaoBt1Kf9ip7dUKFRy7jx",
  "key37": "3k2n2LFAe9ke7GxpCpWcDiYkBD5C4yx6hj1QDwEmL7d2wYbGK14Ex6wMJasyPoNeW3pmBqATEbEHNH1tJGN5qwNJ",
  "key38": "4rZHsJrgh2zAM3AUMLyHyp6ksQJ2WeBWtHuNwa8BSt8QihH7W2QyWKvMDi9BmanJUHf9UprUrgD6HpgkuE1rL2Ye",
  "key39": "4T7fcYsWyMMq7sz8fyxUFaT5yrFw6Q36gk8XxvzomB2xQNeK3bTb6nPuhHtCAv8vkpbq1wUCXv5TCF3RhQR9vA3r",
  "key40": "3zobDwU3PZkzWzPNakriytdUzcZn2yuJ1UMAszVDKvoAeHLmTBhXYS7CkUnggrZMnmTgC8Jk5JbmXTp3vFhzqbNm",
  "key41": "3417GYgxvNqEwyMaQvDg4nwyG4y5jMeUgEmp6ScirMoZKigQjhMCYyZfYRLJpX9BsnqzErvw3Q1Decj7bRPicghR"
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
