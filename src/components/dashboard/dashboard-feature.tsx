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
    "4oyP3SDRRF6WpWNKdV8jMDovmUHK836E36XN9Ut43TV4JZY7VNv7kCXa5yVb4xQA7b1wRPRvLdiRj9ipFkaVMvfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QewxYTFGxftrbAqAteL8QrRNnHRjhNbkZtHc8cbFyzJXvjU8dTUWdZ4afGAHUP3RmEqe5i8nnmSM3W88NCYs2ZX",
  "key1": "25yJ3p34S2ASyDkuwt3py49CT5ZejRMst3FCh7Q16bmq2M1K2VF3ZE3hQQwaDvBo4Vsnt63mHTU5dHZBhM9MyqVT",
  "key2": "36V9yxhh3ffsraZ3iFNA8JhFyEgE6duBxfYdWouwfFkQ5CVi3epAZJxeiWzhCsFqVsqqJv4xWUw8wkPRDfhrdVph",
  "key3": "27o42KBBpwy6fG5r6hFiqKn87RiFdmuhzousjvyUagRKhwXGh6Gw7PFSHEXBrZYoH3M7icnMWneA44Yx1ZC7F4tF",
  "key4": "ZN2uhXyictDs1JgxQg2V3NgCEcJ89ryhPy2uxTypEbWQRfSJsGDMFEZHYttQCdqPpQHmFM1btv7MSbHmbx8UxJz",
  "key5": "3poDyMc9j1okDZZ4pkYM48MkZWgJpQXYxwXEgpWi32sxxNWLZazULzmuhMF2MEC6H3NUMZMSjHiMXTdJS3jAdUnw",
  "key6": "5jXrfDv6Pkq4j8GQRpTYknVDEjMBmCk6epSDcmTKxP9izb3q1kUhYQz3Yxv5hX4SVFqunQHcqXWCYqsFwCxX3Tcc",
  "key7": "3UnnC4ZSWiydrccyYEwnFb515PpCB8STxtuAE39NS4y1MvGSk2CvcZZcDHtBRPMKu8HYEByqjoYXRAXnKPfCqmuX",
  "key8": "2Cvety8qamKEcBRQy8WfPmWbKbyc3dc6uYfEAyQuqRyt5U9PCUNQaZdNDazuCEhjEjzzAdHcZz4L739RYWHLybob",
  "key9": "2dQXPF5B7yJH5qgqPiHKXMVnEb2p4SzcEuGsHperdJVsGY2ZC3Wh1f8ibgiipGgWKxnZSkKcAagLt6VUT8gePmUY",
  "key10": "66hjhTsZacoVWxTKbbPUYrRBH28omKX7C9KGeBMzxGAw4WxaU2mxy6dasvMJrPLmSSJ3kf5tDh6mUJiFoE1uhgxc",
  "key11": "29fkaWFqDuiVYaTtgoGVLbCDqBNMJvn8bcSfhonHnuhkduVe9PmdNKb4q7QRFWHNPMpESRKf4Gvw6dd6J5N9qoPU",
  "key12": "4UBNwdqvCDFiqrqagNYBp7UGSxz1X6v5XkGHqrXUo5daTZ6yxer6Vu3fXrZLAtA2Ni3CxPSmXmGFb8osLZc6iFmN",
  "key13": "5XN652qLBzsxHZFhB1LzYEECguFzDfp73xnzzirez56D8zf8LhUH4J1PH16p6Vhs9K5cAESBfG3NsnxNY4Koz5Ct",
  "key14": "LRoc2XU6uSm3jaiYABkbXxWzn8YF8qMFFehTV68yPnpZwtmWGwszHRcvb3mWRYVV5dyADNydkgBFR2u28VtGJYH",
  "key15": "4YmaSAqSanqR3B5GWmGqL4bECb6vSeJgi8jQ6SjEDX2ur8dxoiioMg4saeV3GBVhvThhfiP1VzBxKtryTdPi5BXw",
  "key16": "51DpDyTF4gGsDRxksHnBsLvZy22Jq9EWG5BgvSmDwyGtKYfUfRGKqtEfGtknpw1HqeV2o8fEJCb3zSpXd1PGDTF4",
  "key17": "4k7vDQHELmkoBfWzvV4rgPcAjtJiitvJ66uP3DEXMgYqyfQpBmMVXVWTbxckncAfqqE9aCm69FbuPULJeSEozcFt",
  "key18": "67o67P8cHiKx2BoeZ65tZRJXu1eBLk1Ka2RZewH2HJVhy8D5qd4q3nxfgKgSjxAzp3N9BP9jisKZf4jFi8LwW9Ym",
  "key19": "3PvrjmVx15X1MwAsVg8YyWgji8CUrT5buxW25nbc9VtqzDeT9bYj3WsE3UY4wxsrhDjV4s83XvY93qfgX2cyvjb1",
  "key20": "2x2cjq347fW7TLtZXqT1kfjoDitcVMZiYY5hniyzeTBB25GZSGj9zaZwoWFtVfNUAaXz3FKmXX6NyjnkDfjGY8Hw",
  "key21": "2UzooDuztbdSRm7Z2cvotQTCJN2iBGeLohgCzxMwTn52sjfmmZgsd9dEiTdvdCZndqqi7HGPXGbkP5q31YoRUM6D",
  "key22": "2akXjZgWYekUCPkU8DFAGPWp5qjCAziQbuoezkJwjjQSdvib7onEULMSkYB5GF11YGcUJ7t5REwPKCMy2H69yY5u",
  "key23": "569vYsYKts8DCKrgfrJNZwkaoaz577txBWjjYeuCYD4zHj7esCse1F1m2NpHLpoWgV1PF5vh6vL6DBLgru5QkZsj",
  "key24": "4yM9YcFfWdriXVMRagbxuGD8EpSvLYcVvBSaMiruCZmnYNAySG5X7av1MewgscdcsCXx1zg6mPVnx8ixJv27qu5A",
  "key25": "1e7CMaMEdiZ3fvQvqL8tKLjxWREbymdPHHHULUe95sqp3uk4BCziKPZt5v4DDvrzGfjFShkb8DAhBrMCPfToeHk",
  "key26": "59s5uZaCYuTk3DTmJjDeCs4gLPxbLREdxGyaqxJyEJue4L1K2LnXpYY5vproGALDzajkppt2AKTxxtvyV6ZDpKJd",
  "key27": "4ic18YdsX731p3XwxuHgLarfqKnA2h7Gydmg2a3MmVxRZQQLNzdtQP9bg8LtSGhfR15fYBsk9Avaj5gV11VuZb97",
  "key28": "5S3NjmHPPnyfe1nS5svPYyzi5ortTepM1NQvHBABzVkD2tnZSiih9FcJ9rAZo4EYorST6cnff7rUxzYDuycZJvDh",
  "key29": "437KwrdSAWYtdyvyFnvb6xKgrE7L16Qu6mzCzGGYMRiLTk2ZtRpzSnHU3LPu81RUSzrvKjaRn97T7qqc1EpMT73T",
  "key30": "5rtVY7Wam74ThASCvHvSf6AEEgSkKQzBqtxNVaPdtQyUdzvNojg8vMq7urV7zottehNMhuR8xGWtDU8uDHkgBAYr",
  "key31": "3zKKs5Y22bH32UKmjpwmhHwKyC5gqiyXFM76k65sEJSXE5Cx1jLL3jRCeeS8JASXLLhXhuaHAhd1u8orfn7yqcqu",
  "key32": "thA4C1t86S4UNrc6AgJaKP6pm8AmqCiMt9J6Bba4ezm5hDURG8N7GKNg1WmWqLUjE4egR6YAoUXk9iss9w35N2E",
  "key33": "4ZJJkcEqR6ojWdFXo9oTroErHa3sq9cefkYZkarYwdaYHAEsLDBKXDw5T6XfUMPrEmvB1uYFrE2g96pNeW99nfz8",
  "key34": "2owsAMgJ3a47S8MgpoBJtthwbgFoevEGXtUUngquLmhGvc6bqdwZuZES4CPgCpf1tUhcQoZhmwReHoDHpV2dfepu",
  "key35": "44yuAZkRoeQH3QzvRuX5jENTiWbUws3rnRBc51fSLZShTJpJ2RCx6gvVptnF69jgf4hNKzovGEfMP3mbahCPd7b8",
  "key36": "5WkPDCmaaLwfPXCVybAgRKXZQPuPigUPzp3i4Qm5F6p4Hkt3CKMBp8BeyAgakBxKMMi7jfUPQwKisYXEfKL4XXwt",
  "key37": "5QZWarjJsZkwVBMxEJWkiWx6Cw28cS2caBCfbQNnp4t4F3biCy9npgUQ4btZDApd9R36jfrrGR3navF6qc2Grbje",
  "key38": "4AdGr5ECSELiitFyNQ7rGH1fnWy9H8h6khWYMVfqnM2UEbhDx1STKeCLCb84NHTrmm9qDfjToMyf77h6y7SP9Jwc",
  "key39": "2wcczc4yT4kkHdNkvWvtL6ZDWjaYvQQWuCPJNysJ4sybQoMRgErHf2F4LBLK4btyEvs68rw6LQemHHK3iBTvdFGn",
  "key40": "5vGzAFxs8K8Lox7Mw5GgH7GPCzZzujvg3dsj4dNfe5c2KcsRpJdNfPBCsTSk6RuSDzPPpLjev3Qxt51dWESHfooY",
  "key41": "4t6xqhEGWBhtnAZWDy3kX8rq8aAKUWaALkCQy9C93xa7vqiojK4F932Hc1PrtzjiUdi5kiF3WPbo2qv9tNhM2mDt",
  "key42": "bBUKsMGqGNL41XA7hgtEDRPbXf48buqaxcyCgQQcnx4abGxbW7ggPayikETzziNvD5UXGkHUQ411YKHrWZvEeuP",
  "key43": "3iTkb9Zct8ymjk9HwyFQwwg7CqGkTYQbjG2h4hVq2jVkEEjS8UWGFK8KV6UKM9nrxxNE7VKyjQryjH34bfygrD3Z"
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
