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
    "Mpg4E1R4JESwc1ucnjCmDjwxMuXJv1BWRP2nGCm5K3feAP1m52okkBYtdoYrSYMuAteNfks6kwxQQxF1UsUgSHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hTHDjsmrS4XzwDqnfi6GqsZDuWKGeiAHHm6RavrSAaPoxgvbyifA3xweEQw8UcPBw5unrTWCqjsfVpYoQA8hPoc",
  "key1": "5oshuNGkFTf3aAQdshimZCaKNWntT9G7GmzCDvysPn8p3xhL3Q19R8XZ5eWf4grxa1i6XajuoHrEXuwsJCoo2enQ",
  "key2": "4YK171V4vqqqdQTUjc1vCbEemNx7EvC9HH4TvkXk5ZFgNCrgu4wLZPBizRjmSqTpSe5Kg7T58HjnmzziTheMr5t2",
  "key3": "2STEcrtLLdGxdz8didb6bHpHC7mEJu5NThvYRQaqk8fxA1JGnuRZ5T8Nd6217PGZ5wFCuZnCCoBaDmQxsCN9x5Sh",
  "key4": "oL6Y6SaRzz8ScvDZd2xyEe8ieP5oxX49ZbcPC2GU3CUhYUs4Wfxg4ZJxpf89hWCjhGz5CQKX2pvYkVdZjYDaaPK",
  "key5": "2SbNWVjcMs3VtV4ooindTrqv1ycBAdmQVG4K7KLcM5iHdX8SDVFCXzChWJWJjVmoU9hti5FKjV5ipkkAGbx8bwZ8",
  "key6": "V6iuqTiyBETWsDobxinRNR8zGFwHh28WmrMXoXGPuFUwh8bdFbLbDS5rq79uTvxVq45miNcd5scChQ92svrXZz9",
  "key7": "3ZkspJCdBhqWcDY4u9bZFhew8aMNVcQMa1GwQTnBZB1ASaTbBpeYZsQ9xoLhJJfoy3532K7rJa8L2EaMsDpZNwY4",
  "key8": "2Be7zeZSLDDS3x6zAPGwgSRHjMhAAshJVgpkavMKyzWtKELBRuVZHwQBDd4kbD8trTC8hX5qSqYMH7K3iLf5fp92",
  "key9": "3GsbVfai8VdqG3tVA1TU9snSmkbcro625BKKkMGFovnzi7LHKvXhGdbdBCh5jhBtNxmBp9hqrx7hN2hDvWJ6hHF3",
  "key10": "5DJHKJiLHwNMgHmTR2CMB9qX13xkVX2uEJRwe6DPe11wUtNKxeUSspxGgT7NgYosvxfJszEbxFtrz5n2DS1z3ytW",
  "key11": "3pK4NuH4HfSfftx2ZXKwYe3pu9xJLNggW2zmB5Ng5AiqydkVuEMwsKEkPBWYWCWTW1TYNMtLHDpwh773xVjXZjCo",
  "key12": "4UZgU3CuiZWPjZhjf6QfFn4Dj1SND5kcWufqwyEMScwoxQyUn5cRXR8fnaFVCCfgYuzY6xt4wUPg1bTwhdMvbVuT",
  "key13": "YBFuBQR7MpzARGiUuyG4sgiURJYnk6VcZ16DiiSwzL6iaPnDPeZF6uveEDyXd1WQXJg63HsgHHzvbBwVvyXNHXY",
  "key14": "4SR9wLsjN6SgqAKDpBXiQibndGQW5rGXt33MMHEaHyHgepH6x2FT9Yr5hLQ6A2d3Ev7GjQ92VcZN9WpD7AMbViWB",
  "key15": "nJvfXk7KYuXuBDGpcnktdTjsdxP6rkT9s8ZhjX1X2uWYzDkFPJqsdw4xUy6QVXF7UT7YrSRX6hmpm5bUF7jubDy",
  "key16": "tEBcGcxeSBKQesDZiGdXLqhnaNGNBUt4ivQnvUtGBUzZwJtRsqVQcNJTwvbAm62M1Hp6y6bLtPwtkNKouUJPMJA",
  "key17": "KK45uWbQsM369ekk3pnndKXggQiJVpbdvDyLxbYSX84fEQEu18tVaGWzBwfFAZGiPhePu1YRyY3SYE5P1TkhHXH",
  "key18": "5XTHYDwn8CxYDwkAaNZcdKFb5vQ8HLdjiuA22Vt493PEGNQWux7wYYFjkkL6Fe1AzUybh65N2pGrojVqUNtPWAwM",
  "key19": "5kibKpMKaiWwCEv1Xgn6nV6X3oRxBHBwtR7XfAaBuM53HPpVvKhVFTLmxCht4i1Dhz8m9g3pm3BFNEsVWWiVfPDq",
  "key20": "4UL3Uu587sYgnvAwNTFSHD6WcuhLpi8CkcCaeX65bRxCYhNT5QxKFPKTL5npBjYPBGKBiwQB4FjPLQrvcxM6Lsm3",
  "key21": "2hfWensnXvgGLwsKRNneC4SpUZct935cRqhyJLjLLr7N2cLe8Vd13sFgtzAwvuMs3HjnkTAG15xjAziti9pHtfA1",
  "key22": "38SAwQ6248XjS6qXQuWJMPXAegJc1R3QMVRexmQktBhBKVjaAhFUUBBAPi5b4RRGU7ktqoucbLdb8ztsjwx8VpEi",
  "key23": "4LuPbEvp3ZgQJ3LYxcQUuycAYoNnrQtLmLYAGo8RWmxzT9tR1ho8zQBkZ2ToaRrpvtktGKujW7xSWtLV99pAJqj4",
  "key24": "5qHjmAKbLiyvDhkP3sjveVeL1dg7zp3jzFNMcQuB5Jgqt3FGUgQ4nJ6pCbhAi9urWv7gcVkXM2ZmwzMtZEAXxqnY",
  "key25": "3WovVjaVFjPkP24xizsAKxFJJtv9wbKLJ7SwW6exYC4AxxPndtozU6dXLC8SAbFB3mSnJXeUyUgzjBePYpwAi599",
  "key26": "5e1A1h1suFSo5MyvdYZ21ng95oTdf2Zn8bdFD7XqfgHoU6ArtUt3NVkxa688eFyRGBW8mU4bmkXKZaaMqkKjBsbU",
  "key27": "643jsupvd9uTkuNLbFC7YSB1qkP9KPfKrztSYJNH1MJVJs28Rk7VVJfvttK5zwUgnbepqWCfQDyef9pbfGeqgDmS",
  "key28": "2EHcKeHY5QX9nQMsirsoD8H9CnLbyef49tVTGNN6Xsk1sU9Nya9BmYKhyLcfeKHbYrbiomTets2ZE37Xo9937QDT",
  "key29": "522x8cnSRp6qhk9chWJVpPMC4SJ1YZw7EWjsJMDy4cb8DWdBWxBthjsH5sKQcocbc12QQa1wxKev7nEKWMr3Yu8G",
  "key30": "2rDvnRGCvm7xcRp1P8PVr44kKUehtj3TEgdewZgkpwBKM67gnjYn1vMjti6DYZNpNinWUmgmZJvrFNq3vQT57ecS",
  "key31": "5pXrk4QMK6UPDPNgv3A5NhFPUo7eJZNPyDxccVcJy8YV2Y7rXvkxqmkLRwzkVRuJ1RAg7Qa1ZUyz6kjqHCe8xb9o",
  "key32": "3QdTH7SgWm3iAFEZ4knN2Arjs8mLQyv1jvoHafDVjbm8PkB7RRGA1msttXATDYkKrab4H1BF8FWSJgqtiyZRwLze",
  "key33": "UgPVRGUCidfvCgUxLqfYB7dZCahfg1JQ7wG8X6WnftPej5tLD582cPsbmNrmp5sZezggCjci88AhZEotR38m86M",
  "key34": "3WUyzEiQmkvrnZQsBo9WJcwUyUxxs5YeQnp5jTLesur1J1CpTradisodYtMjhrUdhi7go893jK5FtwRKiFDHBaLu",
  "key35": "5n3JK2SxpqeVU5kidcn9DU7AWeBvFFWwqvE2fp19K7WV7bb6NprjUGkRjZm9BtzGAFaYLLratuDZXQM7xfVfDRFo",
  "key36": "4ExCfuHSTBdZpPFHJvqrbZzjHQ741z3wRK9WwRnrc1aZNWx1pWjxvSXPPbTP8zcceLjgcvorESn4kCvzVgVK8fa3",
  "key37": "3oB96FeAa7E1jychaW7kJuq2W3trZhtBuLWbHZpbmqKHiWiB4Ndcg1awncNCdypS1UNP1MyJpLP6drLSMzCwNXtT",
  "key38": "2yTThLzfmQtJCozs3vd6E65oJrXidqY12M2J7WPmBYkUtrJ1iGANnJz3vCv7TfNj8bUqPqdQ1YPZ9BAskDTcVbeD",
  "key39": "5Bbh1YxjN8U8q7EHTNNkj2n3v5cnLASkvv45n2joY7eV7ivhrR9cM4exaBsH3HfFSmgKEkTts7FnKZVZr8cv5f4p"
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
