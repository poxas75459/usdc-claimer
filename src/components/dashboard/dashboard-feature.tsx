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
    "5ZbRjrbzB58dhvuZsKhkE7vZdaqCMZx8KMckYLSrvs4YDMAut74LGiAi4job4VhJUGS5NH5QCaXz5sTVourE2dN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "md8EjnpmX2oEo4hJSgcouWe25sjuyYb9MNNjvZxqfdENXT9qePhEZmcpCgqasnL5DAiAhNBJ3fSMvfDK35zMUrd",
  "key1": "GZ85uhfy9y49sxrzVv1aXeq4qHBjH6HTd7kmSpYqjjJZagAgjX54zkuY2nivsQNiFJr6PaUCtmXnGk4HDnE692N",
  "key2": "aHFfWbJXWJrKohnAR2uehgdvTD8A1FP3YAoJ7W7ArykUkSmDBKkcJZ9ZctBqKqko5MqywboCEaLaF5h93XyaWqF",
  "key3": "28YstQDExbBc8duyWcspAnNwFbRonyu44PdJgWrjWzXnq6c5pR5xKarDRcRhKf5oCdnbQXXX3XfCvFAfvqb9ibQo",
  "key4": "F3UQrvg1EuG8tmsktphGVGBPkBHTdSjKyAuVyYb9ygwWfFpX5M13bvZJmgaN4fpAPyZrLCpSAc4PEbEspAvZCY1",
  "key5": "2gYuch8ZTA246saCoQeVQse7nZBJ4c6ZT1yyY1h4eyvWFdk2cE7Sd1DYhGNdGBEb1AZ6519wJenQQnUwn1E8qwrP",
  "key6": "3zdun919x4iWQE8DMfFPqMyod3vGfnCDyCzSRndUTKVGXHBoonvbR1mu5KAn7ZCPLgsayQK2kiMcPbzqzzLgWBsB",
  "key7": "2Y2CQnG37y2U26qqqZmXB5w5iVsgCFNU5vEt25VuFtxvYzsACQWhsNz9p5QEiPUoXPHPnkjnonAaRABMnhu7zHcz",
  "key8": "5BgysZY9Vi3Cqjx8c45MbrxkGSta6VZ9qw2yzESaVUHpgM1P9u7Dghq4XSLk34LJS1gDy6sotWCfZmdwHwaDCng",
  "key9": "2sVssiEM835rjE6yWcznaQEWVbEayy5o7btJTEkCMwxyRG656aSnVChg5XA59pzDmytBcFTLwccvEb721Ma78VL",
  "key10": "67bcWeE8kdZhLzuRWoF4vXqTuj3e6o2XD36MvtReLFR5WavT2nU723U7rTkjExgyNUP4bQwpXU9pvCtiR8ErqEiH",
  "key11": "apZsHWDv7W8atTcBnPtVzKhKsKi3ma3pcCc5d9vJC3mGt5YvM2CqvPQ6RU4sR9id5QVEjiKSWCuwyehQgHiZfth",
  "key12": "3vXDcSoU3c7CmT16NPqm6bfBoGz5SxndTYPcCWHDhQCXob8E6H2BuaPTfUdXSJzwTPuzEqKQwE9HGWbp5SCsVEGw",
  "key13": "5mT5fqELhvBHaiuna9GWWRa5J9cJtsoUH3BDAfaRRaQCAqXCMc9eapqTD9CKMbz2c7KrgBSeAtp9p5hYB8VCeKbx",
  "key14": "3L3PT7S5mFozCNPmt1RhrxupQsxLD9AYKehQjQ4RxnY7zCuTU5cq3Lstxz1s59kWqjf4efE12gkMGJyf2CLbqwMz",
  "key15": "2RxbJb8fpQ27xvVvmCjKvazqtimZTfnueftNYk9sA4SVUJKWmmrfUhvzJiTiptSyT1EaRF98Vv71nnuQDnAEsbUk",
  "key16": "22L7qBnpbmfj4Hp9Jb8MH2HGb6jXKrXdu2zyC1doAgsjVZbxTE4PHKjKxp7CtvpKUHTzy9itq7spMD3bAyMzrLLY",
  "key17": "2yiVYNPGbUJaiu54sNCwhiuSquxFwado7U8YQjN62F5SqkggKLtYJRUxQYLDEesiuBSBfiTVhNJpvyS7FWFBDQtA",
  "key18": "2hrihkyCjMsxAxpNQ7Xp6hGRMsM8eN1p83UGQf54MzEjDf6vzVdUWJzqkCd334zzTstKmPyQX5nHPy1XqtKdifSK",
  "key19": "5f6T536jaF7b1oKwXTJfzmhfAJk7h9AtY6hNE6CWiQ1RxBNDfb6PCZE7coGJtk4gTdRME3kYUSGoyEc3vmZJ5Tv4",
  "key20": "4PUZRfAkQQj9MKH6fQgrhdLvfPsT1v43vXS6MeVbuMfv3TjGicg8wPsGCnDcdXD245QC4U19ovjSnWjBiVbepgmQ",
  "key21": "rj5wEzGGw2gdNSZKjTipPHFS4nTWRHREULG2n6gh8qKcXRYQexYU7q8e9XnSknGpAgrgKrH9WYtRmmiWyHxMsBA",
  "key22": "5heARc6mNF7xy31TUN28qct9NrwffQvQ4HCkGsycpYW3Avnwzx4JbKPA9KQGox12sYR7eHxKyn4hvWgRCnKARNFw",
  "key23": "3HntCEAVtPZPraxw6c6D9M29fBJ1F4iRQ2Tx9vgYps1KVLkdsCTjrgtcPLBvWkckr2tjXZsqNgN5iPkGNHXZSQEj",
  "key24": "RYu8gFZryEoGfyCHRfVAkV1GPMWTqqbWBVKXGLNkRZK9cRwHs5hhFa9zW51WtoVCFJ25EvQJDHTGQ8RYLagkqDB",
  "key25": "gnGZD8wfnCFVGcbxtbEqLK3U1WDiHtUYbBv2jofCHAeKfojfSA5eLvAYRjiqsu1XxrQdHBzxUUQbfa6zmWBrFyc",
  "key26": "3hGir2Yb63zpY5QEvXY9Mx3aN4631qgueTuSd25EQxLwcaBSCBQKFmbNhh2poGy7HKrNnD7gaDXbWUyFxCBYaL2L",
  "key27": "3vfBsqHsjJbgSx2x8SY7Uad2Vftu9uHLqxzPuZkj5MyiQAuwM7bwzagYUeVDKww4cBCFgyvhwfUv8TLeHpMtFgeq",
  "key28": "3xPr3BaAWEVBBszdRJbF6MY5eTN4x8trjZPLVMoSjHhR7YGRLciB7gqczANoUzRFdVevcWJynjD4gWn4wcy4RD4o",
  "key29": "3SzC692tKnoqSYKZVo8CRQGJumGZPAsMpUUTnzeg6GBjGTKWZGb8iAgHCtsASGh73cxKaFKf5GRrspVgDqWdxnqS",
  "key30": "fvMaXEeZgx5nM6BnN7t7F6w5Dr9BwRCZByGM2zGFoFAikrKmZynCfxWwskZUSy77YCcPZp4Y3HhUqchji7jH9Xe",
  "key31": "4vs8LSo2bXFqsxwodgNtdveYPav28rdgbGPNAUAtE1MJ1wQujB2vtN78v2tdB37mGqyvgZ6NVpKqe7DirAggQ32q",
  "key32": "5TuzjNVtVzkzpemBsudL4ppbjGf9zPxKbJuuNqmxH24q8v9DHsGmbtwteTVbdVFgnZiNECRoLVXirK4WrEjPzNpF",
  "key33": "AwbrYC1W9kKV7sHbtue2GvJjWCy6ZNHCMQGXAmdawaFHVKc43CMMVrsq5AMFbiBzXXHdkh4Q76f3L9wEcxYwvyJ",
  "key34": "jVhZR8RQoSQ15VwhaZaA3gS6p4nPn5uaq2yLqEaGjVP9ibfepX8tT7yj3u9Thp576Xj6rKHDA6hgGHJ7j6vVp4q",
  "key35": "4eqH342p57aDki5ZAafJX2ENHwhRF8BmHjvznUZdZ4BFxquqoo2K1L9Nw91fHZ5Un2XF7ArCkAAwWsuzM6Maz5wY",
  "key36": "3HvT2ZZtxxjBKaU7ZwLJQjMVX7NfdPn5q34ymXfe6ULJVXLn1TNGaGyi35b2bBkigqSwW75rRdetyom85DENLqQu",
  "key37": "5VGn9uMXS1XY29Ebrz9hS3ifVH2YjRYzT9WBd8ZAoQb1phdzebwVF3hHnfNK9bAfi9TSv6NB8DEgpEdTnbGx7mJ",
  "key38": "5gDncU7q3kh9VdPU6n57ZFXW4XArCxPJMPMGDbRRZc91GbtcT7PpSMQMmPMHRQ9Va841iZMUbtXdvo2ZDxFUCjSs",
  "key39": "2gS9ZtJcA2fHc4y6t1TCdZ9wPFU18oZfEuQgjRJJuq1rXn6kq3DsqCoPkx8q8ChAdzzrrS24oksjmqcxxZqrXEG9",
  "key40": "3cFX3ZdQiTJ1S4fs5LT2m59a2VY7m5LJknMA322YVuJsiFdBc9hSFnvi4royavnSHiWNQUcvpHAGuQXxa7ec5zfR",
  "key41": "3ZnnLDYdpfTgrHsLf7fbRAwMXuNVEwVYN5f68oer5gszD9NZVwDspAMZv7s7qZDXpjAMe25m5HMkXK6kG5cogJHV",
  "key42": "3x4nTqRoDfUKcXPaJo3Wp624WBZgbkrZyg4v1rkPBkYbeYDNV72guDPwYe5ZV9XFuqi4XH5o1jAPYWCQXpbFKgGU",
  "key43": "qvNhBkKcTFCj6gTQfMCKs7qmmCBTuvi29ERdaB4VXx6v7uWDdAiXpjvYhSf462BQ1Dj8d3VpzAUPmBetTVuwozC",
  "key44": "3iKoTCg5gSr1x6KjQfhHPyUknYb9ze1cqMmmB2rxUYFQVdoncvVM1MT4xGiGbwTNVgWu6PLMh1ECr6Uz4i3815a6",
  "key45": "2T7tdk9UxpbiiQ39teShXAennjdNrV69DoaoKaAuLYLvAEHLeCufh6fLKj1seG2tRwRbbWCaBJqC6oZz1tiPtVx6",
  "key46": "263tPZKN35egD4MFWFEZKFeb2wSmLfpCkxqMAFa4T1MGH6bv5JUpjJwhAkhyhMKR8snSMb33eUN9QSgwAbxRRfDm",
  "key47": "3DEqU9GQWmjCxtJpWT2TRezgatP5KZvkoHWJvEMMMmhmEqGVPCrsQ4xsccFWE4iRVus9uGPV273D7zjcobQRu26u",
  "key48": "3Pu2HSG3XkpvAssYetoCJGxvbrZvaHtAQQvetdcVJ4Humg3W3kwVkPYKBVMBAzo8xxpbno4XVPYhbP8Uc1uLTgou",
  "key49": "4nbZ88sf32cpGtDkHrpQ5i1e7JCJLnogsVBkMtoJQRjE3L4BNQ4WzyGKjXfKUHCW5kRnNAuPVyTMG4QiUUYeD4LH"
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
