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
    "26e22dzheuFfnxJSsSPNXd5sbXszFz9jzuvJb4KHXyR5AiytV98qaHQ6jQj13srwhMfiUS2fCwY7xWxeh64ZVkBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rJ5SxBG4yHzjLzSQYDthWnKaQG7tdkXb3zdfNPTF1iUuSUnGKxUXxkiSvBLKcdc4qgJwwiHPKjr9cEpbhQAKkgd",
  "key1": "5eo4NnZSsXu4uqyJgtKU9mRBAR76hXabWztNZPtzXThjqA8evbKqjX1PHfTdxQ3uhs4Lvq3oKwk7ztTMMGZmuCeN",
  "key2": "isRBQp8Kf1ansdQhEfsm69fDUZEzKns2wW3UHhJjLifWB4MANn45jvJxsXHipLgRMH3WrNzexHjcYsrcEK8kejD",
  "key3": "2cSDGDoyw912xEjMxeywv4oQn6gEHjAynJEEyqJwu64GcKR5G2dFLSY6vCCrRvN1QkoNXSsmMWK8jpaGzMJ9fYSF",
  "key4": "t1s2DsaKvYtuCNGUadwPfS1uaB8jgP47ctXMNCbDsTGVA12uuKhaVJyaG1sADYjv27GD3SUYMFB2phQBeyKjqGk",
  "key5": "5cHnb57kzNhUF2jyX1WmwYG3BrjLhnzxiiF4URzWBscRzHhcYpVDDM2LQ8qJJg2RZzR6FsevyTeu7aEqHmoZyHpg",
  "key6": "4ydSNYprDDo99WH21EPYD5gaEoxPZ1rT7pXZgDbWW3oPHzTwcv1sjcanzDqVG4bc98qzVSfhx5z3iuGebYNk6hm2",
  "key7": "34o4A9pNpjL9esZVVcfc9rwFjYSF1bEgpTwJrFuTjBcsjm4u4hQLS3pxQkCVmMaabu6shsqmS44v8YoSN273Ut1G",
  "key8": "54YULgtwhXXqovKaT8r7DiYHSzqqZdFaG8hnWVWZ6dCnvKA4vse42Mu8TZepJMZCQtFxSiXf4Dm4AGQsWCRu6xNA",
  "key9": "2T8AJEzTWdLaYtM5eqnwhcK22BDBy7tqVySeqBwmt74ArSGmggoJ24PYXCStnz4YUZ6BCBHgoLzMcYTfSpjNt5ab",
  "key10": "661CfLCTSG1fXKwVm7QUgaGzEzMCHcxhxALnm1uyRhpXJSupynYcgQyXnwLdWzX5BD32adXhfrKDVeT9Sz9aEHzU",
  "key11": "2KVJP4Wc6V6GoFDEnz19cdmKfQXbmrjaSJeD4cBDE57HZZFJm9EY819tzTers4wkFY6ehQv1AJNS3D9jFahQLygY",
  "key12": "4N8qiy7tUHSjoYMxhSw84DMb7gkPKgD49E6wXPSsjK8Vf3nStt96YM3Pxm2E2ivedqon4zbEviqAs8ubKE31Qcyy",
  "key13": "5fphZfkn3AVX6yWCSUWe8JPNKp4kJnVbLaRfhfS7upGk7bnzrTt48J8oKQvbVaio9nkcZYRLKzxx2XzNHzogvCWL",
  "key14": "3L3GgZsfD5SNkj5Dn3EWUVBN1WNQ3CqJdD76Wk2y6qyxt5XwZUns88m1KbHnhNZhw4r6Niw34HSXBoP8LWVWV4JJ",
  "key15": "26HyATV1EXqKQ5rqMs8k5teZfAbLRJrnnhvqyVnMFnUwLXhrsxDnhqNATJYtg2EHrKdGuXuReCJrdn7AmyYadeJs",
  "key16": "5RpPgQUAJpWvNc3WZXNEBHz33nvVuFSNG6GV4M4mf4WDRmcYhHRzFzYfqSJnV3ior2CcCKdYGN16WPALvJeCMV2r",
  "key17": "3QcMcmtrcAUvg1Fp9fAVdtyfni4uw75PY7nBuS8pBGoMBqNT7w779HzvUtGiAMbQbvqSgGFD8Z1AX3wfjmLDP4RU",
  "key18": "5pkHbfGA6KsKnGRZZmT1SrJiNDbhrPkey5pafsHn3YAiDgVZXoGP1E5QLJ99udVu3o8b64wcqHJksc2qBCeq8mes",
  "key19": "4pJJBegETW17Wd4v6C8Qr1HFWpPbu7WHb9KgZtkbChz1fYiDRdYVZaydCjh6vCyHugpCeXXrEeA86LaJh4Am3cwN",
  "key20": "4LaPLbtZ7KRxDyPSTZZ1PfwSxb8Rius9Rc4pFbYWSDPRobo3MVfaS6wMZc3SLsJ54xGwUfz2Jw1Sr54GmTAt5P5U",
  "key21": "5vDuUayUBN2Q8pHZVxKpTudSaav55eeuVRY4XwT5y1waCcQy3vZzLkPenR9kGjSoUGMLmfK51LoknMjiBa7UkwzQ",
  "key22": "4qTg6iTi1SLxGgsngRxJ6iZckMrao5cCutpGGhQaMd5ar4D5HStRM2pmq7wgZmnQ8xB58TcmMKFKJrb8r8myRzZP",
  "key23": "CwzjrJnpdMEy638xkSF66bYMLkrfYDgxujp9pXuoUAxJwzrQSnBksCkm1voV4H7LEb4uNSsrj7FrfWiEQFpnZUs",
  "key24": "2YRaUAtd8zdxtXyMAASvSCwL4qpqFPfUYRqnvwznGYXJo1t1o4FKnrZEnLMTKnzqPV9rqSYmBhVj2adrv2DTxyb1",
  "key25": "1LLtJHV3XU36gxKkRbJnP7m2dpwiHfEd29KD6b8rJ1MPTgo225bQxSthstomyVT8DXnx1QsMpgE44USXqpPfzZY",
  "key26": "yH5zrAmfhD7XATCDPq3UDJP4Y7zxnsyFFrBqxFykQEkqBdkNnd78BiGqJvRoN3b2TjwwUp72Wd6VUekotE2JrcG",
  "key27": "3VFz4Y53Gmkw4ZB9JBiJk1PH8Q1JLJpGadSTR87E2XPK6SjSRFCx3NswCD3h71V9zYCmCzCtHHJb8xkAeiT3Maq",
  "key28": "5ALttyBiJe1Ybj7ym6dzKWuCbAmx3ePnEvBR2rLUj6Z2cru8jL8RAodL9wJAMFeZiRU1LMCoYhmBedRAFp7sefea",
  "key29": "2U5fCtvfLLeGirjkvLkrudBozhkNoCfRx8NCcKDVxmqUivMgsTjPWF6Qrr139UNuNdFSdgxQvf8j733vpFxnGdP3",
  "key30": "2JwDX4nRWUfNxx9qY3vQm5t3Y4TtCUc3ss6ZXFSoDnx7pXZSftZhBJGwhKaRZYqchVMAQ6zhZRvcpxZsJzEXsNPe",
  "key31": "2RJ4vdPLLd29vAX66RJPNUfeR3N6XQzd14Ge1taW9647z4pCabbkfq3godENjkHpZGxAwjyfAnHEWniveN3i2sfm",
  "key32": "5XiTxAX1ALX6NDmPW345vGNtmk49piLSWrMe6sJjEYtes9cBQxoDVRnomTMoUfnLyzNNTTMfifEacafA1FpDfcog"
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
