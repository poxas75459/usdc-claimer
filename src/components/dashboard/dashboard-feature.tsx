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
    "3j3nUWv8MLWCKGj284XZE59wMrZdUnF6uJVGWD4qjnrVoJguXUcg6Y7oFvCeTEaNeYSw28UT853tPYFA5EPJz4xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eZGwNgKfBgtvsRA3WXHHwc262fAv7ZPbU3Hr6DrEDJw6WjadFdbS4hErZWRUcQSqzDRgLSMn9JFfzUZKnsxGVUV",
  "key1": "5kmStzHsBq4yMaHKMeHsHrNoqQYivJqxihRC6rWikxoguMkDHxeRFd21JCNe8NdwBitqyLHKCHV4UzxPXCuYBfie",
  "key2": "4pYcSZ114qZAbfYHjWkbNpVaCT9HpYZBB5TBoqg1UMkZDHnSejJA3a9GGVUx12hfzexyg74ihZudb9VAVoDTqkdw",
  "key3": "3YVjA6mcCG4d8yWHq2V6Dv5wVyEqjPuwfrgLmAPiTMDMqYB86ZosHqvpidjtcM7HNgMJNaU6RxQoW6KBKZhpetYy",
  "key4": "4YpDYDbKuoFBknBQLQfzHYsWf1VS7qPZ6iaJih2bQvxb1jrpteccYw1U3uH4ZMRUCpc1Rux1LiJkJwDQdKC4eyCB",
  "key5": "5hvr8d63jNW7E4Rni6WdDyLqmvwozts9xmhe11kfoMaBbKxPDUa8oyKDmsWYoWYC5BL5uajnNxDJsGwgKe8ng9vw",
  "key6": "3dorJjUfS2tGhm4zEhwPL1gK9kMoFo4M9XKVJvHbWXz9FUofeuQsuzDpBv1VCKq5ZirW63m4Q7ZmRCJWaAnLmRsU",
  "key7": "531nmQvXzRy8wmYo9yckefn3Ak1o4LnyWVxyzGBEuGSmbBDTfLgifc7ZSUwPAGTd4FgUV4fakaCL2oNr7YjtBNvj",
  "key8": "5LbAgt6rnw3augWBv1c6rxj5qYxjwZGyF2vDXrmJhQQtPT1ZbirRCNGALHG2qyuKptNokxLfSffLkQwFhttrX6Ha",
  "key9": "2NBxfo44yByAGomsapyPa6z4SZ5cV7Pihmn2rVtJqwn1qKTD3JxekC5WFPR8i2TZrKYX8tZHvr9cZNSnUqmuj6DQ",
  "key10": "5LLr33NNrhDXfo5i2FCB4SmmtUM8F1s38bnJEPswcMfxARsN26awbEBNNMC1uP7FTH4GzuRCqvMuUA9C91RC6SD5",
  "key11": "4379tz5nLZNdAg4sMx9KEgzsjo93GLugbw9eHZSB2LpcM3SRCrw7zc9QbFet8oWzU7Chrhd7T2xVCgGbFw2AtPhw",
  "key12": "5N9dgosM6hmHHUowhuWNs2rqFczMWgYBjq9SDbdoeQkn2xjTYHAgnvUgFwhKHh4GU3RB7jLffivKwCNBPaH6EiRN",
  "key13": "r4ddqM5JQ8HHuQRSJMiTS4eMy7krs6EpmLXNGnPtHS1EYegGMuMFad59XT8qmHEAMa8ZtaqzGEmdpEeaNCDSWgG",
  "key14": "2dTM8EHz37ni6fRJhj7uJhkVNgY4G1tv6yjg3T87A111LFK2tyTdwzFyLABEj5hRRzvoe4NJ8zm8Qi1mPD74iyS4",
  "key15": "5qmciUfnugx2x1aem3g5wCZAXs1jh4MdrEJj2Mo58paj4jBs1WwXERFCLb5FpBUJcK11gwsNNWg7JS1sz5SCCGr5",
  "key16": "4pRSpBNQnUAgFApnHTxsaumKmZiaZWEdGyyB5SiQwjLR2X9g5a3A5RV4z4pitWqjS5ZqtH8g4JgbmRytgsDrDVKH",
  "key17": "2MiKZ81Kh6e9gzHCjjMbKHq7z9zzxbeWhuxU7toRU8G9Um1xPdsCNF8d88h7bXdFjpRgGr24y4nvpLRimq9D5Fyv",
  "key18": "5ZLm8rakENZqHSV59QTGwvfGAsCrZGdpPceepnfqRtx8Ct6QDz4wd7NYMdNBdj5ceg9ZcegzntNb6PaiCfXpHdqA",
  "key19": "3Xheb5UnUNCwbjWZgeGTr9fqrkQvRpUrgqAeAjzeTDzmyYBkKebQWiPRgWyR3iijpGvnhcaSnTQPih8bHC19fKXW",
  "key20": "4fsjRdXi9WnDgrNbcQTPnzK2LyBEbhALqfUA2oaz8zVaYazwk3sU26s6Ur7BTFL1DEDAJZLTWnk813juH3h9LBdD",
  "key21": "5fYLm5xnEo993QcYTPDiFXQdhDuRMvoeDBbgHwWHqapwpRfBFmtLHgZLLD1DKQWwtvp7rvQaQVSFP9fSNfiUMhDV",
  "key22": "mUEmCW6Ut81xgEJcHHVpToPYWFpkdKkFAei9Qpqa9aoBr1uJpF11x69Z23SffvJN2XH7DzabaCSoQMA8q4Ecgag",
  "key23": "616xZagkjVyXeDsq11a4yHpNqGHanQzVhRowwXAbDevoVvrhJuZARKXXhZiLuKiVRXaMYCNP38LXwg9i52in9t4o",
  "key24": "4RzcTFUR1sStAt9jsga8K5uTW9YiiGAQZqTHgAfyrDsamuzttiLFsoXStuH38dc18KxEnaf2ZsfnpwhXyCK8BQSQ",
  "key25": "4CpY9X8idsXALGHWzAUnzGY64LStsvpBw1E4EmXzkWrzTX2NbZp1gfCMmds26e6wneJYW4sdCEaj15xd72nMbAXX",
  "key26": "2HvRCGY4irqFCcZiRMw9GywsxDbGoYHBPwXpWX83QAYxK3Pgmf48BM8gRhf6x2k63Bnk49u4fkgRNnvtea7xob4v",
  "key27": "126kv6E1Bz8MhfxGWRBA1fHZHy8VfTkKkcZZtpZc9xTsm54197hwZEMQEiHCzHLCWQcVyFSM7QXt64wj7hZCoU8e",
  "key28": "412CBQ6ZwL6AxntiW4oQcBr2v5qofPhsRTAfdcUQj54TCPHUqvvcc8CdBuaPpuDrWX6SinCuLC1NVzuW5sTWhEZS",
  "key29": "vjLmkaAvsiDwgK2UnaaVR7MsN1JKj7dtprf3MTKtw5Vbp3je1ZJbCwpPj3XCMtBwopkZguGqqL8crBxHfRZG4TS",
  "key30": "FodHMMCC3D4gx3EhAfFsGdEUUp6JFuzqd6H5db5wrfywj4Uqxa5m3z7EMr4RkwsZKrwGviYqagUBTz32k73nN4W",
  "key31": "5BvQiEor9Eg1Db2TP1GvguLtiMQaVo68PBeGGgeesCQ7zA39NiNuN6BEJ3WvbJYtPDpzfSY9vF7d9NpS6sWxHNDe",
  "key32": "syxkiLpPvBQxJdM8tZvjDM61zZwF8A55dfEyo22A1fidbJtRcqsnwSjVJoTKNP8UL25nZs3ATsWQWqneqMvoE9L",
  "key33": "2NHRJuBHVPv5GffmJRrMz3DcqkjkyZekVjuvRPXXSx1WT7TA7oT9azevF11dTeEYXcdZkPkGtEQb3ooQug9gw4sD",
  "key34": "4hriUtE1opQc141iuf7wrcTJLNCDQ9nR1RWDAuL3rFXNNSJkDjmNNqEHHnT6jKDgg7HniapAEcmLFeyTjuce83A4",
  "key35": "2jom1BTx3m6XbJ4xiCjUriywcvgYgqRENmmUq9Z3Az2hCYwwcKZeXFSNTSkSM2tK2v4tyF5LhrnyASYuh6q7pRh3",
  "key36": "2QwP4iWpQQ5G7pVZ9XmJ4gfFMwvL9uK7CotqR4jWqY359TZNNp66i4fwZ7PPeV5Yf26dsQbKwCoc1VtwC7p1dgn",
  "key37": "SHekztLSR9kvCgzhqTSiLaQ2DxtpBJGrCLUxu2sX7egHxtEf9r2JM38gtbsrRGFQAvGgZSg5NsojxrMdNpRLK5b",
  "key38": "2D7c2oDjkrmMbdXPkhW2gwdEDHATVfE3purVWKPm11HDkryGkiLkwAU6nErPx1kmKm74ep6gK77vRQ2RWTKqQhYm",
  "key39": "3XPoKn1PrvVPaGqeGBtxxcRtGH16so7VpWEnDSDgJiiCVutCEDpuyxhs57138eDCRDcSZkny5GmEgtpteBQaFuiu",
  "key40": "3sacaBNMh5Kw58oC3Lbq9hH6zR84m2eWydqXF7gy3VXEFkRGacg8B1yXNDope9MuQxaUqcswXpfAFhHdJ27fjSbc",
  "key41": "3DWVZRXgr8pyEcK1717N7NqGfnVbzfPtms1EGWbbM1aKGQER7aiuPzgHtMvPbjSbsiVggJoH8bh5AXe4xCHifQ7B",
  "key42": "33ob2Nym1Bn6eDE2bSs9aBNxLub8VgjVDwShQvpPg6xE2ZEZCUvbEgcwJ8Ji6ekPnXJETvVtvNGAbpcVMD7T4HZ",
  "key43": "51sDY7kKaRXZJHvH5TVr1dPjRpvcvuZx4afA4ZvQ8NdKF3U4ttUZQzMcPttcbHx5ipcZMwXJBbbQzstLDFdRCaKT",
  "key44": "zd8sPY6onEUQ1w6PoUh9n5RENv6UT6XAd9sr6F5o3Yakwkv5nBs3Wy8qLAkXxRFnD81RiTDUSNSQAiu2v4r11ws",
  "key45": "3hgQsUXDVMauAsPouMzyCQcY4mudZcsMvzuBBB85LheHk6A5GVz3cUH8iBEnfNqPSGeCo1rszcG4B4YtyX88HbqS",
  "key46": "2SZLeV4jvBNi27tZCgNjqwfq8Zj4W9kqYx354Dzsw5ZXN1ntvkSEpsNghg5WftkfvN9j6bHwfy4XR8eDnxBtZ4wE",
  "key47": "3CVVLgK98JgYkQVHhgBgre4DW4xL2Y7nFfubnpqGQ3VJYADD4GCddg1i17owXvHnknhwu19sTesdWtD18xH2jECy"
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
