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
    "7oApXmXG1ZmjGcsVpWuDQ2j69RBHQRVbGQxrYZndQ1u5oFFX7BtJBk5udYPafPtERBfuWppypo6NYdunqVJT4bh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZXZRcjFMNA9YwqgB5kk585SdLrAYojLkrkSYknBnkQd9Y6MaRwf7Vtnqd9SLFM75ecWGSLhtDU8GameAKf2qXk",
  "key1": "4fsRRjdX3Bg5uN9Ds8LwnuQ4X6hZCSPoYJkUxioyGAm3V9HM6wE4Nfqd2tCYYu3wP9nZtjXE3XECpWU8vjDx6sEN",
  "key2": "3Cp8Tra6CrnW22et5WrMfbEwNdyAWeQXK7T51byy43Sjdzoxp3XTdkgZkM6b6HQbvfUvCc2EoKskeuwhogQyDcmb",
  "key3": "28Z7YFqWLUR6RPbbMa7ea9ikjhDoVAxfcEcNtBaTkzg5jWABZVY5x82aAyfLUKnCw5oCrpKojU1LQ87jhqeVmEKs",
  "key4": "4di18YMziSo4sPWGZdgr533zeuVuAFqZgGSzsYKuAmFcoSc5JsFNUCcJduNVA4GFxBUbgVqmXE7jS1eR5ryPqpdF",
  "key5": "TQuNpRt9sYDtxFYKEzCNr5HenSHTtwfX7F4Sq2Q9BQ5QFoxLjFBj2MjrbPutqDqirHgQiEPf7K5EJwJ9AQRQczp",
  "key6": "4eqFkigP1xAJ9iYAvrnMu7iAupvowq2gKpQkkwwSNW2YnQjeArNJAKhYFgE7RXxMKZnpTcG5zXNu8h83QzSxmqk5",
  "key7": "2F8U1bPQWKqxDUEcj91oU2hu8PMwMtjfnuG5c1k1iJjWLrYRcXyFqC3QeYG8S6w3AAygt7X2gnhSMXSUESTGEgLh",
  "key8": "2kTwgamKKtpYPWkYPTPA4iaBVYdbKdAF51Jmj7mtWF8HrzWiTavFgxm7dmnKPu2P7u18xrfCbyQ4ERNndN6Go7NJ",
  "key9": "2Q4tquunfWFuMiesvQAeGdXRHkhUnXRa7mgEgw4R26BfsxZUGUGEaVGLzkoLmd2eKGTqgViyHLK1qvZcg6URKerf",
  "key10": "3Z2WJUisPArkgq7cJy4M7wZbWip2tmSxTJa4WeY7X7f3N9i5ciqSh1BRYHcrdR9NVdKzzGnusVxZJWmuem43Gem6",
  "key11": "4vWgFeovJRQJ7V1HWJzSDAtPrAbkkYX9EkvWArLCZRRinN2Js25ASwj4Y8XTEDPqRUzTQnpEGNGuQ7mg1Xq9prTr",
  "key12": "2f4UQECC4EpU1gd4Gyve7bq2RKp9avaUL8aDqSRMbcaukgAzMdkSBx2G6ZhWN3kAWZ6u5eo6XLa6KDLcfHCtdpaT",
  "key13": "4fAiWoT7qRa1vHARKgKYb3vTTXx2jcathz1QHtn5jKnZtovveADPm18YDQgWcZXUh2zX1UjhSvTcXnpPaYfoS2vs",
  "key14": "PcM9qkxk3V62ydfGgC2jaW3EMkTRdcBSy5MjLipUpqnkgboqJwJfUpSZ4cyyq1fQ8mVwxAp1uKokYcYSRMRHMsa",
  "key15": "8jf9dz8GxkVKx5BHUV22RJU8Z192SKSzU84MUcRPtaKuw8KVJHwiMhbTrwQdPddTEiSeLCckZBmPgRjHckeiPJT",
  "key16": "2X6tp71rPiwvH7ZUk9Gya4n2abAwc11eLPYxFUrEr3ZT3PwYGezdn3wxkKKYyZoseQQTZBX9xyh611nmks8oFppR",
  "key17": "46V4NxXWzyQxcZY3TNDyYxMus53jJUbSspPrjc3M6iBt6chwnaSiMJ4BgyhQaDyF73SKaBQZ6cPPaVf3qduU9JYa",
  "key18": "4fz3oKhyntCnrGXLARzecGUvomLCQ2fS6tpaimR91gdiuB4KEi6hhPg3Z4yFi8A81QgD15sUmaQhhJe8Q6eKGePc",
  "key19": "5aramFWgMcDVPtu9KVbMinqVcS5XxmZpd98R5xs7trznT1mBVdwKAF9GKCydaK2wcHBiAZ39y7UKGtnnx689D6T8",
  "key20": "2JUKRiFcFCigdcd3xkzRxhq6TVbcNDD1vQvuXpVRktfe132BafNBGVAJ8iyXy8mH8EiF7oTKWbAQhbhjH53RxMip",
  "key21": "sz2NguKHgXSsqnc8VJgQ5cuxGmKu8iAoFQBmKeSwtmmgRXiVYJmK9rLx5dLuRC4VqAKZuABADLcRtN6U1NFrSTs",
  "key22": "3EhbT6xWtuKAesG1EyK1NVcbw9zDs4f4Zy4yRu6bCvuikc25z5pJx712YU4Bbp8BPnajMQiXbeVwPvwPaXcZh7q5",
  "key23": "37C456m1Fpz5EzM9wL7j564upyZhtT7c3rguU4Rwgv4jwC6YvGPtDL6TcC61ChKweqys2o5fjPbHyunBj8pgC6cZ",
  "key24": "5CGQzdYKD84G8822yhB7LWfs17AKBc8GgTj6tGk5VVS1DVcMoNa94gaSPc5pMcXRK8UvxC7Sz5mxxSUTPVYHe2sP",
  "key25": "5Wxyg2YHE3emd1Fsvax1nVq3yfE7PNrKitFVqCehSfDSybnbBMJjPo2Fd9wBWqK1N7giqCKa9Lcf2jvjf9Dw1RuH"
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
