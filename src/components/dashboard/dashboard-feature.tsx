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
    "YAEWkWRLYCoVasgzytCk3NVHUTWqG3c1fwhWTYGZaEcTUmKaaJgiGtv1GN8Zvb7bJSkBnA2nSu1RP5iZiSaQzVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f1D4y4LY2wePRq7f1piGSiXVf5gGXw9EqngY8kXsQ54rGi6BaKUDWpK1YjRTJ9QsRJGuhVfP5Wrd4ruhB6yGLMw",
  "key1": "2rChKpJWHLMCQi11dWtWaAZeD1uabcbSaNCaQaMAk13SwhjEE7PR3uGUD7XSzJnbUGhLCzgXXMAMkjNmE9RXNth1",
  "key2": "5gecPZAQUeQgXiEnv8X6L9ppenvoV6MFkM4NSAgAyZMVBbtRJwC3qdgRkthsDzz7aDXwf72C8cGhZQosKMqmY5WM",
  "key3": "4SW2KwsPK2MmnJhDQvELHfNdNt2qmbjjJqXmrnGrCqiJJB1QnxaKw9oakrAQJiwDFBoShLV4auWu2i4Rnc4vqgHy",
  "key4": "5x1vYPLJDQCF1DZqacyKcLiBo8M4Fc16tgkrVitBm8unh2SGQhgJaZi2dNFDXEQGZrxcopd6yAQiuwMVcc5iz4ng",
  "key5": "K64LJi1cCgWimA4BrixXkKLkAUMPUC3mE5EsEzd4Fc8CvfNSSTfV2MZUcxPqwcKXsrSVhKAQC7mTWoFjVKG7XHx",
  "key6": "5J2rGcu6UsehbmYdD9mC1Wg4VQN1HEtKAo9NiwbZwAVfSj1wJ6CP41Te5ER2DqiEiyPE2S7ucWcCaYxYAF1kwDGe",
  "key7": "3JPWsAcBmc4g5QMPaZWc6azaFhqTbELj1ARv8RWqShSUuR5mSW32ETmMyQxKCLYAqmY3FPeudZXnpsF72QsTrmqZ",
  "key8": "iA1rthVUuenjzSBEPb9NiGuTmpAPnKzq4rCtRfm76f7BJ8hp6usQL3jkk1LjnjE9Z3kHoMn6ce19UFmF3jpjp54",
  "key9": "4ZjDJrLNBwDRYMoVqTiAyxdnLLw6HAx3TMXYdfgsFQRxddifD4KNdKNw7WSXz7wvEip7YyFQAL4xBpHSRkSuntFs",
  "key10": "pzrv7CXcBj9FA4zDRUj1vccgpXTjv2y6ncKKeWkzEtHWXx2iuYWyCoiqdzgQrNo2jL9SU31UkpyEvL1mLjqQD2k",
  "key11": "46xSjYgZ7h63r5srF5CLDaV7KgECJT5QsD2QTgeHFomhLxiXUT6DycDu4EHD6xpmdRJzkMx7tmmThq6ArUcxdK2E",
  "key12": "65hNwZoGVQUmANGynbdthynuUiQK7dD5C1vzWRJoEnEcZwZXqKiaUjcyYqimKh4wHNV5fdBTZX5N7fnQEux8Exph",
  "key13": "rvQjvdYNnLfF1DW9zFFso2dMPqdcv18nS86x14Wzx1EqfDJRGsYZU8GuS1aHcUPvTSJf3Ua6SqbTLyfN6M7Tr3n",
  "key14": "291zP7JYGCkDuEphbn3tQSyQDaZAnjNRNjzfBxu67MQJsGTEz9SYZRodpZ8KzPsRaGP27VULJ92VarhVFJ6kYmno",
  "key15": "63VzMAvwgGTpCofuHXhw4uV7Uv9Vva7RXYXXZvYDHqrFeQuVGjPmGdFmG1fGxzr8cPEVDqbfwwGjhv4o8ZD6HSR5",
  "key16": "2QpH5YPnnnXDAKcPaF7gyR5vUXkzm9SbrjUgNLVd6DoZjf4QXYMaeNYDVZ27rPnQ67ETNJbgUH5jX1hePXucejtn",
  "key17": "4RxUALEHnwqkBgVS23EjjmGDnUjSGp1vKLhhw6YGAGbaDP7fEAonzb1dp5nvBwBMX22YGcrAUQ4Jw4AG4tToNhvN",
  "key18": "4qSuoBKaQar8CgRb9gdvTm5oZwBeSGoWZfZY5xkzdkM9SYeAG9iaZ5Q1ZccKzTZbzcb8XoF5seWCxkd92LSJ5VQH",
  "key19": "2cfZ3SKuBPEBNaYCsxxpWxitDjvJUZ9UiiYMqzpYbEr69ZDtDM9m3LrdWSZUXxfquiBbALQH6E9WM3qgyyacmnV",
  "key20": "3Z3jZ76dmzHQGYS8AAFo9oVbWQG1HJJEjpBgpNQjxFdKrFQSjjNNhDWLsTFAzqdwBvR7Z4rWMdcYy2tXkgdTrDGf",
  "key21": "3CXWatyyTkFShTML3rQ5gKLyu2Ph4DuAhHNkFyipFvpqRHa7KZZfJ8skmjcPjLYYRa37huVdrk8QafisqksUzYwP",
  "key22": "ZZLcfkRATEGq1uEXs32xLvZTLnA443fXjUepWDsynRAs58y2BfPV7Dk2VZb4JUnZU9jbXNV3sXGtahFRp6f3kDd",
  "key23": "4eMW929QryaKyCaSGmvxrLXNDPbv3PKoF7xsXHaYSAoU8x3UFpSeSwqVsyXnZr4Bae2uwXwTUtBM2PnNKRQY9vHD",
  "key24": "2be64rV1XoFnKkivLKmHMjgaai2yi9aTLohHLuhQQPHXdUJmscfg7cXMKVaNdNZWboNBxyoLh6iC7Djq4y75CLnm",
  "key25": "2EvMfh1AM9PYhJcqBEobnuPnduFz28tyKqrCcf9Z4zMuHrY7hrLsP7FnyoRFJ9YeiVMBW734ceEfqygNjZb6HmsM",
  "key26": "58JTyGXyw9oVp1Sp7PqChpwn9kqWx9DxzsjrY7PzLGWN6dicwV26WLAfbTbXFSfSF1C6TrgBLDqpenxNyAh5QULb",
  "key27": "66r4FWuar2i5meEcF8KZdcJou6FsY1AYej4YNT9yWWCUo7i2os3Zy2ZNmM6chWTZpNJGQvUYk1wReTDHbhtfevfA",
  "key28": "4hhfGfsQTDJEakwF9YuL56Hi3DHWuwdugALpP4rBXvu9qjNQ3pgKBCY8cg4AZmKkguWaqDw18KDojHdBKz3ChTtL"
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
