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
    "5eK7ZNiq4sfDVFZ7PaoVhHBpi9BXXYk41a9cyMhXeg4f8sYzKhfwBjoGJpREJXH9a4wWrcJVWJAjkorieywstdiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pf3qojtQmHeM6tUrf6Waq6bW7jBYUTdh85snZuKWvKLXRrhv8xsMo91VLQpPgJZSVcyVGecKnDMLmxLdMyq9L3P",
  "key1": "GGtjYfZFdQbMPAqLK9DCfUCWMfq5FpDX3gTaEDseiKGtN1MxpEdFNbRW2qoimhkXehwHGNquS9o99XzZy9vshNv",
  "key2": "2Um8Bwc1J5R2NEr8fCpjdupqiYBW9ZKijVZzz6HXcoqGKiiAJiy4zZWfS7T7cuyBwMxYaqN7E1KSVeUCFvAf7oFf",
  "key3": "5jEAQHLtXyfqCDFTEgKv432jAy8Qh3cEUUcwXjmSqjLeNZckpQDwSfMqwBeCBEvs2xEAVyGTzu3NrVycSh8sXDTN",
  "key4": "2D4EDfBx4y2kbDmz2x3VxM7zXDHNMF21s9MTTDrCRwE1cTUoGjt3QYyqV6LVdsw4dBhuqoXCXwqUDuXs9ECpuW7V",
  "key5": "5pWwSYME6qxze46NbJpcWW8irMwiQ2LmDiZUm6L4tpEeXg4eYHyJhsyCi4P8Jo5YGZpG7DXdaoJtQhBC4VtBdS2p",
  "key6": "5FSznpz1WLCTn3CCgVQPZ4Bc65pEUD9Yh5yE5nUTNpKFtiizHBrNinM4nXd562S4oKcbg3MjqAeytpttmhAVVWqC",
  "key7": "991KM1MzTUVdWffSKM2TJVNBXLVsijLM1st9V9RPLDVCkMqd34RkE58afNfdutoWn8Q7YJW7t7i6z18yHJGYPLt",
  "key8": "5M3MapEVb6X7qnmQtWufYVc9Utv5tnpVy2ijGxuqToN7yBcidNP1X7V2bGwupqJjX5WaGAd8BLM9zLin4Urn8Lzv",
  "key9": "3FH9Rd54EiaJBVmdkRwmodP2nnhNNccADE31mn4JchHdgLBuaFWvUsun4kEUjDVApVWzBQWVvQsGQrYRCgnRwkxC",
  "key10": "tNRcZqr1cCQpmuXV8BqPLSvx25tqSe3yRt8YiBGXS8RAtM9fGXi3qUL1rSbM8BitvjxCzmCuHbybZ7f4gQCaUEN",
  "key11": "3w41eQA3V8VUfPacrsMndWR7UcYVazt4bgdgULPwqiJWEUorTAug3LEq8oQfEJj9ZKUj3erDP5MQmmcZyXVsQKTn",
  "key12": "35EN89v6ZtCLSCAeiqSSzVADiqBJC1daLyotSo7bH1TPun8BQUF2fAiRPcq8hGvfHcFP8kYaXEnMfoDWxqhGsavy",
  "key13": "Q65FUi4QTaMSQwCZZ3A2NRoBm8kF9JrZQFuRJuGRhicY8Ce5EmWF3Ca4nLRaPVivibzrSd9usaqxS34SRHG68KF",
  "key14": "37L1hv1MzLXvxrHnb3tV8X9m3ysdYwP3dvbPNsAKR46bi5a7TmcN7WHiCKDYMDsL6wHMPBbcRBDnpJryS9Qtubqw",
  "key15": "3xEHeqDxYnavbtVWtkPUbza8gVJ6ftnf8Gakq8YFoBSGTF3FwrFSmWrvs8G5QSJMFKRQujg8tugXJ4BLQVJt8cMV",
  "key16": "5KFszs6ax7BdEYw2nv8CVQhHxxGQ9HBiaedQ1wb7gmLg8oxkaKSHKnZnn4ia1VftBeotai23RKcPEM6jkxgXSRAz",
  "key17": "3J6AjdmeKKPfzAxEjr3ska4VZwLVPwBQpcXMPDPBS8mG4T1UuzjQcbBMtAuCjBev84VyJb8LP9V6wK9euq3GuGfi",
  "key18": "4Hj7Yrw7yo67UE2WL82CZzEf4zVCqRKtfdN2Fd6WZTeGrw8UykerKBfmbKFZ8kHkyXfWTtcr9mi8WKN8UaeR2reA",
  "key19": "3vTnPuKXZ12jpZMe3CUuN4MCeS7hHLbV4T5oWWZGPEiH6qgaooX7Pw355jWtkR6P7aNMJbGjk9un2bJGiQxhohik",
  "key20": "5Ng1U4DYLVv8jyA5mpimTysD1kzTuJdDhHX6Mb6zvA2LLkfqK4sHadggcxhipgGxudSqgMhoP2KVV9obY7ZEGgfb",
  "key21": "5ZEaWmjZRGYx2SdjWV65T2A5dsVMtZbTnx9eucXNwhzQk2jgwTJT7QYvaWmtSNCa7rc2ReczvsyRQSTPDhJSJiei",
  "key22": "51YLMbxvDMEvVasm3eATNjeY3ALpkGTmWduDb6briS4cUZUo9wL9kEE4MVi1UCcjuMCEk3G5PmLP3L8aMhZobR3j",
  "key23": "5BBeyyNox6mDYng6tLVzTNBBN2nLnDBAfsomENgUtKFSXZyrQEAQM69Du84Mx2hogLTfF1HgpKSovN6gGdHZb9wS",
  "key24": "2y6of7XJK9LAgs5sWMT1ssvEXKaU4KTpAi4RVbB3MKsqgZsKsjSfK8nAb3pY1ECEvFpmbajSuqXbM6pPpEtFhkHP",
  "key25": "3i8gp6cpC4SrqyRzHBtGvd3HJUyUe4iZGuHfxK7pcC8stVcWJdMd9UJ3Y1Hk56HyFvXW51dH9hN26ZWiGyqGn19Y",
  "key26": "2Z2eqDTA4eFttZmZKSHFcSMp9fs42MuXvj5tXaHbnYNGwbcZL8xjGq7q2saq8Tvu8K3TFppFeuBJfrgNaUFYaxbj",
  "key27": "386rhBtNqFFGVEttgMHmmGYFVb44nXCGPrqNGM76pho1wEoZLgFuHqAeopKJvjJWYPXYa3d3qeZYXqFG4mSyniEn",
  "key28": "3gxCKC9MwNrkXNXcM4uAFaVYB1VA3jVTtfmYJLcMJQRpSbNwAYVq9wHwRKXxqJVRK1oMHjZ5zUaoLYw6TtWadhfe",
  "key29": "5VvNF8ZAvC2DW87uRSTvtb7XJj6HUDV1WYp77wUiZSZR3zkYwujeCXzZvPFLjA2fRTmEbms7kKwFAZ6DEkFMhpLw",
  "key30": "5FJNzJ3HozHbBfYE3zeHE4QrQptJRHEw9tZLcEQzTv6jhCkpLUvrRsV9xWr7vi6yKZiysXvWsSNw8nqqvmdgDTYM",
  "key31": "5gUWoxgdENYrKf2jo5mGtsMT2HuyJXvNZhWdmzjcSWJxAcUESSLfnYGG223Xrg2j2fvbjNzfQgf5qpB558oA18s8",
  "key32": "3FwtTK4oxTH7VVwk9nZeWVavH6zUHBV2r63HF4wL7j7psrAyMrenpvdKdtn432K5SH2BtFEuS83znQp1sHsS9dUx",
  "key33": "5RYSVH8jLkSbiQnUyRU3JhAofrNspcjuuEHr5QSVLKP4CwuUq8i8eX52ct19MrgRWKQxdNYzZmgBnEFEgDDv3vXo",
  "key34": "2ZNkLRjgrLXh8mvBDu1it5LpHpEC4MWZHyNkU7pAnczsnUL4A4Vz9KGPYnBqdPQ1wmaykY58dj5teSVjziydYgGx",
  "key35": "2vyvRjkXL2NUAzMXuhgL4KEUcgtthfZxoFhfN1n9HKXy8zNFTqig5J8Bzb5n1YNVj1Cnpq7ZdVjdP4gfWHukAW4a",
  "key36": "mUAYJQfnWeEDWwHxzDLsZdPAXxj8L3nyvdv3mc27dLtCNy7z89yEw7K8DdzvDPjcHbxoKvGrgaFm7KKur7p63K2",
  "key37": "5uhpRHHDi4fKZAN2wUbSQUFdm7LFkz3o6dYvPjwgKQfN4NPLffPjDLpyRP348wbwm98ptwPu7RWy1EZiYbsNiS8F",
  "key38": "3h89bFtQPPrAi4CEJJqNgbj8BNWCEhcTMtwkWJfa18nyAcgmybXyPF8GeDZKoL6aRJALqtbemYuy8awHgd6zwEfy",
  "key39": "2WcCS4hrkgMKvMFxV9pCkt2BpkuhQck141XekLvA9AaKBj9Pf2irsriBqjcGbnWbesQUqjfAmmBzubh8kzuXTFPR",
  "key40": "33scKprhMwEchwG8g1V5nJCULDTn7BUh5pkVq7JtXR7peVH8QTxNjoMovq1zB2qi8uf1G4aTPRALYLYzcBGMFsCd",
  "key41": "5dWgz8P6TaXz8SotbrhspdchnAuongKSixE4SJMmeXFEtBJVZvkXmyqpDaaUkA7erVNdQTu5fjp6YxsMf6zdSmm1",
  "key42": "455JJtmCmjunE2PSxF6Pj78ioVvEwQWB5ZUagkCsgYTjMPyEKday1eaWu3QkaDYSXBrprJv1GsViT9u6u4aerjVw",
  "key43": "4DhkQNwTDqq5eTrQdfQ6PJDnsVGNGfiHFpZatbFstL2noqkqZMGHyoHLEddU5B5vRkrZ3ykVnGVrAutZXjzXNzKu",
  "key44": "4MMaNCLp1MHc6WeFkxHagdJPZnYEskG91ifA9WtZctqHKwxUAQhjV31CbUervLpCYNmEpTZkowNu9KkfrTg553Kh",
  "key45": "5xhp77hF1bGyGKHWkTxCrUjTtt9YnVYcidN3LFu8Nidiah5GA5xXzqpRKY1GFqSB12NPMxXMUKv5HdMDhHu92eFL"
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
