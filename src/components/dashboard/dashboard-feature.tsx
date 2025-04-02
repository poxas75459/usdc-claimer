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
    "2Lni4PM4xQJkcvi8k7ivYFZ4CqQrFtyAhdq5a2anPrcWVstPnqLurEnNqsH6KCWnAeDniCK21CTCQECzxZKJgt9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lh16rbHNULLdiB55diWnR9dnrFnNGxs2YuskyUoYAJyjETpFNp4aoBj9jiuAEmATZi3pJqpWFNoi9uQjt1RGGfL",
  "key1": "RuTjsk4GxtFKBmCG2LMaFk1RsLsGoRsNHQhgekU2rRuBjHbvZmevj89iGHrtfxuynrZMQYFKocuxz7EMRzZTAgT",
  "key2": "5SRkvKF6aSCuLXVVgHH5RS5oVXnPfmN66YwgGEi5gKjNYBcdgDpGMVUT5n5nZQyAt3WAxJBTMAQZFqBBsoFn5jJV",
  "key3": "4FXNKefLig8FLCM5BG4HvWNYTyeQNs5JPMGzGGnhhCsbdFuB2XoLhaokiYmJhL68w6UA8qTPM4SrBDfzgxHd1t4K",
  "key4": "33JUt6Jam6XVMHqsEthiKAPUx4eg2eC2F4C5gtTVkWt8M5gqfjMx8uJvAxxir6EWNWt17JomJNV4UzmukBMgEg8s",
  "key5": "5iQF2kGh1yWGKNaN6W6aCS2Xw5sxf6ZuuHczNMU52VzdWZFJCNjbcfYYWejqJhTwcCGA3n8NrKDB8wRmH2UzF1bT",
  "key6": "aFnyxmUUcfCCgJsDFypeWKxCWHScWtMXR9Ac8DdBWnXQtXaF3sZZ7Tky7fePYTDHM6J4fEDstoSEa87Mz5aWpuz",
  "key7": "2vWNd5BRjArJcqnLyb21phvSd7CiQLyYJRfRTZkTYZ6PGqcvkUN9w6LsHMhhQekw5t8QTD7Qs1PJjRcx2X1gEtrB",
  "key8": "226iBfKVgXKrquALxLeLU8NUgwhf6Wx8e2S24bynGzWkvhuXcGzFWhbns14uFq5znX6DePz6iMhi7ZHGuuELSwHo",
  "key9": "5rRwNrMZBomFWVJQBmZo5i6REWjRwa7Fmx7eW5AwefXbUrNiVUC8TahYTgsxV5Dkw6HxSAPu9ysVZXC6zanChmcr",
  "key10": "ednuuMMgVWrLZbAssNGAaczQZLP62CeLpQFVqwj5vTAfMQ8dtViD8qYa5JG8B513RmKv6Dwv29tA7BKSry1eWX3",
  "key11": "5xfbA3q3bGz9jPLfJT9c4SKQTX8Q42W4nuWeUV5LE21qTdE6VMMaikR1M7rvnVaZVnztY1DbXbNLtQQxm9jvigNv",
  "key12": "qkT2PAch99aMPqYcvY8pru1ZrFA45BCMyBh9YGbUHCYxGgyRLZaQHEzTiiH75uRwUx6bkiCVHarJNqRtU9K5awo",
  "key13": "3zFXQ3UMQobJafvJnR3mfWU4PqtcJVc1G52vTtDVsEFF5tdSiigCEh5K8NthsfX5Ri4XrpNeSunoft4CwEnrcz3V",
  "key14": "j34dFZVASjSP8GdKLSz1R6bSfw8EFUUGpNNaY3UPEJUiMLdUcc5RikdSWxBsh8cXGkqMYQqBiUm4GMBZvThnScB",
  "key15": "5eNi2jyfnyWPqgb7iBPYfaEhJ1w6hTZaeh9TZkfV69LPsaTBZg7bj58mo1wzCTPBRiCmgDks871M7VvuBJvPT7wW",
  "key16": "4Nj42zDwnXnrTTZoakPkVYg1StVGzb83DLNexmx8uixEiMd8cekX1rDi8MwQ7Tgg844Cq2EukBAKVZHwHP4Zaac5",
  "key17": "4RZ2SD7F3CtPnPmQ69jqfTWsy7ibqAq8CWTUD5Y2KA5aURXjc5pJFqqbzV16eJJZD82Gd42zPxnPYnmAWQnBSAQA",
  "key18": "2eVYqZzeFSHY1orDosupwRiAZNphEM5aewWDZN21z1TN17LS4cpzaqPDp8fAujabZvm69Mt59oHVrwMG9Agfckjp",
  "key19": "q1hnfVMjYPg84HE76m9V81vaMrBDEaKwtHzAcjpvsgjEvSDHJQbLeQpb2yc9FM13yEwZXVGepHrYnqES1jJ2oaT",
  "key20": "2XQYXedqVK9eYViKcRNyDzzXGRpe9CUJexuMxK5Xo2YrFggQSbYMKKDxJwq5fLoRfG7gJHtXMYT3KSLAr5BLTAc8",
  "key21": "811HUX322U2YpFTUrKizdVqTCuJuvvoJP3a79uCYJjCaPaL7g64HYUXdhpC1X8tuYHgPyhaNyKGTbqiwksuD17n",
  "key22": "jto3z4adWgWf7WnXgMstUnP6naop5dYopNige8ntCUr2FZhpGsNEf7FWbnomWGaDqkvYTGRcS9D9YEEj1Kb9DQq",
  "key23": "1JeHvRraUGDzWpmcMhn7w4eyMfzNQhXALUzWVzauFeyRkD5eCw1BBfC7q46NMvjEdnAtcyj7ARCE4EJ5GRM1zvt",
  "key24": "4NqfMvi3AgFgGMzhnat3BwTzVviE5PMvjNFLu64b5Uq9qDkmHgcvhogeRF3TthKysqvTjmBcWsB6ZT4T6zoJzZb8",
  "key25": "5nNJJ3EAMgkdSmpM3ouoAsb3CSrMmL2XbKNjhTSg52ZhGBsRkqKA7yShok3qjw9qZN4m7Do6q6bLFCNK4GQNKuvQ",
  "key26": "2WVSte85HJeB2gtmjes1GZCPVduFsKXgkK3YA52dhkrF1bieqv53fchUpJLVD4SnHUYSLnizBFeLpYRukvmk12pD",
  "key27": "5n25iUGpVMtiomtrhaNAgqNWNjyU2f5ZARLpeBuDQB5yL7aRyDCTo11rBxN8e9JP3vP9gkL6cv4sLqNXwoK6V8HZ",
  "key28": "2zujtqgjkyVY41zrLcYGvJ3qRKLPCEpGuWA7vb7XQuxT7G3RQPUntF7ZbMuZEtRpMAuZA4uT5GCXxFWRENzrFG1v",
  "key29": "4oRYesizaf2bFKQi5pXCb43RQeJGA3jgDj3BEAPyYdLxrrkzM8w6TxaMbhZAYRij1iKKxE1XkbF8t5bR5wbzKPp7",
  "key30": "27FMSPXAS5PSPg92aZyhUBcfNkBQReeBLz1LxFtLdrfELSD1wL1CtXfAbfKCMUJaSpRqLfGddoANhWhjzi9FKn8D",
  "key31": "TbPppD7dU6xkHBF21scvzYGsjcs7TMfbEMW5AMiXWgTGiK4sGR7U2ecZybFRth7xQ2uERCdDvzUHCfKUNDv5sor",
  "key32": "4TLV5e7XbUyGLBhPpKiRnNPJJHxG46yJ2mbtMTTSaokG5Qg4vTsWLPmPVmVzetM3eGsTRKpNCLrYCLCYac6WidNr",
  "key33": "4cUBQPnH3GrvV4k8hUozc4YABik1LVGMDDcPnG84FhYe3VV53k4aBgbGv6KnK6ck9GTnV1FFvBZkumxLLTxGVpyc",
  "key34": "3Lc9fBFMCtkW1QNAZbmB4qNYTGxNb9Vv7SBdmiSvNtoWhpqMfNYV5eiP5kZuq45sF7sZgDqjGdKk71y9H74zJ9ff"
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
