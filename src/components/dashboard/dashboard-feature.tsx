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
    "BbKLs6KjYGTXSJp578UNSkgDREHrydA7EhFh68FZweJPt7mSKA9CNARvBSZWefDWfgLXuPe1p46bEdDrjqNkGp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MWq6mVRDfTLiWkDRET6YM9G4Y9NM4n4Xr7S27u7FfqQzh1LpVVRShWMhx2Mc5kd4ujfBL4DTH7QiS4iyj3Z7Y3z",
  "key1": "4ukKJoRvD563pmsDSPAEq7sAadBBGBXaYAqMrMFwUdnsVHgQuMXsFNdtWQcFwmk8qoC6xzLVtuTUzKpspLPZUNQ1",
  "key2": "4aBV27dSjVvvKnDA6oqLspWBsPFqYUWZs9YvFaKvrTWwUEktVo7GcjpHjCYWidNvRdXHEPJkzmLNM5TeSSdEdTdo",
  "key3": "2yLHn6xp2xwgedjau21U2jpBuMA8Jzzz2Q2dY4B6y4siwKFsQkaSmz6XN2fypTTGx86iQiBR81PFFYvpCKsY7DyV",
  "key4": "4WWk7JFU4dPRt4kqUMHafcFxET4owWHE4zM74RdeDTHo4858KVqw6J9ZrbH5xzYER9YsPAju5FMgZNhQHwseKJ7n",
  "key5": "4mE39CqcxGbEymH1vU5bQ3DvKe8Sun49oFbNfZ7zD3HE8ht1x4wEruqxF26mpq8ph3oxW2yrW17tUF2jKU1H9GXH",
  "key6": "5nAphYP9Zz4HkAoDrcKUv3HEWdqEjgiqg5vs1xYv8c2nfLCpwmW5fqJTTYE6GyWy9vo4Xv3a8SB1fVcmW6ZBGhXk",
  "key7": "ieaNDTenFAU6qeqFp86JLzMp8DJNQUVdce4DzaGTGJUouCr4ik1XMYvTTGGZigWBGg8AHthxCv4jqMj3HQp9rD1",
  "key8": "k467gndFtFBU1xbtJ1G61ZEH6JfRzfrPCoVU8DwovMzF7Hwi7WtZncQU84v98KboEUJVZTJNVRKHFFEJqwC7KWb",
  "key9": "4XL2t7xNE3qXr84NPQHTj5SgGewnSA7Xf3un4GLBd8fsoQSDe3JNQ4jGhajM6FwXoL3YJi5YATibobJxSt9EQ5wm",
  "key10": "4RnfRpXZNETDTvw743iMaK5BdzwK6hCDxsWFep7jRuazPrQkbkVMwEtJHbcbSVFDKT1cbu9ykkNq4Hd7ZHeFGVSL",
  "key11": "3WRW7buThNVCP4KLK6CcBsVYShmyZVhBt4d3teWxDYcF3FXRS1aefzmjuyo3gf9JpcHfkHyxCXjk8fKknvuHSbBV",
  "key12": "3A3V1FKxGaCERapML3EGRciXcGSNDb4GvXC7aHmoHqvYnZqbiDWhFEkmuzazNJLSRrSa196w7oidbwNGUzuDgyuj",
  "key13": "27bFZ263Q6e6UZgcg4XMtGPYAM59CgGHpmZpfFk3B4mu5DKgFheyJXGJbxRQc132KdNo1T7AfFCS5qooYBp4sbqC",
  "key14": "38WQz5xWCosYv5aQcg6WVzLoTfq2RpEVNBbsh5r3NDQVmW8KViLJUvkJaN1DM5xPuYJWHFt3JZ7m2QiN8swKSBgc",
  "key15": "CN4nKFco6gqp9fprMyec6rdHm4jnMJ2e4CvT5diCzw2Fa4zKLfjg2SMDw9rCjTRdY1sgxs3arNjZnfhDnCen7JP",
  "key16": "3oRf1k1ef29SFPsNuqxRpJiY5XFrNS8XCs285FktMtTvGNeFQAuBc7WoYU887hitPwbnp1LSvJfPMNNadQppQC6R",
  "key17": "2tKxkq7uTpH8721wjuvKY1Ng4kt95jk9GEeoq6eCrWPwjkU4x5uTFS49mqTEzqRVo9eQjXrMjbmoHiprYSVukm5m",
  "key18": "4GabiHSvd4nJYzfRi39HRQk61qGoPnbWP762r7f8JBWBSjvzdynaynnNZZ1ZSoeKvoMkZS2FbXF9C5f5LP9VQdbU",
  "key19": "L8QFx4EcYWRMrjPefYHfs4XFN1W6R7JUZjABtCVDgrqZS2WYmmn6rL7F1Sa2TMJJM3SmNgm3Gi2Ts1eEQJAJZ6G",
  "key20": "4QHA87Bdo2zt8EPWPxXXhVMYooVZDNzWg5kckTr8DttGXJBb7VQg4jEGsvMG5vDy6GcwLCews1YtS23YgvXMJ2kd",
  "key21": "5FjrfmVfy4Lx2fF8LdGxQECCjYgQ5rqNmJVbstHtGyPNYnsmFe8QX7yRwzJDDChfmFaf1DjtrVJ93TgU1SRwjSUX",
  "key22": "3bjjf4wd4KfAV1cT2WqTsnaxatuEfG1wGM6LbfKszJ15L8DQQ72Pahh3JJYG5HMGyVJfH9FvPCQeYkC6eVyhn7yP",
  "key23": "3xWQkJg7RaMuZHfKNCvtCCjFVPqdJ2U75RZ3qXTDCH7A3YajRX723SZSfL7UM3zHcCFr9WLXT35nfgYdvCRGzT4J",
  "key24": "5NU5bQERXtRcxrnqhM1c9XS2X77dKvKQeKFhzYewja8ujRWk3TM4FdrRakE9W8h7NnrUxkQQpd5SQTZXv6JJBvPU",
  "key25": "HYp7wurYCYxsxPyi4TdmEbdMqSxdsXYTJoWdUuxRzM7qCaHLQojwRKTdbiGSd8qB9cBAtogDYSJhsWLbKijxEbD",
  "key26": "3Ce2jTsjzv66WFdeid9iCnez67ocjjtvBeDX5ZSzt6peLe9oh7of2toJ8mzmXDwSDPonYpmuBd1VTyBzwRESwUDe",
  "key27": "4WKpVbLQaTaWiGbiYKMQcnsRSSu4Hoj8uoBibBMKDq2U2nLqeWxfH4SbvEoxQYA9mzjMSNYjJpSSezYCbxZ2gMc3",
  "key28": "5QDaqZPc7KjU9xyW6DuizhFQ8W9D2Kjw3fGPXLiSBmUmAzd7MBYs9cRHwP9SGTmpSwDL6GVH4QAj46nqba8EoXk4",
  "key29": "3BLEf2VAMUNHq1TPgYvvpHvnLywCYfNcYqutvWUPgUhBAtkq2qQjGsT5u33durW2h75m4voTLPD9RFdR1QK5E2KV",
  "key30": "4GJAadTVQtE3teqhEr15F6ZDpEZgSuEULW7Rso2jwLXmBmNyGkVQVV2j65oLf53fqU9hQ8qEu3j4n1SnrSpBB4ca",
  "key31": "5BBgdFBdJ2RpraRLJPmkQr9FzhhXJroReEfgVVqWmfJmkDSXdKgQLfdg7nqhaHk8S6SJRZtHmsPkYJJuCQEyNbHQ",
  "key32": "eWK94zSC7FhgpMLUh9LfZBX3EiWFH4p9GZmizEXqm8ZSCM8yoTFRJpC6qoMFi2rCLNLT5b62ef6ienJYPcHrUeR"
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
