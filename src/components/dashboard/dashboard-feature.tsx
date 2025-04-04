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
    "2QLgj5wGe5bUmBnPmkidQANucBEGbGdabhWEdg8krXrh14M1HbnwJHs1DNRYoaYvhvq1Js827jSVKhjqUmjy785z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZBSZH182nr98W9qUrRrxGM1ahpUUtFWyzkPx9U7PGMmXX1nD7bSVTHJBxictYYqgVDJdgvyJvuohcUC54C4EUyG",
  "key1": "4BZLhXUqeC6CU66odtqJbT7vYwjfqUzdzm1HKRasdF5oh1Va9Kir1JKzzDyfiCfug52wxwNpG8PqLhKT7E3CNXok",
  "key2": "4NuduVb5cNvJ9yDtpyUomnVaSoVE9JyA77E93Prs92DoJucwDMerGyw3BLBz5q8kUvMzm4QGCK3HxS7hXDiuX9MY",
  "key3": "4nvho66KuR4rUp8DtjLrrqQC8x388VzjqU7so9yhrnJFLwsCjEdeT9PGhJF9G9DFc9rjEwLK3yepSfgSYqY2CeQG",
  "key4": "5BhtytDATA9m3zDCrDkAugWMBCDaks1B9tzpH1jxf6fN3zPqYS3JRAWnbSSLgTSTDugh3iwfdyH6GN5H6WbY1Szo",
  "key5": "27fbVte4KJhYDvLefjRFmWqbCf5FdZs17fV1WoNBMCxojMjuMusXFbK5Gr2M65EyfRPZxXJtJ3xhL8EUvbJHEDgf",
  "key6": "c8vkdzHUycPEQMLG5xT1wXBW9H5eBrU7kiLiyrj2M1kckNTWzjXiWqEAbKHgccvjB4fUNRqxk9T6Wjmy5Nn7VWp",
  "key7": "2gQR6T89E8pny2Em8AwZ2sme6ouzYsfDEC85NWdFYwSSghEV97wqR68bQHsyrHAKxJzU2KdwwTK72ZnHpaXDAoXv",
  "key8": "3BYyhrgMTBFnqRS64dxBoqJmffonMghu15vstsmrXbkXhB98S3kie3175r79LPLbMso5eD4YpzyjNYjHhKZgfuoz",
  "key9": "5GHwCWxwm4XjSveuM1cQqDyvDL443angdbNhrS6moC8growJdRRLRpSUC4ytY5QcQCT2ppoDLPNjcZhVACV3vnhP",
  "key10": "5KFaXb3bFsW39DM12zyNryYSEr2R939h8dWfFAeBWJxPB6FQ39u1uofUgYtRXtKbn1KWzsY4dAAdvwmNWZUUWc5F",
  "key11": "3Y7kuL9PQJ6diB8WNDUDuMd6BnBLgDWHb7arfYz9wW4b9AReXTWMiSHCehwpiVCA5Vn9vM6mBYFWxPHpZRmk5A66",
  "key12": "7ydfGYLku9nVmpNjLWuMB9gNTGXZoGNzMuK2AwHP6X3CwvDERA5H1yurXZvy8MHUB9S1RTJGP9U6ffTzk38v3UT",
  "key13": "55u49dqM3wLcompAxW9Fen1ne42wN3SeQEscuAZ1j6f8GSpJGZG26NXH4SEWB1xGrodsQ29HqbBqpK749vm3hqFM",
  "key14": "3DNTTWkNtjhT8ettCAT9MPfDL8ukmqZUxqe4u7snkptpTxm1dC7wndEFhbgZ7zVvHoH3RTztjbPkuuW5fffxouNT",
  "key15": "5kGHV3c6mh53njXuEwNg2kmSRnAhuaUqNqHDxz9XcxgbH6ch689sRZs1xrAxbprMTP2aR3Q2uzM5h9vsn5eiBVbK",
  "key16": "37fB81mZFTKomwxKxXCp7ETX9MCqG6ei6fz36Y7qgQ7uJsHBykLBxsF8pg6xtqwZvRHuBhsPJYvHJhkRarkYDsyn",
  "key17": "2VJFWzgLnaFpiDVJVBrQ6aYMGLfyXCSPjjhLqphwSEBwc5VT6zmuZZwtKG2KDsm19sQCSsiYrBor8CtTndnvo12r",
  "key18": "67CqvLuYTn7vwf4Ry4M4RoWwQAWi48qSZb3NvscJDuMdggUY1EkCHJHWCQVZEjyytSvzJcPL2Lk2T8htcuzCPiYz",
  "key19": "2vfPewTQRPSLtKKZnWfZbzqg1dmySL8EsQ21rtEUbyajcfSn8RyjUcLJb6JLRaHykTNqcBexPeEYtjsVjwp1KUm2",
  "key20": "5bi1qrijQQGz2N1oStDHib4XkK52eFDQc4T377h8eJJcBKTXsScd3sfGA3BgxnLX5zewTALWARwtkBPZ4yc8yiaS",
  "key21": "595dgij4Csb4FSoWmzAY5YEjhdXnLnaRBC2LZkgmzZXKiE56rCQ8SEZquakW1cRtGYxDVnYyCwjkQtSkz9hMfmUM",
  "key22": "4RcYhsaoLwnU3FbwcKszrupCiQNkVpfWkPyySJXSwUNLGYFnTuQEVf5hz67G4Sid4bvhQzPGZ9eze8aCYFj3Zndq",
  "key23": "3s1AHVEBXXZW6DJyL5oCkkMrtWniJJimobD7CNsnvKFmxxZkj5WGtGtKExToBVd7CHkQGUSX5PhNBWFjSAmTsgQf",
  "key24": "5SVrjj4EFbv46pcGonjEonMqgWFh6B2VhENu9i3FTzRCtx9wpfrLQquN7kyXAK9hM5KZiDMiMwbV4ekDvBxFgPSg",
  "key25": "2EMXXhuET3UURHTUYGgZ48z9cPpV5Yk9tTKExTHoUPjVNDAP8KL9qbg8BFqoLZn6g9sDhAphcuz1KtcAXnd7Ss2E",
  "key26": "4mozR2zrZXGoMMrWmdoWihn76yFUrjbdGXFKZArzkqk9K8Z8nAqjC7zYWYfFWumLJzzK2DVT6wXpKxuFZnASxb9c",
  "key27": "WedVpobD4UawqE4piC4YaT7wCX4qPLFLHcfaoHWS46BQ5Gsy3GigG8YVu9Wm13UF5TZxEEREJDPyXYycU1G9stP",
  "key28": "XPs159qe4MwxJXJfB7LVs5ewNu66vPjQRd5M3h852E7EMwWZbhh3CkoxnBSXji6MKdVSEEisefMj6vrVBFeDk6X",
  "key29": "2ogQrkvy9BGLeWMKS3X58FLxUr1KJkYyRZv5gqQSN9KwKJkt3KDfvQXQwjd5yXXNcVMom8QeD8KA3SkPbb2Nc5Fg",
  "key30": "3Uek7KrGcZtzB3V7VLr8HeBAF43UqdeJeKv6BbEyDkMkN1q7c1ksQY6ENQt3mejwgzjQZF1sGDEABm2p1h9xTNCW",
  "key31": "4b7jB2hgBh1EbqkPgRMdQ1WS2a8kR29jAWGBTo7UCtHdhJt1MCGhiUUmi44LQhdHqWGnt5bMgkJYFpRtVg4HVDDk",
  "key32": "5piSK57mndgy4py3waiZZP8REwZnNiT2HQ4S4p4jbGeLEFoxr7wQMA68gr4xT272EDqJ13GApp2vVvZE5oMQNS5q",
  "key33": "B1vrLfSLMNWUCskyUmv8LyD6XXLG4nW8RgsHDs8TiUUnSmMJrpBtLBWN31ZPY2LRVs95m4fyFQ58b17rNhgW28D",
  "key34": "52bjTk1kyhSA4g94eWJgzyZ3vxzBHNoN6drfS4LkmKdVW8qhcbLPWAYqNLH7DCW5sYod1PPKV9vudLNTK3YFJmf4",
  "key35": "4XsEYVft5vqUuQzayY9VMVPHAzrwZjvy2nAG4uCqiEuHPMPxQUkBpvmstQFktvDR8gkHJ7z6q8PmBHcfadjR1JLm",
  "key36": "4Hmn77PSzPKrtyPJji969KP89doH9cBDishfyyWb7VC71Jpyb4eu5gi9xKzkqxQ14XAQGHLbkbHb6vwPdbumz1Uz",
  "key37": "2sQhR9SENMysCEwk1Rzx8mLYt8Y7FB6dh4Dbq7fzMMT7riQHTAq1Bewe4qCSyvtNBsWCoMEi6BWZ4fSJc6Sozwjm",
  "key38": "3fr2k9byaKJCZd1ExFEBM47n6xFH7ZcSBA7jbugn3czswcXJMCPwmr7Vf1wYP49BatGPJiEncycAWU7xnmYcbHpc",
  "key39": "sFuuE6UnAaFdz14SJ2aGuPfKuJsLrhLGWDapDxCna9oDV4U9BtuyrHxmxG5kxzf4o89GGgcbgcqx9cZ9GDVZDV5",
  "key40": "2Z7FFrNaPhENVNPBGBTTaR8CtmUUtXZYrT9QnHbw9MxEzapqUm8HaWyfjUs4GKBJSbEP3653ysX5jFzGWijb4S65",
  "key41": "232kiPuYanbZrYNUD6dQWD1mo4f2tosmLGcS4WJKjGPZk55a5e9k6wo2AM3c1yQK8gEZzGKFjEuV4KK8tsYuqc5i"
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
