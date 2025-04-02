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
    "5X2WhS11SPXXucuD3U8HS41iNGTATQoQBVxzuXy93nWcpSYFkB3sA5TFfoQgC1YF3xFDztPhmoD9GKmYKcKcmXfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29xt4wFpra8GcptFiRCTxsPTX56qaQ3dnYtRtXzZntNJSE8hSVmwunELFXyVQ7w7YL8bBBR3QGbnX6SfRMo1pyRN",
  "key1": "6JeyBvQ2Tfh1AxSjsjYaf2eqK7BkCXMmwcUcRXwn9q5PNckSacsywnWFCkEjDgvCmySUp9ALEwj9ofCTFBsca1X",
  "key2": "4jedz6ak9Bw9jRXUvdsiU7rmEZ4XPa56CNmpR9YTj3Sax5Nw63agB1wmSY685F2c7whJGPZpEntUeEncbGTkGMzn",
  "key3": "2jc3jsdHYMHAthMSbU3AzHxBvgRLuMsDme2P6FnHhTyF86JSx6WSYgk8DLb1Xp9CjYrnGpP7nEZZ1SpKva8J4N7Y",
  "key4": "2B5PWeeuMW2u4n4g6VSSyMChv8Tp4uoV8oLcdY7zvpcJ7zdPu8vqbwz6ys79FXooVc6Rga3sDD8HYtrFb5EqMcNt",
  "key5": "5s6dtHBM7mVRJSN8NTLuCEm1GLLjrr3x3h7XWAAy6Vk1oVYrw62uZBZeDJGJ5fKmCFBnYbohafJdGeCjtFY2yM1t",
  "key6": "3sHg6AWojYDXAwxUeGGkYytckJ74cd1WmTMdC5q26XHNzoNX1UXkGoLGBfWGs4fBjpoRscKFaJ5qCbVoNq3AyhGt",
  "key7": "4HmYovxdZ42EchzsN1ykYwKfsYXdRXNDdVtnDT8thHpzHouCrQnCvfckdvYHk9t7hE63RVkWcdJ2daU8YfnfgCnG",
  "key8": "5PuXuUC6N28xpXKX8KgjLHYRLdxY4xU7rEJF9BmyjYPxaFxX9csfPgSoVtbjCZX57AY9Mi7f9F6LaWdMJeVxJPQ3",
  "key9": "5kWfwxFvjkZcTjySn3KcbEpRPFeaicMRRNK3oKZMHXMMKmQPN87nUAiQefWBpBCiULgeCcF8cjZJNsUquzX5L34k",
  "key10": "5VfYRRTbTMZzLzWw1VWwuPMpkA9qseVazJSU9o87rct56ZgvZUYt5BEBGJ8ouJvieyncbeGie7SBDu3u5xK7aqMh",
  "key11": "5Yb7UhuQVWSRWd7PxDfBPsKFEMmgmwFfuMr7jAdHh7zyigvoMo6YGiTfndMk1pXgUZdVNrnLnmZdjtciEXDgLrWq",
  "key12": "vLGzs1bCc3watTPyVHR5eRo1Tohu5fTXuFSd4N7JqPsTD8xtZqprehZX1P6ZF71vBR3sTeuwqCn76RPdJrwGQPq",
  "key13": "3G4cGgEdosei3hmuQgnmMSBAk59psMbo6hcQaLrRmsvnU8aRWad3K7axZ2c9xTyPAdTZP5vcXzKd5tuazRB7HkZr",
  "key14": "2E72G5LDhbTMMbhPvXN8kxJNkLyaz2z6nJP3SbnqLgyQjqBEPTrd5jxhTyY2PdS6j8wc9Yf7wKKcFjjRXW5W1qdf",
  "key15": "T8wPq2mtkHJP5ex7tJiY9cjMSANDsZGtqt3UWo7t8qfqWRSCEoP4EDBHfv9CXzdK4t1CjhKrwnHDM95GuMEM7LK",
  "key16": "4rEFXYdKRJfzJLr8n8wZYMNkRSkikkz3kX5d8CFCpU1EktRQGi2zsZ6JehUjdRyfz7BsFnBfbuSxXg7MR4NFpWru",
  "key17": "mGZ9d8Zw2Q6xnneUgKAYHzzWZqa3ZyQKVwU6LEcx3xVnUqs9EKZ1V3zpc7C8HFkHWtG5msNp4HJRfiUoAoNSfKJ",
  "key18": "3FGwsESqVopt4VgRy6ed1jwD6RgivXqxWqUEtmBYfp3iA47JL6t1RghdRJQ7uqYf5yHh1Aa97xpZKUDSygtgoNcS",
  "key19": "546B1B5jYStr2Au18kKTaKBX5tGZFsG6UG6A9hvs8PsSbyd5PakURVgLFUqKnakKTCtaAXkdXduePT8G5KK1RZBE",
  "key20": "2BhYw7YR5f9WCZQDgtzKULLXDC44nspncgdLZaUbGyyjrSjoqQmAquyyU4iFDDFUYfiXFNBtqEbHPBWTdkuSvzTW",
  "key21": "3MmH4Bwc44kn2MAyGqb2BmbznvRQYZC2VQzEu2WpVqcgi1W548YjJEzFptNRZQNKMTAvDgd166xEzd7y91inhGLD",
  "key22": "4iYYb3aaJLvJ8qvBMkGJVqi8WH79rBvSPqks2i9hdwq19jkAJcr5wXaa6oeUYEKsYVAd4KfA2zXKX53d6FPpfeHz",
  "key23": "BBHnUSwZKibUy45eAhtLNEuzSX2WKvCLcaYKCee43oB14sR7bEUWPbckGsodLk3U1PTMjzLTwcTRVZDu2QJpkud",
  "key24": "36dRTNmHVg3k2oyJcFNT4vpH39kkqZWj5XrYymYv3f7Po6moHie8xymfSbZiAKjop2gmQLugBAnv9DbgyRZ35W8o",
  "key25": "5tzVqADD3kZRebWUeKPBGXGqTe5PNDMNLYHyaWPFRNN1FoDYzLg2ZXyKARbjd6Zg8fiEk7ngwuPUWEZKyPZQ1PL8",
  "key26": "3C3fbgVSVEJ6XhNVpFkExHPyVkWom2FPKvT72UYuYB61wTSae4FB1CXHo1xaUFuQCd6MBiQXLVzYVSkUDfxpHfad",
  "key27": "59AnkduG9eGsucetoZxwzxAbsnnxyTNNKCi8R12UQ1moz3UeuDy7f6BQtgyKJJb2J51Pr9cxHtmaA7m2KYgTsnhS",
  "key28": "5vYz6jViPvkRE6weR1f7KNEoJKuheXhtYFsc3UhQtQPcdpN5yyWLCKHA2NZqqKe1x95swm1WLYCjeetFd2ubVGyb",
  "key29": "63Wx7Tm5N3u6Nig68E9HDtPUgqBvSvqf2fMYfL3M5GmwRDB8NCAPuMoTygpXF3sRz21s61Uoo1opLZge2cBx8RXi",
  "key30": "nRHMzUqD8R7xB3AndPhsqJ1HUhytMGx6qmENcjNpbis2BGQg6Vb1aZpx8KYXxgoUKy1jfJcWYsQEYPfFP7mKVaH",
  "key31": "4ff4aun4cwm9gsXUwPyqoW7YHZ4Q6BYassXS8CJSVt3SAk3kpwT2k7zFSNDKV7pD5yTuF4YTjkxuXK9dDt9rZrEa",
  "key32": "4Ju7XJQd7uhYrSf9MCa3uVPgr2eKsygTrqUZqrtonzq7zz8kkYqrWFri8MfZaTMS16VVVUW6EjmRuMGM17Et89UF",
  "key33": "5oWwkK6EGbTzo4oxDHY7GvckyJTBXBSFfz5E3b6jpHZBzCkSfty1Rn5HhKYXccPGBqBAvtQZ5LQRw1Hj5bJfnsEX"
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
