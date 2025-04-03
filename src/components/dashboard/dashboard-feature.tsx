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
    "4N6fzjHepTSfBLHXChrH7MVPU1ZYMRfDSXFwo5ZjChMss7Lr6LgfyoNHkXVBNp6DBHV4Atg3jfxSpW7Hdaf9Ex3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38FScD4X8yzvYMtrDkiDmfcGXW72engNKu3K924vHRnr1ovKDtYto4Z6kJfsHVsyjAF8S63RNKS1VrSeq7M2nWKV",
  "key1": "43ouxUPV5cHzkZ8Ke8HbzF13zBbPSnihJDXG49R1sHhmryVQeYm9ZjUGdJKyFiDAv8UdHiiUomJko31BrGWmGfmP",
  "key2": "3c8KLojUxDmb2aYCvEdgRguW43VdBV35P4XLwM22e9BEsQnsa2byxVy6uqEHc9zE7EB5tTFD2GchrrD6ZH7sst3V",
  "key3": "3GhQ2kUeqhFogPUumYKNWPb13w6XQQQ6BjiUYbiunhJXrxNwZCAjJe6fwPxkkHjdUXAYBqaGVaRj2ED49W34dKCS",
  "key4": "2QyivLZDn7Q5xYgsyDoa4otvBgpaaCyy1hTLEpXxdwe8tPaYYh14hfwVh5do68JC8HD6Qu7YZFQxU8K8To3AQU2U",
  "key5": "2ZVN9qcFNH31CckkQ9cj7duakKrXuL4ag9ardMoUVccYDrXaQivqAoDbLxcDQMxAB9tPA8VtkPMkQxMgHZPtePw1",
  "key6": "iQXB4LNL722WmYoi22voRk476Ubbk9LxEtsEgMD1hUahPJte4brFDfsamUwwpr9FmHfUsCAGfbRaa6kEjnAY7Rw",
  "key7": "rx3HtgXKUZie5w6XUQ9xoCmQA2hZPs9QW5Qucaf9dTLnPdJT9xiY7KHFeGZoEEHuwz52TZxEm29YBRA6hHcNwDF",
  "key8": "5a4KGzdFC1xhRRAi9AeDHT53pxKgrvZQpv9ACfoZjwL7NyKTTbp3vV4cqiWRMcwDuHeBK18QGS8CLvTN4vNH3b1e",
  "key9": "2jmqtJqqM9qtsUFw5LYqSWnjbAeap3RnyRJnaSB1KxAC9rCHnxEbJS4VFHTz1MUF8E7svyQmNcJ1hc8zmVK5CddW",
  "key10": "5SnTGKF2SoQE3nzU7f5UQPgSPNXndqkXE7utXAUcwGq6xZksysfvebZwsYdY3NifjMk81HtmXQ96rsoaF16A9jXR",
  "key11": "5zLCgF6CXZo97AqHU44qVqUisMAT8LToDXjB7yPSr4EKTEJwvntTUo2CiJHfksmpZAbjNkyx4q19c4Tcxsng3x6y",
  "key12": "PDvTHKT9imXzKVUSwT7j2Tn5myyoCFqbd8wAoa6G3hUxYu6VC2X4WGtCWNLz6GN4q2AissrBojNoaYsdk15AAbJ",
  "key13": "4hUqtMmJjZJ284wdhh2L9Rx3jd5aYnBoqNVLhQc5tNwHX8ma6Gd6wQ6hkGotuUrQK2VL7DgJBWpXSV6oKXBJ4ixW",
  "key14": "2QvRh7u63Yui5UVY8DzNWNt1F8AvVi6kzEARRw7tUdaqNGpgNnHGb1MihLhtUaKxsqLJHDJNh7R99jZ9tjqPWnEL",
  "key15": "46LHRvxt6it6HTiqVntTwdBPvbb8EYwt9vTR3Hu27hCJNnoMWb8pJsCXLxVsS2X4KdN6KnBWVpmo9X3bz14DxcJw",
  "key16": "2xPEPVmsvBdmqu77Adjq9JFZyCsGqmpd5S5JC97umqsGAykac46MXD4T2rKk7DtPmjngYFcT2S9piELTLo7JAHSP",
  "key17": "5PkfMSksrVNQ8S2tjjZ6K8kF58a2ej6Keya4E6YiXit3pHsPUnSNVcaQfnao3AnujQNN7h5JDWT1FXd8BxTLmog9",
  "key18": "3F8Go1J2zKmtQCPxgC8YcPn1PZuJLGu58Hj1mbkQ2SBTw1mhMQnHe1YnHtCAXJ2odMywrMLHgN2bwdUvMGk8Fcyb",
  "key19": "kUp93cuWik69GyFexQBpLyVfKXAbqLjLJKGqC158GVkdGCQkECQL9j63tmLemfmvLGWm1rDLKxbXUny18TjqAeg",
  "key20": "2srvJXeHbDiLhtAv9HaiCRJZjDeMFRHzY1EC8QxyNJgrMzS2AknE6cwgSNY7Uz1y3hoZSxgRa8XFJb35baCfidyi",
  "key21": "5dgif8GtRS1ggELt1sdzJRHaqtxjuyaHcKQDBVtw2GoPf8R7uKWh8TGuAho3TVQdH6v966QC69zruv2uf9MXTwwV",
  "key22": "5uK5vqsuXBMQQwy6hRshxWcqNjxae4UKphupqLZL9q84jdhkHYk7bH2p3r2z8ehvUeqA8EpxjHU5oFfsdBuwhr6g",
  "key23": "4YFTazHxrNcvCRWJNcPn3AVEdTDSFvVCBnpDfkxUEVrvBDPsT8vT5VrFtk579GUPtrtQwqUqSRFKZEbsWjRtj6qv",
  "key24": "455sEvbszRxGTTsZRA8Yq9JC2v9pYqjKAcr1PFsDvcJ8z2QQ8k9LPRFbink3KqxVcWtX9D1pq8ukNRSUvGV2eYfm",
  "key25": "5wsuuCQjNnSiUQm2JvMz89Wg9kZxhXXhNXFuvByEviPXS9o8vPXxLgNAxWf1PwKvywyrkNEmUgT9siS8NPkFmfZC",
  "key26": "5Rn8g3BbPh8aifoAfzw15oz8anPi9By57uWETVUjBExQ2KfxqBLZ8uEtcaJXFFheMSVHqN3anNghoQfn9iZ4cGk4",
  "key27": "2Jg3NwKH7ryFxLVHjcma92mNnLc5Zw23QTFhFkXW418g5DfutuzqmKQQxRECCTXZ5gxpYxjEUv4obSxZNDPuDse6",
  "key28": "4AwTPXT7ho5cxWkv6ZQcn7T3a9U8gHo5yB6oenmb6Q4MN9XwMj2rsCn5CizGKhfFCJjEp1diQNJYcmZdCxoEJS5G",
  "key29": "QwuWohwPEax9TzGHQ2THWuV7g9mTJzzZU86x9rDus7iwtYTBZsBKqV94brnq9DDmyHjXFvCKZ1dVJB4CBFsnbAp",
  "key30": "TqSHuhuAJsQsZ8eptXB6bUce9ssJy65FC1VJ8ytWMqJsAWMG2RDzbCnFbZSLD1V44UZc3P2A9JuvpTdhk49VAnA",
  "key31": "5rNXW9rmZLegQveeX2eFf7r1anL9wQFXw3iokXYXc2J5MT1RJ7JAG4U8zcL1xWPvStpjG8bA79LHRQThttSriaPJ",
  "key32": "5b9mQBUcstqctokrMQaMizzh4owB6AGTWeAEfqpYjQFqwoEkKu9rQKeBEAhXmDBRcR19y3UdbftKuKt9fp9WvEX4",
  "key33": "4kQCiEnXt7nBKNkdYxrRoHdKBxfebVutNghsQSicoCm5xkjpSB9PTMbXL1kmM2dMCJMADF2CWjDDFRtbhvf5LN7b",
  "key34": "5eYYyyRX3zpwJY89J7zwtGVctibxtKy1AwHJwQd5Jmxn6NMjA5SpGWTmDPVGtAydMP43oWUS2PhJWisGnhTZPYoj",
  "key35": "3JVr3WJamQowFoYyN4rN4ctFPaJJvTdUoqRRU91wZ3eWHvcYuYRcPqvZtn5RW9dzaRaqjk42EGsLGBTG5jLtYX9w",
  "key36": "4PDqbCFHWJPDyhi1BfuLpyNvCb81dK6Q3qbUzscwXrxv2qATU4jDVCeUzdxqrTakRAHcjxWJP8u1uzQFx2Dwqa4a"
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
