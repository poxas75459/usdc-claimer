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
    "4YqYX9VksFPpe8izGDAyjZPZjDVdAzM7QuSYS3qJmwRgXhnmiXRfM6eni6QjFMWcPc3vce4CyvJWjRXxHabaoh2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f7xaxGspH5xZc3GsRmUzeU3nm6Pi7APyBAAVUuHMoUH3fBbLLx3erTpf5qFY4VWgyENL8LML3cWpmCzqLNu2vfb",
  "key1": "t157T3fRWMbEkXtSt2YE8PbiV6ycUvJ4aXqKKCd7Fe1JF76nLTqkz5W3bVLYec8bBuyJhGJ8GJ7F5VkaJuoM7Cr",
  "key2": "3pqGhrSsZzHepxShPSVeS3yvXm9nfdPgU951M6hA5zk3gjq7FAz8svLgia2WbATuXkTix5yTDBMhvE52xqK5H5TZ",
  "key3": "3jqyaxFFy6QMPxP8rCujrr2RyHPXLJWxFzpm9Ac2uEQbNa3J1SbJrBDsy5PmoHDW8GJCebTcSxVJnTTtgSYGRijo",
  "key4": "5tSnZjBQUBxGLZFwSy68yKSV1YfA7rVFTcJckmLdDwumrffyYkM4i8Lm7nEVeXdGDJxkyLjRcxKx9BTMsCEXezZc",
  "key5": "s4ztXuc7yRDU6uZyww9PU1Hm44t15YbD1tkmJjuV2RBGh3mZCciGCWyYrq5aNsiSQjsJCkoqanq1LBp99rrZakE",
  "key6": "3zGiy3h9CGZKsTu6ofxi7GKbcTMCeM68k7otvna63BNxf9VdouZmtFezLn62K77KjYZh6E6NNWPgvFDJngPF9evR",
  "key7": "99A66sVSbqAuGeSwp6p1BUVvQ2R2izfaSjxon6sLyNJeMXVxEoEBEk4cx1qAWf2djX8QU2stSWFHDb1UZ9wBSbF",
  "key8": "3rBLdwhM33qi1ntBpjLMT555cWK73hJpPNKCQ2wct6auYURq8vzWmSrHUZ3LqCQ1jJPGTCs1q3fB6R36zBtgeSjF",
  "key9": "3kkgGNSzMcEeqjBjTARB4onBh9Di8m9EFxEDf99KRTx3jA5DVC2YaDYTQxaVcq8zpU62kn8V3gXy8PKr547EQ9kM",
  "key10": "Gsn9tf1wwX5uJr4mJ7Dezmft5D3JZQ9wAvHrBzB4akFQ418J1McCA4Q4Ks9THrNNUroec7R15CXfqYgEGW4fKhB",
  "key11": "3Zu8Y1oqu34jHciroSsoRa3Fqwr4LaunqJL4G1jRdBYv1fTjd6S9TsyNoVeFRJygdSk5vK3z74ZUU8tpzaSSJrQM",
  "key12": "2M9g2czfDAmrEKCCC6BnedtzURntTEAxFwGiJsBaAjEkFLCpCREzdv1HxKxo54E6jML8qMYvKryaJtgiDP36aULA",
  "key13": "4FgshYhwAmevRZwqaKNJMJEEcYaYJtjfCeZrfLkhUHMGs5VNYHJeUdrdMSXx7BXCVGKyYZN2HUU5US7P4zyvxfqR",
  "key14": "PyC3tFdKUQRp6AHr9J3U6zmUS1f2iQcVi91becRWpfMgBphSQg36Sksjoxf9io8RbccRqehQBe4eoiLJqw2ypm7",
  "key15": "Lbn8vjyaaZGot6chg4SXuNs8CFg2KWxQJXwJiGaHT1fBMZ1WQ2bpPiD1rrarnkSap224L3uce4SNZenhHraAt7C",
  "key16": "3ATbkiy3foWp3gtqgJsQnQTiWNnug9Ur4QzkYBhWfTg4st5e6bFSzS6qFSLp2VJ1xhSrqNqXUCSug7xETU5TsCgC",
  "key17": "4nAKU6K44SAmE3gLt2cLkxbVQCdpWq9Bg7CfqX1VvjV7SwjYHf2AQGPYDWTmRuZiBU9XNwxsZJ7Hhk6v76eX6CMY",
  "key18": "2Wf2D6xjt3k3sfrKoRn1e9zVAktwSYXmkgZimUMtanTRhm5nFqLMQT9b8wdVb9e8cnnd1TV4WNGz2BhxyPtqneE9",
  "key19": "JVCszRNyzu9GZEttGTQB8fGrXcas9yvA4FGphhwpysUTdxcYTYx2EedmMVf1d8uCYp72a86tzY6vCDi1Nuf1BPh",
  "key20": "4F9GdhnkC3jTrzm1Yfgi8bJANdu8ECs3EWygoJG7YKhbTViyN7QJAWQasAiRW51pvho4FJ1gwauksBgVbY1mKGp",
  "key21": "3YMZjsvstkfFKvT4uUkR9uSVU7uZCkpXKvhx4HhDX3hQsRZgr9XidC8ZMaa7hZ1pZHP1mHNdesaiwBaPjwGTbTVH",
  "key22": "5p5reV6FMUoad2jCUHfu1h4wUmQ1PtWS5XsUM9WQjf5MgAm9YFGkHqKSBR6MgzLCG3zwKwg998rhBbagneuuf7D4",
  "key23": "5cPRo9L2DDySm4o4FAa1Qkto43GKNTYUFjAnj18bPtaZnvvvJi9r9tGwqA7Pt1erojR1QXKv3wFPs8jq3y998tBD",
  "key24": "44DTKeaoSbGQD5qfLjasp822v3Hv9A46tKEUXwEaQn4m7USdxFPapd4CtyFNm2hScoDGvMbvayaFQv7uBMTen8Dh",
  "key25": "2J95ixGBgYhHKtneK2ezfdVdHRhPatht4x3f1gLpspp915ZLjcGXvtZzUSfZEfsanbN8qn9teRkQ81ioEo1tdyLw",
  "key26": "2YtcX2YVHCBL2yn6sdohJhS1Pw5nmiqq1smysnTB344sxEtY6JxVWntFiz3G6qGynBPBpfQfVhZW9VqCQj3PNkh8",
  "key27": "2LgpTcgtzrbMVaD9D8mUSFLjHxvxq3MeRmz2hhxABmmvfNDmgKiB57nEWpbRhYFyJcRtCas5dnWa9DUv2oFtWGDk",
  "key28": "XyUtAW6QyAS9Gd3XQBHFbzfJosJhXjtezQL3KytnnMfTy5ZTx56fvF49w2zC4s6GHsGgcJeDPghz5xjdLwEY5BN",
  "key29": "57Qecu5GiRiN5Ekncu7SCpLdk1QnnFZ2cQXtcvdME3RCSZ5y5NNdCkKcUEB4jzdWZ9zEh7jyYkJwo5fZ5wDpdsk1",
  "key30": "5KJZrPMa6y6pBSigegdMqW1JWt57Q9sr1hUxzUaMatABVt6gPu3ko5Dnz34cwkhdrK6ZEZGeeM4jj6yowhRRsFs6",
  "key31": "txLceqYAWR69oVPQhKbnfTHqiJgkjPNtgRDZcV3U7HEXa6bKAmPcopkLHzzRAkxYMhLZB7d2NJxW37RDYe2feue",
  "key32": "4GkBor8HyscjD64pbjMsHTS5iu7rh1ocShWqqfXSU4ArLAYBZvgkME9a6hf4Cqj5g6H3XTWz6NdUz3qAfJFq35HY",
  "key33": "2rfeDR973bYzH6Nihj2bJK5ErpRk36DFiyBsaHkVaGZzqN9QbEpHsrAX3vsBycmbEWvU9yZQbtFcyiskvm6HeJa9",
  "key34": "5RCiPSaY57zrmuyxzGfXgrdQqeFTwNLRmqHzdeX5Tm3KrkZmVERWU6iyB3D3anoLHtkHkVFJk3TMqF7AeRK4zQke",
  "key35": "43HCdQnn61T1SfUnAHbk4U8c8z48GNdFj8HT8H8EvxakK5wVAXSkHx3s9gboirkJp7L4tLfiuL7UtQfmM4C3WQ9W",
  "key36": "4dbzcUCyB4SdSJaUJB2rZXENRjxyCjpKefEm6MYLQcPJcKivXFEtzjFEmD65h7tHKznuqRKDEeVF1WJKuMkqyBDq",
  "key37": "48i69KccsYzqP1Df45QU3aqaxUBj3apaoTi91FJ3Qgdwwzs3hYEPnd6r5TA5buLeKwfZFLhkrpG6M59P9TzSw2vN",
  "key38": "2GzGVHXyZ3uRWGY9XiUGFxZoKV5uTzreDqsCW1BZAwQcqJMdW3xZ9gNGqem5pTiq8bfoiajNczdJuf3ToCQE2HjQ",
  "key39": "2w4595W82JprvMYkAARJ7NuyQoD9BTNT6pHN5i1K3CBPvvAqKHzAuAhJpCMbMFzF4vC3bDMapNjobZVYabow7reV",
  "key40": "3TwN7yUEwmz2KZXc3ya437y5JhL3o2DA9vUF8bQkEnR7c8gqp3vHe4ytEg5zc6RoCKF2VVA29i8fNMbcv8rTNk3K"
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
