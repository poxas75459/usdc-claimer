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
    "3bNi32SSVrbyXoYH6mnv8pJVy3vTGpsxh4HJmn5Q4bH11ET1uEPBeqSh7CpqzUFTrZiGsMcgYGYo6NeihjWWJTwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CAwX2NM5NZKtycWwyAjiPBFkdEpYqyGz86yBarN9zwXDppkyDKGh7X95gAgnMkXKFfARryjJ3NbtWxqaS611bvw",
  "key1": "4WVRZ8UhCuRPr9JhaufWq8ECwSwktrJcocYimCUbqi3k1JwQGBhWf4QoUEcfBYGbY5z77qciNc4JveqyDRJig7Bi",
  "key2": "BKbAFa2txWGibEj1koztHdhoPvdxLjS4Leya4xKnQgyGLpRS6JNLZk89KQVReJmoLZkNdhq2Cuo4QsKra4gcTjK",
  "key3": "3Rx4qY2UcYXrtdaYnT9QCV1aMcHFpEkmnb39Df4jaYzd1AQ9jEyj7hgkzxfST1TpkReHYymBP3S1SdZ8CxUAdsWa",
  "key4": "kNS9oZYjtaydxHBpZTj5sqhcbiSLc2JmLxm48CEDHL7oW7bZFkfJx2jDTKYW72q8w638bM7EYZf3i1wfDqwpdEJ",
  "key5": "4XXjLwSzNv22mq9mga6MVKSiKa2kqLkeKvu15GvuBTFNg4L52WW9fenGaimYPepXwtM5WmhMubzTWmyY6VnpSHj9",
  "key6": "1CRUCfS6p1WMSMiX4FYAgyfivVTPYdBWnu878MVTg1Rp15D28jv5FPwfcf77gGGVY24njex4zR48nH65ouV5MHF",
  "key7": "5ftW76MVoE6GLdZYwm2FQfrSe8Sa4rsrVY4cgmBkRoADeZR1c5ki7kBaAyUPUMZTW4AUMEdzbRazYiebAqGgC8uQ",
  "key8": "5BGFzTcds2hheik4E3yjJNkcUJg25hRpn3HfD6uzCu8CRBsXeJTMDvWbu29qfmwdeebnATWWoa46Jn6aJxmFpeDs",
  "key9": "FaUu56wzNK9gF3pRaQzdWjtBR3njwyAxUBXU7pWpdV4ogYb1Bt5jRXm6EedUeWH2h3U44hZRBx9P5MboA2rP9LN",
  "key10": "53K1rZi5EnSjkPcMUJYMsKFGKiy51LrfCt3F3vF76nmWCZ2Qa7h9Z5xYUHFLaVTSjm5sMDZpLfE35Uixwa4vDyUH",
  "key11": "2XMWxt98C4gB3KKGNsnwEzv2WqTvkWCQhgsDqZJy3VTBo1KrBKdBLRaAaVjYcLdqJmjAccLwpd7CwHkuj5s48yPX",
  "key12": "53E4BvnMJFFoXCEuHW5i79FspAVixU4RJZ29sDTdQGXwwXLqr9AZ1oFEKCc3wQTcLSW5g3KeAwAySaF9RGyQUgAv",
  "key13": "4ww23UPtzBFub5FsmSDJhK1FpqrgPKtosXkuE8qaLwqBTEGrniJ9FbtvKKERC34QowtXgg8QzmYHTeg1NTNDTZoq",
  "key14": "31iAo7q9NKPwwXTob2bPJpAfBT3gvGfgwo4z59AUF1gcpvvyGai4XdcuoZ2k4q61kAUW5wm4VpdWvS41TDVhJojD",
  "key15": "2kMYRbaQ4jVYu4gDmXCaKCXURDH8M39YfNGmo2XhQw6jJkU2nYGbkNyzwVopNRqEybEZUAU8cxtYjuWHbauemc75",
  "key16": "35AXd58zoYZFtd1mu3n9MBT23Yx3zQav69Cg3mh8vk7D5q9zE4C57A5F2wgFqSUK53yf7YRM76yfGT14qS1ewGyA",
  "key17": "5NjWWvuSj795vMWWu1iNizQhxRXnxnAW12tRFin7MmBLGr6tirAVa3VVueRYA3jqAxG7nvCgy5CRRYaKVSi8hXo",
  "key18": "3FYxaCcs1XdDBA6W8kmZpyU1dyJvhdvTiEZZKAp8A5peKcHbQ9aeprfBzAZWx8yUiVhgYY6hSkbPYSBDbZdPufNw",
  "key19": "GsZA8uBxLC9SCxPjNB8pM6hvEf3gVerHvp15sDVqdXNqAe8vgw3tCyXocbQSdRoDTi2pthHpm2TCFZKnxH4EeXm",
  "key20": "spsX2j5oKLAeYkkHjLTZTLrkzhfCiBzhmmh34girqmtiZbzg1veEjBmXVuY2nJ9bHH4D23J8RP4r3n8GoLHbYDP",
  "key21": "NVPwHYoAD8edb6FeSq7AXb7m8QLMNuWYjMoJCoDvNhqrKf2E5yveKLcCbBGQuvCtX63HFzeygbJuvxF8xcAVrsB",
  "key22": "2cTVo9F29ihaRwM8GDXf52k651PXgDwoGuycDNMf6LdrF4niaNULwdEdBnmhhaA6XnXcfnaxvxhGEsfRrBKDK3J9",
  "key23": "4TsqvRWJqpyQ4j8vsRLiL9XZWJQg9yKfC9k9NyKUopr4CbKKd88tXnEkRL8sj6DQAZWC9bhi6DC4XVMW4yN8bu86",
  "key24": "xJ6HaZgsr5csBGe9qAeBNEnWyGTTLpojb1iFrD5YwuVq7Y77G3zxaN8XHmHLCTNRBKNyJXQh6JAXMpRCDyEKNoo",
  "key25": "4K2F5Y7oPKtGRY8GBytaRkRpxeUkTC6kndkdV75TXACedRBY8fZFDiAhZSnoroh7sh7iPh27jLqPHW9vVj5KrhGy",
  "key26": "36FLz5DbMcJXgsWQF89DPXWV6FhHcpMCW1cZ5yeNbJvZTr87SAe6ESnFxLqidHWqSzB6YC8YCnCvGwdM4agEkuv",
  "key27": "63mU8T2CP4GzUhSqWbP4WJdZDJ9BtbRtXjxpZui8KXRNuQLj2r8zGfKGpQC1Gt4iaFGHxf5x6QmpUFkXuBu3dxDD",
  "key28": "2K4uyFCUZdRnmd7sSLdydy1Piy171ZNTc5QcYNptPuTgZkeUvfjRk7gXvG5LhDFuVWpUvECuDvvxeotSYnNCXYJy",
  "key29": "291X2Knno8oSi4hcZ8YgSR8RRgkV8royezConHXwvtAngdXG3YrTtWSSrEnJMDhm6quEWL73kvUnvr7YJcGJDnMh",
  "key30": "3AdquyoxaEiVQNkNbTyVkDj6PsDyQL17n6o2AJDVahbgPJmnfNwh4m33jJxwmALPF5PTn3CUL9yKp1v3J9UM5kig"
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
