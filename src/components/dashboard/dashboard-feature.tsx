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
    "3ZS1XUnzxJTQHuocUJXdVoZw6TVTxqwscD844fJr7jQC6617irVN1qXvuKFCt7QQoZdJQX1w3REkSp3XXRy9pR7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47NBaoRJENja8TvZMT4NCjLtUX1eSwHzpiigxRfochWeKoXJwaprmfpex833pNB6zEYRbzELGWgftF3bvzfWJ2TH",
  "key1": "59T9EsjZcv9wmJiZ8q8Kdh8ZQAi3jQmMJZmBCRrrnXjUGucj4T6hUqX1ZFjcuq7gQUAX478z5h194KmykEVPEwav",
  "key2": "3D5BQuUgBo221B3DFwjcLf9f48XGxn2QR7fLodhiBWXj51wGGfHJXAoM12umDpG9PQobN19tmidgQqXdv8SgYMR6",
  "key3": "4hyZCHJVw7wu6HwrgZudsXyC6FiZD48uF1zrZC5qQXprxnA1PqDV5p1HZiM3qz87N3xNiv3BCvapSgk26jUt9keh",
  "key4": "2Q7ptHq4tpauGrraMYXE71JJiRRGZs1WQDx2VniCp8LnmNSiwniqWRvBZDK2eiBezStgvHiHowhkP82PFTU5JFvA",
  "key5": "QDx3RwQtoKeRG6jkuxnjcury9JcNm33HQWCJkgw7uJjrYti7oSKJPmfvnWvaYj3scT1Q1j9ND57wDBFeHPjNmfC",
  "key6": "4dXNq9vrxwBJ9soHf1HWLdy5iT4XEfLv3f1kqXMexYkj3vrMhxY8st8jy9ogiFGibdMU7ZJSve37CPfFhTCnwB5o",
  "key7": "fa3FDkAyKLMRHK3QZBjUW3ARphQaVL8VDTR33sESvEQTNC2hbm6aKpNFAw2P2ChqvrSYDjbwz9cBPbaLoDrg35j",
  "key8": "2FmFKYXBpaX7xkK8q4RzFJWuTfVLBwVRA7n1CPJh3eiKJCWRDPBw8E1pgsCwifoCQMv2vTrXX9fdxdcVN1oxSVL5",
  "key9": "2SsHPCe7STjWEdYNzqeYGrNbqPFSKd5anhs7cRLwpxTy8jnc66DSArccraxh7ocAw7npQ3JpasLKA3njrkjy1h7t",
  "key10": "5umKZwodrf3M56wNk59ybcjGbZDY5N67yDZFw8mCc5xJ4LyhjsH4dhmfZvvhESCozG2ejHADTgbHu8CNzntCjAKV",
  "key11": "pqoEjvmsg5z5Ffd7uo8xBxJnMp86mw4gbvSVWJwP2fXndDRGWY4S3dXDnU9kPoa8vqnN81ui9XHTZ93ZhDeGtaA",
  "key12": "XQ4FKy7Aq3fWTCmGM9LAQ3inqLVV5sZozYFonHxXzQwPpkmFy5sWWekdk8uhWzHSkfYvN5hnS5pjj1Kkv1sC79a",
  "key13": "5Wa1uUYjUgEcqAq6XWRNUyQN9b4A9nNE9fE4DMPHQwohz62ERaxpzzNj4PPSz3XDnME8bFt3bqn76HsQV2gAWMcd",
  "key14": "4fJKur4569DbzBe1UAugzneonSArupzY6spb3EsMbrVXbjpRJbmJdHqYJ74B6rJgwfWhjo86ULCWs6XSLVYkKgbk",
  "key15": "498dT7EQiA2RCB5VykjLXMF5f5kQUac86irTUDePRyxJj2sg9gr2v5UhGBgBzRsSNyuRsEfnnLdcRj8xQzSx7YR6",
  "key16": "36sMCeJMcf9Mcx5Z12xPYAfNRawRS7m37i2sNS5PQcYohCV6QtgiirFqRSH37kg2wG4tqKAfoewMwkqk1ctuhcgZ",
  "key17": "3tZZjwZS3hhY9edp6y9hBkpzdkxiMBwADnmfbC9KVr33ZzUEFMgn4GtcHH8qn59YBgNZZYtZJttGCnsoGZUNQRiS",
  "key18": "3nEYZD7CLgmE3TpgvLWzhf9yMGX74R1Exa8fFa21RAiRPjUChqb6PFv9JSQvfCdxFbyMTyptUVX5cRLy7Xci6Eyc",
  "key19": "5xp7tKemrCkTkfsFrep2NajGzJhd3MnLGCReQ7knjKhS4NLyRihAwuXsPenTwpX7Zpiu6YDsv2zMtyjBGiSD1j6n",
  "key20": "27x4Twzw3LnXBoeb9BjVH46MYYEmbgqjvNL8VJAzVjH2i8CyjTqH4Gf3A1W2ecH1qHCgEh3U6yXcjWd3cegTV1HK",
  "key21": "2WD6anXaZKHtfEFLCapiY7CkHBPQysikrnYhSrGQLo4GeQQHqGM9iMiYNxrvQvBZtmCgHF3FGpq5KwAQdZDYL6un",
  "key22": "qhNgSNFTip4eHLM8H5PKp6njiZeeVGY7yr8RopL5CFMtwsbkGpwP69ort8oFBedHMRTKv5jYwK4c9JXaZBr2LCp",
  "key23": "4CZGEPrgwMd5XYeXY459Kzxr1fE9F9H5hQpiRS15Y9kJiEZm8eKfFdXvtG1JUmR52jQoFRbpXrA7zx1xa8HVg3dK",
  "key24": "4JnuzsS3voVYxnNVh6PBuqj7xa8E8VV11tTi27ETaWtuvKBsJ8syJiQn5PLEcmt12q2D8TA9iFEHztyRxeuSkMHM",
  "key25": "2VjXwJpMBvTdWiuyVeoo8UYihdhDxoZN7GRep4nvCHxWfEoxNcjXwVWq3q8Gr6cv6oRwyKW98wSKNp3Yf3FCY9sT",
  "key26": "VE6j4bJuxabYfgSsSSRZundsMaWSucHyizELehz2xfqTLvgnXXaguZLabyjKEnG3CEiBPwhDP3MYxomyyWxWYsN",
  "key27": "3FoNmQuC4KNDrRBqsWz7J13MDKSYSGh16bGUr9DFdg4fweW912CuHLA2oVbrp6CkbznPZryNnWFxotAMuGmvRzyL",
  "key28": "JkUj2eZo5Y5Bs5gjRphDsUmyjLo3EKVcrmwTuQjxcEbdL6gkbiRibYnsyhJRiRzpsE3BoQXKdetL4ngCN4F5aFM",
  "key29": "G7efrWiaNbwikU6JAcPHAKHoJyaAx9HnwEHUfgMtKi2ExnuZLzmzk3r5o9Fi4KTL2hdZeGCGsHSFN3CXqJwVnBe",
  "key30": "4gr6SvAQxpc16iXVKpBmpLe1dcffYuczscctYxypBzEWRjE41KCapoRJQk6FKYLazdd8XRuGQ6K5UrPNYd8Hsn8w",
  "key31": "2ji8HtHP9SKPJJGGfwGoaoE3p7iYcNG9cyU3ZYNKdykrkjnbEKmnzW3JANjt2VWjPs1dbM43krHUcRqz8yxCZryq",
  "key32": "2cn7Z1HSzJKmc8mA216bvLN5Y82XLdZt49W1W3E4169HpXBfxtHvRUnNYyGTTq41GwtpowxTfkYurs1q7aoAt1As",
  "key33": "4ohetJcHxCFbH9VXx8KZkwSArAnc4byC2iQMTHuVG1FPfo1gNVtU5Re44kxX7S2YfUKnggDLcyf3hAYQd9n21JS4",
  "key34": "BVrCfqqs5mSMgKn1Ae3XZuQzSNU7giuhSZQ6LmQrtHVfd88fHHSq3D1KQkU7xPvJ5PfMGweJp4CDwzKASo36fBR",
  "key35": "21qhjR4LpNqvcsFuAGyfPPEof4wu5f3jZ3Anx3vMTmmwY8VKk7d4aGPyjqVHKUGYPSbKMhevNi6p6QqieZReRLqZ",
  "key36": "23tDBZML1ZPqn9LvBafxSmfaAxkqfXaZ7fgF1g5RnPG9hUgpcNZM3x2j7zF8gonMpBqXDuqxuwMS7sg3TRfg6HDM",
  "key37": "a9422JiP78ByoJ351iWrMkSjUg9nQ5VpK2CjycYeCdA1SanuXZfYpJDTCfJuzxuS6gCKuKhA82DJZntCCgknVVN",
  "key38": "2tC3Qb5C9EsdEdqKJUMi4g9SnwqnL1RKPdiPBsag3gFTJfngxN9nquQLtunxV429oYwLhGt8Hswxtfva8csFHZia",
  "key39": "JYDL8VWzHZZE73W3jDfznCsXxjumQ4bqY5dWt6fSwNW6AZqB3W9yT3mSxAaEzRfV5nHTacSGa8cHSkcASvRrdEe",
  "key40": "1Kaj34sPPvygm71WaT7eBwq2FwUU3xBPqYUNSjHRcKvmxjsJZdDgBJpZpyryHLrRU1ZTTQ88yCh6EBauWZiSrkD",
  "key41": "3qQmsxzzV7cVZmdoe5b5AuftWnK9oqoXsZFUKTXCZDYyoAVkDifEfXLV8KtquZFAg3QnaVbi5M4C1eg9TSPGmpvq",
  "key42": "3175BHmmedVgFg778SghKd6RvNd48mEqQrFFoHQM2HcYbNtfLnF4aZmmWbDNfYRRqAoFogJV783Nt2AMmz1FeJ57",
  "key43": "5uFFWUvJDjzf45apTqMn8oGHTJZbxFFLLeL6xhxqxGHJXa4eZK9wEX1ptiYBv3fboada8XEz1rs49tviP23PK3xN",
  "key44": "296z6s4QtMnQmYNFQXsFDRYgcRZz7aLctG6d96bbtXgUjSqLhGjEkxECakb5NQpaBroNmVApCgELck1EhQTrAuSG",
  "key45": "4LE6dSnaMf9rYHEGZ4HrppEghqwC5emd2TM6m7z6DkrDiAHmokWRJT3srMNd3AXCUJVgBXYkkM5DHaR28sxssz4B",
  "key46": "3rXUhWdMDD2Zg29UR7PAtwL4XqBVy3FJFaWRspHq7HoqMvADCK1c3ToK4Ln5n48gNrKKBnLbGTpd3KCgADhaH8SV",
  "key47": "3B1ou9ied6VtsWW7QXcootSh4X2DEQjisT4YWmu2mR6hzK4zP2kJy5N3eBeEpeJG4TCg5KKD7hp85f8ARcEH1adF",
  "key48": "5tcS9fQjCqkRScseR6Dd31ksSc15LYQh2Sxkae6GB7Qx7z2ShzD3mabFAZYftaqrasEUr4AZhzWoXU1gPaGpEb3Q"
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
