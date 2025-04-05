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
    "sKJDVcGgncCvpbXLyAHjpaNq9Jf32jqwWh5RBZg2bTi8bPZJr6V3czhb6Aa2srdGvDxae2bGUj6Y5TSaSoA7zD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HAk8BSxjFqdJAUhmHrdXs6ix8vSidNynQqCjyixszks6WkLJQANyCDLsUz6RjR9jDsnGjkdnBqf1ez4vYTvNwXp",
  "key1": "245nzjjoewJNQqwq82mWSdkVb2RvpBczaqd4LBvg6WjuSqGDryecVsLvoamLXBbRVxf6TdLkLzGiQRja4ubALV8u",
  "key2": "5ap2jdogkXqU8nRad1WuH5ACFzirX9uwF8FCWMFvaH656pXdM1gm3R5euUCA3XkGcbgCtRievSXuEcXoD6mVb5gx",
  "key3": "5AHcWySzrdi4kfHEaWVWBDNbor7F2BoHdvuGni5bXNJGbJMCWde1HvCZsWcbBXSruUp7M9YoTwmw1UYezUptB8aX",
  "key4": "ztkCC9g7oJc2CnnKkdsgQKw3bgFrbQPyKPSZfKtzm2UwAVN15wNvk8TViWMboFHxAX65jEcenbLJnWQUFh58kHq",
  "key5": "5EXonppYifDbbU2PU3fmdbrNyCGrywxQYGSmh1iZf4R2MoFAjSwxDJasHucvuCMZQq7WBFFhERbYZDztuHgJz4Zw",
  "key6": "4gNBDF5JDqMrU2hrvWhr4T2PmHMhC7Q9HUrEKCNN7AKu8DEmZGvZrVQx9vFSmWz1CLd2ariMo48h7mfFdzVpKLNT",
  "key7": "4aPv1vkmCJWCCR2r4FXPgVU9SWENMQ35tqwi3f5a3jnvJ4AWqPzKQysLs8hoYRkVYP1rF83jHxcaMJFzRktDtMXi",
  "key8": "3c4VybrPBuo4CLixYXv6nVdNcq6K6jk4wy7ZMX5an2SuWqa4gvqeC8xiiTBpzPkJiFKDcgVP4HD3g2va1X8Tm8rA",
  "key9": "6cSUDqQeYdJV7HEFUKrEJRU9FD3pyiy8mckTQzRKNc274MoyAp91kej1CuYt8ttLUKkwaNU58AkzhB2iAELkTHH",
  "key10": "34pAEvV4NjEfuRkcc8RUAHVirJfhXeosvxCpTj8c3oUkSLTAbGT7bVsyxHA3MnXD44QyepsZcszouA5s9zTfG3MK",
  "key11": "64xpDXvRVXYuvzPsY5zm3MUSdRowL67WKutgYvfrYDCCy7dEu2WY3gY286zh4UsZpqttKZmY74LXVx87L4iHbvex",
  "key12": "2GdmLuq4en4hnQ71dHaALt38GLPPFmChicrUSc8UgSKbdD4furv2r1VdwsQrDokjCrapenJe1TLoWPu7Giv1UpPK",
  "key13": "5vX2YreWZADWjHfiCQNpQA94mPE8tsmvdb8MbqBumvyo2HfuouFMcnFwUdUBsMP72yivi89v3T1MQyPFm8XH9wvp",
  "key14": "64YguAqSTnrvZ6W5bYn6XRgkikwBrd5MMapzLwLbR6ueLuboG3NXbpwD4wxNoADrsKggESv5uDUY8LGnmeBkaHVe",
  "key15": "4GXQUDtzki6moxW7pPTu9K6n5BJ8tTxReMZvkzUiDrDypXmm9QVHXUXUpGBpeZ3wxQdb4d8gP6BKhRgVdf2wNvfk",
  "key16": "gqxLJ5BpiiWTJQXmSTW7PSWYt3dz5BMjwdfKwSaHKutDvDZZpXnr7zDMjXToWoaWPwAPxLSMzArmwG2UeyqpAYT",
  "key17": "jf62i9f1axPWXpzNrUNWMQmiXueMUS2MHxTMpp7PQDtd4LZkkAd8s3G7cLkhD7ADtYz2wRSNs5JXWW66QXsEC1b",
  "key18": "2bpjhysBXEE814vHBN9PQatCU8YaAF41JouguE5s9cjTq8SRqgUQn11a8tKhht86CFwc6rx23TJfrDewtTEn49ZQ",
  "key19": "5GC4hAKYoqm3ePM8guAvGKiWcNxT4q1sbkUrciJzqnv9VXZs69KDDiRygVSwijLikLpUbkQoSL6u6P5yBCbRQsaV",
  "key20": "4nKJuSUPGYYejj6AiKK9wGfS5TcdpkVo7n58L6xL9qbRBh5DrzuNts5VtNhCKnVQxxLgHYEtyCKAuubKaBvZWhDe",
  "key21": "2XeaZoDEpJHL4QmCwkwCSMUVgnRbd5p6v2gX2ciCwcv5BRCbCZ1B8Pn399J5PrNpzuGDR7Do5LGstUcESQ7fgDCf",
  "key22": "Zh3EDPvMmkPriwnFvF73AirT89RjMuxC6oTbaV3PCfb5iq8YHpZKUtGxkRuHohTe81QWnzHoJAAbT3fdxqs6WmC",
  "key23": "3xtrEYPzkTWDQUam8Az4nSYye3hEcDgzymCjTog7vN1kMgb924Ze3geHMWAb78qWkH6JmNYFVZrKzqnRiYgTZv6E",
  "key24": "eDxQYJXBmWHi6Ed48trk1mHdRPtNn2sHzwkQsucdLy83hBhfco4dGZVvor7gz6QMvWtx5kDXn4MinYK6VNfUf3c",
  "key25": "22iUcmajY7QUinVj5XBdiaswS6k7rd9Z5ccCdWa2hVGnHgczo4Cz5VvVcE6aVc3nQSK5sBcnXnKtz2JrXwozecpv",
  "key26": "5jUpM6LWiixqF9H4EGJRCH4LUZZwC8Ye2n3huLMsRTxZYqB1XZDV2qmKDKy16dkjmLsopoB5YQdPEGtfQ5WTTcx1",
  "key27": "5kh9WEdVy3D42iz2ypKDGPLDMsgDP8t3Qbg77pwpZyNNvqjRf554658bwahVTvKAUxgZNL239WxkrwE5hby26pCg",
  "key28": "3KNXvNzeYiuTcYePKU9k97aMXp2byK9J3mdDW7zqyf6agHBSULQVwGJXUdxakdkUSAgeZg7FgTj4NJZWMe9qncwX",
  "key29": "3x9YQ8ebQZ37GUqbNvjpKVnLcjo7HLaNwGmN3M9XaMosfcx6ALCXeCzTRuuShUZn8UXbo1GqXpMDC5KJA3ZYMNGC",
  "key30": "2Xk6QgpkwxxEmsz3LPgXKPRjCve5kyJBsr4JSaZu47UaxDKTqZBs1Jv3tuMcGHpqm7QW5LgiQgTkgaa1WnHNZUag",
  "key31": "3uKkD5D66g6rnkGv6TX9rkGvSCrW1pbWqRHPTD7TCcvULkMVNiKbA13CXuxyw5z6xkWyzkvbnuJmbG6v8EvvEXE8",
  "key32": "5GVY1vcSr3NrM2ovwNzu9Yp3fd1trqoXp7JWbMrKgq2usZpqnLSqowJEUcxZqWMAe1wkF3Pbazyxerh99oaidw5N",
  "key33": "33WWKTqnVVFrpbnvEsYRQ1ir1e4Wj3fPeVSqc5omN5MBjUn17j2W2VBjXnLsd485wSbK12PGurxU7LmQbUP9RU7t",
  "key34": "3ekY1FCQPBmUMwQLhMzKADXAc2m1wAwXC5hzP4CogfREKF2oaCArthUNBfd3nuub9vN2FP14hkYUSzkA6qvn38MP",
  "key35": "5NhH3GkqNPQF4b2sF2BomjaMx9Gp3u3nqNyVXu8NrF8Mcb3nbFG3vUTUtzj5pevUYdX7786n1xgnDb8NA8xb6GQF",
  "key36": "65GFYYnMaugyCdM47UVw9U8VZp5f1UwC1xLtPfVYv4eJhN5MRyyNNodFXL5i5SeQH5Kk9PgnzVDTaiz2HzDGgW6y",
  "key37": "4tPur9urVsMA6ZQzeWLkKLytj5Usfoeujw3wRY4QRQZt8U8eYmrnLR8kLC1yiefHwvp62GrUNEEGtpbKUkBwAjDD",
  "key38": "4m4WpDE3k2jnpf4TKt3ZtmAXdbhqo15Nh5TV8sVLRMDaEjLDBEaqPQqu7VZe9z7Kh8vw93j3cdmVrVVX6H9vtuUY",
  "key39": "591B2FHzXE5zGgEGGJg5tpTvFJZigRekfVrCdcgAgSd2x8HwDHXkWCHa2Y41ah7g1vtCUAc57RoW4f9oX57J8sPP"
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
