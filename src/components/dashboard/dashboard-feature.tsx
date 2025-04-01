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
    "4uRwZNCLCvHr4oadTceGjbRF6ffGsFMz2DxTs3xVKMkct6ePhVF8BgNwbtPkh6GfU8wKee63puxpbSomvfxsoeuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vFeMNThX9ApkxUqtJhV2GXRkXL6avaYnjWG2d1tmmFboTg6BUuMrGBbXKwafBUiHUiz2M4Ry6V3nMcrqbpPHUQN",
  "key1": "JNWg7KBocjTMT6Su8gKZ48hjmH89AfgNpTgvMrdtAbkWCnmVLhTTpr1YTzc33h8D3nRE4nPKnURB2Mg4cDT9Qwb",
  "key2": "4T1xHD2wYc3T36gU3VcDHrq7UQbAu5rbSu5khVgNSqJJDEdJTzMXR6CdJZpXq2d2jrXSLKXDPKjJ3Hiw1C76UYV1",
  "key3": "3VSfmSkLJS9HJnm3j71asARgWgR4qsqsXFuLUedTZw4FPeVAboe7LhMZZYwffomgafW3nT4U4zkN7xqidaTKzMva",
  "key4": "4yckLyCxce9qkmVcpGrF4f2hkEcbrsPFrU4vBCBDqYkgcxSrGikK8k5Apa3jnjVuru1EZzNx77yT5uuZaibD1oGz",
  "key5": "GKLiMWeMPJJDUkn1JKCEbLNpFKvcs6aQi7cLTiEqhtcLdH8dG6CsNnnt42GzywwQrrH96Jq6ViwJ6mVgBN4iK43",
  "key6": "2mWANqKDvbFL4LoEvzMoAuuwNy8tUyk8fT8xeeu9yAJ8bpVBMGQtkUXAXmsU3bW9MwFaeSRNGAmNs8ezsVukZCzV",
  "key7": "2hCdbtYHB52228RZZRKN9xU1kwnpX3SoYCttSNzFWNPLXSnmG3NWkSw1Lc1ziaJcTs69WAZLfeEhnxMn6DN9KcG7",
  "key8": "5EU3Z2xHoJeRQ3AvygNPQ3E58A3cQLc7AMA5UyYbAQSwgYRUWRdDrxmnrkhVr9wgPctxZvtH7zQHiByevij1apJw",
  "key9": "2DnYjpZZ4Q2geubF52FbZNBFt2Hv6hzPZ53R2y8iqPcLcGbQfBww6oJun1xEdXJ5V6AMgnKfUg3j89oHV33FmEYC",
  "key10": "5h512i59c43N4DMfhp9c65esnqbEqWVMzDGSY1yUxuGAswgDs4TfQRJux1fdA5QuUnen8B6EfSWyUmuCwyNCfkvK",
  "key11": "2rvS5XWqJWgVwEqdBsTGviQ8u7gHYXc3Je6TaMZt5foLtUFsst3CYgNNykGJDRWvaEbPbG9EbNSH8zFTejD45a4r",
  "key12": "4w5ctdAqAfzkC1Utm8Wb4DD5wdHKvzfWym88Qx65uMAYsiYogCdSKtcyfQgM58nvM52ioy4w1giZeEQdwmDGFZvz",
  "key13": "39EEYquAVwMuoirKjdmGSJoheZnQsQ1HPRycupfsty26mCmAuaF1UYL1Y3NJpT2A6XW5Xcpbtmnukh9jEnfagMnz",
  "key14": "3atvj6JNxNjqyLEDm7FP1bVi9qnyK9hSUTCGSUij7VhxJH3pTiUshV2KKrhMfyhTnaBi18tFdj7uCp5KeYbBUKDk",
  "key15": "27Ky4SYimGQoFFpVxzJatZ7n2gDTPcUED4692vfURbzG5CjfxXng6pf1ShoQN9r5LRJ6tH2AzD8jWMu3UpjzGfmE",
  "key16": "2xuQZXER8ycEc2S47Hs3gyQ4W5VtbZKLpTcC3xcXcFndsYKEq12zak7awMS79kB4WUCpcTRD7HGuwu5ssKhShyxR",
  "key17": "aRaWWssmHR48zZrBeM1SA5mk1ZH2o15dtkFVYXXwiF7xQFVj3ZioR3CwsTB1a7rhVCTTrNihAW6TtE2hJmSZaoX",
  "key18": "rc7GE3amVmQJ1xgMLLsjbTLfuzYfEhG1bDRNtxthJeFh8j4jr4bPGhPZD9N8nnZ5dVwmLNVN7zvP5Xgc91bPExt",
  "key19": "4h6vVoP5dxhP528EuazRR7SjLeL3UgwAdU6bM8nZwczmAv2yAPYicHhVdasJYyZjfeFJmbVXB4uJJgaTD9cAdRti",
  "key20": "3qyyqT4Ae6XCXRT9F9npskFyfU38xmPfxQFxYeHBcUWniLb5h4RaZohevwhth2XHEmSNpGhwcf854q2kD4oW4nSY",
  "key21": "bFBA4irXFX4CMry7cfJqRkBUygPgtZzSZAijzbCgrYRAVc6T2vcsFB29FCYorShg7goLnsYiyXw6uWWxoELY2ki",
  "key22": "2WnnZV59vsFyycapzobycfXNX6JKU6EprFu8vJaFXS5kX4NK8xAdw3tHAgs3T5EMYC3xjgxheFC6qXrda2JEivmX",
  "key23": "3k7puuY22rCNgPv5BJYqQtVrosYD2mgGYZvVHk6Y9uAvB1axcKp4nzShNKTcsEW36M2vF8Xe83mGPehVdpvtkJek",
  "key24": "2VZa9gRU1hpLKE6tFvhZNKTn3iR5JVZJNsYhkQCuCAKEKo42A5uYYLUBjVhB6BXfGCzGjPwCfGiFsFjzP3tPysxo",
  "key25": "54DkivnFkY5PfRneSN9kjz6g29MZZEq2gVT8N6Xj2TQWNMFxeYLBGv8rGwHKbzy4HCCf3Ga2TWMJA1fCaMYedWLT",
  "key26": "4MEfRr4TCBuLxEsjkMxmMkUrSukobwaRuxevCYvxcENRJdLkoPYyJDv1nAkL3Vnn5PF1YJRzx8Vrq2wAyoM1vDLL",
  "key27": "5EQkN3zHgHuAvvKY7w2LBDtZ3zeYwonEVyG8197cgGF9cTkSayxD7jjV8jip3tHmYMjkoNTdmnyeMAfDTS1VqvtW",
  "key28": "4tWsSQuGV4srVT6jhaL8S3haSyTvo2JtBXqwWohWm46QKTzRkSethp4CdZhJod23bgTvevjeHFG9gL4UoeGGvJFP",
  "key29": "3rWkhzpki6zg6H3p2fhdy8EcuwsFUyvwY7AHtmD8HUu4YR2xYYqjXbysZpphv6BGeUXbqNGFSb8MaAYYeVArj4kT",
  "key30": "2UjBg4KNJmfZKxrfcyu3bA68mqorEMMwDukcZWienNkz9gXUDY42Lpo7xhCpkXLXH6p1KDKHnHv1BfRat6rPVABa",
  "key31": "5HcPjfBpbxwPrUU7GbHZXp5KZtYDRg4Hf4gZFoyM15NqieXJiJ3W9LtxXSsaKgRE4maswFfWz41FZF1FFy5o5SFD",
  "key32": "TCgVsqSecS5tYDDGa4C19VYvBjcFTGTpV94g6197aR5956MR95WCSDfWjTsQTzmqqfdvtcyr2hymcR3yBQn7TLB",
  "key33": "4Q5ziJJNF7Eu1FEcc4vuJQfU1zFeLGabzgS4xpsHpmzHtjUJGhWZnbsKgw3fLQvXhMujw1YreafTxTbCEjyttVQ8",
  "key34": "4UbgSELRCZ478qhs4DB9wY15YbjdvF9JKWpAy1TgifLb1YauZYMR7s9oU8nZn5EQbWThcYnNmGtoYiG1sp6GUGg",
  "key35": "5MC484JZA3Tjxi6cNZr9FjaKYXRY2NR955rkk9XKD9ZEyh9aurXPaK6m647xWZ1HT8UXwwDgh4fZtoEE7AS4hyaU",
  "key36": "uAsqgnZ85v6QUzem9xGvkF7XeaiRBif7wo11GyMmanpXHsYBrB2HaeC33JNYxxypi7acWjk8NdYmkkPDH2An6MD",
  "key37": "5vfdNAWTCMTPXjD7FNRxz8GKTYaUaWVK5NRU14gcS2NsWnjq8vNE3tZcdJBqNYJgeFdruPhweCCpq5HMBRgCDzMM",
  "key38": "5YBS229PGamuXEPW5UQ75yMZJequkSShNZpGzjK87DTZkGzgEyV74p5Guy2arDjzXxK4zRJMvN1MJkWV1wC9qFmY",
  "key39": "2zyWCd57Gz8A7Y2AJYL16qWKvxPX9aCT6KHJh4QN13URYyzNHNGJ8WYg6PPGTLcwksHUvZaS9EWCmuCdKv4rrjo5",
  "key40": "5ger8bxGYhAkoaQx7ZdPyLEG4JJAm4QxwnbGvLKjyDQy9eQuJrKkjMYHU47XJ5dBCFR1SsYGxZgjAK8ytci2zFbs",
  "key41": "2dnQifdDbURGHKHCMB5QeNw5K48h52dQt55Jc6XRt8h2TDryvgiWXK7KvLdRdyxEaetCGWnqUYoCLtxdkDTuYgKk",
  "key42": "XoEXc3zHKtcVx46DjEH3JtLiPSWFyAWWAD1oKDaTBTPu5wUruGzHBp1PAQDyav7rGmqedzbxKTUi89Apvqec4SQ",
  "key43": "Khsu6MbsCFWk53ke3A93iSMkARGZnghjsb13ARf6CSNTodwp9axrXC2zNCQcQMif9oCmUTLZJuZr6amUUU1uB6Q",
  "key44": "5W8B35gFUVHVTkQp3PkHQ564QunjANeMq4huPv4P34ncdK72Ay3Ec6bixEMP1MWJ5qSw7vQZjpM6Mw1k3J2TzVyw",
  "key45": "3KbGUh4xygvqe6mxfA4vC8wUFEJmZK1SzAW39c1gFvw2pr8um9UjiGvf8nJQJGTHNYmoZkUszo1wNv3jhbVvuANH",
  "key46": "23pCY3tsm967haVWyZcU5xdeXvx4RqrDjc7CfZEhN6rwbuv5oHqLJHQMzRDJqGvwj7RddMuHZPzg36rYLSgEvdDv"
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
