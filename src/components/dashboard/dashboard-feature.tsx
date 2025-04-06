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
    "fD7AhxCazdxoi3G5unFD2Dh9HhDZxLGw5ZgAnkS9PPnVRXDatWyiUHFuXHiGp3kLJCeLQeXg9Hvfg8yF3H6kY4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QKPU4ZVkZjbXuxBfcxJx2D3mcN8XcCh3ZEUE5pJrXhgHrV2ia3Wd1saY4yexwKRQ15LecKye9oWoecxqYjdrgRy",
  "key1": "26TmghVSVC2jXN6hHquZqZWk5bwmXFvrexAAont2JGtYEH31NtFg6W7M9qeBXXim8Z2pmgfau6X5ropeM9WYDPP7",
  "key2": "3k8AF8513absb499vNoPEXTTWUUYSdT3mSVRAuM7JVDcGyKBqX7ynxFTGj6b4QwCMDo5oaUWKnCjcPmc3AQUkABp",
  "key3": "5neSX7T8W2UcoJAF2PevisRQd6jMmgQ5edbVUC7GcxstWxfXewWoz46NvLyfvUwTNsxqN3mmuj1hVaBjT2Wy5vSV",
  "key4": "2W7R3jKEz51HhGYfKVTR7NBprcyEZt9zMqB77me7GMsgGAQoCTm5S4DehnSzod37GTkaXQmeEYP9dFrtT449EUPs",
  "key5": "2a174153rWU6LHHo99ieQcwY46t9Pmy5cu9Drxf7iySc3RSncLrMhPFkz5hVepzyzikkxs1p9xoMDaoXVNM42U4n",
  "key6": "2pTZ38msUKUgbH7nPk1b2Wone9z4hPWy1SbcT9key1KENz3ipmvfDntYE1V4k9rT4wvQ5nd6t95jeGEcpfwMfmPm",
  "key7": "6WS1ouA3wayTfeWGKZk2drcni8nEkWK63jcGkxfin9xjCWLdD6F9tmr71WfymasCU3unU86iL9YCT8faEApMnk7",
  "key8": "5tjdTGNq4zfbapbgko3nKCvEL3XNSpJomFEhphh2XLiJMZ2F8MZKgcbkLAQraAU9XqChKZD7kFiuoKeHcxLCPzJS",
  "key9": "4U6vtoWq6gWUaRQv3EfdRWVjQguUPBbupBNqBtBUiuwhQp3bomsTWypuSrs2v3fJWUXwFt1DtNqvMph2gAyTfmFb",
  "key10": "2VqstZH3SrSTZHZTvkqDpNAFtyuUXEfdAVF4E7UBFJsEv73oEsf5DVdfkkUXwXkSEEHDFXLLZCFuKv9epzghTwu5",
  "key11": "3ebVp8HzYYAq73t8Fgyode8YXgXDAA9omuscuWarpCeotRkKofm87R1jjw34AUVCrJqPR5WfVD3WP9WdZesbt3DK",
  "key12": "4xyCJuHUXjUEgCk3HYExUq6oooHsqFQyhu18DPfHGEzHoNtJZSaSzxfdmGYFfsmpEjsAi3d86W9AFEubFKZZ7hQL",
  "key13": "5aGY7V4YGKQ47JhTxQUjPYbSLwhVSYz9M1mHFwNen2NHb7o7JWiTk9kyPLukEedGLGQmKsPiJNn8GJpjmLtEM3Cv",
  "key14": "5fTLYE4KyzFeEH8vFZVNdsG5LicKR6nWTdJVX1Yt8sYQDV9wB7Ar62ox7ug4YQuBhu82PNGFW8NCWfJQnpdRhkzt",
  "key15": "4yzYd6M6npEwqTTaxrrbN69m5G12ru8ovH78NFmBapjHUQwZuvHxCW7MWtWoZLTjEuoa1EVRGzBRrPp1fUxntbLs",
  "key16": "2Wfvs5ViW74sFGDmyLiZwhvGMmuMA2zCn2JoZwWNRDzNYPL3kv71EXAUtY7HcDA3ybuyBJAfu9jA64bCkYwp6T7T",
  "key17": "5ChvYMr8xJLaUiZQxe2nxc41TNK7CGPaoZ1TQAHAtVz6K8zsepD7NSYNegNRt1dX6K4vbXmfN1x4CngDPeLX7hZH",
  "key18": "CVBAj5mByiGrCHMzDanLRjU2k2iJKWaxNwctyX99XhabQAXyXDDRWwEd6jKcbT1ZMAj1yANQG1Fr8bhzsxiLBG3",
  "key19": "Wvdng7b4xnZQbFGTPWeMLzJGnBG8f7if2TuD85V4h1GKdfFtFNKRA3YkTrKjBWRKN7MMXc9SZEjb3MDggi32GDM",
  "key20": "3gUTx3TcY4ikPg6y8qVXAhxYT22v5QdV5EenmERAzvY9D5FFsrVmrkd4YZDfzFyxCWBfcWHKBpQiVLiZXgzyfteV",
  "key21": "3MDdnoRgi7ak5twFttU1HQXN9EGFBXoHAywV4zgDSaRbNVJUt9oSfcLDSaV3MsDA9HTxKmH1uKx8bW6pXq5dqLzA",
  "key22": "294UAH188zLTppJ4doRAFKLRVFbGajpx4bAYAi4CZPMHSgdC8G1Ux6FxeVpYXHyiccF9Hwks7noYtAiLrEbL1gpx",
  "key23": "4LtJ98XymtLMen39QD37M2q4SKYFZVT9n7vovZzZ6WAtfCBNvVpTXgaunYCMtTP5gu97wDJEDT8NCRrMQrE14bdq",
  "key24": "2pKX7XEgtcVTHTTyzLPyvyWkDimBKewLupD2dK24qF9WwwsVQ5dDLxZGS4rm5RGi3Jonfez4zRnVX6vvtjQTTuDK",
  "key25": "4NzWVdNpr9aVt3hkXmiDJF3A3h8jvrN8P5wR61tjjmRXEzbatW9zJA8c8WkkrpTWEcfZaJJL9dYV74FFtZwFWqbE",
  "key26": "2yCjndm961JbTbvJMYccEKLf7qPTVhfTAuq9TsmmMs844kWsUwNfGkNHSYy1vP29DHanbXru6nbEDKs6zP1tnp3U",
  "key27": "225HCj15apT2j4o41ZaS7o2j22YWacYUjfP7yMZwsy6QVdL85Hd1rLaLPHjqcoam5go9xzZKJajtLmf6fNqnskN6",
  "key28": "moNgs4W6LVJ1rkLeXbK7AWkzgDf4p3DuB7wtYzXE9w7x7QjvFjXXwoasGKYH7LcZh3Z2VWeupMomBpMaUohFTuh",
  "key29": "213JAoGoj6p8HXip74ZpmbTXfJnb8XRawjngLKkMm8bqgn8coLfHt2yy98yKUMLDCvUzh9sFFAzSiTSNTvwZEzka",
  "key30": "ErT9eF6hZZmrdVdpr9jSignreFZM36kUuDhoiBuvdYAPqMzfyCLpHgHSnvxiQnrk5TQLuHNo4gUCvuq6u9bXZGL",
  "key31": "5BemNYh6xpKtbexHYcSt7999KPxhq7XZZgsVzyQTY8T6BsLd5zbAx4ZDiEh7rEKhk5e9tnsfxAJTPmBuaQtq1FqD",
  "key32": "k3WGMaiqN721Tgj2wJ3oJCVrgJbyG4NCftwRQAUmQCaBevBbJCVCz5XykKcgs7KGrYHDuyucJSrXU2QpxURc9bM",
  "key33": "ufNNh6FpLyYogfmdmaqke1n2UZApioqp2U5d2zjbYfAxo7CoXFrUF7VPxu9ZBrn8ZEhvwzu5b4jBP3ZM74VsCh3",
  "key34": "4HHGKhkCJRrLUcjap2Pv4H1QMCd8mzjeh5C3dVRjU8JhSpPdWvaKV4EwX651b6yTbsukzscVuwso6DVtk9wiy4zP",
  "key35": "2M4kpJUZfTHGFgSeD2SLdDbAJVMSs73Nnsp6XM7aqitR5MWbRbSdx1nzuaSyqfT4RiLMHaUNVmTrtDRRyGuheQKK",
  "key36": "5pj92XUWwxcnPjpkUEKjxGntdNuXPzB4BA3BPnfK8pzWiNJCmQ1sxSGoLBNikpzvLVfneVimYSWazkqLxPVwSMu7",
  "key37": "gk6VcQTzaL43xCWWypdSS8yws7sH9vLVjWVEEjqNKQ7TANprVXMpWDY9oaSYQCaz8P2rPsWkJB3p3oPhxfKoEhv",
  "key38": "2vQre2vrG4nWuG67YVAzTeT14fRdMBcLFNyjvPsGFBBiKLaiCvfnSgjsQaS6hktamPQgXHLJiG1MuC99tFeuApk3",
  "key39": "2nqJ5rwA9Rps9WTmmcAGyntbCEXAwQvEjJZ9q1y1GKKrJ5mmbR2ErVDiMd3STVeLrJqv7vQyKujrtMmjLG5TMWNU",
  "key40": "5EpfCuKT8XEEGQSzXMjpoWSWrEQMaZQRHURZkNV19KJUp3axi5bYmMNeHmXWccXkU1fUPp8Z8HtJFauiR8M6Q3UJ",
  "key41": "5nzoGsHS4vHsWfaPpSFJnYMKcCFWQwjHTCABwCVNJErZ9JzbVziZkELvJcwgUvamxQkiXunyBd1EYU4cHEVd8VUY",
  "key42": "CYq7RqYQrohhUXM59UXSpoWKmpwy7i6KVVAcxrdUkSCPjyiMsEu7kcapGX5f6YihRFHcy4tyQHqK8H96kt9iX5K",
  "key43": "5wXro6f78AjXx7ieCJXquCU4pKafVW68V6MisUCNzsQpwSdYqrXj3xeepGTw1yuuuoNDua8ShgKNWzTZxS1QSraw",
  "key44": "27tEmUUJLiMdjGGWnhXh9ZnhSgvW1xEpY4YZ5zeg75CtSL62du53tf6N2YYixJPgEJ71husYPiWb5fapHSQS9qyt"
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
