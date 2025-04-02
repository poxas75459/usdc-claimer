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
    "3Z4bF9EMbPL8Zx2q6uQhFcvXx3tdm3j4rpFCtjzh25JJ3P1chuYYmNnX8NszpxzNyHqTdhizopsqd9rrUh2VXM9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ibMnmv7u3mztkcGMJaxWpNnR6mMpHqSZZvs84ZnYpYvGskprACx5673pPLZMqboYG7JGkViS3EpT37Q2cYGweie",
  "key1": "29ncF24TDy274r74stJ1sVZPxgKEwF4pQHf3Bomd6AwZp37tLQTrWRYymUjZvEvcLPQ6389VUTNYB8XgM7kEBGDh",
  "key2": "UEbXaW1bYjG1boAN2ZtiXeJQeg5amt4ai3Gvwedo9ncbw2Wi6feehfRxXWMwcRyBycRyLEuPW5foSqDxHmbi8b8",
  "key3": "3RW1wpLcdsb4AwX6rUHTRCK8R75mdLqJptEKPdxEckuYFWJhmHe9Ewi9agme7QRSTKx5LyAcLFQ7iUx8GJixnEJ3",
  "key4": "3ACjLxqkdi8UdTYmMrhqXJNGXdgUHqoh3SQo1xe3CHSAVfBpX4fKQbbnWZhHesWfAVPVzGhdvdpFwfasBEV8Q8RK",
  "key5": "4bdmhNGSfzUWKyC1gWucuqcHvYUi2GyT7R4djAGxUwKtui7WqFrLmiR9kEFozMWKdrcUq2enRRSzpNoZ9gTBy6E8",
  "key6": "4UJqtAJo3EsmEB3eXXUFNpByCuqToXH95aYHEdexrTwpWTwi4QBSxbAERnm7uGtzydcWCLWcoH89e9qWwavMWsiW",
  "key7": "5TcAzUMW2g31mXZrHfJgrfxADaY3e8jg5vJ3Z492T9uF6bdnr76BGQ6bCN5c6M4k1LN7px2Hxvh7tQqbT3RrmNGd",
  "key8": "53CsdyEjGQQtzTZkBScApvqFQWaBxDduD2RR7n816ehVsoJH77V6zJ7AnWu9SnJcqXqH6jpDn4mSmXoUiiyyMTxU",
  "key9": "K7NTeiiepgrn9ujKxk4EeqcBges31uatzU6Z7hP8wuj1x7XrxLy7cb1VLBVpkcEjL1SFj8ueeAR1p7hkTjgkC2t",
  "key10": "2UbVbqC8EicPEGgx9iz1zEoTucaFN9R1NbS65nv5uiigev2X1CSZ1oEF2gJmVWZVAaC13ehNGtUGQyLJakkyfRYR",
  "key11": "54XP782mymyUX4AdzDKFQdAdLtxnmijdDrdgxef6vi8oCfanUzBRRGfERghFypzCpZoAGCsAVvncf4QLDRR8b46y",
  "key12": "2e1GMDuB7cn1u8jpzt7hG6i9Q6uUvnadb98rpLwc6ARnj1hdU6WhrPMQSfQFu9menkMRYKjrKHgRYgCEjaHKVjxT",
  "key13": "3WpEE1v9dneTVBxuKpr4EcPjH1b27fN48UAQFq8Qzb8k77wSZfqYqMM3N9hxsu9Z8RQEp7mR5kTePxqQnWYG2EKe",
  "key14": "2pxkEVNWAjJZZ3N2LPvRmLG3PjTLaABf65argWp3bto4N9PpMTgibM6Zif5fGNXt2TPiXgog3QJDS4YnyGZGVRbD",
  "key15": "42SiRfPeKvS2faSVVVZWUEJqNxJ3R59RXAE9Sj6wSwRSohw4bFosMwVWCToSwLfuGhwFRvmpB1oP9V52fh9dy5Zb",
  "key16": "4zixS5fqhWTyqjPbcYKXuF2Mjhqy2CqXVHLR8Hpo6wqVjZbrLrNWNBcRmAVLqZVYv9pskh3u89jnYgRz3xt1K7eJ",
  "key17": "2TZf5wMqZ7jfxFS1q6cniPkaUBY7PabLLrR7PYstwePNrU1SgMkdj8sFzbNG9ZdEXyAyr4zUTPV4Rj4eg5K2yfwi",
  "key18": "622Uy8VQTw8CrMtskeXfAZkbwppdq1xA28rCo8MfAsUZQVuN8S6ryajbzNYDjtj1qZ6CzyoLJLrz5cioLt7Nex8f",
  "key19": "VZxAnMn6PXmfywW7yb3hwaCAjoxTGzgLPFztgDoiF3HNc63A5CoaMgVBpfUwLQGtuf3B1dkbdxdkoA5sR92PSvd",
  "key20": "5QGYdUNfNwYr9VXNG3y5zdq92A755uBerziTjb86Afg6czBtchyTEm4kYDHe6hwg3zmZAm2xNBm3pdLzr4QyQsCf",
  "key21": "38ZSDVXjvzFtDDKgK3UW3JFyZsdzwQ5SZSpGcxyGoNvtQrccAMs13fwa7p7WytpLDwCpfzSBqurHvgivp3qgi5oT",
  "key22": "31qYn9bVuznXVeMXCRH12hreyEULShwPk5j6324n7TQXg9pDwiTEu8qzg2N435LfPtTKxfuzGcj2Dpn2mDESShx",
  "key23": "5WkxjsY1LKRhDvK74UCK4bxJuU1g8KwQEuH3VyEKHSKAUpZvqN2omjhcNFS2ydG5M5u3VnTiphCu2pu4kgEnfZG9",
  "key24": "2G9z9bFzMT3Tgr9a88Dp895YxcMFygg9gmLQjm5fhV1m5uwG4nzFmyCzQZp5LLbNNP9f1F75uzt2FsbZLednRx1v",
  "key25": "4sAK9yuWM2d3mtFtxZ4Yp3Cc7KV6CWXbeBpdvUrs8qMkiGzH1KJJpUTezUebYwHepkFamopSjfoorRYgzoLTTdgu",
  "key26": "4mKWiGCDfvsuSU514bcoiBuUiiZYU2bRFh8QysbpPEN3pxCiiPF3peXdYJPHR4eKa3fjFFU1aDkV8mkHmbFW8mv2",
  "key27": "2BAaJFvyJU4hot8yUhZg1TCwDbNjZLMgeXomsr9GWtZkMjisT1TR5GzxTDG9Xvp3Ar4yA7ckQr1WKZwRPrEC8e8X",
  "key28": "2Es7u4fCDktQ5QVbbdyQuuRM2s25i4VyrQYVNRpqUarMcHGWv6rh5R1A1zXcssCRHzhCRc2VW2NBNJhg6GsBCG8R",
  "key29": "2tYGeAhTABnfieUobxANebGvPeq7pqHcaRCU1XAsCn22JohtN2f3QLb5vHfer21zW9VrRUEt8s4R6FXe1kqM9HxY",
  "key30": "2iifKJLg8CN26iniz1EXLLKttXPVTG6cDddm8E4HDte6gBPCBiC55ZsH4qfXffer91XXUeLTs6U5xdtK9f8PozGd",
  "key31": "4BLAtSkEtezeD1gQT5b5mgxM7cQhNjkmAUQ6k8KkXkZt44oPm9wpvTMGCBEAb5rx5sM61Cbz8A1UUxnrna9RVwik",
  "key32": "5XyMM6f6eUsHQg7YmcZW4sgZcUouRUZ4kaZorQJMieRTbGhWk4b6pCz9NyPXQki2uQ5hjT1dHmVe98UELg8T3tS1",
  "key33": "4fVJQCDaaVcSgcp8mGgjR5kgRt1mFyVAsWDXsWzdr2EJqAHCUCuJcEAVrcbKrfNGqJmciq7r2eGypYf7x3Nr6EgM",
  "key34": "3CaQBzmdzJczk5VuV4amYaPDSNY5Dy32p1icTuq3zkLHcDfD5ABDp5EJ1EkLzdDeb1fAe8m8TbdY8ZaX1oEWhY5Z",
  "key35": "2wmLATD5KEHK36SPpXvN8Sm97jGnsEWAr27UGLbWgmThNxNaKHK9Tqtf4SCaRUQqSyHEn99XZsbw7H5qF3JjVL2X",
  "key36": "32ajBsRu5ZJwnm5rbgiFytYSB2Cseg7jC4FPPuvNPqt45wECtAoTL6vf6qD1LuXsgVaeR1QdLepf8kvrgq2QQ9sT",
  "key37": "dSU98DsnXAc8y8g3u2LKGzhce5pVihoF6K7ARCKzy9MDS2LcDtWkzaS9KW8ueDuocDvPQ5Q5fi8x1rHPMjaGUrJ",
  "key38": "9uEw48QrnoH497rSRj3TjGuGshDcAS481p3XAHDBH6MxPYFqpT7VC18JfriCTU7hPq7X9GE54Cjr45D9R9Eo7eb",
  "key39": "4A1zMyuE23PE3W5ajusrEG521RQCDheq922HURt7M3dvLeRpvqQQ4XNQFhaozuanhk9W6WFxj7k8WxVwhHFz9WDY",
  "key40": "2P3hRxdJ3gzVk5btHQXdmzWYVx9dPsd5nh8j84UpvA271psSHAsQW4cbWjgs9DyGNj2iCDiSVAZMuVDje166uxse",
  "key41": "4APwVbqZtowpA2FTzkqcm6UCtJRdYUg8cFhtE9W5bXhLxGd4jSo4UBYdyPU86hT8Zh4EZfdpm1PXc8BvX9h9Wptw",
  "key42": "4WUZvmB8yYKoxKmx446FjZdZNzPMRBXm4EZvQqoe9d4JgkLHC25NaHDFg46tJMuPohSTA6ZVDZbS17g5vNTzYs1e",
  "key43": "4aUNbLkjUd6wDikF8YWNcWHekzBmzpSSTgYDELV1f8YL36nAxVg2y5uzccnFEVaeXQfGYmGmDFvr7kDN1fJSGLeg"
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
