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
    "4kWcbxrBemJSzXf2guWUu7VJCTAdPXRhb7GWpFMDfXP8iGJ3pFkUTboqhrX2c9Rw46zFjsukaXiUikpNEMsc2SWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vCZ3brw7qPTFPWEjBYqbMgjXMKvwyXQWN32RWQGfG4CiMBkDGpo4AsdakgZ7ATSSuLxYGExLs28WSzHiLGLGn3f",
  "key1": "Hx8nuxfgZiobktK54XvKjH7u3DV8p29Ftzz7gAPTe9wbXMcisaS1TC5ZJWq9Px4NbM5XEyraoj23uYkLifMSFy4",
  "key2": "5PUrNjaE8YkfmT4c6uirSomACiQaTKqF8eo8thi2HvxjBzAemS6mnz1awWvAnmGJTiuHHJh9eq1P1m4ne1qtGwn",
  "key3": "51MRKYfVbMAWBL6hVmetfLwUv3ua3w4uuMqUxsEK3Pop4Tyt6EMnHHpik44YXry5VmWNL2SKaJaaQepHgBqBf5tB",
  "key4": "22MS7gNQc1DtiNeTknpFVWoFAxHoeLHf4upM5ckRb7oKk2wcaNCsH541WoKXZUNszvfAeJZjUFEDoBM264Two2s1",
  "key5": "dUfLU6jH2KLUzkbrT5FuPX9HQGSbfxZJa6VSwAcFrLLuTCJuFuhCxzHpD19dr992kwt3oP2E7vK5aDWwdAAYkRR",
  "key6": "5aox6JznAWwWwmGJA4rib6s5EsTR9Jm6Xy97HSy5exYjY72wivfNvBuCCEZjLvdtgs9BGBo1sBBY9mQiuDsL1dUe",
  "key7": "3dq6hpaPozJN7FQw2gynAM8AhwBLoD1HgKUyVUkmeXvHv68tEfupVTbAhtZpjSyohdWX6TXoQbQKGEg8gomVvCGW",
  "key8": "58ex3csvCNycHkC8rEfYfkzXcTpqvGkBkifoLCUwzMo6puW84j7Vgz2w2HfVnZLFY98iK1BBtrdwrLTSdrzBFQpB",
  "key9": "5UwDQs9ERCMJ1YNRKTvQ6BTA54bJpH2JcbPV3zQqpCr5MPvYTQD9u1MecsuR6Sda3ugPFNc88ayNf65tCEiNhgqh",
  "key10": "3ayYGGCgQyGWpHc32tQrK4b16Zkmt25QCqqEYGsHRK182qZxN3UpVtE9zcH5jsZ25dQMsUSdYcHd5Jrf8b9Qy5tz",
  "key11": "25vorhpp51BNqVtQX4P71aqhWmnZwogNVPV8DSnb8B72UEU6cAhJsbCScvMFwZGJXNgvHnF4hbE8hwz82CXyWLX8",
  "key12": "C3XRWNgdgy9RTe888igiw6SWo2Kfzx6dxwzkHsHZHBKFyzZFifoPSKTjMymAbc9uJBexQkfFEgGgt93WnzaLHjk",
  "key13": "bBH4S9pprKAbijoHtBNv8XjauViHo4ph9fTU5JoNXjSoZhmNvQamXMveYLBsiv24c4dJofD8QdVsJC4unVwCTWa",
  "key14": "4MEqX57PFbWJgxnt8SLQZCuLEzAEh5JtSWwibwka73jrYey5AoFRPmMfVK319NfMH6biqc3bu8us4p8RDSHncCVs",
  "key15": "3RnKv9Pt3qh3kRihjK16mkc7WySGmRhiEcZkZJ3Kvr3cwGCqTXnhvwX72KDoJ1kBCVeLHf4J2s53ApR8F6LRKMEM",
  "key16": "4Zf3rkLUBzjqKaihjiTk1cHArQHSxGt9BFWzEi4iHiWo2nse3B5wkzRBJVowmE5nXn8RjTPudAceZS7nX6xQ5HFN",
  "key17": "2k9TUrpj97mjXdh2GTHaGBrwsSRXEWy4CRBcGrfDpTJBxgi7JYRzWY5vRcdiqFXH9sbig5QYSjT2KEsruAoUDqDq",
  "key18": "3ic1uMuZPpLj7iJBxct8dfhnMobBjL2pz9kcsJdbpaRQmWypD5pZvW87LAV4mcohqaZ57AzKvoQTQLduzckbo8QB",
  "key19": "4QKvF2n2tXJUpsZjbTcWyALWuSSC49efLdw6REcDSz79vCyXMVNsZ9rYuksGCjJprUgJCpaPZ4eWAYCBFxEdHyon",
  "key20": "Bo6tYAVHPEFefhR6cKHYN46kKbv25imd7WXoJvDviVhiHWY89LCcGLSPRJ64EegLXh3CsdsQnTcWpdUQPF3SZuX",
  "key21": "2Xem4Qc5iC26pxHHEVfU8sWvVfvA8brS9ENK9qy3TzVsa1XCsgvdodqh5dzMyCrgWPgHuKwVzBgo3PwUvdji1f3U",
  "key22": "4k22QDwhyTDRBwN1PrYciAqddQC9LEeiQ3CArpKHjHdLTs44gSJDjA5SBc7y3RcmEyD4etYqc4TbGBRecV9gKEJe",
  "key23": "4CRcMBB4U6qx3PMrAR5gXMZigoacpyu93wQXCt4RiCuYbdpiQsRSanNWrAQnno5D4HA7Ut3sFuXUB4KnQKBeHzQS",
  "key24": "2BpN7jJxeiHLdpRbwJKL5VdxMbvYph2ncvDzPrufK8TpUoyLE2RDfzGMeKkFijVEVVie1hJ3rGWpj4q2S4uUXgRx",
  "key25": "2zRoFVSrVh94ndjvocP9pRV3JSMV8Af28b4wCs7zNUPg6ASZTpi14NsG1yQv1f6zfHv1utq7yV364RSpFb2SADCB",
  "key26": "2foSRGfMstCszS6UHaJMizG8UyvYVok2ro3g558kKxdCLjsrD1Mu7QJoZZCW31j9N1AFjNAdcN7BasnxCqHFxQQG",
  "key27": "4DffTvdtwkP96pAi7A2Hcsd5JSFdw8x48tEkHGeZTRkFeKabi8HGvbdnbayPnWfYGJdnLz95mKzFzQhGsGukmL5e",
  "key28": "k9ryffRCbMVtEbwg7cYKkfvnbxVpHyTFHum9A6dUvHeioMSMjgE1RQ5NAmT6gZm8jpD2PQe1r41fkHgCYWiTmmc",
  "key29": "5WoW7r6BQfsQsY8dxLLKyQZTYgMCCnCMz2KhSbXZLuFPt9Zt29cycg63tqEri64ACoxfgd1tfnK85XmmXqc1t9F7",
  "key30": "3of8accX4BxYbvgFwrQ3wqqqBYNknKjpWPukS7WjtyQWLeq4qgUrTMAwgjJopCpHpbjZAfPht5E7EkpKfUEoYUKL",
  "key31": "2tvbgp6wFou3ikuqt1taQdyKWZ5Ch91eHCJXn3q5hnctYJu6o92HC4E2FmRewwGc6461huUPDFzoGitNDyVXFEce",
  "key32": "fYbC4eSS2qwZmKPBUowTJwXiRM4gm56w9EqdojkwDVBMyQVcFERpK9UCM4qCtiveBpcU2den1VF2HBw9TMHRN5X",
  "key33": "9VsHz8QXGKGEXibiyHon2uy8xboQtxzGdjVbTAGMYBKmSx83gxVneeHAYuvu7itJvaq3MH3p1j4SGJgiRLWhRTP",
  "key34": "4aktkyQpz9pXPh1ciZsSTXfiSZKZxHgDxSZAGNXQ9TCXhjBUj1WZWewDpdaZuGSeLBKk4JS5GufMZUnn7YUvBE65",
  "key35": "5w8LjMUcQBRL8KJFGtu1Pcz5MLWzLbxWtEp8ZNoymY2TBss65cDG6ws7sGdvyHt8CWSay2kHZp6Vzoyoo7hMYMN3",
  "key36": "5s6bP9DZxxhyjcUTptzbpn6aJnt62PZyw9LDCvYz2GNef6ZcfQpr6C8eEbo8uZdkhj7dsZqp2brWurosmBsBx3P3",
  "key37": "4JVw5RgmgftDikWY3kDYRTn8juKpP5HLcfCfkT6AJB1F2UDsM9zWKChuhLESC95bT3NJiDBaybiNu8zZ7Q1wnpvP",
  "key38": "4EU53ehx3HVQF2eBSn5L1ogSmxBy2SV9BpBWAemdaPp8mW3f1u8zBqwsFvT2dzigcbi4Hin9oJUs15QEmEdve2sn",
  "key39": "2xcXRiJZrqWMfTCJ7vuCRmytrFvaizzJHNGmUwTcpuVPWxwUnhskpF4yminfa5XyMSEgn3pLWfRVhzCoe14FHXQa",
  "key40": "3dL9zkgUDVxqV1a5tvCaXmgBBHAvVufAFv38Uqm2svbGMQwpfF7vDCKFaqQMk5WMaYrxpVcnAyz5VrPFpvx9UgMu",
  "key41": "39Y9s3CGdFssaS1vhAT8mvY667eEUoL6CETit3TyXXp4zrENPc7Wt32oA7VDFZuXWFsFXNrjRwipXjmo3ZYWFMwp",
  "key42": "5igTweH9VUGfkfmE25Fowo7LhSjwVqmNvZRsYdHwtvZxUYq1JCBy3QSMpzJKRVmfCdbL7SkfjnCV2oo75A5Fgrif",
  "key43": "JdgKqwYENmJJn35Fm1sD2rjN4g8TT1vgMnFzisTtRZfRUZrnWwn8AjfQCTqgWNMWp69RJKwgnXMk5wp1a8JdBFE",
  "key44": "4ukrpuqekPe8nanuwFi39bypyEZjXqKQSwb6gpj3R8126qvyb1MnsvFequTooef6UgmPQi1pR8rxsPauN9fu9DYp"
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
