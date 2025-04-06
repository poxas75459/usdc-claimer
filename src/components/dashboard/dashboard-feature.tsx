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
    "GXXF6eLtfdF4G52vST7FjYMW5nB5y3r2CJRgLwPfvv7J9dppXKwgdHYmprZVX6T9RmtcxXwWkStX3rtHPqB2sEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bQsutods6VuLhicqZcMq9p2nbHRCgbiCdGyc8cwhf3NWZtxMvLp9mmLdyJpnXorRC4JmPTWdfyzhN1WwroXMoXV",
  "key1": "4kbUiHCJLkja9XFuhaWuQUa1WTQvwkRFndyc7J796C4KXLkouVDJetJNqtf9LeZN4fjXtk9bPAqfXUPmLWPXBjoL",
  "key2": "3MBy5pcAziyxXQ2JcVW1WtiLR7WspzoDSPeYD9jakkPCSGGne64ZwCeLXSNoNdjVHf4nKfms2Mt7Sd9igVpWATYs",
  "key3": "Zz1q2dAKtnHexAhgXhti76pKzG1vDjA5k2QLL4UnFofuMyKx6urH75oiJdQajxSn4WpBenTnBZan8Wi5GHX74dm",
  "key4": "5yXAsjxm2PVdS6mKFRCePJumBobMyMepKAWMgRDFsg8khNaq8B9tFnbXSSzStQf8aDErqBLqjRVt3s2RvbDiCqt9",
  "key5": "2oMkSCR2gJsPFDzUksg1jym7V3cUXEV1cmUcFx8X8fusfQEmabuZgkCDUdMqbP5fvjHjXDDVjSSiSo83Tk56iwhp",
  "key6": "WNesQxBehocCwPZEMtJXrmoDQtmcVQVdFa2VxNSbw9koSfe4wGDn5MR88QSKdsKNofxcQw9nZVj5vScWs8CDfA5",
  "key7": "TaiKRhNBgWsNaapzwV61vxVKYdLBviWXmLjTXmxhMcpzoJTkDkbYCiW5xN19sDLQGCgSkGtDUbLWhh5GuZyZZYy",
  "key8": "iNf8ebgokvs11DbB1bN1h3NNsSvbeGupxfstyMxqejqB9naD89hVXt1pNurPiV4qNCqhUF7ja3bo2BW8NUBTSCS",
  "key9": "2Gta1uwu3ZQGtBEN2iGTRVCFd2tQJ17HVtxjgfbbRXfp6sFgEv6BAuPmWz7DVqQXQinAooVaEfhmBZ6yrMzYwsEv",
  "key10": "44MKsbuxUhA2m7R8HrD3bG4mGMQgSv574a16o1zKVUk9m6ehxwYim5s57yvDK8zQBttJaCkg59AYedbEUkvXHqi2",
  "key11": "3QpS1r2R2kDWfLAMCiVz22i6gMCR89gJCuhryEHBJy7JkVT9o2BWKPLKBEeLCimde8XgFVy1Xpg1gbwLb7QNeB2w",
  "key12": "g4qGkmxoynmELQhrB4g1gWAwo3PTiTrjnZZFcBcpfo4an8qkBRdMvxiLZy1eCogfNad7vUCCfgWAZDreMFYiR9t",
  "key13": "2Lpe7azR1bs4SwyLQcXbw7FM7ZZ8n9fmmaV7h8THqEEqQ8S4PQX9WPwR2Bk9fmKe41JrHH49gS9N4h7PfxEWTNkW",
  "key14": "3G8ZWiciJjVcH2QcWCN8ipEGdFkZev6a6o6f2ztpYQGkHucBgzErirnVKA7pv5UHkv3jhzGcRVtUMXjhxx3pccgp",
  "key15": "3j2gx6a7PzJEa6nRq1L7wsERUKQb4n6wnH48fCsAGaW72oXDE2VDuJ2m2m5VpdZV3RQL3VGoFN5QcFFiPwupo5oo",
  "key16": "32tj7esY3GSHU4Ut1JvJDmTgvAhW1vGdb6tkCbxd2tpXXqEe1C7iqHoHMrZKPxeoVMKdZruErZ9dCqhhdL85UqWo",
  "key17": "64t83scBNuNYgfjUyohPV4ST4TgoyeJCJrvH2EtRJVXPMmV9paDCx45rnRwVyjU32eJ81wPJgTxAtLsYisGqHjnM",
  "key18": "xZxKC8Ac8eGQpGCe1p8ufnpW9YReLvTSD42XMxh1TvgY3VMbE9nJbWYcvhQQArkePrfK246h4ZNXcVXBY8ZTfH1",
  "key19": "21jgUwbeRgApbm5WkZ3GeWCxc3mV9nfXzyY6AmJ8KHVMSdWnnCedx2DeRLQNNPfLrAn5ujpc3PQJPeRuJqGMjPPT",
  "key20": "4UC5BEFpzENtLHmPPkmC3GnSt1c3f6f8f7Yb6d5nJCG4fiK52rpKq75nxfZwaSrz4Y6yryZo6CMX2GtCdsnv12W6",
  "key21": "5XQfwrxEJFnn2NpWMoLnhy1k2M8Mddy1KXhpxu3WW1pFbpSsheU3GRJMbH8UWtjU7anqD5vQcfS5EqMEY1RLKnTi",
  "key22": "3Pw37vATC2QMQo7nAyxzHgwYNPaW9CqYuCL2Vn4V9eJgNseXJeJSKT1fEmHDPdcm19CtPHPPwdrhL61rWgW1rVqY",
  "key23": "3g4BLAEE2PjY4ij7UHa413myeXRXs8HF167qLmiWRLbJN86z2SuaYxUicGRFZ9oDED5DAYEprNcdsE8QS7HzjkvL",
  "key24": "3kFFA37J55wgA7LdSJAy4NuqcC6ZDrZX4pFYCbFwrKfdJSTMG1Vre2aecXqta87QtqhiuDreeqVP1CPpBmccAoDL",
  "key25": "3NFDj5XqcP4aiMbKSF2Sj4xtVakhHbPQxDasPezG82Uat1Feq9PtjLuoFAa6RSXzk1mNwgGLXj3P5dbsb5KeWWLN",
  "key26": "4VipCGKTtYELz4Ki24h3uMcxmw2PitTdfzm4v1EDmceSKQjKAMQ4FGMucZram2CLc5y6rWkHtRkQ1ewvxhR7Q7SF",
  "key27": "5AyGUMj2TnsETKe6ikkgJar8f65BT9pisY2httvPG1tPu3VvXFqc9wx7kH1T55xNiQx5jzH5QNtzfAD4KzziLNy4",
  "key28": "2VH9bXW2qRLLjs1bF4XVZy2VmtdepbGd2wpGNV7UDYowvpsXBWRh4vHu3gVJB7s5QVcf8aePuNox88rmZ5iESx9B",
  "key29": "4ARsNz6wEbF7t2NJQdv7XZoSVmbt22yF7KCvZVpH4bA2t2Wu9uPyAFpkgMRjLurvEKqLnTtpb9R1mWWdtN9rwnkx",
  "key30": "656aKCNwUTTPbkzsSkA8R7TDiayabkYnVHLSLnAiDKAGiz9DRhd92MfupYCJFXBEkNqzoK7SbMrghKnWr1oWiUTK",
  "key31": "FS2rdFNQkaQNCBeKrjumfVhRFEScufZWRSLZAmZXkgtbWjPkduK9q7n34Em7PjnAffPuu5HXJwVuucrVA3hZdn7",
  "key32": "gAUX5VSgs79unbPmcHRHLzFgytAeRhvSR4wf1BeUsLEzbjECXYBirwBSUDxUxpCbiszYFdWCaz5EuAc5DDZY1Xq",
  "key33": "KXscFRMzTUrTPEf4MLRaEA9dqfgbKPCEifBBwjVAq5jR3n4EfsV2wPSTSd88ephXmTgjhhCCFdBveA7ic4xZmbh",
  "key34": "5TKi6KAjTTZ4mxb4ugGf6SDt8UzMxx5NRXu5zjHktpJ1Cjqr5mGEZyK6EfrqfBmZMUzyhvc9rCBqpjRZRgnHxFbb",
  "key35": "2EitjCRokhxooJ4ZhN5WV3GpZpZbWQZWrPfqxSKuvYYhRZpFWMV2uXvZdj1rHDn9Sm4iRTPev8Ww6c4EqfjYNjsk",
  "key36": "4JV1rG4kMY4MhsiJd14n2GdhiGhyAzGLLVZH9Yz1vLQVRiXQf8c3KSNiQRwxBCoAdbYP4vwMe6mxKYrMsEaVM5yR",
  "key37": "zxPB7cWzZg529gV8zBPRAY7quAMcvPtL6e6HiZSxnodqVDw4rMd2q27ncmGFcGrxuYsrfzk19dkB9p6hC5iEwXN",
  "key38": "5Yt3zpqBfJcL818pEsErfE4fe76XJWsrSysJBBQvqZUYuZn5EUUgL95KZGCc79UowBZJY7P8yGmXC57CTbeC18f6",
  "key39": "2eQ5u2odAwNM7Tue1Vundf7pswoVBo7AVXLoQSY2aKBL2VMn6gJ9y6jErbD3hV2YmUakwwkgXjWX2N75KFZdhoqU",
  "key40": "2DMP43AscHEo5TJRwfwWYbq6KdSYof6k9pTQTT9ADYthnvSPhxK6Za49Xqp9nP9Rn3XAiUo4ZTaw4Lrgu52uuErF",
  "key41": "4K4g4U6Tms6TdmXfSRuE9WeS6Dcjfy53a6TMvFJwGYCzAfbsu4x8BtKaYr37ay3MNMJDLHWa74Vj6Si295s4YPq2",
  "key42": "5bibmCn4iZtsCCe1wD6DW5EnEzF34Xu9cSWtZYVHK4238Z9kWS4NQaCksvbPLuahYLNn1TTDvcWXPo31XUdX2Vuj",
  "key43": "247n13p2musSQCCfjJNdrNnGnXunWai6JvqykLQxyZbHfYEQkqLBzjccrapogkpjnmD5eXnfEY7PqidJJu7pX7UM"
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
