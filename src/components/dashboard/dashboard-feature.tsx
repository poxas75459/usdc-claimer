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
    "2J9hFtSs21r6HFoGvkAWZi7HGknHgjDA5XzBgw3HzrNjtDPj6PZwh5XtAcZJ7uiJXdRDhSd1tSpDeyvZSSk8ubJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mhhUM7xwKFMkijq6zpMwepH3kJTmHwYeN77LVpZPAxz65BND6gucVYRFqmDf4Sfxbt8DykcXLbctbqdskbEqqe",
  "key1": "4GGhbB7z9bQG3gSCoi5QN77JtCsEG8BDen3HNd2hrn1df58H7Q6txmVYdrRMSoGnXUZgX6tUBevUUURc19A1bnU",
  "key2": "3tyPS7bTeTRH2LHzSWEfVGo1T74y15E3iRZejS17uM5C6p3cXrfryFoBBdXk28k4KXMZAniCKVK3qcibrEmogLJj",
  "key3": "2GJW2N56Brrt2FFJxN2bDbYrgXCuXNcLWFRPHrMABGFqzC98DvmRvpnB4dkd4uiquyBjJ6N7oWaP5DMwxAfy1vjh",
  "key4": "3JQzEZY9SLWHdKthM3PQNYmnbT4dGrZTuT4jF5MKU92p6p43giCjbC3aKkWVmok6W9ireQuQfHk4aSQdsE5LUdfJ",
  "key5": "3rpJBq1UbzLb4zJvwxfWELyUbRcmkan3AHMR1EGufUhpAZmHVsPmJThgfo2dsZvAMHZqLdQLqkTbYcZ1LXVHkvtn",
  "key6": "2cQHBH7LHG1qB26krQnFvMq6DF5mJnCX95rBGiqmznqFh7r428CJevoYM3sWfwJDoeWtQSrp7xfbXArgKPeQqBSd",
  "key7": "3ie2XVCzpDGLRrAembNtt2XGYVdkccWLFsLB5sNxNbZw2FtcgArh3LqT837sRYLqrKYeZKyy5BPN4DAsS3rpomXU",
  "key8": "2mKLibaSPHvJwz2RTvvMbZDdEt1Nm6aq5UiP1jtZncbKzmt4RXTPjP1LAWYoh9aKCg1m2JkP1Js4ZbtGSN5hFMrR",
  "key9": "23toGePGfRAgwHs4vBbSUfFyWGvJCnGn7Lo7toUZy2UUTSsL4n3c9ERkg69qV13sQmfWCj7ZQKrmhV3Yiiu1kZA9",
  "key10": "2FFDecur3Bgvoxf7g2PGrSYJP6qHoxjUtNEm5uhyDGBraS4pdxX8XHJta1XSdMk2cnYGrSs5ZvUcYxsoPGSC5EUM",
  "key11": "2cayUEZpHpHYrfuWfw8DDURe4vjUPPmMxWV5iMrhCRk8MVSNbS2NaTcv9Tr5f35igxHweJWHXXSuUdjGt8yJLhAd",
  "key12": "6pMTWxBsY8Z9ZdswyWYNcaQj5Ep2p1U2hxUpBQftisseorb3pvmvJo53nu7GFejQcyvvTcTCYFfVBccihRzr659",
  "key13": "67Ts3HLM2pDPFQquFmmaXCgYLfZ2kVVGZXKwBqUvQcoje8BBRJ226qXhyA8sRnfc17W1pzn2hN96i5inhJ2gsT57",
  "key14": "GbWMh83uBXRoxipdwKDzbqZacKyVuuzRiDNRihiYqAB24s3Q79b4ixPNjqFXVMcUuLKjbucCREVwCQkHMWrcRaM",
  "key15": "2PLFuEHkyPTAH9XmHZSaHvm5pNiLC7yBmstGBFqSaVNfwrQUUSzjQpm7YT3GdFTCo5nZkfeby5NAQTqgomw2RWTP",
  "key16": "59QkkDwfHMADtGNtAmov88U5XnUZDVeijt4Way5rdCuMbXfYzxJhU6yFKgL6PjYY6ZzseRsUGbwv1Q5QnGPN5VZV",
  "key17": "28riVXP2oDBRKaPScBS3PHuWhvvqBHA2bDr52b6WRRM1M4fi68TfqU94vxh335MKW6a2yjp8rr17WXacCGAhsYsE",
  "key18": "GDGg2NT9MuaYkrBofaTcfJovR8SWvNTTFhvJh9F4oNZ3qKdTiuF5Tvxzxsj3wHtg34sveQFkj5X3osfQRoAFrU6",
  "key19": "zcAg2h6Wfrt5hs5gC5MPLTLe5HSWXo6ibPAAfAvFGxyg1PbLPqUvtKsz69TaA6WdWvevmLCKvf3dW8AQ9MYW2YF",
  "key20": "2Q62GFBh39ozZG2gGdeyMDazh1tCARJG1yLcJEXVTeqZgRMti2pJBhXRFdWRTpS7E4ycAs8gojK8Q6AFkEhMKCm3",
  "key21": "e3kucJwZPKYzocXHZv81MPrhVv5ZQ2gkaMXzwYtk1Anfq8BMYns8rN4XaUDCzurrE5xDWDiTnzSvHjwJNktNfzH",
  "key22": "U5xDHQ6zgSMjZ9VvnYdff2bR4ZwuLpXzcGkBhBWrgus8bZERVmSdcYDhD5Ks7e6tQ7dtuAxsbsBQaUVs3Sm98Cn",
  "key23": "4ZhNHuywPWMjFrcpCQyfbf59PG82W6oLnAuP1ZWMDpXGYe6wHZhModoDz8Rx72bbsvELjxQFmvTK5revXa539Gb6",
  "key24": "5y72CCaQg288yNrdJGxpBtGCXYdb5Zooy9FuNrhvUsHTNSFjH2Q8LQAPGqMmyPyHATg74cak2tq3JKPLPJu3S7j5",
  "key25": "2bWjJ7fzaMDGSgAiVLZTMdTyjN4PC8zkewdv3RFFYchnCq8XexjxiH4ySb3LLkmfL8wf9JYv3zA9LVNZnANb4kTg",
  "key26": "yYgDwNaVbrqwLbejWMz9xa2NYmKu6P4ofvz6sLXdk2wGQcVZYePSgfNHihDczwryKwiAjCJ3sLwXWQsff1DBYdD"
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
