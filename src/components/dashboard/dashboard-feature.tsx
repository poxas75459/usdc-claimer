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
    "5d6KmFao6ddCGbwD3PPAzW8N6yjvYZ8AAtvthvHXz212hcEVv9kzsidxg5Lkp3JnFqihTr1P6njEJrQHZadPn5g4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dvzq37DTqWtX7s8CoPRwhLNCpoX7US1EHG19q8qs6eqjwxmrCGZpsfUxRuvBa2v718iLQYVssHuFiSxZ8KURF1R",
  "key1": "37gDMyYWmdhUQoStajYGp5adufRwTFsKxdXno5kJAF8iJq4rxxMieEgwpQfZj4egtqEobAoKPbgTHKj3WZkeLqK4",
  "key2": "54SryX9HompTGp8UH5aSH5Nh44jxVETEFqycPL4AVp9ezv8wmkPexXFZmRqh7pVnxqkoTQWayyxocpC7qw58SyKR",
  "key3": "24XtNgPAbTZcgeE46sU8gdDB9dFpnqAYVbyAq8L7roNL2LmBtKX2r51VDYtFAvruYBwPC8c12yEvAg5QeR2kCvBV",
  "key4": "JtgZu7yVnLmXnKPp5UsEMpcnwVKsuEBmGNUmFtwJ9yvZinqvU2S9HDsACoyWxggepUCigLdcesE5bCNNsSWJ7qG",
  "key5": "3vffr2kcomKVdcrizhwcKnABGw1eHwSXTzSxDJCTtEZE6AZLRQRAjLmkvH511WxSTKJ1jZ9SE7e9eXPwNHnGV76p",
  "key6": "443hJXVsdnYo9BJq7QSDMsL5f8Nu1eR8s9ToYMdUHspsssT1a9KKGW4hwfDS1CiSphAUYkwgkG2t7zUpWePQEvfB",
  "key7": "4kni3xz7tSd43n77GUEgNpXCvb6P9tm7hwNUiZszGZpfqxa2SyhmPPi5P49jfBTkjavXAW4LZ43nsPNSDpYguXs1",
  "key8": "6bxF4CwditCtcLNEhYKsZsXQ59W5EEJkYMQ9NeXRS8v39oF1wA3gWCPXQgs1GhPaQ1Jwmvu452ExbSXRqgQwnsG",
  "key9": "3s3Q9gtRF1ZjeEQzXndKz8bCGKkPHUowkH74GGhGDm6aYTNPsMNtBg8JxNexrFxqigauzsgT75kVXyyZy34yfQ3b",
  "key10": "4bnnQqiWHW15b2VdaiXzugcUProphyPDeE3sE5L91zz92ejhEmFGrLFQ9ozhToHzEdUHv8qafDomvW5Mx49PYw68",
  "key11": "5fC7un5LjGFd3Zpchvr2E4tCNhfzWaZuqi2eUadZqK9rfFDwCPtRwwgeyQap6USxyAQoPqSwAedTbEMLQ1wyq1i",
  "key12": "mSLHRn2q7PEjiEUtRgR7Xw4o4Fnos7W8f3LEJuJpgVnmh6ipSySPUT5DExXZXKD46iYMJVLnqSfgdm84m53qps4",
  "key13": "65FBenX5CjKeWrgPB73pVHWcFBWmjejecXztTCSLQFgBm8wUkBUsqfw5rXEfG3ZCKPWR13nR35g7RMQMpiy734eW",
  "key14": "65d9VttAkNpodyxq4hg3r1WpPJZeaSdDbitiA6gNRxGQHMDonmVPuxacavCpaG1PdqAf2J7NakCqDhQhPYSVyKu3",
  "key15": "3KM9tGnqTdmZAQxEvzBaTkNe4728LsfEfii7oXNVtZjdnfPetChtYEvAQbeETB6CdrUMAq716oCF8P1h7igVDLa5",
  "key16": "24seTPR7d1jeMbzHVYudhAD1GJa8jEdFVx6vPGsEfXJhWYYXMS76xarEGF5iXhMCwNxYSdhSoNcDJL6DVg9C9yWU",
  "key17": "dAwoMM23MMjtXTeSBb71Uha5bqVeJYQNnrF1awJZnQQtParvNS21gwD1pQfL98pAD5zTfPCfJN6Rfy68eSF6boN",
  "key18": "5WWkLLF8mjmBZpjpazuQM3LSQV7GCK1S3bSnKohBXtvzDHc5wsqLAy3k7igsSFoxADfueZnW1wqhc3L4a8FADDzs",
  "key19": "48h5PyWtxqmAafC5H3o9jkGmf8iw3xRGS8bnHbpqqfusvKgrpJCwUbimhZF853AxUNET9sj7UbpTtF6qSS8cRcCx",
  "key20": "5a2R1MUQsYabFLVhEnmPF4vm6nmbJBcbZczPXz8au2Vhw2QM2yyn8P7G6U4Vx7eiXbAyRNj6mWtc94DRQYj3aFZL",
  "key21": "3WLmT1uK9nc6ADvFgDgELfsLBhc9TxeFGFwGg6mrn7DzkGhYpmSRXp1vBBUXYtSo8xdcxZUwmLH819ZVkAmB18Tb",
  "key22": "4Md71P4dqVa5vK2BR9s5Bk8m41rsxj1zD7aVHvvrzTQR4R1KALM1AVJiRNjrmTxFCZjRDkvQka5CEvkozMNTzdFV",
  "key23": "5ETLoRMe42xp7AWz7xNWHwmoqQ8LVZgYh1ajn9bLD2JnwsnKA8gGhh8gYjjQeJsTeZP5sPqrHWv2712LBmvJWzHa",
  "key24": "4auV2Trai41GDAr7x6hijkTX5Rcmk1Z11mKAYndZtjHxLJoTYwJqSJkipDrA1QcKa4QCoP6s6Dcfaq2mS5oZHGA3",
  "key25": "3QSK5q7T9Hfnqb8Gv34JAa5BMKW86uXQRJDkf7zF6Qh29oNhjt1XYUbDyfp2h1W6fgS2gGnm6MXk2mUjqRfcD2L2",
  "key26": "5EixrFPM6gMgWmU7sKRBDdyCwGm69o6oCqMFVumGBr3tFPTkrijYsaesxGY5r4sNQsZQHCFLsAREeHWZqNyQ61Dp",
  "key27": "4oHFGwFeE8Ekbx9ji8VwyzDyPPs8LqpxSn4JSkooynfzysw2CaLy3VWJpDs7gws2mfb6RKPQTRTUicPcFJNyydkf",
  "key28": "3yfaqLd8J44j9k79wwVwmFNeVFqigU4fj8zrN82dwMQficG8qThyihd4yUyqv3KqLR5pbpVkDFj2BHibuYSC6MZz",
  "key29": "4oQ4GBji5K3ForfdnQKLsrQJd9Aq1CEuTaDPAujQJMxhJbytDegMQBHEnUytT4nVehFDoSFZAm3rKaN82QV5vM5s",
  "key30": "5HpYhXG47oZTQPGsGu8mAxjdngToDNq5efrwggVcRZ6ewmKEKCVfNeYLSwiyGQRWLee57FrPh6sncdG3tdh2CNYi",
  "key31": "3tj2yq4fR3NzkPngUCKmhwrQoWPB3ByUyL2i2TwWh8heL7CEmV9prsVUe7XE8L2jwjoTT1uGp46VJcnXHm7SUzQg",
  "key32": "4emG26ZgzCygzAonRSU7NH5Dgvv1tf18rNHdEkEM8tDj2THJBJuLQ1gPiZVEz4JmwbqZCocoNz8DzobeAV5MVCk4",
  "key33": "2o8DHiwuZJnM8Ht5P1iTXdU58jQBYzi9wkvmiuWHoUtfF9ad9RiHvD43NqBbNmNQFuuR2zcdfMAtasyxNKhJ5UBg",
  "key34": "4L8FYhhUbBp37baKUPha8CDZLfHMhwDq9PiHXRQj9aigNvoVwhtK2BM5vcGdQzX2ByL1rvoDGFWDacB2MCAgYJMK",
  "key35": "3N9W6U95vKZhpe1vkphK9iL3MJb1WyP2vEDSjv1b2sXtaPNs3Kfwj3epoPK8TBz3uAhZTZVupSjipoMCrA8hoWME",
  "key36": "2ekECZqgPCVPZz7Z6MHZ9Rx7LQNq55Fnm7PwJBNiczduP6XNtj9tqzB8nFxWFVhzNWBn1EvcpLDEWJPBnFpceXaz",
  "key37": "5THbQ5ijr8A1bMQPXneBxsVi9JTHpgp1VRVA8gJ7rdZSPM3RQBxr6ATCK4Kx4gL7nMXN3EMxaBnTXTLbWtuFfoaN",
  "key38": "4JMrg46YqWaCKGVUyzkaAJaN8cFtw6MPNMu6h2HEhzMmcj94csHT1RyiTChERaCLPunrCAy8dGjW1EaYK9GR8x69"
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
