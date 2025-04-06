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
    "2GrsMP5k46f3Kq68GnJc8d9RZ7hjv1vqJiwoZmYeq349ZJf4YffBhPsML296inLNh3fWDJxqyeYj8uWqEDzHz2CN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CMDX5upMD3yrXS1U338bai1tBcXKMAZYTovrcMuYi5VMmeivomBiSjLTteAcsk1z7xYBVqjivyDG9F7jSriD2Gt",
  "key1": "VKxf8SMJrhCgcUTJgy6UkvBzu831Xe4MQwTB4PmPeu7xTxyaXmWzBRYz2sL1Ss84TD4CyvTqfYJ6JFYQ6TP8PEo",
  "key2": "3QC3Yfk5MyHq1P3yuzfdEgxFHVEfRYUNrjZGXSAfj5LmD2wMQGSxWrTEsEcVudLo1kgVybapMoDEHFXivRojxEBt",
  "key3": "4XPAWFbzQymQpx9ZZdfFDBJC24ByqKrMQsuqZTuGttP2ERJ1s89mAegU7oTT6f8PEvusaWzmLAdSqJzAR53yc6at",
  "key4": "5cTXdbMSvdFmCNC1SnhdsbGH9JVmJv46VpCiBY72eN9iQ8K5vj98yX6rxx1pNNuhLd6isHGdoGCWRgBSXHFoi5JP",
  "key5": "27Vu96twTSrJqVii2gRAsBzofiErjdC2fV1y6qbgfXQxsefoCPWBPntSJcAKeRMKZs6jHuqvzDgEXBFYw3dL2gwy",
  "key6": "4qRkvHjnwrwoa5UvUvwkZXfbfkJHtiMhvPag9XUAWYb7zsXrkUwRVYsNxCs2osoDYDCB1TYD2yJAL2P6SHJHZR6E",
  "key7": "cFfauvsoY1vv7vyFKdQ1PqPdfT6NiXV6wFD2dWyYJTQxwtvbCcLzppN3TepmDgmphAejvZLpojgBbuNm2ER9xtA",
  "key8": "34Nc95B1U1uKJ1NtL4auCeY2WQhkRwxGtpPSeM2kZeWajY7M4Tyn1gT9HqNeW8nbkVNqk2uqKUxdtiw1fk8pfqCt",
  "key9": "4d14CzCigZAKgqKErwJWx9Z56cNyQy9pxj3b8P4M3KmJKr5N6RToVEDd2Aa5YgBpexdkYhNx3GaRJajmsBvhRf6W",
  "key10": "41s3edpVxwscoz5H6Pd449zhmtX1R7axy9DrtXRNRUY64r5b9pGuMVQdyWy4u2jcBJ56GTLtTn5MZjCFE5dNRRzj",
  "key11": "4jgecmUcGqi9izp52XrD6CDYczwQi9AphG4JX8rAtTS1ziDGgn8Q3MCEuFHsSBBtHSypMr5XXf9TuEV4p4stsrVo",
  "key12": "2wKVHd1skFnuy2A4hvuRLpwtp38DbEhoeWNhQhsKLW7gppzDCdZyECWHdXm49nXLtyzxCBQd84bJTEifkmsrSb6k",
  "key13": "7UMNRLsV2GmZUyPb6QMmJzYteZBJuT2LQSGxXQHTquAeW3cFitcdugWsq4ByL2b7pJhjZYCtxiR8eXE7MKMDGe7",
  "key14": "3E5XcwAN82VL17TuifAPRUNY44xgiQW9wFbtCVXvVfMCAiB2M5yHLD5nrBYZboJBy7vsrhMa67NEJsQHALwuQ8JE",
  "key15": "ZtzJYyuqGepE3KuGABnKN3fvjceP7GLW4xoJXVdpp9Ks3AWisEyTqv9SPqY89uvRfJqZi1dbW6UPnQm95rx9Rxt",
  "key16": "97dXHdf2fF87MoTwY8akqM7RWi8ANVe9DcEWUwfywAtaR38xaSoj5xrGjudQmEKHRVXKVa8aAbncGxz1ZTiiUAF",
  "key17": "5b6N6Eax2GUPRkajMY7FsHSWkRkvAjnvws9abeYYb7fraubd1nC4e1t7jSRchTxdVdMALzb53pjuoKGuYKD546ZB",
  "key18": "5LwALah6rFjnGPsY6iYrbmwmR1QKEXE4exEMVQBJjh51mUqHK8E8ayEhTKViuh1reWR1zGhockL3tCZE7Qqo64MT",
  "key19": "379bwy9RPgNbPp2m1KkSL6tjjruF3v8dKoBw4iPmX8gLY9YkcHArAJ3e1mLmVWwqhS6FiXAzvGyYD5TTbLubNLDd",
  "key20": "3WpkzkQhzXVeUiMzzuN6jmCth2vyxjVhP7QkqfyRoiXkmhbxXTUhEmhdVSXwMFzNFJBfECVwxaUU25mTX7REE7Ab",
  "key21": "uZ23YmaaQeK1x4N8ZGoBSpvANpkcyPCRDKuWQKtLQ8zi4VQKZVPx9cAAy5mJRQHpKFTG6hyTLbrqxqQLuaTYibd",
  "key22": "5KTwj5yd8K7eyitdfwXdvo2eYhZ6QyoLbZhfnU27n3ikayg5FcvfTMv3V4bAEBS6Q8g6UoRUTKMVW8n1d5Vv9BMY",
  "key23": "3cBv9LKTdHKyVFnHZCXqdpRMnxT3612g6MLy1AiRJWuheZMskAFrC5utTtQ2ShEFMW1feWKo7qffsQ7bh64htziz",
  "key24": "3FxWf5T87vHrrYkkyehHiNTP9thNisRwZ8eV4pY3YJzE2dyVGuiXaJ3r341tMMYiw5U2nGidzKN4skfnyE1zkkM4"
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
