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
    "ioJsUpaQtEN7DvurhrL54okf2qFCEJrWbKDJrZ8ZES4VSRxjtU6eqZCpTW75jLG29PRHhm48GFPnkMaTdaYSWs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FU8uKhnEqKiiWLNeMowAZD2AKc3hD1jMzRzrBaSBw9crqr91dcjQgQnAVvmueNQFsHd27HTuHVSEJm6hfi3owqJ",
  "key1": "2PHaL61EqHxKEb8hbhfVaUYKR81hggsrfq83r96XUxF4b22XypgahtcE4znjT8yMVbX3RdQD8YPVtRAv67Hp7ege",
  "key2": "3qpCa5MY2b2BGsVPKGBH3ze5MNQKknE49pRu3aDhqMBZcreKxYRdcKjeC7vZrun4EXirDZNNrqSopt5WLcFYUcXR",
  "key3": "yqZCQpBsyNm3kKSVQBf5hNH1VqWH3akhqQZFWrsg2qDw33zxCyEcuVr7moRamZqE7mfhuBf8PFRWR73mQhVZKcT",
  "key4": "B8XGEXM7sBmATzdWoE2AJAbK7CBbcjhPCTPUpFE73UBWA3v56wbjPiUBC3aSZdqvQ7htbFe1hNnfcMKfaDFCBGk",
  "key5": "2ZKXaG6keB3UJphB2h911KwHS9NXMC4DrrgiE1rXKHF6b7BEzvtmLm4s2B1KqBntzTkwJBEkg5tFaHypZNiisNY2",
  "key6": "5mteGM7q4kNLiQzBdpZNqWLgQZy8zJzfnRVMKFpXae6wEATK444qcHjMjwhHhZdiGAHBjZ1zpPbbrgmDKnktAYoP",
  "key7": "3qpWpy6BT98rbtYaSmKWmkydvztrJ4JXmbJmpWzavkAsCrc7TJ4RDTj3n6VAaawHkhY9vkHQksskPt3AorYRXJLo",
  "key8": "3VhAepmM2xTPpEEvaNV371ojJfPRGsYpcnmbQUtR6MPeiRWMBq1UW8hPQ48z8DJfa3H689Fzhe6HrdNNQDHcquS1",
  "key9": "3mqCWNu1P8CCyWvAo1owHdrp66TQZfwAmig1yDFWc5huB5WwKSZntRTYA2ojQqPJvaMtKHQ8nSZbhJWvfaKxLoGS",
  "key10": "3rqujLLLdsBbxkUqQeokvywn3g4yoP2taC6sbbmJv12tZxMVWZmMuBizaYah6nzDRaxn72rPrZEXE5njyLyoiDVo",
  "key11": "4HvsHDrzBhAeEuhofuRE4dCT6Yb8rGuyZMnW4gKenvChkei4RSyfHJimzpWVPTGWNQDdZjqQQ8AGUpfb8uw9AEnb",
  "key12": "3NYWDACEpBVwdwiuppxpc2UXqx9e7jUPkMHW9Ems8ShmcjABAajcfWp56Tfy8aQuWjSdZhyvsRcfqej5MjkJEiWF",
  "key13": "56tXivq6EDLx5s4x7tsgnR3rqh1PSmqsSfsk7URJCoGaq1ZdSPrffnZSM7myHFN9kLT368qxEQEH6x9t9RPNbZLW",
  "key14": "5HBosSr7M7vdya2P2qFZg7vqUKrD31ZW55HvqLPsjgFzfnvZCR5iKnBsJ69QxqbkoiZ4uRWdEPymybHJQADcMojv",
  "key15": "2EVswc3beDDtufam8ho9a9XLzm1TZz92ULRpdeUVHFF9iFcjNEhCVxDAV6oytvfRLx7JRbVYdqBW5CX9GseMgcB4",
  "key16": "2MJmcJq7J5rBjfFyAW3D1tGnG2hpQ7TajkrFo6JBSfqiqcAD2wzVn54TsKJE2b8JjZxUD35tnV6J2M4F3KtmqeiN",
  "key17": "5TSQ7J1qmgSTN3n2gJURLmgMV7F2ERk83SHNnM3LCFaN3rCQjC6z1Hm83r7T1ScTz1poTWfZGn8pd11vHwGvUdTs",
  "key18": "4LWqJgGHJudSbkT3J7dRHDQGaF2EdzDSNUty1FKTegecg1AY6RV2miSfghrLSZnpF5H9NZ9yp2EfxJM4V7cd1rCw",
  "key19": "59Uz9UTs2SFPPqHbjeNSnvMCQBqdmiDSjNSMxSpfcs9uE68B9Xmy3SULgtWkeNywZoGF1Tjm84cSmw1tb14YBQ28",
  "key20": "ggWn5K41JmBndgKQ5kQSefrAARbXvqM47skMafnz4qWi9FvE6AVUHsLD2yLM6b4VYvVW3tD4v2fZMndiuTYMXSJ",
  "key21": "4csFWH4vzY6u24kg6jWG4ztqPEWtzYykP8nkrNZfrUzvFj5U4Y7jwk9v7zATRtqz3nFwzxwDKE9a6tDdFWrJQJEj",
  "key22": "5cdGJFNTuBtcVYU6CGUQyMKwJPjyd1QtwYm2ucQLVKRn7UpuzAwLMzqd34YmFjc3ac5eduXurEZRDGfibdsK7xBb",
  "key23": "5qHKEUhjfCgkazFM32AAuzHR117Z8LGpPUzkHA3TveutHtLPeTnc4vZefPehC83cZK7NxQi18FfiPKSLcvAXVwYv",
  "key24": "EMgNdJC4NRagJUo8MJj3a2t5gDCjXEcWDidtdeMYAZn5VamnqBH41FTm3kEfqYhnHjouyNnWUhx96LeiBa6v91F",
  "key25": "4go4uv6fYwZgNu2EjHQ9iPSQcq91grjBFsHzLoeNiUy9b3CXPKnVT3ggMF2Jti3ZNPEALyH9bkNvkRoWM518J7e4",
  "key26": "23ajc66UzHNaL2MdKYMrPGo5KaDVXdfzMndZMSP9ejGfU7vh4UjcWdyjgpLUUpmHGzXWV3QXpZQQTSZRijW9p5sS",
  "key27": "4oQMf6qmjJQEdcGCyhrn34cepq1yrcZurQogzDEB89htYNaknEsQLk1ETHV94VdoDgEsH2oLbeZJgcCd8Jk5uFHA",
  "key28": "3bQPQVNvx7A2tXVQWLEEAJYNuHYeaBG5jer4xi2ieh4DkT493ddUbg7ysoq5HHX8mC6RtasseThos6MrTgiJGMq3",
  "key29": "2tNBNKjcyDMEqMBouizD5fAVWNwgdFhZGbXqe29Ds62YKhBFbxh5ya6FyvAtm91CApMbQKUeifNNeG8Cojp5MTDJ",
  "key30": "4pp5bQQLdJ1FV18FbcPKJbMaxgc2GpVZPALm24EobjqKNTVqxHoVng3dmAXFHwTaPGhH3K5k8a4SkPKH7VU448pr",
  "key31": "2scnsef6999h834ityWUEpHpAAaWxbXcta1y9FZ9VVsc1vSEDKj1Jdb4cmsFt6SATnuM7WWPm1biDhkxepyH25Va",
  "key32": "4UGE4NS2LR8rLpQABN9wL5xjosJToZKJajC92etDufzqPkdtGjzvsTdh5XH9FXN7rVFLLgh4kZ5ce1PQu79iyPso",
  "key33": "2uVCkoGNr22E8DcwAoqzBWsDYmXi2DWPQNvavoLxxnMRZx8MyY54uVg2gWZfp9mYVcrJPr2p5ApYNuHRGhXTzFd1",
  "key34": "43AkXWcyiheiFeJuyFRJ8zyFQQU3Mf89nUVTdgDicqVzktWyN14JggyDLg3J415igriGWuXRTWcQAUaz3ehsRxZM"
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
