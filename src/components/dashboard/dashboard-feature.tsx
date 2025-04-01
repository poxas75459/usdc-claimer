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
    "4TdVwB1rk28vjcFa71mvDUetxUv1sa5N8TR48QgUxeB4M4g7BUHSGeKsu9kwbaQiuMJJCDyRExp1iwccLGCzxNoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QVXwEtxL6nSuhiTz7196Ltj3wLJSNi3paWPvFnx3dDi5urr1dRhwQyhyqFPHMpwRzqMQM4xjQ9kBrxvaRDqeMcB",
  "key1": "2KzZw8i1wYHYNtKMx8yxeQs4f2tdaALyxc5uZjvHzrTdunxiHvNvZBtwYSxBzCeAkM7HeRGX5uJETWaLuYSBGG8L",
  "key2": "n5Sfg6ZpguDQq9hHfeHNZ4gwFDBTDXKmtyDaY2qZJms1tuHRJdrxrMqmBnXEHiesw8vnZ76jKK5GWqGcqC3Z5UM",
  "key3": "5x7Yo5P3jMAThbfeGgdzjwgU6GoMJgWs4r5Yhc955xnHZbHH82skACBMAgZA8wLbXt5fotJeQ1KrLEgbXMFd3m7Y",
  "key4": "3LQCXa1r1eYDTkyoWXdX3UrYCY1KF1GDYe6Ppd4qyZg3yHhHnQfREgB8H39frKPJM4NzNHFE2iS4JYH3zqUVd5nm",
  "key5": "25uboUR25q7TXCxq8E2jjaikTcWB5qT95FguM2pW8zDVLgGyH4aUDKv4sd2M6yDNzJn1P4Ucry4bBay3aBWRHS4A",
  "key6": "5dZLUzNxaNTk8DPU4SSrNxm1zqaFcKS7gpKZ1HnhaWiM7Tbp3YeYtkB5oDGMXFHiynBGqnusDkH51ehMFTp2UkDk",
  "key7": "36KfTUx3KDyYJEwTW3g2zqn6HTDjP6wr7LgCPQkvCMsrjrVkBq3at7B2MTJCqekYzxmBpcxPMAcYAKCkSDS3pH6A",
  "key8": "3wKB6WCDWm7LF7eTqc236abhptJeF4L3gswQRYCkgAJwSzMMJvcj6r6ka1xQB4MzGGKHt6Ri5ux3GAiMgo3wz21R",
  "key9": "5eSYLZrMJeGmJeGU2jpPRTt22hr28q2dGUTNnX3WB82xsWcP9ucb1sNeVRNuJs7WADad3BpKRPmc3E4BXBpybqJk",
  "key10": "pMNsAPmEj25dokbgR3X74U57Dudqwe4YUxXRjGNmTriiVBw6kzoFevEuq5EmUe1gGtoU27mpCyDPSbfvkWvCZq2",
  "key11": "KxRq3TPrmmz8fXVMo8i6uxGk8XD4DKTxe51diUWcWqPdyMAK3L5TcF1QVh867VDfxYhkwbJzVEUcZuVxyLxDTFW",
  "key12": "4KUaggpvoxV6zVxJLCqwhjawTCCWiNZEZZb4wuW3tbRgrCgxfF7Yh5W6Vxz32Fq5KEHzu979bLB9CrFEtdPCdUio",
  "key13": "3toZmydHNFFwwkhpMyKD3JZzhw7aEn52iXhfnQEBjMAPrZep1uRWNMARdzBkREVDTxK1nQoHuqPUvAsTrFpd7b9L",
  "key14": "5YihvfQDSnDeZdJpNZN9BZLc9FT6XfEFTBK4FunLrRRUnjrgWuRARS1xWh5YTCaQMoFrvRGe2uK4YUVzNQuFm8VT",
  "key15": "54JjP1sg19Xm6LhZiQqNeu8Nb5FhdkyJ27v6P5abMg5fYz3rBCkGjX35xMvDwihVNrdFbLVZhb5nYzzPtMiKTmYg",
  "key16": "5TjRToNFLLYcDRHpmMktGsggP5Gbdma7hEBH14jVwyETCYx3acfMeLhAxGuABdRsXDppiSpKAs3d4m6VVn8L5rH1",
  "key17": "5ccRK9udgxsuCHEti18cKXE9gHTjAVxUDGBCSRJKbYB41NrnXzygMTgXWst6JXLqaVxe77VM3zrGqfcrwajaYJ5M",
  "key18": "3Wx63BLrK3a4c33Tuu8UNTTEPD2j5gfjqPEkFm7NsSgyEoiACuVBnBomVK5RfoTg56gwanqdsXvP9kodRaeAVFRD",
  "key19": "4WFaz7No9eB5VEMDvzGe8zyigUbJ2yHfJ5YkQDr53TuTbVUShFUQA7PzXmwaUsFGjcngSodCHtPxN27oWB8ojxjx",
  "key20": "3ftWWbWbTzmESgKmz7ZZ8rM9YmCi2uVnidH4nkQZheC4bqT4AZD8o511mwZic3uV75ieNTSmFs6K8SLx4wkBWhLk",
  "key21": "5ydkVR52SkBrQyq2BqpXXDgtfE9jBpAxXGZKGstwbRmFrjxVbzEqig3XZHP3HLQAzNcFn7zD7t4VF69sLEw2rhjN",
  "key22": "zYhBAknEksrCpZjLUVuFho5s5U765CarkfhevKQoPaTR81riULg2ZyYo1mucxybC9hY6ikmMJ4rPa5XKrcfFMsA",
  "key23": "63Yjy2kqY9sa92o61tqLqYSMRu56Kh6Q45WiTC1suWJwbvsyvnkr9MeLksZnVWMpQf3sACV2S3UPW1HYSMB7HHJp",
  "key24": "65EmNAXQ3zbpMtCLq5Ub5ADhPBZHaapfUR2z8KX8iAroqSqTz9MKEr1iR5Q62uKKEdU2unxgBbM6qc46QjNRkyYE",
  "key25": "4vc9b9GPYwVCbvwTh6mTZTdEWMEZv4K8e6ZnfgUf4oQUqgXszxkuGkC8gM7EErkTpL9Cu515nj3JmFzykjH3FWvN",
  "key26": "3weyLT58hxT4AsckxJrZZqCGPFzXG7P4r89s9o2Ri4Ssb5Dscbv3iuNuhYPxiTmwMXwhCPmLxwQaRtTgPp9EuTir",
  "key27": "24jcSeq68dSvh1bpkEpnE2rjR56ENYVCEMRBXMZY58kodJ5sraVnb1d9MV6pi2g5sgtU5UUgFkCySx7FkbWuRbTb",
  "key28": "2bsH6vYA4AQ89w1VPvAy5uivrLLG9Eu1URCcJcLabziAQKBvait9wpvXBYknATU82V1YQNoKn5WuxGkFaNRmqgfx",
  "key29": "3adSsQUcYC2MGH3qiyjRTpKxZUqDqrVfGXy2SLjNXmka9HxzTXVF3hjepLjVa5iP8CvHgGcc6G3u4zYGj1nHdrPB",
  "key30": "2eF1bGKAnB6WxEuZWugBv4h55WJwJAPYfxDENULFPbQr4mwLxnggLPW94xxgaXJrRgN5JckSoZEdsXeWXQES32vR",
  "key31": "NLrNgcEiRsQzB9wTJQa3zMAsvyCxqhRERy1TzpNCfSpZVtf4U5yY2RAFYsxm4EHaKDgxUUwgFi4CxjD7WXKz59q"
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
