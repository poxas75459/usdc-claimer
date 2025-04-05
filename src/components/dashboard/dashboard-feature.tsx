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
    "5WsNuNr4fh3dj5tUUvoWUfkVu5FF9Ysou7AZAfmLnSVxVyRzjMYVPMn5F4nPGuzrhaxf76wFsmD5sMjKKERddrLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k6Fme1QCDvt5pa5ogSEb2ey8ZoxgC2utcX75erAiHUuV7ma4U9wUNgSLUiBsoEE3SJGsPExUFMFCk9rRRYn6pnK",
  "key1": "3UDbGuXytFAveXoLENsHhARxUtrkufJ7ro6SuPrNcSM9gvypsRKNqfsgARB9c1zrYWnwkx5wJt8hZNrR892NoS1y",
  "key2": "2saTttxmgQiEwSWpMfnEKiWn6sgvRw8hDkD5QtjxatQt6TRMPJWnpmqnDEjcmS453oHeS9WoZD8guRpy8q23hNRx",
  "key3": "dDbs986EX1Ntb6ATbh5DXu6npw8iSeahEK7SsLsx59js3DfuT4j3nWdKnJtGgAgV3Njc3AUpEwqQitHLeCnG5zA",
  "key4": "ZicLPKkzRksagf9LJQyRyfv1jkvf1yDkV2bhmWwmvg3dvfEQPmfbVfc953VacGHNQkkzBrkj72bYcHNFVoZQC7J",
  "key5": "3CNiCr8bddneSaXDzM4W64kgMpdaBn9MHmFW3WTzP97qP5BibNeKSMJB5jBW5xRwJN7UQ1GMWFe52QuVcJcAHwQ2",
  "key6": "2ipotWhZSNxYwdt5arLoi7x5n9dqF5TLMNNA8wtiLmjZ1tP1WTwHTpUNxBwtZeBXCAGqez2yMqdwDQYaMGhKhkYM",
  "key7": "4DNeNCNAT2CmnB1CL8JoKjfXqtAFEcF1c63qVMG12sJZm5ajQndVBuysJzkGTxfjTreLBLeQrjuxfN9pUzuoXwxW",
  "key8": "31qBoBEEtX6rYehkPUFuKAuJyrTcRKGsffsfwG2LwsyEEnSZvyp2QFwnwMiVuy7u95sKYgWkpQDg2McoNyxksj8E",
  "key9": "3iNCDCgyxh1YkXnv995G2rCJT5jkTrquGTRhWPai9DrB4hJ4DZvbFnoF4LigHCUKo5dxrgxdM6FMJoJx2r9HBYCg",
  "key10": "5VRB1fDAKS2LAEVNMzy1TtLYoBTexRumhcCvGoBWQcFhUeDvfyrqPd6KiE4dBjSm7eqgTEECvdBzMhwAPcTdFj2g",
  "key11": "5Ew9rRvtTrBVf4hmkFAMHkHTdLRgfVzjZ2jbAvfkCS7PDChWrF4jc9Vccr8Ans5CXYCUyAxLrH6vmgWNnJB2TSpg",
  "key12": "5bU9G1Ut4dNmqVot9MKuYBkfWqcnPqT7N8s9x6bP71RQZuU8kRknAZcDqpTKMeiKchKrkPLmNMyj9juzX2eCYSgq",
  "key13": "a9o93Pk4ba4J8GdkNLEr1qFxbYVdxmaSqZV3Rh2fMiina41QudGXyntGjcnRHZMAV6jdjqKF6GttoywCGigoeHH",
  "key14": "3aDpBq2QhvkneNZsEcyUCavPfEZEFNE9hh4Jnxnk4D5yRdSKWezxH9U4EFPU3cHKK94Kv9A6saisMx5W1oE1Qbf4",
  "key15": "c4s4a8MVRz9VtY7y4rd49eoVhaPDG657eYEc6oeFWgAW7pBkS9amaMssRYhV4zdrCszzoVpbWXTvedxRKomGb2j",
  "key16": "3Q5UpJqDoE4oG69pdAeF1MLKUWKV3g6R7ZwgqAka7BgKTwyfYmo38Qyk6cDjuHPyqdpckxZhQfSWXeybuRzgviLq",
  "key17": "3o5UW3ZfuPm1PhFY9Yc53Ggk1YgPpv4Lyqjq7QGdS2iz1GasZsPG5yfaSQX1hP99CYrdCpAYauQHtJfVRwwb8UTm",
  "key18": "BiEpaehdy1k9P4R2R7razjS3nXTmKA1aTwNdRhgzi5DeVy7gGwJz8HfKbwqJrUjVbXvnM24GLnnue86Mkjangrf",
  "key19": "32RMVswRw78c1pQ3WmbkhJqZPYAdYeGKcLzsTEtWVc9zRhwwM72Ribz32ntzWvCMpu8LQJFVEPQEnKKAZkcyseo8",
  "key20": "2URaszrB7mw6sHFadx81GAwoEaozuHg2wEUfDr9vAScFGgsDYYEwS9fVhgcvXjjZvEwR4WYuVECSjKgF6yCCGUP8",
  "key21": "4BREkLDkZToww1oh6oTjXzyeXVZeL4RUd5GsjmvaFNANUoPVz46uDDVgMZD15XP7vxqmSkgDWUiCr37WT6fNaLEf",
  "key22": "gFWD6ZuJENubJDmgnM3jkmGqXW9mRCSNawbgHLNU5rnqBcQBLNBGXpfnbWHHVh6vfAFGqi1LygWVMG3pPWF1GyU",
  "key23": "3wJrdNssKyp2heEscLamEedxgFdhFdECFgwbRR4wSFSow9wv5GYaEWUAxj7v7QtaFhq3x1kMQ45DvKgNWAUFZzrk",
  "key24": "ZYBFMePmrUvq3NSg3erGKY4hDwYYX2ByZMw9C3w19k3cyBVEAqGCq4QgguQfwKCHP6BtxXvfA1Dwt9UUrBxkCXh",
  "key25": "5nBWsMex9so5qb5ZLcN5m4sLAnwmF1Q5bVhTkTyH6CXDwM7zYcpLS7u1wuJfxKCGZZsm3kAKQVWT5EWg9XqKtGcH",
  "key26": "5tCEFN272Mh2Pcby56m3EvhZNcy4LaYotCQGcjR3PTfqt9SXzgGME6BHKSWNvBvyaHNtrmVMRRsFejDJv6DmXNm1",
  "key27": "3guKmt8nqES4ReWx4YXGsEe2SRkR2A9qVD5CoUTnBNr799DUhRvk2uNW7x1FZwCLrd86Z38LcMd2GC8xQVhXGzQs",
  "key28": "3f8knZYtRhDWEpWj4rbhfMj6F4192YCiLzKoKs7LLHSpi2brfBAuqFqWCQ7CYUKMuz7XFgY9uFi6LnpoSmLQt7wn",
  "key29": "573xCNqRxQFwk6eCWSjKi2x5bK6g9J5QRPSDZe5GiVgXDXCtuBacq4SbZF3HqxNrm3H7TqAU4GyDLuWuyzG1oMUH",
  "key30": "fQ2j5Ln1Ayby6FxhQxCBHASMhTPH92uRpjD2uERzicfLqukTGHqiusYJTPE2sgAzNnVtbxGLeZyigeQGQmMKLZ5",
  "key31": "661KEPtm2NGWyr5VibMnMSMSG94wNuAfUqv1c5XKXdN4gz1CNbHJhkTyhmdTqacyoCpDLX2eZTGKSG1wuHGv1ff",
  "key32": "JNw5VfJxB7c6jqizvqAWSi68fukEFHmLfTX2JSvN4YREqvMXpWKxsH7TVKLmkDzWBomEAZpTMQfC6NJ8gagVUQV",
  "key33": "492cx5fgQhKjRJyX58UkYjNBZn4aVBreaRF6jpcPRQ423rZ6bviggMD7GSH8jzf1CEdjnRpojVnZUc7JZYZ2DUmg"
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
