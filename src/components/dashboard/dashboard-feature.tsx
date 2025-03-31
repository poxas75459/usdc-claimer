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
    "5VakeWXrWJe5CEyqvdgGSKFuHJCkTFd2muwCEFJaokWhCG81n7vaSKatAgr8xceJ3QSZQxdKJgic4FRSBCjj172e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rmMcGkfEU7Lh7a8ejc3zmZQ4By7JwBGzb6MxnYYQhEMzmvXAPNGLV9f664aqvXQbpoHwkNPF2CihYkaFQKWYCrb",
  "key1": "5RHSjkGD2peFMgbZr2NahpBSXAPW1Joa4hQk7zGrrehfwiz1WnuKYfnxuctCeGd3Sd3V19j6kLFByCvy6PhPmeLu",
  "key2": "5EWmmiX18ELvhkaxfSoV8i7dc9zcKfgfqSnBey6ACP1jC4YtZxx7U76X22TGbBnJKTgqUwyTL6TDkrhdrVKs9xSX",
  "key3": "4RaZq1xDCzoyzzZ2srHoL84dtcnENsQ6ZkZzeUqujeveG2SFg7Gd2rEEto6M5vmbD8jMKS4RvvERQA6e6xt4ss69",
  "key4": "87kQvEwXFEMChjMyk4gMSHQ9t2qjjLNWpJRxHQgEvH2xtgny8h6s9sYZvjGo642HS7RcvvV9cvZ4ZJXH6acPgAr",
  "key5": "4zTnpEifTo3heiZhUN62UdaKngKWdaeh84NEDHPCreVrShynxjgqY1EQGpw6KpfxcdDVZzGT8Z8aJSMo7e8Fopz3",
  "key6": "2rvxDXvFduwot6vTtwx9seRLpQHE5Yv22wCBSy59uBXqs7mwTDcEcvFqB5uQ8YPEswxjj88jxfRKiSTo4LfVLELt",
  "key7": "2ZonUyYbxAjqWUZZZsqUEmALTBuntrL4VgJr55jQnTPFYgbRfHB12dEDA329hDQvLWNBNHJhMXnsHFPeZKMhWJLZ",
  "key8": "56wwa2Jyke8637rqQmN4a4Axd94YBtNKx7XVdiPobvKeLzY1aneCRdTjwj2VxHhekgj881vYf9GXBtGHZ7QGQuRe",
  "key9": "Mc9T82PK7pDFLXDehCTaM57nLL1YPpgwCU2nRPhgVyRxzyP82azkNJGA62pT6ARyzLmgexJxucemRRxMBAQoRGm",
  "key10": "49ZP9MiUwVkLi6sbaLS6iXfUefu7FVT1y488qzX3Zu1wqkr1KTr5yeB4Y88L6yi2yCirAveSXQ7AkAd85HC9WBAc",
  "key11": "4cpHaMRXphE5vE4jZxkNQLzmV9qggJateUWyeJUbXnuxEgH4S48CYTxQFtEDHXeSsDq55g8dtw1xVfvzuQCpe1Ec",
  "key12": "5deVZqixetAiHjFHSWvYLd7fe9tb1ZsDfndhznXNrooDd58D2h8i358FDR9spWcEkbMjPaQLMun886yZMUbMfU3G",
  "key13": "AekyBGLDaBqjv2i5m6cKFTFzbdGPUYgrN475PwnADCajrNHgspvyXes6pjE1r4LNEq7bWfuZ92TjSwXbgPUBJNk",
  "key14": "5wQZRb2upK6Kb6iDPyLmW4gmnwLHcZufjJDJkrBSraKr42QMR5FaMVr4sQHYRAYgaHMAbHrRSR9qjDqeTXf5CWdm",
  "key15": "459Qort9qgDH6uVydc4CBJ8kMdgF1fd5kcc4TLuouH5uTcwPHP6nFMRf2m26TLHYJhnU6cp94oQP1vkLXyG2bd93",
  "key16": "5FL937S8jhibXhpoMqdWGDGZpnon5nendEqAh54yiHU8K98aNjTBhNTkGJwSrNdL78khWEkygG27pr2D8aK2zChr",
  "key17": "RGgDuTiQ2Ezq5tHubTGRtQ2x7LV5VuUGKf5WfrfpZcqiJTcobV8tFo1F32ewRbqHXcsBQ5dcSNGAupDyP6dRL3c",
  "key18": "5JSMHheP6GHgtg7m3euTGcjq72z5jS1fspW3rmY9zfAzRAg99z8ohzphQrEXVRaYpwcTrUAKrjwPvkrCvdCPmPrq",
  "key19": "3e4LtUT1KtPJBd9LQa984EMitAMhPh6PC27mAkjrxU3b9U6U85wtpcqypzqQggkiqmqiR1XMxYVN9nZK7espedgB",
  "key20": "4rBsCdCB7kUyKsbyZ1ZucDehigFzQ6JoFduqtG393da5W74hCPbRPtSomxdvBT915MfEHBJ1AoWyPkUAG6qtLbRg",
  "key21": "4jUbyDnhVjVKoyxDPRAAi4Y1kiLTYCFuNe2BXfGqduWsBewghuMMRKhzxKid9pPpQt1r9SgJjm9t9SEnP3MVZo6w",
  "key22": "5kPgwUZXYXfXcYX8ycc4Fi3wveHGi2xnH6fVYTFToGfarXYFr8h9w96VMGRRpNR2Uo1dmgJ3RjReVrya6M9a5azp",
  "key23": "52ksMk9EZggJuULmTgXkQSj3b4hXUVBsSy6ieVn6VMfvrvViF1SbAjGtDHrHiCVUf4rg1sNh7HLci9rpFSP3aLwc",
  "key24": "qRfHyZ9k2YrGJ5WZMLwHb17ijgJ4oFQwdGwEWTYmjkuCNzDZyzzzgJR7fhxSEKDG8Wb9zMWSKYwCquMR63Xsxtu",
  "key25": "545LSY1JaFWCcDYuwtRb7xVvHwFfd6VsAjz4ejxBPr3XsXKcBqJDqD8FjAJuF6uc1xAzTnjvZd7HD4ND7n4WqQgM",
  "key26": "5Myx6KKdXxbQBy1UkFqwSrzQUvAAfMmg8iJP8GcwhSKAhVs4MViGN9kH4f9JkAm2DYvE7jMDqFisxYVD7NBHmByu",
  "key27": "3PPYQV6bxm3n4GPBZ9WQgmT4E3i75hwiqi5nyiREujGtkGGJbLrevGGrwPggvnwJXzgkTSi3EBH8v6jAhjEBKhyt"
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
