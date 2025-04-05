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
    "26nHzCynRxh5c25bTifyn33DB4RqqM5nURRgZxv3rg6eXnoRKzy9KJZcMCDhKBYzapEi6daBtQvxw2QjqKYz6Do4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z3mzyWEtnLwHznvM7WgGUf8NPsa83aCgdgayYQ8SbGCvdYUNDH9U25UFK8UeKGJurfQGuZyxPrdV5sqYj9nj9M3",
  "key1": "2vnjSvccY1vBBEVPm42zxrm94SqDLwSNrrWKiwp2fyw9be1Rxp8CQMxG6wh9oUYx5cApBXLDHK4s4SenQU6ofSxY",
  "key2": "46EVmqh1svvY6nkEwgFZeG2rwrXx5TEB3oWtBsJZAXoYjUNYUr3tVWT6ZpUktb1m7VjS9GEvE9ByJsdsQvjnPwfq",
  "key3": "WLPvoXBwiiLuRea8a328voqLWJmHRvrm9UcdTJaRoQWtnYhtnUR44ahbwyturJWYpXX8aJ3xYUvbX9KccCGNLVe",
  "key4": "3RNSAZEf3VGEdUUThvZuYYtLjYPJoLj8LKdAnGCKZcmNDnau5RftzrKKtzzUAajjsvanc6Yu3sW37KTUz3FHJ8ir",
  "key5": "4m7VSEVX9NzAT4QPKnU6WGyQDmaqMmt31hgBFpFcLyTwGisbF1MZZxxAVdB1VUu29qf76AfKc7UBT2xEEsxQVViM",
  "key6": "4M1By6A24k116MXHecEkoCT9jjP5Xu6jCxJxpL79yhPj5CQDGkpPkPRz6ayKvFubdWNJof1iU4isbvoC4JBsqSvb",
  "key7": "BeB6TF68x4zYjeosKKqgvp82MA3sKRfK7CaZoNCPVUpgZeTUWx6RKzGx2sufoDudtXVdDgdQzUdQ6QzAQXiStoh",
  "key8": "2X8g7Z4eJyqswnHUPr8nCycagkfyAyYFgQBLbfsy7GasdwR7ueHWwEF5bJgRiGPYbb25mohSRYre4coNMm76YGtF",
  "key9": "2eWKm4fBShp93v3p7qosJRuJq3EfbeHa2A9qkC84rsjosBSzuQCdpWqtoj2Pi5ZsKhvJn2uzQZ8WS18mk6dP2xbu",
  "key10": "3HkxdfN9wAW3PaJss8dQQPCP1YprrHcCASu9jFVhrD5GTKbhztccnMe8D6HgBxLb7uBb1NGeUs25HxQvGHSfgYCa",
  "key11": "3qrxvroaJcwdG5yPNaQ7eREMZYtbLnt62ZJAf73NDLtJ83WQiUEgszsPK326jRVBLV7xZeXAMqnrqGKbAXTvztGR",
  "key12": "2B34ETLJ2KCZrdn5VsReRtRbgVchHJGbyiYU6gt6fr2yoPu43xg9nx6Md6JLvgYbTGgDT4DcAJXbYuyYzw7Ykd1g",
  "key13": "2dgELbhdmdYxCY4Hs5X1AdewMD3SUAp6nkHJQ2kremHfwr2F4YfRm8cT7Up1DkYHaG7NpymH6wmxqUpHT4PBxcZz",
  "key14": "32kuzkMe9oLpbLZhSHe9zMcefWWggoFN4MYKSxD1KZ8yrUF4jtWMYa1tAH1jgZ3rT9CayPNWgWsrrySxfDiJkL2U",
  "key15": "HLWT4X1EHMccE1Cf65yiTaYSEqDZNLQeedmEjXLmqmtyn9AMaRCEQUHhKXcSVqDNcyZy9BDgNsKmu5Rmk2gzTPb",
  "key16": "58toLXnDiWeCQJJqvpay2SxMHVJNXMmQ1ojJ3PKhaRZ7Le1LnqCcvry78Ac6v2LANQChwbma4QGoRwyNbZDytRU2",
  "key17": "485vG4sNtHFs9ZaEj9jLiakHs2Fx2mc6ecCiVcn5GoveugRFFFYyPUydcLk3G8dADxD7FKDWJ17phkJswWmZ6YKT",
  "key18": "53UWvYNm7T9GrE1ajhajmdYPhYcX9wQzFMBdTS5aaKaruJV7go3aiPHwp7bNsAUoedLNEQ8ehiDxNFg4THD18Cqd",
  "key19": "47vDpqGqBhV5nsds5s5CdzWUVrjZSiyfA8vnEjTSMecfSjmnPAr3QoA1cbuZiFsKDCeQbnsYTv4rJAYijwSdvCBT",
  "key20": "4hHbjxsvKcx29zrvsFjTnK6cDV8gQNawNfNDEmoYwectbpSKS5SxvmSCtZY4pnvPyYaUuLmKhGtGeC1P91TmkdFD",
  "key21": "51pzLUor4UjwZaX3W7wPfJVDmKoTyL7LLnJ4tT4iDFRDmQrsCcW8q4npjgFkWZbjvLpcX9JUfuZ5JZ3bmVzZhw4z",
  "key22": "3DhnMRZ4zAdEPyZCusa3QJTKCzUC5D1z9WRJyquDk9A3yEaWMWCxFkP2hfR5J98N11xhK2HSXpbGBqQpxU4YF95V",
  "key23": "4oqxB7UcMrCoSwpzRjLFvLTxDzGQUAMdUq5qFHvQUgk43yn28yE6FqpZsgHWCsgpxW7nXr42TMRTGqmt4gqN4TB1",
  "key24": "2q4evgtfK1p6Qq2nXEbJcxXHHhgg554wFDVTBy7oV6pk39ywAqS7DSYuacK2Mpir3vRUrH23FoiX9BCz7RM2yNEG",
  "key25": "5rNiHPrF1b9RTt9qHeGNXQau1nVAmXF8y5MqCfNp4sEY2APQBYZEiowAmmZgs8MBpcnaPWZGKuyFwz5USA8sbSZF",
  "key26": "4X5Ec9B1THVziZs4WdtuPSS1nyFZA9jwSYtc8Js1FKtCeRTc9DJ6iAXYZoAZjtDUM7Ehyq6DpPFCJke1trZX6wXN",
  "key27": "EGXP3oKcT16BfsMDF3BpRZXcNeib4VZrEWZ8rfcADCG15HxJRT7tSy4s1TZ2Gi3Kj6U8WXRWvHto6xuFk5fKx77",
  "key28": "2jLcmzwcFGssquo8UckBsyHwtKqSPpMrGmXg4CQazMzPiTfY8zXAWXmVWWruDPgDBRZB6SEgA3chWKWNaxT55EbK",
  "key29": "2L2TwPxk5sZphUxbpS4bJ5G9XsWxs1azDJ3HCgHLuoEwr37jiNw3psFwTgrNUSvJdWsR3vtDpAYSLrF1CB9GFAbw",
  "key30": "5QXrYkmmJHTXEqgmR7g2zWf1tZWwWiZ3RrJkxo9kEKF2jrimtjoDUGwQPV8ZcJRAYkVaWdMdFes4SM7KPrUKb3m3",
  "key31": "yfWrrPjik8iNiA5dodERngPC8TyrVE6Uk8q1VSrjM3RBEKszEkfM4TVUjGZAnJHKkk3ouUggZ6eKb73sJsJ2qCR",
  "key32": "3PhwkWN46ddQnMozirvEmhUPTqUQVbkrgCDgRxNvx1fd9WSMSLFH1irwP8j9dfaqCghzFUmPRwZyuQD5pEE2iH1Z",
  "key33": "2cDZrF241oLfrRhvdaV1yD3mKYVcjjMsvefDB7rmS4kseF1JMKoPUfghYeh51cDk59Q8KfW4zqo7kAR8r4qq2nZQ",
  "key34": "2GJh5hj5P85NWu6pzQ3UFutGBHPcPK7ZSvY6zw97hr1j1g2YD8av8FduoYJMzdNEsdTqDm1ynBEZ5pzYKRy5U8Dz",
  "key35": "3RkKdhjfc75JLKraqzs9sksvny9Yi5RmysGgNp4jyZW5MKUEeWtt4Fjhwp8aFKuc6zinW1CGRGWrb5yEk8KUp9HS",
  "key36": "5XrYxcYLs93ZcxUPFX2cYq7bjJkiZSogLH7rgez2VJKEShLY3gaQFGvbVE5crXNRfLWic51uhx5TQawtwF3dDusK"
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
