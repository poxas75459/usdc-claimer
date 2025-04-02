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
    "3rtci1cizx5AUzve5vp5ki2cdatoLz5gqgLy8eRWHuspoHVLgJzmoYcRKgkWtfbzME2RQpXTdp2XVzxd2RsftAti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29GJsjEgZPUzVKRyMu3Q1d6TTxffQrtMiwawRNDkTDghJBqfXc7iPxjNN9EqnETwaSB9g4adCzx7x9opUivyXNvZ",
  "key1": "3y2n4mKWPqG9H6BdaCpRP9Q9rqKfYsgHT8WcNmcvbVmFDzP5ozcBrHaM1PiUReQpbjiRRMVtEhHpx43UhjkxEoh5",
  "key2": "5pRhZM43cA4LsDeVMLghfbxrZFPtRwf2VtS53yCUzyEzXsE47KaSKDaz6ghPpygw14AqTnLQsZ3ZNfARMtpd3FNv",
  "key3": "4PCuDQwT9ocMBazSqDVa7u3RQCKSmm7589grpW1xBj2knUfGd8X3j55tfhnFVxCrdjQZyX31zYBSFtoauTZbMq7G",
  "key4": "7Ftb9AkW7Bzi7x3W9ArFrV1iMrDJ9dYHgCNXq9VXkFe7LTDj4yTbgcxdks8FhRURp6h5AYo4Z5xaegx1rQrND9E",
  "key5": "2g9AT2B6f3ZUoMxAGFKGnruZKcy8FCHtZbDUUm96stqXNweGesGdseuy15vzPv68hcoVtcHVG24P4EhzbVDuyguj",
  "key6": "4thbHcJpss35Uxm9RJDLRn7wDDRx1Sth7GFCbJiHbKrud2qjSwMqUw3LFEeomK9BVcs5LguwrsJD3N8DBacCvavo",
  "key7": "3Cvr8ZfZQ7bLfoW55VmUWVEkei2QT63PgPKzse3VXPukLejoPaGBk4ta79DThXPqJ77vwmZfvYQaW3noNQUkpvXk",
  "key8": "3m93uWpzjTYhb7aB9cad1u5xLh3djN87nL1iKUszG3PS5BmC5uxoRrXcieaWorwSZHPweXTWYezZC98MqCdSZKHK",
  "key9": "4gTFvivjWdu72YNTKkCYnXnuyjm4DHju11tty8gZcVLhhLSxBSUaMYfiXWsF7n4snPe2cT99wTbYMtkWUKS2aojk",
  "key10": "oG2cmPkFZK3xQmwxRFRkuPj1mmb6UEY5ar3382n17BW7KY9V929LDfjhihfFPrD8rtbNu9G85BAV32ayNMnKhJr",
  "key11": "29cPbCsNykdMViRaSmWJXo68W5YU2fNLVf2krWGwtjjDzayJnYutMTbR6ooqe568YSrKn2rR2iUKJSooYdnsKGna",
  "key12": "28ZdUjnHpUo1zfKoVZtURhSU3t7y72VY58ubChgfiJ6LE67voqPdHW9ut6rD2c2xxBbjvLHsGFSiLn7JzjsvkJyj",
  "key13": "3e49c7AViBhwrZRUvHKNTf7u9PwYd4WELD8m6qiuAcTVG4b3WPgmnGjAqQKBbqgiBABgZjrdCsqFASxwCKesCAKB",
  "key14": "5MN6Vpmc8CjxTd4UYSBXYxrjPVs3wNWymTh6QVmXgAf89DTGnyAHeHMxu26d58WbUVjoDR1X3EL6XnmGQVM2uBZH",
  "key15": "6NKrLJZ67fZkAHfVJpKm2Z3ssdQQA5PEfWjNPvxahiRqvupix1XgK35TBLMhoZQ4TPbHqwNETNrUG7fA2owgrc1",
  "key16": "51aFnSQ7eSWMgKZAs1JmNxby4WwECR2Aqxf2ddoGUnatnNXpQCm6rGaqrTa1S36mzKPFWSCKw7qER8oN6PQ8SAQg",
  "key17": "2JdcG9b7NxCd6kH53nU2vVisX284M7vtFnWDeutnprmASqw9Hh39snLL7thUmXW8Rs6wp8MR7NRt6K2PKA138QuK",
  "key18": "33NGxVRQQr8t1hJdEw2S6YcgoKwyao21pGTjyyewjEtoPet9U9cCCAn2w5bkUay5Cba7CU67zo2VpeE6bcsvB1Rm",
  "key19": "3XyuUoRtqq27ZYYuRSePDDkXiXLvUkQQA728KxRhVoA1E46XrtfjxagxM2qdgYmdxpSxKgqnCwYEiFwbjaFPSaon",
  "key20": "EyqgpE7WgV65Boj2SpAvRJP34Ygoi5wrtcDrMxarf5gbFdvs12vSM6fXN5ZYWEy7rHDq2rUKdma5wC9N3P8TVpz",
  "key21": "3gBKHnPLrwcih5b95UcqxNXHb3eiE3R6fjeyWJF116XYnfa3mzkhEGBghH3fKWDsy6PLRXQCAVXNKXmpwrwdwRKT",
  "key22": "7p98QXZWBMme8PFc46nttbsAVJAVx1xBxphcqXH4q4csD8iGbMMGdZpkerNpovJ9ZkWUb4MYEQ5ddFd2iqStJPQ",
  "key23": "376HXsJCqTzj7o8CivAmoH1v71js532ZWHfzaR5gzoRvK8RHxcPEZrEFHiXXgiKBP8JEt3WZsT5AQdFkJKNLDboL",
  "key24": "3Vx3rBojtTLNBoNrthjjLVaJCXbTTjganSjDqXuBAQ4Gh98fTTxVex8WMgsdeJe4J8dnzMgf7jVp1GQ3otNXBoUK",
  "key25": "3bi8Wd6sUpb4HvQirxCBZyg6RY1nrvegwBUJQN5oL9TQghDd71RpGC1U6MbsNToCFSQsP71cXPReMm3zUh2HC75c",
  "key26": "47XdzCjwvLU411TqqFk9ZwQUtZ2DvXa1YiRefjjbhFxJNREFDsuosc5b1hAoginViNA8dtGCAb9v8AL2PMnW7fSq",
  "key27": "5MDQ1BkoZJY7uoJEw78bbhFwu6WDacFbbSdcHWhiXrAsNHhAzYDB5B5NLk4FgNHjdAyApZE1M8auBh12wbkgt7Gr",
  "key28": "4sdZf7Yt5JU3fCtnhwBkrE9TSvBDeGyBK59qMyUhBrvQM1NGNAnuKGmDDDa9wH6LsPn5YzvsPcR9FiHMAh9tebR",
  "key29": "2qCrFodRd8ZgbEnbT67YLmt9ccdbk352NHbCLk8jed7qiEJ8PV1JtHC2zpjNySx7rjQBYKQXzgyWCjk6mDAMXF3L",
  "key30": "43Xg8tqPXSm9rhj5etJY3j4sE4UCNftcdRBARAjzZ5PVamGbWRsbZx64Eofg8wyXkTErYJMWfUwfHs1byuMtizSj",
  "key31": "3y69Um4ysF6gSxy1JNNym3isG1gm4166vTxgTvRUgoR7Fhpg1ykKM6HjX5dQvw1ujnkXodsnYXCkTEgZUgeKBFYQ"
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
