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
    "2UCSs1WDowqfaBgx1YBEccVPazZEQbrxC3qJySK91WEBbksMyv1N1hukrL1x6xgqxdB24hvErR7Jx2pc9dmy119C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZHdqo7P3tYwfbcmpZQqSgZHJr9apzKVPtVg16LCncZfTJobyrB6JEYMiusEHJqz3KjrCmSLeQzzF86DmpTze5mK",
  "key1": "5FWgu3PieXWNwePZ3gqARkQdDDorz38CAQav7pzWxyE25ezBHPFbnDE6gVT5GmswsmoL9QKrR4WZjre4Yki1wtuB",
  "key2": "5sxX4QWArEAYpPPwJDLATmbbBw6SJ2JpSZDb7Lq1ceeoarhQqsDY5VxEj6nWUQSctJ16pHsNCmKENeLToAa7hAT6",
  "key3": "5UXXZjY73PcHg556ct8JxEFVGWuYmEcfCQPF3mwDfmXXJN8AYdkjMRDdq7dY4B9p9bHGHUfqsVwhJiJpvZvikCTz",
  "key4": "5uVvZj7MeL7uC8s12mKn6xy54UHuFkhkbiZHVA8891MCyP11f5krsAC2icnA8w7VjNmHVUXFyK9dd54yr9ha4zFC",
  "key5": "23u2HMW6T3Us7pXU8kQ5ztoShtR2hc9v9ikscgSRDv8PmmuqGc4zNLchCBPjQZSXNmFiz3XbLy7st4Th7ZzJaN6o",
  "key6": "45RPo9Ho8YeeD9oH3eSsiiV6rH24VXJ3cMNRTg6pxAYktWmaiTpUCKRz7z2VAJMqjMtsWmM2NAGg7ToQ4nKQS9Br",
  "key7": "2pAd8famj9EufymaNy53UHg71ShpEidScXVboXDrbwxjdzMP8Awk7XZWEezAaKGubSsN3AAyfzDGfsM9j4bEKzad",
  "key8": "YfsJkVadCegyJZcBTFEDZFDUU9DTLAU7g5t1HyBwCacbqntFGfeKkap3TmuVJCvomU8VDdXNLLhtgpoUCiJRwpR",
  "key9": "2pohocb1oF5HKz6KB3MrgCvvL4HNdWkYAnLPHnEBrqnTpf5FdC3MWso7GN8cu25jj7yFthELzdxG7ddLm9tEjMvf",
  "key10": "3eVytLoH5anEKheis5hzp956mdJEFRJ7uKh2NxMTTFf7t9pBqdssKGNZgRhfsoeCroL7NY1UEn8EFEeckvNWj61B",
  "key11": "JRXN1JTkR3pZHDVE1mcQfhFRcLRBZuTsEXWKouBw81tUbNad1PyE7eqxFmiVSGEDTGFcVuB15Bz6x7C38hP2Z1d",
  "key12": "3voEAhHvKN6zhxWneFhA5fXn6KtSU9dU1UWz2CkbbtfqCKKQBpfXkRuMokZh6ntdVCZ4LUUmSsMLRG2po5nWFyV9",
  "key13": "5eqSRA12gtbX4Yin7uyhKQZWxHD9EZF337mWGTAfvovY6hBKyF8Tmvy6CSLdBqo8WH9Zhn4RQjp6V9nekU3jzQsv",
  "key14": "s8eiGWSks9Seprv2N2mvqboQUMx2Mf6nvKFUKGFETWdegKFFiweV22DKqCR1VyeBjDBhxddkHgPtwrqeLnjLetL",
  "key15": "nWcv5M7sng3joG5X1LSV9rfHS6RvhQwNTTSMQXWQ1BQtoCy5SpKh47ALumAdmuGwaUBCZrEaofyNAQYNdQt6w4v",
  "key16": "YgxPavWaZA1JoMLMpu1BqueEbiXcFp6GF4oe1r1wmeBWQmMVZ4r3riBKc6HupirZwq2hLLt4w7m34o8qFjvLDJp",
  "key17": "2U5epgpwW3D4DiCt6vpE4UhwCfubsbqwxBkuaZbTmAk21jiinbcD9dVVmFzAiKL7MJ7uZVS8ydQmZsJnbsGnpbD1",
  "key18": "3srSohfMjEqZnv6dbTyPZSFk4oUnxT9e6F3pMji4jxBAo7P1KSw6S4sPZUy4J5K22efKuGpGnzPpYC3mPEhftmga",
  "key19": "44B1CzKE9w5cYngZ8iEuZ5T5eJaHhfLkdRbgEvkMPBbgDCnxUNEbXJxjAaz2dp9jo2iBmej2atcXf2RuJ9WZQe1",
  "key20": "3wToEsgj8u9ae2BH8WdTXiiwAwENXw1F82agqnmrw1pec8n2aK42mgUxr7pd3Q2suKPL4Z8b72FuDpBM1WEc6SQZ",
  "key21": "5mgdNv8DE2PDVVM2gC7cpCNeuc836gxJeNjqCX88yLCUnPuNj1AV7dg86XuaagRoHDQWqViYcMRzyMT7KitEACXQ",
  "key22": "3s8M6kTvEWd7aNz3ejPAjU6eiHZr1GChntJNDTd7tP2pDC8NGJQ3ezucdz82zcKxniSjvqsruWroh5pmTNjQugmY",
  "key23": "3gsBrz9pKPWXuoWvgVjoirTiYxwTEX3kgMb1RezK5jte34Y4jei2wPPrFsACb9qwL28cVKDhDbUNQ5Z7MyfvzEvS",
  "key24": "46AYR4UssfnzGLbtU1EjxywJ1EoLtChdPPiNbZJsdjuTiBhUqqcm1ETCMi3hEzz3AUQQQws1euWL4h3f55chGWw",
  "key25": "5fu1ovP9nEgsdfXNSAQCvjcB72HQ4NQePipWyEfpKpqNU2ifEZ35dgYUtx5awGT3NyzRzHewHyENP6EzDzaNhByL",
  "key26": "bAy5AEgAapxXxnYzrnfgsfDJ57CWZDsbUaBekR9wedWPGdGabrousWRCYJcFioGKNqEq73PckHcwWwvPtcv7MrF",
  "key27": "u9np8pGa1ntfZd2Dbu6SzBhPHUdTw2LMf57UiWVZx4fh12ByLjZYG3M9HMsCrNr1EZiPPys2mppVik6K2a6iFLm",
  "key28": "5HoUcCrtAyJJFo7ASmYaK5B32Q8BG2m2SJxdTjHohRnc6cnbrh136M1meUauEJ7eyzeHqfhZwL6J244Wb54DpeC9",
  "key29": "4t6KE9bUpXfrk4SftH8E1cUFVRHE6LGjXpqUb9t8pxZkp1Bu8BE32A9FyKDRpuBkyL28rSs9mzAUCpnZs1ghLpS3",
  "key30": "5JeiCQaeqFWCeCJy1kYotgffEknMJxvS3txSX4p39NZEDnT1HkmuTxWyHbkhmpvNjyTAxnTcAmvjsqAnmWBYuDk6",
  "key31": "4tSqbSGgRF9av2d26KMqDwJEDc1UqXPqpVSFiFv7XBV7uyePHYdgWBn4MEfdD75Tw7yC9VPyUb8Tcx3KHUmfKv56",
  "key32": "3dGUN83KsRAykbGwNAWYyAtPCV1FD3T2gPTKThN12NYmVZMLSmo456rDhYEsVUbecnCt4DoAJHNaFqfPBJrvJs9d",
  "key33": "2a931ifMsohUqtkYMwwHa8dqVwY1TQhcu6iV5HSQUD6J1NfaNqT3ZPFnez72yVZ7DHw3d4RrnZiMFdGTAikBaTx9",
  "key34": "2SGa5wfP6LrRpXrhj4igtKLXD11JcrHYw4A5P7EiFP5MiFyyEaaEbpRncLKRU74YbQ8VRdExQa5aNUbEx29y5zVw",
  "key35": "ogsDC3bnk9VY6eDPBwjBN8Zoe1bWAEnnc7C3P6xCDp9NyXDjNSVaXCDp5D4mkWQeG87hBh1sq9CJFKyMar3wabF",
  "key36": "WFWotnEesJMPrrH6KqkTKke89vwM1dRUKbc8EPMq8Sqo5QLQMri6zg1QZgvRapnEYFBxnsQezMRZFjoHNWahLEm",
  "key37": "3qgVD1gNSRSkBrXcUgLNvVqbpwJutV8ksuG1YsZ6dGiTDEoHMgoVReq9yWWnLrMvKmx8M883Vf17mvVSsaJ8veqV",
  "key38": "53YGTgBjgoKPm3JoSdzuKGGt61myCgon6n6pKLfDBFotYzMQnZMTLC1g97rFGakhp8y9yV7D84KYR5y2ovB72guC",
  "key39": "yF1ec22zyYomhgrNMvQvrbWom9QnYbKacw3kFiH6tyJytRdccuzHwgRhDGdLK3TAwJrLVxRdk4vVxx4i3hHaPfK",
  "key40": "5W6o3Xphvcuy98uzRiktJgYrKt3YViYJR5upYN13MneCwfTHgC7GLNNF6ZynFn1Aeh3kCpAWyUkgrfrLnBwHFWpc",
  "key41": "42Dku2v5bpVpaLARVZsKZainKe4T8MKjZGiuhoN6aX7xRcoTJAFFQFSmGgwETYHtotrND6HuiRH8HWeoHr3uFKn4",
  "key42": "5tpmuRZ899DmQWExzJwtLu7nJxGNjgczKkEzugzkAVb7K4ncuKvydMB4ubSTr8jeELTH918VzDJWAXZzEpi6tSkj"
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
