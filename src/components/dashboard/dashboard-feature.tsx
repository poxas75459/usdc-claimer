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
    "p36XHk4BSeixVXMHBZQeiRvt3iCERng2UzuwuEGGg6c8W5BamMzUorDeMcgZRY6U5owUQiS7PSdG17nJ3LEKcX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WVvaP8Whb2efdPybRucyzuJcXme9RzCmXuR2LTmbsdgmxurFoT67UgE6xUTPMY4S67VUGmrXmkyzVvFagWtrdNK",
  "key1": "JL5rjfCRr7iUgCSQiHirGNm6qR1Xjrd47RBLgFjgtqEXEzRChQAuSupTBcDQaiN9UwP5jRPhreKD81wXNYf6teX",
  "key2": "4jvDd3GBJfv9YZKzeicEDfUaZf7vfHs9YxnZp9xikNZsQ2SQJNZN3kwiuzBh4HhXsra6LkVtK6PaKhMbX8ZynYiF",
  "key3": "2FD1auD5j1mNQnn16PBzwKKyTzCDqAWp7TkSJXAjZyPdQ4jJoxJDsMmDXbXQviyB6kF57RdLYTESApEgJHxbUWat",
  "key4": "nhoHz2GHfvtCoyeM9g422PHei6UCrVeJHVRR6H82bWaTRWFaUbnTBBQA9Rj7NMfhVCKDjcYw4iEJzKRJcbnniYV",
  "key5": "331coEsKNwWHc1PvtYryUyCam2Min4ogJWsstCZe35AUQdz7kU38mXQNM6GVHU2ydQwQvjaXy5vRd4jFMzfbCCc5",
  "key6": "5gSXZfE67y1pwfuFDbMcAPySEk9FEh59Jngbyc4iCpa9ECpZiJwJPr7NrhnmspJk2nr4Ubyg8GpvwWi8e36NjLvg",
  "key7": "2hqY6RZBAvtTzGkHjwUNeJZkKGansXVeNcsyDLiq88S9rriEamNbEHU6ciEAvJrvqoTE69LzKhVkfWeiqnzBYozp",
  "key8": "2fMzbqmMf4Lp4WzwVLpGqozM4J5hkDRYpD1JdyZ2tt46P8Z3kTyEJPjRw2VnndzzXiu1Uw42oPyLWUoCEUGFgGpj",
  "key9": "3yomHedaeiq7sfYEQjLMdannBM5uuR9QBd7bAEw1KGvD7kmpKoQBsQL4jfkvowUv9iRc2HSmntJZM1pBecXi4m6Z",
  "key10": "48RVNRapvrAy6HP7fh4ztK3PRQV3MCk4Cb87iJtL28z2aMToMjYMSKqRrK7AvGUbR2NE39YMvtgV6rXcio5fbCuh",
  "key11": "2SDarvfNyycjF9NAQonUVuJxD7kFadUjgYCjEzuMMRkYMx5EToUwrZq7Fpom7F2hBRi5fV96BoomgpyX5axd4pcR",
  "key12": "6359vUtSS4XEjfb85Z66facm8tEahzRbjKHSn1jEcD87WSeaWWaMmvuv8dZDH3JhPzDYDqwY5LphXmt6x735QpQ7",
  "key13": "3JuWyp9FTggpg9aAT4u3ViTKENXw1RgAwyxct3FaffevzBtAPLKXtJr1j9VupKsTustFxaPoTSePeCfYBCgfo1n4",
  "key14": "ZHr6C1fMZ5fyTSDjB9kc4j5VgHEmEFXUPH7Y2Cx6Qs8yz5HC7Rbg5AYfA8f593nZPMqpJqho4eCdn3vLD5fQG2f",
  "key15": "3wgND2AjtJszXxN1pYaZa59XQ5ijREKRNgBRudywkgbyRnfHeVq9uSkmBj7XNpkioe5fDBZccNvqT9PLhs7JNoRW",
  "key16": "po4Z7JDMSayw7R6ETVtu8CukaTwEHMg7idswafid9UkMQ6ifogTVy88MxgvP5frTWZEubtf1DNF1jtStGjg9YD5",
  "key17": "qGiG72phNYB7SYZxvJ1ZiG8kWd8wup2ZSN5eST3vURT67n8fN1VWStr9vn6sRciwF85CE58HXC44mvn13XyAL9Z",
  "key18": "3HkK87datB5dexvygm99z7Fz5co8Wr4pZQJ92kQ9NxqM2WeSTfde81ecA98Q4rHrrV69zbAb2braN57my3JiHq4H",
  "key19": "5ZZA3x8mnCA8UTnyidjsiKTu8AQxxzQS8ZQCBjPG4P7jMdU8Tud4pZZgdoHP4j1xG3mqvbkYJrPpd9LVQZdt2KfQ",
  "key20": "1JsJuZgerzCJfiL6NxN2rWzLMfP3gKFqkp2HpPd6VSXH2XwzZbcb7FhPTE9WX3yWdDt8qRnwFeqzLWGqHyTpHBg",
  "key21": "4bmL3r3FTLeEGjwqu8wQLFMnwyAb5dHNnBn8fM6XqANWT4dorgr2Gn7jftVVZ6TXXFChpYen2wZw4Hrq7w8deif7",
  "key22": "44ZXRR626kQ3XAoUoWJ5qj4TrbRMemh5XP49mmz7RaTUexQcV1iBkBYnVmrqyBahD84dwHhycWGBiUuhiZpxjPtS",
  "key23": "2BBunBYv3GTsGCFmiCYj68xHxVmJZdrx3hB99F4tZfjQ4DvC9xDoC6GnMPH8QU1xkg19jrAMxnTvmdQgcBKFRsaj",
  "key24": "2uEzpbsCgYesiXJbLKEpJFyrd6mGBURhJWKeQYWvtXhXt9KhTiYo5N4Pbi2F9RYtYU62kds4hdFKk3iNTQcsZZRm",
  "key25": "2uj2r4YPrcDA5nwuDTT3XPgqwRR48YLHaLHhiRfehVXWQwaWMJkhZ2Kp3166agoyeDf4Abn1btA6o9ygXvHY9P2",
  "key26": "3ZXZM2gHkUroRUNRc4KVb8BWUubTwGTdxFat9mW7W3D2cjTJVMyT1X6RBEpLM5kLzvg11yNbLvjuzGoNsKiCWycf",
  "key27": "591ou8E9Hi6xexugE5p8D5yUQtQCDzYbjg2xLGAEAMWWG941PjfX8fEFezJEMRSBxfMS8Es1AnkBHzN8jRB1ZN74",
  "key28": "4EU1xxeP2R6bUnXQWg4xioawHVXphSGrBJfqCsAEMLBubfBGwo6oM7U8V8ZLsPbfQCKx7Ko8nkuCQuiSfZfdJbtA",
  "key29": "41yfSRAqZRCgBD8VWKF3o2wL99bn62pKToQjHyVuvmJBEDH5iX1EyQx9MPJxZYWj1UjanhoigWjcNLJWSxPUZNa3",
  "key30": "5gEYZF8nvZ2VqjENeonmvCyTNBnrpxbszKxAt5NzJynq2DW72oq2U6ytVyumUgDXk2rsC6Fmu5tPDzsd4Bd8rvhX",
  "key31": "4v9RZR8avEhNsVeT23QzbKynv89aSBUspBXMAnGyEHY1ztikTg3NYLEGcewCmUevt2g9HVxF8nQwgg1nzWCU2UHw",
  "key32": "2Qfcyh1LioauKUkUUCWBEvApHwNtbU7Dto8UpASjw2PZry8uvxVKtAoKJfU8kQh7yXSJWapmejcA9r4pym82SXki",
  "key33": "3AKfuWsEVmUvLwA8p4hXqNXBj22jc5k2WJCqdkKXZxwY8XEEZMGpUxMna63NPstvRrTsGepaux2PUDPWAN2TWMXR",
  "key34": "3Df8H9nXnhTYoWQA9KHzyobAAvXedQNDBE3iVkR27Km6zJwLVe58qMoMFuuHTq5PndCA8icJxBQSr8tq3pD6KFMs",
  "key35": "2mUTUx3RGetiShc35sXfEpCLZUQCEVminDwXrNYT8LSxN6JmbPdde8xwxEqhFxe1oTpUowzfyyQnvQtxyo87xT4R",
  "key36": "55nc416MnJVgdVQx9r7aKRa2dQrbpc2a4eqz6o47opNCgBSrEzNkecMgMbignpjDucKJQ8rMSyBPSNjt4cgzmQm3",
  "key37": "3vcEoBYCeHkDrs8ccYe4qRUB2okytd72t8gbh176gdQQR7k7MhRpZp6hedPFfEPUpD9titKQgY5KMWg4GYSoa2xV",
  "key38": "271x9Lvd6gDogVhtMUYPtme7zu47aeuLQVR7KQNeVqCSg9gHBYJmpX53QiLhwHtWzvxbhunzbwSoSbAeyTYFpi8z",
  "key39": "52KcvFQzWwnQ5gSfdSWiT2bekdcnD8DJCosjL7ubhD8fsmo4TY6jY9fwgBWUAivud2gMZbJyk4shW4R2Vne7i29y",
  "key40": "3NsHmKE6Wmh4J7yqfHY9jb1pJEkKJnb4YVDVLwMTWcq6dQeX72z3My2nbXfGSyvZWCUfmjFG86TJtJ7BYzrAgCk2",
  "key41": "2VEiFXjcUJfuwps94mtbL7bZWwa9i5muXn5txUcnoMddQ7HA1fpS6o8j2HzYgJQbf4UNkfuPWHkJwXWwimx9hiD9",
  "key42": "4aBecFnzJ8YkT6HrzBczVWEk2whLj2KifwEWY5jTRQ9GfTiuweZX8FPEFY4dxP1UgDSSzeMLXXejQizZxtPEMido",
  "key43": "2Bz5XuMSrgTeG1hQDXXFFjsSXVC1s331o73E4AtWnVDdb1s7JioUeGcCwRvdmMB4WixUD9eRtAyKmsdkckMZNj4t",
  "key44": "4ixaZgJ4bc8mxzz53XbQFXLVssB4V8z9PoGArxPuoV9BUMAQthPLWLX9NG8HVczCRcGnFsCzBy5Yt1UJnJH5PWdN",
  "key45": "4zH7g6wiKGgJY5GXhhEZAybVDZkjkKzccLJgnYrVFXrAUtvaa758SDyr5dW8rqiN1WutFhxS1efqubXLAVKHRYTt",
  "key46": "5f8FFuVtWjeBAgA4gB95XhwofrUVgGz8bLCmxn6zxpJTUBgt8WKZXMzb3tfh15NRRAzYPBbDt2XW2AE9Q1K2oqbr"
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
