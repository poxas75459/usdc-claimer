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
    "4n78zvb6xsaRr7eN9SthcnFCVz2WxBSFNTAdrM6yYNsHN1Jp5gCBLoPezY9mFC1vWjjcMQ6zeFzfTPfKCS37EEdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T9DyemJe2cBaERLr6XKMp97ZyRpHLQ1Ar47TKf6zHJ2PM3T9nzzYqnC1EWbQAsoNdfBf59tiii5uj78hp8bHPfz",
  "key1": "4BB9TyqkfPz1GiDwyLFkrW8LMGF5PCWA1MTEDsBL2md7aXxM3z734SUQD5qpH2Q6xhwQZA39sy3ih9ge6vp8guMB",
  "key2": "xmPSKrU4qRazLQa58LwZaoqCMkxBhun9Ywie8V1TsDoD9SrortfjHnWP75nZMUN3DudcDjNYodCEJU8Mh76L7W3",
  "key3": "2H2aUjmdTbYTinnqDwSuQw6fZonb3xjFftXTWxrfwX51cJEUtooBmG564mUKJY2YHUX44s8eYZg9peLXAbQiNh5s",
  "key4": "ByZgrU4vGiV4aJBDopxBVXPLHx2gZd85JkFdURD2MsrG7RFav83UubMKqk2YLqXtEANiY8ERHEt9QRMbTQLqNwr",
  "key5": "865dUpevhseC5z6NmjVKmrXuMexwxPM1LLeAishX9xEpKyYVHSjPPLP2S1TMSRhTvGxah8vxoRThqttXG2Upezh",
  "key6": "5BmtDLjLZubyrHuDgkBAUAn9WqyefXPfqjyJw7vZC4U2gMgXRo7W5XTbLbvsdAynXMPuj8k12W4JmmYasbuecJNH",
  "key7": "5HEJKVJmA9Ymd1HX8R2yrJdjDgZo2QrkdF5uuF8VN4qTbz3yxUakL1yCEDtCspDLKQhB3xSVkogVcAMHkuFfrNW4",
  "key8": "5GHvKQtXcFiEf3GqdaQdGzL1wH9E4FTtJXNWERgaGhQVWwLxPtikfKed9bvB89wv9mhdvQGTCDU6YdA8CGxCjut5",
  "key9": "xAyjFJtiwS2DrMAkhesdLber3qEnPW5VLidxufWSpYKhZNi8nnwZ7VE7wa7ctWwK26Sx4TMYDNPxgcS8rwzkHdB",
  "key10": "417u1HoXWi17pYY18gPzFGJgU5rawLAQYkSWz9Bt5MUA6yuLWhThbrNSg1CBK6keZrRDeMY8sQTBCDLrHvrutr1B",
  "key11": "58YdhbK4FZNYnpNwcmFtjCJbaeWXdHwHB7hsdhNrTymiWuLhuzfBHG7LFhKGt2opeR11R3xFdwo5nidpzuMWFNre",
  "key12": "34gjQ6u4zenyuZKtkdcUjR8pHaixu2kaCQwSnoAK3YjusU8Mxsf9VVnynN2xYNcFR5eQPuFPJ3Ct9cWNSzzmCyzS",
  "key13": "54yNYS7VtgWA4kQvBEp5ANYS5yxQt7y1pYuGWqQK8HxgusDLUP1rPxsQHFXztCHFiYqYohUCG9KYaUFbGyMybF5E",
  "key14": "cFxF8tB7Nvkwhy8QcHXhws1viv8UHDH6W4Mjof7dAWU7dwVeUGb51NJ3nD5ZrFKxUvbEQ2aP6WrN5W9pDVqmQBE",
  "key15": "3oT6dp2QPuMAvYgSBByJ9WyeNseLTg5pzL4wD4tu2sSsXBmhGU7YmxAYxzDKyqMzKNkyT5Xm678USRnXnPVxUvzS",
  "key16": "31aJ86EPKjG3Wb8i8nUDzB4a6Rt9yqo2M3eodnWhXsv5gmCJWTQTsW56fU4wnEbCFuV4znn3DgSEf7oq5hfG2oNN",
  "key17": "41Yt2RciAHF7Q9QW4CzFPAauXbwLTyNZXNgzb2yJ3jPDFxprESssLFVJshcQ8fb6Fa1j5e7vKMP73cTemxsayU52",
  "key18": "35oCyzu6ws3E9Jtt1gQJg9F6GHa7wD4TGxZjvbRScAYkPVSaXgig3MRJTZptRQZK6DcHJGthU8FCKieFkQJMsZLd",
  "key19": "2rfh2GxU3YQSY2jkM7qScgTuf2Q3JqzPyVe8mXV6Neohg3h2hCvXSJVGCa7MmgNXFje6dTwihyKoduJZs74bKaqv",
  "key20": "65uj5JUmeoK5JP5P8soJqkHh2SXhYk14NCP7XTq876vxEq1ssMUggyVUXGTVvvDfhGkT9DoMQrCpxNmRzWSjuzgS",
  "key21": "4o63PEM7c96TwrUH7fq7HDSNNhd8PzvgDnmrHmYssmQHTUYjLkjScLDjB1vGrRmjZanvoZ13VBZgv9rpvJxLc946",
  "key22": "3rGy5oX4M3EtTx6qcS1ZG8aZTAey4XXFgV3g6wrmhrQHAQGPi2kxFZJbvxvZJrnG5ZKeTrVQdxQhpL62djS36rVv",
  "key23": "3VJVBvLivHfUuEWtCxqFu7c61wEcuwJWLDZHeDFysEJJA9wcE2uPbXDFqtkfX3W9f1qe1x2u9824S6EUAB7e54ae",
  "key24": "5NVrYzuicJnujXDA2aRnh8nBzdPo6cqMpiMdNuUmHHMgD9QgDoN6oUcPwtePx33TqVoZ4tGiREa2DHVQmakuQc4v",
  "key25": "2VZYCEjKt5tRKKFH5kR2xbsh9tTboKsigaDBxs2W1nu5hzCnPMt2ePWQg36pQy2zJ6SCAF1uCaCP1GZffGip3r1f",
  "key26": "5VrGHEMjWHC53HycFce1zQ9K3vwiCy3jyiuJSMxiYkoEdc9gntMATKts7HA46KMYWHJKJLDvFCpFNuwbN8MoE7YJ",
  "key27": "2EiuAGQjKU1WhFEsdXtuBahqwBhyweJ7Q6AEd6xY2BwaR5F9NL4UUjJJ7Ah4oCat73DdjV6X5KoMdQxLc2jMv3Rv",
  "key28": "uksas2yt516Y2uShvsSZ5yaTdbr1X8mdYp3GX5GyUZD6vbrvZZBKpMaeBwCXbuW3hw23kxKQS8F97JS776gzdZc",
  "key29": "61WtZGX4peE1am1NaqT7wdbM7ZWATeQKetTp8aLjHxxzWWyJP1GSD87JRzZeoAt7Yh4h48bFkjKVj1q1JbbvQoxm",
  "key30": "4np1DJD83AtiYtT9d23zVNWbr4zox82RCoWGWU5JYqWHn6pRTLHgcES8xK5ds9G1ocyKJTjT9m6WYLZQW7qVe9yM",
  "key31": "2ERzdE38N5DW6prXsC6w7PLgXwwenzRtEmqr4o9ysH6jDV9Kzwhyww4Z9qYWm3UcAamYbnpEk2NKRfEN6WyUxnzt",
  "key32": "4G5rEqhSRfXu3KU5RsSuWPRfShGoqnHVoYcUcERrercmHwJaYVyHqdvKkguqrZQhvkuX57Gw3CPt817EhVcBC4Vw",
  "key33": "3TBWGAnx6UoWnzsFebY4CdJnZMqiukV9X8G77n6xLiDJwoSiGHzqfcvRHdV2oGctV6kUvYEHzKn4VZJqtRjKh9Lc",
  "key34": "JWEdaDBYrR3bZ6Dx72Svs53NAAeHqktvVuZ3W1tZZ4Xahi65piAH39EB29SozV1YPr3cKkc1SUkPPqShT7J9Jz8",
  "key35": "5JSkiBymgiNdQw6drek7BzAosKt8wHeHRwX2TfooXfqBrRvWwHm1KXSeELfXaYZ9aiKnXDjzJei41gnjJdCQc5jn",
  "key36": "v9EAE6Ys11qoYRds8muSx4zM54xgbPXG3kMEMEcRurjbrKVSjVEWs5KT879QLJMdsf3cE8So5S6fGbK68s4RPxz",
  "key37": "3c9PbXYYDGYHjQUxqvZsLai89Tx4bwRmwNRMmHxmxCTYcDVRCoRMxEKSu6dhkuvbJzCiNCvEJpMHv4YTKkbe1EfW",
  "key38": "5ReARcMjEonc4wxkcixw8qSNs7jZx4FEAKMCNqP3EUzfj5mYb82tBHbQcAgakVB4u22qWWMh9wid4jkJsVZEgPKg",
  "key39": "bvTp9LzuHX2AGomNuaRj63ECQWTD3hZ1m6ksNZjKrhKythcG2qbhxSWMgzpxiydrjZFMzvzUFJ7yHHaa4uGNNWz",
  "key40": "4NGV28gxF2ueVYiUfU8vk5byAwcQiZtfKBnmtXePjUKWnNWE29zdRbmjxZw179Nhs6gNqhfCEhMyto8mJD7qdfT8",
  "key41": "54GVRmY2SfcFwtn1pj77iDRWwpfb9BCfqg3qbCKp7kj25KV2rJdrfuiWKqechgaCFbjY3PLNbHsoAFi299LmJEuD",
  "key42": "3Ecbc1kZUfSyqXM1haU6RuNYM1PFeSVj9VChVmJbkJMjTxq4wCgVzhND6JDbyFwkfpxC4ceu5DHxxU6kqLe1zAS2",
  "key43": "66N35aVKH8H4HpUTALtvToECdA2F2C6T9XRJj1stCCBMe1aADAYEmhVKSSvadJPBea9ehDCpcJ6QxEs6U7Q6FCg4",
  "key44": "47kN9h8NesHdqfyc2wHFHTBntBBb9B8WNT3UkQJpsAqkVqhoqetG334JA18LecSvp8GfHF2nHkRHnqP5yWptoL2i",
  "key45": "4mF6WhxuT7oAQTfvJbsXu87bgfR22K9bBdR9FY9T8mYBSzCcLu7Mr74vBs4Vpj52PTfsaoYcPnbhuVmEFivxA9Yw",
  "key46": "2y1KUYqUz5WG53XzJtU795toruwoEU2YgCTjUagCNeqvqWxwa4rVKFeia3NdUmu7znWfJaMpmo9f1a7TehTj2GnW",
  "key47": "57syxQGiu4snCtU3c6BNT3vrsRT2qd2BVY9JVgTonuue3cwUuZ5xvyHF1aDBN2JW3ze1Z3PCHkDXRmKpSXtJLD6J"
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
