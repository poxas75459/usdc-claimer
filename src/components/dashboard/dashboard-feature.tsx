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
    "5R8xirKKF1muu8tpxXvXF3TyBYheBSnWzCzmk3eNSaZSZcJX6XuRd4EqqBvRY9dCbgmht2SMn2yryWgaPbF8WqMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NVDN76Y4cs1okSm8t3u7SnLakLgUr5Czi6bg6aLTFgJFnuMDgeaR3pKaMtCjpNT1DEeM6FpWYAePKfrcbAGGeks",
  "key1": "4Qgb27aqscJdTwaK5sR868ZhbYpyGyRYKkkv3n8SqgEnu7eSgHrkiBvo33tcmzDCuX5jZEPgsdBhSivK4waXNg5r",
  "key2": "kC31vShTbu4WcjjpRgSNVj6DH3VpeaAR72FoE6eKGCckunVtA66y6d6Z8MC41mydUFteuDJKFBY8MFcpSW55aCV",
  "key3": "2FV9ddgQufKUXko7LmB1tTCFimFXkbofzgtUXpChcybEAmA8onHLd2ULFDPHbd96WtdCsuH2JAHbvPzh2vTzQb8x",
  "key4": "2QzCubiqDwHC5CnHNXf8hWSjHhKMKFX4bCsBeatfTpKMtgZXPGPf7zmZ7sNuV1ucM2VqK7xwezUQxutd6yH6FfRd",
  "key5": "2FD4kTE4uhaDnxP2xoEfBWzyhr9ikJbG6ZEY9af4dsov4YM6xtvGbr3exq5r4mDoE6M1ejmHcxZ6C3D4sWfdDFLg",
  "key6": "49tPon12cVT94EafvASmzydunB1Ukz7EbkEcpjwy5HfeXpnYxDcRfSwrVhmV3AFJQ3bWegod438XhSHacTrrWunj",
  "key7": "3RE7383E6PvJD9iorABVokc7tAUEqP3i8t8ymk5akyt2sKEbArp1NeLNjJzmEVbTFzis3jHo81j2TsYQ8wDYDzQR",
  "key8": "2rr8AVpHHb9awzxLAXKxct8Uz6dgo5nveQTek8h5Ydia7Cs9D5RJf5qUZXWjrUHQpHGRKmdcxLiWRRq497zUNVat",
  "key9": "5kWtqZasbsJCG4xGH9rzNdm4j7n5TA3yK5yAxLH3ircUNi1xNPzwuxFa5JNju1g3nxifLu1wvqDd54nHamvP9tg",
  "key10": "31FDWjpCK3ugFcx6XkDn58oYevhbbG8VnjQmxtog8qUipDGZv3t1rPhJPvef4SFkEBDXH4sZzonmQ7whFB7hnQDP",
  "key11": "dguANp6sbCBfVedUCpqoi49k7PwaBKJWGonbr1NBZmDKvA9NLmnHxAwiCtpE1e3Cw93pSzBs16EMLvREuJ6KZoU",
  "key12": "4eRVgHBURRFRCvM8eQskiLv6dov8DkNDc9mjy3J8qiFftFgkiVMx3X9ZbUkTg7wSRm7dma45jvko4NknZZgpeBzh",
  "key13": "5kB8LSYV4oWs8V6A3kzC9eNz8tuEnU3qhgkUfXvky5xGuaRStwWNhnbPN4ij75w95tKp2fsre4CFbTHqY3zdqpLb",
  "key14": "654B9rB7Axprvr8pQsuvEhEbwW745xgzJ9n9Nrc1dU2Pcf4e1MeUWxbMrtgzLZtsndPfn2MjZPxsZfpymi1tLHru",
  "key15": "PXDw4re82Fzu7qQ9Ysare8NbwPqtLyKdT9enFqVi1nz1cTn4QXa5tPVUjVBkLpNBqDV5kurJEVBwa1BwSw1di9s",
  "key16": "3jRhqftmMEXGqrvXjn5yWqFSuZ9DJpZkRbrXVSwTEzX8tmC5a65WTfu2VM2zyidJ3bAKkko4u82FxYgNXPf4ERgT",
  "key17": "4LpKTWuMV1cnj2Buugxhxp3c3WBmfRUNd3YmNFrYuPM2MvhEhBTXjDyTnDZECJegBrBJybYPHbnpXrQ32FhVz4R",
  "key18": "2vHb8cnRwN7hM8yqE3ZxwxXJsWKa3WZ36WFtMwvtyzrtmGEnCCuN8FwrLHeYdCD1UVWiKZx9Mf2zsMfocbowMzSs",
  "key19": "VWbo6CTBChuLsMZxp2V7cPu4L2FKByQrPnyqhWkYXoWqUaEU37xmsVKLWB92iGuVqXQa6vLxnj9jQS2bkDi42he",
  "key20": "3sDFiJr72cp4HYLYg8EFLnTjTsUpf1kPyVL1b3n85Ly2asqdwpEBsmWhfyisWdrD7ivN83KPiaf59pZnudRfUuDr",
  "key21": "4g4LLesPqNk9rGxWjjdKx3gVymsojtWpaF5DJA6dJqXFfYAQ7nDtKVdifJXtUePRMXtTw8qrExR2UNMpa5v9Vtwx",
  "key22": "48fPLoPtFcAFuAuio8pDDGKNH3ss7sNowtZ7cTRiyuFazqoRgbZ3THna4LQPswb8JxNKVE5289pt4V1Dk44aXa5E",
  "key23": "4RydjfrpB7EpEy64cG1xPmnpokGEfCaGKCCcFttfFfvNrHyGBszsAhdpJ5yiGpZZ9RTunq1WcUmNKEkGpsMcaesV",
  "key24": "46JFQLp9PZd21iZpSPDgXsoXhNFJmqWW2d8zLgvAVN9m9ipni2Ju5QrVkmeoX11qkF1g2N3yHAckY9JMMoPFJTe1"
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
