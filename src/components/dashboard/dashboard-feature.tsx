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
    "5SQRHgy7JjHhxC6iPBMfp8P61gWjDsAj9X5qyAoRqP8RqdCfaU5ZAdw9ofgJynsMhLWHHmHCde59egTxT9NAdhF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BxpWgo4NVvosWdoeFY7CrcQ2483DAQtMoyjzWxbhL7bpxnosxUrt9tVrPLhpvBV5DLFaPkq2LY6bRHMcb2kxBMZ",
  "key1": "2XVurmwsSZJ2B81mHREaeekEcXU9L6qBzTj9DqJdXNDicJqBe57wu1GkXyzUPp9LbQDthUFhZxvD4vN363zY72NH",
  "key2": "5GMNVeXgapL5hb4LtMzH7R8FTgcVdzHUFgeTZTuP4ycVTkzTzC7R8HYcTDXohT59YdXKk3V4bEM5dABhgMovrbDb",
  "key3": "2vcYUwLR6mXmHGoUwtuoqXRDbHoZ3cL8oeh1WHTezEDaJS7pdD6UjBUdh4jQGdBMGcWZxMhCSR9bQXj4LksgsEzW",
  "key4": "2rZXbH83ECWPHrt92UhLwNR8vmrUPdw1EcbMpSivxW7Pnzw76aEjzUJC8Qnqq9s9QuwKpiS3afEJVMwYnitnABuf",
  "key5": "4WUJ1NcnoCD3jybLoAscZUvyzg6A4tqFuPufPjX39nC6KL4UHDDkc9zbH3YWuGMwtzSRYXdgb9dYYv7Ms4H6LCeB",
  "key6": "374Li8fxgjc2MExZ8ZaVdQSDj3qLHYUJD5QEheYwgEims48mhk4pU4Tbx9W7U7ZtUGgnqYYrFbuo7baehzAhq97A",
  "key7": "4dkedyfEtHmcxUE9voVqsrpnku7nTpmL4Bu5Bgtdsnu4Axb5TbeUZpLNHNmGyYJ4bWCyTdecLHBrKqKbBWqCPYJV",
  "key8": "2MBSsDnx71CS7VjAnHM32ejfwfXLmzoRZVhqjFcrQih7uUsqKNRZUUSqcDFG3GjzsqDpsU2rdUuGePQd8MuMgZbC",
  "key9": "kTG6py8ksTCD5EAwVcLr9r55JSWdo3gnVct1vKi3rFjdG8hs1vVcqPStUsaXwNKkfq6Fx6h9Qax5qXkLpDxotQs",
  "key10": "3FgCka23CtVpsHjTPny9cRJ5bdYCMubELE5MmPiXfifKfXn5LVs2pQ6g2KpRf8TXb3ymykaLyMrEpnGrGfmCp1p1",
  "key11": "4wTG8pfD1BeiUQHuiToHe1B5KMF7wkE9SWEnKdmVYbNgayYxcZzrPAaizGstGs8S6QMJxPPsENNUwtHk3YxbU1Gz",
  "key12": "4KQYkjEGDwSPtQ2K6oe3t5LydYKBYEmjvMUF1xRm6o78SgXC7qadXbHznD5krrzHUwNzk44KqECfp6NM5N5EuRVg",
  "key13": "2CutVFM6XeWpTkQZekN3oQpZz9KmcYkexE5mhJELukJXXf9PbspFiuoEaHSxoq5HHDSUcyjFxsH4C3G8ScrBmJS2",
  "key14": "5iUfNzCR1gw9Xzyfs3i8su63coCLrgyw7qQ8NLtyqiZEY49kP13cGouHWAxoH2mWRfeXg3nbY5FHWMuUvnPRChQM",
  "key15": "4YpFYWziYkAUqFjFqfqcJjXy4wAR3vPs2zv5Sg7iAxm1YQA1o35Q73RTzLMjgpAcWfR33x3Xt5TEbU5v5NPwQ4fk",
  "key16": "3ydnuP2ZN4Xa44wGobuwRNLJM1C7poNuP4726kqzp19f9RWThz1hasqaUNUHW8G5KsP1zmtg3dpUV9nRv1i1wJjH",
  "key17": "3YLWidMkt51Y9Q61eKoKHhNm9jGvTF3voLqxFpAmuLkUtjVp3DXpP5k4gd7215ZmZdz9i71JcMMHJSTk4Vw5wNLR",
  "key18": "3YiAy6m6w7YKdFfHaNLeRnfcFaX3enTDJJt3EjnXjJbmuquuX44aKtFz9DbgQkJn3YH63n7x8QdRQgWLv2sFQ62X",
  "key19": "2SfmFnnUaoc8AAsJBRdjmxM57naenNpWYwaHwTAwSYbMnUmQaPC5syfQd4ah25aFovNRUPjiGznQ5t7WkxE6w4co",
  "key20": "4LuWQgoq5BznN89PgjCcPWZV26Mj8dqzpLdmSYjbrz89XGEM1ctmnYASsvt4j2NbJzjcfw1kKboKQURBA7gSoipm",
  "key21": "4H3yTuoarwoNZ6kK8nBD2mnEV4fh5GwqG7emCEiQAN8nGJiQX8mi38NBh2tqqLWtkokB2aCmeyme7KP99knhGiZH",
  "key22": "32JzEbcMtkNYJuF3ZWepAdU6GEKmuGBjiwdNdgNDapdu7m1VtG7k1vMcL9q6cAHajvjBfB2KZGSLyEjABcAmcwkL",
  "key23": "RPgN492x9AmvmXHrZyg2EUofyh5gLXkERVuUQTuQKaZAcLHYTgajcmfTchFLPDSZQ27jqKkPBafbKJTW43y8z9y",
  "key24": "2qPkeHNKZKYvH67qxVGjStBoJ1cNiXAUUECwJ5rvNhN4z2jRMmfvbHG9bFBwdVMVXgbNNMq7x2z2hkN7iTJvYN9i",
  "key25": "5NDfV2dpTvSbbg4QuhugPcuZQHXLzTE3qjuxmFfmaKUg7x1CRvwfBWe4pBQyKunKbNBUYLuMXSAjdbd4XQp2f7Rr",
  "key26": "5v9RTYjEUcoWCbHsp7vLDbYfyZMdw1jvdCeFjtkDipMKgQBeZU5PhjwX7MBbpt4NA3L6QXKktULHsZcrud6v8AGy",
  "key27": "5G2bKv9WAGFKy9UWSLLRahTAot4GvE6hUAKPu5dk2dBTUvB4qU2t2dHCYKxTkYV21T11ArbZsQVmb1zGmTLQqe3m",
  "key28": "28VEApVNQEq6Etjv4GzochxXakPREEZnVRkJdEDmwNUei5uEHwFnRP4AkJDsRNrXdpwa1q5QtyTrkvi5RZCoJ9Jg",
  "key29": "NwAnqv6bcNWxRjjGUQgK2zjNiF35GoRjBL6KPUGk8TxTdUUpnA6QRgSdAJzkC9jvJeJFS4sjADGMmeoyJLupnTZ",
  "key30": "32A21s2TkcuByLmqwiQSb3XR8Hta11skGrSm2NbQmecXUfrhBD8YieijW1rq8WGKWQT6o2ZLh8asWo4smKygDCVg",
  "key31": "59RTa53Xzz4PieszZumftd49MrmXvrS3TKZAqnc5zfeXhKgirdTiEiJVTcaQab5NmQVky4AHRjPvikHLeLn4jYmW",
  "key32": "3MVLGb7VRMDJMiQ5GGPybTdhiBZHvTftATtMeNdagMoVvT17VscDqsn4EHczTQDriuegNZzmDWBJijQmBoyomVNr",
  "key33": "3ep6PeBfN6htWJVrSZhTFKGPqqXDBhk8jJznapZhvsqfmvK9T5wFdW1qoJinFCg9vEGJVQ3enAu6Jdpet6izFCk",
  "key34": "stvSsoYYN6w9LasK6eR8WWrMVkuh5xgkLvyyWT5JbjUrven2QZNboHVHjLtnDNcoz2BsWh34iWt3hATjv7f3Nn5",
  "key35": "f82tvznt3FMYYVtbZNJtCeFUsX5FmGrpNJJJwPc7Rv4GY6LfEMKi3peghAotBnctWUQ4SLQ5CWr2z9WsDKsncus",
  "key36": "5ULjwx8worTL4qfnEGcrrwStW5Tphb9AxUUR1tuDvqpL3nE4FpiGEiP569jTsidquaTrmXkyDSUZhFrLuzhXj4Z4",
  "key37": "4Pv8Lxz29PNMNFSUkjGd1hHZYLhGGohKiKKQ2uEEVdfdhjxYASSV8spy1i5UjKVrMPMwngeFDmuzNjFid8pBCery",
  "key38": "3UaUG9FpWVz6UP9pFdiAshKt9bcKsyDGZ9SzznukSSyGMVNmC33CjFqtWVzE1DZGQMTZg8RAtKB6HtQu75BtGYAT"
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
