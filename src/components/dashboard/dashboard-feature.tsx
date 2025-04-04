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
    "34c1boEczdnqJDjpgUmivhoEhtvBmFTmzkNokLxnkgoRCf5BDVNJzwx9BLNt1K827t4JLvN4r8PSjGx4EJWLjQ5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34sUJoKTzUe8D79YER9B8cTadskoU9zzDWWiJZURVEokAnCUYtBPn41gyHfKzdGjVWGYTsxHdN18NNAsdf8Vorgw",
  "key1": "49P3LyyVtFetkRkUJ7wL9ZJLknw26TqSHo9fo1VWVGQznKR3aiyHh5P997gg6D7966kSPnmdYanYdxRmqNcCD1Sp",
  "key2": "5JqZVHfBP1xR2jZ8Upfwu5kJbCNRMe7hG75Hvyo5FyeXXx1bGnHjEYa7tT6xD2eMKfsdG2wMsp6AbuSy2vWMERMP",
  "key3": "5ofAUtitTdaibKvRipwbzb1R4Cf47BZ3PuRfrNNBJkr8PB4dVd3z3mgQLNxNWyzBReUH5KiKQTSvfvGKtpSbCDVq",
  "key4": "fYhCo7A7QthvKQ1SMrKR6tLxYydcJBEAK8ErjYNnegnobKTz9EeuaXV6kF6doAFgGf3hYSmxjRA2vYa7Xqi8GhW",
  "key5": "4EUhVJdmcByvJ4yb6m3gHKWLbgmC8QhMfWds1y7vvTE4XUTWhVaSvDBPGuojrU43738vSsh2tKguN5xKp5iK9xdr",
  "key6": "44qEtZ4hrWGYH2XpZHbyQ4zbH8cojyg2V5qn7yDvm4xvSaapHvu2gFvmZQoTPwWoz2foVRvMiWkPCPLKm7AeZL8V",
  "key7": "2EeBMhwuhTkrU34ohqm7Xr2SJTbViGo6beWGPKjog54KqUwuZWLkTpwMLCHq94CVYooZNFuT8Gbg56oeqSfVP7DM",
  "key8": "3mVaunbWBAqXVArDsAxHPbAT4KVkP2BuJL4NAqqqp9VMjbHQ7G1nYXmU3hMoagqF7GoMRV4SAuApU7amfS5U6boq",
  "key9": "535gQaaCANSsBQTHq2CJ7Bb7ZVJxcZqR7gM866usH4vRBYQKeVM39qP9pwxhoDyfNEN2HgXmfgJvFTKniPyvsmFM",
  "key10": "4TJ2Nk5kKgXYHLorQHC1SPJwxo9rGBut4qGcf5fSBQ9LaTLUgk4yXUa55Ugc8kSPyLygtMz3FM63AwDdeRuAWEtP",
  "key11": "k8CpcoTbsmgj5ssJtWNQYotCKMny1UgUCB4SoyK7h3xTcpVV6amErmQu9tThkQBNduUnKPS3QeKwh5xkWk7ndAh",
  "key12": "3EgZx9oxmFkoySwFmSoqrAfgyQW6hgh72nRNyfrE4Z3w1Ftz6iRXyPbrVdnpGXWXFbJao28zhBUgHaMcwtsf2VHr",
  "key13": "3kk5jNtgwjLh5dawUGCpXiWSC5PdUNyumTC44W6mf4vWkcvXabMWNNskmeAmA9zU3r35Zk6sn1cdWimCbAFoiibQ",
  "key14": "56ZD8Byxe5NQLSz7poU1UhWJRXEW3PPBF7UT8fbUjCkuwzbhrVUtgkRDwH9G1eHw2rC4DGt7bGgSFzzCje9HnDfY",
  "key15": "Vgh3AZZNFPnYAThTgfhcDNdrtrT4YMFFYngx9aFfzPxbBXCcgzCe67MNtripNxLBimoWxTetR44zuPYwfemkohh",
  "key16": "2bzYJcXMhCs5CfiwzNT2rPKdNqByU8MiDyaUX6KMFTCT3tf7zZhYfq9ZvkH524yQfPLszcj4gUzLvdWsM9Vor7La",
  "key17": "4wFjMm5wwfdnpc97Yxfvk13LjuzF6wJybSf5RGTYbv3RDQzsssJ8teUdjN9AUdJfJdVwBDH1xDJ1WxH88GuwF8of",
  "key18": "2KxZYMbZ3zSaRghhu3SFP367YcqtKszYwDK1bYViiffH9P5dABM7kKi5JfoeWiHUvzkCKosiL9w7aa1zmasjoUKv",
  "key19": "5QF9RDqNB83m26JU8jkvC9LoAj3vLPHqaWkWFWJArts3wTGanXmaAmo6xSJXgYV5Kc5ShEik7pvcYLdyAZwZhJuN",
  "key20": "2tNoaLyQD8oBqRXtcTg8YdZfM6gnWvAa9yBraPCpFtXSdLivpsrrrRSdBNyrirRzrSWdmhYiDC6bFjdLe5yRAt47",
  "key21": "4PFCByQNCawcgunYAg2wARBjLKq7D2WTJpPG3GxK2TUzx9duM2UeLsvnXXvJ4RCphSui4i7FUChYaCJHAJ51oPhj",
  "key22": "5WFt5e1fWZg62n8jEKTNnNPceRdBpcWtYse5DXRPjDrQWMTzpWqhrDKv6fqVWTWHaoTLa2nx4iE4ZkiLZNsya19L",
  "key23": "vjegoS5qMUs5XyRaBsGvkd2oL3dUSBgZz8V14me27cpBBwoiinJY6GDpr2HWkxmTXATAXCA45ubJDM8A6zAsvgq",
  "key24": "29jGKU94zszHsvhazCj6inEzgyG5p3nYAL7tsFNod5DfcuXYof45zaZN5RHLWThYFvWB4t8GoYMYhnAKkAUZW6GH",
  "key25": "3uy5TizL8ZsGB8cVwx2GgTw5Wo7GAgK45wRt52rRDoqWjMR3Fijm97Fo1Qdd5d4b9oed1NME6WDpBoEwjcQ4cgLV",
  "key26": "5hXJVx8D7hVjJa4aqfxTi6VF23WVXLrbmKWQZKbNsbchbhVCoFxy3XWJfjXuxXurFcKXdbRB1aHydbVcw5chFY8P",
  "key27": "31VzV121jXuVE6krh59VtQ9GKeLGHCFMqYmranpxLBnwPuetMQhozT4pE9xvEqfXYr6AvxTfcycSvheq7jRFRw8",
  "key28": "2JiqNGqz7ygb9sWCuE3dQNJVNFuGZKfYSmPzT4K56YYCEeZ7L638Njngh2grxL2V1pdJAV4ozxVajHnDL9PyuP64",
  "key29": "58PTAqcKnDCbB2cX8VdbhhHuPzMtw6hUeM9rbNbpDqmvFVJRqpzgNDfSCfMkYQ6N3NvksCAUAS7d2NiiKYhEK9pp",
  "key30": "aa9CY65kEuJjvUkPi42hEofMGLLY4ieNoyMSV8BbbhjqFmQrEwmkY7jx9QsDuwki5MA94kqBBWHQJsq3rvmwnH9",
  "key31": "2YpSoMQEMPreCTn979VXspSEa3NmBVXMjqsxdgT6A8t1jgJFRrHyDWBFP4RicEHjRkXnsEv5SodfEdUM4LwbiK67",
  "key32": "3RCYuKnd6qBAewCnCZBuDV29qrK3ktqKXMt58R76H2PN5G92Lx8h6r1ZXcttXGsU5YjWMeSqSQP8dah5Bw4d9ZJP",
  "key33": "MMSBquGFw8rAN7Tf4McApo4XbTfeHBN82uQPShmwCZdFu7FiPJ8xUKdMN3Z6zSsHUWVw6c9U4eD8qroU1evfuaa",
  "key34": "36AGFJ6C8j8bVKgSTeJSsxMPDkubHSXBJjrHcFgR3hUWyBpaiHuTv5oGuPgaX5NeMbeNQFreMMkHXo67WdkaLe9q",
  "key35": "52vaoZ7HDzkGFDcE8Lc9fP3HWFCfUzK9ctZwzdUdMrhqYDT159zCZFGWi9mm5HgefrXfVBvemhAWfpvk17QvtuHS",
  "key36": "37dTcNpHbinGNWzxcjeAMpXyZGcWTERKd3fU1mqXhdyyRxeaWSSnASm8yQfYiXkJDrQwXkP6H934NrH3FAt9eD8c",
  "key37": "4i3k8HkNua61JhQyGwRgidqFeZ9fnGhJB8RnGu23HfocH2fbhA9wa1ssJV6tX9f5zfsEXSuH7kpyUYKhUDaSsU6p",
  "key38": "2eL4TyQ7KrPot3RXaG6Ku6SziqUUEiyrqz2KMpQjp1CxbmDe1rhjbmXL2y32266TwTNYLZdQ2SbLiyNiLw55nx4y",
  "key39": "5Ux7qF1sEyYJt9HWz7WREGMywMM4mWMYN3ecuZbAztaPQn99xitvcaM9mMDM1YCBFx51XBe5GJKcrdYqtwdoVBix",
  "key40": "5uWAVrzxrfao9BkJZdhFbxGsooDdy5CDhezYrHXhdwrUbR6gbDyY1tT2oHkk54bdmLufUgDT3xz3GrDyMfAiE21j",
  "key41": "5FHLBtSDvykCdchLwRfqkVrGLQHMaHb9qUYiZ2dnVo2JhtCDg5nbcgLCFdtdsMV1XFUPceCJPckJFRjyHBGGJgq",
  "key42": "1y29r9YdNd2xxYaDgkPz8PRGqewVNnWdKTTJVy3kfkb53Mdp4aJWwV4PU7M6GkKdN7vzELeWeFH6aAuRZEH8cXE",
  "key43": "2hvkETZ6cCT8fcKAqTLHzZMuWiKnsRGoJau38xjmm1VXhRhtneuauK71ZYmsywqM55p7f7fnWyso7vELkRG592XS",
  "key44": "jmyrtF1tRAz8wL6EpFY4f5s3jdBqgCfHASdMyxqQmTvv1osAQUnLmXQHCXzRxQ6MeWYKs4rsUbRLFLuQDAxZg2x",
  "key45": "2R4SWZzBcHZ6yJrEbZw46WzmfHFe8fr2ZhgztGaM8uAKouLHmw6owPDb8xfPZS7vesBHyC8BRd8bNAs3SsxthrM3"
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
