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
    "yV8CTWic9FpmNqUc6LLYE18YUDmHyZkz195DddyRdcsqwHjAm8Zm2X5qQJph63gW36HLf5eqBNL5521xubhkzZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QCTYvx6phtk6TAXqGaUgBtWVUqBtdXQ6aNogP6G8rvEjV5vsqHQUyXqjyZgV7KW9S4rmQZ7RpSNLuykxXweCye8",
  "key1": "4eWUhcdQGkg86WFotKj9Lm71UVGknSwq5PCmYf1qujF56iJEzyEtTrBZ86edgcsQpLzMx9kB97KszhjchfQHQoNL",
  "key2": "3CFuvHEjdN7cZLQB7iTiaS24Ckk2gHTV1KAhjzvjp3Lznb2XxBBw5WEF7vEqJampRx9moE5UEygUsq5KUdWMNzcw",
  "key3": "24KPSY5j9p7yjZd8N6krzmuN7A3mR8uNvWEAQu8MGbXVD8xmrvY5fDDu6LWbqJs2K14YzRsTTbrn3AFKxbLhLSVm",
  "key4": "3nZYCnmRqRbUpBZrR5QncFyUoD12m3s3ZQz8z7CKMEmhK2mvHPykSHgEtTFMmsDuXjNERE3LRX4iG3EBbaiXTJkq",
  "key5": "5soTKwACfG7m4ZPPzMQ2NJPCxsnMtNkZQHqooggBAryNvzTBXHAkZRJUT6WcWjksKtGaUYDqLiqbkdz2WS6yxMqE",
  "key6": "25PTu71veyhUYkeKWsvTuArDQsTt8UQJ1vFVYYN2or6HtRmUya17h2SxnR9jZzePrb13CSZiBAX9FrczJkHmrRQU",
  "key7": "4FkKRp9aggCrJRWxhmWiPtTkPnUTKrgVwhAoUQ4vWENFAgbavKAa2Tpic48xxKhY59Gq3PMW8CASg4YyUgbMDMBw",
  "key8": "2BHq1V1kL8bApF3FXw9QQ1djiw1tJu5tmM8AozvpCvHKu1tZiy88gQM35qNWtZxLZ2juvvnJktL225ybtc6BPJT5",
  "key9": "7gKErHpHnvepiWE7Zpx7BoqxuMsAknomWPp9X1ZXceds5JrU9GUiw5jmurswoCLhiNHHmw4icSPnLHTjHo4dNbj",
  "key10": "VFgmjwHjJD6r49eJHRp13vxYB5czjVa9RbRQD6pLeJLcoYbt5a8dzjAEQfqcKgWxtPgJQSrYf8fjgtSfajP98ad",
  "key11": "4hn7MJmohwYHc9HsPie3NFvBX9iGERaj1QTiRYB6NxAiRLQhFSs9m13RtxeJzaq25rEhP62mKSY8TokXR7y6fkGP",
  "key12": "s5LsZMf418jA9G97T6JEEY1sAhH9RAKeCCopLFzt3EjvKG1akGSUe4jKUASXDrwrKrFFWDXA5wcVCNYGYWt3EbT",
  "key13": "SHSQQTkFnThweFqUdtYH1qtur9HRdLFXkBd4CkETuvBMjwPEng2KuQ4z3yLLwpHiX7vMtReey68LSBm71UoGNL6",
  "key14": "5be2ttPcvYQLvRe5QYXEAptMsFsuG3q3t4ZJUSomfazAGSDPizEH4ZiTcEjNvRD1KyQagpx1FDUkBkgRdHWaoxdV",
  "key15": "4XeH4ngmKTw1u58uJVur7pSRdfrLiV8xm3jta9DpsjoZsTvpNqpcYDa9bgV1qqGPqaytgLYKSdwJrkehieeHr9Gy",
  "key16": "2sRqoYK4ePc6zB1hafGvMjzDceTWw3yDiHjPVFz48ZSTMxSfEX1jN2ionexhMrKv2QBX6ZcxmYUpi5FUcPceZVpW",
  "key17": "5WycJUDd1BUv7NdjZTx7JtET7Z8d9bFi2TNkYuqtnn8tUZydLxesJyuD9A6H2S9TcEGceP379h4buqKy7zr1zA3E",
  "key18": "QrPqL2eDQhM8HKXZp1mwfmeWAPY5HzxA4N2UYcmRDA4A3GCYF1UdE9SKNQCMWpRnASXAn4X1ADLubrZypKuM5t2",
  "key19": "gixUF96somzGCiZMBz79hxePiQTNsipLTphNNPAE7WMbYi6UeW1vYM1vPxJ57DsnVJmRzNAqoi5BYzNaHrjJQNh",
  "key20": "PQMN1pyMg3x4ZNPgUQGGHbqDwnAENAMipyZjsYcG7V2vuJdKBSBWgofY5J3Lc17t8Yvb8ZgsvXvadXA8iXLqMoU",
  "key21": "4e4zXPFSQeiwWUZLbjxNcpiujo5vVNupLe6CbtQWmX6ExkXsP4CQLzq7vaMH3UzqVGyxCCHJo5cjQqN3biMFB3Kv",
  "key22": "417vURQ7GxgQWX9hKJWpPCGWgGuAB7wAetATp6ekLoe7TppX3sMpBFQR86E3af8yfR3V6m7mxH5Z4bk6cX5xCcW",
  "key23": "5856QfJvPYxgwaoGg6JqbG9fub4RX9s3y9yjf31v1mCE2LFKu2c82v1fBfthdkZp5AUju8H17tL2BkCEPTEbSfeC",
  "key24": "35Ye56Hp6n4eh99NKXDWr8rWHmoUYYKLw89utrt5Pth397MH9J3PW7bpyx6mkYAqGKeAKT88A4tG4uGm22fX4Yyo",
  "key25": "5wMBjFow5gCkrB6hgiJvCtLsLE2PpfJnXyrniWYiNhwgcnPVrtfEy3rqGMoSwTTkrXkkZxxszmkWWEQE1KHeR8Sv",
  "key26": "5V9ytxjmsBbLFefF8RqPcR1C4kywhZwKeRGJnVkZ9wrJHVAbBhFrE4nZ1YvPCruSCgACok4bN6aE1bLUmoip47U3",
  "key27": "4UAeQNRm2VVxXkTDA2CncKLACT7t7cf9su66LF1pRabPGmwWpRHcj7SHKS82KtFv6t7bFsDgtNZ8UJaB43nZx4Ki",
  "key28": "5j15wKxgysDYbpiMuE2M3Y1dS9fkA5Cfn6i8jvLrynJC4XyKtVfLWMpvmhQ7g46QHTCr3Hkq9TtPyNyKJJyH1HAL",
  "key29": "4bLpuomFRUuv1MQdKHnTNsyGaFaadWyHZscvw3efU7tJta4D5655Wvn9yAZqdu5PYbcNY2hbzzh3zgNv3cjQCuqb",
  "key30": "2zudPd3cMoYUr2f5fq8PrcrFs8yY4LJuBYSVY3UaHw8gTx8TGs3BxJivEWLQwBbME3XyQ9M6woGGxNQWdLymP4Q9",
  "key31": "52twJmXPWDp5DpF4hL6TMKS5fa2yuixrRiQPxDQwWNaMV1F9XNys6yHHpeDNNgBBQbekMYmG9twFmsBoTQZM9Pa",
  "key32": "2maPLKKYDC7EKocpPHytokjGAvRekGJ15wnnK6uEfyD219YtRSMuXgC742dq8Rg4m3oBUFWo1F5LEosXMNcqC2on",
  "key33": "4XN9wLkZme1XCnPGDdkwbiTtMa4Gw2dGtjTDWdhFrsmHvKWWGwSYmBrTBSeKswqxaLRCJ5bfXKeBZ2tWbE1GRniN",
  "key34": "3k5YRJMrKg2KHm8ZQrAWEG9WtJfrYRXK6X2L89nXoVVNrWQgEAujXkLXCeQqfz26XnSTa8vtuZBvXxC6rAf1u1J4",
  "key35": "21winoSv667KwCVEqrpMiijtQMzWbua5UyKv5orQ8JBYHFo8B5fdsa1arBWzRL56TsjEi7pagiUGLMpXydc2ctSN",
  "key36": "2KykAvXvfNRy8rQotQvYmbsKKSuQaRaHGL6rxQ17J5FTSX6FMS9wS6vKqo5j7osfDDUK8o1m2P2S9SyJmkS21sax",
  "key37": "3mZ83T4rmXKmFe4Q3eDht19nZZrA69yVVG67e6Bef4KmfhEhiv8DQDrV29J2AA51fWi2Q7WrbaMS9NuE4oQfA7qc",
  "key38": "3995EdiofqhSQstQWBVri1FZ6N5tRizRPHwmkam3GDjVhjj13Rx2VsMXsgR6kJhg54eZSC4WBPMVhQxkxFZeLnhc",
  "key39": "28uwwj4EaQwRymkMKjyti63JwZYr8wJ8GbPTK4aQDBX3Lng3sPPFmxAbhawTmFMnY27w7fricZ8vZ3xCJsgnCr8r",
  "key40": "4Bu2EiUQMRRRopCbt1UKkjUtueNEpukzHtv8Tm9nfpYsCpfz4DqRvLKbnwAE5v3zKBca8oS5RZPPqoi7LUr6FUfD",
  "key41": "EFQ9c1mvnzek11ocmzmBaBib9vTvYDScibgnZbLDJVe3ELXUNc2AzmbcsVrSxRqT5trayjrr9eMFzvT7RtQqDxg",
  "key42": "2dswKVwtvgkMiK8ksCR22sLSXJyHZtSV6XpUYF46UHXc51F7tsteGE3YQDysp4tVpYiNVR3TBh6aLrpuiQyZkFBp",
  "key43": "4PRoLVk4NroRYLvcNatHmwUNcngeKDQRwWRrDaVvyH4NNFoc5eSuSZmcfVCFbdYx3sUPe2M8uVDpiDf9QFVJ6u6f",
  "key44": "2dJJGZ4q5i25sbuJcFYSJQs3g1r4Xje4gbEKx6jtNhJGjYZt91LB6eArq12GGYzQeJTdnsJDQ1g9bDQD3cTnownU",
  "key45": "5tCVnWhS47kDcJNLCpEsLojsWGjAEn8jYvAgRUL4PyBWLE6em6kNJyn676V5EGxThVXrQeTjoGhqJdpDgs7PhRUS",
  "key46": "3bRRfeey7NCMtMpXCbpvCshsiw1FK6B5mCo5mXGzo6cEH2aWopH2ETfYz5sdv8qVRi6Fx6ZHfdWGABiB7c2q5LQv",
  "key47": "2JBdRumCn6c7yTPC21kRbbrXNcsGJFNFRBH4XzKVXVdEMjRkwsEENrio6Gp5x3gPFcDm4EBkZRBuXp4M8sFKJpXw"
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
