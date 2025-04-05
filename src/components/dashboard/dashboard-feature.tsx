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
    "4Ba8XVAKeomPmyfkGFsTM4LrtxASd6NNC9YZThRvSDaXqRsbAirkHyrp9ipfqCU8UYRdsoRutVwWTDCK3bZX6Ku9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M2zAHGf8PxqS8rfThHBYa6YMTBFfXbtKfXLAN6ik1Hcxyhz84GV8rqnXaa2iMWdZVVwtqvWyecjD8pAzoE5mqgH",
  "key1": "3LmZ6QQAVf54VsoYQ3xNNpQFa1aPiDS48ezJqnrPmam59RpVBfXpu9doF3xieE1myB641vthSdJQihWYFPH6FvCJ",
  "key2": "juDhKni19tCGGQegt5esypKyLHpUm2cCG7yiX9zXLKZr5NDfumnomNbRCf85u849VwSTaNAchFcG3mdKfSds2an",
  "key3": "54D85XbfCY5VhdDXgpRJ5VAMo1imB5pL81BALs1Q6kpLueiD9JguZP9ZjgaNhJNhJUBDB6Q59d8e1YwJq9TjwXpN",
  "key4": "55MNSSqLMGKo9C7cWoRpLxvgkWzfpicu5WiUQpCbETe35VAe3bairBgE4xFsjjF6gT7F1eK8VSEAP8FpXd6NT9ha",
  "key5": "3VvEKBJvCUDRWpHA5NfkiLsq1URhURmpTKtEaCZ8ib7Tdhh7NDWpRFrRVJAVnN1GE4wtD5Mo95txzru5NZxTQ2nP",
  "key6": "3AGirHGrQygM7WxgmUraz6rNUGYrqZPpAchEawrVWF1hsLmr56rkPan6kyL2ynjhYi6jut9fmEtv8xRRS1AXtwGP",
  "key7": "4JE51aY8jzBtob47GNuxoiNnXGtgKmiMZLhdszHMgMvsJebCra9XCsZjr6aNLg8kxggZYCc7gEKo3GtRUZbvGAW6",
  "key8": "3SDKGZjRfU4yTZoL9p14v9RMrYLic6R2aEJW7wsQ754UjTTQVjMr1wiXKybDgAhKUWhR9p9h1Tx7LQE9L6WF61yL",
  "key9": "3Gnc42omspFpNU8Cc9UBXuFxj3ojLfL5c7EdJ8eeBrZYF31FnR5w6XHXtsYM3U9uSsXXt8Hmzz7aXD6eTWnuXdBE",
  "key10": "3KwoKKDRRWGbZFgk7FAnSjKYYmKFQH5y4mFmPUCrsDhSeB1VYSncRr9xVwxaK39hpkVohMzNpsebkAzULunMKEcL",
  "key11": "9J2X5Srkk7xnyNESXx1Rh52fB2nDnQATgkRae9iyjq6Sq6Wz5gKat6va3eLHpp7DHZpN9AngjrwQPuBRp9FiVoy",
  "key12": "2m81nrPQT85o3gchHnu25dWv1ERnRtq4DomXJTnHPJ7tQi61xRuJigQwCv2av7h9xYAhZW3bok1qCrVqMW9z3C6D",
  "key13": "3iXPUWaD1cbNFFXWZF1dLew3h9JQRX83XTusDsEKxG4Z8hvoFh4ugwhBYRqSE1UYynViFRaJ6gG1eKoLB8YnaWnn",
  "key14": "4t6iNaZGM5FpfdzBbb24CXadLACQMXwKGQYkyNV4qoT8XgduuYSoTUSW8S487VTZWdcVB1WGZxhZiH9LCbLKDmRY",
  "key15": "vnJui4RQWzqoMyDagu2Wg6TBVRcAaQkznPdhfaQxvMR5kUmrSN7cppTcTw6P9gok5k7cDjSooub96qoDhcpCsVn",
  "key16": "qj4Tvj8Sh9eP2vfNqCtBQKGS3jWSCEENjkHd3X9dMVi7EDVeGUkugTgAYRJxX64HJkjhhuEr1snYGPhdbEpVc7x",
  "key17": "5b4qmBn2VGvoNwivokXuVtgasvqpmGudXEp7BFmM1ww3wyq1QcQJ4WNsB4bEE5ny6rqvHi9TNewz2mkKa4zQ7hya",
  "key18": "5e41GHaLTmsG3j9z6icgGBTSbmRP4YDsX7dJ1rDzE4r2kyaaovh1b47X4eLwKxBJmqjp1gVPk9AafC5YPZiUssRB",
  "key19": "3urcvKhhbvLQHsN2RzP6DYzgYewXa8ToJADMgHWJZ6AL395JPRQ6KQRPnKgou9jffMKi3NA2CZk6TafUjBPcda5n",
  "key20": "2995xMEc2rwzdd7NxVDUigpk9GQayzFF5XD4rsP3LBjgJbAfUb6g6ycxSXnYaYbrsUU7Pj8c8DHyEk5WwnVh12Xc",
  "key21": "MoVUWQWQFefz1ViQE5v75J7n2NTA8vS2eLXgFpVe3DFNtf6Ly4YBoi51ho8E9kRK1wkA2kU3QRxKfTXtZeowjoC",
  "key22": "2Fkm29jTH6Mn1QXccdRYRJ1AcRpVW9yUeu98yiGEZfGbj5EUszETY25rC8pnrzCjLx6ctHKCxZ14HmNJ3XhEEz2P",
  "key23": "XdW4oiR9eaQucKmbtQoeoeCo8n4Zk4Ld69GSic7DMQ8XQvMZ3MidvtDwqBoTXo31G57oT7MYVg5Ne7tw32DNprC",
  "key24": "1Fii5q4pQt374YCgcs69j4dgUZuTDxMqya7g2wy45ix77rdbw875caRHh9HHuuPuN5Qk9aG4sczxjajQYJ7nkm6",
  "key25": "4D8hUk2pTEZYvzMwUFSB7dgbtGiMYgN2xomZJiaXZB6SbfmHYGkt6HMHc31Uyk6KrqkpzsK1QKry5vi2Aunx22QT",
  "key26": "3rAtkqgrL8wuSFFhM3ftbQGtB57EJbhsAKzz7nypqh524C9XvkZqmL61FLvxwo4Ei2WZ3bdXuXEMLy8NeaphdXix",
  "key27": "3VGy1gKGoFEDGzQxgqzdTM4kydHwEEpubP2aBJNRVBBes9Ud1otUeFffmx3U7zdZ7UwAUc2adhApJHqoNPskwX6a",
  "key28": "2shzATUAScAiL54LGBhecYZm5rH8AzFmCD6W3AkmhnZ9gy9jeSFCqv2eSj9jFoYgGxtZa7p135RBdHRGf6LGwmGP",
  "key29": "4JtcVBHo63FnKgzvn2vg2eKfns57XxAjvAeAJkrG1PTb3omr5kiMbNVVhuft6GYi9zFGzooSn5f5zbtXYccuH1Vj",
  "key30": "61HqCQ9DYRoB5183brTcSYUaSGTcTnQZXXtxU9hsv3WGT8h2pqrPtbSA7B9hWNpJjXEYog7vdNbGz7QCGPUVaAJH"
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
