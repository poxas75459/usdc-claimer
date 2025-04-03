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
    "4UxeYtoFXRSKPrjRJtWCxgGByygy3SiPH8ddapgs4b4rxiaMupLQUHajYjhQac4QqV2A7od6SzoQnkrTvvuHz9FB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DzNtHJ2NCABVUCv6683RAs4jC7p4r7yh4sEs7MUgWsgQnruNn9StR8ZG1ePof8zbLAuB4VdmP12xqogTan9Qj7c",
  "key1": "PuGR7JSC9wr78BuB2mTmyswFXkF98KeUCb3zYPabqaCjmuGUsRg7xRpLxooViLgYL3oU23oYnoDfyqbrpwAXPPC",
  "key2": "3sS7fPVU9jMmypiGfPGVcJov6dExzCLtojPPs53oPznpYyytTxLQ7Pf25t7qpXA3JjpLRvnDkAHjxfMw7WK7J1pH",
  "key3": "4fi3NGiavwqNZzo9vWnASRUD4WBcEF8S8wWVHn4EKFKxTtkzSbkL3BfpcdyTs45r3J2MDZpupdURXV4U9EjgmhMr",
  "key4": "66LfqQEGiX2h7Mh7S3pMYdCnZburiM6bWZYAw5keHHyJ7R11jzDd7tYqBMP9qYu3V8BsAnkQXZd4aPaAGXAHi8uY",
  "key5": "4BdfeRfZjVgBdtCyriG93s4uFq8q6kmvz4tYQSCfNEZ8w3G8NcBCTavgsi67CAnixiRcbUbP7gkLEXZyxxHTggL8",
  "key6": "22JkzdGrJQ7b77QPGTW2aWcJNDUu1xQiwLimLbvi8urGbFdTq4TUew1dRDbc9xwS32RmqbDhTrVBqGaX5BjLsnhk",
  "key7": "4W2nKTrBb4oqcGCs8M1NDu9YhpHec1m5Bgh81tAWBZP1qePkKdm9cAmBeJ3dh9cemT9miAY3xABkNN7NtQurRZkC",
  "key8": "oi4HqvHwPhuXxKgvhVjMcK7FkCabcJsn8gMWVr4UgGvEtiPehQK1R2a6Jwp5YGZwecuFd9PdM6NDuAjHki9zjAX",
  "key9": "HVBQLJ8Eu8BFjwpm79B8biKRJ1VT48DCAqmLPLSStrn2iwc4HpMTG6wzhNNvMr2uMVbrFiY1sJRuZiL3ws28QYa",
  "key10": "41AKTtakdpSMBqG7vm6WFzoEy3sZSnJUADqrWYHEEVSPBn83wQQ1voDaLQSfPHtyoFkykikrRWgNwHTovHtvAu2D",
  "key11": "QwqmPb9QNgGWe6o5Vn983ZK64DEQFZUbm8HNzTyESPBCwxFvE2qsYcGyeEMKvyTUKyFXZJdbycqVFU8un1rmvn6",
  "key12": "3G5cdY1xjSWC8TE1AbdCVzFGWTQ53vL3mUvpivKhtegHmLRDreYzWyehcHwxh4NyXnDASw3pMAPjSn9UDgSg712g",
  "key13": "4D8Vb7eD3ToJBiCisWJRo6Y6LyeoLTQ739gk8DVoJXJCKPbZX7v4sK38keFimML4pnbHwWoY9uZDeNcnvHdxNcJt",
  "key14": "27yv4UPU3Lpq65RfUFhqfRu8d1jGFaRDy9qYjtHYvt4XZtTzaEJsBLsEtNbgEhHHgghS8MTMbNrb1qY3QG6b3kox",
  "key15": "23hTbvFuXe3EbEMagiwfXKmwEzkykitjtHHGcVvA9iJbXHoMs2wqTxGU24FjSa5chuHTiBw6V4mZpKvUUWUbYGhM",
  "key16": "cHnhR3iuFmrJtvKZtgMDFvttexaCA9adDQoRtHnNEB5gSbN5b1FgxfZXew4CipkSEkZomzuxkkysVJsPKUYjZfZ",
  "key17": "fQE79Jewy4MnvK64vHE2XycbsV67tV1qWVrc5sCDTQWheARRxHqseCPBiGs4bYDKUcFLMQyf8Svonmerc87CeLY",
  "key18": "8MA5RyjopYtN92TUqSsK5seUV9jWo5FkCb8M8iBKaGNnfkfKg6wYZGNi84ydcNvq2izRjtuW7KTqh275Yjw1j7n",
  "key19": "4V1WYasWDdpHzRFn6RmoPsSHp6m4AgKHx9e3AEdFSWE9Gx2iebR1EkXahPLtBoDNx2AUQWq1512BdDe4prCV9MQU",
  "key20": "1WmbsnzGms1iKPLV5zty6TmrrNfUTPYrLTH1pXmwUvimKuqfZMVjU4LQ5xk3Jubfprf6Vj3X4BCiAAfjWJ7Uj5C",
  "key21": "3hVkA85HbzUoxwX48UcEnDpcgZAXGjvLPaL3CCXwZ9UnvrEPjUDf7pTCLpeNv4GmRJ6W5mbBRuXcoQ4oFqoQuuoW",
  "key22": "21iDQNrYJDDfqBs8AiiD4PsHK1bGGbjzyqymqCJ9MqUCa6zz1wt78tLGYbtjd3ed3rbwYTV5cCizsUntaSHiH6av",
  "key23": "3W8TM4nebDhyH6SE8QTaqPMNdNkmgKXdkxkFi166qVi7WsUsP5xCU7TqxUBCxJkasfkJHEVtjd3mGk4gJSeP4ofT",
  "key24": "SGpc4AcauEgmoKWjTtLjZxPdz7d4RGFcbj2unWtw85g3UQbXmrgsmm7DyKHh3ebvYLKPzUixAm8UVVt5zzoyow8",
  "key25": "5MC4dqZ69fWKuFSqFNHashSD2Sbd4p8Y4rKieQwhxpyFyV76SGnyi45rohB44cnxcsjobLjtWRQtx15gT1UjagLz",
  "key26": "3XV7uMnAVW7cZY3CnAo7cz81sMqbBRqpaDRNwu3tG9s45owE9ZigmWAMxgoB3Ej723cLz99NHjfTXJCV6nZapdgS",
  "key27": "5JRREsHYKHj7rnWewdhEewqnf1qxGXzvkYceos8fy7jLuCscHpSRLeHCyabbHozbrfXoapyzWT4MAgab5rhrwDsc",
  "key28": "i9JcmFr4on9d7y6n4pJdki5jV7UyRopxUAbH5jHojsEjWCabVY9GDea2eD5a8d6yWHPMyyEVuqjBGfE3PrW2b3z",
  "key29": "2kwxjyWud7tF8bfuHzRje94BAMEn226yvVauHqu7Sp18qDwEdPAWhmEyj29mMdpAPCWDLfj41uDFFChDcQvNF5KP",
  "key30": "3pXumWFdjkZSkS1BVoj8itum3CqTKDUtSaofADVPDxMVXiaKQrmsrs4zP3CffKw4Dshzn4fvXuxEAGrnH1X9QkfJ",
  "key31": "4C77U9ERhP6gVTM3Szrqoq6ShPDEUQPTtqsctZaowgZn6rJ8fVnAF86ZtZ6bdaQKn6xHJnGB4MogoatPY23UhJt8",
  "key32": "51aMgGiYSvcaLg4gNP19RmiUqMWc1tWoZV3N4bfDdRMQBe5ctZz5ymmNdrjpYbxNerBWkuewqpoxxiaXnVnudkLt",
  "key33": "3Y1Xe55qAwLUAuyTjPDXvFK6VfiyFhxhjbDZmJWxjrgjTkHeLasJVzzn5oAAYJGKUyHsDvVps9JNhY5xjSaJYmuC",
  "key34": "tZPA3VCxQsDSXB9iFozmE48tjQNsPbQ59NaowuteWwTjr4AQLKXjSRy6Y4NHKV1LgYFSdY1hGaAxKmbfqMGhbke",
  "key35": "CGW9ivbPzdXtvANR162qh28wRhBjsspoRFaR1n4tzHhJ2nRpszaGjMUFXf1NPiSJktQ9dNKMarVLZ9osC2phYtB",
  "key36": "4X6bhEpD4kxve7JC7vfMAEfZuSuRfVH7an5SnwVup5PibsxvPr4weS56pmTMGk1fe8ZqXiiRtBHPjtTH8wHhSPF6",
  "key37": "5GKsqSRS25o1GZvkW6HoD5UdrpH36mebeQ6EGbGEyPocL6Yz4bY1TtZnthSYs9ce2gDHigZRHGyPxPPum59bWPQd",
  "key38": "242tZmbDL764MPaaifW1cNGe7AzLV5d1LnCci4F5Zg14gE19XbUeeSejD1p4ugiHbGsdeuyALoCzzVWSrdWAmfgZ",
  "key39": "3JEkb9Cn68JyuVsjg19bcVooZ65Ze1KuCJPshqfairTZbbh6LWjxtmuJ1bechfHZUWkTervsiCok7BN5oA1TpzMt",
  "key40": "4nhxuCE2GKiJJyoZKsoNrpsY7Tv3N46DpZvYFE2mPpF13Aj331niUrPjCus1JRSgkaMqCB5SheLN42GQdEauA7fX",
  "key41": "8EfP5AKJhmMxZfGRkwQpbRs9i9CcdmgujUpiczZbF6zbZEH2vGzoxQEHM1VjFYJPzn7u7sJp5qo3XrHmrbtDWaN",
  "key42": "2GY5hRBdbFWDLB5atauNRidNKCgJvMDcvzFMDcvX5pFwBiEEUxnqvWUuxRDAV9x866u12qxHeHNVUtv5SEbMpuox",
  "key43": "33c71ui85HQVFpqtRKopXPwdDpazjuoc9G8FSWdkBtNgkkUUycUFGaz4WaMCNbfR6u5rHThJvpYW5CsUQJaGx9vw",
  "key44": "4Wiuz7UGtwGhqQXqCMedS1d7yV5yeETGrgAVcfs9KpJ89o4gBBajFUjb3sNrFeEAuoxzdq6br2tv4nwajDXxQ4nN",
  "key45": "3Nwba4CWXJaaJZG5D9JiUZoZNjAULzf76SnSG2bWvW2xH8vDmVVdrKyUtNyyDjAifn7oVR5n9if2G9HY6uWmUMRp"
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
