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
    "5yBou2irAubFUTAV8tvYCHUzouT8R7YmeeYTen3W7G2nNgj3ove5EWDvsyiXS8cra8SXi4U9jGPdb5PPGRAhDnz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XWqh3AnSkeMtCpPqHfiBzTPXpzHcqCRMite6u94Th36kBFkvC2g69EHdR45hefiJ99AFbvdS6hh3WE9EvDNYBYX",
  "key1": "4k5z8LQDupUZv6vBxSVdxWov9dzE2YqurwcQxCg6cdus3Zb5fsh2hqCk3R2d8Fs5n5HNNVXpsm1EzahgkoFnMV4w",
  "key2": "VdAVXou6CrVrmgWpen83k1zHWtN3jESG7eWDooQhjD7dXrrFjDCXu5AsZR7bNGFcQ6FemgVMn97z8kru2MYW5Xh",
  "key3": "43Fs9fnS5GdjypVcnUd8T68G25k6TSqy2T9izpFSMaR5heYATppvtMC2d86oC9XJHpNd8mirQVwgUPH9e6DBdZWf",
  "key4": "BAuavBtKfREDJQupehfn6kFmNTyNdUxkH9dRkxktzRMRcjYvp5A4h2FnGoXuwL6969FaVJcHYtHnfopfHEP1ds4",
  "key5": "PA61RVy1opeHS8ZJDPYBUUSncvwGG1tgGYSbXQXHHi7zduNsG8qCLjVqyaF6Tsdy9pGhqk1G1sGqAabLAM7Cicu",
  "key6": "5n77swPYw1zX9n7BC52yw1vjXMETNdVM2HWbTo1v6oZFRqAEfc5ZSPffnEkGgzoud2MNyfC8MXTTVjPtYProRW4v",
  "key7": "5A5B81n2n9PHRTxgHsNw3oaekKBAtTwTXqcfgMVnnbYP7TiioG4fR3FcXztHgVMSeBurYMrQWNPyR3B1Lx4qVNgb",
  "key8": "2VjLQbergC5gRGk58Xum8mCZG322ft6GoZZTovVbpsdpnBgtFCWmCTemxezxqeur84LeEFg58AutfqfFErEgiKcD",
  "key9": "2bQpSCNviyk3xcY9JJUyWAM4SuGxM3UkjE9DwkzzyEv91nMMuy5vF2MvaK7p7eXqj8umV1jRYsArtMMzU2f7qqa6",
  "key10": "nZJ8nL1uigwe2UdLhxgCWbEb9veTeTp217HMu6GEJY5k8YQBHs5rqDzoLhXVeRx9ufFdhorsau8N1Z6xAhvDxrt",
  "key11": "3KUoEX6RQMph9GwYUkeUB2yTWduRpqkitfxq4zXaUHsbjh9DP35ugMrHZDp9tvpsuWtXzSqzhWWA15km8QVqdjeA",
  "key12": "4cmgZ4HpVinZFw12pmkuPfvYc8Thvjycctgq7XYDx1BL4Xcn48tZxou4fYT56iJHbjJHCgZPmp4ayXvcCDLvvusf",
  "key13": "5ZVenurpS4iJ8GXnbSNFgoSzx8zfaKdmk1i71jjSzxBLSr4DstPe4ZNVFaA4uq8NKu5t7U6mLmUn7CDt5WXtBtPJ",
  "key14": "4rYAmSisWpShLD1Cm743cKvm4oAeVBuzW6sfAorw7hCtQ9iMkxvu1gzQ8VxuvN67gpGFe3yypFcyNNj2vGVay9rQ",
  "key15": "3FLZBGNzyE18pZMtXwUMFkq9XzhE4yJizpzE9owf8MGSg2u7tgkSqEC7zPuWZAK6ZBYzTY1Na6MUyDt1imsamSAD",
  "key16": "4JnJLZfapnmG1CSMTMHvUm8QNiZ4BPZvNFuPwepZsn38VWgM4c1gCY8wjkEiwyN5r7nqT8UQt54G5SgjrUk4oacZ",
  "key17": "XGPrLsz74mCt525R1zH2NT5fw4KqsnPjcuiD5LTeYNBM5WK6RAmpe9b4TtHS6jqJ9q2WBKaJK6v1wppbsspnPds",
  "key18": "3DNbeHcs7u4Tq8rfXDZkFUmoWLJDfCXBgTSn6wqBTf99VgVJfQBEhvH2inzA91nqtqCmSo7RWaRwpdz4yphEzf5z",
  "key19": "3Jyh84oWRZxL4pm4Fg3D7YdA9qehWQmG3JgVymqxR4xzk5prMU3B3W7SLVoF7QyXFg6o7NeJ8Hh9opEWknpXPUpQ",
  "key20": "3pK1oNPMbaeW3kC7aeDQ9fi2WFjiXwVfyrvxQPNej3rWnWFrCYdhTiRbJ5RaukquznLEs4Y48qu8rDV3NBanFQVc",
  "key21": "2MmAvNgs2KRTyBabjga3FDugP3LwUqHdmxQj2SXYhoERboQpvA7FZNeJKaos9JA6uouUJ3kRD6UyLbLNsWDJnYxy",
  "key22": "4Ehjx9n3LDjNBuEMd4EanczPZyv7BaVHDsTg6ZWbraA6XiHHi28FpncRQ7TuDX54Azh1BrU1QcZL335DocaWtH7U",
  "key23": "Rg42H9MoiipkEopYHgNL47Y41MjQSnHrJgaeSzK1cwvvxxfjYo1xjh9LFzP3ucMLwVSJY1HRMuNNj1MM54iumsW",
  "key24": "3oWRNv2AJNLXZydb5fEPoPGJvMaNhH8kqekSxFnQVpSoamfuYSK9QXStpxtRmpWtZfYXnTJcVPM5FrEPns7bQfVv",
  "key25": "47L4MyRf6fbckk5FyJ6ehSbapoM5WuNz77jRtDy1nywXEGZfw7RYAXtxXVxsS8YyeffqD7bR9HepKqNjhQgcSvC4",
  "key26": "2zEtRVbgoRh6MJa4c3p3eR88rZtf4NmS7JYt4J1dgvQ8Fze2kvYYvmpvtJq4fNSWw49rAf63TeMg2Yibkjfo7UPd",
  "key27": "qDuWBmZFTVzcBsY19wkePFRXJ144u7sZ64JtdrzBiCDCaiLJRCcf1vJW39M7BAQkYjCEESrTPfDwQ4mvMmG9RtD",
  "key28": "2KEssTzN7CMLRCnthBepuCt5kzwtahCPWvPq1zVP7yjuXbrFnYJzUMzrX198y8ELjGmxJZcThWUpJcPoFpp7isNa",
  "key29": "eSMZ3XmGZk85viXrXoR3q2TwRsqQ1SBEqCx8gCuJP189icwQjVNR9HRAnfAMj8J6vJq8Qpw4ByrDDeSeUPs1adW",
  "key30": "5WmcXyhVieK36kvnQ1eqzugfA8fFw7hcD7GtBTEyR8ezqZdiXi7gaWntfUSD9cSGWFjmi3XQ1JfkSVZT98bzdKbt",
  "key31": "3LuYtzNZPJ3275jvA4LZH4M8QXisEocSXSUfwLoJSgr2buMvBduH6PhVXMW1woLtn7o3bM1N6P29ZLEYkzxCC3YK",
  "key32": "4nMuunqnAXsoRhYYgzrNM8ThZen7whpEGweuoa5DEXq5dp5cmDySZyGrkLW1c2mBvMUXo7LpsyQJ892mR8mHqXDT",
  "key33": "3zDDLb9w7bAia3LqGhRoThUbKVvuqADx3KH7R5zhnXVf5Nj8ieZGh8zaaW2sLWbStSrbMvcMX1zy4HKQh7QmzrhY",
  "key34": "dFnnEhqkmoYtxJ4qjYtfoAvei2jhmWgtWBco2TuErmy4iowy8iVWKMhtxH9dKypqW4crcSDMaz8tjvUFxtvaBY7"
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
