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
    "4KaUk4XHdBpNQwktHWXXugXJZ1MjPj2byF6WKRsLToYrRmiUGeq5qziyfs787oC8CLJkZsq2kgFuJtc8orqZH3J9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sqLmaK6Xe9MUD8fceZ9o7WYxQ5gfnVZMc74ftssJDQvVLqM5E4A2MKK2cbweefz7KdfFxj17WP5sr9LFvdymVbT",
  "key1": "2RjdUWm4R7wsSoyuaFmy3VypddhA7tpmoBiacojYEnZJwzvpj5QaDGg8vFnaenUBHbFxPNFiRzAn2oqnzk85K2xN",
  "key2": "67Kde13wFrSLswsxC5eRsZjutfikRa3G3waYs8w8BTQeN66gt5xypQ57PXNM5yy4uUMPYr9LVjPdEqJqiknwrTeA",
  "key3": "7RRVcDPrCuG7iGVyGDiSR9DZbb9pgYTog4DMgmM3rhwinxSFxHJ469HfTUov76YMZCtBXpcD4FcW2LkqCrKJZNX",
  "key4": "3TNM1Zyke39J4YqVToWd8fnUtf62buJYKDBpzfEWNLuEr9hxSFUC5pB67FKgMVisKcpcK7kPYoskvRfZC4tSwP1t",
  "key5": "5tEFm4GotgufGAUwYiycEcF2XwAPMBPaTcu9W9ENxn9n7tTdqpWTPp6G5XvHhxciadz97w2mfhsy2NGjoDz222m4",
  "key6": "2bVJL2TqQBy4JRXspKdBoBTRKUhig117WGYkzJ6FM7ZFvyGNkXzSoFsfzdjo77ZnQycLVHf5wm1kRjtbxES29vrm",
  "key7": "5GDtSxK1TjypP487NDF6vYfDrf2tpppHt45z1ji3fFZk3GaSPQ7yEfmEVBiFkwDCBnLkspfnatkQZ2SK9TMjTKfa",
  "key8": "4Nz7GU5SPqfRGwupieJ7EgCevC7KEYjSuHgGxZkjhER1oK28h88kcmLP8AGyFcwyVSMkaSvpwSuutz7GDb3NVrge",
  "key9": "fKhLNKMKJVAgvSJPm7qdEj6Jm7WcgAe16fgaYhDh1jNNUemkgKtAX83CXSfpwsHrzHxgVZbcsc48y4JjyN4goB3",
  "key10": "Eh8UZWecTiAtGh6tHF5Dcyd9hzUGECRQScDgQMEhzPtXTcRGTtxbjdJkihK8jyZdsHpXzs3MNMUBvqTRHTQqGM8",
  "key11": "3B8D2SzFMRutZw6KDCBAPafSTAqZgciWVJVBxseMaDKfXQi29qrfqDFJV2FLgejgqsQ1kZdBU9bFPpkwNU1a4T4e",
  "key12": "5ifzpRFaGzRPJALjaGfFimsSZVDZEiyz4qEiZFH26Ag1Usm7U3nB4UrmThSXzW5UnrRqmfgSAFMm3359L8qj9nm7",
  "key13": "3Munvvzs9FFBvBCNZS5t9HmnqvxTFaTjMHuV36Lo7nvUJTVwSjQzEhqzVFAHdcJj4CWFvc8amh83uH7vVaKDgcrM",
  "key14": "37ckJ3LA84L4urQ8wetMu18di1MRfYFw2ZAX8CFUyq6iLfTBm9E3xLRt6VouNKC3kX9f6XmAGon1AcieFj8CMXem",
  "key15": "h1eGtpxJsMAC3pBDQDJfxhbFvLKnSgnWthgs7khSL3PDHDe99KbR8s5QmqhhbDGEnmaWB9aSWQFcFzMFhppUsFQ",
  "key16": "5XhgmsBksQtJrLoWqN22yF1ydrukhLrqt4X2Uk5YuBKbPagwUWaza23dYc6FCGSXstiBrvHiWCf3g9jxVXWDwXj3",
  "key17": "2BmuXRtxbxooVfooR4XHeB9U3LK8NxJbbdnfj4JwXSWMg3fkt3J226Y4u24enaZgr72WBYKoHSEnxCTDJc1iZDN1",
  "key18": "2ehGR1zLTvTQfxj5AToidCnUXopojeWKb4qk3ALAhpZcjWrfjekkNMNxadBeqeezoirAJWaQAuLeHUoZE9a1K2Xn",
  "key19": "4B3j5enTAsujsFuGiwBoqYqJrBswkWDvcwsqWGkMaLVMn95CmsjhLms5tf3nVQv9cVrqGoMG54JoD3sgY8hrc6xL",
  "key20": "5D8iHH3vYpWm1TRshZXMQJG1gZYrEKWWDfgt3BbeLt5UVGFYvYo778mc2jNs9PXmvbjwVuHg9LidGxzhVNFxyyYV",
  "key21": "3gaeqnkoJM33rdfJzwJzq35ih395Z5rCAEowue4D1cpBgjUrW7qTp4ikGBS5WMb6MqECVQUKrjt3JukMTYVY2zjx",
  "key22": "JTgbtKn1emqxW5wmGNWVS4mdzQUB1wWXyx2eyeZDdxsJmA3daT3fsZBemQtYEk1Dx9bWbTbGhNmfmomAxZounhy",
  "key23": "2FbZPTVb2Cdka7LqK2T6qndD5X8GEXApWbrFPStDWUuS9abY9AUUjxAtwfMhXnhDUrZRBHF7e35a37G74KhQfshR",
  "key24": "3wmzTFMfadUW9RC3z3xWddznBmFcSiboemZ4UfBQ7LijBn3b5GEDUiCuos1whHr28skEec1AtfsNDwFs3UVtcNRC",
  "key25": "4NFdJNp9FfjEDtWq6iJoFbu1Go1jQMuASQjpdMG96qyVZBdP7D8MswPCVJvLjAcoj74emUnAUCdVTAngHDG9h455",
  "key26": "2ZBkqSxnoEGdPHLbDsox8HyrusWjXNqgiJqjsNT4pPcBxXov7MNehvFEZQCnjBtCuTpBMYH7mq43hVjLXWqiP9R2",
  "key27": "21QYTGzCZLYK1V55bZbxETWJUVQEgHrC5V2R25Hb2kHqV3mVFLCBdGbBefyYCrDtpFF13dx26Uyqvs61tcpeWQJC"
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
