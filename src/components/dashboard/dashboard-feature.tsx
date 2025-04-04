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
    "mBBRWWmijPyiAprTzrZPfkH5STo7kdLwCgLyqebobnMd499kFg7DTFRCXspkQJkun5P4gNpHv8B7fRY3ociqtZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gmeqr8qKpRALZD2vZgBahsX675VQxwZju34yBaauzX6et7AA2XZd7nLrHgySJT7P4PgZNfEtrPRbrFdj8eAPGJd",
  "key1": "4KnnBCbE7x7Z6zB6mZcWzBomMdU725Fc4rb16jAK1ePjAHtBtnrmD7f4RMoM8xxwdtBtXDR24a79sQmcqSD5Tvyn",
  "key2": "39UVJCfs5Mt2u5e2nzLDXX4sJj7Ad4RTmonAWWZtKmsPwDk38iqiGdkgmrNH8u6Sk5vVUT788mUQ79LeTS8kkhj6",
  "key3": "2wev4qD57eNCSVpZLfcs3yFuBjWpN8Y4kPCdaQkZkTNyyXWQzfmAdhLhcRjyi1LK8tVWdQjQoFdzYmXANqYW3pvM",
  "key4": "NsBAUhJRvE7x7QqkwzmXhangsXttQmKJkw7SC2VtBuMHkE2Lknb7o2hEv9c4VAq3Ly4EERaWNMyin4JeZnySRJe",
  "key5": "5tmtRqea8jAtq42gaXQrh2FcS1Juv11Bb5xjFynfzBfMk9zKwEWGGG6n5gQ19NzeyP4ZZnLui19Erw6J15aV39DY",
  "key6": "5cQKHGckPBxbfQEMXzpETgL6eAVS5tnHHvSe5dWFfrm4CbtEKnPgYVPRTqRKS89pRQLASthEdrBGXAXuxytvp3F9",
  "key7": "L8uuW55NvDfExwKqKdpyqwRMk3CdPn6Kmna2bdB7hRj66R8vXn9vZRqdB71KBBot9bZ7uJnftKCf5maqdHeNkKU",
  "key8": "56u2vf2PgFVRu1k3BcxAstKpk436QpQCcGcr1gbvqGoePmRtpDHJfFLPByiwNk4mvvpXUq3tRgywSxeiCKrvYYn1",
  "key9": "2Y3ECamDhdS2FCbkP6yCqbSBBFGn5AoxavgvoQaPciAQeSXUwzpJ6AU9dQKzgyiqBHiWmh6peg1jyKyc8tFeMDdB",
  "key10": "42zco46Mcbq9hDU3jQXsXuA7eLvEWFZtRukVBK5iBNLvVPubjbKNEbgvbGc5dzv8WJE6AFodS5nSWqsxPH2xwAQg",
  "key11": "5K2YXGfiBRYq2FoZBFcq5agREVkRiXAe28z35x4T5Cp7hUXM8LeEY7g1g9TnKMtyCnYngMAV6vXmrV6bgkfZjuXT",
  "key12": "2LuxVGcYgbx9A49eNAwAf72Hf8N6qvVFGPwe3GkWjBqVerPnWDFXb6B9R4VwxUTk3X2J98wvcvhQbnoTM8AMyRnj",
  "key13": "2EsrME34hFTBvh7uyYCLxzvq6diaKqhCpqV7TuPaAnYnFA9vnfqhTXGL7oRNrLy75C6GVSpqWbi18sM39xVJQBpf",
  "key14": "3isWJ6jB8T95iyVMiVwvi4VWYoJtnwBor4hJ3m9JrNKDMimr5i6c5RvTMJMCnxaHAqH9aiNJAbwf7NpR5rjtkFYA",
  "key15": "5NKuTQW33JiEcdvMprQYhsjQpTSv8eiFUw1dwsiZBVdb1vJepbwZ9eRG4n3kgGzqX5YP5ZaoKiskYzDzz8DRiAL4",
  "key16": "jwGEuFwFYpGMj9jhThtW7VEK2sNwizBroHD9GhqWX5f2skEqr1zJfTNcVuaBjKuagZAQHuxJSQXb8JB62TJP18A",
  "key17": "UjYZE9vZW8Wi6nV5YqM8s6Gy52Q9DMxXZ2mCGxNRLxi4A1d1AUzPcapWSAfsbdU1YUy8dCXFbSwoo2z1CU9kbAk",
  "key18": "33azt8bs75h9KwaT1Q15GGHMJHNTnLWZARUcdLpwnQXhkoYeooE1zfzjBKMzNwbKeAF18S3ko5bkKNdNGmbmQVco",
  "key19": "3FhrCnDbkuQi5ddY1N8pAKergLGFgwyPGuez4StN9y97ks3PdftoC8gXaGxzHbahjt9AbJVjtSz7GbJfwr3p5a4F",
  "key20": "2Fbi1iC7tQ2PK9LFenDUc63GQTREn7fQtZaxUeCcJfCs7d2zdhthLZyZEXVy2Y5PAyshK2AiAUHyuZAMQpVgTfwg",
  "key21": "3FpKQmbX1ecXiMfZyTJCvV8PNtoXncpK29AUGx2UnYLDXhpSXHC3BF1ehyovkBBhPp3yqytHrhdxeurkVVuoCnM5",
  "key22": "3bcKzGb7aoYaMSCo126uDoCoKNPoK8NGN5J15diPCYm7W2Q94Pc7A4bB6fuGVHkK1gL38ik8nDQ9qBjmREHwjaPR",
  "key23": "31S6vVbjgQQP1rwCAMkDpWuvg4xXnTTZNKb7ij2m6PrDGtq29KshsnAj6itKqZLtxE1AvNBCVWsPiSwxet3m7wvG",
  "key24": "5v66DgUmwVqxcuoeRHvmT8pZrQ4iECjqR45VzbE4WKFfaGeSynDQ5mVxRriqQmM3dGygJzB8heavxzP9zAE9xLBy",
  "key25": "5kfYVfv1q5wXcaZ2CSycWKmJpSSzcDfpu37mwMqZshDfwLNYaYr6BY6tmJUm1C1GwibsDmca7hVnmqDmr5SeLYPY",
  "key26": "4RVyCYZXe9XmfMUqTZK6HDfNMkUtcz47QAvaQ2fCHR5StiQSAe5uw6gVGZAuqCs62RjFzudRjhxDJk68JRmXRfG2",
  "key27": "4NTpYJC1PEWBbCA4U5VkvJShASt4us5XZTdKaiHQVNQunEoXZQPipzATNDEAQGtAYZMscyRvjzwJmTZmjU4iZF1m",
  "key28": "4W1FAcvEemqwvUkCAbsYqr2FcGzn3ZMu4c9EDrfuBVNGiwhbAjvCNXtKPyMxAnMTtzNcVPtsgFvEA8FM8DFjPnpk",
  "key29": "2Z3mN7t7J9KfgrqXEf7u3BJNzhvb7qKQbLixkFc9CeAe2tn26FTN4xghHfusMXBwMTVp6DWZx18WiTeGzJaoKUSZ",
  "key30": "31VAfmNp6s44k3StXcg82ychJNM59aTcuhoAK5PBHScua2B3ED4eq23Yvt6se3THMfx9PU6NryZ7eaKgsPnwGTBa",
  "key31": "5CzEqF3eWvsNy2g2EKJAj6bYTEbWQKPD9fbMUnkq8Y9c1oXPLuQZsdXodbkjV9UXgfsfHYVBQMkVKv1nPyhHPdJB",
  "key32": "3cFvpqS3PuvKhJAx3QqiWrwoZFM7hRCedNMq1LqFGmcSBnfVBgsyLbJjXc54M2PUs9W5JpsTPKJABYgfyFNd7Sdv",
  "key33": "2FQRMVJ5u7WuZ2TTP6fexjbLJeMeoM4QzxyvY9GdmiPQi1AmEvYcUZZ9Er6gQFuX96rMEcYcxyhTEGybMFgBsTAg",
  "key34": "ZUrQZjzV7sKgZE3JQGKQW42XWBC1vwWuYrFV4H36cTh98q3pxUmkUNJ4zihBTfNuRk9ELstR6krD6Q5NH45ytL5",
  "key35": "4iHJZxZoKAMtZai2e33PQrnt34unLbwjHZtFxdxg9zEzwsGPBL9Lu7CybysmkFzFMcmvCajrDdmzZryDSJzj9rbW",
  "key36": "42FQTbMFwda8n7qnvUjco455ZCiE1fGt38Gw3CZ24rhqUyDJZjqWAkVMCpbxYP4T9S4A5kCK3ZbusUixLp58f7kF",
  "key37": "4L3TbQpnK2gvS1xyqyHqqqEGCmP93BGEk6Cm4R62Le4Y8HjwqppeTYw4objpR9dMCe1ELQaTxVitRReysjqkPpvx",
  "key38": "21opKUT4CNrFm6KsmQe76Dec9x5pxyjXMHJweYXs8E6jbF4gdwNxwUoPYU2xJ5PfFNVHSBYo6nFCaJGJbXJ6xfFv",
  "key39": "46hS32Csk3CBiXkhFdi1mAfuBE7XbpGqZNb9PH4bSHMmzSEmWKX9iqfQZsjaYkb8wHKV3B1i1cokM9xFhvVH4ka1",
  "key40": "3kASgZig27FuYqgMm1LBU3poGzv9S86AA7jSRPJe2bLMFtftucgW9ijYsvB79WSQ1N7nqndBQU5vECiuZ5xJzhRd",
  "key41": "4gFmjSNahex1kUfEWpRQT9uERWUjpVaXCrT6hjzxeQqW4fdY9VkPNjV5GMyC8tGHozmtvWW5R7LYMi4o3dr9Yf6V",
  "key42": "52dzaGCRQtPDpZ6vTkiDrooLdZBs6owpogpy2xqr3Roi5Te89qPDN5F4CYdtmFurfHbeeW5sW1hLdBHHCh9EmfH1",
  "key43": "41DAwhZhpXTcHBgwdsdvmU1tR7SUbN4gqVRAwywGv1TfPpyBRNSB5joiCc6xeQd2YhTBmJ7dNibWWZKidA1PRk73",
  "key44": "35Qs46c3L7pW1WMv2w6WfCYTK7B3At4yZmYhyp2o38D8242hZuLuc3vbpG67rCYhi9tjF2rRCEGGkj7yzDq3MGur",
  "key45": "5okactFFVz4deK9Fxrz57HehmnchxjS1hcw5PcjSgMYnJ849znE6pBXiRsJmye57P4N7e8eHxkDHhgKJMZVXqUkZ",
  "key46": "38JekPwswu74HMh1MhpLtmFBocTmaJDsVbSN4XtvL3Hfacxp8JEH6VGmmYss4mcBEBENsMzXprJHurmThcEQoSyk",
  "key47": "37oEpxkxfkEj1gwVV7CHx8AeUFGSQSSx5FyVeXaqAwrb91vTB9cB74Umxd2t3bWbWJqEpD9pRdGDtmMZNTfRXpd5",
  "key48": "4E8h19sNKckTmRBFwHWgfFZn719ZeyiJyGWndzhBeYpVtrCHcL8aqUGFCAo1WkuN33BLqS7kqBHWb7rgK1qyipfT",
  "key49": "3bwpmvBciUqcAK5kDiLTSM5rNMmbm9RqCCq3ui7f3tgX2mn7rcQmTF6JjHRxt4dfid2SnkR2FtNFsSV8mtE9j4rn"
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
