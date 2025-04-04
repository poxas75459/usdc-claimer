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
    "2vBS6mBheu9ucDpiSLk31UR6oF7bdjAxscqqbhQ7EcwaeQoESnmYXc7Mvs6FwgHQFSSfFzwbBQxKstyA5qxy6mvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Ec9BrAdo7E6b5iNi9bMHqxUF4CTzZfj5MzrFJ72zjagQs7RhokcV2PCoBjPdY7DTorv7WiMasWATNLvfEQGNzs",
  "key1": "3nnNYo1w6ybWBsmfpFFwnf4vFoweLzc3EK26SVrHKqqZJwX3oy8qHniZ3cND4qRbUhPVBHExKuihC55CaCv83ivS",
  "key2": "4FaDnhecL5Je93Tc2Fq534JikJZuUdvwnKdHusD6DEofznMzt8jxtW5igJaiRkza3uBhoFAU5oVK2jGXZUFcC3mP",
  "key3": "iHtupLH6MGxaAsU5vm8WdyHUZP52aNQuuUyC8hx8MDs8eBtf1RpYTcnFMXsVQdnSLdqc87bUfGRwMD4qQNTJYz6",
  "key4": "QEwQgZCTidTd7gX1xk44DMQyBUxU8CZijryPcRSvmWnXYBTpWAgNXjTrkZngZQJCng7YeJLDuFZs7ojXXcELPfC",
  "key5": "3YgG72vRFaa6gAwrgoQRNMXELroQ2QHrnCMkhXxHB9FZkNvJDpyUcnMq7fgnWnqHrd8gxND8ND18Ye8RLCceRXzD",
  "key6": "MBNXkEjhP7tHrFgD9hTfM5vpwfrnYWWigabmqLfvpAYSwGQ92RoB7KWV27Y1VjWS4tjTov8MVPrjZSyBpUjmwoS",
  "key7": "SrnZyF1FEALwp9mAx6dRNa2Xa5LLj6E2RxsqTSo4kEncTd2MiF6BcNw4BPJSyqs5k8wr4ZEeNUDXg6LpEEgETNf",
  "key8": "2cpxJE7uDmzxs7E84KXCsKo8DnWL7g2uxTsm6csGw6Hx3PU7Sf52Egmgz1mTobB7B5MrAatkQbxCxHvgY9i8Rc7F",
  "key9": "66phjLrgeaoNhdJ3WMN8v77JRqQUd27uEfLeDvvPZJ3pKTmiVNiSX1Q95HSAStvTQdushQzJNxwfXmDpkCtVY9hu",
  "key10": "5foLJkz2MBapxD2PtZS2Z2Tg5YF7EDK1SikWpA5DBicU7FKMojYewkLhuGLi5wVzqin1UxWimcy4z55PAjD5SQNo",
  "key11": "fT6XdbiA6s6o6k1Liz9K8YkfrKCfW4vmh8yTERnnCazfmakPZk1ooE28yLZGPUrnfcup1mzLwcG8KfNzMLEW1ja",
  "key12": "4j3fePU7i7dMBkHzfksF4p33LECdzpFFLY6DiUT7CcvyM8qsTvDiE9uAhGFQ2ZHezCge9HQZFn83vQDaZS78qfAw",
  "key13": "wmM3FzaCunwsqXqQA3KqsmBqMNFVZcD1Hoj7SqiXup1ocnLpYqAb3yFVJwJNt9wNwByRCCGQJjngUx8yTyY53SK",
  "key14": "5x7xkKbPqzhoD4dfLKficKFvD7rSymVbeSZ3mYLspbvEZxvqJtifPUcm2M9pNXVybcnY3VeD6ET2BqjQFjbwAZsK",
  "key15": "kmNBxG3EPCAU8hQJT8AcpYGb2817VugMk8msqZYxFVnYbd3wywSrMGx6zW4marc2RvbQBgfd2soSb6q1Rh5VSX3",
  "key16": "45i8EKSvKQFeEz95PZWpWb63FCFapCHJSdgfCpDFjRVCRJCrA3xv8tdnX2DDSUf1MFdDfRfxr3RsrBdjHpW2kT8N",
  "key17": "atEPAAktqE6QzVxFq5HMTRJF2YRD6Gu5bVKaMWtWH2MEcmSsedQ1uvdM5xwTyUZgcnfMnDzAtSQRwKmcpMnJmbX",
  "key18": "ch58o2ZusyBmhKpyFGmkje4k98tYmEwwmQZnbNiUV6v9n74UMF9UsKV1tGFvrAFx7H6aWF1X6PVoJopD7M6kM8c",
  "key19": "2jrPqrPrZqcJdAoFWMjELxgDK8S3fGPh1ypM6Mp5AZc43D8dLXzkLDCqgJD3mLrfTSVYH5HsVn469zYP6ZJvkVt7",
  "key20": "5sv1DAGdo2cKo4xVvMyVMLF3zwez1kCvWa1HCo36FqVVQ78BkXdmmBcQ9FFWtmAEUrYi2hohGZ9siyNCMVZP5Dnj",
  "key21": "5fGLrhS82UTQchstiPXUwRYg5xXomwggLyMmvDke9SbRKK7BEBSg39QuWBx6fvXRNhxaDxDoyEcqgHCd3i1ZxHWz",
  "key22": "2WegoDPkNGrQ9XZWsV692sXdmyZQEBegoJVHhsLZp1qxAwzCBCQmsu6gzhXV2MfhZDBWMSDvycKRRQ89tAC4uNMm",
  "key23": "2DT6S19feLLscMp3Q8QnGUGSDqomrQZzPDdtXqoY6W1ojzXQRHZ4fSxkz6DGtXeNaXiXZ9o5xqaF73SkTdE7hUzU",
  "key24": "WC1p4D9Up4iEKyuzy4VsZiRZg9b5hifWENhkk6sD34xCYRaq9KKR9is1iwE3yavaZGYsJL4jPHSLfN4hMN1sWsM",
  "key25": "2DRbLbwz8NudwG8xtz5eo2MS2k3ctsRbQRtUFRp4kNbpZDBeVBewNKZ1jZLCwZtjEDNeFHa4H5isdQdEN7qe2hTM",
  "key26": "F9jNMUjMazQUEtF5aZTSkTwJYoXTm5Dnn5M1g5C9Z2omr2hnKG7jdqXcdQ1WBcGLckKznzUEgwctjWeyjCZKi5D",
  "key27": "5tgdeDvb2XVcFUom7FVJ1kFjyYdf16Pqj1ip4r8AabDCx3NXWZeYafzVAgwwCmehFkyo4p8LDNNZnUf9GGp69xoR",
  "key28": "3dKEgUeZRfUtEwGFDnb26GUZTfSE3xxHLgJdTVGmZFZhqyhdspuT1ayS7GctKZ7UPoX7YsiYq1dUhsc5yNK6ZDbw",
  "key29": "5YcS81EvqGPn6VvRgFDhF8HMWuxnZafMKoqA83macqMynbbjZzembSWATDwiGy6CaG9SdpaXPEsqvztBUr2fLWhm",
  "key30": "wb4wsAbujafFf45XT7wZix9iS2EBuExJqUpyuY13kDdkSbsjSDPifNRMK8iCsXvJMMtDECnsgiBnKvRtTfKvhrw",
  "key31": "43fQrLvNakLDoWMoYSJEsoy185TvHMmwsjbMWBrVZjreLimmeRS4DyES2ztKV5jk6REfH8rpKqVvd5aWvSxk4KZg",
  "key32": "Ssz1AgzzUweUw1oWKEqThanCHEwfXAYC839MizzUbfV5rTMCv8z1Q78Wef2teoJjAvTvZVL81wfqQyNf7HrjMhV",
  "key33": "2WLVwHV2dSFcFKvG4D6nebJLyh3bbA7aX76RGGGopeeXjkSGXf9J284s4z617P5wvTYEqYuGbbm9nyfNoGBhxesu",
  "key34": "5Zmgq9Zq7uMrFQHUqFZctum3LsSgTHYH3euu5SRUo98UMu4j8stAna8Uf12Yb7LcdGCNdgXwcJjp9Zv293zekX1G",
  "key35": "4bTGfJVMAJoFQ6zn8s2XpUff4XAexpnCYpzGnTEF1tJ6tAVZxA8qqvsFz1eiJajf9xUBng2aue66gqkbLS3QyC7y",
  "key36": "3FceBNQwmvZSdQAjxVbcd36gJieG36Gp6o7z2yiT2aJKBqU4N7FZtR3K5CYh4dbn9LdYQDEBKtHdJ57pn7v26Nom",
  "key37": "55NRFyc54RuqwobbcFDrEEpFXBjDQTfzmXzyt358nGzZj2VdEhtWPvNoWbV3RydYiZDLaTG1zk69bAnyUcteQLvs",
  "key38": "4K8dkYhXHvzt9tkRpdZeUADZxpoP5xTRjm6zX3XGHGxnEbWusKFECkt9DiFpTT2PReTdroe6BrtCJfKmBwVrvh17",
  "key39": "5sVoTd82YEEhYLNRpWRkmj2rjxciYG6CzP8msN8EQ8iEvTivBVHPCruffSpm2a7dyX9cnBUEskBKgPZMU6L7F4bR",
  "key40": "Bx4eenpJxVLgn9BU42g2EhX35G2x2u1yqr5qpx9xacDR2Zu4AbvLSNhh5nqUshZXJhWUYZa43JkyGk4e5uRUran",
  "key41": "368ythiRwATYPNWhZt2UAkMcfdRCPjGYYHzCD56gh4x3By3w1Rn4yFVrsTezbx7D7fciMRqaLF9TChDFTL6LVUiz",
  "key42": "3HgcEcwfVcZLQfiSD97AoboNApDGYn3rhM6drZEFxGyD9Dbt7mjCoWPxGwpu7dynJqgHQQAJuz4k7RuZiDPVTa3b"
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
