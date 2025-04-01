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
    "54VzPhfDb2hi9tKiEeXAXanpumm3PtSdCco5CnWD9LyQjNSZo8jmYQ98YvFnmzM9UbgLT38xBNztZvRCg9mWft62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iWz8iJfYN34mukWuQfJKYDsWcmZg1Dp5jut73Nyrn7NMkz4Z8NoEtJJmMJtonM5XDtRvBgregrT7m9DVGBAMtzB",
  "key1": "3Tg15QSEwn8KdaLaHg9w8MLVQo4kGtAmCe39noPFZMPH2KyT4GC3iFns7W7oLx7YRpz8oPtJTLJA9CmMqYnuCHmu",
  "key2": "466XsFfH5p3iXLEH9bFFudbCQFVtYZMyJxrLn4cogy1ep8g1Lpe1nALHEvH9Mzue554cyQKv71i5VacSnvzrt2Rp",
  "key3": "2vKUf7CqrzP3Qrg5siGzz7L67eWHQDTxoyiZpDKTwjCom4pqZhwbnDYZK5ahGw6ZhHJDNQVKhkW5eWE6ozdMWPJU",
  "key4": "4N3EASdua84yZ2qvU6ygQiMA81izqttWTzqsigmHZ3tDtCXy9RM4dbkC6qa4znuYXvTYTPRQeQvBD9bxvFGWwQTZ",
  "key5": "376ziqeH5DQ6dSc66c4uYqf54sTcG2pmqSYENgLddjfHf7FoxsVKyqsBNNsn7BSdoxuutjZzH6n1zxStaaVGkBoo",
  "key6": "vFYeeiske1hwpwLjfiT7pDp22ys8c1smvYmGcEuidf3cUQovSAPKhAEmks4mKJKrQejBZFKaK2BGZeMu5kQwV9c",
  "key7": "2xBdokKmGW3aNQB1E6PedEEQ6KPZn7kJGh11kTmALhULPgZs6S3wRELMbY1C9No7srnuWqjvPuML4qRdak7adiSs",
  "key8": "5XU4xFJgT4ZZXV3trXWNQXiur8trkkqM57Un83rcD6wzfwn8aawDhc3tqpoF5KQM91uNFc9ckXX6w8UytVphbrLY",
  "key9": "7gM8y41ri8EQ9EBwFz1NpodZXa3uZTnVm3JVSwfyGEseJMwqQoGvbGwqRd5u8efYBhVmLvUHfwSRWPBSe8M5scC",
  "key10": "4fmm9DWY9D6MzyPoVi3x74YZ6qz24jPf4sud57vhxNaaVMRZxLdyYmVyHgDJaR9v25t6CnwiCwj9gmgbRPVEp8pj",
  "key11": "3kmS4htAsUCqdrogUGogkU7bNdpch5FmsAfqiFAx2gF3eUoJKomPgY6J8FjrZqPPRfjV3RVbcLzYwgHY1PKMXMBN",
  "key12": "5xvV3yNTU4NMG9sfLmif5qzw2cFNU96Zok39Uk9pYQsQDEfNCjww8yDfYwX3anQzFQBynB5DvTWrehfRyJ4wKELs",
  "key13": "2N6B6TGLpLr7uz59UsfuasnjdL7Qiy4DoQ93xt8fN5UL1xmFs9C8DvreCm9wvTcYWgrsUtQAPP49aW44WPMCAPZh",
  "key14": "3Gcws5J2cRB4uS42TFBcoRiu2ENvKRVFYdL6tBVu7jFyW76JXxed9UwzfCAn1rQr424pS59tJ1z3psWueAa8o74K",
  "key15": "28swkzTjg3gr3oXr7gdmQHmqZLBuKjyAJ8XMSXPJqPMJgh7u3DmJjcopsnv43NLJipvmwYMwVmS9dVQnSK3P9sk1",
  "key16": "5MTfEDGvfr2VvWjsiRLYTT7zBQRNJJKPbMFRqcs8QhzWpZ6WH8RR3NnSXiKML4meos9UKzQR163M2xzWCNsJRtin",
  "key17": "5ugssf7ikGKYmSvM6g32i55ZHvee31oR32F9zS9KQQvfNFE8UbAYfbje7Rz96Kna3VAvLq3P5B7zVC9T36ZG4bbS",
  "key18": "5BZg69QySp93VN3hdxYDewsKjBxdrELdPpYd9JTV2ogiveQzCc24rR4EkKrZxHYHnypWqPQsH6fsEFQCtjqZLWzx",
  "key19": "3wk363sNWfAbmu1nJizYVvGquSLyvH7tUjUsymf9G7gn4u2eeaMeGq54nKY3Qkhzp9EoDcEVGhKXSzNMeCBbRRzY",
  "key20": "42Mrv53NRhsZS956nepecyWFJb4mLcuikgG3NDg4NmCBseK7h5NCyfF13Ev1EECcVHeqogdqy5j8SB5jNZoBs1CU",
  "key21": "4YAWtx7yBxSbZ34SCDwVqMWumah9Qad5cpufJ4W2DyMFY8vkX2i2xcvyYfcZmiuP5odsE7YtKWUTT2sGLQBph3Kq",
  "key22": "4LUPmmnPYFbdtXfP95BLAGKEpQjWTFgaovvxn9uskRcnxixBKJphBvT2189kiVp1wcbVf1jVkUVhJkYUKY5JTuMx",
  "key23": "81ktwVBg9Be4jVzp6t2owtRiCs3YigxzvfrmkKRzEDRU74xtuYGdotdmuP56psrZjXq9kyVf5Daf6ZaWJRBTKxh",
  "key24": "2jFCT2fAAHqEV32HcnGnzVJaKeQEpzbkXbbweip6ZZkw29ZMNuwpqZiqW649X22rxeLxNHrkGQSjSMRzNEoAZgMP",
  "key25": "2mhSkRpPRHMAWZTQtYzxcHpbjUesmFbtRXBhUqfYcj9obUigYmV4CoVRSqSASffum6X7bwr6fnhwy7igcFGPhQzo",
  "key26": "3bwRaHnJ2X2iF4oiXqp7Zm8Rffoyme8hmYtiQsuysWZqn8uqfEPzCYMQQgvX8ZfYxH46vXnNa9ZU8ATeR9N1XuAP",
  "key27": "2Qcp47bxzrfufcsx238Y7SsWHBtNAgrzm185NDhj21oRk9whYtBdeHTPFAWcp4DHPP844ezTVsZ6F9JEFYhP7eZz",
  "key28": "48WZNZ9njx8VHz2iCGaanb5hymtQV7n7A4aJdi7QYtpPho2cRYpZ3h3sZd1cmXpBkLkTK1EwNW8DaXw5bkQ9w6gZ"
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
