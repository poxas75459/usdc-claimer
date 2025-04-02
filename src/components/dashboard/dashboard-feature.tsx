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
    "5kcLpUJB3CukBzSpR7UTbgydXBNf7Qr7cJ7mh6HGtNhgsv2MthWHmQQKbd8SXgRVLSRiMe6b4bmffnmRkCoPw8tz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FSdjbaUNx7xaogXdBSfK4ibVnnxscDttdDV6RRNjUz7ahge5NdEmuV1iQ8N2cvZNKcn8Y6wbUjbZ7tWQyoot27i",
  "key1": "4E4k58Q9uABCFFegz8ya42skh9GJKv1AwqQGMA7BuF8Mj5De2bkjaMaXtpYD5vfZLEFvfGtQCwTuykMKxvsLthDK",
  "key2": "51Vz6pjzUtvR7t66vHoCD22RREKLACSozpP5VXmtFBi68Kziy13BGkWoMPJyN3ojEjBoZoiJc2AvDG7B9qY4TjDr",
  "key3": "2kMHEAHUrEH3AazxsBPMM4WZ6ysGVqXsz7sicHDq32V687ZBydjzb8cf8ngC7496g23sCqAgWxGvM53d45MYw6gx",
  "key4": "r6rNZgK2p1TNsfWEy3Mkgjd6nXyjXQrBnZ7UTSwuAzDfLwBgo6LCC9bdmPYvXJEXyNujKqqtP9jkU69GZZo4QBR",
  "key5": "Hx2FcD5AL8iVTrn2tVsyXiUJjonUtToGq1zUVmVugBWV8frbegv47ePsZ2fCNe4e3Z1PYZhSRJT2Tni55x7GHMA",
  "key6": "3oG6puqAUTDmV4k2YRE8XZbEXh2bTV3aBe2mGZMcarQfU73d5wjQUafabRnqbREvtRkxdXxqUUhxbZ7FcTPQRab4",
  "key7": "2JzpTwdztQSRMzbjvSSrFGK9Qb4CUKr68TjcZezEmTRXRVKEk5XwzVFFcSTQsre7bucch6u3SYSzSN1oiErsFAB7",
  "key8": "5WAxwDHuBEyxtc3NHxYBq9ceQfRCoeryCHRTvRSvY9HsCFxqa6wZ8CxpvZ4JJct2NiXdaVtQ7xjQ9meXmYRZvdSh",
  "key9": "4k2W48vq293pXdMmvvsHGJy1KC67r1pEjFrQggu5MKzY8sorb9DNuUAZ5agrkyQ9rPFGa5MMZ8DoDKvwLKtfXsTi",
  "key10": "EJwTaVYKJGsM6M3jb4oLKjmRz5uJftgVxc2CRMYJmB3Wk8naGHTfNvAguCRprHnYWsP2NbDauH382hxHgUfAspp",
  "key11": "4kxzHx82NWJeTksQEzyaaBqxFbLzGVzckCab13dGajCtb6gkWGPwK6Y36cSAjwxZ7ABBkaG4JFZXa3dUrDVTVr5c",
  "key12": "2nL6x9jySx7WnyJf24bytGsGhxLGbcUAGdSEfzGxeCpwNSmu2mpofoFD893UdfqR8om3HutLCmNvE72XwhPbB1eT",
  "key13": "4RtW7r5JVa1z1CnzgnBUrJznkAVntQJxpYUY1LpCvngLPcZhTQvGCyA1VeVHXHfQ5fuhhCtSyyyAyCz14heCsCH9",
  "key14": "2Pa3dc9bDPau957oxfuHqAXwpDpZiJxdHAjKxoRE5xa143H4AggKiVkXHiMaKy8VuQ4G3b49nXL2GuG4fCDJSzz8",
  "key15": "5R6KeXgi14nNRjtu7LgNKHgDeUCFseUWXosn61Rw4XUCQ7Gn549uA7ED35QdvDqyaRwP7L2LeF2pKUfEPTiG7XGC",
  "key16": "XPynBTUYJTqutkmwNx3vYUHYJ3R3gLxSdXmTfvbyZYPk9RspyG2V7tbgeSoCHHwhoR21wzvFsb3z8Cqk69jMdxm",
  "key17": "4hASu2gLq5xJEzCRhWC16kGTzsYuEcSaPZkbH1cWodN48QXHHEXKcJhKEi4rzCD7umEmFQ5b4hHtW98Dm3ikpwbG",
  "key18": "28UjfmNnNAdbSi6d57p7psiGJ6zk1fbBxso3BUpLyPZ3t1ZXALW7HMoD3f677FFaca3dLRuymoVYs5WqmzfbSn5h",
  "key19": "5UW3s8VhVYCX2GPQbW6hSL1t8cBb9MNmQ7dvL8C6CR42e3A5xTJm5VvxMjFJVQ64VL2KWW2Ps7EPmDNFo6Sve1sK",
  "key20": "5KwTCA5Ut7XgFrmPx7myBu5TfwGubqU1ZTBiY32M2EcCQicsLGQfMPZAzSxRoKBXBXXt9D64WmgrwCbF9tY9fuSJ",
  "key21": "3twPv3toEp8DWwpUSRZNHm8V9yDMmpmb6vtnPcorWafMzXYFfXjv6tM9Rs5M7q8DFRsAwG1EgM1DhXwGV25MsBEA",
  "key22": "3mLBBjNW2rsqgFzkqsJHBuPHkGBTN9btUWbEu7vTJPPBKz4NDqTfruedUYCkJyfJMAgwMyAGWskT2c5oLSP6TTXv",
  "key23": "3zraUm6Kpz9kNEmJStor7XYAPF52iJVXXH71Vr9m3SX2vRu7mZWw76CLg24uDPisMhv6WJKxhQyB6aYAsdFN6irk",
  "key24": "4crVr9mAVrLEskQ3bCkuwHMaEaaia9UL2rRhn4DQKhCGFQ6d8awWBNQoViryF4Yi2xkr5BWYEx6ZWSvnLNWoA2Rc",
  "key25": "2xBjcgr3N1NUVSRoxER2sTUWCNd892UKZnYtDQS7ti2qZKfkjRfM17pkJHz32W1XX3m2PQWGkRG2enmu7y2Rfmib",
  "key26": "4dnZhYiTXAftRRijf39VPmwmpKWjJkdKBHwanPs268nSmqFpy4HXZRLni6WjL76myrpdGNefiLGmcFfiKB6UQzeP",
  "key27": "5MyTCwCY4u72PSquCHuju93uj6xe7p9k58bY3ThAmp7W3LxsKpUSAEBz5gwPzZbmRRzZHEN3Et51hqCY7PZxNjVR",
  "key28": "4A6XZ7akqn6yPL8JmrJM81NzFiaM9KXN9epjYj38yCjwETvMQLWmGN2yBHPYyo5LVDZzDeSmKyGGKTYRmuBhWLC8",
  "key29": "5VFQB7aMNMVcLw2v6AdrPqAfFMZLCkmzmwHQoVBjW8MoEcJBdVykQkH8pnnV1yojndTvv43ATEdj5sGhd7kcBLza",
  "key30": "3XUUFWpUbtxm2pFty1UsXHRV19R5goV86QXDZkws1Cjaj8RwDaBMwMSfDygeZ9eZFina7xHtttiMdyjCLa2vKYwZ",
  "key31": "2j8WkRr4h4gMmXqN5KaiT4awXco8E91QoKrFBVho1acd9Ne9ef6AhvB2JWSGoyhAMuh4KEZUioL8caEC1e6RGpEL",
  "key32": "5XQwjnnvdUAqxb3wQnkFKBEN5rDV26ZdfytC4Fp3jZa7eHmTPsKvCajm16Rj4SEdY133MQXGqERzgTpP8FDsmcnB",
  "key33": "66wesSqAFi5FgLdCeCZN3RmrmeoSiVFrdYme9UvebXXJBDbPS5XvzF7KJfrMZD19cD39k5n4rQCNec3h7biZ3Zyy",
  "key34": "4tpQ8oPbQ9dJJ1wt895giSmbXaKfS2nVXYtQ1iYwYAFJuzLJfbfoxgCTvyRX7BF2bET8qPbKmCbAfSsdxyRFg4EG",
  "key35": "3vzh87HkHceCdUcx22FwtkByYmrF51K4Y56s185iwzDkYVBq5KdewkB6MWkYMVtaBFoezYisCaseB5PGVAsM7aRa",
  "key36": "2ZxDBAvn18udSm9w5rxye4afnn5quyt1ofqRfKbL333U7PFbUbQ9AVpWy8CkJzEmF93drD31DsSVhJDfwFmTHvqD",
  "key37": "4s39VHfRgq8Fn44GriPHuWvSYPYLRksUYtYf7sxVPPv7mpVdWnMgR5tPUXr7LrCVe6iL47vCah9BPdqSgkZTkDPo",
  "key38": "3cQ3uxCamFUtzSn8DPNH8StpAhg5MtJuVcEg6D77QaAii5CPiHZBYs3J1MDYVhJq6AAJmAJKq6hL1Krk46pBdZcC",
  "key39": "3eiPTDNaUYmYpF38zFaB1EHGzCVHW8ToihRtQWzFod3SnSFNLSZvsoR6Nska543c3UmiDMGFtVMiUwi6dfzfGq3E",
  "key40": "2jMuaAvVGR8oD9k5Epw5GwHnN23ATSbijzx3GD8LG5U2Si5NxRei1adht3ZFR68vXqBNKg1dJCFJykrr4DKFttxp",
  "key41": "5Qd8JyH6qCGZEyYRoBzaVo95U11v7Q418LZNrw2FHN83f1bgn2W87KXaV8Lf8UAmyJq8NJEr2sgh9eZss2GnrcHu",
  "key42": "3PrQzTNyqz4MBEabzZpYf8ph5gnh52hE7Cd1fDPWu65WmbhcAJgRQhHqh5Ju2MpwX6JNSfU4YRnvNWfkHkUpnPwU",
  "key43": "z3QZf8YWV4bzMkKFC78fihqhfeAQ1TJ5M2v5xTXYnj9LHoNFy7uDwjTtBFCTYZ9eVHeudKgy8fkcaeeJyJ1zJmz",
  "key44": "4uooqLeehKW7JSFRXcvCUeQ1KurB2ziJvH1Zx1FoPwB7jLo67LGGsXDTr6QHRvfBgNNCkRUow3tRo7QKt8H585mF"
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
