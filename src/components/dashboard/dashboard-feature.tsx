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
    "5XW7NkmNtMo6cAj1vVpgE5QhSs3VuQ9A8Zs9PcVCoBiex9ebd9DY1GUPVoZEaxqejrET338NV8GrJT17gUKKGU5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GZDjyhDwAdzs5StBxLqq4jhi5LpSofGuLxP9yDdNezev8kWauyYTFSeVHTo4mcvbEsSjyBuwFQsuwcH7gQ3aDTh",
  "key1": "45P2hqbxzvv3ycQnUXVBWDQ7Mgf43NozLcXAF3MyhbcCL7hjDfSWxMwaqBx16CBL3WvAM1iwyT1STCvRHKvab1ak",
  "key2": "27C8hrMHobDthiq3SqjA4KLN4j8bbgnE13P6T7i9e48tGVaKmHNHBuDhD13S6Jex5jyXaaZd6kCHYDFj3kf34vNp",
  "key3": "Q5WfDj6es9pCHH8dZx2qCgy3M5dZc3ao6JJXYJB1mNiCzQezCrQN9VL5ZacEUnxx5Rt3dcjNapCUT63n9U7UtYL",
  "key4": "3cjptSCW7QisKxC3Nxsm2e8tvE5tqzY9M6UhprBJExWskATHm6vwYtkewSEvX8AfA89SgV11ovbJEeYepuSSoaHq",
  "key5": "bX6NSM6g18Aw8KPQ4DxyeGSm2kXDpBh73Rk5KFECSZjopw3Ai4ycXMFEKvsSvHhoBqRUM3hfUJxUmXoJ4sntVfB",
  "key6": "5JMUoPH6S6dAYFuZignFNHWSxKWtbggbdqHDh5WjcizPecrjE13VuPV1BCb17yM8T3NWU3JFVC5uk92urwKVEVdE",
  "key7": "4sqymCjLd6XjJC1bZ8kdBEcUzWhe79P8QudUPHJ8Nz7KdufYoyjW8YJrk8KcxgrbocBtx2cZM6cRm8LQXPd8aZui",
  "key8": "2bPt973MacJHnVAK8JRbMz2CZdAdeTWPAVSRuKgG5kPRLU1VbUSQ29QLanHZmPD7CZvgDUnQNBcMqsaeY6uH3Rq1",
  "key9": "nE5aio1c8eytJtheK6mdX8AWX7TMBxNeLwKhcgXyuGgR4Wmni1AkpUZ7omXtjbBLQGPDUvxRT55ax5ZpxM2tj27",
  "key10": "5NERFixczvkeW6ky98BhppFZo6pF9p5VEj7ekHXLs9pFGb4wYVLaR8TDxtr6DqHBbxckdWVBdDptczCAE1JUDTKP",
  "key11": "59qbdzSzsY2pbCY3KKVs7AaWBqUXuaMhWCKBcuzHyTQEbpPpZdPdydnLVAELZpSPeG9G24Dan9WX25q8LoEmBouS",
  "key12": "59p4TWwgge8rQNhKaM4nxTfAjBJbwcGJJ2cEioYREjhPBZmEgsTnU6xDtQNYCXUNVNHgmfsiSZBCC9r4tGWFx9tb",
  "key13": "4nXQCQYLr53DNtsCVx6YXDFPt5gnELqXV8YnvkZFNqdsMSuY1xh7DPAdvV5p3VjdkRXkjp7BLSNG3T1wW6Ptt5np",
  "key14": "enmnqppX6Hz5Tbtp7JVvmcfnPcww9YhJm9Yjst4hCLGtwzcQXMkWfLSpZKvj3XYQ3Y5y29tffy6ucoezHgeBV6y",
  "key15": "4SYCV9YVrWKHGvdYbzEuoVKx6wH1RokiYjjmyy3AGGCzkN2CLvffQQzfXX9bFVb4JgoGQW52pXyF9EdTung3tE9a",
  "key16": "2tiLUzRRV3A7KmH64kqJuAsPa94vccqb6aJpKCMWRMRijRYk4Vp7hC2ZqmWfvjqE1yiFHFcAMkgvVu2FH5dxxM7H",
  "key17": "3jsrWPx7456j1fo7youRnCzfMyhReTQkMvzknrAdKphB8rWUv7fpXJRUxTDPpSY1J9ykKNGeWn2NZs7vJuyCB5gn",
  "key18": "UgHcnp3jxSoUV5fJfvtrnVq5R21m8hGB1mUA86SEDETmNXd45w2whpHv9ATiw8o4tqrGgg461eDHoGfz4RLfKWe",
  "key19": "2cXCga4b2qhtzzLjTtDdPm2RDDk73dvdVJ4q7hwNy3BSrLz4ZY2JVR6X1usgdJRNvPtbXehNL8TfFAfpctndCCU5",
  "key20": "4c9HdsbwE8zEiBR2zy7inRAWwAVFEugJY6BMmMxhpDRDdPws67Xnr7bUBZhMYSZ4BhUWVi1Gv4Ce8wX2sZk7j6DK",
  "key21": "54iubXoBNd5GpVJhUgK47ma9fHsL5uHpoUoiyV9stKyL7jb1ecZcsqfhWUCANJExQWV3rGQETiBRXnR9n5VnqYQe",
  "key22": "4uFLpu24jTgiBB17RzB4W8tRMabZSLEGsjfebkyhGwaTsMBnH2hzDWc5Vo5P1Gkum4bMPojvuxe493pJ2xczVRBc",
  "key23": "5mVPn9YK25qwKAyERZRr1mW4Nt4HjomLcW1bcCyDweVbQ1Hmx9ibgPzxVs5M6fV4Z1CtUCBTPG5gKQvtjCU7oy32",
  "key24": "3y2EhCJZS3oaCj4sLsSCCr8Tr4SKXU5BX5iydTGb7zEF4T3nMDGLkVPQUZ75fn5W5dkSfncdSb1jhdiGp26Ximec",
  "key25": "3JmLJhfi3nBR8eQVkT6AhXifqNknMdJzGYwVg9ZGTn5SKCkWkzRWkzr1L3wb1K5TMGBzHKHKsa5vULW4BWirDMRx",
  "key26": "2gXZ9eGQbTrTdPFKkEfj2BjKFK6iM73BwKQcQiBan8iNmmRuYKjwVpWL9kyEeqyVtWmtWhAHjwooCHNWV9RSyxGc",
  "key27": "JN8ecSCxKMWF111Jp3AfH43dZpKTkcjrKw2KKuQTNfcmPYPARwHA7rYNZqqt1K1LN6K9xpUYt8jDqb6UGPEQdDa"
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
