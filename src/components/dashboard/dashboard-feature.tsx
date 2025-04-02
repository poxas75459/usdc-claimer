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
    "3sjSjCisSzgJEAfkyAkFJxbPLfnizHxTtoA2qcBVDjNYm2BWMgy3nqiuXkWaVjAyi7em1oK16cs218iwa8KubTAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FWwH1A5FrgKErVBuUrKePNmpiAZ8b4wkbxJFQ8fyNi7ETWtX7e88N5obTTAdeMgEakTxbgHvUBErTAJZ7Ln6dvF",
  "key1": "57rC4M3dxB8ExCX5WYjE1nNicaM2UUZuf7C9ppQS88kNrYQ6FfRHC1sbMgyJvaCgVcbwooQTh35pvrvxA6a1Hsa3",
  "key2": "5hE1bYxSej8ssAv1TcdEkrpWLxA6k4xpyfeHGNELBtRx3FjLWcZ26scAwDTyhXPLyYrJwnsXadkhgg3gjHWnEvfW",
  "key3": "3TiczkkemefrdRoXYdTWsFgZhcueZ4fnB9iwzL8TAbFw84tfo6cAB2LM9dV6GbZaC8jMmgmbmFgLyffSLT6htWx3",
  "key4": "5dBLThhxrD9WjKV8dgZ7Zfydb7LUW4qf5CDmyvXxXAhehumdgf5yxPbCW81etGNCH9EQe7aJTDcHHN2dGNGM4fn2",
  "key5": "2GD6mJ6UHZDajUqgnBQjK8cmwJ8NvDKfJ2kzZwp67t5LF4wwTtFbzbSohktdRrsacVGNYszKvcf6wFjKhzMUzbs3",
  "key6": "4ubSYvkJV1ppLumra7Em5REnDqWmcp2nNeYWyzQ1voE7L13MLVuiNk5cP7eEyn4yTGvRfdyTcjyh3meYdLe63ZkK",
  "key7": "qpeCAwhXHTQVZppqsAidDgQVEdGwnD88ok6UstU22RwBQSoQT2Vyb12R6aHe3qURk5mfUj28799bJFAbjwwYnWJ",
  "key8": "2L3HZauEGDp6AgDaLaumWkngEfjNp4mMNzMUTFceUEaZHUBXkNX6TeSNrS51hzhFFkmnDcuuC4h5EdTwvZg23Rdv",
  "key9": "28XWs6fDpFppvAiSKZfJd7hLcjQxSDBfwCqhjFmiweZgr8xrv11JHE3dXqhB6gaUXWW2dk7ukYc5V9VqEiwkYMWc",
  "key10": "45ShDJG4FjZgwPPM4azRGdzMeaqjhD5jaSUAHBAMsJAwKAdHC1bX8CnZdMweT2yPDivE6EGwWut88BckcVzd3DLC",
  "key11": "531SqaD6fniDyi6zWLF9Ykx9ok1tbEU6G7s3oVjSrLiWdmoyRJgWzBLK3AyEsUv4jto5YqJG2Ciupdf2AigtBUug",
  "key12": "2fdLMsJJmWP5Q5YkETiNfAAFeDEgUHptFgEMZ1twa7ieUYMBoNrKBxnrqvSQYHzcU2YU2Dm6nRKuD2tF4u9TLeSV",
  "key13": "5S2YR5qK1VrVjBxJQnFYBLPSZy1YfWd5pVKW5E8yT2sZFNAvMDmYQpoVznJs5ECykKZuUuLcj4aHKJdwYgdrysHJ",
  "key14": "4n6ds5oB9vkPqHimtvTma1Ea4XGnfhDkmYzrPHiscdVQUbuvKD9aXNpzS1825ZfCsp7wCxinEiEt8v4QCLaLRT9N",
  "key15": "2yjYBcEtv54uqS7cpwaUg6zazshuVE9nB6fwQuR39zg4oUSNGRPs6nRynXbUcZygqszPpaPy2CbCn6E65DBoikzx",
  "key16": "5ij4dxjgnFJVvKyM4nJBLtw4nSAfU4vKGswDhVknYZVv2nYoEF7WF5y6yDjgAJVe9sJfUxavTz5Hq1JLZ4Ekn82C",
  "key17": "5zyvnfGhanh4K5yc8wsYEHWST1YFgK3RHJ9rTWNCUcGAJgVCrGXGHDLSLfxJbjh2jKhkdqKrP8v6252kSj5tgFbe",
  "key18": "5giaQX4JahmLqbryhP8abprgRo5c4nFuUTTkP3YjnhWuUcWujZsakm4nU3RWGSiUcrPgDz4xQnC6pXXXqPczfpbu",
  "key19": "4A5maxfBoc9AeBp1ycKk5qysTXPnL9D6Z57EucGzL5wzu1o4cXvkY6Gm1Lq2wcFuodFzeRrGBQ1S3tawENVFnKPo",
  "key20": "2ur71pg2U1EABAmnVnMgd8LMCFghVo4zwKQZo5BtpjGhvNTwDDPDBAcLS9xsCR4dVYx6WWisVcu4RBWNXbgwwi7q",
  "key21": "5iBQ5wgznyNLFvmf5zHsDQjJgKbQpfS9XQr1zHq3r16jE32zRNnjcPgWQHeW1onb2tdb5ARhqNEsbEpB2n67aTLy",
  "key22": "5mS7P3CBs6eLYCaQ6subzyirT3LAyQBbr8PU3M5coqiVjGeEu3cQzKLW8VWQZWm4RTYa7uUXa5zYhw4Cd5zjyVaH",
  "key23": "5oo1AotzvhC6Pab6WaARGLoXFS6NupVshA3n3HwBgCUhJutsXmZinsn1wTSyZQf9ev9g9gTCf9vFayqnziVYzzqu",
  "key24": "21ZFnHU2cTy87x52FVSwKUmW5XSmg42uDyuhXea1asXhJ4e2629MSTZwmXA1w5fdYgyNjkZbZJNqSWYUh4kTvDCG",
  "key25": "5h7ifmBi3sVL74xbR5PfniVbCSxXLcsUg9jK7Av2D7UGfCUoykjvmvtD2LJUQB8LtkpVipUm1b16EDYcxawAiZaA",
  "key26": "bxP2eBz87J4zhhoxpDiqZnHK7M6mjohGHHZjhMaaXTH1RYehWo9vNgZiENmpSbcmYq1djh9cdmDzMENYZG3fnZe",
  "key27": "bpkqhevvpD5LstJ45taGUXGdp2d1NzXUvTFvSLZuL7tJYxN8ekx9ZGY7CjrMgpbC6xYxk5P6Dga7zRYM4Dxt28Q",
  "key28": "2SS7NqiA6YBDzrZfvaojWgab1TsvPQLfAgrhgShn9TaSWZA5r2i7oWnvKgP6bTcYCjrjzkafKv8jFXV8nsL2AcZN",
  "key29": "5vacjKhGMq3A1FFm8RJbedjdAaKi5HiQfwWsxTmDKS3D5gQi6kRThEcar4eDDbyzof3MRyySE9EbimR2aAfxhcAM"
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
