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
    "47isSMcJDQMFPEDxgDngU7U6YANQPcLByqQUxQJUmpUQwXMdYRDrNvak3yq1GKRc7AuvBzq2wX6AzqHd2sFEcJbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43EFPCh9bzs55ZV7yuj5bRTC43vfxcsKp5kVP4dRvgoCXAyCMt6XJ661dyg3yUFkkZKogLquZSWZngCbmgtdrt4s",
  "key1": "3WszP7hMYpRBfozpwd81vBWCb1uTf4scL2B9q15Mkd34q1sdhViz6zTEmA8V584tTLjiXBoo6GT59JeENHA6vVyd",
  "key2": "46nX4NSWJWkFpvDhbhcRKoY216ChjVFsdwVSJhADQ1mwogxDomvp42UTnVD7nGxgNSV6W6WYqhu9iYXRUh3PpjM3",
  "key3": "3J5w7xySQ2ERHoVKVWLnzVcPSfrLUjazhmCs2ckBNLe6zjUN9wmZzFcDmeNTbrwMS9WjJPLaDZXcczJBTjF6kx55",
  "key4": "2DLNmpFQmXE8nhKaBvLQhJ3DmKDXa7mp5JeDgqQPMxGdYd8w6RqEZdskKBQ9ekhxxop3MZShjZvtZt53xEhwHuDK",
  "key5": "EBc49GXkcW41qRhKJsqesoUrueohweyiC3ZsQNfzuouw5ywXzPUDfFX4nBppfo8shy4MRYTnARVqua67RB1Yi6c",
  "key6": "5PxKovMqs4qnESMQE3jraUM3VCigmfZy1YzSSixz2Z76XndPK1ekNuBsuKmsHnGCWe4kxoHmtkiXDZ4vm9CpY9x5",
  "key7": "3A7uQobMpuNKSn5xCUTMopKuiRMqanDt9eph9MATvDevMTKiSEpHtLp8rfWKahSajfs9bfPZD7o8mX7XK5kW8qb7",
  "key8": "3ZrUn2CSvNzJra9NtaswaAWAtEVrEixWLzt42tbrCQyugBjxCb58QHfKGqjn635U7EuoozqYLWLkd3moaCSntm7z",
  "key9": "3KEHEmYXVvi89PBLgsuhZt1cR65eFgNTyrttNbrZ4dK1oZNrrPsECriwQJBAXA6rKc652MGpvp7PfYRHpP9PzwT2",
  "key10": "597SzuJVEWD7qyTo6gJDqzmDuS4bUpfUvxay1p1Jp8Jfh3kHfa5r3FHe6XE5cPkvkT6UhUYWnqTiViiuoLd4uLhW",
  "key11": "5f3yLNKAA97TMKrMV9iFjmhHJNXjgfWQzug299uM32Jcp1ByPVTyyLMscvHykiwJto5whc9ysiS52oQuWj1M93k6",
  "key12": "2P2mQP9LAdTidEiPH361JeBcuv6Yt2CA4jos53AnqoZAqRKPJtpwfdZrDjqvaNWVf8sWfbG1ky4fGy4vHUiDYk1v",
  "key13": "3Xfoj6C3ePvu1TZFuybewDJzrYSo4Tv8hyPCKTAC29T1KSmDHDyJiwEEcefy8x8d2SnJRSWS5VaWYGT9vCB3mAX1",
  "key14": "4xf6eorJjWSKSsULEjENTwUb7JNEZacLhCoYcp9LqRZdgvfzMLzpsN7wgqDBb8B6qytmGLrbtiGWqLNX9AAAtjpk",
  "key15": "2eshsKMWPqq3cjbTYVLSiXDPwFejoCBGSGnKTDM5x3qbZTJn6Zp6NYjZGWqSXzjXmuLzsAfceFXKz1K3ptGhAkTo",
  "key16": "448DW4MBZZzWnnw2rfufnKtMtNZFWAdzaH6vaFpZv6GxdkAjkP2n2jGKgJSWcz4MRuRsW4MNnfFZVHnorUPYo51J",
  "key17": "3WKDA8Zakz4gPZEcp8EUXLTWi5PL8qLWBkgTwia2sUknB5dpqeWtLpt4izayNAwsPHXaZoEUkL76WPQ7bWW7Qb9r",
  "key18": "qCYc2RHMiJ39gtEwQaXXdzRzUKif5v4QETPwQkZhRTa8PTKBXdhZnpufHXAfyzBVczU4DnZGUmTZdzYch3EwVC1",
  "key19": "5217GzgzaW7B6iXGsGbMBVbgvvYihZ6mMWcwkh2BnVA3WD5j9MK5xx8n6wXf2QXbYLEbvtUS1gpmTNQEqavrMjtg",
  "key20": "2AXUqziHxTe9kN5Ve1pS3be18fANsXsBpkky837TM9osMc566T9eWDxW8QbAPn1veu3Bh6ez14nogN9SQP2HrZci",
  "key21": "4obHfBgW31hVauh3MMusmUxm1stksyBLR8MxDf2je6NX4XwrLK5yMbjGoXzRaHpyJrpVYPUvXP7EiqbLtov9ANnc",
  "key22": "3NKQL1TvukeCuAekPn9MUvdGanD7ginXLSSkJxG7HNi8VhqrzUaynQGYjLixTFic9nEDcdkBnWuz9dUg4VATPemD",
  "key23": "x83fAxQCfUXjmq6rssGhWP8TtQFsMizmEgsgRuJ44bwfbGKvx1suNAAHKD2nBWcHz914CCfc9Ms1c6NMSC5J2W3",
  "key24": "25w2hRveyqAN5BfwRZuc1qrx2Y7US6y3tiX4uVT8fTKSzEhDNsXwd5XuTRcSMmtzBePpKRMZpzqVKGP3ER1vDdDf",
  "key25": "3kimbLiQma5A77ppjHMAeRnrH4rBwcUJ1Nm2ztjZvTYGYWRiUhBa5GkdsgHk9CvCoF11fi3BU3rnZRSrC6zXDcBj",
  "key26": "3pNFmZkUe3oAphYakbjfMd9RK31kgua1meKXBMMtbnptjeyURAcdvCqp5QAbgHALBDSNEfPtB274y1w47gfAS5Xp"
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
