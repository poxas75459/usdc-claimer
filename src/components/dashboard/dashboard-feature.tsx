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
    "3d3YgEaR2YL3eRcujn3gduQQb7SvnuVcTFLxK6j9YZpeWCzMAd1NmEXmRaLqbM4TP2KWcZY9ovxnLFyFHbX7jje1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iXnffE5g45VXS4gX9TdHvSbdSqGmbh1joBh9rM7BZ5ahwTNSdYtw3EzEEQeaZsEQp6GHNFLk5UPBZPV2XEaznLt",
  "key1": "3QHni6XipTVXFPoYSdd6D6etqQ5cDwnjYVdtqmtrNVK4BZiFNka7UBRjax9ifsgj78tLgcNXQ87fWyeNQkchkxwP",
  "key2": "3AdtrnjuPA2DywmCW4Tyw2XropDURs6idn6Nm9r4tVn9HSKnJXDnnqkPrer53x2DCcSATMpii72PnJV9N1gHQ3HF",
  "key3": "4xmyk7v4gJb7AgXaM8296GKG1R6ESCAV3YKvD9Ru6btjT1rYSXF2Wo6o5jH5T5BHN9CeJMAiz2ujJ631NMCUHxDq",
  "key4": "2nvdSFJsuJ2Pmokgu9kPM1BdAsM1iBkZqPfMNYg2WszzzDAL1FJjdYRib2UX4EVtttUraQvAp5CDrnj3y9JnD6F2",
  "key5": "3yLJPKeZLJKd8wc1ZmNWVyL6kZD35KZFaVbmMsoCzZSp4qTBzcDsxhfadN8sCt9FCFx5sAhXfaBtVK3kEcMZJkuz",
  "key6": "Sw4kYQTBKh8iXatnj5uuFg3MU4z9FpUZpVRYXwUHfXejptB8PKqrGMuYS2Lw9V6bjhnMbEVF6T3PSBHrw4grB3F",
  "key7": "5teU1yatxJ3Kr5NbgpAqWYVZhyNxtacBTzyAz46moiH5MKaoHAchxMe7av14nmMxyWV3KdhDdWb7djEoyuzg1hpJ",
  "key8": "24U2ks5h8iCebjeKtcM2eLN6o5MCpAJMMb8NYMyuLu892FKY9f7gCaJgAfgaEAxG3UK9sT3nL9NmLmDTqvRoYAY4",
  "key9": "3xPeATh7SeBmkofSEoHQGDGXzc8MK3CE6dAL8VUAkZx4t7Vq8RNaBvVUhSa5MD9KWmi3caek92EYLuDzV6WPnmQW",
  "key10": "4xLFP7RvRZrXoy3JcgkN88Y8y6fHRoUN11qTqsWKqFYCcGqxdRRtQiqBh54Nw54HCqgyEyaffLsSVguL2RdNcvwz",
  "key11": "67Rd98BzBkDRD3H5ntwXfQ71QzLrh7vp7NUeKnZkLE5H32S6pBZWjzBW49Wc9HUpMdohg9u2QZYScBKiUdZwtvtw",
  "key12": "48tUeWBMQ1NtDm21r5idYxBsZTLZCPAsjSiLjVRfoqdPB136uYFjF8hycELtWfKMQGDHr1UMRVsUFq4GP2ePoo7x",
  "key13": "5YjWGsvvX5ZmfLT5QpyvZkEevcvtgu4cXp3j9xsrfGXQcZAciHSXT9Uc6WXSugcBt39nqghXAtQT4KaGjckbnm7t",
  "key14": "qYC5t6MbuL2B3FNyq46dK73oUEpQJbdAbjSefL48gxQdhpybqiuHvLCbMogV3WqmBJ6bpJ68T8VasbiQDRJky6u",
  "key15": "3ibyo9iMcGgfDimx5uMSAteEPUST3CrLugWuST9Ssw9jVaiszttZ543aMLbTLMDjfQ5WcwZp9ghQM2yUwi2VcGn8",
  "key16": "4M97di5sLG8k8fgrgLxEaQJTYitZ2Jyc39ybgFX8dQYrqTdtPWkiLteZD1G5ryaNc7gjNEEbUe7LqxZo46Tkpdpc",
  "key17": "5tgQyR2sPoAFb2PhX4HD5h6eAFuvwTucww51fUDpFGq1ZuCjWWqLUTSeL4RBkBgvQkjGQAQ44cysgnepfTr2cLkK",
  "key18": "46q6BPzohpAhWB7AhUvfhydrfLxiLWc5yioQEhA4quQSoaj9kxrXaazwsdj9UY7zY25tbanYJEpQp9AdJhg4ijwt",
  "key19": "4637aBLZAeqbAtMCCW9BpvJetgNsbZUFr4j76c8rpchGfmfUmmF5SrQF13GzwX5vAG25Qnz4oXNmiqunWzE8brMo",
  "key20": "4qprArUymqRDv5qGYNBAFFKgZbXnvTqKnxj2ZhH6kQpBUREK8qxDsDDN4m2E3CkBV7MX3UZKBBETG57yCdHbxVEx",
  "key21": "2LKsoSCbwnghP3xZYMzHsuw7Pc5LWcSfhnQxsmRe1TmBkuV3R6TmTc1RXJ6uHyg1YUKPVK1JxEybwYUjbkPDZLST",
  "key22": "3KAMUw8Hy9NzsUiqxCDYBHxhRe9qQjJ1svaQWdxCqj4YP4DY9gx7nMTuFEwjk69BrUK8NK6bHh6jJGQcwBfXHZfo",
  "key23": "5nUUaWimQQKnNwV2d5jokBXZJ3UqakbE9xe81PwVxJkmheHCaMGjvRzKfuuifpcELp5ct2Daoi3mvm3hAkSHY5cL",
  "key24": "2Ugt59FfgjfTVqEQXm96ToQBqccybvc4VbYeYJM5QBrFdE6TdnqPKvJWHd62sJxC5vdQa8ssvi1WgFFLaZZ6DL89",
  "key25": "2eSggtm7Xw3zwDmdDYgqaZPkezhjtWZu6NFznNhiCNXnDikse11mNMoWaLrA6rg1HGQP5GnHgn5Z96ZaDCYr7LQK",
  "key26": "4a14H5CV4eePxnU2ib1zJkLJKX8fqAauqUVE8iicXZ3SmRBMCZKBttCJFRfmPjbVQ9qGa12Sf8EKhgSXDQbo8Pj4",
  "key27": "21Gvx9sq4ZWqqiPqGKX1XcLMVptgziPv32pwFjqcsErQdLobpHXDF3f4iyoxuBufwWvJSCyZ5N3vQ3empsnuCKq7",
  "key28": "5UZrVFXkUz7EAEo3LojHu4iVjn4WyXWFdJDVVswuZd7oEUPD4iQFU1zcefSZKHDVpQVS4JLAYaFHpYv4jzz8br4n",
  "key29": "2JQUUYuxncQZtR8miCsLNEXWu151w91656aGmT2ieuTxuLyrh9UJRecJ98g9GeCSaBmdzzz3tQucYjwbrinRRtyo",
  "key30": "2UFpWmpUTCjDx6EJy2potmdkcAwY89VcN6X9LtRhxxDJUBb6fJC8L1WUh4znZoeR9jjiUWcPbZ38VmVT2fM26wqQ",
  "key31": "64YDrNTw9mYRGJPbwWXstRHd1ahvX8fVkGScas1hvzw1cbPGPvAjgvb8BngbfhE51uymuMP5mJfkJZ6DvgDBie4A",
  "key32": "DvqXJUZmx5jAEDPM1y3MXeEW4CZm9uzAM6UPFTqoY9rvXDn4abfMYKCC1Tg2BriDzEefXoA8qwYhnSk9eHDx4GK",
  "key33": "56CPoZUGPMJRBow3aydfTGhvQH6kXGdE3U4efnQQrgGtjeN4Qb4xCQHUscCZxeAGwjtGSwX24r7pdKU7CDFMvc39",
  "key34": "2SaaFqLzetodd4gKx1zh41fo25TrDS2JvWmA5pvfJp9sQiiTniY7EoWc65UrBy3EN1JwUNeQGSf8Cs9aL8rvfbWs",
  "key35": "aBx4DrU3bjzp1qE3i9zEcPLozFUs5H2CsTM1j4sGzm3EK8efgiwfLtKjuKqeVemvaGLeeXA3BmfePvqmkp54vPn",
  "key36": "3fEwHmYFxiLjBqXSv8LeUxos1bP6pYbykzJewjzdjt1EPTC3MKkCab4zYhamTi96cpuDUBFYZmzdBdjRufPVdySL",
  "key37": "5TPVFvVJrM4mekKkMBWzf9BhZW5MFhQT7W6NVn5hxPU5dexpWZKhLbw1jJyZ1z54rEKCshU4TXFe6DiL9gVPf7eF",
  "key38": "3Z3F6ZvtGxYqyVKykknEQyU5Nr8RdbG3NoXjcA7jXXjcAiAnGt66JeFuTw2sMeFyCHgttwZELPYmX8XTLHHn4ypE",
  "key39": "3pChB8TTTTqjFwKvcQBeEJnBFe8WDR4uRFap53bDLqq6UwyzbhLLN6xwMyWN11gSQwHhvfkcsgqFhWJkEXfDSH7m",
  "key40": "4od1S24wjwMZ6NoysycaJthFQFgHC7A3QfwhADJzjvqpSmmBDh1kedAhKLhGfeLwiqphsZHFe5jqQbdumXUoGcCf",
  "key41": "XUj8dK8bNcEXiLuQY63xumaMWL4YfQV4nfYe35dG2EdGHpaLBnbPzaZKvi7ijj8vvkj3b9WjYUDVPHxoxGZ2bqS",
  "key42": "4J5eNXD24cba8HfUuWxMPsLv4Th9oMjUDFBf4o8evAWrzFwKs3hey6Qheb3u8EFwT6Gbn7Y9zmTK7UCN63krGP5i",
  "key43": "5css4DZhaKkc76jHgJ4i9fyqjPRZyq3TaqbgfrbTgnCA85P1XqJY6nd6WPiiB7mtKguycKcJbEnwZZRtQiHuqWAS",
  "key44": "4ZN3dRgoHaAMaTisq74NMsozBoubyvL1LZmt6EYcUdFAeS8kSwT9cKYWEdv1dDoYwZeRyqSSgVDQudZbyxMeJcRz",
  "key45": "31yivEB4NATGDQTECK32goY1heksqtKR1Fh6Ac36YXyJXZVDPY41CbkqQLJDi8WfZ6Jonhky98ThP556WwfH2sz1",
  "key46": "4gzgnA2dcMbUTkxAPqAH4z5h8knvDnoDwB6mKKGUfmL4jMq1yjFvbUwfFVNj1DNUF1F3TzaeYrFyoyNZ8tGwxHjt",
  "key47": "2FyNdhNEBUuhwdz5L8sNsD4b2GguhkwTz38aTcMB6JxLHnGAMz5tCuA1R6DfprckzAnJenUtpix9AGzJfbpANdws",
  "key48": "2A6jjVahqgJ5G9vcz9K6B83dcLDjpyw5863S3hJjEJim9DP8qiGRbtpjvxjVeHD6KByjAf6fFL3YBMwRRaXVPQDp",
  "key49": "29eznYJyfMq7o5avWDcVFuH1dq3pu3MSGA1ZrkYAjCifCHmoC8Qf6427L4pk17CJjs4fuzokCb2Z4XU4jqj4SttD"
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
