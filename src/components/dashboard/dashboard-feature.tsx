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
    "4GowH5eBAr4nVrYVGZghD1hTCNuirfMcj8xfiB4Qie4H2vAQz9AVRW54adpLaoaZTxuUWGPm4M5aLGGyDj1ZZxRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28hKRfeaUAmyQ9bUhQeXLuRdFEkFecyFn6rhCMsqQC27aGkQVpHZHtF4aMdm2Q3VpZJLic39dLRzzhEjrDy7RdEh",
  "key1": "2gaZCkbFYfigBRM2CkhGUX89h7GZbHPeLPcAhLWp5nYyMtDMAVVziSDtwhaUUyfuUd17FTR3CtDtzW7KP7Rm97BQ",
  "key2": "65T2xmBfcUL1f6g8nwZEwqzciinPckFM9sCi8Ycsmq9UiNzu3TE2e4arMKBpKnadch9vX3gcjcvQmFHM3GAbTDhR",
  "key3": "2i3zM2SPgJTtM4cD3QDywUzpiAthAK9mZyVoKT7LE3VhLZSHW53YewB1iSvfYNAAx6rQJp8baRMFkG4ZwjW5D9wK",
  "key4": "38qMGhDMwNdomsHMCDH4siBzQd6D418dZLZqoW2BCxvfhfvCik4HV3rHf2g4f3bUUS4tfx88KeUZEqBYwbdgXGeM",
  "key5": "22ZjKNkAWUWwkxBQ5719DZQDMSdizBi431fLEACviVSCwBdn9BoKHfcmkX9ygfuna2Xs5tvAf4NX7gf4vm5eokw5",
  "key6": "4spRRfpG2iyTXAwcYBAcMtnUaE2rhPvzK9trtLavGU1NZGCEaXQi6Ph9hM1uTAaeDJad4FvU192wb3GvTAbJrxVk",
  "key7": "Mq2bchWw4ChmARtMSqRonzTatjKGKe2wTjybW7xb1YZLp9shyYDGAYGupk6oEK3uyoGmxqgPsa3vZnsKdGJNBTE",
  "key8": "4iRDWLz9vwJhBgoVspvMyGzfUYmxvJBVZFGW4GJR8xt14KdbkaPk2pJ779bqzem5gzJSWRyxmrmeyYYk5QZqAJH2",
  "key9": "5iskhrSedpnp9d3tdX926nvyNZYMWmTyPvXivRmpfbEU27qibEtb6GBHcpx4vS5BDUsk2PtyAqCpBWDpvm56Btsy",
  "key10": "5VbxXn2YXJxyRsx2ENrXo7kjLhC57szUGprchdq3682xUptDdM4vPKVFKysad72rUowBJLJ8ZknUkH57HDK1YeF7",
  "key11": "5qXdNAfjhJFG1f5cxBuXfRQ7fSa4E2vhizMtCfZv2VgTJ7xhekPATa7zoUeYSW28txiCth6cGBxJjDw285NFhSkS",
  "key12": "4pGohET88iYK1TvvXdYWSDNCKYnEsWmWaUXz2DXfm5W6SYsQP4hACf7GiTcBFkQPCdhSVsgzoJ73GjA3X1WJoQ82",
  "key13": "3Ut7WKF2fasSTbuQ57Xc6MmXQZEE4LhuczPwHKRShYhp85Jtn7a3MFUB4RtzFAHzML8VSsBFczA15AcnGrBLdSJ9",
  "key14": "37L78gbwbJuGQ8KSgyaHtiZm3EyNbWX9iqwrTw6yUTQcgpgC9LknqDm9fDJ5gBqeRcwzSH2ysXvPo5wqsnwvUpAT",
  "key15": "62NfRhvUSy3qA2BrZdHKN6LcQQZrK9BHFJ6oYv2nYU3ZS3R3v6kqJ73ZEXm1G54FBcU2R8Ex1r23Ag9tkwCDFgTP",
  "key16": "34qJ6ySAqHUJ6kZQHcTjpjJhN5do4feM7BKdwAvmqjg7ryXqkomkDsiQRD6WE1wgWz3DPKu3gdZ9CteMZEX5EeVH",
  "key17": "4MifddWcbfZdcdywuXsYxySSd8Ntu5FU4rizN1d1wHFgdh45F2ULuoRgxPtCLBjx52yrgnpbAW6QJoZKT2e1qS1b",
  "key18": "3pmvYsTgGuo8raiiByNhd71Php1WqKpMpRJ5WJ2cjvLxBNtH35BxzmogKz3YSpXNF4N83kev5RYXh6PvUXLNGWG3",
  "key19": "P9meKZvmjnGJMAjq7aQDgGfcYyM6uNuihW3dexcjb8aMv9PqLBRRfSGQj93S7Uiw9X7ELrKifYLfVeaq1gHqsuS",
  "key20": "Foj8A5Sj6VnGz1FDD4z1NQ18iZP8TTbsJpRgaoDCLVksiZi7dQHbDTfK2dQjP6SQd8kNtKDsduFrj4nLJynmDEj",
  "key21": "62N72FvKeH6Jk15HY6f9UhrMQhswny4Rkcwtm7iejyjerW1UzyKHtbxikKdpxfqU5gGvfWUUT5GWXGvK8foLrvwK",
  "key22": "5KYgX8GXtPggbo7RRK8sXn2b717gFRs5PHYfeNSv2yCwPwo3TSHkUWBfyCnWBmgUYub2BhzBQsLhH2Mj6uVRMAvA",
  "key23": "5DodH7qeXGdrGF7Vv5JikmFgMBKrFmYpuZemVANC1cegD5nuoANkKSpeY4aBtbDJt5hMUtDJMpqB13ZEzKPnNN4P",
  "key24": "58fWDURXQDXQEuspjoiwU94QPAw6kDK4tK2YGnKqYo88PBdKcodp6BupDuB21fkmEnzSAAgfGALNZtGajVviMwPG",
  "key25": "R8VLf5Yjes4pc1niKmPcigmRU7H8PCgSQcnFrKjRSAhA4G24E1UrZ2xvn6auCfKWzcFLjBqqZZU1bXZAt61QGmc",
  "key26": "smqFzhooS1G1HEysn6ejXWLsZQL14E1Qhxda7qJz8tcfm5hwfm7tixiYbqntGo6mmv5pqNGY9kS9aXG4PpdnWa5",
  "key27": "3HJ6Y3o9g6VavrXrJuiAUcA5aQzvttZyBZPUSP48144VNcDVKsARM6nqvepX3cnY6jJJspaRe1LZyBT4rvRwBwJm",
  "key28": "1Vhqh76s25K9zexvWwdy5CwhsioEvjNgZMgNjkw2YFx1xnRcfMSJ7jBo8QYSrWUbukP9cViMaSpNapcPjZruz45",
  "key29": "5WNoXzZDfZLpdiFjG7xKHpoxP9y6bVTauBSi9waSP81tjU8MhE3KUCs9DvR1JqptiN3BVrcWMz3ig1HuJnrHw6y8",
  "key30": "4qh5v8McE2Y3Q6mYpUzUi31ujRydPBJQNx2jqxtwkwe9RN27JtomfhDW3Yb2jzshsg7169KtNWMi3BB1GhArGoP7",
  "key31": "2xCkkiwY4jrEGr7R9KYMCac94S2UcMgjxPmnt2iYRSp8XpB2URuDtU5mUnWe6JmCKoHKfqNP2ZWK4NJjXjYxAeaa",
  "key32": "5ov5Npwrr7vfxENmZgHsC9bkhNzn43ehCUkcq7dxH5Rhjt2AApt6gsDt4iuBqqW1SLnseTobxqfHBoRzUzCg8w5U",
  "key33": "fqqmspDrQARHabxYiaVAuqjxEg32h5JponibVnxtoCyViXW9uJJf4Kq2FcPZEk2ABvdHWr2pQtcy2T6kDuppwEP",
  "key34": "5gCYRo1d5N31bjawTzdqUtWminuU6c4r5FG3ygA8GgMwet56Lg5Spore6ZANpLFubKCefhxttAxYFrL98WYfBFxu",
  "key35": "4VFUgqJZ7Qpt9C6qG2cBQqRfYWQeFGtsACwGSt43uak6SHAUpz4N7asvn1NejYQJ5JZZwtb3YkqLmK4Kn2e9hSe7",
  "key36": "4WnSkNkgXF1tV9pmj3eYXHcLx6Dq8iwtBnXGDmD7tFwjyF6GrMHdB1QwMt8gFKh8oPLSfCqiCfmkyQLuZE4uhg7f",
  "key37": "3yTA1iENLcmtqC3VkZCA5fA6kbpmqmoBdcGZt14CZoSdhhKWqvA8VZSgcJJX8Gnqrhwo41mzRMesisDmbrVK3YYY",
  "key38": "3GMibjQ9ZbER4XwtvMszvcQXTmvFDEqBYQAZRsftx6iJgauYUtVkgATBepBHBE5TSVGTGBGGcme9x5pEmDugsNMs",
  "key39": "4EZxbgxjUcrNgLJ3bc7t2Taag9Q2Tu3zrNjtFboGhsbNZQFHhKgnvpp2Cuc4FVtRgqnjRJSXLEiJ1zgiRxdwtZBv"
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
