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
    "4TZndGKBJzRqQ4sA8vin9Z5BBd9mZXPKXWgySbVeJRLNRtJU9tSXKzqev3vBJY3dWxhzqt4YqtwTTJPJ1WfXm2dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38XVtLtVRXW5e499FgQComhgHghQe5YGiNXXoeng3gQPjkkXnHvXYc7qQbTZ5CNFqyRLKKdYgUfSUUDc5E8h7ePC",
  "key1": "4i8jpu5nKcenLm7Lu1YRgJ8RDrnDht1xyzd1pdNhLvZN1NzXwpwvCEnq3ciLBMVcJ9FoxJbUuQwzJLCJFKqokWzL",
  "key2": "4SpB3fnaTWCdb9BR7Uzmg2gseUL1xVdf5ePwYVN5rTEV1FKm8MYgsY1qK8HSYmYsZKDvE3CNYRBBPZne2EnRojfu",
  "key3": "4ZQ53YQUXH73MAVVwSTRzgit8zpnDaH5Av4sZWqM2uWLi5kkYBisYzjL1t8VD9D8UToqZ8kHCzUYhPRFzxZRjNMK",
  "key4": "WkvVystLRag5gg9pgUR3VEKXReASDySbDRVMzV8YRxMYc3haz66hcafC5noFZbtDbnmGxomp2zypJVALjs91Ybk",
  "key5": "2dNZSzkdAoyGaA2bbMpVSjXHvCFC6enkY6TvsH83GtkEFaxATuB468mRRX9672ZuSv2HCXPN9GWtJ562HAT7UTqc",
  "key6": "4CLqESXbUhS4nX8mNxiuwJvrdXp3oLK7QP72vpNQwLyyaDuJbB49mJbWoWFS3r7zSX5jWpLPoDfZN4Cr2bYSF7MJ",
  "key7": "2hBWc7RPquV1wrBtcKgpv8MmpNptF2fNveWHdsw8ycNJ776NQk3175oCBfbgPBQfcFpujrq8PnLnLc2yd9EfSMck",
  "key8": "3eZQCU6Je6P8NB197qUFaVhmFFA8xgQGwjSqkynjxG84oMGMUeSkeak4UH3rsbbzk3QH8vKCs4yGSXVuszwT42px",
  "key9": "2EsfMQGAHowq514ZQ5BHYT7XSRnmRBxm5ApghCZc6JEeFSYtqhMu87or6rPSic7evMqjCH8zbK9utGfCVVErUWjP",
  "key10": "4Vy1ccUwNZWbQ2QKT3HGN95eKqezvWpudHFUZ2j9FTtCTiF2Np9oehgiLLA5Pjft7a76jdiLZktEjgCLx9t6LfBB",
  "key11": "5d4zyVK7Y32Le7UuhP7uFskvBW276NW16VbT1xaYw4KjNU8jATZtgRZKUVjyZE9Fh9fPzshpomL5WX428z5n1BjY",
  "key12": "5QajmcTnc7o5tUQZxjirEzRNubDtmhzhh3ZdZr7VwTSMC1x8Kgfb9NFdRk4j3ByV9fTd7Uyyn6oGT3mh7SVFvGF3",
  "key13": "EPBvtxBi1jy2jTv5SY72V4ny27i1VPqXivuYEGdNgfQZebiPd21nsZefnzAbsewJtrSpSQXPpLnfXKq45uY27U4",
  "key14": "3SGpPzco8sC5j2E2W4vpP8qxq7mYenbJUKJSXXkVwgHSd4eNN3Ld2cstCDQzCrpZrCf57gSyG4Du4G9CgHdmPCwf",
  "key15": "321czX4Gsk4knBvSHQCXNnu4rqmEdH8hRwow97ErkL8k1UPTkqjAUeWJoMRNxzvh2C1xHp22ijDQztWqYJxtoq45",
  "key16": "GV4puwYakpENA4tjhf9ALJLg4qiRPMqy3UGWQCHiCLnj72e6fq8UL9JH3HACLTkjDfzx5NPjBoPEK51etLAEQM6",
  "key17": "4pALKttPFwWavS2YkZ1N9oJkUijLgVbguxqdnz5f4VEk9mjqQpaP8wqZVhu4gEe8KgwLWUUoVSxdYUXrpjs245Wx",
  "key18": "jGHr9wd3thSeKUiwnpkw4VcAWWJ2Djqr5J5GPdgD2KXE5STA8MAU2XbWbafZuEh4ujqUbsc8MmrGK4nq4i3NrsR",
  "key19": "aj7CTu9gV4TAPQ1Fkc6dPgD8VJF7Q38AXmrzA5fBQbtjCEVAahcY6U3CURVcdDwkXfNvLe337NthskkLQioghmR",
  "key20": "2iFY4HxfLXwQJYo17KmFUmiBpufE7VdMG2utDHuSMLL52LJ6XRAhafby8TqSnKxVwp1PogZiDd2eyRDDGdKrduJy",
  "key21": "aVziPb6kX67ttqD9wQLonWxJEmPrxDFXquYaAivGUbUkyRJHCyreKpQkzG4fnGdZZ6jAmXBekpdAdB6Y7DwGB1G",
  "key22": "3M5UALCdWHQ31GHuYyN2kuE1CmKesGaN2gReR3tAovxi41rMW3vwGokwneF8kXgfWNESTWv3no5XgBtRvStjmee8",
  "key23": "52pvieCYDCAGFedSb9rmxEADnyG9JKkYxmBR2SuSZqaCU3rSWnhmHuPgreRzpv5yFK9KmRoedZARPSK9NXCSutuJ",
  "key24": "2jnT9M4DXQdE2NZksaw9Y2vSgRzR9TjsA4hd2G6EvbiHjP5az9js53dAsmTFZUxMyGM516bAz65PiucA9zFwKDLS",
  "key25": "2xEzDvpxwYBjPTH6NbTCGimQHRrhU1uyPku4ae3SnucZgZA9aSoSC6hs7tUR8hGzMqJYYbnT9kfmdzybYDGwcinr",
  "key26": "1Frpq1Ln6uKu1vLjpBKYF6WVeALYrDavLigmaCZ7YxVEiCSz96q19BC1AApWey3AJGQodrYtTFx4zrtuYieL693",
  "key27": "3R558ymL19CTvfqYgsbrYSK8DWoxoV25E3Hvh5hiLva2fSLvr2KMVTj2NHiYcETfu88Z4MCTsKcqho8yKMk55JK5",
  "key28": "25LSm3GMzesbPfDcphRgXEu9H4nvQbcyjmwjNV7k8MyduUHoEXG5UeBXP2EH3Y2SqSnNEBEAKfHajbnkzdVSixuB",
  "key29": "628dYSj7PE1GgZmTztTJdw7AgoTk2HgicGSUnfYiu1SC7au2N7MiBbx8M5wdvtJ1fq3E46kxf2zYZeEn9envfWW6",
  "key30": "47mQCCRnfvzkaHqsMtzCTWdQzd98ThF8er8MsEHG8txNrKwmotCqDmB2DRy7sCXhuT4E8KBb6L3cVQzusorwWCfi",
  "key31": "tJFKPFHyM9tF3znQoqq4ya5FRJ3iewrgt5N9fvwvV1JjK7gioHKCRYr4znEwzwiBcTBXiKKt5ETpRrSTTrXXQvX",
  "key32": "2Qg3ja3FFqP1JjuyvDsnw2ymiH8Lr4EB4qRmgvgBY2UAyTDmnNqwgpwiFdFLUvuZnU8L5LYb7GVzeUhyawxAa7CJ",
  "key33": "4d8LwiJH7WYq1ViYM31vQ5jJhaSjeT7f2kSm6kL3JoWTjvujAjSnrTQ5zJZwziu2QqLrfU8WFwj3yfPhzzonQnYC",
  "key34": "2YpxPJv3D8cQZGqoBn8a81jx3KZEt25YHfQz1rmy4RxgQjPNwFXmhtcWCHk71q5F8Xk1h97PV8LeSW6Sd67QP8GT",
  "key35": "4Huj8de7bWaubktFqYfow8Sjv6NrCfPwzLs8eympKK5A7k5j23de1LNC7LtAfpVEBgMgfGLiQmbbATArjn9b6zaU",
  "key36": "3g66o8ypUwQgavQkkZJCJ1tdJmvPUGJRP9jD1LMp2SJ7WJGpRxSgDnm5fQFofeEhtPtbEbaky7ZUYXxk36tCGQmT",
  "key37": "2XsLJRHySr1TZPHLn3AcAVknJcZKY2M1UFyuTcbev6UYaSg6AT7YyvBwfPVeTiZUNNPnqydttXHYpo5oekeqUz6Q",
  "key38": "aTpo6KQzYmaaAGVGCZiosHtdMTp3jqYXgheFrtsbkBvvB6Gh8WRNvjRseNc6zrtWtCjqws6VmHXwRahtHYLBmmr",
  "key39": "4VXDBSJLAStJ4kDYa4tWmMgKZ9eB5SREbhuSQTWc2ShdePrFZnu4GFS3FiKVt72rgbfYLwQJMobkh2tHEcmYj8ys",
  "key40": "Tj2LWJN9TU83nvBDPh9CV4f42DvcjLN82iqEAicUuK6EJEU5RPpGsfrt68R46UojfmeEtXRCScvxvcwDq4R5Rm9"
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
