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
    "4UwTPeAUy5mADqvyTGed9eoCUV51s2uN5fGhUYem2oWuukGgkYt3cMeNLhTexwZF5i9tfV9c83s6VtiJBA1oLMYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MnYnj7TS5dZKhWma6qtEfkp65yGpK3UwE8d9Noy6Ee9nhDH4znEtK3vuwTiNpx2nnJuzSGo3MTsNigSG23ZKnk4",
  "key1": "3GYxRJDiCvFgKzNzn3gGxHgBA5zYEatHBJ7JNSSLRDtCAsQFsUeUJVVQTYxA7vnKV6CL5Ny9dDKyzdqrb44RS6Kz",
  "key2": "2PLFneSyLVoZMho6aackif5fESr2eB1ZYshU5gfrhWS7jHQLHPH575ky5LR89yTqNo9G1pQq4EaR7E6JSsyWaKVc",
  "key3": "4Ndo3gqSJ4hJsjVRXwqigutVEAskVwqcU2yKwFNxfMcV7znBpgvWdCECZyo7gJGpGs5ooQQKhCQgmen7mMcG1VkF",
  "key4": "4YJXMDBcPy9TJv3rHsPgYXtXJc9fQ6NU6FtJsW22kegUG35pEqVEDKUjp6Lrso9f75hPrAE9EWjWhsKUSp9hbR4y",
  "key5": "9bZr9jUWaw2GAc7G9XfbghPGNC53Dejo5UWCy5s9Z4YYLWtBs9LHXpSkSPWr2KkbP5FbN5ZatkupnUEr5XziSDa",
  "key6": "3zJX8VA6hks1F4J3BoEY5dwinnLRTq5hNQmJ1WdhCyCGZqvR5e3C5e7annbpVXqX4xQXBBwbZu6yo41Bc1CnJbrU",
  "key7": "5BC8DAZ3Amhre1o8NWvrH2vtKqeyVDU3xSr5rLZHQBo9GLGDYYDcJuEvdNhwgDi3pHJ79QzqvDqjb2i9nGKznLwd",
  "key8": "X7sv8K9bCaJCAisZXyciQRmQn7dzAm81GB5DY4F18sKxbNNpNwuHeXFDqMWz59zB8yLY1hhnmJNVuAz5W7mfGr2",
  "key9": "34ofFRZqFACHTdzDXdyb5hetaRz5sbkQPfNTCcQSfW7375ML5MgY9on2PfdAJtGZtKRys47TsetoryaYf8eV6SvY",
  "key10": "5xdCPhxPhX7un9DUfTHbuJ1h78rjhEhsecLDiwGJo9zhf8iCvj4T1rRoCMCdZoPysqjCSegJz1JFrnd7aBjTjKag",
  "key11": "5jt1kmCXxL75qWmkhwxfJGFxeVoTBjx1y9XbdE9QUbMH1A1ZgDzq7QP9EVbHYCH6XY3imssoYmSghaAccuP1MdPA",
  "key12": "4bBN9dHtT3WEje15jwpJ5pxes4qFGiqVnrbjNc1gF7ma6GNbWUDYkEbAWB57775DvFJj7tXWbNQaCdvRaXi71Dqb",
  "key13": "4dzZtyvppEQe8nKcbaKaQckg6KE7MtLdVuB9twvCkSwT7HyukBLsmGsedSRwqGLvryi7PDUsH3KsPQYs1ZbvGF9V",
  "key14": "5eMNgfdzNv15LjdNFMp95mFeGmg6p876t9TZmZWWDfvJjpdYnPEdsmzoatUvAu1e8pGf5nqhVEpXFv3qTuqNUQtg",
  "key15": "3bBaRcnLnHGa8yC65TQqSTQ3rfDGKmAvNuFf1ZVFbFUQJi6BUfwb9Z6vdaWWGDJCsU6cZiBpVcvw2m52GgSCw3eE",
  "key16": "3Vif2b1SUTcnmNpM6hw5J7ef53iHC71WDwSmTrcVfBwWsHr1eYCbYXBEC3iduAfsYtqjie1i6vSHZT4eeKE4gvyD",
  "key17": "MjVLae9F4S1wWNv6UdC2SLCTd5xRrcHWxyHrXTjKPM9D9wWXhNiFRiE9H63ew64ipQyfeBtxc9xFdvkoP1W6PLS",
  "key18": "26sJ1Nwtr29VLSzyyiGNxuKzLCLunDiDAM3mu5uYXM19VNxVqi9c5uVupHV78urbDHDwXqDTfoT1wPEWgdF1GYfZ",
  "key19": "5EdLAfDQ69QpErekpDaeBvsme8Dx3naJt9EmMHUC2KM8W3bbRaxTe5iPvUpDXGGRPpdJm69LS2SHHKfgjE3yDS6U",
  "key20": "5ZeERYWXNr2dRcF1mqHy24aRkRNHxfC9uH1yXPhzMuCc1pmKrm55BeF9Rr3T5JV14Uo5THruPikrKXh3vczM5gLm",
  "key21": "AbuTKbFzLG1gfWJ65mmo3DMHhWeh6LgVBWYu9GGWKNm7Uw17aUiBUY55aPSoHbMaLm9XxK4AAtDCuwYDuyFkcuy",
  "key22": "4x1G4oM6pGbkpCC3XDEeLso31ZgDjipzHKsHYTnAxBu6vwtckjGfJHA2vvUdf1Nupot1G2R3JtFRUpTjPpXqEwrw",
  "key23": "2wvsnvv5kWZc6ntkCiSVmbEw89JZ9dd8VofEB4MnciLnvSunV9MTYYwT7xTgnStqn3UGxZUts4XEAWJ7hF6LDCej",
  "key24": "27k1bE1dcBoeQpnHz1WbMVGivi9MrPtoFHC7CFhUkUsgRivEQtP7LpbfQp2rEJ29183GZtKVCvm8fBujpF8P4H2f",
  "key25": "fPtjdXHsSghPhevrZXcPBKvmLsgfqphBjq5imJoE9boAgbFo1e7zokAjspzkHpB721g3pAGNJQekdN3ZDaUswKw",
  "key26": "5fBCU8pqtMuJuEH9UuXoPe8sFShW6ccka2DiZCN4kbdxexm3XAAho15tQN3SjjuLxhsDikawWN1grkZijztBjbxq",
  "key27": "3xBjAJsfdfMeW7G9keGRAynqRR77uy56T4A7vQ2aex9JkRshcaFRKFBkeuJ1m6rGGV6SePswCAeZTdMF3ZZRnVp4",
  "key28": "5rGwmdP1k9uMExAkf7pPzDYtGA1pSYtYm7XPiLiZfg8FPoPqGAjKACLhhj56XqemvLQVBFmD9TjDYMLndSfVE6QS",
  "key29": "4Zod4ft2SK6ak1gRW23CWiBU2g5R7pu1C2Qnf66sZzL4KpR1XSqmCRofD3Kdine7V8MYmgkjg7wjNs6o78Qn3S4f",
  "key30": "2Bn7ER2sHp3suiDmSKMKgv1efGHE4SAQcGXcb6RoWjEdMZfkKZQ3RQTrKehmjvQqPDvVTruLcHrXe9wgG6bHZcYm"
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
