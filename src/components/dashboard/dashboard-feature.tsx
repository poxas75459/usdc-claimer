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
    "3omNd7Fv7phutXMgUv4oCaFttLGfo7ZbaSShm8C6qATBoE89aaZRLJskp2d1KEhWT22fpKR9nUMYsuaTuboAJ1Zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n9kkrhD8AYg3jsPwLt7zTFXmZReFyVqTt3312AXnU1umTQQRzFW8vvoi9MkjSQVqJtP5uth5wRJwaw5ezhMHEE2",
  "key1": "3cYFRHDvvnsLnQMnY2oac9PJFEd9UQE5MucgLfdU4284uYoaXFGVLSBKGCzBCLmgm6XYHJbncqiTvzmvrMWmj2zy",
  "key2": "3F14yFTzryGN9CdapMdjSZbbaidetDoeCBz8X1irFUcE258NMMbih2rWbq7HiB9naWwfCPMEtEntiEWaBDkeejuJ",
  "key3": "4m1VYZzdsVrS9nGqVd33rBB4LhfNRP1VM5MAGJu4wJamaGeTxCKUeYrTp4mnJWQ1mNVytXqwj9AK27CQXkxsSS6G",
  "key4": "35XSaNAjjzeVVqatzn4Aa7YcnQYCUn9PaXjX4wdvtBjBibcA3rr9EiaHQgGq8dqchoqVSWLUBZQX82MFtf2m48jo",
  "key5": "4HFmwbPLh66M96J6gnJ5cteGokmH9oSa4kPheGyEWRDGD3DaKDbcYAFdjA7aUjBC6Tjf2RVab2KVynT1LtL4zzGf",
  "key6": "325CvmXJuFxEqDwzEEkWAPVtev27qrJcdj7xp8gfrzxPfxWLkHJPjucvDDw44d5FhYxRbgWMkroY4XdFuKng3ZsJ",
  "key7": "3D9YsriFLG1YAgLEjg1THkXgWo9VDrKadoEQKJVMbZYKPKMKpNokMTSK2PddyFGvLBwjYWG3xxVZSdi2DtqWVZe2",
  "key8": "6j7XqJh2i4VSPbdX1wzEjcpYVeG9q7woRBs2BuJ2oRojRAxxAuByJRQcVZLdNA5st9Lru4B6H3PAxroWhzqUuhg",
  "key9": "s5c8zxefLn3oP2F5ibT3hvhbdKes4F4EPMzqLSfF3SBmVcTMbdU9R5xc6bUyDEadQ7YhRo4zFNHxesM9RKJasJE",
  "key10": "5NgiCcCkrz4amPt1FTX8HLj1WiGctY5SgUzavD6cPv4dFNBLrJr9McWMBZrnLPiT2WCimk82E15NhDxgcmdkizB1",
  "key11": "3RrZuTKXVB5hFqsKDCbamoziA2M8bJ3jFn47wESiNEaW69VMk2CFyRjPbPB9aA5WQtu5mFtscvXYJnEZ3N7CtWgw",
  "key12": "v5Af284P6woc1gJK86J9M2swxZkYAYvig9Cc15n9Y2zN41vaWYyko9xEqrLadHfmBThr4wjvctE1sWzMHRrYBpn",
  "key13": "2xX3yQL4LuDGf8CAmLyj6vN3t5pFxzHKNj4689s53B3ic39zUrWRquYUevH3H3LzeDeT64e6xFrgFJuc1zDvVbLG",
  "key14": "zY4q4WiSVytKr1suesxK8PpdoyJN38oG9615iW3jUeUKrDtJmFDhBhAVu4UyjM3zKXTyvNDFFVbbxEDp9FmzXSL",
  "key15": "2t3XLRoKim3adqpg6m8EDfXAuDumRhjX8HAnrz3hVvuRXYhh1RXtMsEpEVErvf16EANrbLY1EY87PG88YNCPhBzm",
  "key16": "2HCjj7cMWEVMrMicfwXBFdRf9jUr2jovemQk6ybN8TnQEzj6EtedN6MC6NjLPjPnbvhgQXDQHgKrtxxDmMrcoWcN",
  "key17": "2grp1Wup3BTXSq6raFnkctUmXRKgfzQF9VUsoLUqEc22m9bwu5ixqmzJkBDmB7vcWCAGCy82JQ1yARJ62JzsvWRd",
  "key18": "32jW7jnfmfNgajxcf1YS9X1wnyaJoFqEw4Ls7jeLzNP5BxGD636PYXy3PGaCinSQLWd2aLozKRRzEVVjCfuhMX3v",
  "key19": "Teafcn9R1sySxKNBwju4rA99yD96YV2vFzZ8RywxNkATttoxVQcjiDtc1ok77WZbu7r7szC1HchYten7m3wuTSM",
  "key20": "5iLd6Ye6ExMjCBnW2nkaLmjXdEbBRJfpQVyNGZh87hEwkkoUSqve9EHUdHYbGx7HMhSCkGwzxENvTkRUUWuYXv1d",
  "key21": "2JyKJM93uVsXP3iGyPk5tcQkx8jKcHH4D5SFFmFQUyfRXCtmojgP1enhDUwLhVs3S7rsUBf3t4eqNwETy8PneTCx",
  "key22": "4gNFTzeyUqwiRWczc7z5nPnPXT2J4nU6ZTYCMiMy9S96dh556FZ4sGDD5ezQYpuegXeY6Dr97mtKbZS6umsDQL1R",
  "key23": "22D8NyBzpdxY39zq1CkfzW1yGapc6qMxNTqqeq98C2Z1zmNYMf2fWBrLAMqyVhyqvbyNwpEtdvqWYauVe3nDjoP5",
  "key24": "bAXPLeuMPRoNS9XDvTtSVan7ATEE1rfgB2GUJc5VnvmMxExqCGsaBFAPLNby6NUejBgjDvEw6ehiFjJ5rL3rHAr",
  "key25": "2nDKtGzW3GXpqFKpTLnHppE1gbDB46vuLaD1dmxt9UGqnsWnww6kR2aofsA4A5W7WAMazjkYzaYNR7gNz4n3oUk",
  "key26": "5eUBKDzmazw1u8nXTmvMhwT3dhgBkNdBxgbM2sBzPTPETWAgNFUR18SJGDY5b3pmMazszboJj713t3XQPXFyVWYi",
  "key27": "2zDdmnCpggsuGWNMFzJAWTEehTYRG5BeNpy8vrrU3exvet4WR6rMaNoNcBLKC4XvNyfjZnMG92twBEugcCX1gfLJ",
  "key28": "2hE1LXYhTD7sTDGYe8yFEx8JBQU3ttp5kbyXrB5Kdd2pd8L1YQicnsF3n6r3mkjYR7kPPhNQJYdfX5fEMU4K52Ju",
  "key29": "3aWvqPpyA91djmzp6S27iGY6LNy7n2Ug2WmuLq2sUCgfDysqgt9xHaXHaDzqfFi8Q3NwgXk1wGLB1Gz9P6djaG2Q",
  "key30": "4ECsZ1D5sFYkezHDMrReFJHRPpPWSxWXuCX2GayLwCRh9vjTVKmW7j7oUhsTZ8TqJ5JstHtoBma4hxTqzCvwQJwD",
  "key31": "ND2z2kkKJpEnqzHWrZH2osd33grBinPrqjWFoz2SdkdbkpLyozKro89X9hCVQAehEsT8giqveBWiQi5c2GBfKkS",
  "key32": "C4NAZs6Dhk9eVBDTrTWM4dUEMT9duBQHS2Ke6RLigydHMS4g3T359GaTW89zh5Cdw2oJQpD4K61MsQ3QimuaHj8",
  "key33": "32KMVKFufb6jBbNZUAPSUq8JtvAcUiNgBh9d7kDXsKac5kX4hYxAUUz3omaz8DJMrnad3eH2a1UmNdMp7ZdU1egM",
  "key34": "5S5Vx9QkgwLg6Ke8AZtLuNjQQSGC8huLLWXwzqeQzn4ffi6tWe1piQ55LUaedK9V91Var7HgsPLe7uuPkqYzQEQS"
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
