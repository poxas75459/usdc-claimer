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
    "4UH99tmRhvNBccVmwUeSzUdfHeXhiqerjHsS8bpQFZXWVutAFLLGdKRmuWP87qW4gWqykqfJSN9sjr2JT14DNaaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rfoMjmNy7HvVGFc65T8n4x84sv1Z21UX83kDAZZwfuXy44SjN5hh9iF7xgvnNyKuZcZupKwc4N2yqxQ9KTTxMDm",
  "key1": "YAJ3kXdFmgutKkMriPQsGnNnxKJNBxFx8B2bS1aCLarKzS117iCsPggUSsAKKjsxateRb2sD2hoQETkz2isEX9U",
  "key2": "3oHvboMmdYPFYrtvh1ZSy4NLNevoqFZnUbjXSfQmTY8RUMFbksmqNvBqGney957NcDdZ2xr3r9PDFjmp3p9tJUeH",
  "key3": "4Yvp5Vrg8hMVheuhLtqJnVZKUihYWLpqFyBDneem22jzpudyxf1HNo7xzDpRKuUDQ7adNRsZ7u7farTdDTL4L5F4",
  "key4": "4n5dkd79tDjfq8tEip4x5Dtj5y7MgULMPy396BmduNiaNmf859KDWp9x7FAfhh1JjzmXtJg5vQZpKsBtKydACyMs",
  "key5": "3gQRZUkrJHjom5SdbPq2YajxRVgHu4Zocp42NGGWJ6dxhjrPy8FCAjeDxT9DymVjxszJ7XFyS1sgdjCd5WuUzbT2",
  "key6": "4s1oq9K8GusjRKRA5zCuD9Tf4fP4bnGf1c6BwV4TMAPqJRYT9AQ1CAzSANCqmW1rB4faqRUkZj46CiwECUbEVY4g",
  "key7": "2JYdFvH7t4b9aC4QkA6MUMwKz3TKCmGz3bfPwfWTpUqZ8X97GmVWoC8YrLuDi1A3rtwrspmazc2PG4uuH4UMPAMU",
  "key8": "4dnwrW43Qe6CLpGXNcimfJF3jV8pTrrDWxt4FacXzqtTYfA2mGrjw93dw79FU3f1RsrXaqCKZ3zGhhNTfqp6HPqR",
  "key9": "5vEXMZqXiQMngiWFgHML8bEqxMbNbDHNVCVe1VX9QFQ41Zx35MHL88aR9hgJ5Pd8LBvdAa8EToX6qR6c4uVY6k8P",
  "key10": "3jawvuuNkd2Vyk5NpLxoENxs2b9zT7MtuMyxShEKWmoDBAaPmkpwtm9sxZWjSvmhLGV6mJxcFDXtsM6PDixcHRRm",
  "key11": "2qJHpAyZZVaGKFMAtHNcprB1DFzYinkMh246EdQPkzkuyUWTwGZozrvbaezEMSPak8XJtKwPa8DucDrrsL3QEipx",
  "key12": "5dZEbKb9VbWiBbkrbLzVzzyKhhRVAp86X4VJzVRitSmPYV7qoL4rtg1Cfm1QXnKt6VaA5qxSHwy3d5MSpd11xH84",
  "key13": "4ddmjp2mEgYyNo8T42ZNHtVm1JJY9E3nV6XkahTkJbsdUNoAuREzbZxbtrPYvwgBrE4ykSTYoMGrpJ3vc7KFzmVQ",
  "key14": "tZZseVM1wsbbQfUwZrh3xgifVQKSAQgVhjygbDpkWxehkxZnzSiajnMCqzesbGTvYndkiLh29eEWECzGk3hidcd",
  "key15": "2ZpGvq4g8MaXRW7CLFLhWa7XrEtH5JrQjFXmSAxFWTWa4tDtsECS7m23scUfyT8PpGnyP53cBXxCaM7KiUtXpLcj",
  "key16": "2Rh1LkaxzsrCCEPbYnFuoPEPsBM2zB39Kw58GeuYpzGeeKqxRhY1htBikQCLmCMQqM7ueEwWvM11nC17rzrc8p2G",
  "key17": "2wp9TDeCMK9gNAJbX4vcegoAfV2PzEQKVuzqj1ZDZg4nbH4c7r4Yk6NyX5YkS1CfqBkc48jFeiBEjL3gtn3eCjkq",
  "key18": "3m5X21kTnQt7LntkWQXNvpsutov31eytJv8noDKd4rzVjqMJqSA2WyFjne4fvgHL1yyQMVkqkpUyEEND3Ry3mAzr",
  "key19": "3RF7UcHm4WQoWaoZwmenEnNmVJDYrRo3RjUBNMFPAY1GLUBoU9ioVZjhsRGJgZFD9GAFihuiA18ibQqfgA2SXUaH",
  "key20": "2i5YePJZan2eSstZagTabfQnU52cjHQ78VbXvkMSx6fjYK8UNnfWDRkf6XcjwqU3pWdFeYAuFhfnDSAJyveAwkvg",
  "key21": "5KR65fbkP5c4kJT9TNB5cFyjv4HzXkPw1FdaakJsfdrTZEFzjy1k6xd87HvoLDX59KXXguJTD3gE8woyNEuS2kPK",
  "key22": "3ruyHXq4Qj1dA9wSxmNrRYZZKPe5gbNzVBucLE3jLCxsKipsjMGAieRLvWcWfn87syZBCsShKHnZXJySVqsAEDRc",
  "key23": "GyZBBfRyRUASv2aNz2eawGkfskzcAYKgeLDraoCUhbsCVbfZSaviEXK7v5FcYMvuAhCfVn17vK49SFcEYNHYVnu",
  "key24": "49Sg2ptxVUhiqznTBQgJR44jjEp658gDiNs5vpBBJWqp4SwF4fKUumcbDFc9QkdSCjqwirJz5dY3VeBz4GZUST9f",
  "key25": "24k85NBPy1d2pjQG9trsyuGbQCx22FscxfDw7toL72vCBf8E6FuRCPCpJHC5iMK6B8umvTj431MLp8Deppy3CMKC",
  "key26": "2UZb8KVG21StRrbBLWh4sMJxWW6LxZKpgk9Bp3c8kYh83o7hs2ZoFTcRYsyh5VPFhqPyPc7p4nC3cc8q3VhfMtWf",
  "key27": "4qkfgHoUfir1oiMGH9J2GFumR1xiXfk4uVtbGuSNdrZhzqsTPkvDK2p3PLoCQen48o8fVt5TGWaweZoPDoAttZjS",
  "key28": "EXW2yMSKNibSbjPsQSS7PGnCAfo3KjWzXa6VyFRbHCcW6eNGh4nE7QiYJ9u7k8xnVixnTwLRr94XkmHKMAya2LE",
  "key29": "5q8yuCK1mRBx5a5GWUi917yh88TgR6LtciddjJo52KjAFdfZc5cQFRMXBWXu6cypdLLfe1zN1necm6uMcS9LKye3",
  "key30": "59DTn1qpzWTCoNrR43mK6TJDc8pXdvffcCmhGQazqj28NrCXv4vLbBFXTjVpoVFHqUh7JFTLDGsoHf7SPwDtQHoj",
  "key31": "4DEoUH32K8ttRG89y3GM8Vnmd885u6y7neRQmKMa4m3JKx4SdrUPCoFzvCwPeR6SZ8S8FMTUTMkdyvf2e9Xp5Zhm",
  "key32": "4CCSDUPHK9Nr1YS9D8re9exawTzSrzzoWuN3Cy9fKorMCcxNEC725K8a9Jm9Mq78AW3oVSCKYjc3CCRJFKJPpgSM",
  "key33": "4J2TdAKyFWWMVfKrXUJkJg14AqR4cQDRwxuWFBBZhoxJZQKgmoTNBBQnGbbdq2NBBw5jRRpdyruL4WeSq5txNL4Q"
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
