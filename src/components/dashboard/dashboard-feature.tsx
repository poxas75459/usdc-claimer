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
    "46mahGzxwHxbBTwUMz1za1buGETekhZ5jVqSruNzyG9Xmag56VQgGoEKSRUhrodbqRxFLLyuXevcwS6wJDMnuKKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1KrQi2Gog9wJUWHrneZc7wVwLwUJN5UVnfgUrBLLMYxasTNf8jN2SygHL73dMKsgWHZcWA5oPDbfU3Q9HCnzEr",
  "key1": "3qjVDMhaMqyMckcLhyknesEMF5LtChXNTfAKjfnE4QcT9dCDC3RoXoG9GGBfdELw4NgCBvjYBX55UfBVsLz3uxrZ",
  "key2": "3DLWqMY2JdZ6DdBC98W433mG2J1KvUoJxqd5oPYoc9iUe6meHeaBLZxq7Aa9G5L8HWSCXiz8bqfsxVKAtgEm12bu",
  "key3": "4Dx8fBCQAcV6RZT4yRMKQ7GGVokGhdAakshXWMsdAJjbjqZSToU7axDFTu8XL6ewCP3dDNjm3BCwMAdyFjmrgsBY",
  "key4": "XbBvMSci9EMc24K9dCsKuUYErrpYVwjrWEkVh8boS6ZgcyWc7wenXjDZi2DqWY19S8bNPPnBDPx2Fh5c8NF6BBb",
  "key5": "5heb8gkTVsWtFSSKo76XTtafWD2zbueoJSfSXYeRd1eieL9JmvDNvA2W3pCbXky4WpgzvDBJgFVquPu1cgHyjsS1",
  "key6": "3ksUaSRh87d7f2QHy17mUUpyimj7XADPBuNcJxcYzyoH444LUhxHKWxshtz8tjB3mogZcs28ks3VKqDryzVyPZfZ",
  "key7": "2TfCYj9PhnCftnDragMeHtdEJ1QJ4zUqdqwLpMEpW7PpBtHYLkWzcFbF1Phu53RYtfDpKyWN5sVJCCoyUM6Mq8Lc",
  "key8": "CS3GYKat35FpYa1NGBKPNHiWMJRQWt18eAwj7ydrHohXyDYVr36JzKMc31nRAvPPgj4JgkHLQHoMkzGtyKFMBxW",
  "key9": "4URBaKSg1wdDkrht6nTonFtY1bTLaAH4dXJtWvbtaQm5VLEeFAxqiTuRnVitrJ5f9ZaN3BKfR1yTVVN951E4q1y5",
  "key10": "65mU7q7JakmaQjgLU3bHedBcfx4LADMiS8uTonrWQa5LP2tWtRybgnockrdh5iijiJ6hyFuQCmaXqW3KyL4suJjg",
  "key11": "44nPE8LAHuz6Uy1VNX9irsLMYwh5XdBEwHMEAsmAZ1NAukSUGa5gQvmAehAy73XU7m4Nox1jrmzNgoa8k5gg2JzT",
  "key12": "5w4qNej3C9PXnDhGNTkZeVr6RFHSeJBuKZS7VJMXkwbk3RfAbV8NDzjSxJFKVuj1uiwKCsfPqbjMgQTruSwDoJLD",
  "key13": "3WLnQFCahF6D2e6bxU8ApLhZrp6kbM4VEFhjvzb2opG23Wn5Jiyyqtmow1rhcJjojXXvFVkGxDjjNw9XAe1Fg3oQ",
  "key14": "5EphiSCf1AsZbmGQiCuDvDZpSaXMj44uh14tBvVbiJiSMurEFok4Mkb9WWt8yH86MT6HnEEntxX27V9gHSfgu2uE",
  "key15": "3vSKpBQ6we2DmjPYiTbjqSqawjcrufwVhv687d1HFM64eVr7DDJH5aFjXhfs1AVRaf5BqKLsxrWjGN3X6sSJdEpo",
  "key16": "3j2hXsqvoPLFpJQKxXFq6Kz5tfMeWN2G9PJHm5Puts2SoLZWEV58M7JNKkvwEyip4MhmxRv7x7mfq7WkYhPmmXAs",
  "key17": "4ZrXGRsQJtC1VafFvfYque4jsHjbcFdpXzwGvC1Sf6zKAh65qUWBR2ySdFu2GASYChU4cAGsRPWmivozEX9rv5Gw",
  "key18": "3YXgc5sXmhk5DCmdf2AUowHP13uRRK6P7qDaPzQByA7oKQQwDXZhdmafNcpW8d3Jjv6rvyC2dJ2ofoyBGZGMFxn6",
  "key19": "3BFTxGKfkFQ7E1aeeTYDu9BXYYc5RJTAn9tu5iggjg6CfdwjLr9ZzkmRhs13Lp7nLbPxEVxq9jDAvaZyS3Lgymxs",
  "key20": "7RNWVAaTWkUzMufz3wBr5RcRABi47exqCRpy8yVsm4bfFVDRPn3TDZo53u4GWHC1xjRzzFRxqfpyDdDwkDVVu6C",
  "key21": "4s8aYm4VwomCP3XeYpvhHr9YqUaq46P922P1sa4JxNKe9YpqymC7QvgJgyTQhaFNrbgVQ597VGbKfsHprWDmpbVF",
  "key22": "61ZEo6xQ9kE2UYmDqS8ghoPubFZsW2TXTqpov6xb4oCyJYLvcK8wbvgHctxfkeJ3adCHK2f2pkcBBpRbxBe3kzQe",
  "key23": "32Vwiyv7hPFLvJTH2K4gubLjaXRtkrRR3qsRViZCCy83XRFDd1QNTWfkgmbJzxqeLAemtdqcfqufPirjiNGFJuQD",
  "key24": "56p8PkiSo9fT5xkk4dJbGv8vvcVXmcx5PSWy7rQwmfyQfEJXNey6b7SHZHTX1v91McdPHzJ3Q3XwyD9FR2GMb7Lp",
  "key25": "47cQdwgAVYn61trgUTgqypbRzv3AbU8M7LTLU65J3wajfJ2BaaWrZyKLfCdSDAQosiG9kGQ2AtnEzUWjPiUjxjyN",
  "key26": "28ZZYBTKWfrWLj29VxBTX7kWefn1dmUKkgJM51QghVh1KfQB5JHEd8QTYNPLwoZ7sby2ACM1t9KYWdZej9QmwUME",
  "key27": "EX4LJpfMDzEZRYJ9AfRU9cyudNJVD75VwtKUnRVSbSw6PYoVJz7of7NwvjazSXTZwM2ZVMM361p8JVi3PwVb8nc",
  "key28": "2kx3mHT3P6hpDcej8ATUvSf4YEUAxN63SmT9GPp9K82jDuD3RhJbnet5gFW38LUaGKirKRdiXXWhkmvLGapFAaZe",
  "key29": "5T9pxXYiLi5MX2RkFJtceb6LvWL88AWfTuTQi8FHNQF6BABjXMDGvDcKpzjntr5WJew3troJ8XzxszNWV54GSfFg",
  "key30": "3AHUouiWy1qsEQAoiizFvzzzyZ7xLFAtnswBenTUxbebCuFWDSaQcauFGRryKFfC75UGRfnoupTJZmzL8UPrWfJR",
  "key31": "3TduADunfVV7HPY44wR1y34FUMZr6BwopHe4XA44W4Ew2vZ8hJJRwEcmyeULZMk1o74Q3fb8HResHcMB4EMqFNw3",
  "key32": "5YkJkUa4MQUxY9oEhnNbmqULX8GrxN65gsgnF8qaJPNRrCd62ruDAtXcGyri4WzHA7ukc3WajkH8J5Ucatkht6b3"
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
