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
    "2XvpJgvyUg62ZjbpXG5rCST2qfNyumYqCB79hjtwVJA5nb61xSFUp2psUTzViqwmuTqRSyje3rQQdveb3FvuuZJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gTPQUUtU7b3po3ogsN2AvdGD97KySGoSEsdUC8JxacCeJLQ5CRNChZpJkZwAD5D1skW3sAk72pLjcKncFrodau7",
  "key1": "3AJuwhQbWa1dVbYixzet9cK3KL9BKFb3ZHQHQo8ZUsJjERQmQGJ5MGcs1WxphNTYyyy6SfQmWBcSWiT5s5knosgt",
  "key2": "5HFvLS9FdcW4r3XXs3aN8MMaCKLfU2pnYtLzmGEVWD8AYc2ivqFstczSh81AMRjeU78xxNsVRdFcd88AQSBXbSej",
  "key3": "5XV7pHHJvjofryeBG96Eb3WNUGfieGBWJLv1Xf1hmNqhLpket5a8DgSJrHTEgJhAZrrGHWpMmbCFCZk3EH5vDREG",
  "key4": "2gMkSAnfVZqwqCGopwANGMwZQogJig2ig8RSxeJVjSK4NiAvu5DAyYX6AXV21MFrJibm8Zw4QWyvVvaE8UYGgkve",
  "key5": "gKFX9bzeRYKnXaAJcktBqvCF8fbnE2doLEm15zbRjCtkFpnmpqxpQR7Y2ZFyab1gTxM57CjfE3RNwu5r8ovmhSp",
  "key6": "4WQpdx7ZW1yimFNDAwGzyoBjMUmQAjvgMjnGec7GzJnKTgVDyLyb6xh4HS2Hb8tsFCKwkxjniriCy2vspRW1TXYA",
  "key7": "Jeo2GxrH5S2kt6ZXEuUCny8kUmDbtmr3j6UPwoFDaBUW2pyTXKypnd8At18ejiZ6LobvtN4JQjZjxUpKRYcsUKK",
  "key8": "4Yqy8HjFfbF57rvFYNiYsv672XGQ4eUFM4nBXxAbXFay8aP2EVMK3mLCYvYKStDFCjqAzrAhSmjtrdzds2e8bcEY",
  "key9": "2W2WA1Pyw44ezB7rnWNmhDozYjrLcN4E8EwLAMR8rg1MjXA1pXAVE5QdBNKLpciWshjWe4rGhZ531MtHXwRkbYdq",
  "key10": "5h9EmphFSTFMgb5mWFxQs7FNhCZQ1MiUSrxJCnJ8uK3MGqWgBXB8MYd1DTgAJ3q1dvs9DXyTcQSe67uhHV24qCHG",
  "key11": "2FUrHNvmMf951m5234adLGXujQw43HBaeA1xP96ikVpcneAix9mufh8MH3XeuRVmh2y9Kou4BVTQJN9az8m7YXyD",
  "key12": "54Trg3jC7zcVZkVXPJGikwMRf5FnPDcP9voUtC3eeN6ZZ5cCDKHuh57jZFzPVXGb3XSd5V6SpZkAELfGkintguUA",
  "key13": "2w7QnUgJFeFYNLdfKyp49PHPJGw2NUpcxvGZSrSZ2hFgAk74eck5mg98ZdJ68BgdUCWxB1nnzpEk88Sr2T7yHV1k",
  "key14": "3emS9KxnJqnWiVzyxi6pMwrXS2qQsBgLV26G7t5mCWoW4EHvnydz534PgGELVgiodgRyLewZJuWY4LipvYi9bdz4",
  "key15": "2qXZZSnJWxwroqmMH8cuHg7WyCmZF45AL6u9mg7JnLn7YRPZ8HJc2PuX5dZPc6Wo8sD5B8M31VNJg9MBWUqApUfi",
  "key16": "zCdn4KJVf68THors5M6xywQBxrxNt9oinY6kVuNjWqMx7fDkdPe8W9SYVT12SBxph9SGAZuE8Y9srjjNk5BaPwW",
  "key17": "4zQWpdnVzfGQhtDWoj5K3cqQZbt885tEYS9kbG7VkXh8MP5yMZ6YMNw2hGqpGnWenjChXy82u6aN6B1cu2Day7qM",
  "key18": "5pQccryTsohiiuSCKU5iHW2ukRpov4Y9eX3ZxujJRiaWxzhpaWVdCuAbkY9pKxhmSzGueHg7wSsZxihVxCTv8QQK",
  "key19": "EaTTjh9xfsXmh8W3uJqRzBDXKYDtsUAuvMBdS72zyGWVLGVW5fwS3hhibcyZgEXsZVzk57MLgD4YrPET4wsSgZ9",
  "key20": "5JrmroUiWZgL5k7gxPhPeVgEbh24ihVHxCLonjHXZFfvyefeFv3zsgQN53utKbNKw4WqCFtFdzHQqyjn9GiShy4Y",
  "key21": "4pTwLciXJnMwenEeYVYCEjp65z6rGx89BteaLZqW5zseoELpsHQRtKfo3zCYFSYfBvVue9ziYii9D8VR4iVdpdQS",
  "key22": "41xjVcU5ieVoNbpph8wQnjQp7dd2FpBLAabzLw7zzL1FRAtXDpL3EsfcvEoAhPH4dFYq3BwhoEehgLzbgbk4axyK",
  "key23": "4gTsfLhgcw7vbbgp2trySh9dnbs6PGrWYaa1vNnj8dmDJhSqNUL4DigrqGKfsQ8xUyiwWYxXJVzi8JX1tSDqPzrM",
  "key24": "2HoSnzueAtZMQDKBteziYJLqHgspDqowUYzWVYveUSPFYjypYtX5PwJoT7HAwSKWhizb1Hh2KgCm14JMeoaJPoEc",
  "key25": "2M4JLrtTMBsHqKbBYg8wsFbvKtq6xj2FvcMKCyhwSXeuhjK1NrFkwbSRhHXRuFgsp5LurxFiuqbVC9fso6parxF4",
  "key26": "4mkZpXbsyQdLURHL6GYnbSERc7fzntNKhZsUxVrTmpXExEjqc9kPhvRr7sEKHpR316TLjS84ftxcqkRY5vH7nXMP",
  "key27": "5L6E7aNd2NQaAT7YzhFxjdQFknoJp5DxMJja2R33civevFJUnTH2hKv9nX81etQc65MzcBj8ZMPNehL2iFH6apBT",
  "key28": "2YtEMKxfHdJEisCjZQhJfVjKDekaKJm9TpAjXkCaCBK6X2NssJngprMPFq988HaWhC54WckbwUAwjyiHyinMMhZQ"
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
