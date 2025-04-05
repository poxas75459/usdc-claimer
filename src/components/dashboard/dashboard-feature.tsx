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
    "4zF6Pay8cxtFjNkeCifVZ3tei9bcBp5xaFUFLiHpivJnmPTuGX92AcjkorWy3NuEcaAkpEwMz12ngNGq5J5qpw83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mj3NoiBfR1iGpzCER24NqJuHX9U5CPdSAiuC9bzXDZ9kZFkkzcPfJnM7gzbjA4e5yHeQkVpXSTcnvKngJavv93T",
  "key1": "3kso8ziBuabnVmY8KTaMqsoMdjFz8A4kw61VXgmyVx6CjtinhRmmLov6jRDr63h5R69Yv7hwmhTbbuNYYvwzFnHD",
  "key2": "4w99faofgWjdaSA4yf5SZR1y1Mj9BWT8GYBCe7VASK6eQiCK1mg8yepBJTRWKAV2fBUgh8ucaadiBtCGkgUu2vYF",
  "key3": "2vQM6oPU6DyZxRCT1guLHJ1x2K32axi2ebpRdSiB7QHqVMEvQEpsDo3ajqYtEjH81M7uiuzTRJQo9PRUtLwY23SW",
  "key4": "4zMLoowYYXZkXzWhniAa7zEQ7cCj3H5LKGcWov4UeTqu7EWYo87HWG3ycMUenhgxPRBNJ1RQvjm5RBoUEj4deNTx",
  "key5": "3kQCv7aSQK2QrVyzY2rDbxxvKUwHmYprUoPGAcx7J1P4dEH8nQcQRQDhteXBP5EuoWcvqEYAd7SgVAA2PKVQxaN5",
  "key6": "4kRTHsNijgSUsJYDYehzaPiCL5Nwds1nGuw5ojubE3NVJfYckYCjudHfZ2yKFpCuJ4JwBNeRTTPMJuFUsGk3pTat",
  "key7": "2RAzHJX81hq1dK8Fqr8wmvduDEPUTpoictPLiWnETZsSAQFsW1tsa6KXUqo9UsHW6Q9Ykb8NAsep4xUSoAkEo9Gn",
  "key8": "3xyADr8kcyC1zV15fvr1NdmaqcTrw4b3893NZgj1FyRUCD55s5AmE1dHypstEFfUU5chkZxpoFjJhqtnm6xSZU5Q",
  "key9": "2LReaXVxPhn8kdz7sCQBDzM3mHGqQqDyqkXejH1JefD7r372hsaUMsiPRFzLNKu3K7t1uUuxr7tpWaGLRZFZ5aao",
  "key10": "rccGq4HpuYsfx8vwfKGkES6MCvpJiwMJssDfjvseSLicytsgpdN2jqbRgz33G2FsUUbN1bmwS3GixVcu6f7Qpmm",
  "key11": "FSCGfwLcm5PEYsRUwcWQnPPVBgR3PUkkx9e6mQ3Qr4WRVUuHGP5mAyMSQo4nJv6G42ijjGYpCGBbr4iCnAGkVut",
  "key12": "3UH1jhDrQVd8ku7sWuFuzfTkor671cjM4bEZo2Tctzn233hnHsSagi8QFPuCm4RU6r1AYwU7EyvDKuUHmLCwkbYw",
  "key13": "2B36rwuw23EfFdZoYKmXuDqK9Y5mJJgYjyoZo5VXU52P6fUw5mmgDxmtH88LQf8SqEQ6veigDedZX4iEU9bEGxS6",
  "key14": "5PfWxhKFfQDKAmiBZriTSCWVo1NZAorNFvrHbpExKxd1M6aJRgVpEWYg5eScy6WBAuZpUpmaaWQ1PWtUWCmi3x51",
  "key15": "3qoaVD18Q3AfGrCpq5wm2KbVafBqUijN9vugYNtF2Yc7HyApkNSM69i1AN2hRLuY8JnoH295MjwfsGethEAzfnTq",
  "key16": "4z9NcN3y6PWc7DA1ZXhPoPQK7ETM5mwo9KkpqBXneNPpgdvi667SFuUH919eyFHBjoFdNH3k1V5Wh88dqTFn6bkm",
  "key17": "5AjmYmFCcY8v3oXUFsvBnczS2VDbknBvzs1hRi8yVjg2ZJb7btVJeuaByrhW83CwdKqqFJfA4KwYvFgzSHidymgB",
  "key18": "FvJt2UR6HZNLq4NttXdJ9HHdLhhMmWU7w4hAUYywmdefxaHidkHy1NwwCxrmVraYMenmgkFGHiaoycPgBPQcLBb",
  "key19": "5U4nVCjjTW3JQzKSxP9XsU5yr2RqG4d7ZE2pjBavssTAUAnRHpm8HaUB7JJw6Pk3vxxJ1aabCvtgSRAQ9a3aEQbd",
  "key20": "3zDYAXy9BrSYgxV8Mv4LQAeT8PcZpDAnY6qDPJdAq4SLXJeXDNa9W8DDLoZcSLfv2N4f3Fn8hrEtzP6x4yh7TLPh",
  "key21": "2wxmCffHJr9uVTMJGgPxMW8i3quuRPh3FpigfiaGD3HMmwTMEc7usuM5kM99s3ju8EzhpLzWFbfmEcLcDrPfbvbM",
  "key22": "4NzGhQPpksLECii7cv1r6YrJwDg3uSaNsqUUFAwJ8keTnATT5XwHQCWFWP9wiw27Hz8Mr5jC8TTfmWJ2W26xoJrG",
  "key23": "4w7i72NdNyCYMFkKXp5hQB9dcgpeQxjwHy4xLZokjEeVLzsCAYmg94pdL5gnrJfXuSiBWQUwPiPJYS6fqqHAh8Vz",
  "key24": "3jkn7hmU76rZe9hAuYvHqH5mxCrKn39ZTqTqPMCnyofXhon6VSr8Zsh3xT6jwguzVCAa1LVc4fQyvc7hbiTEXKrP",
  "key25": "3vwVfCeWaymjvTbFQjN9snkgEz2XCojGsM4NTgaaPP4vcAdAqRdaQEJUBwcUfRhZTnpyg7HH9TaTGxfDxMrBL7ot"
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
