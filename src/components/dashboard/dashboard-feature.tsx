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
    "2xJpJyf1yLn8sS5AjSRbmhYyqjjLXi8eyJJjU3ErS5AFGR86MKLunuMZqjvB7Kt7jKhegEqqoxJ2JvrPvHprSoaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DbHoDLJUVXcmUS9HAxhXZd1Di5emGJ3C2KFb4GZ987CGpdeKosfShm44q9WsHbYn8cbvaoJz9VP9ehTdkcrWemU",
  "key1": "5H2cG6cX2AATyZHYzLcTNwcikmcTxjzoYGm31BJsgvKyrjbJNCmkhdY2nkP1KjMbcJEAfTqtZ6FWp1A6YH1tx1Mt",
  "key2": "5Lgx7C22g4K19Asrh1iLvjgZmbKoxXhHCv5hJiUVWceC31mL7T692n8RoSMYP5yZqDBvjWhooLBVWoVqFcPB5ZFk",
  "key3": "5QHgYRAsnMLShw54K6v9jim282eueAn3H5C133tqMgzeGPGmgXGWiiaJaNkAHtBmHz52Z6ff4n7HsL85hS1FLUEB",
  "key4": "3yfJ9N2x7J6FnTqgnM5vTurToP6t7ojFNVqknvSuzJKfxTQd3tivEP9qLGyB6p177ZbcZPujKQkFdEQrvSQg9jn2",
  "key5": "3EhCvfTkoSh5onFS9XQvdJXqJb1yKwvyBWaZc7VM6fs7YKk81cHPzLwwULNZZU4ygMzj82Fh9dqfak6mH8s6MVUc",
  "key6": "5D2A2mWTJ9XsspNeaa3asr5rbpxTrj1sC7YYvbsVLuerR2wEDskDaEroEste7Fq9oGyKqzBQUbQFCEKLAyEcpB2t",
  "key7": "PQs8233oXZtSEQJtapmMLZiru8eBmSps6xzHRjcG5nqGM6h4SWGPVsVakHfP4tjKYARCqp2eepqYppzVMEnUgvu",
  "key8": "5ZRrRneJQCbpHFW1Do618DQMdfD7B2Z3WLEenPysjWyajhmZnPXZHizwtYcBmTDd3DBQhKN9o13mdyJbPAjM39Vo",
  "key9": "Y2xGMBdRGw2cHHvsqnppCTSS5hkvnc49d4X1QS4hmM2iLP3pDNtu1KZPjGzTPzCaKQHu5tuUXa2chu5F2sWubPf",
  "key10": "3WhaPhcVYvGhjTqVkEfmZPTGSgWciUPsRNMDgQJDydrXU4miGMeFQ858VJt9y7Lkt6DqtDGmH6fhnmSjZLiFQUDa",
  "key11": "4GCvBFRMePCm1fL7ESzRq9EuGT2T627i2Mx6bRpJ5RH1imptgH6RETLh6rXZKvkAhJPPncZHfvQx3gRYUnJREGHY",
  "key12": "3neJC2nRha4CnoYJvJ6RSpvD53sPZdCrN18EQA6T6n3tndS1fdPCYqZLRqtf99mHFxSPATP8ARcGYkPTqLLpJf5i",
  "key13": "o9vTGMEqGjf1FLS73KL4RepyQLgP5Hp9n9UVL7bBPBD4if93p9gwedDd51BWmUFg4WcM69QBKMKy47j9gQURm13",
  "key14": "379gqFjn5fPXdyMav1PPiRBmGsrgwREQLuZsgUzurACEimiS5zcKgGuyUBkyQWpUZovZweKDMizhm9kW68cQC4fN",
  "key15": "4szB6BE2qxSAxH6P4agxnxNwVauRBoQEmeygeaWnGT6mNcHnA5oE3veRfiVwXt5G1uazvJ64FbMRV3Joqt5Bs4ss",
  "key16": "3xGWY5ViXgcMddUyYynegM8GTPj3g4NKgib7aP5kRwHoz7uu7Hp1V1xEkX4vyXmAm5J7hQis3wjJbKLydjbWebTa",
  "key17": "3CSWWLKAckvys8AAQYqW4LtondM1k8q6n3RPcm8x4CDeYekpXNY8U4BHiAyzPX81VF6eT8DkutCTsmFnno4exGXQ",
  "key18": "RNcYXdh983EoG6LDn7wLVvBQeNVQVBNcJiBGjU2rhYvZYNgM3mL2wimGsPjpPpKrpHDQJGNNfktgUJ6QTUejTwE",
  "key19": "2qTnA9rvkUjnHTJDp6NVVJRgb9vBFpBqKCcq12D9YQ9Mt7KawfMKhPqWiGPV85rukjCr4ios48VkdfAaycWNK6te",
  "key20": "fJPVo2oxHCG33o1ehGWvw7W9udvXtebU2istkGd5FA7VyNi5MATgzjAwVN5UMq7UHAdXCmZL5eQLn6HbReAaaoK",
  "key21": "4TmfsBXjaWqhP2VhK92AmFE3sgXtNbZYxuTpMoxDr7NViGENBsDx6pAUxj9UYZF55kWuUWY8pPpd4849BBJf4mtZ",
  "key22": "U6in168aWM8dtZ828vsnQGkpkB1Zjmh9B4xUtmoZqV4xCW1KMDZCfhzLGrJt19Nmn7yoGMzAXb9GFJkkhR22SPU",
  "key23": "jVxD5H19UN38ZKo1EaGCFVyDbDVXvQ8LjWePmgzxrC7t8Fdbd2ey8JPsPYXdA7nAuLteEWMmAxwG6WSEj3nSgM2",
  "key24": "2KYm8HopHQxAEMX4mz43bR8b6uxPTQRp9rYGNTdx7CixKuhQTppNrJjtCASXm5G94EBt6QkDPsPWGPGcaGzg7xHr",
  "key25": "2BjEsVNs9TjMdfNPyAnXXW2sAwdCA7Nm7zaP6Bh4r39YGMgQ5vTa1dWxbmyEbXwZQjTqD7KSxC9UciNiH2iiXPT8",
  "key26": "4bG9TjwjAh2zTRcF4pg1zViDxrpDy6QwxQjGQZDLWc6k8fXnafo34zEknWun7MxUxcyJMZakVyYWZpuSmJ8B1PDN",
  "key27": "2vCJ9dx3K2Tzg1MEkY628f3vfyCrCQoZorQZCsjLZBr5DHRWrB5YDWzso69pPy3HdoBW3adkgZHEXw9qvzWPUgMh",
  "key28": "4ktDNiDCtkyU5er5aAt3W7ZRwe1De5bTuJi1eWyLqb9iZRsmG5aYmThNSAJX33Mg44uSz31BS2oHcmq7Y6reTtC2",
  "key29": "4UNbvbHd3HpE8KLhaN2yEVJyxDNbrfvTYWAijWa85b1D9KXTXrXB5gNPezHkY81meJBWTYYTaPpXpB4P9scv2mtj",
  "key30": "FHKogyF9584fQvBS2UcuacPzdfi2xui8Bkm3VSnxaSVAKBYcWz2xN3NV9skmJtW1kKSLohPG9Se9h8QFUNWeyjX",
  "key31": "3W6L1sLaGSe5tbjywHhtYBP356WsqxhMYVjyTC2YRyf4hx2yMYX5i6yf19yBDXJ3QkJ8Po3itEZCXD6H7y1YpPAc",
  "key32": "yaFpkh5uZLMX22pT71cNp8F6Aepnn7R8JBfHp8WmQyoNnHrDLdTHjrTYhfGWGD8r667g2PZaS6DbCYcJaWHxaaa",
  "key33": "3mooSF7tG5mgKMyETtX2zLwKLGB1LRcMxeSEULPFna7AXXCBtV6cgLqYVB1xhCEVTgNVxkLFaqGcBvv3PfnQbN3j",
  "key34": "5JtW3QEpgF5b2JCCsid5FRtfunXkf8zkgPdu2NQWUWSnxBQQgphLbqCnSG6f5cg7ukM356KKDE6VQyu8RzUP68aH",
  "key35": "FE1v1DUCZqkRWuDk46p9i746jGVG56TKPPhd7WDeEi1tY6BM6Co9R4o88USnKLsq9nvGWDELuXwVLhabQmcdrH7",
  "key36": "PTskMX2CB6Ti4snP746HKVnV2NjijUnRZ48ZELAK7ZLXDT5SgV3i5jXwYXecJc4cSkU3MLGjq3So2WgGc6cogoD",
  "key37": "2BS6hFQN8AtEan5BGgwCi4PVDN9Ty2mgL3k96kjHRfGhD8VEtvNhoC8ZNSPy4BFcCfAdru9i36cBaKZma7FcW515",
  "key38": "4RiUQE29SqBBjYV2Ugm7dzj61nhjDPyvjEd8outdTftxGGwe4rem8mE7ygakgUN7WyvxseySBrfPk61JYDsoaw7F",
  "key39": "34DDBQv65wbCFnJEwu21o68KfD5XdMnqyKWeTMvU4ZCwBLTTZD1Q7saReYUXQGWtgqz7sP6DmZu7KbWvYSUjiQKN",
  "key40": "Fi9pYDgBWGVSem2BajwDrJRMFwq3LFoxdK6KR5snoMwqB8M9VjP24pgYwGBdVRhrR5UBzw2ocDaeVqVsPBUitdt",
  "key41": "pwNA6L6VPhWuYRBkp4X76CfM3snmLQ7huLB38Hh11JdEoKkmoZXEf3c888Cd7Y6NWeKZSZW7wPs292bZMz7JRp6",
  "key42": "2tGKPoxJYoDKYvfFKKKaMeDFNnDsYyaTsMoPytR5a9HhJU77msksQaVktWXkYerRakpLuFMTzVtfFfDoXsYNMrfe",
  "key43": "3oJZ9QUAiyzFB8K5LsZTN5CKBwH2PBTiiSK1b6UTHe1hPd8br3wctFBq8UpomacfL1BGoctjNR4mjdtCC1mndmx1",
  "key44": "2kdMSbmhhnZzhsCnC9p3VWeocPXda3vmbsbFaamKLoN1dCbJnRFEEZsY7DAA8Cs4KNBKitfY3EBaskA5vHmLgv67",
  "key45": "21oJkx1MQGh3diq6kLCpsjfs892M7cofTmpEQqFQ69fmbxQGPgzp6R1ymVk6cKKPZ29UceKc9fhnQhWpXhLux1q3",
  "key46": "67ki9CVjuHZhuFjNTZrAsrrftHCgDy3zgeyBQoxQ4x6TQcxvBq3zNb7um1Lo6u1UcKUPvh7gvdwwkgmP59YHzxrK"
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
