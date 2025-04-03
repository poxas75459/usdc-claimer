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
    "3Mxs3bw91zC6GeshZBiwGcVNEaUBpLazNPWB74NAYhWHX9Ygj3paWc3rWxjSQpid3QLeGNsrfFqLkPDFxmvhmJHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sqEXCmjUE3gRpaN4m4MjRPDgsr3sQ4xyLRucCVGKqRiVGmQqGA1DFLypaywi8N9EZ9q3BYUKwJ7UwpMMZmdzTJA",
  "key1": "RohWzcWu5Sg3SKhZNFFNSqnYGtuCG5PrBj9HgUgoTjMte6twanYzH5YiroRpSqiSSmGgdvJbJVxVVDsikCqsxGq",
  "key2": "5mUQSQBxTSUaVrtWTG2UWfpSbQLeh4RWkbdUQNydV9tSLPb3apjcTqpaE6Xn4JFqKVLs5VYrPeZZovSkpZvdhxcw",
  "key3": "4WgTvvrd6WC2hz8q6r4vHzyvJQpxt8CFhhKc63F5RPojovUd3UHrxWyKZnBoZQpoKeSV4PkRfu3L3QL2gPzQEJhC",
  "key4": "2xcrFopNhyBRX7PL5AZcc2EtCBZu29yZaNa7TnEVcaCjjqgiQzAmQsN5PjhBhnH4XbVhDAB6xBkKN4e2GWFbqyPr",
  "key5": "ycf9yHrYGqR3i6uy1dqHnrUFZycvUQpg9jxEQMMvK5sSJXnUb3CBpKbg89SSdLVr3MLTCMEpVHgvnT6NKzKtRD9",
  "key6": "36bBe8UtxW3cCpTqnS9UmqF6SSnLmh591SdpRBsGN9s3fqPTscTe1oUnnbxtUa5LQZgggqE7VnU3dDQMEuEN6EHH",
  "key7": "5sKHZaZD3aAHz3RPKcS6YrZhUnr3JqXog444JpKLZs4EtsptXCbLsN7KWR12U1my6xiHbcQXqDAdQWj4kKG9u3kV",
  "key8": "5Qs226GNj82okXesBySLHqebcs9vEcQDt3FKKvZBKHaVAQhmEd1EkHNttFYgH5t4rzAfjPhGrimVuQm7ZVSsLCEn",
  "key9": "5Fuz8J5TEPwY6dFuz8cVyGE5EAL1perVrrmDy8qtaSbutscYt4QvFbTHivniZYDUnNihfLuTtmFMu9ZD5duG9x6e",
  "key10": "iBvSQZLdSAQGv1yR2Pnmo2eoizkWMs5LeAZNEPijFBPxozUJBcwd51ZV9nmitYsuT1V9RgYPSovh2VMyAbh67Lr",
  "key11": "2pKW1nH7GAkvQPTQGmuH9oRvFEf3nwytKUwrwWmtYPdA9Dj4jgx9dyVHLhx22mfAbLKNah7i9e3AaGaG6T4XXVum",
  "key12": "36TeD6GBqsCwSR4KghXKyENSADTZjDZmDDA56TRAW8MiZqZd7Eo2HgwEwhjhyhYtPQTyVyco5HihoEYKxQ6NVHGB",
  "key13": "Sgsxt8vVVHkBsL92z6hWn5sTx1BdteCVQFjRdoxCMDXWfYTvdeJ1u7cd98s5dCzjrwusp11UkM9STLVcZrPWyqq",
  "key14": "38bfBzwCZGoKjCQceg3kkJJvmAgPRja7jKYAyq9fgsxfT6TMCikzfNayQpjNWi6cboqNJHLCUG47V366kNFKTRKR",
  "key15": "2KdmJ7UrqTDYVWJZbWoVueWRt8dcTpxyjRAWwhYJF8unAJ6bqrh2pD66wsRKNns4ySV4QMHm1TqdSkGt9QFZtwAd",
  "key16": "4FByh9bSgyTG5LwN2vze7RPSv6Fnndk2pChMuo38vUjsgBd7r3s579ghKtMjyojbNe2bZVmZx4n4ig7iUKzPi7Xj",
  "key17": "4g1js7gYJ2H3RdC19Ky651gT2NaKYdT85NxRJ6TN4sYR8kuHZc7x4PNBGzbaR5fYrugLcr2bWWF9k7aLyAgkJUjZ",
  "key18": "2aDF4bBHWEydzEwHUcjqSJkpAhXo9JCE8BxKzhYYWX1erL2ZJNpv6H8Hu1PZGPAg9rhsT4qhRjoq2L8UqWCvM5Ny",
  "key19": "2ty5DWduRNQ6DppcpqL6xamN2Bw8xTEJKbNovWjRdfjBFScEcnpunF9oG32GGa4AzhfXuNH3JgQoisCTFQ9ZCN3A",
  "key20": "2E2XZ7bXyLbCE8hsBHcdfUNXN1jGv8N8miuksXGkS7GKSVbNgz2z42EgyJ4VH8zqMGp6YnViCB1b4k88nSSdV94j",
  "key21": "4oYJnAntbXgZdzLemwsJvvzQNGmyfaqgMkVAzqf4xKiw34PjbkTcN7N5DPbgUmwEEnFvhK8mYT3ppARYTTMe1eQV",
  "key22": "fiyeqdso8o9zCtdcTamFLNaUnombJSdgYuMEuSbha3L3g8GmNoJ5UnkwbCvfxBm3jk84Ji1DMCd7YFLWHsHECwG",
  "key23": "5xSccKUCWMBVEeR4AWWENYfYuioJyWDeJxbfmERBv71WDvxnLrdM2AVRwyRMbtJwnZwG9PG2uo4VgeddP8qkFDqv",
  "key24": "H7LSKGAdcbqPu6CJrk4dFR6L3heQDW9QbQXriCpgBCY3rxRjM4jvYk3PxdZW6FNkyGmiXCgekchFs27AQBEE41D",
  "key25": "2TY3Vahw48fyVPvGWxfe7KKWQEvRVzpjXZAm2JaKFni8ANcUqGHzUNwLQjuszZUr8dRgogqXJjJxyBFp2iQpXxDZ",
  "key26": "3ifDXp7wQsSntTZfev7WRbRGMrcTXE3seEbEtvePCr6Qft76Ht6fkXwwTfcUJBoZCkTCSVS1uxCdtfExkxXVDg1J",
  "key27": "2paiVfEUxV6YfTVB7vWUvB42xqYVwRBqfyAbW1dmF7dMQYc6Ec4Gbb8GPmWyQvw3Bi8vZq23cLiXMijrEboJQttH",
  "key28": "5xM85pb6bPEsXnmeD7zYDtaWN9dE9VKnJxWRzQBUs9m5w2LjWm9QQobHRu351RXeYJp1AaTqtEmBj3e5TDgP3tJG",
  "key29": "5bdnfCnuv1RzXZX1xBFcXhSDp8oEJJnQkomKZso35NSgDkwzFPkEQ7tanvEeZRHiP4bS7NFinHBmug2YShQrUxGb",
  "key30": "2dXi5cxryEichH5tS7kMA7WAAwGgT72FwjrEGDRoJb9GXjaaLb5CbpuzNynUdtjRViyVVss7ePh931amXUFNeGGH",
  "key31": "3564Wy4KuchkrpHsfbTB2nmBUus3EhwKdH8RFwiQDpiRLK3AksZab5wDNLsp4xgXLnJJz5mnbcXk91xN7ro7WJRu",
  "key32": "LBNgSTANfoYL3dfkFufFub2TuFthLcyyM2AGWfFkYQPqJksSXaKL9xjAudT2ANzVPxwwdTMHFz6kRFTwNQS97n1",
  "key33": "2BkhbdXUneXGA2RtYQit7NbQLDeDZCS4YXi1Fm8t8Lq63hh9qPepMy6z99rtZfgnPuNYsJDhpupZdsDi17fxgUfk",
  "key34": "2kVgnbxqhFhL2qspXk6zM8pbPKv5aLHTAWqhwkunkC5ge41shE2WfbabsqP6PYGkgtMjJMdMk7G3HXWGiuAXPrrb",
  "key35": "4dYuzkgPrWEcwhx1628jNKihqy9STqmb1KyjGSnYfagumFyg8EVWh13TFvNjjCkZGGAsJ26yVR8ayN6FPfDZJei3",
  "key36": "5aJTpcdSCmGTN4815pcjvg8Uyx4hTbnt1rDR7UJGTnPTu39GAYHfrpszsKwPnh4WvP9jQgtHB5TDBo6K3Ji97ran",
  "key37": "5CvLDZ8gLp6N6ZjZn71jPY1jYUxBZy5EFpBpUKSeCEFg6ajtw4S2sQ4tcpvZHGqNqXhrpTHAKfZJR9Asno1wGugd",
  "key38": "4JhnjRTNx3rXgF1DPfHbaRNadincrcoJa3unkigwn1rLsn1nGvjxAwhqVimc3SC3krzz8s2995jCTbMFKNcS12Tm"
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
