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
    "5fh49xXgTxdkmdh9RYodsprD9sDZdKT897upbTUZtKCaLRrhJyX28bQazsDexds33SCtzrC7M6zMturs4mvafGCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wpt3fNou4m5BeSWirk9Xk7HhyJT55F6sqyutQgoWQ7MpLyDnztKA2FkL6idLkEnmJ1fFcAiQnoUiXo4EZ7s8p9i",
  "key1": "3vgWfkSmThiZ6s6p2CcmzpUxxVWrf2AD43bihuSGeWJevEeDwxX3zVW3W2gF3UAQBgMS3YymNLoAqiwXK2DiNmmH",
  "key2": "4gHSoiUvkVU97Zh8jDqrmPzMjF9KvHfxiNdZCH7FrtGdtSp9LZ4B4emJ9AjP5C7eZZ2ede1U8bYCGdujeQ4HXZqf",
  "key3": "4HzZBvtvkQtPCAdCfTq7VSrsDfF2YtyhSBbYYhUXEcnEe75fsNfp4nu9pUMawBAE9w1iHMKUxbM83LhxhwY4YYXb",
  "key4": "52mADnze95VQp1UETv5dj62PVgDKNzd1KgwgiqqB6TvtRWk12EA5tkESzrQLddYtwhL7NxfrLmk3Jf3WxsnocjcB",
  "key5": "45PYGJSyKwoyz3m2iWSyjsZHw5MLdSoLEnBVYjdBCwH1dtNo1dZvrt2XAW6UEabnUonCgdkvsaBoHgcANV87QZx9",
  "key6": "5aFPQdUZiY9RzyeEgi9Lbr7yWv3ddyZeFquaC3ZSfG1wq55mesCbBqmirVKDkgAQUok8ZVRwUfLWoBvw77LEzRe8",
  "key7": "Pg4s5PvwFvHT2bmqWKoiWsrqJdq16vZ23Gzpvc5exHPcbbB1oSFJX8JphuNnVBjFiNsBWAn4Xk4qXXEwNQgBsYt",
  "key8": "2z7L6KtVrsNnfgfXULVPcMUgxk5s1uzFrwMqxi7Zk7my3V7EzYvDdKJ4Ad8gd5bFRH9pCfDUd23jAkWvzMMw7UzU",
  "key9": "vmLN1hW92nfBjV4imKScmq9bbmL4k5nfGmeEdp7DzYRm3ZaQEbC4V3piTuKeaWzR8ennbNpLnU2P936eKrctZeo",
  "key10": "5Coh9NfvhMSQmmUHFbSpQLBgaJm8pebmtqc5V9i8DbE2UXz521XGzLRBrg7RkRmhwTAoi1fViqfeBwPSf5fQj232",
  "key11": "5AuJVtXxRUZQK5cvwrwcZ3SWtQu6DK2khrgG8RF7n9TtiD3mCUcBqRfaYMbVH8P8uQU6FfX18DayayBtzpsXVWyw",
  "key12": "2mbe1zdXUVPFjwjAKYzFHMe2aGYcWKKY4cg2Ci1ChzB3zwj8kw3VqJfthD6e8nCagY3ub7cayZHLCEbyRWrFtBNm",
  "key13": "3aoHSfEfkUd4t4EaRHa14FQemBCAKkomyZc74WY3DbSbd74VPgACCdxCBXW1GR4btUAks7KYd4DcC3dd9Ui3X7SF",
  "key14": "39NKENhUGzw7xrb5oiFDoB2sggG6j4wBi3iFpV4wbSnEXcQzTyYfwRjUoFjipXmWj9ikfDnVbFqDVPzBLc518N5Y",
  "key15": "58Qyo3a46a3CP4hwPXxmfi5mamj8Cfcmgtynk3XTruSUnN9FZtANznAEdg1B2hQV3qRxdR2vfsYfRwKNzLEcGmFG",
  "key16": "51AiEuTGpLHPrqhERQchHeCfx3KaoQmDBhvG1j3u5RnCjywCzqTowcJVCz2NGd3Vu5vVXmS9fhG8tkTxrRfxKzSW",
  "key17": "3TCMyGsRVEwUXWrbFf2Xg9CPQotC8Jw33uZGQHTaKLfsDSnf5GGknoh8UCrGFFVGVbZcqwiQVsbN9M1eTzsy2dBM",
  "key18": "36QwxBGNmnPMjxnRn2bbmsU6tXiAbGCsrpp7Z3oVaZgrYBZ1PZHYGMhM267pzLms14NqSTxFaE7SLv1fcFc7Yq7H",
  "key19": "4krzyukRN8rv2dqWPNnfSFq4V6ha2GkbzAT2iaNgAWucfDR3o9qbHdMeTip3LVfbUXH4Fjqit1CbhA3jRNYkbMPA",
  "key20": "4Xrb62DzsdRwRekTYNmMR2nEHo5fvTMNdLCvwL8NT2tAi3YKrxzGQz39TffHS1pzWWKjiuYLS8yJ1mUeGFqgc7J2",
  "key21": "5X5ZCeE3j2UwCbz3aQzq7PQA2yPENwRADgnApvnvReFRuaNTVj9b6zWDpQWcLTbnF7Ccx75pvbAAmGyomcHnLdML",
  "key22": "LXYunm94VUk3RgErgp75zwehyNtWbzSS68n3igZZa5sJP3VCkaoiHUQoZFFV5YbuHEbFbtUTNmCswGAULQ2y52m",
  "key23": "52Up1pdgX89SWTys8Kwv1EP8put8sy6FNFhLwTS2X7RttcFUgcrq1DYNoVzK6Sjw4U29irr5qAwCWAnHRLYT7ngF",
  "key24": "3MVecFMxXyynLMLJbPAY965mqAwqhBCZUq5eGRXgBKTAEa6tsbKTuQBSmhrXKoMpGGFtaiQ7otqTp5SMYxwb9HoK",
  "key25": "5FbXrx5ErdbdttZD4FYuFwBYC7ZcZfCxHqfCfZP3wEFf2pSJRNhTzPbbVeSHDmFFi1cUhJmBWz5sQsxUrt6bmj9B",
  "key26": "4pcQE2kcp4tJ2s2ByiwF87WWsKP2EiRmXTwMFpZzZYfc7opooLKdceRdH5dN4qPV7rXcJtuTWUy6fRp66Eztf8ac",
  "key27": "Pemvxuy4F2Lo4gugmmNqpbRnMAe12VQgvhqyJToWyNuAXbkFVjsYe4oNC8XoMpRYgwiKJsZvbtha3e4Arj1hRmj",
  "key28": "2N2sGXzw3qZXoDzSUsf1qpsWhsFTcMwHj8zZ5h3e2g8jxMBSScYEt4YHc5ip3Jv7ki7FugHK2WjAbMSicRUsCz8o",
  "key29": "4MVCs9yTD8ch5kQ6mfaZ36aCwCkYZ6eAar7zr2naYeE9Bs71Yx3123fdxZnqdtRRdMwmBJPUsDumpG9oVQeQnLRi",
  "key30": "3A8x28mXQVKkRAeV6NJ7Mgb6XVsZB3ZbZadssvcHpXAkdMvEYw5GE9qhXxWdSqA1WvG2eKzbAvMSKSKEs7LE9GwM",
  "key31": "2MX82BQWiq85X7cp5fQjmLNbGRBvAaweG8BjRzGUiKWdYkAT1TUtrXa9zWZ9uSdeimEwEnhuZavn3qESMWXT2XmM",
  "key32": "4JxWxYswJnATEmPDBP6Kk9oxSXbUwdm9CLUP2FBbsGRjp2V8GdZpnCrZAA4ST46xsBatoQCmnRqL7QTQjxJa4rja",
  "key33": "25m7j2xikJQWLCgq5ur7bFsdwyFuddQwsFJBM32jbu5h1LzAFhZJCMyGaJUgdCVU9xAbALdzFJNAdnUPiURpSAXJ",
  "key34": "4dJAU4qRS3KsCy92wbmcZq8Qeor2eWmqgQMY9YX83jgxWYzZ6YXzf5mD1SGDi3uSDCL7fFQi4UnjAhkZ5MW24RXq"
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
