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
    "3LbBcXZtFkciAEFjqea13ckKEhQq9PXcPV7KkCLpNBRcnVAPtPhTofn1xecxXM3qkHkYPNMpu8Zfk9aCQj2jWa1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X9S5DXGVkBLaL5Wfh3dxSqeE75GQGMbCCTuTLzpQEMNhDHyLDQf2k2tayDx5TiQwrjneJv8PwEjKZfm3rZwzneR",
  "key1": "RDPmbtDfQ5tWb6ykVq3UQfpGwF5cMcNToKoSkreis9grR4KHYWeMLGkEEQmmeurJcwFoGnakUFYcicEWRPb5Sbs",
  "key2": "2TZLNpzCGwvY4ZWARxVphd1UNHSgWMs2t5MkvHe7xUG4Du7QbUjmgMKR7FeTL1PqddJPfLUHJjdGe9iN5dPHFR26",
  "key3": "2GA4STijHrA5FwVWM85pf933mT3z1JGSJemJzM78JzNzdog4Ynaf9usagYcN4wMoSe3KMsRyuUCMcfNjjZXGWeFo",
  "key4": "5HP5teSy5zrtABAdrKELAMj7Y8sRp2KYTrSpCFg9gRrY7DareqTVSUu5XCkhYTVzNeSDCusX1x8joNLm4Q3Gzkuy",
  "key5": "A85d2ncxHVsf3X4UN4ReEMeffYhxgezMWfjeAtPgSi89XWoj5XM5MiH42LLVFASQW2P8wYTVzhNx7EAyYsVtXdA",
  "key6": "3mgccH8xA3nvXYX5sp8dQxHyFF837w8zGpk8UiBC2wdxjM6b4kEkaV2GdNhunSsGownpDuVUejwCnxJVdvxkS3DE",
  "key7": "wXf45HPQkFNjfxBzZbndvKPjwLDJSEqw1w8Nz18PbWJTiFgCiivqy5CNnNVCQ2AeFKZDQD8PKNv1Pf9Ndtaa3Gf",
  "key8": "3mEiChtWqdR2M6aCKALPsUoW9jF9dGahppNd5yPuQpohe6m2EvLwwFihvaFgodAoS8fch6KHKhWmG38xPGkocUk",
  "key9": "wHXryPWFRJhD4q3tNyRUC9Ze65GJA59YiBj46pJJ1EdRqvbzh2henX1CBTTpBi6NJMAMJ6CTokE5XDeUscodkrW",
  "key10": "jcNVFfjq59vKpbiD7EouJ6NG6KoNExMFJ38xxkYb16NH47sZy7km166uLKN7oVBqEh7eR175Fc9FUAUkGV6PmRi",
  "key11": "2vJXRNMVhcFV6NMaZADciPQFrvyeJZT2F9cD8nxh4amKBGfWLrKt9EPn2RsxQmHrjyUqeviMiFczRRLiMqYpR1ge",
  "key12": "2inevw6bex6Nh3cMKTiesn2EYiHA63BSZtJ9CjyikUooMhh4HCUD2SCuZpjYesHUri4Dr71dMKa1uuLBRy9z98s8",
  "key13": "oHN9aSp1CMdY1BCijiTqhqUnY53fWE748EFv2z5HBwRaJz67QA3A63LpkhtU2hRm8QTaemoAsNbiJWqeTNFYXk5",
  "key14": "5xe1hgoJ6CgQvX8ZkcKyssHrgAWGk6EmXLAAjf9cv8NRid8bFdHLwkcgssZsvCXKUH3hdf8XCse8b9RkiFd1JEZU",
  "key15": "4JzXRAkgHMFUikyAbg9AeRo3VQmyiAiYNRukFe4GumN6VyCA3budFfvzrpTdWGeuwvsR898sY9bCQo3mgb3pprJf",
  "key16": "Nhhp1jZtsWv4wJNnwG2n1s82WqZAtVyZnVVvxSAwh3WySbUXsQVUxEvcyAuxdu4QDqnEpAnD1mqxFgrP5Qu7f9z",
  "key17": "2u64mkoDNpvbRsgt7ppMMTMdUcvzWEx7QQw5wE2YxEa7BXh4nSMr6bAiXo14Ch27D8UPePsiQnwG19dmBdLCTswz",
  "key18": "6344USMpGFrtZBBhN5RykJvc97yS4ey9W6o58E3FEAabdaZWC58a5v7b62Wt9fiKy8sGqn5kKDyA26p1qzSPYpXv",
  "key19": "2ZJw16zQuQJ9xmNyiFwgih6cMYiSCeHRdELLtxCj4SrxcUcUJKUaH3b6h9XD69ngojoBiweoVxnWZkVr6z891rYM",
  "key20": "4M1gszCdyQAWMVHynGCEbmGG9sGaqmSL5XAhhogHLPkZc62ENyH6nGE4NFPsr6hb8DpBTkykDjWfobi4bVVVbxYE",
  "key21": "3TjDbqumPDb92mfMAojVVR6erCs9RZ8fn18wuXUjGA8c6Xzf1dDESMPRm6MZdBfvSU4CDQgmbgdTkSUd9tn1nrEW",
  "key22": "pqRkbp7keJSEJ2DBFZ4TfRHmH3cYyi8EiV3QJtQXYu7hp6nSCAcLoEiDy9WPe3rkf5QMWPKuzpehcRbcUKvb75d",
  "key23": "4GTKgnrfLeZsUSbgSrAQf7sVfAvAcvgsuC6j2UQKtookQHB2Ug6yyi3ZmMFyP3sLmVTC8gZXEMp45avuuAXFs7xs",
  "key24": "FheNysorjav443WT7r49bLAuMXfDSn4KmHXNXPBw8ge41vnybZLxWwertymmzJiLpLPn4BytT7DoxrhYpHGDRz7",
  "key25": "2mJ5py8PptXVJ9FEpYh8ZtY1sJJWWYarmxw3PLcRsu1UsbkQXkQBkTvZyDgtLeN1vdNViCM9QckQPBeJePecc71i",
  "key26": "5uNmW8Atib6HAB4n2RTqWGmyx5CD2LvWYcNsw1ecWPXMPNuQrJvzNrzhmeutjLcz8pNRSaGCXLerwkHqswGhfxLE",
  "key27": "cibjzqBgPn5SsVuLqwFw4g6LUTguMZrDPMLUTf5uyDJUSVCzKoAbhkEsz61QYBAWvFjzfG1iAgCsWkiNm67wAqq",
  "key28": "3qiMEHZdFRmYxKHqAvoXRQYZjVTf8LYEZLD37TWLb42S496tBEbQmLbNVFqyLLZqmaizWF6vTnYRe7aqzSgK87GD",
  "key29": "4ZaGbMbcDSVEsAybFpLHttwhSTCaACiuWk4GLFzJk2iZHvvEdF4Wv8APETLNYHZCx73Soo4Ktvg8f8kyPiJjqbbM",
  "key30": "2YGLuc6zypeprGttoS1h3qRvnDQBcoQVvqQhLe5LBH5UGNUwSLjvUhoZG9EWyPMG3NtSn4t5rMKE2rgswFvTEjcN",
  "key31": "2RxLtimWX5Q5u4pD6UGygoqsgPoa4YZ6Kgm3vUcWyS729LEbF1akc4R2nGnGdHTqKwoxZWhqoCokzsP3o8Rypg2X",
  "key32": "5ejn677FjPzauHwUZBFSWjW9aQyrkZconTbnP4fUom1gKBJeUSYJNcB3EB9NZRs3vHZdvWgS5qRMN2mZBHNfnJBf",
  "key33": "32WmydrFPkkxJQRPmmyydaFPtAzn9B7bctT6GUnFRYVuVhjoFPsLhKikd5CzjTdCUZLJYxTFcBbmnuxz6zR34pb9",
  "key34": "2YQsgDNRnqk6tAXSHhQHFdmhjqeogCBdjfbYc2bNiWxQJmC6gunQrcbh3vad1iWgyyeeG8iepeXGPQVaXHj9XeU5",
  "key35": "2aU69d4Ny7XwPh3WHaYkdUp9ZgDvAZXtyZVBnhwYbrjRY7wJxdUSWTBZ3hGVnFy1trhwGJ2P4QN8uGhFQEqxN9uS",
  "key36": "2c5UqoHcp2h4wN8KP6iyWBf5uN476AJpAEvxhKjVFV3fHAPkJssWP7XrF35kg3HFWrPBu9PZiq4PaoY8aZu26wmy",
  "key37": "2ZTEeqifAK7PPhSNaYanjx5fEr1C9Uq2CU2LTqvVQr5hyE2ieG8ypumbiSpAEjdhYHBVqU5Qb7tMqEVkQVhF5f9G",
  "key38": "4CyThieanSWoeuN15gLC66bwoboJM2y5eiWg2XZDsMHg6UtV1rWvRue7k6MRwFiXtdisaFChd6nkBfDpJGXBHXEa",
  "key39": "u3acyuzVzYZT2ki3MszTUvfjxuDqYm37yxzF6UWxobWYZNh8X122NLa2NzEAm2ZJT9LMpfYqQN4noe55Ukn95Jj",
  "key40": "5m2VjfSFu8LD7vxSYcEcpyKCF4iFngAypV7aesYuUjaH6kEFqw1S6shdJEprNnqQhHrc9eny4WoZ1a1e8WkzuBQq",
  "key41": "4nTaSK3njRB39LZLLWQHVjNikmC3Qx2baKZsHZ1wgRCfPSpYXHVm4ULT9R1Cd8hFhEa7pdwvSxAgo66qQ36FXD9m",
  "key42": "2o8G5GMvjvzHu24Qxr87G1GwmUjr9dr8xVx69xNnu8v2W9WixWVfJCTkk21ciavMQtvw49vsRD6YykCGY9xaKzGe",
  "key43": "3Gh655moNxEDMXd8jryBV4ugL9JWUBiCguMeaLyiMDZyZAzbUPJQCwSFWMJysMJEgt9Kvq91hDACmX33feGGPt2h",
  "key44": "HHYJayP1fxQkM8uVDrW2z6jtgxtcAF3kk4nAg2nNv7vi1gFZhRj5ikFLujgVS8e5LjBsaVikJq8sAfqrFgk4KaW"
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
