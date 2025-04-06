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
    "4VpyVrxRFZMVvmwDGMZ8RxLxUFtsuH39zaBbz3rqJ8eZsxixBpLJmfNeUK696eaTXvpYysAnGkvKMX4HUsoQS7DH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KoKapsbnSHxAMRCB7NUqRfv2nsV8kxTkPupgwssLL9hpwXVUkbTwY7M1FZjXkzydoLcbvnFQxFBUa9aZFcoWVz6",
  "key1": "N4EzLcbTgZVoxgEuxyUjmrV8DjFKRvskxZRdJnCzHcLHVZs4h1Zjwrx8UH3AtC7bPN9tSg6xoGm6bVTJTvo8onG",
  "key2": "3Qh2GsGqCr1KNd3xBevzDuYxqbheBbu3EiHUNtbjovmJTFdpe2eh1SkNmE5skYVFMEWQ6dmUpeRcGLf82eKx7q8K",
  "key3": "5ago2EYwhrX7CYXruGqfYLsckNFYTQGZeeYX2YWwMyScQQqjv4AsPcmQPVAhKDfzdPCsfiK5D2ZyZ2Rbo7icZ8CD",
  "key4": "2oQJeiuTvKoeLVne3P9wDPpjgTt9Ws2feYVqGnQ9T1ZGcUemJGVtuFaZEbQ5KTsPo3pPLRy26E3x88R7uATG7xWM",
  "key5": "2j5bsp18EqQ3s47QCWjBsrqq3PKiFVCpEpaGGh1exYsX2VcAd1UgZMB6976T1khCd6H6pV8kx3JHvc39anYaHqfb",
  "key6": "qqFFWd7bZM2QV81vTACSuYpTaR6i6MDkQkuHfKEYYTGw2u35evBwAL2g4V1iwvBhSkux1MdGyBNQ3iZUqCphLPa",
  "key7": "57AvuiaRPz61fUxDGQiU3wma5Ubw1YVVGQTNSMFaHRaPDHuo5chMpM6J7cp7AtsMmiYkA2zXcbEsa8N9PgLnwzec",
  "key8": "311oexckT5qASVw1J9wELDFPLi6CRAmuPwtNemvckmVHAhtS2s35KuFLdUJF8Tf9v4Fcm35BbR3WHVXVsdtFQvtw",
  "key9": "56ZRAE8djpJB5z2Ud3ftBsk933q53SWnrLNPZutneAkTtkQg2XYsoZGVypi4ezzjBvwaKMzCihDFcEKXRuqF3oDr",
  "key10": "2diRssx8AzsyVXkB1AU2evHKrAHMwkaqTLM3JCyETddZoZGZMSBSBQjcdq6KVgzV63DtKyGDCUomTyZUvHGHVL8a",
  "key11": "inSYvc3jqcpinuBCeAWdyA1iqNhDVTdbGGmdCNJURbs6gAxGaZpNZYtPXdzeaeNXJjga4dkb8mK1AEstTWqybTD",
  "key12": "2Luu8SXcWGa9DoGsqxVxiGWNKzDzKZqQqqv2h8T5auAaYHTvxMk8Kg6XeGdApu9Q9W6zcVLib9XTKxZXNh1Emusx",
  "key13": "26R5xHhxeqSRXwKpoUZ5KjAFucmxjKBebXF8amqNqNu75hUZ5KQRu3jxyMj4rucd6JeFrFUt9f2CjweNeTtXU2fa",
  "key14": "43PXv3Goar2irgXd59v9A66zkCWTDPN8zqS6QNsGC4Pq14Wy4RsfejiU8g6Pqf6tyH9nYru2pxZbGUFuYZG9qV12",
  "key15": "2MYA52A3pmMdnEqhZ9sbF8USzhGsXvqDvKakQUqwGMyyQsngx6mWpqQcVXkEXwvjPhUiSEbN8syYjbu5fAsymJNu",
  "key16": "5sfWrjeGFv1gpuQ3ayLs2N1JAnWmfg8aosnmGpaYxJGmJ991Y9XNQRs8rmA9UNmdpYG8TRqkk4547yXqiEn5BVEN",
  "key17": "iC73YXeScqc7mMeMGk6N7JEcQfgiSBGkrRRSmxXcWBm6AQdU8wrkobCUu9FawU5u31dDGWpY3auBqaPo158tBdb",
  "key18": "54VaxHk1DSuaTUyQV88ncAzyNM5Trh5hAonQwkT524L5UNyjG74LkTmEgzdab2AvKrTpbFJRuxdQ61vqNY37oMwX",
  "key19": "5sPvLuJDsBWKvVvQ3WnZmwXVFSZvrqTJjRJvuBuQ3b9MvRGcv8QpGrokH1oETv6fzRL9fAvs29NGzosnKJt1xGan",
  "key20": "3QppLz8EMHvfazerDdsZBWZPk66pvZAJNSsaJx2DBJjyVwKY7XZ91hJdFoorRcWZXxoxvomLoaNjEbV73ZPNWBB4",
  "key21": "4FJ54zyjF8QHdc9MKj98GTkPGEuAzaNkto8suS6seLXS6Z3vVSqSCmk2xNmrcJN9t7XUN2RHxeRUapPf2G8B5oWa",
  "key22": "3QDk7MgMe6VfQcEUvKvnCNQ3r3i4TREP9iZX3bbJCzk2jvPvgPJETtkNA7AGmJrhTnUp7fkSvBC7Z6fYwrnDPeRR",
  "key23": "ZJZn1aXbTtqdrsGkirVnCqrnPRrsiQDKvkQ34NmTgNokbhxAc4aottf3n3w16Z1xZHUAsRzAUuKNuM9ULCKS9UU",
  "key24": "jmJSN4r1cvnZLHqiWprkWVphb1PyrcvFVg53tpK35ysZwGwioBAWNunX3yftiNoFK1VjvTP33A1BcZFD4w6Sv3c",
  "key25": "2uC37XUMnQCFLGYW8Vraviz8usJqTxX3hCx752umLnJiRGzZruCUvctttn6DduKkFZENHPm4UhvTjVaRgBfq5vK4",
  "key26": "3GoZJTDkhHZMZ8gnK8auPTiUaSuTHTDhyuboYQDuahTTY6xA4tUo1jLKaUHxHzMqZ1U5rUXA4sSyHsjTRXaKbmox",
  "key27": "5iFzkzFnW54JLqqSmq84GAZNfFXFzMJLvVZ7FMSncsvLkHK4B9RA98uyx4yiNsXVNNd3NkGtpECdAQiZeiRZkexy",
  "key28": "4Q8jcTSeXWS85qjcBkfzUfRvwJ7GWfwfJxdbqdutvZ2YhqX56G8AECYMjNCqdcYJQotq1yurxjdbGRVWEBeApWrG",
  "key29": "4C48a7siDCyZXqtqLaqVtXxfuk8Qkypm2h9KnwUuj59CCnMw8kgXAHexS3Gr9YEP6rMXabqVbym5kq1MKbMupjFi",
  "key30": "Wi7F2SRVDxgAsHX1HUjCNyKfYohHBCLYoaqP6iRFNHtXC2xCgCBhZqMMYeKEtMLDQejskhn6MDqo61dz37CnomF",
  "key31": "6UAtWBriivvYvTRjSgdZSyhMKJWZ9doyrYH2ArahhhKVVziQjW3dP2uVhXBrcAgXYKqki7QNfdfmV65GE5twbVP",
  "key32": "Ht3tS4z8NATn84wV8RgtuyJVSwVueP8JVCPpA5vUf7q46YurX3baiDB4xvdeZfEEDK4HeGzLFqF9r5sA5fJKr1u",
  "key33": "5bbfhsaMa2rhHRJYcXR461kHzVQjjp8zPaPagJcDoa6NHFsApKnrKy51e6pUBZdngkMPdomDx1mBXz81VSxsy4VH",
  "key34": "4hfuCo6SD9hjimne4sLgtxfoUd4HC8hwhUDLHNrR5P4hnHFQSyiBFtkMC1Zby4o7msk4Zjj6tZCN2NiyrVqpKsU4",
  "key35": "4Mg4tzEBLXQMFTycRN99qx6MBWV1nz5We6fjmsNgdTwCeEWgD9GxaH2S5qyDCTQRBgGnbphWHCrdkQLsnymh5AW3",
  "key36": "3JJDrfGKWut5ypEos5t9s7MKQS546CTeFCsgnbJDJyUxa1T9RJrrSSfHqXDMNm26tNo8NSi59RdiF6JPkUjdipCz"
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
