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
    "5UKaHvwwfJXpEgX339JyUPpURrSFHbhupaq3JdDTjx6gM6DDioEZ6goaQexYkHXhbuYmbtE9gESnEtgo69WiC8RB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z3pGCf4fmCt5i5Liw99aLWuJjkC5FPNKbMpZcYaUPCxansoBELRQs14anMdnC3yH6wXWtt1F7MtAhT7CUbKJt1p",
  "key1": "3eAv7EJ8hiJDoJw3NqqaMy8SxipgsjDchodMaVAKnsTPcABshDv1y1oP6q3GveG2GdfR4B2SZcBQqnz7piUHcYkE",
  "key2": "YsChorChP1Tx5UrgZxG38NQb4ur5sujCK5VkrciCCUzQXZo9tam997STzh69Jxuzbx8QvVecTzh4AHfF5mZkUfu",
  "key3": "3qyDLwdCmnGP2QWrSDRvhprezcEZctktzNAoaGioxSjP5TcAbMDofyvXhvNpae7JF7eFHsabxzDLDe9bXKyfjjpn",
  "key4": "5x6rne6oE7JUk5YGmzrYJMycqAQU7jMBSk6SuSWSQUx5Pb8xbwaTPBLEiKmjN4j6v8DZ1HF3hy7EVFcHTHzkUiXQ",
  "key5": "2zkCxvb7sqhv2fpPc6wND2Pg76U4rvBQdkXzFDc2eaVBtyToqFdLAVsA6sS5xQkvzV1a2WDVZWN7AwjVdvst4bVf",
  "key6": "7hWpSUg3V6YbZ5EhPTYBLwzUZ2upk2CMEpknHQPgYLYCVyPXPCJssna1CD6aXN8zW8jEWzoE5aVAPggzCGMJy28",
  "key7": "5CcR37xG1bHFZMw7JwHoFhHPrtZhrL8oB7L7zUjAwag4JNo5UNeRDx3GWKXVqktEjpveN5fBgiTPChCm1zKVmaaj",
  "key8": "33uawSMEJZnJXoAtd1cx9fULr6nsKgwGekPJAra3WLFguWqS5AKxJaHmYWXbtoNPrEGKQ9Zu5X8fETAt8ZrvWkmX",
  "key9": "41FzjRFPrFtNJkiaXc5jHzHahiPysnb6LRBPH9Wa6E6FbFm7HvYg6fjgq8VS5f9t4wDzBBkHBj5SADYbbDjQ3Sx1",
  "key10": "fvenfVJ35DpHmhv8NGngwktNg7Vt4SBNj6MiNoBg92QN7Tbf9HQPzwV7bfPXtLRoLRN5kGXXSBXbAGrC1D3hJYB",
  "key11": "2yM3nQZLLY7wFaLUk2yKRYJESf4hPnDhxG2Z6dH7ZihMgMcShpEm6TFfFrFtjNX1Jwx3iw5bvRvqEHfrT54KRXYa",
  "key12": "Kc58PxAc6P1GYzAQqY1PLZDQs9dVBBZQ9rX3nwg7GgdFCeMJCdavyoGZEMM2NbUijh4L1iRvrgpve3CpM1FGKCR",
  "key13": "3GZA4Wr2LP5kicuv8dbBQUHGihWom3v1puuS4aNhJgW9hbSeV7bqLNtWwfxqctyR7tSehmvwdUfGmtFwnupSge4q",
  "key14": "4XMtBLjJBBRTPTKmsd2RYThUPZ1a81icx9Eoiq2UBuLtnBTrWNr4ifL4GnnzmFHJjTE8D4TzkVzyT1bQfTAUnppP",
  "key15": "2pLZkABXrEpsxPApjBAnY9V2gAMjh3T1BYtW3qGxVYT1MQZ13ar8S5zNHVVMrWVNeHGEQc8GrMUohjfMa6vjbZNL",
  "key16": "21hLyayUJ2oW4o2gS8xFUJu7gNkajnGzu8MLMsA7TkNY5nB65UK9j8eAFfamQfD27hioXpy7TMPuMeRe2imNafy5",
  "key17": "5S1K6dmryWTnuq5arKtAest4x9Ny2vZVbuktYRknSRAkioRiX519MK4bzoMhhRS8PrXv7Qe1CS6puiAf4tMgJhtP",
  "key18": "zJZRJY6ewPn1ePjndzemdZo8vfn7Uj1s7E98oCc64hdMpAHBdyJf5nE6x4E5YV56CWQuqW5Wv8stWgLj9qn7vKy",
  "key19": "3sDNenDjoLwoN3ziNebP1bFrmWC1qpwP5KUxCEzXxBYV4KVF4PJCRKyumvrB99UjCTJKF4H4MUAhdpcKPBvhuSQX",
  "key20": "3hA3NQ2jYNJuXnzjFoC25khU3Sd5WSQQLjJS3MNrDWcBFMSKH1NhkPshFjVAESYP7XLf5Vnm975ehnSCkYQARNCT",
  "key21": "2k67SrHLQWHQgjp14jZp3oy3sh1D2qS9a8efqRbzvyB3m3m3xT9A1BamRLAjNFv4LbAiRuTdx7P8mnKUWRNcjt49",
  "key22": "5KftYqSS86WP1PUV2Q2qZ4TrJCTg3GAqXiYyKNyoPbh6bAujVj7igNNwV7CdqVBK9p1DFwsSNKUYZsrRm4onq6iX",
  "key23": "3fYbBh9z22j4fnm2SntMj51wAwe7gJ374QmafdP5Xy6FFkbAkfKdhpVScGFru7vqsfYE5277ToMcE21pLHEpHPdE",
  "key24": "4iHMZCe2rZdFXNmtSVaV6aJbyWoPCGxYta4FXG7frG6zr5EEfTzxYEdRXZqXbzzGaKr4EWCivcGjuYoMD6DPDRx",
  "key25": "ocTejEAXs9XczgHfLXFHFKPqkvkg3pzZBJMUW6ZoRLzRjQr3zWRVRxggxW3ZQBLCrHEuJ3KScK5wJoTB5AmAcnX",
  "key26": "2nWjTbEi5pUDUHNF9kwuNv8vPwANYFNMFsXjKGe7PHZiQbh6BmK1YuBze84aGuqXF4E9SWx1P12vc513ekgYFnwX",
  "key27": "4UhNzSwBMQS9ncTNRoUfo7TYMJvDZTNoKQAygBJU8RChN3yLrsE9AdH1BsuC3QhhDFZ7GgMgV4JkzoeVumePEzsi",
  "key28": "2e5dPQeWAwtcimKm1CkYpPg5tkcRAQXiGUfBDxWFWSkzqCtqdyaZazD9ZBfEQF5wyLghsRXsCYwKPJ6CW8gDW9EP",
  "key29": "4BC1Z1C7awFuP6Bi7PWiZ9VeHdxBzCrY1AxXn7NkFcq3Xs34aXWeYb44HxetVEJ8ifDwQvh1VB6nVdR3Rjz9AnxE",
  "key30": "wERB6nrFGMzv3KrX6U5qqtF8dNuRFkDE7Ejnj9Ai2yWgASPJQ3236xBobYnvyeVgAriE5Xu173haF8ziWQQd9Xo",
  "key31": "5ZcGn2XmcLbwXV82H4w9X4WMgspmGTZq794GvmU1UCsHgm5ex5TzYcxuBsuQFDgnzEVKQaAegHE3ruZYwkTBBFpD",
  "key32": "49cDmSUqzPynYeCqpzeB8k1UMHJSKoJbV5wfVSHYMq2NdhDw3ZHccuBVTbiKXsDpzZ8LHu5fqQTTKDR4m2GJAa74",
  "key33": "5Qa1NMBRLqykSsVKuzMwXMcxnzAT2PtAbHefaYcVLdHL9dZSissuEtjcWRKm1WgqzGJKZNrzK2GGLgDCdV3CWq7J",
  "key34": "4iwvhkcBydsVcF5To1BFrfnK2aTTULPEDLgkkTMExU9hFrcsoumuxA79FzUgeXxxyGSabUvXGUZCvfBukErtCUtG",
  "key35": "2pzo4Ma5VFAukGdvYMz9GB18Q8XPTnR5ByMxoFyUFQCeZhkVUoqv4CQhCHfEvxeYu8UiZEiHJk1nuUVwMwn6u4pa",
  "key36": "2EGXKUnxHRhAiamPkdKfZamXtoVLQGL3nBXbpe1KYp8zDkzbjkumTg5ym7Gzs2B2gcCaeNNjXhgtDmgnoSL3sheV",
  "key37": "2Eo1izCxABe9LuBKBJUipDp6gUg6FcLwNZHQMrFcnwi1kBWR8hekFoRCEysTAXFmb8Cxd7MNMtw1zN5x5HpLp7L2"
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
