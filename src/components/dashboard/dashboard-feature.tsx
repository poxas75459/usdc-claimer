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
    "AxigwQckM9WyorXdPX6v4vRXQFAkugpEQrUfQgV4ovb9MfBj5V8ynFK6cokWmepbAR5VMBxauH8iZwh1CuaskfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62QHuUUkNqnoF2AsEnyS2e3Z4nseBe5e1RytJ1ALn64wLMxAmXvHuKgqVCSnHqLX13RnEXSQoVtwgbKQrpGRYvAk",
  "key1": "TVSP1YQkRAMd9p3JpwvD3gmvoG4cZiTFSRU4hz1Diz3SL7VsKHPWDUgX8xwjWeaSSGJxEKuTuFohZpCqCPXvYeh",
  "key2": "J4hyUBepGySmnL41bExLbK161m6ixVnCMtopaXkd89Tqye6eHoVPmZH71PTiNdRkwL2q1GuQXZkyW2nuC4Ca8iW",
  "key3": "5iR1GYTw1FsjAXE55vYT1TexMfTEkePZTc3WcnLcUcXGTc8Um6aWamLJTh1WumVEqygFujh58hstuaL21FHRTn9f",
  "key4": "3rT7yStozYpZ2i4tuNsGUL3MSTkqoxbVwtU1yRNch5cqpNHeMa2mbnEjmmhBsBNM3DrqBysTLv8vZ3UwzkC43NDj",
  "key5": "5Ve1xjtMC4mhk87ZejkcrCGESLutHc7SrXmD4YAjNj3G3LdBhq89GVwbSiAxPDAqx4AYFh3uoHSv1odHBJvZZf3U",
  "key6": "3Sywp2H3LaAHvi4shuCeT7gAGmYfs7oTFQUJUcRmFC91C3UNdugMnPwhAsWZUc53kpycAqTT32xdUFWW9uGZ9xaJ",
  "key7": "fNRGMYmCYJmjB4uc8QFVWKk6aYrnjKFHiYZXJ39igbqjAUBb2XaJ9SN55GWNihHts62sDJon3RRh8drGDmoCRpa",
  "key8": "4bcYmRqe3d96pBcr6cP9qbzoyRKfjZST4QcSRvPDPRYst4TvkJ4r6MHPDVFw3fXxGUaD7wbrBFtvECeQm3s2kosv",
  "key9": "LFrHY4MpqnoyuBwJYQtfkmwVm2RgDibFm7WkyL7hwTJg9nXKvFjhM11fLJtu767v3exfjBQMpgrmKotsj3tUHYz",
  "key10": "31LiiKUpnh4JUCjjZp4Ls3hnevs2qVXVMQyt789PmjyU9ihzEJM5y2vK3QxVaitFAeNmwcboyme8uchRkCyM9qhf",
  "key11": "3ZixhCyEGHQo4aokd13tk7RShNEWpCw8Nf7hgbQQUpeaQi6ya1x1qni3jqHT9t5yQJcr499jLXcYLWKu1o2vwWmK",
  "key12": "3iTYtWCmJ4WHXoUaCSv642Zm3VaPdyLom3JXtb9HYZPMdFrfYFXZFuKkBibmL3dzjmSCCBWFZthWKDwR2fH11skG",
  "key13": "5xRdBVrKA7hTMSedRZxXJNPohBJbmJfKGkoeGBwHDqMvoAZ8ivvkyee3zFF3jzpfPhy9NBVH6VADAxb3Y1H7tbxS",
  "key14": "3J63tE2KkRXzy6uoc1UMktcrzEYw5i7cEdxSaNxWBbXETiq9BuJGQkPEri4hMG5GtNMf7cjqozean41LTjDRFtcU",
  "key15": "5yRg4mVYiTtUwn1SRY1wYZtRGtxSStxCgnzdJ9XfUZG3cyPanudVqJcWimnkYLcHo1zJW3mrmhTyJ2QC4x6mXP1p",
  "key16": "4teBzbaL7Bn3HKwZ5NZJW7PyCtt3f9ZpvG4cFEL7XZZsNogvMkESTBwTcVekFWHHzYMUV5NYCt52qstcX38QKcku",
  "key17": "2yXhjq59iFj5dJArMqtymuzttL95Upx7JDCu4ezxm8wnU6tZr5Jim1BQoizVajpA8rJ1qug3gKhSeTnJVYDVR5sm",
  "key18": "5R6QL654aZrpXUcG9ti4Ly3v3UxxPWNASnpEqPwyUwow8uqCoaRPPmGxXkpvRiaDkULBv96kLYXniXGxPYtX1Lgz",
  "key19": "5GMrosWS4W4ZtHb7gf577BbLCJHLiYquetFGwGW4Hc8mYwsCACAD9ANQfsTTjv8iyjmPGhFG1uZ9LGQWQjrU48WR",
  "key20": "9m6VqqP1dZ2yc9Qx8N82fHZMNBguDNw3Zwmhca2yWkpfosiywxzKuVtGkfuRonJKw8pz8srDGZAe3EUJ95opLRG",
  "key21": "5HfnK1E5nYsbYVRV6oUF6wh6jb3pjryypBLw9LFDsD9nPCwLx8DHSQiUenrA3o7WyYpuwDX3wYi4DX1awgTgyWKo",
  "key22": "v3dW5BqMVt7YcqRLYcxz49ygR5aqRmZagwwVewqB8yxKKopHRFLPDjc4ircfBD3BzyLCoR9RoQAK4dYrYdKNwt9",
  "key23": "pgnSmchgvJ2mffeSMsgG1Yrw171sSyxEbvYVLWyVPfo6GitHP5Smowx3agJHyBXttya15Pxz8XssCzv4aDeaihN",
  "key24": "5cAbjd3t9p5ZYCkhoffwKwAak2hGiQHUEiQEs6uPECHxwJmgq9DSh3GUxTWKgXLoQDgmGUXYsemrvjXkvfiHCTsb",
  "key25": "28VsVULDUepzjJzWSqkDL4BNqQcNyiJzZfngH1ZsyA5UzQFokLU6EitP4fyPsV1U8BaoJbwyCzAhiA54GJtn6Tsb",
  "key26": "3uhveLab6EyPJzfDUh36H9XVi72XhZVWvuMfEhLstV7Hf3v3PD8R29HQL9EcBUWmdKegY4yP9AKF1txuzUP6FpkZ",
  "key27": "4YAkithWoHHxQADr2XYEuphHsdcSUUqNxk1wdNgR2dT7Y88R2qgr7iCddWJjJ5DbKr5HCAeaWRHdAJrQXbNruuif",
  "key28": "3j3r8FZ7uXSS5oqkwTNgEJ9PVUED9TkxwLuMPo7mpiZP26JiRsNuHhJFbijoPGt8AQPcs7UkS5UPWJ1RULnzw9x2",
  "key29": "2WFq1uMyqW5YSGowo7Aft2BhXgqRuV7FmW4fzgGnstF67os343e91vtopLQ5XauhGEaY77mM6HwJ19WJ9wZjXoDa",
  "key30": "5ECH6XecTqqfTfANQVecT1JT44MNyqDz6euyyEnMXgDZpLn9d7WZSyiFTSLMCWxhJMGPoa5qFvSa2hETdg3ZXCNY",
  "key31": "LFJDKaM5yHqeosR4sqJZSQK3CReoiN25ucsi6jLqzvsVShZ6Y6pMN3ghax5L8JyNzXqC8WXJ3QoeT6b5yBrbohP",
  "key32": "wjt1DXJzSRBLN9WJcjvYYnG7bqPzFmpdAffRYFiJjfLZ7K6TYosFTndaExsD4U28ZoYuTsXcLStsRT1DkyjhmB3",
  "key33": "5W7GdYPiPnxtNKgR6vseCcYTxBiJEHGB2HR2qVct3n3CwBLDSjwfptUqH19Phmm5hwhYGJG6ud2tjxJqgY4uekfp",
  "key34": "38dDtT5VxYnd8j35Enbs9aCyQ6XzSjBe63dHG3yinhpzGo9rmMj1iUQLACtuSg5NURE3YxQ7b4eM5yKuBVD9hGu5",
  "key35": "4A4Ptkmys1BizchBw5CBQdHkLWVbfW11r2x23rWA8w3ntu5LFFyRYNe8d9JjELzfaGfoXo4UzDdVpZCBQcn7pV5i",
  "key36": "3zihpyBkJxqBURUNLCUvr1YYigfB1NA6daYRmG6ZhSXVsJpuUPi9gnLBZQbEn9nwSW4yyyY5gC6RqeLsTaAZxpkG",
  "key37": "CgV2ZeBVF2tpSF9zCf69Yf4ZawNUHvgvFthBvxNMN8cn1FqUNq9Y7rDC5RSXvmoh3GjnVPCEwUiKLkXdEvDmWdh",
  "key38": "3hVYqudeFmhHVfhsbt4bhouvnGWm48cpuFmp6gQHNoWJDq4V12Q51qr2SaMVV76ucksyTPUr1L6Yz1aAuuxU6dts",
  "key39": "29LZqprKUDFvajFNpMdvMkPrN2N1z7nAqd9hsimaEyznpouAA4xCi4DGborkk7HgWARjr8AuyCQvU1371n8rd1tw",
  "key40": "26omUx4LTYBGqAw86xUtGvXUbYSANUk3Gnh2xatj2FxZii782wig1CTjmDKDwJtSGMH9thPq8scVm4fvqiEBh6aX",
  "key41": "3qRSKKoVuJbjHVVf4nuF7wn9xQFNj6aKGW378viokhZXUsJ7y5xtVvbtaDrJDcYsLrs4Lx8WkvKyuh3y8Fqx5BMk",
  "key42": "5ujF1fyfshL7aJgFohz3Esd6DpUryVxMNqFb78cuzdciBMsTZeKxmXTJGmmpZmAYPck4pJ4nTye9BXKnr4XRvNHt",
  "key43": "4igzm581G6ox87QMoCmHXyKVG3h4Lkc4Ucbr2vzxN1o6i2nKs2vr7Fzxdocu3viBHv6JtYgtBxwgq72v5KZDa5Ed",
  "key44": "54Tdt4ot1TCw4XQ84vqwYWHhKErb3RqragjZmcJJHD4q9r73cpnfKkEVttgPUBVc1CFKYgRKbgt6PeApoCb3Qcsz",
  "key45": "2sMjc5WgksCvBRCBKDeXjfneXEsPVteSjpWqyzHyzw9XC784MotWTXwbQuzhx2xTwX2TNuo8qLqK6xva6ouJHDnT",
  "key46": "4dwdMBgDGQgkUwRK2JtbtKngtkEqc1VuHLdxZdA4yHvcB8B1bCaZuD7xiNMYugf6RekjKsLRuzsT42xgzDV4CmCz"
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
