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
    "2WZ3DFYqAThTDqd1XHo44j4bkKHzmZ3FLvg4PKZYYH7crAJdz1phmBp6ixykDFYk5tnjhovXe4aKahtKhx55eHEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AMasCZ3HJaRFdw3JiCnqX1ij3uEwxghnzmm7JQ3Yx5Rw3ARiuc9yGyZuassirWwxTAv2SAL4Xp98J9PWUAAZPnw",
  "key1": "66oviMzt8efeEPkMKx69xHznEqhfGwBm2PxQ6jh7HJZ6qe19CmTW2U19gL9PrfEjJxkxeGFP2kzX9ygGuYgqhxgn",
  "key2": "37FrE52i2MgoNYrrgebCtPmYnJikuuTfzDu2EMckiQpUzyYKkGfUPi27GFQwqyy7rFMN7HnrTYLQnMpv1wYxpxt5",
  "key3": "2spxNe1Cm8RHaxK1TLvUFWUmo17EEZEJAdCAMui72721ApeUrc4s5tKsVi7RvJNaHtC2iqx46b911eDq5MRAFd5x",
  "key4": "5Yp7x7qKPXNLGeA6Aimanbo5u9yHAEA9rUdRFJRTRW4bdWi1mBw5cbknEZAkFWAzin7wQWoMP4iYTCbvGB5NE6S6",
  "key5": "3ihhrzkTybS4rwTP45rBmtu3jcCVxaK8VbkvWpe8SDP4iph5JvLoj5sURFUbhnjPGuDd7MHeu6NgbGDjcVTitGR6",
  "key6": "3y2ujCz9unPa62nSWjQpoj2BENDBbEjjw1acNdTf4KsEzuXDapK2Pyh2fCf6N9stkMGwVntdqCVDY9grg67xhBLh",
  "key7": "2xAR7XRxgVDdJymxUi94z5bwCrUpguqhMvNiggSfoYW4tnbDqExLo656muGgCQtRs7Dci9KLjEBSCHxYzYNDZJNt",
  "key8": "42ZDkaPT19BGdMJ1xWnEamTEL3Cicf8CKbPxhsVLzTU3brdsNbg6ucKQTP7YD89KpcKGW6PZZr6gonGZxejaMeEE",
  "key9": "3rYwrtQuCk3mH52fPz9A8aBi39zkCSP2CHe75xjbZEMSFFijghN7YVy2XXFdvV3Daj1dzJkzD3FQPtbPjXL4YX2x",
  "key10": "SLjgzWGGq9naSkV3Kv8CAeqEbH2Q8qn9auzoU4zNAZ46RExTuRB9nzk1xJQyPdY1tp3MeHsxkRUiREJ4eXGe5cC",
  "key11": "5EC4JFeaqF1zV3n4t2uUcLLoZEEwBzTvBviwbL9Kjn3y6dBfQbhEnf32gWt9AhmKi9sz9BCcy4USMvmLPY6vYbo9",
  "key12": "61twgos8hgZEA2cLrphkZ69X8Xg8dzcwu654DztNDocM1Pm4nfPVni1YCUWAsPEuX92mR2tsv1pe7o5rYj8NLGEV",
  "key13": "2d74vgKTD4QLuzBm1NWoDCz2ajRx4KQpyTNALGhcZ7iq31hhEMAUsgnvCXm2jznLSayKLxqiMqCEmpNfG1Exr8qU",
  "key14": "5XifdQA5NZYQHVWtYddds7KgVVHb5bnJwoUWpMRASxQKyeyzizxxEMsqi5wJ3BtAmCjA4UmXgraJeA6jkCh5TYke",
  "key15": "32KxKH1voqA4cazFMx94FyAsoqAL1Vkfc9qoPRdVYja1h6RQzWxwMi5RUYzr7es867DQoqcXEMvQdF4gop3gspY2",
  "key16": "4jT9SUsnohb8cCMvza7Npu4vRSPYUqiDK1VANE5CXS5TLNVBtuTHiid3nUfQMsGdpDyjS7ksZJNefuGxD1Coy7EP",
  "key17": "4KSZuaYRTNif3RJMpWCr6Vkp2CtSGMrKJPQdYkocyRy1dUxTSe64yxLPqfuohakvidmcdW3ee9QTpb4ErGCdKQQ9",
  "key18": "3EFmUvbyFbcRSum4BAjTMS4AuVeTDA1URvm6AfF6QozS3BF6apLs2EbPAEDZmHpebdXueLpyJhmX9bDVC4WV8dMQ",
  "key19": "46aAoMuw8Jii7N3fs4WD6mEbwFeyLLaydyHjTve3fyxbh9QgTe71zvKuU5ptjU6e5piMbM89APYKaNYy4T86mFGe",
  "key20": "43orp3F252nSQS95iXFRjUYwcFdg9ii1kLmSXVfd7iwKpDksRN2fDdwq4FBCbSRLN4v92nP7h9mCp8XgDcyHauN",
  "key21": "5AuCS8eYFhT3h2VsQo5bDbiBeXCD88VVqbZNwVYeZGicmGFF7pQ14otZJeLjF6DkpHd5AB2VZS89ZngJzyCmVYM3",
  "key22": "3ipWRHA1jh6CxJwqUTP7UEwWQDsjFBisguQVFqT75NUopkb8Pi5g97QBMm2rMYmpS94Fric6tJCwmuCKuDoRfiLJ",
  "key23": "zxgsyVsYq78yyAoje7GVPu1Mb2NQsTvqQnBFhQq1Pa7g6N9N6ZK1WHjyCJVAtSBX6MW7Ttkt8RvBc9HgNrvM9ME",
  "key24": "3Ds4LGjcoDNRYn3o3HBmtmBg2kwKCrXZo8J68QwGLELaMic9NWvvhhWx7M6cVAPf1j5tHvxpbjiki8DyQCgcVVzT",
  "key25": "2ktG61DRWP43XD9uZ7pxucEoLj7dKM13NJGjobUFmu7xKCeFWyHR24xG9i1oQeGKrnfbQWyZuZgvgVpD2Gp8eK1o",
  "key26": "3kKf9w6MoiNLyLJsQbUHYXTH1W3KMhamxEojiPgfWwqYQSrByKyYh1XCGQ89xfGudQtBgEYA7G2XGMQ7PZrcNnr1",
  "key27": "35w5rXDDfCMiaNB3sL72ra9ayRg1mLTUn2qtgfdYyvxEJzCkz5LQGaCyZiNVqN32sVdGrDLHgzpJ8ZDpdqhRZC9w",
  "key28": "Y9jkjDSQ9gF6xfS3qPWaRXHDQtrGyqN9L2mm9k27xrpqkZPK91rYBp4ykKENWCNmaHbHSpz4NqcXAYMCU4mCDYw",
  "key29": "3RTvV1vKQNvsvhZA5hemdtfqpM73xoGcDhp6mv5SsxfZEhnvkaHyETDRdJo8Ufp341AcRHvttP9UNSRcCWyCJjEL",
  "key30": "2CFhJYu7L2hY7CM6QuF22ctwbiVzRT2FMSwvu4t1xcXfSMeJj4ekvt5VcWapEtYpYuySo5WybMq9S76Zt9ph59QK",
  "key31": "J2qUi1WKr9KhHAj4KUSc8zVBDMPux1WFEwX1LwuRB2BwY2yZ8W3i3G2usfRXhAhUhsxo9RqZ4s17KBiXWZgSqiP",
  "key32": "du1yqANSmh39nptpi1ijHT3GHzgpCgtCvomiDrd5wHVpwfQWjWKMbnfthrm3KaTB47rLsJzgfRpV8s6RdY3DTNz",
  "key33": "3XNA3UoEBgg8YCwBktJA6N7JqxQoZaD9gZegUVshm922Xs6qYYYiX1LHYjFvMfkiWJT5mXShgMyCMVSC2kqyWEUK",
  "key34": "3EbhS2Pb3pKJ3nnGHtjVbEZarAR4rhnFfwhHyETdSLaNNe7DaGohFGAuhnP8wDGxiZFsp1PEZFFk1FvoYVHBcfFb",
  "key35": "egK1BfNL4XvEwBZ9x6Dts6Y7DzqSfSjZVDGGKrz7fjm4UguDMhMRyaEU4MbkixShEUWN3PosvMNtx3UZ5J16fx9",
  "key36": "5ExEM5xNonGcmjJvavwapNoJSudxfGM74p19bh1whWpbifq22sTpxaSkGP8VGUD4acpkf7UQ4DAhucyPohzhRs9g",
  "key37": "45MFsbYqPkGk2dusa9pznDmcd6Z9LAcVEDxhhXVD6bDW37kHBey72BuoRmEqNDMWhondXHEuBbLZ5F75G9joP59v",
  "key38": "2kr28xhjDffKtptMeMqcBf6XGopvL3C4bUrLohsz3R6kwq4LXKNwH16NKiw8KtEBN6sHTbQBXyxie2c3RyUWZAZ5",
  "key39": "2ZY9LuW1DXyeFgKXnzTVaf3YxU3MonbsUAbf7E3rEFYUJD77wdu5KtFcRTwDoG2ghBNdZtrTQw7NfBF3ZV2QTmwx",
  "key40": "2JoxoBJwDExjr3YgbwSzdUEtpZtM4ppo5pcJ9eAP3tv2jLQpqQgCny9Q3u3w6FWLbUT8icFZYUE7MuALwYqKLChD",
  "key41": "3gnU1XU8YJJe72qn5fw3WQCCrrbsU4WHakJKtLDpR6Qiid8LPHtS85Ha5rcRhTTKZVXriWC9NM5BhKaLSAPQBwjL",
  "key42": "2Wca77u5KGTvir93WV1AR1djombw4jUe5Src2w7ENriwYLvqy7NfRMwzynDiSK5wdqWKkEgEzBWQHJTiSr5Fyv1x",
  "key43": "KR6tW58R8yQFRY4Bpp7n73RBwuUdoCNH7xnthGfqKzJdySyT6GPGgdNTkTjtYrAf15Adkd2BaqNPFfGRkfYRgCn"
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
