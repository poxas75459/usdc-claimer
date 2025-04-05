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
    "5SrP2WTmMYBGPgA7DwG4PuerJ2hizPQZidjVGTKhev3x3pGRQuHWEyiKSMizeSkzqyN9h16eSKXeqibdp6DJPACZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62bkHqfeZWQ7RL4WJwMmHvsZPeRHdbgcFrWAgWkjaRSM6sG1gaV9YwHkBBKqCYLKjB3tb9JhvdGUuf8fsV5mGMjo",
  "key1": "39gyXpPzzx3eBB1ZcnbrY1kd9PrU8RAiUoCQjQXmhnCHBSjwgAKtUeMWqCeimzw6tMroR554ZxF2pqHUjSnjHhqV",
  "key2": "43EMEGfNbjGDAVQjmd75KUa99CsnxH2KDkvJXqDRU3X2raivpAhQET9otphbcbpXL1ei1NfT2p31vaNNvbrscqv9",
  "key3": "3Ferxh3MzxdesMnks2JCmwsdKcWnP4HDk4KjGRaLkvhU1r1vW9L8oaCRKCQHQpwzCJzduQYFW84RvQuZsFLq2nka",
  "key4": "3boHijU8GzGi8DWZTMwndfMnWBs2XFazcZmJZVT6PKVJMN74o2FpKvWxjjzuZnF9xxZrcS7wTo5QojG8Uer5WDv6",
  "key5": "4rdhsSQV87nqKUAVb3Y9V1QsiCxWNfV3bDq8hZzEM9JhVJzq44WRZWdsUjEQrmqrhxWQzpZnXJJdGDzQyatWq5EW",
  "key6": "4HznfNKnog99BkVoA7khRyRMvQKuWc6C777hfqfRy555Wp8kcVzvqoLG3fMVHUipp69A9sCWxRHhEJPFWwFRCXa2",
  "key7": "5tiTZauYCaT1kHmVcU59184fs5KwFdV4SR1r5XucnsMdtPUrgCfgyCi5tnXUxwA2BwT7NWUxPh5dYuk5mr5V2CAi",
  "key8": "FUUFC75rc5zy9ewkpXc48dt1ZoUUMSQAj2u2kKoYhmvATVrK2bUs44w3yawKFSoFKvk5fSFaesK865YpMF6pPCb",
  "key9": "QBYKBBpDb1PdpcZUGK2tRwKEFENVaoL5PNP5YwkM4Y4rsKZQnM8W8EeYCtTzYTmZng9A1JVidh6EbKCVgdXTLmt",
  "key10": "4g11AYCFugrpgSAnisxVmtyJtQVNd63HzSwCibagW41xFBbTQG4HkBCo5UKKKEEqr6pDkgdhu7XYy28fekanzYqB",
  "key11": "4kkj8Hw8MNKmahmatATmJ8jQEdajikGBFpNE51znP4Eram8uQiYk6iEMinhU2psr3QfFCWt3juz2LEiKRNkNurB",
  "key12": "3ARSFhcdyxRLUSoYsDerqZxoT4boa9zKRtz8yS48wCjR4yxTCZF1b5TVju7zTZPGR1VhtYi1nMEP4kVNGwWq2bcM",
  "key13": "EzqLdWcpgogQNjXTRioAhLoDpp35dSHurMGSfEc36xdZoe5BCSZBhAex3hd3FJSmp6aBJAXkzJXmxvrtrjEfofV",
  "key14": "9rxQdQ98Xmjm6AuAfQisFbDLo6emQ1ixVyWZoTGLKYbJ82SYzMQZZTv8bDgZfJS4c5YYWacb9zcXFVYjZuhvibj",
  "key15": "674us8LAize8ENPyvs6vaYQPriMWwdrU49TMLFAWUvoMfRN2SwUEtdv9V1x6FGvCpNJWT4DzMWb5jdDBgynC8y2J",
  "key16": "3gePPXjrgs24hZkqdvt4MSFT57UHwhmscAEgCLMT2VWR7xd4d9T9m6cS1MwrvtheBtKwx91TnQESJQkTdB7cYQfj",
  "key17": "3RNDkhBWypAFX4uERoNNYug3ZqMK1qmdFaSjwYSZqQHDzVgFvXtT5qoSeey8pLnjTxYWY5FifdFwL2RDTBfqEUoZ",
  "key18": "2KKQHoXMYYWK2RiJKHd5hJtDi4T4H9HNd9ZTkB64ndufw7mK8KHMwdeo8X2XLYti4axkkKzFK3sbDfXDYrnLaWwd",
  "key19": "bCVfYR28TaadUpsTbkKBuYnqYmk3hUNq7Fpu3V8X8ZkGXetmKqJZQvYcQm4qppajwAx7KPBjg8hZ91oKHKYdJ5A",
  "key20": "3VvUxswmkvk8fHmsByyNuS1YAkCMq1kCzWamDxg3jzbwr17GL7pdFoS2NQjtu41tg7JFSogN911RZGQFSvmVhzB9",
  "key21": "3F4rGt6aGfWQ7HhxDejKRrSmS3kxWEts1Coh58KM3RPfeyYMNn1w3vpABN99swKfczxzxXVGazX1LhqifHewy4as",
  "key22": "5pxehDtXLTi5wWkkytqjGCqHWBy7ikSLyMDxBNfnbi4HkZw6wxoDSExf2xVT96UUHRfmAFAGhFXwTkYGrVumR5Cd",
  "key23": "65xpvagPrKpHjVEtVe2XjpjeTyY1tBKbrTQDMddPrixBD7cNdeyqivEDzGXyXXNQ6tBVJKVzsgYkrar9VPYHhn2E",
  "key24": "4Dxn6GQrk2VWfx44wJEk8dAWC7ZvVa3n65Z6WGtds62AKjJDDQo2ceDHhfvVupEDdhBDgDvydKDpiqcNDGsjmbkZ",
  "key25": "2XW2DVdeCkmvFm9SvNT4CwMSN9RNDUsDhSGByaZ4y4seipecbVru77kMFtMdKGBQCrfDaPSHLoYHDyziczbHF3hr",
  "key26": "5RYHnNvTG3wvgYVLGWiKTvfzXtqsqwSQ7F7Un8Dv9hjNg6MKYPs27nDbCv8rmVoAMVRfPjJor9Re1qxeycH1mpfo",
  "key27": "2W3KP1m6sDU9u2NKbvjN6HJBgbDNaQSkr93azJDYN9jzgM4bKQoVfbY9T2tmxKjdEfvzLuD6M4d1RNmWhJJt31w9",
  "key28": "23CLYFNL5buZXZbbQWV4qZFzNEobipjDaXWesFqkT7FM3x16XnQvvoQoidb1ycmWhpFRB9Uq9e7YzVkkSytpoEER",
  "key29": "47JkfjZNcGxRkMrrpmD1C1SXpEA39oadDrPWmLpy4JZwy68AAoh5v7AA35c5Hjxg2X5zxJyW8wKQW6EnpwZJxEab",
  "key30": "5A4jAv2HUXsQ4i3HNrhmaug7fYyhvxnCcCGYVM1fhu3ifgonGVT4gVqp2YnCW3GCRixFys7QBk517ppK1TwWr2pm",
  "key31": "32nCrCk3RoGJ3KkpuWUKnKCRt3CGdo6spfvxaCZWzHr4v97sjU8kJngBm2FLAFqGNoqWWyKf3YyQknksMrrQvoL5",
  "key32": "2SoSw1meAFiB2GtCbqW1r8ic4H5JUn1dUiCXeDGCEcHXm3vXu5NKPKPGhysLQx1qsDbtLLkVs6rMNhJaYe7TGbFA",
  "key33": "53MceGmCLYkku4ENuGr1WDWP7pYG4PresegmsmBYJGa5JpukPhEQjswj14RRuxtvbtgh6F8ntrNyHKWnkXveaNUg",
  "key34": "2Exbh5HDBefYE4ekaJqVzk8xgCRjKjHrxBHpsE7sPaS6m3Luivv16AJoAAxxzjWkKVYEFEuiKE7JJB9jP2iwsyf4",
  "key35": "5FUGuybYUqu6svdH5RcmRoPzq1YJapjobSRL6hVeDMaMmV7E7uXCeLh2ceCLHnwmeqa8k5TrkyHV79wXYCCiYGgC",
  "key36": "2Lj4X6uACiuqW2jsBcuhMMzog42K16aShK5yUj86o2QnPPRXcDiG4KSrY3NanmViDUuj69QpPMsBKX7ZWnyEsEUk"
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
