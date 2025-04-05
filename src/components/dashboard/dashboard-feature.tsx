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
    "4URnsunyx156tMjyn1D413S36re9gPhUyip5KEa9rz7DSLMYNAMEy1pcAMHtBSguqfujY8L8G2y8NmPw78c9vuT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q6JGg5dbEpPEgbQQGnACx9Q6Q6DshtPKXCWzc4rpSFEh3FP9AGf1dkrSffvHMaKJwZBPPqwJNkSNbeNYZTc1d3J",
  "key1": "44r3UJjXmHW1L9kQwq8gWNVbkyih5fp6aKy2YhBwv1JVcf45E7CtwdLmYr6ffMogCFUEekRqo7EdZFHNWiGnS3GX",
  "key2": "216eFbRPW2EMoXX1LCC7muwg41sGMSXcLMhdMGhdFzSPavNVSXuKzxx8UxdRPKrnn5yJoV7yWMRNQ6wgjQLjPnGt",
  "key3": "8S6F2W9LuTku17zCtZspwQ2wVUaVGbs4cnSbqQh9kaYvPntXe438B6EGKGJH2ozYARYDKFuJh7sREhFyjuHXvsn",
  "key4": "27fHvCnAmSXfyBa2AzGn549SQvLKpswQTH7E7EToT8AXEKHck2NfZzyFKcHaXPfRSfeZ9ojCNkTdxZ4z7rb8kFZX",
  "key5": "35mM9RYfCVqrGbjAbW4aJVrTdYd8qteaHyaq5Gu9k2bQgK9T8iqHN1yMRiePzQ49CBDxixS2M9BVTVhZe6JiR255",
  "key6": "3rLtJ8Pr3A3gqy88z1hVK9MEnMUDsw4PU5froypjU8FqWJthz6fuVgXDWfY9kNvXwJ7kxynhQ1kkudow13PWW9mg",
  "key7": "2Mdec6ZXkFHVvyiLsHPQ7WpxRhSbxxaxAqeTqfVhJjDKQyWMVJdmABoyTmorYgQT3RjF24FNa3xorjVccQHbgskU",
  "key8": "5iut5hmaeeyRUidjhC4y5Ajw7WJ4ZBPQ4QVnxDSNgryssaBMMHiqhYJduG4vqyZ867iFsrdQfX3jvCkdXouoP4p2",
  "key9": "u41x5xYy9deWGtHYrNd5sx6exBKmva8h6adF7hvKLSWBUFxV6CTDwkfNVKbB2GoZx1sQzDbJbCtmTfEV1vUQZN9",
  "key10": "67VEfkPxk3mVpmZwRejW9jhbUHMfEYLiVmsWrpGFEyns56kKHe55MvsisKjeCGvNSEkWKqzwbfKzewC7jW4PGh8h",
  "key11": "3PFhwycUiA9eruNEpaq8P5bhuCGg2TQJJVKxnLvRJus5TiawsGizJ5jQFDeNSq83LVn2AoV9Bb7iF99NmmWX2U6G",
  "key12": "tiffQqZvFHPXs9FqPqWN1sAiwacvkxUSk7LYXzJw69u3rgAmHvoLuNJzhSdc2mAX5WGFXDqviYta8cBTBUN7Bvw",
  "key13": "2ZYoh1Hz3jqJrrw54gSrJpCKeqvvJ6MhBHd3fT2qqtroQjU4SGLFfkNpnjzuLk7p7FK2MFsoy2EjNYB3XBMo9vd1",
  "key14": "4iDftcsu2FgxQQiQAX4SZdUvFPrkj1FYJhQrWjFNLBPNGpyjVmMksJwFtU6rKR8HsRKaMewLbKCrVhyVmjcYtwzd",
  "key15": "4gir8UhZtYu5RguVPgUK2D1Qwsr11xtGWphVr9hiiQRvjKXRewNe4xuv3UwoNYQV5PAmruvYwb7EaUguiswvSkW6",
  "key16": "4r9ttWB6aPJKW3M4d977VPVAFGx2QzCbcsW4PcA5HyLc5yhC8XJBkAAiTpj3JksRA2SMHskgJDwLUt76KprFHPJR",
  "key17": "3hX6G1nca94yqM5AZpDiwgvjcm1EfPqpv5QM6r24YDAPVMKwwhLcPsMB2L4KPJAJJ8wKnf4DiRtyLSjTxbL9SVjd",
  "key18": "4e3SLi4HdSp6DRVY7UmUwgsxkoxFntRo3ondvtdV8Hjt8ebkRdRog5AU6stXw1kCrszr4JPEVc5E32rA4teai2iE",
  "key19": "41auXZFpzowCrVCccvC1FDkL6Ldr5sL7SiMkYqFiHiW2dR2A88BUkSixxPqTbtbas2ZGYDi7fk3GzzCGMfGRDPxb",
  "key20": "2uEM3oyUjx6U5JpVKNYqWHWrJbfRR6w5VWjf7bQiZ1mWidgdBAAdKPB4z8tsJ9Bgjrit2FZhVtV1hEzYfDzYRwJD",
  "key21": "5FgjoAnD7jaJftAB9Msp46L2SLqXwfWpvxMnGiyZTdcv2KsrPvtStGBWB6XXm7xufru7zmCuEoqcUQiSiAffh98T",
  "key22": "ndfWFibF5vfKZXPUXnQL15E1Y7m5t29Q8xPtrTfhgahUPh6CTZZrZNpniSHwWYsvTNXpkM2BA3Vee1W8aPGC4B6",
  "key23": "5xMezXFgDoeF96nr6cHxHisESjvhFCA942ubbJoGUo8iwdJtdiMXd7jzvbFpe37AjsJbBYW1nmQ2fCa95yhu6bww",
  "key24": "oinCjgF52UJQiwMm1HUn1sRywH8Fj2CRvAi79aCZxR68zA8mKMQUNPqLEGFPVGyMemtRDr7M4DQJhnoQL1CTy8q",
  "key25": "5BnEyvpycsTGVUFhnH9fzTkiFA7sNnu8m6K1k5UQbAoigDzTiysL9eXHp6SwNrx4xyCQkLVLn97m7oWuK98CWZA2",
  "key26": "4o3DSvnJcHRbiHsBesEYUpvHHuA5QgvoNDLkeD6cMs1HnN4eXMpnuqwX72eHb8AdXM8gh9w33m9ZYqpT5msCegLu",
  "key27": "5TPiUDW3JM38WVrXuJTZVgfCeFFfgUJKa7eKsE7yv6dKpdQzc9C9dStc267WSAcqiApNHzD4h9RMQEvbKc8pbaYQ",
  "key28": "5d4woxMrkhit1gWjyEsv9woDsMzM9nVDnHypXNNgzLSaTmxjN4Lro4KVztaMJSfZRAnjMbfeFgXQxN4PKKM2KSHL",
  "key29": "2dp865NakDoDamWtVbaUC7P59RzJjmnaLYB7X1DGzuK1BApq7LYze8uCjyamBHbSMo2VXi5ryeZSjCQjMQJ8Z63t",
  "key30": "3uMJ29bCmXteDLD6HMsUKA2nsSzPzrCYKSH9kMcVrmksVdD4Yh6JzCPuM5ZkMUrrH52WDAwAKJ8tMRuoWT7YEPk",
  "key31": "4fYbfGqYmgQLNNfjd4ow8MNpUqJHvW7GPkKfA5ivPebpmAyWkH1tzJUQQTbQMVnsdV3FQTvkTdcC4Txz9by8xQJq",
  "key32": "4nLm63kSoGbJ9Gv3Jnrf3X4fW7gHg5AXhwzpw6iQWpzBs7zYvrhYmfSEFBaLqURv2pwrqQ3pxdJSCemDLrhb1pji",
  "key33": "3jtjxsRQwoXzEJmW9KnkLVbRyv3HMNa21kQaQb9NnCV2GkQQA5ZrBAPL64rYohKENAzh67pvVkpoK3tEcxLNSrA9",
  "key34": "2WHzPgoP5Cb6hh5ubfKae9h8MoGqRFuZPhjofnVBTCL8mokKysM241v9b1ZbGAfBWcU8Da9rFzSQoBdJCokNL1wu",
  "key35": "5cBw9HLUF2fpgPTyv5eKwRpe8YCkbuYNUP6anMW4pjVxSpEhYzKcaseeQFpKgGzzurqqAHrRoGHoc7nsy2XGuwhe",
  "key36": "66APWS3SDVPWRcu9kjemYXUrZG8TNYwtxC5Q8yssC4F22vzBrgwLznELZC68XsjjsaxKxnxbhre33MVEmhCqX2gX",
  "key37": "gpX3YC5GrcBJiYzGJfbhJ5M4kxgaGCaLBpDW3qfmFZjQUVeftcfDm22i9XNWDteKNhHdDxYFGDS2Yt8B3TXot8d",
  "key38": "5CSEKXbk87G5WFz8AWaTjfYS1cWr8aWWyNF7tUBejqWaojRUmAxey8zwgqGPbnuBWwMq23NArBdszgf8VJeug2QH",
  "key39": "4cST91WNQPb4Q9SZAZ1a5R6dBYtPLebHxum44BYdUti65ih1bsuzhXNZKzWj6hJP4R379gsRLhhwC2o5iEDLnQMw",
  "key40": "4RQMH4Ty16P1LTebhG3sNdXwAamwcCzB4Mipa3K17WmJ2f2PdHwqYwQDmKiZ47ptdANkD8RNwnmLSqndbDu2SvUG",
  "key41": "ij7B1Sm3zUWcdUM4sbqf7JXJExaELy6aYTwTdoZiJRtGyKWqhnc9NjWc641ytcWGyUQMEZdKewpABfgEPtwg9Tv",
  "key42": "WGhzMWQQDeen6y7TvxnjjTibsXo2ZX32mVPcLLdvytgsucxdRAnJcxtK4jq1H6qZdp5frgXbvypMxPxjYpcvRpS",
  "key43": "5nJX5jREeysmFiXP1qsKVkv2jtMtYK6b1nAHRiJmzqjbQFXhZvdeSE7jXcjm8FXz6kvCGvN5b7PdHR6CkijPEbzZ",
  "key44": "4ZfNB6VJfo8ModHTfJsxTwAWyL6Ka97Q7mqoYBWznsmyUDbvsFAPgraFqJ4BLEXn83ezUU6bfyUxXs7NMabtuA1p",
  "key45": "5ZPnmssGk2aqknXDD9anoce1KSToYWCmrTZmz7jekuLQHgrphJZL852Y9jVJirUvLejHFzS8oxqtJu8T7sLTBTb2"
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
