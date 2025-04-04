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
    "3YtsZ8eEiQBaEgVGxzhecjx5RvJx1SEBa2eZFK6CiPNNJdrRaVx6thdTbrSMU9rSNfuEauMQYnvtnnXZBktXJVcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pYct7jJVLDgz1NikacZewfxW438LPeDWix16LzDLKMKSRKmodMTJwfNiZNvCtAhZdDC3szjXgXANchPZxudaW3K",
  "key1": "3QYYM5GBkeofoVLaoTQ7GCYUL1tjTGRDfBNA3tuAfdrXexXs11TRXsfG8WaXNdFYDvYe4jRk2dcjXeDcuFfxtDWa",
  "key2": "3PuyqApyJzbNejUsob6i8VBPrUkK7fny2YPvBdYHSDU9i8GYUK5JyF9erc7xQKzaKkjpfjSXtuQFupgQ9nokcVQS",
  "key3": "63bVrifkacsWa9vvMJYo8ZZZsPnQgrE6hTx3fyot2W4hW9jtmuoEqrWZaXfKPUtCCzRez5fWrsfuw1AMUTFggxbc",
  "key4": "2ZMPnW2d8TMB7LBoevZpgdzowAgEEKG3wTunFKgtn2RqdcnKdidxsfdxgBS2dsnRp4Nhm1pvftZ6bNXxMVKeZv9F",
  "key5": "55UNMGuDcYBiWj3WVCoUMLxEdZtiKQWYeVHjYT8oaHewbZYYuzjgRBEvKzxQYHHUQFDcg4S53ArQ69e1vsudFSvY",
  "key6": "4YuJhgxGVgTruD4jQeMf6wMawcmT5Zs6946kUwXSs3MEkcy55G8XWVRcd5TLGX2jTQfCPSrFUaJBxyqtipFXKFh5",
  "key7": "4BS63F63uCMGynkUuWMJsaStiApG1ukNsJciKM4oYvHivovC3ar2fAoAzBWCYr5DFJm19W9M7ujJzNNdiXu8zkKm",
  "key8": "2AJiZEZQR87xm7HZeJDEHeHCq4P4kmBgcP5PcEt3AqgPcZYBNWEd5EakgEd3k7AGSGMVpmnhbUHfCLjYYGVKE2V7",
  "key9": "oqUgFvynj1WaVbW1ULHSmVASrmXNsoD2941H8VYqXhr5zjaQzpjgqaSwByukgLvfAjdZBLVTcoUB3cJeqLGN35Z",
  "key10": "5PTACgvKhmVq9gZ2S5LiZA7jgTFmHzC9znBrCAzK6uhpTRS2zCj5qG2u3o2mQ9wuPcncjA1ZBryFVDeEEui3QdFk",
  "key11": "4YN6uaeDwU1no4megsmY97akZx8WKosoS8kWTQr4bVaiaGHoEYZxYnqQPNW6PPsDELBfWbfZcqjjsps34qMYWuJ",
  "key12": "M3e2d6kp5cd1zYhXKQFcg6VUfLYR6Mko9McXg7r4iPwbnkcuLs3QyXNLQmJyEWhA6WxQL7Ts9shQY8auvsJb9nd",
  "key13": "5Gc813oWgjH2wf1nnNTQyB2emti8xT9sNRHwvqBiAEmMh6oJTjkp1oDJVBoPWjqHN6bwbs8AEex1i8CAi44nZQmV",
  "key14": "4aoQCW2VU7pERkTXSTgdFh33AYiDJpKq1GMYjomsna4BqBSvFyXUnbLo2LusL84zrYpCpfLdTfdYqFGQ3sxPN4hv",
  "key15": "4Ty53P7vdJ4EHgfVBUtU9VMNxisjK5JGWTKCSd4nH8dk2HGWQn117Kqc5XTRh78F1pR7anByCkLSsppC2dzouTTk",
  "key16": "3Fgh8jp4573KYLG3puTTnhFakz3dVJ44XYQpKPVccYfTKWuQq9Xot3JcJrxzg5atWhYbyfhZK4tycdyTpbmg49X9",
  "key17": "28qEujZGfERjuKUyLHZ68zDsKrrNVfxskUwED8aVTPefvj494BzfvgqE8FysfawJy3nG1NWreyDZVC9ScoC82Xot",
  "key18": "5eDU3BbTQFgxG1DSVYT88KSSQuRjuUTXEEuUXtauGT2DDaECV6Ep3wVSg9JDfsWKXrPwFMvqX444qSi1Gd8M4eDr",
  "key19": "q3bMu7ZVchPSngD53VcN9qU5StXkzfV6Ho9VZtf8vB5Dkkuvyr7vxh763sQcALDtz8fx2dCgZc9x5KqiPx1NwvM",
  "key20": "YNt7vM3SqU3WhFWntf1NbwXhXVjm8CwT1T7LcSVfMY6C4iYiWjkUJtTWFiDd8oUExi3cEjWbofokKC8iQsVXsqa",
  "key21": "2xUHAdTCBSUxmBb4D3SQbCPyqZZy54MaQRNuvptViQeSLsTM6PMkNq53DWB8SCGmfNHe74HfucCVqBgY8bDt4A8f",
  "key22": "kgofiS8Yuhxspyb8LFhwiP5dNc6dJUy7iiyEhm2mEQnU2TMm9FPD1Wp3onZYQZuvFJrZs4xhH2PA5nQWBaQVKEk",
  "key23": "WFofsmqRrPAwtsk2Z1csvAqxmUE24FdrovirRKcGKfurarRxTCZ8VJ8rLZ2DMUZBofKk5A7Cd65GfkasGHDssjU",
  "key24": "2rVwmFi6WmJFM62nTy5VUuCgjbTjX9P9ZL9AStuMasrfbFmYimMFpcN6bsDskq763CvgPdR59iLsrSCcAPp5rWs6",
  "key25": "3c8PfrkP9wSg75EQFBMjzrNBPC2SFk7oBit8UCw8JwjeDJCJoESwWGCb375TGiVVMne9z95BxijHNb9AzveAE9YT",
  "key26": "437Mabc4dxyjpsR4VAMstw3VdJAiPdPv5hcech1PVbHzAa6URWmLnhfiuGrwD1GQQDcwbainvVf95JDHxVUtoz4m",
  "key27": "5MZBf4kXNrQ4L4UBNPoqJ8qG6PQ4uor3J7ecpAzYu1Qwrbpzbm6zeGhWFLqXi8JWjqhZpjQuNn3UUkRzcaj7XdGK",
  "key28": "4KjJ8fa5Xb43rGTCVNy5gP5r4GAeBGysEP1mWBvkatndNAndNfxQzJZuVb3iySFGFgFMLCU61BvNbEAdhx8muydb",
  "key29": "oZXWB2PV13kGWukE5TwvrufFXrGKT1o8q6xEGSHNboDXfxn8gutanR2NDf693axz9kfupmR3SYPb1PmwgXqs1ng",
  "key30": "2S5sPx56KJdZp4jVwWW63RaCRnwYjE1nSictJ4wjBCUKYRLhYQkimAVEf6FrSLhN4sPQpuUTpvHoCtRkzjQs6jBy",
  "key31": "4rhykUQK4QZe9UhDm8YPEqYx8MLHoxztTkaTnW9EGah2FnNpaKV9ZHeqdAg8JGu4rWFR35gnwmgt1ALcz12SUKsH",
  "key32": "2XvY2o41n3TSWhsUXDfGYjnCKijwkd3fcxWcWVHP2y8qgsFMigXgJm8Ask5EanjGvXGx6aJDYKLBKjrRqgaMMtWX"
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
