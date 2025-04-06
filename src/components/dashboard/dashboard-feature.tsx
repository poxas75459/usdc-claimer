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
    "28tABFv8E77pTyoobnAXhnKqRmPFNvQraUghqagp5sJCAhQ5ALf5dWhu2HnoTLVXQRe8pXxx8fJN7UUSNkJU8E3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xYJ8pcabWep4qgGL9NndbMve7nuiVXBu2EfNVPcXDgebzRr4E6pwTfGEpJcQ2Q2a7LvCWvcXNioymk89ZQMptfc",
  "key1": "649XWCG4EkRJr6wNtgQZGwfvqwsyghLvcLEfiRJJpQi5mfPw9b4aPdjSzEyRbfpU9WSMgyeHpiiUx834f4yAZAFR",
  "key2": "5ewHt2dhyokRtr2zT4D4K7djgotA7G6HdWfAjTn1fr5bkNB4Fkfpq9ihc9c4kJxrQVp1MPcmuAe9dumUQZbeVi79",
  "key3": "4T6edezSHPtrtxfgieMFExntqU5XfY26QBqvrVUFsN67eksmbwZbG1XaWnCSEF71QiduzQFCoHcRPFHm18vxbUjp",
  "key4": "4x9PtjV4DMy1pJwfswbbtxQRXoh9c5aAFZTnVdna9dqLqBB7TY9mYUpHD2mX2nCC7RXykVDo9nm1J6KoAPxhZp3G",
  "key5": "6msJnd9N4p8nMt7km6ssCcPWtsJ6FuEQGfpsrRx6X3ei2WpnPbENeZ8dAB6oYjfGdcTWNzzwLNhNFhuiPKQEdZt",
  "key6": "4snjxPbyxQpT6bviZtnGx5GEuiFva56wyaYGsxHZkzBZxdGE5RswvokJRY5KPUb9GH7oks77nsuaEti4MkhdgWi9",
  "key7": "3XFNaTzWCn5UJ24kx4TwAxggfMYy62VdtstfmY1WTEq3Seyn2uL3dGRFQy97WGMmXnB5WVFs9ShDrXrDsfoNxAqy",
  "key8": "22bVq73eiLoWtF8ogJg6hiQ3PU5HAFRSgfuBX8bPSzFPyAErL2TfNU9prhWMs5GFDKfQTcncn9QeLs4Lbks75LYn",
  "key9": "9HWvoe3XJ3VZgZZnWyXaRHjXgSPBTeyxHBbeabni8EmAoFBiiJJRniiSKbDBMewnZEn18zMeRX3ND8Gng1wQJtB",
  "key10": "4zsZaZAAyw7UaeASadcxyv5hZa6HnsQJM8QuVR9pj5VGs9tQHV6JoWbagYz81TubAcNEvQ9wfpJa1Wv9Dt3KJg5a",
  "key11": "5WpP2bQS69J2jAnEREymacumnqVsynmrEG2r6beBdzNPfMHeMp6sNRqN52ZPfE6GfXptVUHfewwFUDepeZZqiUAM",
  "key12": "PPDBErcBKeWoKVyYaBhDbRS1Fc9BZwCvuWWh8YvL661EPMB6K1NdxvTSwjFA9URWDRB7AULMPfSZSQk3knsSusX",
  "key13": "9WXN57WqmV3983gh39qWeZAodb5NFBtJjUYR24xrZqqhqEUBdvXHsNiMY6bmRt8yF3QmBG19bzU6suAQ1XU7GDH",
  "key14": "szSSZtxdxMjzHAdquNGnaJA2CVTB2oy4ahtDWu7tGMg9a763fKzbkb5ZjC18apME1zmCNXcYjtvMvDMXEDk6ziy",
  "key15": "aocrVJzasrVN1njFkeRTndde89wLGP31MnHrSF48ZbxDaK6rf7xPH5q1SiVhqo5MAdTVphttfttrmZ718AMTKZr",
  "key16": "66d1L7DsDVm8T4YN5GtxEVoDqrAQtCXEkoisE8RApNDSkm3aPiKFed99rUvFVDWEpvkuq6jfo48UhVEbMX5RuZ5G",
  "key17": "2myCBxQdSCNoSkdpy5EBLwrPAtgwaXgVcqmnWh3hUFas7y32xAtmE5Z6TD1HtGvvVfjwXHsQ2zc6ZGnPRK98kKca",
  "key18": "4yrAXRruYH7TZwBcTxU6JrmNAGaZJLVZheSJnZwks4VHAcQe1Do2Qrj6Yh9AUz7W75CLYw9foMUzUazekS44gTnq",
  "key19": "5ikvMrndBRmNA6VDMmcwoqpC7uGnVc5cjDXyzARpsUQnSBLfScuYqVN5MkCAixoxihsqwS3Txiv8sRfwDUtNS7FJ",
  "key20": "5woNiVTPcFuaQv9N3VCT49xHVCwCH33TwipjtM2vk28b9D5eZiAhtL7h4P7T86qtZ3xHa9NQPDR88H7EU4d5C9VY",
  "key21": "5YLrMK1zq3JCKKFZsBie4Nes3iBbYU3C1M9MLQPRLKGZUcwdb297znLYtskdAjYdx3CiHkd8EkBGKGxJowRzZCXC",
  "key22": "5Lc9HKxEQHQzVih4Ro2kELubZnmaAQQdgr7t79XkBRWmdoBUfPXdaReAWpjreNv2rMipj2582uhAPM8DQtrpZFsr",
  "key23": "1aQr1exb1wDr8cr9NWvMtvJeUxTJtG94Q382QpEVV5jt9hC4LMVUkaDHxL26zUd9eaxBmTBPudaPqcbhxfkdk9P",
  "key24": "3BYkxT3WYeUij2ZNhw7r7qvtfg4TqWhHXsJu9dLNmZW1jFeUMKXoGf1ztsmEJmrPVLqHjJcWM9qJqcYLWWmUZKZd",
  "key25": "6477SSrXfASsnYsYVB5Pbw2uQWRTGLGtao2FM45m5GftzDWNcvWCKmwLqiZV5CiTB9qgALZMqv3i5BywaW4DNu6a",
  "key26": "sqyQh6HrpBYiKLL3HPVkUGLVBftpwxFPS9J96qRHrRPgougwhiAPgn5WL1d3hGCv2mytkjbgQJAsYvzqqSJeqQN",
  "key27": "2mod7FhJeKQkVaZzuinbDjoKm1jwpkDF3cCf7g5FC2jJga5rQpjQ7aeo8apjnk7ZL1rCEUvCAGfUbNFEnfCr3Uv7",
  "key28": "r4r444wCBuVtoSEm64cX1ZQ6vCiYDXsXgbHAiGdgdx81HB3ot4re9b3wsjMsBPPD66GB1YRWDYq5ULXmVfSyLX1",
  "key29": "3oA47uMBTH4d4Dk2Wi4RwTCnLEZWTtREg7y7n6gEwKJqvA2yAA5AiD7JdWbWgphm12H71ETVnRh9rKiRU6GhM4um",
  "key30": "3G3n6dy5RXpGzGQ91fSRCZdH9tQqJESKZM3uBb18LrjSfNHiuL5S1ANNEH1y1zp1kGvEici8z2PWyQnrEKK7qjgP",
  "key31": "2LwjyEb6eHq2gLQycq8FCDs6hKf3Wk5Z1rbwYTDbNVZhXxX6N5mXB86TGhLnk2FgknDWjKXZJu35eSGgDRKygiVk",
  "key32": "3rpjUP5rVj5neN6nfdXaEHiMHMU6NVgUjnfoMUf2khuo3BRLAXPUxzxjeVTziJek9NKoN71Y9t82MGNReMDacqeN",
  "key33": "3CVrg6U5RSQE3371cP6c5o9fGLKMJsokGyQDy3LFRmL4CNhonKk98jVfWzHjRe9bsbr7Aa3Xh4jpMaQGuPfUNbUG",
  "key34": "7DSXNreaSNozDHYGKij8zxqSzA6dQNWcMCed6TWEnG9a3zDYJea2qyutL6aTFzwF63691hkYGQcsL4YDct8AnMS",
  "key35": "5dt4WdncZ1k8yDsmVFuSsqZbikZuKUzYx2X8eRSnDxXsjWQVoTK9UwN9xjANQgKX6bNiW7EKTY7fgEQUjrToaNKY",
  "key36": "5ZDu5hdMjJdxPPTRjM7MM81gXteAumiQiRfGFoKH9j7cSK34Sb3147n2ZpFzVR35TjvTsM1tjhJVhh2aEGqZb1VM",
  "key37": "3NYejnNPGSTUbWBAhbx51QbvnT3qYx68bhdASB53KUjNFyqCBUdxFzc22SDKKNorjEdrydhSa6FPEpbMB5gTmMek",
  "key38": "622vKTagiFELVRzPtRdpZzT6p9gfRFRcEBa8SCKQMKQHuR8Wv2mtyzy4Mgssgq6G2idPs9UT1oYKsu8gRdQ2FwFF",
  "key39": "3i2o1ATr7xWS9qnqJZi9rdXma4VMY78T9ucLuFCjojcYhX28aAWyyutdohNvH5ji61uG8qufFbQE4MS6NgxffA43",
  "key40": "4q89A8NLVAsSnvqsJwgT1z88UpA949bbtyj4mwqW8QQ42TdZtWVsNDtDdSPjwmrCFVgDJ8PtfDycajY1TKn79X9p",
  "key41": "52YTgfHEwtDEHu7fsgRSKm8L12V1w95ZrUKMYYT1NdibRJ1nrKDHAygHRSY66fK7qPPB1n7q19t7x1QXhfYPnjQj",
  "key42": "3evmUL8Cc8jFvnHoRbanLqGw2BeLsersxpcL8zkFf2GHff6h3H9BwVa9CMGSxZo8ZvFjqno974HC9odqZWdXLVEa"
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
