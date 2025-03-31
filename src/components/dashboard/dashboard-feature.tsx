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
    "5jpydbyUDpHUDCH6kjeLv6yrUwWqrVWApbbeT5rLspSLjxHKFRhMEba4QMLiGgp1kZyAYVCQrP9UJEs1LQ37ndQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21KTgfrrfR32mE3XF2d5HDX95qhNJ3GAtWq8vLuxZSwNWiYFsEdrErbZ45oZUYxZVioamJqQXjCyv1sskjzJ7JwE",
  "key1": "2nt9BdR4g9exSKPDzpPhkKHip2HvLnuuu6D7jPqNKpQcrfVBBkgn5dC4Ni42PHUFZL6hDzuXht2oarDEVTzmdxru",
  "key2": "2HkUVg9bSJBN12sDidZnWp81fwrC8VAKbxyFadyxt58ZE4NpkShscgehx98uerJ33rwYNwh93kF2VN9dS3diwGvJ",
  "key3": "5AQKdax49ST8bTrrXeHUMxPZoME5yvxmUh7DhrwUXZcYDzaRL41p9DEV1gidmgkHQaAf5NeiBvV4SC9VfqaCKMsQ",
  "key4": "w1ZPssjmbvHa7jcdiXkvKdAaeLTEydSKAH8YQoDp227xBh2r7tef4hCFDejW7EL5s6zaw21T41w49UkMXNq4qZz",
  "key5": "Bc7wVP5LU52iwHJ36yTVCPTn2HjTEzv6uSNuJGq15XQT4E9QxDb2BBjgwfj6xZKGFx2Xgy9aQg5WnAfdAtVaVyp",
  "key6": "4eZ6aBYSHMZcCZdrEwhV8tJrJAuS5rGmVpskSHNF23eq2mu1jyQG797y3iaak6v9xeuwGEEY2qq2pQecGm7zpZua",
  "key7": "37a2Yqu8168YPRVUZesaK6tjio4ZD34ozmnyEuJFHhA99V4vCCkTmDzE7BQFWgiLY7ugJYaUaqAhGg7LaHikKVZE",
  "key8": "3QvK3wBRwz95z4s6PNf5dHn7CbimeAZBQxRXnYi4Qu1fNEnwhQ2mGjzTTJmCKPFGYj7TB7XSFdtFUd6FanoMPPur",
  "key9": "3LrvreSQLQMbNmmjN1Re2txeafezrxVWgKvysGq7r92KfpxZ94cf1SNwJZ1Hye4Gvvqiz7Jtm8GEXBHaPv1B76Ti",
  "key10": "2x1fLDKKVUbErmr2cTrGgwYiobh86B6WXWMYeu5S2mm284zoGVCGsdcFSv9rr2Jjo8gsJgaVB8Byi8iokUin5wuu",
  "key11": "2Pqd5Czmcy2xV4A1Aw2ncBJegbKvrTtAAXu8raQUbJeDJpVZUuTajdTMPjgzCYNbHSdRiYVmFKqGAYz8XB2f3ZL6",
  "key12": "5KADrP2X4Vadd6beYnVAFfga6f2TTvNvwp3vL8ZtxmKNp7xdiM2HebLT1UAn64siPJSQdR5KCmkvopyLD6vFxWfi",
  "key13": "7nG535UbEotdkRpbtb2fKMeafvXR7nx6YyATFdfYspVsMq7TB5kMkQahX8xKYA2AvLAfzCtJyCT3tRwHHZABRAS",
  "key14": "5ZQBiaFBKrScmCPwQz4rSvUbFafWkrzgZBkFNY3ZM7BhAMTPw3u9k9BRpcjj82mWDSsEJjKfo46L9RNnM5kY96Ux",
  "key15": "5MrRgrfaJ1xZVKYqQYFiGCLsEnppNoUa3DtcvzcQFt8WbEqZgg42y76tESaxMwE4wLm6NR1DypAFUgrF8vxrwRZF",
  "key16": "49sy7wX3gcBVeWSKYuQQ7nXG2omStq2XMg83CZqrJAcVVQsmycjoc2B9gsDkgx9NZb2xnDr9NpBLFqVy3EfUVvUH",
  "key17": "4hpsDCAHbUcvK9Y3U5vvdCRkcyGWXWPGDqp4GX1zP857SoZT1d2mtXd8vEmZxGEvYfh4AKwPSzd2dr1aQZf7b5tz",
  "key18": "h3LThfciyzDdDspihuxSCy71Sd9xiTg6GJkTxnMpfVRnunDUFRWhVF3LQyqbnR6gV8J5RVzS9M6irNB5bhF6zzA",
  "key19": "4C3icuhFaz9nbaD5AbWMkSXJJ1kGSmSzLWvXQuHrme2dZ8KWEgdPKBiitU8AyKXFcak3D26oVgeBTSscMQ8NWotm",
  "key20": "5sVKUv7DMFSTYLia26GTFpy9WFW2rTNrtNMosj3XYPqd3HA4i7yU1X2muKfqLBxwqVs2F2t3nLZo8Z9uzuufLFWd",
  "key21": "2JRdRkQD7vFWVLQAJpgqZrRjWATKu4VsJuSFnMnB9VT3QoSoRpp3Xofp2Xm3sY341SYJuzSYRb9Zsq9JuiCk99W6",
  "key22": "4vQBa8jRR56n6ebbPpzHrmfaRaKaDBPive4VPecmsM7t6CvZjMfKwp6T7icMKrnb5x5VZbgz8M6aogJDNQJaiSEM",
  "key23": "2gvKhiPDHZcstSmH5EQM8jyUrMBsBgPkE4Kg5B8KshEwMHWCyviVc3F3hAQBAS9YfaMQkc5q8TrYMWk5kFucPCkB",
  "key24": "32VpWtnLsz6AMS3LwKdhUWLayrGFKdBFpLpbazHrSTsQ5CuBKoNEziTBWj9Y1iiuAg2JqxmYp9oSaj7HLjKYptNA",
  "key25": "vSLsMMjf8xhU5P4zqdjDQp4pUN7xN4HP642yNQW6oJQwX7Ldff9Xr1MKQmvg1C1J32xnt6kEaKcVkY9xBKYyCaY",
  "key26": "48zhVEDwvzJPxnPcXwZDetu3nEpNoF3tJGnFssmtNHnEYtkmPeXLhaADUd7EqTeSbV9ESxjinodT7LZe4tsiBe7Q",
  "key27": "SNbETga7T4c8wCcLWpwc5R3wc49vPMCQ54Ytz6ssKis1fN1isU8XSr6U2bEgJAWhyHsCfcjWfaDM3BM1m24YLsH",
  "key28": "ViHFmhdm4cfeCGNsXMV8oj6qj2mktPzmH9UMfEfugQeBCf8DWUibL7evmmMJWzeJL7e9cakRse9hUZDhsKjWySF",
  "key29": "42snzg6PCQC1DNExE3roGYdeCKTs7JYL5nuJy4j6i5qRVRWyuUXnQvxJniuMC7Hd8MEuZ9KDJTQJdmX7foRioD1Y",
  "key30": "cXGU6rzbgKADGKC7Tsu6hfyojcoGuPjeV51TAAh7YLSwu8wxzfGwrPxzCp4grU2kk7WTyQURbk9DHp9PZ1EB8Lf",
  "key31": "4o3TBVbp1PHS7cd5HSFn4o3KQGzg5a6ww7jdJ1jwerHjZxPdW22b3QkUhRyP2crJ4fUg2hp7xiKrjGKJzvG8fpd3",
  "key32": "3XnngyWXcNMkri2Zbo9yqCZXX9CcKGkv2UKFfs38EtN6NMRZCoXBhsCtEVpJXZtLpDfjenheZBkkWjJry9cFawHk",
  "key33": "oHhu2aNtM5NpfkPNEm5poeewptxbRtKdXkWkvaN2kLEnCDdsgtvN7ow5oNvFMj7ejzyxkN74rnueEWSRupQqdwB",
  "key34": "4XaEWA1Ej6Jn4zSMy7SXFkLyMxQ1E5LUDvRiMZsAf5KPrY8QPjF569hLw9GhcD9Bv3e9MFokX4WyhwSXvD4QLC91",
  "key35": "4C8setRyWo6E5QE5bERdrJ29ZMmrzJ82XgUX5pAXSN5tWaVkanjmrgSKgE1MHRm2VLZVF9zCKyTbMDh7LMc9227U",
  "key36": "2Q5q2wshw2FPPoWyV9TZZDWJjAQmfK6tGqtzfCiNDzqEJRm1ZdJFcnjWnv7EeYMb13YMfa3Wqqiiv7nArYPf7h5X"
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
