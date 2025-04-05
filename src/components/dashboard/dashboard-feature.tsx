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
    "3skfX3hnGp8ENGhCsNXvgD7SYNjTsTZVum2ApiGdCYu3bTz5ydWpBAMg1y4sgB5zqYHQaTw24f9PemmvV8XoCHCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BcwDK1kSGixSafvRyvDY3eokAEvbbdfSvHDzy7kei4eDs3SxHH2JekeUZ8LvAjDxVEffbxE22uQcX5qFdVdJPKy",
  "key1": "34p6wQxFiaThp1QuaCYhoJrLYo1NDDo5kDh1CHdTGToxkjDh3JuSMayn4QsMRa8DJrzoEPpSQf6jhkUm1fXzY6mZ",
  "key2": "5QGSHtztdFrdX9ZQd5LEuHdDMXYYh5xV2GvUi1qbTDvY8ijqf43PUnuiDvRzU6TMFhFJdC9iXeqHcQT8VDQQXNFU",
  "key3": "3P3VdD5yKs5bfZpbd3BHPCMLKUAeW6hAa5AtBX956Bd6pDGq3Kifa4sR4eqQSeToSshT1gVrLEkh35jsQHuKgLkg",
  "key4": "5Bwvz8xtgtUsvMvi6FBCfzeTNy8gcr92sUi34mwZTTuTkyeaYmVGm4S66FWcZKnL1yDBXMbNFywfZVgLTtgaZpnG",
  "key5": "3VUM7kBebbZNrigxyjU8bdHCgPv2xxLmKQAhf9fPYjaeNxvAVNc5PW1tayWE46N6KEm7QEjDCz3FfqBKfaijs8bJ",
  "key6": "53WdEacyMiQZX3PWjQDCkQQ8Tkoaubo5Lg4ngqBmDLPJVyE9mgkNLsRSuBJyEfBVBTZXHS7a81SuiP8faQaLZSm9",
  "key7": "5knpyA6HcTLFPzbErkYWBn51xX2xK9XcjX2wjBL5X4LghvrQpTazD2UXvkM4A37QEYryeCXWZK19trN5UpG9SUEZ",
  "key8": "64HBc35FVJ78NcxDQjcbtYy8NHv5VciCtoLVYZwURombuYdNArciJQ8MTxr8vETm4X1aQfhYiyHYnusQS1z4bJVN",
  "key9": "DLy3xmSWN5Hi8c3xcPmnJA94NRSLrytoQcvRwYn1RYLZjir576GaqkXsAave6GLbDDa1TjdYByr9bFp1RqvrrKt",
  "key10": "USX3ygKuWCoy21CtHeXMDSXsSeK8bX7xKGuQw1sPxMkz7RrKdWoVrciXNwWoHxd7B7jzMddso9azXNgG1XR45zC",
  "key11": "5yFJFs9FjS4Jd36Mi9SeqQnqghF6Gvfpy5c68QSA29ge9h2UXPHCojpMxzfqTDe4fhR9LKcFqjFuyeohhrjMTm48",
  "key12": "33Ag313D2BwAuswBMAAxgRKtfJNgnXYVSKWeGs7pmTmZkh1eWwDKKsemy6gyA1EYyHmpCKXH3tHdUQXev7xUnuJ",
  "key13": "2aeyYjpHr63UoKwH2dwZHiQNPgijodsyu1Y7RtE4viTx7ndxZCJ3kWtYGCKZyL5oiwLuHvemsEAdHK23i7W1Sibw",
  "key14": "Errs7TpQVHrfre1ivaFniDXs9h1bZv76G3jNjxbnuS9AWEEt8kvWorEJqeAbv7n6FZbRwjhS2WiFrekSoWXWv1f",
  "key15": "4VgCLDmuDE5uyvEp2acFXaoVBngQnbUWGZc3AWHhniNQ1c2P62UfECnXcAgAV1fb5k3cgh6jmrDt2yfSafL722pA",
  "key16": "39sdTWLu325eWxV9o3DkPhydJ9Quf6tNywtcLp75AHhKzd37fxr1QgNijRu6y5S9UAPLJw9Ea2JDHvBbLerRYtv5",
  "key17": "62A7oP6BPzMGTcFVxMJPH6EkPqajL8CvMLU1wQSRAiUAHbTuCwEbhFfCbKjLhmexRXZnYeMFWSxkJSMeza3d7Y6k",
  "key18": "3JLxGvQycUSLBzKf86BHiVWNoQHzs5gyWeGnBJsa4SPEvAsExStULv9nhx5nTEdMJUdjQaMXcKQsQVquH5CdnihE",
  "key19": "4Bx1sGZjeoeLYfcDii2TtXV8CFAWpM5YxUuYcTBGmXw68uPje7WHWzT6GvxrkgANB7ocA3MdaPztvgXuAnNaCjrr",
  "key20": "ike3KGBChvkCVBowwzRt8dArTmCCRYcnTvVS28hF9YuXWMDi2K6hTV5ccB9wDfgZH7cpWKMWvtRSVfoRAGEsRDX",
  "key21": "5obkYmQa59NHVH91qZKNtKdcp2ccvDS1HvBXePKYecUtTSECXn88Az2Urf3fCvSECY2qSRDjA5h9m8h9AMTcsn7S",
  "key22": "3SLSkFRZfnnxqo948gS8pgBU6vtcmwhw6SkbNPrj7PX7tLiozZ9SyX7Fgugmx1cnSUhYDBxTBd8iq3agiWVUCcKv",
  "key23": "5LYCbeBfbJw4dRdfghNKBUJVrPmNegzEqXK24jM8hgeKrJTe7L3KEjNhfzMVMAjB7EF5EN5Gv8F3JJ2CnNhK6q43",
  "key24": "3wDUJbzjU83dyf8MZwpKMd6PHdgsLC9QAcZDSWmf2CFYp9dSFF1jXm2oVLUDTGaAsL8pQhTvcoiCE6oHLsi2gHEq",
  "key25": "651rQUoMaHqNxXPAeKG3cxVXoDATWMFMosmjecyELDHsXA3eTwY7Q7LsbupMvkprrQBWC8oufCpwUtPkmHNNeGC3",
  "key26": "45Ld5xninfqTV2ihQkrPHUBwmemJvmyTMJ7UVAEHMYCkQ7ZjqF8YaqsxUYSbH6g3M3v8kydNcs9wtRSF7Fx2S5Ep",
  "key27": "2drs8EtJzkgLRgwqTMyhDeVcduEwrzRTwK2YA5fPk4xQR4YpifBD7Fghc9y8RdjfUawtxdJ9G5Sks4tkipg5M1qX",
  "key28": "4HzvV2nGkhhPaXUKS2vqbM847H5PmVuoKsZ8jLKaodVVuZCX6pRH75JtUshfdhrKvmdqGH2f4TrJNEPhGc4RQi4c",
  "key29": "2cscD3qoENTZEK1JDiR8t18Cgwh6e8HRAcXnUAUYFXL3e2G7XNsJNis1VC8j7F1RnTSFFwexoiNowvBxEUkJKG75",
  "key30": "2CQzgT1Jcj1Q5TQqQAx9ztiZ1qebbjxX2pQpxdgvoYJLku8ut6FZ6brPtkadti3Y9Y4suJbdkpbQtemCtqGcW75A"
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
