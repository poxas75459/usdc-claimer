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
    "57DSn24Gzt7uDoD18dou6vh277ff8kVACUWzHzNX6R79Yn33MacbEZhSyFAnMVDVby8Y6EnrZshB6nuMa59K9rnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63HWSi8BSxADRuZRNRk85rnRFyrbDQwcSnD8vkC533M2V48p1NC8C8ECAXS66b9ozLaPWDayZXnBaPYjjm9w8LMp",
  "key1": "5ksLj4YjwMhKZPvPsdh9F9grz15YoqHXmVJuAYLYgEJka1urfaNyXZ32oYrGAdyounTpoM3df4oGAP47xsHNDaaj",
  "key2": "33X4G6qWVCK2nnH3uNRGrEsg7CkrQfqDu45QJXq568MNLiqGa1Gb6sWgj9oGPHJ4UkLJzYbdgef11Md1EhQGcZXv",
  "key3": "zCLEHLBMzSFU2AWzjDQkotX7NydN9fjWaJpAjZ7BvcZaSUeYuTQzRmMAYh8U639moKBxkzoz2U2Sjj6kGEyNpQG",
  "key4": "n5C1GzGdCB4p95H4imAxrs81s9L4So6UoB1ivsf2D197ic7BLfdQKsgcXntuFZui9P3XsY1DL62ySUJQWVpqzzT",
  "key5": "3yVwssXLijhuk7qZS2iQEzpASwKokTEcYyDAHLpRMjAhJfWT8wVvaC1GSgzK3z6V9x5mSMD9ytwh65esvJd8LzBm",
  "key6": "4qrNx8rsYgJAcoGr9c6G8Yy3VU2Nwudyiqy49ZAh3fuKCw4bsjgscgJuvhaXAgEN9eGyMrzVZEa3BVF97mvQL17X",
  "key7": "5d3aQfDpwwsJV4vYWz9bnMn41Vf52s3bfafcUgA4jtkHDnawuL1QuRJsLXcJu968i6ZhqrP1CuEzfKmL9dBb9Pg",
  "key8": "sGkzKrm8fQUbhUPJDko9QmuJJaC8HoCjNamzUU1Cfymfe8F9MWut3KSQHXnxHHVTsYkUAPhSq8ZwtSx7nni9C4w",
  "key9": "4MiXyBgFvqnPgpHDvQmjFampa7LAqstjMCMkTjTuwUAt6NtLLe9hYk796ebHdsFqudrgQtKRKu5NuJZQgdbMS8oD",
  "key10": "486pVF2NrhuxhBusyFEk7D2SVs5JMRz4ixJ7333c3WzniqFNNA749SSsZQEZiNHwMiaG1dau9Pd2rBfzWcHUG5AL",
  "key11": "5Yk9c9pT5vvzeEh8NErpRP3jpBGNdND3vthghuPekLdPyy5BR9XKUQCp47qmkBQpJuLnWpGeytw3UR5HZi7QEfkY",
  "key12": "T1Mf27jTYnqDpotpeFoFT4jKHdPjS5DSKNdyeXSSrmLwznfArMVPQtChGW7WV8UWRt5D4jJm2aJgEdCdHftDgTD",
  "key13": "3BugepWZmYtXkW4pvHKadERrpizJdPERS4bhSZ4unSiZN5UG37RPN4uT4cq24L7apfqJx2h7bm5f6DQyHnTGJa89",
  "key14": "2SR5CQYMfnuABzdcvzLc1hx13oYynuiwQZoFPf3YFWzYNGEBudzYXhvrQpLVvPf3d69UUvrPUcdNEGXuNkNbvdKa",
  "key15": "5AAwRauXZKLKivT3XxdeHRceGvW8KzoMbMiuSRc9Y8EpCdKsVpG6jvTMEqeFBrGTQAQWRCj5XYb4jxu87rPi1rcr",
  "key16": "5PUEVLsYxfokAgVgdfu5q1znrcBe3pUj4FnPdCoiKdkmsQGvoxjgbqmxdrtF1udGLHbkP3Mq4fQhU6goRrXjYYqR",
  "key17": "2KAgvLM4XgjR5mwb7BDaUk613yJ7MyQs7xSNPtY1Cnt6qQjBNdzZ4SPdBKg2fmovyah4UXn8RArPDvTzfWRuS5qX",
  "key18": "3RgzzTWf9mFde1oigRpNb4hnTn4AUi7Jun7RUANuBauy22ELBXx2oiKv47iHUKoFi4T5LxRZUJGEymLjg7RdJNpk",
  "key19": "nNhgFtCJshkb3YYJ5z1cxtL1eA5kCXdCgYWm7SGgueM7ATSShriZne7gSBXBXj9XjuxFZtWsnvFVRVCeA3Xb8rB",
  "key20": "k7Wd7EGVCHs6ujiBE7BoRp7756Kk3o8v4jXcrEirwHacBeBCST8pnZfAP34w5SLeW9PdAWp4Dci2ysXCHCXcYTo",
  "key21": "4zkN1Mfmg7DTiBVE61nahfRAhhbWswm3SGXGPjjuWPYj1PxuN5b9n7ETNShCZTq5Wx46uL1t89xukLfYT4LozNxJ",
  "key22": "31xmmBWpHDyiTBJF1H2U9KfZrJuFJpXAkieKyg7pXvuzJSQxbuuPoS6i4sF7DmhWtNoq6R9XuXJrX1rLzZSVxTv3",
  "key23": "2bdi3p1qZah7m9VvX31njp4MQHywoe5CAz4NHG1LgDPMmu3bWi2Z2DY5aK2XUg7XprHCoZhDBS3y2oeGsCyeHtqy",
  "key24": "NJ9mfk2x9RXsuAZihNRifaM4Ji7B7mwytN7sAW3u33kHFAGPTp7G7NmNzqptG3fFUn2mnb1nZKoLfPmN3g4X9nK",
  "key25": "5TSgPByP4ELnvuKdBdG6ZK1naDsmXRu6wAaAmp8WB66MKEQFJKMrhUGWZ7ZPsSJPbbpxthHDK7QESDjpnZHoXkNa",
  "key26": "4TDpL5Na6wSihcNPC17WLVt5acWFZVgkAMdKZ1RnDJdpY876vUyUjtK97z2PSk6gFViTRzDEriEetc5FPeh6mtkg",
  "key27": "3Pk5jLVMgS3cpjQ5CEqhwMa3NHkgcXQLT1rnKwCmXGJZuEr1n8kDxiSHjURcUawHoHw35jjnkneRpVPwEzgDaSnV",
  "key28": "2rt8tRPzYBxNiGRzVFHWpgy2b79xb7PfNnVuzNm7XYSFTAxGU4XwueXuRnq6vFgRPxhWV7t7EpvUx1KJDCuW4KZZ",
  "key29": "5dAKZYYGzeYwmw5ib7rATAXAGP52NtFUdfZZn17Xsvazj3dH3jS124CjajazGVnWNVxvu3zmVX3so3xxovuo5A8S",
  "key30": "4tUEgLbdfu6thy6MGk66AgbRfnXrB7nqGvYDZqwHLuNUnyAcXegEnAV2MSuc2dhy678FSLXAMmZ961abc7TPhbw2",
  "key31": "46Uv55msjYwx9sqifXLqeQEN6gGfsbhWe9CsbECU4LL2ngCjzeBTSq9Jne9iWY2joSbH6YUSxgvmqCyq4Gq7ZFAS",
  "key32": "4YvP4W76KsEpWFytcwGtAMmQWLEHSezakAJfGxLfcGnTW8rRanaR2Wg8RkkSQaYGxKsGSTrypaXyfiRPULUjCoDP",
  "key33": "2i9oN8CQTQrLuSdRN8XdHho79wtFngrZYDnGbBSQVPxJpUWaJPUQhC3QpAk2ppUjegzYXjGP111eXQ6Tv1SnLBqn",
  "key34": "2WvBZemRFsqwXwC5cXxV1AdjpZ3WAcazNdfh4GYrQGJg1vHBizSKxaKqmLdM4yD6sAQ1Laojz3fao8eiNqnYrCoT",
  "key35": "jhp7YqcziheV85KvuqNCdKtAjpQ7X2CBGaB8K9amTStNA534TXcLqP4yRJ2XPB72njR3NMuEzG4SanRunSiEm1h",
  "key36": "5w2R4SJFRJNovd8HbMeAz6sHMHGsPwn7qUb2cAwND5sHz6bKWBuSVSeEmAvUNiLcb4LAdyZN1jAExEP5QhBkuPdZ",
  "key37": "5NynK7G91YYfzLNzufW3qcbXKqXFqWfBapbSCx8bvZGxRTLVmq465HrUgEhA3bmcPctEJciKPTbqoHes4vfKLnjN",
  "key38": "5sCmjf133AHL5b19dwdsz6vJyxwHjSpEfgT9bBsgwAAvkniCXB9uHDBXiDXWyisKwyWiVquAyaovCzGwagURMAyT",
  "key39": "uKcgeBoxjP6zFbs6wxXw7RZ99snYzFkjXcGL1NXoCmGKr7iuEk1k1iEiaoZZ78fWQd8YJBBNh9j61S5TkNywZxs"
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
