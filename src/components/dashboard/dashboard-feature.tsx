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
    "2uisTkuKUcZ4LmtQXjJzRbkUD4gsJxex3nXdnhQ8UkigWb48pWV9VUDJVDYrnLvvH2V3eJ8sP8zDM16VFSzdXDWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4owRkogtxFb3bzgciMRyzhTAdG3XWYq5iBcSN4tUostZFELQQMCszafF4UoRsjUuLPW3M8PieLyPE92AFdLHez1z",
  "key1": "4nMpSfKnG96AqtK8tRydwJ82hzmqikUPtSJ8zVEn12tbE34Kcgc9X9hsRQBwJYKCSjS6QfWiiRhE8H9wmci4mj6f",
  "key2": "aai7T473sCpTGcNj7ZxTUiPGdHETEdqGos3vG1KeEmdS9aAWQaGDELv12Pg8mnFBQWX6z2EtgRFUQvu1RGF9Wjv",
  "key3": "3nkT4m5fXb6TUsbYMuu1jL1VcvMcPeqXCP7BsedU6QA9bnjp7x55bQQR9LvevrvKZSZbZAwZewiySDevqcRfxcxu",
  "key4": "x1wZj2f2aD34QWB9KaZVn3TAn5sozPbnz4PFA2NPXxnEEMK4VrcrYMk5Ej2Dt8wd9tgvFWTaRrER1KnxVHy3tLv",
  "key5": "66gGdNsSuMG9kXX3JmPytyNcwv8Q1F4HcJB9B7Ff2JyrQ5M31NHG85m7cu6hZ3xF5TjHmAUTj14dpTCmkSRtWmHw",
  "key6": "4wtC8Lirs3KwA6iXeNiQvyYjeTxJUYAdku1VV8PZEytZgAzQr4272YyEquLJBNF6dkYWh6GDfDW9hbyLm1LMzcuU",
  "key7": "2CH4AR7nyPZMNtHGKQ8zxcRnmGXNqNQgh8YKyJMaJykA5JsZSFj3vuLbW4bBR87aMeYkDyKkQtHXkWmzJSN98sFe",
  "key8": "461bRwy7QvEtvzLkr6Lrhi2ca8a4YpwkKeSVwbxVGHwFivzZifN4mEet75zWQCgWBX82i59Miq7FcXbWqo1Fdrcg",
  "key9": "5v9QJSavkEoBGPGiB8Zez9VSAisDbhztmMTNMNRXNeaWxhkrMkpUZ57zszBSZNsw7oF6i3HAWL8urrtoaqHSDhpE",
  "key10": "5gMXXRra5PRcQqtrQP3FGJj42JwxA1Xd9o69hfKXZUvZT78L8Cy28vKpe4vwDeCjU4RkP7xqzcsJpE57TaZFe4z3",
  "key11": "22f8hKZeCHzmWCWFNNopLmTyjkZTHA2Fey3FNiRupDdzw4iQAi6ppv7qWEBoye7gxQBRv33CTjv6nMH5ZNwmKsKX",
  "key12": "2NV82Wpqkbjxh8GYJwZWUHY73ej4c2xbwGZPXVJrdE7BstmUGJ4ZQp3dxjvP8f14QLvdYtBUk8ZE3yopsvHDJJRP",
  "key13": "4qGXae1yiXmjoeFTJ689tz8ddLZgxEj4DRsWyjEAGn12L6FLV2u7T1AWMjEFp7CyrRggZ3Z4x1FZPRMRX1UAEj6V",
  "key14": "3JhRmR3fopLtg3aby2dA1ZNmkSGJ3vgTFxDNMyvKUh7phnscNqzevhzagjcBvFWJKGQ8BC1P87xSqmXLiSo4RrmK",
  "key15": "23erSihB7a5d6chw833bEBRBFVD1zD3AiKq2B4Z61VeaYoSs72Zq6FE9GG6gK3PX9SU3w2tus9AbwBzzDWRsqyuQ",
  "key16": "4gKmdFYjoGMTpY9G6fGZeauaBZ6kjPU36bWkom2WEsJiaFhnwTbaJWct8KYLuNB7pXNuMPwCs9j3PKR7ciWLa8wm",
  "key17": "4gxWczJSUvkYd6AdU8aHyGq5tVvM1JN38ny4FsvgUWuyAfmvoZUVWmUjq2VK5GguvHgUjht9V2xHKVBr25A9fnmi",
  "key18": "5W3xbhzYiK57YH7UZbsKL52e7YMFEcd8NR3CyQcGCnD2PodxuSQS4kwpv5TfHZizqHExHBnfkwNDN98Ncst6zxbT",
  "key19": "qgswap19aJTrZjA4RuM3m4sBq6ew6ADuNNzxzyk7Tzj55fitj8ji6YEEckhY1ffdaPpCiTkRWFuE4tU5L6DG78M",
  "key20": "B2uwbBfEUY2QnSBBamXzLhxuWroVR1ikp7jSjQsA7qisRdExSaKt3d8i8UpAJkcTwGXEKbZfwfcZ3akREGasCRY",
  "key21": "3HYENapB4NUfUkPa9GY6pxj3KhB67Bo63R9MpvSnU5rRCsQkgYoyYyxr6sZaUzDd7fP5SW4XxBiZpEDeP9kFLr6Q",
  "key22": "5fxq7GAdqErAsTF7yk3vQYcauUkn1AJkEVWQMj7kVD6qNA1Mj7iqgKay9Z83V4sZgUwszGqQ4ncVNzEebYR6e6yh",
  "key23": "3m2WmvBwAHd2CZWgLzGe8KRfFLLJ7oQRTAAhn7SMWEp51PvrcQiXWFNWCad2rQryU4HwY8yfaaHQUqCpmsMN42Dw",
  "key24": "2yMtSAquYGGiM1FVejhjbsC3Kz81kMstGRVgACxMDHvoz7hAjEzD3b8GuwR9aMTPYsiBGBhyygXbaZwtePuMVr3h",
  "key25": "4higTUmyV13BYQM4LhMparJhhiZaDbrqR5mw8P3aZytcj7ZCLWCa4KKSz48uCjRVxqwXkx73Mgm4hxYEvveUmi5h",
  "key26": "4mwcWSzd1VvWTBkH7kvAtG476ivNQFzsTtcZpyCWdkQi6Q7UwaWUoVeFpWZengxTaEB1dBwLhkfUWdjtivvxzt2e",
  "key27": "2PSGaJJyQqSZwLg2Ux428j7tnVFmHsuRgirJF88ByeKp4fu8iARmrxANLkRy9kMTgSTdgUPtRChGyzQ18a5D9Fcn",
  "key28": "4BEx1RYmt86a2i6w8xJM8eqoBn1gh217ppHeCpBgTZ1Z4Hjt2N4ydb3r3WoHjrNwa9os3ZUTKo8ZeqxHzZXgWZQT",
  "key29": "2tWVUJrUM97xFkR44BEdCBfxNdt7wdpBiqD9kAvztuiM1GYUpy12wsk37D5xj9XTowzkDj25cJK991SF69NF1nH2"
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
