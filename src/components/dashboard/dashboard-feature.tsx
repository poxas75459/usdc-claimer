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
    "437jXZt31cAPFWBMGfgwQCFXYXvbzeNcfXuEE8EjUPECz3mCxiZGPsZZxbEHSdutZyc6Lt3dXreT5Jv4gF4yapbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NheRhNuJT8HWKhctMe8vQRngXYreNqDrF1saqv3TLtYbLNW12NUsHTn4wRSenrq3PQsZ2k5ii1nKmw17LvPbLEd",
  "key1": "3QZc8nrKNq4RLmLMYjqmNHmv2yDwPzZXKwFK2hk5CZRsPkq8XM9CkvMHVRj11fhRYZDL5vuWjKaqPRscfpLHQhke",
  "key2": "2AfBDPoTHfZaeMJx64KZ32VxV8Tit9J9misJAduUyXxnzsNPQxEo2s8ozrDnK1o1BXZSCZxBQ53vvaHp7HwHf1pK",
  "key3": "4wv2Fi1q38mxvRKXk1CNRK7aeKsMXp84U57o9xQnxsS6ezzwREV81t6zB59VN72umGvaNgVg587hen2XXALKGwp",
  "key4": "5431zDWCTveBjzXWRboYpkE65MoPtNCb2nueZjs4xBDj855vpTDd2RHrVSGc28KXgx9tEvvbTcbfcQrh1UGLNvDD",
  "key5": "4BrNThBPTAdWdfcm4zUFiRkjYMtvTmpYYgmH2srEww6SFFktQwrvW6ByQTWV5hDrqsfCr3BzF6vkDYPNMknMevQh",
  "key6": "56zZDkgX8xZ85Boo7yoK8amZVVysT8fZAqqp9MZfCE9cTfjTNV5XjmXMkMYDsSeKEnc2EuU681DsbhD3Wz38b9bF",
  "key7": "3U1kvGnvh7A1Qj4zZC3kMtK4d6vNkadAQzrVy6sPDNaXp6o8zxvCxkpCSEADtyWnUKyBPhz7PgX2ysJyvD5JAS4e",
  "key8": "3XXYrEGfw2hEp5VFi8R7z7ND5s3htQ8p2tKtoyPKaFrTRT9vSWjiyZmEHCxX5RPGsABeDMgTWL6p5TEHXkTMhYVa",
  "key9": "4hupcTwcjJToETDVLxngmiHTYyLDhc33fmVeRbYbv3or6GWbUNu5Ksp9DseU18FGoxMdmxPbif6XQLHFEJrmahHU",
  "key10": "5ZXFajE3QVr5hUqukyXaFDd4c3wZvpjhuCifDGybN68Xc1nn93AwRknF6KzDfsBCgPnRg1KM8i9QFSTdL7M6YBVv",
  "key11": "UTNCXzgKxmPQ5hHAhCK6gXp2bZF4b2TD86ncXrkZtTBgBXQvZP6L7H6S91NPW3t99rziPin55pKhQqt7RZEgt7K",
  "key12": "5UV24B55RokAPSXFxmJ4f6FqoGcHnakcLMarXHKrZnrbaXZW57mEkY8ikRpW14i8hkyXitgAj4FZbphzuwDNJAHz",
  "key13": "S9Er29iGNix8TWpTQKGCcGiQ4ro4CRWHdq6YQJR92n2RnqwjK1t3RaYAdJvXKU6qxsox94y1yC9jhAacMSZqPJz",
  "key14": "UoRAhmMQzX7nS6jNxJQ9CW9ixe4cFLgZh1YhFzmmdJuKdaGVkdWmeUiM7qmVZLziX6yqdRag4PRMX8F8hHeUALz",
  "key15": "ZmKyXAkKR9Fo8vacfTFLNnciAqeKpfqfKowqfSWGWFS6AH5EppJGWv9z29BZB8FJodD7eisBrA3ABY13xm6aaBt",
  "key16": "4XEqHXWTASUHdrKp8sNZ86xyjR2KAu7U8r2QTEYdEmDpEQ6VL7jud8MVbjfJAALu9xJUznLqr4j1q9c4LarSsngK",
  "key17": "5AzX7kjmyrU9Pv4oSp38G4zD6jpwBLtEBwV4h3y5zgmMEvJDvyo9duMxzhPhTRT8BZkQbm8uGdzi2r8avAUfyfx5",
  "key18": "nRK4cXgkpd6iLhqxaiCx54RSpK663rBtxJQdM8EJi9AKAPhdjvUW5wJb4pXcu9BbKsXb2NafZMd62odzSCNWxUq",
  "key19": "4sdeCZRws3DuByiN25f9Tt1nwjLCezMitGovqE3xzoEZ7sLtytd9K9y6M3W8iAmioeNBZZoYZg6xVHpbJKe9QMQs",
  "key20": "4rLvZrvTcCe4McpaexdjKXaztgXiQpDsKtZbLuz9k6BqRy4rD93pPA7QFpE4MjGz2AZnu5o2r7m9mYb1Y94WDpj",
  "key21": "5f3cYLkeHupa5TNfNGmtPrz1M6duxDin7e6a4ZDis1HhY6QEGviL8q2odi2mriNF7gwPmTpa28NgCA9o75dMkQpu",
  "key22": "46mTqcv16P1f3seYX6FZmhnRDCDXGQix7EqTjYAyDetg1LYFqMYvn1GGjhK9t8tyTGcoZrYxx8idx2HV4cB3Cm27",
  "key23": "3eptfG75maaQd3BJJ2qqnPN2qYC1krTCsZuYHqfcqSEwMJ5XMjrhcP9A4vvj1Z3so4mSVRrBZJKyw794CxXfvzD",
  "key24": "3yTjQ6bPWBjSw481dhw8LvhPk5xj4cSFy82Q98vsRQdFz3DrL132g9dn3hsiDGbZstT7uExmxftkbRgTaQcGeJeT",
  "key25": "5LckWFeoomdaMEQEiBnFM53cFzTRXGJkiryT3iwhhJViC5QU3t6MwxJYDNtajYZy4FyDkmZSzdHUAxfC1fpPsZtb",
  "key26": "3yJHreiBziKP64Bqjk7Moan81DVz7JGSdb8xLrSy8jNHAy1XUSuioqQSGb5Tq24QqdzYDqj5ob8Qwv1wGZJMzi9u",
  "key27": "FPLtUME3fUK5mjDFwHtEyRLW8Ys2BwZ8N9dWBCjD1xhQQrWNfAVFwnXVhqrko835yHwahHV1aBNicmuxJeXmap8",
  "key28": "4eWYtd7JjAMExpR7MmhfHeXqCBocSeqvD9L5acgNTyhk7SMRwHqp86ekU3Ln8Pdt9NhHQnGnZhT8RJRm6tPGbNNS",
  "key29": "3wjn655DHwP9UNuHJFNw1cRTeu2CMftXuspjb2kmRr3yZkQ9mXDU455QxyA9nG6fAr1ppFfGZg71MYzoXCEvEHs7",
  "key30": "45NYHWK1rgFncfbChQJgLyEgJMziFzEp1yWkxbXxByhKsFTLxLWC83RAVu7SHikRX5M6HJfeGED7FiPmM6PJzLZ9",
  "key31": "3YNnyBL9iNxpSHrQayBQ5cUWHBySnn2Us6q8g8VJKMJEo29zXBR1jzL2xrm7tFVn6JuC4a1QtBVUpu7Po7EoDZtB",
  "key32": "aV48SwSBRYCTj3ygxJgcYqYL5VzYKXRU18Kv8QKjdb4ns6iDNvWoJLVzb8q28ftLrpgEsGFE1UiZ4ttZJ6HYzEZ",
  "key33": "2iaR2RPfxTXJpB4F5rifCYG9QN18Y7HWqN2ENGevgb79nY2Ag84axc4LufZitjUMtofJxzcm4iK9zgfV2chKQVq",
  "key34": "4anNju5cfGh6K96m54YBgiEXrvLwNFry6Hg5R8xqWqkamSg5hr1HntyzA4ZtAXh3uYYhNnzYHaRomnSHLhi4LjkK",
  "key35": "3ogA1GZH3Xjgpd51bzj5pWimYdwmFn3owkVgWUaxt8RZ61mz7mpDzEcK6Auh76DNyJGp8A8Vmq4sMZipxpE326BB",
  "key36": "2RGd8BZhuR4hfN52tk4JftnD9uw21DcBsJ8tmLojtgMb2CHgbdaEBwfVDQmZZYut2vCmQqEswjvKwNzjQN7SaRP8",
  "key37": "3aDu5yArzeDt8fJZsHmkd2CgSd8cnduCXSREcGPrbzuNN28Pvvdba3QXrxfYpY9EYCrh5ChZ1Fc4jWyuctw4mVQM",
  "key38": "5CAjwFLf7Q9i6HvLJdFkynhe5MiYsYHb8JUes61wZFNcTSsbMJmqdtLCbdpZmRVWRcD3gHockwLxHKJeQ5fwhFKV",
  "key39": "PmDGW8uF6gwnSwk9ZjcEW5SeDD9DYY8oQNL5QSKavJrFAZ9vr8r6ct2RmoZbzPYYFZ7h8w8XkcQkMLWkeJ715jF",
  "key40": "51EEeqweWN1jGnpgn9r4ds9Dp1mfFsj54TBQDZ9Z4K1Lodk973Tx3UdaEr8nemHUaRXt1huRXswWFd4tCQgc8BSe",
  "key41": "5MHqMDVCek27AyAQfPwtTwgpaBi6XghP6AJSUSFeKDEmD6Fq2EmWyBZGiWKzURZrBdo6bYUhPYxiH2Gza8AuGW2n",
  "key42": "3QtqvytLSadQyRZi7V81uA8Ly2YQKXKw1RAzTWitsg5bkopNzp6uTDgWCTZpdmY8VRso2ztQp1hQvxYE3pFvqxwK",
  "key43": "5WAtheSqppX2p4Gy6cVKhjPjg5WbtjZz3UmQNikp9zpTLUbfswjsCAaGaN2usSdGB9hzGZndnh95WgQGpQqmtm15"
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
