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
    "2GJEh7VEfShohxWWa2enxHjC5YMz83vBLw6Gwd57afioDchrTK8P9p9wkbjJzP8P7T11eghFxiidUHUuKrsUAY1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dGbDftpmTmmSzj5183qcjjofWDJ8fd8419nX5tJV9htxmf5Un1DJH8BJCz6pyhKVmeqkoDoRwVFj1fs11njkoTd",
  "key1": "5YBn8H68Hu8ofSqpSuEkw2FHQa252mbfVWzu3hvMkUnGf2q79s3WvYj8YsnWuUJesx9wijy8ZLKkHMxTM1EAZrFN",
  "key2": "giwuk47mLsbqB5JxZj9pV8j8sLG7stA5L9m491vCeusyvWFjFQeLfM1UFJBHGXqXD3CTMg3Krz8pq6h23X2nxLi",
  "key3": "3EFXG74uU6H2SuNye841Ge16frrbQyuaBcYjV8qUuTmoL6uZvQSBQpQwkcmeg4ksP5jj1iY14JPKZNJivJ5esHGt",
  "key4": "5RjNVVo82KH8UaR5SBXNVC6Dh2ucRqA6MY5Nh41iw94W38HRHLs6YVAGCfnYZvS6RmaMt9vdKtH3UQdo97wf4qD5",
  "key5": "dkNZqvtL4mrpCjpxK4iLAyqXp3kLZ3UKd6WnewMX1hNaJjSGVe1N7LEzCV3fEao37fngHebe6NFspRh3KGSnkpg",
  "key6": "434yNX8iroTNfeT4PNVuhYAcEGtjajUynnHRvEnD2CuwFArcjt73NcryXp8vVpFCL1NSaRX4Pgst3D9ZebqcgZda",
  "key7": "5fd7dM4bY5kWVfevQXxFquFMv3pg1A9NHPFL629xbQ45jbJtNKxPJtFVY1oj42rb14X8koFoZz6vUQG1MvjPMFtS",
  "key8": "5pAon7PZ34Nrc7kVDNJCzYFvvFh5pgG5KnSBYm9JHFkZkfRqJwcDXZBvsHH6ce8T1PpYG5T7msaevDDwegCDDQ9M",
  "key9": "3mo2bg6Rt3EufMZdb84mHJkKbeqddxtbKe4Rw8JTtgF9VZxp1C38ms4WewwckojAhsMHrwAYsXeYK8RFUvjU8LVK",
  "key10": "4incBEDrtAR3hF6bxJaCiumjGgYC8zDYRjNTzu8CSMvK6w8zSzZhfeFhao5U3qa7TR3VkgGMQQCsdUEf7g8BMF73",
  "key11": "3eMqHuYPWzPyq86cdpMYzdDh4oqPgSLis7cHAjNBUHwdRH1pkk1LymwgwAzg5mkHnaqZYzG1gMt6MxS6E64mv2Vp",
  "key12": "2wPcBezbKgrWjyM8aJYHt4wUiJq3QDShy8i864Quf8auiVp6GvGKYZ2CdsUNFYZELKY2RTgZaAgxTXRy6jjWZgh2",
  "key13": "3LukyKcseUtgPfCYSLL3YEjpGiZ4czuBEgQsCWBDCQiSbNCu7ya7PzehhhvoXVHKnjSKdz4jBNxCCs585aAGPJpj",
  "key14": "QBpKZ1UfZ2RkvAZubKWRrTbQPcMuVGLzs1suqYz97BabGwLujfWdk7SCgzqqR5SJWKRufEwUoNAqT2NHGBYuWU9",
  "key15": "5fJmVee9qteATzEZrSUQ2mBL7ELVcDWRMQG72tew3tCojjyaZtUUWnpQMh6m5iaK4gX95NHPk3Sgsa9YcsshNyNb",
  "key16": "2avTN3Jxn9e1ryKZF2GHyUrdsQbpSXow8MqgG3N4nerfjwCbsAn7YvLn4QGkSTxSaxMG6PCMU6FfBPcfPjkD9nJ4",
  "key17": "4A7D3KDf7tsfeRP5eb8jc4tBVL6PqEzraPm9VxHZRSx2JoexXvAxrWWZfRm4R23UfcMvt34EN6aoWVpgLNFwZGCp",
  "key18": "5ynW2LQn7enLc6778zq5ohDppV7aKJcUfNXqCoKwG4QHTSrMXGuDbJU7YgABWxY7BcwVQcJpk8wmiFMJH6MWUkg6",
  "key19": "34ByfpWsibLMpBrceLtjLi7od28CZwKztMDkAuoVcwBZFG1gxEvzxQgmXmJHiEYYBE6bVMEH8Er3AWfJuZ313pG9",
  "key20": "4nNriEGpxH9ZXzVxj5vfNjzcZ5tz9GKDKLJjd79Ec1aNkWMo445KeDL44VQa1wBc4h1mStcmmP8nNp9gGFrrBow2",
  "key21": "5nrwQYu1ZQH5sz18jf9z3RG3as12VeWsNbSLvBCdThnAfd9YuaiLAJuX519mda2sr98cVaCWUdp3fskjDWQwkcZj",
  "key22": "5SRDeUzG46P3YZBJrsBbLaJriPoMq4TJijp6CNQktBSpL225gkr1q6r6XMU7hh8qHLkuXSTKEtLcZfLuUPsov95J",
  "key23": "xMzue5pkcQwTocX3Lk5dJUM98wziCPHBrvt4JRieAnWHhPH66Q6qYupKqB7GPujBH3eJvyZJGJmc6gQ6H4GGPp2",
  "key24": "epHu9B9nkqhojAHEU7xXmThsFZUDPuQFr516oJHLfqpoSW6zFUpCyPYyDaWFp1J25g5nw3ag52xHZA7WQQo2kue",
  "key25": "3g8hfhvYZ1eAPGA6vVTRYH4v3vjRjKwLSKb2ZKFEFeRUPLgmpteL5d4gN7J1QJtiwFbVKxZyR2aWyVaGfY4EUmi2",
  "key26": "2qe2XC4SCNED7ABwdzMhzLEKxMi7wDR4Kh91DuWyRqTHG1U2LVo3xNanoTUKpGreureCCEbafsUFNHqGUUCHkMSJ",
  "key27": "oy2hhh1PQyYu6JdZ6QwWERpkCYt8tw7nVDn65kZhPfyCSCugS2bCrZb3vritjRbQHec3gyXMNTH5ohpfNtR1RkS"
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
