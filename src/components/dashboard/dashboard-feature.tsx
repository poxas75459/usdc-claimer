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
    "3zUssUn7tQC185tjmGGZKC3NodhNjkKYVHenAmHeRcbK3HmU9DEEKNAQdr1Ecqpd3pvebnh2g5Fb1tguzoUqq1m1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7EPpodq9Q8cyK5mVj95hd36urjqZghYh1i2QDjd7ctuqyrv8mPfxZCkoMwUmF6MzYbqu49HUbGmUGRmimnkNmuG",
  "key1": "zAnykyoQ1QXMWA67AVx83S7A8ijniQh1R2SmXoBnZVkUycRrPkzBJQyFwDLTnhxrDi7ApvhmdyE2QBpZchmTuLb",
  "key2": "292KFUzr2TYUmbGpMbY9oB8tzNyrNZHiFSQ3fBtRmvTQnMQXecQbvGjN4vXtWjKP8iUTuGSEtm6hBtHfUXYa95EF",
  "key3": "55UVATgEdZLHmLk2AP4uanoQaEned54RJT4jLRSAg3RejqUHPwFgVEo62icDFDFo7qfRBz7bHPBMnuyGWZYnNSLk",
  "key4": "4AQ8wMyphxeHgbKsv8k4oXaFZQYh6ePtvZfZ2gz364qGy6jrM1NSkfKV8Acm9vHJrLAtbAvzXWKAeyTfwmJDV5x7",
  "key5": "5jBxsoMEvnapT24hHGqk7UU5t57LgUwaCTehzomhEACs5U4X7GGPKpk3BWVyT1DryYXhetAkf8dp5aXX7Ja7LoFw",
  "key6": "4Bhck4FGgDm5GiPeGbzjmwzzVbL5cNys1uWJ23RjKooMXHBnCPf42hBqvcr9hrtmKavveV6FRa5FRN8JLt6NUZiP",
  "key7": "3oTRmQD2QTtU2d4N9fyM9e6woVXq2iswJzC5Et2bEMsGBdgkMEdQAqDs5r4wcgGpRkHntFYymau14QnzGPZ5XB3H",
  "key8": "3MLdEtqfAfcCZKKQ7mvjS28qzR2M6RDJWrw6UnKe2ZdMsuDyBEmwgjvFmirszXrFzigcbioCB4bfDiinKBvSp6St",
  "key9": "4xEXPiSzMvi8jFamrr8QqSDdinFUPcE1zZdh1nKZJyQpk5st7Z6ZMQYqrwqaiC7vMDCRUFs6NKbWiQvrC2FMVL9z",
  "key10": "5qeAFekfDDxgiuMfhv1dS4AJTp2ykbrF1sLzWjKSraYw7RJVy4AJAf5ZLtq5HVKHneLuZfEwUuncyppinRwtaUZ5",
  "key11": "5tFoaZUdfP8kqQmgVTspTPQy9nraHmXoZWqyQAtVVRiofj4DRns9Z6iWiJ3hwr8AYJa4q6S6cnAWzudwX7kZsEEk",
  "key12": "tt5vRdofEuSWyNHjZakWL2sUGa37MPcvciQPb8yp4YryvDdK2sN3PZskbfkPjZEbN6i1LbLQ3cXsthkhThZRXqZ",
  "key13": "4GcosNorxSc9WWE5c7WJ3uNa9qaESqBV5weYbc5PBHfKPWPD8s3AUiTMUE68MnQSH9YhjdDtE624YBcFxv2DRB7k",
  "key14": "2JABm2LJr6QMRAAjEZQPZZARNZ9qn9tsMSr9pxWUwsL7y9QaB843ms3xrPNhbJieDvfQR6ec5EQxtMafy8A5ex4T",
  "key15": "31dwXa3M5cmh4vCYAMrCL3fpFwCuGEGstAMyS1mYgqM8pE5eGRpeWYXwyJsuLFa6FN5Ws886Jp4c2WDagrp3QrSK",
  "key16": "5iPqpHavE475hmscN8D4JKAJJ7NHarsa4iuu4DsPMVVv9JUBt5bzidA2jLQJRRQfc1dsR9MCMbYZbE8qcPAtSjZM",
  "key17": "3CrDztCxTN82QTZx5uPxjxV1SqawShym19AZ1qCPWDmMKghuawoxxjkz13vsZ5TkpGqPiL23v3v5caeCEYkRFkrh",
  "key18": "2WaKFdTzKcs5NR4dvbCuwDSe3dQGzuUFbrVVTYanpDGHGjGFznWfbHbi41xaLU28jTb48sMGcY7Gskq4eX3FNTu5",
  "key19": "2h8GAiFvfRoJfMM59yoeDB6dSQKFrdHNH9Brf2CnLhpbpASkmeAX1G32hjKjSuuedgTinvQ31j3rZqKn4mBAFGjZ",
  "key20": "5EJXP5BKLpaF3YvesWUBKek5iw6Y6xaK5825PYeAk1cKQ8rVDA3v5dK5S1FSeU5hveKEB2AhSFRvFseiS2YkqUGT",
  "key21": "2pivw6RcSHKa6gNuNBLRexsLBXcFBMCt9f967XmK7E3vuHhkQWBPt4k4Hk4ZzJiH9sQeAMm6RHKyguBu2wqPXhW4",
  "key22": "2Jk18TtWGw9fxyQUYFBebRZP8CqKWRxsizUhnuZsnNRK5qjYbmMVAW2cRKpF6Su7GQ45AGZLuGM5AypN44A2Lmpe",
  "key23": "3dsf3N4JJ3EFRe7aRAkoG7wNXmwezLxbrQFRpVEtRfEgLkFRrPGvjuXBJrvDYFfaf4iR9Mf2gEmKFU4Vx7JyBeLq",
  "key24": "uq219azdreJhcEdZtNn9FCehMNRb2EtDmHm4gK3uvjXS37cPNQeNnZxHNSHcj9bVjkE8KDdNnJsBFdZHJMidYBP",
  "key25": "2d8c3LBMYPJMaNAQAnnMFYC1qCZzQ6vzZeq5WKrNVY2Hnyqia5KPwhtjc4RegkcjiBoHU4JC9QhDBrt3UPVikZQy",
  "key26": "3WaDsHRGvL1DKAobGXhPrWdP3QVo9wXsFiDHSUzk9YSsiKKxBbUfBWfwFj3avtbvSSyzE8H8KwVVZBubnq2hYdMy",
  "key27": "3Z5eBDMHbACcJUZPJiv96NQot3xtWfbfutscQ8kWMuEKou4N6LbY1W7Sku6jPVQhgNkjzewLvhXCkJc2iErX5SCB",
  "key28": "Er95CYdinQntPasUDYF4m8AHXqgLMN59xTDXJWPwjT5vg9e3WXdCtEmRJCpJguphT9FvsMt9rvP9PYvScaVYNER",
  "key29": "57zoykwvTJf3DRBB9dFYTDEPfkk6nQJ6WXcmWJYjkcBWYJcDyn2zbr43M7yNQbtphpRffbke29ghjxkZwJ4xbyPu",
  "key30": "1rDqoGtjyEXNyoTrDRdzKs9gz73fMKcgd9oLZjsfPvg7PzLWa4eVapKqECt921xzRmMct4D7kN2QsQVNYi3HaXw"
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
