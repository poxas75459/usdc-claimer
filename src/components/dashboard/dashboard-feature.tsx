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
    "4qhMc8RzDk6yGdH13RsDnYKbRYcBJB4BU5Xd2ii115Wz9oaqHyZDitjH6Goq2annJcdTx5Zyey1APf8wQGJEyW95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xsEp4YHf959gztKd9h6AQVYxcHt51Wtd8wM2ZRtS8m5T7ZuX2Co2E2TdYCHsiMNomifBMMnL99LkyTeGbMho6HE",
  "key1": "5SABPNeXaGCUSdA9fwQxqVR2FxugYFJbyk5n56RZVSyzZ7BWUx4wLbV3awGwWRvRw346poyKjmgAhn9fBrhAWCpf",
  "key2": "5yTa5LCDQ6ukyNTxVDmamDEhDF6JZC3TxsAxbfVS5JpGZxErezeRaAPMQ46NNfgZtMc69mRNd8qbMD86JRF1kSB",
  "key3": "Y6ErkDnA1t1cUgc3gnKVSEoeTo2cYYM2WRyB8fotoJg1WzefgiyMgnAF7UKnXav2RRMWNj9UCW11Rymm6xSLaKd",
  "key4": "4ZSTdMVFq6wbt3QKm6ForSAv1gMc3Xz34CuB99ECrB7mLpB8MkGDWg2S4nyfbAx99UrzeL8nQUT3RFKHV96h1W4M",
  "key5": "3XLK4oHcVthZw7DJrVr7nNMBshYXTiWm43rcjzDCrS3x6cRpAYrxP2cU1tKGXaZUipqJkfLCbqRYUFC1TTnY7euT",
  "key6": "3Wo3jbEV2VpFweW3mbtZ8g4RmNiQhUB4vW6rVFmzsHP71G4FBN3W843AbFY7ZdYPa7RGnM3EU8W97y6B59rNS976",
  "key7": "1LLnNQvpoFWkuMw5W4vYxDcKWTdsVhxGiuk4mSJxbUSGiGy6Z68k9ViMhYEkg8ohpbsS78NvrGBXcG9UEPkwuYV",
  "key8": "BoaMU3sPpa62jYmi78ALkw4Poq7rYdcg6yZB2cMTF8txuhgfh3NUkuJfjABdQn9e8nkACkWZr3TE3KfeEjbyVFW",
  "key9": "3XYFCk784bi6ryvyUE2wFqvPNUfr6f46hGTvGdU9Z222QudxB2CAeMede5b5qUKN6cMZskzv9GdUb5Risx5g9FR",
  "key10": "4vvYomtmZJYVSzUgTmt4Vx3E42CYs9AR5UH87Lw3Peinqsr2bgXGdUw83DvpoLjZxq9DDkbPUVEypVtuf1TjPHPk",
  "key11": "2Y3Cfvi8b7mNVrAeqwV1mmV7fZfw1xcCCHirQfxrTHZrug1aTMkCGrfHU7yz6UKCLFaNgBiGnUUkDdxTBr44Jsjt",
  "key12": "vra8iK1FtQZhrR9x2vg69USdGSfWV6SgMdCc5WuXnGg5inaRaDpSP2StGyf1gk8YvAuEzv9cYKbKpEegPKg1hQL",
  "key13": "3H744FVh1kAHDiHU8bf9GDfwC77jonA6iiJyZofnakE1XdF4ULSGuVtqHFcTdhmadAP8c9mrh32xKKSPHFPR3mHP",
  "key14": "5oJP2wGWBiUATwQRt8BDwntboPRTy2AjNY1deKdp4qg3peB23uxyUG6sSxtbVEfRinh85fxyUzNWXAW52tG5pGGB",
  "key15": "5gU4ciaUb9EJxSeGkAJUMJSfx9RvN9WFvj3ZuQh6k1briw1YGAwWyXk9C8e7NKDcgcsxBhGx2go8oMkrYurzX1Wd",
  "key16": "fnNGtL2aUNnADwxtQwpx6xEkpuYPLxsTRJbR485RkJWW6bt5bWNsnCWbR87cGbT6suRUhweNy4xkyJY6WkckenZ",
  "key17": "2knKeigyzEZmaiMErgMLc38SGTysN8j3nvuYryoWzJPoSg1TdBNnP4giqKsMwU3r8XZqmXLCAsArLrKu76ugVoXL",
  "key18": "2ckdW9j1rXN1invjE5yEaF9CyaMExqgD3EoygenEqLNnxj631VmkaupGorC37DqBQ9v3y15yAi2gYsU1rLERD3UC",
  "key19": "4t3e66dKJXctmcrZNKHQ5bA3yQw7Bx2fxsZizkYqVdqhgJgxRduUuwPwDvBonkVFHoj8WLPok6E5yKxHcShZXzJb",
  "key20": "AWnDSpL6z9ALyEVJddeDavQcGnNQSHfgLa6ie9qwPpZtzykMGjrWbR82tPB8oazz6tt58W5otWbTvJTyWpZbBkQ",
  "key21": "3ETS6PwoT9SYxwvtZti2JDLdtpX8cKY4B8KC2EuBbSgTKHPjcBa64rhzruAzbXxxRzUBJkg2qCQWigrsvxBaELVZ",
  "key22": "fNaGmUs5Y4H9hcbB22oubAQTq4s99uL4zoaxQQWuHoNfgQcjPjcy2jrcxr65bcwb4SELjPVHJ125Zuga7czaLVz",
  "key23": "5hjiR2Y6By3nnq72LoHFSJKpYMyeSetGXxJsoxvyn2uGfexLRF4M4wbzSfy63mN3967gbSRQZ5umWiZSnAUq2gMo",
  "key24": "5FtmjtqdSHG7MgqEL1WnGfYDRcGQ9w6gkKDLvWcoMn6sDs5fzDwjpB3B7mSdm92MbtkFpdmGoVuwFHKWz2eqh24J",
  "key25": "RpqzKx5nsmJ5bjSpCtGPfhEUiLu3L5WoCX2A3fyQ9coAN8JH1BywnaDYBF75ssHPxXS8wHeG1pa11sgGn79sG7W",
  "key26": "44HqYfSFVBbqsUBSVMeMYa3zA8a26SBY92wYSnAmsHQWxNPWg8yrhEL4LehSibAxCXSsjBY1UKCqWZt8MqaR3acf",
  "key27": "5a5tijzvKwpH3souYiouZgr5bchpyckEPfPvFx8Y88BTUt9Ck7dfi2YwifZ6hBBDtEXFBkfyrWw9HSm1zuQEpysH",
  "key28": "3KmhJHwZextrBpUcFyjx3ZnKhi2Qi42Lq9wn9A9zbQQZwRcuaxJrxhEdPJ7mCBiTAheR3mAiZQEibXN5xYW6ZQ2U",
  "key29": "4pXUsC6GgcFY9j9nYbekaBerXhVmybHC7r3qpzSHgbFZRHUMZMyKnjXFqfRFYYRDZEdussjSEGbXHa9A1w2Kg8hs",
  "key30": "63UnxuKEyDcwQxgj5TMY8JJpUETC4ekUfeeAtgQ5Z146vomyfnsXWBCr8fGzm7s43gn8M2ZpvAaJ1dFFBfpXtj9q",
  "key31": "63XLuVuJzwKSvDo8MXjaPBRYKrEeJLLCn8wd3chEec9mFqY4wQCy5yV4DgdSHbh8oLYb9uVvM9FhUB4cBEhPbqM5",
  "key32": "2FwTmHB8EPKRqkLB6FNY6eeKuBh6HgcZv1NoN58afepn46reiateMUvyrq4nyfvLrA8EcNhXX4odcbdC4C1QRmCF",
  "key33": "2bF7hXE8HXnyoJdxj4Vs93vvVFSBvgjpjA2utKT6nxKdf7mpUgTtGVVospxbxzxzZyp6fjvm49PMYzKMp5ihTwuJ",
  "key34": "4pELR37mTreM25BYph3CGYdFCG7qmis6eRdshMAu8DBzmbw6NU8JHdLu4So62kDxfFUZ9iv79TuyYnviSx7ahEXn",
  "key35": "2k5FvMZq8WauUuJDLidSio2eRXGzsJdW6dTMmC6P7zwje2PsXWhx1xJVcZbso17JHiAXK4SXKTeT5NxTgZyuXfkK",
  "key36": "3cfgdxXh6Hngceb1TT6A5J6dFVsWSkeoTE3AbDvUJ4KzfJZdwSYHTf4S1rwjXXckJuKJ78BFGyrztHq7LrgLpYTC",
  "key37": "5Ggmr3DnWvrAfaMGnXq1EBJoVhte5N9FCEktwak7RMu2KeHiYEuG8PH3xzurmNE3MN3HVuJgM7nN61wygyvid48J"
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
