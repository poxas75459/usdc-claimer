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
    "3dsEWYtCwaeWogCxTjTmULJJcMUYQCCu1UXicsrGYD3Pku59EBGtHWNypcLisVJ2HecDBnVTJ62EEqrP59oHKPuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sLAFSktFAyJTgBLgCs8ZaDYz4dgXDyCAzQw79bFVziPNT4WKy7QCCQnVGXCoKUALqFmHG32TFdr3CLWCM4ycsJk",
  "key1": "egbMcQfLKHFCKwwc7k8599owNtn9eTsodMnv33TSZEJMS84eA5hjovhuv4KEv43mZxmGhtGDD8toQbPFKvzUXDG",
  "key2": "4yksYoQE3LMAgxtr6XaH4hRHJ4F2xZNHLgT8treWZBtqhrK5pCnKADRfk7kzW3SZx1b59z73ogwbyL5eJFyrqioJ",
  "key3": "2MR7M1b3g4k3nEtJ4xNJwS92AwcqyDCenyJEk46XvB2ETX9FHoGqsCWLewtNJ2Pin2LUC1bUPKoR8GoN3YCj1A6e",
  "key4": "2UqjxTDnFViukrJ1j1LdnPtReGYwFYFMwMRTEFhJszttZC3bSommu99zSk4c8Bk3RGk3WdydrgeF1oYbqDGpQRkA",
  "key5": "3XfDqxfiwV9unK9CRYAqx3DLrW542edEDhdfwyjr2FBweTmzc8WTJB4wi6AjJFYoK2mYUkstyVF39iuQ79sRcCJE",
  "key6": "2bjWHTo1q68pi1wYkmhkWGtYw44idUZhdPejsDMqcQFd84P17QBoxasoNkhrA1jp8GijUC9eRrrrBBz7nrhuxsGK",
  "key7": "2KjfKNBnZissPBj5MnMkCnAubshLaV3tP1BGhhAp9WqeYpiEH7njHVRAtAm1fBWzNtrrr12aHfkwgzRtVTE9Y341",
  "key8": "bjxKa9MMEtHBjQQjKJ7QNTWPoQRWHxTXhvyjLpdcpubuyuUsyqogqeEaVezMfzYkWV2re1W2ft1a8tjJ8CGQVGX",
  "key9": "2P8wEKnMy3KpUCof8wRqapAnWkAQtRdkyJ4tQG6yruSt79PkZdgbbyzghjdnRaoMuGnrmftnFKWzYCs1D9wN7bDL",
  "key10": "4icDY6cMfNSHNAoMFxU1dJUh5ZX9gtMm3BdWaApiDahYVzrTvYS4Fmwk27x7TVqygMjwSQbErn56rbiy57wXsYty",
  "key11": "28EMN1Fq82ijX4WABj1GUNBqSG3R68XDXRJB9uH2XNSHRbrVqLJ9ZTymJhk5CGYnwsKLhFo3r9eUU7MfMWoQXBjK",
  "key12": "2X451RSwe9qRzgP1X5HQKFLJNSAwz3GvAHYs6W9AtpUzJM69Cvw42v1ZGyHWHeziyo2ye5JDm32SunPADNHGu6hu",
  "key13": "5XAgbEZX4yMrY7mUdi7EGQzS5biW8kfqLoUHRDEMmpKgZZnvjncmCEaaiAkGPXJWof5PWMxo4fiQCaTDx1f3g4Kp",
  "key14": "4BEEDsuWZU6iXUoF2HKcy81nDtKRAFoonp94BPfDG9V1MSysyJwUw9Ys6oQrC33bByBEJ4jgjJ8jMv86akpC4BoX",
  "key15": "2nF9satdECwq1RPquNZhVqz11Eh1MezczRnavmi1MbzFz7rMuxnn58C4me46ntUiXJC7A77CqnAnvoC5t2dDo4zL",
  "key16": "3EMjm9meJKMYzkqDTfrzqW2MhnuwKo62HmLXwcCssnU71AbJWEokmDUtiArQkYzPM7qakV6r9eHBho2arCBB998R",
  "key17": "2meyQV8a5qJCZRC6FiggwEiaXnLZ81LkBbm8KQRcvNLHe5wythADMFCg6sB45FRjgJBvRvNPTVVrd4jPVqYVA5Cp",
  "key18": "2SLjecyKDuz387ojCnQcf1XSmdPKKmiggvBzjh6ZqhZaM5utprBMcT8wmazB3UsaRmfYvSpgsDgEYAqFdfWZcLRW",
  "key19": "t6v6A5q9QR6m9YWwzW5Vr6tPrgrNfSAz8PHoVNeqRR68YMBTH17ry3EhT9rbZqNZxPCJ1SfsKCCZ6kA69FPY91g",
  "key20": "4RrUAU9GTzhGyZXcWqXcGV5j7NyFR49kVKWSngE6nJTwWcQ91HgZDV5XLLoZ4D3ygESPWxxEV1sBbn1bpT9haLbv",
  "key21": "3Ef92fDvqXYoHdL3cAjE1vgqbTAsb2FfS6Miw6grcWfhzea3Hhn3sKeNbMLDz4hCLa6kgHSrEFm25PjSWw6q2yZV",
  "key22": "5FvEDTrEritRpie1VPdHiydUTtUdwhMvqi4XqfP9DfchwVgn6Cx8LUXXNDoTM6ftbsZ3rAGc2Hz73Gd5vJThsQXb",
  "key23": "4rePqA4p8fNzLGGkEoBJmHbukYRF4jWdgW6c9zhzZRLpGcCZqwFefb8Ebfxw2goqN614r32yiu1Juyp1k2xLubnz",
  "key24": "2shnAN8ak2aUf4D3bgKDXDRir8bWxW1tn4tFJgD8xv86bMgrLiLrngeNCnwYx3U6gitwCuGHqtNtKLN1obNVHReU",
  "key25": "s5TAb9DtVgZ8G82mA83bym2JAxGbzR4ZDfU82ojpbvPNZagbPuB1Nqy2F34cqDpBrs6VptqTyeY2CanxuEvoxbM",
  "key26": "4RTUQGowPT4d2Fp7YQiV3wAScd2ixBMXgPVRFLih3w1anz8pfUaoi9szu5ung79ZQPKWYY7d9w8bjY1V7W6mDfJc",
  "key27": "4fDMgzizeWGjrho7obBAMgqGSHySbxiTDpMVCbmzUaPqWdPjgvU3FydqGF2HhDNDpB5DHSnuKUYjUFDtWpwBhiJJ",
  "key28": "2hADjpTPftC4cKFrZkVH45nhp1DC5GhtiFxJNE15ipfFYnWBSQuyTifLfRCqjjboyqLHkry8ebFJWggAWac3KVbh",
  "key29": "4sB1C9CZxDrDqYn1Mqrj6sZB46rVSheTyb9DAMGaHLfqz7Ub9FkYXUR8TQXYwih1GwexFg9yjfKa9c6CE1Lr11YW",
  "key30": "4616bFUbvr3DAbXuD7aorX7weCqXR9yjNTXN9ZCSKPzgW2QzDxMntsFcwT8GhWQWv5SP4uRkmuy8GyqENwssRUpk"
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
