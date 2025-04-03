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
    "4pBHMi1vBms7cdt8nKzw1XwB1BdAXbwZHmpo72rwqZbh2mhKNU1vpi619wtn2p4SbhHxsrwWgTcWFnzW3vwCPjdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mrBrub3ME7XQWkFGXqpktRP3JQxbC3vxqW39JKJra3frTiqqpXu1D9TaPsk8T2FYYB5p4VKmLuZnLmH5nJy4nyh",
  "key1": "4uyqU1D2tvWukH9uv1q61dNqDZidpWAzRPBWR4M1oJC77dsoLiCccJVg1tghWXeyWDVU4iNoxVMpccdwsG3kBHQY",
  "key2": "619B1pxBqsAT22uzBL4aFeZ2pRmnX9f9RovfEPrxF1xeKtYEFNrAoKnNZ91ZcioXHyZeR4Wwxx9z9TFzDGfnvBGj",
  "key3": "5N4Vqc3gHKesM1uZr4H1izeMrLLm6CnN58FMEhErFzHBKnhXdUSbP6S9iVvuke85LmKSPYNcxtX7foJqp8T3T4W2",
  "key4": "2dU8ji7uuP8toRwRgDvZtPkMNG1wwQLU9in2r67vMr6jqGSNLEik3WpMq7uHbpiX1T2ed48yAqkNBgYq2uaPevcs",
  "key5": "2AZufFxMkgmAKCdv2pTmPi9dPfKeRSdn1PZNcsd5Vjy4E7vb96ApXGn8N9J3JVTVEEWdzU9rFDU8kvPkc25A8crG",
  "key6": "3wndQoscVetKQkPM9eU2NjNaQ9nHkqb49t2N5k6CDXa6xMWtfj9eEchoUy8PuZeRTrfZikUfqsc45A9QkcbKUfaB",
  "key7": "35iKzsxtMdtxAuB8MpQfrF8ZfWoyKSyjJzKSa9eQbvNY9ndpxfVDve5E9Pdji23GyNwCyiBYEDSmtSegbhwvmq4M",
  "key8": "5eZHaUQEHUSR75emsf7hjScJQHL9qTFTG7ZYh8wtGzKkcvxWWQkot6vYor1pf6XbMWxBJ2hbiKNF5dPtKTUP69M2",
  "key9": "4PgsgW8Kc6cD3u5o8Bu6GKa324x7FrTjX7HmBq1wRVte1o36FQoMQv8ufnLtSTdFhwLX43RudbhNwfbgyqzmNWMU",
  "key10": "24To65ZpuDFHNLseDzLJfgAdrUeu251VHYkW17bYzdRY5FrmxB1tvFopXcFGJcG45AwP6fdAAiinmRSQ67H7oUFX",
  "key11": "5RPBQYzbMin3S5YAaSCZjAhvtndArpv5RKPyxNxtW25tCGeko2t5j8Bo1LEniWHivpq3x5Ckbk6uNTh7gkLgPTW5",
  "key12": "45yBZtbydbk1K3cppGSMAiNEp82RCSK8cPSqEdehZBQ53QBuKwQSyGfb9Q4kDuTZAragF2vSHJqe3TZHwSBuAdsb",
  "key13": "5vruqR2P3Pp2VXg27zTuMMdYoyCgiA1akg4hyV6VLfC6DY5mmQepV7SWCHG6T7oS6eGQhC5KNY4HbRsfY8LGyvBR",
  "key14": "4atRcFPfneoFbcqanjcYfNAUBXhuwNXbhAcVD5AN33YxyqTerrpVtaBPvvK7sBnptpobLCbiuNGjGTFGp8ckmSpi",
  "key15": "3bnRLq3Jejf7NjNPfWXrScxKNLWwg4V68SGcctfaYkwosYKv8snZcQMQH1bAMsmsswUvpvCzkMfLZ221cb3FRXrg",
  "key16": "3vDAewCaBTSBjYkJuFo95qDyprZmdKu65ka6ELFKhJZa7PvMcgLUq9wo5HS6ZNGdPaNrGjhmZTrBWBwbLK6L1vrD",
  "key17": "Xarws4rKBwk9eoFqkJzEzZC1w9ZxkEJpr8S5ZVdoMNqVTPzkFN7fpvuXEYWo3XEtZGdPnFU3dDguMWWEZnMWJgE",
  "key18": "5CeZeohkLFaB4CLFZK7tMS2htBgos2AXatR9kJavxdxvGhZiDJPNtcBTTGxBYX5W2rXYXee7LnAofGTrybuNfXsa",
  "key19": "5zUMyxA6twkr4R72ot4Bn26pBokXb95wW821cGveDWCL8vFkbg7a7b4k5QWxmVAPWx1Xb5cMJbwzijSFc1n6hNAN",
  "key20": "16ZxYNvK94rci4kKbbzGod6U2kdxXQdgshYgRvJCH8qfEdZHBXk7u4YtJswetLfgiq6mj2uERzsVNLgmKCu2Wzu",
  "key21": "ekkpx4ivHxPC3zPGuRn2tJ7JhvHEHZuvN7z3vE9PH8seVZZ5Pb4n4b7fxPYGf7oHR6eUoRKbF68CduZNW86HYuq",
  "key22": "2oHRthQYzXYwjnYpdTUzLNiQwUHmDiuSTunbnHY5WucHRzSnU6Xk8D9KmjxXhhHX9NFk2k6vKTtFtV3gMeqE81ky",
  "key23": "2pFMBGhwSxMSn5pLZx8eTsDJ84QSQZz3hEuSdVSrKtV4AAiHKWDBAs3PGvmFfg5BRDPWXpfd3y9mWZbmTXSakeGv",
  "key24": "2eVcE2S7mQtNXrDRHQHxKvsyLcKE5QjehnuFhX3TiHtM5zUH9qrjRroZkgZxdj9WZoC1NYLbQm3LR1sfbsGbRKr5",
  "key25": "64cnh9DSfeMn3nmN4F8rUym6bkhxqFQYgNaEzqDSotsdo4MTb3ToRaJhGhEh75Zs9DyWSgpz4tjZgRF8pP8CJWHs",
  "key26": "mLBpD3AiKDoxqx2rLUghogUs8yozPcAxbbhPtgDn4zCJgLFtvQ9zbr29oAxer4jd6goM7Yxsssz7Tbocd24F2AF",
  "key27": "29EGGfL7cdimMigY7iuLq7wpPgX4oKrGEWGuAe2EeKUH21tsiZQUqs7wGE35pxjsgkTceh3CynkBQav2vKp9nwL7",
  "key28": "HHenanLF4Z6RiugCAcnkwnWhGW6Fd9163qDbCBFZuZ7deMFcZhxjRe7p38Pceq2Lg7Y2venbVBqvovoaavGc1DZ",
  "key29": "AKpK8bqJyCKdjSn7Yy1NXyVXmotJAzJPC9s6iVMxN4TFoRhXMB88HcTywnvd29ARA7JBGdhXzWikpKoa75Ur6AL",
  "key30": "3Gse5WNADcbqKZPwimyDRetnE5vuf9uVQRvuzUAhBaXXdxQtLPYNwMiKSkFCohJsopgC9uFh2jNJZXChiEukssTL",
  "key31": "4FebhiiZxm7xsWZqzAVmLD6zziRareM59PfRmie9JKcev9BqTWKK6b4rCkYgJsUtHqNTUFsySspULonaFtRHADfN",
  "key32": "459gmH1wWbi3hwbzUvSpke93zNwrXyQMZT6dQPgcaydWoVTa2muPPVTnW7QR9pnHXgiBgqkFuVRtcq2bHTr3QHSM",
  "key33": "3iCx7sRn2iNP57koWqDaqigN2MZwpfSwKhKrX25fMdM2oyL4ShjkeM6e6NLdjig7e3s7L86FJDXRJd3ym8e3HojZ",
  "key34": "5ubCozqTtezHkBVM9JxVSZzUaVPNCp5Agq2LaG7nM1SQB9ind4ysVukpmZpqShUfpJT3gchVR9aozuL9oBHhBzVA",
  "key35": "3xrUboE1zdke6eXqU6WP7ce2q2fBU8H2L3j2CzULt73NFy1rRrHu3ZrHiTxKRsgyHCa1W2dxxMiiVUW139xZxC1Q",
  "key36": "4Z1hm5CVWL5kZYmovUi5e2uG3duUgZGKERCoSNDWMSg8AUGP4tZzmQ2BVHyJQQWLJNA5NVhRmb3n9XUWsRk3eFQW",
  "key37": "5arZSctspXurzvvezNiQdY9VPi1pBY7XodLncfjPTh3SJshBgPhtm2n9todTnmv74A9pZvCSskMWwmPEZsQawQap"
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
