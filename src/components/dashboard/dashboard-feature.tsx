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
    "3NwpgnbCVpnkZ2FmoSFEgMpPnZsuEekRKJy7E1EcrnW3A5CptqyfLmgyi6YBxuwweYeR32Fbp1aH5MPdw3rtdHbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q1j9krVJFTxU9aQHyLZcNzLMvDbcMbWPRcLogNkfXwg4AE7BMiEjnjyn1kYfMooTDoqV9h7Gpx7gbxdtQhtaMkM",
  "key1": "3dJ911pgZFY6V6oGSFEmG5FtZnY2c23RZBMuJGoQGxWtDo4V4uvhcyYMJHMpq2gWiyjgHcwdQiB1H8P1rdYmom8o",
  "key2": "3a3homBCxxWVEVvzRaqdW28BLuBYW5wJ8U2iHzQa3M6rP4USMTRPULY7AvqLZuo4xHuJwpHKPCeaD2SRbnpHLHMV",
  "key3": "5LwR4JAivSpHc5Mkc23ET93KevXdu4oMbPArh5oip5swa1nRhhkrS5ahJwJzTwr8oAt3giHYasGmeRDnd92VBU7u",
  "key4": "5gzMtfqQiomB4pPnzzAPA9QvpVNxZmxoHTroyCsaaZEUhdGhyQpohGrNw8BuCfqijVhzDpexWjes9DxXF975kk3S",
  "key5": "5DSKyFGHtmKs7srAz7Berg1cPoEhfaRYP7mN3LzkD1sDJL5RC4RS1mg9pzhqJfd4oaLrC1oAQrfT3hBYPATz5YEE",
  "key6": "LJKbMd442FAP53B8hyB7X9CLFNxJYy51E1bGm9x1jLnZ5XHpkFBCvwzurTn7ke6Ybo1EbgCqzrWUNwu6JuQ6E6j",
  "key7": "41WNmvGGgfkxkcmArKtAJihPKem96wMPKN54UJUcvGKVCZcyYguuTZDZwTWTL9fBEkRVbu4Zhej7MHK4yartiAqw",
  "key8": "5ypzNSXkyFe6dwB426KaDVA3Rp4CML175YR8yUjyM9RDv4WZCX4gFs24nDES6pFmf9JUyPdVP67DaetrJaTHchHk",
  "key9": "RwFgXxtqaEHRvdQmFCB8Qj7EMyRh2m8RTxskAjCEhh5Evri6pNtGhCnhaZfbPQpgvZMFaNGu5zGDKPhhptve7pX",
  "key10": "42BbtczcAyp5RSpR8vyAA4BsY8pXTyEsTyfiR3oR7tD7YkR6Vt1LDktxuJzuZA3nETMEB7yqxHsE6oBH5gDhWPQM",
  "key11": "3esrra7cNqdDXbf6nFTjfqnPvHbKy4N26Q67G8Yr4Y7B4KruMvv7XAhKV6gNYpYVf5dVwyzvMpmmYK6rC9ex9WE4",
  "key12": "YsHupvUgjGddtqBJgDSqhHw9KmhXwantqRs4f37gpJ6UuQTfFcwpx7Yp8H4g69HbHFaXopriMT5b7hhSd2dE2HA",
  "key13": "3YT3D7sv8cAiDUmZM473iep3YyoNCyXCA9m2LxLmGyQqzcLut1k3dVKoVoiW7jfvQXvXwyB78s76848deGRo8Tjm",
  "key14": "Jf9wDzbeYnZzq548UQWgt3CwDoTtqJNjFLpC3ZvVkpehBNnAK6dDDtHZbSBoJFJkmKC9fqRX8MuJmbaZj8iktyg",
  "key15": "2eqtWKKjybCmryuVwQ1dGfxs2iywB6J7UbjdUoE4iKPRSaAKsE3CQ9nMt8SwuES5R6SU1nDgpRvMwj8vME1p4e83",
  "key16": "4k8iBQoY2oqWkYHKhvGUUEPEVRsWh7j9khh5RLAq329rfA5fwG8B3ZDzwMdsLZvjUmoR6V4VexyCFyhRTAsnNsLD",
  "key17": "3Ye3jrEvsNAGFzBRvfxSLuSGY32qygTReeasjsDnCorchmNeHmiJ47dbuCojJST2bkYpKSt7nisFDNLEb8FBDfwG",
  "key18": "4fRTFDQHP5DS2EK5hdvJmcBmLbFe6naMGvsnNhwrBfbbxJ341q929vKRCmkP2Pr3LLPhk67WVwiHMJbsypyH7WZn",
  "key19": "cMEqLxHAKoXdiWTorrU3z6CKBsJp3mTxSDnHhaHZXyPVqBwcyj6CdoWrG6BmoGKCxeevtfdRRB3TLD4xjegUHpA",
  "key20": "3686JUC474yzXhhYY8aPT7UVpmpvnhJQFQHBADMXudQwHyTBCgMXwznSJZ5JpNHc8RMSjhdhX8pSQy21EDdqAUdf",
  "key21": "2gKECqg6heRLR1Q1CsNN7RzoESMGLKMmHZnuV2d7LpjChZLkBNRN9nniTkmxYScu5Vxd9ipw3Mq1mVjVBF5NwzUP",
  "key22": "45McyRMefFtBzDaN7sVnWXeqMFQ9PZ67Vfrq7VgAFZNLZD8QVE9E1HBadfKwLYRzMg52viZm6mkzjLQxSRkgKUpS",
  "key23": "2BjfLayWrfmhZJAHKXSsz9cVccpbHAsog6dTE5m7F9jPLmHy8ZNuEfnmkoyNrAaXKhAo46r7mckFsAyAXAv3BkWW",
  "key24": "2DLyqznsV6P6u8GW5rVzG7DHJK1HpLLq4PffxGYiJwDEWmRugUFWf1qXdF6z7tMvq1Raq6BwMfPcJQEhrmXjRaym",
  "key25": "4hVV4rxpLR8QNqspsEGo2KL9Sk5eGUNZGs8UqVCNuY6c4pzsVRWG7STfJDef9cnUUEbkLVS4bqScmJ1jrF5joSC5"
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
