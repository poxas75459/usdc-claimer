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
    "2WJgX9fdFr5WR8GMfYXpLPr85y6GWMzbQn4v9rDq5TQFbTn5pGsYCCAUacBdnwamK29SjzZ1dmDJ4zrvMogumXNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TJbdCuxVzVUjpJY4tSy7Zpp4RA7ACr4EejWMTFeWnfDuNsfubmT3iAzw4QcV1Ur3pB9wAWyshG9zpiwkHo8gdMb",
  "key1": "2gQK7GQZnyzr4ffU4Cj1qyMkNHZCUhFnANgF39QRj8ZcEdKDDczBBC9cVJZdPJfjNVmcnsMH2f9CAwVU3FQKZUdb",
  "key2": "2jFDp2dD9GAjtQLWEd5VmTbQHUMEdKJkNo1hTSWzknHQSdtPThFSnviovGvv5Nuyie8yLNwff5gTH9yvP2cEdwc4",
  "key3": "4kxz7YyEMsUmzPyzBbzkUTLPFJx54xBEDye1BNn6XawoHvMQyTMdC2qffxexTHK7zqdxPezWSSUhsjiSjnjCZTkJ",
  "key4": "5ZgU2bU1yjY8wAiq1RKdgYJKgfjhBVp6AkbvEWUykf8aKBH28SJoemRmGwowNFi9YH6BHF1p6ztTr4gUDbzEC6EA",
  "key5": "4PERTy3frPMPtWF1SMXfPeGKAVBpPMhcVaxzwRQeTYv6jD2xfp1tmitqAqj4R4kR7f33QZyxWVD8u8T2aEygKQaG",
  "key6": "63S2irnCEMN8pi9HE1wWtrsdjxLKxQcvnktQ2M23sLU7VU8Ch9erJkGKp2mehm9cLtbuzaaUMdHmfAYKogpeqKtp",
  "key7": "C9jYvkPFvkn4kxNBYo6ikDEqfhS9eVoUWKkZcTSwHwee9Rdr4J1kEzHr5AukfXEaQxxXYhMpPP1ddRk2XXDWrTT",
  "key8": "5oQByYNG4HrMXsWztM4QjyuZGoyDWp7LutTpRDvaBjtCjADEUdoTE8YkJVNcVZxnFPtyTZfP8ym5gEvV3crFE6gH",
  "key9": "3ANS4oTgyEU6Lsg89Zvufbxj6CCQoj2YiLWxyGGDEf49iG1vN8GEeqgpojjPvvQ3vbMQfpsNY4Jzfgrxe3tfR46d",
  "key10": "VxS71htRZxBdb89DMMq8ovZSTNJ6RJYLFYkungSsEVn74BquTfsmpph7eipSzDiDHNxGDpxLANnx9s56qoCdEpN",
  "key11": "3c57WSVhfN4R6PccoTEihpdUgQw3FzgpEbS8DQJgbcfRLQJXy1Q1eejDXvFJJtKPyNKBTS9V6jJn9urHRwcWJR8h",
  "key12": "4c8ECJsfp5cbqjssM5tTnCZQ7tEdBGLcT57P3W3QFafDxEqtiZaw1k2Y1DV9efktnvW4ZsWY7tvRXXavkq4tdK3Z",
  "key13": "d2VMnPe37ekGEWXxqqVtZ7xeTaHUqqMDo2mDfwYpKikPdp5vFMwGFRCXCNwMnHo6DhGY64XLfgEaVBxpD7msbQQ",
  "key14": "3AMmhH6oQF8MnXj9yUQffVyQQRzjjxfUBEptQXbt1Nw2KNhfbdrJ26jiuUpDKUSX5wiKUochTj1m5FsSj1y3B3Dy",
  "key15": "3dtVvVuMcC6y5NovXTwnfDrvN5Dg2DYtUsZigXJC25MVUqm8sZ56AVhB9EQ7aGZkJGUJzhBQrrHFwr6zrgWSit3",
  "key16": "5J4cZvkEmRDEX3QC6Wpr3tyCvvaTXyLMNXi1cYMrnLybTw1L8hGHGrCKuLSb4htnmMGPKaic2e6s1DpuQc6vA4D6",
  "key17": "58XjRsyKqRTfYvbtme6YtL59Vp74S4oGRCgqv34X8tZLEvYqHpLwnqQYWjLfu8toRxDK3JhZvjezyy3Qp9ZH9N9n",
  "key18": "3tmsq1wG4b5acnhAcjRo5iFHhLqB48urYTk6iBWg5tU1aL3w7sd7Uib98GrUhjkLTSaPfwdgU5GXJSL8aivRhjYG",
  "key19": "XDLfHg64ETYNC7mWYP4bHagt5DhJCeAuvqEZMo8aceiYm9kmCi1UVyT2swiXNBMRZPV8DG8ZXYLmkt8mnXE5CKu",
  "key20": "3iZLJoRpiv9BgSZ4KkXWUqSx7h3PuPMFj3PYvkbo3GYj3juXiK3gcEA9Ge5if6nNt6m31hcAqAnqqRfRPg5aNxjm",
  "key21": "4DxH9EbBDPzuUeXry11decVDYVzZ47ZWfrs12Jr1Jq34N3eG2meTQfEz9hguVuQ16HYjUsvYbmAgv2YcYbjxVXnp",
  "key22": "jNSYQoPPSqptqsShSgDr1zikxzqctHHMtbqDVHpscx7DtNvXfiT5NhL6b53EusqfQDGQqxC3qUgVpZayoa9VY8t",
  "key23": "66FRLygdMXtHVmhfp1LJyL467g7SyfgkV8GjNubvj7RtYHPMtPyzBQkLaie6XMZ5a4ffTKcA3fhfZLEbqoMq8FyE",
  "key24": "3um59GYhCX6trS2r4zxwPUQ9GRJe6JbZ2fZPdv6FX7Xd4d88GryNJ78xuPVtv2Hs5L9tGb5gPsspqTKDNfeurHL"
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
