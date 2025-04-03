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
    "4F9jauvLUEFfXXhd4dbEdJbXxPWavfh3nuLvo7o6V7uQPCGxC6EM64s5MKWkm9diHwJhNFL1TzavUNGFespBRQip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ewaB7is7aVGRUWYKitbHzh652sxRL4L7uFpoL8x441hboJyxBHft2LKvsGXK4RFuFyWLGEjZoBG84ZW17dFb3b",
  "key1": "3p7DQgDsuS3buucqTM5S2UYeKT9KwVj3nNSrQCxp68Qtn7JGv62mPN6kLAZ9YCnsCJenuuFUij28Z6sh3Fp5BdWF",
  "key2": "44JQ9Mi3GAiLPayx2QsWWcqZNHNdxkrQVbbagKNvfqaLszZTYaKc7ghT12782QuetuuqUWQz32SrGnqMabhFfQ1Q",
  "key3": "51sE9GQtvdcTLxqgrk7qnMwokG4gzqRzHdoCeuAvpPpayfBxDhCJVG3Jr9NDxzos3QP4esY6ghEfTurQCpPfVWif",
  "key4": "2zfHY4nzkQYCD1Gxn2jzrqKGogecskPrbZ1mnRS5nFZCQGpaorMnv3SUZfhTBUdKmFb8ZPSvvw8ZUxf4jmqD7eQe",
  "key5": "4bokogrkwC7B27AJDbEYQpmoauG2da6q8QdSQxaTgQqvdzadDkmig74BGm9SmdvVTZUr9iRMP89eiNq8vXZyxT9C",
  "key6": "65kvmnwwpyiEMzzbPcDBrKTMSfZqdNWmbegGFRBkNDXc74B33fmaTqFmxL2fg3oszFABmFtbSTDyg3LsuA9otvpM",
  "key7": "5KDXKNzQGKc7ZoGQRJa1biS5uDzYFvVv36SFKqE1oWnj719Hn1FdvrS4iFQbGwYNdzSZRgE8qAch2nTQ1jbta2Pz",
  "key8": "STEmqmhWYD6X3ZXqybRxh836dVg6GhsgQu14MQwfBE9RQdRvnBmEp7wJM2A3KiHLANiDqy3Fb9LbvG7PXDk2HVa",
  "key9": "3AgNe2thuEZ9sSr5SxwGktJfEFg3YDRppmQdFCs9vfPPWouix3qAcd1QyeShpJSBEaGmu2eT1vRTZpKoRwdJJb7e",
  "key10": "4AeYfESrcmqnhqkVT7mWTgcMzbMx8KyTmSQfFqU7QSQD36pQf2gAHkwmFvmZ7M3bULbvasmYLUsPDxxkskYTYZN8",
  "key11": "2ZJotmJxfHF27SvYuXDvG3qYjUHvK4RJT9VijDN1WEnSmD3vMwX3ra8Gc7sW83BPadgpiDFFpmvFQoTuLhzSKB41",
  "key12": "62ScYTYAd2FE6mg8f18n5MUBdrSJNMr9eetmqGaf8qAj5MJuHQeZjY8EwBMuxqTF7VYF9FeM1GpLaF63JaamcLkr",
  "key13": "4hN1WHWe3F5PNLTitZn6yMFMGhVgoeoMLnUbXmeWMyXm6snPevuywZoawo9B2VvDzBYWJ6hD7T3NPcJhZ8iFftDJ",
  "key14": "39HySCqHXhHFurnpBHto3JZ4k1Pn267dbEZhfa8vcVZoWR27KDyG2XLN5qoh4MYPeXANjvdtitMM4tRxUbCAFvU4",
  "key15": "2t4aEBD8p1aAnDMkwkJt2G7yAUGPzU4HhwhFZMLJ8nq9yhCjiLC3uudWEb8exHb3bfF5Gxf7jUZx3KQQU9hM2gAX",
  "key16": "5oY2QzgtJmS1oWKnvpSqXvxFif2SM77WaurbtE7zeinLg56mJKH7e2mrLzvNsqqx3gA3Hmh3UN3vbrZz7PxMpjkT",
  "key17": "5s2TwdYLZST3wDoUZYFBww7Mx1Q7GircnGwNu9e6P1VpDzpBPzPZw6KzCGWL6bFNzkhhbytmnjtSsue4N6xJhu1y",
  "key18": "9D3n2QDkbS9GBgpuG6HSFATFafGYXgdZTBdgAkSkW8F6nzaNZXP1hSE6MXNcUd9poPPbCB6MaZhFZpdHw8noiTb",
  "key19": "5twSmLJJpj5HdSJjCJ5uoAPAxwqekHkqnJTDncoALwaCYwBmP6vPsGRZqrRWs7PGLjdTJJNkbCbNkJ1KMJu3kYgF",
  "key20": "mEzwYbZ2iv2WQ5rbYz5evETP4o8hJyQLxjq7NNe68VQTWvQBnxtGFgXHnMTM9VrR2bTYerijMruafn7rLsc8Qsd",
  "key21": "3j7GNGfc3PAvgawK9XFtxiXVx5kdWBaE7yKZ6kc9Cae7FmuL43FULpyW61BnRmcybTodNVaLPfDxX1S4j1gAfYTw",
  "key22": "3fjaT7nykFVNsGY3Mj7LJihiZstKP696eGkRkBE41z15CsbQj9PykYpb3h1B5rmwc7HABQydohcdyQ3ENiMDY7kN",
  "key23": "2YzkhaceySd6tgcr1rmucV7CzFw5H4UcUijWZmU1uFZtjbjermdpBPk3okf1pRG57h5tcnAzuDRUppVjmb4FiHuT",
  "key24": "47HfkUi8ZQ3M22PhBxHQPpSQV5qfLZS2ntpY4FCmgfMZAUH5kUX12398Jh4FdXckuo5zVNmZvh9aupyuTQdLGiQv",
  "key25": "ZGd1i7yej6FHVrBYas8nVKbHidJ3GyYFB9mKK9EYw2kngzG5USNwP6vf7esz8hCLqUiyg5679VqbZv3SED5eMau",
  "key26": "37FY9CBWANKWgBbytXvmpgeGtZMxB65wNcqL6HQJJSa9PJiJVdp993QAUvaSPCs4p4WSMR4GZzahez5S4AiHbM8m"
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
