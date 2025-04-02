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
    "3SqtE3oF3bA3XvmRVn2xNmKvnTEHEuvaT1FqawFgvqoQGQhD1RRL7fgFSxdsQFcwVQPi5EpdmtYa24gXehRpAiYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59GifBSiTD3dNJbDCH1PwUzuXYyudcnKJRs6sD94E4E2mQpmbDg53dFWd4LdYYMu69MRRFbBtSz1fSwWqmAVYoqq",
  "key1": "5Sf7VMQUkVCZckThUsFBAjLWd6Av9LyhQPRJcbi6i1izksvricNtFMw9anejqUH1UnXh7RcqwLfu7u9fTERmdwsq",
  "key2": "3uHe6Xi2tGeQ2BrbDrFn76KC1szmTKS1puqqBte3NoMQFePoxXwijinc1HcizMMbCB6zPqwLn6WYLfuo11N5C1FT",
  "key3": "2tdUgeBuDSdbqJxydGCnjkRyNLd6JVJSR7jKPu4S7mLehPD2c24YL4v7RUMVB6GYAsDbiv94DHhDBK6bNQB3ZZq4",
  "key4": "3zDTWm5bZFLNHZn6a1iBSyVBj2xc6aoRsup1Nupd7fgkvyGVaryCJYC1Wn89SZ8YLzpNU9mDET9poZpL5nUnFghU",
  "key5": "BsHkg3HsXHZWm9ssu9t5Vdt8zHoVtaqmqGJ5E7yGPkpXqtEyYmmUrTSwFrzKLn1dCWQ1s9ux2sX9Qmex3LZ6qPY",
  "key6": "KYW6LK7arLrU6Ydx9UwdhBYZ3fjRGr716bZeeYTz2He5pMmJzUxg21Y7rfVGhEXokreg59iKjZArbbYqC9sG5Xm",
  "key7": "21PxFk8fEKairBT7obDX586XQY8axMSJ9vJtFeHpaMmVm5aW65X9FXNhiN2ZWvBipeJJGrd79D16rynb3F5Q3KEt",
  "key8": "xewWMgoS7mWzaTenXYNev8X7hq636dBsFxxeJmzA6V5vYs3SEJ644jMaS2KdGkuhFnZPuqqhf3em63CPmYKv3je",
  "key9": "2i82hVdPSRpJurrcaLUX2oAWZhXZe7kAKbcyaUCco2FmWJUuStGKoJj2pZFoyfL3ZhSiHSRYNRtC4LErFwMFsTej",
  "key10": "3NEJwMxCdP8NKigZe3mdLZjz1a6r2BpiRJyv27wQwwudTLex17WSRPPgkJQbtNahHJanBbNG95kQMK79nnXx4Fg6",
  "key11": "4mwtmqB5qfJKM5BRjHnG8C9pV5AFmMXHof94gnAre5Z3MrdpbXSojhmKsocRft11X2GnBjo6VQM7yVNLo9UehVPo",
  "key12": "52yLTQ6p39q77p7qi8o5uyva7XVfvpggQUZHudsBM5yRk9dakt1TUyhMebrCCizutxD8cDQYKq4tEyRVuv3AW4SZ",
  "key13": "2g4Pf13fwmFqxkamPvrcYyqijsvbL1cbZoXi8Nwm9qYbshXTXeDz5wxHNW1yv4tQFYfoa9kAqWMvuaNLhs8atY7r",
  "key14": "5Xs5Kq4WWao9BeTBnHuFJndWi5pJFfpWEAKFLAan7ndCCfpbfA8D6LQt3wThPW1M6H94SNpca1Pfz76v2dXDvQJa",
  "key15": "4hjsGsopSZFqTBV1bRRENCQEpz9uEYU3TCMizhiod8CVPs4e7qK5P9HQ6CZakmKCWtsFnuxsCgoY1b92dKhsR8ib",
  "key16": "5jE23An8xL1B8TQQkK4rr6UKsrUbCriCtK4meyisShUw4buhEovjpEWinrwsdWbyGpzW6Tp5Pzm8xoEgoz7oBtMq",
  "key17": "5qenKg1KsaGtN7aSedFYrdQb2nfa7vTyQX1xvuVRo9UPux3L55EoXMH9igm1iCm9jGxxSGwruiRudPp2o4GfBX8",
  "key18": "5U9A9ZRJ9vd3rSXff6odtpPF9shVw64CkU5saKxSARGuxohmbGZ7gTNPHDeXvesDrSoCLzWufhoxGmAYxRSwLtCf",
  "key19": "49iKddjpMQSSAqTDUYCM1kwGUPMTnFe6CyAaUuNXvUmmeuc9NhAS7531v78dQBaw4gQoUVhRX1KAie9HXYchj1Qh",
  "key20": "bAQ2PpGUQ1byvYiaYxtuVTq175eKB2SDD9k7J8iHmensQ2pKuXoTmsBLWRgFwFqjsAyeSatF1QkPt27xtRAvZ1p",
  "key21": "WEpRqZSwgQEHg6uqwwS21x73c7mwaxYGHKA5YkrDV3r5Kb1ou93GrYXrRf7WCqjQkd3LCaAtdijHwPLRKQuPQno",
  "key22": "4UpSN6oVtPccg6jrbbcTerbFXeQ1iYoPnUT2ZqTzkjbJh8hqkDN46KAtwm1Tm5WqS6vS8sv7XwEaqDzArYuC4nAm",
  "key23": "4yuW8xyuiAqiUZJbFHFNL6zqr7sJunykpiue9HzKo4vLbD62VXQM3wxZri4yfHHMhkzirqtM8wMcVWquRN1o2kTW",
  "key24": "5GkncxU4dc8S5nduSs97qftmVmroCTrP6ajJWezFZK8NbdmuCuEnnJBYSdFEAzhYfJ82d7Hii16VtgHw6QjugZKh",
  "key25": "3GDWmYx8VXkHLXxn1xKz5zijsCQZUDAvXUgRNp8HTSbMpkmHTciV8Brn9KEGr4FaVCzqiM2jaAef7rRqGwPozDt3",
  "key26": "3M3HPKb2E98txRidxpaWsq15MP3kJoAbhteg57PCKsTTTnUywVVHGBQ5HDfKB3Mrcd2M5X8x5mj45Kz3dKHBs4o8",
  "key27": "63Gdh7DNcocuJDajSoHh8LigotfvBCozpDMx2aK5Yc6gi6EcHQngP98SWMCRwgAXyaL8oCkss9qwLN3yZpcJdiPT",
  "key28": "51qxNvHhFXJ857FGBUf52Ag1bLCsUgJJipd12xe2ZgWkbD2K2fSgogfQHysQxUgmBVukkr1QdPtCA37hCWc6j3Pd",
  "key29": "3y1Pe4xvq2V1DmjJREfngim4fW7b373bVycHy5WdtmJzDJbKi6z4ct5KrHKAErs7fDPb295JrzRgoUdtBJC2TSRT",
  "key30": "4naWYWBxSzQtXNCouEXtsqwvEcskodVEF653Ru1dSGH2CFA65b6KyvQRoTPoMXADyhcWJWCuE4p2Xf9KXkya6mZt",
  "key31": "BzoCgWUDywmuDJopWuCjP1ZevDVzMxAYscXsaqsX1JoVoAw1WzyucWEQGjgMsssiqgtz3gBqxPQetuq384D9Zw2",
  "key32": "qHq7rnLAgDH4MBopp9ogXAW3iBoJAwzvUUE4vMXaGZaLyYMyUyAun3GFxwwR97f7ULedhDgu78u9nLjKf5S1QTM",
  "key33": "5qpsrgZyyCoyHPmqRjP3S7Xo7Ft254yMBPEpv1eYKEW33ndx6HuVER19eaRJzrEJHpLqbP5ba8puGSSSsdJeQFhs",
  "key34": "2oRqrJpscbXw8xNsX1sw1PG8AsDZX8kvD7kZjNE4zBYsrqHzaEDG8tHyQY1Kk4BghGowHGdeU5NdrwhukvuboaQ4",
  "key35": "nCy5bEsF7JzDFDCw41D1Edy49ATRwojvrx2wAxP8dyML2JZp17GgsYL4ZktBKiqJ2nt9NSK9Rs4kFd33k1jwHoL",
  "key36": "4ztJtkjULqsSxib2byR3bSvZnvDgcNQvdnBFPQhqMsUJDyM4iH9fqkx2gJ5sdpqLjJBJkRxHmYDjnkqiz6pimXB1",
  "key37": "nAHEYQnV2V1NuWtjN9tUzVBNqvEpnXKhwN7Yn4b76MKvy4cj3xfnd3XEThSiK8pv4hX9bnkiXPFfLcbmLiDtasG",
  "key38": "5RftpGLpE6QAwcSsxsuty5XcBmZKAqzXt3XHP6W7CXM7u3sqDqoYSkmEzC65CeVPcr5x2zNwHXhAZCZDH7zM5grH",
  "key39": "5aApAsK1wp612eqU58Ko6wpcLxti1k7NARLjj4kjvcPRJS1KdGYxz6DQbsSdWEUVjVBhf3CNNm4k5CZ8sTHpcpZW",
  "key40": "ea1aeFvbWJxYoSd9KYbqeuGAdaiHus8Ge9HhfjP1VcBogGxsu4G2CZPUvpSQU8uZBSyUrTZJcHTqe59XYMiiqiF",
  "key41": "4v5ZQXjHYfkS6iHndx3Pn3ji8hC1Zk1TauCgUnz5dzyCYYvicoXwZimhNAqM4YumSZMWv8nfTAet8q4Km6WJYBWF"
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
