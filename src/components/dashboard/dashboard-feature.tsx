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
    "24k4biDZuc6PKxzQ3XfPgNETT5AHcZgQiNnFTx97ujJxntgtyZ1PChZ6ezkcsNDXhgqXqRGvPjEqQeQzxW7y1knn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ci8ySRtwcYdwem8xs7fbQhuGd8r55JKYKLevFAP7AiWzjm8vH76y5Desw5BDrn1PekiRQKVXPcGosnW8EKjVaR",
  "key1": "xxY5Znya39C3bqCyri7U1MnB3YjQJJsohJhXBor3qSV4wVe8ECdxJWPmjgAzdKuj7TE9Rpnk1GCzcJkQMKz1ZYf",
  "key2": "5H2GUYsh4n6LatjzwFagZB61E44LGJdnojG5qzgaBbqC6CWBWvks2P96JNmD2GKdwbscWTnRzTt94MPCQhQVcYgn",
  "key3": "4jNhekSFawnxEfzQjw4gNgmpBtmSCkpiTgJUhPeu9AuW5yjLtkrnNNJDL2u6YfsgiRhiwDUQ7AHaL5wxgtSpu6DV",
  "key4": "3cHREGfnu2pxLpkPu7is4Q3kidLZbGFD7s62Wwm1TngPL62WeFqbUo9VgoJpqvWYyrVA7X7i1Y4SBgDUotQgHvJa",
  "key5": "3pu2zqWFZCV6qWsckgcocivpkLBQCdeJA7D36aQvBK96g3vbXfGkrU753cpANstfjnBvTyE8dsmp6k242i1fNtTe",
  "key6": "4esQuAa6Qzwn3NwLhyTHNbba8jKTTAFQw8jPNk9KpC7S87GqSsXg6pTd4sikoEQ7X4BQo1RRxScBgJMoKBqkXKQK",
  "key7": "5cozAyfgk8BTiKe8bbhFFebTUUFMkGeYDrjh6rXrTTiiKj21Abn3HfZXyHH6878HXY6BhxgWfXbSNwsEH2jvhDUn",
  "key8": "5kEi8PDD9VaTsHqBB8iUYKTE5CHKM4JoFcFWsnaogk7PzwwSJDa2PDzEasztUMsvZHoxBA5PrndufFJookfRkMsQ",
  "key9": "65rvUYMu1q4XwnuDBLVGZ8K9fqChjDQFGTjvAT65Um1jLrZddGvLKUdNhzqyUGvk9TsrxjJcpobHhHwXGWQmnkgg",
  "key10": "2Pv11D9J6KcBFWpM4k1GAZ59hQMaGfQcn1pDvAtVxH3AhTk3Ythrv7AthpaiW5napv8bF2ik2KbVSYz8gENx6EpE",
  "key11": "47hWc47TYLzuf8aUGcVHDsUuqiEGsTCwYR2Yws4zg5mXHXn6NsE3oqSSq7GexzGY2umkyjveY88Jyc5HThj5yT8",
  "key12": "5c8k5RzrzFoWxHzB4TFem13zSqi2F9gSasSVHRHnUs1hP2q5GtZdQnFHjYiJ3FFr7uwZqScuXKThRqccrg23943r",
  "key13": "32XxmxK8QbdouTdAPUSq4V1XyA1cYPaHm9fFkA2DjnCp5Ba8G3EBKGUswRffQjAzBD5V9nUhKJb8BRHPrGKzX8BV",
  "key14": "66eAYfrnGVbxUEJfmFs5yiNU5vJU7JtmfCZBgwR58Qk4JJ32PunAyoPihfSVZ1gsSQWf4MrDtqXJhiDgxD1jnDAe",
  "key15": "5RBZ3RezEYt5SBeusKsviD6C9QPiApcWkBw5Rpt2QfgepR3iaUuQzxWDzd3WZgN2XB3U15MhScBQL9ed3RvhDcmR",
  "key16": "2HRVsRpYiN7Y4XtRiEuZapayoL9vukTcHdthY5QtxjjHmgDTQ4DWLyY3aAUqhqQdCvb8EiEuNJ7JPjmnpT8P4n2P",
  "key17": "56r5bDUS6hv9xSRN6qUcjSiDgjyFqXopYKU19UabkbhZBaFTTg6rNY8LfTUsLN9XxmPX38pD5YEKPCSWh3y6s8hZ",
  "key18": "4Y2RyLQgCRTuQDUaN3mhRRHbjkL7jKfJzPpBcYT3rsfkiQsq2pgbfNpyZgvKhP5snYD8qoL9EPZRUay6VV6Q9vT6",
  "key19": "55ou2WnnvXcYH1bZLN2aMaqs3dTromLJf11vaZ6AKq3QduF2efBVzhdAhggAVKgpdFWjbSoGZjNWY9J3GYQBqtz1",
  "key20": "3ytb2pwME8xBAhaRnTgdmwHdB8hS2FKjj6T2wfPReUHCRnivJjbUEBqwAWgo4ySRP6c3So23av7JSfYz6V8Co2Vm",
  "key21": "5v1sLgspcAx3oo2YGNo9Ak1pq9GaJUpUfFh2S7jNbaLJygKRcPEW8btvLf1Etb4VXeAmATNDX1SJxuoii6ywW87k",
  "key22": "2uBTrMdYUK3iiDjnN3iYzvgKFsaKsExCfajw59o9XdKuJ9UXDKhbCHrbeXfD4CGgBZYhAMupfL2yvZfRvVHjMp7W",
  "key23": "5C7Tgn3JE2X7Nsq7zipaMrw7wDaTkuE4g7pYM2AfDQBX9NQAJ7pT5joEBAgzvvkbikQTy4ohovpbQdrY1KtdaSPo",
  "key24": "2xJ4GDx7yKwYrfqAHKmBzmszf1yDU2DqkfzhAEC8CEZuEbowYCxgXT1yqcBwmj2A6rTPa7X7eto8KLo1MHqH2sDb",
  "key25": "QsZxxZn7GvRLUgLER117wPbyWyubVr4QdHfXW4fth16ow7te994UjJCYgzqaekjJowixyooJD2MwMPqXTsorVxP",
  "key26": "4XDRpPANn94umKAjcfhYrB6sbqQU4zvneactPH4L3HDVxL72fVgjFasZWWEug9MUpBQqoN5ZQJguskfVehWejQrt",
  "key27": "3sYQZbjobAvxiacHJ9pEmEhRuptaufySiU8vPL9rA1XxKDLYh8Pep8wB3Lsfp5fp2NhgPC3Nccua437h27WxrVaN",
  "key28": "TvQmSkN6bCyydCFrgBk3qiesWBngqsgt2MRD7rdhNFa3rZrV6UDAFfnEU2QbdrednSLpAntCYsdjox7zBUWaDLf"
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
