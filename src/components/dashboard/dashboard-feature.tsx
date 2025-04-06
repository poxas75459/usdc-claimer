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
    "4bSP7FmbYeFjZ7BU3iQR1UYAxkxrJyi9FS4z3irt43Brf1S8TTM3EXXUkGCB4JtYVjKbLW6pC7XDphKyHVp9KpqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R6wnYEvFgpZ67gkbf5tDUVeuKQHfqWwGLjx52U2koRsT9B8vvCdRwEeKjmzNUes3wLq1HjLAGo1jfhXNd9gfeFD",
  "key1": "3AzmCiJYLuG3szxqpjth7NZMTSRNDvyC2FK6utEupa5EA4JNvKK7ckzR3QYVc4uRkxRqwUkf8ySdfRR4FtUs9Cc6",
  "key2": "5KtTjJUJ2DReKF31qteYsVtqtPA5g69imLmRipz6LinK6xD5jUQV6fcpUz6ddMDnotaLeQvzJTopVe6dEskvchJV",
  "key3": "4F1PehekJF4saz4tZJxSJEpdEzRYHucf5Awo6w72cp3yhQwMudbeTf56vYeRKDeRtm5z8t1jDHLgFQmHkcGt4WbN",
  "key4": "2JtVpgZ9x8KfkWUAMthG2nUAESHnP7w9drDg6znEp2GNCBgXeUo1XQJzJj7vGPKxZTefB3vsycYTWKEXiM8oCu1g",
  "key5": "52ZFSfTxbyEUEeWDFjJJBEm2ubzhc6u3tsKvTEhFEdLvxLW5nph6zBDGsdvaKVPshHJQfzSgkuFeL8SXjw9vUHUg",
  "key6": "2Kk7JGzaVo1RF3hKf6wfYVuaJEAUCfaxgPTtHiCSgX4sz75NriG17MzRwsUbtKvVTf89ohcEjKfR46wEpqA3QbcN",
  "key7": "3NHeSq2KLJBHGv49EkrAXVMBves2UDQ6PUsB61sKzmgY2Fz5N489EJHSaiNxzx2q8fCiLgEdcdgEwzV6uQGT62qi",
  "key8": "5q9tP4oGSVQ6p6MtKhZH2CGcYeUEEarKSNpgw9x9k3waMyRv4Cfiqq4TUVrxN7EcP6Zh9rxCPkCz8yLLy5fLayVU",
  "key9": "4CXazWjHBquRNQBx6Yu74SA8bbWR7c4cfnTgBasZmvBpQp7EseowgmX1W67E2adf6FsxmAYwcjGofREXtdHvCgnN",
  "key10": "2UZYrtkjZgbmCJXAPfJLDUq1mVPnAGm3H6teDs6F1KHwyqb8yQ3YNGoETT5ibKPGso6EKevKrg5gAhfUPacsuVDW",
  "key11": "46bQ4uEMumBXQesNJ64po4YXyE2LwfvLBrq4HZSksoJsYnyJWoxo3uYu366N7AtkTuggZ5sn8ptS7vUCsWUZdd3",
  "key12": "4JV9EjqNcD9YHNRVNwKkzc3M7xwPjG5KtVGX5PecUQJj7aTStCUtdwijYw9SjfSSJe1rup8BksJLypvGAsTgh5te",
  "key13": "328vzcYyJckuVA4J45BwWD8NYg7X9u2wmJNDRr6cXydK2ktDpVmNqqvD3AXSVueY8RA3TnUFkyjVQUHXmoiCWwCW",
  "key14": "5ATSsCfq6fAjRfv43JCY6zALoqxK9R2B8sArhg52A6qD1B3a2118X6Y7VAwNorpTm3mRdrGUFXc6SgcFfoSUGJ8n",
  "key15": "61vuMvYdg2HEbzhxfxGbLCBFCpZC8stue7SgvkZyKr22b3D7YgJcm3NjKRyJzE927y91RLcdyirMcxzd3kKmPo4H",
  "key16": "5c7oAt7423nGmW1CwXJHj2y9HsGnXpU2Hg6UEeyEkRxBzNdzJC6xMJmcLQKCrRwSgLhm1T7eqZ56L8yPsKENhRfc",
  "key17": "2i9tXJxuTXqKcNZCbdJzBeos9rXg4rz83LTPgVYjQ5whzLkt9KjrSU2GtwKhEarU1emdF2EvsjHw62ULP2yH6UaG",
  "key18": "3eJPjQBUZDgywh3GYptMzyoqiaUsBV5HmCpHfgcuxf6vUwzoyWZYDqyqYDXRDjTzFFgMsKb2WrDUuZYV6akD62oW",
  "key19": "32kKcQasymAGvjf5hSm9Cvo4hA4dGsH3ZTkz841GaF1VuLDn1dkztJeTibSEVzFh8YMLNNZB19d2SF2hn1krXKEV",
  "key20": "39QTLanJvNvE7mj5e5xPzXicqvfCSeZVbA54XATjB9fbEbG9vYphQ4FjrK2wJNkN7Qzy1dgvehmWV5zR74LT7vtP",
  "key21": "4roHTMkCT3eDwa8BArd2QoFewybUZXs8oYfBVFZWd7r2smArQU86reo3WFcW4d8kfPHs4dqkqnCcaQGbfHANsvq6",
  "key22": "5Yroer7XYcAHZj3Y6CF1EdUt4ZtK2bpmLYpzDyHCR2vkeBJi39uWQuPh3LUV99PZdFaG9bPBWDhuTgxjy7KPG63i",
  "key23": "5TQgEDcWxZpaq1s8QYaoQ8e2R44cWwYj3oksK4a5x6g1bvY6HmQHYjwDi435Be1xvQXpAQvxEFX4HtNzw5ydXJNx",
  "key24": "2YkLN9hFfQQPRu5vJuL4c1WTeWAkHjck1xtbfk3JmF2F3frmcBWKwjqR248ESwPhrTHdcixybzGAURiaQcKMDuxA",
  "key25": "5x5ohNZccFYy5qaaw2UfjE9Uu1CmNwDwE4UNaomi8N7MJp6RZkwLbcfEjjygXxwEBaRMimHwcNNvvkvGo7LmVUvQ",
  "key26": "2HsLGUkRQAbsTSfBicdzbkZr848HzWZDFFSqVznBZDRkTgghdRtbNL4FtihQ1xM8q5hUD26cKt3VppJ2BovZ53Mn"
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
