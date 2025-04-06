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
    "5nd7jNPTQAaP1junosFNxqwqw6yAmtyMQP2xjNdiQPjGWs8jfiEppaYgjdsrJ8L8qwTAg63Mgqe2TPRZfZNKK9wE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QnDYqfXCfBWDoHykALgZAuv5xjP8UCkQnFrBWRqv9BnzVYj8GxPmKeUT95qaHvAqmE7vXEyW3zm9SXJbbqcyztc",
  "key1": "LuTWtJT3MrprRyru5fzJwNNGb685Fpw1pDNtiXyJEnykYtQyRa31LiegfCpLHBnceGL5zPzhSupw5UAFooAddfv",
  "key2": "5Yi9LuXNCRAaD6hDeBDbs7kXxweQAgcZCwANyJJLah8ANvoPSkUhZSXGFnBY8swZoZDBQeAtYN5QPK11Q7QB7ZRv",
  "key3": "34uNUrkkYwwKXVNpf4GretKBFXbGZo9GhkK7t6L9K4Z9jy5TqTteau4QcapYhY3zqig6pvbr3y98gsL5WhGszTbW",
  "key4": "2GZrUptmD64kaqZxUrorKQM8nMgR1gAqJSinnHW8ojFVrwp7R26LVBTS8ACPdWZBxoipWn8jc5PowY2GQCWpoLJ6",
  "key5": "2b9b1GLkH3fyUKjfzpV9T9Sp23e9tkQUPh2F5whnhTf5ET2YAksPy1dTSqxYMJ38z6QWDBfvwVRCQhr7TKKzFrbf",
  "key6": "3dbRA9dLKXwEabXfc8tg6rHNf85ey4dUcK5qE8tqAvP3csT4mEXNrjMVybEaCGqJQhnW3iBXDDejWnRN4giUkApX",
  "key7": "2GhPm8TN31upo8A8yvYzxUJ5ZZC3yzK7r5d6YzVhhSkpXieeLMK1QG8yWNc7ephrKviYZCKm3g9qkBuC88PNnFst",
  "key8": "ebjU3MeZxhUru9mPVmLe4zGPJjiW8xWPH57UJB1QiEaRF9bJJtJmAUaxueJ2av5cxzmHpHnjor8m6R4LnoXWrjs",
  "key9": "3D9runSSBjSDKQiBhe7K8AjY4kp4m54DEz4YYK3h4ypLZnCeGLQ4H27furcCjciqy9LiKyKybGvAtN6gYvEzAhqN",
  "key10": "38vTdvSJEtifDSoRK3daDg9hhUJHjLWgbnLYe6XcUuoeqQCFmzcy1Ft3fVdhXBnyakwGPn1CyQ8zqvDfB1Wn4Jjg",
  "key11": "35m2coFU2NRfEouKNCL3bvt2xw1sUxfP4zVYrfVYYPfSMeUG31KU8gcMdZ8TVSYURbLKVqi75wQG5eZStx9YLty8",
  "key12": "2YGV2KCDEUHsMhgMphjK3YCREFotaa7sXCH1ST7RgQeQBj2j3X5BqGQNo6AJUaMVeUBqFuKs6nyh1yCRWC5RwYCi",
  "key13": "4h84P35gKNocKgakgBDUPZ2w65KHgkrUAyMBChd3XzeAHjKXCTmYdHnqBPG3RMqyJ84C4gTno7CyFZxSTRfwpEcB",
  "key14": "5suNoC7j8QAYiTHQu5uM1NN75ubNeVgTGye4nCeotQNttqYBoWVBY7YQ9TV42kDj8bVdCE8VejR1tToUfoQFCq8f",
  "key15": "5eqMTRxhMTF6b23mCNx7RUzZ1dqqaWiRMvhhE4PybjJFNeN28g8DPt27f3UmvE1vKh96DkRoRrp3po47qe6vQRwT",
  "key16": "3ntbpzmZ8yHUQrtRviTtzDZPzD6c5cWTLMzowCvPaNjBya7pgqRWc7qCgkyqD21cY5qBoJsMdKq8woLs8M58A19C",
  "key17": "2dUV9ct6GYQNJnvZs3Mse3bJn4tEbJuu9hQBHcu3dGTaxDxSLKkYrzityTxgjvpVPWeeGKDjQsuvGYmp5EvbGG8f",
  "key18": "Q4HiN2gHef4AyRBAhJFv5TPpg1HCyx6dWFe7MEu3sgw9UfWbK7WmvUVVVdJYZHEYNXj8JFoC1PP7Ds5YnSn28RS",
  "key19": "Kuc67LYSvQRm9JoDopE7iBXwnCzRMHMiTQeeFSiTXQXg3c7dbBam223bKimxDjq2g5VFeQ6cfXkmyh77WBXxAMw",
  "key20": "UDaeCYv565Ho7AFkmNHFTzdSbX8qSxwbsYZcnWYcBDD6UQca7bHRVSZqcKTc1wR3fX7Df6t3byitjkMvnuNVyMn",
  "key21": "49dQh9boGWFTE3dwZ65TUv6GQmssT7QDCvHuRgPgmdyLm2HM8dDgcG5Sxw5Gax6GhKQtGrDvhSTSyyGDDWrbcPcU",
  "key22": "oZvLEBYVZbh3gsyya1xA41SWjy8YM3GNZcz3MFgr2zUvzkMH366PVoNQ2cVtqw5HGJfTM1NDJqGADYtNWQPHxtb",
  "key23": "2udBrd1ALPHvusAk1enTh3LkG6X1AWyBnMZMgiLo49DuFznt8iF2d46CdRcV1LNJmNNXDUgXHPQWCFSptK5nhhh1",
  "key24": "24nL3Ruxqho1SqTbPfk3QkPQVhd1oTuPZX4Q1hGLYk6SuAwqr984ywHR5GwRsH9U9Ha1AxYEAyJxmuxgpHLvNwYH",
  "key25": "4k1r1CvMpzu86GPmHqa88c6imDsBfMb3Lwbe8EzAVXTapjfEJHG7uTjZwRSHLoo26NAbNLb7is2mSksWxhhidbDA",
  "key26": "4YmaRpiE7QZTyHKqXQCLzLNrCG5qaNiyPJzS6zkBdYTaRmWXvBKET4MbeK4BQdv96un2iQqHbbybbCmBRtcSFTrg",
  "key27": "5Ga96tbEvPJqzbM7HV3fmk12TQABE6VTJxVTiLU3SK9dT2R5DsFaQXwQpqXDjZoNwnABfSQpcqXHjKD3QJZWAt3E",
  "key28": "3WffmAXkCJjCpSht7dRjL6WgfhXsfFoyWYzBuEMigmk9X75qMtrCkwaCXHzPKeqh54WJ8G58rK2GLqnaHzo5Q53V",
  "key29": "5Nhf8MLbEFkaWBYKD6matkqBA5ixg6uHau73oW9TFAbJuR257hp6t9DRSyJrzotqShtqRywMBnf9TRLfJbTEQ8WY",
  "key30": "2vKncRCb5tw63MB94MY7GpCAdZBSEnsgdrghJeSAfwdkzW4fxRHucZweTXYpuJ6EviaFDYiDXh3jv7L8Zk2Y9G2T",
  "key31": "2Zjz4gqbv76PvWtEXnhKFn1ztYjFHa1jRXEarKhMjmZdWEiHU5kFnZtUd7AzTKiH6Fdc1UuQVMXUbCxyBTtwH3KW",
  "key32": "5PEZM2Zfw2QqgKFitFrxgaqz9EQcfWg1VyZMY5EcWjvtjkcaEH7r6VnwqhjE1rWD7aUS9rioDbADmyn6FB8koVSu",
  "key33": "5mhRGvbshsDRhNpgu6GGcMMu43KiJWobqoUpn5vxbUybk2TsVqt5CdammwdrSpW5cXCPuQ23eawobPJ2B44hq8ss",
  "key34": "4vV4LAi6wDPZBbZ8YWxi4PvtDgV3UEgwzNXc54CRr8WVRxFMUdPo4nU9pXJGiUmSfbfVvWDZ8VvRbkraiM3DM88P",
  "key35": "xtpF4JY9XSKiKX3AYtadroktTmy2niiwVFHVSuDAnNVYRAKW93UJsSUezd81A8YBiEAJzvWHXYVF618kQbAAcdj",
  "key36": "4Acr16RrDvgRBk8Cn9i3y2rQVWpaJdhGXymYDezM5FCTdtaNGyTNKU6JZPW4HTkrN8Rp6rwHw7vyC2r1rjJSsZko",
  "key37": "5hfk5r7aqsbesBXQDPghtDzBqJrjsnv46rb287NW4AxuHiNJKDNB3yzykJddYFiojErMKNFzWngrVd28PwbiMb95",
  "key38": "21m22Mp7NKASUEZ5PPF7gsXJKr5CA61BgbRhg6adKws3si9uvD9p32JQ4aW9fyFLhhUA3FA2S4sh32hDwjzANhti",
  "key39": "4F2psEh7rr2c5kDVNwHiXFzrFqNZjaS13nMVAUfSuG43TGXKCqAnbuhE8pAqcnFR7MbM4o8ZREzRLD4LLdJqmumb",
  "key40": "qzmVLGTWY4G59rshEXmeDVGA8jxZgDu8fdKy57uRdB4nUN83Ujv79XyH1sgToTfDH5D3wwL7xD6ZbhEUt1m35fq",
  "key41": "aSW3f3pDHNZqtz3fDQyKWVHEfJmqbgUKhEVfkHBKbddx8mKEuEjFfwMbxgjAaCN6AjJWg3EVUdaeNBPdAthjJHW",
  "key42": "3rDXc3Bmnu2mAry4ewzNyom5gwJiVePBrSyTV6JYcHCgeHRDnGAQV835VJuM6zguEMrPqPJfLTFUjNiAevCDCz3c"
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
