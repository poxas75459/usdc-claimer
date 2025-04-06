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
    "3QSBtq3DxYCZjHzsyL4xZdqW7bXZTq3mKzZfY5QRQpb4V731yM6NbJAg8rtGemdNXX9AHwFap7FdumEUhjjRxPEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38sbJbssm24LATUthdjqVyBxza1SqjMfydmAfpZJgydzGqfzgvv4FkPwuVWXoMpQXSXJtXMsE67BaWG17fArvcpS",
  "key1": "2WCyg3osM8qK7LzqpNnrwFjBBPrp7okhFFow1DYxM9Dn3zxraFvovGYR1HycJNUh6z1GNTXwh82PayRjKtstyMvT",
  "key2": "2oJ3Akwu4EcVWZagij43XWJdPuAzNqLSs5SboqCiUa15EPVE5WLQibi2MYKENP5SBv8U8HLeLSy7YpAk2AGiSnM",
  "key3": "2Hwq7S3rG7aMaMsypdquKKAGnzr2yy7buxapw5bnAZXXRCD4BZVGmKxg2PP4vS6c51cJkC2M88FCeXGiqdJqBHYs",
  "key4": "4Pq4uWQJf26EeitN8SVCxjCqgTYrc1n3ghxWw5wHsCph3AdNa7bvPu4dapmBXKm2TmGdDyg858kL2K2WDoSu8rBq",
  "key5": "3ZZycEf15RH9FLFSzTV18UNNz8P8JHJUExedEw7X8dwPkmEoLbhvgtMbMEm8PtABkgYoWJPhGKL2MjBv2hphuL23",
  "key6": "64waFCdBY9MGJEv15Hw6E3eQUvXS1qTfcTPdE6DGq9FmP9K5rk7KgMnESfFhESM1pnXgvZCYdAqb92oXMzCe2Jg6",
  "key7": "31Kk38hierkQsx6XyFeMvG6pYkGzYWALKQ5NxvCfijCKbDQTwfUoPmHcpDbPVwDRdrtTSGy8fdNWvKvpCsZ27g1C",
  "key8": "FKrzkZ8pDCTY5qocMk8jnqNsFctTPbEnFuu5Ya1odpGTMHhkeHKJEKdUk8z26f6eiCzq4uPfNCjptXSMcn2ftQV",
  "key9": "kq6XUbspGdHt2HH8EzNfa6ZiGo1YLRqW4gAVYWfbHJ3cakA6THZEiVW9Rn2czEUmGkAkxFRJaMmD3QnBVzkbfMC",
  "key10": "5jJ4TRDkpHH8XBZfXDyXhWcDAAjgT2gR89u1o2MsKoKRbh2WC4pWnAKvCSjuPoNEWvoByfjYc3oebj21KG9BdRj2",
  "key11": "4Ar3oVtCq9omcVoC8VtSp7Aoy27T8VySuNiQhkPtaTCUF9xvBi6iAQP7v6ED55sKUyS57Y7XVJUrN5C31nMw2mj",
  "key12": "355Jm1KNFCdQ25HxG7uZMr6LEaP5hRdZsjHsXbDf1dSe6SdNgmm4XxxitCWgFmBo5sagWQVScQP2e3NaGgFmDgQx",
  "key13": "54k5aBjG5cPsSpd9AMd8bUHFPDX392LM9fUAxcQgBQp5BtfXfwes6CxfaVTKg67pL1v9NEBiRKxULmYqrxP3dzj7",
  "key14": "QsNUMPcu6adJrCQS4UzxXyMZUDfmtw5974hWduZGZBwQfzS9fw95R5SvBJpp8RRJue3m1b5TfcCZBDUt6hcmvMu",
  "key15": "3H8f3hqF99MnRtGcQ5UDARdw5RfE9quDhwJ2BKb5Z448kJ7WgfZJPwBmfsoNh12MMjWkp6Y6PsnaKykp4D9YsD3K",
  "key16": "2s5rvEjxyBbmaurhkwF7zC5ZtecGeAvEtokFjJPXoH9YmToyEkb7f45AFcUwpui666f2j4HjGabSB5xy1mWHZQyn",
  "key17": "39LNhA2FYma3Aee1kyWTaBMS1EBcsXqRaniCos2zi51ydGyWd5f17LmHqEQSJbdksNDCPKAQQ2wRbvkVRRfrvTve",
  "key18": "2NHM56e5Jq34VJFQ11reqFQCXYpy6QnLgExa3e55ou4vWjn4yphQwXdY5dXgD92Gs3DPjjA2QvsxFAK9yvxu6D25",
  "key19": "5yi2VDn5hjEG1Bts3Pmk6WMk1GdaFPnLLzrpyfnqKdQB9Xwe6aM75eM3JWUWvrmV9wxbn6D7x4xvcaQLZJMHjsLq",
  "key20": "653kdQ48CEc5z3qApFeaBPqhYfcrTi1tEfFo3eDhMZ63dzuFXf8hDhx7GMgBDFaTqye3cXzxLfAHc5FHhkHBMg5",
  "key21": "BQHjMaTcyiRBvHubdKFrLXthVYKRV63ktzGCgNuPNgFLGruC4hQN6o28DUG3ssF3pFLCKgUgLsFTHnegfmBjSWx",
  "key22": "2eHZafPr5VtQ7ukeiZJL3iCTqbsf9wSkk2FsTkAtmqCJhHVaKeb94SCgsK1XTf7UCKbmDv5MTr2JJwCvHPP9cJa1",
  "key23": "5oWg3XzFLz9UUTXiWwdtwPcEvYYqK3AeSnHxVZSafkdQdxxdn7LTBpJ4PYZDNr4WKbEpoJTK82tGFPr3pHc8HHxt",
  "key24": "5AQtsdtwpD1TPB9eG8LNwma7rkGka6uNtUXEFYjneikcnk6eMZm1Znb4Pz1wr2HGDQirndYpdRJco3Ko4nHTSH8K",
  "key25": "54F9ycJ3y9uWa2s6aGpVAPY93xQupsjLgtHgHzV7t2i2yKuZfG62jqAFUoXeJ2gdsmN5PBDPeTJZJnxCPNsaxFgN",
  "key26": "pJbJreLTjK8u7GVoPxr5ezxjN1Ymw1oVLBu8tSJBfuviZmjwtcjBEfte4xjVCzNHTkuakA5ypeJVmHUKKZZWqAX",
  "key27": "5cZ1aHRiP6RGQN4PCYNKqd3qbETEoH91qE5qEFuLJwvDnVJjeWxyiHzWbHhu58HN1HtD2zWvBkveatZNar6BoEUc",
  "key28": "4PXkVwCg4Y8aWCBXs92qfqpHRvq2EkmowLsgXyADP6mQaGQZXwh3EEE5LoLz9mumAYDBHMxVqF4tyuBJDaMjWy4n",
  "key29": "4TptBZUkJcRr2ssQgfhCE9Moca72wuQJD27SVCkgkgYzDqgCGHTEw6gYxYo6cf1vCWPrKNn4YWZN1HUnJ5H6cPe8",
  "key30": "2v5DrhSQN7y4mdekcwr3jUfwVB9KfyXZyrjdSn4Zc294wGfzgvb8AxdzAGC4MRAAP11aAMrBfDhunZ7TH2K7LhCX",
  "key31": "4QnjgY3PMgXFFGA47bfj8qEpXiDFEwE3hU722hn6Bbag91pqWPrjQxCBAJjRkshyQ9tT7P4auaGgs4VyWkhRkdKu",
  "key32": "zNtgAmgPfja8Be7YcWaP7n5V42oMNA72yEbD1LUBY4Ud1MC3VFHJVzDnGKE9WvTcdnwy92zzL66PpBoMkhZiKEr",
  "key33": "22r942zC1x3QZWWCeMFDwfiaW3UayYyBu5PBVmokmmU5QYFnbpRzbKPrbcescm4vaiM44YvtFbx1m2tqHbAbqBzX",
  "key34": "4cGwvwXK7eADfXnuCAx9CkJb6oiFVPU5M9k2Qty3K8z7M1hv3jHPQqivTabs4xD4U8hvntNJegXQ9rNQB1xGkePw",
  "key35": "2qrqALUEyX3V1tfoETZQ5wFrsG4HpSrvWVjmc15SM4osuLj4FjcB8nCHiCu1mAMorcnUn6DUKtWFRwHuTPCyNso",
  "key36": "3Y5qc5zedrvFTh6CeFcTBMNJ6UbzezyjzNRhTYtBRRcCAcfLhUPVjHQz8rdoxeSvK1FZbhbhoUeEMnowSUfTvriz",
  "key37": "3hEnmt4R1RYXg6dfVYzJx659KgTX9XKUNQkfLi2VPNyfz1tiTpxWfpH9xY2ytGXxdtoBJV3eS8swzYYWjFWaDQdK",
  "key38": "3x5pG9C4p9Xs1eGGsQLdZcArQAQXRCypyQDGrsC5ndAwY53gJ8Bfi3zcT7FUVphm8auVQiwymi7nt6W1XwdGWvuB"
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
