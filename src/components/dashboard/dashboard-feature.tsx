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
    "pTJcLgPCLYVmMUSZ9Uesd5sURcc9yT8XDWBzz3q6KkyWuQpZrECMtBX7aNcLLZSu6FmWv9PSYKzumnkLc89xSfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KoGwWVvk7KJgiHFmrB7AUQBe81d89izNfy6iyySuqeL8xSFDDYBe9d6z9ExpaJD7V6s4PLJs9Ve9bQzDK8Wzd1G",
  "key1": "RYGwwhZqvPxKimTXeZ6hP4VyznVTnfmXC6u69VnGR7Lta7F1aHiLjU4UkUsqwqvrxywpcQXFGs3NzdHk1WbHvPe",
  "key2": "53nx1i7KrzYJRkpyVAgBM8ho7ZHXoGqFRcV9ULJQ84h9qANgnPVFAH881h6vDNHu1ATH5zsk2YQRHNb9wuTAaW8L",
  "key3": "5rR323pWWiCdCMeVY7HPoqKuFcsjTmcaMLzDYULSbqWgSzGCDyyA8NrFDGPjEgUQ1ZMixc6hdYmdyS7wuKA9vWup",
  "key4": "335mRpYW2GWvtbNQh4tRN9amCPPu6nrdVXJYGZynGzASAyJSGNdxYQ23bVPKaRntSsXqKQnLbQVVCnb7kYqUp7qb",
  "key5": "yGipKBZFBFbevaT4D2mvwNzpfoU4J8xTtRpwfx6xZJoF7tRyxBbgbGC73LD7HRzwJdHKuaUSnbTjNTZx3m7EUZC",
  "key6": "4oQc1eWpe1ckpJyPLcophSpRUhitEpKfZpEsBKsUam3xuPKc9jEo79xthZCxpVtWfy25RW3Hg4WSDyuBmRtQL5dh",
  "key7": "485yoHpKjML2VtiWs3NyPRTbH16XEy2mrj2KB6CWTxHQYmzaPGQCsXUmACLAZMfasagQcCdAenbN1UP1ZZbUxMF2",
  "key8": "2XvnVyLRkYmiLuzP6ygEX5jpUZ3sTBPkCgduh4QFW97cWDjKNaMstS73L73hY75Ynfz7oMQY6KKNWSb1tGWRMK71",
  "key9": "2W2TFhBvuavQFVaw81N7mjBTQwPKSfkDep6xWeaMccULmFoMV1sg51guqcTqdCFYCCENfiHAskajm8aArSyYUtHJ",
  "key10": "4jjcYVWWxH2QhJw8kce2ewidmt2yaupgW1j4GJSP1DTn3cVB2UnfFd9CadQwdNQET8WqYw8ZQJbnZWGBcj7zeeWx",
  "key11": "4hDTvoFMPLz9F3zjxZcq5iDTUXmVanUNoWK7N3gdFjhjS4BRt3NMxaDwSr4PSQv66nd9Wrs4Fh3NSLD1oSTGaVu1",
  "key12": "3vb2Ytbni6LQzZ3VQPwcTREQdE1tUtvGACYmED74ZxgoY1TUoKDXDZpEJApx5MjSc38UkekKt1P92GGRf5iWURaE",
  "key13": "56gVNugDmAmv53k23zo8h7mVeAuyPgbq9vPvv3T2cAEymWPka2hHE4Z3xaKfsxvXPyBxigoZqbVZ5mneZm3qo9UG",
  "key14": "3YYz2b1MTDsYkpK8S6nrELhGG9dKb7dM6osVMEHcXagTMEEB6QjGyJfGrpsUu9iHsnQPLr7fW7fqDMxNmwR6gC6P",
  "key15": "5KWQXkUMq8AqqRYaJ6MXq8NdNBKbB6Hy6McYMFveCUWJaZaS2Byru5GhF4GRJ73wgyYn5fbBifDpbKfwZyu44X8S",
  "key16": "225oussryTpU5ApNJMWhqnncw4wqCJpRrgg4k5fp9ZMe4M2bYNYaioEevAqMvwpN4LfUshmuabXnxepfvjg8sZ9V",
  "key17": "2UgQKymh2kQqL1gZExoiP5qBNUrHhy1kJNpuWKZQz7Ej12yXKDBjG3VQ23LccetDjFBKbmFTWjMbWAARTsQibcG2",
  "key18": "2x3psbvwhRbK4Q5EBkUjUK6qnzGo6dggVLxNwnwGEmYkWBQFCYf1dHmSXmRkrehc22UEAthAJYFvRG3iMv8kw2zn",
  "key19": "opWE4zmrzX9cb6jk2mBnDZD7W3QYPxGFJC5yUXxiAmF5Wqr1Po8vbmcE8KVdFMZi95B4oiH9NkTff64httejCFW",
  "key20": "61Tyjwdc8t677KsqmrhZFuME2VVpNJGeKYzsjEbyq8qkRk7ASdXJXPUcJydjoUp1sZEDGJda7uMkeBpr6b4EZZD8",
  "key21": "44mp1ZpvWEiKcmddYkD49JVe5UHAnyrfrr4ftuRaEU8MpHMVCMLYwUpgE8ZFfskrw89No1DpmDow26VH84mMmmaB",
  "key22": "48Pov1YwdaF9nLhsLNSfGuhceMjRp4qwHrCbYrWAoF4XxNMtYTD4EhtrmJYm3e8xmzCdBoYhSmQ56eBtVgRPWA7M",
  "key23": "3P1x5RiZcQ6MHRBLr5KMWmr48ERmZCXtucrHSAvN25NRpKLEyVCGvfTJkhAfS5A6y5r5Q6nSnQPXjZ5LcTdDvo5F",
  "key24": "4haEuNj7Sgy8FN5LSLsjBgR4mPAVX6sMQFfCtViT2hT4p7f62Df4xhCqXm1R32NMJC6VqC1GeoWFqhS3UuHQvT29",
  "key25": "n1J4TetU7E996bUQwDmkPe6DodDFcjjTahrxfcRAsXJHemP4XjMxUJVHWxUjJj3FwwP9GmJRYGLqz6GQQBMnKW9",
  "key26": "DDmygvmGa6aqKcS8ef1zS8Ct3vP9TsTy11d5fs2LBSNYUG7a94cQvuKqzMmJDhtJgHQGNKkknNvN9gHWtTBHH4C",
  "key27": "64KqwsLzvcHfMnopf4ADce7jvLrBxU1w88iEGzREUCErWcwEsVo7sxj7PkEMQ3m4j6WGmreKVkQrQw2MRbVHoAm1",
  "key28": "4717vUcrBtxnT6wpRMHhVNp7bBXS2TkNWHUpbjeCMWsgaPxn66MwL44kmmNSjs5UrEE632VSkjeUsbPXj5sTVNG5",
  "key29": "4X2JVCtU41NXYfvTYybVxLVWvVXbrNgDa5D9KUns1NURWKa7EQASMMPAtQG5cj6CxZNig8cYgTTysVSSZxVvzJa3",
  "key30": "5Ys8EEGAC8ffthjfvefK3ZMFcmFFCedMnefLgkU7wkvgAMaL96bCyWR9GhAtLkjmigrK3ZEYhTwbsU9CQny3DmJt",
  "key31": "3TESmpGpAhMBLFqQnUAXArMh7yKTMuJrTRbWi12zAQPNADsX4XrrUdRtvUwyEwo315VLhgEHkkLctEAqQGTa7kWB",
  "key32": "64N9XCg4sydweNDKDLH46Yb1URoy84K8DD5KkExxdBPurjSeQTsYwaW5AF2nWpgZRELKCq8er186jBN77p5N9abC",
  "key33": "66cfsiUVkrRjXCLSoDQ8ECeD31GEr728iFaiAACosispNgCewUAsVS2buPw5qZYoLHRLepsyMPa7oaZK1a819ViK",
  "key34": "1keFHeDV2zhv6GvV4p9Lq6fBWBYA3MUMDccLXbbjKaeJ8X7MQvtypMLEi1yw8E8XtXNKGSJBLbmo1mzUxkaZNLu",
  "key35": "3nZ7u2U1YGb2PgjVgd2XNgtCB9Wz3m2ndAUxvaveRnUHpFfnGhaPap74ttGeVirj8EPZkMBtCocAiPj2G69HHkZG",
  "key36": "5GNXMdjUs57NmsjC2Tij9kZWnRdJHVwYxK19omt1m11Y1bhD3X27XDAti8sK6cNBUZeBLRp6G5ZT1mChjF3vv8P9",
  "key37": "488oHd75ryiC43N2gbv1HY9QLXYoxjG1zKoCUqaetiESEhw3owmQ4BVriMNVkPNgJD5xiJCaykyRZo3h6xKjFEHL",
  "key38": "4zdhnmWhEed9JQRqrXBqYMxbVv3bjATfMRr3S4pWLGE3z8RN8K2feTnH3Qh7KxsELLAGk7gTS5PCC18gBMmURBd8",
  "key39": "2h26qgzvhj1aSnjwTRGXmwYs3TNaY6Vgzix8XhfwvQ6wFj3udcBqsnChUVSjz28qZiZQAEmmF4Z8f9AmU1enidcd",
  "key40": "4YtXPQfjRqc2YsHCmgJsojEkzZkK5hLgPbTR7zqpuE98VCPXbN3tqtFBkWUmA2NyPyNR5hyRnXbq4RxNcZmKusK7",
  "key41": "3ZCCk8WtPbb1P39cUTKA8C7zNuBv56Yqxrbzh6Er7JFD4JuXVmxQM9Eo9wU1eiF9qL4n1TF2dPpa4jSik2cDAAog",
  "key42": "27ERQxjHPVgsiGnxgc1sodibTZHJLtuiNeN7N6mgg1iiPtmyH7DcpBfax9kwiaaJPrUkE21879jPT1x3EEY2WE65",
  "key43": "3BhG3fA4QzCduXX7NdjLYxVyrp4gzLcH4CkWSbHx3k4Rmv9kM5fLr6WrSU6Pz57Jkj9APYLnPxN3s9m3Ms3thHc4",
  "key44": "2hjP8AwtHE8n3XUtm8bTYxr48zakGDsUNbSeFC14TQHxrTQkwfwB5LZbmaBVC8LrFdsc8kff9YZyDDCwxKTdAcUn"
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
