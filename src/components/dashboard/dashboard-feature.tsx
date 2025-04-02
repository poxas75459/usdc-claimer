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
    "5xzVWiEH6GrNgF1UKn8zWeQH6ZhRtykeyU99WqRyS5CjEvQAQpzLx1N8fFwy7YcttmBktmYJUXtyaUrgwRy6QqiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "446rYAHp64RhcTK2fRr7kDZJjd2jDLk33uHHwnUNkCdfKZvo3cadvj6ikXM1uMEaJfdiMwVAGA3v93uvMYWP362P",
  "key1": "3MMSkhgHc7kSCCn2iNwqjc29F9af21UrresgxHvZxSbVa6Rj4FWPemNcmRJJyyztjRbp7Z9jtzywHNspJfRzYyy4",
  "key2": "3ZbiK3gLniQVjdxLrxMAHSXhZJFoSn5fBwRp9ztGFxY8bTXjopv7UffSFa7DcMkb16CDVt518niKL4P9K85LJLwN",
  "key3": "3BmDZz69MWBU9DPTiXw3WLzsQyc4pjYp2qY7vv5dBu3r2yBSJuK2k6WZbF9CZDPgoKGMcjxaCJaoWGpSUUSxRnoT",
  "key4": "oVaytEUXSdbEY1YPP23TSautGHDkZMYMzJQLoSDqNZPiydvzQiyoSVqPtVsLSCmS28ccd8khrdv2XLcJkBDrohx",
  "key5": "4sLWp5YdsPmkwHwQS1KeepeUV28KdteZFheMNZbRN3vLqKs2w1f2ckq2GzgoFFhwUt2qhkTBcJHjD8ouzRj5K2iK",
  "key6": "bgCN6jL1ciuvCaP35RanLbsPt2QuRx3tSHtWMprRHisU9gVwkH1iMciKNBo2RS1XAxpAa4GvV8U63rFoESBtkha",
  "key7": "2xq7bEPHwQKnPZh1fW3kFLibFqQzqxkgHZE6vkXb58sK312Kd2VG2oVcqjeHokhZ55fdw5PW5vNsYF6LWKY4YF84",
  "key8": "X8ByKz5LMLyzKSycdfmS8KuExqvww8mVgRVKJv6iH6LwpcSWQboithkuC4xXBN5ho9SgGm7XhHJ4PTeiXidFPnd",
  "key9": "5tJiFvBABBjKM4WzPVovfNbteH8xU3v4t56sXxbZo1n9EJgSUmMu8j6eoYfuN6GsndwAFQwcw51b125LyrgirDwn",
  "key10": "4CjLvzcCWhqgMe6x4MsYCVYBwZqieSRzsK1huCD6GPpxtpuN8F7qm6sBaEHaoFwPMJNu4npPsHKNWVLFKDHufB1U",
  "key11": "3KkJCpthqPByE3ynrtkTMJfSKJ1orJqyj12JagcQxGf7psNgG1BKouD42gEUbtmRBYnexYs6mAZhbm74Cn8oug7x",
  "key12": "4vt654r5qHYkmWT6csa22jvwunkUwxPynPFujwWJNTJ63HXg18HLMNKwE8fUqAfxiEZ8bjbr3r591S2kh63m2bFA",
  "key13": "2BB4xGJJ1o9Zn9jCKhTsqwkMssSq8UAgiEFYHWndP6F77NGtzMvB5y7zGLKVKZbVdHd8PoX3aXtnQ7FVtWYmNAoK",
  "key14": "9zkFQEMeLvvVXvSYB5WfM8onuuvPPHPCxoz99o9HckW4DAgvGeRgRjLJVWFcbZVYfdJqEa8UsCLKwqpcJwzEaQG",
  "key15": "9JVMyq5Hy1ZXJDNZGA1KnnA1ar1QQMeYNGZhdD5QQdsXq6ciQUfWy2cLC5jLFbSLKQ1rkCnouAkD7EZTeDNj8YU",
  "key16": "51s9dvSEyqqbi1z3gZFBCyuJ2fbDzzJhobhMCKCi7rVepxwLff1wEtHuVReMqsiUthD9WzCLqWTcCM2LH53SzBkj",
  "key17": "2MXbRT9poTFhe15brrzc67yUVRsvB23jB11258VtWzhqhrpncACyHnTsMqZ5vvYTSWKfMRN83xQMRLCSYrCaoE2d",
  "key18": "2AeWdcUcU3K9LoZh37kuF9brygeTEYYo6AKc41tTwxPoX1WqqKvqtQQUc64qHBxaP5XTitGyQTnPkHAQN9k5zRse",
  "key19": "5wfziBE4Dxe7FSiGGsBCsGmAgiJpfzhLP1pPrsgh77niW2KUvicLuY4FWiPyKiQf77JFAtqJCgQfMiLiRVNKxKjw",
  "key20": "4KYCgvHJHGTwkdXSrDwxkKe6YayoJPynCr7myEMnQqzoDAFMhpA7Jx2djraFFBoPUPAxMTbxm8aGHHnYGGPaCtVT",
  "key21": "FpYpyNvd4i9xEkJRcFb5RbbfdAktHZ6F7TZWAXC3h49Ky2FDtNCijJv5utASDSdmqSWCBm31Fuy8i9XwR8P9dQZ",
  "key22": "5i1drSv5DMTuL8CJ7pX1jwY28QCHJfoEFHJZPYN5g2s32jsCJde5XxsJzwLJwujfMvMr4q5rhDX3CQby98uXperj",
  "key23": "2kvjoB5QhmejwXjzZ2n4SgQiz41pWzawDNNwRzSRmkFDkknMPyuQZfE4jvqdqhZgLXwzuhsLQJuDZx7JCTohu6yu",
  "key24": "JRwKQq1GibSHi7wJ6x96LsomKQDq4njeKXCTjmn8ZnfNjBQKjqQEsveaL96Y4jgqXYw2NNGWXHqiqwBQ38qjzsK",
  "key25": "4DHd5Nf4ERQASx4gRxSVsGp9Rfk4aeMR3QwH83QRPuHpF1m3U4SbvbiDmUjV8yMZnqHAMH8R2n1S7AqLeN7tvioB",
  "key26": "5B1PggZm391HQeDdRDxTbMNk7deLnrQ3vL37aqmnyFFb8h1S3Wr7WLzCXRjdizTCzJDmtNXiNJJeJrQZnAYBEkHF",
  "key27": "2xNb4BRyfWRHDTD86QvK87EaYsNosprN9tKQB9eSQiQYCTX7dYDEybunMRh6BpBT9W9dG34Rgfst3pJ4zEXG62m8",
  "key28": "3J5HwDQf7C4Nm5jzVpJgAwwQ6dEovfpsC4Udpyyk8a3mt9cdJMzojsNRToSMfCWtLiBZou2rXF1cBkp471oLNZD",
  "key29": "4nMgV6KL3jZ5Jjay8fwProa3WnMQxcHnfvNHgmyrFh7Yy41nY9GHDPD1u3DpuE7vh8iha2jYAWF2LVeHMygQkJR4",
  "key30": "25muiYG63zCy3iR2pUuT4FH11KagsabAMemmt2k1ZzfifC9ndZQYicoAC6DQNCWccHZNAhExroe7otf7ZK1yZDve",
  "key31": "4VL1tSE3miJnBASCJ9z26aBkojS96eoR7kGeQquaHpyFHftkZauYo1ufrpHrpWsYnQ9JxQx2LDRzkFniFBAx6K5A",
  "key32": "3mioCd9s5UsEMASKu2QunTwVe7yWC1aDPSKFHs3vvXPDWsVbG6aMbaU4jCCfKnDQCUWsfnfqV185PTNkgUBp4crj",
  "key33": "2dXnHjZeprmB7wM8VTGewuHyBEJwJiGB89t9E5m5XnzNvXaU7ZXqwMSSBtMzxRiAn2kaYoJWHwZ4K1SM3TaHQ3pR",
  "key34": "2FXPBxEhSNt1zvJbRe2Hp6K1DvwGYpBAiSSonedS1YgBuv3vwbehECxh1wJxSERjh3WdubdG7MTCf3eeeiazeGpB",
  "key35": "eLJsdZdvQvu7vbh1dXfEydZYFc42D7cCeGeLs33VbHFdBK2brFGEc66iD5s71T6y3TuUmFQAyor3Dk9CvUac38Y",
  "key36": "5onkUXQMLFHpUmSR4QebSYLodErMdpckwqEh8jL8gLZGn3MC7Rxa4JaxneUimqERyvvV5PzLFRHiMT7VFiFey3pU",
  "key37": "5EvmTXhbndHAzoQBmPowPJdMbgG4C4kkNKyaNaK1Xh1qxpFDZKerbeuj3E3PiJaJFx4DfUi1agvAP6pY8qXHbW1n",
  "key38": "3XHYhWF9htWPhaBeyBSpW2zCkEydrBE8gTdBfaGUmKAR2fZMjyLyEBPeBFtXWB2y1PETX1pkcoMkn8E22eZ6GqR6",
  "key39": "4LV2p9CbKHNSNdC8MQRtLCAh7W5BAUDLEEUZTGWiFMVb1YBii19cLMaf424iVmHpUreKtMF6bxn2J8oNcbaVEdAM",
  "key40": "3C5TNfq4ySJGx8k6uMsuTnqu1jbs4hkq54SroVWypsBqWh5hyEw1EcSLk4GkaCZd8taHAJqekFUF83n2HFEQUPrg",
  "key41": "5yo3gjxYqd7xvytiaDKjqgppLfmXDVvdMw2RAZvoE42FF7CJKhAneydjkcYXQskRFagSdus9YerPQ1WvazX83uxG",
  "key42": "36aSBWZCWt5agQhrrzHwvzJmnpNZRt3z3pRqKYkZR3conAqcCmCWTBFyjT46qKu2RR2by7hsyW6mYKxwQYUrDyoB",
  "key43": "4BJ7s3txGDD9KWDojr9MBtQNrq4cauwCaZPyTq3Ug6CXbvvbz3cdncRF1RGJkhPK7om1sEM6S9H9WMcc858SNN6U",
  "key44": "SKry5if9JRyZG4phptazf3EQatYKnfnMoxNJdTigkWtVNc3ZTmfXo1KpW1CLJs4gdZH4YRqkvMUrXy52FLwDYTB",
  "key45": "4Zp6ideMPQKVqxTeZYG8JUE6DapZgrgNJXrGB2Jkxyj4WUCfri2GbknbfrQUmhAC1hhrkcGQUm7bz3tQXEbZKKpu"
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
