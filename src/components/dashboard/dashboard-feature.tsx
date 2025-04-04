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
    "4tiogwQXUXgfExERSgwrh4TkN3VKFSAEro3VpYNWfHgWaXtQFV6kDQqZcQjh9PLNCy6DGStMuEdAwGsxd83zxDML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C3RTN7fehRK56aRr4emXe1aANXcr8dPB7hESbVZqPAg18b5TgzM71CmZ8MjjMLsE2EHHiYuSfgY8MPtGW2F3Hmn",
  "key1": "42iKSmgigVavvKjdveAQJTE2F4UEVSrKbxNyU7Nrjay4K7kT5mdqhgXjjdgBFR91EJUHLNivEi8yL3RBSXThYwQh",
  "key2": "3MGeAAWPsN7wCJ2CGS31NZKFJLtWCkYYvN1k4jfX1YJgznRVRfU3ZkALaxEScMUk39pwHHKxxuiZwPQ8EyPW4zU3",
  "key3": "dYZmFpqPCLMSWcHskBa4qeHen5pM8ptqD6377bcucXxUotgZuBz6G2pLBLsXWPPFk4X8DzFonWbaaPKCFPx2agV",
  "key4": "5qCAw2bCq5yijxTr1HJLor1cdmgMyoToFM3s6rqLUM8NJivP6YmedqkReRu4jmGYHT6igh5iZBeKepfJJAiPzsit",
  "key5": "3sNdmEZJ1wRaK9yoPmiEsqBFEeq1UqAnjGKyEpN6gqfAvKSGKs2Fe1wcbWGqGEvSP3gDMSaK2eyUrV6EWp8LNb4X",
  "key6": "5zi2insGSNRsmf6Q4CD2yvZhtTUrC3tFwCJKSqdWCgqfgdsTARFMqt4dwMWdokwvJ1Z7jnDLxVkVkaor9yRW7FR6",
  "key7": "4Nwt91dCafrAkndo4dqGftKWi258GEPy85aVGogXMe3VJdixsPMa2JAZ9r8EYBzfUWALr3rkaje5BbeLzizH6wKt",
  "key8": "5Aq5u3JQeLwKyDhjRzgrAkdmmtWrT3Yhf3Qhb5xqKDPkhtUh9v4PUjQb9tVLNuE9c3XFn5JpgpbdZaTxGQgYvzaw",
  "key9": "87LyVuK27o9FauXyW1i8MZaF61ZfYMAnEu1852L1qBZm6d2bNgWR1xg95u7QfJpVdVinUJZoZNCbPj9b4451vH7",
  "key10": "5y55imAMngdgPjEzsi56kcA1DfD3k8UPLpshnbsC4meXczGyEW6J5zqiL9pe4fcJuLnMydWep1cakfkqiugkLAQz",
  "key11": "NYPHgbmWYubZZStaJtmKK9jyWa7rtf9Hch1z2p67mwChdprs2Ww33cyLuEVLHJC9sMSSbmHj2G61YFofwnz8m7V",
  "key12": "3467doZdwcMULabg7X1eZr2EWCM3tuUcsw8rT6it9fVsmXUf5HeqBCETyWhiPyxqwxWoP2mVNvFgoikM2a1X1Xnh",
  "key13": "5rAY84h9ycnYN3ySPswRwHUsJbip1BcMnWZc5yuq8TkbEaqPpFoEayvtT5XFjNVhcaKbqAzbBeX2LogJzPCP6WLV",
  "key14": "2T5eDV7yeqtRHJfDNyLJgwcs2KsBVEbdrVzbYZu9uT8ZzeSuKqkpuWGhJ1xWJXWM6LFVwyPRw5BALEicszVcryU9",
  "key15": "3EuUSvD7pn6yKkBPfGPV4daqFaQCxMAZjP2Lk6Lag5BT1hgYCCwwBR1CdknLjP5hjqUrn55B69jswkEYACNHYEf5",
  "key16": "5v7uFhjGc6SMJWVHDctHV819LtHzDcSZjHFFhUMKqAvQffijmzaG8vjaYZzQyYeS7xg5XmhAc8h4uYWE27wnnVqp",
  "key17": "4rweSLLAf8kXuMFzqj6GhgdQNDcETPwKVtp5PxjqoPMtp3gpoj1LCsoddcQAhqahkR88mVUKX45bw48qq7FkfLQY",
  "key18": "2TDqYxYXMewfjccBu1eNBTDm2pjYdY6FH6MD35mcQU75NrFkirSxj6GBnkXc2x5nWLHht2gDyrQfuWvtRs7SMTfi",
  "key19": "2QYavgY56BPfhdz8BJZkWtqZV4ZaVb7uBwMTjJaV3nChvvd8wiXfnaW385PH3G9nSVGJk2EL65a7wgesuNwVoaPT",
  "key20": "4YERnf2qzCZERTc9RffBbiAcjSqBVdwNxPWfb4xGME8Kat6Adnk3ax2RmcNbmLhxfduqKGt6pQR1JW9q9EEMJYyy",
  "key21": "5hrA6zZbeoLqQovoKh7XFKm4KmYPbFTXqZUUTGYTtW2kRXoJnW2p4TpvJj2YEm8JVnM1Duso9t6VnteoXcH1qDWP",
  "key22": "32QdbBwtkhu2ZGVHo9MWf6RZXq8W4BHUKFZfAbnbNACZmMmF1NmE4gtdcK1WXffPwnt1VLjXEWr72qxZLJqhBUSm",
  "key23": "459V1RZAynPh1BefF2AeL7KzoX9UYgK2wTzicDBMmfPCCnxNFnCzp5YTQkcp3ZCmqqNxnKcGP63iAiEZBLdBsBet",
  "key24": "42iV6Agrri6JDoKnvZ4jc13xUd4h5gjTDQn37hPfyyATaikkcLoMKkmf65ZNXamwGZu9sKdBVDpVZLjzVfrywTwm",
  "key25": "3XjyjKmVLAzzpkYzmQvsfYYGy8eYWnrGUWLuawQd6kEzQneBmscB657t7xLtq5H9wQjWimpWCGKY1UbHFiMPxMDH",
  "key26": "27FxwNChK35yNTejhXPuUFUsAkNRUUKR5Z2cXWaem8dT7adEBbppWVUF5V7eMVsyqfHPkk6TneqC5i7PBwimUuAR",
  "key27": "5MYGjMy2PEQuqNEmvyUQYKpecBnwF3o42e8fHAZEdtvrZaySciE1EjVd3N6pqDEvmujELadjQv5EY82wbct77Cau",
  "key28": "RUd8eQRMsNYem6ZA27KYR4sa5JTefiRPRwsXW6jCyyn3eGdRqiYqxhmKtaBx4F61U7cv3EZhPFKvKAgUFWjPjpa",
  "key29": "4EcV3FrekQZrn3dbSPXoZFARsmzFn8534eUAsSpFFzskLQGhfVXCZd1Vk4qQCjDFFj9Sx88tTM19ibe8M9fKDK7U",
  "key30": "49qMod396jJyS9TFhhWVCFxstzExEH6hV5hB2fLxDmsz2R8JJ2gbTTvXMXdqYvgKvrBygBoK3jhJ2KdUUrYBwj3n",
  "key31": "5NSFT8MydPvjotAyzpJ39d5fuCGqzmHfSGeeW77omMNJCAKvnKj1Brp8j7ZTPgiNRhQCrZesHadvkNjJn5rcHbEE",
  "key32": "3pXYn2PBVJRoGedVBt69JYbcq45UhT7fJAGGXCriVvWWnxw56i1gYmbvufUGupBqT7uaYfMjVz6psUJdtqRDFXKT",
  "key33": "3K2Nf7tjDzL44T56rLcbdo1HNcdReUA8736dKZJcrzghRN6tZMFnSvcamnuA34Ybae5fSnFwn4oD8eSt4sViy2G8",
  "key34": "h2fsNfsbqtJXbWMGSnjutViv3dgpQSkyJBQrpeDRhYjeaX4yhQnQYVpBtHi45qVywpTq1UibsGyeAaPHk8B5bwe",
  "key35": "eh7hYNPeoxSYFXmY9Fcbb1sztMKDYj1tKG1qjTpLx7RrGUbW3MWY7fGkUTdza83A3n5D5EyPbFVsQETdgM71xgU",
  "key36": "gLBcbxNmquSsYUXHGeVQ6LwLKSfrgkTkHE4wtRqRBVMt4JftLnqSW2ZUfirnvCRzE5rUYLfiszahbzki4C18ei9",
  "key37": "2Gg5qBGnHT915MhCi3HD2roMCREWuPG3WFJ5HGe2JoaBn2bjo2YNpWEdstr8o9ezJDv5LDiR9siBAuHYVWi6avaj",
  "key38": "4LXsYVeGraW8TCQp3TwKDgw7sFf7EVTXg6B4VuyWUsJ2bd9KPNYDakMkTGis7idfwLBzRg7cfzFrEgGcYfwZ4bWZ",
  "key39": "4v8qwPo8m7gLKeXGSjZjNPsnBkSsMDQzimJoDVzuFqbjGGnkVzxx5naewf7q9Ev55V5tRuTcjuPn4eX4XLGEKS8d",
  "key40": "5vP9pmMvHQom1WXmxSsYCJoN7hEuuuRwdRYMT9sjDrxKtH3eKyJuY8W9p18NwWpYLctZsXBaavGfvTjpTbUPPVh8",
  "key41": "61Md7vuekKmg6s6WBEQ9Eg2xjKKuAR4ebDvddh2jWjbB6EHiTvmMF23BMg5zzDV2kZUXyQpSrtGeXmUmccxV5jdP",
  "key42": "2FQ5RFScnF9nNSTnY6tyXGxgAsDVvYLeCn4kWD1kGu1oYzSPZ3fnEXniPKgxMcpYecqwuL3kUnpYNYLWXPpoogZH"
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
