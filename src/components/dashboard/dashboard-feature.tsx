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
    "3awSxjju78RNJ3aCNsukD5LbJXVB2b7X4vF2ynENERLwNM894PczLMhauoUjvkruQyWDvAb7iThwR7M6DKz11ECr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wpiLp7oVnXo8JzpMLf7vu3fTGXtcYSX9ruaXNXUbdEx122bmG1tm95VBTfiru9gHYXLQ1RJ3TB3JF6jJoCtfJRQ",
  "key1": "25GYmjVh9eHSLtkaNT2sLzyX6pvNeu9td3YGuTDjY3dHXFyrK5ajx6tikrMw4YxtD8QsHfKsefqZnBGWReoZEWot",
  "key2": "57ezzPNfUgKWGWkLxVS5rYYmSCpF3z33FnHvvLnh6YdRHiUoPhBRk1CfnuxxSAvvfzwJiVRm4BHyuqajr3fmY4dK",
  "key3": "TjGdau3kc9si1GZy4ZoMvndLgpbQ2KXK62x9WYNUSRGQASNyFJVr7rqGd8o1jCQaa8qCEaH68NF2aL5y34ckTue",
  "key4": "4ZY2reZ5KBy4pnrjdrUyenW6JfrHUJKQNBoni6PYenkav6TxsYJw1PkGgb2ZCJ2BPsLeTiwUjtbECFtHbrnZwWL1",
  "key5": "4KzEa9LetMdBuoSVddsNW1bTtJmbpBJxuRfgxPbjtQZ7k9PcHPJRiyTu9mD471p5f4G4V1AiXuvgiSReqnww7BVN",
  "key6": "4yKXdSNsm87ftDQbsmSiRZnWoPCFkjv1tq9q7fhvYpkmuHaYRh3FD8VVpP8jJCVWcnqGQBQ2oE7iKV5Cps7Zwece",
  "key7": "5KeRJAPXvHVLxaNJqhSvP3gXV2tsQtfZRowjBzuchxhJXwtUEuFRS54uvybkXYdtbNugqaUxNFRLTwLy2UEsz2rz",
  "key8": "XSaRYExksxss2bMu8KB55GWmRkgcxqatoUNP9uyngJh2Zo9ka1wv16MTbXYyPnHi2A9DH8LxPhWdrGW6rWaikNk",
  "key9": "LfTgurxDw5JU7hfyDj8kKBWzeqHkKq4NgpJ5nBFPEK2KD8m9HVxEmm7ddZawzpe6RP7zWB2UDgs81G1uD6hUPMY",
  "key10": "2puAovUVqmGzVsKddK9k1hWtYv1bvFr13ytZwB2WNXKgxNMU6YsD7M4RQfk8e2RQdwy28ywGGkobGmZ8wzMGpEdA",
  "key11": "2Yoe6mEMaZ9cpC6Ejq8D7yYgRup3vxmqu9CkeQuZ5Ga1X5VYCSwKz5NBxEKFE8FXKncdXrYW1mJxeThVFdHJoQmS",
  "key12": "21JPfFUB93P7h3HywwrnxmpVZHbNvKhJYPNwq6zwKpCPUtnNiKoF2riKuwQaZ4VfbRU4F7QHs3pUUx1Zcghy2c9X",
  "key13": "53xPmBeNpfksKhwrEWK7HtsQC3M55VkJk7f956LJNMyKp412vq4FEJxTPDHufFasHHynEif22h1TeTXvUR5HN5i",
  "key14": "24CXL7kiNXkvWJw1TjzwKBbhwgzEasnRekifWFer6m7emWhKR8cSFKwMogmKDcxp9kEdpN9PDXkY8ubvacopLdT2",
  "key15": "5w6Usu5R8PEx6G2CcvbAFbxtmsKgJaVTAHtovQBvo6bWrUNLNrCeqU6PKzuQVyw6z25E7SkuLXAGPe4rxFaWynyQ",
  "key16": "NXKySxM48fpMRhmChs36hRnXED3jNjjPzrxf98KLKSEhzW5aRFcHYkrEsZALPMpWfudvA3RN5ChxcPWu6GwVE5H",
  "key17": "2uxXLLLzDj8yGasH38EVVSfptjL31Q9WsDEzZogwaPnKC8i28Tz8LpPiuiTrG7gH5oxDzn9L2iva93iJoiCxn3ZW",
  "key18": "58kcumBYGC93fePPpF62mDRQ4diUXwtWco2uXft6awqnjZmnLvrmhUCWhExYSxjoHQjZLCiZfjArAjL3qCNN966h",
  "key19": "4Cf7kuSfxvbDa5Hooy5zx53sgF7J8RMsdTnHYnZ3bg3hNLYzz4qMyNi4kKaLTJbDnX3q4oV5YP79cUuvJkdaiAT6",
  "key20": "45u6yDEEaY3Xqx3iBiXN3DNXdevzUWYRsMEh8FswVv14e565nvkCQhCdk8Z9m4BNAGBUCQKEBpMHRNeyY45kqKv",
  "key21": "5cvYzmrTkZ89mqZbY3GNFSKWqBJwzkxtvQQUPoJq8cX373Cmbemc6c5GR4G7f4hUzw8EhFGNGknu75JzdUcdDTQS",
  "key22": "4R72CbSVnZKA8KptWV433Veg1wqLU6NtoG6Umqfh9tCL9tD54S7CP1aLZJchEtwWqAWsbXbaKAoHxsYPghiaeRna",
  "key23": "Dx6Kh5R1vdvDW2RyH5NYhdyW5xwazDf5UHecVQeGi4eq79PccGynR5vCEjuZzAd9Cj9VTrwoB6aYDXzUg1ihM3z",
  "key24": "2nY7rY4UTj6j6Wi97PCBiwLQJgGa7vGzHH3eJEfBTsk7b9uN1pH2xE9TdjpNkxJQwX4v6teb3cs4QTd4Ax46b28s",
  "key25": "5eQeJqSh9u5GxTdfzUDJAk9GPxcGwzWHxQB3RVQpFQB1CobKGNcbMxLb1ywVuuziyKNw7CEL71UyaqePzKZ2JHnk",
  "key26": "3koZ4P3qcd8JM9Rc1UrUzsNrkSZcWrF1WecGzvgcC9qUYSDtoHQ9PBqQ8wezD3SMBR6LekSeBPB4NYYHZGAwSuAu",
  "key27": "5VXAEYD6S72x9CQrj4JoYqsUPrREGuRXce6YHT2AdyvaBEpDct1ubLVskXpzse1PmJV7J4uRq2qquARQ8uCdkVo9",
  "key28": "3fCotinn2CXftJDgt7iEmLuCMgaQeKAQP2yPt2YfYDdSpdKZFkozM1ZWtXPk1soUWomrcFSb35W8rUwzD95RHfdG",
  "key29": "2bMq9GCuY88Pnkprd84gQdFnt6Cax974QdYWE81K9T7n7stkxbDNn2meZFZJShmt6q16wCyjQ6HkELmxbWs7ovM6",
  "key30": "3ELV4QxsH6u42qMxyuB4WbD9XZ6toUJMJ44JPdrcpVepWgiktNMb6TtkbkpxTYGEGJPtf5ajv6Sr6YjzDnnR8hkS",
  "key31": "3QQxneiez3486Z7m71RbLXPgZMn6daanNoLMibb28AWpqrh7kvxY88XQ7JamRQ6ZP4WFxmQs5pQvAZcoB7yQqpC2",
  "key32": "4w8qByrccFVrNPTuc545My6Ru2234atKJo3DvtHWeUKtu2p9DYBv6mgyVxCp8uWh8VDiSw1BozgGQouoo5p5ffpY"
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
