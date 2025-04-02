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
    "irzz6fxd2PcA31ahsFyCoeyrSAqdrmjiedhPtgrCgakiPpVPX3rBTk1AeU3Vu1PAdd6yjtCxUzXVJ8ZDPp3DwL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ELJC4GzeNz6xT7dtH3ooZcU79oUTaPGtTh3oCABwfmcvB9PMBE3iATLvHXiWXt8umHsSS8fBLA7sKKL6LyX8o14",
  "key1": "5mpssgAcpJaPgCAnCcfqYP87rXsbrispeKcy9jHhhfLxxMZCgqUWwGfyvbiS7mvXYQYm25PgxReFMxTG3BkUqJs3",
  "key2": "2MbkPMmLk1UDZNxSCZAyQd46nNMejsUuZrjnBivhQWPZy7PV5DdTDY5hy3GmVqcN79WdrbipyEQ2Y4SrmP6nSsXP",
  "key3": "7GsXgKYvymKekGH7iDZ9eWpNPPtxnMbfJFwjGcsxZVXqmyPe3QbxYxEcmjTvCcE1bUpPS98dRigsBbyq4w3F7uW",
  "key4": "3wgbfsJLSpoWv6taAKaipsmk22VSwkGRfHWk5u7vygn7e8vgksafeHuSqZLqSrNKLU7GJjeWB4KQuzaNQxhHctYS",
  "key5": "2T9Tw6MgbQ8bpLwWsSbChXL7qxUo3nLC5GGkhYuzYGc3pFbE5kwUVyWJZZd6XbvYTcCgRLyzTVMjKfYDgSChtu8L",
  "key6": "46qRiEv1Gq3wnFPGNJ8wXkCvW8F4CrnUaX3Egy4AFBwqtAizoGzH4ep3yZcRLbzVvxD9E7eZS1cSHUkSoB5xkrXk",
  "key7": "2eSon15Py3p7M9ukFFPyAoKdZsH1asfWd32PL9j2Rw6pX2xoNDfXtKz83FknhkeQtjoKR9Avo76V6hAd7GM5fvv1",
  "key8": "4ZZKeqgww14YKBs3WfCvu8juwYZ88HbJN6RNpmFC42EawWz61gZEZ2e7sfqb4StGfGhFFkkTsQQEY2HApKYcQCmk",
  "key9": "41BrmLvRHKZBitY9zc8vsx4v4QB5zt2cwwKHeAcgHJdUDqFPRn9o4omn9tdcTrAhXuAjgFn7EYkUEW3DEPTuepSn",
  "key10": "4Hd4xhtgbwFAkS8uaGQ8w81BMRfBiUDEU4x2k5ikXrhuQo5W2iqVwixfYTBpTs2pzscY2ymVY8azpt8A1DC8UWUc",
  "key11": "4YwhFHkg5z5ogdckZPhz5ZiW4NSi11snRdDQjuhLSiPBpc5Mncmq4UF8nLYrjkfMm8xKYMrDjvCYk4b2EcbbDkxu",
  "key12": "Qz44W1T2Pmc6aLTpFiwDEmzXg3CpVquLf46zH4fvAVTF6eVdBPMuRbPuDXS9Gvo1srAxRjJEpPVScYm6AeJVBvt",
  "key13": "38rWum63vDTWxbzaEXb5aFH9cpAr2bqazWVJdhRpeMo7hdawi24SceLMUJzS5SauhXsyP9GuF94L4Q3cYH6cGAoP",
  "key14": "4WM8VFz78Wxuf1yZyLQ1NQMCWhshQruyAgMAguAMsk9x9N7cVKu66JB6V8RZtguczpfzCsV3jLA5Kc46416DHxoo",
  "key15": "4nFQDKSu37iDz2khuD6sKcrgqqsMsygHzzGpcYxvqMPP1a1uvCxABWGVjZPGNf42FWWh9AN8zofYp7j7u8Q19bbc",
  "key16": "2S8uGGCKebNVUoY9DRreFXyfjndjBtFMzTEJGfBa8vg9xQzdDx1nU7J5mqRqSjStiz2yU4JjVoLqmr9VWboftgx1",
  "key17": "22FSnUEvG3hQEVPvmQqQ3jr6Fnd1BQpkCmvQVScCH6JeqR76QzVMJK1MHWZCLtQj5nEZ72Mbo66TwFoLSfKXjgk9",
  "key18": "2Us4eEhkAJoS7YWYFCFd3rv2sfmayefJ1H83tn1cY2aZXU15P9TpDd1vDRycakPoZEVbC5E9FCwpgyU4pjrg51wS",
  "key19": "MA7X4L8qnPFHvCvNnDKJUm8d8DH4q2MpuncVnQUpo4j2TXv9BtnFFA4V6oi31anYHTpssu1k2RBqWkY5Y3a1MRJ",
  "key20": "2So2GxszxZZPu3UaVwLYMD5ZZzZD78eJiL1uVQXDadFT7UiDNppKsFjdrZ4HBk2f38YRg4zjy15m9jf7DCFZSipx",
  "key21": "2xMGrKWvU19X6CAh2NSP3Rbkn3iW675bJHQ8kDMBocXmyoX9eu6qGegQXhssYiGWBPLBgCaicowQgWmyXeoxRRTy",
  "key22": "ARv6Bp9k18YzYV36s6HhbmyiDFbm33wkprtos6p9utRTdKnGCLvKZsjW7m8qD9Q9U8rSRKCjZ5wrhtWGzPefDzx",
  "key23": "22hDnp7BQm4EyyfbMRLn3qkCrFtM4KPT55j1ReeQkz6yuGErndGcEYHjRrYVS9wCH1UoyzbFDQsBgdfcUNMycSoB",
  "key24": "DUZhtrx8Ks75yntH15ViQwrV1ZTqt6ZTf715We4tHzTXiUooF6CNWr7AgGRoyTQzgyCBhLcsaU8j5weqWrKVmAL",
  "key25": "388izRpWefRnUZ2RDLCKuSNjKF35A9x7WAxWdRoWK6q8yhSaEz9x1cFUPv5a22h5dRHRLm9VU9WZZzpiUj4hVrPX",
  "key26": "4V23ZzW5JnWZVwYxV1ahRy8nVCfPdqQfj4aSy9X7AFFBymdbkKsYkprTgWbD9ASCNp3zZpKCY4StKJdKMHmVerJ8",
  "key27": "2wT2QpxMEQNgXNRY9xiWqAh8NaavAzF8Ju3pMzgcHj4wTGtx9as3tnhkrxsq8ZafZcW8bPvK3uqn1MdkjwUEfxCm",
  "key28": "4BkXRr7cNvtuCezqDNrTUCRwP1yAWvEGj2qaTLXQUWK48gKTJbVCLSCs3CsmTdNptPcpEKE1Hp7bLVnaEA9BtFri",
  "key29": "4KQp2XQphs5YZMLBR6rP5Rnejp7MB528DxokJWxwhe8WdGCi35qynZgfXX4fpQS9SfjQMotCQbNqnT9VCNfWGZiw",
  "key30": "66qUJJMQLBWVANiGz8SmKfHHxSbjHYMsk7WreyZzQ6jX75FqLN6ffAcZxf6isjEq4rijvVAbAeGp8jHgg7MC5oZr",
  "key31": "3dBxzDWiNdffKw5S1sMd6aBAUGkgG75DhkrhnXkbziknBKYPQGM9zHyYewT51A8uvUuWmc5uxxBcP2akzqQL36PY",
  "key32": "2piZF3kmUaTyD32wuHoWNC3tuQdoEiR1bhq7L9449LCSsS6vMT88w4iiWZqGPsFZ1jXk11Yswfs4ZNQw9dMVXtub",
  "key33": "2w5kGKfX7BLu1ArHVpya4ZwJ8Rs2uPfVrA59pyX1S3PJtYzJ7dgHBRaYoAD26m6p1wwWS5oiBQBEjBRd2gn5V9Hx"
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
