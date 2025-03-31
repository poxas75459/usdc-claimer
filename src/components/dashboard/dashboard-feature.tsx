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
    "62zxMceCYsBmxSDSGTpwF1pnQo34JCjnp7NMSrq4LGEAq9P9c4ETFMEamFpTj3mw699VHud9brurrRgjtQTKMzCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dhWtTDs9ekNsR3PGePuaMopz1rZAv9Xjr4pHVgLCFbUAshRiY8jBfvq26qYk5976Vs7DvuRFFVmLzUJ7e4Dwk7K",
  "key1": "2tNkr9Tjyp5XW2hXK2VWyxNxecmxJhrQbRJxPZtgAyS38kfJd84Eodx6R8dPCVNtPx6ZhfCpu4rftKZovYPrsxYx",
  "key2": "2spS1n92Yy4LmXkdLcS5ZZFXAEn2nEJ3NFauFvQHbp7Kynz3wdBxocXR7VAwUtL9V9ib3NM4G8La3EPaxw87vwSF",
  "key3": "5NAb7HC71GfThtMfDLYSBnsY8aoDiVMX8rBmVqrDmexnBEf22dX4caGXJpXStzbf61Vx3RFaPCvMGALmNwGdKfA7",
  "key4": "3PAaxAkxEzyeax4LqiGDAJiZvbWb7oY45QvkTum5UjRVpGKQUwPgGJxjYULNiYH6exugRyiH6NGhHLMdd1TMYJ5j",
  "key5": "4xKD6TYhK6HuL2S4FoBMm6j9m2bwq4Jq7YajL9xDta2Wb8To5XbS82wDL5WtgLUAM5yAJs14HxEUBTB2vWQkFGZV",
  "key6": "67D2eeN5orgviQySEvBTdjDTQHJCC8XNkFoTdSEwrE1MgD8gqMMJzkziYaAJ1WRkjkN98WSmrkDhCynQfxi8B93R",
  "key7": "4NwK7DEPYpYdNsiiEYc1cendFJ4mCwf4LJfYRDtCjgnvvCrQJhAzZqc82LczcJtDt22vgtHjdmWex5kW3shp19ab",
  "key8": "2CmCoDSMbxWhgj9dAH6sCT8oMaAGNzXiSHBhAbrmJRte4es9XBsomeg7z33Z2dYFrvKp1PDjzmRm4Zj1WbdUbuYV",
  "key9": "NCQaEfdLVqPapa9F2yeNE7AsATG3CzySKKp87gMFWcxVWgdWFRws5T68gtniZLqRsRtAtkXGTVh3DCvd2hpdgQQ",
  "key10": "RbkKC9yNK9q8oSc1N9jXMkfUb58iuqZ26ctSodf3KNo8eoze2tfh4gJKjRMiHBF5YHmiFCJYwmKiQdJFG9LhHLM",
  "key11": "2WBnS1PBn1Ehq7U8cHRtZEb56AQFNgKVcmxanZmTfqbkQgHG7yykMs4wk9avGvkBa5wp7TQp6R9LiGTrW9P4xQ9Y",
  "key12": "4ZMFPvYHVeWgFBEgyCRgfc7tFKPHws1xxp4vCn86GrGMzpe3MjEALLj9cD1MiQCqXv8tfvA3ERABczh9wuSEFwgs",
  "key13": "dSfYbQpRbpJGdTGEyeTLNmD4geoAGfxzxuV9eVjyLZakU24Xfwi3cZv3VXqz3B4bZtvWitBtktGEQxuGEu5fxtG",
  "key14": "5jG5GPFBchfc9xdoDJ87r3oGLoJ5n7owjPYQwANNKZmGfDNnf66rdzPor3ydH3Ru8bj25tf66X5ibJituhKfL6iM",
  "key15": "531SQQzmfpGnZDRzoREXPaguCsfNbnn6QEjmUCP7r2UN1q9bmrSygk3yrXA5q5zrQucwL2mNo479MmQv6rBYD5su",
  "key16": "5KLABFquxrQtDzEW7UAR1saHt7c8uJU5u6JGhwx7ADiGxqd2nMBZSzmRWhZVkDYwwzYck8XiNSAtvefjkiAGnzm5",
  "key17": "zceSCvwBaayzi5QoD3b8hUX3jXCzQe8rRizdFudXH9ZBSHpcfWf7rUAAV8FsyXPdei73LtWUh3iiFnNqyMXYaCd",
  "key18": "5Esm3GxB6oe9ZC6AcYQj9i1wR7nut3qpHZMJEkFQwu197wT5Qxr7NBX5RqZ7FWZWsUoU6pbjSRWq6Ykhg77YMBEi",
  "key19": "67b1HPC5csff8SNJkpJduSWevsv9DUTfYaaUAou49A9Rk4pFYhL7mtJpxEtGRwE56vSiEwNZE7sUNhcSX92UdEZh",
  "key20": "4hBbB6yDaCKkjYmvyk6RSMFerKvq8ZDB1jc95RDx6ZCiYb5KDeSbsHg4bAPR7gjCN9hiFGZsApUYrVi5CT1rtvDq",
  "key21": "5YHq6Nt9zRCHEpiwuPrQeo7zvRFyZAHYRvtShnqcJ1Sw9uzrbKb34nvWYZpzQVTkKA4kkPUvnPLPuUYbvA9HePok",
  "key22": "3hWd13Hqew1FmCXQZvz5wMHZDJJMfkryLHB1EMC3DYGXLgGfZu5rdrSMayEm1ZWL8ZthX8TY84JCnEjKKHo4d3Pg",
  "key23": "5pJGZcQkTeV1GxbwyLkxevYUzSYq6YWmzX81prRKpMpadyZannBo9Ar6VGfePAcBKta4et2TxVEJnW3tRcdisugj",
  "key24": "4SVnXt46tFXdC8rbzX3iMnRFM8JYL24W2hKg3YFiXp5YqxbB8PaGCrwqQsLkM1f8WioQh3L8VGJySYvNVZ9eh1Sj",
  "key25": "5ETFB8yDazzTKEpeGR44fRVXc1LDhC9Cdis3wVQZSADGbhcJK3EtGRxx8otsJjqvpkdX1r338LYsnZuHshWnp4jm",
  "key26": "2jnzJkRLwV4YxvSUzb6mjwq2BSfYkZtYGRuanjZ4GatHDwxiWXrX3BNGedrkfESKugfhT5d29pEReZBukxxryRKm",
  "key27": "3AnECiMWeorpXUraHN1Rbg3f3ZrwTNcFdWUE3U9bn9EYozP8BdF6A1WC3ZvUf69WkHh4edEPBBZgUVZLRmcjx8Pn",
  "key28": "svXgSPQLL6LnDZdM84QGVaaNjNe47tWqfdNNnvSphENqcdvMcCkdBJAxLaEQvbDTRFQ7ThWsFTrzHbYcebVdyzK",
  "key29": "r7z3oJ9F6BN5PFaTiaQbn6rv6nVzEaDHHNK9FkDvSLgFNy6gPY5FQZAeMpBXYbLHaY6PSJKSumY3dYjQt8o3SWM",
  "key30": "QuYji897So1mxVj3hhtYtgT8TKKc9TEnS8Hi6SkvvG2YnquowCwzweWLhRddD91HTamf4BqKN36Hhtjee9wmD2a",
  "key31": "53kMi9eQDbCskGmXTk44k5jNNGv1UVjNNDjhLzqhFZPupMUgqTh76EyjF45HqSrDmUn47tjj6KvmzpDtRdShMBHA",
  "key32": "iLYwVs9dVwjLCtZe8cM2HqhN3wpqRSyGFCKH4pEsPjknLAxiXwbmYHc7LmBympsccuxaHRTfidR7YUrdV9BeYoD",
  "key33": "2Zw3LPcCb3wQLVqhFzTJJXJDcfask4S48QPuGgvYk7ABh2x4Yrb3ViT4AVXxDPKJBHXvt3KwqH67LkK3THwqmHob",
  "key34": "T98a8Q1CTC9nhWdZoQa1gVrAGguufXVT91waK6QmpyDpwVerJqjZHw72dLvvuAbb5h9cL6pAgqKd5GTZ1ePBvZG",
  "key35": "3YVkrjquKNnQPEWztZ3qz4mpKejXBiubF9c9dMuCwYk3MAYiH4MCWXF7vGps4F85PwNWx8vuGBvDHaa8Xq1G9a2u"
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
