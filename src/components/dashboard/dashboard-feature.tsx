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
    "2JGSv1pciBPWqy39YJooazH578fWwKQbrhUphRL9BG2NpS6CqaVkrMM61xH3NbaSR2CmEKfxGYUqb5M52gWAcTL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DyeMRCeZPspZ7AroXgzTnApr4yvnpwjcdQUFzMYE7EcBfzxogyk5c4d8g2hpsPjLDEsG4DzV6S4HohNtxf2dGXN",
  "key1": "3SfHVT4WW7N5xa8D8q85aWBTBwaTPtJQiP18BCPUzMfNAZzQi1QevjkToRq1v3ZC6VtSrFuNhQkM6Dt89neWf2WM",
  "key2": "5f5mYE9SE6XiubmtTTXtiiS3queqbFSmJHTBUWtoVFpP1tFayqKguPmZrt91L53NLvMbHYEkGYtB3rTscy5TZ2wW",
  "key3": "5AMhPMECWUKx4LoR4UGuVbUkQVqBuJBJj4EyP8vn4XffsP2maVqzgfHXqDbX11MnqgrG6mfh9k9yEHVLSd6BULdv",
  "key4": "35MUYs5cJNGh7v8HKSnJYjuybzJhptvsRt3TqRBtcf2b8iuWtuKhnsPt8HQD9YrJERAiFpu4qVRgqyuGx8QWGj79",
  "key5": "3x85bhCNGuJgoDdeneTYiBCp76NvnZz81MgY7erQ5sdhRxXNXneimMvxt3jTRf8cgHUXGnwGCkuDy8RU42XVUyZX",
  "key6": "3WMVKL7FN4VVSJ8rw4bLJzQGsWSvmRhdWcc78GCXExQjPMFacSLL9AvZACo8NFhdmnLjG9STWcTHFKBr4wryquoy",
  "key7": "5DYGiSQbShUG9iTi85BJmAo3qSvvkLDiX23qY2ACPgCvzxzusdd2oDdS8otqdpfC6Wv7gS8SQbjvDzK2TVUM31vp",
  "key8": "3qLL7BRsWG8nAdRvN6JN8LbZFGsb3HusXah2XWmWTVe19Zt9JYQgwrkUZHwABN6c9qizXjH8UpksTB4xZgoEdoaq",
  "key9": "wfGY3HghegSUrr6Yf39TBTgCetXzeTmH8fLhSpxkqLMXfWbsUGUqMvy6KjzsceE2TVHSXcMwZNpT43tyqkf5wy2",
  "key10": "4AVH1KirPMJMpPLdgn878knydhq5tpisouzL9Y3fJA54wTbRjvBCgPjfP2vLfgTPtmAAPa3eTf7K6rXGh51J1ekT",
  "key11": "2CKvkzKTckKJAiQoKcW3G7c939frUzwHw8b2DiABFMi3twkuRs5sbu5WUns1H1wTNRcNVYm3fWQFLCp3MiZpF7j2",
  "key12": "4X9s18qSAdpYYSv5LfgC1ZyYrank7njGvNENhH1biyNmxyFKADFN4ZGbm65tGQBUnVdZYYm7Zeb7ViJa33vbnEV6",
  "key13": "5BBFpRMjjztKte1haxuuwLW3sgo6AiZE6UCAZBkjVYbiGmSMcSim9dHiu2k5gPGCg7WCR9m1wZDz3uK2kX7f4ECr",
  "key14": "3Kw1oryHJ17rH1m5Zy71jPEgoxpkAwrVDRReTyU4VQ7JayzsJK3Ex3vJwrSmgL3sSf9HKX7ETpwsKb8cnYLgKH1x",
  "key15": "5b5HSiS2Z5gtTDn37PViaZBCLD3SnSbEf4iScmfw2LrVTadEgY377tv1vPsi3QHWaHvfDiWgSBFQbaUDWMaZ7hHV",
  "key16": "4dXLbcaYiNDadzujPJ8wTCxzZLGh9yBAd2ztu3ESYwZSALVxbCTkFJN3u4YARRdPPQbr9RX5NCCooZC2CuWtZaVV",
  "key17": "3h4Zmrfsw7kxDZB4L3QJayEWQrAHiypota7ZB6fSBZE5TQDWryN6SFsMvQk4xHsM7mrqQhwm1BqLsfBNaCdWYdmV",
  "key18": "2R1HqUhCp7y5JiBgjhgPGEqcK4aT8kcTsNHFrwqYfESrUxvhqbdbmr7M47qXdkAcBjkfuixrXabCiwdCNqKjczH3",
  "key19": "4f4CWurkqeueApQrsi5hTMZUqw36XV3Cv9zt4nyWKQLSbXTN9fgNEGPRH6neozYBemSJKXQ9ZN8wjjNTjcKDrk1b",
  "key20": "4hbuNZ9grLxXumnv1T6juyxE8cgbstg4cNGVhG58ukZU7wxHbm7qGVXsUUv3viKTpeEEEb5Huomxm1L5V6GL2wVH",
  "key21": "3wcfz6oot3w4QDpJ79VR5zHcCwfvSzKXWbwkLq9KcN7TybcFr47jhVs26tArig5Qn4QvxASAHqZBrGDE3mNgtrBk",
  "key22": "49Lzy3RHaFaZCPdqUzzhBQbKukBmrcLoy5FH8RRcmiJ2jFhJFm28bSzV4XbjnLSnf3XMyLNqe2ZmXXGrkYREYom7",
  "key23": "5XEUoBr1LMKEBezNsXymvuMZvwTao7uznq7WHn1S74iAcgEJxrXUkVraNeacHiP7XPdC4tJ7YqP7BU7rPUVq3Vp5",
  "key24": "3Rgzu3yiwpjRWuzn5GD2hLCeq3BhhZrErBi6oxjdVKEZEBhjvhahMdFzoieHDG2Qme9vdNUrX7dwS4zahyZVHoCQ",
  "key25": "4MBdYXFSnBf1Fa7jBiwH4i7rBjqqgg6HRFhSgrVKHjk3mimMdPpDQzwyoxC3tv72dEawDr97CTwdPaGU2xEpzAZV",
  "key26": "4EKGLhE5qaUrgy8LoryT2Dqh5v77Kpk4hH4ZFtiLKj1cb7HcUjAobKf1sgxPmTpgg6K8sTb6GVCkdVSDEmoiECLL",
  "key27": "QFsBDhDPjpfWDjXPqRpWXTsadk8ijLE1XTez6NcC2waTKbbZcFP1jwpVvDZFXw3tdGu7dUVgbqY46QszowCrz3R",
  "key28": "5MM6epeF7GZX1E8vnZ73xyFhfRoDb1QGoPB4HmqX7zCSothSF88kv6T2BRTpNoU7cZCYYMiNGp1A1Dr7QFuXBh1F"
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
