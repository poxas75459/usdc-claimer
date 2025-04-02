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
    "3jo1RKvFPzviNtEXzVEV6e4cS6An7qVvd2ox9acV6ykY7KRKcKPvWCxKxkomiyjLsP6zUnKehYuwRaT3ViqWS1rF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SdVXBuzAa5Rn1Qky1jQDWe4VSzUwh6ZUPf8k9vFUbJbqmXb1xqv3NeopVVfGcEHkgYV74kNcspQMuvbtSyuDmd1",
  "key1": "4xtorufQumzFJYudwSkx367q9hqvhPGgTe4oTUoU4qDDqCkrZXVwBAeQcY4oXhwN78ttRCu3fgwgTeuFBFbHKd2T",
  "key2": "3iFC1TqtbH9LnApZxbE1qoXgK3A3bVJMGBMrWaa1ACPx7AB8qD9KEaVKv7yuPJSBtywBJMvCbb8tZN7wywvWCziC",
  "key3": "66ZhSSHuAymaSd25CiA6mVD2rMighXF5Jzo6Kgk46opA5pWRBiTYedFWqDiVHiYtCN376mxDWBkxgBKyESGmvUdK",
  "key4": "28FHzGyQNWfud8QqcPDxBnAvZCdvmdRsnArzW8q4nWG2nBVB4n2NJEAmT68ndH3NJysyGRvcbxRLLHLbFyUJomnn",
  "key5": "5UeBYx6cnJYVsBDnH5DBqr1iZKR272FHXT7Ea3VrfMWSh6i4KzW41qkgiMt7LiLZZymh1A9gD9Gh3HuUK6BJy1sW",
  "key6": "woUmaGJnMEtihMnPjJjK1zbvCspozSYA9nxFxpvYkeD8DsAUK99eaeubqBmoHhdaKgRSgKvYSEjgUEbkaJ93GUF",
  "key7": "52A79ZwTzuWmafhmyhSQXnFF7ZC4F7WcYsHaVVc2gucup7wmZLs44hrwYKMzHpRoETkAJA8BDsj2JkGgB7jR7vcU",
  "key8": "4tE2MK89QDsb73qMbWkApWdyB3Ziatg4fjhsrG3stM1PdD7Q3F6NYQUGwAisNoW6gU5gifPed7MHMLDYzWfqGwWe",
  "key9": "2FespLokBDTy87JufAXvAEGiu2qAu2yyqe4uK2E9HujHW1DoBB6pXYgodJW1JYz5HrGiwQL8xsz1BPrX927y4bT",
  "key10": "36NANhkHEucA4A9danpZLEPtHGZhdq4z7rWVcbRHpP8m4Km98HaGXLqn95dPQ5mHQpwu8pbL9vVBKU3nXFBjPZR6",
  "key11": "3s34sDWPBKAbq5oyP8YFiGraVWMFEKvvcwLbU8oZJ7BDcny6VTdLMY5ZdD82TzZMTt6ydCp6carwsVNDnXV3ekAB",
  "key12": "2RjVVEuDM4F6Ch3Pov5dVosDUkLHfxCGiRGp4RjMHTqkPqSaPJxhLNJZo5svCZiU62SxjQ3XYETuLdRvsHXAFi7K",
  "key13": "3i7E3yscmMoAsCKV6MtTD4Yp2xYKQ7uVTuXqeCPXCdzBm5s627eUQSKMunLrJ7ros2jTC8ET2HpSG4emtTEXVsEo",
  "key14": "43Upn83Ywksb5yQCfRk11rHFs3DckgxRJ2usR97joeS1a5XGqr1s8vkgjX55SuVnpZXiD5uMmvbXGiEsL13oqDM7",
  "key15": "3Maxk8sX6h9byr2FKTZeFooC5iEYQfNqC1JPjrWDS6KqZ57ud21bc2B3g798aThUjNPeoTZZqDoD93eFi4VdwJYd",
  "key16": "2qJSsB4Ca5HHYwTde5Jt6aDVftPd5ZahDB7m8K6uc8pK1tH3XZFFf6Xzv2QZV2iKdRkwEkeLTxmYZ5DSeH3CBLj7",
  "key17": "TMCc5U5o4KSjHkSBN4CQNiz3kGsTBxy4yLJiBZ9JmoTrwBaqWoy6kckfqZMRqwWeYpNFMed2DdQhJZVSXAkQaQK",
  "key18": "53ipSZaaDt5qw4quHu1ys4XXNstkPFBxkX17mWcGE88cqUP5JhYnQk6b8jtsGbWWWfkximbLZeDjhySfFyTzCzEE",
  "key19": "35o7oVVfz8Q5ab7ZWWeqvrtMDjWL4gXWmh6RvrYqhki62QDww4os1Bwze5bwtJ7GwpH3XNPCNJyj2YhWoFo1KUu7",
  "key20": "2bTY4hZxQWp95n5UFUSjcdqZ9A3i2RRopUJwLZh9yqZDft3P3QB8u32DjynUzSN4eMU3cEdPLKpU8ZnnXkJgbAG3",
  "key21": "2rdNQxeosxX1szU4b4xV6o4Ce1Doj1d8pXH6YJS4N3QLd7kGdowccRvKL5CYqwdcRxLp1joadEMtBx88548SafNc",
  "key22": "5z7kH7LAWJkoaLYS5vj4TBTEExQ4rNUN984jyGSC8JWX4RWLZDDiryjiMf4wbDJ2AKPaYBLSYb2CfTXYrpzi3z2k",
  "key23": "22adjw4RF87EPbir9DWLiM96MjCT9RP6CmE8y7Mk63x5bYXNyUr3UXmdo1eypHmamJWeZKHsFZYiHjfARGfsoa2n",
  "key24": "abw3sTjhUT1p4Bnoyagu7YmojJdQeT2Dpxp8QKt6wCnH4VmeJ28pBKqMsAgXj7WcFCzmdkwTbER7X9Lj4AM5FKh",
  "key25": "2NntDjr9KjMYHa5moDHRZhEgnQZMR8JYq6tBfbYtgDiXYWCbrVt7d7P8SFipECurdxW5pVWBkiGZeZCfZ99MWabg",
  "key26": "mnRGPwVGnjFiKF4JBhXERVfUMmFecQRBUrzVd1tGqJohfEhqziYaH27uiKWhp5hQRjM9kScbWxJWywrpsYMfcNS",
  "key27": "49Uu67Nu2oJhkagnJqVrddH5u9dVNdUir7nTbFDJDg6yCXxrfasfsvBPSnFLk9LxTpERUr4Xmcsp5ro8URv1JrMo",
  "key28": "3dmUp5GEnmDDEXuVE39NeTG66hV42bvmD3ZtjGyA3rrPghyRG5PDuz2hsUUAsh7s44yQpQV3f6Gf5WMgu1AFzzEu",
  "key29": "38wQ9R5ffgY9iaepdDVpAsjERSs1FiKRdnZkZt9bo5adWamUxKyMmT1WpL7HRbsra249RGvHaqitTXgsaHmFJJtK",
  "key30": "32bqmRkdE6q4WrU1uf7TnfmjqcfoApvPCfPLLak9eZQ2T7bhdxx4MKP1YFuYJ2YSsHiTnEuadFengoE5Y4TeYEd9",
  "key31": "5qPM2nxikFT7DanE5smqtPZzbDk3GNDMCTvwL8ChR5u5oR2FAyVYskLWoPBqcWGSNBLsoTSsbxKNYmRGaLtUXnsS",
  "key32": "2zLB1cgq17JV81s22JazUCZfPNFBet9yS8AWrDAigFaw4GC7ijgSoz3aoRULkRRjoQWKTgJfrRVB7K1S6XA6MSf4",
  "key33": "4FnaB3n1sNPMQCGR9t5HpWKnKtDWn5y1Lxhjn4ZWA1rWuR7j5K5MBxnPzp1ZbYtEAHNFSWRoZS19qpoUKHXPhvke",
  "key34": "3NZdyZ34ijPzhGvGqX7mHA5tFGVuEmtxioUk1F4goPByr2YVrDejaQcEL1eBK1moVcjTMxs3AwfC9gPknHVRqoyD",
  "key35": "37WvwRF7VDkCqN7aq82EWw9kWQBHKdv4C8jeTZ1KDJ6z8pLXVqDhF7Ei65vQ7eEtWV6H52xxv9qLW9FuhVuzFcMp",
  "key36": "5QZhroEFGXBg24CaCvhRGrWk2EeU1SY9se3djAra5N9hPjNtPULi6a9zBSnbLnbBnXCKkSaTy18doNVwQMsLEdm",
  "key37": "Gw77P2tjCwtkhv5JF1KoU6FAnupLG5k9vrSjZtmRWkMu4bPXaZxAsfJ3vuCs1yJCoRSQRVneWfWVaTorsJzKsDg",
  "key38": "3TmfCxXBs7jHPa3h3Xo6F1XTTGuixWtZ116i9GVgJqa2q56AR4W2Ci2U1GSE3XdTR1N1Rvx8VSNQmyoQ1tjH5VTW",
  "key39": "5s6LwL3f5ZDq54UttjAGTYtBC6DRM1zQyaYgTEcfb4RTYPMH4gUWJ2bnHQF7D1p3ERaKRmeCzVsQJhYQM6H13Ubv",
  "key40": "4GL6AbstQpZVvgBMp9aAyjQRYuXq674XVSodugN7rXGRZBsRVjW97HXorQh4vHXhmiTgGJ6rEbdcMErUodkwV7no",
  "key41": "41KDzCv6KXdsSLu97tyXRhZfWj1JrdB4SRfXpfq9DfnkDeWJ5UWBUxvS3BtJYzpHCKyNSEqjYHiTcDbSGfbs3yVt",
  "key42": "vtsUw3XSzz1PzvNG97ZRZUHk9mwGeMv9rCEjQ6TD95oQQSWvDsYhnd52yp7hQGDii5pCuxTqFM2gjKNY1jy3qJi",
  "key43": "41RHfKVmsP4mJ3wNp4Jdt4LFujbUmVNjmXFYJCaC5rMYRRpP7j7UwwmKjF9sJVgeBv8yiWmYA237TbTVYYo8VRZk"
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
