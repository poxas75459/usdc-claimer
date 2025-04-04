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
    "4cXQVQCD38ajX1DS92z6uAJPuaScf8n759bRkY3dXsEZGhyx6qbSswKkkxsCuLwjbQdKdBGELX11vQUQePNrLx9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vX6JTsnDMo1UfQjtmUBasHwL3u6dQZhJHRcwdsVeZVA7CQFArzrWCpajnKTYrvMWpvy9EWrnfLadycZ4TBDMdCH",
  "key1": "62qW2sGXtVLt47HAec5Kit5RuyDcwpNy9poLhyGBJtwNoJe5Ci48jGrVHzVgTgzjBs2n8wQ8hWV893eWYbVrT9zu",
  "key2": "4gGmBv3nuQACTz73gL7NaJMo3wjJf8YG7DE4gZvWh6T2o2irAWk4RGJ8pSnbrWQGhA9fMKZtbHQ2NwijD1ogaSq4",
  "key3": "51RGXDJ6QKjrPGVxxn7XdD7LnVo6o5P3CVFQXf6jc9fJ4KPxBWDBjJz9G9ZL47X1d89nyBAcvtqiFRzZJnV2KdmA",
  "key4": "4SpxsEMVSaUC2mK2xatnQxuAD5835iRX4i7b7gJuFoXQhJ6mzXjazYwVx9Gz3A7FrwLEwd2poSww3gLhJUDnqd6S",
  "key5": "5ihWFLRLp2qqrgh5uTadxJZ9vHhqZEe8iZvTas5s5ryxZ1iXmd7T9wNkLxwQ69hdgQMLWZdJJmwrvi6S57yfri69",
  "key6": "3xMdPSz4qTRGYHUPrvXwMXW81MNp4bMyYWYihnwvFgi5abxZ3aDGVTeUw5uZ5cMiFYBfUkSGGwDSJHxC36f17M7",
  "key7": "5Lvc3zj5zLFdoQEoyFqcLN138fMskbutN1B28QXzSAbdMNJFYs9SAASAcjCGoJwkzTj5SfMYuvFxfKdcnXzfpk6m",
  "key8": "Aqvcgn3chgkmbJqp9zUi5bK2x3Y6ytVyLwjCnmTLULC4x728vCez97U5hXieaPYbfSbyKzy1qGLh94apWCicXyB",
  "key9": "2mEgGgdnEmmcqSkyEgp9Zt72U2cw9BD4AFYFKgx1HjEPwyt8nYwRtjeZC6RbS3ZFDeoSD4FcEeTW3NiYWGB6KRGM",
  "key10": "3KnV5UGF6gCqViBsQBjnWXkNySFzVqyKEFWw2scM58NJBCRZ4YVHmKtfi2Vt5JKtp7mRHuF9SAZ54FjyERXevMbQ",
  "key11": "NLQ3zHdXtAhDS8Do7pcCiMTJbzXNGu6V4X7zGw1EH6jUGNsh9ayXmQu3CTrwtsFfs8Ud9SgfewNiQqoaCChXTxX",
  "key12": "5w3rvXEA2TMN4fYzswDXKKk7Ld3pGVrphTt9uc338rxk4PtTJqXt6hkGfiiijcojm5krhwbHAyyk1TuNqS1p2b6d",
  "key13": "3gT4v3w3V1qUtHteNRRgi8QXoNgcaTMZQX7FAVzUcoCFu5NEBwAA4WyKMMC9bYdhXv1YRBEK4Eepu1kFSKsAC59d",
  "key14": "4MkxK5QmC4R2v5JURuiWmhPKA82GQUvpYVDxEVK6YCrzVcEaREtroRrjzWHL8fpg7ioqBQs5fESJgYJCAppzjDqL",
  "key15": "4gpfWqSCi8pLcQdGCSfVJsY1icGkWyQ8qn9VGkRztqX9cMYXe1mmaCBxLcFraiTq9K7XhEcFL7C8Yb882KCypS7X",
  "key16": "237qbBsSrYfVKa4c9esZyMrPC9Xz6zgMvxdv3ofkwjR2VC3TpzBXqv1jSu4LQF5bQZEDfXD9jxhhypWCKURShB1m",
  "key17": "5YqDacub1FhfRaXBvm1P7sKJcVWrLc1hbhnyHou9AxsrRdkLsDvGxiHGN8XXwk4MhCj6m2xjaKTw6PEYmvTZpEZ",
  "key18": "4Ro5MByo2FyCCJaXg5rd8xAVB49riZUH6Hg2FH6c8i1s1fTpTA1kwLaGMAZG3A31LL7XPVxMcoqYVWu6HgFTUKMD",
  "key19": "2kytBgJTxQTGGEu5qhmQ9xKbAnvgg4rsebo3BKrP4PJM6y41fSyj2BACLUSWEQKdxV89TfpgiQuH1kEpHhLXizwf",
  "key20": "3S2ZUBnLRQGosC1CXU5Jb7jTeZFRE3NbGkMp5e2EoVv7BfHX7cd6mXGrD2kVryNS2z286sstkf77UcuD91AR4fsD",
  "key21": "61wvaGJG85jjSncpahtckr8H7YrS763vtP77temCJJWhxtN7eLo3HDPwn4BrRTWWMckrQzHk6yCf9pQnXGTjfyvY",
  "key22": "2XB9kCR2L4Fng71Tt84dCL1RDJLP2cyCMnArWz9NkmBF195CKr54r1rFxMjfJ51SEM3gqgPHR4vqdiq7eo1RtXQv",
  "key23": "4PHZih2jccNxEcJdT1w6bctRrXHkznvLfQAwFn7bzq7oHqXWJaPTwz7HvaYkDkJsWUuxqxUkqt6MfSGTDVunU94v",
  "key24": "3E2KJHYdGeQErXxdwZH3b9kmibdb9qiRvMvg45cDpDZopbLroF7rU5n1sGP6ky2rws6cwzSg8YATgzCsPubP4FGi",
  "key25": "2ViABvtbgMi2e72xrbyuJg48QbUW8adJyHzY4vpZfBdkkR6mNgsF2Lb3HiNv6KXBUpHEZ8nrM3CwY3c1mXtCbWYv",
  "key26": "4a2G2FwPHh5HA4pwkF9ikFbjBsXpVSHg7jBRjyaGAfgT4A3PWCoYpLwvj3ETbJWxbLiCjupkkGqg4oRKqqTVHSss",
  "key27": "47mDjy18r8LE8egTCKvcQ3rT3555ebpFNMnYWfrggxWgPE9qYyBPDWooQ2CbXbYXDkCz7sZBEV59mSzdHeibjF3f",
  "key28": "3t429N8imW4TkzQMvbYN38JpA7zfuXvKcMWBEdmQWwvYx1hPuJjakTiUMmYZH7rWRiJ6euoio4thfHBihuJUFxbY",
  "key29": "46mZEWZM7xUyeGarjqwGPXBYpT76n1zVJ6YPBajCVKeGKp17PzcK3FPRf8SafEuB1orCiLvjss1VsXthewiDTpxA",
  "key30": "VKkRkc3hDPqiQKqCCG66DQMGT3DSNbZekyfbTWUa2oLM6q8EHuXdoPjRiG7wt8BjzCUWbximYbc5921A6xJj2Et",
  "key31": "4YEtHFM3F4tQdptmgynhhDHYQQiDgFC6rEgjuELALGWAg44M6QkRWyt7SWT4BtQukrnKppsQFs1yitBnETcgy6ZA",
  "key32": "5dMKwtM5FZ4mYhvHjXBKCCD73Z4NdMPqtawuPAnuKARypkcMWvCbv2rsWvFWiWQpayAQUhVn6M5zjUx1Wo9PZnjJ",
  "key33": "48r78wHz3F7KniWf6WydGSZrSNmEjkqAMVyc6qVWdYTVCfZKzQVh57Tm2KixKej13XNRmTbmZbbXZfjyLPUzvurX",
  "key34": "4qeguDYSXfJ6CvZzvn71ZuyFq5Jm3So5GCvNbQ4Bb47xfmDhh4GaMMwGAKfT6uSEvFoQxCxrFYWDvc6fRwKTYWDx",
  "key35": "5vJ9SeRHNrN4sYF6hYiKhnC1k7qqaL4USNBn7PFX3VesN2gUL6mrW5tfkfNgSPDUVo8nBaC7DAt3edP3K2E6MAyr",
  "key36": "2uS1o1Kw111NkyGKicBRRNcM3vAoeRHAeMGn5Ygu37oweLxVVM9nXWYWWeGPyEq9w7NhzqsfKun97UJuSBpk6pBh",
  "key37": "3q9MPmCy41vkNuaYEMgUfFqPTM9xA8EG91V5iw8zAe6oFzFGseDWsms3Vw6FLea9mve68sKonvpEXi2WnaVoZ5yN",
  "key38": "5h4CacBT7VnAtha3mPZDQnvq8hvSGou3Aq8Rzx74q8oLLgdDjJiYAB2tyrpNmcDT2CUswCgns8CpuyBPETkPiTyj",
  "key39": "2Fp8KBWW5ibQZypfasvVhVFmzS2Qx1wJMRfFRkKQQLRLcxPbTvTnYaVuPRrJ53hEN7JsqWyhXeEdPbt28zZexgkC",
  "key40": "2jih9WGH7WZeNGHuJb89q4hAUojurPCTF4aBoxqEPRG5RH7AXrhf5JhCKMVDhk9RRAPoAFu7iwmb6ucuN852wzUE",
  "key41": "65yhmutUsiigho7dKCn5Qf63H2bGPiuobNkbYy7BbeFDGMdG35MtUr84vHEv1MyBc7KxPT8pZVkErGDNAXZPBnnc",
  "key42": "3G9DYYqZY12Y7GizXp5AcgbZf5bF8ZVMEZMSPQNyVm83MTkMtYWy6HKTuQHHyV1xkkXLKxcaQqjLWupWm7yfYrQe",
  "key43": "4DWw26hS8SDXipdAY138vEEXQUXm95tRfRhHcgPddUNWFLqXP13JRasykjwbATHjSUmjRnV1xWtBzEycbrWXS8qw",
  "key44": "oqS4sdjZzZexuUN8nKhYHrF8xvUeerepvQ7QXaTLaA8irEoLtxFJzCSD1soBW9VUtKiZYAqAJvPnAQS8Tw6vbxc"
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
