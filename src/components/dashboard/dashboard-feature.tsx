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
    "2fDqbJnmi3Q1PiXFS7jufFSqAKPcE5fzdwJHqZzfUB8yzV9LgrAqfcdQfXADmKjNVJtjvT2tS8WKm8vcdwijHLKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W6fLvo7ieFuzE37EFYXcPi8bSnZhQEhV9QKg7TSq1LpddCLbYqDx3gToLNHnL5UVzGpFBiXfjkgT41imCFMnnDr",
  "key1": "4Ngihp4nCGbfY3piocdT6NTmGZBsgTnmn7accRLJ9zHpAV6xGP8oeT9we6D5ur7AaWw3NjCRVcpN2zxgX2gzmKp7",
  "key2": "4BoeeT7zDKagA7z9QznvXGFL3mVRv9jGPTj9BEvqEo6ckEoyBwvVw3X34RfY1QuTArp6F3EKhiFF3wQansN3dRiX",
  "key3": "3cBctmajqefvrrJNTmBWhE7U3hDuAVF7Z2bvAmn68oESEhFArq1y8MKQheoe3nB16WxWWqc7en28znn7qgs1zVL9",
  "key4": "3dqiKpeaNFKCEhfChctD1dJ5vj5Tge6owRqeRTzvtNwyUSdeRoQokFnEZmgtT3QtLEX3fKpbcimdsVUr9wchPb9S",
  "key5": "5yLF7jcE4PeqCZfY9BHbTGyiijcPu51HCQcVzV47ipHAMsXt6GB3DSRz9SjkbVB3CLRntMuhUk7FbHvxMfQc7Xax",
  "key6": "4PKVTU7Vqti4qmUfs33tBAWJ6hMCaEzuMeYeMrXn4DrvAs2XsxkhrdnSvnQtE7R17p9Czb1u3MfRNNSxw7ecqywr",
  "key7": "9i7QWUuzNJ9HDxHHt5bmw2A2W9oMEFZVp3PyopQ4aFz3rToWMgCm9n73CUr59bNMdD8Sj9nB1nssGxSuUXgNDp9",
  "key8": "5FrojpkKFQm2hT9mQXPYpqeJAyRt9bXGQPF4p1NdXm2g2yxBrU1PqzZzgRJhZ6DfjsEuxTxF16a7ML4nig2xdQpC",
  "key9": "4QwPRPA4bZ3SNKkCtgQaSPpbg62MjAjjM1c44VbB6y7RJag7GQf146AUqxg6jF2NJCGp2JgVKoJkdWpmTodz3vDU",
  "key10": "5Tood6f4ESfzEQ8dSMdyUjvX8gfVgTFQgUgPbmbxdR4JdPg3pYwXYW2mRTBhahKNCfU2JnBXF3ha5FPQgCbnH2Fa",
  "key11": "4x6FiGEmLdXjMJN65Pm3J4JTKoLkSYnwZHiwVXgDwxFW6y7FJAigSp4ehufvaZkdvKB2xQyPAfAXunCJnpo4Q8Lw",
  "key12": "3E26HoQntxyNRmFSW7HVs1refumPidDbHhda5XvxuzYN4LC3bPBcLaFK3iV7vaoDHy6hbh23323swPt8NjSmTvxr",
  "key13": "4gRFjPNpT1CwqzGTFsfjpEE3vZLf44CkZq1sN1d36rcX7YVftT14UBmNYhHe5aTY5pBbMm2csqDXQhoTEd1gCxGw",
  "key14": "5zsqrFSuZxvRK3VcCyy1xLEubWLnT8MEDBJ9jZrTv7Gq1xkXBM3apR2eZPN4hXUqc5AazWpP17xQqcAdw32n752Z",
  "key15": "22JN4Bnjbf8Z1JXaGt6eZxPpnYWbWmvqugGNn6QfsWEDhRAZwPUZraiCjo3ro2LJE6F84Qza1WxuPe3kUjxrhFAE",
  "key16": "24L19XacrzFgYHUPNszWr9SQcxwgrAYNMqCa3TcCofHfuEitT4M7v3ieLTanqav3FmqWMxQyyvg6JJryvqq33Bbp",
  "key17": "55v5HnXhFGgVqsyBFvL5TUeCMkJ9qL5tN4NGso1isE1fBcxgSaB52xsM7qmJqN1yrpUpuVQKLKJsRRuvV8xcAvgM",
  "key18": "5aC97yySdcD8t6K2iBA8adzTpEwPMBCQ3UnkxBCMtGLtAmazKcM5qvVoEfFYBJoeafN6Fp4VLAUw5XxmRsfZ8fwX",
  "key19": "uaX1ddSWUUxtnHhRsVKVvbz7GXLx1TjbBgbU1byUGHZHP7qvFXsMagBK9EitSeEvdsmVK8gq15JF2oQTdQddBgp",
  "key20": "2MuuFG7qj4uXvjb7wVHcKLi8XgHtQSSepqS3huNGDLJcK3hR5Po9FXZqbcPiGxTJBpAy2Y2LVgMmUyJHLnN2iGPD",
  "key21": "GWPDHpqbGF4oNQFxGXAEJjv4aWhzsrztYmPYSes8a2ZXfo4SCFifTDNX8NtuQq25CzxXLECKrVfDZ5AaL2RYT4Y",
  "key22": "3kP2JZbpUHDWP7diFZzXVGuEkyCgnSrgTYJU4XSD4VtreP79LvXRyHgQfDYvqT4WFWZUseeYwVLpSxcARJvtDf7r",
  "key23": "2pLCCEA9wbjdsuJL2bqnkG8JXMCkZn91w9GpJ4vhLrKZ1zXASYqfqLVoXPwzugHdwK6hyDjYKfByRYARHwdrU5Ny",
  "key24": "55Ypem9hoZn8Uf2nd1kyCRV8SoTJV4wzj9obsfkZkP3yX3VNBVpQPte4XUpvLUQeUrgvMnnwMPsRq5CYzP7sPGGJ",
  "key25": "555weDBYVRE42THSBkpGxoeWxScLvBrXr6KiiYc5pqNdPqhaF7AMF9b28ZwRD41xhRoF8rRqzdiEmTNWqDhAy4MG",
  "key26": "2daTYYtzseRp46RZD9EcP7dwWs85jLtp75NgcU8PyE3r3FMovP9W2sgK7pT21LgwXUEvcXVp8NAFdKuNBSRNA7GC",
  "key27": "57GnqEhDYrNWSZqdpteVuixmkAjapiyug6G1wKUrrUGV39NBWaJA6R5R3AwW4pKmUTfJ4mKyWK6Qdh9AcJUhi1A1",
  "key28": "5F7JUoxfpLCCmJpGgMoHRRdjAVRqPX9LfvAmYFNm2cNJn3iDbWxbR3EFt4QPHhA7voVg7qEsQrUGTpr6hoH4DUon",
  "key29": "497Uh1zjwBRMZtVyir5be5qdzLABVNnZ7wdAfJk5tXu1ytbi64BB2raAaccDBptKbiby5bjs8srd3b69RpiyRewE",
  "key30": "LcR4f9UYrZcU57sgR3USXua2jkG2nQf3jFe8pkzKQeHSzjuw95XMwbtvHufCD9DCwTHrB2uHfWqdbtyNrLrGg7m",
  "key31": "4ETFMCMPjUTj4PrnBXs2bDH9r4LBX9yRZkN1w7dakikS2YSHUsuQoatnwKK1mxM3tGE8BzGpErZedA4KT4v5VXoY",
  "key32": "4kgbvQSynnfvssGsHqdNKFnJVYNQkSWuqHDCwDxFJNHvFdXjnvoVpoisaC2oby8h1NkxrjS3B9jALFBtdfDXf6Xq",
  "key33": "4T1gZYnXydUdEXWmkbdQdw2i5tG7BQy6viMY3TjV3FcUNzn7A1AUuBDEC2YDPkR6kadPSknj6XK4A6LFALPgjHm6"
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
