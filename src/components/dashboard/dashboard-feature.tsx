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
    "5VfYFxqmd5GZ4ZNW6s3ppzSSj9KMmEGRL1s9hgegmEf4N6FPGWMtkvqs6Z6bpGGmbgqBCm2TjM79TxfZwG6LYibe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TKcL9hiLX1JmKs3WtC92NfwbxyNGaytDyw4NP43e794p15BF5vJWnxaFmGvhwzgVZHj49fBwvkf5osSnHdz4nXg",
  "key1": "3P6uS5TvvGx58JmuGqmDtkzxf3SrcxgN78QUajdjQ9UMJk1H533ebF9tyvB6rRrzb6bkBDfgs4QNA17LNY3FTrWx",
  "key2": "2FAzCDpcVmkhAJhEyQSxu8gBfpk2SWQgromWsVKHkDLNuaNvAgCKVLMDW2QqDsPxc4wYEKXAsga1e64xKh6groDQ",
  "key3": "57mYwfdPYR21JSnGutUVoojLNQ7btrNzvjMuUrr4RsGW8BVnGbMBobUtkxpXKwXWAPEZtoinY3PdNMSffKhB4Dsj",
  "key4": "M7K8x3N3n3sgDQFUAzVbKPwgexMBsCCxEWuXY46SSbvBeRPojy2w59UqJ6WZsE2992unDqK8zccLiE1L53pDa28",
  "key5": "44h3ocV5JbwybYKDXFRgRLrP3SVTadud5vF73cGznjc2Hi7NogDDvhe1DZsEHfbGzTfuvBGKhwtVLAM2mpjqV8dV",
  "key6": "zHoCQU857DX59qdUYf8FtTANdazRjYpX1aY5so718pjMvYchVArSHPKTtMTqSBpxreLn7fPLDk3ygxWTYhaRGob",
  "key7": "h7guTuXaSBz57L6GuCyRB5fuLADVckg7ULUTX6S7SeARek2nyBWiczjchA7j2Xnu7vPyqXyov7rk4nY9UQfCXdp",
  "key8": "5Qt1mnspymekacy6jHH937gxe9oRcwsQtWxkLYncfXtbdu8JXZXMJ2YXK4i5dPpFc6VVLTGSSLp9dnUyYAVV456u",
  "key9": "3UKWpC7srQ7osptq2Tq8EnteVgMhTieTVuShnmy3uhy61ubCf9fnx9Ty4nsFTsmaHJpuKC6P6jyMbtuG3opECwTc",
  "key10": "6ij6CufT4eXh1RYsrS9SpDQC1D3aRcYUSeqC2ofAutGFWAaXK6AiDQgP5hmKcbf3WqtPfuj8USpHR1WnxJYCic6",
  "key11": "t9Xdahfwgy3y4u3swwXwYjqJSxzEjNMPwJkjeszuXoQU8UkCDqFqHU8iuQ7hgTYRF25iry8PhA8a4iVWioyoq3f",
  "key12": "5WF9FWW6npD7ZTaT9K5RYi6KoGCZXgEWCQjCobJe4Puf6cQVGtHYHkmWc8hKtnHDxq1jwYbEHbpxFAUEEPWgWsGr",
  "key13": "5swytX61AJBavscGQwNrQydq6ryYTBDajv7i2F3vZP1Ms5RWKReAVzekXHME9BSCejRuQ5awLw6MtYhdmT2YD2Z8",
  "key14": "449NiQRPz6mBKpTr1tkBwNbrgfJc9GdjfGZMUxGeWGa9WTTCrdE5ZZ6FXThUCsipjhBKtDWpcGMN3yNnZoP4teFp",
  "key15": "3FGn9sf8P7ahcY7zzPf6MGZsEybctoKXkmqjgN4d8MYp4cZ11aNvDAvKBcHk4wQqABy4GSuBpub57BZeeQfQENS3",
  "key16": "3gDo1oConHhhNMo7Li9MCczuTpSKyshKsoocLn5ijKohUfqQ89Vz93GNzKUKzfv3wyjMXv85idb75V1iJAGvEg2k",
  "key17": "3KzcZzWrfmVkX3U8BuBHLQAxD575q6ihJRsEwXuNaxB8H5wv3gP6yhaeHFUxxi7VE8goVc297WYJUupGiWBsdupK",
  "key18": "5PCKjqCFFU4SNrNwu2eD9h5C4BJpY7p5ZUiypD2YaED1RLk8uuAAxvvE6riXj3i4fU28Bgbwb65eqY7U3GdNLC4N",
  "key19": "5JTePLay5H4iGnmcGAnMfW56gwiVehBSg9QsJF7ERi1EuwtQDQ9kPoo8KGyQs5mvvkjGjirTzeBQv7iqSW5jfdhS",
  "key20": "2oTFdxxEQ8GiQzPLjVoJc6UEYCr1vgyr8LKGakAHEhtdsvecK23k26Yzjx3AZQ6BhZ1XU6k2ZeqbbrBmad1eWz1M",
  "key21": "3sggMWZAaDMXkM68eT9f5vQEfkjkdsv6UwHddkjorhm5AZxzK7F2NLEkvkhoE3aanG7b1dxy61tBmfGutGLTqbVP",
  "key22": "4sSu2gmhkkij98cw8iLVrrLZMD4r4WJ6GoMtUe7Jg3b4hjpQTra8RU81W1KJwNAy7XcytdeoaackTrsff65hkLWS",
  "key23": "2eSgfz73S1f4DxxrgnMhS67nvTGKwdm8atjqRQhhmZLAiNQBxQePk8awVnXvqi5fcdWoBgjFj88DwZpd13PY4yv9",
  "key24": "UZmHkPemXmKZV3fV7H7m9qUhazkMN5y2tVkSWEA5JUStBseUANBBhV1R2BMESfiUad2zeh5K7KxKk8gwS9RTtL2",
  "key25": "45YtH4oer4F6UjutRJoUXcvtc91XAXFJPWkEKjfZVksR4m9g4G3CQuZuQGYuDM8ytG8UDfmFG8LARHURdiyCaQx1",
  "key26": "59VpMnNuV8BrSAHSkwawHpUkWV7VioyvbKHChES3YAHmapBFVYZ6qwvjWyWYoBRZfNC7xkk1Ss26vxsfPLNWKf1N",
  "key27": "KMFTq87sjSsJf73HPmKAqDidtNKUMJBy9E9FQkgTBKg8dSosJcX2VuNBQmxRe2LqqLCCoDC5CtvqFbJ4EvrRq4V",
  "key28": "5BEcxA1Za9SssBpBeXRVhXEvFR9GtqcDBYkkU5aGRgfKUGPkbDy38GAxpNHnivPd2cfDBu31jDb5UBLUPCongSi3",
  "key29": "2pzaGqmGWi3PvU9syvMX56Ev77G421d9RvKf5d9267LeAzLPLBPyJh4vkRFHC8DjgeAGpC7xx82WHhDB4wWT6VbY",
  "key30": "26nGfZgSfzU9tPCPQ7eMPS9s8oaKHVs8Q7DKXehbuybf39XJ1r2W4Y1YMYsEExPNCvaawtYorNRhTKt3HcemTrzG",
  "key31": "2ifc91WKEdVYeUaQJc4LfPw51H96sMBmKHsFXt76MBY5v1zPmEhatTfVFKtCoPffzxsmQ52hAAwxynSTLwJsLskC",
  "key32": "2dHHmPaRV8sVAjiQW3f8Gt5P1j6i2GmnDi67ug3P7tKkf41k6F17oad9VQj23gFDLDkgQXa2ZiitYUebadTjmozp",
  "key33": "4xwDFHK5Xujt4x6f7rqozXSm9BXB33m9cGySEfN8zbRbTeycya1iZHshQN18KnCgZ2zWQDvF22BAujSAqpGdgWsT",
  "key34": "49qGXg8cHo1kVTpivsVhCYekFoxnXn7CGLcvUrWTNBUFsKz83K87ZU9Sa3ircbcGP1J5ibtTUNMZfESW4jJ8TKZP",
  "key35": "2DyQWmSatA62cbzoFyfSupkksMcB33QTvQgPN3NipCoikWY5BSpyh1W5pEBp6CTwjZ5niodFCAoEJ7gC6vbHYxCv"
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
