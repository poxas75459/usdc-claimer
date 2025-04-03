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
    "4iG2rt3sYjDYAbVqnaxBjcQq5iTmdEg1zKtvE2ff6n43NjWeRHSKdASZYQZo9Kun5t35euJndFfGzvEsUC6b6Tu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kxNqKAPi5UkEHm8tVX4qtuUqmT5abU9Q2saMKB1pHGYpDBJyUt6YthJSCNRQGEQKGQaM5sGwiM6NUktauAugVLX",
  "key1": "rFsXB9hfoPCzupoAcdVf3g1Vqd8FMNz3QXNBsGpz2EdQMJotcjQxYr9oRGi8sYog34JswvkHqgSuB6MreKurvbL",
  "key2": "4hpgYmuzxEgbffPBKhMDtEXg8tBNPcRe6EWuV9TgWxM1PH6cpcXfSwCnRZ1RMGUYCExAyDZPJYVeHKkFH7EwNiKP",
  "key3": "2E2pUTKUCA3CBrenHyJz8ZMsAfpM6EJzcPgPu9F9nCRfYGxuMauC3gMBKK1S6HGQXXwHTT4PaFHut4Jdq1g9notf",
  "key4": "49sRJkMpmy3yJmRe7BaSEV72b1tjbTbi4pXZn5V3ZrF8DbEshafAo8rs5QagP3X8FcftKug3QFoLJ6vK5Fpq5vm3",
  "key5": "MHKasfZonjFP6xrsQD5nEa8SNhDQct2ZejFEDX6msMBASB7zZACjUYCoaMVbPuWoEgaeXdrgtQ4vjpH9hqemC4c",
  "key6": "5VUoZxACo86Txx2HUfc1ZhsLKpo62DFzp3fgnKZ1XqCF8yu2VqcjmZQNZynTC4rPcUR5h1XYgB8PtrGTPRUpiRNC",
  "key7": "4yD5aydEfXFsjzzddeuqJzY9Vx35hpKKjJnQDskNaVHbys2M5tAhacRjB7mwspaJEd3TttnNwXgMpyEstvvYjQsU",
  "key8": "3yfHQsZjmRcTuVdY3yB9gXbABwRNi2ogRrXKRYeYT1wdiJxi7WFac9mTGq3rU4J9ZkyrLacnbpvm1pNi7GfK4GVQ",
  "key9": "3LmRxk4mf93mrwTDY2QyAkvXi3kRrLYSrBjVYNYCNjJXWsKCzcHthLf4cSJ5Hosq2NW7dXvqHi7nptvF1DEvkB3k",
  "key10": "4JJm17fjcY1uUqJGjRMSKJYY9SsPuv9QN1ucxW4KS96oTsjHjegJH5QuUyRAntcFoC8AQGdq1zoVVjsHLtpdizu1",
  "key11": "4SDG9GQabugxR7TZtgfFfPquTSsZ1cUwQbuib6ytn5L8TQhKY4p2f5UbJUSgoN33Z2jsCNf2RiCk3sibbYurVFHH",
  "key12": "Q2gytV539QaFMhHP4psr64335jxsWYYVnuGUdLBZgXsyMLgr9HLRZhwN1hTc4a3KSJjsbumoMF7mJUK7cyp9oRa",
  "key13": "3bxkQq2pp7D641iJRoSdFFDBxXuU4kjYX5oozijr7zNmdKBZicBNqakjkzFXPXcvs4RUYTf8hFqfDaBNinG2TAx5",
  "key14": "4XjX6k6n2sXQf3edKV6Zvyvs3kjEGox8kYsw1n9K1v3UGqwq7MV6rva1uXgLL9fUMRS9XUYpqMhWXuEJqdVSfNHN",
  "key15": "rrDH26bHtLHCx5rLTJM7qukqqAodftzqKixh8TaGCw9eHUnpxgjoGPizyNuuq7Upgp9DmoAehGD4zzukYu78XGT",
  "key16": "35qBn3BioFLzkwKSb8yrPZuezTZ6MtG1QrQiTwd3rCCEp4Ggnc2e9GncbKv1W8yNmecgn5d3ajPPnmPosGpLtbYn",
  "key17": "3UNLBQW1mURwrsqw4zbpz7HutduvE2Zd8i5871iwyhYNsTRiP5eZsnmJzgsx36NnojxFaJ4LwEt5SM21tHETiXYc",
  "key18": "33MEHq8LY5q1nwxq5XuSxXGftDyemZvS4FEVteywNE6uiDBTWTDaWYggGnn5p3Ym5ygSgyX6MAkjmEo7xuzWw2BL",
  "key19": "67CykXXLiotWJzbNejRmEJHCf5LvZcu2GctxQk79wUp8G3DiBUfzuwXeVAv57QrwuqApv7cFcG2X5MmCy6TAFyav",
  "key20": "48B5bVmXpcWtPGhJtwtvTiX93Lm2u2g5qU3yezgLkT2pVmLpinpwZJLyJdsffw7ttrrYmZuoshxRupCPf2t2Re1M",
  "key21": "5L2sgLH5VKbUAfN38oyo7jPqFLZCb7QWJUTA7iUGGgLDQdUvv93Enxe4cSvafHST8uagqZwJwgpmYPpahkegbj8a",
  "key22": "25RjDKvAkKfCCsaJTRDxC1f9cGodAgDZ7M8yk3zvo9ppEETmWtp2vAzswDh1cwaCxdn1MRQHX6JJxNdcn7MMYwhT",
  "key23": "4daPQgcVMFrSuMQMnrUyKe8RKZpT6SzSadQ3LyqZU3j9UuF1U9UU16mfHHe7bW14gRhwGBPbbDpsCEzBGMqpqayE",
  "key24": "cnRrqoUujR8YJ34Ct7vYG9sBGpURpwRvH1mERiBPRx5fVFWxoDBw2EqmquxfzMXnoDm9SJiAnvQbWP8FXKYba6v",
  "key25": "bPSfc1qrqg7st1q5VfaiNyLbYi9tSGQZHvYQHFputec3hSvzoDi73YztGLB71npttEghwE9cs3bFd56sAYkMrVm",
  "key26": "gKgCPQB94BjQpoLZDvtWMJ2WnteWEYLZ1b8M4g5UoPapAcYjYBTUKiui8Z9ZpMkQK1iu4xpNoSy6xALe5vQPhD6",
  "key27": "rv4LdkarxE2TR4qqvh7NassuP6rWuXWrSPv5JWNSi5JtTURbTKg1dZ27UCq1BLYMRbakLEEfmDv4cTTQYeRgFEf",
  "key28": "3y9Umhc38wSJNEgEpTtHwfVYW2XZF3BzzU6L4h7FRNaFftA2iH8XmX7HAdDSDCUMsfehYntY1FjBbZ45YbF15EMn",
  "key29": "5gmekNyDVtShFVjaJEA8hSXusNJn3sPSnjFi6Z5hrAmcf5wmLCABURgpoE9SZtRyrFVUEa2KVyuHf79wJYWWi7jz",
  "key30": "3kk5ccfM9PBkdomnYz4h1xVUpG3hijuP1QfhwgmCgNeCUW6s4zCeXfRb5im5V3GxxQdGX2jyYqNZrbPacrHLA3bz",
  "key31": "23kgwvhWogSrzmbxgxsFfdtaWaxDf27VVAzHXV2FdGeR75ZNA21uu7GqtjyJ8Cr5nmAL6hSnA28D9mYKs2HMbdmm",
  "key32": "2cMcsqR1CRcwvLsQviMHgfo41witVur8tzoqACpEFVRpbxhsswNBa29gQn12AfGrocHMZo1SdvCz5CeKudktuBwU",
  "key33": "5kvp373LV5423j2qyGUF7eqM9sx36Hmpmymc4HpMzYkVYSaLgKXMarrNHjzdq5DrfMnLcQjouWZtzL8ctDb473V9",
  "key34": "4diQMsDA15BBNpE5qJ8QLGrkZiYNBsiq6WUKKZwbXBepYcPxxeYfJE5Dr6oWWhv8en496smQTvAjj4ER4NhquRpx",
  "key35": "4n2owu3d6iDFSa5FiaX4F3CqerWej9PVyJJMv4BUN1tzLvpM7BXjftQer86rSwBzARuqYHdQESpgBh12pmZZxhDW",
  "key36": "2dTv5DzgHkq2HH5coTkqz8wRZtFsVqLdLRKwaTs2uDY6swBUyEVo1Q4C1ARFAQehuDa7iv4tjPy9wHugr4y2mP2u",
  "key37": "3weAASAPMipsCj3MBifTopdNHXNbGT8B3fU2C94RxboFzhMjRsQn8z65PdGuUWvvv5ddHCVW8D9bnWyyRveG4G82"
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
