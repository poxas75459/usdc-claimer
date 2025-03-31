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
    "2KQFBYUJnG7PeKtsexHTZqNsrS6x8eoTGjHhgAhoxDZaBWsJMp2CQ97axheg3g42tPmoVBjZD5P5ZcHjoBAF3W8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uRbBSbmD1wU8VnCbqtx3STnFcBJB8eCm9MQhfZwUeuFrMRM8DQPY8hqqvybALwvzPxbXJaGgYkazhdr52yZYb74",
  "key1": "2tjR1Q3m1Sgod5hmddLUAH7gsg11sWog9mYJSDCbiVUwjwRxedv2DWeZMsJLN8qv5E7sddvSYC5d9HqMJRQBnHhC",
  "key2": "hw1Vamox6uHdhc2ZqgSWFU6sf6xWHam24pGTD74rezf1LyHzLWK4w8XXBRTQXeUQuUshWBuaRoPKVqvGVFEDSzr",
  "key3": "58zNfgiwFUKM3SNrWmosFqCPV6jLLZRQcMrc34b9gmQgpKX8zxNUCvSQe3cUeYKJG4bc4u6qTGwVkA2DccKSSbYp",
  "key4": "4CXXqEZRumCnuGDSb2jppVDzTgyLu2zUdztFf7vGVTaPRnD7qSp387M96fVCJocaswT32fBXdCv6WgjyiwhWjvpg",
  "key5": "5ZmJxsEg5vq8BKcu5yR7nkQyFLxsPRyjVE4WBGmMu7d7pCXAX2CTfKL6StfKccipmRhNZhRZC58S4VsB9uV7SsVY",
  "key6": "2GKy8jWae5EJ3hApDK2nFwpF8dkZpdjqka2YB4TfQnLs2fuy42uvZLq6LatH51VncFA6qMdGSt5EsQbdmfnnQ3go",
  "key7": "5F4DS6reeRMTLTs3SY1ZVhg11SgmtHvpH1jDnAaqADGj3gY2Y2nDxzHPMeWaVMuR7H6XmLAGSfWZG5qPtMNqMR6s",
  "key8": "24V4KwnuQ4phaVuebffuo7WMr6BUgt43pYHRaL9oJqdfMcnGpC8BGuXkJHEw2HHXaKDNPyaT5WqMQdM3wvyn8JED",
  "key9": "LqCvHBkaXNo9tpYME9oe2StUWnd3LfJGu9vL13SCvrJPTs9CwXHZiphiGii4JKjRukDTumazFiMGt3JBzgbm9Fr",
  "key10": "M1cJ5XHHwscbqwg7mm9tkD8iQPJLa5cwjtKSszS9cvod5SRQL1wmvRUrYWZZRm7pJ5L8dhXLwnJ1X4jYKjHyEin",
  "key11": "2DUCbN93xAnACLNtaecvp4Dpqkmx65hbm5FheT9tbNBeVg8jaVFW5uLXUy23Z398AqqvcXBJoJNoxj291zUyuWut",
  "key12": "4n1e7fvEdhbtpAWnjnhmRfR2NGHM41nqeVNiBofzJEsp63WrgbzGqHth8GvYqqhSZemvhxHzdHhgnxSyqBz9MDAZ",
  "key13": "5nF6cbCgSj8qE18gifGADzJdWVBXxBFJNgvAusjivUtmzH5G6nZbDmAAZGwKA9uEDGrLttaKn3SsgUDZH2ggPPjF",
  "key14": "5qNGCR2K8NgthR8mmPDmjjLkWc9dkgtGHWLNAXUn7T3FmBKkmV8x1nFNHssFMNMYRZfBfuNvtVywGKr7FFYsccJm",
  "key15": "2vgdqWaVwJRvbb4UAQMJ5F2uLURtNWgjTPGMcrrebZ58By4FniFABuSGVeKYkV3Z1zoGXQ5Kkr6DYQ5U1ukqBney",
  "key16": "W28NacBfqVqT5L8pTP498krx7oSajobiowJtuTs9mvwLvXnJWHHHH1QiCU95r7qAy1TxGktVwfZfeGz5u59dyUT",
  "key17": "4qYi6oR5VWfKFocjnCXomzCc8ETjpFcisxPSCWugg4Bv5nZz9RDJtg6ia5nxkj5My37Nr9MfBSqaHenV5aXD1XC9",
  "key18": "N5XEPoahMDcfrVkfXubTWNbKcs9t5r2ffy7FcBQ3UYEp9uGLeEYFiecFkoCRYmE9jLmYZteRhWW14xc8HySfCsk",
  "key19": "2LjXpYWGDKuzKf14ccEARihBHEruY8WZRmNaL2ANcMz4x5K7JMhK7BmwEkFv7FWeGRTYaupPcHq5Kr1mVvgH2HaM",
  "key20": "467nk9UwXsK6wMfqYvKRsCeiTDYBvpi7MAR6K9jUCDmzE2PHgwTELJRUcHiC3BEL8SEiYPMnRGqNg1Uobe2a7NAz",
  "key21": "HnAjbd1VBMzWrewVKDtrodhxvet4SceVq9UobFod5QRckZWnCLVVAMNwY7tXF1PS55XbeBfsFJN13DKhMcXgu5k",
  "key22": "5Si419zEL3P8YTCV5Vw2n53LkJpp8gTpFxMwPbhEAvr2wseb36EmsepRMwVve2uGPhpG3y46FYhcDszePdQL4ULJ",
  "key23": "47VdQgWCT2Np34SXvaSiape6kgporc3DnexTG4uGD7mCK5kvGedhJkDiY19P1HbGKU1z5ds7P63fAmo5ivp9bxuE",
  "key24": "3yMm3bHbiagCvi7DaSRsSychAKyWn747TjK9hMbmundEevkmFvtUtFDunpY1N2epByR9KzTSsHMFwZgGiG3E44vG",
  "key25": "2NuNHH8HsKH8AxMh74FpqHZwQ7mGbhhg8dVNNDoLsa7r92LqQJrvxbDYPFHruibJDKAsU7XzX2r4WxorBqUD3Hqd",
  "key26": "65FeUGSdbnhTxLzEwrDXLg8n3zHtzP5RnRasEFfTXPYhMpN9gxWZSBMJQPXsBspNzdNMdzC7zcsGgqCYZHpLP8rU",
  "key27": "2weKyP2SzrsJGndv2AHtjg8ohB8ZHbKCf8jP8iTieoSzw31fCjFMkttoyjFMBBo5v1zW6VttFqCKEeiiBnKyRV8L",
  "key28": "VDbREBwSFBRiMta7d2zM2Z5R4wtm9AAvbf5VzTsMWxseuWgx5cHWZqN26S7EfkmEGXiaJ45vTqhNHxnvC6A6geH",
  "key29": "34R9PLWNQbd4cjx6Cb8qWi6zkqaq8b2LDRSq6xybtf5Yi3vpRR4SSTCKmtfSsxjCmVTrtdgNdbbYgACM8QsB7fJJ",
  "key30": "2BrJSFtWYENuFwTqPbqNcgdgtBxAU8uV4tVM2ERhsNE2eA9DkifJ9cL68PR5Zc5MqRQKtfmG1wDn7677mZKMU3i8",
  "key31": "3LCLmEtJK2gAGxtFR69qFsf77SjuBnfSsQeMKcXXomyJcy4NnBuoVPjsVxBebSKk8ruCRsLCtxbY4hNuoMYguDFw",
  "key32": "5fh24HzSsLaUuWB7XUyy3qLanF9q6oZaxWGauYbmbBdeiYEeRkLCaPqxfrL3MZqgBcDGfoeXk2XcscTpNWd8mBzc",
  "key33": "5LQ6LvzNGwhUT8vyJxyj7Z44S4r3wE87vqKnjiYxSrgnXyHK7Lyh7eKQosYwLa678nv6Vacmqy5vuqQfTEtYAHFn",
  "key34": "3QeqxdqrcCK1CYsuD44QJMQm1qhTCZ5nGmN6GCnJUq6cN9qUcYp3Q2uzFyAXg5yAysdRq1W8Ngw5KD2fe8NNtPDP",
  "key35": "2wqDtHrb9MWXRgwTieSCDpr2oETPD7x2zawwt1GHU7UV6ivRbr79vkagKRfdqpsiJV6TDe9dAFMi6KvvMPgZYWLJ",
  "key36": "3K4EoeU1N2Cd71QCfQdViD8KcTVyfykivG2BS2qcy2b8NDCJeVsAVaNH16aVadLAvfn5DkjEN6nuU3sLQgKxqAa1",
  "key37": "21eLh4ppKMjhC1x4CECLmxukR2ShvFaUSFq6jDAH9hs4DQZy5Qwqy3jdGdyxbidtwz9GFGVWB3FciHJ1AjNtjnTF",
  "key38": "5Hh7DUdaFmQTXEGzUxAygbq7uxsJKgG5Yks2xP7kvivfgYMky85SaXwmThH3yE8Ai1mR31bdXHci7Sae6zwTauw6"
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
