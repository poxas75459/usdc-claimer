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
    "2fKbXqzn4ZqwP87n7bhEMTamSeyr7Ruj2WpgLZi4XMm3KjzC9X78LzKeg5UNS9j6FfLvvvuKmEFnu2JBWaok7fHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bkbLchaNxXhK2zeoA3GFSpjrrefzpn6tUsrdxjZN6HqS8T7hXtjJJEMuvdF8c6ZT6Q7CyyS7aU8KFrJtRnwTv5v",
  "key1": "5D2UxcEZJYzmuonQpAyMSmGLS2KBY2EHjaJe5k2Z213carMw5QV16u5mt8xqTFYta5p3CZBJdEgj4K793r7ZZk74",
  "key2": "sNwWHdFHTYRAvsmHKSji5WTiC2M4kk25oa5DYQ1ScmoXDqcxYrcPonZxFkPgdYijZHBhtKBeJ7aNKbUZXauTyRr",
  "key3": "32RRLJQxaYh8ptx42naYTe5MqoZgdhsRkGah1fuU8z8E448gNukCFtVFC243usGeALis5xGyLLxFH9XiN7NdKckF",
  "key4": "35jL34VtsxtA5hi8a2gJgXmrAWXoRuzYaduLyL7J6VzERExc1d4mNmYdajpWxgbfzYveuxWXfH7XGihn8hxS6JEG",
  "key5": "4ZasvkRTUw9wPUkLwSivs4ketoD735CP3HS85kVuSZisCQrbJYMpApHsiWtVtrwy4UvDVTzcCrQhR3MrJMFekLWm",
  "key6": "4yzjhPRKX9qRPueEVNdNWoP2AHZpTDS78F2yRGY14mo2fMYJSqdZ37uzwsW6fyBD1kAqL3DL1hE65p3vXfAcyVhp",
  "key7": "3jiNcQ7RpA3i3wy5SXa8jxXXNz17HZ6NJFsjQ1oDhdQ5UD1K6KjFbrkZbgWtbGcqG11czcrK9oHNzuFiBgCjVQXX",
  "key8": "2xuya6XL4Smb9AJKj2PSTBr4HzpjG4Wza2prCYVMUdoC8qbD4HQUiJsR7f2Xsf8UkXZgb3Ht3724yUocCKi9HWqC",
  "key9": "2auMTq4G6pZudYUgcomBhbYYa6k4sQqKq7D5TpV3tXbkWXRXrTwfcNcH75udjJmLTQJqZCoYby1GKgKuGgg4ghw5",
  "key10": "2TKDMs9qHfxELVBArBKDeyLpk4HsbkqBvXavoAqbecREXBdxV1XejU5AezjVJyjiY5emiBaBcci7yaGM24mMkWGc",
  "key11": "BiinekpGbrpzYPLnsNwA92uHnQgYjQofYpSBPo1ea8LL96688VVMC3CstPG8C9ZjYW6qWZuuF5o2zpnt8LBYEwk",
  "key12": "ZRmLsofi5weyn6gqCs8FpYGo887S2eLDBieb93KfwTf593vPbysHKWpUkS4Z4MWrM8S9YMCV7GwK6ExUXi9TRw6",
  "key13": "fo6AHvEf7qEJot5DEQjTmgASiVf5GAwku7PKUV9C3fwGQNMLNrdgKXq4PN8BTht5iwKecfQf7ovtUqSnRJs6P4g",
  "key14": "21dRRemk9sA6mkihrppXfSBG12FCdvYKrVBnAgK7ncWPePrkeo49mqq8ZoobJoX72aPJzL2JT4F2yFmbRoSY53FW",
  "key15": "5wVjqc5GaWyjZy1SZqedF5v3wsSkyfUtHp5QhSX1SJCRwsPDbMbjsUS94NuV9uDZ58KJrXMewMLUdsScQmXX1F7e",
  "key16": "5cizHpYPtQazCV4shw3mi7uTgQVFA8pac7nsyMoG9WJ2j9TzvYZsmRpKEXhsp7zcdc6SC3gYZASRBci5DCMfEopd",
  "key17": "5hmGmXxhmmgyB2siPdehYy4wSnj1Lm8nJVeRvLeJZUBTTJhc9c2269fAYj17W2joNbor5kzjs1Hwk1Bz3Zi92FNo",
  "key18": "49WDADVvVpAW9VoUn8H92YdPwucr3P2dtB2PF6gGuhoodDg7PN77nKCqZ6FceMmBQWUcUiws3QBLDcWZAitho5GB",
  "key19": "5N2gxeM8s55PPz39Sg2d3ToTCeDKuU8dHdNeFvAp3LqCs1pyLy2h79aSgSTTDy9je3vhK1Z51qAgLjXQQKhSwAtc",
  "key20": "PQL6hS2Q4eMyjLoG8n1vZFbhQuynUjHjAq853ocJHENPUDnBFtYgpmTPy6BAVt5AV1whT865DpLZFHKG3o2Kwjm",
  "key21": "2GytM7wJevaFfTpgQySp1z5jQk2o9rPGThqRnThT42kzHRCxWdHZoX4amdFEV6VPhHauQawy3ZzmXtYhMDmLD4Ei",
  "key22": "27kDuMoeSznprQbkJ8j6H2fvgtVd9iun9W3QaeqKQqjHgEhbHL2St5NeHFh26RoQegUUyRZrLvk4MbB6XhJofa3i",
  "key23": "2AcAydEGQ3KaGEzFFUfZkRzAkobpv9zUPUupCGUqJwazW5P2WhHaaPmhDhvD2rPGgTWG6afLsUhxSt7fVCDW1J7f",
  "key24": "2VVxZ6tAa2gBJnNRA3HRXN1o1QjT5E1RH4P4Pp49oTjVbUtaVCuWWRgGMWfs5YFFR7fbByYzZ1cnPvAx8YL9eSn9",
  "key25": "4aR2bAEeFDa4WSC7p2unV51e3gMzGmWvLvST1Tdtrc8QNhK1VvCtQcnF3nbNwxKn5eNZeeShEe9RyAAussSsk9gX",
  "key26": "4u9XXkTXJZiVU6VVKpQF2iVFfrJKwvyfP5YaPbdoUiYXzktF4yjwztdopK5931osJgK6AFn2LpY47cFSy8eNWHta",
  "key27": "3XTTi1zoroCVsiHYgJCnaEcpYTgyuxYZurHrmjx1YrfoHwSwJvQTXpn4L1iGy8UgNtynhwLyaBBTU4CMQBwEW2rU",
  "key28": "4WsYcLWmykpf2SntwWjmo7Za4ZjHM6rvufAJiTm3aoKmJpiU4VsQyCSybCycNSMP2djrusdKptLmbeS3xiWwmTcD",
  "key29": "uBn18JbzWHtZMK11wqW3pxxQHh2s3n7spGPVvAeeATu1TTc1a2pocFaMgcuUnoJsXmptSKhDT2YsZugGxyp5GTg",
  "key30": "5dV2ohPvFMWZ4BJTCiXqCq38xHQ35M1p7amVWkMcgSNNnajddX6R4xFgmZtcFVonPEnWCijhaeqwiHZ8veNQcNRY",
  "key31": "MqJqJ9xfufh228TfVHPCwRwY2SrScnpr9nhnhhApk9odW36ez3F6oimZYpGMLjZLaHWZomxcDpKK81jn8jxPF7X",
  "key32": "2LDyWmArgae4fBytmqpa3juj9dY96jtxrWhkHMrFHFPm2xgWuQeBSZT5H7LCqUamcsnWeLMwfpCdfYUgUh2Ahoig",
  "key33": "7HYYtGqMEP28BJPwqQ5NnTywMEaeoHfCpzvKQ5b9q4CvZybXkH9UcqsFwf9vnkyDGMQgCRFTxkeoa8WjKbKuMd3",
  "key34": "4Uhp7LRVfYUEC8gpcBZnFP6tfbBvJA3mEBcvdX9SgvPmXZb12D5o15WRnSNifeZBhEZEaxy729c8YNYnS3aFYwN2",
  "key35": "46GsaCQagZxeBZASnQ6xigKXdXva7Z5a5RKfvyoTg4RXksLnSFLiqSJ8ZdjjssPjpGqP8MiLBvmyGUUbfAPv4NRp",
  "key36": "4uuBhqbCejketBg2MuWT5gubmEuAHb9kumuk9hDZx6Bcb1JZ4QDqLGvcTC9FsjyLYGC2tYn1nnNPcq3d1P2KRNNv",
  "key37": "3ohyPw1Spt2e4S547vnHhJsYHnEeGJPqfKpEPNZobfiakMkzY6b7VtcNkJvDJf9J61rWHHjZD5yNE5eVgdBvrfYP"
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
