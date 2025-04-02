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
    "KTQAQbYcC1aV5kAsEPfM8nbhJMBKJjoQNWuL1QS2jXnyMK72u2ViK6gNvufK4h1dJinvpN9fUkohAivoLnvd4k2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64h53YLHddvWGhLkZKte27yJidN8NPzrngmpKhJN5g6YFd8MrF9NTqVfq4EEiY81ggbUF1gCVexcNxdNAVh7izrY",
  "key1": "Ftr3ELvv1adPLefQkqeFBNQHREMsADr38mFGjqicuc4CehLchkm2eTWh4nYwaAZdaKxTmwtdQfGeLqymHjfKqqV",
  "key2": "65RkqsRN46n8d9Sty8T1KaTPUqF5jNSvhNLCtS1DNHH2TWiFSxQYfztosMsHBNcBhaR6ayhUmpf4WWLd7oR44LSD",
  "key3": "zcmhckFGrfnWSpi6P1pHzDvb3fYogTbnz9JyN7RJvtFF3JMqPZdc115QT71KcY1DoEyXnJqbfxKrG5hmdtCuAj8",
  "key4": "4WeJXvW8bUeZWtDByZoXoAChFF5enRL9MjzJ4aD1ZUobXySyvqLv4vwPuoj9H6HPLSxhzuajJTvSYoMUYyiFiTtN",
  "key5": "bkPVcsYHuhHQZieBisRzACsBvfPwiVvE2jfubhBVJwMUpGMaPKjgoGdbUTw57oBNVogXqaAnYkWipZw8mVAZTvm",
  "key6": "4MqNcdRpMtqwTSNX1MyaU9PNeXLeAwWt6N6amwZYWxqpbvc2GFUew3wrTBAAzzcd6q6vR8z62ah8kg7J6oMyACn2",
  "key7": "5khmBwj53CPZ2A4p3aDcVUQMTWsNoFFF5JSv4R82v1S6FSA83FJv1dZAfqw7WnM2YVcp2UV9rGFqNbEP4NJWZ7tx",
  "key8": "2FMptS5w4ktBcCNHKeYTFeVciuHBX5jajN4BhwSanyCDiVmy9KzxPd7CTaYAfNhy8GFcHy9k242BjN2bLcwu5a5q",
  "key9": "2QQBdnWwjKUpn9SEkN4w47HhighqdjL8LpJZCrfWj2cbmocrG6nrLTpaQBivRim6azBPUMPFDeRkejsC7Ezrjxxy",
  "key10": "5Y3odmFNPgpEnZ82GBnjQ1RqrGi9vweoxdSHp3c5iFKp7h635hoxxg9YVhgiVs4ESaCLzGE6A2GCar9w6zyGzm4s",
  "key11": "Jfg9EzrUCQCF3qWRy27R2ZNk1f9G7Qr2XwCGQkQC1xrCZgZPRz5Qkq3uDLgXSvkALU1Jm649HSt1uwsyvk3cido",
  "key12": "Uxh5YwrbeSqEjFQpwzBpiyb5MKnsGZLn8GPnWvhCqgGDSd2WT67Tmn5W3YXd3jvniStdxxhQGPf4SQu1YcAY5KS",
  "key13": "2S57Tj4UzAsvzEcRGPD5YEGmwKJyx7QeY3gdXTHa3zi26DWxE3iJP1xZ7Mz2VwgM433Eh5P443bm98MqCNH2GE6a",
  "key14": "JTqnt7H8wsZMjhXdpW7wJ6EtuFpimvSCRLnqmDEmFpwU6vNABUd9WFUvZPdttm34Etno9DKrMmog4ksriY8bJBT",
  "key15": "4grd4ayEb5gih1HrA6NpdxN9cDpgoKvhWpsApjKWCBrN2VC3Zi4r3QAhSn8ZZoUgWhqR5L28Mrw9HgS1kFEHFLZk",
  "key16": "2vCS9iXsDf6vQ6KSuq7hPnxZKr2wDzD51vxVhaTfK7urmteXrR5rtGStpD2Dm5foASCs9Brc2rWmHYjX25T1j7st",
  "key17": "2dimCzDfbpp4qExJoQLHK6WGipgzLxReRwE3LafVApJNdB5k22FVFrvd75tfzxvX9TAYPVRDjDfJoLqx6xTg9Hfv",
  "key18": "2qYBSHipAULGsQfyGiPAbkLscHvPo3Sa2mQxuxbNB3V8J2DZtBTkrrekppqAbSTpa2FbsYdzPVTtsvJJfcpKtf8d",
  "key19": "4sB138JSZQq11VTGaxVxYjV1tV6o95Wp7dYqUc2UxEjQGmToKAx5oDwTW1T4aZQSamqRRLWYGNUmoTZAg9HF3TfS",
  "key20": "cygEDaihQZMp69Nt3ofumxk6RZbrzsjHiwjd3XCPKtkr8PdkjAsTAskxTiaczm21bChPVhnZRiEFGeVtGQ5ujUC",
  "key21": "2YhNh6jtMSD2NEhZ4ZZUncrTh8gDAXfH4qikChQb7pwfBBoivJTCjGKWoVQruwpczYhDFUdWEfPzHzLUT978ZCLN",
  "key22": "59Gt1S5XPhDfTk3qgN72RH3mgV731C3iHEvHsR5vLNnedoMfjrxMBoodw2BNne7CZeVCGrhVybfwz9dQqxmdkehE",
  "key23": "2R7yrHE7HBA3CGBak2qxB5RaNLxkhQxfjtQcrxmAybb3dnF7LCPvEfUgCv14UG1cYU4XssXc1Vhc17em3c3PTme3",
  "key24": "2hK7HUnUnFb3i8rJZxurWuUGNDdVZQqayd8d7TcZPxFZ6PG4bvp3nqGL5npfNTWJ5aAqX8tWsei32vP8hVaoEp4m",
  "key25": "4Jpu6B5rXSSKueV1zJSbTEeqiKbfVzBhSDjLefUHbzgv51bkiCTEqnfbrCTD94XYLqFfAopi9WDWZhByxHaZmpL4",
  "key26": "5oQHCHfpRHcLrjrcZWdWQFQq6aeftHbxVBq75XaDUrqRreCgp2JTSxJgwwVHt2Bi6zLcbjks5uokWS4oi6qoYVfj",
  "key27": "2Efz4DxxX4G1vVMk5i7R9QFmcHXxkdHg97Y6rraL291hyGgbpqAoisTts5VHGaztMTrrA62szLM9K8RpPb6cdnXf",
  "key28": "5vhekLchjPPGyHhz9vZu8PzibnJsx2X2AcmQBhEpES4vtzrSFgor6ZZtMuSJGYgehUV28ZDekRDyAXBBWJXPK66b",
  "key29": "5kWyjmF8GAS7Varb9DfHaKRh4zGk9b7dq7fzgZx4Dt6gLcAREtvWmV3dbPAR34AWR7pssnotaeaZdBdBS1gUL5My",
  "key30": "3gbgF4XsKBvPWZNNBJKM2XiDA1hpF5UE87cBVySTQYbLwB7U1DoEokuTFKSiLQUymEVDnRHSSJYStvgUz94bkBHv",
  "key31": "4Jx5TxrpkJNK69drtkVeGCxbxouqWgxCpPXqsEWwY9y8oVDBjFbJKtNs6tdTPVzKGCiMfS1ff3vBWSqYAxVptC11",
  "key32": "3ick76hcdZEetUhsBmciPW4n9XJYTPzZCPwfUcmx4VQFR7fbs9bySqhueJfeHxc7XN4S4L5jcScJt1FCLGRtTQ5o",
  "key33": "5QTXHBuonmqdihp2wLvEWDwCxrS9odSHqimPMy5z2yCd6Bs7tie1tY1QZYFxnPbs2pnTdMVpPGWxuBBni1qcq4CA",
  "key34": "3PCZLd92KoQLisN8wGahB6GfKFUTTarpoaJ8G5yB9wLUtT8wBbjC3atHU6ZoYRboGmUQqfyCcFW4oHKfymHxomcC",
  "key35": "2v8MEWREzmw9jCbi6hH1AbFdrrKxFHWh5R9BaThMZg6yd1xS4XeQCfCxJrDYR64pPE9b46WNDeprfDJdgN5rvrzH",
  "key36": "4FAjpfuRa8vRb7o1AuptUCGgee1wy4kxpTPFaquirD7UoFtjUYEfvwwhy8LdZYtAQqY53wKhZCpZDbGrSctVQ2eG",
  "key37": "cU7hhnnqknihHk8upLYuEssNgLZWHV8zYQbgjQHvBYS7ztz9pdRkffzH1EYCV5jZQkhNraSQDopvQEMcfDSQqzX",
  "key38": "ttekYvaXjoY6j7GjXZ4Jo6gJx2bTqapNrsi3CKXCAZKeCyFBiohkm6995HeiTPrapbBfdoiXTnDhgCyi4xGMuXN",
  "key39": "5YD6e8W6Q913jdGFS9iaXrZQgLoQD4Hte6NhGmozxjJB42hM8Tp4ZFYAVQuXEes3NtYaJNTAwaZx8bKSLjA6XDGH",
  "key40": "4YyvkVGCCj6T6KaQqrGmmSFEGCEd2LPGnv2RSSdKaf8u15a55svHAi7pfjF7nDacemg8ETa6UHoSaLHi3DYXju3T",
  "key41": "25ha7Hu2L5mCsvbgx4kgvZ7roz7syjo8zXiWtEyPTpRdQPrMtohSqriLvFcJckpMoFYQnuw3pc1fhhJKAVAkrx8Y",
  "key42": "4DN89e5M2JWGiyMuLqvFmG7nnW27jPbeshr3jGSgQ7LnNNNeeimv5JMMPdyWfjCYY4Es7WQQwzpNM5JHWcknLsTW",
  "key43": "4Tgkh6jnezXjDqFraMb2wk5kRnNE7vTXkJYgtkRTsn8oA9FryFCkKZYgMdTPxNdifMCnpDnHshp1dmHY5eSgLynL"
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
