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
    "4JAZhgwCLchoGmpZgSKRFhgNvTpSxPuSAkL6CH2TPsab1aDVZ9AhBLJjCWaq1LegjUPLVM7KA7L65YuGnCEwNaCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ng2XHagtMPrULBheM47k1pJ6xaUPgg272hSU7QYkjicJbhiycZotRVcJWc8B2njopBM7DLCvUo5Q2PEguX3idT4",
  "key1": "2zJuyngtCJnCWeExdGeJLkqAAQ9ze7bkBc3FZfsfmf9mposrghSw6HL6hZCtjt2oCVfsYVTMcm9dPM5JbuKsVqR6",
  "key2": "3NycuTtAg279cf2PFfb3TN3wvsLpDDZSfKjEzxad9BvHyuc8eeGA3YAq1K2QnwQNrMYnzcwAgAbHDUEmHTs78ni7",
  "key3": "4Bza7X8mNaLauTTPU1XdyQ4YE6DM3oSsC5NEzAPr6qwBdUF2wCEwhQiMnoQ1VtetsqemdZKnc4GWuy4w7rRtQmcQ",
  "key4": "2TcxiUEfLt8WsFajPtapyETa8BhqormqQQSgCXWeRfrk4Nayu4a9nRDXdVVzgw6EvfH5SH65UxmnEZzXsWxUmpqb",
  "key5": "2Qua7AyseBt8FoTNraDf9GZtLsNyoMW1dUj7xNWVBGzssFGZtXwrVm53sa6dTchUd7BsRFzqDrd1KnT2LgrDWm2c",
  "key6": "5iDSsqxjss2RSPfSNgYwQUfiVed2MLhG492HRn8NRL95K5iJhCGGkdJZfqXmGtShYD8HyfDGCqmCL2zq9Uj8fydz",
  "key7": "3Bhy2zX3yWMGaP6NFLqiFVbwd8m7WBhJfBQyvCcmFgH9ErdRNZSoxPAUSANwXuH8UgJUJTbMJjdmiuy3XqW4Mz9o",
  "key8": "2isNSsreb4R4kQY6WHuE9LAiN4W6bSvKVytTrEJkQtq1qPghmtJc278Y79ComzmKhJr8W9FGwjLuwKkXeQisWLye",
  "key9": "zAH55aVpcdZQTwicMsMtwRoNKH41uvDnRBdUUmen8fHH5cTjqQLu6zQXHSTfQCzg2cqu6DVqWhcR8dDFLaHMkPj",
  "key10": "3kudY2nuTioKpB3pAfadLV78csc4h6L7LXbZXZdKie9EU5W117RyqDQRiSnrWSg2hyPi7LC8NBRQdrdS223nNub6",
  "key11": "27MQxNWo3zBkZz9fGtizz53vkCZPVNggk1fpBw5GsPgcWc87AEGESvUPQAkHquJjeAvzbhwzSUCnz6nKq17g3eti",
  "key12": "5WruXVJaC8LUAdiVKtQY3g54zykYP1EDxzMhADGn1yXnaj9nHvcTWAwaZzbo7XaNHGRYRXzimUPwaXLc9bbFASSJ",
  "key13": "419EebS1E4H7JVaaGgBHRSowFXQpsyWKD8D78Ns1ZeSJadZjrnB7sHcwch44aT3ZDRhbt41nY9P8SDL2XNKXUiKF",
  "key14": "63jNtpXp9ufFFVYTsRzSTbkVDv5o4iPqJHd6RwgpseeFEtD9Yo8ULAwdmVaSQLXPgun8dbfwcsk4o5Moe9DXG2hG",
  "key15": "4xcHRvDVZarSEWUX6yUBHJqHFQgsqpokZdi5uaX3GrWKF7Rms7bU6EBW3F314wvY7Jg69UzHAcT7ASNo3nKwFWcq",
  "key16": "9hMjdEk2c9EPVWz322mLqG8rZCAknx62dM8k2uxPqVesCU4giePaAC5WrhPaedkHxF18hL9MaCDWNGtvGwobTu7",
  "key17": "5uJw6g3pBsdFmtob8UHu5BBhxE5yuHQfyC1NLCSiV6rtnDLxiDPrXFkoyds4n4ATVnSzZJThs8AXTvjFY5LfWTkM",
  "key18": "29GCovriuJ9VswUdctxq3CKvJ87Z47vZFSK7p8mfoPQMxAU9GHGdDuWMcq9zdLTfhPzjNnmrYaNtph9JxAyEa5nE",
  "key19": "mSq5SiQCy3Fd2XhBoMcYhK9jQK3cm8VcCBdmX9AbZN41ZGw9LjMXY1wmEqpWtuheY5uv6YDAbBhyoXsRt2eQuFK",
  "key20": "5THkDTRiaToDRGatNaEvr4hu3GJLQS3AvxJgmJZrfxkhVFRCMVwnLH7jevTxyPUU2vwDKiTzgKgKsEAj3GecqAa4",
  "key21": "2GUDPfN3J4GK89nFZewCJ3voTvgAQdomxx952zbdCQoiGkuEjz1nGPaq771CMmAVCEijGrG7TvkNHMPPSsf4oAfm",
  "key22": "2UgB52sLFH5n18c6XKdATBWAzyxkTtJVuWFbQCjKUUQ4nJSu7cbekJNTMy2AbxDyziFZyGyfgXALzAE74ZRiTjNG",
  "key23": "hXakhAnXnHk1fa9gtossZG27bs9pgtmZuHfY1rzDat4LDR2TJFpUuc1XdA2ZnGkvkCm4feorooXeKrWqkWvM4wE",
  "key24": "2do9P2scTT8SHPdTFm6LmgMcitchy6YLe7XQPt51Vo9FpvwUEUWHvZjiNx12QTWn2zyoYRvjsYBQiVLSt756zeUN",
  "key25": "3XQARdiUty5PmSGNuhoACc1ZdMsFvZRi4RpP1YP9sUqLy9DdB96dff6uKau7FXk7q72kn4qncGE52dWZucLrd1Ax",
  "key26": "4EHMn74qZxzjgAvpXd2BR77BjT7hoLTmeF19g4g5wUkFZimHFJaNbtnDCXNAK2vXARJYUpVCPhqWBmqhcHAfYxPn",
  "key27": "3KCJmRmJdkPXN5soAk4xjVumwopejb7GVV5cimjBZ6ivrZjsPCUV7VS9yuLmS9oMiQVXUGYmfF4xAU3jYaetKwnV",
  "key28": "4ZjgBHm1PHoJeJbk3G9R9EbLpiaCBjtCcKDP8mpVLxorZ45H8CbGpcNZzgmG9UHezPfTY5UWDn15dYoRDHeQsXvH",
  "key29": "5qWn3BhhxemPKMFTnrQ6dpLGsTDCSisBrbe4gU4P6uHaMLLLB4WdxXd1enMXp6cHTY5kYf7hMNoWFP43YgcaU3fY",
  "key30": "2b8wmnmbxoTpFaGuLoPGziPfERqKkicgFKiPz29jwMCPZA1arvhDZxqv61GU7ZQyehLqFEcZXbdqZJZH6MCHoR3p",
  "key31": "5aHZGNv9Cn3WtkhNDUjxi1BcfofuUwy5y6pPU3K4U4bx3smGsLNgirM22Z6SvsATMmc6tGtN1frG8GccpUuWADbU",
  "key32": "xn8bNPYLXFX2Kzb2ihLkoqPpRUyQPU44XursyXkEGcfwnd16oCQNmDW2diyMsiuYgYJNFoqVJGDTAXYUvpdnG5f",
  "key33": "34H8Uo61QiXBAbRoSz3q7E5n7mBfCSB3FwoRHE7BmRfrrcAqnvJWXM15qsdD4G8H3fq6QrZJsEDPzkDUNoAAaBZ4",
  "key34": "4bTtZ17CoiQhyxzSVmEWVyGAHaFWPbwFW3592nKrnvbiLFjJyqMc9wUjJVKGd7RxpJL5QZAYs4KomT6YDeS7BThG",
  "key35": "5gHCLP47QErCQXz68ubibttgboiRd4xiKeVxRjyhhLC2CV9qhkdYG1tkkCFxfaFv7b9RbADgyRnLYaaJahMYhTvA",
  "key36": "3wrtAHCd7Ab1PwUMKNoz9zRY4giZJDgk8nNf2uvUQpQNEAUHEnYyzNVWNe1koK4URdDCiyx1jedRXM9LNhZaymVP",
  "key37": "4dKe2LE5PeRNhGTNBYKAamjvTJH4UparXoC3GUfruRXqaqo96nehncgdjqH2RqFxhpqrT3QZkVwDagvSj2UX91CT",
  "key38": "3293BTE5JpVeKs4nvGBP2y1QcCy81qt65Q8jTANPgVFpA1H3tmkFza3Qd341pfms8FcoSjCBbbaEZSgoMZCWryfB",
  "key39": "2qwxCyWPr9nANRXok23eYgQXkZcA4z41qnUP6YNqNSG2LamhMe2muDiwL8dgKESpz6wcZfRkbj9F9CDQKnJZX26S"
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
