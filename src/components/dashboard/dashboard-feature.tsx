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
    "67M9C9SQAThv13Fy244VmjKytW7kTjAr2LDFZG3WCKk4mxH62FPYnnqfJr96fYSaisG3Acfivy4HpKET2L1GppQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BSkLAnxGo8sMqTdhzD5r6JLfCfr31GuNznMe17X3QHii4AEfkrKExNwXvPB9ZA1btDWwDe1SVThPUZM5VzfYnhR",
  "key1": "ysFJUQ6GAN69RzFcNDe3634TZqvo2fGZ5tRgAJeCJfJkHf95GTXA8XufEHQV6HHHWHYLgvXFakhmTKnvupCuojE",
  "key2": "4WsCGLE1hAe2ziuxBTmyGV4CGrtemUu2uZNjU9u1ttxdEeGt94zaRVws4LL2AS8RJhgRycjFCtEDNW5G2bEFM27C",
  "key3": "p7penz29wY4vLz4fzMhwAZcjQm3KVQSbgufJD1tQZQpC3Gms8z2wtUAE6qRLiJ2HphY58QbEFNksdDkpe7SeVgZ",
  "key4": "4nWDKc1sV5AmDSHkJHRBRs3nFeZX1uu6PK6VzpRfBX6u8jrqCi1kJ4ZSrhgccfCNjZVfmzRSVtiasbUWdjiW7xcq",
  "key5": "6ZATDdpjHrdJzN6GEwnoFyWeMcNMeLNUFgCT2ip9LetFjtUdMvrCZ5To8vuy6mfqreRUVDFwdPKgZbNm2mug7p5",
  "key6": "5uW8xiTowitJ1oL3riMZRv7pTrxieYYL3UEt6dYZEf3vg8CiL3KQ6tjE2NXD2fN7nWfjTqGovP1isDPqt3brBLCs",
  "key7": "vmJMFRH4nQDtjptPVeoetur3qqwwRCFwbCFCudZ4W6W57NQNcvEakSNsFGx9NedCQJYUnw1drB2TRZoggbYshod",
  "key8": "3cnWU4kuKnz5A4RQBV5MUBkgS3YYxgDkXxiQtVjnQ5qCD2yLWonb77zaKvPEuH85bmZoN1x9549L2m7po2Qxinx3",
  "key9": "3818TbHMHSYo3FUrZdxqQEwehuJqs3SqbAXJtKGnmWxzXingqL3XKNHSr4MeYwcT8Xqp63t1gqgY9XSwGKCfu7v2",
  "key10": "5FdgEhaHkc1NBtQ7zKQkCBuiCGexnA8GKLJNpwoY36DY2kfqoViPrGLoi9DHkfwp4GtT41kMNZkBbTNc3z3M9T7G",
  "key11": "4t5gn98tWKmoJ46kCvTNQfm7reF3A9XqifXNMENSL5bpZwsZFu1UcfFviRBV5KCERGcUY724Zt5K4RYRnxqyrvng",
  "key12": "28h5fEGbDtu9h5wqbg66J9i446GGC9Zhc9NxLKj4P9Szxhd4YDFkt6D8449J3FSHQQPrW7tzjJ9CUPpFYgHUocz4",
  "key13": "5rhABCtWNJEU2tVa4hqpMoLaKHFfT7CPLeC485pv9HmJvBFarr3GpgdrYvCpNgxdqcfBkf2ypBDX8cRxvcKLCAug",
  "key14": "4ZpaqkzSEeWCqT4qij9RVGPTm3iB3UFVVs7YEqp3CA45oZ1yfvzwhB6t6nwmZ545vX7psEEVc5fh8nPnUDYRWjEq",
  "key15": "3SngqRiQu1m8URhgzzMvRGtZXvX2k9TrFTWzndu9PHhb4snKu2c5KFQ9ZeHZTMZ8zsuCwYxdxpVPMcj6mKLp5VwW",
  "key16": "4V79ubPY6AV41CFt7xgY6JQx4ZjNXU548LezViZjGVVEB5epAWRRNw1UV4ur78WyjYqm9YPXCBEy1McqGw3WE2yj",
  "key17": "McQJorravGdJ5VYcDuuzrPrwrRSbo6Q3xWtY55dHeuF49hYp2BUf3sanSj8gEZeA9wnocuEubcdkrE1Ygo6n3K8",
  "key18": "roSVQQu3YsEhYXfri8dqbA8PzbFW4NLKd4yqavjei2s6feu2DATSkhLUWwLLJwzXiHnVetyEYwp2Sw1JSYHnwxL",
  "key19": "4mNcj8htczJDjxmmz3EgRcTW2i9q9pmyoN6AacgBGfaDc2jt5y6E4f4Y12JrouGQoNmAy8EXD4gi2rvEmJ2MGXsN",
  "key20": "4UWcfSrDRUKthgmZkM9A2Fnz87wqg71AaxDvjPVq4nLkt7TLTGeCv8CivKJAfBEMKrY7D1aQn1TvVR8CeR1qtazU",
  "key21": "5JiMZ1K8FpUGxnybBksrNS6itzdmw24nMx6MmMGu7thH7hAhML8pLbK4LdyScsgwR9qJZrj3kbaQBqupvYEmjjnC",
  "key22": "43ptpLepSQe5ny4wUWuJGuVW481fjR356gywi51eXAp4uoaQ3ikJBE1NA4xsMkqrr9WUym5VX1TTbe5q5S56KnAC",
  "key23": "2yQbzoEmc3GXiJ2QK4WDWpdXCJE3Lom69MNyP4MwtWGcMwu7xzExVj1WjYPTKAsX8fZ6mmJC1iWQShWTDa6Aqj7V",
  "key24": "2SZZhBpvxTf6dBoXdQgDzpaAnK4FvNWYrQtoeipxq2x2uGJGw7ExDERrE8trz6VWeECDYQTDxEyp2FTNqHarESxC",
  "key25": "3jb5nsgU9P5V9fxWZwjsdZu4my6siHmK6x3t2ktnx5dXwFTwd6JQadpX6uPvpPFseJnWd2jbq1wUTNFiZs3JLzri",
  "key26": "39VbanaUwFGrjugcmVAssVnxh8dxALGKwEuu6g4DnacLu1SFYqR5NSnv9z7q4bSw8MuTN5S8BjDmvC8Mh7Fk9VL9",
  "key27": "f54wEuDbWhSEJPHjEDQjXvGq6PoeCDRaaaysu6th5f6fnUuCVoczUDavUpzLa4xKuFpZeMQHbUDnjaosjBjsPoS",
  "key28": "YhzWyrG69d14akMYJyudKn3RmWHsV8iBHJ3Djq5zR11gXF37HQVoe3GooazS3wD7b7RtpGsnmzb8Y1X5o3CGwpS",
  "key29": "2DcSzpPjqyAbYhp7RgCdGP2uc8VhYsYVmG4o3cJaNtKUA9W6bPFNa7jp5LhtqQGQL3X51sEeNBJTJU6mpUrJdSWJ",
  "key30": "GAnipXVEa9Mwert4QvAkZuUmHaBzqJfFVenPfTxJ7TdZpk7DaDtimYwAjebAL68gSvBWg9KRyAjoLZB8Aep2xzv",
  "key31": "3gfZZjqmAZUAFig6qawsxmghGGYpp53tM1AmGZgoofcestsuWZSLTQL2pLdANDyDvD7M7QwfTYxRGQw6Co4LX1D5",
  "key32": "3L2k6CjGTtgmb6RYw11KEUKEc6nWqxfdCa9HwETRb4pTccxZi88zjKpRAmfRD6cG8FE1iBKve9G7Av7Cx2LFyzCb",
  "key33": "4JF2om786zSpMWG8HhNMw5roLjgyKknXemD9wBpDBtzranh1ZE3LVtsBosjSh9w7aYLHeGsBZfYTiS9grPRP1sya",
  "key34": "NqGGCDAFAXM2bgJS2Z5bcJXYP4vuBrg2JGp2Jp5sjBfkQWmfGKD3q6R6BZbJJivmU9cgFQDoZFLvNDhWvpt74GN",
  "key35": "5sqRpKDxFfPJ6pki8ZEhkpmp6cqPHutbs5sVwGvF6wuoTusCRsRkcUYPG1mzhcNeRXNNnLASDa1xjdhGgiDZ6zTj",
  "key36": "XAMvnxUfshvjXXh9Fvdnuw5FuMJVA5H35Y7Udyo2sbgJgVowt9GcuQiADn3Gu9A9hDj2U8qx9CNuFgAzxCtVcEH",
  "key37": "xEiyTuKLKFoJPTL5HRGjtbNBFWCBHjgdfNH8fMdyXm8HGUMwctyQAmy6hfCuSMLYFrVem6ipzDhqJmAmcqhNNap",
  "key38": "4tPJWgoNmq3RFBTSvN8UADeez2dKX5tCUTTL99DtPBkKqAPiuJHV1KnkUxPcoGrXHe3Maxkksnw2zbpkjxuaroys",
  "key39": "2L6CUZG2TxkqT9eFCGY6ZZA4fFRPtRAW15bmKgwhXa4KMAXGULL1vjk7hDoEBYkxHcEmv52u7KBC36V1dW4kMYVS",
  "key40": "55iU88evKRP2hGGFZRpqTtoF9Ugovg5pL68vypATM7xSiQKaxCrWHWurLEc5u9pC6VPJQpXYVWtVvmQ4nMDS8joP",
  "key41": "2Ju3AwqLqWwX6vp2vfr23ZAdvmxth63CfaiJajm4EF5mnVnHAFdJo82ttz5kDQAQQ1LdU9WL1y77vhtVemrqaAes",
  "key42": "2dTMpL5R4kL84W8nv4p5EZcud9Hyc1MLqUsJAM8Wa4RUjQj1a38TzHHQUtfn5nq1bztShr754vpkFXGjXGEC8BMY",
  "key43": "5GouDevMHwYUKmHx5gDo2kpPH34JjpBRv2ftPVn1rP9F8pEXY7SmnyxAgMrnbZtCnr4UPtnztyY3Vi2kXXXigtxY"
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
