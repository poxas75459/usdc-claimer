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
    "5tDX4RkRpZG5TRKdZfgdJzvxjWy7qXV2S9Xe8ZEfPTAnS61XryyjYfh13Yf2uT2ww2qwLrSv6j9hqLMNuqDpUuf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UoHJLyjvtiixNEcFFFFesiqPjJhsKSmVZ5PWjn9xSedumbjvCfwg8DtwHRkEu2hxNZzqw1WwfWpoZyCBv2KmkMR",
  "key1": "61gps45kXU6Hx8N4yxsQMfVQmwDU2SHVFQR2gi35Sto2sVikDtTe13CpBsFcqy1fSfyvdDder9z9J5FmkWX6UVGq",
  "key2": "5Hhgz6bHaWoivTZvDNZxrCqodQk5hcybFFqoND4zybG7ATnsrrgTZYrjaXWbWF9fximHXYZW6U2BTa452QeTgw8p",
  "key3": "21YJdsaSEtjfrcRco74QK2cp8PdQYysznpTUgJiiJjKHTwcr5R8EgjqBYi9zwyCV2u3i6C4rJ82Nv87vAzxpMZfr",
  "key4": "4bSVMo2xrKXHZ5zof53SJ5T9CJVwtvtw49UftDL3BACW9GGjLtXqGsUdmvJa57r8qkxJhFsPme9MqSnkMmeXwkaC",
  "key5": "NRi4LsdENL3S7BWvdNCQfgpsHxguJToQEW1Zq8eg5f2xUVwJo9XbYcxp53X8whZxt964JCcWpCEjDocPgPvj46E",
  "key6": "599vSqy3BasMhoDycFfMbP3TwTSUTTxSSQssL3aDjwHnTB9grD1njZM63Dx4cykj1tvS7dbhSBUFLLAGTnkwfAzw",
  "key7": "2vXW1BdEtyJxN4RtjSRY9fA26juCWxxyhVVTay8J5BY9vLwAVMmdKuZbHj58v5wjeShBJMvmxjKdT2FwYNccHG5Q",
  "key8": "3MJJG8MqEmwS4YNX54mRY9urwdnQwF5fMcb6Yqxhsq8kBVBEado6ZSDwVhs5PLpJwppq2XXxnsvs3nqMv6BxBLbq",
  "key9": "2XS2UgauT8zWfZZ3hLBtKy9kfM3G5UqSo7yeNAk3LscSdUw8ZEzMmppRJCveH4t5ALf6bhStFfBbrbVcZzq3y5Ku",
  "key10": "4RUh7pL5XGPofm1qjQ7jE9pXYD3q3hX8TuzNCBmkf4CMRTQZ6DUerVZtfRf5WBGqEQkQ6Jm2gjtqMwUyweJd2Tv6",
  "key11": "5UfqkLnZTLykygsZJMNBvtmBZGpC9znjbhT2oD2EsGZ5x9sVWhr9bbLJ7R6xMwRaypAvQCfFsLorzgSV5obuqcWq",
  "key12": "ttC7A7cQrS27fS9z3JhpMvnLAo8UEgqei2xDdy95oJ7o1w94XEg2CYUnGJp3YD8pV4xF6Cd1bYFrtqycgjjhiQm",
  "key13": "2HLFiBtyDbm8G5UsP3gWbv8QUT6esx6VsehVwJLYvuMe8S7dMp9a3XHizJLabJiJd2j2vRhnP1BRWvPbyGGBF7Bn",
  "key14": "5ss2Uj6ZsPhUeincWm3Haj325Bvfyec9xs38bJqrQWZqYLyXXfZgWfMfr3EcZjojUKgayYNQFwsc1EUu5JrAwrnW",
  "key15": "4NUBb9ogjxQDRJzqyERH54GkQ1sTBVQ8xGDohX3DGecyjKswqVnzjnEVGgB6dyGJvHDPqzU1ZBgZUGNGFTajVQTs",
  "key16": "2aSTmVWEnJzSprVJxY6TV2mNGXsUWkBjia9KtBdKiSmtzTBo6M4w8ad6c7N1QxL7pbdJrMmw6Z5M88RQmeRduZRr",
  "key17": "3wqZQDKNsRe146qnLg4jvXcxxVrXXZANKBSceSEK76nww2b38cCrLcjFhD88w8xpf6EXkU4YExLHrzbzFDLHaVv8",
  "key18": "5mou2h8y1RtDWj3Bz24MVNCzNSLncaUdJtg8MHM7f87aCESJEbpuBBVN3oarbcnConYt4BpNouwn9WJr4ko2gExA",
  "key19": "4hsx1SGxS6Rs3dKADnEzmimdHUPMorrr5Dkbxiiu85Humq6kNuV1PrHcX5WJg2NUxQbh4VpP4jFjipSN4aPJtW1E",
  "key20": "aSuDsU5T8hfa9C7VforMBJUdA8PsgWBAYXQpkAqfnGoyrER1BnJ5pMyfxRN29GKEMAFrdoxr8u5LxsTysZwmQoQ",
  "key21": "2jKAcNLBSjdpe3HKbJ1BX5e5KH5nWAPn5e6TDhoNDgGQxfpA6tEfeZeLyEEZAoQgkmCPuDPZxyANMKsDKyq24pV2",
  "key22": "5bCgtDpYSeSKtupUWZUHT5Ua5HC3xBHRSsRY5tGx8Yv4RKZDMPnXdV3H3C1dCxF89e1qirVfbpjMhMN3XA5Zt8Yy",
  "key23": "4PJUgGH5ARDCieCwA4FmLuKrAfQx1xYBC2QkBaByUDgCQkzRACjZMhcbuANuenpgJzzPxMTdCXLbDYT9uf4k7QFG",
  "key24": "38gobToC9BhoF8K9iSK9p1cVptFqnqi3pjQSprEE5UB85PfYZXHjuoeWvyMWVU5XivwcTEBegQt6VhTAkQooPsTm",
  "key25": "kNMezBqdQswfQantU9FWCb2WGqinC23HyHN2FcK2Y8D1Aof5xsiHJimTjTZDpAQg3xKBjfYoEHAAr78JjD9N5SB",
  "key26": "5FNqrc8wxTv4RjLyxEjU87wscdCsconmRdQGfmsLCp5b5qSci2rqmCHUNnfJB2GFUD46Fwt1t29u4i5iUKZbaPsZ",
  "key27": "5me5fGgdrAu6K8Fz4ajNGSQVVi889ehyBeQSJCXRz9Tu74j3wrdSufMZd2yXDjpNG2DWwyf8T7jKxmk51MJgBBeZ",
  "key28": "3agq1wt5wfQACEC1Jzn4KPSsEPqUe7xEeaCYK5Dskv58c8pSvfYAndivRFqk26skb7ixDZETDTvx18LfMf2TeTsz",
  "key29": "3fLaYdwmx3HRi7XLLqGHGeUriyHoQSpKRGg1p9st6hVib1qsUmGMmxCRv1te5jGPkbFYA7NFBtGt7KTWR7D5A6xv",
  "key30": "2dmAzsQ4NKZh61Z5zJ5XKoZYSct625bSTmRs2AEC6y2gF15mCvh8uzpTw7wS5iQ37ZEtPBejRWMBynfuigqp5GnZ",
  "key31": "5qhBJYc9cA5HobP3xbLWtJEivMCcHACjSXTkrCmh4wPik8BF8zu4yLJEHiHoEq6rmrjiRFPtyzrQyKGFVdhcMkMb",
  "key32": "L9XRiFhAjD2K3g8mAXxaXwFJnSPwZyvFWVgbSoURQha1HGFM46La9T8m2yXhhLbLcdjucqi7mUUFewi5a4SywTZ",
  "key33": "4kt4JwkfMniNEXThrZy6v62UbwzLDQZsYZMnyZEYUYVmMpjMgDre7FarjjMvyWVVog4x7iFP1nwRV3wjV8N5WuZs",
  "key34": "4R4KxaWAbYyC6EHcUJzCZ3sWmKVsGWqVdAhMxFaqbosoJ4AnbbLJpvhqSxtsYyqR14g9bnCa9aC8ELsD8nyUa7KP",
  "key35": "3Gif9vgUWQRc5qMDPjZvs39CKYVY2YERbmA9dU5ouZRzo8916x92qzNPiwRYa83NpJYeL1tud2mxP4j12VV1oFyT"
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
