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
    "LGL5grV4ZGB79d8dJ9zq1S5vkYUaQFFdGinVpnTBEM59AfazJ3Bn58JiEVBMBaNgDkeUMsJ3M18AoeRqgYfeNtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2guscV2WA3xZeexbq3H9MY2B862X7X9pXzMjoiWGPYzH4A5pdtrH8CVNY3Jpnbh2iqzwWisenkZk8fWA3pe7N8YU",
  "key1": "663hPLRuRM8WgtZ2yTerwVoW6fQD4Xk44dPTp1KiDnPRN6RNW47zFVfBnJA4Y8h6YFpiCcB6XxKCM1RjBbUD1S2o",
  "key2": "2xrUoUjHj1a7Rmx5KUqix6mmEXWJTbkwRWxn7nFhBpshBBvMpBXVY8MVtakMEoooazy86hJ8P8Q2b8bC3tFkjx2K",
  "key3": "5cZBKciMaetyHPmeNrEgB62VNmLVtPo9Yo5uQMHrmDMfN1ysWsY54qomkBoPjkffkSBGoiFV35NtkCcy6kLGbTrW",
  "key4": "2JUpPatC3DhRhMNajDqSWrqgY3Uw3yo5725mu1QQV1BnkS1noDGs1S6CzcQvdzbZzNMM57xyPEtEubQS2nz8ZFSn",
  "key5": "2E2PjGeGeh7w3XyvEaRcK8s8Fnp8wSzvAwokthq2oKRv9jGFKfrSzdC9STRBZhDqgb2bYvrRPaRLFBg5XgwLgByu",
  "key6": "5dVzGSCsRaWCgSW884f1TqQWRajpoQJKzcyPdvgXzyjx4bAPg4yQVRrJJ84vTy8HCwXPU4p79bfcupKzmadThePS",
  "key7": "mXVQiYsY4psLPdHxwFTRk4q5ni62hst7WhEfxgB7S1TdvTHgb3xjK8bHr9dwQ2ky9Sjcn4so8Fpk3ngaTC1eENs",
  "key8": "52jxXc9zQoEvBsNCcaioUEaFiiYLoJyr8AHNf5cDsXCqX7NCTrmmJUZbUS3MPrabCFHJ5icxBBvYfZYziLRroYP6",
  "key9": "3bSP4iXzrHYEP9jk7qR2YYJBgJvzV2C8vHDS8NoLdW7Chiiu4BEBr4bTVxy4gwvaKGzhvh996e3RsKcd3JkCVh11",
  "key10": "4r2X8fqajNd3htiiThGN8kj4uXc9aro7wbGpXd8TnGeTUJgGiGm1gZayYnMvAuffR4rZGkRCQhEvUSE6YTaBZGkX",
  "key11": "ThgRTT123BoMysUnNUnR81K8S1zEUcp7Wrfr2F4CHmjZQqeGGWyDooZC1SWhHLHELTdj7y8JpfrHVqGFMA5HxLY",
  "key12": "3mJVxBFdFhzfjMPwufCuET3aFHchzvGzeAnqH8ytooReFJbaVhXBPJgSb9DjE1678cYvTVpQVPFw3XvqPGeAQsnk",
  "key13": "4sw5CrhxeE6JwHsXDZjtEKD2w2gL3kw2spaH4d89eSNcGNfyRaLM8H22zNTZrHeBbTJ98VkC2aDif3Zae66A682B",
  "key14": "6HcLTKK5FXvm8ULyc8Y82mb72v2ek5VEVciJ7kXJCuo4tERnpyQysmKgzHiJCxvWWtWXkueamGwcvVNZxrkfJBT",
  "key15": "dSZoR2KRyoGLUZY1Mf3VxHVMS6vDjpSkXK7NweuWSXLhsVndRRSuKDe6VaLZxiGqj3AKHxLyinAoQJrqn3EZwtJ",
  "key16": "2EVSaKyvedanjqBCGqJv4oH8PWq6CUtYkhBgiACFy1y4ckkzypamtYvVZBsr5k55BWYxuNYR2Ur4cG7WHovkQ7uy",
  "key17": "Bc6FFmZFNrP8e4mBzRmhiEFbfgeEwLmeE4a124nFWBKr1f5kHk9iPLzhDGyxZJNbycmwyXxCVS8XNuZwKTa6WaP",
  "key18": "21tAYzbkiqw8dF1T1o5XAa4hxHVC3mw8Ls3VqBzX7gzD6AhNKPr1HwUsoxqqNev14LM2feZbytm7skt7TGH8hhHB",
  "key19": "3fhEJdN1eCSLN36LUSoFvpFBWPFLmRwbDZBwFrmPy6cwfyb3JBUNBPpk2VkuJVYg5ZciMV6qpT5vs1dt1qwkXEse",
  "key20": "4gwpVKucsLZFM37rE6KbJxsfQFeGoWX1GSK1ejar2cVUfCHdm1wdntakyDWs3ZHsGzTZtUgnh2XtGpPwPEU495JZ",
  "key21": "4jRyjGskcvWuD9mMzDzL1Dk27rq2gSc2oRPLNETUhTkXaXbNN5Eg9erLEBPn5aMjd4BYyGMSwF6GdX4bgfyV4P1o",
  "key22": "3k1pm5dJkCpUkHQ8QsKk6bL1rdiRZqKvzXcukgpbvayGZyKusavAbYNVb8Atwao1FLnmA9xNbPtTW5qxmPwLRxtG",
  "key23": "2YvSf1wgst7XT2jL6HysEnSVHLNDxS8GSDTBciWPp6GnJnL8c36shTbbk5vxx1hDDP8Vt4kGxA5dH49tryaHkJHt",
  "key24": "4iR5dtUoLnY6V8yfLoqxZLaSh3Sapcm7Sjb3GegJN5nQG3fvbqXiL3ugk6FsCHos7ChxCc5A7Ru8BhiNwFyCMLpG",
  "key25": "4EmNoa9KRhx2BtqKnMqN14kzF7J55L6HAxyBgdaqNpWo4bGbUxVdXfWEJLJZCF44arteae4HgsGquncUpSVMJzDk",
  "key26": "5fA2pDoTKYY3Vwi86oB1NpXJAqiKUyQyxDPn4Kyr78smoHsDcVQr6pBj1KfcWapEggEjJnYhFu6wwioMP356Yv5t",
  "key27": "3LnGeSRaeDGkhr13YVvMyLETu1dFrYdopZVMe94eQrwgbqKSgyxHqNgPEJcymogrcKkPRgY2tuGr5pdCYT6u1nRU",
  "key28": "2NQMAmqAYShBcaZCqk17jYCN8Kmc9tRu1MXXMXa4W26waFVNyAzf177Q11oafEPCqvibgTxQRuySUfZUp2k2pdHw",
  "key29": "4iwrAkR6GW2paS3rqGZnHMWwqPELoV4os474MnxsTW3FQEhVWZh5uHcUtPWEeVgzRXSXgeMkLGrA293QHXKtja3g",
  "key30": "2vUPq8qjSuNd2Jjrvet76toLpKS3BmamkRmtX1jX4p8yndfmDLGWPpUHptFwJqfjN7o9Mj9gde35KsxvvUuHccno",
  "key31": "4ic8gfQfYiCGhsmeByksjSYaviatDSCfRt6v8kYqaThg7D1pH52YHSzzgr6jSbJVAyZx3eSvBswBdKxFfNtqzQbV",
  "key32": "4XySnzPZkpHFKkbguJ4q9iR97Pk6h1MnDWc8BAVuJZkdPkqf51ec4dZFsudjpWKzKaAWP5MfaKBdxKU9g4RmP9xv",
  "key33": "FmrJMEr88qTYbzNU61fsTWynLAzETk1sLWMZGNDmzVS7n1dY4VBvtGnUcVrQSrDTWKdaZ8byHQ2cMrgvUkKrMoM",
  "key34": "32GTPchhBNuR1YrJp3MjT7iy5w1eKHv9tVkJqcisTnEhjaepjfHRAqo9L3xoLiZuiNKmNWUrBuHFwNZL5dcFd6K8",
  "key35": "5vzEGh9BpthSekJdmuaj4hyKqZVUyHnNQQMrpAW1Wmavn9hfzpeZpzC8xUDCZF5tVK7HrAsQqvug7AVGWhD2AvwU",
  "key36": "5uQYvnEj6ei9hprmmdTQpPGbimAMeZksJcf9rG376MMLaMJkbrS4vW8J9myXFJS3QrxcKek478ji1R4SUnhge8Qt",
  "key37": "3zpMstpuyLGDymoZj92BbaUBZnWAYeoPTupaPBGwx9fDwmTBrtap3SgpMqSq5Sf7uVFbx8r7yX9KfKgNtqv2eWQG",
  "key38": "38NFn3VmwzuRP25pV2avDc7AvB73Y332veEu6vTmvKY76EeHmQ5UAkqi2zXVu5jJXgexGXjQ5dXEndDmWRxCp2pT",
  "key39": "4HKMQJrLtMy2Hw2f6ysXagw7GSHDd1ZRsZUgD7PK9GLTQAfpEEbymrYBcxR8UHYLjuxAxUeGworSRVFKysVrpjXU",
  "key40": "5mf1q5o9u9rtMtdsqEPgnxA6JoQr3HPnu9RgodnF8P1ffqcvE6dwhMkXTMbJYnBSPHnTu4nAtNNkrbZVWQDDie2D",
  "key41": "41Jh5jKTcq1ZhFfQfpudTSRGUAcnBbjagYc37JH7bHEPTF9uTfZjQsHfxwM9TXpkXksXkfnhm68HEHa7NotcgobS",
  "key42": "2xNEhYof5A14ZGQFzfBNfkti1fVn1yH6mLbzRdM7P9KfvE1sVuEAseE6VuG6H1hCFfWjH68pFgGhT69yMS4wdRg3",
  "key43": "4bYTdRAYwiBLut5VgPHxR6nbrea8pR1oupDiLzX7dKmVzbu82FgATWQjkUXRvzesFgmVSJZvAiUCnELQ9gQXBNSP",
  "key44": "H821cjQ2cdhw84AhD57HeoqQCY19WfUNbhzM9NVmtXmHb4dDaWYG9pp628o4hHcHHDM7DWgtqBoR8fkj5SU8zuL",
  "key45": "26RAKk9W7ujGeEhgN6hpy1riVkeyKu1zQ88jxmkoKcc21nnWLYFjo7W6ab5NsB1xWqMYQ2CDTKxd7RuFjJrJ7u77"
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
