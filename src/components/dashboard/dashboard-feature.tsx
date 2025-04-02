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
    "85xYr3dnUmNwNKjqb1wMwNKGWDoNweCJ999jzShHDiX7ZSQvoWVfFqtTiatyoFayj5CFM14YamwkcSxGXmQNjqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21MgeewfKLV5C6z96VJro1A4bomRisN8e9o676wnytYoMvzAW1fStTGt8uiz7azzTx1VQsWpUbEA6a1Y1UGkszrB",
  "key1": "4nwWMvV6A5iam8WWcr6fXa6cuAi4e8LkGmCf5XM7qvNrRvDKx2KwVgcUzGua4KruETDF4fSJX5GxxaE6BPN8pmCm",
  "key2": "5NFW8MGSTfdt58dQcEaKEqYrGrX5dL4ai8ZVNJyo4Pzm2VSiYChzDjskADWvZac6eSi8HAko894Cq6sXWy4eqikA",
  "key3": "5hBSJ5A5qmzg7KzSHyB7Myk6hsvTQhPRYbNSimwHUS1BdMfUxA1aRTiLaKSZewHuvgNuxSgCZXdFxjuYEE1ShdUZ",
  "key4": "4z1H6Y1dxfhEpLYuEWTgVgeKwxyyuc2STrFQmZAMJ2ADVE4bB5CU14CiSfKkY9NVtaKMrSrTU3gh8DHugfoC8QVV",
  "key5": "5BZEcxC4KV8Dd8LeWjsXR5mJfM3WNeiuLhKz3ZkXDKsgMxhzk88PEsL3X8wMooTwNHYxkxXuAeQAoRERxYDJc7FD",
  "key6": "5WkXnuFWBXVXEY7SjWEXDNq5PhfHsrsYjFtzS5kniwxjm1Ciyeet4r68FRUAd1xMkZgM74KCzVqnaf6Cm4YT2sy9",
  "key7": "4L1nUDarBKwH1vsbakLjvPNynxwgac2mv2Whp1W5pVKxNYotSC6V51GTi8SMs9wN2QEjLndE5YVrThJJjzJnQrr4",
  "key8": "5WsHzHagaAj3CRc8zs2ZBAuQ7YZyNujt842DSj3dbbD5W3vqh3LUSYAeYiJnEeejpVCTEot3nP7uzcb1AmJgRp6Z",
  "key9": "3q4WUh2jVWjUgBwjLVYRuNiduBcyXRK7z9jv8DE1P88ABzRxn78ZqqQbc22rT3kRwUrrdPX1EaJr3cLNcsyM832i",
  "key10": "3avxwiUaP4MVyYVy8v1HhZuQUy1CoBmVHNtu7eVLwYcnM4pqYvAwMyerjQ7nVWsaahKMK3LddfzLHbVR8YkjoPyc",
  "key11": "32anHxt5bncXZV9M74nWk9x8VKfWcCxDjXCw5zidfwdXgM3a828eSPHFFR7qweAnebPXbvGaeZgCuUQHLg7hgpze",
  "key12": "2xhnkJMsZHmJ2AeFtgS8rGj6f63KyRE91eT7BgDFpFjWrVsJ6qxWa8c373aSx5y1UasTQxoSFQy1hL4sLpHfBFdT",
  "key13": "3obmnSRHdun5XKtawvrZz6S9bUEBqfxX6vN1ajmiq8SpxtuRiQciMvKPZkZoNoQk24qnQeUjsToCyjzahyMuW5Vt",
  "key14": "2wcZY54Cf5hYNiscbEiRz5YBxMfAa4c7tzTh8q1nCusEn2MvhrLRrjDvwECPmFwn89BLFSEDK7NywceTLKSnf7vm",
  "key15": "3gY5DyrcKvZjqEFSmwhKrPgM1cYjLVPQ88ayL7gMfNeuPD25MpEKzCTNsfJNF8iHg4jNg2bWZsCt25YvkKPncAHv",
  "key16": "5MeAMto3Jn1opAj2FB5J47SFKFz49h7Jf1E2Zfzw3AmzhLfsXd1jjiMWmy8xpjG5CTdNvKavAWocSut6pveLPFgd",
  "key17": "54fjuPFkGrHfmSXFGsArGCx8QHTbck7y98CHqxUCzo1WB3oMYfqmMkupXZVkQt9SyDtBcqmt662Abcsi78852xse",
  "key18": "wtUTvXjXwJoY873obM58AbpCt9m5Yd9JZ6sCntkQ8zJmMmwvZrHwfynhhjDkziELe9ujK5gi1ZNqdGJmdyXkwaJ",
  "key19": "2kL1B9qaXrZfAjGQpq7sEZhtsgGcyBeZXWNL6vZzH3ScmCRPuV6bFJEvVY32a28q14gqqonPijgTR6p6PJfdNHB5",
  "key20": "s1EyH4yXR97ZojxTmSV9US7pfk8nHQPYr5FYjvhxYWbDGqWPnnAHaf35MrmfYL5oiiXAxmJDXm4UVcM625yKo7f",
  "key21": "3CJHyqHJwVrb7CQba4kyibQn7MJRGaQm1X2Q9LzzrnEhqvnp422yzMNvtt15SXQ1cBa7ZczmgNktjQq9fsyrDTv4",
  "key22": "oQXHz6kQWeXuzYSCjZDB7tUUV9dVSEWCiUY2BuNBwKZSVzLJHWfagH9xaqsBx3Yg9p73opVTcwn9pJ6ywfqJmsM",
  "key23": "65uQKYZACi9RD9qMYDqSU6UJtswaNMAENicyJfptQTDwkbmBjEaa5KcbTRwXr7digrfd4Zo6HL54sLnx84kr9gSf",
  "key24": "5dRBrDuqQGHqFDkh9Ud7hxhxrEG4rwYcpVD98CB3pNWkB3B5MUmpQnvJFXQGgXJm6GkBzN8bLgzNTZuEEeEvWkgw",
  "key25": "5ZoXfTLrcDvAzUD1zpyjnp41CjgvvLgodM2mU7uZKv8peEvdpfDVSowYsVL6oAEmAovhzPRc3sxJAvzze3rvwXEv",
  "key26": "n2jKSiAPFMCBQDUTTP1qNPD6fuSue9E5PC3NSKR6kdnsM39rNi51DjLWG5XrdZc5zfEy4w9xZ7pd8B8cU9ky36X",
  "key27": "3Jhid6uCifsUSkDSJtNoQuGgQTLTHRQy52wKonxLn5aSBDWgrsKaEcQMQVSe7oF8AgGR96GSa9uVS74ijRCM5s1P",
  "key28": "5vCJSBNyszztY8hQtQM37BLuFvWUEmDQNoCgvgY6ZauZsCDTG3QQpYJbU1E1fy7PHEv1Ttg1RWHFyagmAivMPhLh",
  "key29": "3Vzka3VRZsf4it8E3C6Cvi7Pz6V7eacAEiTFa5qmKDURwU9x597xUv88j3tYd9ihwn3ebnLjPK44adf83HGzqucx",
  "key30": "5nxXsFvGuexScaQrcRseZB9FwfYSmWmAkytaDxdPUsnLtDrhnszZ1yc8kUrmNw1Bhbr8PqPeHSJbhTifdLSGr3PR",
  "key31": "kBDKt6kjx6SoVayqqnnMjzmuaZRLH29Ti8WjMC9oz46p9wsNR5VpqMNWtmJc2uPQH6nbNa55vvEML8J98a5wfKe",
  "key32": "2AmBS1Fjw5j9og6Ke19vFdb3omHGYznaKzNciAyssC6DW974JQcMkYCfJmRtP2gEwc34xrPNtnZcpjuzw62X62hY",
  "key33": "57ZYALJ7xdPDQDRTiBZqdm9PeCPiFer1gyyJMjfhx1WT1BwxRYNNLSEz1ET4Rb4RAUEpSdkBR1EQNyYazq8ywJno",
  "key34": "3q8GKtdzBEKRZLEr3exoKs7L7cLLA7N2TJuLT9WerPYiahJ4XcFmnkzFgZSwAMkn3HaVR9Ytyj3cfxvxnopoZ71q",
  "key35": "5nRnh7gJLCA6zWwmUtaZ5p7fRJVDJrXW9YCE8U7JE8xSNY3TwEcfa9QvYeLjoKR8TbJsfRQpY6uMSG2uhASDK2Q4",
  "key36": "579S7FQCa7sEyX6NKCcyofw8Mhz53hD8yRkczRaPmbUVi3SpaBnsvZMBo2LxFW667VfDgdxLpxDJ16Duxx77UK8L",
  "key37": "2idTmumBFAw2Uez4gxay1KkKYewcaFKv1rGZYvZEcyEPM9h2uCJ1YDrAgL9qfTjwUkuuXV2d4MF35Ad4avCJ65j6",
  "key38": "g2hFyEeuEw445Ks551LckpbUno4bpZ5sWSfqEoqwGVjamcbiBuUXzQJ2zQ7nkvwVhgLmdC6DTU6V3uahiXfdKEM",
  "key39": "4SQKhvjiGkob1Y65mSo3zMhARFdy93qsp1ZgZPutSYCwp4q4mqTKUt59jmzsjxN9DnNCrzpXuA4tNvUahW4uhfPt",
  "key40": "fhg263ZhWnGNrXTdjsPksFR7BB15hNw1UBJp1NE1W7w8oWm77PDUZMDGwbCU1PhEEDuvrjFKG9KdzjxPCYtzr58",
  "key41": "5yBa5se9bkep7f6QK6ePuxKGTQ3Lf3bFA1FRjWuAatfCBWFUyAhPjWzJuwRrztW23aufYS4PZv3mwBxU3nJZdRPV",
  "key42": "5kda5TPCHSJDhooMmdwdtyniXw5CeZPiwSVrBNuAE67JyKxdR6VwkD888xtrWnRCMhasQLCfkX19xqYnrAtGwZKt",
  "key43": "4wHDUQpufMZthnvS1qsuftxzYU3SJKZuCgN69nSN4AQUHvsWmeaymxBGMgBYMzKr9B6UaZ1gzUJf4ybUGoUY7Lf4"
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
