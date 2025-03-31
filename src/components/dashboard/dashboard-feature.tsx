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
    "DoHVz9bb1b9jejB9mp6dAGXMSdBbaV7XEHTdEUmBx2WLswtYGDjaco2BLKRSRQuYje5s8BBkoU8g8DpDc9vQWuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4seecgWnvBZ3XKDHm91efBXqLJTm9tKsTXP33pHDnXsHB7kXPNt3sDZfssZwCEsiXbst7EkyvZzzYmPzwMKbpVix",
  "key1": "4hnEhF94vpXNUGYTfjzWD3XHhcCozVuyxQQyYvJw2dRcnrdvoZPiyyoT5srDeEx963UeoFYpd2wv6D1LyRqSAaW9",
  "key2": "gnpY8781wQMCa45obaYi1ugnnBH9zd2ns3Zof6gPY9s2XTJtmApjk4omemrJU6oimqHYva5dcfiKtf2b2Bx84Bc",
  "key3": "5iM8GcA5rDUnGeRP4ymhHawebghofgXqueqtRQfEfxJtbNEYPRxjj2uPyd3KxEBzxwwM5ZzaoN3wRnekcJVfcHh9",
  "key4": "3Hgd1Zqt3tkywj79hbZ9EDuMzXCZ6Kae4BD9jrxNZTJQFAJm9mCxjkQZu75rfMfKdWYHA4rxhfBbdiX5cxXnSBLE",
  "key5": "2zw3dDsD3pZCdqEYLeLHa5UUPpk4PLVS1NqbjWJgzVHc1bXqp7eNCTHFVFyJryN7BJ2XRU373e9dcShwVCFSCLJ7",
  "key6": "2A5dh6m9ykWLNpdQvJWqgMtMKTQcPEymJQnWfcFsDTMC47wUhvAf5fVSfGfdVpwJ8oNWhKx6nDNR8MH9JF2vFmZd",
  "key7": "24Qd9RtvBKQ6XumHgrNyTpA3yhfYS6b8txh5AnUKCRDuTVrqkYZJ9kxTpNdCNA33u5xVsu1MyH51qVfmH5cqXq2r",
  "key8": "3WsitAVVJsg4rGLPK56CT3WoEddzfR3FCHC9YqiHdA8c8EKFAQsVKmNDkUgtwZBHTcZTcaUVaePZ191aNd3Laz3f",
  "key9": "3p6VRDpkPYsHNwZALKvSBDCxwyHNQ2zQ8nzkmAUVMMm8rwcTo3FuMhZjjvcURE7dt5a3TZ9gAVgybiyTBrfQYGam",
  "key10": "62mgotSMJEN7bom6GH1eTWaU6Q9sC4yx8Hbzen7jHHA12n87nhc11Wjd4ojWS3Zz89KoELgb4p58S44zoVPML9jL",
  "key11": "2S1VES1ewzrjoCmi817tvpZMAs2U6694SCBHBGDqZbYyjvcFKGYAzN944EVcBggZDDGdXnBDhTRSeNWPjNb87Rff",
  "key12": "3AefrJyQtiwoi5M55cLTA813qFEF5HWJehgP2nPhPN31yMddkjm4SQAstxyWtGyDkMvmjVLdqDT2VVmBZUTWHs5S",
  "key13": "3K2SfNnkKi83e5it2FDbfB7ZEx7QBm1AASj1atJu7BkeUyGUdJNnHGUdY1A8kw98RXXvmYRvLSDfDCyq17jCTftX",
  "key14": "41tKk2gFcWYc4juZuGtCjxRRqQ3aYqPAS1Eo7pLr9AWNypSUranLdh2hCUwvuuzUzy84ayD75cbddjFDu6i1pxov",
  "key15": "2MzLzzsAR7FqbK2kbJYcSMVHPgajmcQsapkqCAL63XZ6A4disvKDKUymG3xxd8YEfesoeXfgrWpLday1q1vUzHH1",
  "key16": "471CRQivcQZ6xxfcUDAJN4WShwJLJ1PPXjxmjLXKves6tQ1KZp4cES2msu28DyToCrGfNadn6QQiB8pFLvHscAVb",
  "key17": "3xZw2c8xm4156y8RKjUgagETvoCMpFLus2A6KjcvsmDD8p9THvkTq2bLEJesdNTiqyy6aDToMTnfk28sc6sNMVaE",
  "key18": "3dtWCs3oxjigU1YnNxc1s5HME8MrYdxVrinPffANnSkBhvzgFkBHvdpcnbnNg3HUfYgvefSCRdAWdpdTJQR42N64",
  "key19": "3wGS9PGNzAeYShZr1yvvybx6cfn6fF1jj88k1ZAf4ZAxZ4QRB7bsa4ZamacH9pT3H7mwqQj1vfrqDYxNePrQNy6u",
  "key20": "4LLCMphLYrjB1BFs2Pok35ZLoJzAyHFpNkSHYoTx4nLGupem9dYs7kcS19L9aF67Z9w5o5JPiRzHxRvCHNtr8y9S",
  "key21": "3zL3W1Z9aQrjLyTmC29EPndP9S2nGXjno1GDNxqQHwCV7z8p2h8imUdLtj1tYwTJwzQNx9jisC91vWH7Rd5djwsS",
  "key22": "4Atmuin6bep2g2fpYUUPfVefBqLzuPZUKipM384qJmCqEPPUH5b85SraurX13KNzu3xxw2X3DHJVLVyqhNqgxxUe",
  "key23": "5sVqJw5NhJfDkGaxJqVzeCbkMK6YEkoDhCqh8BPMMxFnzC4n3JsH6EyfC7CsMPtx5vCUo5t8c5htF3h4rR2BCP9z",
  "key24": "n1ji3MebGEVQoQhujXWTeeam4CR9djoCzApwXzsXfR6GcJTgTjmyNQMY1di2AdqsVXgvB8vuHemMn787aqbDXBo",
  "key25": "4Z9YjVyQ3F3FwdugULj2dsniUC6FaLyzF8ZJBLh11S2VtDxwrGBZT7AXqu4UcGaQBF83L6EAX4ZNa9ria44iRLCb",
  "key26": "3E15gPDJtPA7FqnfFG45merHcsihbADw9P7bk5j2kdyumNiZjMaj5rwSigG5D1ie1vKp2zNapA3LazrpHGEmyn6N",
  "key27": "432mCvrtQ8aPnD4RyRpacJaAsfYVon7Lbgaz1jhNdQgZbX1JyQdSin9VwGtyTRBQvGm45PEwvaZZieK6cjFHvsbC",
  "key28": "4uPES7YawGqvL9QEas6vbbxoNHb7zPxNBjZnmi4BPffMNPLNoRjB4QXzKTeZxU99eCjyWD4bSygJEGy1ggSficUj",
  "key29": "2js9JzWA5UpLEHtoeVCGgq8mkRnmr8k9Pn5TiCeij1BgizZkMZHQTg9H5rXdYjqZbvm43kNjtVchvVJhD7CfgCmd",
  "key30": "565ckAucK11iwubpHCQJqj57ixNYqiFPPinBUyXwG62gPBtWJkbQzND27F6pcEkyfa5g4eXhxk2qoRRTfbYCzCDB",
  "key31": "2qjjrHGQ8pA2U7wBXrGjMPSQ3tshwGwoAnL9uHTpuXgymJDfJs3erpSrSXNLMsWvo4FZ1Xqnf2sW9B7MXSNMjTrW",
  "key32": "66KwGfmJKhDt8g7ZgAZsa46a6HtXpAR8TuDgZ1ohsSvJafMv6jHXojNtdbZoB8xoeB2YUCL4T9cn1X6VNcHUfPyW",
  "key33": "3j9LUQjsQCkXaMiNSGzHp2qj5zkchnZ6nhZPTeGdJ8XjKH7RMSe5mWKraaWnrEedcjF77E3uwEsqhwiVaAvAvxcv",
  "key34": "974gZkXJkNgC2YtMVnswCUTGoEPVWdhTxoD34p6oVrLZw2HXaNFXqEDJQdFPtJdCpkC38VCM4tc3wVvS1iMDU7o",
  "key35": "5kDxb7xKLrCoJCNiDftjA3TtcHfebTcoGS41mxSqkpsHfiUGUfZT4S5KGRcdKCSbNFvTdXANGn3pTDPTJkfbZWFi",
  "key36": "35BMBxkGACXo5Kpk1wZXZc1b57s7WhiuFfmaWvzm9yGWbCgFTM3YX7JUUWDJfLQncswtyvVBnnpB1mEyUMa1ctq8",
  "key37": "7XRYPE6sh2HXXdgDF74h1wxfwqnLWdA4DjgwWXbCt59aWkAdkfWBWvmG3vomjfBomKYVfjviYcWGTX3a5m8tP9e",
  "key38": "29wPqL2DbMvDxD6TDYgwBGeNLZA2RsvZj53hreXeGEXWYWd74pxVrWoUBhQYaEtD92s6Tv5QhMPM7g1X3XAngHmh",
  "key39": "5m9U8cXZMhikTEcbfyw1chAUqhYjGaX3pEPfwwTVDPEAEGzru9DPu7FsejjKJ2oVw76tNUFx6XYWwepQALB8CUFo",
  "key40": "dtkUs2ELN2LBNbSRRPvJYpkxaASpxb4J9ppba2PdFouhmNydbztaZP9VNjTXG3u3ydKg7FrNadtExymzfkzGP1M",
  "key41": "2YSR8ViD4UvQfbtpBi4ZYygsdb9w7LyVJsmk9agc1CAqNstvFV4DhZFoLQHub6qDpc8AcrXq379dXGzbfmWbiZvY",
  "key42": "5JbLccUkXWJD3iMg5s15z15VhwaLbqXCDSD33xYapVLCv6ax51W3BCTLob6jfeqecY5nrEXMUjamAq12NsRtGfnC",
  "key43": "3AkUhBGZ9DExWYjVqWFzLiS8FySv35wE6WipajTfSCH4Hn4UGtjwMN1kZitmGHaVN8u8vFcNWbiALJsPTrjM6FRp",
  "key44": "egPAw1TBCAQv4AeizgnJ6fLXyB3Gw1PEuuC3WUQeKmMxsrAjwoAX1tCSL4X8t76d3LC1Fd5pgNkVQCkHjzVWMbW",
  "key45": "3ZLkFMY4UW5AprojNSRvCx1k1hry2JiVbjSLvycgomCvopnJYX2GW6AjVHeDG49MDRyZr5idA6YiYLEy8DQxpt1J",
  "key46": "45qJJswVwdvZecvRBE43KxxsotLFHuF1FWCvkWiHYpioWJ2NRmpbdTFukL5nhXUjLcTKZ35XBmAKNtShN4uhpPqq",
  "key47": "3TP3PzCcA82iNZiCtWVhsSwZmiXiULm1mVzUH9SASpBy4n7uP974Wy5MrvNhPg7HSh5CMnDTv5fRNwTjtJV4nQ4M",
  "key48": "5HTa6UmKLzmDCuh57aYHtSbDS2zUgTdyEjUUxWhQVfXcModHmGECryhoqcqsmLKGJfWeRwX8RzDHj5vJEtpYRK3L",
  "key49": "kuHYXPHbX6w3T1MCEaWcM2H8U88QGsomwHKuUwdZzid9CkYcGGWNxevae1YwzitoEboqVBY4M4yY6aFi6M1aT2h"
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
