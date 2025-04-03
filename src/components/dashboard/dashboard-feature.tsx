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
    "4XsfscbHFTQXV4BRWsjkJz5z1Kx5B6GUHSwW6Sdmj8V6fZD5pST7Xmad6pBa9j9vV1xqQeLdVMiUMM73ZBDsMGu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eu45jESw4yuUwW2HbxLGFuKdoq8nq4mNfsxThSEwB57h4rrQRgEtcgYnJtKXNxEqvxyaGZAjtZujeJzxicFhKjE",
  "key1": "5iYfAkkfWYkxPCRNmLiR8XF7MBquUdLc3T7YZGHmekC5vqjopFe1LKaj6Mch9BkaAKkPb8ZGkGM1LExBbF4g1vRf",
  "key2": "2oeDAuVfpELvpm8z8xx7wySHL4QUL9xAciTHo8VyDozdRVw5CsdDK8q4TQ69g2kpV8Ptz1wuEAkKPv12qSLBPvpf",
  "key3": "25GKTbUjkABLmrGhpRMtJyw4sd83xupbDKwu3299DfMwJffWFJ2Jj2NKFPFNUBctq8KJqq2SugzSomx7bdnrVF8c",
  "key4": "2rx7ujnM9xpayLLQxbLuNV1xVXrUpMdEtAFQPwtgWohroeSXQYWjFAaS76U1Mr5P3Wa9r4SeQ8UM8kZ8CfXDiGXM",
  "key5": "411NUxR4ELEFmp7USkUmRuKvseYoqy4Q4eHDbyE9Ro3UUTqkWj72aLPYmZrpodakDT5NtUTFja4f4prqPxMuR59e",
  "key6": "2ChFyeRWokbqtBkMchq41Cnpn6ypiFwKV8BemnPS2JvxsxubEtxGA6iDPU9VhoAGD1axJCBf7fACM9vf9fRjfvbZ",
  "key7": "fLynC6hTwNbUjMQ1SmmP2sWRhLivQgGqxdLE1QWGkWGT7pznG19WBvwKrrPrFk7wtZq2foH1ZNmMWvFSjXqu9kv",
  "key8": "3qAWoM7zNHwDKA8AcevKG2L6A3y3zS9TZjyraRfmofaf1Nv3PmHisVBUeYKntQQ2n2afHoAnjEr2ZUn6XyLQMann",
  "key9": "2GjBSXg1FUNSQtXU56HRP7UurpbZQLqM6MGZxcYVbTihPJAxL2QbHw8HEeJ1nvDqoZaZPrBuZog7KwwH97jB2L6u",
  "key10": "3a3LQZKWapPjkJqsuSS8LGGJMmqJMZ1VCA63gkrdyscXHtm4dA4YJJE8ikxqkot28xr7D4cZCJrtojEjGVNfxwXq",
  "key11": "2yfUUwTnbpnoa4a2JV6CrpkKZEPTi3jvAbp35jwKdanRqKHGmG47HScRSkm7CMZjuZBBZqxE5r6Leomc67WmF7w7",
  "key12": "3hTcxNZAgEC2drDG9QVgavqMXZQxu4o4zxkAfVz5fNQvBifNxVb5XGu5AsA2Ui33D8hNhBRXPsB1HT3jN8h9Yr46",
  "key13": "4Pa7hQopSry28M6jme5cYcL8Bb9jaQHNFneJ5YorEaC3askGEqtuMTQ3LmQm68466q6qzt5bhiXuf7jnGKAfh746",
  "key14": "nM4EwARRq8zpVWaiuFn9iaD4u2nepgfCQ3vu48CfSnAiMwRwjSYKzy5GoNFfvmhdLRmETHfbncK55868dfqe3DA",
  "key15": "2JDzoa5UdKqpcXqXUHDptVXUN4XjSnnKCGMxTGykR8EqWvopt5WPSAbHCDSAwqupyiTMAKWE2FFMXpEUC8R4KSYj",
  "key16": "4ZCtezkpK1KV8zsCLCM3UrgaCBD5infoB7rpf1vLQ1dEFJ71i7XEbF4hTwAYXHn5xbY1hdZz9drzuL9gskWHWZr2",
  "key17": "2cqJk97GDYYhCuPPJ7XrjosKcH3xe11UtUwDoY8qbMqg4ePqftzLV4uBcjHzB5WGCk6juPQAQa3XcsKXnPFpM4Ky",
  "key18": "VXJVLxqiXnYC2Jza4LMH9XwrC7ePRGaoZuLUbnXG1nGWgJtGQExzaieTraigfRLZszDam8Eb3kXHQJdTr1P85Rs",
  "key19": "8GF7qBnaCJe4YdDsDVRQ2Z4BoY8xdTXoLA1rfD38vbrPcrrZb7XZAXpYwMaKGVrQRyFAfFgJvRzzTJhBmwTgm55",
  "key20": "23Bj6sdNmcBnNt2byBcT3FSKAPtkgowHR4ha2HGarqzbKzhBWEmBt3mdkweEzh6hC9NHtyLDrvWTgouPTVLRSjuc",
  "key21": "G8GBH6m4hCShSRqk3NXGeeSaMmiFsNESKMWbKXgjTjo5mfLsiMnm4BQ7BhRkA1vvU3qAmoqLEKuVQu6HkH4xWPb",
  "key22": "3LfCvw65C3rKD8pWeZYKP9aCFHm8PQUwPJ4fYj6aueU9R2Hr5dqGo3tRRmdgW9JWMnnuWiDC8kYeCbt7k7oUaZhD",
  "key23": "5WV3MrhgmwxJriZtN1kSbPDd5D7v2gLcLJZTNY5Vt39bGcALAxktHDfGRqnRTa2JAUyxarMkdFnXpvC7prKKVP7f",
  "key24": "3kL8XmXzczXwCA1ppB8mGurN88i7hzoAQL7bSHxYcKQdxZx2DCmVymfADDaPxGuJdLFn32bwDjdWUg4q8UTPG9mG",
  "key25": "4tXw3s6eyZP1AvfQ9S34pFeUjqmSKbn3faNBzNm8zKkzbtmkHsUwfzmTMnHrHJyDrYRDTW5EmDBJEuRWNi6Fth4q",
  "key26": "CEGKJieN3XJhd8goUEQnUxfP8rywPE3vPfMd4BrEKkdRDeB9y7E7GX1vusR9odYJ49yxWwqjr95MRzyrQNpzN5J",
  "key27": "3wCHqUFEDyVbFPgMdTaaanKBMqwSRrVqqsijd3G1PcU66Wntuq7uu2PUGQ4rU1mHE5D2yghjzdC8QXzRJHxQaz7C",
  "key28": "5nnSFeNRJ9nxekoe4mDk2tteGjpDNbu49Pfrgb5eRy4mkSCJVCFif2cHY3ELpmeMiKNkiLzY73287qrvDVGHSdBC",
  "key29": "mcd4CJjSVSGuesbgvfP2zv4bS6rHdEAh39UKc2AypSbhCbQm7ZAoFChidKYFSXD7oLpuXXxqCoDTzEvzUm5yjSb",
  "key30": "4r1aeq8mSgFftxMQvJoe5HEoVYXa5hbBjd43kmgMS1aSJrEKGQhf23eKct4Dy9vGX7d5HtqsN8rDwsZW3vTwUt7h",
  "key31": "5crDxzjb5ZycLrDYYaa3GZoUDBqVQQmdJ2XvBhwRcJ8ATXpqhqoja73vNfFe1YuaEYXg2j5QSMWs2w8aSRSaWSLj",
  "key32": "zEFfHR6uu64YMLQckPB1Dbc8yr2LEgewSRxQQKgpSrSVPNuvtfykgg9BdrKAP4Rafp6JcZVhumK44CMhgh7zjeq",
  "key33": "48wWVfw7MfdfDrsKEDVMkH8PtJoiZroU5KmjxYXdpaU6bYqMiHwJ3Bf3sykpUq2fthjbCjRKKbZdUsD5H7iv9f9m",
  "key34": "piJRYcv3jR4TGy4BQhTGvmY9GFmFmJYDq8LXTFF7pUi4YN7WUTuaRpvFQqUnhGATLKYJwruK5enVRTfJiRh9vK3",
  "key35": "Ft3Tet95xbek4D1ZbKA6r3vkGyKcUpX8kGmv9bne95KvtLuexv8Xkeo12X9zxmij13c8QyQy1WcFUH8r5hPCXU4",
  "key36": "3nmcCQsiZmghF2xdUjVd6QJ3q8wr7dtw9KPt4pcWoMHrBsMMpU4CPbv2xVHjkgMBoUtJrpbUAJJoGkhLSqNi8srW",
  "key37": "4pQ1uEdvdwEvXAGcAz5mo3UdPkVJs2RrtqnTvvtwSekyePJC2EDRWKAfwWYcdWG2WhjcuLZcQigrFVU1NSmtqLME",
  "key38": "2eK3eLnCa8dU2HvawQmScdSDpsm31AN4bbnoKgb28ZCxfGkdiMduUcnDm4jKTg5naQNBxGKYk9CSYq3HJoxh3HkN",
  "key39": "4XK5shnz6zd6ouUEqNxfses4xovcBzbUoxYYnBbvmb9ALqvpE5dGKhot9QbgeBsQF6k3mH5NCn5XSsAKBZv5WRWS",
  "key40": "5Lh8vrQGkY5rk3c6CnNzwJc44gpjTYx5E8Ep26NtNddo9pz4WKuUWXXZJA2FFdJg96e2pgFfLfh4aDQyhgbcpNeY"
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
