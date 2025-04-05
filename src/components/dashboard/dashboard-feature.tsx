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
    "DJpTjsHnAa2df9Vut5x9oTv5wP58uDoeMtWx5uUCBrLAFRjtAFSp5oiVzXjpXa6cHQ8tZ3GP3wCDoPn6ryT4km6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KMoWw6aGe3sKwESpkWhFtJvZRV2Hh8tiNVVKjJ2nE6gVTF17pHyHW17ZWVqSkRqZe93QNmKBa5VLCuuQtwvKGoW",
  "key1": "2DTgujViT92nDnJhdRsEMqhd7kKzpPxcSWqgPSWjrWSsk1kNi3n1SGqLgFynziwm2xz34BhvsJhNn9hy1znu5vFU",
  "key2": "DVVk3cw1PY9BrjwgzcvfsdfUuoJo4d4LGdCBMdJSuB8V2osMuC2ZGodRrbGjXw8g9nJymWwzx47fjBQkAvRiHRJ",
  "key3": "3DpaNEDtSkryXH3goYtHMfAZHa9t63trSJSq65adhMbv2Yui2EC3knhcApcecK39pqhy3wUCFbS8uv4JGGjwpnDd",
  "key4": "oSKVKTpM165AddGwEaef8rbjFhNHJ3MGHRThARNh9nEyfSA7Yu14sABwe1asw4sEfxYUWFyAQKCZDVbse7BSoJy",
  "key5": "4gCE391ZszguMA5LVvaucQwMPF5AEvg4io7hVXoikJiEXLfzeMn1Bc9EUhpqFVtnrubkUYnHh1JbQhDFr9fb7MTK",
  "key6": "2zMSwaaq7vSKMwkvWMsjMCE8uisys95U3zyT47Gsi4Kax5YTPNJxAs4vfdGBBNTqi1KsEZQ386TxuUfnAv9sj2v4",
  "key7": "D866cVDg39QXkfNiP6fnpjM7Z3acWSjAFEWVzow8b9ogw9FFXoVVRoHuFb7yZivg93WzmqbC9FAbmjvN3WaUGNz",
  "key8": "2kna5eGEE83k7vbRgU8mhpbPVbXNhB3q6yqhCyjNoJ5CYTY8ixsKWFhDpu8n69TCbPPL84HVcHXkGXMFRQkX5v4P",
  "key9": "4NqSGjgqnJrzdELUi3fBb3vRbRoip7gdLUpqA16sK3dJt2s1wMEbEVFnFrn1Jzi5LiTKawoTPUDgTfei7Tu8fdXf",
  "key10": "wF5gvUF5yzzf8amBNa8j3kZDHqWMe6mSEzFVD7RrY1CNfFh1hEQz4w6h55KrPGikB8fPgcqvZwUdJQXhw3FPF6T",
  "key11": "3FNwX2wdU9Dy9YNnPERVdntLmBeP5fW4fjyrMvn3UD4aZiiHyhRW3C7RCS9Puo67PK5y4WPzxcreUkCGaTVFrUcQ",
  "key12": "31wigkxsJfb7uTMinun6yZdfCWQeSnPNXAoHK8JXAcgAwjgMLxLtRMMLJksWT8T3REwkMK3QwJfB2ptnYkZEFkjR",
  "key13": "2ZhwBMSL2fMpEtvVALwLfoE69QrzLxpNDsLPAupdaZCD61wSnMQyypDFBkwuv4AEdWiQrQvABCaPSB6H6K2vfszJ",
  "key14": "3o69bp1ciY4s1hCjUs6FmuEN89vZCYsfNHGZDK8rj2P4oJUGEFMrVegitLevWbavvRVVA1uA1jG7i53hWG3iRJ72",
  "key15": "3gD3Ud3RZkb2b4qYNyuFeMrTrbd7pUo7DjmyzUjeU5d4guxYH8m1KdQX2vEFdA19z11nPbWCadi7ZTw3sUFwGziB",
  "key16": "2ZcTbG4viML3ej65ya5LBP5sjN9ovWpmpDkvWrmmGNys3gGiMmHjZyu36Xsti7nAnDM9HUo8Y3DsSbpsCXKusy4X",
  "key17": "4EGHPvT668G78t95NcvKGfRSAYjwYpUXDpksGe7GhhmH2VpUNPdjYCKXAvs9diCPgqHrdJXgbQ9TMYZxwkM9S25E",
  "key18": "49BaRusUj7JrC8SKtexjxWDgZ1DcKLupfQm4UCbhviX8iuXxUZyzsEDMVrkxBmKLm9usNvg3SQZsxDNAFAajunci",
  "key19": "4KmsHh95mVQbSD6UDFKQF9hgf8JBrUmgkxhM7AdBe7g3HKQcBB64AuoT1xzNvTUvJh4iRJQkPtMEEYcEsHnYKod6",
  "key20": "5gZrjjsyXbshGQmzrdZsyVtL3khc71299bejktjLXz7Bb3a94FfecpjdDVPSKNzS1PyHVQTQGK7FdJqc6w1SV8oF",
  "key21": "2fC8z9mjwT4qgayaK1mSyUc6gJQ11WzUWTJB3qfVjCxewaWnDUf5mUDGtZqReqqNVMXTbpbYz4jnBssLpN8RCXzR",
  "key22": "3mFwvNHi4bqLR9HqCh3HzTTNJeH2QL8ygcLMr4iwGjN4bjM5vhLB1dXxSeJXtdJvd3LTZXwra1UJmbMTEKa7TAT9",
  "key23": "4A4m7XmBpg9P3W1QaoNddRTCzZLWwWcdfuwNHv8NtC9CWgyB7qy1ns6deVxKWGjQtdjiReoiaDDn72jTKkH4LhmL",
  "key24": "491ahh9mXZwzHVU5gY1JWtvhipHBDntsqD2GDDcavpG14nbpZsMECgFPGmZtAYCh7EufRCQMopj5Q7coVCfqTFA5",
  "key25": "3GNRqLJxSqb5XMcdvRjPARQohkWrGiREb6bNn91NuUiGoTEg2xUhsULPwya6YLHvT3nGvL2p3fVTjGZV1hBoaVFB",
  "key26": "q4AeaBpYEm31t3PBc6fsUiN8ATfTvo9trkXKNt6zLdSo11Z15cdNqa6Sf4Kdmgeumj2LQZu2YLv67hGgi4kq8du"
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
