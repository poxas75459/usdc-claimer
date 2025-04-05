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
    "3WrMx4pJmwW7QJabRqmUgdZFseSCo7XcBKM6m64tk8vNuCk4C1BxCUJe5KaFrkC3iGENbriNBVvmDeHYVh3MP1yj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aTPSuC1FhgDxjH3e9SfW6fkiEnyZi6ZQUwTUm4BujrQcYJYMWGVqj2Le5UajkQqQEmR91kejNbX6GptKNJtXW6J",
  "key1": "3RRNHpQwB5P2YWbEoPZjdnanvNyvz1GHj4PkDKFueUoK49Y56qqYqPJrKB5rhXfrQMQ9L8i4mkPyaLpSJEa2ZYoV",
  "key2": "49Un4UKpDA31knKqWXVBq2aQ6SzJZNDWSNKp9N1P85dRVQoZmkdGzmRbvwH2p4pu6hCf9YMMFocL3aNHVwHzzH9i",
  "key3": "4uxL5FW4EE1HBUGZ5Tv9n3HNvicUpSce1UcAzNEqKyFBBYqRseUnLLfXYf3TURBmAR3Hqkik1Ws62kpqspXm5omS",
  "key4": "3ziFEjLjuZc2fTGDEZpFGB75r6dVzTRX7roLGm9mZioceZBXkNQkEAcgpsQZqFH59wsYVR3xLEZyqwBXUyWFfDZn",
  "key5": "3JwuiUSXeNTNssZ8VwLZwgVc5Um1hZrWHeSkm58wQnGZ3etZS6umS2icx3RskpsScC4YxYwPuJbr2xqNtLuHX3be",
  "key6": "3U77Ngv2hietsR1y6AQkvgEXJmoW9ZpLUvWxRYh2wuk4EtA8XpUr5GJ5Txzu3bi5gWctseYSYbEpaw9caL2WDQHj",
  "key7": "4UNiuHzjV2tLRCrhMZY2NUmAYGuuVpvZt7nHMkofrSiBuz7DeqEygjE2M3qMwMzoeCp2kCLHkXuok8cU9Qh59KEz",
  "key8": "26rtpGrMonRUTiSGtSoNwL3hea13ERKP5hrXiCsH3o84wxBdsbPXVXRrcdVBVpEeyWfcJ91hwJFe4HjWEeM8ghu2",
  "key9": "rXqyzb3mEWuYjrJC5SnB9mFUYDgX7qHBG9LGDU83iDNFMAKfsCGQZssdk3fqpGkjNG1hJxuUzfkdjCgxouZX5fa",
  "key10": "22JMXhgTJkiCGS99bxcdo79eZb9362UfD326ieJ37HkKjvGnVq54jnGy1pmffj1Yrg9JJrET7mRq2o3tTAvYxkxq",
  "key11": "495Lyr1FTBC6NZy3zKEfzQgWnAShwTXciypzPGcu6Xv2EPqgfJkAe1WntadPpDo9fNk4uyRiSVpGhdgi4cfrAKy3",
  "key12": "dbSWBqqNqCEf3NVPRhzrJvCHFLPkHtkVBa3dNRUjtASEYGvmuNh6LPwMJT9sRCrYKUs9SGtaxYGXR2Y4xvYdhRU",
  "key13": "TrhbA21Mt8WgMhijirvuBpFQq79essrzJ7YjUqWo7rSf7NgMiPVNkA7rhUWSRdNs3FnhGREWmHaNy6KSqK9kRKU",
  "key14": "2wVVmaa75TmbB9Jpxcohupg7aHiv6JY6RgoQoQUJVzCuh2hqHAFyFqFMojLwHJKTtz8RoWqC75UKKgE99Rt6kuj4",
  "key15": "59jaKFuzrt6uTmVx25WWEmqLWH2Ky5WeJS9C2RHiBL47VzNyPUhxtd4UwMgTnBtvP6f5xSRvhG7L1XTEPK6SttKJ",
  "key16": "2Q8mkYSBHbDtSPUPW9fSjjE5zWzEZ1THDnrCBNZg57k9uk6mvarooQUyrMHqwDfRtGgHKMvjbUfG3JihJRPFSzuN",
  "key17": "2RvFJSp8NjjiBxVqyDZNAK13SjKBJeXqqHVySGEjR2H2jiECuLxPm5CKtwuPm6aJ7F8HGrRPfpe694JUTkPAzsao",
  "key18": "2j753iA8LLFNvsc9eeuPQSuERtDBZERYiAs87abVohXPPQcqrxmbxQterqTnrRYUmKz2k5FNqDKDZhxmi2dK7JDy",
  "key19": "36Ku2YsLvCxpjxvjHDepB6xF44FPtNcoF3L33hLL1nNeb8oyBvS4FeY8aezUc2RbVECZriENNeVw6qPYkJSfyo1S",
  "key20": "4kdSGAsSCiTWjrS7dkQdtStoZxfsoc6J5MgTo9nkCgdzYMG8BAUgi46oZngs8MYk469TuFCfqZXoKtZoL68ip4V2",
  "key21": "5C2T6cMjD37jnVaUWSfT6GLidsBAdafhbduEX6DzhX7hsj54x1XnEw9taNEJ88Rw2m68kWVugRZBg9eQvS5zSi5t",
  "key22": "4LkGVV3pBWZwGryZ9rCjvhwj4o4iqX16beMuSP4RWzkbSLuWC2SbHjbZ1qQKmqwLbwKyZgaCv92BxQ8acz8iG7kr",
  "key23": "EdcDGXu88WCzkQAGWDqCEjRSg8JcKqmLLz9rSMJ6G5BTf1kaT6QkQWUzCqrDHHtikDzoQebPhjbWuUfKGhqhm4f",
  "key24": "48f7t7Khrt9UHDSahLpM3pXuZL3RtQw7RSM6NaJGwGSM8Jtt72cHssbV7LzXsyvYvH9bdHq4pUEHBoXh89psjJZV",
  "key25": "2azzLcYrXYEdggmJ4gNFcRJyccPgccAdcXWKtSbPVTYrP3StM3x9c8jPg7LExTm6aRopoUWLNa97PeuJoM89UQtd"
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
