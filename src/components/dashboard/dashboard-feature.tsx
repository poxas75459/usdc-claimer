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
    "3gNHftnD7GpcE1uuzBNehKYfRQfykbMNyFoxT77NfU41gRq6RdRudEXaRW4dc8dY8FScCpLcYN7F1kKsbFnxDkYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wNsGxwimFvBmuqAzd6zc9zCMWyRxPA5LSF5u9Qt4F96y4N74xsBg19DE8D73UqQ8SHuqRmcBZP7MJXmrn1MZfe7",
  "key1": "3FBjHUswJeWLQvyoMisFCaNtmXPNXkhpAjPnFr5ccfuxPjkZqbZfN7Lf1W1SR6QDXhXFnRAtKwQV7Hvg8TpwZnxj",
  "key2": "3Gj9bACrBEzkJcAZAPrm3R6GdVN4HKkU4krfu1tutrRwgpj4sKcipJRccrKRNat1CMquod5gZKbgCKdUL47FN6sT",
  "key3": "3z67ZCWJd7TMiLzgeAYMtaLsFmuKwYKLADjyxNytqN5M3wVALcJxcgjkk9HtPfiyt15gLqa9S2iup4QuQg8u1vXP",
  "key4": "5syQsbVNgafEqNqqkG5hpDfgDS7mGkjuGJy1kVG23smG6hsgXuvh385hHZ3HE3GaXAJrwo8EiPSKtbqsQTDkLqyk",
  "key5": "3S9tkMJF7GvC6joQ2X7dkHadoBJWMwGwZNkkiU8WLzEMGDNPUTJQCktt95ibLFnvHqrhqxLDLhdJNPyEExkf1ZcB",
  "key6": "4Q5qNyQnDZzQJVxw9sAa9erV9qFsWXwnhBwf7kWr1vDCAYtnusoboyCmvcfc4FcHVxczqhvaGouUx9HMbHaBacbS",
  "key7": "ZhCZUeoTGYgrZAeWEXUy5CcBmcCKykZtEbt5qh81Zk9Bs9jhGyKity6LW5LoryScDdj2awSVnYHou6HZ24Xwww6",
  "key8": "3Nk9Hoqdn8QJBMs88G3y6EWfSENas8ZFmYpkt9U8XDFdYgjJAa3qwwSdqmhxTHLJa5mvohrhZRNzrWZFNsGfrPxT",
  "key9": "KnUQWvQLvsCsN3RrYkTLnZEubhapFYXCheU2YNZ5vibbVqYJ98Rs5o1zfCddWmUzwG97ZqK6ga6t5Y23irsUgVV",
  "key10": "4ar2S8YnpS4bNFYFK7Ea7wer8nEZgRhhdWzjBAY2L29z53ZDmRB9eMZN2kkN4tkHYCwPatXgsArmxeqhzrUa7Lgd",
  "key11": "3j46xcydaBgYhVEZnzVy8mBmoFn1QncmS7cJXvYjkvvwee2R5GTmoBm2qAoAuaB7y8gCkP4si1LQ2g7oszQFone5",
  "key12": "263UY7dZxQgJ3a5pDSFFwSz9jFQ5c9jWVAngjCsVbozMuY6fEZkPEY7Zx2L1LeXVPoFk3Qe4njazYMgG4bKxKJvk",
  "key13": "uyTW4SAPLjeqXAebjdRZ722SYukimPUFGFu5UGtc7YNcJnNdDfFQ522ujcZuVQPahPiCz3SEG1Gvu1m1R9HL1qH",
  "key14": "4DbxZketaZkfx9DWaM2oK58rhW16AJxJAmQihzfXaPKqVKG5DuKPR44t6B2hzZQeiYXn8bdt3ikEiTzbJMjbnN8r",
  "key15": "534B3J2Cjcrm3B8R3jYA7jr4v2rcL45tUF9nGFtkxMYKaUUEEYLe4vPrapJ5UNDhr9jVbjXETQrA8gdgErdysNTL",
  "key16": "65G6ReTLFHpJn26hoHJhwSpJZKqBwepESXBnRuSG3ibPtjvHbV8h7YwXpUE7SUY8MsdV91LSrAobXhd6Ehr7PFPQ",
  "key17": "2DapBx6Nrc9ADycVhEUwSPW9Udr3eJimGc1vie9hfm4V6g3Q7apdeobRRHgypbez3bZXZUxdkJEfV23xLtsoxc4Z",
  "key18": "4cynuJqdzMUraAoLqLWh8orM4YyYQSGC5Z8zoEMXBsBcy25VfrcgNU9EMMXYSJXAZh2i5oDrJ2snJoiDtQLAhFHm",
  "key19": "2gnZJEf3bEe3LbD2yUcr17bo6U6K4a9qFY1bqtmbrojQBfVZRUkNSSi9ojx4j5S5oFcEdyH6FPtcutij3ErNFJDs",
  "key20": "3ZepXVLqnEoppa2xdP9ZtUTCmzMJVaYassP4J1juM5XQHzHWUGfvnPLhxA3eSezqQHR82SoinRjaYfKMPLqKyyt3",
  "key21": "34nrTFhZffx6nRXmUW8e3fddcNiZRHaaeu3C2EqXkRMiY13jxaii2x7qv9jMQ66t9bqt1adJraJL1JYjyKir3WeZ",
  "key22": "32TVDKRm2MwSa8BAsEhqHc26cD5KbJVucVbWv6eHfDVZRqCqq14K6EGgb8geV4tfvJmes22ps764KJ6dB9DsnvY6",
  "key23": "2yBvnzLXJaA6YnfnxZRPi7tbAb4rm8KV58VQaQ9kqC5XmazQUixAzCJMJ8RCkEU6tKb8CP7qywgamPekpsqXtJHo",
  "key24": "nNv4JPNfZfjsscPJFfyksn19bhxdXvx9cszHRnXhzdXCV6ewaMR7ZMjzFwwTq1771SvRZBRpFXCoMm1ygG5vbmU",
  "key25": "4H3xxDKS4zTV4qbHP288Wqw16C5qbW74fTDtr6G49Z9nZoyQurpVj9rkjp37vsUD6Tcz5aFZu5FfBxQaJjApm2Ez",
  "key26": "3XjoAdnAvN9c5hV72i7sHVkMGuCYRoMb8Mchdxn5k3fbxUgC5cJVv8bLS2eqBkzbWWRz5sp8jstyFSv9aBfXYzPR",
  "key27": "2NjnZLeu9Qhb14K6pC2Xcp3WMYZvG639DwiWKma3Zfb75xcdHDtP9JZqCngq1G179v8BqHrzq5xrDtwNUrnk5J1f",
  "key28": "2AcKiWdWJkx7BuYVeTLA7ruU5rz3zJfut35yVcJPEGH9Ksw1uZ3XNXf61EiYZkDvTHhbTzQNGpU5SzmZytUcaXwz",
  "key29": "5D7SH5rmKVUpogvSnNatYpYzujqcazkGvaY4Fy5gy4J2uvtncZju738u2hhJYJuHBVmfcTqtTPMPXSVSisG9mrvZ",
  "key30": "2qYgqkJtBvJDgMo7jRrSb6fxNpwa9yuUfeetA9SbyAff4arWEGnagHQeH6fWpTRTZKvaJEJuV1m9qvWZgtnfD1NP",
  "key31": "4EBtMB5gwnbH7oA4HvoYuq31nyGs8kjX1DK33kAhoUR6GRA6QQPzQpZR4BtrMwgyc3KkkzPdvDcgEwGZsBZk5ikP",
  "key32": "2qKSuF3V8afDHwz15caRuaU4ztHKrbjEDQQDH5LUF3Tt4gLhfN2RhNW4FVGFpTmFWuZe45o7V1GTDQjToo16VSj",
  "key33": "3aJX1fRCecKx5mBKhBabs2a1WeiKeC4tkT2nG4qELrPj5DejufyNshahRViDLrjGmNXuYwjmBjLTDtezh9e28cKW",
  "key34": "5vELqEprDssnPVoLnTA7ViiLj5QmEBivSbbsggq4M7eeBmJBwuDY9j31atgWQhChkMpipSXDaH3D1mam2nEjLggQ",
  "key35": "4qUreCVUH7kDa7rmh832rNYtq1saJ3XaXx1WZpSDAcpeMTJoXteme4hUMvd4TeTsWU5822x2ReYyQ4UHZzwKnMja"
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
