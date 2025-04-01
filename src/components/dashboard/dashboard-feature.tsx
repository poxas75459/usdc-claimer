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
    "5RDvTNto97hcaUUyZeXHuJFEJtKJbBHt7uqxj1UqY3wH8Em6vnjwQkKncDgqW1rZz8hUjqRhW21zk4rzZFEhT2Bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zrkNLK2yeNGikZey2fzq8ZxoVTnCFQKpR9Q3zKYP6kNuR9Ke8hjRncEEbAHifC9LactFtMpctdeHJTDUL16R7Lc",
  "key1": "564SvnEzKZWtJezkp2RBhN35o89vpExqG1ALuAPMoFJQhxhjqU5pfqRT92jJ4HmGRkiRyhMFqBX4NmvTfW1N43vA",
  "key2": "2CGMd4jGC9RGukha2B1vwYa7XFmBVXSVLKfGbx6fr7HqqH62c51YzYQE73aDm1H938dPp4RWwbcUkSGnvkWFpnLi",
  "key3": "43ePhGYKTzEei1RjeQxcJopPKADeCEVLGGGqcuveHJNqLsgDc24kyyih3uwupTq1RG2fYSidnE79eTgsHU8v1pGB",
  "key4": "2kHhbBHrrefhwMMoxtVmfhtCVjfKRuWfMs4X73e5HUPMNhh9e9F8F6JmgZ5k1Wk7s8pRfD8wRTjegFYjTQfNP6bn",
  "key5": "3MKAeKMuwkzJUcMJMrSamT5vRbdMoMBFc6SKPt83TTh9joygLCSXeGkqLSy22uinT8PBNvzNjUvPz2pKx33XT9ML",
  "key6": "5DCVtV8nKwr77EPoYFQyNazp42vdr5kKNXtcgstjGABFiiCbbbeUtVcFAZCqZsQcHQpjqyVYiC37BunzhhpuMZSf",
  "key7": "UFZXBxTJpUnPS6JVq4nYEpRvrCh3N3RNXTv5b97dtsNV9jDP13qxbxcFfMdayk1FvH473wYHZeFh2ATheyb67SZ",
  "key8": "QyRgrVz6NKh7xNLEgCRoimQb8WaoiA7PmLuToZTZWttSM2jVkY52TrUKGvR4dgUqDUfLFRuWUMoarz3wDFpf4fP",
  "key9": "5xEkJsMPjUjFTrGeZkTs9CsoheqXs2hWvUSFRaUqfCp5TLF2YtV5d8nXnqMWQrKrdMf8HjgMGmhgnhbG7Ky9ZFCP",
  "key10": "3AWapmVpKxtV1aVrUhWx4WurVN8hCJp6W1SpbZN2L2utF8yfNNZ715hoW2ivtxa5dANFiyEpmb2pYk17XSwnHHkD",
  "key11": "2oogYhJi4V3jQWXK2NcF2zKj9HZjHedqrWthyruAwf9Q2nVStu55NgPWEH4uCcyfXpmb8mBMfRt1GybReVsHPvte",
  "key12": "48ZGpKJkGaShfzk3wUMgZqpUXG2tCxhTUjEeToGtTd4TiaAdKJC1vuZEcG2XsHPc7utQfwJSP1e2tabUr7BSJw1s",
  "key13": "2ZyHc7RdczXFvCD4CXWZNgfV9FTy81mVoshPz9DAnJRHnAHRp7qM3GXRN7BwMitRJ4oV8TBeMZQQqkLsaNza6Wsf",
  "key14": "5SzHaPQdSsrDiYyRf2LpSmx7xnUvbwe1wXWe3qcBSDW8j9Zh6xt6SurMNPWTHsZ9SBPc95Vtza3iB67oR2PF1iaP",
  "key15": "5X2mcnMJ6xy8dZGeAnYrew3J3jwFXfjARSai9KyyjJ9D3aUunnLfYhCWjZ2Phc5ef9Dh2kfLaXCi2myAEH7um8hD",
  "key16": "39pcZdLSTdfYxt3uSmUgNFiXUjFPrNb2PwXCqTJi8fWdJEwzCMouJdimQUGryyWq9eHp6HJiWnXuNekRxUNCzAKo",
  "key17": "5B2dK9Awk8HnuLPcjBnEzotqzKmScq6mck3dJqG5dKU5PqMcNiLPMM5thxRpCvY2WvxkENiB4qY73xKHkAAk8zSM",
  "key18": "5C2ibmpSLDYXo4nwPYdGjk7x8u6nR54UNgnhwfsq2QFqKs64373ixDrq91Ywfxqaq5mut4ZPDXQNy6eFttHEp3YS",
  "key19": "gVT2QumddSdQyHYFRPDjpeTcmLZNfXTfHvbMieoyyHcjE3rgWLXqCNeYvKt3okkEeJsnoqv6DTqG3S6a2WgsT4K",
  "key20": "3go8AikZ34PenPKy6w5gFbbNrrKrzkpCKqjJcqf57TYJC1Ap5DwthicWv9HCayEf6of4DfiDdKC2SiCHZcJPQHA2",
  "key21": "2DX3qjzV4ALPqhVBXrsXEuAm9cm2rkE9VfD8iGs9PuJh3s1gSg6Lq6h4E2jWieyjmUjVTAsk8jDjktYhXCjgt5G9",
  "key22": "ZBr5vh3KYadhomAXkdzALkVaUH6J4xvVpZ4Q33eL18DUSA5eQ9qSQxC68Aeyz9oXnYAZ4AHaM4Vvm1Rjs3yWS4K",
  "key23": "3wFUjG9zeiamZJ8JKMzqa7bxBH4HVMaJgKcN6VD6khk6W7eZXnN476Xuf3Sjh9QTdnAHkfqf3HfVND4PoBtGQ1Fc",
  "key24": "p5fFK42CCTVhrZr9f7ppRVxKf3XvQGa79mvtynsMg51XC2DXTVYNwMJGotM1RhkSJPmrWjB9Lp4Qmea9HUjB7vm",
  "key25": "365YFXAjjVJ6PFR4XxvqvsH4yiLAkVBmZr9e3VKDxSa3qsaMup3xM9Q7grHH7wDxS8KfD5tR7uJ28Puux6wUCgHs",
  "key26": "57ozGeYnBRfkvgjtXq69w25oMGVXnSAtFYafGCxTQ2sziC62tShjp5NomNNnkeuQoZ5BK4v2UXsqcstiCqJuZrD3",
  "key27": "AWo7qCmBQLwKVM7b4RRNhpdGPfYbSeULWtTYpGKQmeRTAo1PWBrMBXYLdAUcQLt3kPG6NFQdbAzPpqD6VooaoTJ",
  "key28": "2Hnp6wGvi2DPzmrqNdQHArDGsAk3zsQqxztRctZMvhuXt6x4uGKPtzvmNhPj3bdAaVk7Chhk8CnWb6h6NGfaJgcD",
  "key29": "4Q5p427kEaxFDRyHEzwvxaquHJsoqqtUZZiq58w9s9fU1nR7dXE3HiK9i35deGV63vq73WhLQKNqy9xY4fdfiheB"
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
