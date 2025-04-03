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
    "TtNhpfGKWogqVvwRFXHtD6WU633eQi9Ls1tyALPzEt1rEw3GWaQ1G8raeRMwVan6haFvfgrFLc7jdwwvLqaN7mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VqtLwEPGj1RXU7mJufQKmuHLPFMpjC6Jku5UygsqCKMiVQYDpS3x3ovcxiPD6R23SmanNZeCkoFXx5QHtpbjmQ4",
  "key1": "ksV2DYP1pTmuKdeMzxxCQk4RBiExKFy8v8BqxYJ9n5wwb52MjYVFQKKy1AooYGusoATmmb7YsjY4HPtcCLyXZGD",
  "key2": "4Ca3guUPTZQFVFFytJpLubVAxMPrZqGkb5FKDsrqFbJ2hamHTFxpX9prQYx7Ve7V2LnkiwQ3Xi9CUt64JwmSjMPZ",
  "key3": "45HmiTUCvcJ4rEUpZHFXQC1r7PSi5k3xZKwkkchrLj6MTFH6BKJrzeZy8W8p1TVyURiWeJ6nCKx9AWCjpeuTAefo",
  "key4": "5sT9WxQsgDBdNk18BjWXVFwPrpPZHD3t5rnXUjqzpkA5QMauN8NBsUF78LT2t9QQkdSoRNdFaoPUL4kM5sn5rFkQ",
  "key5": "eEBiKx8Q66D1ZRnicALAiDM5eLZGT4xHfbsJUD7QyBBodDkABfsr7eQV5eBQyoDeSVj4WKLZgvgsvs1fifyA6fM",
  "key6": "4Hn8Lp7Vh2DodWsfDfp25u2xqtA3i3VHzxfx5rmQKvVbN8i2Z5ituxV54qzxdkWCG3atykJ9yGesizSpDfDQwmAd",
  "key7": "MyeFvzxNofrCAttNs8XNxLA4Fxd4cGfvwGgYyDexvMiB6Yxsk166rkbNZgEPSiwztNc8Qv6fo9ST9aActB4AV7g",
  "key8": "SnadyGH2xASBiatwY97WQkngkaF81aEHZGwrhCMEmxgx66tzB9WEFg9UNzQYgrwCnsg8dsa5oFv1hn9rsvbSD9e",
  "key9": "3uFJ1Gwb9s7A5HUfaRKR4DJR2q13AgjzFJwRKbGM8LNr9hyQZo3BVnuUzhqgCV6eVugdBKc3cDQLuWWsCXeE9oa5",
  "key10": "4LqFDBt2KmP9LG1hdxk5K1x6DDA1yvcg9FafAEnrKuMxUihAFhVB9jnMzAq56NTDCSLuHfNd2w6CqcPscdJ3GGdP",
  "key11": "4XTzYzkXWedkF39gAtzZ6Sd3p8X7TyeeCaLLz39xQ4R55WjjCXmXC7Vg913cM2j4PxS95oQnWbSHSsvWu39Pu4aU",
  "key12": "3zKoGd1WNMaprv6tRnPqG9iD6fX5qQQvSwxVuFsGX46qHZ92cnwgztF2YrV6uDGx9Q7Q6XcEJ2Y5khmZ24qSjzb6",
  "key13": "36p7NC5cmzRVgvcGUDxoyzQ3a13x4xvNCMoB9LH2TTjZbDn8H1X2nK1Wb4n5Ac8VVpJQchkcDRzbCa8hXHMQ2zFR",
  "key14": "8hRG6EiK7FqQMp27XVgcWuVAJxziTqvWi7zXT7hQS26EjEPH1gPLJcVnpDUtRrNR6GNtZ5EyP8r2eFX8MiQrNYu",
  "key15": "cPPkGnA2W2ZYoKLZcQFwixUx1qtiPqHECMSXyKx8YZg26RgPALx1ykTP3nhq7g8xhyaGJgbJXhK6nmb8GNW77JC",
  "key16": "39tsZP8xkYUze5G17dcUarpqv4TpYnGtS4AH5iz4mVBGrfFj98wojRhK7SDcusakqL1i6MimovkUi5fbkDmX91gY",
  "key17": "62SUJ6No3Fe4LUHed5HYBGBiKNX8krxADnihftpD5SobTLPKMa1wsm5SXsGd8m8Z7vF3X44M9DHaT3kX4NALKcML",
  "key18": "4oSCPjY27hMFDvmXnFGdjC4LfWc4e4zQ6Jf1WjQY2B4DANvLwtLLvJkrDhRzw4QDpiHbhjT5rZnvtSVUMye4sk86",
  "key19": "2TssSf48xpHuQHkw22ehzB43oY2DmsHCC6AihpjoGhTJEWnH8GrcJBbFGqYvDrp83nZj7qLbtbGkTEfpjKdf5vH3",
  "key20": "5jNT3o2cDUznG5L6n7aL8s3E4CsojTCfYQmagR6fwuAZbagRASLqWmiYZhvEAnoFu3VhYXNQFuo5KAQWqZiQvrMk",
  "key21": "fvtURED6HwHBmwuoyCSyW7r3xTtV83t1J2s3wQ4ut8skH241jpVyqdBt5XudQYaVZpTESDRM6BqoQ7R6uvVBDKT",
  "key22": "4q4awKoWVz2rQqpqbV5BM4c8wxvQqpkT61Ft3NTJySnK1LGjwxi9ZUcKkRLaJEYJyE9c6fu5K6bHRzi28xkj42Qx",
  "key23": "647MQBcbwGt4Q1kmEVCHw4U8PmoS6Yq4Axedzt34KJM5aLmTNutW7e6kF2hQkmh9dCnfRuyAi5nPc1LhtjsgUGMi",
  "key24": "FGexWzCvpqNYQbGM4BipoHm56o8NVU5YKgCbsuoNNLWgKsJPP1r1yFtD4aFnBr12yrsWoTeWtP2h6d9tCVn1uVp",
  "key25": "593H5ya22Vt82cznhx5kQTqVmVbxCFBwMuT6X9BaLHev1GAeLwBDzgih5DuJsLu1nbUNA7H4YiLTQmh2UKwqkaB3",
  "key26": "2KoareR8pUnc2BfTJEVisY9w3FiTgr5dz8nrXEYBcMpc9aatbLF3fLMAdKnyC48MEPemoRrCMxTPvgUy3jqSF8F8",
  "key27": "4j8KtM88jYkHbnZvUyR6wgk8a1FjHFfFCKyNJfBtbdZFpSDciRL7BDks4Ted8rYLrZ1qEMxtTQ144qjK6c6X997d",
  "key28": "fp98JD5hUeG2QuBzmZ9SxWfBze7PUu38SdSas8hg1nKVuRTqUDmmsYhfD73pw3pjGM3ebB5HvbDkwEXSqLivi7k",
  "key29": "R3nxdtPYyeJdjVrxGzK5q3zGzhj9srrqJfhVYp7LCrpawAb3FmwcwUzbBihAG6c1SCcWJmoQAr6VsZuCZivFJjg",
  "key30": "3Jta8t9wCg4EDAvzp1UL65RnCCKmKvJRZtcQwVQ59xpjp12Gnvov1Cfv2hMXtgR6ZxWsGWwqQGYehbPdx3PAr9Wx",
  "key31": "3m1c4dtB7FVy1pkScpgRpW1qd5x4uqiwaG66Ajx961Caik1Lh5Swz3URoisQaxDdr43yAtupbHiZQmT9AKq9WWqm",
  "key32": "4VVgn9KAivdSffMwi2mF8XCzA37GBYzdLpuMu6e9B7tGENqhFvDTP5HySejDfzZASBSL215dYD72wBG4ZzrRvc5H",
  "key33": "U3XM4xfzKzYuuu4zACKBZZCX3dKyrLyYMBnZpYdm1AnHEF9692cse2nrjCd6csWfAgR7E2mpHr27cvVcjsBrSt3",
  "key34": "2KRpj6fEU8tsPpxFmhjGZaVkoyLtruScyE1amBMMYNSPk6fMzRdTJy2pyGBKBDntmKAgryjzUTTepRYzm1yHuLBr"
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
