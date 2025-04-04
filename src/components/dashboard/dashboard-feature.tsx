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
    "4G3a9WuLBcugAosnB9ZZErF192r7MrAZMK5Ge8xWNhfBePR8mT6AMQJbT67p66v7RTgfk1cwMQJwSAZkNjKWFV8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rqXN9TiSLGGmWWW74UEWbBWNFZ8MhNbxU6r8K1eNcJruLRjGySTXQy5Cy9FNLgQm5Bi6SbsanU8dZgWCUjZBXux",
  "key1": "gQw3uqSujzvEvagzko3x77GJhCVmoEMRYPXQB9fWnLM4g4K9hoXdeZQgqaiScycGEdEcjWBo1WnUEw2gohevFGV",
  "key2": "39HXPf54PcwLTXREVeEstQWbwQWHzG2LeQJYLqDExzGyoSmNc24eVHVkEwRFjVojBLo5iVrHBPEwJrtjix3NxaZC",
  "key3": "3d1fJpehDZ6jhSd2WrQBRrhX8QMnBrbZZWnnkC6jc278EAh1Sqp88EDc5Xf43incxkP3sYaJRo2xpEAehG4xpfZr",
  "key4": "4LDeN6uUtxrWvMuj8C8sbBstXVNQWDJTeGokK1WYMQipqujRrH34cWSc5kUZZBGieMFp9oPSStgwSwQ1vZ8i9G3Z",
  "key5": "4q4DZ4J53wxnCtZYmFDV6TFtxDt5BsesLh4imLrBmmGBRcQSezidWXBefg2WnL1B5xtWkzTAvUGLBGNVhYbknJvG",
  "key6": "4k2xjWV6wiriaxg4r96vHvxvZxjVV2Ttk9pmnypTDchJd95fzKcco8NjMHHXfDzjFiJ4PhwjqQWTphbtJTn5pA2h",
  "key7": "2TJi3uCpivXAwW3qTmqxLruU6VjQxBCorY6fMNHv7wRYs6naNh7PHaBJVMe4HNF2CJPt5GvpgpnxxhWXwqBzFsY9",
  "key8": "27GjQGb6cYGqffLcxvb1bi6T5QcDNKdWqSVVX7SjgDRQ2t9a91TN9oUXr5XZeua52yfguGYSfQc5LETQdZyzYxmp",
  "key9": "3gBCyXJXrMdADTPAhZxzXXbs4jpHYfiHEDqrVQ76jhDCgF9nECW1P9m74WdBDM9B5xdeWB7u287bg1VqaDeNxyZy",
  "key10": "5zcD3vdhoKvNBXR27JuuBRxyVrcbsgBZmjPwGuoPezxBBSLN3rBfE61Lq4As68K7h1QxoQQvLphUmaEzs2UuhAHw",
  "key11": "2hNW2VwxbRBkgqfgphryeN4JWVcre39SMy52noEyH2obSANQ9pKVnqXXCtGFeQV3f3etcSZkk1f8YdECAiu64FW6",
  "key12": "5aaQC9KbiD9uNuzUV13C6v8x3XviB8MbGXPaPfmpFzgJnzDY7t9ojFMcuhFdDNxozGFJat9DwQndmkxyyuoXyAL9",
  "key13": "3uems6gz1n21p2xtgpnqT9QtTSpCHncSUF7x9xsHPhH1gtfYpWwKkSZRN154Y7QNeSJZW2gAxbGUNXLWUsoNfJkP",
  "key14": "323k6t3YxbyiZDUW5ue4jwzUZevLmLJwQ551dRAwjs82ni3whdFuKDVbRQhx8YNpDGwFkXV57yswayMJMn37pPo8",
  "key15": "2B89s1JbwS1b89mMg8t8KMiGLuXF3yTV1jEvtUij37bt3oDsFW8hYWeEsS8joCJssUJRFoe2gKhzGsgpYevkma4o",
  "key16": "L1vQUmVP4synBdnKopJYAZwxNLKpreFfNBYYJHA1aN9cEcefQVsrTwjbMwGoKbXUbyBsPSCqYq4ftSSyaCDF2gN",
  "key17": "4GiCyebGDxiUVcsP6LMrMuGcgZuowznS4pckKrG6eNMAzU87gm1y8dL4s5rSPWR5jXGSujPoaUkx8pt98VkSuHp3",
  "key18": "2JL3vkQSzTD4NrXFn4W3hFdXvkNUFNWCYrWV2diE9t9DcfjEZHbxa9hgnYzenAPf3g63F9bHndJ1MxEDXr6CiqaA",
  "key19": "6wqUqLS6LozEkAo4fe4mbdjf796UyAWJMLskGQMTfS45wPFt5qMxTH3Lu4wJutNkZHY49sg5Vk7m1eoQEfZf5Da",
  "key20": "5tV8pTTUxtA1Yb13nXJm87SVmXzsSzzN87tESaamDJSQ6eA3UJCSZxZEQsZHrQKXgRgyK1m6YvWWnjnGfD1Zhs3q",
  "key21": "LziyN9opkLwVDyumsBoshoLBinPGC9vDevsBnHkv3REMiU3eeQ6MdFZbW8BEi8CWjg4Qc9aSjynnnFu1qqhJTW4",
  "key22": "3sdG6ZbSYoDVUJ5XT8sy1RvPRTy2zz2h6kdeg8sANE5WTkxHr51TBhns8yQB8jnyhwdQ6S79rJe2Gr9cNhrqwR2r",
  "key23": "2MPNcCe8wDjwtnazLQE8qxi25ghe5WSfrLRqSnE88uubNWMbmFZd5JXeva52BQ3GgSDopGzx716KTPQtMYRi2xhT",
  "key24": "4QkweaRUYgm8hoJsP55Jz7cyZ1chebXbM4fFFxy2gQtSUaboc3hm1HsrzVqap6Ty3B9zrbEmoPBszDNuj5tzzZzq",
  "key25": "2bZpSsFUsZdFmKJExYfjY94y2dbn6PoifMYtcfGH8LbkbEC9x1QJjWcyu5fhAPFBZiomLTTYrqZSro7MriQ4yP4R",
  "key26": "3c9Be6UDZo6yD7J2zydtPe71Y7DbpqNejkLzNUKdYTp7fvz3vWuXaRGRJsSWfVzzuiY1zByJjXdKHGnhBst9GJA5",
  "key27": "RbT47Y8egAhYoDau7AbkHFKvqXuFYWryhDv1XjFWSr8SZ5h794Rmi5s2wiUndj7WPz1AboKZC6uuLyKkp2aW2yz",
  "key28": "brEnP2pdt3n6gnJYFdu9TCma3nzHctVHBkkG4S3EpXMLcAi1JD1FKyC2X6m5TB2pqckMMjg6h7sHTKDr95zVHUi"
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
