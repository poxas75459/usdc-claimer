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
    "3KCZmQ8PQqv7z23HyGSuvZFPDsfVRnaZCcSwmhNbsbkByVy6D67wExWGzYi3paqttUTPCJArH46iF7SS1aLoPqF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JjFJBKVULKkYxj2Vg5sQ8TtU84DWBDS88rNaYaR11qB4Hoh1Fxo9Mgm3UG8YHxWLUuFSY6ttKfe8RK6vaDJS13H",
  "key1": "2fHJ7TEBrgsUCG3eGXNZCAJJDQra4vaNzZLCGgDMWasXd6rh8y5nkMymcs5AptupriNFeCLgvTwtwe18oZDk4kTM",
  "key2": "xfEQyx1aFqc8UbGxXPWMYWD3Fr2hTgJ2N6aYykn472CEX8PmDaE8jxDxNSuXBweYmPT2qg9AyKVEJD6cpvP3a6j",
  "key3": "Uz6djz35YzRjXJ9wjQMaQ2qRqMJUZ91oFhkNwPdjkHm2BmdC6f6j7ZLiwpJXhQvXgHYTunCj4izY5qa7gj6P2hZ",
  "key4": "3Wb2DPGt5pVJGLynbYxAJT59LnSH4jGYv7v7uqrWNgfDnMfTb6pqtPXvjSCde6JpdUbBtkUpHYrY5xwo3rGWw1qn",
  "key5": "27Uy1Kf7LxEnjUygkmbowwKUMLdgjNgishhenVGie3qxDxfsamyGrm7Q4CsufRjW434W9L2MZN2wJUdpXKNkwWLm",
  "key6": "4eG3rS1ULBxEo7z4ToUdLqvsCyxGT7YmtJDkgabCgbHkPPoaaNP1TVoubuq7wEN34WnALQS4BQ59iUYDF2W858YX",
  "key7": "5oWpEqESoXWRb3mWTBwYHtWeUMAwTh2xK1B3URFCvxtn5UJbrAQ8n18e6B32XEVijK23tTpXcgJ6xCgvRmdDmccZ",
  "key8": "4vjJYCEoJ5E8UUBkKQa7KUzDLfRbS7AdDkyoPYBR1fiiZ7eSHMRgKjfKz79CpYMWyFuFG5TkCLJt3P8cMjhuY6PW",
  "key9": "5JaL95eJYoPTCzY7HsH2LgejLnBvBwmzAf439g5R7LwmLmW4X8YDEx6WfmgH1JLu7KDW9KGmyrTSSUpMSigj8xSX",
  "key10": "4e7LgSRWrGnaJjLSsnaKcz2ABopwQK3E4wV3AGCeiRnppzABT23J1Ay3Wyq34HCo1H9tYfxFNZRgqTmn9oG65ukN",
  "key11": "4rZ7tgoEFvtowhN2xw8zsR2MwcsknbSCY5758yA6nb6E13pWEwoJ8kTFZiNxeVe3ih13fKDr6vnUij1Qy6r1Yjci",
  "key12": "5s1HRK5c8V82JkgJHYjrzLBX3jKXV2NPQCdvPT5A9CXXXPWhHn8xZUy81GLcdF2fbUQZiYvPgpSXrarTMBBBteVR",
  "key13": "4qL9exfMMfK4UAqgCHNjk9XDPrAjSE5GJTk6tyR5sZUMkuzmNW3qZQqrhwLawRQzP4qGVK4E4gjDD6HYoTJWrukj",
  "key14": "2NFMnkRyoNCdBoSreCV3SL1RzQS9bpbAnQsai3R4qucmqBUpqCHJRVdkDZW189zzPPcxq9nLN5R6rKqy9TPr3Uun",
  "key15": "3rY6rcjLHUvFZmDU27GSmqvFuob3Lk5m52CzH89AuzH9cjnxoW1P9LZSQz3fsz5ubL1GaQrLRBE4sUC9qotid3Z4",
  "key16": "uYc34Fe8HTyAbRLfCB3h7TDHJbuh7YsZKF2HmsupyAr6eux6tLLjkGfK5cq2paNoCUMPcjdTMiS3z5iYvYueMv4",
  "key17": "4JfgApMSWbjK3JbpmUDQh5A1zYWPoq7FHusHM8XgpsCGD2hsnLtJZ2YGJNfNfKav2WdaKhsk2fkumHsfuDXvJepX",
  "key18": "3k6EpXnYypmHDKeffCuqGCbmHXLMdCZh5dF8ub3H7BEZXB4Lf2kCW6mvLqZuS1XXYKWptD6XRrQ4kjSCKRWKt5NF",
  "key19": "4LVLJ3HcG8zdvqoGgbiNHHpsdssCPnhkYTC4qraxAmC9eWJ2kkeg4QNo159ruLkRq1ptD8PmftRQsTGZUP1RZJBu",
  "key20": "4f8d6jcgFGzpxPfkUT77gHbZmnWxtUnae8Xc54f8anpVid2kkVUAotWDQsne7TmMMVmrVSA6pvJhtsL1tNkY7CCs",
  "key21": "52haC8gS2UyQQCNd5nphRwp23BJykxZ9sT1KrrZF5dsg1XiA8eSbRuEfBjQ3ssWij9HjQP1eE5chpzezmLW3ShDL",
  "key22": "4yPV1wgn2T4EsdS2XTaApHK5wowNdRvDQMv7wvDaWqjLdoxEeMWLz4qbfewTDBZhW7XGf4uK6ymidtZ2rBpyG4wW",
  "key23": "3MgLotcdNpsK5Mcmn88K9MMKuWQ7CKj1od11VNaN3PvwAj5KbsVDWwLck2z8BDw7KgbtQp6hL16rYEShJpn4YiYY",
  "key24": "2Guc22wyhT9U2891PNwW6S8RRvVPAsdSZsVxq2ZRLte9ejfjFrobVscXrEr2te7yNG4QXbdqW39hvLnZcw9imxMd",
  "key25": "zxv5UtXBmSD2envqsenzkq5cGpRhbyoBVyxJcSSjBCoY4akJoZYZA9QnvXJZzLg2WRaogEnpj1AZQu327D4TkR6",
  "key26": "5mzqHJLgodHqByDyTsQnCDQ5CqXEsbQfryX7EtiCCrzHrNJS3QqXzKNp4TycW98ySP9W2JcvfeW7MSi33DHpAA9F",
  "key27": "3Z1z3PTW8BbsejvzZJwu2G81M2Zfcspu5KvFiTqAufr6MwtEPgTtKkV7C7Qh4V9NDFD8UsWCYzPYE2JjfNDXsJjW",
  "key28": "59qbtudZxGVBKQvZwB6QZvikLTwJYUs5GCaJ1mrAy7c8syeVpJaTq6DXAaQYbjVPPJY7CYsexi97iQ9ZvchtzX6U",
  "key29": "4ABKLHyhc99SSNvLEdVJw375wPi1yVkQ9LBsNnjRxedgKbwonauzbpjxmFnR1vBAo8jR7vEhAPze2VPAdQXGYPTR",
  "key30": "4WkUDGeX5EbUty9rmwaZdgAgGhjRDgqjLCqWzaq2RaYJPbEDAwEEtfv92CFyUTkF6eGXcv1nTC7n9BecJXYgfQzp",
  "key31": "2d28TMTUKRDsM39EGUCtpUUV3R7N7PT1qd3DPnRZ1pezY2R8DfmxZyAHFbG2RhYR6gxEK2jJwypky8SRTCJuEEZM",
  "key32": "5mKxhhrrPFSZYm8VNPoq61mKNDVtYknJXynYPcheraYLPK1J2aJR7oN1SdiQR3s2yH6WKS7vdKGQdLqmVN8WZBKG",
  "key33": "3ENhxNnmygHXpzN6MznanBnvwXDNBcGgzwi5mEK2dfnJyNwYjSSWUt1f6fGnmakJ1yXoW71XpdwLNXaHFYsUSLFb",
  "key34": "43o1DsCit8N4McCLQynfDPv5EcbxvYD1GS4piorL3u8rXYMJMFMrG8XRG3knw8MipmEGyBJSteRbkFE8oW9RSh9m",
  "key35": "3mZZEbgVpvEo1qtRCFyFebVB6wPhFNpJHge8k9cUsGjWiaFmpupW34FCZytCKdZkevrLVFq8JYWG7W9jdWc5URbE",
  "key36": "5BrEBqkKKusJLySwNWgDnTeUPMuJpdZuzYw9bvNuNG7YQisotoJt1wSR7Ye3ZzQQgn98TFFWz11JJqo6uCamyA9d",
  "key37": "4ZEvdthjCsDr2c1EA3VSbVvb1Ex5bpyKnjSKFYj9kJ2wxwGm56YNgJ6zGmGc6x5e6rFRpxUggnxytTPevKPGEhxA",
  "key38": "5Cjcaxat3pg5i4Lcfdf8t942rrWTPTNJ8BoE1Cqcd6jqLieGEh5F5oz6EmZKEW9zXqQvkHDUYLvPmFQMqDuYmH2T",
  "key39": "51GGCfb23sEYNRicGiYztohYoS3UxqszXr2a1Nyh88QFzwBaiqcb6jtGSVUDzxMi2YfCoAgibQt3dXanggfF61v4",
  "key40": "57pQWPwoJAoCbFVvR1uzkN3WxCUgonNTT8qphkaeLMmwUyKpp7kXHXze61s9NBaP4qZnbgALprwph3ihaLAza43p",
  "key41": "5bWVPyi7nUfZydgTKTrkN2ZxXURUCN1cn6pYLwBpGWWXSKdpcUrkQ3c4ucZhoRuxxf7RMQ2FpLYtmqWsGugTFjL8",
  "key42": "r7ftc7veD5zwVGU7C1wxkP5PochYhYjSHsXF9rcjQDiUf27py56DTK95gFKUSPbq6iGf8KVgXZMX4SFGQwG3rj3",
  "key43": "5TW8PqxNwjRkwCFS59PJcrCQCWV1Tfa8BoyfPAEUE4Uo5MmcHCpTmfUUWPF8aRbPrDCTP8bhtkBHnBCoNzez6v8X",
  "key44": "2LrcJ4TNwtj3eaMNknzosrn1MdpPv8e5bTVCs36FSssoyDzGJWtP74BukFRSG2DJayC4Nfy48xGoeYenk5qX5pvo",
  "key45": "3XaoLFrsotYjVDHF1Uv2pQFkzT6ioM1DwMxJi2UoBeM8XdSvdTqKAg6fKoR2CatjnookhtRwo7hmvyEJy1vZDtL7",
  "key46": "ZcznYJxKqQsmvtCZgZbmLDLy3JMV2dMcuu133z34ruGF5Hf4Zps6YWDTdFbEDYxzKQz8x8u7WVnXWYAdjHUPnuH",
  "key47": "XPznGjtUexw3k1Bg8vQvDHLZ6saW4sPcWTxoFB4kBHaZCc1NCrSPte8Li2KGKUVR4EYV8o7aaHhHwCyYCkXkKva",
  "key48": "2RYj93e1pV3er3hCJfKYuKooAF48SbiW8F6VQipMWfhXRVDzDtMzgbj2fQpFgaVWu4hffUWBDyJpHkr3xpk3oEXU"
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
