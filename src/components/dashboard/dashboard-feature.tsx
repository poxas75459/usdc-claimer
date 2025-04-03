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
    "3LT6MSRZYZU8Ljen1SArJCkviHTm91xETMuNW2xDL8kNg4YyCkX2L5YyXAy49X3oiaxMySk8u1z7N5eAsMYmNzcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34BiPpfzUodX3ZKVxVozSZdqFQMVYW1JUoU3gZqshoq1gzWYUz94FZKsXKDaTtYbNVEDhDfg2SWF4eLH5S14JpYE",
  "key1": "2vL87gARHm7ZmPTRAd1qkhPHguTEkXNaLSjm3iwbFVdioDZD8ZtZdmWugSKUCThqLgHfAYeMs7b9FyAqf1SoN3e8",
  "key2": "4wjnCo4H2C3JFBWUB44QvsWQE9Y7dJFC9Wb5UNc82cY9eZX76wLJm2mpX2nsaXcn6pv5nf6wd9jKtm82g9MMkDeL",
  "key3": "S3HZSGoMQHsyuEXMV416bazupw8eUcaCdBM1RxJHo2vAHiCCQio2TvYb5WKsPdp6EUt4r7LzWB7NdgsBMLJJhEH",
  "key4": "2YfTf6uRnt6U6skgNotSa1Sk3spEwRkbuLrDbRWkKS7LqqPhPhavKjMG382MbjvobKEh2CaSbVmrvjsF5itzVUDj",
  "key5": "4McVnYghB7ntdjLct1Da7hcmi6fTwH6nc2BsXKyB8b3T5bGJBKkkJuJmVijGZzcZmbi58zcSCexjDtRpij8Gkw4D",
  "key6": "645UDu93Z9u3e7u6fB4HiQfN4GtnM17AGErv9mg1zQTaUSwHUbusnVuXyFxK9Ssg8amdjpnXY1gazVhiK6wRA6DT",
  "key7": "2Wx2x5fULnvNGBLdmmZ4hYaKrnQiSGZC9kjQJwKzRvKz1cFoqzV6Zu3uFR7Bsy7VjyxVpAmaXbsw4GWH5rNw3bDh",
  "key8": "ZcMqwe1RM3bYDPmDXoRHCZnfJ9R9f1qvNEdwgb6N3AGmoZTAwqDTzvwa7qqkFY8ty8tJ6gowHRxdKYUnjoyYegD",
  "key9": "DNzw5m4bK9wUxig7bh9tCwmE4Y9xKC85yT8YSq8bR5mXWKr5jzWeiQD8kSqrdT1oBoSGZYmtRxBksA3CUnHGr57",
  "key10": "4nV4CDMfw5G76vN4fb6vTe1ZHVuqKjaNJ6XAsbR4YZHm7rwPbm8GooiM6ztAiujHmgPLvmuVnNZqJf8XaspihcVM",
  "key11": "5J15GRTag1UWkQhUbtDD1FGFh1EnPRXSKxEYh6Sv37a4vEdsUf1UdGfX4TpK3k7kDTroLBzgu3ffNrZbrKmBQrpG",
  "key12": "4dN9rV4gxhh7MLmGxpu56GcbNJaKNfPhTUVUt14U8r8Vqm3Z4g5ZoJgNkgBLR2h2buhGeCNyWAPrEqsEL1NMjQZW",
  "key13": "4kFzwXz3EFYEdW8LBCVyuB1UymovJ7hxwTGuG3Tk1LrMp9KiJHP4BqoAe3R1wbVhHXXWJp6VXsQ8xiQCP5qURtBK",
  "key14": "5xR8rZ3bh8MAtW5iSin5u7K4veVVoh9LBBTjFweVWKStTVJgPbEQeMEvjwaT7GtdwCSiySvBKATUf8c2eP2sfKvd",
  "key15": "31XF74UH9WfAWD2UVAWH5Dj53LGZcM6wTT7462gZx7kqUN2MJ1TFm3C9bsjfyRXhX41iMTBQwvpyW6y78o3zhxJe",
  "key16": "4uecpqkFnuWijGC3i1HHgFETtddWg4RVdL1eyghvrwLsboo64pvBoMfDd8AQ27Up7XE7PDNt9MEUyrbjm9cu6Sji",
  "key17": "8uWG5VkBsoki8WTbyuaU4W42J2AzetiViuaAZnJx5PDWdTQCEv1PPL6zSPaqgUa3b8V62oLv6bCaryRFhRBLoCq",
  "key18": "371Vyx187ycpq72CvMTfriGezT7akYcY9VVXgSoy97dF6Kbmt634kDU8gEPYY7LRyRt3ca29BqfewgXrB1yibnqh",
  "key19": "39W3Ud5U9X3VStWBEbB7iL2ezcTHv3XKUDVjd1U4iBvT8pgoAenN6Mw4ZrQNU571z3p43q9gQGQzq7QBrUT5mdBU",
  "key20": "3DtUdzZT8qA1ztDoqhuZg9RZjDWqB5tHvs89YWkHvdwNERPPqjTfsCFc1AT53n9ge9r62yDrexfdeQouXmU7u9kB",
  "key21": "5Pp2YdV8vkFkjKmkZzqmt6ugboyUYQS7mxfx8KzGwjBDaM8yTRij2yVv6s1AYZkKbmXMvXykPAxUvh3zrWAM8bkB",
  "key22": "2D7eHieUmNmJrTo8NLcBJjGeUw1VCwWfQS1Weh3bR3i4yYyvBrU7dqgkXdabjCuLKNSx2f2gkgatTYqi7ApSbTbr",
  "key23": "3qUsnABPzjQNEQUo2JBbAoYpTvKTbavDTMab8PsivhioC2AmeZgxr6KcqRLEd1tiinw4P6cQ7MLEMKsdigscCeXT",
  "key24": "2XDHQLoRa6iLHbaFZvnCFzJ2eugw7JmwJGcHUff5eW5wh1SY5w1wSR7bxKL1bTtSmunwz72tKap37ZNeDmbuARQ6",
  "key25": "4vKiUJnxbcXhymdB48Z1i2kTDKrApzw3hNspLRvZpc8AhLz9GRrdPcCDcjX9QV62yaxUkxFcXJdMiUcxRggJ6vB",
  "key26": "3kNRGfVs5HkV1ZwrSuEqRnp8JxrfSG9NS3m7BeNWePwhRR1nMfj23cb6mERHSsQP7y56QrEa54D5UdyF6PkWNb3c",
  "key27": "3sQ9DYkhTP9Axn1iWm1gAG2WKZHMbUZnpJYo8z217X9syUDNWmGKCDepvLTEvXK3G2xjmujfN8wqEPWoWAkrP142",
  "key28": "ujRW6Y67HtoBghkfqXmz6YMFpVbv2J1kBFyQNbCmcSEzQy6vZtrtnePfnaC6rPUUhKpv2GtmLSENmtnTkaHPh3b",
  "key29": "3GvDKM6E2fbg1pJwoY5PNg8dwNdShZXed6eyq7NCjHrguwzZeyPcy9EZTQDzt8HcpE2FiinWbfAMMa3isUMartSb",
  "key30": "5Kp2zRpet7wTkbfF9T1jQsCs2yFv9o3KvT2EVqsUUe36MRCJq9CL2di1xhTP7oQBMq6UaXLTkRDmMoFWLQhqNgFD",
  "key31": "N9kUSTvUdK2PDxUVkSpZ4rygM7qbJWJe3RQDXeuktdECkyvaGvL1TigSp1AcmJbfambQwMnvYzL6WPtUpX8wocW",
  "key32": "rmMKENDtgeo15ekH4nwESFQdXg9A4iptBFHVy5vfWhHmvzt5Pcn867tQ74VVADQssFsNCfsHQ4aXq8jPy31MVNh",
  "key33": "2roUoHTRV62f5hBhF6VuJ9MLVLxYA3vrPGjs4o1dF587isgUTeNAuxHZgw2kT7s8F9Fjkb186BCbCziW4BPXwFNS",
  "key34": "msBwHNiUxw7yA6HawV9KoBZbX6xUcvaXq5oDRLeHdqxGgz55xHJxgFFG2eTu3Akn9GxmYNrLZKMdZLJLhjs5rP4",
  "key35": "25zMRnvwkMSZFK9FREXBTzcKFLqeCoqPPzTNH6rK3vokW1zHghVNJXcWbCVi2ogXiM5mUb7N23bfmiMH42auNEGe",
  "key36": "3MebdFzFLo999r9TrnBzCgsU16mpivXTMmvC4HFSeAFVhifi7fVLcUrDASGpaPwtszPPjgxDCbftXvGvUeQCcQ5j",
  "key37": "28ESQkjgtFrkmbpcnZHZH8kBhzCWRRSQKGR642DNZuRyiwotC2kAbrh3LjBL3EHsfQ2jJvQ7Vo5RVbcUc25uCN3Q",
  "key38": "34HevnFM7sy8QdnoAND2pvHQB7phktDM7Z1pQC7X8r79GnoXq4V4rrk5A9TsEcWRnZHRiZs1DEPVPXRxKZSAEaeA",
  "key39": "UXR8b34Csxjfvvfsn859GZiztJ4SqA9xTHBC1oUvfEYGhFUxfpM4PyzHLx1sGzTVa5ySpDHK8djYPMxGN7ZJAvX"
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
