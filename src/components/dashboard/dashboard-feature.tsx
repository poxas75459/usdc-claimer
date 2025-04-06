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
    "4LuUG2nsfurGr3oFsfYM4KSXi8J4gH9XyJu4MbnGVu2AuqQaDhaqUkAV3x4tMXsQyfDewrMjrQscukYGCcGA5sru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fBx17R4rmX8Td69qu89pxdB6k71C3GWcGKVyUawY1EZriLicdBCt6SJBTtRgLsgpTQsdeqK6Lz3jJyDCGvBhH2o",
  "key1": "5Grthq6y3VPNiRyKotggvMb9GK7xvYToAtQB6wzjZpLm2iFT7GxYCDtYzVfXEuhrzB3LxjYV14PcUAzL5bKmEaWX",
  "key2": "o48iFUB62xXHesa6agsfeE5j3fTJUFdvicXnjzfbDyVdBC2RKTwADA9n3UYLBh1FyajMGRTQsohykx9a8iEB3FT",
  "key3": "3aoKRz9n7WT7zZ4SpmtnWBLXeaZnnSFk37Niwh3ZaM7M1kfPtCGfEM28PCN5vMWvA6nQ7UBAupUvYSzeBMefv1T",
  "key4": "4jA5byvHYTLgEVvFJzoqJ6bgzsm1LaM8fE679Jbn8RsVMnn2Qsoy2n6i5vgdERs4RJexdTBeuiDz6YVZGoRSeyfj",
  "key5": "5XZB9u87n9y417xkscaw5XfCgLudQWtr3wbJiwJeX3xftvCf3PBmY2eNsw6PEki1hMFMUgzYEUMkpEjYAwAoriTn",
  "key6": "5imF8qdU8QMUmD4EDKHXK2ePXvBgUchZMtyFGFe7YFZpBw6jSEjCDg4ad7GCCQUNUuWLT8SWoyDrJQEutJoPNViS",
  "key7": "4EdxKv3RDQ3CvY4YqPhhiEYSPBoPLqjbNWRrACGSCKvABmaFdaYj4e6G7iKvoMeRCp3z17RQtsJnACeBUHre6tLd",
  "key8": "DBiTk9WDYEAfAuxr48JPRaeRAiC2ghguRhgKPfXhAAH6yueJ2A4sFrCHtBhxsSALaA6tsq4N3Xwvqr5nvWPyxDz",
  "key9": "3vdih4S7D253LzHUUcMb2z7PGCLX9QdKuS1inZNTHTXjtSbrAcWeoew37f7173b6q1DuHTajrNv1AbbHUp2KoDmA",
  "key10": "3NmB6gZDQcKd8XwBqmLk8RMbniudhhWBnE5n995FS83pEDUfuJYerUZJeBgGmm31XUfPuZ6oDjFyg44ZjFxLaK1K",
  "key11": "5RFCUX6NiHxfAdAW7PD37rDexV55fPzxeXmtGsQiTgj5GEeaPeaPvgnsKF2RxrzFKt5KAcS8ZSn4q6guZRxHqdRw",
  "key12": "5sdSaSUs38ByWoH7BHPJfuFDataP9kvX8jKt48Ga4ZPBTQBbQeGsr2Tevcnrz1QaWfwiptLovzgS6A8gaSF3kr5k",
  "key13": "nXfzisVwHej9ija4meX75wSmH2LsrDUAhB2n1HoQVpJsShkwGT15MGkejAFDtvWrh1jVUhJMgBz67X4SY3BVpqa",
  "key14": "3VRUFCEbpHJwHhCcBFZxVrmAejz5rh5kuW4CayKRReH867QxHSm6U5bjCLJ26LxfaV416BDGUj3Z2wHZCBnLNKsR",
  "key15": "5ehUmAmicub9WEdsmrzy7rU4tkkaqZnQQYxtN4RQq8J5S53ULkbJQQfPpESPtMfWK1aCmDdXBhm9r9MAJivDvgpx",
  "key16": "4AN25MkeFNcMQ93bPeWxY84GcqYiaPfNfPywyCRP5GUBZLWgJHJUaJ7ETdqJ4ppw7EXZbxXAz12bnvZg85jkYUsp",
  "key17": "4vkaJ3Gc8kXwrqV51MRxuAg79xQGtAC1mnGQ78WGGHUGcXNgE3q4FMRv39whVvfuDN2A5tayGaifSo7y8RJ7UDts",
  "key18": "2itHwnWn8cn6DsDFj82Hrf27k5yavtG6yWm91brkwiqksoUMFFYWQwZPvf5ACpzowN3D8QrEiCpAv1761SbRyaNn",
  "key19": "2EHJYbov3CRmUrp1t5L3JEYAD9uKkRhrpZkwfeQnTh1s2CmEsQd8xsmRBLZm1ZdZBTPdEPdcyc5PXvAcUshUsHxg",
  "key20": "5XTLcaoWaMK86ruiUcNaXC2jj7Pxn8SWTyjeNkrge1teQQLcWFa4NYtngz1fiYo5AnwyiGgCbAqa6t4PBK6Xa8HN",
  "key21": "5sJwf1WJFAxZQ89Z1m2dRZCVicXWXtuaXn5mF8gaJQixmcad1n5wofsU4qeDMFRUxeDHNV28W8iPhFmbymd6xeay",
  "key22": "5eBVzc2JdbRtKJ2xhrWb9XUEwpUChX4jWxjztfZSU4GEY4UCoMjmTMT3Xw7SikvizwS8PyTQz2LicL1Wgez5Q1Kd",
  "key23": "5rvRw6UFR8mvxsKLxBoeJMFfVhUffXVgNXG8NGC3GctgPnSUYdoD7Qp9CwDFJDLAx2bZjRvLZL4e2Sk4AotJiVYP",
  "key24": "4HES1GmXYEsXYRthjx6nEMRzbENzcxKPXks5m5aMyW7cNPtgeQDBpQkbkDGRbS7dFaVHfNzpVqjjsCqkqQ658rn8",
  "key25": "3pZZFvBvbQvGy8S21pVf2myejbvCLT3MBjLSpbjAYH2Q1xLYjsbTpFQVBzH1scfXpd5E2DqWLDAwVzz5eMZG2nDK",
  "key26": "2xZGESyZ2L9Q8NGFz2LyXi3esPHYc9fVhHneiLSZxLawgUbyPqTd8ywLtu23ahgxWwESwBWGfEfPdVfUMF4LZtsk",
  "key27": "2wBMXFoJMVRKSDdkNyLW4jth2Rb1GMCjQScopELXaRbD9gaxQ17HMbenDifxnavfQtH5NdwTjcaGiAXF8PPoyFh3",
  "key28": "3sn3szx525r2AQU2Eqma8uecssm1HKpfVTqytsQbFmz3vAzsxSYLWQMMzwzfEKA72CMDcAdAf5mHAF3jurTfBLpz",
  "key29": "2k6ShemYEh43jRUFjqdLyb3dyVgU1stpFSWJGayy4Wy4Z7DvDLKaPTUKgeeZr2vSEa5u1bLJUkt7KS1951DshrjC",
  "key30": "2VRSyqgusCwhbAuZK9VnbPzNyXB573EiA5hCJFB6tfyaMt6jBU7nijA3F6Qp6RUcx3GL19VPj5csoLXmXCaA2pLA",
  "key31": "2LuiyZpxxt5TGRsgxSFddjBKxdAdA2YekkaHztZrXsEfZz4gwAhkbsYUxYLB3FJSPPsywawPkSwekxUJBvhfuXzQ",
  "key32": "4C47Teha3DQYe3NqHYVewbioerxR8Ku23jRTvfySnGhTqzQWS2UiXDZWZmEYUEbnrw8gGm35TdDAQypLpdSFRrxn",
  "key33": "nx41s7QXZ4SvDnsMBa2JQC84cnChLYv7x77SvXf26xpwpHT6pNNAkB7ZUi5nEQCZa7t1TYTpSXnQ3epCZ8keomQ",
  "key34": "eQofNRbkw5RwqMoNGEqJLVUQqgcPXfbitBkJwpBtL3yzs6ANg4ZuhfvAewQgbvXHaQtxfEswoaY2kYwucPwcc3Z",
  "key35": "5vpQZ4K1ch8oNCGHtcVcZjkfhSzBHWiFRPqWTKfUuCvqvuget9DBW1SQiAjHhVPV3iD8oYEXmfti7pq5Wnn6PoQq",
  "key36": "5MAfNvBF9JTv46U8gNpVEPiadxDKJmtvkDBiQ517QY5VYKG2VMLqtkZHUTonp8RjdBYvnrLe3rMYYatLXgXz3cHg",
  "key37": "2gN6RabC2qo7EyQ1aYT4jnCEbLmqrWsZVkthz7tJYCzLPNFz5GWqctCM9W5Fz8J7hZYjqiwveg5KuQfLCCmFLGrf",
  "key38": "49zCRjEGfyYGDRYmUEsaJGKmY5B1JXFA7eY9koXav39Qt8DnfkZN4mwVGDJr7MQ8tXoHmX3XSvjabVvCniZVuKLc",
  "key39": "3pNyEVWxx9pUtBL2JesftjctoAnV4JRCwBTib6QP13QCzUNeowP79YN6J9kfPjJmWvSRUyDHE2A4fS8NvFQ6uVNV",
  "key40": "2T8Rn8hZsLFUzdcLwKajFCFntfy5V54VrMxkXLwkkg3ACRFmMgiCncTwTdXLvuTGaDefPDrP9kqGBKHvNFD4w6H9",
  "key41": "5e9K2jeunwUnfRcgokPi58bYh9JpFvMWKWsQaVXzn8JejGE8b7cvRkQLykkqUQHbxy9bstkMnxtiVuLf8VyRafzw",
  "key42": "4uSWJSsu2ZaGnmxFRUs93KPRcv2jZuJShLpF47CeNqPCfAXdSNV8t4gRHz4kqKdMMzbtKKs6xq9P22k9zZrw1qPh"
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
