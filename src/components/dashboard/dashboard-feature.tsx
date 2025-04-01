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
    "1cVwG6Q2kEmVPyWbkmU3oFvGwAbvQTwejAEj9P1NHZsqEfaV4wv32U98zozP7JBAKyVb796cEjovUZKwLJdsuRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HA1W5WU5cWHfjTJVxhdsbAXwWi8A6aPTZcLhwUJykDLigaPYq1kSZfSLAvHtBfN1SLeAePXqUjh27Vm7ypnbojo",
  "key1": "4ZdjgYmMtzU2QpdWUKziHiECw5mqNhHaE69xz1encoTeEiGo1s1ffLdgpfmdxHpUw4rVL6WjQzLFcjUMYvRPLzTB",
  "key2": "RXUnefMKr8ZeqYg5fDLicoP4UuwmpKeWyHKxCnokNUBHaSRNpma5MXXzbwdMMoYqZo17Y7MZDhAVidF6V2Ejaus",
  "key3": "4dkedJQU9cKPVyyhnsrkrzyCMZkEbStAsze5KCVAvKHCQgfEhaPrt1Woq9XWdXrSGsWJsy7S18aUegJ32hSr4VsW",
  "key4": "3Ff9eDhThpobEB1pD1zAAP7s6kf91G9aGEgmpVWcD1nREaXn5DLBcYhx8GmipCer9iYy9RtjE7FzgZGefBJFyehB",
  "key5": "4vb4ohaksH2M5nS39uFqmeJE8mSer6p3PYrTk5duG4m62vd9Fv7Bot9Pmt7k12paT2KdQqeT7LHhEpna6YxJpR13",
  "key6": "5sRtcSuZdGoDFhHeVt1d4nzLxmJQSPCYVoSjqV53HXmwXCAQxnSGBCwHxpUQLRMn6Z4tP74UvRwKLbpg2qMndMdp",
  "key7": "Wk9U7zFjQ7xbcVJteWyXSV9rDSG1jpnKGSdqWycTfNCasGq2586vf2ke2FjWUQf5X5XVbiqNYGxhMsA7RiAxrbR",
  "key8": "4fsTgn7dcpT2cGbCWfRDUykUvSrYfVaTtHmcmK4zfPmhq4T2gvAjawZB9otEyCa8mERBATbG9usqfcGrYJ887RYC",
  "key9": "3XqocZqxoHuvcNZjjk5mCBs4JdPQEzbCWJeVAkLWnCRmWaFkfbRwerBb6ogSZt1CCZkTsfp3Jk5oQSep2pjDtAKq",
  "key10": "fxgUpiJmAk4e2bQ9UwJZ13PXuxEV3vW2srFeQYs11PU8BuP6PwPqB6uq1vS2idQQLyPonAPEUqhXafCX2fjhsQM",
  "key11": "49uN7mTLCvNPhH91A6GkvqfSvE4HpCAowkM65skMDsUFXgPE4FFBcUpDjf3pJ3xx8k4NsGRbhEdDzTxxbXxsdcV9",
  "key12": "4gmR89Ad2ypjZU1R3gcLNYyMmpcc5mTbmYGEBUeNoQWwXmG6TjRyvnNZjETDoswRtuZE8hz4Bgqjd9pv9a7o76T1",
  "key13": "3X3zRnzG2dSeurAQZSc1vA3kegnat5xGDH2jiBW83CYQqZvwFi1UTz4GGXoYBcKEHAWnGJusRPZNJWEcXkCeWxHD",
  "key14": "5CXG2pM5nTS8hmDMVWwH3xbhkNsHvTgA6hypVdwZiEznYQfJ7CAe1ejFwRjMqynrVRAtRaw7xe1J9oTopMj7Ybvw",
  "key15": "62T4fEHHRmcmeNo7Ys4aseNcYWkyLAnNVc2xpsa2MgM3m1CvzEKk3CrJUTgD5aASuoJcvP9Sw5keWyM4KBLSGUCt",
  "key16": "udPqRyksPcMfYNAvtzSXcWcbdAbNTkJ6Z5BX1QjsfD7J9aJUQ1Dfx79Rqxi1fXxWdkyLrQRWtRfzzV8BKgKxpxN",
  "key17": "MFKi1geXVPjBGNAJjAGjussjpnFhwhCCL7Nvbteb22RXPrS7oXGycsLwfmTbk1FbseW6tPtRtw3peAfNyDjgbWh",
  "key18": "ttcsyq8meC3MXScPTBT6woymJhJ9tY8H7fHjTD9PsY8sovCc8UYSHXHAX4HzZ7Wzuz3RmzRQMkct93AdAQt41bT",
  "key19": "3w2povP9Wg4obrEQQXbq6wKBw3ZGmBonfHptc75Yu79a1eigKkJnC5iX3L9oiDh8q4MUP4d6gGJH27RXHEkUFbc9",
  "key20": "2mkxBGH2daP6JD7vwLsvDZwZcYKMcL2YhFibezr3uyWEhZK7z5iAcmcW1NjEMusGepLimEA4QNX1XT8yJXWmEfwi",
  "key21": "8uEnWx8pBfCnPTMSRx24mFbd4StkCvJEdPAKw4CMRHNZiDgJk9TZTGmkZXwiqtMoUY5FsJ2wf2j4GbdKRY1czsc",
  "key22": "CwfpYHAFxJaQ5R1WxCKGSB37beYLLmc4RPwFTziSL88GPd57D39HureFBrk14i7ftEdXRxEibSoYgC5pFSiJsVL",
  "key23": "3NQ7CT9YQixB5yYmro95kSVnUv1RYWKN3cLjnamBy8TzVtMjJMXRvgmUdWmjTKKhjp6K3vCeDNPZevEQED71Wkwp",
  "key24": "Dnmui6cKwZjuFLN3hyzeRwswDgRGjihp3cdTsA73aLmfNr5EhPEwEYmu9rMsEDw79fnNVnV4sPgLw6Ps9apAWd7",
  "key25": "5z58jyJNGHuKNH26FqH9bznB8v5YJ6TPVEvVfWvUYih9kFsexmv3EzTzMNBPJoFXWzg5bzyyBMv2eTtwtxe5T5Cp",
  "key26": "37WtcRbJ3vtpg5bnGczeAKfbjHUHSTxd2ZdhEX75xYcxSnQEuAwZxVvjxRfijxTU4F4qaih66u3W6yofmsEBRX4J",
  "key27": "2GcUWus2gizJ6H8UCWJHMwRFRrMAkp2cSkRc8fHU7RANqbyPCFaHixoLdfnkFYjNAoL7UHu5vbvrzXEcs6Hz2WFe",
  "key28": "5zBamL3MQNpEj2LaF1ZawivqRRutLzMrphTb7VZFbBwtcz63tZk4LjtGXHHuYiEZKwZ8T3fuRC5oeKdefQ6m9s3k",
  "key29": "4P73SY25BmKmwWYsz37aT4knxHzSPTHh5XAWFz6feXB578V2R6gsvwgkWWHFS6HRywRyewVVFRP6YMDwVg2YPo5c",
  "key30": "WyMgTcJA7Mw4BLfaNNs9DyJvqqryyj6b2PCAd7xGyJW6XaiYxaUZQ34fPk6sFNtcngXXVbBpdy7EJvV81FTp99T",
  "key31": "545bRSfZh8gcEn5JLadLk9iN1QGe4HXWBK4e2ZJQTifmrRXWB9diAMy8fcChHR6VxcBhUCjvrionGNNKHVaSFUx1",
  "key32": "4yX9U1xCXp1WkfRfjwuUV6Wve9p3PwshhQwyex76boiEN8BceGZezwhApwz38dCuNT3qwqzxxwhqdzk6XaL1Qdsr",
  "key33": "2vaRt4aKFsWgFZkx1JZDs7wfKRGuVKJm6yWnBnW5K5aa6ffbbfgbvdCsa2vsxx8RbKmJLGr1BTX8yQX5kzwgBuRe",
  "key34": "5NP7qvR55qMR6kvqW8W1GWmGR2uvdLNmR878LcnehMd4BrLAAMvEErjFsomnHpxdoXhCBSX3tFceqZuRiXHcZNaD",
  "key35": "4tscGGKHG7nDSjZ1K4SgXjYbzydPqX6nGuQtyKBWvTTPWyzR5wqMPfWEa5ARc4DAMar6dx6o1RCccu92ndjCASo8",
  "key36": "uVy3AyesfCL582HVtjABgSwH9XjKBVdrE1YZ6tgPoMWStA6y8jfLY2kwo2aFZWVQL9RnwEuZjwyeSeLH2oHK7Az",
  "key37": "5V7d1kKXCiayD5Tv9e2i82mGYPJL8rhiDxcqdy4dT5e27uP9y698ZFMwmnd5ugPYtk8s8B7dCFk1VDirUMePjW7p",
  "key38": "4g4MAjFeovqBVaEHV89d7LzNpPLFi2C4AkbtLczfeLSriQpXKpefods73mkFM4XTeKHbYXYw2eooRVT4UXMP7vnV",
  "key39": "3whVTmhVMmJog2tzyrGPBpUHgSKMs7uSpZtbrzWwDMPvWpCDKeWnsGnXqBNPvkPq38u7zxyjVHvyDa1Y3Jcmy8f1",
  "key40": "67FUMSqtJhKAWc4ZkLk43tPHosNXyvJApgCZDzhg5m6fyXAt4dpY3ZNQsnBMDtkw4Rh5PyzhV24Ee6B5r7ayHrBf",
  "key41": "3FofhuEziaaLw7GPfnSk9j2AN5JwbJE8L4GQA11F67XReKz7SGAV1DQax6LngGGsLt5HsiCWjziaGU2AEy9mkuR5",
  "key42": "5uZB4BPJJo3wq54G6fqKN5piPc3SMWvSdkigYr9W8ZeWFtj4P9NaLqzbwaqVvBEK9ydarn6UgiFrg65enULSf2Fr",
  "key43": "MxCfSfJhovwskoHEya6Ue4Sj35w9B7EWNSNtiwCmV3cnkKFQGqZfu8iKJsU49aTScTTyS5d8Riz7BS7ur9xXjZ5",
  "key44": "3NLLttZucqKWf9KJWr6QCfpmrco1Pc4QsNo5pcYzZvbodVbK6oykU3aM44DCHTd2DmrphZqrD3gKhbvTrXMd6gW5",
  "key45": "3YjLJmEVw3vTsd4j7v4FbZwZy2LDUyz629cfro97aZMqsLDEQotvzzZJYieSN4eBEQQifJ2kjNopAW9zwaKCTCTk",
  "key46": "48aqKnFPmmrjM3TRBnmcDrxAWjUvZtJ1va7G6EDnycZdDSFM8RZnwDDQdXFafx8oqKjB88ciArYuKjd5MSaDure6",
  "key47": "4uKgfptUL5aVADW75qRkxbskuTfag1wnmiijRLwt2N2XxkpuHQCn2zPuEXmWB15unVULogtqzmqh319pUWrgn5tt"
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
