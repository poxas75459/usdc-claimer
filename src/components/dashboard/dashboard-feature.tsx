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
    "2poJRkTrf1yezWnfU2MPeWSjueV2X5UiYQxxZ9jmZxESoNknn7KREh2CFPUaJ24cZ5DgyuBq51KLhAFWP1djKwxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HhcuC9fWkMW6AyG86AFoRFSKM47MGX7SSjYevyavitHqWjRGvXZ7YGz2ouRMMkoLNEaH3YEbKrfizt7GhJgRXm9",
  "key1": "496bB3WaUqiSFErEaPAPCvZTzkLJHLLq7WfBfWi4d6RovMmYPEaMSRpXzhyAUKcrawfbgxiifJkxZMbSpXd888uK",
  "key2": "5vctS7qBCp3T3NANbaJPaYAwPD1ZmjdxcVuGfoW7EfnDvUvBE1387CYpcTFbR2qEt2mfDMmkdRxq1sKokmX6waZk",
  "key3": "5qYAmYmiFf6gmLxoDpJCcuGno2Qa4UR5qi8X29TSs6wmsWLX9D9PNw5PFDJ1SsH3jrRc6asm3BNZ97to5HGP1fx2",
  "key4": "4vyHQrQnE8tahaqXrk6yMbjPdwtKvoT92MpK6C5BF9VNrNnKHduhXFBbhbTuQYRv4HC7zq3rKMnghQANPeXn4k54",
  "key5": "o22DR2UxZ6YDhU3mvMvcYs3qRMxetJ3gFBAxbVcoYiBPbJCjufVnZ5fbqmHwLNM2Qjxm4sjbSzyN7dwt5REyCJ4",
  "key6": "2S79NMpdJp32i6m6JFFgEHoWPU7yXhumcfDbUVWaMH4tVQwAdgQuRh69UwCq9tZFT5hSGYCvQUj9YykVyzMdbtpn",
  "key7": "68NZhrzUzd5u491px9M54HksxQkLxdV9bHRmhZ2uozTX6P2Cs392bwjhRLHeLr256Gf7WsYfrtLKVcoSoE1UKXF",
  "key8": "VGosQvBRaymmDBv1JN3hTk9cS6nGN1FYvsurLTD23bYNYCt5q9piQ4zu9sFC1wF4tt8JBnrACs7CJBgTX9J1jiX",
  "key9": "4d8BXmcnr3H4c3BYWqs9eWwXrpjAEYz5dyXcr5zUaRCFDadGhh7eVZU1HxcM2usWYw4zLaCzdBFnUxWSySmMvXaf",
  "key10": "28KkA5SkAEuKX8VjsFLKwg844Y6vayn3gbMR9sESbyFtxUo77rAfSGpopDs4jsdHUQhnHEwVTXoPngaDmFxg8btk",
  "key11": "5449LbBAmvSrT5LXfKeiz1MVkQQfwhUP3jHsV1NSYPopv4HGBfHmkFcKPsmBvCL7Te9tcbTTXUjGqBjZ2J9wdfMk",
  "key12": "KkosH3ZtrQq8pTUnMv8AQzaSLhkKKFXnYjVQZKTrFmZM4o64iP2WzrzMHmB9UdVzuopCq5WMNEn83NHd5RiXhc6",
  "key13": "4ipSCZL4p7S9NaAEvUtnzxBS762yAdKTSxEV368yZPe4X1WmT3e6GtXyJtZ5gPV6obkhkRPEGjtsqoKsTJCysaVx",
  "key14": "5MQwKZUDSrTV5UR8SFgpzH25Por1zcEvutnmaSvdwwCAoMqAk3v5q3agqSnoyNKysPGWvf2z8b5KBWqGF5XTHABj",
  "key15": "5KbPdewyCW2fMV1E4CDNZNjsFtYrCKTyjiL21pW6vn2gxJPBbjqJ22bSRoWDSQ2u5naL9T9Y7JQAQjajTECnMsY2",
  "key16": "3fL6ZLjyjLoTnjfNAeZZWYw7tsNw5PFDJsTbCaYmQq1ZsGuyzkxKYFwA3PgiyFUkhPyhfN2ucQH2jSNtxpWukwDS",
  "key17": "24uAsmN7WmyDdBA4iyQj2kULdnJk5UbCspvmi9WkKH7Ju8G9BsVbp3RC177ewWcHsC2c7L2ZZGbyxN43jjCghULu",
  "key18": "5Kwzb8ZhuVsExrwAhQn53n1ULAV3f7BjoCMfC1AWdT233fSVe93qvkjN61ehY87EPUS7NJrbWQrVbwMZ8JsDaCiG",
  "key19": "3rnL8dfsGipmhkU2t8VwKB4jUgaGn3AqvFuJTvBx2qvE34ALnYqL931ZTjoz2YmjGGeJDAMtRcuUvhyZM4U8bo9A",
  "key20": "xPofYMyWCcvWTYojF6yPA4bU61Ww7mZymP23NpSegHYRfySMf11eJCSxuhvH2qUKZ9q6x9MNDjYJwCY5UFnEmsm",
  "key21": "5hMtmPpfMY83dK4MUcZG3teox7hzPrGPKmjNu4rHLifSS1QPVKPoAefdrM5zMtprr37s6RfsLs55cRHftgYxhJ3V",
  "key22": "4dL4xoAWEPHHeH2AyYgdUou2B1DXMqk7YF4Q9n6D8mWEipz2HJm1MNjKSDHwSah96kuAeecbYqwrcE3ZYniLfM11",
  "key23": "4eafnGG9m3eMBsreKGj8aefkdeToC8zEHWxrbsAK6iyUt8qE5QZWTLX9QvLAVoe4tirngicGwVajg8vmwdh5seUT",
  "key24": "2cSkcbfJ1ht1SebWLJJcztjAEsLgsDDBJCvkHJWDUY8cvBTve4kmm8DkHXdT6C1VAfiEWSmw5Uc9bcgikE5JydA1",
  "key25": "8ZcHNW1aBKdoDiPFQgtnpqM1aXaJspsQKfQcmjUeTA5cJiigaQ8y7D4NxFwpyG47DJHGQuw78mXXUHTX9wx2d6q",
  "key26": "4qgYHqKQPFxaK1SDUvRob59oS61Li1CzCyKDVzQbL9ANK5NjrKj6uU4vmSF4sKEzzmFrUE9JGMS1jLA8nRaswpyW",
  "key27": "3gAXt2v5BTDDkjQ6Y4XDZHeVEELQbmGwyLtfyf8Augk8gD5LugPgNS19YMu1oUaFcD5NX4X81qKsbPEA7wSJbDth",
  "key28": "nYZtGi2RZ6z1JLY87bYV1jtp9P8bzzzLsztGMZUDaRdfSBvjXR1156PRQPbwZZE4g2xDs44BVFTC3jqwZ8fXjSH",
  "key29": "cVHA3M9vL2gMsV13TJmK8zGJza8KKHZg56E1EjVCU1qAiCuSpb79yzhdKrQqn1eaAePBd7B5sBiSMTtcmeHkGbQ",
  "key30": "JnucZjGbXHzByxjXjudpFzFjMGMujFHKFn4qLnB1oYeBA2qBqMNtsD9QjMhkTARL6x6azMRD5R1xYZLbJ9v5qZT",
  "key31": "52VY4kxiSrJh2TLuZfyecoJgjAKVwJHEL59Ms26XLj4PLQWPLNY88wBu5Ltf11ogE8SvRBGrGUzHr3pKmJVKPDaD",
  "key32": "635R3YqGW3NMnqa95y2XLTAgy1NdZu1JEvcKzfmL2kdBkvkhiBvNYiZ3jcwU1HMVbigfz6ScKtkjcpFbNXWVYBPT",
  "key33": "3YwMeMqc48ex6W1X46jqVfGhEL2XnuoZ9APisZYngRktkiR9bpPL7qVKjQWJArLJ8pVewCH8TN9hm5eKDWCG1zym"
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
