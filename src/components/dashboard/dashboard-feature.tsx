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
    "4dZHditkkZUYbJnpSxK3ZuNQPgb9erseUGHUcfTJqr3UTc8WGW7E84aR9UAK6hhTfEw6KX4YfKGv8MELgC9t9P4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bt4HES8U3ncaZj5SQMKbTGc2MA5bttPPLYgRwD19iXeP3ycHWNzqNEc7rkybpc8zEL8qdEfCH37NK7fNTbkv2dJ",
  "key1": "5T25XiP6RhEszPykTcjUbCkVSXh84yLYeuLYCi561ueAzZ7pUXECxMRYihDeETfeJ12khujgetrzQjR2ZvamKkBA",
  "key2": "3AVe6P5Mw2PDrTogAFsaJDdQpv7Wkktyapik7nkPAAyEXzih2Gs3arktTMUMpFHS18rJNww5kJj6N4PM9uCNinWr",
  "key3": "5Fo6DusgDZTU9Q7TcqAPigY4UczCsptGzjH6QVaTwjZL4notPiEZYdAfBS54eDJezCcV2otpFrBhEwjfDAJnPtvj",
  "key4": "2KhWX4ijxpUJRx1eTQgW6bzrrSAq7Jd1e6sp7DUWEpDmF2LTYGK9itvheUUUKJzKwKw4fx42u478QHd2GLjt1NWd",
  "key5": "3TdHb75dSW9RfRwXzzX9onX4rQmC7wKsGhQgXpgpacoxhPmqiPek2jRBtdGwuEntsqxWV2gboCrbN9hPWDQeffQX",
  "key6": "64CtV5ZV1J3RHDjEC8ZKu7MiTiTg4ow1tqfufZ8s1bNDAtq7J4goerDHoKNkJPsugReZxr7YbS36EkMGB9p6wHRU",
  "key7": "3Yz21QEqbZrnxPoufYUdxyEjAVNFxrUFmRULiNpoW5YEszSjTTwhYTKanMhQFmbA64ZTxJ5WVuDzoYjKEtbFxstd",
  "key8": "35PbxYfimm77RLBg3WfA9bMMhHJCof6um1fC2y9enkyh3NEdX7c2dkQDhinjWBaiNzMjhKK8jz3iXrMt7hKoWF6p",
  "key9": "5S6mSdWdUgCHsxgA4P2e2M2KmFo8cRY9FFBHoUWpZYPDvgydwXoi4mkhm2KJq1T22ov22mNrjRqQUDx6CQr2jeBU",
  "key10": "61FahaofQBqULbDKYys9CFVKySwPEuxw3smb1CpkKhKfiVrre9cfEqB9pU479D2QGkhKQqAHtAoP7c8DoB7c6edm",
  "key11": "4aawqDTQRjNa3iyHadArU6W1N9vHDyG3TThywsnsECanHmj6ehT57XZhRToPEWN3R34Mc5hyrEV5ewN7Vmuq6k5r",
  "key12": "TyNJUC3ZscyezZmS3PQmozt8EgLWuoRz4kw2iCGfRHS7w1wP4bJStSK67aSGEUAQqAm7cEkMWVg3xDdtd8n7KJz",
  "key13": "4sA8JSS52H3WXSC4sbysaiZzgRMFcWPaXhKn33wY9Z5HM44Js7cuvnk7WuYdLKJQqsBisY2ugqWLBAnVfSeS7Hra",
  "key14": "2gdQRzV6NXjHoWhPmDVrgqfYU82imUrQr2wN9WLymuU6BeTAHVMtQMT1cu7BCeXSPYDu2FYuPTqgX8AQyG3vgprx",
  "key15": "8j95Hm9x1CjzKBs4d2iMBR1ueNHPEcQ8mBQDhGS6aLDawDwptJ435xH2NXhQXsG4gdkJ75Ra7HquMYswywhrFsr",
  "key16": "5zzJEXPnBuSGywRyvsRX77MH54Hq6eaAKVTsixaeDzAmo9W7QD1fMvkysH7kEydUuzb4rf9W6SCEa1xnxMNRhGhT",
  "key17": "4ERnGTXHHM8VxCW134EFjkknGC4GaBdmZWA45pHUUN4AfxwQoAbyWrToWqz87gGeprVWDwo3L4KyAfPb2gSmzGuZ",
  "key18": "59t4yD6mvnwrhM4sAZ5XCM7fQEu9gCcFa2MMptLwXH3bhu7taFukgSxYr8zdYGMDDZzRY7Jnovx11ed2YnDLUiJK",
  "key19": "Gvj7xFk7LdvmuREuZBVvjEC8VEzuPr3ADM4thho9JAqe7PHPxdYhpnh7osn67tsy6hRgzjHVyg6aZHtoSdndwtV",
  "key20": "371bE3cSWFnDHnNG953qp7SWVrMsq3F48S5CxJiY8A2d9iFwuUhztjWxwzJbACBFQPFpZn1gDuP8uaxnpsQx46RC",
  "key21": "2crvyvWLdRdr3yYZuJ9TBNTWXYjRiNAT4hpWyVuChqtGhAmWPC6phCEEC781JCjoMfnEsfzAKN3pH3HzCfFzNf5M",
  "key22": "2X4DN2aTFr1ZaWEdYoYsGwYUwMggYJi1Z18fRp5uhmL6XyTyK36jcMz35cd1bEdcEQ73Q4yn19hNZbFMTyZmx4LB",
  "key23": "4aypFGLzW8MpCPSqf5mq6HSfHy997YMekvdJAtps8i5rjcgd9PYzuuorBAt7hkzaWp5usf8QBnFDi6DdegYZpAh3",
  "key24": "4ACa763Yb1Vpi9qvnqt2WkeVaGvnXqtLLUeRMws5i5dEyHZTr6vQA899PxfBEg4CHfoJtGGGdYumVkJ73zCgXW98",
  "key25": "4qNwhseUfX7gopCSjLdhAmFo1Sr4tCMAUsrvCkb9EQ4MALxcLxhtaqZGSnZb6q21cNzvkCMMgYshSVf97uaxoyzy",
  "key26": "2KYMPJatL6rtyequdhz927HH6sd53h2G6w9gYeSn4tKufVyQUZxgHCCEsQBQLLBfji5qUeVm3Cg4xaREkKwU1eqf",
  "key27": "2FhbC2bAoeMdizSBnhX5ooDvRHm7VFpuhCiXsPih5JjQSyV5e9w9dC1CgA52b6fq9sEk9MV5YRrJojziqibkjk9b",
  "key28": "3kmBcKg5wRE4Q7x2YwSY7Lu8ZVwJdP9CrVuSM3ZPUiKYmtLQV2Yp1yoJsbg6CdBfB8fXrHoTkco7CKtoWsfDn1Tr",
  "key29": "4bgNuiW5W6gWbnVYfAr96e5DLi8z1cfQW4mmExMLyq1xm1pgWRzAdWnbWFWxDXrpz4A94NJKDh3Q8oeXxLFSCDkp",
  "key30": "55VXDnf3bY9yYvdqoy3cyZthCndz8FMJH9cymzqA15cdXgRUQrRKXrrrevjQN3TfcuA5B9ZPQe4TQgeVReKogoaE"
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
