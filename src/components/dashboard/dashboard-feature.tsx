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
    "4CPEmyVQCnQB9LSddc6ey3aJXoiyRb6mouwG7ELbaQRjxiQwiwXBtkGuN2KwtMAM7irsUV4qrAsKmy5Pxxucmrse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DYXuwyKTZW41HiJzDjQJTt5PndFST8B7sGeH3TEsXeQjwegw5brs3rfW2NxacRghvDAnf8mJxHTqVc2QdgwrsRq",
  "key1": "3Ng9UbqdfhbkHLeM3Jk2WpYac4F1GaRHEaX38nRwhdnTA5Ti3TnNmH49QE5W5QkrmDJEWijjXcFYX5h3oPsQ9YpB",
  "key2": "2gVrUYwEf4czZn86oKnURsooNa1L5AmDmNfDaDLWTJ1fi9o5kBdoBdUWNftCCpsGbAMr1QLMmjqz7JLxfMigU8Cp",
  "key3": "3Rfi2mRs5kXfZjWX6MPYGizYiMAQeNYZyvQ89qgTXYKFFEvzvMueo7b3TU55sTA85k12ryDHMG5R8zzZrC5148jF",
  "key4": "3t9GxqAVbLpwFkr4YwoWBMvtJN3bwgp4x1bHTMqQTRRpbNmenWxFobHaN3bwenDeGbByK3BdtaU6KKLHYgiR8UN3",
  "key5": "3T95JRd2CqjccVscSnuMDZGNE4ZUzuQDJ63eKdmTfrccTnxnQEVXJs4yNv7oeLcvhKgmhj8HwG9RCrDV8JuWJMLr",
  "key6": "WwXasLgw58dLKSwRYceVKjTaMfgbNgJEsBkxQuRAnx8MzVChjx6sL6YeLweHFfnc7WikfdgWYMwrMKScoAzQMhn",
  "key7": "3211nsFj5rztmSvZJ5886kX84w7PgLRmay7gwWUhrbTaAjFpFrZYk5n1NwcUutW7F1VmN9Q5BQmfRSFEWFFRn4JP",
  "key8": "2VixyLFFgRgnTqRJqn2m71J5jBjwfWJmci4B3Cfq6fRhYGGiYeFGh2Gd8ErKoFjMw7cpSQ4W8uR5bmPVnmH8sMB9",
  "key9": "3aQKAd4kvCSE3ryntzjfwnubePKXmqwJZ8dU1gTb4brrDTueN7EHEXuTsmZr2Zp5kTDYMH9Efv53gfoGYyY2FUgX",
  "key10": "4tJDf4keFR6pc624trJE9m3DK3cAYjovXrc46Gmj5p5pkMRPBJuxGRMJkmr5nn2mpga61iAkmpJ436nkrhHWvU3v",
  "key11": "1WqvUetdUEDanofn3YbwtvZrptAAXAixjYiLAkLjZjya72tc4vc4nafEMbSNjeu94CFy7f6SBWMNxjNG9UpRZ1H",
  "key12": "62FRy1PUsMhcb8pYtDNpFjBnsXJsSvaR8fB2EAft7z2LZ71Rffhu66tXCoXoBvRKhrBeUjwuATZcSo5wHyZ9DZSV",
  "key13": "5fHaFBwpGdLWgkZsH5aEK2raNLhYfHaJS17mT9V7haeBmpYQQ4GSzWqHnYiSyxRj6sh4kMRdUH2opK2L6ZhRZHk2",
  "key14": "268oUeiAehaxAmd4K9ypubQuvUp3zQrnFYLm1cREYRsKj8AXwZg26wbAxnhqqZshZDDfLzm3YSvQCnF6V93wpmHq",
  "key15": "4T1myFZmYZQ4yiPFnmdmuamamdKsr8Cx4CQ5zfeosCdNiuHRYCZosozmhWZNFZHLrXMV816u9Hf7WuQ4edS6dKEz",
  "key16": "Gj65KenDzWdpaTf88ob2LVPiEAc1M7w5uXjhgp5qjgHY1TcsrwChGXwHTaC2v7nHBR1taSM4UeTz5pmPiu1civ1",
  "key17": "5r2ReAfh9DibNikwyeimycpZtSkna12TEwx1EGALdUQMSPabeGpRUVoJZaDUE2T6SmbynzQiHifZf7WuY2erb7fb",
  "key18": "3DfPNQRjmy5t9SjBVzUK1BiUdv9mRPYTvQuRNcktnckSimdrpaNoaqTGy5BoSrAatxcRbpkJyP178nKmmRb4LQvu",
  "key19": "3nCDrsBa9qejyyS36inhLSyzyZAPYaWwUaXAyJXtKrHTUM5p7dNrW7BBuSbHVH3q2WRmS8SVssPfYN5Nwte4Doxt",
  "key20": "4FvPyfMnVPbzvDXHdHbCWPyqjqW8pPbLSd8iaeNZWhmTacf8Rs7MTPwdWeuowDYSscjUETisEvYd7Jc4LnZ2yGUW",
  "key21": "iaRhVkAdgSP2YSPkVjbGpmuT4aYJNa5XVdX7v7tcnXGDkpM9UBcDDEx4CNbXURi1Sv5W5mBEF9saQUb3DR9fRGd",
  "key22": "5SHV4dY9nfhsXXJGPwBBKAnP8W14EwSkMiAKp4grrYnN5vehqAcJCasUfRFFtiY5pE1kZJrbvRub2V2jyxnkMseq",
  "key23": "cbGk6k5PFotNuTcdw3BTA6PAYF1eH3DjEQr6D4tbW5dqAdK9fjHMnw6WzgcSpajmkGveqGBHyqY8QSsTwWRbvdh",
  "key24": "5FDN669kDSrpqRG8G7vLQNP89eWqgoTGxA6xENZYfMMZ1tPeajG3Ymri1TtjC16sPDXH5XqxhNjzrVqSBShga1dB",
  "key25": "56nUfqpXyf44fBHC3C4MkFVVbKEghVhYDDA4HUjpi2KN6nsrkY9sjU4ZbPP9zQU7MWNYCSnH1Y96NBhxhEd2Tbjv",
  "key26": "3ZzbZDUFXaGVZg1fKMAtUUTJW1k3Ppmk32sUw5YtuxsnLsR8UvgtGmNou47hmXmGVC9BVtg1MmH3kbxDAidzQ2Ju",
  "key27": "3wrXGETP8yqreAzawYwwL2nGjtSztg2aAX3gHU7iXCMYoi17TjHGjUcZE2e3AycJVrDsXBtnbnqbSxy4zRWp8boT",
  "key28": "5nj1Ynbkp8iNnuHM2Hsw3BgT3vhu69tanBk67f98wJriowqYqpvAPFzPg5ozvuXQqMhf27R8TkNSLXEyMVBkvDpL",
  "key29": "4Xg1ErcR9FpAys6hxwnwHM8LgYiN8toP6pEqZESQCYRhauX58VwYbZctGNhnkYtFZx55yv9gwPAij5dsXQP7AS6e",
  "key30": "J2NEg4dt68eFpZeEyVPLp8TeFXekbMHsz2ECvj5ksN3fcgxecoTXV9UTpUXDmKfG2Q3ucPGJrfP5ikvgvWm5BMC",
  "key31": "9hcqRFiFx1ZJL3CHQKBg3yr65Nw3tuWqFdrHFuxBNxGQi18rgxHhvfczVB4nmHYXqHxnygey6Y5mPvG9b761H1m",
  "key32": "42YYY1s5ePyRXhNwtAp4eCCqWy6JEFHkN8ZUGRtA8BDXjJvCALDB9Kq8R3xY5dL6GfH6Jm8do4UW7WcHq5GiWghj",
  "key33": "5a3PyDWPNMkG2TiWkWZj9SthBqM3M34asEiDKPz6GpB1KgaaM9KkWWbfTbmgXJcX6Uzsxw9XquXkKgV5izWH9kCK",
  "key34": "1pBkx2v2V2suXkcPN3Q3psqRyUTmdT6Daf94sQsipsameTvzZ7iZvqcSG5TfMmnKfzhRBCgY4JKQUkMXn541ruj",
  "key35": "297gKU6d6K7HCEqyhrYoGE54VRjmU5dAUcBHfxeHvFz4vm37tP1bceAW3bH3PRvTz8FBMvuR4aRFiAJH77MTmoXv",
  "key36": "zWzm5kzZYb7PfQYExx5aXhUwWY7vt1de9XBjnFtZN5SLW7f4DnGU5KRUFQ7DiR4iZTcGJR4vmFJ6GFZ1hJjWjLz",
  "key37": "4rjHRPN8qcF3oXGdzxsYEJMBsfCQ8t86grHVpMQEweUyRok3U4L3W7r9JqmqEYyjgureTrfT6u41BRkaoe5TTr7n",
  "key38": "2smsk8RHZpShgDaivyCc16zcG7o9faTmeYCjbMUAw1tVvcvNnGuxyXmYTaNZpvkBb4dqw3thKywxjfbSkAGaK8Yn",
  "key39": "5r1EXKm8xPFWcQ1zTLsQzgnkNxmZfyWqVCnFiFw8FY3rQLC6a6YQ9AsLgUUtvJCD6QYZMyoU5oXM4kycYPA1B7tL",
  "key40": "4MraiUbNkxVwYrhUsBG1vPdG58DRF3SuCekPTPjBxmxyWzpy1mPY8gcUQHARNk5UshkmRexc1qiMTf8Mo1DwmvoY",
  "key41": "M3N5VxHJyYvKuZqY3JBQhnhmjNmHoEPFifyLeFRg7zfvafELu6aGn94EFk9ggcS5qchTL1GY7bVtdAV514to5mP",
  "key42": "3fCVC14ZwW5zWv1mH7icQsPYJWs9ChfEr38sYK4vZPEjuRKiqe25UBJYieR87SzQ6rDMugTG4DNsB8ciZ26jbFMF",
  "key43": "4hDcFubEAX5ivfoFH5CFsVT648U8xjfBdkJh7AUojF7guQqCCqKpBStLNvFfnq3iv69S89qMuVHGh2t8RjEFtMbx",
  "key44": "4AZiAr7VG9SwXd8GFzZbV6Sxhp5xspdL9djqYmUp17zDYmhYBSpa7TPB6tm1gh7EXy4yRUxk1drBN77ZDd7htBFd"
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
