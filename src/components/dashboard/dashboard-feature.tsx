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
    "2VzSrubNZbyDD4nt9GPhjGSmYH6VMsKHJbgqbP7qtftYk6tNsnu5mmGDkezice1wqxNowBXHcYBjoMW9sZiV8D2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59G4xnCCzpAxFymfSQx5kp5QPSyPHSfBWgsEPj2cG7oaSgTN5n56S8VJjvQYkTAGjNij92SmfzJ2TckmWhKgSYkG",
  "key1": "mjEww9PHXH7dFcfzStxTmA4sSTLRRGsHixVuU5Lj227iFQixBFPjQr5Z6qKpnWJLBgDB6JGWByy29U3vgVwvaPL",
  "key2": "3miYbMpxXg2Dxbbce7EvsStMGKFmY1UNhebvXzKdJsRf59HyLWgcyfUe2au44msx2QvgXvxgUftsTRzDZaHkbUXX",
  "key3": "5GkzEtuKdHPi5mgQcZs5S6kvvd5YxkqQnaAVTUcpW11sjXWxwofjJgQhjzo1sw24RZHsGf86UP6PD9xu9uY9u1WV",
  "key4": "4cz4sievHrvX1qW3NYBZz4GTp534gB13G5J9Wcdf9panq7nhqkgdLG132ZBGFQith54VQcj3eyAGaq6YVoui3Q37",
  "key5": "4QAvvKvoFQGASwkEy4xTgZ9o2hjtf7X2omMNVyyFZbzY9xVijkrEnU5wQCfR6wVmLW4gtiRS6EkJK4YGE3Mkoy5P",
  "key6": "3bGsb3gc3oQsmjRB6N8zq9wuFNmihFb3pukSW5H4fWoxrcZR85hQv4HxjMoCRLKuNqvTb2KmUtAZYnJL3hHjvB2N",
  "key7": "iaSyPwaFhp8dqaS4TV1osLrCGuiPYkMmAD4EdqmtgFoLXjvVPWTMhck9EHSC7a8akJUSA1xMq2gDhFnvYwY2UMp",
  "key8": "5GC1UaREDZBpVKMyJVjq2r6yLTq6hv9tfzRpd9KgcnWYZp5mZ8ca6jpmge5nAeewFUM1So9UTpE9oRHghdsLFFAm",
  "key9": "3qP6NhQKFdfFVe8WjS321tcTsqiGkkhhyYKChw2daLZxrebCdTsaqPfMj19W6n2LmacFFozobHZJAk5hFDgEkZMy",
  "key10": "32uXecG6Z4kLsDw3afyUsbZNyf1KX2mzuUY8xGiq1F3A9QK54TDedBx5ddFNqRzm7qHp9KsN6LmjN1YM7oH9zYXX",
  "key11": "2ueiQ6B2JutqDH6NpaHPpozwHz9sMGzjp8G3DRqaRj5t1dozf2vQrWwFa4KPuX1oCtoMzRcLCYbeSETL7X8PYPqM",
  "key12": "KWwtBgW77vCYdgvLZS6gFbbED6wTDng3coU7iV7abgd2LZgcqecaSCoA7rA5fzufFiKmNcUkapfBiJCPvCUioki",
  "key13": "2YsLYE9ZZbSAejYbf5DmHzTceKVgW3oVDdZwYmavvWkcM4XcWKtbjLUe6NBnz2n7QogAZgWXAtnndLAPAwMZTtPV",
  "key14": "WYxLnxQ6nv2TcQD3h93BgrKcu6ZCGoqC8rpvqcy68gfkmYaPwtbS1XGryVGcgHUoAnk18qFdw5SAeZEAhTBLR68",
  "key15": "na9uhiQrptWUVcbRj9WaBCSDfA5gWpkDYGh37XkxZdYckww2WeLhHeLX3fhKTy2URKYWuVXhXPodYi5xZLxXmue",
  "key16": "S6J9tVdMFiwqwZTbKcX4gGd3gMDTYkuNGPbvMGnRGKJ2CCM8Ye7JhJX8nm7oBTk4KLq68mPhn22d3gaXdTGhFmk",
  "key17": "3fZFEGruZSvYSFn6TvYvoYk9NHJcKwKwPVxD5NxF2xKaB3zQTLZkY2gXce1526SYK9uzn85SmiLPcTse3SynwNez",
  "key18": "yYB4ZsZAFHieqcWQzTxLFDTC3puFCvrLgCvfvkRjcbuFh6ZK9rQ6MhyPVbJByT4uctsxHgJDDXxsg9pYTZcxkQZ",
  "key19": "UGvX7gPLixRXduftLjfu8BjQHjDixFatKNSvsXcndWnTCQhxVt4gNSMU2LCE9q1nY8uDCM9p7S9BNNoQV5daK77",
  "key20": "2VSfiwBN9tKLXW2AyF7yNsVeeJYX2YqSDtWQDDvW4RAYMXe994L7PBsmdBrBCiexjf1niNJ6BC98588mAH9x3h73",
  "key21": "4zrCK68rm23K5cVyrqViLUmPir7dztfgZizwXscvomPxWbWaDketdS97VUGAt9dGDki3yqHX3HXZDQCD7ACkCrFf",
  "key22": "46rjegHpD5jssdUAt3wnPLxwt2VVHv7wvhSfSjHj3LML5aifmZVK8nrPqAxCU6WjUSxKFbz6U1WFRHerzoVkXVne",
  "key23": "24nsrnmF3qkp5ZgZEB9Ng1TFqUF2c1CiuDJ68Gi2CSLzAoykdBCTsg5rAtmwhdFah9oLJmNpqKLaq8gPq1ffXHvT",
  "key24": "4ptZgNkhtBePP1kMnhvHFw9SM5xVKBUfxCGno8eq6s4gQWVPNhDpB3kZyGLvegkLDLK9Fv2pi5Y7GqRSmmYANytw",
  "key25": "2WNBrMckoWdDgSSScNBCNZhpN6qFwmUH3HiR2uwRJM5TqnkRPVhcSHPdd5wzzDbjNEs7LJfSaFTHbS5cVQjgsP7y"
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
