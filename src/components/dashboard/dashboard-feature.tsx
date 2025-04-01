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
    "3JAUUWihpTY7jvYr8B2E651CsfGMPR9AqUsWJD2dWhyomZEwCp2Rsq9CDxEBHvcwYco8Gm5ghK6fH5Go7cqY7AKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2We69mkJ1XZTs6jemVdAvNzuRRKHcYfvQDfhA433G3HARCr4ASPZvG1jHqkDMcLiPDhTMNZxWtJ2gAXgN1pX7hRp",
  "key1": "3qDHBjk5JttuXiZbMVN7BgzQDjt2H3fdgVMbaLRkYfZRYKvsdRJicHAWTtpBikfCNxgTgNaizgaRxqUnxSXJFLjr",
  "key2": "3FexUuAzTTxoyWnNFoykkFZM635wgeGtnsCajZwajDLB3AhH8du4X398PyWp6rB5Dmzt1bGVxksfdEEJmNspvX5P",
  "key3": "5vnJGVWS8wKYvcW4nZwo5wbzmjDkXqEn1iaA4VfiL8znDrrFnZssFYwiSNQECQCKF4UrTk1MyhCjn5ocsUbejwMG",
  "key4": "Kaydqm32a2afWvh9D6QccZhPzJbfiYu594C1piMV7jKTSKeW5Wyv5p8UGQCj6FQu4CttNQNLP2EhZ3J1hEWMHCR",
  "key5": "3g2sngJAv5gbn4MAF53QiVGLvc6pcbD8uTAkub5VnqCLQQF6jScpfvcuBqrLF3FTpbmwg4Dbno6at2QDMejT1fny",
  "key6": "5uJz5cVuxJ3mJwQwUpwjkJ1CMZuRivCULDTkFmQ8983g2ZH1arBDmuH6MFTKLS9jMRB31wB2bvmgLYB13MDxh7Pb",
  "key7": "3u3ycSX9dKtjDhcYvztFX1nyxQPnWHsipgATMGWqUuVddw1E6Dm2aMC599tkZhvuQMvQaHbMezRSkPruwAnFMYjb",
  "key8": "3NC7hRw5k1GF49MHM94fngwnZd7mETtYCUdvaeBYJu1Tt8ohCwVFmBeyNJTD8dQ97u6E6RHp5mUVEo1CxA7E4Uai",
  "key9": "4s7kH4RwWfnKF5NU43tRQJJeh12rgooBvAaUCd5Epz2JZzZfyAB7fJV8Gn2DZXsqZLYrijvDpYkPBeaKKEstqP15",
  "key10": "4r2UzGmYQE3UAFgkYDjg9p4Zp6HxCuYM2nvbqADh96aM5R4PTJaipmm9PuXSWSt2xwsAd2AaaVX5eQx1prfrUB6T",
  "key11": "4Qr7MyXuXwYAdYZTCNYZy56VszNGn7pZ3TQsdPBFsmUuqJA4Rt29UprEn5SzmUj9PkXMkMBq2Cf7wDnxDnNPUsKv",
  "key12": "5imSL3RydqPs6nP1RAtcWKAeSLmhJjPw5HLBx8D6JmYWR4ALzbtMaqkdNAC8W6cokEFk1WviyXSSzMF1aLRbthop",
  "key13": "3QmWkErgG7aG3meuzq8hjX4xSds6tXpTvwgZHV6rdZNpx76BV93s66ugVpr6ro5SAqnR4x9tY3US315zvCitrNTy",
  "key14": "2vTF62rfCmM3AbfBBRr8Nh3RRoWyuAqDf3gmsrnCCbZ7zF4Ujapt6wtreSPfvNSdpcRvhTQ6kNQR6zwwP9Zfo18b",
  "key15": "44s3WNEPJcSAqN8s2A9GUPptdATg3kvtvyuZFEh7kHn5wWxj2V9y87JjZh5eZiL9eDF1qmgAYGz4UZHt7VpWwBbh",
  "key16": "4sFrxC8pv5DveFY76CwgSNQGR6PVMT7J8aabJZR1LbzQnnjJu9RHYPHDf5FjoUFxuPT8ATGefKSkhjXC7sEdQR3k",
  "key17": "3E2WxP8Z23vU1fgLY4ofD8U2LMSM8rqXyBfrBA54i79PESmjFE6UAmRWZ82Y9tbX2vQSDGF94wRRGK68Z5PbFKzp",
  "key18": "4YtM1GDBCVQYQQDuhaeMN3E23NurGkDHm64zu5N7rm93szS2nTfPFpaC4T3nf5Nbpp2kZemPRHHBz9HQBhRhpFHk",
  "key19": "5tctRWofrf6zpwz2wLD8WDXfPaRC7nmethooJdcdqMY9FopWWhzYT4crx8h1kUkHXr7iLnwS47RmUYcYLc48yLjE",
  "key20": "3q7BC8RwHkLapuKLoapqp8hiGkmJX14PcyYiZWGGxLjYbcAtpCgSJgWf94dVoG6GXmda6PghMnQhMKEcZD4pKsJ3",
  "key21": "56SYs2m8hoRzgGspYBE75ZkE2p6rppKwiD2KuvUG5GRaGsxJcDwKKvVh6MW4geHCk9WahXhBNU2eum6jMBRAgWS1",
  "key22": "5TiY9Bg8sErcZ6JNz7ovW5KbumNdFUHhNv48QNgcfMmPxcEoxxQ9cdZv7an73VXHcVA8RFk2e69h64VoEf2K2zFd",
  "key23": "5yHP7esNayM9dgE2n7SvGX5VgxaEP4YNqJv8kX4KohaWP81tUNgcMANHbWDbfKi2dh18Gfd1TrMHmzSKUmjuxhK8",
  "key24": "2RP1YQBC4YgyMsNNTcr9bLDE4SXi9j2F6p6YGLUwVELpRbvgCqDLrkERENWRoPhuFUVsSkPpggFWxMbtowcGZViU",
  "key25": "AhbxfZ6f4zPi4fCrDdob6sfH2PG5umUNHQtqjTpwbRszcMaMLvnb4pG3KPLrZtz4fTAjoej4biMPbama6d53RJL",
  "key26": "3JbSiw5ecEniw7ABXJNb8p3KR1AnUkuAntxd5Tp4siNNzzi3XRMS3dEiTxsALKxJv28rnr1U8RVzuQfehAwSTLwX",
  "key27": "c9fwSSx1sT1k66Du83Zz9nyo9yAcFdPPi3vEMknFALZ4sozZt2CU4pY9jv8kmPYj7Hk1G7av3EKiDCrrBAeffbY",
  "key28": "2iUCHFRcLPTe7mDYksCWB3XFbz7AjkJ7RQqDd6e8S6jyfTbTtpqfVPiUJyU24S2jeAYDPHPmVrZ9mTWNsy6J2Uj4",
  "key29": "31GTZCcar4nPoEqGXnepLhkW1VdpMdws9A91o8X3Hjacumd3PvhKyaaZinQYdi9WWWYAyzTPJxwWipie9kepvZYW",
  "key30": "2pZ1BMdwqLyRvemiwAaBBs51GqU7st9pMgQyQp36WPvGyFCq4dDSSZ8wjCLyQ9d1vPo4xMw35XvwWebciArfyZHe",
  "key31": "21j1pYefqMgcwor4NysdXRr9XbkbwhAGt6GYbSGbXfcCtPRuDWzv2sNmwEsshM5RQ2vWtGyGp4T1BPssvsw8JEov",
  "key32": "47AAnSm3PZBLYE86N5QopeDKG3UGnznV3K8Ed5U8fKmWaVkxTn628ibyTDFUvaaAKMWXeooMV2Fy1J6D8P1gZPmG",
  "key33": "P1D5iHcH6PEpG7uqSWEgFA1NtF1JHrMh6mzXLZNDzj5Dos545sgRTPvWwKCiPZthSsrZ6a3MY6qvgQtMVLvHPVA",
  "key34": "ws4tHZMgb2YYYT3gFGKfmzXV9A2eAbcQdnpx8FWn6yzWFdw6CXACfbf1pWEHA7hU26jpnT6Qm9sKhX9g7btwDSi",
  "key35": "5iPJr61dT9Bc7cxSvmhDs9zHQhX9SMxuutvMSTmT9xVMcXc4xa6jfWBg3z4RPK8kZ9exDHhmumEzgoQFma5CZDdS",
  "key36": "44QUG9h7kq2ykWUAwngcxPhuZM1XDjA8JtcKZnwvmxxngqgczv4CdhV9gBKGLJkGdF5a7r9PdVHUu5nmV1srDZ3F",
  "key37": "y1eEQAEyVSz3bNG5v3EiQG7hyVynFpFdY1egUkQTwhKZJ6mTubzophDLtF8hwtam5QuLwQmJRwfaGmfJopmn3YN",
  "key38": "4jJ5r1MTtBQpTymjWkcQ1LA6FVPWHbRUBzhyMPx91eQHDfuUX8p35uGe3oFVxDPrpo76VwhL35SXhBT1FA4DGF1j",
  "key39": "2LiKEwLL2rTnX2CSryASoxmDkHfBaAm8Y9xCET8Qjg7N5DhM68s4HGjsytVHY5jaYNukZYTKnbmxnFSfgdUPJgDM",
  "key40": "2Wpt6rbByEeE9KZNix9c3e1u5CwouxZhcz24Ub4GxBDEY7zw9i1Zpa3L4PA8eYd7afDir8LjiiWZzdMuFdM3TxqB"
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
