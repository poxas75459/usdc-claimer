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
    "3P6gbQA9iK2ipLiuhKLbmZyizQYCTDT2uyPQMgPdnxJ2WANm1QjHyTvacmcfEWaS52RdiN9yDrj7oyoJRN6gYmH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DvjYVArcqxbqDBcSSPqoE2yotJYuvNDHNC1EpRYLWa8qBb4cFVqDq4ow9JY3twL89NReX2oJV3aMxiVu6u8AHuU",
  "key1": "5hPG2syzzTme4DixqXxumsfs4wgCnB8LxLbm7N7ysHzxa7bW322t43WXzgaVHkieq8QH3yY1Q7QpJZYBNFQAFyo4",
  "key2": "35nnKyh8SsvhxYi58EEWWdZxAhwY3DLzvQeMx6kVcL2bwy31DXXAVTp9BE739CKMj7ndxE7yGEoYBVjSTuXwPQRt",
  "key3": "3RynCkzf1Ypi9dyRot1DfnKTxJKmwDdEGDJFkrGCQir3HwjqdJeVaTgvwM26Se9TfQpRwFZApAdSXaxo6zQ2CtQ4",
  "key4": "25ABUBv451kThHEZ64P3sUy49aGn6X2pZSeRMZsmwzha8eiWZBSThr4AUkjjiX5YJ3CBvRyfe5cfxqE8uet8ZffB",
  "key5": "5JCfNfdjGidvfz6qEGsS6secy4c1Mbk6TZPbUZCNthLsAE1qBUYkJRgF5FwhtNeZWkQaGPWA4iicTUmjGwcqWtgJ",
  "key6": "57tsPVJveW9N2QwpVa9ehE3sa4VCynH13EqGZY7n4Fnoew9ttqzKcYVfjBseBVkZWW2GN9dtFqCyZdUs6WNu2Pe5",
  "key7": "4CbxDYbFKztjJ7KRKzyVC4QzN3ggFumrBiQJ5DxhyEdceFzGan4EDrL5dDnuBYXNf9VWQw5gzLWGNeUwjz1iewmu",
  "key8": "3kSsrxAHVmY21NzsugbT7FqadZKkCkKksCj8cJ2cWYtUuvR45mgAv2wXhaHs7R4YMaiHf7Z2uCng56vfEzcfNzMH",
  "key9": "5wsp6KeidJsYfVa4rqriHxzwu2VnpnWdHFuCY8YL3jK5iJtNMz5waowA5dadqeKPW9BE6vQfcqmWi9a43w6hSDvj",
  "key10": "D8BYh8HjNp5XNMEEztb69REpFKrwc3EW23Wzg2BxAStte5srVGiqXHmX4bHPMXaqDU7h33bhH7R7A7uRCrfGvZw",
  "key11": "667fUSycPcpUwy2NWSiayQwhPfQnkSAwRHFD2vBvZ75p72WnFvcrY9Pbb9mjU4iKYpQ9APjzvAfom8dCiHHcVhpk",
  "key12": "5L3HLCQEdshVxBwvF58mHzqWvuozBnQyz4QccZ1MH1XdArHK89eWjYhRTTWweR25vmNpoCBDjX4rku4GgDUHKZ8U",
  "key13": "4w34SUz9hPS6TvMw7dpH4HKwLAG8pNdnzBY4aveEBA7oeqcbLrQ9H87tvfCrqh3uKN6xTBHvkUdveqaBTX7hCr9s",
  "key14": "5p1uQMgjBJzwsQnVWQ9LwZw9FJBqRQowgCcDEyutsxtqyNwbkUGA8QgUt8KrB4YzjtbtoLQVbQfUEvJAwfpH9bRV",
  "key15": "mkd3hgTuPd2RuUTEpfTnTqjBizBaz8XjRemq8kJ7utNXmKQnwtSh3c6kavghJmbT4Wzsgqm1bvs1cA1TBev4sCJ",
  "key16": "2N5iro9Nk5utuY7SF1PeeRLDk9hHhAgM5ALJgj28daN4mLe3mTrcfeShbg7kn33aDvryBxjb7PPsRzcbXg194Dnj",
  "key17": "64isUPzacoZfDLgWbjCWR8vP79wdHshhfYBjw3hhxtyPtb97CZfVVvHjVDrf1LCHaCvUrDFbbzJ5XKFGgL9NdeBr",
  "key18": "feHvRxRKcdE9SAWnREioCxyeEoNBkphjs6ZpdtfZyVBoH6r2zwSKZVVabDLomUqtFQbL4aZuAFBT1SRd8bTgiKa",
  "key19": "5MhGkmGNhQitnHf2zqAfXVcpanDsfC6YiYGwuhqtnFWTZQjhb4zqtcsrvBF9vWvaGdrnH2AJf1gpdbwm81hT9s1c",
  "key20": "DWLSJGYVFRGQMn6SgaXn3SHSwFGpTTJcQfiN46yrkeUAE7AjGogHBit2b4jaifzV94ydi4DFs1bS48Xna2ByEn9",
  "key21": "42M21Ek8cpRSwY5DnV53sDRY4NQEP1KApNmrAQvu5JaJPqUs5SdPYQQQVqqnTxo5bLdd18taphkwuWxabuXtYEQi",
  "key22": "5H8gLRqS8TMEBWLff7iBoME911ehEMowu9DocMKxzey5V3vwnhqxQY8LiaXrBiPiyNHxBaYJaim6MwfFk9wLQ3TE",
  "key23": "3j5t9254T4oBwn2RipG3KQk2SqfRLDFjkGw7NbEcxxM6ycf1ihheS5WX6nMGYJB4dqQnrVr8aFFCZJSDyJqNbc5j",
  "key24": "2GzPx6deNALhEbZ6xZZpafixPisPQrhgGngfJaYH5NvTVyzAC1dQijrV4BtJQxisRQyTP7bWHoqVxGxNEN1F6NDR",
  "key25": "2rcjFTrkntgNNpFvr2fsx3cFP5dG4fFmtcHoFTNXwTVd25nLSSBJG4Zbd1A7Sy561rvxr9kj6FxUPVRaEJqZerYx",
  "key26": "4Dsbh5B8EyCsRBPX5huQD3QdiFyAmr8Q9vo4ZCZ5SQ7HRq5p9uEwKfBBd1jLRRdTbX7B2n3nacNj413hUbW45UrC",
  "key27": "zffh5bw8CjGqzPWGMMuJ44vGsQ67TfvmZ7y9vF93yM66h2E2LTuHNC5jvvQUNnzJWHZe8D2PDWT1c1xdyR1qW85",
  "key28": "32u4T7uVDKTHj1zmtKAdk4tjTXJBz7KfgodadoM34JsR6GxskRyDFALoNBc57uCg2axCCrRtKPcP3yqj6HyhGndd",
  "key29": "33PvuH5kn2EJVGZu7ontdfn2DfFueW5Xhn6sKUWfq1JnkRntxpqWYPWtCj5DmkvoYN928JCnarGTj6MWA4YJYMJK",
  "key30": "31SoFDrgf7ExS6aG6M5LRZwoTueWrhpzanXDuK1ZBzpmgkJrYmPuUu6GHZ455V2Xd7xXpg5E4nzrtGGN8h4gWhRx",
  "key31": "36esA81ED3fdeapXytanNVfRBUctXQL7h3Tp919UK6nCQnfy1CgBt7tcRUfRNivmXc9JhfncKLacoYrr7enxnEYm",
  "key32": "2NVkoCSxXyzv1nxC3ThzHPnP5PDaCWg7pa2z5DGCvjvrcb8rx8fAm68KPXaNjhWrCrvs97cEmVqEbR6toMryJLBi",
  "key33": "25WnFbf6xphjQy1MV6VmEpzG2sGBmpe15c4qFSaL6AfCMkUaaXwxzwUktgoTeahLpXZw9UkA7Tdt15qYX3kndPS1",
  "key34": "2Nv4J8T7UEqB1Kx11LNUXYvcD2xpdvjGrr6mMx4gbxqeF4gSgotUk2VN2e2b2hAniVF2AcmfpuxQ74BA8eKo5Sen",
  "key35": "4CNAWx22HsyvWxKCAopNZLUDa87bUz3Zt7PqVjkuWuSUFepYD5uTJiJEB1CTe4vuZVLvDzSM3twRrtat5SRgCCek",
  "key36": "3cKjv3TJHFTAFtLsvGv41keGMAgptt5sqEqC4ifw6nocZWUhyocjAeW1Kr2gWMFdQxVt1adxktBarjw1JjzbgWFr",
  "key37": "2ygC8DbDmbYByLrueWcXcZRbi3ZZ5vzJF3ieoe1WrCQFFfbxrzgNgxf6KWRnCVSUMrmD3XjXNaUi7xiz2BfMH2tV",
  "key38": "4YiGpTD7GuM3Wzw9haujioKpRY9aTpKzi34QTDraYXkMeVDKmXDNBw1EpRFY8WUMAQqKAsG6Lq4Co53K2B72tdgE",
  "key39": "2QSjcazXP1nxBk9eadoLbdxVJr1BtWTPue5t3S38VbMD7q2zSDn5vFQwvQ6SVCAnMc8NAY4tMQ5CnnoU5LTNnMD6",
  "key40": "563AmQTREApgGcr3EnMof6skxvZY7VKELR8tbpuUJYfeiELUJjQDTjMUvbrR93RZYwB2UC5zT8Pv8GsgmKJbUn9G",
  "key41": "4My7patiWrFBoNJLtgM6i1BWa1WdwnqPYnBbvxNoZ4bQVjWnGR5Sy85p8KAAmAdVKQKf3rYRE88hzWUSnrZ1SVBY",
  "key42": "3ia5dKL6n1CJg6Ag7MF2vtMx43qQFFEdd2XqLgFbnT39jGLuYz8skM9Qd52VyKP55brFm6ucZHdgqubNdrFiKijU"
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
