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
    "X8mRzECb86icYwk1ZGNR8bWDTTwViugpKamjZ5H572CuKQNTSikjQrvtQdf2R21vBigiEpGaWMrKiNnBYbxr2SY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ujZHojYk7vTZsAcooCcwycXEQ5xUbFtP2shzJjBwrjt2vDZe4DdDuMxJKFiNnS1cH3BBchCKrmJxUMhLMSsS48p",
  "key1": "4u1RLvq2WV3ioA9iAqcpEbuoa46kMb5SUNVEkpP626Xeouyodyw8fotZm7qqYqDNTiojAz9FgR4JUe9BoxfCnGCp",
  "key2": "3pMmWSRfVmL3ybUGUanXL5u5EwbvWqHs1NYdBjkKz8Jt3uQKkd67RNJzxsENYatgMP9nWSaTA2S3w9WqwqF1NR1p",
  "key3": "3LAaCyUuXmtDNaZiGUbT9C3k5g46qme7vrBgQa53bwdfF7JBDojx9YXcJFCVUzbWevdkgSpMAEWFfwAXk7Fx8ew",
  "key4": "5zY6PMBf9CTLrvY1GQe4ZnQe737fYuq9CDzhAUQCr3j4VfzATN5Mrwhvn1Z7RubXhuXnwhajj11U2KEtYLs3gdms",
  "key5": "3LQurwhhqrDgKNEW5MZwj6LVaHvXY3Q1Lv5NuMnQhzqdKtCmVw1mZCrJS5yNV4iJtgvxuYaJxxrjhaih1weBBAjM",
  "key6": "4UigY98k35R9AFcEZ8Sp6yNVeU6ndfj1TYrhVQhkiEZxv6uc4XUsvtQ13j8ganTY3RFUeGDG2xQ8KrELV3uePYjx",
  "key7": "32Mjg5FmiXEgT2HkAPyBuYygJtZ9WUKsj38ncorCmxGm9ya9TdGYyecVpZEYUWUu61A1crcpiyaK5LSAhbeDpDjT",
  "key8": "5F3LfCYTDXJ6MmiRmVtuEaeUGqmrpYDCxGvstDTpbSnXygiC9y1KW2HNfLCndQ6ifD81WhwMBU25jTn2QU9552B4",
  "key9": "G3uRGMQg2Td5uA7hd24ZCbzNDw8uz8nJpdqs86yzLYMQHnnn4RAtDrV3dRkobMN22aqdZcaTHmxKmMoP3JD59Mx",
  "key10": "4fM98dvsksVuaChhihzRk9s1V15e7FhQ1iFJvtoSeKntDUtGSEyrfaWDsr4novFrY1L98KDDyDDd6Ruoi71bKFkV",
  "key11": "4Racb5GY1iBHdJBzrC4aytdC3eMRMix6fmtAz57AsbhaWHJNc4AXW88y6nnSqbtqKMcuN6U5MsPGcRdv916aVKFg",
  "key12": "2jkutDJpkw9A8He371wmQcLSToAE6Sr3TctPsCV8gnj2SrXaBmgw6yuhsQBvimNx2A9V1VPki1DixG736kk1RvGk",
  "key13": "5MakTBUr8MRWsEiBNUZoSFG9uHK5icHBAcpY39D8KKnvxRxRwjTyGQQnLrffT47kNdF5nB6jnpDhTt6TFoP3wot",
  "key14": "4u4B6zv4ktPMcyGPXNUhSyoPCGbSdNhkb88mj3eJidJHF7Y62LUHDNFbEbW2Wd71yMsh5WJiMoq8fJyatdwHErky",
  "key15": "5ohH8eyoedELjudUfc97QVRYBBn96EjrAZQJpc7jvy992tJxeLtjuCEbGCJyLpR8LGd3amLLS4xgSHMcGNRhMgd6",
  "key16": "5s5sNyRU4gz4s98oJvVKcgZUrkDGSJ8hXaBtCF92Q4pnYRnkfrGjeTAfktVHTNVNcXtmc9L7euSXNAfTUifCzvbK",
  "key17": "27ph9kzbUqtvDqXWoPm7jyw2THZCNRtgXCi5iWET4teVqHR5B5LZgMTyd6oot3NJqCVVYNZYN738d1SGiuut5xuL",
  "key18": "1bfz8xNoC3ATe3TqjUmWuzCZzZfMBCUNeqkMnLUS8EGr6eDzkbzdqgstTXxKmYnE1ixnezer1nDZYdNYSPkewtB",
  "key19": "4rkFK2ve8nBkB4GygbLed8CEjRuG7kNXSx7bBDLM8FUBbKYRcsJYpMvGrSENDZVeufCA3Q5TVqhuv8yNaD9f9izh",
  "key20": "4RDjRjcLJTGzXqrZR1dwpphnYriTGtnp1GpxYehqriJCSauq3EJH8StuYaGubiGh2yddQWnhZTo3vjomqq1HaFB8",
  "key21": "4PRCv2DH8Ai8ogpsPqnPbrMTv8k7q1hNB2mTiSq8iQRSRswacvgtBBFKNdsVoJXPqF8vQzRjbTn8WUkcAGFTHDs1",
  "key22": "3FEyKKxFLCe1UWjgfSASYQTERKjpdyvSn4yKYccPAYdNFzQgT8o2qL746vodfSaUo5jAVJ1NCmHGujCuQR48X2R6",
  "key23": "wfgKpcGpYfzrn7AxRLPXk9FzWEW6QsEtUNhBMqfjRHFFkQAFtRVisJUHL4kqN3ZywbqPp3stu99Pri1j5yJoQgB",
  "key24": "3P1H2gMsE3zhfzh3pf1qjJaczVsb4otDpkf5BGCM5U4eiNWX5MtdRw8JwJZBGQD52Fo4okdEQWSShn82Up6cCgvG",
  "key25": "47fQTxcAoTcW5LuZ4yWr5vDMySp9k5ErQcWMBnFuvpJTKZvojigQ8b6npxvuRYNsrrJvtKxtnBsK2tDoEVWnQqN2",
  "key26": "3CGVznUHZEcrkm5RFzvix9TSH1cFNA95WQywP6oncjYucUhfj4Qpd3CrstVJy8oqCrjP8BfQawk8cq8f1ZMeSErm",
  "key27": "5fdW1GEyHRGp36BBJUqvXb5Pk1eKMhfyA8wsxyWqXnSfyHCPbAWSMSrSurvkas1TqLiMk4ahxhMeqLwgi15MyVMW",
  "key28": "4w33fA1T5vhmWKwLQnp17gJRwW9bHvVP6zoQ3k7Wit97LpjG8tzLUKzbPsweYvppXzNaqh5fdrcc8Hmtg9ed57x",
  "key29": "kHHdknMdiNYbgHGoqEsppQcanEDzV2a6k634hARoeZdcEPck89sJwUpSYpiV7dXdiENAWYEqKdY3BPtVe2Z4yv5",
  "key30": "3CzeUeYJDBsaDj2f4DBjr1kAsXCcbtoKNi1t48uXJ1h6JgQ3DQKS7iRvzSGC4tYVMjLCUcFGptaUcVf5sQvGHEx5",
  "key31": "1JNqTUAjnxrffA7HAPuwznzehYD3DWdkrhhC2LQsPjxCc2sUP7nodZBm41sWz4fXoUdLHRBzcckFAntZbamBCeq",
  "key32": "3gym1czT7ZDv2DGf6kCKxZJMGP4kcWYaWFTY26rqrbfxoecA2tkD4CjzbU7EtfQVktPnnbgx6g6mGGqDNpwFnC1L",
  "key33": "5SiaXBPC2edSFDSHidbLUyYQZo1Sgqbxy6sAmz99uzd8RxkYvR6gxDiwYaXZd6LugcdiqAeNCH266H4PSuWaXWRj",
  "key34": "2fpebYubYsrb6GtNjWWZ4K29RpMvaiqNSGNPLK4iGJf1gPhnh74VhxZ4xgWJFcdSzzkYGYqFVMmBfFHeMTF93JPC",
  "key35": "6cbnroY5Z4Li2G4Ugt6m2jNgCU2vAY7tVdpd6QhNwLsQsbY76RArMF79oAXkZyubNrrcbBLogMV6BMrRqMno6dL",
  "key36": "2Jrca9CEELvvn7EPe5QbBUqZDY1er9XTn3FEMYkWG2t4LGAxvqB42EYZisdzGXh579jj3TNJtEGJLwchGLMa8jpk",
  "key37": "3kUwaFyZ2M9Wu6XNR9wN6SkatQnigyMMavs33YRqX6VDVo2PPS9tUnQa416FM4SmDyFnBMreiMjvLjCjkkZbV27e",
  "key38": "4pVkFroyjHoFMrNqFyjCQw83awxnc2EJe24qKjm38ZC6BjH6WY9PLYnSfqieHXHPm9byGS2VAkNBU5X3deRyXFtb"
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
