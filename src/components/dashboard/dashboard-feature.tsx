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
    "66sp133HtxymnJZWVLXesUekZJYqD7bAg3qDzmj1xy27MEqc8XtMqSQiQT2qxbHs6QRoddbboDUkdZtY48eAU7EF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K1XwQ15MSb7TaU8A92qJo2QJ4rQycJFW5U7Wu4kjvQet9wGz6QwfwF4dskWXSwVG45St26XzCQEBFNuVqpFFcke",
  "key1": "3CWhDrTYhqmHa9DRW822HAtS2n1agVJfdiH1FPZiqzjera8UsZdw5fAKgBmo2Yf8ufuNM5J6XnGsGqHfR6bkRyZe",
  "key2": "7ryyYRGrEpLiEFACkFuWF6aub2nugu8aNqJgqgNw4wzEk33ZgrTWJ6ji1prLrL6t1PJoEzZ4UyGM34oeYdQucbe",
  "key3": "xih7j6NCY1xC5F6QGsegyUZp77YRLk8NgdsBBWSXT5T9hUexHN9CRbadjvTy9hAWEhyisJWThLMQTJLtkVvuE6n",
  "key4": "3qs5tKgvHknFh9i3JHBnsjNMeEZ2MU7nEcuh59ccrhk2Ceo3pnQYC1j7BjhjkWAqcD6zBPkXxTgZWWCjgSbWbqLE",
  "key5": "4Pe3Q3Wn7C4gpwnh3eWDyHxCt4CZtY1RF5aWft1MpdhNmaMQqDaJVFwJusSkcZn3PmyM8j1NvG7yJQNisiiCD3Gz",
  "key6": "Hnpsg4bBXpeLJgEe6CUMtd7xrSyeudZn9DetqrXPSBpTt3h6tNF2CK7aULj4oQSjHorvbJcBcpzFrezgALy3tLv",
  "key7": "4ehKtoq5PmYqx9Tmgs7VeTxRubcW2z2yPonRk9K41g9X5yLiV2iTSYHbYeSvxv9FssSp8MWYXQVRufR869zt6Gp",
  "key8": "dTW9wrx7S4dt7BSwnZF7FjuVgtMySjrQ7DP273pncqb5JytyYUtpuGHk7C8e9WwXVcwQAqBHKyyWSgcrT2ngMtG",
  "key9": "4hDZCVBfEspcty62A3jsQMKMHRA8gspcMaa1FnB7Rj1nzEsZKUiRQsfij11aareaSBLSLbCN2AhMMSb6MK8MXAjw",
  "key10": "4QEhMEvPnvPuK7gPtoHj1poG8hNZP1A3ZU57aHKckVwH4HuLEyhoSUcHVpvWESRtBoMVwe9WjBpogE2X29qsnJiV",
  "key11": "4pfMfKirq1dCKvTfPCySPGznnKvogsNvnVWf91y6TYVLLAg2duxiHTZwwNvZBDofLy1Pv2LLjX6w9FD8ad86fmb6",
  "key12": "574opVQv3gwQ8YNzCrTDtTKvbUgAZpk2qY7hMQfB3KcK3FWWe983UZmEMLvKS9URk954SGsPE7B25p91fK7wZ1tP",
  "key13": "4oxHiugHabbWPJEPTvDmibYPvKs6AjfNUbutRq4H48fdQ3cCynrzG9aAnwvMntnR5nzsiJ1weXFNdB7z1h56yTuR",
  "key14": "4pvX5j7BAYvkQtzUEBYtNCc8Pf4hSH584nCQTeYq3swGLhdBn7JHtrcGe7nMGRzPV63R2d9GTXX3skMLUayhEaRN",
  "key15": "5DcTyomXyVw2fF4ptBS5NMMXUhL9ViNrm8pd42qkJMWULbfpaM8uJXwJ4roRGMtbqAxR91u2iRDVyAd2f37fovnA",
  "key16": "67UWGZVJmYtKXoP5SUoEVJAeZmBcLproTUWmSmtkFH5Z9ZAATimzPYmUKXUPi6P86XV4XnvJzfTuJtKrX7dhzyQc",
  "key17": "2Me5GTneP9VH6y2YpurA8Q7kDWfkbbXJaK3Ng5T3ai81TcSGoiZ5mps2CX2ATjQupriyZYZLeqP6hYQ9W87w7rQu",
  "key18": "5kZw4yKWzTtAfWBPXxo48YLstCcJrVnpKhfoLLs4WSgNGN9L2fBXRCgHwH5Stshn1nSury5A3XzJpDdE3RkSUfc5",
  "key19": "kYAt6DsjyWaw2MnT5QmVZyz6MmGnKBvkiacmRTfuXunUfdAiz6WCHu39kwpqDa4gkq3aTXnzUCx5XfuQasFufmK",
  "key20": "2eGTqifhTEejnDBNrcktYNvrvXiZVNS8h3RnhJuPavvhLBc71FeZXg2ybG2JWaNRHksP6TvfAZRZUV9cHwoBxUkY",
  "key21": "2nXhgnMHra6zDcRuqQX1udsv9y6SLTxVrb1fXYL9xU6vYGhNuxoiv1cN2YGbqo93PdCM745WUbYckRsTdTizzZQD",
  "key22": "5hFXdF5NP2aXnoApSMt17ys8DQ1vbfaoh2RtLSTmkwMs9gZo73HFpzefFhFcht63qSiCn49bfXdk86FXCTkNFvwx",
  "key23": "3fDhB2rifMQQF8MUahr7HCFE88TDzgjchFKZjJEREoUBg3ebF7LxXeMPpouJyHay8YfsD7eUcrzNgFGzQhCWs66o",
  "key24": "2JPi2qghgUTsZjj2s3BD8yvnA3aNkxBBRx8TxDXUk9RdxcatxjhF8qQgXGpdEbJ7EBH9hmv1FSLLtxzN3gj8Qicn",
  "key25": "5vf3Dhi58sDZiTEgitiGBSrVFqSQQNR8A21sxFdqLjpnUrygFv88nScZtAK1hmFmpyUnwoSCLSb3Fzoov3Dz75Up"
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
