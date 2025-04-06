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
    "A4q6eJoijAQ9kbjgUBRS6KVzYSGQTfQeojthbrnXjhW6gzuZfDnkB6Q3bpYvNSqj2syf6ZYhncYKeU2b5NGWwMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K6XMC6SXPRgQopBMqQBLBLoRr3hzurANYyMU6jhTRSvrAL3bNxpbMwZTyq6fWKYirbxfRxxVhfJYeVP4YLzSxmD",
  "key1": "394HZAN4DrnUPcNMNSsuSky9xX6F4QGc5tajkELJwgzDxXbeV9C1LYqqEmgt3GhyfY1Y67bE2cSthTFMkmi7Bm4F",
  "key2": "29LqPnpaDjHK1JgiRwP4Hqfv2DZVpJSyMr1M1DvGVxAA4zK9rhYB2Pj9dVYXFZiahwTtcA3ardvuNbZWT5VAoBZk",
  "key3": "4jorB5ngF6dMuHgxVSMnK4P65ZT55BwA8NnR5ruRdb6AEjw8jnYofxqxJYvCVgYFTwmPEB6u1FJ3SBwJboiKJgmY",
  "key4": "2NWiKyqtzf2gtKgtVMoMUrU9wbCN3SYE9SN2j3Esu4dhDSSrTsWCLGyj3Wt3TE2hDW78qsaur2q2BeQFSJNWc2V1",
  "key5": "3i2kKVU72b16tdCQot7jY1bx5bpN6Z55YRPcUJdBRVFHuyj2nX6uSnYNe15FCbAUWN9WQkntJup7JXVkcoaJ6uLF",
  "key6": "5LSyay3g1LZ33wQAT376VFS9V51kvRgVKMc36sWmQ1ydW1iFbtPeh5KCQGbGkLptPwsr8qCJcLg4hvma8DGPEFiV",
  "key7": "3rBpbYN9LANSzX6LC6EXRMR4cqvSdz7hj5tSdafA9yMgbPMN5ctwRkhY1L99aokvQrLCsdjnVAxchmtFZJyXKQX5",
  "key8": "2TAmJFCaxDCywKR577AutAoixTm8tBAEGsqjA3gpD5YVyvktUx7noG6JzN3d84ods1KXDB7JveECMWT8aS2NxVSF",
  "key9": "5cEZoUEfmvJhmii1mBuLnp9dAurYHHiLmv6Z1E8Pi3Ef8MoQFUwVghJJDWq5Yu4Ayn9j5oZXFmrhEExNXcZsGDu7",
  "key10": "tvShZtf5UhqJV2dCs6SCnm5PKHBS6xMrLxbcghqLWtcVQPdcEyabXddq1LrdcKvJDodW5RCvoXbQtF8CqQwRL2p",
  "key11": "2SCfbDzHLkMJC1QmMUfss2LP7S7TqUjL1XR78sbsHh4FXNhQmfxMUEht9WPCsZVUAvviXd7xV7GWwbnuY693igAS",
  "key12": "2BK9o54ZGifBN6wa7FpKcKDFkPy5TEmV5Ui5U1XQwy1n5TorLzLDj7BfG3gcDUgNL7Q6b3ZV52nV2bpjTiY3KHHU",
  "key13": "gqbjMda1DoqRX87CehB9dkMTUKLXsgwdziQK4hmUZSTE8DJ6H5rfqpgVivxjfezhRkz83uQZYQy1oZtejLNj5RP",
  "key14": "2byz5WbM3XCv6xrYDUinkMGVBLGT6fJzCpwG61dvSrFbtNzu6beZGbu2UaBmf3CCYRtvAy6FHGPmNtrgw7J42PX1",
  "key15": "2wZZBjmvWARGE4PWVw5VeV1kGou6KH8Vi6bMP6ZjUKn3io6RYXra94WDWZPp1SH2T6croRnv1ewVU4MkpM847ppf",
  "key16": "3e9m2j4JDVVhRHxZSaz4wjX4uioZmBNvt9BGFQrypRBwWhuXt2musoMorvhtL9ACNYKkp7qyx8TkASyMMo2Eagnr",
  "key17": "5TvRc4cykH2vvD236ot5bzQNcjBFPifEGC1FWHi8Kw8Mo4AWXTxnWyC4xmmWtXjZd8QKpTi5Ede7TQ6qttZ6fYDU",
  "key18": "2VvpcdUzqt89f44DjEomfj6X6BXRVTjAAwenrejPDiLPgNRyxBmhnsuEK3DJMaF8MTnGzevF6X6WAZBupVQoFA6o",
  "key19": "4vt87sDHweh9nH3brqApnvhG7t7k4P9Ki1PYCErnUSFEauXky3N7ejaCnJTnxVd4QW2E85XFpBovhUAXQqW2aPpW",
  "key20": "6ZnyupxFutPtrg7c4RUDCG1JDzT68aqAFqXibVfgc3neAKdyFYz49izmv5wNVgiRqW2L13BFz8TjEZLzWKXYDNf",
  "key21": "54eQuozLAz1e7qJgcQNQpswHMX2AsFmoP8eSTs4eZYGGUr3iyqQv7UEPWFRsxDyVkvAtRVVGRqPPmDSGT8Ppogag",
  "key22": "2xw1kLSAwU3tZgoKdnSnpvb2YJexGNiYb5e4pCce6vRc4oGLdDS4T9NereXuY4Q6YaXdSeBMhCvkJZU4UWPgYf5n",
  "key23": "QoKPnUP9WSNN2LdnQBdccyTqKkP68Crcrw2Tsmhe8dBUutUYZvhDTpzhHLYdXVgcutwQhYhpeuG4GLeMotQyEiY",
  "key24": "4iMjFcwBjn23eBSzsyhuYYPGufdLKwX7VxmZZnP2qnnj7Fcjw2BqJKtRsAYAZTJvATuaZDZcc5ioXeRnWcjBadMg",
  "key25": "58BUSYegYkfzU1Q4W7hHmNU1csG5sxuNbJoEMHppibpVi8vaP78bLrg4jGVMCxkqNBSV5QLNJig3AuKU1oMwNg7N",
  "key26": "4vLoiP1gALrSMZ8x4tUNACwpCk9KQkhv5XjEc53J3VYuRBYExXjzwqwYUPdZxv8tqpSUBQhcmxRs5xYpcZG8U9LL",
  "key27": "pw969GFhECdXG74iTzQVgzK8T7yBJzG4v7Pd6SZoPnRj3oA77qXhVyhqfTCCDy6ZPWNjpzHGLxbLpVn1SXzUQXk",
  "key28": "37uvEyCm7qNPQWFX12KnChvs8X4km8ncRgRzNA7fKudp94K7KKyJtnL6XwaDrrnLA3S7PDbpAQYjRiVVh9wAwZPn",
  "key29": "2E2En7E94i3wCAepmvET6jrqyV1nQ9XwCMXCnLzoaJ3iwcnrZPkZU3NZNtaro2P1WBZMavbpdTpNvZ3DKiFkBF9c",
  "key30": "5qJ8ihGEJUD7Bq1aWehy6sK22yvPZBvhMPKhREZnRJi4wyg6Zk7KdnA7umYNQvstqff2yFNWwj7SRhzH2DT1xnfs",
  "key31": "Q82AAJTWiTzR5HXhb2ybN1niZayUrJz3Tpha8VRwXvkx7bKyWkDEDx19Wz8xUhBU3VpXAu51eaFLJjEJzGVgru7",
  "key32": "5crqURBGSeHkzyXGiH4gFbAt9eWi6sqK798UextLM6autnuBdjHqMDCKKgSWkrqnGNXcKDw9f7GGnv3B5w2ufEYS",
  "key33": "2BKsNLPNu7EkYVeCb1TBUemN2qKEYMgUQewFcyHB1Tdh4BnuBzCjP5LLQgg7krwLLQ8GeMxxQHtS8mGhZHfPbvME",
  "key34": "M9JwRN5RA2ZEVYmPGTqHn2Q9RkBoPPpqcLAPBeuhoo63uRehzW4wvrzwheYpqeQuGP8BPkkQEw6PtP774payaAf",
  "key35": "4ugbrqHgeXAiyQagBhN8gmAFi3zBMPapzMr2Yb4PswKoLWgMcYZ9xhTpmJEGhyWsB5rgtwUUVrSWjLqCHP8qx2uE",
  "key36": "4v9nS1CPM8XDKohC8zQHuVB6g6siZv3oAcGaawBsmeUvoe4nqEaSF3qKS8C6MVAYD2w6LD3387b5c7Y2Amz8onVv",
  "key37": "61bHBnnp3GXfYbTD1QieHFK6eLPKBqMfUsWSaVjft6qnAw1D1Q7Y9yEzdfeZwgACaQakdqdyDZwii9Q89Xn9xQvJ",
  "key38": "2GQSXea8M6VSuDFHf55ndn1qMqcafRhJEDs6NRTxwEGhnei326npYJ3XpP7VRz9isuvVqhMCzkq8MQYjr6RUgrxF",
  "key39": "3ptmhHYC1c1n1jPJSt7JJCb5LurKbdq4RtNdFfHrsxnFGL6Nb9aTEDTpQAvrDaxE87AKnKrBRwBKq1i4tAz2xJkB",
  "key40": "5eAhNC3qijjJULcLJUxrQ2e5Q52a8PEWV81SMyAJ2UNMnf2TdiUN7FHz8v56kzLXNA6SNAPSqWhhMxDswVWizAGy",
  "key41": "4MaAiXRganZ1RUh96Az4u2x7v6R5EhHWx7txrmZzTtLCxxhM7W9Ycdvxa5r6aiepwkec4iGqNNrxQEMAsxCHxXdE"
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
