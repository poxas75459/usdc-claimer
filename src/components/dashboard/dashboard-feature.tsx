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
    "ArSuEEmd6uXWWJ9BHV2wiSz8mnzcPYu9KiB58Y5GzAc8dQWTu84keSrdqGzusSQr37AeeYFZsXFZKcswZvu4qaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3khSR4frwDCcBhJhhe5GNi8HgA1tREuSXwXGTKqNb1jKmiywF6T84ncyWhMzpLVSireALNYR4PAzviEbM84vxzLF",
  "key1": "5fe89qR7qin8mfQSU33A4y84PB1b39t1uzYgpEHgpYuFnJpSpmanbuH1jFJRd8KBof7kpXn5v9vsr7Y9kTE99hX9",
  "key2": "3meHwwap6wUzvqi3ZHKHdnBcTAgcqXMtnpGBQGF39eUoJagGttRUj1Auvbyp6pNZtjrkGmMBfPWc7gfbLuFRo5e2",
  "key3": "4KdWa3pXQdkTr4iT3mUDYT4ox1PyJ6XKFiqd5eMFvBKtdekGYNBjKd4wTVAq6gSt5iLuYtAHTTsLNR3DfbNwZp7f",
  "key4": "3UBsEgnQ9gutbMDcsxjWp6oTm5dCB1EndABf3EtMwNe98C9zytRWifA9hGetHdhKUKkp6yfEKEb32zsPbczVyCdy",
  "key5": "3rBdbywcKyYcFeQ1PWJnbJG1L3GEqpzzbr3rjovR1zk9MuJnuDHVjpoYmHewUDNjMhUs5dUJ8u3c86TxY7EVcHCh",
  "key6": "3SQ7K8p5CBPBB7xmiLrGevo5g74Sbjnj7YtY56BErPfSyhoENGTEFWcsRh9EqgVa9NsuxNtwLSViZESVB1RzPMPT",
  "key7": "61PbPz96Z3WgbR5DmzXz6eLjf4s2KL6a1BcsqoA6k1WqfdNJbEKBGXTtqGYVvJC2Xdukuc5E8fcSA33LDCHU8Fm2",
  "key8": "4FeUqHxS5a1DNaehXUBmZPhpbJKipB1D9hpGzyqpudThYCuwG9kfX8xbXZpEmJn5qLnoszrHMrqFWuGKbKF3Xy7x",
  "key9": "67hqau9wfKkF74UXSzQFdW4TZRpVrjykUGtq4QTkEA5GJpFhUWAKW78HgsGS1Wji6xG5kLKRFjJCJfsNUvJhzeTU",
  "key10": "356SHkmyEohAo6Y33Q9NuN8XZtLQkk6E5SE9Fe55kknfenrTXWJtT5Zk4RHub47k4HjdaUZ9Q3rrYo9qriCNiN1H",
  "key11": "4KdABePvf5tvD2i4Fb13KTBPwVGoaCE5nnX5j7B94bTRBU68To3tvhVwWSeUS5XAwPjvnGEJQRHeeg4NVRTLMXc4",
  "key12": "qsGNcMj1ZfYUgGMnMpwdbR3mfdGtncaBBaWk2PpzPiBej5yMGt9MhKDBJBgoTzkwW2R8XPs7cf17bEiJszqJoPH",
  "key13": "5t4UpG6mVZQ4w2fLLZyTVmk5U7ux3Nrgf7dYWZYDmtav4QUgRyDpRK8KF1TirpaUFP1LuyMikdwQJvXHJTgzwafC",
  "key14": "5cP8NSRRJi4Gs5qotaEgUgoYYLXnAK83XnUB7QtUBE6vRT1yTsduzN5j3rAdJEDQRyGY83wMicMq6LUYYV4yQuqW",
  "key15": "3QaLhCgijj5JgqNogthwac6xhZWsMg6sVjVsdSswmKNUNngmM8ToaJV46upFfyCGEnDNRQUDLhDF7FgT94UaJiLx",
  "key16": "4bUSCao22MMh5845vCYJ9FQBYX2ZByvVHqpswMQNo5y8KUjGu4SJWeDipkddxAx6kAk7UegrYo1ecbeKsngzEoDd",
  "key17": "3yNsby7zNdEhLqzLxoqJ3ordktioy9q1ChSSrGGmWnqGCnrkqqdkgcyuXVuYfGp6vmz3XgFK8yNucQ8DEycm5Hjj",
  "key18": "2rTB2em2z9ezKFUCaDcJpChgsL7ySwkTp5Kn5eEix65WcxuuodHZs7Dt3prsNv7UK4E94ARMNN67givePjzmRSCr",
  "key19": "5Zoa7ZFoHUbmoWU1nBQBC7ch1h7WnEdGh23dhH39mAbX5B2GXVUUqhJQ7nLomu3Y2d4My13My6se9GCL8rym187C",
  "key20": "5wTntaf1zGotMzvoiK1uj3SuJGysKUGJgi2tYhPrtHmQfksNgyReySXZrpEh1iJbmxdmKHdLpJHAP2MTRZYr7M3D",
  "key21": "oeE5YiSvAwETN46nZdBKptTA4Xa5GR7Q5okGiCBgNPEQoGdWjvtrd6r3aKCBFzkgfUqPbWPK9shFkcwMXdGDFBo",
  "key22": "4p4FHmbt4yQvhW8eSrQXPhwQBogzk918JnJRUQEv6JD2F69kdtSPV47SY8SrdKwZvjTWHscvhq8rhBPGs5g2puaK",
  "key23": "3eSmMVwWCnEfdWG2oCnMXduFfcpPZPXEkHBUF1Bg89DKNuzVxMFnQzRsnpVxokwcGCPHBGkw3BCwqXjKqZjjpc9G",
  "key24": "2ajs2QZoBGCDEiJTNoz8WCpvLvH5piqpKcTR9SZaJwE6yGhBGgNKkkpErg6XX35B1RLTmqLnTMAfkNzVeaRKbp6W",
  "key25": "5BKKWfGrde3e45H8Gea6Bxwcw4SYeWC314LAbAtBiFJJruNu3CVFHKxv7166jhByVAtX5JM5f1fSVZtULBCHi6Ce",
  "key26": "3Vrm3yERxQe1J4tv3Ecyuf9GwnzcYKzXuqM8XHzM1RcTr6LpQGLXwqFmkAvWyBDFhBKwBgW8omA6e24EoiB6XEpn",
  "key27": "uRqoe3jMWwSv2cQbnZQ6UBhX1ww9oGLQcLaCVeFpobzTEkZug4jEGw5iWi83JmKHFryQCTaWLtRPrBxhb1wTzrB",
  "key28": "4oqFGfks5a33mwKppxGqT9Y3Cx8SYeDCV26ce9X5o9bFyZW6iS5jfqofSwyspJbTNK3vSCU5zzsKEAqWNkB7DWoD",
  "key29": "4VQptqzzk9xbZXQUKT82EpDRwBJQVe9basSLzJhbFVJWeYK2iZr3Wbgpneb9KWgC2SUKG1dBLzVMCrLDtff3M89s",
  "key30": "hbWD9fRTM1NCwxq9yuHGWWZxNCSHxBUwcB7vHHY9W4jFtGgkQJ6ME8HrtpLhvF9mWEsmzGrxz7xQ9fN7j65tcLe",
  "key31": "4ne5EmYG2H6k4V1fkjnZGbnwnGD7ho6XjaPuRJ5bQdix4d9YBe8J9NpyUTfWzucFCrx7ik8AKNbV4pmxMvTXmYzn",
  "key32": "3XckMbtu2mj5Gg2LLzcLUU7wyguf2qaMwVZT9f1UWE7mHQXVu6vDiyo23Cw7y4YRx7Me9TDgz7mAqNg7DiZAe5WH",
  "key33": "LxwhevKwPbr7YvvwvoLFU5Um8JFH2RnKwRofDrJq5iQaGWvGhQXFDRuy6rNLBWDNS3AVuN3NhAdSR4AaTNuWXty",
  "key34": "3UZ9Pt72SwjuqkwT59jAe5kd1aUMgebumku4W512gPeMYAitqLiAJdLusc9DTiWATinkP5SsFBPTmCR9yUC2nQW7",
  "key35": "36Ypne4PM4kByDhYJovhdRgkjDEDtup3FZK77ijihGca6bCwLDDEYyuGBEVQeheozcmCUcecod15C6Pd8kTgqbiX",
  "key36": "4oZx44Jd8nVNDShuAmpVhBkxZDSDLRNw6QgSfAYeGNsXTrCFqqutHqyEgaKiNNQC7wB4rnoCHWpHVKeCzZKK1bSq",
  "key37": "3Qqik9wySfRKetEwZPymaEo7Yo55hSyKY8JjRrGboy7DaBGd3ZFrGaijLErQtzvBQFvvDTqCYXnBsJ7A2twaQcD",
  "key38": "4BZFdDW1b5g7iiAmrF4XjLkGsJbuhCa2aTFy8os7p4DYbN5E4tZgJnrJcjF9VW8uGJmbEZbZ6ezLCChX9foZHXh3",
  "key39": "2BeDkKBbHagHVkc2pckPNohwMduV3wEuiNixKiM1vBX3Tmu5SHYfMPFYNPx8yjt2Y4tvCGxuHesBNPvhRz2QdeK6",
  "key40": "X6YAbMhqRoz2tMWRta5NRjQp3ZEoguKKB1j7WGqtYaFGEwkWbYKHtVdQhvpTgSVY63XBRszmivwtxexSW2GfA7G",
  "key41": "5qPkpAfYs8KybqQVupmgrAR3MYHzpxdXVEFEcxrCaQAjFAxXBZogqwWYVy5ocxXFVc11smJsMxFYvxj19iXaDjP",
  "key42": "51vHrLMmKq5YFfAGKpCR9AwPzzhrqEwhC9Qk8C1hyWrj3aoGQECTdUXdaMEud6hr8L1F96q8vzVXfMwGdPwJS8Qa",
  "key43": "u7dcKYhw61aqZd7uGNDddbrLedJVduurUygJ12xchh6ZmsKqGWBaZLT8iHVgQmPWzNiPosYve6Cq3seMACBsPeZ",
  "key44": "5UdDjqxqAYjpAEcgkLH9diFsPwsq3haKKnWFD4rmad9DQXsrNzxm6uqLodRzbmmZyDCzMYGC6GhLE7KCXahJFKuM",
  "key45": "2E9tTra83LNcJaMuB9QKuKKHBcoGTUoMjshRPCCAKpziWGEovHDbChYCxV6EsvaSgQDfeR7By1AcPqWf6bdKwe2J"
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
