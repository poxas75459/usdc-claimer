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
    "5oUGr8jp6M2MVyYtrNyRN5giYsTJVErVyfxCPm4MZNNCrZ5UWZDbHBTbyLoN4TEyWsZ5Gh8gyhszcHf7B2FquiDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vaEDnpyK8mWnDw4j5Zeuemv7JL3JJdzKjANXGsMSy1LMpvswrV7TNYEoLehutzQCbNfop2dxssqPmJfA9sR1LSu",
  "key1": "5K39n8pW5hWYRjQaD9PE6meDcU9jmD9FP63QZzc9mtLtQ2XX3ZtAhFrSoJX5jC9e3siQebakyTqKoFnru9a4R9xh",
  "key2": "LTfGKh9PQwVA2Y7wR8a7cGwQWwyLCLYqFnXdqZNSynSAUTEHPhXBtQb8JLjn6fopLfYcTiCLuZAZuNHvruEY9rb",
  "key3": "29oLsTDmjXUAX9zweuKsP19EeCT9FmbsQE1vZqPpLEGrV6ng3WJrseDuze1AcvpvPsiHPc4rcRFsGxvgzWutjAeh",
  "key4": "5jnGxqd4mRbYYsVfKPBxCUgmx9hcxt1qGVJ4ZFBWZ7LWQGRt7qehK6Qs6dd9ZKW5qZgsFku8UhAotZYEWcdophhR",
  "key5": "2kwK86ptiy15Ej3xRaz4NsCeG5yUe1yyJeUAGo5kpWEtpoU3avWbepkXTqEg1ikMjwwSeFtFkecTSipvKBQsEpVn",
  "key6": "Dks3t8N2xP4CxUcaYzBzw1qwvXgVotxecCFtRKT9U4qXbDp3GqU1TWE8da1487VWAdcUh25ZAUAKkcpTzp8aD5V",
  "key7": "2tSDi5iXAkdSzbHinrW8c2r7VhdaDNQVv1d27MHDGq35G6WPxxGdRa7Exdm1ZDcs4wfvkw2RRGxRhtugycRno3Vb",
  "key8": "5iPfBFb4CEqevRKck7GqGwTfK352RxtxhJ2uiy4kHacuocSatUNZpNpDtQbfGtRmw65BwNk8fyaEz1NX9KoAJwKk",
  "key9": "5URVyrB6tqythBTYGuzqffqssE86ECU3R4aEv5AJfn5FHAa4iyKjZz4Q2QG3UPvn869ipjqvoJvHoZrPq7SHjaJf",
  "key10": "5fPgs7zEL7xmAoqvD6eeYcYyxiMQQ6iumahv2dyrbyHkECXZ18U1oMaRKi2PEJ54n8LAnGP9oNZcpRJoQ1cHMDET",
  "key11": "5cQyXFb4NsuEwxwqNQypNhBhCYWKTdzj3nUY6PFq3h6Sdvzauwq4sutg148rYRWcUptqbPXBNcMc7cU5vKRkR8C5",
  "key12": "62GGXvLjutDvg5hbj9vbtLmMXZ6QHSAdDdZxJGfJQmkcmHzvLGW4hdxsko2Kpw1wSZuMUSW9K4gd42dVvimnXn2Y",
  "key13": "4YFNiDr4oYvbT8S6eZ3MavM24zr2beVXJN5QGHQTSA1V3faK3TCTeUBDwJ4rCie7GivhfBjXsRJzrA5Rusr7Mbto",
  "key14": "2jD9FLJwbpd3SM1CnvazxhhNKf1Wx7HDkRfLw3ZFSPXzdgnUSqCWEFZ7yVTY9r7z3AUXf7pssfNpQKJJ3kPeNddZ",
  "key15": "WwridtmUxGQDKRkKJrwyLWYdjWXJwUwtTNip9HEuhbBy1GPt2SDbQHdKwSbccjMc4pwaEmiJ8JRaFgwSVpmHiLz",
  "key16": "hqLkgzniRcBs5KvgRJYksAxZNwtwd3cmjhz1aJ11UiPpY8uLmHhUu61vCC3ceMBzwJQ2Su8B3UQNEtB8CAQNkfp",
  "key17": "2QzKuX7Wmy2tK7AcDHkbBCYgS9zcxtnbrqjmRWTfWDrq79RRMsoaaeM2F7KC5rkbdGe5XPT1DfW6pkmaAhkW21YU",
  "key18": "4uUrRjSDT6DrkmLUZXYCwsrssovsM5qb6HouX2PigJdnxnQgjKSjxkS5gSwdsCkmGFsKjs3f4XRaiyT1ReqgHppN",
  "key19": "2FgRdx8yCfA8Lysg4yEBBRbaizX3G6eGxwAAEa9hRxEJhAxx4MKQ9ptEsTbTpNYU5G95WqyTyj8HvK3w8UA6JjuE",
  "key20": "3BmTCZ9ERuMLcKZCg2wmHcm7M3vnchow9vQ6XeyYxpGbEi74RvKNnDyGsbaAfNpwKFjDAKZQmEY4teWiHwwyniXp",
  "key21": "2TveCZWoMTuDnskZCuU8yWNaxedQ429xApEDfTYNrPWWy7picfFYF8voKncZhRyF6coaz8kT4HvsE8xLgTmt3273",
  "key22": "2CtM99L9mFiRM3pD6c4KTEHw2PvtPjiucrvdWE5R2oAaRn4vbUKdHoggeSPVFq8Jsd4AaibbEWxixbHj12j4GikE",
  "key23": "597T2ZWJuCLXAvrbSuc7sesJdqYX34ipA7ZV5U25wwamMngGHJzJgWEBRUoYxaLagpzahNPXJL2GZXqrZtvmnz8C",
  "key24": "g2T2PLAz49mc2DTBXtusBCmn1rMKy9AFZdGRa5RJa58aXS3JKKGCfUcHR3Quaf1jM3NoFF2hEnt9dwgxnjKeTtw",
  "key25": "233ejwX6ysMbqhkbYHSibNPTyx8AWwTd8kYVQD35M3V9hXSB8vTwJXLZ1ARjwr5rGoDuunLXuZMTuhkAg9UTBMG9",
  "key26": "4ddsvX5XExMPCtWa4ZPLS5FJm4jrRFrecxSAmkqbE13jJJsqcFyxLaB2wa8EgyHVysFCDtinB1NS6BcqdsyEBDtF",
  "key27": "32jzjKKgy2RVQ6S1pgP5mCQkEGBXpQZPY5mPAVviSwQtaEkc3UyqodfZiQEL4GQqthk2vRe8LtYo5TxEB41z9opd",
  "key28": "J4XXv9Chp7Z5EFzPi6ENd3L9DDt4679ggbZt37pwY6VYDHiFqYmFxJTzsRAVryxejeykSYkBxt1o82nCGg2gEeB",
  "key29": "2nviApKX3Y39p9xe5Xyo5DHUkycN9WZuMXUH2ucffvAAejHc3pEPLXJ9Rbv2djvjhRLsKC7MkhS2YDSGhtFrkJL2",
  "key30": "4N5M58XdiLfLBy2gwvoVGzRbdb9n8HBWberU57dcpG9u8GzD8xkHQW6KjxrDu3ZnsvkxMXzrNjUMtYyxBDabuBhd",
  "key31": "5Ziz54XzExzeSJTWFQVcrbyfjqH5X5GZhBkJBRKSr9995aAsaJvcyoc9tvWcRk6enH2uLyVG4Yyp1ViMgeYs7fti",
  "key32": "5SqD6bJwKFvQcsWC6sfTRsiR9u8bdk9BuFE4BRReCaGbk6j6ZzgAdbBeUm8nfsHht1T9N8WZUDKKPG7BZSaHYDTX",
  "key33": "59wBjedQrkR6rWAasncu1aX5mVAjAgjwA5e3Z2a9k7TJbnqggT4ysJkMiqsyYpc8hGicxtjSHKXuRsUcUSUZ4yxo",
  "key34": "1294qzMKBXwudx81RJdDMTKhYxpMtHWAgn7LqNfixFpWu37Vbg8A1dBjWFoSrri3shxXoBfiDKeatf28df94nwKX",
  "key35": "3Bv695SZymbMpsfoAGvTLvhpTvzDUkZtG3HSDEWJg9WaKbZqiHSArTG7s8rHxLCeqrADeFuNPnyDxpW5hD9GzW3L",
  "key36": "2mSMnMVksspbhq9fJsuf3Rdj5rTBC3EdFZrYWJVyk9NYrUJshQsQhq5PVxaBgJn7EJRNrJit46BeqE7N7vaoeL76",
  "key37": "27JBAVbqj8a8p5zqTvnMys78E28acTnhfn5gbTDqiFVN4mBRPNugfBdXaQXM1dUP2HtAM1Gg2CoC5gSkf9H62aVu",
  "key38": "5Nf4aAFu8h95pLqCRdy8JqzLyMFKdpa1ngBKYCuQMriZrYe2DJF7YDF8TySHakbtGHWm6PY5D1kGFrfgLZu1ubNL",
  "key39": "i4vpS1YfjokuBf22CRSRjFysbMKDnR5iKXmJomzqgGGHiRtoLUNNuc3HoohfcasDwG7zzuKvLecrkyYEGecZLND",
  "key40": "634VHNGS1r5hPq5jTiV5Q3mwkuUrg9agxQ5wDrSWtjLBZCDhqtBydfHXw4iPXWTbUiqeeaGziDif86C1BwaxAG16",
  "key41": "2Js55BP1k88KzDd2KX4Bdv3pRKpMEuHxzXW9eTN1dZV2MKzxvCg7w8b93KMV3KCc1TLGLqBzRJBQpRAPKv6mFGgx",
  "key42": "gVVnwsn8rdKCWKGhJeWFm2A8a3SHjyVEmNG5SBYzPqBnEjL3GW2itxYfj7ZQjUkE5Dg5S9FtCU1T5QmJXjGih9a",
  "key43": "3TGmZwUPbgM66WCAbkcPGvfW19HdSrJZKiR1UuoBqpo9Vy6jj5YdaLDbKmjsX6C6xtkBBYVsSySgofVBM1xN6VJB",
  "key44": "3fvAedvULNvopP6ZhgdabJGWG3ZUMGNSubX3DELgWQdqVaLNZ7KgjmMXWr1DX3KuXFB2ejZNvRQhMqWPaeukXrcE",
  "key45": "23ob6Qra1oXZ2i5x4GQs9CxCuzsMbWmBBwm7hMacoN276GZZF5Byun6yvmfmGyrjnfqMKAtt4kreWqYXwymQVmho",
  "key46": "5J5TG6H2BBxGDQ26L9uUtrgqD6AGxfxRvS8KvwwE199nTb8ABggPuuSUTpnqbdG7KpvyvcxkA3mHSippwpzMpkmV"
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
