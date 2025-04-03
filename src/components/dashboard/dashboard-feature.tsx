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
    "4Gv553Rmki7S5sJFhAv4E2gbtBjafkVnhPPJE4xpHihCgdD2sbyQAkFHRsJn3C8JyNhP6XUhYYWewZkhHN1UPyer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oBcdaC5joFUTHVeFziApkBnUozqAF8u5grmgfNexLXh9m4nkp2NfxYwQDwsaB25U95JrSNtAT2bY7vUwighwj3M",
  "key1": "2Z5iNNwgXnrYmMn2rNBwC2nQ3zVobdpJjCi8F2dFAznEBrEUFp3txrrBiU6CXV2eMwa654nqAmsAUCJam3tBp2p",
  "key2": "5WBYvLcAsa4TMvEZ5vcaBibKdgN9PhH14in4LWTR663Q2ZDKfw23GszW1eUwjJSMP8eziC9sh6GmXtHtSkjVQBNC",
  "key3": "4ZmwCBzghCBHi5GKrmKxxaacFhYQBNSmLV3kzoxhmRpZ57LVBydwJbHGm3GBHByonYCzjSXq8HiwyyEifKsCr2Dx",
  "key4": "2DRfGBRj8j8WsXewWxZQi8NyjJdoFWAFuBqU3wPbCZjJVDGNMCZyXFYfbYSXG9vjgfBS5rJmDBH7R2HsQaAiDuQs",
  "key5": "3CvDnNoE6K2xhkTVRR96TNEJBefFomwEvLt6sbhCZot7mhoEQDrFWy61Rd1mfaSEgwT8gw1aYVJ6sETUjyHYAqfN",
  "key6": "5TZD5UWAhX9GhSXQDthduZb9uHoB85C431h3zuRzm4CsBT6ZdFuHuQypnunT1qMRETUSh2NjGtXv9xq2F1YpDDCV",
  "key7": "3hafCzKTJrLeq2BkpBBvTujiPSruJFnTF4ptfu5UnEVCZ2ehAX8MmWJcWpkY5GKR9XyTyrbcUMUYytVc5BXQMY8k",
  "key8": "4TM5UAHTQf5eN8qAkC6aYEa6e7nbaMg3JXgrhFos42bTVVdVPF5bk5q9stUZ1Af1GKE53WJ449gnEsoFg5wen6Wz",
  "key9": "2H9QqiGjf3dBmcYufDjqx1p6QqmhKERpa8YdPFNWJKro529WRL65FxSnQFqGGXymCYZxM2AewnLfoazQ5CnLrVHL",
  "key10": "anrP7awStMBQPnvoBnZNak5nnnkVUubvHCNfetZCCJTwMVJhVrx4yLb3YMLwxa1eiww6Rt1wSfH9VfQpsqkCD33",
  "key11": "495u1PdTjXC7qGVnyxCNbVxZSNYUuComar7Lh7ZnVHySknnhuhrVh4btAGneSWNMsvFe3qKWMSuizEPiQju3dt9s",
  "key12": "3dZpGSW8uxRx8pxgqRgw2pQsAJAhiUJHDtoxn7ndPyuYBrrhRq4A6d5hS8vSQus37myEqmKQAuMDaReNNsmSMt5Q",
  "key13": "4irX4B9FAqnSz3obyZPXv6j4RRd33XCJWGDivNY8RzJfUjb1Du13a46L3MYyacxqLJLFyuMs3dmrf34h4ZVeLTxs",
  "key14": "2BTJi9jUq1vxgsrMEfq3r6ALsUqGpqukN7YaATD9EzR5WFxonv4S4Ch8FadH5FcSjrMYV2c6LWRtMEJMmL3cfLEq",
  "key15": "4DxWNxsPW5iyEmoMSX4fdt7uNEFCg18DxKkBPvy6QUpzoP6JLNbJBYgxnok5seJF8WAUeMWdpk3Sdq4wBkwffNCM",
  "key16": "5S3P3j5uSziWwf8AXB7dGypuveFNBzcNvYxZYiHByRwaLvUPTuYeMW5vwWDbnFW9XycLYxH3Lwsusd1Gew9yf7Rr",
  "key17": "QN87U5L2HpfdBSxVYuDafLU6zybRPwM5iQM28fesP6XkWbbdNuNjmHThcdRLu9yUK5fQz4GC9z8tEU3JDk9iBz4",
  "key18": "qDWudecyBX8nZGPJgRCDMMf2Gpmnbq86DkZCuWhTWVuVop9VxwWw17AxJhWJtd3QNLhtHiiq912PhCnQ66soxXh",
  "key19": "5VeR3q25RpTxZGEZsJektfF6DNHUpwxYU6xY1Nd3kWSR4CzVbq7AH2u5SpbnJZR13erF319deNtv2iQbEft3wj4b",
  "key20": "62r6Pz1rqCXP4sB7GEHZL435abXH9q5k7KsSLwsDhwdnNhy3EnHtVgspwH6vL2SUyawEi43tETkYpfxZx5gTZT9U",
  "key21": "EtRCe6EAq7nU19NHDjhZCwBqLAFFsiqxGKYXKhb1XyNrNs2hyh8LKKdGbwxGdbZtjWMQzhgfSgCdn1fJJ8wk3QX",
  "key22": "3V9XFgjxCRYXYkq8ph2D5byC7HhsZdnD5F1ejLKsAv4sK2FEyHwR1gY33cu62nq55L1qsV9A4hUsr5rxuer85FNQ",
  "key23": "3sg7zryPUZeLZgFbcXRtocJMdBXeqJKBv3yUqA8LkWkRD2DH9TJRsKEqz8ESs89oQTuUoX8MEJnzNXUhsauG6Xvz",
  "key24": "3VxAoXSxZwQcBzXc7wgg5guMJ3rFoJG8aHXGryQVC4a9sYyMM7HV5GhW9so2xkYL35vfYzAtiqdwtZdCtiXxFEUs",
  "key25": "kRFsYCPm9CvLgtJhMzUWsNhd23zZsYYGSNHQBNdXtQBP1bWD8qkYSzkFxqRxRv626KnRmXw7FDRK6h5YghVq2rL",
  "key26": "2vBszskhZTH1DBHqYYK8ZHX9nne1rpPFnuEEExp9sejMs1RLqxrwSJZ98ipwrrtKUX4ejiBm718eYbJBC7FES6j9",
  "key27": "4qUwgwEZTryjTPbutpq7XJpRicwadK1whUsgk8wwcciqJLqi3TksaeWVJtYmCHcENdwg5n7jGzARTV5tNDuoibfi",
  "key28": "3YDz5aSssww67j5xEmzzbyGi1zw841mjqP73KvXQBkTeHeRQpQ6m8nCmPXvrEC9ntsbN5eLWWAzu5LXNTf1vmozF",
  "key29": "pWLrxgceCx8WkUEzK38CyYXzsX43hoZejRmHhes88pi8YaEZhB6ztorUNAJdiD4jnsZCi8qssZLN6tMffh5ifiJ",
  "key30": "5nQsxr2W7Qtsq6M4y4QvLZJUR1T7xpX6PFxTKcVkEHVREg5jgsuqPd6AxTAYiZi22YhjdoJPpFqxLsdSDYdETZn7",
  "key31": "3quh8kUaWUqeQUUi1eg7asoddWAEZ8gvoCzLxenyvfSkHqFEBjuKqu4kyo1AmmBQRCAdBPPcKG1cLAifGFfoeQQC"
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
