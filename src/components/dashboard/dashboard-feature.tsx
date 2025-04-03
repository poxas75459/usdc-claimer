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
    "jprhJeDpTWuA2tDZBbyXDHmAYDmCvuVkxsfcniGG2HsBxxmpkBoLBN6K1Q1s4S8cCv8WCvmbF43JPAr8HMJSEvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25tXoKmihxaumxzZM9qvSsfhrYjvNo9FgK9UvkWKXZKaquMaRs5GYGyx6WCUCA4tKMxFT2WCzUsiY2YVRDHNsxx8",
  "key1": "kjLVN4vT9Jy6c9a3Fjfsbk8V7JzwBNoZgRtWoqmK2ZzrHPrcSx6bjjweMSRyEyXA1yDFWP4jSSA9PY4U3q3dMVL",
  "key2": "3Wzi48zMALzyRykQGipYChg21omp4t7ud3tfUowi69vNoa5LBsQXARLHyiFozNepKfgGdpAkEpfs5mAEB7NThTdK",
  "key3": "4VvLCDkuG7EBComqR1yPsqz4xrzpGLCkBQzyvkFtS6bMcKqCsksSmYiFHmCXkEPN99ChEYBP4tXwhfoXhiSL8w6h",
  "key4": "4LVTUFpkubX6Gj8LyRV85r6QVGjPkvNyALgEyqrKGXQMFgXhUXXodmR68hE6adnKm53QCxFd71B3FDmXWUPuYhYb",
  "key5": "UhD3cEQ2NkV2ZV9jEAqocaoH8C17nPjUK1T4qee92f6EQZtogvQtGB9PvKqs8N6NnniQYe1fBfUBapsXrr23Tnn",
  "key6": "3YH5N6atNK2XsxueLmBHbV3mVhmH9hrbv9G8fr9jtDs9y3jA65ifc6xKHmmptrFA8stQBVtXU4487trcC7UcAqmM",
  "key7": "4h3oMhN1gyvVqj3icBoqqDYHDKkCwRi1212y2iSzrZSFH3Tdk7E6VKJxqBb6Y3Wz4MknmNGuAAcXrcC4ZLAwKWyi",
  "key8": "5cQY6zbPbK8mjDDv95KtSxq6qLnTywGMii5qWYxEU7HPp6mSAaeEEtEQkyquQA868v75zjmF2tQR6VDo1dNVMiyo",
  "key9": "5GGUXfvqKR1TARFcT8gkZyib4PwLVsJt17kn7wpipftouMhhzb8ELA6A55snjRcDLqPV82LvNuKn4UGrxnC8788Z",
  "key10": "4tydaU4hzxG2DWV6L9em95x3hDRYBjdqbDVaMXV2CfATHu9tBqgGkG93xiLfVT1JfKZhumqrJPXYCMqGfukstsxa",
  "key11": "3TgpWhgkygxd2evSwewFSYiqLPBUsqC7hKYsD91FgDpPNrwgqVMUFsLSDZ28tWcNKSPVoBLUaUNqZTSSoeAmjgDK",
  "key12": "437G6gTrDtDaGFrVXPp7TzgsSZWxYzSVb2nDMokCEswCD8e5iWXvD4r1DDDFQyWrdFGXr24zjij9Ugx2WteJyoB5",
  "key13": "36WTaoEQurwHSuxFGncF8qzTa7KgicuQqcdJUmi85tMctKL1RPg4766fStAuBo8R6n7h2JeKRWWB7XKCArjwfzEP",
  "key14": "2YiqygJCntagWyU5WbpsFHFcGCAHe5zQNCTGZomNuZmsCgzBqN2LBsQAuvfkZbaXjyKJChAhzCeLKkpXKj4QACtg",
  "key15": "4pwisLXpw9Kdvn49H4YdHuvYfYu5AAjbAjRqQ6fzWPJqFSDZ7SxTcyJVyjTDBMr9d2kMDPCMDkz2mH2qnrDTgBxn",
  "key16": "2rGqFtyK7T3yipMAyEL98yHDZYipfGQSQctG8g7ceYkgABJArq8zPHUtb1HZjLY3cDvfirdtGX7ZLn6KXyYxGRxx",
  "key17": "7GAz6WTvr1aQRQekLKWtGUbC5cBH5MtCMkD2Nni2iLGwkWrwvMtfY2Rbp3NSnYrQtXrQXmN7HZdSjc92LWTJVYx",
  "key18": "4ERo6mFKhJfBdeRrPvRjL2WZdg6gMJPKb9gzGmqnm5T1eJyASvUY55ip2AtTq1eajL1BEYwNgpWZQpvBpkCoMJLw",
  "key19": "2yKjTgGf3YZ7hpuATXG5Pf4AyuPdybjibE65xNjhFXmffCX131pQ9hkS6q3cBGeqbWhN8nLU6mZaUDbtw8ebG562",
  "key20": "MxnCwNonNJbVjPpmQxiLSLRZSLZKricQHddNmcQScdMHUAbsH7pZRcKLN5PCMVqDA3AvdrUPz9Mamud3b8gUXtu",
  "key21": "2DgisYeSLdiXnTnFPR516XRmLz6Uu4XGzeYca7G86Aj79oGuG3fDUTYxe8zAPCXHxxBctYuNmnTt5AkJEY18EKHF",
  "key22": "4pSt5M3mMSmsg8cSB9DdJrvTejo4X9P4xCusQmytseodS7A2yxFVdwwZnRBB6wVUTMMuWfTwUf7pTw4Jq37qxft3",
  "key23": "2vEA2nLubs9LjkAUBscpWv3pTjWiRkuneHH83wqdLxpXwPuNF8epWT4UMXAzG5RkQcnijiPn11Tcuz9vWqxtf6Eq",
  "key24": "bHdvPkQRoKFx1wa93EiczNdJzeLqYevCGLsSk9yDQqmnGdwPjYMY5WjKRk9LfP2v7TzNNRNQSiKyyDvYHt54s23",
  "key25": "4XzPjgnYaLUgzugBAKHZPe9hcW1dieMqvYrb8xsvSeFLjDqbBcjnqXJApCNbkk4LvPqikMDu11sD8u19PDb9jFNy",
  "key26": "tJwDdyhzUoKjTqTwL6ULpFxfVrW7sqcfB2gaKmKuGfxcyZ8YKekYsD9uGu64sMk7sXNvtzanMwqFikHz3Hq5qd8",
  "key27": "FKHKBKkecyiL1qF9BMn1cFyfFsTkSSfPLnaB5eAn7s3ucx85NNpzKYQtufmudyfmg8s5HwU3U9PMXpu7ebnYeaY",
  "key28": "5je9GaE3Pmgy5V8T6zz3cZKjqNJB8ovwfo25RTJRAGWvSDVCbXCBa7wBqbwMMfySKrNyhdYZvnK6aFuhYt3peWrX",
  "key29": "4jSbdyZVqDMwdHxxYnDKYRnXmqignjUuqLyMkyZyfwYo4LbVQo1DsJnJ898YTP2XVr51RqAUKamX32ZEhCS5oddJ",
  "key30": "5YHYeTvq7hSNhGpYZiZriJSmVEt3Tyvka7ACrRJgmSHTNr8RBF45putWN8ntLYDpwU8nhNrfY2pFzrvH16g68K3K",
  "key31": "4jWUUfeNuGKjfJSzZQukTun78BerAnDcwJ9G4amPiT5X5weqxZSjeFt2qyihUqroFyWSSP8Dm6VSoDMPYqeRiefN",
  "key32": "34c9gTBXaw4J2YN1nPLbPH916LktyJT6yooPtsyakEYpjigNJBoxde9XzqeS57PV2DWQoXEbAVSAdQxD4V4QMuew",
  "key33": "1YTLH9ygVsGsoi8zcZxD8SSv4kMJ4QTTtbsUxan7M1FrPxtnnWXh3Eemq7dEJib8eUxPzQ5pA8fV4yTfZd6VZqG",
  "key34": "34u83V8TUD6fprtkAjm2JhZn59nJipxEEFfLPuXDPMP3HZdjsFtF93jZNN85axavbur7MeyHvmdnzhzQWFKr4xn6",
  "key35": "5vFrqtRKSmTcXZ9RF16F6SYjFUscGnpzSDjLuyCsZyhUKL97vr6Fkh7tDGAA2gB8eaTJTeFRv8eVotdx2JBLNR84",
  "key36": "3UJJ6tgPzuygKaFVrgGUT9is9RuB9StvvxK4c3zMwGCex3Vt9muMTigYvZTmDaMCkPLZ5dPgozHQn3TYKMj7XXvP",
  "key37": "25qDMSYrAtzfoLc7F4hCvgCCey75j3UujDCiF5nSXmDEBeVtM7zM5szG2qi4YsuSHUDqngFfbteWeqf7hA2KB1vT",
  "key38": "2LLA4gyjTC7J5NYcYZ7PznWuRkZGaDLZtD778KS88j8EJGGYAKQuBw6daAX4ryhoNbGjHh8bZ8PjWucyaKvZANxK",
  "key39": "4XFecR6PQAF1SkqXXHhgyaGCsXEZeQDjEpmSxLTStnEpSmgCs3R3cHMuMwZfTjhfN88Un6j2xh6NZZHFswnh3zGP",
  "key40": "56AMwTetV8zZUKrfBZSbxEEYQYgWx1gXN57iMKgLrKvbDrmXmX45uSbn7oYjTuGhuD8ChsPyY4qf6fzT4pHVd2Wc",
  "key41": "66dALpSdU8sEpcdKkKyR7wpc9usVNEnNEqeeTinkY8vEym3cJFogNbSGv37pfNc4uG7KYWxKWgAEdwUgYHuCdGjQ",
  "key42": "49evGeXn9jQ3ie4CbcCVe8Wde7ymeoiZngGRnQ2vdRsuTXuTtGr8jgtCC3Z3X4exAV1Sz7v5o6yARdreCtsvTWtB",
  "key43": "66RYBgJKfeaFEoBrKgHHVYWiLeoYXMRg8g8WgZdDLBm21JQG1qPScHrtqussqQHQsowKip2SmSTfBUhu8rb78CRb",
  "key44": "4h1QgsxfEjbjR1G1heesHYs7E16Wq3RFC2RbFq5sFa8HYVoMkwNyvgVx87FQGmxdK9BNNmUkm3YZ4TuP9H9PgAGt",
  "key45": "2iMtzWZPpnSzreS71EHAHBqdvTzVPHyJ3th2CADx8mLgMNcvduarqSZjkJeDfXC5AVJitPCpS3mAaXy5XL7HAxbW",
  "key46": "2m2wScsxFPHkcveyCVK8P8vC6LnoRaSS3KApXZUgV3WSDFoEry5EAJn8s5pKQH3t6F69bWL1GwEb66iK4bguYoCU",
  "key47": "2vhRSz6B5SyVHxk1Wz7MivZ2GYoMVhDgDvyBHcGzRRPpbTb8iMBvxxtducrHXDPMadFfK7qxu1j31GWj7x7D7PeK"
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
