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
    "4VY2e3b9CZrQLrpgwbVRs4yrjsNVMokFwnjPqVzsS2n6uiYfevGFJpvfqZZ5m4eqaAYdVYAfCwuLfiqSeEY4XWoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SKanDs7MX3DGt1ZT4ECMr1xXjBchYSL5nc5w6b3rczrQ8x9qaEF5hsVunzV3Nft466zQyRJEDJfX9UKLdHi1knd",
  "key1": "euKr2LpC45LaQGxjnFgRRe5afjsq51sdkTQpg9yHCBTmAg9EmcaguAN4M8ryV3CL6sk7vQyA7JQXTvsV4Cbm9DU",
  "key2": "VxPT62pMU2FPu6MiAsafvRcXBUi75jKywWQcGApTDjtyGzSWnSGEmwbcGPSEPuPr5sxTSFf2uFkMzEEgjGzF72c",
  "key3": "2yXuvgmCChr3dGaNxxmXQ27xa8zooK74eka7S4eEnsWcfuihpwBNtKVDGNgE4qqVz8PLJPBJyPybEbZkrzmPzfUk",
  "key4": "5GqDtw6bvt5yVLCfAZNyJBQ9wSRiKvFxXskc7kArfm9wzD3kjigwq5NAjeSuEDPv47BnbUCisakaAWHaVS4Eoqw",
  "key5": "ovVLaGVpG2BeSX5ZCnYXVaV7ta1fEv125UqYF7E53ecZEcexMPjVj5sWMMW2KKw4AduyxtZqivTyucvAy3GA5CV",
  "key6": "2p1RjNLWiNAJAF5aZ3pQSpKsBfwXm7L73h3cQ27sVuhyPoV13dC8prf27Zu4bBvEdvf3dQNj4ymZAYYWvNkpSaPg",
  "key7": "3m3iWfcWddq4PS2M5ExTSW1258nZXQpAMF8GZHnP3CHhGvRV938sdQQVoU7ac8XQtKQSRvXN7yUKTEnRatVNeTCi",
  "key8": "59jdvniScE2FG6381WFYW5JBqhvzSvjEtvXfahiFLfZtPcWpsFbx68wrDvWASqbm1YPbJfym18cTD915isdVfkd1",
  "key9": "26fMHEeYzMMz6VE5sSbzv1SkVWdbd53y31V1ePqU6VnXvZWMsMkA9888eJPJqVqAFkwkoKNWKsnqMtUrNbVAvcUT",
  "key10": "46L2WvZZME7FeUBJjBPAJBqd3ojUZnccmmzjqXc9b7r61Aee4Uu6fygzJf4QP6Fk633VpG5nRoVvEJcSXTYzbV3x",
  "key11": "4z4Hc6HbA24v1YAi5FRWwbFEvLrZV32wUTMT1x6C8CGjCmZwWR8o9P4bbwKiJpRk5dURixtvhy8EnJ1XbK8qKw57",
  "key12": "viHGBdcA5tzGdqMJAu2A6rURLbj59SypBgsJJF6HYkueEG9Sh5apujpPqCt321byJ8BXGrEtjG6pqWm8iWz8zUW",
  "key13": "5XV5NySA56ZMRMKBSRN1aY9dM7qVjPY6mqkjTtyC8qDkC1PU7Wuki4jzNx8pP9y33w6gA1jKsFrfi6Q5aEHpFuFB",
  "key14": "5pran75uLgBAugahd6GrX6P2dfSE8xs1YKxKB7tgWWZswkzEF4VbCvZgvzKHz4LgByDXcUWuaXWFcfFSutCun85M",
  "key15": "zY5Y2auwt5io8iS9BQcCmxfmPnwsCAy8ZmcHta2HVP2huqkaT7kzGbW6BJr6uLknV5DMmLkcWBZWPfcMd2H3GFv",
  "key16": "3bzWiuohjV28NHb2gU2aHFsXrVmvFhv1scRfrpiQCZWwyjT4CbWBwKGYMp7aSypkFVPYRSmHes9T3dHdHch6x8io",
  "key17": "496ApoZvLCRzm4oEA4GsK3Vqcih45pdTE4819ydC148pDvsNEACcpykukGLQ6CnZSjQab5JmwpboEqsGiocYgbgm",
  "key18": "2YDKfH7R8S2txUKWGTPSs1ittmiUkLSaBBdNEMxhkqU5y7BqUxW9BZc7iYravhCKmNyrVP47zouNrzUC9XBhyfpi",
  "key19": "4DBZaghK7wxzNjpoNVq2YUzpZ9kveLoGfutSAsj4WfRkF1gjkwPrKJjYhKyVHjsBTTnxvEVJejwpkoxbs4EBabaJ",
  "key20": "3Erge5eqZFjJ5xhc6McvHZ6L9FankBsSJkR939WZzUSARLUDgeCcVq3DZX9ExRSHrPuWLwVHmhcuc97UynSQhbPM",
  "key21": "4ULAU9k8iiyxH8yH2UCdDBKdNPbo5Qp7VWqQBeE3S3fDiY8Uu3YzVfZYKsJQkVXHFHahK2ZoBYL9xEDdoG4efVxh",
  "key22": "2wZgW6d6dVHyGyAzsXsJuoEWiT94vwVo18dm7gd47pChusXwuKnrFRuAaKutrPM7qoGd8Mg6sP6VN2y3GoQSckJm",
  "key23": "2X1VRM9z8kk4BwnwoWFXyydAUPA8em3G9pYFCHyRpVwDY62Z9oBtybebBmy4unNBTftKGpSN87qQuPj1KZgspRSH",
  "key24": "4zn6sQZqB4dFxiL5tMocdofz7doHM3GyzKWEhkoNTZNthfaCJb7mvgWrG2vSNj4umwwXm8FmPZTeidEekUj3LwZJ",
  "key25": "316LfYXEpmqjX11jQh3x8j7sBmZ7yNGvWpySnZgbjwGS3F36wbhj1NV8hXGqzjoezzFHAPjpRX118wZih8JqWgnG",
  "key26": "4JCZYzJmDJdnPyRxwLtA51MCEZKJaKNf5XH8pa7u8pk9gcqw6QHd7J8ttSVzvxXjPUkRAeFruJL9RB2RnpLULDSB",
  "key27": "4K7htNh9n9YGPJkq9vSAMofMxs9BHe5u86EwYxTmtAPpLBUtgZNibCXNfauYkumF8rkxkSG6UPoe5D5yVSdt9DHo",
  "key28": "2aV26Hmx7oGtapDNTwJYSMskgbMHm1gvFDs9KJw63nPFEn4qGYPPkbXxP84g7tXwqUKbTAXJC5wUMcTQhypzUXKD",
  "key29": "2rG6uoXvaru49mW9oLWwD6FPmNafVthBVeFhPCPyXv8Lr3PiT1rcZStSrFbiGAeidNqnHHmmke8GKv4xJDw93Hwv",
  "key30": "2XeqX2mmm12cd7wMgLjyfeA5Ceah3kiYyoufubCxvhB6vVD88U9pY2iiBLMr6yC7fuAQ3BEyBaV4Qb1fkPNDkP3o",
  "key31": "GBXmoaSv4tYobLPQs29n7Vkjxik4BJGtBQvfCd43iw5HQyYaJkYqKVeHcdHwwCTZRVcnLWDQhwBkrEDjfxBi2pB",
  "key32": "55r3mvKRgy44MN4rVR1EFwBrnj3cyJL7NtpP1tbMgXWW4X6HLRDZT5vtTtL3nKHaH5P2WjnB6gSXKmqqHBsaQbtf",
  "key33": "2BYnJCdyRBjMLfhc4SPs57a4e1BeHyCs7eYaiuav9vYvkLVHUT1HPoHWoqJJZUcs4srohvdFr9gYnQ8YNb1Zq68v",
  "key34": "5cem9WkYxjNmFmD6oUmnsfGu4nb1rUXdCQXRaqvBvdF43eF5hT69UzvgZ9ghruxnS3ULbQGgPcVYRm5YJogbQfYE",
  "key35": "3GSNt9ndKnHtaCW8DryDu3GUjNygSrKZerF9MEiLUsJGZP6Ey3wGiaNGsexCPQPtj2y2JUGJp8kG1F4SEzPPvv6n",
  "key36": "3CEEBPcQsgaS6RSKfoN3SDW2JMFvuaQFSrYqbWvbmFZWS46UQNEmtqRCCxoShuQ5XwH8uuKFhvjpLyz19jaeug7E",
  "key37": "2qYSf4Dj3QyLqYYyLVJYe9DEfyxtVbWVRuWDaBsqB7nFrS8ptR4CHFfFekZzx3bSR1WDKPmXMpFf4dQ9HKpJ3U7C",
  "key38": "4raw3aPyqjNFPU923gwYjRQZ7aN6QwdEBiV2XidpgwrkLpAWQtTusrgptvA6p9Hch6RY1vdWRajaxsKMPzdvJXst",
  "key39": "5Mcdg9yLUD8N6CDnniwBCqznSFfNS1X834pWxw77tsBieK72XoCkZqG7Upt9EsuwwEE6Htiv42JmnWKBg4YwLKF8",
  "key40": "3DpCQ6zwHpgVbCBgZDS75L9LUQ1REprx3G9Z5Q2UvRaN5yuHnAbcXbjzaPfoRRiSGApG1kX9yU4snmthyDKzwuEr",
  "key41": "3FU3ji2itRsWMUXe5C9HsWHYQGmU8zqztmokkMYXzXsm1eEkS7rogq9jR4RLkW1YdemzD5PvHrdCHJuyTAV43jXM",
  "key42": "2QBQbLftSAVhm45J5C5pQxxBfSGjQMgM8Pn3R1RgzEVsJ93fBLHw37egDnqgCWs9AuJCPNSzygNRfcUyGBdb3R8s"
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
