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
    "ALcHUKeb9Y5CooYpX3VjqnEsvKtU49uNvsUwGBthQmEEMPa3D3Sv9TPScAi1PewLDRJj9UJhAbREdcv8WpxW2t4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q721PnFPetwJtCD1hap1uXVL5XRt9vLfbjZ52DqisZyePy3TqNnGK31uuuCCi9T52n7vPnGSiRjm2pdbFH1Vao9",
  "key1": "2nMNRZksuLUJGL3gH6TgosTQZBrBSdo8yZLPk4S6kKp6GroQY7t1LeYXGjpJ9RH4adjNNY1xUNUAjKMqTAFsbZCy",
  "key2": "3eXDAkmGoCEwZ5hKpvg3T1UPZRKQHrfSzRghvBxLwwgWipBtEo1tymXka4914KNVq1zoCTwhDshpqjkJ5JHZmR2X",
  "key3": "3rWzo6iA98ynEtc99FPej4mksyRQNxhSGQCH1omeS34rdyMdy3RiJVvCBbH9ZVMWgFLqvADYdscAYQPe4jaDcULZ",
  "key4": "2DUZhpzE3pDqHQqyfjtvY9N8eNUehEBn65Unt6sKpXY2Q7CpC6qkHVKNbyqgPBGCZAp8ETL1YFubanZ656aEHdqa",
  "key5": "5Gxi5a2rFycKs7J7rvYKcSkrstxfjdVSWw3HqSoA57xgrZYtzBtJZW4Y7cRRkGkWvH61Dsjfg7E7xbQ2McUKPbpz",
  "key6": "VzNtRPwzZd5Y2Wj7xh72kwLarKFRLwtaVGNUVB4uE7FR4HDg8TQdkoACabxvcQTkDzpdan9Ham1uDXW5iF1RBQo",
  "key7": "4aFZbZzNei6adZkYEejFB2atpK3pQpp4zYENnkR9KFB6Zfw9bqQuGs9irCtN5bXTWRxrMiVsYqDLDYSpgVXbZJid",
  "key8": "2vj73E1igaxrdFqE49XwUEcRJoFeTYiZm9QFQ92Ei5whFbAShvHMBLvBcCCwXpGCmex8QDVeSM5R2qB4zsC4itaa",
  "key9": "5GpJ9WQVkMXHV2CpMa53ChVDpJ7k8yCnoLNBpXeFPyCxADqsdbLxFkA3sbHJaoD8b8VziLWxdSbpxFdwRB8nHTCn",
  "key10": "62MvJo4T38BvFhq8LzfWJm9jYLqCtvi7B7zUwMBWBnBuVZsLhhwmnYd4rQQoYSagibVQNonD9Xquy1vD4GVpwjcG",
  "key11": "3ZBS3zhiM2UvQ6x4ZP1aEE61v563BHrfhpFtuXZHdeTxmwdeViSK1HMhEyrP2sXZapHHaYVW8XcDfjm2rf8UbLi7",
  "key12": "5KdyRVXhFPFmenYupZJjjJD2aMgCWnZYomMY7bnfNetrTg1XvsMa9K6Wtt1rLcUV1vxeuUqsMtrcpyi6TetGxggK",
  "key13": "4eZhKi3sdSWHJxiakqAvFdwFY39vbP6Ya1zqgyoUbkgFz4Pkgb7XYhW1u32FkE3Gy2HhmGsnwMfxizUxwUCzUwk8",
  "key14": "3KqUoSiiRAsbCtqxWN2iuZtrtBAfLrz5NNZZC7inSqrnfe9fdwbJaDmmCtxciFviW4vg1JssVQTc2vpcKVHYv9BW",
  "key15": "22Rp5agDfuCtyBF77W5jZp1TEFNFPNAGjPnGLtwUnDSeQFBpvwLQMJGHLcsg7bcShdRbiDbhmf9ntG35fHAvevBf",
  "key16": "5DrxJVeprJfzQQ1tZ1cwGXjUQ1VD4yiuabE3rK1Cg2KWvRLNjAKhuEKJ3jePywJYya2L4T7NwhpLztCCmugfuRCH",
  "key17": "UQ8wbs47u76JMNwFuTpAPiUC3FJtdNhYM1mDTqa7eBzcMQoVdN1rhoU4g6HfSHAK9qa67txjktoFf5poysHUtc3",
  "key18": "3DBzg3xNZoyiXkJkJcCkmh71hLCcUPuEpZ7BRG3tTvK2MQwQU58jrNSz4tjEsg8BMTMEx6JpcgstvGz63R2yZqEK",
  "key19": "3hY7hiuXGUL8wDNwdmE95Xg53TvwZkYVvdLzWpKN63C4DLtMhwRAqnfGR6CMM9yJrjw1CdtWhuxFxpV6c2Mk9kqW",
  "key20": "dAxEmZpffgQwJRwBSPKXBPoHzwSoS9mNehtN3P8UXAadD2MFbsQWGA5StPZ26urprmtCfM5CpqtbLhfC9w4ES7w",
  "key21": "2oxaqmaq9A78x77Hi6Np4yLLdUnnfRz6QsJM6FiezERUYwC4s968aFS6qNjfPSSEkcTjrPttBYp37oKdHK9NXNXw",
  "key22": "3yXfv1Efrpy1Gg3iCaPBxkLmVvumuD5BC4diEq72yjfWQz89AcdyWWrwb8DKmCLnpTjskEVKatBozszRercqR2xJ",
  "key23": "4S8pmLys214vXEWbByVfB16nkyxedCrEt5smxbdM1DunUHJhYuqUWwVUNkckct1Fo3K98BFDaceB99j3uaug1Nim",
  "key24": "5hMdiRyZmdWNPxZhEHU5HBXgTVLAQRkrUDsdNN536CJwaZBVbkC8DJvqyAjG88v9Zj6yCcjLGUuksAyZX4mw2SWH",
  "key25": "37N2zKBP4D767jf712DVXFw6ZiXKWhVppm4wDSt9cGaPeQZPtcc3qEzFiyvLdJxHQ1Pet7qxkAtDY6qSUyxBMTaU",
  "key26": "5ipPJWiyakyp42RNDYehgGDrkfN4CA5f3Q6sXFv9JuL31MAHwPbkhwf5EFGJEYbqjAtJFEMjbJEEvfekCFVcLxXP",
  "key27": "qAVQqVbYL8x5brgVt7xmBk5x4x2FiGUc2QorbArMY2rZuipvnNeAPUF3UYxDTX1TtjRASXyAVjR7jcvKCnkD3io",
  "key28": "2SXcbhvDsx9MPUPqst9M1uT7nwbCxL5fmdGL3tLb9CTuz25dJYvZUKau4YMWhzT46Xencwi22AJmU5VdqXCGrQRd",
  "key29": "4iR4DxGGrJ8dpPaz6ba7ENBZM6WvP6wnrCcQUx8BGgzVFotZ54y4G8CCBZJDZMRvVNHB6NXjcdb5ioWNQVRe1NyJ",
  "key30": "3WZSPxMb7JTZgDFEzUoTG93X8wqNx4QpCbr9x6dKtJwxUAa2zjxLQwN8QdzjRwJdTg1n51yr5t2a3UaTg8Bgg6ex"
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
