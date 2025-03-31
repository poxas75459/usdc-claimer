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
    "41tmHKwGZWA3FgrPxiHJLoZL1Rt7CTgRszifPvfT7ox54B5y9mtRFzVRcKgHpxgnbng56cxMQvQhJr7hbwLkw95t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6fQMreqe4Dq3bYe7uwy77NABzwJmtDAC4Di1VbjQWkmx19oXmdkCSchTAJCphsjtpbzS1PWmYacYwp6bMimPT4t",
  "key1": "TW9HLX6DBoL1qsUyQHZkt2W9DV9cR7ubDVQVV3uFJcufeikUZmmqaFywq5Sp8oM7L3EtEAY2QsxJJ55MPCKsxre",
  "key2": "4iTcgz7wDewW6QsZ5TZmKxAvCj72fkMBzUu6jxD8aGSCQEVTXf59HT87xYtPHw76r6emzHe6cvFJFNf4zMUotVxb",
  "key3": "5usHcLNxifVXbXCarZ9HAQFng1XrFKecgvHeCaczmFpSpyuvX81QX5ZcjvdKJC5sTkrV6EtF5bRRKWVemzk4okNy",
  "key4": "3wtR4qCgD9R35VSEQnmXXuzomt9VKjjGQS99ZuxoJP2hzo8hjuMvdby9eae1zLJUpxNpyxnAJVmdBXG9MFAfeuVc",
  "key5": "361uPLrbX6xrg6ZCz3izckZHHpkGRaP9Lc5hTtdTGJVFoxqfVTq5TZkqnAByTkNVLaZ8aU3BdCfT6nqu6nb1kfNh",
  "key6": "3zMKmPbRn4yWGbaDWJAYz6d5fPwf9VG2Ay226atwWW429GBa9eTJcRGggqXHSuVFDB6djHZqA3x4gS7NXhM8sJgK",
  "key7": "5nqwBsTAAUa8ArE3zrFFpyr5QHDxTChNJpZXHtyHLT5yjhhPWWySipe7RMM1TUYANksXV9tyBkroaSGPudonDpKW",
  "key8": "2ZdCFNjG7bhxvEpd2cifFfcUoHi6uZkfWZ1TWQUpk21zUNV4GJDnTZ5QUTqFjhLUNjbziNpDqG1ankWxAPsdneaJ",
  "key9": "3ACKmkmqUbyqeCfFRvEZrtxFq7FzHpgj8UKb3nWKpUTmR22VDVNnjM99v8VZ3GScPQvJb6mEbv5PbhoyAYG9qoGn",
  "key10": "2CFENAXEDC2p9GJ2FboFeoFU51yD93jFAVTtJ8AmDSmDrZXQsX1qoSsfjnz5nrmGruy4d1Y69shNtqyNJtitUsp",
  "key11": "3DuNbQQbmjCFps6QR8QX4A8SJSboxzHzjgYHnDqsZzMxRiwES15eU6ZvbZWkhw5UL4fUN7MGS3M3X2ZZYheR7bjj",
  "key12": "3pFKVCfGShgbaakhH1bHbtor4Rv2cVfjiy2YT8FzanXzp99t3HdLpBfGKwfsNpP6RuUwXY84NDnEDiSzMicbLU9T",
  "key13": "2s7sk5zKKPDNFjcTG6YB57cMXofwKXvaJmKv5kTB6BT3u8Dgv2mGmfGAodaE7JZXKiukZxHi3onJa6dij1xgf94T",
  "key14": "5R5pn8sG47kUNxeANVySDwJod7uUpB9eoyP9dLELdBGifWyeiAdZaoAeR8eiXfY4ofcUXPvxo3MnCcfEuogovvzp",
  "key15": "5cotss448KWPhEUzx5HUjENAvBg55tqhcvj6hVZw8P8oTvebgBjqdwry7ct4BYpHFVzHENWA3AhGjRG2oa7QMpg9",
  "key16": "4arMthrVkoToDAejG7f7ordQfZMA5PVqNAtmFgDYC4KTQrpUZ4MYeKXAEGceoALRKwYThJVjBf4ZR1yxEpyU22Zp",
  "key17": "21Nw4czjHeTyhwyQVJ4ofRUTDszQBzv24zVyds3AD5PYb9sCNLGWRSTCLpZjUemGGqqVeKeJEW4QdTuZPC5rDXw1",
  "key18": "3EMUmYv31ouBSsmHH7p6iq5xXSXnC6Mw7EmmpPSVWMZBrpPpv85w6RuF9tN2hPqD1iemhPMq6Z9aWzBfwEMnRndB",
  "key19": "3NCfu8eFmvCPJBAEkAEZ4A7JCbfGrNXwTwNHmV5PqG5VWoESPzP25goEhp9Uzkv6rbD8FJ1dUr9PLrDdTJxxRUGv",
  "key20": "4FBu5aqiD5sMognyAcACy4uPPjwyf65Tzt2kmukAiescazfDuFmV1ta61vjoecP7An8ohNZhHFzAUhqTWFkVjaA2",
  "key21": "5ivF4ezWNCtvnZazudZwdGF6QekRvdHsuNpgnjhP8bWsPbmUC8uKhhb1Gnmmf7uvCiDRySGehYPFTzWAdq4YmUGU",
  "key22": "dWvWhbrNp1jDv13o1uwEPnLWNvaFAZuiefVvVcioQXahtPdc4xDEbz81Cdi1U8Ss9as6HXQiDpukzcWnny8gAG1",
  "key23": "5CFrzaePXNY5UGuHUSpk1exPBRWPyhQHfAzdLEw6kKzeqNVjcSHSeTrso8o8o2cvk72JQVJWuwvJ7hGXJKDEpfy",
  "key24": "3GZ8fwpBFNupJ9Bss2dhsAkaEioeSN9Mbd3sSQ2mRSqvzWYzrru1yaeogjBPTie8XGrv86d3tZ87ZAYPQjzuZW9z",
  "key25": "38Y1M7qFvK6s4CDm5rceqKm6yurh5MX97rs3YvyiwPRbATFUNNTvjEjRMdFNozMbzmhM7vNozYkpgxyuWPXTguUZ",
  "key26": "5q6kQKtpGg1LaKm8p3Gvxk8bQAyLN2BgzwwgdMPTjQU7mPyYigwrFvJ8Xyqy47kj4TGmWze2kt7LcDoC69Mq5rdr"
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
