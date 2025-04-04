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
    "2TQRVQg1cQe9JMRz3YXqMeosZ9cH3MnqENsDfNvK7zKTnqUACXrpXeYomvAbHVishFYuuQ21WWGoSUzgC5SmiYaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22uP3peXEJQXLkLLvEKrTezXcsuF5NgDDdnUQUSsKcacGLtbvYkXnpBmYnh2P9ScMdo9EeToQHF3hHvnYso1auPp",
  "key1": "4Ac6QzSYUgWBaHiH8JqRotY2Rnv6CXM4CGriCAoKfNMoBVZ6UqzaxNWWZgqe3mEvvtpNRxh3kSDKkMQ3QmPwyxmC",
  "key2": "33zyS9244edbs6M34CsMpZzJBS7q5Xa4XGFgBwNe87X5xcWQpHVsBfeu1364HaUvjtUhjWXpT3seQwotneghGEro",
  "key3": "3zXeMwsrLgH9AhHZZVWQxq2mAs1EGp3GsiBYuWjurPzjyFKhpGKnHcUQwnXRRyzrw3BGyTGdt423qMfY41zK3zqh",
  "key4": "48Kf5gAUi7rK35V8iwB9VpaafCXomcEZNRhovBAAXssFNZbrPQkL2cjULacbgdEYg9EvigCUyzpCPqceUUrRur3H",
  "key5": "5tSQTbotTbcaHyRcd9SfNBHjhQAcBrAQXsUzAPjYMXNyForedmbU4aszvoDeabDLMovbcux22b6kihFDdn4cAkpF",
  "key6": "4phdwvtarBRRE4n7hrWUjuQPLrma38QX3Fhb9dPecgPgoU38sNfg52dNMmrArrQGR4U6AGttVUJQ6wofwtWAsweW",
  "key7": "3PW78HWwEbKZ39evj6LPhRDDJmuK5Mtvhv2pCfP2D7m569ntfXZqcqozXoFwPNjh1748CWjGNzgSvcUWY2omWTs9",
  "key8": "4zUCixgmwxmyB1V4Lg6j7THw5aJ9uZR6P2azHi5twHaNJzvPemRtxmUZXHx15o78SB8LXGN6YDE4WHoRQujwSndB",
  "key9": "5F4YqEYK7f1oA8DwA6619QgKrazvNEKDCqdCGoE6msBvGY55Xoo5ZpjHnBH2Jj4VyVPFRVzmRLwheG2cjDvPqVr7",
  "key10": "44qPa8sHp1HVY3MMXDc1VZXn1ARdxqx9Ng2oET7XokaSz5Ugsge8KNuPjrXyJEFyPfGtYhK4hU6rQagLoYisNkWC",
  "key11": "5fx66MnaU13Cnvekmv654Vv4ygujWxHZTKzVPkBtJmHhLX4DGF1ywESZSFNMweobg3KWVVnzCucgjaRL19wVLC3N",
  "key12": "RRuGVxGsRjtfYZEnKNbT11KRBYzXV4KcgTZerSTDMJM6DY5LKp4mTJWBNLSiLKYkBH3PB78tnEwi9tVF56Lz9fQ",
  "key13": "4T15B1ybryyoLD9DaTSMbGivxt3b6SbLbn66eYLoFWYAPbJT3KwyRjAfVz8hvKJseMcKCFx7HT6CZr1Xsh7gs8xM",
  "key14": "vBkaidpoRpe55PxWHb2NZgtAhgRxUBv5oU7JLB35Sbomq3ekd2E2stb5oYV2noDXXCha5Q5K46XwcHnMhsfQiZr",
  "key15": "5HisMJMtRiEHAFRDueqFTxtvjcB15uFj1f7zcLpPLP3gBaHic74NdVYTGjFs4Vmts3kfkUaRGJQHtQp9zYiBhG8c",
  "key16": "3zEJvJQoLkwWgHPbZA1wCuXMTV3LwbxHoCvWwtmddbDSPp66yUbP3nkjdZsTHGZmGaUXw1C5VCJLRENs7mKGoXto",
  "key17": "2q4q7HZGzSowVifiGdmWZArsFxYqF823ortmJsEbR8CNQA41ybs9sEys4Lh2Zb4jyyQHiuBLYRouB7w6ruKpACPx",
  "key18": "65fPkeqFkx9hVmkJsVZvE9JUmYEKWmWhyFfgnbgKW7nQieXicoS3HCzn2X7yz7BmtvBXohV3J2vmmtBYG7gaZiV4",
  "key19": "5ibS7x5WieXMa1znwotsthp8bDgsXwNbKr5Pc9B3PnCYCVd4TxkpCscgGQxibfKq9ZnfPSpVUkzuyApNYhn5XoZT",
  "key20": "4kb95pqFA4Qh3e3spway3CRSUFJipCPyAKgsTrqQju69TGBvpquqDFvCAiBU52Es9Cnbkrr7jVwSju2WRE3jBGyG",
  "key21": "1aX4FpVmH7whYrLr24m9T3twhyzem4nBKiuueBJh1BCpPetqfrSzbyAx5VLbA1sC9nXY4HqAryhPQ3XSDh8ieyT",
  "key22": "57rjjKNeq9ubXv2HbdwqFbEVXhtMNvpWV4bZBwe4QHnCQ8F6ycMLcs9JeuitPQpXDaZUBFSR48ioMWXWT3uyJD3W",
  "key23": "rvVyk3xiuN4GNit1QtCMdkCzYXAZBAf9pCpMMFXtLWCsm9t15UccBpwSW2kLpFagrc5VGgX9wqY9cQM27mVurEm",
  "key24": "3YnvSqiUFWZ6UzSAdmVvkYhhG1yHMuV4qGGbnFRY3z4ZtMCdVvA15J3T3qprUsd6WXzoXArBVibiDixyqkcandiN"
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
