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
    "2VqoZeoeA8w4KaYiFqWAHMEJhnnqnmqTjwLXZqvPWRM2QzSvfvQHsnuJCr3iPqUKF2wodcgqC3EjRY6jVMnQ5nHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62sfxmkjc7e2oRPDAbVSaANyTjjiPCAqVb2NyLPRM55xcxLPpCo1ysoAzvzsYrkoZFyL1aERtXRtRXThpkSsKzdZ",
  "key1": "32woLyN3HanStKzQcyFBegD85ftjsU8uD4fY8Vtz5eVxiDvsdEhptE1Z478zAwFyJ1LbVtuhDLZ3pAwydWj2MbDs",
  "key2": "31Fh4rkPiEncmT1kLJoQcjKA7dmwG4F3JV1TFrvExJdQqQ9Sym5rRhpBefVPeJHFetgGNTiU4vVU4juRepvFXh4h",
  "key3": "Zyn223dg1KNPWwT2eGrX2wVB5PFUfQzrmgvpRQVVeXjhY435MZ6oCcuPCQLXPqrWyPTmRzQNxnwwYr2cBzFnuxP",
  "key4": "4GPNLrJs4sP3FMXb95RZ8MFiPxKTqJMNu4UG5WPWP8Fcx1RvJeyB73MdfJdhquAu3AL48Rq818PkLrvRQbZa5S9a",
  "key5": "67kmUZRhmz6Qzg4Q84QSrqc8mugq6CcGbdx276eqbUaP8XShVLgPcWFNmcPqs56uUzNzAz4Q2USrTmLZ5gLzZabY",
  "key6": "61sd38eE9uFiaKwtVsXaw7MUKYTdPpxVLarMGXoufGe5awCoMuxtJEnkk2oozVSbRg1LMaBYoAxdqGvjwrjxmv7j",
  "key7": "5RQHrz8hv9x2EufxY6tTZsJdLrCSKD1QTv7HyKntJBE1C3XD1SuxuXaHo71FqrdLmUn1EK2CY3MhNyh3Gsvz4GnT",
  "key8": "2DEbVXuqEB7r3WxwGG65gRomZZwByrnepmGw4cP5HdfFm2KQDNhoJk3CjNXidLWqCMJ793vBaRqMTJPJ6Aqkq6zn",
  "key9": "65YZ722BZFJyVj2UpG9y3bJpkLov83doib91p6C4sEm3DoFMfyNgT3VsSaaumfdBZX5Us8Rhj1nK8TaCUGWjB6AC",
  "key10": "rmLjv643nVRTzTZoZveVtaQAeBpw24B14poiYHWvmXcTwUa8K1sgo8qziBv9hq9HCjny5S3sNU5PwsrZQxVXbkY",
  "key11": "4EJVP5wXxQ14gxJokST5uDyg4p7bq2vgRWkG8CGYmqChsVuvcaiZTvAtBTSnEc5ShPF482tcZJkWm31mc4ux3Hkm",
  "key12": "45ufws61vQKc5TkLu5cXHu9nbXexVTCFD5ycUUeUCX5japUkxmV7XZRXgjQP8DSyGCpfrrkf8qd61xwcBHZox9Jm",
  "key13": "SsGyQ4VEYyadJr6V2J6J6pML8rtXGoHiGdpKfXy8AuKov4uXpbGRztQjkdPyQyKKw15RMi8sYiLxTT7XfmrVMBT",
  "key14": "2KkGkekRYZc8afEzB4BTkGYaNEuaaxRJ4d8ig3VA3VNbr2mhJz42Gs7bxzmv4tcVESsv55gfLtBWRwHvzd4FipYx",
  "key15": "4AQSbnSvyo5D7h6dzM7rEHUr2imjDYwdwo1fJrQzsMbWUcYN7qydn11HUCWqCBCNWH9homFgsHroRvd15NY4X4XR",
  "key16": "46SFB3N7GRPDB9mZD4htkv1uWz5tstrc12XZz3GzdfHpoqedmJuSMFmX7RxVNxWxyCZGdGRTX7RZQkUcG8Dsbh4m",
  "key17": "5n6VJdGNHvred1z6Uba7NGfeVvWzF2ryR9NipA2Payisaxu2Q5JLmMGprvKJtkt1Qc7kUMgXgxNstwgxv87mafHf",
  "key18": "2r76JPRUYgsG3rgR69Hvs6nWjvrD38dExUnPazaMwfnzY1Fb9dFaJxFCh61Jae45uYnfDrhGYNHhaJgMFNqeBb8t",
  "key19": "41BRKcDG2nYswJV9CnNMSYEJicVJmQHxoG6NSrBk6UbUF3BVVx9Zgt4uu9QDxmtGvFuEBj4wAwJ7tTvi78YbZdr3",
  "key20": "2YcP7SouZK7cAsvQtz4K1ujr15HP6JiRnXg4LZiwtevsiEXKB7VEVdnnkojnMGSW7goAhuUqhxfGZfrbV8zAsSjk",
  "key21": "4eYCvVhuDMf2cyKLtVT7Afsm88nHHE7BzJur2TQZqS8RNuaoFxtXxEeWrkiiJ2JhkwT7wHdrjybxWhfv4hPWmyPJ",
  "key22": "51FS65q1XadnHkiGYN7zK59kuFAXdxYbDyJSaFAboQTbUcxtBeaj5FgKMeh7jK5vVeZSuu5BvLWZCEEgAHzdbJZ1",
  "key23": "3KVmZekR9m6mQXC16KiCEq1pjLBmZz6kLKRsMVspUfAVB8XS5E3psz3dwZboVvMcuZyFvYGK9aMGQvkxfYhWCQVC",
  "key24": "2KLbf2jc9YrCbYqsnSgiha1BKzHHYeNjfGAch1emwqNASGHqVRYxXAJCWNZMM1LNaw2BxCAZd7NY6GoLJunsLt3i",
  "key25": "5yNsMQf2yLQUMtDqULdDTrEkqUBxHTsi5Tdrx6fhF28xqHgeRv7fpkmACi2AH2NPmv1CUYQzcahyNb4YMAC9KhgG",
  "key26": "CdJB29tZ3dPPhLBjRoLiiVRbRWYVf2DEvJtebnsdqyY59s2hBE2813Mtzkb9z1jzpudpVxTCMfqLvNKNQxus43h"
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
