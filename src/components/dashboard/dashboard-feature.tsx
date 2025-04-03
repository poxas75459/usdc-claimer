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
    "3nS83Tw4zcsiaAvkSr55dENp9We8covu4jbwnwLEJBDkMAXdcVTiRqHHAJyAZZYSjJfg3PUmG5XvzS8TjKWDp35d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QnvNZ9zjK4JdecPVTdkJ6j8LHn2YemF6tCuy7xrAdvtVQwZd1kkvCAH7VsG7PiAiVDg5cVL5g1QRDnHvqoLbXD1",
  "key1": "5mHRGSNpvwgsUxwQNW2Yc4v2Q69vNd36JAmdFHVavVer94UBNziStEy69qf39odXgL7qUH7RrRzLT6AndWLJ6Bj7",
  "key2": "2mV7YguCtftGXeG8Bu7CZindicn8SP44m779uKPvvSuE6dWXgJG4yK4KFAra7spUc8nRzAwq2suQabRXK7os12F",
  "key3": "gs5YxgwDUdAbrkg2CJbyHWLzp1C5HViki7C5nua4Sa37PeC4w9beUYYVDh1U2zXcZa39AQACCVZdLLpae1tN5kW",
  "key4": "itQdWGAUnUrZ2uzfphh3tmFmNXhTotrEjkZMCoqeB5ymfSDveVqQtfiWRz3A7AKyqueNNkA94yeztpspQXyMuVB",
  "key5": "3yC3sqy4awrf3fPHRA7P63RU3QZSjtujzZs1wgWqjyrpaDjYPh9kYrhXDkkH8HfkfH9T4D5Qvtm6CfseF3QdyZwS",
  "key6": "3A5t5bvouSPZEYzGNtLvF5SaTPSVTtP5ZepQbBTexQwAhNYLDjBBm9y4joqcE13rRFsyP2J4xMyEX7ykaqk788a2",
  "key7": "5tAQYMeWvZ5Mjbkqg799UHFehNjFinTLySyLbY4trPRUjWBhoBevMWxq27wujpToHBvincdzDbHsCqAk3yd1PQtK",
  "key8": "26urSJEJNR4r6Mga5tjtZckfWSdFDY9x3vzGjZbCy6zkeSrQhKyKEovuwJAFxJntGkLyZL981M3c8ctrUJ3dUUmR",
  "key9": "5HGe8xhf5BWvq7AqLZcwghxeZHk1SkFWdxKiyfeUWmL2YcjVVCgpEQUWNby5e2HAPwAJBXTeLyAPn7FPQP1rB3Q8",
  "key10": "2pJ6rSuCuYnyBEyHRjdM6QPbQMxpyu3q7zKZR1AQ3n6WxSAj5pBHY7xQNFDF75DynDXac5xWDDpCezamvocWhuZy",
  "key11": "473HReZLbvhD48QkLnwsVUEYR9nVbbDne5d73q5mp1FgbVCkCxzd1kniLFVFnWGN7BUbebLn5ApDQUdhctHo4CoK",
  "key12": "3XfGhvSVU2nWmU6332TE4P6jjD2c3w29gHQP4zcWqRDpHpPEKp3Umtfm9SUsrkQiuxn6BnWyyTCSR8rRevhJYt7S",
  "key13": "BpDQZ9gz62Ynxitx67KNe7vnpMCLpcyqfn54P9KLZ5wLqoYCSDtf34oEw5TLg37jyXYGWNTmjMSo7SYXE9PZbWv",
  "key14": "TPuXn4gk6Q6DDuhZae2pvVDj6e8jNk2Z2YRCvUBriYFw7XBH9d7psjyNVJuWyqgnj2LacU6Q1oFJkQZ9yWQpweR",
  "key15": "4cEhQBxkLaAp3FPmJKptEe12gg8okUTcQNH5yduT7ezpPWVA2DBEPzJftr1anUozYoSF5P3HYyidPLA82KBhorDM",
  "key16": "3RkN5wToJhkMF68r7JRMoMcvHGj6899D291Q31pczdaWmXPzi2rtRG7QNq42TQ39usXgzGpK1emtKnynj7S57jCr",
  "key17": "3vu491W6cLn1uB56LgdKPBiAP9vJNnc4mEdMnFErzmvL6pfF5oZQw8ifwgYb6SEzzSqqiBsiEjobiCWjE8em1Gu2",
  "key18": "3RmzX8Pfk77hRA1qMjf8LCiz7rzrqGzuA3Vkqw5KS8TEKgsppXDy5gsEecu8K9Ece5WpUUjJHfaP7ctGEQPx42WM",
  "key19": "4T4amr2rjbKqdH7pGLBdNaEvMNcYJTyiSHVGef5v13FnYaeJQ8okAVgkQspJQJ2vTsmjX3Ng1CNvFQTWtrVi2foc",
  "key20": "41pxCZVoERKRk86Kn5EFXyT8mJkU1hyHFQMz2nUAW2etrGBJKPtDuGsRtsf6vUm3X9N4fMZTG6TTdLkHUNC7bMeW",
  "key21": "5yXs3TfB9oDqRZbM5FoTDBmkTx2ezYp5icjFArU3819cgXxwMoWu6cS5UMJAZU96paGE6waTCxzS5ES13sSYcH2M",
  "key22": "2BidEpw7JBJcQqCHcPhEj6SgLi9aMs6AAdqQpQA8DrYbpLRvghEJzTYfL7kYMfWcr7ya33FKA41E9qud4fjxwEfg",
  "key23": "5a4RvZvs5uwNf9Epw5Epk8invd1yVwnYn6Pt9gLHQbdwCHB7xQKyX19tRU82mRAjhpC8A8uZWUtpMKbFf8MK8Use",
  "key24": "nfqPMKRwuKNiQA7mDRUmhxDJNUcdxcsaSxzRY9niVGy8yT8fhE3bxqbpjuhyETd2oArifVZRZoDnw32f1rwEA72",
  "key25": "5sX71aYBDQQjh5pP3xZrQGG2BKgZ6uSTakM3hwdjcQ5uhpSnPdSvCB5sh2LofXxVmFjrCBJhDQvvfoWssS6FWQzH",
  "key26": "47wsjBJdFBBmSECDNLaVQpbr9hm3L2inGAd1H4bTK68qZR9L8ebFpRBAbkoPg8AiumWefiiX5m4SEkkixSihiyJg",
  "key27": "2z5XdBR5LMBsCLZ6BEiyaov13Zo9PvXwH231nnHV8Vtrn3Htro3QsgAj9ib2vVRLwhy4wB7XW3BF14izadEkhqF8",
  "key28": "4DCpaFU3wmedREsuF4Shw4Q8RNMLMrQTjLHcVHA9Wv6KNXvQpfDw6oH9Btm96gg5WT5E6EZESsZPsCfyjU4evmTQ",
  "key29": "8nC5Lc8MAh7gqrxEa7Za75ZciZWXdbNapcXPKqFhbosVcoLifgRmsRz1pdKvpE5hKDAk1Nj1Mu423zuvuRGhcev",
  "key30": "3QgKs3D63FscfwgLV5hyKg7EibiHaGNHcYHsPHymFTARaBUZU8eC88xU9j6HcGGMCYAFMvdMFjemqqQigJDfZd7C",
  "key31": "2ERKQAfPS5snwVGu62Wz9aNmCDkhJVHUfeEgrjCrD1HrQrV6HN1se2n7dfbDbgF9evXn5i1vbyLcjDYttH1kevKa",
  "key32": "7iYYfjQ8sGDpP9vEMdNM1QyrFtitbR2M3npQMu6w7FKaavJFxemdxBFjz9Fu1GmNuJwfSR7gCoPMZpAPHTU77gw",
  "key33": "GENpTeLVS65aBXJMy37pKzod9PoBgJWR37eGyKRs3aVX9ncj9vciQPBTSqZJeTRJwJrtAP3eMDWZajHXoFmEY1q",
  "key34": "GUez1XCynfWfVkkMQUm7YuVhp6VrkQWVME2wN2vifV47cxussuFgc4DuU4MyzyCine9uKVKPDaSt4pVBPsnWJki",
  "key35": "53wfAoHn1XGCVPxRDn3pEZnun9V7vTrFfiMhczGwVgefDv52HKni2djsjCKsnNUcS9bFE4dpnjHvpeWsTGzmjhMQ",
  "key36": "r6LdvrozCBP97b1nFUV6KZsEDY2X5NAwSVS3MGf32hrrQBppv4tdbSFBvZd7KxHqvGcfYs5YUdbHpeha5d7hnTX",
  "key37": "45jGyNvUYnynsT8RWQ643cyYF3EwvgggE381Z8Cgme536hoEXr9cioaeaJ55jkm8J2h7XmuCpuBDBmMnAaW3Fkmq",
  "key38": "2WGrgeTzTra7kxjfGD9GVD5nakhA2rCctVnn31o2zKXWPBmsjHSF2V1sr8umJUVXRa12tmuYvXpdV8wj4UCNEqyg",
  "key39": "DYKY4P85SnocifChhbv6ABE9q7Sz5amJvvQ3y4bq7ZDC94V6iUUWoCHxViyASUeRSes1KncKVUuQHsHirQ2NMJZ",
  "key40": "dxAnkxaWaZvb9JgNFb6i1wZztzjsVVysc1QZrmD1ToFwiSiToq4gqa7Y5jEgYsDdEiA3oU6Nzu7hS3kL72ZZjtU",
  "key41": "2ZWz13C5BFFsQhkAmWAgaV1pmssc3DKaZ8R9a4dzi67JG7fV6MSjazqA3msESmJdbYQpYxn61xTfLYNvczivz1Pf",
  "key42": "31NxghDx7uKD4g8juk5LHyG4tFNVbWovxga85k7XUzMbiuDAMMbTsXE885aYkUrisqbGDh29FKQESR4CjFG9eHo1",
  "key43": "TPzr7WSrsyUVSdLdrNQpWUYzdjc5NDR7rC7mB7dsvQxq5SostfmHvH2mCPY72tL6BjxvtQZ5ierA7UAc6Fcd37N",
  "key44": "5Py9FgWTReb5aQL7vZ7Ey3PEtpo19J3nUYRUk3CS8UK2CZEagqLD4fXmuaU6tD5QAiV8Srx9ZcyDDZPFh8nXCEvw",
  "key45": "4cMqAfoZCibm9g6eDcDVHuSsi71EEsMzM5SqBTYEdgENRh51ewGJtWs35hC4Cqsa1wwiy7xwt9mthVNMuMSW9qrY"
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
