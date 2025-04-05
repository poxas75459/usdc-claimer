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
    "49sMkBGNYMYxSJhSTtCAJznB4WgU1tN8XZ2ZPDFFePM3gqGafGhq9uj8k6q5ecJQsNWhXR9GP12vaHdddJqs1Khe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fk89VeagRBBjA9cS52noKyuSC13rN5Xzr3EkY7xuvtigNdgmft37kqwtd8LRCy1yhkXgE7rY8Q6JQiGBzp4C4de",
  "key1": "tPbjagd5p1VQjE1gGm1VFwjMgx727Lto4md2YRtefHgrNwFoDVJHuihRoJPgxsK26RV9WysWSBkGFPQxQAFmnMD",
  "key2": "4pse6CeiaGuxufJQdPhfyVvcKgieimiPB7CB2cu3yJw9qpzyaP8Qj5uEXgtB4kBrfWAYnwBNQVwzaXFnZ8w6RoSX",
  "key3": "N3pcUMSoPUYv1wJuk8Lrzgwq1B8jmtSPiDrSJNsmCUHSkA5FX5UQ8w8npwD21ow7sPXzbjj8XxFtKNbYN28Rvxx",
  "key4": "5VH29wGVXinpwFUCm68YXLCMezT8YS91f4kLvDD135uumkiA6rzPmeXTpdF1oE58GPPRNdLeQT67GzezuiSwFEqD",
  "key5": "5mrVnSUjkZLhEfyAF97njVe63yezGAfRxku5i53S6Vyyf2nm4ieajXstv7rb8UpuxQeuhSRjjHKwkDjTGz2oQRbd",
  "key6": "FmjZyVvB1TX3sKrC5N96ypjhj1fJiEQqjbeTD23B7KXuYz3Bpd66FgVyfQEzTpmt7ZLjWNwnknRtDbxfA72f17t",
  "key7": "3x9649KtXWQ1h12nPtTFunuaHSFvyMAw6D3cnQkBbYcKgkMpXtm7db82T3nmV9ttAGTwzqfBABbQSf4v2WRJq7Er",
  "key8": "jkGM74KQ7XZoyLc22Pynh3kvX9RfuLufqDWKTR8JfunyfvWVX5rTegfNt7WL4eq9AKBQKhAydKPTwTxfzPJQPMK",
  "key9": "4GMfpUQT6WF2XaDh6KJdc1UZcRvjY14sHQsrTEe4LwpoZJFkucW6mCzdDuA6GVstNKQPmQeVCFW6FMi41ZZfjViD",
  "key10": "5Tt7F6Li95PUqzLWGun79VTjoxjBc2gRjEDuykJKxke1goHBeKKMiDaMMi4UpY1BPB9Ds6rwTfSHyptNz59imuNz",
  "key11": "61Bp2P5uDPuKa1kWo7EZvwQu816oXPGny55X2Rr1vEbDB6c4iGVeKpaMXWM8a5XtgQ89sV5iUHmUCe1pCGX63jaF",
  "key12": "47iBnEtk11D98t9ewoiuZNgJUoMhut3Kc7QG2NnQcFE3prjDGVBUdHAnTP3p9SuvfLuAioYZWodS4dugr3NAjqJ5",
  "key13": "LouGVJUtEtZkV2ALZPH2CHaJwp8AYDE5yWZL2ADWZVcMgyEBR4WiZMK2dirhFE5zRcE6oMaPLKvRaQyKX57rvyo",
  "key14": "3a1HGzpmv1TPr4GDw5X6maiGSsvS48u5Bu1DJTX7s7VgdXf19Ws4NPAuKpKuP8a1GryoZhFy53pHmxyzAqbQU5Dq",
  "key15": "4Ra7VnEPRX6dv93UDFnP3Y47axf1fnuyTMRJy6Te7nQakCYPPTXunZ3VzkJXiUD1Te5SGsuozgwbKsgHB6J5bqBf",
  "key16": "3yczyLkk6uZGDn5jPi8xCUwGr3jfgkTQ6HWmFEqQsqQnBnYSYfJYSUSBpHdMP7MxtJC2Xi1nU5yvSmWi7qdghr4d",
  "key17": "5zUSGYSzNaWLdWQFiYYpvmpTsVRRrRU3CaK1VCebsxwYjUkqTotovc6jYWFQryD8NnRxwaiJbcqJMf3Vp1CXU16M",
  "key18": "4Q8ihk6wvW7wCKuLLCxCyv59EY9rNNkotFrXVCXR7tRKYEyao5h68tLC1bAgaAdzFJwMeoJZgohNGgyM1sPT6QcD",
  "key19": "2DvWoK1yxKq93XGTQcr1YhBbDRDp66WYQRjGquLm7RTDSovsmcNBZML4GDfBEE7mNfK8ExuMv7BMSLYjeT6RpjrN",
  "key20": "3VkWneLwMbBaZFERjef7j7ZFRYhpWy4GBPnaYHDmbn56VPhiJxMmqENBd2F1BmURah6Bshw1kKM4E1FuBSiFwYah",
  "key21": "5uToUWzuXJG5Ji3qN5EQiHSMwf7E77UKwAeMYcZxPFfaYorgWnyRmie4o9F1UCDVJfh8p7J4VX4PUdv8Zembjzrm",
  "key22": "4PKAa5f9ziA1p2HaSRvkLjkdrmqLk4Exi3fBkDXVw79FJEjkEmRTXWdP5vGVqH3kAzJGaoRcnG5pQS9S315AyCgZ",
  "key23": "4tLuZDSNpeSkLrbki6yxqQ9rXUCjo6MK2U8EyVHNyU4X75fE4tWY6dHiBfddqFdUiQfP93rKBzMLm2WgQmm45mHh",
  "key24": "5QWH7mXjLxPxk8yHNqET8ZBZvrkWWV4euh7bBsnJusaYV2npwawjvnfo1ysJ8nf4NbgyEF5uKazxn9Lr15jYUngo",
  "key25": "3CMh4rEr6LhVZhxbEASUEHHm1XpLVHCZqgok79tMrATjhuu2Dp6QDd7cXrKRXeBUiZZ8vUUSCPWGdUuVwQST89pM",
  "key26": "61zJuFuedc151bKM3mH97e6eemeLtAxzjZxRVYMrq3BD3HeUoiQ2NZFarhF47B9hPHiJQwHQJAYxT59V8JKL8ELE",
  "key27": "439ocHrfbx9B3UXEeJYXcy9p6UEJcDSQkFLA9z6DwVg2WS4HLzZiMVvSzrPmpiz5twQp1VCAKJd2PEq4mC34T3F7",
  "key28": "4tMkK2EGCDLU8d9t16w58LJSj4NyzVwrRcZhnsgXZZrTLBeSjgzTVk6yf8n2eEfTZ1RLnNSXL8vLhiMphGAMGrAB",
  "key29": "5b4Txssf5G4tKpHwP7FtyKAvZvcYddzUugSP693Rgp53qk8Ap8BquSV9b3ZTVu1y5bT6yPeZeYqCGkMcFV9F1S7U",
  "key30": "4GPrckFNGSeq9wiy2yx4vN7EQvYCwqiAqjyoSyj7Hs6aZvzUo1PxnhotJ9bx9H7mtb2DUas3JWLokMgqJjjayLBk",
  "key31": "5faqyHWbhBeqEHYttxYA9xP9UW1NNDZgSm7Au8PahsNaogVaBTNqgSMMJzzx6F63dybx4ueNsEtZr3KoueNWBwnB",
  "key32": "2ppBE8NYD7usruYMe7sET1eEkkYS4iUojLqyHcyg58upH1EXbHz8hLoqDkZp7hPAHB2NvikKW3ViKktYNV1fi3Eu",
  "key33": "4jZErCGF8NGmSJ3LNPaG2xvcHArcbT5gMFkZ2Z8KN6JQJuf9gVtmHVkPGQZiKWbPzjrqfUnWXjrVnMtfw9NKcnt6",
  "key34": "3KrkRgutr2n1vZWLK8nJKgLEKJu2qUjm6oz8cz83qhQUxARt3Z6YNVxNtkVyeRxsxQpUJraoFgevo8if2rBcBuxw",
  "key35": "QXuBZd6tmzjGpmqSYrd97bEfggCMd1aX65L4aH1STFBToasAmubQM9getFnqTcgCmE6z4g87k6iaJas5shUFvZF"
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
