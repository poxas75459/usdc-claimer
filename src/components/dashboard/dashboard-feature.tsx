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
    "4GVk1qLLHscybeQFzR452XEYu4kd9ZGJPaUdSnNmWDKrbFoRsYnfum5HxrGBchLbVwLKBaD9W2xDg8c7E2dhL512"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rSssePYYiLZVbKKStBdGkvocyBJRDtw8zeqoURhpjyMBfFy4Rz8sFvFbmzZmetVLqLt4sDXY5c4Xup1kiun6PMQ",
  "key1": "4bUai3H1TCyDc5Zq6b4VHYoAyrTqTdn8m1RvD4KchrZVykn8v3srB2Hs6oWzSmutX1yL4yw4SiZ6iBNKMDRNtdcP",
  "key2": "438hKqmbF6ayMSFun5ZJUiqVKR23UWrywfvPsBbNKS9qheKqjNdR1DbBvRsK8LR8PeJg7bsS9qVMfSd2FsNoUkk8",
  "key3": "52o4KoSfPQkTiRochwkSPnqKsLfzsyZA5K2jbrGKLKPV9pS4BPkNLdVjKk5MDdTquShWhj3DSUwfcLiWKrtyissM",
  "key4": "3Z7vWUPvMHoFMVogVzX9nSXwinfYD2YA1E1Wj84e4V67uHqHey7UxE7PpB5A8F8oaCCZbitm23Rg9WkKUxCR4XnY",
  "key5": "Fo6jtxr7oBKtkNL5Lz6tis3jyXRKkHF8ULwASU31fdUJPuSVBgzCHNhqSPWcm6m76DQEGzescRoiCdbfmeyxmtJ",
  "key6": "qiAexiLr3BBUS9tx6bwKxGMTQA6svAPAWBDhbcAXK8dQvgJGFgeETVinjWUSmfekf5hN8r8g9zssyNNbCq4tGML",
  "key7": "3ymYCWyF99sxcwqQLwduSWWtVv3BtWY7sKsauHhYFpYUk9bZQn7NgesTNRC2KRTK8c82sDwEVmTrp5LG2DSdKuqJ",
  "key8": "5cenHR6Uuo3UQozokmx5nGeMAo7bGC9guaW9mkqfBKsApCDXmh6MDa9QkTypzXkJoxoBCrtcMpTBujGBUQXd8cRe",
  "key9": "2ru1mwFBvgL38oXsCy5g39zyzhfsTLZTPEoDPxMwDRaqrLzTgP763FGbba8csLh4tMSdNjnsyZN6k1NWEamHYDU4",
  "key10": "1dY1b6ujpmQidktrYB2r4W2FWSeHC2SJ5xa5EVh1QFNcUt4RAtq1JMc2Hs4JNyyTAu4ZX9Th2jF64mT9SVgbNw",
  "key11": "5s54NDwo5t2hCQo2ayzMub9JrWbjqP9DuxXyGQDKXjpjRp79RfnMH2cE6yXPoW2hRS8FWYiGxt1DEiCroa6zouen",
  "key12": "4qvmaJ5YgdxqBcf5b3pgPvfaGKJTzRJkrW1UemUqBFZpT4ezoHVxBTzn4ZibFKzAW3SgbYnt4SrguapBgQbDcP7E",
  "key13": "2ZweoBhrm6AddX2KAgfjn4kJBCSyMALatCJYYZWfBEHpX1FxxfPH2zWNAPZZfd5jztFUifExYqCaHiTPuHTKZN7q",
  "key14": "k8LVBG8vZGtbwrijxsVbP8MuUBRwS4MQTEXWB8yLVnWA9vECwsn9XpWVpztRHnFZdJTL6vSm477Zu6gmGSKg2Pu",
  "key15": "5fL8trVtNnCdCgJpUsdqHZghnagvdiKRr5cGKg62iMbNDGZviXmF91MBk5LSU8zbZ7Hu2vnAgCCveSVsDMUUinCy",
  "key16": "4tgwHv4mMK9fWjjCXuxqJT4znv3zkg13fJ9WNKa9wywaBQbQbdhXpAcMgsyrobKgDv3yM3bDMKuVmLqhnXQ6ze7Q",
  "key17": "5jPe1RVv5gPzPtJ6PzJpy7K8W63pYvGDEizApqRTYpvjv27yosFjAgfkMrcEKg9iPt5XL1fXasE2Mm8sWSMgAvBp",
  "key18": "4RmguYJWUDgUHBJs4KKMj598ePEVvNFvyZ4u7mmwVqUTduKMVJZRi7xDozYgCX9PVP7MV39iAevP6z9vadtY3Kgg",
  "key19": "4bupwiuHfjpahCBUBMUEYUy2PCJe5BnXLetj7aoxbT92hBLs8ZKWxAwMYHSEQJFAJSAW1uxV3NrmgWwbgtaZmzsf",
  "key20": "2jzQ3C7BmVqKFzoKMdwsy4WdtciLLzDGG96HeNPysnARSwKrbz4aHVi9FsqLRcYuG74Q43rWNj2EgSkqaZqRTU6c",
  "key21": "2rAWg8XFPcSGJRiYpfYnwHJcPtQKwnpqmeYQcfz1h58wG5NJDRTj3TQWTRepMmiKhvaQFqgDGToHPBX82qX7F2oR",
  "key22": "kJUE9XSWyMEvoXW6jqSeNPPH47C6q7fap8QoQhb1cwcDaKsfJ7Fj97pScZibePLmbNsSWDEmEX2CtgbGLr1VHsB",
  "key23": "2haRzTCd9zmYa7HJeHqbSuynx95x7uQbY3sr2MEKJt5EBbt2iTBAP3dyZ5DWdpE9qKHfsKj6vHxhoPWT5qhycpdx",
  "key24": "5AuFArCGBmiFgXxfw7FAyCriLhynHwLx4F8GbaMGbtPDFX7ousf6oaaBhdfgjB7i3D1vGLo2zZBKs3nZvxhE3Xz3",
  "key25": "Pvh8XDVAFBTshLUVrubeYkHK3CLVNyR3QWF1QXWLjbziJ5G6dxPXEu95yghYH288cAQBgdW6QcnhCCjsJkC5iCm",
  "key26": "NzZWRAnxUupa3CVzkef2wDYsLueBRQVaprepkaBBNdwD4YQfd1Bu68hZ6bVbAbyYSvpzE71bsCMjSD6hMdA15CF",
  "key27": "4Hw7eKMVHzb9pht6TraMzmjPEpFTk6TPhzAwitFz3yJN9hQW7F3KXaDoZsx6xH9vv7et6fxac7thn9VUFwgWzCj9",
  "key28": "4wRu4EnZL6vMkCuYshAA7YcXTSg5K7G2M2itnxdwVcBY2ZUJfpULi7EDGxvKXmkizoXy1bFT3uKWf9swxgoxtEsq",
  "key29": "3LtZPGCA438o82irs1m15NsfWCmfEjCYH2VJnhcFUea7NcP8zTsit2Bc84WYEdvuD5fMoxmmvg8k4gMPRy71CiH",
  "key30": "3EgmJA8KN98soUtNi4SXKh3waCFiAvQpupFPMS2SJWU9XFeaq92VhVxh6CBM3Uetb8rpmctArqtv4HG1TxYrHQZZ"
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
