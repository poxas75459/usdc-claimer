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
    "3eSC9R1XM7y8WDhzrCJxDQ4WZS9V2aXACFYqeaRjJJBS2mMRxfbbqxzG4T6DiTVYiPntQHJRFcqSL4drJaV81YtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VdNpBa2wLydNqyYbES3GxPTtha9PWaxHLRvxRmcQWwSsWdJTp6w1ehpbS2cbodQCrXwKPujzcY5vKs8mBESaasS",
  "key1": "5U4cRy5dK5Uf4V72hFEjcewKa25LRZT8Sn4155acqaaCd7yefBEDuz8Ea55SAUkh9FJsBVbRyuwudsF3XSYQREfj",
  "key2": "5oXq9Xo4t6nSkyHgd27w3a88R9MtxDMtCcBY6pWyvUEVjqF8MLevHSFYCweMRgnVPHaBf9Pbauu7ArU7yw8cMCz",
  "key3": "3XfzTZrYoakiWPwdLZTRegdAPuK5xTx7wfyQ8QFJHxT8idyHhcbKpj8jZRcTBnvreLa548PkTJWtJ7MApv5B6xiQ",
  "key4": "5cMD6V626zC2cRFsDKtLsuNhoWVApFRJbqQW3Urhb71meqMgpvEsJ6PJXzqEEZVjCW16zxP1NhEjdBsawM3fyQ5G",
  "key5": "YSnESmLYHYCLv338NR6DbmLwCAbmCoXNfF8yea71i8qfym4DX5AbviFCf7RqUBtHTx4zioeQfLbdHKwkBq9hKRz",
  "key6": "5cBwbxfDPRe2paCitttEcKRwQXZLRkgvaXqgFNoZdSaouUEFhCQG6b1nZd5JxV5fmj1E6zv81fbsGjw2AhryiQrU",
  "key7": "1CQfT3Bqum7bgXrDcV89GpHcXWtkQvtMsWrY6ipwArXcFLAPHQL5mJGSL6DbLerqLew4iYRYdbixg5KwTHPL7e6",
  "key8": "3FK3zizKuJ3BbqPcxfS646dpDjsqDAsp3LsdDjzifdu2jZXudD2atpT6hihJQNH3zK26bsE6BQn6Uty4Sj2RxUuu",
  "key9": "2GY3ariWkyL63mRS8fxLVhrcNKXm5eE9uD56NTGLs4oF3MmJXD7HRTxA1nBpQh7JD32gdxdtMsLmDc4ZtcYzyVtN",
  "key10": "29EKzpT2zNUKV3D5kvmCeuyaGDq8rTjVtR2JthpEgTxvtgtVJuMgX7pHxW3xkDMPCEryunuGdi3hag7QBauVZoNS",
  "key11": "3Ym3knBFdtcyWiF5bSCGheKL8FhVLUTT7u9NKWjPR66gb64yJsdiqiJBGZfUephkL3qH3hynMHB3674UysmkSNJi",
  "key12": "4GLoEfc1VfRxvm674YyyRhgugfLAewU29D1QQADjw1TNviLvfr3wATMou2UGcQooUGRjnRf3DSYF6eREM1XycThu",
  "key13": "2aFrRNyMaURWRLGNjpWMzJNFfLaCVVtRQpr9ZiYVJR5TgyzGUuptEdgsPKeVXTvXJFFJ8nSUMrGCk2WnLNXpuNrf",
  "key14": "ezg4Dr1EiG9qiQAgnzdXCCWjypdZJA6P3Q6S3BrDJd4Y3DLuzUDxM3yqeftLAfK9nAXBY2ix4XAMTFzu2ucemPq",
  "key15": "3SpTXDKDHmLDx2FUyGDYTZKT62KpzzBzLL4gYYLRuWxsFB4zWqjBihFMNF2XuEqgewD4Der2QxFk4sSgpxx2HiPT",
  "key16": "3YokSmwv5C3Xv96G6XBz6AD7Go2EiXphVZKVrHWAvwL5AgaNxBEHUiD3yajjZew2TfKWqUFF6HQkfQ2TnAFGPySh",
  "key17": "5rmP4caqN2vf2ehpiLSzBkBy5HAXrt7wwmq5iFeDHU4eoPbRshcTbyRzd6uQSe9nvkjv5zLVgxJod2MrwUGEKKbu",
  "key18": "2ynXoQFVpQM71wBpXcUXci6vbodu6vs3NWD7ovDRCU5nfvBBtse1o4tBMiTMxbBFZDFmRqbhmk3SLpYTEvBx3jY3",
  "key19": "293MJDsFJNNEpCgq9kj2e5K4CsvxrATwByyKF9W3fP24XXMeZnM2kFLim8XdeDwfJjR54ymiBCA2GP2JfDGZqHWE",
  "key20": "52TFgAuDdCDLqKYubUe3KRzVNr3GztbakpAxTHv5Aj3kHiHyPamuLdCfsGK9MXD4NQzpCdLQvcFrADJwzEBuA1YM",
  "key21": "XCoTmRi4T7pvmVAudYkGn1ALnEu9DSFYzc1jghymqvHf9bvSurWUk8ei13393X67yRvG9zhiRwh7vZY2HDjcUTC",
  "key22": "4yi5RisiahL8271NecuCtT81PiiLX8wxz11tBTphAQLF4ftydnoQrF6Ecb2MfpLDmn8t1j532ynm65fyXrvu1GFH",
  "key23": "4mfuzL2Hp6wgKDdtAVRS1nuxhbBnrcL8NGtcafLFL5ukxdXZLbcHax3kCi5JKuLbwghAsrGpzBtDMPUTJyuPn1FU",
  "key24": "23hWW964pjvKGRwZ4z3zgTguLS8cCY9fZzswutKySwpBbK5XefiWhBBo4bc2v5dkvCj2WgqbfmWmsatzvJ9YS3i2",
  "key25": "44GrdDToNECs2s3gsBkMAA1boukshRJoPvzAhxb4WDQS6hZEVd1vJHDQ9NGpQM3SRiJue9FiFCE2jtGdNFaZttg6",
  "key26": "4VW63rcve5iZQQdsiwZoodSdFSCFsitnMkEeHXmVrZJEtr4CVHyUhmHnXW4LoYuSwdRWcim8KRFfAqsR8WozeJ9g",
  "key27": "5UKXj9y65U7PRbPRT2zhdebE3SicitxTf8yAQX8BsQjmcBRXE518aCWvfykPcg8CkR6dQ4CedXHiQGLJfYPsQDJK",
  "key28": "3PYc5FBng27a7kdGw86pbTyvYmmpmscy4mVX2YQGw5qR76cPLn8zshHWF7u3kwkRBActY9kHSmvDSezm9XpJEJMp",
  "key29": "k66GVV5Rtkayr3X3m3NRZdCAmqHFuMMzSaXy4oY2tzhSuQX4tMNfqbLU6rxsV66MhcNGBkGDXf6ev5bwoGVpafi",
  "key30": "2dmLBHNhddGcv9oYd7QFUDoQare9XdRQUPYJGvAG7sAty42PfFBoTrTeNneFTnKzUvLvq7Suoe7TB1SwM58Sdn1p",
  "key31": "5MkhxhTXyYo8JkYpDVjLHJFNnEumzurRSxsWXc8Fp5oWhRjSDXPDqY1QjM6UNpTh45LhWPoMAJLCS167X9Ya4RYF",
  "key32": "5ifTTXFyRJw2wRPb5rgiAfWmFyVDL45i4FXfKrCNif5CwWJ1BzD3HWwLTMEh2n42JEvikMJJZhAWJk6vMfiyeXx7",
  "key33": "4dbZi6SopgzgHrgufQJNd9FYrdNoka7GumVjmViQvMdFjaRKjvnEvJ7TRph1buSdWzvdCTmMuQ22JzSdvgpSD7g5",
  "key34": "4XMHmyWkmB7Pa6ZxxBU62eWXfzSP1SBbgTGYcrYGEpq7rkCJWSA8kEVKNBnksYXSUUZFgBK1Wrwf5LLpAbyx133o",
  "key35": "zw4DuozRfSX7efhedAGJXL7QR4W4QJWFGiJajpMHFB1S8DQb4iNzFbFT15qoJABS4qBXrEBY6syJGvXxDGAqvZM",
  "key36": "wqiG5EqLQ4Rsu8ACbmDPURc2TX8iHnrB7gGoUK1vsYiKRvQQiWZY4zjBpeNFnpJC7YhTrhAWxtPWwYMHYWG6Jzn",
  "key37": "346tgAK4VjgwMg9FGgkuBHNvhKeqf4Uj7tMy7xG2iV1Keej67aQjYUm792q1PYEwX85omfxyzLqAjFNsMqguvBX8",
  "key38": "5Jykxrqr2wvcZoLC97RonzyMBErm9MnzyRLovQp7xby6wkAfJfPokx5V6sgj9u6ciZSJHzjpkU5EZWFATxEJMZhC",
  "key39": "56xjEAyazrEyZhLePXngLjJ7erqP8TbXMcyC7XPWvADMQKBUgP7cEgeZoXo1v4avW1dmejxgbWUwKzP2xCkc25X9",
  "key40": "54hLA2jmyhhxMWL3xh5WPaaMbNhzECNkj9iG2r5HXk4XEyDozrwZejZChifJNUNWy4QLSEupWm4DeGcNukwRUXNN",
  "key41": "54MvMDdY6fLV4xecQvLtbMhgySodeoNG61zkbVpWyGnspyVYQkHtVRrHu5wFPoVNcMM9RmRcbtPF8sv3uT93owAg",
  "key42": "4jkaf6crVCuX9eFRCuQuKptmUHmJnL14ujhJzrNcH9dzQHBuoTPPrW8DRwAtaBn24yvcVyGtk1cy15yMSrvTXQzQ",
  "key43": "4b1v7VFwTeSvnJqiPhL7iLtwHDz3DrMgVrum5sfSCqc63dXtBTUHQ6oirC63kfd18gRhFEjUHXt1WExcE1Jz11ik",
  "key44": "kjg8nrkaPrNqfS81V4D4cTqirPFK68t6VPbVFvKdn8LfAs8VmguhfkyrZmxUgkC73CJDREWV88iUKwRqtmR3y6c",
  "key45": "65tLXo7hwA63D59YVf1jDiLSo9fjLY8t6zVwrK4qnDtKvmGVBSuXW5aKWcmXLhRcGF41hxR5dgTZg7iAdaafnPRz",
  "key46": "5gu35Bhf4JZiimVqaKxzoBRX3fsMHFm9Kwc8zVCHJjurecvjcuhPY45a9YYSohSfVhdEcdueUh3xgXW4ZZsXTsNQ",
  "key47": "5jCwiTamtBXniJEWUTcKxzex3bnDa3bpsBH28Wa2hVCSWmDXrf4e8Cd6TwkCWtT3hKDU2H5rcJjrnwiRBtRH8TDw",
  "key48": "4TKZ2zfF4ptioLjpypCLYzipr7NRZ5iHEP2JFCTwgz1K17x5E17XcEL5XZjhXqjsYa8jWmVg1KGhPVWgNLCU4yK3",
  "key49": "2ynYU9iMc3FCZC7t44uRj6wwaafcj3cM5SLTzNubkEzAL6EbLTSYFs2Yi9s3CNA9ZPjXojSZtPC5fCzM1zWQvcyf"
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
