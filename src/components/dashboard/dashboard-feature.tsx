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
    "5Rc9R9uiJCpTWe6DvLJrmEaPzpfYxZsPpSsf18QEX9pc3jiYqvJ2rLxm6My5fhj2kGKfg4ZUXjwA6MwBmQcsW8xs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zFLEs6jDceN4xYBVBfMm6ytsv7uY1Sq352xztd5wGCPXN3KvbAm8M4EZS2X9pYC5FGpZ7UD5vvQCdEvKeH4J6af",
  "key1": "5bWZRjSxW7FpaSv68CTFGxXxdQDzUVX5LNbKRcJoQhBKFMA6ZtFr6WNGDFRsafWXTqYEH5b3f6A3QXPcm4ju8fyv",
  "key2": "45t2oBN6GUxbgZMdxzsQgC1zT3hdtHFg8ZF7Sfc6Zg8RsjmYH1xYobpWkURJn81apBCbC4RGC23ZwWY1hXRs5wT8",
  "key3": "yh1LzBmH3G5iWiJw8CggRP5Tbhc2riZLkWVgJNBXnYubTPMgenQLujM4wdx4Dt4P9jKS3maWkbg5XDaNZcTc5gb",
  "key4": "up5gyk1q6Hy5fhasTMmWGFcKv5E8r2CQXKaruFoiXsAkdtmG7vva53wNBGU5dqsY9U8du7A293KQn8mxk49ipeG",
  "key5": "4sdJxePzY9eTsbo4HU8xzVKYvuA9iZn6mvgL8X1F5BodBapoidEvLSzqqX7teFfx63U1Nnr5uSe6q3qD8KkwkHEW",
  "key6": "2kzGcgnEUR4pZWzYnAhvpDXKjfKd8PwvSGMX759r58tD3ip1C2Ttp9sDKmRtGqnGmXbzwKqGJtpcQLd4TvEtRLZq",
  "key7": "4i9U4N97BzM7nptiHZ9NxzZw8cqGuuiCq2vxZCWyw2zczArvG2BzPRgsyMa3XD3iKJCrEQPHt4EnMg6TZs3kva4D",
  "key8": "ffvJbaYacADkP1Jy4R68FksmaivfnH3kvCqGVJ7d6C6urEXNZ9Dmp99AhDVews7vgi7nAofuXwWzpHdAYC6iju3",
  "key9": "2BQ36imn2oXaeuJdaNFkL1h6jTneStHvh9krPMSCyBw8H8y8W3zmC17GBX3eZxFv3z7bVob2jWDDhwCQhgQ1hQ3H",
  "key10": "4VGaiUpheuPBJ94iTzvg4c7XFhLVAGj2mdQ5fuvfSG2uNEbUVqLZaiDTDf87hxPJ2r4GT6jKxra4XHPKZfgGZwZA",
  "key11": "3dBxsS9kagPEQDPeX1ufrY5hgVs71LDV2TM2x4oWuwJLNu8GjJRuEAmZQKtxZYuGvvSwUCX3hYFjtrbZAXgSCV6q",
  "key12": "2oUgVUyjesRECH1zbHkbWDcRARf9YfsJ211JidrkmFaRRZypaZm2LsfvUNitJXb6ZJYgCkVsND998PA9jyf9Nh1P",
  "key13": "4mHKcg6FYk5thgGCaLZSqZLwBUsjBCKAxBVQWitDi36CMQAnD6NqQBpop4Efi26jYtRQb68FwBfJjZozupx1PFkd",
  "key14": "258iu3LgoofRqfQfgThRDuYa9kHgfKk1QnExWXSJegk8VAimCQAf54Hu8Kvs1MoJEnkhoCRWkUAFTze5MegByu1X",
  "key15": "2XL83nmmYAssnzF8qWPLmfvjeJj7W1J3iSB534htr7RY5Luf1eiHdvApzb6dY6eE9qcbubBzcXo8fBTpiZsBxdt8",
  "key16": "6jT2mzy3GdwJ2pysR7Dq85ye4Kg36MYC4jJAb9YpPE87X8NyyhmKPHwcxs6pEsNfkFHdvGHdM71UxuY92rp1NGp",
  "key17": "41DKkYkhB4CT7v9ftRy8zhuQvAvzckAEBcWfBZCz2KRaMov2XDK8PjRF9C9ygxLLoVe2XyJVzryaiaMp7JLj8knw",
  "key18": "3awqrwzQpNBBQ1pzc2swo1NVJcVA5z41GX7yNMr9LhrpHajMUHao4fvSDmkHZQfSbdZTuiiKnr8bwbKL1SKV2Nq9",
  "key19": "2nqQY3oiAzE5QcqNP97GyMh1ttoxmVeFHZa9Y1HvVGzUwtZRpXbmt1wZmVEwuHVxvUy4UdrsDSw7s4SSEHoHiqaf",
  "key20": "2ZX4Ma658zJyF6qzQArscawZ36hoCtohHNwyLjWCz7vPzQoXvdFqJiURM87J6qxM8F3YsTVUWkTW8KkhmuPZ9yRV",
  "key21": "29hFvTWXjXb4o5QWh1eMHuE4WfVY51mU7qkugRfe4FAU9uWLF4o4dHjkcgcAPC5BF64KaeAVtY5tXXUCiEgThB3L",
  "key22": "4DwCSyv1AhCMtXzYVSvYXtftnRXxJXLZBnmGd9g15JvxGPEZf4pkrge4ykdvth36LiZuUKrA7uEJfPrv73BUq9g1",
  "key23": "3811BsqUPaBgjjkVBJz36pHV97t4CWELU37uvXkN3k3nUMx7wuhnjW6KGAvq7tUdoyNLFz97hM9WUqJM3Pbn4Gbi",
  "key24": "4EpvqAh6w55L3AGCMMuHE3LNrgXTECfTHdxgvP1GCkXJQgvyioh4f5PEgAasRC1HuMaVYgAbBKbWMLRPwKkbUuNs",
  "key25": "phteBkWvVbHZBEww16DGJHoMGiuEtg9yyWD6SPekHpJPJoZbwnbYP1gsJFMLWxwRVbcrNPMMcqxHtYSJkTKLF8C",
  "key26": "3rWRLDGPkS2QBmKCE7pKFBZAE7LpUQmQkcUpufkyAx9A4J8PHx6rUBeUcbuHdjcxr7gVbGEP1RNEkDeW7eaVZbVV",
  "key27": "5TaTqQAR52sD4zU5E3bxqu3xtNC32zG7LsknUcyMb9ZfXcx3mcVyB82Hg248JzTW3tZAjYuxmJZSKSKJw913W8JE",
  "key28": "dnBRpE5fYpikokvtmXqLtrkCSgQAS4xeiAfiH1g6Q4dcjG3ZVWnje3x7BpztJDg52GUTdLR29jkfASYNrLZSy86",
  "key29": "2RJuhxGRuanNvZj2QtPJBX5mAyEttk5UQMpPnQ3aGNQwctkPeqLHtBGGbcLWSD22jQiCaC2qt6L4MPSs1vJp5m28"
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
