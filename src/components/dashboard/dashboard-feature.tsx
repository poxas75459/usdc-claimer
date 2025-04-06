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
    "2ogJLHYCnLCzaNXjPH2Si253oZZcCjt3c4yEGVrEUMa9hYbBKMCWjWi7ndcMmgbUjSx9FePTmLgVxQDwsjU1uSrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dShVhrLGqFnZejheW2fFKHufTtwmYW7KsW7maqB34KRBBrS6zqAVUKg1ogDPSAFSx6nGBqSqGtPH5fVqvYefzP2",
  "key1": "5jUNsy8VPjRVout3y9rFB4erpZSdhVWtKx8mxz3YaVQ3zdob4KXtivGupYzMNjANsUVApF8RfMJjDp3mycruY2Hu",
  "key2": "8W2BRwEPWZd2ismMzxt5AoZvcanfewBUPFFVYvLzEkQbRzX14NAwJrtCvVGDTW7bkLGA4nYqpZEw5NAKzQ8GUc6",
  "key3": "4aPfZYoxYCQkTQeYAUym22bhkGpUsyaAdunX388dG69ciq4pFctGX5ubWbdRfPJiHtNVuoru1J53XkpMw9Sk7qEZ",
  "key4": "4ZEQgXEHvAEdRH1JA9K8RSj83VfuoHUPaM4e637auqMrk8n4Ei4nVsYHkSemo5zbw3A5vPWx19XrhUHLLosN6d8B",
  "key5": "3LGAJhtmRqj4ZfsY4rQGLM71KM4PhC1yhYJ6iy9NUj8xebaLjD4CgE4W6jvobNewemRhU3n97Zyr8NLBGvJj9Jg9",
  "key6": "4FmYbqdxTTry7oaXheibho5PygUr5cpDqk4F8D8uwdoRJfPL7qncVpp9p3psXngmj3uftDEm7nSEXigXQQmFjeDX",
  "key7": "MEgGE3uwq42JrADqXiMEkeakmj33LzJqUY5pMeC7265VuG1LHZ7rPKDijk8sWk831uUxWmRrDGfQiiy3tcnccpr",
  "key8": "5kYgtECwfBKwtMAccFUNaqxKJFZZHnQJjD8iseULJyiJweK989uvGdx9ctmisiysWPxb6rfU5rYZdkMGmh4nLQDB",
  "key9": "LPp1PvsSnD8n7f5rzN8ouMbU4KVyfdxAQW4w9ecpeWxrbqmtCUc2FsS84xbmTJVMznQfCRw8A9XxfdEpCPGhzHu",
  "key10": "53cXupWbkzANoRB4QUPZT7zK6zw4WNayB5XAa84bWwojD5EuhrYSY7aa7miFAeRkxpwpZXoxTEM3weYdRHkbEmK3",
  "key11": "5WBYPrcZZs7KDYrxcgLgQhLEWep3nBmVUJzyDbFZDWezkpbBJzQziUTyicXEK1DRZhDgUwF5sQS8yA5kGqU6qGcN",
  "key12": "bMSq5Xv8S2T891Zjk1koXFaohyiv4xEYqYEm5gpQvGu9fucarnuGjwHS2bMMYtunzbP1ohb7Y14eTc2xYQ6RDzz",
  "key13": "5ANwpEAmzDBov9Gz1KuRgrEdhSsjRwjHUELyVaPgVVbLW8wcSWETuh6jxbV6Vb46zjgfeyE1sxXs2UCYfPqg5MFK",
  "key14": "2gu2TjFbb5wQLYJJupQG52UkCcELEi5NpkmfDJNMBpg9J6xBbcYamnEp1PiiaepXx2yYXytD2pzZmHSBLPMzxBH8",
  "key15": "4iiXAR6pNV1ADkVgz7E9JGqiK617bQ7AHBGoP6B4Uy1JaU6GQqTDmTXrShzfgXCtuFgt5J8T1ftT8qqvJe6HAU3V",
  "key16": "2aKSiUbtYnTjC5x1zkp9uxMSqfUoKUobyucXX6qR7LhAXZSEQjQonHvf6Wfwu8hDb9mzHVu8PtMRAE6wtSPPMZrD",
  "key17": "56E939HbiQwrYofMRtcfg3LLo7nNdiBeL9fc3ar1bdpL2pDwD8rejezfjrVPS4d9kCqJCtfFayaaHnKZgaJPE4r9",
  "key18": "5HGPoYHzHZRvsyBKHvUeuxLiZNsFjMnV9TaytqLfJjW7Ya9op6nt9BQC4oHLgUqCZQeMgTW7zcB4uSx1oB51Qkx7",
  "key19": "5MwHsx2Rnggk5FnChEcxMK1paqVSTnFgYMFiKS8FmU5UhgsPs4ZPy7k4koiADK1m1VeokJ5GoBvKq8rNRgB8kTPJ",
  "key20": "2GjcXHtXaZcmkKgkqKGetKYh2jvNh51wPA4sozUBgE2n1BC1NnDjzCoeohzvVfVXtz5QsuSmWnEU2epTULTzQS5k",
  "key21": "5RkWXnGzKDfQZrQ8X4NZ2yvcUSfW4BnSWHya3VTPj8xgyA9epyxq6p3uiEQcGXYZec4pGVPFEmpa3wx8TEHTyLJM",
  "key22": "4HdoiQxWQ4xjyyPCjSq7toSB2fynyV25yDcccSvzKPGdMhypw1uQQoe8dUZrbNtBHmf32K2Qc9wMqUzd94KxeuKj",
  "key23": "4jTEhcfNuNiwVieM32tXLuU32hm1NGXzomERtjt7VyRYstadCrPRPgUzDxaut9qNYRUgdTgoPL7q63gaPfUitj16",
  "key24": "2ZEUaeuH3qrtDQSii6A86yLkptcRmP6FTXZKEk2onam5togQhme1dF6aUUvMJ9mm2VDQKxkxJfHNi7gqGeHA9XhR",
  "key25": "5cfkxDyWWAanZLThfD6r5eEjYYB3VZJX7NHZcU6L9fLSaHfJCW13tFpVpBJDhFDnoxs6EZaDiiFgBAz32kpk9Y78",
  "key26": "4hn9DaLDgzP99yJRpTZhmeiSGz6h2G9ms4Bfx9mnsE1YqMskkE3NFcxmqFx7RhzeN9R1dRdDAa182xGP62VQifN6",
  "key27": "31BDBJc7gtvbkr3bntem2wbX7et7oG5KwTvUiEBzCXAfbSPB68dKmYxUX2dHUVkXsHeZXUeQWvKue7SNu7WWZUXf",
  "key28": "CpZsmRiKpkHXZ9dqm71vfxvVe5wD681pC6Tkwru5Ke5t3DfJiafwh2LDTeXJPtgxUkWR2DKzBiXxoYdV51nEM5j"
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
