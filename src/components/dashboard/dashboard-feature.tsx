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
    "uqpXyf6iacDVSpjJpFDoeVnrFC6NZdkS8zP5j7AxnpeMbnqQJLNsKdqu5TMjNwufVMdjTCoinC16ye4GEKGHFr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36oZvNWbspZeUudt8Muse9mZfybW9TiUeYMqmPmbrfaDfoMsfcL9hek4dw5paEWH7LPLiEMHtB95uw6FPWMeYy7v",
  "key1": "3eJnFYkADbP9nFjc8DXaRtKH7cq5kWHaBmtNuzQQR1F3n7JcQYbe3c7CoChgTfcfxZAS5QKSdukCuc69ZVp9Xsh5",
  "key2": "62TXU8BKhXjPhGennpq7ToUqhyNVeREATpjXcsLiGXab2jXQ5tY36iCGJ7J2JwGwu7LPRW1g3Rt7ftYF3EEiw3MB",
  "key3": "5pniFotm3ok1C3jd2L5PjEPe7xscTBsLnk3BNsiCHyNYD3y8ykfz9CesNHLGqTiGmS6vqA9nc4tFWd4t9d9pvE1r",
  "key4": "4hneePbgvan2ZJ7i4YLQRwPqgzDbvqzBRhJV177b4axbT12waXztJWpMLKobvBp6iuu7rL9RHxSNrLQUkixwVXtF",
  "key5": "5yaTBpxQr9oQdaxFNeFuUkzRUWgW1vWp47joJP5WdHXVzBFkhseEr83TdNrfrzuK9oHVRgEiY2m429rQhvb4Ptv",
  "key6": "5mYxRat3HVsfhUHfQ4dqGWaSqLZuLi5TXGqsMVF7dtWkJxCi529pkQ3t2ph56BMEFbGRrcxN3df2bxGoWJhbytJ7",
  "key7": "5Jdavss81rtYqcjBado1bHsnBLTLfCjesN5pQyDaybe6Q61WazpLs5NNhcaWt4qaXW2SMzYzKPb38gNezJKeuXgx",
  "key8": "2n2DxdG5JHDVihMeTx9ipDn4qjhunSHHC6UwKgr4hpZS5PVpaCdoBFTcUbAJb6mN8u3DLvFahnLiPc2fo39zK7Em",
  "key9": "4FX8aMHGnN4oaDh88EWTPthnHFEUB5g4j3jVtJMTaF8BzePobjppxeJU5JziRPrQxZfY1obYHek5e25Y6UdbY6CJ",
  "key10": "4xHhnFXU3mdVD4fqF9rivg9T3tGEjJPFGewvCXB3u12T8tVy9txpW72fZKo69CqK6DU3L2WyacU5iUPfrULzQABn",
  "key11": "TcWkEYsAQKJ1RXx15uEg2ANBDqKvVcAdYvGHdhEuiJW3tB1sQvq2cB8AErSkH1WVziUFXkHXibhJvv2sSQ5pVvy",
  "key12": "qeZzH5PqEm8hnovzPoL7kvNUUhQVogqLThf3NJAdCnQ1WfSYEvvn8pCVPggPkcgYgQLUtXwEPFZyVUuuJCj4FZL",
  "key13": "49kzNQPA1RbfQXdHc9s7uuFBGqDdDyg93NYBk2iP2TKgXwucDDtc5YTovpU7ix2LS8uyhmWkGVuPJoagG1pwooqX",
  "key14": "29KzHhdQDi4hpmZ1VpxLNauGeckh8sDsfRqiXwwjKwKDbRfMw4vAN42tcxKF6DaTD8VxghbvQBhFezang4pH66ct",
  "key15": "4vut5anhAQeqjXJr34C8styR5Hus6t7dQH3bFrqaDMEw9UN6uwuCNxozAQf6rE3zuXwqP4hp2Jd1twtijUupQwkb",
  "key16": "27tKxczoFdxJGGYhLfwTpQgtWVZuSzYJN2ZA4SJyCDrUxyzuTzThCSqBE2npaMwFTvLsX7DHZxa6hXbBrs6b6woH",
  "key17": "49qeLfHXzQ1fNkWuno3pXYnGkAJCumCS8eL67ueP4UUcL3XoSTX8MsDAzLvCDQ3umFkxGDUnXdeGRM12uKKdm5Z2",
  "key18": "58fp8fe6dDejbNbDxjRw2buW9Fb6Khs1GHdF8MvXer1AigEZYH414FWn8PyrsTf2BGgKYX4oq8Cu234mRRcmRsYm",
  "key19": "3SpsTnJDrTuvgUQ12ArxPVsi5Q6EV91GCuqSoReFmJPSnuKV3gA1XzLUHvCjkry9F2MXLUVodgqPMxpUCfYFKwtV",
  "key20": "5chsypyhoM8WFmfUcYyigNDAZhkTYsqGkceZC1ZcdC5CZ8REqFEjw7Fti7LqLWiuZJJaZDS6eVQnGR9jRU38kGxn",
  "key21": "5DoVWu33mvWMjNwKDVwuaKM7JqrGcBdvaQcPhNXyxKLxAJymMsgYnTfd1bHHMG5yasunigYMiMwqqX1fo1kVWaC3",
  "key22": "5iuHddzVNKkQ9RHMaBtnQuxv9qE51QE69UJMSRy7TywUbGj7VUVRQuRNfDangeS64XL5xDpUSA5mk6vohUxRKXKH",
  "key23": "3Tk8PX6A6LisYvZDt7mGFxZhg7qZ6rtMjLZ7nRbHeJtbfWpBenToFLv17wvF4ntJmnL3Vm1hvbWZtR6wGToHhveU",
  "key24": "4LKkfxqY7gsG2iy7H1RM7Bb31zVovyAx4nAjpmGZKZQKxY6EhhZVePbG3NB6z63X5h6RAL4WrKTUX3GBeTUpw2EP",
  "key25": "4b4sqAMv7SExAJwtySb2w4BNAUjT4h9PrB67AgQf8gEt75Uxi7mpY8hhJKq5C6VyM7cjcnrkjT6idvdB7cZZ2eGU",
  "key26": "3vqzPt6H1NCXReDBY9iHTe5DWPG5a4cTip6cJW8VCLU3EkFHmWJwrBJh45PyLqvx48JP12Na3Uw8CqVLW16Mnmdh",
  "key27": "4vVmsdWV7rqxRozeyEv4EgLXmc3kUWvNi6KABEr4nYAgXCKsaqMQAtZEixzk1c64V7h4wFT2WrwvsJLMQ3zhjELr",
  "key28": "2YWWeaT5wUq3CXzXbmk1ScZUhGbB48co4dA6MbY8VHqZHJ8RxF1v4MxQFuzRL8ww1MCxwMNt4kR6FfSqG6rJqCCo",
  "key29": "4GRa9zhgJraGgsdMFS73chs77TZo9QDJjNgbSQwymtZAAgwiqSU52aDQVwYqAkMxWTUgEN9s9wbbPLQD3g98MiMo",
  "key30": "tJhpJioENam5ukRWEB4iB8isUDjPYTXwzmsTUrEFhhpxaDyhkugxXH73WvRyMQuyHCQCsrBA4zVEbg4FFo6MJyZ",
  "key31": "SfatVBQjkQuZhRQFfRx3QPYhVrmVJHS9UxiT3RbCf3tnjEE6CrtNLLekNnGMkbwAiJqqobX61mcPx58yTX58W17"
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
