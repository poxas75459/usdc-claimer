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
    "59PZ1JLj4c2JWAvX8oRpCJm9WJFEjY7HWgLoiW1GWd9oMckXMG4p4mtRDreqqV9K7YLJPkWv8sTHk9zefEjR6aGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xQkqFa45wBAtdAVnbTNiqkhW1Lwc7ayTVaz3kk4hUQfnhbsB9YaPvccknoM174GVHcMLQCHQksAPBWf3WYvg6wQ",
  "key1": "EKuVWDpBmMoMUyMjm117W4ZbtvxLgqBPwvpQFhWpdso8BxNuSb7yiCcyGxwYu32q6Du1NpdQPnJsSYvp4dArB9e",
  "key2": "3S8NemJdJBD8zVHTswuupXBboqahM59Gqdi5fEYN38VTMDRD2eGBNPdFTMuNmF8b17BRPJBrg6pBug87sRMHZSrr",
  "key3": "3nGPRJ9GBkYdahhz9vo5B57Ln13phpM51NmhAaXE9viaTqMftcvrZHUR4cQGFEigJHXWiczSUnQguCmgV5p4TjDP",
  "key4": "3jFwsH64czcRyGNXn6mPos7XvREMGWpkfHtb9zXfTr2Y7m4681rJaMGSjFykADvHgHr7DDnMZy46Qvuu9fjTWMVS",
  "key5": "5F3THNCYnAzRWHEjt5BDs9h7c3dHKt7jF17xqYG1gK3HzSZqhiR2Fr6S4Fm5qhzv3Xhd4yGqeQHXoPodYLB4GAVU",
  "key6": "4tPKr7JZciLc3iiMewG88CWiGFMsjzbVJ6MhUiRgqkJ8kXyqVHAMheM9KAZLiQSrZ79uB4xj5YWXgiTvnw4xpg54",
  "key7": "CM898kQySkZryBMsvjCcHFuLojuVoaAAxSiziKyNkCJEjMSVoZttbZ3ssdWQhbVCjHtKogPgZLpSVv9LQorXKrw",
  "key8": "3sYcQc8BUDfWnF5nZsUneY4yGT8kM9nHunbk5VSzjSZeev5yMSBoZputgQtYyvSxL8cAFMvQBSv1tBTdBkb8hUa5",
  "key9": "5zQtYZjnvD7eYequTVeXZjTVDAVDVhoprp17z5Roc1UJdDEHXABwdmevwsz7BHywP2YWYi4y437oc124GebRbUhE",
  "key10": "2BJ9GbYy2CVJVR1TSFRx7VzMsK3CCw5AFB1GsTEzaocq9DAkt4u8fiv1JBNZCCdk1R5Z7rukiGUfvuJWqVLtp5Dm",
  "key11": "4KJddHeetVpvQM1bnfEqhvCrK5etnBfRBwtX7zH9sdSM1BAbijTHwzK6j8xYAZrPaAf8FyVLKmnr6fAdTuLxhahN",
  "key12": "5cYKkXRgicL2YY2w2HnGj8Ujp327ZGZbDWk9tymp5i53STw9DQJVJCSTUAuiVU7UfBzsChGuYBozgiMpMWBmBW7U",
  "key13": "UCCWabHmrKmWycHVrU2vbP18EJ5ntcgaJugAnAMqA3CgwgrXrmRLSyuMC1399oWeDtM62PrF3pCwCdZJvWs8pbo",
  "key14": "8AUoUBRzL4LWk16bC8sqW5exM6AuNwemoCPicZkXrUMHgSmHyKoP7Y1h28zQ8ucYc24aG92PaBT9QbFmkHtJp7a",
  "key15": "4kZmLp1o23oYPNRmRFMxVAFq8tEX5Q5Ue9b2AfcAN3JoR5B5fZdKCTy9zyH9ZUX2VrvkJT3Uv466m3FQGfxnQfWw",
  "key16": "4fL1kPaRz3mEUtAB6AGhe2tNZHYsRa3xYNwDuHjr8EbrEUbcD5USt2x5wGMenn4kwr1sG62GeMC4ebGR8HYN5Phv",
  "key17": "658tJwS96GBXtQ7RXMUuZgPcdp2FirSaQPaCMwugQqM4LYQcm2PBv7ZXDQwVptpjUrgzrT9QQ8zKcvbrHkghcTYE",
  "key18": "24NHwdMvYsUwFqSGDyB2AZiKoxKRbQFLaATQCvRpsgutoe9cKL97t3XYsUartskC96fqpLXDhTs7ZEyVxV7gTGxA",
  "key19": "24tSiQHH1WwiHNbYY9oMfkhNnG9qkFxRuA43LuXQ6Uxfgq4Ptqpe6dFw9uaqTn779Wgs9XHrx2CbknZupUvpL1sK",
  "key20": "5PKPbz9o1sCfzWoPKvY5FzTBcrEWNSqht4Ww7K3KzKwNbKRPozgMRCKFAtC8Qg9SBmWsvgSjdM4HqhAZ1GpW84vi",
  "key21": "6rLkQd2bgfKtqbJSeQj9BGRBZw2mDghqzsdWaEpNc8jMEGzwNibDCC54yNVvduY8YiUX3tt2UoyPJt9dso5b8sJ",
  "key22": "3MqCmGtwMAbb8vk18dhh8haxy77D7gHJKvLCXNw8VfLeU37pHmXiVpASC31Vmd8Zfbeff8WD2Rdw1wVkowroTmMe",
  "key23": "33QbMaZetKA1DmB6CccSnKM9J5wYtQf23suTDd1aSUKrpQbgdLJs2tQDa2JsVCHEyYyhfauYgr689yNx4mb2sCXu",
  "key24": "2YiXhpLNDPuWncYgRjBVa7ZYPgv3x3rc9UgMwNtZiypkBrqXUv9qNJKM7EpE9C172aq8toQeDbq5TLLPgPAwyrVm",
  "key25": "2Q5mNfai9zzLg8edCgnoDWEdxV95zfgufgKq7grLwu83wmGx7KRJz1e6MpPatEPypmxaaxBpDk4EgkEs9WgJvfqi",
  "key26": "2j32eBsC1zPWcytkUbmvNiPiY7HVHRC8AUjaZucNxaWyteu6UoRbrC3kgUshN6UpgSAHRMnbrMfNS6rno3hdERUd",
  "key27": "5TSL5SriS4uaQVPP4vTPFecx8LCdhgC68mGTHWjzZnuaMhc8qTm8dKDCMJV9CTh8R9WqXRmjCm28KpcjvyG1UmpF",
  "key28": "FMeth6WniUvVuR9api5Bea3msQPtw2zmH6Dv4yeMR6ao9kW77p9fCaVrGXwgeC5GGosyNwTnBNpVJJ91acQqTRC",
  "key29": "3H7xUSNMeu9Tumknpc3UvdzC199DMv9bcSjRa4De4EgW2mhPsqzBcXmuMq9ave3nLZzcDpShWo1sKaaY7RyLuzKT",
  "key30": "JZBDQdEEcQiHgmTLaqZ14dYHXTmeyXksQ9yAuW3pom1ewnmrQmqS61U3JZ1HQKhP3gFAih2yGWjzA7SbZupD9W7",
  "key31": "5ZUa5KBoFAcbXGixHKDnz8a6XanRPmqJsZs9tNYFj3FV71Ce9AhSRsdSNSxo7AqdKh8tfMbJQSrA3x8YJZssTTWM",
  "key32": "5Rg6jdojzSmnSTvNdreTkebZ3wcifUvAFNn7JZjuEQkfgxiQmKahFaXMfQG6CJkKN9niAMnM6Vs8yrTdX43RwHA6",
  "key33": "468zvTvn6zhPR3zDBADJRBbjMG2JLtvr3mxT8J1o9WYydgsm8Z7b7zavgg937GACVDxgV3jxySNphqus9s18n7ic",
  "key34": "pptWyevSigYGVkrBDVknTpxpmwEGoLgprGCtStfvmEN5ko7ZMx3g9d51iw1tQuE5UbNsxLFPZdjfD5rSedhiQzn",
  "key35": "45TGaajkARTagqgjF6E1JnGztQtQ3YCs7pFLCtNQpgj2397o52HmhCHKGPYqofzbZqBYW9qJRhP71fdKbLzBQpa",
  "key36": "Bs2VKDTbekEfTED6BCVxEzZQB19ZtZpMs9UzQojkJpbbxjqx1G98VHLxetDBgSqqysR7DUJke8V2MZQ8GhY79Qt"
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
