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
    "3Ls3dkvenWTpg4kEHknGjuJCEnQBVpfo6n9FFVgTKTRt1CRvNddg3UseDu5eZfURWSZKED25ZLHmAGyPVkiXJbyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WsaAnxbmLH7bsffGEaTLTneod3SuFopPpvu5KvwtLnntbWRxG5JAfWZ5vj4cSbFGTy98hdmzDN9ALw3YUemy59k",
  "key1": "5dMCAqzSBz4AwFt11m1G5z8kkDqQbVjRuP5JeEoioZgucnJZcoASpgvXbkvwQTHADzsAELTMt3RqMyVYYcSr3dJF",
  "key2": "4Waz4i9ECEmXMTvR16w5DeTAktMsr4r8JB12zDcAgB54BeQwC3JVfjqmQK7W3Twe1TdDvCnfgAvrLnhQoSparxWU",
  "key3": "3QMqNpK954EJYDFtkFUpWdRS2Lf6cHjUcTL9PdZ7Zv7xP5HNubaCMiShZV8sjpFpHtmnjDeEKxAnBnzQKiT5yzLA",
  "key4": "4gPFDSeMSujP9zBWgQBEVe8PFnBdWp7orJUZgAGvcREMaEmpMzauydd1KijM97jC7B4UYuBbGW63yhpvGC3HHP3o",
  "key5": "14B6LXxkTaYqgH1PgPrpWtx9YB6rSZsnXGu3X53Lu3DoDhDRe4tM2RCJwD4NW2X7d2XRcbP4h93qz7zPpeUBQ8e",
  "key6": "3prj3j3SfsShmVhkKeYEeUZePehEQ9uxeXpnce8NkDWzuHkksrbadtHoiKTeoiS7VjTFHZwNiZsjoyyYZspig9Di",
  "key7": "mMuTS96WjKvgmo9Fo3A48h8eitPaBWYYEU8bg7cMrnfkCZRv5WYEA1gx6EJrtHfwxDoVMPQ9ab3CjAvzoz21kQi",
  "key8": "GezQyqpQwdf1YxEFSJzwyLDBQtbMT2simSjJzYHW7zmVC9tfWhQCsVReBSXfMM3XRMLVULYuBS5dxZ85p7BGq83",
  "key9": "5nTbjzf4o7Gegjf2oaQaqDtg2fWF5VYL6bJZtzGeV7pYRwgNpuZLcEwGQnwrJiWsa4y3ZAiTBwMj2XSncHmBgDtk",
  "key10": "5DJ5auGRYibA1R8dT3umcJX8t2RXfLjtUwBPGQzJS5qx5aTLBMUGfALD1bYJghfpEQYtVWvn7nTDdAihwGr65xQm",
  "key11": "2eSPofUNYTiQW5t7n6KDWGxt9mk7FH4Cux38TTi97eqmt9RcKTodkxibdzNhL9hC6S82XLmDQXU6D5WPVb6YVqSt",
  "key12": "52RXt7uPgUxNuzAdKsTuZTukvYzbwB4iowET3fKt1k8YB1GeYBswD8jWFHugqLMRDQQH29CF413yXP94EDeKRYh5",
  "key13": "5XJnSaptcFbBe3dYgV7D8U4ajjya49USVoLFEnoG3bTRffm5kWkynQSBjowh2AYaiGh5pnysd1821XMLbK3PL4HE",
  "key14": "UzkkZx4gLWxEWv9UZVUnwx7z6kQeGPcvzoiLnazwAwWCkMiGwDLApVVt8Zd1ScfBJAYgpoMaV9VbN5LjrSVqy1c",
  "key15": "3mogxYs765jbMDDQ2e1N4T1r8KGBQdXiqF16sWUGc32F2chmQSiUkugJVGPLtGwweqmRn1VSN9a1E9MSUHYkQD1B",
  "key16": "4DqQBmW21aRd3cCZezhrs6Zx6jPgFZiMg78xBcaRhbEhq98yq5FbxAFeq8kLP9qSS9A99engwbSPc8AUDdRmg7yS",
  "key17": "2EQod7GXkzY85V8MbAvStGkLZ3RvHaQjh8ump94bbBhbLevFHdqLJNQyjuMicsUujQ8cofbRx1o7k3AnxKaUyUVk",
  "key18": "5HFadGP1D2xddF4xGGBB9ypwA1BQjhzGP3uGfoVFJWfCfuB1bxN24yE17rwKUUG9FZ6TnoHF5xHWRfAhgE9GVDJB",
  "key19": "vnbpV2WvNEBcUahMTpQCnn6DmbJuuD5YLSAznoAX4W4oqa6QrZ7MNGmBRRzDCHzX46rqzeY3vgsPir2TLQM5fZh",
  "key20": "2B3KM5pbKLpDYLKrTttMjhGAnpMHkoMMmcVFa5moRfaFo1s3H9Tw7k3DwsfqvSN9BGDdm8j1UG7Gz6G3Ep3eFTYk",
  "key21": "5yNxEdypL7CBkidvzq7NxYyvHqzFj8GN2tXgWfrE4m4mxF7SQNYqPSstHQcPF2sctzrEGQSu3yFdXuRcEiXCwCeF",
  "key22": "36k3VypjjunoQLjtxyouFMfzpJqR5wGP3Hi417kYSWUFaNKzn8y1ZPPFZsfQKVvkm63jzLVD7yNbA44N7VXVb86q",
  "key23": "35AaqbXWJYxdhiTKMrcDrgPRzMxdvXXEzHDzuVp3Dg36uoQdh6q7LZQWmHLCLxqHpPecP83DuA63ZEwvMvMzQoyt",
  "key24": "5Z1QY72DPSh2RZy9rWDxnoHfxThi1CjTwgjyrBttSJUEaNbaCYwKm3dioVRGsHwTTtxAzDwufN2PQC6EuKHS4Frb",
  "key25": "eJt3PGq49mk6uFuea41npKpbUVS3NXPuXi1noerDRq6spCd3eZgaX7aUy7UhzHJJQ51URyc6jZQ6YTzJbCg3PGt",
  "key26": "5Rw8cdWuHzpGYPKPY53FaYyg9mUmakqgFmQ5PLhVJp7YhPWRxvMrCukuKookNxnBNJw4ppR4Qdxs38tDPbpnagVx",
  "key27": "26ApZsNCSrynJWRPQwterQ5jFeGQtHrcv5HwhQ76fAqKKUaZv9HvqBjuYh1sAyhwErsLSsucHWh1dCXLth4JYMRz",
  "key28": "3facUQ5ZKN111RwQt2zsojszY7PHAenD55G8mxceuHhxn2ByUZjCRfMFCq42yH8abw4urNBUMNqqSSqxkWMs2oYK"
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
