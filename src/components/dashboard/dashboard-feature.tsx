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
    "4wgX1kQn5HJtN1iuZociVfMTDheia83ayu5yGBL6LosVZfGDFy4c7a7RZV5nJtDHXYiAi4UMzAeXDJqYTFpDX9or"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a87yRxzNxRP8JmVXPKf911ejJL8x9vaJtiDGLjdmnYUyZMsmBHnikApgUBc3qekr5QVij2Pqs9umwwtXL7YGp4L",
  "key1": "3ghj2Dtbv3FPtxqSsfQbjNiZ1PM3E8FaYeaxhup3G8KAJrGpEcK6hsCFcimK2hsw13EXTH6nC9HbN9Hp84PKKC7P",
  "key2": "3MxfCTPy3P4FdwjTUjhboBhKiDNZbXWAL7LpetcxSD74XgKKqWZFjtWsiA3kc2v3xxTEUySUftMvbZkLwwUvqrXj",
  "key3": "sjTDuxvrAjA7QjCzDCxLmhHdL1p2exB2tjsY3YuyeH6whwKmY5mfrAVry7ue1XMCjbDojkWRqAWrUPvHgQAFoNH",
  "key4": "2HpmUngZQDJZAHWnjtPsoYyqiJSixXtpTZhbhmY3HDyCriX1rwqQBT5qk8a6KrbgtUJNvom67jgKWJ7r77ChTSi",
  "key5": "25J2uT6Pv6xJDLsXkkw6TiURQCG74DmiM3y3C5rQWBk8Qu7hRupeiYxtm112ygbiQcHER9fWgpiXW4mbjtAHnG5Z",
  "key6": "REQTgJwSiPTSHcioPTjSsdMjpiExpTFonB2qEM3Y37CERyw6su8Hw3gmbHothd6eg42DMfUJUK24nqF3A1uKivg",
  "key7": "3mdaWBVraK2U5p4mjavQqyy2BPCRR6G5NkvEHuX3pG8wgNraL2KCJnncycoRpuG6tYEbmgw31WaRfk411QuTtBbh",
  "key8": "4eU1D2FaKag7qRUWMSAZmE1M2sTFkTfjV9X2eWUHMpbzpMFUjz17oxRLT76KrscLQFkWMEzfQboYatEFoJWQyGNK",
  "key9": "5cZ5LGYsDCtHh5Y8s9m5bzu9GEETD1w7khBYsPkdCYhDVqoyK2dZy9QdLmt5StFVUV4VhZYSVfyb9ze6ApJRgZp4",
  "key10": "4Noqm6g3qhoiGjwz6goQmAu64iNkGxiemfHFt1D6PfXJs7N53tBQYz5CpAQBCqK92aXj2558QJT5dihRWAa1NmZ6",
  "key11": "2JuLYfWna3y7qrKKgurHk1PPa2uQxT47mrUWKJuRYvYdCdQBNiTbTjnmeg5QCoF6nrUmDpye6R2g2pi6W22ivyj6",
  "key12": "5bLEZdN2Jq6GF5PcrFU9byCsCwJPZckp3j5iZhKBthkpvskNqbT9YxS76USfGx7crxP8AenTonuwwwk5JVo4MkAK",
  "key13": "DP6pqnoHM8ShjKvJfhZMQH5qJV9cjuhA25QL8As3FGiQFEGBKafKrztzT68RGcSFZ4YiW36Kwe1weo2K46vWcJn",
  "key14": "4aKv7opug5FARbfHstQwjDMVg8QdUgxSwvNjAxq7upjSRHdwhmSauD42WTUkHJUYcDSnymGRTEKXQMX9Bm35FmBB",
  "key15": "QHpYMyjYz4KyRW4LmsTaixZz1QNN298qyMQynFDaDtotydiazRaun8Mm6FaVFyB5agKiahQVqCbcQ8txQWmQXzs",
  "key16": "5tTEYB5M7MoDJGqHGqiuNvdGYG8kcJ5R6wPMoVyngD8Mh5iaqbijXbT6A3fNqHXYm665uxyHuU6t57guutfXpgqp",
  "key17": "5syHsM7NcSgkB61VLTLh1tMMLCAsEX27txAzietNdSGDoYzh5yjB2d9cuSLLppJwPYE29gqg6MnpyT4VRm9FsCvV",
  "key18": "2Mbr3VMn4wkv54JGdyR1aZhEwJ8tq4dr9YPXrCWUZ87HxNPvkgRApmgPEC1kWnjfuwpyTaUTWBEuiVraRJK1qkyJ",
  "key19": "2f5J3rBwufDfQNgEAyMtdgUSChDjRQriNvjS6EsTcETehv5RcPpvGys2ceu4GSJL5MQnKVMqrNpkr73TFN58b4Ur",
  "key20": "3jsfHsP5bpwteMXPkuoW6J6vf3LRSnUhX2avuLEnSipyGf59YJ9AZBxTM2NiT2PJYFCZzKSctUg7eP9jZZL9ciWX",
  "key21": "3chETXXbbxYsFFmhykmV3fBZYBBuewthj3uLJarmndoA1oLjseJQduiefehzY2NFaL18TyAUntSQhxfiJVNZtDwo",
  "key22": "66Tny7aXnnrR6xrVpF44rnTzTdjpk14HjSgrjnNBxV9zFkWpL29dnatTVK9dSjpe3SVX9X7avd6VDT4vZ2TXng7L",
  "key23": "4Lke4cgQPCqvDuSHrkrvt1Q7MAqwdCx45UnJfHVMfYwDrSqbndE6mWvenWcvAEcn2UnwSYaWX719fC7TPqvYRenj",
  "key24": "4LLJveYGKeQdyqTb6r5LiGpDySeaTUa2pfC5V1qHxF1oHrvZ9FYfCd6cR9ffH8vwvh5Fw9hGPEWn1udD538pCz9n",
  "key25": "5a3mfmdRWfpfdggQYGgc7N5gGEWN6BPTtNRDrFtxbr2QT3NbJUPEgfzTE9mGGYp2b5HLgWWmv4m3SdkWDTMchp4f",
  "key26": "azc4Kmn9QpHJ8PBXGJeEQGcfB3EAb1wZaG5DW1ymyTRP9qURe92s3MwtaSmymDgbWtjhZZqQLxbBmpTNsxLSADs",
  "key27": "5xWXjUr8i1rnehUD6SZRgrBMQYCdSBhXo6w6Yfgx6JTGN3j7P7Uii4CQzBGtrVeDSMzbtYCpRfDfjyt7Ke1RAAQW",
  "key28": "TtjGdFc5ZDKnB3z8phxvbgNcphAhzuqhkceXWrATZyzNvZG1VxJe9bUQmJNWo7PuDNStEwfAXeFD6gPtpC96A9N",
  "key29": "THbimcC2Z3BQ92Neu3HYkgGMhj1xctkasBwqznjthf3NPBQXkeG56BC9bo6t2S2guZR9X9FwwSjWSsnk7S2nGUK",
  "key30": "4DzogfU8HSQvHYp3zrKTXqexYD8oX5XVha3fPf3kCLf4w7mk7Jgooa8pfx1eUCd1mGCe9iyNUVd3zePP5pCdQdmu"
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
