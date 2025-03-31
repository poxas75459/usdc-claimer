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
    "4R8zZzjJ9MvQdCYGfxzDqgXXFq9pzExviUpsNFJJMydr9swJpshDWM9MnbQJN5YQwsDFWz1oazqT8Ne3LqmsxwC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rcqsumPCByEiD7L5eRteFwwLNXsVdP3hVammZffGQCiELeEjU5obMw7JpLoJjPzzRPNUoLpxMxbe39KCZkJLaMY",
  "key1": "knUzdD4xzgoe9RHWcyMRMesizXirjFNk1PsXze1mTS1PbaiTRs6awL25m9J3SNc6DpGUcqPt7nBM55saFxaH52m",
  "key2": "5kVi13v9Scper9xj177GS4u7sTjeUGFbfV1VAkQkvMwsVaPzEBMNGBt2SrFqhzZ5x5PWyV4VFNG8kbfqg98qwvnw",
  "key3": "3few6K8DqNoNwGtQS59MvE5VB3VXDsZoyLCExvoE1uHjHnPecQP798dJQtzxLaYanz1FkuJky4CdrRMhFrL3zCJ8",
  "key4": "2vFmCfGuHBHbkUvmpD9nm17Eq1kN9WSmkommeMmRu9Q8k5hjx533oRQNJT49GR4pA4rU29tfxVCai7iikyGUhrS9",
  "key5": "55gAgQMNfPuHzorfJRLGRvh9Lyy4jpYSeog5EVsNS5BBjCqD6jq9K5Fzxg1gLn6tGMNXqQqSA7hF4BKmQRk158o8",
  "key6": "4yo4MYVcwdi9qSRdshvqHi82At1jEcGut9wMxMn3D2TWweLP1NWaeeDVNFYE9BzeVdRgzLJy6dVzkw6MkzaZL77G",
  "key7": "2vGU6Uu4KwDoFthiLn8hxEhT2PMxhP4EAwJnw4M9v7s8MUEWt4HypQiXP929tCkeRnyks8HouxNkn6dDRoz3Vmh4",
  "key8": "41ZFtkj8nRUnesdpF2xiNB6bjqDo5qcndpGYfHRDGtFQWdHNCqytT9FUu7G2KWfvtBBrKM6jyD1xgM6vAdy8CSCT",
  "key9": "44QjJ5Jz8VdyHU3jJkadhzr6EDr5YK2P7kYGicAo5wnmkR1bs93PaqdrxkXG9axycJfpJDZeXvhtdvCxMamJ9fgG",
  "key10": "4bzdTr2GYduCvgi28R4fWbi1bBAum2DA7TcMoQ2P9A4mJS3m1fFUmtKrwesRELcz72bC8hsRD61uFnqLF8TWDbFz",
  "key11": "2HRTsx6pyJ6JKVVPb6BvuACPxBHKfPGQvi7mkYamT2XHKCTHRAT2A22X3bGQJgJqqsriaJ5Kb8wj4NafggnsdETF",
  "key12": "2gvSuRPnDJkZNEVUn268PFiSNEWt9g8h4NH5aTu1mUWkhzzCdPU33gPzriqKvZgpuF44y56k3n3rs4CrnCtCeLwd",
  "key13": "3nmGrWEb9DwE6jUsYxJUFqAqvdrZhdFtawEVx1fBZY1JyAsCt5FiJpovRWojVocpr1phKCbZGyaxosgtdfvdeLoM",
  "key14": "4B5vFmxfdwDxZiucHAHyJfEC7z7Q4VhGWDShXaYjjcVJYG8z9M6qczSa7dCvZqcx29PZLGMzCqFYdMfzaqSUjmGr",
  "key15": "5PhX9BTHLG8EW6kfcAquWpMKigmu4Qqqn7ZNi1o5R99JRApVbSvaC2B12wxghdVWvhT3tGkHkoLneyVW2nHRykWi",
  "key16": "4jsLi3xzhVZodcFsAJ5VopjvC9JNgHpLe6NvezbF88QMyqwrmz2bZrrC1452SzJNfwwR8xWeGGXWm2CNTX9VNXhK",
  "key17": "3ThMnqv7pXmsWRdhKGaVK4tCfqSM76jiG4LM5RkqMLwrXDqU8maUcPkBREVyJWmrLSYGFm2HwVa2YSxz5tWpu3Jg",
  "key18": "4kFhSEkceLxPe9fLcXVLURSQTXkPt5qjUcCas22RHDh4KUCBigY7JRiDXipVzy885PkqErZ52RnEgVL6nuSvWoj3",
  "key19": "Swg26cqPs5sbWGeNGaYm9vFRaCaapbz25VzX44BoAyD15ijjDa7h89v6TrzEpHwKEZUGUtjDdBAJjT3jzmDhR2K",
  "key20": "2z6R4XZ2kmFJFXtt3QtjPm3ffw87JHuHS1uvxysFVuUqynVVwJfRLUUVNrUE8nfZQQxakGc3e3cmSxt73hNQdEH",
  "key21": "3j8ABudA1bKLU4s2ZLEPpuU3qFkaUiP3y5ZFrsTWyWVtdKB4btjzd7tUgSSaEZWM2qS3MoqCoDWxm3JXQezDsfBe",
  "key22": "2mLUz2XcffT65rXCTXFGG9kKyfiryegwbfwd5M6iiMws9VKn3TKCWar3nJMMcfXiogwJBEkETEE4gKDRHhL7qEgo",
  "key23": "3hgMzvUJoFV1LvUXMxEBnoShf5Qwc6kpGgDnUFYr2aCG1nH9XeuszvjV9fkos9iitu71baiQTzigGmmamCQ9wDQW",
  "key24": "3xXDxWnyZTJy8wMVgVF8Ch7uzBqEK4RjTzaVkQf8v5XEpNgQNDzU1yDauqAmuVocQYpvKguf1b9Ya4Lioi9aNJmx",
  "key25": "D3QPKWx7e7ExudZq1uGQc3XNB71uyF7uF7ZYZyZjet7f96r9xgCwLnjdNPFYLFxcmDCERkHtE33YEs2gEPMZCJ7",
  "key26": "28TKvaujmC6y1w81v3KwxxUoiNpkuVe5YEcayZ5UwkYVxCUJyLAq7jTDVAwoFKDfqM98mjJjX4TvYQFxv3XBRhK5",
  "key27": "2gjAYBSSERQN8JCnNkWEH2YAnnyewqqBMScPKoXKid2mpNQ9YUSdgSCzqwtprNGEV9FeYAnfaXxxq8359wyYkZbv",
  "key28": "pN4ayRJDaEo1TtXT1gFBPGozXaaEjbYBwJvp3tq2qjERV2tE7UYim7fkDRFjVy4usrdvvykj1huZb3oiDn2dvCf",
  "key29": "9mQrdg3v8eruDcpdgMtLVHKUW1783DV5cX8V6LPdKSHwrd2jehnQPnupUxjR7EBdKFpv6p6xRHhbPEu46N3LZGq",
  "key30": "NQ7uyyNQLywP7NRZb9KNf2qQ8kwB69ynkDE6KjrAsdNS9BfB3s8TpAXF9MHHtVH6ADwF6j6oPKVjkwFLGmsdv7U",
  "key31": "3k3Y8mpRFSPJ5Yrv3yoy1ghP9WVJfQftuabHC835PmhuHv79v7iAtD5b1HnTAHZcH8dDHa6KxbKxbw8AjFM1QuYk",
  "key32": "4kR2BfCwrxiEFJ5XeXxAFd3T9qu6xWDxRRMv6SJ74i6PcF4Wv7GrxmEABAxDNigXiiYYHNbmNgfyVzbWyw8Pb3Um",
  "key33": "62qcmPs6n12s23wTGnhEQy5EQiTG6HB5UjXVL77RoXhPE8gTayJ9inv9LnXNcgRKRbaUUREGwkQno7xk1oKZKjtw",
  "key34": "jnZTFST3BALV8itcwXcsDDgxrqyRSbouLpGpkDDtz7unC15cNd8ass6KmRG7ULJ6zWpDQF2wghuoew1dNknVRPy",
  "key35": "3xpgTd8eERaAy7yYWS6JsnvNPLjH3D9q8L49nYEp1CM8GdWEgVj1LNqEKDNSkUayz4LKVA2o6h4PM2Jyt2xDwawD",
  "key36": "L6aLEZHJDK7uV3AWPrJLM84Y8QSJE3wmPWD7PhMrJU4C8mts6fnXnkVwBZh6PWTwNa9DJ375yW95cbnQZJYv5Mv",
  "key37": "4uq4GPVCY9ZLr6ZJS3xb9UQskYg8ZZHRq8YoS9aj2fMs5USoUchn95w7WA1vX8j6euLYUvUSHerm8AcWd5gEqYVg",
  "key38": "5SruzUomdaap6imRpbM5pb9uvAUhHdkoq3nr4J2GQY8BYVGdNNxVoYNegPaSQXcy3ktSCTvPKXFgYrq3jVu1yDLU",
  "key39": "ih9ciR7CLfw5fntEVbCT6VNqTfSrkofEueCc5JnbqxXhrkRPymUNru5oWe83AMNg5KYEXqjJGyTTz7AVH2mnERE",
  "key40": "659AKXzjj542ocDMAvgq9AnKXqMb4eUdBYLHqmxkSQGjgpfa1bu6R2p2PMoDZtbccj1Bm7FBkkfTCy5WBtCYGHmf",
  "key41": "2xddXmoG7fdTcyscs4ZEcn4oYkRku6jZvDPV4mCStkVmf7pBewSbGTD9qbbY5Pp15KfBq9KGMLhzSKAjFGgH3ybq",
  "key42": "29BuRLfLoiKG4HjHapbmYGy3Q6UxrW2xVNSkiHLtZSskRyuJ9kxNBxqBhRhgwQgv7LCvLbA24AdFdjUbkvL5fTDy",
  "key43": "5X4RNWMjMxpsu74oVjJjvfDoz59Xb1yr7AhgEzNsnnKWE8p8PegVUqtEqTZfddck4T7b98E4fsi5Mmqm1xQnF6Ao",
  "key44": "4c6yA8qzcJngfzk1vrVTK4eY8AstNVWJMPxdEc5arC8w9XFBEc3ignD61eWBdpLjEVzaVFKcV2b7nBSoZxJk7qza",
  "key45": "5HNsJCyB5CY3WsWz4inBjZopsoxihSkMoSdLT37T3anvSBf9Mu3Wkqg9Gku97Qzfe7o7dBvTdcYEnQKpijKtgByP",
  "key46": "538ZfB4643394zGg5jkE6UVzUmga2LPDo4s8XxiVMubeLoPgdxY9fRAexv9JRRT6C2bU28DevDTKh1wYzfBW4ug1",
  "key47": "45z3JmxHs1HgrDGdqjTLcWeRosNTf4ijHpZZiiaGmJmVPgmDd9RybW1CYLNrDvRYJR8zTRFanCynxvp5ibKfPFot",
  "key48": "5rfGkBQWEZwMerhXCDxK1YPrB4w3WosNNjmAWSQFcFNuuCP9t9G4giwJexp7oZXL46e4dErtH2omUPZBk2SPhp7x",
  "key49": "5a5o53tBNjkKWXsdUD8BSE387tUd8gzakLcvHXRGQFCTZnRmy5UuprDReSYnNrzGDCnuTkWjTZPGP49duUJ1pJ1U"
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
