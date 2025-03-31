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
    "673kxqKcmFrDXKPAmG3RtcueuhmMyk58aiBKR43SSmmJn16MQ2HZcJBRJkXhmPqfN5x1rZ4DyeRsnqtk9bmuQyFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZQ1QPDCN7CytUgE8MSae3zdDMoanREcd7p1FncquWXyRe8x7RezvUzbB4na2mHvwNZbHdaEm4RgrZva6U3jh9n",
  "key1": "4AibwMhVZKn8hEKcropbXCp6Exj5YsVjJ1VtyyhHBMH6KZBAXvT5GbHp55Pdj7W4bybwMAE2qiwWi55w7C9wwHst",
  "key2": "5hbpJVbhcxE7Sg6WmGTsdhN3qNGdE9GGG8XKG1wZ57EX2M9AYMiZ9HVNrkJwMU4hSYNqro5tNiLoDKsPP2GfJsLR",
  "key3": "5rFbEwFKrmfDzJeNwMEcLhD6ZNFtURD91AiwQngVtAR14pwECgD5YvAHu4zD6e1W44gUptToAkSr4efiUapDJiQJ",
  "key4": "52134dFzpvus6yMCBXtqVz3CyfxmJsFBF5pW2z4L5hBFuGccgGXBpGUAZh3GtRJD21KzqFfCKLDLK5Un34Nt6LbT",
  "key5": "NpTN52ThcYxPEQjFQKaPBG7UQiEvCL35L5hTsUtdUwLHHCCuSJVMvQgLrY3UPnTieFv9YBurFN6kSfkLCQgXBbk",
  "key6": "3Bwfkd2CYEMAQkNJfzZwV7DjSj7SZWSQBVb3RSquGn3KWUsEVtnaTR5FQyJhqC4FCYg2KsHMTGBWtwk9usaH8pWq",
  "key7": "4WUuwmEdJQwrdxycH8SWco3ft3NSbbC61ZrSqfqc2RDe6Fj8kCXxWfXwrgE3SpVKQjALntBirYWYn77SVixKDiB3",
  "key8": "2irk9SCuZ6tLsEFymBH91WUfN1j7S1kMghiiptobY41yDMfWRQzU8GiQGXTamqBKBcLD6bsATYTqvyGK9sMw83Cy",
  "key9": "4bjdeJ3C8Cm73K2t1EEMp8SP7s5kpvyH7pdz6hKPpPS3RQtsgXwupsupogXmEs5hMzfcZQUkePfqLTEsjrL5bESv",
  "key10": "4Ku2f4ngeLXgnT2rscotMF97eMnyVJjHneVabVAyxbCWb1L69rYTteXEzeyGaG8RPcsa43E3ZfR5DMq8aVVgDxxo",
  "key11": "3xARBBhcAzm2VZzMmX4w4ugiLyDJpmgptLsR427JbazC6yc4AVbGkAM4PNQGCQcR9j4hpMURX59E8RZfMzGVgBAb",
  "key12": "5mHfR3cvdL98X2ESUVnm4iNr9Vfwjk32ovFhEHQk8WkAyhCuqZxGbHkXJoZGa2VtW7DA9Pc7uMHkJcyvNR3S8x2",
  "key13": "2qVvmbJ4GZFEX3XfH9Ud1XpMFywK3MHZnFy5kDLmhH1yZiNhuEpJTmfTsDkouH2abBZ9fxARZbmruuubKRuQ65Pz",
  "key14": "AVknv7skyqNmZYRHXbLX6hZTXHJCtDeKcgF7aagFqyU8XBFC4fy7db1A3SVkW2ytqB5ttLHFyWsthR2zDwSsJTW",
  "key15": "4uDSkKYrBFaVetpgtU94xWcUjH1gWPy9LC1PLvybM53eKHK8HHQ6VSzWUbgU5zmz7swUZeH9uCz2trMqcRAcrKdy",
  "key16": "528UczVCiAZarLCSRccttHQw5mtnSzUquQLEGi7LwgFybwpTGz8YXYrJ46uFKsWUcMFLmmWRAQT13zUg3fgTGAfY",
  "key17": "3YcakSEDdLPRG8an955iTwHxynRUz3h9J49ZCSFNaF9XHg528juD9UPWzrWbqS3gSmPx6BTjRur37zQ1s54Hg1Ld",
  "key18": "2ifYZF2JZtFgnmHiZmxaY5neyJCWeoQCZE6dfd2LP4kupTN7bZMSZCtXUmRqFGjUYHqUntZg6LdAXRZGn6CVsmBC",
  "key19": "4iWaCikzykWVaEurvSb8dSSEkyHCW2PDuj6qs64GmpyhpeTGYcicWVrHBKd4P45ZiqYbsXPwfgG7djG3cbzPwoLh",
  "key20": "4kkkmYgGGDQWc3n9UoDHa2vTKSdRcgxhEsrttjcvibKBizH4E17aezpVa8G5UnwHV6Vo9iwGxMvNArDVwPiShPe4",
  "key21": "4enyHKyoGtUNajko84RCUhpzjLxj5UqKNsM3c5pjSCVXkYVVM4ywMkh5PJTABHDiUAwyzHkchcMFdw3MvpfB5FCT",
  "key22": "25FhQtz1AWJcYA8M5qzuWVgg52DPCy6Xkf4hwzmfmKrqjAoZt4nWwiUzRCQTZzA2C7R6zNKyYeMUSFnBwmSrM4WX",
  "key23": "3rFkNCBhVHLAu5MMu9yMyeqdLsqzUNzL7HMooUVzyinPSwCugBLsMW5Xq8Cdwm8QGmvMoosbzLhnJRz4apb8wsTR",
  "key24": "3pPAEUTXHYxZj7NE3JSprR5YXFexdQBzoPb4Ys4sXEXmxVJv2rKU1jetRU9jigDSWTGGB8fKo53bHDNKUMaHbFjo",
  "key25": "3Mz61jxB9rShVtVJBF4MDEHbN6UkgT8xzFTZUvdNLzz5DSRLaY3fSmVHJhkhK9qXNK7dj65c76fjvoJYdtM7Pc4g",
  "key26": "44t7hAGcbjcBNEkDYa9LWgo9TguWcsnhsarXMbpGrtCU2Gx5TKgokDmN8fLke1H7DokbTgZSGdA2iYowEM135AYe",
  "key27": "67TJSCVPxDMJ6mrqa99kYsgKPhSQ8aQTGbedMqXuqf7fcyBU7j1uzmAhmpmYnrnRo1uHSPU41Gw3QyJ2cC7FDK1a",
  "key28": "453n7SvmErfU5pamvApAyve62YyfPZK344dKpxQu5h4KA8iELiPaxGbzf7R5bdsYksiR3cdc5sWf5D7wkuCCNaLz",
  "key29": "2zVgumQoJHz9JKYZxNRBaG58r5XYhekciYxNRL6wF8dC7XpAs82CEdcdf2aPKhn4VqpTwPnCyzynNBJdpJWDEKNt",
  "key30": "3PdcL4MZomGgJXWkK74oGXsWWQ8UNptuiATG5kTDasUyoKwDaizsd2cMjcQBhi5ouev8jnJeLywxDDGBdAVupCmh",
  "key31": "46cMnAY8CFmccdqCtQMrFMVLjjHzZzmmfxaGVuoLxoBdTisxXGxeeqiSnm4DVxieKtcF9o9tJEbzfj2gjVduLRmt",
  "key32": "5jB5WsE8MLAzDAyDr3k1fc7BWWUUH8rq4mxrjgiwEcPJ3S6JJmBmm8gJ8xHzbEiS7tdJveADxgrjrzih6LyoYSkj",
  "key33": "5i3ZsyQWxDPVP63Wmw1FNqTNKTRyLRBPdZYztsXj8QbGtkkCmPfaDsv2Ju9NUdfYuYLVMbb44HGYjgpgaYAQBxH9",
  "key34": "4mec6MrqxVnMNiCKEqvYA5QjpVJccLZeyVcwMZx4avACCzH7C5Q79vCzzmytCCouK7tf99eo34nAVftF6NagkTxt",
  "key35": "5eKuvo3JSbyhVaaUT4WpAbjvipcBufed7haYXrb7NU1V7cjt1mv2enM2c9DNsMQJDRzLBuAeeX6P1jWvBozE32Q8",
  "key36": "5sL6noqNS4nyfjFSfHymcqYxdhERJoNW7EiMdUgdTU7C9d7cJSZCB5Rs6KmVNvRvXjeUz4L2MqBkaAfUTNG8h1X2"
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
