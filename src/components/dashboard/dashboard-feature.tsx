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
    "yEKAtWeG4dNxCJiLrD4RJMHAHKJccGj1iKGike7UGrsb4WTEaN9Dwx4cbg31nhgtNCrnAvuNSDB9b3edssY13kE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Emmcr1XsDridNiYmGxWSF3Q2kYVoJMa9qptgeLGSs42GXk3FMKYUTByXxZdASwmjssgNLUo3GgJJB9nTscQDJYG",
  "key1": "44ifxfTsu7yvQmWGuw9tNamjaY7LUbH7UBL34gmTgMgDfgLA8SSF2Wn7QW3oBkH1rKnjhPnUD7s3vLYdzwEpQK7e",
  "key2": "2Z3C3hXWsp9PXEH6qAAUGB1nwq58ea9MnRaP31Rj941AcV1bxdhbG3MPVY6bF6gTSXCoTeNZGHqKudKoa2z9QSzJ",
  "key3": "55wQ2zmDoGEWDdFJVPLi57cn2yrGzrY1GEHj53cYF4CHuQRdEjaUwWHaAbGpdeQrRobG1sdLiDM6ZVhP16a8zkyL",
  "key4": "4gcEfWASWc43ZxV3shwaLVL7JxRXC6oqLct6KCiMizenwtDnBmpbyjDxrguRCr3Zhuv3araGK7zv9p5o7BNJSA3P",
  "key5": "wsGMRCnSZZitkvC3C67Aer3BMiAprN7XwJBtfqyHx34eqWndTWvHj78VuB7s35kKmVWgUqx6u6Cx2NCoqP4hm4B",
  "key6": "2QF2Rzth5bMRAkNjoZkRDzKqVRd9vvorTsfCGQr8W3PbVjrvv7uJtrKtk2Lpot2KzX3tWSLFNLrCdtFwB2ss3pdg",
  "key7": "5QiBZX7xFVNqBZijEvWYzU72mdiBkEf1Vccw4qxsiVdN9fAdu6h3mhoYKfvzvvk6TD72FoPQoB95x9yeH4B24qcd",
  "key8": "vmtfGa1RMcGL64LsUtc7jP5k7FkebSKLGQqCYrSs6iGCxnPcvBLDy3DDc2KDGtGbtShpSn6GxNAUMFCJmdd6VJ7",
  "key9": "2eXqTqhAVXQxGXsUfvAegZ58VFjodrodMgijvP6e4QAhUGB4m1ryz3ZAB2qUrexmtqxgdndZcs5W7K2cinx8jvjX",
  "key10": "3NvR4HWYJE2HHowqZ4t8WQANZVeWTuZBaXh7ifzXxWsFnPabQ9jwjpAZhA9HAd8bU6RMxjMpo8pe5DawFvXW8yAE",
  "key11": "4vWAe9BRJuZoNKpsQvvzWkvrgDRR42oKiBmkzBdEnz7iRkBZTZZnHxEsUVfgmAFKtHmUt7ViqSn3vj3Q5sFs7rfD",
  "key12": "4z24CknwQYzpKqZqzwhK3HheKKAu1BktYPpU4Kw9BNauZ8mj9GpZcUfWDWYMbmaSSZoaWKbmwvGfQa5ZJpx3SAnZ",
  "key13": "Q79hwJyMgYDHCbwE2Lf3NjKmnz7rsjYzuvorJQtCzXqLow65F7NuPDC8KBJwcqnw2Npzn2qkCCBTavFFsARxi9h",
  "key14": "73GGy6ccDvTVJqSH3DQ5bqZWTTuuL7AE8nEjSTfqXQ52PQntHkCtUDSub7BZe7zuv5N3sw9e7HbT52RT2wGUzoa",
  "key15": "5aqFgvpNLJGv6iP13bkmdtdauBBEoK8fBC4bs4dLYdTsThU9h2zY1JpdxGhUWi4RHQoQDjsjUfQuFC4NUUUrLuJe",
  "key16": "5VAJzYu2HA1A54exFQ6GBYoXr1tcCSxJWAHxbAHxn6S9K831FGLvtRZmHWkQcFoTTBTCcVW3XUvMdDMW6K2C9oXJ",
  "key17": "4teErVUBgbMPBodnZbDYp63PgDdx9y9yKC4uB5JPYwcq5TqmdhXBbopZK36RsF8LnzSUgjbgVVXhn5HjPaY8qSr4",
  "key18": "23sLhHFu5LgDVpM1JzFX2ULuhhTSH83SUQhVxP1eYx2WLGUKfkuCFHWYi3oYBeAxMsZvoE6oBdygSrgEMj6tkE3W",
  "key19": "3HxJVtrrM3ruTgA3dbdkrTUSBWpsGpR6jzettqVR8ZwFGdNWt5hrCpDRT4bZgY5dz7LoXaAjBkUDQuHGY3SU7PSS",
  "key20": "3GBGFyz1tXWaY5QidZGUD8sZLgbFrUsVZwNyvz3TpckXtaqcdRFNVDpnWoouXi85zaHEnr7vqkZp5ePiYTXkH2kf",
  "key21": "5pXgumDMWzypwmmR1PdSQCaqFPjp3APDq6T5R6F5fEcPFxphyci9gdjaKCESphRqcFj5JXkGxqwenA2siq1sgVmU",
  "key22": "4bcoYxv7wXW3GUvQU21ZHKn7Q1ezvseTLZpNMwJTCtmHhkNekz3M35GX8c23Nv93h5iYy6TRYYMpouCiHLPaY1xi",
  "key23": "5E8dw9nYy1vq1UDWG1W8RRu6bVjZn4yiqBNV4Ra7YU73VkM2Voyq8Cvd4znHnoYCbEHfP2nBQPCsyoGCssec4Vj6",
  "key24": "4LZ5Aezj7y7GdtBxRitRDhbjg5f9WBEyqzYSfRrR2n2nBPd8xZkvDxU1tWKJQApyJEnaxmHDmCrynfxKr5bvynHf",
  "key25": "4dAm5ZWnQibcbXmqbrvsKf76gYosmvF7ppFwsocaVLKdXtF8657WvJ9LF4mbMPoXAAuiXdNiBVx8aza5LNHXStVZ",
  "key26": "5pEBNNDXTLwmYFNmSmfJdWx3WtoXKEDFkyXJfs5MZHLRKiFPNivdAGdLDXmFo84Joz6N781CG3Xbs2Xf14foMnbW",
  "key27": "4PdhQ6FoXxqboP5jGba1oaNahrMZKswq8eDwQMcfsNmK9yhZuutsiEGudemgPHyoAJJE1jit3Pt3HH6RTrH4hjkQ",
  "key28": "314nHDSUJtWENH9HTkTkXvNkK9MX1JY5ESdpwjZkWnfWhiuXmsJtVzV3MddtBzpwKR5bxdUCFJR288FyJ2b8sZtu"
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
