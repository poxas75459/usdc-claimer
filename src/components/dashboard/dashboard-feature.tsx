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
    "oaAQQ1oCpR6frd2eZdHS3JniLBthGKuC5z88i5VxNkepkctc8isoJf6iWE6isSVkSFHKPmvD7gHtg52qMxK2oM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r21RapZVnj6EZP6PPV5seDh1vMfkxTtycniJnL5prbF37hUF9wTkowbAf9vpwVviYBt9Yw7iMLy8aLsbhVfbuSz",
  "key1": "4JZuv4qzyhxFYbincQ979DWpPzj9LADhjAdVFohnEtdBYVA1UMKmZtAJtuxFyBLkpCaP2VTB2WNLgGiSXokDbRdS",
  "key2": "4JUjz6RXbZgFMBVh8ae2tKkkmAPUNGzaKF9Hc2Qrb5fJJK5xkSZky7RpEvbRLNpCvg63mWbkvf4A4LVAhNFtMzjs",
  "key3": "2MJxsMBVvFNwzqxyx8Y7mph4EvFYpKHnEh937TsFvhvcRNs5W2W44zxnDi9nrH25uGeLLmoBJcEbYcLneCTrDq3R",
  "key4": "4yuA63NRcf1MTUwtn99CUYCjTWUxR1vJHWCZzudAuhpaUcoEDYnsjFi7cokYYDwVdh51FsnxdtF5W9PryWdk7pU6",
  "key5": "29bQZMQfEtXUURgnzyLaUUXfubc4D4D249qBM7Fvpv5ovHc38ywiXSB2Ff6FwqY63DnGiUQWo5E19v2V7HBw4vdh",
  "key6": "4We2jgric77MKiUBzo6wiamLdNuPLwVYc6o6XsUjPu4Guob5FzTFV1i98tKJjjxG1PKcHiQePTibFRJhFo8AVpah",
  "key7": "5Epk35s9qy5rJi6eUUHf4gmmsHcYvSLMwhhdEXLZCdWVFegkvRhLyrcrGW5ydC4tL8mETVxsYU8Z1Ek242nUAuDX",
  "key8": "2gU37a3vK4Ka3Np1xN1FnS22y37pfrzHUertNZpTeeJ6NyFSi3HfQsnQ1cNz32eyUEUcuV6tA58ey6W6LvT5ksMm",
  "key9": "2WUm4qU1kNAdUE2hqJ8x94B5oF6L1ufNtJPtCBTehdcbxFUQb1GPJfqiVkWPdiSQoTGjr58CGkHnfVwimSg1tj4S",
  "key10": "PS7YvRJhFqBLhUx67kJpLuUCTeXsktD1iHW9g7Jvs1vp5xD7ggcGPmBN8NycSHnSkLDoxst9r4RStXyWsWoFfWP",
  "key11": "2bCFmoe5TsrmXz5VMAMDQZ6axK1bMQUtZN3SjqLR1odTtewanrwwNbrykkNuK5mzki1BaMb4d8tQUihV1qpiNQEd",
  "key12": "4MRVy2y9uSFVnYpAxrvu7MeRWY7AaFBJB85LvS3qxK1oEo5LYhuT9xjHiSj84618uXDv9H1uo7z95gS1ihjBmgNV",
  "key13": "4H779dAWSWhuAAemcpYGNTagPRphpkr7Dj9YRgNSzB25X6zejB68TFuzkWQdGbQtxNFBPeHC9m8tZsdKkKGrUQhG",
  "key14": "5jWKNvcezNNUYddRf2YHriyBexxBz1t1Z9UgihDnYg5gG1FDPoXc4z1xqYNzA7sBbW5KK4CjndTHYn28Zfo4hnQ1",
  "key15": "3rgVGZkug23WLsk6e5Ze5jPNpmNQZ5pgfKFhfFbwN7XNLTqC8eyTdn5rHvfsR2aHuGUKPmynvwGuoFHarQMGNWg2",
  "key16": "5HqtnQRZnZb1VniLVEj1zt7tvPpQnsHXR5PzKKR6EPJqMsUb7n6GhkhFfd75yHZGgFMS9nHYuFUNbF5o78bhSyvx",
  "key17": "2HsFdyMFKQpuzMcpVdyP2H1ZQyMoEJdPnspXGyEQumNSJykx2Lstaob8gjGcdHUEWLQZg1btrEGGwiDscLMjzHtS",
  "key18": "3xG52FLducxdyFhyjFhpvWwkkj3DMrArFcVDHjFC4iY93dephp5tJxSTyR2kZVuUCWionxXYJtVRKXEM3g2Zmxys",
  "key19": "5Ke5CmqNmnzrvZ8R5iCCrowgQmsFaMcLginHkaJ8Yr2mbSJwwWNaJajqJVvn6dgm4JpNzjzu8EqHjYnshR1x4HvL",
  "key20": "3Wepn7j7E7KLr8zSzsBB9jjUZiaSEz8kP1JZiPPsaGpdY2YbbUTLT1yQf6GMGvQaCC9cBdCRCRsmoVTruw2ug6Zj",
  "key21": "2k21zsVQhBDtsW5S24uSE7KPgr5FAAM89tGtceAfaxWAP2TUJKTqgVvuMg62Knc3XQLkbYRegrUj2L2iRAdGjTtc",
  "key22": "3JjKfV2TjDtvFe8zWWhEEu9DuSBRqpdhPvZhLkT24pwHjb78DQATijQB5y2X4g1i8sjLYtVQcRD9h1QKY3UwHf2C",
  "key23": "NufNQdW4jNoWYG4Qsqb9TYrZHZLvgCPp5qdHmqCLkcEQC4dpuHA7H43MRQB8xeDFUJHquzjKUxCrWATMHzvjmDW",
  "key24": "py8SvHFjWHcrtFLvUcKRENAeHw46cZfeYErEzNCCjwndhwwN1PDJZE6D2nhCQBpc2EamiSBbE4b4T1TBepoXLSB",
  "key25": "7XhisAAzCHCFEXc4iBRJSFwZu46yf2xGjeRTNWXAUiVDm2RA7Sij8MFgtV4zhwUpEbQYKF9c1DXq3wGo7XvCGU8",
  "key26": "3KRdZEcoJL8YruUGmP8Nwo3Sq79XXZjMAiS5PNgij8z32JT1cgd2AWDQLtfRDrpLfTTPncE1x3mRGpYwkthDqqJa",
  "key27": "4yGRYvERmNEfXvoNxkS1FNLcKhtq3BU5ZYe2KasCVdiqM3s6ekerVW9tajp88tEkY87Ny2y9AoQBjVykZkvvDiYa",
  "key28": "5Hc6dsyc57xoGaf2JbthoyvyD8Kg3fFEJu46hwaWiMz3RTGJRH7fUB5qPC9FFw5mXo6FPo1fJnaMryJXRtXppPj2",
  "key29": "3XRvFRTykY77YnstTJLNpYQe4rTztbyGLcG6iQSzKrJDRYkxtC1abjCtyD2nhhi7dKpcCMPDum7Qe6EnSzJuETVA",
  "key30": "3S4Tac6Qg628N9ixL151uMAnpTw5uuG6W2eDSkiWVJT2XWtScZ22vYgp4K1M52JT8tSWeL1ubcNcFLcEmKfKCZah",
  "key31": "2gs769m3HC7YndotUhbvzLn5iUBCg3xx9yMGnFD3kuQu623BbaNQAhbWx7jrERbdb5iKkt65Z19zWPBmx91Dv8Cf",
  "key32": "5H4DyTd88YuqkFwEtK6aBeG8KosmGsUEzE34nDfE5aTSJtirjFDYKD4ZHU3bpKGaWcTFJeW4ciedqoSfPjajRrey",
  "key33": "5Ano2g3VQRLmTjkzPpjxHoU9XLByZAFhd27b8fkQgXbZVr5Z2tPWdn9QykXBVxFy4sUg7LpZMX6j9qM5AzM3bHKA",
  "key34": "56bLkXXqx9Sro7e1wAp2NUzLMB1vNDaVKqzqjxhdeXUb6x7LwxGBwPRSXkMVn4M2JsDgczE5fXZX2yEyJbpBv6MM",
  "key35": "46YzwH2BJpnm9JjHUA5YX5XELZJkuxbsSr5kEu1McFWYnbBmiER5RD7vAJ2Kide5YKC7roMRA4eFkpcb3KtWWCEL",
  "key36": "v5TrTBsKk7sYqRWJqPihL5dgd5qTWXy5oNy8pJzit69N2yY7ofu91PD7AKtzKYpF391PSqwEybWMdmyjHbNq2WX",
  "key37": "5MLDwbVF8d1cdPf9B1SrgfKEfS1tPEGcpkeb7ZCRqeusuPWQ8KtzkKPypsKatbfCLXcdo9Gvzuzxx3c9GaNxzr8J",
  "key38": "2WtyPh1LxePgGBM9Tbf9KykkhR2aaHv335Meuebr8KdhUQ6PuwU1VqrqkjjtiufU7vu5S7q8eoReyDPZn3FwegKe",
  "key39": "4ZwsVwCeBGmekgd38E4JMX4ZkQqEcU3eJwJqeWXjXnQNj7Q5uukrxd8DZRMBZDhbA35pAidfsMitukeFNLCoTzsr",
  "key40": "2uYoQdG9HzFKqrXy2Qhf7Wy7ZNxFXhHQvQeXjQBH1Bm3BFFJUXDETYtsn5ZH4eWfV9eJbtFdKJcMmzXLuJ3RvDmw",
  "key41": "4GvdEB8k884HTYM3EJJRmJNLrJjWTwbqfwoxA3dRHBc8zGa9iRtSQ7aUhm9SR8LrbCRP7on3yUGdTSx4MXqdn37v",
  "key42": "4Cnce7b3Z1J1TQ2cQJc8FR5mUKCTi629JB8LsLLtHKEp6Yb3AGxpQzn3Krqx6Bco6b5mWWWCL69Xsyj7N6MvKhar",
  "key43": "5Dj8XX96GRQHYVfizpLKL5J4yC2ipkgBFNufuPpVrZbtgMuv1knKRf8wxcmbFZS8fRbsqP296mL3Qs2sU5RMpHMa",
  "key44": "27fZea5eJYCikhJphnTHKP8wx5GLHdswQkJbhWJnZRcURzZqbTacesqaqroqtaj1g9KdyzDZR2875pQ9u2MDqjf1"
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
