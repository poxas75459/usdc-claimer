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
    "5Fs4kWnZeLjbV9yokYsfrvQorNHP61ZmKSTEi8mFnj1jDYUPx2FAP5Apc7jNbsbWVdRML5QyCcuSGDC5Lwj1q26w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fvwywu6weggXBDDcfggEjnGqz4aEb5mWRgJhavoyTMePAXaMrtH4BYRKEhBWzhQLqXXbqeonF417TjgRpuUoEiF",
  "key1": "26G3DuCy8HACdj69fRj3eyiTVhLMbQiNohdmviDw6wNGbV8Kfa3SiZdhatLKHAfCAwEYuXX9c7B4tN1fafFKLNcR",
  "key2": "44i9j9C2jReWGB7dhLmgbbw34K1wT2NM9rkfSNht3397u5CNK7V4VPNb4i2muEYzcczS5qJcVo1fA33kSmuJ7KdP",
  "key3": "C3jnYpyvmSHceHYNTKsBFKzECwPk79PViGETt6ZGhPndDkKk6v7FBiUyJdphg6VFVLtbSaWEKW6VfdXq5t8xw34",
  "key4": "39PSo5yYxUaE4EQrZmbxJXtPPEaBygFxGWVWBFA2LMfE93B16AcKA3kR4JeUSRrFtEcwb685dUCHXhMwCQWc2f3t",
  "key5": "5mb3sazu5NLVWoMG4H3a2jNVzXxKugD6w7UTASQwy1mBxgCehuRgBfR7BMhbqRHLU6CWLmCKQU6jwQGH6XSHbTpQ",
  "key6": "21UaC2W63XjuuYkruN81J6kPuaAVD5ezbHnMN8HFmZMfFzkHzjQboCPnVRWfRk4duc3kaW1VbqnxXy1CJUa4xLsK",
  "key7": "1FigVSExtmTp4M1KqhxWnvTfTK7XsS8mURLQ5JagxmLsCcQXyF8AbEq3ZVQeh5R7dYQjoBzAdL5abGZs911gtf7",
  "key8": "EEUbYgyH6paZjX5R8AwKREnmtCznHjLQsZL5gun8akx2W9zaQBNhzeWffmLMNb6BStB7SdbDmPKDKWxkdUu7snC",
  "key9": "4pUtxzxwvu15erMgfBqLJdz8HNNj3V7iXq5GX8yscfiG44GU41DAe76U3yKWtXTt1vv5Nq2KJSj8bkvSk9wGHhCM",
  "key10": "3zapTkcLoa3mdvzg65fwJiG9ThHBVUcxJKiBzWruRztrzFQi7RiwRm4FPKUpf6ECtu9wZ7FVP2DZVyQqy3WULjHz",
  "key11": "5C1rhDyiEXunbbproHTCguiZKiwAwsWt1oU8M9dbpA3P59LGbEwtKofbXt5TgGbq1TG3Nw4Hd2frdganfxEjFof4",
  "key12": "3nqaSuZFpMjakULA1ZoHVbW6cSifVyPDu9JqcGjNsnqnofq2Y9jWNQVyyGyPdS9Pjh9cuE1oPtVHyr6kPDnRVfoz",
  "key13": "2fWGqCe7BNRvxHqDazjUA22STpgjx2PNDSjecNGAU1Nc7L3TPU31i5SYzakixL5hryw19J97t1GmCmjDfY7F6UWt",
  "key14": "4Kbn6a28WE1TZE6jQH5kve2hN1R9589JYc1f7oWaqYDHufu7RCCKkSL8QtubySnhxsNDHobCeu8SHTfahatwEPgr",
  "key15": "4sEy3arTXNhMEkGcWRXhUUPrsdqDezcdvzA9tMeKHc7qdmh5PaTFEVxXX1eLXQqSs6gxcztcTwo1Km6evj2ayqZR",
  "key16": "3Asr8szQGaKCR63n6njUDUqpxDHG4etTborvb1szGVYzSCqFiV26KwVNg8ErdrwsgPRSpgApMdLxsx826oqFbGei",
  "key17": "4nAwbkDqCSnX8sTCsyKBpUwjGrLk6m3vh8mDRQdPprJfrLnonmAPN3H7LGr4wyHcFpeY9ixPRo7Eq5FCBvQAHfgo",
  "key18": "5c924t1Ei4j5YUAMRgZzhMpUSDjmLEsoqLenar4FnVDABP6vy5J3GHh9UhBzrU65zcN3k53ozxruqGmzvR8UtdGi",
  "key19": "3tiAC3uLQbb6EZ61ccRHWXyaGbvfWUjfNU2r9iTEtKAQrGSxdpkLWVXv2nxUVHaZhySic2wx9BdriAV1kv4pNLYv",
  "key20": "2Yd7buNJhwYNVTGCdWPxA845WcUvs88jxiW46S9iEjcb3tcxvySgy8QN4uwmcKcsZwzaujHXGVtZc8prdKDJV87i",
  "key21": "2Lg9iRjsK328eGz7pnHRAdnstZqhMeQZ8dR2YqPqDUEC5bbUWWXbpKH3FtX3VY1bMV7s8jufanNL9xMgwFR7ra6",
  "key22": "5WigfBMsuypYbLtTZDDqJyqXW4bu4cj3ZH6h2Ldkyr6cFdpgB29MpA4yHRF47mGyzqbJ9sM3xheEQ6HkUUG2pCQG",
  "key23": "5HacPVi5QA6S2qmjXLzC7yMTAjQeaVA9GJTePjVB7dK7b3huPfHLyAsk1ZN7KmRzrBrxm4CWjxcCidWmbGv8spen",
  "key24": "2WLs8wgX6UiT1BoJ2416p18swwm8Mxk6WQ91vBMzG1t4fpV5ztURFuCjGZaRw8LkjM28UwZhQkzDMwjC6jB2Ri2i",
  "key25": "3SBhCvifph6ixKpSgkfdyhnE1Qibfzr95mTvjyMQmaXq8JEW8dbXyYfX9fuVBVV3nq9XKKqrjwJRnjmpD7yZ6Wi9",
  "key26": "2FFAEumnL5KQd3857HT79dbGr9FF5XGNYGzxGr1PxSzAbkGJS8nAjj4uP6FGHhZnqUhYdnNfg7BBzEFZ3QLWkg8j",
  "key27": "3hm4tSPv8G3C2bX6ZB1L1AUwiA3ftpiF1XkyNWqRxo4DBHB2JtGTitxon8tW8GfNWicyXkZdghjk2gQhCJTLSapm",
  "key28": "2tn8F7pwXzgwvb8Gom3buKK8cp5h8wUq4rcYuyyUmdVggcP3qkDqynKD8DWyX5cudJ1DySrF2ZoeLPeS9rJ1SYxj",
  "key29": "4JDty8DF1dMs8opSoMSG9iJaaBcQB2u8apP4bNtb9dodiZQAhokVAS7at2d3ybVe62HQPzreqLAwX5NamMG6vKCJ",
  "key30": "5zZ4jXETU6QTF8t2YHXDECgBmNzPKK7PGcsHhM8fEjke7pvp9FkyVsSEvC9N7xb1WN3VGbZdLJFCakeAFsipaKka",
  "key31": "34ZiLE7VX4JqYX7vtWSxGxnRHN4eoVmhgBUnBzzBbgWY51P62obUU3uJ7qwWTQydpvpEEpscj2JVi2F2U7XCJpPK",
  "key32": "27hxJwJrABR2ekzXyZEsrtq1bnr4ghCLH8jHUCDEGsq46NxgC9cBofhXJfakjydC3Hdrssy92Lvf7zZYbohDjT2L",
  "key33": "fg6zar2SFnJcYfxdNGuh8XgAxuQGLzehmtb13E8EUdJ1EmjF6Sb7fgW2MSUFk9PPkRAyhzmGv9fz2hoDaH23q7q",
  "key34": "3AX1wxhcawHaKCD14Pjkbp3ET9QmLrDYdgxfdwQSqiSbkXZDd2XoNCsNKY46i3gDKDBqV2gXAedeLij5MggNZtoN",
  "key35": "zjThxe3m7pegrxnNPt8vVdNNKuE8LvMo6h5evQapMhEBvb39f5a39P56wNWaAHcx3WUEJRYCZoJ39frKZD6XFGn",
  "key36": "yGrrBEqdhwBj9LmCZHi9jSL2LYbN3WRpyHaynswUkuX1aGZMG2HdDMdVyCwysRL8x75u8izkBQ8B12rJMjDiYU8",
  "key37": "66Abyt7pjJ2y1JLUnmDBGGjnfF7Fq8Cndc6tJwyXm5t2RcS7iVufNxZD4ZLXqDWiu4XfW2aLkvDQgcMEwm8Tbodv",
  "key38": "58SPc7yJ5HU63uhYRmSRXvpkdFaeyrAFJ7pN6YciRy5KFZcBXt695ZV7aQm3ihmKAgNJrDPKxLLxtoeZEKV7xv1B",
  "key39": "4H31qhxuhowZEvsKv3xHp8WsWVEgiV2AdBrDeMrXtSaoHydK9J9uCVpLBKYP8oG3prquSd19fyseZRZUxaT4JmmJ",
  "key40": "gJR8tiTTyZe7AosmStvfVq1nizvqBTQEKr8HMwZmB39Rg8AzRHbqnTmhzDAXfovsy17JXtpsJbDtoAv1nGSpTW3",
  "key41": "7ZgLHVcTZ74G5XP59gH9ScjxnTwCVzsHLbbCANuSXDBDogsGbZybNQobuBcs48UKvgMn9nsjPecYVisdif7GDtm",
  "key42": "31GhDsRs94VFEbVzkD37ftf5SgwMxgo3tVYB2KSy6BFi2DxXueesmDrdKabtXSCGMSubNrsqMs2LUcCrmvk1EdAp",
  "key43": "3NCnbg2pgUzCp8dasA5eJUULcBgTHjdCr44FhpmY5SKYwzMLvCiRurW32HbnTbKBqeeKsSsxif94jLD3uKPQ2DDM",
  "key44": "2gwiv1rsBCxcTWUXf2hXszroTpujFe8goFaHhnYLQqp6sr9uzUnD1YCS2q6rLuVgAnd58RwwJ7UmcPg9KBLFacLu",
  "key45": "dEYb2irmGzqiQknpRscfyZMvYMFWzdmcw11oMnoqo1wS9fgcmjBB5ZR5sYagzF1gF2QWp7kDuMckPySHHJJGg2N"
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
