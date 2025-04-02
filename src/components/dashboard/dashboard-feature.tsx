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
    "2G8skTY8uAyNhGEwB81Dw9jyZLGzQJfsnm5wfqsNaYzRZq8RZAeARziUqyraDr7BwDUYQ691nbHp5NruStZDefXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fPU5kMTpPx3qjYeWDnK9d6auuKqKGfVR2jDVxkDxFRqvGhSWKF3MFZo7jAMy7rExxh8CaDYKdcGSUwPzHpst9Nw",
  "key1": "3iGKx1webS7iD9R2JfA6syq4VLEHuTsGtQ6PX7w1THqnV54NWQruqbHjDDBtyFnXgWJ4TERQhDS1MdfvneMz2fq4",
  "key2": "XbBLRZNpskwqvqduDg3dFPre7kBhbThVUr8nhvUqsRrE5f4Bs7n7jBr4je8LeLa8XyA7p3uhWxGeqc1CkMoSgLA",
  "key3": "2bfSf5AzDwvmNu6HobCcL1nSynT88getdyvQijgYXNMGTz5knoEzk9kFf7crnjU2bNgt9MitHQXFiZZzvhAmJcGZ",
  "key4": "4VwTDtt7x1kTcBuig32tdDLFE1QLrvkggAg8EzFadEV8vK2fnpgcmawtwKJJzKCPmnSdH7kp4Qotm4fDRfQAjQZC",
  "key5": "1r5h9kjNAaG1vKcT6FCLRFGYLcZM23ZZi9EemLjgnUefNo3xuSQE952ggCVJKcBRSDjRSGna85pUWXmgcGr75JW",
  "key6": "3E97Ypx6U61K7NCQagg12CH1tFpTgwWE1XKtxQrvvssNEvNq8uwLuobCWnkLESKRrQwiSDbcFYNnUiUGdRWdbEZV",
  "key7": "37t5FnBUAyw2PMCbu2i1A5tqGhwMo5w2Zinu2HmbBhgZmivSZRoLzfhrbw8sxB2a9HQvTUVKUXGknmcracxL9WmG",
  "key8": "5Z5q9dMdXfasLGXjDrza5AkCUa9ioE5AhidDEuBL5skH4hem6ytVnRN1UoQ9n9bVN9UZtYk3faL8xp9oqeshycr7",
  "key9": "5snoRxMT2FVUHnMioDGX2Yus5CQH1mdik7TVAf5VM9npHMzay2Tf9ivmByYjSqvCVb3nuXvvouRwUwdWzV9KJ6d7",
  "key10": "2UtEHpkom7aBMUxGfjbqyqEA6yToLKe33zYvt1gqcRLQj4UqpFaSTyDfHFygy8FmQKUT4TXbaML6poMVCnfsPhPS",
  "key11": "254E7BVN1u5Tn7bEZu3hCfFn6LEkrcuw78YAzGaPi6JebBc8bqaJuouRxAWVKucxPCiZBAqJLG6yRnn8cLM1QdGA",
  "key12": "5dBrR42Lic2nPaHMjmSRYMNmx2m27NVxLg2erkpzm5R3KyUNHLeYahSEarKfj9Le4fFivE9f6asDNNT1YCcFUNyG",
  "key13": "3jegvhzS3EFNKGhPfHVtPjsrABcDGdbHXgbpTJm7n6KLhP1WN9br6EmeojDmmP7SNpgq6aG3kVWtfQrHigrTn1Q9",
  "key14": "5NE1gKLEDfAKZ7kynBKqLjjonUKkGy64Vw5gJNepFiDiLuMgHx2bxxmjApRNLMBtAbYCMxCcG83BC5L9eygSTF6g",
  "key15": "5aESSkrGcGZcBmXHV2RYKkN6CWpPcnkBFofXg4HpXHHcKeVTyBDiBVx4p9KEMhvNLaqymDXAWAWVJrLsFHgKUizb",
  "key16": "2BgDtMBWoXmbQdvT75id3p8XirS6B7Ew6Qfvq1XRQeTSzfZtb9aHz95MqqTJysbYbsRizLJ7pjEG7HNYh6b7ixeR",
  "key17": "23LyJDKoekL7GKeuWMYZCRRfEEGojegTMY3QpFhDQmzJVvajHhpkuMuSMoTk8F4hNzgUPNUL7CzfQ884qhPK35FU",
  "key18": "sxkaWKytFLxRTp2NebuUJ742tG2fUcrcSjQBxNpfoDZweU2VLV8wM7CDzCLWTv6pmkduWyedKsN1VUhwgW7568W",
  "key19": "4sokVphmguY5eCkWKpKANUruLJVVXEDS2R8EW23tjqRB2Vsw8aRg2LGWjoghJ3o8LTW2y49GzpoAn2v9kqfEzXoP",
  "key20": "3444ureJahhLQKkJZ7h1ZTxCKLbGetGvkGQnoKuWKwvVLx91Yvvt2PQWDBatYF8CMmitj5izMrsrdMZNwGcNcDqa",
  "key21": "4hugFYqnTGryJDYMwA69FFNRB46B2QEF1QgstppxYkfocm9D6r3pdJXavrZX1FE93DEPN2LHmEKZoqfqjBYnF8CR",
  "key22": "N3TuQ5Lc7Kp2C8yzetNf7akYttVAkhc3hRmTnCi3xaHiPhUi3YUUHsqvf14yeMbhXvCrJjZshDbYv81yPVkEfwM",
  "key23": "2Py7EQEvfxTTUsuQozPFNgxSqMcuzMNPzvzPTnXR8aTg6UGkPyRZPVk9aFFywCEJZqKqrkBKwG7zYWb8thYef8SE",
  "key24": "27df8bTy6Xb3RLbZtDhMva1PaokjQBZJfnYBDDxyPQCsFigJXCTLRihSFsix78JPTQQPyXVS4K2AgheAqWs17LiL",
  "key25": "48a4RVnp2SzCnN7NvSXim6ndMJPyfUk7rsJKmYwTZ5iv5yp3LiLmGo2zRF9Wsvxvidu5vt7Axzcz4zcLbq8ciGic",
  "key26": "3jgS4FQexxPKrB1UUtd2Gu81jMcfopoP9xriLJwuR82qrRmKEDPpNgMeh5wccgQZn3heh5pvhG9qTkLWEnmpMQxw",
  "key27": "3TwA2JLGTLsnNSc8w7GsRxTVBMsYUvi2pW1HhTZTfHLVXgBbS3thUHvP8SBWnDPGt349GWvY8jDo6PauhG3kALYM",
  "key28": "2v2gXtNxqLUr6GXp6RoMVaFFRbZQCVD4yg81wE6an3enMMcKJn6ayAYREaporC9nknygvi7gJ9V8K9e4pWkPxArt",
  "key29": "58Uw1t8ZhNgfCH8W7f6GRX5LRqzKJYbfwrgdSR1vFPT53vgTubJZmma5Ny4ZbWtBciABbX5MQTK1rgH6S1v8DhTm",
  "key30": "66KBziZW7e49B4ZriZFHfNd5eqDUEXxJD1CHJ46u8QEgmQit34DbxGpUZkdAAsnQ3Ccw24EugZsxvbYw7k8CxVdr",
  "key31": "59M3GuzAXF91QU6WYJ33DWxQsUfeq7NxzB6sc4mrPnh9quoZUd8HiiR5UJSWLuJ2Ab4Ha4Y4D4vAKvvRf43pEKHD",
  "key32": "5bTmNNbNMgYxxzokRxTwweT3GCUYTeUpurxq24QALNwzrDvtUs1wmup32CgsfHjqRUNSfMx4Le6jrMztnF48YbVv",
  "key33": "55Gz8gJFvbUeLYYamrx1LHGeqaeL4hENcwKjtr7o1oCsaX5LCqiPbPKwZ3H17wMsxgLXVVEgJ5A1aHopaNHAd9G1",
  "key34": "pN6YYZJP6HqVhuxLv2NGk6AExybrKHXisrHFRip7DHBvMTjgXq9qePWur8r8qLMREsDKKJ9kVvvhYiEax66t7Lq",
  "key35": "YHLeX7w7QhmN56GxRi8NmyFqySJpRc79XT3NbcSRC1D9vYqq8Au8MUaxftQ4BVAY61eRRXfbcE7r6rPJKndtGDJ",
  "key36": "KddFWC8XWkvzXsyP9VNg3mTQvzfAVvLTjEJyyHMCD7HjCuzfLyMTdrrfMuYZTafWmC5kQEyBuaaqXVKNv116vjf"
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
