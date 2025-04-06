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
    "3y3oPzTkHFoNV1jCVvMCZ4BZ5PPyz6Gmp6vwhs2sJ82Me5huZKyq8bJc8Gr51uzejGTZqcMYJ3KPXmv5Vy5gV3t1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LtvqJfWzexvrcnGBHYZVTuJ3YTcUwUzsNoiwdsnb7rSKqC6vJL78dkUb2q9HPsu3uAV4tgrnPXG7oawjPctKwp5",
  "key1": "5uW1jyhQfHywPtSBoS65FukxuxnUYKPybJV3yGDEjEg8ZnjLcR4MPdPNtKxmV3NMLVNbs8qQXHHw3eUC2eKheopq",
  "key2": "ygcBeHPsPxL7XNuS7JG8T8wapd4BeFxcD3LfipVGiFLw8pKrs77Cb1nwFZQgi1eYeVpkAWxSYXYzvJajJ4AL4Kh",
  "key3": "24Td3PKpUR1rwPGJdEgPo7ku9hYLwZ4gSkCck9ot6pq5Ykz7xqg85jCh37QfD6hw3UkwCcBJ7QAhHGCET15qcd84",
  "key4": "2Lg6zf9qso15n3vVos4niBvtgzCeQGaZLACQRZhH55PGFUBDHW6fiPE6mj6y3WTQTQ2iZbTsEz7cHuok2mr73tHk",
  "key5": "5f4yQtqAxtbH8ZzwvQgqzPmGEsDWi2sSrevM3sw9CWn5dYPAEoP6oWv3WiMwh3JbeUtG2nSuDEJ3JbgHuxoSvNu3",
  "key6": "ZDhEguGyib63KEpYNGEchmtLrzo9ziRZnzekbyV37H2SMF2SFGACs8PdGJbkFSQXCQyRNv4hzz3QyBJYnjseN35",
  "key7": "5TrVotcpjmjb1qAyfQ8TSqyuUHCFdSDRn8k9WcqGRVzgvVEyD2twt1DoaPYDqkURMQoeV5F7TW2oCPa558HD4DW7",
  "key8": "565QuDxehie9mA45G7MU9wPJEpJMax768aTW7AamdRv3iBMGrbxVNBXUQpfEHutFTYxyNKmYUfaiSqY8knGcSADD",
  "key9": "2oVeNccnxQ7Z2LeNpzkbkyxjXokUt2W1CKJgHijHu1Rfam93aLowmtC54Q8uCGyEZ2HJUC7fnPV1CHeegamk9BJc",
  "key10": "4UHVopcmXmdZkuENJqescHEChPHYf7NwNoZDim4rvAzVLYmoS137UjNrjhV1jk41Rtyynf3mwovyzSkEuLCbiw1v",
  "key11": "NW3ptxKMxUGmKG9tWmMreVfvn91wE5JWzMEwMYKMwkywqJeymRqxF6dsuzfhS7Ddyz9CB6uv8XM28aR6zStfvkr",
  "key12": "5yVhBTqotKV5LQL9JDjgyriHC2t6o6vVyXUSMVzXC8895aQAX8F3Gsc4M3v5BV8W9UFhSCB8WN8i97S9tbdaEnWF",
  "key13": "41f2vosmiEzajvovieB4UGkkMJEPxZTi4TXDAvVqxNqK6rqKRZr3uzWuUMR6paxarcyphw8ApsA54iPt7QL7tahA",
  "key14": "5UHEpzvqzaTj8uLppTPb9yp3sNxPS1K5537a1J9NgQiTNK1QoouqtSQUTRgPuxYkc7fhSbuab2YCq6nT3b3tcy3t",
  "key15": "2VLwGDNXovFg7iY6VjHbuw7rQU77bmBnupNvZSvzNf9Quo1gMBGPemLbxa8Gtqtv3XXksvoau7dJbrzsV335Ep8y",
  "key16": "2dRsWkeJYDLuqkZ7FNJRuS7Q2wrRms3Y9MCKVpKfKuEqE2VRGETkKa7UYapB2ZWqr2hCU5wtN96FBt82CTVY7DZF",
  "key17": "48qs48Fgz4UkyXfnZKwqyQ94KB5ifLQF2FSSMfCTvBQ11jgteXzFcQiY7NQbCL5twaPcZP9MXJ4xxF4KptCEwsdT",
  "key18": "3Po3j8hvo3w2hWRX8R72MXZcAX5GvtYCoUVe4MTWxkT3YBqMmUuUMHhHRRLkXkFuyMBoVRF9BsDoCsqpZkARQVqQ",
  "key19": "2DeigiBgNiUYYWfMZvhtw9QAtoNRBAbRxVdcBDLs981Vhz2jtrLts82mTMgA7Mf8QJ2u2uK2YqqeFDmEdxYFuhDi",
  "key20": "5ajTx4f3dxqJYtGYCydP8t7NpHLYY8fZyaCiYV9MoJVKZ785DojbqvuwrfTQjpgdGCEQuzVGHVn2ptV65Ht2ePyo",
  "key21": "2CQvJ9ra9Z81z4UUqj8KGvQVea1pcRGG4fEAQd8pBVXPkcLHQKTMBz8xU6Grs1hhB45u4qQfphB4B6DN1iYLvc6R",
  "key22": "3wJi46Hwzo7KpBnYSNQGQupUbRYV7f59zZD41og4sTDksB3cgVwu3wN59cMJFuPYL7cGxrSmgNNXgpToMUFLS43",
  "key23": "3M44KsE2sPXBrkfNWepHqwKLFyuWDCJGNrrAjdqrLGx6g2tm5wwpFhMaA22yCvgCEkjP9W1SS6AKvLJ5Ls82KAqX",
  "key24": "jgNQBH5TPAzKqf7jP4yuiLSMPY81B2qsxPhh1EdStVMYmYn9f49UFN2JXSyuZWofmF7PwrWNWEjQvEFMrJrTn6Q",
  "key25": "5oTscAKAJ7YKLfrhezS1BNEPWrJaQzvQxTpFTWMEDtXUY6pMpQtPXVG8SUNCgAVRajWXMpW9UuRTQBCUCYCHDB6P",
  "key26": "5erhr41YktnfWdhPi8kZpeQ8s8LrphCN1DMJrRzeYJYPHDf5TkZ4pFiWvjSW47iSGVee8KGLrAiRzLvrbCGm6Vqy",
  "key27": "62KRNQZSDrwdyzkaiWSnnuV62mYswBZJ6SAEkAYVFxPqwr5i5ff5rZcNwzCVZtfGdpyyNTGciyLgthBugtXc58rv",
  "key28": "3wkSP4ciey7Rjmn6vdpQry9aqcxH9qFsJGhmdnWY8aFx1FezsXoUYhSSrhXR7gRA3H7abWcUgJBrKFvtAmteMM1M",
  "key29": "2QwKjTP6rj8UYo3nE4uvwZ54tDneX3VVLGn6YWiBLYPgML7poj3QMREHvCUpSZsqFkGQViEHYXU7f5y3VjRkZMmT",
  "key30": "5oMLwpqoBxkKjM9vjaNUtAAkkW4xAVBb4Frz71jspZBajw4bPUrGXVTJemoPG7bBf6KRVXeoukYmfUVvmGoofSuV",
  "key31": "TQ4NUcpM6bqqyYuyQCwnHYq8njQagcAq9Xh3Wak3R9XJHnMJBauB52WazoLgEWUr9MsnNK79gQewtEXbYXbftvF",
  "key32": "2yiSxHzQjMJZnGiZXhfnhBRu9qXcvxBG913XCap268iATy3fJezoQp57YMjPjyx3aCfmvkaYfEmGSYsoctmekqpB",
  "key33": "28K7mknHGV6b9zCicrRo4ocEMAja7Dd7CmWLsh2rkkpybCdmvUdistZTnzwCv1hGwNa3a2roNNxVPgrNKBNei9dm",
  "key34": "28WGzuP6FodnvaCTpXummLV2qEBF3KAxRvAgygLfn4tzENiTeRq83cUprw1VTRRx2ZcH371yFPVtRsBXdFSDmLEV",
  "key35": "4qQyH5x85g1Q8FuG8xJBEEGKEaUurEwdZFZLDqJhC1cr8BDHsBXVU6zkJiJ58cGsHuVbynEeJ6GCeJmoEMJ99Dy7",
  "key36": "4qsKTEqagj6iS89ZvsGLiinjXd99itJP3KSqZn38UQ4NLj39yvDUPNb6qrrHiXrzwrsbHdkkPfvNk1xA1Yvqztri",
  "key37": "5YNhQjo9JU4cBKv7qLZV1GMyGfvU952z6FHF2R6FAS2WzKpHcTPiFMv3S97h5GtWxTENKQcG3GmBN5QDy1LuYHpV"
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
