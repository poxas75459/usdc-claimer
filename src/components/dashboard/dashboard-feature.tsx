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
    "64LEANJ4bockFcLGaT89pxGnrHPJMahea1AfD9uUg7agS56pnhvc9mRTjJnmEVafp4FgJmVfRKi8uJVR7xf15uyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gy4qf4gGbvk7rKsten9KXtVyfjJCnmSQUVkfzRg4thZp41gZbPyuVd4qLVGdVftf2WVy4GEa19A1FFFcB8mVPcz",
  "key1": "3xcVfswQq3hRNhPSsuE9Et5ihbxudi9QYMe6JonCWgJyFaz9eUvTjcwiAuCRoLrNFvnktwosAVNre1YS26JHm8Sb",
  "key2": "yUWP4tYpusXGCYVSQm9kPhyR1bUBpvqxTiaWXpnZqv7bMqxPwSKje6YBw2xLyDqmuW8PsxnpCp7RPuH8BgMm1zp",
  "key3": "4C7MXyXPeDwJ96oEtZQruqH69ZHRQAPMfMDdFVsJvtGbXVpLnR9DznprnsntXsUYQweR69io926XaieVJn4Jjesv",
  "key4": "5xXbkFA4rBuLgozPokU2UNc9XEeAJcAFRdY9a2vuaBUEToaX7Egj1sMPtHnJnyNbuoqazqNuWpUPtWzt7u6kiMbv",
  "key5": "4MNVBx6z9C9GoSzJXfGQaE3c5ZmXxuc4zZcPhJfaYqkwu5ujJy4GupZGNFTJ9bBsBmNfcafDqUisgXYxMwEapWuY",
  "key6": "4cDoVHX23w1ySQUXLMC7SwCEmUKW5aZRd7HkDD2wb94Yy6N8x7eacMXToBpjvQ5YvadpYzpj4o3JSaQEJfJF465c",
  "key7": "4SsTGnMac6u4tZkmqScZrQwXd3rzptjHJyHERccuri4v8GTzcZnjABPxXP1gSocgMUUuEmRBWCs2p3xr2fD9BU1n",
  "key8": "3GXUBev5NFRR9RUEPEiKBDpjdSBP3cpdgK9HrzxdfdwvayFVaXRBFWZEXbs4siK3gxXBkXGomhRnxbTbDL8FpzVb",
  "key9": "2qk9bfc4Zn8SdbQ9cEyFo3HVp61S8LMJ2BvUauwmDQcxGbdFwv1jWJPKuPAtL8uS7igsmNt84D3p31K5bJowH5nV",
  "key10": "23DNxJKV2dbvvNWNRwxcuEJfoNLqZowxxVUabrV3FFayWxMigG3hBfhRWyUdi7KeUrHLpJS5BTnH5ixigKGJ9wKG",
  "key11": "2EgmAxnF3mprVRzmtjYPrpTUJbPMsALTyMnEuZ4n7m8k9KmE5NN4aZwsCAY9GmYjDGQSWiwdZqmn3RgwcusLNqmb",
  "key12": "4SNtvA6knJaFXPGWwBynEakRxFhMLuoPZUWbgayMCB3jYGha5j4bouGFsQdeomDhTwajEoXuWYJxvk31TF8dVW21",
  "key13": "5F9ib2XEZZxSEFju5p8nrzzSLioJ4zTnjMA9MAjjWeuWBGQ92yt9K14dWLahbjjkZL93pTyouAD2QJfbMX4rVqHG",
  "key14": "3W7pX7iZnnM4uQuE2G323XrMZEXW4Wb9fcgYJTefwLszHhcKZcgbY33W51jXPAR1Ht6YK736agxjdmcMH1KzXDhF",
  "key15": "uDwW7h6MgpiLVdLEcvwJRxAD7MfU6X3B1fktHF81Frr3TZuxKAXqopUmoPvy242KZ58eU9FrWh5kALbmgVtb2eR",
  "key16": "2tgqEmrdSrt8jEACcdrmKcc993XSa2AkYSCxwWyrFEn6pgCCu3k2V3KRGxwWBUV1qBXMs8h7JExR92RAh8M1H7Kg",
  "key17": "5i71EQggYrneyVjiu9xzLDq6eEHDj9mDJxPETmKF8sWQB2rymsX85c66f9LRSDRN4pbz8eU9LVJVU2JGUExgX25w",
  "key18": "3tabwuvZios5J7gphWmBpoCFQLkhzJmDXV8PWdSyxYFgbpP65abWTsFpQWeQVjQaxZjQPLpcbSsQUt84kK6XiB1m",
  "key19": "4WTh5VoRW4exuz2CYUv1bKcd9FciimgtRLQugdcgme8NzdaKfQQx276LR8YkzzXYZeCQxXH9ajQd1E14E8qsdohB",
  "key20": "3DNGtesauKFnfyGnt5fZEnah6L4yC24g3ckbEv9hsiqyZWzstSYmTbrabKCpJedUymwL48M7JKacVc7vJBVFL7Z1",
  "key21": "3VkwY8qftN2B5A5ZNEoMtyEwkkcmqrMf61dSfNqcYzoongwgaQbVVY7y1n7DMyBmwNJ5qTLzso92oEeaDugqnadD",
  "key22": "5YQMbVaC1SstkhEUcyHxNep2jdqyU4pM6AWuTiVtR2F2WoKvC8rTJ3ZFW9aMRVKPurF51SjSwCQm5azVatVjZ8ss",
  "key23": "Ae7TmHCnbCpHLo9MG9iW8BiisAZpAJwYqfxRScythSFRxTGZZWwht4Ai44TK49xxp6D5DHG27z3U57ybFBehh42",
  "key24": "fAbf2nrqh3Cbr9Qps8VLfgJfxmQ84B1nQ6br9vme1QcrQVeX3TqrtEBniECga5NxEpgTTwbaCGMp68U64pbuzrV",
  "key25": "661uUCfYVXZHXDFJvujSpVb18UxCekxPugHK4UKgDUJHUDbs9VumQLSew4TUQ43CAEG5ha24AbbrhSHRUTgFby3v",
  "key26": "2Vq4Hj5bqpo5YTuKUzziuyv8RfdL85nn5rXHuNezQCuCRjYiCzJebLDdXNJMAm59rSYouNbc5YkEc7GYC5fCN35L",
  "key27": "4sTh2n8BfMYxcBfNQmEWEUWkL6ZNE71h5eRyvDqUa6v8KdzLjwVrKXAr5N4H1ErhzxvCSAVVZwUMKSDTaAvBKLhu",
  "key28": "38TMDhnSSDGwMyaxS9skY1Q8Jq3nMpLK4ZoQrQYab4A2LpyfPTSdfTv5j91WTjPpbJKy5LXY8rV6oJg1iZq6ui1g",
  "key29": "2LpphSeneqYy5pbTt4vZyCviPTX21GAcEe9RkVmJquJBHJ89WpSirGdYpr2wTxMcTfWoqZj76U7bWMhDnMAW7zYG",
  "key30": "4CQc3KjqTHvKQy9PNstoEXVWP3CGSBp1QYSYV9TnDXJtnad2WBqFir5pSu5aEtotaX8Ac78HWCEdiVMByZU2NJce",
  "key31": "4tXAX9PYgFDUKweadmuJPBPJRmcFDsT5d34GTk91efLCx5NAqY6xnLdNpRYKk13aESNcLQuzME8x5ZkbPjNnG5Zj",
  "key32": "5Ln3vw1BYi4qku7yS23ZDGNgZ6iqVEhDKo5oBmUkUT2jLQQfs7ErWWbPeoGCVdjpi1et5YpP9QV8Ko7moCFKcYvD",
  "key33": "45S3HLqLKVyKKopb4i1KS7G1gFkApbGrSNutuar7iB3pca8EZieb6TSGPeA4se1F9NzM4nqQYD6p8tEyWjYjWEtJ",
  "key34": "5KDNYSneLVcjY1tyV3TGT6n3fAD1EtNnkmpkHPD24mstEHvBTiPqRFmDqquWJMRERHBA445qdPg6L3xgXk7wPofi"
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
