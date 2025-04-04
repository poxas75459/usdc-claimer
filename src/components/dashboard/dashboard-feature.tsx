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
    "48uqoe1skYKT4BJCZ98abSHsi9iqQj4CS4T4fGUcHchQfafv2uz2aFZFU967f97LAzHeTtjDPdeuvCPRascojsV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37jJKF1vKSKzCJ9ytJG8Zs2XvDbCsnRs4fJc4oRYyPUMqif2pT97xmYzJjaZoHY6KT3Ee5h2MHAE3Pzf6ynwtGpz",
  "key1": "Szj6yBe4HBtQjPfsSUNXtvuqqrYLGjXsukHraSv1z6kgPpp5gDmzaiJA3ztNt6wPN52T6ejz8oiN1wYSxLEnLsT",
  "key2": "4cGTPxBG7EB5UtnQNTu6yiKTnT7kexdK69AFAdZZmFp1KupYikjHS1cLxCCdgxLSk1wLR1HcKqiMKJDVPFA8afKh",
  "key3": "47zatLx2PGV2NA4PqP7Sms5j96q3seFTRkVskJXD5obmpH6Uq1UrkvihM8iKwCfDwKSYPwhRUA7ffP47vymhJJzW",
  "key4": "2oEUD1dNq1Bdb6PWzVieNCRSuprzgtvcMuARzK2gBxyvT1MMh5aZDQ9VRmCqdTPR5uw1Ycm7Auc77ebEmNRedGNQ",
  "key5": "3KAEgY44CVLyjrR8EvYu3gnTgojjfLqfZtxbnPyiv6dNHREwfp2YvtmSgbnrJTkZ85rbCPytef7drQYTychbcX5u",
  "key6": "Kofr6yoz4F86FUZh7FBtswQAyQu3qhMrVd5oji1ttqi5NToS9jDW9i5v3zuNRZWgQJF95TBbeD1VMR7wEVdtDHc",
  "key7": "26BNWgw3imAWCZkzF5HWauG84vvKwWTG12JyjaUmJnFppnHpQRQN3mBEf37smX7GQxbfUtSi6EYJcWdy4PMwtoSS",
  "key8": "4E5CNWXa9kqM5uHiCS7w9jpZZYnsKPoTEhB935hfr7DwqLAvoa3G1Duz8KBX7xcVsmxAt85kT6fQzRDiRnfM8dJk",
  "key9": "UCgfRbPp6PxkNgHf8ru4EYuLrBfr6PWqFhCF5ZHoHKn8fMbXuQkkE1MHb1CJcgTYjvfkSN3pT3AescbXoidmVWN",
  "key10": "3t5yXXsBUtDtaWARXY1ecXbfXdQtr5sPf1GJxcksLNWySy1ECP5Nqne8YeKjxbAhpghJW9VZvhwb2YKQTdnF1yT1",
  "key11": "2rXX1vKgdygHJfQyShQHgxwjWwKTDPapgA93LseB7Gr9c34pmVgJcybW8C1jqEVe5p4sPCmp4B5zHo8Pg5UmWDfa",
  "key12": "21L3oeG3LhHH6K6gsP36fy4axtthY5d1iLTP55AqJEyHU1NX611RKyGfFNUpHhuQU8Queic5Rxz9CoBNRQTArF1n",
  "key13": "3wZB2NguFHViH5VQRiosRBWaA4abUecv4fHiqHNjm1Qx69ePPrybDExdpDh97rGbDgM8qovHGXvx5C6FX281soBX",
  "key14": "tswaDDLrK627ys9U72zVnu9pJLTLV4AaLuCueDMKffBoeEvPvfBcBb4fBJFvv1DEq1KtRGQ58fujb7j4GTTxDoJ",
  "key15": "672vYo7L9b2tCAkQQWc5nidnuKEn14PaRavRH3NCYkjo3J4JXj3niFDGKFx8qX7RkSf5afNDA9PVskrnDhKWTmba",
  "key16": "2sibPVbyL1hAcCwijexNpb2BYAWAreUVWTPk1YACykQNSJcXRgWTXH9HLiRpTaRvpR67Bp6duzNEvUXLJ5ripPr6",
  "key17": "3s3yg2ddXeAUnrVFMqFGMaYEmnZJjhrd1naBwbhxBJj5y4w6DYrGJ4UToJewnKeW5G3sav97rPKCRqaWeXoRnt8J",
  "key18": "56QtBMjjG6bVcDRu8HiHCkD17gsqwSeQ1XVSmTUu91CWzeEmytfLyFSG949c4XT5v9Tat7Bx2CF9kpotEwc1yc5M",
  "key19": "2cqBLc2i7td3n6CdgJ1cc5GhTzT4H3AqroLYsvcU61nNTzddrzdBPoc8QxLF1X29DUzBSP98cZmyh1ZJzYegKeRv",
  "key20": "65xALDQeJres3YwpEKzVrtpsGQfF1v4iezNVVda7Yv8PcTKd1AXwGJJBFHXwcRC5CYKendWpnAV4MdMuCR2cDihk",
  "key21": "3xU5nG4gu3Nf57RtHi8QfRNoeJTEF7Zaw3UiE2fHgBr1sLwgTijNfj2NCxk7tqLa7q58kGz95UpmRsZurfHBrRsi",
  "key22": "5418Hq9nVBfri2ufAe5DXo2H4suQ8BvCTZDQ1wN1zZ7u4EAgArp5mEkMfMWVpUiAYttGgvp4ddN2CeQot5DqGZui",
  "key23": "y3HoYVT1UzPkkX5ELaVXj4eVmfNs3hbhrDtJUmcT6vsNyHNBm6N2VGcUvVcJUuceiUZHWg2e4ficsBBECzB1dXK",
  "key24": "2zktu8dJ3zR2fdViGQFsau8dPcVRhYXsmTmjBVA9GgXbhuCvbnHq2TLmpPfmTVwudb8ZdLNbqpuMaZAxULW4df2o",
  "key25": "4Kruv7F6EuPPeWTQVfRe7FCih2yznTvXgfi9aC3io2mbyjh43gojtGJwU5RMmrJwQF5N4A8YjmH8J3h3EnybnvfF",
  "key26": "LjtX4Ne1QtV4QYpUzGfxXgZ4v9MwcrmQUrRLkdK1P6W2T9i6DMeWSk31xsYZFDMvbTTDpNKE9BHRwf49HHENu5B",
  "key27": "5efETqdRkMeYSituAvGWqdrTyhEr4kCbNaEQ5JxbAs7eed9wCkjtB1L6nB2FKJTB47UJBBJTarWs2nkQVbTtS7y6",
  "key28": "2aQhCafMcVHXccC9dewkbDWFUbem8hpKPgzwQXWCwU28tvwDzEr3h7kZ7z1gcQgP7prFppFkwSaXUVWwtArANuJn",
  "key29": "WzZfAVAWC54AnyNvB71nDrVWL3tjLMjLigMp2ANtSPumK33QqduYM65ad85Gbjmbb7RvEYhvch7r5VqxPneNeJA",
  "key30": "5Xd69GL5jDYWQZwrwGVd4WY9BgzbDFjJf5UYiUr96bAxhbU4c9XGakxTe2BGBWUy9SmvQXr3jZ6dCWHMQQ6Ejwt3",
  "key31": "5JXvyP2rUMHeUs2pXo36CBQCVDm4tG9onv1ThqQnswmTf4qiomjuaKSZPAEW1V5j16T6aToURfBS7f7jxZuprRcn",
  "key32": "45TuScuL5sugjpke1LpQDS7crCskx1zwdcyQFivWEX9PmpmWMpAKYKAA7UKcEoyvb1MG8VtdF9gLF7ToG7aza8d6",
  "key33": "yZzsfe4b5HXkxSAnmFB9sZGLGvG6HShU3eDCVmcBYupYQQxsfwYzVE6mpF3vtN479nzwuxNvZZc4kcdYhxsu69X",
  "key34": "apcsqUytDSBiV51r49UdgqXvXt6adbrRP6WjGVrZ2DSMgUyqoYTgwPTycbsGjMPzEkGAr8bYzMsqB8P3XXXRviG",
  "key35": "5dFLmrCj7qtGxLtMWHQfL8YypboiBdCzBXRqR4JSod7rYvfp1yVkn48sMqgTp9Ue6rVaAYxeELLEoZbFJFbgYAMG",
  "key36": "3GpJSpzpuj9JUi7BiNajfeMmZfYPkv2TmTVXc62NQMUmAnhAbyYz3Jmc7395D36ykTpBMPX8arm8ShXLPEjafEoY",
  "key37": "fZi17Wukwz4oYczcx5bhS3WiDKBfQS8Mfag2r2fnBKwxfnMb3zADwoqwskUpkKkbmvzYknR5RV934x119QgDMS6",
  "key38": "5Nww9sj6ZZfgnpqqqkoU6YH6kD3ooVAN9sU5E95gkKLHNLCjJWuZ5jXW7kRqwjmym46QCwfoztWEWpgCXUpDU9PK",
  "key39": "3xafkT2vhnoA9XQrmZpMabc4eGRyq1RN3PA3iLtRrFYj6gNEmkLQTC8dCz3qK7Ax8k8mTxP28NVJaM9j7RLcxDAf",
  "key40": "3o29WX5uKht4eXjqST9Bn8DyguDFCkm4bFUxhbn7XUYJC46JRPgHxkGKMANYb8XZUc6mAwUrRtvoVarzz1omKiDM",
  "key41": "5ScP2VwTmRSrkbqRiaU3Rw1DkBwVj2sk5PUtYMpRrHPuiDYybf2nDezHvntcSmKZ9qhFyusaXwRQfHzR9nT3AVXP",
  "key42": "3WU6QJMQTyE1Fj1Lpgv8ztnEbb9j7ANTajw8mNeYo48BPXxdgxeB263g5fYEwMr2jivmH5Ea8WdRRbLaHmN9drj6",
  "key43": "4YUVZRi6NFRmpLtDXZkmEGMXAJHf7MfZWHRTopKsfvgUpxPeuZJmcjg8nibDjJ9GtTnU17G1viA7uwEfJR5GJXEw"
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
