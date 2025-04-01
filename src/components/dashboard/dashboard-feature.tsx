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
    "24LG1GGhUqpst9ehVgv66x4R3orojdGatNdfMeFJy8FWs1RAhF54rAEmGYtSGSWR4pjxhxAiK6dYXqB8p3DgHewb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t6MtRYYAeb8Gfk8SptkjRrgFC4SBDqvHbHis7yyV6fb2zwUmWFg8Lz6uN67sQDAtxNqAiPfwPa2vekZ5gLGzARY",
  "key1": "5jLocU4BDaf1TqU6vWicvY3RHeTLC4JDVykcXvjdTrwj6soHjXhtGQFDCt9Z9fmuTYrtB3iMc3iPwmAVPvs7mvzH",
  "key2": "5WtQcCGJLEFnxEWjRFWhNn2FGh3gswMwweTYbN75AuGi9tmi6eahNt1A5Qv6rvrsz4MRDdwwCB6W6Gqk62NQJePM",
  "key3": "TB16sJocU8bwkFnzQpzZX53GfSUbR7pHpK9ba8cc1PfnWLv65WG1DsbJ853K3PN9T99z65wEFL5hkP3HPi8D1Ar",
  "key4": "5fP5nbEZueG4V7T39WtX4RTBFiA2HVxBH2HMHppEw4zB5mZ3rU7tVB7vNinkQDZKrRhxLHogmrwuxMcWtwUz9QaS",
  "key5": "2b2ZEp21cuZUNs8cUWBszQ4LGjooCx6jCe85uUqvdhQC3XwYQWYUdmD6fQJJWjvMjcQtKm9nE4aWvZA1Qh8YGEWV",
  "key6": "2647kD3p5kxEPfCb5VV66TCaBBKVTytoiAVC9AYHjSunRYVufMhUWavWQV1NFiSxYAEa3RS3CxivYFhpqAnjFm8B",
  "key7": "62HyHm2mwQXeztR3oLj3uqVSeAaZBWDny7R7387YHeYsBmv9CeNgqK5fLvr7M9fzRG7G6uGZ2hqrUFFaRgV6WhbZ",
  "key8": "31o6MQKHScaP1Nijwa5UzTwLRqGoFbZHCcoXbsNioypPFjcWUvw2KVkC7wK3WRkfofBoycvLHoYiEenEfpGWZx1X",
  "key9": "5reVxfeKx2zxw4b2F8KcfjTSZS3ysTKiF9mgEN3BWtqLiGimpCpKwtjzk6E2RmKV2ETA8YfvFNjpcKej6EqprvvH",
  "key10": "dXK5j1hNdi216qfRr1qowTBeznJBwLUBurW5z6JsyMKCYWnCXGgrWEtjkmTVYa1XwgQk1pPg2G1fiagneXCtS7g",
  "key11": "4hGRFSMQ3GakCqDCVZscqseY95G96KoEi2fG8HdrC3ZQgFYo5jm65Q5bcJHtSyirrLzY7q2BZ66qH2vtWedS91eV",
  "key12": "2smRV4tyDT2r6gYk1sivZv15cQUuNDA4uuJXQgXRGwWSyTbcoaPsnxiomi1Wm1FNURYLuio2YJFXgQe5RXi7LM8j",
  "key13": "4k1QMbX7XE8u32P9NaMqU5mNXhwfHFv7v5mMWwMmuuLC4Zpr8kEED71T6tJNH4fFfVNkUEoQm38CPrSeQ7vC2kc",
  "key14": "2vqUUU5PNsGFSjkAHsEBtbkqEgvfzPfZbEqSNGeaVkf87JyWneqEtL7jQhVXc9P5TZSKnuj5Q8DLc7McQWeyWF5c",
  "key15": "5JPmWfQV126ok9Qv2tsUunHLjeTUroVJgE6vV8cGi7o61ZYP2Rv77QManE4yjfQF9J8AX43TJavB6mhj2pny2th9",
  "key16": "5pxFUWWKJ9XArYQoyeEMqRYUp4h3zttkerKbcHMmwaX7yBneYCYtzaoME8rU9u93nrU9j6GirhMEGX4opRvCMNcq",
  "key17": "2Wk3mJFDLdhSqfFnQGNDi46skig1c5aAidfUaxrnq1tPimc8E3VLbzsyKDE3fuJePSkLAdCsYoxjfRCPK3BX61Jc",
  "key18": "62os7goT6KdD4whiEvfV2EgRPWdhRmpzX5PC1g376iXwE6NTwfHjKW9RsLVZRNbha5TgckTVFi2aPbK8UEmAbUYj",
  "key19": "67T9AkYUy1PHo4or8wS7Wm6uNCDFGmQ1pajvqaMYTudh7EpTmL8oYCBBCPSF1VD3czXFwULxxdcQG43pY383K4Fc",
  "key20": "49gRNRBsVd28goQeiKM74MSfgMPCGcscsERfwWWoC6u451h82rBThxxgBGZKyumTwj2uYrzHjmZCyJ2Q25pfxFUw",
  "key21": "3QpzzY77Lc6V9GyDfRTTKhFHXFnCi91HzoHRFyxTj5d84U43ugxVtw4HJ9DFvYvWWCRKzA62UekYdVQAHpLWDFTs",
  "key22": "4DQ8dctutsbanyC6pVXusm63tpt6QXnnRfjXnGv3Qahk2rdwHsmbXwXHL1B57WBqBhoiaYCHQYahWGaGgj2RD5cv",
  "key23": "2S4KXj7RhpQHsmt8ZuRs9jNbXBjYWi45i71yWGxgQnXVAC9pnNo5kRiR9yPptxC68bwKnQWjjtXz34VKFLPbaWe1",
  "key24": "3yKn41hS4c4AXFt5xqYbNNyfaRoyPmgsd3tKqDc8A5Xc59LjCjBGt6fxU9EhTqqxNmkSDmWCp6jAUqXs4JnWw1Pd",
  "key25": "WRz7kMD2vmjT4xaXo6bepieJWYJT6X4ZSP6Lfugi35NUhV5QCLuox6GYxsQNAgGoRreD9XMGa6aLC5Tmgo2bEXo",
  "key26": "2B3LQb6heKGGetKqq2HbZM5WMsAr6T788qCxQkEpxKQHA7uDNKoZdU5dsNy1a6MRj8B8w2ZzqqW4PNRVfapxf9U2",
  "key27": "5qghsm6NeceGoJ882F8yP9wh9biP65pS7xwP1K4GSRgj8yCgY7e7wy3uSRVr45xqyNVzQbMZ8iTVSrrYsao2w8ed",
  "key28": "2cT2ppEGcT4dxEWPr5iUbrFMGGwP4yu7i9r5Q9wSVSbBACtTTy7ghTvUgb18KC3eq8XBqUty6LB3dR3NMZyNU8E8",
  "key29": "5andsyKHdoz9Fu7DuWGYKX31aE2JBW5APzcpZTkdpSzAScbP664ZTGW7CX8mp3BfmtdxzL3ksBcTLd3MtzeYb1kY",
  "key30": "YKGyHriBXQWYc2Ds5R2yBdZ4pMtpVKoojbyawAm3xc9ETdXvAoy4grkWv596JkFHpXaVcDo3x9uDAaAt4XRTrib",
  "key31": "4dRh6owup5QdhdJ6DC4m51ZxDu2cmuLQfecgBtj8A83orcirDybwHjunXJKdnF4q3f3tnZ1mn8ur96ZCEvGL258R",
  "key32": "35WnH29p45SLQ4gEm1Koa5PE2a1GB4Kk6AZF5DPDysGZCDRDnxYrZmBh2S45k5MM3p91KEs2kdkC8Xi7D8qZGueJ",
  "key33": "2xxCBvBAcZBeXLwUk6XpU8MD6YHVXRBuReMB2H8E4xS7FAwSyLZHKcoUaSBXNaUbMKfNP3VkaVZYRy2S9uqr4hTN",
  "key34": "4tA7dgPxbms4s4iPJpr3GP1ZgonHE1KZ3LYp45wX8TcqkPNCzXckwKuq7XtHitRfn9poBFBcf9TtbUyXxcFFRqis",
  "key35": "2zC3ZJfyw4HaKJEkwNAxJfCJcepYfNtXfbwT63JYGDPA2Wd4YRXLve5svyR54ZgFwgy5naXNj8ZiBDto23Nj8Vhn",
  "key36": "N1g9HYdsBBwC5kNW4tNWSm7JY3BNtCNjHkQZ2PGYEmRnMeiWuCVMGxmkeunAphApbcgVFdRwS1skvCX9jftjjph"
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
