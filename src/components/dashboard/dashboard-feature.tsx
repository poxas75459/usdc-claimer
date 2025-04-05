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
    "4P9kWGn2M7bLasvoutLJuEa4DgRnkirqid6AEXLo3xLvG19tz2QHirtqg5uq8GfVdDYgoSwWY6ywBaHSUZibH22C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PVC92Vn312oDEk4z4nxQc7cFnZfBFenXgaTDQK9SsgBGRYscF3W5ahiRmuu3QtriqYYZPpyjjfiawbhcogA5BwU",
  "key1": "5vPidsFX7DdPYC8n6crcuqUFS1Bxp2Yp3kfB2edZUEQM7tcxmAdX3wkLqs9dMBn44xYnkw9gDwLxDkXG6mbKbsSh",
  "key2": "2HbJKhVSkWDQC4Fbu9AuAPqq81BsBfBjGQZ45JNf87RAnNzRJ7FBKrYetu9SDbptkWhdrvXcPvmnJhyTJoNLLGWq",
  "key3": "2QctU2NBmQteCeVqbKTdo6tu8hyamTU8AmxzTtDxpYDq3TLe2e4rKNYtT74pJePBoid6uhgdQ9pTfmZP4UwwUEa4",
  "key4": "3nfNF1QY9FbJ9QxSb26mrNkbvpLyXcohwxxoxXPoHDTY7MsL8hx3RUxAFX8QQWmKgL96CCiZJeNeBNJ47x6VHcgq",
  "key5": "4AvgHMcV33Sn3FxVpDZDPjG7k9yFSzZug5UQm67qCj7eanafRHT7sBuQWNepjgzbuLGu2zbh44hVSzwMkKsLmHP9",
  "key6": "2heHTSfgngqHsbwMAaT5CxhRopmHQXTF47rwcdJwgNWryw3v24NeFZwZk1UWzAU1CiJxWFJMF7BawLirjx3egBKX",
  "key7": "63DLVS2RkLoJdTWifnXzAYzZsxieyEk7FadVzX28LEW5LzHsaWxRQDwVtux1iZXtTJ4T2Tru7PSTYo848nGuc44B",
  "key8": "5GpuHFC44z4Gk22BXMrd6BAqkW6HWABHincv3DeAtK86BJPaxN3d5dsghMVcbXY9LsUspyRVvxDi6wVXncAk9tce",
  "key9": "5bEQXsMM9NxuKBwzTsKNkmqtz1AnhhPCsRPgLWTYRepFtD1BKBSKvmcC6YsPjx5cqC2boHWF2KjQs314iuJfQf12",
  "key10": "4Rd8LdtHU1mU4bcmvpTYarVzCrsnhjHGWK2xbkLJe42hYPjojModAhbKcp4mRs8AEi27r8s8wGwDhJtnjnhxv9yU",
  "key11": "54W6rdh4vkZpaUMZtxcAh1G6MJR9sTxCmkGSkM1sabSz6BffMoSNQPZbHWQ5PFmJbQkmoMUxWkLQB8mXbHFnsxhS",
  "key12": "3H4TFQbt9GUT7Cvjr49mita48KVc4JxK1TH6RdMK1iL7PM1vyKxXP6j5SCtdt15dqKoWsP4HhPc73Worq1b1Zspu",
  "key13": "3joKZZh6D8iXqyurefLSTY6ZbZ3EdcKq5afadArE3vzcw2TS6Qhi8ezv4HTBDddieuoZKZ9vyXSq1XDgGmz2Wz18",
  "key14": "3SuHd5g9WpVjtCmG6ruBvxEEUSeJ1njpybNQtr32iQSAq87mMAJvbvJsHm4aHsobrUtP8XoLvfbJncALFitdeSu8",
  "key15": "354zTfNA2VJToWDJJrYUuWMSewRMKgtHSmkDben7WjnGmUtgbHYftzd36UwAdwocuNLdJkJd3fk9saDQXMCM3Bbh",
  "key16": "eoUD7KmX2oGTFk5W2EMX3CwFd37GdYBNssQvXExhy87dqESdzAZzQqzwxcyvx8jrE92kxgMCknAvZ9g8pxKGynv",
  "key17": "3Hg2GoGTjyPuqUCXRUkxVEr4sqSZnCyX4qnEkJHPfn9SBsS9Usq697RBGxtkjsYdJw7rqsTZcJJyakhHmc74ATRY",
  "key18": "55gbTurwHCS78oWeNGhnEjNSqJRRs2ueA2muetGn1BPCS9m9aTvTy5bQoQKrDopzkgoqGDJfJfposzYMW2hM9Dt2",
  "key19": "NDBU2DbBH1xcCCjB1xdP7BmNeqFtzS1AsYUhLNttafUau8sJuNLXng6dG5PMtd5EvPsv4XxHLJFxppXomQ8iCAD",
  "key20": "4AH4bD32EV5F2G2jBNAodCQbJqQy7GFHJWRvmRQWjMXSsE8KqH2AZAtAw4reSXS9HnY4Q18Nujdc682Ex9Dziu7c",
  "key21": "5tbVhDR4TBkpwa5YZJ2mXi4oWKVV7215qS8NQC41aLoEmjoiBWLxoQYRY31kRBR1aXqtFJbCbCXVUhdxdatUyGwE",
  "key22": "31BnR39wKyWis1cryBam9iwgLermgg7R2MtEFgAvsEVc8i3aZeeKmAdtS5Bf8UzxwGLCxNDktoa88NryjDic4pRz",
  "key23": "5KfDihQJMMyLer6NaunqGuuAsa7W4KpDb37Y74dvbdfz4SPb8EEinDjvFfffaXvePqSWmB8XDQ9EK1NzKY88yf4",
  "key24": "4MFNDkMarFmrHZgFQjSH1pkkDW9z9wHB39qJ96PVY2Uq6CszSv82yajra5v95jYAVQy4vfviNCX8ycpyiYv3vKRy",
  "key25": "4onupg4eqJ8CaNC6ryTuBMeKr4ycykFUZjMnj6o91gKi1V3vUauh2EMaSgcNmsbAa54K1ry3VNkhpWBj1Jd1c8cZ",
  "key26": "2aVTJV41H3HNM5b3v83M36zG4NboGhYwKdxNb1GrobXqiQ4nN7N9vFRAZXEtJVes7wjQ1a14LjtB2b3gnYBaQUuR",
  "key27": "2gkHWUj1RCvTGfpH9kvX86xTtxhRNA2kyU2f45eyF3sQnYpC8CKSaw5rznk4MUMACrxuLPTrtmK9F9bR3aNztyV7",
  "key28": "FTTLcnHtsrCKgN7hpxGXfE3AorzJ28omans8kxM29ZXcaWyzuWt1tGuuVMxAHbMvXAaLrmTpzaQcSTCFCErvd6g",
  "key29": "4m8iNzbwzivHHwZqTXsTzzwt6gFmg9rhciR6UraM6y1xrLiAg9fe4oipQpi9XESzMHyJnsQEWVFa6nUVLKjSEVRe",
  "key30": "3zjFjXFLUeXD3YKQgNWZ61uBMz5DGEFw57rvHPYjgDhdegVaksKthv4XGSaJAw6hoNAKWrwkja6PZSYmg3efWo3V",
  "key31": "vPo2MdkpvHhHGR3fzGwGsWVh5W6P5SbpMwXEYLJviYKq6FUo5JPRYMoHTFt5XZ2eFRm5oThyghBPQ24QwZ7Fcpp",
  "key32": "5gPceQGdFAxmmEGoKrEJxbiveouBnGLy7EmSdoLMuADcn6dvX7PdDBsswYrYWrWe2TwVSWNwwrcETKAYnW7R2Yfo",
  "key33": "35Jg6U88HMF4DLQoAgv15TRmiq8VwP4eNKZGD1FcAoBxVZV423ajqqws7m6khMTR1ANfCqsfhUefjJbSd1TBwiQv",
  "key34": "3YfjkxAfy6Q66nFpCtzLBjG5QUAseaGeGAc6jf4ScczWahfbvVZdPNefVH2Jki7eoQz7MwgASvM6oPoq9Zg3wJ3E",
  "key35": "2EgmpDJBy8baCfQUS7QFMwQZJi1FMd3kuXwgZAxb2vGoY4S4Rbgxbpybq2TrWYaU3VhtFUtrhp6fqaEyY4zfnsL8",
  "key36": "4RV4Hpt4afvNqcQ8hFs16772emGaLNtDXG51Zg6x1EUXNHFxf3c5xxQJEVzQtsYmisvgwwEWyvwRLFunkjoKW2WD",
  "key37": "5xmDZG7cENtFazx2NrdK1StiCKf56sQPPYeoatVuFbykeXN1GC9kutAop2BRD7GSxDg2GfMwVXNKf1SRWXTqf6F3",
  "key38": "1H8fQNzMSrtnBu3kbcrcAcjMoMQ1QccefzHRinSFDAr6ANEErQa3dJreQV5TZhdUz5A1XYZjjBCJ8j5z3RZzJaX",
  "key39": "62WaivJnPoLBsz8M1MwxDcUgWzMZBYZ7CxxqBhnfN9jctpjc9YdbCQGLHwbGznPvu8DZbfmgNCxQ2kK2YJeF9hyX",
  "key40": "CaS36Zd1t1Y3WdKaD9zBeyZPLrYpDJFCtZiwDepxh8gLjHrKw4EaF1uzjFpL7dR9aGTCr8MbWosbMFNmFnE2Nzo",
  "key41": "46mpgnT7R42tWsKUk88geynqgdGNrdvAX3u8nzQQHdVTr5bWkCjP5C9N1hEaiYT9veh7BqLKd86W8xngC5AgF7rt",
  "key42": "2ipQ9nM7uY9Rf3BSKFhXzkrX7DrCuSmE3fQUZiw4qfDzHAj3nJn6iTJGe12VQCMoyrn62MgerRvzR3zAZTvKYzCP",
  "key43": "2AR54VrQJwznydpX44q4ntjxgBjR1pcoC8dbJUA3Sgfuv19GFcDnkW9CHGLPiWVGw9tYq82soWE4WkAwvUBoGEkh"
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
