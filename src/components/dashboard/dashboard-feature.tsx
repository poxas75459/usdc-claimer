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
    "2vXqUbpYJoEMLkRq12zZ6D3vcCpPfaRxBxf4o9Mvf9328oCcij5yX2d4x9nb7HrnF4JaEmhKafSQ11R9xja32vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CVvHUuHLbXq8xpaW5CpQDC9KWE89R3JAZa5EfKrWzQ8ZB7GJ1JmagGJzDnfrXM1RjQ5eYoXLzPCfcRuFARt3EBg",
  "key1": "25mLtMp8AcoqJgzHnZNRiyVFPGm3ed3oSjkj47F2PYBhsEgsgTzznYkmoEBLJySUhBhfFgVK8sKQWytgox8Q5N7d",
  "key2": "5xLQfAdWReAr4JQaQWPC6hS1vSnLADdGkrezYjgaW5mMGNkKfAjwjaEvrjYGVyiv8VXxLqEWayhGiGp1qd84HGiw",
  "key3": "27C1YcQ84yFABtvwJkQcSFZSXn681QbGbXpnyqpoYjtG9xKr7iifaKw7PSRvk3fohgqvDjgZacU52LpJTZF9tVEu",
  "key4": "5qqBXTU4tzqPkuCDoSVgbsi8mHrNuFaLFtbWYCRxoijVuYiJRoA4AwYa2YNdTRRNpg33TVXN1hxm3q66Z34GTbT5",
  "key5": "5dkxbAJR57VKzd5czHtd3sohB86kRNBT5kqkprBzh87bFAfu2YsDf854aQ2cuZJUfnbzsMzTVz2amXSXFGcfurvL",
  "key6": "4dpk43sCBx6KE5zhtC7oEpxbq4BSzT4hf71PoimNZn4BiJH1bWie1esSZZgCBCwpJyureHDNvucL4texMPtSKjjC",
  "key7": "3N37fPKopuksBoWC9Ercwaa6kebkmSrtwhSqjHSXFX3Fpi3zV7BefvNiquGNiPVqmsyDtko35ufSPni9xMp3gkFF",
  "key8": "2Tg5Waa5iyAfwhXzmXyBV5QhFdomBmzRVSQbHGQ3FAK1ju7xDttiKok7kBFr6CQXQ1MbtFLebqdQnjndeFKW1jTW",
  "key9": "44ZNSZU2CeB2SVbWHB5hQiW1tKxU7NTxsaxpL9ibc6tNbXPeDcDVy2ZcCfyGYnW96daAuSzmQ5VEvFNWYdpYVsft",
  "key10": "3RtKmZYH4b1iT2V3iVXyLLGn2sgvTRJLbLSt2728u2GVcDMhY6Q4zPScw1HYSqjco9FN5e21pESJS7Z1M6JNcHL3",
  "key11": "2npvSbmafNmGbiZmANcsgrk4vL5gaVJ4QyGLLp7szqVfDfuccHD9DFJNjxtB5PSdRuEcQhTWwrbj6JPKfPZEBkfq",
  "key12": "5cZapNYjP1WcGwemCpAPTmEXo4w6Yvwa3bSesHtTMeFgjdCFyLL4Zai9MnzqXL4dY8VZemSRYxXbCWGaVLFQxR5B",
  "key13": "HMr2RZLnu5AnrVb1oFvTMQbBwQd5r3KgwDbButQ8cXfzbVogMRFM3WTH4bmAnC2BXPLuAGF1NyqjG6V4AKL5rMk",
  "key14": "3p7rMib2Fjtm3aQ7MyjSr42kLpYGViziJBQ5Z2wa8jXECUzVf2SQVMfZGNsFgUsyDQeREvExHrJtxxH9PUdXEKth",
  "key15": "26kswiE96mXhqUo1QviQQQRt9Yft1fw9rCU6GAKSgNATDW8YWAH8tFmeeG2oDEP7BKVX4B4kDTmzZFz1AXYWxu7W",
  "key16": "5ZdTxq9NZjcLYSqSL1fHfVVSLykJqqE7Meu4NgmXsNLsHBeHEAKytSjGzRjHZgFTa49NJQGYyhgRp9jsGnF8e7mq",
  "key17": "429sB2p6VGs7LWt4pdFbM3jcbrjf72vyvhjiCPg9sWrni5nhw1LZE2V9n7qCGyzzXqqeUCnadSz354VUSxL6ke9X",
  "key18": "5qc6CGGBrveWmepNpU51w1AQ7yf4jzgsWVx5LSU5a6TmTYhpJmc9YAUTg77rd9gWCAYqdnsC5kEZWTm9Y1Zi9KsW",
  "key19": "3W6ZUmzur1qNkfMCHPxekBjX1t98NDirzBZnAE6yGQTKu9HbwKx2NJeZwh3Tp6SwwwZT35zFUQwNnz24YYd5MJx6",
  "key20": "4J7Dzg1WVjkL5i8LYVSRoWB1cvnypayWhLYkY3ZTb25vLSEF7bP8rtqCYVQTfWvK9qhpyzAHxEnTmmnim7ygKZfb",
  "key21": "3Sc43YqG8hgjui6tCSMNiFbVEAUKP8XLZ8zC7QFwFrCL4oWvEXS4WwWn4HckGvm4XzShaNg54zARms6E9Ljskzy9",
  "key22": "44oHGpjqM6vohqUGinnrcckew8477avAHJuoawqPCbGf12QMWjLQeNNUdmXXPXiWxfPAtPZUU318AeeN64BrCwfr",
  "key23": "5ndh8BQcqxYAshfY9tx12E4CkbhHpKHBLbUUbUFB22Bafybxxw1Tnf7z4j9gZXZPXG8FMmpCqXDn9eeMJ3SJMXWi",
  "key24": "Ddo3VJuyyCnuHuYZAHSxUCThvQudQHVt2wc8957DwVp2BYRHkgXRqccXur9VsXQiBdzvioUbTYVRiy1yZvg6mqJ",
  "key25": "4SgubyrBanVRngXfvACcMDHdkW5YR5djpcdNrp3UZp2hBshgcvdKdQz8ZgH7DNZ13ch3GCfQeaftM5E45UZymxyP",
  "key26": "3czeSfncoMM5UmhcUZS7wn712aDb41DqHN7mYVEsA3PX9Yui2KFptR1ZFC8EA1ZYyKSvat9ppbdze83EBjGHgZvr",
  "key27": "5iwYumj5eWpYEjX1bVjU9WA5qFHRAJDGsAtoAJrqkngh9uCBCcD2S9r3jHw7uo1BbPbDBSv6caaHzPQVGcHxM7b8",
  "key28": "21mcjhBJaxi63e2Lk4UAEDjuDDYB6GqdJHYWz6MTz7Jajubb3aqQb5EZeB59DExYGT1gycenRwP71t42feonVkmD",
  "key29": "3afPMqPwfgrgXkGRFBnUDXw1xhgGvBztAMc4smBrhkynTVJQoRyxSnY7ff6cih6G7XmCq3gN95MBfhGRBcfMyhXC",
  "key30": "NahwXMCCGdk1uGxc3nW5Kuuq3eHghghSYtTTy2ij5Yx5sGfD1oVxBRwWvS42Cb5sVqXgsiihxbdz52Mgu3E8grE",
  "key31": "62fzp443DcQdageQKnNLyDLKsZusXG4byZDuqixBP1cXjEjrZAYQqrmjT713xeXViTA9cVBTRtyRyu6ctnonnrZ5",
  "key32": "VVCS7J759cKcdPXL1EfCbPfUZLvKxXBm8Pf3ur3EZXLmLk5A4qGRPBw2m4PitJgkXaRJrcn4oVdtHGXYw2kQdBd",
  "key33": "2XuTzc3W31bTB3rh3vo27un6Dcr1mhzMmQqc4PhqmWVSTanYJJu9VfZoi2MxrAS5jFhgspGMxsKnQuPDZej4NVqg",
  "key34": "8RKyCd9fckK6YhPcvh9mbFe1DPu1FtBK3YmygnHaLwJ29uaxXcMetczyryPaHFZZNNHpduWPgQGeYfhYZyJgGKy",
  "key35": "2gRLjzW8d7pJzFX3DLSLvCy4vX5SDxo8grozi9VjeDuB2FUaeH2iJcsUyLFTvrc9UvgdoQG9bbdJzJFVhVsxjzrL",
  "key36": "2r8Rxfedj2u4gumZunvVr4rfgmkCoXxVjCDhWovcL1DQSG3Bnu7SaLP3CAhK2jyfT9TFo4sAKx66ZP77YWpkg7WN",
  "key37": "5CxgaP4WLLz7zLK2HCkZwTiyHssJkXiWFda1RzPRE77QgFrnQNwqUuN1esNXVFzgzhhLZKLs9N1zoYyb9FxY22x8",
  "key38": "YTVZvHPa1CAyQ2DyEoB3UumTxoy6s7nP7NdDRcXvfREo8Lu6hJJhnxnSxS61VsrXenmo4bjn7PeTAiwHvcXAcki",
  "key39": "3KZT5ZZY4D1nKByBv7wgvszEYByDkp6Y4tRBxtZ4mgkvBiaZtVph65nqVymqtHUDV1WJmrSani42i4kVhAnPhRyp",
  "key40": "4BpzedgrDJHFbZdA5VSK6gXGPN7rqWJLtkKGSzR1qU7sNhUxedtZYpj5zw4HpAYzMpJZQum6b4EoZTwxoi5ZAWsq",
  "key41": "4pCec3tcbKAGqXbPhByw1zkzNC5my36PBbbaR4teuuc5RvZqcW1d9UKNTJ4ZnfYNEcdkHxXNoPHVfZjQdSKVVWMB",
  "key42": "5SZENHWsBPCnLPF9mzVCz9rPqPryjSK9bToXJPngvgD99pVHj1Ti7FPCdYbY5JZ2WFY7Y8BdDMi2vkaEaYuWraXs",
  "key43": "5ig9pXBhypCwe1D9JopQUVswWETv4p7gLAsAfaWHgsj9NDo3bmhNCk9FqLeywCSccy4wmC16eVS4pnHdotwFjmUu",
  "key44": "3x6cN2MTK85FFNbn3RFPcRfGJ33ntEsDPj2iJC43nrQZthmSikrgBytYo9qDi467eLVSJ2HAwFzEspLhHJHGghWQ"
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
