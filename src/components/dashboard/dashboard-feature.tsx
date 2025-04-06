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
    "5CQ4kW8844ysBa6KcY4xnJdDmDgwTgU4YB7va4S2UKTp3dsu1AoYif7mxcnYfxMBsfCPwf9D6WA1L2q5WvXjtqFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "475bmZiFy3QssZbDXSH45FEvt76FmTsM3vymbsGPzmqz3XBPoXiKLjoeNNuaBuUq88cizJJAKwTdSFnLEbAdhrZR",
  "key1": "sX5Kb5Gym18UjvcsmwshUpoJ6EiA4nZtzoybTj5zVVqmgeioXeqFY8ZghLXugJjYfBwWX2DXm4dHvbm6Avqej1A",
  "key2": "vENzMbg8SHjKGKP88Smd7ysSyVP6CRHh1GcW5xCAUcMc6rBVx6oWLzvhWa4CFhtcv5fKbLq8PbHZ6xJ718kaWsJ",
  "key3": "cvWLayUPB2kfc12spvuAMF8x5gLZf25ct6BNwdXkT52vm9QVrpPaqyXqwkUeQ8KWTikEtuq6PfcW4RyQiW5sZLp",
  "key4": "5X6dkNxg5LUgwCkmZqDkik5V69fpxM3KVd6emq1B2V46azFz4ttR2W95niGjpNv7xqPtLisp7By5nq2QWkPVBp8h",
  "key5": "2U7Fx8BE7Aufd3o9WVnjhJcTvfmHkHybceqxnPGW4oJ3er6LcuXngpyMMMFNKJtowTgeWFQkogCQMMv89QcfWqgM",
  "key6": "49x1wNVoMKeKeshkV5t1nWCRGn4UEWvoCAKiciVT7GquKsMSwxKu62dEY9RTS1c4GCvzim548VvwAoNPxYYihLAf",
  "key7": "2CRQudsKNN8TR1AkNsrpfK4nXcGJnfWLsW7e7xPTw7GcZnr5Yby9rXqhpCo3rixDhCtyYRx7FqdZeqMbWj9v1jNQ",
  "key8": "481r5ZZesT8YZKx92V13PeP5cPR2fjN1DBVF1Q61M4FSXZUkB7auKaGk15ufZZtfmKEwH9tDAtiE8T1LDDjdmbDa",
  "key9": "43fG4ocRtKvFkPD7FBgJx77EKkyHw4CNhruYBNJyCz3HqAZski15m1pgNd3wFagM6VjqupH6LwmnEpmVPSLAXhM8",
  "key10": "4TgWD1UnKmx5jrbwkxopknzUxGPn3X3cV4Z9MDpEniz6JKKH95YqM1Ui95cCjbhWYuV6PihpuJw7VuhezJeJyNsE",
  "key11": "5fQazbUEUMWzMcfX3QKR5k2CP7Pkj3AtH7iyDogtkYSZbiQWx4YnjgMywSwjGDAAWYmmQo3Zom7uKhvvQ2v216ME",
  "key12": "3yKboaQK7j9DkpPKcPoC2rZ3mCrs5bHDhAxJD9p11Mn3xFNDiFPkuYSGjWngAfMuoecuiLZPvHz6UHVivP4ruP4x",
  "key13": "V5ztHMF7yy9PC8zupbUhmFKXPbr164kaqjsuY7xWEgqdAkEH8UjFQZUmqTmPiNNLE4uvVJFjgT4kE4KBWWJ23bb",
  "key14": "iG5DsMZ3x6famMXM9E9SDYzPmJgswd6CP4rgj2o7cDC2BCwE9KW6xrUcUNT9fdioYhhe8jnxWWcMesmZ2trfnSr",
  "key15": "4vxHLz9CDhJ6a8Qpob49CGe895tFVJQWxcA9D7QhBP1LR4DFHYn7rX4FxypZ5Fsa4Kxm3yKGEWz38aPQiSjHypBA",
  "key16": "3rgVu3bdeRRz4meoSSZ6shdfVNKq1JMQZrTvDDx1RvWFX8NdKpwcE7RZ3aqdC41pux1PMTGkedbMH2eUVoFSpKDH",
  "key17": "42snxH7rEUWs4w2kkw1LcvG6tRgehS31LUU2YUVAyR8ERK1nrL7hSE4v4sur9jRTgESA5ArT3up9RK5uUsps8uMK",
  "key18": "2hQmg6mWN2V8UcFVdaQfqL9o4DbFL2vy5jijXBTvVmD4jwKGW5Reo8qTQJ2Cd4uJQLSf94eZQSkAnKpAt2EoD561",
  "key19": "4fsbt83A2w1qpTMGsVVLfiCWiq1bfm9Dk3G5BkopVUgCUa2QuLzZfyUdaT64f8Wk8xSkYokP1wqyfFfLdJjiUXfy",
  "key20": "5ip9Np2HiH7YZkKCthfWU8Tirj4pC9kK4EqJvgcz9LHnL9AGbiRvct6Yk9AkyfqutsDNPnYQjQJXxwF32XY7S3Vv",
  "key21": "yZ3N5jSZCP579vKmiAGBNvA7B9rybSznShj9f9vz8d7Rn7i4LAy5CwuYt4yRkiXeMxWoaEAAF5RAR2iPwfBq5uH",
  "key22": "4maGRUp8e8MHp2M4H7pnEdBBvQtvisAedk5SZmYuFX6CgWXBaRgCxJsjgotW9TTMdwYcgLgCVSmPMkEzLQdtsACo",
  "key23": "3oZqxqiYXxDRknfe7gQtBupBSQZPKZF9qVJLKQ3SKhHmSmn6f4FWqUvUtUUA8QHLU5WtkWa8bpWebA6BZLC2AFdQ",
  "key24": "5qrLfjUkgfET3XnQHtLuyN6a5GzocdfZmReQ6tbjUgKfLicXZrsTJVe7QcqWgBGmD8U5Ts7Eq81mqt9UZxFpPZTn",
  "key25": "CetgiwNyZyoBsP6ShBNChkmnJxQkjejzwBT525RuS9XpW1Emp5imbqb4VMPL7VeN34TTEmc9oC6ZmB2mRN7tVm6",
  "key26": "661qejN4PZZiDLMHMFRofp4XLKk5EVPczEFUXHogvBRVMnwjBgNyvt7eSRqvU3MwNuRz9mbLML9vGGsRzWc5bJ9X",
  "key27": "4weMXpNusixG5smPZywRKGQqfhzKGTfgU73YemPBx6ZEr9MSP6Lka4UhvTUSWs9JUPfmZ11fWWsak48X3J7Dzf6N",
  "key28": "5NVsPS9y5avVNxWge7efKZYBQSd6hXnDdEg7vbPns15HeMkcbLXNJYHZhHzmfc7xqzcfbYaZmCrQUceLmpvkYyuj",
  "key29": "cuWdaDcut19VRwkAwC28RH275iA3mhN6WY6wx6jFca86rbqJRQ3Z91di3Qggcse1PhWBR7YDLQWqRvXry27yr3o",
  "key30": "5tfU3i6tfQRH64AsFvPSsBeno1R5T5RVHFwoYsYZAuSvaqrzavTNBEUnySNUh8ZsXsDiQ3N6szvHvS79VqN7MYLm",
  "key31": "4G1sFbi5N5iKVdBdvkMyKNg4taQfngsSebPduGMHTdXMooyBrtyQkuQXYE8tHRiTsaqHCdBQAhwQ4nUgebFox4nh",
  "key32": "CqEh3PTdKi6ni9ri3rPiNU5oBMFSL71oBDa8p3dMQCXiV9g5BXmUKiZ2q2G1RvxtbzgBLjFpSrvSKu2Gq3sTDL4",
  "key33": "2XywRZNsyYT5G32R4MQeLzKeW38NP3jXR8ViE2UrDFesduwiJtWB2MXrWkWbQpfC9FsB56bPAw6LBK9cGNChr7Nt",
  "key34": "o2BfCZ7T18UnzgNDd7TbmxBVjSaGBXknkSBKMH9G2RLQHmh7p7Jyutup1qKLNGALiNAYEwzRPD7DPBytG3LY6sT",
  "key35": "5q7CNYdTA1qZV7uTrD1JDSwd2FyUHyFMfmuvLf6ukyheDLG9m8M3Tu1qZyiw8WzcWSj4vWhXV9iqbffniyyUyx1J",
  "key36": "3iXd7WDD1zzqjhYvS1WRdmZmsiCDttFc2LZghzMaRFXfnqYb5uUMXZNMC4LL4RUvMWtxHuZAMowMZbmVMfqyokcA",
  "key37": "564qNicPyCvsiawUkNJ3q2KBbUNvpdGPdvLh7iyVg4o8CvfrmtmKsH3vEg32QYaBPs63vCdKxLnjNYguAmdVwktQ",
  "key38": "5chWrf84mmPhcqXxFwwPhqCZreT9uzWoQgzeHPPxwST7x1xo2LLGPbrRNeFinHX6g3dDtr3iH96Yq12J786pebz2",
  "key39": "2MGTuKrR52CsxpVuv5VkG2Z7eA2cBYLpqH7yBwWop3TfPuBDEeQWwE4Kp5QFSEErvtC1yucbMg6hmtzVJMDCbkey",
  "key40": "5cLjxCVzGcFyenvjQ2Qd2uvR2tUqoqmFg42fUMdBdfK2QPHjtnNDLFkGDN4qjKDy5dQsCWq6EcvrmmT88AyFx2yi",
  "key41": "22ZJ3s6rnESxgQ768zyxf4oPJaXe6cUEQaX3yrP78SXDuNPEza67JX7c6ZRpSHzW3jKqtM9dDxFS1qUdVjBVxYW5",
  "key42": "TMVjmkDGDgrV9H6ZpfQteiGxt5dtHFXDWhYSFTYE2BuSS2zU7hm3GHo1f8xCjiUwBi1hQ66rfzKuBTwwBxATpbu",
  "key43": "4R7ewNR1P1iv2pjaKofrdA6QrkJJZje4tngXvcG4j1MQLf4XZS3QYBeRryBXSg7R4Bv6c4iaPq3DMWMrHJo51Yys",
  "key44": "22oLJEdk2dqWQfekymEL78Uicqgx4Z2xUqaPLMQNGxE3gjA3FKTLujBXkKLpnVNnmJRm4neW8QbJmr7Bq9GX9U4R",
  "key45": "5jWta3A2dqG1AY8x11LcK1YC6DAK7yCsC6RWg59w37rFU57fTnua4gDryA2VHJAwAi8bX315w8Y2B7oorkP5mfEV"
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
