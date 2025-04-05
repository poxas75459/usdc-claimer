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
    "9sLvbGujQCdrNW2MvpiV6BQejQgS1J3Gfm3fx7GVB8UZj92HZJXDhLmq82xFKbftShLZQLtWs52fzNDXPVa4Aiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34htCRmb8E4Eg8fANhnB3Bwf7zLyjyha2ioMfpajGPJimZucWp3XhAwaFH9iA4q2exG8Wk71Se5WAqbRsYEPLktw",
  "key1": "5KeCyP1uE5BeT8i3nHQh9D663FXFv4HUGEvda4UQgudWpDmrwPK2P5havuz91Kji4VhtepkHHBbdVqrKBiUzoLSd",
  "key2": "5KQtJzew7uJrV61mcKEBLjSfQQeoxS6R9mkYTcLgrTURFkScVhktYHtXmP1HuNUQUfvgmVaqJiCzMQ849sRhcKW9",
  "key3": "3jvywk85CicJqeRLrWurMj7rNy6q2gVpUaUKJvewEXBVf6uPCTYihu8FgV9ZmmGKJBxdDnJMrVX3zUvbhCmcwEPj",
  "key4": "3jzFeSXAmD73tvJZWH88xRNK1pmEryDYrAgyp5tu3TG3wGuYY1haJeqTmVy9m8m9Q4tSHotrJxN95JtqEmvKCPYN",
  "key5": "338UZn8SWHewXy8c8hsFbAimyKTDgUonXyXj1imqA8rmH1Nat4kUC72pdWb2U2X63DKhvDP6GSCUFksJrVnQU8Do",
  "key6": "XGy1diqW9vUeJ63AnHDZ2ysxUxnism8JxM1S5veGsW3NXBvUcaWZHQGjU9N6NkNJSad98HCyozCTYghBquGR8X3",
  "key7": "2AdQv7EmZWQKs53UUThp7Kan14YA6mQqWptq3ENmK8kCYvfwrTkz2ta6Aana4DExCmHgEHAE4ejFC9htr9Y4kkYY",
  "key8": "3jhp6ok4sAWfmeXrEzEpTUJdXW4Kw2c87sAp8wPaCf34nQhrKvfvHSAv33RN2jmjjb2ZZPXX6BLpuyuX6eW44teQ",
  "key9": "2d33uNb7rPN4jX2W6UdqwQDyi3cuXWTxWxrUFtNiptsuuaStyK7s347ch8CTc9PtEfYaar3qS7qkroAQHoPNbeFL",
  "key10": "5Aar93jTnQHmwRMheFF46hL3iJaihC2VDbFN2Fq2uMerZNpvzUKNwy3yHEAeN5h92u3cKp4V2JH5xAHpGV9WAcsA",
  "key11": "U1NsLH8z11Kf74og7wZ57xjDMRUzukQaZg1V3Tx7wpDs2nLz3YyJttySy9d7G93oyHWGdgvrQ3Cww9C3fYdxaqE",
  "key12": "LoL3QmdQjx7bt9obMrbE5UPRf9j6nkk5c7YR5qHYfCfXeNJXKqNrD1aL1b1aYARGjzs2d2sTXFuDLHLjvcee48g",
  "key13": "399YYJvEzEJzJArWeKi7x2BUsnE7xyA9kVZYWpWTumRiWsEFVhx8MU3G42Us2Z2L6EyVthGaZtrdRmTfAAUhRct7",
  "key14": "C791C2jpprAAyBjXmL5Ckyf6m29y4Q52pkFww8mJqtHRNFDtTGTdC2fJkuXW6ET1QGFDGzHexj2QzD45P9qkd7J",
  "key15": "FPodHxcnWe8pRCNqUtvo143MysePBXVVwAbXxbzpzeRLVEjgNBSYsJL5o8tcpbDgGLRQi6zoRL2VcvpptY6414g",
  "key16": "3xFEGN4svjXgKTro3R9nFX7y14FQFNQyNa4vFhA9LTYPW55vsrtxJ9rGdnavksedF9Z4g9zcsTe5QR55sfEj5AsQ",
  "key17": "2uuviK6HkBtvrFMCBeF2WaGPYX1tu6fHBYoWoQMKUT4zDheF6VP1i4viajEfLfoq34kiYpkgbBkLtiqYu5Pn64bu",
  "key18": "6TdkBGfQDjFzLny8M53e19F2HDM7FnTwW6mCh9boQbU7UGhztVcvk2iTRmgTgVbVB2ij6ipTHqXxm6fQnwCikJR",
  "key19": "66ugZGW27rmv6TdJgD2LgVfRJq91pbtizwUMQZcDAmNxdfJbfSe9BLKE9UivjXMC7sw97oGDznRZhNWbKVEsHVeA",
  "key20": "3pPMhVmgpWnfZL4KrVqVcyFjkJkDrFZP5KmA5hqwXTxwMXJ5EDM6SdhAdRDYnLxaCcFLofZt2sqocgEn895Z5BZH",
  "key21": "359JmaiapuyU9va9NTFrmGunvrD7Mv9Vjn37WJehwMS3xDXVQ33yHC5RbnB15jr6JtpFbND4qPwWv5ret772uSAe",
  "key22": "4XcsDifXjzBmXHtD6rvYxTa7du5xDBkufhCrFKMNVQHP96ntpQtXvneiwVUDVvfxEZ7JhBCYapy4o8zC9hfmzw6T",
  "key23": "QoXmK1GjcVMXtfCjT7H2Bv2bWs77oQaSA7kdf2xgMUaAZ8vEr7KE68R18DRdpDs8LekG9jAGEqJ2Ggt8fqFvP8D",
  "key24": "3U5uirP7g43XsykXSeutVSfyNAqkJVE3jjRdDsBQTFsJTxvofJ6jU8EpumE9cQ764NuRVdLFioduAgsgDaWzHCKS",
  "key25": "2kHtcg4H9Tt6WwKB5K8npLhBC2abpqzTptzgMk4jyf3uedNrG7yJrMtALwmSPWNzy9V7ULCBdFkYUfJWgeuRMR5Q",
  "key26": "5gHn6x4oTrf9wcYEP9qLzM5rCY3PYkdDZ4erGJfU8MrCdiRyxzoRFpYY4SXhioeWnppBBuduPGdzxsvKY3Lg2tSb",
  "key27": "KqpCz3gPjZFc7bXn5guoPCwJRPhMeg7V5rayESnhS2py8EjEi9gk97tRtnoa4PhtjA5DJBTPxNbfsyRSHdmvxnN",
  "key28": "3YUKcVAV8KZ7EV7sifJRduivnhJr32c7cFJMaZu9Dp1WEfzpPdsWas7y4fhVUM9FcmFN7xzCmQBG2jU8fDpaZJ7Z",
  "key29": "5iZKwML15pa3amiX6KFFsx3kVpotLxZ4ytdnb7i5Y4FYU9nQfB9JAyUYD7FKkMRLeRU1SzuAiiESMxcWNBLTrh5t",
  "key30": "5Rbt6ZfnXebo4L8QAFdUeeKLyx1AHMTakHJpAm7Fo83cEHRZDKvkA1HEgfwpQWM6ShFkcKTZhyei6HsbCu5czMWS",
  "key31": "S5oE6VgQuSWvhULtVp2buXBtYMw1xUdCY364SygYcAfKEcEN3aLzNRRASVCdN3TLaokeyawf7vR7Y6DbPUKdQ5L",
  "key32": "5udw4TwTrvgjKCfTEfJwfFVefhYUQJQZZtLGdSXpkdLqnK68aqiHuaxYiLt3ALBxLDS5f9DrJsiskksXPafssoiJ",
  "key33": "5wMLEpg3paxSigJBeFPURBg8Ti4VL6fDQDpVnQBHvVE8mDSJHxDUqLVvuq7XCRLy8bv38GYMeGwMrjsm3AjpXbNt",
  "key34": "2HgPPgHFCBdu6mr2HUyg3LjQGfJHbpCVfuWBgbGeM2TuubAkEM1Auq9PfSVFYnKEV8TSac5E2CjTK6Qdb111FBPd",
  "key35": "5q8ETD2sGz3X26JJD9N5PybwEjFmLXJggZTYuhEAyotKFrZkWUe7qY7mTntCrNtbAhnn3YYw9doAWXfEgE7pAZxB",
  "key36": "4D4Z2BvDDapfYxShhD3m6bqpRWiHGqbHZTcR5ZMsYLrLQLha4TcbdV7xHQCSYpuPuVJqxSEPvkoZHHd3zAv5MHTF",
  "key37": "4UPihHZUquknfNdxiPNVXr9H31u1t5s8HFhBWs1x8GSuRZzmDuQMLRdmxtHuBie6ZZFKvGu6nc9QuGD2yiTXeV5H",
  "key38": "2T13HWrM1DxT82pjCRqwgpDUgjKqgGpngutayUJKi26PUHUJVqHP5aH8Zd4PDCE8fmRzyMVXAFZ5bwixC7rh8fHr",
  "key39": "38TsPNkLWkbVW7Feq1RkZjnJ6MK3sdDkfyym2hsw2sEq5n76xJnNbcg2aTJ6uj6zYbZ6QuDxsTEuiC5RFKhR9Rkv",
  "key40": "2zC28pFTJ57kpy7Zg2Q548AuEL1SDVHjiKC8LN9QgHMypLKSzMio1uhuf5mHdQihiL8xjAZ5EkK62496svqptDHV",
  "key41": "2nu3MWG81Qtcx6DZZDk5ohxBcjcMSNyAXQYgUiyrLkXQbDsptBvmxGZMq25kVBSdRTRCh6N5widTs2Feub5YtqFd",
  "key42": "49DsBw19MyiDY3MAhczXG5Da38wQVak53nEmT4927zhFYvbpUthsn2JvjNzBhthGTKpHLGmx3B3yahYxsxVKbdGd",
  "key43": "362rUxANoTLMyGVWRXJQp8GPXs36babv8JP4vC34yxhEhRpKRsUgPu7uQ3DsrqToQFLJYwobccV7Ecme6KYvvWoE",
  "key44": "54C5LkYbTnNwj3x3JySqfoToJZQkox1EH2FAJLRXGKWf1k3eUEL1rvrKf9d5E8h2XBZWzj6h7F3vnzKEUzpe2Wez",
  "key45": "4K7L6WgqTAw8Mo9kak1YZXouAVg2Fkd3VpzmkmdrdobevTBSHw9T8KsVBd8mbRZwjigPbQQ9kn9Fpdj1BFgBnuHA",
  "key46": "5ufbKE4woCefDjhqH1wmfbH2DtXD46J39mgmEK2fPrB3knt1ny4PpW74P9pab1A9opUdmqWHeLXpuJtsXWMP6ywg",
  "key47": "XDD4Zu7QMFdZB2A4hGRBpdpEoHaPQrNvk4STAFsWx2uoy6ubcmR4oMBbzR4RADhio28CgT2QMb2NTKDfnQkik9S",
  "key48": "48pjKiUmeQ4ysmcX9rthf9aPuXZJ1kPP2dLY1NmV6ySDrYh26TAMYrA82K7J7NsiLm4sVanJvFkqY1cAEa2hoGHn",
  "key49": "2FL3129kLnAdfhsKLHRN4DrgvVf7eciw1QiB9QbGWv7Pnek6zaNKG9xNvZ61JYGMuduhY7Za3hvEW6yqHei7RZNe"
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
