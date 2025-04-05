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
    "3eNZcDJCDJVFuU6T9YxdJNuZZPUiNv86Po1cFB7Koyh5ddq5Hv6cHsbNirNSwMJRbMhafgBj2K2yDgrrThWpN3go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3heE7kKoP1VXTpS86mcYWkwxEEoTWNvCpYi77N473EVrS8WoLRsR1ZCrfMHuSw3vtyDEmUF2Es7VfoGEXBxYS8Qg",
  "key1": "pB9Nrqku85fEwJBt7fPYqqUsovLnjdhHAkLEtfShiJBj4MEAfmihVE3pntWqjtPbwCodfqKk2j97BYFP2d21UMe",
  "key2": "UF5hsxN82LNZjFgGpqhik4AyaWGoUfLR6FzXX7ZPT6SSrhyddyumamgMwZX2pfKicaE9rA8bWWxwndHXKqdCPU8",
  "key3": "4yNJ2q2HaXqY2rh7tBujA751i7spiTmLm3k8gEsGBrDdX948Db9PpaUnNECc8bHX3UWQ2yNVRPvidpeRmumG86zy",
  "key4": "P1Fx9kPg5DPY2CX7knnA8toV66HacGqbhoLN2FNaH7BcDzRBxcibxqd62Gdcrkq18pPAtDDi15D5DKBuhH8NXQc",
  "key5": "3a88po5u1qPaDMdjSyXDiAFGfiKiysWYo4j4uTAF38K9CQckjA5usPS7BuJTVZhjGxansJ2h3QYNvxZFkRYLVfVb",
  "key6": "Sea7GhhiNZXajWLebygTxeYyAasdiT8NTmCN1sfhnZMr2AgUs7dRb5SGavkHR8pHTJqXVZ8sXDFXpHuVCDFd2Zm",
  "key7": "4fzy9BRgNSYdPZNr91Xkf6chDMNXRJnNVzkmmUkCuiQG8DKSCnCva7ijQMB82nowwTqc76eo9acL159c5t2bKAKV",
  "key8": "rxifsn8ca6eZDeukgu6Rz6Fds3mhoTkakh4CxJiGrKSVRBxq8jmbQHdEYV3PxBc7WhAEik59eyYHgPvTLbKVHPf",
  "key9": "2a4XwQYUA1x1EfVUoZoze5x65YBnr5FF7Y9oyLMiVxCrBAFVorsuvz83iSsY2HAdJDuY6c4MSUDwxWo5VsMFJFwe",
  "key10": "5vrX5he31mXMbSokNELBWZjShzktjkadxoMpb194eWyqr5mxmYBs5WEvXa634tvvxNZm1Xn9K6tAH8jPWwyQYAxc",
  "key11": "3Xck1qnKGKH6N31hY7zjo1Y24LMnxxRroXgvrMtUmZBvUAaFqDdhXCwd5NWjQDgo8pZcaMMKjSVYeZ8dHVmnoetS",
  "key12": "5p26Hmhmt4MtmWuEnFWndXBZuR9YZTefjw9nk6yfx7miFLAn25kSYgKeRY8cTaPmAKvjwdiox4MqzM9GcAHqwsAC",
  "key13": "5RqhEuqRTX4MwEUb5oZUzHZ4EznbXoUfy5ootfVJao2vaVp33R3ZJAdWe49p1Dqs9xVH9q4rdn7wUhcyP4eRSnYe",
  "key14": "3ZfCwWG4THJqbTeJkxx624cu16jChekzLhiUDge5QGwQUzJvNuQJp1BZkvuKSdApNUdCCqKJKMdvbKSBrv6u5Qan",
  "key15": "5L6UwNP3MJaLqv8tcL9uEeTJDLRNjBox5owpFgxtvntJDwUwW1Qs4MHQWLWZPdAXGmsAiYMQ2qQooXNsHFbmDLN5",
  "key16": "3o8QCYohsBo2D3drPBnSR5A7puWoAVoE7KbBkFujeVhTXkyugEEtFNscSJ2HWF2sEoX3KWyCYgJdPvDPvie5QjCY",
  "key17": "2W5cLHMUvrma5BUiksU2FVskFSczeCW2FNqaUe4cZn4TREEqKxZp45PQiVhMvjFcFadsFZWDSBdwHrTGMJiU9FYb",
  "key18": "sTi5aFjdAQwZVBftNusFC8fiMvtyHqryB7ttzq3ZtSs4wSketVsNaaPSK47wfprX1NU9HgMvJRj6TWh6okh6KM1",
  "key19": "2ZcvdubGrnvHhVmJDP55vXMczJmt2xQhQUrxiXpgvNKyqa5MPjHh7ucymbCECzdn8CppzhbcqwjMN89Gpi8SEBtU",
  "key20": "2JAFbbvBJJcsLLfgZNA1qLjXZgdJypkpG91jyUXCz5N1qB8GP1Li9ZfJTBECWg43jJkiXADCz4nPvYmMdkfvMJS2",
  "key21": "3GPiGggAaZxbVcZw8zq2u91MSczUNStCaXFTnWnqWhxourmkyH11qtAudbB45Ew8o7PxQG16eDinJiU4G3DPuBNa",
  "key22": "2jutBdgRj3PY5reW6nXFWsGZnhgbqCwEFpEjXiJS8HKsap7ZxDmr6Z3U5KkmHeqErrcc7yd36oNkXQjGdg3KxStk",
  "key23": "7grxZJP7W9tZEhALFKm1nEWCxSEv1rPHrgXwqkaD4KGP4ZMTRfyKxynVfGAfXJwrY98SNm8piQzSzfe5SS3b6sd",
  "key24": "bNuQNKHopvcvH2QuVTxctnb4nwqHh2ertgekayUA7JHxKn56Y2EnAAg5FygqYx1kbmEj6qQwfRWEChq9kKww3S7",
  "key25": "3BEvTTQEtZ984przJzTD1Uqm17JSF8HwMzdvSmEUyjncUZUD7rC1XUk7ozUzD6JmWuP1hTBhcn853T4XA1oEmCTG",
  "key26": "57ae69fQEaHczZYYcbAG14KQbZf5Z6WpVkUUXy1hMdg4U7G4y38PfUa8EA48pHjcUdVfcd7DW6Jb4RPRqsNUK537",
  "key27": "3iQNtLGgCzBAj8794C2dUv9EzJkAfqmW3cG5bJejpLD8f9mKQ7yDWcVAExmCnanxByCPDvSzEGgAEAELzCnPnNdT",
  "key28": "58K5wP4M5kWjUhKiRxCXGZ3L1BtWbC5A7JNwj1nxM4jAcEHaBVV1Y1P6X6zq49gXt9Um6mgBJAKKpUeSjXycZi5C",
  "key29": "3zipmcSgAega5BMjHJZbiJcdyvsZrqcBpAUYMUaVw12rEhaSW2apcy3sRpmGwkxWEehtt1CM8yku1XFfvgn7pqC6",
  "key30": "3dLo68YUs84DzemPvdSWKZWdutC9wdkLTXhM2FCJoVTdMtYUkmysLm4ucpUMU1r91DYCniu9ee5jnnbBc3HsJQLj",
  "key31": "2bDzrRMZd1JWkaUAYfaucFWnCAYBg1guPbeFwjTdRD51igQE4AmLtazYcsBEzBje4ESMLuV6i53A51PnVF5m4MgD",
  "key32": "4F1SeoGhHCqeDPLCaHa6ms5rFmUaTtRb4nbhEUndrtLjUuU1HFf15oSfTcnXNG7sbYs4B7jVyW6BX6PV2g8Wbkra",
  "key33": "4Vp2oCnR4TVtHjf5ZkSeFEGTH9JyprZWex3EnuQJzHSKHWsiFpAG4qTTJWWknk9rwz43muaJsNA3hZjMMUNTVJa8",
  "key34": "5ofpHft3bw6fa1cKfWSj538jNA2GWdL4ZqNb13hweJ9KJvdUJKTk8mbPz46ZrGaqNQLF83SckyxScEdFZephUcBE",
  "key35": "4L8ckLUmNHVkzuNptnyVNgD2joCxzEbx6FSYu6xPEHDyZyr1s13HUdvscjBJBP635iM3TvMqEYLyooKYsvLYwwqH"
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
