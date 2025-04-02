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
    "p2nQazzuTsMoYh2JnnchCEnbJMBPWRQJjMK7FsJR7usEx9nX1LTVSc69QKZpJHNcrCgXrkwD9u2bSf4CKCgj7Ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KuHzRQL4GviLMxL52Fq9ijtwJKpUhaGrVJ2owoafDVTVwaagogwjjfcywNVg7gpN9rW8tJB4yXA6enEYJNHXoFe",
  "key1": "2Pvo5XELeRBsQoDfetGyCrC9qqRnPekFvnPF1AuDcDAGYnnScLLPQTvTwjjzYLobKBpMvkE3kABkD3mwL6sjmrYY",
  "key2": "563taAc91pJrfTyaAtFmZg2nrBzhS6pPp2HUarji2DkrchYuVGBGhwqMb7iBxhyi9etVQuJQZndDsDvq7FHndebn",
  "key3": "dg387hbXzQJ1m4abJXHcZsE8VfrAPVE47UGfpfFGw5wX1RTfs1TXYN7SufxfPEyanJtTUp9JS6TWBodkSxE4oxf",
  "key4": "323arLDxyTdgef6HvSvsNbRvgeSqEmKszCV9tiCDEDXSv517UHzJV1FU6BpzmCrzFX8oJ5r82MUn2AJEogRwdXp4",
  "key5": "5BAx3B28Zm6aXSW78JSK1XQYABk5txG8W1ACL1tcy3ozaTR1HU6fbqpBQn7jgm4anyocmpZj1dGJVTYsFRMn7VA3",
  "key6": "5GftSEsyZT8ZGhE94vBSgp1unDSCmNsyAt8JMww2ZtpSCZRUofAEWBtLR3jCSTCiN5VUiudUbxkYMZuqQ7MsYizA",
  "key7": "3bAAF1CgYmagDrTfsRzE1C2wUFpqdHhZgs4jLXw61RAyKi3MmPmU28vk1KkwvpydCxQTPty8keBX3fauJAzTEiWw",
  "key8": "kKismPpB1ZoPVXBFCrBbEGdzaoTAqg3fn9fvtj9U6wmshTj4DwvZXvyRuxUSc41z3fjkf7Uf4XcL6qXPwXFN4J9",
  "key9": "4rTgPv2FY2zJc77XGycCBfQKHyuRTwgaAxAwetVXbaCWbhFA4wttK5YGoDwqfe4AsnygTNyQjEWosQfqfTsTy5BL",
  "key10": "2FyS36XeRrGY7JuCokzioQLxtWNGg3iRvcdT7BfyEcG6xXgTR7nFDdpYw7efLF3cctJQ7PRsUFaVwwG8YG9tHZYP",
  "key11": "3x3nKdKL4s5t1DkDvGBthyEq7prTWAEoiwj2E5s29mHf6cknSA7UKESTN5Jk8S4eYT9vzMzNKV1nAv3rDiR2VMzP",
  "key12": "59hRCp1B7FLphk7UtsGxNA1uJzEjEXakKMrzUdTaJgiANadVTTgTpSUv3sP2NWRDZnJPgZqXgT1mHaKR3icyL9CW",
  "key13": "4sw2ZjPz8S9PgUayGM34qUmS19Jugj8A5MFvkofmzGu5Gd9fViwCh6B3j7FGWVg4t5VhXiR9qdVHFqcfCYKWoa7W",
  "key14": "gFUqPfQX6Rr6pRrmADnofPpFE5GLkP1f5qTHfYMCTBDZa1AFW2emr2HdhNjsAHUHQ1yJsVHDSizFNqddMEKNt97",
  "key15": "HwV2DkNmR95UqiNDyDf2DPo1edyeM77CrDH2cxRgL3XjUk9Q9xZPgFDKEvyPjB567zBv612Po6jD6t4pDaSWcHe",
  "key16": "4ZAtK9dFVxvVGUW4iz8fTPRvi984vJUcVcUsZ9gn9m1VnKpxGwBQKZjcxmJWNuM7qevGcXcBT6zCmNQbE6GYTYrE",
  "key17": "5kiSnnqevscdSbbuQymwDX259ChzJHk5cvfYSBV5G2vy4FERvJH8sJVjDSkBYdqWMm8X3j6VE31kGfVAkSQRYAHG",
  "key18": "2xdSbtHGxm8q8iCCVcbv9b4GQemURJZQeQT6DBnaQsQKQaZNvwF9iyZfkvkDkq64XVu7NXKSHAB1v3DDbHrALEmt",
  "key19": "3a1Z4urWPcnCHyuV8cs3jqAMc7PKHVBwPiruU9adaLXy5F4FDbnchNLvKarcxERTnyFf4MHdt4pQRG9TzdnUwnAM",
  "key20": "ZuxWcLG7BG4cBSbkhgfxgfGpLtzd2ByuiVA552RToYtWywW6fHsQGEyfdN7kjn7NoTc89YcZMCYCNADs1UjeCPT",
  "key21": "3CEFGwfWbCmwybHpwS4MQd3VmZrQk9MggpHudTBnRspYWTac5co9Gfi1dP2mZw7qzFqvbYrE7Tv1TZcPXjGixf9k",
  "key22": "4idNWMvZmoh7QrXdBJYCMWB9dnAXozJmTBw5dvwWSRyKRzL3v8qvHKGoLiQGtBPpLQ9gtP5cvfA5forKGw9aRkJi",
  "key23": "gcTZkZmdRuffXX7gbT2U1HTNERMFkBfDw4Uegak97DqPjizUtXSyVX4wFUPj8YYPuH9b6YNHBAaLgyxPRjL89FX",
  "key24": "2EZSZRKVoSiUstZhM72edq3HeiCjCbBjvYZzMKM2BY7wiiEZcr3N9rGc4nLFHcP1GDryTcBa7DtGjCLtYTucNLy",
  "key25": "67ZN7N97ydx1DfsKUCrSXZWTHSAzNMSqEttYSdDRM8xbWRY9Lqv6yQCX7xUzUteUjWgtEDZ3wxpwdEQjESTkNugt",
  "key26": "4RpBxqR3W77gx3WEPeF3EJZ4b4uBSudc24e6PEt2L6pke54djuQiExSZrDGexPWNpnd755DYt2hkNERQd4xiT3iS",
  "key27": "5gyrA7iGa7HcUHFWkybBbMHzNE4Ri7nAtpbCgYBfxxQHLSjsuHQH8QMkgvHxGz9ARrfJYyiWdy5wDQXAprigyHom",
  "key28": "GSCNUttsRdUyT3UvpCwGPiRWuD17umiSgLguzSDTgKJobA6aVFzQF38Y8S7xHnmfURgiXk1HvvCDESEaYCMpXE5",
  "key29": "3F6VyhoB4j8MinawNkjq6gSdtuqTEuxkZDU7DCbkPrCCuJmGdeqMVoYRy12n2k86FyTY4cuQJVvVr6RMqftfhbvj",
  "key30": "4hBkGZGKW8FCJSSRqQzP76PFvZuX2Z78L5pp1KN1xJrsSYpUFSNuGvgJcW8ivXSsTWYuqydyErjWvTpMjcDc6ivi",
  "key31": "5GEWCiPcnxxYpaCZwKBGn8gydsEXZ6JJdyzFFBAB5aGPsTuWxt7tPeQeKecF2GAwvVpLQGZJdY7q4hdndHxirwy6",
  "key32": "2Y7s1s3BSZGMWc3D6jpPGY94SD3dk7HC6isFVPmPiqGvHpuEuy9kntF4rWMgdQDrQ6SRdDkFxQyJJRubNdBgyTeW",
  "key33": "4WCiDwcRGU4qorcTn617u82yJSixZmLSkbzMdiMyvzhFesvNuexrtdDfCgdJpg9P3CqoVm8Pybtc5u3VfLSjjFVz",
  "key34": "2pmX3yPUYK9hy14VMby9AJw7yZGtT8MP5tFAa6951z9qbMZeNLj5Bj67skd1kikyDBrisfaG642B2fztpvTwNfaN",
  "key35": "4oWajwRSj5pspnDaWBZEpLJda7mW78c7PYRC1Tdu84dUMKNqcCoeN4gkoCgoX6y9iP5Q6GpKHu7XxEXay9BjpsGs",
  "key36": "2AydTscfa52YBHoQtEsDAqmQM4eKFNA1tQAx7eqANRmvkxcPyJYsMTHduJVvKoD73N7seunn6VH4pLDCVPFTrean",
  "key37": "4inzTtFTt8bTPXeFSW8T4QjKnUiELkdYRKe7CvssSM8VqfMPmfxbL76j9RtE22hWaUBi8P75A9c91hDwMrU5EU77",
  "key38": "5c6s6zZBuiBrcBaJSj6VpeH2x5rmrtkoRshM3txxu9wXGAr224LjeDFThTQWeiYJBy5Tdf3v9xJewaN61L5LfMCT",
  "key39": "2oZC37VXyZYBtvZjx9HD172H7GKPgb4EibRofPkiMP5TYB9KfBfcZbRvwmVLVvTM9SFgbLKt7RuBKWNLRj1WohBM",
  "key40": "qUHihER65KKLBKoDb4igmQHEC4KoK6AVX6FN3hsbDzh7B4z71mCTjsDBh8RMpeanLmzRyQ4XRTfKFQU74hUgABW"
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
