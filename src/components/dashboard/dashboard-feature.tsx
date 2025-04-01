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
    "49NhKfm7ercVLMVFXURH8aSLt8sx84QqqGLs1jkoYeDb9NSN13yAd3TW7f3w2PngP5Ax48cAzZRdupaRvjprnAtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "quMwR8sPKtp4twvGX2hmyjJNh4p3frB1R3VFG13za8zLdH9axXMgQuZuenQSwjhdCnCBBTZ9nWYoD6xsf7zpCaC",
  "key1": "TRzJNvnadhJqZ4LFNXBioAzvBDK19sDF6F7EAsP9DffhdZdeWZGbXZQ6uwbeASz6g3ue9xwZ7x1Cpenq6SShgza",
  "key2": "2wWVHN8p1MniuUXe9gDknyzLfSeh3Ym6bcyzXrXBgBuwTsEJpKkfwMizKZkQPYErmbqTjGXC6JFSgBQb3NSnKzjz",
  "key3": "5CKTpJeuPB5z13jvGJNVwP49wkbHvFhZBM2SNPQobhvDamEWnNwS9EFEx87pvxdNeu4q6b4NvRdP2wThs1DBYmo2",
  "key4": "qECXi87WgLdBZSHif9jUuiELkeuS8dKD6qiGaUUdpEmYfQUpW9iG2Tzpj8SBxjSqSgofVxFyECsBnfhjJWi4LRX",
  "key5": "2FbJBfygJDTejgkKysCnPKMFNUWTnVC7WSBh69oEwCYbXinBUVbSeLB2kLMs7oTx2qP6mBUVbScAos4Zpxz69223",
  "key6": "4uwN9rvvDhBUtgBW3JaWz9sYSBYk7gSbZydmyA7oCnr9wzvS2JFnFDgj7LY6iQe94n8XnU9vkETj6bboYPib2vBz",
  "key7": "gX9mPpJDdTgA6qg6JmUwLuB8iF2PPfsF6nBm532yAM72LSZL83mZgyw9RKbpi72oMVXXf1SFm5EHs2pnbMgL4Kh",
  "key8": "ho4yqynf2Fkag1LsuD8YMHkPVfwf4ANVz3NF2x5eB9xQ8LyZTETx54aTd5sN2oBnfh9ir8z11ARRRmmyFmeZYrg",
  "key9": "2T5mgfnKr1Q93ZskW77Fw6kuH7L6WYrAh4tDDFWmvQGkKFEkgrRr54nBeb7XX4fnC9fBhDdmLx4FLTijNXZiZPbv",
  "key10": "4PZCaLLnFXgaht9UuERVJ9u69ob9XBX9rdtf53uo8FbEAr2PRzE5mUPBL7tck44KMMKJUtNPJMugUK69N4HS4RGj",
  "key11": "2ef8UeMjD2m1fexnLo6Ei5NwMHErSkUDFmxBn5geyNhcmWLg5szmRP5JEYjHUFT2hCRff5FmjHBh3SQriimRV52f",
  "key12": "4S1bJcpeBs3XdT7cGpLvVF6wqKKAAsGs2KvgL2fsPhnjyWBAQErSfjYjsfx7e4RaZV1uus1MwtYzW9D1KSxNRoeh",
  "key13": "5Q4rzFbbzaAeH4BDfuKzMwhfr2diwmiNbCfeN5iS3YTZ6dabwKUSY2WX5DDomZJ8KjcDq2MfYcVkYSXgej6kWLu6",
  "key14": "y97882mGPSV854e1QiMT6RR9zCpSFMEz9DvL87q5L1XUtEekTFTPSqaYD1h2i3exnjuQCAndKTQKKbZNkLfpkwe",
  "key15": "4RTzRjFJxaZW19H6uxbMgA36WH8zT5MLpkMhoeMTM2awQLz6cQEU8CLrcS6Q8qh1TZ1PaiZ7vB3uxYwChbYLapfv",
  "key16": "aEWCkkctSdKQJzcuzuZL9DkSQZshJL2wjbj1m1xv3YkCqGgGXwoYuvcfCTxkAUQrM92t8DGBX4S1oTB9bCEEHK7",
  "key17": "EgJhcPew8oJa4A5Y61AnNAHytioqvVemyKjmeoKHth6JEaivXsjrAb3AdQ3tXyq1zNtoMUkFGBXYRGpVw7nq8BA",
  "key18": "4MyiSTi9Ygcu7sBeo4Hy59EerZ1bCKShWLgLWHmtF9WS18nBtvqe2NUAMsTJaTz4TdM5LqvW6WuynfnUYUj1LGeC",
  "key19": "QdPnr2HnyKMBYFFSZvbfu6SZJDXJEkFG8XYnFH4JGd6HsjAiZeMct3KDr7S6pDmkFqPXCAFEgmZNSTF3HTybhy7",
  "key20": "rJf2pSWT4btd3vJMgAZeivkGS8MqXUtmgpRsG4vwGGAexxYRGvjdzLx5M6bNr89TfPpWCqKUw1WihxUDGy1C7UY",
  "key21": "4LiiFDcTpUxb6cLTQgkYA1MPRKkybqv8gm4tY4WueEqPYYToQ4A3duivwbD9mtJ4a6Yu1qrPPGcwgmvSHv7AQj87",
  "key22": "3gzQpuQUsq6oic7k3ZkeVRS7iZqMQk7JEp4uQef3QqdFkydZphEWpJnPekiEZnvgT6mhk9bZtw3QnxzjiQxUzZSM",
  "key23": "2H1RqtFWGa6sLGbfwYSdmDiBaZe8GPruBWDCdyunpYRchrxKjbWkYNhu3T6jrKS55DyMsJMNB41xFqvt1h22a4uM",
  "key24": "2scTLFFjbr4mY1WF7e7CknA4MigwiwDuciCYL3xS8Cu9cdgahwVwdQQ6kjcujjEhekDGdFPTK7DPPDPmW9oZfMiY",
  "key25": "25wSSBTmDqf6tff7vDFX1hPaJJ9PeF9enFyp2ASza8wu93FPoWvTeXKqyVfNqyYWJczw4JDoZz2ex7LY6UTX9cFy",
  "key26": "4DsBYoiFpFp9GtixMKAf1x4wi9eXqe6UUU8RYwHXprg6KAKzrMZ65D3jZbDYhdLHtGjwu91FKQMgj3kvpYcLhXcw",
  "key27": "WnVyG51RqVqqMAE4AubctcBpKLGWxwKMgWCYwzKnNPQdP61GudtHitspvmgVkRrfanuT266cScQzzfiiwuSHvvM",
  "key28": "2Ley3MFYhjBWHeqyCKf6bTET2z1GwpSENu3ZnYhXUcLBFA4PKKzQw4eP5NZmtJDWh9o8gicZvcv3evG4qJUe3NMY",
  "key29": "3nQjSCXT4awTEi8RXmb5ZXnwgkorSd7Qar5nvhTusaxDaZZzndZ9W1RepAwBp1KnkVZgR8etXpyC1uK5tAWDZSzW",
  "key30": "3TxegudDhw6BzwzYVESrTvv6o3Tv5gjN932kXPgGtjFchogPJbAXDEkHpSwm5sU2xLSf6pGYz1p2YGPn6meYCBm5",
  "key31": "3TX4un3QN2f3Na7Tqp9916ykke5eucQ21wn87YpkJkLMzoeXrzYXh5tDjcr9dyZfu3ZQS4g8BJL5qpGBLpQbC7CV",
  "key32": "qhszY52hCp8UTyUMFURDCeibw8HkWVSjCJVH2mK1XXs5QCdK8NjfCrbLsgBuHKaTh1EfoHiCCtwWqTUysgcTw5K",
  "key33": "4tGYRHroErxpV1s6mJnrTDoBdhe4gFm5H5J2pQMXvNCqmDYhME76ucej48aWP62RLpDgqFHTMJ4qBf5cF6WwzE3z",
  "key34": "5UXaTvWoXjfZBFyfxrKA87b9Z8fbtx7Z7ucbtgqmuwfN459oPu1rK7REMUKK3Jg1v7hD4pHsj7Wx44akfBp3sGwc",
  "key35": "4VgdniAvkiHALg86VBxw2y4qoS8nqnpxKvcdbUsuVyq5wCRBB8PbbHchNaC4XErVMv6UH7i7GMcustfYACcxSpdC",
  "key36": "3YCyCZBGped1Yu9UPTbZxmZkVh1xWDvpY3GfBDyM51SqULLmE9FKeaVM4trTQuQaztyZgBC9so5hd8TuPTh1Z16f",
  "key37": "qP5TKSYF5e6q5kPbVn9QJwr2Q6WdviZqgr8912vqgsXtGuge6dTnjs2Uz4zvcKmRUd3aYfuTqWkFCouup4h8dDs",
  "key38": "23AUB7sGZ4bgSLcYA6aAFG8Z9QeKX6NGvQJ1mybaKY6fkciZi5eJcMyNFAX6kJeWf8VGUvKNFWD7EtTKb3akUbjq",
  "key39": "2WSpCsVSXHi3snU8bK61YFfxszigL735D9pSPgc6QGQrWRMcZjrKmbor6dtWSTLBr3q1MUL4TKPQHR1pUc1PLmWo",
  "key40": "23KYgLfY2GKc6kwavQcvw5wR279oAHGGpSE3jnzxhTjhn2NukZTMftBtfrwQ6Hjkut2JuEhoPpewuFnn8QdTWojC",
  "key41": "5rDeWAuubG1dqXQuZPHcpPwcGynms1HSgKZLc8sDwSMH3zBcMdrKr1jvLQTAVjnjjnqrtaxumiXCwkXBkZ3Y4EBg",
  "key42": "5NhpWYwjibnRrM6v674AMVqAT7KxoFxz4BLqDeXrNN6bkPTRYRkCwejy7qAPhz2yv62SKZBkiftGnDU9Qk2dDWEN",
  "key43": "3yJuQq1uBXs7UgZZaWmgUgG6cW4MhzzarX9oLWyXVLCoEp7X8phYkv6s6c31PdNkvQohEebNe4qeZdcTMU7iWqbL"
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
