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
    "62PSwkN3TPxbKS5gGapk2RkrnBerjSSgB66d39k4ZGQGQJGFp1UXg29oPhUHGTUJRGTiNKyCqbotvAYAqVSMGBZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qj99DQ4RDR5i5k2jMjLowM43yUGBinxmxS3H5BSywCc37Cra5iXdsbpVNKwAKhuvMXxEc4KeJPzF7UedFRwDccB",
  "key1": "JNxWd8FHCDQ85jGxS52JhRiF96iCnpML3RbtAzTbg2e6FBXAZftgyMccan2bUrJ33yaL9dMdHB26xgie2o9BVN9",
  "key2": "BoqfHqFbbirTnW5JKVYX3ePpghxduYVeTJww4uSKbrhq51jvov3i8UFaZfBHHX16YYxQ28g8tpnJzsmG59veTgA",
  "key3": "64QXqFuTov4vKmQxTG72MfWoA6v2PqzMrUvfG9zX32g5QK5oNVFqWu5XwZfJAMoJVoikXupgn5Wpx1wNLZoUEKk",
  "key4": "Frn7d7YRgrF5HBsFBip8DK67ejjm8iXmbUzs1U4QCQe2f8XkUsMP8HBeXT9Wc385sEiYHr5wZjNxQVcppC7kuga",
  "key5": "4PwaEQSJbE4JskJq4yfMGS1RdgZcevx2uKsqiuNXXv93dKy3MV7kdPbSge9Te3iKD667vhtDBGQx6czoGKQevoYT",
  "key6": "3trwkjKDEimd4i6w7bZcXV4xLruHJLFbqB6f6S6ZR1nXHwBTCsrhAeg7gH43xBvuXeYfPPHoQpTyUxHRnVQrBWB2",
  "key7": "3PGdiCvWnuUSKrkK895DpTT4yXj6gvCYiWkb27aGK2ZXJNpN6tHgACtpqs2JiumVMoj495UjXRBQ5dwJkTrVVnCS",
  "key8": "2kKHKS2VVpmGomfRnenvqVUWCqhpnmJhPSuitLuf8qMtiCaaib2KWA9jtL4i13NbUzhRf2WWiVBWKu3GDBqBwzoG",
  "key9": "4x1qh9AnKXLbtMFS5s8xrv6FPFSTie5RyJdTqr9nygKno22HxPtBd6PxdzL9p1xq8fJVo9GBx7yRbvvTZz3DHjGx",
  "key10": "5CWDrDxHgkF88W3JdzT5g7v4H6mVTiZbMAGY8zLfgUo4wVMhaRfFxH2wqnHwUJKaNr4vL9HPymTh1NEnnyuUCApm",
  "key11": "5UsnQzb4ob5sDjRKYfr5vm81uS1kumNeQUWwKqFPDkqv9oVisvFZqE8tGpMsKbB27g5DpXSvQmqnfEMDNrsLfpba",
  "key12": "3nzorcgh8eJwVhXTQjR2neSBBZTieeErQLqeZ1qtrrZwQPfRsJ6msN25T8x3Apwrf8swYMCxyxKGbo3hBZd3p5Ds",
  "key13": "2Xrm8KfwGYoCyXVnzLVscUvMwiMaPiR8CvzXRoZXpTDTZyQYpCRB7RTceYyBKyoH9DTEMZ7WN5pKiGaWCTPEEdGU",
  "key14": "2ny4iaSLTgCywUH4i9GAwGmRNCNiRZJYoyHAgP4ziPbT96pQ7FNNRCj749p9ACBYGPRdDz7tHXNLGP5iDaW4mvBs",
  "key15": "2R4dX5uo7XpistpV9LgDz8Mw2MXmSBBixpLBm8m7g9qYknNDtBQzvUEMwF557qef6CuWcpGwsHRdVyPjQs16uE8P",
  "key16": "3YpnsZHfM92LuRQrsWD4ozqMBYtdPX9u1igr2EnpBwFcDz4WaXBzCFodzKDsozu4JArQp67abAA1YmFW7Rmy7jyg",
  "key17": "5mvaHh7sttTxQL86njPorphjyi1f6ffbucGrAhiDyuu4LfJxFxWfs4nyiSj7X1GjXhFPCLM4KqnsQGLkai311nSc",
  "key18": "4gjGhJAK26KkPmMKdJKB2SLxR6eWaLt7boifYQ3bqDaJdbbCQVGpUzPkxeqg7wsjtR7ooxbPQvzZBsp6qLApxSB8",
  "key19": "3fJwqfBZZHbiEC2jdQzwMyof2FEWDo1fASKsBM4NFX9zLF5s5xgDYqpdhqWPsMLp7ekgCULREnqLH2ZdxJcKkao3",
  "key20": "3Zuqd7N5EJZdzbhcMwLeqagEwkZaMsQjFr5sVBTKdS527aRraL6KC35cAxRMZWqzuG7pYbJtYBquR4SMyFNmSDKV",
  "key21": "2mxNEwixfSbK3BDXTbYwAP7F6tijfqyepenqS8RCs9tyVh7Lw8UmQrLsajMDG6jsSweNYip6SfGjbRXsPHPKMQXf",
  "key22": "66xoPYt7wzss1svN4iePoLRatW594ZpNTbmxDVxADWD3bCy6W5dAqZB41PHHbxtPXQKmwVvxSqKLHwwidupsARAR",
  "key23": "3W5mMcDPgKCf1e6x21RHY6iDNaLpoR7Wp2vwFvhrKHpV9e3USw8TTKnPkzh8getcVzUo9qCEcPVsM3fu5iGygcUD",
  "key24": "3spU4A8SbhXR2xKPcruSeSc9aXgDGd7ZGZG3e1CSxNohfov86zcgCsyhWvGYH7zRPkXFBiLVTNvSMooy7utrkvTR",
  "key25": "5Dvmj2uCsyrvmwmSoPFkZNTwwFRTUidSx6Tk1ursr6SuPFQUFesDBCZiaJS4ZBa9DNQgB7gR6vBKLM9hEizKdjP8",
  "key26": "5NNCh9EgPqTdak1DJzwNb1xkNed7sh3qLUY2rKkRD9mSywBqCMRAoYbzsxdNdiXmfNgmoTMMitKLXNYcAEgE2gLu",
  "key27": "2XJe6vhdUvHcFWn7FrT38Qe6x5T1fxA36rCS9tdouVPp1UpgUTaxBGGCaG4FdPhhiVdxxYcW1VdXqABVRBnK7iLK",
  "key28": "2FeLdwmST1fTRGPzQdagrkijog6MCtSo2biKJbawfBsUQEBcBjmGjdnB2jr8jZ2ZxVcvnXpTdUbxojobpSDVtcQF",
  "key29": "4LrrFMWQh7CVwwm75CoFwbEHmKnYur6JHvgo4Us1mgFMNr5aQt1REmW7XBQVNvBbB7PKioB9qUY9YDtjfzVZm8Ea",
  "key30": "YZQk5TRJpLtEVJzZ6P21zZcYrtXKQyawGNio7Gw5c23Pfn9uobffGk2ouQeMGFooPmoD5wjEbrE62zuxST3akyE",
  "key31": "W1h1qd7x4Yp7AkEBcAbf9L95VR3pBmMaLoCUuHCyhYkEpHapGZQHbmbuZD4NHULxjJnjnhZ67YnbgU2JUjhZ9fB",
  "key32": "GcB9Qa11HxdUVjMU8aeM9o5ktBjaZCKT5pD7fRUnFwEjuJzqiVwxVERR5b42icdQ4dnLxxgUQntnxzfdkLwp7rZ",
  "key33": "4HEDmDb8jwuomaHX5UgwA8WDEp82o3TWvrEGPSrGdjkbJh1qhQ3mNxjBA1GdzpovnJbAkwcPxH9fEL6R3xFy7aDD",
  "key34": "4cs2k3QrXfwV8kpgANPHF6HJN7BBhZsg3YEWKwRVYbVesMK3tRAmMCQE2nR8ufnGW96DB5VK3WTC5dJbzuXdUp1z",
  "key35": "3XCsoB513VbMytGTS2aFv5pVCyaWNbzYVnQAyjvbPaR4k63C5rMdkvGSiG3jYdNN8oyYqUeFMuWE3HuxtdxER1Fm",
  "key36": "3fQ9o9JzRTgHZJkAh4fm9WMXg11rRnpwGfLd6UaRSTcHEsYejPWvVgwuEAwVCnLf87X2w6nKhm1zpRaZ5NnqiFSE",
  "key37": "5uXdKe6cx2xtKwuQsAdZc7Uwxwg8H53ZEv28zuE11Hsh2zrpYdXgXx2nuzgtnvHU897H2NjzNZRDSx5YXfuYW85N",
  "key38": "4Yt6E39fQokYUGBM1PSssgBDZefTXGQKgXgY3gayueeZTmKvfXu8HzD5Mww1ZcXxtysjgKrewNZnq8nfQLQMvgEx",
  "key39": "2Sf6MJLE6ocEQB47tYjLyxkCxymy2arhbTG85B2jFgCaWdRU8EyVcGsnVtxp4RjwESZTgmUb55tVFguL459hm4AW",
  "key40": "3sigKQ7G4z2W311FHoW9AN6vBQuK2yKfNmvTmogtsTZujTJ4URc5ZiFSUJWssMxd2jjRg2JGRCz4Z4FfRRsubCrZ",
  "key41": "2cxDFT694tqB4cz3mte5YU81BUdBmPE22CyveBnwGkpXHeVY7tpUyQiRSoL81Max1pS3SeTHHnb7AXjcSBFETDMq",
  "key42": "2Z2WWuefZDs2HW4HTGvE6wE3RDSabJ9ijMw62ePXdNFRKf4WDJs7fz7U5qqyQSi5ijNNsmtgmJq5szcTso6jRe7D",
  "key43": "5k8Mg2ReVWt7FgXjnTwMifP81qZ1DodmF6LpC9QAaNKr2rn5UQyVwP9CngpDKZvtfnLQJVACtq2JZibAhptT1JVr"
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
