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
    "4SZxjzYfTXTvK8cP8cKwXnxpGxgEQtmvx5UCFwDyi48isn7PQw9HiHBQS7aEhXTavpo7EYieKfwy4T6usKjajBKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u4Z8pDbVSiSYBDNd2dzuYZX6meRhoVEv4N5PuCLehqbSMrdTKc92vBAWAQfape98o53bYNiKqKwrjyw8ywKj3Mx",
  "key1": "3tpexD5J49t8mXQxUG53HDwgtCVUSmvDwxaLiGcNZemh5M9s9RkHS1PSpXgsK25QAoAohMb78MYNb7UH454JDyzx",
  "key2": "5FCCoWSrDgsqLXd2kYe6G5Mv63mDRCEubRmQFCQbpHC44gJ4xfUKdVhf1r8VpQeTRz4tLNChqh1jNCZ1FhxGxqHS",
  "key3": "3vU5nGj9AtGS4M7n6S6SHB6N21RiqWWA13GYKyEjuoZeEv2dzNMhfRDxt4gZWLU7K5cvbfDsmaKx1zntwjQdkqTT",
  "key4": "54B96ZwsuzpdHjXZ8Gnzb8q56ukFjYRKRzcPeKWZVBzyW8L4o9vvQRRMyxviQbbkEp6hUVUjCASeJAwTog6cVZmh",
  "key5": "3ZVkJQFW5c8gQFFyENUhndox41JuJ8rwjEQPb6Sa7ndMRBqBzvtuMA48MTey4n6SQ3QwcYVo4nN8uAHsS25EuURk",
  "key6": "5nygbeoYWjTRscM1FWFbLAxeeKnVpsqWEVZvrYWco41BBqhMXaBVNFv8fx599k6geWYFu5GD7Aeth7R5QrUAZgci",
  "key7": "5Le7dgCMFzeQrpxoUpGonhByQLqSHvqUqkNQW24D4kEKbuc4zcFYZw7shs3MAvufgWGaVe6RPGUJJeGJ6KdSfZ53",
  "key8": "5KJXf4EmUBqYa7XMHq25RbqdsXt8cGNqxLQCWgc6AMdmgTypYUuYq8wSS2VGJVs51dEEUA5XSiCcw9mKnfQ3yWEB",
  "key9": "5jn43nWfJz9i1gn4MGi6ttZf14ZfCUvYmcboi2qQVMjULbMqtBo9Ky8UQYEpL9bTkvmEg4iPQiX4UjvNegE8W8uv",
  "key10": "mTebMVMrJ4sTVtjjgnAWU8Rx4EDAkHipppEyTK7oGZRtRPPoUcghTjBcLBsxuQ8MYXLRX5MkXNHQ8DVHMNaqWMs",
  "key11": "21QvEWAFUJQoRwQz586SobAFQLdBPCM4nxGkMQ31yVyCp4wkhgmSCQhJPyKygUyCorgVr2BXkLbgtVZPPeo9rULg",
  "key12": "5tyv7cav2iGmHLA3TUNiYGy8UaHvStWUSzADoJB9MkkDFhrATuLiFFjoWK7GAsZ4HeCNfXJMwa3aRhinYWiz2wRU",
  "key13": "3C7vURV676LSGKLdBbCdwsinzDMpkx949C5Q5qi25aXKogEcBcNjBhfEA3jEe6DrULJ3rfQ9F1h6bwbZQsgdA4KC",
  "key14": "2neysykAX647wZx24Hz8dRdEEBfjDP8398iGSCzP5fWaK8o2zzFRA8T1QRGziVzU2bAMvZAArKpRzJEdZ5Dixwp5",
  "key15": "5uJ89cXiFVkuLrm7cGgw5NZHjWdZvbwjaXDAnQezT8ZyRjvtzj9wgXVdQBKSg21sQ2tRBnSJveQ5te7EBQvdc6Vk",
  "key16": "4ZX8GpurZd93Jd7pTh56hvAMJuV2CifrfpXg8VPj6pRn1CXG5Q1QqA6ALJxnSrsk72foDktYiVFrhK1h2ZgZG9Fd",
  "key17": "41oXMNEHR1xBSR2E6zicB2CDkj8bfNRY1Y4mtNNeF6BuGVUM1eDS4EjXHu9pDy1k4iDQ4PDo6oYbepVN5HQ1vRGP",
  "key18": "5C1qMyubLRniTaErfQgCQiZWmt7VzQnbFZsX6mJSA4LAGmSUxagWMktGpdBqNyTva4UiTtMeByKTujz6nJyozQMN",
  "key19": "63eV26RCuADF1QkmmenzEqu3L38N5DvBxWaksdky5fouPZGNVhkNhS2HTr81LpcT7x9dVfEMdxtmBZnqEPkZSY3n",
  "key20": "3i1dWSjWLKn19fT7nQ5EDiRqpqkunKPaPEQyRMsN4U8DS8ufbYnfXnXhzy3Pkpo98kQJVJoCcBL4jvRmAcZDGZM6",
  "key21": "4KMUHbpbboR4S7xPuUV53dHR24B9otQd9qRo3LprPoAqz1iNoUDuCUpAY7JG4qntcpQP1z3EBTceJK72DXAHn6RW",
  "key22": "58WiFm5NmFrqHK2sQ5qreBiYJd4uGqVe1XHhsmiaGpyhQc8Po451Q1pKZfE56CT8reznNQKDrHCeXbkpk2wKkG6e",
  "key23": "3588qZ23z3n2PEM77c5fU2cZKfjZT9kwdXhbfaXLtKysbf2kicCbtU7sTqXZGBKLtsABHowLsUJw9VYNLUKMHf3W",
  "key24": "4PGJ493tZQTQAgvBShKaRwPhbZMcJ1L7kdJQatNCqzU4Lt39nY5jREA9bxGKdhettu7E1w7dHYYiDrLC5CzJeZ6h"
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
