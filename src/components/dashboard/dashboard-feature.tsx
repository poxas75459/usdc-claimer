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
    "2Arqz6p8vad2dUBig45Ace9hznHkxEe5q5r1n994hjrGEBeEhfKg5CWsvH8cfhKbz8r2cybjJYmNRej61P8cjNvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jk9vVTVab25fTQkVJufmLp9JosvJe8jYQivPezQFuK2iNRVDBFxoXRB8ehtJqp5fMNzhHuZwc57UfoqyR3H1VJY",
  "key1": "2Ecaeh94uaaLgNr9w7FyoMiDUC46VLz1Wqht5oaMxa8kToWQi16zA3FPq8hvYTEWmAUEW3aNhtN2S5i8F8opApZb",
  "key2": "4ZtPpNMp2XNeNynvy9HUyLctEuyBECPYVz5zH34yPxMx6HdBPbSJEcXbmefB3qAbqTGJfY8Wvwj4KknYDQyD23kP",
  "key3": "5VD42xYeHwiYPJMYgKdw8KG5Y8oghqxF9GpTmHVu1A1KkdjaCEQiQX9JeMz2FvXDxxh6BEqJuChgRXFv7Bsw5juo",
  "key4": "ejd56uerQvhUxCaEMUa4oqsPoBnwy3ALkuPKtjECh1iD4Lk5rKfjERQfqiE4xsn6uHAXoFfnEFDL7JnNJ176ePf",
  "key5": "Tpa7AfmTrdPx7bHnHhSKo46vVzZQigHmVWvYENXEWx7hEnLYxQoBxHurSt7SztNHjKcsMSp3CmrqxT7t78ntwCU",
  "key6": "5abPCLcmMrQdaAPMKyU31YRqBpmkB6U32LHkmhfVHFj4utEFgBy1EgkVijZzsgCBPBGN38AAs9ba7SQ4RXGhnhex",
  "key7": "4iTopnvWAsFwpfDuiTn6oFzaEZk8Tw8QLEQJnD3rCDhpksR39rs7Dba8WN2fBPPXQQF8P7Nw1UZXXKXSoutkGXk7",
  "key8": "4kPLJ9NUb9KP8hCuZLkKEJhZBMJvbHZtYmDo58ndfevBjJMcN7LHYY8hAhP47oZk9y71ygmAUkWEDyzXW476qWNz",
  "key9": "3aURDUucnMHLrNtsbLjoztn7TmK6hDysEeE49167VtqtNE1t2FrxJkDJmWPExdevRyxZKDSVF6ZLyxwTaVRUp158",
  "key10": "23d1pGv9WyxrqTsLQQcUAvH8ZujHrufDK8rND18RmorVuLjX5VvvFrznJZ2n8Zhk8dU43rmkNXQmK4fsGcSYkucM",
  "key11": "2CDzyhrfTxuX5KaTyWY5dw1DpUwxReBnww58GMwW2c7NpS23LB3EbnRqnDnAENKkPJxovvyDbc8CENsuAV1YYCmL",
  "key12": "3S8nht54sj2VJozUKoifvuvEoUqTHthe7SNJJm5RWTBhguAfg6Xdg8KNDcCxsKcVde93wJx8iGFo5cEn7rTRTHNe",
  "key13": "3Z9kenET2UJHiCmJoBtYWJ1JNHAAnBthN9ifj2G8NfbvoyPWe9p4AS7fbCvpiP2RnKWXLHt99h8CwXRCjCdyarDv",
  "key14": "2CFZDurw3oBACv6vAbZ4njkM257QHW1Gvefi99WPUu1SkbUFpUbxPrioir8949x2LEz8F7vWc2wioj7pqkUcjdtG",
  "key15": "54QnXm7xp5wGiRyGz5cqq1sVr6Ge5vAu4ANJeG1V5LrwKn3DACZEQhxMDn8gWxVDG6CqoUyCSoBwNdtaDZbj8evo",
  "key16": "3hYwFs8YDvn7ttZCST3qnQiNw7CsjxUrDfJi8xq3cCYmkTU2nkhxKnwZeDiAuThZB9dprRBNNxSXVtQzqVPMq2vN",
  "key17": "2GGp9evgF4wrsgmkzdGhJfS85XY9sLThcPdDEkxirQdoP7NCxsEnivSU7v1Jnuedb9RMh8P2Xs4wFtUiU9WrpQ2W",
  "key18": "3UtvjZSVE3TaJkgy7D7U1Grs415kMiyuVNmtGFbDbj7iakEtdKgmoDsEmPiXCXMbmkdrLCs8jXpN8Mq7q1bCPg7y",
  "key19": "2BQcSkuRwdzYTah98aC8gYWgwjYSCzqv5SB6sVU6rkbmdj5eiAK38ti5uCPfjUxLyhpusrwKMArGho3jahFS1rot",
  "key20": "2wXAARmoSFK196xPCKADTVnAqeTCTpWQhuwU3Tg5izdSVsKW49vet2uhvo422JaX5inboUFxtmrMZquzSy61suCD",
  "key21": "7oKRxhSoUVN7oWadTYha5zzxQr7Q2oefizXi6JVM2joGtBxSHcneXzhjw31WpUiTFbVkRE2QCbd651Eda76RT9q",
  "key22": "4EKu9jy5uVcL6msknbnJMEYM28ZPnYHPkzqV8hEgZqKCNVhMfHgYGX3VUyz9uRqtFszk5vvEYbmzUyS9yRa6tWyB",
  "key23": "4jBhSnofQ7F3wx3ZEYxUWEir55VzDYbbxyAnTpLBzxFdA5QCTHwnrYiGDoJEcnK7zvqBXMwYm9DhKdCWBQu6Mu7c",
  "key24": "3PS94zTUrr39stgDh2yT35NooTiBneeU3aVDiRwjS1BZJRu7UxCHJQw8D47Sp4qkQpQKMXedjyHBAMws9Wz6DQqU",
  "key25": "3BfUhq59rqDwFXEwGAh19V3VNQyBjDfxRaafeNFN8WEnjPYR2X9JpzMFFK7JjnJ3L7aQyW9UXfb8GYcuDZMfXJ6Z",
  "key26": "zvmbzVwWrVk4cqMSyF3aTM6etVYGkJzREwhGbPE9GrcNMdEXBHjmqZ6LKYb2h3SjxMgpvB9jechVJZt2EbtVVon",
  "key27": "5u8K572csr25CnCtZFHp78iGMR1VLsTaQMChKiTSMbNPgABGBdCuU9mWZXTNGekaRrVg6QDRxxjsTCj4mL4dYWda",
  "key28": "5MpanhG1oFcnFiks68akKGb6GDQ4uZTMWh9KnJzBssJZxRmNm3xu8WHcNYU1nskbYQXcB2aUKn63U8qpsrrcY1Rq",
  "key29": "HXaX1AptMo8HMZ7AAah581VZCgrd9x4CwH8zXkdtkBWvdxsnNm6fdx11BJYv1uNYLRfLjHXSt7e9PXKRLt2aDik",
  "key30": "4y4F7WZSUYXo1kWM9c2NDQxPuigcrQUCrSgpRH44Haj4csoMh3Q5C4DXZJTSYcxoegBZoP6MXuLKzbzh5U9kBaRd",
  "key31": "3dJdjsmA6ZcQ4qFKcZ9wXFLFTcF9jucx8PoZGiXbwSmApbaN9n7Etn7LS7itzK1Dejq9wGKiQnzsusxXc6DbmBFq",
  "key32": "4bgXxppgRPSzhvQQW73qiNkGVfQF67gYwKkomdGokshgt4icj3gsPzN8bvKws3T4NzEGnsmGPQwavYuYVZg6M6nk",
  "key33": "4Ei8pz2NcEzKWu41RWDfTMCf7Kx2Lg9j7RdaokropQUf1Xk2DRjXTkaF9jcbLnvGUzwEtG3u5tF7uTJvZbKb1b7E"
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
