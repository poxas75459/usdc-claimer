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
    "4iRxsXHAYaU3Mk6WG6ohuAMvAV4g7g5LvxsV9P1SnTytv9UwTVWzcdFoGxQ14LuxTqfPtKEetPjhwrH26RcVN1qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pdm5mFutRU6DiVK98vAbHbzZLjqndLVnNVGhSdwTmxNyzSfAMZnZrLg8eCa2NLHgZm2sZyELYm1vixdN16SGD8b",
  "key1": "MXNERZGPFfwne8hJ4BjFXiKkkqeisBxU2QE1H7kc2qHF1b94xWvZHds4jLSb7Vn6UeeuqRveEkEavatzfgGELFC",
  "key2": "5rQjSwWzQbFp5x3nY9wLyyJLwf6F5QTYVaFCfeLnv7uz1NLNdXmgWpve27tgAo7VKzEkPtmNwWwDg5QYLMXCsFbt",
  "key3": "2EmogK2vK8GT451at8guNZEdNeFJXvE6Qd5uJhmGrrbRqiopa8DNduGJWNw5r4ZxR9mqvF51XXnUnGxAskM8PdBY",
  "key4": "4kWGSSumijq3zhsuRscxkAPmgWyHhAJ5KG9L4EXYgjk5VE7jZor87SCyEcipBUrrBq6iFMGhhEQP7ZHbYJGp6a3Z",
  "key5": "3FJr7iEmT1PqwP1Byrz2ZHEYRwrbKF9qNjy9b2y5PUuwK3NWX7fHGeMotzGEt6UDJ513r4RPR43nW9bLL3bsdk5w",
  "key6": "5HvNKUEcJsd3ihPsTwFS5soJbiS6w9rFeAYFH1RgEx2nxZksPYjkrn5wcuwCNuEPTJAxn93kt8EFKrFwmpJQ4g2X",
  "key7": "1DMaeePemtkjdBcyiYftLcpPNNMU9c7D9hft3EgK7HU7QVB3rvqvqRoG1zqSfWTSxXhxQTcayDrQf4Y5zFwjYwW",
  "key8": "2t3132z8ZU8qzjtmpAqdzmkQDfPRp5QyyUVeySaBTVf7Mba4G33Y4XDkvakuFicuW74rbQviM2QHBu27KMN6RcVX",
  "key9": "4xjNRVTLmnTgwWBmDBmg8WPcSHbdR9Vap6ZfNdqJFbroLZj9dFoLgNCNWDAFkobCwuYygGiFrNGR39ByYiph81g9",
  "key10": "cj38VHLPK8KspcXSdiPr7yrHxVr2gBEjMvwuXi4Ci2Vz8qm36mSyM9iQULNGbkwYEGx6cQcNL2xMvbxJiW2eq2d",
  "key11": "4JVju2pdLSqGnHdYvY3SFi7uKn3XGfuQA2wzKQY6JE8xZ8Lup9v6oQLjBHcuo4rtFmQGqMwX5VorFGyHobQVCdNq",
  "key12": "3qRgKnwKevbv8MvK34JcDffRTqQJHPBHvsiTJhoyrQPj4DyZZRjvNAnLfbmRvoDkQXSTpv7rArVd12nULDZeYpdu",
  "key13": "3ZPKf6s9Z1vLqvbsfvKUBJGKHxdQtR55CSxn5z1UcLP3qZktnPizwGDeGQ9ofg6CoM7c9hs35C2ii8eU412YFtC2",
  "key14": "5npsHcvJ2Fogoj4YcYD1CMQwJCm9Hi38yhGLkPi8Umtdh9TjdNieHbx877cCDci4dHXWEwL9C6GsTLZGRkSwPLA9",
  "key15": "2AC4k9oJVrB4GaHNRkNJk9cBNP4aiRQk3fxQvcM4TfWqS277qLQrfHyTSPaEyPzjFQawWe3BEMiyFpDPJvbEr9on",
  "key16": "5ZYgyi2J2LQ6CqGUXwMAm5eLqUH46BPEBZsyhzwQX643SiaYMA7dfw2oUi9etwhmzqvbjMtenJANtJeLEoKmnSuX",
  "key17": "2x5YFmdfcSjHAFkoBHyRni26x3t3KeW87bubewc7jsgNMzd3JAnXhpcaB3FG2z1n4G2nTdPdhPexthGGiC4TuWMk",
  "key18": "5NRtbFhErpsMs1TE21PWbCRoBm5t9cJn6Q5B2jLSYzrjGqCnY5kUW5DgeSetjEam68JG5Y2mtZijhNob5f5mGjUt",
  "key19": "4qvcLB1ueuP9FWfY4b46LGBZioxCdrpTJchCoHxBDEKsremwJRjUuLRzLD6SjTuZYmv1THw8hZzqidFqNdKYh5Jw",
  "key20": "2JeYEWGjJiAvkDfnyap9VAFfAtc94Yp7oRnxVbNc4w7PkUtGotVHsAKhTgxmeMQJZGA3nFH6eTYB1xLpAfEmekYf",
  "key21": "5tGFGPHvWv8bDfa5RLwpVhKdjrdxkbZocqymeaz9PVsq92gQHHxFi9RfGnLYd6d8G7sNnoCs1kWaYNqctTk9qL7x",
  "key22": "EpNhz21XSfX7f9YHQ6qcPAE1uJsznPk21PEMMzLx5qGEQZGMzp9RBnoGvgWFKymuumcwgnZ6yQ4DBCS1vxULAXk",
  "key23": "4iziuUqL6qKKMXFWMW1Ev6aKdMn9aeDFg5APPsTr6HaEBCJ48QNEgdzUuBZ9bzMVjd88CyXm3Jua2ZVc1VJMsz1i",
  "key24": "3Mqhn1JqivTpoSidBEf4RLPEAMEBc6euU6WRME7Wsi9uoNRGqLgoxSF4Z86NbsjMBtTKjA2sNEbzj2JbCnPdepB2",
  "key25": "4xa444yDJ17JU316StZnyBrrd82PtL2MhLSFshNQ1s5VrZznmyjH3smAA6gpmZNNy3fQC8XbTErwQtP6YeWbc8QB",
  "key26": "3cAphaqZBCYmbomsrd5c14gsRFgYK2EfWhiZDJFBbPrBtBpd1wBHRTFZNKexTqS9bvMzANPsjdL6ihAZRwbFkS3",
  "key27": "62AEXevaU3aU2rmpEZs5czqkbiGPfxHwK3AabekpJ5vHac8BdtDmtgVH1dC1JnroZLjFpnLkJcvUPug7MjQPdkUL",
  "key28": "3dgonJDSHhTYj8QBhcJHA3yrq3SMQC8x8Z9BfeEsyWoZ5976qrmrw7SJnU8Rd6DGLkf9ogD1m2VTf25Y9Q8mzMGr",
  "key29": "4a15t5anzQ5TaYNhSviLjSqYoHR8e3XSXvRfLH588h5AGWmrZruEt1TsebH8nS7zgS8GWyQVt1Zh8VXskEJtrkB1",
  "key30": "4Ux3Qj8C5GLzsdXYVoYoeEVDrEt7xwxBY8eQnw4mLK8ZTYab7FzzvZQHti4zK3vZq9cYGtufqMmhYdwJvNhayFBF",
  "key31": "3a4xfFMaJpNF3pjz3sK1krMtM8hPiB6U3MxnVQ1EjL6fCuhm7DWEYGmskCpdWxkdSaoXZbijZUCfA4ySpFFuCcK9",
  "key32": "3TzPqBrVhpQrQnZvXuHP3HSVdtKgf3oC7dSvC2o4pKprXS5aNRKyBSyQDjZbASRp61wGz5ZF7Tjwf725Pw19V19P"
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
