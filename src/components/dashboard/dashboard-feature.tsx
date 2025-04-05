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
    "2s9ZJBdspPPdjnkQ1E3pNdzikjHDLpox23FatusHjaZujtHv8daf4zySifzcPWvm7DYoJeGBiVW7vkfbq14okZDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T73Jm3sRmziF1XSC2mVoWUNHPXVzLFHVw2FyYdhRetktXkUtCBvgaGREhoWLhiMZU2zXRyCf4Vm14LvFWn9P9bC",
  "key1": "2aQfCyA5rm7PZH4z3xBnEWnrkQ7cHnTz6BLbhufUFxBp8c72fngnVTYa4DPghyLPxpotLQRcgVUzWvF162G7y85o",
  "key2": "3LYmA5nqreGpTXVBFHhN7jSqVgQW1wUXcFNvgD8k2HJ1ZK6iwo3X6oF5GZ2CFZT1i3Qe1Q4C9wsXZLTWXoopgZd",
  "key3": "58gq41B3VcShtCkZoavxN26xvW4xXdN8Xu7ttwJXWeHEcV9Km3c6QoAHUBfde8qGwH1Dj1Ni6mHU3CT2K5aZ5KPz",
  "key4": "55ccKJfAxGQP5FNLgrXhq36G7sqUbyrK2apiveQMFQcXFcj6fGCihDAwno1mgLFVv9Pigi3yNmqZDZB9i6Py3WF9",
  "key5": "Wb8nVEc9VkxZ3EwdfmKdDEvntm5GDomB8zJW89f1dxQs7TZMJCBJCBR8vwBhmo3BcCYit8WTSbensvw9KmA5J56",
  "key6": "5A3ZhWsvFcmToNsqTbYXA7DPCw6XpBR92RNMJbtc6sJLZEtniRHhYAwMKUzoKbNNNBMsthrTV1UaQCao9yeh6zvm",
  "key7": "AQykWe748JZfKPUn1mjuAxc7ttd5bzS2wtNmuv3BEmFPhh7tNptSqFXPNtkSXShiSJKYBeh4weK1paCkU4aJJ6z",
  "key8": "35svTxV7p13mDYD5WVqGQ8oMbo9cMNVv4E2LpuJVBiqboP2AYJGouieat2C17KfQRLF2pFzTfXNEP6iPqxCEdBFK",
  "key9": "1stZCDdutL7SCMac9RYNQ1DyWW21kWVUBkis1J757ouat7hB1D4Wx9qwJnw4hfBvZQrJafXTFPRGHJv9BJAkrKc",
  "key10": "5DnwxgtAitC4YmbAcr73X52bdHtRiRUYTGnWKEnSz3ZR2SpdDgz7pKkmY5vQMyemqqfEhz7qh4B3xQvKHs4FxP2C",
  "key11": "58ktD7iQFC4cmA1dfBgzxaP8XNK6Qf8D1vRfBNKKM9KGZd3ERr6qibz6xRoFpPTsbavhcvc4u3uuG9xB1dSTDsvE",
  "key12": "LyZaQ6aUvTkf4oSCPc6YDmd75rvUSbVYdTccQ1fhX3nzZANBLY5ndJKq3XGHbxUdtsrirsiY3weHEBdckaWeL47",
  "key13": "QTvUmM3SF8MrhPyAPGucpLqXAycFvHD6KqarD3cVUnneKgaAx2ew4tceXUed38Q3J4wG6B8YiZDXRoydGoZpPji",
  "key14": "2d9nLDr4BmmvmbMAHhWjXqsWps2etGwvJVWu2YxxmutqiJzt55RTF7Ao7afWXWdCPgCRvBxfVittPf7CrxgjPqG3",
  "key15": "595RVJ8FtzVQJ6dFqTr5jeNwbVKQSLZVk5UGqF1n367TTwZZHXW1AX8NdCfNor6ccjhWnFw9EEyS6aFCoyQMXw1s",
  "key16": "4Z2rLL9iZacF4SZHeuJbqshzQboZztBA6tdnB9WGVz76rEtEek7MxQgBjDpcyTMaguf35D1zWXwARRx1U2Ytdptz",
  "key17": "326SDQEV7qt7aWG9TWiHUSxaMmGsAvB4aaEs8DKmuBzKQ19UPsn4Frs2eZBNzHy1Tw5t5rcVqH2JvAZit8wCKApc",
  "key18": "nQ1ZNrrENEFjiEDdVFGexXvNNViRRY1y3QPWYCZ22Vb8cb1HurCUNoqnRuo8CAupcB1x9RRhJQ9QFX3vG11h31d",
  "key19": "5wb2nHKwuHsojGLBYa8DPKPQJNpSYweMHtSrGX4sCpsBTADNUWVeGrjuWEazPBALcpFMofPWSso9Bs5LtQmjZPn6",
  "key20": "5dJoK7o4mDXjdEVmVXvVsvjkor3kXSHx63fL1uGYkgdBo51XdAQLh5Ln6otLk8z3Jacu6uh8vaabjyZNLh1xU2U3",
  "key21": "3Cz3n7mZebSYiGuFgTBzLBUED5Gdy9UsBSncr7v1zN3cQpZaTaWMZFi5JdyRtYCvmLQa7zgXEuWhCm4n5iRQ5rCc",
  "key22": "5kZmh1gYS75fCBR7fXQv55N56zrH2AfP6BgtEQVzEpFR8u7oC4GA1gRwscz7EinuJvU4r9Xt7gYm2SvJAg1KCzfH",
  "key23": "61ZLmvm2kEyzMYseyXKAzqsAXzNh1GZr8pbHB1WTqTuihiXVdWxWUAqsajzwNv8UwNGEZemE4KTHd72pkHoGycPg",
  "key24": "5SSRFwuW3rHxzw9PoSnFAKooYRxps5uF2HaD4iGZ4beaoRmdoffRXoAaBKpTJ3kNU5NTL29HhcowSyaB16mNKiHJ",
  "key25": "2YVBu1rMZbKPNARcCDon3yiwGSdNePaa78PWsdNh4R8pYd1u5ubKK3iFYWvh5fustqdkqVShcWrLCvSS8m19Nidh",
  "key26": "3QXhZB6pzC1vkpGRgGt6c3eWHKL4sckVj3BDsYEfCZR8Dq1K3xMcFtySyi3tDy8FGJxLtc8akmrWM6Xr3kPs836k",
  "key27": "5YfmP8kBQ3jXbrpHVkjnjyggZBNL7Y8AW5QyRDAaK73vBuF42Ynp7aqp2iejwAc2NUJRkEkDnJN1KhVAcACVAAHH",
  "key28": "3NM97oouhY64nrKmUcDvNKnpNs3G6HfqvWrSvSQZBbmtw4zs7UVtyX5d224PPVhyNuNgcLo3yVACDecnskP2XzdB",
  "key29": "5LrRmkhZvoWsZ5DiCV3Bbo2HzETaAJpBctpChhzyKHjSExDRaSNyhhDf1UT2nwrDPi7mgbhAGt2UMgZkykCFiUkp",
  "key30": "4wmMpNt5WMA2tonAQy5frAWnxq3ys57wUgXMoFdq1Ug4JuTLLqza4a9396HgzEYXdx2qoUUsKV9uDHGUD3HDFc8W",
  "key31": "5f8ov34hGxSvswnnt7LTkPVrxoJyRCrxf7LJFpTLmDig1ZZPZAtAjwzU6dnssfWHaryJdwK3VtUmmCa4FFU5Q32r",
  "key32": "3xw2kMTWsoPVgFAoHEx17r9Vuu8qTvsGUR9k2Qmj3MbihvfBqrEJTxdZJv4bps2nGt9ZFH7Y5WrtapPSnmkf3vKb",
  "key33": "1LfZc317aLzmutni6L665QTi7cp8hfYsJnk9hKfdnhv3urvBtXVSMbuvfxxU4evqXnQRVkdGodg4jcrcFFgGARb",
  "key34": "2LCHzvh4iY59rAcq59LN1akX7K8J2MSncGZgoEvWJnC2faskWczhLGxcYTXRYqmTwUQr9r7VFiSbysuuhNVBmLpc",
  "key35": "5PoqLfWt2J2EuwMKJpBqxNwJ32E9VK6tGFZYjpK3JkbRQA1kVWXFsYQ4cQuAkQarhSMwcv5fGwUo5C4CYKMNGX6",
  "key36": "3sMRtHwh1qS1sBJyyG6WYZrfz4y9cava5u244vWCqJNvPQXpDuvBgk1E6u7mZ2nfDpQyMx6he2bbyawjxYhWyLUv",
  "key37": "3o2XyiEAjjtCt5N2g7SXzkDYqGYmrhFYqpHHNodFyxnVmh4J8XngDhf9oPcbysCkGZMZVxDVLthd7DBQdvL4mcra",
  "key38": "2aJkF1nHCjcKF3jcp15XGBDYxtUmFFs899HgbauL9whRQKXFtTh2VHERp9DLhWaSaH8Kd85bk6amDyQpjWkqhAcp",
  "key39": "5XRuXP5q6BiWxfJ7SMKffrXWzuocagqtnTysqKr44KENBeskyr1CiFrvi9oszaXdSxmGycN4ptDrC5xU5W7qwCqS",
  "key40": "vufFexEy55Ku1wbszMXjhMS7NuijSDEJcJUqJAX6vGbmbuSVA63sw3K138Zu6pdG9nvjLVMXg3XzPPkcbmHMEPs",
  "key41": "xdCeL7FXZJaEiPntxNqJMqV4pDYrSYJYreQ9PUidCR3Vajh4o2MBv61v5DMBYeU4ECokmbJxXyNrurbvk4Rxsfu"
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
