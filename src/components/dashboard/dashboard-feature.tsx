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
    "5Gk9EQZ5RnGB6fvRQpYWATYx3EVuUfNUWjJa3smJfXGmL4ctCG9mD7FYXjfFgAAnMBiigdAtJHgoDNwfV7jxNB1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Pj1bNGSDiigW3YPNWPzvgyFFqy7Qd8fTc9WNPDkAZJvMcP3ttEvYXTqgsLVy9fG2L8AUswezSsnw1o8bppPUsT",
  "key1": "3QuMKXAiAXJcM98u8PgF52HgFrJbsfdqMLHZCy7xuK21eBWHuWDpiMevKwJDa3M7gJeHa4e4wTYQbbbeeMBzB424",
  "key2": "5TpFDWoUCXA96UzLHsPR4K9CXNMsWUJrsBVR3quLsQvKsZzmCpFJfDDLzpdLFDHHR1eQs8M2DVetf5R6E4HHVEPX",
  "key3": "5HeMAowtQ2sB6Y9oQ83TXSgbczaXhZSkrZS9snN1Jh69Ze8SNwxzfBVXdt9X8JyejXJAnaEn9WhWL2sr6Mh7bjTG",
  "key4": "3SZHike8fAd9vJgPdzN6skQCgdUx9EY4rUvmXTbi3ZwBEWQaypMy1BwhnbNhbe4z4pa1zjvSJHbevnZV52vTRSoN",
  "key5": "fZKdKyC8NGuMoQdAzMKCEMzAtxN7mvRjyLRspxaECJdwpigXFZk8vrMXJdqZAv8WPtu4sbDxMMx18bY3Q8HqyFU",
  "key6": "3N9ExZgJnX1rX9Ze9Zrxh4WqYftBkw9MdxA2oMudZGRjDEtYq5dTEiqCSWN12LXXdoFbXTRUGbc1Z4FHxMg8ZQG2",
  "key7": "3QKDyxxvDsiSEsbw859wxnaVpweUA8Gg6EiknDmYtL7pcMNWdnC2SDdBRx8haNvKeMXpUuYaUNcmn9CRWHwTrGun",
  "key8": "u8rfMCcuF2JkZUro4GVvJjCCW6RF4AXfvTp9TPrt7oFvevbk2ih4bwF3bGsthPogqZjN5hPzqDci7TrMy1Fn2jK",
  "key9": "XcmDJczBQr6d3E86W9XLMMEYGwSq8Zv1C8SPgwG2VyG423WzqoSMEiSv7UX2eRwZtwRRgE59xpTqVSkSGsnFqHy",
  "key10": "4zGSSS7N9UMRL3jNmH7v5a1TdrPjhDKq7dGXWafsdUQGE2A85fGYox4FFZdw6PjpXHu5bThQF6NYrnRMTX9aeA3L",
  "key11": "4s7GkN4WPiDKrwjCkZJcJbCSockZcCLNd62WQsX8hRfNosEUbzp3J7AgxrKcTKhjewpJX1GnctvJY5uo9S2Qy5Qh",
  "key12": "4kqc3uZjaLBJk4BQ3E86adapgXgPninjRDyiERJU9qPyYdQVVWFwotVo81kSz6Lnsj41Z7LNrQ2t59WDgcXweRrf",
  "key13": "3u7AaLrZDg4PwkhembMSJHvLSTuBvWJyVTotDhaHPryBaJvkE615BWTMnBh9WyCBNi9jDVzuGhv5bVSyKXS4DKuh",
  "key14": "3XxJqmJG2xQGAr3AYTVqRN25YbLWYbtZ2wQWE4k74bBoHbD7ACniYmDBdc6Zh71Sz7TrCXssUwWo1bJmYvQHtJjW",
  "key15": "4QCgET2TdJjM2szVL9C5k3wA8YHbyou4ymqkWa9nXD4A1r8S7tmybNJTL1f1CydjSeRm1RwFLrWBAhN7honjzZBr",
  "key16": "2eu8pmuesmy5fP6juskR7kRxCgLo7TXQdvVVSUtNCnJw2rD77Pt18sGAJfD1o2DeCJBWTR3pqqEbpFnwjp12cpE7",
  "key17": "5uqZv74obCSvenx5cvU6HrA4B7Su5wkeTe998HLyi6RSttHJanBmsZZG1zPXrb6ChACkXnZwSuxCRi1MfMqrTiod",
  "key18": "5RfQAR5HGeGePNzrB2MzbZVBWa9ds5wewDtxthNtCnqvzAskwk2uqADqRoZcsY2fpR8p3t5d9PaDBcTQGKYK6xfZ",
  "key19": "g3jxc5s2BbWh4etdgi2QFD2GoiBuSi6Xm7oukFhTgbRbzbaNXYrk3Dhgq1fa3sRpZNUrHECNB2duUg5yirXJvSc",
  "key20": "2uFgK74iG2iCaP2kGoZ2tSwYU8rxpYiZYCUF3cxwjBGBQcoNZxFTCr6TjfxaiBnYdUAGa9t9vxvdKxM9L1gckkyN",
  "key21": "W4BvpfUitCMMKbsbj82YMw44cb4FeNWri3a3oVApc3MLGeBSyoT6kCadgFziPB7RMxKtrnGBk7HSsqSFuoLvZTx",
  "key22": "756PLKqzfwyDTpHQLMXd9u5mU5UfXaiKZSkAQiSB43gALZyp63PwwRvrLudadLosb5VYvbd5WALsWpp2XHVUdwY",
  "key23": "3yVyxyY27hEAVJyZTGzyGNBVD8CKfSaYguwLsCjArX8Cei6WqaH4ecP2mCcTCuGJLaW28mpyzfUpQTrYkKeADt18",
  "key24": "57Hvap8vxBjb4AcggbAaQafnK5bVc56zKiUdvGQta7YJEnqsKE9kN2u3Vu5Eq2iin8btEAUqg6oouHTcUyLTTwL1",
  "key25": "2os9PDcnFPNSwiF9VzrCEK8ALfQFg1RT1MxK3iUSPYwQn4Nq83FYwca5KuqN7TbPC1gZBagFRvRDat6Mw92YSaDg",
  "key26": "53Ltrk9GB2o7sajyY7C21mz9UvZ43UiWPBj1nCbEFNxSsPB6oPyN61m3tP1hN5UxUnesdBN9S6wdtvehBkbRJbuX",
  "key27": "4qCY84BVUJjrxy3FLBrLG7frgFA2VC2fmKtC5sSZJwxDHnG9pcr3KfoM4v84pEStQPSZvtfx42CcS4e28BvtTpGL",
  "key28": "RC9NhnrjUCxNEYNA1PsVh3rDhZQYmXQHLbJmxuhSU2E9q5beHMvvZwd2AqUn23ZH4icuV4RWGeKy6261PZz1BcA",
  "key29": "36LMXeYrb5oHrvgdZrUMxDMU6p4PnxxQYjP7Skri9J9U8hCExAdKurD7ZcuCxKYdJYonK3pNh2Uk6sgv3VzVZ3Ye",
  "key30": "49VWCURmhPs7A6VTgA2TaritRSWTt6S5sJz4ocpB9uvQgWd6FmYM3zLLbfuMW2AckpqdZPyqKPuULzUNB8hmHWRX",
  "key31": "YwXaP2uKnZPZguJ7MFGcNLH17w57YJsbZs35quo7BK91cqkj2jKAWRD7WQsPmcRdD7wjK6WZqwwZNw1PribrGkc",
  "key32": "Fgeey1zBpTPfdjz9Vm197NBt8W1H9LvRqxhKzYfSTzPFyW2e3G3fjLpmkfiX7KkviqQqGmymhVS3wRhnvkY5qoC",
  "key33": "4DahR4cAgjmxMtUQwNj92hDL5fCgiyVkKL6tvC3ZanjMDLGFVDa32xUa9yZC8JjHM6ET2euveDimm74s7JjvcwY4",
  "key34": "4ULxqqAPcEHG1iZhwQ5cxjgA1AeYU5yStwJUVNAuMhQaKwXwk3Bjq7f3TP4hEvvefVFQGoX2LtxouwQo9oi14Qg5",
  "key35": "4ivWLM8255xMBCy2AwhLfor6Cuh2zGhuSWfebSbcsrteXEKdFCVqN1oBthJAsBU3vnnEsArsLABbxbVAhTS3SkMG",
  "key36": "215NdHJh2gppMeZGLxkN8ysV6xpK7SbkhHXSo4cFA8HKVbnXuDTXUoStHw4xGFXDgdJMkEgb69Nhep4QkuBTJCZP",
  "key37": "634DqG5mh2Wwu1E8dYhZy5UEWfkSU2kZns95LsAAfTpiKGhT1VchJEodg1i8v7TFekwdYX9JPjtHEgSEmbvr4MXa",
  "key38": "2HeJgkAmUURnsihCvpYVEuKdW6DNjFX9hCvjHHzDPDSFJZtSB6nvdpKcn4J6hNBC4Ps5NdCqCLRbAJkkDCT4Zrww",
  "key39": "2h6XaqAXC7jGfzHG8KkBdvtdA3mSswEsQAiPvniN48FSQ5vRuE6EoUenL95pmsMuufxi2JeVGwKw7jEpSxv3xPci",
  "key40": "rUdGnXvQ47NT548Db4BEf14sQfa7bQaBQArTPyayzUuFPh7wNbYMMk6p9ZLhuLYNpSLDiJFyVYTufWB15FKneZg",
  "key41": "4MGGdWcVuoyNEQQMyMeiHAvP1su7Z1ocD4SJzpHo9SxxPugwdbvEoWQzrxTLRUAiXuhj5qc54JzsiKkHCyHCuHUq",
  "key42": "5k6LWZCemU9dY9WwsSqV2YtgJNV5iM4E9MsthSrNvM62nZ3CAKMhc8HqyMHww2prAQ9qsSwXLbZh57PnaTQ9KxXM"
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
