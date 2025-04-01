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
    "65yM2CcLYcQ18dacRkgAyTKEE5DQsj3ismBTEM9NE42TE2f46E7WxjDeqSpENaEzCyLNVqz5LHK2syBJga8f38E2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PHBZJUR1Qq5rvAJc2azaCfkzH7kTj6gaxUcyCcvoFfrdfb8Mph9LMhPTLQsk1LnojvNzjJMCUoijzPuvbrArdVz",
  "key1": "4RRJ3zsMtWnepqn2iVZyf6CaTLXcbWGdyULXTJhovUjz68eU3FtxYQZcUuGUXR6EmBxWhfxAHz525TNMqjsU4wfj",
  "key2": "3QnxmTUN8fmbgM8Fk9iqWfctkNeAJCmyuPMW6kTx3hByVdVGks7NPEBj4kbcoAQkXGPPRNdPT6LxUavx3ELq4GL3",
  "key3": "3XWWG9QLqBtwGR9A4im62m871pcN2RE5YaMxYaPt1S7NChrumDpGGuAMyUcNYws449hnF9QBoZFwC4prwvtifb5W",
  "key4": "RwDyiUKeMQ3ZELNPFub5yTPF11KjWvTi2atTqp6jfor7eeaSS1BnCfBoNk9WHR5mfk3CF7iPLosL3WhGQPvJJjZ",
  "key5": "3kybtfNisPYYKwMkF4b7jb4aoCVR8eNox4yyfT4MnByCuc9cSexQuYUoUqEoyjEGWQXfWXzzzbMZ7cRbiCrecq5P",
  "key6": "297xDgeinRfm2c4Fe2F9CvhofXyB1syqNwrQ4BtDn535auVrEeU8QaSds7ULDNpW6UapbdABPFSrnyqKkgA2xFZT",
  "key7": "2PpNt1YKhJUNgVTwq8b98yrNVvL5e8zMELfcaJqXcVgviK6Zghg6wWHXPL5CLApQUaFhF96E6kkyzES8Kq4u5ZSb",
  "key8": "4xcn6N75dWkEsU9RsvbbAbYaY29S9n74kf5joNcHQBwACjEGHM8pXtwmvQidKkpMQ6tDQsEEBYvhFd6Fgwm7f1MS",
  "key9": "2s1sjjWfbE4wKM7xkaH5Q3uUxs91ch9sLTPDw6Su7G42UBRt2FjRs7yDLZq7QG9yR3QAguRdhw9UNmqFzgZe2nkS",
  "key10": "3XhGikYws2EWhnCMZviTaNbzhJM9pQjgonSP2unhGLeoX6tqNMbpX9GARZ68Cuh9yYoVtQquJzPYYBrL6LC88Gay",
  "key11": "3hUEwjLBe9fWcZi6dYddHcSqHSwMqpn7bTD1SdCRcx265ik2He8VQfHdSjyvGRGYFsLh8xXpJt76Gywvq3cu9PXa",
  "key12": "2uWqkf5yTxfNWMw9cMF2DY6VPca2jzH5GVqsyjWyEtks2mvUWQeJUBk4FYNZ2wWWCcV11yZnm1EU6xodZ1DEGsDk",
  "key13": "tXigPYJNsW53P9Yj526NfVBrBi1dHbvXdSSS6K24ZVeqt8C9ZjdSrTZ7UaKhNCq8nfx71q7z2jJBdz9pJkShBSs",
  "key14": "3tU32BMwLN5q1GSninEvdfjenGgCcNQbN7a74WKKFiMJqcEjWEraNyXgJaMoobzQ9f64GKPSBT5nSsFaf8qLuYwF",
  "key15": "3cDX2ww1vqGKmoa4KG9qyHn4zfiPSQd6xnnQpE8edvBkBi8kG48VT8zY6yJWuuhRvWwY8BdLFHmYuCWhynfYahgu",
  "key16": "54pYWSzYZ3mxrUuToymVoXacRpxQHSuR1sdU8jZwP2mR2L2rSkJYKgAJFyNqGzx3M4u6UCa8kvi3Fxo4umrMKcq4",
  "key17": "fbytoxNxCVSVP6hVtvMMMHrVtQvkadYftEAGGGK3W1TDXdNQho5wDBFhxQ9j8jiHXWTdU6haBDqvdP17UwrxPBF",
  "key18": "psXWgq3HZu8SQtSWiXnbSJmTfHPmSSrd8k5siFQQvvE9HdcGwKjtLSka2JVpNrUWtYABt4kRPLJuUYMVuevnU9w",
  "key19": "23cKPSu2eXGtNSEy6gYv2ZpnXkswyPxGp9pqTnXhnJGpS2AAi8HAgoSFKPQzgdUdPXVzw8uRcT1P8WgQEas5JbDy",
  "key20": "2iqLeJTnL73rN5ziE56ziruWbHcgSTWov6apG7HkafPC76wvATMbijthZcwCVvLsxvkR8aYGfS1Z5K5Z2TNnZ3S",
  "key21": "5K7aNEkCw5YCC9MyS6ZCirqDFvA6KRm4abSpowDeqW2Mjd3t4LHRbLycYVQ749J2T7UGvUQv1r1nVrRXrqH8wAAC",
  "key22": "TCuY7g7BMRju1vvfgJLHZ8cvYkjkL9bV53fRtxBnbdjWhGrnMeYPcARSJrVvp6MuvuyMDTAaPkUc3JFjTU5gkzt",
  "key23": "399hZhu29sUCJu3ntcxYLmg4nEFd4XNbSw7SbQ9BV3X2mBzPJexu49LpsJvCgwyYnoPgxsu9BuA24a1egGBXgggX",
  "key24": "5r2QcmHqwsNcZY2JZii2vEw9pSUBcYQsWHf8vHVYEoJbmUM2qB2obDzj9b4Rr1HYgZYgocKUcgY49RSWx59AgmW9",
  "key25": "5XKJmnHRo7arnRtPSvj4RzNfi7su2nk91fTeCZuuMBZ9iUxDYDcUSaVCArHvg5UxUocVhGGErij6KvY6E1Rm5UzN",
  "key26": "36i7xXHRYWdaaiACZzDFdnX1sckQ1RYDfV1E8joEf6pGcU6yds6Hvqi4nLKS9XvaZSYpBakyXCRRNLjP9qMjWgRQ",
  "key27": "3buNKzLdCWHn2vTozzJnGFYceNBnfpABSLzoMQr8RNQMYSek9uoGbbEPbYyDWwhuHGgV6VZyusSz7qpQduh7eem4",
  "key28": "pNffv9JZB1GbwgaPWDsE8dirnaQEs6SGbDrnvPbyLARmjPkrmuAMs4LECzaXr76w2nh3Z1iRRiP8CvuHxr74cyk",
  "key29": "2bQRDmfBJeieWJPSzyTAtaN1ndCSAWsVPtCNvg5R7bZJX1CMVrBhuvCyySdfM64ob2Ejp7kChFmdzHjfyHLZgnhc",
  "key30": "3N3VLTkTnjRcbhaT1dVNbNMKmTFRRFhDdbc6P64YjVokxLJh52xYGYskzoiRBYsXf5FYkQbejbxA6JrsBihoJWPv",
  "key31": "32b8uhaEngoYmkykXCEdQ13UNuvRrq8DHp2fe7qL2McA7Q42UM5zLZkM1TKuxc5LvB4fEbwLkQQECEd1QsVSorhf",
  "key32": "iKGGhAUvt9TrZqa2o6R8ANRkJ7M736rTaHn8rzqCZBDmqcM3F4Gk2HXVko4pkPdwF81rCvgcM2uXM6eJkuCy2Q8",
  "key33": "3GS2QHduUUYNgANbWMqbSKub4KJ5rE7ShhgMJ2AdxFfdV7W7jRFt2r85KRmjqqeC2DU3FURi3iF3T7U1kuBLu5Rq",
  "key34": "66ETvQ1UHoNoUqXDWuxABXMpfjjULYFVr1PYxRWqi8e1cMUoJVyqY8EDCp1tpTfRkoYn9hEDoKbC3VRXqbj5mfuz",
  "key35": "3HHTLguEAVmx2AF5oUhUyktda6GAuCb2Ux5p7UFZfF28vAj9L8uZZpMWqyW8ZvkUZbffEDdGDraX8uXXYqJtTokk",
  "key36": "5d2C4XoqWvXi3ti51nNsRVrhse5qZ7fnGdiyFmegM611dUkHP6XF7qaizVyB1JUWhPZpsybm9ec5NrAgyFJvFZA2",
  "key37": "5YMDKULig3kWdvui7HjvSH2sbmr3Qe4jL2cUcDnERBHMrboqEKG9pLL6YuuRcYRJXUAChpSBY1CJiz2dtypcuUkZ",
  "key38": "2s4Bve16i3f4mRWF4FiX4VV2m15UWZ46zcXAgufeERFameibauqhgaKwYPmJkHUsHGSPG5bFnufW2JPUnHtb7aAa",
  "key39": "5jU1u4MYUaPh3bRhgLy6y2D4VXRE1NNH3KtZ3w7iXBR4h6KnMBSfzXEv3N9d8aJhMpWYjZSbZKLwBhWFdmdBtFo1",
  "key40": "qQvX7WJxVpPJdnvyVXiZx7Qk4eXe4JNg5ZK3pZc7pXsdoqJWbooB458zNJhGJGw34AiqDURcnTU3g46sf6h5doF",
  "key41": "zn98zTLXNTguhTsAhJAXrpdSfsGRHFbbfxc6aNFGVtePxWC6MrgobKxj9kNPCMZoHserewHhyWkQhTbTxWg48K6",
  "key42": "536G61PNtDMu3AFXkvLGhEaXKzKX4DDJgsSew1BS3NYvAJakcmzcUXMAqoUcs5DQDdwGQecWaThkLzXzs3538JKE",
  "key43": "5TqA9bbj68MPmRY8NKw8XvosR4vswFgdzL9v58Zk5hoRqUiUKQPVU4ZREc7v4WPPNs64Beobzyiin7LUtoZj4nBs",
  "key44": "3AxhsZrJFJ8KjQAkPuwZPfsoNdcn3vsAdx1DWY8PKkSBTMCwiemgxUgC1cF5xVqNN9radBkxpbx8G3YBnyw3Ev9G",
  "key45": "6476bxuFbi8uod6Efd8CjWarkK3xWWTk6YY8Dnzyq5EZerJY1xWKuXG6hpe4uMNVoVRrWNfec9wdFhm2do6voUWT",
  "key46": "22rsJ3EfT1bBTip8hBafXmYrTPu71N6VP6EbV4jweQYq6Ek7KUXsxn2Jn3XYZPrdzoB9NVxbwy9FdVwNQoz5heko",
  "key47": "369QCLZSxYUs82fqLFomGFZ5iLi2jxkJS2hDzNhXZfNFwbRqvb6hJSnnKHfwM7Lfb5ucicEXJ9NKpndxsMdaLx9h",
  "key48": "2ubNfgA3sLhumhwxYfqW8x2CvsMxoQJfFomdCu8MMcCK68LoNJDzfDqgMbppir66fHRvAR8XXSBn8Mw3R8S4NdZ2"
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
