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
    "3rbeshSJSCFgooQwC3xBFhfZjxNXECcMxGhZh69g7jnycuYdGC6GFhxyFB7nmy71B3HA9vNcV7wo938cVTmpG3Mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Co6Dc9JYncrWv8antaFgKJgDxy1MBvYLcMnLp18pWG1VdFYg1r6QDqErdk3X6ov9oyzqg3ce6DcxoZkZztsZBZ",
  "key1": "3RnFodB1xbo8sSHhRqPj9wEZrP8KXb7gaw7L3cSPg6pL4XcStAwmgpa3fq915eGD1wMCtbLoSzAo64Zzo5tpaXfi",
  "key2": "6ukFLB2AcpARqfwf5GyZY8ZKVwU6GSYuLAJnkUUi4eUBTj4QqnWSduwSjRa1Jq7TUq5UuTcNEozvGjxufx3c1Qn",
  "key3": "5zcUdCSP3ttYrydKDFS51UTQL5DZoKtkhFKbTYMUVX1ifpKHDYZnkqCP4VSBAdwArkJP8VThhyvLmXLtWohx4H99",
  "key4": "5fSe5vPP6CttLVK7uTk23LbgPPMwG9vHagN1k2zsF1cnDdyr4SapNLsQK21ixAUxTt8wgGiJGNmXofdRPJrTMiad",
  "key5": "2xzQXVfenYrax68Qmza1JUYx1zGnyHxbhiwrCnyXXB533Y6Xjey7JbLqXkVHF1fthwkcPwwZscfgjwg4E2MWZJyC",
  "key6": "35SQJgbJexxD9kEVBrZGKVtaWQ55xyby5Z6BwcrMythe1oZdFATBs7fcJrLKfySxDADRGi8mvXxniSKzF21WmnKF",
  "key7": "3ea3GpG88X3gVvCirAgbYn8aXpcK9sifca7zuYz75o3WYQwV98k9qwAvmYucm6oYQBLLZhGgdxyMPsZE4ifrdieW",
  "key8": "26QewQiwhLQJfB5guNJYh7GpaUJXnM5JEtLD34ax9DN3QgwgV8R4oaSPvaEDC8jRoMMXamQWKc2g7ACNLHXFdCiq",
  "key9": "5NCHS3fRf4zRf2KPicer5BZjB8AEK9Bu7jAzRn7magBFZLc5d6jY4UtAqyEFS6pDaEhT9DiJZUgqM5Pkbq2SE5uU",
  "key10": "kAdPAyupvAcXsPDrHjR99dy6NJBAwY7sfMvgKxn4RMS1GEACgvuDcZvSEjgE4AwKdStL71bXXDScPpqhaqGrzPD",
  "key11": "v3wdVtdQftbz3jKtza3N4T1ivFcvFCjphcki7Q6H7CfkbtBQRHEVKD9Six2vHDL3hhkyG3trpmXvVMMDk1vH7tM",
  "key12": "2ExAr8L7an7LhZ6iGEQzaRuybi2Cv8Xg5GVhr86THySzi97m8cmFk8agy8xeNSbb1DBL2TEazsuARAB6W8DVtZpE",
  "key13": "49JWqUN6fnnSi4qMMyvx9QkPq5T2nMffEeSiLwXkeZKmYboyaMH3TzLqTohTn5w4B7GuEgeK2t6rmaCLU2Ke2Bar",
  "key14": "3mddS3F6TftBRsYeVenPAp9VPtbwSMjqZTHhzJrqsqZJj41Uxwj8XV6vUn8oZZc2EHB4JUci19XjMSAFuVCPuvh6",
  "key15": "1aXyiXdaV2UEuH34W3eVnUBegAxLQPpw2BxNpcmKTq8vsr2TbyTQDf8jRk87QupGgw7zL2vdB1bn8PVkhejd7ti",
  "key16": "4Nfj7nG4Npw41QWhi52SUGDT3tLK6n5d6teVFWnd2QmhByyugGb8SFzuW7V9wRv5V7qvZ2DukRbS6z4EhVNDtCKq",
  "key17": "4s4UC9A9j4eu1A6jEmGCw1YQgn9M49qfXiRuZ9b6T4H6i85yV4BbVL1nKps8dF1TUQUCoeRXU1vjpuk4uzNLW3Qi",
  "key18": "XrSeS7p4tzXkLtGoFfNJwfJTwDvXHopmotVNn3crFxRMDHGnwFYv2mfvmtXV5FDBMPQvynxs3k8SAKh7uqXvXeB",
  "key19": "3CC7icdhw3eA8hSYofiGpFtMLGFDaBYp92QPWPJLYw2RzvtSC5FvidjoRVR962wVKjTJfbHxtBvfNCX3aU4PyGYf",
  "key20": "2cvLTDFBVGKWvAN1Pm4H7fXqn3se5q5RjC4DKaQ1TLDNedEqziruedgMRPW3JbGU9c5ApwMoDcgk1GiHCHk2AMPP",
  "key21": "4Gfm1soBvc42HXp5gJ4AMtHEaFXcqvC9n7YHeLdpMvHFVd3Pe3d7HjySJYiFvh1MV3NPRL42hYqdtMrHvh5yyNqg",
  "key22": "2TF538wU7VaFZJsyajmhANfTgEreu57McZc7krMs2qyPoKVREKfhX8XRsdB9X59WCQSD7m9rDxbopJ8jaSyNZk5a",
  "key23": "4nQ2hnQXdpAwnWzKdcjTXCwWHXh6hGmJ5KfYdWPDN1iYyM1pjpkkdMvoqn31MdGjPEuyi3EojFSw7DqvtzFXBswe",
  "key24": "2FMttSbaLmcvbhW2EqkKn1iojpWnPQcTZZppzbaHURhzSRsEGrfonUaFNiofKaLzmC6rnW3UbtEXqUQTTYCuaQjA",
  "key25": "36EaUkh9Bwrhy5m8i5KsGEKAemmyH7JFzDc674N6hp1cmfCYgTp5xCoZ24UL4GigMpLT3a3yqLdr3mCRcFyVMSm7",
  "key26": "63HyeexsPQLcczw9XdgsfVrJrwgAZ7sN6ALJU22PHAn18Ve9ZtTSEr6yBYEHwTQyZeGRTmiLmLuCvRYq2sc5cZFR",
  "key27": "6i5mRN3VSy3hSo7RUYDEaCgcSJFM14uJUGdLcE2bAmS8NNif9nN43tL8ZdF1qvrXjjUUgg9cU4J3wSkadoz27YE",
  "key28": "3kAEicMQ2DzHCSG2ZbQYkAoq6L7atxPP7LfDY3g4kh6kuf2hVkviH7VrYzN3PzMMC6K2ZgR1HYurajYCxHCCdj3q",
  "key29": "3eggxkAF4cmRa3qv5kefUghFprVuFZXdPLUZRK2VRgyJDLwJForBU1kD6XHqJjDS9vahjACc5e3W7kemtF4wWeYL",
  "key30": "5AWvah5CQFSGX7DbYZgTsrNVq8LF5DpEsLTg6dL4xo8z2XgLM9HCG9jQbU3p8UADhXAdWU1yfzFdeq8GMUrov7W9",
  "key31": "EMQ58ZHx4HCLoXBAv8eDN2bak76S7TwJGqEJmpXyeMvWFski3YDVgb8nnMEUoZtXNTbqJCB88C3zuEq6b8cUNU5",
  "key32": "2jEj7fjffPodre2r3yzQ1z39FVnhNQnVbio2hqmYWeZUpYu86r4FYscy11ZvFR65G7jDz6dzj1Hcki8N5VjUovZf",
  "key33": "2UCet38uUHQJueypRHFW4xrM1yKqut3dPm6dmVhfaoWumF6jW3Df7RWwmFdcbpiWYAy9q81ET6MFtNeZK2yqFTK4",
  "key34": "9TUZSeoSKvMUiJWPTKRyJZjq4HMqWYgi8dGeoeGrdLynL9PgUmptQE5tKHabmT78uNf6xfBJcKvFfmY4bBrwzWV",
  "key35": "3oh2DTJyTDPX1Ee9ZASMf3cAtvKNLJsakmemyDBf3eqLRHabN1RVh1P1ztUe7EaLogs3mo4vaomS4MbW2bW2vHpx",
  "key36": "A4PvnDZ5AquoFdvhTQedy5jgU9wBph2x2ow66QqNidwBgrJh35Nrsydh9ZNn2GksHAUFi5Ya4hSt3EWUZqDK3X5",
  "key37": "2u4mCM9CGGmgjcYHAnF69wtfGvD8JqqRKhd5MZNjqThqWKkJWQx1SfHZ4ruDn4M93J8QZVAksbPusZ8NYw8ccCmT",
  "key38": "2eZPR87G9UhjD4dC1GgVHmSVgc4B3psmk8MntWvkppY2skuJeLaxP5wfaqPDS6sA73dsrmacf9v2SS6ZvU1ehdPK",
  "key39": "5F3yqqg2yBiQ8j8u34bPmnzZYczdCTk4ZT3zbKTWFtdq4AHia2gE2sAEK9w8XPqTtKjbpme4cxG8Qqk4YtE3H4QC",
  "key40": "2RmugzXWJ3ZXgdHM2xJJR7uFTVN18dFsGJRwvphSQqAfR1AZbkr6kvZQC13kYDzLzoF6eUZrgY2L4XeCjzxANut9",
  "key41": "5pJwKLXh8aKGPXDAiN7WXR9YqUCyY3SsFmVf9296fmH6nGm1nXavTLZr9HGPtFKfeU7fCHTEdeXqvvRFhjXtFRV8",
  "key42": "4NUNqznWhkgQ9pPazhdc5CrT78iyq7LE5okACCuCiEj6Ut5MSUNLd5DJz7FHyMmGGAwch9jYMu8PZCkM46Z6mTgG"
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
