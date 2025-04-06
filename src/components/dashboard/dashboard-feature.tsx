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
    "617Mk4gFWE2U4xnXcwiDH5GUiXRze8waoP1M4jHyim21kxVjYUdRE8LyEi7F8v6yiT4RJV6seH4Vf8uVLdnsMACm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26nuXVSTxuXH6ar8z6iUuuvGBydEezt6vMM6N4qEWiu4SPxen72g3fDybSQsT7nxwocDM85sGVHDNLz3YV15aLzp",
  "key1": "5ACBYGKroHomat846fa4LUQcUrESgH5q32WNuvTv8NCDzMPwrsA7GU1NGbWs2KsEjBqWa5jJkQJaepuPdBwGn2Ki",
  "key2": "g1CxiUmrbj4uVfYmUTkZWdN4b7vhEMjmrniNAM6DpJfFEkh8rS2vDmWcVMrJNDqECbw39HChpc1cULxQQitXQ69",
  "key3": "5sEE9Bv3uTwrEWo2zb4QWN8tGH252RzvG5v8HX3ByhRCt9MzYx55u6tRrCvEPKYtmbLBF9wF9p8w27YGyZiVqaHq",
  "key4": "3TGtSCC8u1Mz28YSj9hopGi3ueZppMvJvCNLMyrvZotsuLoMenh3kWZWztxZi4uJkApuNtXDK7AUGxWb5UXHwYK3",
  "key5": "52VJp9YSecVmtxNreQwjFiDnwPvdyHginDCTnkMxKDFqPehUMUAXQWAeyPa5Fuqq34KVQwHo5qMqpR7t2UiN4EvN",
  "key6": "3pBNCJNcj2CeMN7JrHa56Q4HMGUcimW4UiUmQbkzGC6wkbabFGzdaPn2PcRqYzWGJmEkMsL6bRL8zrtFsyRbiUPx",
  "key7": "rZpsPH2Pa1km9BfDjyqn16yEvRtekmEHwB1cjaJE8jFZZosCYbfp7CA7BKf5GFZQc4xosbC49oTV6oMAXqCvHSX",
  "key8": "2TVwTh5JokHpaK3bRMF7sTQGs2LWrEoC6mQVkSc5VsvcFu41M5p63kik2dXjrftDJyc326pnVVczeNB19hntnQD5",
  "key9": "tiy9UacZE1WvFYQ68zH5KzS6aK2Xg5z5mHzNzXhkKqm5mUmwrQd3idKFQEVEbjRnC2KBEQFyV2durriJLmxEevV",
  "key10": "5jUi4irU4XmKNGwdn89oxrxZvuTh4HR3Ckmv7QyAde25WBKjZDQ3yTJnMj6dKb3dMdBoetx3F9aRf1uPuQrg1HLe",
  "key11": "3nJzdidvwabxj6QGxbNdyEUoDts527Z7GvJ49G54VeWchthLgjmD9JgpGpg6KPYN78v72vemtth4wQ5Jh4cTD8L1",
  "key12": "4KHu38qHvXAvmMyRZZhubgxueWn7EDxSyLxPXoz3w84RnuxiwkcKXGAQAEjq3Ms9RjMoUVyjcvG77QvaHEivQsWM",
  "key13": "5jkJJsU1SSMQ28bMRvScwoszY12oxp3NRSBabTLYixE1dm9U3eZD89tUy9u4h9vMwVei9hUSXnAZfSmYDsm51Rs4",
  "key14": "4z6aykdanua8sPoCcdvJMZXjKH1GZgYLx8tfThGrzoaQ2o9f5HXGFDyFXvxsYw6bN36NtUMFYXjdxLxCK5s2U7Ty",
  "key15": "43GTn9p1XPpSKajJDY5uNLiUZEQJek6SMppRwK5MhbVrNYDDeFLmvTGWSJVHRJmFMCJLUFb95buK32ho8bkf6YxT",
  "key16": "2ybNiwEHwGU1GZWU2s5fcME3YWejvHxgxT7Qub7XMmNrX39K6cuPP4LdExoi6PpR6Yzf8BWyssiFymodw3jKmYMi",
  "key17": "5ReaPiVWKNsbKAPTZXYqWnBFi4zBR43h5u82sjPCtjos5n7idWDL5HQJ6p4as35zftrouiKGSyLGqLhv7VqVEg9x",
  "key18": "3Q2JeoHkZWxuVAeqvYDyUBo63r2FL8x6Ught1PZyK7GMuPHfiSFS8D6DC1JJwrBVEMdgAMMiL9sGPCGt1bWj5jNA",
  "key19": "3dqAyZ36pax1X4NXqfc1BteYA8hozrGCuZhJnzhEhDqpFYto4SsCferyHQsDZ8HszrecHPSDUTgkRMA2jQwTM3Cb",
  "key20": "JRQmcGZ7kXhXgLuvmd6Qqifv9fi4P6wHrYSPzFo5kuDG5QVcbaDNg84iamEMbcd86nahUXuKkLUjGU8N2UQVi5F",
  "key21": "4q7x7x5634DWecEFbFLrupEuXWdZTwAyvSSjENwaFNKz2GiHsWPeHjKNb4XzZh7U3onZNjz8LKNcZ8EK1TZiARot",
  "key22": "P4Nax7Kx3g9WquWimELih9jvYtebHeQLHkyW4SEBR32mHNZQRTBWH3xFESkPNpQ3rXAad1CrLPzB8KE1GUQ7j4d",
  "key23": "5tuiq8f6S4wQpZms9z9YMXz5Ua48vdhv3RMVCfkuUTGQBd6vfqqLaixvymcUHTT4td8C6gPi5xNgJizqm45319EY",
  "key24": "5BsrM52tNgD6A9Ggcew7yvx2vfkXoiEsxg6qcGqvdi6hdKZ2tvb4SzGJ2A2Yoma3MdzMPxx6fBkPvEexgLa7kgf1",
  "key25": "4x7YUWWKWKuz2J4nxnd2QsDcRgpczF7YT8WtxdJ7pJsMshsjpF8k8ni7NRjXTN3zNCWe9kskw3cVyktDswtVEpog",
  "key26": "GcooJ95g4UfDJrDxxqYzoj9vqzZEzhpmoTqEJKs64ucXjQEiJBJghSU2m9Exc4VoQCo2PcEJRLLKiFzPyvSgYnj",
  "key27": "x9WjiffXRQWjpPnDtRS6iEEaTcFKLjpoCg2e3DLp47Yvi8X8uW9ZR3wKMr3anxJmvGdeMfvxfbgHex3qjH8S7xS",
  "key28": "3ibCqkJXjQqeAFsTxPL5bZPWMeZftRGyCBYRTcq5PLmVuuhUUWTcd5iVQnQEMBHmyWspNhk5By4E6kdm8KX5agK8",
  "key29": "4LMQsXNHGVkRYZ9EYVWX9gbraqnXu1UyLZB2BQ9GN1wB2EVAsYnNrjebhEwsw2nM5LcDLvkm6aJKvnKpygePRXyT",
  "key30": "4KPS7jaPR4X1Aaggd2LFcRSiCNiiyytig7PhJkGwAazpoy2GHeZH8jaekQnxbeHNy4nzfLUAAxyaoa2wwtBGQT8Q",
  "key31": "5xVbk1sxUH8Z5Woidk9VgQeaGYD2PYaes62i6UZPEvJEfdzVVg1NkrafJawL7wvGJFUPQjWVGFqbCt4uFaDw3Yhq",
  "key32": "6wwUKXbCxLPVrjuYEHx88bHJ4WnoaxQ1FLFuTB9xyE4CrWEhBRfHDhqEAPVB4Udip3xwHYLSVx144uVSFP9NAs1"
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
