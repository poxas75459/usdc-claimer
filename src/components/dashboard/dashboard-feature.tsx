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
    "4h3PabJibfTDwHHQeBkbVoHBuLVHorvXW4XEBT4FETYb4yRdYc4bb7SyugY9uzLD5AV6B7KBmZc1k4RgkyaUhhZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2diMY1WUnM765CqrNBVoNB1pyoW4vtMn2jSjsZVYn9QLABgcepbpa9BCSEK9Qp6oYV8XmErsms7RjaUsxAtAjz1d",
  "key1": "5xJUFj7ZNWuU5RjttMhiLLJaGwNZpVqP7zKEDe1UKhomqKEmGwfEpvkutVC286hzZRU3wmAYU6W7eZa31hgRgMrt",
  "key2": "i5MRPatdMfdt4y92bnv467c1mcGE9FiobnJyQS4Jk74WEKL9TkzbKZuVq6MfTbEyumvegqy2VjtEUp2aoe4qbiy",
  "key3": "yi2LiSTWvb1brqxhbreGjxbHc6xY25RVuUh4nhXMoc9GUFKR8kQKuP5UiuLZBxcFGSniS91u4qUkq9YevuithPR",
  "key4": "f9yCko2ERVxcTDC5toHjW7rQs9PRH8wd89bkswoxWEwq8zn5mCp2JVV2pxFwhE9gBnYJQpKuXkdQY8PUzx54U4T",
  "key5": "6AnodQmi5FUbqwEGWzm1fa8jt2LLwtcLjRvjwdbX24Pxuc5m7WNCCQ93gB5wXDUVCVFbh4z27AL9MBrQpNkwMwM",
  "key6": "4FBZz34R5d2y8NAnLkof1k2kpfvrjtWkM9VQoNpkWWhBqaZMijsVDxqM4SvUaiUE5Lo9nJCzUcgN9WWRHRSo6b8e",
  "key7": "JhvdCcfTCymzjgHxtRpAahcyjhLpXfU9bLcPTQxARe1HqXUeH42zPoMuTqsDFPLWSsZ8TVJrmKrUeKjFsBXoH36",
  "key8": "2TPDcf7G9gueHARkLq29aChAA5cd2aWtYA7TtwpiM9jTvvMZJay1PkuP57NnRA7YnnLPkG4JrDNTqVGLmo7jxLYP",
  "key9": "4vJzWP7UyT7dfeQi15RqxY4FFZcFWrHiVG6JQet5ZzHg4i1RBC3LrrvxggKmDZqfFfMgXogE3DshwGQ9hiQiMYhk",
  "key10": "4hWPsqwMJWERU1yVLtukgfTrkvuKhzN8P1j4tgDZfzyttQSUvGsf681LYZnRAEpwHKNuE5anBc3V6s9eUgU9unhA",
  "key11": "33x67eyJUWW7bVucDWVsYyKQ5UgH5bcnJcyS4ytAmor4md33ZDfrqgnAquT5dHXh7out46r4U9z3DDt7BpoRFgBM",
  "key12": "3jjsDKAnYkBP26QuThxaUL5MCZiVfKLhN3J9ipSqLKHWvRtdZk9mNeVqCo5p8vWizDCDkNvTwydBsdZ64QL8hJ2A",
  "key13": "4qhqVQdaA5h8bZpzrYQ89MJWXHNZpRufCMCdfe5HRnLvEtzvvZ7cdhUsqphmBtuJFPA8UXmzZ9joVMzeSN5Rf9UP",
  "key14": "DVSuj8q9f1ALNN6NjEqAQiFJSJZjaFGHtBmyGUcgcA6L8TQ79Jeo44FqDpDVJew1Ap1Vn8VNtkJcXgZeyfZzWfP",
  "key15": "B4dBaGtdSGYGv3rGeDx2NnDjgcm7VTyfF9K4K1CAd4dau51MzKjoKeQoJF1g4Ahovw17ULznd8fwyTMuyGexcrm",
  "key16": "3B8KQjo3fLAMv4hiK4mGQ83wD8aQ1ZrvXiKGPoMDVq1NL2jn3MbyTA1gB7i29zpiTwSwuk7XqzziSthSbreDzT82",
  "key17": "KKwcVn2BzNG1zGTmafNezghJpMjvne42UwoHBrLQSmFhAz9NVLsToM8fT85nda8uTwfkUjU1HTktDnvFkQUzhgm",
  "key18": "4bMnBqh9nBuK4xqr3cM87E8meS45nCxH9wZZMJT1aXFCHdUfztBastT36GzW1taw9DFoM1Z1E2nwdAQ3YXd3Vz6o",
  "key19": "cYWupVFUnzvopzBzL5cMtXfmcqkKfcNPbkAg4y98UWcCvXmRfzo3GA8X5mpaeL1vwC7QGng2nRAkWozLRdJSY9Z",
  "key20": "5Qvwn3HB5To7Cz9uVFTL7F32ZRA3KBQp1vPZd6ucAR5tYvXsLiaJSYLp7T97teomzxmPoGYue7CMs8GLYzcCQF1L",
  "key21": "5D7GuKyVK3c2k9WGqGaDPSfKGsTJQ6DGPeQaS5ckfVjkLjqDBaCtjUzPouRAKj5G8YVvqtLtF9iSk51Du2RuqotS",
  "key22": "4RY1KKjdz7Bkevf5BGYJj3x4kyzufjYno2fUh1xZBG46ZLyTb9EFYLmN3EaWwZCirAoEuRkCkmdJaSxafNEKZ5kH",
  "key23": "2AwhWFZGSxWz9q4ZnXqvjAE2KZU2e37LULe9cujSLvLhwMYRcREWvHivWdXgnPPXpx8VivGbz2sc7DSn6BEYia6i",
  "key24": "23u9xgjJDMdjRd8wPYJwFotATN5qt548o1r4odEQ5Ui61bCfT8BqR4dAg115CiKXgqt2ykFoiD672xdTYcCsxdEU",
  "key25": "2BDd2SwJLcmPYw4rpanfFVA1ch7umnEVcZps9UuiPw45APJ6dyJvjQJJE1MHiPzTwdotzTGuGzEE7ruCUrBhsuGD",
  "key26": "28aycqMPWQe46z8CfwUhtXVYJKDb8bYiuZ4GiVpqTLRkNGjFKj4W1y8uNhsvePqUz5zBczQCdBwXDWN5Sw3eSbCP",
  "key27": "4fo8g1sBe55199Z779EhYnoZYvw8T4L5NqkFk6kYFk4zVoRH1MfAKSPD81m8UnY2UzJFcWrTfHoPbTzxS56c9vfC",
  "key28": "KYirBkhRfCdp6egtwYFhSgeudtxtvXnALAfEuQ4Fwtr16Pgxh5wYgEKT5oPA8ZECxQvDAwsJigh5DoRnFC529is",
  "key29": "2ucDjT1n6phMEVg1hCvCDHLN7ZBGDYuNM8ANrG3rayr3exAz7H4w9VWAP8A2swGdpohAmPoQubmtnaXCa6aTHyTZ",
  "key30": "66EKheJF3mMt3ZDeToyH86qpVrB2pvtbNTpd4bDGBaFBGvEuoDWUM2Ux53KVHNnZ4MnRWiMxD15sdGP3Vkx9gCt9",
  "key31": "5pVRv5RRqS2RyK9dBq9FAnnCm9dh6wLCZQ7srWCUKiddM8R9ceByEhGMLGbJiTHUtv8r4wKfFWnqLfGg3LjvcQ72",
  "key32": "5pSiXMk8uc6wZLB5YnGUdMpqq2Bv1CoWWACxBbr13b2ih7hpLi6m1JJ7vdUP6f3Dd4eyt6KHJnJcSSf37B62bp9m",
  "key33": "61uJjY8qgMN8M66NRk2926YuXVNyXfYwhTYJ9Jx7acmPSz3PaHUhZE2sot7fPzHouEnNMCsUGy6kUEnk7cRYcw1o",
  "key34": "4Lf5mC5hhiKv9v7v6A8D5zBiSVGwuUA5dnzeoV97X6AcnXkbFQ9kmoiLHZ47dtU2paJxeStAfbGiM9HQnuUy4AwJ",
  "key35": "249cBaoe3yv2AeBkyVmf7qvxAAQGLBkdnTCTmTUxDMvR3mzW2NcwR6UvfSg28jjZPrzyKddFNiNmaQ6Ch2BDGLf9",
  "key36": "2we6HyG2yMKTZghmiWd2M2Brz7xZjRiWQ7ZcuNRCA9bbzXZFY5PA3QAS5EAXrU8sjNh3aF9FTCeejou1hDV5t5kH",
  "key37": "c8wPc2Rdz14U1SWScCEGawjAAesJax8Sikqfu9S7t6H1VwnaNCFQwmZ1u9ZFboj63MYFwmXC8Jh3ehwLGB8TS4p",
  "key38": "5w4ENu4n63wDC5ZAJbZV6jiHiuyzh11iBXwW8VU9tcUFYbiwuy7jYDGyCFnYNPxVxW1jKxNS8ME9VTbSUHFtfEqq",
  "key39": "4joQxeZqNAowCboaf2eJkSJL4KMTAxkXpXwx2ai4wmyYucBmhJn68W2r7pvbijMzEJWfR9pjKaEta713VPiWgBg",
  "key40": "uD6YV5oZKPoehGpVtvsVtgFKvMAX1Bo5R5fpJAQpvMWKYESsWzKZ8RuDNPX8KSCA9YsZ4gMWiTKYq9XeA1ZZhg8",
  "key41": "3vghWgvykACUG8jgDwM5tJCiyvCf7Lu6mZCP5kAJb9HoJ5VhQxzL2GnEetT4CN8Vd2fPLVF6gz89ME65waEgQ5rX",
  "key42": "zo3PnCduCcHXu8Wm5gqUc59wS7XGwzDirBWJBtCreyBWXXWS7Cb1nb5xanugMumBAF5NQWMrFhqxPM7LmHmky44",
  "key43": "4Z4edA5dg2pMCjM3LAuG966ZpqnAW2kA6EcTr56w83YfqSP4ave1ktBanZM21eNUXJGyXSiJHYiTEg5rfTBthGPE",
  "key44": "2FYsSQ3RLysDBc4EZahRKccF5v1kXk6gdJiuv3ZaZEEbzhyu52V2451RA2cAbDH5rXqT9SHzecNFw9UD8zWQ8Eqb",
  "key45": "2WUGbXmFNZQtH9iJnNcpct9WaTWqUzKfEtA9BTHshPJPiQrTtiw2k8LMkPrBECXyzX1AAbPA7zx8pdBumX9rZgDc",
  "key46": "6zPFb6fp33CGiZdNAgDUBeQUsbXV9swLCUsFH8fd8arooKm7qF8tBNgvqkt5V5px6u9eRz7YPXmAiMZL9jquZvf"
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
