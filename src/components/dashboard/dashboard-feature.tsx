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
    "3gmbe61AN4aG6FKVVp54KE5HDSTHLoLrYrMzo1Eo5y7erNnQV7mAiMeftqDi3kUaK7xAfZCcSPkLu8DV1CZC8QPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5weapXXDGuyxcusZZNcYDKeW6sVkxBHLvGBwAVzAPwqtMRtKTWY9X4mxWhsFHqcRxV3immYrzhFGEGMSJ4Z9WkPE",
  "key1": "3NbHSuy87TmZMJPUW7Car7htp2D3sEzTEGkViyoUcUNHiwTsVgs1211gDgV8x4aYFAPjfdxonqNdtc1etqjtE6yh",
  "key2": "2uKUuEK8h7AGv79JtnabZmNd7xj3LXZiisd3reUKB4pPswiAy2T1sbzro3mVdJhS115bAvHeWtmiyXgC1BKd1vpa",
  "key3": "57jAvvD8LjKqyXsMuYfpsdZwBPzgSuxSsS28uS1rgkiLHxNRiUQ49UngKM1yPouMUSXxAK2HjX7SNiXWe9nxe12u",
  "key4": "5qfooMRQLirpGKfPatEpWxkTbNEVVAuCcBSgKWQsMmjnTeCrNCBxRaRHn8EvXBsE4ZQZ4gHWRyxrbadhbFghwH8U",
  "key5": "2Jvyydes68VkQGAdqB431nAHvgh4my568ExSxFUjb494Z8kM8ETFCJCi3qK6WaGPmUib44eoxhKdpCT1zp1rJeUs",
  "key6": "5Yb2yFSjYqLvc8kiDS6PufqbmDW4KjaQEyEZ2d4Cq28DcKB8TL4z18QV35W8HinmNoP9xKjt96jPVsFkXr74rxnb",
  "key7": "4nAnBXy1cv2B9y1cG57zDaEzQfBM5uHK29BP9PtprAMFxpLMWPMJeua7rc2z2MUUZ8863wEaC7kzpdvc7h3aZGTs",
  "key8": "5Vf7kXtKCz9BWkRthc3BcTqez19ogiM8ecztzJzUf5mhauwB2rfXcNcG6WDiGf78pF6rFwn6trhkpraJb1ozVUmo",
  "key9": "57RpZRJtGQz8BKXfn5QgUsTBsgG4Kz1nKJ4vbvDve3Rcwm5xVxUvzxHY7tsXAsfRrW3hBhS2mUemLk83H166JAGo",
  "key10": "2Qznwygsh51RHqWnXvYQqgHuy6CC6fjzqheADH1K7z5fcC3crJEgHP31g3bzyo1TRkmCrPqtNVoVV9iji5Cc7RrN",
  "key11": "5FZb5LZeY63Y3hNqc2PXMDHuqXMTLDdBhG5QotBSiiCVArsEukDSEGL8xh6UjqhoN8LQJjGbCgWCDXjDqSxbLi4m",
  "key12": "FYCNJRu7o415VkEDJ9WNiPq6n2fCMusGsxxNaYSHxbEHTxRX55y6kgtwhmzJU9zSHgXmLuxPTKz2BtX6MhjnewL",
  "key13": "3pK5H3eYCJ9UtarrvjhS8ms46upn4KuvWmoVuWJ5L2NBdPx6g45yikbnRYwswKAMPBhFA7TmZcuruL2uUqccvpQK",
  "key14": "4TmHxzC6JVGY7B2APcdJShDvL7fdwkvf714jWg6dPWBUSnPurBKVdChbTx49kh8GUfeqY5Uizzb9sLVYDe46rCZg",
  "key15": "SPR8KyKNHLLTdf6iQyRYRqR5mBdUUdY11EspbKfbC4qeiJA1tYGCKsxQBeU24nG1sXgVjSSVHWycNDuVq4Ph7oL",
  "key16": "XMVsP8syeHBRV2by7x2Gae937gB3pYDYJApPkt4segjApgte19fEJ2QbtBNTXoUN8o28Yc3LgcQkKSENMQsfoZm",
  "key17": "57tHogWX6xk986jk85LQgK6qu8hBnPauJV9nrzLRqoGyGigpwv6Qa6D5MC3myQiWg3RkeyC8EE2aeoqx84AzqYx1",
  "key18": "2Z5yEN6scKha21KnLAkCbLEpiWcY5hvHsGZwdiLHVVtbCyXHzuq2JV79PSDBHzuqJiQWhde7XfBsMsCqr7DcQ7dt",
  "key19": "31VXFASMhDWsomHgS8f4XaqcxE8YDWe8zLUmuzefXjZtncaKqy6bky6n3nNirhcXUo1TggpjTLv8CFNUzztC7Coe",
  "key20": "3NgxZ9UUw455Nt23QGwdVWPqdfJgsNUi4jx8dJN6UGAMFfvCMLk3T2xoje3X6G7Pdp8b61F3T6kUdd5yV6qN7DDm",
  "key21": "4XFAFWyqHWm6p9wemJYiU95gVikPPAj3Umzti99faQkDbsYqEmhskYGPBD3aL6NxGMwi8zKhYVnws1DkgNSrf5uE",
  "key22": "44eK9U158o68CgwBNVNRHDPq8qoQRJ6mfWE4ogtNLj3QJxLUbW2DvEDKRviMpvAFEYqLDNvfNGPJtUgk2C8qVrB4",
  "key23": "3fbQLyghcimBVafTrWRG9zasyN9drcvnVRVSTGB9RsQEKALi6tAyKoKnrQe3tsqrqsbFSm13nmGDMXxQnuyRsrgk",
  "key24": "2nE7h4PzrCBMpTVP9LAYH4nLjKoJ8WABs4fJvEJxRPe8QhhcR9XLj2dcN8RbkAgVajP6HzFj9kwabGmfhBZdTL5j",
  "key25": "2DadPWdkY3ZmxAatzDYbddPSXVeB25uhHBPM21Pps9bcr1SrtW94B9UPYFz4PiuGxtLnTYVwMLsLhgAnnsq7yrfv",
  "key26": "3j9UQpmvD1GMmS3SUzdkAMMrN21Qjo5x3X9GQDDx315xMida44MYar684cU8kn3PDU1a3SvKUQg4KYYxvs5q2bGC",
  "key27": "3b7tmgsaoyCAUBep85pjqa4CarVC4g5JK4Mzkdjs4hxRURyFM8wTp25Loh5uYFSHvzN2sEuSr8nmyHgE6We6mXCf",
  "key28": "3uhNyA2x6wiHDwqy5FXhD35BC7Pjgy7njeUKPS16y8JCyKqqLqJtzwrQWdf7HUSnezsg2MazSav8ge6oMfrgmnVj",
  "key29": "2rpgEwsk6Pd4sWhRhhwt6nSaXgBhJwjdLwQo2qJ6K7wuTGpuGMa6W59XPrroSDQQGRZimVxA5YZhVJf5rD97wnsH",
  "key30": "22ZZF8a59BhBGmEEzVQaJsVWut2yZGUodLsUAG94egu3sjLTH3i8cw6o6E2DuEtLqwdGtasbc46dGEaHZ2t7HHPd",
  "key31": "2eXBxit3LVYcm7Gh2ELpxCzatnhWLd8Nahk8au7tZq67jKajAG5NqQ1MvUVryfwYexmbBp5VtF4hSzJxu83ccjxn",
  "key32": "23LMP8isbxRNa4yf2ERhnbSJvPkWhphkp3B1JFmwEA8AxNvx9EPg1zw9FFQun6vswztXUMZok8P6NZMwzRenBA9N",
  "key33": "2367y1XaPpQe5JrEhwBtBmjtL2FUNRJNDGLJ4qvVqX3ttonRSVAcqTJ3ta3BeG4NqiHqptwVzL4bd9QhgNVyztyz",
  "key34": "4dLtoWLwzYtqQjcf7ZBG5RBZoxvfC9dgRJmpBYZpiWwcwdcN11UhhvFLcLc1L1mCjTNqFjBGGqeXykKLNNheQgwz",
  "key35": "35mmonKA7SicqC4wLfJg1D7oXu9HEq1MCXuqbzWQgvxJ19ZnJcLrG3tYgC4FVxVHrYPXFBQ72Rvfb75wWHoVp58P"
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
