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
    "4KjQGH27tBbXzd8sk52xwiYNNiuXSAKGY7skFt88nrSPp3kexFpTDnXpf6KSS5ajKkYFWNuKM6K9cGqZtiPHqYUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eH75dyYkWJzkD3Lb4wicAbV8bAW2sqD3vE4wfMpULBPTmtSMvYehoHbfPT6CEbC1H4XpunLxQrGuKJaMjSE6xiG",
  "key1": "Ef92eFjJMiejUaH2SYwtWvBSvzpJSSBzng5LjP1p1wmpbGi1fWjYQsLBkSPpECguKJfAqp8KMhDgwV3uPzd4qnc",
  "key2": "4zW7om6fM5QRTQEfyGGZaD4oo2sb2TfMb2FJ1Xp6xEhgCrSWktfTWrDxTxHdHgxQV7avq98BWB1yw2xTxm8huy7N",
  "key3": "3PSp7VwuKnPqVgpTeFvLHg9jkf91Tc1gA3NhMVkvkon7KTA8wwa1tA5ApKuKgcGQ6PzUVMwKHUbsAK6xfCHk1oKM",
  "key4": "5UyG1pSi7F6dAA8MjDibXKvNaZueECo4j4mcLay6DRAbMFesTLSvKcJnNx2sx93Ka6mf4jMvh55MygFV9eUbomn",
  "key5": "5YkSFApmdjDvZPHNWRM6Hum5yVqEc58CSDhGDU6BNBfTzCjCJYnbz7e3XURzJSNa4xui4pg5A8JeN92Gf95wZAzx",
  "key6": "4kJvqLS7JF25EHYHeTnUV4NpM6HkxNAVj7oFKZ5qNqmSof1V3LqJPBJtyxPPs59FfTBQrRCunRwpGxnbcF7YsQGZ",
  "key7": "2AAo1cr2eJJ3wNPtYivoMRen4WTdR791d6kcfF9uAKvmJV3TngMyme1veHbYwchxH329emYxL1Q21dDKjzBtZnhd",
  "key8": "3rwds8aDKjwwvLwqBoJcFgEgj1QkyWK9LXuQ6UHweMD78w7efj1iDfohxfM4ah5aTJpMuygTLGgiZHhijdeN9bTv",
  "key9": "5XDAphAr1rRSmmgi7gwgGpToD3AN4qBuqjh39X8ow2ZA5v1HzFwbo7v3GRjaZ3fknSKKF8Qh6Fk2DwRjFWW4aS9V",
  "key10": "5Hc1uLX38DxUnbCt3PN3DEh2TtvQezPrsCkguzLfjNFFSFMp4Gn7mH7amV9TQa1oeQgxeXkcyGVAVxYWUPn5ubDK",
  "key11": "6538f6nPZ98dWStf7RvbRnMaJYYReef3rtKGwzMAPSN83a2DgvKMF4hLnj1CruYTj8MDjHdHi1VRThig4dej7dci",
  "key12": "4h2VVQSCqitb3soVNjEqeCsEYbPFG2CXZ6g8EhNcypZPRYC2BomRULUE7cnDk2wf6rXuf2ufBG7GCU1zNz7yUePa",
  "key13": "W5BmUzKzSGNqM85nkm1UJaSrkCSuVyzdhUrjAxbsHcQzoTbDvck2gCAmrmujNrvcosiTJbPStfBRyKgMbShJQup",
  "key14": "4EySuQhi4CUcH6viJub1xAqr1XRajnab6rz8cm53KAszQGGQusojDhr2EhT2x8c633KQuXNyHN7bsf525Zt7zT4Y",
  "key15": "4MsdNXZBLWM5Czus1AzramibfmrkR4pAJuVxJ1iPvsfmhXTLrBRA8s7o4FCQ6jCEqgxCU1M9SGiufw5zHfAYwu1M",
  "key16": "5kuGA3tVZTZfRHvpHNY3YACUoVCkxmiQDH8tH9MhBFPSqPPduV4oz92bbCzwjNtvn7BEpmbj4hTb8cbAaHe2P8qm",
  "key17": "eqxiJiDEuxo9dv5EENW1KvyZRrZtEGCM3Patd5X72tL3rSceTtA7GY4NqnKsKMBAtDDfPn3ujU7QXL63TkPAvz4",
  "key18": "2HnVS9pDuQ5iGEWJZLoSHSGKLbzGJgaEo9P9iwaDNArryv3titgdUwaJVzNztMiq7cUTFmJf5vmbEzFUBrDUsvSf",
  "key19": "4kYh28qCaexCn25kpmTauf14eEHdEv4MTfw9zxxo5vTmaU18wxvdSH2n8FvpJsrc2rTd2HJ95jQQMQnCbva1inHi",
  "key20": "3dfpbMXcK5CcfxDx23PkjK4JnaCMf1qozWDjJ5od7KYZ1W75NESQZ6mGvdq7gAsmLbWyqtEqJwEovfEBq5ywsKYE",
  "key21": "2UtkhyB22qSgTvWca5ShS68N4Eu3B9XUrDNx68mxjpLiB7YFAmH7Gp9cVsfbZB5B2Y27msSGZvLjNTu3tj59LA9c",
  "key22": "5iyxQ6UoQ7irnNHxe8iB6ZuCwCgvfFx2WhNnucQuiHoGwC5FGJ3nPj1BAi8QpPbhaDgRWki27DYWtbB5aJvzcxsA",
  "key23": "2rc9saz91xqo2bknZq3GMD7SapCEjnEEXC2EeBjKtjsZcxfjd2zv4ENp4cFEdzNQ67xMMYKJQcmGuYZm9GFiVqhh",
  "key24": "3zJzhCGQ28Sm3C9qXhNVEf7CnJjJJY7cXXFRovG9yyTF25z3CGyCeJ6TaaX2qJRuArzQsfv2QR3idfC2B5mgSnxG",
  "key25": "3wgHbaYob9DnXRxeU6d7Bzgo3DakAhANZsbL3EyAzjsq9fGjurHCSj1y3patfAAYFtjDpMvQD4DZNy8gEacnXUz2",
  "key26": "4HCgYkzbtGRuVYbjYUSQaUfroPPdMJ8YypyPUNryBgCfAvyxXWiRoYbYcfkrGxSi1QEqPwh93aLfGTd6u7YUAukV",
  "key27": "3mqNY2RczW6fdZKzLag5ihn9ZTsULgQu5MGE7BBfzDLcKxpcesmVdNnQGVmnZedBzm9EwZMQUAHAok58DjiA1r7a",
  "key28": "2DANxKj9JrPrs52SHmNehpqNiWRWdzCAJkEqfFj6CrzfUZpfEmznLBZnzbZqKqToWc4rTHypFWgPbySEKc8G9quu",
  "key29": "5ej5F5w83wJmz4uLE5T66D5r6jK1Sw39b65xizTsD6VwHkWYxYqo4aDuU79v8FSjuCfw6hfQ49weXy2HRNaSwpLL",
  "key30": "4jt9i5Xk2PURHsewqTQ2v6MLfyNqGcbKrjw8ibUt2ufdBfvX8VZMqT944aXRf2G5iuuSqP8oe52xgbtpechnxaJZ"
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
