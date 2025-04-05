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
    "38detQoKDviTKjwCWJkMcYAhHVBH9frvTiNZgoCFBu73a5ZeH89oAbL1ZXY9Dzt5KSkJDP7X9RV5uYtKBPtbsh58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h2oit6JWDmXhfXywpCiUZA7R9N1o9gaL3MK8igJ5tDu2A8x9QRmxwgAuAHVxeRKtBJpqSeLohp7sdnotXNM4kQm",
  "key1": "4pnYeKUQhqEfkXvBVzh8WCxn55Z7mk9sn2YPdHXo9QmMoB5JJesishyuwd1ZdiQQNumxzR5VyvDG9V1GJGjWcpwC",
  "key2": "4uhLERg7mkGjCz9Y18m7SbVmf1BhKdswitaCFvqWAZyBhRpa89CT1SDjTMPGFrKmyCrmUuR9kwo1KSuSUKRD98HA",
  "key3": "2WLYkPZ5gUht7YHxc5qeqLnxy5p649pVM7nhiTnXyGwoT4wYP8GrkNnfb4BUU3CZz3ZBYqzSKoovSwq6PmiSbNRD",
  "key4": "5WGUsNtALaa3ADxtqT4uF4bHRsHSLP5Q8Hzxq3HRg2gnzGceZgSMj932QurKgTHLjoPvwFgvwYgWdVtLYUrpWz88",
  "key5": "3YVrpJQcQ47DCcL6VBF2HnVUUMwYTdUNFHsRVuPkKSJB7obTd7XkfnEg1g91NTtgkZ9GEedh34y9Zh8taquV1Kfz",
  "key6": "33Z4QVjYK6tAe3vM3fQKJvuvD8Jg2zrBVua1ZmcbHKiAGtfmiN4LXNSqRvJNi5TibsQEvT6QmYzxQsqjqfAZVHrx",
  "key7": "55k3Sr9fnSJg4Z86QTLMYJC7ySXCtg1Rgoo1tJ7ps6EzPA9UmuaaFfAXc52v1VDFy9HUGu1mPv9WqPaCEpSNZu4R",
  "key8": "1M4C7UKzazLNyKFYD12bZo6TkVDcUForCnuC2s6T5wHt51dRfbJSTMFPN3VQt9Jf1gSvuV1Rt3YN7xKWUYxuc4u",
  "key9": "4jjVcn9oL3TL1HccYaiUxXUoNK2R5efnhqkMFQ1C3Tj2798SVRuzeRpt98PUUeqet2tAWH9UK3ZdMaGLzqHDfCDd",
  "key10": "v5hVGnVHZEfqNrkHrhr1Z3QwrcHv9YuDfXoEhWZFuVij4fJhnUq4enGzj5t2xucfYQBW3QERKeD2rQFg1NFzqZZ",
  "key11": "3tCAm1JCsQpznF6MyKPJa7feqoCzJP8d5EsbgNRNJav5y12SjczjXBLNtEy2N3T6YisBbHQjtL3HHicx1xs2aPuV",
  "key12": "YiXy5YTpZSwKWrr1y5gWbo8X6vJWsyUoRP1jPrj34AW9BM159hW9yvCEaagC2MW8usiUT58LjVJvNHtzEmtTCk7",
  "key13": "55S7GvvNEEfcfRD6dMqef4Rt6TgTayMxyLfChD8ogTmxwkWEp2FWKCHm7tmP1jXTxoB28n5ei8VVPZF6qkpyAktu",
  "key14": "2wuVgceUcLWSditXhHJqey1rA7t24xRDsCpp4Ys4F6HFGLEUppazb4Y9cBnuAe5TH7223msLuAcnYpYK3dXe5VFL",
  "key15": "5W9HXZTiQN6esP8NqBUfpqwhrE4BC4PvGRMKBtifnhaSXwV36rjiBoX73E8FGXKqL5uzhCQJnppmnVxYUfKEkehQ",
  "key16": "3RyWdAC2K61GiW5TySdzcCbePpRS9pGkiKMGCGzqdwzZeo2qXdq8RjX1U3LRKoqeoXRWYizD7XCQZhbEHipHJgkG",
  "key17": "4abYQf45EU9x8KraFGXz3qSif32ysjWx4iRwaMVgEM4U8siVcfJx2EoAGhsMFHkdHALH7NaF2JGb1z1Up6MSUza9",
  "key18": "5wj6N88ujnM28pQEnXh7SX38gh3FMvq1HVkMs6PPgxRP82SKmdMRabVfMdzDHAfmGMafBskgt8gHF6xwc1xVuQtU",
  "key19": "38VqgQNbSvsL6nbbsdL6QwiyAUpXtAvV7MvKcts7kEScDL4Mtgqr9koqfbgtchuWKgZ4wVg8BjgBE6nmoxrwzCRD",
  "key20": "3w79FtbpHK6GJ5zrBmMpJpGGzjX9Kh43f1aWPETrzQRfvhbCWDYhV6tuwqwpFBmAXevM7ThDYVyCp5jk6mvgrtXF",
  "key21": "5msBpEBYZcSNT9VWie68fyi1QEswz3JG5pT4vjSiUfcBQvtHq8e86hYD2xUEk1FyNAnTRcpYQmPSxtuAMwNky4pa",
  "key22": "3AytxFF1CUWS4E383m8ywYfWUCQ6Y6LSjeJrmWjNA8VkSHtao7mmd37VjgNSdbL7cAFJs1qU6t31XPbrt76Pmxr4",
  "key23": "5xTVxs9JV7RPY8UZi4C2iePqBDdSiSHA3T28zoSg5qK2Q9fz1T7hnUwEimDKJpLopEU9atYaxPXCqorCNPUD14W7",
  "key24": "4TtVZ1U6kkPA8MAGykYHxC99bVcY5FQdQDw8UiGzgeerijSmRUnJwAAp1Nvqt7AZ9fESJdXREXPkFiQWzKguz5LE",
  "key25": "2YxYRqnKzT6REjHVZb98tTNjGyVtydVD78hBcx7Jg17yzw3xs1ucyLQHRWyaHtAmABsNxQdUqcZGDz4dAjSkeze",
  "key26": "NqV2Uq1xJGRenqPckzTCFhQX841TC8sna3z3Ky7qxVkdj9wcBCChBe8JQnikDaAd6qJ1SpjRniRdC9j5x7g3G6x",
  "key27": "2D1LdN2Zj93RPJ6KQrWM1tkx33wLQyUy49XfTw5qwMcyq3SbdS5gcqtkKqNpEcA8fZRnk52mp1ChCt4Un3X1o4cW",
  "key28": "5VJ6DLUCdemjtTCSaqRqe1kFzyAvAe8egp737SakB9zuUGs4hvetoy9M6tg6dt5Bm7ZrQxNXPPLy8QZRMM9sbNoy"
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
