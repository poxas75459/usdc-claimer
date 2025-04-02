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
    "5F73JT1xoxYviy8YHswbyumHS1cEgZZHDCFFuLsFkdiQdikypakYUhq718yz1hD6rgWdCRzP1DneE9jfLSFiDHrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WG3M4dYBuAYRp8MtRA2nm1THLJscMRWkWZKjBzpXL4QtF5E8pFKVLUYRcp92o1ToNwGCqUo6zaHUHxNvxRFfb9P",
  "key1": "3TwJUjc2vYrY7QTpeykYBCNLtcZxJ2KkbVNCpUTVGLe8p2R4duWNuuU9pvvHuik7XaSDYrQ6noeb8htGMs2T5gzF",
  "key2": "4huupxgrMDouuQg8EyyCK3p9tJUH4jk8F7QLWuunXoDg1nEtMEmBFvHttnr1TDCnfCd8BSx3btb3dJWgZJDug34K",
  "key3": "4mGm9fLFzRpFLtMqCpVMLj5ft5NqiwnZ3bTencpLkSmoiwo52Booz9Mcv7UrmWWQMqU4UjbmwtpsqgrZk15sxupm",
  "key4": "2AL6iaeH56NTrHdMGUxeh692EbRv18nRS2uh59Rrpfoc7tvA95sdsQp9UbebHkCQ9874PA5s6nNtipra6X1ggKtV",
  "key5": "2JUPVqtUUHvX4vuauhxMQ6PggR6gswNHHjicuRxAjN3Q8dnsaDA5X5r7iGB7fgQKpWtdocCVoUetxKMXnimzSCrr",
  "key6": "2RdfGaGRmeJMvSUfmLLXZedwrSvV7cqR196SKxtd4Zi8msqS7b6eB2admC4bK6Hy7KjXosBBatzyjbRsAE8SmvZd",
  "key7": "zgAT8SPH6VJtLSNWpXEBSPkoGjakP6rkChyn4tEXmctJ6eXSv4jgB516FKJFa9yrdkJsGpRUXNddRQizFsYr2sg",
  "key8": "2BX91e7NZJn5mF7JtqLvfL7CofCH9PnvUCAB7bQegPpqkaeeZM2V24HVHACoEdUM1uRVmYaz72C9evRcAGqT7UeE",
  "key9": "XtAGa2cdt9QD932sKXz4vX18QDzZ8XCkX7RfScstVPhoAdGtA9gZnpZQ2pvY4ZoYR4X1VZG7an1CBPgYEQgPKQr",
  "key10": "3ATVokMmvsd3HDjUd27WFjciPBVFEEWvMXbT8xb5S4Xf3Pb13QRPVeaVGku8TERQxgAF4bJXj95E14zYELnN8izh",
  "key11": "kbTgi8QSakuRvJFtFHf7Nj9tW2zjdFErfEgVwAQJ9sgwrCM8xKi2S8E3uyUnkZCaPfSfxwdHqCbCXu8DuVsLd6n",
  "key12": "5V8LxCdQ2Nwxzf4BXBSLU4fNs6iEwxmB8oyWn3xdeUsXJYkVqCEnXJMT7NZ9qywohy7wVhdfKa7g3y2todfp9QXL",
  "key13": "3P3hH6yETTzRfPe1eXDS4N6iLFEdSwZrnMw11NHsNjnodjMev2tLBzbZmCR7N6U9wNzM8ekbUz69tkGSDrTkRYFL",
  "key14": "QCng9HES55X5zvqLtczSMgaNf4CzyNDRf1obCWuD8gXo1d66J2BGfqP5vWDvnvtYeAKGPTCL6W5iqi1CA9UgF5h",
  "key15": "5bwwvHHTaDtVTRdv3P1PEyHkpcZb7SNfsAJpRrKBNgNV35XbBTAGSojq6SUBpfRMDLZXmN2zKQcVQqUnbUZoXHe9",
  "key16": "5epXhwAdubZt7ZZPMhb2Xg2aCHzkyjj9VEJ8dhDbEmamgQGzsR5sCUWb8syZbYXg1H8QoYE8BsGxV86d83iAn4pr",
  "key17": "5jRJp8aDbeFN85NdUj7ULjUP7vMBnr9A4cn9rfrmQWsRVEAXwPtswERkHqRtucgKcpieYrgVc4rDaeaf915MDBTN",
  "key18": "P2z2GqixpJqA8yTv6R6zCC4fhMvrqR4sWzY654Ut2212xxEZXPEqtnWWyuwnT2toPSHhRfZ6dwb2TMbSj1Zks7G",
  "key19": "jp4ct6142SfrkqWf5Q5wWZgXGY5p1E7ASD7R7tJiV1E5adPixuxSbUWyyCbrGPSR3hUmbpWQvQazXDeVjnp1HhF",
  "key20": "2ftD1LwKYTQAo9E4qwmZHjttJuLy7ct3gh2FER3GbfLdg6Akoo5p2ek5EMoe9SCq7KLDerscAY4yvhQN59RDfBDv",
  "key21": "MXEng7Qzzma5CPMUhKYQ1rw8R14hLdtqTRKAmWmioY4miRjSZcDpJULJ2GkDVvqJRvSDSXU5wLcg3Ly2MAgD8NF",
  "key22": "3nSTdfjiXvd6gvmDejkr7Da8a64qrFrH7SjM9cxUk6XC7eGrkDXggeaJQqM7KFVs8LdjoPkkPhQ6sjeZXoRTQ1WG",
  "key23": "4gtaeXmTJzsdWCoA2nm7K5XRxLDWwLMRNdtSj1wSrEtj42Lkb6at3wC2hV1xXJN8RTwoPipdrqmcL6tgQ6wyHNxk",
  "key24": "3jrAvxxRR4UYJVu8wB98bXZd4nryMfSF7XMLKLFqY1wMPk32Sc3GCeCsazsjrhjaquhmJP5PFgsmz2wmYs7aWxaT",
  "key25": "57oDpcD9J2z4gKh758mBomVovRsfjkto1ePqfEvkHqJ7LvkdQUiR19tvoG4PZz7oanhgoQcvjNrVEJp1GXLWKAgB",
  "key26": "2uVW39RCLEYb8qcevuTvQXR1McHcB4S7vXakXkdZcbFMbhFq6nNT2k4eDsJWTDuptzH8Xw8izMtzDp725z6XnQTC",
  "key27": "46hFvrDBa8VZoFEFMCVFUFBb79ENpEhPxZJtbebLn6MNKYsPe3q6qSkmbdpUXZhaBFyTXKqX1SsAJWb8xVpNd4Za",
  "key28": "4Z222gLKvCf1UskLA5xJpZhzxvQSsqLqDGsR2przcuf5jVrP7gKEjYRyQ88RA2L91UdQ9GTtp83BHrTrKvBeKVeL",
  "key29": "5BYmYdunE9FTc4UrEzo4F9HGh2Ha8kWrBJUhgLdbSMpYVicgSaBmZsTeuH66kyXHbaiQB4jT14qPGQuPpqksac8J",
  "key30": "4vJSsp2UGbjSwgLhtvGMJ3Ad59cjWV4QQyghryqpB5bdoyZ8PxJ11C41mXCNFNuGTEdx8UWHv5ktcfSEjtRGDrT9",
  "key31": "3W9T5ZBUJ6o14hhS9PrfAQmzwUPmKHdb14i8aKEV7UkcdTgsSaJdqVcfdUXbKqwjoRdNqoqPRwvpzwTdemtJqYXA",
  "key32": "4wfug7QeGAz99e9z9P6bBrqLRkQDxcUifWwTQ7JuGtrNxJpPzX6x9ySxrzfvKz2LmLqFqLcmGLqW4UPcva6xSzjW",
  "key33": "2JYPf7qi4mSLjrF3KTwwkdRuL51JcZ5A2V7ECpSx7sceNF6SVRXcKaRXXnQ7wjNtLwx1uTugDgb8Yri5zFBRcy3t",
  "key34": "2sYDUNRMWDDkvZdXW77TJm9iqWJdBF1hoiZoJRGs4cVVxzGYU7nJxSgrWFkFvX7WXsC7v9YiX2YBVDZEce1bF5YT",
  "key35": "3vXPAxDEkfD3PTTeDLvjTV65txA1ygr8A174KP2vLHx7FX1mVQPkL4enNT4yPDk5aQKso4pPEm8vnz1Qh6fc7iwW",
  "key36": "5fk94ewH44AdgTgxBgTtaidrNuWC2gRndEyFnGMXFCKyMMF25pzYkYS5EYzmwU2akNcvfJdNtKokFmF4yXnQY9kC",
  "key37": "3sEuvFj3U472sDAv4BWT1R1hDAypshQzBNb2XdatbezuVxVWvsLBqxq6ndDGsisZu7wuuEPNCmTBUuCaJPysowLQ",
  "key38": "5yPNuQmwMQiJYmYQ5tSMciQEbXEeNQscC3SwYzXVGm74wz6vFa3PyXpH48mRMvTePNp7AYBv8tbGBT7gw84NjkgQ",
  "key39": "44W1db9b7EfqAsnV36VmuxKMUUZXJ324h5W1R9fESencZKcqy7oikXzodnWNhzoi3doQLvk1YJy9C26q91YLMmnV",
  "key40": "2Ueegvi44CboCeZCcRxsPWT1RHKeB6iGMdLPaDSy4BcXLzCN4xm3CXRt4TetzCyiRJVFvBSyYKSzN6NAr8qAQAG4",
  "key41": "TVEYfbbAkFzCxuZiKzqUhqZyunWBY6KymWG1agDtUPCvqjJQWmhcNePvTaSewRoJRN89Xj31vtpZQ96fWQrEQMD",
  "key42": "3gHwFU3VHJJ1g1njHZidh7rqHHFyYLdRndRbF17ttJyDy5PBFTAcEcVUFFyBLZ3u16iDcLmKs4jd6RMW9P67pkN8",
  "key43": "4Fx3dsCkTChXbkXfhGbH5MVnjwrQPTBjrTa1AGEU5u4JNtbkhqiccpAVHRoYeZehj8BMLBg66NKYWuJrENh8WYcF",
  "key44": "58aiV1Aw7EPswg4b5gNpDNbSbsmjhTyB3rz92SLVciBA69A3AqPPjt2PcBGL4V834ZLu5g6jHa76FpH5bKKkv6Rf",
  "key45": "3uBu8cJ6MHo7ZvRegdsSjtciU9zWyrbuztQWGhC5nehag7bQyCssAv7xExJPtRuxiRSwBsA4kn8HM5LM4nT48JPJ",
  "key46": "ASGvpP9fnEh75KVExkY75qg79PVzT3Xo8UjMQ9jXmBUxgokYUkughCjaqtthHy6kLwVD5SoA1D9kZfkum4D2TMU",
  "key47": "45FfAG867AnhPN1PZjmGQuHPgyse2KyGYBSKa2gWqffFaWxkTEARW2QTQtRPWpW3CYgSCYK1xvMmzXVwgsojSsxd"
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
