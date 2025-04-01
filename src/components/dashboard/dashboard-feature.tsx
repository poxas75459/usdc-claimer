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
    "aJzHqucqggy1A8VFVGKg1YYMYchgGU3J9vXoSCk43SSR2U5UT4RZ7zZMrWYaaCW1FkLDYoNGHLYK45EfQB4sD5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jrBYcaweLbmJqz7Tbjjccy91E9BXMRkzjMBFFfh3ngTswTfGNmK8P5aWpnuySRj9eGhb1UBfnH1j5WrQSzAPrK2",
  "key1": "rqEukarUaMfaUn8B9gMVNpWXcstCg5ijD2HqV1mwyMPka6zt6jQioCYPixmxNy5RtFpUtU4J7AL5pJH4nS1JEiv",
  "key2": "3pG9XRfcjfEnCP7YNdRShZUqk4LGpYggztRxuQvFpmiLA4wEBwfPawExcg9kD3hCyPoKdyqWsBkXmBFZLGrkgqcw",
  "key3": "bo8yJHy54zpeimoTAchkjtXYasrWj9eVcZDLaU2ywYE33crPqeqdx5gry4Seed55GfjGWPd2jnkvw7RXPdphC3R",
  "key4": "3TvCknhdMvF2iTtGx6pYixw3bzHLVHmbkT1sfp7QQuJZw9dsFwNZDR5RrXxRqN1KruW6LmD7kDTAHS6h22shRRwN",
  "key5": "XWp1V2jgVi9vSfd1RkobnrLYhKAVmmC7EBhkK7p7vVDPsAdhaMuQKFn3pBY1sE57Tne9juVrJXEz37npP8Ey7bm",
  "key6": "358L9toSmi9TE9uAFEV7uDqEhRFwhqZAhHHFEEs43vv4pib1QeggCT4W1ViUpwSkC3SqshQ7iLLn7Jt7yiAxhUMK",
  "key7": "3YNMXqaD2msUQm2ETiC8o4v3GFSVLT7QBtozCbxRt7WV8wzCkv9EHySgUbxW9NvcPTq8azjHrWoFTouiF5a2Kz8U",
  "key8": "ucpUXwHGLydsjmgFmqBF9Z4VJmxKXPaBkNzunXPwN2Rmr8MN4YM7nm9hkYzxXRJMVCytqfL6gPa4LtXuy6bP3Sm",
  "key9": "DXkxgHiHsGaTntx2G39mzxocaeCPpCrBfvRQM8fuVSSrAHVQqk9RB8XyDppF9g7BjMRCwtsiEG96HXEic2VqkRt",
  "key10": "3qebcEwkQaNi6bBYQA6AeG7u59EGBpBDhaSiXNBeHwTfDaKmx1FxJp5dtrBzeTneNoDrKzKof8u4LsMMY89ZW5jw",
  "key11": "4J44Pum3kbp8x6Vevmu1os4JUQutxjcxcouqcZdVjhncqaqFxnKQN9z42Cfae7J2QaYbR94s1k1wdH2rzNqbb4sW",
  "key12": "4wtkpVnJ8tyQ943jvq5cGuPG15F77rzGstzQQa84cdn4zizXucEV8iEkT1XMq1VXCqziay9LnZPbRBXbqx5XGm6a",
  "key13": "56SJViPrMJF48D4U31F2PevBUZuMxrZHLoyXd1Dp5scNW3RHRy6UFL1W9kFdauq3Mc2xKEv23Deq2Dr9sGxk8rLp",
  "key14": "5xHVvpBgniBqnkQxU9UTYDvuq3a1rz5smeKtyCPicNmXx2Ac5HbxGQxJuJYFQ1vQLGs5ajHsZzm2LkyJWHZcALe2",
  "key15": "2iCRVEa5cFYgtfw92Cf7Z1LXNZCbwJxpJjzswkd5hdWyearm6Ajso6CWEcTikDceAwH7wkN9ryerPGD2SQqaXE4y",
  "key16": "43VDtXnBGdWGe1VwaD3G2PiUPDR1ocu4ENdFGagiXzGvsJ19HQymJ9ShBmU7yPRnJwxwBmVW5csuCHcReMfEgFqS",
  "key17": "NVxYeoaenMg1bgei4t1X1qMBL1irULVCe9pdNcU1hDwTT4nyfqF47RLijo91n1hxUq3sKFsEfdcrBgYDbjGDf2c",
  "key18": "2o6QvLsUJouVWgz7NBU18gxV9QfH1Hhqdc5NQo2hrzefcjSDa5VrfXTBm3vUvQhKJQdvrxr3NUwPew9TFPuQMMF6",
  "key19": "5KteWyw9oPchEZ3r8Dqku7srrzpHxVhw3pkCsLEECVk9fqVWG6ArimzCd2AFqhw8hNfoiqk4LFAvDaxUmha3Xgcg",
  "key20": "3jWBnqAqYeF4BSbByvPHw5dRSX2guJhPHmhQ6USdGxHCChvUYYgR5zG6GZhwMiRadGChdtnWzuS2Ctng8xTEKH5i",
  "key21": "57tqRAtQnDbNZjEKVf4sC5kqDV8tzBRTjA7cHQExv7KEwGhVJBtZPirGq8E7R7QXgenhCD1nAf5BRFUiuS5yPVgd",
  "key22": "5A4xjE6WWfRiEn89wULAnp9gkQj6uDxA1M6LrZhpXWTJBf5ic6x38ZBZJZUMvYkhBEvi8NCSAAZbXHtQyGU58ftV",
  "key23": "3McTfEmVCj4o7L6bMAuTDTkBbJCdLQTugrjFJGrTbiTkA6H7ZTBEQa1bRoidh2WrZ9KnwgQuKXPUpQ1r1m4JXYYX",
  "key24": "3FyWxyH943VEyPmj46pwTxPr3A744qFcm6gyyQHyaf6jyvhsKBd9DCTSf8WDWp422tzRFKUPZqNxnoZGQMwK8RsS",
  "key25": "4fJFMUuxpehmSRoTLGnexb1VXyZaiZVTTxiwQHhGREz6XQGehdc794yVFKMPA9U7VykwCEehhfsiNJnid3p6DEhX",
  "key26": "3wTGYhvVP5TXCEgEwfV3AVZidnMG6pD815Bego4sXejYfCiRmd6tgjajuqQjw3zn8WH8MokqXnnKtZz3aRQTF1JT",
  "key27": "2PWvcT4cogbzyoQmGk9CfsfvytCDMmLT9S4CNsuKt5hyLemjtNNS1uUMqNXgNN21LqEyBq2komtMFzTJY5HCZrk9",
  "key28": "2XSoe3kaiKYTBVyDUXtKQFoMugndARhjGeRvyL8G3gg2a6kuo6gmDBjBA3PPoK22hnm21b5Ei4zxmZVtjnd5K6JC",
  "key29": "2nX5Qyj7HiqSPQBWfwVrwP6RTHS2HBuSx4fJngVSrqm9gnZ1brAhKJFTXf4xQ8nA1yQG8Yqi7dMju4bxgrp26LiK",
  "key30": "2PoHErq91ZS6M6pqGTtj63D4UVRMw6i4xWiQ7i2RfmetfuTFiE8VheS3e9Q2BPP2iaM13TZotV9uEqGSQ9m3BELj"
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
