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
    "4UirHnq59aUonsH1nEjMb34CAdNuV8994k5iXmY23EbUKMpZeoB8d3LLRFFdU1jX4anqNk2BYYft8B2Ar4cUytRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33t1rBnDjTatcTD41Y7LC9KMxPzA7dZQDFDY12GAFg99zxrXHbpJUS8SvmjpNPDV1dazMsXHt82LMDB3b9b5fAj7",
  "key1": "4HAxFsaUHiyBczZbUHmXnBKsDRJZcoim9grNqwrzZTscrvb8SYNyMku9RdPTtdpbiNrrHjLfVji94ie3byc3k1KB",
  "key2": "FVrVDTKNayetFBbu3wWfmULuWoN5jfxSQGxc2nR1hfJtFqa4EPzXNgVbMgUYBjmzAFDjc5ECSJzBnogyfrQxKvR",
  "key3": "4F32PFNLRf8hgj3aXtqbct5tkqs7uzsisTjDzAEcEbtWcJbYe8zSa7a1dkDtSrhPir88V9HfdB5JveNQENqPchkV",
  "key4": "5uxrWLFnztcAN733tbKLGn2bzWqZ85iksLWFJ1Z4EjXzkk3VKZfKKgNsWFhjPm8Yx3JWVRDyN2tciatfHM1mY3ED",
  "key5": "3frNFckcMYThrkQzLjMPRwwUr2vBqEtNbL7qNs8rRp7D8Ba5ZsxoTBriKqZUGwWxt34X97dSqbhQxWeXmE7i3wZo",
  "key6": "YWrR6psw86qsH1X4RYBYYEdj2T7bMUiqt5eckYbmX5deRw3q8xBDEGv7ZmCWbtVhBq3BSXSFpBKa1gXhQoGRDTs",
  "key7": "2shhedK8NTBikMvi9hFx7r9VVqPdmAoPHxUG9ZEBph5eQWUMZdbugEaq5jQm8bbc7nXGrcmTd6HgjxkH1VPVkSK9",
  "key8": "2nw87Mm9qzZA633fAmXjMPt9uXnjSjXEko7XrGpnHt89SgruV6qpX9tQnxoc5LfgtNKxfDwrRYe2hCo98yxV2Nbb",
  "key9": "5AQwPf8hPWyFtWUzgCvi9fVjY1r92ns57eYrWJ8MKEiExHEMzxgWtV8Gj1WGmYX5ibm7H3Cuqssb9mZ6fh2hRP1F",
  "key10": "49e6Pp9wRpkRajv6RGDzBDVzPHDDXVyWRqPcpZw8d6dmkZpMrLxqoKKApamWDCF7JJeqTVCw7zfkJsRstSmy7x49",
  "key11": "5TLoasDwvYG6UB7ovzipjqDkbTpPTXFVTPwN8jBM9hbViXfoGUWZsgJjYmk3uHPMSdF5vsLU23L1cW3mSjboL3Zx",
  "key12": "3gAtWmhaEB2NTD22kLDNPvLPAymcRHmVHvxsmWZ3LTwErCG2hsLSDjtyBm1fvjWgbEXUs2tg34A4i1adpy6KLN5c",
  "key13": "uWPFiByzrLYU27dGRsDe4922bNqLwenCCZouKE7waghnsfgeJdiWrB5eSmTGgNxK37xyxk14d16fjGwUhgV1UuA",
  "key14": "34hHzZ4qaeepJfxD5syLZSPmBTPgkp7G12XmUE6UKyj9ABbfKxrXQ3z1ZLmu77SGpQ7ixi8ezAdQVsy1NFhxt5mv",
  "key15": "2oJHiA5dsPfiVyLNgjbBvNrZuCumAbwcS75ygGHohXcVbZVpV3Xi7kRqJ7KxjiWYmL82Zcu5B9kS4aK6MMWjxBqQ",
  "key16": "9msxSDWYQVDSB2aUtkUMQXfSzeobzQvsQg2qTn9Fy27wK7wfUGV3bvZfvczCMyPLSCenbUQmra1itMYPeKQGGcj",
  "key17": "2RLKRH23rN5n21iEqVzwTqrwF7zz2LBeXYAzgSQqB3XWwB9YD1Pe9wBFN9vaZ7y6q99LHbrweLFdHDASnw2L7QEZ",
  "key18": "4TgN68V4cUNrwa3eGSAF1DJwmB74KGd4aeEJPnuWgxkVQWUt3gmetYky5sBPEP3DJ3Aiy8TkU9MzY1p1PDpvX7gY",
  "key19": "5Tpssnow5mhJ8SZZCzyw9Vv2V5FgWxyaXUhMHiLPyzE3ky2is4VqqP3WAx1PFxDFdafsb5Wi4diDwPPoMKjBk6Ce",
  "key20": "3un7ByGkwk3MZBGKDwm2FguJ15DGShjNVm7EzBb1XhRj9SRqvix44kD51395G5M6ZXQPpekJ2CcabwN9FxESvoAg",
  "key21": "584pjbkz48ExzmJmLzkZBtQXuyMTLxWzxBESqWTf4ZSv9s3F38wixP6b6uEN2ynVWVRLM1XrzpWuoHGudQseRXen",
  "key22": "5UPyE28cjVyUdUuEMHwT6VdKDCwCcQcxHYJ9KgapPXRcVb7qN4X9Jm5bawQVYXxmFZJwqZyDitm2Ufcm7YfYU9ss",
  "key23": "63m28eGA6MQ4SkfVzBFWaV5DqRSuDbzVtQnD87sYMtmFofX9XaCXjo2H4NLPoJJVZzNbjuLGUCdKcWCE8yw4K6dn",
  "key24": "4WsPWeBt57i128RmoyyfJWeyRgcbpRFGYZ5S764Xu1dtpVVLqHMN7BxsK9s6wiq2mwBv4axDnoKYx2QHdPGQGLCM",
  "key25": "4Xbtv6muGsQR7nWPmsdEqdAj2Fo1Jq2WzFamaBGt4ReyW28htk92ZTgVUBhgP4WCR5QKAr12nQKovWvSLzn1AbwV",
  "key26": "4oAegfznfXeS9prvuRsiLWtiysDTGMtQbg6WDDxNd49jHyjBf9ASX8iUrZmcQoGokmTyYJAc6wRWcKXD1Dr9ys62"
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
