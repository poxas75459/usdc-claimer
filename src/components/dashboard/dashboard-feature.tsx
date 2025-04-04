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
    "3wqwcDkmYaWLL2SoZdsRiqwwk6exw6uDnQK3TPo2jKjQwjoEZBKg9xXMooVRCteB2Ax7VkmPiQGL1oMDqxmPD7jY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BTePwnEnPnQUrthhFKfTJ6sGEivitgwUNNfGgTsrjBGDt1cZ13RHWgiNFkJk62zFfysz9KTtJ7kL9oA6HZdqVBB",
  "key1": "4An9WtKm8udrbEGV554wJ7fayTq4iTJyQyjWS5UJCc7BkziQP3oaNC6SbjDqoirc5rrnsraYFnmYgqroTC5LZGHD",
  "key2": "ueX5stGtWxPmSwhpcwa1xwh3z6fWSykAGb1pZmdvJcnnP3AoSWvVJRnZMeq6QSETr5s83CQcEAEBgnw6qzeHt1k",
  "key3": "2ZDgox2EHzjhSgPZAi9zHsDJJdhJ8vw7uTbZ3vWeyFtTFDP97o5tLGmjczptetU8suH53aNqddk1GP9cQjBRzmaB",
  "key4": "2qAnLgFGEdten31kL3PTrPVC2WpuAG9WEUbvrRm8GrexsuejixFSnx24bfzdaSs1tsePPbHK4WJ84vFyhrApCq2y",
  "key5": "4MqpRBRKnsKbhPNrQ8qaNSTKpJzxCKjgsauqc35Um91q7xuq6pbaPqc3zyjqpTYATi1DELNA8Mt5EeJ2qT1iTzya",
  "key6": "ciDCiGdwA6zaP4LiGLMEAySx1skPZYSsKuc25v3k5itoy1yAKnPTYfJCQBm2upZkdnyQaUoBzJyrPd4ch5bb5Qm",
  "key7": "2VoBGVJCi6R6rEFvx3h2ydgyiVKGexwvdGeMCfZohCLLUe41YnDDmMnLVk3hXfrSUQhk9wwTp27kumeaSYucgRaj",
  "key8": "4bfNuh2AFaJeVwRm539d1DyQgAAmR8eEz2iB7Hb3eZLt6xPmsNY1UgKB1PbwbRv2bQMkhDYgaGAcYvxXuMQsMyC6",
  "key9": "2FdeqM3XxFGGJyx5W4MQeohNwhHF8oDaUzEwZqTGhwk6GYKrpRv5eN8hoW29uLWEVaYB3rSnyK5M7afdqTwBCYrh",
  "key10": "TG8s6Sw9j4MxtKahRgnFDxZCNapezS8wVztG3cjtr3RTNFmQmAFKEePLuNuDRu4QkHiPnAjWoG6u9MhUkBYp7Qi",
  "key11": "2fpx8jEsg4Q8HVeJRWCuV3Q5EKY3PQeUC4vbrqyrR6e47Xd3cwkfQ1YwdP7CfpPwvjJLBH2MdwuGZ2YJK7WvQrZL",
  "key12": "4uiLUyM1Z5gf83QJcBKn6mBw8hhoaqP6VdEBuS4v7WkzkJBECax69Xo9x3sESqxqY6Y5XBqA8VA41gS6YYYLsGDp",
  "key13": "3B6sh7DNVDpuzdKMwwj7c3MtEWtEgJwpdy4Km4rs83N9BmATtJJJXpXctMNnpTwLtKV6iw2gMWbsc1mzP9WpRkN7",
  "key14": "61hHQ2U7rV2Cmha2sZ6o1nZE8jaD1Hd2uWpoTSo95U6H72Doq3YvLvxpwt2Rqrw6HzB43N1iYvcWBv9oRQYQ5isY",
  "key15": "3LX9LZoruX8WSnQNuibhLvSHMekHQsFm1v76EBqCXfD2eraaUByNg2i7Ds2FPRxCAHhuMRSVrcuWW6KAGrmNAGj6",
  "key16": "36W6z2c2BnUBBsVdcVgoJVvUB4gAN19GVZBwnhBxtoxdX4QBssbte8BQvJafGPmmDnueqsCNG7ZAmmACxaPguP2R",
  "key17": "A2xo4svFJuv71Mek8mDFkm6DzyC7qcGC2oWipXSVy8MLKpKvZBqDL3C4Gg4NHtaQ86DedYw8mD2SSKBzcaLmzrL",
  "key18": "FRhPigbhdqeUEKcokuyRVLgFH7zVmAqskrUindpBu75DcBc5zoQvjVwmh7nVmPVfLPWtEWaB8AcT8aJsRApf35M",
  "key19": "43LM4ZJzjj8ntbFU8QFMYKKxSJmMXcG6z3c8gjaE7Bp6AtpxggcPvPStSqGkzL9DHy8XQ4Y5ce6jenB1uTJTEbX8",
  "key20": "4imj2Ex6LAWmAxAY32Q9uynZkdP1SrqJrB7cd8ZrRbTVEfyhq8tbifmhishKjPRcRMDXTBXrHiu9wJAtX9puTvAn",
  "key21": "425JmjCbgjKAJLmjBzJtaeUpLTrioJvcgBVMcLeqJXgBzv3qaGFDe92x94sjfyBQ6M1GedJizrQ9uUGdNyGHtXGv",
  "key22": "27bycXZX1URzRDq3VXiGpXxoX4ZR1L12PXjJt8nJPgBQo1VD6DjdaMW4yDqLBzAWBEZnqWCh2GivfE5jRR5zhhAm",
  "key23": "5C3JEy53VNvZvtLwyVmPA5FTumNraPtuLBRar5coW7UF1ncQqyWLExnmZ3ZntmMb4dPr5n8p3rbBXN7WByTWk1Ha",
  "key24": "5B5QBfYdN651EBhgXQw7uuTcAboNCpT2xdfGYTxAKAt3BbAFTKWHQFMSqpEEKDYEcraRcSg9u95qLCGC45CYcw54",
  "key25": "yAL1hZXdYS4WwT4JBKmFVjRohxTGYeWWjuEyKizPWsDhEoJt8wmQcPcw9YCkigBAk2T5vNioM11g67jgc8Tz5sE",
  "key26": "3ym6Csuf1Bmz9m3LRLZZzMHP3NEcUMsdteEs3MJfGmjYnjQ9iLht2AxnFqHTEi7cRbQrj8GAtwXdoYkpkUBCh3rc",
  "key27": "Tw6brz7Jpnvf84TMs9H7p95aSxJ7Um9rKXnGGmUU1kg6J4LTz4N8b28aDnYEB1HyW812tWKCemUJfjtvURbGH7A",
  "key28": "2XUdnJFVqouxJFVmZdex36gfmRt3d7GkqfdVxctonsJhHcwwSPXfh6rrutrvfPoRhVFstVFcrLiRQD23vtinyCqb"
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
