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
    "2neRHTuVsGZ7LNiwsi6CdoDe9HvTYjB8MbtAMzLMoH8QRnZAyFHzGLb9Vdjd79V5qAQELs4d9DnSfB8VJRZVydvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QzBnkYjCGK3psqbtUpkFJbYJmXnywWGwvVL4rtkeRMDNWHvfowjQiak6HsdUuVyvqkJoP8UHpecBkSfi5EDbp5",
  "key1": "J5HSAPv11Xx15C3YoeihvVFXVR55p5ZWJEhuVk248rhLFtH5F44YZa1bUHyzhGuvZLVVZMcnMcfqJ3V374oBx4w",
  "key2": "2LgMCPfMJGAjHrsVHEQoTYfFoK9TyXDkzkujaD8zAazPhSNXWRg3sc7DVEskcGWianF1Bm5s3TbFP4akw7v8pMUa",
  "key3": "3Qkye3Smz4qT3Pq57zp3HdDEy71crLTMLsdkptaV1jU4WcnuZdLAxHoAF9zFyoKtm76q1YPwZGTJUjHzKCKPNEX1",
  "key4": "3qJPWiejdq1fNHsBsWx67s7UeNjPofk6hHXEYkKo3NsigudmqC8KrmCszcVMJB79EEi4qauGzCWmKqgCpvTedxpW",
  "key5": "4eCQfPXb4mRjouseFfHWbw4GTtMjmnKCzC4YbUy3jiDxjwmWHy7fRxegx43rthwPd5UMs9XgMW76d1TRy8qo15aL",
  "key6": "5CAAvpGKQXEgxmw313Ez65zJU25WvR47BdyjKSTiWJ8cnR2hbEcbmJ8kBuy68j44jCBFDJsQ5v4AFS8HDTwLXjFh",
  "key7": "3DM2JyZxP1eHF2KzcPqBB8Xne8JEMQkbiRLsH8Tnt8BqgrwrhfvJTk8ky6ZHhm998jYLAB592p4wYXg63CuYiJ7p",
  "key8": "3q1fVWKKi3YV6vsq7sRyUoRFNqZ6GJU36v2ebBV6t7p4iBCRMUb6eyJ3YeYbpT2vgxd2iwUUs528VsetbkoJrzzu",
  "key9": "4fVCPrRgAyM7jrBPobSjSWZSRfhYyYK8Ayaya8JL2z1EJFR8o3E7T7twaoJuAZPU8Yd3YyxQj1R9KKZyqbtiU8X",
  "key10": "2yPQ7QsMYoUGcLKSXrDjvK6FcuTENiJG2kYzvRAx5vsNCgfhhJiiDCQ7xoVgM2d1Z88sf9Grmgugpb87NBPYxg5f",
  "key11": "4uNFE8w6Mrca7hkAhVhVf9MELDXkivwXXpS5ahzgqq3J75vkK5f2PQG5n9sk3JQGm8ddSkD14Te2wKGUG7j1oJHW",
  "key12": "ykQpV6iUCyMSRumhfXX3UwfnacFypnd7FjJmS3g33gtd3EqZGDapM9YGxGUtYNtDYWFpL9ZZfr29dnJ4czdChXn",
  "key13": "2HvLWd3v3tQUHzUpjmTXuLiWGk9Lv3gBNA7y2naXxFjMPhZrxEW8daADPseQmnJ7a38HbnyaAK1a3c2rayrhycr7",
  "key14": "54ekwxV9nvPEDdeBgoa2gcEVCExJUAhZ6kxPe74FP7GpMyUdpqyVBuPKVKGy18YXxL8hq6YRdwGKB7UndHh18JHs",
  "key15": "3hTUgcr3LhEj7GCQa8g5xaK8rxYFd7oKn256NfvfKNJ38F5gkGBerPGZs9rRC2WHfojdiihsBXA4aZFP4YpdGE6d",
  "key16": "5B6qBuCpg6vMFZWXzDs83mnEFHBdqSGBxMBKDEfaPH31cZAgT56kHEqBEXTi6AMDfxt7gH323axYCNDm3o5Kzzk6",
  "key17": "4jjv6naWhVhxrSTo7RP3U8nEsX9NEUg7o3u31M95Zw8zUFzVhYBLxzmjStCbXEyNoek5X3JjpuYikvWhuByEMW2d",
  "key18": "4JZ7qA4AGdUM6hUZLZMyz9dVwmqRNnB4K37kV4nggpRUAxj67Zgm97GF4rLtSAD45qkKZGSRnHJ4AkxdTLrYyEAJ",
  "key19": "5jzJfniwi5eCyPWEemD7yea9AumAgKspKfnP11GKz4WhH63vQAyZQwAXtDS3TpjvGcsFH61X7SHQ8QqsPkwreeXR",
  "key20": "5wDkykD9d3aSj3G52WmRcR2qUGmkynjjHXBT4C9oUaEzXogAJq7TgPJxYfDMppwqfs4q9t7uMYQCSDAh8wshi8Xm",
  "key21": "5ShczVosCjTWCgDVEkrhbje9zspDsGpfWiubPZnUrBfWKKgjnhPmdMDziNXtz9un3JNttHbEEsKqgf2kPcpi2kjT",
  "key22": "2mUkT3LtYjvzyRxcdcS8uP2J2P52W9dEVTqk9jtEoN8NQJhnoQGPa8UQFnjeWMUwbGHvGTfJpJEYVzTohTHwVKzk",
  "key23": "3ecxjPN8JHx4C5RD613n6iheKQ3FnYeochqUKZXUzbNmG1wQNfoa8RtFYSnhQzRsnj3RD6JtyrZ7Tsnq4tYrDcxa",
  "key24": "MFY5FvYcNvPq3M1eDQUHoSpAyzGbpSS2Bm7jqjHTeDU7tAmkR1zqjnYUiwmrgR9DAGeZ8zeQF4bWFyhLCsBoJNz",
  "key25": "3JUrDmuCsaroD1ybuaezCoV5vyu5noBnpzEY4MxNFPktPXqcA26vvm86o47FcHQ1rqNtmtdkZNbZK366Z4rqDMty",
  "key26": "5CGawMdL2E1ZWGx8ZBXY5UzhfqmVAV47bzfTDdM9z6PzM3od4gkuGoNULSjqQzaVTbwbYogMeQ1dGm1GjtbxCJ2G",
  "key27": "2CG6SCGZqdZ8VoCh8dnssYWcNTJCisuEjVq6Qcen96tBaKtEJdiwL5a2UssPTYMPgmX4hxkhSn31r3efXEG4Pxw6",
  "key28": "3MfkSffqpsdrs65BfXuJVY977s6gLXQNZ5sxHpyhceuH1tssAoSqMpU8VJdTdALYRoZGii1Z8ddzk69C6xfPXjPn",
  "key29": "2WZamdiamJJ3uaXjZMxnuYo1xkxkGBhFWm3gsCkfXMEhKrUoZavhhhsKqajcpkR6puuWaP3X4SqCfiS4WY4XjVSu",
  "key30": "gx22kcMLbrffw18pF6zodNm5C9jahcscxcZRmBLrhw2mW61gDQU2A9oU1855qvWJZ7zhgqQjkgrQ3pthMNb9u8t",
  "key31": "sg8iFzH1MwVhrPsXfGcoY8bvERtPB9EurRsbZ2xGKFQbT7XBJX1Urra89pC9rdkiq7aHUVQxwrsGy8YHpAz2QRa",
  "key32": "3qJ4YFETRMdbtq4gTmpswQTkzpyv1mzR8FfeyspkwbZjRqgaCcnirXQuA7PkiLzbTQByrDNZL7mhNv4RnRJxgXMc",
  "key33": "3BksgzGeFnTWV8WZi1ak93Etkpbb2soYx3QowtH1Yrjc3BvaQy3wg2ixYReiEwRsNg5mo2WrHzKnvDamXQJcaCke",
  "key34": "5zw8C3ZTdiY49VAJ38xNpsCRLKeHXRfSc7wbcKUDMLadc8wqNVPT6YmtqyjGoEoKjndiwiTACnGY7u3qTUMGkX8j",
  "key35": "4ESeTqtAtwihiDuiV9Ksorm3boyNzu73kinTtxv4ibiPGDN6ynWksaeWMd68ZbE8hfB4ZHsEQE7yZKjRotd4wCCP",
  "key36": "3chmVi57EeU2dDNiXvMDrJWHFxbfRPgkTynehyu9VTpQAsbCLLbf65m3nCnXjatzFyHb8x81Cu8TgbS8CecAr7SB",
  "key37": "2ga6i5jaUvJWvDTo3brZUPWsMgixWevU2VYZzJFqapt8taGH4hLJXdEqcH9iCLbXhLGsZJwXXNHsKsyWCv7UgqmX",
  "key38": "4iyZKyAqdPT8UetgtuKtMks8jvC1inPE5Ysq4a8EkjY9HSFihfEHMA4qLWS4e2rEHfficCrFLWwbNvKnFcKdwevq",
  "key39": "5Z23bqSFcfGffaAPtQa7gti6rXX6RkuAs69SY1jJA16Ym4531AwtmPpXYT1SQRBRWzKQWgMe4RkbzTCkisnm73ca",
  "key40": "4GWJNjxCan9sqBVj8BWdLcT4YfmAPrgxcoDrAANrb6fTxdAdCeSQQM3EfRzr9pwhn32qRrLF6JjemvCX3P2CnWtP",
  "key41": "2SHa2fDVmosrM78KNMfDWXfWVMZXbpe48myXdFnctUXgNQyPHcFAqhqtjg9y6qbhgPBai6NtWeh5DpNk5ZKV5aFb",
  "key42": "3aRTknAPYEGHyFiJpXZEbsUSo56X5AXfYbHC5un9MTnLeG2EdF4izRxbn7cKL8AhEhxg5uMMaLebmRDsNJQXKFDt",
  "key43": "97hGbsqrENGXEYvzN83moWdXRan7M4839fZXp6G5NKVMSfc9oVXDXkXX6pWW7eH8xsjotXzxD72RkQTCQ1A7GHG",
  "key44": "5DYSqBfBiUregpG9JLH5KM2PeagPgMkeM3i6u1GbxaQbHNiSu51yf4bdkCd351iQTYegBF2grzTHfbEtCxwvmWKR",
  "key45": "2QyYv4V1Z55QEZueV8ZLdraBnN5T3KHEKa6AsvMTfUNnkzfk6wa2r7bY3fXm23kAYmHKPTyqnt6gTfDQ9DwrrYa3"
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
