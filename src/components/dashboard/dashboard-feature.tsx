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
    "Q3szFRowAGuWJakVD7bWndn8x4Tzt1w83zCsKTGEV8oC2oNiKLaVwATzNUA21LWtAiUt9aAX1Ms7u65z315b1Vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G4Fg6zmAVoCtkBJ7p5x2wxBPW5bsfwQp1ovvMthkdoWRU67BwsYeLx6kZ9uvKrkkHHmQRrRZpSKgLJ46WUbh2h9",
  "key1": "3X23wGCgxF9CrR7wGezjdU7JihRWZ5PrZhNLNjoWVdrvHnNNUwwVGr2sft369MGPYxsSzjbsVdJ5vhn8Y8v7aCgz",
  "key2": "FisVyNB5cqdNzFi8U6v2Mq7f6Qyywn5mopiRavf6tSrx31fpa4Arc2S3hgG9dDoV22nkGSRADSQiAVgGoxPeK8k",
  "key3": "2VB8q2nBx79qoJYfrYpmTiPpR4fSboGcjwvmGCvDdKcnxHJAEQBGH1twvgECTSQPxZLk4MhaCFSnmiGBeeRBV6Dm",
  "key4": "2s8bLMxpFPFdBVmD3wscFtkeCYfVrt42b1zqsUmC6gNKyx7XeBAn4VtQr99DhHWFr1VnSHUgnBsxKxFqEB8hXPTQ",
  "key5": "2VSKD45EMRs3qTuxqEhNvSRY8zV8voh761fK24SLRGDzqTdyGZE5SNYBuiQkvSvGHbEmMzk3zEmkFAvEUdpKRM4V",
  "key6": "3FvjWzicJc83pJzFnJz5zgvhNqvedtRLvTTuJ6NdWANgjyyX4GSdkjxT4Zo67afF982Za69BJvLQ1QJisa75CAst",
  "key7": "624wFbXJgqGdwE9U1ViDqicMjE86jXe2qDTYmJz3xujroXrnQxohUFd8FhhduJUyZprpeso69vVuyQCGQzpQt6k5",
  "key8": "uwSi5xN7F5fK4hYDGCQzNyK3GZijPj5rhg9z3rYEhx8EqxywsbaaFALa2gr72cZwERg1KjEKxk5HWrwgXEYJVqB",
  "key9": "4wdtPSBEoJjyDsDQK5BDs1PzasCJo2SMGU9rAc4ujNSPToPUE6te3oBxvcNpKsw3P3dNx2vnhvk4sJJohf6LXSb7",
  "key10": "3JFevip3kqi6N7PNTWF81whqcXTPQDo6bEhpqwMv9ozzRjNnit5VtfKRr7uKvDaCDFwBeKxbHoPr92hkL9ebAQg6",
  "key11": "3pEontGtBXzK2MsvPtYMgsB2QP3XNdFehPyajUgDwderSc3bGuoQro7r4zeJ2UrLRRPZtGAf5wtXzenHaTh1E9HT",
  "key12": "5E1YjjiCbKyhhFM51EhFzJVRMT28SByZTjw5EjjFaGc96BsaTG1gydHV7kj2gwVK8cVbHNBnKpH8p5DFrNkpRTQ3",
  "key13": "3eBVvvSjLSE2gSBMhSjBvcksP6V3jzcEH3mbegaNN3mhZJuJuGQGXXjvS6uPdZgVh9ntqmPGYgMYHLeFPtA4Ydc3",
  "key14": "4Zq7zxiaNAHEM9JiLt7W66RxowsQqRtwUgB9fWYmDPR9SLX1mXoCe6r6jvDpwUD9ApQNttuMxmv3rkW5UwyJJWLb",
  "key15": "2Er7Pq4NorgcauaMLx3qLg5VyuAzCA32duMSZzcGYYb98XUumib4LqQLqy1W8CTcxGpA6QxwddjofyaYMoAXxAvF",
  "key16": "3EqNqKZEnMVWHoXtMaZVQURLSqUQ9Qsa13omH7CwZstiWaE9XkVz6tA7of1QBiyPAbnYhGpjvPMMuMLXzBrSzZ8X",
  "key17": "3NtsmW3vYJ9raS17mtgK7btcxomLCmguyuN2zqRPTHbtGEzpcha4adyn9kwFEuwghFmJR2FTMFZepiwX7Pxv25aF",
  "key18": "25sfRSaywqKcyzwc6A69XamvNqhcLboeCBii8QtWJo2bGCg3arkrjfXLeZwh5zk7kD8zBPgWTkYmXaJ2gGaNsuHM",
  "key19": "654W7RgFrSvgbT2ENY3sRKDQaDEr5sLUwZdjxjEvEUq7n2Ap2M4LhVQg7RZJ96ZeMdhg4riRjc32BfAaLegmW3Wj",
  "key20": "4pj1ZARG8FzLp2KFkwmThuyghfmGXRt2Uwv4gLa7Y2wCvScjtDbLHf8ViTmtSdeexgy35U7QZ2yP3aKaKau3gBvB",
  "key21": "5DtLbWLb9sau48sQ6AASpQmDJnSA8haXGULU82YBbbYxYKZ865eq6xov9KbKoguvQ3DLndtXTwTzyeMEjUPDdKT9",
  "key22": "2k5vbNMTbKxHZvrduRo4Ffwa3CN5qyTDwrTaSwRYDss3SSjPDfyLTEd186y4PzqV2AFGHP26K2tUbSKstph3btaB",
  "key23": "3vmdYY7WgprGAenCrUY8YmBnzYP7dQywoEe6kX8YazpGJdosVn9AFxZhs3xoQqSGixMw4H1cQiTzY2UN8Qzcsv3a",
  "key24": "66ibjNspEdRBukQvwNH1WPA4weG2xYrFQvEDG2g68BwsdUSrmSMJ2oVUt9JoqLTa5wfWGs1DTWorVb8imtwbThos",
  "key25": "2KDUH4a7Hz6A4WnRzaAnQuKY7fVXAZ4uhrJmyX2GuLNt8dCtf3LhZ9q6omrtaPQB7C7RqZ2wTymei6mbzFd9APWa",
  "key26": "2bZrdLZSVfRyoCsFbadwYsmeS3U4riMNRzFMzp1fhjNUymWhz4nyqXZkdWdzU72MM1EJT4JdxZnWKcvSB1Sg76ay",
  "key27": "2dyRrdSNKae5KPuxLgJbTpuWezPz1LE27bkDXKUCN4J9kH2S2SqogrJ91vkNLbzMWpQP5EYhVoLVJz8qG3aDnE5n",
  "key28": "fEtYGhzgVqQUM8S1kB9HHRBXcXPv7JU8XZyaBtkHAuykTKFv6FPavkhESSqS8r8qdD2B8nH4VtW9cy4QCd8EjZB",
  "key29": "5Vx9kpLAuQi6JwRs1MNQtiRFWkE4yt52HZqJDUR4DmQ4Ts7Dj3rRYDJ8bK5PmmyBg5j6GcvdbhKWD5KGzXwuoByy",
  "key30": "4XVHpM6NmEye7V19HGf5KYCKgxa1g9JVdi1dvshonuBshv8kvcapbqjfUoeLQUrhQqzVRfhHn4paS7CHexPqahwG",
  "key31": "54z2ErXuwEAxQH2v7pMB7d5wVVkAam2AM8XjYvemreVtocJHyc3dJLp89x4P1BjU7qBuNwbmrdMjZxSp8YGa3ybk",
  "key32": "RKs6a95Dp8BFULMdZPsdH47uwe6toa661PCb9wqTwxMqkWyk5HJbyW2LUieCusH46NmcviUYKYKa9yyzdKrD42q",
  "key33": "5uuFzUB2QsysAVGCnqm2SEas2jBADvupfCqFX1E4KoKoUYptHMif2Snik5evyZpSXGfTkHXFaeW3CSSfJ6Mu5yfq",
  "key34": "3gETKPt7Wm1mNe68NzUPdKewyZeWYWJgiatVmJR6VSDb8WaUHznibJZchUWHJw4bPKQfvhKmNbxGDeN56mDQhSqu",
  "key35": "4wMiayFp4moNzy2SvKAoyTuQYGCFAcMgY31A9NLgGN4i1zDstE2adtpQZoXnSMiAuoawuuusPamDTirVbszUUnBN",
  "key36": "3yQMcc2duGGJJYmnHynt3pv1reKKSNSqLt46o3bynAwppSQPB3ZH5XCLFR1u2W3qGxziNDwMXqb1Qsr8LLTXocGs",
  "key37": "2due7MiDTPJSs1BfKvSGc4qsbJ4UuqazfNHawnVdULL61chSsn54tcHjsCV18rNGF1DuC3UfPSsbUWkUQTaddbNN",
  "key38": "2wV5UJvtGKG8QDXwy38Qgj8viHmCpz9ExyvrhBneU59CTgDC9C4WhwYj4c9DpeFr3mfGBPqrzF9mx8qoTuKevqL8",
  "key39": "42xjETaJW8EWQrAFkYRAWt6ZKHusyzvkokSGhLHEdcYx7Wx8gXBbNfFNLcmJE9wT9ZqdUTWkzA4dBNwCHbeXYKQr",
  "key40": "4ctatGrnWn5qWm3nKrAV1pky2WbMkZvhCMSN2YjQ3qkT26Dk7ph8GUfHLBNpQ1qy1M8ETTAWowDWS6KM9x4ZwnYq",
  "key41": "5aXwpt4FXZ66EJ8ATr6NmujTCTGP9KaJxXuKFdUsHAP7vPhYqCQ5zsVuzmc4Ai8dq3MtKAXws6WkVB4kofZD1GZs",
  "key42": "4CR7GGRaLoC5dpAegB9i8zHDfEQ5QniHCGpZVp93yFej1AZjqdrHbmuANB6V2wKuG67Az2AJhuLzBjMgEYGgoQUF",
  "key43": "57QxV2FBzVgBgvoTvVFR5raVP2Bs9x5tH7a3sNhfFqTvdR75ZKAsPFM8LyunFhyGMe7pnfTUYKRcMwLYJch4ERPr",
  "key44": "3AF7YQDRES8twg4r2ygg4YbGzzBmWUm9bJZzy9AmANw8Xe6MsM3nGuDhvbVEMYBTzjkv7udhmkud1t2KchgCFH7s",
  "key45": "4shmsKpvGmyHwGQNdFnVqrGVKE91XDgiwmV8RahbTYB8TyiZepGC6dk7iZo4icerzhkhMY9XToGcMdbCXe6HWDK2",
  "key46": "RFkzCLeZ8XZpz8576cg8qq29yxWh6mrVrSE7LHj1voPrDenv3dZi7bbVN3KyLARgwx7gjhSX9RWHqeeB3cnHJCu",
  "key47": "3iEBMM9pexbB6njCzfzMqdp9LPt8nTfTQbCBNHTritVC1xvHNYYKrfEGVewtfbd9wghwBTV31TPGfbRJEcRoBMem",
  "key48": "Do8k26ebDenQ8tfj9cWpXkrf5q365Rft7DiSzaR3h7Ja1Tc5NXyvjhEHqxeGWc58GzaNMZNxKibkGsuQYtyCuWD",
  "key49": "2owFr91yF4HwDVFARH9gjum7seSPdmatLsoHne1wKiXZFe4HouLmzw1FyRUe6bJrEEwm9YZpov5W66ZduLPwJZYi"
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
