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
    "3Sr3ds12Wy5k7smhqkKXw29huDziVXcPzHgMhQ4iQ7TqRMA6LHecuvG6sUq7qQEqepvZPWkKwyTCVeyQ6HYK2F4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22yceq9xoM13HhrTtux5cz22RUHunj1wsTco9YvgwdiWV4TR9wGrNw83ZGwq9352EFZ4fsPbyNTFHc9WV9rCAjiz",
  "key1": "3fn6ZGBCLLq78F2CVgUd6TqYWfvx9zhNtz5H6X4HkmLM6sXPzXKMYZackgreofK8zoLr6TnjmzXUHV1SV229BuhE",
  "key2": "QL8gAM7Bbh8uWaBZgSFwa522KyJSsmKTHVGk5NX6ZjqebzQb6zcvu3VU4VSWhmgWeQm9iD1fVV4CztwEBWBcwto",
  "key3": "3dgd9LiUeMmiLSXp2kS2VhHiqAitmGLTo5LCWX5HR8ESY4uDcNbTY1AYAruS9SCrrUMiKmbHCaN2aSZRgzZkQw25",
  "key4": "5z6DFFrnMDXkH5PMxAAfVu7ig9CSSMrT7SECuh5yncWZJ1BrHr61Xd7fMfXXqGdVicqKy5fG8HDi4WpJvvZ878KL",
  "key5": "343GuWCiVFgYLfz9qRTwUivHqwJSXYzqGQe2TRMACpppULDqV8hLxsyzHUA5YhPjSS2KXpBCubCCLrkKn4tjsFeU",
  "key6": "P2jvdbrxiCwaVKbd3mVFHg6W7zLsJ5tvkTX6e37pWxhxoBm44czx22RVyoiGrET689UyogEQdaG6tp9wvWu65tD",
  "key7": "2PPZ3imJaToQdsWPXYHFy1NqPiYBuRNe4c6GoQuNPwEXU7dD1hcCUtjwA8HavJQtZGJbSd3AjcTK9KvoARjXhNUH",
  "key8": "53McWY6FNEAWQJhjt6UF8swxAQZbQFBESYxH8Sx8uq6kAnJFKFWeEvEbTcfU9JioDXugyKiFB1E8jGFivizHVpxd",
  "key9": "3PYyiUVEsxZc4suy8Goo3mCUetQGwVF42etDHYj9F7sgr86e5dpTPCjcLhY7neXwRyJeadgMKkLxPAtrHJp5iNYz",
  "key10": "usQBRqkKAvwmQfCuBi1Xu7H8BbuBFDUhhxYADZHXB2pK5xXj5juajvAkTry7JjdHgHzBpU57xjToyQA9gEoHtfa",
  "key11": "4RSBRASLjpUuztV47gkfXSyP12moUS1yb29VRKpWwDAC71RHqQxDDzzAaRmj4cVXQVxsyo1HqJYGXcQde4W3JeUk",
  "key12": "nUX17PqdSMj7sB3iQ6phjHi2rprWpN7PLBCqxcDTEdJcEGnT1tgtpzrxD9pALwxzZcTBX3KoVDzamv37XPPSiB7",
  "key13": "2adrV8YKkTccQodgvp47Xkph5aAiaKbDiGBoPVkP6bCzBfNZE1hcPHre5hthB2W9zmNQjDoE1ZrebLoxgLyXse5r",
  "key14": "48P4KkfehfroDQDwthFvmFbdJcPUg6FH6fM5Mdf2ry5257zr1H5DVCUzfKwVChYkjsNuS1TcXHjdWT5jfU8b7zMv",
  "key15": "2jVcZ4MxyHyDRv1NdQPkas6YaM8yrHtoWD8rsn8uTyZ3cAFpy3qJenRASXHhuEZFdvmhXWRbGPHFYPQ29XzTMreH",
  "key16": "3HYNP3vWLfMvMWienLGJHDvR7xXU2324DnaZWU6mRZK2wYtbepEryALy1omx67MExTpKdZ89SSn4diUbNbEsuREV",
  "key17": "Y8JcVYzRwaEB14XXQR4R8QobpEvwqugwKXqC4tJJsXpgTSMQuhzizYqSYdkfY1cFoTNg5EwUhw613g4drJYv7Jk",
  "key18": "3ut5sKJBoezWeGjA6F6j41hQWTsTPEKyHQtnAbztySyne2YUa9Ra23f4Amc9YteFL3P8kGTAz4ntLg4HHR13KDJ9",
  "key19": "4Qbxbaz2t1adZe7YGoRMHfBM4qaTs15eA87FKd8CmXD9847qXPB6aL739iYLBS8eyKqkM4iKagPRzqjeAkvgmL7U",
  "key20": "5o4mNrPAfoq5BLLYHRr66SonN4eaYFTKWmLPEQipsQqZbqEwVsDbLhHVUoSKAkAuW9gq1LYQ6NrTWa9QshhhkkW2",
  "key21": "5uqQ4FfjVTCGem6WS2fRPXqWVLy6FBxv9Wh8viQPwSp5QCodosiYZ8vJGWPZuSRcVc76VUM3kLWxUfny4fa2N1ti",
  "key22": "4WBkGByizufFUFbnuWbgCR16szMBFWy11i5Ds3mMPXL9fFR9fqdN2Z7zAaPuB4ZC6wmYnCr8N3mXfipR58m1V3Wc",
  "key23": "3EqQBSWw5xYwP4HSB55h9SbVPV1oEM7TmLUoxHenFctQNaCEqiQzhXBLDfStcvz6PiWxf2iNZko9Wh5aT3ACikS9",
  "key24": "2n5uy55X3VV5tJ5MNGeLuZ21WVoLVEjdxPL4SNkAMCsszhVhiPsU8oVu9E2w2by2kdijNNNhn9s2eHXXxv6ChYoZ",
  "key25": "2g8sytB3hwtjjsioWpNY5Dbki2ERgDQQZCzLzLZjofZwb7JEkirjJ2iQ2oJuNR6ACh3y5jpwYUhXbsWKjU9Mhv2X",
  "key26": "3XTJ8uW1mwAK2Ydf9qVGkVqvuaTiMNaAs3csikD2QMwdroozbzd4sPCKq9C3EZqrbP8HiWSMUUd63KYNZjSp9gB5",
  "key27": "4zgM3QkRcRxuxHJJkDzgwo3k4r6DAQXu7CmZiath8XUuYAPS1nhqZh1f69eWaUtFiqdZTHW4PH5kgWquU71Rrz9o",
  "key28": "28eQSkNeTK8mLqAqhCSm1PzZtc1BUi6ndHju6iU7siYWAyBKgSXgBNkS17waFXQqV7sMjrm2Wtz7kRKd2cghymh8",
  "key29": "3RNSD58gNHMWDTSakbETQk5fyc7Cr5ysm51GmcaH9mqRmw7TRhdFb97RxZCy6Sv69XwjdWcQiS99f9w4cXePSqX6",
  "key30": "4oQc53x6Fq6x2xZQ18qHHSJioqbMUKMmYiNMgHVNxfLNsHKDS3fzfpsGHd3WwpmD9LXMCPWrkXUvXkwsmuHMSKTb",
  "key31": "23voERabdKkFJTMP6xKvtC14Hu9XbYcK4Hgng3hTkiyiwGV9zLKC6nsqRNw6wdC1Ummr8xnxDVjEFZ1s1P9xBbmi",
  "key32": "2qHMCYVA7BHuFTZB2EXfEBiHN4ynRUTd7dWf4YiMoc3ZfdXkswBr5BbCShTbpL7XEgg14oCdsJfhxjaKJ2FKJbDK",
  "key33": "3LcmdeGWziGEavJzHmcg4How1xKtSCJTQFjwkdMRBAGhzc8MbjgWq3uGgWeHxy3cTAK5oRDzyDGbpE9QYw1yNk83",
  "key34": "2cKb5GdjxBksXPEE8J2xAeTy3mwUWdUw7GsQrqv9Tain9CPuowhz3P3UEUDkw9Q5Mmua7fAgD7cqPuMLS16oQXFD",
  "key35": "35YzE3v53M5THy1cpRHUpByo2tKgBTzmUe2FGLFFqF5n1rdL9qQph3nqveat33rfgidP3c88uYzGQbvqU8TdHyxX",
  "key36": "52GPZjXLi4NcUK6UBS2gsA6jKS5HktkBAs7o9pnx8S7S56h12mLGcoC5rFTdnXYU1c1YzobQzciFf2dPqVtrQpJU",
  "key37": "37DvRCoQewA71mT5WEQXPqVEce8jmeif1K4KQfUKttiAbysBCjzceCeHAZFENDr5D895hELYUQyq13mvPbvwRyu9",
  "key38": "2VGMEE1BhAytEu8wydDdxDR31vuamnggyjbJ7g6GeJeQ8RvZZNP6kp4KHgZotgkEXJpGhGWgzqpuJdxNiHUCEG1y",
  "key39": "2A2MQq6JUgaAinjeidVbESXzMVj8xrUXY5msEoRsmut2Kq6hwuhfHSzVZX53ja7YdYRDAaFSCzXrMYqHDzFTQCRn",
  "key40": "xhW9owGyke2MTLtgprrbwRT8gnBBXX2jZc6qe2vezb7L9twBELo2u5YNjU3qKZFqtUDHYdxczoiAyiKfWA8DSkD",
  "key41": "mjyBgbqXHVwX4ARkAQGzNaHwyAmbNiwsLj6jwNhoh6pGzKqW9vSsUvNZe4mQYF3HwPfXjTnHVrj9p6YJ4jYtG3B",
  "key42": "4jTCjtzE6iivVkpsYHBnVrzxhG3dbKvHGRRatUMB9eq3ebMQhxyr2Vgp17pwo6CCWvcNz37gLWg7jVp5Li2RgYEf"
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
