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
    "52svPkjxYfQ7MwABFfhFC8Sy6WMzzrqda7SCFvWEnKy5f1eqNJVpkWXdiP9Kfkg6GHd4NfNpHKCi171RFQxvtZT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXESNDqACu7u6i5eVjWgLyoZisJQG4PTrshNL2jW71XGYDD1WozvcMA1GkPMmcgTvikKEXiv3eCtuPcX8MBR9x8",
  "key1": "3hHgEFTnuXCcaPeZ3TG2FwoB8uuXCqtjLkNQNVnidbRvoCVgPKreMNUrqgZxazxgBKneHR9sQQf6NZzKfwxyMAPN",
  "key2": "Zu941AcN8RiobG9WRdPcbcNcXyaR8zxB5guv6V9JmiP66nCQXjr9bZt4crvhhiuURn1LBFZfMvSy7m6EUpNnJ8t",
  "key3": "3iYSpYMMMRnnkRefY4otGE9PyvWiTEzWXfuACqmS1KHyMoRuuLwwk4t4sEss7vbV19dHgt6LFQbxTCiUQXE2F7UK",
  "key4": "5LESdrZG2fRhXqn2Y5UQaWvpwN1Ha5yTwLfpsDe4vrfu2GsffoodtobFp7i4xzhAvw6PfbzKTFuswNVW2EuvmPbG",
  "key5": "3rP15n2TKeMbToShYgxRPXqGLbyh7L5Tbq6y2mKX8J1CuVbgWRrE7dkDq3PgF8GBgWmewtdVfkFvzhKQgz8uZkyG",
  "key6": "ztJ2ZKVMwVuBDeBZFKXTj7gWgR5da8aHn7UvdWyVNYHmRgA54H5DtpmT8vV9qFTHBkzUC7B6QJCkcN6v527uDmE",
  "key7": "4xNasHry4bGouMpfW9FHPefeTghHCnmoKeyqKF3rZSZ4rcYmqy3rv1EY99eDUKMiQTPPHAxtmar2H6c2Yh69hma",
  "key8": "5HXCTGHNf2mBQwJBc9qXeTEkSMy1xqribxYxR3sCcefGzjs5d6YkHJPLaSWy55rXgcXrEUcza4FDog87WZrswCpw",
  "key9": "4ejn98g7qCe2GjwAp6bGhAXre7z5e2eyuqajz8tVifY29652U7QuU5wpjx1nu6WYDzwKmuqyvU6tHHAM8tssUwFr",
  "key10": "33xCUWiup9sCnEbNensyENtyX6PLqAXRWJuUi6FUQDMx5hCaP8ofEAxi3s43CvKBzcCjrYxid5QesS6hJQvm8sh3",
  "key11": "51GwNpWid9a247zFNsrnnjLMtEuGQ8PjpG5dNUb1BJRzSiZf1ZqjQ4Xao1sacTZv462uH7ovDDdvU6nswKdMmLU5",
  "key12": "4SG2WKwxLxnMETi4kme6mMEbQuBfg4H5b3eAX7AMZFFH54Uiseo3BiUVFppsTLyeuHT4ARpndbpCg2E2QFjcnKH9",
  "key13": "63kY8prWbXUAgzya5hYC6rHeA4edYg655XRzmRmNMmdyL1QjEpbNzZsaMrPzKDZTRJ17kXMGdUDYSAZ94JgTbt3s",
  "key14": "2YansKPMmNFN1Md2jcRCXCfM886Wm6t19YZjeLab8aHY1CJoyU6zAZaYsLQ8wpXwqi312Q2MxrCcpfALvehhzhwv",
  "key15": "67f8dWaVyCmXt8NTYRDnZEVDX6P7mCLQm4khpRAJs2yGw7zf5NVRZGAUJdpnqXRsLdUv1g2K5PdZay9hHL1wGZH4",
  "key16": "4JDaiJZb7AbksiAG9FGmpkZ2bRPFUwzejrgeqtBtprVkc4AhPHwBTDR3THa6haNcWBPvQdax5fM6kWv27hvidkSx",
  "key17": "3DspByXf2TzV3rJF1SjE1whGRcVdsdHPnbRnnW2crxtx5m4CJRWRAGA7SdEHbPrfSuYSbmnyczvFAqM8QcVLTE2w",
  "key18": "3bwaRkwoj1i9dHqk49b3KDFQk8ZCv8dHDj6P3DL5JLtYeJtQiB1ALhxxyBp9uZZw5eZsyTYG9TJhp9JsiKb8v9zT",
  "key19": "5aZ7ZfuABrG66Ccyg6CUKtpk5hrccwqomT9D3eeGhbcoFKm2Lmog4gwXh9HcDp1aTobMMPkzRVobKDMwNVjEYs7E",
  "key20": "4qC1KDinBfrYcA69rTqHen3MPpmzCugKMKtGopjP5nXs21zBBufvxJtrFjMxzLYbsZxk2LeRuf6prbGKNdU36Woc",
  "key21": "4XEBPtzgfgrgC7AvJ2KJGMJxUxUM3HX61JS5bZAoLpwWvDVUNYowBFFBRN7QGxgXLXncoFGretdcmGqwMscLzt7e",
  "key22": "3tEfiLpvroU9v13ZMkN8KMdmSDeFNFxmLB4CWNJ129oCmD8DRnat3cL7Zy7XiTSiBrE3nTPr7DExGvwFgyCjveQS",
  "key23": "6T98LP4ModgakY4fRhi6XfnAXj6EHjXXCUsyFFZYtEmmf7Z7xGML4iYcVBqiTVuKsLw7QN97To357eKX5P6o4uL",
  "key24": "5TgZMH5PYYoPRgby5yapGzGUNPqjiJHq5jJw7xEFAeBYgBuw2zZoHuHKw9ffriT1Z6fhjmvDr3mJK1AW8eZgQG8i",
  "key25": "4KeA8EtfvBU5eakvhWu95rUgHNdHLqtygpZpNQms6XmLmSp9GQkMvUXrkU17mHCT5uWTZiGQb9jXW3rCDoCBxKDf",
  "key26": "LCFtjkwj5SGx1dWqgH15sdQ4ph8er11zqezQc43ju98niMhGdNUjmrDh8iWh3ebx9c6aBpFCb9mo9NbZx5o53Lh",
  "key27": "2BNPoGaToEV4SecGMgejXCPJpvvdb8xQFLJVbvHxVRfKBtNLSh1UDzfnAewM7xUHUgW5AFqJ7C56p7DpDrtKuiBV",
  "key28": "4Bj4C5ffjyPCPgXZzCqLBXBbAsjJvXipGTacvjVTgJ7hvkFXs8TiYzRbUzg4Dzg1MzpwCBZaAxTUJxz5usdDV8VQ",
  "key29": "3RG9423ifhQcGisJa3BYDFADRqUjayqQ1tehCSRKmacxKigY27AS37U9yduWdiq2rhUyBbz7YdpT1XZWdPQBFUEB",
  "key30": "5SUDPirsowdvDnTE7EZR5w778csc3iPDfAaGGW6eBBifqP3gK6JecATpxBDKLjk9k6sZ4PsufNupiTWGh7zfBwMi",
  "key31": "2SSKFQ3ku7ujvX5esdiHniGf9FEXZLUK5Uq8ccxP4mgoSEKFpF2H4d9XuRfHDqGLfTZfBP6Q8P5j7xhf36mm9x7h",
  "key32": "qniWdaupgjwmpF4Ptjfhk3twqhRHFRj4qESVipt8wMGth8jTWPmqmX7uMQsbcEfVrejKQ3xpsZwmQaY8rQARt4j",
  "key33": "5qEUPgrEKBxCbgmrEca58j328B9TPLgwSX4QJQ4JeUR8q1T7EnfSKjRhHVhB2wVQQKfabzgRyojMZ5jtDpb3PNET",
  "key34": "2vZRD7P4b7aUSoEwC8PqsXtzChMMD4HktQqQp7h9b6fxmLLGVwMPk7wXmr9rhNtJJLYZx6SSHQ9zC6bioJCXxAb5",
  "key35": "avsDWM5iwRhu5sxQDyCwATuFnjzuBcqnS3owvwD1iHhFADow8EAfho4V7KM1txNFei4YnoFLJtBMiaJsQgTpDzP",
  "key36": "8fsrpENhL6Vr5CAoPrfD7ehCGZgT7wVc8A6tGUMr7jLydviyuf6yRE7uWmSttcqu2BxXvdUsz5bDJ3jNW1UhHbc",
  "key37": "3mZphkkCT1tp7q2FqqAXsH5Mrp36jvChd6V1mGziXwW6VHE2ZMsZNQf2TrTKmAUo35jfHPRNxnbrDxXwb5A7qxXX",
  "key38": "4YGBzJKWNYfmynz2BqMAvzX4CyWc8CDWRXYFoXKa7RCv7ntheve6QZbennbvQ1Vqqq3338UkZZxeZBtAkKrDE9Tf",
  "key39": "5LdmNzG6jsLfzJ5MBajx2RumEJzFkaKcgTemJWnr8mHg9Rg1MA3k7XjhqCmibjz49zsbrVxvNr4gPMDirScvWBNa",
  "key40": "3kaWAfwn2tNmsdoMj2sZoqqbazp25S5MEK2CtWV8M67SfJoTwpm5oi5q92AYYSqh525biCQ1gqRe62jYhftzHRV5",
  "key41": "LwhGbUyMX1QQEsM4eR7TfBWkGMbRHBoYh68awHM9WrDRxSiHy4eLBc8dE7uG9Gbp3c1b3sjrnUeFax8YqFyHBCq",
  "key42": "4bivxb1icAUbLEevyRsnAFW2RsTrNPQvNHnGuhiU3yiX5Xc4MDXXe2m6oDVJVtK9XrJM9qLaPkuqmh69FNjxuoT4",
  "key43": "3eLMjSv1jQqCJ11m596XycWHKTfEiCxkbjqb8n1xgpKQW8VyERceHCb3MLdTLimBngxcU378gjSDtxcsTmLPoxvv",
  "key44": "pEPBDeHxYhvtLiB1HMfaVswAgu7gqK42DS5TKmkWdUjYh8Nmi7dt5ujrs8GdVm9hKX5ygmRAvjKxpomfzTouPpx",
  "key45": "326CqpATHZY1ogEtezKQd1tZLioBhjZ6qJdJHnH7H7FDYxFkgyFBLYzNVTZhYpb1zx8xJMyyHyatveX382e6eNpp",
  "key46": "5pgXW7siwRXLDFcZoNLy9KEQV44zGEKjhjKF4p14zqDP9TCGDbxSYKx1nwZybCwvmti4TK7Auxq8gYY9JaMJ157q"
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
