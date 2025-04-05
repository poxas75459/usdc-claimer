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
    "51MMj4aYYq6wfeiRyowNsjqwo2WH1454S2YBAHJ4zFk7wFzBLQDjynNPyPdGxG5iAy2jpsKRHnd4inXcwGGumqaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C8Kb8PQUs3AkBjT4efnhwCwH3memmRDDsMcgGYFd639KxLuQRC5BENbKQLAAJpqpuG1CYCfm2z6u4qyfy2XzwGr",
  "key1": "3pnVjaSNtV6D8pn93qMBYMkkqaJZ5D5admzibNF13qzdV38XYkkuYRNjruv9cyPgE4nHctVTwnwQKKzeJzkgWzJP",
  "key2": "48LYVyLdRzFD8hqFHn1QWFPwyftRLnZUgzdhK81cuZofJ6f2LB2M9FVW9dXGYnJs5bKyaSnxpacgpNba3PdSw8Hi",
  "key3": "4aZQ4gxng7aAP4NUcWYoyyfGZdjTtWzDxEgwKmErTRuS452PDpKgQDj7kqZDbSCT1bAXtRiCo6bu5TGsDdhHnGbn",
  "key4": "4YYsW1n7ZYxSeAne8S9ps7zHZ5kXTmcXDx4WuFYG8e5qedY4h2KdVhQK6GmNrmUu9bf3QVttKeUotkYhPj2P2e1s",
  "key5": "4nbnzkFqG6Ar14jTWzBr66kAgqcA1GP2mzQMQLG7qveHkJzT4JEUmwgFAPMDDwY34fopKUHVQfmRv8sfwPxSHrR9",
  "key6": "5B1g1mjpybPVfoXuSb8F7ieX84M7hsWgGVwENzMwULWspHYpXtvEHMAqNtdkRi6JmDa4wVfjt91P39j39TUr7Pt7",
  "key7": "YDvZZsm9oMnyWAkWSZuTB6jnLntfd8UJ3QDF1UisNwEm3kmcxEo8rL4eTAL9XfKs9sndCdEVSU9Zi5pzo6m9iad",
  "key8": "37KrCT2i5476PgMNRZnVksSa7AoTwGiMcT5iUMSyFxyL5R729NCca4D37MeNMQCcGXZHy25egQf1ro9ThSSyFU8U",
  "key9": "3c1Q4yExnHwWufkweUBNyEcGYuUGonrcGyX3x5tm7TTCdiM9rzW5WssNjGtUx6BDVPDU5MatXbCX6QFV1SmFrTqP",
  "key10": "5LkCAyPRwqvpouU3e4Lze2U325gAiGG75YTbkLWEX4c5TJqeKjjfyA34cuNXFwEk8pNx9Wt4v5WCwcoGrQrYx3n1",
  "key11": "nNKa5tJ1kemnXRmVB34i6RBfJka5Hxv3rBp9HJk3bHEEy41moENDfGvwCU2SvEkyeU8N9j2wpumrPDKASpYp6Dx",
  "key12": "5to515CVFUBfLEKMxKzmMwqQcbpYEcJFopZ2fFLCQvVYnaj1hVHNafRTaA2Gwb9XYQXh44bxhm5BJH7dhmRpYwa",
  "key13": "6cQJT5c6uwniay8NpFzUZaeSqiCD9ZFYwQGiXuuvbgNkC7Lhb2iS8Qo8ZXBQsDfRRzvhuZuhVnSTHyDZH8HEuBh",
  "key14": "33zTZEdCowETkwpvnburUqPiTYbPA5W2nWKuJ2kcD7jKZE2daxRPGvTkmtBzF2N4ajXZcFi5Ryc2PaQM9UPxvyvU",
  "key15": "2BB88KK6tTSVcQfMsnwi4RnXGYJCNxGzk6NdYHckKSSWrBQ73JsPDEoyGNkPSqGP5SLdpe8J9JWdvJsAhprq7de1",
  "key16": "4xH3eikH73Yt5DjEvJxtx2qoUdF2Q3c719kodxbgmmQQK5ExWmSCm7DbFfTQr7BqoefQWZo9WKrNCgpvn3RNcJvw",
  "key17": "4zXARr98diQBpUue8bDQG97Vdvx8bv5tjrjshSvGBd2nCrvNMRGQ4id34evQAGNzUbFuPAhSzUUMvKWvdbtQsHaN",
  "key18": "3AYgevE35ya1jPnB4tfPDXzxbDozHtbJcEWwAB52EKNuZ2CfspvkbKJNqGCBpzacRckczdwhGBzkTJypoX7v8XLq",
  "key19": "59X3exoCRguUsPQFP2GpaT8SZatCNNw2wvLt2uQ7ygBJwGpr6W1y6HqCtPxnyGwibSH9YmytxYtTd7aq7iKcMCrL",
  "key20": "XLdRLky23BZCFDpyjRsARfS6FzL6djpRvod25bP33g3TkJL9u8DdUbRHqWbDyNwNytMk9QGYzm1vudwTYGeSyzc",
  "key21": "66h52UBuvC6wta8MYVG6zy9jnLaqB8Z7xr558BgUgiBK2z72hkEnYG7W9RKvQ8ETrPstDvywTxkw322HwF3NniVF",
  "key22": "369MqKXgWe6jo43BGsWLUEVAHiLQoVDvmctm5psCuvwacRcTPxZRHik273tGSLQ753UKMKBTYeU9WDLNqhhVV2L5",
  "key23": "485v4HYqT7MMRfMZQZBHKptebnGuEgXqSBjb7zve3tSi1MiuLFBABwdVGCkkzuiK93fY2BDDcu2o5Ebp2kQqu6uV",
  "key24": "4bmCcqLXHmSVi1npsiNM8YeuH9gjKupjJ3d1kFyKoPrZLoKh81omCQRL7MvSvTKN2hrYSYCQAZEG9ZTjg5ZCKgv2",
  "key25": "3DaqGuxyiJQLxk8uhhZnPphDTXHjPoQL8PN15oTftmFyLyA6cceUa3MMQx36SZZgMZM8kEpmDybxJsBNUY3QiuBM",
  "key26": "MEWcRPsfdjwjgniMK76s4eVSmt41wMo7dFynUmCRi8D6fagFtaE9sLRfc5XvmxmECsZMz4bXPoL8CYZGAsL9ujQ",
  "key27": "2Dk776dmsm9KPaMf4nQaf8n8T7xDCHTnsQFhcdyCgGnaMucXLaydbVbRzSFAEEyej1jrpkzRZTWzG5VLkV7VsCVq",
  "key28": "4JxEwVvpiqpMcXFStqgBz2AWVn5Mo1jHT32MBrYXm3JXJtZrVg3Aaqt3RN2HkY1w1E3M1ogResBshMNi4cXm94RY",
  "key29": "3jksBaL2nyRhdLb1E8yaYNipgagGLsycUZnQaehs8tWLKryC2ikq8Va2hzFjQAEg7Vgazs4uuUQh1Qjt7tTVvE6y",
  "key30": "37suUnJLLYmNgF9z5Syy6dB84pa7aKuSDhnaGMHF4Pq5ujpyBfzLLxZDmq2Vw95GN5STWyRA5KCBoLn3a7Z4nrJA",
  "key31": "3Tvv2J3xNGF5G2LQ4Aej6QkE5n8P7EveSQoxCLqQRhiswzpGngnNCwT5C2moAvgdv9HRMB2YwvqiB5MH1Xjf96vY"
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
