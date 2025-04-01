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
    "4C6ZiNxeDhsDLqASp4wUkxGj4UhetgLXHnnrHtZJwgo7CgxcvBhjoFcergXDUnaTSRbjMEBjFMn4XVFu6vM2HAnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Co8j1SNHRs1YKxRZYLpPVnKerNBnbBUCtACnmm3n2L3aCx2MwtvTuw7BL9Bz3Byq2Gv7yjta8FygdiF2ve7AVkx",
  "key1": "3YTyPZyk9tCQsQsYsny7p2LwUipPdVSXio4dtDjTDsnaQeQYx3cPjyzuGfJoSAHAb5jPrT2dE4hWeNPNxfcGhMXd",
  "key2": "3KWnvhdMbtxeqZztMwvFjG55m2iP3iXKTxVk97wX6SHz15PtKAebrDs4JDJCJjghBie9312EF8DssgxBtpZuNG6V",
  "key3": "555y1Cou523QXea5RaYaQDbrmz86uhj3cB7m1SDMDQm4yKTefWSA3A6vky2rEtXXTG7F17Wc89Z6diCmaaUzZsrN",
  "key4": "37wmMpXbjzgzkkQbq8ai5Tf7njhNr4gPSB3ohLYUUJ5SiiXSMJTUMCWUSZD2DxzarBqFeEXTszH9RzYe2wKpbg3c",
  "key5": "4yi4cTg6uMyu3MqNPkDzhBdMDyjPDnTWE1ovYwmotifGT1HoMiTW1CzkaR1r8Sv1ep5uMthdhmYBxkHKta4qeCmw",
  "key6": "3raL3kEZC5xWPQYEKC41RggJrfTBFPMMfh44L8ruw4KoNSfq3RQvCJGF9WsdJJDPEVDMoWxqKJL8SDUZhsfcrhz2",
  "key7": "4qNKf5kzoRYSptMhktCn5vHDcyfwM461bhqMYd7Sb3S4gYJdW91iWSTN3uTwS4JydLbL2qLL94UN66W9FxWGEUnE",
  "key8": "5QxT3F1uQzBoEmP9oYENvSchfrHaJzkkossjCwbrtBY6H3Y1maiuh6wJEoMkqgLURu2k6nBBqgHXcofECr51KoBg",
  "key9": "4xAkLGNYiZ8HnkrqjrRdPhU8JJDkhB4LjjRYQA5JY3A3NTH8wSKUk91ymnQKL3Tasb2B8MbijAagi6oCG7KgBKQB",
  "key10": "4K33qnavcaz1uZevVDnR5ZcG57FJNWUaBRDtPADpoxjQRmY5x5p2MRcN9DYE4mCAKANDbp4ysH5Moxze26Ms3Mee",
  "key11": "4SW6GY59Ucrk4HhoC8WrJb7KEzYP9nWns8w6tAUsg4wVVRw3fXfaQHiRG2s2LokpUYvp8u516T2CegUvwHXVyhcD",
  "key12": "3PEepV6aDYSyp1hBZyHvn5Gf1LE7jtc5zNnWiZNLk2krno5HbT14hrYa2YjYQz87WT1ah8GPj1HaMwHVMaXQStPn",
  "key13": "jB3UZUpAbui2mKELhspT2bVcxWCDqHpoq61Hz8aLWHy5MzWNPcoDsCPXRQrbcHMQceEx5Zmbmzn9RnvccNi6vaS",
  "key14": "2BnhHZyE4vepCRJF4hhKm7xV8YLJ3gDU9Szg64RU5S2rwtnyUUytqgrC6nHhXhggepj5o7E2qh6yBUxpNhaDri6e",
  "key15": "2rJDniWiYMs94WWLHFThieKnAB7icnSoV4WnL4edodWuEzquWq38pDJs3nRpFEqssMz1aMh3LXRrDXtXbmoeYTpK",
  "key16": "5BMd5q2ERMPir68hBDXgkRTh1BP1iVWZCXdia7fZqxrKzoGiwRy1BTaxSJwmdwkMySfWqJfDPU1XweHYh7fokJmM",
  "key17": "PDtVWyAubt9hR4ULQYaWkUgPPkFB4nrWh2TRdvv6QtKvyDoRdKTpSf9tZ8ujJsJtyyY48rpVUksG5EhJMTZiMsZ",
  "key18": "qxv3XbRv66Mk8E3Mbdq2Zgbrcakdv26hHnXJ2p6No8m9Jex6URX98dinPkuQQD5wDu9J2S7XskEewd6sfxngnTU",
  "key19": "3bkLqwMnpAWDFPPn3hkeQNKExmoHocaPqm9qu3DyEtRQ3tZMtFsJuFJYAyaEUNGai85bqJkjW86hP9F13sDegTG8",
  "key20": "RZpn2hMzkuUB9D4qKGhPXv9bocjjeLNGhdhnKPRf28T8JVXuwU9PfUwqnoCc4wGo86qA5yEwSq49Wx8hMTuKguA",
  "key21": "3Zp7LXcXCrMdz18LbyYURK6MmosFG84SJmu5SmYKJdxfLgEi7aZePAu1rYzTsYSqVidVLqMKkaJfWz13wufkSGzs",
  "key22": "3eRkhj42qYQkajRzi2qRSnDAxrgaK6bjfbvLBMZM6gD4nZ6BZ91WxHkVyJYH8uJuQK6vu7PiaKLhfGt8tWE5Kyz7",
  "key23": "3Ez32PuXEJ886EAEiQyJowxr9JLYCSTfet6JvvoPR9Mzcb9eSUVqeJZWBUhhAQKdc4vFhE33LsANUmUhNEwqkKE",
  "key24": "5Sp27srcDn1faPwsV1wkUWyi4zhbwmDdbEJmvrsnvdDvgRTrjQFNU8PjKGGVaBtPPQxfCrnTi1QjavAaGoK2Ya9e",
  "key25": "3ueyfuczhtyBjgdqVY92CUpv4uX5nL62auAkb689ipvjfPyNYkeMb5nCw6b4tvyng1yAPPYKAM2Sb1vJ6U8mhNq8",
  "key26": "4cAhEJXQMvjMqGNVdJQWVdJnHrtTxjQyAEY2QdiRRXvZrat2BzwDnJiUb7SrCGfKzJMwX7TvN9ogrgBU5B8V8yZ",
  "key27": "2z6YVxUWgLT8TKkm14tCF5XfFmQhsAAUbc3yWKergRYUbWn9NpJaaUAh7esKFVGD9kaw9jzYsJMjbGMyGyq7gRz1",
  "key28": "gVU2zSZuGbsatQStDw8GqqHe6wPcjDp2cJymrQFGH9FPkyRzTw87ub7CHppq9V5u4ASoS38juvPuHDieNqG4jsd",
  "key29": "2tfTnGGYkV55VPXtxFkHhc1nLz7Th3r3yrWRPfRc3zBeaR18ZNmDnSQFHz1eai8AToUnJBAL2NxhBjEDdE8p6yVi",
  "key30": "4feyPoR7A5sqEeRHUcjUQozRSFMwfjREWwqxKFhxD8TeWnfKxT9FVt9vfD9PDnCRhQw1hgTGwJDiFf51WotVvRwP",
  "key31": "LbMPCfAyyZDmgtHYBaU2HfUjTJRty6F7wXCjxyzwmCvCzTsx6Aw7s5PvkqaMrJUdy4WGrRnp8nsCNSwhYzT3AAV",
  "key32": "fX1vjfqRZt2adPJ5zdsESpuYsNGUhEMrochcW32LKAGf9yAAHTJBdi9XLJPYrhHoCbqSt3sxYmNt8r2VdzNEfnk",
  "key33": "KEh19h1VQYi3QvHLu2C4bdmxaVPVMkXNoxoF9sAMyj5uHJNVhbNSwzj7j4Mnw4Fp6zEJLa9WnCGApfYCnsXp7Qy",
  "key34": "4BsytNcB5weZc4vggB8YG6ti5hyqvGVzUdoTDGYfDCY4TKp2h4k58a423FVhrhKHWP86B1JuUbuLVQ5W1mBaT1gu",
  "key35": "5taLmoiRJTucR4rzMexGRrygTUV1ZLC3nVFWVRuYPHj3xZ7ugQEMTqJzQZo5A3bqEv7iaSFNzTAWVJT25M8g8T1B"
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
