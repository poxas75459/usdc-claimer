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
    "62m1yLaV14m8WV6V13DhEAZu2WzeWsoXjM3Jk4j4GPvSsEVAQdqQkQKz9RDHgivkQxGoQUvyRRXdPDpcaxmoP3oN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "548xb99XUWCwfHzMhWj8jpyjMhosiieTRezoPYUM9G44EggPBjiT88uuGds1LPnPStRknbsnMARLaB8DvfitJxnT",
  "key1": "4H813J99AXyDnCyWVucxStzzNdhTpf8mHcLmPxRfxEv7wpdTZYPp9un69iWaF1woJSeyz1p8hR1Puoqs6e8RE3Zm",
  "key2": "45pcJQtZ7GGcCjQRpEodDHPw3pogApsLjGmh9RTWZYgUUVLfGjMfQydgtq36jBjxgFTKJrHdnbw61YkSdKTsrtRP",
  "key3": "2BrWokby3oWiAQ2NpgBgQLhWesGyWsmURXumoqNnVzeNZqsm2oW6WdQNmXRAhNmrM2CvnT4M8sgpSmgVNJUzqsKB",
  "key4": "51SfHiLZnAZ1tT1e7uguoe1nJ9PoyZUZNwAR7W5WVum32n3p6p6XbGRQ468s7oFuE7NX57cEspe5ZqfxLn78C67r",
  "key5": "3JAKnLu4tzQjgfejwxTym3WwMwa6S4sySC3MqmJupsrUcKiw2ewyHsBVspHZYfv7jAuDx42mS4chwAqQFLGDzuJS",
  "key6": "rYF1cCdVcJzwc7qm5UYLWjE41ak6cZUATfcNEMUauBS1oTXGjSD29C3XNpTxu7JAFngTGTL6PpHX7sz6B4auzJB",
  "key7": "3rwHb494f5ggxBry7rt3kjUkBYcMn63SSCwbcNapBdQyJ4cZSFPMu9fQe34G1WwfcMgkfqu7vmgnwL4wcd5vJr3Y",
  "key8": "3PK5hM2kztWY6uvHACzQSm3w4hh6w6Jqf7CCb7yfL6ERYtAJ1gRr2D6DBLEqDV61k67YPe8etAwJcEMnpDqyHfH3",
  "key9": "4WzNCbCPnyzKUtq1YNr25tzofAuRoRmx1QY6rZYBH9cMdJwtgFanU6bwsdS3HPWH5uuwpEWaZvCzZKaiSnYTWwvv",
  "key10": "2tRFj2bLLWbtnbboCxxKYD3ZPRH3uKmD9WVC1zWSMXjk7cnreNrFTwBk1mMXqZ7FcGZmBE2K9Zpg3DZ2bAMUiusA",
  "key11": "3TbYyHoqacMHJtfLxVbVVbHt9szqZNrDdjXvX7drSqrLDdm1wZ59L6bjGdXmJoMUBqRSNL8jehzAUxjtQDy4v1Gt",
  "key12": "4WTvAx98RNg8ZYGrCnCJ6is8inqMSF5P57W6mZz5s6At5hQTWuR68gXiikbyVKRej2ZLKf4PQEjEvXmkPam8ug6q",
  "key13": "5fhw3jiYFxRiZ1eABErseLADbZjgiMGPk7pZRk3RSkQsGsCMENuga8h6FvtSyhYPEpqzFNryMr86nEvtKW7cZ9zs",
  "key14": "7ng79mMhN6mkxR7qkxZQiACkBZmT64d5F32KCnotu96ScgBktHu5fNRwV31kDQEbKjhDqgT3zDeWT8zMD1QcNuN",
  "key15": "5QC3xzfUhdWtLT3XoGrLVdaanEsjKcNxu9P7QYuDu56dPqLhGmJw8mJFm399LWZvSRdeoWu7HR8w6QHfTVeDLM8F",
  "key16": "2tBvU3uVbj4kYw5M51ZvoouneGbkhXiK1iQk7ML8i46FmfaPC36V2S63mPqECZUcKfWLvmvMeEgXcFDjBgPaRMSf",
  "key17": "x2D4yPYN2D5b4q4WAF17YgJtUvRqoE52GK9oTsPVNvTyuV5CB3gAsBctJfCAyFvXbSgM2xuX39MeqjTMUx6Qxhw",
  "key18": "5GC8yEk8jZhkN6uVisqoqB3msHUXiBrZgsq8UQqEttv4GcKzfAacvqtFrvTviVWKUuZj1Hr2A8CZ4PKEAYy2X87R",
  "key19": "45kpo7y1S1novSLgZxJMNXYPpPRkumspX29prG5UqWAJEQfaK8GngaQ4uTYePPK9siEpvCAZT1taavGHDdsnEDTt",
  "key20": "2dfv5GEnHk83q342LsumjyJ7Fq9uC3Mxv9LGD9uuW6WAXp7Ke5Rm9JgY49MnKmPeVLvLE7WSgapRKy6marTAP9r3",
  "key21": "2nHnCSP4Xceo34chKdexWqABHxSK7N5aq8759KLMufLJ7iQuPHWdb82vYha7UVCEDj8iVoygiFXzEuyTnwLk7xcs",
  "key22": "5CzYAzGicEQGu8nEpeM6HDvXEtrHtFG1xdYmJEu2bhysMqQSJ3dD1M7QsHFX4igSdS5TSLX7JmnCzny7zRQjhWtR",
  "key23": "36ZDnxYiszN8LjYKVpaJzXLzp6korbuJXNe2cELtmzb6xusJnyYmTCRAPvvYGfSnJBdD2qZAq5NvQiYstLD4drfH",
  "key24": "53vPR7ZKaqEKhBXjJfDSWpWt6MHg5vRMaz7k2F8aEDQsdmWz9RJHV2LQZzPHKybcgcz1fz272PP9pCEq7SanbNh",
  "key25": "3erbB2DF8BX85c4SKpjoDsTWk4sQEEifYfWF9Tv9T8u2Ho6uJp5dxDZV6vBfe7Tzro2DCiGmHPfV1LTSLxgSGiPr",
  "key26": "1UeE2zFb9MhjQq4ptRSrjBfx9DmztdcPgKtX1YVpnBy1DQGy4pxsNUU9rHTGr4N7sLPbQiwAgfAqLYa2NxPjGgV",
  "key27": "3CYUHJTcArrUPXxB1x27WenL8NsTLoCKZMaecnFHAH4BbBaitTWPmvQq6yfDSBjYEsMVGAKwVyt8dEwhsdy845tM",
  "key28": "FnDu82MoJBG5aBak7eZXcGSnhznrCj5AuoJKHyt9RQoNEMyNMJQBYmuP8GUTHufkEq5u9ymU3AopM9gW38uFrKD",
  "key29": "HpdTZmdNiDybyeLQqZQ83JXYSD8gBGrQ2M7dxKscMsXNMB9JUScL5dL1hfDfBi4vN83few9HuCMNj9FBcDbpWtD",
  "key30": "VECD1o2goMKGeQakoeCGg9zYJomQZqm8Sddyv9ovezXHRLqfYAQcfJXSMS9m3HDd2SMvqSvzKM2rJ2cmBKjGv9K",
  "key31": "5mqYo9eCQxWvcKzczehnu8fHNTrNL6Bf9QCUCYoN33Xw6XUWtDSmwi6fzUpVZ2TugDKsuDh8zJBBjhxaztuGAZeT",
  "key32": "xggLgKkqfNfvyF8WN45Rm13W4YYkEXLNNLk1cmv924hERCnRjxMEhB2DNYqFLzxioLgZuaqxpWzbzGbYkKcJNXa",
  "key33": "3V3vQnUgToBDTr2cdaq6FMQLmfUCjxsPmYkuoE9kAz4MiRK6v6pAweHySHvSvA6a7XE2AnaE3qm8qE3JwZxLUSZz",
  "key34": "26YZLub6YngN4gREm4ooitSq3dZGrZpDDGiUzjRSbpMcu5MzVs9eSjFbqDGzxce4zzWqNTydqegCrAYrbHecXwFi",
  "key35": "5FZ2HHbmTADErnYjUvFmgpEWjqxKo8y2VMaQXZYjEtGotpF11KsFf9e6eS53atCMemiRiHT7AxLUxPVZDvGsncEn",
  "key36": "dKo5Rv6BQiuC6RZ6HbNKRQnyDYgnaQ9DVF3radEe3TvPv5sU6zCZ9dJ1so2tS7Jpb4d82Tm55awxV5bPJdZFDUX"
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
