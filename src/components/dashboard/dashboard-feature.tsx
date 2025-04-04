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
    "5Eqjq4X6Q2cHPein6986yd1LWZqizGsdg54Ch2yMyz9cfg9kQjtZUTak9QyNS6tVYA5CcPXbKkmXHiu7LYesMm6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FU8uqoj34dm2ntQ6cKdvejthaAyWVRfCfHkDCVmR1yabsXmzXuo3mE5BQ13vJ4fg1TfD6bRabGqtw4gaN4NwHFr",
  "key1": "3PV4HzeiQiFcyP2GZke2HWYZfU6Rr1BuGj23ibxBmSNRXcx3hyX1z7HiSqAJ6S376RkmZbaayVJKsZ4kfBZxJwMV",
  "key2": "odAp3BpFfHmCsxgZMvte1JfSLn5H49qR9fj8n4jxwrEzi6fVyknZ5AKKgZsWwah8dgtg6yZ7wpbA2NJ9zUEuvVr",
  "key3": "845UqFkcNgcgz1N2qGQ53X5tiMZSgtL3iz6jxaR5f3hsqhpKhJPUqsfJUsV9XR9ZyD2W4KF58Xz4P8bcrZdERv4",
  "key4": "5daGMYraQ18ZhUBpAUWXniDCr7Uve5zxT2cDgPAig2nt3iiYqMpvUXXS8bxpDsuDouyVyLvnrYx1x1jkiScd93F3",
  "key5": "2fUo2QvstSyiY6e2SqumqopMWwiLmvDycRnxyhRASAyYemKZwWX3VxQwKPwNk1XciV5UdvDaCaymmaz8iS1EKGU3",
  "key6": "4DxdV6o8D4NQwX8RXFKzNLSdnaE7p9ETj3wfgoHjp4H7sddA542zaMUnuKpfjGsGnTPJ5easqYdtQyBtQhYdtPLG",
  "key7": "5LQPYNYXzM2eSWDB9yhHACRBz5PXyFACnMpH4Qyhzme8pZngeqPGgnB9GHXm3LLrhBj9U1o9tmos1VyBUgQ6eCLF",
  "key8": "5A8NLyfSiKuhASDtoSajTudyMptogE7XX8Q4XKR8zMjr25Aher7dhfy5jQUbBs9RmqhUu9hVwbz8ynHFrDSeaCTc",
  "key9": "3ZZCDuv1FtjEckQz5MfhfksnGZZHNACB1yfmgtGfW8foVi3Fbj25ZrQjX43qMpQPxQ5bnKyvopuudRisqVzvCcQ4",
  "key10": "41Q1jC1wTXNWYnuaYmZU1YQz9t7Y6CGdPVkAqJ1xug2G34zT54sQW6gJC27z7iPcGscfYwfqmzkLZKRqRELSfaa7",
  "key11": "2a1H1B1MMAzUMiZwUSDoRVepWyTXo6qAyYUG6H1k8WMp7CtiRfmo6tv26iuqu4iSAEwV1UzHaEtYQYAKHPn54ein",
  "key12": "uZNpSrLEDJDn9YLtBqtRH974DdMczNzaHsjMwY5aFSp4wzpfaQPzu8KqKjdHqHtYBgbGAK7VgH8ZCEPez4JySUB",
  "key13": "2M58fQ5V3D1BRMtrjLjdXCfeTNKEzp7K71KJEwr2UAmXAEgaiWVbUhYTp6qXVeB6E4tFC1GUS6iYfAUsdMXbjabu",
  "key14": "4vrEyQPrjsrWtSo5U8sbYAZ5R1y3vHtEZCnXAejHFb9US8YRoZY2ta71tZxFqZoZd4TVUHbWBcriobfkcMczwTUX",
  "key15": "2VQxppGqFXMmmzuQWV222o8HKy9aePo5yFL5yDWD37L2P49f27Z2B5Yb49Xh9WEuRgXjZk395C7jPJ6LJBEcq2xs",
  "key16": "2cAaf6KN6Tx5ZBCZ2gr66U1SqxxSZxXKNffs4rTRtrekH4c9YVjr5VEFCs2aLW1wJKChoPNPQNRrCrkxEamEtnkK",
  "key17": "DZnHzzPqKBuvnfrWpsBPVYUWmEDchE6AzAVckYgsoJ9QzCukj7uJx7jXk9Xfz38DtLHMbYaLvFpJfUsbaJFuqcX",
  "key18": "3Kg3gDoWoRrNwY9mUtSPnPyhaViuDMHz44HGpDMtE1CXdNVsCqsLDGf4LT94jsifJRjubGpb1dE26rxfbgxVWLvV",
  "key19": "DDysivatE2yLj9mmcnETxUgVvzZMWeFkfxHeJ5Cvcn5Kjq4nDUsmmE4uM5Q4poovNMNxmgHmVA1Cnd9PXrsMqhW",
  "key20": "4q1SXe43VLqdm4Qb1P3Jv1bjGgMMkCBAVuAPGgghosMqX9jJo3eZu6wjXqQguohj2DkujpqqSMrxZWtrEyvzxZpF",
  "key21": "GukyjM1yb8mKtavAotjvpT1ZFzLMWFfvD7XiNdnB8pipiJePAumm4cd3z3kzDFwyPQV6cVrpvfajZFYqPVRY6CL",
  "key22": "3ooHviQY5GdJq2t2xAE4NwYFuwyJZtMzCM5vJ3kKq1uoJ7UuD3LxUxgZxLZqZJVVahG8Xvj11kLBN4rPkFoVKp6L",
  "key23": "2iV35DVeRypTdZjdQeZceNwjT1sweb6skQCe7evG337pftyoo5KXDqjVYVHBtS5Enhc4dcmMGBheSeoZUAKQhx8K",
  "key24": "5aMYDfbbqQ6otrLiGi3sxxy1pErxmt7jHVt1fTxg78B2omb9yZn3poPESBPtHtSuFVwRCepDsGawHA8EWVcaFNWf",
  "key25": "5HfojJAVoLG2VsEGWXsAAFRYo81HpebwoBh7hzBxCm9r7TUZPNLYPDyLqemT9dVo7aU6eb6JLxgZkxCs7KkdVzr9",
  "key26": "4DSK3tt1U19kyLSpSh7QSq3RRgbH8ZGGtvYfcZR9RrYwRjHvbRiA9wXxsHZH9rY8iwzbRbQEMyQVhRynYv3cbVRa",
  "key27": "43CnTwxfeduQLpGnrR57ChqdzLk1sFcCNooZ6SJrjHdwoPvyuM1U3ah8GcrS93o4d9cZkpuvp6ZBL27baEzjAMPV",
  "key28": "2YVG7zx4UP3ywsacedNCC4TMRc3gvpcxXHCvEx3GWmZqgo7dq9A1kYVJStmWTk9e94esTSEkAaMzLnsJbP5TYi1S",
  "key29": "mQyixZ24TBRdgcCA8eubtvf1PxxuFsRwnyPohy6kircyYWGUz3jQ1V2fH3S6xxPtZfaYbsvvAbfW1rHzKx8VuXP",
  "key30": "3qxrgjudResMxVncrEBJo8VZgf9WUQGytAtn2oahchNXUAEiVbtEftHEb3n7cSZtcnhy8Bi8mkz5ns2fGjFrub1U",
  "key31": "3abm1cHcCsq1fEDwqWWmWiskTGyDn1AU2sSoXc6wxtPPcwQTPPTw2A7efLieGAyFvtsRdWDtRSvMMSyaFCJMwXso"
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
