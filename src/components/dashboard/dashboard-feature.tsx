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
    "4SjjeCrgYmpmPjF7ecm3SUyebS35Yo9Y2GmVu5mz9HAyLKFHCjV54SyD1g8k5ZT6u5G7xqAAQRwnJksTCqL4atm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qbYnSpdaJPFsYQeRTQXWKujyonzioL6Ui3cPnUtjmfLXjoREwxZpVUFYQQXZkkgpyUxwRNgfobCtdq6zaXHho6t",
  "key1": "4Ebc4pTsRtmAQTzocjiEN5y6isArAH5kp6BbVo8uYFcrc9rzLD2vQrPtXdDobvCgT3Yc5ghhygZYGSHGTZAEiqid",
  "key2": "4ivABsJYPrmSwmGbt7YURskkxvx38rWiHPZhwASfnX3HAFM4CVRvRNbcMytzSTuEGeAjT9UrwF9nFNr9Fyh1KPK7",
  "key3": "276FpCXsm9VrWdiVY3KP2TSN4DyUdYUFWgh1HTHzd49owdTx9XkeRY1uXTuuYJ6yJYZB42pUmPNF2EjEKnct7TiL",
  "key4": "2iN1kgMESUVwUBBLcaxFussNvtQ3HU2X3a14guZh4fnUo9Gdkj53PeP9c4afsh9hJokzhyNgzZxVfzmmekD3T33H",
  "key5": "4kLDYTpGw9nGCYcbVtXAzrLgGQF7sBfbx9CvihXJXa2K5MUjAL9YZhmqihXiN2aqkWNgVbSG8U46ayqVRtKiVePK",
  "key6": "yeNaq4KviEtTBobbtZCZ8sF5or7CztUwgxCBHmWhT7kCc9G8buEacgjaTCqk65CKok5uy64UemSfU6s9geQr8hT",
  "key7": "34BdpJsynjVD19o2RVoYGaH2S1XbrZeenTsdxNrsLZH93eEkp1sWXjo1CQ9U9E1XnNZBBT9ppR2sRzJpUdEiyUCg",
  "key8": "4rnbE5BRnVnaC9XEdPwUcmLhNqtWEbyDQY16bPcynQjaaWXMEnauVcD5YeKzEct6MfckCs5sh1mfySKVzdJTH9pT",
  "key9": "gctpTsP8x27imEBpSZUj583aT8ZJKyL8Haws13vYk1vjCYaoTuVc4F8nLCwo8vuTRppZpVL1ESvCN8PuL2U9vgh",
  "key10": "eYXPgNFEA7fbcHRnJ2w72DjsGvxhFqQqnGDYQn9TSCfzAy8HmVR2S4fW9Q8eQH5VksXah4w6JynLgEKsFQ6obrd",
  "key11": "55dSDm38XGrn4qhSXAZnDJGYqhAWaXkzWZaz4r8Eh38KTp8oHPvYXi5fbhqbpHJrYXghgnV7Co9SrDSpoPJ3JqwX",
  "key12": "3xCQBQuQMn6QthYZGqbLXejNUFCpsmwseLif7rN9PidTvjDHhJJz8fJe9w3YULoUtS9QaDqqZKDP8z2dDpQZNJLL",
  "key13": "55kNDP5vk2cqTC5A8MEufwKKUJ78Y75oBPBm3XB672NfuTNPgdfqiTFFJY2RYcDsaLXSouSma3gVZz6RSwaaEahN",
  "key14": "2sBXNMvrexNTEEVuA5bXT5wPg6MvpKX8T99PUCHZ6p12MEeKGZ62mwWUc1qNvNMux1kRp5UrFPjGz68LzVgJWb4m",
  "key15": "F3c2rqogk2zigbD3GSED7fqtviB9b1wPRAAyusXVX6kB4XZtdb8Jb8FfSsue72Uo7Ydco7Eo2KjsgtyHJsfaXoY",
  "key16": "4vXDcVt12w4P5FhwaMQvUiSGGzz5QYpqGJqU63tJ1RPF4yFi4e2SJWNXnqXRCeSm3m73a4Yt1UnbAVvQ6zYYdBi6",
  "key17": "3HqY2LbNbQr8HpNdDe9iot7VwUZtTDjAbsjcxaCBWMc12YDQT5Y5QM79EiWqb8W5G7jJ1j44J5546fGybD7jTqLR",
  "key18": "4VigNi1jDY7kxwrqVnKxCDKws8NYkDErGGESqgrNJmXZiP7egiNC6UeR2UdneWh49zP9CGdxdKXHAZi9s549s7XX",
  "key19": "JqkTcuCNdQH3JvYaTKBPDrG8TZCuDxGdNzysA5nNmwALvci2yrnSbz18KhWs9jFBFVWWZEX1wDMcAWfBaBdChez",
  "key20": "4J7KABKiPNReTmanYzpuxsKg1AvjCWrxt57qvExi56i9W3PrF1ChQrTFW1PxpWzL8NBSxreBSj9jD1tSsLaJEgYV",
  "key21": "2PP9XzPqmqpNchsADTbx4b36Hx8Xh7ZVCnZaM4Ezc8GEnj6nCR4KYGuDUQfb1jqXcKXThnLAexWs8mNryvFpmYMZ",
  "key22": "wMHWojsWWFNLtw6vuS22KqYDEdJaTMMUkrtcbFHZFF98mZe4x8pDDs5y1voSvnbCng8m1jxDZ7BkMqK95NmKppY",
  "key23": "27Awz39wMDLG6huEux3GkG8Uc9jw6wge9MmMHubt3X3wX8bpY8acp2DxViYvjCRWxvXjteDYeynufcZDfYDW6kaE",
  "key24": "FnMRhTC3gSyNWAMZAWPBvSrKGQ2si9xvPHZUxiZW4i7CPUi5P5DPxJonX9dFMzSv2BP2Ud8E1mQP2x7hR9t5xx7",
  "key25": "2TAw1zp7wjjJm1DXhXmA5W9qe1nVmvsKgx92qmXhvJEycsZzZJDNP7ZL2sEA51HCsszTpoDFjzs2Wdiair9ESfa9",
  "key26": "54T1tgGrudScwagZ5rdgKM4rskfJ6XKT5VWw3aGrrn2zoWuocub8TURpzEK3S3GcsB7cKVCEg3m3ECEn32jrVmBY",
  "key27": "5ZHHQgjxcuZEyVNp6JSFrUdhHRVrXQriSZeF6ALbr9XSysnXZY7t2JAfmgZ4AioLgezrNpgnMPvbpwyQmUNvrrAR",
  "key28": "45ccR5LWMgLaxddT3p5oaRR9SG4C2i7N7dwGbQDRgLPQehjCiN68TMnTFYgFFtqetjkiUnGbuSSSJZYhHpyTd9Tk",
  "key29": "2mYpBca7ynAAb5HmdFmDZK2V3y11qcL8nB8kWzWy3Lv1jwnkYDAAp2P1nLjP63FCWC9Rcv4txWwyeNvn42FiAUEq",
  "key30": "3tD4kG14h2A2pB6Mi9sPWkAu5f5qh9Y5tbkHSSoAwnTm1xSRJnwfdknpzTZ9HU9vSg9Fbzuzw79y458AepZcMzbA",
  "key31": "EJjSpSFLAJuhqjroJ9VudeQGeBYJi48ff3xDe9HoBasAeVSnaeicej6ZCtrsy586JES36bt65wemweMKStVMRfE",
  "key32": "2oJnzj47Mnnee9sDoQNnLMfqWte2hafKBc9cze9hVbq7EotaggNqJBZbTKs5UPk9S2cwY7Ecp13Ka4eEFy9Zj712",
  "key33": "5tAAW8JDVjkbFGSTLJ26juoqm9fEeC8KM7YWwb4Vv5dziyFtvRrBy2VZQhGTU5M9UXQ8xH59Jr88Qn6L1bTz54EL",
  "key34": "5rtKniKNwmFYurTw3tXFf9vZTHFEWTiQiXGnCWzwHFwSsL5iLSq3tzGgReZpALbFQE5WrT3jaWwJXVTAqZvb8n4H",
  "key35": "tCjt6XRqgAgJsecpL18XU1YLdTMtSA1C6gef7YX6GsyvDfFcFmzaNJXgaNzvxkmD83ApW4o4yC4JpGW4YPs9NCD",
  "key36": "3u7ZxZDAzvSVyybzYmARps2KK6hyZatD2G2kSVTjT7QMVQXWmzcSw9GLWrxJJx1cqXQhAMq3hwrVLMzyh5o9nCXR",
  "key37": "Gec6AhRSVgT9e5t3EBakcWrvFbTwrBCs6tHrQhc9pPVrK56GjZC7PFhNBFSYPh2AzERyhzk4J2YkvDA9SfaEsVs",
  "key38": "4F2cjtsmBVLR27zRR5mFqMLYusPBLRhBXNioW9o9jwbYVDV32igcaA7oygPPNT2yarrRqajzz1coiqjA6ftZwdnn",
  "key39": "JCmPxr6DpniG4ShPyJqc1ssvdJQCybvHaJcqaUyxddYrd38Q1rcWo2z1xwnqBqr6CnEd7dp7LCBi2dLQPx1sbhq",
  "key40": "WjL8y34g8winWyi2TPUsGjXnJrxwtqjEGDCLNe5E5zdsAQxQWdzLDFhLtphoW5WwRoprSKdM7SsBSeTHf9y9f2Z",
  "key41": "53V8t6q1qkURPZrc6UkLpmkHgWoH4ZbByp8r2kzAnWafJ7ovaHtG1d2goRPc2xLKYXq2MZ2BD3yUdMxKUrZbZTsj",
  "key42": "2qUrhXihLQL9GaMcfv8FyWhb98T1c7rFVDDgnmw26JfQrps93PHypbcuApkPiq7xuX7PwJP9DrGF8JHj7HkmajPF",
  "key43": "twtWWZ6wDL2QERMRzThtHuPqPDBTg51FnvtSXTYwnDFUKqSaNMEvqQKLaNYGzFP7pBWoJTG9qQNUNMhJwozbSQ3",
  "key44": "3cZ7s6T1kQPGQn6cUWZyxN3Db172VxpcMnK2dPesxCQKKznuUv4rUF2n4RvM7Ae8ejtGdfb56RmErWqUziNVnCWH",
  "key45": "2kD7AAbuqNzpngdtNJBmzP6PeCdC5hzkWwKvYADKvZJQEDY2FfYkLuQJZ3NvwQhCA8HFLQvDJiquSsTj989eLuNC",
  "key46": "4eTX5chYzbPSZWrbSDx7uHMEGvrMEeGgpcPyM8Sz5Wbe1LkjQW2NWwaXvehRamVNzZSLsv2BsjTkt37azMREU1hk",
  "key47": "5zwAoz9HxSsM4x3vHoHFNfA3vawiodG4bmWBP5H9jBCTMwMco18NtTz1oHbKsGdjfVmz84wV7Ea6iKWbKPHQf1of"
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
