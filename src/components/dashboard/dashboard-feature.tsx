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
    "JzyANeASTuc8F3yWGfeKju9HE6xyP94gDhtz4GayWYE7SzfSJoK2Kv27do2is4UYFP2XHXEtVxrgS5EvZzTDoMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WHLKQwurs4nt7xYDpJc2A4K2kT5dT9Lz8Jcvfwp6NER3XEAc7gfJxd4jfLDw5DpY6EdTuBHcvfJdUgy8iPokpY7",
  "key1": "3v59ufjFqZrVU59CStB5qwgY4njjcr9bJ6K3XnnyE4MvhfXMeo6MzQ5cXC1TNHG9SFUYSJwPvtwyHcjQayunzhX9",
  "key2": "33CtD2cXAuZnxVT84fQFEtbwhdWhuNXxk5aYMu5Kgzwmy4GDwJCnrFd1ttVX8TD4tviMJEcYcqFbKDGMJGJvGmmG",
  "key3": "53mc8DDTP7xXVTLpSUzkSUuUCjLQDwKbeQcysA3dDXFFB6wdrFcP2WchnMec8pf55j3tr8UZhoVprcdzMs7WmNQ9",
  "key4": "2m3gEgCNDRWE62HyD3hMRbjafWmBtpVYaBJCjSvfze5yrTL9R3FRT25Z2jHs3y38Z2TWrL2mj9qUK2imKZZP6rGg",
  "key5": "2aumPqRYvHUsXZU3137UnN16s1CthTVbUgp9t18meCvRj5GMviYZv7oNY37GayGsWoKnSrpkRPg1TAihFyp2EvmZ",
  "key6": "5n5F4AvZosxwqd19D6hvUS8K5Ao3drCPbpLdStScqiaJAUSWAn9aU9andP8zhQv3ao8mDRgvFkTAWNEsFdLSf7j3",
  "key7": "46JLFfiXM14kt9wtE1NPo1Rw2N33KYJb6HULbEKUtNkSt7kGKX92ZQuny1nJLVkFnC2WGifdwZewyThCy8rvstkt",
  "key8": "3rWttUXUucTnNbWMPfwGZJ41ziVxxbQypThoyxubSqR56w2j91SvL8LDFGVk9gj2j8wG4nXVk63BWrmDXNyKpqnu",
  "key9": "LWA5sYscJPJYGz9RYcGCZcDGPzFZSJWJh4c8PBamFoZEGuZ48wTcAK26uNHGdD1YzqxFSmnVkNvdHAa6pzybboD",
  "key10": "62JQ4QYtzkYnb1a9PVBnoVbJfCmdbGhxso98FVBxTjLEMzP3PJKPT5vQvFj274UMnETvnD4zFuTJbCA1Wgve2HXQ",
  "key11": "2DVZUsa5R3U2Pz1U7ntqf33SgNL5kGKwEygjukPSznaeRAcXrUes1ZUKqLRUmrxDLPCXZ1CDCq6aMpoB8ACyoJ1S",
  "key12": "4yFyQ44ZNugkC5FwVkoSKM7smpHUxh4zkY1bWHJEUiuAkxmCyYh6MahfUiD9aoUX9REdUxuLQ2YQ38nR23nSmhZT",
  "key13": "5zV4vHsntcMKrcZXA5trUNWNLPrWRMkNakKA8eZQ7b911xJNjcgqS1iqC5237xS6REZpJu646yXuvs2i8CSLEC1V",
  "key14": "35GUqa48HisvfU5u6neqJWHjt7H2ergSztWBC72n5h36YfjmEz1wDf3BS6szUNSZEZGHjTVPJBLU1YetLs6qSudo",
  "key15": "4VkwaNMTqNqKkU2Qm68Wm4v89UzVkQKJ2egpwWahtR28p1uJZZmkNHddH5HsZAAUEfpuxnAeGdPQ2QPtkHUnYkQ",
  "key16": "27krsftVXGF46TLvCX5e6eLFnXXCsmzR68wXG5qzVhiqfLPJpgRvoXA3DWK1Z3GHsLduGrw8RsZDxh4qWrrKGFy4",
  "key17": "2LYgwHZ4k1t19k8jZvViWsHTNjMzNDDcYX8WLWpyMRZaAuDHE5KKzYwLumR5e9295GRPMB3SHpMSE1UwRvQ44N6q",
  "key18": "298cVefEEj4UANLRNWG67mQz4a6CCksebGn7VScAUYWmkMQNXvagFz9ex7jmjpJHg9UBRtWBfoPDWu3uGunumYdP",
  "key19": "2bn7X5EUdaabvTgxzcAFrBStMR8vD6BMzst4QDEBf2drfn1HW3cw2AbP4zzgkY2FVs2ZmK4ku1pJSDyMy5XVr3WZ",
  "key20": "4toUz78uqmKEkJjSpDj6iNuYqEzxVurnwYaEjnVCKaQtk3fBq67UfSZbKxcRbbMEYBdNdq8fqnBkMiVQS5PL9Enh",
  "key21": "51zLf6yTRYnUwf3TLcgAiSPPa6pfK28rq3s3KQBv3xxeJS3BC3QfUcLyJyTPt6EjzDeARUkHEgydqZeR4TYmoyCG",
  "key22": "5eG6ZhMDfnS63HyfEMqe6NnbkPq6mT8CFTkr5p3Uwe8PB28svhZae4CJTwKeeKyW9MtUiLiQ3XMvLd28fWvBPYJs",
  "key23": "HscRMfZmzWk22jdER1BqzYpZqihgGLScLtRFigpYLjAySFC7YbFSU1xUFbffpgCJBGMggYBLTJZk6S9NGaTfzkV",
  "key24": "4TvXmFs7Uqugk1ZRVuvfCYFGX4rEZKvPyrVgoRAA5KHBSJqL8Y1BJsvqk7Wirse6zTNecGBRHk8b9yjs3NAED3po"
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
