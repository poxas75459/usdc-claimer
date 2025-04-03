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
    "5gKyimpHtXAELign1c73PTnZrvukFMCrQy5Ek8sv5VXwbVxRZWdrFmZZ5deo6GHHuYh5N6hMnfesozCYFAWA25jA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rJe98ZBhBx7nBmSdmUFoEgVHJePKdGKTHuALFmFqNzjYnf1E8dZqcFZcoAEo7Tu855bqEmPFfvYLRoVyfaDceaJ",
  "key1": "3DGCbQ78YJM3TwXGfgGWFLt7rMnm3XzhLjUeUHL6BqsRZAu89rrwrmN4XFmHR7LtkwBN7AQZU2gGcrf97kE3LYud",
  "key2": "2c5SjzrbGnEgdfrc3kHjRuMhXbbnAZpT8JvE7MCrdoLBt7bysM6fFGir72y3Mjs9U379Efo9RWujEX8UxX1nkb2m",
  "key3": "3bEsQ6YAFCGXchq6GDCX6S72uTFdaEnkKfa46m5jAvY6ZyiTYn2F8U4cZMDAuPDE8hYK1q8EQKHiKC26wexg3MP1",
  "key4": "47PAkodV9JkegyxsS9LhDkxwjyadCMpQA95Dnxdm987iKHK85eLmuThrmG8oikoMEsxFAunBSBd6B41nuo4WHq6Y",
  "key5": "Yks5eqTJmiVgBdh6Qbcas7iHRko549UDtntWtaC83sPNWcXfoakqoF1svMKS8BdJejhzmN3hT3WR3KXPXXffWGQ",
  "key6": "5kJQs8KfqVvXzZCmWPtygd4JZS5kmox9jtoWbE1SPYfufqoC6f4RKDVZM4oH7D4eQavTS3EQ3BdLgNHmmYCtwqSQ",
  "key7": "wztmAxoKVbdm2R5j5rQWfKTjmNHfW2Zx9S5uPzqJmUsJJ68WjDJxbVk4kqew53UXYhWcpuT2fKuNgkkQY2ggNP2",
  "key8": "5LG4YTpgHbu8UBoBTAwZmcrAjCkKTtMdvTBeM3FHVouR52Y9U8jJQN3V1LKkLb4YwhQyTcjrfKaYsEPXU8UseEbV",
  "key9": "4mVTrMtTK12GNnZSQS4y9rk9PXoe33XUjSzqfB5UUvXXPCbhyTqTei4S65PboeBfSWV4y1da6UJ2eqr5gxqx2QCS",
  "key10": "Quu5Pv4r1X8VU9WKsZp2rF12gqja3zBtkWBF45RnpZTu9Vb6aaJ8iCuP5SHY7sxrZPbL9wSWYtfr2Qqg578F5r8",
  "key11": "8hDzxJoxBxnh5fP7bnojX4Ut1o1JuBH8opGSK5PkgNdazMvim7QacgbfREkffnTG2QTwA376nWXe5pDhv3mc2aH",
  "key12": "6c3qqS1pzwSvfWp9Pe93oTb4ZsPREAePVFhdcJBfg4LavCfo8F7J76cWGFiwuJ4UYydpXxtfWxenh9xdwoXgY1M",
  "key13": "3HhTvS3mjVm2XYJqijT9YB7dCzBKZXpjKNrZmJ5fAdAbjKBPCiV8kdRGmn5rHQQd4orQsNeZS5RmgAk2c592stvq",
  "key14": "2Yq1VRNoMFTShyJ9SUZKLnKTe82M7kZG8DMdDtr6oUz4cPpdjHWvHevLHdcjYFARpf8c9n7QVZq3xWhdx83TvNC6",
  "key15": "3XX7G8gFGNr324Qnq4GL6JTjWdstDN2uFmiGLr9r6J4gPFXwfcbjSPBy45VcEGhB5vA7aX5MDLoZrQj9AtfqGHqB",
  "key16": "4XzQVny1o2RXPEKahQvatB4ME8ZBuw3xaKpYbdPm7ccKMwafeNjqfr3cfk1rKBKGw8wWEDg1C3Zza5kuUNFgYysU",
  "key17": "62uZ4ZVTaRWnwStw3qiFgbyXsgpF4m6msjdwe1FTJ7ry3AxyuykBsDpJsEPXTsatzwLBQxw25TewxZmxxwhAk5QX",
  "key18": "5XFbRavLE9Ejaz2txh54ztLaM9o4JjrrnmAKDyTcr9LovPh8vLQPYzfUeg1zjff39sGQmDTigYvKTLeH7EYHRifW",
  "key19": "2ekfSRoapWw6ocRoJEBRRDruk7BHb835762NcSX25GDtq8yXumFNLaoSsjN7265hLzmTTq3QMuu1WCgGEEcrcbp7",
  "key20": "4LTBiqifrfmcZ8dfbB8LxXGgTsdA8jg14996qfVqS8aXXXRomE6dJihDztbBbw8p3VXoUopc4nmE8JJrRuzsMebt",
  "key21": "4EGUG1nfaU5FurPhbuh8sLa8hQrGRu5t6Nh9K8jX3d691DAqTLRDSpjS2XZ7VyfbqsAxUNCJDi4BfFDfe7L5Gzua",
  "key22": "5yEvnkt7GRVx4C9xytN6p71DGQWmZv4BJueTufyk2Jv9uRoXiN4djL3fYARhCy4qDFhm17CuSPbT1g1p5MwZpEjN",
  "key23": "2wxKiXopK7udZuvZsLvUhbLvF2ttCejn9LaNRXjReNE617gLdXPEgfyXjfhh6AM5JNLsiSJWPHcEpgEb7hUbUtYE",
  "key24": "2m8N4Tn7moBpWwX4JabphszMgPvZASf3k2AB2aRgde4eLARfnFfqZsqxmBLgfW5nNSnjmZLHjKVT5QAsVwooyMb9",
  "key25": "62YDDRvdJBNYsmLfkYZSL8EyQwzVC3sHdd7Lfp3U24fyJ1czGf5MfsTa8vJmoPMhAhEBKE3xy6kv9xecbKC9cudd",
  "key26": "2e8TuQ4xS5HQyCRbvjH7v5XgLqWJLmy7ecyJi9y5wKm62SUVHPZwiyqipQiEomkbUL3eRT9VEJxzqVzzWg2AhCdT",
  "key27": "46obSjayuaCH1GRWBsP96adyAecTKJ2WnBs4r6hRMa8a3ACa4dPHYFBWqkpW7rBSXfv56sD5Ur2w5YBp4DHu1AgF",
  "key28": "3NiGsGq83FyEemFVBKgitkbjc5j2NQxQ4HhepYe9siA1gHYKciqF5TzAayGXb2Upx5xFjV56mG1FxY23PeFdiFof",
  "key29": "671zyF2UbqtZnRpaM83rMm8JjFrW6ERz9hb9SsDdNXQmQdCGtjdAPK28WgZCqXGcX2hWP3rW4caEBiGKtEXmTbvV",
  "key30": "4SiKH5xFUB9JWjcEexP7SSKiBzYiG9GqgRDWgeLvBnPQAPTrPKaX7ShigESEnQvkyFr8p49wjtittzp5J6jQeX22",
  "key31": "3Tv6S3u3HPGauREkoXP2eGcvi6hrGSq9ZoMGLJuVwnuqfk95PeGppUi7uj71abdDgG7QmPRS57cRZYWBHqZUT6AR",
  "key32": "5JPPA7VANoVrYDx5oryGdBq4VbWcC67ZD7sLeMizYLPPJ3qA67ntL7wizJSKfjKGPrNcLy67Gii6onke17JruYt9",
  "key33": "2YDFaWM1UmVPfipxVyv9pjdG2BZryBYzTZTQevmeB3g9wN54rNCK2a2RxY7kNW6wBUyHgSZzcx7zmfwTBmsoEKKZ",
  "key34": "2uLb4y4upQ7BGWoaaSq7BjH9U2BgXgfn8mzSsjkhjd97Cfk6QmV3r8P1ZbHjRSRQGEh62y1eirAYJMEjdzj3PDst",
  "key35": "5pKaMo5Sjmf46BmEgneLSqgWWbs8qwzrponY7r58Jre2fiaGtpD1VU3kbD4P5wWvtvwMRfQqjmLFBw8mNBZBaTZg",
  "key36": "5EhzPc55B7HuZAUAm9ho3PaGmUhLmB522BsCXfzvYHDKd299w3PbjHcanBL9qvLMx266ozffg9KoLKEMVuhunc68",
  "key37": "M8TcYXbmudntkZsw3PB5GJa9TMS6VZbPHxk5AjqzNZnUWM3Xj8b1QZqsYAMMqLTDBFWjuFssygZFUu2SoavBa4A",
  "key38": "ebNASszBJuFCs11GirJaamCyWiTRRp8wXBaPH9vMUJG5K2bDZzKK3rNSFQD3KWuqERd4xUVksL7fs24sk8CLh9Y",
  "key39": "3K9LvPiqTz7574m9aBQPsRND3F3Cnep3xmwrg6s5EjqvRYnW6HCqHucjKRtiV3fsdrciS8T5x4G6EtmCE6uQ9oob"
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
