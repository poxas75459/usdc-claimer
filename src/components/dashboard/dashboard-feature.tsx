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
    "2RUzdNhyimT92b6sU4YBaHRbLCs6JahSNKMPx14iump4AUF4UniVeUywuQJ4VCu6yToDXXoohRnpE2pnK2C9WmuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "phh24K2BEc5DGPueuRw5KZfE8qnNoAHMFqRuLpy9PhPjE6Lgfk6mKTYAEWmxBWwmABKWeEtbv6etAqdvKBGkh95",
  "key1": "3ucsqsMietzinYUjB5Zsk5tGuyftcD7qetdUHoRZMDvQ3bX5SuZwWXMBMGtkmtcNY1jXr312u8pwrXbx2VsAnjbr",
  "key2": "3aE9SqDsd7hBkyuwBY9YguUXqHSTk7q9L2HuYugj7LFizga3JYPMFyAPJnFH45Fu3tJmasnKZtn1TLK59eg9A2H7",
  "key3": "5oVEGhhmWB7LBASFn4XS7SvfyYMJuhqBRyVQbVUQmuwyodpf26Kw4s13VgxUzAopzhSGXxqDbaEjiEUa5tvNCiLX",
  "key4": "2YfTZ31uiMwy3TPBC2QYvT3fKKByd5ENfJ7XXXZP1vdNAKPEyFjDNKj46EF1svtGAd1UEiBb4Mp5SEvE1J9CZfui",
  "key5": "2bTdRYRusnRdpXnNEBq7tjNSuisoervy3eD7nJggt6JYVx4XoJq52pjt73K83TKjG7XdtLHMjpG5MdhPSJd4uZnc",
  "key6": "3e44U6JSm3G3a1LyFmZi4imzP8ViBRtEo87gsZuHRrKieF5qgrbACdC1UGCSt6huMAP5aJLcS2P9Ae6462Uo2wmN",
  "key7": "3hhd3aDheDHW8BpHoqnNZJXnoqrcLVVhJqtG1wTVxoCDBfCTXq4ZinuCm6n9hCZm4RxitwNHwWjM8C9DgMxW3KpR",
  "key8": "36zefFWZRy4DKWrYxAz2v81xDBriMsnFRo2gxU5xchiWzQsZLyED4u4yquQYQDUA6ggsUBbcniU3KA7krRjom9Z",
  "key9": "kMvNchLTK99m2HkEzaLHFNoThBxnN9H129QpN6pgk2SvgM4eaTGa4KMVkpxboQp8CgpiQt8nPS5uc5no9AW7xYn",
  "key10": "gcUWzSeajTCjhKPc1UJhgNfYp2Bzm1jdgzwVr9cNi9HAX5YRprL39xhSVMshTFiTYB7ACbL4DsSrzk1QxAidNAi",
  "key11": "3pHaB24GpkUW2FX6Pc4AGaxNg4h7KpLBwQQ2JZoLGFcEUao1sz24EZ6dBVEpxAkkptAPtgPNH1aJ72G4avdbMmBK",
  "key12": "4nAvwYS3K15xzfSq52jQHKq1qD879F8ieNesmNE4AgqigyfuRqiG6zafq6MrQpNFUzwMxLMZDAiu8X4FoA3BUvBV",
  "key13": "22HKr8SdXqqG5omEDEzz23TJEFUe6skCAZ9AnhUX8sZqxSe6ocFcHf2TFA7AvCTgJkVfVuvAYzMdg9Kd2DaZ4hsu",
  "key14": "5vmRGsNRxs2smPmsb7U3ZL4aHvyaNhu13fikgoy4eoRWj3W3ssr2gHkq5yyxDXiLtDx3646UTuHyy6hAVWtRhk9E",
  "key15": "RPjSPak6HB5V4HRq8nurW5NPj2jfcSsmkGasyK8ZXrMRmuMgmrGRycJeKAFvqSemvtZbPR2jSqpgEP1dfGsbHkB",
  "key16": "4Jk6ZZHjVTnjFdbYSzdV7FWSxoAUSVcXnL21nRC9ns61ocFt9PJB9DpuRytWAZAj5f37azYmg1eGzTAjn3bCxxZ",
  "key17": "4rcC3TDD6VdqubHvE5xuVpUXYXfLiBMLRT4kcfoaNDcujBmFJj4Pi1GEMyQCnFbSfVKQbZDoTRGXKgGu6figeZ83",
  "key18": "3yvDuYMYvXYaZRLqfCTPSiesfpgECXCN2mxQVfQFQt5gViJC6uszUVFb1ytBkdZ88n5cUUDVyZ9MaiijRaaSoBsv",
  "key19": "gjHGXc72vCZ5rJTP3Zx113gwkQnYrdPxCbaMmcshc3QgoV5Ev1RQRQgKe1pF6JknyWhBdLrrBoxiDoP3UYG1WWm",
  "key20": "4ZjReW8CHP1MWZuRyV6XtvtXkNVBJ2EpWijnoWY9bQnYS7xUJucYJcU79iSG9AD23uSnpZF1t2ugp7QpgJY6VFft",
  "key21": "4Vk2YyA4avVXq9PGYjusTUT3ewY4vSLeP74Bc3EibN1n3rjGwVPzkWsEnpFAQbRrY9kedE87CWMiEtVjmWU6mq56",
  "key22": "4eJLdAcmPXgSmmXJgM22nwXPzEQBzvSBi2AEZxadgNSEVQHmxb5hFtCCSraRoKJNT7CALMiX8P279nRLVHdvxRQt",
  "key23": "2uDrjahTmo7uJN1D22PuHCc2tCBZsmxCt7QGgCxq6gBWb3jsJcMwvUVKAkZgj9S5VTJzY6h9tT5oZe7w9uE4dGsR",
  "key24": "4nWJTzf1xaSD57aJBKRVAhHbaQqRm5Rb1v6RUxv8qfQjDgeSxprxyG38vTtodqtXDgeKj7NUNYHe1cqQsMietVcc",
  "key25": "45fL2uKgWyXHeCiCic2hwW6P4acCt5dKdhYDXtWFmKs8Zm2DPJB3PLJxKkEiGJtZDf3SEwCKgrQFMDzLJr9X2W79",
  "key26": "28sxoLo8jXjPH8CRJVTjmVoReQK5tZnm7PCeB7LKLnFPGiCBr4SAMgLgqgpJsBk3CZ7tCbxsGNZqGfYTJVPTYZGR",
  "key27": "43oTc7yGWXBuu5SshKhqmGPytcpRbUpniyGmqfD8FG1xTbY2wdeGgThJJUvXbKsypXUnN9WRRp4SbF83fLA1rfTb",
  "key28": "4tkJ17YRYY7ikU6fAmDT14udHjag2aUTi4qVYxjbZAwonu2pFW4Y3Te9WnD5c2QHkjzGz2FsxQEJJZhHns8g2cHE",
  "key29": "2z593Ewb2BmnRbDJk6R8gjhfvwSdJumaMFMwSdDEhtbLJXSV29gkVMcziY4ksfsyZSMKSR5QHVe75vU2vkSsEnfp",
  "key30": "2QMJ3vEgAPHFKpgQssuPS324aSLiCQbp3KwNe5NqYQBM6Cff45DYPvBWarcviFzsgXjYmwMysyvbcGSkbDMG4zaw",
  "key31": "5Ui2j41PUSugs44oCE1WGk8WW8ieHyJHykcwidAXu558ZaJdcFtc4cVpqoekSAf9Y4k2ibpx4pqAR1mteEVJwjo6",
  "key32": "2vwibnZGXu8qydWgaJcdUfh6uMrBgxms6isa6o7G9sNSY2q685H1qW8jgu9jn4FXcwxAUb3yxx3LQfJFUjF6J8uF",
  "key33": "evzNcwbPxQDidMjG4duWZCKYrTUyLZxNrwRinFB8J8ADBAtHrDbMEKGg8VuzS712V1yR6tUGYeeSMVC8ph27Cew",
  "key34": "5daSaseTx5N3P4GzJ6U9NMjBtnFWQ8j3uwHbM2d9SHHhZBjcSts3t8zBnhSc9JjFouDMDTLE2x8GcKcfCNbr5VKi",
  "key35": "4vtaDF5sFvPE2QUZX58RfoLrqPVSAa58GQqCqqaDEAokNLM5k2fEhHnyB5DLofFqxsbkt4bTDTRxdQS12zPmyLE",
  "key36": "5J4hf9mPKHhTBhB9BN6qZP9s8jdFjfBg4eoKyGFwfp7324ujg31TTVQoibmLTsssKFLZfBhzi7jDnZpjMX1v9upS",
  "key37": "2Nhx972PwZefCJCmuAKqBvvVoqykFkx6b8jazFST7mkHeubX5hg1yan3HDfappdGiveqMAkx6W3nfkBBCDev2WiR",
  "key38": "46huckPrgLyoKBHbMc4LLok3Eu2dondgBENVFuQaJTxErvBwEPwsyUkD1rZ8XyEsvK5bFQRXmHXzAZ6xFNPqSPqJ",
  "key39": "2vYjh9TBuSypPQY4RNnvjEL49pTw4dXrRVVQw2aVh4AQFLiB9WbR98qxfVGCxQQSXvYuQj2aKxDo5UxrE4hwCrvW",
  "key40": "WsV6r3KQhQTtMUbc97XE7Wn3xHeSGYdKvv61fGu425mBsb66sVWSPgY7832BvZTc2WsjRSSQ9rSE7N1631LXhkh"
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
