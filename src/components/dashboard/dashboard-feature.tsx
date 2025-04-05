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
    "3vXPZBQbf5vXpaKjcjkovstnsqqmdxJxeqfropmtJvMFLRxjAh4vCDeybKehkSh6xWoba2sRJfzyZLHWRbLfsoW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65XtwE3pZpPoRvhMXJ3W6nbvsZLp12tav4nFbBofhpEd2DHa9W4NKBUdVi1UXxEFp8uKVM4zrVd6GtufD6yeKg4F",
  "key1": "2x9CEWbhTw7uxS7SZZkoAk4nR92xSpxZeMHQbfUfcHFiHfumVmceC7ATa7MnbxQf33k2GiSJCCoQWHyS9aJoa9kP",
  "key2": "62Cb349E2BoC1DhsU9tYWcCU9Wecbvz4U1HcD1m8m3eMNSKmBiU3Xa2mdsTw1eiT9Dh1iaB2pnb7Ssjbf5XgTaXU",
  "key3": "4ftKkT3SuhEPV8CgPe3YkD4HT5gAzHMV6rCndx4onbv8Me2PtprRvtEk6M8CRoYBF6hmfcedfPKTM5pzhwhiznZD",
  "key4": "3RkuEUUAv1HNA3QjPBQSJURw85RoLPUY7cnhRcuDi1NmSBuJWPuV94DT3ZUkusDBLvM6RMAbboGT6VmWSH5d9jv8",
  "key5": "37wimAsuwM8iTVgLdxDu4mwUiDnaMKWmxXpZnXvarbSt6z5CDpVXWEujhThpdVeQ1qwneF2vFNVMoMUKwib19hwg",
  "key6": "43dSbACatZWAU9c5mqpQZvFZSYsStvC5F1eyfqzCFQ718QS48oiHdXvyVHhQdQVgzgD3xnxnqu67HeeMNv9ssUNZ",
  "key7": "sogVqP9nZqtfMTPTx6jgGp2cVCVqXRmtAvn2cg3rF6oyhi45eN6dcjQEi2FXEx41URHEuk3m2LocEHsKCKcGhEq",
  "key8": "4q1HKQU1SS8GhoM7UH84FTBPo3MRBPyQXySMELxS4HYC89c1ZVKHFJWCC7Y7wesUWQyDRwWUV8BZBZfBW1Mw4oL",
  "key9": "3R5ZnNEHsPB72xDoCGkw7SPTnnueyf5SSsvWQKbVhDz1pcSDvrBQTqjs7w4zoiFBHRvRJtKyDqYAzLzFgxz15Xzw",
  "key10": "3fatzUtkbujfzmkq6YgBr91t4pJw7GpWB3LYtBuY9KZzj2mrF8kHNXQZgY3bxJPUXiXfjhP71s99Mm8YwSM61sqZ",
  "key11": "3582bCYZ6ZxeNx6b8jLW7ath7DbfhygKi4GWcwdaYcTAUpnk64gfuHvuh4sc1fueqVz8wSB9NDscEAtcvGik1gTC",
  "key12": "FdJTB6XEPNcY2ca6YX1CTTZgDgT2vwKDuSKxCZRr1RqREAu2Thxq54mRVf6nQDXgRPPrDmmopmqPFhvhncxBSBs",
  "key13": "2SizHqRAnS2qcYFkN4E9JqaosYYDbN8Ky6nwXQynk15ZpCBxP9ruTzARwgeT64NbBdD6Cr3sDkR3xyZ66JZRgcTU",
  "key14": "VqBHvjjX7rD8bUSCKKaMSM3Jairm7kuoBWm8iTA9aWjYtaxHxfuRm4NoBrkax6z5zG8bzRjM6akhQDYC9aFN6BD",
  "key15": "DAqPGWQoTVd26PZuruMro25vhQqbLa9WkXC8FUoPYDvJVH6marMMZzG7PBE81hVM4oNT6pPMJXYg8drCuQETrGi",
  "key16": "REDKyPBDdNE7F9hgdji1j6gs2whZwAdVfEmFJoF7FrsSYQjjKSNH1Wp7VfQUyLh8z4kgLTt6XncxB5JuJgDAejR",
  "key17": "NxvScykY2PQRRSuFaPvN1ewZm6ZvJygNTwF718EkAGZ2HfV9x4HUWLzUJWe9emkZ8EykpeGLuAXzZ2og6fEgCvX",
  "key18": "63KA97co7CmYnpQYUZM87mHNZ71ZLaidb8YxEKmvgiDX8zs4GKvcdHfjkhNcSqdgvj7UBtymjmzzQXxXur7h2A9B",
  "key19": "45rYDzdtHvYgPYm6MUTfePvCsM4vaeUaVP3ZqQ69tPxK9VuYUP2Y7ae2dpr6Xjm1Bb4ZFJzKC2pi9RmkA2bg1rxE",
  "key20": "2WQYd7fiUpjTdywheVnvHD9i4ZN8yp1r5Sf8XeAeD1AMcrAEek6G94Ejbk5nijDZ9hgVY6g8vyMg251gBJ12BhaH",
  "key21": "3hnFbbALkk9C1TitfAhHENLE5ro999d8G4JQNZgpdbVTcSNK8m8c6R97W8iik1541xW5bSewGjxjkVkF88w66q7w",
  "key22": "4vAikiDaSS9QahiAtT8nXxNi8xSBzfWeaQL1GnB98JRh3GiBpVp5Dc1mjBf4NrXNzsSKMZ3vYdtu24xY6gkjVpiG",
  "key23": "3xz6xeMMT9D6LCsLAnrwJ55y1LbtuPTsoaRzUWvDgWWhQUL7E1esyYB8RirKZcEFu8sYE395i3sC2YtqrJVV8YqT",
  "key24": "33bUwZXToG9r4rhxuH47y2QdHYBPaCawSaj6NVzqPoGnWvXNKXzswRDYh1PHpWh47SrXktSgAA7h8jZNYF3BXzLX",
  "key25": "3tnFS69eocmQPjfPhfkHPKgZnTiAZt8rKBpoVr2EWbauLz7qAYXYUZHVUnNqUJnxHkFNQ1s8BpoF1iaS6vAQfxVp",
  "key26": "3X2xRAuCDXCHntyjXEqUvxfsKxhF6iU68mwFTJJC3oMeQF76ycTRuuRXneVVXGWA3ArKXJbdGWWysbJmybvawvJN",
  "key27": "3r7W2crzJCjmXYzrzURBsjzAwAkRA2Ry6oB6vtGSNugUXg12YxEU5a3UyoiiQcajjdESBAiTVeAibSRmRH5avMKK",
  "key28": "4ze7hcmAvbrpb5vFiR9sETcCmGVHzfMm4NxGAmK5XcSVnPSZzhgj6CgC6P4dT6iGbgmNGAWm7oi2EAyGS17EJ691",
  "key29": "JQpXMtzS4ErCmEhHPeiFMDjAJjcToN2szCZYCMCjcQNTg6eByGVLkQ7c7PYSJPZGAioXnaftfTfDS3vcdLmxc8Q",
  "key30": "3TPRexkN3eNx5jzXzHVpC6ZCRxhigwhCQbNSs9Scsj1NhU411CBFVvzBYYmQvjVvVpjTp2U6YgqhK9mmNXja4PEW",
  "key31": "GC4Z2yr9E83N7sH52CosTgaeNqCSDNTEYbuBqfNPUFtZwReRXas7EYqQRorjvtPAjDeRVEFT5EgUEGjUxC6Y9JR",
  "key32": "2MLAhUpRR7oLSxeAWckbJ9Y3gYavWpuoh9ZVk5tXzoFdMWBRCsY7Lh4oCYcbwgQ2CmFMTZGZPUQDPSVPsFsj82Yq",
  "key33": "3QeDsSbcqm8WvyCSu5j1GwQQSke1oTvjvqpGMUGTUNBwwUjNAPr2UUFy4d7y72ow9JB826MAi7fwk5XquFRny2hG",
  "key34": "3S8SC2ePmX67M2ZJjAx4FNy9k1So9x1E8D17nDkgsVvdiBmayi2wmVVeGF7W5N8SwKt8auExAjAHinRrT8M8dxCj",
  "key35": "4k67TE1Uj63x4py1jSYmL4C2D3aBgsbCLdytqtVPQwaGYRFtzvULSwbrK1191EKDuLqTSDeHQQgCgQMFi1gWi94k",
  "key36": "x2LB31TUnYkQgNG7wtnUsgFTd2YaLWY1qvbKobhby58i16jMcwKVkAeiBtHprTyge4rdS7hatnzcSSzHVK1ak1u",
  "key37": "34CirJTZrr84mvtUdod7c7NvP4cE5tg3aG4udwgPb9cf261zSFN7TMsidcWeSkZ4DdPKtqFpwtEmqTZAdDzFf43s",
  "key38": "4pLCavxZEmCEhM4aQEMDH4oATF8FnTsbhrWpc7rPTjrZEqMWgw7TvgGVLfBzgLZcfqKxHeiP3oRWDnVYN6pR5SSh",
  "key39": "5kVArKiscecVPzVZpuwdrnK4S55LGxyx5iZquqAFAaHKJES857XwW9b7r3bhh2w48dC3kt9SREyifYJUkWsJX7Ws",
  "key40": "3sDAUCrLupByktxUhrcRhxiAVPdA2CrkDkBjjJvpr5koruxo6KgvrDqwToxkswe5BRKNgp5BsTBd3Vn4rqsYsJSC",
  "key41": "nQ3rCxW9CBtSJn8s1uNNSaxdTUxDTupVkzSfVanDGynURjtJMLjeqDJrpQXfCqUjmTHezyxaxbyxNfFFUf43Vuc"
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
