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
    "5HB3NbajF2DKMU9fDxNyJePTzV5BBrqy79CsX2sk2pWzZjqZERMUFQjWZeNjNJg5aHUcjDhrq5bvnM3MfqLXndHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hh6aTq6hrXyJi1P9BeyTYkmTZrtAqffmHDvDKKHTiRNQ18ZbCrGwCR2dFhDhBv1fxPxxm2Arfwp5ypzsqnnpo1E",
  "key1": "5JrE1V4zYsYaBLkNgWQXwoaRftAzvHXxMaM6nkKt4TrepoNSjRvocDX37hwHWXLDx8AmRnw9oNJ73DLtLrBR2KzJ",
  "key2": "2cWNQtpu6oaQSLQdd5MAvLx8Uzb7wAppyC4YxXyJZDoZcv6UWq6xwepFAPm6DL8cnN563qKypZzJwbbziwF5MjF7",
  "key3": "MpHuspR6pKtDFuKNtjrFEmMCL4QhpHm5UqfJ7ktNBf7v11q5RzrZ6vDcE8URgzAVRaEsGwigz3vLarbN2hr1ecU",
  "key4": "9vicmcZPrqKnx3oMSRP1YXbmCM9AQJcXxVw65HmQXtbg8QBNmyz7LifU2mvQF9PBUhvyXaKycZrgAa929KnTzJ9",
  "key5": "5rkzPMsVXNKBmpdocw4JtoZuXfPLsVfeJXQ8LoB9G2eBnpb5wzJFK1WGaE7cyEA3ATYCerCkenLUMNnHkPq9J5Tz",
  "key6": "3x9iA5LbQkP13agJN5HyiUzgQs8AgEd7jy1XdKe9JPadWNf7AjXxAVrSdPRbvJYcjep1JKoeyLHva51EnbngMszf",
  "key7": "WXpDTcJ9tBamuja3rLJq36xg4GJbCs7WgX4BS2GiKULo1UtJvYDgxBr1wfuEpkYt9fhzbPtXYwW85MrNHfj2rvy",
  "key8": "42iAQ5t4tYyKw9zZKmvrPX54A2zt5LHwLbK9Ue8vREin6wd4eo5eA9vAwtZD1M2Xur1NNjN6qpeb8CXw2zz8AbxW",
  "key9": "4nnavkeKWWNtmuGL3T29nM15bJc4XYZ5HBXXVAmCyLtYaeHxxJ9tVEdyU6LHJsEcNkTaEEJALdrwMGSHgPWcPo4j",
  "key10": "5Z9PtLkvGgqaXJiDAi2612D24oZ4kWqWak471WhaApRgccu4GaMu5okdNifYCZaaeYM4hNf5e1ZDPvXce45mqLcy",
  "key11": "4YkKKD5thb3XnP1TvoB1f2vAcqVYtzDfzdbWGhpbusqyB8AZNVEemLWxKyU3Qcvhg2FQkKj1C4PhJYxPPUgyatz4",
  "key12": "5cAavjrxhnTcPp2CuFubhpbFqTY1SqbruYXmQ8vV5SzBqKPeMSYewtD1BgQHYNzz26pgX8GNemo8WugKrC4wKHbZ",
  "key13": "5QdyCinZnnjp424HYdYMmo3KvtLa3vHaGRokC9pL6wAjQkRWhgVasNA6F86T8ucHk6cuKJZATjGNed2ydaG9UcZo",
  "key14": "4tRMmxDtbukvvgtatsJD16AXPWp8B5iXgBVLYbd6isiYcPMMRcXmskXEdiEK8hhc1teSnVwvQjAtzMf7Sys2pJSA",
  "key15": "4EDDAPBaCAyD8j6E7DWAS5MrL9VcdGiWzooG1djZsdrTqaC8ZaQ6daCX662abYCaGEvvzyjKhjeSx3JhCxep2Nqa",
  "key16": "2npP3UHMh1ZeCkrH5BcPFQHB2o93pv2nJzC4hZzgcmQMCVhWEH6bkhHAWTpSnUyur7FhoWCgc8DBCN6mXnB6puap",
  "key17": "51tXfYyJW7j48xakpwNxHYu2twHw7XnBXY7E6eeXSDVybAyvQmWBLScsnrQm3Q2eaU6XiiasGSZ4upW9hAoyNMBZ",
  "key18": "2DfBFP5y62Nv3WMoATBzFHNAh7SsYAv9rSz1nNspXaEWBp6GDZbpcscRzgFEENjG2Vp3SnQbQGDyvDcZNxah2LG2",
  "key19": "228DHHccb9F5BBrNgQPcoQiVJFqQ6oE7Yu9nWkYbERpRKiKbiB1noMLnxiFPjtMZqWDX1CtBxLqKGh2ZfkEwdbf5",
  "key20": "2cKzGEHpmoRnXsFur8ATbWSA8wdEMUy3xFdZqpyZx8GTtN6b2ZPdJ6UAeG83GLguuTAWK6DHpSZdQ1iwBkri1g4o",
  "key21": "2Vj4ZcVe4ZVJSJWMDjVH1zLevp6scRcyksgG7Y1Au8HCuAjc4qUWEAuPZWaQx9rmfoDsp6VGdxTZExvb2dfLqfUD",
  "key22": "4Y5uErMdxuRXbKJyFbQGBXTtTVjLF9Q8CKM6pNdDnkzgi3SFJhYbZC1rk3LmpUWPPN4yUDLPwnTduWVyacxuSJDE",
  "key23": "x5uFrNZgkP6pVkeFwuGPbjpTiHUR9gmeisWKvK8S9FXYznabLNs4xpV8caDoEBGMHQH62n4C4fsNJM7v5yAiZr9",
  "key24": "aS9vwYRezz7Gg6MWH3NdHwiTPyND3PA9o9UnpUVtZUuvx9rMLxnN2ShhpW5WNgyzzMYKH3CZjBxE828bfkLHiZX",
  "key25": "4vwRrvr7w48Sdc1sFHS1yTJJvypV4SUqdv8tmkVymTyUapm3WrmifN2fLxHJW2tR3tz8NrPkH1DTR6647MA4pdHS",
  "key26": "2AHENaFniWr1163bgwYVdLvzc3gigEqGq3S2Dx7gmmEeD57zTBTzy3ErcCdMuvQuUaiHaxXugBQGkZmjPy5PE6Yo",
  "key27": "2gpHLqCANsCii7uRLVSe9ATtJkTQQiPDyyPiqxa7nHfAMpQxSyx49jDP2uz72tkyCChZb8bgB9BtmpDRdFkLzGyg",
  "key28": "8uYBwUzcrT6fEWUSqHUNTTwrX2XLwN1HtTGRoUWqNjHSvC9pgA9r4CdB2SSLHFXvh7RYrjbArhyfB68Mv3mwBFM",
  "key29": "4kf5Hy9kKhodhLEjrojLH7N3w8j54GWm3ZxWq4Kzdz3xA7pET3NcpUXi76RfH4AUcCjUMfbAN9P4PijoEkGEHcFF",
  "key30": "RqhV21vUGYpPBniEaX4jMn7z8NYwbQLLoJKTCxwiHPhW9BQRfS98Wf2aFtUKL5rS3VJ8Hf3bJFYbfUVPM3cMiCR",
  "key31": "2s7BJExJDvGXUHWc26HVF9PEkAdy6dPwrrHjZ7cJbJeNcJN3WPNoNLuDV7BcuwFpVmtTcid7mKBySzNHyGQrwqKU",
  "key32": "4BqirT9bMFL9j4KUXCwdPYw2ni7JxhbM1HcYTvZRRGsbt3YMo8k3VuqkQid2C2azfpGBk4v4UJJ8LQ99492EHW8T",
  "key33": "2JDo41rGv9TE1xsa8FfQYr4grg4WvkovnTg4X1Z28Dm4Ld8GWL6H4FQo2PY6bTjVAguXjQXSJmTaXn2Ln7xAnFvq",
  "key34": "3n9TzAZ6Kpnrrf4GJj9vczHQr95CCzFcHceGYVJ3bN1VuSZRXh99TyenSaZPDJuw2t2Frv2U5oniebLZU5J1S32x",
  "key35": "5JszVQes7RQwLrdFHkbxoykZJ5689fvwTjfwQZ4zayunYHoPYbb56UTcM4UW471j5nHieCDnv5R4dVCzPkAyz4RU",
  "key36": "2exXstqo81KKXo8iD5dsdLDypsxz1PS4n5QVek31rmzfg1kK2nbJuFF98UaPns5bxq4V7csocj6RTuA2MXaGDRVA",
  "key37": "3xAA2jGDw4BLypbL46gHKvjoThiMyUMQj3pKYubmBeoxL8GxUs9DbkaUBNixwRgpCcV6RcGPibsEQPz9H1nWWubn"
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
