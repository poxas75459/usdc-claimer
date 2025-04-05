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
    "H9Hf9LyxZcdeJ4KZaq5LimEZQL9hdZ1TR8BfodNc3bYGM9hED43588gY7UXd7be5XrHpQsNvqyxwsDzQZdoGPNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QGxsEaDXvhk2K9mv1zhRjzN1kCXDxSyDrX5DTQEDBEBunmNqQJtZgwBtmJGkbMuqEsBhQP1GiAtrg2Pq13samwg",
  "key1": "4HXG3MroQPgdwzENzooGBZAzMszkbCPT8deanRFdA9GTvthrnFLEcBi5ffW4hVA2AyZLUkvU6BZPtirhpBgZh32x",
  "key2": "2hEJVxiGcFXzEtoWyBcaKKdZp4hB6fXZqWoZXusNMSqx5Syr2CcNztEZEuoAWVSLvUzMtFwssyvbXn5HfAQSRyxy",
  "key3": "Ej2dNUe3mQvSQbpyWmdyqaAm6SpuT7nhDYcPNNsqw9pWpqZUQWigwfyUJAB6o3ZFSfDDnvQZXLBgnJz6wW4J7QQ",
  "key4": "2tPAu4aZKqtqRqLRrmeDmumiQkfsSmoNbUY4Hh1orFg3AeardRyVkrJzXCBQBynzwkoneHTSCDCh8ixHMqBv45pQ",
  "key5": "3o4AdH5qtEXKFK3p1zUn7gffFs97PSR1zkyAg37fD2BeXtskoZsLxux3gfLgEoywSZmgbwybtCyMhLCLJi4LMtRa",
  "key6": "3mLRWpu9sDqU5u9f4oh9Y6YLJuaMV8BjJ1uJfRqnnPqNCyfCvab16uHNKndSNLui2ViaWNYhYZAPeRN43jL65Vew",
  "key7": "JuJARn1mDemFwc4NeP7GFnkWKvz7gQ8QtW49r2iRS4V2hS6XeRtUx9pwXzv3mH5RBdvwsM8aqoNczbXoKdTnwgd",
  "key8": "2vRpE9Ddd6JEvrCzXFscqqjPBup7K9MZ3txE7CoWHXH5BtaeJdnatDRTLj9LzEmRuWvvEZapWJdjQLwY5tZcPj8U",
  "key9": "2DL6SHnaDssQ43Vb96tdhWauwPQJYv9hXuW9MvspWmJdfKGbrqeuBMJJtCA3hSSVUhZ4HKFdFiiTG6Y7JUK7F5nn",
  "key10": "3FYrWQzMj6roL1xFszoWRdz1eWDtMPR5qy6mzzdMbsWHQ9yKdGv4MJvGws6kN8KSKYX9dKNQnVDsdcv8joUMEmV2",
  "key11": "xCGnCkHd1zhyYy5rDEUekPTLnGpYi1LRoU3kchFpzAMT9VutXBH61oHw98awv9QguFQybskBWkCUW8hSsLyAsZV",
  "key12": "EAN7fa9KTdPGuGPb8HV35J7b56CxoJ83T7eV9fDBspzS4RZrYoNc5QjTAkasM7A91BVcte24AehjYtUew6XQgMy",
  "key13": "45qH4FBWHFe1giFgBArp8B3gFGHKnzXADbwboGpsEXoE1hy47hP83S8XR7XWFmwD9CMLyXxTzpFmPhSy5rfT1iro",
  "key14": "ANZAvC2jf9pzLUy4CYuzrQNEbfw99pcAjrYWipvg7nuUB3kwCkr5LpSsqnWnBN1KVbiNTgb3zL8oh37KHReZH6Z",
  "key15": "37XDwA5EhN4XHAaGSXa4QkXCSoqXWT8P2tPmmN3nFYLSU5JXskvFPC7pbAdFvcCvxNjyZ7rTxTrCFBi3RpEz8k5w",
  "key16": "2ySw43E3jHsN5wbZLxNf1Ei1hWtAUhQF9PWYvT1UDhgjfSRsiy2dZCts3bd6byjW2MajD9sxUUHDFE1MSsGAuK4q",
  "key17": "4oQzCcKipFwBkCchtjKQGXK86PD8fwT2cVx476W7LC1Tbwf15WgjLhSTYmmau7XFft8LeKFWgEqKz2siFNAioXWs",
  "key18": "5tYxw1MVdksZzjYP5NFrbkCwZhfSP5qt8tVBFEe4i88ToTx6xZ2dz5GtkwA64fZU3ZR734vBrT7QvbADxGKrsGFq",
  "key19": "2K4bLz6psHBvyuTqGqNcrVq2xXpkPCxk9TxV6xv7Gj8JhManmF2roZgZXxwTkdeUXFj1NYQw9jhPktWPDyaGppyt",
  "key20": "3sjmjvBrRXPcotJLHWP5BHptgVoFYMmgD78oZNwZjeGehojVWecf3K4faJS4iRNyKZWW4yuepoZsF7ekq1Zv31Fe",
  "key21": "5sXwWZ7rAUCYzFrwcBppxy6c2ApzrvzrXYwW8YHLmX2gsDg4r29cgrysbFgJfsETuLLXKi3SD5cZxdL3pG6scxce",
  "key22": "57g1YseD3mev863DidVE6QjSUKp1L2zDHaU6chi7UPBuTexJudwvRHH5rBRPxiSTMcwadtByj2sSmfN6m78FE4Dz",
  "key23": "NRpXCWAagw5JzUSNCjxSZ33sMeMrkd97KNxQk16yVJQ5sTvF32AovVaD9cEGJxzDarD7uM4Z7nJR6syP2weX9ij",
  "key24": "65xqMhhsSSY7A4fBa7SqcaiCFWkryWJdQUdVQ86utkAdLh6iYJ5mkWscxH25G7qogLa8kYEYCfaksHD6WgcpeDob",
  "key25": "3SqcXEigjWkN7hqREmFiS21doWpDpgZ7Yo5FVQsbtbkFZy9XEZo7WS8pEc17EqC9i9wXJWhvcc4Yk5K8aS5m5vC1",
  "key26": "PWc4UsHqrHMmsrTAppk1xcgHhF9pJ6pUKomh7fuCGM2B6FpkZ95998iKjmJmeSfDfiERBoANi1a5qdqmRvcTpCM",
  "key27": "5sLCdpj7cTTTeYkwHeUCUPcF2TQYD1KBMfeKavFGf6XmP3vQUx1LF4duWaUtd1uJEAcrCGdLe8urhV29Lw8DE61v",
  "key28": "46VvzKTUdF7X5TLXKD1mCEvnyj6vozej1yKnp2hwsQYQEHGJ8feGwVzghUuxRggkYBiW5DKMJLtC57GeVT71Er36",
  "key29": "36SANvfZnaQTeW9PZgHAXN82QD6C9ADd7tDu8qAv3YLWbxreCBDSL2Y8uGgbjKBxwJc3i4NCCC2bNDRftfy1o3te",
  "key30": "zDbcy6WERRcnhwu16wjmTdMbbWntaGo1A9tCge8wy9VMJzXiNbJJ5vvwXqCwTDpd8rPA6rNAG2fKY5qpZW3yNxv",
  "key31": "5rBJeMZnjAmPCN5SCxTjqrE9u9EWsghs6y3569sVRJWNKRX5Avg8DayU1FozMmmUTEkFTvjb3vpwQKMX6B6kig9U",
  "key32": "3vMaySrVSUMd3ivgKLZnuJwn2Ypwux3cqVoGtgtKUhxJNEaD39M2cyof2soZ3GNnR32aVhfRL6f424bquvvJZzLv",
  "key33": "5R6DSrwpnGJdbc1ZLtu7AAnaRCgz1QK7XfkQDDZSSsCeETTTE1vKWghSdEbkut9DwSJA3qEtTThhJadMFLeZugbv"
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
