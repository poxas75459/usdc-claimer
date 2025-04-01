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
    "2GAbZu3swGHnyTUCgSVpoFK69R4mTai2qGkyL8MVtEhY84RfiPThnaEskx3iQVFXrNLsTp7GrpC3TGNq66hNKAtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aG5HgPSiLTWMMKsdmAmRUst16MpVSuMdMXe41jpQqzpuPRnbJM8kHAwVzAE7goVAA3wDrCcWuQKEpTcn4g1Zk2A",
  "key1": "3G26RvpvAkziiQ2MdRAU7Dqa8mGYimmQvw5sVBPXVW42ws2kk9uiR9rao5GM9GCYDBgwiwzFyY53XR7MqEuUHMZx",
  "key2": "4yGJ5RgrqmxxXmXKUkAaccEyU2E8BFNx11ARdCkR1LrN8c7ihypUH1UmS7YoazdBnj4eE24APJA1kVTm2rfumVM6",
  "key3": "4V6iRVec4qTm6c2iBVUA1VzgVHBc8JFGqfDrjTREviPVz1zzTTMS2TRAFYz4kppBceop3sENhQW25oU5toVqBgni",
  "key4": "64Yrh1xUFpbrkQ2MNqi3JLE1c5taAPDDedUYDZC1nLFVJnGuE8qHd1ukdrHwmLdLLFFdSSESZFGeUzxB5sRXnqyu",
  "key5": "5ETcKiphNmjrW9L9aAL1my6nEGbTRXwXq9ytmhUoPQXvqGPpc9qjdj9nE8UxrWYEXwaU6MXSFFE6fUtFsKNsRBNW",
  "key6": "Efy2Rs2XnMMpqpu9nRKJLC7Nnjr2YqL9VPYV4YfE3j3BxFujU5L5Ra3VYTmBCLLrdbBKLYKGtCZNJas46eXWTxb",
  "key7": "4PnKfo7Y7gorBLkTMqrbKsD9q5USzXDFAVRp1hC3bMannFCGJ9gocRVN5B5v1u8C1F33xmyKnV6GRMoFQpgDDLtH",
  "key8": "8XYz4xE3fmuSr3vcuPewBNrdk3hfADBWrYpfRk9WPDpHfHmXEbJr6PTrdozfYTUtnFhvn6DNSRkAibdygdE7n4P",
  "key9": "5eeJneWe7Uy1gzCmMt9pwwRcsJMs9czKW4UZhBf3S3YttJX5sYmau18NSyp5fNsLEQeRFMDb6KeENnGfKUGK6qgW",
  "key10": "5qMcZ7J8Rsn5PotGBe2wZAba5JJuBqdveWdpxwKoM2wP7Kf44TbQ4vzZeMcTUmEG7V5UxLc2tGjh7qXRN8XVesME",
  "key11": "2zX1jEJfb3C8CCyqBitfCiZoVC4uCHVESveDiGEKEzYt1vR4RF82eyAhtGbh5Fp3acbtgusQTEEd8KanUNpmvWmu",
  "key12": "36Wnx861KArxEekqpGgy57Lb1iXmTgWTYnekCoEd8wRsqp7NDo9UhFkMR4RF4Tt85kcQatm9og7QkeHw8BY5r6zb",
  "key13": "qw9cqZ3L83UPrgSRLgaKfGS6xnnV5CrwBBrx1ogByMUYTjjpZB1nqJgwV9t7eSXoPQtJtRSVGqVDhHqzi7nfMjv",
  "key14": "2NtnYZ3xddJZdUjLgZ5vCHpWmYvxaA5dfF7aVqNBdSL3jpAf7WXtV2oWjRXp1gapYJRVyUW2HbdRHxen1Pkisqst",
  "key15": "4QGxLsnw7uUntSSC6chdHKv2B4U2V71EEaSKp9WrBSCWapQhGx5RzWytRzLKj1yW6Jj9AkdLntc7wPeTih1dDewE",
  "key16": "44rx5qKzpqRX5FavkXBe2nw8NZp5q9DLZ4xv7GF6AALUuV5cMnUszK8h7qVkZn3FkQ4A668vcA52GicLgTLApknF",
  "key17": "5dEQS5BaocgYqkaa89dgMmMWKCLoWa8hNt4cgzPZ5MVpBmPD5nUe1vP2SsYQzwx6XDV1nHJ4RpjD9RPVQUfNqKp1",
  "key18": "iTz7pBDG2KNsGmv7zBpEy5rqRLxFeoxeYjdHEaogwAqr5V66gimFP7QztWEZMCcV5F5QVCwdAVSUd64MmxDWwvq",
  "key19": "5jg5XY11TVbqoDKSkditzPDvGi7XUaNhdTD86kv4hzF9j5rD2BvshyBESA5r7JvtoT9e7n8ZCdsNPUL5jKPtCv1r",
  "key20": "3CbaQBACJeStu7NmkWCaQbK9eMGVX1dcymtUywfs4k7D5hUfCf4H4gHFTTZNoziwL62YDhZ1GC2PTgpG2CKfR89H",
  "key21": "2DWgxkhFhCqsK3737B9Vxo72EGRasGmCEr81oywui6LqWHv6uJqpvJJ82ewa7LB7D1xRreF6JeitMXfHRre3Lman",
  "key22": "42JWVRUW8HytMDSEa7XJBtYJaQuT3ajdZmpRxfBrBBKHNWiy8agstpcFv4Eag4F7BudnpEv5g7TQuZRtDA4115AM",
  "key23": "2gs8LqDRVsmz79wr9BZJaWDuiHoRzbC1Nj96MUB1TRrD5MxvTyA8zME26x2rA7HmBTXvzMAoE4r2uH8L6ac7zzzp",
  "key24": "24pHdmup6JNLYrKFwhojDYhvRu3WkH2YzYHj2HQUyrSe7kAiFDL93ZRDCGDkQR2FUm94VZwW3SiVvPVJzWj52KUe",
  "key25": "4MpCw4nMmhu7FRUUXx7MM1jfdHSWYu9h7iFJXEN6yBd1MTvXRSZvy7zMQWzb4zvmn4kmWuPnna2wsJhEKkkHzUk6",
  "key26": "e1gAed7tpqquQMXWMDPemYZrJNThiD2PozCCadjqDXSvXxfvouYJgo2ShmJZnJPGpqsPgh4StcVdmePZPYTWTzQ",
  "key27": "33eaRLpQfphs1EWmVmb23tAuV116Grv7HawPeFLangTKHJ5NRxJ9rbDicPR7zfVTRuisLEc1oWxVCrrjH2AgYDvS",
  "key28": "3A9RwyjhTR7KTpEnnAVHAeHhY9oMnXftVfbsgeUEq5jQR5RUaMVMrZ8ZwX8Um1FXVzn5ZKhS1dkkZQvVyxug4oZR",
  "key29": "4fGVy9QBj8edQrwp5z7jeQE6nN1HDt8H9FVwi3u5dufTPBeCvEMKB53L72fRfU7AkDEUckYFnxdkYHf9SPy5pW3d",
  "key30": "sNPTWNCYji2QqWgpjy3cNYv2XUX4P2shf3zQsb8ftMxM8iJFY6Z57A41MCrQoa2cNHxxAmY6YRxex7CDbPJejof",
  "key31": "4THD72uqV7YnPjGe934Y54CaC2za4qdHrQgCtuPTrenjomZbX7QQV29WkrCd3qYT5eWqfujkGvwbAXDaRbsCYy58",
  "key32": "33DV2z7RZzUbwJXhSg4VhTLFZG7TK1FPGbP8PzjSPgMXNCPdTVLxuNsXEHQ3R7ZVavKVGe4K4umApM1WU1Ubecj3",
  "key33": "4NJPg1ovwGFHvtpsChUavSJYjpFe3fQX9ftyKbisVcV1HdHubvmKn8zYTgziKBSjRwtZWEc33Yn2apuZ7HNsuxM",
  "key34": "5tZZLLS33FS2HepQcC9yg7mzcgJQL6wH1nHBGJbaJhcd9Jw4ovLdtUWirsxV41iZQqhuYLro3H2PyrayTSA14pQN",
  "key35": "46LJks731ccWNPywNNymc9ZkZz9qWfwh1L13uhiAEW9evuHzrQrMtaM1yD4xa6sTDNBcFbWxFrNap9gF6hUPBo8N",
  "key36": "waEsuuvyzTb6cjsLh9nWBePvJJqX5NQVsZp1wr7ixRYekGwkeb3DFV5htipAppUZDxtthmBr772AKwp6EeEwWPU",
  "key37": "5GBHZjxYCCQkaPRY773YSyJi1dRyEDmAX4w7FenRofxJt4DST64ENSiw9tCnuRN3TdaGYTv78yVZNKrGjzYBrNfa",
  "key38": "5p4E7UZKcoEyrDbykXA4R2Diy23s7VHpFY5KJCZkAwVt5frsYtMewN1kpPmNdiNajxJeETDqwzgaFSedbrnJjNNp",
  "key39": "5VdrWP3PMVypPocqzbfJXjD48Q1pusgA5KfWmVkr35TMJT8BbYBdNRMpzSunRKxEPatERVYkLd133Q2DhAoFFYJ",
  "key40": "59LKzfRMZviwbacEASfbQNjU28cXo6wnoMjyjB4R3Ww48s4uVRV64eZAwYtTyPki5zxxgvHtbKcS19M8zUzRZBPv",
  "key41": "5mTiXp59HTK3DHpomwFvqJ5Uf49bWwzaK6edARJJLSrWgCFRaKU7RY4sgMxur6P4bGhTK2Y6Q65XFZRrDVJwW1nd",
  "key42": "5k2kT3sTmWtKjMe1BD56VRb5CZL9kQe4AP7ewZt5FWMYGQFpdx18GPdhEbL6kvjYnTKp89tkCqKofNJCamXmz9va",
  "key43": "5wp8nV8Amxz5ZNbRawHz74qEJFeJGa7Me6ppTWfdkPy5RtVTFjPJCQs2iq63GYyTWrAQ3xPsq3udjejGqmLMbHjt",
  "key44": "56pZgEPLEFy8Qh5eFWn2f5oAq7X7VVTgXAst6B27p938pLLzZFhAfgyoMUGEZmH8cZbQCobCgYNw422D9VfeSjzM",
  "key45": "owSZXcMFn43Zq8uA8RHCvde3RMoPDEx9LXr5xswBBRk1QTEduxUGqKmRHrMzQTmAedu62CdoCrTGNTBop4ybStR",
  "key46": "4WhVRynmTyjnsvmTVpzYACri23Q8jXs5LwSssbZqJEWK9xPfPcrNHuJCTXtcLpCgvZ42jrudvifZtFUTAWotpFmZ",
  "key47": "oSdRqShHFckg75mNRGBkYHaZNdK5ufTkijLNxu8ZxUSUiaY65p911SzD58U1DKTVxoYVUTbeL8TzGxEPHfa8Mpd"
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
