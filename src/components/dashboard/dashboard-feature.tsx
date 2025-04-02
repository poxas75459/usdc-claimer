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
    "3d3jgATd8DMqqNJ74tj3EdNbAW3PxcsRgnbaDQGG4JUPRqtVwvmWszdq5LZ8xxBXuYUAvAa2sGMsS7m7jPVBKGfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PjffYpJd5Y42Recn14sbWdFU4kKgnEUKQVzwRBAYJ3PXBNhHJuNz6CaBHgWQArKqdiFL24DmBeX7eH5JkVbJEyq",
  "key1": "ACzJ7jy96LrgX87CjdvzNDSajL8YTesVXphGdDNjvo5aV7MKKUTnFYsQPhWYxgPJY2NG3U3LdAaikezKadDHA4V",
  "key2": "42ry7dm7JBtjkr4VTT7HLi2NabAWbiVRbwQ4Ko5y3Q6GXAxfSvCjYhhKxBJicJNK7b8C5FEaCaD2n6bge2uNHnMf",
  "key3": "JyHbGBfkK1BcYRvXPNpabcueFxKBZfiqkdgaDMGsPbF7GdrKLfpyjXfqCuxz1PadSWbZQKJ21zUjv6zNAsZkPYD",
  "key4": "2Y5SfYTfuj2kJCRcJbZukFcVTYpLTyJ9FgHv1Y33H2b1ZxYeVUekkZ7JDQdpejiXtvZLAeHhnTPw7qRQzQuZTFsu",
  "key5": "5sLdcwEne7NmiWVQSU1ujYd7MBTRhHXceEvjmrBsQzuThZDhYaKxRQ6UWpdZwbsUvAdkn2tAbLqCq98StPh1g3Lb",
  "key6": "kZyio4kXo2xwk5Bqg4Sz9qQkVc51ao9zWpMeerCpciy6AhG5ps8YXyaCTEko5WZJE5aJGCeGUD4Npc8QpSjWFAp",
  "key7": "5VJZuEJ8mp1HbHgpgZLwLs8fbp9RacEgn21QHk7Kk3KRnuiYzy97aSCvaEjAfqSZsuc9ZsKQfG5ku22ArNkLiyBj",
  "key8": "416EYohR95pRD2sWhPWMrHvsJytreoTANz5T1oTPxpZNQtaD6911vDfVUTCY9KtNvn7psjVPPVbJtKdqgB9QkEgK",
  "key9": "4WE131q6Tu4qVw9iMwwHbJrSkd6JJLDG71vSq5HyyHiryBfYaA3baYpwKyBuS7YPFb562RTAGaJsbCzvJDZaGW1P",
  "key10": "5z4e4583V9vjV9cNZb33HJv3zUUYpL8LaFVg1sJCY7Lk2iTeCavoMMCBm2v4KZdtL4NaBVtK5HAuEU5SmcFAFDwN",
  "key11": "4oFccm6aGgvsiXH28FY1VyPuxSKeQmm8EkWrP5xo1V92b5PUcQpgqGshux65jy1UPnpsaXcVmbLa3Jnrg7exMKDs",
  "key12": "4zy54tJjiSRjQkMSyPkt1tYhpQrYnQRnJaxpQzKJQUifdx4x1fWixRnNY4w9d4ZrK5M6uK4LA3jizeSqPU8cNQAW",
  "key13": "3xYkq9qNADoiofKLVCgtfSCg95joJsFLXX7YRVg7ERhFN51AyJeyHvKkf9mCGarvGTqmpv162UxTWJrbintgwZY7",
  "key14": "2X51HzwwhpBNwZNBHkpXinAh95urKLyoWEvrPA2xRMCnYxP5yUhCRwswGJUa3HVnQ2bHXmESEBv5i5YpRJJ9JpAa",
  "key15": "5swa8HfHWSXuFSv6CqeDE2r7J4TrKEYV9R1QtUH8J7VeNfNS18uNS7KyBUtvHZLddHxiscegitKM2NK99TPASf8f",
  "key16": "65KkxDduWsMdAkj1kXeSiEn992oMHJqi3sUMHFemeLmdgYjDMHKTA3EgptH5KcmsByf5GQdzXnNdtpx6EoSbyHUQ",
  "key17": "3AufDXevMjSVkT3TeQyvwZTuCFdLZjr7ERQGqyMo4fenJuVr5Tu7PJKBPg3U5rKhX3nxo81kc1DSnZMtfbiJoi8P",
  "key18": "2rbCXqGhE6W11Rc7x9RXfThNCsa9ipxxvFp27VoarT2s4V3H9qL8gQXM61Pdo6GvyyWnCTpycFerKYKNjSTSQgPw",
  "key19": "53xLSK26zteSnCtiMXVeKFjDWXY3T2yZfxjDJ56ZyQqgGsGR6D8CEYwWM4dihTepkMrJJzoCd1W3GYVrctVFv3hc",
  "key20": "3mLZhLC6P7SNqa48uGHm8t5X26aX2aot3KrXA5uN5VFFM7dQz2wcBe9Yue5sJSa1Y5ytu6PnLSgkSVLgKssxBzg4",
  "key21": "3KfiPajSXihaV3DNZEkp7HEgnR1scseJfG551yhyYkoVmkNYTuVaNkoGVR7XGSPM9zPNnLMCJxnGTJxkNkumnvsR",
  "key22": "2831s4YbbLCBYsKv9adBmWZzMSUoMgyxauBZ1jX5AbSt1uZFEweP43QLymNkojB6UF3RcJPM9tgpuvGTNbrKFTNm",
  "key23": "4CvY6EtgkGTY1JjRZZjdHdDKQ1nNnTj8qJ2Y4zobex2vLX45Xe7QG8h3hjNx8LiSoW3wTTmd5Z6BLLdYqkF8XkVM",
  "key24": "3cWsyDDGm95SMYmoWSfTeZ9qj4Q3H9LLjzLJsbmUZyC3nhBuPWqAU2d3zVgWtoUsDKkNnHUQyCcjskvqsH3djT4x",
  "key25": "U8nD6juNhQ42evEFfAYDu6qo7y6zbyVT3WZXR3WhSsUMCCWTwEXbEpY64uZkWDSh1C8F7QjJLPuyAY5fXPAbtde",
  "key26": "2ymcL7sDTXePKMNEf29TgZG9odHUaLTydEoNK8JjQNk3vvdh2taxpfVTgy73DEu6eAiNHDpv4Fx288j9sfwD1vWP",
  "key27": "5SVufsbtAZyWt9xPx2zSVBDcM1zZ1H16G9ZAcU4xVPPyHpsoxPn4omqNVDX4SCzENmWzEXryqKS1FhPGeL7Xs32c",
  "key28": "KxepxA8RJNVaBo4JRCwFaqtZEqtzzGQDfXyynmi17s6VutEyhLa6fdr6QrcbkDTgPTgCGk92KWQZfig4wyZK3xe",
  "key29": "ZGcq1Nt55Tg8aDUFi5enbE7XQKu4DZFMm1C8ue7AMF33gVajzMJFsirRwYaDKkrBTHr76nc9RdyMrz8u9un5CnM",
  "key30": "4CgyozsoXELV1zvYgw59TS68KUztbKjn4sMaiGhmsra8xZcK4EQ7H3ifnCZnD1cbVmDucKdaTgMktTxpN6XvJs6K",
  "key31": "53eKBBLWBwcTkqdsQCc2ojrrgvjcBU7rHMqVCrLSutLcvhxzyNfdA3VQbnigQ6bKL5nirjvPL7reAzgqy9nwRi2A",
  "key32": "2LtwHXXT4zQ3XP8hANAHaU2fdLieoNdCXvbGy6K1hW8wvA7SqyyLjfJsECSkj7Rvi9qGQ1ssYJMGZyJ9EttghswF",
  "key33": "5gs9YYqY8RBmKkbDpn1w7M6uMmVHXPg6Ne73eji6y7r7vyTonrRZNAnYCf9A2GoKZGztUXPDY8mz4hiC2qS42hLM",
  "key34": "66zEYS9Ej4MYpis7QZwYmsnb6LfCGhJi8J823qYvRW5Yc8taFCNkdCgTJoHJ1pNo3ejgvs5LdXdctRpY9BnaY18h",
  "key35": "pbdw97tX4ecZcxm3TErmfwR3VY5ez36d1xo5vpGsJFzHmgegtQAxNd3EctKkeQYSTnom1jyBZ1ABg5dnqy98hDJ",
  "key36": "3y9sfqsH5XGudW7poMfk9ytZLKa2gfTm7LDjiZVBmmCikofZuMc2Y2tQ6RMczr7o3BSMryPRDH9bCbfYRBL24hfV",
  "key37": "4uqbAK7SC4huAHWFfpbvvmaynmQY5qwFkyxRzAa3MwShTGk1ZLiMvV6Rhiop2v2PPqTKs6kU4hz6TrjZd6b7rBC",
  "key38": "4SdPAVtu2KEbi6CRM3bxRKHwYzSYgxVjAB6Mfwwyapu6joG879nKqwh5KD9jSCETuCxw4PWLgrjMQ9x87Xer8KAp",
  "key39": "4CMu1Db6utxf4XejYyNgx2pMW4kKXJ8wwUYecDa7vSj7HtERXP82iebMotH3Pd36bzNhu2FLbLoG8YJ4y3DiqXyb",
  "key40": "2KvK8zq5M7QHjCAsy1qS8uaV2527nY5JPNuSqzUy964MSusZDAr1L2p4HxGHJfZP72h28TZcr5oA1AU96MddXTMa",
  "key41": "2Mgz2qPKwvXXTkV73YeAT4yyQUhzY45HehBRx4NVirmuoAQME8ubUS8R5GH72vtDxVuDoFRfpZ3cr7KMJoye6kFM",
  "key42": "4wJivkqEhTddaubBAKseJyZtzY9hqRQ1md8iUCn9XBgMzgDzqCTNfLPMjsj3jPYGPLEjDkAygnrswLJqtBwbC4xW",
  "key43": "JSR6FBVQKb3yteiDPdqUi7SVV6zjia9tSwjCox69oHpe7Wdfx1cTab5rCd84zqgQmQCPZTGHDqd1meh7rxFm6Af"
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
