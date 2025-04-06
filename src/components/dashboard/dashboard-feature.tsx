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
    "3n5dEaM8QTgMY5f4oKeeGR6PTFyKFQqAgaFY5VPyD8tqzkDkZT6e2y3KA3CoHUQUvibE4YjvTkhv3UoP5rzd4fKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21DTNpKxwaovWcDgcfRX1cJdd2SyPXRAtfPUXvc2v8EtUhqW7qz9DmaWkykbCh9LnTqRMTcY2KJDQGns34yPeEEJ",
  "key1": "4ryWnn4w5GzmisqB8X9goNrESyXGGhffnaa2euJ8g22WKZfp9LAQnf64zaiPftvvsN5LqML88mUC5sbdqUcvfFcB",
  "key2": "2XqNTKnm39361exYeKN9ePcuuzVzLsAkTkhBmweD1HxZum4kH2PWiYZkC3DsNzoDC8WuA7ZHE9vnGtP7uhVEKe1K",
  "key3": "4jVUApnph1PteRn4hiAsWmCYc9E9S6NSsBTxgRVYFvN2FXGo4idjLdNU6NUjnPSvB3jMQP6H584yXK7mUHLCtTa9",
  "key4": "4HZJayA8Aa9M4EG424CwXw9WiBBmpgnQ1hgPhRi7GreiKFvg8jFsmdDSd2kGEQHtnGt1G7bVUJqck4MFtup5SzmS",
  "key5": "xJornJJuYj58197kbGBdij4mAjCvxfgGtYgVaYJ3fDvGXCqAEobXgie6UvmygB2kNqKHDuV8pd1tEDWa2aujtt2",
  "key6": "3CNEaVZEcu6M6rC9EBLBhuDUpmcCsQzckSKBSB4nd3GAR3k6DVN75vpqaqqZe7Hp8LyE3iUhykFw2TcQrswC573G",
  "key7": "3KTRLQbvQUkYdGR881mP3mHmhSYcbrSMW6JzrmuXPLbwMdmiudmyxkgKDNg8zkbftgxhxbAxKznwc2enoy17pXkL",
  "key8": "21HUW9WYuAx6ZzDQHnEChUAp8nZpHE9yniiZzXwzQncyM8F36Gp97T6NUe5hYwZh7zkyMb3LKcQmEa8AQMgVzbEX",
  "key9": "655nDVhvxB9tDSmpPDWR8HjY1jVkixhdMwL7aZMMSpFccSsEHP17XxW59EQ7btjty8rZNnDAwSDP7XaxoGGsdShj",
  "key10": "65d4n67hUn49mDrrgRb7qe664dpYLgdPrZmFHccjb1HsLXPBNSEwpcvNaMk4Mv1Z5f9VFaCtk2HtyYhrUJR3uaah",
  "key11": "59BYuwdgL1USf9THHbt4mQrCrgsqGUAaZDBcB2Nq7us5gVaxui9BVK1ai86sgVgMvakWjNGyN3FCaR8cdWyQMPzW",
  "key12": "5J3BbRAX7jX47S8xg99tsVkJLzAzshRmiP7VLsEEkqo5KX8DEfEyta4oYQfVfhDH47oi1ksiELQi1fhHwowM2kVJ",
  "key13": "iA246H1w9fjGPXKpkBQG35a6i7g6YgFn9KdmwNPiVidVLi3C8VgD6BwdecuaYTC24THgY8G5PCqvtfWfT1NNkLT",
  "key14": "3wjtdzumcYmgbfFDCmfdKfmGnaEsRpr9Sw2ZXdRhrfs471J4N3TCUPuZ7XEoARbkkU7cowC24ZtN85yGyRQK2g8V",
  "key15": "3SMruZgc4hx6Kh2iW1SJN5gYYMiGmz1DRF8JHVW91dE3N8SK3W1xLnqvXh3UReR1vkNU3PxorFac8ubfytWpZBwS",
  "key16": "5SLRm53mUTbfV8xkAmhDaZ9cQjoVkfbbmLTuv1KVgt3EoLQX3tqfeZCS3j3ZLKSszr6qRd6fiGifkxJMHb3pinrE",
  "key17": "3oLNs6XEMozEf9sNgekwnrRiA1GDrE6tafLRpuAHYptSCtLcbpJPrsX5tHifMvTr9Kn2MVqCSHW52pDDEL37iz67",
  "key18": "5UwhVCaZ9y6ZsCvfFtksvUK8x2yAivYVQvYDJfxp9FDUmdQxU8rf1WP5Najgquu71KkQfuArX12LFLhhM8UdXaX2",
  "key19": "4o6jCYnQCXfXThdSJcwPLv1Ub7PMa2idRiEqHd6MCyzKBrFUtkEBaZdVahJMwDdH7RixHAM3q4Ao6VbXpN5cMpKo",
  "key20": "UxBnbNqLz3SESY5yb5DLnA4C7gcWm8CceHYJe6Aaxb5EnscNHRqAJk23y6bXnR1QmPt2S6v3xHrBKbCS5kVAjy2",
  "key21": "5XWYSj2Aqd2oNL4pwnMibkq3EHQoCnwS4LSFJmyFkARJNRzJX15iSrYSVVZDbEnxCrMhftdvt6xNDQ1AWGo4WzQa",
  "key22": "4V4N14YFEju3FqP6Xw97oJempP8mckWceFeL4ToecxTBjAnsoVvxCTeRqGHzgeaUfyqUi9JB5PbDdpGtExyMEGB9",
  "key23": "ivpWXq1K9EEH5xzo1FNNUPJvAvLC12jXM1CYJxQm1f1TFUPQGGgqFtaSitRuFDKNvLE64dGrKfjUyPLr8g1FDDy",
  "key24": "4Str1o9NDxxHGrL34neAfgmy8rHBEiFMPBS2DNxQWH3zP6y4NCdyniWDbjYwpoy4qKFF9WU8TgQNmFiAyQZBtBhb",
  "key25": "2BscPzf9a1JQoLu6pCijM44esZYYuoJFtbEcDsShJCbbwjqL76DiC9VTF45JUF47L8M17FqJ8wim5paP9KPVXZN3",
  "key26": "3diK6ssoJv4RLksvk1w8YphEb7vQydz5wYhwUmx4vk6pM7YXWVAG3ogGS4ECfR8VKncLkkQSNbJH52prLX9emJDL",
  "key27": "JjTvbeDowmRHqsQVohxhUbj7BgAKSJwkRDansHUTbQpwoBeMHFGTfQ5e2nh3y6ivxXUkFaZfVWTw9tZ6jq4bxe8",
  "key28": "5tPZARJBmkBcXcTTGba2xnZnsuP41rgY5CzPrb8aLxrjtbQz9sArwmd8hutGK7A4Vm4jR1StxhiZ2hZHU3sMVRUM",
  "key29": "67LLaFumMpX4DhC5unZgwt1gTh8i4JvGi4di5yFRUne6QbuZmZSXAg9qMDFdZPKtCNuzbjp5bp7VrwJnaedpEwcb",
  "key30": "RVd38sxD198dgMzCcZ2eRyAGwqUgFwgxXo2NjwBiXUFPQLvYvg3bBiUvcmncyPU8SobkgsXWCinEUPwBb16pS4A",
  "key31": "46hZWR6ZZQPtgHqBtkjBzPd4Dhkeot84dS1cm6ssKAvfcXRKqrLYBb3XbirJ59L3tCNG6L7sGjSLev81E5MrSBHN"
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
