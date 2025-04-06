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
    "4v7ToQrRFxUAZbCp3fTxNzAFMY46icRumMynXWMjyeidYop9s4aUUSgitSevqYCaFkTcgSzMXeb4ottjZ7UcL6rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pUD7zkwFZRxpPQziJCao6gok5SF2yPqJz5acZWFuud4ZyssUdaUuLGeSyjJU4KLuPKRTbRUcYTBfDQRbmDwgVKN",
  "key1": "49iy24LwnpsnAVjEa43vowCtY5vWbmXskG8VWUibjw9MqZ4GRHu6hQFVEcXxbCN7wdHy69RZtSW7c748T2kitQZe",
  "key2": "2dMN9S4ZdcC84nmTFDPqhrwYsCStt6yqG18DATXautCe9JQGhewMGHGhqGmmZqLgEJsE9DKBo2VgD2y8NaSszPPt",
  "key3": "3jxUfnvYbqJo5JcNTbPTJs7wotE1V4L4pxapktUkVHccpUjeb9NTNwRSuvFkQJkRtBjtKBgDUqads78pbBbwenru",
  "key4": "2KnMv4Mkgm9sRfsx4krD3Rbo3oQTkzR9fdXs2HouUgKMD5etGpoHXYP3uvp2WtSanWSgdtr5ZHz3wBYU4txFj2J7",
  "key5": "2uPfXy4bf7g5MfyZ7oVxpAk37ee8SqVWqR21a2bHf29J4wNwLssnbtnFr4jS7ZGiv6Kd4y8xgMxkceE4ErLirazb",
  "key6": "eQXMTaC4Eert1btGuwiNCckWPqPqhNzZHcdfXadsFE6V5DmK5o6hYHzyxLGNbpdnCw6NHVn8ehmXnuYgkGMfGnj",
  "key7": "3Zs7RasYrwoTkMUB2yVoV1N3EYdULF1ghsbdXNj55aoTj35ThYwb33sgtR8oA66udQdXFZa3G6xAZ4NpkMUmhBzy",
  "key8": "2DQAQC8pH3EP5ThxkvU2xK637KStLdxGDh12hSihvb3bE2a6Bm5XwHAuiXFvo5cj5R68fEtJyo1gncyc61f6vPQs",
  "key9": "5d6vh5km4bPqjryRnn7rAAU6t3sEBtsEdi7NQyk5zeG7o6h8YkTfHFV9XR58AfFbaCgpwtvBcMNhB8cK8HhFkfm7",
  "key10": "JJvG6XKpBqKfg45TssELRNhNzHKXf7sKrzJrxbMYJxyyo2kfY6AdF2VTGMEKkKMtVu8wmkRPsk4Uawok2iA4vo4",
  "key11": "5etKA47JrNPXb1nB6iSr8mGETjG5sqorD8Nxjq2HSdFWbjFnRuWWzcQgkXctrrAUUCYDBcHmQsivu6NMmQM57Yq4",
  "key12": "2akCqWgRnmEtNy2eT4i3iBVzL4gdqabUzcXTHmXPQcXEFttna1zKJgGRideKwaUoXnAkm5ZLchBxM15unK8A8QoU",
  "key13": "3y3anKkEvFToVBRcVgLzCCwo2vpWBJimNA4AkD1dYSHbZb3y495Wz6xy4nuhohdjD3vB4mKdQWrKHeEPBWJzRamQ",
  "key14": "62ju6HYBvhUvANAqPFVkjhPivBAqFM3UNKJ1fg79WSCmjwNgZAdfWwtd3V77XHUFTL6wr41iNS4txLJrW53qzBCY",
  "key15": "3ndPEmai1cX5bAu52byccusUSNDBrK4VwsodEC4u87bkUdQb6uvRPQoc36mZNmtkG4LaPSt3SwVrWhEy6rmbfmta",
  "key16": "tcagdoPqVaeb7ZB4M9wMbWwwdRMTNV8mZWpy8D3Ty26w3hJemhMEDShEtaYn2dJimqq2LPC8CSbnhEJyzaL6nzb",
  "key17": "rrPYhRwLkRSJ5Ln4A1nrjxFAyiZW3LUbhE2fowGmTnPxY94vsuYTZzaHdw49CtCYC8hrTn88Zhfsr4A9SKzhhJb",
  "key18": "FdERqbK12cMoukktUD8ZtKffHZemfw9X4gU6LbVc4UCXL2NZzsvd19gYXE9gvotaaW4CYEjoPXDLXtCr3gichiu",
  "key19": "65CUaAPDxjDeBNnSrjvRJawFDscXakfwuo3YvbKgKZJ8x72oZSrY5HPsknbFLS6rzLz3QXDuATrKGcNHDkkkb9vC",
  "key20": "jTbLbYDirFxDYM5ywEe6xRWTxFZfwQgttuisZqWjWH1EfYS5gXGfKPS33h3PHSNe8aCmr6HVYJnPsGWwrLBBxny",
  "key21": "4VYP4gxADgRdjaQhGhZRLmZa2VEPnmHQhLRyVH8jQSYDkUceDBtfNLac3BcgDXL86huNk4vPZKkkwQGjAXKtzNXX",
  "key22": "61reJM7rHbNupkczKkv99EXSuUkUjoaJa7yMhUqhFePfbCHtenEyDXc5oAF82V5nYJd6hBtZ7PQCkGvwQ5TH83Wy",
  "key23": "2kJbie6z4VGZRdun4kqMJUci3uu7gtd5hYK4XaU3SseSQ7GSq3DhNt9dyMEGQa9PxjAr9NnVAbKTaJ4GD9L6CAhF",
  "key24": "4MFXmBxvmx4Q5hPkD9NJFurCXvc3VdrBu5hKJXp5GMrWSGYiNKmeDhWeuKyB8d1rywxeDxaXBSAog3Z1VwZhhPAn",
  "key25": "2d12k48LAC1mYwMLfJnhxRx67SVEekYFXihD1zR6Xu9fpf2YC5NUrwFXbVg9SYm3fqRj8mx8qPjQRxfMTQ6AWNZ6",
  "key26": "3qYehdX5gAXkPVnf8pCavfG9r66mCkQjXz4WtvDfT5Yw7WE72ezTdFTT3gH9A9UssoFfWGSnAS79aAc2YZNvfddW",
  "key27": "3TrQ51rbXFSo82DNSm1ver7bUe73YVKRDSPSQ5YRo2M3P7wLMTCik8pHiJ13fvbLfqH4FWimWPbfsvz5gZnNwFfM",
  "key28": "4jboqzXaBWceru2Enm5wSizixWUJ17SUQZqm2UetN7Vt8hg465BUogj6uXFeN5yL9pTfb5aowQ8fAxqJ9S49G2tB",
  "key29": "3dtdTwar1VQSMVENUREiJ8Jbctve4MMQMQ4UsLW1ehxp6vhBFwH3KRfayDCJ5WYUCUKbRAuPnGGj4DHhC18Z1MJW",
  "key30": "46oqn4VSF5iyBgbKVHy1k6aMPQMbMuV5PxPQxNTLwhq39wNxNy6YKaSG682GfzMKgZnKjTxCrMRrazPH2dPTE2TM",
  "key31": "5CYmqsCTiNFQeQNtadxjj8PTfSyjPXaPH1VWXaXnQTKGj5jdmEVdFZhCHD9in7xZEAnESADV3VAG13aXoPUPhnQ2",
  "key32": "2Via8kSiWLd3gb5tKgnfZysG2tJDMgeZU8G79sF9KBeWzZDpXL1Ke2N3jNtEG4PwZHow7Tdgjp9GDs4KLP3bgUyB",
  "key33": "5xpZPxdrDf6SS6HcpLZbbUyHgunV6tQUswBcQt1AsJiApMyV5DJbZSxGh1JhgurQXw4b41ZCWvmMMqCjqbzLsgno"
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
