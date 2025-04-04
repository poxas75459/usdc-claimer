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
    "3JrU848S22aheeArRxN2v5bpW5m7mnD2hZNGBWUuvpPsedRm4L5hB4n6KB8fQw5ubdL2VjRLLPENk9ZgBjr4H2st"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YHjzR4Ep8XEVHpqP7Cbxjqye7GxCK11GrFx8FjFNtzqFidyVWzHANvh3ZytQSA6piseEN1qEHKVBYkmfQn64Sf3",
  "key1": "4reafgi5B18hk1d2Uy55FX4HGTg7BWvxoP1X1UdKMR3YKexUk4Sczp6YiNyxQnr34rk3jwkNWJtjdRShthQuS678",
  "key2": "5VyqAU4WUPn7cyaKJCinB2prjVpzn8FdV2QVPBpKPgvATV1sw1hiAYYmpP7pLVyzR4m6Pd4wpyeYfAsDvBqenGZ7",
  "key3": "56JpQK8s25NBMhpq65QxiYcifRVkA2oha7swWvc4TCEef2k2RACCBoiyegnAvfmvHMzPDk4PteqpW5rzK3enUQaJ",
  "key4": "2C8kbja9PKsV8Ef9HhkdBc3vs8CWqZypAAxCvnMst5ut6bwCn63RjzEiCmqN3qXDo1NBJobfm5wrvBxW1tJPXwVy",
  "key5": "4SESKrVmRgz3yTYKkv7jWbaMKVv73EJ1gkJnbrf8qqbsQLqCNxV64hMeG5i7tF2LzsDCaFxYFk27ZJK5AJCicd3z",
  "key6": "32sB3QFDbLgaEvCcjzTU9ZQMKFK7GRey2KVQQjFhSsPvYcboyhC9bXgjAQYjs4Cuc5hhvB13RoKTq2rV5a5sQZb8",
  "key7": "mjxtoJBj6Ef4UNpXyWCGEamniSWjfps276NfrnGiqEYKVCXXkef1mCfsHtxKb4vdURSrav1cMVNTiV3rtiYLfnN",
  "key8": "2UnjC79z9ghWPzyyQPnbF94oaiLvoPK3pjrKGkpcA9ruKbGoUaEbHAky5xkjnnUoEYL3jb6iu3BPbcGpVVQSPrCx",
  "key9": "EciM12jBF1PQjxgpxvsRvfiYUzj9QSQSyrwRuXjrdtXpLSnrPvAy3K5HDbMPN2PvLvippWYRoD3J2reea7u6s2j",
  "key10": "5aDRrb2ARmrUizvdRRTYzAVpVzdyCZ8qzZfMQx1E3hjd7sSL1RqR9ckcsmzsD3qrCbCaFrk87YSawaUferqKX8Fe",
  "key11": "2fhrZTR7nZhex6kYHDRe4KPff9THuGcSknYumqDHxSneHqUXhMhKDeTqYLSQdk8GzjcLw2ZL6omTKJFdi3pzSAQk",
  "key12": "sPWHck7NCXerH6aZSqrDRXqVAztmgGMtqQxvyqXFETGDiH7zrDxXtKUuLSAQt6ivkTtMGLmtuHg8ZiHxZhbgFpm",
  "key13": "36Hwg47QuwxAmLB4wS91Xoc8FqiayYQYBzb2RNDpgJ5WLtRxPDGLdMfw2RFrz71Qrj6SQYETTSchhxi7BrmecYuj",
  "key14": "4MssroBXov4oHAyusFv9V6Zf1n6bwNd8Xz6H2w6oYmpG1ZnAPEjpB3hcjndHxqtjE33UCfAwRM7SxmkLgvxstKmX",
  "key15": "2hbTNPtcoajDdoKKFCyPHPtve8QnDKzNUXrb7Dwg8Giubf4dmhF99FPeZfx6cDCooUYQBoSCdGVLYpoJ9NLksDid",
  "key16": "4CebMPLkz7Cno41qH29yebc4izXRHLPfHEuEpHH7psaETketLeBJHApY5xQqa7BRcD5DJmhwFxxVdLjxTD1TgCAr",
  "key17": "4mcYF87BvhsRsvhhE7ZQSEuS63UvKPUbNgvzDzEn36vyZ3n4pJRgXEgYzgzuuWGGLf76BQftXUW2YpGdRhyX4USb",
  "key18": "2Z9sF66NDntxqqyBsmxtHPQxXqy3aNMRhyQe3JCzTcyycs7Fdh6jv3n1J8xv2VMsuioATi6XkJESxrmrh9nvqKxj",
  "key19": "2vNtqNH2apkUTMFc6f34JUd2F1XFb77hVoh2voWt9hFT1KXAn3LdJjKnkR58wAsFHB7h6PTubDqc2NBwHhTaXs3L",
  "key20": "4QeZ8RXvcwxSLGNaFTHPA94q3gtzGmNebdsNQr3EW7rifpVtTLbCnKtbDqn8e73dLWFHPsQziRq5zXM5Q7C4cjyS",
  "key21": "3aF5mAwHv9tQEbMMYvPfrgHBipSsPvRs2JmFiiitfWKT1rDJGiTzEKa7PA2kMmkWN9A6hyQTgMEeorR3KzbLf8wj",
  "key22": "45psctnWpDC9f2vsqxqjMo125EjYz89xUdCwtky4Bs7QRv8GhfNuGCZJzgj3zQHz2WBuSbjDUjpWfibf27HL1n5r",
  "key23": "hSf7pD6AJm3ehVStPF9FmXUNnNNSKxPyzG5o3KCAQyQ3pKBVoShAXWdugqVF8mSYBtXtsvMoBvPa2hNZNaK9Jg5",
  "key24": "4mAvLyPL8av36UYQJrQtW4fQkavS5dog3JvyNeoGdjF9rMC9e7FSVSCTmhC684RCvWUEoCWthofRZU593SjeyiTf",
  "key25": "4eTN1tvnp2D33L1hcnn5RcWWxhBTRpDyvJXVWFrb2dLSY5bacuceoNksrDkHWb9mDRrcYKpdwcruzXsE4SYeAQvX",
  "key26": "5kJwydBkzevi7ny8eHzNL5bXJoku7TV8b9Xt3xozYNxnqiibJg6Lx7jU8gVv47EKhvoJ6KgoSN3mmg7eVLVZ6MbC",
  "key27": "5DQP7QnV6nZryUh87p3fK7zZHTw6kGdvxLmcQm146PtAyV5fgueoRoqsH5gF7cX37i5WU4qAdu8CXAnArTQ2QPo9",
  "key28": "48zJWBcEGcTfBE8N6fD9ybA5p5i3PhoRQLUZVWbyJHp4av4wrUAtZHvJPbRcGiqJuQDh7Zhvsu4WDXcCn5brQTsS",
  "key29": "2M6h4yH7WkR31VpJYH4hC4XaiyzrNJnKF51sMxj81ivAKQi1AkHjjyYmYMM2Zf4UP6qsi1fUZnMp3U5oH1WojQmb",
  "key30": "67peqbEHcvwv4EdfpGHUC3xd3r4ugkvvVdC7noJo3bq6WCm4rR6VugeWNqdVpnNvgDcTpG8ZxDg4WuaUqYthpuLu",
  "key31": "5CNRTJtSAZbLaeibTx1eDHjjbKkFgb291KapYDxyaicMBVGT3ZE48kLVDnMANrLVCgfYC53AUyiNCZtsmopNfdWP",
  "key32": "WmbVg5J2MyCNSKE16XAxQonUKSqYeYGNm2pzWUFKDC5yrsLGFcop4AUUD43o6qM8L4CCk9PnBAJM2eiix1vt52K",
  "key33": "okojxP8ATa8u2d4ZfbYHrQJJCkHdz3tykBiw6AvM6Jstczcb79X9RqKTCaKGKVHGzA4fqkDc8rKkEbYwWuDt3xJ",
  "key34": "46YxFZGGtYqjtXYX9zhygmXn2HKZVgUP3nqhJKoge3X9wiHdY9vYdMqcyezdvPLFvxCB5xiCXdPdmupVRmx8tEci",
  "key35": "2GycmMfxPdK3JjoNgrgyysZekpSCHvsH8yYSHGQfFdWeHb46s4xwAyzK4277dRpYBauZjhgohaqdCUgpiwYJuZeH",
  "key36": "5fqL2E25CiaWtLyAcyaEACNwG2mUAzdDpXQ6sinzhK3yDFFpcdidEmJAuMNTwB9JELU75i2p75WQj4tds8Rn49hq",
  "key37": "Kox1Ysi8u7hadtG7cbuSM7tQ4pkKrpZqjT6GFBKyf9FsbnsLjrYRH96mQ4pFCRFtNRQe6ewAAEFw9ovzWajZcVB",
  "key38": "31dUYwJjLpD6YGLw7HZRMrsyFYTJikFfGQUHZs3GEHwL48cx7Mi3VcFV5NiqZJE7zFg5eQfantVvSiE51aiYQoBP",
  "key39": "4yFvcYe4szFH2zbnJ64yyQUtTNsmD9zkw28jivJHXCk4vG4t7euWwuNJ5tbs2oWw1GAzxgxVrqtLyTaSTZB2USy2"
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
