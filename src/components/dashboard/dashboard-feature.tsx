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
    "5FD3W5uCiGQoeYh389vvkHi3hJbQZXf6orw4qT6QvrnTogZ9E5BGEk9oYFxradDEF4HYcHuowtR3Er4u1gFsutba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CJ5BpybhvKoHVYooi9NbfK3xE2Q3ty42Y6Vrwj9rJP3sgtZ8cz1oqJ7xwzJs5xJMCA1ZnEQRJ1DMnw4Pw39fhtU",
  "key1": "24Qgv25tVULXNNyUCsiwkRfSDNwUcgy1SU9fuJmVARHVe7Qae99TBaZsEsUaMRhamg2VUtwYfckQ3qgPiNqrmCH4",
  "key2": "5JcMNc3vfA9xg9EzMeYrA2cRgbA1P19LU3kX5VV2fQ9LQMKB65Xd5tBAhY3sXxWS6kWiPkZTqeoeMSMDGzT2GyES",
  "key3": "4QnHjAQH59qLwsB5vwAvYQEq84vBVxBxjy8rowSPbcehSqDoddFGPdqFzW9rCJedvECoF62dCVWWCDxdmGHYYuzW",
  "key4": "47ZzSNgR66GsqvxZmahPvrDzp6cAyK41tfmK6RfZVRoZcerCuEaC2TMVRzXdVF4g6KS3ZK74Q7pmrrH5pXse8kCm",
  "key5": "V2Wyd6CZjkVErZrSCNKE8dyRD8noizF1WtUbkZAisDv1g8LV7h9SqxfaKkXyhtb8x4V37LSLHg69tvLVat9nhPw",
  "key6": "24TWNmY1HvKG6MC46pBk1Edw27Tsxs5irXE3NjGvF7JTLRScsZTMcjKeResiLbBy3sX5nDuhVNiWczghtN4h3u7B",
  "key7": "5doWaLmg8BbSsqtBWBFEG72xeR7y4ZUZ5VohkK5QYpcdeAxe6bS8fmq1TXUU5GVMFn9FD9WJ3zNycTXzvnfbNgyS",
  "key8": "5dreW5PhVkoJkqqD4LGo68xorgwpwiRykLyLLQM6C1r8QoVPmx4P6DMNRTUB5aWDvLBUSDJxTbFTGkFRN5mJSrpj",
  "key9": "P3skaMBnCWXVvLwhZLKanc1PT4xt96THGG6cRVFxiXqczMVSjLk1RtTTutEGoYMCbatquqoicSUYyCQCtReXdrk",
  "key10": "4cQD1rUM2AzC4L9wVDQsWv2JtU9wg7SEkE5w2CKBY9wWgyDpAo3twC7tZgfKvsw99o8scS38gdpw53uCDz6nxMnk",
  "key11": "4zPRBikH6vrF8mwc34iynPJphCXZxknF1JCgM6Bt4UHnN3M2Si1jQmvVhLcRXVZAHpAdb4TvwAo9nhg8YNsXh4MD",
  "key12": "42EcKvMXwGtsGwiBzo6AnykUirCSQew1sG3ENWEdXYTwNRhFC4vvk2k5S87nBEPkHJd3pmm3yLs9FCSzPp8Gj1AZ",
  "key13": "23cZ77C5jfpQGsn6RkS4pitDt7ebcFJzy4dXK9RuZY8SBzC9uJJDrTXc1v7t79LRGtfHQUNHqKjpWXRaqqjmng1o",
  "key14": "5CubQXxsfg4CRAavfhKN2knrwe4SzptHjYtj3MrHSH588fo1mhMvTpbN2mZJdU5XitkHiu9GdH8AiLgEn1fRyKf8",
  "key15": "39SJh2YQTCyGC75wKjmCRuVnzEQCfU7LZKVBvykoHbJVUx1VejiugvUG3fSi6jQT25miEWiJsd6vUKdX25A13L2J",
  "key16": "5wPtRX5V6XkwsbBM13N26gNCCspRy8Zcrd4JUtBzr7LwSwtqSaPe865LhbKipF8jbr72wbVmqf8K3vLjAhThdtAb",
  "key17": "34tfEZx3iDjptKbVfaqvguMJdwFWyicT2bg3MjKhLPmE3xgVseV66QPzdgMbpZNwgPXVmHzx7mGKTe6wpE6xx4pD",
  "key18": "4TgyPSuhRFXqcdipwT132LePaDAXMxVvgT768XdVKyTrbp9JkrpskZAtj7P1XxDbJBSGg2NbAQYDvEhqEwPfrPBU",
  "key19": "2eMopj6a1zA7SWRgJJHZEJFrdVWuHPt27WYRSs2wGiW2o8UKYBqSS8ZdZcCmkzcLu3xWc38kipppeSQFoZQemNwX",
  "key20": "WcusrsaVD4qocjE71iodB8kyCxZ1fpnQ4cg4zKTZgKi1b3T28AgDXtZyYhNXTkwAvaBBQTcWvSTxqSRVH5Eh4un",
  "key21": "2TjswRJJvzjrUhzJ6MSTfC6Di2B865w6LpR4Z36oumZtFFPNXri4AWwH8uqvJUknkaog6XokqNBiSsWGZQLSgZGF",
  "key22": "DrWaKXQNnHVqdUrMBmbrCSwbERYzCYqMhapvpi3NmRHEugHJww59emqAXxYMKfz3dB1Q4ubTzoA8uyiPyuALF2V",
  "key23": "121wEn6U4cmv7KLZJRN8SVxNocVnra7rVR2FjeQqPAuo6bhdiWpAbe5NKhCcPSMUkPynbCGQXujLa4FUx3B2iqwT",
  "key24": "aRx5dJU4Gb5ooMcJ8mg4brLJo8UTbCrhFQAZ9nbZYisFRY5aajocM9RvgoW7auekMnBAAxeChy3C7sSRcLFimnP",
  "key25": "vt5srxW3EG3xMgzZNeEsHoZJeSSrCkEQPUXPoLjEVK7g7V6M48uwh2ARueutcZUfjhWZU7RtBeVKYBtZGPZbA8K",
  "key26": "5LiAAa8YGcbAWF8FMq687ngG2HVGVUe14DYfqAXjEQugrRvzSHeit4m6fYWXcFuR6SnhZhrmk5e243N7vCfKRC8F",
  "key27": "5eokdpm5LF8BKUbQagXPpSSX4nvF9Hj2HbNEeruYLZkXz2sXkrgyAe88Fc43WAcb5M33sXnj3YM627FJWLoV248Q",
  "key28": "ikMjbgvqhyXzrNAvvz2ZdYNcVFACz22S1R7FFb9qMYyP5xshfGf6SnREvTaodediQE4cVCsyTL3JdRFNXhBVxwN",
  "key29": "4ettJeW4MyoAkJCk9gvvf3xYSgPN1WYa34xCQCM5JiGip79FaR3sJFcPgXSg43e1cDYTGiFNiNyNKvdYLhK8Dbvd",
  "key30": "2PHQKeowkN1Ds9FjYpgZomgjpSUu6kYnDrgnCmwgNQtbzSzcumExqCruePQ5kPLerWw6Y1q6W1tSnU3HKr2A9tZx",
  "key31": "3RCACuKEMtWjzWPQBpUGLASjPAFvXxs4akHJJ6WL3YE7vN2Gaz52R8UbQtM37CVHKfE7gcgzjUi2yHEr3muoZGgt",
  "key32": "5MNgzMo3rvMwPGzDmnHNkNw9cfcXoJYTws76GiEhC1QZef6SMfKCJg2UxJUDnK5AEFYyc8bC8DPe3uNXAxXxBpXr",
  "key33": "2eg4w9YuEcQ55jizTk6CARYecJFRnf3GkRLkKhcc39y9oCS4Pgx9n3ZeRsanwXX93KKapVNaXkKDupPA3vk4n2zs",
  "key34": "3Y1FjF218RHJ38Yjm3TXpZtrqSmwt5SJsbx48Ay87aA9FcEk4uhG31XvD86gxD95qwPFHks4bkqpETZUnS1xAmYd"
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
