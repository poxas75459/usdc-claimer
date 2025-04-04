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
    "2Z38rxyTRbPq8nL87WyRShB1Y5gmfAcGgsUMZ8Zr2KNo4jpFufexBG8RcX897DvRUGDSZXVAJYJKgD3sgD8b4z38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L9dooaJTFdzSmsdZGT8Yu2RsKQrGMXiaybwtwNiATtBWUf7DrDPcvsNCoqqzYkAzgF3cjH332TioKvUyit5gXSf",
  "key1": "iLC3iFYHcG48diDstHCDTXJwZfsAnpKu1y7tLVSrN58CiH14WqJKPRkC1xg3FHAmUbfXmVQ254sSxANboVigxwm",
  "key2": "5vgRbYDpP56rZXuDE4vDQbm4sN3UcZYa2ob8FSUs92SqzC5HyySnqcVNac7Ppawqy5GpPw3FHjqhcvs2fdrAQhyQ",
  "key3": "4hX8rGvGvnyrFo5vXhcfi3GHVVYh4eNQdaFybVwJ6XnwMTAM9xbTNzAbnpH2xabvcPZZzchTJu74iWLHU13Dk6at",
  "key4": "3JLoVJjyecmsBA6y3FPZMQnmnoVtxKXpnM3nGee1MEHY7h1Mo7XZiDYgaWFsLSzTFBmCrJUWHhx7N2gwWwSRUceN",
  "key5": "3jZXHx3aKqNQG2GWPHuBYiTSMu2CmFKVU2S6DsJAkh2mM3gPNoFtsNpBKLpfk9DK4LYeWCoHZdGcT5e2BZQsXHWv",
  "key6": "35oy3LNUDbBtZMuDwRYFUCHmyntrJ8vTr97wkBziexVdvukH6J9ESsKnpLtgacv4i2Vb9fioEYCYb8gmGUmFMDke",
  "key7": "DB22Zk6yKcS2P3CkURqeZ349sdmf2AFhY5UdamCJdKkRxT5tway61jgbQwzTH4LmcZp6QnnvtG8Q7LiNRbxoEKy",
  "key8": "5aNWTBbgdhwPDJhDuYZwij9wiLipbWsoNzCyHUoc5zrFRG5yN6s3XJqZwLXEHt2Ka5ECSHzQVGn6UKrCFx1kycgu",
  "key9": "2jP3wo93c1X6nKQnYzUdHJSiJJTd5EeT4Ecyr7g8zFk8xe3oWuK2XReUmsubka8jjWnwJBSKAcaf3Vnwyk54V4u3",
  "key10": "2p56hCdVqPNspbjcvw9imUADUPLMUvVnvyuda2m8kb9jmsF725Gk2d9ZLtSU9w2YGqh3p9stBSGA5qANDqD9s6kp",
  "key11": "2cHUmeu4gjuqzq2ewbjVWmGccrPv872ZUz57ArEr8ZM8rdSczVndaqRn2SHnXM9ESrx84WKSprqy6RhkyUe7SqhU",
  "key12": "4ZY1piVTYEf7Qx6cLcBVcLdAVorFPzn76PDwntN6WszizacFEtzXEJ4JttY5rYYb1gjso8LjsiqjQqgqDz2U57nd",
  "key13": "gbdL82cPpxmxJP9Gba9SkxvewnmwYCf1wAvvozGEXB1p63wGQKDKGHukMbU8tUGRcnJ1zLHSu9sJR5hbWmG8eaQ",
  "key14": "4D5yfsfYQ8171rLWHR4Y7T5Hp43GZwihoEDRSswMmCmpsbs6FxBQa9Kzr912zurphPc5LyuFkiDeA8rGR5zUcwia",
  "key15": "5QGdAvmAnu7z9ok8vgVdD7xYe7NWLC8bEnCK1qeKMprkbEZLvRpr7W9s3kMoHr5Bswmmhv6k3nVcfJKiFBD9Xzic",
  "key16": "4mvQQ6XQmV4DpFxLhXzRMk6KyUwYBW7pEWsn6AaCdTXgAkCQovHcj6magbhJXy2B56824CTCAF1fYDwcxKCGvd4C",
  "key17": "5apoYGvDGdF1QVXoe6PV9LztAHSyFJDc3dToQcoNsXLG9gkHfzDPJwp8qBWJq44628TYjzg482SJ8UGnQTT6UK2i",
  "key18": "5vEgWRLxB5U5rkbvwrSj1KzDkZRXpyJaTHPcciVNoGcEybHKoDw1XUTkcNiTBc1fpxF37hxdr4FwFRVCeGZZC5Hz",
  "key19": "5tiUPw231EKu9D3tgRdXhq7dQXF3rivq1gWcXPUeEK9JYQKrM7UbE2Etodc989qDicHGzNm8RWAvtDr3MFKVQhwD",
  "key20": "2ctECP9WNEQSJHDAbNSnJnrjtCtmpHRRoy3Csdc456fHGMT8DzkwSSkjCjstf4tWkkqrcaQFQtP65GmXwkgNiV9W",
  "key21": "uqveCCFwbr4VJ1ZGcqfkWysDfr4rXrMMPw8Mt1mLay2zdoWuYbL1HF8vJv9BhswtuMGNhPLwptpHczZrP7Wy47n",
  "key22": "5GLdoRy7oVrwKPWg5bA1eD3aaEyVrLvWa5W4oT9fTbDbG5j1Xfyc3z584auJdcvkYZxdkzsAeJvyNVA4THj3dPpg",
  "key23": "4Ek7rVgqkPVFBVrd1A4AKjPBJRtbmY7mrwi2VPUKSzhqpx55cpcVhNWKqPG5EWMV5fHcdEx4KUxwrHeG5UjSGTdk",
  "key24": "4rw3Czsat6qMpQ1odrn4FcDuPvUYGybTjVmtrwwdnCf7UG98RyApmqfjya6hvoJej13Ke2zHsTvK5YLPvmPw5foT",
  "key25": "2EkHyGW9LR6qdrrtdmz5undLNhjwrtbrnRdERc7zuBfTp56kiXdiFwJ4eGgZgVfcXcXTCfWKVy4hCb3a9UzuWDpp",
  "key26": "4JaKrcwBNzXihW6B59U4yLPP73UdfE9Y1q61nSWpYKL5PN8LtmrBjFMA8GnEhWNQxdkqqdXQR1gsr4wcChypQBWT",
  "key27": "2PNcBjoapgRArycNZrGLv5Xmh8siYs18JVTRba97G9pUdNtL1KQjXMKGitMzDLnJYGpJ8TCr7Py7nfwBBo1xTRRu",
  "key28": "5bgDjwE3JBCYmQLSRx7gNE2ZyQoM6tQCvtkMvM3Qp9KPpxj2A2Att5nNYEH8fj3HukYxCL3peqFUqq8epWxTCZNm",
  "key29": "5N9BmwxH6VaKrw45gSwojXyd6zRtUj6TDFE21evp42f4M1nzAypMeSy3aM7mT3NGn1hWZyfiS2c1w5pq3ajLmKkC",
  "key30": "2nXArbPaVekffFdBi4Ya3d7arsSGYkL4UFQDU5weWwxBTPp9crZkW76FGGeX9yZfYBwba7Hfbrqqj49XREwoAoQr",
  "key31": "4SoE9edMhSxY9GJ58wC5BYnG2Bzy3RbTuMHVD1siebQQGqchkaHJDy6Ro2DfbJR6k6t9Bpr1YdD7YFiGojt2Xoy8",
  "key32": "NgJ7S9ZPuQud2c4zbYeNsDFG7A62PZ2oD1w5G7x7LTi7Zjp7CWLZe9m9MmXTDYUUthSzFiGFfaGN75Tps9keybk",
  "key33": "5o4fakFownzSGivnQgdNeJrs4gzN3YaN2Gasq3PJY1nSh1BMhvxEzji6VLevCVQXatSgna2FZnyRPodrTDdeQrPP",
  "key34": "3cGmNd4NBi4pEoPB6HuXm98PekwTuf9vUz5D5QduAZ1em2owvrGy3BVYYLzbjCxmZxCZrQRaPVF6ACrrvCqi1Abb",
  "key35": "2BrAZwRhK3Pe8YgS14T2bbXCREv4TZqe33RBSZ9QxHAvUiVbrUxcm5QzUg1urH8Rfbi5BcUrgiugxRtuMRroCqMj",
  "key36": "33ztEJfiwQcigDMcSArsPyb49uYvcZStMYbeh28AY5wgGzkmUrwktppvEym12P4TDT7kPpzadu93rjRVhVrsfoz1",
  "key37": "faiMPbvfDoyFqLxwtwMGGPjYnif4qEdKZKZwswtidrut3rtAqeSC9VZiMhCaLNKKwC5exRR6R3qPqTAesDKD9eD",
  "key38": "5X5gPzA8NUNyuS12Y2A3KqcyS8eZ5yq6AWJGaEsBVJhw9K4z2zSGAvtgnsfCravbhPEfqVuRbyLS7DpAH7QipNfS",
  "key39": "4wacxVy6H1VgtzBcQcDjVAQFjqMWSXR52xuCV3i8R4RmmjwousxPqgsADtULxv9FxfnZCB5bnSqw1zwFS8jGhsTb",
  "key40": "4s1bwHcbKePXpPcNag8ct2miVXse8fqFddpNSCUrorm24qFJfM6QhjvvRSjdbyhj9nLGFr6TC9uSu4KVj6KYeSca",
  "key41": "45Fn8ctZ9JrnAGJ3fsaQ7fs2sY2R6qmcrkDhEgJ4Lfytpvsd719E8wmMmu5VXxD1sN2tTunJd4mWXQcqDhyg7k2L",
  "key42": "5z2TiUYA89yGMAow3hJTN8WxcS6zdJsCCiSJ8SnFKAydwDQ1rw4UVJ3cJMhHKtvHVvSUR9vMTMtWGunReStDaoUg",
  "key43": "5nPnKiJWrKifdq2SjXvMqF4JJ3nSZeZeotGYLCSEHoi8UjjGfZUMTmpYTcfYt9vrxyBvSaXdZLQbtJu9Jp8Jb2aC",
  "key44": "2Lmpaaoc774jE2kaESgZXaXAqyosL5bLQZ2pe92YRY1DF5fq9d9FRz1ArZpzrdLiiC6eUASNEe4LcjN1CB1KhsBB",
  "key45": "5f85Cn6zrVLvGXJXVy52jwvYJSPRtNsrpieDu87BwhCvYFvyF1snxHbxGgKFFz16VELTxErng1Pr795Mi6mab6w8",
  "key46": "4MR4q7hzSUncczA9VBBqA3mdbLxB8ix7aZKVvYh5Z9fVXLQv8K8n3v2HEjmyVWVgEVu1YcJ6GTThMAWz2V6d7hJs",
  "key47": "4RdrFxUPWgczAzouGq8grKL2YB7JoHUa7z74bm4TiTtc6WHFM1uHpPJ4o3Ev1DcHP7KhN8YrGt7Y9aMR1Qpj1Meu"
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
