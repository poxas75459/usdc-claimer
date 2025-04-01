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
    "4ceUZHNFGrjmFscQSLCXdXdx9VDUHz465Bsy8Nb6b3et4eBBqvmau2DZgdhoqWghbcUbJHE4iqwV3tW9vWLEY8og"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ow8XPbUv6PepR1Muxfdxz1MkqCwYZVFn3AAqhexXBKYR7F81XhNqLfZvaf3rWxVD27zwySdXQiuGRksxvydbKBH",
  "key1": "3JLThGYgm1cEjW8DBFEMNZeaqJcqSztyVu47FVPZ2bBYG5H6gqyaaGA2e8FKFtLQgMUBA1g4NfX85d6nQkQVw2ek",
  "key2": "41n5CshRdX94HTtTbVa2gyn3w3M74tnwpsLr9ysfraHFg5dRYKvc13JboGMNCd2yxpqUw92W8Sq7PEp3jKW78nKD",
  "key3": "3EM2Sv3iYhgyVeY1zUkYdxppNaYgeR8wzVrbssSq28VqnvhiDgX8kp2jkDZh1PzWdHtvDCodEQ1eQ79vHHuzLVxs",
  "key4": "4X5TiCkj9zEE81XxvoMTSKCAQZxXWwBafb6kPjuCyzVUxSDS7m5mJuTSCL7XRzojx3KCAKDywfy4nSMVJg7xUGiU",
  "key5": "6711Wg2MY6EUgnyreAeChEV65bs2kuaFp3bNq3nbLf2bCt65RjcwgsCAGvi5xzLoRXdKQRksRzkCAjbWMSQXwNHX",
  "key6": "58sQLG6JTCuJbMnA5fHQNM6mEs1snADiZ4nXNRUEyxrr9bi8TfixS65pHbFV2hYsCmu8VXZcLFeQZMJJEUUUHG8X",
  "key7": "47hhwVFqrATryUvmdUm6DFNiTpMU4SwqyTepxpo8jYPePEnwWSA145Q6zteKLyi6AjwNpginVh1RkBpzg8yuuZ8j",
  "key8": "4stuq9q9kdeNd2C9XPWLZaaUDKYKJcZFSkseMzYYfQn2jT8d6X3y5xS79x7g1wwBYS5YVAVX8BxDLAJVxgc3u7Ax",
  "key9": "3qLBSEKDHVBZFXKC5QrUXnDXZtBqHkikepArEh6mruR3r7QR1h6tc4dXX3CBzVKNqFVh9gnAfejetKQKSsmUfS7r",
  "key10": "3PExncX9PVVy1iLTr3xzMNJx9pqLwXcWibR9tQtpad5bReeM8KMfFRNVgEW839jEyk9zYeYQnKrcguwa8WAbJTTb",
  "key11": "4H3HoKxcUEGDxbocBtr8LuwrTBQaQXvmYFGVqkhmLMBRiwUCfJD4dradBz2qchiK3VG3kpiUfNVEdTgqdEwAhAeU",
  "key12": "4wHwmDE8Vposk6djZ9VK7pRcKc4AhrM7bsbUbG6yJzvFoiQwN2iGmw9CUNAVqn8ivuVUU11vxDhaaXnMyT2Nsz7o",
  "key13": "5W4NaT911wnbc7YGJ35mpRXBSESdvMBNi4e26DRB67NBMZG4tArArTshTN3MTBNaMNZkVBoYkaaHLuPpTn2P2qA3",
  "key14": "2mzFxr6xmXKBxuj5WVEJXpkdkEUoiDqd9NBWCqCrw71vrhDdbi7JYvJGt6BxtVjMUage93HiJStuTJURJUTXmeNH",
  "key15": "9sRe7c1G7Cv5wRk3aMkfWcpuqNAMdzZV43qcCMBxMvv97uAsaetHLpgCDUJp88uj4e4kAHSa2SVddukv7uwUDSS",
  "key16": "33pT8dhXSEoBddUJwvMvBhf47eFzy1JEgeR4VPeg6ZuE9LALAJeRfdXPryPUZf6yZ8SZGatGXXQjtng6Dde1P9EK",
  "key17": "2R4Gr7Z1GFfe4931gmpuBuunmZCsqTj1d3JwMozLpLo9KjEZA73RsJJXitWEaWtJV9PZqVznd2LM3vBj2xsqKSCH",
  "key18": "FV43CWp6R2fiboYYnqMJ5oc2XM7ZrGqkWRfGnUsbiLgGGUmyK3JYKrUWGF6qpWeSFR7k83afQZfH9CyZVrkVKU1",
  "key19": "tpndr3sESRpjhi1PDRfjAMVLvmFofbhWS1PRyNSPVf5MDy9UNiXcCrvfwCbe3ULVRDjjFMj8c7XYjaL8fvxGfJ6",
  "key20": "2rDV42hC4SoUXLiHvMrX6Atv4sSgNetc1iZH3rv1RtRvESg45pXhQNUMvKJFMcfe43CBLcfp1CbKTg6ZmQKaQKwg",
  "key21": "5mbX1o6vH6NmT3UcXv7g1Ki6RMRNNoPrDcRVerScZUzF5rhvvdJ8A38v76iaGQtyZU3jADqATcaigcUbKFsH86bi",
  "key22": "4iYNh7M8NDxsyU18kEPip9kpHXWySovxaRCj3mrNa7f9DUBUJ9nUaE4W9uiWdaoTzyj4rwfQ5Z1BBFEfvFqNydEb",
  "key23": "XL5vwUK1jpc1MYhf5Yf6wztpTZqsKZk9VMm2Su7baXbq8xsF8DopBuNSZNY8aL7Kox3tvf9fv4VT1aSj8qjtYom",
  "key24": "ENVQCQmXz5ZkPdKe1qhUXdsEnbYtU5ZS8b8vkQQoNK25kR66jLnkSCoSCTtUFGsVgRHeoQLetJH9NJewuK22Kp9",
  "key25": "5SKZePVN2cRrKPHc9Jovj5Q67mxChZ5uAa71iQChhWxWUsoDZCLgXsTSGrDXq7vN8aLa4HLM4eYd7RccnrWiuAZF",
  "key26": "5HmQDir3kQpiBiKKitEdqv3U82LzfMEeyaPB5xsRwXm7GTtMQ5xjhviCQ1EfJ3m4FPgQv32Y8XqG5RjDvCxrvped",
  "key27": "3RBMiVTxwCkxoFYD21VCWLyty7Cks3DiSjWNccA9QLLDf9wauiDCwigD51kAACbYxknURGjAnDReWorwfwTcxqaS"
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
