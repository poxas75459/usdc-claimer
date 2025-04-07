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
    "3BWbF4BFApjM9fZSdgraiad7ZJzYU6vyHSZW7rDpekCXrkJV7Xzorx76gord75fVrHZB521je7TVuzPY95pxQ8g6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MxxQXwDqLR1iC3XJWckerKxnoduqMHUXc3EmuKfyVVVELLACzunhfDzJaNDYdDxDSr89namfb1WJcZdx8kUnxy4",
  "key1": "xYvF4bbURZ1F2t5p18FaowvYVE8ziiC3Hs8GR9DsVTyzk8ta3RFUGPmZcN8AEK1E3DZVGrVLuTXWZewwLN9ekEP",
  "key2": "5yL1vwxLyzfWxzqsAVDZdsmNPW1cZaXc3ZhxfLUoRYbCBapUuHhRuG1oH4ukFaHQgWfKgbaJf3sQo5Y4uiu8u13B",
  "key3": "5vJhJrAYemfGsshSEkPcEULn4wQgVhn76UKdNDcssLdANE8w4AP9guXRXNivdeQRBtom7DNdFY9HAp2YCLwscZTt",
  "key4": "3nqUM3irwbX32CsCqSEoJ8TyG8dbug9bn87zTZG7ZLDR3ghCm5YydLey1ywDK1FzVTZyNvrGDSMoFcDzuBNXJWtG",
  "key5": "3CkTA2Q4AtNjCdM9YSf3EnYWtakr8y7YCxTGsi76a9QKdufMV8XRgoGidcLM5gq3jQssPKLAfgwN96qEtu7t3t4P",
  "key6": "3GZdApx1ApJ56E9ZGsv2WCaeGjTS7aTAzofpRNuZVaPCgh57EyAzis7gvMNnrf9CFLqVERhxAi5to2Y8Hy5fgXc2",
  "key7": "5uDpMsQHVGKKCHf4RjmwYDDHxu5hkAb61vSNngc1BPmh9bWm8W8X52Kdxunh2trdXCJjQSfM7iQ6jaBQDAjCNC7P",
  "key8": "5Djzb1p4wBV1HjZABzxcH6wvNqtgsoQrjCZe6YvYYua2dCvuPNUMGNS33bTQmT36f4k83wQVdY3npUSMLqDyrVec",
  "key9": "3R61zqUXh3BharuoayQgPCcPe4hKygxUZxWbtGQ1B45xoP1s2YrFFVyiLfBgg5DyrZhGyoia1CtaPdGriXN9XH5M",
  "key10": "2QqS9hedk6RbwKWcq8rLwz4pMkZdQBKeAxWVu1zBeaVraHDBGEeM7XLt5NpqWoLMA6QKy4L7VnYNBzf9sZM6yvNg",
  "key11": "3DEQ7nuPvGTD42RV3ucy7LRFy6U6GQR8sUJXyntPJmjSczrEVCPhAiFjPp7cWDsKWHRHD1j8pVtmHTcPi7uqfsmQ",
  "key12": "5WhdL84tJm4h8dgsEmMsqgmc4edDtq6eGCPLoCqjKdYPMcgfL2c72nbkAgPWzEH5zUimZxNfqit9qp8frz2CJ7Fy",
  "key13": "29kHCeiWScv2pTd7mvmNczE18zuFQKckJ84kZH3uF61VQNggAAC3kMm48D3BBjTuB94BGeq92hdhQWsidLHdSQrp",
  "key14": "3UzG8dmkMDhTDoUcuNP6brHjxBsZ6DT2hgpfcTKUzZte8hD9HYgCiaFhhSy4k19TPVrjob5ru7sJezaEnHFLtXV6",
  "key15": "2LZDcFbyjAATMrGjnoFhFWUWTaCnzdCX4aJVzDyifqEBzEKygD6nEJ4Y2c6Z7o4vbqowoVKP1TUFXfsrxEBTcW2k",
  "key16": "FYEUeKgxcjP6jXEFYw9wFHZQQYdExig6p5ExwxkzaNT3K7Z9RgNXiTXAVpzdRGz9GdJd2KZgCRiKevaDgJXwZtN",
  "key17": "5yCmfZAr4GpQpzaMgWgLMxAXvBppefAaDHTDhN5JFY43H37k24i1XLSfVCZfcpsP7CqeWZqRx4EbeuRRcWdWKC7t",
  "key18": "5eH4ry6JwgaNug36b3ura5rg8g9nCicNKFp8rQgBFWHytPkgM9qb5X4yCHQQHFQqLr2GGDwXQVf4W11p5wTWZe6S",
  "key19": "5s2yHYt8HLpVDLt92CBdbQrPDRLiVyFy11q3DeY7WfVGnkAAU2UcYgjSzQSEKZt1Sm5R777RAnZdLTMRUjJADE2T",
  "key20": "bybpd53Er5JMXadywj8wXMuwcB6dwzZhMcAFLNaHRj9Gi4V755pCjCcRkcHxmvJD9bTfetoQkw4P3FDgfhsZUFB",
  "key21": "3ABe6bKU2RUHQcGEoJYK2wnyJ1vNmqcV7nwRi3PNmAzJzxb25rxKFFMh7KphtUMFs5cRZf4SpLX7nNDfk5adFppw",
  "key22": "5EhQcAgNJ7JLC7EGYAEv4WZz58wwADbKzSM6jTJGRGPhQ2m1in4pxpPgRNgnm9SWuEocDLcAwHmvo2jZ2mLj1LfH",
  "key23": "5BZZawuNp3EJDEx82pDYXUJDJrc7H9bdxJ6fPCVtVJT1VqedS4Uk4GyThh5f8nLzDzZbpGTWCVtMqr8LWjNpvhC9",
  "key24": "3HcCdLYQojnNsxLRkyisoLPK2CzrExHhUgwg2KiFYxLR34L8skZeLzFeHGWbvQ52nbDckxp3M18DmQTS6izu1vNz",
  "key25": "2sCAd5AF4q4BGxibtnnvRHdjUoKpTf1zXucpxr8H38xNupmFAzqDUqVDaQSJgqMr8wJtsMZLxFsppnrAyZtUVenr",
  "key26": "3XktQDpZXpuQYjvL9va1jj2aisARHkPUCfCuqENaEZwpGetTUjxSL5DjboaeKdPUcgA7CL91YMEFV4Y5nSwPe5zU",
  "key27": "4EN4S5xcpLZ5fyZmx4UiFpggjHR1ekfbK2FESm3PWQ4nHc31yj985CuqERQZPcMocR5R9vtcNgvt3v3LsAubShwS",
  "key28": "4zwJXnZTdB9ywR1uw1TGkeHx8THRvFaQjGvdPq8arTFx3uNagbN4uzrZ5rBC3tTXeAjNF8qsyutyobfFxk9duMPi",
  "key29": "2pLQ1yL4dQABKu3ETSKNMhhkp39svhor2dHXnbjJYcRAzpdCxe3QqHgKfnSXspFRYSmxyA7wAdGnJyKqzJH2N4yo",
  "key30": "65dQfXbAAsf7gQcWoyVwwpXKYRgoS2R7coR3ucV96jiTnWvLuLBeHzkuZKwcjWQBJegjxZ3NaM3L2umtJsWJskg3",
  "key31": "24W3zcz4WTVWkc8Taj7coGDMhWzT543GjrDdoFWjRCPTca3MptWWha3iPRWWpTYvprzjk6N1UfaAGTUMgpk6PsP6",
  "key32": "5HHzS9fefXS1z3EqPTqsmP11Yrh8EwEemFCGwkezQvd26VdX5Qmv5a33Vti242azX3v4TVX78zQSgGhw44dLENA6",
  "key33": "pTasfRmqeAvJ8jZzZ9hYBw5qjTv5kkcfLEBWozwHYAfqKfVZYrLN5znvZCto4J1C4r3URSsKuo8JVdwgCDFogpy",
  "key34": "3VZ7hNbCnHqXXKJHvzroP6bqWMquesQrh28pJo4NaiEzQUVpisQou8MxTys1cDc99H6AtFvCvr5rwPCX5MV6EAhC",
  "key35": "5wtykNb4NgR3qnrcSgBqsSgeWYDtmManEq5pQD4DJGvfxBd7GTUSS92ttKaBE8LgbeqZgdWHnPHEaicgSQHc9eod",
  "key36": "5T5HvLGPXad95nEDuWxLA9VJ1p575YDDnuzuYHCvridKoA5MEE2jNKoqjbZmdzmbph6bfPSfKf5JbiK5BAnvot1V",
  "key37": "35u6QNgQpD62yoionm2kkVned9YbPf3TUP9XEFAnPyTnysHaBB2frE16LsRPknsFEUyRRdPBKWrHEKjzxdSJXByL",
  "key38": "2iR8eWN3CrDFcGU8ofzWs3gwTNSDkSywvqQaYqJEUDZSwGiNFLZWK8ifyVzjbeLe6hHEJJ8h6N5dE4WMyoFhgKhr",
  "key39": "32QYPRpd7iNonmNoyvHTLhRLxApJvHmEyjfiMGSHjtFyQpKVa7BAhZMefaK8FvHsmE7xc5xzX7vNg58dvN1ferS8",
  "key40": "Yp3hPNC6PatnnF6PdN2GCjXEPSpL9pTKDudtsBx8ByYLjHenBtw1DZtz9Efdy3nribZU6zmD3Kq2LjxJKyr8zJM",
  "key41": "4eQgNGBSG6zySU5Gwi7e11hkw2v1yxiun6PCAZD83R7ybb8kNiL6pRBDj9Aok8r4GW3JAWo994LY9MBxgLGKyYDM",
  "key42": "2DSdhHw8wAMnYG1QLRSb96KMw2RsZpUeXcsor8mpXXygt75ed31JCfTqfA7BTreceWimJiJnqUXM6CKj1rFRTMVj",
  "key43": "4c3YVezdVzLcHZkb1nvLWcCtz8mW4SfcbkrPV8L2YEUE61oSHEbawGfEDaxnKS3dpKGGgFMB9V5Vgi7zaydTAnm4",
  "key44": "22HHvog7nLtyz2hX228464rWkHZYEMWCquf8N4LbeniegZcuNGqdh2jQk6Fk1BD626TGPhzNpgiuJ1YWSBMqyZZv"
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
