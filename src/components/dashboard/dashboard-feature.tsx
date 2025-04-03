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
    "4rV3tubDmWmKBm7e6uwxa77Z4iyGEwCQLba8rJ6fSzeKCrYXQVfUqSQeMKHRrW86P5EFCuAcx9xyyHztCLCJ9uLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tV4tssuV59eKGLrTWdryDfY8Tnr2s6MLfCvhvwUy3rfCZavbY5o3Y8yncgfUXPt1kKBCCjXAQp4HTga41aQfra",
  "key1": "25rSNGiEP2yScPYQWiMhBsrgacEv8FrNDkFHDpt4ggzN15vTYmDTUoQHZWUjMqc9zCrNEve9uLsqT3aZY7XjZdcg",
  "key2": "5mqmhWQvG7tfrYQqHTD6eAndDjkLcB6LerzHrgyHGHFcWwaKVMBtyavZSqHgNQFW7vh8V13BWEVWxVdattEZWhYf",
  "key3": "39yrmToKkD3rcvZASsRSqBXdrqbcnZpucYHjizgechTReCBF54yeABL6KAXyycVpFuadFg4kF9U5hU2gJ1ztaHTL",
  "key4": "3iGw4xEkWsouYWcECS5Af8cFtGqHdQDKcDjJpQmS3rKsSe9zrDMCCfzzSoiz1fiGQxLDWE1iRskvdhabNKAcaUou",
  "key5": "2gv5RKFKyRxk5UpEF551UyqRBZ6PtV3TSRXt59qSnr21W5XGRAo9KxgwJd5s5SNJyrDBtn4AuvoiU9x8G7WnPJdQ",
  "key6": "5ETmgQRjTjSz7YgMpeg8kZj71kuuWTVfzy63vqMdhhsBBqnmZtubvKHFiE7s96EWmdjKFRdkQQUWB8h9c2CnH9ZC",
  "key7": "5wVjKYUpV4tPd6uD1NM5jVG9ErhVRkMjsP8KjWz8gFek9mzYGuiexUuKPvFdyjPvypdP93omkLerHEkZdwgdUARE",
  "key8": "5TQv6FMEEcNK8uZAorGpRudEcEWpfTxUvrBXyNebd3BBFvjYJ33iJi91rCdZ6eB2p7VcAT7x3ZALQyFkpJ9JNt5y",
  "key9": "MnD8ptP2RLa1KxMnPqu2kWawAnVJhXTgUj6nHZf944VJenQbuuy4rJFbPPZYbDWnDyPoZHrLBwyfpyECeYDXSKS",
  "key10": "4wgctd31EPL2rTqDCb7Rx9EGBTB1ubUWFVgoKmsA8vr89vxtBq4ZK35LjmqPsohsRJ8EMaJNrf3cygdoUyZxKnEU",
  "key11": "4bs1bkXVswpUQkAfZQ9ar6Tgw86ZexDrxrPyQ5v15dk7t5N9cpkUyPyi5NuEACjTRMVEjsxSLAWLiu4sT7yibxFn",
  "key12": "4cY5Ywn1wrM8q9HiNcwGwCfEdwt11CDzkNJXSsfbiirY4NKz3tKh8GzUYcsTGVri1W2PUYMTY7LNAVpBG5HvxqV7",
  "key13": "4MkCiqJxgR1QJYBYznMT5PJCnnPpoqVuG5dagEsavbZBWEwT5x43ZnM5iuRpwMT9NG97Qtm3CdVAeDckUi2QUr7H",
  "key14": "4ypgQnVdwibWW6CDHSqFA3HPoEVcueKgRotakSaYGjXHuTfiPMVv4FXQ9p9b8SufjyyXygkuj6WeXWxHRCSPi2m2",
  "key15": "2m9BR2k4DVqJjFHBcLEYW3wKa8TL7bKK6qFEzaPjHh1PFvbwy3FjqDqRiM3P9zhoaGu2bVZvruemPdFQQdpVWKWC",
  "key16": "3hcvyyYNwz3t3G8PyhtePZbc3YHJvtqYaQg8DMyZro8crAXD5pgVPAegAP9DpMgaTbEhMPuS4S1bp7T4f4GtCX71",
  "key17": "5vfyAGpnkZLJsRw585h7p45j2rAmRr13kWXPx6xVbPNUwE2D94nKWR4oaKeW4iw9jahR685n5Nuy2pMkicWSxz9J",
  "key18": "3qtyJDqs4DKDQx3a6Pg81pe5XtMqwTQgFTUkx2Qi4wRH9pXjaA2kW15YmLtWquqGgCQhjZKHmZgkUWnuyqhporQb",
  "key19": "sCfoZymrTyasFzx9yiXfUFPEcSN6dngoyLEwySjDrLHzmiKXuvFNZXRL8R49zRGyrxRcjDvNCJ1Ez8BPmM31bif",
  "key20": "5w5pcYAjG3JT1sNAarjTYtyoZfRyQjETcaZ1WQYWoHwnjadGiibrea9468xfJjrGdFUeJYMNnytSVKdQw85VKSM8",
  "key21": "cgPPzPunJFjtxd2232tybMpPVZNH6CMgkjsZNRdSh9Q1T5L18HAZddFMbbvNap2eUytYDncLeq6i7enmgDURzVH",
  "key22": "4gBXdZfGNRHxomzkvrYWtKoZokYr499vTEBAXgd2MTUr5yS1dmFwQMVEgemTJPrF7EWBxQwnPvc9TJZdd1mSgbjT",
  "key23": "47gxGpnSV5vYv5bNtcmygwDqQ5U6sRF7vzvbDbsoUP4XnBupRo4Hioy65cQw3jc9f1NdK1Ud16Jpf6c7eoK5ZE4J",
  "key24": "4ouvnexCRtgfXBmh1SFYTvKo44YyB29uDLwVaq37mhNoESqcsiELHAcuTSSSgggFxqS3Kt2BQpXBdWdpa9WNnvSX",
  "key25": "24YdedJi5oiaUr3g26G7NPX2stZoxZhPE8oGe2E1dy7MaLRARFcjpUYgEcyeZxgcAqemYJBmyjpQPpwsas8WA1tY",
  "key26": "3mbttJtbiPgmKXbeZw1EbYkJWV6Gpskbd6qh4apQVRETLtERT4F7BdurrwAXm8pZdjFQuKk7epS8Df2trupFKRtW",
  "key27": "5GtpVN2TW3U3SsDzRdCXgM1AXnrR46ed2Y4GuBhDPs27NnibTJd98jejZCZ1TWxNifbhKJKskwpfgSswwWZm7Lk3",
  "key28": "HnSww1xiNyZJxAYtTrp8eAEgNAfuZfitPvgBL2pM79EQiPQH5pJgA7y8HXXYCfZJvEQwWXiTHQAEUcjKdrWajc7",
  "key29": "3kxp1bzJEHsRr4m92Bty2GZNuuYuhGEDum2sCcjgTinxanUjv84yFA8qbu8QEGjVHnAWDwz7qfbTquiXrRxJVrHR",
  "key30": "28iVDbCe6GHtUZPGV7d8SvMHD92ppQvVqmCygRdscg4BFXCsNBTnEvcR6osZRAJzx9hpHzX2zaCzi49aTfzS9bG4",
  "key31": "3ui7xQ7yz5Cuqre5mnZb57uHrqPZhgfrHgPFJnTPFWNT8EwMx8N5BU6rbeEEVAFCrmTkfnH7EZywGb44CQ1zqQJ9",
  "key32": "48TWy9WHQpA8Hb5MTmVKugLhEvnMTq3VgCgLqxSy5pWwPNVPaEmdUF5vD1Ke1NmSHrkufmSPxLV3CTqtRj67qQEw",
  "key33": "4KkRZFEPioaDMUeBvS6kUGgFtDHR9BY7dMzMjjiiGR6XuYVkC8GoHoXcjPP4MmFYUPfZBjdBeF26gzyeyCbgxSxu",
  "key34": "217vMNCPe8VDrAHB936aEkxRTXtUyRBo9RCg3AVGfnP62THK1pRBmQR529n1nu1JkfxveXnspbwYoiDaBcqdtxWt",
  "key35": "3guNAUyXxjas9BGt3hS95crqUM8WzYKxzUyoTXXJRdveSenxfBbPb9gmDqHhfFD1BXJ7TW1yAAWpXvFCcp4URxL8",
  "key36": "m4SjT4fG8mPJpCu5LjBQqxHFbbVBMMUxnhDLqpiNDrCTsk7dCX7insfUfLrfg1RnwT9MfLN5hr29PJY3gFd1rho",
  "key37": "3KjpM3wpL6W4wjrLVbdPKBr4kAXmmVGJu6cWZT6QLziLn7jErNQfhsqR54YWijtetX8tYhbnRHMTrwEiEF2N9YkA",
  "key38": "3cz9z8mC4zppTz26kHQ7KKGBL1h5TAHLB6w9rCvR1i9uTAWcVMMnH5C1YYMnPTB13gUPz3k8dUCfmVFUgdv2yKoY",
  "key39": "cBogtjnnkQ5fW8t72nJq9x3hQcZfDvERU6ynGA6EkG1HMKjboSFAJPvwoPBexf6Kt5PBEcEhbna5qvT3jKUx3XD",
  "key40": "4KJBR2ZRSB626kwnj1GMj8KwWfd2UTNEz6XZ51V4USR6b5UrRwPdQ6JnCSguMfSp6u1RCCJfu9or5q8umL66Gywy",
  "key41": "51LhJwY2Q7KirVzH5B6PXL8XmwNb78shyXRErKGoF5xGmrYMxffpsTfyToJJx3Q4TEL1byEe4eSH8YcdJ32bj4oW",
  "key42": "5MddKakup3ZUgr3z31G2yWHUuR7kQAqwcU1vjakrPLgUSW5txMsKGgFeFLofUx5H1dTD1DMUQGJA2oDbQ2fQSUS4",
  "key43": "5gY3ZS9jHCW8cDhLRLUv7bBGxSGUtqNuYUHYFFAazMn3okWQxLrmcNS1LX9PSvbkWHvyiZBmYQ48ShjA27sdrn4s",
  "key44": "4kZhTLqmDAZXEoxFFUB544X9veEDmk1TDDTZ5mfNNwAV6wjoLu4PVFmiFDmNVorW2KkrDG3zYc3rEmacW58XonCk",
  "key45": "3kJa3SjxarTZLFCwHSUBYapseca8uBtrVTzkiu4pHWguGh8HY73HQogXEA7QuYqSTiY6HcbgvH9Yc2n2pkjzzvqy",
  "key46": "4K1wwZm4cj87hy5tDJzNW2Xs3xcXMzZoUwNMYynV4xKcHuSb13MhxUgtUuBZoPLa4eb8aYD72XzX9Gw5eLuo1uAR",
  "key47": "3pKLvXK55aYE6E8g7QPBYwn1eLYnP1KQYbCnxjHLLda9VY2KhHBFjCkNyocofnTYHvrk6BW13SzdSu4LY5qFrvx"
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
