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
    "5zfJ6FPHspnfbaYTePYJvRTCyMCq2V4dQ7oD3YV3R4kn3SaCZCapkcyEJ62bNfBTHN1C3ZA4buH3gfbVHLYiEnha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kTZpLTMSvS6kZkbsFuV7whsBUsJJ6ehBMbVY5mUbC8qDLw1Z6R6EDw9XMGxzdz2Lje74vaxVQPEQW73EV6gwPsb",
  "key1": "31gnBD99MdkccSCTNp5xxzigQ5dns5NAh5XD959gNoPB9UWaMCGi3rZqh6cTJ5T66Nxn2fjMhAARVt3GXp8o7KpM",
  "key2": "39VKMy7NLq6ZDgNv5EeKte1xmcVsctJupuGHvzUi9xZzaKCcx3GXAgDza5J16Q4jhTZHuQRYRWRizmXzTb8BCYTP",
  "key3": "2qNyjtvbZTKo8MLTEGXAemz5uUZ8jJ446Ew8M621XVMVdYMauNSLtifA4sY6oEaJXmTv1F7j1T8yUD4AQjmeAUfZ",
  "key4": "5hcbj7fdtbBArxKST7d4TcUGySX2tiGmNz1VXWWAzxfFfzNVz2veL1douw3akLuUwUKwFgJJMAWFVyEnGT9uucVS",
  "key5": "QJNkhkL4iwY6kVBHShBE4zjmDDLixeH3KZAkjvtBzHGeqXL16Za4vJQVGVSgZPdhHLA1b5uTc8YM4qzYtxpwZza",
  "key6": "2W4y95GeoxMLwZWHLVHgqC6A6bX7GMSTKwgb9EeUkoqjGj2CwgFbqHS6ubdTR3RtfxnABiFH8mL4kret3hkWmxbA",
  "key7": "5f6txi6mysgk2U7VvGEWZmmYMALmTyr1otF7EiGuwTDhXmymAHVK87rgqGHvTnQqpJgEPzso6uWM25fH5HsC6oez",
  "key8": "565QM9WzS4L9qjEXpkXrkgconR6fgc7qZjrbLTzzjDdFZpBQipb9GtJTbspcNrCfXe3YdF87c8gNKfkMkrCsVgeZ",
  "key9": "28LRBResb6iU78yJ6qqx1vQjGCKG4UpwuPQjWcM6Nw13tM779M411TPJGvw3B67ALAkNrbMmiRp1UXNTEqpXYuAR",
  "key10": "3XoUnPqnwHqJGUCyYbr8z7PDoJAc2kYA1Q1HRS7XJKr2ucowS8xupETr5dfCCHGm9cFMPU3L4g7ZzfWM7bieKy2o",
  "key11": "3aL5CHDzdskJKCMWLg4hSdjosRSyFTQjC4XCh9XTzdXBn3wDD1FQcGBuxvB6954r3ctjUGmXQMHofLwKpxW2kZGB",
  "key12": "2Hy6KnUCsjmgDe3SDuu5FWYgyW5L6ZmwRfSL4rni8TEr69LiYNMAnFCGd6ZhGikEfcZgjopFJaE5ZH467NSuoCSW",
  "key13": "4mCV1QL6bt3hWGZFW1HtkQgWZZoNaCyXG646k4ZjfWHmfXNPC4NLWS4SoYaR7yR3SdQvTBcaQGpoiYdoQCUsradD",
  "key14": "5jtqYGpgYZxZopt4RFLLTS31hZpD7iMQTTqQrKs2g3RBebwYq9MZkpoPjQT2Nsmx1tP4sLMutjfp5bCVDAAKjCUn",
  "key15": "2T5gaixCuVhTJu1LWFskR32HWJgwBCoB418jUcdYjM9di4cpf3jYD2umHZW53N1P1xF7gnPBCsJsXEr1yGWTNmXE",
  "key16": "5QGg8QYmckDeHrtDB94EqawtrS9TcPQByJ2hZSaPpZYQpfjzAqiYkXNcdiJhdzLEvbZHJfc8rJRVHbZx8zaDzr8u",
  "key17": "2v2C3u2VsfPrAPaPFFNFtRnKHfz7KwL7k5MhuNKijigrCFjzmv1W5JkFEuWdm2K4c41RvsB7zJaW1u1ztVMZDL3o",
  "key18": "4bYvwFcHvf67oiAg9rpcqC81DZ4RRdthpCLEoy6ZdbLhsNPgtK3AKWkZ5D7YMrL2WEWh2dqfzfJr7GG28CC3erVD",
  "key19": "4F7WHUHpTetgyGxv4BpAbY9AXfASXzSBk6XtRgwngA4usWRD5sfgwqEC9EKKcueEj4n3rPbZ6Y52JfP1ac4ejCCP",
  "key20": "UfCiJCarGG5xtuW9nS92jSN8hFTk9jtZjvc8ejnp9u3Byikq12fr6uG7AfAwUZozkGLJyPJvz3bvCFSDg3BAG8z",
  "key21": "2wojdb8JFohiRvh1ewQgVgrbH8QkJW2nDsohTa9QVu8Ng8QeHVza1XHKZcZqEaYkCUUFmc98pkbrQMtGNbnYVbtm",
  "key22": "5AB6EVaknzwHS76nBQc8o3AxEgrK4MtnXRi9mY3zMWJbsQha8pt2NUKyrfm3zTEpvKKwQpJ7A6WrBkmaFqmuZB6m",
  "key23": "2KqrXQBu2rcPe9E2dHSgVnZTUytZ8vms4jeZQCAU2NvXFTEp2bSM1HarcmkWJVQpFuyCShB4GyPcDTroFqf7P4M4",
  "key24": "2wxCvTXmmk1USMpaiVJLsKCwNbQ1Uyc9MFoW9GbPiwB1hbLxr7uMY9y2XiAcHMSRoHfoWTe3rMmpYbpw1gZf2e9U",
  "key25": "5RqZFi51JWzTqwpYuYGFgRmfJLeUtr62hfLJJZSz6j25iFo4MY55rWuHsajehSy6zQici9yJ67FrSaaWeQ6z4fph",
  "key26": "5wJeJMJzPMbdy8XKRDUkj8kJviJ4xH9pN29AhDsMRmBjqYSjWfgMZjMFd8esz4VEhcy7rhHKReVbijfAieestNky",
  "key27": "oJ4zFisnGgwyECndBiBcPKuc3ArXy4euyj2WHi89A5L7Tf9aNyWFE8sAKobeMphAxWtugA8zsSrvd2Fj1eW6mQf",
  "key28": "R61cNXhXLPn6T1rN7nCmJPwZEHYoFbhMQPtxdoEkcUdarKpToKcrG9qWxwa9RpSUGzpQkoH3rWS6kJhDy2NPCFf",
  "key29": "3EJ1JtwEyKJaxDHstGHcq3R4bt4rvqoZUoCBGT2mwMRifh42Mrvfo9QWRvuHGzqYwumgfwEdZfkEUsPNs49xp24R",
  "key30": "5a1SWpbV71U1G8EuzMPWS5EUFvX9h6e5UzPc4jXCYgzKHX9SNKuAbUXJsCeb9P81nJ7rdWaNyzatVxM86HcL3c8X",
  "key31": "3DAJ3y4NzZu85kXj1XnmdUtpWUKxdeZv62UJSp6hLfJjjW15KayeixtN4DNEAp7m6Jm4yVwAnLN9ybV4dvxW3BSx",
  "key32": "2SQnYCx43K9W617TiA8Fi3CwHNT9TSb2esbhhRzT2o2jTk41FMfiASG34g2tmLEbRYXt8MJxFKEZfNVCy8pTzpym",
  "key33": "3nADQLXQ2yCwPdZbSVYLXpfFoWbEyKdbFEPHCWRkcdSCi7TqxckvYzUwj4uiMbqFeFQQfj4RsZWw2WgKutSLeCNY",
  "key34": "4eH9sDb3jxcFALP9rmGN2qsU8QRVkvjKNc4LdURVb7oZqstjSvVGLhxZ2tKbNabc1MZRbmnByYb4Q5S4RphH77pp",
  "key35": "5J9QozGRpsuTtaxNv3uKJHE7vewzXEQ47bRoWrJvM33rErVWTeAowYFpVRXo7MqNYjdcg6QdAWfSC3zfd9u1jomG",
  "key36": "4LRuUQf7scV4AzT2MmAmgyePj8DBhXnb4xXGoii3zg3qHBXwdKNb2fmZ2dUuy2d5CTgJi2rY7aSpQivacZ9DaJuF",
  "key37": "4ZZBMsY3qAMReYSimJHMff7mAaRZGFCPB9CVUGVT6qpDxhfXWWE1AcDk46BN5eqY64DtyeZG85uUjLcjoQdAqn2r",
  "key38": "Dnip5YfDZN2XxUNuRXjjrqzxpw2Xsm2Dh7FpqHk3ASfJBR7uhMDSjEgGm5jXC3Unu4iVaBSnU6QkTTQTkK2vUNP",
  "key39": "2c8Yka3jvSc6LqgbCqmE6YEomsAC1gW42pAaP6PQoixd4g7fkufjNZMXuJv9eFNVA94gxDRXSQi9qxCCTwFm9Xad",
  "key40": "3DqyT7SBdtqKRPgfp3boqeHRwU2xMKF5id8zjcZt2Z2ghaFN8gD8JmeDHt4gmibag8WXExe8K1AeM4PFjPhLPXkJ",
  "key41": "4oiPHKrgKHfRcMbGgyWtc1DD1Fr4HPBLhXBznJDxSRRFh3eLbWiHv1CJ3srPXiHH8vwAJJG1amW1NrdaWaaF3k9x",
  "key42": "2KLh2WYmAdjesPz5fcun99FJcLQJrLNnVDja5RuWZdCELqJdVnW7huBW9xrBJrPWKmKQv2a4vHHosdLGnXu2XYoA",
  "key43": "659agymZKP7Y6XdzUhcerXehFqqcXvnG3ss1j2ENUVPCVYDrZgkwkbj1hoc5g4PbyLgGsFHK9uEd1nLVwjnEpGqU",
  "key44": "5xKm6w7Mqgsz1QSK7pAvfhJAC68kpFRZc7TqvGk8cF6JNtXoCxfwVhwtJfJmG8hJjirtbubBHVwNMXHpGSz83yWm",
  "key45": "45ASk9vCt4i1iXecPkrZhiphbbaUKvFoaeeTW8dDfMEWWaLiBT4g2Tnj8D5igbS4rcwPNQL3eKvwjevPXeVVSXd7",
  "key46": "31PucYNJDRqkQ9pyWUffkBuaPqN4A5bTo16ZNUpYfQJpbBkcr5zTTo6GycyYCrPQktMSL11uEktZTHcmXPTwyXan"
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
