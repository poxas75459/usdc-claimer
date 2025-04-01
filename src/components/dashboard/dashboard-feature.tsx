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
    "234YUgjHgxc5wNp82ptSzRhEKXVByoX1ePHMkNko5WYYiaZuVm5oC2USpwaygc8Jxg4jSVoR1YgFYeKAWk5DAFiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "622T3i1AYzXSbVAkeGQ16vB6MguGvKmqusb93nDd84BbsjNmcF7zMkeuYVVfCNvZoJjjaMqQ23GDzDWi3mwFKHyq",
  "key1": "uRr1oCXi46hQSB3DqwYR87RyRZR1z2zQxJofcAuF18Up3cAeZQ4hQw3BxaoZhxwmAfLqvvahGJS98jS175ZpPSc",
  "key2": "3xJsWL6uLv2q4erTnr3XGxV2tyDUeoLYgGs9wSGqUNygM3z8c2LoGY73m5NHzZ9PWN4chNh9za8TvVjoN1gHQ3aj",
  "key3": "51n55k1JNSDifCYuTt2yvqJw3cFNM4H2ZaB7EDevkLaVPRjCzwjKr5wkYSsu3EhLMffv7Ms2BaiSFADEYggo78wC",
  "key4": "2uprxDTrB7BezQL9NnAqxhFfJss5h58STkpXp4ueTVUL1PoULYBpt3EZvvhxUn4LM1zTmGsBwhJJ6gP9wKZt5zCu",
  "key5": "5nWuvLw4agTawreGUuTqLMabeWHCWAgMB8kUAHs4Zp62zYBKHtNMofNqeuafU3qumpDGmF4i2eSkWd8QXbBSSapi",
  "key6": "64cgBb4UtKNhsrJF4KqET3eg7bGrfzzVU85wayoLL5rBHgGYhY46LRco7Midf3RmF72GgECfnWhifnErsedjYr5v",
  "key7": "39pHBEnuEhrbTmw47PtKpEDbEWgDrPy7VjSYB225rh8jfXKCsqT2eaHvG8eWm8DDfcm1T9x4p7nARchBBjkW2W7M",
  "key8": "4yJV2MrxAoUTJSNfewKkiNEPFADVubV7iRRTpuqFYSTfxwZ1EniKuy5EfYoJcMcaAPk49Ru76fcbd5nWqr1vRQYz",
  "key9": "hnQusRC6AyGCctmfEMxUx9jBeZAk3K7FVKgq2NjZfwzWvPKpvwc5rGWxPRXgxpE1hkv1b5Xng8tDi66RCB4ZA5z",
  "key10": "5KztEZE8PW77YU2nTfhPpR6GXzFFHimU2thcKV7tyfHkWuA1jMGKZxwfbT6wPbeUE3dLRpnvCczqdvK9ndTDapww",
  "key11": "3Xefivhc899edoWCypAB9aEBDgvMjfUT3bhW3sFxMGcCHCAWWCGnQLfGAMZPovcCBhTHqMbpJtaMpSi4Tqb7xuxn",
  "key12": "4cytX5sSGGchCoQSZU8Buoxn3zNG6izgkcgwGZ5XzinEBJLHPEm1HsXxGVucBGEZ1anfd6oUhaHPQBicSYdv6fub",
  "key13": "24Cgxc7dYyUvxNdoBaDbhVg7zzHFiYwGtdYhFik1ARABP2MfBF7Kdz3gKMyBnsBJTrtFiW9kmTnsqF3YGRr2t5SM",
  "key14": "4GtSRnKXpbqXn4WbFDGcaRTgnjiyygYxfkDX9Vv6aXuhR7htyGxLfwBXei78tLRmr7VYkVFPfjCHiqneJWJkJ4xQ",
  "key15": "4148CEfj6jSJYugcK8QBhWBfkYrkfDshyeXKL7s2WpFPD8GiP7mjCnXdShJu3YWBgvWeqLDRDsoNAPqwcnkefccJ",
  "key16": "jJYpanjuWepf9PHZyVf4PYx1S87Aj9AqrXwM9dWiDUgXJTfv6jpzYEuVriAjsJhsmWECummjLouGbQ7FRHXJrU1",
  "key17": "3o16id25vd3f6Wsa6LCsvuUtiq27uxHhTfAcj2Cywc5FVE1dCv9qqTK2Kjrrh9iZ6yBk5DvGpLFQdJ9b3aM5cAo9",
  "key18": "5BUpycpz8Ssxdmth79UyWCzmLQ3AqVf4ztvpSzXmMeGPCb7agMzGaNkTMKWG3ASC5DSoZsFHrrFLAWz1fDB2LPxN",
  "key19": "2Xw91wW7J7ZFs22m2HfMJzTj1ZfCnQUWpMEKidTVVdmGpWuZQYNxskLdcwdbbM8Zxs4yz3PivaZtEypNNW9JUWp1",
  "key20": "4YPhZa93VTJpocc9Y1rTSrNwp8ECjXrLyP7VvtHTxkmUyiitr5qhFHrcKAQYEyadoe61TLGaR5AybcrTVx38gJz4",
  "key21": "xF1tZN8vsAdkhvErZ2HKcFCFiJu7o5AKgMabNuKhmGH91JydSYfak6sSxksuRJzNrvhMPeWqr7U7GxgZFwoRU9R",
  "key22": "4hvBEBaamnENiBq7pUMi2QS3jUHEQ46eWjkFX3PeQqsCCT9ukjg3DRpVgEvd2Qb3vpRnnP2vRWvRnxxee96Ckth6",
  "key23": "tPrEn76feKHnCFK5fgCQzw4qoPWv8MC6wNyqN4XtWBHFpbSzaRAruUT78bPmZfuD4w7NXFBF98sHNsu2B7VkdJq",
  "key24": "5jxzWdCSBFjUiYrQhN6L5AgVeZgW3t8tbLWDX6RaeQe6NB19nVRchjZ1J71aHxHd5F1JyvR3gSX6mCjadVzmY8Ju",
  "key25": "5uSpCYwgPhFhoXfeuDWvKMUxXc15WGWkmixm3prtM47VZ6hUE4eZi1zpPBhmCE1e2L5Qce6bQqUx3b6wuqVa7wJ7",
  "key26": "66hUNeKc4McLgyTTTrG8yfXaxsG5KoDKj6qtkxJqFjYFAus4KFytpTi9ecNMFAW8B7y4gi7DzEDw9SV1S5nrtkw7",
  "key27": "5rJkgZkmvJFXxka7gSGTEuEFUTt4EZd9CrYZACdhLAjL45U6mSJNWZjiPH5uL4TpfqgSz5u2jNcMWkWJP8TtQjo8",
  "key28": "5MWByCmAgWPLVWaxh4kxHm1QLgpk7fBLNy1UG6k4m3tCYdz1JHArnbRhZZgqhQQgK2A6j9dbRoBhcqGDcQeGgV41",
  "key29": "5Z7MA8a1MoyBaRc4YVWh3UeKpUyXnYZJ7kMwK4Lu1B6qxVghDcYM8bLHBNDTwKCGnTTZGqR77JGSkrevBz48Cz6Q",
  "key30": "xrZWCYtqkp4es1E2BywpBBnXYcURcMYGpZJWX87UuvU3fuYNVgatxJ9tuS4NKkXUZpNLTVbxHdvu7158y67WRVL",
  "key31": "4Ut5CrWho5EDUC5Uikc17kiLYSf7e1osJAq5amkcSLQNtexL9V7p5CQMzeUhKP6n4TSpKhWACd6jr7jiLZXqkv8P",
  "key32": "3zxg16e6d4Cs8d6yMGdKA4FKvgs6dngdxY9hCvS92fcQvNP5LNJ2HTbqCWUXgaQuLhYxX1GKF3wPfdY8eh6AAPUZ",
  "key33": "3ePX6LXmP2yEBwcG7o5ogsiY5p9cu7geNgUMvJhsjCCbjJoR9zBkMGUqMz6DYj4fSY3mqqYXdssd1Ewbz363cy2H",
  "key34": "2L3qZRTXCtsU4xVmFHjTxyUJW8dmei6gckzdCJHvTrkLBjxnr9nFtf4u1X1ccm7PcY3Lj5ubHWHrTN9tcry7CwG9",
  "key35": "4p3Uk5HiqkKmu3yXhAKw4fazCSkq9CBAocVAtC4HGYnmgg5jasaj2hMukfq1AAToySK3x6MdMwMBQmgasNQaiRUB",
  "key36": "5nSKJCL2r92HADGcF7x33BgfqMFP68aGkwZrqdLQBicpcjWiFzcBrkqzbhq5iY9uB6dpW57pgP3YYx3v7tVZZ2q1",
  "key37": "ohxjcVzLMiJivJu8oRpASDJNjKrBK3NiKbYbWTqLawQZDFLoxfbTQwQuergAXLH6kvkYwPCirsQDp12CGTuEePJ"
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
