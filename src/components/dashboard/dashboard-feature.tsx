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
    "2M4kfJYkeaB52QHDEttFu4VBNciA6cQN2crAB9iJXYAxeUCsPDq84bPhRou3GJEozbFsDZgyMw24jPGK6eELTkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nMxidXjtLHp1s1kTVb2Ck9vd2ZRtQBpYuTqpBATNXgY81AFcGS2p19CKHJK1f5T5aqBdK2m9HGWpKmB4KJx7xSu",
  "key1": "4meKSXRyF3eNn6uzKBVy7ytGjbB2UwcygrdhSWENF4bVRrdXd8ejvvgDdRzdV6933i7o7WBykzwfHh8UcLJqfssn",
  "key2": "66XukmAF2Mt6S9p83hbKBRtFAbtLa7mCcPJZRcL76u6m3PJ176xf1PrbWnqCUQw8bsh5zaB4d5RhNnvV9JLEdLzG",
  "key3": "5nfkHYKLCNTGAZeTTBZZDuaiumgQPow9TZoc88h5UnWW6EftGEBD4teSCgxZcSbKa9n2FRZo6oejJCRNMyWeyzXU",
  "key4": "31g8cr7hM7pXpQ1sHdFmHosHnLfXSkueVyEvpPJ3BZBQgc5ggEM7xpfZB418pNkH8o2SajGqzBusETWUT7oksgsR",
  "key5": "34WdpdK3AGM6RRH9MHRc1RYZb1FhkBp3CTVwiTPgX5puVav9SzKGL9SMtocweimZixo3Ka5PASJUZ1PrU8biqe7m",
  "key6": "3ryWhabbf9xR7cXzREN9odVKrJfdWwFet9HQufRLxphLErNW8nXsUiMb3g4CUuQLC9KWqzE8ARzG5jaxhfULGtuo",
  "key7": "5E8gKWDYcqwieCEFKG2E5HxgFVxPEztDGcyyZ3wMcRkuxSRFu6Kgizwwab4qdyAeE8N2ySWurXDs2TeJXCqHeXgy",
  "key8": "4UtQh95v6MNuCuAHakqFyCugpoHVvwLRo9HAMwYPRHDarGkUCPFbqgTonya6zmS9Lt4jJLSqG4XJMs1gbxMZ1efb",
  "key9": "4xtR9jttTyrqAdh37uzsD6HJrQP6NxAWNtQixg7xLwCQXi89Mcos6uFCzLjDYbeB6RfFGPabgnFQpbZeBMQTpAZa",
  "key10": "5en7oa2Whb9tYmpAj3KxoAMp1iFY8ZfkiZsv2aJumAiVVGnVCb1jrc3A8eWxWvxL1SbvhgtimyyDjm3VrKeR2uKf",
  "key11": "2UF8mBcG8G4yNWgt3cbw6sJbWkoU3D3CwNBDSrAPRnRTKDJK1nDPHs1efZ1ngNCgTgALW41uxdbeeqikapQwXC6C",
  "key12": "671FaqM6ya3DgGgNzrHZkgcPX51z2sWWhZSCvQYtmaERMBDQaXyTcvYSy9kUGtYwDKSLfSVUQxNtAb5Si4JrGVuc",
  "key13": "2hJD6jcdqQ4ud2Yv3KivHLJxhUdp383jF5tGL1g6grfWRwk32RrPH8rnGJ3PvsdLyLRpEj5NSrMyjSaMqc7gmP51",
  "key14": "2YayCjU9akTPuiiY7y6PskSnbHK62MPLrVvWC6E3RgE8g8gmFj9XJthGuiuJFodeQuGdH85GUgVqhKdEY1LTQZgr",
  "key15": "45ngrbnGKT38K2yc1VHVFra1tqrxKHTNnjKwTyeyUGY6g4XXnpemzKo3mWSHcMnV2ndSygckXsbTfdLJsmebDJsx",
  "key16": "5cVL7S8nnhCEACYPqmRJjcyDXiJpoDJx98XrVqqsJeYxUbXFcQRpTqoi8suySMQthvHkJW3u8xuFX6PwUYotopnQ",
  "key17": "2KYUqsA3ph7zA6yTRBhrKR6bLEtkEzBmvausUsKEhZk8Yyf6ZJktX2Ygmk6iu1sBsrN4xCS1W8i8J9hXmkXSpD3s",
  "key18": "Gzuii2NMeKzSZx4h8Sgc6i31hYL1uJjjek7JS3W1eSpL8TznUFcqLzh9ohNEjoBXydHJ88F7LBcFF2t13zoUo3p",
  "key19": "Xf4Zg3PJT7hnvuvQwyaYU8Xs9DTAvUVHXZBFF1ZiXFWWZQpFxmw4o1TbEmaWfHPhqJZpxka7h2BbkbUxoqJYuNF",
  "key20": "3Akm5agbjNiStWeVs1AYcq91HzNAkzc68xTo9dPiggzJbNzZRGG2NhG3dP9GDFWH2QmmEMiuPdX9rjPA2pXquWK3",
  "key21": "33EouDkkm4yKFZBFpH9jDzBBZSwjr125GVoekQA1DawxWWG9EScjebsmVaaid6JGzAFMuajVAu3yNMX1qhozVc7m",
  "key22": "5FdMg3qMvrQXv1HeYeMbVhXgwaJHCd5fesjD1bcV7Khxa93fXHntyc22mjHTNbnkFNbKdbhvnW9zjpjN7Zz732cZ",
  "key23": "5jDgULxZdvfzojBTCtFDoX43gbYfL4VKKPimZhEBvwLjvxScdQAiDfpnQQjTvCseARJEJi6oxdFxozYaojGPVnZc",
  "key24": "2j84NShipjwcHxaoRG5DacCrnFoBzCZt12hJPqptT1u6Wdazs2qqM4LkhEZGRE1VdqnkGWvR5qiSBTen2m9qv3CL",
  "key25": "3QABvQDR4Q4xA2z6hU4DTxXdGAjuE6gy5JhPgJuNWP4vwH1JdFrtFmxfLDh4HYABVBj1QPg3CzQXi4AASus4uNB6",
  "key26": "4XQYxYn9GKGmpAcjRUukPvLCxGEJg5f4vLbQgCKpoj6NECf4NMjfhFnM1wfvk7CAwtcUuXxoeqwp3c4spBAj2HvT",
  "key27": "eJzNRtrQh2vjZ6i1SnawuezHupodW9WZtC8bGjGPHTwjUyyCNXhVTTyrt9H5UcoxEn6KvYp8XmkCWsM4ePpZZFj",
  "key28": "3yApqrEW47PAv6SjjpmCRqpQ7YYGNcZdSUDYbhxWTRFSPTqWffK5pFVRYrW9V8tde9sUfAb1vqqSyobMM6ev771X",
  "key29": "2qaJfFRDfjZmcr6jyFSoJmWaBVTVwMzc9KyEPvYivU6RCsQWBpKTxJ14X4MrrwJr5FmfBodgPywW42pQ3Nn2s3gm",
  "key30": "5ubUC5scZb4jHwhqp4t5xeNVNGjNdJ4YU7bKL3gfNeJpxtVEsjnX2bEUd5x8pEhSJcP8bnUss7rU9PsNrEMSAdJG",
  "key31": "2L4awNB8h9p5ftaoAkZNwSkDtjZTz7SVV4HbXH6ReSarzGErQkaUD8V7Yt99wPBSiQfi6YJquAShcsQA6eCmFwo9",
  "key32": "9cwDkBnd1KptJzRJoch7XemAStJmZ5isJkqB8pEXtLYmuabVBsq2i8SDCgZUxHiVbtudfxVhpqMcy55LVAPqPrK"
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
