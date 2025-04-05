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
    "K76f48NdhF7cEi4MJSC3X9FDaeoqvvK8VMyABTfZmA84ySXjWmMceAniebXyQJgpSXL2aezcSUvtnYZ742G5wxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pv4Fkzmmzmw1zsFj3kMhg2DfDKboL9PU8TY9PjEvZKx3m5vFJ83weHJ5mUQZjBzdHubapBpjkVzXjpc1TXn96Xf",
  "key1": "43AeC5ggdxV2Ji5mV6yagSzYnpPYUGoiQDXzViPErb7SNi18FpzJCBVtXuKjWiVTgrkeoTcerBu2N54zjY1cfKXq",
  "key2": "4oNN1kLnGJ3WPhUAxAAnsys7YtcVxa8s6Yak8dr9qNxMUELXGGfEcdt6NTdfr2yyL5hCBCH8DfK5vYKsaH5ff9Tn",
  "key3": "38Zfw7XAmpF1hwqYLB8QR85mTEjBen6TtJo5T3ZfjM1afYPhxYCujAUj69XqM9HRfdj9SCvXhGeE1mwQKRbMdX8n",
  "key4": "4gJ9qQhLH83fBDJRRqnE94kgBdGadunBa6T7H9aYL4ooyuTQv4pok5qirQTGapfmFeJoTn3dMU9NpFEAwoPozoJD",
  "key5": "3TqKAamREE9Tyj5sBVYy4mCJYxqYDNFW4s92ga2ARU2hG7i24J51TAhycT354dATZf1pzbBdMvLBbLfxKZBNrTso",
  "key6": "53uqLcErNFP5umFtegKivmygEKbYGhSMqJQS52hTSBHipvad2uLtojuG3ZmUSQCHhUZC2dWYuVxSoajBdULb4Dba",
  "key7": "4gS2WHMmYHKQbryPocjDnJ2645338r3KMr91ZqYtaaEvLmK5F84PcJmjsunQFQ5wZ6yuwYdNbXCXfRdLCVJZnW5x",
  "key8": "5Vq4cosKZVZFDRfMUsPeEbtg95dVP4aXR6rcgkcub4XKXXkuQwRdzzoH1c6M8Q39acxKGGTMLD53JKqV9WawhcAe",
  "key9": "3gnAUNVyCaMqBTwyNyK4fd2JUP1Xu6dGFWEJ3GcUgWiRiL46bvbvMMQLkKVpDnwL44ZaNGEDnTTRoCUyVMLTMHxu",
  "key10": "3jL9pVAEQXcGV7S5CyCm4ZE7oanJZfZaXmnHwBtP3y4FJNNQwYfy3f4qr8bxmEB5FkxxY16TFvyQpbQKcXGeJgFW",
  "key11": "5dxDAfGmnbAwEmsgdEkkiN36phBnWshjTKGrkL8xbcmcfTPc7ZAKm5YeaCN4NSjTwXEL8wQANzvrpEQWsXYL58Yt",
  "key12": "BgNVjiqc6uEBFpmECPeMwMNDpjhZEyoAYovgMWHAedQ392Xe5GAX9Beerr8SZ6nxHk7BwW3nD8N89embHn3BN7c",
  "key13": "4THUfhyhbssFYGvNT2paef2QEG9s5syvW2jwaPiwCV6cXHtDekuaoYiy71wGoKERpm2176wf9fZgNRmdshs69FQZ",
  "key14": "2sZ16HyRPbWWkbfaMZUhpwShw1grTjcLXv4kQBecz6JWy3PJebGMwtn6Hwj3ePieap1bi5JjYqrZVpESweJkhPb6",
  "key15": "4iCS7gXVT4fFUwxcGt6ar4oG2zY2Dv6kbpNwPRiKMbBwxH5vDjjNbeHyhgZy3rWFtpdqUCq2ZWfi8gVQiRELbGRh",
  "key16": "28J9FkxLL9Zhts3USBgTd5FPk933XW8QJgcyGEnUVuq2VveXEkDohKWEyckbsSA1qhdefacwLf3hbGEDU3iiDnEB",
  "key17": "4MXWRyPegi6PHmNstKTE7R5jhNs2f263bukz9qKgoGtS7GnoTzC4bc6bn1q5hkQi3TXghHivZuktP3u6rnU6vGNv",
  "key18": "2ChttbVzeohsnC2Q4EJpby8UvYAiBehiAQzHMfHkFLqrjYrTbERh5pginrkKEmKAaAtyUfWzN4MQQGpa8rdXNYtj",
  "key19": "ReyppXaZvNXWFaqbWEFdsFV8m9HcKWff9Vq9KcVQPoWxraqYeZ6HJPizgybXFgJD6Lniaeg1936UxUzLscYB7Hp",
  "key20": "4GLFVZv354gMFov8pqFSf9SKUexe8QyBHu3Xu5ugjqaKLg4iH1Qt7cr8ETcajBwJL6JXqrQ3FxyY6YeFAoXmPm2F",
  "key21": "2F8smKrKtfCf1CRf67WmXitWgD3ErVnDmx5ecWQBQDEpaeYDFpdPhYxXbFeCuAC5o2tWvXh3xN1y4yn4XZfAGB7g",
  "key22": "AcZHETSomcBH9UZknLK7CWCTaWPsVnpAq1G1vyWALdvF1hmmkmTGFZxzAcKgH53JN9KJ7q4TW16tEqAc4Z6jXbD",
  "key23": "4hTymDagKJffsTG63Q3diXfapygzV5ZziuxHjezLg9wF4jX2y5k86EFjRjcTHz2xpTKmuD7qj49KKnJ9JoLh1uZ2",
  "key24": "4gQWWdnjBDKg7f3FE3796xTwTy9hs5gzEV5e2mnvYiLJNBUgvmvDK4jt5S8iQJNnsi1d7p8DN6qCjSaG6Lqa4PFL",
  "key25": "3GE5rkdHwt8uJRi2fupHz3vaPdqPKikTPMwEeX4fjBkCSjdqLLckd5n8vteJkZZXzVgQ7LKb34SFvXfhhHKNnZzu",
  "key26": "KuMdu9FgqVSt7ZWpqXjQx5kdauGADZFXwYsg8WkjxKGKQZj19LtowXY7zATqPA5dSwRx6GutK9fyerKroxVwG37",
  "key27": "2h3Stk2ehvR3NeMRpoNj4pnFjx2t3qQqUBoPHbK6nLUJsjXqYqozvNueSmeu7UG9CREhTFcXdvxWLxoatoz3BDAt",
  "key28": "377aZXvepW4ypiw4BNqMBYvJ8KyRsb6nxUdc2WvFTdrcDmHEkhXw8x64LtSkuSDowwtvV1rzRht1XwWYZ5HWV4qm",
  "key29": "2S6FwVak5TeD2ipF6ucUqEHEB93QXpu2j3fU5Hi6wrmwpPY3xN6pkePWq8DZ7YBSUob7mXjwRqkZSzc5DRdPMYXU",
  "key30": "c73NFVWz6mdX3MszTP7xYQSpPSFDTXy69RDrRgG11bRGKtvxGqRuJ5BySnS8TWbgwyKeVNkV68HXuww6QsUHfN9",
  "key31": "5cXkMm58tc7fHwcLXUVkTVt1uGVGB7QFma9F19zH3EaYw4c5owmZ2kXPq8AktDKqfHACiR2pQE67H3gHQsTeVCWd",
  "key32": "RWUNFAKwBvER9VvzYSdWz2GaSoWLAfdb69JhCmXUFkMWrwLLoHZPHxdjpYAxh99rdRjhn5SHLyoUN1bCbYyAUYZ",
  "key33": "3b7DyLi8nMtYSGquCvKpyQiGXaA1Co8s7prs4xTAE6zNLsZKVJtfzRdTSMmjw2SkhoSnjParNvjGsQ6HQpEBznQy",
  "key34": "63N2CB8hHJU6Mm9MheLmDAUbkAVCiYKYipkrCb3rjCL5MVABQHFjukeMsJsoEpFx7SmszBEmHioBfxU5yS48Arj9",
  "key35": "3zP3iqSg9mZTSttgDZPAY2xz7ezoJwEXSpwg5fTKaHfCj2oroq9uc75ehu1ppecXP27Bk18WheRUncAxq3XoSJU",
  "key36": "2TvRTBwG3seP3c3qtBnJeTCFt2BpkBjRYNp5A4Lz8piuCSzUj4hadmASWVyzBQBfW4noKD51AbVqGrZuNgkqfWvm",
  "key37": "88BvRmowuAnNpx7DcENFBQNqJu9WAsroqwqAnvosVrPx7r28c4AtnXcP3UrbLzouLvfpSha42Gqyv2aUJK5Bv8B",
  "key38": "wPgrqfpazVbvBRUzcS1AC9d36QLYCFXLLGGGxWM68WG7BcJ2zoeEHWT8YUYEPfs3t9m1cSmbwF7CTohkq8UgF89",
  "key39": "2JYvbigCp9aNDn7ZBCJiR3UezScpoGPZvgGRfQRLeZexPV4Gm7XKwARGcSenC1321ukPmq1deHKHpae3SYTpSpPw",
  "key40": "22ujr3VxyXn946YmhQa7AwxMPKWm2yPPq1Lujer3s646quYC4MPsfZw3PsBRq3RvSHuXJZfX3vGE4ygoZjbQdQrx",
  "key41": "4jRitsVWvzYET8417Rer4QAJyaQQKYhCZE4WSo95KRdc2z66GLfkDUoBgj51jFDwcVmP2BoenwtFfxz6BZvixcX",
  "key42": "5aUJkM78oFprFY4xPD4gz49Mn4JpLMV3a1YqNkEW4K1qBjS6QTL6GJDhRiiHPY9AxvYZ1Y4FwBPGG3ToU2qRYskC"
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
