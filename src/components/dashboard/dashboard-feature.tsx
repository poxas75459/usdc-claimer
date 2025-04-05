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
    "8JJobFKpg8Le5fyWDGWjvMsMFZmR9o8V2oNZ8kAJSdCavf7fEg58XqTv5gzr1eyDB9a1QbATprFy8z1bxrAWTgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MK6vdjkWfXPest9REqLwTcjaYgWeSUXmjM9pVHN1MKRrXnEGMPd7Cqjv82x6SMeq8TNJqVGogTtfbQT8HsU6mWz",
  "key1": "3Fy3r8rE1YppWuS3AEX5G7jTi7Th3FjzDqiJaSt3X7ErwRfYc7i2UfLGQPSaHkKtiPRspBhTKd86qpAXq4iGQiDS",
  "key2": "2grvBHBf7gB5fmMzYBKhqTK6o9fqD1Wtj1AW3pJgErmWXFWrmJwohyRbvVSu7oEyZLssQGpFZFxWsdsxgmB4kY7g",
  "key3": "2U2fHqPYLA9isQxvFabaZ4FU1NuApY3wNBS64gVJftGc98fxrF2XGi9i3za5UmeLadFHVgu6LUEtebnFbBTaDBj6",
  "key4": "3X6yL669TukpuAkkS84V7F54eQ43nasRv2VTsyfCnhoPwgCVoHX9EcwiWiKS6Y577M2d3YhZuFGCY2Es4PWGBzgM",
  "key5": "3HUUJKgLtANqbHy4yHPHjcS5ku92Ho3qerYfNnwjhcZgDdRbMwLeiLZCUxUsamvd2Md4S6qztFWQT4V91Z8ZTq1o",
  "key6": "RSEby4CNZs7ioGsNaYU9YCsxyWFrJN3cnYYW6mmLPaXazzmRL4nop6hJmo54cke7SbYH262orCc5DTQKZff4pRQ",
  "key7": "2EWddCkZD2P1KwE5nRs8uNu9ySDXakAw7dEdWJyF9Yuzph2UnYBVpobY6eYQRjEUrAmT5pPeewX5Ht4zpim7Xjgf",
  "key8": "59wxBmWq5Hs8zMW1cGcXYS6QMhH2pyVksByujogYVjBHCnVd3vFsiYGC3TGQBWuYj7KvmFnYuXuEx3oqUadUtTec",
  "key9": "2FrKX9LbqEu5b2iBjhmK7UpVUBnaMsX91PPtsGw6MeaN7dCrdAPymiS6tVT6h1GSxPTtPps6xz4YrtpP9Dirb18P",
  "key10": "38Au7NLJwNhpbRDs8LkHHrLCsK3EhPaNd2qAz24oJD8k7nu6UesuyNsBPRVTuZDX5JWsVZvZgcC85kfS7oLSLPq3",
  "key11": "3o5mz5K4ipSaHJp2MD3YVhtqW2s1yog4VDVvGAZLm5sAHxS812sFVmXt7jSyh9FL9nRBZpeJq2eWKPy7FRWStrEM",
  "key12": "3ZPHnGtUj2quKAaD7JLwUVkVdxANPEmmYqzCg5GxmgU5ufo9wojwaKF1SjhLHS9HH565RAprHWBkwFsSZQ1XLFcE",
  "key13": "2nCnhDP4Xh2rDMQBvWo9gnVuMV51NCuu5CK32p11ZeAKSBJ8YuykwtwdSGUwCp2sghM6hWscaAzp5Bag6xHGRGL",
  "key14": "3D4kKjh7vT2GnUEfbM7g34eikEAS44GHjED1y8cFETUaoG1ZgtCDyXwdsM7jdAimVsGmmshSd9UoiiAGJg2Gy6xR",
  "key15": "2VDimvC4SSWiHkUrwPt7WPECGHCxH6swPU8DnpS87bdEKyJeng4HscSkRESzQzzNt51kfZez7Z2KSsMwpTHgZYj9",
  "key16": "5xgviEkoLh1CFofnJj1oJ1ocYcht9QHPXjfxkb8KqVuyVPdQcu6QmRnKywAiH4LpNvTcnhutf3NUwWz3acMmfDhf",
  "key17": "3ZWHK1GnMvNXeFKLMQSpxUfYyBaTZEf98gmM4rE7iFD56KMJ7em1W3nDx3WygyafsJPX6VkTFTWhrcz6XJooKmwh",
  "key18": "2aS6W2piRwmv6f8E6qPXR74mPHa5UTSSuYSNxZqQdMHkddhDC8Rd81ZG6zawnkrXfvercP8B6foKDR4BDuu9cCna",
  "key19": "2cX1dHqvkSqDgiDiV1GJL4SWKth8WcBVQPiUa37WFA8DrGR6XPy2bKVy7XhCoLA4yBLx9SkaDLAiL637TAjFFwY1",
  "key20": "2Tn9F5sMqyyPV1nzsDoRRidve1qfwuuCUfRiFA3founCtQVhqDNGnLWmY8ZhmCYFGE2up2aBFdn7wf37iJ8oUTZv",
  "key21": "vx7r6L5sGsXvK6kD7Js49Lo6m6VSbRzZjRQACdCUoGcG7E35XdqQ5LSeA7Xetk2KU5VeErJsYdwfmL1NsKpPGNe",
  "key22": "2uNqzFZWcdYQbN27d7aT5YFphwLvY5vw72AYHaUmZD3yph2yM2QcJfCrmCDWczrhEiwXqZyR7yogS8oyENPVRCmD",
  "key23": "2kTehzonw4TkGHYtuzijWgdzL8W9HQYrCQ5vAFNn2No5m9D5UdqjZfw6DMq7XimJiXWjAQnanESfpSJ8sNbcdwdd",
  "key24": "4Ck9n3dS1d75e9t5ETH1DJWSGaGNkcMicTz9j8c6hDFpDdjmgPp4ZHPfV9vrngJ7nXp7shgBmhLkbAZVuWh52i9u",
  "key25": "5YK9QFBFkg6dzy3S2f7L3Uuy5TBhkQzZv3zLoZ4qxLTTmqbHrPFBwLH31cUftURBGUtePRhymvV3HJ9p7pJBVC5Z",
  "key26": "3uv6sEi4hHm2WRMV2TeWELFJJLVWmkhrniV5KfCuPR76Yhae1NJ3CjhdUg9tL79ETRteWsDojN21y9ecmgA2BFSt",
  "key27": "36CHs8zinHXrnBrQygzEegKLo6LGtUnAXi5L9XWeU2LT5iVuAR7fsDQcWhHDM8FiLM6uEfHrnRtpf3d1vZGVbRz6",
  "key28": "4dtuwQDgRkSQMqHaaFPHNeAAzpD9W51s8qaWj9S3qo3Vnkxw5NHbZt37Mm5M3G3ht6GVkLjM35CnePKLfZDWoB6u",
  "key29": "4sc2be4zYVDJYxfgo4tWCxYxEF8QUp7t5PNkBTrmKffMhz1hm3frXUyPgT8uNkBcj7QjnESEEzXdkz7uadCvghHG",
  "key30": "4vddawYTcpQWSez2CokbhvUPWLpKTWHBPCzmgjqUUejrQpyiyTK5GsoLYHH4A9Lp2TF63Noq97XbSGc8xFoSq6zP",
  "key31": "27nFS2Dmxj1pahiT8tREzvJPBLXjboJ2mzSbderfczmZtjkPeLFp2ARhrhD3U6xCpi8mjNb9qwHGAW4XdbQBLe51",
  "key32": "3pnxM3V94vgRmrDwNAQnXcSgDUATpZYgQizj9PsMqxBiX54mPMxGXbZzbWwUZa7Bvn1wYdmC4qkUFF2LMeeH2Ro2",
  "key33": "4mCeydJ6ZmWTrud43KQWvZghqdvKFXsLZRNCwmAyqKsYWMA5c8Gg5mKHF2Y8QVKRXZaHBVoCXc216t1JpN21JBx1"
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
