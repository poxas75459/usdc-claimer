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
    "5XM2UAX8ELa4GaaDRxfdQ4164G1oPGVHLFYtRGVuAwHK9Sddoa3ku2A5ZtB93RgvcsTwhcJf5Z52455PBeDXKKMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rqfWAYWUJvpQS379x7FfWEHRA7f8BHhVHXjR1TBhEjnfcjKcMe4zAXCpcWyPS13uSk2qxV96F6otkFuJZpxZUNq",
  "key1": "BMwKtfxCiSUytzcKxLQHebvzdAog9Jwxqvj5zcfdjrmMd1QoZL2Y1YSLSKRik8gKFT6XUNzK8PMQn97a3NbAZEV",
  "key2": "3RnGpmHM5WUdx2gpfKPG2zeLmwu78jbMyjicMNa6cDzzPWJFGZm3HWL6SXG117wMv6A7fKu7kemyWVtyYMBctXjN",
  "key3": "5wYj1GuP6dqcpCShbSdNh7Q1NJyS5FFNrQB5MraxQcNmyj28J5yai4Ls5byuswxF1nSJGN6M936yiNNVzgAgbDAB",
  "key4": "3NDg5SxB1w7cPGqZ5bR6xGd21sTMrQoVeq8RKDTmXEuWRvuLMxNQPiyyKe9MC9bo6F3f8MZVV5F4ZMuY24xUg8xS",
  "key5": "4DZi8wwwhXSRLEF6Sj6c2rhvzW7Ufez6Xfg3wiAP6nZDxCahwnDwyMPaRFu7sbXX86Y6eiRD6s6RrQa9Pcms3YJo",
  "key6": "3DkaBwDVEx4D8yCgBKm2qpz6PnugaMieJYqh5bkwkHuzuetDKtTRBUPgfnrksX6mLhsF8MSiebecAaP1yV9xMUom",
  "key7": "59jc9co59fo9LiENXsHmVvxtH3Vd34WKCFvM6HFY3VhiGbLwZNdjP3LwMejYxtjnHJezv7osbpi7Q9uVyaRefDAx",
  "key8": "4B2UwE6nxhkMrYKdhEVYC1uxVHvf64mzfQrUzVbvUoJ86hqX9F7GawoMPVdCRuWsLWv82W9LkdTRGGN6w2GyuvN8",
  "key9": "23WvDeE6riLUkex5ByrJ5p89Qfnr53qMkTbNADBWdFf64UShfuZxgcSfzvr7HexPW5vVEJAqWsqgZKoH9hkJUGtK",
  "key10": "26hY6BoRnaoN2qBNjH8QWyr65VLcqjNMkhd7DbfMoBqBL5zD7hUkxekPShPZvkqtysJnQDXYwdUiqFfveoWQz8Lp",
  "key11": "4nXeYL3Fn8Sq7ZG85AvF8WRpkoeeDGAa8CpNxJU4LJy7AxA2EZWHbEGnnYZxZr5rFpVQNGsahnRU5QQ22DLk8Qwp",
  "key12": "JxFtuGRJxBwmaV1WbkcKTDz8vyRrdayfceiJq5ks8xqtgGFjaDgQJLUeBtNUWTG2ADrirkpgRfJARqUUnZ5CUFy",
  "key13": "cWVPcUD91onmYp6Gyih5jvf1EATcZYsGvCcAPDZM3jdQvvsU2yuA41fUmg51PqKUR2mgehs6WoPURCPzkkVmW5n",
  "key14": "2ZS5Kc9j9ip8e1cTzTdh5L12Bycg4u81thNaTGnTLHrcgPNQgqafjsdejmdVWaawD9fnbsJaEyVKzh5MLukzt1KK",
  "key15": "5DRh45M3m9gS7s8QkT8Rq63bbBbtfkfSUci4sgzVYGnGkQJXgGSJhvsEdmWmGeyDwrtDqwL1iMZZM2ccYXJRULW2",
  "key16": "42UicJd5voNGdnBG2krWePPRSXnASazUZ2f3do2xtj1NGrXzHdTa5dTwycHjN5FfeBstak3UJSW3bUv7e1ocRKvK",
  "key17": "4eWH6PxAiWpXhATiLnu2aRCBgR396nxe4mcQfYAKoYLzmTT1tizZVSRgg2SpV7oRpXHLHJgxD4MJ3PNsGgvaMgpz",
  "key18": "2eGkLgAP9HiXAqtYJhm92pNnmPE52VreuXEPUZA5SuuMt58Uni21RQjWJKMFpjQFxXofY1wxnsGzANMeVH5P15PQ",
  "key19": "4S3nZgicYBVbWLBUyHnG3MsfWdK9MsYzPAx3NkJdFYd1AQAUDGQWXGjEMz1nCEUCGXCvZfKnX93D5RcR7vrVdb2D",
  "key20": "5rF6YNYNH88zpdNWBs7vfLpoV2y3t8RuJQ3TFc4sP8pwdHGB6PUyJWCg2dERsskYg78FRUjx3cSS8i8nC5hKc1Ym",
  "key21": "yksaNFGstsqfpJ8sZiMDNpQMYw1poZqc31kEjTGuTx9QtSNc1KynQGqY9qmL2BrchNbLcrUnvFcNbYKH3snp3Bt",
  "key22": "Ps4DCNdKu86P3SBX3GfZzMTm2yXJ5eue5TahnAnzMTsMsGZn8EJjUaLBdZqU2VWsvPujLsopu6mogRyPPh5dxrU",
  "key23": "fyQenRKzyYmgWxckjuj8JLXTFLRMirpp7ZNB9YKymoSwvqMn52DpjBwJzaAM8gY7b19iHVBTNT163Bo5K2Fi9LP",
  "key24": "5CTCFu6K44Ue4UZXjCeGMbk6RCv4kEKXoguZhRXP5dyLKa4fMv1oL9kaSg9ggf61YvdNsvX8gBJ8c2c5YmRKPB6R",
  "key25": "4ii3vXe9hoqgLyUcLmG97y4hMKiugLQf9njPTTFzrAHHBZqG4SQ3gRisJdXqP6N8PUGnDZjUXRWx8YVBKxmGuXfd",
  "key26": "gb5cXUSmpYK1henbzQtSQZDt6Ps6sPY1kpkNwWX5zb9AkprBhN1CWttzPSNJkUxmQim4cSH8xcwucBzccmVy1bt",
  "key27": "284aGex15L6MrsdVHi8CCdbXB7ZQSpZ2qp29pd15UK1KZXdqm78r8ozB9UKDDYfqfLs4VGY8STCvT8Fa3296HeAx",
  "key28": "2F341RrsexJYtd4g6MDNStY41d4oHVLLNwTANHWVaVtC9CHYStT8gm14qwAQbX7dMo63sWTmynHEeGZ3E8Dgo9Tp",
  "key29": "4t76BErPLaKmPrvWW5vpyPP6W8Ntzane3m6v7xRwH7uWqy5TwhsiytZ8QWvBU5UPajechv5Gm8UJyWDSGMJkYEzx",
  "key30": "37APwxEpaXTH9BxVkGooY6zPNfufVD8X9v3cGcDVQrmUhiN3CHfnYWyQ6g7S2YLTdF8CMmkqUURCtK23kQDSzNzz",
  "key31": "2xcCxJPkDrQbmaBxp7RecKt5f1gFLa9Bkpyo7G4ReNwBNXhyyaYDW86vS1CvU6R2x86m8LcukG9W9LmFjvsXDfNN",
  "key32": "62jXGczUCeguBcDTVUawASAciKx7oW3Gk6tUwmuNEgshfbejDk73QuwsnVEQg6wK2YAJNQSD6NY1c35ZNpT72zMT"
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
