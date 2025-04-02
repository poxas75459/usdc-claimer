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
    "27SH9gMio1b2ywB5FURiTEZ2N3hyBsuKhDoya7TTgR4L5i2Gd38YaN1NAY8ep13o5DmRThkXEgLoCrbGcgqza2i4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GhH6LzQJTu2Xe5MFvEH1NUbG95mQ3BXDenv3sUsRSP759b37gZfezMisQcx59sawWaYTPhwCzHneaxQggciUKhX",
  "key1": "XyNi2mL94bh2K7PghAueFKT4cLrcqXD6EccNaoB48kQdoveVhCCFj7rzn1rwWCWb8YBkFVPbxNhy5GDrdKZNGGW",
  "key2": "65JDGM7ztSTv7cfT9fNKh9oQvvtwQRoABupfTmfvEGegcYXvGXFNuTdD6RfSmgaUmXoWD6jcnVMQLcjw7hQZk2Md",
  "key3": "2ToKHvyDLk8ob2tJiRitjkWPvkt5Y8h1g5zfPvpRHKZbuQsHV82SboJ8V9EZL1XTn4VRNugZYacVTRYzjKULRM7q",
  "key4": "4V61L29WJmKr5WUwTjMiwhs6osE4KpenP3wdu7fPMjyv6b8tjufSdiRWsmUc1cV6uVSwc8SFuW9EjXDzJzNThnqT",
  "key5": "4LtDjCZHYZL4aDTWJEsEw3teZ1jpAF6aexaQLaRWfge8bqPgiHgAXS4YybU9fPDo4vFUbpJ5yU8t7wTSJHWS1mAb",
  "key6": "5rXTC7YjbyePgA9717XvDut4eJADrYW9xZUnpKq8EfchavGugdx6WVGvszEpAbPUKyJ2ALPk684xn4SovRSpm4eV",
  "key7": "2Mv5MPT8H3Z5rEwXDkVeemMrafBLkUYwV2DGBtGvwrkxqjpE23tuzJDmQBMsnqBhTCX4NvgBJoYBUDjb21bpViZP",
  "key8": "38wif9iYipWhEd2Jg8YUKciSQ2wXv7soB5FkV1Na4eMsDhjaBAQYgLBiqtG1LnavSUekLw1XU8zv4umoVzqQC3TV",
  "key9": "5duXKxpXrPzJGcUXhGNvuj4XrsDV2QAxZvGdim29MkV1ApPMcpfzopNkeTDHstQSiSeRP7ZHhT6bafqUCdi6oraS",
  "key10": "3XGR7VJtb2GkadBBPjgU1gTAQmmfYkf5w2adBAUL9BJDSf2msFLmo9q9RpjQvf8a9t9FGpzTZ5gHwjkAvtFSr1Vp",
  "key11": "3qa9A7tFRBquXs7nAxfXp5LyQKXQXMPD8Pep5JWVX2r5Ndy9pRqSE9oMTRtKxLEf1v8JuJWhGCzxK66VjYSGFycC",
  "key12": "4BnuLGXfD1JkfNGvJsTGEv2yuvv8syvp8vCRx2kqg4nPhkCHXgfCdzDN8J2ogM4gmE7guhxTS3gYxUscMC6mmrqd",
  "key13": "2yKLxxGMQGTMnn8BnmjCtjCiNnkp3NJz57xw4peFAAXMFDVcc58bYDjK4p9LVPi3tYBSw7yAdoChH47yvA8b3jHV",
  "key14": "5xFEjJxfxaG15enwZEGR7XKVj8cHHfCZyBnMPjmrhkcAtu58U4VSjuEZ8HjFDxsDZnybg25x2pCCf3LXnpFa5ttz",
  "key15": "27UvbcLbt74dSqEByMSRfMFXpB6q32L7hG23aLDcWCeFkGjbVHDMdmhJomuB1UPKM9832K64uhvUTZ7gQC5BBd6X",
  "key16": "62NAm3Z2GYDD14azXhyNV27qwbF7Bgj5gyYyHz2Cf14JKZYDHtwqMyVX8CKtcHangPLFhSb3qPZH4rtCTL2WcSZJ",
  "key17": "27grjV6med3DFcyRB7iWh4k7kjZzoK5P83GDj82rpwErtbB5JyNNpNLtJUPYs2KcHGn9SLsG19KDrxiWf2KRv3Ud",
  "key18": "3SvKgY8BZsrCtNEwtKgDtjBfRQd2fnwWuF3XHZKcgnzQ4Qa6KpUi9zLaoTEkWVwNjCtRDWFAMFSC8sLGHkfWH8dr",
  "key19": "5DuV5sHJ5cVSYgvdpnFBErmGZXuMHW827ienuGnta1F7xTvZi4XDjPXVEKkNMWecXtidpdX9crYW4wAo7jQH6DUe",
  "key20": "4uowFcvwZf84KvrMDV8uWnoRe9wK4YSGhNAag2zq4xc4WrK1N8WV2GRYjNKwD6qgUZZ8VsPPEHhXnctQKv4XWybB",
  "key21": "4zg322oDvScLd5jxTJbnazaKU4CHkzxSPUwSYFF7KiCLbGdqwifNqCFoUEHKtxaw7z4mJVW8PNuUSmMS4oQZd23b",
  "key22": "7tVXN5opZ12zS7THXv8j7e3obj5evsYF8TTYEhgo1iHF2AdwzxXbiJDFhPTMf9W5jD75KjiV3hvL9B6hg2Rii97",
  "key23": "z3WJnVswUDSM9qZihfAfuTMVdPmZvxpZa2tgpEPUATfLT6CrVLxinTpMsk34EA9JWVCP95GGjUBvbkQQV8gXPFi",
  "key24": "3kWgz562BXoZpg9tDzv6aKdqdGNtNdsERj1Dn8fqwHv3EFicJVA7SAwLztgG5oHZgrftPRjkJaxGxuLNgXsxzQSz",
  "key25": "5zXxwV2XUeg4oLnatqCmiaNUZVzjWpvAhcfXzB4ZRKPGnhr6uYBrB185eSGSRW8JZRvKM33C5qnmueCap1QLX5xP",
  "key26": "5n5RpCjfxT6UCZE1onjLtVuk16QZT1e9YnbDYxN6xobytRptEQkoYZXHpu7PGxURifFnKW9462CMcZP8ghzxXcUG",
  "key27": "2M5fbGFv4EXKAJq1RW4HpnbbWUeuKU1g1gmR2G2q6i5YogZTb3ayXeGhUENTfRAaw1h7nVb5SNfZCwQ3QEafJ38p",
  "key28": "3thqsYLaWqjbfhYjSiFcYwxExAHSdqhMsRGMzmjBUCKigEHSmPUkAx7G5rAg5ysiQPpWBMXs8zVTLbhyVkWm3GxL",
  "key29": "5snB4jm65SvJnmbVVK16ocYx6bVU72fnRD928RZembUmbp3DUHgsmEUrEY2Dr3kb9FFRg9SVamJnKVXkRQP8jFV1",
  "key30": "5ozvoMhx7pkYFoZfAzSZLF174YbG1M4dKQ6JoMwrNX4x7gEiamp9DGGgFxME7ocphfWzBvuQ43GQtxXggSCiBRsX",
  "key31": "2wZ1jRiZVCQj7H7zMRKX3sqiDz5x43okt2ztrZ81QcGfk6sPvMs5sQE4YFgeVJqEVQBnp8F8fT5mm4WLPfpuWnFV",
  "key32": "4w9PsQDGSxqTTz9ayT9TvHY1mdgscjyvvm18v3RwdwbdcZj69xJBisXNnakJUjW6V4QybRDNPHLvZ6rjUBg9rE4c",
  "key33": "3ZLE8fQNfog4sXDHi9YywUwegeQ48YnJpGvnoDeF2PHuJeHQzVdvZqQbSZd3H1stWfDueuvo41SfZfKbxtTWUM2K",
  "key34": "Fms3wWipbbdunfZFLucmSMtRL7n4cUdkKptUvK8qmbQdZFMLBeyikN81t9ETCa4MSXCLjQFBaNLBrsD1jF3rRRf",
  "key35": "fN6xNjw1syR72BDdUf6Jcp8qYxuHsreUKFxN2KceKJicvypgQYmckNvNVE8r4an2siRh1nCNDP55P5nN7f5nFCx",
  "key36": "3fVPsmP2E9KRRT4HThgyjo8T86Xjicwaecgb8fMjag2czjs9Gn6wyLP8ESPD5quYiKX2Y2JJAF8QCtUAYEbZbMmR",
  "key37": "4GvxmtNonVjrqBRFhhoGnqas3AcHL5gcPZSj1EaoE5SwscutzBKR5prYifALbzraGJUquyHNXY4QpZpEusjbSdfJ",
  "key38": "419Kv57K4pNQX6A71M9x4AtJ6kXXzw7ZxQzMvNjbtWvGQzqvvgk3QyACHvxCFbUeGKtYxcshCv96RkyAKBGNBq9J",
  "key39": "Lh4gPcFDrwE8i4xwbukWVpRDYfA1ZdA1t6mvU9RmyBdsZXuTjSkubT7FyfaCHdLtWa8Y2u4FjA2J81QHokJAwuQ",
  "key40": "3gHsrnFBVJDHX5hr61goNGuSZqHzg1Rdr9i3X21vQiNWiPGSf6qTekMHhW3jqjXaGbMaoY8xG1Zugk9nZkKdC8d5",
  "key41": "spqo9xK9pEdz3PHbXV2XkHirPjq6QvZ4NUdHRK8WRivfpfmCveHDW9r2UhiVyeK57ESNeMLiJKxkg6WKzBaba8Y",
  "key42": "2zqExjnFsD67PbRon92XC8BcfbVtvRYcoALgJzcUu3ExeDEQyKbAu7JgGZqUbE2tVjjua75bmRzYKNWuAb5tmqUo",
  "key43": "3Jf7YVDm9sKNRvd8mhKXpLiyGM5JnRmji8ra8gYhVxKHTg4L79fVcq2S7mcZ7HovNsf3JaQGn8JhQBvGzCWozLFi",
  "key44": "54k7F7ohfK6r4S1VT3i7GVbtYRCzfkREzi7JLnrjbFQaFXcPFmyxNPrp8vKcwKvLBFVAVLENLj5bDF9v7zNZUWHE"
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
