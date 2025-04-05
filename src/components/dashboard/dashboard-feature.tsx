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
    "3GttcNSzi4zdYSq5TkHrpphg1ot8K4ZQNmSRrJFHUymnVoY39nqsKZZjT3kKFaLtWeex7efcFXceWweoghAdccxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wwF7jgoLEEaazZDrVahvV7cMbespaBUQCD8iFgaHsdyhuiPJmZD1svdJjTNbGJss3wshqo7PtLbTbR61BmCBRFb",
  "key1": "RNcHcXUtxkHhHERA3M349CTVQ9GiAf4DonidtdvcGjAW2x1vZqhQrDb24jHBSWVFYaUcG22azg8u6bcnTWvccLS",
  "key2": "4cHb9yZhpiwXvkuBPzFwm9T4v6mQ2fFAhcCtqtSiwhTasAQJ4isRBmoAso8j1KfKEmgU9u2yNNif9xzDiginJYk7",
  "key3": "Mjjqv67UanRTFtKWJqHZrPC3ePiNhUQrhgGtJX9uPA3iL12JgAn4gwpdyPkEj77FsbKy1UrRnDkfYFajsV3z3Jc",
  "key4": "5Jwkky45iSJErBxgZkreRGmyioafaePD152Wh39vRD8FsABFGMceNwyfu3HrPotR6WEoSbnfL6AUWaRmvF6H6RFW",
  "key5": "DSe5V4SJVZFr2LUiNnjmtPGZDXR4VoqKZGYhQziizS6EDvCeV5mFmwLfTorBUrP9PgzAQVhRpJRgzrkphmYw1sX",
  "key6": "4znANxfYUaQYC2hgcgWdKNtGffoqZXwQgvFCeTvD6kwAYpoKtRr3EnMirV9qTBbP1iPUWQegGvseok1ruuYkaTRg",
  "key7": "33ZbAXV9duqbUVhLutabFjqc79gpSgj2LtFUiDggdoVagz9scNSYPzd9qWNTWWASKQwS6mPpe15Se66DkiKCpHnX",
  "key8": "4WAszknNAB3WmgdmBqVxxcCMVJKWuFUjy5PHPdG1y7jGZSE6YEfpuFe9EAG9eHCiZAC8bH1EvvKJHFxhy3J925Qi",
  "key9": "3peRJsuc4n4tnBdoxM1p6moq7bE7uekRisGVVfVU4M9XoLUocb13uXkcMhNyiwWFCNdLdX9UuQU4qdh96R6VkZc8",
  "key10": "3JXFHBg37qiBafyjZnPBHjRVNvSSY8SCzM8QosEBQm2SEhqiyKsbKHr8hzTsXzbicZkxV5E29EDbR7GdZBifZNyG",
  "key11": "2wVWmmHg6rQ1nsmSgy4SvfqpqYZbnrwJor9dLbN6TEHbRPrqjRVn6Pg2BLn6Yiicnvt2H4u42uvoupmMZPtmGaUv",
  "key12": "2f2WGcrEdP47UMRKNw1Ankz21VGuiWVLGw5qhJKWnhBgrxnrKHyR8tHmTeb4GF9MN6zmwNJvYhXU1vWUTsZJvSUw",
  "key13": "3kj9v2TJpe6VACQzgbqNybRxYzcZL6MJKaSD45DNbYJmPg541Rus4kiBt14XAC4kz2ffcF2fpbUHGQxY6v3CBNVB",
  "key14": "YcShsFkgtscj7hxLEHMSrrCChFsXE3Ydy6avmPcCsX5CigfkRCb8mHYDYExc8bEc5PBV2UC8B4uHd8JDa5wBUfq",
  "key15": "5aok5v4eCvN16oJYGEAAS1arZgvjerJLqnmsdKAWGVhqLYJ31nWKL35G637ZBuPZEL7TF1SeTJ6S3RGgJFpmmuZS",
  "key16": "JuoLra3PhpxJa5JMaGkcGkfnBfvy9nytJft2s9mKvbBEymdd5kHvxmRuo6Sj6KeKn9wkA3gpf4DAPytp4Kbrkvz",
  "key17": "3uMSbvtn84DYeQ5MjGHJSHqargAR13LjsrMorJjZERVbV3gCnrsuGsD3mbcanLuECm7QTmPzZxBpyCK1qX73itfK",
  "key18": "49nwZVivAnqB17dS9M1PYkyiCvsMcaVdgfuEHvbcY4eFgW2Y8oezLW9mJqBeHQHALi2eHkah9mmAY924maxveaVV",
  "key19": "2sqLe7o6XhfD3hYFYCM9MC3fU6WZhX3pAz9PbNiz89KHJEdXfd8NvudwKNk6hf631W9J9HBkAD8HgoGJ5v9PzcLD",
  "key20": "4ftv6qggXhfXfA8RX1QpVFVwUnefDd5WeA6fFaiXsvzJgzoSHk6PXJ2JjjmAZbXrCA7YBuCxrE5VCkAcHadhpaKd",
  "key21": "eobo3Zn4uk4NyJGFcpojFjidguWzS9u8DzFMbEAoEgnc6QR2aTuZiwoZXMeCyUHgFAMV3NALBW2wg5H9XS2o89Q",
  "key22": "2tDdJCGrFcmuJ5QyShSX4eJHrwHeTocGuDB3qu86XsZq9YUh6Vm8izMydCdvYCXHjqK84XftESLJtD4MVgqbbjY",
  "key23": "4vnvJ9cabdamsPWz3ifYKYqoEXbqAJS2i32N2NAmf6osw1ZGex4P3RqviMWSQJpgEg3W8nfw8fK2keNkdbCZUqjD",
  "key24": "4VLKPMdZNS7GQJeDYf5Sou2spThmaX9hA2QQX8M34yFtiSpTVJsY4RYkdDbJueqYYZWqnhTm6ppqkqcJidC3cz3a",
  "key25": "DEtmr62JixKCdbKKe7hEAGSdAvMYHRTpD8g1wJGcg7btYS7K4FJyaFFjZq21CTUKHwHDU2G6558m15cWZ4kvVQx",
  "key26": "2okY8usx34MTP8BBaJfm2SFgMmU91aNBhys45QhjXnzTs8kBVNQ6Qc93GE1qW3WFay4sABEKx7jszFRNRAXB1oQ1",
  "key27": "5iF6AVLPWdZud38nbdEWTaANRnYtaSfbSQF73iA6pYEgs5wBbi56WiCVPW2YJQ5STbJww6Jo2xvBs28fv1d3ZkfL",
  "key28": "5FkmPfFyz5qezWBNZcJGec7pQoHDdWCPGu1tTziPqzrYhaNkFbbc48TCTHBaA98U5b6DgT48XZJStbbpbB884Vro",
  "key29": "5GePHTdZ2GBV7UY1VNG8wKzGBHhy1c8xUo1NVJsZNbAi47kid4V8jF2R484nQBKuzmc5GLKGHYhz7KFgiTjutkfH",
  "key30": "4cUy8uVmfHFarTixHwYnwegGWn5HnR9VsuMnAGLQraKEevCyURR864aS9oDZuV1nWpAmg87FHd5dnJYjH9dLkinn",
  "key31": "C6ZsDC8RCJkQTEB1QFGF5rTMHHnpN5P3rR8sSYFW5pQCuiWziKt59NBaEzpnsaxHypkUBMYReWoyEfZojMjaWbP",
  "key32": "5eFkWPLNJwunJ7PzE7jSKqsMM8oyEsLJT59NdQwjW2EowJMjTYv8rYPzfZbJpcBsA4yW6Hb83T1rjsfpkoj4Vhv4",
  "key33": "5xRiZ9FFDinkF17wm1ofc1if1MNcmDgWkZDhxTDjbhp9fbqZQQFMfAk5MxCMm51gc95itpjWXRbkUsXucQyfrh53",
  "key34": "5H1ZUBoopjy63WdakKTXSVZN8UWbCcTqqaci6yw2A8yMaprEgMCtnHgFRuReUrMMkLQtDZU2ecmdWMPyt4Pgf4GA"
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
