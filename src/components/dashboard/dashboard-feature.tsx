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
    "3FcQA6416oU8zNYVhzzw543wXzBeaejdrfRxa7gZvVGWChCLD7XFeSR5skPoUfqfaQgufNK1bPP7kvc1DMADCMv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NtMvo5SYHMKr5AA136UmYDBrr6gkd6SgaXT7TUcXP6NsHzhLgq5PdoaCHCuSNkm9ASNeGwtdaVZwFzDDE4Rf4mM",
  "key1": "fnNNWGJFAQ27vjWvnSEhEwsX4i1P1tK3RQJ3v5ggmhGwbUxhbSzBdGefJdCLfGuXoDVwrM5Ya5fSMDKwHiVw9i5",
  "key2": "EJtq9BFYuAdNRm367LkJFLxKsQ1wYJtSE7148ySNx71o5TUHaKVNgeqmHsykHEmBxH29t8xJM1dwGtNx4RrigW6",
  "key3": "hTXEKqQ4ofJcP31rEGNcTj8BT1XvVkPVcD38eZznCi2tkCCNtpXSK4PCigU4V8sMRsgCQasS6pEYRmAhKiF4GjY",
  "key4": "4KKSq86B7sKhj6kzCtGnbz9ZtrbCDBuWd1xHACCAKBjJivZuw8aYZeBvCt5xgwxYMCBmMCWvqcZZ2WKUGma8MQeD",
  "key5": "42DvSF11ntYCJV199LLJy8QERgB1C7C4TFGshfRvr1ySF5JRe9LgpzqvvMfaoWbh1WdkCNAbVLRj8p7JaHezhxNV",
  "key6": "2euQkfVTV1LcEycSoC6XgjiGHgWvhAGbKACHT9DhxECz9AyQ6v7XZno8NGef2jVsRwVsnK8HL6zqsYBa6WXgp3vX",
  "key7": "2GzXCZw4E6ew4cPUDpmwnXPSDVGyWeAhSCHzvpgzThxN3g1RsD5ZfoxxpPrUc69bkyuxnPsEos6q3XAKLTyYbD7u",
  "key8": "2gwMrzQkwu5fC28bu2MLXsdhdGna5xUdZyfaoFfqwUzb4iByvrbj6ZYKujLZYn9aXcR187FvoDiC2oKzVPWdctor",
  "key9": "5YmsnvoJcu52pDkrsegHdZBcsLawVDdmdRZDK9rZF9EgFuvBSjRKNHd1uRq2MEi7CGPMMHnrbLPyyzm5KrqPM4cE",
  "key10": "3sqHcYaHmcX5jFFBvSA9pZ2rUnscSmQogTu6XB15QLGMiFck8bjyzQ974JSNd5KMZjdti7516GmPdK3wAi4rez7K",
  "key11": "5bwy5Fc9j2DVDTdGQ9Hi48CeCAfH9Lq2SftBYQbpc1TgqiQgZVea3zWg7a9Xq6Hc5ZbCRqwsBJLj7QPCwwbmRTqv",
  "key12": "4cUoqPmKLDqKt8yoicteom7yGJ5jtjfHFEsa6RL96N5MuZiuGqD4FYiBpH98KhQunB2vKyVdHtSv5Nmc2FNqgF4r",
  "key13": "5g1GvCRNFLbb3g948nH829yB6ttgCunHWuCroMEWzkXCwACXA5xTytDYMFZzBTPkVPUtgYjfqB34cJMg9jc4hjhu",
  "key14": "MxappC4MGcDrmXoE4J55GGGqdF446LssZm8PNf54rdWcbG8PDHZ4oPSk2pJDEV6qZAiobd5GAXMvFFAsestGsfA",
  "key15": "3heWiHmQNa2oWUDyEQiiRKRz81rFAjBMMdb4GsN5E3xmHDrMEZpfaMG8XHndz4dPy4TKkAsaVzCNsn37Wkhizgjq",
  "key16": "2RJ28RZTFUWSTqfDjujyXBgSbysyzZfNu7q1dErBSgntDUBFiM1BydFNBD4WYmTHuRh1gPeQDXKwyz8TcYJqhqi4",
  "key17": "5adriitPJGgCh1BLygnBAbyfJDTbnYPubuc9VJrcCnnxZLScFnUNX9F4gVn6rvptXqUqQudeA3jurJ4J3HZ7HpjB",
  "key18": "kSkJvBPUQmcCiPccnWiMfuj4GSH98vPytbGqWj7HCvVVCXT9DBBb6YpzjAaFkc2ioYkJPJBEXBrzodFv3u5tbAx",
  "key19": "3fotwKsZNZqbEvBBS9K2LJt1k77spckE4AUX4KwTxfDMQ1DqXq9waqSg9AstLuTEyYTahTj7xniuB9qBDk6bQ8BV",
  "key20": "3MxjcFHNr5gr4GXhh9K8pqaJAa4ANy8bVsfVDjHSe4JBiGAyryKfkCv3V1SskRtQnjerNuWsjki6rsmQx278o4od",
  "key21": "zfdCUrHXN3UvQmnJmNjA9AMRbVfBqjR2XAnc3yCr3n7SSzeeHQNbRveXMXW5ZdQmwkLJETjwFHqH3WCyvgNpuSX",
  "key22": "5NDiReAa77onA2B7xvYm82ftpRmtV5SbmT3RoVeLzwNmTFuoxGvuvMwCCaEagJkheD3So8DUbExPEsoqeGFt2X21",
  "key23": "4JUXobTZsH3nt5iYcjTb9qFfGoEun4CsPNGks5dWXWjyRzcNxwxQxxUF1zKD4HBfvLsDJghD45F3Ngfb7rKNQdFh",
  "key24": "3wmDoqgVDJWpwBMFwstSQHAHbHPHxkk5cWny6nYxsXy1UgY6FwHfhr3gG4mH7guyBpBWBCmSuaXuFNWqxgAocdM9",
  "key25": "2j7BPFgGqn1j9heHEBisooz1tWymjPWPUdEtkwY5hpYNZQbXq1wp2Xbw5sQLxWefDBY94BnCNbiWLNb8WQSe4hJg",
  "key26": "Mmpz5rn6DKwj6gAy7RYR9itBvV6npVRNJ4iReeXrc4u6DxzY8SqjFoehQd4vc264sz4vH5vPCFHXSQS9mnqvfU9",
  "key27": "3vqdUt3tXbpXZNGA8723fmZQABjzLiMhGVghKMN4a5uNHJMkT7fEwExv1mNxiNcXamii4xvMbPSX2dK68V1WUeG4",
  "key28": "2jL5YPSDbcbrt1vELzj7dP5g8iYYc9JoTXj9RDFc4NioARSSB3pYg6EBzXRYKX3Fr5nusR4EdXFi26TMiptXCTPB",
  "key29": "5dKB5ZBidDLirqJAAVi8QZWM9mQjLqDahxCZ2ZwDwgZTApoQnojc2MVRLJ9hqg65efeotorFp2RvB6qn5H4bGhD",
  "key30": "TwqbTSsiXREnLLPLDiY28uCjrHSujXZQztDm5xsgjsryp5qGjehPhgKPt9DUNjZeaPipNKcGD6UQjYHeqzy5J6A",
  "key31": "63d8QSRfU8gfW1waKWSd8JQ2nXTd7xKqn1Fgux6tnLzF5JAiSbYS3tbVkSifVvPMGT8aE6cQstjLiUnaDBSBwpvn",
  "key32": "3SMKCG6jZVLLADmXThV5ngGJRsz8ViSvgPnseQKjk98CuTwzyBypDfQuQsBmP6iazXoYc7AEyUkJvMoyQMiv6HTP",
  "key33": "LX5UX6msniTQLUCnmND8TajisiU5VTQbVwuzmDswd8zaDZ2yDmCGN2iSfgvV3mGcM7D3QpbLspQhvu6dahPhnBc"
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
