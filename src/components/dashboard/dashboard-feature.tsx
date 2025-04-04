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
    "6D3gaXsvPVyuWmTM3bVXjwy4XbkFiDc2LChz76A1PJ68B2VvCFKtoxj3x4ZUk4xsXF2uRSWEJnYY5qBE3RunE1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M2fAjwnXBHWbEURebCXizF78LaKjjk826tABYGcV2jRvgrHJ1jwBRaEjtoU5xMJzgUYvQ2mEanzARptiFwTA9Yi",
  "key1": "3Td7korALYyE9Gn1K6DPqobkckYgjCkDSAL6mjQqfECuvK2Y9S5ZdCVw2kpG8RfEBegeVkC7AW7dpegNWeVLz9qC",
  "key2": "1C3nubTxim9tcP5MmNJWKrMLCGuqsY1M2d24shu4hWBRUdi38vNphpDvVu1oLRWks6gHJFgwv9VQF4gTqX5js7W",
  "key3": "2hwTnmA4Z8LKhK2GQHRYfvFjzMbnx9RD9KTW4FhqZ5YFej9n8YY8Tfhp5W5sZJ7ur9wYmrXVoW2JzEYxjhWtg63w",
  "key4": "cVKpVvZ6HddUpSENrLdF9vAPb2mAi1bPCbT3DkiXYbKQoFjQM9fkGy8AQLdMxYPP5kP7zLkNm4xD4Kx3Nwrcd2z",
  "key5": "4svEPTwsc1PgyqjZRDdvMWzP4wVTEvoEJHy1AMkegLUFB1nu5NoUHP9naLBLvqbgBYwMPC81gZXqhJpZC814uHx8",
  "key6": "or73MdHGtFSVqbCvcca6zDZWrNb6vNJu8SAb9niswXHazGvzd9xNjZLTo8VEH9GTqBYdZzvTSgtaWdwu1rStt8Q",
  "key7": "5PB229iAeuaPXN1waWM2Y78wBDNSoZGsxJA9qfqmGTnxVGYaqg2Xim3vY1M4qTgySy8P6nnfmnhBTJL57uVEsrry",
  "key8": "2Xm4yMZtPF7GEfsYjaQrQrBhbaB42PhXTjaEWJidT1HF32JvTuAZYTCXgPn3LJwpJk98wtY3tj4v8W4gyuKJbEe9",
  "key9": "5otYUDRMYzNhA2fBJ2XmBA7o6oGaj6wvLrQYTWiHxBJFVuPTaeyVMUF42VefUuvDc9rzZLB2TSutf3GnZSM6QVNM",
  "key10": "2jLhGvppkpWsbz5t7L9QCqyioNCykArTMwq9LZNFLGExYbgtQrSFErfeQrYFN7L8LcMZshfRNeNCDWpSNoj5Dg2s",
  "key11": "V9gWDrFmVgHHmDv5cixYYkrSLUoaP2wrz8GM5vzAfb84tJAi8KdtTge5MhTWVHWmsZnLKuvsd1Qi2bXKg3tQxBZ",
  "key12": "4BoZKxarD72s5quPwnHWvadyPQcGZv5ru7QfL8iMg28eaVNx5upz1fRMMYbroQJbwJdSNUY39HcjA2gUagop6cLM",
  "key13": "2KBdMxcP4FcFK79tWpTSREGipPR7VU4ZPk8hZHEETUkB2YcU5krqVRaxkcHDWS4HqUJr4c6TpLAkpLBALaB97bVY",
  "key14": "4rU2t8Uz5QXVRYKPcRbZMtJRXnPnXU9WtBvzUrnP69ioEjHm4PkwXk5NuENscg6qZRX4o5vr1ct9rvokkSHJYN2A",
  "key15": "5uLjbVzHGzsVoyEzXe3M71VAaLDD4VatdaET7uscdo8vdUU4DkGoFemYLcjN6Dkgx5aVxdFH1uq9BnNZEg5g6Ar5",
  "key16": "2Jei5i6XXrP6s1vA8f18DU9PSboXiDwMFR3W3kvGJo1in2s3XLawgcf52ZGkPuS8WsALBsbKndznBvfBp3cMDkCQ",
  "key17": "66TPdjbEwCrqYXUT3dswySGhUSCXp3LreynxCys7dyWkVyESdzt4LgMe5AfwxAMPgKGcRYHVapMJzzUsC1Ngyd9R",
  "key18": "5pHqDcj7r6oMoefChoGMRBJpW9nUmwrpdzjVQWFnJQaphTqfscBcNQWbuDgKYmeRGxAYmReTJZeRfqnsJtKMscmc",
  "key19": "2BEP5donT6YZTE1godYgRZ9xNe94UrQrqo4stjQ4jVaV49aTNBdW1EMQfDrernRimgbzWAMxMzktNR6yYvLSXMkY",
  "key20": "3NpZViQVf2L1NkyktXyXV285cxiWi64tVc9YFNLwW58STdUdiiSxCV9zkBYJuTf1FafUy3grpuw93ujCZQzvXbYa",
  "key21": "376bGuXxAZ3tfXip76bMVddE2pcnHwGUhhLvPX5BXNUfYG6YrWh1QWH62JfGTP4aWdiYPagDpt8kvBQrC32oVsUw",
  "key22": "26CpJkZEaki2LSTKXpPHHsFacMkibT8wcRAmaiTWH11rEEs9T9qdFwqnZ5tPwy2LcB6tD8VXzBiREFXgZf3debnq",
  "key23": "5DT6YY87yWJKvGFUfezjtmD6ezTQZ2GNgH3SmgLY5Pce7yUs36tvS6KDs5pBoNtZCCCmZhc3Ei9zcaRP8BvvRhzR",
  "key24": "2VgvVRSRBxub3TqHNpeXZZsSDGmcLmXTaQZAL7BcvqL2aYgzXcyrrWf5jPts1hpQk2D9BJFhHErqMYcZzqn9a51W",
  "key25": "3to7Pdufn9VumpQvZ5CNZazf9372RJTBzJym9uWz36NjTWPmmyF12KUC1YqpW4eWS66pLEhi9CAjUpGCVZ14EjbG",
  "key26": "fRKYr6iZQ3WxkDn2Hi3CnLhVUD6F4FgAk9KjZR8CCYguQJSm82k4EqU2SsT5KgUwjvBqxLqN5pzmctBaVM3vaYb",
  "key27": "2YV7S3YMsceJF4aQYjPzs3E5uXTPqmQ2bvU6fV2GVSbXp6d5knCPxdj9AJV399gg9aHKxY2mJ6CEG4J84j5FMz37",
  "key28": "2ih7cXjcwja33GA7BMJ49V1dE1xxExBkxXFUhdvEfErJK1BBzebvb7ZP5BzVhPvz6ddsHW72JyZcGr41NGjRRMwH",
  "key29": "2yJoLL67ZYhcpq8c1yXZ4wxQ78mTZHJ2BdJp2MPqG8vyhCzY6DSGizW76JBXbYkKaaDtigu43rFsgN5qcf52NCbi",
  "key30": "3TcJxGgk2A76Ct2VKfUsff5hkFH1BZYud6QPZnRo5Dqf5EhRtqCHta8Ho2XChub42QJVatBZMjngRSEDyxRa5SN1",
  "key31": "cQ3rKxCFF9irMakivjRSVkjaMNGbJwksNPf2QFmaTMU5Bcdsy7D2a8UKMsV1jJVNSdpn3QaLG4byWYgjSJVJadu",
  "key32": "2Qc3NxC86HDDq1cqyFmTH21wUZiVkX51p1BLfpyE7iQenKLP2GYH2FzjEkmbqBwfXoDKBNhtfvnUqNjkS7NKeEh9",
  "key33": "qUxrP3tcN2kBPUZ6xk8FQDHHHKJacRCnL8hJXT7QXeUoTdsBByAZhvwBVcu6fycUK6v52KHzDdvSjdHbxn6wBfi",
  "key34": "4izF1gUn1YQQrYWdcP6frjytPpkrTK3LH9Z7ZdNFCV2CHSJfD8cNWMr7hDondfyXij4VXLSNAwchAy8wquYYrW9M",
  "key35": "5pELveMmTi3qALXtrWpB1ujfPBDrLZj46ssYbU36C2b9VYqmjyTcbvpgkg43XfgWxKfsAaZCeVpjgZ7j9FZQRRHU",
  "key36": "3ZQv2NJek1YZbJiEdaL2JP7ZPkRead58zHTMJ7ekenBtwuMXKBjkz9maXuBe9efcgnJWpbamahnn3xb2YnNFR7HS",
  "key37": "3jmqvQ2fZf2nj5vYGTxouZydh7tDxmfaTLoVmwxxqea2GdX1EtgAkTYtVnEHzBedKMDmVWptqUAhVgvqy8KQe3a9",
  "key38": "3vhwnR4jNA28SHVTbvdmkP4wkzBSGRhc6zxL4V67a1nNPFqQnqpXwAVNuDCbEPDSdPqqWn54W9nFqU2rM2krYvpk",
  "key39": "5ChPvC21XAYg8JL8wHKq9cXpLBJBjxBPaGmgpmJqZ4hWEzroeAsx4pMVNeSnt3d1zNhM5a423j9neShLC5HTXeaT",
  "key40": "3pee9hpEqFPs3cR8vdowPZZXempnGqmkkZq4mmrR2qjQaJHeuiNmqTbv5mAZXhAZYZpaDUZGJJeoPfvmqRtquaE1",
  "key41": "5nz3UAJPnKG2SjCudmDCk3PHsf381c9SEMhGQZhecVP5LvyWHrX1MswbzwVejQkLhMTAVPhqefm4HUTUcbrTtoS6",
  "key42": "3yi7Wfs1hbXbk99mytTvHArUnLG5spp4itabo1uD4iQYTXWiuwfJdniAmabmxZEN5rzJ8pZPRzvhUJX6brU37jmz",
  "key43": "NSHwn2uBKsJu3LofVeLHxgcNxnmAgJePVRQxqamYmChvxhs9j4oayRbAFyhAT8Lo2s2d4h7wbpj7i5Bm8e5zWUr",
  "key44": "2sQX727cbybhNh7narTES7oX9DBkdJsFdepzpFNmrc3FS5Ao8kzHFVTso4xa71yDRRNqit3SqueMDETfwcpwXius",
  "key45": "2Uu2X89Ty9LGzSgSmW6Q5Dq2JGGCt3kq3JisR8CJ6N8cG5QHnZu5L478G3XN1gmYBRVYxzj8oCMviEE5GDrUX5RJ",
  "key46": "H23dtoDiSVSimYLA6rbWwnAXFRWdyoSR8KuWumFuVhBhUyisvVpZwFJVcUxdZbQdoszhqBy935md3tbwA35f2Fp",
  "key47": "2kdJR7LJMMK6jGSbXwFcKpdXcK4H5baSicJbgCZPhuARQCBLukah3HTf7TGLjZJZtUfGorf9U5VxJtjNUWM8VZLp"
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
