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
    "5F4e53PcZyAPzj8vdkgCZczfkiVwJmQPYAcSij7RWiTe2kxYH4QjutFjtxEBD8tSaALDT9Tz5gT47HHwqV4taD38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oUWX9erCXbSLQS4bAvLSQSgBZwNtnKBcbzYQ74o44j2whRm8im84HUtXCHX1o4mmtf6w7hL6MbVHi23RrcsvxPU",
  "key1": "5v1Vq1pY128B8WvNWwifhRZwLBwA5iHfiq1b6wE9VV3ESCgR4qh1UtvtQqg83LLHyaGs6PtovXTc3f7qfkM8pxiF",
  "key2": "32qy8HRqdrPPffMav4zRfU21dkvyXGthTZ5rmCy6gZvjmGASbpYJhB57T5df7hBLBdSMtqkus3Ws6DJM4wA6KJet",
  "key3": "ehQjkw4dh4w5coL3yGvWvdJKaPAnPRkHNPbgFxwxWwsjCKx4N1myRCvQgAqAQEhTiTHHh5f1UmytQixqTJFQJTG",
  "key4": "5YwfxfvVVjKqn9q1ULtDoVJJBDVCcnpz59tr9NL3AHYXixsYdSrQxDxx9Ajihz91y6aE5CDeC14KFtE5EMPXU6K",
  "key5": "yc7aj5zsLeG2o1H75mngUtmsCEp8YekNCUZHFHeu2avvRSCZbGmiqhmGW59rhX7D4SoX7U8T9PQwjkizVHTXNu1",
  "key6": "4vQ1tkZf2GDr4vRB74BRZWRVmZRpubpwymKSXTEpyN6ybFeuMJg1Si2TXWD3uoKrjPuZRBi6fXxG62tT98edNo1y",
  "key7": "5kWqFhW42iQ4SPLruFJSVMc2LUZyA3g8wZETHKdoGEYroUPDRHr7UWrbTS6wfBUm973JoYxC8pNvVoH8LvmpvcWS",
  "key8": "2JhTtwpAYWraAvqKVdhTZfFmRx12e3fjMiyua74fU1iTFFxJZd6qhGbtkuC3hgVSMA11KuANGPyAoLb3v9KDWVwP",
  "key9": "4LoMaMu5T51qxQS95VuEeBxdgLDnqj7WejVeHvqc7YPYhqSKEWonGNjut6emjFP2Ja2R2ksMARzxXuimUH7Fs6cv",
  "key10": "39WWYLyUvcmMWxAJNRn3L1CFVSLKcMPs3sj8XmgPNDow994F2sK7sFyA9nSMvkyZXxBNBY2VEkC7Zr7FVXVDeofR",
  "key11": "5fPN4QArm9ifgnf71nZsJ3BESueNsNPk7XT84mXr4WYvbcXabPUQmrSF2JPmd36HNjciJ77WVxcWTFk21txi5DEX",
  "key12": "QECvSPFKbrXDhTtMM5bJDWvL6mv3QNnLr3g7mDSaJ546Rp3vvJ9fmhuzjn526XBzfYn41oCoQj3m9nyyt66uKG2",
  "key13": "124fiiaPL5UrrWR9NjH295Kzn9No898QKpjrELguwXfZoj9LBHfzaMxH5qHrHzSwhtjS5SWDrxqPajXydfCKNxgf",
  "key14": "7VLQVXjYgEUWtjXLwRRd6DHNahzxYNkb7ZWRjpxNqPc7WnqE5PWJkiRUWwfrsh4a8A7efrPZhp6fq1JXQHhqS87",
  "key15": "3sdRDLRq9hm11dQ6TejoSLcSdqxQnxQyQVXG6qpN5W7RWEtn9qnsvxsSKVPxBYrmnRfQyAzrbWYj7LXUb5zK5SiA",
  "key16": "9DzVxFuZnQxJsKSxHb2U8TyPRsJZoa283TxZVqfxPRD299aGGCCNw1KL22NAfnnwN15F4nzGy2BZkPRY1n3ggRo",
  "key17": "WrzekSuE42Te4wpVmhpRvUmc86Q4R7pmhtZhneRtrjUf4MTF59X7k4PUghDt3f2ooyPEKCcrkijMGju6va41gNn",
  "key18": "1KCttBTx8FZm8qVb7fPfzaadFm3royS8iE2UyKo4gSDgbktkJtMC9Z9wk9Q9tGqGcRfAxEBhtdb8njpM37jnf3w",
  "key19": "63sPRVmwA6VmG6F1WoD7GbaG1nNjd2nWjTpceocameBCfZzHtayEGP9HsCL7o81J18qHtDsCZMY3HgDhdTE3dcN6",
  "key20": "3x7uDTD9kDHkDN3xy5A7K2AKiPa1LznnwxZ5LNPZGdiLoYGawXjePemfwKxhZiu3m5XmxE24Hey82P2MDkzXhLSY",
  "key21": "55B8EdcTbuWW8XCFQpSWqf997HcGs58CuNjRrfp8T7Noc9WJkeVTwfeT7Uo2q5aiq4ds4hY57nNkop8jxARmhBjC",
  "key22": "t9fC56wbnfH4gfq2EoHB4vYphasDNqpoB1irpinKH2bhZLfJRRZwDMibP1bj6L4ChF5WGnx8tHHdJq1DFyuNkf6",
  "key23": "2PMztG8Ls37aXCiePKdW8QMZ3enxXEnzzv5v7Tz6YaKcmhDiy1QMDvvkEXB3viMBMMTuVkHt79eajTGAZ6bBtKJC",
  "key24": "49QZuV6AFjp51xrtqhwp3yYnZ3yAhCDZQqCfD95RWCVgfLhsveGHDqF1NvA7NR6DFRBYk9dUx7n43rtPngNpyKvr",
  "key25": "4vWmPnzJc9pcmqJAc6EziFb7HmUpM3aNp13bekvFrPeMspfXSE2rAuPDVftTUt3vEiSLvhj9svmJL3WvtG7MdXnz",
  "key26": "H9VssShXDZ1tCEfM4ACajsbwiSCJzruQYJwanuaoXREHNWSMG8sQgChTSjVo5fJmLenVsxfJgGzjcvYynttmDyz",
  "key27": "34jnXVM1YwDTvZNwpqa9YUhopKGT4mUcJSjnHNPxeB3nLVB3XcwgWHVm21cbjp2LaLf7bbe4yPXCSE89pEHz1HcJ",
  "key28": "4nUXadW78whn7tL6d8uKZJ6CiyggvwPJfDaaSu2t1GissRUGGGV7F72ZtwM3MwHKy2azhrQNmgQho8DWsZE9KN3Q",
  "key29": "Q2obUEf8GtxVsYX1dWpkXD1itf5wMLa7gP6x2GjzoXJuhg4RGqwmLyNPPmW8PZz37jk2vGJk8KjgdfHSe4xqSBp",
  "key30": "h1qgchjVXYLo3CG33qt9TxScbwSHTpUt9zqqvvpQcxTnJa7e7dmagbYd7w6BorQWTb1vsGTHycLgHaBoo5QZUid",
  "key31": "5jMZKyxzq9txL1iXLbbng46PzdxwTj4KdhaHnK8UdeypE8hBTVCG3vRa6SqYuETZytLezoH7bzwQjdUbC7BLvgkn",
  "key32": "2o3CK5Xh5LyPwRaq2sTSZ6xMYTmTrvWweY98LBHPwPW1uNjK3SufFKX6SzuXoU4vf9d9MBapW63PogEyUtAWT74g",
  "key33": "5LwYEt467NCsoGZJYgKuVTcn5y1b7cFqVdATpAJCMCWSSTYceuh9zPw95BpbzUXSektB9GyP1tPisLGTd32bQRVj",
  "key34": "2xf1s8LMnrC1PUWVJhD29a8QGUHDHjSH45PAN3qqY9pyNQKBpjE5UkHt395VukGzohmcX3oPykXoJhrvPNoV3tuD",
  "key35": "3rz7ctzDCWGx61KXNmWQw9sh1mGHwYXnaNTAVpaRxfhU8nehsyvnyDixq8jGTnkehqLH2kAgNFpv2kNidqCZXSTU",
  "key36": "3aUdJ1vMwv7qQ1sCwoMoLo8uGXC8sah5bJxNMzGaoMWkA1uoJrDfu2N3ow5EYJAHY1CFizqETzdtYKnMshFJpNUM",
  "key37": "5DpPDfWY4XgF2dTe7aJrjyqDBEgi6VHzTDS9mkkzZgZ9xz1rw4fEvKFde9zKbu4oqeYHFmrbQ4YFeCBRSUwfRo6J",
  "key38": "4d1UUCHPr8JErEuAgde6vTKCUvF2eWrS6bYBnr1cW3fViqoiFvcFbPk6kyomL8ZCimKpDtbsPdixCEXStQMzZdhs",
  "key39": "5GT3AXNeain3XYUQu5rM7XfDdsVBEXAVyeHDHUu1MuRL7dZjwbfFEN6xgzj9afzYymUvr9L8HRAW6vYZjYoUKE15",
  "key40": "RvaET1roAWTVvLPsxtsZWa1weLXXUHL4xqWQHEEmW5qztkQVzjpoP5jfL9ffrghwcksxWnGfCzLmHwPXLKPJiRA",
  "key41": "31YJYC3ZwSPzmUrKwW5ThF2jUq2DThqLKAxYHuGaZ9yW6XVdzTGeqvV7X8gjS6vu3hs2skD6Q3NnBVNC6NkqqxQf",
  "key42": "2dt89qdHWZ1bbtdGwVy6RnPNAWRw9Jm1jbBYpw8ABBPnG8XCRDG3ftzu6LXDYYimpBX4tEnAS1oWMDnXm5jtuuVk",
  "key43": "VmKuwTZohFihwpKW385JRowAZ99wV2e1m4KQrEuqCEbuHf3eGRgCaGQdYHY4BrYPpc3vCTd5wPHo2RBRhRzHsji",
  "key44": "SmmjVSMxZ7pkjm9CroFZ3oq5AEforu35bkXo4krDBnUFe4bbixVBbmNuhnzKAbo4HQVWThtCxDgPR2jMNDL6hfv",
  "key45": "3XBBWzuvPGALK3ow4HiMGDDcbzKtuVZsC3TXq5PwkPXt1i7UTcMRrL6prSbEBgY2hLnXJR5RSY8BBLnKshBAgZ7u",
  "key46": "5hXaFieH8oJCKLbRqkjCXiEwg52AHYfHGbx8QseebVkiGYGReFmasF58gGzftXB3LHsSDHbMoLFdkhfy6faMYbNV",
  "key47": "3RXyFPAPpeADUJRJAqfbGKw9qE7GzoVzATqJhoHxPGgCMFj9ymWf4dPxmQuV8K4sK92zg9vB9XuLYNNGzZQWuy28",
  "key48": "Ti3FMBqhn1P6SoQGMBabAxouHHLommKm32hPk6BJWX2Vs5WWqhRoZKGL3UtErgFZUfwDU56pt7nfWTJW2mCGUZr"
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
