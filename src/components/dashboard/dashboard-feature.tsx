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
    "2Vk323yPe7FLEez98ErX7Pydd5esx2KL9Ts7qDFE3jdNa1dbXKHpppbL5fTEBRFxMEgzM2WbdCW124Y7CKzqNKxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4emawtG8TXzAUoE9b1JUvMLHU7hgBZsCstCey6pty8ZJZJzCZvxog5VmHL8wrZgRr4mER6HAS54LX7QYsfSaUHvp",
  "key1": "284qEV4Z7KRoJ83PvkFyBVmKnMTixmA4rv64eEsusaNv6rEYUorhfYJJYAjVuipY74peNJT9LM8yxLE57rZWJ4xs",
  "key2": "MiSa6JdGkGSjWU8HG7ZARy5YbGesBZXa366uGhkhgBdNVwNXwEe4wjmaX7SpNgeGhc2zHdhEXHo6yrtYZ2QxByF",
  "key3": "2ocfE8jypEvN2R5DC36ngURjmbc61Y2EFxczZmov21UZQGfRWeXyLDqBrm3E2TDU5eP24TczeHZ1dtMS7Cfa36oX",
  "key4": "79dsLXt1v5QWrnGy2BKqvGEtHd7roijuJ347bueqtyDtg7mydnmHUhhAAtYHPmyEbxhZjJoDoK7gbTFvrVnLhSA",
  "key5": "25q6VX9oidjcRkULgK4uUtdHhCzZwciBW3bQyJrFtxxKxuyFTTUBpQZ9MPNU8S3HZzoBzghiz8KoRWe5q4gjUyzj",
  "key6": "5MtJ8AeKHgs5DpcVframFvWW4ozdaDokWi9tmAThs6JUtk9mYo4TKw4FBXf99ctG2eQtpAruMhzpUEWa8ZGZDoVQ",
  "key7": "4JRRRTrcsPZdNm8c9ebZfwRf6SQzLExpBYFqAekzAvuz38sPh7B1TDqWqKKpyMabH21LYnzXZ4V34QvPZH7uoPsR",
  "key8": "3wVZuWqzzK2QVL5p26Qh23c6qcAQp1dkatAURq8SQqq96ZHgAkc5iNipcAwLVqfDX6gYtZ8pg9rt8HsGNuvjDmny",
  "key9": "4u6CSAPbs5U6j3peJNrwUyt8gVVGC7tbZUA1hnbjkxciZvV2kfXfxPhoaDaRSpX4y4bp1mGBN48iDActew45fKg4",
  "key10": "fnHajZgKbxd1PkAwcfnKsdKExeiSJcSKA3XxF5ojZk5kA8rUnCAFxnHMrYSrYvUP2HYo3Deqow8BXHSJgX1iSkj",
  "key11": "48drA94MwHykD2DXdfZSSLzi9k1hnSSBNL7AYtgYW9wV6gb97FFhT8jw2rKSGJ6HLUkwynHQzgtsxcf3RtJF4y51",
  "key12": "3v95caKvVPn3gDwvxLdkDTWZDqTTgK4beZfiChJhQYzNgY6pp4yz7evHewRQekUKXURMuGsyo1ry64xQNCGdBXhX",
  "key13": "3xDiWY7NyDfduRgLeNscFt8EsNPK6pByJPvNLT8o9anon4WgVJ8L1Tfzbxj43o2JyTWHqfEAkARQTEV8ZaSbyjzn",
  "key14": "4PsMyKFD6LwwzoL19UMtaRpCNLPxXhsTwo3N98SFULNw6gvMFxdwGdZbpSHn7nf7YkZ2W2DsV4ZnJuvmYTDQkhwK",
  "key15": "4fAEQg2hS2UXhRPZFjTq1Wba5J3jfTNWUYQ35TCqGzrW31R6B32p8mCQRckJaG1ubz6hbzkJzebhfd2ACdB1A2to",
  "key16": "C2izJbduddNfWMy5CE59xPQD1rKt9Luu6apQUK7xStmqUdYtobzVNZjWFFxpax237qCcescyrkrREcCar4Wjfgf",
  "key17": "2KjjbWsYHDbEQonSPeh7VViKgjsJRfzuVD6M3xnKBpqMs95YF6pzQUvxiRawAEgTWZ5SM2UQF16wLw7bYW6aLfni",
  "key18": "3RrCjeAEEyZtnfzwAuwnPuUVhuMy1d9u3wh6s3nG3Y96ieXsafdxAUHgCm32K43qwbQ1rd9RBQfKP2zu6t1uMpXp",
  "key19": "2RW8zsFuw5rt1EZXfxSxhKL4R6oJ3rQ6NZhiYkJxLwfLyWVoMhdZb6Eh5JrJCtECBARj8niQupiErz8kWMQsNo2z",
  "key20": "3FM654pUjWakSydwUPC5Fw93u5Xas4esdRbWGaHaJsgtNQ9omTM9jnpT8sQyguuwFSSDdoA6HdTstHSdEP9mwRud",
  "key21": "2LzU8TC59o1eJgQWpSEaxVYE5WMdoSdLNdTi5xN8C1a5DydjPcJotCbjWBQUhMhkETMVpAeTZxuudZ738EVpmpLZ",
  "key22": "34zpzvzt7bKczSE95zzCh6E1QDrUVK12GdLGSGhcY8NnT6wc76peGfNb62grVA4u47BsTrF48gkqErekXTw2jb5b",
  "key23": "3AmANRaSoA1wP3yDjG36poYShw8mpARcE4qNkDUcVjtPpwtU72m8SfoXV1VXn9xEuqrgbq4nRKaJCv1ctZCgWgYu",
  "key24": "4mWJ7HkFfP6F9wz4r6NS8abWS36RCvHFE2G8finaXtt9XbSTsNMvCj2tKyGuo7f8muHn6uf8qkKebrDj1JHpebcH",
  "key25": "2SmTGh4RMQxQYqDw6vY5cd6dtMN2tektbEx2GHWJJo6od9nThKiKbuPz9rSTZn62zrG65R88S6kGYDdoHeNkvZNn",
  "key26": "45J186GPST5wdHZWfyQ1LaNro6x7W4fBJcq7k7EgA3o7P3xBkDa6rmujogGyLpXhcSPBhach2cXWX6FH3UJGSMMf",
  "key27": "57oBpNfX3o4v46qJgS3UFXwKXdspSYkonrBgp6KrXahCXVDiAmWWPi4Hsn5sauqHfXNYJw8tr2b39fQfqyCS56fB",
  "key28": "3m9S92RPVGCZr6iDKyKvp6Xb2s9Cy75XLT8YHB3HMwTAb4zDNqckytDP8qZ7xFXLMHgWn1uqdkUnxHULntMUwWFW",
  "key29": "5NntTDXX2YhmW8j5kYzCkCjp51KeUzd8yqPKRNZnatB4LxqxMBymEdY9mao1d8VV7HBserxtL2otmp4WUnLqJEfu",
  "key30": "27S6TbYibHzEcNtv1zXfJ3Gg9iZMg4bosbRLzDTsnbMbKCtiEjJfEw6XkyEwYxKZkEaazRQmu2n5JM78w7s26D7X",
  "key31": "2Bqsk2DaX6Lt7fBH8ufpzN7SBiPF3koPfFVyfk3bAeJ5qdm3s6LCuyFmfHo6S32LnADHHqG7F8nyZf7sJJmcQkz2",
  "key32": "383dbA8AnFB7ir421TnqoAKuZAvHbrwFQU5mSWHCK8LRLCJ39fhtEUKpJkDFEmG282EgSSiqRmgRCSGpvza91sKk",
  "key33": "4xhsUgHNtMZxRURUbSBwXPXAnS6gQbjrNfsku4gso1vHaNpeZatQHk5uU3XWySanZoUzhRMERX9cG232Et46nrqh",
  "key34": "39dPTgodnUwDg5vKDfvucMC6WTAUw4NhCQZKS255Nq66ghmcAiBJATKdVB1MNDAjuLpYouyNKwRJDYd599tUCRPX",
  "key35": "5KmK5X4QuSw3cd8qYL3E8x85Vqn7pApAM1RBv3cmCdS36LHkXtvEmx7E6ZxBTfiC9TCtNEEqYsLKrRMwZkFTURnN"
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
