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
    "4E6PcQwteQkZvyr3umdAvtHrBL2x8RD11E7tUzR58ZF7h5NUoWCy8MsgyJ4bUeWeLdYBUFUaooqEkKqrXTSghNBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DRDfF9rbekQexAoS7dmF6ZdcLyK3caTZM5SBonUTdSh7PLSc5U3Ya32wC7Cs4DaTcc6YHzRXrY88QqkXYJ6omkk",
  "key1": "JDrst7EYg7txiBhukKKF1s8hr83xch6ZyNGQGrjvSDPzWeh9xF46YURQEDGHANef3TPX5YznM3wJtdA9QwNTJfL",
  "key2": "578npYx1qxqBWztSnjeQuYbcvZZedDwJ7h1eaVLWXT5K5ExUcc9eE422rWx2knRCVfrGVjtNSEcYSJCkCS8GBb1X",
  "key3": "ASiyVLNsJGhug5WuCULCVikaMHip7boQfHFKA3Pkcv2qpNfeNM8ek3G6Fdxn1k8J4na4DXZgFm9GLMtZ6YBTqMK",
  "key4": "4i9YB3QEbxKQGAqPKQSR76GFESfc76jxnqxayzwN9C4rgzvVQvgRVckr1T9VFW6tCtmC4kFEB4mFTW3T7rBLk8uM",
  "key5": "2ZwC7KyUXkSKXg1627BH3bFeXSQoDZ4rDnKZii7HzbCQQVdrjrqWDYpKaCBhY2WGCLN24CWTrkVyNGUSLhBeRR2n",
  "key6": "4faMqf8kVea72LbXh9675srvBHzCjwr927mW897sV9HZdbB876WF6oRRCGUUgEgSenRYDxJVPYgxw34RkYiSY2zn",
  "key7": "4D2YQYSr7GBiFfQ8J86adBBF4yp5NbHCgPNoiP8XVEgZACb365cN8UqawoAQDE9XftpvQ23XvY2YLm2unmCBfD7L",
  "key8": "4eyUv5GSdFnPhxQJRrPtjZDTbGK4EZ8gxbwsAKm6yxqBRmPAhomymqcCBc35rtmaHXSWpTZJcDcou9r2G98Y4Sgx",
  "key9": "mNmFc5u9JCmFuebTpUCPc64pZtGVyNaKAfiPnduN3dUVUmPpcsHF3AxrdkyoUxyFLU9QC28ttbNLCoeFBvv4zdL",
  "key10": "5Y73pikMQhkJeC2ZWxCjbjFMU5okakHSHerLj1a3HxaMqAAt8wC16j6N2sToMbgtgw5o4hVmVpUf3VjigcXW88pZ",
  "key11": "3MJaqgc7b1dQLhAfpG6SHcHw8YyAtY2hDi2srYVgufwwZQMTntcZrNGWxeDiUD6hRAyYJ1iKVo23asLVyeFTKriq",
  "key12": "2FZeUiTdemTDQkybAZnugfBu3fdNGXA86XsV9aq1EAcJTRUAJsQvXvMySFtx8Bfo9Qkyda2hhqpVFjHuZfqgx6jA",
  "key13": "3TxNwwZ5KKrAGUXfsL7sYoTAYSPQzYJr3ZbQAryq2yc3ParAv7PVhkJzo5QHoCoGtcDDZaJ8ochfo9PgEPsRSpMf",
  "key14": "5c1AXc2p1BKwbdmKtqNSnV7fjqbCpF539upsX1W3vLzR4UPhBH6Fs3pUaHoANRiYEMd4VaMq7BKwPZL3oVjxuBxm",
  "key15": "375job3GSumt2PaohxBkPo4eefdP5h29t4SNZk6JuLTyVXpiu1D715jSKp8CaqxcFtS2cmPjsXWgNp2Ni9xm4C35",
  "key16": "2f6HgYGXjJFtDSBw7HbNP4w8nAABD3ouvjSuXhtyvWWsvrCDvo5c5cKZ2UHWcwdafPLGehHKud9gJR1BNuoU5kiz",
  "key17": "58FxxXYEi64JhXanetuUTQaTsmDDCLFTFfhh2cLQWHRS3CBfjgNN9zuVNFSXRHFcHjH3TivP3QNNrbvsDaeoXrLp",
  "key18": "62hWZqvrAMXuguxrt8b8vWoEZRUSHaCJcJk32vn8Bs4hJj1KHSFoTTM8DabyRpDQT2sUuVxkrBcuHVPB1o9xm5UA",
  "key19": "5fdF1C7YY7iMJKQYb87jetF7a1rD2UVtQHGZn8PuowngNdakj5NMzvv9SwaokSD4p6snJ7uRJfaixiWAQLYDgoPK",
  "key20": "2shjHBnDfNe8sohgKag3zo3ekZBE3iMQuMFRsecHppxAmaiDwAKK2gXBRxuWzYRr2E4dmuDngNwWbJioroLZLLvR",
  "key21": "KjP4bZXBW9WrAdDaDQDTQsRTeVASavF8DKQ5KVQSNTZgZb7LHZKdp5r6qw9R3By9NNRvyQbfGCeVDpzJHY4Ztko",
  "key22": "a7QEStGNdg76vkG3nTXopRymQ1DdqEDtwxoN1fg6VTLeVHbo6ccY3iYSM8FLZNTTEYW7RyDGBzCpGGSPcrr2FmK",
  "key23": "5ivi2quKGn4YupHx91VW5RmumBq9f66GBggaZw52pR7bhZFM1eby4XPmiG94aSBaXYp3TWVNmMxVryR6nSG33d3R",
  "key24": "2UaYK9AWtgRumueqTjMcHRLzNbJHE4Pex6upGMZATrSauYPEMPCsTHfWGbkA78BwtUXGD3d4vX9Lzy6ukfQRM3mo",
  "key25": "bMMMahNL9yAX6eq3FmaAHKdBdR7onmKEcdgkvP5gGuJy5gd3SyZCeUJiV9Fv3Z6TNftvosWPnngJBQzwy7Pb4DV",
  "key26": "2U4D5uDLdTVgBuAh7YnmcQ53Uz7fsZZF2j4zrTUhTD8yXvdSqfrMRNtFcswYBFuefE6MSn2hHt731hx6g5zzakM9",
  "key27": "4zEKAvTMvgTSXhHTCkf2Cw5ZjB3swMKCAfAoj9Uw2NyaVp1opa1TVzL6o6wp6qav2B8583n7osuuHDPJHqkAiPgn",
  "key28": "3MT8DkA8gWaiN7MzNAZg3r8G4NqRQczMqAH4oX7zzbmYj34Fhfndz475Es8FMkQgUCim9F3kgTmisTuWoSytqhW1",
  "key29": "J6xX513Dg6h25A96kvANzTGmkiKVcxkbKmCwXJvrtj4s5q24oaRR2Xs2EtYU6qUq1qyHVRwCkCPpK92Fb3E4vsg",
  "key30": "3xaRQwfDCjXLgGoY8u31FT3Du5qrxwno7RwyKPNizKgwggi8Go92yzZVY71MacWu7Va6YYVrsbjdTsQboQMJgaUe",
  "key31": "59SjmbNkpUiqgcN8KQoUYGNZnJgriDZHrQqK6ZWgQkYsmig4o22q6bjXTq9psJUcAzypqEMpZL94AZPtSMC7xEm1",
  "key32": "2mkhNyo38DyTBCgPkfkiTBM57oTReY9yZHPHcWXYFACmVyJCtyqbYJywT6TQFG9o1bzGq5vyyStDuyRtQL9SCrDx",
  "key33": "2nDFQcWLMszqCMJzj3eqmERjTbaaYE2mqvdXXC3oaRg9o1oZqUdqamHKFQPR7wcKJVoM5uDZLnsLqyREYPYejDVC",
  "key34": "5sWhH7PvNRKgHY5Tj6M6E18XjzxJaGr2kGT9MSwiFCsuv2ZuEC4yKZ9zvifSqqaGgF6Md9HZv3X1eeS3udy5LRmu",
  "key35": "3zysQnKGfc7cyXGryknd11GNxd7SxF1wtjeVbgEfU931RvzJrhL73qLcu3yLFVyuFhzjVw4h4e7m5zwM2iJ8qLn4"
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
