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
    "27tauWzb8Ei8fsnygjMaZiWUfxEGws6MFCs8HLxags5LVptyDEJ9jF6sMT5d5fnam9KrkzNBUvp1L9B7Uc1V5fMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KvdoUg8rZxZs5Hhg8SwswjajJ5vcbJ426UXXbJMQM7EgxV8tD7NK5eutj2vPWYtWVSCRjKmsCWUSESQMiUPL89J",
  "key1": "489AVxDxPy8NVNsHEzA5vBYKA9wbRsFsa6VPVjsuDmf2eTDCkviSJJAVYzormbub8y6DD5D3aDkX79nGDTZwvnsm",
  "key2": "e8DBeKR7zrpECj2FniJqGRrqAJvHMg6jjp7Jbkfj5CEGKHrW6gBu7Rbzcbdb6JUCpchRREzDf4k7jVz2YV1xLpy",
  "key3": "5J9m5fyiUXjxdBEyMELpwSZRFKp5X17zu4LufxPkfrMx6x2r6p77Jkvk6TytMQBNEps4wfJDe6nWrvB79ChHk8Tz",
  "key4": "5wtmzqS7zHnmdgEb25y4mayGhMQfAUqxHb563ZoLzN9B4ScDXwLzBcHtz5ZEh6Kkt4vQmuPcPuqdYwcmmrb12nka",
  "key5": "2qsPXwG4hDDbAUW45214jqtEWxQH6SUcMa7ayQ9qXScRghgBhsKvMU3QsiWijoD5oXChsNwZyC5LLBsd8RcSithB",
  "key6": "5X1b4bnTnrhE98rb6ZK5NUUNw7mskFLNeqxry4deVcq1zMzq4833QagYyGX5zeiatBuLHz69k4BPvXnPQc3r9cKM",
  "key7": "4Si8zjAhG8fZ24554S8A7cLeCE4J1wPE64uLBeQJFJiEGef7jVmcbQeiay8yYapsxn1KmhfF95pwMCv8YVpeDWCV",
  "key8": "3zVHtcV2acW84xRd5ARyaJRKorSqPo58Jsro529ausoMetbFAfDsqd6ocqMYY3fJBPHZCnwA8ob9tYfvJi5DHzvX",
  "key9": "2EYVsBaPKWNF1rK5HhG3gVbeQBSxnfnyNuoJDZqkVxVMXqdDG9C6atF1ccVCjXvecsbmNzN46dzr2wpZzAQAMVEW",
  "key10": "2eFN3XbJJHCyr7KzcaTQF1xpVpbg7efPrijyt5TZxMstr27LSocB5dtFJXQkz3toAV7y69iXQf24dyZnq7ok7Byg",
  "key11": "55v4qBe7m5avo87W9UCmDyKW1835j7ijfasbomtLyVUoHLg2PcKTrWw3zMXrYBsm1LZFcmjdrrMouAXfmTuW1ohU",
  "key12": "2AovNZHP7sCtQWoXmdvFMRkBQmRWm1vcmjp3deyaLN4i457LnvapdFSCaVyofvuwAHPQCHyPCNCNsn3GgTkS9xqs",
  "key13": "3Y4ox384UihT8YH4aQ3hY6qs4gy6kuGmgS3ntw35pESvfbuBDcCcZLwcufiAKpKywe1PTkkDBSzY2NqM6BTENBG3",
  "key14": "27Q5nwP9jaiNnqf6ozmKHmYLnMfrFgTCJ3mCUa7vMVJr2zikyAzjQJE66K4j3MWUqVNSmtdXWsWRWVXF3HjouJwf",
  "key15": "1fHzXt8Nmd27kWEC5YeoimTPRSMajXrUsiQyCVr8wT19a7MFfpFoCqncfzF75wgJnn8BbQcNDGs9MAPfg9uaFsS",
  "key16": "5zWTxk2cyKQvsh8dRDBExf9z5VCiDLAzb5JCtm5n5oH6KDvPRXKJ95aDtMwP6cfnT6dnobG4UGvqyfxvaaZv7xsj",
  "key17": "3qx9J7De18fxkX5R7iwXgciE72pMSPF8FLrVhLk4U5gnEKBLKvmJdBDhhB5zYjqgWxmxT8tFnMdp2ZfnrADFTWZC",
  "key18": "6jg4P4a73knrL4XjQd42zf4sktFdeuSmeFA791dHcvV1YBzezdgvJkJ8jco76KvMwYidAYdWsZFQLwAkCyXPeWx",
  "key19": "3sNcubNh8UvJsvzzzhZCKPJrq7P1ZvypiVtmk45sM5e9Gwa8V1iqr4fFsyDSrYJYfNMRXBqUTbfNBB7HyScbAUDj",
  "key20": "5tgycX4pa8xHEArmBuf5zUcC9BLAJsyfd9HFs7w6zcMiqfgiEjRWCyLxXqNo2GzDJtYtqXMcq6JQvgrwNdbwxtDn",
  "key21": "3a3ZLs3QUaEPojTaic9GUj9CU7mfeTt1PapTZGsYuomWJ32vdCETqyjbKTtF16kzf3LPRrcEjscmb62fdSCENdWV",
  "key22": "4qJ6fgSjbRbMT8Ngj4Y8HpsbcswR6CAtTMcekMwNvNesTddcvJvGJcviVbzLjEzkuUXzeU7uxXkHuNbhGGDx1fzF",
  "key23": "yFY7HyMCUbqZqb8CiHAhjEnixhyBxuDV7S8pQutVDQfJzD5c7KuE9X8K2RhBadGw7RrXGTGELWEEoVt6daLmN4n",
  "key24": "kjkxj3sb7kEGHBpwo6FrrKZUjSkTiCWjpR7qcPM37bUFGr9kpNaT9iYSE8CA2FGyawYjWAnK83LA3VRdt3GDPR2",
  "key25": "5b9o2K8SykhskKTJcwjFqYhBD7YwQA3TwGizLDTXMjLYrqy9Z46C4Zk7cAouL2Pto2WSSrCb1uxShDhbp9BpcmWV",
  "key26": "fMZJ8sphrhbmLEshb7FBFcPBGHt8ix1RRQgnrUrutUW3sQQKNhPxnuPVg6D4UwC6qZFhLSDtWbZ5eDYVy83FsDF",
  "key27": "4csDZmoUjmwYK7FVZ98TfvcTVmrLeyMZJiJBpcGWvjk3USFxw4ScSh4twAdpkWkYsHMXsguQRc77tssJBehNptUA",
  "key28": "3pkw2dmRgx1mY35wnDE9HyycCT1otVRkdfPGTP1qq75Q5UHnsGto1G226n5eWQ9GQWh2KRHQug96iagYP8zK7z9L",
  "key29": "2an41uiByTrPhmEdTKH6aY46MpfLeuDxvB6DvyLQufDSKMUmDFBA64mQfLJ1zzHDCPZBe7oA81uvpTq18wu5vn7B",
  "key30": "9bgXhGu57zaXcStAfnMLGfzLLGA5z4V248KEaPMPkLq7etUyswAkq3Z64e5eHadmAVeUS2ihDDxfwExeM7vGVYM",
  "key31": "4AYGzzUe7Kp5KtSYT7X1EKpa9UvwTuDGfrugh8bj5X9ZPqBUBC5oA3ARLBdPh8zHjkVzxmujV4d4ajWpZCJW7Wrf",
  "key32": "5QDygQDy8aJ6FgdHFase1MGxN36n1uZ23UZ1fzzippiVkoMwRCPaM5KHapdnWG7ZkSZH8UV8jNWfaEy4adurM8XJ",
  "key33": "5czUURn8GwVULbhAgvjBn3yF9o8J5VqADFff5sep2Kvj7n39ECB3bkSPbB23VXsqDMPc1NMnfk5oLuRTXJhxMrFe",
  "key34": "L6hZAfcwWvUfyXnz7vxQUFUqwZaqSJQ5SesteMpWyCJMEYvsD89w7Thv9et69pJSk8sBnGmpfwPomcG51JnsRDz",
  "key35": "36wxetac9n8W1pPqGs7jfTYs41brsP1DAHdLndL6EmyFXdaqW3dgFtpBCFALwVHCFTmNNVhUvxGX8h6ACKd2Xtce",
  "key36": "5KufyRwaGzaoDP8BP6hnbT48uZgdPtnyvM4QDbqctwgAYfX84bKGtaMABDY7vg3QWUzdQjQT4qPaWXiJr4kQprYH",
  "key37": "3JRVegYk6UxFi6zeWPUcpGfWappwrTinEbfCGgtXb5kX1vUvHVSw7pgPVM9tAfLPSvFTez2mmz2igJoDJr6eakNZ",
  "key38": "3sLGzZnGNLAdiiDz37c6Qcqvnv8C8rek6SdH8MHodj157ajcB8BA1wLUTFyaoFGe9jBucoXsxoc8NmLUoCBRcb3r"
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
