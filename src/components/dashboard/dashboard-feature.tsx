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
    "2cgticyU943DNVVHmDxJVWv4j2nZRzrpscYAJLUAJcTkRhD7eVq4JHBFPL1Fo5e1PEbSKNRgb6ek7a5zffmqMF2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b2WHLkCUWr4vLfuwLfjTMe2xMiKdALufNwtRZMWRenbRPg562khxerk6SqnMfjUaqFawnHNSHgXe4uzNdA4X413",
  "key1": "3cMNn9hprq4NDaFtFfvY1m7C6XCz3LkysyQrgKsQHGy4J6SaaZFUvKgkUnwcbft2b2SG95cVr63UusZatGg21H2R",
  "key2": "XiMTD75J3cF8BRBkpiHGYzxpTzijGeTsXWRhoQw1vGPd57zCzB2QK3TQzvjfbFYUrG5t88CzbJwPGK2rkYNLWAH",
  "key3": "3aBp4jDsfXTD6pw4Zavh4RZ8QDJSZtihRLaG7iTHFcYwJmuVYYW2dVjn8XJkgwAnBSAjGgkbg5e52AqbcTW3DzyG",
  "key4": "5EWwCatA6PJzKHsEBsXFRwgWEMiNstKBhQnA7G6eJK4qtz4cmb2hgpRdeewxBCYQWfcp9UvcgZQXCRy8HEFwppba",
  "key5": "5mpCfLRYFSvVKKcTUFjGmH1q91j37HDFbojfNhpxdZiyCKkp4yqthLCEo8XDG38zv8NSZT5zNq8BmDobn4YUoxxc",
  "key6": "pNZhxMaon2pPprCzx7QAhKGNDJsZfVNpa5jRsLf9ssQ2MxtYqJjxNdtqaxvUnUeYvqkR4a2vKUnEcB5RANbAVah",
  "key7": "4L55HhHupoJQtNF5C68VQ9Y3gn1ryW27JQoBrxKYXJE4mTPLYgximLjYv5sgXnodoe6qn5iFuq1zJuyURK9yrN1c",
  "key8": "pt7WHnpHaPMJY5sppX211aPfYyuVEFzgKcSKSnT4U7oUPmaRh3T8NXgAsWUeiVPV5zAnX2yVY8b7KhCyUB8PUmn",
  "key9": "639SDG9Ft2H52NfWd8ZjAJL86V5KeNSoRHGw2n3KxKzhBwxJpCAsLYibV6GZajwBieKWzNJWiiTefAJA5AsdVpsp",
  "key10": "29HtJZGeDteUAqHqYgp436b8WvpmLQ3F8S7qNqCiKw52AWv2bWganBs5cwjF3CHLW4eNouPpaM6U3F7VTWppbUdL",
  "key11": "UnFnH7N3Ves2pe4YdVpV8h6hjcVFvFPW9QwGXKkmj5QpACJWYT27RMj9im4y5onMLGDGhCg7jU7EHjgU3cE3yrM",
  "key12": "3Zed4d7mZ8XmF4kfzPWYNMZQp1rmo728kzDLzL47mXygitmw7qLNUoxAw5sHJD9LTmEYG52iVw5FoNsaCYJjw9ve",
  "key13": "4PRHkDFiFQq3JM3JL9Mf8znZFwueGbEXgNFsN5GFMGiTxVq16BvyvHakxVxaZhpiGGvR75VtVGESm2bxWHZb5y6q",
  "key14": "EmsmekRZFZeeyoovkpadPqA39vydHTnTaH96ggjRRPGhk8dHbdEeCNWiV9XwqBiT22UnCAySYL611JLwpWkZe12",
  "key15": "25JuZHfRmu2JNUEoUGFH9c3k2ZQp22u46sA6qqm8zktQHV8Tr38S9psNLh2JH5FUy1ukVjQA3QpE6rjyvdvMUKJQ",
  "key16": "367uDigU5SxUnP4xv3oQ2VoYTodDc16znkT2eK2sF6F61eGEpatXU3SL2JeadCiZrEsG1Nr7dJhxDcTcY4imdtCZ",
  "key17": "5ZDRjSNyrDvjYdf1pVYrmuV9e6vuMZLD4rDg67qfXSDMQJvWdG6cngmUq2Lt5jxgeKw1UnEMhFc2n3zT2cSB5drb",
  "key18": "F1Thp4HQxMDmYDLnVZmmQKjTJJ8L2AFSBSQcq3KXF3LXrs8Gin8GuY3WHemq7kRrV1UNEL51wv2zLJY716qXuDx",
  "key19": "4PRdATi9zXvUmmnSJwLeNzrzmudwY4TFiPv9t94HqfMSveQU6wowEUfrmVy3ADB3ike1gE313D9fpS9wNX5mq5Vc",
  "key20": "5RikEGwvM3DBEioXHc1fBBvFCG8ZqfxXVagdo37ZzsqykbENTXbinR1H9zgorCRa9uXdp7uyCeuijNMiYZXfawgg",
  "key21": "BLVk22ig4c8pxsTuDc4ZfFmFtivUzst9rTNALMu8ECeJBVbHNfJaJYxnnCm1V6dYBfhWY3jgzq1EAaE1bpYUPya",
  "key22": "4bKf4e9GcHE65Tvz9ZLkLQQk1bNYv88CThTTtePnWBizCRuPqbyBp747yuQGMZktVe6fB7pnayyGZq1zFRj4wt92",
  "key23": "3Q2R3EYH6xt9ZNxinASymSSUnx5YdV7mzn8aoBX2QXqYSpJaZr5iMBJWvmkg1dyFf1D9nm4eCzhrvQW4QKLjQAtv",
  "key24": "4MTW1VWVqNXNhMi9vQvDJ3SReHp49Fq6ZLUcRhxK9FHLizikQ7dyB58bK37RdaEfsX3iFN4ZsAT8Qy8dUXHwgNSM",
  "key25": "6232ft1hgdVvRcUeVdiGQ5K3WfdkoxfPNjr8VzXyoixkF5NPBfrjRJcvr4VGoZmsTiTdtwZhDkEieEUDCMK8v5G1",
  "key26": "4FP8WhTuVC5t2YwDEWCsYpUfDRpZFymktYTXVTokymj2nm9DeGvnP9qkp9MHdCp3qVysW9RL7Njd23iyvANfpzsW",
  "key27": "5A3S8wyMfT8fo9JYXNrdpXrf5LQdkhvYr2rF7h8uiZieMMcahGUMW9uVftJ7sLuThjtYJZDCagWuPCxPWBgtWj1y",
  "key28": "46BDXVUX4JYpvqBt1kHExi7GKta4Ga27UY3syuzNiJBzZBXSaQM6KQfvRxPn8e2VwcbD5GnQLtZnGoQEGgwLvvR5",
  "key29": "3pi2xu3DAhoyPhcjcTPmXLgYxHNSQy3sggcqf6BpPnzq4yWTRtDZ2zUFxo8gfTCpTuvZNGk7t2sLdwAz86rZSfvL",
  "key30": "3Fc9tnAwMZinGvaRXkN4tgBwHMdQEsuVVEs2PaoXbihvZmps4gHbhrappx9b3KPyamjVrDnsynCZUUQb4i6nZj13",
  "key31": "2xfwnCptptX5AXLZjofj4sJMGs9d73DccDQzb8LY2EcmdH8abgtPddwkKssxXdySUYYnpMRLxPMzJ9gLDpj55Zyz",
  "key32": "mgmTyMCjhUnnGJhvjUehtLswY1jvpmdhvTVPfoXvRhkbg2LNmyQ3gQLrtufFRduWWEvdEsPQKv8y4Bv6xkyHx9H"
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
