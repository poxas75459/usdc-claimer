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
    "3bjJ8EMDenaMKqiMkRVnmPvQ7Tj4BDMxWXjMrVVWZjzTZDFmuYiWavheLL3sVZZ1P5zgmZLY39eZrXBihUqUQ8mF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xiNqCGAwMfpJ3YN5rMpudQ5PTo1Dn4LaRhZYqCdzXrCYdYMs4QPhVk43Qvdn4pVqY9vSfZSZ9gcfqBkVtELFdog",
  "key1": "w8GAQy5PDLKMXowwuYsWEDryJs3REtMnC1DJno1wdVHiWfFETmQZiP2nWMZTLrfXYpWoNm1SEhzPutwBa67bBqU",
  "key2": "4cc6Rex2rMexDLDH7zEAjfVpDqyKX5eMJqL4m5DKHeWEh4X12gFMdvs7JxK6WLeJQsJ8GEQ5mhSjRQKFm8pX5L7D",
  "key3": "3RPBUESJ8Zn7QxBkYxQmHmnZNU7Xv3vXtef5etGtY4nEV37WxfXX6jAmBYAb2jVEv4ovn4UL1qUPJgn3C2uo4rdm",
  "key4": "j4MD1H7nsEUhFoAziravS9xuqTxyhYXdStBk3MvLnoNm5mvj4UgrbvsnDUXWji7zckC9WZVNqQLEcupJsWkRUpP",
  "key5": "3UG2wVc3ZUh6K73meEGmmx1ewJoKcZkFcVZQzWZakoqsrvpKXrtGLVXZY3GfLm4XzZ6JMBJaZajcovoNsfeEVByM",
  "key6": "AmrTfSrsCGSsH3wY644BX777Q4nsq8Qvaa9ijLffWTu3k1Bz7VdyoeVT6jbdXRj1XxkWzQWwxTbZmiphND4rLtr",
  "key7": "2LEJEEttsViHQ4XUhs1Gu8WG5wnrCBsVz7u2PmKvPSecJzTvsyfaeUsCQ8kQsryroPkY3LUVMSHKiiw5iBj1oxDV",
  "key8": "5D8exJBuZAmMkULJSrqfth6iPmLBzn5DPmnKaghGeVxAwaEx7jQ7RHPcxndkqPS1PShPHL1T1a2AfpE5TMf4M6Js",
  "key9": "4cj4B9fwnYCW2MmPKqBkfevTimcFoVTMP9L2uyAvLTP7gr12iTkVSkCYKRQ7itmFQ4Pqmp17kJb7aQkVYcADZGSA",
  "key10": "51GJXgRvPpkQvrFxiGWH7KWe5p3AowKtqV8nb8F2xB4q7YTXSk4k5Ldh8NbZTncTHZ3WiUvcBPpAWTi4NRL5uGFd",
  "key11": "5pvrjg3SML7nmsBJFqnmi7upDxDprwskArANCQzDwYPjmGfKUN4JRyo3dBsDmAfbkTm7UALZ5cyvitUyKNq9KfHo",
  "key12": "7jumkBadhTcLS7RNBVFbyJLQEJvsg973AyxTvNWmGdmw3Lkb7vrCENYa9DjfxvKVapr5brHBRdYr3UeQr8fMbux",
  "key13": "2QJmPRtzWL3rzcvVEgcY6VZ6EXKjExt5BiTTrKmSbrEWsu1nPdFxnCx9dq8xo848KYzMJ5tiAZNqDSy7ytmmKvqZ",
  "key14": "41qKe5MmYED1xix13yivxE15RmMGPoriHqjrQakSPVVBgfE95vjpdC1Pu8VmtegtDFhkdFgD4URUfmeZQMgAxJw",
  "key15": "4kiQFDSXYSTRxJCmQbCqKrhV9Tpqaq9Bgs9zFbQJrVcZoDKyGqcUqBSBehLxdm7uLCimMALNBFD9gNdd5Sev3wPk",
  "key16": "PKXTWktpCx8yRHpohmtPfNMkVQVbpVoySsz5xtK93YVHKN9wWmXovjQ6Zdj75DbbCW8SyNB8iQRgxU5mXWzPuu7",
  "key17": "4m3Kz91dYfyoAx1WDp9baJdnkKxMJtkCnxK2TKcNGxqD9bYShN4kSV4Wy2BBHM4j39tAXMbYMyBC91U3uZTL1VUU",
  "key18": "3JEPRVfusEXKNricCxzzmqR3PBco6mKjjLfiBn6NtH3asqPajkwt6zn4U71YxanKjkFF5eXJ6rU1wycc51B9xYvK",
  "key19": "3jqovpZV6FTbNVDxEgMmrdSdUfU53a1x6uSuQb4PSyzmxxpmE3NEwGdudwiErvdXNGxGW45zVoWGA8qaEZYjoVTz",
  "key20": "28ec3ihJFExUwModxBmed6yWFp6fhPxGnSkLvHxt5tgrvhc6qZ79xqJMh9jYtSmPXebH6jkxoWp8xJYJQHj26R75",
  "key21": "42iKTH3eYaTXMExKQc6xNYC5epUeBR4RTeojWfPaVprQCAZjjviA2HbTFFQK3EPzE94N7vZyVk9pxNgfuU2XH5Mh",
  "key22": "67HkXs7tW3hfhdgNAEc5ZkAh7qjwHF7z39JRVmBMXVmQXnAUPjrcFHLvF8HN5M27yQc3Ts8aw4nLEyFaDj2jXRJj",
  "key23": "spiGb4vLCe5GMK41AxFeNZd7RMKGc29bPQF51UoEWnLQqXEWgnUsERkNvLU3SjXsQYXKE3TpyBXv5uuYCTEQTQ8",
  "key24": "53v9ZYcZ44cjP79Vw9ZVpKjMvNNAEembKjhidNSYgQhnaABCeiL47gkkGPB1PWSByUyGSdA2Mth24wrkxG7xnQZd",
  "key25": "4x3SQWnCrUtfSQBotjQoQSo5YM8RQ7snbQZBZB388vxfKV2tdzyr4sKKMJsoA62Y48FmszZxPfq88U1iyy3TRgzB",
  "key26": "obFDX4EnAc6czqXA6ct2g597j51bNvsEUnpzRcBWnVftSctvMWqoxybkHcTDUChUkM9YxRTDdz56jGxqthinGdC",
  "key27": "4WMZj7Fc2MWpYBW3haoqmadr7yjwGhjaEZ9ZZ8tHpj92YMGv7BhYo8ToLgs9z46yCRP7dJWmXHRJeKDUxzEsPyaU",
  "key28": "5C7FX914DV8us1RoYLXEqywVgKdSgyGpGVqogM2KwXbyGv8L3LSj8KLwSYMFXuYqYhAzjhQxHhHhrzQqSGPBVkJc",
  "key29": "518h2zDjFzcuS1bGC6SgMYrLRGanikfav6Gyj7amaT3tb5hJ7tQ8NSq6G6Bb8D9LJMwyUBq7n3349SPxFQ4SaGcx",
  "key30": "47GBHCvSTF5Qe1zY37BYjR3kcRR8kxDa51KMtuo6yuLC6gTGPkiMeZyYbUf6c5s35oYY1QxzUTJ3tq5wprkKdLhB",
  "key31": "enaLYqKmmQokwjJryvVXzT3HpM8nEtxDBQjqXZZ3HUyeRafMQqQQSeMR5NG7iRfRUfvtEg35sWSUa1emJvLVS2D",
  "key32": "5qRdiJh7GLJRKxUTUF4vWxquNypnh6xsy6dXcqNTjP4Qk7N3x3ii96BF5pEXEtNZ8WyKhX69n5NTKZLb2MJguwBk",
  "key33": "aHDh69eVoHQtixn8WDMi3swJeCSAacuSMY1D5KWtdRtULN6nGsCFyHCdP1gPRSBafCXEGu3Tchcp6Q5ierAz7s5",
  "key34": "57seiq5Fk6rNNGaJHwb16YTotoxg2RQeV3Y2vs49AUTa6SNqhoWBxowfPUpPScJW9xsNpV3ndZMcnpgK9N17E99x",
  "key35": "3gQ3XdXFZmDDmPL6SykHt8Lh7KHberGqqVFMtsM53fkxwzbQ3NB76uVhkUxXaYMLfjvRfDL4sfkQKumW72EJ6JCf",
  "key36": "4peYAaFumzkNroa2Vr1ZfRqmBs4Lab8tXFDr1H6yyQLVdh75bWroyBRAC2GQMhSEUTWnpD51x9wFJKM45ZTGgena",
  "key37": "3RxisrAHZ4q3KcWixkyy5jDR3dLWw3aDC3V1vWARRCrNhyTNpKh9KkuFLdY4kwSijuyohKdLE2b5bciTkKubepvh",
  "key38": "2LjTtXzyd1qXGp2KgETGGN93Hso9eRK7JkxRf9P2qGDcVtR22u666E5DGuuE4mjUkVJyW3Hc8jtxK9phqBk3hx6G",
  "key39": "41Ygc4iY6p7nHrXA7Kz77Ksq6vaEoLE4B6XtY4kxBXZ7s8gjd7kxhoCoAkC5T6kkSstvTgSpDWHi3zuLSEfbgUZa",
  "key40": "2NjB4JfUmrkuzucK3RXtv1SyYec3cSSyZb4WDK522bR9keUjmVBpCo1NGpUm1zi7CFDSNsFDsRDHaeigpRxhMJS9"
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
