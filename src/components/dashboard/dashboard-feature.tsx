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
    "3o9vpjBsSDqSP2SNSsxEvQkNEPsLStkWsEBAvtsvCWNYds2T2MvtDkyaUpzJ34Nenm6U5ptGBh5WS15S2KXrJLuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TtjN2VK86rbzAjkqqNhuT9SuSBTgHXuijvaio1tbeVVejGmvGjTjqtYx9jR83J2gPGGxcyvkhFTXfHLV6JeYHJD",
  "key1": "3GzcHbVZT7Ka9F2oS4iv1iK2aZN4sYEfoGpHodR9B3wQ5XZcF5d56i7Vc596HvTa6JBC7WiccpYsbYqyU8q9cQsB",
  "key2": "4CzrxdKqshS59x38iSE1s34VWNLCJ6LVXJLS9j9s1Hvvc8SPh9uU6FtMXcWgnpZ9SNV5EvXiiYTXPGfTfiVCXXTi",
  "key3": "4vrCdsFzrJMgfcckUM9YT8oT5WzmT4pDL5DNn3fVvrSvAQpTmkqzs5E5pjXv2JK8MnuFapDXtvLHsmq1wugq7yRF",
  "key4": "XPzYX7inwzhU23y94PJWfYcpqHC1n9tAyAhTHFL12XoNKmMjLte334AujYSbUMwQ3Dm1SDzZjxX7hF73Xv3DTpA",
  "key5": "4oX9Q4kBQHGtME7A7ntLoZ6NM1JQtNMXoznffm8eapUPQ9qdctQX29J1MuKZAPJuXvNPptf9KKrMMCYSZHou3Uhd",
  "key6": "4wfGYp6gNMq3ADZ5CgfFve8YXVKM9j4ovByfBc2iAswbC2gSWtBjGTvx4aPsEYN1ZEkYm91fcnaqQYyJmqk5TZnS",
  "key7": "3MagWSLdH87btxvQ3whQGrQNb7NkvNCsyuDURoiA4SV3q27VWAxT4soWi23QHTeFXmcYFmoumidhpy947DEYcz6t",
  "key8": "5bVxbfAvxNj8YKBpHY3sbPxJGP8J2E9zjzicVZXbZW6gwaHTtXW4oawXngKgoa9gm62uZRDF4TgnEkVzRShGTGWj",
  "key9": "2uD21PbYK3xBH3kFgKYaDj8erqqqzmRkNBGy35Enrysnem6NU5QTzN8oZZKnmfvpB4EfGQ2QEdAhfWH2gNQicVKU",
  "key10": "vNqomaTJm9qmPN2pdJJFVQHc1eeXJxpYAGyDjPEjdLL6qqLQozpWzgUtdZe77vRYKq4MMkhpEyqft8E2RFHooGU",
  "key11": "3AR8oA3FMsa1fnb9hT5tYh1wwjR7293RuRyMQNvDG4A5FGcJTKG36iXyZ6u6vVUt7czyDB1NdepHGEvUUNAEyJfQ",
  "key12": "3SXwMmF9dKaXEph7ygQTrqFHTdzpfxuRPNHWQ1JFhxFZWmuL4mNnTApk5sWVzU2i8L6YSEy4RknSZnFWb4Mfizep",
  "key13": "2pF8md5RzP3iQ2gYrMCvBmsmGTtfsUq2MXLfSqGojHKgKVtpACyAw578x89QFRxgycsyqxz5k6oDxLnNAaaZakDV",
  "key14": "54hgm9dmfvrSRnZi1bNa6LA2uEgjfvBVHVhiWTLmppsY7mQLANwnYGWsZZcpekSPBxddo49CPZmtzWirjqTcJkmP",
  "key15": "uJytwhD5x3Rke8Fzd9PbDMkmujx2smPGFeLHbEZbHJanHTW2zeYhyuXUUKFJiWkaH1YSETHSyfTqvx46KsMbEuU",
  "key16": "3cyL2sqz1oniJDXqQ6AQDAa1uYvVJa8K6foSTDdxj1MD3YijdB9jaiTAz3JEW4V8eZ2RwJwXDd9qBZHpPftQ6tQm",
  "key17": "5zCv79Qk8P9w3JjjU4HDdt1XnbXJHssvEhSL8ZGBYmQjSKZ1CcG5MUTJSsddBCPoYart2azZcn8acgR2bt5UX5vn",
  "key18": "3yLogDwdrA4BMfuUqwxhRbERcJF6Y9zz9Nu6EpYgWgnpYCqipu22zJSUv6w158mGcL34N6Cm2petooJ59AJyEgc",
  "key19": "5NXG36EgJttqsjugmDKa34k7a3hQkbTrPA9kKjotAfe6FgUMiunPbenp4oqdyMaYCsbJrFz2QMo7kHWao9ZLcQTR",
  "key20": "242wKvToxAqTdvc8kxhmypGZKWJYyuGb4nvE48nQna4fVUCQFgHkPBp9PqYtYZ3gSN4S5FHyZUKwtBw22WXHYGLP",
  "key21": "m89DYcpXwE13XYLaEfZ8LCHxuubqUnSvdpB9rii8cTMGWTEZSH2QSz5zbnSrg9LJa41S13T8Dm9oxDypfBjjKdh",
  "key22": "41zyh4r9fjYe9WjdAmyXSdTgMdMjYXb6GmKTMJwWpekYVgzUoEKdiuRiVSDoer6Ez9WBbhZKcoa7V4qKcqvwtPeQ",
  "key23": "3HphQiFXZiV1H9BU7X4j8aCbf1o7rDffoqcZ8ywhFrWnY3AyLgQXLtQ9Xg8tLPSQZznZVze6i7a6HJVWUbDZn4XK",
  "key24": "VPS26hexQzV811tuPQUmqJC6QzeQwUhAq5iwwe36jMcfWJmKgFCrfK6HKmWZohVNQmFjBQ3qiQmyPNjZfzjqa1R",
  "key25": "4iHKgA5HutkYycbG8AH6c4uUuiZMTdCeT4PAVzzTX11G2ayp2QWCsiCXV9fYXpJuW18TqRiFPwVSn6bChtWHy7qX"
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
