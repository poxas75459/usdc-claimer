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
    "3wn8jpoD9DJunYbncsJJ92CuUL2VZQ9vW6S7S4bYvy9MZ6Uy2SDkCM9yaUGLAZLJ8X3yaQqwgySSuGaWoiNQMcHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pU5EMEJz9zYzrsRNzffouqGZoSrojwfiwhAT1B85oHNnebEhSJNDbcFXxwj9EXdSLfhdSYVv3X2mMjg2XPgndtP",
  "key1": "3u2T3jkZg2YzVq9tp3idvtZ8pmg5ZCf9xC3aEonoYo9tn5hm1U4TBLTyLL8ZN4w9GqDSbHJQsM7k6T9HRzcsam2o",
  "key2": "4XnHkXXRKRueUveMmqXCmNYVgTeCSgfhvdysgmyZ9PjfutMVdRH6N82j3126oZpqd9EbUVhp8ksNuV73D7JnypM5",
  "key3": "2WoHY5kgNeKUx3Z9mGoWMHiKZsysBT3v85mpbX9J4BrVDLQtbB25AJoWGRWiErMhosrrCAG4QFJ9josLskzCpBEq",
  "key4": "9qR4rHQM6ech5FZYhoJ4DptJuQNmS28uc1J7hHraGbkh8hb7bE5ssWS6F5ufiCpdCPsTbea4wuBdytDfFTWku2Q",
  "key5": "2iCFtYKUY2Y6Qv1SvPSJt14TaeAJy4GBbaURxbyVH3Tp2hK3cV26Rn1bHvpmK3jxQnuycnzPC94fAGD5cAfmAGp3",
  "key6": "5GJrbBj5rVUebXG9hUQNsTKEESFrmbdU1Sma8pv4BthwL7tCEpkMKoYbMnPJ3PbPCCjsfPLz2oVdikAdSZvsSRFN",
  "key7": "Xr9Z7yH43unysfs6zdrynSz7ZLbZgTAhoXMfLTEgDJgMJRWGx36Qz3zKtfWtxP49qGQF544fF458UiMqGpmNPVR",
  "key8": "2GsY9KEgisishNPtwsvW7XTZj2nLwztJLJGmQAcUfjt3BSYPkWYZNSfssHYaeJDoLVDBr7wRPi7e6e5Us9BYrg7c",
  "key9": "2xV4Sz8WVPNDFhCpk6YrYDvptLJAMmt65JNiog6L14ZZM8B663w1LPWoCiiT3AApf7sSXDQrD6JvrANoxFaTPK6C",
  "key10": "hMvMA98BHfB2KkdDSdZ6hQZQKgCpCQ6BsZXMQVwiiYFYAZZNuMqPrVHTnYy6Fyd1igDXVp93XziF9nZWdUVx4DC",
  "key11": "dB18KGr6gm2hDiAVmmMFjkntdu13M9Gcp7ZpUu2zH8W9KeLRFMfp2qRjm8a7EW8pPPrT7WUMjptYkvDaoXrowyf",
  "key12": "2CBtqtNFHg7og3kF97Rhr34wvLd4CVosN4N9Dof4KLNbvVa7r1szRneVEnSbK8PVumL4EcHYNEUye31aRga89b6C",
  "key13": "nQJmAs6r4GwXeBFnViSvMHCvvd3LH9A59yWVZijGjLLGKEQgSSiEfBW1QYjnJZv72dZSya1jcSexZ6ZS7T8VqNX",
  "key14": "HgkAGbF5mrJeXmoEVJMRhPUzQH3fZcvHWcT8gR9pq6JJv4YP9oVRhoVzWh55eDqX3BbYnDdT4oeH9JxYvAnWCUN",
  "key15": "juSSWqM6GLkVqrSHoCKxhUkfk28TKajJYFDsqaoqDzFERoCgLeH98RmDuYrKKPSGmmqU5ZiukaeN6LqehFgLd3F",
  "key16": "3oBsMR8iyJyFcveKPztVkStNBYeR8BkevHZVjkcMKfjdxbxez2Ff5zjx2fZZqh7jRnA7WXk9WQXvqPhczcUniBui",
  "key17": "4iP88VH6UiLwCXK4su4kS8aRpKkw2TaMFyFTDxNXsA2Fvq2YZh9M521iwqhnKFb2sprNjVyCfQxion1b3Y1uCoZ",
  "key18": "3RUTALaL5W4t7uL8ga3EK61vR3zzJuSciUD3rJFGWFWA6AM8jXdA9FZuaPh7jbKLMoDBhfkRCzE7v5Pj7k7DLgeS",
  "key19": "4RDbx8wbP899kpxo8eFddD8AWQ1rj3yiPmDTMjNZfFstPbV1wbxBj9TUR7eaFrnk17Pik6SzmuNWxwLosuqr1wFi",
  "key20": "4b7AdgeGBcXJzVEki9offD5QXQj5vdCV74LDkEGiyPsqF8rqr2Qsc6NWfLHgdP72SU6C2Sjo4C6rFCjk9pJ94dQp",
  "key21": "3w9Cx3vXytyxXehKqdi1BbwmKgDCKmKMGwkEwiDjGkU4fY76wFqTGzy7jqp7TFeaSVnTn3Ty8oK2aMu4C5zv3qzZ",
  "key22": "3tDQU6VqnDmSZR7oaAHNR4VfMSsftUniZEWdx2En4ghEsGAbTHQNYQ8b9zuYfFroZpeNCfsLc4gAWe7kqr1bFrov",
  "key23": "3ZRE5SLhgPS5bfrfaSgPhAhPwLc9Fe4siepdFeWSS5WmkeiWXV6qN8FbQ6UjCpYTsq2t2NRE6eC5ocUoZfDV9fW",
  "key24": "2sjMjY2VacAcjLFwMqCsonRRWMFHcn9xUwmxasF4c1MVvGVQKd9RkmZijbahtnMJiFio3YE2pGmN3MoN8LR7ZpKk",
  "key25": "2zp8DmptCgnotXyY4AuTMfdAKD6iWPxLBSxMYJknWzzVVPmvzGBjywvrQBmJr2qU6tiXz56rkUth2EdXHUu4ZSf5",
  "key26": "4GnSXW7GYAZ21JeVXk67ttKGjdDCW51cUbyJyeysQtZV5HcYgkYMadSqMgcscK4Vb17d55xvcbJpJdz1MwAetuk9",
  "key27": "5h88k3R51suLuQdhPvtdn2DowSzTKRS1RwdQ9uwGDuLxdVwQrycJfvw5Ax3dk73x5Qmy5ShapqyQsn3a54w9s9n7",
  "key28": "5xq6cdECcJYMXoSx5HTUuMqtm92MxvXtfjr5toFxxDAFEQKry1qbVyeXcPCvRu1F3R6yMDDb2h1e18CHNNcAMkVV",
  "key29": "3sgmqZT1GrYfAU9WNDaXRkp3C7vZziUdVQgomm95VtEiDQPXgZ2p3EMVMeUn4ouWhzHPtPJBooAviXLuHUpURrN3",
  "key30": "3Ky9z965sya7doXJg5XeSaKHM9xEqgyUQURNjhSywNa6KzZrT1ujuyZ3JEYHZVGxSqzMZASCaXTE7QUQ1Mm7tCWE",
  "key31": "8G83yGXriU2jbduD2W4GoSaAvF7dsu72c4d6Uxu3drue477DNaeBimgkJ4QKwkKY6sC82C4i1MudSuW9CGNQZrG"
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
