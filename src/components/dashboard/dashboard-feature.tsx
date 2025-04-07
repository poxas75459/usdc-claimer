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
    "4pmNxZssLXYUAmo8D9ZJ3HQCm1jSjCZqEgLD3QHpGeFd5m5njKXY7yVvPMmdtUAAFWsFKzQnUKgnrTEPyy7KJP1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kFC9qYDKfopuCHmZW5zkVZ3t1MDTHGmhpzZXQmVeuNvSEZGt5F8rmA8UYR3g1dcicT4DvsQytshXoFZM6Yk2imE",
  "key1": "4jhU8iBfRuvy9o4AEmwGA113KHmbhQgQ1AUADeWbyUEL9CQWr9fYZDfuimccYK9YQE39eeTfNHjnVoJPzksQhZ83",
  "key2": "vVy8XvBNz8TSLVPgf19cEtWAedzchj3w9xU1Cep3G2zqcMkYUt6YdXvVv4SMReSAGkBn3EPYNTYQ5HKSzy55WEE",
  "key3": "1CDuWz8yP1sCB9x2rxPNfDgLkrriscuszuyv3KUoJAkse9HuTeieVTrBNGuCj6D7X4s9TvVUt2bg2aNFfWoQTXN",
  "key4": "Niz8EPnTa6kw4wFavQFQuyM3Agtv2FmufeFwECe4hUUA9fJYB19qyvVeEX2hqXkR5W4z3wu8Suc5axHetv5EAbG",
  "key5": "5ddrda5kX55x6WG59FzJEeEJ8inyJtQQjdiaKDHA3PZ7xsxrRYwFnHrRBt9C8QwBCpFztffwrAqTLKQ8Crnx1huQ",
  "key6": "4WnyfUzP3hEPDHr6JgMRxiKs8P5eptVDYdszESX2FbAP7KaR9QkAKToiaTE64TpufJzYUEB7w5t7XXvgAi9GMZ9G",
  "key7": "62UaasG4RQCProqgUS31Y59b3Xk7sYBbKh7wydGoAEYDazfzJXfDXGgeko1rbpjWhaxfmhzixmUyffmH64zo97x9",
  "key8": "4ay1iWGzwkvXne9S8tS8E5xFSSNtnL8SpRvAg5gZurwdNacu8czr69nN5huPJVR1LfBCbZJdSgaCbmaNapxHGwuG",
  "key9": "jDhRGbRwoFnj7BKPNxrpyvsn1NPJ6wRSRBd5LyCgvbJAufQ29cPB4GadZsnXyR7HhhpRDMNJGWVfiQFWPihGtgk",
  "key10": "4LcCQNwY3KHB6dssyB23uVChaoPULPqe6t88ft7SdUsgBcXi5yu5aCK35V2aEPdXSCXJM9nzyMSNjBD5msxFotsM",
  "key11": "2K2PbTN4bVhp5JiKKneVHyHQ4P3ERdDQT3XKQ9dW8QMDBPLKz4H3yi7d7N5Pue9meWcWeteEFikRsGp6vT2BRrVA",
  "key12": "2nNhWLRiBRucbD6ypHHQ7wgttbA6MbZh7GaAhFEbepd33Bje1NnV834hrGbWvYRgXefxS57nrvrfRgMfjDw1JWvf",
  "key13": "4nhpp1hT53pqA4d43qdW7Hehd76LtLEqQX75EqQpqzmM3YFinkwSqULWcgkBVxLnky4QUqZQiacEDqBEZ45RTM7a",
  "key14": "49bGubbpp2HYifhfbShmh7zQ2YPdkH6t1xvHoN5gk8pBXdeizJa2457dsCDd4bTJkJwBnnuet8JsfZp49t4B7t2t",
  "key15": "4Yd6hiSWdMReVvzAnEawsQFC8arbWmaxxUeyqzXRv2A8CSrQN7uRpSVEnCizu4ZGMvHJdtU7zXLfKNzGnB23zbxE",
  "key16": "2Yt9CrzR46bzbtyBAyi9HuR8gbdLogNG9XUEgiXRjSF4a51iawJ3aJzdD1aKq8SJCad2pYQKgqPwF7rqyZiGDkuC",
  "key17": "2WxeQyyKnsvnRoRWz83SdZUGeo3kJir3ahcApwouzuu1CVvFN8YKjP8ajxDWnA6jRVTn5C8YjkrWnoyhDaE3JHPq",
  "key18": "3JsUdyMrawjFZtHJcC1eqkhcbRPkb7Z2EreNGBMpFWH713Qg5FmgPHJ6poukHyur6895q1dH1Qi5Pp2TLLJZytFo",
  "key19": "5KnYAZXQgAo9G5GCnjyRS7u2AYDWkTgD5FC8As6APKP7CMmNpaw34fUa3DLxn1EcWFhUsp2mnV1EF4z5ypXeyTiL",
  "key20": "L8FgoSkXcNYKCEZErFEVnjzXfwi3JGbE4FjxE2TjV3Dmf9N7rEyWd9J12YVuS9Ea9vHZP5E4hnUFiSGX2nKcsWb",
  "key21": "2U7xrVn3Fvi1NCsRNkUSk5XNRJBoCk9Bkx4Qa9C4NDfdF6SZtJJpiRouCA7YDH3oy1Ai3PLpS8H2mSgBN88By9X6",
  "key22": "3fKrjye9Da3Z53881csNnHGoJ161DnmwZi56CLZdXfaudN4HXyvfEBjCVeJJcddmnijUSMMb1q6TTTaNBxAL8sBi",
  "key23": "52yThbigwdFwehDnaveVq3wuX8SPJWqsiWiBddQt66fA6Ugatf6ZP8WYbLqY4iPKAP6zUKDJqDfyT3yBeJEQ2FYv",
  "key24": "jtfNX8gkAX9M22yk8MrkgN1joVfXn8xMzaWoPouNJizESzTitCXNsjTsQ992QGQg1XjGY7qiWBxsSpLKBAWD8E5",
  "key25": "25jjHboqPyTzjLA6PdSwzCPsqtfbNVtWUsSoqhALW1zTqi6mmkHqsXc3VFmTQ44LmbjrPBRNYkMbonLp4XoCR3p1",
  "key26": "kQiNvhEmSv86Upo3qPCaUB2wdp8HDD6jnu7YePP73p1yTba2odEQFHpYipsD8zTdWWSVx9wwUv5mi95owUqW7s2",
  "key27": "2RpmfYUQBkg2vNFD6ByYVXgYjGAPFU12ys2dqVp23wFxwLZgeqh9gQ6MfHug7Rg8iNxGAC8CacpbXn7Yjx6a9dpg",
  "key28": "2X6cquP51yAgNy3UvZ3CamMFS4D1W1RCucStRmDmUGiXuLpjD99s54tK7YsUoDErBZhiNDDFQkouCtnG2cD6y49Q",
  "key29": "6cqNCeE75rJcQw8Z1yPhrcjEMz9kVC22GroNojMTWXCbKTmciXJGKdevLwS7HX1iEVhF9oy1U8gGDgfAdrCf7ne",
  "key30": "zKwQAAGnY1GmM8hhf6JCbFGP9h4cYLPPxh97hL2boPmYJN6Z78E8FJRWtVMneeA5CmKef9tCuxQ6zVGniCyWwxM",
  "key31": "5RJLdxajuBsT1ZJk7peB4dhbEZ62AGVfdX666ZLbCJoSB7qky4cMbM2NUH9gERL6NY16dJ8JsHHXkQQ3vPFoJbfM",
  "key32": "CkX5WP1F72AQdFHTSyZZzR5BYdYefDGcVHMoGGPRdFeBhDAmfWv4fNhJG5e9BqbQnELb1cy1hGDFoxiy4kw4566",
  "key33": "VczEgKcPUakExj3uRQeo6KjPgQzE3aCFvXUDY3ATZzazSE3HgXMeEYffnwqDLbiCMEgezo1NZauU2ecyVD3qeL9",
  "key34": "rZw8i6c6eF6JGrTfFaK4cmHyPH9n51hVHg5huGfvKZA2wxFxqe7ixjpDA4EB3kkgqRJe9rUxRYmHAhGjZ2e8i96",
  "key35": "M5f34TdmvpemKegyF7XfWUMU6b2B4Gn1nLqZCSzgftWscj8QhsPqZEM4NLAzci7uRNELt3tGs6LtGtRvTHePno8",
  "key36": "YvDgupmRDviWT6p7KTdmPNJnyBsQrGS3hoFBj5AKpNbsDBbzQX9ZYUTgLR514tqRjx7v3PgpbLix4FtPxP2Hqwp",
  "key37": "2YKruhGCusj8fnaiq38T4zgyxC2RtUytZ4jJekn9J1xAdKi4AuWzaYT7DnxrN6ibX9FBdwHMKRLXt8ixCRoQDxNi",
  "key38": "2AajTamHjWmfyLv9CAQEj54ghSBBHWq7dwZkfgtj7MKLk5fm7QPBY3MayikVCXAQhVVfMcAnSx6PEbhcYtDmhNEa",
  "key39": "4X7oqPHffkRsLbVAJTJjJ5depcHG7BWhHHmjsuWWp2UtZaFYvRoyvwUnqXxwmFMqai9XCZTKxbfPtWBMSp4APKVA"
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
