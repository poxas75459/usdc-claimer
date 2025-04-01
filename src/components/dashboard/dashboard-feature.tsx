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
    "4H74EMrKWVBkUQ36ZeThLWDFShyJu2StUUh51Y3NDR82kThk8dk1A6X5NbYkfjC874nsryZT6H5NoQiVY8U8936v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ToaThhUYxSv1pJsVhH65nndpfbnzU43SJYbMRomGVfi788rBLCdQdud6YcjMKE871Mv1EmTP27sJBAd7YVe35P6",
  "key1": "5BkKySrx7gLZeu3e5A2Dj5SdZ13bE2cweA95Yc3P86wbDgJL63VSaHv934UsKwUM2z3KnksSvGRD9wZjhnG4KGVT",
  "key2": "4sq1wjxHNHxFvg4vdLX1d7Zu9B7WHXBsVAqtNoFSHb3eFNbZpcZunCxLc1m5Un9sumC3x7Y6VGCkzfMkQnDKTrd5",
  "key3": "4fWPKcQ61oL4jEKw1mWPWn8J7tRWq2Xt2et8jkMEu64azZa3KAyqT2w39wvHSNtSdVYeXfx6vatzq5AL7RmJAQZH",
  "key4": "2hUbxNSe55azPGEBZxqfLQ5TbchpYittZ6fPZa61u3B4ZaWNmD7hfP5N5BJDwWZG6QhiFNLNsf8AGdZC8GK2qQe3",
  "key5": "3p2hapfbGSREyJXBBNQg194iY9aSkboeD6QDZ2Syx8uMepJYLNQzc53F4t4Jmz4VcXqcCymnsxjrHLfi7GkhResB",
  "key6": "2devbP3uVLT9i13SN4nKT7wmEfLk4jV5DsqQrsv6Mf8CBadCgWG8zksaBxcG4uKCy4eSddEpc7523NCUk88LRkAY",
  "key7": "4gfQVnrYxaY86eFKp9dVW8oY8eYC3VTDjif97SVwHJ9dVyfqCud5dLCsCnm5CwULF7dZcgakypquDXgE5kDGAhLk",
  "key8": "28tWazs5b29jLKEivX4zdXFZ37QYqSGZhbcRBYBvxG11JsLx2FiiFBjTJfvyPgV7VwvRAt4Ya52R1xXL1PvHasY8",
  "key9": "5BazhtvCHiBmvWUCarGg47T5kkGiRWvhoMqxZi37Stvkev7hGzFzs7tqsXPpqh8asr7jxswEUrGaBXif4AhgUtC2",
  "key10": "85BFTVvqAwctycZNJtDgVdBR4bCqbHGMaTVvnrAByh1b1MLBx5V7en7hpwucJdgjEUa6Dum1z5Rrq2PQVMTMUPU",
  "key11": "3VRqtFTC2jPiEDuRr1LzDxr2gqEiGdMpyBkvJFNnkJppuwT7UN1SZDFw8gYmaF8k6ARPk4DzbaegYRWbw8AJuKfz",
  "key12": "5fASf7JsCcUZ3YQ3wvxYjZQJtjt289pYi27XDKijvzdDbK8fy798xep9abp9TMJj9RDiZxt9H4WbMuthmWyoE3LG",
  "key13": "QzWHdPhDptMnxL49ox1D8Z4m4WbDBWfouuT4CRTjdQ4qQ6pQRjuCzbnTVmEeFXW2EU1nfo1WdEG3h4rTTFRAuPh",
  "key14": "4SDDGF7jwfPv5h1zaubJMAVrSsBLhwF8KhGgQTKfLavbVD7DugSJZo49LgLqCGMPGsb5m3QMB9PEZYbjuJrPZda",
  "key15": "3AszBK5Nh1BHA7HkGhk9HGRkn5RpMcZhsmJMfPPDfCDBBhDKPQpxBNneF6tkXNr39ZhYkju5yNeixFY7rk7g63Vu",
  "key16": "3kfXhJcjaGMe3CCw7Hh3TPCGT7Lg7cpwDaTCjfDvY9ni2e8pRaDej5HQPqqekBBQADFR7sksdc2qF6tmRRiS3Y2q",
  "key17": "5NcDvj1XTN4KY3Hz7zFnqL7GGBtrVf4c4meCoxf95TTRZ9dGRGDWRzC66MfNGjvuC6JsWwRwtrEThBYqS7hDLBZq",
  "key18": "5Ag6UZJQenWxHVy6WGozpDyPnZbowpEEYJmFouEqmPr46B6MLjqbJNm3MWrgM7CFSzzTu6VvNKUQG7sdGyUFZhns",
  "key19": "5tpnZZbx5s1CUPvPKLqQb46LKRKLYEsPX1Ja6SLpP9M3UnWgxQGZRQMuWfhJTYN6XDRLEXW4vF1H1UmcnSBc14gg",
  "key20": "3bCnk4isCvy4WLvHdEqNENZUpwbExewdR8hHH5fGhewZiHce84EyUhNo4EivokYFkxM9sUDpDX18bv5QQ7qeWMVp",
  "key21": "5zcWHKUr9DXeEwXugwoGPu37Vuvp2HX5dU4kzPVmGXr18aqjhh5UxPaN615aksa9NtwdKasNSRahbKeGpUnG56Qg",
  "key22": "2pCoiTohMo9e9HuwsdeuBiesjCk6Ef9DxBaSH1Ubzqdx1CQFpJ3BizgfoK9EF9WoFfz5ygsEpZmh5BP1KP98MUpU",
  "key23": "siL9x6SRsyvshVd7Xw9yoEFXb5s3mW3NwXn2H99imuUrG3qM3YK9FCnHXwwhTUeVMPqdNdG1C88AxMRwP5drHF6",
  "key24": "5aVre5ywr5NSiGSBz5MKj1kR8a5LhwotCXitsJ3dxq7cgiWxQgbzx1SnyNABrwmkbktLid9Wrm9xdz5WMsgY35LL",
  "key25": "1ELWooEJfBmzpGKVsc8nn8YQkYFuayk8eLJKuv9NNdTRHdewR2oqv55mHnnctSNTfBChbS2ZZ9qXJKdqv9eZZjG",
  "key26": "8cUBUmPuZQ5q4tvEFSfEQYgDQWDdKsMU1ui7M35sPRndrw1JUCLDvDn2UvnzqrAggpE5Uj9QZmC1DrZjjaERG1v",
  "key27": "4GzQPWw2Awqcvkftg7CPAU26VYm8dVdwFirnM4NphJYgQcxVQocmhJx468hoAWv7Z5Cic1mSU1Vc79xqkBUpCHM3",
  "key28": "dv9sh6y4fGTGQQNDAaaTs5hhyYEKgV9ZeTaLSztkUWPTjfG4CEZ1RyZjkUjd8QcAbueKC4b6raRP3VEYbpFZ3tC",
  "key29": "2Fq3RhB8ATppXhzXNfBYoRtbMCRztxAsfiM5HsYdeoJiVFrUxvG8yDEFsAQDkBTPNmaGHxizCtdZGEa1gYc7UzmD",
  "key30": "4e6YzH5ZcpZsztEnSCLxZZnYkS1qtefuuCnBwuBvQRT4FHKj9uNNQoPsMnZRAWvSnaCXKP6mkXxqTUpLfQCE8x1b",
  "key31": "2v99tYCXJLcUduexHVgwy6XGdHxuY86yHn7cZNvxGdsUJbh62fnjCrsMnbRvQ7cybZxvFA1igA5249RNC8Bcbbeq",
  "key32": "hfuZTqSCN4RXHGieQ4UHfHk3VzAJ1H5VGhGRa7vhh3fC9mZ7CkD8DUix6G4REfgRtHD8FrSsMARaRtVrvWrfTFw",
  "key33": "A1ECACay9GCZfYRozdYPrAe6Xk88rMxQ6PeD87VrpLDpFRoB8BnQHgd5WuEaRzYwixiFQMmtXR2Z6bqecpoQ9RH",
  "key34": "3A4215kJhxNTrNuaVL7ZgaryZDo8XFXpAj686zA96eK6NBMknyX2UBD2jqzYjbNnZ5uhF99yap55gREuNGvY8NpH",
  "key35": "MWQVYErLjY2BYRzNsX6co13BgQzt1jtbnYFNuDsXf6bKrTXioTcotJE21qCJFbWnyMvRXWaedhsFPXeSmyMADCp",
  "key36": "4L3cnqktwbf56BQbiczNvbAxzP4chfuxvGZ5jS63dcBYrEPuXKEtPCAd5K4p7AEfvyNuufCTXm52SH7215GDUQ1a",
  "key37": "63PoRCcJoobmfcGVA8AAoyVKFBSAbyuQugwnF3kANRvWiP5V79cXrPcoway3sN5TfUtexppVLkr7D6mGy3XUUgKm",
  "key38": "cyFnFW7WS9bjKqUTwm4qWV6vBaVXMR7NXPk9uaAqAychRQ29NzhNEwH5oD8QSttvcZvKiWHAcP7eAeHd85hcEmk",
  "key39": "2WstNqcPHQhj3VKZwgQshfMCHiEpAu8xnqq6hra3BxDJn8g2er1EpSdctRcXFRfMTNcg6CX1KqQP6nHoGrKB9Kqr",
  "key40": "4AH4WLug1h6ETeQoSknUege9W5UGgqtftfdWUpFfKdbiJEYdS8fV68J96DRYPisNhUuNCVPeFW7KpbGejtPVpxpF",
  "key41": "4yGE1DLX9Q1xdjRCHHJGeF4SSWqUoHUnencboKnikyf68asTwmAz6MCC6wP6toFsMXyFStbesRjKnC9WooXge6ud",
  "key42": "59ctMJs9czV81ntmyYfzmSKfywzLjvUY6ginR1sWLLKr881r5kT1mpba5YK5msjMCVbm9ch1xyMdqktN23auc3GZ",
  "key43": "46zCXDrrzfFWS81vwrpyfYd6dJVzytwyyXEvTdmySrhz55B2S7H1Ty1CLQJQ6kZUb1m5E4vstTjfxcf5EtA48UL",
  "key44": "41w4nxJdZCCqbZJnP1ZTS8qXThh4t8ZbBTHBPp776m6VGXjYawfU51zEBNzadKtJ1uzWKcCoraeanXegEyq46q8E",
  "key45": "2vukV24PJgzCLCvX7GU4cguUaxBXKxGXCkJvHj4HjHmUbMynchKuvGMPLqZpzJ1SkudWUfULLhfiRocWCHkn38GQ",
  "key46": "4D5hn6xKCYvUy2kqVSXWNiufqnBZK5sTY1xwD5fDoKfBoLchTxLQGz5TDBTAnjwfLRXaoHFH1DizGCqrWM4p4mcQ",
  "key47": "3NYCMcJcxRz1tduUPZoFrd9qsjfeKsg6PQ7h7Ren7a8aqTciiH8CaEvztcrupkJ4qFbmk8a7TNYqExJp81kwBs5R",
  "key48": "5RS2YKELGxjbacEbr6czc1DMqkoqgCfBhc94YCx4bhG3Cxzw2FmThLp8uHVXUegK4xZ2cCN4T353iK6ArTgY7HbQ"
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
