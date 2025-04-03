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
    "4g6ExNqEZcRmdLXbHy2DPdL6q1YCgD1WVhjDZUdrEfKjhc2AhvvaSxrWoX3FWqsMnqPDdeUZpvjNcMrNdqF8feDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EvGgjpaCvX5bgiSC4cbeTv8fhUhyaRSYMFjFiXdVxcUSS7zkYE4Ybw4oN6JDUY5iyJnnX89DLtQZpPth6N6WWuz",
  "key1": "5gUrfWpqwjdLbhGYMShxSTzkR6w57iUDUzNFGuYEwonvQa3QzZjipauYWRmNdfaJUVGvb9YDQf3ZJyvh5cfmBehB",
  "key2": "8ZyRhApM6NcLX33adbwfNJf8GexmK8VvAQ8FwLQ8YeQQthNmhtS8Gaf31RXE2tVzpVvtmWk4fhbHHRWhiM96oJ8",
  "key3": "3AzfToAXZ7U8n2Q3ejGvUfPSjqHckbnZpdApibH4YVYZ9CFnZrLbszK8U9mbrzpzbhN1mV9F9syi4hsozafqUei5",
  "key4": "5UKM3W6HZVsVJvw1kGB1Jj4ErYjefUotc4gUgmqjB8yKtpgEumxLbggSETyMfPLPtAPHk7V234fJ6aAj9Tzoey7T",
  "key5": "3UyDFzA4dnA8JKCEu79Y6MuSqb7Gg33ETGZmNLv9hdry5c1uxirtiLG6kqm8QVK6z9Y7Dd8fdTd7pVtRhcHFNpWW",
  "key6": "66tgtUHx8g8bTXUgFiBRLD7f6SF4BhtY9k1iDV47DiAoW9RVhEvccpe56vPMMCJjRBSMakbG8dPxMCM6U6w5CrUv",
  "key7": "5nzu7h9vPSHZMMxeQHNnmuADAxdHPAqYouKVERnqJ9Xuf7TwaojaHvEGB2Xh23fALeg7rZw4eyxBjSLYFJv6D2ie",
  "key8": "5No8p1DfUmuZ4u9u3bLAyCUhHDQCnPAiLYvazTbrYDacnCMkC8oejxV7fYBnEF2B4sLNTqTqVe7NCKZLb9jB4swT",
  "key9": "5fRFmLSp75h7R82iQshdstq2JDNYCCLT9E9pZkQ4Bk1fHJ8PRJ6CNVqMt6ix9bnu2r8Ubs2etr7Roq68MXwrffkE",
  "key10": "3TwQfrmBqBM9z9AaKoiyrXSiWPCmADZRxYo3mheAqX4N3KPQP3y6gMUK4NbwxUvZz8KMAAdYErdfmtxfSgF3n6w1",
  "key11": "4VkUh9oy5AB28gG4nJUD54RHyLHci2K5Uoq6cx2ikakaRPCLjh45ipwRSnsFhBtLnYdrakCLJa3e9udMURBWgA4M",
  "key12": "joAyVuogYAZisjYojM31XLJWo8Uj7ZCdCjDSvhziFe24FAcdAnJzXUtV4dCiqyztUJfzRmfZEPTsdYtpX8qVMmT",
  "key13": "T3ftKic8PkdXYD5skfbubZAeSvrrTbEARz5EJ4c1GMppoF4BRH6h11UDKkXuPU3FZXrtczgEWeUxRDFJYKXCcfa",
  "key14": "3xdLzBjQhvxordTmprw7nq3HJ4CAw5zNswZ8Lv77WChLZeNUz6tKBoWBPukfRowCczCTnedy36VcnE6nEbJ26eJw",
  "key15": "5UM5XQBNhSYmg51UgLQENjFRssj4uhWMsW8rBVMPs6fjXDzJBANchfXAU9qQkPnQf6FQNP8AYtLFC1gdqet3V6Kb",
  "key16": "4MMTiEsjNiqcc8cGh66AapavRCyGXHBRVNkFr51DHtParYPZfrWnaZoTq7QXcvLpqJVAvTHfrKRC6zL7HqgfCZGV",
  "key17": "2qxfd3TceiGfNDFkmwXn8RjTfPYMKYdsgD28VLwAL41KB6wdwA5jrF7UYJZs3xqLkf82ucpJUpWvv8jggibijRmq",
  "key18": "5hF9CW32fguw32PwerD7ifGMdThcZQ2LqUfwY67WbbJcv7vBFS8U6ENnc1mGUrxXrV9PBMzqEqjD3Jemi2aeKU3s",
  "key19": "33kHrTYjWv6EtPPw7cDN7SUFQQ5N8NkvenRWgnE646BgVrEw7oRkd5UfgXTEfqsJLrzzoiDVUh5U7vQs3Kv7eF6Q",
  "key20": "3BaRE38c6FAw5rqvewKBT6yp7HaGe8kuTJfuaSLqQPwYAyQAakREuRWxYu8Lx38LWZ9ArzUtijQm1J3FeqbrGBBE",
  "key21": "62SWcp9w9DX7xyEwSm6VFM9caRD6eHnFYnxtxbNCgbckwYBiXtnYnsRQQn9mEy2dodHXS11cgLoJseyAj1HYkXHc",
  "key22": "2WjJjU6nav5vw9CjV7QTrP7nVECHjMA6DA4EUU7pWU7M7w1atLhkE7DCgLnqBs4JGpvZHZiWrvMJjmHHFGhGfyuq",
  "key23": "zEE5gZMbHFqP2LBG1X7tCEsmiK5y5kjGHQSFVstUJgcqGeKQqfNPdyDXMhtD1brkc35MuqFjNrvNCHZRB5Te3BR",
  "key24": "4D43fBXzStd2y6y372y8uQRLgJBUgCNoh5UVwqFN6aPxSyWBmCeXMnxsVq9zuYaQzsTsD8XuqmAwLZpzrWEfPtfk",
  "key25": "28ozQD8Ajx7RXmbBFKJfw1GNDNzsqDiWGZKtSBqL4H4DJnSTiYpXd6JVfwYKBTtvQUyyGmCJuShNpXo1d2RhodFr",
  "key26": "4SY9y9vdVd2Ft77efWGYCtKVnnXatMJJFbRPqMcAiPrmLiNz2CgZTMVhFbPB77Ki4fFK8htxuyN3jjD86JYj2YPk",
  "key27": "4g8WjYATYP39dm1GxaZdW9fWLGkASsEzRGYTu5SuZmfbkhsJWWZKyhbu7tErgM6N8P4Qco39up5jFL8UfK1ysM7D"
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
