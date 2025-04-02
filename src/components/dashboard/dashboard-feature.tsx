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
    "3Gj9nq7QSX8w2PFwjJcq8pJiNJnm8Qka7oQDVXhqsSxWMRUgvuRjGaspxX2hPM7Z9rPxnjQtCMWJxcXLv8PTvVY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38grJEuwPR9KeJjQ39eGKmw7EuDHNi8TrZtcQvuczsZ3bposBncFwH4ATaUxvCgr9xAfWpLjy3g2u8K3BYMNAbR8",
  "key1": "4wViCZH5P1taCwWrudvEZugQPVhawJvstMgj7tfZ5Gae9bab8XnVVSQJJ5SMuo3AujhZqyQegbZvF4tVReJXDPWX",
  "key2": "VG5Utvf4gPHeGuPPFK2QYA5hdnTXVBtkDRonLu4nqY3BHhrsuPHzYKMp7gRZL1Fzq4fegXishVdUprAX27w8evZ",
  "key3": "4JwuuEeGaPvELdWxYf8ry994tqFh6wF3txggUQcysNfADaKHcATJwxBG3wiQuHhx69LXE6Yk5Vbn58Pjtwsvy6dv",
  "key4": "3U3htTodZyK84zQWWg8ud5yZ2HJVbciNneviaYbEP3UFjDStdmQ9FprCoub23zfUazbkzC8a3E6DojwqRpQQ6CPz",
  "key5": "4HUxJbH8UvruV43zttu8L5XR4x8977wZfgkh35AvUzgyaRH3R6wUfnSbeXu3pxZrJZFXKbL1MUy8mXyH1g4NMx38",
  "key6": "5ha7GgdvxrV7WzLwHDppwvayUbhXsjxhwfQHAqdsMRx72GzgunFMrQKZPFnCJEiV5NvvtvKq2GbudR9tm39tnr5a",
  "key7": "3uKsJZ9VNPBLJfyY6ktTEcXyhCK2wBWuKy1cW3dK49rWDsh5fMechScTz49CvbNg27ZoYSorxmHBz2f9NjVSLEF3",
  "key8": "3brS5C4zVSa2qxF1onCvuZwsYDQCV2P2b7PWVRntn8eGNb3pipx2PbA3YZUKAvDp849M7uUbE9o4WuiGHTDMF5qS",
  "key9": "3tgUAKHUrCXjB71ZRu2cbwHfcsbgmW8RL4hBN6gZFyXYT7eivjXPWoyRbcnN28muhjFczBBEK7TQEXji1Q5x1Lic",
  "key10": "2168vuM9Lna1cE1sxWWaRafKi5XbZ4VFxRAUpd1PED6FAFCsJsJgBVjE1N5r9LmmNRioK7vBmxddwPZYW9F7BS5L",
  "key11": "3AjhBvdm1uNE1FXpEoMA4a3Z7iAb4ctoRXsL1bKnH3PkrC6X6JBdBqutPW3dfzD8Q445JFuVquqAQLdAQubfgzKp",
  "key12": "2xPG39Zt3SxHVxghpgW1ooJhhyUYtbTgY6pAL8oH1yxcpD5TvKtBACzU5TqgVHrBT2LXBVM48XDPCjAZrXQHqUrz",
  "key13": "5QSwNc3onf23abDEsxnLV7YzZGRimEjdmbKgmJKBaN4w62rdy7SfPZePhdsb4zjEZsiSXDqzeYChcjCDw3HnZFrx",
  "key14": "5Shx2bZTZ39Xhj42BReKheqr6SYm6tLXeRuLnzKMBm6QaxxFM4rGVjU1DDYHDBa6zTLe6uGC4RSTBqEWi43kts9j",
  "key15": "5vnkE4rVVrntvur5Dfbh6M6mZxWY4DLJ2PqWhut9qb5ubEYJBqHG5c8ZGB2uaqhz8eSfgHqmK73AjNuuMphyoUh9",
  "key16": "FQkoaMAG6PWRhWPR1bTLU8kaYkpGquQxJAQS8FUAZW7YygG3MtneMXnrFFoxyad17ki71kiFep3gF2Huq9iYu78",
  "key17": "2gBmWMHvveLTGoXTovVaJnkcWpssfvnxPh5FC4G9HXRPFKpEMStU9jFQzYZQKU3mpyHLLRSyK5cZZMH9JLVrssyw",
  "key18": "2fTN4wbrGbftdXgm6nACRYBQDWoTgoU3bkRne5QRXH1L2Egn54FA1J2hUDaMeU1UuBvU7UQYiFBkT24aaHmfZJR8",
  "key19": "q6VG5G3inUcjc2HHqLHJsciQEMMBx5bqTvz5m4PJv8PzsQunw51wX9EFs5maHmXq2ypD4Qag5TzcibUtgw91qfW",
  "key20": "4NbUAZ482ei1QrayPYwR44z4Keo2sVDXfBBrHK9VbmX8vRx2RhdanJp87Lv6DdiHcbRSKgE3bs7U7kxkiUyTxo1H",
  "key21": "5irD4hrkAC3tUoENdFAmLtwM29eWaScHttwzacEPLowSE1t6W19rrsd5PbNL4VvE6VsTWZTSyAaSvV1pzEdDsDx7",
  "key22": "2KkBphrcRYdF6LBqAs3oNXqDq7cnrBJbALkcfmdqK6LxzqYRw2fVVRFXspUVPMufaCWKDAdzFrbQUf9579opdGCa",
  "key23": "YNDoDUADTuTH6MFUZYoBYp117Cr2vE4N8A2Y8rKRnErWAQk8o19pqg9QKSRPc9eT37KUXEFyq23N5KwUhDVtJvp",
  "key24": "GQfnKWMvNGqmi7Btdqr2venvZxLGMFyziGbSVJ1XfbXdPdnusRakuYt3mkyWLsjxLwSk84C2m3N3vTLdy2FGKB1",
  "key25": "4cJQzgBBoD2kduJ6GJnbZkLubY3uYv5qknDWCujZ1V2uj9VgGwhC8BM6cUZKbTMTfWND4ueiYDGiKR1oVKqarNyD",
  "key26": "JWt5QuxRZ9C58xMA2iarEM2CWqAtXwswdEvGW6dpeGxj1JNBxQbPxwuk5AEtZYctBBZMc6yn5LX3JsSQXzXRjeD",
  "key27": "4JTRdPEz7aiUkUJ1c4jRK2seF1hS3rwKotHgtwLDE4NzmzVkLdW8QkmmKU96saWVuXqDyysqutn8fhG2WhoJj5s8",
  "key28": "2ywsVX4e5A6JLxNCbPqjjDoLgv9s1wqTH1zCns5xqh6JjxjewKTSWKBgJqVgu4Tj3gES3g4Fhmp8NEWSyKFz7ie3",
  "key29": "4go3YTNGmjCDMA1A6CGXKdT2r67ETdau2Qzs2zHzDS2rCSQfuzkDUYVUUyt447x2pidDvRnVd8hCpouCFsG8rGHi",
  "key30": "5d6D35HWc193MpUunKnuVBKGNEQUbBdz3LHhPosAKieZpDTLFLnUpmYzW1CdsxiyWetqGxXb6UES4TKpvF4a4Qk8",
  "key31": "q3JRmzMJpgGK852Rgbzq5vo63c9Gic8taasLBCr94464KFwoVRYkiPbeKpujALhUSUcpFhFH88kJKTUFptqA1je",
  "key32": "2QRToXUtbf6pvQMxMc2uwWCZpnE6fxiXVVn6SVqWD1dkaYgZdMsebX2XcmmTdarrD9nzMvLmhXKPE4ZZMpwpTkJk",
  "key33": "4XfdPHFRm1VaLwGy2QvuV7t23e3EVwc9skJ8ZLoCMkWWpnW5qHD2QVg4MWW5gh1PQF8bPQMJAYKGschC9SAoYVHt",
  "key34": "3kXizUkXvpazk6FdhresMUSiBVWnWhvydE7cGbVFqGipBrfxKEqomesceSYLRG2bHz1Rxqv7zxnYynedP9e1p2ZS",
  "key35": "4J6fc4jYHKqWKEn3tHMLsydkFCZjY7vvXnwUQsWhdxcSghJvDqpvXwNNkLBnGcDovxumknZcXSKFXjxkGxvYHzuM",
  "key36": "oSqRzTEQyD9xDmmqY767VJ3LQ3ybK3DryCQZHi9VbNNkBiCRRgKJhk1uxoDqkWVaDtL5vGDLs51Ww7BpxTj9jQE",
  "key37": "4riU4nt4oYENsrwKiDUSuu54uzFa2WFTA7b4QE6sZ2caWTxME2P4fYCqSnZU1qv4bLFazrDcJggoWKeJMJm5pcev",
  "key38": "4rRP461Fs1hXyCFQigZArCfWrEUpyjifzrDn1jG2ZztgTVmjyzi7KayZBLswynaLHy8S3etTWiBdVcSsViHVvgzR",
  "key39": "429AvEFUHjWqFZ2uuNuMXTSvjMzawFEK8bNwiWk7yYLpBbQYsuaeWctNiZuFhsXCn4YuXCgs2SooFs3hZb6UUXmP",
  "key40": "3H7tQihX7snrrJVEMyZ3DcR5v3yBL1BkSYpqHRmMSsdyu4aRFBWprH1rfa25RnGaU4BKsWaqth7MRpNpfsPsfiqv"
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
