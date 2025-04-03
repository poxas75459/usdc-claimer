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
    "Gm3dCm3MGxSjF8inqpZ5LnSXJnfsWV4nEgnnWpZQpeoizzBkp3ctALVbPBnXomeukECd46UneReuwUcG3Dx89xU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zdHFfRGqHZghKzTXb1puR5sFQcfmPZF78uUNzdiidZXTqBisNN7DZjz78BJeYHQL8euhFPmArMDbbCvaZEdjYBE",
  "key1": "54vhP8g73Any7YpxzoDnEujNtx3tgAipEhrJcmTLDrz5TXuCu7EwpjGrzx3RPwySDcSF5SNj6NRJJdziCC9Jja6M",
  "key2": "1154ygYtkvjX7Rv3VReJHbVwfKgMApvQ2rzz74ZgF5Fa7tkV8dT9vDBVsd8qtxo4KBEGxJpnv2XV4i26MnQczJd",
  "key3": "3JHSe8TCDzSjZfzQZMXZnAWHGu4rmAFq33eScNTv6vNN7gRWLG3NFwyqe4vDiCLcYVt4wfhhmm8mNKaxQf8JqSfU",
  "key4": "4skL5oPYw8B82VmMrspFKDdWd6HfEayaJCweQMAsnGfdbuutdSSdurGkZQ8v95o1FgyJbbtxVBUhCQ7VpCQJBeun",
  "key5": "ywTSZhvX4rWS6ZqqKK3dsafmiV2D6xYc99p8VV2MN6iDjPgdwU8oB2yazVeCVbu7ydwrJz1HfZxVDnJd7cf21C3",
  "key6": "3zLLpudA6WjCqwpKFiL3CYcQdeUbTjmJq3v8HhZRjgYnqyxvYNm9zcUhtnWkXEZd8ZoeHmGthFoerSWAcB6qcJGK",
  "key7": "nnfrj8tN7yxfe3Z7VEoYsN9UBUwq6zGd9qyHpy2mmWi5zkTGGfCSySdnz4cCiqeghvRN7TjWDt68nW64YgXtnx9",
  "key8": "EX6VJRTq6KnnbfRS64HMqjTMfhPyGiAzDqWL5BKbdtnSpTbUjeqyJw5F939TeidZ36BpcxNMawN36tk5vBk3Yjc",
  "key9": "3VLU9JbMJE5HFw7QTZHiUrYr1zuoFMZJL4r4CiEJP5dHzgeLG2UgdCHfQjafE8Uvjp2t3kQPxn6oHazNyZkFYVbS",
  "key10": "2AGexcb76o1ncV73UQyMjYVSDvko2D6aVUt4neYKexBVL2BEa5wjHYFJdudtCq3G5aXtRiCvQYmLELLR99yMZeBW",
  "key11": "23g67aT9rgszYTWAUwYNK4eS8gMgQKRGv2a2fcq2hMgfuAj5jhHg1UpF4xtWr5CctzV9AwAakbvFceVUy23J2YA1",
  "key12": "T4GVfVy4TVZbpHjHdnLTYqsgPEwZwzjz3t1Y5zjF3BmKuU1kDrnLmG68RDY8PrigxKxHvVGm93iGX9yt8XRdTqi",
  "key13": "51CDYJNJKZw9eMRRHDm76Se5vUREC5HF2WUWEGQJwd9nK36vLrnJMjrZoRcMtbyZZZcemUByehTgirv1KDVWTDGB",
  "key14": "5iYxGxkYBpx6HmD2wDRNGq672xmxAKWjZRwkdyKNRfv3NmqKhPzq2qTiXCv63sp2L1FTWEErM6poHszJX6SgsRAX",
  "key15": "4Q4xsjKztPW4Ga8JhMxTpbCoBHPtk7Y9PSo6bCS3cwWRwm7zPdYf6wHg58sy8XkPJGsuCwk51XwZMCCp1SLYrVbM",
  "key16": "rm5Uspa4KNtr5M8HKfyM5bftGEoaqmjEzA9fafV6acMRwA2drDiVFgQeRTd4Bhxv7DwYWC8HtK9yG5HrPA4yvwd",
  "key17": "mpy2DRhrUeSk9YXbfoVzdCj2Mx79NfELibDVB5u6cNzqsqZwuYetkeNWErWSJHdWPPP3YNANZzESGCw7vRX3aCs",
  "key18": "PGvrriHjEu9EiNEDwktLnKXRXZN9c8uehoLt8AGGngTsJweCxo6SpbjqXhifzoq4NVhukpVq9t48TMhYUtmXdzm",
  "key19": "3CxH1GMqwAE1rxnoktWhuVkZfDyNYEGRBcQyZifNVft52G2dNqBjyYudSX3vbpfcC7nHzoK7U1Eqi9PPjTyK9pZ9",
  "key20": "2aNtWY2tZQic7tkG8wRjWNZrssKNvps4mGPHJ1rZTVAa6R5YVXT5o6uTLDJTBswDQcZPML4EbYRk6aULdRGpTdRa",
  "key21": "5kPhUJdF5Fb3xL3ZikwuGcdV5hCueE1HnNRG8W5vKHQKRG4jDdJHHCn24kJ89y5FEFaGW256CGdQyvR2fmwovR6X",
  "key22": "4DFFeTTQAAgfrsRB8519EAx6ViXYtbv6KfGfD1G8UHgjLY3tTXCGjMz8Z6cwXMNqnw7QVQUBfs4dpoCWq7bZKpwD",
  "key23": "hRtVux3PPAUdMJ3Mt6knXork2vE3uNf2gchj747uh5qXN5KdSHJ48HzKUwXy6z82oqq5D9WghTsJR5xohodni41",
  "key24": "4QFnW8DZkhq4mbDL6yqT4kxcXAjyQmFAyCD8zAzHZencz9pgBcWv1ibqBvfZXkk7BWLUNjLc1qzWw7K3BJoW4xDL",
  "key25": "3LHStbsEQ2F7kCkJiqowxRh3BaTWPQjwEARgzZLGQr6rSCKtyaWBYHdSZDaSKqp9XVyRHZ7ZzVuEhv5exLTzZ36P"
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
