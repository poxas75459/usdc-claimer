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
    "drp74EW6kvbAFW5WbNEEW6ppHJFHyfQVjhi7xE3A2kd5uoycYrLhneMi2XmFkBY74rD73BBwQcgJqFJaJLWocVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L1FqgQ514iMGt7c62K5J9hQ5Z57DHK5QsokDUvaDa1KvhihyyK1JjDo54tToFeh25eX32aBtFMNshw7KSfLWJZg",
  "key1": "49N5CTkqcUYBzudSyhQsabFr5xNaonJkTyVY7dSjhxQVPo8pHQC8XNfvKXvwU3jKUmYLRESY4x9UkqKPDBu3z9Ap",
  "key2": "4FczetZxF8RVeBHEvKymAoD1yww4hWYNrDqgdKDzToZy7VNqNfFdUpohhjmaCWE67f2cVoCU9DzeJRYFgyYGyjm6",
  "key3": "E7sJ7DQeSrxDY1Gb1MPSWjXZ6Y6sH3quoXZWzMZa1KVHEHqU3xE7KcSCBR15DgL2fpMAjnMzbGAf8JC42XSjTCY",
  "key4": "3K6cjLd9F21YibwJU3CcBJevQXiAsN3HGa626SqYiWzConwfXtFyWKwvH3SBwuSXktoHoMJxKc5c4W9mwjtzyDVy",
  "key5": "37VJdd9qUpu3NVhiXNah2iBXTy1PpVDYfh9XQskrgYve55wLbjkrWPZv6CBkWXnJF1PK1eHXPcFdqCWQd1t3TCzW",
  "key6": "4Jo1XdkhDhTfSYGkLiHELCw3X46XUGiqPK3MLMZBZHjJV4neou5dLWQUDsB563raLV3iowGvSo2LYrc47ypkWHMD",
  "key7": "5vxb2FRfgKF6n5ZvhXZss3iJ82dFfnzRWvgoZNcm5GXo5szK2cm7hnyHejuwqcGc2AiTMBJiioYuCQn1vHperVx6",
  "key8": "3FFD3aWcxASZep98m5J38QG4C6wtxpyj5N6kZxFfHHjwxKJSce5NWLkD3PuTWWwk1ZqkskKtVhyAZqBjmFQ22YAU",
  "key9": "4uMqgAXpvokp3ebuFCxyorwcoafDnc3hyGUoUDgx72oPv72DBW3qTjgmcWJvzPrHkjb6jsXR4Aenp6qL2Xq7eQrr",
  "key10": "5o6e9FnEa3B54C7w5ZD6rdoSKQvCrNbhWQdPTwx3oDisA7LXm8eBfxvQeKtTqZAdgsNmczh6UvvZZb9nu54fu89g",
  "key11": "AyLJbPjgtAw2GKEWpAbqp6EeyCSk1wdVHi8rCBWdDrFySuLTLtVBPge6d7uypPUc3abo1uhrXKmWZ4sPqJbXSJg",
  "key12": "25USQyGtiaJDFqcxQXFiibpxErtFhB99DmdKZwQxh6Mo6z1AHhxLmNmm9mbPyVgi8mQkFvNsZRBJMroZmLPe6BPS",
  "key13": "33Jyb5gRktWg2RyNiTSK1taScCdYJf16iXkCx68um5zGdYqv4ciVEoMpRz369qnE8DVbGkEfi57B2Dza87KDNTLD",
  "key14": "2kfoHMH4YAfUp7Q6ZuQAHNVWZkC9rmB8TaFzUUj5hYNzQVS5XRgx6qgtYoAcbeLt12ycs7issBJgPsX3Asn5ekQi",
  "key15": "2aS3jAvkRmBoXww7aJLZ7oJRsJajFSjPgdT56wyXfdcH3TvCw3bRhaMNnJRqsrESTRCTr4wWTBBxMx2T7BuyMc9o",
  "key16": "59KKU5KKrinxSSJGPhkeUxynQ7MxnhobQCZrLuui6MRBjFZbMkYbe5wAreUz3F3NJTzYneHAfnvP469TbLi3XGkF",
  "key17": "3zMvbkcJUYhtjrWuAGSnN4SAwQgL7wYYs3XkXqHQwqPoiWUjhFvpK6L3VjcgxfiteorsXNGp2tsk1VYazb1ZKb4f",
  "key18": "4ahLM8pZWvSu11qxr1gjB4Q1xJcMGZefY2a8ZDNajeYbfhhzsZoQ6b98LuP4mc384jhmCSqtnQMiwVRphwKKztX2",
  "key19": "3dqkmqoRbXwDv3yAJ7daNudqRPquNxS9iXarHZUBJVNesGGvjFkGRTkJZixDLz7tYMps4tQXUpFJ1uWFFbPRy5YW",
  "key20": "2vKXjyaA2cgo13yiSGby72zdj1q9PQaYAsqPzTqsViXYCuPqxWEP9qmWF8AuKMFHGXSiN4exhWuodA2ipNk4d3cv",
  "key21": "63tecZHF6cRpNqERgDQXyFKdGKUoD6b5TFxsBUmVE57UCKVVPo7gG3jPXYiDrqJZVUZx4zwxxQt3SYQwEyjGZWtm",
  "key22": "4wxDGMgSfrgs9QJWbm1qc98ZtmWhLRAwg7JSVxEw8bjMcU97jxFWUoWVSGDYqxtDAjg9KJ2UCNhVz7x1piJmqNpY",
  "key23": "24QH9s8DZjDugEKRhVCYr1ymPhvVgXP1mgHbta3j2uaWqZor7w21hazm5LixWUABUTenQQVzcS6YVvYcmTpbaw5w",
  "key24": "33C9qunfj8Vpz8SzHGnPsrfKAJbTtAYWY2NsXCxgaqtC6b9SDWDD3DSKNA9de9eqK8gEZ98phpSp9bhwa6CiKGjK",
  "key25": "43M99aCw1dGkDqTSdHM6EeTakzcmy1UL8CSB3t2dDkJXQNWGHbkbgvww9FPJvEwcwpB8uX2pVWmPgNmizj1pK2kU",
  "key26": "2DxZqKTq5SvKmUEZ5K65HKH49nXQVod9ztz5YXUdTQNUUzuqbGXmUs8YVQG43PuhwrAtW12KKHpnzhZ4HLPrnQ7F",
  "key27": "4GZ9XZ9xjmvb5qbKapyuW1H7gie68UWuPoF22ysLzDk2U8Yu9aQj5HfV3V5cwtsuK9uyU8KnYLQHjXf6FgqkqdaA",
  "key28": "4QFVJah3hsoYWp7D2gak7piPcVUJEFiwT67LbPhpsKb1cUbaVzYiETtT5VKptoqervkeyBcnaUgQK2vGGNFt87Xu",
  "key29": "3SFK2byTzb2nwpJjxNqi12BdtvHxBL1MvAxY7RTDys3WVEWEPCq7YX8YBSdwm4rmX6Z9bj6TmScF2padRiVUzDbr",
  "key30": "5uaZBngWgCgDM1NiVJZ1kXycSHtTVk7uSNGZSzfRALE3YeeZeVQtUgEYcH2KYQ1gBirXXYJysXwDvDMfY7AtTdKf",
  "key31": "64iUptkjV74gc9TLXVhFVAQ3HzE9z5EbHTCsA1eGou9HeuS2xyoPNKpgkeXwgUDXjcN88E52z6PPwDy5DuoJTi4Y",
  "key32": "2pzeXx7ahAKM8dDY9h2ucdN7p5brvs8L1n5qoA2koNFvPu5QUgNQ868XmU4Rff2BEh4z3GqML5rsroAmRcbFkVc4",
  "key33": "CtNKbWu1GuEsUon67M9tqLxSbJiTwto1KtaY7az3oukR55NPhbo7ow7w7EiPEy6ddJJKe115G7mg2z92jnshvaZ",
  "key34": "3AuhTme877LwesR5bFNPfMXuA4jqmgJh2ZMVxPGcDimFs4oagV8MZV7L2qfm2nBWFTKVrm4dEmqcTD6LDMJME3tf",
  "key35": "6rVWv1hkFoq9H9evRHAieQZmodPUnonaZzUDVd9Cq2iXn1yatkg774o38Nr45aasGnF2QUFk2az6AVGexwECt6P"
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
