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
    "4KNt6m1dGDoz3QCXjx2gEFmdH71BHDnG4ZEjaU7K8Hbic1grHD6jAQ5VUQLFyKpME3E32mwKhRDAF6FpKopLXZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HNAw4dzCNiHAaPdjvnDmDUPatBFK527Tu6NcyjuB7CYYKSJ86foY1ZvzZAHJmbFJg8utjTPpVZSQhz3vn5vc1kn",
  "key1": "2ruN8DDN5hQdJF7RMiiXPtuHprNdvHkYoT9FEPudhRHwRcXL8JgbEJv2XZJvj5WBu75CBJ8NSgFcQTLgp2eQdQDz",
  "key2": "5JFQQNuTokg8h6KWwUcNjTmfWadATpa8Kk2oDUriQizHhmFCgRWfH831SGuD77frucmWrA6SbtCFzvLrGHgRTMSq",
  "key3": "2F77Chf3ePmtn2QCSkr9KFDpmDa3fgS4t4eVKSoarnMpYkVWLahFTGBxESqGS7HFLmYm5fTqhn9B1UvXwiAGc15P",
  "key4": "5u5Yi2PE5RNBfedBsx1Njv8tFFPtZwUfUrKnwFvDf3XcyS7AXrQ4JEAcr1gBggAAuKypZXFUuRBG1NF88fVPmUbJ",
  "key5": "3bdZ3swWrcg4M4dGCkYXFv73FhHGexa5WwAfLU4ve6rWmxHHiyx7cwfDRkTVFirn26VVWauzKzDjuX9nvwWmMoiz",
  "key6": "4Umji9Z8cU7xRG5G1odo9yCLNXaF5TxnmFEYtMzJfnZi5zQzgePwjCRcuK9VrZc7eb48o58LksYz4fWb3z275sEe",
  "key7": "3YWh4xHc8rkaqHm9E3YcfWMg9NYexKJcXYwKCGhoKW6tL1mtrzq1HxhWCnxASXFLCksDVhHL2izXdJnZjqwk7JE3",
  "key8": "24TUfqp4JpNAA5gqdokFt9eqVp7zYz4YpfMrNfWe8k5kr8Fdg7HvxpYR81xQ7mPtQGMe23k5BekCTtrytV2vi3JH",
  "key9": "4BQS9UV75KtbSMmKGhuGfcFiVHaGJcMkUT2dUrD9cLbpZVitRWrV8YALjnY57W8w4ZA5G7uYzK1DirwYgrsHzgWs",
  "key10": "59UV7dyaNzXu2Bu7XWjkc7hA2R6ZBDNngZCat69mHKqMouXhweq7tJaR84FiUxDcrXEWYZJxjQDrdMmQACYVuoXC",
  "key11": "44Z2yR9DxGAA5Boe6gwpT9SNKJPUoDJrLspLLgCqXab1U6KgpsLv8vW5ynbqeZLPWNFkKCBG5QLQRwZNg8TcQMoG",
  "key12": "2Dd33Jee83RjBzcxG5c8WM5p4USBCy56wUyguUh3CacVU58jneuGQxcKyJSpHo7ZUdEVSmfVPkdGLdz2wEqCpmKv",
  "key13": "4MKskXFDsvN4JCaYSp5VBT4HKMN3vqgUCV9v4iUvss4iQvvM1ZE7TyZGccaTpCusiQefFQoxuLXmkcZBaFrjs3RC",
  "key14": "4BuKvFtUYaEGf91KuEaQnZr5nxZLLXvMG8TanxjnytunTveVWJfERiTJpWR5ixidyUDHFFtEzJxxj2EwXF9xUBWL",
  "key15": "2MvRffP66ZTkAuBBwnRFuTvEVF3W5YZXaHdXfQ7nHofr5oAmSkreLLYTHqVixvayeqmF6LGxoAc3MnbB3iZ69r8i",
  "key16": "gaXAaEugqi1HiH7Nmxo2Cta9j5YiSGPQb3j3nm3mAoSXdba7ua2DWUwbik25sRaW7ZktoobDmdLNqJ74t55Yovm",
  "key17": "2WnyEP1NW8LvrmfTBBnqPemib7hZxhXQojXRgZXgbSMN8aXwKuF3t8Rw7h2z5jNupCcoNPd2SfCYbvnGMrhkdXEy",
  "key18": "42ugdk7szs6P7p7BZy9vD53QmeReAVq3rJRcewwm4UHR133G4Ayx2SD8V2Jc9x911krK13e58SuyPcws9uXL7Qyq",
  "key19": "5pez28axDky6WhwrVApyxhKd5jyyEsrYJC1Vibk1GXP463zUdGQgSWVZ1vxfDC3L18Yb3HQQ6ZWBRacPwG6a9xQY",
  "key20": "ZTHp1VE2gtp2XWS4QZZffkN1z8qgfMd7toZyk7oSDSRuBDWNJQhS2B2ydDezDUrKDZYM8TJvJmE5CLMcf3r3uQp",
  "key21": "5VJrDjfz39EVxe7A9yA3AxY3cTop1CFjpW1a3BkLhhrJFM9b3H3SFutn4vwowvRWwT62F8da9vLM3qhUWZskvpWq",
  "key22": "3HXK2Z6SVjYRZG62KW1hiGygsiTkpQVNjev52DAh61rYmdSWtxUcMRVcHx2Xpma5CQX1gTi9Rg7N2K9tWZjM39bM",
  "key23": "5DisUM9uRHusmHcP7r986nQ47h4NQpAj6EZegF4ZY6zhjvdjhbTL3kjLtThw96wavpTgGFhewJ8hRmVm9SNjntbr",
  "key24": "4PiftFYEuN43cm5McRW9L8xJSpQvjXDuxQA4kQ74npxgE59c1DLXwjCWBSqouyvteJjsxYgqZbgVJA5f6cx35TMm",
  "key25": "3xMXqmvJNrevh12LsU4maEDYs7EyjUUHz5Q7FrZxny8zuTvdmxFzzSFrPo1bfkK63F6U1wRtSj1UjSDavyuWcgof",
  "key26": "3KzRx53qz2RthZLHQRbWoXyskqB4AfXYDdZFQ649RnzoPHP9iKPgcQgAKQX9ev3ypSqvGhqv4Y5PiTsER6o6zw8w",
  "key27": "4pAQU2AEkJeQ13kgkypEeF8fbemj4d5vChUHZBV6quiqdQyd28ZLx4pGPWFfqZZaiBysJtKcyPyRT954PtYD43n8",
  "key28": "2Jk16ZhNdzrhzBCW7pHEZveUKV9wU7Tg8NXow5feirYzQDycZUiUWF1GTQgs77qJ492TU2ebUPHvow8i7y4gfmKQ",
  "key29": "3Gf2LEdA5DLcgTMjHHfmQG1AXiWyAZn5uMTZXgEw4kDUBUNQDzuahBoFvpJvXpphtvXLHUrJtDQdAXHxrUH9uVPN",
  "key30": "JStDe27rbf5D1RdCuttvyP4VHadedQcoZzwtDZf7kQ7AgwkUhMuWKouzTBNqnK3572wpPSqrbQb2hhkG78jhLqk",
  "key31": "bBFzmXckePBzQWwD8jkmWKfePTVFo9tJ5RLixqSqEaSSmGxXiVTfGL7zfVBV3qrcgJ97BivQmQBT8UswfLcj8n1",
  "key32": "4yPmeW78tcuaMdFKF67zrwpLf4UwzaY8jJHGrUr4Wb5dTvEXE72VuuqCRSNGGfCSQpVdvuLFpkWXsUM2SgHuUh7X",
  "key33": "Y8jaHub3Swhqq2iRbKmMFCh9e6b7o41skxo5FeeQrUergCvVVmoV47R3YTM2LxVc1SrnB5WUaUzfKkk9XnG4hQc",
  "key34": "y4nsci6eyM7kNvYFKMXPQYiq9TvpYJms8PFpHxbJSkBbky2kLrFXiFQ62vug4iq53qvpwAdVUtepouyPytFESm2",
  "key35": "2yCfS2S7zLJje7sDBifeSwU29yr2wDP9rdG6LzfcAFxKC4qEemqv5sVKgs1ackaWP3XRLJq21T6NxwxMJQK7tHJX",
  "key36": "4LaKEezySnVp3B3Cn1jnUNA9RaJwyYDeA59FXeMuCvN51DyehQSZevBgv7fYa6sixz1FmpLWx3pn6dCAN2LXXyLg",
  "key37": "2o84CK3wzWt58C7rpYDVE8GGjiEax2oPfi2r4zV8fT565wE1qoWtu45Unos25s7Was7K4HBwdE8hRASQSz4kVZe5",
  "key38": "63ri8EatLZDdwouqsMYNf5px4Bz23EnCGi2XT78rmPjtLS3njm7qjAyx2ThRiGeZpByAaZLZCzJquCkbu8739nnt",
  "key39": "2KMviQ4DTnbiRfSmynaZ3Y3f6sTMwm5o8mVWdBLxM9vpW1nYYP8pZapZPfvwUQ37p3TbeEZpSsotrFRDJ78VxBsp",
  "key40": "2v4et3oWE9AEN5iHrRgzKUrmvuxwLqPvdGDyQCpBG9YU6bt3AMJ3SQYf9wRFKW9CfopuRWbRcrf8CNCmc55uicgr",
  "key41": "4kSmk5YGDxSCene1n9rgHahhSpwUfFm2BaHJCejVDRbDjdBFCFdx5JCWHz38yWW72qGUCAaqUPxa4XZqnbJrP9Hw",
  "key42": "4YtBUv4EE3dbFWUMcsCVgzsou1NDXQsBGVtETWd3ckwbowe9LL6zabFET3kKqHCsh8jKtVfS5uLRsjk8V6xvAp6d",
  "key43": "2VPXVAnfjz7Hr7bQgtcPRTv2cgCzFGGTGXLmvJc7izNgAWaPKu6P9hXoybmKX7mpuwKLXDbfhszLNRx4naJT7n7K"
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
