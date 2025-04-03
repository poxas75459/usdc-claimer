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
    "KeuAuBPz8k7yBb2nhkqFvVbR7d1C98RgMruvHn5z1wRJ7mgyUUA6S4GiZENdfr6DKhQMK2p1WbYtCPp9BL7E5pB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x6d4GYjkY4W6oEaCS13bfvjCfEU76uU3PTFm7bV346ic5kpa2qe7F1S9v2iq1J6RzajedKd3ddomf96Kmmucfn5",
  "key1": "5jWVznH4hwxrLUKy2vKSFPG1MnbVi3GuwzoaGbdoLiAGJyWbtzZdZYuHvBbfTtFzPRnw4j3MgLyRnGfUiaVWCra9",
  "key2": "43WMMesw8WAE1apVRXf7H7KM11WT4wqczKFFyQMbLP5UXphymZwoYrLnrRcRZTvzHhQpV87T83EnJkHmjhnATE2V",
  "key3": "4DgHbuz8AJ3YK2t1gbb7KFVrfR4xym1PuKiSokJh8pGKa18NRWBd7zYuFaWiQSUUK66vzbZcSCc5SmxHefSqnLNV",
  "key4": "49cHsu8pnvdGzsxMcX9Wakbh3SZqG4Xp6yjkXNTrPTguzHB8YLBmkX8PUaEBFSDAwEgmpn1UkMDtewLG9tirTJZ3",
  "key5": "4A1yPzKHwNDD1zMpQU7FBacpNKpLYdMhnkYkin7pW31o4QnVUqzrEcZLdu7Ycm4TQusiBcvHARPBz46FF5rfTArq",
  "key6": "5U8NBxPF88JZg1EHAJRXFf8WJgnMWHskgDDydos95QNFX83ER6LbAhaqXu62XXyP7nJKZAYWHMGJ9jJ7Zv4HKqet",
  "key7": "29dQezJQWvfZERWkdZFRT4gnjFFmSCmRNNUfnizhcrpFGrjJGzUxfSLbW9zpC3sfQMrK9Vuwui7FFGJbCByNdkXA",
  "key8": "5pHGFemKdjDeiWmxcq9dbQUqKjjscSijiaz8BqVLuBHvRq49bjdikre4GbNpetasuXXjc5r9fYPt7CbRXhpYFjqU",
  "key9": "5WrdzDvJtkZbxtcoD8sj2LKUQ5iqFs3W6cwcqQH7WMi33DbafgVmipyndgEApiyuYfHEjfQCVkcyZCdwUXDNL5xk",
  "key10": "pMLiFgdFUTcXTsz72tKwX1K2tnxv6E7cGmuBrDZVpi8Aii1yHcmd3zP1VJ91exvBAQPFWVE1fsf32u1jCskkkhj",
  "key11": "dt5cQm6GuR3hyGibs1FybUcEHEWg6sRZLoVtGzD9apQ9XD5BJqhdTdoXDrfQnQNkZrg5ApHmnY4KtMZujc3HB4x",
  "key12": "2zeidkMKkT8cxfcDGzdPc3wp3nvRm84HMELGeMuLA27NBCdTCamvvB6eGBUE1DSf5FZEabmAVWB6ctv59D8v6awM",
  "key13": "2xZAzuNPtPa2jsrkVPpQ1aknm7DCc1ZMLSQCwd5ZNEnKqurj2dEU6Uw3w9b64Ck3Rp9Q1x6Dyu3T9z1GFwzhL4Tu",
  "key14": "3SDxQXjZoPeqnC98kaFR49SnaherncCqsJpjKH6x9v9Mfvnh4KzoAT1aRropbG9tXLr7ebqbzAqbSw5BZtueXrDZ",
  "key15": "3STPUve84n7n8gDRMPz7uiwLqGHFuQQRAn6puFCAbYdmERvPnsE5AX61Sg5jKQd5TavgehrRAyGGVJrG6T4nF6Na",
  "key16": "2giydiRgYZmvbZfrvMzrQ86NgfQ9UUC1MC9vpaeEvUuS2jJzYe3YAmAZq4LFBSYrk8fVVpEvo2Wf7FRzPcWThuVA",
  "key17": "2JbKK1ufx6puKEGrh3MbM2gHK1Jq8fikKMVBYHGefQxx78nwgx2ajqFJ6MTQfNTFbmbPPF7QRZcqz1GMjN9XjG3j",
  "key18": "3Xy1vDshWfjC8bvvWcGeGFcS6dgPxmzUoQfSby2Tprb7fkB98Q6yXTcx1p8RFoqmM52GJxxYwva7w4XFqogxoAhe",
  "key19": "25HEcEqsN2ArBB23rZkaPURbLMw3YBV4jsrYkwY6Lvr42DHbgQKKkxTNaezqDbHrQjGsEFbopQtQvNsRYka3BpKx",
  "key20": "4BaWKxVbJVpjCWc6V6LQAfFj2YiuVqy5E184Zbyr1RCAknnCmM8xjpohLmhVEqcCNiS6uaov1oQ4GxpTXqorHUXv",
  "key21": "5WdYr6mSASghRYF4uvpPQNk92XdcU65dsCVhJp9JRCwqxpwmGumJntWitY7NRk8VUbbbxP9QDyePQi8NQcGVHWDs",
  "key22": "5miiZFzqmcgjwwmwgxyG7eRFd65TnjihhevoqwvvbnBDjgJp67w8PhyeTXzkY8CRmSBRoEHAeWpoqTMG8YWRvXYp",
  "key23": "BoiVMTvkM7cGL9wR2Mhrd2KZPhzyFwaQDS4BWKm3M3a3DWpBZaVDMdvFaNjAYRNbp7TV93qXRpe1T7bwNt1eddT",
  "key24": "66uSPy7GBq5U4H7mJWQFwp981hf1AnLFpznMANe47Le1kDddxAwY6QRw2zpP9ogjUs8GkwJAxnwu3PiQSkeMYKNp",
  "key25": "43rJ4ZrmmityyeEv9CfcquxTffUM4HT3mMGFF372x2781WW7ZzWr65Uu76AaG5qSjEuoSv17MNi9RMfaxJMLQDDi",
  "key26": "TjvWgJPcrULb2VhZRwtrkPQ1c7zeXmLqYr2VQNkrttvv4KWVZ4RxjhotCKx4h3PTN3wMQNsmsMsTkHGbFs13Aon"
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
