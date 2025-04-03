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
    "61uaxei8Q3tnze7sw9DCZaWt78aDo6yHKfyvyUY8e24jVm5WZsZdmUy7mJt3pVzwcc9AxjfzVY7FouhwfFosegzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BQypSJ5meQWb2GUwMN1zw6iAYXSC21oKbPBrjyCqXuRoFy7e7XnkXhuWyZQvGCDDjMynztUu6NxMTZXTQQ9kbYH",
  "key1": "3JGZwMkeWPJXLffeQsFUQyyxnjCiGVqHPMHsLbrJQeTpkpgEbANSVzsPmcCcF4yNGrhq9c3HRnvsqKNCnQEVgHXn",
  "key2": "52mKk8J8LWjjPudbKRFbNWUVn9TmLV3Y9WjM8Td11kfXGHrY9h1QDEDnwcfhKchEqAZgNBfabme89yVhtnjEfye",
  "key3": "hFQSDN7nbvFU4RDjtLnjLWPdFSbQ1RXJ8pN6asUQRbQjaZaHxZ7REA6KB9nXJXPHyrKYFGH1rETfde8Ws9KpefN",
  "key4": "4RuksWE5acQiDaFB5qsRHpvzEGT9hdUEwgYTxGVGpDnaP6uj3Lf1Rw3dVRnsMJuLVtEUYEkWne5hAU42j6Y4w86q",
  "key5": "4n4V7sGD8Acovtuo2WtWE7MXXNKMNHzy6doP2U5HW7TX6UQd7Xsey1F7CbKeLCeXnJRJMACjtrpk6TefssazxK4m",
  "key6": "2fXR6jwgivFSmyiS782q92UP3edg9jXLsgkCKWa8uQFSQBufoZJWQ2iCnDXYGL67A11NbH2ANovj9fzMran4fb7g",
  "key7": "2SBdk1CSeSwVNAZbd7KmPrU3PzySvRYzX7DkLhfrkAkHeSMEZQ2zdcgEPuhSUfxgwi1uLkmUUxwRp15qBdXRhrJW",
  "key8": "2WhSoysdcbtK5nBSfUMxTbDthomU5yV8mK2sYHeJpJtK1FUS1HkoGV166aCHquvaQnZLVBiK8L1BFZJyejW91aFr",
  "key9": "2tQ4Bz5Sjb14qUBATkNfADMKKmuG5RGgKJAHzu9kiu6tVhDQNXxZPJafvsj3nHxAkhcVMNCkH9VhMJw23bKTMoyC",
  "key10": "4o3GTJWACiFK44qN8a7Gqa5Ne2ZXuZYssCxKBwkJxriHooTArHXkoDnUpvydcJS6eo3UgXo5gYkumVTYSuzpgoa2",
  "key11": "3DHEvWwZWDLNEkM1QhXS8STpoLJ6vqfGxPw1eJWX3YxS1TjUBUieatVdJc7VbdKrx5Hbu8R1yv1KuFxgbaMEpaTZ",
  "key12": "5Dqb9vi1K8BEaab7CeGbTsXeZca3jTkyBQEATBU148Udxq2DENcbDaN7zGHbEgDGJF9vkxTXHSXZuMbAC5VwxQDZ",
  "key13": "3jfruhmeFD6cXPBprJi9GtWTYeTpk5EyW63wW8mW85iLDSBELqmCLAK63hJPpaqM6NZBHf7vN6Xrq4GJER7cKYRE",
  "key14": "4J2rNd1hM3j4GgtuuJHxQybhqTWBdSE4HhJW4ETY8We8AtBfPSpzoHe9NuMXCYfNbwwAvcAa2phiX6iHNuejGdQX",
  "key15": "2wX3KWY5L1uw4pX8wKQfbdHPc7LvmJuQ6J6gkjWRyumsjFLcxYG3dpaBpD38XWNtsBepmXozCFPefFQcfBzoHVJ",
  "key16": "TcsJt2s1WnEzM3UKmL7s6oPdHJhaPQCV9xLERsoRSXUxdr1r2764mi7TtFo9eDqXevGGqFRYTyp3idpS4L7CMCH",
  "key17": "59eBy6X98D6BZ8oH1Tcm3o8ADTfnbn1gv6AaWfK4EebcvGm6uGa1c9Mvf4uSGJVNtoPo4bKjAoqeUhnL3pngY8SM",
  "key18": "4qxEsupGbijZzi2aY7gYU8Qzd81koy6JVMNHc82aoLXWsciwrkraGAi36JYBe3vwHJQ7GpkZRoEeYL27fpehDxyP",
  "key19": "2huyNXA8GqYrsLT8apXmRyj8XAuW1Ek1CRVcPApnbd3QW1XXeMjGvTFYfAtWD71TBevHb6nXYosPjiAZMNGffD6U",
  "key20": "RQyGVuDQzMQbCp93fmBY6de2sCkyjTPovvHSyQhtkyw34WYT6EZBSMy1d7mYkyapQpnm5TnkisssnDAd9BQ4Mq2",
  "key21": "9Dh3KQTKu4bWgq5X2o2xgRF6RZw14YQxnsPdKixNfKnimWhma45EnTsCrYGN585nU3B1g2JLyis2qYNeJ49LAAz",
  "key22": "55NGTU3YdM3RMn1xGztWhqTvpSgku7XknkrXse48sy8biUKNZf3ebyAWrexpqyD2juKixZHrczcvtJ773KJPobCh",
  "key23": "FZExuztjegXHpeQ5yph4A3SUHPnVJ2osc3ZHLh5nh15UYjDcSFN1pfU9QFLu9YcpGQqKBjRXRZvtaiUNVeUV8F1",
  "key24": "4Wjb3vBabmVLi4Sg6JKh3VShiuqgF27K6xCs7Tp3GkK5PWXUyPrvCUiSTYnfoj1jfCp4oho31w5sJ8aKqLmmriqP",
  "key25": "rMotU7LvrPidRpZSYcJXVWD1DNgYR9r7PCigTMXgQmYpSNsiZmUSwyNBBNXB9KEFzTWq53DHJSvuvxwfZz9bzGs",
  "key26": "4aRT78YfdmMtnF7jVkmNrx5LbxEkBwCv2YfVUsA8GzkyrFUEsC8vBB4g4jmBH7vDarTxUUhnsgoTBZxCdVte9isv",
  "key27": "3AzQXsN6vCTUtrHSiq2HX5eJvS9ayCSx8QZQHJKTtEk45mP6AqeN9ux1Y6PK8FE4wWUkgCA5f1Lqy5qMpqgg2sbx",
  "key28": "46VTUeFi9is7JeL4SjNdQCR1j1utCch1pXASJrsXxBDqoLf76qt4sLj62J31yp6LQAySc2EmUdUS1ZBDRTNzzFPm",
  "key29": "2L6rMoe7835M1viwHsnV4CDNmsVoZnAKHi8DJNiyozYwWbxv2GEYcbqK95moaKGb1PzVLyW9c3bFUuUdMZiftzTg",
  "key30": "4FtCTS1eXziHJ7wHLB1gBoUrQxgTM9zSH1Dn3iJbgr5q7ivo7gPw7nPmGtGrVTjQqcxr12ALCN9SwmiesJZbCCYD",
  "key31": "4BY3mvkFtb3arPFyWqrPgERTdWrsYZ6tQfGryewkpx6tg74z6kWB3xTCeiDuADMRK4Ds3sd2Ggma9CU3FPvyEMEz",
  "key32": "PeC7qR8FTPoXULPjbkboG5y2cqu3VCNSnTJpWHa6D2248P7jo3TTizWrRvQhgcWFKEWa2uyTuKZ5P9ViJbFFMe4",
  "key33": "2bARgScfMnbSbT9iKktUsxCJeEdwy78G5oato8Dq1qpJ7NbEyuCLvtQFVPTBhzCD4qWFKxCCzAisCJpY6QeTE3XW",
  "key34": "4qyu1wpGjus3ButrSnHtFG8zUeQNy2Fa2vfCG5iKQ5VVy3V7frK5xiRs5AmP8Jkg6ALmiwXE1bLUozEBVpuyeaZv",
  "key35": "PBWMD2WnNzFVsohByFqf9pi9M5MmriokzFwPSTQy1iLfvjDtragBd5Y694kAR6yyZ9XesFq6m2Ei3F63fq9agMZ",
  "key36": "46G3pnhqyzeYpqRoRjCRjCoNnQjhfJ6SJLLGKnN6HbcJUQb8KJUurPWeKiRpgFHSAYXiHc8VUbaUM8b4u2aG2JV7",
  "key37": "5NZ73weDf9HRP2AJhTjG9wh4x9nAhBt8PVZLGnjdQrDDvpKLnjQU5vDGjxmxwESBcyVsQTyjZsutEV6XEw91AwBC"
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
