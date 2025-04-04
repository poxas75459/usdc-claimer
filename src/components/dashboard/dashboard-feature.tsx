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
    "PJVrLtcdsq3AMKUQRKeHqc61KdFC6gURdMUXvcRFdsFXw5k14oF1UnJEREUxbmjixH3XyRa4knd2QJQaihcix7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3etZQc3uyNT8fxmovnoUAfBYrg1UFrRGXeD2R7AKAHaKmSv87dUgSwRRsEbiHyKDQveG7YGfY9LvcjZTN6YetmMB",
  "key1": "2ic382VqQVxqkdMuxwhfi3xX2u4zmGDKyhoqunhpZj1h8o4HU1UVcthG6M2GKQg6NvNk3DAtrbebLXdUA1jo3aYv",
  "key2": "wsvb1JfsAY6UXUkZ1bAdGqNzvV1Z8yWADnrnF1E63MckQMeY2aCyyUudcfvEWorbUqhmEnCAjqyogkotM99ijbp",
  "key3": "VH9VsHCumnFJ5oNo4ovgsBjjakaFdH5ouvjYs98MQuNhZzmYEgNbrGMxb1QqZWzC74aMGgGTdsuKzNbdCVrBBkG",
  "key4": "fNod9poG9WTZHitwzrJqwj6BDp2B2rZd7Csxxc2NCUnD6MMXizbCyd4u9bensaZn2Uey6Z1soU1xdsCcnunQj9c",
  "key5": "4auxLyHHFuNfWVDTnQaGDAs222mLPJuAXZ2nSowwZZPWqZfUiAkK9wWxp3B24hawczdL9taB1LUqnQFLMVhipNj9",
  "key6": "5ZBN2ngzBGRYtqnguxGuC4bxDcoEji1Fb3dGg2ueJaQRpscpsxH1Zwiw4t7NV8nazQApKM8Bw9cMgFjK1WwrJBdC",
  "key7": "2WQxCXDEFjRAD6GbQzxkzxvuwoa2gCqR4kmP3yv25VNChSWYpy8rzBgAfUopDoNyFWeGTTB6Jr6rVKBDDDJ7huyr",
  "key8": "2eF3U8i1MLnQHECTjPjEB1vvoQdfSTMqhzJFMEVJrSSZCALkGnVGi7eCkg3PHgE6FkwvuRL4e6Gg4BP1GnhJ2DL1",
  "key9": "4c8o9azA9RwmkdE7zbDfZX41KT9b5zpKyMxApJgHdwQe5HN8JuQVF4ayZbqJE3AHetTm6apwHZGJr9iZ5ZiinDtn",
  "key10": "4eTW85vhRvwhcTk1pPie5YufcNJ1thtyGT4rANYHdi4bNJcuWuzgyHhy8zT9Dxi9rKQscpuWXewkce2BGJYXChn2",
  "key11": "jJmuzHHTgrX2bPZ3fvwLFWoYGm5JVkZ9WPdt71bFXe57SVKG1zQboFARp8V78U1NzrP7TpoqEXzJ6dZ2fyhFSC4",
  "key12": "3ys4wtHkZXGaEhefEZXEoxYqMTS62hptDFNZxCvmv588AZXdFsZHB1zYp2b4Pv4h2rdULS5Tz79x1d3Dp74X6AES",
  "key13": "89yEkvTZHG6aEfyKZTxV4pwDVT7EqjEcrQvQCjjzkz7wQZnKXdw2jCHoyv86RetQBak4XAdKYSc48r7heMLJnHm",
  "key14": "4xBmwxiFyk4tPFdrZBd477WcTWUe8AsexHXvPk4wVHrnrgDsFKxBWpsSgxhMC7f91JREXcUeUrscwtC18CLvnjs",
  "key15": "63rDzZn2iasbs7ysaGFndMmzpJ16N93RyBzcxEpDQYM94PXmDa1E53mq3Xc462eXbrYszzi3HcmY9y363JWzfGN1",
  "key16": "8THubi1NZmrxTQYo7GXQdnJcHdFR77fd8Kw2fPYHmmTwmVkxGVdh4T13Kn5ucgdHYkLH2nH52Az1neF9ZKnXu6j",
  "key17": "43J5dC2uZ47fMoK66WZMahKsVnjKDEzxksBazBcHNs9jSv4SvCSfgGk6byQAPwh9e8nvgKwcsPhV3wQjQjutouET",
  "key18": "54q1jHyhhPLEDJmvAYyRFFbLYXHekYvcxWuoDVrERyHsjAHUY54cfP6zHupjSjXR4oVvtXfyEBBZN6qUrPeVyr1q",
  "key19": "5YWVCmTMXyRoFvpYa9ARUH1WC6ZZC2tELtAQmk8tZm8cV8XLE8c6THjuB4zJqcdvZZ1mNhencMXHLneRFKrZa5CX",
  "key20": "vLBCfQseujvHX8fhkXfYxgo4geBpKu3jbsdts6dFxo4XTCWSVinifBkFKpMtyHMtfcTreNZ8ZCH68Qe9hTUnYZN",
  "key21": "61MsYyNwjt26nnDBSFinryWvWWCLAvhVeDHSVcq2eqwR7ASPw797U6au5UgbbiArS5yjD4M6sqi1brpBtyqmDNzs",
  "key22": "3ysnViWnHHoC1nE74xJX4XVeLNAcWZiKMx88odiWYso1SPNdHkoPHqieYB2Par6swcuSAWUG7ETmKZQHQyTiAxRQ",
  "key23": "25LzMxngegNcJDg8PwSHJZvVLsycW6r7j4DQrtCbAigjrtiVCfrjT1sReKBwkk7pSPGDpjENJkbM5dNRSw2aJ16D",
  "key24": "mUbpk9SkDk1nWHYmBZmeSdttHd52nhAEmoRtUCTKtybpFE5ovTC9NVShi1DZgtZHpeJMSEKA8A2GAE9YvrLwzTP",
  "key25": "2YXYfRbAj2bLwBjqEq5J4Q7vxNSfRbT4TB8h9ZSg6KZRYh2xP4Z1KUm7nrjgVEThKxjMzfUSfzRwFZdybhrkULDY",
  "key26": "5FkUEDhAKRyhYSMz7BjqXtT9Nqd9eaKzBVWQJ2L54U56MU66zizn8CCj1oyKDa2H2ZnkhTYFkhSNpXuwPZ6YUkGX",
  "key27": "5xoV5P6xWfH8fy5bEgGcmFbwVNf6Kn2xeLieB7BUSQZVocuXTxcu875f8EEE6yZBmuxhAWEfHxVbLud9VAhZTiNw",
  "key28": "4MqiBEhvJPVjCkLqug9TZjkfsF1DSK9HN18kHGdZWmefQh4TriZF8RkinQSj6pkZ7eLh9vRqqqv1WNCU78UXNZee",
  "key29": "4t61DsiafQ9C2NHeaDtEJBwUoGapAcMuhUYh1h9gN5bbJ4SDSwJ6LhWne2P1vUUrmSSxyc8K6FhBhU2pq1B7EXvw",
  "key30": "L5SGyAgB3jN2FN56PsR5ayYVu8SdUKEhL2nnVU9hnhYjYC6HHBFGtqUedesh6xLQFkxZt2hEtzswvKie5NrXqRy",
  "key31": "56rrdquH5mNe8zC52ToBGBc4hYGYnSZhaM9Q33pUzqzZN4GPe4Uhz1zcUdy8DvpZKDhj4MSVMEk2wq2gfKA1wzys",
  "key32": "4Xvt8xWoESMt8cmvLXJSqif6RJ9rX71s7CpBXAMyHYyU86PUi6B668JSy8rgnarieJkTXaNT3RrEMCo92M7rUgpk",
  "key33": "3AaUJnGoyBUC4wUNVsbb2TEezKSahwyywPfAqpvWoER3Grpv8mhfLSRQ9THibBk7EDX8b1zn16oS8eioEzdc3Jyn",
  "key34": "3drJ8N2efLiqHuVwveNh26xWqD267vp9gtngzGwMewHgGT6EUKwQfMQArwb2d5nZ49tERtFMdsTjKbcjPhgRYtti",
  "key35": "5yJcfDNHqKBpBgcqZcVtgAtgyvTCvj77YCnLgJG2tv6gVAZs2KVUMDjDnRbJ8rnjTqST2E4MwH1cT2KS6GTm8xjm",
  "key36": "2fCQ1BdUVyrWeMDX9QoDYebzsrVwZjMtwqqnov4XnUp2pUxFdwcq7JdFNghQpWMr5ywMGT5CTYFqUwDWjHWibWkk",
  "key37": "437MsdvRNNkcWTdZYjsW7Yazv7zUMuJdE5hHfQETfaCiSCYpw4rGurZmtmZRibqVpvTQmjdMNyzf1iZqUGiNf3Ly",
  "key38": "5ExgdG1vVrf2Zs7sLn6J2rYHeFR7XicFbn9MG75SC6psdYLtefCgkTQAE42Tta4EoxGRgrajyRKn9UFpjuF1f462",
  "key39": "55J8tyV2gKLJ9xDzY4BtsfxoKJLYb8Rk9MAEjJHYzY6oTzbojapagsyQR8a3TrNsRLfcBjpS1QJQUGiPt937yJw4",
  "key40": "5Pc34kAeEkmiMZNWXqFHpYKNFmsvhnNsywRaPBfaCDcmpEWeChgntCu4zh4pLvntRp6JanuzQBN9Ycaq2aNwWwzh",
  "key41": "4fZ4c4NZu2TTkypLdp5QMTPkTLjPNKvMFpK8yxDcoChmidoAAHTpn6Sg8URJtnQdxyewGxPdq8jxwCRxAyEWYNQ9",
  "key42": "9SDKxj1AqCVUGHeuyUeQEs51AKbmmnGBAM7gSFZKU7MjJm1hYPJJ2bAtLLgvXMaHaq4fMfyLw6YcFo1NYGKDgyN",
  "key43": "gcNWer3u3iugiFfuB3xJftJy4QtpVKrtPfyjXqo91VHNSVghr6rj6oM6XeVSQEoSPwEmBHahSb12MqR1Zz6aYnw",
  "key44": "2Rb4joXSCGKTVwdVRAk8xnA7P4EMm3UMY5wo2YbPA3J6qdWLtdK5WruzSrCfQ2yAzMGeWPUTPHbLaqa93vYeVzHv",
  "key45": "2DvLpUbeKcAUL7yXZwGkY1tDuFWZqLiTkdyx37CGfj98S3F275zNgvCWrfvWz7nhPdviNWqe7tbRMYKKVG9zqjq"
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
