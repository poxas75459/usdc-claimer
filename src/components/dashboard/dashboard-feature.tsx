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
    "5hFkuqPUGK35rjNMncxtMYv8FqyXEwEZG2MkA9AP8xZtxYJrAjdZZRe9tGgn66ehzKYjeQY8JnhBh5R2ehExCSq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TH3qXS2XnWah3V6ntvHYDzsSWgFTagA7nLN3iv4HS1PBaTTMsVdPqQmabwNxWBRruoKyXVh59VkBWXVM7v6cJaj",
  "key1": "sAHcqP6hjKc3xfFZpYDg77xhcXseuHx3rAjxceqZFNnughkeTzLGXc8wTTVa1pgc8jNqRMzMoorjTkArTroyEjq",
  "key2": "uc2qj1pe8vyAv2gPeFJqi8efjbmDvPBk3uadfZAyw6LgrKtPV6rVRfZvgKDe1ukiwE47Er17Y3WxitzA2YsSxQM",
  "key3": "4g42GJtXUSBL2DMMTadFtmr4pU9RvpJ6AnsHCi3ggrLZQx6T3ePsW8cQefHptH4yYpzo1quDCoB5QbDnb4JTA6bv",
  "key4": "4MB7akxWZsQyctsUDURqh6YVB9E2PhVr6YR4sYwZ78PxCtkbdXRtynruZUamn6iYxMvVecySoSt8pDMpG6pNCPVy",
  "key5": "3ruWq3WwBHa5n86b9mkJ6tmUncwrZBK6wUy4fn2MdAfZhdmS6bCoyQcL2DUHco6fUViKVXSSiZ4ZJ8evNhRmsK3D",
  "key6": "2KZTv9ZsqDwRxYmH5e2Pmht9Wdbc9NfhigrQBmq5tnz4zfQ5TvDpfDyzBVSUbA8xfWNnnWWa5eHewU1hFC17XmyG",
  "key7": "4iHEfAowkpKRtyVvcQ73Lfr46vAfTNUqu7oVsu96vTDwiVYHHmjEGhiyigzp7sxPaUwGHCPGtoCozyQ2QGFpV227",
  "key8": "XPrx8hFzz3Fh99vpyQ62VSYduJ6xdnpsL8iYfENrSFUG4rBDdfkhLfWCsC2Z4N2jpDSyjFeAtq1N2gEHE23qGs7",
  "key9": "5Tn7nA6Yzu5u3bAtHXsFHh3uxpSBfrrpfVEfKvSTzY7MW7fdRHh2wMKr91YNGj1Az9EM1novqeSKgz8Tb5AtkFUX",
  "key10": "3qFutLEeCf4Rwv5Jzad86tipMNsjQuNSACwUvcTx4LXtjvXjb5LfnYKvzLBXyUiAgpVApPT8dQjLH8j7fuZ8uwtq",
  "key11": "vWPWCSzMj3wCXsXsXFzEARQgzC51q2ayS7hTffhRNmABsNQ9inDLnLxnm42VhxhhigGsMBxFhYWGse7nz8vuCNt",
  "key12": "vyc7AWeBHgfHMXjmpkeSjsK7imnNLbsJQjVmaGoBbD3AQJLCesZXkbEGQXDugyWKGYFSTinXCDFeSu9L55QRc2s",
  "key13": "3xrA9zD6nhtu4AUs27yYqD7KKSJyXihb2cmrsoaDhkjUC1PyDttyiCjDSRJYjcamPuZyjCKfZnX1vRBkGZwd7Lja",
  "key14": "55DPcVLbeZyHvk1LCNFnCUuJak3HdmDNbjWn9GHp9tT6yRCUqH2XHjE8tW6cFR6Gagdw7a8hEQ3sRDyqdgbrSzVJ",
  "key15": "3ujrUxj3WKcTfgDSiAu6xCTVKEavBbH5Qoff8dGYukbbCqiNTmMDKPjdhmciFMZMjbeQKRzxaE64eximX72QdpUH",
  "key16": "3kq75CfZ8qDGdyjtnXPmReJRudHKhX91117GDCweTpEmwndgAMSxVxq8FzyWn4SoKGWcQwEwDLo4NwfYwm6fK9oL",
  "key17": "2auEo8iCGPG3yWF4h2A2i8X7uyhUn39jB8VtCCcgH5pgMGmNdqnPJp8GAZc8uyMtvXh9zHW1TqoDdogsF9bSMDJW",
  "key18": "3Jh4AXMozfoqrBd32E6xTA3Pr7pAaEaxi1Nqqj72vZkMarChKNd2pqR2RBYBgJgBsFJegyBmV85qTz9D4m2GxrRf",
  "key19": "3aK2vsQHhwKnAQXydmWuSg9sXE4bz9LPcKu1ukpQRxzWGPjNkJFbKJ7UQ38sDF69cW5Kua1hdv12EuGfdVjJCYM9",
  "key20": "2h9j7ktjzckMoQ2TPrverxnYArqNoazs4gi6RH3pVpPt3i39sAix87iDHuoz3HrSKqVWwGwVD1dycxppqhX9hpEm",
  "key21": "3p9F1fHriWzHn7QnksFRSYDoqVUbH3EfGaHqT5cxnBN5kQ2tfmmPTYEC85c3dQxNAjzctqqRRrf5c5uzSuBXTXfm",
  "key22": "2LzneT9JmX95K7DBfbgiH4Jyj4t2miMNEQ5Fje16pXbBjZPQ1D68xo9udY2ZJrP6FKG5eEsazp1s2NGx6XmtCHzs",
  "key23": "4PC6Tsem8LEvmY8EAKc5rpsSUWx6RsNGQyuCs2wbB9AaGyYSWo6Qa5CfJpm5yRhhscqXKnues7Sn8Q8x4K6KGwYk",
  "key24": "4kCEmLqRW56cX3PDzaQw8Xhyo6z5i9txqgUeQfytMXvFEggBbssnKNmqQVeqVN9ZMj8SFVAU7YMKTnZqJHkhqCNc",
  "key25": "2Wk2ShMuSB1srF5ZjknubrZ12X7hh7m3yw241GSq9ccRqdqAdtjKzxBW1rZTtf2y8NtVQmwLpRt2jYciMkm2vaZ8",
  "key26": "2fPrUjkRgMw4MRdVL2N43xDDEWSnWfhA6Gk1RWTiKExz7MzC7QvckhWDBkVrBfYEH9SC22a4ofabvroAdDnYJben",
  "key27": "4H55SpqHDiNM27RJNDPFmbcG2oX6V7CDVBXrnA3jRsZARDckMke6ckDLpETaGNQXiJrAS5A868SbqFeS7Mu2HWpA",
  "key28": "67MkpMxBHjodUkix48cNGNQvR6nbD2ushb4oh4KGoWd1jiwcCUiDR26mzcx7WLRUEsgZJ82sA3aAaeVHtRJ7QQTN",
  "key29": "2LT4YickmsPPiyG9mXYZ2seph356by57W3YwTRUUX88KbmiPCZhb6NEHiTf5R61p996o7hjWZXWAmGnpks8V6v9N",
  "key30": "4rZ4dteWH8D17UAhKPihzMH8cxFqSz8k57Pj7xQky2HPuEz1e3DaywJZaZv7HMmmAs9kxPW5ZDCzHmhzWfWbgHx6",
  "key31": "nhVmRUWAYB6h6FPT1iYCAhJNMeqvR8tqdtTmo4KUhvaS8NyYuPTLHmfM1cyCiCKqXWNoBuYKN9W6MoeQG9C3ZB7",
  "key32": "3M6tbQReSCGbJDLAgSX17cqQJpL166UgRXR4eMP6j2oGH3x1RHY63DPs1BHsSoyqiY8PhGJvTcuQLBTyn7KonQvv",
  "key33": "3pKx4rBJ2cFW2Z8516ZDBpLSi9zjPnEFJ3kNbK8E4zeJDf2d1mT6FFaMsfpeKstUPxykmjvca7HRYqevJqy3RNth",
  "key34": "4x5uAmyeNj7WBChXoPE5v5m7TcYuBY18LzeZsrmrfoP9aNeddvjUrnnnowbxqWkNzHtBRwLibE4soEN3Xb3XUEjV",
  "key35": "6262HybAw7jLSV1urV1Z8CVfPE9bYCrUnC8y4KmKvj6miSpiNmsis6tVjrvtgQcnTR3jEimsCywRr5n7Q6aRh8sC",
  "key36": "2QBmnqMhYGtrszns7sGsBQwC5Z1z8craj7DV1FFaEP3xanU6BUjNqRFthPFDDTLRsMPMB2YMZAsX6JXp9mvJqyh",
  "key37": "2FXTri5aTFSTxYavgpPj7jXBUrHPL2sEM6JDowL6yxXgMVgQeeykUUwoMFqjitGTK8ZtX1U6o7ikYu6VVE586Yu9",
  "key38": "4B6VoqTnGz4SkK4JTW8uZTTGg6fwPfjrX1AQekhtd88MmzoYqxBBHKt6UsNeqsjjoYkvgMfJHVUidETxfbdxWYnd",
  "key39": "QDGLt7NUxKhdX7e3XSn3wV5gQKpFbazDXSEoo8JZBDp9AMXX6qPcrgGTkw9vP8GZSNkHSURXsNN9HQftLC4LGi4",
  "key40": "5g4ZygxsWKbVG7erHZRV5FHZ4fKSVwQEv13RLzvGDbYBBZpzVDK6yBmd5mgmndNSTi2VfLrr1hMVWzrkNiEsEm2r"
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
