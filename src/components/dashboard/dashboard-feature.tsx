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
    "3uw5Rv8LJyuhoHwfH3KPoF8tkGff4wQjQ6CX7ooieALfdyA6SAAsUkXJBL8RUMKZGiPdEJ7vRYLUoLh8YfTneFFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e6o3vdf3tiJkqGzmGa32dtEz87NQpSvnqeridgYkYcPcxd5WaktwGWFj43uCtTBvv9oqi9Tow3PbWRyUupX2EZu",
  "key1": "3ysjrhz25kXRe46pDCdsTtwUjBvFCUK9re1qhrrJ2vHmfMkrhZnsocShJBUptWg3K7dLSAfvFcbYKnJVuYnU9FA2",
  "key2": "51KP8U3tRj7KdoynxDWfwVormi8f7RA26dDohBDFPtzWYdZ7aQwAP68fhHBpLgEXQe8WwfBfJsojoqQ26wN8UFqB",
  "key3": "4zWBSJuQVWaH6H8RsyBYHbZBiN3NNmEidbpMTDzuVCijvnb6ccRjBViL93f9vLPw2zCk2myBr7pk8qhuMoQ7H6R7",
  "key4": "4Qg2smfmmNRnQaRLaqtRxYUBAgNeqD4MWCma36J7SrfNhGtMTVzrkBm5iNgN86dDqLDQf78v9VrjBh9cKDw5oLeL",
  "key5": "282hnZzrtGCG7wM5Pi6w28ukeHh7cgXX3nKox8v2zcEqaSJhz3nUMZ5GJcLMWBhjidDir31Ax4kaXb58DsskjMVd",
  "key6": "5xUxiwZ7rVdA3Sa4WrqJmKSo6HBPxTeiGCAn41hBAeVSCBUUYFCiW4TkqE54pgaYivRvLfxW7zX6WioBG7BoJBcV",
  "key7": "2vPCJUg4dwdv7UvXozF4e4ppvPx7HSMayZc9xLpj3HVCqPEgoUAtxeB9XhPMRQEuzbc6bS3D2CRkz6SSsuqqYvpe",
  "key8": "5iGgkiHwhBtQCcTkBmxFezNLuS6QauXDdcgZFwJiCDNncpQDqFpE3HLnMtXxbmf3zc55EyQz1UzP34U4nj7EHAvr",
  "key9": "b4Jc7KJdUbt9VF6Ja5d4VkYZg2ryd8xQjf4xdt8qCKVWuKXdDkhZ21yGn6pLqWKG167ejR3pkMzSyFgZhGm8GzX",
  "key10": "5NNGtXaT67KdZusAzPdEVfG1NMEB1HUkGqNCMcYPWFJMeMmiAMcc4SL2j8xe9HKj7zk4D81kCoTnrhiNz5A1JDgs",
  "key11": "5Etn5f7zkhsU6GvMDAryiKRDfVqkZ8qk7VSW9ce4gmfbo8Fv4RJhcicuqB8GTXZvGEzvhvVSVzCWAMJiD5SPGSHi",
  "key12": "3RGbSw1yhL1qibAjrtofuSLirYRYgkSKcjkrJ4cpGyokLMYQiY9Xc2j1Nk9BaZFniGfLUFQ8t8X63zfWgxQZGc9X",
  "key13": "rdAZhwuQ9s9sC6HMRynQvzxrV9WndMZsyA9r7xsFvBrApUcuoe1eHnDQArhPC5qv2FTsscYcJM5ksx5JugDJn47",
  "key14": "4EZ9PTnH4iNtPLYmodax2osnuVEp2tXNrabEuyws1XM5ZHMBa2sU47jrhU9hVLEz129CEAY7CX7EdjK5mM8uMcLG",
  "key15": "5dfyfeNQEBvZAV9FAsciNNkg3Qk8u4qZDDozDsCqTBBCXZoHVBNPDmvL3vHmgpz13i9DGwedMFDbuqgT1HA86UQP",
  "key16": "25PFKvav4bQ4JEHPMifzNT7B1xDCBwh7yQSYFjpA9SMbThiwfFD4ZQL4DCEN3y8EEEV8yn6rMXayKaYnpitWbqmi",
  "key17": "2jjLtSADTCTQdqr2JmajNJDhdYkjj6hmQs7b2udufURWszLyHkEdfKKU2uhyDz6pe2fzgUXZu7GwWkFYAxtwLR9G",
  "key18": "51J1gAh35qkqZVj3vr4KZM7zhR1z3ZuooPhPu5cG4sbQCVjrrojToZL8dcswoZ9HEM3WdEzkXiUKxSmFNwEGb4Gs",
  "key19": "36247QCZy6SJDvo41sntn7eA3bc7XiNZajjrQYUpNDnzMkvCw7DvNiDbVTnxGwa4hnimzG7bUHniEyVgDpYNiwfk",
  "key20": "4QeMv8z1Pbym9XPvRUN7JYGK9tepXU78EE8k46ahWgajny3zFZ9Cf1bbBf1s8cuUkqNKGDqmAq65si4xQPQ6n2Yb",
  "key21": "2VhKQM9r3hdWWT8tcKP5zfYZh5nALnKam6XtzRD3Ns1pwVZx5BitKLnurtMM6c1dYZXWwv7QxCnJWV1a4phfuF6u",
  "key22": "2S9W5yevZbzpm2wdDzykBmaPL7xq8XPRQtTYyu8non8YoJzakjwS2gSxzKTqyAwNuTN32rvpLjP3UexP7LLHACfu",
  "key23": "3mrwMZsBGAaPtwejMUEvW14Xhy8fv8wtUhnU4ja5AKCwpvGY9CDa2FjCuB4PEwYMhvbHGC3ero58JxTr73zCnPC7",
  "key24": "3WJyA7nKmscZP4brHAc7NhyVwN7r9LEcMzrc1geJyTs8FLwsNWT91K9F8bsLHfcpgx1B3CTQAeKcTjhkJuMVYGn",
  "key25": "2VnKPCTiqXRJRuLtQ8pHtNnGoBqQs3QzWmZNS45wPnK4inB2tcEMHXGrB6MQoUyr7ZgZgea46SczaeJeW1b6R3ku",
  "key26": "2babPXhkc63pqJAYXmD1cdsdR12QaxkoUtL9HbkWLUcCScrGMSGSDrdVqWT8gtqESX977yMXdfUf8fLmuGMa14z7",
  "key27": "4xzLgn9d1kLfjcB1wnTCAsndT4Dyabx7dqPXqVdFqJCVwJ7tjPso1oV8ZoH5ZD8HGmyWpmmsuztEwnrCSu6DCAV2",
  "key28": "29E1YQyUxYjCYK2FQdHr4Hxgg2wwzbnsyrp2CtxsZZtmAQ81mg9yJV9WSq1YC1M8LvnR4sKipZGCTqPA4PwDfBF1",
  "key29": "46ooXnHGHoSYif8tUjPsN2wTQU7GseBbkYReCAdJDDMZH6kjcWP9UUkXYw5faC8UuXQubpA7LwqqYYqXkhFg5QPV",
  "key30": "3mWk7WYBNYAG9nsbLDsZqvDSEvWS1HQ5KshYyYiYT76o26MQydkiSR5q3XYE2X1n44ns7RJBWd2yH2gEDmi1bt2F",
  "key31": "4tSmeK2XoN5zo1NzciBigCL3id7heWaVASxcK8pA9mb1UJbQiWnF9Z6AyGkKqhGqFxFJ456HaTuaZokKVaBGMQiq",
  "key32": "56XMCzZHA5pzsfoU6d1FUwr8tjZ23T8Dj4KyA8imd9rVkmKrirb2rLV8B2yfcVyAGaaUdgqHtdKpDTPfKKeJi3LJ",
  "key33": "21C3afwzAEWcmnfx5zYQKMjGGhXnBtztDAEBQFL4xdmcwagocwUTJmxvwfDWJh7c3K3BHWq449sHaSRzwAXwYRKi",
  "key34": "5Kbwad8x8kN6wTtLEwitH1rYK4svdzEcxxqoiQVpWadXcTGuWP5W7uEK6C6EuC2oXkfhL4hQr7k4tqghMTBDoJZ7",
  "key35": "2YATNmCvjpAhqqMPd7QeWfYkJUHeGs94AijdXVBVJQCeb1enKfzHPZuBBE5vKXrVBaXHPCVjfmJHaCccnEjkHmi4",
  "key36": "35wvtkxZYMvHUD4hubtccLwcqksWuTyS9xLUHprfH2V5iuqgDNVytMYP1VU6wR8rBDZmZn9wKqUKqZ9wi2DzX4Ug",
  "key37": "tT4vGrW8uT4D4uxejbWbJXc9mhuqViQknFp2jVf3etbkmEc38TJjasmfd4UabVgbdHLzFviAHTfLg3WXVHemYBp",
  "key38": "21U49NagpS48SQim3M4HekbaJ8uRdyHwvU93Em6Bkyobgt1LnGtNm23xHGzmXvA5XnnjxrcGY6Lz18wrwhEtnPMN",
  "key39": "123Hka94FvdH8vfKRFSu2MZcYYMdxaPjzvhjEZqQSZrtLyxEo1Xxd2ZXjiuuzhMKou4UB1QDHC4BXgsh5yH8WuUj"
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
