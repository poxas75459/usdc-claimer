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
    "3WvrKZWZE8eYYtbVi86QfH1t738NPtmPV8yXivAW6rc3QPK1q59cBfFC68sAZsJUfPZuz3dMp2bZPBgbBkocaNfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sFR8kbxXZ4wZ9WBuuKjJSgLpvFHwv2fC8RUA2i8a2nWyF1YQTKT88vBiFuF4PJDR263fAsp8etmFiKRJLzUbyEU",
  "key1": "2CZY785trW1kRB8BZArdaqas3m8TG7Cj9FWmGxHk98YbDHwq7a9y4NK8v7GCbEi33MpAS1FVTftE89uJFkBbqPZC",
  "key2": "4GrsjYMe6T6Ti654psMmjVqBcEnqxbdy7ZkpeqBjciKcgysjqdFYqsariWfjiv9P46bnaae7aypz5JqmcNtWGNEe",
  "key3": "3PLheMXURGBF5uQJcnLGEbA1tdKK4TWgDgsjSKt24zajuzhqXZEYpFVUuKRNCryqZQunE1rVq4SDgRDT2TysPhDR",
  "key4": "3fv69R8mxZqnoxNeboVC3MM9Nd9Lwc94JLnmY69S685BhZDJ1uLoXJXpupgyuvMbGkxUw1itEENy2PeR7pirDEef",
  "key5": "2Kg9cTUCeqTtqJ1X4z5AF9bmkpeTgAY2aTZ69dBPrnMcoNhGg1zRUv9Mzf2reDPu8RAoR52q2cNaKW8n4WnyAjnq",
  "key6": "275EY4UeEg6a5vSKZUSuDReWs99vkRHtZGkcNgTtUfnVQJ8SRerS1RZ2mH8tK15dsvXcQ2LeMtzLzRpfgTTWGyXD",
  "key7": "26agTpy3iEYuQc6jrvKuVkwyDuTtXgA5i42WnEXsTRdX45K1KoesUAyzKWb1LZ3LzijEDF2Rgdxz7ZYPWwrP3tGV",
  "key8": "5FgLx8XYFMJXRz3X8VDCBuUQvUUJDSwWHJDxYLr9GMUeTFgoxA6J1HE3ACHrCW1nhk9LJmLiRsUFxcLZETXavq3L",
  "key9": "2UpthojQrGAGcXzWPCbVuCMXryrvhzKvDc9o1dG32G9CANpwpXtLYsWHE6L99rhJiQsJFdfCZumUGftadFkVXnKC",
  "key10": "2jMgd8feRZQBuRDFZ1mmsX1mq7KpkHgT47Zsh7GnbDiK1kQBBm5vR4c5wvDt7fUq6JM4VgztJX9rBqRZ5s99qd41",
  "key11": "2fVUKRV3gWEK25CMxYVgovJ5tGsMVbtUqxU6YFnEDwPFtLMFG5DTTUbiPWjguwqNznVyLBTsoRDwHEzJ4wmgbvGX",
  "key12": "u84q25SQA8M5vTgtaqw6R8nhB9CUHP7UdsW1M2ULcrWZvWkqAawj3PghGVC6ZiGZ96WxkFgdTtcWNgAhKaGpQJZ",
  "key13": "xzHvwKUnpbrhs9osiufJ6JRVNRsCsvc3JpKdn384Q2JLtz4B9nZr4hmiQyvGFC6vTYsJw1eRghCQEPR99wUN7dH",
  "key14": "wjkjgSsTmqCeia4Xi5GCUQDoZfvaTKa3WG7mjTA1fLbnafyNK9Ej2MzFiJ4WNs3XChWdmgyFEVHMehuQZM1SH4F",
  "key15": "67RasNL47axvdC5tmeKu6H8xhsuQRpYE2xrUgQ6dGdutLAWKYkyrqUtzPFxzvBAYhZa1pCKLhNfQ2i9ty9sfD3SV",
  "key16": "sMT49uN7PbvhmjvAsDkHwuRo9AuFpAnQNU1AbrkNxU6KJXnDw4i3r1hgutxAnzsUjwU3zpZrL72GCeA42TvufpN",
  "key17": "512v9MVE5qpWUGeqLtvVmWVPfxpJwnxxUtn4L3BKEfo5n67SyLsVnN1KB3vDsb5j7WbY8FTiLRYSxT3dAwSz8Zj7",
  "key18": "3JW3uUmar3JSEN8PZaC2z3xH2T6ENkkBHXUWPvevi6y4u2iRbQocKcgQ9sPEdxz94FKXQ4aX5qPhV7EF9tbHM14f",
  "key19": "3ko6gm3USjB8AwFiMTHCSoBH9sxsBA32MJexGLPPU2pC6rvoWRUvUPQuPY4e1HRqq9A8qyZASkGX4sU9fKztzM4D",
  "key20": "2RhUH6FN1f6TgmHLaScgwSg1JaHWknJCHjFFCoQnVqh2iVnWtHTasmGm9KG9mkRmrXNw3pWFsQ79KkUZdvLcnKEL",
  "key21": "2RXXthjCZMm4ZL32FsodHvEqRqkKHuiSCeZVvt5fK1X4aS27nq2PmorGWi2pWiN1HhicyouvZ4K5TVtTHqqaHSFN",
  "key22": "3AaQhf1w1HhL2vKffRAtbgQN1K2GekgfiFp7JEfeerSziRuu8FyBkYmkahsTewfd7NHYErMCwuq7dMjBiz2tiXyr",
  "key23": "345FuUMZFytw1N7ndRvypun6R6EW98V9ZrkSwsjk17nDJjnD2gKr92sxqvgGJRQisZu8LjK3Hfi9TMoQhpMcvcGK",
  "key24": "57ndGzNUAoQc6uZSMTZ8RunS4xb1npAZVvezp46spisK6zU87y1yaQUmo1vpQXNoobJB7D9QV1hpvRiQVp4Agc1A",
  "key25": "4mQ7nP8QEXTtmGW772keLBx3s34Ew6WkgquFt8neG447tBQPsY4taA5vb6A7jA3VjAdLVfYnUaWNfkezeiYX6wag",
  "key26": "5XQ7FNC64ykKJzSxJDyigD15cTMKwdBRsQweDefAFaLRwxRGtSDWDTCEFFnRL3vGavHwqHfJdBU65psZFpnEVEmT",
  "key27": "2uQU2gTVctf7bk8LYvd2Hc9DxurK6qwHej7gERuE3xdxGDCJBJd3MiLAeae4n5hbHjSUszTUjYH8Fu6KPNWKYbi3",
  "key28": "4TJ5kiTVhwDg1FoYbBhrxa7VjDzPALfSmqhGpJUPohQHxJZeGcpsb8JDp6vs3JD5PMf3qLssiue323ZkCm9wRxcb",
  "key29": "43SxPd6JgsHH2PqMis3W8viA4bqKwLwHbE8PV5uiFxQxCiJuoae39Kfx8KmZg29RHHnsyXCSrTd6Rnc3G4ncScq9",
  "key30": "DnPcjsFs6jiadXnU7YGfjpGzMcdURcE5h3jjcX6FF6pb7oVXdEPdipTDeXjMvvYB93DqtWpsWVs1eLWW33XwyVq",
  "key31": "2LARw9NB9ZRMi3ejXZgv8SwnC4PMycDCMqC7mHQpB2833sgJmP26yAHYpR7v5u6QrmsKuBRSEzW6UpV3cxDMWmSu",
  "key32": "2KaPaUpnSXfzMwxUdTyT5S3zLQqv8DRjaQqDpSXKsMhZaFAZjnY3ieZpN7Pp842bQeWLUDF4pUAeUECNt54L2ED",
  "key33": "52hqoKiqXFEwaypaVh1o3SpkPo981DHBmxvMS2Wk1JYsEx4gz26XBnj5oDAT3TACvtkWwGivbNfxgHwutKR8XA8y",
  "key34": "2A638eP4Su7kDTemjAjT1KZVTbbihKSbJVeFRNcEj1kC9mm8aK6fhv9LWgg9f9qXj7FyZdqqR6cS34LozF3Yyqrp",
  "key35": "zZMwJp8yfkTFYV6qc5c1xU3pHdWdAzBfoveHqD3ai9PAKvPaGQcSf5J4pMAfAzsSgWB67ediHgAoWxN78Ac4kPt"
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
