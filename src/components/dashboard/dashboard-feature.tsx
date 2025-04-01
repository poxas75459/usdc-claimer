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
    "5wAmMnSogqREQfFeiiGFNBCYnHEsnADHPq4tQUzBFYakf35WqKZbnWdqd7Z4k1KyLe4meLx9pecxis8LRgZZ3snG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TnBdXfBP1E5cKwJsFjHD4iG6BEhq1Nm1xQN2mkUh2i89G2FS9rzJvEStLaR4512EeAWgSmLkb8TaFhqzR22nNQ9",
  "key1": "BSL5eKvMgg8swvQqz8376TwvWhoGMJVL2Z2BJUHGdoUZjWYCoQkfUPvUfW7TsVcpC5WidF6syPsbhWoppjXnSES",
  "key2": "qjbA64HPtAvWnugFPENEKBEHmJw1zxr1dYHhb8Xc4BcXKYQgPLA5MKuY8WbA3H5tdLRkhxYkmQe3b538VP8r6Gq",
  "key3": "26kiNfSh7AZe5tkmRSQgkUB9at1KPsz9hUNQTC5p9sQzwZmnwatKJhaUGhu8Fddi74ryTQr2W61NyqLdkyAURU1d",
  "key4": "64Reo72Yc7BbD2YGX9fw8UB6KbPWM8XCPDidUY8UgNUuFzVcUiz7Cqhy74VPkQqyCkSWsrZjFmrF48iqaDcvmgcs",
  "key5": "54Sx6R9MPy6kkvzxNTj2Yis7ny2Ge7UNtoUfVWytF92x9ThtJKyDCAEQsTDNc5B31Rhu6ABiquq6MCpWhWPMryBr",
  "key6": "2LPJuGp3EnJDdrQcJ1FRPUsAD6egw3MUCoDFaZCPqPdCHbXSAAmM865E22EK94hspp3z1d511t2NxDpP6G5WxPp1",
  "key7": "5i2nXQcLEZAZSgFWzJXw2zUiKBsw3StBb8ZrhUCAp466MqX5BWk3SU4hM3ioKSUeUjKMhoyqpFEmTixUbqmKHKxh",
  "key8": "3Cqn4o3j2upVZdfsB59wSBHYXNr1jhrR14c8ja6AkcUNrNRSkHoH415QE1ahi1suisR1dy5jZYArUpPuFjouAua7",
  "key9": "zNp5Bx21qu3tGgop66DYYStexbBhh738bneq8fRM1RdsrbduAHQvqhA7v5ysxhdrdQB8tk4TjF2R9TbDCv6jJCN",
  "key10": "3wVnvzwT5wSxSj5hx9aaenqvgCJ5Un3Jcv31B5GtcsW3b6RYUh4P1KmN7ZwH38EcJX8XAUasfoSHELMTPpmrhJQw",
  "key11": "5JEBsgMfddmqGvEHyX7myNkXpytzw5jtn21cAm7qgA3PdH7Yx3aWzeUc8tKd22AswFtTtzWGCwU1LNNN6DFSfBwZ",
  "key12": "4SjmRQCyChXNVHNQ2W9uYdXPefkmCRQFRHScExKU9mEtHx9iro7nT8VswaYsybiA9ezM2ZwVSKUSpsQ95T7SFUYw",
  "key13": "29ktRtVoao51dU77LZmepxsgHw94eyd7KQzaMRBawsQFhmgjbgZnXyUMY9BjJkL5XCvZadUMqjLuE63cMF7t4ABZ",
  "key14": "4QT47qpVb6QDnKc2prFdwYykD7jMmGoxXyC3s6PFEWwYeBje8hrWkRux4mSzKP5uB6yhZDa4g2ZzRLfJVwrCRCK7",
  "key15": "5cFkmBkqPn2CRFd2NGH3vYUDgBwBDRNA9NWcjJkmQi9KtZAJQE16jgVz5WLnTC5v3yEFY2YDHcTSt1qDyPmY7Eyk",
  "key16": "3BT6XraRZGYpqR68J12Y2StkyDAFmz9L6oAB7mnSYyPSeGSTdgZZriSJqShqig3DdAzNhohW9ptgT4Cc2CtDFM4Q",
  "key17": "aBFvfkQkmipoap1mCmxCiLJhrPCw77FxZCegaTznTKh2yCa6WdCt1H2GrbfBfSuJpJi3zy4mRZ652etRADLDk2K",
  "key18": "5KjeRssVuKLjinxHMLshkyvwaSYJpVQLas9erSWChQMjc2sck9N2Hx9RKABTS8b1QhdVAinmfZi7cQ3fFb3qwVYw",
  "key19": "HYP28X8vxvBrv8Ri8empCKiodA9wmqjeXjnAcFvKMXBVuhcKpqYyLFHyTivxHk7ZGdfbjwZY4mrCyzhiyMi3HTx",
  "key20": "hmiVBK3Po7LJdBizL83yssp5pjzKkQHofPGxYkGScNQTxtj1N9TzDUYLhsWtoeu9Z7KbaK48idvhd9XRNbhB9jX",
  "key21": "4f7csEMJrgZcskjoY2wSqgWT6rewU5BR9g3b71DNNuon3eWoJXR1NvQ2UF9wctYs8egkFH3xndVdhuGedWRi63xR",
  "key22": "4T2XRmniN6Qjixi5UYwWoC6m4vBeVdWp8xzMi8TZ5ZkPVY5PqiGHsqWo9ExB4ogWoapu5eGZLqEnGouboZ6nBUrV",
  "key23": "5fBTpf5wwWhHmvQoFMkK8k5H51WQXEvZ5rYriQApAPN4vYtnUHw3k7ap5BQTNn4sozS2qzqRuTMqDaNeq3HmrTvL",
  "key24": "2VjtsuufUrfwKYVE8zDHdibC36GGWceb2q6ueEnRMZYtnJdoioJxPcZoTjvrEYEFFrmSy5azjX6KEQZssNQxzFmG",
  "key25": "Rz4Vnt5qQse5Coc2nTJnbgQbeudK46vx6G2haVJY5cU2WZ9DPBZBiM5xMMCkzjUJq8jjEBWHfpiggKNKiPfFTHe",
  "key26": "3WvgbYxcYfzjZRD83Lyg4VWmMcK585UfNP5crhzqzjLYVY5CrRSAefHdeEfjyT4WsjbzCXUDGKwLABQM7fGBV2MY",
  "key27": "5jhxwX1z8z7jMb7gE3tZUsPTcy5z9LF9Mci1icHvNk9s27gwjBKtNX2bZovJgbCNbpmkTzWhXHYEzLEJkXXwaBwf",
  "key28": "sjwS4RbBqvCgFoAupQRqQxeJfDew1tcWpJ6c4NZ6jnw56MKHkU6xG5Cv4hmf7ShVFmeQWcr8VQLDcswPpTBXh2j",
  "key29": "5zZuUs3EAjYGwP6z1GhVuRsrd7sTV71hqvVnA5ArHowofwVJnzTsUwiWstxFr3ecemwwFRLDxSjgw3n7CES1bqaz",
  "key30": "3fqdD37zQFuEpusq7JuCGnPKXtBfpiVevCAXqbLPi511Z8ZPHXd9c2LQzzxYQJC5v7jmaQ7tkKpFEmMkDD1hS4uJ",
  "key31": "4LEbijMazQZw6dJWEBncRpjkhqWynFNpaLB3i4ZZkwsLZGQa748tsif68WCUMzL3xcVVHdmgVMsNJvALtxkXpCDR",
  "key32": "48DKKyTQasVemegqhoKegPnjkXiVkWQubusByeghNdUq77npKBDjs67dMZ8wA8PKKazrQCUyuusPYx6ZgAMrqDAY",
  "key33": "3796ooUuTxKCXhu1eXiv8ULPGNkLQirXkS3xpijXzrAdPZQMTP74rV9p1dkBPqsH6jsEUuG3cWmpwuFbUrqDdd6m",
  "key34": "3bEsBWHwnxqexscSBEP59KFLAH13DfzrRt5PTTwJw99tPAfKGmVwjBn8jp3yPcTQ76CynZr8u6YRezezHz57BRSV",
  "key35": "5foSTA63u1aqQFtPiupsh49PD5BEng1XxxfErZRJNiaoBT9U8nFXE6q7hWwortpvMcNLtZsm7uVM8fyrZDwVpSrZ",
  "key36": "3qTEPFSGQkkbFecwXyrd77HRWLJdveizA9KoE57htPBaWUtTR3cabhARnN6MGhLrqZgroq3z45G1nziVENEGPazp",
  "key37": "uMHE1BUWmaUEfYhsrDnqpW2WKGayyJSh9QWg3xLtZoatwGoLuguGwDU1iGFztrxjrwPm8AzN6uYHakQi9kCPFpW"
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
