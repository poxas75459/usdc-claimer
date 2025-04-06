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
    "CyCpkZ4ojZktA3gPz1FBPGVgnxLdQYt7yTZepG1Z6MhTzktH2YxUYXBctire66DWW16r2hgi5612H9jsmA96URv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BzL4ehzqRio1McsXNZGgGD4W6kKNoJYmfLQxctwDcCwDrGdPUQjjjTZdDjfq6qh4FyKqJiAVLZCBGJL2vcDgbD7",
  "key1": "Zz8KWDdnhs9CcNGts2N4aSdHDuAtDVw5ZMQidHUDcnGUng8bR679FZTzijnHANwkiaTHc4whcGNUHR8qjMHVdKt",
  "key2": "2TdxG3m6YwjjvdeokJdd8dkDMXqiYucxdttQUTDxKPH4svVaoVBUS5RSBiLLkcNBkW5vuwi527DS9RUozeVpDvaK",
  "key3": "NxYG9ay7BBGuZCdcAWvkU6reRcevt2ShqMjTdADd2BPVPXcsgKCYUBDm1QE51uUddTvMAqHc9JwPAY1WnBa25da",
  "key4": "4fBsaWfNvEdDLCqKJGEViw9K828v5DGKwyX6UXUamEFLsEbbAz7jHicXcycRPabgDowtm6382AKgBm3BAJUf83rD",
  "key5": "4ro35iujU5Aus5heKBvq7FgGTnjUhQq4XrqinPL47HiD3HoiMTwRiEdCk4tLX2F7WdJ1dbVh4LHxFHwVxnwHrcft",
  "key6": "8Lf1d5zjoE4BGgXd6SEqCrkWRwRVQ8btMBH91cQL17nmQPch9yNQ8SGseAPrVkZfwig28dKNVP7crk9apG81JHk",
  "key7": "4K35iD1Kgzpe4ostGTxKxJSqBziFwGcpVMp12NFLoT9MLGSL4KMVkNJ5kP6znYcK6RLcLwdTiMZ1YmbPLzwVAH3y",
  "key8": "29LWiTViK3nzcFZ3tf8Jh6mdh42v1fr3E5SfFsSciMbzJdTKamxtLq9NAAoQnGfx6k5trToG2e5VKEoUXmCm3NgB",
  "key9": "2sHgkYWiBP17Df5y7AysQWjqwZJiVEzQtiaK7xDJqgzK83rDMJ869Qd1PoZGFCLqDmfYKAVTGLsV2B4soCKVQLzT",
  "key10": "5rg42MtK2K6JM8KV5DiXC89JkN7rr8kGR9gaToJTU4BZdGF8VKhr6nZnEVPkQuRDxtRDR3qrjxRTMY2t4SamMgyR",
  "key11": "3FKVNcfLpE8WmTQiSjEnqXpQkrb6QA95EcLuZH5wKyxgXqMYwfMA298cbJUE3AfsGyy1MLK8SXDNFMYStiNitBmM",
  "key12": "4UCdjABn7opSBGgZbss28QffownrN9RHvbg8epRCL8urqdWifrgqmdv7rXdgc1o1yRAbifb6nYvQJzjuydG13uon",
  "key13": "2MuJLWVEe4PvGinzWBspR1ZkEt4cG7TV86kTcQXGKsG7W9wc7CfkecTwr76ffiDcBCo67Rf3iWFejWtQF5T3QZJ2",
  "key14": "4431aw9CT7sQqjwmg2TQYNV2AUa7zckeTY5djRHRGxxUR1eL5xBv2fBM6SbKYrJ2LpnTwVT3tPsYfsVNg9GSTz9w",
  "key15": "1RZkqtCCXK2pEd2YfeNs6sUCcFyiuCPPKJBoBQdFejC3ncXPtmhZuDSTqsXRmVdU7AQ1DPN9DXoxhfvNhiP6844",
  "key16": "28YfhpnwwYFRCyrZ6U815x4XGpaXsvkrSwL9RaQzS6iihGDZNCqLHk91NpCqcY3mEAbx79DEuBBNvJQLe9bnpV1a",
  "key17": "5ACMCQXddss6ifGRatfHaSfcFoHa1oM224yVkAnPmAZ12seeARfnyNzAv8gs4NPAC6jdH6GLfv5C1p6isUjyoNim",
  "key18": "5qDq9mNNMUJLkkRXn2echgdTuYDrDhQRyqFjCnDRS5UEVFQGbRWCAE3aAHQqbRYY3ecmKEEgYet7pb4CGL38JUt8",
  "key19": "S6cfXFhdtCpvqUWX9a8cb6wLPcw4N62jnHBg5zwnY8htLbZWCcBN5Vu6mi4uV9r5FseppHotrqAGmcbALP6x14Y",
  "key20": "g3Gjxu61Pth6hmEEo6u3HMmNPTsViN5JWkrupW2c2jiyvcwmQfbmBc4uXQBpjbmBVocRAZoNNKTAz7N4AL1uvpf",
  "key21": "5WGtZdrwtfKvkkmLYSoTC2AEsXX8kYcRSE2ygMJ6UgYSo3uc8wrwjHaQiSWvaA4ZyXuy3tBcxh1uUovAbDgVhNgd",
  "key22": "5bx6SUkAhCWF9MPzgoe5Lv6azCdosLMazqgqhusPeYb2wF1MHRGx4i8E1pjvyi9JVba9mEmc8WR1UPpuJMBE3Mxx",
  "key23": "3WtrCGTA2m5unYVxUQjUb22Ja2CWNqcwrreKz23JhV6PGY8oAgxkuoiVU3ypA5oPMtxf6VEr2sx1AQrC45yHbNHD",
  "key24": "5oF4ep5MWHFMES7wjEeJnAP14pGrGTdqAM8a5dk1m77WB4fn92dvnvHRHLm6c9BKG2CtP4jq5pckE4NdqnLYYGgG",
  "key25": "F4WjhRz3B46hEJDNvrf17p8GY4DMD1uhBbkwcrHgUQh1P98BSGyzF624SrtqzV4csN2nRDnrEREhJ3bbKToxwSg",
  "key26": "5F9hGz3HYPjjuPo59pCxGGXR1rsfCT3ZPmB7VXKWREv2hQqsseWLvtB63LBkU16cwc3jFffWtvuF9k6EXbUF3hxg",
  "key27": "2epmXSbnsTmtcB9BuojgtmFdsV8jDdE4HxMxBj3J1dh9MH3cbkoYTiMtgS39n3Ax6tSw8kKUvoGdVEoMPzBmrWRA"
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
