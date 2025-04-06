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
    "59uqNHa94y97CTe1GFX5QqQhzHktg8ETdyfu19DKkMz7hjrEpEzRtk1HXJWez4DeLQ2GQsPQBGVPRGsincfDqBq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VNmBZcVsxm2LtXJrBfBytNaEMkUrLHootJMTzyEpHjmsDeBLW87LgiYFZxWLx68QPdjubt8CDsf9j8GpHoLfPZM",
  "key1": "2CMLRtgTkyDSJsD4SAiFrYh3H1mrABFrjmvUvFVL9ouYFhAbkiFu9Hp3XVF7k5qdNgdMnzLMfj8F26DMBDg1dP3Z",
  "key2": "T3dusBb41S1WtfiLxBg9V8F3EMhBEBcY8ReKxrXKrfqsqVMQbJbLD27rQQMEev74xGqcUcZBxYvSmghSk1CvBws",
  "key3": "4TeUcQcp8MqmBB3L5W5TbJaEKyx9RV13bAtvpJUuEZykU4K2xbAWoeXiAU7mBbS8aWdAzXKCoHH6qZii9FFTf5p9",
  "key4": "5JqKmNVzx5Y83T4ByrdNBsqWLoXrZFh7fqYf9PAQngqjeXJdm7KLTDoQTQQXP1AAu8LhgYGosW66n1mphX7Eja1C",
  "key5": "2A5H9jnWUkmAx928h8SufmpSRSr278GHxN5q1E4ibiU5tYNB7FKiVoLioT6r2nALVLogcUgsjwLrsiVWwaf5TiT5",
  "key6": "AmLe4h2fJaFLBnyFqr4T6EGpJL7qnKCA8pF3qxvbuaUtLmLpLEnN2mFHW2QHKPcVXMEA59LQS8RWbuWqYKnmY4L",
  "key7": "3u4KhTdHanGrNPnoiew6aq15iGN1UdaNp6DzSyp8BK6EDtdgTfZrVwCaEDAD8YhEf57h5HjamPcefBoNd56sy5xC",
  "key8": "5nVTZRq6dHphPoH8HKqUu3ZX6TGeT3aKfQFPRggu2UEuBWiaZqSsXNnT7wAZvMxV1ykXJ19TTbcLMRZb13gZ3DjX",
  "key9": "4NTtfG4JbeH5SdHw77r5x7JepDryuBqpqpcUUU3cwk5yAS5Rc7AuJ9WePexC9YWxrnzitPGpjHsPtmH63YAabmtL",
  "key10": "AWcpjeELy2ECx73Gd2S81tPccXpC9tEx79iEuPWZuhPQbczNV4VXCrqeV1jtj9yxpd3zAGa8bemAiw6RJoiraVD",
  "key11": "4sHe7p3uqMXnH6AEfXYqPcBz3KaTBjJnZKUmvfYpTeztBJ4UN4sdrBTyBjckebMmeVn3Uf42f9rAhcfCYPWPaNBg",
  "key12": "42wjDwR62wuKnRfyXNZNdt4CFbbwahA1Z7XEaag3W8BGfnCuRinQhwoYJtzDKbVjqEApAZP1HQ6M6Z52aUgYJN64",
  "key13": "4AWKQpANdjgYat96iEsBrRS89VdDsvRY68KSPgxZMMGRtMRPrXwLJB5xtWtCGcfXmQP6AtBTqy2B7KWUKbwbqp3A",
  "key14": "3cmRfP6FLHecAQNSoQTv3FJCGDwvam77HorfitPezp2FdWkwU1tLqUuZPXtcYREzcxjQ82hFC1EPZMAEd6QBjZyT",
  "key15": "3fJ4NZvUS36oxShPE8CjdoGND66nLv2ptudG5cG34eXhGmufxRFS7EcXSY56q2oJq32N8xyXjCMNQf11TUsGadin",
  "key16": "BNSA4hYHes6FCtp3cffPa3hgnpQnabfyNVZ2BnQ6c7qQabBRs9Y6bbyjFgZYUCKgCFc4zKZXu3qt6MQuMALLdAM",
  "key17": "5HVpXVRkXnCfzMveEaGiaXu8BBkvQnY3BMQN55GnQnZXhbkVrz1WKnbhhriyNASPqxzN7DCuSUS32ShZMoGC9XG2",
  "key18": "3LmfhHwUoMXKpJuYTa7qnzVfDcobEWVhHrRjxYRqaT9icwRcQPMzLRviLsqPrkSZC4L3hS7tpPGS4Mf9BUgBMZn",
  "key19": "3rRPenwtndUhJnUzs37rG98Pr2r4EvPKpd3PPiP6HScoea5niL6dhqxLdtpZVzkfkYFRXibCJ1vJLRygvAzCYWVP",
  "key20": "33MvnhYJHhcg2ZxGVDJbPuqbdH2c7XKcmzG2BYiF7MTvTntMCtMURuJi6FhTMibK451GQR8JiU8B81v5qyP26QqM",
  "key21": "Du6NvG8tByP5rbUz23vLPtce2BamboaThKFv1EXR1XkR1LL9gTKw2CofMtzQiiq3p1Y4GFqACM3B1z7bAqxTn79",
  "key22": "3yH6xvnrWTUijD7vUGinZPib1nqMLsfZjU5yUo4F8NhPUi4n6ZmamK6vV15KRv7VzMcPKVXtFG6YsXtrrqW6JL7H",
  "key23": "4JuzpUh8dsya5nAaofvS8uGdnYrHRs4x2a3r4J8EbqkWVxjzwuuKiZTM697xbBdGjQZoLg5XZLUUZWSnURKkjkm5",
  "key24": "2fSZRqL99SBLLWXRz8VALY6XkRFsQpJ5ZUBHYTv85Do315MLeUohi1rqWVeGVqZrXEq3hhef1Qe1cLUmneCnTfnh",
  "key25": "2Y3AfR1gvnghcEuM2b7FekWqbu8qP7GzGyeATXWB8pCoEzhKHExK7r3gewsjXxwCRr7PuWWpQnc2KME6mKAdvXHe",
  "key26": "4ffmFbofzBKfkZdGbG4Fccv6iqpvRiMxexWjT7EXHU2iebk7jZ927YMNdnCEGDsiPR9nvcVJUN6wxmdFvZpuWpK2",
  "key27": "zi72ebKpKJP1pBAdpapnMhHkhD48e84zaSv41QFMrRrUQzmSEtstLpCyUkxyhSekTRfYadyQFz9N8dCqEgC5Y8g",
  "key28": "2vsaPpt4cRNP1an9maLcXndGvCXuYyBWBxx3bYvzihPFABZYBupzvna2rH9uxCtEiTFqqRhNUnxMCKd2rDGMz9ew",
  "key29": "4msZVzh7QnwSK7rkm8yCv42NcuHunwzGmko93EB8N7j82exzRhjeis1RewqNJXm1MqoYMhLLGD7syZjyBPhRkm7T",
  "key30": "3ZdwqttYUKh697GUvuaTybfYpYrgeF24RfgRwJo2J58MCEKE7Xcj6oYdABzAsJzbHSzUdBr45yscDtScSggp4goG",
  "key31": "51JnosqPJMUwBd1M5GgRnyP5hcQtUVY7m2iy8WnrsKTkmo12QPNKCnUYmmzbAic9sqqWDedW1QxhYwwPjmKVZEsi",
  "key32": "3LqTPiSG2NWum1Am9CKMnzKsE3X1SWi3Eu53aYvLDRiVRi2BzeViKP4aQdbupKj4LsiqjWwcefWyoyd2YdMJtjJe",
  "key33": "ABia3BeE4ujniYqKwK62W1C2hSaCQgkbX8UrwT1Gvw2DUwkQ9WpNFvAZK1RsAi3ktY8RtP4g1R8snChnwnaTW2o",
  "key34": "4f21bHDSHhfkE9J2wGTY6yLddoBfPebjLymumxz3frhTypVq5CxnfjptQ9MjgxVvjhLSFDvL7kboVk1sBkvDwvtf",
  "key35": "5qE6UAeTxyaRHjSfC1FUYDDB4h8Liqid6cCn631MYFfSpntETZsChwDGxX1Szn8cG8ERXgjicAb8VZeWxZMU9joL",
  "key36": "4SAgi3QGBZCSw9E6cTTUgMdb7bdnNii98BhsMqXXgMwZ5KrAcW7YQc79sXMrnxxeSUjrCrFbdz6mBibPiiWTE5uj",
  "key37": "4UiSpXmVByXrENSYfRAPtRJ1vrYvKZucKHueYTB31sPsBjs9GU4fgJaoUYdC5zZ4PJARMBEKDNizY1mUzZQ7HgfV",
  "key38": "2ekJDyR5NgyLzxthPFwagGyf6gPm7sSsHDuj7v4qHYRdGp41fhuwyQkmXQeDS1rQdUuoCiRuYDMVv1fCUizBzs2c",
  "key39": "4TC5r8ucenJJA27jM9EzXUwZ2Y9XZjkG8NHef1y5nBzCQYjFoxHEt4d2Zgmuo8zJWuih2hSSE5G56bztcnVa7dfj",
  "key40": "3i8UAUpMz6C5idHfguKZRjn97AA1kMVYAdku8ZR1MUcjX1LAFY83BYDnef2hVN3QQdo8hfhvPHcHhrKQumGpNZ7i",
  "key41": "24MnXqPwwEc8JLMZc9bAAHpYfxAbWQJxiUTcxKs3aQNoG25K9jzAxYdifwJJ6UVcob4k9ryVi9uP1XXEHtYWxDai"
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
