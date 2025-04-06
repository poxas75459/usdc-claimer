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
    "4cbh192hqzdqzXwGMYMNZvLB3zHCQfaoZVtEryubbh8KQW4FT9QN1AFJfw3RZrvtXVtwiqhdvGzhY7NW2jiwbALf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZVhTzoHguhTnmFezRNXB19uca79MyMcN4LMFTC2bEnvBQ86Xc3a1RfBtwvqkHVZec9UczcxkdRZ7mK9WfRbe3P7",
  "key1": "51U7V1DXpttTWHQSeaXPMnk86Bm4vU4Y5pdN9BetyUpZmTFiGoQsH6b8o1sW3g6vzsmebLkmccHwaMYJUx1R92jp",
  "key2": "64EFE8WmTbT4oTRUrijoZbe99E9FeC8pMqYuD1buoXUgDsgTUM7addXKwFChwmiwSUV1MLuEGkJsmkhVEwy2FwNW",
  "key3": "2P9pYKihrYtEyQD5y8EJKyduGvmt8yxbqy5DctcBNRVLSmKmg7JGBdbfu8buSccfxShbfJXnKM1QQyyLLkzydQrE",
  "key4": "4PcNLnQybheAZTanmkxRYLymhMyodPRNdrWatpZGGGZ4Qb44KThjJJVHjqCcAwLo2dY9JigaEGnEiitGk1siPtH3",
  "key5": "5iJrjQPXvN3LrLTygb6df1y7CWxFpbXP37ohDHRspgVJwJWvJjgJ5ve996jBXvkrzxVsgBkUyiZtASmznif8oSqs",
  "key6": "4BwXEqHaTpCXGNsRMzRG1BT2r9N98PdeDMn6nKsxnPmk5UGB2swVitmfQ84sbSaQRK1CMstAUKu4y9WnuhuzZRHZ",
  "key7": "5UjNqMh9MEw5Fg7YAirMAfg3nfQkLhHkhrLGaiBo59XqXgdddJ2mYBX5XEVHbCFkNZhJJnBiFB97SxCmJ4422e5N",
  "key8": "2TMBtn8zGr8Gwb8KrUqFm82gUrv2DZx8fRoaFJSeP6BciqddtiRwaRjFP8LhzaMtd5aS1j2s974Nxh5NjZg55HPx",
  "key9": "3EYtB1CYSBEJVwxZD5K7sqrLWvqupxB7srb4smZpJwkxJYxS8vrpYb4fXrkitL1BFwunKWdwSB61UmAmS4BW8NE7",
  "key10": "21o2x9b8UkXp2NZq8dppJhVM8X1VC82dVotMTZUpWik6oZ7FAXfR9wuDBjd8UKfuG6ZxSJRRJbsL1NiLyrTURMx6",
  "key11": "vBVHdSZ1i7xQiz17qoKmcdH5eR5pvua9gwbjEffQWCWpMX1SemXWhGMyNTfJb8EVeG8xkiAnkgghWjP3Maz6GYc",
  "key12": "22DgBrzdr2SbGLnNcLZyGTHtRwumwbTez1ChW5gSGDoWnMxa7WvEex4us2Fs8qi6AXy3pmrjr7ZiCgEy9KQ8M7uN",
  "key13": "v8VWxXzDMvLKWVcs5ZZ7JDqDs2rurqSJgwzpMurVDHm6JGYVfca9T8kxTRJqfBXY5rDb35BJ95C5JDCKSUrkJaT",
  "key14": "3sLSeF88UBZCswV73KCCa89VkAbvn5Q3BSh4f5dyboN5unBugepyFRssWqhxr2WTQRp4q7DpW5E99BEuim844i8A",
  "key15": "k7PHoR84QjPx3UFJSu2JQyRX6KXyB4urwZW8YhGcTF5ePTvjppZBzRYLSKjE9cKBKtCNRqfBcNTPB5mZkru96ro",
  "key16": "4rgnris16JtFx1tfM1ZDEx8x1mS2o7rbvRKC9NcW5SGL4VMn6jtqGyp2bEjXyoFcft6LS8fWZj57S9DEv8isKCCV",
  "key17": "2jrJWzbrr4Q5H5KruqUMJQ29g1akyWEQwKLtTh6TUM9a9NxCcDqpUJq1L5M1c2NFmVk7ME8SY15cr1PD3PwYVWLw",
  "key18": "65eRksTu58FKDt8HtEcxNHRq5qnM82btQVPnR9gSQbM5HMqCbB7MjsSAQJsSUxAEn7YNRapcvyWi2Vk3uPFt1z4f",
  "key19": "3pxrhSUmpM716noo2Yhg1LpcbybWWoH4LHia4xzmsUrjCUCcLpmfJ2KLrrWrh3EdsMzryjWcsMkuMjYcbEpFdovx",
  "key20": "5cGmQBjKHhzQQQhJA6eV9yaGkhMsuCXK6GrFdEX5K7swqsvbZrCZdqGq5DtBapfvMHsV864XuQem1J6yMerQCoy4",
  "key21": "5VjtqPqMCQMnRBCqiK7t39pmEUyrYQKUHgCPfyUtgUgGkYDJYGJVQx6TGVUka1SgeGkH5H6bBhJzxfVHuffbpEGB",
  "key22": "4tTez6GjPvgyL5E2NzbXRmBaXVfSk1Ghro5LNxb4hdiLTM1MgLWLhHnX5GmKAdr11wB8odHucFJDe6xrmTfzd2wH",
  "key23": "HQQSAXGZYB6oUBnoXXZoskfX8FgEDjr9i8zHHY4m1gyoZLtW6k4d8LmMreSutTgjP9o2yoZMRckkNXYxU7h1Uqe",
  "key24": "w4GnUS2EGFTxYToNL96WikfWB4VqDS3yzfjNC5zdLXpzYoqmxzoAhqVpgxkvKktrC1MPcQDNsA21xpARhe9kZN8",
  "key25": "5Dg1xUjsYd9tAhjSA1N4YCPCSfyUEBuTP5EtHn9QRPAFypdddvGpPyJ7PEDMgj8KgypZe3hBLMAY6ffmUFkmo7Du",
  "key26": "2Lgu53SsvfvM6dZqvV5KbQuvLr12NfWLoktkJcd87FXDajc52P5qxHJ5SaY8Z9fAbwbpZ4J2uva2baqWrfY8RFVV",
  "key27": "GH2YDxuRnAxLXqEtGcezP71JkJwSZBTzwTQX2WruHGrnzL4KkfqY1qvvBg7j2fRoaP89p6EkPZ4ViAjz3PLsqDu",
  "key28": "42Ck28jBVf3aqfZUq5rP5NQ87UwCWpArUT2SSF5AXWx3JjXzdFVy4KJicH4DeMR84VBF8HXxaYkNquzeYZYuNgwD",
  "key29": "5Rhe8yBwafd8ZWcBZPXJeLwjSBcEx6mrMdSQB4QYgJ2NpPQnnkrq87FhG5tDLPWr74P6qyqP8WTijrbGiuY9P2Mn",
  "key30": "kbgiw7UVXKXVXfQHFhasYFYSmsmP2gyxG6etChYcEq78byGymLghUYikkQhTagVZ4Go3FncWZ8xM3iknkhiEuvt",
  "key31": "Gn8HytVP4m45D2sHV1Djpbh5sB5zj6rk5P8hDPXoKjirLBR7TVNz9iQejaZr1mzyCYRC51AvT37tBrqvciZeQ29",
  "key32": "3xoJmEEHH7LUjPZiPtrJUhwQrVSWsNLh7JKABkrHwnvMqJDz8qruPXwGr8JizfojcbfEYYhfq9gAdw5yXWNKPMzJ",
  "key33": "4iR3tPWgsaX4DdS1YzZsXhHRGG8jTEpVk7WNKt6DD8dS2NFDopfFmv8pDLiptLEccQhrZKtCLUKxAXebynB95sDE",
  "key34": "3mJajnwAhyw5uq81NvjsREdp8mXuMvXomWzuC8ncYVwNW8jrwPorEdhJwFi1mpgWZSuuBYtNXwXQn2w4EAzc2RTg",
  "key35": "3Tn3QUsnxAoDtv5hPNPhmVpw6ey4MfDRBWpuZBoUi4LFEES2CGinwYJcR117kck4VfuW58w1eFYcRgqb1XUMoQzx",
  "key36": "DDqHDaLNJ1hnF61ubfUKUj6pE9qjoCG99oPemKENn2cS8GXyovBC7NgGQzP1Vq23JvRYyc3MXyUQsrV1JqP7P7Y",
  "key37": "5VaYRkGUUNEQM9KkpXLtVRMguv3S9APsUjV7mCTCAJcyzum7Cu5ZTHKK8RWrM9ygPyuy2KZrk78N4s7oBNFQisEX",
  "key38": "2SaDGCh4PexP1PyBrsyUa1X9m9oFdD9iDudXf7NZSAwrHAuRnMvPPg5D6ZZVL6PyqSJQMmpfqacquWzBUBBzf8ZK",
  "key39": "3C1MtunvZNGLeCasYW3mdw4gg7Hz5yE4qbrJj7AcGju5HfD5UwidaHBDPmcDGTqaDPQqZKQiNrs3ynLo9xNPQM7S",
  "key40": "5A8vmn7Z2pzp6n3FmriLLd3QQDGQLKpyS9gXPJJ1Q3smMUTcJkKyJp8isguqkYRRdnr27DYLPPPwqWSBHtpRH7yZ",
  "key41": "WexuAnTy1LnQiQAxugAQ3XSDpDaVR5LvgH3Yc5dPCp2rRu4ZMc4my1d81BX7EKiR7pmwsCcWQpHnHzkj5LFegwk",
  "key42": "5M29bbyXFNuJEBHb744BAJ3rjE4xEouuAaaKfVqq269R8mheFo9wEGaLjQ7uc5rsqdU6opy3Rwwq5B8Yvirkhqyq",
  "key43": "2ik1bumW1LkMxagzqJWnvwRzQ31w1Dip3QYs7ehwj2DYc6mjytcMSNss5GPHuCSpR9DzTkX9NvmCQQ55FCra92Nz"
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
