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
    "5bsFZLz96m4sfrzeNDWwSKY6wn9Y9D9AphHqToaXjJ64zvu4jWvGJyZxHgyNGfsnbrXkvTkHrS1AHjDbxFhYFTT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eDapXEKwTURna3tQ14e4EuziiD1BtekzTqChHPCGVP4VSoEeELgT448nwGBFvH1fNCqTfSvvG3mECJCwz76SFUP",
  "key1": "2LE8ceZfCXYZbyMxTzuZCbUTB3rhTGedTyRg9YAfNWStj4CJb5jjyG41XVDXwHhUDjbsx3fT6Qrx32zDQEqpdTqn",
  "key2": "1eusD9iSg5Qi2wUpQwsJ29DCr9FC8vSQw4UusDYUoefQWRMxg7CdpTr8K5wQYojf7bzRRwJ7DMDET58RKt6rfF",
  "key3": "4GzHLJ7tQLNfyxeGu9Lo1xynGDAmSjQKdEs6dobJzqycHhS4v15J9JrXqurbdet9qTb6tGKtCY825BdNGo2ZwWEv",
  "key4": "zZDSAcY29d7sQUBuHZR6WzxZvo1dmAphQ9cSSTrmXqkiAqFYCUQFcF5aBF7gFSoEjtq7gwDQHKqdP2VWP3VJmoN",
  "key5": "22v5fdDYBvxmksMBQezjfWNAwy13eNpJcYoCBgAekbfvMnsoHgd6Q4t2qbys13UGPqp4ZRYrBXEAm6MTFpmr6Bj9",
  "key6": "5VKWDmSAGGA8xT2QyScUcctEYn2WQDJJEinmNFV7RDnVkTGTyLqhxyuk8cw6oq4dX8GTqVd7CpKms6GKKwrxeuuz",
  "key7": "29z5RDLfW3bPVh5ktstKac6VYqeuP8jSj9Gf5vPpkCFiY7FAQN2RtBdAkccFhJVCGGSEiaWcW2V7mwPkP46AfENG",
  "key8": "7ttSkagtU41TYQCgkFsNam44j6eVqHXUofNr4sdwBPzdSLPnBCmAbNDPMLqHjExcrk6t3Fw9R6vKnNYojffPJwz",
  "key9": "3DBe3jujBGKUqqoJHbCLWKbedJJx952MQwa95wmNF8ArPFRm3eemNnrvVx3puiESxhjfRXsEbzaatp3WiCsuVwS7",
  "key10": "4n2rtD9fw59Kit3SKyV9otVZhF1A1W17N5PuH4HnwfPmsosNww9jhZHFCoXcxDoDec1CSSuwwpYV9KB41QYiHVXT",
  "key11": "3W2UP1gvssS7NvSqFQBv21wCFuuxCNUFheCcP4x6KoV8G41pt3EmMVsquJCtgYjktqwEqTTsr7Gwed6WFAqKqkpL",
  "key12": "5sHn8utJGJ8nxQWFrab39YD7kY1YhhwpBeYGeaEZEmjU768K8oPtC7eLYscgq3fAZEd2DtLqC1TDHyB3SFDGwtwL",
  "key13": "zMxvQmwWALGc4kwZYYKrKWhYaivEV2FUHN6B6kjFd1nEBzWpBigMBcw6kSEuz3THoFNEVjT65R4c3ytnb5BbdRC",
  "key14": "4E4zWwUekrFJxGkXBCfDffpRc2xQ1FTjFUoJY2ZDaFWo3M6kYY8NqMLiVyqMFqtxi88Rnok2EnckpzfzFmhazvAc",
  "key15": "3HsQpmhuHvb8MLXE2MBLsj7a6mT1xXjJMUMCcRMqFopbqcxQRqT4GndYNZqUkwC3GUo3eiWYysmFdCoC38fjDANi",
  "key16": "3miY2VAbxhsBi6HryFp2LbQNBSE5wZHq1N21uv21edUqyffp4gYYrdVBh35jBQP5zieLQB6r8MCnwq4uDGVk2xJ4",
  "key17": "5HzbbsLwzAnQfNq3BY3Ap3VXuFk6m9qicRXwtYM2bW6Bxs9UZriQhpDPCYP7bZebm98m9MjDzoKb3b4izoqrCnr2",
  "key18": "2rjLgQAE8PzzaEqkgraMghnqCiuGcuvcxDKoE7iRxPnLWmTqsD4HhxAixjPVPjk4oSnYe14NpMws62pAv3CFDfG3",
  "key19": "1VkpdGBi1bFrzLuSZntvh2PBYJQTjg5GjvHUPEVgWwShwrX8umePKZeewpc6DqzY2KWTi6a9t7LtBK3cRLL7Ckw",
  "key20": "21CNYid9pa8RYTEH3hQMyK11wjAYmtrs1pvwi98tMcWvdqY4WbXuVAmBLM64WYAZHaq9WrU6EXXN2JjCyqx3Fu82",
  "key21": "3DZ9yZ5T6ZtYqyySQWKWMuCNxnWNd6pGcdRGWK8ZN8miU6Brcm9hX9somUKN6u4NSPiugFkg7wFCV9crbSHhaGKL",
  "key22": "bqAgUZccNEcsRjKNgcMM6hgdrYWXcrHHi23VtMLZCgo9CZqba9PHt57WrhQKYXQfYDCLuMVkbYS1eFfP6sY3vkT",
  "key23": "22SP9Pi1R8hAeWwXd8XBqMP8wcNt9RtMNFE5zzvkjfmeey2EXKLjaCvtGZfHHW5pFggLMv8W6fJvJzCFWytRNhsn",
  "key24": "3WWK58jXjxjGdyPbFijRXnkjbSh12DQ6dW2wdGjF9wZiDkGBymewamKgRK6wtKSPVKK98kUomQXVfc6Q3F59rixY"
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
