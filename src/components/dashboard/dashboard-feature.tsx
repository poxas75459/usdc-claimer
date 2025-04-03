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
    "EFJBnS3KoTAtj6aMiHE4s9Pbby7j58CW7YJ5zEQLnSmkVfFxuuEDupgkTAGbSxjjaj8XmV3by7G3uhA4gyybvsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6tUmyqc2ZMWYhc69pkfB8WLLAEhjrH5Q4Z1piALnis81BGvB2Zrq9g3bVVRQAS2o8Wirpi59pepxgk7e5dVYAFv",
  "key1": "2P1cFVAFxuWcYQHByVixcGxQiHBTY2aKZgkfyKWGcp2sMUsVskR7nuEmw55KbzBEBm7JpAVdrmf4M3e8CTWMaUno",
  "key2": "4TuUFJpziCDkRvJwWA3Vwg6CjtntVGLNvgmA9dq3cifaZK8M6kC16nMYN8QWTmrTuD4U1PPCpZZi9WrHEZPbScuY",
  "key3": "3LPqjzTipqVBLBHzPHeZvMiXyX2aCHioHMJL2JnvG2ZNJhv6fuLhSrzesSLDuJLVXRVYBtBs6e6ctcCfcJXrvov",
  "key4": "VmvsS1dWZcSVrB5gFa25Da3KCUZvA7hTBiqvspVVHqk9sKpCGC3WmosS6vtQPPemLKB49qio5KhxXyua7wQgXkw",
  "key5": "2Br44qGdgrGXqBw5hoSZFyVxZ5bpZo8iFU4tYQTyiYc7rDtQqd6TKNQ7eihgtQJZndhMknHnZfUchfS6UKPU415Y",
  "key6": "5LJVEvaMCG5yz2poCJVPSwmoLYDQwwJerhiyvrou4MqAFPyM3ZVeJbnruS5iXmDQJaoGASQNQn583esubqog4XzS",
  "key7": "2zBrp5dBf9oZjp5HjiBPjBFnpLawdDAxerKgoX97MVcVvBtbTsRkURWVHGeYBx33hfm7QAkdLWPLnHF7GGHjLtqH",
  "key8": "WoUnnq76AoSKjxQqjjc9Dz1zaDETLD7ApStipWbdXjWjEgYRMyGPGCqieY9sL6wzXSgEmaN4C7ESFJxi6vLjM7K",
  "key9": "sd43c3uvKMGfUe6smiFGeQTURwajLgx2BjtebfFA3pwHR1FJagGaM4UVjkYfE3HrWGq22ih9SvN3S3JAZgTK3QF",
  "key10": "21L1gvNJRbrhKN6fLwvju9yZmvjdN8RVKeCrc7ziG5QKq8DzYMWAn72qx5VSRp5yiVZb6nKmhoSF5gabNQYfefwB",
  "key11": "ZjcDbWVWbGTYxtX6MntbVTiCi6VC2VFNUiJc2xQTbGMFi1vuRxKUSZPW3X41y4D4L9KHQJpLos7NFeRBNtCCBB1",
  "key12": "2BgnN48tiLKwXaD7w9mtPFViDSvETj4e3HEwpr7Wv6jjaa6vAWPDUotxszBtDdGoDgUpFnvEdj4SvR1DFrpwZphG",
  "key13": "EX4gArsRUTHu2tLcMG5zQfRgWwiAqrDVYGWocz4MvjfjpVHkAMVXuG5mtFLEGLxf61swxACd7oK77mmbeTsQwqY",
  "key14": "2f14uVJdk9DeJ85xwQ6XDe2EtcQTTU79nArfLMoTC6kCfrbSM9gZd9Dgm32ywB5ToSumefquj8YY4tuYUUbD8d2L",
  "key15": "2JXns3dShMabHviFqwqcfeSazxEWGQB72Z6J6TujUjvFzT6G3EEC2v5UECUeunnRKcUrEPm6PWgvDivsJATKwRoC",
  "key16": "3MXEjhTpMb9fDhdByjQ6mtzxnhvpYNHimRiyptvxqKJNrAgRf1axoBR5LbhochQe7Jg9GcJxRdSPUzcVdbG2pRH7",
  "key17": "5poEVu229LMumfMQjZ84pcD69cETeKMxUjgWecJ5HjNGmFTtAcupLzsLA27Z33HPB3JyrbqXynnAArwWUqwzUzuh",
  "key18": "5wemvoyNxVVpW5exvY2KSNpoA44JnKCCv8dKNoyWcCvMSrHn7iYLy5xr9XsNGuVL6656FZenCJqkxjQYj67AXmWC",
  "key19": "ykdquzXaFVScJuq6FZmAnr7DiswiDLiJJVJYFWptmgAyaNbb6iN5q2mAB9uWhH5hi83b7nDru6CV346iEFJEj6T",
  "key20": "5sh8Non3AdC3q5TaBEgZkfFbf4jDmRGGdYmAi1imKNqnkTyKCHUwGEcBffx2s514s6pW3j7DpjjRHnxVnDfu1tra",
  "key21": "4ecccuosoTRASXxg9ggZEMqzX35ZTFSJCqnU3zECMxzCvxYk9LXQh2p6XCXCc7H9gZS3e2YD9m2FVhzU7wYtBuMg",
  "key22": "5CtH7zyKnGTx9r6BhgZdTC4vPF3f2hCuLknptfHJ2EnNb142k6ERLFF7GC6BaUTSR6BhKmcMNU25zV2nuiWSq69z",
  "key23": "oMhdocMBZ8FD1fV6BqsBBMeWmr5yiEga6GNDEa6x8VGnHU1PrPNC7rHkQuLrihmX4tUJRpHz9Ho2bcG3qdpnWdt",
  "key24": "XHAio7SJj8XvMFqH2YNw5GSYk4nqvuVDaGAtTuCJQtk4sM2GzDB5sbqKLey97QJjzoEn7J8HNhx5xCspdNSSxyT",
  "key25": "2d7SexnYCn4tXsfMZyoLUuyUxX7gH3C1GzvuQ3APcPU5bLdBFaw3PzNFwjnS5AGnt3GYckguttHPzsP2KuxdPjoQ",
  "key26": "5sgMLe5vgEyMgYbhqyxPyKDBx61LUJ7J3fyLpHRtWYWiaTgxwPJsHFpfZJQ6o1EVX4aZx6r5HxZEoW16RtHEmDXm",
  "key27": "BuiPXpASaGbewJuL8LsKyotHXs9Xm6FETaybTwUtPfbXEhnnCVFj3QdCqCH3eeenPM6oVZ1mhTDF5qWnrDPX5a2",
  "key28": "2HJGcPT3Tzcezj85BzduY2RuShL8j7FkgXQDyqqjPBSde4k4NrBNPGsqRqgxDABWuVTZmxunWk1FVuiKbWBvDkR5",
  "key29": "3vmudtcs89U4RM2anoTdvbBj7YiVXxMoDhy4wgzN2yJSX4BRsK7aTejfMonYigRzLcsT784f2uRE8wkxcszYnFCU",
  "key30": "4LaADUmtgc2BDtJkG8kxr9ikzfSMmcdAanLo369zwLMjxBGR1GXvUpN7tzCJ5CtF8rkx6mooYqavV2tR2of9k6b9",
  "key31": "4EB37CJpDrKtiscKW4uHbBrZxG9Nsgz9fdHinZqQxmdvVWkzSEGVEtwFbWNQAw3UNyEZVpUtncN6c7G5aq496zc3",
  "key32": "4SNQ5QzdR8UjAXkJGMPeybTe2isJhSqvhx1qBtMEGCbZptMJxYqZAmKq6vZpVwJYBUtqgR4t534TsSN7Vw8HEDpg",
  "key33": "4SSUoGyTWT1V7tQhADqxVjBhnzPT4ZavfXpw11wgPbnPyVFjEiKED6woD1e7r9KS2Nn17pEhzzDmTw3bFRdctRmB",
  "key34": "xPY4Gh5Jh45PRsE2G248cUyMiVgRmTZeUoAtuRMs42BuLzRrxev79p4GmbJdH5cpXMSteZE3oCRDx86GZzuXsCp",
  "key35": "647rcgS1xXyLcbQmTETXsWLd6mh2rZcitLipPjadXJDgYVJpWBXm3ur4bK2T4gv91Uwdp7v9SrSn6ws2e4btYhPT",
  "key36": "3Qi6L3YmkPzfzVJQFemZ659GLZyxNtDwC9aWqL5qkmTm7vNGYgepghSRHb11Mmo6oK8m3hUCxwSsVUg8QuWeKjDF",
  "key37": "4HDFVJSd6kjZTGLvqX9KFLuvCinP97R8dmUxL1f7mU49WuRS7fstEmkVkQ6WxZ8tu7RoUKB8bQ1f4C3Bg4K9bLJN",
  "key38": "2mN2HvxHFYdmoHhcQGQCiros7BJXwZ7PHuT3Dv3DvenPvhatVRSuauLZffJ7uVg6cJzfUsG9PHcEwCyh1g4GHJdJ",
  "key39": "2hMR43XsyjSvXjPcqseiazsQUDVss2kCFya4WzDMZfhrdHjHEXdUVsEa3DbRWof9GqwqJzSjLujGCWYQcJK4xVCi"
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
