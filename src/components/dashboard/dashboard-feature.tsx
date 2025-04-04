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
    "5kxQQnxKQpn93GtRxsfFApTHRMefFfRi2SSQTRWy9eEh7gedn9PQh4ACZoryg6Ka36wVXSbM3sgpxAeos3ugPrTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TKB1daVcZZ39DHYb37F3cjVau8As333zdP7xQppVn3bZAQWfbNfxUi9j9t8Eu3669xojFhRE3kBpwYjCqMJpgM9",
  "key1": "4PYbVEf8pYWPc8GjqU8QQHub7bycrszoqboArwnTdouPzPGSJBkh7AYzR2YMaXmDANmjtAzFkdF7DfX63aQRaBG6",
  "key2": "fzp8CFPFvfix3yETB1puALD7LDgQQRuu1ZDt7pGgoDJSJuyKNY3x43Xky3hJ3fQicWteXnxjir3MSYcrDsELZGX",
  "key3": "29qBdZQa3PWhN8eQvkCq9azkGeEyEBbPeKqEhLh2rRP5k7tcmzE7Abt4jkwb3RLpzdiEoNdpYGwdYAZJGwPTanHW",
  "key4": "5noBmS3fVxM2rJXJ5fLAEuj5SwpL8tfARF5eKpVKBU2inugruFgsd1XP9So9g6r3XHRaRYneoUYGxo13p1Ajq4vR",
  "key5": "3puPmKTeFV81rFDTEmf5exPEGEZJg3UfHUm8DFtsnhpCf2D9rM2yaAdHwuQfGs239EAnfLTgHsEGR6qCunazYjWm",
  "key6": "5p2tsyURKSSJJvmJ7ndqw1tPAhYjVAAAcyzbWEXkb56p54ojgtbFGHS7jZyDMteLp5UvKktmV98iWksbs9x1S3rN",
  "key7": "5eLsE99AYaCVQww31M9NVEb1qBUo4525nUgpUHN5WvanvVVQtuiSEYkswYXWFHa7AwxbS6LHNuJmCLg6txVh7FA6",
  "key8": "53o4QwsUsS1e6Bp1Yvyj9nRet1UrTKpkhTBMdrR61EFhZgsEXKjhDZehD7tyCQ17tBvAZ9se9j4adX9Q8a9MKsJc",
  "key9": "2bNX6K2njPHHtYvUDskq5b4MmwLcPDJrWatRwKhVFDcVim7Z5c2Wxtrvgoh23ti5juFsBKbgxtyiKpSRSq8mqnYt",
  "key10": "4dSjftad9y6JyfZSL4vcmu3ASDAo5L4yd3Sarx56PtJXiuUcW8MQSJBxkqV9vn3q3S5nZcDje3y55sMQqKmpzA6P",
  "key11": "48yPsJHMiYrroiHczBEsL9TvQtbpAXeW5GNCFGHjDSHtkhWhTsqANpNagqSBT1PS3qHziNmh4ZQRsV96apeNiYsd",
  "key12": "3znMK3NfM7kLBbanQg7DPRqDhtwgzgt4woZuzSVELCKyRSbbKNKzGo5xDSvgyvhHkDN3RAMf3EnJZZF8ZqsPbSos",
  "key13": "2pNuHxFnejUd35yAMb1idXjPPvP75cKZP8FrUq3RvwAXJSFveKhiEARy7qmXpQ7xgUzgT6KcXsqDeH7AP6qWz9S8",
  "key14": "b4fKHoSnXpLJkcTTKVyvjcz1Xi3i9vaAQa8EgrtigqN8RGRXq6Bnd3KAnQGaj2SdFkagyFjAMFp3SmdiTyyuobw",
  "key15": "65PLFvsX9EhfuWwE9MN5Hk6YWBp2J5fSc5MjmBvM7vDqWtauGcUv8SebcK65fvenmgvgdX8LzsNQpdXnLvUmGjsw",
  "key16": "34BD1E3cgAdzeHVHd9Q1e8hbJcvjeVpxisYtEmRWVkZnGpHsUmFJFT29HK5kMXXA6dY9pcRzrpAzuWHKAeaYfm5T",
  "key17": "27umMtDtDLsKvfHqFaoUGD5N9heUvze4Ejv8epoiEVzeGnyAqnXyjQxPb9tNJMsdDogDXbQxQcGn4uUrQnTcK7HP",
  "key18": "66xktdVLQaQhSUGQwAG4g4jGw7qj9VKFUbLeLhtdvJEWHsbr6zGYpttRCmitVqn6CgegGcGU3X5iMabBYkLanjSs",
  "key19": "aRbPvrZjMAjEL1eiK1ZbP2Njb63tAGEZ22aA98takSHRYiCr9bz1RtqkCtBpmaKGM3qABJJY38HVfZYji3F4bXf",
  "key20": "4gVkeKJhXSUGgbmyCU7BRRrHPSK4171DrgkSQKLAXu6koBDE9bR3H6RuM8Kvf4cUjfMPKcrYe7gezhWU3yatpYeC",
  "key21": "5ApdyujbySDaZPeDB49PrGewc8htpfRZgyZ6D7oBzWohoVnMLT2uuPUTBrQNCGooVyeHZ6MkMD1Kba7zYpJy188a",
  "key22": "2jY1eTPRXTK5Wv7cFofKqZzBF85nH97xSRXCPvSwjcGCi14qph9DfQNbrQCt4qapBpqnjhJzocqyoNmWUqEb3YeK",
  "key23": "2Jyu58BuZBEW8zjDduF5Da8jSgvttritT18bAMrH1PdRGpfCoB1XzMykQHDhtcn3Q6HnJLx9j6CHKxfwcszgE8tu",
  "key24": "2ScY4ffG5ykCWhDPEyJKBpuuLejsumFPaMPTRSVSn9Kv3rWx9xXiEfF1rTeRAUcX3t16zWG2WsiMgFx4yRbAKFHx",
  "key25": "4eCqwXS8gvH4nAzWWzWQELdmrq8yNE8fNBi7LSPxn7ZsUcJbCVKp8KmLd9sbJMD7bbJkHMTgK8M7Q5BTVK1BgxhG",
  "key26": "2zMcBvtHLFdoeYd14jMpri64weDyk7pNB79h8ETMC79EB6Yjj3AYkPLi9cS7YAwSxetk8AuXQHRKwHmSh8ijEnMB",
  "key27": "4fmKsHAhn1GgK5FmzDMKjHmzBCRG8xffVnvTcSSXxG1ifTg8LjsSG45zJcUekRGfw2yhrfySpg9sttHZMxba1xne",
  "key28": "2YigN4tDbPGLL6c8U3TNqeH6mFK5HBMmrV3SXDzQHZNSVbNPt3ZaJfNgBYNKxjHTFwhxVkEsJFDKfnwfudnrQ8MP",
  "key29": "2Uop7qMMggSzVbRdiPp9dar5qzmDrDCAEX2fAWz3C2PcUop2ra6fQK3uaVdqM9SeknvUaGfW5kAy2PgPh9iRrs5f",
  "key30": "5WAWSeWbdM6qCXZkqXTNmbFEbx4SdKikTbN5duboBUX5cxTMhEY2Y3f9pwKt8h6Mq62umYENp9gezgtZwgADrXZu",
  "key31": "3xi4tCxjBDnCxQYXsNFnxEAwvkFh967dqMMVxbEGLhK29T8UKXYHhdVaSnhmUWt3rZbQwoKYFLa4x448Gz43aj3X",
  "key32": "4DqhsWvpDbJ6B2nkY7KFqEW3uboeCVjvWaYaSM85Zdu5NuKMgvUo4ehhaS6Fxd4WCFs7b2Jtp3wy72rCgKxx2hBF",
  "key33": "47cBnM6QMoaFBFvY5zETmhoBA96p3qfLHayjsRcQ54V4T342Eam8LZdQQJVdBKVdGRh2uJe3mc8v7HMn1rcQDeiN",
  "key34": "xhRFmZGzJ4YHKBTJvt2BXZH214jbZKDW3T2auqwSE9NFx65cDfsRvEgqNhYKFW6tuEymuaQX1hDpiCyLhjNpc7Q",
  "key35": "3ZTbXnceEGNtxJwWsCHoihnd2hcYKmKuGHGj5pqhxDxmLWxg4dJnw6E7R77oc36wpEvxW58ruWVHXQcZWXe23Hc",
  "key36": "2HsSy1SEgdT3UGMYHCFAKWsQA9wyS7VQ7hernfGq17yiTKatY8LWkyVDL8LJgvo9k2HP4vpnf3h4Cf6mQ7gXN2hi",
  "key37": "i6DdoYQUd7tH2L4kbtqwLeJgdvDsF1jUwtqE6pGEuZiCy4yRzGZAGA2V2P5ymcnZmpBpKx4Ffd7xRc4ki4DcvwT",
  "key38": "Gn5s3w2ywEXDhoDwWZLDu51esxghtyHzd6S3FRF3mw7mFLQakcodt1CnZXnnvhwhPUF9T2cqpdPZpNpjLAuqJgx",
  "key39": "3rVNPF9zFEjujfR2nUZ421qQnHhEUqntH3hXN9qAruD1LJuLu7Zifv5D2gFQCXENZnczfHRUCwZbKFvtkmkKufGf",
  "key40": "NCTS2BFiHxHUNE5m5mJb4buM2MRkFbe9jH6LdbWqUWKDtCuY1wDkcdtCsrnxKz2j8aK2zkCxAhA3KvbiPJ7sXM5",
  "key41": "5odbvNK87RHNVRs91PfgJoqJ8SUzasRsCYkBayEk3iMwPhALGGnW2HqNDc7JDkmU4ZKQfekTxsYTrpig49dK9Nb8",
  "key42": "2Q18c1kFnbcuQt61ozPXXLF9w41oTAuXEwTvFUUsKE6TqBgRwFKue5ZfKmZVRF6odxfdkXNuynnxGjTYxGX5Txdw",
  "key43": "3XSwozuXy8mGVpmRjqajAgZhqM9XiV1quySK3fyBxwptMdUWYW23cBVGk2YcMbmHNdKJFmiV85eByDQP1yAko1oR",
  "key44": "5AQjD6RPbfSDFWYeagpwFfHrs5dPw2T5wvWLrQyM3p7AR2gL8umhAu7bPFtAFxVgKBTuGJ5WnEw86e7ieCMpMZL7",
  "key45": "2uuwUYEKXTWGnodpD7afYL4zYkVb9CafVSHLUbBT6fbmtNJHsgLjryPQe8mGm6tgxTFaMp13Zjf28JqZMNNjJNsy",
  "key46": "4ucjd2YxEwwjUffpZwShS5hLNcj6U9EgsAntW74GSYtvMenUFHNNAGQEddkmNVj8L2LBhvfDWVMAvFxHr86hFoKb",
  "key47": "2QeNSMGAqDH7LV32xfK3kWYU5ixqb5WGaBXsKEqFNReyu55iFwEkZeRT32MZZLBWd2cmE85M74Vw9tmEbix9Zw2M"
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
