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
    "4bggeimaf9Bnm8BnEkc2fptcE4k7twQogcSeSuutLaf83cXCHLvY3g4eQngtUj3Lsqjb5M2aFSyLEtqnXdcNPF1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cwW4et2mu7Jpn16tdhoFLDPxtNS3HETPSHWxD8x41nRR77KSfnwLfKWAnqwsqzhEiUrP6qBEMYDSEQTij6NheZm",
  "key1": "aQcFDdZUbHE25Z4fBJjzDQjafAg6gf3NSnWYsWUMd2Y3QPmwWCmq655DwqvEXzkFpd9dqZbYDKKGSGr9Wc7fcZx",
  "key2": "1Hfx3NDU4ctCSaob1szeokPdTN11wcxDGjbN2S2LuYQB4nM2W5wZdWpDdNaWHNg2ga4S1AQGXRNhLBc4uCjA5qL",
  "key3": "52RCpoZzPoo7FXFwqCqo9LJ3wuCr51udkwH3hzxQbTcXCoJSeRMkNNBP8K8Ei2o5BUc8VjovNu67jNavDiHHhovR",
  "key4": "3wruWLsSCLtevjKwp4CbM8g2dNv2xNsNYwwh4ZbJMRKbim38xt8kjM969buoXcmuZ3bDEtKvVfkjqMUG7E1Gh1CA",
  "key5": "4hQY5YpxnrG58B84dBUpuzJgrCYPqnfDCL4kYiJSh69LQFDuyXPeMuFDp1JsyAg9FzTF43Py8DTBkMWQVX3E2yu3",
  "key6": "Up46NYEcDcxQFybEg6U571TpUthJdFaxNY5MYoXckDNJKp4D3r8Znt5r5bncpCYzdsT8VmvjZSv6zzHMyZpFUue",
  "key7": "5kVEbyXVtFh5WXwaC2W3ZCUWmjRubJLLVLJKjKTtLfPZToCWjxooJH6aUsdjGSrvFFgHEopzPaTabgCnq2SL8tK5",
  "key8": "4388V1CbvAtwmFjFPF5DQyykuU4DrFjof39QfYgPsXFoWQrjy8yXVAmTYuWBeAuw65r73scn31w6BFmdTxQtvmWC",
  "key9": "4qU4P4atgb4vwyo6p7k4qbWGViUB9UKSEtaewBsEfk9WMXHbDf9cZix4rcLC7gPCmm1t9n3uqaKYkuhebuH4CqoT",
  "key10": "4apMQdZKkazkHZ3uZ1nUCpU7SzUkuSuUnxkjHue7i28Yt8JfULXLV3Mwr9hjXsSFkzutynhYB4J9rXKCCg53AHZ2",
  "key11": "iTTG9LZ11XFDzhRJxce9JAHfmnhgGqcM4RWGoikgDH9oGMUrfZ3pSqKm3Dhu4oUTtBB65B23XJFhNhT89tuEwdp",
  "key12": "F9iUjpM9ou36CGbVA11xphe42fnCfxkmDJWFxvgeTEeQsFVUEX21g23dFdeyK3P3FbMtWgTVXsLU47wCcBYCYXp",
  "key13": "4ksqnHd8kY9RPHuyEjPicfQ6kSk42roEEB2VsMx3NKxLDiwL9KiutcQJWuR9DhciKw5rRXV3R9FU51gt492ShLLY",
  "key14": "3JouaixB5YjyryRG9mww6TRatM1bDkk6vUVdV2mqWVbuwkcGcJSWt3SmV1Fbegq39s2gup11FQSfi1g5WWu8NWef",
  "key15": "2GeTyhXGsuqPLJ8KsGsArmwLSLQtDsk7wcQgew1CRVf7mhrv7iGAiPVEQPPw8inYY6CNyzndjRMG7JdSV9KPa7tV",
  "key16": "yHf9Y5YEx4Mx81crf7nVsuBYvenWTdgWJHGXK7u6jfuS1dAxHs5YYQVVJrTgQ9TxeAGtauLNVB3xKn6u3A2QW8g",
  "key17": "4cDAQXUu5X8zmuiLKSqAJAyDJWiPhbtZmT6qNBJh376Ztb7UtuVqmW3BqcSBDKr3R8GDtBUnH9dZ5tkewqCpib38",
  "key18": "3iinVak6rbAfmAi25nfKon6UGJ6c3X83JAinz6Dsidjve2njpLjSoteJRazzWDzKq3GcThmCtnw7arpXKKnL5c4r",
  "key19": "NY29pq2MkXsopLyyRCaYJvQrx7xGrX1qpbYMp7r6VCF1TDtuovyf5LghfAr1xAoKicPuiDpwnLtCjJsW5ifXk9X",
  "key20": "sCAR39X1ddifJu3tBWkru9bdqqT9m2Ri2GdyRSFmjcUTFWvk7niR7ZViffkHME79TmgJfhKEpmxJxWeqKxFEdPN",
  "key21": "5ERHjTRFWkM9MV32ZLPDP9UQZdr4cyaMgAEuYH1Tq7H4z1jzmBcq7kPxzHfh2H8ZhH4b7oQUitzF3fTVMgqQi8SD",
  "key22": "2BRCtrKJcc4bjhrWuhs4H3ywD99ERHeBJmBCkRHxKF9QdyviMpB827KcucrpGA1fB5mw89C3PRBeGiKUkBS8h6WN",
  "key23": "3rQxmFywS93fVzjTaGkKTq6qovF5nHrTdTCechD1eQ8kHdpDdtqzecPYTc1n1iCMWuiZcbYHRjtxC35ssPYJbdBj",
  "key24": "4SnKSCAdTuTVUC5NCtwtfAS1Lqcj4j3hVPGTRoGuJr4N9hG2KX3Z8cJ6n7NX3aT33DG27H7fadbHDU5w6qEYKe8u",
  "key25": "3QtgSWZB332ciJAnRexu5U8n8aPnJYogX9VKXzPhyCqfV5RJUWeoonxAXHxfYpvLGY5f9SijSoEgyxVC7AqDxUVw",
  "key26": "3uzk2m3RLQ9jxQKj844W3NJnEsSAEZMPbkYdFAwhhFExrF7W4E4MMsA8F9N7DqTet2FgsNXHFrHohRwgQeoJYpNQ",
  "key27": "9VUAn1cSbvwmbJBZJA6mNd6fj2US2D8WyXmZsfxUuqvT3gYW8r3g6YMPKfRHY6hP8gokimzXbLDn8GBzZ6pEF6D",
  "key28": "uB19bTTyiMPBvNShWkUWHLWL1oksmCu44mEYf5AeLQ9UCQZCJbLEWcs3Ux5Yqt84pycXM9yRATwnz62iB9nxrt4",
  "key29": "4JxP8CVT9seSV1pFNFeF4u8WsX5T2PZBQnMaEQSwkfUGiNoksJc6bsQLGrtJhVRV5nvPvDTog27QcBL21jUVLwFV",
  "key30": "4iXgCKEM4qsaQFn5f4r5GHHKkr2CpDfwRACVcHiht4SN6BW6JQoNNAbYZtQAxsp615JWGuZSHhSz34hUUqXtbjxi",
  "key31": "46F2sT5Y178mBciPvRca6uBuqXf3NfvdLHCPbLWgdLqyVMWWjt5Xt8KzXuE1uLMmSJVSL78chhoKqHpuLotBycha",
  "key32": "247jodoTVJQXUD52242fUEp4HUTwYfGDufVXhW32LKDRUYBCK9cMeomKKvepKceATtw3fYtjm96wTQeEAS8CEq9h",
  "key33": "23YD8ZLAmkK7T4geDnGpAFRwAQz5JN5baNjS76vQ3p6eGVjbCbUNt9QQYESM3BwJZDNigPwQ588Qo8onDTnZa9zH",
  "key34": "2MdwQQ4HzNqndBXEvGpAQ21znMTFNrXQaKp4VijRABzTeXaHSZYaFk4SWm9ZVLt6cXYx6k5HHyHJMX3zZdfkdq5P",
  "key35": "2A6RZZbLCcZXGCJs2DAQmcc9bWtuZjR37ZAKraHSkjJwD7NkSZQCxWFh1iS5DVQeD5kNx9fpbBiWsiTJHBMRqHmr",
  "key36": "5rG5fNMt3r3SXRQTLAXoqLDrWugw7aGgGm1DCV6vrybSpid7dBH8FKTuLQLHy5CNBQEyYAqR6BSRDZwBRZ6iySTC",
  "key37": "2XjRyXSUrPjH5k156uCJ47er2vMCUYeMSFgoBZ7vH29VFoSwE4jawZwfEvqwh3y6eE2o1G2MGWmk6o9Bu1c2Tn5s",
  "key38": "3xHQq7rc9XJCZPZsCEGLZdfKPpfXskkoujckutTJrfzmGnpJABwXMSiVuNJKtyAcSv7Ww9d5yfrtCyu15Nj8K9wH",
  "key39": "2pDHCKKMApKUQaiargWC4yvS6ptzBhGZjAvqgKxVDdvRrWPsKSPYU6KRmRRcSZfG3FU5ni4v8hX5HdDTKiZiTajS",
  "key40": "zxDjPbBRjzSDSA5C4c617o2vDYe3azUbZMyCNCUv9jSgEc19BFAhsZc8rfdaLcfMhjV6g3w8fCCrzrLkSjVCnzG",
  "key41": "4Jbe3ejSYGX3jM61sSo7KYaE5fr4v43H5yMEwLqhUmE2eSiamyUdJGBreRqTJoWBVQ6U9cNCdKSLhjmmwGDJULes",
  "key42": "4ZZDquhrS9fnn2Fv1iNe6zgSADtqgai2fS1ucvsjPWhidKDqN2kayr5vs1MuK9HtnzE63iYQPU5ADbq9GZg2Haw",
  "key43": "L2qkCSxw3TKFCYWwm5eHUSGxsaucDBs9AEWycZ6QXQQnLfvz8A4W2Mx5eb87XzTPCvZPUpqcU2bq8wcgQNLMdfo"
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
