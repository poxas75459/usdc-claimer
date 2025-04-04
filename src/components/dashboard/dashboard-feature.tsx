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
    "3vtvBcGvXh4CYhH6D2eTh4AMG88juTz9E4ShnmytBUmg9GtcWAHqSyUQpKtMVRtGhnZrWNev4EWK2B5Ak3gZn5mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d9gEmBS5y7KSiHcBE1fNBXhPcNitEiHW6PGemvJbMVAKMkagcccNJoKct7r9Pt2GgiHCbKj32adcgBx5ep5TV9N",
  "key1": "4aE6KESrM37mDSBGswbKdBYd1keNtP2Yr41ADyJz4DnAxPKzMkAg3cQCU5GHBvVmwZcrWfq5EDXNfqi8S79PWr3h",
  "key2": "32JfnW52FSsXijLLN6eBnfTHFrEjGQoMQ1QvbrUCsKKcku848kYUHuetAjHLkcYajSUbhUd5oqQbvMqFtpNDRqiW",
  "key3": "44fE3znqSh9WAnvoU4gTTqHKLg3DrjFESMHA7LPWjLc7iJjYpNZ1vdZQsisrsqnoB4TMAKSciyeViingZn45hErT",
  "key4": "2tnUCgoeu6Sv4FqSfC36QjEfixVZgFugiW6DUMetxekUqehRGrRSB8uFFaWQ3AjQMjaamUc9ZvkBkKZ2b5EAxgmg",
  "key5": "2N7iezDnhUBmkHvrdnqSfm2d1EBDAUshcQVcZDvJD89dnS2oepz1HGuhFRVXWQXVj2iY6SRWkvvteF8fyB9bwrMj",
  "key6": "4yRHzTyfDBkthnYo3jKrXfbz5WcMqPVdGc5bsCuKUxdPhVMtUoBxCMYD5mDLM8bYoP1N9fBHoKwo7Bq889MxoBPJ",
  "key7": "5fdELqr9CyU6eJgeCuLaRtyaAxmvQgKAH58WQ1xo9LbdREZrDcYCy7xstwjPTH23zBPG2aCHYSbC2fT4BRvgFkNR",
  "key8": "3zwQZx4K13eLhk7Q1ex2bdzEZRmsxoqKHERrCi5WzXXRWnUVwEpgyHFkVdynR1qmH7bNn4QGWhhrE4PcqV4aLuNX",
  "key9": "2obqcbkshAV6D15Jz9F8iePsa3vtCWNEFLeK23T59mwGDMx4VNztU3Y1Mcw2w7wN6GbBKE96gSia5RuBEh4avUoa",
  "key10": "cfwbxC1bBm4EbP9E7NDD1zCdLrryVXPNS9pVozL9ZbXgnDaRyMohT44hVvzseBT2Z4CC1xRoLNaLyeHS166jBde",
  "key11": "3TUQ8VSzJj8TC4FLfLqWESra4y97xmjYxQYohCogWbeYKfronwNcyV58trB2baeyQMAqDQCneZy8eViLPvBrR1y3",
  "key12": "3joaprv9ft6jrpG8yzZWzAhXqrj5EcvyZ2YoQVEkxcKtxidgHSEAczdNdUHcKCpxzRCx3sxX5eYjPBd7S53uJaje",
  "key13": "3SBqmVH2zUBNtu9EGJT7MJz6SnSuj4DLYAbeC5f2rNbENgzW92gCu9NehvZ6JAG3WBtjRJw84hj4EskRufJEU3ik",
  "key14": "2VA2UG5Hr3cfFs9a1GcqmGwXeggxbUAHiRKnxMWbt6uddxZAvMaLVyobxiD2a9StucZEzu4MvydLLc1HJQyTLQwP",
  "key15": "4JQodNMApGn7GyMbk5XtejfsQmepHfYjsBFnmKzYbCtbHppUtGtt3T7KTboeL3ciasKCPAQK8pKz5QuKk2xx4mxw",
  "key16": "3q5tQvYS8eJcHgohnHsHv2oX6Laf6DfMP3rPUs8dwnKLCLS9xXwxJw2ZeQLCQk93gPYkP7Sd4mb9bB8H9XuJysPP",
  "key17": "4fowtC87i3d5UX4L9znn4FgMfjzGLHPoZnj2x44b5nTjLYHWNnjFG6JeFxUgBLuGtPk8NC9nkWYGhiArA9kCkCkn",
  "key18": "51W7bZ3uXrgFRhuq36G9DhAAgfEop8KLkMrkqbDVCXepBXSMwmMWaaceDCaupaR8HtEthiRJmVir7mxiR5EAzeYd",
  "key19": "xyUC2rknNjDHFAsLkixqTnNncQwD8Ji7MfPjFbW8rp5tjs8h7YevkxXeEo6AfWER4HaHu8bDTuMUNpcoRPFR2PA",
  "key20": "3MmKG6WadH9EUavEPKoGQYQRsZTa6jiWbw7gmpMTjsbZUZ7cQb2NNfafDFqtFdWVS1WSDzW98k16iTHVNAcaRXGe",
  "key21": "4fNc94op4wZEJvPjqorrAeUuyAnpFchf6XTNrV9xw65DNb4FEPG5uTrTGY1h8JmKHJE6bBKW6Zhw1W7r77Biebdh",
  "key22": "fmqhd5da82iBRcJxPx3bVj2KPiDDsZKnkefa4LbDQVjs9JvfZRePezScd8v5ZkWjPYGXQesLpAfnwdSGBiePT6W",
  "key23": "24KStQm5828VPUgeJigQSZJzx6Y4VWv3FpM7SRqdTokofwHqR8VzvnqRVwKWV1gPdJKZBjrK4LjjLJgz1seX41DN",
  "key24": "3JVW2r8WWJ81EUiPnHhv2YxJaCZy5HEAj5ridZykjRYLRVyqmaLD1d1pVUHqGV1SQS2XnFBi5q2QQeuKZJx7R4pU",
  "key25": "bEaEFE5M5bfVEAA12yHiXDuJNs2gXT89om5QJ39YTCbzj3x5skxEaEPoABN2D6iqcmA7ZsU3xjY8mHaSxorz3Mj",
  "key26": "jkt3fa6d2NQ1dkAwa4DWafcTEbyLbrSwm3RjVPjaGQRcrZN8mRRGEgiktUseMjwjXZf9LCj7xrKNXP93T8i3ZaP",
  "key27": "4XoXnoGX5yw9kkCKhYxUYfp94VVU3sZfz5oyDMiBoppNiWKQo4Qd9gPJE1g61vKKnzqAzD6CAXP5o2rxuKacgCPa",
  "key28": "4ZhroBHVos9CzvokDCYaT42fmm4bcisEKvNmYzr8F7J3xwhyxGw9fBSiA9kxQtHCDXnCvBzqeNfUiwJMgzcMcdrK",
  "key29": "uj9Wwycg1yuTb7EKDNstgDjrfdqFufW3pZEkkpM4dZ2PM5QZmeR7bpV1cXbb8f4ygutVVx9h9tzt5msVBVMi4jm",
  "key30": "ZSTenpA7tXcu72d6DhKPfuo6FUybnVsKNZi3jVmy2d8PK54b6QFK6NXqiMwnyWgev6PkHAXPNPVD1fefwZMe3q2",
  "key31": "JEcvE18KrF6UZassb9hPyHSuWxdM75fVtLRE4GKrTd4HRFd718gf2gof4hjJNLxakQJYoNezZkAkBeF2CQEfi7U",
  "key32": "CqbAufHn7me15ZVu6w4iJg5jb44VQfiXQE9tN8vRvVy22RRZH5xPoKeH9FW8kAi7u46yW7VNnZtUUv8VU3kPFt3",
  "key33": "5rryAhGzkuUnTmvZsvNNNU2BkZHa95kdoqYyPteyUpK9XJG2reegj8cDGN7NQSAHsgKNNmzXz6Q2EUd3hsribFs8",
  "key34": "2bof5NsCMRzQ3Tj32qc5s2fo7v8VEynxSdkmcxXkNdbX9EDhFY2aT6pDigTPwioiomkoexcyFAMCefz9eGsudGoJ",
  "key35": "3S7ixqT3hFJCztbkh18XiVZtxXwaDxYcQyahRYV8oEinep6uUxBoqcKn9J1T881WQrkMx1BtM37ZrMhY4vE3WueX",
  "key36": "5wcsLPVFebxvRfr3uYhZu8ms4k5H7DtY7d8fdjmSs4TMBt4ezVK72LhCqxy5yth3MXDJ8P83PZn1ugaznGuhKShs",
  "key37": "3gF91rp8GTzUDhNwvMhKj3BxWra45LdEugr4pNPYL1mCXccbifcnwQkQoeDyz6GuvRgrgetBgeNFBrxBNWZ55c86",
  "key38": "3Rb6mWmuG66KGPJ9aYcHTuq9JwpfEfWoWXMULerRpUZRnWYoSd2QBdx6ngtgWL6XUt8tsbDQ2pzh5MPaUt7taxSx",
  "key39": "5nXHXJD1A4PKxaDWMJbfkUsCHNW9cWsei5dG6C4oVf2wjHJHsHKZwod5gKeSMg61VB2NunFkBy4gQQkF3e19NWof",
  "key40": "jbaQkeQjfLiTnC7Boa7MFPoFbbjZeuevaPKQf2LjE2psk2JQsV6aW6ucr7g24QeJxJaJtBuW4WYJUqPZy59759b",
  "key41": "2CmNYHnzNTqKHGHmrd92rHd5v3d279g5W6Ba15zRvRELgDR7yXZ2eZYW8y62oKEb142G5gpFEyxK6WopcjWMqvaz"
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
