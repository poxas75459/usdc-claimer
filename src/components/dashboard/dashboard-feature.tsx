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
    "48tNpFLACfU1FTNoDHcu8XBiRbkmbS7BgDK5csSpbfgbditM79NFM24GdQZdBppjySpRCjuJ1jBmBccJCNMT5dFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b1bdb7zZYN546pgdbBEtPUk6MQJimj9UJeBZSeh5KPWKvDPVio9YUMmsunSKm6BHqn5RaJun6A8SPaYUHQDBACh",
  "key1": "3U65P7143zxT6aZohCC77yNR6ksZYaDSZ33QMT8DSqGn913wjNRxvvigjT4WueVBZvcvi6pHTW6ahuP4gztsDW2v",
  "key2": "25yucPBrzUs8sdgGh7tRChXWL9iY6hmQVJnbkyKmRzv9kQ2KTCmXiedRHQwh1xXDWJBW2YGhShEcEZgaY9HUtTs7",
  "key3": "5hTwTAPjni6ByF6PPSa7L371S1ZL82Zbv9YcpM7fVNTg6tsTLt6cY2g8qoYJzBMtxH6QSTRo2kCU1jZBa6tYrcZw",
  "key4": "3jAJLSFgiwAwJ17GRjtacM3UFByimTuAJHa2BQ8a2Nw7zUWK2t83vZqnUzb728X8QbM7SRc1SyjgD5zecvxHY9w",
  "key5": "2rpoXe6RN32fxqmto7d4YBbh7PYJQMFCKTMjPf8fhQ4m2F7SSurR4Qff32ByoZgLHxUy67Ls5hCyZ9EUUUfSzHXc",
  "key6": "3K2zgo89SNRqAtnHbCBWQST4ZasZdnMNw8fNwrSFR5f4vPTpnwx1iJ1y6tsE1kD2uEg6sYfKrQp5H2MnYkmVupfb",
  "key7": "2EnYJLWeq2QvtStPuLrKGCHc7Lqv3P2wzUJw8SQmDGtF1QPnS7nTUDDyNHeYmQkqxV8zf1X4E3FsT2tnrZrRGqMw",
  "key8": "26yLBtjZTRcT8SMbQ4wjvMsizytN695zUMwQfgZyN7YpXECbJKmBW64pcf9nLeGRWLnA14o4RxQSj9fNpcK4jGYS",
  "key9": "2A4N4q9KSY5woVwiq9pNThV4JHFfUqa99bfQ6KzdDK6U8mAofxRbmz83CX3kJpedWyKPSj85wYSdtpGegEeLNkD3",
  "key10": "2imxXLjgZgfEw9EEKJwSuxjBTXngh8iPP1t4sqjDvFibU8CXbc5m7rFK6QpmoZ3kyqMUX7Eb4FvjSbqRzM3Ns56p",
  "key11": "DQgQgH3RCJSfPRYLCo1xz5HtcaGfqXRULCMUbsJfKfe1gEC5vu1tKBCZdQfpbg5AhyPrxabeFiaqs3iwNZTwUVF",
  "key12": "3RRujUhYUo6heVJxpJNCxWctBrjiaDooDtTvCUHqbkhC5ivNxYLTvh9Bc9qugnd1bxQ6Kfbmb2t3r5VUHtiiR2rn",
  "key13": "2Yd7sgHVprrWZJtXGVUjMUUFgn7Kq7mjQvzR6q2364UfghreA45t8NKaJq8nS4kwYDFUPkbTZ6dUd2NRUgYDMyJX",
  "key14": "47FN5pkikbBjTAao9jRM1o943e79es7RFtQUJ5apexjsxJBManzBhsbvZXSntKb4Y1YsnEXkqJjNJd1qZWeZ5YtB",
  "key15": "ont29bMnyZCeyDsDP83fkJQ5khXkwbVWA3U6ZvZmCsh8zSb3w75UesMXv2hLodfSQtSNM2qDjkywEmcuvZ2ENU4",
  "key16": "z1RyUrAni7bkPT1WRd6qWW7Eifz3fSxMtiAq3WJan6dCccbUeAFwzK1zfhEvJa3KoZeKXoCiBsi9bsWMFpxYUxH",
  "key17": "5YB7HNqDG4PpwgszJvYWMpT7r3vwoKUREQie7G5sE14WGNBmyMrJmvG9srteJ9hRCnkAxu2vUZaJ6Gc3dxsMzr5i",
  "key18": "5V4YjmHmru9hwcJfqvyPNKYHMUDVZ5gdMNy9N9sahmEMFC47LQsgi2ayW25So93DrZyGd1TfiHphhqAKSHfnpTwm",
  "key19": "5ZSTsZ4GDMWNtdTzQ75URb8fx3kj3JY9yEk6UUQ9tbbhXmt4HRC41patgpF6VTM9aeYPpiU8h4oyhJ1PhAeEmTje",
  "key20": "42ZCqNbnTmsvg9ACBTVPKQ1LbbCp4qB4HRLoTx2uxdnwxrVhLDfM6edBsYw9haDZf1XyJhvNfRCEwKXLbuUCzKs3",
  "key21": "4VJ1CBzvTPnMzo6Vy5o4bsHjKZchyVQwYboC3QJhL5C7T1xH3XRMEn3rq1JhvtZ9UejQWKRds2Y4wRMtbR8yff3o",
  "key22": "5qPn9qYLgdga7MMPffNzW9ovj12DhGYfSrCqR5XkQcMn4RFvNqmPv7qB3nEmtyXdKV9snVjeCDo4NvFM5sK6aZjd",
  "key23": "5E8BGBfXj7SSc9yUgJLUHdQ5tH1wotxBU9oMLM46Zb9tTFim2uRXoWvGdRdoWXvSfnX7NGPLqrPuvBeECRuHCiS2",
  "key24": "WN1AuPt19kVTP7Qs2H8MPRUKYoHg9j3rJQPq3Er1bb3G8JrxL4NaWKxRxKLmvPaE96dpTXMoq3gMBEXo62TgpGg",
  "key25": "2Q9Jtaf7Jp3yYz4XWjoh73uy6f2XKD2Y5rYSzdfYCGXdqrMSbQSaX3sMLKnNNcwA9jWZjJ2FHNAsGiNAD2cRywGG"
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
