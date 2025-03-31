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
    "4MgN1XkWJd8NQNDLuHJtYqj7FECT361cGUG4T8fhnBuUpVtLBrqMnj6QLM8LJYrvpuai1URuDSgj1guyRphT5Ama"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BA8i9gVMSaFdvq9MQ45DoZf3WqTRRviiHbfsAV5T4SZ7PXzE1T8opv1gNRPnwmg5mJMnVG5szi18kwwX1AYombX",
  "key1": "25Mmn5bjtEkgDmS7L6Dj1du2L8ed7Xpuo8bk41iLH7k4YxFVWwZDncLCdXHzGDaGT2Z8SHjddrnNGERK5zArVjQp",
  "key2": "GzEzkvgLuwjuVdh1TMj42qNjaFepxJMhnxzMNrTPnK4AaULzj2nN7Fs1iqgRFmuJXt5H1Cqr1M49hgeWVCwaQDB",
  "key3": "31CkAFV8T2SA16hiuRz3wYoqakjpU7KYNkEYd9burFMijbrLyyYoGSk7NBeq2N8wgn8yR7C2Wx2HWR7Ntf5h7nUu",
  "key4": "66MAEYEDpWxUtLPZTMyyvbDzFpQyuzGYchyY3n9tEEvHagpfTndCKnyK6WduZawF6fa6ndPkEJCkSzFASYL3J9Pw",
  "key5": "SCpPyceudktX7oBJYysTQsEMrTWyqiy4gMWJwKYc8veYX73X5JfYPrN9ySoihXhyUYhofty1ek6mTwWTCSPncEc",
  "key6": "248psb1BhdVfvrBjZ6CynuLA9pYdWBpyUghoPwgCrfw6YMemiDH5uo7dVhMeVSgbFcGFerGSULrsmaNAvri5ewRw",
  "key7": "4F1beFNF4GWQzHaM8dv1BbuDNo19WEgD28QYosvrNxTE4girPjkn6kjtSm52iMT2j7zsGgFpdPqHxmB5uHAuvafP",
  "key8": "4v9n9b156hXjaK44jRWjuy9kbGHnfpqnRLKkdBu7yDzYMdsFZ8MVHAiAtTU2ccDB7DjueAkX2zjU8LQ5AKCachuS",
  "key9": "5MwxXxbjqZRB43AjrGDpGEFagJ3dUujdA3Fb48CXiEN4v5r5KYwGLs7TM7qQXH3eFb1dzKUG33ziuugULKgbQ4BY",
  "key10": "2MSzqRuWNAKubbrrCHbesvVFJFVSMjUUCrZjT5L2Jgy3LLjWprW66y26XK418s5uDPiy3ZroC7iVqzQR31iQNJNi",
  "key11": "war3s5t73ctRvjyAKuCuxdthbxLBr4yHottmbC43mQBe4b5gQAynSUrBXCBw8CnXhag1GuArJ4cJESczZK7hZ7s",
  "key12": "qmgouH8jx7VaA2LyHJTX1iegjkGyKyWnoR8HppdYzVQAbRdYbArNz34UCZjjCgY74XrBkVBsJciQX7xNTLS7Zzd",
  "key13": "2sHuHuoQbdQzUmxRCgRbnTTvRYRTbXgXZpQesgnnm6q4UnfHj8KaQfAFvBY7kaB2puK1ghyuVwUbvpMAp2GY6X8Z",
  "key14": "ETnVeW9KGnaZZftKZaeZytqzNCopuXRoU9XCDiRUbWpXqB9kwCsQyCUzvpFMsHvTSUgVCRhyEALiCbp8a6Etmu3",
  "key15": "4eaUH23P81kuunFZFydGfB7h36BLKQk6qMPtYHVixgT3RfibqGt1LMtUKeb3PVEjdxZ4pr2ehML2CEZx6BcxHmPr",
  "key16": "1QQL8pZKJevF8a7JyjPGqw1bw1FFZivqGetLo6rCGkgFXvxkk3HVs2uj6QqYhUk1Be49XyNcYoifF1cvvypFMT3",
  "key17": "5j8c9yxSEG3amfhxA6jdkvmX2QQqbDA4LaNHY1fJJoDV2658RgG13KZ782axS1GGn43bz7hTVM9SU3TECFiQTSLw",
  "key18": "3UhZ2BGeb7iZyskPZEre2pjFqkaQoPVjqnyB8MZ5TauABYAttN2Y1Ru4h2Aw4e39knQSEC2ZJEJCBGiuSZso2Tnb",
  "key19": "2z173EqnVkEbCPibfiDR47M1dKyBcFg48FguA5V4Nx3jn7GervQrhAdrpXNzBoApjrvyZpwCog9WFYomBZPRZdkG",
  "key20": "ycekTk5RVBWMfsK9vtpTnVMkUT9y3LDospthsHt5nZRZTYSxPVdaB1GtyFkH1jrqyQExxh3p41b4APV7rEMAfHD",
  "key21": "2pXnE2Qy2Bp7Rvxf9QfD11cZEoSDEcoFUwcqWsG5FeRBdR15UV4sasBB9DHeQa2NGnEE62rVFyM6Y4kp1LwfMMmx",
  "key22": "32s4S1egbjSaAsTmFyDzdoogh97rSDevczk9XLdnX8B2USQhTRmKL1jLwDM6Hvu3at12GCmfPbcgK98ujgqsKpVk",
  "key23": "5NaPq9Gb7oEmbaP5oQDctni1BWFuVts2JkENt8WZaWc5SWcYVqcCLK6bfkmd41E22eVtJHqaaTC2ThMUrDqHZr5e",
  "key24": "3pXkY44DLxkNumVRPeCsihWN46xKRy9EaCizP88kC2dAeMAacgzfEafsJTX6ffXVKQGS2vbLBJ6wE313uPN3EaWp",
  "key25": "3XLLmtegS4jUm3evsi6wQDMGiZg2tWoT6cwXWhzZRY7ytkne71UDkoQfcuCsTA3h2bt6LndodtaWdAUcW9XZc3Zb",
  "key26": "2tBGYbCgv3xJwzbX7xUzeMocqStPd2XQoAh5G877rPuEVXoinr7D2arrvz7SVW92yK6NYdmsSgAUJBe1JdhwAEK",
  "key27": "2pxgdTmkpZbbdyYLFNyCfRPYHxQysR1eFUEKFb34MDzxmm4wXfoB3JZoYvhsFpUX2o4qtafp6YF36kuwvNTpg3BW",
  "key28": "3uZdx7bK3TqgzQ8m1ezJL5Yrf4rPcpURcX36BbURhc47XfiCzv7rQ1RytaPWvNg19hBsUphVvBKEZyDczN1ivc5r",
  "key29": "SGgF5THGYdqxHUd6LVSw8MomFjCJGbWYhVedqSvLijeFCwQnTkqFm9BrDxAmvsjCyvHSnSQhpqUgf7NxuivAKji",
  "key30": "4enMQC9A9jqabACy9rcLxRnaWR4oFkY85idcHDni81ugrdD2MWCizCUykdASzgf4S28Y7MCpNf1wLBexkyzVqNK1",
  "key31": "34kGQXqCtyozf17bLKZZYye16zXs5zQozfvWVHJJZamz5PUkzpHfKk8LFgGeGKAf1zbM7VzWfRzhvW1n3PnC7T1",
  "key32": "3UKpE3yKXXWLGwadHnH2snVU3uv4FWJZe5nv5P7FLEw8NKmjK7eq5yJyhJiTXS1vcwZgWvnvM2sQb6Ax1S8XwW3i",
  "key33": "4K38Efrt2dYtkUiUuH7SQaFGHXYumTzwkefWGjt5PZcnHURcfbktYP52F6zYyfTx5ndY4X64pp8xKs1EXMPQJpM1",
  "key34": "4vZSux4MJgqd5ZtwQg7ms4et6rxAUF3dqQDFTHh1tXykgnmr2rBHEQMTMuUtSt3upS7kVtspG5qmRcYS2pqXVfYA",
  "key35": "CDb4QitQQaYrsu3G6dWHXsiD9dLkf3LFnAhGrZQad6uGFN9AFT2KLn9XaeLS7ev5vVbpXPtAb1JhuoGWoZuEaMq",
  "key36": "2NPvDxfsc98QXpnjdB2CzctE3jzdzhsKFs4rSvSxcvWoXENKqR4pbuCWSiqvGfd6hbP94vnC93sEFqstByWv1Krd",
  "key37": "4jQchjF3HvgqZGWHGtaBYgGubKBsojrUZGo7aEAHeBrAatfRVVPDbXGXp3YE1d8oi18y4yizFD836XGSaC44aBzc",
  "key38": "25UTd3iaMa5s2DmJSjYGQQamsCSP5rpTNqMWQgrzBusn5wRCnXcHfeknDiXg3Xj8tkBY5QgqkH3avoPJJ9Lkx9i5",
  "key39": "57AhRtrqTveJxx5UUcjn7vudRq5eLdmPRjopgTvKNaCsvhaLEzSBZhf1Xbd3eN5mxEAfgMzYcDzELLW7tLy4oZR7",
  "key40": "JLxiPLmb9uiwJxUXfJwKgd54fr1Peg6egKkd6W5QCDzkNTot1Ja45VihYUB4kpncapSP5KBFBPQfXyto9qNJvP7"
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
