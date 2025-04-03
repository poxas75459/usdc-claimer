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
    "3pukBKjZk1rd4CgyR5ZQHy9ov9JVCiyL1SFdnBcJhK5q1AezQbFw3UWAAqZ2fsCYK5kyJvCPg56jFZrbkbL1NT77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nh3ne51iaxL98425f31Fq8graM85gRVTvBjo1eZVuKn1qNdsaFrYEPtycvRsnbZzxNnupendCHgFw5LNyThBiGK",
  "key1": "5JFZrE1vmcRVVnKbyPJjwdfNCYrP2qva37w6YampsYb99ntvRbMzkwmgUzLSvVeZDUuaPMGQVsEGdL8pZMucY78m",
  "key2": "4baaio4zgajjSYPBHs1wBzVT5fjKHzuH7uWu8n9RZy1npdSzZBeFJF4urH6Kyvf3MKetWoEuHtev4SWeAf46xao1",
  "key3": "55HgeUn8YBvSsRgXTigMySi2LerMHfcnwpNgn5qQP4P9B5yYAbNv51xzRuYhm8mrrYeyhQkdQS4QdRZ53RA4yTB9",
  "key4": "2VEfpvj8Te7YEjaGuV1XgBo9ph27KYntAJS8Tozo94Nd8caK8W2j3xioZEitksQMH77AsqCciDrL4vv3BTLSLKm5",
  "key5": "K4jGtAYkn1Q7u5g9psgCoX2KWgyenCn8EUmpZQYFS4c8zECPmJFnaaiqLVcFWLPqRjnzbhCyaEog1uGxdJTpSf9",
  "key6": "2maGbPvZmX1XZBRXtsCE2yy6pMyThm88WDwFxBzfUi1WJEdWYyaSeUpmMnUKvDz4Wsq7PQJ8xsbbMnmvAti5BXw8",
  "key7": "5dyo59rFA1ampWV2eBZrQ2Sb9LorFA2Y93bPwM15PjCSgy6drAmSqw3kxRA7ftzJo2Qt1MDRU14ZBioAaqwtNQip",
  "key8": "2he2bCj4zauDHHWyLY3NeKvp6pPgM1z7zHsJFeUGhGYQBrjoQE9e1iiRpmB1US6x5niCHk8rrQ81VZMcBvoH64xk",
  "key9": "5ER8hi5TLaJRKou6ozHif1bTfMnVAmi1FqmEaYgVdr97ca6upiLqAkH9V9SoPrsJUiaF6bwhds3ArNS4R9uJjW1w",
  "key10": "2PZwrMMqwNZDjk6GaNUhM6RhWRqArConsmtukuoSciQZFY3ifW7Z9DB67GXRccjzmiFo9q7rySX7pF2dk2U8Yj9P",
  "key11": "w4GLZ7nhTVvaxqB9LBMmodH8pjLz2zthjBsefrFsqsNoZFvBZ5UUwPu7JVoREfN3CJGHoHBrTGQPDgCG7DwTMiR",
  "key12": "5isPrKdJaWHmQ1uN4GtgWpZSuKSA5aWqWRcnUq6ymE6rB9v9o1WdMvGCFYphu6GzJ7BMs8jGSKgF76hJUQpzNnuP",
  "key13": "3kdEG6N9RnMY1454UY8rz6QeSqANG9RQbARGG2XsBryCvtvm3CJ4fkriE2MZJ379WXEi2BQjTBqAtrMWbqx7qf4u",
  "key14": "4QHipvujaanSj7jy7qNbCDbjzcET7oYTu8M6xo2EMEYw9DdtiMermTyex9PC4FLicaTgrxzfrPALbuKYcHWieei5",
  "key15": "4Asjgdd5eD1SrWSzzXYs8jiJD9sdLgmcMhgU61ZswotB8qGh2euRAFQfQ8u2p8MtaS5oBcLBiideq1pN2YZC3zfY",
  "key16": "2RATj3RtUgARFmhN4Bby4xk4i568XjuCrrs3a3UFHyoXXVZVsUW9R9HKg9jdDxPCYYt2fYr1mc4T57gX6sr4RZQY",
  "key17": "24W1jJUerGx25WAXo922VEnpuHz6QCBRaQMHpQTee8GZ2Abh3i993jUKJv5gd8KWDzYRjXR8SoV852tm6jaQwgvx",
  "key18": "2XDJuXNc6KGu8pDnSYKgU4GmnW3fTZeTyAvEEvdzJgCPPjG4sXmGTeFvFjwMQf7jAav2w4v2uZgzBDxe2aeFm2M2",
  "key19": "BwmM8SjjSyjaBSyjKswRE38WHN852ZQ4mA7wQx6djaSauz1thbZChiRpz2jUj6FtpS3As5pYrbpKya7NcxGasU2",
  "key20": "jvhLV5PNpftgoS89bpYjSe5mxeSDaMLuwf8ZGZuXJsHw69QJnAb2Q6wdFoSTzcwZMGvoFJepAatm8PnZ4UpNYk3",
  "key21": "95K7BmFkYv5fVAS7jTzozBBzDjBVLoYKufcczZfYAiLtfZQNbm7Svg2ogiHrJS2tNx3gyW18z6rkUbvBqxwQtYA",
  "key22": "szCLHvYCxP1iUZywKsQULve5fz5LmCPBRRScuhNwAaHwv6XpSLd55Y9wZmwtWwHVuvnTgLtbVgNNZYXkeDg4iGW",
  "key23": "3gMCnXQmMiFLmZwDeQ1rr64btZ95bvGh2kKYoC8JvuKYGpvLCyrkr7ViDMwUbckmVVxZ6o4suYo2QP4BbVTbaLzY",
  "key24": "3mVe1UWFNzkke2SKB4kMZLc4seX7jLYSjg2V6DvvkuPe7enejbtDzSR3oWa8G9zKpQeWes8suFQhpKXnPrWoTgJw",
  "key25": "48wKiy3qGEzLcQDApBhrAHmG2ATensD1jq3qVNVKXAcFpTpVwvdqFqSYiBEgf4jzSE8fggm9oVwZaBHSR7GhYf9E",
  "key26": "35xPqgF4eEzmtQVKi2w9fHzPJdm5SvbzCXwSgsvbAQbx8QPp5eY1WStHjYU2t1WhJrWukHZen7EiCBTJPf5cCo4v",
  "key27": "4MToLKaTnUdabLYwYURQccd4mv6fZirBK5YicuVGXgiFLBsLjArww6PmBZcWgtB6MeUYmxJxN8aiozZydn6vfqeW",
  "key28": "5sQmKRQUSwCP5JWpx7RTeXuGdsqUDYDY1SBhxSAg7dm2rXsqkxJfRCbkYDhxuRj3LauDXE16Eee8Jd2Zv84DFPo",
  "key29": "ZuRRYv96fDN8ajYr3NjUyTgVVy81zDeh8hVnKjeFvhRT1mrQYzMoY2tNkifFayp8W5c4zvPJG9uqePvmVWmxFYe",
  "key30": "5RTmV9PVt8k37HNuaNkV7BXcX9AnXABXjALhgFveZ4BkyhGxFjJyHym9cT7N82Wra8LSaLTnDUtUeR4t8y4C4LuC",
  "key31": "4QPuBiHx7noML3kqPpViMCpoDfc61Pg2NJaAto2s8tCwUY4AFytaqpjCjwAap2fAqvrVuJjeVQmW5h3QTgVMBzmp",
  "key32": "6gwV3Bnmnk96B64RhAWssN2fbPEjhux8Fndp1UJffvmAVv8jqDhbBiLczTbCChPH91WA9UN152zxju4vi6P6Ma1",
  "key33": "3R9jdTEKGou9DfNPtZDZYFdvECHqoKZKRjwmPjT7q8Z2cagngzzSz9tP9517rEvAAm6duSyo4K5Erk3811KGMZLD",
  "key34": "4KGqfD52vgCrsywiZSHsMVYLMNtQwqfLN3PjC5wcw9kY18pEb7jjg48evQZoa7e2o98jEQSzx7hfs1suc1v6PQAx",
  "key35": "4mtkBs2aWPFg3Mt7WwNPC4anfFaPtwHECKoE5z8ARjc2s1q5HKQcanyaU7j9YiSXi1AgedfjrM4UmFRJQtPgs8Jk",
  "key36": "jYLkNDT6yHemQk75VSwo4RN1tSWNEYnVEm25J5cCtbjVtFkwtzP1FUP6GwQno8Ac82BnQBhtDcLG76iQTaJaX9o",
  "key37": "2oaMuhLgxJjfQPHHSZvQ4FGbbSKsP8iZjmAuoCEdXn2StEhS2S8ZnQQJVhF9mu9M9EjPtBgnvgCVuiGPxNYPE3BV",
  "key38": "646gRvqzG2VjT891LWuw63NNYjMZ12PFR59tSvfXs2pzPRMXLBkszuY6V6qSXA3743E4o1q3wZY51TVmh61P9yZ8",
  "key39": "4N1AzXfJVEMXGyRGKvcxcsStqFv9dyPh5B3Up7RjBEsjTMLnpPDCtumS4hQL6ngUCzmzPfYW8tKyQvh4csKnUT6",
  "key40": "3VAc7K9WWYJDmqxXiMtco6S1UHwQg8p99froxjmEWhTBLLMhZHKb7reemS1m5AEd1bNQTFHgTdCukcepfPGj2KU3",
  "key41": "4Jrk8aduSKNED5mt6ChPT2QyfVsceG36amEbixRhijPgwB9xASj2ihhhmCHU6H1tAWNxeqdVRcsVu7sD12BCzLah",
  "key42": "5q1sa7NQgRz6EgXitt9Q6nYN893gkdG8XfCNaEp5Mf8SHxRbUojqjfjUxzR6MFWyzWTWNgU3zonRTK9rLsRKXtdH",
  "key43": "MuutdFue32G8c1BXGcmZrtbVz6a18Bnr7mAYKaY1oQ3u1GSKFBZ3jECSr3EU47bfUXjHgGJSxVe2Jde4R4SY5Hk",
  "key44": "5nQjWKjkUaUXjDYfYqEbQ7fYsJqLeufHLbd9x3vpCqxDsDv64neSpstiLHDfcHMqeFubMJ5xbXnrC5SchQf4TAoY",
  "key45": "5WQCW8mJjHZpf2JUyHFh3ajk2AwafSi8xePT13wNNfaF1jMkyJWfJa9bzRXpiC8Kv2woKr4TU53iCWEqAjvKgCCP"
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
