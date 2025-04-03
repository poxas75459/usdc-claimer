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
    "5bpP8Hf4h3rQUveHiaja1UzZa4QJ6dgvcs3FuEQaVjMpwS3DxGrPfwiVz4B34tSAERSmViYCdV21YKAwCAyzCke1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ubahGvhcPrbYe1ZyEYKJ27ajWF3ALxKcbWdk77XYsjKKn773ibke58bxpVwzhDW9uPVyPsFW1bG9LPA4TBRZzm8",
  "key1": "66wTD6PLDcdkkTG29skr5Za4Y6H1rK47XQDhRkJtqmt8UvQdzDcw7SKpQVCiakF4cTvBLAnuLcLv3CbvPVyJBvzn",
  "key2": "5TpJFxhMVav1eAS8nYQw5MxBkxVNvyqTKKvuVkmGqe8ij4RDvzQ8WQb1zKLAEDJLrtdYVdz8WDSLxBSDur7PeoSr",
  "key3": "67Wg5wApRMnF8eb3pzuEaVgwSJHniFhZqHiB6ge1vGBGD2zAvSgK7PLvtpaE3Tyxc9NFrpRbBLszA8z5jKZm2iSh",
  "key4": "51sCVSAaxwdnLWa4nkJGxnHXskNkht2CcYXgjLVAWi4jsvwyrhzmz983FwNF1H2V6e9weA9UZhUu8suTDFabwX8Y",
  "key5": "4ejU3Q6Bj98Z4Vh5NL1WwGCLUvEqGFJbCiSqn6Jin2hhn4N3C2Ji6pyibXRGothzcikxfxTiHSXrrf2LWdFwnLxp",
  "key6": "4U32PPHeAwpwmvjB8Bi33sdUcXa5KtAN4vjNHebYQqfQguMZ3PvErJnwXe1G7ATiHSjjVJgqp4MQDmgS41sgcDRC",
  "key7": "B9j1y39c99izKk9mua65WXQZFuZBt4NbnhyCGwpfpvcS8TkptTi2fmCdWEGWPxUYXMTdRmqPci3dmysArLnuX4e",
  "key8": "3kA1kticrgPeoLaVU2eWjUVn66A7eMSFXkni6kQbBYHSzxGj6AFwYjbbbTAxJVQuuK9rJjhYyJvqsr3FdBWVnJxo",
  "key9": "8FfxccYeRBV5DcE1kq3zeqN8oKcNhGo8GJhReRbehUzdEQgJGth4Zb1bf8SFLHmGWVhzAWHQYcwzmUu2fKvU4JU",
  "key10": "4HShPQCUneR7oCXVU25rbDNNdY8vExuWWcMFW48TcqCCpyEznyjr3WYpzZsfaMRKS9Q6Pd6uK6uY8dmadqgg6Nze",
  "key11": "4Fa5VwXPcfEYbwdXXfdi33XyhGBuS4XJSseT3NSgwd1acDu1J35BtEAQkoiRUydUzvdXAT9zorLPMXNYQCZXw2eA",
  "key12": "528xYo8LSRVCeVULiaewf8PKZ5zyuzZoAEAHHq13uunsKypmL2pzQmhiQ4R2NWQuWY9GYZFyn96zQddUXKJE4nd6",
  "key13": "5uzxFkfb3uge7X3oj5WrzBm7uoHtJoPQ7EVy6TSsQUh8NGzfCrbAnpGA93BdqdE3TYZiDZfwz6Re9rANteUNkp1c",
  "key14": "3gbmZdU2L7TNjDFhMjEyNpdHoYWKzHso2du29eKXgc34Gm83U11tvtGxADVkhvy3mRpw1ACBH2cNWxKkucsTik3R",
  "key15": "4XrgF1SS6XvdbLinXQVwnWvmAikh7Nroj9cBvvBwwjM7uwPHeN8KYnjtcACePott7KTrJg4FD1uLmfA7ax1vpneK",
  "key16": "5m9vEkFYVEv32tXV9HR3HbP9RdjbRtR7yNVAqMPecpCAVMmuPD1t672KzBevYM2oGVtrF6nstbLnt5U6hQXhn9V6",
  "key17": "4J4c8sRRzgWSvGJZnjSLpfWwnMHrzhBYjax7jemh6eNHiS17X1im32oVMwi8an12SJEgUxs7u32CLs2atEcq7YD1",
  "key18": "3rzXjzzZFfMXStsq5G8cfaDpUuy2TqRryU7N9a5wUhiPgFRtCdvb68SVcAnM9WrhFFZyxRqDNRaCY9c5ESUMFyeW",
  "key19": "4FDa8nK5Xr3uKKrxs1hbqcR99x75aJLAWbcpEGwjdXuPH297uCFYxD5D8gk1wQ3FkFhtAMdhZXw3EWanUhSjRiUC",
  "key20": "4CmBM8EcziDFaBhjLhbrvunRqDr4JbSEjn39yZuiSW3y4d6QH3y5nDaTmY5mWxWU1gJf98d4bASFi8KJ5BDqMdrM",
  "key21": "ZjNLavMGh7aizdpGzLEbkSNPDdfR6r994AtjNKhPN3Qv4zsjmnhVURD5aiffcXPtTERWHCJ7V925ZFXsMqH19kX",
  "key22": "4H3E9RPuP7LxJB8zEcwDDwnkGJrsRHTBpHsjsaYA1wDhLJYcRocGMdT7x7uWFCLCioRQ6uXnQpCwpxYqMMrNxTge",
  "key23": "5URyUmpzsSt8UXXM9YkPNjAMS94ndq1eX9P3MQfGV4rN3gx3yJfWfzsJXgcEzGT8rfyCW3MN8wxsHrRAR5PPt6ge",
  "key24": "5S4rA2gRjEJ4qg6aKyvpb7RytmJvY2gFR6e7HiNh2Um4rcY7zg3heRjyjtNUWhTKV3LXa2oLB9Y3nwNuymweL8rp",
  "key25": "2TecdJ9rL44VdXFfHBb8K335n9jR9idFbEn86hrA8cVsUctctiXoteU8XMRTHtHLThYU6mJFDNhY3xesWQpZQSK4",
  "key26": "3EdxaqNgBifsuNsbm6JFJPmXRxv4BQK1mxvKinbBRh1GLdDCnh4nStAWZWoU2SkpfrSv1C7q4mvQNokHuQuQeqi5",
  "key27": "oR5bycmZt6Yqj36XEw14efKsui9LME4Cc4jU4iGZjyE9NabB7ig6fcEY2vbmueovkv3hYQLawt6sEW6iNDY7ni5",
  "key28": "wnkndWwdujtN8XvivWpJgyCgcpVnFqeJq2Eg1LTvCwXYaJFcvbCTWbJDhuPYj8ybgrMo2RuA1edawh2nhMMfeJS",
  "key29": "4UkkdaqAacQYipu5vPsvHSsUKJu4yENaBdCurRbyE8HtQ3jkzcnZQxAPU9ScDUGmhiqXGuGjawaaNxHYJfQBw9HS",
  "key30": "5PneZ9QTyP4MVqgxJP1n5ZERzmpib3rkJSuWNRthjyHEmV16ReJacUmVpyY7rtfgDczMrnsXdDQvpZVzTkEZNmNA",
  "key31": "2UtekgXDyaHcLWP57nymcyvwQQVdJyAHvCNiLC3ag4myyW5nwbHwB2EeBzqBiZHDXeRuVXtCS7poGc3VYwpD5a8t",
  "key32": "2Qwm1xtXAtaJvX4MmdkBwKeEf2haCvxXQGx6Td7qqvcDYiC7Xpzy4iuDgeb1EJba4NZcz7RYo2iFPD3VmjkCZmsg",
  "key33": "32jNvd77i6B1HM8YrVTrmjHSLnn8vQiwPKnADmoYQtiHUtqG26Z1qgg1d1xbpC4rWM6Q5x7Y3Wn73yPn2uQGz2cB",
  "key34": "3ruF75jEosjdzqLEoLyERAyUyhHp19cRwf2MHr1Bt8aHZj2gS7w2Vv7gJBJqmqts7WJvoogBxPrhV7ZmeBjtqraQ",
  "key35": "3GjwBHcE7oRSG3N6wTc2Rs3LqdVtzagpTgxkrJYjczTVhBkuPLPHiYQwdnsiz3iSP1C48p5Hz6cJ5VbrgGwcPGC6",
  "key36": "2zqFSzNNod1CqFir2L7rZHu58ctKneSFnbChUnV7N1w4DXqMzLJzjvHc1JkSaJDBKURgTj9XmRUdWFMKnVFCvGKJ",
  "key37": "2eioFe9b7fNCCYptvV2RHt1PA8sYjrYwYCSYfJ9ZTQHnwekmnTKrSsKZP6xyad6K6dhjk9KuchrVSuD4e8Gadeep",
  "key38": "4seF94x99PXhDLgd3fikPBYNPi5geJ6tWMvnGkTUKk2L8qYBzCB59VMkfi1uPjJXhJw6KfNWwaV9JPubJMwaRnjW",
  "key39": "2XrtVbYKB9uXpeB6rta2u9K3bTgBrqFjoDAGcTEPnQ9ngQGoCs3iaz64sZBNcTo1tNswJeX9FJXiHJiVjLvMGyE6",
  "key40": "5DopWbSm7NyYe5Ehx8Sin8X6UYSYsqv8k5B6kF5QZzSH41fXSXGhovf9SSjLr8rvYPAQLrYUVkKsspXVAAEEVhwH",
  "key41": "22mUSRz5kh4UegdgcU4jkkJWkaSqoDQ7TFJz4S4zMJKtbb6XsSJHQUNGkEhHoYjjXjvns89gVHShB4c8rGKG27XH",
  "key42": "5xfq8soNoEfuWMxP5L5i6grsbzoi5GKmBJUwCC3Vg75uP9LrBrksYa8Py4PKTPh4WELoEtPRxXmtz1boatzDqRb8",
  "key43": "2x98MSu1P3gNftUHAzQShmTXkXyDohLQgUYRTL9ncG1remJVMEjJRbqdpoS2G3rmDbdMDUmfee67pkY3633LByeR",
  "key44": "fMH287MuALEZSN5BxGcnkYpCdQNZaZ2ahiZv8yRDu5TmMk3uCB4JyohUqR9kA4mVMzYpUapcGEqZ7yP1KdPuTuf",
  "key45": "4uQr6UmKgsk8xsJU5U3MUoQprs1R4iHAmp8DNnVcg8ykvHFvLxLgd53UjibEBe58zHNm5DpbjtKXG4aCKM9Sa3tq",
  "key46": "62dqMRsjdLe1ALWsFDRtcnNQAv43Pj83aty1DmWPJQ4TwAAiT9VZ7fA6X4w7qt2scAtQ8CkFtMqjkNYjbA5iwQ3w"
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
