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
    "5xjmgJCmM6mx2LUjcgdcG1hxwa2QJV4TgzYCsYmM6ksWjyGi7iBj4Ek4WFRPH8Gkkd1MnKGoqG6qYyRwdjTBxK9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XzrEWwbsYgS2xVJDBWKA55AcmQxnZtotmrisAkbBE1AcRBWCQ75HxwSfZpmeTLNkDn8SKtniN613CNNerp22xZa",
  "key1": "3hhsZs9xBoVdyrHbv3Pi5WXnzKH2GBztFkTw1brbpUKKw5ZfjM19NCTMHcS62c1v9VkYadQYU3DjpN9xFpf1tiZF",
  "key2": "5iGdLMgHyV6vbZXf2Gx9KEC1tpVcUTharWBffjC2rXLsQPGHVDX5g8qm8FsLqkBFoYhRQkbCV1RuRcNd7YqMFPVm",
  "key3": "2UNwzLHgLdc6uUTNPc2G38Ba7Fqzj8XtP6y9LY8SfjcMszGna2RiAoadhqjceFVP1nM9PgrWe3FLS92WaAu237r3",
  "key4": "47jYaVEQZ9KepU7eh37U4f9cuG1uMSM1HHSNBguvFeeRyeziC3Bv9FLebfn4jTjmHWGZhQx72Wbp2g2m6ZQ6TJab",
  "key5": "3u7aWM7g3T3ewpr6RtF4AUBT7GxZjv3dLF3KMFoY2d9Vkf2kLVFKx7ZjMyit6eeHFDpjyPMH3mDKYmGo9Phdb9Wp",
  "key6": "5HJYkzWHtMJcVYXSREDugKiuaCypVSZTxdJP6edyuDy5mnohqWDECEzCT8puDVxYKEcebXNVjsaZem1JoM3sqirE",
  "key7": "5sVGXb2HsT3UUXSASDo6b3L7k69XyoBjL4UaEikaHaSoHeYut81wPyeqM4iHhHjwNPwAFXS8oULhwEK1uKcP585E",
  "key8": "44TYAx6q5XDAPfEnU7UgdtD9qsfoJT2fLGsjrDnLgp6VJ1dWR851xFtk7GJubgCCJdV5PyKUK8DNaKsQY6teC2vH",
  "key9": "4hDF755fS8EHuS7jT3yiLvWTEGdrjAYB6b61DYsBB46K7H8mEWZKFUAKU7WB3qUHkLkngxtij3PXszCDw4MhcD2E",
  "key10": "5P9JohLGJZsB4LaayMjKK4BzbQFGTwhBJjPmE53aPPv3QJJtL7tMToMTmwrYYN4Zi5gEVCjo35DXj7gehPEATyAC",
  "key11": "5FoNfMTNxnTkouMkwcTqGw3pZjqTsvczfrgDbggTHaxDMe3DqXMYF4NYUzMSdAhKzfwqVMPBPziNQ1xYBnsxLQtk",
  "key12": "26VTt5JpRhMux3aR7NFUevFSyRYuRcoPcKJjbyC5FvXA3zHwpP2LTC5WGPSwCvTzvADY96twFSiv5RXySaieZ5BJ",
  "key13": "3dvcbzyEXQyz74KsAui4f3aBkJSzRjUgwzBdWgdLqkv9mEJs9uPXiWFeJ5VDaH93Ef4VCxV52oKCCH1gdyi4ZsVT",
  "key14": "5s16X82DnyyZf71wc9NgdXP1gMF8zLC3Ld8NtRz3bLspUL5eBBccqsM1eDf98TceyQsPGwiTWGoNvcYUZnnuDEFd",
  "key15": "3bKYdDYfdW8nHotFbwQHzHbZ8cguiZ2zB9yr9zGYko7VgDWdTfgEhNvgr9atx6aG6ePz4sUvRc1wQyZpACv1szpF",
  "key16": "4d6oAQ5fXx3rq29UsZsXPMRqfT4KLJcjG2FW2cHybusRxBrtyXUWHC3ecxdQSoWmk7RGGpWWM8TPsCJhRwyp8MpJ",
  "key17": "56dC1jNxgB3cEDYdqWVvqVh6ozYXoLUKbW5o8X2kAB8e9k3MguAdjJsXMRRwTHkseSbV1KL3DXbEJLtcJYdScMqh",
  "key18": "3Gn3HDkXrsqyUSxzfaQqjLEmJLqj5Dq9T2uMTSYjHbUNTXqX6xckzbTDeeBZCrEBGUHTApBzpndVCw48YyaVz3Q9",
  "key19": "5HPWujFLbQHBU9XqZBUdV7c5qpskH917mShyY7p5hbZmp78MmcBLoGs6RXPdFo6aMjLaVBTRs6EsLQBYZ6JRnmUc",
  "key20": "63yMXM6271b5NYPpvHScdYf3Ra1Eqo15U3XLbX4rWpYLRSQG8dJNuZtzKCdWQeCwSFdQ2zGKLVfN7Xv19LtAn9TR",
  "key21": "51kx9ksmgzj5TxfHx1qKv9H4ZUG68xyEKFqtvSmm9r4wXAz9KL9DQU1eJnhwDLR41Cinz8W4JnQLrZ69NGokGucr",
  "key22": "2qpeEk8ERMZzSJKwFGtieQxaa2yCdbBCP6EJ8iGPy9TWkuh8v5AMJGMkVEXL3rkTRpPwwewaexnbWNpo4z3L5ZxF",
  "key23": "2gbDfTTwpSMmfjTDaybPK8SuT1jDgF3VpGqRwtH9TfYAbmAGQ8tWHWBvHbCoCb9HmLAtL75Jt6jo9TS2jw3yyEM5",
  "key24": "3ngxU7dXwFLVaDRZFfGcDgEJxHmehW8JVa4Ys87fP3tdActfzEzXgjpCzyXWTbUGp8d7t2mibg4MTwn6JqSbrdYK",
  "key25": "3wpoDyseo3V1QqBWKoixwhFMB6crohASwYXg1rusfU2VwcXjuPCVrp1D8E9PigX89sCpHYLUMP4AWM4FuKsJ9dkp",
  "key26": "3mUrKxMdxJ1ChK17d5gQGHYniCNrBA1onRMYxAkHSnKiSTZnqhVQEDRinLJ5hA55YhgMetEpNDXA8rAm7uZ8kM65",
  "key27": "5SFWhfUwP8j8iurm4gnfm3mt4NxizLystC7QMmsQjJPT1rZEyc5NJbYKXhUbgsG8ZPMGBKPQofueR5uETGjM33wc",
  "key28": "ejwhTM6Wd7yoAR74BjQk4hyKxFfEPEtsJhe5LhGTxV7NH2Lv7BbptYdbmrgMHgL5ufLneJ3HEn7RyWsDGmDQnn3",
  "key29": "4njJJ8JufG8p1JXZehKCgH9L6rcSkkM6sHJfeNMuXqY3iryM36PzVzwwo2bnHST5Pg1B71uVjJMkuyLMzP14xExx",
  "key30": "Y87uLrkzKXKwFwHcU2rAHaNuSN9j4bNgRmyHXMx5E9hVZt9STMNKbftK4nNN2Cy4toVBejozMyfKiBSK21dmcKH",
  "key31": "4CBpCMkTVkGKSWtNiD3W574TSKuoX8kFy8EaPjPzWAppQoujyWAvtmVpqrBYTzSUkPyT2cLdRHdyAYWwLPtcduFj"
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
