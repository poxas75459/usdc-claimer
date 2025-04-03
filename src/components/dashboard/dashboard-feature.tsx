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
    "5eSGG62SdiBYTw37Dd7hVEJLmcNcBpGS7cQNNDyVGfPpGu4J1igzsgHYUDMsbK3rjQ83BkfSx8NyTqLSDC8jB8Mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fURrPzBVqTRTU7eGY6e8x2yEavxJahZbYrRW2mfLSt3JsyVbGtWZvyE4F4n1fKzHa3psewjFhXx1dEefBxWTTt4",
  "key1": "5CVyYszGkCm2eANUeyMgmPpCqoC3CRNYgjtz75GHfZDt6oxtHVtWfK4JDPHPtrRehsSGTrYEPC2CLPuPbEHmagLv",
  "key2": "3vf6XqRYQXyrCP4GopYiPQEULnhD9fT1buFXZvh1srsHrubqiU8HLcSRLXXJ6fbx1hPQ2FpwyniYXDu6jxwpszKn",
  "key3": "2LjHMQb2XFtMe9zTe4WkrS2cix9ccxb4Q8UaqhAc68h38jWfaPz2ztQGNwZSi3qnvrFmTzLJtSJeXQQvGBVi9Cfr",
  "key4": "hDez4JyTpLEmv6gAjhAQMdmPhWNKtnb9QXF4ppKNKeYaCks4QmFc3UNgBtwa7Q8R2vJiXZNcLCa7VizzJ4ZLngE",
  "key5": "2aR9yLUrjgT5H4MSespprsnSbLNynsbM4JURF5B2yX9GMnSscsAWTfXHVkcxPa2WDcWdgf9zYHU1SKMqshZEFE7Q",
  "key6": "5bHUu51h2Z1cMukiKxaLjqwkbpK7B4U3nrb9H4Nmdwsn1gu7H2mQXs8jotKVNpqCMFzAgorXwv3jWipdauNk2G7n",
  "key7": "4EYgBbrjKQjcCfipMur3Uj4TJ3eCD8hZnFf5GX2Eq34SbwMJJ3QFfRteXvkyLGSnm4PsrDWqGx2ALysVQJDWim7C",
  "key8": "37jiuaBrUbtED5Fn9BKfHxWfXFEfLav2LGwxnBv6FfZai9oZ7spdT9EWBerkb8ZCRjypcnTSuYNw9CMsnHdG2QUP",
  "key9": "4ye4H3pvTLM9UZhLdu4R7P6FAQCX6rWwvoEhCCw1Vq14ygW7mR5QhZjsaMxPTJAFthHqe2ckEsM6Gi3ss7wCz2gR",
  "key10": "2YAfcVLpYbnQ9h7q4UZNsrWh7KVQCjsivMTtw5QemhDVhqAtuku4YwgKzJnXh4VGTSQc4N9BGVSFiLhxCRimyibo",
  "key11": "53qVBZBtDDSqUxPWD8RnVpgCTCq5uoWvKqw97Jfg58BgFug3ewM6ek4dqEqFU32QBaB4vyxP2VYjBbQX8t8jndNc",
  "key12": "5W6xkn9TmqqR4rhvtb73ZcAgufbEgqtcNJPffihACXEcDt2YN2zSqLzW2Z6NiiTA9htjZhsWUWjY4nyRUkokHFR",
  "key13": "3jLbRwgTKcKEQo9ePEcbEk6ZrwPzaJiPf698edcgaGXjdSEeG2JyvW9LAVnQbZRbbe7topwqXsGqcGtgdT5jTKUw",
  "key14": "2d1kHHWdY4Tg4VFZBpcZjYHpa9wxctJMtVcX18k7CAceJKZvwNz1VGXfG5yszM6m9qxXLqFqq3P4m45DraKXV4fK",
  "key15": "33MD7Rjri7KZmFehdxHHhDN6mj5uapkzgobJSLJAwzRpuACqZysViWep7tnMYj1gXi5W12xAnHLhp1WiuXCLWn3t",
  "key16": "4sy2xZTQhVKJnAP7bMUPfHsNYvUSBgTFNdnVagUts5au77HHsDf7rCt9pLn7Wt5LQyieswjDdSVs8UYHNcnSrCTE",
  "key17": "5vCfgoxh9JrmZL2nN1fwNsoN73zVWHepNLg7M4i2LpjqHERM4GgrvPfFtrjDBdMWb5Wn9pn9m9shEHjermudsxFW",
  "key18": "2e2i5AjHz6AoAXQrpzijNYib1NZoNjvu2o5kYmJfDTaSXU7NfkAkaDUvsfFrPr8LGpGz3uMmonEzMHp2Er1YY3Bg",
  "key19": "3YCyPKgGzzWbVnehUJaJroAvVtTh1tNKjZiDwA9JvzykzQYMJh9nrQPm2ux73PwBcyrtNpt9xabMcJ7g7KQtN67h",
  "key20": "5LmrFYCQxiAzpShk2jpEQqAb1dwLcL938pymAZmpE6Nr33DZnV6YGnmK9pPi6LoJodtVgbpMeNCm2tkXtwCxgsmv",
  "key21": "2R4H62QbyF2UoD8wPDWJLotNVHwTVUwG5R14X6PamGvU29DB9rg6SXDAcVqqMWndY95oND68jh3nRKPzovNb6L62",
  "key22": "5sRuwBYq6bWnL3ePKLN981qKukbrMiRNJVaC4NxcnybdWuk7RAXzZUssfU1VbF3M6sM7YtEc4mNRRVs2BM4u1wAo",
  "key23": "4gAeQskYNPLWkY4FhA2K1mwvGRGbxn4LmXnHf9ZuUE7La3YyN7kY4JqPg6medbtZSpu4SQEqrhWo6T8qagzbrV2Y",
  "key24": "3s1anyLE3UWGG8LodaW3zo2dxMiChXXdyqe1rQYhPDCansgLes3iysihr4THA4kbvRRKPgEi3qpBoYwbEMnCUrg5",
  "key25": "CdARpUgtSaoXZR6xnGDbZxiLnLaFDah5LBqZtdex2QhRjMKMWLaQ31ka74EDs56fsUXaqRG4xPRH7wgKyYFe3ye",
  "key26": "45eS1ZHsEqpKsRCox8Q51L8F88eNY6Qo2FXNanf7BKHGZdUnsoUy7SEXDqS6bVJpULQdhrxLUbMbuyx9C62oYCEL",
  "key27": "CwkgbkRBnDm43hKDS75boNvEgq9qxc1VKrKrxgtDUFa4BfvRrgdLSkNWYoeRRn4K2CTFgnwhimaStjtxshNYQWE",
  "key28": "9z4RdXn6rapeA2jAcxAJTFNgrMfRRD8FtEaBi1gUZkpQybQGBKougt6qeSehC5dGaop7nnb9M9pQtfcPLyK9P5S",
  "key29": "4QhUeTqegMxqq1sFsLmZXre5ybiRA8mL5uWAs5gtqmj2cvs7bqnUCoZULKxnme5ydBNPejrnQF8hHzncNSihWxaC",
  "key30": "2aEJtnb8qwuNFtb8DhXRJ6myebPNcH7CWRiZ8JM8Xk68NKG94vaFazYHqH54umW1CoYr4EHkgScvi2PYSiDd4iiE",
  "key31": "4U2YdMDcVjyh5u5H49stnhLsGeYdr27vNECiwGGKntmDEvNJVvQ9zmoihRUsgrfRU6NUCkziapenatsYcQD3GN5U",
  "key32": "ognjzDfyL3yLzeq9Cn365FdArgDDCqicFkBbQrnPbX9JgptV64vUMNE6f8awtHuygQ7dUE2eNrXYEEMx2dbqy9b",
  "key33": "5DK8wQn66u9ybxAngNfhJU4RBjhHvyT2yKjvLVt1rMu73ccqZ8KhcudJ7YVvQgBhJD5i2TXaUdfcUzifhePFr5M4",
  "key34": "2EDCnnmJE4L2dfHZ24aq3phbQijKr6HoXUZqWmPFGv6xY9ok6UaXJ95VDddcPixGByFPvgWNu6RVmj4rVQAq67xD",
  "key35": "zk1954uiSJ7W2HX6Txe2updkv6ehKQqWxCGNCMmmBexE24vNXvxavisnp2K47osyNRFMNN2sDqjUcERZWaiLTQ4",
  "key36": "58f2Mkav22bZKcDSXGufBugJpGyofMjAKPMEuBTVURrE7z1aju943u1P7Z6jfrLi5CRx1JQXMNhF6HmPb8z9zGAi",
  "key37": "sK5rrWWNzrq95JDH3JHE6bRW7fz6NovJtyu3655eYCWY9Kpuf4h4cV31hZ7Xz8cLxkQv9vSX1ytXJTBvdfooZiV",
  "key38": "2zSnXVXU4gikAfqMA6UUjBNr3Dp6KkCGogjJMivYg3Ev7DN2n19tUtr8abT3Ln1iWUsk9or6D7xVCS3f9Nm6upSU",
  "key39": "3gKokr5HZgYX2pZf5NhkfwJGnJbnXcGo9hajjrnWaK4NNe1pFPGU5NYQgD5nPqgsa1fk4cC2mCQQY2oXKcRwGap3"
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
