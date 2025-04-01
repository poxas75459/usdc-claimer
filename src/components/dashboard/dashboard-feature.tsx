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
    "5Lmqy1SwsDdfCeDEsA14RyK1rLrYu3n3aVzNBCP49zy8ei4KJSepM876LwbbS4sRtTW8dtrfejWcv8cGEsqYdUQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HNeBe4hK6NgRd68NRfugRni5gUHxiNw9fs4i9wDXCEY445w1hWSRw5wp4BdjEjuTy6ZS3DVsnWw2zgEjdvGJXPS",
  "key1": "5Xgx2DPYdbuXoiDF8ZMHpqFDYkL4MHU5nSDpddS2kfGpYWzGwSS6akxK81MbRq5mfUsRVfWcVbJGhDGaLzHksp6M",
  "key2": "5oFPmeK4HeFq84UzpFqDSLCwxm5rLaKjwnEajdExyde8QpmgSNGqizYYi6KxmmoHWcHqP7i5feWuH2sq9BPcuyGB",
  "key3": "3hMXHjDVVFV7uaPs3bAo2Y5ioh1G8R2YDqDHx3QAU9UN8NCBGY8YBpoHgFMtxvMq1RsKueQBWCJNkMw19NRYaZd7",
  "key4": "SuHqhe9nvWHmnVfqTkC9NH5GhZc82Pauv7M8wgeefv886nKBT41Vv5eV9cAPyyuKYrbUwcTyXv6KcdBKt4vsdMQ",
  "key5": "4FQhNyTPHG7xVhFF6akFCeyYH6DqAeCF5wbhSJ8xqXB239CnnvHQ3r7ybrrDuvYh2FyRHw7EKbWj2YfSDzhoTBUo",
  "key6": "3Fk7romjWuqshErF1MGA6H4ep5icyMUjV3NfDjRux7GCYc742gH4tVKheZn5Bmu5FZStKx6NYYVsHsHdr7qJR1Zh",
  "key7": "2EHgmdKBxLwmSh96sptKHe7Pxk9uJ6GYdn1zvkxbMPgY8Hn55Wf4eCPXdoyoVv6HeNNuMNsbVHTt1rMyexS6yE3s",
  "key8": "6Z3hPqo39NRyGWLoyqw1VyHxqAQzv4bwxQjsr2tjFPVYRhwZs9qQPBZNsLs8DTMt8qhqFE85JDuiS4L7UuPW5tG",
  "key9": "NJ5HDVmjF5iYbFP5CbzGyTh2TJ2oo2hoEqCoaZSz6D4H7FRHJZr15MU4rbLdVwNF7UEx2JDmCQedRAiFV132sxm",
  "key10": "3mBj1yyB6zYBNWppVZfuWGbywjbPCJQWpVakXunZSAz4cm61YsmMgy8tdAfj8oEBrENZCZMNu9Lqujofyp2q2ucu",
  "key11": "5x3xnWu5oAR5YiRJJLkKMF8g9G9kQ9W4t3ZMUzjmtfYRfNAsJicL6rFu36SqDV1p22xxgv6cm5VHnsj5TmAr6mTp",
  "key12": "4DbhJuoHZwWtYNZKTM78VPApC6cF7N6gh4CsgKsz8zf196Atzr97MdQGnUSmuRUNpPD3E8pRHodjvy3sSMPbXBGo",
  "key13": "2CYMfCeoVLxckxCpNpjm85EsSbL7bWEghd2J5VU2XvA4gZV8oAkrrKFWmaEmxipC42pgC7JD18DN3gmfoKiGAT3c",
  "key14": "5fxZ54q4bZAr15NiHZR7fJ3nouSM99pbVYaChTD2NQnuPr1oQ86zNJpFTjb6DAPyzwEXT8GXtm92JTgRbXAH4Jsa",
  "key15": "4QyUb8LmQQcVoLPBuveoRTvNY4AzZ3FoPkaSg8fYQGEqHRmLdo9vH4miyFZsZjSpLUcKKSmpcb6Pwot6gM72S5n9",
  "key16": "2WNsJ7BW8rSEU2J8rW66di1GgfhWe4gfKcqm9Bv8fYCkEPW1wcN3bxXGp1yqFjBAotTzSV5W9U2JGJzphHk7qjFJ",
  "key17": "4TkfCa3hD7Wp4XPPdPnesKWbPuMUGroJcjLKZi49LkS9Hghf5vLKW2JpJaDfoo5vp69eSbpa49fYs2Q4GJcGYx1s",
  "key18": "2hbSc5DtAsq7EFqCQ6WXBisg8YGC1S7kBPRQ1TQ4irQFggaEcMi1w9tP2Z9DpsbACmaJT3pPfRmm4z3BB6UhzThj",
  "key19": "52Bemb6MZ65vT5Kzdecy8eEe5mGNbkM1vE2RegL9BAsKVwBwz6T5GjGtk1hpPkS1s27FRh4fJVHhpsVioLEwBC1q",
  "key20": "7XDMtvhrz1KwSBudwdijn1pxzCu58yaSnwKbS98LYoU4D26SpJ8C3qb9JEtzZ1pAym2E5oqwfV8WwJv3RA7EiKf",
  "key21": "hnzRR8xQK6aXkRZvrGvzLhGs4XNLk196MFXbEQ1m5ZrERiRFJ3zCVifWpTkpw3fDRF9UHDBbqsLjdbnvrgrHKUG",
  "key22": "5jJXmQDEnxMB7dQ1u9aWvgnm15ZpV1ut1oQdoy841D6dD5SAUQfZcUF69Mnm9fpmosTSk4zwBsznv7jMDwkkVnd8",
  "key23": "2kD3uJyJx6oLS7Ffe9iK9ZmptmAGrebHFdF3rd5yav5eKosKArGbTodWbAxMcewnF5avftdXiC2MDnH7cC36AMjT",
  "key24": "4xff7AEy6LPXce21oqBHrmpomfysChANuQZd4J7mVTvezEbWrmHw7TQMXLNLGFa5d78LTxm7oKMpV1Z9jN34eJH2",
  "key25": "sDCqFYo5cH6N7RabhqAkbDXfbT7cDim9Tgp691yURvKXdetKEbfuWqvBHUNkycB9Ktu5tWgGrnvqvyQVGVt4ksa",
  "key26": "TvT48feHcogLePKR8T6fAxbhX621M2RUaULNGgsGhdhYbRVCtKiMCPbVazqGgA4f954fTXZHWqZS4x57LbvTX9S",
  "key27": "Ur3TMCqypMRwAt5wGdpN8iBwPxdcWwtTeWkQrk9fMnjoEbS6BAcie2tLoeghNbiwK36USjcXhcx8ijXfptx5xF6",
  "key28": "62HKA4d3HY9iB3Vw5kMVcfnLVvnPnCYH8XxX7oKAAnq46zXkxBj4oAgs1btr7ZTky7qVKSqtyE8r9oCqVaaUQTzs",
  "key29": "vc4QytyA3gD5vavKvb6gzMo8vy6T9LX44qaWU6EtYSCtjfTNAkAWXBu9aDGN8sQ9zmeyA6mEpnjMXob1fcdNJ8A",
  "key30": "3GV2wHarXdcMZjA27HubSy4sTPMqGnDppk9pcXHm7tMhxJi28sE6j7wC8NenK1eAXReqRSU8w3GuMt5oxx5W1ZXo",
  "key31": "3DsxA6vWeUDjhU2Fyarn6u2LJbsSXVif5b6DedH3hPuJPEbd4W3tfTjMrQFjTVhsjrdbvJwXpKAGEEouTVkQknpv",
  "key32": "2dCgspQ812qCYXFteLeFM1HrxSJgbvp8b3HoeHCfsaNbuxZDZY3cTmMKVARKffhrqUKJ9zrDWebN3ZrRuPaX23vs",
  "key33": "4Haqd7sheu5jThYU1FqejNKz5zE7GpqXMeCbAZHFhw9vshEe7Er72mkhfEMtNkCKsFhY5BNn8yQz2rkxgchw2A7u",
  "key34": "61Cqn7sTGViV8snsrY2EacFRXQp7US63TBkdGYW7htpsPAHauk1XsHNXnpNAWtDofECw6ENnJzUbn1NtMHCP9rUr",
  "key35": "3Y3Mc8oqZyhnxpWmKN6EfCbRjg58bthSswKv6pDZArQfLkbFFkStwZtDphU3hWEyRXX3pcXBKQcr7QD2iG7WRb3Z",
  "key36": "3Gonvx5RS1XsTnAou9ePfDhVNs1M2B2tRpzrXHn1Xr5BoZPeBNUxzogFt3vvsanLdNU6Rh5VZDagd9F53NgykHAe",
  "key37": "2YjMhUyGTAtvQyhnQgAo4v2Bdnwx5oKymWoYosdkMdg7QuRmd4QFcviSvsY4ifiMG3XojpkxE6YzZ7DpEesPMa2U",
  "key38": "S2N2Vkakn1Smkb6uxsJYf6DsBBv2DqAYhAQfHPBym6iQexn7JdjqdqXaJ3T67nQTB9Yw17aMTJZhaicYUYF4jSb",
  "key39": "5e3M4MvYnkMNvFZJbDjC8uQwKYQ6piDy9odhbQpuqGYeUmKeNL3fx8Fo8LEuvNDdQSFBonzWMJeFN27oHudYoCSs",
  "key40": "5MzW3oiQM3VtitMyRMghFB3M643CK8JzgLXEretmDfDJjZbtnLpJNnHTpwsyixYxVvrJj9LvqtKafrAuHnh4dSN5",
  "key41": "5Lm3q4pkn7PHwLFH6kV7o8J6mK1NjjbyVK9yNdz8arQ1UXN6b6VDY495sZtnUZ43pcb6u1Mi6riuuDH5gmTSgydx",
  "key42": "2X23agQyhKTYoWLLqbDRQ2e32cLTwFy5YDmaMbEKF1ayBtEAM3TyMLBTrGC5KYDqwiqwwNNfDiQPyCZLmhW6ksVd",
  "key43": "Uutw6pTwhLhpyvrHWC8ay2Jb5BpJFqpxRNAJvDYt1Tq9UNGoWnP8EDk5yxArWoa7U9wGjceQcL7qpso7fFYS94t",
  "key44": "3N86fFWyxaZxuchzrvBcAaAoTN6jsK3Bgzu5xcUyYWbUx5J5643LLMQTbLQeVLA8zxordrNDjJk3FxtpgEVtpzHa",
  "key45": "4Wsb44azPq48NfxLwuF6kW4dTK4Ax2xABKBJ29GeEb5Jdr5CvoGGasotEf9cvBZe8aYsbpZSaCetbmT7VJtGGCEq",
  "key46": "4XX7eGPoTYDnkmsjK91bEtqt2A7h2oePzdd1cv5KoLc5tmRZxmnRrD6CPTiXXr8w1Q2qTBrRR5V1Qrk45DmB2X3s",
  "key47": "jFgHaRf3VwyNAa6MJfNewAqr4LHoGuCqk8cwfLHE1BYGnXVrzRoAAf5RSVNacUB3Q7V3e4YEtoJK6DAXb8md5qZ"
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
