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
    "36iee82QZ6UHESrA5UTUe5R4wbfkCp1WpG4AJTJ4o7sVPwfT3xGJXmnRqNxepHrS1cZAwMVPjP9Zi8HWcMeuaysZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "shxcqb3VNuDpLgo6gGQh2eyBzLmQxzSJZH3L1dBqTorX9asmNEXu3rgPUgFy7F3qKrhzoTmY2D91DM46rZW257H",
  "key1": "D9pzB3Ufs9oYABrL8dW78u7c1ETXm8B4rW2UDCKfSJHhQpEuqAHQozc9cf91QAyX8eNGcEDkjYoBhKgdwQkRFy6",
  "key2": "5BzUZmXWNFhFRaZxyYvYCMv94r69ZLNmtqSVhCm5gvpZJ9Yxew1PAXCa88LrJMdxF5VyfjpDRJBg3NPfHZ9yrBGw",
  "key3": "5H7YFu3z9gfFRq4tfhzDvgH6PERv9tdgA2iMsv3fk1t2f6FGfMzzG84eRdozxHyDyBYvQPE4xUTb8zwG272hhxQQ",
  "key4": "2s8qSSVXFfQ7NWaM9vTKRn5npDUSWy358Ai6QepSgBhGbTYjDumbnQ1UFWVJNU6jQ327pjLivAxsHBvwXYH2kBUW",
  "key5": "2eYN7kSwbs42ciPXSfNrbHNaYBW5KCtFaaPGPqdtbKMSpuuUxbPJ5rwQitEVYBiDhvHjrBfeMj5XTmWVz89r2jVX",
  "key6": "5HSyUdAk5aoxgTUgDX2FPLgXuqDrcQpDffAfjgAB8iveAS686F2VU4rbjabe11si8K4WywZo6rw4tyA4QUozQuiE",
  "key7": "2K84cT6vHdLVuso8xkXGCJMbNnakDTbNCftkzofgkHAkBQZaz1ToZG3xoMZsBXZ9MUkZ5QXfq1mYpX28kc3usXVK",
  "key8": "2moavUx4z6Sx7WXmuTeuipjg3s9W6gbuECbYXrd5LWopmKWzevDd2d4mzy44meB3XFumNeXFKQhg3G8BeSZzzy2s",
  "key9": "2HuVFJw9ywtuUUtizggqecet6XtxFSqpMrrUNydVZnycVEMHghyKFNkQCf5ijhW6QqXM6zMt9cQt5WoaLH9YWKas",
  "key10": "h8oRhhm7NENEzSKjwHaY7VwSn2DZnHQaQrosark4JW13iFfXBRV87d9JxHyJgFR2yNDkqsW5S7115n7VV8udZcA",
  "key11": "uoEfwCvm9TGNvVfmYTKTvLbVCB1GbUN3DUTTVDWPT5zX4PBfyFbBWucKEsw3Yv54aWeC2CbLvouzxW15cMVT3Zy",
  "key12": "3TUdiwrUQ29MMdw79v59T6imkr4fApryUceJGMUdPvoHrgEgoFHvRbMuWhc7e9MJbKVZ3ifnGc642JzjycyLQ9fa",
  "key13": "25Q9rFzjJ7vvM2Erk9bJm7vJMGdL7Zh7ssq9BBnv5rm5WknYDEAJWUSnkGzmawtSFsekFT9ubkFPyioR2AdQ2EYL",
  "key14": "5fW6HZqTLWK8ERKgy1XnRPaqTLikuRegfvYSVnuZyc1qka6W8fovgASidqjrkA2iMWdut4UCEg96gP3vXgdRzZr4",
  "key15": "2GLRmbTKBzzDHBmDWZpHnpDjZ4fLEkrDkVmL4pe6r6QRmcc9pTHTUsSroXn5cghA7xEwvey3ESMK6MovdzmC3bnj",
  "key16": "4iL92X7yZZ2pLPn9YLWNeBc29xoZ5h63WfAxBXN6fjNXN7T4HpaD6qRCKnauia19XbJmnz1W9ZJAARYH2L1K8diH",
  "key17": "5yjmNA2aL7vyggBHUFG88Zk8Kx3Sa3fjAptryaZbfpmRFBTnuJk49R5tD7TZ5LP1weueNBP84kCE7RperkZDXbDj",
  "key18": "3FnYbytBDDkm1djVwEFQmYDxRDKMMJZNPBGHWQ7sxB7eDbqw2kDTw2HRNSf4odDreFKxdXSRpj98GHZNNQoSjkpF",
  "key19": "4t5TUxcvaodSzdtS91iMd8LfrVFifeV2zdtmTfbeK91rGkzB5QjjBwEojE2F99jt81YmWBzapGmek1VHhZyaqspj",
  "key20": "5XMYiZaGnmXRdUGiw1XD2nRBowsnUyiVCEUZUDromUzFkq6kozDKKNSsa4Dm4xudLqhzPY4NuPaQgyytr9v7kDQA",
  "key21": "Q6mM53yYengjJ5rswYimL9C4fyUg5n4cdgmohphZPjvp4HRgLv3P5zTMYhFCXWPGzeDSLTRyRGPX8Y3gShVhKuY",
  "key22": "2k8HdfaEgkpEmmAUsXWod2tH76SaU6h5LbhG23YcUWjgSeRCZ2pLkoszb1SaT34Xw3rnJmmzBzrjAvThvQ1VF5E2",
  "key23": "3UWPacecrwvhE3k9Jeop5uqjoxvrBAkjsgSNMDEiTJjriMsRRvTgMPZi9iKWYBQbsoPWJYANCSfVa8fJgGSvxdid",
  "key24": "35x8Fz4jc5NM4bVZXhhRu9sjT4iM8XBTJPoXz8BAHiypjqwRkQaEtQikDZ6LSQg62mBfYB3cG4rbBwv2WvdNPjab",
  "key25": "5Np1o1JKa1LPzqMyZgfgAZyf6erwzbq9FJo3hjJYEERGaNsWGhc6ipbTHGCmRxkjS2jz3oQCHCduuAWhznKGwwAv",
  "key26": "5xLnPMgGn2ikPr9SiTStfFcTDSvWkN17XpWDv68qXb48bJTW94t35VZxZCfTrnsT5xv55FQ1NvT76ETLUwkATSeh"
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
