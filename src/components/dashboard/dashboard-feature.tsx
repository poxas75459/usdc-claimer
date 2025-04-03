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
    "3KQDX92M9okpBMbz2Gk8ndZZDgxMXQ86n7BhHgaXEKLV8GgtNkFbzzWja5BrdQ39cwoToBkvTNKNhnLayicuvQrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QGG1q2Fzerf92eKHtHaL1MfgFn3FLGGDUTbqTKqvE5eybyjk9wvRxEm3EQv84U3VqfWL2eBH2pAnWJVCwQgNHhK",
  "key1": "2zWDpzAzCm4StJeTHZB7jDmxoYC8UBSzYwbWNwhdFy5NmUgHDGJ1ccUimZQ7n7ArFfHV8NPF5WSe4dLuqWveAYgH",
  "key2": "3t7q4Mfb5mCDhLLu5HzG9fNDyLJfTpsXK7tcCzQTvKquxB8sB3MgMkBLLbEujSUjzyobj7JazCAG744ZswwzuPqV",
  "key3": "3z1BBCxsS95o4K6UDTbqQwmDykhugtT1KPyvjfJBLiFEyajqKnzQXj9FHHkZ1YgT8Bdg8dVQtWHKdwy4BKhZX2HA",
  "key4": "x17GVhJHWHJfeqY4PZ49ytCamoX9rG8pEibFh4B8beLz5LUgehpYD177RhSVxp6S1rZ5DUWHAmosmzjFjKGci5i",
  "key5": "MYVZbt9eY7pJqAtyDZ8oVP7iozRwES7xHhkqAfx9zU4nhDXMZ1nL48FpJ5gqwS6mUwSJKhHmRzPaZ8pHbHzD1ba",
  "key6": "KABP7c9YbMX9hX3AnuTZvd5yAPr1hmD2vepHbJ4kv5znnA3V7t8L9VPNXBb7kbWUbEQDX412uhunfgyKPQmLpWo",
  "key7": "3Vag6QDZLCBToCQCKnNgcimATuuT88HCTA7nUewqQ7khYunpbXUcKgF7pP6rK4VBKjUf5qG8okNZ9Dc7Pz8un9Rs",
  "key8": "4rBXAVLEF3tvn3suyejimdVp3iwVGkr6ZDMbCCfqe2FCB85F1k1ssbEPNAdvHam9xfC1yEcyie7YWwXgo2eVLBEK",
  "key9": "7abXePnbD1hreStAP3Fz87FzgFssUtXHdqgqQx2ghWWaSWcfeCCsGN4aYGGhrRJkAwFoa1BbaKj4mejrsLk1toi",
  "key10": "51iejScing2zkHnzU9qbE8nciHspR7czU7fyXfVRWuwnar4FoZhH8nGHoCgcucrACUoeAQiVoBGvkhh7AZ61Z1aX",
  "key11": "539asVA72rgtqxQfFZJLaTsJA2wDU3mMPSP27NvbSdEhSSVsoKqXaerc2wxhqusuB6928ZLZXtZcFzU638CWwBBu",
  "key12": "Norptr66qpLu7LVeh1mHrAJJnGFtRw5QsKGn7SeK7VoJnkRUHxUVV7BmNwhfFdpr9Acp8mGmR9gbCs5qKE74MoR",
  "key13": "5YHzSsucJVkVQGUy6uxVphQa8QG4EiVK2JM9VdnxcE5pWBw6igtycCUqDYv5UKebntALSjPBZStGVMrY7WayQCjV",
  "key14": "2Vqst3xSxUPYNZi7K1iF5uybMhhed6wefUQTs5Ujh2zDadRzLpzQ3FK3ZZ3AP4aKNxUDmwRzx9uR8W2ZdT5ztLXK",
  "key15": "7HwsV4TKvMpSUp7dDV1BvzMs5g4SgAcNYbqbBQjVVQ6Q1eUfL2CGPNk3UKLzGkmZpUzUD7C6fjXG5E52bHv9BuU",
  "key16": "3uyCQahFacLEyWug2opLSZa7W2Xt6f7mB5Gd31rUyP1EzZgVDJSptrtFytG6qGuH5yJys5TVYLD1c3F5aKZ9BBHc",
  "key17": "3zQKptGB3mpB5kak1sjYbWfKBDVTQitQss6oVRKSYzD5946JfZdZm1n1nnZAiLSKPWZASbqDHTAEA7eT9Xbx6Jqg",
  "key18": "4AiW7S2Dxgr1yAXM6cumj9FCXdDAoxrajExGHGGpxPDrzneGFF8jtpp6s5zdgsgzfxLaQA8khgDtkFejNAVegurT",
  "key19": "5whtgJujSpSw67M8NjAgW3jUbU74UoCzdkHhpe3CPT6dVJ3Wv77o7JhM3z6ypTUoagsYzG1qrqJX1hBjTTSNgavM",
  "key20": "3cceazm2QxCMKRMeDiAtQnpJdEtRm1C7XD8nRSazA1xXwXeQEivRMYEkTTKN3FRPFvYhpn6syzMPkqv6n7p9PQC4",
  "key21": "45QdmdcgiQhGuHjG8Q7ebvJVEJ8RsF1Jb6iEFc9QSV87NofGJWPLH5Pi69qutbYdq8k2fV7UJcx8AuPwRkKJ1iqL",
  "key22": "Q3RpcUKEsLdYQLaDYnqoAdkredCajY2fGfm2M7k9fQNvkSBbKzf9PCTiXRPBksdJVa8PsBqJLRAMZPR7LDR461X",
  "key23": "5UjWJMBpxw3V8CZqDmUGsUtLiETKzZtN8ZwEpDEaUmdHJWtVkNpRxsFYwGhTz3fXHogHWYULvoSXxp8imoQ6jq1A",
  "key24": "SzyGmgzKSxxHcE2DH2Mw6urkrJBcdkTt7LyzCJNKYAgsdbcXsHx19WNneiJg8vek5XUiGieVRBHJqrFzryX92Bz",
  "key25": "4gg7gFMZajzVBg7VY1zeewupvU8hmBQyzvNDJnd82vv677FnRANFYHngY141nRWhQ2MuS6icRJ8ErJFYZWik6rmo",
  "key26": "3TfAH8ZFNbnGhNPCyTA8s63sZ75PbmaNTBhFZmwr99tw9Lnx2pmBxdJZpyz5LA8ZLhipUmpLVookFir2gSSVULrz",
  "key27": "5eSzPBZJeN3eXFGYBi6ndGpnqaR8kCpFJP573K3p2WkQXwdoT3wFgNaPgNVXfxCaHLBshcq455T7f1axJsrucvpD",
  "key28": "3iWzQbfSL8fUWS5FNAgfUWjV5DprwSEUYnNtZuzeiDuhhHErLRgz5vuQxjMAbPKAUnUK3y53aQoC68i7mnJB1f1X",
  "key29": "1E5MmJGc4yu8VyYAyT7jCFGwVfYUZ5ikeppN3jYY59L4Lhq3uuj9ZwMRMC62u7JeotSGmkjCVnKmRxoRHqmWZok",
  "key30": "8Sy5Rm6Amo9Wsitm7fjbTETAxpuPewgU4xDRvdTLsH9HpwBEJqHR4WV6cRjU77zSaDetEQzHBCLKxgs8TkcpRBo",
  "key31": "yt9ggfJ2kAiSrDaSH89FtdnYUwvaBUw3fMETwMUSz4hoDuAGUfiznse8K9squB1RRt7uuVbXTkx5h4kTEsNsFch",
  "key32": "CGUcpGKY6e1LpXhZsAcL55vp5UEN8TcaYQEAGUDZEKJQ9z27R18JgMg1ytgFFci2E8jLodd7Howi22AvKbq4aE3",
  "key33": "34yJr1SMDUFEuc5v7YQW2vZAbvmhKTm2F9swBeEad7M7ujMttTosP7gCJsDJoenDgLdgMJikEbWb29oQr8K24EpA",
  "key34": "AtekZxMWN83ifaEeBPozdvqRkqyQ6C4obWEABwQWegbxYeMxLgHbgPxgx5H83SmFRgBya1u8gVqxByKekjPE7pz",
  "key35": "4uf7BNMnGz8LEwpMEPSyFXwjLwUkAQnqxMhuyEKu745bJn9a52NaVaeMrqb9HQZP7zrR9DFVsJdLVVNUmRCTQeY9",
  "key36": "3SNURcqWmNsRzEwanzpeBkDu8yJqDogxxjZVKBKhaVmbEkFC96XpAUuJc1jx3cd8mC6ExrdLjZrRueoFqncXGJKv",
  "key37": "5PPw99d7xFDhUJ8STGcWSf9586dHC7HtFgmnQVtaBQHm1WcxYRkXBKh9RqaQnJyj8roNhw1o5FFh8Tfre4qerUNp"
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
