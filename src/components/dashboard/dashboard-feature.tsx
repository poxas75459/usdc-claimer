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
    "5KJs9p42RHatQZfzPxSLygNnS2ekHBeSHqJjsS1j8WaBby3B7CpknSuY3Uyc6AC9kCbB81e6qwVWafMyZ413YRHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e6suqHJwHAN8dgzDTyhBPPVzwhC6ozsyorDYzhF7CUpzjK1o13LuLPWkT87bUudPTmxBTrq2xHQ698HCQNhrQWr",
  "key1": "cARbsg9L4i4WZsyDQP46467T5cSA8KHeEEdWjawFbzAkvsoHWrKJD8NoUVptCUE9gDwgZaWZHD91YgA1KqHpYsz",
  "key2": "sVSmFK9tjmRNkmn5vJBrZyxuzYpcKhzKC3GHJRZLxKwRW8D5ByiLtnyGve3JTYtvgsddkxvhFoSD6Yn5SKX7bFg",
  "key3": "2HGVzESmQcg3ppeYooxUz3ybxcWWpMfbNEmK3FmvNn3CoVMQPgx2a4DbnXcodsRXV7tWFP1648NQ9vxecseLXPLr",
  "key4": "2B13bQXtieaFduXZ6ngfyfE256rYtDWygu4nXrit71VcbdJZVD2nxdKBPwnyMQuEg92sgaBbzyYGb7VvjuS1n1wj",
  "key5": "5srf2nHEEKwEh93TXasqAyJ8srXxoXJJZUkQjuehMYSrcQHoPiwRLVoaTGun4FEn5M41MDwaqjRp8rDfmNQ5XEK8",
  "key6": "34WPkNeFPBom1L4Qma7EYMbEoEtdTJA1G9kEibRqe96KNxURRLTVNtHupUqRhMYbWVzngMifXzatgPTnCESWMfKG",
  "key7": "32TrtusxvKozcz3sDyZGSb66z1dbKuwdSJgg8eqcSfdoGEqtxi987MVaRWSpgJt1hsLoWR2JUnYYQvFXW48M4a73",
  "key8": "4aLz1bnNuBkiLw9WmcKvLdNSpSNDZWQYvkwSuxGdnvYLxjr9At8wHNxBEBgxXRFHJRVWSuTmR792Vo6vdm6VcLKV",
  "key9": "2oaGR4FUmHZMJczqPi979mCtFLhnMHeCsAraRzBntJnaGsFh21gbEnAzqbcWKvoxLLZT63oyYyUsxKn5qZN1f78a",
  "key10": "5c9W5AAxbqdpJf4Psbcn3She81vNP4DdgmTUMsm1UoMXLK5senPyiiTkFLvrvwB6hmdZ9VQ4j2Rg2SjeXh3XMaeA",
  "key11": "3G2dRxbrvqoriBwWhhdLxgCfzrz6drTPe59H4hHqoNkmcsFH9HkxVRrXuami6fqbBVLvTce2BWLyevG2w4hvsPjm",
  "key12": "zRRJyz2oTyEjFRD4XmFsSy6f5h8fbSGfLj6cfCKYr6QPAJePyg1ER6ikz3DiYKB6byLuUwkvHyk4EqCaUyoMqv3",
  "key13": "9NDhEepBbESag39VgFKDfh1k4qexpV1qsdFnHLN3FcbAFESxJpVsLCc4pMyChUnXR4H5XEQXDNsgaucGVJSCjqZ",
  "key14": "4eWkgvVkqk11gC9KkcWppChqav2x3LCfB2X8jya5iYz8MPLhk9s68WicG3bkUcW3qPocvFN99aBj9QoQvFcJcWGg",
  "key15": "2MD1BPvYf5YGd8QF4FaBz8bfxSMLUU1ejZ47EZv8PvnKLYhadHuvNdCuTcSQSLi4te4fLqyRyfVnDVpjF8fQTeDe",
  "key16": "4Ed5dxJTgjJneJfh2edhhxnzYcAgow9LJoRJN2hznC19Uyz8KFKKnvZmtSFk7p8WP5vaWMTTxtykWRZ3FUzjAu7i",
  "key17": "64aL4234SvEuCNuZjRqvC4trd5cNdwjCKC46csxVjj3QPr4zfNAEYj6VKe9hJQL5v5qxThrqY4xG7ZT1LiTknvxJ",
  "key18": "QnSbR5AT21PuAMNWDRsnuDgddXiEKGCw6LHGCAZXyifoEfYcL1Fg2hwwNxyvYk1ZsgtLjeUuSLxeEiQTJwPAmDn",
  "key19": "5p6GeZKUvhsoNJojCxG1sh2vfMd59F6hrZr1bskHuH7TNcQGLXw2uxEXQSEQCVweU5fCcZjDYR47BgmPXrThEYUY",
  "key20": "5yaTTmHbLev5KND7YTLkRDuPStL5kS6SWKoLYhsFtLxBGfUT1k67GM5zXnZAmGnYpxjBUqFzDUrYtVBkkwBsew9M",
  "key21": "4rj6LoP8hPrmYTKWvNkbQtQ7vq7MsFGWBaa7HNrZnQZS3ArJHtxhdWUzWP2ow2Ze39TwTKguooZuME1v5o3UAaVk",
  "key22": "rGNnEQshSGbqB3rnjgXRhosCebTXwku7MTjD8urETvnwwKTFtGCFHy9VQnuBWANFeBKMwnb1NUaJ5AHEYeVVX1r",
  "key23": "2EX8ZbuzH51sjwfkPUSyAeTS71ybUx18Yk5DAyRZqS4mX6iGSJSw5Do6MAgAsC8zacWea26oatVNjSkLk8h3umZt",
  "key24": "3MvK1TntJfz1weoZxqqvuE8LqTfJgkzoH1WcXyxyqbupjS4qZJusGJadwcvahR2g7e5r8HN8B9Q85JTwsXKncRAQ",
  "key25": "5hcjumBfbR9oAHXa6RxfAGri6DYcV9F3nAgTKQadzYyTYnWGc7BC2v3dJdwJsGDWMnd8nFDajE6gRrhHJVS8DbFx",
  "key26": "fAfh7i1TiJhDtp8gnXGuhDNLQE8AwHeaDDiVn3xa2bfUFTjjBLQVS8ntoQoViGpLyg4YMxypbiKJ5vqsMKGezSP",
  "key27": "28Ve4CcJyvkVex1a32RHsEWTyKSWo8UjJtPHQoszzThkV71SevoymvJCowCKA24geGkCLR5ANHdhbubMaNmhzayT",
  "key28": "3ucMUwRraqK5ji1dSZZ89zt9JqunH3k2LZoVCtfTpmYT1owADKacB4MwnY9qWmecpuMZAhJiK7egC2biq2RxE9xU",
  "key29": "2Zyeum7T2tP7sTqA29k4uT5Kwa64hGueiP7nXuygqCY3XYLyMKCqbd4Q1DFs34WAuHTytmpTGpUvNDgLM3PaTbHS",
  "key30": "3gnmmcJDYjEmfVzmT7xZFM9XFZNgTCUKQHTLhm2UkBdiPEwYKWHtYU7qXrk1CPAAJyR6E21N93JtE8CFzYXQozP8",
  "key31": "2TSbXz6HxS4X8YZs1Thb2hWftXcKadstA3u62M628P6AkaP67CPzQZhZ2ncDNeZonsGqntmaA2YsKVQPfKNDdYXi",
  "key32": "5uUU3GcFmnaQN9yKFPqwApfLMcxa5ywzfZ4Z3BfnbCQiZiMJ7r32ZPTQBQKKWJAWFdnpQJFoBzzyMKqJqvr9Xm1B",
  "key33": "SQ73iq5qnb4Dp1YcAeXpuiTF3v5yw4ewVEFQNmGrWKpA537UfTCFyDxZ1ySWFUddDzvtPD7Phw2K2CmNcM555NE",
  "key34": "mWiwcMnPNcZpHCZzT9BYKasHvctU6VdCvuEngKUA1RkNVwqw2seZxmaqVDcUrof1oRndvQ3peVEVfvPW8S5L1Ri",
  "key35": "2po9LPdspcYvwzpMd88ZNBU36h4m8mHWMNVKhFborysgp519A4rR65XEZESYYkeGX5bPWMzY7s8QH8bc68iSUwu7",
  "key36": "2XgL8WZuFBN5QrzBsspkCiEf7sYHKBHHNaKBBqSpRbPh9rr1Aj1gjbbZ68SqywT5S5mEs6iMmbEev2WuMvvn6XLr",
  "key37": "3Kphn2RjHSrXrjp74pLmr33RxQrLbJR6uqayjUqZjRnUDydt8NoZYLh5C6NscBQLEzrCeoDM5STVUWxdJkytd8y8",
  "key38": "38sopdPnNzwiHpxXDdDJf8pKmWLZXuLokNTjJSzARf5KtqH5DG1cz2wedLAzJZE9DVYCCjQid161S4o4kcA1BCrZ",
  "key39": "41rx5DbdFXvvypFt3fkV7dNqfAKGPvF8C4es2X3yVNi8QN232jF9YaR5fu7JcoHTkRHsi7z8TjSVnX7mKosMTN5g",
  "key40": "2bnFyqvFzMGvS8L24oGHMfxNfaXDDjDqAHkRGemXsADaFvt3KbcD5cb7wzsXvt1wZ2SEyxgHH3WrxcuNHhvYjTvW",
  "key41": "4tHV1cD7nzZQX7vsGuB5kDbssH6iFuFd8FWHiWn6EVjPjvgdWaxrgiSELotJWN7i5S6ETVCjpjM8pqsfJ8Qsvb2D",
  "key42": "2knkkttw69VvxGvxfPbPUt83kHrSM39iALoBV4ZMvhwG5enUnvafcbcpmmZLYaqAyfEZwTxsja5QUuj7G3YHddHx",
  "key43": "2KofpJaNnSSQLjQ3uCAjuaVbJuXWnbyRpVRZ68aUKCr7nB82pMu5uqZBnScvj91nY6Y2w22mmRcFxQkdw7DBuNk",
  "key44": "3uJRdob3fwsJ6oBvpx2NXr731Ec1oF6dAUExVndNsjhPWVtef8peZFRkvN53b5bTuGcuCnLu6LQsUX6ysygkLLCs",
  "key45": "xCsgRJ2ZkQpQZ4c74ASn91M2Tgr7vms3jftqJGPNU8eQhrYqsb2WjyEvvKrN2LzTbDoLbEL9V6JoXCZAUudTbqQ",
  "key46": "3FEcmW85WEgG8oAB1GUbH8mXDVYyQoDRAu8ndtvbYhyM8UPCshaLWPyhKVKcPmgxXSRHBSZ1wjooKPBQRPDAG63A",
  "key47": "3igRJaz44x8xnS1UMfaxcSnrVLirY4jjr27xoH8fgGuQwyXjNWPp5ZZc71DsnPZV9NgtgAX2yDJjrpy6S7dx7Fxd",
  "key48": "2wcbBtNy4LxCgEBzkPs6gm6ixM7DNtoXmqhBCoLE9YcMGBW8oVdj6GrsvcxA4m8pTkUEyLrgr5TAZNvHu9ULi5oo"
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
