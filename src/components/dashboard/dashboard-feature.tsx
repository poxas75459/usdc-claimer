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
    "5gY77VUyD7RdGf5aLJAMB1hdV2a3bRyibcyAEoASxf5WfTenXMjmdJBhuNT5Y2KjquCnejG1iYiKG35hPzr8nXcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PRcp8fg5V7B4ZB4PvBdaMCuxZthPJFM5bfXUheYRZ46wnubxDncPVrUhSyg8DkKwqQLqWakwRY7CXwygjaqSnGb",
  "key1": "2tVrczmeYuQLrjHQgeb9i5ensGVjn2CKe7xcJQgnaZpjHWHbjpJAVfSQtXZsjjhxTtSQPUks7kCBsF6BkWjr7ZNU",
  "key2": "4ZzyAmvmnbjtwbHgVkDTQyjY5Zkw9W4uTbT6oeKx22PJcSYc4q1i9hkt5A28tVcby4VLL8SArHZicL8urKHFpfRW",
  "key3": "HqbCmU1MvCbvzf9kMkeh5Y2KaMXnW4LnYLe6dYTQd8BgpwKMPk42nGGmMoRZx6XxAWPoegSuskdott9A5diMTVR",
  "key4": "R7QPAnHf1oRpqrwRgbKbBcCWUYNrauzumzSDfAeDWZaTbhx4KTKADuyuRqxz9eoPH1GXewpyoSKrFzpTcevSff6",
  "key5": "5QSkwycPiYmZAAtVtJse8NDBv9soMyCNtg1FHjchf5gufXBVSJwzKUPaLwdmBkfXA3YdReDs485ct71hJgANr1LL",
  "key6": "4jr6CeU2Y1iVUYhi9B3jccMc1KfTDGHXBm8s6kcY1mLmyVJpX7uFpFb9Ai3p8YqUnj7iasc9STyHYFjJufGr3ZbE",
  "key7": "3KbKL84PV51X9FaJJbaRQQwsFSaiP6gzrCNnpWx8xFjSkRtb1rKg9KzSeq5k3nMwkAdqYWcVCE9iHyTrAohAdCJU",
  "key8": "3td4txwBktXhXTgW6rxQwaD36qKW79MP9mhdtTchpFCWmHKJ3HbEr2o4pdMuW9QQfwcYSP2MeApMuthgArYhNcCQ",
  "key9": "4QLJf83uKhSR9LjDyRYcqtvCHWFxUqC9vbY66xJUHWVHHcVnpeor46ZmEzsqtyXzEdKUcaXHnyBnxxbMy5XjmvHK",
  "key10": "55EAVwFt6CwsPEezAx7ryqXhjMuN2EvNXFwqKMgaRQ9SQU8NEKHSBn6AVRZTcCANoYn6L2LpW7ZRYBVQnLpHfDW6",
  "key11": "2EBiDK6fJDHrNxxjY4saChbXLNYWLLb9pNer1QUHpE7ejZsfv8KCr4ypxd7ozazXvr5WfTzFPXUVfr27XEQuk9dA",
  "key12": "4m1fuzgyf5mAGZFDGNi8ndKEcDBHcaBVa7egVRP2tuW4PX1efjbfTp3bR9MuXeX5sMJiEx57KsRHanC82SKCCXtD",
  "key13": "Tscy3PnnC7FBHTZVuzjJZtpEugca2vGSJhEwyW4AY7Cq2FZYrMuUZL1bY1dsvJAnHZ84MC3tJqLFxjPSD1a6Jca",
  "key14": "5STWRZ3BABiqCDNhtozUg6xT9AGUKagQ3y63x96mCF2tf5B2jRfxfTmaLFnAwpA8B5mSmM2wtCQcUqbc632zsNxx",
  "key15": "5YxYDwjEyBThB8Uxh17wYuxJuX6ztdsUZiyZnP2hZ151cJeovnhADERY9o8ro2YVhZimaexfybknc4mGiRcFi3Ux",
  "key16": "4aiWT56Q2voYYDgZAoaym3VPy4TM7YwnaFP6CJB3stDBZvEbDUEBGDUTS8cKeBpQnDapSzgap3XfbDhWM39U52HK",
  "key17": "2CWR6sJMGv915LAssSvR99GFi5zJ1MCXpQ43UrWDfunRwaYeyMci5no24uzy3F1WCaN2chktfByQ15nJeJoyhDW1",
  "key18": "4axN5Ai8gZoCHxi72E2Km4wAyoo3fnGJtQxjLyWMt5Qf4GDbyfpkk3cEMDfHL8261bh32m3vdrhm61FKHquQoRK9",
  "key19": "3GTqB19h81isALQG4WMoPoJj5v5BPszM5pFt5HHMb2vqwvT7rR2R3KT9KdjpMJ7x84GGJ1dVo9x2vV26GGSgnWRK",
  "key20": "4mMnRQPCVsEF19rhSGeej8fEb9bKPTrkrTLqWZqU7tUpcCn9TDBVfTSqD4JGnTuZ7ZqrikqSdAonwR2TUjaUwZB4",
  "key21": "4Sd2uBEb4CRcc7NUw3AuQkg3UQEV3cA6PuectTtzfHsmRreQLcrU2EM8s4H9iG6sVSB8rufukYexH2xFv1x2Su1W",
  "key22": "zEq1dFBSGqP93G1DwTq2GsU9HSrbBjzFYvkcr7fjAfmUSCqPUFnqwZNEj55dyZpuiCSAyecUmbWTJDJTdizeaFj",
  "key23": "AE4duAPSyzBaD8iBLyitA9QSrWyd38eRRw5tLsYzMPCmAzXkRFdb7nBADw1dCAczVJHu4gU4gcG6U8hG8nm6TBz",
  "key24": "5EBFVoxKLkCepLa5PBVjXY73wju8v5NTAo5vBpq3KJQRnoez5BrBHA3ZUEHsSyE2eVAngffEf4zX6ASYD1NFzgVs",
  "key25": "pH47YpB6QtSUyrZ5TZwk69TCzCHDEKFQEu2cqHE8YHMiMRtwEagmuNQXG2Asnsaqp1bFj5apmd5ZByZyHVMfdMo",
  "key26": "2J5J7FLCyWhAFyciemxnDQddtzE5eB5CPwVN9WUPg4A2dA7asbttDHDiKduv8Wb74cUuXmLF6HKHRvjyMy3i3wYj",
  "key27": "5p3HEqf5FGDjVF1y9x3DSnmgVe7GDdfegoks6uAoraBGGkVRajNneUoF1iXWbKr4Z92Ltwb3rxk2xJPYrbMnrTRV",
  "key28": "3Kw7VsYZAhM2cAdDauivrHVZDVpYWz1JYzZkJLswKtiLb27wFf3oC4n4CtVY2f2aqgT4CMgiDyRKcL1kUiM9fuvm",
  "key29": "f2jUUWikVcYRD3CnKJUwHE23r4U2AL9LQcvL24JzPTjLnLhSLJ94V5EF1rC9MHZkSXuLzcNkMVoiWBWMhmhHvBd",
  "key30": "3kbFGXYqYmrDkaytHEnzr93o7p8Wy3py6c3FMKDZbrbVr5YFyVZsN7tsQ1rhJj9p2ZyHXM2d7oW8iJmCJbEhSNDU",
  "key31": "3qFcJYHKaELVQw87KM9GDzpBHwCwdHyrwARYxgxdLnjuX7h9xYG6ie5J5RnSPFxMP4CKEV3bjKSZV93o5vpTVyce",
  "key32": "5GySrPQyEZ7UCmMpNwZiaoh9BzT6iEhbUXKzCq9MJdivkiXVR2TarPkq9povFnquZMwzPd9eFPYjdxzpPgPoSjfi",
  "key33": "nHW6pzzJY2yfPPLW2FtmJBTpsNqcsztymJkgc3S9KoYrkgHbzgazSjExgU56fMhZ9fveNBYtjb5dV7CBhQwXdLx",
  "key34": "2NGtTja7pSnbBhqS7rcTBnb4iyoyVxePKkxKNJwSX2iaKug1557ntPDoyeTQ8S73gv9pFwc77ksm6ngAkCVzSvX1",
  "key35": "3tZXRpztE4aviW1QNFN2nGgHcFMcXo2eKfLf3S6z9wRNsbcJRxp1ejNjBPTzGfyjo7SyvvLtkNZPngAa3TYHk9KM",
  "key36": "2T938y12o5nGMMzB4iqCVrqsvaE8heH6uN3UYiwBF73iKXXzPPexZVdUnWd1Rq194q38vShqguz3RzCbtqstfAzN",
  "key37": "5CsZvMQK3yt9baQoyEKkbtZDbcC2mMsE3ygLyDZDDft6CRKJC8cAFzyiiyq5gMTXHpVibr6tVtJhcfFRYg1eQaUi",
  "key38": "2YRB2ScgAPKysadWBZAirYWcR4eSwttML3KTQdKeBKcZc7eZxWji8CVfmTMhABU26Lu9AEuRcoAKSgmhNHQMUWQT",
  "key39": "c81jDRhQcuqCdreBTXxFT6as1HB2TUk71UsQuBRureUVARXmA7aq1KvLuq2ia2jeuJFjaTKX7VfyLKFuAQt5Y4k",
  "key40": "4DKm9EHSNgxGPxJxb5YN8KnnVp8NyAbjvMTXMd3c5Sv7BoZG44bgLs7v3LM7XCuVLy2BreU7vrGnUaNkAva71zzv",
  "key41": "5Xq16wnnBn6tjiU4ETbdzVrPB4aE3GjE2g558dR8aLhif1SDPrWxB89YGEhbzrkdp456NTcQVttxLmxcH5aQRrJp",
  "key42": "4ZB42zcTTQJ4seeb2WFF3g68JUrDJxQwpQWhzhbQ1DeyGtYD5CxNvSd1paQPvetvvxepFTex4d7VtZw19HbpHboh",
  "key43": "bTWjWUWVWvqSYumHcSZgfKVHiCCn8aw3vjfSovFkEf46vxzmCMUD8MqY1e8ngXdJQj8PWcDrrtKsP7U6ydUqyCK",
  "key44": "5WQGgM3moqqmVY2YYLhVZitSeRqBxeALZ5Li5i72Br2w52Fp5nJQYd1QZxQ3Z6JPZdpuJCsMyVpjFXH3hjiEQVGg",
  "key45": "375g27kUkiALgNcdJfv3MSchZLYLR3kWMucEXVPCD5ErUUfoAR762dyMHq3m1d6mNQQApM4bNfZMZcMyjYpszm2b",
  "key46": "5D62LoUkJWx2vprmmqUTuD4BXfRm2uqipodtosdz1EGAK1yzmgVSEBL6Yyk29hjycq3JE6mAaHSuv3H35r9Q9jyx",
  "key47": "5Cp8LbLc6UCGSZCUnms4ufFhhsHfBkvEGDZ6suUndvLpQ6QF1Dh4fX1tLSMTVbb2TEVqTE6oK8Qj11oq7454bjL3",
  "key48": "2TCEyXT2yPPWdJkSqMsKsyipXPhueMp3zPj2bF2zBPYSyh81Pg2W6dnom1p25cS319RTunnRSnqVR5gUMipPSrya"
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
