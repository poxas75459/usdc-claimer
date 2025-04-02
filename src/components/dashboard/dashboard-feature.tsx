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
    "5V63TXPq82RgmpNirffSexJ4653DWHd49CKupyKxtcRYcUTWENHFc9bqrHBstXSW4fPYLo77jGx6m7LvZAd9GKTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FS4AhR5RwPQyfA8mBU8bQwpwYERJj1ZTw22L2o33JaoW6yq1LQ3wtT4gFSRGnec5WrvZGJ7XVEbdxtGmXk1Maeo",
  "key1": "5zvooXTMk85sg3KYgzTtfBv8XK9k7F6Ded1hNhddm7HCcMhmmMydD3K1ubpUtkW2sDQwfm5NK1C6muboo8v7vWr3",
  "key2": "5u76ykuMzsvnfkitqmd7vnkEr1fwYj4F3v2gjmKVX8CY34J6EfNFAhPX8m3K9K5KkrRMoYEuKKNKmB13PTFUd6SB",
  "key3": "4DEThJHEdb8x8VvGqB15LusSkEGpgApCVh1HYVrVj5uo2JrmrMzoNJwuTkHgYLT2qcMMPng1bc46LNt96XSGUMng",
  "key4": "3nE2dpx2vHk9z3b8rYVa2dp5gsooBNcCon7aV3569LW441wfeza9CHFKVP85nqZfsRRFTYZ5jnbbg3C5ZPy4AHYX",
  "key5": "4e2wVTRtgzNKCiaXQbkGGA6bZBM44vGFrs1nBXFjS8Q7qYizWfmo98ZvT2F6unV4Bd4WKpTDdmb1Ec4NjYKzVvFn",
  "key6": "2hapQuWxGt5ryxJy3WGL7NVV1sYeqxeHrQAnD9oR2YWi3mVhhNMdDjrvhvSkecH64QvGkYS1wUHKpHm6sB2DbZRk",
  "key7": "2mEBx6mXvXbyY8W7SeoKRXF8JcfgmJ3SabLeCxPvxdHWQUsohwpuiDdF9wkSVDHBddT8N7zaQPAjbNMLMk8bcP6Q",
  "key8": "2BVxXBBDSnA2Z9Ho5sWxPYhcifQWSQMrq9q6jJKi3NkLX8VGciCGVCsP851qURLCC5s8Y6wuLQUKFuS7BNoS2Wuv",
  "key9": "64LgkE48jNdK51n2kV9FEmyNe1EoGGftbzZwpQDZ2jd6qLPBvHNEoHVqcPYUY9qYkFX6Gib9csbJFDfTENyBdvht",
  "key10": "5dft6fKCE9dSZS6esgXp7KRAU4jGgfGDzr5WN4JDgZFdPY2qLW3StxAduRnVrnmGrYiDxwwP561n1my3MjW6Uc65",
  "key11": "2cdEvLddPyPbAZc6LPTJnwADXEaeFEygayaDfgqQprvrMck7tUoZ4QXWiQdYqxXPpF2DVSEFg1otZ4neCpheb9zn",
  "key12": "2LesEXcCeAcX1CYQDNTmWgvFycfnGqnRKqtyhevr3o7gQDtJju5PDvjGDmGqcsvdeS5isy3cTp7cGXJGURWHiwZ9",
  "key13": "4Wk1R3jryY2AmipR72KcNxfhUqYaUTu9VBru1EkPyrvgZE62GzptvEHTWjaEfchAe6hg4hmzuJz4KVwZByNDmcjt",
  "key14": "4mxMzQPzfMmiAamGTYU1oRLMzyYTRQD8Csf8VDjQUkNF2zhkmovwSymR2JR6cBvnCzTjzAEw1893PH1an11Pyq3w",
  "key15": "5GUwfPioaVyGF5A56TwgjzJWYpT8uojCNBDmfy3qhqvbMbeSr9qCU2kTaTzJuTpm96eg7tAx7BN42TpFZ4LyBZBZ",
  "key16": "5LcGeJJmC5RSwUP7ZgAnmp5WZQ3gDhPLnU3ok9Z62psWikumYr4DYbveSrt25mbpskJZRVyEaJ3nUAAVKEUqyAEq",
  "key17": "swBVi9NiwzYs7ukvMV8mhQdQit6Tg8M3xXCwbDBUCptWpjnUXfDhdq3Vpc9kViGNULiWwHG6thazh6qhFQYDiAp",
  "key18": "5kw21E871XwhMFpN2zD2R9Rg657faVYAkorfzqFmiyNsL2SqMPUWnJNma2k8tR3b6hRUjZ6gVsR9keK7ewVfjmbg",
  "key19": "3pRK5Vspa2takqnVhJrcofLn18ZyqRy8nZgdRSKtmjdcHghvM9jHR24C965iiNT9qxjnLQFUAUR5vrxEyLCu9orL",
  "key20": "3vjJryWrAHkyygAE1CUGjeN9oyLdTXxbkArqW2eMAxhndYizFcTqn3oXMRRdwiU8i8nMEJJaiFirvz2VQFxTwA3a",
  "key21": "4abgXqhXhB6bNJuvFeqmPca6d1BbmvK7t9pi4JGKP4mcdzoN7uDbYD7SjPQLqxChoNTm6JJC84mrDabsGzQtE4x3",
  "key22": "eE5tkxKZJMpQ4fQ2QGXEcjtkZGhTTwkZnYhbDamC3xgcgJnYoT8ELP2UNm1upVfezef5rQKNUZHqsu2hAcG7KDw",
  "key23": "QM3Uz2zaGyZZ5Fq6AkMe2kDw4YxskKKLXSpqm16NJLckh1uWXqoM2rYVjU8PkoUj6LWiBHa9cLfFNLCp3JBSuss",
  "key24": "P2bAeohxj5u4CiX2n5P5PyMXBVMHJxqRn1kw3kiqLckxCYEsFXjkgSMXwoeTKYtW9n4NatzLyW3hdZm4WBdTYzT",
  "key25": "4HZk3GJFmD7FAPpK8j1C7dAcnSWTUoGNDFHUUuHKRZbPx8qAMfD8DQy3FDJT8Eca6oiHiYF7NdsmVxK12fxdZXQx",
  "key26": "9mgp5ahLSqKixTfKV1mhjGKW7wyUjiSXGmUXrkpqmMM6LAAJXSsGY1vd1nCR6gQXTsm39yt38R5ivSe3Awdb9b8",
  "key27": "5UQxazrevSmqfbBLCP7ttJNvbbGELNPGFs399YM3JRStSfbRwR1hKELfM8X3oCNz7DzgFS886Urnykq526U77NQJ",
  "key28": "5eSMPqbPdJFcS5DwuiDtaJGvbUbAMwnRCpC2WPyAPVG9BjFF5Pqt3z779pQWSgWt9st1sGRy16BGvZDpZf2ziaVW",
  "key29": "2qCkDXcSPzD8PGooyFNKANULpgWgzuNmZkSsJFmqBcuT1nvjjt6n8a7AYrWHDt3rbt9nCinYxqjioLfnRYQn9qj9",
  "key30": "4ZYCfhhtxcnBNCSBayHdezDdoMXz3BqgXizbJHbMsJ4PhXf38UTboaMmpMwbPDHbe9pqRXhHAHry9WvmYi9uP69V",
  "key31": "ozGUwWmFdKixfFKNMziRh95jqadsTXenEMGs7DnRKX9F5PYn5gaR5SFZzAYqA7HJmZ4zKmoU3GhQUcdj3g18Tx5",
  "key32": "5gbDrLZQ8qQFTbLDWDrMbFYZGiVwpwUatFotFosqKB2RKKgoaw9hefBbUNciMe9FZnAmXo9GFnsbWqTwa4WrDDcE",
  "key33": "zbrDT8NuSEH3ifQbNfBjS9QctFBXxXCxvw5F6cvhCWM15PGsDAsPQ7bJ1XKCYVLYdwnaGkJP29vAKmSvWRAiuNB",
  "key34": "3MWjU1XCAMfu9SiQ5gBSr4Tn7aoRRQhsoHjVeXRjt2iGVqjfUtyXj8gxherbpH5fcB6FM8DeLrbNg9kaupeJyEUs",
  "key35": "2ttS1uwhamTbpVzXzrjG2Z3fB9buJYwP2sgxRW3LR3NpHtzPSttcewwmaBTf8SEEHfYgTb5Ai1Y6cG1t7Qc8KaUW",
  "key36": "5aM2CN6p3TJBr2XgUENA17Ek2PX8uiyU8b9h4bHCTyJedBZ3T9QY4yAc5SbLpoznPpUWNRShcDrAhKdxacCeEmv5",
  "key37": "hsN9H8oAKJnPhy5jj2puNLaJ6eFYTKni26w5Yny2b4VG5NWh84YpzRRpPZMPVHTjcyTWhJ1pxqUqfVgv8RFFzSA",
  "key38": "5MHFKzsG1YNcWjFnvQNPQMU1x7V9tdDUQa9nPQHSJsb1uBA8bfzKthVKqAEcgdeu5y8rwGCWTLpzvGcZe1UfXhTb",
  "key39": "21LuFdod9yujDzsz6DRxg5UDt8eyEpi1SARSgEFUREozrx4RhRGpchBnUe2KKjw4rjFBQ4fsrpsku8r9UZC7FGsK",
  "key40": "5TdhzLEBJBVfG6h3TMBy2Ey3Yn3rxrrw7tVJzVZ6azdmZDaNxW5Q7QKJ2CtNnjRLtF2JQBKcrN6HywwKPq3dZUyS",
  "key41": "vJat81c4Qctv8WZMTxgBnn9MdAzZ9V8R3DCftPryJN56X885Da93RwEyRHxBiffhWH4auuARz9CK5dD4f4GaTaE"
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
