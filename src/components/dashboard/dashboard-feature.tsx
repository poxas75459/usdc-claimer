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
    "2k8nfxmXfyqKnoZg6dpAU3a1xUFHycR1rtuAQxtQ45UE1oijo7eSV27CLpHk8ogagHPFbWpLmrRTT9KLzVb7fytE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DYXAJXVvLUABrwb3xni1AKzt4QeJNVLNQPtsGXxbKyVDFe2s3i1BK7ZHiVAf4FLDFrJ4evuyB7R7TRFD2yU8oh",
  "key1": "5V6Ya8549i8w44aRMTsdrFuKznkonjqsUN5bAso3PpSJg41t7FGvgjKBJohQNECsY7EhZpfu9n2aC8YwJAkQZECF",
  "key2": "4Gvee3ExgTgpoUuWPow8JTEtA8GMTTj4d3zy3yJw94YafYpMat3NcXwDxXjiComFhZMQJBLNE3z8fx8Vw13tigW8",
  "key3": "3LcNCNNqbun1aagtdhkjR36eQ5QrYqCejzBicRkx8wu3QmRN24KF16sgnLZDFSioUxXJR8q36S91Sunyg76JDJAv",
  "key4": "338L24Ga4wvUef93g1s5nScxyvcqb3BZyZ2ithEZxar5CVtU3XuyjyjFjcRYSee8PyhY1x1dSof4nKDCVBqpEV9P",
  "key5": "5doZnc9LNnzK1WbPpPQu1LN4bT4jHNvEqTus9cmCSS3VfVMGSgLXeQdrZpQkewfRSpAahFPao1Ld19Mmp4kne3Aq",
  "key6": "yKS1hXsfZrR4nbdLhqXMnkbobZobLLZczTbVCqSdof5doi65vACeZP3YCwfz2YV5T7LghjnEhrz4V43AB92cvEm",
  "key7": "28YiD61Je3YWZYcksz42GbPkpPVvwEdHQBX6H69tgCvkm8Btrr8NdprCx3BXyFBzoLBnJxY2fS6jasKCVpTANxf9",
  "key8": "4buFwR2f9bBB7ed2cJwAsNotmA57vXrUQcgzMfqSYajK3LnnifspJ4HecYexSePmRqvpRHLkfMMoCdmaEmahiwe",
  "key9": "EK2Vu6Vq2BnHEiW5SEzXkNPaJzE6DZBpZcNY2yL2eyCr5XevCZUh67cVmn7WaNDEu1rM7iSU2u89cpocQ2QubZT",
  "key10": "4RQKMa4FS58QgAjdUjqjpbagHDpdU9jrMf4sENp4c8b1PmPufaV8ThnV9S6vkNZTBK76vVJ84vF6qm5QnStV1Ff5",
  "key11": "57wBTxrVrUH2QpWtekMknfSe93nTZcaR96TvgE3xwuea2eMLdbYxZ26B4ZrP6dF3AEyeZToiqH97Cdkcp8w7zYNN",
  "key12": "YLVpYKD7ThKa7upYLTmtmAvq8vZ3khNanoE8vEikj3WqdbUNwjeRei9MB7T6FE7M5NCBaAKR6wJnmVSgkpRMSEv",
  "key13": "4bCYofa23g4EQNE8DNdCc8kLPjKHB1o7aEU4DVzw6sVp4H9soHDLmqYNtLJPx36hxzpk5izB19jbvPT3jz4cb33q",
  "key14": "3jdjYp8MgzbMMM7KGa8GhWtdw7DSauXdKbypjrEfFbPBxSdXQiHdVR6Rug5Y6wF1rFywufqCjmeNA4zavJAbF2vt",
  "key15": "3LG4RH4BRLTLo8QtKU86nHDZrUMN56ZJPhJNhp6euhTEq99kMWhqC3Ga3mYXFwvB8CCLPryvP9ahjNHzoM6fymTa",
  "key16": "kdL5mFvCwRa5UzQ2DVJPRJfaRMGNVrc8svSmxTw7qgWsoz3HjYBJ7Wc7RRGzs5SeJF4P1sQyRwdS3X9fNJmgkY7",
  "key17": "2WEroey1M1t4cEvfuPn1qYQQP33pXyFvnJmKpkahRyCyNdRB4ZvJ25sptpya6joS54jpHYiunC4NAQNLQBCsUUi4",
  "key18": "5rgqL9DC5aWDqYj7NZRXQ48XpDKKhKPzRRMn7vFzY7vHHYpVHaKkZUA6fCBWNKDkVCDS7kY6YRB5ti6P5kBKfYFz",
  "key19": "2wZ7A8LLU2ZkPTVEi9oiskL898fVgXvgS9Rg24mnyS5CsG223YHYJzj2aXSLaq71EwBbEjj9SBZgQJ3Bm2khVsHp",
  "key20": "2RziGGBxocVPwhpJvQK9Hw1NimxkwYNtUF7AAzymLwrcCWsHgcotqSJ3nQBxp8vwyJgyPFLi5GGwEHGnrKN9S27Q",
  "key21": "2Qg25NM9zzEPUfp4AzdEGbCHLZtRaSviA7x55yePVYsB5869HijtzYHrVYZi2CBRfk9uzrmfbW4s1ANfHG5WvxGi",
  "key22": "3d5F89RkCRy1umrskLkLL4typEEtRv9nMC4HtRkFNdRmXkUHqXCvUdCkSL3S5YaBqGeWYhnxhhV44JA7hoDbHHfH",
  "key23": "4hUYBHnBSyrESTX6JMUE7iDXxUyFed6XBjEqYzArHXKvjeBeJtWfE7A7sE4jgRoSPyRGJdKfDwN8518hR2h3vdNL",
  "key24": "3g23nzcix9wxRPPGuDgVNDdDCz7vYbpAFS87R2WzM6KLCzhDyV2qb4xquXQdk9yjaSjE6Xn6B6nCZD2WMkBfqn3o",
  "key25": "2H6cEnBkjE4dxtkP5j7YoEHkqJc2uNwAnEq9srZYTGXuEktoC7kAaHriaHPyx3JooPPFwb4UCZ47hrK5pzLbsrg1",
  "key26": "xGWCvc3vd2nPH29ayubdutubPZJUMKBMdKgkD97D1ZkQaVKp8kYehNuzKXdbwHD8JgNfHGLzfR9fHFoNKDEhGMH",
  "key27": "2KyePdr9JGXWh5YwGfVh2gSsvyjZjXQ6vBpKVVZpr9mX5M4bBAEHHQQ4vpjmrpW2kR4b8EmwQAyaHTGBkfLgdfxv",
  "key28": "3z85HBcWGSweBMnvtNkB8MH8PHxbnNsnhiu6Azu9Q44oLJhLBapFZph84VshjoLY2Bnxufc9hbRmzVSfmnjNzkWW",
  "key29": "J3qM2JaHsTPtVkpRe745qFqyvjhnoTMF5NAMyuFDd5qDeZxxXmiN84CHxHRhJXYGiwjzdwcwBtGEvFPGEMkfzYN"
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
