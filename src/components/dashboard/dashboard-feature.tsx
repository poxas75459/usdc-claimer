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
    "4FegB5EGbL3L6Lj8i5woGEtGRvgQS1QqgYNsBML7L31kKEjvMc2MBC6HkAboLB7VS474RPfkBDiPcTL8bC9CLAQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ieuuPYLNFTM6JY6rWaNs6G7Eg6bUeBTCvkM58X4n6HTJiCW968gVDEkm32WwX3CqhChiwgesyGrUaA4LZ4V1Zjs",
  "key1": "3QtaNG9mc1LevFrwKDETbzHYN1nshZaYzHkE2XF1kwE4yoQNZtZjQ9W8BtJbGBBUjhQEmzhqHFcmh8zoxpw7QJz5",
  "key2": "3wS1gBWSdZmX1rUZm2H4KGzcdgAtvEXDmjMxA6jgWtraQj7sWVKxWDdxmfHGxerMrEELDdhfvM5RzzBQVsVv2paf",
  "key3": "23nJ6D6fxdAshiAyuZQrGr6eLxH5AfynYdUGtdTXayoSiKXe3x23HiFoXXX3fcktxvnTdaq3e9Sr54RGkVDDsPGq",
  "key4": "333xcqxYVNv3xovJagnWfrqWD78Bxu88HzLmgd9u3gnZaZ2yWVQrtBt6AJDGbEu7gb9VDrpXLAfkWLQmBajhCGK2",
  "key5": "3ZnFzv3BCD38kjYRLgFdwbLnn4sQP2qssXw6RWKBAoK765ruAiGEkHVHJUqwEs6X3rzRj9CadZHJtY2npyF1YST6",
  "key6": "4UNBuyY3XNdsCVb2TvhCGosgskH5zb1dMgs4A5i5zy7Ts7vCttWLZkVWqtzREojBQ5Eay7qCA1T9NbQPu6TA34cg",
  "key7": "4pfsU8WmnV8oh18ud9GwpDy1Pcmp4x3ZtJzVmfuoct2VUHeeTsHa6X4KsAE3CaorcmBPhqQ6XDF1TrZ4grCXRBZ9",
  "key8": "rAxgPvsMh8VgoBJsMrEXBZrfi3qE1dwoZvgnd2Deiy4A5s3bz8pmuTj2do5PQo1czsJb35SeeCTiBHHW66Ur2DM",
  "key9": "2tiZLcVaV2GywMYQE7qPrihFQEnZg1P4TW2UEYcEPqoMjtuuL6KxAuEKycQbPYUtgZP91WmdVgW4mPjnjC6Y3Feq",
  "key10": "3GysBaWrfKkzoBza7xWATjxBXbKrAf17Qfjcc2ay1rCc9NequQYkp9hzDy9CwpvHzsZTWYVgKev4m6HASeK6Ug4G",
  "key11": "4cGDFn2LRkVPbrgPBLxoxVfBPREKZDuUGbKmbMbJ1R8GWve9xNVAmYqC83uNtAiLrz9k9otPL4ye25otU4w8hmYY",
  "key12": "38LLZ2yeNqeCVqZfUZV77LDh3umZJKvHMS46WC64mifGRkruoqM7pMyWS5H7Kfi28cDBthWoaDMNRbyx9eUAKQhH",
  "key13": "4tD2tAeSoEFZt7D88GAE1AnrNRKn3euWN2Doj3tfgHULFvAGqM1RQRajsWGhWckYMGWx67zBbjRJDtt1noFh5dST",
  "key14": "2NtiyDdLTCkf5NUMSbFqevoWZadTMLt8VtdkHeFuv2cTyVudCPa6bLQkwMky84KxgUwBuSqt6D5s1pP1Vm22HC61",
  "key15": "2Kgg7XvTTZVekzGXjMbXvWXaBEA5qLugftYqH8PmLg7t7CfTiD72PHSF49znBXQf5s8Lsh8q6BLXrii6UE9mDMQu",
  "key16": "3rRVmMyuQvCtJBvWDpvLPnxY2SjygEyD8W2rnuHonMeTmSGsm9mBhTvcGSrhQDYkE3u8HUndCiydEAn9YJbbq48X",
  "key17": "CqxARUJy9HNAuG4qZs8zRiebSfgMHQDftC1WmAsdXPT5oQFmRGz2cc4eGSrP8Rso1UZBP4MMLkwxQArepj8HfaY",
  "key18": "EUfyDZp63KUdSdjbJpbBifo7D2t1UsAFWc7codkW3LdaZFg2vqGRWYPFd898cpE97mP3nXLjNh9BP7uUubPBy24",
  "key19": "5TYSB4r3pqrLcrvzVH3ggvtWKK58bnct978uKNz1YDceSqhGna6zhryTuEZY8QxDSjN9yo6GkqofFMryKYQbJrJd",
  "key20": "5d47TtGqtzhnm4AAae2Cb4LW1ZaxWN7rd4zDpGVNbb4tgxmjyycMbKZiECcQTTC1b3sacEpikeakCE7VDyoc52Nw",
  "key21": "7W7hcGS4PWSNQQizQPVsqEoaiPJox6rmyL6RQDkbLDxeSpgqUpBYkrn5Yhv3m4uZeiPMp6JJv6RGZKrz7DQMWg1",
  "key22": "42gKQVXnQAu1SgSgbEtNmt7fBHizKCZhyTKNPZREGu2CZmTnoLbXeJuPp7LgfWGKwaFHLee4Z4GwXTv8JLqJNX5d",
  "key23": "bGJGUwposMB9uphLcCufqV5uuPcUgskUje8jkm12Kdgudee3eGUyAcbuGLg21wzSsGLyDUmaJBNWdgvErP4aoSC",
  "key24": "2BpNP9TtibnjnAZpKCMFWKG5dEKHBWuWGoPeYKodafmC7TbMkSJqXb7SR7BUaoahicu9DCvbwsMBE8sQfw3iZvvn",
  "key25": "2yXndci1pUZYYBmyE2GpFHVbMhimCfuRJtP1qcyj9ec7M7YniddpyPD71PPA2n9KqxnwmuWRy3b9KVdnsxcwmuBc",
  "key26": "3Qrrbh2QKxLHqh177TBDtGtzG12Mks9evZx6wsh4wLDCmocevkCcxj9U7AtZ4S5CL8cU4XAvpW5atjwnLQRHdRgD",
  "key27": "2cRH37LMraCrDtJxBJXDsohNxbnuwuYsCQYrjSwPmeTuw4sngBySVz2wdbr4xkNcMSnkbXRHr3sAER7QSwZX1PLw",
  "key28": "5onxRsZWg7grTpCaifeZqHydkxwBwb1G5dvn3vZ9TeBfnLayf7kEHun2Mp8Ue1sTs6gFe7omsSAhmJWpyMKRS7qM",
  "key29": "2Voms9FJdo7p1rSjACT7mqd3GNoxamM3WpzwJkzxPtojnYftAsid2oKF7bXTgZNbJ5dize9FnbEUe5dwaL1NY4QQ",
  "key30": "2wgstZdwb6zpJ3KrAWAksTpXKfkBcpZr4kcxGPyEQtTc7fGobvYRzwFDzdURUve7oE39uiLEnRYMLwLtTM48b1G1",
  "key31": "4ut5Vud8DZrBYWKHRz32nkKoCAkYVa2Fs4mwR7iSvHzpmRyPbXJuZBRQgdtsRqViKjrsZ2yyXRA3J262KBnTYosC",
  "key32": "3jQqq1MEKWmohVYsQkZxgiXP3LdFr1aEt9ZM6aExD1XuTD3oD9FFrw8DdfM2sZQGGEwapeSZzeVF8WKDp5zzRcgc",
  "key33": "5NHACuEHZCdprei2fgCEssNyv7qtFmP8T98dKay8PDXzj9bRr4prz9jy66yV9bwiWhNpE3iyJK8QK8PHcQ1JTqDQ",
  "key34": "4mscK2YqpDmYYvNaVi1iXmm8KvrnSdKW8iVKmD7BiSU3Fubt6hwx5DpmmQSKFd2h2PENMZZwxu8STNeFR5j1TqQk",
  "key35": "38jWzFY1shVddRnmQGNS1spCYE76PTcaWcqMYnxThCrXayou2cXnhtKLU8pcPMeBFBgr5cb3YjYbkSfQrSZew8Zk",
  "key36": "4rAjLhCDPFgtFwxiysjKZKkBLcyCnyD2b12wczbNnmv58RYSnktaqWorTA7UFJfi1Wdh9fVzgMZgSSA9LV8NCPjw",
  "key37": "33YLeLLGAc2a4jNdobWT1tVubFF23gHSnPgQc2Ak8JnVvpLEVPBFZutbtFtAPNSXr1uxyYKaxzPVCkz5mPJHBwiD",
  "key38": "5PKmBGNq4Aibb6Gf1T5xg5kcUUHczkz1EP1qwUCXKE7dPMsNrqCtLpcGbG2VCQLUoVTvmdQii7PDvnSfaFuQHeMo",
  "key39": "LaYtVxKMDEgroUJ6LA2gbmRKiyPxWhXXPUZ2So2pQoGUR8FDUFdUGaHxfQM2p4GMsPBvvRWQ4hW5qxe4ceQQuZR",
  "key40": "1dvXZ3BxfooTRKMf1QhLhGXeydx9hBZhrJ72KNYtbJqPWwmxvpf5fBegfg1ikwTqP1mvNh6YJEsfKrCyTjhRxvr",
  "key41": "1Z2ntvGsJc9zN695kuhudrMjR7mtT96THd1mAfBSuBPeC4p6meSB9snDaNQ5sfSxpyabUJpKMxqVwq4gVLKnHDP",
  "key42": "dN1fud4qJ6tnWMmHVD2gJ5yNXtZJp2hRjHWmzPzWgvKeep1Yn41LCZUdfvvrj9BJoztsY5mh5RkQsaURWeDRMzA",
  "key43": "R9ExrzqmhRR41oizfYbDAJGBpmw99rVroJDQokTCcPeQBo9S4nUVoEGRqiiWykrwZbamX1pzmKpBFscLSFhxqSu",
  "key44": "4bFHM1M5zMXM2g4rSxDktc6zYd5vpXaLANCc9wSo1d8iBrMCzUrxYN8QmhoxzTeCN1ZUy5zJG1ZFWXjtrmaffQC5",
  "key45": "3u5piA2rnjtyYi3qjHzx1f9Podxn2TzNuNjTda3xG9HuVd42yycLgNvuqU9HVv9M1aeVzxTina1MQaUKYXgVKk1w"
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
