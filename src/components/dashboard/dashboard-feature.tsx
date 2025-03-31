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
    "5LfW8CtRFNbwE6Nyu6c1rjcLyxt9AYtRNw6NmjyqyRrgdyeEppmB1wfqxQmRxjrU2Qk2y1jqsFSdJ9SUteHaGZ8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KCxNQPTvYEbKESmZPWcQQxz17p56aHDmcUdGzGNBk8wEwjYbAhq2D6GK8VFA24EoeSbPEXGieq6tqq41vTrLYFE",
  "key1": "jqK8oH9DRQQJUAe1mHFaXnR5ry2UMSZZAGR3NpQ9MVQS4KfZcusqimZN8MUPpq6EyC2CgVzr4Y8R2AF3r1Z8ar8",
  "key2": "5wXBG9Qm9xp7sN3FYinWTExexWpFEZVXXMeHwxzN44aaH4fAPhsjdTLaFTF7YcsYjHeMCjVpVk314jabrpdgc8YJ",
  "key3": "ouhx9UDArgz4GTzj6SyzAxCgcbvDLTmcAHm1BiVwUZzBsekhxAHF2cVyq5gNyTyWVfjvPtV7weK8PWi5bGvHTUG",
  "key4": "4ar4H9Da7heA1s8YQEf2M93Hx3Mz89LiJ6wfYByyYDqauJWXztLAZHgBfJhb8mcz8FM8pqrjwCry7jH5Nk5qYrrF",
  "key5": "3sRVatX8jHuxA45fSgtE9s9DWR5cfyLBFAvrqkqxVf7Xta8NmfnvdstfPt7uaXi5r3x7Q65FCFJ35fAGUQB3q44K",
  "key6": "2mxP4k56WaCveSmRisqo9WjQ3cSbCutJAThtcfrcKwjheSj6nTpPh1voAuYtCDdudfMkfdBHvzKKHNotkgLKicgZ",
  "key7": "Fv1ubhdPApmz6yASgNhxUQzz8bDzdHLus3Pw74DL792YRyM236EFJhfNpcByKAQpLvBReXha2udicYiATUNho3V",
  "key8": "2SFj3ay7BccXGYrhAw2ZWMtudv7HnLdkjT2pCXKmduL4Z7XP2ubWUa29Vx7nYk92jao3hYVN3A1dReuCbTDpeCJr",
  "key9": "3yHrEQWzPvjDDYgXHYCeYmHFk2UES7iCrbbCaHwa1VVXMkxEnmh6gY4vv71G4wTnmLE3vRcakAfh6F1ZcLx9rBmn",
  "key10": "25QR3rZZ9su3VgYt4H6dfLXyqjMEXn5chBKuJLXcEtMMsRCndfWjfyG9WJecPo3unxoUL2iTJq87sSCZ8Q29BFMk",
  "key11": "3mwAfSAmaytauczkN7wu55eneSEFxqRgBxtEGeJh597zoqeGXGqE17R5e57AW2i7BXkGZ89ofYa8NoYPRK14Z22r",
  "key12": "54bgus48c5Wskv2dQvzce6ncofTbZER54vYo7F5McFc3wK3VZ6q61jhydYHTLfkXikZ76nUZLCbypFzS9S6JTupj",
  "key13": "UVV3YoXoKZsi2vAB4ReTUdeVxcYsiQgwfkS2egLHsdWdCXygjDMu7ujZjtYgcZ5PZ3khEpakxEdE2EDQYDh4LoV",
  "key14": "4UoEo47tBEZdMd5h8GRDHYyNiGYyqie6JHbdNutVEbidTtKDkRBGj6V1jVQ6hY4NRZ2aYWbe78E9owU7fgyxG7Zt",
  "key15": "455N3Mp6xqM3eb38FHVu37ETrG7hNWBrcMqXkHLdsAsaxs1ZKnrAQqQFnyh4tmp4TNgAiwuxieTvb8NgwA5hMnG1",
  "key16": "48Fup9TmZFeoY3g7LP1f4Gd2Rop23jHhRDMMrJ9uC69AnNEoYkeiQx9SBiHxdmc4nePDvWUuWCLVk9Sqdd4w7M3W",
  "key17": "eYL1kanguQ9R3uWWidCCeWMdw8NyZp735uhfDSJBkN7jGBQHXP8fgdNruoYHwv71TPPB3PieVtNZ3Ec8tujRhh5",
  "key18": "demqKzYPrP78dvJw9rjJs3VBbxmNKX289hACNtq3LU5ejxBuFp2y43F7c1ZXi9YNJpVJKWzE51cimkvXBgvXQNY",
  "key19": "5FiymuJWso8EL9cY5KLTLcA895yfCydf3ZpJw7kKFF7V5RxFNqHVJdrv3DjzK7jP9axpczTwWcZjnVeLaACtx13W",
  "key20": "2fjzMmsKJT3ZPMzJhKuHSveEeVDCPEJetuMVv6pWzE7T6mk5wrgoxRVJif2HAc2o7QqVg3W6THiAKnraWef9u4Ra",
  "key21": "3q2W28tAJ3YUdUPnJpLaiCdJqZLvkqB7dHpVJN6Nw7RnU5GkGaC6wXRv4scCGJ2piipVfntX5oHzPZHxgvQ7zT4w",
  "key22": "4uQGQvqzgijBL5qeWyML83BxTYChY8jNemnt88LbyWuQpAMBxGnz6rH6ocgbS5VyqAnFn7PZ5yKKhRYMp5YpeTP3",
  "key23": "4du2Gbjq11j9oRzUnZkyW1x4Q6226hNHe9PU8Bw4aTYpPWNZnHEXYFBKnVSRAsJKQ7sdU8TGKYs5ubHxhqPcaHZA",
  "key24": "4g1iWMzzqA9eGqkaJrQD58kt8Wbg7gmuD3qXmSiAivBr3fuD2528z3r2n1uzo2reXkqxkARXx6hmFnpi6n2BtJFx",
  "key25": "2ZpsoRmsAXWKd9Cq28GSNB29Ag4rrU6L7p6KECUDED34oDyQvxpcoy6wJTsTsFxbvBgefm9KeLnD7ygtx5tdXPmB",
  "key26": "5zMaML1sVeKnLEZjdEkLtHdfZJ4QF1gdFdUJqjXuCfTPvqydueMZ5sxc9dCwL1FwVnbkY3HhxaWw5LFuPhQ2ZZhq",
  "key27": "5tZocpUfErhrkqvok62Udp5yywCgg1LZ9f5z7nZJKxmP6YLAJJjgVS1hEJpM658cwuat6tBda7uncVvipRPmqxHe"
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
