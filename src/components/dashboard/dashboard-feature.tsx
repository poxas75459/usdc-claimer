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
    "3JbtQheWmknK5RCZ6dY5rMmMxhgV1DjAns3A1DDwKNCFDigpUaBd65RxDBxjdFuAT6hovNiXyPqmmX6UGy7Kp2Ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "htD7VgST1NbXq5gaNbTRjxRiB4mbLhGwibeJDqbsa7VzcwCDdBCuSsTstxpVZa5eSo66wdgni3bwpp9p9JBcRQm",
  "key1": "5dpKCyisUyjpbroiNidfEcgwVXhs8r7zGFPZNRrPZKpW9hFdqRvm38gKQSmXKZAgV4WWnWXJ8bTb8TRPbqSoMb4H",
  "key2": "66Xqp8uqVvd6QQJLHsc2DhF8iQWhokCMgopQcg3ppUzR9knFSTD7aWVJ6ihRxtTQezLkdGg2K7auECiw8rEsbfe9",
  "key3": "3PaHfLAX5tG1jGnWC1oxtXaE5iYsVahnVHTmFGbNJgDoE6DnSxvhp23zvVJpzWpj6omYN1WBqmpMhsQzX6Ufn5Pz",
  "key4": "2UqdBBBnwXb7FeMwx57s9pjjfuqtDcKi5jLh8MfoL4NoPMyvqXXoTkeXYfaSk9JT2dqzMWhfWL4jvaykf3iWhr5E",
  "key5": "QxTDWqAuGfWnjT9syXEpwiroU8vbEnkpXjKyuELVSWDXebn8SDYSgLwSupcYA37smgqSGCEfwHybXMLgnXM51FA",
  "key6": "5c6ErLFWSwiWY7K2AusTxh6Lna6MRL7NfWsbXTASxjF3EJuCskFHgL4VGyaRxfunmPrjKg4pkNr7mzRHLtYpFNur",
  "key7": "gh17dXmdTDQ6aV64h3orWj7Yot2ebXws3MVz2UpdqefTRC8BxrnrG9d3LMKicHuXCQ6hJW3GxE3ZPtgnnVzKjjx",
  "key8": "3UBNS4CQHEf16bkn8EfsT8NEdwY1ycwLc1fCwSaFqPd1fQxeyWzKaTj5d3RRpRbYUJehq6ds1cUxZVrGrEoHJUXR",
  "key9": "De75tWxCMzTRecQih8si1oPGDb6DUq1j78dxcHRvQ5BYST27tsFrvCktb4FXau1yapimi5pqsAWYUK3Fn7CC9Fk",
  "key10": "2x1wAJbqRaHEja56gWEfiDvCRUPrh4bZ7PcMSpd2VRc6PcJmvbVbED6Dv5LhVtdPz36FVGhZ4KzFidJke4PPS2sN",
  "key11": "4znEVq9z41MXQrFyV27k4EotBSWTmxivQ2kDte5xP8NQAf4EuHdve6G99uXqggcMtmKVnAue3vptv3i2HYXuce9X",
  "key12": "2hXcQeUHyDQxXbLW7vyqQYzXBV2UHL6qhv6adJeuDpZkEE5ujndhZLRnS77DukBf1BPub25MKcGwDQkS3onzq5Gf",
  "key13": "23UwCaWoobFq9LCBWP3Mx3a5WNgfb4XrVVt9TNQdxKPPrRc9WYnis76EZryhUDHC2b39opS3zpQ3xouBDen5M7k5",
  "key14": "4coe9Qm9haLaH35aFezcr2LhAY3y59qBJcrAW6LFu4dEK8CNCDLefXA3YfAsnYsZkMoM2Zza93baPi5DmBpXxG7X",
  "key15": "2ooEKR3rGxeH4p1J1JtDxzkXAUPjkHbHB8xiTTmHbbtV4fX7zRXDfUopggRikT8mjUECeqAweq7az59WqooQKfSM",
  "key16": "DcLdiPBrnYGthmnNxBVpJXEzvu5CddyHqUNZphe8agaM1G2QLdTuxPvP5G2JhyDvYVB13PicaYnxCvhLxFP7fX1",
  "key17": "5W1L8zbgj2ymukAwoZj9rQknXjUoXj7xszb91sZ4NfoM24hpDo4rKheFT4rqshdeaTSCushdaFvjfG1GExaRKXtU",
  "key18": "2fE1S3G9NBfBGAvBxehBaj7uvRdHCPXBpmb26Y9iSGkvh33EwEgg7NwafdwstfMmt4aHx939EaMrawUnNAhYRwuF",
  "key19": "3EYCqz9ApvmNKEWuMRF2oJYc8sP2mthPzdNpCJmAHXC73dUidsZAfebT6rsb2VBY8PEiB2BHzeB5P5NNxFSEFynp",
  "key20": "5ddCjBBpKcZB6CkNccnWqeC5W2dPLGsRyg3pwxxabSWky49dyVccQD5ADbvbf23ES6YNbjQXknWquXEMXtJiPBqw",
  "key21": "2qqCwTsy9ZJoFLfDu4KnSPdsXTjyWsSGop9tNZ8WozPQ1nstpWHk1prwsGtLgT48P25QRzVMr4ERb73wz9a8xjhb",
  "key22": "5qdpdrKWkb97Tzca7uVcpHmSRUbAhsX6QjNLEfxtLc1uhgYhfYG25UThu5ASTaJAku8qhV2g2GgZ5PDFH9AdJn2C",
  "key23": "5o5mmyNr3i7VsoJDFAhX29sLcLQVwhRLpNcTw6a28bfRVNUZ81QvJZ8SGcjnGiSPWkxs3jmpFbAiXB2uKWsGL4mk",
  "key24": "3jL2aHepCYjBQX5RVonHCYCTjBUnBNkpi1hoPXEUUYeXksgsF8azy2LfqRBDnXHL5a8SJmLjriwzYjhaBgDZvtDA",
  "key25": "35DpgYiYqX7E7TjfQngmXF5kPVXD9qxZB6a4aw7N7QY6LcSYkfQLBaSsbAKyn3qaAuXUFcPoGQryFvWTVAcG8Yy7"
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
