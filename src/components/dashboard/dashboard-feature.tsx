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
    "4H5sND8Fr8hrZKDrpQuxcQJ8mbcSTb4xJC8TLHzyit9mnxcGcCsmtxmE6FN1u7k53eNbpZJUgjyeeiyvjKcNk6wb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E9FNdmCM77cfBbFnxBoi7mk732VsBPhyycncCc1CxUjt86s7LPLSf1oHYNWXdbUGe3aidfmfnidin7hoqGNWbsm",
  "key1": "48DWhvD5QteoApSaZdwgTtKsnHNQcbQdz93FL88FDFaVeqcP5GRwRQ7mnLTypxZD3oFHFCea77maGnGWgbhMjj4M",
  "key2": "2dPwp88BQr6AkojPaHVQMz9fQUaPvs2kweNTiDF4nyHFLJRePqVGDE4x6xoPMhHcqsbx1LosZYG376sZEGKAA1HK",
  "key3": "9ivA5W1AjRLhCMnfNgUjK6j7YYPP1CzM9MAoGNY7LWzASfaL66GWr2TUG4UVPUNKuFKMbmsq1GzBL2gYKpCntRp",
  "key4": "NMEmycUctJuyVJuiYbPYAHEv6zfbZyQjJZTacTKRzuQypmhJGfwg8cvAYECoVofFYTZhvFBJp9rwAmKzq4tqzWe",
  "key5": "5MW2kTyCUPZnYHHL5HixXFVGUPWaFjXLxQmtiD4mV1pLWEGAWTqcqWCdPXzUDsBQ7vHQ4TX3U9W2Q4WSa6L6z5XW",
  "key6": "4QZpAHPFeQMBAVzu22MTAj3bQvwUbJjwKHMwqrYzHuai23GdY7DHMVvSQT3JK391fHcvcU7EZZzRSYcwLMdxLSYi",
  "key7": "5rVZHRydc5EMUACxjHcwnUcJvkHBkwV6BuWNmEYRMQLftxFYZ5hDuzXWd2aHDk6NYwje8i4h1WpCgYGSYeTTLzjD",
  "key8": "FH5JoJiKRAX4mcQZ37Z37LzjGtL1TyeAJ9L6nZPe32gZn6WKvn7pdQYhxSahHdd8x5Uh3ny3KsL2rZrZ9MuF7Bt",
  "key9": "3Q1WX7jSbeuN3eukHcC9dnbB3wEAVCRh7QXKQeuv424NX4FUkaud8VUv5FR5Pu2tpKPFEg3nSYiTyrJTR2MbkR9q",
  "key10": "5THCjC6XUXeeNXu1agr28c75tBsM1Mj9C2XYRqmSpqgMG6hiBFFAFCqsGrAWHcKSFs1Q8suN52HBrSeWT4W7gBDp",
  "key11": "3kDEAwMdWAuoRpTxPHmFAAkh8LdG6HiejuAs4z7Hes5gK9gaFNTHYEFqtQxn2oLVGCFZSbPa2c17MkKt53NxPe29",
  "key12": "5ZXTXTMpdAJuSxUNNNEPHAB2HM2Ypi3GVVhDQkmtmLuNaRAyzPswgYJTLNDchxnRbYVBZqRZyxdDqkDihYoKx7Kk",
  "key13": "Ffv89vxgsqEpDGoR9t9xaXnrt9hwD57yoaoUokeF6f7tpUWfGWmzyXrMpBQsKLESEzXKCvuuevhobt4csqDUJUm",
  "key14": "5r7KJdC3eYBPZ6yTrpfHuq9zyEk1cYeWEJ4Tp1BaaJFshCgZHhLELNd82GYiyDVzUK3p4uVJXQhQSMSFZQsAq26B",
  "key15": "4J5TZJbjaAsJuNCu1X4wh3ba37rhRdvhzrB2ZbxyvR7euJv1F37GQSw7vbnE4DEJUPSjTtZbgb2fEtbC7p5KZaci",
  "key16": "47tRX62n72qtpN5aQJL32wsBy8d81Mjp7d8G8cBm14k92joQLaZCoK6tKDgweoEpADgFTuozy6bQ9zhyBpgeLg4N",
  "key17": "4s5KsBmVyHMM8b6MtSEcZ4K9YNSrDsruS4maRQoSRCcsN3wjyMk9LhP9wBRiyj8rxFkF6BkKfSsvrK6faLUW6bJx",
  "key18": "5yHGbCH53Td1vS7Bnmdq99S9zi1T6yHz2LwCZyeRDcfQhxuSvsbdi7TUEb2YrrmGXySDgqXWUiThwhxMZ6Sk3dnd",
  "key19": "7KxrtQxrBEXsyoXeKbnfAomyMqr1rN4aaqJKLbU7Q3JFNUXrP3rgHddeecUjTkQ46GU7QxPPztbCZENEopLrKbK",
  "key20": "5rZVPfPSmcFnajecM2ekvQW6jWeNAWAjnvjWr8cgRnp2haAjfFNgBBvwbKqxZ4oycqDSHGiBF6NKJSeugQ5Zenir",
  "key21": "4XtgAVJ44TjeAX5Ao5iqdhJjAPEowhsYebV17tsTm73WYokCtQdbzHAHgtx2zzWr2QUhDFnC8FaVMpfZ9aZSrfgE",
  "key22": "2vsRqL9oPW3D837CDygVUgdU87kgWJtxWeLLz5CYiCWxWJsQ47L2BQW1hhUBQ6JKp5NoVr4ePzdK6oJUBXWEwieN",
  "key23": "Xrb8mfKJ2AmmQqMTVynDpQHSwpoUMcaim9fdru4Lyz2gD4H5MVtuBnhLdy52awyjLL2Xbw4rVfXnyG8u6vUmJA4",
  "key24": "3beygdzeuAzbh651tB7tqGymVpHGrg2rVkBtmNMCSf3cPhX3nS9A5y5xJU2Sg4gzTwRFJk1rS9xk58Atc6suoJ4x",
  "key25": "4jYNWdaqpUCaZSQ2DabkK7RvZhVZKxoeShvdrvcQPR4JCjBShjoTwKXqvTjfPTYJj2JHJU2ZA74gJzyj8QBT7UPx",
  "key26": "55rV3RoEZs44LUVdNdh4irnE45i6SMXmCXzSh3pMbnoYUMGTNgvhAVSZFXWqtuaXF7zaTT3qTVsjJe7xJDHw25DL",
  "key27": "2s5b1vmrKsUqLFouPBuRNehtgD9Tko91vYsXYg1crEenJ5ao5kkWhC5pzFmLzkDNpQPeHT8Ww14vmLVfB6Cc8Npw",
  "key28": "yL3s7X1a6yXtcqHweJgJSmuMZzX3NVnB4KHwqysG1znxUPzaR1P9XVPMQRbmz5tfh2VLZHo4kU7Lh4obme9UzzV",
  "key29": "45wFWVeavgLhQ6dxh88afR2s5K4Xa2ZeWEZsPDi8MJgrsAmGRqYzGpheMT13wtgCWehCvW1Cff57BL9mdN6SSB9j",
  "key30": "UihHvk4aY4Mci5RNdQJkSArztPWD4Tsx2tCzfRCyrWoD4eWbWE8hYQ2V1sPCRbvvNysCKgKswAVTUCNXhGu7HxW",
  "key31": "2M6Ynrgy32HvLVZzsC8716xWTAvf5z3tHi2EfcVKPTWfsmxRugWGgDAVPKo5k4BpUKWguzJeKjAjWC6czajAzLKM",
  "key32": "UC7XhzVTw4C9nZZZyoHFcg8TvatbE3qz9zNQTQcbdHgZ9tJmU9xVXYFQRamMtURjkqYAJWhMSaEEwW6yj91Vbqd",
  "key33": "8bDdYMUgN6seBuou22bfVruBTqwUVdHEvKq8uD6KUM9rrPEewpnWaoTAR5AmAR17CM57W8h3QLtZzpdRMS9dRcv",
  "key34": "5J71n6wxkevACVkGbtSxmVxZxy8BAbCaz6Z2fi6nq5QJojUQiaG4sP4Z7WvfDf7sUHraG5jeRnd5jM1a2e5NcXPN",
  "key35": "4jDcPbrrnFVZ8NC8XAt1aoac7dLsWZ21xvfPKfjyTZmqTSHKEPgzHN5zRQqejP6TsT4pHkkQU8ZzRE2Shb7u14rV",
  "key36": "42xDrqTXkJaZtoG8q3RCVAABSmZeEVayrDWDxoMsgwCc5om1exXHem5P3yyYziXcVBKs5cNRb4ckGUTxLTdhwSt5",
  "key37": "24UbrnHCGJZtbsVtiZUejtHBNgF2TYptQMC9hsiYGrEcHcoP8GF74Z7yfZxWasPfkaNrWfxogmpMMnWtEBTnVbmj",
  "key38": "3TrGf6U6sGaEx8hWrrS8Eo4ziEi8fCZz9SSSPNkpmZyT3KQjkd1BbX52KFdz25vkMeo14K2VBTgSw1qskmP6RyYi",
  "key39": "AyhqgfkhNXYpbAc3ixUoMdWcWWguTTXqtrJ8SXxz12B1K4GZQ7j7U7G5NJ13ar6N3kDAWXeuhCC1XU8X3bZb2Nf",
  "key40": "3SHtuRGZKZiGWYXk4thcAHWyhT6zRDYao8uUkLXmtuAXgLXpJAHmAdrxNCxCRG1YJSfcZBi6paXFNrrQ79Wnj7YM",
  "key41": "YLsLM8nfxBCSFH7nn78CfayxQC61CjtYsCEAFDPTeDkJAu7ac73erNE5fXpNccPqRjavq79nAR3wQn78qLXES7n",
  "key42": "r35FpCK9nbo2WBzB7rNs6Sj7Nd2mrEFidEg4gmZZE9CMyLSM7W3DmrgcYDK4jJzdLSbmWVJHdCtiQH5zfjkohgf",
  "key43": "4WATS7ezCtDGdAfr9mVcgP3SqpCnoZ4TdJy1W9sm4PuGY8GBtbwCX5BebNsk2Mee58dBGibAUakKG3KWsCmyyqgk",
  "key44": "UfcLpsMwBFKosBZMDKwAB4ypFqBKAezjjwvg4L1GnyZkEg9meozNudGb5AVoUGhNCHu93Pa2fMhXHSi7HXcyT3g"
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
