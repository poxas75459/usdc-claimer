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
    "5MWxCJqb4pJ4SLFzAixQHiZQngLKBbhsXdfTcAWMEaEhJo8JEhjybRYxiRZ2cvEHGTRg6vExWpYRmr85mouyAFQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CkRV3uABRJT5tqbYGzcD9c7Y3ak6FeSkNqJZ7Ex3vDCdK8zYsEgxE6zKiwjU3ocVPdAgNgVk4nVPNxepPxHm4xw",
  "key1": "4rejqchu6uYjya6Wihe3KDLvHKSva5Yg2ddtfq1guv11nTk1QiKen4Pat18fAnMs9gkFHHzdZRn7GC2iriyyV2PH",
  "key2": "27ncc2dd4m4ynqNagCG46g6RhJt1EqSj41Z5dD9Srd4NaGyyQ8Cu28VrFJ2tHqAh2kdFuvUFLfzU9vZkFMqYgSnT",
  "key3": "4QMomiywMKUWzMt1JXnU1WuZyYqY21ddWaeKqZpvP3dTCy9sSjU6UyMiTcU72bqpoZ7bxpSEBrYiarReTtoY9kR5",
  "key4": "22SrJaMLhq9FJNzHf1KD7TmrfopFRT6JTz84Mr6Ne2x66Z3ixnjnpN3Khdqyhs3uVuDmNLetNnMZQHTWKbS8W2cJ",
  "key5": "5u2Na6VycrJiUg3NAfYDtbW1Xf6zagMkywATd8R749gQG3NYyagKfJeYHUjxCzD9w6H6onzoxGd2aNYgjY67MH7S",
  "key6": "56thw8ctKtLCksCg2i44wmxA6vd6BE6Qw5QJ9cVduuAfmtLQxq76UALkHy81s3vv8646xqkA4wCUhii7epw8WbNg",
  "key7": "2dpxrxzTH6jBVSaPirR82n9jmVrTjVFoE9fvUyqfEUTD3fVxWwVr9d71eBQ1FXUCAe9FoGAUg24RfDNn5u9NWsxW",
  "key8": "25f48NjjfRevi7sJbrFQywAhcCkWniSksYjmcB2Q3N3FBhJuLGCbWwKzPrvBhcAJktfiXZSoEcwhKw54WC3pb53a",
  "key9": "2wwgYchaVZMuneUypiUiREorqP4tJ4W3hpVuaHqZMhjhN5Hgx1xi4wkj3QZxD7rw4X5KnKvZ9jw2sPQdeVMu5e9D",
  "key10": "2PgynpR8NDDd4xyJb6mXUkZ4uDBeaQbwoFjB1R8xmQ6LvjA6pwKJZzcGXGxRHqtunuZkbiF9keuVpQLfX2V3WgDr",
  "key11": "47tF1RfSitoS8HfucidqcwZCZ4yBysWyiAbsMBMSrhUsPCjbV3CMRUyB9gfuKMM3UPJ4aYCY6U6hRUa1rgYAW7pN",
  "key12": "443qQfXYKQFTUe1Mr6jszFpbZnVyJN8pq5X5KDWRBZYyvXLaxpeMcGdhrEkNMfHv7KnGm8sW45F6xTzBKFBuwuJc",
  "key13": "2vAW3kntgMQLbGR3FJHRzc2GTUSszyxWaBQcmBDkmJBWRYmeDCjXPEc3ZxPDRFDemdv8nRLFT9dUmwf5UZQqaair",
  "key14": "3H6YT3SvoMLAyFRJPEoPmAwZqeiPPN7tTtyDsoevbgu6mNzWs7VMS9io4o5v8euGSneQB8UPuZX3R1Mves9vnNEo",
  "key15": "3sZZFserpXTw2UM7GoMQdVtLnBPCuUgQQ6bdzzjYkms6sVsyn9SxZ8hEBKtoGX2ksc3abkrsKLMsA1x7fX8UW24e",
  "key16": "3TKJzHgRajxKi8AFxaCcCT1QX6yhZoqR48AYD59RkBkB5EQaipgCtvLXYEvsWEx6iwRy5Rn2wEBotSm1ez3WvvtA",
  "key17": "4TZfTLwTk3bK4oakFtWvjH7YR99P1pZBEHUyLphM3mwPvydpYMYs2Bzx1zYxt4vfUuhpjh2Mnp1dbeQLNF6K8bqg",
  "key18": "3enEubSbN7pMvbA5e6Chk8eGGj7y9yXbBR3R5gNAYzLJm4e4YzeuacvizXcwVNk64NETt8Sr1MizLGMFi5yGM4Bo",
  "key19": "5wr8XAicAQEHJTK8Z6hecW6uLwpg1YNQ84ZZimJBxkh9pcbAoEMMvFuUQm9omQarMwKKDpMQxFhV3yH7uvGbvV3s",
  "key20": "5Rmgowykm8wBwjK7NHBwWkwadpVfrJMRx59k3SEKhxuqJWQdQD6JLmC3J7tkChE3ZdhpEjkLxEmtzDT1vb32qHsx",
  "key21": "5KBK2xmBRfxM2yCP5eNso96FLWE9JSyJaCxzJkcoPeuedodhJHKFrzyWSWzBpNzRYDposrXTEnr2u6owXHVJrDvs",
  "key22": "vDyUQRVMAfmLCqZWwhdkBKkqqLe8Q34Tv8fFJSVrG8yJVfqFCj4uxY6cDhgL4dJUF6WBRMoo83btt7LxXvJULWY",
  "key23": "MBybk8sHM7Bn6vZaBvNTNiST1kZupbWvK9GDd3v5SHUovNJqyZCkE8m21VhUQVLRyiFRT2MZ8eY15QB7FpnBHzL",
  "key24": "5S2AyUN3QWk5xheLwwuHfyXNnQVWYx4P37W6MWmnfKqcn1NriA8UdFXT49nrXNKVbLvUJogTcQn2w5UG19D7w9EU",
  "key25": "3jdfUpGsikq6zNdzdDATHr4LbSd56i9Tzsaqf7QePDiHhBpuCBwpLDc7LRSFmhuXcXwqmUPLqZx1wRQNTy5aCxFC",
  "key26": "KsBdGJQSbZCoXLXLMk4RJBnKfTZftTGEKw1dsoKdtw8xRjVpWHMRx7eJmWf7xnPG7KJbbkFqQQkqp4Xibko6KfE",
  "key27": "4bXH5ZTEv6DoU9EtqnGHNtSsShbHmM9i5uu4i4J5CcsvuYadgm54qLfjtnhZhYgYDVuxB8C9RasaPAScSmKFWYnT",
  "key28": "gs24J6XNrrCp88hDNDZuQdXwCWAJPGkSgeDfjL62UHvdL4BDY4GRG7a1RTD54qTc8TDrU4jfqHGHnQzp1JjDh3K",
  "key29": "5nhcjG39msXPdxe99pt3ft8GMd31EXJMF8BZzjsM74CnvvrYdvbH4C8ARFX4YiTJAeB6ggpvvin3iiHxkdDgZztj",
  "key30": "4wvskiVYSQQ6nxMarJyJGcGcMRAxTE7JGhsmVVrGDjqSTarf6C1aa88gQkdjdq2f5UfvXSnZZ1fFBKKHt6Qboj5C",
  "key31": "3hNFo7B3nXeyiyZARTY7nVjurcXGvV4pZBp9aZYbG2KSrxvhGpFxfTzQjvYv5LyyYY9EnKj6V2eCiiZmJoRRVWqu",
  "key32": "3BsNNwG25P6XCkqXnpbj7VpoRUy8yrcBkKAvJcMhpM4yjxg1q3P5vQH9tRhDjW1eqHRSdhVxnVJdJENMrQHrFw5Y",
  "key33": "4trSKR1e8SZQkxdTHKPQDroogiycQWJs2ykirfDJ3CxqFoFuCiyKgW7VYVbLUun8rKQu8Ds4KQ2ZbUBCxa9a1SEF",
  "key34": "5iKtXNN96Y7aHw3W1Ci2xLSA6y1mJTghze32Xx1nTPhxU6emciUd7XfxgoZrthtKgrn4xKWtjDP7r7fPFv6zZ6yr",
  "key35": "2TJZe2YnkxKe9FmiTcQwfjqpZ4zMagRLJoBniATTmiNVws2wmAopZnTPQKqTv1ThcP6XucYgXvUUBNS4ZugtE2ZP",
  "key36": "3CfZnt94BN1W4Pk199T4rN87rhZfup9k1Q8ctcGvfAqcrCUJgPQizZYh8nDzZnPUoQUmKtyCAM8G6cbQV9rMKWBS",
  "key37": "4Uj1Ha87We1TWpn3QpKzJsHNNFbejR1SbjSUzrAozCw5aBTFjcUV7JE8c4H9mV7uxitYxR9mvgCmJuRgaYF78hJi",
  "key38": "ca4GaYPHr8fT6ka7pjz3S3qiL8xyB1NEVSuYtaDRsw8T5yffVM9hUTARQntQg7y2scukksfA92ojJgZxy3tcjRu",
  "key39": "zBkBBBh7zm7mPe2RYGbuQBMJnwX2oMg5PiAU8LTEquLQHFs3EHxwkRMZtPt3PdQjC5cATfUHWtwF1wi51zd9snK",
  "key40": "5qXFgHJgWyj71NQhyX2m8mTVC8HL8uk1NzMPsrzFhKQcwZeQ7zipeCP3P6zALpthXinjHL7peLoxZpseunxaG8aj"
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
