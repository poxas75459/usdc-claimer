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
    "5z5Q2VmK6YTzNHrV1voWkoBC5L1BGZDNr65uuUYw5MqKmRCHF4XeJnTEzsNRVCfmCjuQyZyhLuFK7t3YmVTrvvrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ATJvKKXfCTbwKsZEbjP9JZAZt4FCw1soKv2SGSBMAk1PmWzXCN9aXYJ8UqJiHgiTdiGtWeLwNd9R95kJHsX5EaW",
  "key1": "sanxTqzAebhTNnVGXenf8kSdbJ6xfjyew7py7vRKbWQ19pYEkhs5XiFrx41gPEtGtQ49EBBkTku3MDg1ubpch3A",
  "key2": "2q26gwgZpSkygTWbvtA3QDsk2oBAPPEN67awSLN7Tq6VTJKmgZ3ktEECbMTVZ8B82SRKYcS93QcV2Tr1yYPbYYDK",
  "key3": "58UAwr9nFWDYNDyeFxvVpezfEEJXZgoH9W9ybZmeD93Y5rxBrgPSBaB6JTBMsZMM5jro4cgYHXxzLKTGEse7i2q7",
  "key4": "2Rde2ovGHPAD8BgEYfgVQkxVRCDNz1wdmM4DGhskTg5do6Z72mPCmMwtm8zAtAnaz6f7erVjxAkvLjzNnP4XxeUq",
  "key5": "5QAJRmU7HNn6Ck6EF7NBNsKU4SQXh7G6sw4Q76iofEmbXYrhanoBYaj6oJuvjEUxmJB5EHMt96ADfvJdX3GAydNv",
  "key6": "2FATiBXNs6HGLzHacDHTBGpUCLFujzJQ9CYKLJasrJksr4pXdqf4PbBUAEPqpmWXLpD8AWnfW5xo4obWVqfQHqHR",
  "key7": "3M6ygzomyeDYPg9eGQYQj3avq16rf2QNB9eo4mfUdujPvFJJ2sChASLfkpweNnDYdtvT8yUZTMX89m8kuTAhAY62",
  "key8": "3NiyFv5YUtC57TZdQUD3XsZ7DJxVYHKvjq5b3AwGfzTkXxMuyNQLAqctTY61trtEyKHrasFtZSqftjSUki8PrBq5",
  "key9": "2uDSGLQ3pPmMuSDqyV67EJYAenxxHsVYLR9dybGWTLngjAvJGuSrbH2dDLCr5f96SVnBgD5FubzACSy9LU5iFPSQ",
  "key10": "4fmbShV2g2Fd3XxXqXUWFaWDb4GAMdJyNDkHe1eVceZQQLS9Cz3QAj9D4xgLGU9kCRvVoqdjRZpxpTTZWytUukSx",
  "key11": "Yz2b9VUjyTjSwnewQNjYUuZk9DBKBrmFySHzjnx3Re9AxaPoQRhFR3U6ngNW8LG9oLipsAWZUfdDnZRhxbuqoKG",
  "key12": "5ZSECqKFFd54ArsPy2HtNsztshCWgJujynQtd2vLaCkEtpkb6y2vqVUmUWmQinnRyYetDA1WkZuKZqCdi6yanYTn",
  "key13": "2LzDHLWo9R4CjyS6D3yaZ6k7Z9g6yRU5jNoCtmDo9Q6zRhdib1qcLxqcVEE8b9jdHmx94QDk1PcW54zDrAhznXHt",
  "key14": "52PceuDRT482p5qroDubJJp16VJB7ECtj5WwiZzpMeo2GQ9fyRG3N8sMxb1SPmWxYwBmtqvHnot8QJSBvyr8UKNP",
  "key15": "5BiCzUhHfi9fGfimghpZASWfaT8eozMBXTt7sVn1BKCpRUsYgc79LF1LtuvQ7CW7QVkbgDktJ3wkUgJAkfZaJAyf",
  "key16": "43ZG23u9UxnvMaermMjXV14sJmepkdUTBjLdsA5i2rsmYnxiZCPDzqT5xFdZEzoLzNqaaG87nic9kWi3YqnVsetg",
  "key17": "afNevr9H9cgwitGEB7B1cevGZy1VQCPcukiCKnC4UEYwt9d5bGQV3fNVp9PJSKBnHVQXhhV4NneFJeaTBoacZDd",
  "key18": "XsQ9RrpNGtjEqNT4CpCuiMtvmkAv4LjrJegsLjiuLdiwFmwVJf9kgU4TBBzGBgoYWHRcfp9YJPvjPmn8pA3dNWi",
  "key19": "63TACHcvarYv6o1AcQEni1vEmj6AUgLS81KEYitAHvyf1ujAoCC4LYFsuA22Z9sUafrmND9ZbAsAVkLSY2K51xs1",
  "key20": "5C4U6KqpV16cWHrSezkXcWQgRVZW4qmqQMUxhvmCvubKzjLQTg8LLp42z2udCv8JinZj8z5VWcuZjFD5kDCNhwSw",
  "key21": "zr7Abvk3M3NhmvaiC9CK1QpwqL2E7p7qAAStAB3YTTkPzToSsy2riknsZJX5uNqbjFdPRvoyKG4pM3UHJtrkgVv",
  "key22": "3AuMcKdZpBPdiyiuoUm9iVc7r2utmASen281P6nKQ7Q7YB32XMFyjc9rT3bBkPWfwsZLoue13g3rT1j7ackf5AUu",
  "key23": "MhAEGVUSSzeVYmMD761XDyiS5rAj2e1c5R81QmbDtaaciFCqrAv2w68JuHjWdSVSFZWVUxUHK3msfugKZYBjCgW",
  "key24": "5fnZSKFwVSPHy6FGXaiLN5J7pPHuVFf3RBuyKV8Y4We8eAisWV9oYHavEbP5fvQKyCdtJKCJHjwPQxkkHGd3WSgt",
  "key25": "HneuvGGoF43GZEGBfsVDnG2GW5b9RgJe9bKZb7MKHu4puCKimjccoTygr8PBs4z2iWDjb3e7dAXqcoFyTPDcT1M",
  "key26": "TRsvoXBS4u11i7A32PsndWnGTwuSCwXc93YCAzHr3Tm1Fuz7uwRe9ET23PapNWexVpJfaEZTrWCZipEEVJMYned",
  "key27": "5irVhnPep7GD7yHnxBqhNiXW1oMuoKPkrA9nfD2EstndDmHxspgdaUmWvH7PECj7iZhziEa47eSq86GptVAJ7SNu",
  "key28": "56VkKC5nNFduzwoCG1LhFPJ98Dp7GZDLYKRzSXjEKjZuTXVx1V8TkZ1t5T9vkn29MVuM4vJyb77EfikSfZAn9i7F",
  "key29": "5sogfussCTKzLTUG3mLR1Vb4oJR4fa7VqhMmHSrp8BHh6UcdTgBNv9SJUewBLubhbn2aSRrRLb9H17JxZEKHkF8H",
  "key30": "2F6sMpX61HvWQbPMMf9z3Mp7Zt48x8cqt3xw5FeQ75ah4RevVTERd7wH3jbUJUfugjEamQwWB5WD81osWN8P3DRa",
  "key31": "5dzHNJ1RxajBSf9apJzszN366qk6S3pDxVuP9J8HoDMBbxteUgTmD8G5ff77mCmu1989b6WA6H42LbRNQ1KHcpPW",
  "key32": "5e4RTimAgfuehJki3m1S4Wm5j6fj9hcwfwE8vYFjsbaYaQ85ZkRDPoDuWP1osAKLhqJk7YWi49UnFpZ9GGg7ZP5z",
  "key33": "4mCf5nQZZdTEB3KSN2wXVbAtLU2HmLQdPLA2ftqVgUEboTjW4Ludx3ufu6n8f9YctTtwiZVoHa3Bo5ApfuoRwtDG",
  "key34": "LExih8pkUCTBwMmecYXa2SYfKUWQ9QQeo9y9S9PEKKBg42qAzw7KuS4bzwPTTXRCvGMYV61spCpj78Ef7ZcirpX",
  "key35": "5kKnznyGLhe2J8HgH3PAmpvdBkHPB7ituCsA2zmLYvyfyS6wKnYdEipXeXA1ZsEQ4mpS52Jd8N5p56ZVMbGoW7Wb",
  "key36": "4TEf1Gp287JM3kbWTZqAfpaeE416DDh2S2x6hxfe7sJt28AspTXG2wLFtSmAsrY8T8RaPZUVXghxoGrPiJdB2x6f",
  "key37": "3f6zdGC77vAKdmGR2RSUHLFpvjKjnVSMCSRqF8kwzdg43k3kZV5BCz8kW57ncc16vCAhT7QJ9juBPaFmabrZE7XQ",
  "key38": "2PLoMJMjzWdqQkpDngaTpAKi7AiCiCJT7EwNPxdkuMJT9HRAdFF7W7t186YxWhBizMmwcXd7FbXRhXhFmArSyFnF",
  "key39": "2hb8bsuY3eZoY3GNMfjGBcGeknJM591jx2BFGXbsZeUk7v7BZMryJyQa9hU83aBhLBrjP2WtTKEKpk8HNVvbzAkw",
  "key40": "xiAea3YDY8Wn2BrKLoaZ1rD69z7RQqLcmqsrmT8ihFdxopfa9GBDkP4zccJHAhbzz9ZFLRxXutsPJKCrADBCy42",
  "key41": "4xLKT8iN3QAdocpvNHmENyVpB8bkCVD9SFoK2YbkjzsW1B7joiZGdxDHuLLV76FqG2nZEtboEFD1hMEwNxegxnSb",
  "key42": "5JMfoAGY87ShWoQx6NZPGpQbJP2uyVFH4UaU6NBG7fHznbhfG4Z1mgwoWVQm73EZyA6usgRL1n6xmXj6kSrKUnY3",
  "key43": "3x4LbvNFb6bqcCpVCLF48S9UdKEbB4scehBYHm6PdfNcTRfm9FVtCiLHKHgsFAECWGqHtTpsEDEcncByKtUENYyL",
  "key44": "51zNR5JN6VXoFUjTtcZnzFAJ1QQWm8km7N5XV5umf12RXnRHqmD5UKktZbtkhFK8kvuo3a8UFZPxX6tEYaxLqwpp",
  "key45": "2duoTJ4tapf7dtQFG7ZuUy95LTygqEWrWZUEELhSy3fWzyWFZ5m3r66PDADdZQJArCp8yH918hBpgg4banJvGJq2"
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
