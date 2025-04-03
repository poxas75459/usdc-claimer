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
    "26eszX6v8AGiK4LTYZ75Hyn5k6eDgd5UbnNUwQf3duEmt3SC6jMStn2Nxj15Fc8gFfmsj71NEyosDvZTW6L7YuwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GuGooHF68iFBLqDMx1WiJUdbNV28yn6whSrnLfv8NRifvgKdxcAKpaVpuuanQv9NZysNEkyHCBH4d4us9VrqZDF",
  "key1": "3QCPLoVd5Evyy24yNonkSkX8wDpx7h28PtxbDVovVxAK8Ncvx4fkuHH9BhwPeESpUDziBirdJi558yzCoFEnwhE9",
  "key2": "2jBV7eMLDACcPK8YDVuwqqAx2Ss2ZKs8LZxRh8CtyAGHi8FprzRUAphFjw5CH6gLYVmjyCSbPbLGCeTrBkzKT8cj",
  "key3": "3GraG7Mz2ept43QKZwsHKN1cnVqgz5Md833c6SxGZtBdUpRorzuUEyK9mz8k43GRxNFK7syJY3feNHY8A6jg1SCH",
  "key4": "5GrNtXoyTkWmgk4B7Fm64XFB6qBNYMvBvBCi6VeKKjGPLcJu67NPZFMGjBKba6UKcqWXwGBB8F5sDd8yrrT29SqL",
  "key5": "FzD3fuEBHzEaGAA4D5poHXCXfBQn5vLKCGvUn3gKaRkjcSe1dL92edPAxfyjJhZmzETnxNUZEM4y33VZxryaYCS",
  "key6": "39mPLEEdaXeVyDBMTKDx6XEnTaM73syeDt2QtnrXBkS6Vw42xS1KAYn2ayBaCYQrG5JLYMA5ZvooeFubEjfbP9Eh",
  "key7": "pfoL3we4QBHYSLUK7km8FwLCRZ2z6irrnKmNbvGPS2EXiWASv29htGFVwfWMgyteK5kcjkrqmwoYJhpnLv7RWDP",
  "key8": "Pzy5cgcM7p4yLoaD8A1YRpxYEc68eXoiNiEixma54ny9xJqQ5eeBNEVagMdsFbxbX9JeJgk3e1JgE2HN6xCPTNJ",
  "key9": "5rc9Wyntn1JRLfk3Dmv4jivY6N3tvVaczUKGfzTc8uoExi3kxvdjaWVDiEdfEojfyYojy3utkr6dCtPvMbBzcFHJ",
  "key10": "4RxPUbmbWYT1Rv5K2KF5bHCrw7umDD877oF2DLKBUZiz8RsgCiWwVBMCEUBdxWSd16rzYkqmsTnSM9uocXsx4iFF",
  "key11": "4UaeDkgdDkTsURhGcAvRCDRq3ekPzHS5kXu8aDBfsY8AHmnwnZWYKwkn8KBeBr7rpLE2fMjyURq1vqH5qiSbw2z3",
  "key12": "3Eh5gDzNfmWQRUunkUNMgSYYfuSN5697S67xQKKSVymcgW6m5SHUadsGvyjKLCYk3LvKwR7r93YHBwmrbVdN7nUU",
  "key13": "HZkSc7KDvdgKcnGFg5LeFephWtos7zRoZXvfu673RiHeN5kRrWVCNQC5G767r4vYS2sC3w9edCiX8LNHEB2vj9R",
  "key14": "3zGANZqivBnfmzmNjCQeDrLEKr2SAnJB19qoFkNx4uAkeqibJ2PsmafreMG1554R3ADoBH23zVro5gPVBdVo66zq",
  "key15": "9LtP3rMfavDsU6du6UYdAaVTZSq3WtdUReQCL7bQdzBBy4ufPFCG1D8UKU4r7CvP81idd4974QJXcWZe5rhkKF3",
  "key16": "sF6jYc6r8LPUxF8XukAEnSuYQuhfXYAv2KRR2p7NzyNrW5NyVGtLTLDJWvQriTJPni2peyvii5YzRwTvjZQFbhy",
  "key17": "3WysUqVKLkchgLGwutxg9Y9c9kL6FzB4n7D4Ai72gzub3hf2KE8obNy8BJM5773KjfiFXBxcjy2YFmkAkYRTEcUn",
  "key18": "5GF8v6DEDPo9KaGkcjKtqW4ey54mhk8mEEsNgs2tfWXKCp7fVrVYFWX4JfJ1Axzm1BsGgJmtRqShu6q9PM1C8439",
  "key19": "m8xsadDwQrBUdhRNzJq88vrxMLcK3gn1npQ9odz82jGC64K1cMQHVfp5HTnAQHn25MMa723Zv6YVBUaJNnuBSe9",
  "key20": "67WSYLuTFQNEnWZ8885b8w89ZR4kb6MWzY47eCk9krKBva1KeTh3GHkEZ7YfSiNNv5R5eF8QzrYK8c729heZNXeJ",
  "key21": "2QJvQ2yEUBUrJewQGqUdLsB23Kvpeabpb7cjfhhTj9ufVcB3JDymqNY1vgyfYcTGe2Qp24ZdzpLXy8aYRicoVU6U",
  "key22": "4MfMgYuFd3Q11TP7CmdyP8Wnk8zFjS3B5H6TQzs27sntA1d5DGQQF3xEtBSfNecnaCgY1N9RtE1uVSqnFtcrUdkd",
  "key23": "2a36eEVVfvdyVytBRJuevxCYbRMU3RWAamNmQZ4TaHF11Sewy1a1cFcVBbUQCxPKgAe1Ud4r8CkpQjcN4bMNaguc",
  "key24": "3J1GcbnM8srDjwPddeTBcizYdawyGMxeD1Tcb4W2ArejJHpKMMdvvDogdt59fGnLD1CowbqRtpi4xWS3Yx8zR7m3",
  "key25": "4kFEtYGiDYcsjp5n6xnL9oguTDg56dBnJVqGLoMexXeU8nVxxGZesdHnPLLyWkRNhEDjCG6YPePRzzdwSyyyEe4x",
  "key26": "2vcNsFWuqjXF9oRATCQNzG4EegE7CnXrHUNdoJAnhVJz5vfhhtih9mJQX888rzhyC47KpPS9o8N1Sm1JovKXdWYU",
  "key27": "zuWPy1i1qGh3QaKdWoJKXtYHVzVmT1pP9whG5wiEp2WYtwduiLYqc4kYC9DeubLCjUuEQLs7nyZVMCbMP5oHz6t",
  "key28": "62Q4hVFgsGTEmGVzZ5FzgB1s9PqPSyszUAonshAn1Quy57AvXswbEkLHxHJUKLwgtjK62qMpKZCguoTAmwrS6eYM",
  "key29": "3RKj4Gu6TWv8MjrXQaMHrDdGiwxDAc5JDCggh8yXjZ7eBUvbgeoq3GEX7QLxQN4AUm9q5Fb5zv2EXosEyPsJ6XuM",
  "key30": "SiycRttp2RNSFrbosx6r3VeqWyYiBTTTYSEMz7dsm85zJ8fpxQ2JywzF2EACCiSZWstZtsiYUhVCNugoyJ981ns",
  "key31": "2E92GmNUR1ZCy1DW1ar9dmXzfrpZc3C7bX4QTNDnEGwQk7rBi3m4DF7g36He98PHTg1eMf9guiBF5yV5pVqPd4Su",
  "key32": "2vGeWAKPbbsHAaQ4pVL2yupUQwp8XQLTd74QXptWNQhTLkR2qghq9qqrz7k2C3HWMPpPTyDWSVuyyfbEtyz32sUj",
  "key33": "pfKyn3sMZD6ZZbJaeGrf7A3mF3cCChToyc1kvt1jcUzzx2Hhoh7nV9dJnRfLDHDrFbZrf4Kcx3h7TAsfDyFx2t8",
  "key34": "7s1vdeLGoV84dx2Yg6hKxJf5nLTPp8c5mR2iC5sBP9XGM1458TwsQ26q1zY2TDa5zBySpwV69KcHBX41GE3Z2He",
  "key35": "3FBw54tAkpyNp1rmcBZJsR2p16fSv9YTAHkM9fRMfWUgtF1cq6g3ySQhc5KVVxdiFDFwobixAvtp6vkbjWMbg9ZS",
  "key36": "v3hQ69aK89VAu2mjL2KURVxPF4nhB6SHegq5tPKCcvLiEWHhe1YAzrtEUWzEPizENvofTc3fV1SH1Z6Vo5QkXyX",
  "key37": "31DYV73WiNU6NosXojEKiXH1u2sKUdsqyy7uyKX3KqV1hwNsaB9pKZp7pn4XmyUU78rgLGdazkYWz2kX4tVPKCZa",
  "key38": "5Kw84o75v3t5y958wEUrsCWXHJ2XdYmN3yrPRetiSyc96rJ7p2F75BrpwdEwBfF6Rw2fNqiJDsNis9AbVSkrWoPv"
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
