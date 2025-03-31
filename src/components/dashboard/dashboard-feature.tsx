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
    "2NNuHQjpzVWwXxdSkEk78TFZy2zCKL1Ru9rQUv7BWrkT2ZH6DrAhu6GsCVK2ZqpWT93wGLGPjnMYtSREinGCdZkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dLme2VpAJosVNipdgn6YYooVhig9UZAMA5Sfud5KQ5HiZRUYuDqUBWSzXvPGz9GP9o4GGGQBbNT9ttihVNK489J",
  "key1": "5EBjVYFARoVwQTVeRoXAeaeoRr2EAXxmQF2ecw45YwAU3y7XCuMfspKDzsFHkkm7jbdW7PhMMryFoV3Jin39CzH",
  "key2": "mRUNDjQBbYAMKcuH3pbnGYigKNnPGYNWc59WbrEZBdqGDJLm2qd7KtgqTPc4q9sUcDqr6p8YQCfvwKDCpmWPqhy",
  "key3": "5yUnda59ejNfcscvcZXUqZTA3w8yvioRa6rCP6faHXqRGABB8idjYM6RmvoGZFPxmA4Yo6JhBUwUBxPwrpBgbzkz",
  "key4": "3emzN2dYgq2FGZQFDYnp3BAN1pqEmkDHGuPQoig7XfbGWGvs9RvUzVaHePDkXqQEgefDvLzYSQHNyTDmYFLMuFNq",
  "key5": "64uvoNAKM7rqyfAvUFUmC4GJVKNLwPYNfdpXyYtQ9FBAPYyb49mVREDzCADpThTGmvQcddhGEbcMV8SPrkGvJDA1",
  "key6": "gW2cpbvQ1QTbH4nbD71MvSWYFs2dLtKVWvVh1iCqHj4XS2PKVhqdgvXkiCw9eri5MwFrD5ZxDA1bHggEB4wyxE7",
  "key7": "3A1PjqgsXowXmqt3deYWRr56e4MY9Yj42ERRJyJ8dt2FsNQVLaatjbjR3A6P7yzCru8mATdHGYX9F7Y9E5dDCcwS",
  "key8": "26EVh7hTo9EKDiE6bD8VNSQaLq3m3nUJA5KQ8MqdXyBdE2GzmWKwHDFeEZFUaCjnPuU595upgDk8EKiRHVi2SwwB",
  "key9": "U1L55jsiNMrSifa6ndYeEZMTfRxnRfN2boFUWVejtUE1WzsKeS4HmfzapLwwm6AGCws4rTWKQq33u2gVYdG2bWw",
  "key10": "2Dh8AmMiQpTN42NFpYgjgDHCrT5ZLLzNrUd5DW12GNTtBmWwkKhHYihcBcGF4SzNdF1nHDEMdvghT6g955zpgtNx",
  "key11": "YwN3sAHvmu9UNEJEH3pBmfCjVtqHwiFHn5NRxMBWnbt7QKzLFsvaJWxiJAcbm7DzmEQY1qiZrewXuPeyD2TSjnY",
  "key12": "MvY6aEaMJnbqCc8jN52o29Yz8ZghFdAsMGbJjS2SiaBu7P4aF83r5762zEGTdU9JiMGUtxMvxjYmRuhjXL1HXrx",
  "key13": "2t6uay1t42Axntyy5r47u928EVNYwfkyk8XaYo3eb2EjwCRaf9ACvLT8DCMGgfFLqdf8b2wj3veysg9sG6oUp4og",
  "key14": "6UFeAZFre3u7Un63VtmFPVqUNDNqPuhMpTDdZGw9cCue4QSjjCakVuW5oRhQJhPecTnn3rifHo63e9eC7eB7asR",
  "key15": "588LUx67mGbAWK5JF7iY8yoficy8KAmb4DGAU5cTtbMjqEoHsA4xCEHTWwN9H51TAH9VXAVgGRREj7kzeHaAEZAd",
  "key16": "Cvomq75pwMufxbwofjabHFGUhkk82jwXFbEEW9Lfuvovq6PXCsTPyc7tpSPBqYhLhqDfhX816Aen46sGquYkp8q",
  "key17": "4HkK31F9fVR4dNdwJJPXRduwiibv2ZJxPBeyNbo7CEvScN8J72KaqcfQ2LXCjXkNQsNJm1mgfVYdiZm5AKeVSTk",
  "key18": "2mP8Ss71nveViFNcV9F9habCVPip7KRffpFka9u22WS9V4VAEDX8UTkpwCqAS8HcT1HT3CFUZJA995X3ae2ipScZ",
  "key19": "4JsGr25obvSP5BAMPhMnZcUHhnTD6brn7b6MBZgzPzb2JRSSM9bAAPT5gCC2nvGySm6aXvXQNot6C3mrowU7SUPm",
  "key20": "2ht8pz7BVYurafuFp9STaHKbkKrMNzrXmLCmKBWgL21QoULkapYzoT6QpQc3hWjeBc1B1GZDYb19NGX9u7VNfJyk",
  "key21": "2fbJEGaHLM5bh1gGC5ybT17PARSG2q46oRun98hsxZ5D9ahb24dPjUV36xrWv4XjF1BqDXpk8aNmCjdwjErkeVvi",
  "key22": "L2BdTBZ4XtXmqgFN3BYN6vWkGD9ZyUyGgjNKKj8AjfX6WV7iNwhefhjhujRUhW3MTeVgeh9Dp9sLaZfJjUnu8r7",
  "key23": "27cFJgPZLtGzLivMwidqJSCyt6LmqJEBJwhLg82f2KCxZqRNgeBa21CcbiGwUUTD3uyUMZ2ENpZpWmt2diFzZqEy",
  "key24": "3nobU5C9HZTQX5J47JrhQfaWc9A2U61L1zKy9DFNWuCz2g4p1pFFbpxcfvyFwChDVf8SKhCrbNmv7etuB3gr8w65",
  "key25": "5pqw4iUQj3J5Q9gNFc68PmpaQxieku1PJqua6LcXjan85PTbTNoFX7i2bdrm8RDYWYHeNVeuvC2skqG2XSLNWrMb",
  "key26": "2Qo4nYJfUgMKznVRib8UTQK2Es9X1sWfTtBkjaFoQVhBW68TLBRQTKGxBdDxWFyVa23bk6WxgrqhY58Ka2PSUiks",
  "key27": "2qWceYXatKbFkaDQhiATiyK7Yg1NYhH6C1SbBpJQ6kfWsd8oYqvwMRG13SEwDQfhBKohdYJbYBRAj8qktRUFZYxC",
  "key28": "4j46FZa5oiHiHFKj8AQ6u62QtNUdFHPiR6LFvuNVSuK7GMvwoTjVcVhFq21JY9SiFqvM5gcQPd23WFsQJLcPxwDq",
  "key29": "4uNPK8fUnf6ZKK1BtYuKm4JgmTx8AmgCcwaykgFCarrjsyyr6TPqi6CpQpjkSzvFWn4PSfNkmuLxACmMYbtzcDjv",
  "key30": "2t81C2MT99871x36qH3Eb93t53LU7nnE5kuGWDNCN1iLCJPu3LMTJuR2jcKeJRxt2KLBM9B6arqrVRKmxJRRBGut",
  "key31": "Sj32HREXpkjXezrzo71fsHsCiu7N2AwR7pWtEnMGjtKhfbVMa1jdamV285TXxPbHRZ17nEpm4bm2BGEcyTLU2nh",
  "key32": "3XaE9Uj5dC619qcEBEsDgqExXqbLBTo1VAFDFK7M1DHGW6iBKoSHMjvUGDdLe3CgdtiWRANEo3cpLRHnjhAUhYAK",
  "key33": "3xGnbP5V1PpUgNTgLnzbJmimjT2k1iodqZYFqedGcMT38Xj7MEyvwuvZUZtL2QfNRCNDJJ6ABQNPnVYV9UydmKAp",
  "key34": "4Ds82xuJkFySN1V1yhdUTqjSVCTGW4wHkm28TZCkNQL77EYxTS2N3E1EBnLUHbx5F8QfrszACQPbfosDrNTCKmQk",
  "key35": "3xEicHGN7HECGLdenTSrtvomeEMePP71ZLRSFbDt72wdwiWfLUrtXH4Xbwy4tAPgTTLFeMQQp1s3oywJZyJGJmCY",
  "key36": "3K6isWbqoSEvSEXWnQjqZsQi2bALttbvGCxHzGnvFgxBAVxiJEmnkwyyhB7WDdWkHvDZH6bcHegJHM8UFjJzvxN2",
  "key37": "5iz2AKEYnp9AaaTZEzi8WjY3NhivFxqUymzuyEDEMp6F2FpvfaEB7Nhg8odQHw1cs87PzSGnB351Q8kEoAH3aJQp",
  "key38": "52uonNTFrkEYQQmPVJ2S4JAMhRckoVEgPZfJ1e13n5rpSMMcmTnxXyUAw8wuBoTgQYcMet7TXfLNAsoR846vECn1",
  "key39": "2pqZ8ZJ9YYDmDe6v9DFByBu1NhWF85N5A95wtdwKuortg685cQBXJF3KP9ZkDJYj6W797CCga4gu4j5Mwp8Qnnk1",
  "key40": "4uQ9U8bj6mTwMgNWZr5HYMM3Vu2Ne8Eq4ywWQmtp8cS2ioorfNMtm5aMCcFVUaGBGMfSkZJa5iUZHBbwUjk2Av48"
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
