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
    "5NWL88UKs6yq8NpdXLhMPfKH8KY26ziSLKbRw3NYkHnELuMNfHn4AKgRMweQXfVNMgEy9QPJHJvzVfSR2xum8Vg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NCXwpb8MBcv1a6zUd1x7WWzj791TzsHRsAub8yQLHgBZ3bxGochPL8jEaNSGQncu7R8GPu5dUcjaYm98xGxEy1U",
  "key1": "2YVzbsagy82GiaabkYmctvdkAwRUbHZC3wuqyigGsMLoxfuZ6tHWoijZuKMZimCrLn1KNzih9R8quCqxL7RDoSoc",
  "key2": "3jBWTzMgoyQa3FQh7TzA5M5Skjg7jESpfSTKob46kYfuWmPj2Swyp6uqhB2Rqrs61FCtEWL23KcMrMtifej4kjbU",
  "key3": "5uEFC1KrYfN17gZwpUZhvCXrdoHgnXL1MD76i4hAPoV1yN72LL4eP5o8Ydqoaifsas2N1DSGGzMduCCqC2L5rcbY",
  "key4": "3NhEKGC9J2BthNgu8Tc7Ueq6A5xHRR5dvPZQDCRoqjiEW3PhjTcUde4qhU7HyRE8j8dZz9BmpcDiEabcKQ7kcKJ6",
  "key5": "3xRp82NQEfEbCdE6hrx9VHeJvEwSbGrU8Apjmbbwx4hPGQsmQTGMcJ1kchmQBQmuzbNa3aGYaDsKdwfCrmmTUNeQ",
  "key6": "3sptxzyiAqkgkpTqaZNYmBzWTZZkAUU5VMHrjahsKDaZyCFqpTjFT6cqyj2d26RdFUPJWN2ArGa3bb2yZib2cS69",
  "key7": "23qaFx8Hxnm6BNiPWBFnaqEz6B5MtpJ8dUjJnRirY9XagwiSCD7TF7h1fJGcmVhEtQMmsfKMwDjPBNDktxHhqK9x",
  "key8": "4VEtQAjPKXx5oGdAmYiwRGRX5AmBAn66mrufcBfPpLdntKryMfEm6b5rQjva96rc31pUhBgjQnEJCti6MebzdiQF",
  "key9": "4NyBrAfafa5ysYGfev2DF1DqLUjjBotWuWpeSwpoGPtzfLzkA5QyRQLQ9JyF8BNQn4B5S9468yomvLGU7A7hPgbh",
  "key10": "3cNXtSFLqqWo2u55z9P7rGQ8A1vL3BFrxnrzwYtbV59vFNXVW29aAUbM2Di39QSE3dPU6YizunrusPzVNmoCzg8C",
  "key11": "5N9meZWcdS95QdCSjSSb1DXgu9796uBNY1iL61LAZQX5xzcp5jWy8G4gEmtpsSxmV7W84eBdRJmRfqVEwFA9zRU9",
  "key12": "3QZ4wamX2asaF4dAbXNt2K6VKivug3HryixWQ1ShXftwFC8ser7tx4rdM9aEDKyJ9xHen43aBR5UF5MRQ2r34pYa",
  "key13": "44rdVKc5edETUWAvYLu2UQmQ7B74E87ot2bLUK9Xya9wqp8CRb6yXqkbjfGEhWpbHFnGNP8t38FJsF6VvqC2Jn98",
  "key14": "2b6HjxC9RQ9zBK1LAJjyzXPvW1aUAnqmUfdzQXnLTP5aCVj6kWD9tTBq8EPFNrhNjUtm1gWVGbxwhQVc25V3xpxn",
  "key15": "3BVUdFVMkpgUBJpL7ToEtXoQd6JK9HQKmPKcYRtDqn1b2W2MsAa5c9HAYx9BS8RGWCsU7jNrhHcXZrxShJjgP7Uj",
  "key16": "2U9cuDgomLuLyN8zgJY2oFk1cQcgsfTCk3U7RJ4iM1qzBPHUNkvBaibrt9miwMLQWzNN5wZ7RLv8RAxHNyvxQQPa",
  "key17": "46L6XKpUsodAgmSuqFuezBr6nHjEJKUiQLgYyhQZmah8rn4fB7D2ktNX4VAcr4yGvHpniVxsnee9Dm22YWH9gsuB",
  "key18": "4c2U5Ubc6HgNsyrobzSHuFWJ9F4Z44vZ4CqyV8c8Hk21jg2MhmXxPu5gKkKxrC7pXn4LTbLx2RAYy617vg3r3gLU",
  "key19": "5B9ym7DxkRqcfie4WfZn32hHNnFWo1KJXBvKGSYmbhmEjnAnXr8mWr9uY6Ad3VwZPjPK31GjdHGjfkTrBgUGBLt1",
  "key20": "43yvz2SJM6VeeH1jUJ1uu6erir1nc92BEmtHJTzYQSLoLvCjw551T3gxUNhNZoeGMSjuaVeJqwHbewFtBY6R6TVM",
  "key21": "4AMBKfGwyTQpBHPsQqPnxKUtG9jh7zzbwGUUzGEbEdWTxTgMd8F8SJH8WdgAZ4aS57nb9bfdjoTAwYKC9aSjgDif",
  "key22": "52etLAHNCYw6PetN8Xu8aojBygLXGqrkFAr7eV9TvzeRYM1EC6QPVQwLdP8DTZvLKkXDZwQeecB5Wk8fAYzBd8ys",
  "key23": "e2PyBiwu73o6WxwUDiQTVo27jXwAyPaath4gn6hcJ22dwDyPiqwpr1yqxzXZJkNBoMD9sTM72HAPoEJg5UujFRo",
  "key24": "3UwDeFZpptkpLs7r1tJQqjD79sU3wPBxb9ocEawNyo84Zq71BVXxbCe8z2RoT6sMcBq34oWNPsecDF2owjQhXX7t",
  "key25": "3GxHT8DJHFgag2oJKafZSGJWP4WoM15jnBo323XrdyakkiGyXoNCEYb2hfXWqEzaoGrugXcKE4jG74mDddVp9dbz",
  "key26": "2dJhW75xAE6PSoX98vrAYPFgvcShccP34wtkdw7ygi2MkZgNYeiM28FMCgUyBUWK891NGQQQ23JMsaMDryQM9DrY",
  "key27": "135QuM34hdSybkZD6ee27BPjtN59bDgzdQ8YEhhhjEUsJXhwLK5ZQqszCPRiUtCsPSwSvNdrsLzChKMz83Jkixh",
  "key28": "3PfTztXZWSoA2n7c9aDC6Mf4ymRr8ZbM84eeZgYSa8q3GmGZ2WrPYXryMEjdDs1J9XEf3MXKKqK5i5z1uV7J4aBj",
  "key29": "5TFo6k2GxrQveUxUraRjMxhAf6fkJ9HLkwFqhin8ZoygS5rpsUh3qLDQNwkrF6EAPU8HmRaQvTwsWqFXz14dNn8f",
  "key30": "5vjLKDnVZVzDJ6fXgVcCkCg5KqZNWdUic16riMRU2RWz5HChXXkVjbUWZBmUN4QErv4Vg1rggPYkSyMQ9LBLLsAF",
  "key31": "3NqvbJw9PQgPsN3LDmF54aA2h8BJNUaRc6eUZRNyD3Yc62F2vgvic9YMufBndeJfTpuPvdjK7TkLtfKLhSj3fKJi",
  "key32": "4zCkj9ZLJBD1buQoy3smXM3oaUCu6JXvVMJ697corFkosXMVXFDxQe4VFox7UjZm168C3UmqaYjp35wwkghkKPWz",
  "key33": "22fDfFW6LRbNRQo87SepRjXe9AkGzjvJkjJR16nk7N9uAkAebATmvpC3Ztn9gmznhzvVk9U1Dv4mYfyvyKkE2mzT",
  "key34": "2TRqxtzryyis6e9iKejebBqdTXmgyZBo8RucUGwvYU3gmy3pCRo2zZ9n1fdEoL3FHPiaKZT96sf9z5mpp5bVuGZ4",
  "key35": "4DVNTxJWMDQbkrPDJEKA7TEFML6bUi4ri71z6Xq4fL9XpxgAc2QtuNTshKiacDuTMscGSeUJGLK17NmABgHiwS6m",
  "key36": "3LjJASufoEGc9i7bM89SBtsFGSQ8EaZLxiGmcbHgpB96D6PQLdiLrKo86oYNae3mUt7AGtzREC9oSbyRxgTb8GmV"
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
