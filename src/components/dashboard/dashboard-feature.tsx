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
    "ZMMjhSDivkS9uJ6dEJY1b9Z8cYsUXc9qXNhZo77NXDabuGtmw5Rgiwf3wi9GL836spuD8copQ5x1SscyDqGsam9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SUDMhQV1MEERNkWj9oNemQMsGvpBeKXuNAiJ9qythptCR7xHVAq1jgYWXd1ZkiRukKK93wMVPu9yk5Xrxpm2g9M",
  "key1": "oSwTFZQYB5u5chrXauFBkVZk2Nbj72aEXHajHiUZctW8LCGQW78xFnNV1KsArBS7FK5yAtsSv25HPqqXtSgsF6i",
  "key2": "5td96cRL91UQFksR3bF6rGR56jMEkz7pmZF7QwSD49twwgjLkbZxBnF4TGsu6ZvkswxzYpnkQct4CcQsDcfknP4u",
  "key3": "5FihGxGz5WMDpZiGxPKCT42jpbAHZ5LBqKHWJ7RaRKh6bv1PgS7BojFt5Qh8Uy1DDSnUXuXF9WEjfx5ZsQ38dkrB",
  "key4": "3GksAeKmMUTPDbabSi3F6mMGhwde11jNbbLXST6ZrwQxqiFQTtqPuWKNvHDsr92AaLneRtjh8efyxrBwat3bB2ki",
  "key5": "4CwNDppjSWb4ftVJFN1ecgSqpiWy6qLSFwHNbPPxUj42z5121oCJXCEB7sRWtz67KJWQ3U341cQqpbKMDyVBMFW7",
  "key6": "2J9R9Fha5QABLe1f8Yso7NWquayVJsjePqkrqpLsAi5K9EKcvfMSxDBHnVnWhj6NNGCHmifQ78Wr6uUzrrqpSAA2",
  "key7": "3eZ3Ykg5YjfKkevaB98wXEYTGWknqeMqmQfgcDL8Szcfn9wNV9GMAtLriDBXW9w63zwZ1GkKuFJ5vb6SKfWRBXnQ",
  "key8": "5zUHosFfwXc3HV3qgrR9sZMuP3XVPpNLMQcAN2SzcemwJrFdT6TtTMwmUvJideUkEk6zUrFyGiUKZFWi2FcGYBSo",
  "key9": "2heRY7oNs4NnHfbb8ozzDKSATKd3vPTYeiEC4wVqhCiRr8q14gieFxLs9P3GcCxQq9mQdNJpZxwoXvVvuEekUWfR",
  "key10": "5KqdjCGT6o6BXvoeigtn3cAcYryfJTc9YgSEyXzzwaH7L6CUkURbGXyovctBCjJpawvmSAdVy8yfzyWr2QDP6ZK9",
  "key11": "2BUUHVuAyE4bAWQn9gmbSp4QLacUZVCDwP3JRijEunRrCSzmJycUiP5c73fp6JcDyXF2jMznj9hNaAZzZRzYZq4M",
  "key12": "4vck4F6JEZjecpSzKPCymZHQCeNiGR7KxPm3z8sMWhcMyia8h2HVnrUcPohH3T1Srsjrf5WMScT4Eh1pDE5ZjY1Y",
  "key13": "5RE4RUb16oA265GAqw22Ub8d4iZYC9NN36NXmWXeo3SfyxXWKy9trDgcD7sLejDt8jXQbEA6wUnzXvopxxeJ4qus",
  "key14": "3Ci1sytJYZhafDaUNQL11CSxBLBH15A3VAu4QXGPZ9Dpm22aGmRgbEsUKhLrbKJFJFJ5SAyrtYyua2gxzBNq55eU",
  "key15": "55zCXmiZnT4K65RzNVxqoWPpq7SfmaTuhfwV8ZfMpjExvYWwBLFQahJSgJym1fWwtmBHzgzZ1iGuAfLiXn9KL2ce",
  "key16": "61dJxurhaUi8Wcz6ouf3b1yTVKUk8AhP2Vrh5LpqMnm8JNRtLcfemtpxakDEv4AZeGCj6cDiZYsz8XmzfbPRMGDa",
  "key17": "35DuFL62R8T419mvUNc9eTGTxmiriKS2s4i97dtS1hHqvQfnTX5mRQtYX8yBaTXuwYLM18RSQGwjsFernokGhCYZ",
  "key18": "4SDW29obd5r7ZNyavCPdaT4hQGKsutASbj8nEzjpYLHGxa3fqzE4j5cZU42dCxCk7ztNdDAxsZoS8QyUzN7Lygq9",
  "key19": "ciVq3MvctyVReo1PejevKc5zvHA8trarr7yWPWCv6CkdyvmEgSG7ZitPNHQ3WBDw2bYGVYyQrEJ8KEzCaQQpPye",
  "key20": "3pwTWhUcTcWj3fSKjQX2YEXRMWZhGmRqrJgGC7H7aCr3a9BXvvfu7d9mFytcdkh8nM1zTsjYUPdx5KnXGEZMAA7N",
  "key21": "4cQpSigECR5yTSqvcovU5NhzYnyzJHqgZkAFUH5fDbwNFspSSJRE22BZsmzhbXCwjM9MJ5sJ7mSe3of4pgQNnpXw",
  "key22": "2kr5NzTfevqjWimFyNtP3g4H7pVkmTALrXwaYur256zr7K8uLCkWwz7ifcqmAZMFrpqsuKU3dXh3ojvzG6tQHryY",
  "key23": "5DhDPYnnhXUHViR9qwzPSfJJsat4CNRDpysAzFFXACG9s2s7jTY8kctyqMvTSVhYaCpCCuFDEbEjQZvuiGVuDNu2",
  "key24": "pFjmoJrjkgU9QuVRbznqcMWZuFSsvxyKU7PFtqCjvkJp3LFpQyhkuLbNBDiQ95gFGoamHUn737XVZ4hSY9tPsja",
  "key25": "3ZxAjoJ8LsrRBQAM4TnJ1tqksB1QckGjYLBrkVMxbzXGu5eTm366ezofP7XqNgYC8yzcZ92Cbzuh4V4mMzwn1vwr",
  "key26": "y71fopwmjqvYoEQUhrwT61NeWAs6sdV11PxzuQ4LTEeCsvoGpJw2HqeNJsk1Ws5ZNtW4dfGf2snqUbwZkUEbKWk",
  "key27": "5RSBwdob6m6KXjjPEqD8qTpbJk4kXdGK9XHLtemkUuWoxUNZqDD5BRYhvPTWztdHsgDFMh5TTtmj4g3xxDnZfYwD",
  "key28": "2dT88dYHUbBcBxkhBpxzxVGuYqTMScMqX1qRHxsG2vJ3yTCdq4VwQb7oTEPVysk7u8b46QuRnF2dyB3w5joxuE5n",
  "key29": "5MMpHkq1JF4fzaqqHD7XnQcjAzA17dasWMZrVDfqfC9MYLHHnDv67x3X6xqtJiRBaXSUJ2mER1pV9minyZtpyW5d",
  "key30": "58ks2CzGxAvp6Pjh52gLpmRmgCZex6FWgTRNm13y7upVNjiaEGndiXxNtvbqyYsmMsZmtRQdawgvMVRDixdZ4s1b",
  "key31": "643Hiu4QNG6Z27vSzwYoTxHzaWRYQyx766AEsQAXAqX28XdYdNh4K7TMFCV8Mza1tkZi16oNfKaPZ8rDybWBV82P",
  "key32": "2CNvwQUxc67oQvhu2Nbtiq7m9BZrERy16JbgyDjbw9E912tJNncnZi1NRdpTTRyj2ic2VK2gRrncoB3wWLx8M8MV",
  "key33": "59oxNkHzArQpdgB13349WTr6YxmibUGhQwnLPZcsxbxW1RodrgMkpwAM6Q2J2CWrP2Xw361xvHYMux2XdvH3R3Kd",
  "key34": "5cmXY9WNwPZgHpwuXvJv7DHdGTCJMKJqDm7ytaA5vgbFTPUfpB97Q1ZMvADXmMADcTpStSMP7MJ8ZK8HgQwkbTFG",
  "key35": "5rDqN6THE8jiqaoyXePbW4dHshJu4sYJ9QihvVGzwqggGoLDfcsbrhNgwj8sySD9gWaTnmuvwD6Pkt93MVmbwJUR",
  "key36": "QrfqCBC66DtwNoPoJyekXoz82d2174ZFrQ4pxK7SuBjWpEf5XPhecwVkk5vRRnowAeoxuyPsvKGdmATDG2Aauar",
  "key37": "utJEVD4RB7mmw97NCrDH9ceUsXddN53NRgLrQny8SGTaYz3jcec6WBq6159xKEnxi8kDvdDdSdiDCq4sLxGQRmc",
  "key38": "1GAZR6kGW4MtYLtueoCphythzMrifTNhPbU9mKGK84VgyCAnFJhLcojHA8pue3v3MhbWaUXFnoKnnVeLLrbV4zi",
  "key39": "MCfxAmbvqVC9NBneQv5kjec6bXMG39fvXeRQ5U1DTsF4BVSSKXujzQFhJnSUxS7vQ1EiPZbkDRtgUMnPg78ExdT",
  "key40": "5fXUcoEBur8182uejq7C57tm12e4YSAgTWQnMB4URoLWfkYyuL562z5Q7LY9FrDCDf33stWeNs1YcVZT4euSoUMr",
  "key41": "678S5swKQjSsgGeRyWDKWE7PWdMsXdmo86dP33piSyCvAnWAwagSETDvUpcfsZFsVaMnASZKJjCA5XkjQAwK55TQ",
  "key42": "4zNmjXSHLjtFxTFDarsyncbLKeHmZhx74V6H8RiQKxpVW3cNfEbdYWvaJ8venJ9LvixEABZgQfXwmr689Y4FbGyF",
  "key43": "4uY3nTWrxurcyAXWi3tMqFvPKsqirm7i1haYqY9GYCDkvUSqb37eTfRSYHnXefeVWdzdzsrbjDM66TMLyLM6Yr7P"
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
