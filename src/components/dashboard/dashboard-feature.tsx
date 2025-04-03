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
    "3xVFTJsAbFXVFjUcMD2PCzotMiD1DsRD6pmSn3S9kUk2eHRAUwC9WSkKuGMKoVdirbDhVPmJ9tNf5g3LrBdvSxYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "434NS6dzDh3qVX632E3MqxK6aLnkBaQAo667nNKseYNAZnGxqsujBe5U83S9iTMTDXi4u8dH5HxaGMxwkMSsGeHc",
  "key1": "2edfxPq91cD99HmrZJRTZG9T5UbhZU8wALMrioWDL9ZJTqxQxCbN121S6DZWV2nPfakMJKmRQUt7b5NRRM65wNoN",
  "key2": "3x1MJfKsQAMDUoRYaxhACQkDJgbKu2mU3VWiLwNmEExczpcHNqVxN1YdrTv1w2uFhigj3Q4fSxcGjy9nwc8PJucM",
  "key3": "5QhVzD4DXHjcAvVDCQPDRzdoBAr2RynEcM1ipnEaSHtyFwfbrtkNifPYsn9xaQAbs8kqxu6mZpindBNmemLwHvVm",
  "key4": "5ePqVh5remcxtDcKhr8Wu9xoSHRU54KF5WhAdLJQKaBX8npULMn13ZrZ3xdBJXBbKDqEJhbeyWXG1tYzw36qCitg",
  "key5": "bJJvbeqrkLKr57mjgwxjBttye414M4TN5yQ5anUjamEyaD9LY2fSc2u5UWEayu3wgFyaL7Sb9ZdMkBYCnXXy24Z",
  "key6": "4X1W3GVmgdJwds2e3E3M4RPMd1KA7VaNr15uGQPnCkyh1fpZNrdVRvWC7xjb8kon48eWmVSKzK8iS1JG1ttxmyej",
  "key7": "3CiM4MBEYojRv9h5rWRqC9hgXPs9mvMKWbZXA8XYDjANCjenh3NFhAGwH7jqiai7HqeENJbuTt5BeE3ug29GRXdu",
  "key8": "4MT6iXinvs3Mw5Y2Ug9NRPhQMzNExxjvtZpBGMMAEPFwtkde8VNdFuMWJMhJmxDxCGsuGZanciMSE68wLqeSQQM6",
  "key9": "2XHMQp2ydcqn3Gr2c8Zq6sAQntPZbYbhprmvcS7GwK4Q8tfLJCFWgBzDDNK4KjzxuT6f47xFZuzsqqbg8x3ZzZ1w",
  "key10": "4sEhbv8bJB5zRTxzhnQninnmAf4sUWijsXS72Efk4m9a5TDR1wUuKhozy7tNDoUTt3oC4pTB5T9TRzaCaTbE1ocf",
  "key11": "5gCETiHWEPp4zkMtcLE94NMhHtqHPSkvfHgA78njZdskf5K2pTXxW6RMYyR9cYY7QgmToqo8MLxeCs71yBFWmK8N",
  "key12": "395KZypVDyHCzHe4ATutwaU4CNpp94yXukeWvnGnQagoPxtWSb5FkgUWoiiCcN73KcMq3HtrNRLJYPxEuQkWDAkx",
  "key13": "4BZ8pQ4QgrjW2ipBfgEvD25k3mpWQeiHhFT4u2Hjb1k5ZWkrfFjeq3u47JvC5EFizVnd4wdWYsZymHvQZL5X4apG",
  "key14": "2weXfdYRrA8EiGRHZK49AnRF4gMmwTkea5FyPwa4fXFRmqsARj68ArCPUYKVaUZoKEjdDL6rL2vv6Y272RZuqczm",
  "key15": "ZbbNm6QcYkQXaWFMVnHC9SctxwpFmfuAoywsNkzyvzjSzLERaqB9hSkjLs8v7fZ3bS5Gd8uncAMrvD67BxWBrEY",
  "key16": "4Yh3cMu3vvUJWSyDa6sN7RH7WHPNePHEcz2XMt3H7Gc4u5dqFNvV71FkQdiHhgLpKJGSX3mHWiYGuAqbscfNqVEr",
  "key17": "2TU6xvVpifgx8qrfXGtaN8CR3MqBjb6kvH7hu37vbezM45s9nTyPi7WmLoeNy2PQhaS7pH4ZkPZvdrz1MGPmMtkx",
  "key18": "65hk872LYvHoEyiTUpTDgBZEDKntF8CtbtCGBa2bvQi1cEQxS2d687m51Cfg2UGKgq4fMvTwVodWgoVKfdgsCnFC",
  "key19": "ifYDXsGrdJKhT7hyQQqTnaGQswArFxNNwC45RxnosU13nEDXmYEG2kjizTENTqMmtQ8adzqyasRMFnbACEpM6Jn",
  "key20": "trjU5K8zqfPX8H7fysNVjQFGM4yZiSDhxGc8rdG5BWWTz9sVGoejibaibRJYJHRN72Zf4fGTASeG7FCXKvMrbai",
  "key21": "56vCX5fWME9WPigajFAzBnMXJGJkQC2JLuSmLhfc6bjnASUYVYospmxzDi6GvcDkzqbH3jsdJx6vVtBxzKDipdUu",
  "key22": "3vo1mWqsLU2P1apexUi2HM4LYJ9ttcKxMMHq6nRXJbDVXJLspXVE9MBT2VkPxxRxTeTb3E7q9UMZW14ZPJLFLVMs",
  "key23": "GvpVQUgnyexkys47dTiGZfdPM11JYFDc1ExG8TLjjwKYdMD5tzGaywSQUfBhuuhLReKBczhEUJmqhkKK5MwZfqm",
  "key24": "2YeN6Hete7DDU3RRFkQxNqFnYzRTQWqoMoiPQLEikhmfKTmQuMhdivindGy627vmRaJaE6KeXWTUdNrkuDScyHdt",
  "key25": "44gVBuPqj9mch7AvKQxKaUR6mEwTb5tXY2ewEkpkvfQMcaoD3zjdUsVHLd6ahkB1jcRe5fggk62Pr3cTFXMDqmwG",
  "key26": "4PriXLoWyBGgu8SMEHmzPNyK2rQmCb3sGMFfDwy1mFq1rbbBZV6m2RnSa89GY9vHRxzLHruGqD48QveAqNL23PZg",
  "key27": "2WKu3ejXguBsKdpoNGpaG7rvMhyLskZeaJz5RrMR1Zc9qNsMLQepfjVs2J5J4LLDoS1Sf6Dkb9oXeN7j7Gd2eXkF",
  "key28": "28g4qrwxbg4ZRtFicWFirj2YRAokfxPjwwar6o9XzjReze4K17u1UJB3wwYff1zL7LgbPU4e74frGPHAMbpDm5Lw",
  "key29": "V5Js2iUWsoGqtsBoUiQ9Pn8WAGyJKbuLYEDGwv7wZpHz2L8Y6dieewnX46w3fAi8jPz5vayeQ2YfLHJYYtdybCw",
  "key30": "2Ruy4xxGZy3bxGRRQBLGeoCK499vD678JCHCpz8XaWxwjDp4XE9hgcCMnn9Bmp1Uso1fCQYQGkjJV6ZR3SUuEuTH",
  "key31": "57TjtsRAqERtpYKnhmXD9bMWUbrzr5fV5G7WTzWZTPoSezi7SyBkWSzhrFSwYan3i6gYRYckwQqStGPuv3J3kbRQ",
  "key32": "4N8s6JC8dRaMPs1Zcge1JTqc8U335RvZrpVHuEBYVhiKNgXD12nuy1VWAccu2rTqQ1jodg8gDMWUzhsaqKr6Cd4d",
  "key33": "2qGGNm4FN1wqAYz9QjQoJ7gxgGBaPprkBCTo3XXVHWB4MHbS8ybc5YD8K9ap75c4sUNc8yX56GyATmwVcrAftiqu",
  "key34": "5oFPx2gW7KbHSvb5Nk5E3GXjtE5TB2C7wyk9YJAMtZa9cejHCm1chkGB5sQ4oyqCidwXwjtqZKHq3LaFmGHjyW9X",
  "key35": "9ho94gZ4REZNH9GfqGpVWMGTRXzkNwY5QUwb9SztdAEkh9mFuKHAaNxaYyBmq9gqzD2xD3on3uwMiTpYJgJdkYm",
  "key36": "35aFegypcuYRe5XuBYb8STHPam21EFgGE1ywWYGrWAFr3nVWWjpscyB9aXRpng68wUYNibDd4Xcna4E1MjqKXJPs",
  "key37": "46X4sJR1UQ1T2T9Ai1tDgoMzH2wn7NEmg4fVXepUc9FsfbiNiYcjj17ooVZn9HRxgSS8uZkwGxhXhHgc94SDTSzn",
  "key38": "TEydbN7kfYCubsrP7ubWUsWVwc9kaiUBH7xjhJeENktTpiPQczP9WCo2Qmu4DykY1mKFaiEESRJYAF3vatfnyJk",
  "key39": "5GAtw2FKpRCsCfFniEzWtfd9Jhvw7e84kTnJhZM5Lt35MVR2ajq2mCQfqjKYh3CUH8AwkrsU1HLHWkB48NArZwR1",
  "key40": "47CC8qL7rAzXrgGzVfqZ3PmSfQhbrFGNBH5nPABMBqoRXjXUYMRA6nbb3ri1dEiJkQmXp63yRj7PaxZJeZvWrLRS",
  "key41": "2oGmnML5dmRuBE5ZjQbe8CRGgzfRCRKfqua3TLDcsn8Dj68Zzyha6aFG69XC6DPrr7HM95rYRxsjU42VaXyFbQaZ",
  "key42": "X8iV9isvR4JktaYECiY6eoifSReRkk9zdcgZNndCzFkfDYwwkpVkzSDY1eJ7WzbAaCBDBkrFoYco13kaWgyNZRQ",
  "key43": "2qxhynRsnsc8srCcqG5eG4Pd7BfQLKsmQpDWb7VfMZxejcnFBwrctmHfmKqpT4LtREi2VwK4GzhB77XbVQ9VREHf",
  "key44": "5amaesTzpD7bQpcQ3uMbYrAwEoEtEnNr3bN17HRP5UoEcNUhp4gLN3BDSoRcthBd9wZQnBLWwMB3R5uqZRMZNW37",
  "key45": "58eeYi11WGqJVri7reMLdasoQtyzVomQmNfsAUG4Tep1agEPy1NptK8Q1uxPVNxkxE5YxCYZ54guD6WQu2QvMLf3",
  "key46": "3Ns6mefQ96YPQyeTvvXpNAMZMQrMGxGWBpiJZ5YzvKmGm1MvGhYf14irFEAEz78uZZnXkpFa83pcyaT9wWdvj9MC",
  "key47": "3ecThiC1X9QJhbvRvrDYMcUzKJkDkh4uPq3mjqxTy3yrEEPZGiHkFZhK6GEDnwmTd1pZPd4w1ng9u9tbcNJMdkzm"
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
