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
    "32HzW8bFCqqDsUeHL6dBctnSuuhyZpxqdbVJUbeaxG5VbQxZL9VCqwxiuEAptb3hEXpiKE81VYPeN1ehEbu2LnNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B3uuMZqAqJXLkf4LwFrpcTB6d46zLh7Um7HCNUYRrPmxYeSAdAVZYNyFHu518o89JsMKVkBmQwahLPmpipQfaU6",
  "key1": "4vnBUTwbNpC72iEhcj1RLaExYyBzuB82Xajf4VkHUMdmUg2RPkhT8yu5wA1tjYGCm1BzFfUVXwHS3PPG9bnN3pUY",
  "key2": "3KZef8UabQXp134bm5AsSvhTKwRPjcjJqFeVgVJWTKBY1LGcmXNQwCM7a9L88aHzrGinrCMjnAnQKwStMgGA3rYt",
  "key3": "5djvhbonWyGkGhRB37HRX3jiP55FE6Nt27rPGq1QcYZwc5oAmGKo9zRDCnJeeTxTja9bkSSkjHKkTXzfWxepwQqD",
  "key4": "2WLgk5naMWry4K1zVZHUTii15bohMzr8nvNbzEEX5xbEiAJkscz5j5LLDq2TeyrX29Ho9B5Ff4oMejsVQ4i6wJ7",
  "key5": "4XKx2B7Eb8KNXRVG4rSH9Fhfg4EYFNaC5UqzT3LnNGqigejm2CUA5f36u4nYSbiQSn8gSr1j7sNoKMUZYuEqMeB1",
  "key6": "5ZJAEXGJetrbKKjxZc86J7FdbrFnxWq6RPLmimT4kFpusyWvcAi9Qf6whXnBaYxTZZL2Vem8ftoe44BJGVyb88Qr",
  "key7": "41z6Vxbn3gjBqvBjHbxWdzWfz6wjHgPgkmJRSqqUmoNcfzXAcsHMxnoLZqcaj522XXzLX8jv1ukUwLakTwhQ4yFt",
  "key8": "LTF7RMC3AbZZ6TXN1xF74DLUdv5w6jQ9tXEehPWFfkE6Jv2FZ3HRrGv51EnZ5f6zWAHm1oRhfZx51p57UFGnmcV",
  "key9": "2DrGmuydvfDddb6ivRCscnRJqJMjxkzXv5TkjKJr8yQXao28oXqwdxex5FSqwqpTiqj48Xkxa5T8DEn2cdQDneJA",
  "key10": "1211BhfSeg4jryH9dqAhDT7NAPKsrr9QVyw1LSKHhSRguSjsEf1CGxXhdyYNaTRzs69bztwjHahn6rrHmTZgDE7L",
  "key11": "4U3DtCQmamttEqw1YpaSky5szbAtj9bkj9NctKRVEi6sbn5MDiBGrtXWH4VLeqd5JHiSEp1AxFoZKJim2tJ7jZZS",
  "key12": "5gszPJSj2gBrdhSnhWT3oFtyz3maWSAZxLLczrYAw3PsfdSwn1p3A5TeoCsgydspCa8HsMWHyJuWDsDhnNJgdk9V",
  "key13": "3C7aHFFHzZCf9WsLUBB5zxe2xHFJm1mGn4tm9qoKBYUDLFMRaE74iaZM7JVgQ3bR9P1xcHRfwxZB25CwgvHZyxz2",
  "key14": "3epnZw674AMRQiJiM2YZByrQ28RBq8PMdXR6J12v5CGpkGgrbEVQw25jk7nY56qrbcPA3UfAXsoVtvL6TpXyxB5S",
  "key15": "3owviHPsaYgLWFbzznVcTdqgPVVjukmAY8DvKfF5FHE2krtuUS3A3GEESqCwDdaZ2ozu35Y6jSw4AXLcf5DmY1H6",
  "key16": "yu3J1o96onFhNMokAJtCULGp5NTnBzHc2FpgVySZqND5NDw1F6SC7LpeesYfWwX8Q3KdYNidDbaC4Cc5dv8kPkB",
  "key17": "31TqrBgv3Z9nLqCsYNFNwWBzxYHsJKt2W9mdaTkhSWFzqxp1kKBaj84jJ3rfEeMeUKk97fL369qKzyvT5BssyPsm",
  "key18": "5RGsYtc4kNqovnvMTSQqo52aMcQNMJxVCF6Uusd8nBJ9QhPtkVDX2jJSuobzpSVwDv7ttj3bRcYhmbUYrhSEYN5V",
  "key19": "4V35JeddeZVU5UDzPwKGToEancUZJ4RKySmc6cQt8zeJezFo2GRhLbfExEGsxr18trM5pHMTGvB2TK44nNYNWoDL",
  "key20": "5bK3xRMRpnPH3YqpLTM31A57uvmF4tw7ZqurPbfYEkeJR1yCBN65NsNZQn1QztyFC8Sy17im4SDScfB5Ta9SwtmA",
  "key21": "4mLNX48dWbX4nWnJVtauM8ihLsvDXkr9zi6KEBDLrxEQ4URxr3mYRgZUG31UfCLvXTEqBAkSLUvAn7UAyWy4wPto",
  "key22": "2e4EEBT1hTZcWU8VRXEswSZ3VGjumPfLpB6DMU9vFbysdNj3UcAC8MR5dUzNk3EF4oeNKCbGk2hF9Y8RXa6Zc4eu",
  "key23": "4o9dTZ7iRCNfkjxXCpcSHJnNYfozQYobZ3caEqBdjf62owy2iMu63ZGYFT3EJfdX3QXcfYNGrEaPRCYXrj9m8Pkw",
  "key24": "58pt5aP3LSCdhzHnB7LbG8imvn6wc12juLynwpQxEa5xqQi8irrBhoj7tPJRC88YE5NEd7KktQQPtyKntLTi5aQ5",
  "key25": "5kVH4gokAoJawe7ZUYSf1XpX9dqJWpN1MDZCW4WK6pWZddaU2S3U1VcWdDHqXtkCK7qEGU2NhEzY2EHk84DPHx8b",
  "key26": "2sRVMgC4XVzQqMef2ABSDxx9yp4EqeMAHokh7ju6yBSM5qEWXNcnPhVyYyxKE86FYArPsooGEFLK3i1PyvPUu5hD",
  "key27": "2AwmkSmsLo6JY3JUhKJ4KPJuJTpXcfAV2RnoAbgZF5iKn62dDPDVdUCnpn46wqqfFxaULwhAKAxHHNhERALV3d29",
  "key28": "2T313uTvCp3eJBYpnESkvTXYkXgoiUevj9c6ZQ2mqdDBW5hwDvguCzkyQYnbXVYFbRAQEC6rTAxw5cF36zctJgfX",
  "key29": "8Cp7i4w22Fw2kUQbFxiwQUqWh2xd3jVd4B9yqay37Nm6EVaeCrVYn7rDLvLPunTio6KrXc1s6nEWeQe2r7y6uQa",
  "key30": "3sP95CL9yhpZxfb4FHDpe5x8uML4qLyCbytt5MQ13cYsjQvwMtKzUQLiBRvR4Q3CXi8m2w18fHrTWigKFXZDuU3r",
  "key31": "5tiYMCjai7RnrGWLZjYjxKRDLSYLkDWLS2Hoj4dWgoboqiwUsyvYx1WvobXS36uyb7PT1ZpRrf71C4rfHZfaAeHH",
  "key32": "67RJEs8o9oLnhASZMAf7vuxjjdKszKMfPpR6W7yMNnMeG65yfoyuhd41C2nXYDUwRZ5HkDxw3vj3sDHkpL5S6fgT"
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
