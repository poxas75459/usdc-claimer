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
    "hfdkw2rwvaCNv312PD45yiD2mXaiT2uNPeJYecQEKo19RKAiVxzhfBorrk45Uoq4t4pTVFpZm9RQNen5GsA5wXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EUPQW8kpppTxQe9KTu8utWXwYFpdE5NUV8qryYadndiPHCTDGq1PYe4YrxdxoYqV6PdrMkDV4hq5GBtmvHqA465",
  "key1": "5HmBtNFjByhchrvTJcyvvSGKZkwtPWaKNpwJj41smEbRbKfn9uMsQ8HnaVXcBKhr4KS9dGF5QX8LNydMketogREd",
  "key2": "31yu3siNJYWwnYvHebaBbq3c48inQhwLyik1tYuWKqB7HtabWxSAuZjaWm3dfDQXBJWQsz7naANv5eCSSrsXNQik",
  "key3": "4fGRJYq2JShdgGvK1EWhSMBuSjJo8GYgNTDaxK5F1wquhJ3MMaircf3TMbwHtaB1Q4wTqxPaVgXjWCFrhsUTkT2q",
  "key4": "4DCp1wY7bYC3yXRffwrTwXixb3ioMywifTMskgFkSUE83xgmSnMk1wCGiph1pvKDX938nBv1TNnKNZqdkDYgRzKr",
  "key5": "5hxcouncPf2XuYJwXe4TU8dqoDuQvcdqMu9YFJeNx1FiDNUUrmJHR5bYzr2nZMMiScuWuTLqrMgHQD6Ltsnr7cgQ",
  "key6": "Tohq1ySTMS3wdQBFxyrUYUUMH53GajbPwJxfVMkqJn36QTafWRiQj3B72PAbPLRLBYLnGxVLxkJ9NEYZzS54Un1",
  "key7": "5AsygAJG8iJxwuyi6hnX7umieSW9sqRZYee8X9YtBsToiXRD9Y4Q13H6oq7PA6D4Y3o5avpbZEt1Zc1L3GP6SBkk",
  "key8": "4SZWQobhSPzEyQ5kVqLmjQjNS6EH4UtbSss47m5eXH3JxAGTdbCNUeEtEEhhTvMWaJiFY5FXoiaZwcWgqWqCPHoR",
  "key9": "Chif2hG7UMf1AgkZD9y7KAuNyKRqTCEt7wz1zAvtritG1ojL5oScVmT22BRoatwxEk8K2vb22LLH6ZvA9JV7KBu",
  "key10": "4KLhr7SzedYrTjpb2pHhtg3p9zm9L4niPtxUZ7JkbJj6RBk21t8QPCsXzKu1KxUEmGsexWx4wqVK85jrRTmFMzRi",
  "key11": "4TjjpAVCMAD9fhAcQoovTc87tMmcHmwY7ufVnzExiQ57W9b3AmpwsicKQ51WBXf6DhrCxM1B7RRkasUQE9RPiRxY",
  "key12": "zSbGtaQidycEi1h6PxeqCpQsY2HaUGF75NnzvpyNAygZqPTQ9LjFknRoaiqQsWHrb44V6FHgrVUryZnCJ4VbYFD",
  "key13": "DP1ShpS6o99VGs6GMATqdX2Y8yYa6u2MpsijTqs2FA1ZykbacodFTdh6nu9wKfonhBvbRnRtnop6MrngyrUd1z5",
  "key14": "9V6ijobVyjE7jvs6fuHNL1ojJQw1Usj6ArHbQSyKeQmEnxrMZpbQZzFNrfhjXVUSankJWSK3s31mpoDqguz2Yda",
  "key15": "tQyocbLqGhoC3T2omG7DGWNbgwrLNM7kkSJFzirLNGUJLzPZXWW679vQWER4xMHMM2PfCLSntW4LZJ33XAMRgts",
  "key16": "2U66GcnM52K5pbTPBQ5vgbNEUZRwWEZ6sk7peDH2DhafnQuWjcBw9CRcg9NRqpVzN5A5tQgJr9A8JfSijAr3P58z",
  "key17": "2aJ7a18ietT6PqRDvnwiSqXLFW5P95sCKf7r9YpFoxz59rDACS5FtiCr1V1gPeVWVGrdGdzESrzLbnD3BBF7V4wd",
  "key18": "4trooWYo7HhPgZ6AHj6CZt8zjYwCf2Tqs8nWuyUzhpsvV77fr2CYQDR5PfQuoig8oFnLBq67yYgZAR9Q77qND4dY",
  "key19": "2hQUNZxVLqAhNMUMVTN35pNGFUrRofRLQtPo4kfgW8jPgFKy5tdc8CeBKs8NBTPoFaGysYK8WfwtGytWFiUb9X4Z",
  "key20": "3Ahvi5aYVzaJY7Du3kSGitCgwE9WqRuLcCYM9EVFSYVfaUkaGEV39FjMRCxaSGLh3xUy7sodG7SCQ46QHppgE99J",
  "key21": "44fwpQp7HtHqxtkmvfKbjHQxN9i9sqZyKK9EAZv6TE5KDYvsveuTk1DpMfVDR4msJzxgogrLFVmDS2WWjAXLnt1Z",
  "key22": "4p4bwuMnkvBQrgo86C7qLbn6uneTBhp5UZ4X5pGeAwCGiFjpevThKxhEjQb88q4pJLDFgAuhHyE3hXbaBAreubTw",
  "key23": "3k9CBdzLHxGqLzqn95svBQD7tzEVwANowYLKLiooqr1CMm219pkwnYKrCJbpKReLUsdFa92dvJXPXeHtkFQPmr8j",
  "key24": "5srzC5sHzfhDVTCXrRaZ5J3CdDnSwQ9yVZHP3mitkjCBT3FAEjmWpNjRpKZiN2vGK7SBnMCKHSyNosgb49X4eBso",
  "key25": "32MKyGN7Y6ffgARZGit62j3StJSo3zqVYuYxn3Z7wrnxq3ZegKzMeY2R1kwcgiABmG7MNn1JfgguzZMbUc17wHiQ",
  "key26": "GfAfWZS2NenvJGwkXdqYg37H8adffc1rStcU2xFSncsxJfKgnXcEqADopEJksqsewLJWzWroEwwwYTQGdKzpJaU",
  "key27": "F3eocqSAzKErX6PEub4oj1QVkgsAWk8XTtmzrpw5hUG4wR42MpeusfaXWjxXfxiHecmVYBZGxpFtJtxB9fhhY9n",
  "key28": "2vR4U4cLsmeLn9kS3GRPb7RvpSjyPHGwQPZWTtQaUDyQzScDeCwr5ktvB9AdLHmKDQE1kuUgV6X8cft4cD6jFZUN",
  "key29": "2uXVUxaJoRKDP7ucTPM3jVUm587cHKKT1Y2adqTRmSPtfjQn7bqWkoTh5m36eM1VqvkxKt53mt4aFJidk6o8ceYz",
  "key30": "3YhPCcsXEAnRaZH8uDkDwiSwpMYUesZPuSvFSuaRafCcPj1iqTPKMwn6mcST6bLYGTQQTbDBMKUzz6NAH5BTKzyu",
  "key31": "53UYKZRCFfTNcaPZLTrP3kdgfNKwLv9jYFFettQMVUiuRfegGzVQYxqjPSpd6z8M9zMa6yey4TP8yTV5eSBgyZfY",
  "key32": "xGZpSwtHsh5EL4q8wbTUqt33kXMB6Xu5pYv8Z6d8SKsavqRqxgz6gzveG35iPDhxFjawYbPJWG43kWmK59gKorq",
  "key33": "2KSK5hmDkgG7K9exCAwazrFiAeP26YKNGLwGXhbdHekiTVQdzWn66Ph5fLaEhvim9rfooUbVq3nUrirYTpYA39Vn",
  "key34": "44Jaj7qV5QNVw2BAiDp2m4hBU9KqLihMcBjZ8wne1wz39LQEFKdXWR51kGsTNDZESeRmFtGD9iAXxJr5Po5boJdt",
  "key35": "4CmAk7Ucn62oV5mBN9ye34DbrboGr7umGHZ5giCeF7jhnuLWsUparSGiLW4frJq9NTmUJ4uM46Fvp1RmX1mqr1NW"
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
