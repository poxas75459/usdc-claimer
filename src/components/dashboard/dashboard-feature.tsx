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
    "5gWLBoWAkKLNfDjQbvHCUQ1o9CQGk4GtaLTmGnnnTnLtGXKNDd2SoUUN4UFpJW6MeTF4BiRQLKyZYWe9638EVNJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bBts7vCHjLDF5rzXj9PPargwAcE7ikLT1PhaEWn6ZURGdL8gPpRskZewmfro47JkpiD5HEWM9xGFeFCUFwqMPUg",
  "key1": "5xGef4REBhKsj62fS1aaJbWVskCt5HS5wXH6wSGiwq8ndxGxHVRJ5fU1YWitiWR5SDyK15yY8hBPYmJKukEhsZBf",
  "key2": "4RZbK19Paiwa76TUMsRjz69bUY5NHkBdFDJeYAgWtZDuGK3eQHH8ZMyV4tVG3GjYYJsP94sWq5HPHRcyczJffHDF",
  "key3": "4gJ219s4u2zPgaEof3cxA6i9xvxxJugRSL25difZmq6Jh4RvaoCqYK2maQs3n94K52HutxLndZg7moJzPbaYnZgg",
  "key4": "42CmmHwMLxenT8iTd4JphLwxEd9sRfxKsLU52acPGKPHR6NHeS7JNwoafwnwHHeXeEyxJDFhKfxxKXfeVvc4jU6D",
  "key5": "2QGCYU42aq12ZQPLi2fYZ6XWvdGVQ7j8uXD1fTjF6YMUi79kqwdF3wbZUFXEFgoCW5ME8TuGvU2PoHjdSSwnwpQE",
  "key6": "TvN5me8b5hQNSZXLVFUXguGTKxftiaLojDvLWnCr7CSFDV119ynAFfHumMWop2tXuFuC7431Np4fbZPF5Jzni5W",
  "key7": "3xC9GXCuKBN1KfNgqqQe7ftAZpJ2Rgn9VZzrgezujcygGgoYmp44p4C7N7ASatkkCBFQPdTkF7jHNWLHAs12Wdzp",
  "key8": "TLLSrrvgLuhNqvnLenXX5RPRkaR48T8kcE6MgsPksLhd5C7no5fHgB16seiqqdpM8uXxzVumopX4gVmWj2AWiDQ",
  "key9": "3UhH2oqQLC1VSGGcVFLKJuhBSyCaquB9RfRnGD6vwjzLzPjAcm8qaTCFbK25yYvxY9eHAQFf9hVcmGghF6EbWWhZ",
  "key10": "4J4cxfWPirEK4BmnYhrqfQKZcyEPpSRgKMXwV5xw2d48KXV9mgPNKwPFbefEnAYFTFEfwP6fS3mMavSUgK17ZSbL",
  "key11": "2vuvuhHDBn1917YPJSqiDT4TpH5fafqDyG6ZdUHPajXh3tHwE2yZ6LnBMUBT815fJzHtq1HWcnq6gGEcubVZ5CTY",
  "key12": "2b54QybE99exFREtBvarUmhq3n4rRFBnoMJaTeG9MrufKW5GKmzU1pFtjenfi8K7WP6kM3Xdb8NwN9VbEgoMQcQC",
  "key13": "8FG6YVR5HpDkydmpR78PDU6VAo7z1Xh1UeFPQMdj1ankwA2ziA1gDWZxXBFZVc6n6b4nA6CGbHbreDj3yKmoWwm",
  "key14": "4KM1DpkHqcZh2DTyPjvTSaivz2djQEaJ1ZJFb5mGbW1EUSvmaxFu4bGezN4CJCyPi6nfmY5Nghw5Qtgow24FTPZQ",
  "key15": "3t163g7qXQHxJ8LCKtFDqpiC5KgGYTgVY3twihThfHFtxcTN5S23DQe9iRTSYrLgy9behschnGypL497qu8qYLK9",
  "key16": "uYFdtJ35VUX8Z4pQ7pGnRcT4wn8Ev4HgipLgGzD9QDH69SJMguFLreNbjzDfQo72dpB4pvH4WMmtKS5Yqfu2WCG",
  "key17": "4NgefC45TjGLuPR9QRhonMtv4JZpopfjkKHr4ZBauTVMNjLoB5KrfZCKBV2XNn5u5bLqb9Qzeu2Ga3fHxvMhc8Mb",
  "key18": "5qA6n52ukV2xRhZM9fCWUrNAU2uPpu7DPNFYCHePQGCnCnDYMWUR5M6PfxLhiMGCAfY9iwZhMDtT8TddZ3asu9EN",
  "key19": "4ZaJkrS5yHZbFT3hnDe8CiZdYcQdi7sbiFwp7Dd1GZZGgnhpJ4BLFTnRjvBfYy912oiyMe51tueKb18EmU1jEL6v",
  "key20": "2xjpKaY5JMjFjPNVsC9W9DGDaip4nNvuYKhNpPu2YyjxsGys21Bcr2Ht1niNEQ3vSVqrqA55YNgTkSZ54rhquvnW",
  "key21": "4wYbWhnRKsPGDu1YQfsFjTgRNpVKcJXS4ijf1x9TJuFmQwqPMbZuYybovhMCHhte9xY1VniBfkbmMBkugBJ8zw5e",
  "key22": "5exW3TBBXzXmC4hbvL2wW3oXiZRWV9F6hTZCRk5DxH7bEmWVxdVLayevSzuUYB5QPeqiNncUztzwmYdoQhEe7XQt",
  "key23": "3DJLZMPT9WxW2rEt6CQA7t67Pm7GeswEgx8Rmzg6Dej4wv6W4x5BpsNAm7MC51XRThh1uTn4cyhMEXiR2eNreyMT",
  "key24": "2BL6aBS5kYXWdXYJ2ejxrDQtL6SgQKtDS6XpYiPq3aLoPUFc4ZYswWZWe8Yy2ksWa52xSTuLQgF7LBpmvacUHTVw",
  "key25": "63Tzdst8PCjvnvR4nWmFg7fxU6wpuFexVGjQzYEnuUxoar9dpvahBpbZNMtD2yvMqMGadXkSDe9mVo7NuEVruNsY",
  "key26": "3ng75d9LDJaVFGDiL4vY9HES717ivm474h7dKzb9exqi95gPq5NNxFnfQrK4CX8kQDGdAHDWvctTyP2yqpMagydG",
  "key27": "4AX2ph79YiRH6ZgQYnpcGeyMuDiJwiWez85d1DwjcS8XnaWPrt6zVBBy6hm9ofDycPDRauH3APw9oZYGLKRWX4SW",
  "key28": "3bSTMu2UT3RuQv9fVeYTMn3Hb6N6NpppFhgkVSd1vLkyKUt3wdwFbopVhH8Vmf9Uqc1BWNKJv5XNDN3ZganUSdPy",
  "key29": "431Ljv2fYwLaVCXuxEmJusawXUydpjUhG2svWA71FYLsa4f5jC7Tt3exDY9zzQ71Y565znTRr5hQXfmQYRaTzu9k",
  "key30": "4ZJJuwqC7NQpqMPgkhz3Byw3FqLTAqV7AAoQ5Q66Hh7cqTpCAGeLks5WkSEVz9TUbgtBzfwQX3oK2TWtRzAHxhkQ",
  "key31": "ZDQPvzZ2ZXC3macgSDTybkorxfDmWxkacxGTbfVb36hoVtzKcddzU5h8F2HhALr7tTtKVQ2eLgPHYZvjTYCW8AB",
  "key32": "2V5ine2oPu94xqn1HngjuCXfEYKrq9ALf8ZKG2zLmkPAnXsYGQA8W25qDyTkvGMPoyQmZ5Xg9Afy5gifCnxYR6mu",
  "key33": "2KkGkSCHA3mseeFkSu4AGAFvcsuzRzp4aCvRUJ7aKUYjGyEefs8J8FCUtYk5xD1xqK2GWip9kvhwGyFUtG7Qe1md",
  "key34": "PDDzaeMRbQX3ubpdetTBEqhg9xjFKzA7RtNNSpaCvddbi4kjhDgjCnNWQfW9ocXfGKUAq1957oadts4tRVjMXrF",
  "key35": "5PYzJn5oEvdRKBsS6yg4YUuCb4pKqsK8xLn2y3xDsWpUFYrMJd86oNs11F9NcqGS2byJE57d1dsPkiBUi9mv56mL",
  "key36": "4EXqs1FpMH1x6vFjSMhjArmhB71qjESCCcuMKTg6q5xfCYur2o14ag2Ma19T526j6A8m9f1ZaA7yBCGmSab62ZkQ",
  "key37": "58a2X5zcp7gzky9GgjMn71Dmcp8SYUuzypymJticNPNkijCz9HU9DusXm1vzN6RjqqDj6hYygVKnWsGhVKNSeJJh",
  "key38": "4HPLQY79JfZjzUi9Z2MmnLfB84KbtfBJjkZQr7m6MTy6T9AwRddrNFbirV9g2LrGXCXvg58e9oKzEtub5GQvwgNt",
  "key39": "43HrCzP9eyr6J987hkPLdwrLMnYC5dcBCzytauRAxNmm1D5io8QKTR3p4dbjjVeY3NJ7js4vPoPSaVu15KouTrQz",
  "key40": "7hMJQDi8gwbPWVoa3Yja4ueJhJfYFBy2bcLaZf5UvowMpSE8sfQQgJJvvusR1PquSfUZUt3Fpvk8ebkoM91XEu2",
  "key41": "5JRBDapUt2eESKWYK3MRBVgkRM5szbPfFTC1PzisL9YXN1awKUWs6G83LGHYjvpsXYzXbb2arg7FqMnasHbvNgHD"
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
