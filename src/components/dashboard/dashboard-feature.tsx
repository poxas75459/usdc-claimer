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
    "3sjJKFEDvbu3XUPe57yvutUfjk2ARjgAy2jwU3tdZWexUu1Bk9QMwhRdex49Y2gUe9a1EWyG2erM7jhSUMXNfVxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hEe2D8Cwxe4L8KaD32dZRg5DwjnWqSziSnXh95ur2f7PUe6YothYCibDeHUZohvU2hVqKBqYvwsrT2YFU7uucah",
  "key1": "2YsACNpHqTfAMMixQTxcBZMeDHj8k6qQo4fSSRNzieEwxKBMyQs9uifZdGNNhnUpbhx7sfEz9bKceTmFNiqCLCBq",
  "key2": "fMewD2xNYkAT1jCPE7uhWLycbYCBCXaskUdoDhNPE1C7urhTQh599caXV4dop77WaxWr3eVdYUUrtRobvRHBxes",
  "key3": "2XEcCvGxCRqhCNmLqzjgYmkHK1FZK9Qw7kc57wadYvU2jzafMV835pAMPXZKHNkbeyFeevwa9AwRer58MKSLsGrm",
  "key4": "3CDbuGgupGZ9VkkwUEmMDVXCChkHgnuJXchU2w28sCMmzqjWLh9KyRy2RqSRw387BNTjG7Sey1UVNAfpjWXK2FY8",
  "key5": "5uanz49d9AfjMVB5H31fSCnZL7zpvQYXH5cmoH5eQmTedJBT48v6bTbDaJXcYGzhR4Hh8EVakDzPa4W92dBWRWw2",
  "key6": "2GrsxWPKwGB8eYFPx3NwiJkiFw24CL5M8NLXeKYjHSpBbix7teTiPgseMLfMmmGQ1mnsgjE5PFTbuU62dCcJwNSm",
  "key7": "4K6kLSX7HP1esaSuzDKbfYMJXYmvCS5zb5W8ubv4avaJSnukNCvKkB7uALqHqcJCTFMiy1HPWFVbswkimC3VALEg",
  "key8": "4Tf7aHCFdjxZ5f6dCH2JHAkJ2WJqgHqn9A66XAhaDY3dr7EdLz3TcohxxbUFsX35xwXKgUF15pCsS26x7UvxuKsY",
  "key9": "4Mktz8W84CvUpDQJY5gnzgH5jRj9qjTStpRhPZicfVU38rJLs9jYYVcEGMCFdBRLaLZUukFwGpd1Wwn8vmXnVJmU",
  "key10": "3o6vkS1y3giRw2Z6HnHRNPZgjD8VnZqESYepUNBVqChj5dkV5QDNsfzNzXYAa9WfYdVEbv2TrpNAKU8h4RXmQACo",
  "key11": "iMuFxgwnhiFfsbVsytGhwjoz515YnMh6ELF5sAMt6GnZuRr4HNTQ3TBzYH5rQDg4fA5D5pZrqHPoYWB7vWwGA5c",
  "key12": "5n3n8eWNNnJrUEcHSjxRbUattZ3CwNhEen2B6JZ145aQw2qhhRrVZbYALq4Cm1ygzMhPdRifX9VCWL68jsCDfMi",
  "key13": "2NU1VLN8ZtoszjE2CAUgA9iJF5m6otXpQGD1338V3bRm8BqWM1TRDNnwSdA1RK5xBM5TiPCzaxgf3JyxPmg5p597",
  "key14": "3m5D4io9fvoFrn8A1DqPYiyxTwvTEgcMzv6X9WNyboJ1xis2HmWAhfkdx6KXWYzfVFK9aKyBBHgyzsesPuwiBYP7",
  "key15": "2n8gXMj9yNLVw9iY1ouLNcLj8tz2i9AMsPV7yQXW2RVDkrZTZqonYwxDhRX4LgLYREiHfAmNUi5DxWpMKxY2xq8y",
  "key16": "5AQ7upXmd4YnEJBBuf21Bt4za4V8Por8S3k987JRhcwLQeLjrNq9qfZF3SS95JTTLsRefbZiz6gwxu2MFvbFf5rd",
  "key17": "1eQ2uHv3mNdVt37UQMa3DEEAsX4brPYeA2h39CRNMHCs5G74YtiE4u36a1tDzQdrcj1eraV4enWLzQ3utUqvuVP",
  "key18": "2VJQyPboCF11UdWmZ54HtZYrityoxgLHN3tEaEgXg6peitBsU4uCX8QxyP1ETZ6bdUurz5agqDB9PXWFzuNFYXGg",
  "key19": "2y8XqBBsAy2rYBRkj9LCimU3EuPYvMsmgGxHm4mEXM9futTshhAGYSREYP3GcGFPF4z4t14tczVxHcAyRGzBCgoQ",
  "key20": "4zdEBEFNojFhS2z54jwauCb7FkkN4qzu9YCgqrLomJwjiLDM3HW2aAw4DKksYLZZy5LMF733h4aC8cCkmzwmz92B",
  "key21": "fs4q8tJnxvBx7wrGYnKSqSf8UoK2kf7yeLbYMkLkvRCRRZLrStrdD5BW3C7cujXEc1mQbkpG4ZNubztZr4Mb7zQ",
  "key22": "zib5cT5jUKPiZ8ik57UEf529T7aUkQXuffJzU5STxEs8hYYugL9RYcYrF519owudPEPxVHTNrGPKtY2YEm3rD1x",
  "key23": "2nctBdgsvrNw5UmXN8WgNghqsQrCLqXhC4UCdCkvzaLLvnSqgBjgLtKGeJwpzxzuBgYHTdDSBaTsnL9mchdqnatg",
  "key24": "vKW2hxyUFUCuQ7m2EJsCmrJcrM2Kv6aHvEXBEjmm3cUGN5pC3X4M81zuCFfp13wp19CQhPwM4rZtUF7cB7j13ik",
  "key25": "5TjUXGvDDXLBtBZZBeMqG611UrKrMopREE6TYq3L9wE3TrMuBFbuqy9Xdj1is9qS5FvXzQbfS2XrEnEk1Uej2cpt",
  "key26": "64muVNfs7DRorW19ZxM8r5YaJz3RT8yMNU1hEXL9BJzTPyiGSSpiEgmx5HTFLtxTse1Z2SimypFjKPq2YGVih1sA",
  "key27": "5jg5QWzEAcgDe1a64fHjsSEYtsiKDTPygXLwRJ6HPcJ2aXfezEHoqmeE1o2qXHcYmALmX2ED8YviUs6hJsTAVYeN",
  "key28": "55ABuRYhNobXbwmX2rcNEakAoEt1YHb9em4u8PmJeQ1xtmE6NbYgdpiLQ479YXJjr48ay2mjG2FvuoAzBFXwFHQ4",
  "key29": "47HnQYbqoNtCB896AdnmESk4mfd2f1p2SVU4XKqdNTWyTSxHeQJHm7NF3scLLYcMg7oQEHmg4n8Ne2q41vPHFnXX",
  "key30": "mVwNMPFsRmeqZiNXaUUNhEAAWLmxzqMqXGaxo1xhscuH9kj8VnsFtWTyW12abSGZDHtJA35GrdSoPU9EuLPQtvG",
  "key31": "FMiUwe8kyDExTUjLzfSdeds715cbuAXGGajrEkwWxubtLFCzJzR8sNARbCaPCE9tfq3MqpsSXDh8rn2KHxSzuBN",
  "key32": "5pex3gv9CPTt7oi76HAnrSSZNeMRnNJ1B3S1EyE3N9UTuFkb2XJAX5z4WWD9GnB7zeotWFAmeu2937csHH7G8UWG",
  "key33": "Cps5X9bFa7zadAsFXNZrcTikSCAvVtLJyRxYGPn3BJDb5Ck2RbnE7uMv2cbUaZW8r9vJBwq7RSXmkq9ngWxepiY",
  "key34": "4ynRLPMo5CBzo2HAPeAJqWWXtPifZMmKhsTUpei5J4fX9xrJ9FTAtbsSK33HZ3raqTbBtDb8Xf6ZKAMe2XVzi8UA",
  "key35": "2X4zVU6fG95jRJd4EQ1FPytF9NkM5hYfvqEuGBB6B2RYHJnbr82KP9R4iHwrpUKsAtaG2QBCRZFta6T3iriR5pvV",
  "key36": "2UkVgieTp7ym8EymW76qZYxHu7u9MSSMikmVF8yBWjpaPbhHc5e8QFHocRVmLDtDEE6bH872jZJW955D57fmPNYH",
  "key37": "KcAUvXgmAhyiwcwcyDoez7rZSFfM9izvabEqRHiS95j9siSYGZUMYRm6a5zs7XBZaYLq69TdHXX72kiB8Jtzhy5",
  "key38": "4AxqAV8DhsLZrzYzrE1LoYZs69ZrmqKMdWzsaEFqD3JVArxnG1AVFKtZVGk48qozBsMvqzbbfu27ZcfBBCqnYhdZ",
  "key39": "4THkwz1NKePTU4EFHtD5K7KLfzE5U1sz5hryDnga6AVeJNLe1y7vs2vqCqpJR8u2R8TWM6MKaT96jnESfmgQBjBk",
  "key40": "3XdpjuB5nHXr2B5hJab6WvL5ARU8G6eHkuQygNpGXqE4tYpQCXZ7qVxy8c8cXnXfpnYQ9UAaFoNAAxGzBLMpincH",
  "key41": "3W6VZdhhYUJwf3awzvFDCQvK1PWKjNnhbvYKxfJFz71avByV2ctSBVmNbgVHnBDLF3xbGv3hPVRffU3AhwWWzkeS",
  "key42": "5XGAz8qu3oZvU8xu8ak4YurtDf2Rym18mkhAcxeArUS4eXQnAjzRkgSwwG9396HUwJb4wAz5v9T3Se1xDZZ5jCX2",
  "key43": "4wNK4noYKMWCEGUebaaRLHvbo85bJS2pQsG4Sk3CSBcVNsmVgyMGsGZr7vCymrTrVMjts9GYMkHvG7tMFaeEYjXC",
  "key44": "4jYTTPX46Txk28JeQFhDA3dD7j6GkXK1C5wKu5smC3JXKyu1Y5dwzKJQuj3ndRmCNFQZzr89fwfxD1YsERh3Z2RC"
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
