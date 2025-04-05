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
    "5oTH6XacWwLNmAXwExeBiBpdQ3aLEeio1bySV4dFFZeyKTeBVPxfVnit6bfE5YS47W7rPBZ8Z8LMQq7nv2nK1HX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27tXvUhwv3aQZWLrUqFzVgoLLtNdZGrMnayLkxj5cEAp8Ds7yez6y24ZNVs68m41zbfWatqoJpnaDLaACwrMJbz4",
  "key1": "3ikeB37tFVCjr3kJzvuAzCmViDZGo4sXw87SDgHn4uNDYuJ27TsZd32fZ2StohQyYMtEXE4mbqxY1J7PcGj8VoHt",
  "key2": "5axzicx3UNEetFGco5om8QfPNimYwbfLj9fLhwG8uEb9FmMRwgZmQnoBgxi1Vnsps6aZhHomdZdkDWqLx2PSWKQ7",
  "key3": "3gV9pohfaxzKiZXtbCpbHj83Nwxq9dTU61kHoSNJHTKvfzwxqdT6qaLGa8VeD7hDz2duMCQRNhQT5pnVNk28BaJj",
  "key4": "533iiYygpYNrbAZHAnK5nE3x51EZrNMfbhnCpg4e7wPZ88mKNcP3rKGEFitKxf1NSDxQHsxQNsjhycPuBpqMjiMo",
  "key5": "4drTVnFTAoQRkX5wVZ6cgrt5fMU5NPhGXVwtDUvnsQc934GkQjp4oydnbd4W7sPUC5FbgtQr1iiDCcvoBpP5xMRM",
  "key6": "4fKSJ5SfAgNCtKThuaukaZgz1rB9XLhhFJ7ws8UP3VMwdMbsknDY8UqkiYt4Mvpac6Fok3Rj3Hya2UiaE92VvTdm",
  "key7": "2uF2VS5evRXcE9B16CHSe7YE7FG15Dy9oBt9iRJNbJ8erZQs1Fm7oQv31xrnrnux4tVa5381EPpFiDNPNZPcdSqn",
  "key8": "5QzrZ2B5GedwXMEw44bBMRDGgNhHMzH3FFZ9LjaMnawY5rCwN4d8qKjoWR3jAaXSDZKQmTCAbPJSDnmozM7sSzPK",
  "key9": "5o4Fzf1vdGhvdjtxWkN9rETUsX7TBwKdi27i4FbFxki6yNK3FCfyCiDRqKhFHjjbg1XWRWB2bq3fGzigJDTqJTNy",
  "key10": "2aBXjbAnNG2QbNQpKXayUT8axtK2QeAy9jncRycyw9pshUot6h1ffGRCC1DdScbz9eFL1mVM8jXvFBppnmGwdyKJ",
  "key11": "4Q36PbSvCWhgbdZZVCbBoiJxJozQBzfVdDpHMTYcM8Ed8gBRg7rRfLjNzYPoSXxVRUKPeoVAR92PJtRr57S7HVoY",
  "key12": "2GWqRTBAET1niKgajKnhtR73N9L1aqiSznXLLxX5C3ZaM2WEw1B2JVZYx8WBRF14Bso7ErQauQ1RCttKAkvDk6Sx",
  "key13": "4kA3Bu5jXv2yttjn6qC33JdTfXM2d5VXmehcDUZUDo2aVM29uGn6AHPzn8KxrwwYH96Q9AjHbm13JT87M3RA9m9S",
  "key14": "5E4sQAjDLe4kT862yVpKFc51gTdHCCw1UJnY5MBnoCHG6oWxFu8AFmyCr9YAgvMvs6zy8gTvHXextrTNv7ru8G7d",
  "key15": "2njRmU7bWmbRAKZi2dGc2az7v21nhXuygHtPiXu4yABRewNt6tQE4ybSVmDH9qzchVeMphNGRTXEX22XkxWef1By",
  "key16": "5PL3eJJ5xf56wuXmc6WcVJiem7bph1SXA784Fh7ugPhzzAVgvtNTmhjd9A4PXiCs6M7PbDUj2SUodoF8Q7BwqAqW",
  "key17": "4Rj9t4t3RC1ghTDEcSVT24XPKxnVJSBmM5pPk2ZXiuWRwT9Wy76snjQ3fLMBsYE3AdwR4y63j1xMr5LXeiHKNZBH",
  "key18": "5jqrhatq65VZViuekSuhXGpKQ13jDyQ7hCQuXaPHQy4n1xwyByHB7fYt92XwNe5rzyP9LPxJFn4igtTsn2oYd8hh",
  "key19": "5RPTBEsLnmpWhP2qN4pVXn3Xd1SSnWeGjWviTWvJ8esk7EsXiwYmr7VBKQj9Eebnj4TQbgd4wwB9LKVEHAco4Yja",
  "key20": "2TygwKGLd557UGdZ2bA2f9af6MBNF6zEn6xxixaD9VpEhyu6XDDhgneaxvHGeuZ1Zuq1e33xZZm4YYWUMDuV5ggB",
  "key21": "3JsYo3SioZbvYtgTGSdYp8a2DxTTUn9zhCcdmhCnW2ETQMdpqhAR8xj5YWEozqv24WMzPGvrvWXmydgYSUxwSxHB",
  "key22": "3DXPB2Au67djvhtZx2kHStPVm9LAtyXUsr5dpr6VaV5rnkwcnT7oBe9LCkVpE9HkCAyc8d9iGrNy42BA35GcKWNM",
  "key23": "De6nsue1HpmPtBRiw7mtXygME85du1NURCqNm2A9cNvWKyRCf3iobVxK8pFdCYVzwQn9D7BkY5pVbw8kC4Lfix5",
  "key24": "3Jbu69JxsCkfbTXbACbTsiwn4KGR7XGi4Pyq3cZ12roj8DoPAYM95ZGNeR3yTgT1G8xJXiLY67Hgtp56sioadDWz",
  "key25": "3Wti2zGJUDj2aBSNHdcgA25LXvHJ3BrovDifopcxhEjka7FCYnZZ4kjTv7VNajP3dTzXG9rpnoHecYz8869nSMdH",
  "key26": "3g3ntPAGYgXvqFo4Mq84yrZPRSPiznetnzfjvqvd4UddbYcQQtttoemhdGrNFFivDRE3uxXDfqncdpj48KfvmTHe",
  "key27": "2bS8i7x659n8iMVf7RNJ3tmmPg8nB81XANrzdWLf7vWaigWqeuLqsSjxhRpiXJR3bMpHH8poFxEbLxznZBRKbksF",
  "key28": "5CeHvsToBcCCSJK9hPrXtRLVghLNKnHu8c8WbqCvvCrwQdRF3WFZKh49z57skKsDMzpop1pGbgBaU1qKDLFRoNtx"
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
