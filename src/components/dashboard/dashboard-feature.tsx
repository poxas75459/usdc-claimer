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
    "4t2X74XiBMv97Zyb5x4NmKeoPG6YMgfHPr5kW4jSpjiJjzgJcZutRMEi6K12MBondSwhA1YorfHr5qLymtuCCHCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xmMcgtzD3w8BxppznhPUjpZYZaiz7wBMMtnTsFKDNLY6ZQFAqmKtZsd4tri3mVMoH3hgE2w9PrnQDdf8poR6mU6",
  "key1": "5mMx1QMuF2v7X6MT6gFuzsRcctG5jnWcy2XZSCRoDGAybrCwTKyV3bu9rsqzMAH3NLfqnqaxHo22cjaY5rMvDf4m",
  "key2": "3cP7f6tnMJ2YgJPdLZ3tGrjA4GLovfZ8BN7bRdA11ZzZFs8wrvoL1wskwjr6gB7Sz6BDwtcft8sfAdUKDVvaEHwv",
  "key3": "wqRf2FXcKVXGda47UacVBtZpowT6UQi3fgvzwxNHEf6xUqM5qKytvAyhTurjKwGjovoSyWYBgooXLiNYbdFgRj2",
  "key4": "giHZwV5fabnq1pT6JG5r9UFX4L7HFUUrZaVjyiNoXSSgvhpyw2wFP6DMh7JXvhRH2eZ96ZzWUM85duLCWmux5YY",
  "key5": "5iVGsyq2yLUrAzZGCxm5Tf5NWwJTHTG8ZpcFA2biwMkti8Aa4k54KBb1qD8nFPq4jrHuFe9iQJj59pMgz4pzvtk1",
  "key6": "4tpkdS7HdQgRTvxeRnpF6Rg5BovSHfCfNJUArsQNgfWA7WsszQCWCofDsXDK8ozDQpNrnVbpT6fmbB2nAG5Bowty",
  "key7": "iM6Y49xtG4uBaeYu6xhnPbMMxA9gyqsNoDs8VJwKrek2RMeBV54rdgsoegGjmkTvkk6uoMXM4qA7wxby3u8DZxY",
  "key8": "64CNRVeaB2Lgets7iQoBRYx9Xk3hPpPyEZxHVfyuaBK8Q1tfCxQ7NjxTSwm9GRdcpfiJRVefaR7PSGc553AjNj9v",
  "key9": "4VHvzwf2wZughCvipyRSJ63kF6y1ftnD4CBDhgfiethJeFaERVNZsZ3RbEdd8VsokpyYgDdsDrTaPjsKjPf6Uz3",
  "key10": "4mGBnKXWkkQvm1cDguRQZwCgR8oWy7rgAyETpPjBDwkEcSkBMymWS4jVPcoP5TFJwsFTcvViAHT5nHdNsNwbwan1",
  "key11": "42xXfZJULX4MZF9ipNZ3FUaFbucN9WDvk8sPDzUVPRtimh5jeSWNQbaa1iG7gHhThH8w1RXyidfqyJ7sBj1k4PQa",
  "key12": "5ZEs8r5MvLx4CXwcajJNCZymfLMvZPMS6ShwvhszEHFNjwtuK7rFu3mBEs4A6ENFdkrEkubNa1GS8pY8WbAeMmug",
  "key13": "51QiqzaTxw5uefY58bq9PMNXE5X3DFGmXL57ZQ8mCKUAdfj11eTrzCYN8pmffVvhJxJa6Vq9YfgYiDc3nbPqmK2T",
  "key14": "5M7231w537BdCmi4EUZGbvv6BqnCcs6jiUBUepJPLTX8ezduGSDgYyERuWX2B14gz2hC8tspTNf8psUxP7QkVmwF",
  "key15": "5FkmqffMytEazXzhuuqUXSq7wdbx8Nu1Vncbt13VuTWhHcSowBkbxKFEdEGCMmnZgj4GFvJnTSu9xGFHv515PkQP",
  "key16": "nSufTURPe7gTr6JvU4xfLn6WUxuUqaiHHT5rSp1bjBn9ehTaaR5dNwWebwoQkQGTDBHwc631cNs6C3brubftzLQ",
  "key17": "3y2L9ZWMFX92mS35HNzQKhWQb3Ef6XMZNAitf1W3XBo85HL31tWXft5H87bbnBB4uWNvhYncx4EUbhVhmc8thzhG",
  "key18": "WAhcpu446n75SHvx3hq72tyPi92zBy9CFQ4PG8QTPcBEV35RgCmENMqidW96igr8Qy1TWzVW5AoQrXkVL7EA9DP",
  "key19": "5VC543ZStZsmZySrLnCELQjr2zVbr3AkQebAGHRNLEy2skCmMCxauqeaJupFfHbishoo2opK7fzykMk1hutqAbFz",
  "key20": "3KMwZmEsFVhzAVAML9qYd328cd7JuFrmofb1XwrtBe7tLF9U6Qa4WBBBrkoRwDAhh6cKHXqKF344nw8sGFZVVEi1",
  "key21": "QXJy4byWmDn51LkfMDyqryRFQv3a42yaPQz7DsJQkdFHVTCgJ262gKW1zsUD675X4PmsPCJpeuiyooVx5xSCerZ",
  "key22": "LSyRKNm85DdYE9zX4uH4F2sG6RgymvjPFPKeiMRnAxNzzeJtNLLfsw7HjcqjKkysr3VVvZidqDjo7qqN8EeSAr7",
  "key23": "3eCdyBNMrP1MWyHuCE62YQEj1EhrQy6EMg3J3h495smgeX6VL2B2J3Ed5U7XFDSr28NHjicZFDraV8A4kgVAbUtZ",
  "key24": "4PRTWGAuEDNyuC6yLvRWVSHVExBmBjy7N84Qj21bxw3jMMTqQ2zVphtkx6wLqiBnAWwuvaXtPYy4PqQicjP2ZN8M",
  "key25": "BcqSFnQDuYr2qwNtNYDxTPuFvvT2X8kef4gkVNnUQJ4LnPdhXouXHnoGphhhCk8YU5gFH4b7cJ8su2yhSXhz2nR",
  "key26": "4TNSss38c4WB9Qc2GHcQqLsRDj5jo51vthxQNwfmS9qDANbSPb2u81mJvrCL8Z7ZfxUT1wgtNaLLMRV8dbkhGvQm",
  "key27": "5JzcRnABzB8zCUUYJ1x6ggprHhCeFX5PcuHzzQpzoqqo15xwTpLZeCzPyrPqjVdB13LNmE8PNJLD9x9sjKrQiNnP",
  "key28": "29uswRTBmKAQKKidENTZw6cDsHcg99K6hTEi56EaMdLB5wnYQ6h4drV2jJhxypX95hCN11Lg21Ngd3RkQK97VFd4",
  "key29": "2n5VjUyj66MTaAYXk9C27vkmD8NBvoY6Yag2evTfpuc64ahpgTqQmWwADUkKmo78HXMZHRrkMXnG7pZCVPXX6y2N",
  "key30": "4QzEiRDMV4GZY7H2LtsxSWeFmjAqN1evFzi3ELnsZqp3CTGcFQSyEXBuKt3aPmrhJGZZTD1Se2W8gdQXBZjqNUL2",
  "key31": "63xNnQCnP2DTxgdgbCFwrHxyt4KQnzi2VKox3P4D23K7k7UBGKwXpBR5ZmRhRKBkL5T9MrGD63BYytksqNUCMrPA",
  "key32": "34EenJSTmy16xbcNCVfEyof4xsXbH7APSJGgoDo5Cs9wgW8BHj16LVbDLEUFhX5kJzLvPtnD2ef5YQPfskB29atS",
  "key33": "3FkPsDECReusNzY37fCarnVabB7hiZMiAgH6n77VE3AAJKzCz3VRM2iwxTm5DSCBHxRBbLpx5qF5W3RSUbcCmexm",
  "key34": "2vMML8nq9cukvjMYYBY1cyPXvvBfX2sfZMVzJNufeCLfEuPUhD6NjBmbNuoQQaU4oD8dxzjdcwone7zok8rBqF83",
  "key35": "4q92P4g55xrAAyAjgMapxvNuaF7JzYSgc8mNiycnAvv4LbqHMdjuZGvAjv6kYsiYXWhWGWvg4ynCRkiZGGST52Bs",
  "key36": "51ZoRQ7jLGM3oX82NsHevPNy9wwy8gWCAjp6tRh4ZtyHzfiC2BrAfp2CghftngJmbrLDbLQCVGCAc2UuxUWDYGKJ",
  "key37": "4bV4t8THHyWgYdfF16imFJj7yaxsmk9zUPVZk166TXpYGNA8ttBfLFV1TvGnBu9gg4j3XiDpkeXcqE2rUMxku4BP",
  "key38": "TpbRZbrCXByA5xFp2pPD4JL1FX4DEi5e3TcBUS3VmvXRQistH6feEABZLw5exqk4Mdgc9FJcBSBdroz2P3J4UrW",
  "key39": "3ZWAo2LFpf8kAEzBU1G6oSbA2gFZqmDxro3YPdQAKyvgLwRW19xcFAKZ9H9PwHf6cFVrQ41mqL68Fpc8cuX4h9Nj",
  "key40": "5NTQS4A19DDbf1osPofNKouisWWtKJCXJexzjrLgi8oY3nWopmK3wNFwMcbkCbezucEvNVwCAA6VkHjEJvq3MSNH",
  "key41": "36BpTSCfoYw9Yw6eyUXJUnB7htHwjrLtwbFzGo9ZmzxPE2hnq3XKyLn4Z2ppq8oDd8KaYAh6dUnWMK98D42VPUre",
  "key42": "2UxPHktBfzneBV4wmKkgcUqA9yp1kP9jJy9cWjmmGmkPUgedcYgqoSAbTn5oXxNi48GXpDFfTLDboGBksGB3sYFr",
  "key43": "4ae4vARXTTZkQ2hTxmdLVSxsHm6G5k4KdYGsNti24VETDNrQYpCieLT6MLcFnaiVgUoWdWBZFeKXwFEFsGs67HXq",
  "key44": "3PjsV15FYu6DXegaHFU5uNESijsjsErcvddJinUYbKSviNfkDyqTXYBepNK6PvmkKtcX6QgPQ7FWq1kS6v3MoaCY",
  "key45": "WZuteCpSFPbaxVARtG76Rfpc7YkwLuk5s1JTxjJPMLTkg2tb3yrg5HzvGHtN2QUiGd2iTMRf9iJx4VVYN2tz6CM"
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
