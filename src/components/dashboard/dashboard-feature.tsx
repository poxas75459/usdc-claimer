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
    "2tx3PkyfdzQv2J2SsXncBfjP1WdDXY44daaVcAvq8wA6iSnoVuEZ9dt6XJwRHeTWHvQZJeP9MfYvPjXXE9DyxbLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N4R8rmu9GKKnZXoAiehSqAudAgejiNo6oVAnSEfbjpSn3xhQmJXUhvWsc8hF4dzXuWQWAq6j2XURdfypxchy7mj",
  "key1": "4CgscYQnq6z9rzx7hizFeWtFR6MVxWH3DnkBWaKRegzwvp1611aHMQKdUPhLEaNiFyh1B71AqqpRd8JQiunnAHbo",
  "key2": "4Rnn8k4SYcFSWb4h71B7mKUyAbisqmp851a2W6omuyh13vkf7T5EEbnZqvFPz3G2cMEV53iXxhAwwc5yVordaFDr",
  "key3": "3opHjcMRRDLEekwD5huDpz1bB8z2RW7mMozEuciU6R8Vrj2Br14BEeQ13BwTY8339WRMNmw7ETtiiddEYERavpip",
  "key4": "419bEXqXWcuVJjza4XxjWPk1ferAnpvjfrb7s75k1qzQUsQbmkfZuh4G1mzczbBa5yauLJQjnQcbN38GZQqKB9Ce",
  "key5": "4PU8hSkDziunBykUh15JaS8P2nCkHaXmfgq6jhYNqbnSdGn5QCvKAwbUBd7JVxwZdKJCMT8ZNhAJxBbe79NDYh9g",
  "key6": "34f5dGDWi953mcicXi1oCfQM7hSGBidy32W4C433pGCQPE4La7dBeJmzBbhH8ge6cftZH5pUNWsiTwhL3wHcer84",
  "key7": "5UiTxyX2Lj5vM6p5VN8YfS5BEU8tkBnCKPcvogazCRyYQQa2kVXzYpkv3wC3hZFcaX3Z6EehTQhhwn3Z9q5SAo21",
  "key8": "5AB4iVoJ8aKNytcGmuUQGSYoq5yumgmknMmYrFuRhmv8MdJeAWXgi678FS6xDvu6gYWtHJB7JNiFr9Be1YqmF5HT",
  "key9": "2kpQYXHcNJWDnhvR8aPg8mYtBBSuEmXavXiTWqrU6dTMF5TS26n1ks6ityyPc6Muj1A1qqQnCBBEYs3nM1qKVpTL",
  "key10": "2BtjXfyf6YfvC6eZSABdvTi7Hpx1WKGBrZJ3jdY34hWcPMCFsuu2e32FpP8eFqpbvdAhBqKMuV8wXpRTFzJBkUqG",
  "key11": "wABCC1NJUazLiN6LKqvUuXCVGaDRLdxXevVrMECmyPfqZw7RVMKRLbBaVLKf5LufgUwjq7RWXgKnSoyFVYPkJ6W",
  "key12": "627MXZTg3NCcjNbCKHgKzK5Ye7NmCaAedEvwjfFYyKy1YX8frLdTjGmWJ5EZtGVrtVvjWHfHMDc9NAyfXiBTBJy4",
  "key13": "61FPJmeEvUuSUNcm9FoXQwbe77TEvCm2Lkbp5JTmM7ZXCgLmejPyqWnrybLSLXZ9cnAGPkJ7w4MXp2ApMnbPMCDK",
  "key14": "66fbqhPdfaFm66ttwMy6rU4rPAH4DQfWsU6iSKkWGBMFsbFtgfipKHMH46eCjwEA3NgDpB8oeaKRVHj4kiCqvsJa",
  "key15": "2buxg2NyNncm2wkuUmwzK7h7i4kSHf5wsUU3SuFnakKveYyWFEtR9HU98UZDPaLtQ4GmH65cTyJ4xXDP32CijZye",
  "key16": "4V4NM5h7hBFHqpqL2UJesYEDCtDPVJ94UprCRPAhp1R9E4QdbaET6uZSwxv41doPPTzPQUJHUWhJmcyw1CjKq8pg",
  "key17": "5fFMSq9mJxtaJFQci6wMH6F6LCjYF6g2L24MCBon8f4KKEQN3xRY5KnjKiJxVH7mviVseJghSRUzdmzcmCBKdwEb",
  "key18": "4tgyj538Bzuj8BWaL6tidesmeNpDphBaMNC1Zj4L1Hb6bX7zSuy5QACsxxducYrCZLfijdJmuHd8LamX26AnpPUx",
  "key19": "1aq9BZwWiCwgduTWC43E4ELE44UQ2yXtLgsb44zZuHMYPEduWyf9FBv9UjcLWRgXFXVXsNGqqFDzPMpo6WareAX",
  "key20": "sLZbvc9si5aUdTxzhE5pMGi3mxbDafZAjMqsC94Upv8oUpuSLLZNKJ26ZxUWozro48o9RuYiQnRgxsK4a2EK71S",
  "key21": "vTKrJqqXsaNUTiejMgWd5P33LtfnJy8nrTSAh6DQYKNA1w71fqdr9YZC2QVWd28Gpis2sj3umAYnPNNHw2oQ9F9",
  "key22": "2fb1tC5g2WHAmjSMP7oSjrjJo3djzEu4rUbdyUoKJStyY6moSfSd2eQ8h8xvyLdAKfxW5jFzzVYpq4ayw5Ezngfj",
  "key23": "4CTXzzixeSV6vqUQUaHvfqSBxB8QxdyUJhB7o8VdvoGeaUcpZ4of5ZGjnc1NsZgDLkN3SwMGv3tk13kMoW8BWyJz",
  "key24": "2o11beiqYWgPUb9EHn7WKUqq5VgZMZh8T3hnAb4oLs9ZM8CeQ2XPENN2xedhCh9uQ2q5kZC8ejQpRkrAevehySVx",
  "key25": "3MXsSD1qg32r78jNeZ5Tf2YG2RrAX4TXvRuoEYgvh3wQ9XTRN5FgzhQioyuxj1x7zLKjXQUmdoToSVta1D1Dj9Xs",
  "key26": "c8t9vkCFKMaLLe6iBGtoj19MGvLqfvtm8c3YZ3ey47MmcWzKt9i4u9XBkg3dHwTCbhUKHKx8Eo1qYM8wQ5UMnKE",
  "key27": "3cEV8vxv4Khg1AaPBkxNKEdf5LognHYj6rJbM7X8jnxobGvdgEQq5tLhvApN3eHX6htdLuiBWsg9uVh96rJbN5Xv",
  "key28": "L6UxUtmqqf1aSM1pU11Pko2Vw7qKtirxGBH9kLu7Mdy95YgB8gLHyQG7hyyEyGYM52NTEtyC3dnnW4U8jyPZ9jQ",
  "key29": "8URDZWoLJfuYnFQMiH6aW6c28sVQ7H9cXGPySSyiP8Fe64tezxPz36xok9g7V1oQgz3mEr69aFCARj8WzMQT9pn",
  "key30": "32QcAGpCqVy14uzj9gU3zFVJohLf8xTAvw1JsaDG2PQyXpoBdjk36FmdyApgVinngF9zVcxZ4RBtwUTSUhQRTibz",
  "key31": "4m8pguzWFnHxaLUmVXwsCYiic4RCW2vzyLq2h3oTo7WL1ySpuE6YttLLErDP9BZc7xKRLZJA5RAfvq7E4b1n6wsv",
  "key32": "5VsN7dfc5MsbTnvkK8PTHL83jVKQbG9T422jHakn2gVTwXmsouZCL3739PiwvDq8gchij9oyzYNT3VT9prxnzfy9",
  "key33": "5UMAztrFEVhwqqmCBpNFFLr2F3TvBvFyCweET4MNF4v3QiMuhV96J1jbB6kS7ZMe18mcxyRRHrAy78zTkcstSmHu",
  "key34": "4k3XJuWTB4caJu6ac63NgZi9NEAz9JgA5BQgRujHQ7de5mELeo5mLxRjR6DiaKC2inqfYnd4eAv7pda554ZeEotJ",
  "key35": "5G11UsG428bQE6PSKt5ZvE8Cf9VFdVAbESn5BeTrsU1s6QNYL4F9GwKS84qo3JawNH1iQQcJjbsobhcbNTgh1W3k",
  "key36": "2gy9uo4GQycQj2nGvCup2e2XA3EXNS58AcocDNLJfxaWYYJkf6e6BZWgWD4p8ud7LHJimxHxzDpvBAYCggHhsPkH",
  "key37": "5PXQNNrbaP3jPHqvBQ4rKgkak3nzFLP94paRfPGLtvMdujYHLtEd2m7GGBsRM51aY8fNrZk3CgbNS2ybRBQxhBHG",
  "key38": "2mxmC81cqBXisY33DCsCUA8RFbhHj6Vz4Bi1gYoZ745HX2D12fbccQmU89dV9KUWx79ANLbyVVqW1Mpv7Y9BEhVx",
  "key39": "3K2qbFEXMTPQT2n2xUzG46nCAQkcmpSs7WScPpHEMXXxTnvV52FFB6ohrS5qxqAdBSH3nPvDcFPftDqniwLb7hJT",
  "key40": "3tLHDHbdn8pHknLCahDpu3RZU1Ya4eMVx5x6a6bagPN9ueynmMvtpLRobvJvjHsuXjvZHAaNoYJNJ4wPymnf7NcF",
  "key41": "2eYHCB8jmiSqQv8G5g8FtmDapVnWYV1DoWq5cC6nj1mX6fAvgJoMopd4JzjDdqVLmJspacJCcZZr7bizhJTjTHi5",
  "key42": "4m4A7miU2dQ7Lsn49ePdef8ctrjAGZvYadvTLMZdfVkgA9n2h3s1QExV1DmgV1wtz3CkX8SCg9GcthndDjUBYdFz",
  "key43": "4nxLAYjTVLWPv11C2dwad2LMHGmbNCWFwTyHPN41WnWjzgh8DDmngcMGs8HntbYvLEfxe6qaq815WRx4h1w6oaWF",
  "key44": "3qTHPFnDKvXqKpy7Kuhf8jW6ia5X1DjTip6xQRsajcYkPwxaf6RkavnCLGdm1Cero5gkKHCHdwn6Sb8MDWSVkAkj",
  "key45": "3hmx6yRxEsGKWvNjvNpqGeZGH686EA7PxBC9Da3dYoXGZMQXNXThBX16iYBzL1g4iw1WGxoikJztmm5fKZnkfCmf",
  "key46": "Rh1ZaZJGjMJgn8YQ8fe5ssiguaW9HC6ZXsND7NiifMLSc5De8NWYyw7qWQFQCfau1vXeLc3ujgWpuYqMebY9Wtw"
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
