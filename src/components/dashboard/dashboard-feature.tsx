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
    "2fk4SXbxWyj6fgxyAt58u7CiPs4YVo3UJr4UF51CFUULBvKFkqYf55SUA15RSq1mkXbjL1f195Whp63LiL7sMM8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EYE5WU3UaYaMMyQEYdidQAEzK6tj4YgyKb2RUpTrPGv3qdDYMJCKQnvbvCDiER9cYr6SEpAmLgf6Cf7SYhERhZ8",
  "key1": "5if8espWGpGc3xC4ud5TMc59yvBGcMgMT4i5NNoW6G67a9JfXo6neiMPruAtdEsPvFfwmgP9WhwhpymWsW79cCaM",
  "key2": "5fonUZ5pcZXcTUwx9Hvyt6NSsBG2Bw2jN2AUUf6qf8wvVVwjrJCeHRw228RDrMMVDyv8bo9YzyKd8pYdr1g6atwT",
  "key3": "3Jj37rVcbWakQVY8g5VwET2K9hyFkhtjH4WTwu9sRGHxXUe3wsiuNTKG5Yj5zZKbk9ivv72R7xRYi1VimU9JqnHZ",
  "key4": "26sTKtiGxrfWZtTs9S7xPas7wHpQpqcc1uD2jtC89ZpWMR9ZQ6oEr9kpga92osJ3izR8hoX37ZufA9Trzcgsp9gn",
  "key5": "3aArJmPRQ3Ubk4cCMGBSAWg5jF7cbhpuZA4vJHcMVdEQ213vDzLEFRW1QNVwLCgRycS7JJ1q9ugNBneVFBWMShr2",
  "key6": "Qgz7DHXNDbQwC8WGEsHhrubodiNB69QWJdTHzwChLoNEr2REHA32UrFycHUKapDeWRiAb5cJbFy9TwEWEFCCfis",
  "key7": "5EjpmSTahFaX7DX5KTAouA39rG1YvfanDtU3rwszm4YLXcDBKUoCi94WHrM38nvDkoQEbhpFnjhBCjkHe52UWZKn",
  "key8": "Xa69zqJEdh9wDLeEinTJ33GrqDG4ynbMCz7BfBfdpxQ1biEVSNQdpX8R8YyGB9akVyjQ8CdaWEp2csKsGmPeJXQ",
  "key9": "47pZHCXiuFe8PLxiShBpRvQNAyTrnxsdfPUcfWitvPV1b1dHaXVQF1QxGJSG9u1tXb5UnbNyMigJ6K5XTYd5uXiw",
  "key10": "5cqmG1c1mVw3kJBU6jk6JmAX3v2Juc26TqmMfenCDKJynCV92wUsD51hzZ7btDeADmW5qiEeFRsR8uzEFY1qkuCw",
  "key11": "4psMjwEycyXX6sXRvXF3dc5FnYkuaKQrewYxUUDGoP9ayCsXahxTMPzd98ijPj6HrrmVjnQ2WexAXg1djA54hvCz",
  "key12": "5cuDgNTo9RFMTchj7mneEn2SWmfh4UUhW3zCwEP5ri5rTCogAEvWg5M58tknobSEePbLm5ojXceSjmVQ83jnV4K4",
  "key13": "4g6bypvuPMsSgtd1hz3kzVPj69RkpdfDDptB5zMBEEoJTHrXttGKwJu7Y5cs4aNAKRBB9CGYtEV5vAkCc36yEctm",
  "key14": "4dCcdt3CQjTpYdWvY9GUPGhLuqP9sYD6Z1DDih95bxFhwyx7Tszo5WMUPYaHcvTT6vJMH1Y1tNz2W3NH2qGokBPB",
  "key15": "4smNhtyRt553biyHyP9vkkk1qKLqKw3Fncb5ZswZbGbcote95mjGHB5o4reQFU8Uc3VgQk3vqjPFS9TReTQE3CPA",
  "key16": "4Q9nn6A8EgMpVuLLCdX7T2SSLFXUgmingQzVmu1qq6TQPuYxygCRDQQ5bgMeW8ZRZ9sdWWMWsdqWYFyBm8XDvDRQ",
  "key17": "21sGaXevLHYyrEsbLYVBdzk1ntnvQFnmt9CSGtqxrs91NHVtXg9jwRyW3SRtzC6VjfGrXZkATAKFVuotADhiofCX",
  "key18": "2ynX4nFcogStVwiQtZRjyxEDqadygN33M5yDFMrX4DGQpRx3mVX5JMNcLztRfVEYUTAueEemaYZtFMLG1jnUNG6B",
  "key19": "3YTxV6aXenmt9ejJ3mPoHUwgMSs4AEyc9Zi4jDVEPCEnSntAPnXoCd8UH8VMQDz2Yuy4CabPanw1nBRQdDQDsHjk",
  "key20": "2qmHshkdW6hXfAEfczn4pSaXboUUzrYrJaY68FxCXQQNd76Xk6o3azJzZeByqWmrwi4oohXwd3ovQaXoWVe3G8CX",
  "key21": "GpQHf4NVtxsfqksP3VNdkSF5gX6yM5CrzjsnnEUVCAELyebn1KZ8CA9VYAfwzcJiMsyAVPfSWmtpD5ymNyEbVU8",
  "key22": "4Z1xX2iuRd958ur1puBt7gxGEHApwGSBk3UxaXBNyyhdAU3eYHsAHs4skdR7H54UpuCXNnqmicyPgeXeYBedcVzq",
  "key23": "frN2ppYRW1v4YeNQs6afhZh1xo1bcZBUQSmd1kJ434FNMoG7aJQx6Ch27Qtvsm1azE1CKdK6eGWVkEfgpvDBZ3K",
  "key24": "keV4p1Vo1VX6bewuy1YAVjMQ8UhMqUpGSDZ6WA4VJi3z5TCq14QPwi5uhJGHTHoHgjxR99Ff9PJwYzDswjcAFvA",
  "key25": "28mQo4oZn8bHD1cdksd3TjDTvc634MSJC7K44TkvTwvTxxD3kHFa1xJ7NyB1dP2DTPzrQPaUgPLS9tioCJRFW3oX",
  "key26": "39pnkLPSrbtmMRnXpUqVjeqJfaBwZRcmwseSmVkJuKTAMxwGJpfSavZyKC42g9CFBiwjYR4CNt5Bu5bsmnKuFHVL",
  "key27": "2ae6bfzy49bzDpdJf44ixozSXockuNktMEGt8aCXqgeJYkXgj2fkvUAR4NJXd5TQKWptYtJizW6rphmRcCA2fQgH",
  "key28": "2C4hbPpikLDoeg2isxRdNmzs7xrWq8aQRDRDLnxvPDc2sFLYgLPk2uF6GSEtm2xLtyBiRd1YmuA9oqMgBkL6ZyvD",
  "key29": "4R9dXBFErjB99W4vtKh4bwT6ZZP8qSpfM5ZXVZyr81Jb3KxWE7vy53wrU9HPx1Bcn5i1EJKoRQkKsKA66BFBR9fE",
  "key30": "63g79Y3CGwU9TRXkFSAggAe3yYobVz9cmFRmYM2iiicMNVbFXcFGVo2imPBC9A3oLNBBqEA7ZtddjbF5jFGJSE8m",
  "key31": "3eZjSNjSFmyvmiM71NaFiUzk9fmoSUBJrtYz4p5yAs3XdUKhqQpoHGtUe3Jq4SE8k4pXtnaCNHCGsts8Mau1cXcA",
  "key32": "3uVPZ23YhHtPRAmJfnCXwp89o1xbvPoQnYMo6dW1EeBhC3TKFiCUqpngDxUjCgPHGG7WvJCie8ToVjejLzqRjQgd",
  "key33": "44wSNtH7QNFzVJYLyn11MunpicdeaUBBzvsWDhc6YTyVTqs3N5p4YEhcUyUer8uZtzSUQ9bJwScBfJoMSEzkmYAt",
  "key34": "3U4yg1Ks7KKNyuvqHYUnvGVMy78KX9AZr16D4CSypC17XW8hiXidVMVNu4qFTNyCbJrFCMngw9ntNoWZ42rn9N7c",
  "key35": "EgbNQGV1drodrHAzMNVBZZRuycURDaz8155m2MAbD1x38HMC4N9BKX5xjfkHyShTfrh5aKyKaQzTw7mtbPucTTu",
  "key36": "4RgoioRA8fNVV27uUXqRfzt6AFQHv7k9jVxaR1onw11wJ9xrcvE4Q7PrKD8AWTWNH2BjvBUW63xh7HDKL3Ed9sng",
  "key37": "2HFvykxCPARsspxZtrw3h8TWD67DcWvLZqRFfLkcwMwESd9WtFPapar9Patdcj3u2CXLCYYbbbY6F2QdLX66NEBB",
  "key38": "33RA5pfvQovLdrGvzfYd4WoNWvCtWvDjbpXYTVQ2sHBsnKo8VbJDPFZeeQj7DM87zQsDTmZfnTPyNiHytjDRhNsv",
  "key39": "fgQCwUapvdRzxqByCBDpckevPqwkQxHYNw94UTFzgPkphhiSwyJLWK9vsZgsVWxYsGQPXvu1e7NKx9ca1yACEge",
  "key40": "37d1wso7iwBAR9KEy7FgnRvjTtpTzdEhUqXD2kSDhZWkqmiKTZrRso5chpdFn5BmbYmVknDFC45rRuTcbnHQGLHd",
  "key41": "Ux525waxPnFzWbgYLrP6NH5DgsRthDKkSEmb3ioEiKNm9aZDyWbkytQMjE8JwaCV5tubNL4cKrxtPshVhmbcehf",
  "key42": "5wmQk4FYzrr85JqrufjoyLayzNGAaP2zjf8fyAMyQ6ccjYQuxQycMzy487WVPKmc6btwjtcCa5Sw4QsmXsva9xzH",
  "key43": "4PbrYSUbncD4CAYdFAVgVJCvkERwnyrenWNmAb26Uxhrrvxb6TcDYScJyhgZFbYb5ktqLgZb5F9qhKCXPmM6SpX6",
  "key44": "5ip7U4hLVcGNJ835rztApUtaone46H2oFyBRXbF2ubuTzrebFRuXbGfNuCdDNS727xrDBUrA3vgZfZDbAR71YNFZ",
  "key45": "2XDySTYjop1DSnSK8QVBMQBiNedD96FG3Uqa1paxwRQg8jq4QySJvPDPLYDNRTP1SwbLLyeistiQQHveF5e1gEdM",
  "key46": "2J4sKbn3aweHpt1btqB1BHqLM271TcjoGtxuTXaoS9Kf1UzafPqw55U5n17xJg4gqroVF1N2xQfdMzAvYWuXbEmi",
  "key47": "4hC4CcKwY2yx54K6L9VMqcv1yh6Qz2t5gUXRXB41rCxAwfnLs5gDNUyAkGUe73LcDMwYrxDhfmaHksWbv9bFR3fJ"
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
