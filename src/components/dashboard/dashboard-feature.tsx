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
    "2hEFNhjMZBnpVnua6uMABSo2RSDkbsdD1oGMK2cgFRs9NUvB7aMsctt59outuUGJzL9wSxi6B5XBDCCCjYf97gQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CmngEnd36DmXgBgUjJWyzgtmFvJTMs6HcjcuAiRKsUAxsy4TcC2snD9BEj7BR9nUBhx81p3wWu1SPTKGA1pafxd",
  "key1": "NMkPbc8CkguiXsmg3txBhANYFhmpT22mnKAAoXC1E61hvt9eday9umH46dNvtva5yVHqigA4yyfEPpQPCX9iewZ",
  "key2": "34FyPEFyeUErxPfMGmtUgRM7UwxhGzr7usFNgKrHf6nSZTokMC243qgbfJzxD3eBBFKCZagmrUjCcx6ozZbs5YHH",
  "key3": "4ocANecTMzZ2ah5X72xUR3vxwMhrreKmxZ2vewZCrq2JQFFNN45ajA9wdbrsTNYc2WykKMmgxBBa1pxT4WFc5i8G",
  "key4": "231PWhSdSxV4rnoy2BZAXyToxz2KWRwSYYbvVwVxFChqzsu9dFHjFVbDxoL1aoRsTj5QFzhMvZ4nkHuy8udnQHSQ",
  "key5": "4QXCoZ7kSAhtk6HaLZFVnyWoZUVs6HAzK4b2GzZxWrrhEdJ4Rby6gxQCpmzpwWWu8pKXDwugogPeeQyed47mBY5D",
  "key6": "rR4uXvbwdYsrNrEc4kh22GPZMqebqVWUsdNXqpENdeQjDgF2zxWs1bU2JedYd2x8w1bTAUfjuT5NmzbHMy5Cann",
  "key7": "5witqa8wmmYjVsyRfMVUKZk4ypaDxaZTZmZ8jr2NSWEamKxeiksSGr1cKLLKa6rySUnznt2P2Kg6ybgQi3KRy5yM",
  "key8": "iBbJLiPBdmeUxZRcGxqhexFK2CwLsyCwt8D3VQYhiyS3imuQeJ36FaGL9qxWXSUsZDWYfXgLueh3XvzAenisTWR",
  "key9": "4wGtGZSpft8swLtEmDU8GERq27svzQ3PnYaUpWWkSyDSx7QpgkYbADgGsd6f1QE3o4sbqdfC3AEUNanWdkjjXj1",
  "key10": "5GjGU72CQ2mK5sgaA6nvg51ErVj7ZAfPD6fAyS8e5JbjKNZmgqR5haE6VvzgrujuAV1c4AAerBcGCNLQ28SQHrEQ",
  "key11": "2EU8PcKfGTNt3tSGez8s37HrwZTK4Ggztz3rGKwnFokaU8urNdkerguNVtfWyKDWLUSjPY3hjX1kLNfSz6Xa2icg",
  "key12": "q4BKQGfAGoKbdMqjz1yxDHqsrHWmLZoiLi48NSUT3WJo59vvuXFzLrtnioRsXSzo1tPtUC71GrU9d7ZiHXguknN",
  "key13": "4oWkUgGetRXCuntbyQUcwz26WNN2G75jSRQyotW4V8tPZiup93Y8ic7zWjRduta8AdHi5FjaUGRbgsxjYf5Pujv1",
  "key14": "3HjxcxpbQ3BpDMHXrFCTXjDTgufESEEWh1WjkuGvGvBo79KrjxU5s1xDr6eBF2hxP97LJMUUU2QyqKEwyGKswFKK",
  "key15": "wZ7t61PEgM47VTA72wMXXEzxXgi25GWyWPzzxyh8ULraFPVq5HkrAXGc6AEDtN8WHDiGb5N6ar5dQ9YiobAqfP8",
  "key16": "2uUu5inSBGD8T4C8NBhFBkkEc5BVNxFyxQQHAFvezcYpQWNUTGGF8Zo7GVHKwe68DaZ4ocLnLeBAW6Y8EWMbVAjZ",
  "key17": "sATcjtQ3rttLcyeub6xnriTfyJzp8dJ8AsaCqcs5Zom1A4ve1KGDkqmJ8yjZEXdK1wPK6UgVPGfPARWmhFf48mL",
  "key18": "3wR9nWAc2xkwBBp4EZaXnkfjgb44nw5pevXuPPAQMwXXJrXhyCpWXLv5RdAX7yA38UVEdxQHtA3gaQWN7JDtMXqk",
  "key19": "31tgZwWx4p1zWL5KHBzXYTXVLcueTHLnx6vZtcDJVZaF8uA4LPfkjYrBr9dZJkYxJtF93sfinq7FActxQrLgZ1qX",
  "key20": "3Up9HQ9GHZHgnQfNmzsmRvsJs72tWGHdZgqNBFgoomVKy9B8veJPf59AZtoD5JEKWrepjxRmHhVyUiQUSFdPqk8A",
  "key21": "2sX6BRugvqxzbNpcHHzhbhzkLExtLf455cyUUw3udwpR8fkMTUG5XgxJSY9ko4eL11kjhKdfLu9pe3DZbDp33pee",
  "key22": "656nvhUVHzH7MnXFhVT9qbeBGgqJS42onr98ma4vNpZUv2EQmviAQYz2mSty45MYMva3xe6JQDk3ym6q2MgHu3CF",
  "key23": "4u1uw7XsCAKEgooVbvnmKiGQxuWg7BsnU1UJvCGDCM6jACwocKhmu7NZ7ZHwRwvWo62fGKQa2fLoJzw9akRZiyNr",
  "key24": "4GACW3gZ9ij8NwaayVvukKnkXL22bw6nazUtwEpLMUGpvk1LVTYV6u3kYVZZ2gYx4fDP8hy9ebNX1BxUJFKLYnDM",
  "key25": "SMkis2jnBYodurYPeERVWjqQi7mVpb1iaeaqDknoxafjx5CYVs3XvquZT8wL9Xde4SRZCpJKRrUjCZgfx748s4x",
  "key26": "4HM9q6oL852GyFe5DE2VkzXcy8Yzpw2o2HPcypzYmoJCRarTgYSF41NU3eE2E6m4aT18VkXjVWyqutrW3eLZzTaw",
  "key27": "9uCXN3Km5pmfGobsVzxeZDo46o6ErLegqWg2qGjcZe4AHHMuEawA4XPmurN9Ts5yhK9Y4eCdWNJGTqLmmdeRp6o",
  "key28": "3uDvmpFukt8jwqfFvpzjVzagFii3omPBSBG5oRPeQB5vUCtr7RFNVR6HQQDeo3L2ruXgcX5v5hzK6w5VFNf5X8nt",
  "key29": "4Vb6Yw5SD9SF35YPZgn3iR7uUuqehccH1JbuN5qNJ2oXTjmsXsTJv5GAnLFzkCzmzwvwLsPVgPpYbTzx4ZW3kLEo",
  "key30": "4uD6vjyggf7uamcQ74BckE8yhtpk6Hp6so7VfycSkCNUSPv1gqXbZ1uigH2yGQamhBRycuHwg6znZT47rquqfUmV",
  "key31": "3SUWjtYua2NkfpUCV9GyYNjeZGThf7X1pihrkSceCj9H6ckddNZUWYHpbUmy1EnhkK97NzqeUTwwVmyaSq3e2um",
  "key32": "eGVzKxodZjfyxLy1tqnMF9EDCgvZb87J7rivevaXmEyghq7bmgscRrxFMq1tFkk9wf8yfzAmfYSYHyiuYCk9gt9"
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
