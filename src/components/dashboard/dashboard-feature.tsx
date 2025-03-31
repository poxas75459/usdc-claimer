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
    "4hC2ReAjNtEyF7m6WLuyzZTioQargeqVgAsy7fcQpq87ZvJ8BNhimPb1drBQF2fMZqBxHP7UAzip14R8BMYxp8h5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MevMS9rZvPLcViojPwsqo2SM6KzLozPaMmbmkfy9trD3VUvhLRsXT8jYrC3SMiKmYPD62fRBipMFqzskahb8Ytz",
  "key1": "5AcQmPbhSC12D6z4JRswvwyvTqZUfoMfzvTHHWJZ6m1nzEBANmZCt4qcWhxtDEqb38Euo8soEuxZiW9HWmA1TBek",
  "key2": "fv6msgg64DyXUifzBXGMnGjYDiiGyxTS3qVdHHuCkFW6Qbdzmtg7esKUCcKR4Sk6XkAq4iutu4swTGSUCdgyLmD",
  "key3": "43LbarjYx5d9xWA3YKFhCdhQbpbziA5Abq2VCgZVhz3bwRL9UJsaE1iauiwJT3JAryTG7Z9RqLQqoN1RM3JinBbh",
  "key4": "491y5pSFdhKTtSxGy4MrbHybDBQLzW5n5hV82kzN4T9Zs72UZtbSMBi4Z7Btm5zN7hFzH3xCqMwmkhAqHDm7mUnm",
  "key5": "4nwkNtnQzKajiJVJoBdiugz9sJs6pA7ioEdk2wkjQZQUTi2AT2D18GdqHx6ZJpyWdpcoQ7n97LEP3GdhsbGv4PPE",
  "key6": "4KJcMEaY4UVJMNCiQSevXW7NupNCj2XsrLDZY3oK6QKtmPN9xNdMUqBFhfaW8BViQTJVZy5MBXUgsqTrCc5Ecj8x",
  "key7": "5xH12x7zGfzVB6Kfx4YPrwKbZkueXZyFznwaBEcMvmzMBgSnEeruBufTMuLNbGk68UHrNfkno8W6i2kr7zKqRM3c",
  "key8": "4HV59oqz6gH6gZYxw9xwF6x89NT8M1v5XsoXVJZtsWwe9L3PaSsA6T39vmyLU68sRdMf73mF2Pje7d8Eom2BakC8",
  "key9": "59Xc146bDUDHPq1dF9hedp9Qem2yrMUMwihkUpbNLR5RhP5uiKFYQ6TNSyeDwzDz57E5G1N1PeHBscMm4XYK7BGD",
  "key10": "5HxZwP9gHZHwbwV1oRywj5UK4oT86jvp5c2WJJTzuSsifVj8DnVvwVYsyw8S7vsQmDhLwhGGo9upqpLV1miwdFwb",
  "key11": "278hBEWXCapLSknqDf1Lhs5bafvSahdkkq9Y18g8yQuKchEUQFVAH8SMGaHdN9Vtw7Fb6aAFxM3b2eR7yGBt8yYp",
  "key12": "4zW6bDH4oNouwksbCgCKL9m3YkzSKrRu3T93xqrTv92zNRRMtRDwJLkJwEy6dsFrD9b8UATGWu9K7BitMkvFwFHw",
  "key13": "5PrqTjJmiadVp1smTdXUUUNxPPcKxVZ4MKCifKQuZYVK3z19FNtQDR5Qu4iCCUgRBXoTG92fxpgbTjYxp8VhLJVf",
  "key14": "5mdmYKXngiunsc8F6UsnK2k1wVtjrtzz687qSg9wa63Wz2vhpF8zzBeDwHxKbvgvnFpYpMJnKVdj5KM1nAGsqNxc",
  "key15": "5c2Lr9tSALKcCSTaRmsXDBSdwZsUvECMREawuCxXHprfZR36EzkV6pM1jSgfmV5ZHY4ufJTXAqAKDAXcRHyqe11s",
  "key16": "3AHawdyEHcycQcfXHvSs2H2be92zWyqhatEd1n8cvf7x9y9qRMRsfMb2XfwtsGo5uTYPuTC11cLTFZxmoBfz2Y6X",
  "key17": "3SgNoevFaamRVWq7sVNggGJBz3XMmA7wVE2YPyMXDgsXddeAo8Ckwu5TNFhbTgL5yQb8oNaWduGeYvJZ6duFbzVs",
  "key18": "2ENHoYyi4QJx8WqJcsRHUxpnCT46udhwf1WztiyvAPaVPF4HQwYdnHpKcGBxB2AHjc8EZtpQsqn4bS1P9utfC27A",
  "key19": "3WWMoNG1f9m2k6YfDUT4RBkkBaKmSdvwk8ayZtb6dXsNic6gXu4cLvWEjow6RQ5PUNPBech8DomUZPNpFqXT46vU",
  "key20": "2yScSaGJ2toEBRbp69QAHDDNAnxogq773nWUGfcq48VcuJNPPTLBYDgq7vki6vv6SKUtUmTs23dQrXNeFWRB2NMT",
  "key21": "5CmtzaNjPmYtTAVaBmE2CvWfEv87ec6bqZqzaKLMN5auWaytpwdQzeGV4rnw4MPPdvzeMyy9BoZT1pmgMm2hD1CQ",
  "key22": "3evgaLSTNZfco1HXwmqodGp7fRMDwefnuDn1BMwzcX3WqdxRiW9cxpqQtd2WcaUMjQN2C9K8zjA1W54sog4fowhD",
  "key23": "2RrEUcs2KXpMGbQtkD3gyPdQoUQ4fVZdBV5midVXUPJS3gR5wdofG2ZDJ1MNAYiMhiVcniy9VYXbTWzor4LVtUTd",
  "key24": "6Tz2Yegmn2peteQNAnztXd44FGt6bQmj6NktKLoTVf9YCoKigaacsQzgZ4zq4BkTmg37HqDeWywLhHFGJxu3Dn3",
  "key25": "2Hms4MwU1v6kAn4T47vx2REGn1zv6V7uysVAzWjrw9juafZ1iQtkE5EVK4tMuRhRYfKUAfLBapTsFfFkexUzhsxH",
  "key26": "4VZDCtHZzQYZF4LpbUeLYYLCE2s8MzVGvXjNfYFU2L2jUtkSt8qibwnNGkmahX6oGbYKd2No3aA2dqNLk4BSv3P1",
  "key27": "zKhUHeKiGoSrXtwpPs3irNZx7vqrCmBVrL7CWbmg6Z4FHQP6U97ZVRJwgsvNhoPsbXmn7pj4VWGMivERbiPxdQy",
  "key28": "4hLtYtESEKAixyQSz1qtSdofYCyoGiZY8A1SgJZEbnpzeiZS2W9MHENsDUcYkc9on8e1Yiz1Zisk7seMAWmmyCZ6",
  "key29": "5JMYUyFNChdUuax9WKRAznGXHGCziEwr3GdUufaH4UHNXiWudzZBwQczD8QHhCCY24QuYtkqRzhaiAZvZ3FB4CQY",
  "key30": "2EyaH54ceeZDoPBWVFV5m1pcQV71dFfjL5AqQ7yogtEi6ACupmqLmYgGM9dsXxkcAMMWiknYKurkWgbrZREimcro",
  "key31": "4koyCfK4Ms3Xnjp3Vh73ZREubamSNvGXc8hRCnJykrN4ffPfW78zaL3e5Ja9i4mgD5TNzr95MBKdYY2oBjhQvZPw",
  "key32": "2qgNow6wjVGQL6KXaP4yBzg4msugqxPWUfbZZLtczfaALCiLEwgXQM64S6BVuUYShrpeqNJyi7JKiqEp15hzVNtY",
  "key33": "4K1ANGDTqrmGCK92eztwsZD5DpZrVbeURw5SGWEE5RpFGFgR7gTVwA3vP3Y7gQjvx7AcE3Gu9CfLBcW9qB79Kuaf",
  "key34": "5GjMGuUmMStVHgpFwCEsSdjbasSvRupZFnyqWhNcptwng8ncEdchKaWbJbRNqhehq2qM3rm83DbVH5qPYdNp6vdW",
  "key35": "Nm7yyPe7Qzyi4yE7WNmoz65igk1vSMBPo2ynTbnq4RornjJS6h88YykVez6tcdQKeVd5z8ZUwfKd1JSaL2DAdfa",
  "key36": "4ffzRXr25Shc38z9WhzgGxL7KLp7BhbWGhU9csaV3F8mFpq1RLnUKkjyz4Na2TskJX1wsdYMh2SWq8DwnDMWc4HJ",
  "key37": "2E5NMtpydtJ8ywf9DnzFZ5wS712baCtfq9kyfL4DEVPDc71hfhP5vhxSe97K6QFQYkze1WZcNJy3hVrenVZGJCqc",
  "key38": "Dmyu8BCsiorkA6ibtJRhFnRBqC41dfwND8cBM7JVJ4rXgg2PKocDmoD1AC3piJXcCRd3kop4aJbMhqPnoc5W7Bf",
  "key39": "4D7HtoG8tSKL9S15qg8JYifBFhpxtditgwwe4L3mbLRKdMy5WxK3mBzV7h11dNfCpGKHwunx8T78ykpoTTgoFnHg",
  "key40": "3ctcCFvkjcWLyAWLEYP42t1AsnUTTkCzLiT1CK5q7AMXf2qpth7U6FfoDPJcDRzUR85q4YLyJeZkRGbid4JMKsAQ",
  "key41": "4X8wgzeYhRbBR2jpcS7yj414dqZ7uPHvy5hdqDy4Gqq1CVVtedFEssC5AvDS9FABwDpvo8xTUGLW1m3FxsKwY8HB",
  "key42": "5SGQf7eJfLoMYWXkizVGQLauut4GgNq46NtbhDUQQgnL5aW8NhDjBtDPrW9eKRKgsrjnsJycrbjiDUkwGzAtx1k",
  "key43": "rmWeg6KKcS7iAnR7Y3dhm52XrRxF1wMNNQRdSzwPKehn6sy3iB3t7SQzDA1Yuc3k2sPN9F396JeLT7MadwMUehy",
  "key44": "2dpUQUr7NUardywbLEoLMP4j5kygykbbpjjfi8FDiVnagXTjjesen3uXtTX4MH1yiksttmQieL9Yjf5fJt8V1esU",
  "key45": "2YNaA5DLKshpf9buJUcRGbGSZy5cWdPgdjEMsG9ePAhvZ4BFsrnSfd2SKrCqLeGAgKxRHcT9D6ctz5fsit8ncnH4",
  "key46": "2RjUTD9Msn66TsJCRMY7cA99Reo8L19NaMJKVMNi4QUd9FHpt4Dgg2153Yxooqymiii39FRsCfoJLmemERZwTDfb",
  "key47": "5AHZxAsbqcJ64WYcG8UTiGAfjPjJaLM8b322qEBmpZmzC15s2QAfBgz68iro3QHPiKWvieBLpAtb5CGy7QNi8LwB",
  "key48": "3FGgf7Pe6CMLeq75UAvUvE6jNLCqWWtNCGjGQWMNwtoe6fpiuFxsU2cXLygeAArTS4gCw6mG53B96Pn7dhjWbMuZ",
  "key49": "5HtHq33Q5wWeHyKVSqU6PYYY4tvKcANdtqUPu9QecqWFTykf2bT12yLQ1LKgQbtcRB3TUPTRsLALpUT4ixmFEhN"
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
