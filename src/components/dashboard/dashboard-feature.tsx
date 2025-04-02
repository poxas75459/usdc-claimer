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
    "3L9456KCgiJLhvDsHu25nBH8zqYfTR8U7cDv7sRenwZJuDGo1cTUA2dfNLowwPHbENADBYzMiVb6hoXGeKrGi2hK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q4NXJdYpsyQXTjeNkTfT9f4bYZt7URbUry6mRd4RLivcVmq91EYF8wTnDYkTjBq3RzJSEJsiuN5PZst1Hr8tPuw",
  "key1": "5K2NipGByT6a8QPbweJKME6zTBrRkSeiUV3SHqFHbwDuyE4c3EUQDYyRC877uQ81AK688ppnttSzkERFFQ5KfwJK",
  "key2": "3nAA33GwT6ztAMw1zy5yda7WsbXGzEnV58R7obPsF6sRmd7sz3RnFgXZC5aTnnKYMtM7sLvKBQdux6bJJcBVGFay",
  "key3": "5SotMPBJFJoi5wWk2GeYHcqrZCdouNYYnE5AkNHAsaxAQkma3f7goFpUbYi7qGXgheD8e4TtxtnhUeXFzjGjd4o8",
  "key4": "msviricR2MN7meFHJo5CDCSfFFzTbgY7RoEvyvS5ipDTRTz2bBnawCXhX9bHAHoHMwVTpqj79iz4tFgjfArWABJ",
  "key5": "FNYhFBkQaFuRgywYXNd1vaZUz5uvdC7JCSvVmEfdzNkKDr8UdYM2xaKQqzkFqjx8ATLtsJSBZea91uaCyYs9mMB",
  "key6": "4cz4XT5AbW5CRR7QbSybEebGjJPhoYhM2mzDcKqFUM4umxJuWJLMzt3eaxsdJKqoDrgtCf7tT3eLwe2tXBob6FRj",
  "key7": "35875pcwqCTFmC8ZHNQuBwDWgCWkHxMB6zjYM7HJ2Fz7g1tALK1BvXxjBKfstjcj7wk8spS2DYbdhNZ3e7zuzNhM",
  "key8": "3qv5V3ZHNmqLzzSmAUYYW5ZHDVB2qJZCrb8RDrzHCuLsgp81jRerBPicYYtcdDnxTerHYjkvgcr4pCYjuEDxxq1i",
  "key9": "669undtSSZ2Y5a6akGpJBCWYf5JHnkwVt3tsQFxYAqHRiNhMVyKpcDThV6ieuDucUfsJ9uALj3abKPPccy1JGLrh",
  "key10": "4riURSjFogj1KGewLbb5i8hwQM3Lq5UhoqRQy9fDJUuaL6LawyTmBAWrmH5BPfEkjM2b1aCdz8C61iBu8ogCD6cR",
  "key11": "2troBHrMPbs7vjHhreX1ofvYW1zv91bdEaTvvwLfF9wk95UG1bW69LCRAvY8SnJ1SCsehUd5s6rVQ4a9AgxwS5gG",
  "key12": "FPLykqe6xCF2ta3tDHJ5weUmS99dAt3A3hrsMn1gGe9wEfUsEeUCRMCE4MNoy2DYyLnA5dji2JW88BA4dBUkjbn",
  "key13": "4X19aJgg6RhLwMuQKie3nEhdbZN8KGkpSwbD9b8e9wsNTTVeiqT8NrvteGrFcQSroEPj18Zwg2sPN6dKm65at9RP",
  "key14": "4obRpzmrYBHGFKN9b47uTfPqoVvPAkAG7ukuXLBo5iCxitaXS5D9iD8hERrbDWqcPQBiGrv68VEPHmHRtQHxAeNu",
  "key15": "3WymAhSuaCbSgsHmVdrcrHEzN5jCHPt9Bz2ydCkKnpbK5jqEuwYhJx5hjsC1aqAFZqu5J14Wai5xY6R1AVik28st",
  "key16": "5JQF13ShvMH2pfqWNyy69ziBhxfDcxux5C4KWm5r3QFPJwX7x2eFyKiGTuSuoN9Bu5sxbmGD21QVy7FteKxgpn4Y",
  "key17": "4MzGk3vz5Ufdn9pbgueb9PWUJm3KnAhVydqn11JeN7wTmr26AibesFNFLKsXG7irQSmNNvW5jZ2XFmEsUA9UMCMc",
  "key18": "4GzEph12mHXC4RAhAjjboGuGHNwErjE7BJthznSG2shuKtekxaqTNyLyqc6Y3VTpU2F2fjwA3gX8DbNEGzwdFbXy",
  "key19": "42Gr21v5oZqHavKN9PAd6oMAXVTACzjzo58LVHG5AmK3kAPat7ujrSd4kFhHdfRmLYisQrV4pmaY5QUZena1k94W",
  "key20": "5go7pXW7hsxaiqdJA19jts4pkb6a3dHsJyZf9efZNwCvoB6QP4zuCAXno5w2MAz7AT4BD9JR4oZ7dBoXVLk2HwXW",
  "key21": "22p6VUFfQLxoosRR5PXm8cKTMeqSPZLA1g6EFCHvrsUR3FkzzVD1z5HA5CenUwiCLXTqVM2eqC9rsjcVNamMdR84",
  "key22": "51T36oMyYQ415CXYQZ6FzVLpFY8zmJuQqDTyQRRDfVfoDwcVH5nSzqvfPbtTNRCy1wQWmm7ihcKtW2FAUwkXtEMm",
  "key23": "2DF7UWsECTwB9Uf6Z5DLRfxdcd8wWqXh1FrscZBET45TQ5o6H7QiSzYCtXeAY1S6CLj3DiZN6ZidcUR8fAcNYrwU",
  "key24": "5ZMnsZa3j6e255gS1yEDmEfyzGQrfs5Kd3y4ACeJsyuYdatAj8uw6EP5snDRyrxzA8T6ZjiEiTW5JebtGFHCeGai",
  "key25": "4WMLmPUEe9KU71w9GG5pnsaBUvZH9Lzanhs39M5LGoUZHt6cojY2h8ej8zWSD2LzKSP2RrvPoTiTzktrCvEymRYW",
  "key26": "5nC2DybrFcasXtpxcNDNSACTw5KSh1w2kZBDmqtXCdqHQkfJNrsePZLrJv9Nsem8rpHhkqKFxDP1awMJQNmS6mg1",
  "key27": "59h6LrzApqPGRrVyyGAeSosTF547fBoteLdZ1rZhV8iMcsPuHsAdRW6qHt9SP24dj6DiSpTZnoBPupuLjizhD1dq",
  "key28": "4RaPMEbN6dz9TBedWctG1sgeYvCsntpnWyX3Gh7G7yckjFqHvyK6fBmrgJh95kz71NMo5bYzgfxQUBCYAH9dNfdS",
  "key29": "29a8S9eCtRM4FGDccyoEBpL74tfREkcZbK7CNN5kWVfK4GpYU7tcsRuVbF6hj7RSuspB3nccFxDhD1HJT3wUaea6",
  "key30": "vzHsjorajfhoP7N9LaJgtjUj12JcoPLT7z8ZQxEWjHYtdJSnmTtZXrctdXU86tcKdcXJHtfeECV4KuG84KP9qJp",
  "key31": "5yQvFp829Jik2dFMMTZ4fj4X3JqcQ1kbMFoKL9YKugqt4WQgujXKLnaHDNKJwYgWBHGFcKiUgPVU5gpktGcW6L9j",
  "key32": "uksp2sMeLY624zfzET12nV28fVQxPgJ4WSQr7mLgkBL44b7oEkH8UbkdZjEpDhRQYGBKgx6RMpQXte5AHFTUToY",
  "key33": "5sCLP4Dt9NBWoGZ94hunKmPjtPbEvHk3RzvEGcWsKVRsd5txvPKfczqYV4C9Jec1ZQDfMHgtZEwwe5NP4J9eDVza",
  "key34": "3PtaA8NtoY2KWcpgZHSkJksfvRXiC2QSfdwgAZzB6xC1YTqtBT4rMtAxRrAzXwiwwpwcShhX41SKhCASAsWJGEyK",
  "key35": "18gwd9zTBRJVBCvKVknrmEf9wxzAzXzFiU5D5V1C5ERMQkf7dVRJ8SBbjjV7p27PLoQFHSmPTJsExgTK1HUCSLc",
  "key36": "3nkadfGKVpE5Dv2dv6WvxfMDo8hQ16U21NhRythD166utXk65idkS3St6pMxVHhyw1F5TBdTotCGa9vjbu9r8akJ",
  "key37": "3m1TnPtySoTVEg5RvzQRifdUWP51EF5qkD6uW3wj2qm7ZknTFGoqLu1c5o5FVpWRbKcY8eLqjRwvxMams5u3o5wr",
  "key38": "k18phfWXFtvwkvKxZLcwmwFeNL5BvHCAy2j992HSz4kVw15ZZodorzuDSqvM3neckV4fkRkRU6XDHVEffojDGED",
  "key39": "26CHo8iHZxV4yPHq3ymp5GHRPCUsQHKwDTK4GDt1cXXjZn4zBY9PNXSiaTHaGR9BQ967TMqnLdMX8AwWnW6T2ZCa",
  "key40": "oGw4r5bGxHbryqxcaJCMkkVpZGtS3xHTcHrSYFTSd8wx81tQ9o9MLkPDHS4f9ffNvPUK7H9mFrh5CcLxNd55PJo",
  "key41": "4YhRwb7tvbrQ2ordSczqBNDDEahAkyr8RYYZqYxAzxkdbwxXcnrP677oQKLK73J4QAxnqGWNXWDebcEphc2dJ9vu",
  "key42": "5JTne9jxjZaubhJP68QZ3FoaEff1Nn7YxGNB62e4CDtKFozRVypVcAcFNGCBNEb4i7YBGEaf8QvYCJxyku2CTmpV",
  "key43": "48R8xuwnfbbAC2GsprbDVBAHJe5uUk92j5dGm5hPr3SG3TmPo9SXzToYnfxNKQVz6tXRToRmK93a7WyZFthiFX3w",
  "key44": "5CHvqzqksjys2YoEu5rSRovYG9Sjk1prveErgvAf3RYujAuwzohuFBkxwaLPb4szXYpjVjBPYnp7F1osKuGPmcAQ",
  "key45": "4HRSj3WWNv38jLuPDMNrCbvAZg1tmqhw3UiHu4PXrmKhCFZ41f79482gQsVAYNHCQMgbvD9kHr6BkCThWCmoLnyY",
  "key46": "3Au84Yo7xR4nbA496CuHtHtQjHk5RXnaVkeBibomBc96xBwg8cTt9qJyoLWaGZ1Nsv1XDtjUy6k1RvnuV7AfgrjL",
  "key47": "RvfXwVsFT2ur1qPya8nsgEoK7PKy5kD5CnU2tnRCgNMKw7g5Ng1JwR2uGAeeinC3CvBVF9jsSxb7JajBX7VuHwM"
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
