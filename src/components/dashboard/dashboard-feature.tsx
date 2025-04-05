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
    "rzkfAib3g8U7qdLJTDLaNLVRGfRnR4NBq2GAVmdY4NDKmhrx8mJS1MeAMLZzF5eyg7FLFaz4sZyDXgT6SDXzVXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29tEWeF564SdsnF5DwEkNU5B9Ggn6ZuTqZ8siheWvu65Ycxka7xw9gZV7o9JVdsdrUYePvpSLYmxmQz3G6MoNEGS",
  "key1": "4tudENib1U2p88JyfF6ueRB44us1jQtvTVUFTovZW8AA3J2P2YLR3LymbQBm4ikRoS6reDTn8rZ2GYpFrNWBxQCU",
  "key2": "2yVJANJFA78j35teXN2G1ytq6Pvbcmb7ozEPuyR6Lrcf29xqGHssP9K5JmDAxGF2BWMzAwHeMdccaCM8sgNYA5yt",
  "key3": "5xEuACivGJ2119UpDhwgaDWZL3TDfe7b6irMTghmqJbetbfPgfzEBuFfuwN492YhXvkrFNf33peAKbe8EacDBSaD",
  "key4": "3jc4bYLu5iKAFFWUTspDnyFQ1buYK1d9z2DAFkujyuGPASeyTn6saCSZc6cGjX5CvC52Jq63K1XBY8eGWVx81Ubx",
  "key5": "3WejC2A9pXHLYidARnoN5ZF3BjsW5EQqBgZGLR96mnav6LtT2Xzbgq2r3VM8vGdUMmHG3HKyiaYsrYuEhGwK2NMv",
  "key6": "4G3LWVNTcR8jdZ2wS7R4ZP9LZFSMMbscauxBpckdVPmB1TjMZbDxQMb5Rjzw8Cb9Vze9smnDWJTgrcdEhNsBTQ7o",
  "key7": "3sisq5joZrAw9g9RppTMP5RS1Rny6oZKZhVtMHYxJck7DqUzJ3u1e7mvvBd7yUPmH6VGZJpEkkqHUc39DuKCyonN",
  "key8": "eQ52vNpRKKy1ycdQXtqHnNoo84Rtpkyg5pBKVBQ99WrK21Ato6XxxYVk5tPUebq6FH5P7YFS679qqhP7TXHeeBH",
  "key9": "5LNXnZhDtAPCw6Xkxy8Uwh3ZwaEs7wqMKf67GN49aDbjcFiA4bdP6L1ioAh7zEXFAxzT2LS3n3QnASmuYGq6HVvL",
  "key10": "5mSnuvMwt1ifLG7dPbRnm8A6uHnT6YyUz5iZVuo8CrrwyXa47QFdyXRyTmQRCTv2UaZ4WeEhK3Q7Rt8apBRZYofR",
  "key11": "mrXh1zBr1CkphgeB5u3dvS2BZTbwSvJtjfKAQ7CXQmdNeQ1wUEF48pf6sHbtB8xLLrGfZvjiGKK5UR6BBBkY1av",
  "key12": "5Bj831Ldy8EmLa5gKpMXx14Ke4ZqYyiTyCZNj5B8WLhZmo6fSdJCNuFh6wSjQ8MJkNyeSEb6SrmNFpqnwmxpWFAL",
  "key13": "xwb8RVtnNx2tXRbzC7Y5kLtPma2DeYW2y2rx4Zxjn9XAKR3aw6ffMicdtNNft2PtyiXjShvkhMSCXsUvEDmzzEQ",
  "key14": "21puehNm4omJowLDwuvsfwP9NHHAY4VMEq1g9KV1coV9UqhQUQFncfjieC6hALc2UGb7fVZkv83dMKJbFKfaKtJz",
  "key15": "4TE2aLcyoERJXQr6wC3e9hKiNqcEXNqRDH2Jm6jiXKBkLgHzAwhqYJDEgtEZ7Tt2C7jEaE8RdKHLhQdhmJVrogjQ",
  "key16": "4p6uwkPYUMgfBF1BkqSk75ZWKsQfkj2opPSwZVeqKfGWfrrWGUhh5Rp9LdXcsWGe6aUFeN2ey2K3mt8qS44YueKo",
  "key17": "cnNavqR98uDyjBocVLr5FQ1WmsjgVJCt1EKYdCJqi7KDvRdSmeRGoZQvGo5NgAxXUcALr5DC1NTjMHqKCpwtscb",
  "key18": "4UB2GCJv7hNd2YmgDyQJ8cjYSuQwrzbobfqR4ByYR87Nz67iDhB8wmUALQDoemMD3g5F8VXKUWcXbuGnTfaKdSoV",
  "key19": "5usKV8aYtMZsJP3Dnx8bm7rB4Z18uPw3qP3GtP7RtNEnbB8srykaFHn5maQZTNKbWTnp5ycq1s9RGA1iPoAmdDVU",
  "key20": "2fFxkBjHjyzNmDt2ofKTKnX3JcrgSJ9cJT4aqyBt4B48qX757vULZpYV6A8HaoUujxyfgjh2vfUScWEGPPdmsQ7H",
  "key21": "4LmcBNks8oAhJ1pZynZpoQsybYeko3owYyLAhCTtrzujbjBpsVUzJT2fUMAcwShQEsJKZieP9pLagCJ11GTnFQZo",
  "key22": "4x4LCFxYG6KVoLktJhigqmtzUPuByQnmHuvUU2pxQv5NBK2HhgcqTPKQPDHsKK6KRXGLtCW8xLMZFg4aSE7xZbK3",
  "key23": "2E7oa11kLoxFvGet6whTD48jwFg7xqiseY62eKRArVPmgmkRWkMGfcod35BteyVUP49ECYxoZ2YAfM7H4DjJR1Pu",
  "key24": "57r7ucvmdu7SFV7HNKFJrfUd1Q4vtuE3e9ZjLSA3d1V3XhTDXHWCSUPweRYM3123YCAWMy4CzDvr9LoK4Vv5ux8c",
  "key25": "4YELwmfGKajcvSQTjHPNfKj6mHh6ZYQSvcT32GKsxctML2VuB3R9FG5UzFt5iPJsSmh9UZxjrH58jRB16jhuX7Fy",
  "key26": "388Ro2xFMCvzjmvuJD91kPB2rCbQ617VRs6CuwDZubg1xZzYaer3eSmXNgJ7RZTPSvttzJJMPGaPkoPpAu37PTcE",
  "key27": "3VU9PPG32AoCGWJ1sC3vfh7uW5UgWXJcQACEnffjd89n2zHW7EegjHTWkaWt6S9xtCJhs1KYAYyBw5gG3VcMszLk",
  "key28": "qyGc3J9mChgGpQePTgBGxDtYBAqN3jHkyLP4RiFznZnGFj1AHkxxbrVXFWHEdzEaqPTbB3rvkNXkg3U9aZ2e3DG",
  "key29": "3c67oXAHwHrJCk4UAYpXLRbsW7Q7TXfRocjmABFeiK4w5d9dsQmS7jZf7BAemjjpNJ5wj6C8SrH6RHFfmHjYXuvc",
  "key30": "Kar966Pb6v1xG2vT493nAnwg6zyD9cpk9EDPQY349ppWYvTpBfGc3DX5zn4FsafBu1foNKAzngN6vJi2RKv5S4h",
  "key31": "4tEsSs7X7rCLFF2LrJvNQYtqPCziW1HeQqqZ44LSuMMc6zqawZd7TkG4fJVGpcunTAfsRwBvobxyS6B1MQJ3HJXV",
  "key32": "4KzVcQWsaUiD9ATauyhDRLHpvgUgA8CrPGjKnRFS8Nvzj1eewdhmWbLi44DMRnEdpsVymim5TvpofUVtnfX6e8Xv",
  "key33": "5ghTnNhbX9MJuMzqgfxuupTnwyiZ969VQLywZUfZNJu4xoZdZRyogAyvpiy1EqLSxhHdWKBML8axwUzZQ2qocGRr",
  "key34": "2xpuSJLL4zCySBBpZaKbW9BGvZkpxrvDTyRqTBUk6wT4dh42LtTZfvVC9k6cQWYDvuSdNDfWwmmhaD3dQ29pm9n4",
  "key35": "4DB4QkbNXHDvcwuxzqTmnNjmPTf2StFGzSNfTPJxBDqg7MZxE2jFaQuMKzBoyq4op4KStXYbemxA67PjvnQfUU3r",
  "key36": "1dw6gBRvW6YTSq67EN7BpUGz3sWvh6MtjULzno86Lh32EE663UVBn3DC7PLExq6Ue348r2Gzt5eDhzCgK8PBnyR",
  "key37": "65myEogNthjASd2hScWadVJGPtQfzCWKVPZUKJiH4D31cUvJat1bb5GtaXfWM9wj5SxbYxhE8SyHuNaCUjoxLPTw",
  "key38": "4DnYcr3QCAq9RZ1JdD5yPKckj2M768wuMN6G4oe1Sjh81bmwEW5v2asETfcpX9aUmDbZNizT4TB5QYJDxWd2FHSx",
  "key39": "5s2749eTSX7UQwZycVdCw5bhoSK1B41aPqnAFZ5q1hmUBpT8Fo6TH1CNR86aozU4e5v9VJz67UXyZKK5iuf1hzBU",
  "key40": "7Dx2pwCUtJBdtZXwhqNnggkVdPuJsz28uHZoHx6MNsVg8opuVTHT4JY8iykaSPgXpdvgqun84Wmrgu1wnvU3bfN",
  "key41": "wsGQthNwc9iTbMevHTqUyTPHn7ndda6cKS61zeC9VhVKWkSShJ5ZsARLdCeMEY8pfbT2AAmzMbA8UQTPfuT4HS5"
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
