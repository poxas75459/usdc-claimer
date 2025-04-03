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
    "22SjhXjHn8mdTuWU9v3XnLF1eqV6MpZCfACQT5eJGWd3QCqTW5aPQsoT4fHtFtPgVjhjdrwtMSFo7Ajpdux1Tms1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55mrf2rAuZFZXW9gAMfaw5J3CGAokgrKqwAdji7pUZfZWzqKvQkcEA7sjj4ja4jsiR8kmBKnsve1QNSNyVRPD5ep",
  "key1": "5Xjq1BPE1ipj8JvU4uSM8pkNsQqeMQCcgdVdEmCVmed6Y4wM9NtKQttHjbYQyCypNCAL4G9zn95BNARdLgcZv42A",
  "key2": "treTrvkF33ueFBbLT5NPeSsSxf9C3pKryGxyG3dAUMDLmZEV3eXr8ZeqWR9LToYZwQzYms2LaZeJbC3vUoV6eDb",
  "key3": "2rzYedjX5hpaZFcn8mDP3DDcqxCTksTKhLzYCwrnTG11oHgQmPwjXuzhyjewrJhLACumi47drZvYHZFdCWtdSvox",
  "key4": "RBqLjAcfa5SiM6YWGk7NY7iwKNNzadKjoj6Q2exCgKDz78DsE15QCBfbex7w9YMzoNBjyX8bE65EYFkbwZXt94A",
  "key5": "45whDS2aPUzCM9usUdAo6Z5cPeozsnYJhyiir7TqxazUA1jE5NUqVSF8TPo9HFLk1fbrWxiaZmJagaEL9xLfhQfe",
  "key6": "5wQdGowKcFiv7ihJx7BRqHLWxvkEzDPZBJ7fV1kiNCGY1XxZjHEhWnpM3VvtFZo4ghxscZR5DHgb3cdNST7mtQdE",
  "key7": "2Sb2M27jhNtpLPu8WLuBci1trAnk1yabSnB1sgUCtDaFihKGNW22VFpKDnn2SgEEgPF38z97s1Yqwb9G4gTJwHsp",
  "key8": "349e7NhHn8kUYffmqJ5Uw8eb76ymdiBtR9wt6TwyRJuj7TqVyTwvDkpscyGWRNrCmNNppuqpGSGeKcwvwHYV7xNJ",
  "key9": "5BUVQPaZr3G4CQy8Mi76QG6WYyyW5Wt9Ff2TNfBaqtCYLEzCEu7gaWk31g7SBc4YrMXpbdSL1sLmQg4HygVFEEWW",
  "key10": "3sVnkBgHCcn4WgtyY53DBPFfcEja3nofrpk2r5xxemWkH69ZPvXowCShwGbJoxF7NNNZ9re7eU5CewnV2iuYf7ZP",
  "key11": "4RHKWEARppea2ctB7dvvecwNRpN3TeTpUw5dtmDLGQuxuz7ZDV99t7e7MDHUj9SpQGW4LMP2Kw1AWToJJsQqXX1v",
  "key12": "3PkxxPkK8wzACVKBugciVVCausKCkspJY8RpsQXfJJnjhageYEV4QgPF6mX3EKURVJuGJmPTWmi78qMPCnyNxNxP",
  "key13": "3x1nmGL9Jk7iBXZHqmoV6zVN4ewJb4NpGzMWeSxSL93oRuMWNcyvhWXu6YLh3ykwXMqUyTWvmwp7AuZwXgfmd8ak",
  "key14": "49nRU3o3kKEzsk4y6KgCUQ4Npy4EafF8zSmXe4FhusK2SGHF8nGbr9zvwdyAwqMEPRMKdjvMbJQRe6g5gXHZiZAp",
  "key15": "qBnwnekHLLzi1yA7i97zc55C9SoQT4hPvjvitdUXgaVYKGYpV5FkvXoBWpoHu6tdG7mq5nVEZJD7SRkAgbDN2Rv",
  "key16": "3ggM6t7prmpTRvagC4BZzNB5bycz7uk2f3po7eKuGjnWWRmUxpwKMnhybd6n4bt3ZjvQ4sg7PpvgVzBDRvXyYvQk",
  "key17": "tBUP1pmNr18eqz8rdEzEDqGxs76vZw7gFYudA3We9xnD72G9SXGkbp1WHZHJXgsN8spGZYRtz8ZWE6dxMSKM8M4",
  "key18": "ysh3QardGcYid2Gm3ZARoPRUzCwpiV9gZ75QcajSveMe47yv2fj1jKMSod3sjEXawLK1T8djJ43zBz3xgPx2TLT",
  "key19": "544Kho5afABEdF6JGfPDX8ncyFzZksqa6U4MKsGcznnRzKgMFVB2Rqb9fNV3feqVBJ2LPoBdjMWxX9EbzEiT6mLV",
  "key20": "2ZAMpM7yKeXUTcq9N6xdMpx4UCMfd2XhTweFU3qTdC7AVdCTCqXuMykffT2YRLctJUQvZrLnj55kXVJKxYZzW8tf",
  "key21": "3UQdMEmJbbd95i1Kguu8ZnA3iEHb7fzy9nio6vZUXCGa9JKqrp3Y6tE2UaygvwmnBpSTZRLkasZpvhLYLubeYX9n",
  "key22": "4Ds7kV6r2t3FhFKDqmr4V2eyB1zg8sBPs6HfMJ7cZsT34Jv4HFz62d7S64prcEtTFrMJ44Pg8zkf72mk5dHQ5CCV",
  "key23": "4isek9K7reYcrqBNaeWAAEYMhX2BoKWnGcCEUVTdveKoQMdt2vV24UC6isFraq9grMyDSuV6E61LGC84NuSBv54L",
  "key24": "4NiiEjwS3kR9qxd5tdUd6kn4zmMyyWgAVXMSnHiVNcc6uN7QPyCwAhwESApenQCnxkGsqYakuwJSFH47nKENzn8j",
  "key25": "2FyYR2TZNqtXYtEtTHUUs3c92rTXc1LXg5SzkMaWGTSfmfgXzVVuJVn4ppfBsewuZ7DLmJTLotJZs4aRSJQGaZec",
  "key26": "2suwjhWGZWahjoxMh9f7DMAnLoFL8GqhL5PWDbfGr218wRsSNLskvDRtQi1MJSK7r1fzrw4xKk5GDvXKjJFMe3o2",
  "key27": "2gedKmakrmvRbSr5dUXyBnvfCwnFeEK7vQ2uAQMFu9VYnmtQd1vYDkz7HxDrjzJ68jD4XHT5tWKSkNRzGatEw8P4",
  "key28": "FZ95jy5RCwYSQRcR9aXyWPRLWhkgMPGup55ur1pf5GVeVWEyLi4trLq7CuvR8ujY4gW1QfbRwJKLD7yaGFbSpLj",
  "key29": "2LS2cac9UAH92X5Q3xVKtL4UTfEiySTmMF23vbszv5JoaCF53WEk3TfqPdxyKnnbVAYTsEbV6wJNmwXW5FMjC3dM",
  "key30": "5x6ZQuFEWruRiUax1QCMRnyBn1rKdTpNHKvTw6yt8qc6rXWh2txCTbkdRdP8QqcBMBwJ8RxxtXdGnctmuvynPDut",
  "key31": "2GiP5GBgGbHwimCHNEiMjqRpgfu37YfVtKAMCTfBpd1crJd6au2Cb1dziCe6ayFD3t4BM2Gh5rfEa8WvHhLQ95ds",
  "key32": "3fa3WLu1i9C3rraES77MwiwodJj4mY1qas7mdn9nNm3jbB8LwMLg4f96r8qSLx4qNFYRPx36eJQnhwRRhvqZWt7a",
  "key33": "35ozTHmkwEka9zqWHAet6FVkCLbRkQQXLcmne74n4EXs82vhH3qCBhBbsRHzrxGXTZeGSWFKPEGdCCq13wWDePid",
  "key34": "2uVqsShwbvXNntXWkhycbtQmVcio8eTyycK5HhpFAtXWexVy5hRG1PEo4XMt9ocdhqw8R2yf9C8cFZngz3PFkuRT",
  "key35": "3q9Go2FeCSuKr7ZPFnZqAYAuspq5DKujvoe2UsbUP3BFGnquJjxQ7bhcm1p3KS2y9iVP5XRiGzZvhdGK5pJfZU1o",
  "key36": "3nVjUi5cS5Wnc5oLmx2e9euVWreJshhmLFpsKKewQEA2ddTjaqgwTGrymCjob39bYJ4uGVuoWeKhTWU3RCituTQ5",
  "key37": "59tNJVyHEstYB3WJbwacYdyDPKhYoPBvSKAXjmoXAJJiETP92TnBkhyamE6Ps8fzkXF8WZ1Pzf3dT8DCyu6kmf2Y",
  "key38": "3CZVrLyS2RbjdAyXUFthjrYgubzjAEhD4LdoFDzgwWSFV3H8Lh94oNUNcuijiMgTrCt7mdccdgKVLDHPEFVVAX5s",
  "key39": "64EdfudA7rP3nijv5deMXADhXs3UiR85N1FHzPbCHA4df2XZn9EUgMCTcNrPBPYpHosdcXQGGtFuvxd5CQLpUD4w",
  "key40": "5gimqEKaMqdUnVNcenW892YVxD9Aw8mntSsDHNNcGsmqTRKBop5JYUEhCTA3uJv7jhYnVvQbYz2a6d65cMJNXbc8",
  "key41": "65Wrkuw8VoKhdNJ8R8JsdsuKhGDNhHPvyQUHUwhaSY6t2wkxLAky1XNSTZWkX3EfnbWkay1929mhpf4C9pLvtZAA",
  "key42": "644oWPikfaSwyaZwEn89A9fJ4tRb4xArn9Mgj6cCvRdnLZyJgCCMrMA6XgSeitXcxVHkTJHBQxniK3fvPR85A8Tv",
  "key43": "55ytSww51sjK2SstHodNWYE45P2n19GykQGZagQT6XKP2YNxJ1zSpBCRbqdRwgPuFwAr5pCj6eQByJqHXfuXrdEp"
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
