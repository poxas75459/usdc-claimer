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
    "2CiZa5rd7d9YFRNmNUCnUeAsGyCe45qtdbR2dCscSfQRP89K4TBwa9uGc24jBY8BKGqx8EgFckMALKKEab5B5Mg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8nxuXSdHaUJpJfMozoi7fAmUQ3dXZHp6bDAFq3PdmWkXpQW8mt9S3TM4FD3fpy9LWtXyupbscAD19riMXeqBEcn",
  "key1": "dJyaj4g4eU97EJYnQsSHbFTHjFpAKseGwjAohqx3pwknJxsaVytRyRG9uGmcvSE96xh17odSojm2ZazQcUcHEci",
  "key2": "4FKHaa67apd5kxg6xgtCoT4dJj2bd1BYvMbhN78EoPaXVJWL2WGh3v2Uhf3eoBG2MjgJeTf6LRXY25Mwihk8wXp5",
  "key3": "3y2QSgLTDZ658gDCXdfZWHBCY1pGcaaB7KU6Z2GJLQMoC3muWCmEoL1GLRkto6Q9fWzQ6w4Khw4BMAMNKzKuoZz9",
  "key4": "5vnDnNhSniBpWeLeoKMyBQpp1LnqGmWRe4Lv8Um4oNzTnTQ5gWXGKhaqXFzMpCYviaVk5sdtc6dXZeygXvL2PBB2",
  "key5": "ANkLQdkzWYAfuNEJVYNnxozy1QStM5KMscoWaXmxmLXHejosRJZ4h1cJqe1PVgfu5vxyuWetRAqWEZL2SwWqhgP",
  "key6": "4ABuv5QG42EBDJSf7UyZQapmcqsHf1xxDEYPEpyvMjbLv8x534xH98h5PYGNkAwE3rpicmzwMPJy3NQBnYx4xUHp",
  "key7": "2UtSzTgKu2ZR9TZRm2dkDzHArGudaNr8BqqnK1P9CeDYbPR7n8YBG1CcmaThCVtL8qUgtvG6CVnXCgpWf9FgVYRP",
  "key8": "55xPfwTm9UA9Ki25s5upBtZKoJh2xS5e1dGCJ4wDDpLJ4fGjV3y6e8wCiP1cbLi89bTsJqd4nCyWd4jmQxStV6KQ",
  "key9": "4hVj8vUuC8CrboofR7krKTLmEgjD1vr1rGPPDCpAxbjJYxNgUpZpbNvPb8Jjbv4af4rowetdEPge8VLPRdba5Gtf",
  "key10": "3hBzznEKAFeww5HNtv2z5716oVLCVjnqtZ2MhosheJk8ob44u9PURTDwUaSgANsaGbrTQXNi33s6SVxA1gSbEchy",
  "key11": "eat9xYvLPkAFzVKcGq8dk7uaCpxwA2M8qht4Ho8NZvUdqtWgNZUXfWyqr6WPPnwVjHrfRGBfZeTepqMd3j9c7VR",
  "key12": "9s5V98easYWYyorAobLeM97kRSyKYeXeiUsALDyVaFK52GSZ3av1jV6xkDLt5mXWUaqgAh4rV6DoynWRDJDiiMD",
  "key13": "5S5osKvgSaNE4nZaLFD486LSsJVw9Zz7PtqJu5MamUdbwZoBUUbqqABgo1eWQwZ5uBFzDHdVMYKrNqVJjnx9Srso",
  "key14": "VmgRaPvvhXGvnsP1hNw66YxNEN7cP7VtBLLvoLrPxDqbVYmcxL6KY3HmtJTg8dSaYQkvPaYuNJepYGdt6Zie6Af",
  "key15": "4CiUsk8XSw7zWnzSkKGZMAgReBMcgTcUwhnvkMFMZocvxD5Pp6jg8gratn5XVtqUGwUvAerghjKB1shrxSrg92CA",
  "key16": "5NZuK8Bcqz6s9oHMtyvEDLYF8h3qkaXBX1sCcB6x3Dn6QcYjoCYyhbiJttoxA8FcMAoFq24DQyghoEq5qFnPac7C",
  "key17": "5pGZZMKGyi7ESRqF1f9m3qfkebXk1HQafYprfSfBuVa3bYnkWRE8EjzTug4QRRGRkwuSqVCGiTNP1j66AWE1Juxv",
  "key18": "438QxcFACSLfLeekDePhEVpudyQZYe9qko73YT33Jqm5oVVAizDEvL8E75myhhsbwySxY8Cr1fMFbf1rihrwepoX",
  "key19": "ZEvUDg7KzUmNEMfMKEjmGxseXf7YSok5Wyarom16htrvF64FYp3vNUfDRZuXjGuH53zdaKEYTZrBF3kMZyZ4exa",
  "key20": "5XFkbngAiZesNJoUh1WvYiqHYtG7ZPTd8ByzB8nfEwcqX8CqHXZpF72Az2dQAmKPqcSgUCF4AsRqhkzzuQaTPuhf",
  "key21": "3CfubCDRL4g4vnpefftitWsVnnDtdJ7Hxnfdf8CcFDD8Vf67H5zuaeKu6dhWqLAeoohyZYG7WFWZCMfsk6t9eP3i",
  "key22": "4J35qGPgyARcE84zF4cn6zFtcwKDRbHyceNTF2unaizsbK2fMAS5PX2rc1kJ6m4RV3U8dYiZRf61DuphzfzuLaxB",
  "key23": "3DYXUoBPwB5md3vBCauqkLTiYNvGi1mK3BJ7FfacKAkweEBpeAa6XPvqyiU4Lmp9hxncMfFFA6wJrA4iVUSCnZrh",
  "key24": "Jzkmy1Bk995kcZ5GcNs6rChYwnfHxenPZPKdzvzwgCHiC8ZJqQN1WXAGVaB45YP4FuwL87rdqd9FQEdQP8MSpw6",
  "key25": "hLgko3vWwJZ9HkNLsFqBUNhQ9vp8ULDsmAVAEC48xKfh6eLiDbaiwdA8JKfh9KXi9Kk7FSERLvYrGSd1UgXQx7U",
  "key26": "eit8h2yzrCaEgsvULo1qriwoNgGqYzG9Eu5Co177coPy4vhu7Te3yWkVoJk9h5dkiJBYsoxnwrmfH1N5XWSqXjm",
  "key27": "3x8siVPz57zx3qYW7zexU1WkeKxYBXeXbxeAq7cgR7nuh2xEzx764uFkFXNQMm7Dh4XjwgSqAj76tWnzDhwB7Pg1",
  "key28": "5nq2WTTMRyRDpnYRVD7FXhsB2urhfeTeNaYVDDx1Lk1gZ6f3rYXNjPF8b8xhQGQj9noH93UWBJCjFgB2Gmd5i3Hf"
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
