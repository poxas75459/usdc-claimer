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
    "DLH4MVNPJv81snTjTrhz4UxEEdSyrd6nXnb3dkaHBs7kxinEZHjqUtRscCpfjZoqcBfAGexa72kCiUDZzBiV2Er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21VW1dBfucjnazMK97SMbP8ZXKzcJiiAV9C5Kvn4pYZEnMvnNGecJ4PtdSNXLnX5qzQcE1V2AvQAd62Ca6riovJz",
  "key1": "5TCHDsjRAUT16mJ6QnntqZzo5tRycHrNu7R4cmZYkbamtrShgeZJNm9s5RrGBztNLaG42LxdmNLEKmgsSkepe1xG",
  "key2": "3jPxgdBvVtdkyPvbDFUvQLQbFgLdmLVNj3y7KhMg7cMHrNsrLkPz7vovUJCbMQvktnzrPRU4DS4XobVfiPCWV7fg",
  "key3": "3q1R7i2BynqSwJvZpiBzYknq5wsn6buH5Ktzc8GpjkhF9FjT9KKhMNYYqKMCeAcAYAT7wbi4ghYKAki6WSzRJS6p",
  "key4": "4FPeBunvv2rXoWDjJoWrjbgTjC9JvehieVc7a16oMURRVozygaBK35T5DftCoKci6vfUWmTmKmFKwTyUAnYLbtLd",
  "key5": "TZ4fAxWEaQfuy4YrLmAg5LX7zpAhy7o364egUPWAVx3M5j6ngQiHNJnc4aRkYc6VRPqbgbzNpLJidHQ4Peygeb8",
  "key6": "5ajRJjNA2R37Gr8U1Hu4cRn8g5SELYM9Nz8WGztCMw4u8TWPS2tBMcixu6fQWoJhcDV8HQaiXXkSM9mNbBjwV6gB",
  "key7": "5rVhBv568gWoZySXZNz9uG6TVFQtuCm7PLKdMWQFg8ayZtNjqgLwHPMzRyAVj3RiTN5s1qujR8ewJyNq1iKxUpiU",
  "key8": "giMKYJAiUcZ8Tokt9BuByFpc9isgwrkWk3vBGUKexTP2A4W3FT19gFohzgtjsmoskRowUr8TXhVwWsthqmjeQqy",
  "key9": "WhvcK4kcYRERjEMNCGrrQ1AJXC8fFUQsgL5f911yQomCTsZ7gGR2dvKswjqcjJjSjY6mSmTsExCrcJ1aHB5Bkp2",
  "key10": "33bTS5TDmtQVNntN6JwZzXBxi8iEpe1uXAD9ZY6J8mfAfUC1Lrf3HPZFB6NihLHLGhSvKx1DrawNwy9f8PmvxCvi",
  "key11": "2BrbWfJJaeG3AiuRZRqJCfraD7pX45JsdZ6Dtff73EBbAnRDGyJ3Exsq81y2kwGrRv9eQwctepq9Rd6qSeRsvkCe",
  "key12": "2NRpPHnFSLMs7f8HeAsdW9GfrBkr1z9JuY4cTDCCq7f8e4Uuyvbg5s5r9bF7Rz5EkVig6PF81Zbdamhh8tvpKWjR",
  "key13": "4S6A6MvcSaxwo4s2V3FMBC5BYrKj77H1kwYriLmskvfkhjctQSdEKQwdXGfYNiSv7mgjBMume8Ft5ecZHV1biBhm",
  "key14": "4gGVTykp2mhrYjS7Teef5W1M7wBtvmB9NWPdEiACAqzJgZ7bitUHtVTfYRJTkXeeapAZdejgSEmw31px3cE8Q6bM",
  "key15": "4zFXLVhGG2nYPXg2X9qNPfzGKAep8Jbr1AVH3kcJLrnLPEZQ9SmpQAJshew7N5ADBuHpU3YxtWEe3qeYxhSM7U4A",
  "key16": "4UdWVNuGz5HvptRbPX6vrN5zKG29EpHqGEXiJkiMWW36BPrDYpAtQTVJYpHEF8SBXRoAioU4onbsr6KqmvFYboE7",
  "key17": "5e7xPGezdgfWRxwtw36EEAQHT2i7zVFrYTm1qtW2nkCh5DAsyGphHYVRx6pG3VKCfoQRjSDXaRGgpL5wNRxWvsTL",
  "key18": "5f27GpvYnCsrNHu9zpKNc9R95aq2GpYr26dewWQq3dr1sSeqn9Q14tupS86VbZzF1YUDMkom9Zdy7QQjd2MdsZcV",
  "key19": "5hC3LdDt5BBs7UhxyXSQAj3dyk2xpFoZndJuVmzntxZZznYuYDFWRt3osq2x1G3vzTMxQk8UNKV8CYxkNDVR6nS7",
  "key20": "5LwimYiuUDbn9EWhML3eYCz3oGPQBw2VpJUYsMw3xueJBP59usx1zBPhy2K4yGfZLmjUkiKPvD84qsk4PwHZywqY",
  "key21": "5pU4wzBse2Km8XwHXtUz978u4VhjA6yMwXH2fJQmNMaLmmQfj16c4iin6y3ancjJFbJnk92P5TRSFoaibCfQuUAF",
  "key22": "2T98b3yvnNEHtsWv15gZver69wyu6ekHtAimnMuyauUHCAZBZuawGkfGUYrdyfJCQrZaf1TBVskwmon3zEuFYAAW",
  "key23": "2j3cpqhNPE7vce4A8Xca8qoEwonoQr2S8zhTeTCksVY2qNJNFYBopWqBReMz3h8mZTyRmdu3AyeyzeqTvoknZx9b",
  "key24": "5ywTePvZV98Yk4yt5JQHpTZNu44oPz2Kdm4PfkjGXQzM67GcQGYxkPNRK6Ch8KEB59JNuzqfZGDxeLdL8Qe63FMr",
  "key25": "3tEen33Vsz4LPfQfTS91a9Nu8WWNYiSzNt1DEfecH6ZNVXUGbA4EqQwkFK6wuLGP4NgeLrU1NoUeyWa9Wa6drtWT",
  "key26": "uLz1ZmBKTsEG91SNkeLpSkTo8ZCjNhMTuc2NykpNCh7UusBn8mcZE9P7wxrr3LZdY17LBgV67eJGXyqnWtQWX4Z",
  "key27": "2gDsuWJvA5wMaFSkSJf4uj9FdieCCPxFYsvP466ZG3vFoVpHTwqYTdDLjLQRJViR61A65PwpztoSgXHaBL4sbFaN",
  "key28": "2aWtaHaBxVYe4yo38Uv7hFCrbnwJFFgkKKyTPjpkk535WRw8V61EfAwq7KeaUQrxpddR6Ti2o2r4R7wkVjyxFvcg",
  "key29": "4mYa7ENPWhv2rhruSYKuYRvPxAUTUTgoFjmJUwsCaTmNGMAWFFcvGnwASGJkJXqcR5iEhqbDxDo7NEqbSUG4hbgu",
  "key30": "4Yexb2Z2jY1bk29bLgyo9T3UWENRK6UpfsyBH6RKMAs2AZ3XTkTHaLsW4cBrxfBMiaFWS3PgQhTNSvJdv6yWEoDy",
  "key31": "3pLqDGdL9pTiEmE3e9CifJf8GcRKpDwaSYimDgTmWA2EpY6bbggx84GkHQPvqwb4jCQ5rmTTVzwMUx1m8qCBNiTM",
  "key32": "39njXygpWDLmd1dDgkxoegKkFBzc8TFfmB2TN6KcpG1RRsjweayRwtfYs48LHK7mXqnfPx363zsFzTLwTh3WxhF8",
  "key33": "4PZZrzqK6hamJ1FqnkrmnAMHaRKJdiscN15ZLMk8QQ2XtyRHa3wuk4P8ZRWKcbGgZbSJaJef9VYHXrVUjQnrVny7",
  "key34": "3V1TK2TdRnzX2G3cb1qqj29eDy3BgZ57PdnNs5wEuMkzedRbpqdfKRo71KizKe9XsQFhFUjDvEGSW1ZhtzH79dT6",
  "key35": "1xpwkWoBKYqVvbXjimMwidKmCMfvS7CcinQsKqhKgHZkQJSuwrQRXdNGrj7gLFAfcFmgoFiNaDMDr1vk21f67Z9",
  "key36": "4HnGy8HS7DpuShZs63xxSWN8hDnN9ftxcdJ5AcdLcXyDqpkL6s2DvrMm4noELUaPEmWR3XyK9HTo8XHw5XVzhn6y",
  "key37": "5Cidfp2NkRPTPL6Cq2HZN3xjTBB3xt35JEWhipT8u6sN44AWJHHQ5ppHH8AyYmCB5oYgqUDMoEqpoMiJzAtf6MLp",
  "key38": "5VFtobPXyFuH45BsZr2twAkyPJtPqfoKghgXBSp3ZBTzr96qQyZiKAFUogXtMRQVSCRVCN3ob2GDWDqhaiwb9uUD",
  "key39": "4jVHwQHBtaJN4Pq8DSf5pTZj7VS7UjuGXFJXe2jzLKiCg69G1b64W9uUXyBCkpWKmhv7obPNaxk2XhcBTJramCR6",
  "key40": "kGgTrcbUWkW4Q8NzgWZxEqQtBdVgSiwtoPhWQfgcG1TrriSfNDE6sjxh6UamwJjWLXkjLvviY8gCoWPETqCmtRo",
  "key41": "5QMrtnTWvGjznEDzTa4HpTVuTHqoYoCtZLUyWDt36P52LFmMfKkxDi5hp9j6yDbHH4fVyMDJAUrWzzzEHcrkSCGc",
  "key42": "29CJCPGchCk8wkgjoLcCP2iMyWAcZ4QhkpMLCuTzDjcrZvtVJU9uWdMs38PDL1B3wTdzvyfKFdz7xF5rxyNumast",
  "key43": "23BoT6hbKtHcyLaGVXdNE2L44TqAJcP6BVy99gYUa3WXnQe4BBAUynHSgGk9qwr1qMyGtLi6q34Mi4jap9BLCrDS",
  "key44": "4TZVp21TNK5gaFjGSkVZmRVSAQ42T3QhJSNt1asTm5WgYhb9dGU8uUVFvHAQUFw9nvTx5gaRrx95YkP8MF6uYxQu",
  "key45": "3ZhCQ8rVMPwkKangBQ5ivZhbgEBSSAZrmSAtCAAVeUWatRRZdgiF52DE3pbX1gtLoyrPNLNs3vRpaEcRsVFHcXzW",
  "key46": "64B9pTUJpdcQpQo9Qw4ustCVrG7EGGMWzHayXDBMYYHn5MG9bESRjBtfMGzpXstvEPfrD1BFTApnaW8qT6q51fQm"
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
