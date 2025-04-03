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
    "2gJ2XQb8CzwQTaVkHmcPbWKY1DD9Y9tUUxTfw5qQkk6gUVWm4oPRvut3vm6xuzKU5e37Z36WxupoW18sNyT6D8dL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F52qESaQ4PhyDhXyJc51E8YMWrXFd445bbggKcFVfTzVS7SWksuPzrguiVHDw3qATWQJudFcwNSRcMuNRYuH5EX",
  "key1": "2uD87cfZ1iQQWM5dpWrjWYr3Jw2kg2giJQtpgasXkCXMu7GbM65PAxnkA6GzV5w15onSeR3EKYWdFV3BAKuPawDa",
  "key2": "2JyRy3Yx2uLTBhWe3GBe9yQRh8TcTWP7uPD1seYw1nxjdy3ymPhUEQ56FxusHYQ93ouQvjZkv5DMjCBzWFsfhYTu",
  "key3": "3BrvYM12HZNwSK3wxg4wWHNYv1Gd97fGNuXRPuhrHxmjVujxZF8HJ1UgU7pJgAS8fmLkcAKzxdy98KDg5fiPZYLW",
  "key4": "5Rq5dnJXf5ySDtmayxt43R1P7RbFQ3hhu9pr7JEeZPcuwS7QMwZfzFgwqt43jzfEqybiReVfHhYFUooudzXfowRq",
  "key5": "3ychRhDueh2wHJ1JiVE89xQjn1ygReKRzBv4Q39zCgAYrV1diH5iXsQPjxVQfrTGPYYwMrMHycLtPWtkwnmYh3Bq",
  "key6": "3xbUBNoCDz1xWHV6nU1oaUHS68vJWvEJFidmk3VF4LkDKpYYBZPBadwjPJhLwpnyQvyswAvMyNMW41i7m3LGYd8a",
  "key7": "3HAiiYxz43dGLyW56SgA7AiVKKKtAGJ5dMa2mwArZrd9FYDtkZa7RruD49oz3DNqoRxPgd8xcVvp272e6NzuaVQs",
  "key8": "5J6bEAVNiJQbT5zmHoxL2rgLL1QxUcfJ9p8oEF6FRkbABsfgRYdSUV9kjLn8Ex29Th89RKUJuWrAVKCeUDiq8ubX",
  "key9": "fEJeMMNKnWAEZdgHWFihFXx3qQwNugrRUXq8E4CPjPh7MifZxXkBCJ2E32o5fJ5PhkWTcrBfu3KGn4WxMJDUckF",
  "key10": "3NaKngNurKJ2KbuX1w8L8P8RWnQ3iUpHVkEjW5pSoZCtC2uGF9T5SK7KvVbeXiQLx8VRM9e1buFsgHgRgnfDkqjb",
  "key11": "4tPoXKSkN9jE49XoFBLafnZKdNaY7fL3eiunHENM4rBU66aZ1p7PHhMdBckH1Ucu77GGN1mrZexj8kVynnL5trq5",
  "key12": "UG3uw4FsSojzi6eqURsQ4MxFAAZiyK8G6PgLWZmzDtkE1KFtQBb2jWMxNLtqR3FEG8fRNVYYytK6s18GuLu9c1M",
  "key13": "4RMcLU98ZzLB6dLZetwxff32zsBZN9c2GKjxY22tTFhPVnFycoNpygZAosW78Qsz1QxEAZy1FT4tmwd4todXQAPj",
  "key14": "3WrvDYeAq3okXzP11LCZR2aFiy7ZtjdyDQfgCvz3EZZdhAwUTWJLF7zeFo5VUvBuabjTcG3GB6r39jtcjJuTRDKT",
  "key15": "P57N4nkr81j6vjZKgkXo7LhUYy1RoyPUfV4hFkZ1fN2adAGvs9BpfyHpJobf8cftreEM8sFiQvEjnZkESHr7K8g",
  "key16": "4Pef7J62nvoFT1fUEgayh43wLNARgp17SdAYS3pAaZK77wQVdyMnup2YaNr5Kmk8RjHeHgqRQdsJ3BCapGC2vmbD",
  "key17": "27UGBq7nn7tTjQfZ5yjof7nyue1U5TcaH2DLT1TiuAKbAkFHZnFAduXBpTEdm8KmKc9knhMpWXgsu1TpdVpUs8qr",
  "key18": "26ocTEXoZQw1BDiHgmsPhat2JF9ZofqQ4SpoHsrVcpMf8XPpCcY9v6cnnLfkikt28k6VLXyhLvQkPKNX8SWT1MXQ",
  "key19": "529Uaj6omytm9QUXdgVVoBD8CUftydaUcLjr6z7tEf8hVion1Cc3baWDesSGNCYtaxH3syL4C8D7qWn5awxL7Wiy",
  "key20": "56yKJPwZJD7dMhkEG6762qvwxRRuQLkBeP2N1TGgsDRqx1eWmXJoy88E9P6CepVQ1wcYX18r1riSbvE3E9YjMXfZ",
  "key21": "YpQCXFRg3eyXQYtZP9M8PDYFx7Q2RbMm8Gq1KUysRcxMFMc82RJNoo7TfTw2B4RzjewFgLVDJjUVxwvCq9Q1u4M",
  "key22": "2JpKhaDGHGRiCp6aC8drAgfoHLkHTWm6Pq5e8rtWXD6xGrMNy92pbB4YSQ3pxxiFFs9YFLccdk1Hz9iHnqw6vTzQ",
  "key23": "4wC9VbpQzHjCHx7V6ozrP8yw6GWQswYMNwbWekGTY2aoEKyUFJd7cx2wdxVHXZx9jCGW53LFmf1j5gXREP66DVGv",
  "key24": "5oxVNFooZXsDB3jpZmW65MQp5EpjqjWFcqwMxuoZDDNhNo6TB174nE8uq7dGZdsRA7rkSRuyeSzNXQs9yp27q4KA",
  "key25": "2wjQ6oWXGGszZsK52NTxJ2mfzKKFB8r15N4i8MfFGZDLntcSijxE29bKDqjPs4BLGax2YEh3BcUNgCtReNUZihrD",
  "key26": "63JQB9oCveVwzt8ctTJmyrZ8N9SJwUaxzPKBqsgKZopvKf1spa9TppCnJmMneevz8DLgU8dpTgijHMUZ9ZJunMHm",
  "key27": "5TwCZMtQHAdQbA8VE6xvo1WyY7sdiv2WrXWTrRbNXNCnF3ZLgE3fJjiV4UyJKoNHY772q1Ub3urvBLzNaim9SeSh",
  "key28": "3vXanSjaGUQELFe6PFRKDeQ1dheHiL58KhGzc5fR6ZFXcsBG5QJtVFWtJjfJZ4unNg5jYw7uqAZmXPPZBpnore9A",
  "key29": "5YfxgneEaNejShdN6KE9YLVuakujEkvUstCm2HYShVZRPnxqzqGugH1oYrkKEq3uZcXyZecJEj5mmU5SJDJU68qQ",
  "key30": "2jKtiFhcS4PzZLttZtkYyxyN7smXfHqpeyUyjbRURDxrxXAWx2gWU8jEfZ6vmJRucNkP2MVZ6pYfJRQ72RbbbxAT",
  "key31": "2RhetJ8P5BS4ohktKCf57ipSPTQyJUxY3MVTUBtSpnzccRGerXnsWPYcsQtKJ4evkjk6GTq5WotQs8feyf9QWHDC",
  "key32": "4pkywXDSBCoAw4euZSdiZKjoxfEmNLtaGCEYovzR5iShC3HnG5TQExX7rdMNoL8iQpuui3a9QbRWjYavdhGyZnrD",
  "key33": "2oKzfmeLKQzb7z4K1dE1mi3QLbFvYrY56LtGhdrypCrQcySvfcQVgQLiegVYQunHvRSLWwZyZN7iHWLEYnuuZAtd",
  "key34": "22i1g8zegLozi8hSEDjUCPgUpDw5tfSK8DjNkX9K85gMdrD1viBxgtn7crzD4TDZ37nZ1dMZYamxAFhWA78HJFDk",
  "key35": "3StnPnwQb8pKWMSU5Wse9JS1pH2dkFFYiSUXwe3N2gyy4wrUagreaEYGszU4t97kb8nDhL6ojfxhQvEwCMxhtLX5",
  "key36": "2VZELCUef442CyzqeoverPQLPUmiBhwXxNHeDC8aSM4hoZD3Swd4M7o97BXVj7CPWfSuPV3AdHKuTJaF33cQDF7h",
  "key37": "qPQQarU18fUCTQjfMojT18pzWbkFL81aSaiGS5J24oUibeR2y2Cmz2EbcVkZhAomERxiuDoduLjEzvSHkmkyKvJ",
  "key38": "5C18BXd1gzaXTKNrcwrbe2Su44fHVGWYeHyGSPJDwgobpRqaz828RPrDSFCQP3DEj98LL37PHapFkBgRfZrjXojQ",
  "key39": "3AQiX7VcuFxeS1yS6yWTGNGLvsr6BiMcbyJuub9JV9EWfTVCyud9bFVvfzP27tQrw86qEXVnLVts4y1Xg6y8wCa",
  "key40": "44cWGdbAJDgitAQTcc53yrDp1o7J5qYpBk8ToebvFnA7mQ2LBo4Y8sVbhd8AxESG2Jt71udZ98Sypt3tVMKS7zFx",
  "key41": "4r6b5YnQQxvaBCYre8kKM14p9EkghmCEFSyCMp5o757CW1nP5NZ6dfAC9L64FCEHrmiTo2wbJT575E7uv7Mz9oDp"
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
