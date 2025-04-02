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
    "2nbfgYNMW7bKdNX7h76dV6xsoHSfjTfWgGhKtTMnz7KHCjAdsPDfusMK9hH8zzUzbfkGjcv7rW2Pv4Thb695wbjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H6wjT8asSBAsUHQAPqwqzkf6n2ywo4mDvt2ZPwCv8dgPexEQa1UwaacahFJH5Hu8TRUMVRt9hnEs7emTto7weVu",
  "key1": "67qFUrc3mgc4qRRPZeq9WEEUvgvFGKFD59urU9kDnBD665yHiFygCmkNVHeQVieJ73eCpwcnJ2XkNmJGyQL5ZyFn",
  "key2": "2uhbwj2Ysao6cdkAStQ7aQh1hNrZGQdd97Qr6oTvFBthjrStVFCwnENEJpLHkkHdUqyv7TBf2ofA2DLghPm8q1Qc",
  "key3": "37wxYoJS3BesHLBqLf5sYgsHFhM9spHtNCrW5GRQm6sznL86hXfUHXcqYRM2DG3199HpjUZn1MFzKKSJ9V9dT3LS",
  "key4": "5h9Dw5kPXvtaCXc7NLzu9Xit4qbZYQBGMthMUWAExAzzv3umwC1gD8hD5ExQ35qt1MfKwVSa1aunta85PmLoEJwP",
  "key5": "2DaoBkDyyKKEWKdN9rbk8AkGDmWnH9W3wYyPxqGqmu961izfg4LHD9ji4snLTrgKWr81yaFFjUC6mJewAkCyN53t",
  "key6": "34nV7TxXMRVwYdHqHJGBdgzkqXaNFv5EzEnJTWEdM9c63hsMmyV1bF9R93HSjxy8y3ugMiQqQiuD2QKRB1ATv8uY",
  "key7": "3KLi4b9SVakCn9pwMgGUWN9Kw516JHhWe1TRWEuQ6MAZtbZdSUfdwLf1PEu7dyHa8AE6gM6wkp4warfNUXb5xV1q",
  "key8": "9XyWWho94hPHR5H63fSLBb9f5fANeyYzqU85UZQA6anQE86udoPpoasjmHArBzeY7xdT6gayN6UPNF1qxKwX9tF",
  "key9": "2ZDiwrZEC9K9sjp7AheKAbLZDBoiqQfovn6rRgvTtA9oxyXCBgChq2JXQVjHEPeJN6SZXv2N4No8LWeYcamv1a6v",
  "key10": "4xyj2E8UNcMVQir8AQ9Ur88A2e4wY93PAgAw4XQfaqjw19RQ4jad8uSu5vUKMneor85PHZwrv2ciksEEq8sH5yWe",
  "key11": "1z3nwkSSN7LxDXKJ6okNs8ig8NVtECmyAeZuLzpsfgaETcrpeMAiXVBzWTbvra279BDcsFDVQJt1ADpHx2XzyT",
  "key12": "nsPzRGqnvq2ArADr9i4xTtyupGTHTWuQ1WxRrJZGi6R8seprpRu89Qggy2evHbPYTf9o7myaDgGeeR6JbsiocQZ",
  "key13": "47HU97AKLNJQDMNU9EHXWiraiAoKEa9bEDRKihsqWC3BqNUcZqD3SvX84niub6PcrKvdXhuRPsEAYbfwcsbP8TPE",
  "key14": "yktCHvK2eeupBjvcbVHze9wJX2vY2s6RYfWPvvgkS3yHSP9octnPQS14EiNZv4mdw3Pmj8esLSWanTFn9bidU3M",
  "key15": "4ufmLBPbGZ7HAUBSTTS29LZk7MWmKaiDjJ2kPTJXDmJHPGqRA8NPP5oMd35JLN2aWsBAGsRPRRPV8ruf6ZKcibXz",
  "key16": "66QxGYBiRwinQKJ7eg494SqDTT2yZGemJWoeFtjUArN526ExS2bVpC7Khuqb4VkqJ9mU3hq22Z3wqDMCBqaoBSzu",
  "key17": "5nhKk8unixK6KwWurNqt3rB8kvJr8JZgWq4mLzrH42bmky8DWrqKJPJSHV2QjkyBWsduRFqXdeTvYWUZHPCav4ZA",
  "key18": "2KFjtWr9BbuKbN7jRFzGQDskrHK55zhoHjemPKTyBySBhER87U1BGHkFbigEgT53MeWQ4iBmnikFu8NnQC8sWdwT",
  "key19": "2AGJujVMKv5VNWdMmhwPabgs27NX9Qpts5SM48JbfeJwJzWAj8n7VJVgFQMzCdioa8iauu7S39GpiBufMKRhiKvw",
  "key20": "3aDARnqXGyTEwhqSqTSYu1HcYNYxsmfQsUYQknc8BnnEep8XLcnuaiyqs4mbQa9KiXAHBGZPNsQc6SuiWx9Qt9JG",
  "key21": "3y3cxpRkLaUsAjTRHWHWY5pQJSvequW2DZ3Z3iHqLPhnFCes7KFFAYHvAZnSu5R7vANC1hgKLfabRpY2QXgv35Ro",
  "key22": "SZE2M3HaedDxbBvFFhU7UKdKVthaeTQhdnR5iKxLAoFao3m9Xfn8tNE5Y6JybxAEwWdc7FsLmCJF4F6mXMVYxxS",
  "key23": "5UiLSRQrXftf2tXVxt7DtFFVaWQeeJRUApocQE4tLeNhJjbFHKhLBribbNWbB6VAxHgK5hTupd3nzZeVFVkdTW6y",
  "key24": "4dq84RWrZGG6w51MX8euAJ8BqSYrnf5SUidgcBPnC9XTcCDK9dxSrmScTvGMddR5B3TWB1GB7e3F28PhAZSNPjg2",
  "key25": "2YYvUCRy796LXQ9kCwRxxMFaCGwwg6xtA3nA1TLecXEXmuYZTtqh4tHBQNg2m8epLnm6CDX6g4jNiLaQSaXkgS1n",
  "key26": "2vfZHdpDGbQK938mREu7V88VbrBYffyziY7bg7eVYXth63TAb8xfqioe3LgTJLrx5ZrVguy3n8trcsVviVwqhsmk",
  "key27": "2FesDQxLgs537pmLBXMTPgeZjPw6UDEP6efYgsXVHVL4MAbve2uLoyYnXfesULYoEkDmCeDifJ8tSJMvdKvCrYmK",
  "key28": "3PBR5y3m7MBUGYyA5M3M8EK8rYT7vyJH4U2sMiamYuBaotQB7LcywLmguptPQAXtvHcWggCehDnKH97rrFyg1hRj",
  "key29": "2mRKKnf49h2bX1CDft41z5J7hdLGXgLVF9iJ5BAdWayHUo3DKy9tPP5rKx4GomV5HJruPbS2FH2oWEBdFnuqzsPf",
  "key30": "4LNDLvRJE3QUgzHBg28o7jGM44qTwtCqg29b6P9vAKiA8ri4yWGSHK3zJQiL9MXXNMB2pq5vMXsdTy4KMbzysfFJ",
  "key31": "2LPBw4gFCmv4KR8KNmT233nnbXHicnm3E91ECo2hQ3B8snvcyyyathc1zzJg31BtVkKYxAbh7qA4CaP53F71ciMx",
  "key32": "62T5JHTPu1zojzYxpqeysP6HgArYwuxcWmEcgCLfEvgTT5HSjftZzWvLubqnnSp5j8n2RCazK3SnSqTy1EBnVhd4",
  "key33": "4dLUjYDETpGwftqHedE8e73B5akMXzrZ4xY1d7KF3oDte1mqQ27r3rDWAd87r3U1c8PP7A7TThYZwmsjpgxTQcj3",
  "key34": "2i2YDkRsc8JYrF6x7iEz7MHZyZ4YwXGuEJDPvUVJ3Qmxd6S1Ddx8qQ8zr2jDggcoS763B7z1fSjGjpHhBvPYyzAa",
  "key35": "4iH1hCdRmwPLLYbvcAvfA7qs3Gk7NLQtW7MhkDFoiuFz9t5rCNDiCRQif2LMxuDW2o4MpxsYSJfJFzLvVyG9F3ae",
  "key36": "g8tWWE9MvffA4t8WVRmcEJRdY1tPPK7PQ4SPud9H4NTfnmzto3doRXsTFPrtXcFUM1TdmVkFTVQYKUbVQQNf4e6",
  "key37": "45bG8sRkXrbT7iuvt33gDQERh8k4QS2eDGTJn4AbTs2uPJiffwsmZC8L85Q8rh5ir8QTt9KYadfVdnHt99g1gMkd"
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
