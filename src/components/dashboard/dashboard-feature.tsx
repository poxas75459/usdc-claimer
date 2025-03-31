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
    "dgMdLfuTSYcLbJgbqPfQJ5yXSips3XC58M4AEVBZJE54sDcMBLFibbaVYjLzTrJikAXa3TTAX8q1XyjBw6epMRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zHFj53YMzg5nqCiQyyQQieEnVDWgp7xdrJCHpxNrftJyMNTcoW9cJumBSqdLqwWSjqNZ5aCr3a1uEJviMShhhYZ",
  "key1": "3w1j3p9qb2eoSZAK5RE82mnjnecctNu6dgBrZEsLzZcgwbmGQkb61teALGJY3vrN2HMz14mxX3yiUW3ASf9c7fWu",
  "key2": "4rbrEoKJNZEYpvshMoagCFADbKYxQTQhdRqgcmD1BVv8vbqQo1PigqBCPCC1aVm97m618ys5nrmu7bgh9x7xYWBi",
  "key3": "5bheDfaLLq1K5jUAsdQ1KPBLWQHtkKfGGUEGKbvhD656dHzar237gUymyEbV8rFGVSgnUSLKShpmEUN7nL7EU5qP",
  "key4": "iTrRv47oxkwjnCpr2uyhRxp2VmacApqidfYAxgoNtiUduSvs6svUMzhTkTPV1m58YJc4VSHSizRc2tGDh3eKsJe",
  "key5": "pZ2vL6LgdgrWiV94ca2C1AtgUEgbEJjVoGfemEt4dSUWXVdYANoNro7wrQ7Z7sJRGa7g8VbTETbmER8pD5N2U6X",
  "key6": "5GUJz4DELuBSL1Bg3PvcEi6fq7MLSvpsgwbwMGHqEuAxQdnsYnQyeofpQrubsDbnU9oFr67P3RgpZ2EsXhxsyuMj",
  "key7": "465J5bw3q4zvVvZQ1fkf8odmekTuUqHNUg3oKGEv8KqHZ8rDD8g8CiRdGZ6VqZu9MaugeaoY2b3US4H913NqdZJC",
  "key8": "4PHJkDVd72Fn7sUBwMHkAYpqbg5Z5Yg4AfBjQvHqQqihjiGQi4XmxNuNHcNhHFNB8qC2QghCbJMTzbTGfvig43Xq",
  "key9": "4XARgDRAgHaHKv2KrbSCDhTcskZdsj4Maadasm9o27R8NT22gHZpCETDh2UWPiwp69ABFnTGJr5CtLsD8pwzT8XW",
  "key10": "4GsMEPwzpcPTJjcszoCYe5iuKsiVjPUZsPShaM6KEGkZLjtr1Usp4CHgEk5QpsFtJPPQD2ZUv2RiMttrc9yVjtgC",
  "key11": "5sgg6eLzRE3XgvQh1hAMLn2sHnBsbzdeaXiZFji1QKyDNRb9GRnqEggzuCoqpPeWLUSY4qMHmHHPUv2fZGDRid1c",
  "key12": "4kZP7CZLmKf2KJftRew9MtqvJHz5QLzsRDwVgqw9qgPXmHuVkgBBuGGHCUMoiGT75pUXLwmDB4SiH99BXr58McDQ",
  "key13": "3t4fqEWRx4SU4RfoAi3sMbyeZuvUssJGYaMhXRHfH2DukXHnJdNBw1Ru3HCZBZvT2Qhm5tdS99AJc6DZwHMpiky8",
  "key14": "4u6RLpYow6JmaBYBcTDq7PhaH497K4361KpFvykLa2QEGtExZF5oXh7c7aUSh1magmQDR8WYFdYqPsWM1DeKrhg2",
  "key15": "2k7muQnCtSujJW6LtwKnBL5nqMQRJEsgMme6fzUHtQFtCjCRTwE43goaL9WZWGoVuVJDv8kS9LQwmLiDekpoa5eX",
  "key16": "5dA7RuHXkaU1qwXZMpbxNTeUUyyRMEheDzyb8PmKqzoVCxVJxeJu1eCqUyzwfWtuekDwKULBp2KpDrSwD6GXioMA",
  "key17": "2kv2jf6YP8Sf9WU7DxJqEnycutAm5nXRJanyz3Ej7vkoLN66Kt6hLaPMAs7np5KkcM8EdG73sfXWiJhPRaAaUx4p",
  "key18": "3M6nxaMuQaXq9kgpdiA68TgAuPKVBsQt49d6JpwBostW7EmM7S4bPm7j1xwb69aPL6opJzgRMQhZsqg5r6sqH5fN",
  "key19": "2NXfqF1DWLPEHj6ETZ5erFspu54wgnEABjC4mqv8qQnYyMUhtXx5cMK5H5k9rnuXrSxnzXwdUcc9EeL7pHxgpTNV",
  "key20": "21kYHtW7pvprgi6xNU4p4Ka8Y7xTSsW73XZ6EuHPYAozWHd3gm4LsPsBoeqRCdzm6e74kqwM7HGdxFDzAk9wh3un",
  "key21": "3cgZJ7r2t1gZ48yhNHLD9sQxX74BjYFUcp5mwzhLkmiP45bFDx8MbeedAYDFr13KB7YraMaC6pqq6w7fquwm2t9y",
  "key22": "28ERaWM4u7HQotWBXfcNtUbmQZKStPLLCyLnNVALL1XFn7R1YJbzZbjKM9CGX1UjHLHidTwcjz9e4hZLGt9k5CWh",
  "key23": "uGTDyVpgbRHe6ycBE7RSrseqvbVS2sWwzsoUXK1jST5ix4zv3ktMLCbkcZG6YNhg7Mfn9bWv8eKwbfMhnsFvMiy",
  "key24": "5hEQYFodwgd3vSMd2LK4tvNZ5ZidaJUCGThVzPu3EgkgDfR65JQMi8TVpmSMsceMmX7q9VQMwaM4cb5LpAPSMMCz",
  "key25": "3gUNsZrcEknnai7wTocmW3Hy2EWxkCvpXBxTM11XVo8k9wpBQd92ZKdEC4HwVYB6Hqkh9qgvWq6vQMaC5r4cMc7a",
  "key26": "2yzx17CGaz39nHrobhoDiMWpq6Ex7ruc64i7epkc2UboZgSB3kc4zmDnf7T7H4vYXr72nWztvzDjjY3mg85krB3G"
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
