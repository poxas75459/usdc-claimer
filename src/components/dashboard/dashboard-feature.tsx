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
    "1HCD1C3mCP43t2ZwhZGK7ctQNU5ym9u5MiMRBQcPfUzTkF28FV4rSukqwQ7YMsMLmgCB3A8uTztdW4UDQmVYFnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CztrDxRRkMEjuEZrr6Pur4gHTNZRT93r9oBihxmDEy5vx32d37Z84PTv5sweUdiQ1qtDcz69vcbU83Kae5jEcEa",
  "key1": "MMLx2bAArdTxXxZBG3NHExEehdM8vVjGGDM3z6QfkptGidNFuRWqjSfMahyhaCcf7LwmFYtdF85Bx1RdJcaYnWZ",
  "key2": "43bRCCigVEbQcSXx3Hs1xJydYp9dtV6TYKJa7MiUpsV5XcwTM2kE5hsuC5BmLNuxR7txWDHFQrWcG1QP7UwHAXSC",
  "key3": "5aSJKn6e6wTNLv9G5FpGie7oeDW5r7bYhgvQEpMybh3htt2fSuZ1Tw24BpQnpeAzqnByLMY5XYDRFSaW73yKDigc",
  "key4": "4gd2FnTQraYYQMjh5YwyLrWjCEEPu6xQ7mfXWha2GwmKLSAoTPtGmBQjfx2fKrYeMLEYpe8WwKgHHBtZRW3kd86m",
  "key5": "3eN4GD5wRB7QK6dpsaizTvujnY9xnBfuVPmEqJYsNJMuURCmdajwxMsYcEeBfzKHiAssDEgFteP6TNNv1kYzHieb",
  "key6": "5SKRrWkoLummvb6CB8gCqySvwYTUZb4RDCo4195XAUt6fSNs9KabjHqcsm2PRb2FGedQKVJejgUAXJn1nnHnTEt5",
  "key7": "5utbjsFQX7v1WezFA8oaX9aB7LpdwqvKDrcreQDcCdtDLcTHb7JYNm8V9eNEaJD58Uznksa8nodeuWaE4vrAWJZm",
  "key8": "3TnjL7jMZH9hycUW8oxacHYw7nhSNWuJDZtpk2qkM2JxPE3BPBFnKwFtwXGmkvYijmjt6oWPLSjHTeZMkyYDnWb6",
  "key9": "2bZEz8F7erGxo1Q1cBkaN2LHp64QQ8eiyJ8SpoJJgYmeGD4ubvQCBDEEuqHENvMeJ499qzx6veJi3QtC8GLP5hNo",
  "key10": "4kXTFRQYyjxxFDrHob3msmoRvqnAfFde1vDfNVeiD8R2Mhqk5CJsSBiaJE5z3K5Qdoa9RbC6EDBfdD6t6egd21TR",
  "key11": "52puvEmjWJkeyWQEG9zv7iHXUxqok4F7g7tLveET4ssrRTdxQLcMnWjiyPXrkdEVGGsXKWKAw3qftC9pDtnB2cGy",
  "key12": "4LJur4aCsp6Fy8jRk78RwgeZEsAdwikan5r4fWfp7QD9B61w2uGhnivUsq6GE5zb94uG1NmPQY1NmmgJeHGRtFfp",
  "key13": "2M9a4GNkQm6LuHdwrW1eutbodcE9Z4UEh75gaCJrrmEAWjGsy7Vj9WBxZiFquyF9uG89XtNWVD5fFSceUyxmm3A7",
  "key14": "1cff8vxhxEUZT6mhXZ9vM3KpfmrdXEaPUc9vTTSpd8wt5A5gWD6VJe4sbyvtWJeQskaCie3Yrw9Z7vCBb5S42Nv",
  "key15": "215h23q1Q4wGH4N2kMVzEuGC5eKqYtU1JtYHsGdsMbsBzVhyi5PNux2C1gvAZ3HUkgYL6B7sF3dbYN66tiohD8pH",
  "key16": "4aru9n7YGRQiNuxnhWt1UTDkkgEZF68bo5Y9B5pCiDrZzxWHPya5Daqp92URQXVvL5H7gFW2CDzDFGPkWPkuedSe",
  "key17": "4BqYc4M98KesUSdJHDTo3GzaUDZdM25reU22Jq4qHgbm2BNwepCkycs1KbjXVjVZamJjkssrEj7B1F9V3Asv5yAz",
  "key18": "23GQ8o2Fj8sVjCLZ55AQxKwoGz2biXRMcK8jaxVTC574fkcCZqDZ87tFvoGMPCjaqymuDbXKzfangz76S3DuSMA1",
  "key19": "5DHeAvhyG7boArt7u47EebEGKcjMGoMqzkAB6vtVit6XtqN1ERd2tXV11J7nL5MTigk8AX4kKrS9b2weLUyhUe1U",
  "key20": "3k7QdeZg6abUnDmThFmf3zQw1bzqnCpZSD3UWx5UYASTKWAsjHopRm13wTLgxmGu3ayb9UMq158kjqAHhxyeVton",
  "key21": "4uPjPx9cBLTc1DJyMLYCqNBqEXFWeVwTKxV4yTBSS4TYebUXB4sZ6eqQ7SryuTzbrXdp2jubKvxo7gGiqga7GPZQ",
  "key22": "3XjoJxhFjRWfJMTSfyQudZ4XhzbwffhfQX2SKAtBBURVei2yCxAoztmotKenZ9nTUHULZ3Vp8oukcU8GfyzQHVhc",
  "key23": "4zUivDgciuLx4qXnvUqU9seotf4fxRS5EHRyArQ4Wohu4GxsnBWaUL7bYvyevjKWfMstuUeeHVjHKuNACAWWiHnP",
  "key24": "5PDFWqWtXsRwEVmWFJFfJRL2pRjMYkeBdNJvYjzGUCWpsB52w3KVrS3rehUNNc163nkN28LZQp1a7tTHr2KHRjdE",
  "key25": "4CBsDg2EVqUc7ZX6d7bsQR4e1fHjMLB5ezNuD7ceZRo67FRXAyGq7hL9MgYfLr18VxzDi6oNmn7ewmhDTFztHXLN",
  "key26": "3MnSKjZ26v7nCNuDbDjg2QhR3xpXKVXpCPDqUAKMuxx5AxCtS9Zsv2P9hJPbhQ3UX8fHJW98S2LAeE6MqyqmwDRy",
  "key27": "5e77WRALUzEuqihDQPJo9JF6veAZtxj9ej2H3FgfX4CGSPCy8MdjLieLvXzouGYZrAvWcevcHRCiW1s3noTXnge5",
  "key28": "5vm6LRbB2QPRxAjJDYAR97vBZ162a9eXsd6ChRU32Awr57bNNSgNSPbYezr9cxVtgC8hydAZ92wcYHFB12djkLZX",
  "key29": "2XF4HH5bf8pqXJQsNPVswLv192X6VtsT96WQBAuTCsXLoskEAnmyyZZwK8QsctKmsLPxJgN1KTyRrrT94WSWadEH",
  "key30": "3UBafbfzn6JcAj8zMJ9rZV3rcuyfq4xdjtSBjiGD5Un32NtGyTV8B8zXeKhLX1pbfFw9RxQaysXCenjZT7P58kHX",
  "key31": "5AxXHcrU7rtfrsrJ35R4oEE21xuoznLK1T7WrurHfigeUWk8hrtPd1kAB7r8G2uS2w3sQGvCbt5baBS3J3ifwXqb",
  "key32": "4a7ibm8xgdxbNTsog2CLabJwj1bRr3NhFz2vMEpxZrHkijCeo1t8TJZ2uMoPRXeuW4PJndQ7bWPMDQyphjJYYMsk",
  "key33": "41SJYx7J6FhMXuYXHRTJLMDH9hxcqadxHLnH2f9cqMmMMACUDzzage4Fr7YmTccZz11yxDN2VE4oebbmYvs6y4uk",
  "key34": "2W7J9w4TkTFXn2KuFdaPbi7xBRk7K2QQYewEWXebszanJoaEkZkEt7dxNndKNdJZJ7Uvosj7LQEALMWgabFgxYaE",
  "key35": "2YfW569M9inYLYhUGoq3GQnKfkKqUneLBBoAkW4HmLx2Nk2hStP8iR2Gp3kdFAfkVtKKK5rVw5CJ3gt7NRs3ERHo",
  "key36": "3HGt9xM9wyq2RFbkyrCMjFPvYB6KGGpsXuX3U9Wbu8kEbYhzBUV3UWiTW1LjimQdtY8p6atLVKisF6CuVrtLDtvD",
  "key37": "MhQu1HpeenrUZphNjpuvWGv7nwL6rDCxWsGrrr3iiY2T5FiVALcSeRwBykGxj2G4Yfj7pRNnR7pqhSUgy9GcuAH",
  "key38": "T8wmzpqCh46XidJqq6ZEJvPfbBxJwjHV36XYEYNfSVWgrdsCjGWg5S5vopgmDzvaqAzeFNfSTbFUmxdsBsap2px",
  "key39": "xGsi59p7rWowaZRG7RpfqpqyVVtJu41eFTUmL4jbAgNaM2UbHQi7f6rAicpFwDow6GZdFmtsNbuALApDZSdseHj",
  "key40": "49CS6WoWCVUojKpZz66gpDPs3UwhoRTfNW7kowaZBssXJvg231pzSM9fjiG1gQ8DiVhmwAtYdTD7j4V4hLarEVFP",
  "key41": "3vwKNM8xhnpL8s735wxhR3EjnbfNbSmTuGDBLyxTaDo4nGyiyLaSTVhaSNvWENfuhRmR98HgNy1XWJtsT7jMVXhi",
  "key42": "SMfP21PnjwWkcmAHSYowRFPsxfsKasfVBG9xumJvWKNaM7qKi79JicSMdzKjiuqjAYy87G5q7oyeaktWkJwwJjm"
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
