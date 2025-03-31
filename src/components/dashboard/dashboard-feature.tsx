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
    "3bG8UxCWDn59RJ6aUTDaBiBhqujb5JH1EJKgzY96d2tLmv8a9JoZZ25XutGKgboCEvfQ3htWUYeW991FRLKRpWUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SwvB53PU5tL9uB336eCT2GFw5jWXg885QogFoRavgV16JEWRASdJPuk9vnxAXZrCJPyN3ohPkuhZ1BwnLR4gPow",
  "key1": "5WBKg8RpXMAaomDsw6tZJKX8YjLb8XrNYZX1t9gJkC3wLiK9sNBCdWuiKNJzngiE3VeFtHrgUnYDQdk41BdkLdsC",
  "key2": "6179pkGiSkXDRXiYMrYcSxhd7bENKNRWDMXMgEE9HmoN6uerxAPnmTdnLvNHsSk4hNG69L3d85fUeB3YzhHaUF5Y",
  "key3": "2vdYi9PYM8pUccmr9k7YQT86Mv5C4RUjxxjYTjHaGWKEXwEfRcdZvfficnGPnDPXYzFCozJ2hD1TNaJ7vo2vfUhz",
  "key4": "Nc92fkGnxWneaTesntJrfCjBy7hAeb72VsRoB6jXXRbpF5LrHUdJ7GJhznTVA7h6CWTuDXoiNyVt4xaXTHWZZWh",
  "key5": "66iUF6Vumc6Av9166Jvusp4RX6zL7CuntXKzUE248cDgoPZcZM1NXvgKrJopVHV5Vw9HZYTFfc9ksVuuXjEtseZE",
  "key6": "5MgM2qw2mzJz754dAF3NHHxVicgdYHE5vLM9ZSdTxptx7TuZE7PFWt9C2p8tMRW3BsmJz1F9bHjKm7jPckXpoQjf",
  "key7": "2sJZ7ijWgcnvtEwXRrwqXoa377yyt99cehPNj2HNQaRdnyf9pP23QoncGNQHHzkaA6L6CmZP4TBtGWVHVmuokY4x",
  "key8": "gYVcSKHkM1J38WWzvGpFiwxjwfayVkxWxzunXjgsG6caugFCHWbheSNWU9nPcqCpHXnqKB6sxdTeCteJMoQAjfM",
  "key9": "63kgBimfPMMxHn9c7xtque6cdrCd4XZ8QfLZxnfnnVjFEuDmJTaXQygyFxRZcwdJgiL69RHAsLorY3m6488FJeJ1",
  "key10": "2RKqPhrJq2E5wNHESEjVzu32g4P5Bmw6mGZVNuetWihDxjYBo8tzBNUCWBJuNFY8VSjKmEe4GJ7wM7TZYPCSLaje",
  "key11": "5qsyaidiZRdfYvhozjz8oqqFpawZcprHazRriU3kuCJSHR8cVW1MY17GL4t4r1LMSfF3bmCRWW62vqgCa6myjzUZ",
  "key12": "67VuDbEFDnjvmtKNogNPXe3cj27NdDK1Qnfp34iP9yt6fDorsj4zAMaXv26TvktCzNw1uDKAx5Xw7VhGFY42NnwR",
  "key13": "hmMU4ic56L1HyVS6ZHQ8ggYqpc2uEMG5tMrTDnPfKg9u2WhG1XzFkVScrSrKNazDRHqp4riSK9TV7qxznV2Q2AK",
  "key14": "Ku8p7zpTAzUkjyLshMZUgXdHc3qoEPJYaBa7fanmn6YDGLefzqAK9gKMJ88o6c3LbVqRbUYMKhgF53XEoHNquvV",
  "key15": "4hFBaq8fcvPaqM5FhNkJFB8nuSAaUiV79YygZYXS6q2Jv7JTVXPNsnV33QjoAj5KJDN911DFGFYdgMtKRtv5c7gE",
  "key16": "4CsDLXzBnvxk1tZpinFadMNihfWcdYhKodTBPBMFLhZAo3cTAkAU5WpHQUFWfKfCjmWPWezs2cTfVBG6fe8hhVzx",
  "key17": "5D82dSgKqwgNoYQkJq12Kr9br67KDDWxv6LAah73JV1qv9bruDxKxbXVNLsNx1WmfvMZLk2cDetFHQ8zWHhmptPq",
  "key18": "3KbEVWfbBRjDk3HGRHfYEccjZhaYWG7DVnGPoMCsP66ZSFgpKHrntrLcHSX9FKvznyfgfqpud7yGP8yDXVUTAjD1",
  "key19": "4Uft1n2acRCB4ghcVzHX75rfAiXr7dhnLAdd9obSwn1svXvRpGNLw97N61GRXHe3FB5KyLTqiChdRq5ngt6krvgM",
  "key20": "3s8jQkXszVtLodgc2kLLs3X2eReS75e3vENynSyEDgSCiu2YkmvBmNaYbDm5nswrwaEV2TJqTSz3CT7vyjvSW7HN",
  "key21": "2AYf2bZnaME5gzrAYYJwSXMtMJEeDDNapVwmw76iH245cke36JRDibsBWBgxGXTXEuHniTt6cRJsFdFhfo86fZBA",
  "key22": "5LsvDXAB8N8E9Bj6VTjcFK9k4cFUVw6cGVQ4Dww1BcEg2eKpwDFQSg45BVzy1T8NdLxsbQDqeotZ5w49upp3PxAA",
  "key23": "62wg6tZZZom73o75imFQTimtFhaQebws1GoF5mzPJGzG6p9TMMYWMKHfpALhDJyBS68rVweWqYVQcGvudCgvFcP2",
  "key24": "21P7oxFFNFcfFK6HBYtfKZAeUab2rWSQdgyMjm91UVy5irJHeWChX4FFm6PFdgQAmkHmC4FH9FezbtdE2QyRsdeq",
  "key25": "54UrAZz7ZxuHdPWV86MYMLkoE12WKsN2ToWCbJUZyzyZGBBZnmYQeyk3Bo16qxMm3rbmry65HPLfArWWQDJQGQpe",
  "key26": "2gJNQXxzzgS4Ti5AEWR7y91yHPBRZPhM21R7G9b1bJBXh93FkFt7SgfSHYj63mZjNotuaDvCLi8cJcyve4D6YwtW",
  "key27": "5Q5PDMRZ1nh6baPuDLfVoh2pxgBYrYu3y1yQnLLF7SK2vGHSbTSeMYJdxXnTvsDPGF1hkRyzjadTGLuvv2KRaTRQ",
  "key28": "sUfxfH1kgkH4JoV24CKLjnYNZFpguD9kn54bBiQ5TBETAs54HYu3SSvRU7QVmbbBSSx3ynN9PiEpjf4s1B6vhaY",
  "key29": "4hmTWffc3xjaoz8oNxAPKindfYeRhH59AnfxsRngcY7WNdEmkuPjNFMKLUvhZFF9HRsNNHnxWLpRRbjRftDQ2xMG",
  "key30": "5JBA8aqJEkqWkdNFXUtj4XnJv9onLSjgaDsoDXFuvUJDWwXEK6Xza4SVd86ysbzozSdz4aUx2WVq2YgBdmGJRWSE",
  "key31": "5CCZrPDq72bXaPcsssMo8UVWEXcAsugeZTgvVzUoznhJVfQ6bUsHaiTctm8v5shzh49kk56RvooBHayvZtdwdJ6R",
  "key32": "4rtR3mdQSSR3xWpbA5a7VXjQphEkMWFkdrFbtFNsM8qnobxc1jjftag4iyhwAg49LEKzrtGwSjbhBXuuVS71KXxi",
  "key33": "LtNfHr5AtpXrpoq3KH9uNmgzdegWaQDeCMWLKXsESzeyxwZwVi8UD1CDdRESnnaRrAyss3X5DxUEfUYf4vJtRaz",
  "key34": "3Paddcz2Ktv8omKnfLYiZkVFxB2iQToVxJM5DKraRYt5amDx6NnMpZSbb8o7kKD28Lrx9r4Gx3v6wUwCsaZTrhEv",
  "key35": "4wccbnNw7k4R2LfzkZ4x9nKUbN4SPvtqNLy3LUHRa8p27o9iEKPX5ZUnkPwMvfsq3krjdGchsz7VaDvfa1dHV6ev",
  "key36": "5G4fb88s4AQ4hJzaPRbvXSX9DxRMuEJ1pyrM3xYzFo4LxuvNXatxq7MRw3gqX36n4rVxKJLXPS1UjCkUAHkhV9S6",
  "key37": "o886RX34oYRC5pbRK9GuiugJDJ7MZiWGBvv56Qz9fRS2Chs5FVVGUd2ZWVe6JnsUZCBTQChiR8k8NYdzMg81izJ",
  "key38": "5ZfrQbZC4AUdqMWUZ9yJQQjvcKvDuFkW2tW2QQ9bdrV8QDbkYpPnLLfEqWHTiD2vbCQgkoc1Axtdpk7jTCTdDp7n",
  "key39": "126RUnsesnpkAchSDxztUV8q79f59sSw9eNrL4fyWkCpngRP9gMxezX3FSZD8sQdZWZPu9peMRpsB1TrQu1miSJa",
  "key40": "2jUofyACQprQwX21UCynEvUhAphb8NdmgFNXSiTRPnZagT7EeukJr2MpRfpFXLKvkB3QMYrdYEsCwNAb69Gf3Wj1",
  "key41": "5aoS3mu6KYhFnpNC1CnZ8e7muLkcxLa5ESdMnkCSNC1UpKXgvmH7s5aSjsgcvQZxq3Awx6MRs95Ru2iYAF3gz8mG",
  "key42": "3PWWnzc8YF4d2vp3j1BEnAugCo9QNpHt4tNuv56MvYu8UV47taErPKMhEMueJ7Ussh4Moza9CXeHhxsjFkDHzYCH",
  "key43": "3hAj5TeR86CYCv7iEFgXZxKya9hs6UPNPTPgDFriBabdRqFB73mEQtw63iEdJmEci8f4CcYYDvWFFTGMhSc28Mj",
  "key44": "2bBHDCXABwoYGHZ6ASX2ggPUGuYp5uMuNRn7kSPDi7ienRwzhFGjv5gtLiCN8UedNBzvFdN6qweCWrN5J5uu1DsV",
  "key45": "4ZsKb3uqWy8GffZ2qSZS63pRMaXmzNCWb47eaKbHV4zUbeUoQEsSYaywQD1HrkY9hUyVCBnuYDKu4pKA7kmR8SBL",
  "key46": "5V9jchSS7m8a1AQqSMYpNX8ovksR1uqmPnZ6WyP2C66Y4aFPhHfd9B3gAsCZAR6dw51XcSdejrx3d6VBEaGGBGY6"
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
