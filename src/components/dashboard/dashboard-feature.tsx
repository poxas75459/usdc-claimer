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
    "4zr2gPeXiMEwXr9hTnUB9JawfCjhanCkgK4S6Eqo3saQwnd5CwogQHBa2NutaDVWMLPebjKVehLC1q3vsjnFCGdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7BrPG8RZkbx41crpKoKoBYPpBGuZ6v9HzPDB9q4c31VCPVXkS5quPFpxnvZjY3nF4AUBJ8HmzQ4TBPmBGJWpHmu",
  "key1": "5DTNF3uyFHnXSMmSGR6Vc3pJjKJeGXBtcoU2qdur6S1KUmXdj9r9PCrVNCbkRHrW1UfBFedxMZ4MA7bigLPNXFuT",
  "key2": "2ZGtBJRMGs6qFC8iLtr7SdEu1spxUnCyofijVYevmUz4w7QQNGytikHavsMW5MVCHA7vJAJGRyWdVt8Lv4YeThUB",
  "key3": "56tscngFK7dY2UhjbR7hPykRBYnTV7WbBoCU7asvrRgJWQ8AMrz22gjAoXroLUcdwR2wPQiTs9a9dvBXy5rGMYMg",
  "key4": "5jLAccqKk1eV3DqL8cJhD1gaUo6YSVChSshvaDTYMaxpMEMo7LiJ5euWahT25haB2qfnNygHduBWFwrMPAbQFxXC",
  "key5": "3Lp7naVGpKLbfMuY3T2zj6UzHcdc4q5TAG8QrPi8xPDnowsouBtQL8NKC3zC5kxwxY7xmkvrWuSLd11PLLGfqyxQ",
  "key6": "35aYBGLKuXAyjDgasgondksPzqX9vm558bRbYMvNEB9ANSahCVsLM46LdN7umsku4vB1fdb3nrWgP5zvYjWaXeBq",
  "key7": "3A6SWMsaAtRr1VSspejTcNtxZMWifjEUZ8zsyiyJT5DhNfpk9ttpiCuXTiaQd92YytAqR4jxmwXZWdVtt3Wbb1eG",
  "key8": "4Bu18kNK4uENkV2mriTRb8jH1JMFtHKPRUfvHddoCRHKzxcvyG6iCTaK4pqKmpNcE4EQ3RnLRwa8SCdSNNQbN9oP",
  "key9": "2ZaAXqcU918GeqtQ1vUctRFHkk6Wwbn1vgyHwjtH16PcTD2fimG6mGTGP6FyaMx8Gdk6GDKtq7jidoxQkbw14qP5",
  "key10": "3y3kthBDZkwJ2sYDdSkfH3R7NBiRarHPVqAH5bLkCfX2H4s6e8NEyg53FSMSS1Twnk6bwua2fanEAgnrxKfwv38C",
  "key11": "5NaiW9hD9kEXgEKYXgBLvCpA5ENW1B7GBtdFKKcztmxHje5c7FQ8M1eAwCvjKzPSpCConWvG4msQiwRgWz1tSaaf",
  "key12": "27XrffXmCiZsrRmtD9hCUThBjxZQHgMYKVhVbUrsS1E5z97nkuyNRAJpTWn2cZGVxHqW9cF9c9gBPRHfLW2YxvuQ",
  "key13": "dsb2gyXRmEjbQisiiUN1pXTqY1HwycZRPrgGCHHvkrRB14CzzyezzMzY1Vwk2fhFiwRUdSRqbFRS43hU53z1EJt",
  "key14": "4TDpWmVXqWK27Q1xjmd7vr6WtB5M9sZ8z8qKmnoyPJyMw7X1k1HykZaFuVFePRgiobiYAjBRCGQ7gG31X6zX16z7",
  "key15": "4m5dYfKd2eZg749tvKCYMAJDSGXsXE1npfjzbVRSFoYRgKmQCgR2MNdGGDHRzFAq1C3cTQ7qk4JmT21xYxMkaLe7",
  "key16": "2QSrF6mpZjCXGtzEYSwKvwhUMymvrMcn8DwtvWRJbZ7cYU2qR1J6a5v6AaqMBoTfffeXMC89d45iahgaWHVNPRAR",
  "key17": "2X3Guvn8EtsadzZUs85HTupfDbCKeprK9pZomeRTjpYe4S1JyJJEFy5aKWZRq7i1Ch6NADWWKpmU4yJcxfVPNjx2",
  "key18": "D7p4HT6FkAanxCPHvrVv7LHSqAByuqZGDLGjv5hZsjWrWGs1iKJScfM64tgtYFdCgVGoEEhP14pwajcdJeC76oA",
  "key19": "2QsNLYh8vfB99iGUuDTD2gBY538ebmkMumwVQZDmF4gDSJVyi2s9okgEDcHgtwn8wyXKWHkyfKA7mPrv8ATDw9eE",
  "key20": "4vJdpN3D6y8Vx1ixk6gH36sHMVMV6Uv6xKmomYjMNWYC1gHNQSuPi65njM4m3RN9RAmg94FqXg34GU7MHmsh4roc",
  "key21": "3DfpLwfdp37CBPmxwuHMLMw7jChpTYA2RRhUsmFtknXxor5TotdbNg99ugg8qhedJHARLkVhR8zD3gS3iGdyWaFq",
  "key22": "4rMUYQDw9x7HvvAVtUyyLFyHquPcNeWrmd87mBB2aiQMp3K9APXbVe7T8ViRkrJEYySo9jKDNLaQZDpTpbNjtwum",
  "key23": "oNCnMXYHRgkkj3tCd25zRw8cr6s8vR79wZierxoDMHUN6L4X9uoyNgGJaPp789pzbc6jw1vy3ka5HggAz8g9Qes",
  "key24": "413sX2Kpe8F9XoSUpXJwgXqpsdzm74chSPdXdJZXtghw9i3QnLw28P36attVLQvtrYmWpr9TPUsBts2poH47SLb8",
  "key25": "5WPgkfDTef6WC58GtxEJVggatpsHcGJzeCEfuBh6ugp81q9Mm677zWcRS24uaLhZRDTiR1TShDLoLzz21LeUPqDC",
  "key26": "533WbbEMUYJLmhDGXWjLXq5mcv7aXt7yeQWKXYZoEHy7UcaPEGWBfMPZdpyuVKsNgf48SDN3twZSrFYBXuhT6xgS",
  "key27": "3KtXTAmfwME28ugYs4nY86W79xeQB2iAexdDeWkKLwvS54E49aTmDTKAPnFr5ppepgJsm4bf9PureyidFmFRi7oV",
  "key28": "3FnShHMh7gmjukT8dquJophCJfg2arJnH5TMUoQDAkHJCTdszeeHZqoYacDRntopG2gDken1GkWQewZg99gdreQm",
  "key29": "2ZQqHb4NwrtGNNewvrM5RYSEPQBGYQKotqRpQ1LhRfdzRPphbZFymMbVxWRrGtU4LJ9GQbejRrSLRSxbX5gsXSgC",
  "key30": "3khHWx5spSkgQmM5ecAi3im89eKHE6ooPFYLGnHe3ztfEKAnGt6rjERxQbgz3Y38smM1f8HMh4xrijtSQsGbUUgK",
  "key31": "2yv4fjzZEXAPMDcVvS6QTKUF2LQKbBhTNGvXEWK7qAr1FkoHYm2bNd4CsWXAUXMg236nYGMj6aXKM9ATndVqhhK2",
  "key32": "5JxewLCT5RsimAp6V9r47E37gqL53i9ejjqfT8hMngmfm2uECmk6a3xHXeuwCtNrAuXUs7Ut8mVzNNk3YbAEUcfh",
  "key33": "4RGVitRCLuMCpJz499UCcaKT5LgtH5sb7A6wq6k5F3xHVJ9wK1MzDnVJJYSJLvT7wqFKenHj5jbdsx2syNfjPW5z",
  "key34": "2mQdhQfMHX8qr5WfzZg2DqaAh4L3NgQ2CkrKpjpUD5MH25sjDQ6LxJgaK4rChTje3tkoYEoTheE5XvcbextZv1Yi",
  "key35": "4hXpKm7LCtMp9psXHENnwYUVEWJyLzDEbKL9VHSWF2tQDKSudqhNNo53brkopY3ojeeWm8DDuyJdyMitjvQbgpF2",
  "key36": "3vwAKA8igQuSQJepn3JccMSFpQm9NiLmo1dL65qBfaWRiMdc85VfC1Pdz6VEaxvce9jbWA4jHfZAyhwYpCWR73u3",
  "key37": "48WVKfkd5TNqQ2N9EBKe3V73tn3zKC5mB1bQ8XAGuUseEbjvPwTShxGZReNQRazwhdoWyMU77yepjEsaahV5CSuW",
  "key38": "5VTHu5fL2oMpvaHYnV2Q7UDmfuZ1ena7aJ4xZRRxozAtJdYRpEQcYcgvVDyoPypVcq7H1fZFst4t7esCLiM5bk6b",
  "key39": "3Ph7PtLTWqVKvJZso5n9GbU3D5wrtYp4htA8e42pQpj8nAtrmZBAcYKKKoNcAmQxXcpDNQ1SJfZnHja1sJRwAXoF",
  "key40": "3iggxbwWgveRMC6z5wmUaSJbdmkKmfttxdngU47z8T6mTGK6tMi2rqFs8ZueoFJEueD1hMM9mxYt7Qz1ckDGBWVi",
  "key41": "8BeyUgksdqFu9vJnRuZ4dnbDcUSU7f5ZrdABXQsRMZmLxdmBL6XnqDvMi6MnXsa8GhDw8H7HerqwAAYzy4wfwxh",
  "key42": "2e6DLSvATKHu9WcmEHuz1g8fyPViTZNXPm6Qq85xBraUrEqAUytrgwBQYzc7imWYw4vcBa61gpP9JW9fuh5UjwJN",
  "key43": "3zthb99edJDhaSqSCvHYqC8eH8xAVYJSCG98jbckLqg6MLUKEB5PYfT2cEpj5crFU9yicjWFsUQLtY71zLnivJ4L"
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
