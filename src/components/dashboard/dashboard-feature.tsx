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
    "45Zfd4E84r6QbG3dcTrhuKhyj9ifrjiaXctN1onpcZLgn49HY3rupyihFccjCzXbhhcvwQ6MRqq2pNADMyUitCmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FPv5aLmKQC7rUQTNA82DJVxXBB82vJn3DBo7YwT75xf2A8tAx8ndCCUc1XjvRMvoDso24XnZiV6EvjjQRtxg7Gk",
  "key1": "5oB565ZE1dGwRwLqVEza1vTRpej65V1qBzUFAEmxLB7pjDwP2VUBtjbvhkCAatYpse2tGYxniShHeQFyF4uiWa1R",
  "key2": "5n5L359WUEuaWSR4HvbH8biYNCMMxmt7cMms367DXVrTMmWCoj53FY2Q15rUChoEMstyDaxiWphvCqyZXWx6aMsp",
  "key3": "NLUEANzjcrbytFF6gffrqbpQuqjL3ZKzWD2uyDa4QyS7d7gRUcwKR7BqhPGkbdwSqV7sEu2T5K7TpjW3wMd6zMB",
  "key4": "3Hh7YYwWmvn84mwT3hqvFCgDuFLtD84i7Mshno6ZFb2eYnBPXJqiVHMw6yX1bLS6muprEA9CjVgipM99LyuYfmZp",
  "key5": "4xXomPAF6kcy5Cv6cyQiYhHbu5cjFT568YSTMnsK5ExnVpQLcfh2WWKCsa33ewJSt4sCAb86sLLb3r1H8fzwcWqq",
  "key6": "4FsurDKnn4LccpDFGA9ziDaVKvdskSpK3RcjH2jmAt1KLLmVYwM2sjyHXynFPxmT1Pp8ZPWLBfnYNsN1U8AwYbGG",
  "key7": "58kZ8DD7pQnqqWbbBg6GJMjtP3nKzV8rTxW6G82TnAkQhNi4Y5zro4BYuMNy6PntANoSQEdzjTMnMjL14Hz69YsP",
  "key8": "3fcNsxVb88QTM8Y25433szKVsYwrEbWEmPL6v3g9CXyZh2Ke4ZFcekg4yZB9aYBdHk2B3Wfntdr2U4Z92jrrfVGF",
  "key9": "561BLijFHES5RWnjsJt3LwdVUo4UBVsoZmFZYzXxH3KeoFXsqmt8WfnshVT4LyLESMxEGN6zzDeR3XTyxuCHoHHm",
  "key10": "3pVbcUJK6u7zMfC9qK37Sd5YRR21eR6pWkuWVNqMB9NuCNwiT1eowBRd5Ykqv8DsspqKaBKVPvhYgNjGFhke8zwy",
  "key11": "53W7F2BJitBv5ZtBJuSGtdYPdgCuHA9N8BJznMF3dT9qEaZiE7MZLQ6ibjvNYAMit7nPX2E2bH79fZorzLxSxZp3",
  "key12": "5tDnUC4yxshKQ2LJ8zDM9RKRDuTSY22YELEfgJhcL9RYVU6216g6J8sJ4BFL5LGYtRmNVDCqu7E1uryUS55GmFDf",
  "key13": "vYcakRFcTxY6nFFjwzVhR9Nf8T9DNbQK8zocFr19jKRVuJrwFP5D6suQfTue19gvZEUpsRXFuKSAZWkSXQxHwHu",
  "key14": "n54ETcHEXL5oYH1jr8ZNH8zH32rWg2U2h7QvzkKzZbKuREXRWhUdFsNr2V1EmpaHAmURspqNVKMHGytYXtDBwg4",
  "key15": "3anjPi68X3yziMG86huzxM1QfVmR5TeNx8Z6bjxUxFVKsPFas6YQ1HDu3mXNfSkK4tGGzaza4z7JEGKU8dAj4jZk",
  "key16": "2kATnRNde1SHF2Sh5qoLUGbgfV4F62NhSv9CRTBpxYSgeLBpFf2gqNPn5NG8SLbUb1HPzbGoVPmKF4tjZ66vCkdx",
  "key17": "55AqSn3Te2WDJuNfGf41KV5wKd6MuiUhw27dS2EMR4kacaR2N166A9bbq5h1DZY2ngZZHMqSMSZ8CW2ewvCXN7YX",
  "key18": "4rZem26aHww9hCrhaWD2oUE4ARMJsrMZFGLKf8f7yjrw8r5h3oHdrHRWgP8erhY9L3LpdrB4brwemzjx5mUVfNTb",
  "key19": "3qvGv233MMzRMKzFjc37qWHjPGwMmVJSd9G4e6eaZvTsEnWYSKFQuhFVVXvK6xz18pRna5JHhkLs6Zvd17bprw9z",
  "key20": "4Zu121jCZZkAQV2J5Brcyw8UzcMpo8iEU6Aakwo9tGnwHUp5VNEPZHT2z44nUnMQTSZL6MNiLJNpMW4pVDAgtxsF",
  "key21": "2VumXDkd9QTbEX9zdDc7yRoCL1dKKYPku73nSNvAhVFCV78TcenMJ2RbcEzd7cCQCFhAPoW9AdwapWcKwFy2HwW7",
  "key22": "2yUbFA5RKnSzMHtu3EjwY9n4Fux5WNBpaZJ826HHzVFTHRGd3um5SitD2Vxr4WVte1qPaGNJaxHmW82uvHESADM",
  "key23": "5KiyX5895rwRS3R25au4F5RXsTMHtatFcVm3nZ9WQm2fF46ohxKPWyxvvW9q4UoMgCksuZJNj5rqUNcjf2qNDErN",
  "key24": "3P8kF7MY1PBnLjfznkpRxSxAuLgRZKU6LDfsboLxq5WRoLJFEH6Zy67oW4dKWsVBsk5NJkXhZB2U11ZNzugAmeaY",
  "key25": "2A1diE7ujRgREePV9qVr7HRtoUpzVs8AoqTTganckxvzXqtwW5AEpuumHM5V5EZTUunZBNZ4ccenMKQF7JGFefEg",
  "key26": "2yo8D2EJja6CgiPsvEmK4h8VUyNKuwbxGF6ZXszh1dLsigPCLuGZf5BXfznCwDX1Rd7akgQw4oKHPzp6bCqjnZUJ",
  "key27": "5Jug9CK6AdhUPCLWxeB4YNLXVpeeFMcV49mDvXWJkTteyNo7T4CVGEnnAYUUtqobfakUr7TqyJ8dEanB3ioeJa4s",
  "key28": "4aDzPp4gR4SQfMmuiHrCqJ6MNKrfv2aT9Js57tet9ptsgfwzw5QeBJTgBxrj4SeWjMaqth9Qff9BxFbRGSkTJnGU",
  "key29": "5FxitpMmLQjyjonmxVskFv4h1pypHy77GbyYaicAepcnC4LtRM2GRXAnbzMYRx7hXm8jcgDQMLu2jkGtrkeFQow9",
  "key30": "4JDc4vPo6qLbKitVq3RB1ygVKaTLenPUNYk5xMtPMpucToaBWbPjSLVhVXpvirGUru49YRWdQmwB7UNmW57obXD6",
  "key31": "5gyuzeZJkmZiHfDDSXA3A5DipfintYXUinfNs7Lc33ZvTgVLZhxTjWJ31KNySsKVhAY6kfRUBXAyVHuda7Kt7dsE",
  "key32": "2XZKTAzuAvs1XqVihLVdn48QakKhBidVTqVsaicDXXo5AWX8nqGsKJmWZHdRcF9tZNDfeN29Kfsp4wwnbPSc6EWT",
  "key33": "4aAF2PaXU7xbBK2BF4eBNSnugPD7EtP7NikNT5upGDKqrCWPJ4nP6JgqBfE6vyTrQKfUgvrc6x43eUp4nL1biWk2",
  "key34": "VNvyepPpCbxrFjvZxXzrd5X4zSxAemzDp8v3xLt2DYeuwMqeyNZBg4WGF7wufnNLnmhV9ZYggj2BZBaRQYLbSrf",
  "key35": "JV8pnVsMEdKzof9rwY6g4edSo1GHKubLNubEsHMCMg5agQfnRSSAn1PWGQ5tMur9tRUL5PSWsBYVoXV6R4SfTCK",
  "key36": "2YwgzNyDYFAXDn6cd4sbsZ25KuNJynmBHXatJ2BcbkU9GZ71kmzHhg4SiQkVSaa1rVEDS5NLnPRVd5xmPaSzmjB4",
  "key37": "4sR7jsWmruVEhmbDeYYKcv7MWijpBkQqqtE7gYjK1prQv17qNUpMNcXudVyBSnoP7qpTdLY7PueM121GZUp62ZKv",
  "key38": "57e28KCxwaSqSqnyiKFdkJkttQCJiSgZFc7mqAeYNFuxD9q6aSSB7dfiKk5M9driEKWcmJzAn2ABnyQJHmhExbUL",
  "key39": "5hAnBf1ZwDmyhAxWD6yck8DQXKphQ85fRspGL6uZKNT762gGUPGmUpZnY2bAJMNFwiTqVJJQT51AG8aq8N66ZLC",
  "key40": "isdPLyh6wyapjaQCBb91aMPA6Zp6MiNpMfcETbDEUA4qCcAZy1C4Yuqed41ZF1uyW9hdF8JBxM7vTSKtEGhhr1E",
  "key41": "5zbRVSM8WctvR33o7Yi5PVjT21sux1DbLLV6Ho5kjerLkYhpNNRyWAiWXg2tacudfzEWUH7ZurJAfR8gzFwtkenc",
  "key42": "62qXyDpyuJoFzjPTet6zzdqHZcG8CfAAjiynYctHmwtKKA2NYgPuUyZkpXKrhTvn52JNdZUo7UVAPq8bgoFBM98P",
  "key43": "2PGVpwGgqsn2duhGbCuGHMFFmyCKffWLzsTsXnzmv8LUeJ8G3SRb44eYACP9zomxG7y4VzfB4JHn57mntRtbhKD3",
  "key44": "4N6kwsQJaiZaMaES4LWdkjPtnk17gjWE5i6q2WzAZtuB6AzGuvXuR6J4tTyRvNBKfqtTZKtL1CahrdBhy1ksbKE",
  "key45": "2g36r3seQUXTUfJa2ewpkscuu6jmVKHY4XVgD5fzajaoL2zMGf5twx6QQXdHySxC9oBzJXaMQp3t2HXoQGo53osa",
  "key46": "33uSa8S4HStNf3YHyiANPbf4fuzh46idrmRqQiMKmp7bTAgGg7g6WUTYZLhu6SbkhPaPXmsfYG4Rs2ZtBb7QtyWE",
  "key47": "25qei8TT7KgqXbEoSboRAzeco29TnC8JsBXj1apquG2j5fEhVNN5xz7aoodeRekxjVdEWqVJvF52k4Zd4Z3XFx7m",
  "key48": "3fMuwKnzBNhvrTrNFUPcXASnBRbP98yfE6wuhwh6NX2icG1jD7FzfssBPWHnNpKUtnyvqDfbxncsV5s17Agsg6uq",
  "key49": "3P7TirhGeUAmVszutU1R7BNKE2cNGtgWpZ94G4Zw6FLrmW6BN9hrSxf9F7SZLyTPdBJx3MyUvb6AsbKrhpvkCR5R"
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
