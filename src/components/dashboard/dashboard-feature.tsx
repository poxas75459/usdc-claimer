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
    "3zk2aP6Yemctuxa3w1rS7Mi22XbJquoXfvZp9sfAPcFLBrB85k7YZR3ZcRbbxUNeCkbHgkFWmwegMSQk151PTbfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jCuy4HG5t8ZAQQZhyTkxVSdHWjqeBio3jGcXud5Qbmw8BAkfuyqwEAaoRzPT8zoZhiQJJ8ehHpb9eYy6rBRavA8",
  "key1": "2J7nSc555PXxCHqTaJYpAYj1u5wN8e26gKn342mvMEpQ8yoeLV9TCW1Qy83U1eTkXvztrwGFRcGmPDCJR39Ghm5S",
  "key2": "828kFK8Gmx2dYe2k3Zmi2hki5zeqG1RRBTYHZWMrNfAocTU5ZTZhVrRpKmdkXCut9H45Xk32Sr9zcGzKWk2HVtR",
  "key3": "4An7diTCCKFepMFPAhtx4GkoHNx6k1ZsXMuRkzr1PcR3RM48hfhQnSPjDXQjGJrm7M3DyVQxjWhxvuKihpm1FYg5",
  "key4": "2EUWyuq3rzUmk68V6S62BWJUoVvVHEJiQUB11yxechVkj3GA4b7mpk4FqD3c8etEhLv4T6bcHRxdiEqpee1fakAn",
  "key5": "cqhwo7UGD9t4GB5Xn4LiTe8E8E1PFTvimhynrfQADMNkQKHLEUkNXdq9ooqUzMvXbqgws997h13BoiS7Lz8zKi9",
  "key6": "2ZcaJiSJWSxjhJBdpXxG6BrzRB5mdGgFJRRNpFjjSUQXaSRSp6KpGzXymNXioWUkhneAKDBYfC4aeHD85BC2wdbW",
  "key7": "4U34We7DbK4H6QL9svZ3EShkxLh9fqs9sTdc1tWgycGaonX5DQBtBvcxypSuJWRENQTtygbfnkSoG1XbAH8tkhPt",
  "key8": "4Ps7gF39cwG2iBPPMePH8AgrNwYmPuqKjJ398RCSY1y55K9JfDpE1ok5nFBjeRArJs61G7DeUsa62L238QwMVVdP",
  "key9": "mybaht7GvnsUbVrEWja1XrrEButCBUkoPzq2R58Yfdr8S9YhjCs7GkwwAM19dNgfEzZKjKnz662E8yYRpvpKvE8",
  "key10": "3qCaH7XFyya8qsRJgL4yLw8wZrAAZpSLGbyokaJxvWcPXWnt4RK1TxyqSc111mCN4D27HK2p3BHohN4BctvsFVcm",
  "key11": "4MFwrhijUoW2Qc5ti6yrQEEHFMKGw8AKVhjJyRv2LT2B6V6ygEvNVuZy7DouV5V2f8acGXvEdafBGgHHs4j4s71F",
  "key12": "suqGBg4PSfoQVZFAy65hZtrPzJ3AAttxUMivxvxr6o2ViV3kXkPZak3bQbz5sakFGgXNX7ueEKd868HEK9zYCdP",
  "key13": "213jHQu3NrwThk2M9zXMErHJKY2URWvJyC8HRvYAnqfR4N8EwnQ7CYQ1H3YMtEeidX7xPvfGNt2UWuRGo9oLU7gN",
  "key14": "Ly9mMxsawkt9cNGL159DBjKqNfSHXsTUSMZ3ZHTWjePZRQfUC2X7rXfxgUmCbfR8PqZnHp1Z9ZtG3f5MT6NSMZJ",
  "key15": "9VBvLckCNR8SVbinxC2HnbwhMirtheNzWQPi7z11E8VkCmVMaqDa4pKMsfQSzet7gd6auhK7CUFTo5BGk9GxDdZ",
  "key16": "3EfGqdkLe6BneVUPRZG3VTBvmpUHiqJqHVDtTi147XYSWjTC6pbUHfMVXvnVqxMu2KqyZUZD3feNM8ZSbkSyBswW",
  "key17": "2EpPr1n2L4mi7j9zo5gy38CJ2kWsbT82a7wcqUoVxUbemUSJuMsQyWHjzxztbwfgYxSo7CrzBa6yRwwKsuBfiYBg",
  "key18": "s1be8ifSZYMJuR25boVPvaTc3pm6rGR8cx5YVrZVsjh6zMAxCaY52M1ji33GZuM81FryHbv6zTEgSMhCUfiRetM",
  "key19": "5KgJznShs1weygT23k8PwbEheLL4RZxu7AdN5Y9YCumniTK6hirADUtZiniXw9xC39NUYGrSfuwsTuWRNDqGqji1",
  "key20": "48cpXVgbuQQLFzceSAohf8VwuMn9NCPjAZkn4Knor9mvZXYhzUQwgWKj48upJVEiHeXVZ8BDpkfvDhVVcgK56RwE",
  "key21": "5bHyPaKVWjh18FjXr9C3vA3zgs1y8Tmyg19P4XebtZPiBVJP3UhUQ4hbsgpVyYH6WJRiDExRRKbBLhGm6nBEqsWH",
  "key22": "MMmPazPQFxHjVqQP2D1cxzPTJady9xKjbFqDb8rQRDkHK1wWo4bZysdarrHrUcyX1f4WsubnBeLn24nWMURjkqg",
  "key23": "2hULyDahH25KBh8eJztgY4P8aRppnBcHKUdj1NwHYwCYVVpvhqvfvsMNsDnPctJuGKv1HGxDZJHi62WLJP9j7ZMi",
  "key24": "5PwSYgZ6mFtKkgctsYj8CN4A8Mkb9GhTGDinFFnyNNHsrRG6nyRShBT29RS7wLLDfM7BReXwLWrzFfkRU6q7ZjPT",
  "key25": "5KTLLbmLuuKowVQMxWBg1iRSBL6y5sNGeUzdWox3ymxj4RfWiDtc8U7S1j7g4wSiET1UswQWCmpBnQ9ButLa27La",
  "key26": "4wM87s1dnoxdUQr8czCHE4w1D2HWAPfYHaEJuqvXbSLRRHmHcNJgVQ9K7dWuGDPeheWquEkdUjQVWmJEh8adAdva",
  "key27": "5KoRyNT5StGuSoYB64Jg3GHWeaBDsFyh5XAGoH8oaNFdhCPZBNMfFjF74YfFemJRCDaVnzricdHydovQccM1GfQf",
  "key28": "2AApzKFV6xNtLG7bs6jsXaVt5ELRodtZB1nHJAh4gwucxZntjhiEzRiDyfHfs9KK4KXUZNkty4V47hFVdE8oYtuq",
  "key29": "5xTJwPhexvyLzjcSWbDkHarT7vLkEiNaEXSdZARrF8YifCVLLu2FAtV1kz5pTH4biVNg5qV55uJbwmGtbNN44LG7",
  "key30": "kLwSnkU1j5qknTkNocBkXWqg9ndk5bvcxAnY4XhwJUmPbY7nfEGgFnrVh7FXNYempKeENvStZfcMA4QcT2FLq9J",
  "key31": "4GWwpyCBxv7H864hXqY919XDCbzud39vAqQkmvuUYYs9NdvcCfUZnFyzBsyJYiiaucSc6pfez8chFgFrrDuFwswy",
  "key32": "3uLAMY3E44o3UUfBCcPQWdUGC2j5RdgW8B7XkhHmM1oPt2WcsuMyu3YkCbxGTX2JbLDVgNTLxSHkTdjKg6GrMaWY",
  "key33": "3hWU6Hv1MRDoduHkAR8GCfZCm4ugyekrRTjGF6HBTDUQXSnkCGFc2nSgfLuq7AP5HB5wFSfvjQsoAsSXR6T3qhsY",
  "key34": "31UFM5SaVhQfEUnGkkNGQaxhfMHoGRQ1NBehYsoXwgL7ShGktr8en5NjiUMcgiqgkj5EVUG8gtLiwV2xDS43EyWT",
  "key35": "3YEq64PRKSzvwe39RW6g41Z3wyP5xvC3BZ7YXLjYnno1umBcBx1ksjAEVAYQu3Z1ZKhEYf1aFJdpqWrSaNKLon22",
  "key36": "2NmzX2JGQS8Bcs1hDZHcPpSb3ipCmnz2quNv8MDzxGEerCikAunWpXfhwY1B7DGPRVM5dBD1JH6F9KqQdvMyMYf1",
  "key37": "37pc9sg8sh7v9KtjiRDsTv23mhZd9gn4w12tAkViNEiPVUoCPWsFgpkbWv8vKTf3mPmo8ozR4YdaC57YTBa2Ui9u",
  "key38": "5kUTjLMYk8d8pYD7iTikBpBkn155fq97XsRc5z6CQSpY4SRiYY3znNn2XAPXazcYfEckZnNkEJPW9Dhdzwc5tsga"
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
