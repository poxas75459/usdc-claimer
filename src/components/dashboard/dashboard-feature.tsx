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
    "4QKaBBqEXn3L1HNAQCGD8dqKho6W79RHDuaHXLKkbA1nB9iMQwKwiS1L3JfAsSkYw63y8w2yKp6aMsWWB9p7uMKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RRHJExphx5AJFFyk9f3nsE1136SD5DK6UevyCdiMUn8RsHVXJArE6c7sDEGckdbN7Z1DKmLfa65CMwPyRxLM9cy",
  "key1": "2oddmt6Q2bqdCtzzYjFT93pWnAo8cc3GhmVBYUg7vBLBJftLX3dHhgMcUYuutL5ab6kognhBpTeVjGP3uUCVarhC",
  "key2": "5NHv8RwY561Ge8b4bHw7vQBu5RTPH7q9cbgedwgr6Z3YoXFi39EfnG3csTZAWrNo4k16hW2Ln65MPEzmVkefmvjf",
  "key3": "2MxyaX3jJkuHkTdLMR75Hwr5t1zinNvJdGNYTarREymotfYvwLnUKK7sXRm7gDrBmy7BddeWAppAhXoMQwE6qjf5",
  "key4": "PSsiT8r72n33XohM1RvvtEK3LDycvTX4whQFHm2GrbnGX3wdf7BqP8ory93iWHPZCZYJZvoHHWBo6JiCM6nzHZY",
  "key5": "4pMuXMkZwGNsLRXWFn56woQLgJFAu6guWcqiyt26VN3nt5W9Jd9nqUgXDMJTHXPWunySgzrw7vAjjCcRa7fXhvGw",
  "key6": "2tKLcPgoLDdVt2meraGVHAusXT7dGU8SUNQtHrWYT2iEhZAMSYq73ru9MrXgD61fgqVRSUZJrEQU4uKzVLrExg99",
  "key7": "SBTbZKMZVq26KwNhVfNGppfVSDv6CSai34uAXvCitMrKrAKptjsisKvAA11i5oxkTJPUCzdqSFruTHqHKcg1Hv4",
  "key8": "39G13DejeMn5D5VgdTn5m5NKKEdUTrvDMiPiNgaJmA8tWXBZ5riVj2bu8Mfio61TBVAuxtRttU3wVDKoca1ud94v",
  "key9": "RVt7frLP24VAW34PoHLEmEu7DvXZT6KJMwuiLRPNTbg3pyGVc7dvKqBfU2Ty7NxmAXpghVchwgJfLzY5BbK9sKz",
  "key10": "4S1UNY5Nm4EmcvV27Li7n976DU5xRjK9MLdJxXd4zwQLA3nd2bGtoXF9YCEsbVE91yeYZcLzCS3wUdw4MSkGhmnL",
  "key11": "ZBTNepfrdbwQZa8iFntstmXWxDeUNN373dzyb32SykxhAgE3Kgk1SWctb8DYAbUvDPxPwzVSCjRT7DEwVB8fVmk",
  "key12": "5jtjoZeuxtDPNTJqMEFFB3HdKk18kp7sdZp2T4Y8EzupeabrdmaUHJrRYnjfaUFkVQ92LDoTdWUaiK3gDuhRmF1R",
  "key13": "63BVrBWmmHnyeRLvPodB3MwqMjfUvnitCSkXQHdmXESeYHyCqfbBaxP4fMwsa6i1nY5V8EU5uscUvsJTmDqUj6B4",
  "key14": "4LGap3hjDhCAxj7fVK9p4dUJMii7zYLc42o6d7dTwLUtbGcoTU1hiMU2EdwACwoHGT65mXo1W65MfUAFxcm1EbdY",
  "key15": "3mZdBMoV7JJxpHXzDpc2nnmHGYsP8sqzLzJQE9z6hCdUecBEQPK2rT3mBDb8BBVq1nQmytR8HWhbitie6hgKqohs",
  "key16": "kqQtC72yrKWeoYzNKGw8ZjKN3jJYWmvtNsP7RD97ob266mShh2qiD4LCjj6o3hJkG4EyR6eU53qDTFvhGdKgz3n",
  "key17": "3oGGreAuQSKRpHEHW45Uf48KsNvvjk9bQaXM4k9LBxwXy1xbNoGJEMujXTpkQCHguZBKBmbuT9rS87ua79KuTQTE",
  "key18": "4ER3ycHejX2GPNYwpRYpKwvwSuDxxNQ5p8iGim1xsaKA7FtzVSkD8Cs9xmuzrheJYRJHZA72vYezHyJHNYk8YxRd",
  "key19": "2YMzqzBMUicwM9n522eBNHRycwPgkYUvqSNc6NceWn5MFqpSLkhEMfuNJYUHHob5xbSAKDJ31VnJ1vwWCiVkyfQw",
  "key20": "5g6vAyfp9uMTGDMapxtFg1xCe7tSk39Z3wVKAZLjqQwNTsL7orHHEXrUD9GwvNB1wnxKo4PSPdgB3hdUatTShRia",
  "key21": "3Vv8xHFsiDybQ7Jdsuh6SkvUGzTyRcodGbDn74feq4Zq3WP8sb9jaNSBhX7tsAhU4EYK9BFzvoLYNWvPpY8EmcWC",
  "key22": "59JMNxghjYJ1NkfSqrhZPnUTEpW7Fjq8R6pj3mALusppoQRQpsyYi4eWzFDDuqoyT78JbzbQDtedkBU3ukb3tk5M",
  "key23": "3cmvqHT9JCfZ7vnuwzmkyjNNsuqaw1x3oqPE2BWftDR2jnh6kExQLgXw2nDc57qtxBDgiLw7Rb6y1EmsqQuQU4xE",
  "key24": "5BXM51k1jYVWQEpnHeQAWcBp38hYivxmJELCHaQNWwHZ87LVHN2MjaSDXcAo546vc32WAVaSZGki7P7FHhReZYuu",
  "key25": "3GBhoc2b63eEPLdGgpD3t7R6i7UwZ8a2yp3pmTrRddXYF66xranV8xS6HUWCn34FJndGcg1WVn3bAo2g3eM9LQxM",
  "key26": "4YATeo1Vkx6zkC9gsvt5zqufFRA9Z1LfamfCrsZ9AQ6mEVKo8ToUEY8E8TZ4fjjumEdWW6vHHadLGhxPL4M5E2wM",
  "key27": "45V4uzLMqio6U2Q7bRABW4nuzrmxzX1dquVpgswEzy1thZztvi7FEdxCsRkZczvLbsZk1dfbJznNYPNb8G648KtK",
  "key28": "ciD8NWF88NnyumH2wGVTKYpFMQ2E5dHSb9YzR2uPFUd8R2qsxt8cnFxwcLt8ckdY9SzbkkGCdhNKj9G5g8yjJC1",
  "key29": "EqiVqGryeh47nAAbvJCHDYv8BVUrM4qVtPsTP77X4CvLEDvi1pR2ZpfBjSork3EFSmjDwSs8TZNyiuiC9njCtUk",
  "key30": "3DE5pqAwmHARykFG1PNwvkK94zc3aJPD1mmE83zM5XVKztxJNHoRuP4sMpU6n1wvREQN8y57zoP7NtQVAmzRNzv1"
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
