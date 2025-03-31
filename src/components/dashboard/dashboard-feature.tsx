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
    "yCMTfsDZE71wyVDH9CiHs1yW75bdFzLefTaqHBDPC4AwvDXyBnvp3mMW87i526B4bVwg76bb2fxbP7vS83P4dJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5531Y8BpfLrBFnBNm5ooaNAQu5dpvuhVdB7sNHENqBY4eEeNFmZyTp8F9DHGi6T7sjmTB62N3TpUczM3JdX1hTKt",
  "key1": "4546XHLLdjunNg5MpXZJvz6ac4Do6KExwmdnc8cFHgV5rLxqLaTBGJNPQfu5zoS3x65sZzDCHqXCYughTuNtyasv",
  "key2": "5dTx5LCV67iyretcLeoyAvZroAahTqX81R6GHKf2nsJ8k7Wct3SS37mevTinAshuAzqBaneKaEhuigqoWMPwtYyM",
  "key3": "2q56z889xLn61G9Gjrb2xd7rDPKYE25YEj27kNTERDiXF1QZdwWL8ktkgkskU5sBF8UR7eqSpBRSnb3k5VvBCCfm",
  "key4": "5jwC4d1Y77Vnws9b6CBv6eR1EJYNdG5iteUdwpd6dKW8XYoumRyXP1dBFGajk3hXSJZD17gaH1CUNkprEJdaapUf",
  "key5": "4nstW6kvAEdHuntxay5G18QcHnwrB1kYtf4WBQmhp1DCtvxuLDfmz99ye2Ri6fvJ9cJUdth3h6CSLSn8WumdLrhj",
  "key6": "5rMMGMM78HRT41CP6X5Eg9fchLQxXjp7LfdzxdZHTzMpQrAJXXJFpdL5AWE5a6bsQZkSCgrQpC5QEt5aDWviquaQ",
  "key7": "aCEFqqdKxnmMhUEySdtDcYPKa4DFeMR9qu889YmwNhHrX9q4ApBDeteWmE1KH9FniYjMCzbEFWTCG8sUMGCNUw2",
  "key8": "2EXYdumDuMgQCWAX1m4E9GNCYZy3Px6m7xL9vcC53MAdDXA2B3S9RzWrFzxFzcDo4zGEoBqYFbWzcJHCCnSRRK5E",
  "key9": "4kcq9w4yQ3tV1LzbvMize3LQ1j51nDjq9MnEcJRDP8JbEx3jiSs1n16v2144ZiGJRwWi5p2KGSrVhvS8YmYfKMMK",
  "key10": "24NV2eLNgbdD8TKYSiUrdxc6pmBMVAoCDmd78RyEyfiTYYy4miPPDSa7Q39NvG2mgxTXRkvxa7UQehdf8AmwVLeG",
  "key11": "2SBjPch7cvZho2BP37Xap5PwcrVvrqRKmZL3SbgiBtKQ8vuja1Kv7aRmAwT54PCgUidnrpwxB84Lt1GC8R9eNSYR",
  "key12": "4EKGCgYr5znsaazBmod93xVwSqkQagiNdLUuyjN73aJAwUo3JfbWC1zsMq2Sx2rKNFUGifhgfMhS5WixG8xjPEWk",
  "key13": "2WUNjGFZyhBJ3WL1yD5iNYqs45JEayu5txBnUt8rzgbq2P6SRNXyvFNu9QfpL2uh5bWdzqWtfVAJgSeNwQgEvtj6",
  "key14": "2JRcGgwD1kPi4poj5GLB2i2UzpoDwBu1dynFN1EvNNfZc8QwhbFYxiWPLoJ5wgkAhqT8cxi19GTwvH79mnRmZ19X",
  "key15": "2iDXhYsGKwB1s7ppZFBmEvVivzb8p9PkpgQLrDa9wASvAJ6cseMPVmDDhzKQSzXtKdeLHWqejuKDJQkHToZyX3Z8",
  "key16": "3GBPGfLFAeW2G64Wm7qQXRou4jJjjdu96WbNDWTZy7BjHdct6HmKpABm4qjF52o9RvxJ3W6GYQWwUR2rNxgeoh8e",
  "key17": "3xLQXF5ZTPcuhgYfvYQTrvEMCjoJLgPaiPe7BnK9eFA3WLm6YFaCw5PCafpDj4gf8vk5T6SQcxGtGLAqjfK5oMZs",
  "key18": "5ZABF2JV8zxxsREnX3vE2oRDXi3eqN5WHyYFZCwSXYrw2AtQb93fMUm8AnX38Uz13dvBoCqGBJgCmaaSVYoZFx9n",
  "key19": "4B2MU8Rek65XGceVGQVspcZ4dJ6weeBTjne5B55cu8gXj9THMpXyfMQzfndS5wnvkYMkeyB9yHqD6CN9ijCwYE3T",
  "key20": "3EcM5YmEKnZX3DoNQG6wo26UkJ4J5KWM4KeGQdxkbVuKpWAy5LwhqNwSfkFvdoBR6Jx1yE8ii1mmrjJa6m1GiLr3",
  "key21": "2kRFhZSDkb26zTXr2UBjt6vMqSPuw1iaFosvxjNZJDofzjMmpndJUgCPFbyZNGLLEh2h65fQJTU8WSKuiwJhoyRU",
  "key22": "2HcXCsrnUabnMftSATtXU26G7ECuSZV4CekWitzk5PYsCeqFTUVEuiqUYmtr3ZTEqWJHPeDtcaFn18Ad71CPnYRF",
  "key23": "21a3P9pwNr7739AJPpQyJxzk3CfF31o2D1MJJyL4VNaEdn4dQeBziDfdKvoif61dyJmFx38u8P5WnrKKPHjRmSjV",
  "key24": "22vmjN9Gt9Pz55PtQ1DBJz7S3bEGU9qz7uRTpWqeBeEh5pbZSQ8itm28WZYW12GQ22eVuYPQKwy7TsYZPfVVMizr",
  "key25": "4pDv58oQBbNzkaKm13m1NQ3snyVxTbs7vvyyzspG4RdszQon3EePhAUnT94RNwnKpNudG35oj8PMiV8FJ2EZy2ey",
  "key26": "38bkUKY5hD9vBJiBgaXYGhenBFo6ojWDM5nQx7p3fRM55TEUxJesfwGWsrhH8ob7C7uh472wrU6jQiymHr3uYtTV",
  "key27": "2tdwwRUGwJUYYocbEiq57B99cuucEM58GQcEBNq6PMEVZZ8uUGyeUvY6J3qiumRKLRvQ4h7fYc33FVf1dSXwhrja",
  "key28": "5Dy4NNi2ty2snj2TGP4VnTip35VmiKdP1QGGprCgwJgQuPnfcaU3wrVXgPZmkARhBcwrpJVka1NzV8L9fBJN5ZYk",
  "key29": "48fzQPKaAufU7rjqGRaYy9SYBF83b4X8ttVdsXwHqR2qfSFYKJVqSyvq1UD1TPW1fqqyAtaFjSSGKo3Sk5cAZaBL",
  "key30": "2VHN4vekragT6m7GWSF9hH2J8nH8DSEbZDTvNMDeZTqov8A1J2DCnrChSYqWzH8yfjnZMQzMatJWZUZCCFbBYDuR",
  "key31": "5VDTouNTrfmJwCeYPsd4N4tmUZPAMyi2sbkC4vuJFCcxu45LVu7c47LzjXxKduYmHgByfG267bu2FxPKPxLHFNR9",
  "key32": "2eyudB4Euv8N6hmz1dKFMa9mNgos59dwXFNNbqKPUaPUEVjowBz2hQpXhEy7cxeWJnFtVY1Qq3Dfaa3oS9QZtt6e",
  "key33": "658EdywmW8QVcFM9wt7cPfpKG4wwi6HWdxVY1EF9MyJvFRdjP3uuzpVm3v9aQQ1gG1YMf4C8RDEMdbfdbCgongAv",
  "key34": "VctVMCqi6i97PX6iM42fgpoUjKHbthHZRZ7AAyFnvpmnFyAd7TxHbjcNRpqx6uS4tzxWvCdm7QWPRrAKQMd4BEw",
  "key35": "25vR2fxJfZ7pAFj3yg5DEMUhWjR2XfszcjDNstnqr3WjwvsAEemmC7JWk5TSTabapiokXkdca8QvhN3c2qhWhqGk",
  "key36": "5tBYewxK6NiBSnLqBt2xMgBybcFUfWsKnF5V4MEdyNdrwdWi2K6uz2nt2AXKpFQdfsi47xhnXUg9hEYLGSQHXdF1",
  "key37": "5xv6A7hnVb41u2eDKtYGWWZMWQ1hS5JmwvWqHPo1Z76YFp6d7ybv2xCVZCqZDEedToU5YMprvaupH8wAkDNe32R3",
  "key38": "3W8AT8ucwa1tyKSK7eRQfHrQz1frNgDGBeueQhzaRe4VFLMmJf92fRoZL8FWek8wCVuoryQif8ZP2L9w3AvbdQtq",
  "key39": "5p4F7P6biD24NF2sjShG69NPgsVnpLEskTLNHZeGexXZeMA7jwFYxH1mVK3UFoUrNFuNv33PjQcYwqU7JEigEh4v",
  "key40": "3kBQEWxLFEKEAm4EgAVCAVk3RWMjHbmCxJNGfWC7iy7BUUca38r1mCZ4WDzevYrDvf4xTiJngn8UiprRCnxkrhvu",
  "key41": "2gU4oDif2MLVpiYjVtZ4sDKHRNw818RuCS75JuWF6CBEZmfWKg31eHtp9pBAZUdbDpbiNTLnBSK8q93eKSKXzhMT",
  "key42": "5VVYj78ruEX94JiAZWqhV6emeEKgzjSYyfTMuiQmroJjv3edNSrSyDvmNyaKhoZKr2s8kXcedvEuBDJs4NtwrcYg",
  "key43": "4EvzgsdAF9nHcampp5DVaA3w7CeBoPwpuTN5JNEK9BsCoHRFu1dMryEpKyd1rYfS9wEQUYVoQfcytqAZt6PwVVt7",
  "key44": "KndC6WnBW2UKsz4AP13DGEpJgEY7KpfqRwmvM98fFjRohYXeCkG8aoU8rarS5YMddDMXP95NziDxsCivnaXYH9V",
  "key45": "382qiqx6hKgCZNTMjoSaH8kY9rJKxEHsNSWSN1WmbWNXuZndNAqo74PMQCwaKz3nz6RwdigYxZmDDFjuRh5WUDtt",
  "key46": "2pstYx8pibxxHM6BAJgyDCXjzZJtaETqEbqrb6vjHoNcZqHQzy1cpBZnvPQQEBbc1vazcq5EPhV3HiZ2AWmrF4UA"
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
