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
    "5Y3ymPZLHBu6UALEAEKBEPE9ns4iziLdMCMzWnN8743Tgbv3PGJqUiu5yxvFNP2KLWgE49aJenPRxdm4m9HcPL9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PxWGGRo8mgWZVJ7eDMVU1mAx2bNN2EskJ7znzmySaaWwHDbZjxLonoRVW2xQjGwszLBYU8ciz7VcieZq6SYfzE6",
  "key1": "2dDqzZbxWYfHNuf5BHx7RxBtfo5UcnzHqJDZ8wMFHKb6VzEChPoMyimgWnHYi3syJoJgbLZYPSQk4DHEg2mxq6Ci",
  "key2": "iYxrFUuJXzWKz4y5NqhouWHDEPW1a5qjUbEftZ8KHxTo9H8BfUfWJPRR5Uarx28F8EQsNxmmcRi45FNSP9bGja4",
  "key3": "4KUKBjRvtVkbcCUE6LCY8GEoPQbTnEgL4a5CV4UTStpZDsEVit6ETMWZen5SntEx5sDkkCNpKzwZmf1W4Eh6kD7G",
  "key4": "25QkusJroMTTNXSwjn1HbfMsKM9sF5CbHC5MauvqFTcxkxV4tu5mbnsGR6xhRmQWV3SBZzCpPw7Nt8w77jGUkkm9",
  "key5": "4DFWMiAqvzqvg9ZTEJA8bYgviVe2ptHrNDaU75XvewPGAi8o9ziPoMRoZHS3YABfPteVgowuJpjAfzsWMShDdSzi",
  "key6": "4Wqzg7VEE3bnCnFvArsTvrKQD4vwfHF5KckkJfpF35urFgfPpx91LXmJ6DVMnMKTanY4KATkbJyi2wARUJdU7Jzn",
  "key7": "5RVZJMTcDpAX9riLDndNb648M6uX4owCwYpUo1y3Z7CeGaEzuCBHumZhUscuEA6iKZUpwNw4E57qCsUwhZ59GfBB",
  "key8": "2Wafj9BWhRMgTrPhk4qzZ7zsBk32tbY7W91HBWU7AmteMJs73nV8BtkXLPuv87hMFadHb9wc7WMwssZMw4Jf9i2",
  "key9": "5SoUkFhnbXLPWBy2fJNYcqHvgG984upey3fy5uxVr9s46bHSR5qgtSCMn7nCxcqdnkXCgAmifraKdivtL1DvQ5xm",
  "key10": "3qAJNbzBVX7qsvfoyuQtegv4YPnM4Cw3RP4T93E3Ay3MYNuJvcFBBXJPxtBy8jvHEsM5W36XnCQvQkYw5bAAEYJf",
  "key11": "DWtcFyEDnXdwYx3yrqHQtNAwome1kDi5SeiU3MRrxjgSkTdVrkDeWTJ413hCFVdeKm14Tn4M35tgAAp92EKKk5i",
  "key12": "abhrcNF7eKp8j32Wkjb1akWFifAHgd4YgGBN76c5HdjTbhE3zGCJ6PBWPCFY1UCmugrnXqM25wh1R6zcAUpwUoe",
  "key13": "bPAMDBDoGAdWHk9NyecrqA1gUH9vwWmnej7vLAogYgiLUpSzwdQjEZjFCTdgmae3ToXS9gn6aChqzBPppZSRykP",
  "key14": "2nfjSnTEb1M2F7byBgjUk1eKggyErwxK1bvamGw9hkcBVQAAoyjeGB78yAX16RxW4aEJHJQZe9ZPvQrPBdFuHuSt",
  "key15": "3sPzcPcbfURMReCQbdynyitHJiuKUJmpeshLYyv1MAGY53mfDSd25jEJ24F8PL69BPkyeXqs8hQxq3eNr16vWtz9",
  "key16": "5F9hE2VrcqHcsB6kAqYqQh1UW1GgrogsQXhCWRjAm5WRuGtreSxJxM8RUAASZLceEZKwqMzaCLwGcVHbYJChDQNj",
  "key17": "26p2WbkmDin6xXJEHw6dnLm8D65KWPEwwXrT8qVKCzPFZ7nGbVsLuLfxaVcS7Uv8C6B26eF5EGAK4eQm27JFQQky",
  "key18": "3T3Ptx24RMLJHSoCAonUK5q2udJ6zeHC2xrWGC6WBvRqQyd1B28LK3eabnh3wqbhh4s7FERz3E619TcfDtC47b8e",
  "key19": "3p1KhYwZUZAnmqapEW8FrTTSkkdnAWhKzWMt4vCLVLQebYdqniTDY4La3PGJjjNRD5ZqXVNJmFp9DeBpfPgq8oa",
  "key20": "5woGfsUBLDCgFvaJJtaYLEoJ6vgn2jXGcBGUVi3o3SBq65EUF2LqjzpGEa8ZJJLx4hqWve1jApcWVHMAzfnKYT6W",
  "key21": "4jzfh1M3T3imksoEdXzHGNTWNfBY9vsmL38K1s64BWR1WhNNdG6kfFgrMdoQiCKuUy1YxPNhVYdye1ksfRSQfnkL",
  "key22": "4ZGjzWRzCyBKFEo969PBwMJmpUifmyFZfNUxucbBmqjohsShYyVo1ZSJQDfiEg5W38z4wcGZSWkPXRe8pYufEeqa",
  "key23": "4t7k9Yf8t6Wriner3rLkA3Cvf72Qt5oKyvN3F4DCnnQdSe8KsvWCDUMghy4PQoGnZiLiSoeaCPPHTTww5G71pA7K",
  "key24": "2WcenqswYmCn4mknjKvoS5LsRMzaAcSymtFkCUP1jGebwxHy8dyQz9UmeSwmyEDCJoF2SyfWNTX1Wwj48aerRd75",
  "key25": "rm8VgJrRrM4yNq7oXu6BnAQCCANaDkceRTg4gnufLVULzwe5SrGkgUcF2EheL5Wkhy9AkABu34wLq9RnzdKq9YT",
  "key26": "5hCWx2UnSq7RVzXgBce8NJZMvuhKzK5zwYSq7JzLTiqYZUbeXe18BnyXJMtoYSLATmtvz988Kgi7QTGvtVuXf3Fd",
  "key27": "25xehCsojFrLxQc56D4YqKK51uXazR7uRuwDHcgHPrWKUCDVViPensFrA12MP4a9gLe2qcaTs9128obH7PfEC3V3",
  "key28": "4qnnyYWwE32ZJ7VC7QoBXCg6SH2KWir87BqpK7jrs1J2VRTm7QdnKgksqbvkAy4qMFTYMngLcNeGqpcX6aNhxSQM",
  "key29": "3kBsBuMjoLor5QeW8kepqoSuGwnCZoms8gtMQnFTPpyA5QCjYkWsnVQGhskTwLowiLPdWdpQbEbjV51uxmEQv6jA",
  "key30": "6de29nZEjBBXyrPCDrT2eqtvXQgh1biNJ448t65SPPeKoaiCRK4AozyDCu1pbvximfQKyf321ZHMkja5PNHhLhS",
  "key31": "626CN8XJVwXrUkcxSpkqMbMK4LBTg7219K2VDsr2yyHR3GpRvXgAGjjrsHyRNphiPRZNVUSaV1u9cxdJtsMXhT9L",
  "key32": "4qHm5VRGnkLLLiQXyuun4jrRQpbn8scrkEKjJ4dZ7GJrQjNdmvKrSGAgnr4UDZwYDZyeszNdnnHhDQJFxD7xspTq",
  "key33": "4TXcJpMsMEVZbwiPvUHgztpBa27ubeV8csoETJt3AVYvJeeCZgwsR3aZU7oftzDRKjbdk8j51Kc3pJw36wjLR5Rp",
  "key34": "eVYyQmPt3bjvYSuC6VbmwMAzHxpC3Z3RhpGQsbYAvVuyLZZD6U3brBfrrW1XU4BPoCNiuUpj8QqDsWkYxBqcM1Y",
  "key35": "3gGztLgshe5SQfANfsUPxKFNh5sskBhHc2ZSZJPaeP8CfkB996Vz7XqkJc1mjVRXbRaqTWSSzPqZwnN9oVgSDdtK"
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
