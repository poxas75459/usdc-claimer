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
    "3DHBgCRBcdHuTTVmAotyJfUZRnBkopFyyWf2tEVLZ2uaprzxry2bxtxmQ51zMnaC66tXArtL61GpZFVgQu7zmJZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qNVzqVbqnxyJCVUWppeG56yPJ3RRPe2Tfv1e96hLyB76UQXJPom3dzhGS3dTTWTv6kSux1sRzaJjDAhaxsht6TJ",
  "key1": "NKaUBvhvMKV5ZsAqnQnWdmbnC3cbpaBcPr3bHci2G8vPH7DyEdC6AcipfSb6xH4HQF3QHZFjpHdQsTuXKM9YkMZ",
  "key2": "23QeFYu3tdvbaBW3xQyosWE31CB7fraEgTHKJooMsDXyoknE5BzxaHsFUYdkxxAsYWXxs3ZKECLxzwf5LuVYnHBu",
  "key3": "5wYCmFmdWz2rh1hFC2m6E587NxdhvUATUyq5saXNz56YxJZ9yEVjNr8jNZgWYqb9cmY8Mxe8RmpKBpEuFpFPc9uN",
  "key4": "4p1NZPrhCgyy5UT8by8X4NEk3KGk9pnakDYvJtCH9UvJxQxt8AP1Mz7NaErL7pmtCeMCYSxvCNCtAfXoahioqf2L",
  "key5": "5ztje2ZVtZL2WnqyACtE1TK4ZhG6SgkYoeGSszqFYM8o1Z1XbHN4DinzSAQVjpB7zdG9Wa95dwiadqtemFG8QEPh",
  "key6": "4UrrvfnyyZ2D5J8bRGfNrJpsXDEcNaheiRhpb4GcnQk1W7QX4PMXvnsxFSk8ZDqnWPFbtngjLQeoHkdiK2Xe48oa",
  "key7": "cjuN4oK1cyGVBSrH8FDCJhZhrN6JiMvNMFPxBuitS1VgzTib9qFtD6khw96YxU84wzF858mg5JTRVsTpCBhKKUp",
  "key8": "4fmY5gJc9bWMpWDFaeykmbzELF9deZQ19yQBz3bPFk2R9fpivVGb3rgVFg1wkynvmkmQ3DUkQm8zEiQeGTJz1Aqh",
  "key9": "3bm94EoLtnLwSSnhQbmRXt6WyntAjzJNdwNNabCQUqZykzpekkqAUeCbyo11SzUaPsUDaesQjipjuGnckJb5cryw",
  "key10": "5AzfXrS6vgxAta3sjrRsdzH2K9V35RGEvtitugeEJVbvEYoYJwmj5D1ctpS8mpunfwJeFQJUDWXbR2qpqTzvBR4a",
  "key11": "4X7ZFz44fLoZDzgNBRXnvySKjpDCUmpvknT4jwBDv59AFrtTfCHyhBxdsrDb3HjYZcpdvcFfizh7yayWaKSAikQG",
  "key12": "5RB6gJw7Ww9sz5j6oGkXhnmUkfTmmeb66EJjeb3Tg7AX2j3LmJSbnSS8EKLxpzgmNabqtRURqYs7nVBgN7MkFWTv",
  "key13": "5FivuXukpSkQga15maVzPoMYust3xUc2FzkE9k83u8s9N8rN1TWNU288XBkvXe5AzUSzNRkERvsvrkt9AXtR9Wfu",
  "key14": "4dxEx28RwCcfFW2KMBd2484eeXfSBms3WeJEaPaENR5Fpy324vr4k1jGaDZKvznXttXuJRTqMnaJD7MTR1FutxgP",
  "key15": "5nURRgzUvD7sEthTGdMZyhDrAznGdrAgNkycNgmeUwb28So2h1wLsHQmpK3rpNdSGRR9tQLHzgKm97Q4ysK6nyEZ",
  "key16": "mXPzsgTk9xhU2DUviLGdL6JQtXfEE62nkyQGRQPXYkRBkAaYD9PpQC3xSuM2NbZBLqT6PEt3eQty7jCBjjFHq4n",
  "key17": "635vWdJT7TZfRXb2jii9FL1QCLjxXXYSXLv43SAthyYHJSDejdmWFrfnQkhCQz3thnVXzNUwmHRfU2zYabukDfp8",
  "key18": "4TL62q8ZbWX2T63qMD8tv728Z5ekDPYbaxzg752DwyK448ZCF1nF6FqXBs3pGoep8yZDoayQHxFQhS6AdwtJ2s5g",
  "key19": "2wYetxuwpme6KUdoLSMJrha357MsdJR6sfNYeH2e1FVhBj7CpGXN9BRLp2FaJAeqJxvgAB3sX97UKayrvzn2RQBD",
  "key20": "4UJBTxkp6DdG3iNocc4hXgu6Qgnqjb1mNx8uqt6Se7fqkV3o5V5Am2avwyN2pHvbtFR2Bj3kj9imFMCD5AZo5DoF",
  "key21": "33p8Kqcjm37468xMu8YfvEGiRCPtVS8NpL1YsBRqhaW3R3hENpgND5pPa2BPtcN8rBip1vex4q9ymhZntszSzndo",
  "key22": "2c7L5NZuy333z6nSFujjZP9toGrpMj9sD8iTLkFfMinDU18kfMvPvVGSFkHX4vY4v6wqP3myMrKhpbofkxssUWsC",
  "key23": "u7x9mzLRtqtZjM8gAtkn5j7cUeHgP3rruR7SsFQmaQz4mHVdVtbFyRRx4gEHhW6oe6uZqnMJ72V6LUa3qCxnK47",
  "key24": "5eJ8tcRU2WANdbRoaNdVJYT6C3cC3LWKfyWmj6uCptpfCaxNtNNbsLSJvTJPeUqCxvARbPT9ognhaxWkkbMzCiWW",
  "key25": "Hs8q7f7fW7WzLs4nQZxSTjkHve9r17V9gBfxWw63iL4awhSq9DPCosMh8TwVsWq51DiUAWBnLB9Pf828hpwJcvE",
  "key26": "218JRXmNwjJu2QWPRPMte9XrKGyYiZkcR8EfYfR27GtHJTQUtuuRE97Q9KXq9AwYaFsUqHs8XULsqVdvCnFsZ9kU",
  "key27": "j5Lx7pfqNoHidktEq5SNCNTszcGndrDvh5p2rThDTUrsPz6SLNuqmwDbtFWtwndYJobEpyLdysXb1U7kFhTvkDA",
  "key28": "4UsmgzeXyFYK6FJNr2J1nX3tkwf3w97WXT3HrvaozWadQiLV8m7T1tBSsN5QAjpWZuWW4LuhoXRmE28xTG1UitZE",
  "key29": "2b5aF9y6SFye5gHhVD8tP9EbihkWwWB1KJtc8ArdChHwNZ7n7n25sAkUpH4WRkbZxuveGUjUJ6wLdFZhw3K6Tcds",
  "key30": "487yAPGjuzQrvq9qze4f6r2iAi88Emq7Y6TFnsoGpK32cWRTY8GGZZpPsdDw47JZ2fNoFRuf8wVTJVL8JGeu1Tu3",
  "key31": "5gp4txrbntEmUueCcoYU9khbLEybzqipHQRwEMqp6V1pVN7tdWfSdZF9S7uH4cYQZXJm9eChq119dHLF94zo51QW",
  "key32": "5XmtdSpRVuC7w67iXfGfXE1vQ5kqpApb7UuMMybF4oSrbvFFkxdA5MGSmjhEKmDNdD7tYzpbs4HhjLDovV3opieC",
  "key33": "3r3DXAsKbcUwQir9FmDroVy2r4tshx84tk8vLepEyCZVJ9A12BGEE7YTeB9FuNkfMiqUUMqTXdHomwa5uGUyPftv"
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
