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
    "5fPLzx2VMtxaJRkzR7KEXSmVVvTXWbmz38ovMtBaP6gXQY4v8AmWF1iuGtmvtRBUWqP85gWZZ8ckqyfSMuCjLgWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LyosURe6yCLhiBbyiKDwtXgwTgkMr2pr9L5QvAN1abj4kWnX7yJaUTEf9U1i8YnnSuHzXUCxrnyyN2cv6QGvJYB",
  "key1": "44ep1Aw4BBkV7Tm2ehEdgETRGr5fUvfPjMAd9WymQ6Sk78x1TJGQd4Rqd1sXmzCJhARCWhL3PzYpcwrQYCn1fPMU",
  "key2": "3fG9LK419f2yVyNydnk5QcT9RQGZKHr1biDJFMFDYQY6Cic3H4GLrG1AvoMCvMsevUyVaw6YJ1KACANXEdmXDCBD",
  "key3": "5PkmE5bjE7RWG1w2E8zUukiEK7ZCJ6A3AyziL9D629u689R3Sz93Da8XCFwypriksHTqRd1dwJUJ4qwmfaYWgCqp",
  "key4": "7PHcEnK64zthRrdUCfQ4G7TdBK2BYcGC9H3HMxwu65Z1bbSPTpy1siVfgaBjxouTx7wzarX6bxKonQe3UK6B3uk",
  "key5": "84WvU4zhh4HDDdvSWD3Js55BD3HgMT4ikj8rS6fssNneiW4vWP2tpST9Gwio79rqNgRtVSaWUveRqMpQUYq4y4d",
  "key6": "3n2NmvEUVrYVasjCw7VM3kZ8tvbPycPVLJ69JUzGWVuoaPxKJrd11ioE8abc3AuYAnG1tyzvBE6eMUe5GMt8Cbdx",
  "key7": "mobCGvKkYrs12dDB6W92iZRn1fd8rNSiF67Bsim7VzFHsYLgBGpjG357fDDsqkHdRzJrsyMdNwZuAL3vUVNZbVM",
  "key8": "2e2yFyQMSR89kkee64DSqTKvrAuz9amWQVG8EG6B7x8S84bWXFydPzwE4PfTBzt5dp8S3e5Lq7DHYrnbq1LewPdc",
  "key9": "3VUeYvPKM3sybUZtRH5msrMdjrZLpgYHMncyE1CvYNHcDXTijKQrCzRTLqUgMc6R6oeTe6KGpbjbRtWb3Yq72Ww3",
  "key10": "oS8STLoPbKgnsLRFBach3A7h3RhxNZNr6Fj4Su5iiT3esGD2PQ1N9fyyx5mqySq6NRncXgPdApHWMPs8MtcnMLL",
  "key11": "2qWy5T3ptSiNLib3FmrUEH9m3QgMfbLBDUMStw8bRMx2vyqEjbDx9tCG1ky4BPhrdJEaeHQSceXMqonHtBcvbvwL",
  "key12": "5kTnhnPu5d3UvGFxteCJuum7YyesuGWPSzZYpC46HJZNcFPr83kaFCDEwC1hutFKpRrd3U9NAUQy9KyujKV5xdBz",
  "key13": "2qyNfYKtLj65ouWNz3vu6kC2dDg4iMJF4T239KNyfjQDHkqqgkRZnSe7HU8igxZFMvmTWZsnwHvCUcY5g9BXvHA5",
  "key14": "3Xn5cgz4RnHLbcnhCUSRowxKAFgLmd98gvHwoWDm6bo9u2VhVgzfgEA6gbHxEWjFnEzKR86i5cJAwX43WJZebWbm",
  "key15": "5FT92dyjZJgLcvo1cTxKMAABc93aDReZ5Cg8pMExKjCmtsQS6EFi3hnP6eGsKS9hcToV4NVYU1hU6XGXky8Kc1bd",
  "key16": "5mEj9rLc6fhFecbF6YyVdN7rEGHyuWyCZYMX25u8aDJTny6XYGNPLBcpCtuWGJe7LwEDDxfNaJrDWQCQLTX9DB1",
  "key17": "4Gbdao44cTFdUc8WC2fhNxZq9mUvcTTXNewaT49YKKjVkVFvaZgdsf7CT16U7JA9y83teHNqXv91fvHJT8PDWxNZ",
  "key18": "5WC24b2rCUPbh7gncnNowLpvFXNY9hCCpJFGiqpNt1Jz9Rf4KjA2BGZW8WR7HpFBrmgm8U2pzC8ZhZcQZNSH28iH",
  "key19": "5RTkKDMZ1wYmbqGW2APmUQ8a9ndDTJ2YqpgRaBDGLxjV5smgPtTAQrF5WEYW5qmCa6gmhTZ4JneLr5XBP46BqcVj",
  "key20": "HgVgSwDC3rvY8a6Y9BTyer5DYJguEc9KHX1Mfv1851zgcdoGYbc8oT2ai2gVs3TUhDdMBRjnBTpq6e2tqwm6Qnz",
  "key21": "aoobBr9z7iGZDSkTJmT7sPznunq4HWtiYxWqFQEC2BAgJBuKCdGH3W7j1hsKw3srByzguq7o7Jzf9Dxm7xNzK5C",
  "key22": "287KM4foBHWazAk7B4rJJAbn4qamUHrktBXMAxehAd3dLgSyCoSTMc5oV4VqYFVATvN4B1sW3FigKqnFsJExtcyi",
  "key23": "2fDqe21H5yqD61Z3ZeeDoc54PhNd5twmRVWqBgZPfRdjuz6gHHKspNkWz6HHjVxiX6gCZVs5eLgBEmL1MN83ggdy",
  "key24": "2BPnC9rYH5LktD5mjVB3nwSA5n2gTmicXaogyJHEZEj2CceJ6XAMJwa93t8535AceFkrmWd4Lra8Lf4386HVRKdw",
  "key25": "5XyKptdSMATqLjXp6cxinqrJhzqxKPFi7qmz23cmELQMjzyjAGsRaxy3rmYAWYiAf8C13Mx1Xa8wtWUHJvSfXFbv",
  "key26": "2j2P6SdKNr3BuwXnE2EMtEe4a3b2gUJEZ15QeE7J4do22YB7wCCtv12FUqwLf6AGGPc6izKxsKcqeRSNzZ79mmFD",
  "key27": "rTB31NUfHDu7JqRvfZG2engxKegbMDeTyAeqFb5ceEKyCNHLJcbRzKbHPPfq4cUP6VYyi83HZmTPQWnjHYJ1zRX",
  "key28": "4bMCzZNosoXf4q6ySbJysm3rAzpYCWskDkTQafVfciwChVHajVNrazxuF3suBxExXEsa6B3iK1MRZCKh9nUKkSJU"
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
