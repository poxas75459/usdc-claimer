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
    "4yr3VkgZ9xQhrQh8YXmoQbJpZHiYh4Grgab4ya21saATPkhYWg4qaL4yZAsU9WpRp6RbPPBXqpNvj4nZVKqyeg7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A1BXPJ6mpTW9uoBh2DXD6kxHbjCxD2s2vhKYsXBk1C5rSHLDKkAE6UzPQDrB9MgJawYHoq6SN9FPiPxxy6xgeXj",
  "key1": "2538X63h1WJaqSFxhgq7mbumTS8gLDsVMiQnZG5P1dT6mEsCMPkEqj6mYogHMzomzbAEcMhCHd8XfC6Tq9eCjsKK",
  "key2": "2gfBjXzVfTGFmBSmft5yURYgMxpCr7Dg6J63Aqa1HLKYo7oHk2s41Ba7FVbbra1LsALsogVNFdxGAa7GsxqksfZ5",
  "key3": "5zrt3gh1DM17sKNj3CuPaUeyz3cojeyipsbFJ8cN2EYXvVSVdNrCMqy1q1VamjE3X2qLsNmVJ2MoUdmtZk9on89X",
  "key4": "43oG4dVZ2rbnrRJqop3aw6aWKzCXxBLVfeMAe3LvgdiaVuyULdTMGFPUkqFT8YXghBkPzDopwmicNZ5WJoWJmfVJ",
  "key5": "3fakkYRkcFPSLF6eCE9BZADnW3HxcTPQDAkwS9SUkU6BjNeVwYKkxcmJaFhhQ3Gwh7anRRGxj561ZVi53djGX472",
  "key6": "24oNkhpvdCw7fBP26mEt8ANaweXuHvuBHJXpUF77kQjLuHGoDYL15YCYHciphLZRaWdHeJrRPgWDdRS1LupMgAF2",
  "key7": "457c9PR8tpvP4d2ovbc9NXLw59Qc4Y4unymoNo9xpKS8AetLESMeY9dByLvikCagcbMXT8Z9EtSUkQR1zXbixfME",
  "key8": "5JKnsjMPfVwB6WiKmkdS1XMMuye21VxsnKZ92N3QmfXnkbwExyq3zekYmvTfzgGyz4SfKG3rPsFgD1uJfgs7PKGH",
  "key9": "4VVBsPv8mTJ1jknJCV6BNy5pK7EZDRtNWh3wZzHAt3fwNGs5RiKpsbF7Z64W8WWHoxUbDa4Zh7EvzUdM1PYPFHbo",
  "key10": "GE7A4qGrfDmFpMhyzw77nty2ehaX1iP598ehLkjsR3gwExwUKq3aAnxYDp2zQvaMUJs28gnuZydY47pHKwyjtJb",
  "key11": "eBy4gVSEJsrdDqpT2RD2fij6pwZfPt65fsRUxWdvZxEM1JvKxS1Dms5kY5eZxuJGP5wVj3K6RQzZuNbebX17Vay",
  "key12": "3C4p6bvzHjabYXUxeWgUGqKviTmVRkf9DAoa5t4z5pQsNeHwKBKgNoRbFHG7CcemBt2rmpprWRTG6RSXGmKfjg63",
  "key13": "5kWB8HRpnt591LpyiL9iysECbmqq4RPWZPwsFN3BS7ddYaLGNGjVRUBvSd1gHef4aVyFvwsCJAX511WprtMocTCE",
  "key14": "5P5PPDRKdzYRfn2YMGvwzEUXxSTKnm1RsgeqcY7mRwkXm7ZYAoikSPdA7dQ7E2xyUoWeaQn1XVf7YbQgPxYhiNdg",
  "key15": "5tSJh148NCc4NfsQPTHiLDzxEuAbmqYj9oiJ69gCxDSveBRo96DsyvdapRimLpjcVN5sbXy5cP2TXxECSQ7A79cR",
  "key16": "2VvWCdZhTh9e9ngfnhBRPgpw5SE1SVHBBktjXqEszg9HvQAze8aqMyegmtXe9kbwgUboa7YTQ5hdCSVUVzxN1MMb",
  "key17": "5R3gPwhM9wAz26Tb1GVdDTWXR3MXpgSVdPhU4xyTJy1jiktc7mjpnJD2tVUavnV7BdVn6MoqBRJ99Yn2fM6VQxsG",
  "key18": "43h8TkihkPwpiu9ASuBnyt6kFW3QfMvDFVSJhWR5TFRruo1RPWZCLAkt7pxveQNHoaoWRfUifct4RpLeN4vHVJKj",
  "key19": "2qQhcmMF55ozJPi9RLviFKxXjjCHKtzDozpXgCgLLwprCNPbQQHjYSTRC3baTG4E15YsfVpVTxW6GedCf2ctgBhJ",
  "key20": "5FYCZadkpLTyx1cv1UWmG4dyWMD1h5Rvj5GuSYAvxTL2bbkycEH8136rqVjABEdbzXLpUEuBzRNMUKtxAZxC5Gd6",
  "key21": "3PRMcrRBs4ESvysZKkWg2zdLqEkq8Lha6Aoy8ZJeiiZjB5veFu8r7Uv3d9SjaJNNGaVNC87wpgtFktaX3wUcUXu1",
  "key22": "4RmNnMbBp6TB77qdy4B4jEAGqwzkb21vNWuLUsriYs21GPWdXdsstdB8PmHXCAvpUGga9nDz7zdfy7GQq1BCmcnj",
  "key23": "3QiRrFd8vPWvRoMXUScgFF5meKhDGNv13spoe4ZPUthYhv8LZMjndEvdHjt1jb9h7nYfDZp9ZfQMdFAmokVwLf3P",
  "key24": "jwHoq83j7pxqz9Yi7Mob9FwZoUtj2GefaCUpxKPpqjkGYZNbZ7xowsJhNrYxNZ7GRe9q3DUEHwAEeVTroDHZgZQ",
  "key25": "3WPWh3x7H4ADD5ttQ9bAd2SQ3rZE3HYwPbUv5KXUtR1fFS1wTNrLwZRFH4193h2CpaYxSxmUL75A2z1dLho428wq",
  "key26": "EdKeM8z5cv28mfEBXZS3wUkqimmjLmdjajf1PUdRTzRhsVRGWTwB119Qx9NfmShFYAv5kGSWTYypmpzAsqLidmg",
  "key27": "3AxbV6YCjFmXjFRXdp29dY68g1DRshg3k9ZTz9Y9pUDFkFPcd4tUQtm8pWaiuNsuUFWoqzrPKzSN9vCaU1hQ2anA",
  "key28": "42sNvbaBEyBcVuWiFoez4F4KZJ26qozzHv5xeThB2BMzhtaoo9dHuBVFQMqn4h63QPHezX19pBqyRMYGgwE5KP5A",
  "key29": "3f4ejvBWiYmqQ1eW5E2X8b4HCQT6Fihe8G3iq92v9mskzm2Hu5QFLTDYEw4NCibFvy8xz3oyd9ccVtt8gk72vzZQ",
  "key30": "5x9bk4CEibuzspQsAZWfhbM4Q5Gio8ryz9Gy6watNHLrpNmbE134r8mccMX9coftnmzuQGNS7C1DGuyrgXqaoLqA",
  "key31": "5uthwJsUQUHfpMaDFLqZCNh2iAQDpRoHnLWqp87F7RVio5xVq2z4Fqp294x4D5VYMuqqbFzu9yPHvfgBL89PUbGt",
  "key32": "5Ehe2posvFVtW9BkMGXULENKUDdQbkCSey4wv92YYRAi3PsCNjBge1YmHoYHfhFqhcBZaCpyrX9ea78qzGxMUSpk",
  "key33": "xa7EcctSeDUwmKNCNgMiWkgJG4Hmrq9AbSiTEmgNyeV7LFTnFXy7DtFJSybmC3qDx31wkKBEwXm3rELmWUwdNAJ",
  "key34": "3fQYN5ntwJMYQJGMRt5J8MUJSiGtMjMroxwtMJ5aSoc6XtVUSjGwnsib3xxYh6YGAKQBCdLtMR1FXkxZYnMDURoK",
  "key35": "393HhxGZ6c6wKH2DbEXxDHC1z3mYNeQNQhJvBvh3rJSdqqjxrGhumhR4KN1N6rRxL9rqaXpHmo9pZsMXtAtLXrCJ",
  "key36": "Hdtv27Xdn3ZCfeRJK4eAdjpsWDtyyDGTYL7Yz5YyL7qhc2sk8wYrxtFgvtGo1CcTDYQ8mZwE8hRUctpNay4mxhH",
  "key37": "ajPdsjPZ1zM8N8j92JNKEQMVvvwgeqM2aR8hZDaFHxEBtnNMVxSaqgThLLM5LQiPGW8jW5jxXpvfYKuyotiHuKY",
  "key38": "3iutaq9nYQNjN5QYajkpkpzfi58bzqmMDFi7hxBZ9sbVJFrhb9EPCTaCjWGYcw2mcs4sJYhxK9LnhNUkfdE3wjN6",
  "key39": "3WNATCEcccWjsZEvhuewa7nyEwNCFAqFdR3o2jVaQacHv3kqVaZ6tXxZhGp8RoDJDNJZ4Xvu5JuJE2AFGMSY2CUc",
  "key40": "jC6axi2CV8FS5LeYYqXGhpDYgynHHCpfLxQTGwwUkpq4ZZJV4EA5WuthP8b4tK3qKjrQZK2yoNY33f5q6uPeyaA",
  "key41": "33M1HD2eGYrpYaU3Ty9mj4mtgb95dgrFAVTc9fAAe6V6ib4xCJTkVWuYu6AFBdbKi7PJRDDRKab3XzwUW8Wpgsmz",
  "key42": "5NtvE55feVU3tigns7c2kfpDbkR6qc16XRmDo3F27ng7RRbozR1Q5QyV8LY8yHTUePcVC9HRozkNvbeo1KQzpfXX",
  "key43": "51ipAVeD7VPP7e9AagNb5kExw3NDfWRdQPhkynRtB5Myk8FWz3aKie2qd9NaThvi3D5BvLJATKz2iZv6XaWtuYvh",
  "key44": "4ThUEimZzWPBL264fekdfkYCupBfRubP5CzqKNbnFRJmdqgLxLuQdf79DBE52KeP2YohnqkkKTWyDPQddgPonfmT",
  "key45": "3za39LUcae1eEmR5SexMxUFmDLuuesB4Ji6bAdUuATXMupkizN2vpVZaJPEf1EZrDVwDeGzepSvmmY7YuieH7E6g",
  "key46": "5MQW8Acm3ZLWEqRzajkzHFoMUwgTEce158Akb72bcW9segVMC1faKbLtQPDpQqJkhz8r3MziqaD8X1f6DsZr6PSn",
  "key47": "58ATcmbEjvgwHUDN7Qpy91NfV6HZj88EFp94P4JZF3LZ4sbh3wHdddEBqBxTb5q4oq7UzPY7Ffm824HHwQ9ibxcz",
  "key48": "3xcRM8m2RUXyZM1jxZGHZS8YhDFwzvzCyWWSTFzGyYxci86UQGMV64AnyaGo4VqDpmzJBEYn4B91hkiwDUjLRbBs"
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
