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
    "4rNwzaGmfskCtS5wExWH5zZQ8nLYHDeGoqc8GLaumhZybLQ8GtTuXYmPoWj2ZinXurMp3pbfwRvpTmtbdWT3xZL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bNantMU1Tn1PVGQriRwMa2kyJn9rzH5dhvU3aD6zmvpcThS2cNFNwvkZ4i1BAyGxg5ThmBuu8HjKLwjsGLFF8hb",
  "key1": "3JtTaKLaMknpUiCNuXpAWfqE8hLbi8urKzjbLnkc6wyDPzeJgnAP7PW3kzWQs7zjnVxhX8MxKJsiu1WNFQSuvFh3",
  "key2": "4Mk8zYbCS9kcCp7RDGBcBcBi1zVZVnvbPsEW31fbzon8eiYtG9ZWMp4oA3Xn88KM6yjruZqT8Pr7aLK47NiV7V76",
  "key3": "4dKELDnnLFawT8LXiG25n9p9nHZ5E8aKuQY5Y6SSUi49WKtj56jcXYF22CfVA5ooVThbKRmraoQd4SUWEiy3zkuS",
  "key4": "DvaUWGN2z5C9PswjXFoNyUxMmmHFwwVR92bfkT2J8Xae9Y36v1sUG4yf2Un4snaMkxJawjbioBp7zXQL8fEVoJX",
  "key5": "3z2G9b4qqTMwSdiv7yy2pFriuJbJ8BLA8yA4hNSLcntRBzLMmejdJSKRYeRTeTSh8sooysjYiumcEpyrVV1axSKW",
  "key6": "2T8geTysSY3X5Jfofhfpe7ayYqUcP3NGbXuWrtJF3HegjMeMAeF1GvHPCGEUrrEQw8gvGqWzaWkQeikb4GoBP28D",
  "key7": "22gPvyEipnq1JJ1zS6aNoqHczecQiVptf8h6ZTxKgCwTwXsZ6rbmsoKz3NKX7zWW7ivi7McXFb2vhCp6C5wmennB",
  "key8": "21kErKmqFqWsNAoKQDmokJ3ngVL3tmFkuegRE6suRHU9tJ91rPya3W17JeFxCm8FtCLXUcKfpRYFLh35pjYmD6ys",
  "key9": "H7TMupfk9j7PoquUaQvbanYBd193cAvug3fsKzSjDrH5Mr8MqMoG2ne9G1kCqg8mLP7HJhg4MXGeggdQR5V6LFD",
  "key10": "3Nb7xYdGMELWz9c39Sr1m7MnzVpVjwgMi5rhhd1WDCGB4sxqNezkuecgGBvmBYdYXb1VuhSVX1PVk2yGdsqzCx7k",
  "key11": "3xDFM3f9u46x1BSrVBiwDTKCcmeiBL6Jpam6nb7aWVC51YR8n3PmdkV1gRxoCQAFCDXrgU4bjBcJMJ8nvRXLcb4S",
  "key12": "2y7hNoP29j4JSsRfHyyHk8wgg46dccEZQd5xiGyDu5PoDXr68u2tKeN4UDn9SZdLdTtGEDECKmDfQEiQUAQ1u48C",
  "key13": "3L1MkSbgkDUYNEQAJ6b2rRa2JmR4LaGaYY3LuYKWbTMpiJy8KpqURUT8RzMXqDB4VrmyJBgy6t58u9r95mtpDhhk",
  "key14": "3j4e4SPPvq8wyhGBj9XQG6G3QAbN8FcHE7jTo3256aG9FvAkeHMTdH2VHVTNApLBiPKyP5RAPaWJvFBCUqaYdJnj",
  "key15": "4BJP9dkqgAvnnmhDFxPfMvhFCiGnSxukizJ8gRx4WozZGYHndhyHJw7emMYHyztvV6umaxASR262KWN8K2BunLNw",
  "key16": "4A8GScSRUbyZ97qs4eAzJtBNTw8fo2vYzZAf8F2yd3AgttLcQ3soW2QWdiB5dddJAKXF9Uy7Hn34g5YX1WNJC7LX",
  "key17": "63aeizDoDvgXZ8jDbRLCQRm62DoAcN2ij2BgiZcFd2szmWjKceUook9HiG8YXit81jCByXnHXm7BZCkbcNKLHjRB",
  "key18": "2HtAwJDwqXsmmHagJ68VuresXtAPBt5odW8sKTKDZ631D3D7SViD7ZUEwby6z8pb3tJMnEZihMUu25e23biEYooQ",
  "key19": "EdYJPQ7rwVqYkxvUBopAfvAUTnGe8uDcFoMYKkQ8aMEbVyq3WyE9ZT9HQMafKzV8BvrdFVDpKcQKVkGV4vWQWnJ",
  "key20": "2dtK65P5jkwYHm1S8Ti9Z9a8wnG2pTXmiCZ2YN5q8mdmwrYDndrZDJNMRAzPgw69rNXSiJdj9X3RTvXYn42w275S",
  "key21": "4xasqKHuj9rUdoe8PmYPxzmQFnXHHWCfGY2yDq5obfN1Tet69VcN9p4otdvMafPtsU2EzAARQGrTfqV44o7mozPV",
  "key22": "2Ru1Koz7nQ8dWf69CMdVZ9f3FSSz5DVd5APzVMvSrB4SsSSXcGPXVdwahvRryBdzkYWymADhwYmucBTburVrpGso",
  "key23": "4FV9zBqGLsocBkUjFgbMqn5FEo5zAHFeMB4FVhpitjry6VADWmVVD99ZLeVCiAZadhBc1iEyfNaJghj3iAbLK21v",
  "key24": "2K27MLPuWFzyne8gqJSVWevR4kQKxae2K7qU4hecTBBpjQMjZ9TjgHqsXbhVAEZn47gYZf373zAjrnLZkwzfvD4f",
  "key25": "5bmNSB9vmAerdoebj2gtryuq1Ja65Pww3SR44aMdBy6Q8ZpAt5V3TZpTDy2z7zEUWWyCSRZvxvr9dz69C64TVaXw",
  "key26": "54GS6B8jScMvLNTRfPKWYJBXV7FpvTo24mHbjtaYa1Eao33jmHrWKRbjC6Xtx6H3EomQqdcFbpeHDNg4hM9Gb9q7",
  "key27": "5ekA2KBxMCmgaNHsoWFCbwJjGvboX6buTDrL9ESwh26EdbzbPq48pjBsBrPveP6G7hvJesUkPihvdV7RtxA1NiQ2",
  "key28": "4bULFG7PDdUun9TxUX88KfWJKnSqgnMF6pDYMfSB1XoxoPVVDmitkSaL3JeZH7aQNEWwyG9XNf1uuizxvFQmtc4X",
  "key29": "4VhBiTyqDZgFM7yB5zvXvhyN7pbo6XGcEtFUtE3SWUuCzN3pC42QXBqpPsf86Zv2Z36SQe71cLbABTpAkzh2SXDh",
  "key30": "BTtnEgftZtHeMiqXjro3Ft62kPKwkudASnekkHiwoWmV2qwq5ChuMg53rThPQrVqtwWvFJC14t1PwJTSdneYXuq",
  "key31": "m5dDpupQ91KtZxwva7VoNpCGqLzE18patSvvNGpWZjQHkEJMf5VpBeYgAdJeefY9K71XngQS9HcHqWLfCn5KERf",
  "key32": "5eyFvzDHgTtPp4WcDHmW8fdvkz61kGh2LYwGf3yNW6adXXVGibNgDNQ2BeE4xdmwP5DiXzSGaCuMtg3C2jungTtQ",
  "key33": "4GY45zAo9Y4tpLJNeNgGUs2zUJWYJyZjRZSF8HpEUCFjkar8FzQU9HnVczNoPrv4XvykfrRdFhujdvEgUpuzU6SC",
  "key34": "4FTg7xTAYzVgUXvjcnkFMZPrG17Mbqj9h5fQbjsYZ8w5s6mjTQifv6FKuDK4N8awxWEwDe9JvfSpaUmJnpzqMq78",
  "key35": "ZA7nCyQ1a3odZrgRZs77h1iLHQLszhHuvR5LPWpFNoHtJktNefUSg3BfaD2CKxkbkm1oeDUxbXgNvQGxnoEuoEG",
  "key36": "4RREACGhnLj9An14RdarWqkSFmZKp8XLd6KrtLGPBvgKf4gRJ9mN9bsMqDPi2B5AMNxqgsHysAMXJdD1oxE9ZVMp",
  "key37": "1JnyJCaxZq9DomXNaBrdyfFhqoS2J2iV5FJ6tXA23ma7zuv25i3bMtY9U8rMKXCduDFkm3ZNRPDd3BtR1Um2QEr",
  "key38": "mjNtZ5mYf5Y3PP7CAaUPMyYohGM4suVXCofhThGGPPiAp7kb92HwSVkrL1tFPJJb7EPBmz9P2Zy1iKNu8r1uBtZ",
  "key39": "kZvqQ2EXEGXhNyN63ZKE7RfCg3M23bBaXB2Zm6pciquRoGSYfGAUxFcJ1i1JTqzz6yxf6kEVZCyVj88CabukrbB",
  "key40": "2QM1FqBppWeVkBDS7pLBxnsa5CiwSx2R9YX49FJUFZyPTuf7PqMKhJD3avZvyzGWcgMfgQWDFqscJ4RxJZDyYhip",
  "key41": "gir1YCbmRjAovFRZn33M2JvxWoDS4tNNKzvXiaFYDrs47zUSCo8Ta6Y1CHgjySkXDseqe9ugY94tmnBbnNQ1Cc4",
  "key42": "2TCrvXxLLSf2TBHoKfiNk6RMeuztY6rYbxNoL4waNjjwRmuQffmP35hQTUZN9QCMLbcRWmQRiLoUCj5wPrrzyPej"
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
