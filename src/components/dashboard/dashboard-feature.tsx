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
    "55aPWGWhjZEMKgi6TokAj2SzvwjqnXpVCcrJ8N5r4AtVykXBNEnVgXxMKVutUL2qt7mD14xgvtBHpiPtWw1H3aDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wFay2a5BPwW3SLhb1z7WZoDtw2rQptSy4ue294LcaGoGT9VTeKneBGBcgjUF4PiniVMBnsWBf99rLyk8SSW2EuZ",
  "key1": "DWSapsaRK2VbTUD6N4ouxwf4ziTL432PUVBwuaW2eeMqv5mJRwzZjajMAj3ooRXdNjj7SAcmgCCAQCgVt5Xn66y",
  "key2": "2DKtNBXm6FXso6JZqUHoZAVTi2ddc2ew1LuYNmRKc8CbEqVKZHxPFwgerhPCwKdWHYU6FQ6nSfrVw4fmXpdDuere",
  "key3": "3dmeqxsDzqfGK2puWQzNUfgeFp3HCWYZ8LpAguoPKAAL5gW1qt6cWNRTLqQnuGHZ4sfrW6vnzu9kNwrrsRe4LVim",
  "key4": "5Mo9ea1ngS6mg7RSSMnRQxjwYPjaPPE5tkg5GWy7kD647eE4hTnhoWFQKVqEC5hhhus97qBt3NRVMpNcmP3KR7yE",
  "key5": "5yJpR69m6P5mB1siYSvpAnBuQKC7mMEUZ1317U8qC3FtFRDheBTqmUSMCnQZq8JYZaWgfA1AKdyFkpMgb6jQSzDq",
  "key6": "2WBTxfQhmbBvBcwkVwwRdRBSNZ5Mwi3msYjrABVPWMTyLKaGnuPVkqfU22H4NZjv5GVhi1RS2X1vNN33P6xU9c21",
  "key7": "njP7F6KE3fFcM29v4hm8LULxBgrbpW4rT4CWA9QpnwhXJTy1uPrVt1s4DQ6sYvHT6c3hvwaXKkjwwVepKEEAV3v",
  "key8": "3WMT3Pq5HYdcTo3Dnjavs51RjTFJm1wZAmy7XnXJho8nAWmVz9m12He6fESDvbP6rtEkBBtXA1j88HtF96ugdeyW",
  "key9": "H9iLr4yCRaET42kaYL5G7g3czSHJz74Q4WfruZjdfEWiQEAmtNahBzfhuUEDi9dEkiLp5i2hVVHCT6MoMztbZGJ",
  "key10": "3LcV6fPnqoGtJ5LuNZvf8DVjBk1gU6D2P2yRyBm7QJfjA9VUN1UXZ3s7eMNjQ8CAXsiw6748s2AhBHmPF79WPgMR",
  "key11": "3qtqgRUDtG35E2F1dWiFsNHPR5T5YabLufNqCSgLPjB76ihHjym8qroBFa5H7548jsPQmpHXC6iJowkEQ8qKLvnd",
  "key12": "4bdzwvYuq9RNxBvEVg2jprGAyDqpoF4V2zbrjnHBwAN4QaMXPDopRr749mffFcipAxgde4NPV2JoUETcbVhTCUHd",
  "key13": "KRHhgXTK4KogBjz9Q48arfJsyQ1epS2nm8jjTasNUHMZoJywTafE6yE2iLRAYZjc7S3roZCXgcw4nZpQLv9Lw6L",
  "key14": "2hhZgYK6iYQVsGUZW9dJEh6LP5SGCDsXnL2GJBH7F858Tkc2FQprDRbpxpZigAVAzTuazSCTn2HLXhDBc1d49sfQ",
  "key15": "3aERY86939SWVvtfnegtZ2GWb1wWWgeTUY7xRXSgT9PzbQ4D1ZdvVSgAJumQFwJj6tPH8uU6JkwMWP1prH5scLXx",
  "key16": "2BXte6SgpCLXJNuKj4mFtjFvYotNf8pbSUhLRGtibF5c36VorZ9aQG2B39MdcjFy3rG4CCZvdA99f3pEn2iDtoKG",
  "key17": "EqYxe3kgU2Z8U4ChqPGGPi4WRGm7JSMJa6SqCW3tymVxzYMFScAsxrL5ExF9a7NtShJmnt2FwV5KGoqoWjniUd8",
  "key18": "3b4FRbmfV3LdQdKEmedHvoDFVHiZviN3X8CKR1gcAYkoKLxxk7moXeAreXfSzWNZSLDC3oFHmNjRBsmq2aw4QhUq",
  "key19": "5E4BmdWwP5fQUqh3dHmM4WXvSs9KenruVuLENoDeNEvmiuDYA2fECtELLb23wU35tkxAi9LfvhhaUku9rc944eoM",
  "key20": "5DDaDsA3LQUqeXCZVLHQSKcyKoC9DH6ZrcniamLJxEzWtaJWCzJiL6vmtbqZN3aQbyctdFBcHgYYmdoEwvzKr3az",
  "key21": "27XrEa1wBJoUUtqKxEB2F5apqpEPWtczsBArnMmZxUf9zC92Tb8rVMgdFpz8or2x6ZN2R7ZbakRtoaBTtsbyU1Mz",
  "key22": "47dPpqXWDzT6RgB8y2wMbFJEN164MztFZQinZB6bS2D5S2h1PUv7qus9dozKkwTKhnxvLo4W9om3TNzPn2ZzWi4P",
  "key23": "44ndfZAro4hvHKfKJJ6ATwVvm6q6MZsJdRQgK1bQwbM555pPBBnvvSMkKaxBxumKqs28HExfcVfZFkwSaBw65nky",
  "key24": "2NJ4YLkwLuYxtYiqQLGPBELgWCo13sPoehxNK4cr277CHya48ynrvbUkuTfGEsouj5VhNyVzxGgzMvT1h87LF6F1",
  "key25": "4Z5EdftNeLUVsHo1zUUbQGcUjPibzPqYBPvZto8F2uNJzJnzBAnxikAiuhJr1MzSAQ8UvLW3H1HAWKGXjqMtQUvb",
  "key26": "3cAKZw4YeNjSNY9KJKEMZCX8eALUuJVviifxh1es6L9SB7GcYAkY1rjhhKGkoKhQg2QbjyCD3GT6qFuPjCUiMFPe",
  "key27": "4Vegj2xjCK7zkC8ogWuMm6nCegjRys21vEP13V4xemnRJSLsNH4yvuRm5ezeHN1gKkuTUwmivN3XhXoj7V63EzLn",
  "key28": "3QakwPjDkmy86iS4kHHVVTuqXx4vyQxddyGReztnNyi8V6NYVpBq2GzS3eB9D4Z6gTD3Fv5pGhUrSjzu9nbpD7H6",
  "key29": "2qGfY1gF1CnxKjXsRstRrVAQJoKwY6TYsiLufBMdqEkDzqHk5HaKJe3jjYWZniGQUiMJxd2uuui5BxiqxMCJ1iLk",
  "key30": "3BeCNSP7LrYicoivSsJhBZfTYWboiv9vdG6uXdzw5ykbZyZBp9qwTUzHTtk94S7JsLRihBLaoVfLe2AMDCrmW2r7",
  "key31": "EDFr14ahNQSwEYHs2fMwkFPexkmywiJvHoUFa7raF3ZP7oFWK9bZsXoZyhn8gze8qSzznHvRAJP3ZuKFGfT1hqN",
  "key32": "2F1ZEuNuVTmiZzEFffxz7AMLXcfFewP49KdX3gKAaXePttKq25FATBb3PiGZB9XsA5pZD3nRKhtNTeCap1pYdNHg"
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
