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
    "5EQHHP7GAoJDQGrEjZkP9Q7QpWkMgdG7nNTCrVPvocdaRBH9xqYskiCC3kPmQ4seRu55P8Y3ZATdjjs16a1h4Nc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JbmR3g1YJ67bQk7wjRiSsGfKCigdr1PbEEZS6rB9yfykCfzvXd8tFqsLUC4hHUZH1XKpTY3VddM21BKKCxTARU1",
  "key1": "43GMfaH5YoEN3WXQLBMQotGWSGekKuUYD41Qmqid4S324ZtoGbczHcvFnqeE1RksHvSxVtaEVEfRi8hqZkzu5Unn",
  "key2": "33nX66rt92yE9j7MYUz1u9bNvthaadN9sBTf4tGdCQJyzYTsnW3umz1uN7zXNJHGqEzdyYQA8z8xz7PfN1UeD4GC",
  "key3": "4uUVyPxdy7My4QGUPEXFqejcz5r4Xk5NdJb25qfXn8YiUoCwWM3FZ64dH2FnS8eA6eXhHw1Np1WVpA2gARaAQEJQ",
  "key4": "4Z6KFGWf5ojmHvLDEbgvEixsbD4yzs3P3qPekBsyHZiPgmnpUiWKMMbFMcPMhfmK5pQPBGWaBUHr3cxZ9uzY7ojK",
  "key5": "3RKDzmHmcFbcP1y9FjHtQuivWKBNAPrMzajEeg5H1ft9VU5Q9r9fGS4bSamCfLbhj9yDLxkYH59BjSTaH3ww2jaH",
  "key6": "2AHPVaka2c3xKtXS7rvZMPvQgyN1TbJNLDY6bhhFz9svVconJp6To1RfiWNRLvHWcFZV9KFEXakGhChK8ySroy9K",
  "key7": "2BFwtc7YHsT5Vf5cKtZSVoxCHAXq4SzNCZxiB2ZLhqxXrGKGposzPNpUThu9HCeZa9PSp7XuEjfXtZ9RnyPhXUd5",
  "key8": "5VWwB8mnXQaAgYwEzjaHb5nN8pQiHd2EYJji1a8S2rBS9uP9Hm1B98TAcoiAzMQtzvsz1jZB5GmsDJKR7SzDK7GE",
  "key9": "4bnhk1oVydVsKykaAaCR4VNXsTeWq3ex8nHAznNmLaCWTMp4xWru5vq5bmuAA2BdnYA7DeGnee3hvV7xY7RBMS91",
  "key10": "2KBxbNNdTJY35ECUVocV3FkScofZgJqbJiuTJ6qyM7SGbND1iNiPyenFgULUWrPjutXpqYrQTb5KVNEad7mkQ4yV",
  "key11": "4BwBiDeUDfgdMztAMRZgBQmHeVTZJcFMxorw2S8sHYLUTGDYmjxDqAhEpAiDVHPHjTBbSr5g4mMWrrDZgi5gZkk6",
  "key12": "4C4DkPf8nk4tQ4rwsUQi3AJeUaimtRcQfNWvSUFuyrn9MPRRkeXxNVYU9CKKxFFpWBDn4Gg4pChn2L2NG3cgcrMr",
  "key13": "3yv6nmcKacksJWN1WLZZv1d7JQKN2pUveEqinoBX49mNsGS9tdLtreZyU13naidFjmxESa7C8mwzCL7EF7u32HEv",
  "key14": "yDzAPQc7pQiUkqn8qRJyhpkGok8dHTgowmyqbgT8ZV4XDPdCmMdoG9eEziH2GBytDKwPZPzYp1G9mZGS2kiBgbg",
  "key15": "HmK9Ti5qS4FG6RzppHn7fNMNAjLKow7DoQFUtJtk5E6xWqxioFfRuZDnbLz32MzcwV9YBqFDJJRzfDqVVoEv3Pd",
  "key16": "5h1iQGyxiUNEyS3ZXDCjbVr9Fp17FGr1N5yFPmwugcWwmJQtCxrS57fvnH9ztHSkdvZPkXPm2iGtpCBd3G2cp1gS",
  "key17": "5caF1CGEUkTz8PA54rzR9bg66gMFuc1d4nTa6cVCZq219RZbuQs4P4NyDBsrrKx8AXvpPe3UMsUshGtTezs2mGV9",
  "key18": "2ZciKfuYW3tzbAj7bH9hXcECKBVfdLLFHiovnUXFXTxbg2GhJwgYysuSF7QvQn4qDc8dxgS76SECE4uWYoD3ne1U",
  "key19": "5CJ3R5YQAyNb49YiMdjzSYvRkpX1TDp3GviW7sjimFqq8GestJAMNptXsvRhCyuqzkDNDizpjx9L4oTha7L3teg9",
  "key20": "55sbFbjFQVxk463gQG3kJMTMvkWgF3z7MCXBstuNWtZFiwrAzVU9fG1poCR9xJaGgB2dgejm3aoFqxGDvPGXvvoU",
  "key21": "2TqS5s7jZc5ggiXf6gnbbmky3t3gjVTTmPEysgGVJqRJXqFY91HEvC3xZXWUG1t9xLjaM45eMUjWGnDevTeiVHb8",
  "key22": "CNYb6vitt9wt4TfqtpYM93RE8NSfVJaYfJjEcPGwtQPCmb1CeG4x6V4rvUN4tD1gU2EBoQiF7mu68S6Kr7gWHQR",
  "key23": "qrF3R79VkZNvmNzhWXgeoAQF6gdCBAE3tpdSXFJ5X9n2G3LKmfQsCLcC13gKi1Z87t9nKfN47cmdJL8tUr9qBy2",
  "key24": "aDMsubFoDu22RJvVTwSEZvuiTsYEke2xrLVGJD7UWZNKsXNXtEkLUtvt8Q9cN3ovk4A1x26NrTjx4nCcAoJix5z",
  "key25": "4wqCTow6yyr8NfycAm5tLUvJhksL9YjhPEA4ZJFCHmL4APZmeaxWkipxsh1PFfUPjzKQszbjuKCNi7V6eWt2df4",
  "key26": "M4uEu5kM4RwDuohtVD9X9nd1h2FSWLgp891UNhDmFEFR4qyP13YhpAU3byUEwqW3K5jFBtcffN1WBuL9oaPP2ju",
  "key27": "2NDs6eqWodZwE5eHttDLTeLKmdQ3wARTXb9qsCUy6XcubvkezBL5Xmeuws9H4fnFB88T9oNAK9GruVZQoXMZ4HrC",
  "key28": "21buxrnMR1xyfT5qUi7q3iB1d6pPADM1ESRYcTNgBR7ZXRw6gjdFL1qCeHYKzp24dsxzGUkPu2EGkjrTR4bwqB5F",
  "key29": "3qmTKscu9oWyXW62gpH7KwgCGLQo7ac5UX3HiYYhBB3W49mP1x8F2LC8XkZPrcxKwZQ8pKq6khXT9536D1BzEZC3",
  "key30": "4mTStyU4Hi19Nnu2uaGDgGJUjDtXZjmJDZdGo493NNoGwk29fPHUNoyu7WX5hNGJVAuNfn1StvFASPyePvk9ifAg",
  "key31": "2G96K3wALAj7fNEVBM5HxdZKM9R6hqdHGdFhUw3f1s9DcJ4kifTLmzToU4q7BBejvsoqeBdWYnKoy1Co6SAUQKHY",
  "key32": "3WhdBDZKjV6KHji7eoEMBF1JrhC2NX1eesCxw9UvyLEHRPtr6WrBcScm4bhurgoaXHCnR9uXg9npWC94WfnmggU1",
  "key33": "4GL77Jpw2uktZF8pJuVJvhJ6NypAjhbXfPDV9pWKEERYkjnkzyaFLMEqRUWHZmtvhywJGQcveGZqP6LtKSy9QSr5"
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
