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
    "4ZMKhWjS6E1ir3KpYuUn3xaNUc4cqQEgCQKjpLYyF5ttUGGmV2xPk5aostshYCu52qN1Sq4yjQKngFzKoXiYCbi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sQ7St3KTJ4PYQZLLwH4HigYTo57s48ps3xb7hUzAN8gNhdDeBZdkQ5k8MUsQZbvJKC2nTWJbqH5GgP7TG5y2nt4",
  "key1": "39aLhNWmFdKETg77AJmj2PCzaQ1gPb3U81rA7iUwUJKV1Fjm4bU5Yw3aDWfKHGi9XRapxJtTpp8br8cZrqYoajPB",
  "key2": "35x1oJqQ14UBBAf9HhLvEcf3UsdRqvpprZSRNaGpa5qQg4BXM72g9R1fKV3nTM6fTWKUEpvCf39EZ24ytaWGWHLh",
  "key3": "5NRhFFVDRf3fARdDkMVX29hwPHKuVU59DcQqeTGEqv1NhG6fs1zB2fHXTNrycoTKvKAWE6EawCjiGro86BLvSs2F",
  "key4": "JZ27ECSXS7qMHs9MFR3YtNT9qMRbyfPxG4Qmiiun7h2aQzmmBjBNhvqnHpvJAjAjEyptLYzCUfaidUF8UE7qjCZ",
  "key5": "2ySyxYnmTyFomcuNh5WTk57zJB5HuWa3Jm2Bbumcu443EVAEuQjssswDGgF3VaFJqiEgHPtnX9JaPDz9S2KQLMyS",
  "key6": "2TYhADNpySSBtXZQazE4BaJFEGrUH3748tP6JtCMpGtPbf9sRpz3XpamjvufyoKTcbT9YcvoTy7qVwBDzMBAY5gA",
  "key7": "2Siu7LqBycdicPGWLPT8ryVuvZad1Yfgf6LwcwzcdA7FRCsNnvauyaiawurzZWPfaRcHwpGNTAay4EeL5x5Wu6jc",
  "key8": "5SY5P5q7hreJk5mZJkcjCxoHrmXDoSuyTdgq2zReyfADq7q8hKm66CjZaWpAW1jwZ9T4MrQCckhqHj4YBmW1RV1a",
  "key9": "5Yp11gbMyJpEqPT6T6Xtq1rXnVCejrphQef6vRmGRwHx3Bb8zm9xLX8JiKZDJqg1zSw2pB8uHGgdEXMAqar6WuDa",
  "key10": "5Q8a5zNES5ZVT4CLUZxbtWvSDmhZZc6b8J61aypCdC6gGQkVTzt7a3Bdr8sv7ds5tzfGVsKYYBEud3QBLgvssVDk",
  "key11": "2e9Bs9pCMKejnEyph6Smq1zCxAVoFT2PngaKPKE1MvtbZ7XrroEtLCpMtaUfCBwEeNEPUdorRXGkxzd1nNs6nifM",
  "key12": "5UHJUPKhcvv1G3iJjBtQJSb9zqt2HDpnGtXg3drjF7i7VHtrdGG1uMnmCRXF2VdSnNbsA6btwydxN4Z7Kyk98Lfx",
  "key13": "4vx2889mgdFLcuZGmWuYEwwZUsWtfmJtP7Edr2nF5uDr9V4ETLbq3z3tCEbPtC4ziuNFfhhpnjj3wsvyzdwgvTwr",
  "key14": "nPuwnLBwhYi7367K22pEna4Ui736m1LFfECoTYjp3ZX9siyw46KA8hLqFcTQWyXFo15A6Kzrtma6UJnPxjn3Zr6",
  "key15": "4vQ3rP9HzzHvbTjxUw3KtCjo8zgQTpTg5zHCotB3pW9X3MLCnCPrywLvDeMSaSEqa7H3AQcRHsxJHgwP5VG81act",
  "key16": "3KbrYHFwVz6SnTNkHyVZtWydT9BGyo8jyGwrcsGf4epWk9wTm6HAbj38M2iYAJnQZyiA3mVLqLckHS7xZ1Xhz5Fe",
  "key17": "5Wuy3hmN3X67VNHDyXJeDwFs5k6uNGaLehPb31KW9hgypBWqbMNXUgwGPRoHHj9R46KW2r4zZHsmQJCENM222avk",
  "key18": "3ZJgXiJckghrFBen2DRbmL5sa89CEnkFYtsaR9YRnpQNfyRAYiTc6Wf6sXUm76ET5U9qs7mNnFSpLUeBFhHf6Q1R",
  "key19": "LQSY5xUWtqc2vXp6U3BzrXZw1zx9mLyZm2UjVxSjzfrBS8hL7zfNVphYzw4dQDwTzsJZ8EnBxTUNJb1sEbArXVQ",
  "key20": "ps78wZz6HZgb7CaxSA5QppukpAk4g88215FVoYk4Xe4GBDZVYgTinoGocm75CcrcJSURgfHFQsHZVhtG3Fbbjri",
  "key21": "71J5caaDQYjo3QE6N6ENtbzzLVx9UX7NxbQWfrh6Cch7gh53DYHZr72TQsURg77bY31uChwpczrbLXbZMhBFTTn",
  "key22": "58sFtcD1nd1cTrY7DBe4sBQr7LpadGeGLbiVXiAEZuGfjVJChYCLVUNiBdM2wSj872D2DCRUi4T5kXu4jrQXg68y",
  "key23": "3SLUWiHxStsk9rNZhi4Bc1q9m7e78dsyZWogZi78cVC1fqw2SZBReqmmzNncPz5SuAWJ2oyrvmh8a4WeyorBq4M5",
  "key24": "5AZVt7ADEigjA58aahS5ipWGuC4cadrF5uB9W85sR1mULmqgGY4DBrmCMPjM2HsVWugMMfsBFgRrkzWczBD6PtFt",
  "key25": "37uxaCGuNmnfLtGf7U1i2WFdcb2suekUiXWgDgmBMVBEKo8qLsxFoMPdRVFDQnU2ff6TyTJqoYi2oYyCFFJGYkqR",
  "key26": "64ytRd6TGLphGxMu5VV1pT3UP5L4mzSCUyAGribNiEWzrdAedbRkeL7QC9baY4o3h9JyaEBdK3DEGeVrSb1gP1Mx",
  "key27": "26U4GWd4QQFMy4KEt8tJqD58d9Eim34AEYVFGJuXiGEv8kCJtEhcC62MRnLKC6QiM4GKwocZi8wLNukHbJ3CT86t",
  "key28": "4o31SFCTY1w5bmsg84YpJsSAwqhWkPaUYGjvP3eZHWKMZBmAMqXAWCgVWototdgi3q8MXd9ZZ51qTEPx3t3eghHC",
  "key29": "5ynt92NAaPZaR41rnZDrvPtQpvt8X2v6kxREvo8JAjEpq1Q5tMiTQrCFzPzMBz5fECQoPic2RvQfkWTsah7zTDmK",
  "key30": "3QiJfgmp1aA2arru9RXgSCJ2BpoS78v3PquD5KuDmgkcp3WjEyAwX1VUq2nAmidZ6pd2YDsXbg1mr7ADpRLHSCRh",
  "key31": "5s3KhLnypLnFBsb9RpKvGVUpg5T5cEpwx98gnwcYckq1DgpZ3rH8FmMJUu8KbNUHTM7VVRMSDik7BY3Zig7zLhkj",
  "key32": "3rE8RWeLMMTxgMPHSaHKnkwirXF3LqH4nUCbcgugFEbc9iEtbfaKB8yNBrA1gk72aKoZAHcgYcwczLEeNLPCqMK4",
  "key33": "ik8x7kzFoGgg9amf9g2d7cET3M1CUE3u4PzweHCtM88J7GXw7Zj78f4R2GiHx8QHobhZSQqwQ6Etp7dbK8tFSiB",
  "key34": "22d2zu2C9s9xuHdxeCcdeUrExfSYxL8wy5RisS4pet9tQAewegEwe7uzJSFB4f7ECeKZkyc2wmD4ygEb4Cuxvbj5",
  "key35": "4rcVkQAG3h3KD9cKTpTXae7pfHED2kgRZxQKpNy3yFPUat3XBh7T7xg7FnNn1qvQCiH7X3oLrXNwENfLChN9SXAV",
  "key36": "61McVtkpaX2YdwfoJoXzhufoQiWCCqxbDYVMzWpSrp2sHvKZpUpYt7Qn612szobTmSPYRNNuFqj9Gqxq4vZ2eJEH"
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
