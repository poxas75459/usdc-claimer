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
    "3U1KUjsjdXtLXC11VBryzzuHStgerzWszWyWwhyCwWzLuAPJw9TQd7YL7YYRkJA6kLKbwTtKgoJJ62SNqvCK73kM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VJS9J1AXv8TfxUnRn8dd5d9bJQG6FAyMsrmvUxHXvdbWecbr5GopnqZmYe18XTqzUuKiuZioEGiU5Uav9Aokkpg",
  "key1": "3oj45L6RnxaABs1kLu6Q7iiVZpeS4NGB4dy7xNqkUTM7cRo68bDixBi5cCvHyV8v8dB2Vx1GstthYJ3RiEmfw9Q1",
  "key2": "5viqzoQzx2KTCqPW54E1jmDBtAGgzhF7Pn5iqTyq7jVtpq8mpmT3XqKvgsPVPsT9arsRUUztt6jXHcoJZm13uZv",
  "key3": "2yyDEwoXJG7QoaUPFMbzNNaBfAV47xPDJxZatzJuJvbas9mrULsf44SQxdKjkk5TYYWwB8PeLnxkFugh2dFvknza",
  "key4": "5eg6QEYaqBsGPF4aAWTiHew5zRxjJ1wevHyDjRuAC72rfpwM9VfBNGJ3FERBTmmLw25Tr524FYr2cYvSZcjNFr4",
  "key5": "94ML8y5pouep3rNJosUk65M5iJ9dZmZUBK7m7sAckQDXscZKv5dd9HEKpnxRcSwKUKX3pJDTviuKkwvcZwZFvF5",
  "key6": "5xYzBXSvKUTaVxU7G22KnDyjkVo6XHFqRfQzjnWxtFadRg3yiPfRYCbCYPGzeaHxv5YbcJfLduAHPSCwTfBK1acS",
  "key7": "3AaipSwx9hKezQNt7dkX5J7Z93YfgUbDFiW9qqGumkWUyQbygkXx9qZ35J5J3Fm9JRVzjPc4XMm6q759gFHccLSu",
  "key8": "53m8KJzWy4GhVspKQdHTTWpfGuT8gkmRpMeuK7Ta5xKiHTErhMXdzQta9JXpF3tZ69t3GL9ZJJYzRFZPEibszJ65",
  "key9": "3X6VF4iTUovwMJUF5drURDKrAxBBJDUffCGZxp3DZnMVkDdmj9tCa3JfQRnviYssk9jQ69dNxw7ERhB64gqRB47F",
  "key10": "5BXdrSFbNdxjAHwJoKuavpUwxWYJ7jEJxv1agYMXB1STDCPkZ1dFL2nCaT9zT3x8nrXopJ1gjESP58eBEUjSGvqT",
  "key11": "5JZ2vyLwsa1pxUjaqsRkHTujKEjp6Gx22Pe5zJmSGjexXYGpM5R7GXm9B97CQL87rCozwK28fd6opxhEChrvLnRR",
  "key12": "2MtzYoXCLuy8M4vsafWgUoa9y3zoZrsYoRxYp1RfYofsvjDH8e2HWR1hm1STjYzhENN5cxhyFhjBwdSEMgju5GYV",
  "key13": "47oc3Kj5vJYsi2qJMGHYtsnaJ4BS3pkJ4vkMaHBSJzNfKJo8J79gk31LuohsWdxVmFNzpUhN3pCXisq4nZwbU3YX",
  "key14": "2pAB99VYgSm5h58F5hUxavjcZFHG347EXrUMZ6Cghu9GLppgef9ouSyvCFKEN3aoH8krVdsHQBumFbzhfZwiyKEi",
  "key15": "2ayGxUG7JBzLSggSe86wyYYkW11ZWSJpocppk7yf7pm8DdMMzFGeBYrUBgpuc8sfkkaojU2HDNtPQ3sNxVbc4o7a",
  "key16": "295qafvFxpiSEYkaccB9NnZHZ1jkbuY7891YQTeM1XJJ587XHqxbTxERSZaRHK9VXwuAAcdToHcGvzQsYLCuhC3f",
  "key17": "1iMDbA8yVrNF3dYJu6aU3jDw7PFgBzbwt1d5D4w5gXzhwydZPNGcxXPSVZVhEikBWbEaQ5Kvsn2zHmiH5kvjpEV",
  "key18": "4YN8Tvoj6tPcEXMxdrxFEviNBo38t7YLDj7KBnrR2uQnuWHqTi4v9nUCgKoZpdQkumswj5hmyuEnQWmxB8vA6vfn",
  "key19": "2sFjdkba9oLiKSzdRz8J8UMW5VAfKXpTRKeyfEnGFzBD8RwzMkKaJifsWrzRbVGxLyC5HbvecSzmuwX1WjRpYPTo",
  "key20": "24JTgKz5oh5mR4a2Ythvm3YwXmfzwCaA4UckixXanKRqqZzbP5ccHrRbbfndUZkLjReqPnAAtJ41SgyHyv2PFoww",
  "key21": "3CeTiMejk8Mn5X9zCmF7TZKgsBMHqCnczS4MqDJDfsVNwcPoKoWvcmnTsP83ooHrK5rH3uxdp5Sn6nU4kqXwwPWo",
  "key22": "4ZmwjbANgFtDNkBgHeZpBLguMhZqUQmkfTKc1X63uaytpaNFY4nC1B3V3GF6D6WZD2dkd4F4iewJyk648xCD2tjm",
  "key23": "4dW7ze2DpVVapuRon6Bb6D2NyvzCkDz4ZVMr5j3HsaREYHZgs9NdK3DmHkyRSFBcu2QuFSxTRs3k1XNUB79pwqL5",
  "key24": "jz7T9Pk96A6876KPmwJk6wKqXSABTtLJcwBWk228kwJzzyZpZ3rY8wf35TWcuCHUcuNpjvfwRWxubjzX5c5Qr2K",
  "key25": "zXBP8Y9DU5RtVzPEQaEkhDWuyQQYrQhBPijX5USoh4L6Qtzj2ANhXNz1vxgK62uPpGafLZubijkwzkVptGkdZ4N",
  "key26": "5aNFWgtsnVoTydWDwjngRYjZX8z8s7sRhTHLJtkAq4LFzthBeiHH8Dq4UyNiHEjqDTVTz5Se1op7KS3CkANQqsR9",
  "key27": "3cwCCUvjDNdUpNk58kkQ9YCYhZnGCjDZfBp8vkBqsZ9yytURYkb8fDqmQQ9AFiSikvFETeZpEPQtw8fA8EFJJ8eh",
  "key28": "dQANFuQx1dppt3GsCuQJyDdRZHhKnmqbLvXLiw9RqfTwPHnJuib7r4phU1sdYKtbcim6nBzWGq9SBQAkTpGP3Hh",
  "key29": "5nhTXsh1AQo4Bs6bB3rzr1TvX18M6gW1PAu8Cth4nFLcUNuAbtN3fjCcvuv7pEAHmdZGG3zbswXJkUjjTdQGKt1h",
  "key30": "4q7TfaFbFbgkbLkLMmMhHugHZWmyT33cG59UohwzVrua9aoeM3fjiMDkJvEAxHzTdMNGLCyENeuaZq8ALU77FYSw",
  "key31": "4dstYZqTRK7mFdnuzrD7YdgyWGMM6gxJEmtQNs2YY1x9wpQ9fvHKsfNXDxz6XWM7v2yAei7ui163QskeKnRxRyYB",
  "key32": "5FmgUH49LmC3KbPJbeFBD5LB6U3kfZ1sffHNPrVRDF2iA3LjAvPHCcMU3xneLqfnLmZFfyduTYDxCpA1CVEYPd62",
  "key33": "4FTkkr87QWyvBPY6XTU3NzhZ6Fh9nGMrhBWLkAS26syfxrKks7qX7NGTThJGnSFTFQJvM5imhw83oNhaLoZcvUpv",
  "key34": "29F6Yt4nGCZ3HZA6TRc8SmBbR5fVULTwUubytCCTYR58sLCK6vge9BF14nrTyhPN6aSGgifBKKh6aoE3kvSHS5wL",
  "key35": "3neRiw27C4tQjb4fXACjNT56UfybSLSc6Ga8c2VRFsGGy4gew5De6vXdWpAgLHxAkUooRrQ8HRBMMG3rRuinh2WE",
  "key36": "2gf1WCtJoZdmqC92FQVGPDHaZBrmH7o712SH2SUHTJxXFiw9nwjmc6LnT4jVMvsRjL5KA5Mb3woAuyQSMouVyK2k",
  "key37": "5H9TsvWprf24KHKaNTyzi553BFeZnpYTxbk9BjjCq9ThdhnjVnH5ao5oa9GdyF6T8UhzDXjkm6qDci9WXns457sR",
  "key38": "421Wqa2WZDMwW8tvwcdpUGiMfEM2VQJkB4dxWRdroxAsJGAya9HakTcsx2QG7dPZTNSaZrKvwsLoUTJUYfgxtDHw",
  "key39": "39Ju6Uev3qbujJoTjt6QgocJA7MANk2u9k81DA65ntJi6yobtQHNEPxZw4PRQ7sac9QEbqFjqNmE8r6SpZwjeGz3"
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
