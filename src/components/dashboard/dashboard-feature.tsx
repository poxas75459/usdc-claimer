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
    "5L2w6ybMSRFKYJo8Wonza6NUKphu7qnmmrtdjrKyoUtLshde3qgeSx7ewWz7pFLLSaWtMPVvLsp5RoZUTC3vnaZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27et24yk3aGuAzuprAm1ik7DWJuFxPV1oCcTvL6SpaMwQev3YB12PFKrPJTYqD5EQbjDiF7uUPSmxNXmZT8ADqEt",
  "key1": "3tn89cpsDSG9SdEmWd98Dahrug2qNcVvKMcayZ3smMeKWNG58CWhbqHknMHZzzDc1e6h2K2Q9oRyccJnEMoumAf1",
  "key2": "4DvNVJmoZKRLCeSxHP36fkhnyY2yzzKanwv2wy5i2PW7aGVYhssPyBVZjCuzWMypExMFDeVzQTHqfUFCvaCCFDaq",
  "key3": "1ApDBVeBbsmw6SeYcHji8V3XcoheKMbxSsuYGgQLMvFvAtWWzxnwrL14w1zQMf8B5kVKoWAwWR3CDYwGnMgX5fN",
  "key4": "2a4jikfLNuXmM5Ldj6TFwBjZenuNBCJBsxjuLicMAWL3j65z2AZRdqGrVg1bXm8NyMT9yToCuxE73VnrdjNPSe98",
  "key5": "3kx4KbXgrhx5PHRDqMwqF1RGLrZ9kZ3MDQDznbZBWDkWj1GGs1ansM5QpiTe1fCnMahex12H9zKB8RSkQhom6hTk",
  "key6": "5bZcpWxELmvdWPz87X2zVREfXZhRxog6D9Lyos2GyVKcfNZdRqSVdaHhsEfc8diAJUcyE5nMzC4xGAxoHsDPqBUc",
  "key7": "64SPB78GPFVZiTi4Hzg9LrrA1mUNoCkNtUJxsu9NUiXULsUfE56CKw9xL9qfHnQLMbiJNd1pxj7v7weziQuth44i",
  "key8": "5odWhTM7SNzNaN2N6MRi5RoxnxfLPd76FUfBTT9cBYoho9i5C9e4ugHkQxQgMfBChmJeeirkj46eEDGsLzX2UQqk",
  "key9": "5rBDn6vGrREQvfw61tr5q92E3E1t8ne6PEYY3mrG5mN6tkwxUnyGJf5jn4mSbNFUdtaBvbrrL7iSi3wuHhHXGEkt",
  "key10": "4BqMBf6pm2wAae637tKuqLmyhWoXZSk8jFviCQj8okiYExLwSfXkEozUFGpgQ2741GovgSVkQix4cXmfS5q5M6XE",
  "key11": "3VGgQuKHUMCzAVZZiQpQcTjLzpuRK4aPdmceJSV4g5DPa6HXgsVVrJcrAGNxWTmgMRE12Jc1XSDKicho6KqjKWMv",
  "key12": "5NCQS2hRsXE53ZTLnfw8ZjfpYHNcLQ8m1caCuFT1yYQWN9qzbTdeUtGWF1CtCocTfYq8X9CoVMRVLweXevWDxkfU",
  "key13": "5quXhRgzjBVJ64ymzvrUvZJc1ncoATqqXLEPP3Vf2eftypAWUAb5yC8eqxDiLHCFQciAa4Qf44VVcYX4iE4H2F1B",
  "key14": "2Maoefc9QWKLFnQZsS2YqtESXRjMDJsQXqphMw3A4VaLyPC98dAwyxakdtsPmzC35UC7TgWbKMhPoooKLWiaYypw",
  "key15": "4odEVr7R97S9azdoMCqo2HtKDjpcpxVjRPSQGnvVE1VEAbUHPDKTPwFKA5K2yz6hecbPqCgC9w1SqmhsQ1vVHAYF",
  "key16": "2k7EDarU8Bbnfh1hoFLqxKUzzzKehcMBUEnzKD5rpMqt7jfVHmyhH7sbL5FD1ta2ZHCtDskZ8Ktz8LZoSLuDzEcx",
  "key17": "3kE1aAjmf9yKoQAY2Ygu18D1MUSHEbUFhNmZhomnMrFxZYKwzRBjTVRJc6XTM9sEMX9xRtEMmnDhorqMoXfKrhrt",
  "key18": "4xRWiSwePww6CXxrW5EeeATjFRgf34ucPT6gpit8cNnjpr3zyHAgRzmwfKDGAWwQmVRYLyJro3gZGUBCznrUAp4z",
  "key19": "2UWSNHzYFSdBgzNPSrfbkUAiHs1gQ58TFAzHDZVZHWWMCY2N5ucwU9AuHNP71mXrmuwzGGipy2TwPfym37w2w2oF",
  "key20": "4WTWEyS2KKJLbHyWV6GNybvVtcadCSPayJWyYQCChrX55ont2rk9Zr6sN3VSC2AwR8E6hAFkKE5SPPMhbS3kmaXa",
  "key21": "62U7qtKqXjdL6SbhnWZSGpzPXB9v1qnTcHadVnXvpWCSRtbP97HDESXazey7ZhrnUX1eABuZ5XWioxU4vEzc3XHR",
  "key22": "56V5hAQeeG4xJBx59eb3MLhr4tWaWxUZ9KRebHS5o2j3tFYCm8qALDRBRy1sVEdftDQLeQewYU7krQ5Aj3nA1ezb",
  "key23": "4UykcRyf92kwzGv6y2xLANeuRxn3RbJSiD1yztnUpBqAh4c2rb3euY1fvn1kPRNV7vgBBhh6mJYUPyCRPPbBjsB6",
  "key24": "5tZrQJck2drZZao248kthpEMc5dRX46FaCjVBpGVt95RyJES3A4taP5EeSVahxSLS99iA8csHL9zNs5SjBHbmud2",
  "key25": "4Ehjv2iRmj4c5mXukQGPU8t2azhkUjkfhWGDNUqsJ2a3inTXviZZwCCeGwyEJVRQgmyHtqe5TEeJGyxs2QfaL65L",
  "key26": "2ikwMBzS4gj6Lxi93qZfcJ12CeusVtXnTGpFPStJokkTdbzP3e9dmkzn7pzwJjJqJ1W7dByyA2BY8PWziTMNSQY8",
  "key27": "KRhS3VHhGsXxVE1scfBXBCUXKgkPUUxu6bjPRsUP15uWCQfqTwL7oJEX2za9jXcjqTvjkDC6RqygsjXAvr66sZG",
  "key28": "drpPDfnBaP1EuJFnvUKMukdAg1dvSZijYUN5au4YEM1rBM5czpCra2wwGmm1839H2uU9ZdvZsY6QBTUdsKC7DYz",
  "key29": "2XJ8ex1xVRzVWiushsC3RGxZg8PXuXrTotPThzTYkRBKH1M93gS3P5CvnZTDzjcmg9YZ7Kaon2kNLyCsTfUjLMFQ",
  "key30": "5QELaQAxTTgoVcKVUMNjCUeW79Adoj9mw4Lhq5jSjM9Q1Lnvvsu8fBvrC9qxb62bYGAEDwHFZ5Vy1ufD8EEsnjhh",
  "key31": "3Kst9kEu1dEcQpterUdFdfYgQrj8oKoF5YHSeYpwBgcqH1MqVt2SRQSGY28aVqJQRofmgUbpQeJYd4gqesEcxmKr",
  "key32": "4wpC8sgHtxMFw81xwXqW74ZGXzNZEsHTMVWDsdkf9SYKEHW5QUPJZcNME9MFwvmjyrzQP6Y9w9RuadtUEEtfDLKc",
  "key33": "5DevotAUeFBaiJbpgmWqmBVWjuEqjNEXTor9e7xThYfn1bkjzbK2QuF5yPoEML8T54rfeEDt3w9JAntZ8aKUWqUU",
  "key34": "3qRQnYgkJNayDBwbLWzUWhcHRuyqh9NKBQNdzKsWSjGpF8eEASfs62AyAS7iA4bWsWzNqWpih7Rt2rnahePmFoWY",
  "key35": "5tbcipcyjZwXrtpAxwsfR9y9cr2J2kkH2GaigwQDcRQLJLi1HtWJEwp61oQczbmpAA5oNMa3Z7JPA8f1FLbXxvVg",
  "key36": "AW7tiVUpF381Ufuhe34Ku72Z3EDsPsTWRoMzvdJHwxFasLnb7LNutfqjwyvpJRMJVhDRTjK4hfpTDDGuvQZ7txm",
  "key37": "45rGYfvuYrxR1ftFoTe9G9bTTj66fvoJu59nFMfccszpN7hfATk1SGG5Z4kAowEokBmnzMFUqzt8NL7c2g93MRLp",
  "key38": "46LNyUrnQ6hXQmqURemYnZeKk1n2b4HpoEyerpJrrXAk8VrDwm6XiNdkmVdHK9DoR9gS4XwioUEmd8C9yYS6q6kP",
  "key39": "4K62HwBV5Qt8Yt8coZxasDxLhWHYEe8hzxa1xaNSZjiLeYMfc4Eobi2B8ijXoCk4JKK7xoRBk2UHVVGZo4b3iDpJ",
  "key40": "rWvN6VUL2J1xCsVriHp15VCiy7sxfF4eCZ3GKYrbuxZhnKwni1DudNu2AioXJakAffU3QKy2oiCrGiB83ZTVdrD",
  "key41": "5Si6ApDuYVTLhqg6f6b44za1BY453gsayD7uqrTgj5XKkc4XpBDpT4dYz8uCVY3mBxovTw58FUwneAJuFHeCU4f6",
  "key42": "YVX6oLTtCaRfE9iv14KnqgkfUTVrSRhn8CAddJUvsMd1XyAsHDotvX5o3aXK6xYg71U134JnvGRuA9NGhSCFbNW",
  "key43": "4DhcdzQxpyqRBiNeKNYjWes1qPoBWumYpDpV2wJE4jrjbW5HQSJtgANzuu1VG6T7PZYjZh9RV3iQmnggLwcaZzwA",
  "key44": "5HMiBA7jswsLK7v7QxrDqTwpPiUL8urEApgHZohyxCUmBpVjCGUayCiD3kSqZFSc4q4MwYVrZvy5hx6PXJNRCXoS",
  "key45": "ndkAvrwWa8CSRgN4d7R47KVYQp4qCNkXksV9doNp9Sie9oeQbjjbHgesagbDSQneo1U2VYjLZYPuaGP1irjHfgq",
  "key46": "3wARMtLtaXYPbFnLZ8CHwmTd91tZGBgmfsUYCdx1U7w5KKVQwbVj12NqQwazRb8VXM9qsN2eaecTTVhbqojeTZ85"
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
