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
    "3w5YGS8GamBnepbMhp6znnyieTpc5uKJPXrJi7nYRZTGT7PP3Nonz2LYciGfJ8DVJGCAuBF5tVLcX6PtykurrsAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tNB5ha8HYJDyP8smYToS66QsbCxM3zABKoRzV6HniGuF3ZQRLGpxKyxMzFefzcYrC8TW65muUWphjg85ewcRs9H",
  "key1": "3LcvrTrFYAAABo59anNEwSv9n3pk5EgkLpwGEZojyy13ZCmVqn7ojDo1HyKKZWLgNmSF8a9E1KprxXB4hCq9fXJk",
  "key2": "2YCT7HesrTvm8G4e7rLJnnaCYEmdnyTuDHvQhgQr2GayV7T9e4xAByzjAdTV3DA66s2unc9XoWWhFKsewteJ9HiP",
  "key3": "VdhZDZk8eprxPm4BodNVCyRZChFXgBsAhXLUeE2TwQsqHApocT1xq5eovRRoLfUZ6CJzNMWXk7p9eKDpYF8w7p8",
  "key4": "3Uc9q9CuzQWxEWXF29Ah3kgyvw4KWf86gMT1NSfoLLXdgGHKnN2KSaM6psxZUwv76TQZ4RTb6RKPU2hyf4XPxXJt",
  "key5": "5Jc84qFVhBqvEtQyEKVtvQwiWGe1Jat3kfLA2q8Y3PpnsLi8pPghttv4rGANzRZ2mANtP8W3jPPz6gNrY6p96dvm",
  "key6": "4mTCUAGnqycFj3KfjBBBANsBcc2bay3hCVsaNpCdZxnPw4xHSdCKnnbGz37oAo9QcC1FRAsvBScUDCkUv9yHkuej",
  "key7": "eZPZKigHkAhGuYqyjYn8Sk1UowBG3mxxZH4XTqUbvcQ5paeKVqLjxjFzpHv5aw2TL1ConaQScpJdrBEYcckthBX",
  "key8": "2VVfuWhrZ1owP8Die7rUUCffwKtFQUh3REPU2idiTu8nPRsBV3P8hxxTDJyjtL7PdVkTPfFUtLH9CELDp5VFmUDo",
  "key9": "5oJhMJpFsAVwjpUMZd9iwbDW2vAcE6vMWoktLCLhbF7koXEytcbhE2E6gQETxhBW24aPephSuTaLjjgbcSbro6w4",
  "key10": "2ShyQ2tgXpS8B9G8zA58CuD7dKoh8rbo3xXQZBRDXoC8t5WJ6dZVa25gsDDHGDQmDQb9QZJQSDRgzSCRgthRDGEA",
  "key11": "4NpNmr2qCvkpNf4Pj4tFmFwXUuxDyYtjCuHyBLCAL9CAmDbuCWBYeVyXNPxkMhRgN4bWBSZK6UWeXiFFX5PRit2B",
  "key12": "2bnL3VN52Exw7g4FHTLbFrQ23SmNBBA6By1CuqFqJnNgwzPfjmBqweuiXeCsoXu57CNc6etr6q63ykxeJJokQYg2",
  "key13": "62RK5vRomGJthM8NZg8WmGmousXeZw95hBfywFxzHYVwhJ8xDat2T36cAjwYB8kqzvwmw5AtHoEjYcSB5ciVng7s",
  "key14": "5QhqjdZbDCNLp4VwJF5kFLCBZrGE6xzCMXLD7fvpx23eidvyXUTQPCGNdScCQo7gNA6K2hCQRjLQJMrJJiKJ3aKF",
  "key15": "4pTzTmt1T4Aaix7f8SSQxta2Ec5WpXisobntmrUy3m8TV7H5jtnBRaCqD7MKXpEcuFgtB5SDrgj89d3ENGPeYZ6Q",
  "key16": "52XGbpbkE3QJKJdvGBKC3EV5EcRha9vcyKfjCkHvnM2pu22GRm5sxZ3Z6C5NFpJbJpnPrEMtoaHRuPZLSQdo6mHw",
  "key17": "3gHmyEj6HvtywUbdDpXXxbmTwZvYU7ccjThr3csJLbDkkL2DjKa8Z4vdmDc9tEiANANtSNuVomhEtiCxHNuULFX3",
  "key18": "64ebhGicSKhTfJRV49nF3BjBVeHoqwcrWkGF4EBAwRqywS9zXJwRwDJQb67fdLJmD3Mv1aFkM8A69fomjF31rW3L",
  "key19": "5CbZCFwBx4rtoGkCjhtNT9D8ctGi31L8G84KPdMjvcGkR7PxoqgKuiLbXQ56Wb5BsWLQi3vQ7L6K5yrBdtJSc1np",
  "key20": "ghvH97vk25tUyGd49VrAfKng6iMQ8Kt7SfJfynhoZ5eiPyLtTF9tYicb8paHXFVq2yABWajWLATPkv6dBEvNkJE",
  "key21": "4ai43MwN1qUpVVFthCTZZ7iTxqMLN1rtdM3KgGwhUJ4rmTkeiNtEUEzz4DYasAyAEehYcPk6QaFiGqK2qH8SaRKf",
  "key22": "bZb6jJrMosZyh8vMVTrvoCyKtjah7jNXdohYKqZbQTgvsfAB1Wopf83TkEBXEZYyhnG9duLuAFvURKy7REiqjZh",
  "key23": "TLjPLswStf2yS2PyjdMUMYyXyuznUncRKjJqso8ABw63C3zPzF5xuYkCCGUFDDzU6HZChCk6DR6xkrrtKFr8gu3",
  "key24": "s9Q38MNooRjfzmFg3MaphzSYUZ9eHBQu5dtcXVeBLQsSzRzXUBT2QMMdtUxGvxbs4PMHWLiLLRKYADjnUGJUcPi",
  "key25": "4MGq8aV7GNw1oAjsxKwqypq6gKLy1DmyDcqYkgDJrNhyJ5drP1G7fiuVdfiLjCYiKX2eSLgDv8ZfYB5Q5aEhyaag",
  "key26": "sp3SMxPAErBsNTkyCJ3QNVz3fbehWgq43beC3mJcqqLzQHBj45ibRzj9NszquUY19f1K5zdxPE6egGu6LRg3kiA",
  "key27": "3iVPVawdfGx4USputvAXk81Zasg3osyeZFKd6tqGZFDy8LoAxB9rFPfFznhhTEAP37vt5xXPa3dTEWAkETKAdKUH",
  "key28": "DRfB7UWTsXwRfaQY1J8mJzy5NkSPvu4jVPUVkbA8zFyxD3uyDSN91SZUrrmVnaCHJM9qFbBv2rbk5ThHQfbrSCA",
  "key29": "4ysGX67roKNhp9SXwmRoZBmEurc7PKmTLTXi42w1YrCvhA7NcWw3gYNYC3GuYru7pdkBrDpt5pefteTS2KAQ2rNN",
  "key30": "2MXRKwVm93XHBLpe8TjCRobBfFaxL2bGGyiNPY8tn2g4zVBw2bmHv5XWoptSNUXMyFF1neJPVtNYmLQ4XtNdPeqr",
  "key31": "3fU2roXgWPkLXzxjvFWr5FViTEdaL42YS77j9pgrdtHVjZLk4Yxu8EDN5CAkZhGJiezQ3H3qu55W3joJL1ZhE3uv",
  "key32": "64BCgSz1mWrUfXTuxFqRMqdqHcTeQPGRNrttzAwNDSvX5u8EbXNi9tJq7rStrstWVQ8qB2TPjs7utKDnN4BkPCgS",
  "key33": "4WLcyDhUboqafVdLZAVynCKVa7H2uWgimgkoTWdWaHXoYUvojkxz5ASzrghsqXQyHp6yxJ8BYYnU5KXwJNGUUfV4",
  "key34": "44pQCaW2QccmEwtDDSMNMM6VSw9qqtxHJtoTgb8BptrXCx9Sm6N8S34Ed78SURj6wKvZ6u6G58qaRnHYo7YnTUwU",
  "key35": "58rg6gHE1tZfjr3Xj3b5EwEPqRKLYubkMeYwoTM1yK5ALnzPzvD6HKr9jpAAptUbgszdqisXifMGqQxBepsChwqa",
  "key36": "5As6WkWerL7JjfpT6fN3WeyJmkKPP1AocfVsiyu1jWfJats8iLcjFFtm84whPGz42TVQwTZhdZEYnRbFk8uNniMe",
  "key37": "2teKjKTvgrdXvgBwskK7oTkpJWaWXBWJXyYeQWB8uyFooXZL3k2nqJytjzR1FdufwmuVEAfQobGHhaiYHz1zWByL"
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
