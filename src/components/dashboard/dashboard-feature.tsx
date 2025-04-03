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
    "wCVfir1vN641fLFynTiGpXzzbJ1tp6BLPrYgg4y6yjgNmDnhHFHM1pGBQVqhEtuCuQGUUZpDAz1oJfbWkZzeZi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2axj384dQ4cHrtvhiYT2b7JbBNcfkt4unTxL7cAXz6pshjmQqpdXzJ3Fpk1sLYP8PVcg34ignZBToD7jDG3DV1Dd",
  "key1": "5LaXZbDUEKf23kJgwG9L3jaPHTvYXYa9sJ4QthhAmaMWZEFDfSGF26aHk37ak78Gff63fN5iBewqeychZyqar3mn",
  "key2": "5Emxug7AG3Jysqik6Gvwvt4uENETBJUctGNjVBv8ePDWGFMLuRSP5a3CDFJRVciG85fv84pdeoc3Mj9wGyso4e17",
  "key3": "4uRRvfkpjwwYoNJLUk7PPYYWFPSiwYZ87tggQs3F2uLKozr2wMVL59HZEb2RuNc2vQUTbrW41qfmXF6kZzauzdL4",
  "key4": "4GskSLBJwUqvEQ4kgXF8AmPRQcmM4PpXkPBmk27gRL4Z4rhkYjiE23C8sLrbJhfChGwyzmELmy4kaxJAUihundXg",
  "key5": "4i5V85XY9i5QVtyn2cmX5fiygbmapYdtb1J9Svg6Wd6U4xauFDkN6QgD3oK2YnAqxVHpTbQ32Xhe9HK5Cs22H16H",
  "key6": "j2VhmPuhWBcuMxp3SBKQwQgJbnoNAousPohDYW93w6DmAVmnpErzshykVnfaK5UFrp3vE8Y8oz1JEMEhvUc6CUf",
  "key7": "5EFxmwU3tUmzKZWmcUXySjAEkbN8xywjKXqthhiu4eScwKyJ2MDzkWxMeNc1QsqDuFG6iR6iA1WnvWDFrz7JuSpR",
  "key8": "xUXBrvnR1ehy28HaXk6gbXQGptfmMxYTQ8Z9VtGtmoUKNwzogsjhS9Kco1Ns1AdWVFzptAN4S4ffeKkaspQgcgM",
  "key9": "4G9V1pFNMDn596uLJrf4Cg1ZiXiuUvMqPD6UEhV78CbE5xAtaW7o9Enaow3FuF79r5udemAnaKJquZVSLxZgfgzY",
  "key10": "32qru6uiFrSzofXzCL3KDH3HqZJtMHzmhJjKLKY8hUWpcAVHKZ13ZTpzUdZnGwDb6VGCSLQTZQwPrayYNJdoECHH",
  "key11": "5xqFME64snH6cYenmbzt1tRoJ3Lm43u8prDT2jsGcdxiahZbEMaszvkArTphffQAqNy3qSeTPwX919Dmo79fd8Qb",
  "key12": "4zqJ7wiQq9Q7yNKatWJzVahh8ahkFyKyzGkwkc9NHmSa5zaWYv31aQvhLzUs1SDJYjBxvV5vTrpuy8sfgTnUUGGB",
  "key13": "NCqhksWkS9LSUiqd3qHj7rG8C8RTPPjeBe2FKeDTNcU6bAScBoQFNJs8qKYcEDFu35KKmvAygWT8JN7Rpajkasr",
  "key14": "2mdkTci2dtHgfQa26JEHe66m6BtEzXMXf6fn5m2UY9yaxEtYXQVi9ME5gohHUpECXwGfKJf35w2YNvY7aKerRDE5",
  "key15": "2HF4XG3BtESL8WLAmPcjA4q7h99RqfiekqnC7K6vENi13ucuP4wSiBdtHhHhgX33ApoZHx97MYUBn7kJT2KEmEem",
  "key16": "2qFhS6oxDkDjGEEWmdouoPtiqdDDXQ3whbdRJLAPHCQiz6FTUws1VEYY1Jmn9C72d4ZoVhnoF2qhFg4fKCqdyxCv",
  "key17": "WZxTT9M14rmB2vCe8oHpWdfurH35K92aMWcsJop7RZyCU1nnt2zceEdtBgkexymRjEyKA9B5q67y5Z4obLKSNed",
  "key18": "2CGS9ypv2pW8DqDnspmuYFhD4V3vuJozWRU26BS8wA3JsxYk2NXWXJ3dbJgSJuMfbkeiB5eMKJxSkMLWKEnrMo7i",
  "key19": "2CEWQ99QXztJMhgbiSickYwYfj5gcS6DRFFCn3PooLJadSv9iMTj9wx3aL8MgSqLCp9ydCwqXZRYxJKWsn1xKoKx",
  "key20": "2wKKYBuXiSrPavZLLat6tYWB7ti8v7yhCBFCajddgmY8yi3eLiXb8BdkRKAvnZ22rGYLj1NQe7tpeXZVfXBwFaKZ",
  "key21": "4XGa6HRLYAfRFEXGQdQk9H1AMcZds7w8ARu26Nu2WARSnKxkzjnGiMKJgwsZDGrSnRdWGxyuLR4N8ZiTy9Sdb3XT",
  "key22": "2LfmbE9BTWb5jsfUhL6CDNLa8yCd2hQphULzcXkUyB2usA1CMwy9sAHngGeQ3Ch3gVX8QR3LgEBGFVHVhTpToTax",
  "key23": "2LZqiSQ6SzCt2wh2vDgHrTYeKnmHvpwnknmmwpaEqxeRU7ayHCbM68wnLTZPNEgSJEWkbsHqXV7rxvYGBUzNNQLF",
  "key24": "Msksugqonp13wCLPCxtL5FUQbW4QnQEx4QNtvPiTpxz7TKHaWQMXngKQC8Ew6iCmho1j64fnReSxK2GZJrfUsCL",
  "key25": "5bovjkc4fxYadajx5frStXDfpLS5Cs4QJsQnBD2BeKzmXc645tFBiLyTqx4FobFV9dpaTQ9SUeas5Si1pz9jFHJR",
  "key26": "DMgzRtGygkb1PaaqD7EZB7oPnpSKs8yBw8Ud7jitVPSw6dApwamkzySw58sewH3B78ggfd6iBS49sttEKavNGKY",
  "key27": "5RkTJL5zpXZwDWKo4As22kXTxpwT43BMR1dHUMKZjTjQg9vSy5zv6e6aRMDPgT49R7byVriiTBT3mviFgeBPpqET",
  "key28": "292rQ4kXebg6AWD1DyQHWNen4bHPdy7pfLwhJ56EyKVz4HmzP71NeLcDAyX6337yhJWDLjqgQWtwcZ2VRD4o64Y5",
  "key29": "5BUNfFgCAbq7SYWrTPFhGkH3tdSt9pso8GNowHvQ3bEhe8jjxQtQtnDtkMVPQaR6ZXegfJLvb8jQcj3vysJF9DHw",
  "key30": "4j9HZt8poJdWH55m369bxRqFzDZaJUcGAKRJqFMdZDyiPrpzFxjgZ787aZzGELWZSnATD1aDcbhQa4zgQYSWsjQw",
  "key31": "39zeBtBcx439xw2RAdiU8ebk5jmay16ncHTnFghvbTX8DmHVhV27egKSBmJ43eeZjdCL3sbdnuVeUScJzzpywUbi",
  "key32": "5qJ9s6WPMLCUPBFvrqMjMykF9QM47G1K7nAw6TZZhmCPzVFUvq5RxtJNGDhuKbQxmand2UcWf4RXd55JgZucaKbQ",
  "key33": "28tYfURKZBbvJ11v5PZnTccpdCrjCYJJx1e2WoyAJ5kKvMS895qKoTsjmE3xnercSRFsqtX45eexMWvQLNpoczCG",
  "key34": "4591CJDDxjWKABDJsMwMJ5Mtt2Sny5AwEYu2cQvWQMoD6zNs7zG3fBLZxNE1bwakbtpKmwNCnpoUF8zNguwssSqq",
  "key35": "3y4ebtuAdHDPtxz23gwEGG53gVeXZBYgctxpyY8M2schipj7g28ow67nPJz7o34XxQghQ1JpJ7ABsRvx9RzF1jfA",
  "key36": "5dwsN1nyygUEZ2JA641KB5xdHt7iPumrh733gHREr73YEPoJvhjHyHsjyswSauri3gkCN79EhDuyfj1JVpWaKyPn",
  "key37": "3r2APqPAz2zQpp9T2aJiSaPVWQFmgjXUYzrBLCrRkhKTgNu25dsuHbinY4TPbJcNfyazcH46XH7ehYZ7SvGMYe5F",
  "key38": "2z2ZHC3B4oXCftaNVSoJ8J8yg8fipMJa891CvzdkphqXR3cjTv1GDp3dNnUmcDrDmtCoagBYHubKEr5rXiQV9KQ",
  "key39": "SUKjy5TG6KEnDDYKezPUx7ixjiqVuGL9q2PNVjRnycxuficzeNbNUkHLW4vzBePf5eoWb4hVHiRtHW2KTdtrdrG",
  "key40": "35XFAHFDae2xFjnNcn6FVjZM4tyGzNcoL2QF2Sg5MJHEEvxNd7Hsow8QLuqNj1QFQ8a7Ugr1C7WaYTP4MzWe4F4h",
  "key41": "5WPJtaXahh4E3NLQsPs73mKyRpAt6zkRU5F5bVSJ9zV1YrcdNpNXJLDajo2wqC8k18cerdBKAUaVEWvEjx1fmDxv",
  "key42": "4ps7133NiMgQdXKjF9DUBTpTK36142MiamFR3Q1DUUCh4t3esLPv1H8J3upgiJMaUgbNHXgBkYDJ6VhemZSe6KQF",
  "key43": "58bEesRDV7hWND8MB6gqsRyFYmNfchvMuxeKDqGbtCfFBrWv8BLXjhAQyDqspWaDExrzozsayguqH1K4VFemCMA2",
  "key44": "4e6vW73aaoCVVWwyXgd25RiUtLq4saFfjjFw1f45CGhGnvm4JosSm2sW6u1igQBPKZLCUYN6vN2STRh6XzobyT1n",
  "key45": "5QwvGsofTz26P6cngZKWhsP1TpeQPVTT3R6ZgoFhpS8m5Sgj984FuVyoC5sD1bJvuH3nMeRkyqhC22ULZA99HccA",
  "key46": "5Us7S3pChJi2X9ytNfuHaQ47fQHuq4biN6u35a3S5h2hNeVW8M4ASuJK2BvskAUWsxZddKhVk3KWSksrtJ39x4re",
  "key47": "5PTv1iv8yHMJ8p1Kx2V663ztS5GXrwKNkn3MMcE78XnrQ3JqWwpRRozPYQuQHYKVYYZG3xtEeaFbp4BnZ6vbdr4d",
  "key48": "5rsTKwBG2wyeLRga5HyWn3jaaGGhinZUag1SeSeNn9KFmztJr6PNdjqid7qNwLuCXoKQBWzkdudgw8MuUHFf1XZm"
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
