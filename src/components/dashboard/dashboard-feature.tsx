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
    "5pzsKqFjs9Xqto3JyTvg2NURJsFWvyxfqQnP8jFgJSgkxy2MQCyE22RGtadKakxTxQpmyYUsDEAPnz9STJQAyP8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SgYQUV3uPS1VmgWTGFrHbSFkRHf3oA6daCfiYYRfmLexjB9x712DWh5SEsom9nXNnXNCZbUVGXhqA4SyrdcqUBr",
  "key1": "FMZ7wyM8ZrSjzxFDnU7uTMzmX737DGwdb2ttMg8wB98stWxZBoA6mmf8XAXaK1hbCauArZGptvxS5oe86pCTXC5",
  "key2": "5GumtATXkE1sV5hR2G9mcapZd2EPggN38hckhjhU3zCC9mUFD6MvoGQUDyi5n2RfCNDfHMJBqGup6b7pfZyzGgwA",
  "key3": "3TR89xkcu14u6Px5kc6o1kyvgyK7jjsRJmQZSXk3DDc8VcxJgthNbhzdu9T6pkikNLQesRZkWWYpY3gXrGg7d8za",
  "key4": "33QiBnstfiTZqeQMcefjdBc1pPryPPrEhdX5osXmXG6J8zc6okfAKmDUQN5viscUvpTJE7HzYjV4si81q8mN5NtZ",
  "key5": "4pycjnEWLEh6Bqi2GGxgQuPai8eTzGKGuhGtUis8DsS9892ZWomXMrc6nE55N9ARBDPeY3NNWQ3VTbnbE1XtCMBy",
  "key6": "28scGi7voN1Qt3dEw49o7WNQZi5APS3DHYzWiKBmso7TSaG9tJ9gpPuY3wZ2ZHcAWs31WQuxTxDdaQrLT2FQCoYM",
  "key7": "5UvRKYPqBTFNDeLw8hVASscPmHQnBoDumtK91UGu15VJb9s8fERVWfvsTfXyNXuRKsHCLovuXP3PLRFn4WxSWTho",
  "key8": "45jRAqQ4Fj1XNosFatkr9DePrMJeHY7MKiAYwAcHtguhMu1QtMNw9V7hE5y3R7ALV4u9QpU8vfJYpmRbHsPx63A9",
  "key9": "4ExjDu6ZbLz8DRimjbHhTEE7qHRdpbpBL8xiBVXp4CVWMS8zZm8rHEkea1HL7PQpiRtxqWKtXw37yMBufFLFHGej",
  "key10": "59jXvimhsUNe6gxxZqcW1cwDJJv7Pg8Boutq4Be2mxQrLoPFgRLXizTGY8a63cNzpwWZy7AbKAzxix3q2zUj51ki",
  "key11": "4xgRBiBz8s9Ge5bjaqscbboTMsbcHoufS36YhjNYdrYwvk7KBdVzZkXMAVcinahG2eBw98gxG1iPQ7GDzNzYzpTg",
  "key12": "4TTk1NFCH7GiErycmaz37qP2B8oH4mQPjR7KTso5UKhhbyz64zMbqMH8XJWBiieAYf3ucx4PFAFaKTVi8upu6d7a",
  "key13": "57VPbCiRfmFPe5rJ4k2YLytuUYBy3NvFZH365QDcyHzGTTFKDYkq6hjWXof35zhAfGyQDT6wXuf6SpvRe1ecYL23",
  "key14": "39jaV2yEHCFUYX2s9oJsHGyLMK1MmQWBiAwF1kh8RypbZX9JCNs3t7SvzHyhuG5fipb9QRpvKEK2vZvBBmaAmwbc",
  "key15": "2Z21XhWCwKhihin1SRLZUkx4E1HbsxQXHwtuTWiHrQDaLBFY4KYUoZK32WgztucAzM4xohhSyJAeusi46nnzZBCb",
  "key16": "54Qi7uGu8qpxNuod9hpgJyntipWHFa166vQmoqTnu65UBEruWPjLL6M6fQS4xKyZp3HBz26emm2woJxqScoPnRB7",
  "key17": "67bkMqsF4F8MZT7Xjyj7Qqbx8vER6EgtWuArRtJx8FgqdmNu8Z3y8B184yJEPvwkoNRby4r2WU2p5Kbgi4j8Mjhp",
  "key18": "2ZWQbzQkGhcZ53Go6eeHmLwJwmEE6rsBtvuQoUS159B5a9A1Vn6f4tPYwAaAAaQLTykCrDrmwpFBJU4vFXhbBic3",
  "key19": "5iUKK3uYk9uKoFG7o9BtHeNrHpuaKSZLS1Ldx25iL2KnMUQ4ru1WYQ37wCfrhZcyvTR1znnVUGhVLMd8ZoE3r1s4",
  "key20": "3Yw4zPETrCs8Bbhi6bECRAgWc7N59gJAnyYdC9ySR6nTTEswDjRJHWz4WnXi2tfKsvXbX6n11M2ZEqqMSGDp67PK",
  "key21": "3kSkaMfvnpLLkTndk3HUqXXpAr4cUpQp9jVhUxhKXTWun1MBMxnXn5SAG8o1AhF4SKpkrYgMvkJ9H4tC3BLhm4Hv",
  "key22": "3uRoaaWfuH6ShfnRnLaEa8yakBFY62UW9d7cJ3RL7sZkQUDUhNajucQTvpNV9xaKbWGHRMmgW6Pa3ea4ZxGxS5ut",
  "key23": "23DfcgwwGx74MahA8jCkmiiU3pNzv2h9tQYXbQG3ikEwBYCKyUNMyppQyvfdVhrtyeumjUryqDFYdS9Bjpv718H6",
  "key24": "5CbAtjM5CmCcnYRbNTsHhQHAdjGzZe44en3rgBd3gcYM4axoFkKDNYXeEXeoM91SX2dheEa5qwKstYnhxq2fGaG5",
  "key25": "5CycsbaP9i1HYTJzXhXxZ2UA32dUAnmauPWnApWXF9X8Z4EzpJCZTzCgJVQQKcLit8TEzdB6NLYh1LDQ6ySE2vKu",
  "key26": "5dn6JqbVTmoXfwJBiL3yPMMbRYF1ichALyZ1sRxPyk94nAoz43k8ghLMirQotLfkyCuUrgMeSrQkPcUn98v6NvBu",
  "key27": "3b9SM2PCNBKv8AuCUs1E5sRY7ERCpnCKRfFfKB2fbH3zcH9bK2tj6UiG4VuUVJenhP5YbgT5U579jATY4CZzsv43",
  "key28": "4zPDzoYRkDoF6ki5aAVT7RBokjmGhGyFNtQrqZFbrduLrYB3abxWgJ1cW2GCbgQmreFFpuUQX8Ne34KPQmMigVEi",
  "key29": "5DkpyRHF94WMz1MRanVjQAXzMzGZD1oq7dUMovnkkiGqU3w4KM34z2NC96D8wL5m37GXhnUZguBFb5Q1drJF3Lhm",
  "key30": "zybcHKtKun8arv9Fanjh5ksphrveeLQJAALyzdjAJ1wLf7Z4UVhaJbWCCRMgPD3EJpyKtWoGT5cWpFk36788wRJ",
  "key31": "5K48QQ7fqaSNCHZZF9P2ymVYxeccKrXRiEMKvgrpkixVs8c9qwz83yo8D9of2MjA5bGX88x9dXm6zQ9YQiq3WoQb",
  "key32": "ho1d5rgpovYs432WRa6Ewub3DuYoLepr4vGUPD6859L6oJEgiouB6mmeytpRu3mX5wQDUpPnYqFiVSm5vFxhDQ6",
  "key33": "3FLEfjsx8dpdqfRH5hNHvLnaQQD1qiJYBqGzdkdYSYSyADW3FLXxHdH2GQuNFFj2KBDjdPbPR9Bs6TozTZvb2CQe",
  "key34": "29pgJaZcmt3gN35dUQFYF2jEnJ7ibUQAPJD5pYwikxZQkVqMLY7cEefsXVLpQWFK8oBhgzT6ySyPiPnnRniXabmN",
  "key35": "53BoVdhJAxW4oUASrfZmnoRno5oFgFfTKFuy4ueVucuMRp93Y7wNnVT9gtHskeT1vuK56M23zZTZCJQZJPr2sdiv",
  "key36": "3nNscZfmsqcuQzhenac6rkmThJKZ9gEtrSutai5e477mEVP67upvVdP2BneFpC5qAqMfut1XvSLx5wwaRypTQuUh",
  "key37": "2qo5TaURJUzWfZxwEvgj52JQmccVLagZXT2zyvxihhid6zQz6i37LyutEkCWqX7wYFxaq4Enub23pLpp4sRGM9FW",
  "key38": "3GKwPEmR2c2Tyt8SuTnNtch55zozk7XSkyup8jmW1exhX3Mi7aYzPrhSFZi8WDFTM2eUr1QW8XZNnko1284CZgvy",
  "key39": "3xRXoFGg1zGjUjj4GTmF61d3GRGdDgWVi4bKo2HPAMF4CKb6gHH8YjbLw3M23CmPwMLMiRuJo4tFBvUegLtAadyT"
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
