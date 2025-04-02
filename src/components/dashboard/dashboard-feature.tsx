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
    "3Ay4zbbehEuCGYT5xgW55XU6GhCHUYVb5P83yK7K7LwyyQp2hmyNvYdG43w5ApR7zrdsWDFu6ufVUZfwsYGqkfoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zysn5caCtNyejLRrzAEGvpoD8PjpQ4qGjcBZ5zBPGXgsXveon3Uw31dNMitHpmMR9C8yEVRHNwqrRYmeqmtnCwr",
  "key1": "56E6aZ2pzjN3QSmDw55ebHLukjErTs9JKPbkebNTZ9UmVgchJxnzeSWgAdQPXAs9gD9pYbstdV1AH5iRyJ5honps",
  "key2": "2pnmo9fFcti7VyuLGT6eaGTGmRrFTUTG5cecpk69aMg5kb53YofwT94ELZfkUghv3zed7TVoHa8JmucmwVHakqii",
  "key3": "fcqdPUMESwAb1s1dyGFwmYPjQAQdAX4bz8U4Bej24ZtE1MQfpxDEdRsC8oN2ahpuNyUWBHjStDE24Xw3ZTrYat6",
  "key4": "5B1wdfTCvZMfJPmmcksgXbXB3Pq35W4KoW5X1mjD8VFqNbqmNdbekeqRm3vQvYf8MgPWFJ7fYRP8MbAnkvXzgr9w",
  "key5": "2U2QHnWfEcWYntZjywZ6qqUAnG2orhS3QqSL4k4hWviVk27o2eZmXYDLn8ECk1eMQLtLDBNYxojFvca5NxsEvbPQ",
  "key6": "4SdqphxhMnXy5cD7rz1KdxsjbSLGV9ePxqmEE2zLXLSdjF3y1TJw4RG4MooAUFvRfq2Mm2pq4pdamWzrUh9Dk8mf",
  "key7": "5EyaNen9mJHRvZYiM5EjjnUBwGY2D4vxjsm4afzVven9ujyE3rb6gLLek1dKHbGwaoEL9YBiTPq9f87j3sJZRcHn",
  "key8": "3chHtZq6F9sXDzVWTK9AvUmi3nko8YB1nVYwPhwhYqnH9Ps23xnpaXVqeoNh3yZ3Br9GyBjSzAfQ9Ee7Z3dLEKs9",
  "key9": "4fHVQuwSCZKyyRMZzDafgCAWbE5ZWsot3kJRHT1dw7hTJ9HXF2MKPSzgx2eSc2PwZAd5eWuVPsiFVvbAcHqcw2vn",
  "key10": "28P3FrNg5WbFBEGsbM5rAbMufEB6jasip2WdkQspk9zwRBCpxC1ChEJYEHdgBzY3o85ADH8HnpknZghXDF669akd",
  "key11": "3kjWQxuZd6GJjQNhJ6tqotAPTarbfpniGphcWqfVpnnGmHPrBDRj6Mj2pkzAigMaGesT9zjQdCWZRCH6hSLmUQm6",
  "key12": "3M3JCrSTniV1feYvWHbPNr5A6rBaC2N8BmQT613ier1rxfHaEv7iEe4HpHFFFxBaX5MYX7HRqHuLSWoivwutin2Q",
  "key13": "5FYrnTNeAPrctky2i5f9358ZmjtuCx7vmFWsXdNNCdTXrBQwTQKWSxEB94b3T2fdk7WyLWynTnT55GSo7tby2RnV",
  "key14": "5DSciRFmvNimjBJXcwkRh7yhwmLpCFMgCQSizg7G8Bta8ZFotBvA7cgFg3ghJCQprhMgv4EGz1bEivKXmQmFyZiU",
  "key15": "2B7eFziqsnQjLbs1mY9Qmynung15T8AnrL3corJQgggzUSMWFPZrMcKMpFTzoxQ4qUPB1GLt4CaPsmboEDkyakAK",
  "key16": "24L4JMtxQn4QoqmgzRTrjUmxUMTLhvoDTCJU6UVAmzytLLSpyR3ygB5DsePwrz5nAMPSb631dfZeBad4zDanfDsD",
  "key17": "ykSrDHQ6e92mg9eVyp2SRehCXS3X5Dktn3CUTLy86BkPW7ZcUT81tsDWBhXHprHek1tZcJH9VrAPan9mU8cRyAt",
  "key18": "5mhpaH41U7osiysvQLvHts5SLMPZUbvF9c1zZ5rCuGXAyLqit5bJWy2p2gP3Cjqj8xLxQBHYnaYytCfSo7u9UGba",
  "key19": "3bZRN1xXdEuzgvNazpDAiBcW2GxFD5ydJCDtXnZyESdmFb2kFBkdbWhp5uYqePexVs7YmTeUqWhCmWEgo6wPgjx9",
  "key20": "GxugM6uy8a9f5eSgCkbEH9R2gwbLaLDCRVknLkJFQSrCYKyybgUnbEv9LH9txD96wSYggzkyWjEEuKKXPv8XNhL",
  "key21": "2Xg84NZVvt9T7UHZjDFWvHAvkJYtknguExXx1EXiLvjy2uafkTvnEWMwPV41uHjTddX3JfkXjQbZwN96yRgxbPoa",
  "key22": "4fZLin8DYsKFC31RocQS4gMGqy2SmN8xczAbbgDaokMMsc8oGGsDT18HEooUDwT8H3KwDnbGF55xEAtNob1yLCR8",
  "key23": "2s4iNq8JA1JDjc1cZt3NYAmdhix8mYyZsjkoR3GDWT9Wz6JYWACZr7jJV5S7U2jiKLdn1mALmNV6bNxoDdkFX3bf",
  "key24": "5kg4NL3gsfnXcZ8X9tn3X2reLNUuCsMUudQXKViWhqnsVC96dE5EXdJUqdtmy9YNJFXH2DmRNcaskEPRmU4eYv6U",
  "key25": "4nvZbee7otjfbq9jNrNkkA5v2dhdK6EP23Gx2Ar8KkZtmS64opVe9kLoj7NnYeZ9gLyi8XUydUgAgA4Dza7yVLzW",
  "key26": "4x8WjsSijvmT67R75UfEvsNGeEeiYsP4rdTnoXzWzoLyL8VXnsb4tyPy5JvrFVKNVuZJQEf1NWrJBjc8vj6uhYwR",
  "key27": "4qC9a5s1sy5Zx4nVgyMfbbVnJMR7dwvfDPKbGCqoPkBxkE4g6i43GXMFWxDev68jrMvUqZf4zCWE1284wHhhPHsD",
  "key28": "2r6oseUMQh1nxMTFzWgSrQhaAKqtcprKUpM1MCM82bjuVhdtztxo6orSbkRNoqpzyDmUEqUriL7CCwXpTbGVxXP2",
  "key29": "2ZybSCBwdsBW5G5vP7HJPvu2BwNaWuBNrrfRnGLk1E4a2RXG978rAf5Futt8TqsPEDWRuUzs8o83bNAdFcTuExTp",
  "key30": "35QUy9ACKtYqUHhJ5PFybAvs3RcU1VcjUHkU8GroJTJjsgaKhstfjvD3U4WXkRpdGfxPAidzh81mjpKPp9WLsYoR",
  "key31": "2HsuojfiaCgU1scYf8RosHA4q6r3NqQXatSPhf1QRVPVE3yPur34ig29FyYncpByj77r2nNXsmK7xvByLgzWuQdy",
  "key32": "4EhGfvweQKhTXJ6jk4vcvtL9tbbQheSyHss2dVBvyTZURE6A5WBmhBDU8ApGKDP3VTsVeC66spqLqvAUAu4wPr2U",
  "key33": "5N2SfjNMLn4RbbDTL5adGfrL25A5VtUFktBRG5Lqe6H1Ng3vSvMDmKfRzLx1d5GSoNRkNeKkxPFqDxEZ8x2rDsZg",
  "key34": "2Lh4uwKMhQwEhDsMVxjVo3r3TJnUmQxAFEr2gmVZLQVYzD3oJtotq4r9zWpcLAYi512XDYoQnpeWSUtxGyetNF1y",
  "key35": "2TYTqGz19hU8j7bjhLgCMhrKsrtQx4v7EpwYbCnu9byRynvgJu2kaaPWQUXDYChrsvLwwCyT1hAJcg4kh1bECiWR",
  "key36": "5G8D6tYfX88T5J5MRzg1roTRFcvADFyuPqGhrmSqGfAtgKs6LGPXRsZiosmoLAztjpPyn49YMVKk3neiLzF3YP1n",
  "key37": "5P7R2fs9GFuvRgzTtDrUh81fBb11eGuNJUnKP8VgiEKdQTbPKEsrjiZVGMEbQybv7hJwrDuz9yNNC7ijwJS7Rb6r",
  "key38": "2GXsmeevNag1wSfM6zjsGCeWjPFadERKDWRgXxNpecjwy8bVmHjnhHmmhTxwTGXLLbrgwufYEpbSSCBivofrXsXv",
  "key39": "5m87LckSVrLbSFaqBKXh3KLQ4b1qm8puzgQhxvWXM25Htn6fgvKsQJPYMToBHXaRj4A2Tx6rTK8xqP1UkFVYgjPS",
  "key40": "Uvy35ChcqoYz6M9Jy1UjiqTg5aUBx2dSyszx14bKp1HZw2au2fwUJifkqu5x8q6EbSgsC1GnrfzY8ZThqCuPoUw",
  "key41": "4iumD6ZYiBeEp31doJDqjqf2T9hPGUQTDo8tCeEwE9koVjG8abphh8q2pAmEx3JKDdEme3uU5XLrqTJiB5XdDTSr",
  "key42": "4k7u4ooQVYxeTh49T3mZb99ZL3gmMQtLPHe6viEL6VEVWddFyRWG4eesE76W7XCUccGrDQ9LoxVumh3r5HtFWDu8",
  "key43": "5uxwp2EEMQ6N6m7kEmmgku2buyrukP2CETBXYZsLHS3GMW8J2hH5kQeF48R8SEEz29gpGuBSgKuuqrdw5wVYMb6i",
  "key44": "3RRjrCTmy8Z7bipExsfcEmd851wFPfU8Z4avYV3HstU9rTb8JJ9NLRXf5GutEU1KhpcRQjPikE2Uh1UEvDKA7eht",
  "key45": "2xPxXnsG5FcXEF6Paa3aAU9rtyB9p9hAqzeNeYfYzibf2PFyN1JRERYCDMoQfeebDeqX5TdQiopFynAeEkPSZUXF",
  "key46": "4kVyo5zGy9jXhWdBwczcbi2Mpws2B8rHhgxWL47e9Hr5LPhBjh6SNG5BejrE75TubQbcm9RCXUVA8GxviLNMnwhL"
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
