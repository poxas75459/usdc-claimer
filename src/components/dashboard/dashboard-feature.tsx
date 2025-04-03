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
    "uy34rxuhVDCvHFJyeqf4kYoaa9y8F8Gex2aBHtYHYkxJYejgkYpp4dtY1kvkqJfUbq2eEs96xg7GDJYFuGyw3uT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FXQsgVGBWcbE4CKkgB2WMq7KERCRkfopvXKk3H7YCu66XL29bTtue2D1LttBNbkc34yeceEGnFK9ZB9xwdUZJEn",
  "key1": "4JaRnantzDHBqtnosYhPBWLnrfdDQwjEfCeKzurbY6P95rZ2RpLma4io8nCVa4PoLtNG3qbEcguH8qeQQ5GnHi5f",
  "key2": "2fenfLmHADU2dKWkfoXY6mtpUpoAnNX8iqW5cPPi5Ma6yLKA7ApZxd6tLXT3rhUbNay6fx98qhZBnghxrGAXht9U",
  "key3": "5RVgj58tz811TemdqXyxSJ6icnzvuGHWfQyrZhzbFDDn9VHoU79HpTyf31jPiuLJ5KNKvR4ofLwRneXRjzAMUi1Z",
  "key4": "2GoZz4UEzFw1HwCLkBS5U7gpRrotdxcq62LocYhyvWZqoJt5JDo3YKTxAJs6S7jaax3BrEsg459wYwSdYibydrfj",
  "key5": "CmB1NA41D8FwKyBdhqWzcY5zH1jkBnAcqx5iAvJWgiRGA7GNVRjP4ts1zf2fHer58VvLLDhMfYzq5kjNusLT83R",
  "key6": "3Htt4DQH2s8PCjtFF7ogPHqAQgdiJJd3Jbbw7JvqUon5NopYXi4CAcyCoBks5hiNwXAQdPGxQbgwTMzwBarCNWeZ",
  "key7": "DZGJ8szVtqKhafiHT2tWiMWoAGJ5jA2vvBXwZg9gTggHZodhTyYdesfNMvPqegujUHM5Jf5uWxaHaU4Nc3mCeC5",
  "key8": "u9yCzFdusvxbHmGY1whzXhVk3KMo1p2eQPeDSqYgnVwimYaFKSigXJP84TVPpLwMiYiXaGpHzw2VkVPTisjnnh2",
  "key9": "4jQGB4bMu973rDaxCzQFaoUYvp8nEWggB1WsRvD6S5Gy8w8sczMSipkZkCno1mSLEGpA2LPcVfLe5Jbm61j1hMVp",
  "key10": "77p5QqhX79rQaqvMyhg7YsmcMWSBpLrsvbFqhGxLi1u7hzne1gdyb6mQ9CQgewmcbaLZu8rdP6B2ELapu1eE46j",
  "key11": "5YWz6hpzhJSKa4cz9vAJSx4zDjGuG3Dnpt3KRuac9qjFJoJfPDF1y7ARUsZ6HB8EeQMXMQfvELhnEjgCnCcqTb1x",
  "key12": "3zhJZVTedUCAFE422cViTiBMVAVgKDKuGF8GqWCZws6ttFaEvdC8ma8xDsbcXUorf4MSgs8yLhNXEa9fBKxJnoKk",
  "key13": "5jZ5teJCKDZYjhCtPgdqkKhDGG4M8dWJzzjHPJ98tii22w9i97SQCbyv7jYC4bXHcTuKpH2wqukhSCzd5iDiuw88",
  "key14": "4wz2cTZT4zugaooHntuEUFYy4zXMz6UpnE4ceDRY1ar8huK4UuoCVm8r3wD14ModK78WNfpGe5ySyzEAB1nEbvut",
  "key15": "yiRcJdA3ou9VGTzkRWei77MPDpgCsw7XTjzcfZmNoCimn5LAsjXDsqv5evLBpssMegsnxe9RbhC1UkE2iArEEsd",
  "key16": "59esedAbfNxpqYXCFu7iQsu2o4ASCEx22fQsU3t7gMicbTbhzMpe64PoUihdYCczUSdm4CK1eD9iVFHB1DknTXJv",
  "key17": "4aKP8ZyXVdMF7sd5WntNr4wzHgjbvboFC7KzRVJimLyQ4Fs3DdhDt8TRbNDEhR9KccrQ4FB45voak6adfi8eMAgG",
  "key18": "cGQ2phKMce8hJw36t7Tn5pnKqVxfUWVTQre2wkbrGHE9tFj5bes4a72zXQuZbTzRLW4Q7BCeMoDPV1QNy4DhVwA",
  "key19": "675PAGzNY43QEcTfNhAYmYHzUgsbZV9EuKrCFidjWiP4NWgsWa3tWLkYps8peQ5LsfukKEfwb89UJdbR97SVGZbL",
  "key20": "5fAiLXKhBJLbnZA7ZXhwsR2PHnDSt9HUfbD7mTqjUAvXBWq3aomcV7hMy9ym9nYUojaDe2DyGBsG38QwCq5XirRs",
  "key21": "5MfyoXpvgcZYZzNzaSyjnZWkM7s7bEiiSnabbYfrsu4KpWoK1SCgGDt2aNW43VSNV3xAp2NtQBNcTG3Jfe1jbCBF",
  "key22": "5Ht9SGCJztEZWdPtDHKwkpMkyxFgSgA38koTXhj4Ryx3Ez3zJV7V1pVbTcvetaf4pJtnw1iB4pKSX9FPXLVTVkcp",
  "key23": "4T9hYkgHfKPhWzo6Lh19mG2V4jC6hYT4JxpZYTR9MK7h5XXysskZTmWCw5j5Ma2mGrGHfaWqMtcD3hBmJi1tbZnx",
  "key24": "3vkdxPmz1hzFnjfUK8jyUHj9KNKhJ3R2cxyvNhGDLnBTfh5D8Sqq5YAxDY6BrqdkpTcmc9EqwqdssHKcq5X5T9rD",
  "key25": "3vERKhcpnDAzdtUu7qNbDFdjC7NeHX3MwXoNdUFLd4g5uhW6348VFKdSRmZ3jHNs8WFxK3bgrM6hxWByT5HyP5hj",
  "key26": "2SFyE6Vp2MKVY1HSvM5G92VXnxJxrxKztgTsWmbegywxYuvw3D49auQ6ZbuhwQ4cu2xa5PYWk2eodw4SXepMUrgs",
  "key27": "3fsuLCB15hQRVGPJEtiAZXGbEQiV8KuRknTMSnGqfDR3i2jFo4bigu4UEzAketQnGt6ZQ9Z6ofsmLgUuJ1KeTcSy",
  "key28": "4GHmYdJ2rnqqAD2Lk9EPRS9m7mE3pgbU2hey4moBTWuCjNC3i8sD7ERELmxwd4JMYUDKB8sJ7YuDMsnH73EzehBP",
  "key29": "4gP5We2MHe59P2XRionJTHZUtSn8wTnceUvKLLN23Gn7A3SSJLprwxGzwn4jMUaqErrtzmhmHTcQJ3g6enBQJq9r",
  "key30": "2wQYDfRHkBb5V2kxFMxv1W6DSbdSadNBMHNMz2m7kcB6WyAV3xpLezufSwW7jQQeX1P6JUdwKdVWyx9ti9JKnj9Z",
  "key31": "2152ckEqhGqhrgW1tHM2EjoRL7YgXGM3zojUDobLtrfgbF7ZBD1z7CXSiWRS3JXQ8xt93uho1WC5WqJrnRKpgQqQ",
  "key32": "4DedMWUEojFp57gAHajSAEzeJDwDQRWx2HCZuH9cHTePwMnPWgicW2sTqTsZh8wMj2kLk4PELici6Bf7XvsXRJw8",
  "key33": "4EaGdbLe8kmM6G7XULAKksWgGmCpbVRDHzFudwQu2PsCyPNvT6CjZ8eSxTGG7v69CqYm1FdzuH1QEArRmR98PRoq",
  "key34": "4FdhkjKvu8ZMrh3GvbD316ECMiCVUbp3nNtKt8op2W5HwjjxVwUTAxy9sf6Gb6efZ9ZpFXfTWCWg6ESf2PtEdzJv",
  "key35": "UJtVHeLZKRmauHtsfhNKZbBj29Gk6tKAgJuVUkaS1oXLGQ35PtWQ6NR2bM3r7DgyGUY4AYnCLb1rMza3LPJVx7M"
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
