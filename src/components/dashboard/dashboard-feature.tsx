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
    "3bcTMsiFKqMeTsaPMMhSrc9JL4jmfKMD7PU5qeViQHUn4XkqPfNjMSBUZAiB7FxRyf6yM68uEES3zh7DiEZZKEeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PPEeE6VDKfPZ1aoeyJ6SUTeSe4UtsxxoNtxfw1gm1JRVXiRssnQ3Ctet5n6HQtkmJ28z9GVTCmFwngpPMJYFp8W",
  "key1": "2csvmB9APFak3e4XuHPUCBUkaynueosTTzzYfbHtjC9Wn5pUzm3erhVr8rzpbwAqZaA3BqqgnNZG3APkiWqGJk1W",
  "key2": "4Pe6vmgxrVPuJh9aMFjVNcynn4PJyk3tgVky82GmtSnSXafB4Twm7ozgW6cpxakBqykykPvH5VxUhDFSDLkc4DHR",
  "key3": "32Xoepe9cXXDhRMz2Xj37qZcrWcVMRKzB2bQbUpT92UYvUNsoTVKSDKzaFmiwiSYjaFfqoVMEryTb1qx1Apzkj4p",
  "key4": "3o8hJYMvDjZBnDebh24JBcx9bqxWv47JtGaAUi7t1tEKhkM2KLSSbcfV5kFKhSXgwJTGcPn5cb3GoohhgSThfzVN",
  "key5": "3UcU5UmHhrmnnuR4rwQbnJV7uKJVf3VoYwztYk53KCQydf3zgGag2qnC6m2rfy4wJe78VaYxBqHuA6VCF1ZiVc1a",
  "key6": "4erF44zEGVnutCx92X1Aa2bk8ZQ9zxKvbK77AxRppDWCs45RX5PeCY9zhWYYntTF8q5HWf1rrUtmvfdwcu5zsttJ",
  "key7": "2FoVRyYtoRF219qL5EaEGzJvhTxQEWc5ndR4Kq51tx8WakJRDkbWCf3s9n4GTkYM6w7UJmJAzSHACN3PSgeb6HCw",
  "key8": "2uGEaChDHjnjNoZBvrdcGNzoARiyUczAykbbWfPcoroNNomoMzEgHqKik4evNsTo7NP4nExgy5Kp9mqx8RfJPWaH",
  "key9": "2uHQikJ89vRd7agfd9aX8nAz5XFZSX6NN9uSEwzVJmrmrfdxyzQHT7Ha287SyfAVx5gxBjtctxbapnxHr4yAWV4k",
  "key10": "RTCfA3W7iKHSgWD1DWS3t5T6jFgkJMeLnzaLpTfpFzgakhGyFE92m2JFg26YEHYo73GtNuXPB6CBrsNxzzQFyUA",
  "key11": "3AzuTK5S9ccb31Dqb9t16qu8qNMKfSbRWmLueetjmHgdPjSNWKDANJrmpEAHgBbcq167i9T11mYbzdieTsGyhQwg",
  "key12": "2wfLjpBQG2o3qtssbAVccTacDPW2k3ZbLhGGSzqvGB1guXhekbXMHoV9Mq84T7e5FPHEu23YnNaRjbjgHipaWTxe",
  "key13": "4WduxYWFovp5zsrv6omBCAfKXA1yJZ4g5CvpdPxn3NLgMe1JPhRQDFW7efMmLgbo4sCQYZyZ9J9eH6fUz9N5uryJ",
  "key14": "2gqQCZf9Kv2DHE6HeRe833rXQLWCqSQobQp3wQVro54BNQXyAAMqqVN7kLyK2TWNgTc5BHqFG6axDZP8K9qxe3A1",
  "key15": "FJbzR4VAD3zQiMBK8XkXn64NdJvCSrSywQvdeCm7L44DRCR4fwMNGDeHTyt4XpoEdMNczaGnGBtqe8pr18DSW93",
  "key16": "5F4VtZbcsq23vnzyCfEU3dGH19DF3q2upwKWNhxhNtoQaUSo5aBxgiotbseNV8dqt3JrqRhs46GcLMekPeKNXQRq",
  "key17": "xyXDmYkhR5X2GV8Wcx6zduoGYTc39rWbEcZVnRBVH5mfSAQoMq6UvnyrXZ3yhPV7ejavKabp6hC9fGQBezfoSkb",
  "key18": "32MMCcWs9LQ6upGaBBaY87TgpZ67grb24hABKT5jaRb7JcMBk1xb9WGtyHkLFGCQ124yCKRuFGAMvQ1BhaPGWona",
  "key19": "exH9yMv5BrQRPenkPsEH3Hs5yV4pr7y6i1uZf7pttzP5jCxfhhgmuvbwmHfvg4LW6AET8dudcKQtaRuw9TR87Ta",
  "key20": "2jQE9cpKNGZHAbBCTteXGzMq7tE7DdtYztzmtvBj7nSWH6sTXefMYpPrynoVqykpg6paqoinQiHHWtCeCipzWye4",
  "key21": "2epsccVUTgqKhMf3pxKejy3gxp5MwR9Q8TgfdJddnJ9ErKsARAroJ5fzDsFsaq8Vh2s2HwG89MKVGrwMMYHAmnk5",
  "key22": "5epdm8kfhSQ51ocyWUQEkH58tFUKSH1QFt1bfSCRS6taDDgdwGyhVxns5MZSsda2sYgPrzqPBsH6aop2PhBhfYsP",
  "key23": "575yZ2Xm8vfksGaf381DLbVcxxE5z96jFBvLf55CkWcKpJgtTwVtVaYZ6ErhcGXPCUmecLztxMjaMA7XFM2s89vU",
  "key24": "ju4j7kV1DpqfF9iYcT947RcCpS2cfSuKjKPfDeWqqxJ5hLpDEKGAfrdkBJJ2vNJAfPNE44YZhSHJUSPxc7bRsU4",
  "key25": "2T26bd3YscWoJTJZn6MDm1kEZwcbmJZ6WHh9Uuu5DDWi8nHY8kNJCtoCt73t6LjRD9zPbVFb13iz5u8XVeMkSrAP",
  "key26": "2zQmysjMoyP8KgPoZq3o5BtwZo8mwJec5WZtc4LouD3Bpd3HE8f3tHvfSJpxG9ZPPhxfAKpCo5mMJPs6JFwBvRtU",
  "key27": "2HJEu8X4v2WTUeT6X3ppvugn94Sncmz71Xs3s8NY5QHaHEQNyPALPkoMBmLFew2jgCAUrGv41pSKta7MT3vnyPgS",
  "key28": "2RgPM5cckRc72zueuSg5uz6aEPiFw8AsNR13U954wjkpmqFt75iSgmKk6jmuHhSP871htX8mSGPiNK2qmPmpfBH6",
  "key29": "66zArNkpV68CG8JAriJXfmWJMuwTDAShzP7LT9RLRgKKK7FeJyKsyZ3f7R7fLc21HZiehHMDZtDU44Scg9Z6WXHk",
  "key30": "MuejoxjXGSSZw2XMWkgxqfafidSUJdm7vZLzDgQMFGowsXg7oDGGnLo2TXbUeS6fkiD25yL5g9nDXQ4Ss1SA6Si",
  "key31": "3TBpfHn8Um9HcXafbNVauQSTKGkJpragJRPrXweLTNoWmPCnrNBdEhqjh5pJsToQXGyhyLkb4MxRtxcNi91KTLna",
  "key32": "5mHPEfWakqySEi2BRiNBBHThufYutBHEofhrDPzLWbRtLDX6TUyKicNJZoFfPs2qC5n5ajUYduS6gc5QWxgHWUZL",
  "key33": "4MZVsdJb2o6CiWE3G9AtyvQHworv9EcKvRhMokG4dTw1siJ7FRBZ3aH1db8xc7ojLNrwssNSL76EDWD1RNvsrhfn",
  "key34": "42n7CNW1y6SNhD2s3dWS5qtMMHAXhXnEC6N4MdnqjNt1qRz27uzEWP1VbT9H7tozKfEDE93Uh3J7MFczo9kf2tY5",
  "key35": "4VRbw1US1uBZXhhLx4HXEN8ZJ9CHDZiSMyVtAtZZST8VE3QFHgiwJYCChpssRYxmQnhHGis9T1cTR2tUk5uTKjjG",
  "key36": "3Qo7BJQrHST92HcszzYjWB34UStX1JEEAKoUqfovSidjjVxdb8MKroHQ7YZhAPMdre5iJWDA3nNXfQbgF59EKqt4",
  "key37": "3C2VW5fAt4RzGLsayRg5hAscfNxr8kw1XfBNrVNpW43YpXEoxz155rS7wstNWxpFc5FG4YHyNVnnEnBX498Y7wHy",
  "key38": "38kb7h7hmHaTrkSFp7kN8jgDAKDAf9CqEUEJnsBa9WLmb8NRAtZYuuk77qdzJ4615zE2NRDsyqj5xg93fdm6w6zJ",
  "key39": "4FpddBNfbjqnQ9EAXrocz3AjzynjHnDV2UXBxeV4pfBnQjrd5PE4ZLuDKoWXsEVj7GFNnauL9Uk7Ysi3czjqrnC7",
  "key40": "3gShCK31wttN9oXuqQaT8yHfn3SiwGCpTHKQ47ryztMRTVLso946qd8uT943Jq1uWiBe3d1H4gkCWZeryuJVz1PY",
  "key41": "iUCWjQDxsf4qv8xnHBY7GcZVHxX7sBPFgpm6iLSQTLJ7B3BM4hbuYtX3c5RicpwvTk5HRPsxS2vgdczBedaKWvz",
  "key42": "3hxucPtZJPT8v64FzFvt3RBbtpWtsSLyyihyR2AttrC8VroPpRBfW1K8P2cRssSxEmGWuN9NvWSqEt5neDtHsvry",
  "key43": "3pg2wqgzrkrpbMLcfFFVAPvqezt5WrvvRYLszqHj4wdfRE3Ddfa3v8vuAAyBcV6pg4DVb8e4SsVLqR4dPMAbqXw6",
  "key44": "461psmEvLz8zYuztKATGAjGnn14PoBe1Bk5crNZp2K8LXSzuCmjeBJQkch6ghGpmPrAdLjY8qD5As4WnvCqdpGYH",
  "key45": "4hz6M5HGnte3rbhuFJcWzaQBwnEu61EFFbhMRmigMKEKpnS5GgWKkXuHRNnf8ZwDfLAVDWDXyJuvNV9ar4ejPr86",
  "key46": "242DbDYffqQx1op3HRYHnikq9m9EoistVkFaKj7vz2QK8r4gCqY2t7Hj3pzrhRxTjcGWmT4X76VpeW4MPpohm9ht",
  "key47": "5z72AuwvYyw146UfbpResZxHZNeo2tkrQjvrEnyrxzxfp43fxSbWGJi7xMwyewc67ZiNVnVK2egTKQeLRdWbMwBb",
  "key48": "NSy1ncdNY3jDrFPj53fqBwNdgMmZSJNDJJgh1GiwnrjBYvhEri5QL6jdd2oZonsuKpy4U5tayM9woVh56Ra5HAQ",
  "key49": "4awbRWBRHr24LTRbmEARmnGPJkpprXM5hVGk8rk43BSDPqvoYnxcDj7pHmrrQpxg9tpuRUkXVb5NEzYTgkWpUtDP"
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
