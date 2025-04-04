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
    "2kqws7WcsFusw2PitLy1jm86EXga7p9kJveiGVNtAez6BYqVsuxfLE5fqYtVUQ5jWjEd51BQByyoHNTsUAiGTykp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ZJA1fKD532Vs62ySK3fKKihhGfKCN6MbqizqbfmpuMAMwxyjHRkWUX5R27ojsJe4BwtyyYZ3tLbwDbPRkdJoT8",
  "key1": "5WNsm9smuGaqwPQm5u51fj6jMkWxeEbQdq2SyxTtFuvC13jFmEojqmwWT4TDtDNwGcb3YJCNbefN3VENp7snT2wb",
  "key2": "2Y8pRF8BCo4yQF1ps6jzd5Ata2oFZSzAASEGD2jiJFXWrPMMB81yrGMsgQiRTk7H9eAdbn8RDQhuXywr1Rmpa5zz",
  "key3": "5UrQfYCLHvw6KJJeMpwf7RUb9aZFtxGFVzsJSxYqZ9fdhXwHyTLNWg3TegsRiAjQ742kvAiVzxedrhzNk5pGzpFE",
  "key4": "3vPquw6cPouKb8b91GnWZRQDyLeHwxCynJXgkSTks2o97vqXAM7YVcijeHQzJVSMNC1UxrA1TZQcChWsqMYiUZrv",
  "key5": "3Wp8yb369Z3wYsZgi4tU7JMtGVLBwfSZKcawUw4Ca4jeBiy7Y5Hm3sAw57wDQNnt8NXLLeRYXLpgxYQmhAv6pP97",
  "key6": "4iM1BtNurrDFPS2Wbv85DhKkirsY9fap8XXNTMwCbWZN8xSQaDfTXEDZp4nrW8JVudP4ZEjCLYSibWmkS6G4yEvU",
  "key7": "UHStwCnrmYB5h6vv2CrBAEaRTFB5rRj3ttus61cGJgk1w5JbkQAN4L5x7JoJ7eRWy6J8ctEz1NcbVbHiJMk3BvA",
  "key8": "2yV6MaN6wNmo7xjE9u7g5SRjQu3NEuSF64Ydiz5HRwQ4zhz16uY4Z1uu7ECtmkcRqrYjkgd1mW7peKQhushCRkBY",
  "key9": "3J8nhPM12Jm9einfNgrt5yYPUaovA7hoVuajvHvUHkiEgHjwY2LGdY5iZDKyrYeo3mMwafPRamWkEugj9EEKWWp7",
  "key10": "5arAtWgc8sQCgjkuU6GRH1LV2YQeToHUT7r1Zubjrcx78AsHBnrCuv3LocKYXS8h1QJqRmk2t1TUuTUD1Dsp2J97",
  "key11": "SFeVRhHhrA7qkQgDNir71wYFFE47jY7akB9sCbuGYpKMJxdCXppbevYrmPMAyMXMASDm5yqpSvXLxuZWGvfxAhd",
  "key12": "3dReWkoqq2vX29WDV4Lb48teGYHnMTL4UJwerbLtVh1egoXh1G3QiFF9ysdv352eCR9tY3kzhVL1Mc3vTpXMHw93",
  "key13": "FNVNaKxgNy6aYwAzhCb6uoQjePwCV11A6XTqeJ5XgkPrwvEvY3jc9YySCjXiyym6eDaHrKTL1midZRvmpS54KeT",
  "key14": "2sGxh91DfM6fWCJT3qExCYxjJUjhn2eyF5Bd94pkvSnCNNyCmj8VEfEaCcxq7t6cbQGmkpzwMGPtcyjwU6nwFxY1",
  "key15": "3DFTwZrySxoqC3AZRyHm5v8cKdadqEc6M1HAP3UABZCWQTLWzGB5Fr5bzTBcoyQWBSn4emGciS3EF5xLBsfbAYTj",
  "key16": "3ySa5GTuZAEwpSBr5X4tMq1MZyUkfiT7QvNanJK9bmgSYEZD67QTeFkCLxVunYZu3a3RGCtPAPQQQQpG4quugYme",
  "key17": "4XzyektB5hqmoMc4aFTGrkLTtJBSPjbX71d5VR3fq8u9FMWZeXFk1akeJFEGpJyE9LcxhrSZNyZRnphfA8Y3Sqxp",
  "key18": "4LtKMsWyMDvGqCj1MTQ46jxNcG9U1xb3YcP4WDvzifbBauV9TKvdwXbui9qQF3CZLhQyeMXprXw1gvxmMbD46DNf",
  "key19": "MLJMxbxLapQA8fGBXEUKWFtAMxSZ4a9GEeQCMhbw19k6rbVmcdQaY1NZKtHB47AS5mXrJHFm3Kr9sqzLmmpG4BS",
  "key20": "62Um6uXrrzN6HiU7dAEUfYtnTmkJ9Waeu6zLsnWCEFdhQQoc8YNgr78KYWSTqkRFKkGv93wa3qgsRANrYURFhENi",
  "key21": "5bJUp1vaig2E5BZnnuqdvjhiRAw87oMqB2FyBUjfEU691DnNFX85sCwGCQyEhKYmYBE176hPbwaNWvyGKvkrrUxi",
  "key22": "vAsC4eP8WtmSbtnSjYNLFVNfv8U3Xb3U8LvQkbe7cVGTSGymjbWJPk1aGHuM5nsEwrjcCRcjtT9L82f1K6yj1Mk",
  "key23": "5uXvxgdzcaf8eTWV7ztG7KJJA3Z3i16yydxJdyWLzUUGht84VAhB2wJhk3B3eUzw4Vy42PtBWCbHmumLQjQrT6Ys",
  "key24": "qVTjQjJVEQgfmhD3sUsBcA5FD8MzYdVJiVqu6oMs6muzZtCqPHxaZiyC5iCxktRRZtVw9UG6SEvE6e8H8ykE5KW",
  "key25": "65C4Q2CDXBsKohRSmBk6s8ZwpwEKdvMCRsN9gDSJEmyKV7tetE5uJYsnQDVwrxAqGfrvnxYYWYuKHiZo3WGphdPA",
  "key26": "5i6bsFDfqGEbopZB8eVKiJR5F85Rq8xQ2nKb6JdftVWZzDMCorLxVHnUjsC3itaRt5jwWY1WCkdxNa9X1z8pSpv3",
  "key27": "Vj2uK3NeHTaneMQPCtu9mZedzrZ6gxx5WHa99MaSoZqnDSfEDs8jHeq4fkcAPYeT57HpX6xk8BvzLrPowbC59TY",
  "key28": "2WGpjY5dwppn9rWVMSpAbNajEwb6vVaSdyr2MLHX5vbdsKG5pXYLPF5TyR8MiWAC8GYQyKx9G1R6Ap8tQDwyyoYu",
  "key29": "4RkyttBviQgeMaurFnGQwovLJ3xhkn1UHsTDwGUKBwr5CQ1jUJ2y32zo9ZosiTXGqbwi6C1KixxBTRF9dsszB4Ek",
  "key30": "2Q9Uj9GwZN6Q6WRDfzXGGoZ58yTEnrArJuzcptE56eb8PmKVhVNsafqfJ4n9qveZ3AhS7yjqNsbWvptWmdXCEs4V",
  "key31": "4qSxqKPJ4a1588Uy5tcJS1MXvEujAUtNT5nUoXFWRkKpSKsmRH8ew8CkYCmGbKrkBAYXuWu6grbFLnBK6CnqMEDj",
  "key32": "3GZPuYMDhzcyCdMF4KPFJp2CqbRR6VKAPPPAADjgBeAMxYVSwsj9VwYxQaKfJsmgNqsPMSnNppTC9KAg8tQCp8sx",
  "key33": "591uDCZfDD4LCDgbBBMx92EStibZWYbXvuNnuXVZWT1aQzDgWiCzrZbpRQgkQipi1Cj9R9Yx67DedLqbKeKWwZFV",
  "key34": "2pPHEnGadx6hpASLy2aDPRHcJLJDY51gDRfDz18h2MBZ2LFAX2XM4wP3LWKZnDYp8urqVrwa7Y7RdGXtAPNjD74y",
  "key35": "3ScFVtywEQQgJNA9eCm9aY3UpFfqsJEYDqDrMSM5Zn1TjUC6SyknqwHbJ2kx92g29mBe82JAujhmmusR46e7unA",
  "key36": "5otaM2Nz6Y5W7PCbwMqErcAMWuqrMaQhn5z8QYNE4LMqiXKgJJjPuQy278NYYWq7P6iXepEoed3VtLQKzqiwZt1a",
  "key37": "2Yv4heTpRKGUSW6dX8a7K4ctDt66KTRvnb4iraHZzARRmdakChrJgTmSxksx9ahNXdkxoQ5qA9NtCAqnYXhsvg6i",
  "key38": "5GeDR2BThihmeqMGW2vDyPFfJBWyyYBDypxw36aE7mifnHvu4jgyWu26fiUiKzuYLP2BeSEShNwKrnjN8s9HEkPG",
  "key39": "4JCVWTiRSovg3r33eP16m7F1mHZ7uRa7hoour6DvJDQKirE7gnMAW1pWUFfkVw1ZN3SmVFo2QQxZWpAjsvotpaQV",
  "key40": "5xRzF33fPnR3zhtZFUrwKZ8BzMtosWLBucWuDoyNZHYnEpBBxmrUWtDwqyYtuhHNRpo3tuAoqYW247LpN1tcv1Hg",
  "key41": "4kKJbgtqp12GaKiVUFfaYYYyU3oJhV2yMfQDcA8iv1ZFFNSiyW6UZj3AG4QbNjo2TXRSSjCXREFzdHtbSKme4mwF",
  "key42": "Zmh5aXAPocYcLfP3thtS5nUmqfdubD8YnC11fKcZz5La8JMe1C6c3sCnxwpwSLwKbYvnMUitau83aAEJ1k3c4dn"
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
