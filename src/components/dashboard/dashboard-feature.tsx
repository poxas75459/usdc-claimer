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
    "22x5uzPn8XTBb4vErXaRn8MV9yMZoDnoD4UuLb37S3K63uQSGxJZqKYxSFiRQSsnf5E4kXSbvG9xPGScnBHQYj5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RgY3qpNp5KaEPWSrNbn6h7VCnaCJhDxbAYoeZVJyN6R7tFdP8HcQJXng11rcA7yMHW8h5iJMVqQgPtr6Fo8bS3n",
  "key1": "2vQh8xZC1mW9dmi2eaV8DPf22UoTaTscFn8TLswrouAgGibuTNuhg29D71nbZpV9YrT5dN8hTs1ijqBevuJR6xKn",
  "key2": "4Qv3gGYKU1AoDtEZvvPFQeGRpzCLeVfrZn74YcAg7NnJxAmReynvHEdbL3z8t8fJZBQjFZWkBH1q72LvL9WvoA3t",
  "key3": "3ue95SMZdgHBwe4iCYwWUBaJU6NyYNqcpDRairxh36w5efMjDFm5nhpUWPdsSvsvSHoqfhCW1DPWysRFsv867rM4",
  "key4": "4fnAHMjtkxJtgwC9BsNJqtRfj6zAm53ry1HQvSa2bPdNmbexqcSY97GjHx3FQyNyuZCybmS3kdT7fDMpyKWYj3A3",
  "key5": "X7MWJg9CwL6xpbDpuXUaSJK6TaDquPXYG8RvQfSGX865q1VrNCub6XMMkR8jkfdVCfjex66PXmx9YhrXntVyRP3",
  "key6": "2fBMBR78VqZMwkfRfYgLXH5zdQQPWGNP8MGC1ZMjQegENysCgPwTLsw2e1cs9Sejs3CLaN3eX3YCmRxNcXckNZbL",
  "key7": "3doEnEzR2LnKdG9eSiqZdUojMcVX9PL4bLYyDVZgNnZd3obrBKAzesxi9WUNej9i8ZP3x8WKVrbGYVMdFzCwJFQT",
  "key8": "wtD616GKiBanL3to7Y84R3V46TxUG3dwdo9FapK5tyd5HSbhAN68vpBETWLwDMMYAeqkrvk69U1C55tURCL3krr",
  "key9": "4yAbHVAZ41UsQWiDazwkyAev3SAjvuxEFf9i8oksYfcSM4ov54wF1ZSidJkCej5HjBwiam5n73XH5eQAQG1f7DRy",
  "key10": "5a1h18G5esQQ9VqLyzUuTh5gZKDgLqzyWGcU1mmnsjayetDRLfMU9HNvYWWR283F5m7gUhayq3rqW5LVLzejw7NG",
  "key11": "T81T5xCfMxZFUQphxymx55hLbeGdFuucWAaazdKx8FEWboHRBpmJqiiML99Gi5yj4PDvgNAjVFU55RVLjBbEne4",
  "key12": "2V8LeDKkSK3FEE7xFwtYg6hqcw3G35NNsn4QNot67TPPd3WfL3sZweThdDJ4TWDRuer5HLuWcD12s2gY88rfN1nK",
  "key13": "2sEgBswAZNHnHtDikdiv4nTnr6uTW9cahDiptusFUAWtJmyXsR7Z2YcELLKwij4MVNggnxjTGmAsNNQCDBSY7qVR",
  "key14": "31jktKi1yJXEjkjYRq22TpUi84DLUxExwksqwx8bXMCWcG7os9Xhv7WAg82QjbSpAppTVGTjP2C3BSPhr6n3noc2",
  "key15": "3dJ9DcvCaZ968hXkAUPKxo7dhJTaq1kLDvajzR7HzDTqbnTpQECLh4etc7SZn4Yx8q3CfSswbxai7iWAdd95zbVy",
  "key16": "rTQv7LTxed5wwiM4qfFV6R6joGEcsmmnXazx14Hxyh9KMRMa7jQ4HQM4xeXMCnKvoYfEHJLM8sCDK22zXQBhqMM",
  "key17": "2ycYhKcTbu6nK5DhEycJ8PziyFXb6W5qS4vYMFnVF54bGYkjtCBrNjpWEEZ2VpYgsBtcZCt4T22LKpDtos3QKeXF",
  "key18": "2VvqaaZBdFK8JDW1pzwvexnNj8hJFSj8zmrgyvzYif18MLShZmEuzxazKf6EFiNWwEjGTfgs4pwoYMsZMWoDk2wJ",
  "key19": "3s3yqfp2th9PNrw78CUu1CiaMonj6aLA7RfcZJP9J53nNWhSPURVypaFrfWdS5WrmNgZd24uyqPFSh88NpFfGmCB",
  "key20": "4ctcYJPkRi3Cf8z1aWGYRKSwQe2KNCF3icDB7N9JrH8RHDPtzToZHh9GQ1uDqtmYhNdNsXW58299J8RYjhx9CgDw",
  "key21": "38cUYrVZhxwracb3hx9tQB4uWRdd7wJ2jShbG3MnWnuLwBWKYhFqXLxg4NahGnHuL9b1E9uekw7XuLDBx7UnY9yB",
  "key22": "3hG26UiZFKEthWnzeu2SwmXXgV98viEujbgPavbYwn4r6dzBeDUs2dZDdJH7LzJxYd99MZxtURNqaMkC3j85LS5q",
  "key23": "jkMDqSV1L4qjFkcdXGGL9XQStSfpzmS8xkmszJ9FJjV5PRcNgzvqEiYcEePhn68wYMttNPtgUjeDWp4yuV9tKW1",
  "key24": "erXwWfv1R9Hzze2u3jtoiaXhsMzVqjgBhrrH2XqvHC1mYbRN5FzuVpokzLsHQne9J8FzQB9vK9X9hMJZJFfFeUj",
  "key25": "4DDQBYics34M9RnfsvmimMiWTvw3eYeLeyeWmc3ZXtcqwCj7eDbyNAdD7QUAugBEF2M9BNXKh4fii41QpCSLXgy7",
  "key26": "HucAVbCgjGpvCaiDYyexX1svhRboUnzZNFXh7xkcW7PoeJpUf5Ag5rkS1dMEgb4CevoLMhz5vongLKfE4Lqm35p",
  "key27": "2NCrFdP9ei7WH6hbg2J1Mq6eJwS575ayvHh97D6nYQJNjnmiJfaFV1AoLGAijPGiayRZm4dLTPvr8xrXaTn7QEq2",
  "key28": "5VNa3jVW3CmXLEcacKrQR3SyPtszrWAvi5PNm6g2eHCC6NqNT3snE6bNYJFYBraGFoGgKTnxhXqbPjJMjobqvthW"
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
