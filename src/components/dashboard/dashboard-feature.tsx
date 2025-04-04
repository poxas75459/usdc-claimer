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
    "5w73a2XvHfKu9BLhvgxw3UfHVj1H2zEcZ8wu7qMuEsfSVSL9JGXhGLWsdnuqENXMVtoWnCcHvVaV95hzvTq6V7p9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i7qVb6GZCNkKfzqDP42Um63aDs1PhDkgHAC96Z6Sq5wwRbDVtWfaPECc4ZKBjEN93rM1vBdP2E9aYbfRCPVyQt5",
  "key1": "2znb3u82gGrh8rvx1eLK9fXd3gSCxmar4j1cBJJ92c8wHSVD6RLi6aiMnfBp2absQwuBagvxKdfxtYNtdvephVeY",
  "key2": "gU443LCF9HLqJTvPqLom6cbh9yXRKDaVijkE5YQjK71sdGarZWxu1dXuYAur2a2ZSDg7uMnksHG4cvLyyjdCiHZ",
  "key3": "5wpSCNt4uSdByUdwDe1M6aC1std7ubx6QzMdW9X6GRhL1gdnMPAzLNpoLszD4XxUMtmdcDDUCHdcLp5qbMVLR6ka",
  "key4": "46gqAtKfM3ZzbWmLsDFEJt6teQu6GUmoUEN5TRXEjhQpMpJGNCK21kV9dwz2spMrh4GN4vV21rF3fdxak3g84MFE",
  "key5": "5ii45NSjeTN2eQY2qE7fNupPt1hJbufeRhdWQUK5QDFsRmjqrkifs1B9gBp7vzSusjDbVKDSjBQeksuwQMX9s9RJ",
  "key6": "5JWdJ1QXd4yhMvAqJsjkZiRQCxR9WaTCYbwUiJUFWb82eqEqHiYWFR6EyepHHTqWVJFACn7mu9w3hymWnA4zz1EH",
  "key7": "3egFC71wu1TPLShCVg1vEoGsooUK4GfVZgszbA8iuPUfkGtqBRf5wtJYW1cHN9A5UsjVtGcKS5Qu7GGMqtmZ5x3k",
  "key8": "5m5dTWqS8tC46qpzMq5mh1vM5Dr7hkUgBvaUcbvmBYv2frABRAD8QTLXav7Tba6NpZTW4uGZBQhegAgdC7AHXGQe",
  "key9": "4cDmSjx1RYxncm6zW6Khtf9QCmyNTYUgAkUdDjMZ96DLPrr7oetyUkQJ6T2TVEw2MgsxfyoTXxKLcocNkrDHqgVC",
  "key10": "2BPJCKhJCUt9dBXSF3GzUWk9fu3PcVxXM22Dgi6YBWNrVq2FL1Nnc16WWv2YDLqyF8cziK14HdNr9p9N9oTFdVps",
  "key11": "4VefYUpT7VHM8tCyijuGvero4rNEvbcySjBqqTsSbzKqfszRZ9RUpereMKbB78nXqqDsbLQja62cyVGz9MtTY6N6",
  "key12": "difwT3Pfr1pgvu15fRrXTZUV1tot7HdDA5mzv6rRQHw7EiyeRyzeCoFDHsDRbDwb7q9RFJf6HCxvFjXHXfepyd5",
  "key13": "SUdyQSisbtmahMGiXUfCWLMFf1u3iFJZp1QamouF2RtCvBDDLujkzpd9UmWkMWD6aj2aRXTh9zMNfuKbe9kmPJW",
  "key14": "2scq7cLKjG2hN65sFML1hQJLaEPWkmL6irJ55zYWi5Q3iVir9N9MPcV88xbPJkNujcWXUHC2jcVuWZZuiFVC7woA",
  "key15": "23s5rfzvNou98t2C2NJfgBevEL8VGj468YYcgnc2R7B9PMq8uwuLRHXjrQ6XKcg2HxBcrWyoyr5stvUtfUBNgexc",
  "key16": "4i1ghCvpyLMDPBXpqerKC34iit371pFSNmKVZT31Tpu36iyKo16UMdsoL7xbQju9AJM93xeYae93xWxPpvVLVUMe",
  "key17": "47NvGwqqcEZZNSsGULbA1kJbypkFYPeSw31PLLVzUiXANwmABi8VZUMnuuqMvQBxqMWsmMphHTkos53Nc9xDXFyz",
  "key18": "5wZNiJQ6ed6D9An58kKwUK2xFmGMyJW2T3WysZnhnMTXvDYYstKdPfCHMoeRGzEnjZ73xPitGmJsdURYm8GFaD77",
  "key19": "FbphnmxMGJRZGJ7R6ELPjcZFfHCyhnPJu8koxzzutEjrq7ZqmkgaP2gVUf1xcb9hMudm2rkrf2BUxDoxbEV7dco",
  "key20": "5Mw4S6837NFY3Rxv9Mw9qKbgfgEnHdDEDSZvgkKZ9yJDJNiFRsgRYNWa5AFuQWMLG6P3afBhypNVQrYSqU7yv9ZH",
  "key21": "3C6mMFXCfLmdU5dtSrVG2ExT2YubYwnadTmqS6KtHUUdB9bi5d6zt3MXweFy1Bp5TFeHp2a1Z2w3m9LotT3fzUfY",
  "key22": "3NP7iPcBV8PFNpGWuTNwtMnfnLNzg62i7xLTh1JCcWG5Qb3onJe5yxJaFEWufVua2BC4uKFC8Wx1EQVVxszEdK9z",
  "key23": "3NnxNhvUAfo9jEuNtg69w5UZWyYQubARsNqNJZLRQX6dx3rVCZgkGhxDhXWTnCjfG7Wv4y9dwFEHKWEvXwi71q7M",
  "key24": "3Frqu5fhCeQJ5G6hJxVjwaLgGZQ4Jc9UkkUuFvrsxYcyDHRxGB9Y45WTZX3V8e5ZCuVyEwe6CQcBp7cZp1mWjUXM",
  "key25": "3fsEvTvJp16foXByVvevUcE3wiH35bG48wx8G3xPzxmAZ8Gfj1EcrVSVCTCc5CNRwVZyJ176vvM66KucKpQHF8hk",
  "key26": "4wEGAB25emmLYnwRSfM8Eb9cFjqNVdX1ut8myA2VXMiEHmJJnYyD7YWEiNw1MeGMkhhW2CEZLp34AtgfSGLVJYc9",
  "key27": "3maobv7GxvZx4bc38LiUrWY6s3C269f2duWx34Q5FZ9P5ggDDw97VFoz8NjuqfQ1AWR7VC8iFmcyURCDNgHCm9B9"
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
