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
    "37Ecw78EXx4Znqt4awV3Tdq8EyDSHt6jPLCnCU3Uxm5E2qeDA4JuLjFagqbwW4BskgRAAbUQipYnJ3ZNjE8k6CXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bYgKJPFyYrHd4jZeoQG3hLCJKzPyDTH8Jfg8ToQpxoBPvkSbhw81aUgZwXfDSJxRXxmTbQo2Z6E6KYviAb7ddtR",
  "key1": "4UV37qMmzZszFwRhihzTY5qvCKsJiwH5au5ZzAakBAQftMR5DnYNKSDuHzYh5oi8nxRimfShX2bLywwBQMFA3tbF",
  "key2": "2dsYyQrJJC7HH5chQMG2SL9FNKrhXz6ngz3KAfmxeVTL3Vbb7pR7K9FXWqhf6rRVBR57aFQyLdJaVzzh2FvqYpnz",
  "key3": "2p29wouLchY2ckFc3Vg5VTF3tKUiZAW7f3cdBP9RSEqdP3ZxRQWjnGxW4QyB61igDqKSh51kQ8LbPNWhM8F3aF9w",
  "key4": "5bjhVwXqEuLv8SJwhCzm2TFZj61Np3iaz34e8utM9SWEoARYhUWTRyAYBD4w1usdX5fmxgjeM6y3S4AYUK2CQVFG",
  "key5": "2Jxomh7jd3dMWWmvNzUvmwspzQ6LKvwkjNWrvWkUjGoYHWLvVCFNaNJqQFDk6SpDUXMeeUshgAzcE2czZoXEmWuE",
  "key6": "5ZvL8Ymknrp46wEFAAJqTef3JLyH6qXRQM9QrwY8tQ1FmWXHoPuLoU5MjkHYUg9epXweHaZawpSRkjhpcmt5BxLu",
  "key7": "3eYuBT2LvQc6sLng7hN7iDgWnTzQrrysNVUyXrhdSGxagCy6mvLF66poQcwn2wodvGVNLvaH4AWAcfS3FMrfo4LT",
  "key8": "33N96AkuVQxBWj6SHPyYtYHVEKZUiVShMibxqWidR4tVUQyHH8itYAjC3R5bJ6rpvgxchGNS2D6NS71c5FNog98N",
  "key9": "4heBMQCcNtGzmmfJs9zdJiRRkcb7tnD7dxdY8yHrYD85Nzwe4M8FQRbFqPscGrknAgHvpenjBjNxuMPEKXwTygHe",
  "key10": "66Uo55iWbFYE1zxqodomwSkrjxTG5AYBJ6AK4p2kF1YvhycT7fyERqwR83nhvwe84Y43GPdBzy185WfrcX2vJUDW",
  "key11": "3QDJpFugM76iukVgrvizw5QCgzdC4pMGzgNyAqLS6A859Rss9YcJD8t8p79mJNM2pX1PMaVW733mGvsR9GEde2J",
  "key12": "2Ua93LhBQJT3mRWN23Xc1MeHicZS9ErGqnbyJ8vCZvobYRsSCgTu1MzveHubBMxE1jwqZDQbgsgRCQPRW4H5hoio",
  "key13": "5XcaHnuukvUfBv2LgHP2NyPG3Naqfo4Ni4ftuyM21hXXMQ2BWAwwoyC39WBUHs8NmAcohXMqzaCjcjWzZsRkiYUk",
  "key14": "3wqPMdXyzidtEjA4TaMhYULtUPqo2EntZEMNXouD7sFZuF4PU3xGRV6feLkMuP4YMbWvD4J1UevSm1A3E88khJRM",
  "key15": "5sWhCvFpZhgwuRWJZrkpBxVKrdNEKVbetAwAsrbUPiDfJcsogKRBYTttfUUFmx4bsZyD8GBSggqJ41d15i5Xrvv2",
  "key16": "gjESsscBPuBf7ReJdmvyDZ65CR2w2FaTi3wBDRou3szTq1kYV5SH7QGJfuYgShWiGgUbXrFxhduijyEaJw8SqPq",
  "key17": "3jbC6k8g4QEEAbUD9M1ZuUanyipBSohw6D6j87DbRc3kdW5JctRsESWgtERQgE95WL8mn12G4nDNRHG7DqYqcGYK",
  "key18": "4KBJj5gNtTuf8ujrXhavzfEFgVQ3qq3mzRDbyAqpq451aycj76fwzXgRcJmA8pwcEZTLW3DNnY76xxaG5i16oowM",
  "key19": "54yTEWhhGb21XKfYbaupNJPtMd4LnDUekpTjAd98EnwhqvhjCBGA1yiK6rEPpRSKVWpiUmcDUAGQHio5Qww9guAQ",
  "key20": "5q9gGE2dQy3EdFAmVFSrhezP5aFkX6zJ4TwueJpgcLgsyCfgPadj5bB2XWoUt9zzSMDD9cdZQtw8qp2JJfCDEHj8",
  "key21": "5YMyDKCahz1T91fK8ZsDBwmC4c9bKYZSsyxBJ5TUm4zqh3Eb3Hne4rWp1AZs6ojsi7vUUtU2qE8yC36Mk4HRN1HU",
  "key22": "BoVSEyMB1yN4hsp3sXRQiYT5QLGk7FAEqAkkMxvTDnGtUBJzPKQHuXpSHcgRb7F2wpQnCopbLR7b7vBrvy2mRBq",
  "key23": "36mDpEDqZtCUHncA5NodrqQ6VvABFb2KY252P7ffEcG4ZmDLMzog2NDMtE84XqANYsDVkTWrkFiwDrRJtrjXqcQM",
  "key24": "25Tzd4Fn8w6B9SpnrXVcxpoRSJgL6TBH3gRF8FNxzaks6GZYiDYQtvTeaJhH6egLBjf9foMNPus6d4LAZDurbCWs",
  "key25": "KfX9YgWNwPDaEsgsVYLxMhgbR2BxD3gsDSmvAMES2t6CruaHbCeWfNvqXCw6y4hzRpFqzr7QG2jebG7T4fE6xpS",
  "key26": "2AHAepq9iHP14rkVMCHeMc81LscFFAP9nua4VaohY1aQXjARggdyCgoFqkXqVEgDYtBKQuNmjLb2YeAiQv45HJoT",
  "key27": "3ghYpqrv5rXyUUwhCaJ2UKyiFXnJKGwmdyGKGMtc7Hwt5UBzcFcJqrb9nvGnTZdKGF713cEQ59pTq1bVLAvEHsFc",
  "key28": "38p1xogRex6NptEiPWYVvmq35ArwBo3rsMUpnioZvY5p8AVkpfAkSmrJP7USyMHjU9xAg2a2zEhwPbfy9JAWsb2H",
  "key29": "4Sfcg5fzDkBKG2nha3Q8FoREkcqCGs8ioLEppQne8fE4viEgz8uMTMz1MQtZtiPYQHwgaXqG9zHowBKTzTyo7DEY",
  "key30": "3qakDBLZ7ahaBBHw9Sy2tRmuP27ptA456paqhGrVThPsW3apr7Pk4qvpDXmj8T3i3Mesf2vjLQiyomXaPnVPgKoD",
  "key31": "pTwfTRC6z8f9t5SHdqANo3LwvoFDNxFiKLCT1ik9RiVmxT2DdESh1VQpsic9V7tsP1BdtvqTBUsmnfpZ5Z3eHdd",
  "key32": "39soxwJqASH1xE6Z3HCbonyZ3g4h4Nctf9aCNLRSiKBk2mLu1f1FELkW9uH8KtwPqNbJX13WpBX1fR4qYJRaH25Z",
  "key33": "KgkWUXPrUj9LYfh4BCxuY7SMEG8xAWrLfxLRh1UD3ZfxtiCo5itjHj3oAZNv769TeTzNhdPVkVTBmTpSKCFAWej",
  "key34": "3CyB38zCs83uBDmFEXcTtnYz8qgpW26dUV9bu5Mkttg9nX5eChRp1NZ1xAboRnUM4qXWB4yejxcRem8ybBJoLvyx",
  "key35": "5V5itm3R4U1r9LPuwUoPe9yAcv1xPukHLL9vPuLKLhmFe54nFWuAnQ9UiqSVp7341ydaiEMuKHAN56etfG9uysoJ",
  "key36": "2Ms4rMo2k7x62noCWCkRG22wxrGRnibK4BR3ZoKLqodQGkqzwDy6iem35pworKEMULsDbgf4dQ19VCGfaF12QKdR",
  "key37": "5vBUQf5X3MeyoHweRzXhCgMUTBvsKVcHjqnUv2FfigrcdkdJhys9EDzrxWbD5kNWSMvfN4YFUMy3Qg9iGXcS1f6f",
  "key38": "64qidC7jtSbhiBmQg2TtuGa1fonx6wGTsdNC85L3F5KxEPiCo4YYseqeZbtDiZtytJQrc56MYjeQviygEPncdK8U",
  "key39": "BEP9EvEzRp6r7p3RbdNsak2dTRTDwR13haipCsC4NxpqsYduDG7rpp18XELAken9GwAijVT3CHtWUSCxtcNe2ZT"
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
