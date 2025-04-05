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
    "4oL2hunof5CoCKnnnxdy7pShycPfPLhtiDfFEFd6H7KWu2Y7tBGbeSYj7HfAwgP2QT6VD1tCEEuwPLE4cWCFW92p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FEa9eGt5fC7JB4oAxpJ8iBoCsnG4vJVAdyYzfpVWmcMxDKGF3pDJdbAhi4dB6rWiuBwnHEj56LTXQYY9UKpcj2x",
  "key1": "4yGh6gishg3sfPrVcrfuNhoKWb5UgGYZ8nMAmb6KmmvvL1nUiomA7jPDobptQQ5oSuXbErPPaEmvaFo7fAG7wbFc",
  "key2": "3xg8bWVSdsanW4tmkyfwUUwokJAT41KvMRHqQf1ffJFVWABvkJHo1JtRmfWkMCNsrxRGVaUMvYGpF673e8pEJNj8",
  "key3": "49esucQrVY69WYVkiXJdh3AJLwH2GkBWdZ3P9aSiwYexQxr34DM2JgLfiLq5GyNwUSH4q8CrsyUMpyzZC8WLTs1C",
  "key4": "2rXtdE5fRtnPf6Q1YBFq2rxBTitm7uTApXAZ8WuiSJByhRG8xVqbrsQtTCu39Q9sxFrdAQehaM2b6vE2fdiikVJN",
  "key5": "5mtzAt1iZm3gDpwvL4RNiPpZrGHQMvqzjzRnsZkTep2Drjg8GmW2Qs3vteA9UbFWUHjK9MPJmmU5exuY5NUVmcBa",
  "key6": "5QAGvoNNkR9SLXdufgrJWPWT4sknPPwVyBc8WkstGfFDQn3kVgSK8UbcTA4HsqwS9aX8XWmumMMj6EXnbjV6EoRP",
  "key7": "4upPmbZRsd1V71w9D5FWggMXDu41GSSi33kAX8VXZozAUX9754QhwsALMRd7NP3EGBirHqFKbvL5fM9seBw31dzH",
  "key8": "2bsETsjBGKzNB1phMdSBqVYyWzkiojXRrkKz5Q85mqRTjr9qzRH8irE13cEwWq5bayJj21JptFNBZHYN57fFmdWn",
  "key9": "kJQ2voXyv5jhc8c7wCTDE7V1xmW2r9GTs8EvycFNKcG3XWHcspaBxB1Cu1pTpmAxwpBv6HUGFrtuM3suiAys5jj",
  "key10": "4x9yZXiRAZ2rzRhGLFmuuU36eF3TfgTgTjpsBty4ZJDvLNqxC98eG5PgED37WSWqCVgwwuZofZKxB38USdffYMVt",
  "key11": "4vuESUA4rfRnUSsXeriazBMFh7bLzaZt5emWEX7Bxs72gLRT429Vh2bMeDU9Hz4SnnHYa3R4gWuFf16wXR1Hv6sW",
  "key12": "7FaUJfJTufTGQBFEHH2Cm19XK65ggrLipeoPGMDRagyPtNJuUM7Nf1FfQYJuNxxWi9kr1pL4gjqD1nNKCebQSBm",
  "key13": "5DCYdRQpvcAQjyaejxEcmahDd1ZMFCkf7KiBHCbHiVXdXHwQ3dTC2WsX3V9Jh9Hyvo1X3eSS4f88WGbCh957QsLy",
  "key14": "3PdV6DXd6AP1pbNKjeCheKouhZUN7f1L4spcHc21BsJmQ7LnjpyY85JV6yvnK1KDM4vak48Y5B7eDRBXD6GGVs5q",
  "key15": "5LvrtZgfrksj7yvw67QB46Ta2UXHb1fT7UjHcnRxZDTfJ1p6c4nHbEGKt1UETZ3UdJpskGGFcrLDY4WBGKvzZExF",
  "key16": "2GTTZQYzPXv1hZJjWqFxfR5jX6sNPReG3tCcrqPRD7i3yzUUztWEyTAo8TEyS8NFQRzkoWFHfbLJR7E4anjTJTG9",
  "key17": "5v5T9tNTNXKAfN298ZVokMq5P5fq2ecnNSKHa4WYx2Sy53PxrPuPqF3SL8uabjbtX63o6ou5G1saJtPGnoT6u8sL",
  "key18": "3eJfnQcj3x5jfwmr2pzv85WxZWn4FFmKZn5V8DHNXj69MpvnzN3QfSziavAgYdAjdgcPpsFbZuaphg1df4Reu1gn",
  "key19": "2zXypVVYDhW3TjKzMayeuGFKL6i8GoC9kyw9DyVJhskzqZ44pM3LCUb85KEydomJxjNMyRHFxTLPj4wfKg7T8ych",
  "key20": "H2vFqj8yUhqA3J91Z583WViTVLMnpo3AVrucfCW2wVCgXZKZbSHwxSWz1DHn2bvAxSffDS2S1q6EB464JPxJjFE",
  "key21": "hdVd6XcqLDkqAo3h4NYx1NtdidJbYnc87fDNyqn6edd7LUV1Red6g5D16cYukcHxUdaxUkVMu3Ud6ZbveJUraBB",
  "key22": "5uc7jRHQRdh4Q43g4MiofVukCauFsVG7E8UJzeB66Uga1GmFyfVu2iQCiGEvsiagRpwnnkGWAjYLLMdspF22rKc6",
  "key23": "3joVeiZsSNcfXQGvUL9X4wHK8MRiFuPHDc58tcibzwhsHBauHBiwpZ2az5ZaUmf8LV2bxrv7La1iHqQQS7Q4gpYc",
  "key24": "5pTdriARxbddLvqXrJoUdGjPPtE68c3yrEH6QdRkqr8FijhjkZAveVvguf9Jyy33aePwxupwsk2BZiG4Dq4VnJKn",
  "key25": "2hMH1Dg9X7tJqV5ee4rH68BhqYCdAjrUrviKkxrHWKGia6GQMYMjVeh5Geo1Zb58JrcwbY6H3jwqWaxhvne4PkVM",
  "key26": "4MzvRYP6HXYRcgYfuPGtaZAPBHVWXJREVpgA1gVWw2Psv6sMKYVNnzw6AHaZMAsvKyURRu1DEY3y7VUAwCmysVHw",
  "key27": "hUHpP42Sru2pm8WyCC3oDPiuem1aFPQR6V3c4h3b65jYX13yTwHKKuu4UAp3PTXDHvSyf8U42zNYX2WXNsAEwmG",
  "key28": "KfHmzJsygMi7SSX8JxDxc5qinYov3tJ8Wpen6tg5ZKm9igHH1oWzPeDLDq5voJA2ATLkBXgvQnccpAv5ZiKMes1",
  "key29": "2YSxWDZsPz9enQLiy78BXGVQxekrv5nLqiJ1LYBjuqk4Vv1gELDVXi8MdfFeUpiE12T7C5FBrY72bFXS3YWJdBv8",
  "key30": "3bnQfBtMoGgLa39wM8vpLYhVsHHDHkJUoav68uWpYwhYn9eQqxBRN9cP8gqJsYqsiiV1EAeYCeCiLvaYmmibt3hq",
  "key31": "2vdLdEeoTGEWFiaU9ARhH5Cn5WJhr5D3cX3n3YdecqNU3YtXGkW5pS5CUgudXtNzytivjg8y8umgWJU9a2jWCAPL",
  "key32": "4PtTYqFcUFaujg9wFayoNiaLvTv3uMCFJKuZ4vzCFU7gzhEePqBMGLYoVKJ9VGpaEXpa4w6MbJt3WHpMMtTVfcww",
  "key33": "2tyC8p8yvHdqjsxucZRVR4FETJrzShQL2z6epB1Q3bAeX2MHAm4CKKzQcFtzyGoPEjf3oAcnrSv1EF9srxgDp2Hg",
  "key34": "uFVZCoULVoQzEKBGEspkZPXGX1WyivnqWSSSUzg7K7uGty5J8Ja5i9YJYa7wfdJ5Sa1hAEvtGgWpQMLCErHADRq",
  "key35": "3wcfX3fZveMuWVyPkAAQ5PAkCgPdKboK3a8uLYNEtn4sYz2EMaYHniLqh9J6LRbBzDHrQ31oiLSZEL4P3ZHMsNHA"
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
