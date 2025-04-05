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
    "36FXY1FXGhfzq1tBoFZtioz5CDrEKgMYYUNP9h1eXpkezVZY9zZZUEp654d9dY5rXFfut7uSNCt4PfzN9cn2V9Vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P5UZwMv2aKLgCso6Feq56NUYV5qE8uQLqTEJoiR5Fwe1GvD4eHmF6PKQCFmAvJr652UsfVawNngxL1HzYeLs83E",
  "key1": "2SL8zaX3FCaaKXyDnMiRB85oSF1XY8sgri5wteWSzSjnKeWPvTmnnnkYFJTs7Bhd51ywbfK3thkgyR5TGucu7i7Y",
  "key2": "2KTEQggTewrunvU7imrSMrM8XbNkwhtDrLTcwFRU3CigAHoq5EPzuewabiRyAtESuHQhBnXVafn74bjHNxHbB28i",
  "key3": "4F4PXtxxWFJK5C3xS3g6DpSTx7iwSK3jF8pRaJwsonMicacXHbVjzbTYYr49DppveKrmHQuJ5v9gn61TbyxCmsS4",
  "key4": "5Ze2DctCaZ4E6uf3o96k7QCEoEB1JDVphuXWb7sL4hy626jQjFR38Y5sAWE2PeN5rEVLDoJfz3V7obrxpy98DjbD",
  "key5": "49fLbLg4FsDu2XQ5PNv6g4e7MqTD9Dq4dktV5gvWprVHagZy2FQqzrW13epLrsfbUy328FvhtU93L626ZwZ6gHak",
  "key6": "42vvkqannUK8iZYqNW9rRk6E8x96qfFKQ8m2j9LvD3prvqVa4xnWDBtWgpWgZRH6sTWnzGv8DhjA3RdAwpy7gm2s",
  "key7": "tdCF96t2dfFS8VURNx3wgq7LHTTq9oN8v8QLGc289zM3oZmxFTDiHWaxjEx5QYuRPc5d7GKeA6nf3D5VHcTSrU1",
  "key8": "2t23vxo2XHaxT8N9ATPWEZyF73kdr7StWyAK96vhJQ4EBMhVrwKNNp43LXcahkyYHcATwwXgFB1djK7wKFwdtdXG",
  "key9": "5q8axGPV1Hfe3FjVP8BCKrBFjkgJ6oYJ13G8kbEJEri12qeshXGZuo6fCsdKYPK7ohYyqJjgYToJeH5TrJJVmNvh",
  "key10": "2M2YjsaVwoZfKsGGfxbcvx4P6iznShjySscgomHnS8PM2vaGLab7uRSigtirG7yWwR7gdZRXP3Vy4ry8DFnTFPr4",
  "key11": "25vtPuF6tXU64m56untEGSVreErBUHVeb5ekpf5nQ24EuRGkicWS9U6cQGSgcZjR9o43zjTgyeHq6d2d3kbAkeED",
  "key12": "2D6UCifg9o37ghNxp97h57tSL9Rxh61ARoJnob1XUN9P3UYSbWVmm2y3jGbC2sdbAtyuRNwgyK2nxHHYqCAwhk72",
  "key13": "3qtnc6h7YYa518GN2FnnD7qBH6aRrg6UCwvRzAno5V77Xac3rChSNVsY2MC6cMJEWgAp8Wtmrmo59bn5gXAQhxcY",
  "key14": "2sBG8HoiCazEWnDe7YCA1LHxsQvNEZ6166vN6cZ5oZ23ewjY3yFKTywKfBJn9sb5Ds23xPBGbVCmd3yyhHDEeJcL",
  "key15": "2h7eocJkGyy3px8fprERs3SyJoLoQbnFs78GKVpR3fmbdDwCBuTWAH2rJFujgAYkU9jbt8qjfwUrMer41BGTPMCC",
  "key16": "qEY1RV8zqpBYiQv5FjLyjS72gCB9bmwwRUA2C7NYwbRECFVZsA8iry6DzMEnPWd4VcKoJVMQWmBVWGmbBHJz1Y7",
  "key17": "2gCUdbLgdB5nXSfTShu1vVsAFCc9JnBSskLPRtfbvL1YQ4UEVhtsFdRvkVkfNQZaHsDwyV7cQRhkzd44iD5zGX3P",
  "key18": "4zE48vPcGox5BjXbHGAygWcFtpm7pyc5dtZR7yDynba7G6ZEbdNhFLRD9ouJCn9hMR22D3jSXDoVXxhLmYRqRhR5",
  "key19": "T7fKCyQco1uNvdHSrnCBrEaXypRZq37RNqVHGbdCVhe9W56veTkTnb8M1fWSapYq5HxXpxqdZaJCu8Ss2Kfxdy1",
  "key20": "653yVmS8W86iPUCV8XbMrw2pudJtW91tmyoeCNCc9AXU1wBrVMJsJnoe1enFb8c3C1NX34iisbD1yXkUqTd6KkYm",
  "key21": "2XUyp829453pZ8seTE1zCKkkHYV2nFyDj96585WrvDVnUBBg71Ke5drQPQnYAXxERSm2K1nCU7amg6UN6BG9svSE",
  "key22": "4b68e3wiwcaAceTbWpEZQEP2euwu5dnCumgBmnYUoPLNmGf9EqbJLLRhmyHFoBFnLdNDNXdBHVkdVcKKTyCD4tTv",
  "key23": "3eK6VA9swTZFVMBqnw6B4kw1MXNSweBRXZiyHRVUFQsbxPPa9snDkwksHee1aFnZZJf2roitn9B6vWQUADagc3uP",
  "key24": "66dmiKMmC6ZRGhgYSJQtPW3mzKHnYDFBDRksT3YjQHF3mtPy5a64dGUnrAFbK4RY8CoD6Lkqvhe8Zm9xYAZ8ZxqE",
  "key25": "21j4RwmtrsdJCYPdjkkMKkCF1rSdpdfRrZQqbwhFYbuNXbHZ4QHVgyTNUWqTfeDLh5trzmxkV5uXfqunXJiXxF5V",
  "key26": "5Bgf2jQjSqNikjcKTd6c8w6mKcT6u2YR6Jec7hKqM7WusPFVajxRSpPxSvKvQhSpJELr6nchvXUHSjofDFV5NXTE",
  "key27": "53rgZnGS434PdqTkJyEUMMwvsLdNYbbVkDTvRQDmdH8Es88cqZUqswVFvziqaV9x3mVyn3y38ZymewcxJzPpEnoX",
  "key28": "4CQM9vurreb7hWT9M18uL8mime8vWZ7o63U9pGe31cHuBuUJoXwGCVmRhgCg8pbiVvmUV64e3ZEfnX42iMeYVQ22",
  "key29": "NTvRz3CYHRE7UeoEM9fEiprgSEQaAxDjX5gRGFz8rTLPvg4qRDgmNhsfAuBV7aRgGfZkDLkt5MLV6tqPLxQzMSY",
  "key30": "QefWgGjsGAKR2W6bawiMHj6JHU3Y71rFuFpnciDucYk9zVk1oXaiP11YhBCweEUu2vQnypkdYHuHPMj3WatXtuM",
  "key31": "4gXsVdVqzeVW4LLSwEn9Cxmt6rfBMn7E94GYfbp1fXMDhH4iN3nXLFokZgPXnuhojaEedMvm7VETvjhpehgCGhjb",
  "key32": "5W6k4JNSMqT8LWwC5DYZg5j2LaF5RwcTNnmtGMCiB7NBY6mpVQWsBgWdusnH8tHZqFLuX9xq7Eurf3MPecgqU9PG",
  "key33": "4owuiv43qZPjhTHjsYo35FtzHBUBr5mC5eMPYSCY12Dnrq6oA7iGbdFzNUAjoxTjuTbyWvL1rMonzAyWCiSL2121",
  "key34": "3A5mduoNg5h6zEX51gqEKv7NBjnYPb9SdyKa15Akxn5SZASnT7t74PjmbtiDz5krUDMyHB8ML8y3CqmUgPaj178N",
  "key35": "4XdUnVuXsjCBELYhxRXzbgSEx931LYbedbxDXV8k3yTtrdx92vXZGVDcoL8Drd89m9miZUGwzmD3dhFbymidASmx",
  "key36": "3BnuMZge4tYUXESBc5NbjJqu1YqekEuVdQpXNNP1qdcbzntyHK8LBddkbh9bBftAQSKqkAnE62qNUdfxeshbUfud",
  "key37": "MiG17YRJsUtXdByDeAxQmuDFhUnu7mMsVLx3wqRR1cUBWKEiH7Y7iJPAyRiFhEYB1Wvn91ia5p3a8GVCUJ6GRta",
  "key38": "2Yb5pUFdvy5bVTmJgoASBz4JTWphXwzCQGdRvqdUFkU5XLvhwgsk3HBu6pEiXbBGJdNysxtK5bpg7DHvRUCXgwC7",
  "key39": "9qHS85gHzWubgZ2EZWzHCtWWozguzdyDPfK4F4SD44coExjuipC8P5UFRRXCwde18KAp96CxWNmjTK4E3pzUxGC",
  "key40": "QnfTF8NQWpdSJQdeoFpNshvqD7mGGj5smA8PzxoQfE5znPjWKDYTmo7g5J82MX2jivEsmPTDuzQKRXfATKzqUgL",
  "key41": "2fWVrJjKXK4EgPUhrog28UxFw1PY57wddFLz5HSE3fhC72h7hDP6rtuNNngG8NnCcVmFNWTDYMwx8dXmw3SMXpAN",
  "key42": "oVRoYYKKC3CrbPNCWwC2yyCuoamW8DdhNHLYtLiqFAbsAM3chp4S1S1SMi1tC7H14BcEbnHERFoTt62gZBfgUr3"
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
