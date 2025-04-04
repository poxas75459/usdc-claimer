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
    "4zDfDqtFQe1BiYJW7tdHL5EiPJWtiKfNWgTbkiHENj9UY43mvZyyRLQgZqxaPANsQF5SJx38KbYY4CLDgLeBoL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mam3iAXj2PacvMjaawFYa9JXh6bCPuR7kf8J77zccT84YzbUNY9XvaDkSUZQXPW6W5kaoQaksfYaAvSXDpx4ip3",
  "key1": "3WVzs1DDvYGVUJ4cST6B1tm9mp6VMhEXv58KmALCgp1YUQyoM9uFEmwktBTZwMTN21WzjNAShvyb3j11RksPXwgu",
  "key2": "26ArSDamRZ1JsXJfxTznBcpc3yPnC9eJpZ4PURFsyHvLUNgB6C324peAXf1fBd8x1GomKw8X4xC7MmCAvwaVQ3wE",
  "key3": "4Ew1mAfW2aYJ8FG6V7vZfPEKwhQ8bXyLrX1rLDckVZyST6vFsr9bXM3quVJ3RNPDr42h6dQ4G4snN9wpLL7vgxES",
  "key4": "QKQZvE9H9qoGTZGEHwaKQBfBjaotUa6ZpU29k7xKEUTP4FWo4pr4aPsfHi2DjnfpYYDbmT3pKqw8SZnrUBUMg3P",
  "key5": "2qHdWQNJ9DPvT3VfK1fSzNEwKqh66UCKyQcm1crXshthnqFQDoEuKzpLgQLhz8iUNxLBAnppGsxo1hh24tCgyr65",
  "key6": "3dWgDQuYSZqED8B6kypUjLHAeeo3FYgAfet5vStdCteP97c23GHc2kQ6KXRSrJuXmN5sZ2hYyhzDhtEFFRjU4xhU",
  "key7": "3oo3yPpENd8gSbaGQuVfdPk6isxpS2jzeGoWMXD5XBCnpmjtffVeihKFR5AnRN185dRW5gUA2wgMVzrstQYkBxi3",
  "key8": "5yWZp6PhX1sUFwrY1Ug4op68rAScJAAUfxDjiGrp6qdUJAT7iWe2wnhyEHFWptM7NXg3UMr9dd1DV5wddVUKpjxm",
  "key9": "XDz7CtYJWBkPRG5pCAFisGCJVp4W9EDJHUyauNAodhBwCcb47YS1mkiVaUtanuR8G8z3Qi414wjdxpXkWCKrZuS",
  "key10": "5bnk4z8YcwhZCisBrr8HrntPTM6NfGEc1SS3qmnHWZsoDLFGxfEc3TmAGbBfGYYxtGCiGCTq5yt2ERxJYXhwyJJm",
  "key11": "4QB1owwueqeVN9vKx1JB6tuekUZRW3TNLa9Bk2AFmzwzX8L3XgpAXJZBnpZucC4Ro1XWN1TFvo9ZjzWvt9fJefAY",
  "key12": "2HuJ91U7SDzhTgq71UwZ7SxhiFd8MVAii5K4Ejw8d5QJMvZMVz83EyaUyphr4UADnwHAmRzPCyMVJVzBdMR6gzvH",
  "key13": "4YAVkjGPg4dG7LSYFSTMz1wzpr7zS1W6MVC5XWyt1Bd9dajxHwHsrMVNddHWUuGbvT9U45g2GgW67PoQ4aDwQQfs",
  "key14": "2SHrteghoDTCbB3dAUhVPFpDg9LK8BWa3Hg4c3R21innbYWYcSmZqAgGBNq5xtUAqdx6CEaVRdfcjuY1miDjpCYU",
  "key15": "2DUETQWh4WyQ8xvcbUMAE4hY5zpfFUpRsuE6FhwwbU7B5WCHNge4Kz6ViY5qZHr3bf2SUrXdHX4doeTeRSKqJxu6",
  "key16": "361Xc7y4z7vup54nJtVEJy4ihae2kcj9tZEBfboK2Vw5FjmzehNHaeriXfodL27yJ9oRshDzDqdXvR72PQrqXdtP",
  "key17": "d2WpCcKupV6g9D94Nq9rzqx11dNsxHUgu8Cxi2PjsJdENxAmsfKkjXPg7KTF1UaUzMJzDNzy4zwqm3xVt3qZTcY",
  "key18": "8KzBpVQgp2Npp5aZu4Y6JezUcUnvQ2Xqodw6oYDZfnQX7a9VaHfQ7nHLyBDzzcYEyMRtwhVqajsDKrB2Q1ByCTF",
  "key19": "4QJpfifGC3jyDKLSboj97aj1GhhLC9ADoi91HzxXoPab5Nrnq8hiqjdWXVs2fpPJ8XJebBKz2HfkQMCLSCu1W8n6",
  "key20": "5gzQMBnGJKJhffNLufRraCDsoTsBhEZVkjbotdD5zt82FN8VxnFGREuZNbFYQubR3oANgx4XMMdrUwijtaexCTL7",
  "key21": "3kwk9hZhY5uQdkZ2TF8XnBkzAqNMHmhoAxdS2MamSeXDsbaqB9U3FBitWWybE8t8gkQN2LsNPhKFh2PLHD9wNhN2",
  "key22": "4GyNmL7L3NxUkFT1RsQzyAhMHijfKV2AZ7HzpHiza1G7EF8uEy3SN8efWER2C5bvkzWqsfpgCS52xn8dTC3DAqz1",
  "key23": "bBEUfBX4Qk4AKR7s5V6N4jVi1yZgc5nEr1sbTwdMyjUXHpGDEBDm142nhJnLcrADNW8KeEUWFgj14Wet2PJZ24f",
  "key24": "4XhjoTkBuJ6XDKqzQGmqRX4LXWA7tRJ6mmNgPKyektWdHthRESFuQzu2t1cefKrVTxKQqgUtX4jDdrcnDpsh1xJo",
  "key25": "3gyEWsRn2YYm27fK7F23bJrnA7Hf6B8yVnTceSrzw9jXP6Yxdxiq5hqA1EMkGVvxEffJWKRZVFiM8533np9TK8kM",
  "key26": "sqG3ayQnV93CaNJSsHzN7QVftJaYH9m4YL2oE9poW89vBoxDAGqNVPjw75ALLJSPCnrEUXHvJ6RW2xCvcuFtExN",
  "key27": "2uma9C6sgj2EVSPVWkwspGamJLyMsjMfYAYFnsveWCBJYXv8U5xSZNB2vw8BE6wkaeT4rQx1VgrswQkHJkJSmXpp",
  "key28": "C8x8hhW2Y5suvZmvJLEXef5dXp6VNVnpy8Qp9aRCbVvdsyMzmGPab3BRphSgU9aTwuKtsFSfo2Mr9ZXzUcE9njM",
  "key29": "524tDZ6Dyi1QSSrXZt6YCgNmwRAufrd6HLK9xRF1ZZd913pHp6y7fZbrKLN6CLyBZfJCdF1JRj41rGLzZ4nWWxtk",
  "key30": "4fQuPaKrm7c2z8VMkjTngHsCEM5ZsacRafEMW38j7TvYmM5A9J5qcscHezV4PJiZu3iMFzvaNmN3Ej18wYJsoU8"
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
