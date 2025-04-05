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
    "hECYqfKbytSh8UehsbVse7PvhtBhBznmJcTRtchswjgJ8ajAAuGVv6ybHQZ4kMJi6h852Uy9fEZ86mLvxoML7HG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y14GBD478aXDSLoBXJPU57LuTpFbk1rmX47G5pdhPdKZWdbGtjBspE8rm1bn8sy69ZicvUCPyQASj9swKNoZ2JG",
  "key1": "3X7nk2xsqmKtm8QJE6q4U8mViB2Rrb8odpgbqgSzewZKkvHoujj1eETknroTWYRQ7niEi2VKm25o1y81SrvVDQXr",
  "key2": "5tq8v6d1C2m8zD8P3fvVtCUEKco26NB6rPhXETrunpdJakpsTkn5FXN6Y4G4sV7qpbfd3xJkaquzY28eLQ9bCLnq",
  "key3": "2hCeWZL3m9m83ecuxahsFtSEb91zGaT9oiH3ukXR3DEwcYYF6JRLtKQenbrGWV34ywvSc8HYdXGYLFkJRHfPzvNL",
  "key4": "3eVKeo1wFEDHxbA6xiMTuuUrwcBYixahhr7f8cnhN66VJv5AzdHe7x3i3qtXzt7Ha3sZxedEecYmzgStM7LCWuJz",
  "key5": "G3yZrZHCiRTK9fTdY3z4tiXn6SGdrhZWJqrXVt8nk2tXZj5WM9KA1H8fxg78EeEgyS8Pk4MnRroPymFKoHERCao",
  "key6": "3MGzdotLJnerfFMS1nc7r4vmgVxj15CEUfeXxmLUGDjK4g5djSz5GTpPqjbiNvBN9hYVnSL6vXfouJUrKAy5YxRw",
  "key7": "3z2Pp5ecjDMaYzBJhUk71FXyJ5PEPVRaxVV3Q4r5XYwDiwLBibATGZa71epJLtZ8gvV4kaRjQVcSTXVA8qfHiYJp",
  "key8": "4rhVTEDKYLfPmAnmDNGjnoHQ2o2yCnSz3533m8iAshpoLMHwyAMPxfT5vge6mmC5LZXroKT13qFyiBj19BGNH39K",
  "key9": "51ckpYi6nBJUGvJAUdZ7uLTtkPJwL2T9P8UVr2y2hrWc75dFiwYsKpCEiMxJ8gnC4r8U3bamyMHrDA2AT2sDQVxA",
  "key10": "4wmVGFcU7YGtUjpSDgG3k1BS3nzjqdD6xxtt1yz82WLKsRzAHp48dyRKNRymzNhrv5VfpDKvyjEpko6qWjtLmqUN",
  "key11": "5TqfdUbtKmB8fhzuPLeG6B4J8JKYViVwwHWRARySFp1oyE3oBHBLHexC8LPKZmxDWi9DCyyinpsr9XREzfUgwUvo",
  "key12": "47wRJ51X7LA2XFhLFY1qRDysAt3mED3mqEV9jFxSCYJvAnjK5czp9FnpWAt4rThBWgRScHFH8L4YiV6uEnuWFVqQ",
  "key13": "6u8UtLNt2S6F2YfyTB2Zw25gAsT5wUN6ACAXBRgZPFzCrMAbKT33AyeRetZoKVSGSzTXem2WcmGtetdFznyrU3U",
  "key14": "2Gi7ufkunrixf51HhafqhStew3ZG76Kz1m5rgzApbhgYzae8tEzcw61dvAZh5hqB95rSbeXysCS88h13PgfKfkhP",
  "key15": "3adU8vodK6vdMUsBbuhezm8Y2WsCexFiyYfXS3o3dT6oN2pNmcDNdLbECYbbyEeA7xLoLGPNoDXbFSaLaQUgxkCJ",
  "key16": "3hpryrZoY8s27A3jfbwAT67Bmyzuu4pL3CoZGagwKJoyXnqPWEkHijMXN2GXjktSkWghYstHLTXVRw7YdrpL7a1b",
  "key17": "2dzYCemwqEcdhamCZv9zhuFiZreJsgs4xioKbTgfdxcX54Uj9MPp2cRDGXkV97RWFmF9Gn5C32E6EbZKhHyHjA6",
  "key18": "5XPPVy6NQQNdYwPjaNFkiprHnTF6ZXUB3sTqMQusud1HnxsunYv2htrGpSNXF2JeKXcQ3K615a8WA9wzL8H6AdQ2",
  "key19": "2iSkxBtRtfoyjo5L5N4FW6jKrDmP5hALG1AehdiGL1x6zFeGW5t1bNQANp7sSanGC3Bjyk7hHSdCknTT4xeoCgWp",
  "key20": "5d9crc9dRFUtHuWFd98id3kU8kPjAJ6VQxqPQ7KMq9KewzQnAN4j68kVE2sZGaLeQ84afDpkc29VwXFgV218hxhg",
  "key21": "4kmYnWLcXbMQR7hNGSPNaFqxfh3C9o1e9KDP8bfa3wZZ2TkxLjcLDwha4awpGjrmNpNs3EhauKUg3emQ9nVtP44t",
  "key22": "3yt9VvyGnF1pFtU5Fz5Eoe8kerSCM5UfezmPZPRSZ3Q48DytAoqg2gAp2D8s48GmCkPxWfaFDZJurT8AyP6RZEcF",
  "key23": "QSrxUzXTxa4k4wjwoWwEZXsyUPchSQPhu88oJU6ieX4ei1aTkt2UQvNu8bzuztYBQ3eUDJZMpStj8a3TbEbpSXC",
  "key24": "vnfAkhdgX1KAYtLMVWT1yLRhDJEkicjb7M8dm1puC5Qh4CDtk9kafhcy54XiEnGfHQUGNiUZQkupftkfm8iNjFi",
  "key25": "J6mrC8bVuPnu3g3EDPfQn2Uvsk3xijipZ8Jk55y5kzK1ioD3KjszHZewcrATGqyAMGkuAJacQqBrdfmjXidcD9t",
  "key26": "2iL8GeGLD5WkLchPEF9RCEVYesCt3QuAo71kk54edE2KEB31tdDbCwRcCP6WiKsAFmqiiv6HBwDxZKhxHDGvr1SA",
  "key27": "HKoknzzyrGBJaptdD2ckgaDUjmwUjdRMeuCNZnvLuA1pMbMv4G2135bWZMWakXxWuz4ogStT7JvFJCnbVCAPguA",
  "key28": "AsLxjLk7XwigyYvG1cfexYgWhnGvST7C8J2QnMFRFEqXnptvfBwYpcQJTF97gVbthrjcTP9qTW7VSWR3ueXtdRp",
  "key29": "37og9sDeUNsd7aJkmuzcNJB5cdwzkNVJZbK8ic3Yd9jU9wQA3V2FUELAFJsWMaMcVWZZYAdC28sQSHMghzpocLaw",
  "key30": "5DpjUezDZFsAEGqapPFTevMRwS8scY9F5aG8ZZ6EetqoNasroRdeLCevBebJtGY6upGA3a4bxeMQKvC4GVhjX8tg",
  "key31": "51Ze4QobgKym4D6G77BLr9ur4e1fJHcK3gSdEEwoKtBUauEzirT2eWraPgsuUoCMdo4egZvuS58DC7xkydTEzuhN",
  "key32": "48hTzJbUzWREY8ukSoBuBoKxHzq79pxvC5xZD3KV8uVMDsvVX6FLRv6ZpAUQCBp6WnLESBRCx6UYC333nk6zgMS5",
  "key33": "4FXGDApnX45sdfAvk9vefsS61nW2iTcXiR64oXMwy8Bi2pDhsYXYggxoYVkqF7Tj23XgtAo9sUCjJA5rPXPmxhBV",
  "key34": "5dwqP2ZMtxGsBuTYdhrvE1irmiZad3xUyszmE3yLaMwUZqGDucQwRF9bthowQMgmWCuWEeegXPUFw1TxjjMBWkdj",
  "key35": "3mQVdPATuu66tqEdSFigeMaDBRpREEek3bk9RTbeEF9HhQzn54VvN5Xuo5NnQqVa8i3aVafbCwhZiTf1NfDn3Pyk",
  "key36": "3DG5CGQGHkzFoqG4SRoyPoswz8rB5i671D8mG5NUj6JBMMuwD3DdnXjHfbBNYr7JSioT3WyXnNVP8NNQymSAGGYL",
  "key37": "3XPaF78WktMvYnyEyf3wBVTwzRwdBm12odfCvB2HRwDUmVoiVtv4429DjErdgrS6fJ5FPMWLAXVzCnNDE9FDrHCJ",
  "key38": "4DrHSchZy5upJ3gJDhczqxYPGvgXw7X5gA2fSXggK6R9ufaovrQFMA5u5qwyhsfBDQCvZF8sv6M2n22BP72wfvKQ",
  "key39": "3Rno1AoJbpjKZyqWzXQqiU8wiVh1pFG3TzweMBhvpr24Q1YmLj3ZGUCHod14jauN8zBY7RwLor1fTHEVwSbZ9V6H",
  "key40": "4Fr25rSgZy9BP354uU8PNazW1izQX6ufGzxdDgAPJfn2xT12T1XccRNcyHV3DENmurLB6MTzJrPbCGyzGDbmeMYn",
  "key41": "38wkjuvJPEB2cqBAYJDk2N1k9q3TjtXBP1pCXww4wfMXW4KGmSLtXAFrhQAmEe5upVuGbfqPa7ajNzRZkrU5DYQi",
  "key42": "5Ca5EV9czw1wr66HAjkTS6HF2EWwCNcjVNXQrSMHhyZYAaHkJamoLiQVEnHtbs37yrk79gFVk9EC8iieDGTiHuat",
  "key43": "37UT2GwqGUhpifrUGA72JnyJg34RjqhstyCfLxpJ2MuNWE5o5cmcSRA3YECx17jgZuQWtUJmQhR3oc3soUbmYTXT",
  "key44": "5aSh5D7Davb9DNTFbycUcSGj8JwusvKHyX1ix8xGRrGVeLQBuKDZVhdyXKS9jc1TS153p177EGK8AyemAX5t1GUT",
  "key45": "4o2d62KDhAsHjMePmoyi3sWuvHNYsJfZXWsW1EH27iXmbaNJGbUWVjEwavmiHb3sc2JC95M5MB6qTMnXc4Lz1DyJ",
  "key46": "3tAkhyCczNaC7gUTvW9hXhbNBw5UGaecBkhZJGyPtA6vTPJzfR9TfkQoiXia7bt5TJEpNd7ns9htur8tvQixAuTW",
  "key47": "nB5um89GuySqnULEjT4Scfcz336vEew7x1xQLKzWJTGR8Ux4pMDdAwPaCt9hYzbLL2TNtWxeGTGbsJRshqe1H5K",
  "key48": "AwdLjPK7kfZnRcXqRZa1KVxGAibj7anTPL1uhCaZc1uk5fZsMq7kTt9BfM5H1PZNcc4ahLfVSN8eBAfjVV4KDf2"
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
