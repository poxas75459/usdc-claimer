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
    "3LmHzzUzzpz5p4gCggXKm26NKa5fZRgvXQtj7XzWDBXEh5hjHAYWSCgkck4cSa8tvmcvLRCM7e8ua76V5goNcZ7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFDVUXQwU1bbVb3njbMTapqVyuCFrbwriB1Tdv3kQDHDDCX9dezsA86P25wSJ58UQfZ9NQmuDuvGFhovngZhZYA",
  "key1": "5BQeWJNVe7vWnP2VHnaVGDCsqhSUUgjgt9j6T2BMSkim3RBRJDTk5j3a1QpVzWr5JspaWpm3m3DgG4BfLuBmyzsj",
  "key2": "2xH46BbydxCryLgDKoMUHVnMPUZgZ1kMh723Mhi5WLUZKzWgaDSyc3RmpmBe6NiVVNTiYGgEvHahk4ZmuZHJLisa",
  "key3": "288iSEwHSU1gTYtvecmky6EZtDvMQ6M8NkhenEsycwUhMY6XRUJ1BtZMeLsaAB5hxr49ifsbyd5Jb4gjuYXRKQiY",
  "key4": "3YaSEtqE11BLKxtoNH6U2MM5KMA94eRh7ZmPYU4homxUwKu7U31bs3j4HuoG91p2wLyRUB7n62i7NZ6BTLjREkHE",
  "key5": "3tN1275ghXp6J7JDRmAwCUEXNyrdhToaZGTQXjPnmqgW2r8QLrnL6oGNQrMEHbNTZJ7YCrwBGMwnGC7GVN92FdL8",
  "key6": "2usU26jpfZZP8tD1TfCH9v4MMj3STKCZhqvjKgXPnnerRbtDVQRsVU8NYZNjNMoRBL4sP4DgFfmCPxiVY1aLRnD7",
  "key7": "3yqZ1YxWtqvUQYHzEifuECcaMepV12BhXhCZMCquKrGPaEJvmMFQKUzQcDffqpSb5vJWmofnDKcShS4DDefGxBhs",
  "key8": "29wU9GPUtgEoikKJmFtoytTegzsSn7HnGZ5wyFKB7QqMgisHUdFzjd9Xg3gXNS99ewMpMchoJSv1X6jVxqy1ZW6R",
  "key9": "5xP2bR6qvcwSSWNwyGfCfYhsnevuoTgRGt7RsUZ5kM98JpkARrLEBdBNHa8if16uz8qKbTTgzWQPUcZM14CLKHAC",
  "key10": "3j3Yhb3GfQxF1xzjXRDEnnbunkQiJEoVQMkKo4P9BQM4a5bAM1haY32vf88XDTQJ29b6eJhGkNH7nKemJbR4x7pY",
  "key11": "3M7KxwdV5oL3wqPFThAJ66Vs8PN4p1FYK4ZDBK887E1qshjUcsfzHJVJMsuyAE352qifWfMz3fBDkkJk14YXXFBu",
  "key12": "Yc1eRtNSP11WjC7D8fkrPpShvXH6SioJgWvM5JH5uzME7GJiURpYy7Df3HSNG6FxJYmzQtBUC5fGgWcpfUqwMy9",
  "key13": "27u3SZHWoCErGt4ioxeKNzzJ3FH4f41ULgL5ZrAukPBH5ZRB4BSV9ch1axWSQeZmEMTQ4b6pGHpsiHssZeMBjiDQ",
  "key14": "52bwKx7ZBuQEsS96dLy4prHqJXuMX1pZr3RwEhGWb727qsxTrpuoJzFpJbHZCV5k2DnFkt7zz9vujsiiQqCq62yM",
  "key15": "4wuLkk5rPsZ9SADctGb2xYnkWtvKLBSD45Dm71MtALBMXYajRaWz6AhXyhbW7TB45qhLPVnk9BJNjsh3YjNe1oFe",
  "key16": "4MgZpaFRx7BXHYpSXiMUKsMnRpUy8WgapUCHhawXHWhfswHggEiFCoeADYQ5tKX83SkVQKq1fDpzSpBtTdyYRJti",
  "key17": "FvN6qXetio4XFAz3tkpEeP5STKs3ooSeDLJQzKqtVBj799i8V9whbWzmanB3BuCJqApT2DjK4qxNWi3adcPJbXZ",
  "key18": "2BA5WSWmVbVRiHUwqc2JvrLg9Us1REYv3RdvnS3nUYERMwGaNRXyc1zSTFTo5uWqDHEZrVuDPkhzoGj2GkQ1mFZ3",
  "key19": "3VrixNw7YGuFPgubQ9zn7MmGmRndxmt5qgijrua7gHfRAfmWexrS1PkvUtWeDCHsj7vD8L7PeTMuejLfhjxiStDA",
  "key20": "3ZcvzNHDz1WAzaqCSqBeaJWUD3KWDq3XC5fg5k63haRBDJtT55wqJ1S4WECrDFZLpLMH9pW9RG52t1B54Hc2jV6s",
  "key21": "TdrjLpV12upt5fs56snAgBHP3RdxYeZxSqRz3EzUbKhRJYbNwnjoZNaa5ULuEJGouFB1cUqdPp6bCYvDxZajdAt",
  "key22": "6284FdHaGZsbifHdL4mdtryDAtW81SCNUZrxQjwtRo78pHRF9PZ1gWtMuWWY5SXECfkPbsGpWWRmrPqKQWum8r4b",
  "key23": "yevs5s6iVtLuUUSZi5qarhXJivRQFA5Yb3VAiaeQAE7YKbkwCDbbhyndXPFdnUXV5JvBmVhVN2AV6c4D1wEJzoQ",
  "key24": "26hhHiSCHYGMjWeMWoC8a6X5qn9gBw7mZQJvS69hJvHzBrkNL89PcnMCtoSfuSvWCm95E45gm6z4VnAsM7WJApYu",
  "key25": "4GfidTUCe9JHSBWvha3Und6aW13spScm31UR5K1e443jcqgo4QHvtLTnTZaPYz1wHyCs92jGsY1hQvVrbmEtsX9H",
  "key26": "2VYSYp85yQQWt7RoPsS7JGiRYUUrT6KbEaRuuzVeZrBoG5nM5ZhwM7gb7mf5Xnd6nZ1S2W8mcsGSwD5yef4UhzuR",
  "key27": "5gJvpbYa1HMbtpwzXdzRnboq9GKGNbGVrx2aevf94TQaemyKy4R62qGhChcfAic1M3FhWFatSZWtWQXpd2ariHVE",
  "key28": "5i5bxmLtNmpp4ymxiwYDT8z65tj2PN3KiP5uuqkgApNRBJ3AZWYGuE3v6q6spdj2GJshgfBpa3HbxDmecZBTpJjr",
  "key29": "39crw2bq6NdUA1YoF9yiuaupYHa9gwJq9dpKhN5fuw7KsXvoWQHDJ4Fz3gi12v8s2MfVcYGjfXe6GEPzobdQ26DH",
  "key30": "5TXi4JdrdPMtPUxRCJ5PhtJNEip3whXWpwhaxRmZB2LfpTuYpUswoK8oAWiB9yRgTpH1reZBQ71F96BC4nxEfVsz",
  "key31": "4sSXPRTZpr2beTn9tpUJ5HxGK3Jv5EFcxNWqTbHQX5vLF75pyDuAnVaD7wvsMeb4tpwWDraozm2nub9UaMTLbDhq",
  "key32": "2bSoA9dUCpwguznt9QdJpoE4GiVscuJYxPCsTgyjamUL6m3b8aVh7e9X2C4BJX17dbx6hnDUhpAhxCc9i5AAioRx",
  "key33": "2t15gBwZh8yzuPinHqPrmisR99j6sbzpwVGDn5WmNHbMRKWaCJhg2Qngv2VqDerQEsd2fvpUsy6Fo3PY8sGURucE",
  "key34": "Nk8ctUpK5LHEotAjo31QxCEChYCtcqxeZsrgoywYCQoHvb26sx3Xw4T8Vdr2aDabC6U7Ter3iXyPtQ8PLZmr9RS",
  "key35": "2XEMys49NmLNGTKmH2srucr18nTxDsacWkdq9TGF1cavz5gqJ8J3HyX65ETv6G9Rk3qASdRwLhh1YHysqo4PdcD3",
  "key36": "3KjXZzxmgoRcPog7yBNdYCJQwuLJFV97TD2w4oFBphGeTUVMjs1bJXTLdZPgHBgVTAzbhg7HYhQ4eBMUw6tV2PDf",
  "key37": "25zjzZDHGNdW6rZYuhZztB4f1DVs5bJa24X2vTDJoXJJmdiehReovEPCU59awYmhgJnUhyXXfDXRL3PxkUgnHX7J",
  "key38": "WozGJgRhmxkSCfduGxRVs826dWAFukmcyj7XUY7NYruxG6yResztnAg7Dfb8okqQSv9j1Zj4AuKgm2rnSyYKYnp",
  "key39": "4epAGd21UKXBfd52Tvu8uFCZUyfR7cxdiGdpphnjtBbPsYKCY9VYXHekgJqoLLaYecmKG2n3r8WRKobqzk1kbqoR",
  "key40": "1QGaY9Lk6bdE222ma2ciLgDfAia47Mmy9x3LmCgz3BDDRfyDEWRqcNxqd5nTwwfSNBKHExuYs9EhX5JJWBg1xQS"
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
