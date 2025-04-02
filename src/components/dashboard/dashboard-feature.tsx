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
    "4rRr9MHXDLiavn92ta8FM8Du6abFpvLKcLFF9tXnjUYXL9YMaEXCLz68cypyCewjD9asgr4KYsVdGEb4rMQzcvUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SD8DJtqTwWrta3xGb6DLQpUdcD9pUZCRX1ycvXupvAXeSDK68tUdqea9A7qpJE6ku4TaaoAPeCNC2vAvSeawZLJ",
  "key1": "5rSQfttNvV4tkebSRwF3CdPN4re9GmFAqVotf52FwLQyxNRrmkABtUfjEHA1Du6eY4r24KfDsMHaDZaj3uzNGUi1",
  "key2": "3jF2gqEoLHwh78tEhoLcwAvY4gvigvDRgA83vC15TMomukZ8TXcV5z2HoQ8EzUrsXHoRdjZnXsHXTBHS9FYQ3e7k",
  "key3": "5wzaTZhzMk9peEvYrhw9Jg1dV3uLNon49NiR2by36Y6iFPTSXTamV7ZpBrjdVtcZTgW4y8yXX9UGFBXBXpnSUVx",
  "key4": "5btzG56r6WHnqEV6YCaHwcZ29gZiAcA2vmiYDpEMApsGtF7WPQDMLRAfaxfh5GLZnqnUyTia9BKaBCrFpqLMXsDr",
  "key5": "2YQJrJzNYtJYiTd5xHBUcmnjdbJmKvU5retgRhqRAnEEuhswLZFEhQ8vhFtM4eV86PCVjYPBjvQyQNbnfvVuqKFm",
  "key6": "4TADynrQBvakCidGDto9TXUkpFMMsFPA5G47E8syDDLMqsmTgNUHkn5tiTeJQ5yfHLxuCXYpp2MsPX4R8fTS4TP3",
  "key7": "3nDwaJfpWb6PU4wxtLmvMD9KSFPk9VZKQNGXYCWhdL9dSiUqHzZjGiXuhkhmuGfNqar5VgA4DF3VB9HdbsjHBjy9",
  "key8": "cUiGRTibZNHTwEe5E9ybyr9MpdvHx4ZMEAULJetSdox5tybHAZypmmrLyn5X6v2G5ZSxf23DsZc8vcJ8zePka3b",
  "key9": "3kRZCGhrN9M9jrj5gMZgb8G33zeXFn82Gf1baV4dbxmRc7iFmg6ik981LQQxrQ2apU16FVyKkwdDeLBb4isGtoA3",
  "key10": "4WQPUeDhf6cy9h6m4MdKWY3RNR84QfpZ5kur1rL6xgnEeJkpD7gsyoCJ5BQntPvRwjRQMLspoa6puy6r4UmXCx5A",
  "key11": "32bxg1vwin9LXBAHh4rx52wkyjsuPiQpkqA3qkyxa8uggNKsQGZsbvXU6qHyCR9JfpxvCZtNxDHuRU4TzChdJFYX",
  "key12": "2LfyrzjWMRykqKChXy2ny5aYtf938XyCy4KDWUyAEmJXqW4w1oZmUx3YtVhhGcAE7PVVGntFBLgE1bUGk1rMfShQ",
  "key13": "4iC6e7wYXkh2JQh3K5HGYABh46V3Gre3F71XJfdUnkWpWB6pf75FictjVFq9gyN7rzSkxezMY4RYZ7frYV6AhrN5",
  "key14": "4SyX6kJ4cTvwhNoqtosCTTpWa5VHJFeCCWDjsg99zXsDvJCLj4YBF4a75uFGtFwGHHaVBEcR4o2FwqmDTjPT2EDb",
  "key15": "3rEk1fd3o5J2DjkFBGwj2GQU7aGdQaMfAeiF3E8YKL2Lrs8H9Te6jy8CWdUa9cR5X1fjX21gcoMbSM8krms4dbQi",
  "key16": "39M9oQjnzexpWbYA2122aDJtScN9v7nLjuYWu1kiAERKSufqzUQ99EcUA5mcMvHSMaVHYKw4aacZqnWRDW3ELaCi",
  "key17": "3jHqLP8a4K8Ne7fvpzM97HXrYKKWuEE88sAznAeBEPE8xotY4Aab5ynL1XMpARaXsFFub1uv7VwmnmyVt58U9dBD",
  "key18": "2jgBuK3dQs7XzaZX7uL4pHxraipnZtYUWKHp6p5AKKecrUEEXDsecFMPyGGWYjD6df5E3kCUPBfmLzatbYSC6cQo",
  "key19": "3m38ne842L676sCjfRXViriVNwEJ6K7oNetVZRiv1C7KQYBtR3Wj5EtTXm3VF6npV1JqenmeAX9fa3QvaTk5P2Fb",
  "key20": "3noZcVP1r65GTQBQnyLyw7KmZiKkBbhyTH7QuEjvLumPo5BKSoB7BUfGzk2Ezfo3pjyTCAi3ivPendSgKdEw68qz",
  "key21": "Fo27PZyZe2XsNgur6hpaE3UymudMMNodAJuLoa4sA3ZxsT5ejmB6LvnfgFhh8pDQrP9JMjTHBbbqmiH8DNCMnLb",
  "key22": "3Z5okUQJ9zdGtuuE1y6F5BV5txGcZZXAwP9M2pqerqdGqqhfttCZLNiz9bNC5FppgQfhK2fuUMgdjhWvqBWSz6rt",
  "key23": "3hMZKZswSsXQfpZEbcjRxEKSKUdUY9joHRxoBrF145ZkozZi5gDdgnUjD8deJ4aZSFCtoiUv4iQ9neMtgfH4ToCf",
  "key24": "4rK5ffrVMSVB6T6XUUVDw8M1PKLE2XfpYVz7vKd4PXAEU1ggTP65ua6ejYouvCJGfSpp1K6hNRFd3kp5cttABZ1r",
  "key25": "5yv58FFqL6ujwjC75JKWHu24CCe1NE9FxZ7iQUJFZiJbEzBUMc1JWi9qGbZXQ5xg2Hm2HwszqnbmgwaTNniY7dHi",
  "key26": "WfoxkScGUXzzZm1B4xhkhDw94emgdpALYcFzoLRR52a8V46V5VBFCpFKnWTNLhr5cBZwSBjSaNT9YgGKojTmd2i",
  "key27": "2cAB1cXk4exgrv6GKyYmokNWvzuYAiAX6Nu9CWipo1vUkmCck7r7sfTPqcQpG4de7A2dKTtJpe3PWF1AgS8wdVuw",
  "key28": "5kf5KmwhMXM3iPVDqwe16uPuZ7VwaJKXL2knUmq67tZBBLgsXBRm14nmv4GHW85MiQCuye5zLZuMw4djdVgV9ncA",
  "key29": "5mwQumdS5p5Q3rUhaf8E32Z3VS9kKEh6nEukYFzVRFvoN89x85ZUrbTwx2dfYJ23VVje1W9H6GGxBm8wH8Uw7KdA",
  "key30": "4Cwf3tGxw24rdT97FPJWstLkfRMAAr8VJ9wqAPDHPV6uxcaZd8r4fzadvJCRN1Fscprqk19hehhqxKmVDqbk8krK",
  "key31": "xsnu3hWmKvisW4FNgMHuRsiXerumJirh1Wd4ctmkjbBJLgXGcGCvpihjtBWxoWnDBVwqVuCyXghB5tUuj4P5EqZ",
  "key32": "TdRUQaQTdcrHBGrte2hG82QrGYhs2YHfjD8uFSh5vFTauQP8ekFQocXYgSBdgG4uqPhbGRHXGVPvZULTxUBhQag",
  "key33": "3NFSUPApeo4A3KBhuEp7Vs8K15aaqtBa879Z5JHMpQSDTT3iGqU72DNdqUwMBU12rWhEWYksM6nLVx1EQVUDA6cs",
  "key34": "4ZGqaj7bSMz69GPfNyDKY4cFsdrsmGL3MVQK8R6mm2e8YSTuUeuptdbsrBXwZEfuWDfoAVzMVM1YFAPeaTum5nsz",
  "key35": "eGe1TDEcogiNv2N5SE4a5D4VQKkk6s1kjdgzZPZ8UM7envtWkAMZT1jtxMLKu7KTPw6wC8VV6d2uKenUJafNqzJ",
  "key36": "5kfhX62HVBgPZgqSynrehFwcmXdnHcJWeyzhufpFeLYvnCLTXbszRb32qq8TnNL4kKX2buS5UV2nncB3SFgeqMK3",
  "key37": "4gmDiHtKM4XoESPLJvopSdrYxyqp6YnqhRmh9trnrQnN5ztrNB1yqqQHMTELWSknb7hRFx6UcxcB9h5or59iEyFk",
  "key38": "nUCsF66Yv4rzqjtvJuP8msg9bzvUnD6nsSEWm33boVpVmXG6cNwuWrdABY8N5eHYzogQQMZuFJBApmjuD4e4J8t",
  "key39": "SRN8ayK73nySvfZZwRwiEfw6GTu8ziZ8Vjzr9cDksgF1PedRw9YGrWweYs3QByLpV6hqmdQYEGT7TLTJs55DPvH"
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
