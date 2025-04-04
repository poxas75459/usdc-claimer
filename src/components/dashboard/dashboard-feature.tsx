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
    "46oocmtKRNFnCnuGXnQJ2H5WdaJW2HLjV65NN6AxDe8siKk6eGo1XYbhVBRWappEGTYWVTMZoU8bFQRYfhtLMSow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K8ejTc128CK775FgpBfVQMJ2o8yMqXBEWqKoCE5rKNy9rbKxpMWfC113JH4Jw32bzo6fus3VWRNMZugSNpyLuVm",
  "key1": "3MLQ5wDZaTodTJmM1F5Cm5RNb35Zg4u4kaLzuzYzFKBk5KejnT6z9bRrei4Wf1RCAZQkAvP2QL21XmFv9r1DKfu5",
  "key2": "3RnsxqAy6a4qU39DGDAnJkEv3omskngUsXDfp5VSKuAC4jwPm1qy4MGq4XPXza7X9fdM7MEoDsTT4YrWc6UfbX4t",
  "key3": "6B5PEPkgx3aJwBhchAYyhT8jysshbhVNnh1DVDRBiCtBUKmvgM9iV614KV4uwwjBPMqKSpeytUQZns5Ls5y8fwa",
  "key4": "8euaf7R99Untbw6ywkDzLz43wH4PTurvmCaUTBFxLS1TzFy45Mv4gj9qWDTG2Gthmfj6p8rsub8WBNWtcLSgyrh",
  "key5": "2qpAqf7woaTjBjmgz7n39u6cSLZ3gxUHGEGS9Z5GbaSm7AoVSoNxzFmVMmZTZDGcpb1gtLUzhuLD4UEs7niYBobw",
  "key6": "fszSMSCFfrs8M9wVSop9DfxLH4xAMogFkoEnq6dMsJYxNQzLnF9UJAKbvPFSnYZR6nnVSGi5DfDcPAUPkpUCzob",
  "key7": "2fkstBf66BRTzNHhvXx4ubueNkH1jv5dGxJNnLKXp551F6ewsWPPGamfjoViBW8rXDPg8Y6VQwEnz2XRvbtSdVvo",
  "key8": "3hLcR5MfZjrx4GsCjqdv98UQjDZxNTerWEjDjVwGhDPRoorBqq9pdMmrHHrDE5EotHcF8bnCFzQEatVubyG77fbX",
  "key9": "5RCX28EA3P5xDJXwdvBXvZ7GjHBvTPEA1unCJDKw3pCyYfwhS7g1ZYL2sUxF8wg3YJ7SJcgm9TQdbgGc9tQeG74X",
  "key10": "vpLsSf5bYFhEtScgJ1ir8W6M6upFpmhAdP1bT8D8E4e12xSgABW8kJ5nib7Lov9fFzA2u6tHJwjiLoAoY9spjxA",
  "key11": "2iPEpy5hiJv8zLyMw1MJ8d9kAGMtMaZk7YdD9AmSw8YoTNtS8NfDKrkoRTBgbwcd35JqnGQYrSeQgd1q6VRxdotr",
  "key12": "3Yc4XDbYLQwpBRTF4AQ2eArABCyAXr1yngnhpzxCDpwcTHtnEqCx85yXvtKyvS53um9VNcVBLQLnLnVv6gFnbtwq",
  "key13": "5KZtFf1ZanYmxJMSNc4rAWSdvfchNRsq56qAFTZg3GD5UX5TvkPJcR3zqWdey3BLZgqgMFFZ3SYM8fyWgB7FZkuk",
  "key14": "HByHgqZZdT6kg3874PmR45oERfftswuwj1eG2dyvxpVqgkcKr5mEiWj9PoMtuEFMDDsUhdGxrb2SVZuNzjt4RBd",
  "key15": "P4UwW9zXw55UcyWm63sWpGuGX7UiRZEBK3N2Txe4QQL9nqiQ4YKt8ouLo5SjWuc57DnqHr8VuKvZxLWmEWURHwg",
  "key16": "4dLGzkh8EVAnBT8kRNe9NXBSRsu5nk68C48cGiWTRsL6hHJm2vxgJUPkeUuekzxB3Q1prw1LQ877iaJ5jfEKRfoQ",
  "key17": "49bSDafD4g3vG7uMpeWaZGVuK3zXZbQFMVf47Xhu4ZiqSZBkUqsozRwsXVHJFYGAkrC74vdwKuodRFwf3hm3NuxP",
  "key18": "3B93opyVV9fcgDvrzPs4RohsqomYkdApxFk9bktcvikYsJ35aVUzesQen1pmMgkHVQNrwgQZC5u8YmuucxshVd7e",
  "key19": "65GW56DDR7PEYNZi1B5QayEpoCAQCr8tThHzyvXLDLkJQShFBRasdvcAFBNoGBgVdJ9BdcTC9LkFEc7saqAVsfMq",
  "key20": "66KNCtPDvXwPB9mxaV1ronaEEfjtLdcWDFyP8e6CnCQZHTxYS9p6DR81e7b71GwohdU4c344dEvqfNWikBviF68w",
  "key21": "2DqUEyz2rack99A57ukoNeKKUzjTD4saRpwsgzEoTXuzZ2kGqDoG3PwsuGrWeuKHZrQu7gTaQetASnUyah95rDNF",
  "key22": "sTjmqJfsXnPeqXCdFM9JBLCAoXWrbWV7acQ3trcBDs6TEz1CSW5E1H1FQfRF6Akjsg7ipEJBKr7VQJ19ANAgPxw",
  "key23": "5iUiUaatWoH8ns5JMgWeqMdqiUVbVtHQrUfSjLKJy8X3JfTmU9Am627RoG2HPyJQsiZUhqk5e5QdQThqpW4YDxFH",
  "key24": "pKQSgMBikSzp1oj8XucuEP3VZxbSKNZHu37poP2gyMY4CPWThegs4FANcYmR9G1EhvAonf3ano777eLTn3HqjoN",
  "key25": "CQaXbjApAzoTt4jHWDF79WCxk59K5NApF3ifp5J7uRKzPP6p9WsRdzF4hEQVRzgMDpfBWqs62pC8dVVTbsBjGsk",
  "key26": "NYzzjWPRbo61JVMrrpnX7AqGDmxzomyTZSiYq5VoyKnMtHKphkggsufRxCHUuW8VvL6TU2HsRhRDmApHirgns3v",
  "key27": "Dqfw2zp2jASb4etzRjnsPTZ4gAYCE66CxBTnsNSG4uH4VAKYYFQqVPiF5qRqjuf33TbBJerogZqRgHmzPR1Q9Bo",
  "key28": "3QutiQiJGA7sgvt1dGws28e4N5CBfmYdgeWtj74LsRvMjNqBihSH3umoaWvdgyoFH8wixaZmggp6zH24PTZkMbbc",
  "key29": "3Ta8sSScUoh9Z9HKbNjZdDWGAFFEFKb3bfhBSyPD3UzVnYPMev79CczvFLfcuXziGWeenDeRCzzjZjKkqoHFDBBA",
  "key30": "Sfm1EZ2yNBmjZXijMYR1RuRXQhsXfB6pSi7f2tsiEZGBysLoccM4gpmLbCJ3C3RPbDNgkpqxim4C9zAs8Wn4B2N",
  "key31": "3tbH24h11ki1QBPpaX9J17VPQyTx9s6gNu4bFcBpSwMC3Rg7nSqhJhkguNwyFARGZ4VfsB9pZyPkobMr8f8sXy6Q",
  "key32": "3t3poTBANxCp8tSNP9gDJoD7AUzBv9arsHRLcWGDh6DkAtrQ2yd9DkXyQm4F9ieUXvc543E5WnTAJR9ANvRokfhR",
  "key33": "4Bppn91geyKC58udKKAnQmKz8C5Ahokh9NXQjYdACwaiH9qSRH2pKXgvduFtN8iLLzVM4icY3nzcpSEJvzrZfovL",
  "key34": "BVqDFK4eLt3rjmD8CviPC6u48T2nGHhj5JE4jUULpvjFfAaaPZyjAXcrg9kFDJipALXbfk1fmHkhWjHET49RZqt",
  "key35": "5PsAWyQRs2sGHCQ6p1Bf2LxtNMteCV5hhbvzW1FkTvyDsQrYNDdt7SZ8YaHmunVySZQUGhy6dkso3swsSNbDZ4NX",
  "key36": "4AVwM4uuXs4pLm15hMdEzWtmKVLEFhMgYuvAq1GMRxv7Axdkc464ttrD73XinhVT1dJHbgaRTcx1mnZnc8FH9D1v",
  "key37": "nnryP5NvzixBr6F1yprv2iypS7iUG55BTbx9ZsY8EXNCbczS7QbqGTaKwE6ngTQJaoaGELGeRat5SWtFbKiJXxV"
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
