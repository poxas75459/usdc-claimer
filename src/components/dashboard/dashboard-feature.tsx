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
    "2rLn3KbfA4PoGphzr6eq4qd5unFuPjsRXqAjkLHZTeYFmiB7NxBTqeyM4Gp3xEQgFkdCkU16itebUm3CTEUbkEo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c7faKmAA3pX3fRVFHwaESRWrVuRsX8pB6fwFY1TfMZPHHDRAJtnVVGFva1e5wiAZPjNC2rQyaBNVjrgLDHUaPqA",
  "key1": "6sTA6E2kv4apqc8BtiNEBGmZLGTtTNqE1d2ej39BKoWnoe3M1RiegR4H839CqpYcNCp8bLxjUH6p8HmPvVDj1bM",
  "key2": "fxjKNSJ6P42oeLU7X2xdy26MiQ5APdVLgG3Pa2iFDN5GW9j5tuGrbiBDBtgAch29xKEK1QRhnUQhhow3CoYnEsU",
  "key3": "3HsNi91ZBebgZoGVQnp442S8MjwshJCLLPk7VWnm84cXitwivsLrUu1NAjGwbNEQ24rHqSemMJZJPxpLBHbqq5cS",
  "key4": "25PznihcUHmGuxDo3d3w1wkgTMXjLssF6zViYeFW9qnYd3xhdg5GyUVhUiB25MJ4DPwdtDUbpJMkF9Np3ZHsjTu2",
  "key5": "4LLP647fY5LfaCKL7KjLM4eDrY1YaGUQy1J55VkUkCBn5ZaZeHmko7Kg4EjrN71roqwXUjmfzJqyguKfuhRPYXKA",
  "key6": "2Xq1aQhdfALzdCSsK96pHnkc67t3utak7picoMBRrXU3RZoJ5s8aWXQgWXwzKvP6Mq5GNSdihnUPm6yyeNyfonMw",
  "key7": "fCKn563TpfLvgVp2saAumEoYyuNtzn7bj9Ca5L2LtuabqGAzmTUFQrd3pgGqDUD7e369TzWLdfGPXw4SRif67ru",
  "key8": "5pj3Dvoqi7N1sWT98D4UCaFYd9S4A4nDiPCmonEAaVors2j9moA3Htd3EVzdmqzgd2tEoGHNgc831xgpfrwyZ8gy",
  "key9": "4Q62NbeSJKmsCGTAheC2Xtm2pH2hg6dVc9N55pqSMxhztG4Wvux2NNCpqgyyRyUSAN5DPB8StWEwXbpzW6e3q4sb",
  "key10": "5n8ZiGymXpXracUnS3M4u4H3r9pRkZxnBjH3NoL2XKZmTTy8cMG5zR6C3kHVyEuqnkt6TvVs2VSDvCwG2Jdjywqb",
  "key11": "3qPiEeV1nczZaga2kbbPJa7v5rZ6S8d9coTUVinFas7QHkBSsK4jD19YxZ7DQMm6Ww8ppcBTH2hkA7czh5tWqwDe",
  "key12": "54xBg7xeFRH35DLQTPwzXr8qnkr2zSXiggLrkd5RAJppcx8fjPDpwbuXJqmCpi626MJ29FcVRGmVGyXLg14hQNak",
  "key13": "2i1LPhmNCU1k1LzJXY6aVtTLpkbThuaq9NzQPAbtxU7LaHgqgHTQ8r3qgVRyXr2tGcCoGfpZBBSj3FDKQvyxxMj3",
  "key14": "NUDRAe1cK68bfc6fG41W5w8s1w33vxu3ZWfDZDfmhymcCoa5CimucevZeLHDTiCkBHqj4mBwJYGe8KGSfzbUsqE",
  "key15": "5E5w6q7M1R6YK1w7UNgpRPCmPzqvVk4uDXPJLQf5GQBNgYjvAvsCf3vANEN5xJs9CPTYNX1ShkmdoVDdDaz8C83N",
  "key16": "4usgGjY1x9KLQc8WvDkEMKZR1YAfPiDxE1K3VXXPk8XJFzvhuwySeA4m3ZgKiQ4MYRECnJcM4iSLNyvFbN5oFXkP",
  "key17": "3BPiZuE1FhCBrXRnXifhSJZmbcYbtVYuUioEznNdR372mrAxbCi8LvkdkeFJhEAvYzD7yWfwCavS3VZmkZBmXvK5",
  "key18": "3uAwYWMuwXWmRsXapDyYpnPRmCo3SewnqNm8BXTKGvUcy3LkeETqyB3ptfC9gZQUS5TdHgs3E8FsBnhKcdgSdZSp",
  "key19": "2tKvTY4MGvxA9hiNHT5YEuXpBFg3ziv7CqkuG6qe99dKkf2h99pUYSkgBf21fUejxr6pEFwwpF4XL4yHU3g7QwQh",
  "key20": "5AvPAWbSJ5x1nRDioyX1jtkwgoNe3QNZHfTpf7TSBS1kR1QMincFYyUiHHkN71Sep7PkJaiG6Bn27ikX96Ezw4Fs",
  "key21": "Kn6Sia7tTDWCahZMBACn17iUN51uyZWDc9qyLDNt1ZuARmuiGTkPMr7R8aX8H7nrPJXFdkCQLKZJVFb5ewZRmet",
  "key22": "5hCMaTS5KzpUJ5Ci91qc1PgnLQcmDyw7rNGpPSfULzYvo16YwnnbHKdwBMTijx9TSG6NhKENm9H93BLyma8pCh58",
  "key23": "3c6xFAhJQmVzgX8tCeSwhCjuGHqrm5wTLFAwo7AXgLcK4pLRWddessdxR6KWRSg6vZbFrznXgS4cjLqBRyMruwsw",
  "key24": "4BXfnNZPqH7aMTLFC77Cr1CRunwKQ7AxsMi2JrUvF2DsHSdNCWfGkH3Zu2Zvxvsz55JnHMdXyjPcZAcEuYrjCbuG",
  "key25": "37aWMmAP4reu92VEvoizZZSEzaZ6K2XJ9g791idKXVtp534niSiAXmqcWJNurqZQRpNxkDJBugRLxHEarA74TsLm",
  "key26": "4KE8caLW4xqHJAoqmfBguDM97KDBDg5RXewwaJkWp7QAQwg3AyNtbBz7qosU6NKoWiRg71smYhTQPqt5xhqnaKky",
  "key27": "aScNCLWgdxqc1cd45vPQJzfANuXF2KCtUEUVueuTuwxpxLt6aVHTyife4g9CJWCAnUkdCQPpLYztyaV1fawg5WH",
  "key28": "5LWHZMWYoZqcpBPNPtajUEatSgpQT9FrNffUYSxawPjG9RySTNLLsHXvnZ6CGG1mEiKKeG9YfMNcp2eirdrQFVGo",
  "key29": "39ALiaYdApQEajgpHGyDcrR2bPWWF2CLwSEjkeVnYtSs7fobgidiDRBC1uciZGy4PT1qCoSuqmNwMGXZM5fgNHvD",
  "key30": "5RJjoHvJBzRUw2vDfNHxpu5JKhxpFFFinbr33oAQCdnL8C4NjfPTdiJot5PK53CLv4DGieGLyoq9WH4S3YBFV8z4",
  "key31": "2muGxDWTq5yZpBY3h2x7Nu7FoPxipf9sDSVGGauqo6hS9EaqC9qaGLdCfmHGp7pMdS1fWYHg3pxviowFqXhcTycC",
  "key32": "eoHXQcyoqNSfMMAFxfbef8bLGh6pXaEiCrupSuUGDYJGAZTaLFWUrZwhbdNkPs1ToRcHyiJwxoK91TEeMgzdJCL",
  "key33": "4tr3WhnaEFjBhPLj42nhJu1VazJLDHwfTSxaS64AtXRhdQU8AmQQFxJqY7eDtEeBGNy8kDuhF7R5ZrXAj8PxrTqK",
  "key34": "5VYdtuxJJANoRbT4P1nBwikwNW3HERatzT6b4oVS7AsqbbrGVZht5bXjzT16oaYigwRm9s7tm6Y2pfjuqRJT2qfC",
  "key35": "3W5UpbkQEG42pe9MwvqoNip5WyqRfYVkVjzJie8GUrfRUfUgSdwyq1TfunooguFJWYRFhBiw14UBMCpt9BWjVPcJ",
  "key36": "aXztixhJvbLeYfHGf7F2i91W3TA7cvFS67xksTtopwpbket9SxeQcd6oNNAHQFcr5PFFTmZPHmhstyTjr5SHvz1",
  "key37": "49JM3mkLi6nGZg2tpFuwGKC3GhteBFzUKF21q1nq7uUyXz8b7ADfTQXMyfdBBJtJVSk4pdK142eDpycZuMZ8c89V",
  "key38": "4VFwfjpcKxvbhyjzSBqCxk3y1azhuGa6WAL1VKuFrqPmtkk7uzE8ofQDq85TpNq93ri5t9e2LGfwNgiR8vUtdcZH",
  "key39": "4Skwerqx8z27rb1yov64b5euLskzgetE4AFbq2wT5x74V5ZT45ezjFUtaJRJZ99iFC6tJmbTY2sj8MfrFQm82tVw",
  "key40": "5sHrNuF5kfersdtY81KZdGDkKfkiA4PeaCcHs1upvtkNMNivzDPYRPckJkagkemR1AEXUnh3BCBDLo5gjaFYTb2j",
  "key41": "4iDm6g5cmxpLHBT1UNq7jRGKha4jYVdi4zRD2XjcS43n6TsPcqnfYJrbnXkVFSzHaP2W85Q2CmbSpYn8FAi7Lz74",
  "key42": "5AX9cT6XbWgazpgxDt2aoNjHKVt8uiviKrXmhHAWSNDNzVCuJGQ1Frf2k4tQJ75nPxrqe1JjEHy78stocqQz8hu3",
  "key43": "5BKRmbuiRwXTh5DHRPTaUCMJBVWsacXc1Uio59D7vJ9mGYBBRSSb1aMNbi1otGMLCsBmaSPqFun2usDQG7wM6chm",
  "key44": "4vqEfFuo6MHMkUXhCTwjbY5ZXxFd84Qh47C3JuXxqAjDwVDuyPSsfWSCNkyQcmWXmSsRRwRcVHQt9eNMxbyTGjqP",
  "key45": "5UQa6G7gRn6HypUjiFc7vSeyekKsX1AVhMNutESRExZNtcMPCsjjovTho88iQXMzMK6Xb9v8ngJhxZdykER4GZaM"
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
