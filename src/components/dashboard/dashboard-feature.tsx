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
    "4EPraE1a5zkWXLLTnfu9TbfKpa53GCZv9vQgtDGQN7JPGxEGFr1mKHyiB6zskxJqhA55EZoyxsNseucu6LUpE6am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Du1LpQdVvMKhoXC3PGfcxyw8ZiSoKUq49M8VKpujfRsXus1RC2AFMKFgu5DPWqNAtK1DJ1vpZb7WndcxX2VK4NC",
  "key1": "3tRxWqnNbhdRUp25DYrP7KoNZs5pVg64bQULU2DSzLD5i8XLYHsC4ziqekLpUc3fKNrbqhZnzmW6PxoeS9H3eD4",
  "key2": "4ZazV8V8N4yULVAB3a1te3KoZZU1gKg2uM2PPRqXZcwy6u2ToaCvf8cS65WH9BYoaQvGyAAJdsxtmv5rKuxkz3QG",
  "key3": "4yMtxtsuJ2xTW1jhxQncR7TGAEX5DZSVM55rDKKFxpCisnq3QfDZPcymbFqs1AR4w61m9DQWqfPTM9ttXgR8ww3v",
  "key4": "4w82D3oKmhT9uSHHus8bka4UUAuxNXQRwYmRbCEJWz9muyYVSvRsoyAed5ut3zfMyxTiwMtDJtnE1LVE8vytBQWs",
  "key5": "3ShH1QCdnqKj1x2bJDTsCK3yTcvckkFrRzTishj8XYV4xSL1FXdfdByKCM5sgb6vRYiMMcDQ2uJeZfxTyrU95rS9",
  "key6": "2Z16PnjogFpUvZJVY2JLJgReov5BMz8tqwq1f4zv5yN7eaTFJZH8ncSr8z3bDawVGWwFQ2X7J8ZqEfmH21Dh14ex",
  "key7": "47Fbw6qdV5i1CwTNuu4fravzA4UUrBxHRvhTzMDhXdqk3nqsht4vXYgRMuQPbgTPsNg5EeZwLSmjicCEiX4wpAYC",
  "key8": "3GJztsTGAwFH4P8uWqs6qTKXBKcgK39Aj7o6VkN2GYrhWUt1XK7WwyRVXECForAAKK3EDYstG5YGvGGkBPhSMkqP",
  "key9": "Pb5Tt2exrmDQE6hegnua9ywiU48GKm1G5WPd1fyrRXxGR6TKvKMmxaBmfsfgX8nmZZEJ5D2CSFLbcQMFoHNkQMb",
  "key10": "xbQuwf13wukGbcNxct3pTNEYexLnrfCWYpisUg7MSL2f3WAUdGZxcXQrkS1tQ5y8F4Txb5zxG7zJ4DCTbXdQKDz",
  "key11": "45vLgNZGKma1GXqDKYijKhXpTgSaPqUdDohNdVoYR1NVsPaFti7uSnMbZetUpzZvRmgHWmDt9ShztUGp7MDFp6z5",
  "key12": "ZEjN5sE6HAyqBLk3LdeVMCQkUo4HdizesqRtELRT6RSHaGJ5u7EkHaPYEdBZ4wwXAb8xi5vxHeatMuHTRDBcCFG",
  "key13": "5y1dLgtWHjHQYz7NaA7X3V5EumkzTiWDwDczbTNsnurDmxiNbaLvCYGEJJ7Sbh76s1gSQe42K91j5vNUzmDeGpui",
  "key14": "KWWtKA51byug6BGG2UMwD27Q7y3gp7jNJGmJo39dtn5tjPWhxQQ4FA4WZ8igbuNYh4AMr29dr9zuHiZcqLQFonY",
  "key15": "3jpZS4QgWfU5shqUU14VBZLVyBheMPQtNW1FPKMnD1SaRX73Wn4KVbH8pzdBzLwiXFpaJamqFVFAMYjwpKCNk6RM",
  "key16": "2rX9MyvY2AGiS2oXFV9vxeFDzWa2ib5rJxTHnC9xEFgF4C8bw7uNjCdxHmgKQfGTFAbiMU93rknJYczVRPBotYcd",
  "key17": "3nxvMrk3cNgRb8AZa6qVZS416MbPJ54AY2cBwVuPmfPSyA72S9o9tqQnRq7pa8zzXCvCUUyymKHKShyduxoqbAd1",
  "key18": "2UDGB6oEsiM9M9giTUf7Lu8DQsS1navErRoQRqUSvGFD4yJBCPVxQxR3t6CA552UePD5RZGvTSAwqB6QwiHk4dUT",
  "key19": "9imCURdWzZXL8mRVn6MP81pi4z5y1JrjAF7XayozNFKVLmB3YSC1gzBkCyYAAA51M8eEAj5SPMHUQUghctnJZjS",
  "key20": "4sWPEU6iVTFJbxuFZ8icqUfNk4tubLGDnKxX8ywmCXZe2RxZQMkEzSuQVVDrqGfEX8E1nDYFNxnuJX4rQ96diBDt",
  "key21": "5GdctdhqgzwwZHKeLGvBLc6gacjkmgcfEoSwhFj15HELCzFYdvVxFNPxgt4XvKp8cqpSHSbkNFNyV7h3odctnHMc",
  "key22": "4ZF6TFZwaoVDRaSUaBpYm95n9qKjy5mLjSCrMB9b42mQBszurHyurRT4T3nctkVpNb73HdJUQgkenc7ipSe8tYc9",
  "key23": "2fgQSEZGhQmAC5SeCuKZiwpicpi1dLzZJSMTn45x7DABkT93igVnBUG9bqZvZNALWm29pnU1Gndy2fD4nazS5d3a",
  "key24": "59yJEWGUkse8x9wQjLoczKyyKDVmDFVwRjVf5dzxEP1YnANyqW8RPeaviFAs2RnqLGqY7qT5uxRkLQLV95KPU44x",
  "key25": "34W5QjWbpKquttjAh1QvWAeiKDrdj4HN9RitdoKo591wmNSv7vFmXArmm8LNqoT6bg3hBpcHrVxPiywnxbMyvHrT",
  "key26": "g7c4iZBhzZobehVioDoZoHniKSFrX3xrCL6ZpPhfxmCs1bDUcgTS9V6N1tMacQw7q58zuvhYHGnVuvCs8cyxzQj",
  "key27": "A71GZMTj6RMNQnq9NQrqSEz6c1Cf7erdApoKZKijnwZ6EVoZobSBh513UfqqxLqbvDLLEgagH7SvcFv3dsxzEyB",
  "key28": "2czqvVdRaRehY5tq9eLCz2iS1JNDrkjZp4pYoGPDuHgkMHe7RzUZGAQKdcmdwZ68XCiWXxmkeqUq6xskE5czcDAD",
  "key29": "1rLzaBih8zGwkVUMXqdrXCoiq9dLTTrKUXApxnFiXJYF7FoQf9v8Hr4Pe5PDpQqE3j3TXfY6ANi43h9Qve9YZs8",
  "key30": "2vgEXjzM21yEZbRmc6f2kjFgrW2uXpYLk157iTLxxQnnsyP6jao8MV69KB9yfdzEyAmCAcT9Z6AaXzjY6KpDMUzM",
  "key31": "2T73nKRr8YrwVbNdr4anLoSk5vgeminQEMzLZV6J2JSNvm94MkcyKLjap3X8h63NtSxjjaNbT4McwnE6YA3JYaYh",
  "key32": "V13UcXLmSpQ2pG7SbX6RnhZJm8invL8dChWBe4YkxhWyf7k2qgd6EveFxFecRytehjQPJ82WyrGqwqHMRySxnk8",
  "key33": "3LoHnswL7Y8WVrG1j6PCi15c3QRtejcykWgKcyR1uxvHVCP3fkuaWVR1eafMW4jYgzFvsPN5QbtmuS11fy6dsEeq",
  "key34": "ZDHG8jjjiLSFw6SZaoWsJpLpzsxq8PK3WZhRvdP2zmhEXLFPsFMq82aiEyTrqvJK9VRJdrBLQm1PQwzJ9g45xZ6",
  "key35": "3t1j23p5Kq2yJZAjBvvjtkqrKB6kCESfq7WZHj1bGdjbQYJE3RudFkXmnkRBYwUYWd2Mv1peh4bjbMzyKPGGKo5S",
  "key36": "277sxUSKDfR785rAJweVedoFPpcSNCEyErERi29YGdpUx38CevZBHRv69LAez12mUS3ppXzjg4HF7fk73cFtEzVo",
  "key37": "3F3fuWZo8KD5fcG6gbxLXJ8aRVXZKDWik3igUqLJTgJRN6FcsPkJ9juSr8rewRTBnZYmdz45frJtCJPGguNiXBcF"
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
