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
    "HNt9bX2MxVBHR1uHkK7vvFJmGQPz1NNqdL3AUYwQXTAPTetWN2twdCvwx16jrRd5xmA6NFuBFPQ4hbcMocUBYhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqa1rGH9nTATuhddVNZ6XRUoRfKm3iG5BYCoDdKAYwgBrKcVWcvniugU2WAmTk8YM7Sk21cWtwFWBAd7DEwTYxs",
  "key1": "2VgWFn1ZZodptjDQptFrnrA3QYSa13zzMjErHiji6EbjyaAnSydt5ZknS5tnGYgApHERfjzA1eUc4f6yibajRjLa",
  "key2": "28EZnDbHT3EZyynMAC7TigZtDD5cTqCR6uhggjzpdXF7yAzfX6qSDD5xwVkPHwWbxs4BSuSGhR818fTH7whvU9hA",
  "key3": "5f9F2ZVqzLLqop5iCTfB7R7swkYfeiA3TK6JFiYsB9ixmjTMzDMmHWnTCjrwGs2oUi9hxc4Y6L4ysLbnM3DQKLxF",
  "key4": "2D2MsrGb4mC5oPS85iANiGW8E95vCCYqMmnT5WEEwVzyEViumq4NW1Kq8vNioJH6f1igoTcXEwasuGnS2aLxTE3r",
  "key5": "3fopxAjqHmU4uWKm8x72kta14MJ7DZ46d5G8fSGJ7paR5mdpoRnAFuzzSw8Xks9FZj5qf5qxyv8NSVAcfnzeDJDm",
  "key6": "63tUq7HJCDRXdubo9yaqvjq6KS8JtrMhxRiYWS3qWr3syLtGYy7yQSvjgVyXpXSHV2UyatBvbXt3tWDuBjg4mYX3",
  "key7": "51XXCMqDvMsU519hmgcDjbaCqL49GFw31TMDkqgyvDobH937htwxXF7ZrgLuEjmqxjHSMXZ5CsovwB5iHqKrka38",
  "key8": "crmdPV5G2dyARW2AjLrMLwLfHcoK7kVovvYMqVBTQkV4vrwipZJBLKNwz8vuG58MJ3JN9LhDLDbDdW6q5t5uLnZ",
  "key9": "XQftexcnHmRXtC6f77Mr6t4kKqPo1n4YdZGnBUJJ1xwfFkxYqgcawwrV3AEAomfcfvwL84gpxKM46YPfyByoCtp",
  "key10": "3N26H5QkkThFuRDgdRJbi86CBPoob7ZsyYFDMk6UjkbFFmMLbcw1r9otHhUAu8dBtJt2pi6vaxMKejnby5P3o28u",
  "key11": "3N1Z3AbDM4ngT3qxoWTMw9PieNYQ87x9GpypJ3PXPXbvKCGCo9zkRMfD556gSQCFivefGmbuEwZFR32ZNZQMAUVD",
  "key12": "4xij4sW5eALD4kY7cjcXbDLVh4hn25a7iFkjHhmXdaV24tRDD16y3rNf33R15id3mtZJdf1kV6zWEGZJTsTCbmKB",
  "key13": "5TUsjcHAV3i1DkE4yE6C1mxayg133XqBzj9rG3bkpKubwnLhRPc8TumC7ScCJKNdSSJseRmBiT7Fyt2Y7rAik39p",
  "key14": "5ffdGfK1qYtPgtSyFxKwWnKTE5c5ozYZWhXpvaD2mTtFmypgHqwZGo22asBeNoPT3kgATVxnhZshkaFG2x6SVFVR",
  "key15": "PW5913Z2t2dUf9vLetFLRj46Enfpm5v6oewEQVp5B82B7wcVPjZZzmB6tezUDPwnSxqaqBwwxef8usV4TXz3bsA",
  "key16": "3JNaS2kzQyNMYYQfT9af5X4SuAp5H1SPsgXU52nQRTzo4pbt3NH1QeByU5SWj63dDEEFQK154K6P82yS7DRWCyeP",
  "key17": "3BVrme2HYCmSUf7Bz6EtSkoMmsc5oNtAWvYUWvvK7e7YdGsvWiA2YvDSt6Nvzawudcf53TAUCGjkarW13qrL3YEX",
  "key18": "4aascj6VqF193bZxbCbzYX7o7fnrAm8nhwBPjxquYrVJ7C6dFoT7n9DJ8myeED5EKQqjHENeuyCpurQfupA4fm6e",
  "key19": "W9UbCCm8h2RX4bz4asq6N5dhr2vA9rFnFnH7UqvthHw15CdQLnmHdF3JA1Tm4xjEyLXuiXkvRovty1ZHxqzqD2w",
  "key20": "2dhZyU9z3wZLEDNzKvBSEhtEen1vuK8awaUKALDAvozCWUiUkQp8cet2Ypgaqy5sz9jnMMMsZtH2kGXDdfmj5sJm",
  "key21": "3Kp5NuUxbbMq2K9SD4hL53kgcDUUhtjNn7aurt9aq7CYWVQauzCybU2okqxBXDBcJzQfxr45EB9ibSZ82iBt2L7L",
  "key22": "2umCnzXnT8jR9VTgHEyrVXw9nU5gdpsNFC1XVRGovb6Lcqtpd49oruDnDEd8JbquHqwx1hxUn5kSUHoAruP27Rek",
  "key23": "5wxCwYoZVQ4YiAMJ8hrMxZsYaTRrQpgV6qZW9twHomtz72XjP2JWV85x57FdE5fnkCpz5SdjJit9Hk8qhAoxf8Sv",
  "key24": "4NwdMevuXELsqfBQcSbiUA4PGzrM1NbBb43u8iQFEJfcC36bh9phGwr5oRKpdpECR2BWd7CcYSCFUxNRquQwfFHT",
  "key25": "3tT6sjPp57nvkt6yoWo8ueGeZBbnwKduv5MQ1hPzdLUis1DoYYrzFxPVGgUxRb83cJTytVdxqqPNpikZmXTMLGFi",
  "key26": "5dym91i5iMQ8b4mdTfVuy1zn77km9boCX9t3zbZJw6yhrzFSQYr2zyguGvptP9sfCUsMiQsYEoQDjbZa1thYj6Tw",
  "key27": "5jbqxhCHBXN7HaxqH5xCTrJ96gWHDMJ6Guyh7UbNZStENqZJD5aKxVy5Dy7eFCB2GJJ7iiTz13RbpmQSbiQg64Db",
  "key28": "2PnJoi4J2eKXrPkB2vmhmE8jMShoRSfc5MHzEQDpXp5dfR6BFc32pZ3uTNViDiovEutoA2ED8FztXR7rfZnxfXod",
  "key29": "qtgB2AXMUBdd9EnrUsSGyx5g1tvCse4mD9dP2ynoKdRC9ERE15ezeks8ttkGw5VjbjfGQchj5AACjxjdwDogSVn",
  "key30": "5Div5KYijAg1LjbW4rPusavVWmj1FK82f4EXx1kHPkQVytS8UEZ2r4jWtrPN1idDRw3q89cKn8PfvpAjaRYmJaqW",
  "key31": "GNVhGEMw4DG3QfKS9nFaTfBn382Wj8BHBRGfiibsyzXcTpSqcRP7NLE8EuYhZFk5cefTRkcrC8cyj31gDpUDxKH",
  "key32": "2wujWAgKt5fWnmWZ62vciEv6wzHVmwLSFaX72FGEWrk8GmrPWgqNoJsjbi7y22gpjQH7fPwgNvRzScMz7iPYLE64",
  "key33": "4so4dnkbezXFeo2XWuyBtvoGFhrRsv28c1FWUDvUxfvztB9gZ3QcHmNmUucRb2GzzeivDfpArgVxL5pypR993niL",
  "key34": "5uLMKCo7P4ZLnh6JZXUfofTYipnoWF7TwAcEah45e91oDmBqtC3Lm4kjbkuKWL5RK441upMHfv87FXjR6j4TWxJ7",
  "key35": "3QiZW6YsfBN8XSGL7R4w3Pvc3gjpWQQSC5SXZ78a9crZMLCdRCBPTwzWaU3Qpnz15gRtzDZAcFBetnkUUce6BH1B",
  "key36": "2DX5wChUfMEU4sVUUfkVyUohjwzEDQwoNeLAnD57XyDbwm6sDyc4RL97xj8bK3t95UcethqercJV1BUmFcyd5USN",
  "key37": "2rw49rwwywAB34vAigdCpjw8J9yGFNxLnNeWhQzhx9JsJv5XLLnK8nSZD8KeHRa6vhsEBpPe6PwTJ6qJQgEt913g",
  "key38": "yPdFMdJouUwyW4hntr87Ls8z6M7Yrx6QM159B1Wk1PKmmHR3u6fvGzBj7dnky1om6T4k8jPMaVa7TapbHk15Yqo",
  "key39": "4oKeLB4GSTzVAjdTx9YfacjG9wTZwMDrrv6aYgcgpSX7yrnpFJ8bFA4wjuvrkspD4gXwoJ6V4Rqv2JfzLHgZcvz3",
  "key40": "3A8gJTta9vpCM1XLmMu6EhLrxUvYuZ5A8GRkKnWQ4uEFKcu1Dz4hTyxgDbcATwkZ4v43AU58JSdRTTCxJKWSemg9",
  "key41": "62TYgpH77u7V9e9tHN8kKLjt1LEiURQkzcTpNcBKZqQLG2uC2RvbysojsYKtPxjMUzpt5F1iZxaX5r5Jnz8w1u18",
  "key42": "5yoZTzo5gdgL1BxX1meuQpUGeNKaJxrb6nrVMF8RAwCcnuSGeiMxL3vtgEgVCUgoCGpsx2cpuHK5eHQnPS9bSvkZ",
  "key43": "2JH48zqN4uxmDycG6KPUzQM3TYr3yDmuSxqQpLkWRrUq4ULx3SDu4P28kS5Dzz8vWnjbauv34jES2dK3AYmUCQ9E",
  "key44": "3rfrNSf5yUUwoTPRUQVTcB7Ymm3MU84sLqYQGW9zkZADWkQtAWRPnfPj7RzUW2gihSH37S9KGaPcKRYBpDbsxroC",
  "key45": "2dLAQNU3idrKcssNj7Cukuivwab4p2nMK9bXA4KL9RfjPYh2B9gRYe7e6ofLyB4yCB6rLD8y11ybQ9St26VidomY",
  "key46": "2Di4vfBP3sZLqtD53fVQ3vww41FoNUgXSeccpEztNZegTi5q4ZhstzesHKTUj14ajT66V5fWCpmEFhyB1yurd5ZL",
  "key47": "4oCRdPY3g5P18tGYnRK9cjFcEsk3zDNXwE6C8qUDhMJHpRwsREEhDwLPoVX9jKN14vLeoYVmaqPqsaqPwBvrNUVc",
  "key48": "Vp7UVwYqHw4wYmmicjSTC9J9cosvVru1PyY7UjGfdi24Mucb38uSeeNZ5YNuHteh4EC5xyRmmvTzzCqcijXT6Hk",
  "key49": "4D4aexyVJbDcskjwrfUMfRgrJkru8FBwm8ceTce4qU2YoBPCYJzKpJji1dsxXBvYuR1tGPJZVWubJYEyKEsNfT6m"
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
