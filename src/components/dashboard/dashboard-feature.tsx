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
    "5QW2mKBq6n7UnVMiZY11N3ZKV5BmnHJLQ7tputdERnujiB9wJqd4eCxroZGgrFeNTivmDvxmDvA8PxVKE8ph9j2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KGtbiApRxs6Y6wuHVKywvZNeFE2KeUcVZWkbRYjMhpWHQFz58g1ufpcKGa9oC4TUypuwWg3UddCsZUfJMWwbHfX",
  "key1": "5BVgcaE6MeiTqS9tWbrC7bdBrcYBauM18PwgEHKrWG4go4Hjv2DRrkCgwZcWqfsLAXCGFqUaKJPMiT7tDR7hPB5q",
  "key2": "ZjmWU8TUMfA21g4bjU3PqNRZn9jxUJCmsTQCLSQbgRbAnV1cBnQj76NUci8v4axZU79Xkc2r17md1w8VyQecbsL",
  "key3": "2ZxPQ6UqFUancPP6BDNiX8s4V5wuPh4mLWRYfNWyWbyFTngC2ZNQVLRg6gN1BRJAnvBbRjdvVeX96DneqDhqPnsv",
  "key4": "35mtT2WwVJ7d2bPG22zVgbZ9BQ9BZKx68Q6w82cGa5aPVHvSj1gcHKuXcq4DNtztRWt5jfrzQMaML5TCcEN7LrzT",
  "key5": "2GnWig4PQ1s9ni4bD7vAXavyRhhWJWgxQEKYVyANTgtFwS3npGQYuP94P9xZp1Wfpfn35ptmuCruFZ8QGre8j2i4",
  "key6": "3w8aZDszSCtnXgq7pMiSghCAdPpXKardWawoHXQTings94W838dLg2uEfsrRcACcm4WdL8shX4yEyCFq9t9QU5AB",
  "key7": "bGXxz39dzK5eV9Xe5ycGjZNbz8Pv1k5WPG5yoWwQVTrC3zWHHLRncVNL4gq4bxKr7g4yAdcc3CbrVaTBDHYfTyq",
  "key8": "4WpYHRFXUwXNipZLxRtHxrY1HignayMFyMm349UaPuqjeUVreAbCauE5SWYQBB4xQWUmjVsDpFakusGkotJKbXXS",
  "key9": "5pucs5WZbUq2GrqedV8cKyMps4cFFXPUAsYrcwxLGUHVzRPPEoQtMCn3r22Au4MjvHgvCADszkFNajyrBqaPsCUX",
  "key10": "2H81mANPkQckQkf8c8tLXJMn7MQQ2vN233e49DvqvcsRv6cWSoA67VahhbPQHanLM5a1FDa4nofdeZKb6nqxwJEh",
  "key11": "536zBdbiNemUJBvpLqTC1zhg51fr3cURf4ZaUzMU8DKNRx5xSvHVz5o5sg1sxuT8p1nvME8QcoMS4nq1PxkFzaCX",
  "key12": "4xjRgK6nxgiaqTn4xL7mkuzRJQqSVrrLUEKemw6TLN6JdsXbXY1gtJAbsEdUXXrva9aRmJVfq937gnDTCEvQyK2e",
  "key13": "3FJ3KuPqnHucyZj3ZdQiwaR6F3RK7zuCQAbgxVpFN2FXf6GNkkYquLamWytppWcWbGEjDHMwnm6JfErXkzv3VeYC",
  "key14": "RKbWQW8amAwLDABbYKyKhEZ1fmDYijw2G393s1GGKhR9arak21Q4LVV5ss7qCKobq7HMmEF4HZBXL4zFLs8t8Eb",
  "key15": "5tSKWP4pqLfH9GsghVdnFefDbahiq1Ye4ecihGnpfhsGBi55DZevQs6ZLRUfZAxqFwwUYwzn4QzvcXSJqnZ6THrH",
  "key16": "634czcgpHjtWfLTcyiLtk9gTTcrakRwSCqhZGxH4BwLuEhY3F9f5LdXNimj2AhTPDNTHjj2jSPBkYDvBYHfMBL1w",
  "key17": "33EkNRoLpzbxUTWVYXA9K19SVLJh8ouAEutzzWyAHCRL4oj1RHNrDMQgA9XvUBUUqQBqDyfUqDq2Nd6CUq72sXCr",
  "key18": "2AywxjZ3qMXdf4JxMbWXZPWD8sJ9wVXFJ8UrryCYrXmm5Yb1t95wDXqbBSUcTJFjcPHsRtCeNhU6orLsHRYXkatC",
  "key19": "2vosxSi8xH4Zhqb26V4oBE2rhv5wZe3Q4FW6vhpArknsut62D9PVzuZaMfCeiFniFxzyfa2LVigxmTDe1aBTP6ts",
  "key20": "L4wNvi8w1ZYfeZPXvDthhmn7i2PUpH5EwtAZTEWuWH6YRyuyAnip2T94vmzJRsBENFPHp6MYEK9RtoczhzoqJ5o",
  "key21": "3hcvwPvXoRPXUoE6xEAMFAAWbnDB2FjBqp2zf6ofVgczzUDVEXymL4CsLGAirGDBr311JoJZvfTjcBhHKFzQEg4U",
  "key22": "525pxkMXEr9ryXHELRdg6eJHq9JGaDZd7r1XHgnZ3aNWNgCRzQFFJwgmiEdefh5g5BE3LKd8yBfLCp6BfvSwRq99",
  "key23": "vqr7om3C3UrpXNo3DpYGJuM352y3FbW7NRn75vFtgKdy1CNJui1t4Tcmjmkmt2aVwDhm74wjcStc8ziBgPEMf7X",
  "key24": "2XFbN84CKA2KmGVws3fEo6UinNvbosc59Mudc44RRFaxh49u9EgntYA8ZbPfgeQyiao1RedowgGNP8XfyAPU3fiu",
  "key25": "3fXnG6HNuYsE3SvdxDkUubqyJNwDGVS7Ytx3Ayx524NFB4yqiKE2WmL2QzrqrjDdjav891WR3ugULJRjmNsBAT2J",
  "key26": "4xRoPZxXCB5hQN9qzc96ZjZtXDZrKW17qim98XkDXjWRia1epcoG2hYLKxs3TQVU6oF3hnU7bDzTBZUC2d3VHCRa",
  "key27": "23GvG7uPa6vwJrrpy8Jyo1UXZUMWWmCLoNBGmEVGhubCeh7vkFvnNfhBHZ3FeaDfDBbgCz9icQkCbkV9Q9oCqPtp",
  "key28": "38Y3SiWsGywmTzDyfTqexYLdSYemc4GrHJxVCDCY7PbjAhF5H7rZg42sHdoTZpsAozMq42ekryjrMegxj3rfxcgn",
  "key29": "3oUfNAZXV8a9HSxC42KR4dK48UAckFTXxXMAHFgrzTUtAfFsjPT5PujAaWaWo4dLBXQa386uMyT2vCvggQTsc5SJ",
  "key30": "4FH3a6kCtZ2AZFx1wdwjwLj5KdCSCiHoFQV5FSkwv6pcwqSvvz7ytGrgUw2asMUCxC7gonfwN4LEsmGUGjqXNx1M",
  "key31": "4UDqne6fjX6sqoF7zbFJBUKVvDR7eHJzZtkBrXYiYDoGFvRqy7eCkvGubXUxFKZeJKruuCU8jWahj39H8PAszG61",
  "key32": "3rkgwrsajkgZsiqzTvbsVNaSPvZfdfcwJJiwXvVu7zZ6uYgq68xh5QpH9ttZP2jLf9DzFfRKVA531KKAvjgPwuFH",
  "key33": "4XmVBB4pLeMQuRMqdwTSy1G8LwZcHZ3B1UnzXkkaQJT7AQEBPKQ8Lc2axXLE4pkRrBtisSWMskTPPURPCRUF5ivT",
  "key34": "4EdrEcs1kSMZrsTRVKLwV1W7FSCyKzYBwd1GAFooRVoiUz21yYeDEfFRhZxuK7iRmxK1QLCyicNW55rb7FmRC5uM",
  "key35": "5Fne4GPKTeBEFjcwmErQpZNxLQRxp3ZscVCn5fx5vckuehm1x1s5txYH5xEjJaZpf5m3nVwjfQhCqcfJ2z78PaCW",
  "key36": "3FWGTXTTUJeP8n1AMZtK1AdqctUTKofEUCCDKDLix6ewovpKAn2EKYGWCLxjaChRZLEJuZEHabmyZeCRUkgZ5THn",
  "key37": "cJYVEEZtdrDEW3PLAzfLwciSMVbQGSuBY89qQmqCcX4YSqHukpb4mkBxY7J1M4GMQHBRBGkrC3nCPLwhEPMGYtM",
  "key38": "eGhGDXSgVsKZo6koSUnrpVRvUQiksnNUFwbvAMmhY7PRSBFaCCiMKPoojukRGctXVyXzjDkykxz2A9dwK1ruiZi",
  "key39": "3xFHBsJe7RNodESdR8pbyr5HFw1QdR3bPPaa3Vi5bnw5Vm23BQ7hJ7v9bm6Ksjk6PGn1xiKGrzNmD4MzKq36vMrp",
  "key40": "KgkMqcjmRx4vpDwPmkvTmKAsY5WWUFCtjkvr8cWRB9wXqHbPWQ934S5NtACaMBhpn7UNXi22sdRS2BGZXG9X76H"
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
