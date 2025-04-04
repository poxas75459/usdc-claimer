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
    "2yQPhKSfuXrmgA8aeoHt5TwnuZbq9irW8YyQBQLqR3GZZvMQ1QRYgNzaJagngdZMPjH63sC8LtwdGke2MHqiZjiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9wMEhQwR5UqC3wLXWQTfznSdroCZ8W4d1xDPK39EMHshjXw6L12pf4N43FvcJEJeni4P7ZkGpVS1zN4UsRfLyj",
  "key1": "opLJ5aoqNRSy4tZUCzD7KH7uhJvqczuzSm3vLVX7JTdN4t3VLRbndfKY93w9GjDyG8qb8vCdPMPGp8qwkAWqwKm",
  "key2": "3e7KgfdMN8gC2f9WFBgkZxy6dku2wKnPRf3ytJep4gxm8Eef5N3KXE8wqAs5s42XdUpFSPAk3pS3TrvAc35Aa3n7",
  "key3": "nnSi18mwhwzUrBhUdSzpeyC8Ypao6KuU9of8ewEzn9j1mniREFW6yM6orVmJt1mPvEANNhkc7xiZYsxXaqGdDB8",
  "key4": "5FzvvZ2sGKLyRfSa67KphW7SKh4HrqDRDGFuP2F2p2sYShaVjUjtMu1jvgUmF155NasNTwcbKNwGTQDDGRZTFPJj",
  "key5": "5r6GKarGMfj7iUvbPfAzVbstMEMFLge6zNtVgHkva1YHdWmPvXCth38xBjKhhCJHzS4x3bG6BExSTuTvSjVKdjLA",
  "key6": "4qENMEe1YjHrNJZh4tQX1hWvpNr6eNW2gj81ymfTdMCuMQ7hWptDyAgXZfVsnc54SckkVHDXHX8m5puPqn468sH4",
  "key7": "4VkiiLrbAXUa8gNvQ7wVm7SxRRfnzS1KoDeSMKynix76eyiP2P67C3CG3KiaxTuQPDJ2WrFotyMGNAeL4LSSYRm4",
  "key8": "brsvcEHGxJdj8VkaVuQY3Zy8KgBBopfQM2pWv46Xn1hHSvtRRtdpwD6JrdfdBA3W87m7e69Wk4KPBruRxcbzomg",
  "key9": "4mDxnAQUwfQbVbpSPeytrig1gynmfTWgfA6J2RmV7XzvbyLmBTUibq3tdfJvfKEDSGNs9AGcoFdn15mWD8NsLA3B",
  "key10": "2VHT6iC4VyKNjFCVjBNuMcBzMR733cZaTehD4FdmiUd22VuaCw4VTqtFa8wZ3LgES1pEfzsGY6RpEa7URqNY8kL5",
  "key11": "3RGqHkpTACAvuKfxV6PFyKeFhHeZVv5q2DuY7C8QeoP6MVkV7z6nMiCXUJqbwLWs3fd9sZU1xgU2Wg2isc7ZB5PC",
  "key12": "3nN9RsrGodUz8NYgQxFw78owcjvE6d7GA7bqvrp4AVjpoxB9WcAJ77LsyjAuEoR4K7QpEMpArMfsovx53zE9CGUV",
  "key13": "368mMcrH63MYNYs1W8LRQL4cWNfsfBqGznzb6UCYctxRo9wAV9hrarwx9i1CrjL5sZj3e9T4pE5BajnSUMZoqyye",
  "key14": "3VvttW2xZvEziCgbELfBnfewyx4Rm18qtHzEcyW5BaECacrix1GRtivHGceQtUw7eXzFbdAWRj5jeW5EYjjAbBcn",
  "key15": "3q1kfFGTtYuDP3f9RHu8P6cugpUmhsYwqquq45ZCQW8f8KVH96Xmdf7LYDu7fztY9FaxmganqpvYRRd4YZnxDTwd",
  "key16": "2mdBVE9emMSCiGPRwnUdsjjTtWTVNwaYLLkC8jj7CLtkBSjANxguoQdxjjctaTPW9hoZDqoKyJi4wcXwTz8kJ9br",
  "key17": "351LZXReEJJ5VXHSjLD1XjJDKKZRpQCWUTh8855nq6eh1S9c54umAvroVPny7wU6MruKfyJUxrVXKFd1pddaEwLh",
  "key18": "29vtiqPMT2JU3Dn3A5LJe4MgWoLb3YC1VZrvyeHj4Nu9C5TS7XXDpMp5asoZXaxVTmSJWX36ZSQvoYPYLLC1efx3",
  "key19": "Eptemk3hnY64LFLzi2Qe57DyGvapnAuVuqpF1PacEdkLHtrGCxyKjMe2f9oMxPe1eXQ5KK5yHqSHeFFyPMGDVdh",
  "key20": "3y5meVKHd6pMW5jHiTMgSnuxbBAbWgTKnxD8uhwCqbDhhPVGW8JQGc4KBZSgJ5nQWAzyAi7WsP9pofTJg9vyKQFf",
  "key21": "2bbbBYnKh51iXUgNumAMN6p1suk42a6ciaq58PZznfaKSMm2VEYZYFNeTRJALSFEcBmda4AkwfXKimXZGd14XoCx",
  "key22": "3gvcBQCiD1rMSiRGVHiF3wmrNGQLTmgHJF1JrmGb9YuZ85XmgdvBe7Bu7j7CGDNZmfphbwGeuuNvdGnJgiSGdALh",
  "key23": "5EN2d7gXHV4TjGQMnvF6FAzTUmHZc8sbU2gcpR6AtTsu8frS7j1ALqfCbYa7i3VCPtcKsFjtPyUo97rYiLGQqH6b",
  "key24": "4rGoE7kMgaYnMMF4ey7qgMQYjyNry2ftgeKvxs62EGdXNzbmzsN7Uz8UGVQDxhsMAbVdM2Y7dUpiR49nRk1KddTC",
  "key25": "3gXmkyACq7SybLHppnhnsv18RyUBjjkmdh3aN6Qf7JTicShv3BWrA82guLdZREB9DTV8CE4yjR9TKT5FeDjbchMf",
  "key26": "2iZtZbvXc2rHd2R9WwZCnoNqy7VeEh6PJqR4VS6KgPtes83PhyL7Fw14MgzXgWnMZd4Hxe4bnvxJ1AaCbZdAg637",
  "key27": "2mRGe6a3oDNs39PGssUxENfZ6qvwWUgJenkYyU82t9p5FsxLAcuqkBirmkJpM79EuMbfvYcNT5iFbLaqztvbuYmt",
  "key28": "2FHaJ1cKxWQthtGKq6goVep1MB9JRzJjAmXqpAAsCTSHCSNAHkinh6u4ZATtAXYy33UoFVkL871tQs1FNQos4akL",
  "key29": "BnQjZuvZ9jMRgS62Rz9oUCsdeazWGs1BXs6xUVYRsPUnJafbVSyEi6wbmqh2HqcbeRVC5BLNTYEdDJf7Ebe2uJk",
  "key30": "52qZRgnXucJM5x3tjMuRJdcT8U4m4p5KHpf9aHKKdEGBqKvA8HdayQ5h1XmKhF154jifg2nw2kC54uxAx9xakjX6",
  "key31": "3NkKxQ4Y523ny9Uum48v1PzSHNkG8V8k5quVCbi4uQSEuusHMqZqcgsqwTMxqyQ4cxRZqERXRt7wEaMFnAABNTPS",
  "key32": "3PgpigEQAkTkKbq6TVTJZhd6rhbihexPqSKb7UgCd9HowedPf2soqng3BmJ8riZiCFSyuurikRyoRCQms4FyHC8v"
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
