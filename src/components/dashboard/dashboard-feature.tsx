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
    "578NLMd1hZBse4iJNBdP3VacXXS9vktYUPupadHkvwGQ3PaMqqTmRbsucwmFo6Kx2gex6CKQWJXJg28omBymDSj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e4idPsSxAgnqUP4dqruv4TzBrJcp31kq4J3BpD2eUuhck6TyC84k3E2uYAYyrZfvNqfneR1W7xr13Ai1FvT7vPP",
  "key1": "2CDgnCGmEX5BHy7YDgX6D5pduncvSkPs8VBMJKNei7iiziyjLXvU8BNG3etano3DR5Jh3vcCEsoQB8iVAeYYGHrb",
  "key2": "4YMwiVwgDxXEgDPng5PFTr4RxgezRNKJzQQRCFyYXPMqGTMHooMNnLp5r4REWxQHvzdTw9euKPJa7ZKUWMeqRbyc",
  "key3": "6669JzVzj3R75g7S5ngQC57NRRbJ8txmk3bQtbESWnkQgNP46s25t7FqikJ5CUsaTxBJdnLPiKEPCi7yZWfLoH2L",
  "key4": "2ktcxaB8gkAJ16Y1geF16NvmUWWuufTsyXTSa8bTRsnLskxeh2zhgKiLE9vuc4DbQv7ZnXVF4Tv71MusKGuKQMCz",
  "key5": "41CbtroASfkZxU2zLH68sgHmg5hJkBwMfqhzpzaZK1p3mC3rmybq9aWkgxk1naJhhDLzfSJJupdyBBSBVd8ufPus",
  "key6": "5J1QAAZBW9uGeb8x2XtmJyPc7MPg9aFnEYYKeQAv3HpxUpjDjYuft35cW3KsoU3ffkYYJSN1xS9cGKEPT9hZ791Y",
  "key7": "4fr4zVLbicutnK4gkWSouaoxxL5ovJ31QHPpvPKQnGJpWAK1emSjXiyFsj9PHkaCcukHLPa7e1h8MiGtpDvmeD62",
  "key8": "33QtPZ1KXXC1vHw7QrGMfoUM3scz6nedfXLDCgDw6QbPEF5ejZifENYewtB8SRVXYcQP4FsR6YksicXw144dt2qN",
  "key9": "5ypCUQSRGjbMi1cHgokXro7YVtzSqFu8qNbLwtCtDFG34Qnr3p3ZzgTbkEtY22pKUiXUDYbmEKpRqtmeASE38kc6",
  "key10": "4sb748KvCv4N4doxpeu1Ahruf9NY4b7YS9C1nTwy84AvWz2pr3sTQgu4r67LFSJbfK7p34iTzD5ByLjnYb1BCf7B",
  "key11": "2AmaSLRjd4qqb4nH4PmGQKFAkT6q3fzsLCEYyQMMmme1nBQ95jjXBkd23FE2X7n9c64VdRcRK3GNmujkwDABfQrc",
  "key12": "3aPHJdKSmHHfsFaWWpiotzqi6sYa9NPV74q1UeSqZfvc81rgjUuBtnMSZW3fbpTC8Jues1p1q76bgFqvsVvhEKyw",
  "key13": "rUReCeYztKu1fiQJReJkuaMXHLjhhNGoHhCm3rtRsrCCSBoM4hYiVnZSTUpCCnGT7gM5MECFFPjwbgegZyfTE3p",
  "key14": "Ttb9QY4s3TPLdCHvpb7YSoQYECfWPe7iuhgqD9PMFap3fi78EQj4pzuqXvn6SegXzDxFbfYp3CHWf1qSqcQuEPL",
  "key15": "5DpP34NazaemESrtZV6JSYppqnpcf86fJeiMS4uKWwtYYLyuD97HU2f5f5VpTFaUF25eb6J7ox9FFmdotyV5FfPs",
  "key16": "4NvGErXGzJ3BqBm3YCNqKkeuAKgRojHvxpgStHEyu3p8MoNymdAfrErjtsdZxZDMxZsfZGjfbLzMz7FBzFCLyMGz",
  "key17": "2pXo7GKnUwHsLyTVqGdgQhCTS1rj2indoJsyt3BsjXrJDk86dWLFWnoKhKjFPosvDeajTo2aJfjsthvSpugPwtXn",
  "key18": "48AFS58Y5ETqNKXfRWLXz5oYhxnbKUEhDt3DkywYFZv7Jo7kQ893cCmTdMn7ZA44W4vNwpS8bsMDPGSUrZsddjMi",
  "key19": "44aygxwxq8YKKcm9VyjrgUZYkh5ynX99sBBx1WozpfKMvjiAGqC7fyRjNZkeAC9XzLXgs9eZKEknWvvA1xRVbq7y",
  "key20": "4WrZmkRbrY7Ya8UtfWQEsKWcUxgWpP75vQhFFMyFRbJamFcMUxCEwKXLwrYCcsc3WQ69rVWCftUbsMkeQvRAVqA",
  "key21": "CdBVsvXkPsTsf52jU6WBbhRp1K6xuFpXCMEumDrHF5EGw7KJ9uh6UYaaW7BAnjED73fjd5u3iTnP2WN5h1FnzHq",
  "key22": "4rDHgXUWK9NmABa5wpc3NkXE16rNnQ4yFZLhUtoXUdpJDsaCiiwt9EQK7K91KJfWTh6jY4EFSeDW1rHFEkoeWhAN",
  "key23": "2GYDW9DWMYMUv4ZsrkgLk9P6wTPYdv7j5h2GUkhFeGeUBe2KFV6gEheznFnmNje3sK8pmneUu2SWVgoEQnXfsBZ6",
  "key24": "4cB9RzFJxeEuZ5rLipwdFZKzDcNCfZV16waxoAtUTkQyH6xFLCyoYcVtBQVBx9QBaLHKmhBU5aejV51zW9TjsidV",
  "key25": "6EsSDLe8arymoHnXdQogRvmp7RJTBxSajPZntkzFBh4zQwTWKckNgFqu9qBLDFBWxzqf5GTabpjLT8s3PuSJzro",
  "key26": "5ajZ1xR4xWsVbwxbx1AUJxtqyW5KMLqtiMC5R4eF7Xh8VbhFSEY1MAyKo4ya1Gu6M37GPtoDVFgATYF8yKQGudFL",
  "key27": "CoVuu3u9HgAPeyzvUfVn4NLrpDBRRrLaaLqXGwZ4brzJXG65mS4JWvPausHd2SA4PvjaMYnUfgJQHvftmdNJMBx",
  "key28": "2pS39Yz2wpmLigXUX48tfWPvgphZR4fXnRezaCDgzRvuKuUvgCyDYUVGotThZzVPsTEvSgj1qNgqzd7cwSyyiJfy",
  "key29": "3k78Z5WHSHbatcKpsykeFs9xVTYcCDcbjEjFm58bmghwVtNrPCmqomryBXQptt2REUTqQSC1xatMKxQB8AnAGLNv",
  "key30": "2KopRH8VTrPfBvH29yLbwvFC2mdeinFc9sxSocacc8L7wKyVPLZF99ET1hKi62usf4LjfdAuG6NQ6Y3EQkMYVbYA",
  "key31": "5t98idFD7kcGCcUz8AQgZN1KshT4VrqnEkD9YmxwPvgwiko8crwPz3bePWkxY2o9w7frNAXSriGh6nhanfydYxkP",
  "key32": "3Bif77MhiK6GtyH8rj8CvhpaMtPbZ8GSRwKgjoF8qeFatZirgDNchGJFWfKb7Z3tttwEzPgc9cDZuzPANHsodTSQ",
  "key33": "4wTAJSzZmZfm7RjkgdsgikrKcviuV7Q5jSZzUvYfiCtBod1aBzE7dP6itNgwBywXCZ4LGxv6ciW6UhH836raCtJn",
  "key34": "nTZc7bBjfd8vbSj1EFWoM6ecLs4mRxd67CXs8EKNm82Qb9yB1qUE9HEPbZF6tiobDv3S74uZmy5aoyQW7BoAd6Z",
  "key35": "3XFWHqqsoedhXm3F6gc6fShkedQ68VdSWu4asSgah16iRbRZqQ19EiufELea7uv94u4m4zphnLcSAC2aHSnpKww5",
  "key36": "3G62N2ufcbyabWUqAVx9ea3N1rRG2cvj1gUmHSPcQaBjux6vZbBwLuLsQBz38P3ZQby2axDTtNn3z2FhDDnN5K5m",
  "key37": "3u9PFwU6hZHrpxM8Qi6inEW9chRF6FKkNiiePmk4J24oJKfNe75NSVaFxcrZdnbekey4aEB4o4nmy4283AWy22tQ",
  "key38": "3fcpMWrJ4HJi6vVKFgg19aTcrr36LRmv8e8VFUNDXCPYnsoM7EAcgrXn8Vr3LKshfrVAhA7qXziPparo7Lqv4BTB",
  "key39": "66pjZsXpkfuJbTbQYVPP4dHxF4QuiMJxGEcT3Yjcj3p9EmQB1UcZn7xhutsP2UyieLbJnmujLMtGFhyHgKUYwkZx",
  "key40": "2h5qawJVcUUkUuqrSf7UJD2vNQhVh5SUkqmKZGp6uQg8x1g5pATCUceBmezNhTkEWEBK2JjAacJxE2w3bVPqzJUs",
  "key41": "5TKsvYRm7eptHrDRk9K74MVHGYbqZXZRpiGZsUn1GbBacDHpygvHdaEXDPitgvtRfQTsydmtoVerft8wBFHAs9m2",
  "key42": "5EVkvuQphdacS3rtGjgKVFbbCs8DzDaZVymdU8v1Sb5denYCo94dAkvby8qTzWpNKcFDnNcvWfBEbz4zhMwBr6ii",
  "key43": "Ee7VoKyBqVP9xr36zcCJDNk7sptcS65GHK4HapKosXeABAvHxAiGDWuykJ84NVkaXPk3KWXHhnpQt8QdHy6nhHV"
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
