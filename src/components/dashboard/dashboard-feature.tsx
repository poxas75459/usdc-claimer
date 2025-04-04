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
    "66yPBEBzHJoWPz5dmsVN4ZnRYd4RYoDawyd8Fz2pXKwKwGZSMCJSy2Rvp5xR1C58zfzDiJg1wHqsgPNqzoQsfijY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3emKoytWEohr9H53YE6CB7feJJinR5S1f49poY68SGUotNd3sgJKFb6Ksu5j6iBgmp2bbwb1iCBsRwG5d7cVf2Ru",
  "key1": "54Xjk86Zyv58pqnFHGbt6us2Cf2pgnHWTBpFWyxHNDi2obAWfGajbp9fpgSEzZsVhnU7aUtTWE9CX9anfFhaf8rt",
  "key2": "496451x2bxv179ZGARx9mJT8MTGGRGX46fBSuN97KTo6CGoN7ftLmsx8CzTUUcS4W9iDQvcCKjE6ixepN2qoaBKh",
  "key3": "32hFEj39hQ5wnpJ6rBYA3B1kxr5NXXBNeJLdF2nY54z2saVPa674PTLTCSMFoFZjMVu1sHkzcJFf8qRt8pqeUJUa",
  "key4": "5wZf8S4fzGa6tDD4kpNnN3HxW5sp1e9PRcyAeJpPCHjMNESfkxQHNupWQASsHbTDgD4CaQDbwhttGYjda2hwwx7D",
  "key5": "4qUPv3u2vFmVbtNbPmjJMbKRzCPpCkpNBNEjLTtjbwZ6u9EdyVfh3WHqeBgYkyS9qJdogcr4QwenfUVW6J4fvH6m",
  "key6": "2yNf8QMHw88wDX9eiwrHcqmin6NtBbdMzVWsD6ortD5v7P7wQQJ34VJ5iVHJFjtPakT9TAsSxLoYFz2Qn9PZuWFu",
  "key7": "9vQo48dzUnWeFFkZyGSqzJrWjMb8fwakqRQBjUQ5k4qhKEEKS7dfGLXSq3VoWmYsSAzaUbdB8Ry1jSM7HaEXV1F",
  "key8": "cfaeu3rsU6qB5Dz6teHEFFZyYMgCkAu6bqWKr82W42gVM9dSTV1nsSK6oy4SAdfUSMvTny4TUQo8eh2qKZUVuSn",
  "key9": "3DQXegeHUcx51kMRbsSJdVVWZmYggKHWHS7ovtC1epgpsMzGHrvR59CYQUT1yWA8SgCsBdr4krGtzXBSnhnoUXFN",
  "key10": "3JAMyjX4RryfksiaE797EGDVc8UqdH3qqTdboSS2vy2vQrdg5CZBr3GF9t9oXVEFdMs7WuAE9DnH6bLtgQjMd8DM",
  "key11": "3ywKAqkHvba764PqADePDv4eZcLAjCpGFsJXZ7KWh5BX3usCyqRaVfr4o7Mj7p1f4oh6HppsvSqAjxNAeN4BmcLa",
  "key12": "sDcHgULRJoRKZuyJ4W8sfuuYLyVGiuexxefLf7iSDHFVsFZiEdhjXiu4QDVstqr9EUVeNb16noGaYyBNugCwXFJ",
  "key13": "4rSCU7bLXfuKGaU3U4aN3jQMF2mNRUZqkpP1P2m6XYZTa47afPmrqANv54XnoMtdYcwDTya218Xp85jLf165yD5v",
  "key14": "5AgujXivsV4AH4MrJYeVp3EkhRY13g4x2WLkvBXcVYL9F5KZTCt75CHA35UmYQWEBCt7r1DN8EUuiMCMp8Mdr4pG",
  "key15": "uny8uRusR5JESensp2oMNT2aiu7mmMw6f9L26x37z9Xv74kezfhuAs7DaXJq7BuvqiRECXXbpaFDDYWE6QZjCjF",
  "key16": "5fyuz7XSkZgdn2q9ViMjJvVjUWmjaX5pVQ3exiVcAQcEqQT2BZ4aKm38x9vod8CCdH529SwtX2bcYzLwqqXQApFt",
  "key17": "4yf6TCYBr9yqGbxovpSxQjCFdQZk876fqkUoeU6QSrLG9qcMCNkzBUaNrwSGL3FEn5oECwFW3YChNYZxbsZcwcWc",
  "key18": "2d9qSQmy2tjY5mPKZZ7hZTCFA2exBuhtDFN9HPFXQoFmcf4Yp3PYqny7RbK9jLp9E45MMJ3fgQSPYdDzBcprJ9ME",
  "key19": "24mih2FYzn6Rtn3Tjpe1RgwSFZPZc7G3Y2PJBvGdZYbNtM6woDB6EtSHAVubXYR8GhJWke2hb2oWUoDTaHsBSvQK",
  "key20": "3KRKv3GFAcxWBEfroFpGRSRKSUB36bGh7qKreVzp6qAjziSpAQX3P8z4sNjGNWEiXUusNnnuVxHuwBDxM1uX8sNa",
  "key21": "27yAhgnU8nug3krWCMhYaxVjDstMnbsU4vtBRuTfJE2NkPvbMsrpdC2GM1CyQDWUYgpegKq3Q8BVVwFxb1jfU8hV",
  "key22": "34VffiX4kpnpvEixuLny1xAA5TA5s7653CEGLcoeY73tzhDcttXqTY7GSbf2MKG3v2pJ8bwwk98aUZnGiToDbDgj",
  "key23": "4fP78RLpExUjYwDX3dtgzoDJDpt7iR3dojyewJo7BWSbCjFuWB1KhucJifs1rkBeW8bFA5NY9m9yLEGBKbK6R5Nt",
  "key24": "2e6DDBaqgFAxFV3CjqTpCACJTrJq7jbmA3wghkjdzCbuJ12FfoFGTH4qyzWkLiiJmvmpkWhiAvcbYYNxEHaod5XP",
  "key25": "4Aw2WmVnXq9j8NbMXjPdR3L8qzuwp5NUrHzp28EnFmjHfMrnkcBZjJZc6F2djqauQj4KYLLYKAXN2UNpPgSSdsmv",
  "key26": "3GrtQH6zYUpfCcZbCKPBM3mhDjvmAtoqYagTjw6tjFFrXqdJPCDVBuNxAwVJYDwTFKZ6bv6WVH19Mw3j1P6CHL8t",
  "key27": "MykNEWBTA6s7WoTuFHtBemX6xaLcmXz9mtXdnrwrBQ9AgrmiRUmfF427Wb2wGtS4ZRdMue2HjoHKwZJZS31Mj7T",
  "key28": "4sp7S7ZeccBNfJjSvat6JN6ymkKHWDxrq8v4kmv4sRYhWN7zkXnEskj9XHmadbadyAWyGtD85RPspfVCXvLAYK23",
  "key29": "4Rfr6T5uYvr5djezdeThzna9FTQk2MhAUvVrYdMTgW52tExMa8szRc5M7XcbUDT6MfkYEBV9bpRHjpoVdpA95nyE",
  "key30": "4HyBTjiTRdUYsdESFyytT4nnbhDJsqAAGLxNEtAHNW1gdkR3Qp9yGq64MrZcz234qUXLxUNRRS9Rna8TXLDQGG9E",
  "key31": "3Ngyp3Ky5vgr7aMLuzbYaeQjoTsDChe5LbyWTJjdAs2NYSfBUR3JEpwrznYfYsr7goq9yhGgYru19gWrmqL5Tw4F",
  "key32": "3kiA6i6AbZJJ3SG9DMqyU8mwmna1xDaAokHsosnTNyDZuXn7kXPEjWvQKb2UDP1yfoFf7zaKi7v2ienfjGfe5zgH",
  "key33": "KevMyWRRGMKkLqaEVhMLcwimvdXFBkkQmu4yPgagQRaYov58tNsvCSSiBU69Fu9czpF11jFa2SX3NgtyVyhhZGT",
  "key34": "5LbLwczLQXofH42ECB1n56Hs4eGFfstLRna8PyHJezwGAdAA9mBWXED1h4EHEJ4vz6tNPwGR49uvGVcvgJcDaZ4R"
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
