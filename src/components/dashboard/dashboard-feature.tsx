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
    "4qYe23TXbKAa9MoKn13TjxWd4hhm7RnL5nfuNa8a1DybCwE8zhex6JbDqBWM3LNwHqj2RyRb9YpQivQG4YkcWuci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKpJyCvCinKKvY42S7GBWMS7Bb9GEbW5x2T5iyJtm8CmfnowCnXaNAexp7r86mDewB5BXair7SHoVHnE7Kv7xqd",
  "key1": "2qWwysUKr4pLJPunmuyEdATN6ssmc7yXDFpTHUs7VH6B9rijLgnFfQ2wzZFa75MtN8e3fgR7cWPHP6AUaH6WJU4z",
  "key2": "gMbWTumzEZT8uuxCUmvHCW1vwj8JkPcGYqssn9GrECgLcNYzhyRDzM11X8dB9K66uQX8VfZYUdkVKEin4XdTtDJ",
  "key3": "2Ka8BZyJJj1SWQobPE1WBdNBhyLiCZ6ZoyKHFbtjtvjezxP7QDVrvK7CQjfEyUfxLw9N9WtxBJa9QRE83xXVKNcU",
  "key4": "M271bZbdn1PeTsnDipR5xs3FSmQ5Zu6uUWvt1eXwHBPe62qELwfgtuw6ThGPP2tiZ6g63J2ouB41gdc5soEU4mU",
  "key5": "eRyJf6q5wNzPh4CkZXhpmafADt1aGZpeMEk2ZrhLF7SYTBWmqcVkBr1F98TynczxG9KkthFVPyvYNjAnP6kE8yj",
  "key6": "5tjdreo5t1HQfqXXXYSB19PhrD1ZKjU23ufor2Ujoxx45uvP2dxpef7Hx8T3BQ3EtJ7xabtsPdPBVovtw5Cyhvgy",
  "key7": "4LGnrFGqjy392BB8iEyXKYZExcTXDETXymtW7Uj7r27xPtPaNqwjE29eMr5PANfoKoxmpYJXCrWT1TTXBT1vb56A",
  "key8": "HUrsQMwAnjW7q6SHY68XNX4RUTQKp7YRbf77nTQXcDxe2wV9ZMz5BRBpR9obMhCX3imCLpkLRwQSs7vxrczy1iw",
  "key9": "4uJG4pd7mfCAv9DvePnQ8rEEPBxks4fovT8xTjMdbs1UwpTZuKEHhM5dvoPBxfb41AL6Qd3Qk36PeJDXYMcQCBHh",
  "key10": "2hUya9rEd3Lcgr3pEYMyYnY1iMVZkkXTScJukJgAKEKv73ZJ3Ngb7KQikh1SumtyNtG1AD62o8czTMP2SuriKww7",
  "key11": "4SPEtRoR9BTZGAE5eGJwG4HwuPNQVKbyu1CrSnEJQ9hgtHWnoCCdXRrLaz3FGDVZ55PhVWaUwnmMjnhdBcRpBpGL",
  "key12": "4nZCRQ6exirzKrbMaWeXD3X7914hbFpvYhKn7qcHYzGW7UZX4NHskUMzwaM7uajjZKWTo2yDVXc4soJ8DkVF3tUh",
  "key13": "5BnWjiLTmsZjBV6BczQthUg9r9jJDdMzTEjsjiyVssEG4sJy3UhLR6TY7JhnYKZpXnu4sQnJEXiNnU8AiFzD3W1d",
  "key14": "2rZwYsmFo6EZ4EawmdtHWk5xS9F2VT7DrkSbVvW7Uw5WF5EZycVk4B3s64Y6NwksdtgtfhWYznAWB5TEQqNw2PGy",
  "key15": "4ZaG517xUqtxCva54Mxfwfg6Jk1JDADcMvYhhXu3r1moQNMpRECs2ta6xE8BLKSfYDJJNuZRqh3Zaj5dRoRSjkjt",
  "key16": "3sobyHV7ZSfERDjJng8UoFnKTj1wAsxjJdsHo9bDvrMGkGgZ7rG9XraccKCWauUGnMPqzkfkSW6wkA75ys5GLAm5",
  "key17": "BpGqftQzaDwftwp44B7dtGTMw4zxk7BwnqRopbp8FBnHejotH6hD1E6sksEHi9xXmuAS6AzoXFGFgyW3vTLUqLC",
  "key18": "46aAtakyPRndqHBk54RxHmmndi1KK52PUm99nPAU2w6MT5htzp9Ln1ipGpH99x8q48cMZ5wT99kRAYqyvghEgnck",
  "key19": "54kRiit6rXC6h3i3oMjRumAqPCuAYxWDNx3ZuzZnMbiZcWRQmtx1ZMy5RVq8oDLdkJjwhjGy4LbfiYKtsnNj7wch",
  "key20": "4fL8mawQGLh5hbTcoiY4HDEXZXLKzg2mBrHvkaSWT8VPJm2nCtZD5z6t3bFKCXfVdfkaTG3J1Bi7vWpjT2sHz5pP",
  "key21": "WeNbFLGVxuJ9UeQftrc4LVT2XysfbFC3NmbsmYAtg4337Vx1KRJ6fVSD4gnM6CczCUvrG2VC8bJcPD6Tmfz6kPD",
  "key22": "65YXbRnkYycJ2GvsNVNYCmyHSYqKX69bZXYJZfrdCALdGewc2BBupGqkeF4BbCQnWynMFurq44HfUe83gBukftPT",
  "key23": "5yRwN4pCVbZQ3vBtmpHPHwo7wWCTR7qv6CwVBxTNCiAsawHBigkrvn8TXaSn2y8Epq6zfvv94CDnvRhxmt8qj4oT",
  "key24": "4NsjzUV57MY33t2ob1pH1Ehf4UCEwNNuuDkn5C8fFuoQitbejnzLdehpCZSZoiM8sxQyhuEAJxZz3FvAEyB3uRsC",
  "key25": "5Nx4c8nnCNz2DQBUgYeerKX1DdbXyhAHXfqVgvGfvgBK1QZpKCaMbv5H5EWCZx8SnubrNSMWw9ivfk4rg3EKt4pk",
  "key26": "66k82PRxZoD6nCt8f93UChVcUT2CWGpQULZ6sjuXrZQfSmYUPsUVWWPhmjgTwWGBv5MCqtJVdqRv6WQ6gmmYboaW",
  "key27": "3RwDY2tKL2WiWxadXfJL4mp1LBPrbv5JQV4AoqKe9kzRGqYdfHWz1B9JtdZvHJDigG7yE5XC3ymeMgmasHJ4jKbJ",
  "key28": "3jcP5qZVn8PUS4juvhFiZvSw1WuaLb9tbiFz3TdfCmWpAFQa5hwp5EdMAXe5NBxWJKnGRupcETgRyR3NDhrZgZUb",
  "key29": "2DMQ5DF4jLkGEXb8UDzRXcaKwXPymK18p3JbEkKWqUdrzA3HiFMyjiSSJbtmvpiYfLdfLYNyMySxeVtfGQif4VAd",
  "key30": "v6updkiFBMWatUbKsLs7bzuADkYnKGDuoREMqpcXQN9iLEn3t7Kkn1iAQ3Xyq255GpioBCcR2gtw9x7F1bcvdNv",
  "key31": "hynJ4PLoaxpZ38uLfTiu41sFVjjzLMhJcXETc5kwi3CxYFLzjfQcW1rtTfoWCN6PvXKTaAuiXyxXsaB8Ju8Mgps",
  "key32": "2WuyNM7uacoNCb8PJ1Z2ycx9XeLTKWw2gojE54HMMG97sot4CxMqtkx22grWhBoWgTuaFwtkeSoxJ4aZUDoBq8Ze",
  "key33": "3khNXSFzNej6BNfpvmQGFFQFmxKtbTbNyATZNwQT6ybs6j1unXjXCie3r9w271gSxBjsQCaBqL9hGkwXSrkLjiJs",
  "key34": "5cNk4cUkbaoAzLGHntLMCoyCGtzhgQdoYeZfZrRi5Ny5P2qwZ2VZAgh6mZBMWUaCXtBowGLfZiAYEsJZkESVXZVN",
  "key35": "2XmoUhaYxfmUozvumoK8HeedcrRsprAWCUBqbeVKMicnU3QUaN7Px7gFUfbnVbGykSgv8tYYu1R71o67nEW8rv4X",
  "key36": "4cHsFwribz5rqFPLaCaPNR1Qu9Hrg7926kYWrXpB8LXaX7uNzuFhXkfxKVsxyLQUDP2yGK8k1WSZNEdJqtPEAaHL",
  "key37": "24yokvVSY2h3VaLieR4zRMC5KCVgyA4dcXmFhaJ1JkfGJijmDvBrYjhA4iTHfoZ5kHQqyL51S8WsK6fUfxcLHQiH",
  "key38": "3euiqfXAYtJ3Cv28KWynCnbZRFvdMaKy1L7cKh53nSTzhodtxnkNjHngUPc26uQ249dsskGfsq1AK4gixSCZSwN4",
  "key39": "4BoXfyHjWj1pgx99m88WTPg6yn23XWx1ofPXxe1wwZioHAyn5xNDbvw8Vp5X2Rneaon7Emj4thdpGK1sfUWxZeMi",
  "key40": "5c2EEkErBtXJcnrXJbqFpDbf8ZHy51JS8jNYQmqkhpyz9RxLgk1m4cEH132Tj4w7N2kuq5FFrrpaSnSMmkaMc4hN",
  "key41": "21FHSzUZ3wLkRePtauuvvXnDrTdKoo72spXaYQeiZ7Vi1D7vkGdM9sG8thNgUXsCf4isg4Go7AhRjp8De1jVifS3",
  "key42": "46E2WgFXg8PBTGLzqoPWpYTcmwZP8RsM1oeWhggFQom7nPAo1KEQqYTQG1gmP3y3VVsqgayivrE5nGFN1njKgVEZ",
  "key43": "GoNGmwbJAbKyKUwAZTVC8nwxvHTRmnn4WR6s6JBeat8imBeEsjhVGapAtmA5Tito6FxkfAJKd26RVRLn5KHJRdq",
  "key44": "4qpcah4DV97ZGQNhPwfriq5aLyB3K9knptTA3rFev8DsBcBQyMxAcbWgGGbnWecs1ir5DnuDaUeDRwVvxxD71BUf",
  "key45": "tmoTHo8rYvU8RJ32GF6bcZ3FEZq1KyLJ6EVC51AxtRizE8VpjxUrY8FCdcTaFdJSsj3cvAjoqKSTvffx7TJJUCv"
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
