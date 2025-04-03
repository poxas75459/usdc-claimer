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
    "2wWdHTN1n7uECEV17mZeHn4q6Gg2T6xth428zuh3QxZkWumUyepVXQtj1XBfQH7AnKWK22GyZMfybfEPWE5H19ic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HTKmpA8iN9ZYjMBcGGhJ5LMSDEDHne5daSegh4RtajXNimGSFKTdiqnpX3AUKsXQ8yX9TvHer5V88nYM4GFciAa",
  "key1": "2oMxcoMwnEoGJghkTePSCVX9TqJjVZ5XnBDnkZt4gkv9rK5RcZ3L6JLvazjeSnUU45Ltdikcw9ewJFihVKcA864A",
  "key2": "2LfhNUe9Ub2vnE41NqUHhsLGwrZm843tSsW4GLNtGoFW4efvEo3jBmUCf1SdpdH9vT3m1rTCxjFmaBpZjZXjWsXM",
  "key3": "5iDdiF4iF1sXNejbkNAHryYVn7VjF7Cra3kp5gNCeZw27YjkREnrKDeGaDjFdd2SCLwyyNf84hqxqZtZ6MwcAWvM",
  "key4": "3Bt1ZawLY23WjVPMkE3aquMMQKGeemySb1M3Fk2UmopBzisWhJzDkcwGUARCVwgN8y49zn6QitDRQuKpC5vD8CPX",
  "key5": "5wGufiGX4F191AqUf2mJMpY66tA4Ed2dN5Qymkmo7HriE3hdye7YKVH6Z7ieGGDiGMAxP5rqryoAGv1LqpEXRpwx",
  "key6": "WUFz6MNX6q5hTfPAptEUCWcsiDX7kBfNXee8fL54PKmPJ22MYkonQVm2fs8VL3miB4Sf9Bo3yzX6AC9ZdQ6o58P",
  "key7": "4U5AHdXnzG7Z8VrYeE8DvYbLc98t8cgEtpP8dFny9s58eeGa9rB63wTXJRysPajcS6FP1NJkcGvWUcModW3Yam21",
  "key8": "4CTtoyWKKKFfwavMyDqA69MUmhTQnYWasFtvR3QEEeSJANMZqpv1Y9UzWTUfmJiDbDxCorwv2NYvV82nJgSWeQ1N",
  "key9": "E79iY35sGqsHdWvJw6HJGfVKd49bbxKMMJQhScRxJUusVm34U4eNkVHh44HG7mDxsRa8CkTZgFZ8zFCnZbPUHjo",
  "key10": "5gRUfGjibmqnFKMCrAMbCDhTyDe5czvKfGucZCMzBu6Z8d6GJZwiJP9HWJXDqgpVER7LNmzwgZFYVjvBfThGcZba",
  "key11": "586xfHNGbSBBoLmFA1p9QoP99dtf7M38nJvi6xYqZqY9NoqC5W9v7h3MvuuQ2FkXY7FdoBHg68cAWmA2c1hFHef5",
  "key12": "64xFLhnntR2Uu4LjSM1u61uMzvWfYEmChLWRzLanmLepfF3jvitsBXbw7zgmukxubiyJn6t62ohrfmGbnugo9cWT",
  "key13": "4RMVq2djkBDMuG6sg4F8EKrPqxszHEXtXfVPSDp3KnyPkpQXjEtEz3czFfwfCbGSFJiKAiAJNtcqHhUbEuR1DU5",
  "key14": "3gMhVdNJVJxc93iYhE9EgVcekxAqGagmPNwQp6Vrw2sgEy1pZf7hUeiw53PFYAUgpazZFKdqsd1NY8Fg78F4sZ52",
  "key15": "4h6xkFSqgqKCPCpaoMosKNKzMDw3tdtauGYNZ1AbExYFqrdcNfvRYJoLuVjmuNGUR81kfFMi6T8etB92kezaHHpt",
  "key16": "XpRpkja1LZLypS8DnPs1T3LzBb5JUCBVknDrwrbayvMEXA5BWx1XLa6WNTEfCmCrDofPAaxURSY6qTYzpRAQ5zP",
  "key17": "498GcfQEsPQrXCXx5Rmrna8RixzefooD5wNoRU3yrQFU2xXvfs2c8A5i67d83UW6KahP99TkBoJ4F1p2Gu3z5E36",
  "key18": "2EWr8cFBxa1DSsCRTCRhPUTDP212Ap3YRLmZQ6ibYbTw58PBS8ZN27gnuT224Vvum2fUoh9mjxiVnjKUvhsWyLns",
  "key19": "2q11goPRfQre5XiJFCsoDzwhqL5RwkwgxzF1cmPNSQ7bhmywP7L6UaGqCEoA2QtQDc34wrvMEBPnsDjgkjQqbgxH",
  "key20": "4VwpHntCQhEnmX65BqLXxx4siLuZUu61P94v9itue7up8VYVGoLBxuE3n6rfDbqm53i6xvx47T8yWpPbaZhBzcxK",
  "key21": "5Lf9v1vTZHe58gSsnDZ1rmBEyX2D9ZWsRbaT1x83qNL8hQumdtF2DFs9q122kPQpLWVgJRWjFr6RhutDR7dApArq",
  "key22": "5LGqYXiQ2yLgodt5oBumeYcbGpY8t6b3DtBGmHbjh8nm9ytbR17WVpCHTBXdTgUpNksVNJR3m1wzi5UuBGQVJJy4",
  "key23": "593RHPKQQTQb2yni8r5ioEcfsK8F4myUy4oScguA4hNM5FY4eJNuPjRMgBc548LQoBbcUfZCLnsVKEEZTvEfy42P",
  "key24": "3iZmtjV2hixeFxKRzo84fwpY8FkpQUT4fs5oii1mtQXy4as5WLxXH9yHRT67cKjYcXR7SfpugikcY7cHsFtqHk3G",
  "key25": "5VkLBnChTgGxaYmqT8zVZGtTy2nhJXHM9cFKfyNnGT4muZDSXznu9G7CeuEfK9YunLQgF2ECBHcJ2uHi4R6dT9aq",
  "key26": "HNf9umCd7LSkK2XbxTedhEo1WVJvAkUf3hELv3GLc5nFAq4iTATsy6wVPRez3iN3ZgvGnEotA1PZBV8zsMvk9mB",
  "key27": "63dLTLKRnXnY2XKMENCaKC5QmcDo5iqCRWH5xkgWXzmdBQNpdKseePjtx6UfVfBrxnfZ5aPKq6kZqXKXbXYNEH62",
  "key28": "3dQFBuc78KBiwRL7CvV1pgLLPaR13Ss27tkRQh8mBY5vXVSdz5cSfHSkKU4qJqAW8Xe5vndDv4KTwUG2eZy4H3Gd",
  "key29": "2nr9RqYo7HMkBouyMD4xuz6ggDhKrw4tZhv4t2QvuDDEJbWTgoXUQ48xe9pgUGqdsCSozE5csPAwsETvrTQHQhQy",
  "key30": "4Pd6ymcM8EMo4pFc3HenTuGpZf19XR5ucUEqyEDMHiFG8QAZVYBeM6K7Sr1NjA62QMTGSWiSeu55YsPngQ9tggWR",
  "key31": "4Sfqk3tjjdpQKc1o9nXDqrPEhcG5zB9BrM4ZBUHFrPJsxKMuwW79taAC1DNTPyoEF3G12oTQnoyc3u4QEG6uGn67",
  "key32": "3oHzy14JoVcMjAmw5qZPEwC8gVjjob7vb3ivoh5MtL9EqwY861NV97KAMd9NcCqQ1EnMtPEk3WG7gRotyoLMFsaf",
  "key33": "5B4AMQpWLXoJqXHmRPjbimy1EtxQxdVXqJwA5SXnbDicdEbE1d4K4X6EzSut2yyT23GvkDC9ssM89RzMh9kfNkDb",
  "key34": "61s4D843SpaY1cCHMCrEMRPUFPgfa2wQwmu2MxJQNJZzEvBWC7bZn4yiofkzUGGgAgvMNgq7KxEYimVne95rzizo",
  "key35": "2hcYVb26XfLNe52WET3FScMVjoH4BB8njAAWkWR6vGkeGDFS4GFC9J48rX6w7iRUTsVsBwEg7UcWknttaAiSvKws",
  "key36": "62SoD5t6yvQSu1UkwAHSMAiQj1fz4v8A7fCCEtbfBdYufGcixzrV4jEyfUw37ZN3L2NrhG3LVfZUF5C31PgLo2eE",
  "key37": "BzUyJkvPk5XkmkYg2EoiF8PtKQN2ZgmRyYTacUfRiDRZUHCeFgSVwj2HQG68pgx8ZasR4LcqaPVdFnPaJWaDo8G",
  "key38": "3KhHH74AwAEBWwhU3E8htLErD4awwsgGuAULiQa7Dyb3Csxe3av7ZUix73VjiFCZFhGfgvAUS3ikJi27YNTzBRvv",
  "key39": "31JSPBdDkHjqXcrRJjCYWZ17KxmFKnMSTfB5EjSiiDQf1X2HMECSJZhtMqKWKC8NuGwut5L4wFudHycAW2vgEWtP",
  "key40": "5fP7dCBX8WLfz6pMsQpgvkqtVVDJgL1VWebE25hwjJtsg255F9RkkB6e25uex7e9zrxjEHTWdHBGbETxWBJtUjt9",
  "key41": "4JV5ccLaDvfKJ4GRxqeyPTA5fpiHQYvW3mPksQz7CL1r84wAkSyQ43WGKXC5ekYAYqQ1773Rha4UYLjaf3wh73MH",
  "key42": "2whdCkaxYtJBi4H6P79Fma6va11n96UL5B4aFkQAVNhyJur3UXU4vCda48vAwuHY56JyvtcUuNYqUYJJfznkHiaW",
  "key43": "5q8DXgHatVmtRag7wmVZXZWvy29cijJ4PrqKggREJxiAoHSngjb18JiNDaJypsfh6tjfjKspx8JgGQjtTzJ6ENUd",
  "key44": "2YkZB5XGCUY95FdubfR1VKzBdWsm78qscAsDdywzAysZtyqZgyHWguEeTPjFVe4LzYkZJftf2yKVAao9SrqacoMa",
  "key45": "SwQfYXjrSBVBHauRuAD81x7DB97eABxcZXUeCYwN8BBxiS8AHSjSHRtAYz1er56f3ad2XpTMppxAnsPxx2njBoX",
  "key46": "4PAtRipVoi25g4rPsn7zmcycqtSrCXPQ4qA77frQU9CJbTSQgeVfrDRcMB2jorYZnaahADQtWK19m9e8652Mp1v1",
  "key47": "RUfRxE8JSNBKGNX3a29s9ABaLgCppvsZKpUTHFqLhTsNLHX1ZFC3GdwF2coPCREdTxWyQWHYC2DbPuzkqEtKc1F",
  "key48": "5Hpfh9exsLifDD4p9aRx7GLxnhh9NH9ekRiDyEJ5osULAmjwWdi1oHYskyBvWZsmvfVv1eq6cUrHWfZ5qzX94nXH",
  "key49": "4MX6KmjDxKH1N6XGVk58VYrFS3iRK5gg9mmHJaQGpAb3ZG5SMVKD5F9eGwEwmjqK5UoYfwRsaA1v74k9GQ1F7exk"
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
