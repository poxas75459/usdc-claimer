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
    "FZzJwF4Le3ZajAT5wSXJUusnKCzP3BLc14EitVMzFTzy9d4P8LuH3CG7WTrbofYbmmpYwcYZ5bzD6bELBuZdpzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58zWquBsAhaaMu1EF2s1z2TqNuLzt81HUgCFvk83V4Aho6q4kSNEXVfv4vhF8PkDUAgaamWHLgtfBA7FEW4eJStE",
  "key1": "3EzfMUjqks7b6nHYwtweUXkVj2jB4xFGZ7uwanBg4yx7qHLYRHzorvrHLFF5BpwWsVB4xZSHCkLFX64b65t6mMTk",
  "key2": "5DECjgSWLTfyouDqfyw6xKE9Hr239Y7PaphKuGm2sLQjzNypy3Fq9UVopjHzaKAVR1xCWhKHMWEQY1tKtBiRJcuc",
  "key3": "31n8CtPZG5xpZrVgMdr4y3xP3Fp5ibhem2J3QESStTxPKbYXucjjF8mKSEkpsGs4T5wkgDmXno8HhjgGvAzrNv5C",
  "key4": "4GHM1eedAGDsBYhnca2C6e9qN3qaVtoRCyd1WeqgtKzjtUKkwsF1wNdpYTVfRrVRs4hPG8daQUNG4gj42cRJnjoG",
  "key5": "4ffnP7PwdDHnrwAukRoFndDezxoE68yaWuPv5zgchSfvLDUxbjDyT3xidKgsbtKuBy6S17LrBuu6Qe8GJZPJfVpH",
  "key6": "2gA6mXtbTLwcUT75SdAFN3hwtFN5Azt1PTXTcENZK5Yy7BfvU7CWFmcfyszRegrkcGbLNoVUCaucFnDw16NARJYN",
  "key7": "2NHGqMjbaCJxcYjHEA7x9nLK1jotsKdHgFxPQ2nZFLzKoKPcAtUm8d4AGVZMWcTXAsgc4JANYrfaZCdAyBuFJ9d4",
  "key8": "GaKpNBYiKpHR8mS6NXWYfi9jxwzcubDb22TZu4Ra7WvQJJAYhnM6MUvqkzzHakHmbyAQz2B9TkhHrpBcz6jryXq",
  "key9": "5C39s9z45GGEVdiGZEmMvw1U2CMjGmvUGEAkS51zjRdvoYSTBz7z4cZZYqwzj1SwiXLWu2MzuqNrcAXc3KNqnZbX",
  "key10": "B2tp3WDZJz2WmYw4XpY14jRzhhLbE4wLbRVb6o6FPqr8iAx9WzBHrxbTYMKS7MTn7m5HFFkUv4j8EYLHtUSnzys",
  "key11": "1Q2njvseBWzUsp4jgwepmiEmRLMyE7bBLLB23gtqbqPrFA4gJ94hFsegvr89XjY2YeDu34vYHDrVpurYvaa68DS",
  "key12": "67SuA4PHrosMfhUmxMtuW84qBgmbSPChKLVH83oU5pW3QrF4juJUxnCYK8ANVmiW1pnt3k13LJaq3DtLWc4FBe7i",
  "key13": "243ewXcUfZNMzi9HXUwR9wR2EWEuMkycGEQCDrF4VUeKvE7RJai3tL2YzfLkqT1NGr7QdD2RkzdCvccDA84FNCYy",
  "key14": "44iJNj7BSusMBe5jf7c54gUAdR45T6ZkHYXowuU9X5MQertzHq17JCkWbVdiDizHPunirPWbgRYQB4urC2ZYRt6N",
  "key15": "3qqwCuPAbXMQ1yifhG8YiXmA87d5tXnVbCoxJ94KK6xxYQucKuorBCFRxSxnCwb8wCECBHxG9MEQSk3zncr6TU5T",
  "key16": "43pLL2HunDQwhJWpqwSZJjc4EE8jaLWf9nTJLksiRsA72rtdNu3ZkP72y7KNsfvk46PTqYPz75FDrQLpd8z143hC",
  "key17": "2nuvucpDP3NMon3a5cu5jgutfLAzeJs9q4TgrLfqCaCcGuXD5wxNM6Hi331VvkvyFTp1pPC5qmsiJik36MwVSQ5v",
  "key18": "2nTZyXhEkSyvSiiQriSbRhEaGB3V43TbbrvwWZuBZaA2GF5StsZNpTthm8YcKiFFrr9ZbxzFGBZAAAnhefNDjgzm",
  "key19": "4TUkJRRRhymUPYbHvcAJHhCy5AvsAsvNA7NKTYBWsbLysc43ZxFLeB42bpqtz7iTc2vhCidQg7cg2ZWGt13xi1pZ",
  "key20": "5bH4FNAHdUoYxjy9sFpzZuBReHkYRYLSa7cxQiSHeEqsfc4t5XV6cMSFfEVLk5yLoMXLjW5vYSRbFLr4wcYLtgAy",
  "key21": "5EBkU2GhB8mCL8me7DA4s4nKFPV5MbQkh7qj5Mnyy8UmWia9ambdUVVqjex9nqi5TwaAQg9MbDA7YitSohoe78St",
  "key22": "4i8z291tA4PS5sFGsAxg7sfxFgNyjiSg4RHiHokd1qs1PfjviX2cWJB5eZWpSdHQ5U4FnFYEWF1BxwAZ8FdoLusv",
  "key23": "7oDnhxgrFiHWo3idQN6U4HyY6sm1Rjr4vkzx4wtxbzURaNX8Tu4T2oob2GEgUercB7HwPMDX7e9o2nujYfPj5nx",
  "key24": "3NSexwGG5fE9sRQetiFEGUJdgmsnnft6XELinLeiJnGKHHX1DB4Esnf8gnMpv4vh9SiHBhtsJ3Jp53DgMJJVPjCX",
  "key25": "46NyL4QD1oPMtiUj7Dme4A27XTVmkQpGD5QKe2eD1cKDv9vk7UGjiS8dRrcraWuah9fsCGT9xjmLbQ7DuWAHNiM4",
  "key26": "4qBFRxfwtsJ1VwvY3XB4zFsUAAcYyakcjQuJwmLDneMQv37MABuLFnB7HecuPibUWVZL8r6yVBq3i1iBWJ55CDtj",
  "key27": "5Ven3wPv8ZM2ni7iMQoRe7hcWvpoPodErNxLuLaLhfRKqTkQNVv9Rnz9tTrGrJF2YXjSQSSXDDHgexcd7NQJSaVa",
  "key28": "4FrTKEWcCZ73VL2EZdmj2tA43LfQSiWqho4NpBvQ6yuBrk3tqotNuXuDbeVPcFLNeRjhAddWYesdJSgmLFpFQHpv",
  "key29": "2Lad416QfXFnqjbShKd8cNMEpWrA3tobULzycHjaQMiX3SGibWeu5ttBMbYDLVG7K93etq9L5rcfzMmeEjwaE3Zi",
  "key30": "KF6S3yZhDSv5ngiTdErKN6FuypGMvw3UsErEYjnoyykVD62kXh7SirWbeydKLhn7BmUNvWJWyJyRAGU8tEQiEM9",
  "key31": "iCbzZgHS214Lc2XDtmLVaXv4z3zvFpSZ362UiUSMKM3gPKtG9UBzoDLhsq9yTYf4n6pQ5dhEhNLpPwy93Fyu28f",
  "key32": "3b4p2YEaCvrrVE4sxtTxhZCv6KTt2UY4EDvyAsSm373bJbrxiLnfk4VYFXJAdgY72JhNzBbXgqaNqoyqzyZFphs",
  "key33": "54nYfENs4T2RoZwe7q4zFR2mqz3Pcan5TNSwvzqc6SXp4M9LW7TCacedi7YY1uSKyT5TM1dbuMTVrWoKrGo4VvUa",
  "key34": "3wLiQsfC1mwq4QCZKwajxTGzQmRiVgog6WZHgiADDjKXk5hfuWwCyfYE5nEivDQEuYVgmCvoz8yzgBHVXpxXVoo2",
  "key35": "3pyeo4F6BrQtRsvXGbCJvAuqJnH8upkFem2ysgCCTLgbNLnv4rsuGnrJtC2cc1UzE52BugiDT7cfnWFxRja9NVWT",
  "key36": "3Dc4g1GFdQZgEngWM2npEwpZfCjfWx27gnqQrs7RhkXxJoND1WfxKF3UWTgbPSeLTT8D84fktK6nYqtZ2GRw82Go",
  "key37": "3MY48DKpXy7xgUDBHAGnDS1jAsgDFn9TzREWKg1BRRergMw2ZJZY6ipdjmaBBpaGuqcPkRMoUciDDM1svv6yUwpm",
  "key38": "iD5ZJ9BUwADntUGkvTC2gEpgKHFXSZgPfu5oBmYsfqEncX1JrcgeUnjnKjvvuCpWAAew5aTfg2zbYeAwJcf6Fhi",
  "key39": "3yhVx3X4DuXJ3TmMgdGRXHYHxu4nJejBhtsLufaEzGP5udDT68xKHSq7Jj5YoQkzWXqPSooB18FcHZsoLVw5Nxj8",
  "key40": "3yCWkseRPk3aFWQizJP6L6cDYmdtYJ3jVXYGi7XFU3b9GVcHg7KjELKB1XB44TgtLj2aey8NjQUeaFggnHbx1qXH"
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
