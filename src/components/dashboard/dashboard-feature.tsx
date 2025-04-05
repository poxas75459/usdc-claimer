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
    "5jgDTZ3KF1V1mHzhNZ54Aw3NmXikX7aNGJgbMEerCjKcdUbeRg43WC4Fg1z1E1jni8wxN5ra85Npet2Wtqdidohx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kBK7tEtBQj8BHwG1GeH64qsAKmmuWbrBSWmu5ij9QZY3bXy9iJaWuZtZ2ih3jjEF27oZVyVFMWuCif5s4AVkTog",
  "key1": "Ah95eZ9s3vvtJFYqyUhyUdrUVUoga9L1WMNKaMWedYjaMaBJzLhZBnj4c9wx5isQrTJ7fJEXnz9ZBMeyKh9CzVn",
  "key2": "4CMbJRHNciA8fxWKqakRBm6TBzxd1Tm3AsPNsVzySgTnQwahNkpDB5PjfnUAg8TLKHfNHQTJgHdzmwATu1VgF8DH",
  "key3": "GV2TxyRKAvDxoLYG8TtkCyJH2wzTSBM34mfctV8xUnLqbZAgCtjkzu35979RBoqSJyNqUZNap1JcqnfoMhmDXbv",
  "key4": "4LAEf8H5dcNiKqqhwJbmfdmzMCDan48wFi5MMxu58Js9SN5zbpCts2Yx1FmAUvMB9CzctMGNoFnkwQkDQ3hfoJgx",
  "key5": "2WTVhQvZzFxZssvTQ5yDo8Bvq3YfkGqdbXX7gvCmF1SZqtxCrGMG92e1Ud99U3ZXdARkMF14i6vrJ5pmMFp217UQ",
  "key6": "2KwUK9SwUALV9kpcVX8r5CCnkFhE74267dCfZ8E7wSYpEbiwUkoQQYmo48A38dszGZTcqNeb46ooEhE5j4b2Wn9e",
  "key7": "49x4WvHHQxB4v7D2LKUL5AimUqqhtw3x3kc4j7UbqiGCp6GXFVhWybTxEDvwdVjErqrDFNRdBzZVdRDQagN1ZzDf",
  "key8": "2n7esUc8mkjUpYWajwu7dpCejYTaWZk8dMSfhKqpEYBKwnHP28YQqjFdfe1sNUKdcK6ztrfWzRq32bc5U9tvvp89",
  "key9": "65krnuB7aRW8Y8c7KkWu8Va3C7ESkGFSmF37CpRvskBivcVNxZt3xs4xVMPBWJfoMMAkc7NfQzBVWxKQZmfsrqqt",
  "key10": "29yi7sNjjFZw7Gv3FaH1m2WZdgjuLvpPv19xAPjpRhTF97gSDdjV3pvXDacEu1wKrvL1hKV7JZxv677xVSEoRxDd",
  "key11": "4gscgrQ8joUhYJTzc69sxL1EZLucAZiCS1HiGoncwp7NXbUiPjAu4kxx6qTG8FneKLu6pf7VXmZHamkBZ3vQz1DX",
  "key12": "2fGEuf66AvjhjbPnJupwP8QsVSNQ4tjExQhaW9qz6HaP7CQjwBmMBm2nezq6aof8xWp4gXKnPy1sYftGsHivqJ19",
  "key13": "vkL6vmKM3bSjyuon4JnZyozajAXTk31Po9FByUaX4JZX6RhY3VZGvbqxbVaJnae5Q3XiSo5XX1B5VhsynCWsJDL",
  "key14": "3CrXGxggbu3qLSGUUr2yLcjFH7AwnsJnpJz8FJJKC5U4VvkPaukBk9xt7cyUnZjLQTecz4GqzY9SzvDGqHvRtRkL",
  "key15": "31nNUCLgCrmBksnLH9Ti1xi3vHR6cpmQXki3jd4FxuQPttcnZdYsJp2ot3Pj6xJ21X35o1iAcKVBFX4FkLSj8Fqp",
  "key16": "57KcitE6nS6JWR3peeXtaA8Nhgs6HAn8Wktgouzw8aRfHodoS2RA7j7Gh3C6VACoMyq1ffkiuwjm6tWxxAByKA1B",
  "key17": "3UovnejNDKfH1off2mVPZJ2VFyy5UmnKBRNqrAcXvFnEitThyiuWprmaHdZA69Ahvws5h5o3BfXSVZp3ZCzYpa1W",
  "key18": "2FmeWh26STphEPcxRBuJyytABgB3Q5kwbgksQnFVQpVrDDimbW1qEppjsRqLeKF52LHjJMeMMPmnUcjB7L3WNhaA",
  "key19": "54dGSULUhXqoJXWjYr22pgNaYU6oCFEp75rzXmsc9gEFx2o5RjYH5K52kfdkQMRaPUe7uREFAaN3m74qS1ud62Js",
  "key20": "4dnwqqnb5DnaMyyjGn9U9Er1t1cmSRQjW9GhUYvaS81SLnpFueKzbF3cK4SCKdG2q1KLVW3mbnNTGrAMGMg94pQn",
  "key21": "2UMh6CdQYNQ3nJfa3UoFr7UeFSXSSVo5ha4uVuuL449paYdgiG1qqrSGdUbtLuqVnW9QEDDkHx9db5UD6ZBTrwr6",
  "key22": "5LsfxDkqkkfKYfgMdUUXc9ybdSjJuGP9HEBEZ2L2B8B9Yq8QBoUk3UnC54HTLWFMJ5vaRebigLrbD8PaDEjMa7C",
  "key23": "5HdQhkVe2riLPCvYQDbsxtMuXQvBjVHXUwa6RWNzaZ1nVvrdqMTGYWi3zWbrR3UjNRDSFtsJ3jXJPeiGd9S391Zh",
  "key24": "2RNLC9CZibKWAuQ8EEqaYgg9hbACifFirWC5gLy59DBtfZWK9E4eZJRv8HaoHbDDsTDWaaCKsA2r9g7NqXBiS4mC",
  "key25": "5kxEtjS11s3g3n6D4xaBQGni2VR5KTcpjwFSVvrWqVZ8LTACD6moNyJqpUfGNvb8AtLTb8FceWEiGbfG63sTdFwK",
  "key26": "2jon6qrHw2ARLyLMdnSt7AotP9Dm1r1sFpzWWwxAhksNbMByzpZPfRkFtJSVh8UTQm13ki79gcxPqwwKSy8hGKQS",
  "key27": "2GBfc8P7p9LAqGu5rVZXdcdyFt5xaeAoSbSe4Fq8XMd6haJTjjbJanYLa4F3Fhfj3FS5cnfeC6WDzt9MtSUjoHfy",
  "key28": "RkJt9LKxxxEFTd9kfK7NrRw6q3CaMRhWgN85mFasKu2n3YNYd9HF1HmSX4GysCJnAtju1hAJM2UG6vZitz1X6BC",
  "key29": "2NN57x2z9PjKECYajW15bGcSuMtvbRBdnQCmBs4D7HN71StKeAHV92GfrxiYCpVpREKsHezpwGviaxzn9QkqvYJD",
  "key30": "2694dwCmszn2XQ2W6FAoyAkLbb2SAV7TnyHd4CWeDY9CEWYQaHoJuA3hyDV6No8HeUZrixa3nqbLZZrBPtFnZmuU",
  "key31": "5UARy7n8nYvJaDSYs68csGusUvH6Etx5ALPiTYAsDhHDqfMrHWX7JbKeRxuzXRTNRuYw5CwEZFrZg5wwsh9M7p6V",
  "key32": "5WFmYpccwdJx2ekKkbxFvcmZG7sdTcRZ6w1nC5jhV1h9eLP7ztGht3oHH2cfC5vXPmwJ8EBC6gRYA7KLFPcw7Y3D",
  "key33": "374kRgsMQe63tHPYqfsMG3BJDSG7hQbZwbcwjhud9qLRGAKHWPKHoSDpuCdSySR4GP2NegSK2n846fjL34LHKU5s",
  "key34": "J9urQc27Xe2z2AZa7NmtwwWmVJnn24M8KnthEQysWfvVTyp5cp5LvP3pXMRS8mrcMKJQC6R8ajo4624wHtGsHos",
  "key35": "516E9NfgYu526UqqYpMbhjQWEDBVb6nxoVgtf8Gnsy8qYKWhFf7Bf4cpvrXzvfRcWsBZFJXMJx4Xb6zNJwkvGj2u",
  "key36": "5ej38a1Z115fTXfSVoP5qp8w7EdVyBThphyXBGd2W6GwvMUNSdnpqCY1s8SmkWiBNbpeGvXoXERxGNBwMEZC2yCk",
  "key37": "4sKJk96bcFayNdH4XvM3jwCFANPLL5txhoZagzsrV1tfC7FN9g5XpRVSjDUwdgVcaf2UQKpFgBvXqRGh3oFrSkdg",
  "key38": "3baphEp6EummSQBvykkgKKtTMje4ee6xYM8YvksJi9bTmjohgexfVtzxqPx7spVgH5RNgGQorteL6SR7ghkM45nR",
  "key39": "4cX46KVGvnLAnKT4bEer1YuU1SjS6rwgKNqC4eEkwL9UHHNeWZ3PtoPGQTYZP58ACLWkLPLSc68GmzTvvUBxkKo9",
  "key40": "5GJGaxCgg1PE1nDGDnHsmhYyLrWiJjpLzwpmBeXvx6s3utvjiF3R95o2W5Edq4RSNTKzHZnUvWhRLLxyJg5kVXCc",
  "key41": "3BB2VzEFh2JdDfB2LRaVs4uGUR1vZXc1KarGWDQw3BN8kkkjStf9TMwbyczaAaBAF1xvhVyT5DTLuBrk8GVsTzTV",
  "key42": "62rsPKhgk6XiDaeNuoT6ZBUxH2Lop1ANNdwFFHpUDM5i5FoTJaVjUoqfpS3zornZw3dtPrhpxdarsYtjruyTATz2",
  "key43": "4HeSua9aiXHaWgtEJ8bCZY3EJ3FhWpFrswicd9fJo4ZVKQNTtJ7gzJtVAtEPgxiSRp2UB1BQXhxpzpaWYwRhs2XH"
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
