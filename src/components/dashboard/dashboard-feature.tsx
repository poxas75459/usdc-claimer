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
    "5DkQ6gq9WyU9Hs1BjpEZKwV9y2SMYrZUfymJ37432KEhmtY6y1uNLzVhgzZ6YjGGW6vNiXfkPbaj9i7z6zByCHqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ciKe5uicJ3mVU2x9PQu7N3VWC5SKiwcif4xgC2Bk8Jpu1MLkH9ngYy4JMBySSEn2paAwfKMhyFKcYj6fEhDtXVu",
  "key1": "diFNFdskT9EZNkuk9wKoZkG8ZXvAvM5BmnQN4k2GDbrbH7ffCJMiJ4AcLjUawkHF2ZZd7QpuTKVHgiEE2wVbPL3",
  "key2": "5uRL7kXr8d2fFJSz5oqoVaM6aakzfvo39dC2T7N61rQ3NZNgqge7gz5UnxudLMxioqf9fWXMn9L4QLfFRT6xf751",
  "key3": "5HsncGEd2Lmq8FPWiEugSQJk8fkkcEiHRerLT83nrMQtgZuxUxkpTC2sezx5EeneNZeBnfBsmXS4NxgeYkrNAW5c",
  "key4": "4JSGNSHacA9LzjH69KWrBfcZ142N2nimruPxoKsP4trBWrngAmo6jM5mFah4AyaKcsFm42UKijqDDbRLinjDAeJf",
  "key5": "2YifQVsvH59XL6eB7FrF9ay96qvWHT7fw2CZ6byx66r5MhZz9mAEGCN88CdZqbmau6fk6VDPdkCsyczLp6kwpWdu",
  "key6": "65MYgPHM3bYiHiXVsZCymWivZQcnfuaTPnVxhjyXSmdxodytte9Uq8SwTQwx13Sm2HNVrCqKGPwPPgLTdTGTp9JD",
  "key7": "G1jEQUyzbKG3tqFaNKTeqcLWDxXE3JUxL9zGD9scWjw5LKaEuczsvV5Bh3HaGyUPgzgnRvjHw3CEJDQHgqxjZJx",
  "key8": "36BuCpzG3MnmjsfFA9G8ueX5JTX7KutrSt84g9SDgXasTDZa8TjxjavWg2ofC4h8JnXo8hjf5yLQM7RkEufa63VH",
  "key9": "P5SUHvA2GErRxd7w4mngHuMPcG2XLGLGteWcWVWqBPShD3yPM76S2jsu86HscQXGKDn33G6hSN3BSTjCGQ5vubZ",
  "key10": "4kmDQj7ch4yQwnKQCCWrdW2ujCyKcnFyeWZR1knxwjggKWnkADSiwtgkTsoYNLzGXQYoZ2RPi3WyfqzcibX45FWc",
  "key11": "5FWp2xhDqhNWqKg3c8fkmxWJq8iQCJPXQjfFQDTKjUpXADCQispodd9RRNDbKirtSZF4eDj3C16h6xXNFy5ZKUkd",
  "key12": "tVmqPTYKC1qRnfQS8PTse5hGJzh5g5QNywX3WxvTtxi347nqzQqPWSLsDTXR5NDMEgT956dCrqpdKB2LniSmPAw",
  "key13": "zJiD3CHqRNTSdh2V7NvQLvJzyCfEJ3bWF6ajd4k5fbFuWFVKuVQ5cXfZYQhKWHfQypjkHdhNu3uUNoAZ5t4PdR8",
  "key14": "3asTvAuUjGMqZ2csFjTfVqKcijRDsQMzSgGpvMNBcUQhmXF9WMoyQ9CfPrgqkeNm9V7Z2vVnggAmvycnLWHmPAVa",
  "key15": "5eQUbKQL8Lwnh464aaEDj9A86XCns49Q2xtHQfuD8GUtCdpLDPZ1V3vwYnk7hCenkpQWpf2X1vJjomJK9Q5n5tyb",
  "key16": "54mf77gG3RzV1JBEGauDxqu8AjeDoJ1evV4H8vxegNmhvxnsvboQXqG5z9ihh1sQeYEANAJJtRPWCbgMN8aWkwuv",
  "key17": "5KeWWPMitrboygkTpPHxv7xrATwX4rsX1fHV9yzthzjQqooaCUD5rsZus5WowQrHgNaLC9GjeNeyk7m8eig2yJCR",
  "key18": "2dXc7gJM9ojf74ogbYph3JguyVnnEtSdRmuzYkcbNiMBCsDaoX6QQKVXmRC7UjoqfawhB4duapb6yoVq5DDQakbQ",
  "key19": "5DnhF9qq5vxFGhd3iaM7RETPr6B6mmNf3rpmL3WGtRoyk6TzVigMY7cxnbjGMCchmRGFVSdrQQUNJVEqXRWnL7pm",
  "key20": "4Fx6nxU2Xarnod8W9wcLhjmyEy3j8aogLLA5oxrLJAJCPMqNaoSyP9FMEX3zugvT2PQQjdJkh4b5Y2rQpvWKKijG",
  "key21": "3kwyApegZPwfXU43Xwb2NBUDezDAuiesuybz1LskbE8H6shDi6YDpT32Beks8EGpu32GzURZAJJ5JNw1STSUzRqS",
  "key22": "41dAKdWQWkaSmriND7LWVaruvUEXrQHGi1vk6udRU9XnJB9jUv8LRLQxhu7q8vEckznBXVwbKKVPK13Ua3Gf7Mgn",
  "key23": "4EGYKybSEnSLimVRBTLwf6nKtmKow2LRRDSqSd3xid1QkiHibyV4EyKqc5gB3WDL7DR6vHpfCL7xmS5ieEaSzZmC",
  "key24": "5xFSp513AvdDoBGmwnqKnxL3bqVS92t22E1CSDcurtdiSchxSJhJCsV1fhJs3nAr5BMMtNnuvKfH5LFCXE6rBW8b",
  "key25": "4w2ziHobqnB8w5yQvdpFyXQP1LHcESYSQrkNMGqctv8wieFkvZNHU7GPvrxJk2toKzhFcsL1Q4JUJ4BwxgBNoAmn",
  "key26": "2noLT5DefYKLxy5xWJY6qK4fw9MoL8YhRfVeXovKadykRFVJE6zTVZkAVKJKsSSRwajnD22jsMxpZ9rMsCkifz2M",
  "key27": "3e7FZtHs52GM1F7GgZUDRAFpFM8mtqf3Vsd7PH3pMT3cZKDc9QknrCZwEsatMuyH4aQ72wbT4miCGybh211GRZiu",
  "key28": "63a8VZrc1CQe7CgMhoUgE2vkybtNKk2yZheteaEuP5rVr9R11kYguQDKqUmZcRRhJ1wEm8SUsVEWcndAco7NDcX5",
  "key29": "4ppHfm7aHf9x9Ji2hSrFPkS1YmHHvFam4r5T5cj8e6s3LYxkazJnUoaunC6ch7Bp2rBkd5bm2SzU5HbSDU52TnS3"
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
