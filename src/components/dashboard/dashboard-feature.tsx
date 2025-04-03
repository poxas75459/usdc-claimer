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
    "3PGoorVHRe3XLfZnYY2y2F47DZej1Vkoqo8QM4tVRVwzmNKw7eHNrPnguJrFdR3sLCYfCmt1UpmetYPqAUtQYpVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mjY4xcGmaujtaZEcFEVhETJnnUmXCo7rJDGo55ixkhZoZsRmXPK14jTEBgvsqaf2htUzhvxcqDeMjFRd5pRgnTQ",
  "key1": "5bhZARH2Koe3NfTFq7hUpyP5xy9HkLm1XWsyqK958ch7L8QbvdRT6zV7eqnibKPxS2kZjxuhWazDEs7UanJwK2Dj",
  "key2": "7GP9hJxSYtvtAoX8bWtYrSGMiSnK45kNaGZoCWkPbcQVEUTXFuoDhbUXq6iRYHrWUj2Y4dDunteMn22FwSSGTjS",
  "key3": "5tHdxQCWF1GMrc1iDSumLF3XLQPZKeLENVukWau64uYuL6ZAhEDgj7fKytvqZPAVhhDSEi9uVH4fAJBJVV58GwxL",
  "key4": "35oA5K662EwfXN4MSP4h1D1rQtFPKjDjzhnMtTz97nMabrRhokTWufv8EjTuuScbscQABeWbsfBgdGxnnTaLwQsH",
  "key5": "4jbLpZjSKYUpL9HvgkMR38VLJ6kBXpfm4dohDrgLt1dgzNT1AFhmeY9gyGDRekBTa2TUfpDym54dJwf5mQPZDVoH",
  "key6": "rQTnxijkqW8DW6PKWYEDrh7XwMfmT4RSpb1rmCJovEU8EHaL6bPBJnmkyrQMoAR9hn88RdrxoUHS1v23dWStt1Q",
  "key7": "3G9t2wdQLaA4heSGCXnj73UgtXMpZG5jZ8uhbTiSsnHK3v8Ux8egdZQuYcuwPBXjRSn2rZp74yHqMXHwcwWTeC9a",
  "key8": "3wLrvRZetCHQRd3D84u4DyhYNWRCafT66CVnyBiLFMMWUN7sKSfP2se4iB6Wi6b31igQTarcBg4drdXhqWBpbU4U",
  "key9": "5vku2VkcdfnGFmo5txo5Km4YecY9htVZdLnWAquXdMJSY3Vyrwr3iuja4eTTNBDZjXJAKSH1sCtdGB6rMqc2i9Dz",
  "key10": "2PpoNfK6pssS7hj1PgLfuvZwVJ7QuaVoNXcVkpS2TbtsbT5wXnH5hjzkqCwDXrWFH9aZWyz3vHms5BMHHfwVye7",
  "key11": "BsLZXCWT6qw9rCkbdr6T8FR5YAwftTw2TxjxPF3MBszqLJuQPsCx8WB9jCMGmQDp18aBPU4WFAfUb35vUT7YUQF",
  "key12": "3NYDm3vznPSinLp26BYK2UcTHaQgdsWkf2DWU6pPqXR6STtGNoNcKkUzUeGuMwc5QdVkTZ16yELXG7yqFerNqyp7",
  "key13": "2XEBqAJGjHqEqSE7dfAQzsbEP4pRD8T19hvzNjenKGmjvoBtAESpoy5kopuRwkQgkmNjd5iNd7nwQjErVRGx2t8g",
  "key14": "4kshEd4K9iy6f8SUEroxxyygDnkDiXgKdoUa4DcpLoTNWAeZjBRxXf4mg1d54MHeaN71e2UXn6ZRZD8tgymbm9u1",
  "key15": "3pZKjK5rcmaN1kwi1HKro2rhhCnPcsbG7WTr7dfe5QrJFqZJSogiWFGCg533WLzodMRRem7J57oYz63TH1QBz8PS",
  "key16": "2x8epNUpQ2VpmKkwS3gaB16A8WcAHhFLhHhQvBqWQgpY8tCCXFECD3R4SkJ3Jnxq39SNVEg73tfmbt3z6NfMpx7f",
  "key17": "4o11VaJ5TTkeLCtYaPuLmTb1L5aWvd2MkMiQmcccv9Lw6cANoPQ4a9dXFqZbkbRXhXDK82BGJQGjmAbVnBUPdc4K",
  "key18": "2e9tcddaE5PzNBD6xqQaSao3WXxCYBBPMr8MEeY5NcB6FC73orzrQsjXnLMG3zmjSFnGLru1rLULUmdCRy1cxJyN",
  "key19": "2KoyPH9zUP8pEjaptfPvvFxK6Gyhn3WU7T2XStLJSP6kB2Vjx7rPzaSMSRiEQc8WrHVUFJvuGudvXXvVoFosebUg",
  "key20": "5uHuQWrZw31ux6UWNjcam2EHTCERCAsdHkv8Ko7F9FKdzmREbGXuLddfX6VeY4WyVNrkuDsfECF1rKxUMMvktixj",
  "key21": "2iewYXCUkTCk37saLpVoDcCR7L8QQ5AthsHCyEjtdhm2WTk8yZLdS2G6ufXhEYocxn4PabKwMBNzYa6aa7meRALS",
  "key22": "gtPjV4jdGiwSwywhFe9SonGfu8HikVZLFj4qWprf3R6Ugi8HwsUE3QE1GDsUwgqbhH2ENDCDYLCLTPdG4kgGza3",
  "key23": "5B6bGqdbUfHws7mYaUTXbUPPTNcdJPZW1MnUum2j7isXtsPQbrA2W7CuzpPKZU5ZbL2JJujyGNTBzLiwdeW1DJZM",
  "key24": "2W1iSqp3e3PqX5Wt6QZB66w93GuDfcSnjboyHcBQ1bQXu5SRLQ4UNqqkyxLSeGha2yvpyRro2kKaYaT9Hx248Tkh",
  "key25": "4qfqGD16zDN6w7Aw7SReTbYnuB1PAG82dm11sKxigZ84tepUczuCZJ7QGhdj4qCsuGPo4npqFjjj8gYgGzMzjzSW",
  "key26": "3RK6gxBJSbskuWHHZpJEavL22RfHjbxwLpmx9594dQ68CWsm3i52C2UAp8hrAcWqkPUDMM6Ask2NVxL8tEbty5ux",
  "key27": "3S6ebfimptvWwYzwfr8JKSdTK1sc68x2F3TiNaAZQGeWzMefdFWipVhbCPfYoqmnnZXLAqUesUgpASpVjtkw99Bm",
  "key28": "3kHNBc7oCqvu69NSiKoCnv8NYKZXfWE3u6r1haS98sKjL3ZJB411JHMaM6jyUMkbH8BtWxeytTbenyST5zgTntaR",
  "key29": "2cVDjjqqe12omuReZNRFRcHfJn997QC2MJqJG8y3A42kf2ZXtCpYHj9CQAgb8URJeTcUsGjan2VRDgP6VV5BVbFd",
  "key30": "63FjddAizsa7QSVE9g6s5FKMuFcBE2vVWkDLLj9v3ouSECF6ezAMXDRMPdsB7NiF21HSqS96wkv121vGygiBEnMV",
  "key31": "3mmTw5SLdvxAxzdrcX7ZN7Punjz6eoiUsnoM2covihuh4FNkpMiwmkDvYJyX5mZv7aADRG2vWbDmjnToMZoq8j39",
  "key32": "Rm6tNj2zXVGGwjrDU8vqE1tbD4BqHE7hzJgRHYjgVpJyXJ9J44y4LDG8KivWjt9417q5ooY8pPApUomq2yDqKkk",
  "key33": "2W9pX3NJ2N9AQx1kvvhciuoa4PB6dsRKwpsGshTM78DM1uVsM6ZZ1kWL1ap8RPxHRdrPGLc6pPCerJ3EGZP3fCjs",
  "key34": "227zQ77KhkK4NuSM4CeDUNyvZhiQsLtL4CvamNwoAgwYV9dqNtRrCS9yxLp7QpabCuj1r3j3cHtqsHr1K7gmVzSu",
  "key35": "2aM7L4mWFUkEgtqcED6kJqynf6xBnjufMwmQpaU53tHj52PPhuXXZ4iUDQJNFDUQb35GVwsyu43h3o5kjDeQk8cz",
  "key36": "3capXZx9tAiNozA4qUFPL2rZbGrbomPn8DnUGuhSswCUbkJSsmad15Ajezy8uucVQwGrf3BymUALzFEkY4Kw94po",
  "key37": "4JYf2ekkxayTDRYDu8vorU1pTwPa9He1kATACihe5GGyCKNWPzMVvR5xDy7fEGXRxTodHZEjSBcpphPDWjPfQeG1",
  "key38": "4xhTrk8b3bdSvvm5BqvjRHf8njK722TFJSBe9LBPWbKrM8ZK6nrZxyVTuiUwSQguFmVoKRcvVBQKdMinUQfyBCvP",
  "key39": "5Fs1cSn1rQ6N5iduKDobb3esnDVE8EPH4ymzP6uDtRmL8t3Q4cj4xd73Kf4k8pjUVTfGsN97sERi97pLTp4ymFHS",
  "key40": "54irUsobcT9bY1arttG5WpWeTFvRytBiMeJPjELzKjqV5KDJrv8TbA9RSAu2vF8qqTonRHk9j8WMHv1BGVahJQeZ",
  "key41": "65zsMfTBq7WkPzNu9qNiFGDNwRpstpyxQmrhZvi58hizbdhKuyAiMBok9xQaFd2vFkN12WwcJEsnfXRdjV5fd8gL",
  "key42": "25mtPhGHp6Sqdef3Rt2jyLJEm1z6KKxWsvGfb2sqQ1xnUQcC6EtmZ2AeLrWEDVw4ekVtAkbP1bNyh6fwucTvdEQs",
  "key43": "3x8bbpQSVuQKxgaidXQRySeRTmRBjW3tYHynLxDRtimKQbGyXm1j9qr89Hz2Akre7CDrV8uHC5Wv8S8urgcvWFG",
  "key44": "4skYKQg8Tu2AXWT7zasc84887Kgw49DnW3joSGu9KL2f7J8ayt4osgVjLAH83KUuBwe4ufuKf7uJpsJ13tFWEVBr",
  "key45": "32E7xcrdnjdbUUmeT91woRr2eHc8PymwwiCTSfCNQUmZPzgtFZRPppazXP7HXLfEJob9FAwaYZfFubnWUScoUDCu"
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
