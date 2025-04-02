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
    "5FphDt3m6Y24spVBjVFaa5UqFxqESWpP6NCyC1PN68ktP1FxTnpGx32tfEK65TzmqydKxYVzj4ytza9AuAUNxFkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UWAn7n8QKVDXDFAJdMNZEpFKKHDD6ukJ8iYN1YB1j9gABfMG5aKYwjs2YXnJa8D8H96bBzTuWHKykz8BwnTR9nz",
  "key1": "2k9W1nY1MWG7h1bBWscUK8Edti2hXcyRD9aeQZ1d4SoGgLZoPhxYpG6sq39uk2mySSfKQ1TUUXKPGn9s6HtnPdoq",
  "key2": "66XoyEE1sgh7Mdt54q8quuBq1QoAZpTzuLUZKs5sApGH4G87iLC3vtExujmhhSajnzTFmeawJXCZ3Stfbjr1YSkZ",
  "key3": "3v6H9n6oa7SczEwBUdzzxaZUbEE86zMLr32HY3YXYgd1a1FXc184YAJk7Hr9t5bxoEX1puh1bqM3FyW6cffmPxLF",
  "key4": "3NW1TX9xG1Kbbv5DboMtgaJ3XNoKGnyfyaH6DAZ33pxCxViYw2xBu5fyjDhMQrtRmV9EaGGzfiurJXo4eYfjMaL6",
  "key5": "Luw8NptMtA9fvTCqEefk5YfUqnfMqStdrUZqtcM26JYjxzfpC3HKkAYXAMBjKany8GLzivDbp4iSpjThCpgP8RE",
  "key6": "29BaoSdopFzyGof2eQxxAxkhKty4iz7VjrT6P7J7CqXuvKUyAmjgTvVnotDAejFJtxcRxAtLWJqt9f9rUc2qgkRC",
  "key7": "3pWqaJhbKQ1j7w2ckQZAi9EZJmPnt5riJaPya8gZ2eGkcqmoqywLUV7BSSPALnD7nWmD8HazRygoBapuRd2ysNDb",
  "key8": "opWvcirqXXAjKULNXg5FUE5FuMKyU35BgMXcWLQPBg4rqBNgXUZZY2dgBMfx1vCMfa3siwbRTcYhYLgMvCgUqKX",
  "key9": "58P5ngMgpCxeq4ZpCCpDqbMBCCPmGw2he3usrL5xCKf17h2QkPKUYbLHqqDubb5KCmtwUbJmBaDaBpDMPhourrgA",
  "key10": "57Eqn5TVDfdh3TpuNdfmjVm9ZN6uNhWKewVs4eerLMw2pSZXVyKUjqmR9Mr1KiDwAQ9Xe8U1HXxFMLxUdb2Z1DHf",
  "key11": "vQHyKRSzYYo4FAVTffqo5PD8cRWW2rgeriRo5pKeqCuaYnwYv9EXXyA2sBJ17zHap9pTY59XyamBfHbb35r8cn2",
  "key12": "9fKsvAQp9xoi71738Y6LeDZYHg2oTPUiS7kkMJz27nkmBkan5ks9QMXY6UxRDZ6T1NCbyAMwdVgu2y1YCRibfu8",
  "key13": "2nTdVtH82FYXBBDCnzYbaYqTrV2HEuWyWtoxFAt2qiBDbcpE7Zwbig6PKSZ1xLwt3dznLRTBXe8QJKfgB3b41Hum",
  "key14": "4HajuMbPtPfy3FLnTuqXiK6puLUfZ8jUezEi8XWzAL5RYrwKF97CBUcuDSAfbBQ3ed8V8EEvvNeMtKee96LCbr2Q",
  "key15": "2iR7NSFaD3UUvjaCRbz8AGv97mQi5jXa1DUNDavXMTcoigP4cLFSQJxD5QSYrMGb4Xg4Wjetf79F8sGuAVvmUXAR",
  "key16": "3z79Hp32ncfH1mpgN5MKvWwEAfWq4sV2rest7dRTUYHb1pB2J8FxKYhJUqk4VXrQZAicCpRTU5raVsk8jmHFkyqC",
  "key17": "3Fff7CsUTV1cTEhFicHBBB7xpZvUuDva9FwC4T84ZhaoLk8S1XM7SJDiCeXpuCAJzUgB3ypEx6TPMHZ2D9sHMcq9",
  "key18": "3fmApDojmQiGb2dagu3zvsMwfKgNTmvycU1XKwsM7iAYvo4S9m7MbmCquJ68Eb5Qr1GiYSt3qh87Gji83LnW1LTb",
  "key19": "2CcWWte2PkR5CjvBQmEbtkKMnT4whHTrVmEPr1CwR5nenHZWpVcDXjcsJXdqS7xUvJoMqiFt1ham12zSnnf1pchw",
  "key20": "5gAdFfVorajzdeXQ3TQnEJRSyc5xNRSWkwBWU9Sg8DtxtvtwY7Nt4BB4yBxkVtmPy6vPTsCydMqvqpLao9Mz2iSW",
  "key21": "2z7uAZXHy4avcp9r7CUBsq42VzGvEKQgG61mGAMd1kcPEq6B5cYUFJcacgGvZsnPjQ1oAEUW7CYVqXocF9hm7icP",
  "key22": "7CUwURrwyujZtT7TUfj76Svw3BMfbv8coiYzUy2NXYgZSG9HBfYCWGJ7Tz82JYJxJMSG38sYFQDAJgPB7fReebY",
  "key23": "45QYt4vY6NAU479FL1eLZoJCxyUd4q4HyysG6ApBke7qRxgX2n2Y8GZ2324dcfySZ3n2fqiQoV9evLy11SC3dcu8",
  "key24": "4fWvMVQFxJ5hy5Gyz89nnH7oW2DWhXSYG7mxt9wBMwGZMYJaaYVfm6Q4TUFKSLX4ZfXw5re5mQWnYaUdwQLEpoXY",
  "key25": "4gakVXEsmW6zPrFk972zpvBb6HfF4fN5V9owxAYZ5szEakwt2WCR2wdLt3pn1A8o2XZ7XmdbGRsQt14BpXQyx3kE",
  "key26": "4n8KoAb81GyWAWjWj16tKz3ffdTnejJAMa7k61S7rJ9TxGtC9NU4apAPmsekGGj9mKxk13ZHWQMXNSDT4YdXVMhY",
  "key27": "bvjjy5ziMNL3fVuVxV4mxsTWum8GwMG62PMTFU7Xv4QgmHSsM4Rh7wioZdngiTV7gxrAWUkCgoyZoVfCWQWUtz8",
  "key28": "gFVcJWjKsUJVZEWAFE8njKfo7gzVFHVGyjYHDrhZtfbMGcQWWvBreeMxLmFSpkMTJGX6bRd2usC332HitmbhJ9i",
  "key29": "3QjGcq9VzwzfUU6maSewPdA6NbnwkUzbU2e2ZeCELAXmwuJmWTqRQS1DgurxoAKUc8zUpQXCrUhqerVNYbs8RFDi",
  "key30": "xdLyj17QHTTE5sBfaA5fmm9akgxT2L2hQBGoCFwuWkK2Hp7Gc8JTGHYq3bsK53gK6z7zqEvMgZ3SZ8QyVfUqA8L",
  "key31": "2i7w1BuheGwafZ1AtdnYGAR3dpZKy2dQ7h4UrDj98YnuiFsu6KL61VvibujEXfBVaT8JXpikDHUDCTd43mnbX3zg",
  "key32": "4bRbFBw73qZ7vMmmK93PCauYsab6Kyf9KjAWipz2xQbEuE6NtaSdVb5g8AAKywfKLCVMXYDCiosQwonqwZSffxZb",
  "key33": "4mQo3999HFBh7qyTFucyWAytVArsGCjqJnSuAgY1sTvPYySs4fq2gSpQma7xx53y1xNDLcJeVE2DF5ovomHNbU3e",
  "key34": "2hzPWAoAkAbEh5nDKxKFnrfztFBJ5ste5kvM3nDQpXx8tRgPShQhLvXb9zSUstwtgWGpaKpUmzsKHPxoSJ5Zny1g",
  "key35": "3AJokv1EGrHtrp5DtzPrpBWYFjkoQac7hLAwM8XofYkG1mkUp5NeyNeSZpLhpUrw88QBDv9ZqXvLfV123iUAWUwN",
  "key36": "4WMBLktDJCCXfZgfSEzqvySq7CNZfuhdzVLAAuTxu4B5UPLG525pbLcjRQdXrwGsCXa5f6a3yPBo39pfvQWrXydw",
  "key37": "RruQ1knk4Y712yFAhT73dZqoCrVMAZSDB2CGxut9zQBML56BcdKVmzhEDYDCRcB5VudNBGgpRcPU3WKgYnqDjjz",
  "key38": "4eR6RgxunV9YRLQXwtXg8mKkXpk1BMGgFQFCrpxQeEWhhN42g2BWEohETHHE6sNqDCTqCDhdLTdCsVwRwBKhgQYR",
  "key39": "55BpDEMromQrgSG95Gpxu4xc1WTUXCGK9izYJn6oDRuieUL2jGnUykacktGJXNDw5BEu6Dfe9xX2ANdZ54P1uauM",
  "key40": "3V7t12FQZuT6umZVtsC3hQSSJgQoymfQ7Fhvw9DL9JKJ2VVB6zMRh4Lm8JirkygVNM5qZY911dgvrHx8GHtpaPyG"
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
