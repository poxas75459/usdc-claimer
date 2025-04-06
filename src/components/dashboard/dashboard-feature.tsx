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
    "8YeU19y7qD58VMKjpFagYabGtjjq64ojUoZWvKJ9QnSbCtqrhJfZG76B7uN11wdDhrNFPkCsgUMinnty8ck1oq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EMrFqGU5SAsfJJcGkKVNnWvjZDGzot81mB5aj3F6LqaQbSMYekERgCbtvPuqdiCme7EpVyYX26JtEKzAr38DYJx",
  "key1": "3bngX9e3hNWrNHspDcydf84996zxe6aAS8fQP846b3nhQPpJjWV5Qr6AE84gh4eS7dE6FYAtD5L5r19DuS8oB1yy",
  "key2": "4GA1YiLGvK8GGe4LinAFxVrXHCMZLbFwnUfj5nzpvM7tMFngdcwvoVdjKBSNfASXCMMZSPkCUrP2StgEqVwB3CTm",
  "key3": "3iYiFYvXBfet742VPzXwTKJhmRUUd1FJ1fxXZ2rguX41NqexWcCKDJWJquYR8Jkfe4wQBvLNJa5wSjXVLSWh94Zf",
  "key4": "3FwnfNLqhMEAhDQCXQ4b8BdTi1xUcxPUi7yDGwLDTaV21NAmSmzPAiMGiaoy84hKj3EQ2ezsp6xSpBHVXkSz8Ncp",
  "key5": "NY2pSQn3mJKtXs86ajXWFgvsu2xiExy6c8pURaBgnENX5Mt3u527J4HopXqhnHCQDUtgFy3Ysm7oJUu4N6v9nQ3",
  "key6": "GB1Uf4EfM8sUL9i5mo1HRFiyTRG155nJSsLv1fxyyt3egRp15yjpC7Q16ua9nJwtw6TuUQ1htNZWHvyZNhVk9RE",
  "key7": "2UJWfUgNXpKMsixXKwXpkQkxjtaQjBkEhMePC4Q2JeLAQsWSucZijQUESH3rGHkyRu3K8jTv6toDi1fTN5nGq3Br",
  "key8": "2RLthyagPN2suHSx31Tk1WyWCGNDkfCrUVW5uZPj1aHhrwKGVFySxKj64p6J5aRj6m4uerpFojdPg5SGhTr9aSZu",
  "key9": "4ucBXMJZkCNMJGuEABdemHu8Nak8pjiu9g6qitWhzFJnuRk6PVaAX2mzBeGvokNAamGPQ1ootzXoETWjPhfLEjg9",
  "key10": "c4yphWfFMEP8DcrT2JTDViZ6isJw3cgGVj5zrGXaqc7LeiAzWKQvj7c7DzjeAZaZiBhyCEStBq1EwA7vPJBDA7k",
  "key11": "3HgcqQifjoKNkNemt3bx81iqvrfhkSE9exjzkETYxF6UuGyjkfBvFuC4tLjRzZ78v6tHYJkEUPjsFHD7YApPv7RC",
  "key12": "kruCQqywKs48S3DrmErjHXuWwu87ETFYuUu8hnxAT88ka6cwGx5QPHrxe3GFvbAcrvGxhvvdr8PisuntJEVAju2",
  "key13": "4yvQJ1ssEXG6ckPR91pLrLbG2UN7c2wEyeVgdroZu2hasZS6QX9V4sHdPr6C9NAT6apsnmBDZj3Pkab8pNHN4XaW",
  "key14": "5WTWDrJWCdVpuSBDKwUf6izA7oV79PBXpFgywEJ66qrdNUJSa62Tu9CfrvF6gb3ptq8RaqVFpTdHqxAftGf9KcXc",
  "key15": "3t12waTUMYH6tAbGepr33PwYiwkYzXwzJewx15rkh2J8wJNZ4jb85XSNPrHpjo2QKhjnUfMNRnVA7JZ9R6mU27bV",
  "key16": "kyXBuaRgi7wrEQ3akguGkiX6Dmst398YPEmFj8WsjrkNUB6KBLZEcEqQkxAPz3tEEjTSqAWigH4NWEgSaVA6uHC",
  "key17": "2yE52RRLLutMsRAZTuTDExEbKdT16PipdJxuabDvmGh9p7ZnkmNvVCqKc5PZBBLRu1GZqYmeyYovWa2RqNB4bLV4",
  "key18": "5yaZeaecM8EBUz8QDnZnxjRTXKDpXeBM8rJAajDAWLrXhwPeXKGpfp7FH7dTsCSRw6Yj3tYFMNRoGQ62b51FYmoM",
  "key19": "2siNGD7Wogq7WKSVWWAbaydWV2S9JbFa2s8GXp9y4EPqMhzjrR8EmgoS3Se2F8wkE4oGQnqzFZPKPGi78MvrkLzA",
  "key20": "4sZ6XtTCYtfXxsHqTHCGnxmgaF6Cc49NA8LdT969wmCGxs5ptHVJMMRHZhGSYN4dyU3C98xW8xtUAENCsw3e55Ej",
  "key21": "CpB7LWQiTi3TCSwUPvc8pKTmqbnwk38csa7CtBCXXH6Faq5C4dQ7vsQiXXNMKzzgD4GPtxKXuPsXCnYADvSraYJ",
  "key22": "5cteWotTuN2gUGCogQG12ejNSwmdZydZjqKQ2SxD5dQBWSC92E9kVWCzenLpGevYudJWuK58X5BV2L2oL8LAqRmK",
  "key23": "28royzB52HsPUUjzX1j7RSWmLqYfnrfZPn8onoMoWM7wAQnsTTD5DYimdTdqqB7uAbp6QDdRcn8JUe3GXH3ADhDB",
  "key24": "27a58GExoDmWXgRNywpjnGBqYafEpdHGbA86LqpghLKdHUTGb7TmEjPg3fGtqmDdtXYwebYHbmFeu5Anf1czqRvJ",
  "key25": "3ztY3FTysAT95KFChq72qbvzvV8ZSKX2Ujdtmvapc8FT8XHednC76JiQ4ZPKFQzRZLaZrbC4ktFwwvziQXZkcqvk",
  "key26": "rfnmd5tyExxjKiHkw5sDxpW24FgpjkUqSLR1zkn4dN2nWuB7YyLsREsJMg8nL7zo81rHp2NVma1gMx2SFp1FVmZ",
  "key27": "CGAbihZCV2zzWnnrFmCFprnAaFoTYAXnjJftiyXwHLnK6uPdYrNB4cffe91MCVunjZUeRfm6cb2FwAwkL5KfRpR",
  "key28": "wJVXQPdY1hxZ8abS5Atpep7XcVVmokcsMzSwPFgo7o4UgYbeULcBqDGve9mJzwbjvSCGouPsechwS285NhcaRdU",
  "key29": "5jcwzCxehb7QCHZ5JDMwrRkUZQ6osoviPK16BtqieEbLVzDL4RAAjbHvwi7APPujDzmJcNNRHu1G5yRRea6bM5Fm",
  "key30": "5JEvwikmBBZMVVE4Dansnv8hhfTgbxUiyLT2rcoo8EbgC1ptEbuGp8NAd19a23pgKP1qWmheoFpn997mFocvByNu",
  "key31": "522ycXMPxEwzKxz5d285cP2zetBEyBShHDHs8MXJY5Ff6GrwYcaHUX7bteF7vUJcU6bAVpeW2cRQt1wsr1v6qSAP",
  "key32": "44Fivs5YixYH87AxRGWWRhmgBK44JUCw53ajxLZZGoyxDyc4ba6wCdK1hRW38aYHAd3YN1J2hVGy724vALFHDAxL",
  "key33": "2vZ16qQfGsejWy4sqhCGP8xSKy9tJ96X64Nm48nsD1hgEBj76SYQJKrDA5CM9pWneBmxe9vDA4qfjBfsrT71oEWP",
  "key34": "2h9gYz4Dasi547ceHZwp8YEP3HuRG2KToSB9HPcH1pJaP6kcTFNhxw2THtWeuwM6Jc5WF18ToFBimowrKX4jpsWg",
  "key35": "VdhqnnjLQ4uWA5sWnHMm7nZyErEFB7miMBmaScwEqBJAJxQ6ER1uXaCSP5BvTS2tvt2295FEzuxTA83eA9wdVLd",
  "key36": "BsVmmdAH2XpR9KVKo6xiJarMHye8dJynAaerrMp85bSvcYES85S2VtwcD4DcPtdQXudbjHrwmeDjT8wpDzf17jY",
  "key37": "4x4jBvGnzSheC9hdg4RZk9VHTBwsyQA9JHEDqFw3igj1rGZMjC2wjJFkKXxGEjNByGXM8sevKewodNvahYHWwq1C",
  "key38": "sdmdmQb3PVD1gdhczJWN97VNhxCf7CLgwogpohv2NpZ6TwPGK7DNycxLxth6kXjbLDbWWqef1EBfbxCbr7SxsLm"
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
