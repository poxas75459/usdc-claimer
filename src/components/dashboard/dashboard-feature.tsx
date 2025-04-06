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
    "67EaZrJRWgMmQ7Tb9jbsneSKp9QH1XviWQe5W4qDePQWKMHd3Nq6BRE9GcBTwybQXup6dXtJiAzyopcmBzoD6sxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WoPkhBcVCSVqTJGC4UMhsAUKQufup1ZNmrTCfQkGCZAVx5TzrWXTecWSW4YJYxfhdQnHiJjMzz7xUAi99m5Cw8u",
  "key1": "4hA9ZiudzDMzegL2p7gExPTiAJeTmrSWKR6NBXyCVWx7ZVpnYTfmGVwQdznjRgAaWW8TXij9LjhYr8Vsy1sZkfnc",
  "key2": "3cdxxugni5iwiZTKcuFR2qwJevDgC4ZpZ3kD9drGVfartRrnVpQN97x8cHZ93gB2Va3yfB6VwXUoLSCfo6c4PEfU",
  "key3": "3d94V5NFctS4mvDfzVXxkqchj7bQ4jeaMJhwVGLRCnNsGSZngEZQd5RaxFx6HZQ7AFaz64TvaDmBkHsqi24TDZBQ",
  "key4": "33ZxicyzrmVqWdcih5huc1rMY1xDeGnxtE4hpiFCaFZ6hefkXHg8LSwgVvBeiKMc1wRNy8RD7b8GffuEzXDQHEsU",
  "key5": "5yY27Lbm5B34SNbwyJKp77Y7uCSg56hGjJo7JerwnpUPE54XQS7mMkcgyfKS3YC97SrotvF1jobhrSsC3uq6M3Ek",
  "key6": "LthPT72QcNmb1bzgBiN7GCaMF7iEwuXXmR3pbzuwQGRTc2P1BJx5FenZBmiy6ZEEvafkBMwrF6MB4t5WTgPx9mS",
  "key7": "29gpD1T6yeiKfYAKQNd74Ps4xoBjYyJSgp71g7wPFSea92QX8VibNCBp4VnfraJwYcaK7j7xLXn6KpDqEYcfMdxL",
  "key8": "4qyrvFmbbxF2R8qtcpR1i8f73bUdEEHaPkQpqUpDwBEEQYJi9MRdzeDf5GGScSrsQx4d7sP9nazuspgZyoTcnM7y",
  "key9": "2mUAWgvx5DRg2SkHZujpRhS45iYjXDF64KLytBdNrgpmkP8JgN52zhZkN5xGFAfG5EaMrEonpjDLvAR94HNDuCcs",
  "key10": "2PJa6y6cURQDMq3WqBfwccLxUAUnzytcSs4Pz9Jw2fE25GP7Fuq2DFqUxpovmvqojepEvrDNMDustVXpnb84kMms",
  "key11": "4dr6iamsx9GKUCjxfWb2ng8E3VbijMroQYg3EqUUNTnSFYb5heMFK5Nm57YW83as7Z6WbSyET3DUwsAZzqhggVDz",
  "key12": "4ncP5HBrAhDRu3YtZRJPWvaVH6GpTCJedk1baYKqZikYk4nSKASjfuKqJaf38djxuCi5aYV3ANuqvcpL3twKC2SL",
  "key13": "45tDd9doR394L1kwBe24wrkksbHaHWQYwhezvE68HRGGiaCMwutwqAGiQRb3sErqYiXHfBwsbTAziHiuYUbMVeFg",
  "key14": "4LTzHJTXczHgRUWzdWCmDb8pwcdZpvbR5vEguTEBdUhW1AecMtC9kvH5YeutF3LBEvx5h8pzWKw4xpSp5m6ZmPEq",
  "key15": "33hZkwtJx1ojpoBMgjddTG4fhi84E34u6joAeSKAk2UyXscEdir76q4LJHvyeaUwWoK4tfoUF8iF7zgAVYFjx46r",
  "key16": "4VbC5ocTkocsG1xFvzFfH6h8mEWeBr5h58cGLnHxucv3b7xd1yvbjx1pevcHRFoa2EU9u3HFMxaLc4AKJV7U6J8A",
  "key17": "3bFFyyKd5t1Gjyax3tMDhipFTdg8haMD3bFaQS7wNzTM8wLj9k3uhF5pQpaKXaWWxZ3NDYcX84pYep8B8ABf2W9o",
  "key18": "Pr5FVv5LMrdisW32Q7YMc3dnKHGX5AuHF4yakXkruQtBV7jnY1iuoogaCzLsscz9feFLtu5138tEwT1RTGJZ4Sw",
  "key19": "4LexffwUyVk7aQW9rQiChS7JHHzQiGfo3tYYpAgcD2UwhDTvS9vJ26TqbnejHHFQLkUJnhAMKGLe4DmXPqNj1Hbu",
  "key20": "5wJXrL5vPtWVbAzedmRES9uVBUfokAeZVfh7QnrRuTufxSfUTiBGyVLroZtCbhdbx13Y9fkyhSL6V1wx7QoJ7jcW",
  "key21": "5VzKnyQvgKEUBKBiDvFvvuEdfEZvTmAsGgf4BjsPkPkCuY4rKujAkVbZLz1Uk4K8sVQr5WatuG4fZiWjXeksTPHp",
  "key22": "zuseXRGKbXkiRuA4pdavh8xNPUzY38V8dZrFJdwkodD9QVKi58cvUA7DVHZuTTiyXZdEkcxS8ZF7Cv35Yp1vwUZ",
  "key23": "3LzDdnQreVZ9ziwPzSKuJGnoNsxprNr9Vg1K9obZ7qwkPMgfS2xnjwUoZ13QR9XDuDnmstMUYiiaZjxWdBbYQiJB",
  "key24": "64VvAiDbmCwSRbow3UG53PU5cXFmUYUPfx8yFuU94GmfVmCB3nis2Mv7fyWfoxK1aSXUtZz5nCVeydsvNoY3vrpN",
  "key25": "4ZNV5Yti4euWPRPXTMuuUrKHfNkBLP67skTSmnM28xSJKBCJKSnyqSHrFV5UnYP79HYrugBqiovL4uoHRyQRTstB",
  "key26": "4EwsiQYE8ksr8WzfAfpNvMocuvck7HX1RpTqqyW4qPvWEaUCQL7GrpuLFiRmYiyuP2K5hGVn4ahKJFA4SXKJDuGf",
  "key27": "4zmgaLGtNFQfUyiAKuDQ6bnZuBAsraoWETkBYnEAn9quZy23bevzP83FM1mn82Q52Y3Yozsc3YTpvZ3kPLSDobad",
  "key28": "4zHjSzLnhAkV3duzKv5TQdLT6VZqHZjrXuXMXtyCWskQMM2EEQGyCoVsMYx3KQkh4vw9NfedYnkbMzN4CH2bwX29",
  "key29": "5YTLM3eabA8XYmxfLyFzVBLJPs1bzFNXqkkArCYgNoaEtfmq2ww9pDmUB24Yme3JiXm1drvzZBr2CqBh96ctvNa5",
  "key30": "436caJRdVYAZfM6A3GeH4byh9yn8kTiSajPnx5djDNyaWtH8Z3xkQ8vFYQNJ373XeZuaV6rLgabFXHSB21wgPKWV",
  "key31": "2NY7bZGeNixhxtTdeGYoHtckDFCXPkzuRKU8AJ8ySN4beBEb1VUFyZ8EoBKP2CUi2MCe2A6h9UL7t5zHswoxdUhK",
  "key32": "2WicfVgdea9AoxeozgwqfGduS6xaCy2PN8WN8nsRNKpPfvN2sbqYHk3a5cNzDfFwKJSEp5yMFKqoqP4PiE23VqA8",
  "key33": "4sgh1oY2rg6y6D7xkjUcqnFuz3BuRHBQa86vpsy6EbTsEBkwoEuUxjavL5Sj5Y2zKxWwNPVYPx2cDxoYRR6vHFMd"
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
