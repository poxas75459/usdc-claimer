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
    "SXqP2WiSTe5v5qg3SXRT9z39nKr7qkZVVVF8iYd8WmpgR3ZjstxmWrrtmC7RnoR1DTuBCDcCYn7buuxkGf4KfaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "538zz55gfCJZTtCv953X5miaZtuXU75bWHSJnNRKjQcnwTfrSJVwxymkpr7DsdQTuZKjTghFfSXByt3gyA9VAE4K",
  "key1": "3eiV14MDtF1EakJ2xhP4CJcLGs2CoUWadoJ2XWFzSnrxbLFjy2wzn4xPDZ9GgQ3EudhLVqfGWPBNppYDhnVWuE9E",
  "key2": "o7Zgmuf5BW5A8zSWWc6vgGXjA9NXYFtoJMxW4EkT8tCwnGDcLDBHHw3MyPhHrtR8cEu34wkFXGqBVfWzj5uLgQK",
  "key3": "3hinj37SAtxzAtfzYihpYdP6tVTbSqKmkZ896Fwo8VHNZR1qdQj5oTStC2Bo4ATRqDwLSvM7bJqnxEz7aYWBj46m",
  "key4": "QMEywNjqyvV226X8UnyhZ1Tp7dTMahWhsdrCZHarsD9DoU15399jnG1tEpH1bSuoEWHoM8zksTtsrKRpipyfMK6",
  "key5": "bd1zUDN2BJPhwNzSN99KTSVbrUNhf1U3H3W2N7n8x7fWk8EXMAijdP4Yp9oyderYad2KAsRUDz9GKe946AMu1Zx",
  "key6": "5x3noLoYV3enN9LFYtd6hfcdAS6YTHeZ526hpaveixPbf5fq2AFrQcex2d2eSQj1iHSpr8MMQcmKioMk37fdd2pn",
  "key7": "33g5hawyy2VZz6DmGv6Tt5TRtarRy8nMdGNoJSHhH8FhcCveNcbeWticG8suizB75H8j59QPepxPqGddwA8C3ZMj",
  "key8": "5qYDV7fYaihS2W4Q94GQnUP9xoXqVDkePFcSDRtMAWNPb56uRUyhLVsfwfGryiyte2Pxs1qjxHHdEXnaanfp8w2M",
  "key9": "4xRshYp2BAWJBqghL713FCUbdgnj22e4zcj2sJq3yF9LqNYzJ1AoQXe6cnv6PGciyYVKSaifVegVykNYwtwFwVYH",
  "key10": "2C1RMLva8HhE56ZkkSKsEvG16srbf5bFgmo9m5N9waXa8jN63K6VDerNN4NYSFPsWttEmmQm9vYLcy2D4RN97BeU",
  "key11": "2gRDCL7VgK7FmYw8Wv2prVqqDNxyB4eGcajLYoDm4yCDJHJpDhF7uxo8SUjyEZN8bMzD3N7uiJ9tdNy2HfW6vQ8r",
  "key12": "89DsVvUdW9AEHEgLmn7QCh9h1WJzqdw1DHmdjJrjpkid1U9auDRTaJ4H4vqLeUo9845w7C3b5oAccao5Jrwb6QZ",
  "key13": "3W9Yu7VSM27Hq1eQiHCeHgGxKzeJLx4sZcU5DqCF75xJkNX1jGYQhQbKH3zApWzZcQKjgVyKBfe6TtNjf14wyu8",
  "key14": "67JMvsmw8cHjN2TRkJFzpnLwsrNEAUgyRupsGMXaoSnbym75nnW1ikrpQDBSz328pkarVuoWGacFCLowLfpmCnU4",
  "key15": "W19LaxNvMV8FiZeaaRJdELAeDerNsyduzPwWm9bA5tPtqaTxBMv6Y97Kqj3P2J8YWHxyq4nGUvCxsTARbuMvHDv",
  "key16": "2Epx6ViZu8fimf7KBXK5c2stcAHiDeJ4Bs1eaEeJ1Fv1eqpcnuhHbp1mhv9Qb3eWD5qFCrWY47gAt7eaJuk7BKsD",
  "key17": "4HEMLkMAXAC2XAWgiCZrdMDq5pArQAurFz9ePi2MDHTRQ3rzfiu93LVkA4wQe1CuZEapNEFsT3bqA5DGep9Vaoqh",
  "key18": "4CMpzBz81GPsnjKNeXMWLGMUhWEBrnbD11LFWQjNEPJQxkTb1dnSFxePu7hykpDRQzDThe7t4xRdfGMHDGXHcEhu",
  "key19": "3hJHmMix4FVHhE3vnKiiUy2MtZKGe9x4z79HK79iHafzffSRyp3KcR6FrHxxd3BHt8jKPzzQY95P8ZaiPv5cZ2GY",
  "key20": "2FkegqarWeEYZkm7G8PKALpTt6HqN99DZyQVTmRsQLxPxny69zi7W2kPTZLYSqXuo4edNj9cPfBBDxGyasBBJYPZ",
  "key21": "AiH9dUtwyraQtbVWio7ChNGfJGEjswoCEsVv3138Pgab4noifnWiFeALKXnnpju96Eaue1A7FmaZZtWPQme63ZT",
  "key22": "3zgjseFWesRrMmctCnorkg2p82nYMdUHU7rWgkELsXarVt2CUjwci8dyaAuAhMC449XRDa59mX6bECUSkbYdUQcx",
  "key23": "4tV1YPh2EihUuMPdU6CeexFK5CuxtqWb4h2uvN5d84tFsNX67C2qG9eGJNKjMi69jRfFYh8fcEbDPLdsjcgHFfTy",
  "key24": "ujAmRwaFDjCeib1wiZa55DbMFKkjax1xRWDQ6fC6H52vL9mg6CDHjpKzNHuGTxJ3rJoEwVJ2zUBLS8x7L3JX2M5",
  "key25": "3mp4WXQ6VYytTbiehQaR8PyLk4Lm1JEG38d6QsNcKNXtyGPRVjZd7jWVEmNQgK5ggGN4NnR9JSLGzidKD9DyV1xh",
  "key26": "3pU8hyczpEniZTKcrhEq5aX4NorsR7QScU7VU1z6iUhn71FoiFQuFBLBwrN8fv6qwgw42aKy598dhdQd5nzMBJ5f",
  "key27": "54BmKPtdtXP6ewLq38ZLvC2NuBU8sp65UTwmxSs94kff857dj7QvRcYQDKrWt9H1cE1JbW14eoZEkyTbHKKJtmqu",
  "key28": "8mgToReQfYZK6Wr7mLGUyYBPhnkCNL2HPSyGZMnZJnaA8QxPULB4Sd2zsK3GY6iHhnDZRzYuFV8aAR4NmtoXHXG",
  "key29": "5ZVFVbnn6Zxd7ePk55Ygn1ac2bCvNnNjj5BenRyT1qQTms2s8o8WJnkLNLpxtZkzFdTBoJoLZZZSesxaAEbF3My",
  "key30": "6GirDH9HFLdbLfYyQLEKrdmaZgScSot9mdYcT16LnbynpNskHRqZA6TH8n4NpSCweQyeaQrTSZ5xv4RoEycdLj2",
  "key31": "5gZsaX7NRt5cCttnZCDyu8Bup5YyiZygsJ8tbej5SZx8XNsqddHgTVxJpk3tP9qfmmfxFAwvUxvPzqwFNEXYjbNR",
  "key32": "21XNRdcssVcND7bURVZX9LyZt2CPVjjyexfUq7U27xJeS8ihenusSB9Bzh6WEDVcq5pzBDw2aMxjKKRvfPuqRwUV",
  "key33": "5o36FMDEjVXTDrvEQCeMMm1cZa5D4VKHfjvk9oepK9X4othVz4vBp319fnk1PMT2qngi69Z8QA2MWLPmyspjaSgH",
  "key34": "3TBvethRJyubvtnYahSgSLT5ave65nE8gPXvArK4wU2tdJRcdrqmkg3aLbWFttqkdyyZY7iL2i2PK1sTxAwNHiYC",
  "key35": "42tLTLje2BD5vwYjJMMBVqTox63VQ1EQQTquNXnPGPchqJJ7274fsaQMEaF8kJfEkyTdLF6hrqqDnpQ78k5vhUWv",
  "key36": "54gndWtVGApPqvfhBtYMvLXgbZY5pNYYAQxTZhX4rqqD8cfQXHa1K3nKAK4jziw3FcM1UDhVTcNHTZg2niX444Pj",
  "key37": "3XqmwUhC73h9XZgLKVpGs8NhDREL8QNrsU7jMXQ2gJx9ipp72wGggkewBDpcaNSSs7eY6ssuoD2W1ph6aBY5zWLj",
  "key38": "32NvSVHrX6ThwhQ7bHaHeBc7TyW43iexFjfKwN8aqLkT7uA8zF1K2XHA4oh13jwz3otmReMuVH3ceSyPifGsqNmm",
  "key39": "2tTJnmwB9w39nrZ5ENeTYsPHFLUgbwtaDZZB2MQsWA5mFa6vDb5wGhMo9Etrpn1MyLNZbVpmHSb1wXxEBz7Tw8mX",
  "key40": "2Jeo66wyAgADe79JM7DhYdzw1ATgXsC4Jj3ppNo9gYyKjLzm8H8fbBHS48oBKM4ZVxeuZvn38huuP7iXS2YAXZ4K",
  "key41": "578vRzfALowe4vQsK89724yRm1oky5dke8phH5hziLxySLqv3LdzJvK8BtLf6Zc75UGfk9XomYbknax2sZrUkdmT",
  "key42": "3g7sTtd82mF8NtscEr458JRFQ1oRcqBzLrXgLcGkwcSAiHnoUCRqHQq5fhP9b6LrrnsLMRtCzWfqk2gENskppkyr",
  "key43": "3CFr4RsEEKCzRKKeq71PR3RYoMZKd5WCfBvYVoZtjDQRnMvtmHaPXHrsrVnK1WCjrRuzHKmnEc2QjGQb61e93h3H",
  "key44": "3pzefATNyAjEcqXGrSfqH9CL8PXYv4L9AZici7vUNVY9HAft5DVkWLjVR3roSdgeYL32fZsAKfZo9gNFpcvWfe2K",
  "key45": "5a8821BrPWJ9YrA1gQdJ9oZQXKZ5qMJPoMJyt81bECihZ5qTW9G9WjyjiJkazBfB8bvQDDJWNmvxPzGYKK3Z3wcX"
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
