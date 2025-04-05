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
    "5tNH2arSfzXzBs6vR6abFLTHi8ZFK7RtoMJHDLeC6tA1pCcM3tM2sBERa4x8UKxhQxYpQQWmX1tH1S6WWJWY6Lge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pQJFPpqRficSU6t5RP2iJ5vT5tVqgSvK5ve7vbd36ynjGyP3GfL5ZrffWMU6khaCm8NRSszDRwye4vnBrCAZEbY",
  "key1": "2CpQPjAC1tyQb3VG7giz4xAnyWWTWt6VPNb4cUeCRJjG3G37BJob9NxKqwYCfmJXKYjqBCcxLSChe8utW8dWtxKg",
  "key2": "4YXfh5n5pEzqAgkiughxA1f8uWv2GKpJpZssYKnA8F25h9jtA2AjR19BvQQupetAUSuA8GRLJrWqrSyUZP44afRV",
  "key3": "3pWRgZw2VCqSCLbfmCvAjnMa5YNECKgbQZHSonH3sZapRnFvmDPUxkKaBsUaTtj4Lgayw8YsM4NZUMTDKVSXB86A",
  "key4": "8XikU5ZSBY8jetndsAsxiT7gVQy5JEVyNK4nzYEa1oRyBrLsRcu3uraEnAnWoFXZxqsuhAsEPgUL3RYayNi22G5",
  "key5": "3uFAZZmpckxrnfcyGZBiJt1Nqo2duESEsZnYRxSH3cxzqa4sbuS5pumr7WXRENvbGYQ3GM127hareC3H9NCKWUs6",
  "key6": "4KKRJhZybGkQSdxiEg1EdqMKS9gChZ9QAet7xugQkQaQzoGJJpvhJoezLZM3vJ9yW7e4eN2ubxbbB3GMT2fC3xtJ",
  "key7": "5ZDf5pQ4cBrcWACbVahf4me8a15RSTjbMypPrGUYkdBUrR6Wyo9JPimLSZXGnLCfd9PyC5Jggasi26jc1XrvPVAG",
  "key8": "t8PdT5MKCsJWMbYhNdeMBcvvCE72cpwCMu6qZVyevuxbtNVqCcXkBMAyQyShWRdLJFngixiYRgPh446gvhdZFC8",
  "key9": "5agmyNSVdyfNPZmvsghagMis3FExNSjBLF6PW3UmtE75tDviUDJP7WFwM1KmNAdkkFjaiayBFg1dgnD5UfV6uCHh",
  "key10": "5saQ7wz5v2pq9WkKzH4SfmNEfpm7UVuAk5VKhLUzjUGg7AmneFDDzLbGhjT1vyEj6JQb8owYDzw3sSxJ1scFur95",
  "key11": "cXw63PQnkhRZeHGVq7Upv2NuWt2JURBgbvKCPMyWHDGtaqm2ry7Q5VaD6SimL68gdethpYyL56pmZBR3LL2RzsN",
  "key12": "PG3KTN9dNJfYc7XSeKQ6knpujT8caXyjUEf1NXxN1LDJWNCX5fn7HW5eeyuTH6G8Y3T5GbXxqVUUubG3UF97enM",
  "key13": "2AwyXxRKpnfpU9rYMcLKh2KjVVHBZcC8KZupmsgGdCFNruvfMRi6yMJ1ty8WY46EWvWmfUunbGwwWh6rcGTbahZj",
  "key14": "5wxeZCntTxcd2DjZriVMjZLce7PMVwXZ1zEEQwbRnRBvZB6RD7v66JVta1cVqigG5wSXYFsqsSzvuEozitDNgZKn",
  "key15": "3Wf65Td375fmH5nDh3ve8ac1utcWZfVFjcTDcWwrSVafzsPGanB2vY5CFBp4fZUu9yqqcGus8zz7gk1UBCEKUNhY",
  "key16": "4h812e5HYZaCVp97PG618ZZ1EWqdsWVPqcj8gvW66eA2em4xLghEqgdoAUJRkixZDv8fth9EHuFhNTZewMC2ZNmW",
  "key17": "5bPGv9ktJmz3tA2hUgy1bHZMZsuaESUupSEqEwkgpzgLWc8FHozUeyTQvfFeM9wsrxbQyz8jqGHvmG2jzexMzF94",
  "key18": "rJeS9dgS8Ryd1cqLMqLRFi5ApKWLPrCnKYsoBUs1QgNMwkrGQNEfsqkgA6tzYxsZ4Uj92ovEUd9X5W6uj3mJs7L",
  "key19": "499vMcy9dWNPZJ8xB3UUPUzNCuARSXRvDAfG6RaaNSnDN63v3JH67PZndNRwmkvFsDr7yFRajPpRJdbK3xLMQUrR",
  "key20": "fM3q3qqnGYmq1wy3vHE26PoSwtQT3EhhKCMTpwHU8zHW42J7Jv32vXCgvhYjCwfq9CVi3ac9wUXdSv8wfZp8iRZ",
  "key21": "4gcnGharBm1xofkrZcKXWFi2aMeMS3JnzEegAtd5ME3wDwBsgmXc7eZKTrvavfoDwqZHLNwKqkGuGK298wuZPMvd",
  "key22": "x6kE1A2cHeEc1Cm8iVJnho3FCyyzvpHkyEjYcaLSvspvK1xabh9XoykgD3LM87YrM2avEhRmowyhrnLPXX4kiAp",
  "key23": "2UmPcLYGzZwLAtMdV95BUPz5Gk4w1mob7PnDdsEasJEcGLhahMwpoUqvz7a7Fz8HsLJdYvt57qv1VHuifkgrky7K",
  "key24": "43LUgjLkTNNu1jA8fx5uBTCV9oMG1Ba6NZ4SDuT5KBRgjidXGbBMUM1cJdSwmRgZwQuFJ65x7pHykZ78y27kFEVg",
  "key25": "5sngJ2Rq2gWj1fVx67sZgsHPeE6iGg7i8SsxvFkgH8evwEkRQ4PcuGZYJuW31JD1AuYFctzVFFHReyRcur71pVPu",
  "key26": "4FGYPpfRh6NkQ2R9AXGdjXudYpEQQhCZfobjYoABXBgeXdP1z5vYPCY1csdgZZTaDBd7qPog85r948jgXL6315FD",
  "key27": "3WuvUUfUEfHk7VW8ECc8oqiZNaoowsQmF8SuekiAX6hhAeuSuLQ7jcpkawQD2ZQiNXwb1qgkgp3q5qWCC2iqq4Lb",
  "key28": "g4BiyWteL59ibLkUP2S7RaeMsngSem1vexGRw8AxqSvnKqQyfmUdY75bdgcJcBZNAxRb8WWtdxPz2Y48r3bfVjp",
  "key29": "5e78U8mCcXBt3FiHSpkyk27UEKzJGriaFuxjssTe4PptLFGwMwWvMdXBAsCCpBhRbQ5s2eTqHtp7nv1sE9v1oohT",
  "key30": "3vu1kHWpGTYKD5Us79roQzBjQh6vA7FAqpmnfYcLxTCWgxFuZMJQn8oUVxY4jeRUdTnaczMVAsZUqPnRWTWxWHtw",
  "key31": "4QNvxXGBT76v2Lji7YVru4oAFCwH35dP6mjEGYKEB5jbDvaK87Dh4CacGfsVkrq4Epu2wvaua3dRFCWGwdf4mgRU",
  "key32": "5T6miV2MLijkh3E6EKMH7dA4S9oiN5VvGusbRx4nH9SGobHCjN5v1bNbc8yYzKJoZF8muA3y13Y4qk3B9LBk5gye",
  "key33": "3Gx3oGHcyLJoJus2izrgYqaCkm9wpkPphDnuPc2VB6AuHgqvxo5f7DRevLJJXUyQk3T2etu6emNKYX6UsosSpe5M",
  "key34": "2ezpQE8VYu9LUkMH6sAfiXqaiXQyTrcR6YB8d6zTDmVaZYtUNp9HVsrtsoFuZfNDFXXtBWnqN5X5NZfu7ugBNhkb"
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
