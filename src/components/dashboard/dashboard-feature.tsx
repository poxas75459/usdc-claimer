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
    "3koD6SaxtLLrfJdQ4a6S86z7NusN159MqGoF9BKfBhX7FcmzAKbGXnpUytM7u2Z7kavGY2XT97LYCc76EJRXb2fw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wWg6r61iqRnjYuGf39cuuDEmxwX9TWj88JM8CzibuUQr9sHpYDEZxHV21VTG6dp4PLXresDtigRAxqwxyTPRZZw",
  "key1": "3ag7oCYdUFNYpR5uL31rDnPNhZqH2CY9QkCQq4q8PiS5eWgtbin5bHTU5KRrTW3Cv7SmoPudTvMcT4tmn1AsGDCu",
  "key2": "5BUCxTX393ekJjArBVtbQtjh9pZZ24443bi1cv4Edv811m9ckFxVDuWW87Qx5JWJdEFxigqc7oPSs61GCZbeyc43",
  "key3": "3Eub5NZNaC4X2ZWPL8M45V4JTBSt23P7sBafn9G3T65HcHHjCcmJkGQ4HaLpPZw3ghWhZyCXtJKbNWpDNm8rwysw",
  "key4": "231tYsVPVEHZTjN1NE6rZ7v2xHUU1tWVJphafVi9V1QPcRitqsqy8W13KJknnT6X38j8ejX7cyJutDixTPJdLdR8",
  "key5": "66bqCUHyC3x4yGPnYfMQkegCpgSWeviYt8nz3msvYCdAamd3spEs8uvG8GJFpphaHtNj5ozqKC3q24scyVexnR1S",
  "key6": "4nDJx6y98TdksXSEqELiJwMwaU9VRR3DhdnsCJJpwoexzDPmtL16htschpXLvhqVaFYu8sgo5vqMmp66jxQD5Ebz",
  "key7": "4z5DzktcSDdPS6jfnhqpVqG63TpAc1iK8HxdvcJPAcju3yv3Q6sfaYYa2J17H8ooN4wbdab1dBwX4jpsTn2QCAst",
  "key8": "3MBMndRQoZfXysVzSkbidNBbBAfZkkLJ81vRjR14cRgVqncmDXEXG2UbridjiBJpywWiSrqWu624vVEzoVK7QpQ7",
  "key9": "2QMHkkLTZ1UTmYPDcCDCkZYtKkJyYAKsRw19F1xnmmAr1kvPkNemwCGu1SQRwmARjf8GZ8hjcAAtDN6Qi4aYmy3A",
  "key10": "3ugnixojEXKpofAn87iDDN6Pbz6UmYsVWtdXu15zjbuZf6NFNVxfJSNCcCB6JEHDN3B739YSSwhpMQwCDRRSjz7W",
  "key11": "DsyM3Wey1zFRTyEPqFAbGZbYKer9tyXtLMQwN5Dmnoskenp5ZLCBvcrevMyP7v9yJSxctxU8rjQwLRphVya96KK",
  "key12": "5pooz1tL968R2pW51EgsHm4uQhMcooKV2SXkm9Fih2hdnmFeVetVRGg36DMHq2XdHUGRn8MHA7rJ7Eu57j71Mm9s",
  "key13": "4XF57cNggeQWmE46CJ9tqSqvd1JUJPK5aFZzYwnDfUY9mFq4CrGPNkZ5XEVkYKk71jwamewnPSBhMWVXrHr35B4t",
  "key14": "3StNJFRvZDS5u1mwVViScNJpBVp2HaYYyaUKdLSSseXHKssHnM2EPggC2QCpuAfn5v8zovMs3Q6KsDPhsAm3xZe2",
  "key15": "3oEeU1inKxe139DKUK2XcqTiUFCufuEf1RDaWp4SeaBLxEpBPpC6sAYexbKTFQH8JY3o4fyjmMeEwFtm8kHNh1wR",
  "key16": "4ww5Apt8xrhHgBXX9b2JyHVftGHr1PfQBEXHcRzmrfc7BUCinWW51V4drapSbS9HgXowDRXsKib5zbGfom8FjrDT",
  "key17": "3BX55FVup54dr5hapUh6JmXDqZyNjyrT2jRnHujQTHqrsArtrzwvDiNjRpT6yxgDkCo41PsWZFeRvFiZBQNr3KcR",
  "key18": "3SUYZkvJQ72Xa34KZTNPzc2JtDhfkynyWoCk2PrgoYSSsvSaCHEp33rLNbt4N5McWRjrXZBdBfakdSMx3Z8s8HQe",
  "key19": "2vh7NT4gSBEk3cpRJ1BQ1KKSoDD9AspjTNF2GauG59zKFvfS9kpMQUDNXuXhWXbXxL3qKi4Fxc4sXM1SP3vvknha",
  "key20": "2o8GRU4iojCUTfbWCcPZJzsaBHi2y5FWEyQQiSaQdCAPwUoT587DNCvsJrNWFcGX3T8DiAjfNn3SuDVrxMux18bH",
  "key21": "2EnEVQo6b9kfVwdo46KppA6b7Y76c7UHTKNuxG7tNre5f25E39gaTV6SVMvvNcdsRjSdSTZVXMqh1vSG9G7pQ8qX",
  "key22": "523iChe8wPfdNGpXUU3RNqcUbPUcLBvRk5HYVDdCTitMjGEChpBsfC8q9M9EHiwixe5R2seD8fAjv8S5vkt38cnQ",
  "key23": "2S5z8FS9CnwHebz3oN2h9szc4WW7pML6UWvShumCE29UgPUwPhUzsbUhqW14KRDWmi8Fi8wonvBcn6zR4NAz3yGM",
  "key24": "5maRNmpxs7is95ifkXXR6eTBcEao3NSvzu5XaeVr3KPGLx1xtXHDR3bgtnYFKCQZkupX918gUp7wYZ4BroCKdLDg",
  "key25": "3Azkj3ewPcGqujJ1xgh3PKYAMjqydoaE3G6ikPugPCWvhXfUxhMwg1L7BrkemceFjGpc4DjYvUUSv7kP3wmLNGSG",
  "key26": "4b7iBywsPZFwm4F31VXoRzRBYG9CQo7PX6jejyxhE14jm9AACkUV8Exp83HTPTBJi3nPV8ZjhQmQ8173JySevEhc",
  "key27": "5e3VEizDU8cwKj1HGUyhECmUfU1qv1EMWefUHSB8apHcMQuirKg14WmrBucTFHQ9VmTaqqK858NnCEZFVPJToXkL",
  "key28": "4iGNJCzqBtpcek15RB3vHFHd2L9EJXKq9eWGpQTtrsy6S7yrRkdkRFZri1DmpijgiSGAwggzZJjwGCh6QMTsx974"
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
