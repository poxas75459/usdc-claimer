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
    "67EeEAEBsUDS9xNrwDuE6GFa7bak8KDC8nZaYhhMBKiF1YJj3L79f1KfNpVYeynuXAhpkeNabbbvN7TKBVZpFuCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wxh3XyRbcYC75YgKxEvnCF1JUXdscvC89ZKyt3sEAiKTUVnhGJcPgzepV8QRUYTPwUErtfd66SuVM6WQhqVunph",
  "key1": "waC6fESm8aDrzAk3QkZZ2ByD3Tt7N9UskWPUDm8ctiegDv47gUgroctnCatZtzFY6MTkT4KDrFrtSd69Uat4Gnq",
  "key2": "57YtP3NpxMK6dDQ5QyyD8fENNi8iMQVqSdRJRhBWDB29mXNnzAfJ45YbeBjX7snr3c7iWoq2upZDYFE78Awp2jdU",
  "key3": "5raziHNenKmcGZohnUkD9Vpb2CWZQ9BFbwbfuHW4evkYc5HRtdnMswsMSMFfq6iZayTTWkMHFB5rBTK4D6CydJb7",
  "key4": "5sgVPF3PP9p4xcNWdGsabaGbL1x94WhZKnUyn9zL619vg1TW5noXRgWU9KGL3Zzm6iEE25AqbBTf4WxF4cpkqQUn",
  "key5": "2UoU6KS3DA5mQDXaGbyJWSn2sErthCao9mLjkQs9MyH8vJX4sKooJWGtv7h8dV8w4W8dKDFhMfHA92FJHeqb1zNP",
  "key6": "56bZATsvVeaWSEYNSmd6EAVZpY19w8VRHbGMaxA7j3Vm5qJ1BYBHfV6vMpoh2NhvEGR9q5BhzoFtcACmmCiBaRiU",
  "key7": "5p4DTzZDfq4TcCC4jKZSo4SMf2LUCpsEofyjWucQJcYGHrfMhs4sAT5kRf1YgbA9AGdLqn2wV8t8DHcQ5vJjMKoU",
  "key8": "2uXMt2fCFm9sL87CVtGkoW2ArVFrQGwH7E8TMkjF7tVVPfvH6nHPUbfrGNt32Mu8H6Zp7HLEc9qkeRPJJ9TfmC1W",
  "key9": "3XvDy9p5QxT4E1rAHrqTyi69B2eCzcyuTwd3VxGbSpVLJjnJkpBdjCTBjhJDgKo1orG2mq1c8LPrw7CQ8ZGZBTTn",
  "key10": "FcvEmUt69piEGP96sRMoXH3aLDUiGzKfXbEgcheg4kBZ1FSmoFTX1m3y2QN2hzMdamhm3uCCx481pp94V6ED3bb",
  "key11": "3cTSdrVYSEY9KwTbbyW55XXQpDdicyRctoWJ7A2gmr25WDvPkcEGsYoeT95o6s2CLqNy26CB8KmYGSQ2LCtp19Mv",
  "key12": "4WTdcB1T4mD9B4CNzDdcPsh9XxePPxkRJGWRdaTPBcXyMge9rzmfKuj4JoFcH5Xa1DBQtQFkADFqC2fA8RKzQFcD",
  "key13": "Wap2i66Hv44F2UdJgva1vreyAtKz5PVVTVX3g9bFdF8YnutmaZyQYFtyLRj9eLLsqdUFuR7z3dN2dD2kijvBLuV",
  "key14": "rfxE24tUpWfkRHL8pdAuZc93zhF71L4fUcxA4C4xVXjjyhggZn9Ga6LLiX27qMc9SDz9PzaKwhVwJXH6gwTnCy9",
  "key15": "5SwjK5XEyo5hr7bKWquD3wRRYxrscBDsbYJrepMsUid9WeNbTg4th5VdsZQk4J2SVfk7nunMiUUjbT2KgnumnTCT",
  "key16": "5KnQTPsuMPDjBeiWgzV6mfPQDrFF33CGhh2HdK9Pt2JYLjSCPhdH7DyL1dwcZFxzsZptjsoE4LGxzG3iPLxtCAtU",
  "key17": "22HFWi4r4uBU6T6WRgXHsfvHALhHgt4kj9bCVG5SczRv1hJNXHJ7ya1Cmnn8GHtJqgaSTcXMU2zQtPr4ShLjcuQY",
  "key18": "4vWnynDh8JqpXajaJeasY2jmqciVsyseFSnTNdtEadswu7ePvJWcYhm7JJSz6ZqNZtSqc4krC1phak68p8xCHKes",
  "key19": "4EsaKgGyY2YdPUnwQY5F5qs254f7TJDNtymWKoxD9q3WXNAQtWXzCB57zMHYvePnqvzfjgPyrvGazxvmSYuiCELD",
  "key20": "3pPdYxn6koMN6qtbkAjjeyvYragAsezn5qZNpimP59BGHbw3fx1KuupaYiYwpGUGUwiMy3wRmVB5xjPrHPBtinYp",
  "key21": "47siSdjtGnMxcmAppnLM4ec9n9AwojX6bGrnxSnM65JKkbC5jTXHGm8uXoB6nhsFb8iRUPVsT3cDkT2sKpM9NUwQ",
  "key22": "31RXA63pFYfprEYKMKke61u9sFKTcM3naEfLMmzNbXad2AWPWZsk8uUWQdCY6gk683uhUy5hvCoxtjNrDRD7JEgF",
  "key23": "FizYgZRtkjFG1rx4RFukjrMPu24zjHKi7LroNbHw5rQ3uJutQGaLyor21mMRqC2Pq8MzzhoZVWrFHVE58TUz9hW",
  "key24": "4NXRUK16x2vrFGmduhowv9RUVCqvHXsVPCPAGcrfjXkMhWrqTSeqYJJkYUSp9yPtttUH9WvbTd2fmk97WY3ncKJV",
  "key25": "2KQFyLBSBKNbRqz37mZjWD4PHyWARzqxzTbAb1Zp7bki9QTYm2DxWZD1VxittcaCKC7V8MH9Cjx753nPFUbJdDqn",
  "key26": "S2CviNSegU2fz8raoakgwiRspouSG6osCxJ6oAmyAJSyqszfAb32EBjGGs9pvd1FrGc5iP5KCmUz18cgSR1iGTL",
  "key27": "GsPNWFJ7vUWvVHgiYkXBhEqaSAxV7BXjyodEnU8iwKS29MovnAbTZi7iGWqPUMTGZ3nN1t2b4Ff9BVjGnGiSgdX",
  "key28": "YMrAQHGwhNJwYfrx8KtKTKcqq4iMVghrTPGYdRVSWjUe4HfjEJkznbM3BoEmwZUg7dAUn1FvuPcpJkuNoYy9p2E",
  "key29": "4EqCyvDCuwzFqwX8yMdmvayyHCYReZwYtCnXfcaRK5bs7hxnHgxrB69C6WFBJvGYkBk4VKScyHFWJMvcXhvX5Hu",
  "key30": "okGrKPSSi57HmgGe67s8nkKDnEHeATcvFmyHNYWq25PCqLAWrbCjViyyvcuqmorf9bH8Bzv5KQ5qJiC7Gh9zSg9",
  "key31": "5CcTfxzDYS1HrTS7T8taXwhTf5FF17iMrW3YSrE9zw6yJByoNFDbkHXXDUiHNJPfSXDzHNaiU4pXMKWVzQSfStrs",
  "key32": "2Y84ovhHiTYXTjm2hczvWdUywwXAaKexUz4eBv8S4D7zcnz8f45h5tFDxGAev1SjBmzoJnsjZGx9SUXnKxvjshVz",
  "key33": "56mNmrv223QuSgPTHUnqJqr9EfTYeF9SDi2Br4brqG3feTDR2LXERt3VWceFkYPp32ZeTifeAvK3BBR5dYjzh6Qp",
  "key34": "GsKCNp6frytP79ULhgSLcJhMicDurqpa65zAzThwuvpmY1jqn1U1WDEhK75LByGQhvYFJ8cx3HDwnr5YKnDJfpX",
  "key35": "4oTaTHd1Bf3zcT3guJEQ4tGgNSQamAPbyqQQ9yCeF2th9WaZGTGpCzeDyACsGrDJ3PtntuRnE4dUACte7yBzoASZ",
  "key36": "2v2Btu9HhcUfXwuxoeS23vWpAPRT8E6migW8Qx6xYcGGDMyfzQuqtgmRaMydpgcs9ozKs2ujmnoePkLWdmv6hp4i",
  "key37": "5zdWFJ18otLJKptYyBX1b8SH81u9uEaqo1SGWDdspdRuQF3yzcpmCJnnhQDCgGHToFywNqdczUB9h9AaYSzD8H8B"
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
