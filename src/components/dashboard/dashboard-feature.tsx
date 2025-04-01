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
    "2iPSoVmA8ihDU79PeVPnEUG8WtQH3qVD2TWa3B8oFQ844s6jV5f6zQkHbjV8BoEbXMB2SPqYNqcQ8bmdoHPG1Zu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uBqRtJPfcsEqSh7HoUxLfBMALsbdFMqfbFb2vdo5EaccxyZwnqpxHeF2xQxyPPsGLRGvixkKrKW2JxFQhW3VTpV",
  "key1": "53f4WfVkzwo2MaWvNjkxxSNVH57HGehWL6cGQEPjefoytBGmkiKGUdPXJR2KuXdtMPsDHmf47CaKUbu7xMsz4Yme",
  "key2": "3vUPA6QtJXZiLjZQhscRTYQ4h4HLm8TCJp1P5k6aV4PcBbafe71AJDGCyyVsnXU6EDmZ69pSyp5ni6r8S3B26FAg",
  "key3": "4i1FruN2oBNy1JFtTbCi53Yaq7QWyoXz6QkpHeEZLtpSg5rt8vRYZ1hRaJLQEhsHgzEBEg6t8krv2fkzReRE268S",
  "key4": "59L73zXiAk6o55QPNjrqjRTFMKYrNQmPmtmXYURhhrcDBL43Ywhgt3m2rscJqpvGSnjZmcAKeVeQtgbYLFPTD6ss",
  "key5": "2z3RuX7yGS3b1tmvKMvfwRGJV2y7wYJ7QZ89JhkoyTMMiyoHsovXvNPAYb6sPc2Kp5puZ9425gXP1gMsK3PXBwgN",
  "key6": "54xXxjMmRmyibDCS31t7hkpQCTByrRHfqMAE4A2EM2pLKok2rx4EzB6QswQ3nxCam2fEH26GwxgT5sf4Xu4FwS3U",
  "key7": "i2EnzDhwCA5nofUphFtCM1x4uvrF7HEqPDmuTGJw8XdZbQvE7ZWFi6cV7giCfQDZjHAqRy3FERQukendegauVSL",
  "key8": "5wVfUEgZxGLiPxmwH8bC1aXfVeZMCBvNrGC3yJZYusP1fpbAmnAK1De7CP9ncaSKLG9kvnkAjFZmiRZ5o2XtHoyk",
  "key9": "C6Gq4ZG2i7kQaCjzcioLMAjTdymJxEYQ3DrWRKu68vNsw2qffxnqo9Ub2Ghw7KVZtS1TznDSeiDDw1Z5Z8WgU1B",
  "key10": "3jALFn7J4G9T7EmrdRaE9R3z3YukE59voh4havhUuvarmDpFwAeqPRcBczHP3s4bjTAtpwTjDoxBjQgcKS18rUx",
  "key11": "23donkK8QHLY1fSgYgG3s5njzdXZo66gbZ5fdC4xUj35MxZK6KdbQnWvnXXGzbp7N68uJACjJJBfMQwWsrdH1BRv",
  "key12": "2CwZQxi5RSJJzEirvdKsNtqHyvrX4gb6xDhzYV4e5JoPLHENCz3HoFN2Rt2URnSTD8aMRDJUnzNS69Wj95fVoPJT",
  "key13": "4NyDATyd3TKu84MQ97zzqKqFBQafHJyVk24LhtBkqYTThXMaMBNzvDK2hwUhaYTEdgLWEPasWDLysSg9EN6JQj7Y",
  "key14": "dJfLeF6gvGhkbsqibP9FWsEJYxQZ5jKbavpKFjf1heBpwVqQQEUkq12ioNCL31f2mhFJAVdqgqEbbXaYeHo719k",
  "key15": "hDpewoJZLQFuKBVc6hotrEp2vDPky6NuN3mB5bxCVWQzm5W5D7hU1AqX4QwcpbBRSkc7P5bD5zCMbjXMpajzMzH",
  "key16": "5NYwhyZzuUWkv4mTjHgoKPe5k1ucNL5xzcdzDbX3ahXmmpnuG8iJJLX6gp23dx8mJYmgjxWKCfYGDWHZNPuQgYzo",
  "key17": "24QmJWrNUVgv92WMY36nZUWLteThWUi9xGQWebfqDvvbFwXzBg1ZrFm7MdeoizFJs9zRPaHjYbgasEacvGBpob5Q",
  "key18": "5hhr7eWXc1h7Gi5j7ssoHaPrSdcLzd9PqF45xiSWf7PSznXNLwdiqCfth1U6P9pGnkrGH4BYQjRN3aLYNwjGjrwd",
  "key19": "3z69ndjSbhNt8f49MhatjmBQr5W64m5p9bPceLK8nHeFxMULxcGysya6J3VwwBZa4b3NGcuSHVUHWDQBfASQ7sCe",
  "key20": "3sZsLqGGhycBjoeUyZf1ScmZZt3dP3RXscZpZHVWewo18cMNXsCc8pLw4Lyub2UJTmYSfaeLoZFvCVz91fA32p9s",
  "key21": "5scssXbB5V4S4j8UZQCbU8A3sy7T7Uuy3Z3vaC8qqMRXsrqiuGfii9aCtGgPkA7tKH91YcVzfgP2r3e6ba5j764y",
  "key22": "5Y2Rq3GPfDw3k7zNredh76VAqJA5gQdCiXzgE3uFptXK1NjsoQxwWnbCCfTVntnLkqSqoNFAWxZyeTbTUZubcFQE",
  "key23": "59w47czVAkFepYdmw1tp87FrvZHgGHQce7uFqU1WtMMp66zxv6KmaNmEg1tVaYx2YiYoxE8vqzLR3dDKZhkwHzZK",
  "key24": "4F3DqP9nonxH5cwA5vLSY8CcCRfXUqjWMLXDD1Crq2jWs9ubQoM4PrJedkfXNxiqvUQ6juFor8hM8ZYy8j462xZV",
  "key25": "2ewUGS8ZPoqEmLeb1KvvYD9Gs9FEQPQnmeYNieR7o15M2UMRyhZoyXErFVSKjpPMkxhGBYvDU6FKcHC95SDUZKQj",
  "key26": "2LdLa8FvZvJPjWvPuPmc6zwrreNpe5JrCGmH4iHMgMrVeZqy5txHJuQkG5XaRMQaw3eAk84Ky4LCLGMFHn2iTvXV",
  "key27": "2MdYXHeKZBoRYSDxhsB6YJ7QEbUa3UzrARVWQFbDYjv8nY3Xs3JFoMBho3RWSL84ojmoJryCr3VktARxYeTbb4d",
  "key28": "4V2UGLZfm5NHGeRLRyKNydB7YxdZTmuKrFkTKeznP2gQVM7v27DKNLb93ETkBpL13iM5MdvdgXmJGvh3ZNAmdxQs"
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
