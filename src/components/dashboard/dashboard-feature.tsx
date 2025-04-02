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
    "3jyUKXpBBrvzAAxxBFBFk6125XCAxwGoFX2ftoJDeHdvUPAs35KTFvRKLyqkXm3U1jzK5TVKHdWc5HZ9G19NnkRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pk4iU6yzmL8fRRVAL6iJ3BDq5HeVENmQkg34ZVymKuEXaNPJdjgDWwumteEJc752Vr7jzeWpD7ZCdHyp6t3NfVX",
  "key1": "Cp3YSCZyvi2mWNbFQ1q7xsxAfSyenQfPhwg5BKxudWbMV2NEbsHmfJm9WW2ywcnT5bUAhHurEty29uUAA8u2ww1",
  "key2": "o7n3fL47w1nacpuUNp4hYiy2dJAgrAFWqvaAL2HQhp5Leai1CU4Q8T3VL5ZAysr9uxjj3bC3iP3Zbyw1YaLH9Kv",
  "key3": "3mc5raycfYcYUkkaZrLZJGBJrvRqQ6XcVYdAFf9tyepfVJNkZAZnV3PUWX8Fd8BFHkhA6nZevnkiCztEDhnvkoch",
  "key4": "2E9WXsAm1cCZGNbYHMv7f6Wn6ho48s2wGUyeLiMsWh6uZf4fLdvCoVqFN4hB3wEXKYrsFTioLiHUpUjMWmephtVp",
  "key5": "41vg62xqQwX1EcbMftnjmyP8rcMf8yCXEpSqZG8FM3CT68ZyNSY5v557gyY6sy5zLLprTySMuYECmLXTm8RSpSQN",
  "key6": "3P1NGCXYtZXGWyvJWXQxqU1JyBjxeivkz5GuoNVTcH2wAcjPd7gu4mYycCCRXSjGoB1y7fuVjwTWhzycqAvjs3Mg",
  "key7": "3mSXfLZdHJ3zh8E98vw36uK9gbSzWgWDchbKvArR1uCsL6drFZYMUonE1S4AZW4o3ayEryzjuns4h8pfSbqBdWyh",
  "key8": "2z1D2wng7hjzNuLwPxKawLW2sn1MgaxDn6zagN3e96RmgTm93c1tzzxNoYfowq7iDAx7Bq317irMKsaYVGKKiAZL",
  "key9": "65h2WWGM9u2hswQmCMibp5tiVfQMDCzsDK7iWCXwoXjjuwAq4tVps4TvTQJ1PqogSajs6WaXLchp2mKg1ecEuSXV",
  "key10": "tvmBqgNadXHnV8e3tAzCyMNoiKG54aPiKhRuyzdwcaRgpv9PrPhUAnQmEqam3Ht1q1LzFXyurNCoG96okL1raUK",
  "key11": "3ySWgANksAehVUdsAZj5xGgvd5t5Dpi7kFLwJ4heF3agyXtZUfLSqJMyRFrV7nfAdfCh3g1owZnWFnkapPA4GRhK",
  "key12": "5w7BHKyCPzQc5BKr7KEwYb8u9ebKRHCLT1SEfVq2YtWAiYcfLDQkFGzyunTh1VGmj66dvQaRkuPTPhdjTL5u6Cpd",
  "key13": "5xpA9ikAwLLMVg3p3qGqSXjojEYu8ctGWR2zki45HDMGNENCEvJbjC75iqkkx6Cdv7pKGySCr2AHbL5sB8X9pHS6",
  "key14": "3YGXGDn6oHjWZHxNF3qNR9XKiQfzGAufoJtHyZzTunyNo5Bd1hvCeDkXKfN8GocxB1iQ8gmcQZbn1CzV973uMxvJ",
  "key15": "4gBP7x5JJvi6meNMJtSX9uVW1aYCXCvoFiXDgtwW9fpEbJvTMEedKAKsnAK6s9Tjm1g6vPrh8bUwxnpE2xahEBBS",
  "key16": "2PwNmxv8oumqofCLfncHH7h4KbzK6a4r2iC8it8ujzPC13rgfRijainKsTt3grHfNxnb1ikiBeL7RekG5ftKMjDw",
  "key17": "jVwf6oseDe7LzVsj35G7sSWwu1qx2T1wXBUkBpdJdAntwk3MTENkaJnmN29NSZwsFRCRhuiXwvXcXkuu66i9Ex7",
  "key18": "LycEMwS1TCPshFPxyGKfNBxjxbFPZgsrKdoNc9a1oiEhYMYRkoLJNxvvez6qLqj6vJRtFwfcRHhGmTzc5NGuXFf",
  "key19": "2trTUxPNqCNtoCLCYMB6zNtvG59hyPjNrfi6A51yMYZLVBUEMKvTgccYM3BPEEbBmpBb1Uph2QQNJXppnSekPRfg",
  "key20": "4nyycDTMM8Qnn7nBY5Efg43PdiJKS4T94Nzfa8NQ3pEBtRyx7tADKmq2bjiuYPM3qtx1dfBxDhFTkimxrbSHmZ6r",
  "key21": "cqPYsdk6QJyaav2XtyiiJQUzGLN7SQTvk6s3R2NduQoHvzKPo6e8TiMWPrAmiCt1TZAiRmgWgRGdWMEWAVeu3GE",
  "key22": "VKThHjs1YL97bVmokumTPnkswzXU7ahcFgP3BUdasA9tg8iJWk896bh6aKdPCKTGsZxymhnkhiT3yKYdnj2CWbg",
  "key23": "3sgBAzChiaZPcpeF8dbAVSbzJnDuJuCMcFbtm9CL5J37p6he15nHDyknAKrHt6mSdNKQN5nQFr3nLwEZnb8GUGH2",
  "key24": "3uD8oJhHpVDR5XC6mwssryLsBoCCnwMVD9gaoShvCQCn1qBupEJPaXbu9bXR3RukQTtG1gEiD7yBayck2mDozmNL",
  "key25": "hY49a3iLVUY3HzhKkGF9kbVwao9TRVnMAmtRg4cYGD4AHtYN6wCvJYKAoaxxgtUr6mUvFgTkHVCUAYt5xw44nrf",
  "key26": "43tAxebau9Y7rHeMWFsurw1kfneUfsmyfEbzYVBsSfF2PQULhtc6UdYN5946gqdKeAGW5RmAh4Z9yMQg5q6LaUvn",
  "key27": "4kWxZFFks4jZGRN5UkTp2BnYcAMrfZdrhsQtAHs4bKtSmaJBBVU8tGPjkZeBKJV9V4pyEvdvgeNAHsCgwCqqmteB",
  "key28": "5pxE6xFQVnvbrFsqvR1R4zFLHQsTk74F2yev1qxovKJMQ9zP2ifyQ7eiRfhb39MPic1jhLyfD2uUs7Xf8Edpk8WP",
  "key29": "XYoNYwDeyaWRohT6VKS3sRcyRkVk5KrwcwYtCvAYLdKHwP2syrsodJEacYBnwsM7DnbW95BxdYCKr29nppK7FVD",
  "key30": "5K2HU5TgpLizq5aSmjDyMJDT5ozp9aZKrySdovHZUqRqYEMKTaG71rNYfZvTW7WdjaTfy5GkyR61aFryFCt963uU",
  "key31": "4uLMQcSHZuDudNMcN6v8CnGaKUsZ14ydBtT8yGRec8FXFxz2zKrXYkoxnkyrvWfwyzuJTQBsYQRFiwDGr8hVqSwg",
  "key32": "5bAkGxPXcaJ7CzormNrQoXG5tDbamTPiWaHmzv1Cc4UPCoHBLMX1UqJ8DpxC3RPyGM64nPGbhD6yZ4DuWFc835xU",
  "key33": "5J7Hkwm74Mvek4qNubjix5UXsWvHQvUAkv4Xn9hvLPK4icH1TikWkdYTF5LLNKtQXTfJxExh11W6zwCnXeSvJ4pi",
  "key34": "2cziw5XZticNb2sATgei2QHNff3848t3FgUgSXaZdpbJ4MxdK9p7Giq6TeUiBW8YhM4gvK4QdwEE86RdyLDmLXcT",
  "key35": "3qbNb2jVgJZCV632sMtXPqhhwWV4xhbQ71p56kAqpTHjWSi2LT2Vgk7q6VnKQF4tkMJNSH4kMoMZd5Lg9C69a73H",
  "key36": "5hnGAmbAx6VQ1BTDSRC2vCuNDBGyQgHAhPwN2HXzFnrDrjLhYZo3t8pJD1UkrYomFQEdchR6L3MK8DoGpwbijxjs",
  "key37": "KR42af6y5UH8oXZ3orkN9KLoZMCZnQ1NVqpM7QS1bmBMwt4oLoha88EWKL9Pv8NYuZgTPdDWwwXuMYhZVzbaMqG",
  "key38": "31Ad29e2b3Nz8vNuMVsPkBaa5kFdZFrMwLwFaiDLuRESn6GSjdBEJtofUoDtZTtLm8HgsRqJnEUaUbUJ4wSX1SDk"
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
