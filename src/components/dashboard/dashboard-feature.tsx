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
    "3Zn5xjwaxTgTT48cFfeqBx615V8z2zKYqnGFqgzA7xGQk15f9BRiQFYgxaapjBq6YHwjkt6eNZLiixSH2dHnA75p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LGodvWMCRzRdq91awBfSsJbfRwqxMqx98tRUaiuvnYUNBvwpL2TXTaS9fYShnFyHwkG74tAVPJWXjUPGJHJvr3N",
  "key1": "2pgnxp48r4hKSZywxTNRPHVw6nBYss1Jo2wVAVRjcRr2bqLWHk7uVNsXxMD4syRQQ9DqnS87FRHgRQAvrnRYuEDY",
  "key2": "3yxRhwsUHZkECMmhX36kdUx1G2WTuVDEnYsGM9dQkPTpyhc6SDwh667T7DnXdosBbR2StqcXUBKHK9tWiJfEd3vC",
  "key3": "3zPGyhkXhT1tp1qYEJqdPCEwxvHN3f1s6WBqBdT2YwwBTsUA7PhVQ1Lws51wBfkdHMLtM73uUnhAtav4a2CWj8y",
  "key4": "Trx9MA6v96FNFjEMcGC3ffdbAiTNku9yrykPTcgBN85U8cmbHiWc63SUeQnpDLvyr8cGLzZpvCrNKi6JQ42bDw5",
  "key5": "4cHcqRd7uCbS5PAg9hf3dH6We8NxA7HvJFjFG354EDDnJ3V61Jk7EWtxvityAY4SMxU7sDc8Km4HsezW7gsg3TUY",
  "key6": "Bu9G18vNEVCBLnN5RjkJyGoREzR1bt37nV5mtZU1XLcwryYBKxr9GSk2ve15MQR4Q5KdFmAogbBrk8TFCLUoKBd",
  "key7": "esCrkj8zeCMVtMQbDb5jUEQhhUcFvZPKAWax5foBeZoHpoyWE1RCt5NLT2pFxL7omzERkhKqZ3PbwuTN92J8tem",
  "key8": "3LvPPn3cLSFYgea2kP8A4SEsbi1PMouaYsrtjcL45d5VLtKLUtQT85yuWzGM34dRbPPFb35kCyv47Uhiacpbd3hn",
  "key9": "gHWaJKV6FByoKnEUyLX1bmEbYxXEcm6tghTrTkh3UL6eb9H2gQY5qq1n6Km4ivqnWLimmgbV55uy3qNMySEQSkp",
  "key10": "4HFPRzXtBF8Qv2dJqJViuafhCgKMTaLiZc4DEL91BkippSvz3fCJkkXw9KVp64o9CUVy5jEhWu4RY3N1WBE2Y66M",
  "key11": "4Pg3a7ZgJaH6EcYuXyD6Ld7tcXENo3TNPmpM8rM5FcJKExJudg1jgYxu6iG7HjE5akPqsDwxyciqhYczmA9g1fgA",
  "key12": "5Zh5xTt93Pp4Pvysrv6oKYxCMaMyjA7zqCCRvd3zwjLBBCANw51G9UKsivNXEex7pBe3UY5yssVpHUXvgs3huWW5",
  "key13": "33oxfKyjmyUATzWYnqogNWvuB7jdUtp9eEX9kzdcy1qPVoZ4N6gEHGmjUHH1yQ6D7mtyHHYYRGqQX8FovEjbZ9wN",
  "key14": "2XMEFcorvr35b5V7yfuiyby6HGYQvCsJLKcX2uXekwYMWxeBgu2MPt1K9YjBM4qfQBzVQ2QiJn9f1ZjQ43y7uWNB",
  "key15": "4Lq1nPNndp6fpijFqep7fY5Ypu5UfFjpBvmim8FZnSdCQ8C6iW8Csq2djGMekDHKNSMFBWXJRPiN67KPCP3RrmHh",
  "key16": "4qixvjfEg58w6tyHhDU2YnCJjvb4ciW5pG8xRq97VupDESVvub3TizkwuCJmayZCd58cdpcfa9H46KkVfKfQK5DX",
  "key17": "r6nLBwV4ybByS8i6iLW4xeEpf2jLgVmaXWRXzNbWjqGCpg71it1R6MTFnY4bWe1ychvA8Kud12DfCEGMRcxgXTS",
  "key18": "4mk1SXbrjby71tb3Mb3vdhtug4cFNuw7gFET4FCoUCPQhkji6iK3hZaxytf3AdfPkbhrvsoscG7y4yv9ki3t2Mtw",
  "key19": "3LBLxbV6oW2pAsrG2GRTgLHEnvXvya77ezJxDrHEhk2eoQx6XHdC66XJ4CysmbJtNvXKJ23ZrtXoB7VGPDNaVgFu",
  "key20": "2XahzBmTSFzWW8GzRUkXKb4NQPDj1mra61dnwwMYRRugj8KR2pbUjtkNEfjFU2Sp18Go5PnDRUm7K3EfXSfgBovg",
  "key21": "3zsLKYWPFjATL7rSCXBRajvcvCUz4FtZ4cf8HhCfG94xYEbWvsRLXMJJcrcFE55MRFjGHEMmS2HhLQYXhYbDDEpn",
  "key22": "RUuFHJ1sYYoxma63imfpwX4cvqLzcqkE3fXu7VkqAvtgC7o3rSRSnnbdrp54nfB8AfihNTwS7eNozxhmfw9DjEq",
  "key23": "2TQ7fXJuPKtMG2TvSrs2AfVUQ5XN9cNB6TKedXB3ezEDtVUwkEo3UwLJhRFB9d5NaEwWwC37wk8ufHyLHDf5oqKW",
  "key24": "5hpVqKvtGbFAXQ9HJxryoqgAdppnmqGSxz3wrsAxbohwGt2HBTnQhGRsFfrQk8Q6ekkK25uEfPi8cybhvcCerYj9",
  "key25": "yUBCo2USAqJE7JgrH1n7DFBshMrZbE3zRB6vH57ytE1fxDBZfoyCSLkoAyQMCK1opB9KiM1mRz3MA5odywaQAzR",
  "key26": "3N3h5uhg7tBuNZmJDH1FWzDD3YFuvBzdJwBCuKgsiv7Qqwq2fQLsWTR6jk9ad1fTM2iTVoLnYBbRtj3bs43PNsk8",
  "key27": "2BMrpWv93ki6PMnEwf2QGDXtEfxq9fhVTjUKViqBgLPrZ91hYKiVHvS2xCu7Tj8jo3bozmjapHJDF3wobXi2WAyZ",
  "key28": "4jV2sEc4jqovVZP8Q8PKHFcLs9aMk9GPVRSq1iA8q75oovLnj5mX3ipee7gUTxqfAGVcAL2ZqXoYazi9rEJJDxtL",
  "key29": "5roCKJR2aWnbmh26oy42eRx3nsdgmLFGvy5r3M3JPr5Ppz5sH7JmqEsHKuWkRL1KcSTdP4i8QndUen14EEaerfUy",
  "key30": "3CHCYwkJh4m3BrP3RmgVn6GfSyGwPzBwMuyYbhHNeKjSLKQqsg8J1QdfLTknK5QrwTW8M4BMorBZpqBbDBPqQ1hH",
  "key31": "3RiqSjEGbiUjENNhosqsJgyTgA6uaYMxXQ3euTQa8vHP5r7RzhMsbAfQoCeaRTpk6MoU9JFiXTvcVdhhGk9pAF7y",
  "key32": "4qk1AQEsDZag5yyJ2VfS5FWY3W7yGUuCpFFApJRp829c47HU5vRobpDvUamgRACP8uU5nxTMJqJo2nrYAdDw7TVR",
  "key33": "2je7rgPcYuY1cpaEKt94wVGBB2ogyBPKkdK8LoRm81fjMWDV5mLRf6qkWvJEj2Lib2kYmxzbtDjsstUmkoxVAXv2",
  "key34": "3V4oGibQDqe7urpV7tLgZbTktffRKtuyjUpbLsdX8Ebpsevrgrx4KWrjbgbtsrJEJCzePfTB6e36XmGcdh4JAFbY",
  "key35": "2AGqsxPqL4zaG6gtbnJUSJGD2mwAXRvxMaDpTotYFLprpuaZMcCS55gdvdfVS9c2sUhLm6n8ZGDYBHvgb4BBFG1g",
  "key36": "BYDZFyA9C2sxVZ6FXPQCF2hRyJ3Nt5LMTBonPgti48eS8KEmVv5MM6jE7yVaPfd57RGZKUhcc5v9gFzs7W33HQ6",
  "key37": "4B9pLnxHmJLs6BubP3GDQoDyFvZRSf62EBWxxfXhNRtH9abVjMaFx8GwJqzyA1nR4mMHK2PdMNL67W6qiNLwmTAN"
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
