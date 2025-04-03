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
    "5fDxydcH2DJ1uM1y5XxyfnckD1SiQH8okwhUqpoC23CLrJxrS8YeoTZdYr8rVn3CoqMW2NCC5WF4U5ZhPVoAovx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t9LcbunMZWz5gV1GzAvvcuQ9AZ7LhwqwfekCZ7gyyMFw8HPR4nTyqC1d2b6QeFsRM8MGxWHYqSFvYiztn9XFi2Y",
  "key1": "4P8bgheKaS79WRA7NEac3GB16NHdBrSHyFoTWRFH9EvwSsFWQnxzRnyCJoLpFc3ZYHDoWNHQyKY9CKM2UZNdxXYh",
  "key2": "4MrRvJMaeZcmRtycr47oKSJh2YVvDb2qgyvUWURrCHg91d83WoqCZGoMDAzmWcP4p33A84kZVMxpr9WUZAZ9xS5x",
  "key3": "3xQvnMKsikYpBaYdtpSukZC1B6DT264wwvArbq1RpbTr9nnPzxRnoMdPeypXi3xRFp7vvovgeUQhmtkB9rwhQNwM",
  "key4": "3s6kzt2TiRtJnwnbxiPYVtZJFGuspyzWmjf3PWFUjAXQ2BGAXDY6NCpSaQsknsWri4ECm3y4aUDHGCQcq3FX4X7q",
  "key5": "3RrMemaiE38tfRPXBUFqkiQT8uMTmGg53MbYkMqPfh37t9FbfJcqWR1AcmmQjuPN644vq6iBAdUpR516UwZCnYYz",
  "key6": "3rWByFjCR83JvNruKan8BTu5M7yCKDH3k7PBHnkHukuN9JacP5jgBHCWDxUS5H8hK2qxe7eK8EMfJy2z4ocu1f2P",
  "key7": "3MF2g678XFZ5kgTFQxA1rfhG4P58Y1eJ4CB73JuRWxU4Pp3JaZJS1fDhADeuYcQ8i7UmUyUKD8yEzpA5ancejwMT",
  "key8": "5bnU7sLcU1G5MHjVRSbfHSpMFgYun2WWKHvYRyLTLEDckU1jUFRY72Ev1UFTHqmtJd6A1CYMsVSVhVEMoF866QxD",
  "key9": "Fi9aWmvfCD4Se6ZHXkmJyQoUm3g1t8jE7DRejWqPnQY7cWTKNoffRLbTV1VWadmfd9DJHCGma6rrYnvzCYxs9LT",
  "key10": "4wjBZq6ibcWX4AMjqG71MKGpoEaNYgmRtXcxHqWKDr5w3b5yruh7gGjpxHTicHp9bFeeU1kYHKmnN58tLmrWAjsC",
  "key11": "5fEt4m4yixi15i2eWgTcuhpEpt7AaMcUigYHjxvvL1QL7KcDsPty2xfwh2hSDzpexABAAhxe87qiCWrag6LsDFbE",
  "key12": "39zpQ858Fbcj1KaBEFRfWMMRrkz2Kr2saX6MLv1eoC6fMUepfz7smjbWLM2PSQ3EGDrmpm5TN36qxrwdp9KGBwrP",
  "key13": "4jRaZ7FJ9fiC4ucMVgKSr82XdS8U8f9BMG1R5QQMJWCgD4j6J1Rt6TKoZKNs6HfeeauJV7nfxtGrjYzGFMiNHHT6",
  "key14": "4oDDxWXsYfNi4XN8Cnkd48Cb8gQjgRmWfrXdcwjoiheEjMCYxBUwLWui3RZmJqSxHLPYf2uwtNDLtZcaN5UD6VMm",
  "key15": "rEJKpTRZLnz6osNrb1eBbCq5XfsHLXncT1PfF73HGJG7VUPejeEX7H5vJoo8whguRaPd3U1o8afMy7WmVFxWz58",
  "key16": "YEEcAieJYmF2SuZxLEuwjP2S3oPUyNYKbcQv83fLhJMNu2tyd1fW1jrzk6BnSabsCea4voUDC2rqb49s2cDfpJp",
  "key17": "YK7Z4vuHf8BQQQaR1SQKM1rgMPWJ9SWno6USAaZQERDj8CTov1hKV7x7Y34xjXAZuRDL1aUt5qRLX4U1XwFvYMN",
  "key18": "3BaMngBapf8GYYpbGZAfdioC5pDUj9LZfQJPDZh2XQidcFLfPFZTRtb6GMDTZa6apDMyL8FNoDnwdEscHA6w7UXZ",
  "key19": "2UoViLqaqivRx2QsLCwdUyN5f7Xj2CGNmgBK3XuWpkBsF7pwGPrGqwpR1LtqJBAqmcZu46Gtd2Df3S8QUDEWvgZr",
  "key20": "2pjsArLf7FB2cBnFjxZ56h7JUwrQ3iphjrUf7TgaMkMSHnK4oWPcUSPWbUvLtz6dZo6LLQuLBe2rgCvqwUussjWh",
  "key21": "3MZ8kddjx85vToPH6JsSP3ETDfq8boeSoE7Rh2NLjqQY4iTni2k68XsHwMK2XR4o9SirvfKp3jCcwskLe18yqWFk",
  "key22": "22sRhcGUgfTHLMdr1T3dMZtgjThKHuU8LUuYgXpaAeSPFxW17cPcuMcm6Wn68us7oLidzDeLDFgF5WRXt5hFfaFn",
  "key23": "2K8uYKUyAPqPD4FLmciPS1Gty935M4XPdJajtUn1gM6uPRRd4fkhxahnz9sq4UXeMaUnxzcrX97ExVSMt674kVYP",
  "key24": "36FezYW8BYabz32HrMn2wHsQywL7nBGLCuTLVa7mYdwJAwqkJQaKoY3v59spktGiYa8oi3vhvGv7qpHpK56Z8YK4",
  "key25": "5yD7uKuycNazmUvFkigwimjf5tAUPZdcKpHAmRSJytjMJWkmyNcs9jYtHbUNWZdEbCZLV2RA44ThiTHwK5BnCN6k",
  "key26": "2uWUSG4EFrxgC8iVT3q67mCmdrV1pXr7jC22dp9f1BgPxRXx2UG4u7TWkrQtkcCjnunCqy1Qt8EFvgNZ8jnTmtbj",
  "key27": "5wTwc7Dsa4jmhkY5mNXpkUpPnRzbGtAbqfujbnEhtop2pKZFMEdDXGyjfYAHgVy5GqHPFuEhBEUwAz7sGkN5tywh",
  "key28": "4wZW5vE5V6kREZNf9JcChDnsyzMHyqEYiFEGuapk55HnYUzHxjsUAEiS4AkZgQJekEGE4h5sN94CER3xQ4meayNj",
  "key29": "2ENgV6BULPdFk6QwnucyA9oFrjMk23HFLwbqerjpnBd7WJFGgYWiB9TTye9rc8wUrKDEnCS8RnmaDZLJoQtWZmos",
  "key30": "2kmRYGxmkPamJMUVZZReCDGUELjx3yu6oPfjtrZukq41f8LKwBNVag183u9e9VEbCbjYAeEFL9EGryCSyWN6SQQa"
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
