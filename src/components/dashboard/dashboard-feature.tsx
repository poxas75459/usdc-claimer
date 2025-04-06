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
    "5JzCB6aHApdMVA1ZHhFSapfGHrMdtc2MmHQBP3faQFCwzVmNf4wZDFuf7yx1Pjb6GTEWWvaWfG2zqQRatXjx6oVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KCmH1svBkSCusRDnAC9B6X8inctSA7BPuSZttkq1SdVEcCrZ7WxuZkhkuLwMFJKVDhjfGUEQppN7S99LnY9ohtF",
  "key1": "mY9m6U1jQb78fQrc4oz1JMkM43mHuVu1axt4TUbFbsf8a2QXDHLqYz9omiAeHFXyK6vDf5RqMqz2u3WGyYkukwp",
  "key2": "3RmTQ7D16T1sEYT8ExYbs4mwNHPuybLmahkb62CwyRUN7BW7cec4cdeZZP5aqQ9wzv6p8hSAv5kVxYbrVPibs51E",
  "key3": "3WQKQ74NXgwapjDZ5NPoh4YofeHvTqHpuRru3JSprdKrmX6jqwWAhwmshsgHYBZHpPSXZ7EabXX4ZjWVGZa4gYMk",
  "key4": "5aPseFTFaRG3ADFB7aaHBjKb7z4d7VsbpzEcemi2qfvcfSjAAsqLq9akovhsMbVzbp3KRn4QBxvSxzWEJFxso3V9",
  "key5": "5anVk3NbfK8JjR5jAUQYNZkQXvY6MvrJU5KzgSbz9bP8h8jESYsrFG8AXrH8Zo4CATDAU9dMkysxyWHUeY7CNWQp",
  "key6": "2TgdM9JQKX7VTFQjKQ68oXsFhWxTWgFaCzvAk8GaGq2mYz3Gq6mDgg5qisqPSiWSyaDiVqYLY5PiAbxfDepQT7J9",
  "key7": "3rz2jwGwV5VVDyJQtxy5xGQHwhYZrPX3aQMHvmiZDBezAR4dpKqxvi1RhwdCcKA1mGfHcoNNwx3jX88PoiN6qdyL",
  "key8": "5N7ZuewaVpbRRxLQ3V1N8BMGvpjAEd1s1q8ipfX51sZJtpQhEgCxDd9oE5DJYr3XvQLpKeRxPjq37SKK2ki8Sxrk",
  "key9": "f2N7yCu71t3iQQByggRp7tgqyefYF7KaQUaRc7D1st3Y6bYsaRJGM4LqyTwcTr3qFuxhiAmEXF8n3TArhgYiAge",
  "key10": "4L8nSdtiMNetk6pVrEMVWVKGGEkcVsrnQZPJW1j2pjZPJGgcGRGonWsfGXkvgNn7PfCF63Q6qhoUkvb7mGhUEY1w",
  "key11": "4GMVmS2DWxkQE2CbhJhNqo7UPccevMnKDH6my47MCqUopZT5Z65x7doYSM4kfhpi7MjWdHibhPt6656Z1wgRwrX",
  "key12": "3HF249f5RzMBsMagnjHEtnnkSGh6ZrfKnqFsmXM6jCFA285VLWEKVC1kfh64VFV6aPiHLPzGgXCrZ7MkyHqHsi4X",
  "key13": "2xMPaCMUEYYytJeiLkbk7zy6XUykzma1N6qd3XLLTx3sUhJrVggjUHi7zsjXJr6d3FkjkDnaPcFnCtSfEvcNWCMc",
  "key14": "8Y5qFWTNHSXiRdpia4pTEELmERWF9rg225AXcUyZeHASBF4XC6aaWMk3JC7keyfcquLf3Uc1tVuNzjZGqNNsQLi",
  "key15": "S4GfvLhmQV6LQgCh3UqacDFxUZFcN5XtxeMKfAzvZqw26G1X32PgE1KTaEsjVJgFQJ5F9PqswMhxNYo24Z7NZHx",
  "key16": "CA69q2Fh7QS43R3uoaD7Lkp49XbzvGYw1yFDPh2nTXKQCL3fiRkjW11KMQ28GECFTBfYw61eLXMRBSJZZzGiYFs",
  "key17": "3Jb9PBhRbf64t8TadLNnVUwMQWTpvWuCTbi4fX554N7cYk7YSJF3RECZ4a4FqH2JjAofRPysPPo38Mq6to2NXVNz",
  "key18": "3GH2RY7s3kXv47gTvr1qZp4cHCtth3j9mc5jDoCTZcnkZ4LX7xkZxU2uizVZhhGox8u6fF3Z5P6oBNPrebFWJVGH",
  "key19": "KYcoj4C5Cddkm9Sgs9XAQPPLEE4Nk97DSz7pwsrz5H7MDdXa99JZXB2dm4GbaXteood4hLa3Fqwpe33eP8CVWvx",
  "key20": "2xvfzpZnATge4QBeAx87VJDiw4N5xVRzb6pCgSe1onhXoU5wPgoK76YtCZDPqdBJhYCNyDuG1SgGGhB81gJxSS6E",
  "key21": "rLtxEM8jZUv9exRrRvJLEFLHMwj8m24FiWQFrHNT5q8XE9GUAD7mhshcYpq8Pff6tuozFZDHs8VJcxdfZ5t6rY8",
  "key22": "3KE2pFyJn6tBM79iEVGikxsBNLsHCxRGphW6uegayu45f3U8RyrUnYjjtuDKgCs7VxpqpdoifA4mW64hAtdGWn1o",
  "key23": "3Ns1Gb7qcaxio1HBx1rDDAJ8ghqEzCcs8rxGD17gF1uaug6G5hMnA2zHNXddeAYLx44n827jPNjpdQLPkVWV2Bdc",
  "key24": "5M35EvYKKQQi7coQ2LmfSFFozByaodtEtHgtgEaHjmEJv9B9E62hzfA4oHWkEToBDPwpdnschU9vVW9YksdSkYPB",
  "key25": "arCCyESKb8XHW2TTp7MoySvVCdAnjtthaHr2p264t4E1X21m1iKnFWwdUAJb8UY3nEXsCuNurbfLKwj7JEkegPD",
  "key26": "2hJXnf53nAzghcywTGt2KRhAzQg8YT8VYwMoKtwauCgNTywBCk8BcUvGT14ReDCPpdZ3tbqKCSKvxKVvsFzZEuHH",
  "key27": "RA8UEE7dvh94FtimZwAaPD9wxxcXUtgaUejsopFE8Pr2X534Q3yo693TfmCH8MgV6uePLiX5pJm3t3i7KnyJYgm",
  "key28": "cuhyrzdhuc3cy1hv9Rig5bjFfWG9cGe9rTAbr2m2V3Lo52dBYGBV7oxU9GYR1RFbVaKU36kjQDZfJKaK24datdS",
  "key29": "2SNvxrw7hFAaRZv6EgDxP8DGJhrbMyXLchatL7FFGsPJrfWFRAyZyDGjy5crfGwdEKgqU6uEgtqdTRuDeHdgQqDC",
  "key30": "5Z1TKeRvFSMsjhDRh7aaMxK6RzhKPUsVsfK2vmyEG6RmYe22Ptsmze1nqrPCvisBmnudyv7zTQunCKBWLk77ESeB",
  "key31": "3YU9GN1W9HCRZwsQmHhGD61yuLtUv5LzvNgp9mZFvCgsEE75HFYvWUs9hbpkCqXXkjBPDxarbahbXLJK8Xtytggq",
  "key32": "4ZbYNuAHfxsj2V5bsENHrABd1xTMNzKT16Vb7agnf3J3pWRnf4mN7kyH9ZCnhy5K4FcoLa1wvGhLPVuBadGbHh6L",
  "key33": "2fxVCbKntCBAeic6Zf54rTvwesUuFhGDYziinzYsyCTbhSXNr2qCwEjAoNvoYPULkvJJeYZXrbxQRePPytL7Dqzj",
  "key34": "5kVcwjTKhZJj4UEoZbCcgfY51m1Xp5oxRyJoxP5MJbJvuexrvV7xfVK318k1BbS3ekdndKyo2vfSG5KUo54HBzbM",
  "key35": "2AbnTzXTijyiEW7fV79Yu1fp8qbc7y2tdxGUnK7SwqpAmeQ2dSzreo22PAfc4sQxbdDRvHmLyJk6XmLSNwRh7C2q",
  "key36": "5ZiaPs4WdMd8eWU6jFviDFdyuMe88Mt2KiMufRouY1cANVXL4wk2RQUrRsUKkJZ8Qqdx5rN9KMCL16Vjn32HKwur",
  "key37": "3Z1z6Kv3ne1Tf8q7t4zFhzP71TZyw1wnrdUVDtAFjmrN5rVY9mSEEqrebmWFnP1AFa2kkSdivCiEjtgFpaK4gBkZ"
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
