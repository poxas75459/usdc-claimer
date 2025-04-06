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
    "4ArxcrL3uUMPsBVyrQA9snBPC5u7z6PZagJUwGbFig7Qiz3tYtkAhSUagScHktNCWN5xwV4EUw87Yhh1cyAou5oA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JAVs8Rp7wAmtPWT25fFtDNWBMdfKerzRtcrmwnLcnj9S9EtxrpM2Lz5mqtSc19oV3DpCY6vsXibn73oMr7Ln1xQ",
  "key1": "55kCSayNwBcLvkxGZmLJzm8uYSpymvUhJgtNmwWny1mjwFYTLph63YNM5sSMJxRHt7YtF4cFSw5MHTQ9RQEiG3eK",
  "key2": "2ccUF6MA6gGuYb99LyoACBqNzM4wJGGXsSeGMKARvkrLUW2tEwAJ83YDwdR6p4pNM9UBAip8CJwJTNVixSPW6WNo",
  "key3": "66gge1ESK5P9iDKyQZ4dowdDaqvDVoiv61qm1MKJJ7rbi7oknUGXfcwtaKKMQAthkH7ory1hjHiWhcaJTzpuP7mq",
  "key4": "2H3XSgkckdhVABCX2MGPd3nsGpeiHt1sVG59eGwtAVLE2fvziWacDCH6NDHWHfQnH8WNhBxUFqowrsctzwaA54bg",
  "key5": "5Nk6ngmTwtxf5JCnQ39YQktdmgnssWdwkyMnnfoZZf8sqG722CtRP41g6DGQhDiduim7ogx84Dm8m26MNde6Roxm",
  "key6": "3mm2nKofLbHVdjdqUjMQovrbNtWw5rDiwHVCVon7BVXVi9UQmQk1nNfsPVtagrhNrLWV7JEF119T8CuWidQSnNuK",
  "key7": "3hWF5cXvQQciJKSW7uL1PvrSuFojVUjLEtTfNKjXY8TpvjpbVXi1aS21XDt17GqjY1xmZjYWzmpHy9r3J8jJqzWr",
  "key8": "3nkckPPUaYawFxxaDT6DgmUJjzwZMiRD5HMuaWrxwBKRMmCeoBW1KkksHCJA5E4PN8k7wjNA1VbHwaYFU2UAFf18",
  "key9": "eYRtZU987vYf9WbC4qhmsir1pcgqj5QWDW5enuA8qhWzFc4b9nqoCdUHh2mnow6FJpHVCw2xBeutjrZcx4VR59m",
  "key10": "4sHwWmih1poqgmJW5nxGBQ5zHexA35FdWqTtwXw8SMHuHe18GbtbCBjeVdD2bED6Fp6d6NUB2LvLt9RwVmF1nhu6",
  "key11": "51pioqfBuyN1J5HBYLfy47jBDRkSgGgf5Nfk83MPawMHYAxgBjWxC3t7dQuxgF4sp2LX4cQSDeCPBe3JDW5F12vG",
  "key12": "4BNsepEMC6AR3w8RmRVG7a48UpfKVxkXmHPwYru3fuKCUSe4iS4r81ho28hDQAy1vDszpoeW8rWQxRsseAEtHTVq",
  "key13": "5UQLDiGFSE699bz2Qmgg1MKm7J1UQ1XP2kVxm8gXihxepWGPJPcRTteaZVHUSULLCSZ3bRMApA12g83D6RzLFfkM",
  "key14": "57mN1GdXsfqBV8xErWrMHsKfZpsghXthUDqrJBEGTrg2R4UsoQNBsV58p5bctw21iaFuc78LLgeAsahfeHehKQC8",
  "key15": "4TMqxmSueqKtzoagHUDy1PS8U3G2NueofJ4pYwicuUCKWgPJe1CwRwaZtrg4FcMKr1uXZWNzCQz3tcwCD7931Uvn",
  "key16": "5kzx34s3GPKCx2pvZ8hBeHZ1sFsBWNKdzj5NQhfRoK8PLhsH38kqH91bZYfPdWQDuYCmCjDnDHcizp1bCcdR27TL",
  "key17": "5WjAEZfpqAva1GoxnBvUTjq7pMgvfPZC3f71N2crjga9m9mg12zCNYxY9zZ3UAD9Koq7fy1Wpgx1NYLXw81HJGUk",
  "key18": "qByHXcs5rd8M9WC2677F3A8J3jkFXS1Lr3yJ8E2TnX5v6a1kU3ULgzHwk9J1zvvi2rYhMFfGH6tPKL4wvcNUvpV",
  "key19": "2bptKByrYUUAKgE3qqg464v9YFFY5RtnC8QBESSTSG8dyc6WDhEnFyH4XQcHzit2GzbPdV5Zi3c2s1AxiSQxRJfH",
  "key20": "5sCTVWeiPnFBAeCk8VvJjwpLYQxiyooT8EcYTnu2jgr9Yd6iyNPjZYukaEtgHtmFdyDvgqR883CUgncDAdh4DhHk",
  "key21": "3caoeYfhGSZdaQHAEJoLDZH3cwpVGLVuWbxnKXhVsroWRyDZkzBqJkXkPpJTyQRK7ATW5jRbXVKT5s2xETFbyHHu",
  "key22": "4B7zxB6L3GmpY6XeqzQ169AHgY1PipmRDiTDMprVd6LVLn6FKNHK8KnPbTuYA95dMreTfQAUevukrJFxa8hF3v7B",
  "key23": "4HwHtpCnmfz2eyZnQnVXQ12FP1nPY871HJPm7ZTboX6jb9Tx3uHyDvMEPAHfP2sb6e7HEgsRU5KQ7k3tNfdQCpFi",
  "key24": "4CpAzUAruXCBswyAXY6qGFthmDJX3RbeMPv5syrvNe4gpN9BWDmB3Awj4oVaCtpFtyfmFsbm8xBeWNTx3zi2a91M",
  "key25": "3X3sSfRGf2NqhWkNdGBiVnQsh68Zfecz54DNbzyq4Zfy28sQSPXYGFmWtjgTMLdxm7cBqiJ4cZq1yWfcDVWPid6N",
  "key26": "jRijskxeP3VWJBdoUrnjx6Z7WkTzMdDraSim6MLzFRMcEnd7grNmKoR9NSKndEocgcqnePsy4TSd7VbN13TS1J5",
  "key27": "3zvppisd73MpKaE9eSWKK6EyWxer9fXAepUVsVDjFT42N21g7jpD4HuVzaeKnv8efLDDX1F9UJqV1ekeTESYtw81",
  "key28": "3cY4sYtV9uLht3CUFTEYWiHXMuUmzgknAXGGvGNLfa8RCeuFsMUsBbc63orS9A1dk9H1oRcsriYfYvQUouHGX6zU",
  "key29": "4HHuBgVhTpv7fGvVC3YyvHtHWNRgADKkzPPjU1dny5P1L7qa5rEXv5KrzqTWmo4Md95ujj6af7gCBsjTrcD7ceDz",
  "key30": "8v41fe8P5XT86YhXbDDfQBBQHp7KveftPBpf6wwLPAwCnHR5m8CSFUVQjYs2U2TsrGH6rWPQQ7hU8mSiCEJjPVz",
  "key31": "5tpgpEJBPeCgQJKxYTFvWmZ6dkqwWjG9UhQV7Yfd8RKvM9JniA5CqeCPS84tCmT1nt1TCebvRu4VVugniFX1S9vX",
  "key32": "5cxcpobBbwmPLwe7XSJjtRoPmUqwVPU45Uqfn6CG2u1bMdEEA5AqRAsVg31zckUp3zvizRUZ1LSuBS8sRQgVTLWP",
  "key33": "5mstYE9MEbGtYfUSZEm9RcArF7FkHUrqjVNkZrRE4vg6LVju7d8N3yzVhV9S7JwPURxrPR5ZJVuq4788YX4Pvk3C",
  "key34": "4FgZHFzm1yAKSsp5nZNo58irTBUDasm98KxSEE5YxmSym5B3MPmvvLbGm3skhXmyrSXLMzXHskwtgBpLcyojhs2i",
  "key35": "4cBWLdpWrxN9k6YLNTf2gjbpyzWmzZBPkmKtZEFcYAz1tNWXGt58HZoK3NKRuT2G5joH5oET5AsTf463BfUtHni2",
  "key36": "jWhisuN4NbLS66aDPg7ZNo5HhZgk97w6EGEEyD3Naf5KtGGCLEs6cxiCaNa4mHNPbgqtUNfQhyELCitXqhyZU7C",
  "key37": "5hAXhWCbYs5F4r8QGJQt1TsvTuGzV2d65cT9UYKKGiokXkJh4pNYPqCAbRSSsN3fd75Wkf7VCvaVEVAf9aeUvkfg",
  "key38": "3CRDAanDxWsLcvGN3wC1oH7nJmgyV4tFfzM7Vuyx9wHKdPbMsahFJpz1H9rsxCt6NLnKKYwfyp3dB1XQ3ZVtXjdr",
  "key39": "31upfhRZ3kNm7tDveNiUVqCeV3RimHrH8ipcpGN5x7ezETroHSjKJHKoTGDKjhfH8oQ4NBV9Ug9CQuvay7BWhycC",
  "key40": "4PxCTm271otJexBEYt8LSyPpVQYSPmZSZZ9gwoLGqJG46QACgjLgSeEhJJcJFjpvZGhkcYMHoDwcYtYm2o7PPoz9",
  "key41": "ipLfcWDNAocd3mER31pVdRnBsC5P7UQYgrA3yTKnJ7P3by5W3qDDSKmkY9PEEZdVueRzAWEv1tfqLJ8i52LiB6Z",
  "key42": "vKWdzjagZqs8qu26u1JzepsLWtJvp6UDRPMPSD8v6DkQ8VKz8s3KkTcE81Pc48UPXMfgUVsuHgAKqroF1LjqZdV",
  "key43": "qgU2HpUPpjBPRhiGARhDWGkWvpfL5XW4A5fBrUhzmJjFXCHZf5LVY29XuJLNptQhGTqGZ8advV8UhBYy7wz3Ews",
  "key44": "4sVtLHnXhgnBAumziJtk9cTXyAWGWTHrCfbiM1AjRt77xUwf6yqvejDzAgqmZNwoMQn6WNdJGdxYQoMKFuSUwtW2",
  "key45": "2JPt7Ftu9LKKUqocgfNw7MQsGCfJHf1UAwTeG4eX33FB4WqHo8DaW2Wj5QU3YRWZ9srNPRWVfj8LZuxTnyXZppDx",
  "key46": "2WBS67Txxt9hazgAHwDmd2pHPGDhfo6uEGrgTjSEPmBS98DNXXvJEJm2cHhLEes28L11em8ihs9fAYShnLM8dGVG",
  "key47": "5te7JKUoXC963qaxCMT2er7dYAtgmuf3GG3QWqU2Qau9cM95kpKSBYdfBVCFboKiguxNwBCPPwH2BGHJi2AEuBt6",
  "key48": "5DkoxRfscDRwru1YH6EgTpmURyUmAaHvLamoyWhZw7nf2db5C6HrpYpua225ACupHeVUntSRCzqiWAUrgQKDTHNH"
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
