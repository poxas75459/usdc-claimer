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
    "5bob3tajP7YMzymbLWMV3ewCh3LktbPs84GyQeU9EsF5LkFk4MK7Xi1aV4KvgQwLrsbPSKEZjaHPgrhxdS1iZT9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gs9a2dow76Mo8w8sKmQtC1QJVw4EBywW7XVecLghfH9ksiQk5auhUwxDXpNwky9VrxXSJLK6njzPEy4hJvfwMbq",
  "key1": "5vs1q4cLsE7UD6oBQF4eBfrsbo772yQi7pqqXhwcZg1bv9dbW62m89Y2ahmefr6Yd7ocUSTSXw5fx66zzaqbMwnq",
  "key2": "5aYswDJ3CaxKh8Vy5BYQwewYVKLFQGX5BMA4hNcvKk35Xth22KZCdVy16AZTk9U4b4QzhcjAEBE3gqsXXuLrr7yD",
  "key3": "afJHQLywphoaGZpcRqs8sC3VuCf7yUgQiXem9mgZxgeugiJokB4LUQC9fdLsMtL5M4Z1HQATYo25NDJc8fvnW1e",
  "key4": "2rMxvP69ZCgEMVSYkSL72ndMNDFujzBPs3TRqktLEAXuMShpa9es8sUyGVjoTSg4GnqJsLtUdHqz1Ytj1FW1B4VP",
  "key5": "5KDWeHHyT1jkaT7HhS6KAa1h3JXCNXZbx45G9U9Ey3gCbS4pZE6aQ9Vz3HiQ4qYZoJZFE6iX9M2biTxGBvCcLvug",
  "key6": "4387JJAJHdswdk3hq3jXPfnNu7sjqrTXB98mZvBAtL56UqMZJw4NoYB9eKnXDWYBMR7fafhKA5quYJ8RFhzB7FyN",
  "key7": "4eAf3pQfghDCtaxx5FnpPZB6RSCsbS3QmvjC69gBrQ6t3ZkcQ7EMSjjCjPnWp15DEjyj8ABszmrxyzCv4E6yRfxR",
  "key8": "39TW3kUn7wEoWxgYFvJSQRDrog4B6TFYXNd4krXLgVcTkqpVEtspGNyMGpKr3uEiaEiB4YHxwAjtUFtn2xVi2AHy",
  "key9": "3tth8U25yT8trza8Cm7ZcUn23kLCf2yWbzgrQWNHxeQXapR7sE1XJ8oXFAV3vKzuSBUYT9tUdjWKoaj6LmYH7WYe",
  "key10": "52Y4uQkw4tMALDY5dUR3xdc9MUVpA9RN8rbai6UF3sDqjCrpVdu7GzXiHxRHpvJxg4uQqXVUS2onVTUH2CBk9YLz",
  "key11": "5qGNFq1xHjNi9MG2dqDt1NALccWAkZkDH1BRzD9qLqwTmeazS3M6zmoMeAshnGRqC8guJNMD7QjsrEaraV9roYFK",
  "key12": "5bm1kusFSjNWdNEW6HPYD2KXdJeMMzHY3gk1VqELQzsEMEQxuxn8se1fMtj2PBh8Dq7SPfDxUmG1weM4kNzf47x6",
  "key13": "4HBkMAYCQV89UrtxhyBjLXzcLdVtLbSPiKVCA74PVDGFd94cuJ5e8aicYdqdatkqwf26ABczmY21pQH7PcUrzWMX",
  "key14": "3LUwpMLMbCaXnU9PFtPVXmWsDEbYyxq6Z9m3dGJV1rB4YigNLSw4mgHx3VdHKxprRoDvX6fJHW3fnszBefBTy5bX",
  "key15": "5pvWJt8zzSD7WiFXrmeH1dieRNsqPeXirH53fJXg9ZKZq6DSkhybwvHQqAwtWst3as7ydrkG5xQY445yQn315TUR",
  "key16": "3Z3hSvpLTVap3ZqEeTkNj6Tikwswmj7fdUfwuDQygttBUHNXARh8nDLbRnPbk2si8NdFnFvyRhuruHGMNUezVifs",
  "key17": "3m9xuo7xD2pAuFvfV1jBc76akRbDGZmMM8HA2NAA4fLUqeZEFZTzirSofApVw1m6N4qmhheQsTQKeFBZgfnqD16X",
  "key18": "5kZoovio2rtmuo8JZhpr2zzcCvmicokLd2cn5SKi6JsuWQm8kU5Nipmh19M9ayS9wF8BFZrCtUAaxMmBaYRGo4YK",
  "key19": "4qwdf3VA5t8nv2bTYr18svWeMbd6D8MP576hVnsgEXySsrvjx88YXSdXD1XqnMW2fp7nNpyNr5TaADb8THqiwmTf",
  "key20": "3c4Xp84phYTBeRJxvtwgV1G36UX7N8x6jDBzSCki1fuTkR1mYg6P8qpwbCiDbUzzcgroW4nVUn27sho2cxmAYQbR",
  "key21": "kdWDtoBZ7QaVbm6guD88iTNkRnJBWyatz6aaHR7aAntijssSGwFaZk8XHCscPqNXuLBhzRmAeNtfXKGhWVVFCEe",
  "key22": "PVn7JsPoeurNQuRSXG1Zt5w5ou9fTDcCQGVf8XBrq8XTdfMDVq79jW52Ty9nESseyLQCgvV5K15Rmw8YKFFGJDs",
  "key23": "4qcmLjFjhx58duBYqBnUqdmV27NE8bm12gFyE927FYi252n2Xzu15Zubp8D4iNfSArQR8YykJ9fqANqt2MHEciLT",
  "key24": "63CxrvvTjAYwptBheb1n6nJQv7NFjKL5ARYsicZAK7i8AdrFm1UxNGpBvJveW8JK1WYiXbeW3WDq5JxzqNJqjiyW",
  "key25": "34Du2wzjZvGcgUQpk75BqNYTqziZiRELdR1VFvXNkuWeJpepfDmRg6j5uQ6fcC7tbP2DFbwxvbJyLRjJDZhSFcFz",
  "key26": "4XSZZbRrSV3PVa5U7d1Ejjex6G5Ba7c4FPNLy24EJHPoomuG9RbH9vXXioH911UGpaghFXhaxeQqhqLtTQUQu8Qu",
  "key27": "2SoHjjHgk1oNuVXXqMZgA9qwmkRWs5QP1Xb11gF6E3DQLXpTZskkCFFkNYRaJ7Haixt4QPbxZqMX595489juj7zU",
  "key28": "3LyHVv4o6ndK37iDUrJMVwqiJYTCQzZ45JZFpHTyCg2UXVmT3avaoj4MeihoJ94me1M8Jy6oiEJrMLDmbHQwVGVc",
  "key29": "4BmjGJeH1woaigyqzptDgsqf8HwHmj478WzCibrnA4MPVd5YW8KEo1uRpVXwKQhPb3J3ja2jLsG8f33YU5yCsE3D",
  "key30": "2TYZyU2HbXQ7B7NYqb3rEC32bRnyVgDHrgdByJdgfzmRKs1LqfJatJpqF3yZFGY9j4pZ7uR8A6rM6HbMtffU7Xw",
  "key31": "2sDgUgj65k8TJgs2CBTmEHyvdjyPC5VNLsnKZQyv3Hixv3vhQDoWcUpG9tx6HTb74yLKfppNPsjs42sDbFV2Jz98"
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
