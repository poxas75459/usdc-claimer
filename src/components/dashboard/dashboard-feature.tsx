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
    "4KfR7rvvKMUFhqYoXt3nHQoh3xB4S1hDNXiMiexsxj2cwhqrqMPbzDeYfVcmQV9JK9SbzHsSYaymS9wfmJGRuSeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p1pUDb52UmHSV9LkYuUh9crLEJkmyUU5aDK47AzHpintvg8y74gYEyTmHHG91QD1akzSpnAtUp54LkyXGMz5Vm5",
  "key1": "53MV5GnbA1bdZDTmpmgKCguSLscc68zCzPQ2f5kUripLzhxULx9TeowEMJ9Bsn27shHd9rxmUtrGCBxxP8mMFKtA",
  "key2": "26gDXfWf4AF6sZ8vfJdqw4EWewNzpM8RVeatLuRZCV3EbYvfMMmBSw6LFdje3inXcq8yFuEZekNeMHcp4bWsMMhD",
  "key3": "4QMYaJHs9L8888wbTJ3vQbKCZrYNGsdx3qtQsK9pintS23tMvasJB7JRAJ8HfrbVyR4cASe2YxrechemR41PbKX2",
  "key4": "3M6ZDc2AdV7piXnrB2tXofYcp216Yip4GnBYxRmgHT6Bj8gk2rvcxEaKEQb4oa5oNp6dGVawkhJS2VabD9VApN9D",
  "key5": "6AfdAsA2BZYUKMKW1Xm8mBg1LMKz8EPQBKBJfghT9fa6AGLs1HmoaaqiGY2Hfs5NEfmG8AM9bqtdKYuceFsEXcy",
  "key6": "4fgsSmb9oiPjU3NVFdorWpG2dRBLRkT7x6iyoMMPhdXj4RZd2oiAX1kGTowrEqJSYKHWfP9qFMNU6LbjtYkwK5z3",
  "key7": "5rXze8suNt8cjt6r5AjUmVYkVazU7WqyZafecDgUd9XDvyMC2m28uAp71YLDS3Z2ggwAT4xZA5uyNj7iVHGFpbE5",
  "key8": "uvW7a4Z9ZK946D6Hf1bqgf3V15ou9XVPYHsybUvYiiwu63ivmfdVVprc7xmQep3rzjhwvUfVo3J2JkfnsL8b791",
  "key9": "5strd8s4NUu8dDMaZBDsKnCywguhaUfKvmcywaTa46HQ6aFUYYwHXdXVVpaiejznMr1fAHpgoAcWoQRaYnkiKesk",
  "key10": "41q259voEkuzpX1ctaSBrjKHUCSPZguAFy84vf1oFjdtr4YHymgwedkkNUhPSKxCX4iA4SxdpCGCLzV89x9GGJcY",
  "key11": "49bUJzPS1Z6wqGXCDar9HMXSB8hRXMVmkaYneMtNj4Qw5AWGRmqpy1jVtcJm4M53f9aoPaHaP4ex2of8rSRntPRj",
  "key12": "21yKqNu9PyeaSLedR8gi2Tyo5zvCccjg1Tuv9hGuh49vj5sewGraoLh5TF9SnAJWnp3zc2589zurwxdCBGNysKTb",
  "key13": "3Tn4c2rUvSCG6T2ihEW9QES4M1bSQDmggAx8trynP2qZbd3qtnNUGZ5XX25E7f5QKh7Y8pxN16SdukypWeQV1rd4",
  "key14": "3PpqRzER9SP3BygaNNGmNkZ2FpAgMdzhMC9E17YZcRHu5CA7fr3TTpB4CozL9hyCih5ydPG1j6Eb3KqSGb29UeTx",
  "key15": "1szzrtqZw6ZxGhPTqBS2ySKzHHxBm18NSj46L58Wcxz3KEMLwhu2iB5cnxDQcGgks6SMntHdn6BPkP9oWgXxkGV",
  "key16": "KVQiQK1vzvHMx8QBaZKyXBMFDncNamxGUjAF3qHCHbGGwPimee3o2ZeWDHNVug5UZnPXyNunYvvTMxopBsGfPRW",
  "key17": "2HWhE3YsP4aXJprwaE3ArUprYLXxzAHhwdh24DZLwbJsT37aTRJcwvZenx1i1dpVA3TD5B4mZtZg4tbdAMm3WJ11",
  "key18": "2M2BXVZ7X4WtsaHoSUG7rEBMP3r8e9PGmncx9rQvQ8fHm9UW5Jz8zkca445nMfJxfvduF9zkM2FDF67y2nyuqK2S",
  "key19": "4fL42TSHe5R9JfbkvpG3b1tLRk6CWBehhcww8NZMaaRb8gcqC8q6YA9wn6HNDtCKvPKqyEGQKucaebWdwzqPr9SR",
  "key20": "33zRMuUPbmqL1xoU7UxY3qLkBEY6FLKyLBiFQngmFqjzUTi3XnwXGxKMDkV8ZWYaqrpSyciSBbNYVMRzKmrKjwem",
  "key21": "2uXKufUCwq42R6W1dwK4sgbEU2WWRmVmN5rPZmqgDc3r9PUjFZhz8pEjjpDdJQyAZ2t9LZ7266v7iGg7eoiCf9BE",
  "key22": "394mB7wki3YnR7mm9hKGt1HPYYwHh82Nrcc8hcr4tZq2jTmVoy4tj7orbMovZxj8xMoDYBDcU7hZZzLGwSZ7PDU6",
  "key23": "fMcSoSwrPRtPG88qqc3c9m9bNpLgwJJ6zymRnLFqDUp2fYjr8eew8SQPkjPmUD4XhXPRV4c5AFWdfgUKGmiEhsh",
  "key24": "3rm78cybb7sdizqJ9cMyBiHJxGcnE6TqBXcwq1e9yPYht3Ts2UNd5Tm9e17aLUL6jE4PTxCCWwrZx5AGRyy7Uyf9",
  "key25": "CX1FuMdhZVmQooSzgNKyq9jLVhoLDYorc2xZuWytK7kLeTkT4gKFAjeRBKoT1XGGEt9cpMbmn9jqaqARiWV7MXo",
  "key26": "5xbgJn7Q5vUpAD4DHVuXyyhYxhu3QwMGYcy23D4JE2HEtN7umzz3ofqT1qmQPR3fzE7NkADJBPoJTWkBjch8FV6y",
  "key27": "P6MdjbpxsE2LaH1YvEw9YfDqJrViFdG5Gx663jYBPk1vnZCvzy8wZbvs7WE9YALAnQu1EkaFuUs8k15byCKfFPZ"
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
