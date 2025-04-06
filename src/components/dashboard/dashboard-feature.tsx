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
    "48jnwH4ncSxkv8QCxTERP8LReCigHZmqAtXNBQGDz81LoohKGre6gbNiPUs7ZckocfWWEAvWzAyrC8yvoWth6Sjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WJ5TZpR4tM2jtFXHnyEj2FkoHp8pv7fbtfeZ8gL5bk2ZmF8YDTeTDxtUicxtR3mcef1XWMintuec8wvevhbKjVv",
  "key1": "4LarWg7sGpEmGPKrkeXBgNJXqDp2DzkHw3TPiHPoTavpGzXapQPcA31uectAaeEtpQy5AaKfxgGBoMS17BAExnrW",
  "key2": "dyCEPTPTzBGZ7mn4ZaUXmjgEsAft7yhtnGS81rpaXQeJGkrRdgH3cmfYbcrz3MgbMhFL8rHaNHvn2ypmkZRSx3S",
  "key3": "5yK3XUnP2fJQxnqjkvYgwbX7RRfBcnoGvi88ygRSeWKL7SYwDBPd1u8Qvf8ZtLu9GKLr1SLqXe7ja6kk6UrqQL4Z",
  "key4": "2JKzuTc18dDNRieu2pWgUHHW9bUvgbHvC4PBMTQF35jGYUWZLnA2WdQmCj8g5JZ46dErdFcCwZMtBbgTUCc2348y",
  "key5": "6qieokhWnSf1t1KunziZ6qo4HCB2uoKhRg4NFYZpPtRYmFX1mDNnR68CmjV86ckHp7P927U2TiJY8GPYCsKFywK",
  "key6": "zLAQF9g41552fued6ETQWVmRB5iXBja6VACxDAK3sYuHdZoc6uM7SBnJdxifn2ePFUqNVH2A6tscgKuudsEWt6E",
  "key7": "2kF5yquzaUwcZ28YZEZMQCFz2ccFETzCer2guRrCnVeeGb2GWXJxsm6vdfMT1YRSYBHp9c4gnn7Zf7ap1eg9Lb3A",
  "key8": "23gFrDmW6r7Md1jLYAv3Wo53CzWxpu5GFtFnmjwKVE6WXyXYAUoRZEPUJ5df3Sw6hFWPgWNYMwuu4gQQ77Vtwtfb",
  "key9": "3VF1m7uebQLmW7z3puejh9BYYCM1jNxXWTHN6nGrQamdWMTGnJhaniLuLMCHfUNbB1LoekjYTzB7tVxyvBwDL32u",
  "key10": "5X75fehNgj4js9rf1a2rtiCdUTuwCNJvoRBU4e4eTMVfyqeYTdxqcx9FFzp9eE9tCcHcQqBdyLjrBAoEWzCaEh6h",
  "key11": "RxWxFtjWqvDEefXcxvnDb95Z2o8Mwk4vvMaiRM3ojuxQFh6fFLbEhKPu582D3BZjoDPrsQL3gXMsUgPuYhwui9H",
  "key12": "4E19rWUCvMMSHRt28NDGRAMnW8BAoHbrYQY4gtCDWTbfmtFeeHtdjk4UokQET6cnePduYbCdCUqWHzbovnoyvFwG",
  "key13": "cfLZTNnaYH8Lur6Gy5xT3GQM2C6qAQrK8sYP8WtTUYMgGDP97TbeSMyXZJMZizYpV2ewRy9pc2ZjAe6aTfnwVzE",
  "key14": "3TJYnjBpUiLHMNxygh38HwSWnvh22UXP5wthVE1MQyVXMxNXDnZQARH6tZRG3cYYqmEkfQQbridKiTyEA8J5LEtT",
  "key15": "4MyPLdU1eQpStPKUtKxy7oybwsGegtBf1sqZwWP9hb77V8gQnwWs2hBsH4mi5ang3H83uJhzf1QQA5qL9HBaLPCa",
  "key16": "2xeVW74J5PyyFnDZWGs65XLy1mWCJemFp9wxPu9JvUuQi674MGQMopbe462PQRTpWfH2HUsYPD41pHRtgo5QGXfj",
  "key17": "4AtnWiFFsidps3QYPJhBsY4jX1sxWG1aMxVkqwoZczcygdW6FdKne46pu9ugGy25E7DmXrejkGBMdxkvPfQcX7S8",
  "key18": "5xMxq6MefUZe1Y2f5NvJjAJ3X7NacwS8SjJpNzAr2nVHP6Dh2iHGLjhYBy3sENEN7gA1rgo6ZPqGpA7WsV1uZbCb",
  "key19": "4Djpm2JU5WwDbHXAHaRd9Ck31LhenjXEetJz7xcauHucvaQF3WFokSRNtGhBQpAzU913nYQoeQqCnp7znDVuGDFq",
  "key20": "GYZHHMy9w341aebAXFjRkqNnAEKa2iSbrbmyamCNzyEDZgRpvosxpVvSiNpBWfkfmZe2fXHGcgRa1cyGMAr37vT",
  "key21": "4VqHPDSZym1RekMR4X9hj3qdHnJGVDLrpMBzX5gFg2kjt5J5aQytFVVEiHTsRAa5FeGc1SteMULfWbZvVUoukvsk",
  "key22": "33m1CkKH2f48S7RsimmdRn5esdDniQcJpepC1qFfRe6GiFc4Q9D9VVFoBQrPkgAStigHU5gwv44aFr4k337eGVzz",
  "key23": "4zfPGEyGPbCkt2oWDW54CDeBS9TjuvfxWibrP7u4DdUwNSRC2ii7RmBG1pqR8xCrHRkzvn6uWXC2keAgJb9mbLQY",
  "key24": "4yiXXYRHDU4uGtRKvjCeQ1bAfP1cSbvSeBagZwq6ji8QZ7628bpwnCrraD3CFbjiVBDHFfLXD3HJTPuCpYiak4dD",
  "key25": "5cPAkFQPEV4Daryj3nnmEqQqS9MHwKG6NuLwFmFoStURYaDMbvgmsCgXA7qQJrcZUGGTP6dEGnYtoz7z8voJCFSd",
  "key26": "4kjbX1o1v6auXXDgEXyt8CF7CxtVaSfrtnWbHviUbz6FhAfqBxQH9i5uSRXW2zquHSg4c4vBDnKmiD2utYYMxEz2",
  "key27": "3dCekbnw1UWVxH66Q6gqFpo9dpbogF3Ay7jDmjLXLydzUGmf1zP6C3z3bxL21Y9Hx21DnTZXMGsQwBKN7urndLx3",
  "key28": "5K6kHtBM4n1962HJHTc8k3rMSF2sWNUBv6WEigxYBfx3xqZ7bDt1zzNgiQ7cwLoqwXurqpwy9EUA4ZXsychF6qbM",
  "key29": "3uZN6DvsqBTEXDqmD5PVvc8uJaSEPBPVCAvgR4oS63oQ2j57BaA5YpVTJMxfUZT1iCZ3xg5ozVyEcauLRDk3oQSx",
  "key30": "Cbdtvjpd7yz2Kp9xTabHR33AGi1wa2i7hUUPzmXYcFGv7LhjQq7rTuwa13BrPKaV1wtxqXPSKn2jSGZf3gZNR7Z",
  "key31": "4EPnoyUwxsthMPymgWtuBibYkiwKZwGAXsRGjeHyspjxXTZz8mC7xcirZ33Y8GuF6is5xmVbRofCQ6Dhw4p4fBLN",
  "key32": "4oMLpjwe4mbJTUCQ1Ta4XrzZubUkMej51Hx9x3qsZcv9DrrkS9FLkuSSu3oUqrS2GGiLznaD6KQEcpbdFZ5F2xsK",
  "key33": "45DRJrYsoPbTVXvTWXv3o1xoMdf5nqu8ERehjS3gqp6NQVbpNBiubFjHR6zjLkoAyTPah9WoHD3D7JPuMwgw8iXq",
  "key34": "2LFe4bcRyncYf7Fb6KuKvzQbMcpvchWd96V53Q4KDCSVgmAExtaJr7LgqHx87Ny6Hn8L9uZBBgpFESZFWF7sGHin",
  "key35": "3qjeH4m6whEWXRZxLkhXTrPKLATbHYdQnp4Gv1XgTYRBpGTDso6G2qZfUELMwwmwvLvDwT6xHtMogNF4oMCSrcsZ"
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
