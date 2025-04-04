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
    "4vbuEhLfEtP8ZnCchUxubycESby8eB4JwFPgkN8F9N6uNweZgAmQcbCJd6LYZeo1ukFfEbPZrzoEcqdaySv7EA1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YPaVF6fj6aWMbK65Y3jUPxu1X1HHXGaoLwKUCrS6VpbmdZo1Yp3XF6Uf9v9tG8dG3KTDHELV5Lh18atrgB7XLG3",
  "key1": "3XVbLnHFhpid8y5sRwEtERivdwLzYsYDTP1RKsv6F97WzUsD5xdvDV71RdCz83ZNHhdFQNsmxRNVMg628UF5f39q",
  "key2": "4X9cM3KvqZzDrvWap56NiLav4sqxD4rM5jq3BKPk4DLCryq8jVQXNnWVqHA2ioN6D2Yu84KT4AYyHAeF99AqfAHq",
  "key3": "3EwhBUdnQ2gPrndeuHdsCrXzT7LMdecs46rnJaSVHKQSkLYJGG6HbWVp9BYosTnFPh2aZzywUzaHXE7y4QCnMMVT",
  "key4": "sQZELxkQCn4XgQwftQPoTVxgXpFnNUCDCBskLVxRrumc8VT3NXkiy523M5JxtTzPGvdxKTDfEE4dugdTpcHWs4i",
  "key5": "3s5Wjo2ATJ2seyQtNW3BTgYwheKSnFCwAqEUNeDeB8j81jzySyrwGwEnve9Kb4GvDUCmbp1RrMWSywzApRhFju1j",
  "key6": "5KtqLk9DyCkCFSxssxSc2VMQUCyeSYjoBYcrTjWLXstPdd2a2KPwNcqRfY8j3VUQcUFL6qpfTSvTpQbukZ7bbyQ3",
  "key7": "5rpyzpfEReEQ5Jq9oT9QK34gSQvo9WxVt3RgKu2T4PpHXdvwwN4kEjdY2A76oU1a56dmYwu1b7Mtrg3pt51iPret",
  "key8": "4WrgU9LSq4z9RGnDywo2dGznWC4Qstjvra3QbWeYe2TQ9iAZYuTGJBGcC3Gchod2wQmMXZUut3HkPbRNRU3zBCFJ",
  "key9": "51H16vwEt6rTMEyTF8E7QXdRDraEJ4tnZPX2pS3DEQnqJwmgkmSn9aiMiiRyTLcehj62fiqiQNDePJihQuq7C7PT",
  "key10": "4tovkuzMWRHfkHgxd77JqXZHZy1J8AGyRDDELVDw8LSNoUw4sib2GvAb7A9JCFBg65ajfHFS1bgXyyDCqom8HSmH",
  "key11": "3VL8hFzbUqTsxGXq4Ew6xf3co43HKJe5wyxPsvpaG273tK2JwsMCgP3PPjXaUHhWSvbbWHV5Q66a8zdza7T8DnyV",
  "key12": "32x4xcwgPipYNSHDT6DePs5crocTJMwo5WYKyTHQ2jHrLHWBispXtH2JSCYRyoosFbttXCsN9RwihpAJQkjhEYUH",
  "key13": "3AiywTx8cog2j4SgxHZ8XbJGmJxD9wejvoLiLRwSCwcc1qHGzP5GwmT37d2Qvq2PryDWFCU8NsdysfeGnS9z1ifY",
  "key14": "3hSjwoJkJD1zVBs34CaY8HbkyaspQm143x8MsapPtdS8kJ2G3mWesz7YRJ8irGrVpiSM234KiXFoWgQNkb9jwcH4",
  "key15": "5odWV9b8y5F5ZUQQb3aoUP8Uq85HDF2k9pnT8idRjReaKcxUtcg3BRTmpiCzFAruXXHjaGVuFAh9RyybRsseoA5d",
  "key16": "37PotuP9hZNDsriDQW1b6oJLHrKcXbFCxqD1qLyo7kb2ix3xqD8vR2Z9iGvJDBeiFcVsUz8d41EpXRwigXFrghqe",
  "key17": "BFbaMen4fB47FHHeM8yNFquuAh2Hmo68EHHuREVUR5uMvPo4pamaK6j2pAS6XA1BVaXjtdEX9maVMbNpM9kYtxb",
  "key18": "4irZinJK5PNVxkxpFE475uxyi7mCpaYgJwWMJuVqeoum99Phj39F9uTEYDivHkRTnhWbhWAHwKu4Mm6HporphMJz",
  "key19": "5o5hHCBHrLsuACSXrypfpUrzfeYSMkBNvFdAKEdPt9E8hBdzpBq4iQhtUT2sz96UcFADkt4Wi36EGFeWtLvDcqLM",
  "key20": "3dm9mSPW3RQA5PJrzxqhqgeasnEgeCiM1HL5JZ2MHUktBkA7gCFb4CBw88hVT6MueSHWkZy3EDyRxELwrhLVxX5q",
  "key21": "4FFKtf5KuoUrmC5Bo8rdy8sh6uZwhLKdVjBtMYmGpyXnRT6WgfBVX6q4SqVW2PNrgMpMkUedmtDzYzDhguHVnuj3",
  "key22": "2kAmgQaumDX1KWdSFNNuNv6dmCL6QoYhekwcNqWhnyW8nyth8mfWaeXn2tuztimPwTNkPeitkCpW3YKztysVX3b8",
  "key23": "RchM6XbvM3tGPTcc5SyC3HeCnLzz3DThVTGd2RTrihqcAf1znCqhpcK6gzwe9X9TVWppgUy8fYtbqDn6eZARFmq",
  "key24": "4Ke3xTRaSBXmEUC7KoD6Wf76H95RPDWmJU996WtmWhZNZ7jWeK226BQGxbNafYcsNdVW5rTH77DDkmWUifKVW9pZ",
  "key25": "3JXC9Bb2bWcyKVWr373A3DWcrVhfXYZjXsDKwQbuMsvGNB9GdmvNnGNd9BFDn9gQ2vKwF2EnoMogTehcczVSDfNU",
  "key26": "43yAAtVhyhjaJ712R9qNo8Dc4kcTwWP2ayZsqbH6epix6qDKPTn1rwfi3Xg1NhNeqAQpX8NvNXPRhyYi4qzh7nXC",
  "key27": "5XCTa1qySTHzASVRGkNS2SkF4bPEAGKX1iRxd7sDGQLbS8MaaNiLAzQQcgyjnYLdsHPPPfMyG4aia8e1tNHyeys1",
  "key28": "63g1vSijRYUGgshuMavEp2g3vosbh6NYSF2kL7HawRLYcc1anbQxxzshpkjbFCZ1Wo2TebRicWDz5UgrKpBFw5Dc",
  "key29": "3kLMQ3oj45gbzFo4ZwjMDHCku8WJHnVuPZYc2rv9aUfBXq7uebMfvB8uM2pNwEuBVxNKAT9S5AvtoX6aR678JgtH",
  "key30": "4JY23d8uXTuxZV69ToZvDriiLVyAu3vJa5KsdLBkGzLMiPGFGx9tnYhLqhJE6VhV61LGmX5SD98veXYdJik9MmY5",
  "key31": "3SBoFmvj7pV2LvSYtKv2b4y51Hh4x399H7SEnjxpXXYFBE2gZaEUDDdzV3Jqw6TwPpofPG81dsNqp7rkmy1WfEUU",
  "key32": "USoHsCpndfDtj2Evv6RGHbArGJuhkZ1z8jYdQhVUN5pXX6LMBMab5GxjzHogV9X2ituzNthj4Zm511i8q149YWT",
  "key33": "2sHJLo7wZmfXWesfcdez24saKikm42DWkYaQNbWUntMiyWtrtXgiSzfDLnqvLDm1Ds76nCVZvsaewxu1Q3CbUnsb",
  "key34": "3BeAYajxW94ffcknFqwppT2Sezk1T2PD1r97HnbSUcfunU2pQ16uGJRGbLqyhG9Nx6cnrpmvuLf6iQH24krZ3cDr",
  "key35": "61exCFs25fDd5DMaoqdUGMu5gWfpwG55DNPhiqhQkmPmeS1fLtKRCi4PmSxWMQofLUt53MEpG1mHww4FtuRZPhH6",
  "key36": "51YTrcus7AkyKqipN56fH8BjSzfTodQaghpaD5rENGVjLsKxnDNjnijk9pfEt5V8ucu5XscNa8trJcaoeER2m81o",
  "key37": "5X8tf7HohTUhDVW2yjGapzb6wSjoUQyc2FD5eNRwRxXZsZtQqQRUQJnsEcZpoZLr8wcZ1A6FJhZeD3DxEJ3nmLed",
  "key38": "ApbgjUhYWhSpUWkBxpUG325tDxiAGak76DimpLd4iEZQqUJohLdLVqiaV2PKSpExpxHbbnqYe8fi9VVyDaz1WyG",
  "key39": "5ZPasaq3RKkzkVXFuHvcKZd8tdxqjci2Fv1sh2XAqHyxVQCoXEGQ4h5ctLGx9HWPj6vSat5JY9omjyHdEwU33C4s",
  "key40": "QzKLZwZPNGK8mxBnjWTKAufq6My8AHsgj9yfWheSTCg73EZPs6WmxE9zDEDGgrsYrycyTJ4ykm7ASh6N4hEzhA7"
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
