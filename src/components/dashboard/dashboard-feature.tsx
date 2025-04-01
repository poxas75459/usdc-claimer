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
    "jDvS7997pwma9JuE8a34ee64dp5nPAyFAaXnQmtPET6EoLJMNRmDBqT4DYNmfLWL2y7XhMVcdJucLJtj91MJzJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vR94Vqqy7V8aCCaKC4FibhAFhqat9SyED6rQZSvjs3YgvKDru5BpM1QeHh6eKAUiYbtvkE16TLuoFSz4URMSV7W",
  "key1": "3fWMEfYvgdsh9iuqyn6VvGosBmKfKoMH3SJ69ZHaQZNndb8KvnzqYzjkHmorPPpaTZMWQoZYLdNPeSGkDScgFpPf",
  "key2": "3tezij22BpdKYPmnUDw32ZUJ7hpFra9CiFDDUbeSuCW7VRTX6hXuGXBAn9vCH7CADnYqPzWFFMLZ6AExeCxJVXHY",
  "key3": "5UswhdcHMkkCpSvB4F8hXXVvvn21yQ2eGCZ5rSWV6Bcn9QSDfZkD6ERfqkcQrHqEUe3SAZ9SLgS7yPygLL57AzcT",
  "key4": "57JkQ7F73CiqqWRGzSLitE1YyP8q8X9nSLLwLQ7Cg3Sp2kVJmtSVdADSno7GE7Lx4FzeWRHy9x1TVCUZJ7qVgJEd",
  "key5": "4NZVq6dkaSNKfjFyfkNE987BwJcTpohEwsh46Fub6yB4oWeVuFf4NB27ofWYdqj5A9B1KPYvvsLVSRH189myMXZU",
  "key6": "2WhipgoLU3rUeY3u5CX4M5qzofWfoyooZhKCkriBQbS1rzzS4bFGB8CYKRVi23dKFaNADSr1a4JTJVwDvXp7m1gA",
  "key7": "53wHYFNz4wTpop57unRFrZcLNZJpwGtfsqN1eb9Cmd8fM9y8Ae9512rFbfZ9CDoFPZDfS4rXpbon6gYcfgw2ke4m",
  "key8": "3MFgC6omG63C1ZSX5cEHTrbwNAvkayT17UueQjbNidJYvSKvtb3KWLYRHtE77mLZ7FYELFsChjVEjnKw3AneP9X8",
  "key9": "3efKd2DjDiTvHqrSJaZ6AdXxKBnu86dk9ZGYta6AZXwzxznDMktV1fNDnGCmxnLGiEdG9J78meaAsuf8oFcYb4AF",
  "key10": "32TPKP7UesagsSKF3qVHxyCmyU3ttcSWNEJurqbDFF361gWphVM2J46nSvGFuGiXNVr9fWgFhSXRTNwG1JoDAmoF",
  "key11": "3fDn4emXe4xnnxjU4M3yVBa1ykN3YWmU8a2ynauFaNf3ZsRcmqpeRetPWAV4DS95Xy5tf1Aqy6fgv6ivEQ47sfEm",
  "key12": "3ANzVU8sdQe23zkq3Zx7xqwM1LqhWKUHnkua3zoR2iNqdsVyFrrVfLVN62Da2hfRgE1fV7uYgVmRBP1nSz5qgkXU",
  "key13": "5qiQS4NaqCub4oEHtrKCnxJA6AbcoBEAPhgjrygfyP3JEg5bi9r4jU1An71QXHryf8jHwYnDAcZT3ZpaLxiGdxZc",
  "key14": "NPaJztRLLvVUJoyC3YCAEVwtKfBx6VT7RjMsmYwKAqTiBVATTsLA68cCV41gHHN4tsdYTgzAvg5oC5Pqu9BGA1v",
  "key15": "4GmaQTc1PWZEfzhnaELrWuVGLqEtwSkTjfwu1tL4bMoUWJhPJJ5WECSsj7MXatbnmjAXE1o9mFz83akXvVokbqdV",
  "key16": "5YndA1VamW9kaA2EMbTZDWTGqJb3SGG5VPhTYGQWJshj4vFZytoQzCiYcfgBCpVsMP5R1T6oieShb2ZxGVnjW4jb",
  "key17": "3zmhmq8szEJE855FTX4Mrr2oqkdvfjHHeQeVcBu8rP5hYsd9Xoab7ZDd33jMR5hemsd8Hwq2Xd2J76MQyDXSGvFk",
  "key18": "swaCwmZNuscxbRxwF4Hq1Pz7eWPXeWWh3sGKh5KSuENhFimjUznE5WtJiyT9rkznWvjUpUHwGv6b99reKqEZqGk",
  "key19": "4L9nmfQncFLXSvcTwdvrH9GxfVeX38Q5SL5yBzFbMppkxwYKrPyf6i1S5nuSKjozcBmeanPWKWQ5f7ndyQZoTpiq",
  "key20": "5rkigUsRoL7e8xKbKYxb2MaSHqyZzQzgqRKcQwzYR4CpXq85WEnyVWwUt6JFdoeHgBHTnoy31nz7nkDXGi2GtXTi",
  "key21": "2t3nQugfNds7sKXJt5EexE8JuqfAaSkZ8udtwymMV9jvgZ7xa1VdHf5Fg9R5G5We6fc85Q4YgZrZKBJQSxQCH1Q5",
  "key22": "2vy1k5ChFsJabD1var2mzefU9A6SKAo4BWVPRBb1FZV6YuHaHQt4VxD2JvyPj1N3jwAgjgEuwj2EEGUeyP4u1vbK",
  "key23": "5RQVrLcVXoaazWLKbaz1wUNuXdc1yjX3WuY4ie368z59Yz1kmiTn5taXuNdKW5GyvbDnHoNGxUc8iZDJK9st9pxA",
  "key24": "46GwN8NRLmAYtKd85bKs86m8CeLRdcbZoq2FSMgzH26jM6sRnwAuQo66Rbu3562yrBoC5eQZzayNLorQnHuEsNca",
  "key25": "eZuotTnrmLcjNJnnvUQDehUERvoTtbRWoh9Z7zv8wc6qPxCppppFY2FXWjbqPetvVXSYJext61WTSR4GEAUvNqh",
  "key26": "2jnx646j8qFU6qFKa2VTvLvnNYXkN5TBEvUenPWaKMXzWQ98rGfaPJ8jY5wnxoVfESYRpcN733LauLtLDDFGZ7wX",
  "key27": "54i7VftTCvihG6GUPHd6AW2gyzdo6UaYcsaF8ihcw6dPofnirsCchn6VqKzQdG178tpCxuUGQgtoEjYvvUCp82b3",
  "key28": "2WQdpnej4Gn287J1M8Ns2o1UVXsqSo8pF2C7kvEHJ4ZnnJApZoj9hYNtPydJonebD8CJBnx9CicSUKkvPvw8HZqw",
  "key29": "DpsUFd1HEVw1EGUCVCojQa6YJWZQp2wTEyVpioQ4tWCH5LwLMEnfYxbZrtQsJfcarBxso4tH6LbzFGfLJzr4qdj",
  "key30": "55GhbNDVPQnzfiXZmkopbXBLtnUShYqCvG4H3DHqejiiqc7VWLPWTFYiRAvZLQZ7HjxGsPDv8QeB2H5DR2Cxm2aZ",
  "key31": "5CbTFSjnALLFQMDSWuJrZjdQefMRhpF1fPTRaXvCbeKocxqNH3ocfcuRx7sGVwvYeNmqfbDV7vrMtD6a4PcUv8S2",
  "key32": "2eGYtqcKaMFdHz5EJYdyzHewxP1iS5zsoAiJhcUtTAcp3pyPRWZSdyqKa2XHr4G4uJYP5JrjvTmcmqhoXUDeBPVi"
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
