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
    "46pkpUypBKqGiZ4Ncg5J6yJ9ndSXC15TYsAXWPCKXzdhFBDZq31PMBFxwQTDRZri4bWt9t2FGZifLoihNbBgMjmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z8v8kTYXcdQXhokqa1etFh66vJdweRWtd9sSWvQVwJaroqFbtjt7LpuTVZZguzwsiPC7uUC9r6KHfoSGyxgCKcp",
  "key1": "3hc1bXJo4E2V8FeFu6mx8XPCMWtWbwGpUYD2oymS3nrh4WGZkECagzZgHQhfYV7JhPt7g7QtvVi4TkSqSZGQb2YM",
  "key2": "48EMdJTBBdFUnaaQUgVDGU9VDSUM6qpFg94ULmnannQQrJ96YQLsn8E8VuTaXtzsDbC75c2Xni9Z3u3S2QLwhqj2",
  "key3": "jqkgvZDpmeUdAdgpweunztaE68fp5faYZSNmZoubud5BTTZNn363FrdUMqEp6SsECkimoR9ooXVzA4FVmNzajdn",
  "key4": "3mjgyw4rE8UhhbvDsXDo95ogrWmpQLJ8KNuAJtFSEqS8hZdejtaC45dmXf7Nwwpv6YTpVvntUNLqB6kHY1czDqiH",
  "key5": "4b3Q9cCrTj9chkDPCyCkWTPBT3C1DfPvCbiu7rDbHcHNHPMtjifaygQFhLuSADWLZhBaPGzcw11rTumwTLhBU4fV",
  "key6": "txuXpZdHzj5j3DGVJSo2R6Ek7gNdZ8cHe3bAEoRthw7Vf3PP7L7C4d3vcZcShS8fPgHD2tbJzc5ro3yJom788zE",
  "key7": "42PgDduLXRvWTWqBc6uWCFrjvytHcWmH7DVRx4pvuz174e4dki52WjfrqwfQbp9m3YvDKKEVWU6p3aYRSViceznZ",
  "key8": "3FzrFQTb32WbkH6YHYf8zWT55CDzQxTKF1gP4RSYV7JvDfoXdKsytTH1ekyu5ePg7ubmV2hzYmDGu3XhNMbv9iLh",
  "key9": "2h6SHYhGfu3CKPihPGAsTCnz31mQNUgDhAiVyTBvpdgi2U7kpAAScnCDJZZfnnCecG1XDUrbQudR1KrT8NXJqXxY",
  "key10": "5YHvwDZiCUMpMPeS8wedPtYarxNjQvVDy5DeBZgV7AshCDjM2vkQLNS6WGZS7q7DRXwTSLGN5Ang3Vg6EyERjnZy",
  "key11": "2cfwpXPWw1zLemzEKBURn8oDdngkQK2ihpdwcufymARJNDEsgmHqxVUtVhZrfNqCneK5ZSvip1tTHw2kn6p2qoWQ",
  "key12": "da6bi18i6rfYFNtEU6jZxWphYxGcgoo4NX85RCEDuwv3Nze3wLrh4FwMKunEzPkfPXUyLys1HnueiCZpL6FLkSK",
  "key13": "dJd9QACgfUFvw7r2a9fuh5fYXZHJevmACbKaazPrcUUyjEYcBK6moLjNrpL9EiztJVrJNNHzWkP8oyoZQKMWVbd",
  "key14": "5MYx4FwjZrGTsjSTpiuTu9re6eztDkjmKn3UhiMLqX2TXshtk9x6C92wMXExazHkR7XSDYWTHZtJZWLpb19SuFtN",
  "key15": "656WPDrS3LKC7SPX79FSbPtZQ9nSCHM66BDvCjsujHRKX6tvYet1Ye9TjbXivPgbEdboaNGwnNmy6L6TQv9sQWjr",
  "key16": "2nqecqoX6JtHorKWMVmSpdv4nGKa1FukJhdaHZasVS5seQDxXvn9UdAmretJmQQsAj9FHrkB6LmPQY6yP7sgwxhw",
  "key17": "3EoJLiS5VQDGvHgMn2gwsyvXuTng8hWRB8aKiR1MemUxRrgMHerayR4QVy8AcgVCwtr9q9psyxzEddSS2BbSz6hu",
  "key18": "3FvbrvHFLBFjuJTcKbAXvEDGNVBRBQh4J52k7pnK2wN53uiL7GUtSA47H88mKZf41NTxKuHz5ym6vH7qK3c2dhN",
  "key19": "3kocF2tSXMjp9xTBECciqwm28ynYZ3gH986dBztwm7YhcU2y5NZEjFEy8rQata3sB26r8nwX8kowdoU1WzAurNR1",
  "key20": "37k7EKncFYRWo84mZ1GBzeYuSnrHMUbY4iixNAUdJJG6Ked7JbkuuBPrwrLPNjC6TMGgK7WJQc7hWBLJBEvKyK7T",
  "key21": "4AyVFyzkWv2vbmgWq2E3J7XY2hQe2fweBk2KgP7YwA919bkLagGhxcnidURxT2oTyNjgRVd3SA8XFnC1aqwJffQG",
  "key22": "vefTFbPtRG1YLWjqfha2Liob2axMFksPsL2UY9cJb9BBn3ZX2tFeA26rj3zbqknLmfGtTYu8FPoLHreySgxgAC7",
  "key23": "4zeAuf15ifjiJ7DnS6ThgAciAPoqdEuppBqFhYpujWpAg9aPfUszxh8gSUYe4Ss7wCbtUfVuZtsXcGQ8ibFJ2YJT",
  "key24": "4HpGuYwjCC6cwmQC5FtWhV1fadkhwhncJ2mXxrqzBBF8Wv4VRWyBN2GYiHmVUEiE2kjSpxmLUgMuR9VqLaA3SkaE",
  "key25": "3MhfjjXhqx24gqNpnSZrprXSrqY5WWBGZEsJwSQaGyWV74sZP3Y6CxNGNSN9oLpfJtjV24SHmSwCeiZnPJDyfGrZ",
  "key26": "9Jc24m6n5vvoagDhgM9jQnqRw3xXkrCruBWqKwUqY5JYZ1jkyXrzRstYaszrLDW2d28zr3DbB3Xt3Jwv1iPoa73",
  "key27": "2d7URef2sJbC48p97pAJAW2815zF7FoFRjdHswWPGQ3PvqKArXYN7wSPrU11yrGDb9oEcjMnvi2rNi3KiWXMe1yk",
  "key28": "36syJdiS6pBAakKGdYgxS9dn4qSumGbQEncRyoMkspL6iinXoYNQs7vziEQQPccCfWHwvu1mmoke8JxEdu3g5bvL",
  "key29": "3N25Ba2qvro5kbgp3rv7sLSnUSYSeHTs78STLjT4vTzcvX1ggS7YHNh4LpZbyrrnCF36U1co7WCaBBoTwfL93Ly1",
  "key30": "2neAv1SC74iY4wZCwez2nPaHAgLWgYwa1PNCmgwideBgiZEtxWDeESYAzqcdE6egppNS3XvpMRmup3A2smTMMSZr",
  "key31": "3SEN121qbzXeHGUwZUd3EGMffUJEugvpoJzwoX42VMqVQskx696xCmhoXYeyqHu6W49yfPawdkZ2gJJmGerJv25M",
  "key32": "287mq6wu1XNnLAMAZDrv67U1HHX8Yt5Bw1jMZvxrPLAq3nm9FbgB6dmFFaFe4yJScEr3kjDwA15qf7JnPbmBvcpx",
  "key33": "gBkG4wEijFBVnF3VqxevNL4S1ygSbB41YJC7PxdWLULneuKddAUYD7MwymPbDmWn2A1tqvuVqfVWKUhiBdUMRoe",
  "key34": "3VJNjEQU7YGkqzW4xE6prnmTH1Ty8tGvkBxMLtCHdjNP97AbVXCQ1dG7nadxZ6WDECvyd9CTgV2K9xV73k64xtUs",
  "key35": "4mRvuXsyhVoEUc4sKvryJq3f6c7Zr8T7JJxphJVBTizVSTM3AdStB8iaYJXmY2g3Q4ojvSr7VbmUoz1XcAF1tr8b"
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
