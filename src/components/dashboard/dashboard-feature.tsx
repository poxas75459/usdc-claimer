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
    "5uRMG2HTVBh2kask8SHYg7aZ7Msm4S6mxnM3xrXbv49KHBfJfpv9cZTod8pkW7MQhZV1YcYSbXnKuptM2ww1DYeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X1UFvJo2idwsYvEB9rJgBEzhsjGZ5N2bWuMb5JPBUqpZZPwhNkn4KVTcwZCP1vGfoJ91NzhZmX5PKWaLzqZKpaa",
  "key1": "3zbYPRMcvncKJXjinQ7ziB2zkK1A1eMRirg5ThkAPnx24q7EM54xSdnHyJRq3qmG5mYsxuHzDsvacYqosBkLGDmb",
  "key2": "4BZEU35wBDatphyG9aSnp6Hgz1yzyP3x8CYDhTEt6jJpAjVHKyJWUFBinW7mYyTc6ZB9zt2FRoQnAHaMjhFwA6PP",
  "key3": "399AUXnnmKGyg4KdH1EzzhuWmD9GfUsZKG45tQbQxmxWhS4HwzNPfBbuni7zMjSh5jdcfnJCTunu1khDehqUwPVf",
  "key4": "59Unzem5hbsEGQJkM8tveDQNkAt1EJ2cKGoKqVFpgxuFSpPrVTJ5X4D9jE7KKmsdMDcTpNWep7HymL8rhL31uUuc",
  "key5": "2AjYtxuPwFuvK1wB1EQeWPjNPLdwitkU4jwxLB9rLMJxopiUUMMXBnD685HdrZqcZtRpWDqkAtosmgmeYWMAi7Bo",
  "key6": "4D7rQe26qoV9GnwGL2wg1mxE2nJ3jFKcHr3owF8nqzPrAyzytgsc2sa5EUAfjbiW9TofRBKuMzwYCe5UF1BdZhs1",
  "key7": "2KimexwrLc9xEBGbGPJjYcfXNUWSbBiwNVNra8QDzLNXHxVZbGPb16UzgspgDf8P3STrYXco2rTmCReYyhuHGPpi",
  "key8": "57cd46ZirdnSD8EEF84PD4nH3KmS752uEnFEMaNqkncwq5VcALaHUs2RPLomU9CXyeczTKm3wekVVkaBDGeba3sG",
  "key9": "4npWv3hZrHrNEoNhTqFvos2YAGU39EHUoLRLBjkRNdpdr3VXADvd2Rn31EwBJnAK9hyWfuAEEaRL4XHCXKeFQ2v3",
  "key10": "3Bo8uJHYcnNLLuBxcEKgwBfAxQEGv9LzcADUcWSM2QKXGQJ8arTsozTu1KUrThLSbj6CMpy5M27DQLUxUtLok1Ja",
  "key11": "bcRE25jHGumigB86UipyBks4cgwdLkaeuwhkgoicn44mv5SzRUQVm7gJpKK2ZKfH43xhwm87hsfZV3LQjkzNft8",
  "key12": "3qCw9QAB9Acj2h9cjYtdpaz1U8V13NDoxsyhkd2ZAagzhDsGA8mTEzbmkxqrdNjY34Do1d1zeXacBhEYdebcRTtG",
  "key13": "3wd3UTJFkgoSNdPbpPYXUx9N44ZTtKHezXyf3QoFCpswCFwEEhbWq3G2r5KCAzowvrNcDPnc6cp1CknhU691M6uc",
  "key14": "2uSch5sfD3FHAU3zcqpUEBViof59WL88KqL8k5LzJrvmocxEN2Za1BoYDDnA7SYsv8xhYs6TL5QhvsdwvNwJv6XF",
  "key15": "4jVZFJadUyvwKX6d2GhYgPhe4TVVQuNK1yRKzW3tGrFxBkTb9kBVkuYTL1atEXUeBjAz9apNJS74paqfqHP95Erw",
  "key16": "4YsUgny2Y9PbAcfuaTB85GQHNFNW77MvNqzKTkwPNyGgxZhfcyudueWa6FZwprkUc4N8jQEXBmXx2JpnwZvuBZ67",
  "key17": "3sQzEtdpZyU2mjoXrkWBpwYKtkhM7xntM9AqKhg4Qs7qWcB38H2M2w42n2w1SSheFc6duXMuSrZ1NWp2hRJYCfeF",
  "key18": "RYqBWgCDmBcgWWcfBcPCC7ET7vD8bFhFjgbKcRZfXoJruKsxL7Am5e5m5LFfgUCbXRCey6T79Jnpzo9yBynG99F",
  "key19": "P4g8uqt7AcGGREGYh16n5GG6pyoF1ZBNAVNHzt38FfhR2WXfWr5rtKQsZEoWfUstEDsYS64NTwp6vQWUiVHS1EQ",
  "key20": "MjdcN6jEdoBrR3LHu5RTb25vwKufFbJGV2rSpcD58PrKSaUoybmWJNNomf5SsWoNwDE7FcGmHBEvCwFG7X7VYjF",
  "key21": "XBsaEbXaPYYZaRwXQGNUwytPi6eVeZHQaMvVJ1WajZPQqENxJwtQJw7j6Bcn6z4qZTREyqYNBcUeNMbEFiod5C8",
  "key22": "d1xte8rVYtFN5D8HS4tLj4Ky6xDWHTMkCvHvsYhJQox49MVF4fgjksRyYa7Y3k2snCzLtMxU7br9kgkoGPMChFS",
  "key23": "49sueVtD1WBvjAuK8CYoyNtj8o8XZjiB9arrRVLisKXHRPofSdJjxcoryZd6vtGwq8gjoUMXwMwPqE5mJUZGurJX",
  "key24": "54C69wEDTbkyYjKMQYKngJfht4Sf87Vn4P68M9ssHg1AD9DmWAm1joqngFPmHe6y8xM5Lm7guHmJyXVUE8LZV5Cu",
  "key25": "2GLPTajmKFw83A99to5BRxVqzLWzz98XJywipJCwpU9jyrXCGS48UCUkdYBgrESkhk5GBwpCLAy1CUGjWHoah9bm",
  "key26": "5ZJQAM4tMi7CQWU3kvTMQ2M4TeExZNrXgifp2viWWQWtKmZrmPaSu5ZJmGJ4XJqZKfnXSmrmSCeWDB9cbNiFWkq4",
  "key27": "5mKR5aWY8uy5UwWS5uhTMFLa5PB6R3PJFFmgdJseEUEhsZoZ69z8AhiFRNs1tNui5dMSDmjmuRVaLypgnQq2DeEx",
  "key28": "4yVhBqaS4XsL7HDc1U6tqCjFCG6bLWy3WkPwJsEdxrupEQnmbvEFrkn8mPPUgZXpuWMxXWSNNQT7EzsFt6LikBdV"
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
