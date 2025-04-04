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
    "24fAFzEKxFUdLr2VnkRnW6pBkn946PbXUb8sUY28KvxEtXE4v41jNxieBF4PhaVeKGJH8tUmoqk3Wtt3GcgSBheu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mYjSnbanACtH2erb4fY4TJwHiUNr6mMTGRyEPYWccJSZee6iLGorbdHtbRzKKBVg9u8kD18aYa6av89TxMRWBY9",
  "key1": "A3c6gnQbS8yLCKg3Y6oL9vDm2gGh8XJwdBE1iVA13T58HihKRYYgJ5XKmeuBDGQURyyc6gqFzqyuG9L8SKaEL5m",
  "key2": "q75cjivX9m3XYYoFa5d59Hw2MnQGr1jT3oXR8zg6T4mueapist6nY7m7i6ybAmora55GjEc5GDJEzCi5NdMSz17",
  "key3": "2n7pqYVsGZE3hBBVusLAGvkKEeNeBUEwVksq27PNsujEKFBwXD6DhZzXVDJnsVQ372DqNx1LQg9FXF1WMVRLeWoK",
  "key4": "34prALEdxv8vKsxUP4Eu1URKUMBg4dKEXMDMjeRwPMrrzrhjmUYYNwKy2iHGy1Frma4fv6tg2jbsosbf4siy3PV5",
  "key5": "4YU2ydPN3itB6XjYqDAdu98F55CeB4AdVFNqcRK4vEhQD8qa1sTBkRJjCg3hBBP91z8d7ej6eVQqBAUNqntvE6AC",
  "key6": "V6KSjXupB7m1fBH8XGVXqAFzkw1UnyTvrAPPFiLJFGEXGvMztrAJJamtiH9Vy1Yyp3Zu9WSmBqpZ2BEg2EvH3eE",
  "key7": "29z2nPZQnBfoSiCbn5XD3r81Hpvj3J4pJC5idUWmprE749kBw6egnARdJTdVpTBXyMiCSRLYxnk6bqmJhawcdZ7N",
  "key8": "24AKfvtQj29yAr9HU39gzw6G55SuE7CNNN9Y3TDRir5n5LY6sJVyXU3f9p3C6HQvRjEMhQeBhcyLqirYxecnRnhK",
  "key9": "5MGWytkfw9uTzu1LBKgUdn4ueMPN5yScpA6qsmffEnL9L1ZWQ9f5odUmbSdfCLZ6DrepMQYcTPvKr32W7vfSFBpi",
  "key10": "2jkrBuPM3QS2RR879gr9e1PMdNe6uSm3Ez5h944XYKFs2ScCg4iRmDX8qZarKUw8gDcNMfdffy7hs5vyCiKVjU7F",
  "key11": "2Y7hBh6QYxT9YW8wUrcwHJMHHegeQBeXCe7UHWsYNzSoawHYccn85SqpQ8K7p1YcYCH85zmEe8z1de86WugH1Wmf",
  "key12": "5WDj37fNrMwaGMRJFtTaTudCSrabgjy4WT5Fthc6HT9ZETRQesYDmeMeezz6cx8jsSAFAm6zHJz2ANQLq1EADaK",
  "key13": "45P4EkAq5MAmAUWFRMHrgFjqcsztnmqPr3XF93uz3PrmrxLuy6aooJx4mSQZBKVBLFvaWbipXrzPCvyDPMGLF3jv",
  "key14": "3DqSx7SGY8GyXHPSPSnojyyEMZZLEGit4QwnKtgkSgjP3FpN1aEWLnXLiLroAb7bdbxSmbSxXrNko8EmzJecKpMt",
  "key15": "iw6hvLaj7ZB8ob6fTCPxb5jzr8LHAUTv7N9EPomh1mzVfSYQLRPRyiUKoCxt9uxofa7f6iY3cVqTVQzyAT7bHXS",
  "key16": "4t1k7iMpRzcq9NzvnPixu3Tdh1jPC26ghFxbYQmadtBQdHvmbWxfTnrWj8fspu4ta3ZZDK3DW9E6CEw7HPCRfiXs",
  "key17": "3ij9csc4xyVUFpW52QFRghTVL864wbuAcsa7C2g6dKhr3Uy66Tj7skkt5Z6fafiFjmr9X8MhdUg3R25iRNHDWrtf",
  "key18": "k9ocJagwmdhUqw3Qz3HCYjyfPfkKQ7kMmZNm5gR84AkvL3d41RFuucoNmyAySJWUnEGYVS8jrNeJmvycoW1sf4S",
  "key19": "3ZaL4wvBKYf6N9UZXgE8H4GTdaueDKN9aYHAHsPmHi1m7cauDdieTSfoJMyACiLL3hZF4XuiNXMEy9BSuiYRkMnK",
  "key20": "4yrzzi7NhnGdcyBQQnBi2LDNAFMeN23p2D5uYWue7JzeVBSSTcJNB8P5aNyoaB546W5fMeibm5qyYPniNUhgrjk",
  "key21": "2bjZcRsUvAsfnW9Qpn5SE1PrcD5dSUJQEfGtxBiJKFVbgeDUxgivRJXk8Dm3MQWJhhaLAvxBG7cYTiCySXkeEG2c",
  "key22": "AJR1syEAHv4fJaD6wjdSfwZmcZ7bKzRY3vZ6frnZocBXyGXXFaczwf8hCUkUHLVt7QNLz5ZuQQTipew9SLvspz7",
  "key23": "24UPS6kryKkBm4FdDrXAPZE4KHyUcVaousrC8epjm29EY3gxcvPejRMCATqkDR2nPYUiHTGb2cRnK6Ahqb38FLdV",
  "key24": "dZWM2pdsyVeT1GhgekH9w7VjeCv3PeDe58gfjUMtpJWigo3B85D3D9gzZRH5uMKxsv1Pq6iwkAYhp4J1BMZsY7U",
  "key25": "2SbchMmS7YxEM7xSzJuQop2yeHMk29Ktp1oJn5kcC3Cc8pwvPpUpYLpCkpZwxRWsxZ2vamHjcUPq1xc325Zv51dk",
  "key26": "2EsDNGdwX81kq4yhx1agZeDPcqFdJeyh1RM2bzuWG64yN5WLF6EvAiwpJA1ALsYiYpGRhp6SnwfvDj1kTC8raXMy",
  "key27": "5NLHzXU4JRKQi5tF6w5Kms77dEW69bhZUgi6D4vd4wqb7Yerf3Ar24LZL1NpwjaYTd6hZFEM8DCwUrmcy4CPVQ2z",
  "key28": "4onvNCi8Y8AJBRfohat66sMCHL7dNNej5YnoiUEXrfD6pTFxXLR9Kpo9P4EgYXag5pVPvp214PD573G6UHkF22cb",
  "key29": "2meSS146ikvKcvDdGS8GCR5KJ88zYUEQ1jHe75EW9rz984wkFV7WvkHzoJQBCcKYSQTJPH4r6kEn7gaMekPMSZxt",
  "key30": "nLdqz4gDdeGHM9Vq5vbUESBDij5mvKxjh53WSQpMWHyme5JDLttaP3FhKpuCPR7EumcBUgL1TuEV3HZSAu7Muys",
  "key31": "5xAxTNmZrvajVCBzpyUcWu9JvU8Ci7R8okCpkkSACGD29RNgZp751Vn2xti7EBrzooDT8VshZcKFgJq6BNYuKzSa",
  "key32": "52WzBLkPoppwQaNwtdYcdW58Wwf6SjkgENwVHtjdX81wU4635jd5R7t2FNYEswbKyP8cKLd3Hw9Y6BVspyGT2CYz",
  "key33": "2ey7YypXxNLeoVHRG1uzK13phRzBYfyfq7ASbpDTigX6NdJKWARiJo4szBCNuzwc3MobEZEDkuw7RhKW9ow5wS7A",
  "key34": "2JvcBbvaYB9YC1E49PH3u8WwvWpK9VBiWmDSLWNxSR3XD3rM8NDdPvJeRUcpS6nEQ1fncRikPD48fbRTwJAD1g2R",
  "key35": "5NDAeYFjZiUjo9Mm8tZEbVv7MdYUFYXpf5QhoKJUYChUBXd8McLER3DzSyjzUCmuMZgdufCbctWTXyEvrwFQ4EVL",
  "key36": "5cPwPiHYLJsUUE1u1DnrmhfTEHG56JNcGHFRrXwin9UZpgjYsfeysGyoS4FAT1gcaGGz2gQjNDG1gxatJi6BTZQr",
  "key37": "32ASu4oSRmAzTabZArwJ1ESEKzTHWYsgnfB7viyenX4Z1xyhg2RxQDDoWBv968qtvuwArBuJsqRGcp7kahG6bqcD",
  "key38": "2WyGMpZ92QWFMe3CWw7JmuCm2tQV1CmStQbmVPEdP9KnMyBxBp5sYhabcHVUs5KtEZrbE2hdUnpF4qJCW3MKS7Zq",
  "key39": "QhtdBKDbAZnBX56qpskB8AnfC7NwDeHGRUwWJx8uAqs1TnuveuxzrirrwgKxrum8mVRbhrGimnv8rsBHFMU43XB",
  "key40": "5vu5cNF5fHgbhMEyMaDpDSQ6jq3R1eWkxKeW3A8oX2UgA4yyLTakfBCrQMdDqDPqKPWkfrAfKgMULoA4CviaJcNK",
  "key41": "38yamKqVekZfNyYEVJohtVbHSJ649pAUbUpPxrGPQWSmwSDzkj4mn3nQHEFY6YrN9FgNETPap7KWbKDChJYfHpEc",
  "key42": "3xKD3dsvYDYpBBScFDHb9UJtBgLkGSx8x2moFLTNF564F4N2jk7jv62s86F7UMSKhfBv2UTivYUwtBZuXS75JcTC",
  "key43": "38yfT9wEzw1sGZ2kVSDzY6NkNUhCWHNuT1us3oMA94GX5U3dPE5C29Q1fKeCEKetqTZFazW6x68zH3gnKFnHa5wy",
  "key44": "5hnXMaQcS9JbEVK8ic8MKzZuTf3iFqa7C45pYscBkjz94qosq573LdhpLtHyTw9GLqyQikBqY5QkjevQgX1Xinn5",
  "key45": "4Lq4DxTLMTbJ3pfGjtQuTDSTyjmxzA26kLG5x8rhpWfUXhj2GP8pmoddNVDWc2bL98t5u8crDhGhc6wkTUGzwvzC",
  "key46": "2RgqKn57o47VsaSD2GJX5CUY9A5EP67XifKdXiih8q4Es2nezdi56t8ivXL4ug2yfs7SMtwhoubMLQU6CujyYGWH",
  "key47": "4WaQdcW2aThY29cCkbaFzwdg9fSwMjkWuUZYGPUNe2tBSQ6pxUiFSvc17uPnjke8ahu7dyFntZj9aYkuMFouPe8A"
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
