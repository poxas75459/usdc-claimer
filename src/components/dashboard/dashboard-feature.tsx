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
    "2LsUMmfB3oyupGXTcozUF5BJN6hPFoM3xEjMBbj7v63W9NSq8CB3rxmd6bN7whCm1t3kurJ19mUhYjHPgzi7PRe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xdjnuUzFcAchh7ynLMeEk5CfgirXgz8C4Eq8whCJtudhfkKw1EcVMgDnk98yV9guqxBRcxhMiNeKQhYsjyG2A6K",
  "key1": "5EvPrRn3X2Yk1thxqzuRfZqoGTbuEZCrFia5nBcRprmdXfThaXfhrMs6t2bkd85KT5hwHcaiZWSdQq9w3YYqS4m5",
  "key2": "3NnGz7yAJHYD1YmB5ZwhaBwzghep3QhVK3gGgMNVoED1nyedbdxffYLx878yKGwZtm9HUUDZmy6VUDqJ7FGXMoN4",
  "key3": "3WK5aj8XPNknjM91RsY65S6AocSKqtGg35gPCEQ56vi8LYm2o8vs5PCYoLYL1NrqntUeoFfrt23epk2UWYW7SGFW",
  "key4": "RZL8ZFdE5WttPf6171eutoZw97Mdiv4YWMEjBYcADRAkGkoCQPEmxdC6AAdnTv19UNSv7cxfKmaGW6SSP56ZSVA",
  "key5": "24DNgdCdq6Hrga2Twcq6N7JiCxvEDiKBjnLJXWCxrxPwRiw29QXiSpunCFypYXooJLGC8Lk1iraexFkxtGnWZSZX",
  "key6": "2r8ckGwUJTVWfqoGW8jic5sty9nTf8KmKo9SN8zi2tQTKhJfTWDNn8NaV3oJKzTU8bFWSfH9RQBB4YfxF1Y8M8No",
  "key7": "3HGi2bYZ5WA8xGD18v5JpAFAPqyvxp1v14P5mywBkvj3Zy8Duko5ZLUQa3YSWhUXZscCpsZYyxA9px8mEiw24x5J",
  "key8": "3KBiWTm4zRRvE4CwT4dyMP4zKdbeGU6NcFRMtRSMeX2bXy5CucLak5RdYBHFe1irRMMNSmEkSXBpa3a1TgMX5bMn",
  "key9": "3mAW9gtT5KKpJhMeumzf1eTJFCzuLSz6WLNee5abnPE7V1XcsYyzFjboL19DVPCYejDKjqYsfqUAiACEeCzesCTN",
  "key10": "5Vq75fsGwGEnjV9Swsn66cMSeg9J8UfrgQaRJSS5T3dLZT1MFuNwgPPjTcqKinxSpj7Ei1hctRDtVs6cd4qVZ4za",
  "key11": "5rEZ776jXuZVbAkvZfZ4iYimgxZFuFkowN2nYoVHgW6wwGqEGYF6uKxvHx1gsu4fWjVf34jSVmLoSvRHZeZURF4q",
  "key12": "58ppjxdAmJJDdCobvp6fJiw7yG49eB2FSw41tkzbSrHzRcYaDhgGx3buNT1QNCdbaPBHW2nVMTesAgbqnoMR7mR9",
  "key13": "BtJ4pVqz6XgnbdviNgPj5S7h4y3omsB9PSZPq9P9XsYRoCP3Jsw8a6FzTX5TARrYUfs3dguLSrHUTUvrR8XVfrR",
  "key14": "56w9o3T4BYeEaz11nrCXg1n42aL6qYrVabPKFspkW34hahE5fdetFyey5QLpyHzEhuo8xRuDirhfUbiZNYqkQ55B",
  "key15": "XH79yxc6DY6zTHyNF6th6H7ws2JHKVEeLBesvNThjJrwbg96pKBbFWpVbm7VPyBVYVuSNvnT5yKvbW7oXym7EpJ",
  "key16": "3ebuzhakpm23n336deS1t9kX7L11Bd957qJNhsP48HwuTvUvqYNhJkdtncofriEUQoTBmpR1AAFd2zstWCP3nuvW",
  "key17": "4Kf2TjRy8Z82i96wGTP45CEhhmSqQYMxMTEdAkHsBmdpvR5UF9Chmuy6Wa4LLcfQH2k4ejnN5iK3HhC7UHZGMMxg",
  "key18": "4zAc5a1gnaDDyBjYz4rDcMdizbjWjntWw6vkjeK5dVWe3MnznF3LZ4cFxdmqx7W28wakZ4SdBPevDkqPS5eLubjy",
  "key19": "LQhJgcEhU36J8RnYvySvUxwNCwtWt96GCuwBZiuKoFyeqX2ZKYeNdHxspcyXWVTEsB57TWvZtasutQPS3Vf2d7k",
  "key20": "z3w8x1vi7sgj9NKTaGD68JYFPLGFjRVA4zXeUwrPds3hdkFzkVGCaDUg7PhX1yqdTrUDDfvXvnGaRiSivMtG6Wx",
  "key21": "65g6AsXQkbTBtB9meaKWK6gZJc83KP9qdqjydZ7dS26oUhpE5w9p33tX1CJQHKGp6WcH7iULJMdUjVFHhwcLmKna",
  "key22": "4EMP1e5oSDRXTijY1UCD53zyg3evihEFNmi1UTECeJheQmnyKsrXn1jwug1HU7yZJQJgzk3a2edYBabiJG1nTBbv",
  "key23": "458hGooZYWJiv4TXqJoD2cKFDURKgNhDnkDKGA36yCjBJUXQovpdTA57rPFpD53SJKaxLYMMZFWXhF9B4DNF41NR",
  "key24": "C3hQCWZWb2Z8hUSPpTTajntx1Vbq2ky1ADAZtwjRH8oSjLy6BCAo5xTjEkBgCr4MGxotSNP5oFmHNWWNTxaqZ9x",
  "key25": "3rxYRsL2d268YnLCGLSpRanfpjTR7eNDFkzaamwBrfUSYbLvZ63EBu5ZX59B624CYx5JacDRUpQGSmtgiEr9Km6K",
  "key26": "5RV28ozowXKQhfR8zSYWuPwjBYmG4qrY55PeLYPsXygMYpK4bvjUtTm6V7qexqNgexLfyEK7Ve3o8pwE1J3D1Ava",
  "key27": "3rn5Zq7PXxGPC9Z1UFbo5oK54s6r92knkCv955QXHf5uT4cd9LJTZ5H2CU89dXp6EvmJnfwbqno6KKvTfffZRjoG",
  "key28": "A6Fq3BjsEQkGxdGijrmDAsfcFNrkeT6YqngTsAq5gtzYnayWdnhKvV2v3XJwjywpN9xK69JF6arWME9JbrsvSwY",
  "key29": "3Jemjvy46RgZsP73nRF3cw1NG6f4qaymzBiTYcswk6ZAsTUMf5i3pci4Ezth8tG67cBF2PbzboiGC5NGVDvZiQ9z",
  "key30": "3rH5ttAvF6SuvoQ2BmJLU1ZbUMXue9hzvseaL831R4aLATbCMMFHdHQQFhYDmsBw5px3G9j4EpsDijwhYuRjsVXS",
  "key31": "4Cg7M3LB3AQJHLsY6y4UfwBE4gf2EBQxaCAfN7RFWzZbDdqbQCYezSEFzEr51RDu9SPVAhf2xT3nGRWpza9Dydjw",
  "key32": "2VoSwYkAS6DPVeGLxQrRBWJ2rthPVhWcRtTdtJ35X6S2ztYDRd4byHR6m9hBryhHdZoV2kT4BuV2xq5SmK4977Ax",
  "key33": "4bx5ts93ZUhshGv8TktcbLAfMT9Ji38uy5pB4mhVGaZHqBFA82KgRziE4m5BBSDoJ1ovU9MKMY3xgWMzVXM6rgqK",
  "key34": "m5uTBQDAR8JLYRg55ZBsUcR89bqGeyNyy7YxjEwwK3rDqw5f9yJXK81DNnJAT3tAySfBRXGF9knZGv7PQaPz6pB",
  "key35": "66pY8Xt32sQbBUUdKjxdmNdWJnQJHwwdL6yLrbcumgs3NBoExBfJ7v2funKeEnd8uWMn7Esw7YWS6b6JErZgfz7L",
  "key36": "GL4KuLtDn2VsfSqFt2NcZtYKp28kV1m8hrVZDQmmsNLqA9eBgtXDj3WhYn7pk1sJ3Js31mMWaPQTU2h3WbSYuSH",
  "key37": "VJsVF8yDyQr6U96jidLCpsGVahhtWiTzpEkjLg9wBAKz9gkQwTwDtAskRZFvMacSJ3s3hKLrcRTiF1zw94hrvqZ",
  "key38": "3MpQ6oW56tt2JuQmfvwqGoNwNATySBtjQghQtvpaRjku8FX3Sd16UTdZGSgG2t8g98GDSji71hsTutk6FxJkvJHw",
  "key39": "3XqbsHde3APXpxezqMeKJA8vBqXThnrN44RKxzHAEfBoJ8XofFNfyfFQhD1gxQFWwLfVWE9CVLqMWpHYeDAdFYxL",
  "key40": "3NVtww2LeVVqmndzZypCnEv4VG1zNDf13czJdANeMn8dHqfWS4oF46dTj8jNGhbP3NYTGpZCDZzXt6Hni62ADeoW"
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
