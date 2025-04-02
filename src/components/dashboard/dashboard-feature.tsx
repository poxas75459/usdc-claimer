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
    "4grLbL9L7iyhpF7AhN2ShJKvY5pN7LmfzDWmyFX1umPEWgGNTiN81Nz3dDZvMaDx8GKA5R6q8zghK6u8bQaEf1Gw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47K43hfaEV7FcSWeTHAzB7Qt5AYwMyy2xBoMPNAxF44BZ19se1jAKAQBGkjfi59Y4DLUTSoMe17AMuineerakkJM",
  "key1": "64YKeejfL8UNRsExXfuSXWed9aKxgNNY21KJaa2tLUMvmG5fM5tx4XafgxXhq4xtgt4wSL4oc2W5JgoKNuMVDXc6",
  "key2": "rGQdVhnA5TdGNDpDkDw8h8kmH1KGzJarecMT5pbvmakj4k4Q5UsXH4ALRSaUTqfrfbiguyFrXHHxCScGDyEBNkj",
  "key3": "A5hXvX6gmrp2X7Ybg7kKoh9qnESaMhVDgRgZKY5YfEhEYVmFqakKT3Pdm59KqS9z5oygz7ZfMfMqX1bSE6CFV4Y",
  "key4": "Ugunhs7wfkX7R7rU6YHff5mrJoUCq44oJ4EqMd51znpkmdeDgQEXyuitjaWVssit3E9z3ePcrxmb1V5LHSPPqfM",
  "key5": "5g5TxZx6EWicu4tryJha5nHVtJbZ9jeBwiAbDW5PZRKF6H9YTjdetmGkuPPL8T8ad4xoKivxW3PLq9Eq1NnrAe9Z",
  "key6": "32PdsPjk3Z9bL9WV9pF9wQ3Fmj18FVP2DBLuAm4MMaLq73VUYLbwzx6w5eKZ98pSQzgsSd11Uw1GLNCF4jNZ3LUQ",
  "key7": "3bWx1NS696CzBtkLooX2QYRgX4fAK7AmDZEe4bsyKcccUdMPiqDnwsJTHfWo4m6RdxDPaozhT9pN9zEqKcWxjyET",
  "key8": "1MfSzzm9B5EPEiLnVcf4vjb8MxBDHbdfJgXnYKDrhp1zo9suYKGvCXBUD6G6PHCHdguyYVTpzHLWxmq3DZCVmae",
  "key9": "3bKrg6ZhyqxQDancRxrU4rsn2bJKdgHUTRCebVxy3qVJB4pJTeficjzUsxVTSuX4cE8MAfeSiJugELDfZPYiyzKu",
  "key10": "biSh9fpud943uWnS3ErAm5nSdgviVdvbi2BrHdyUGYmBPpbZiwSJV9eXj9dSusQY9p3894bpQdSP2N8s9NRg1dq",
  "key11": "3ngLiTRmjXkmwm3q9tL25CFEg8jxmQAhxDG5XuCHyFkZxiF4WCbFFB6LPprRHnVnqpuLXYeQ5fWMY2bZbVPDSUK1",
  "key12": "4ZTaga3AE8297tzAMxV49eFSXuj5otsvgYJhx56Auiv8YLWNWE74AER9Ux12AtjZGAFqfrvLpj4KvFt3frgnjnMD",
  "key13": "2TSsqLnCxduakB3R865TQ4TCYLrRVi8wNBH37AX1tdn13DvM4YJ4kZ3cB9YRE4LUYuJycvBgurBCkcXnvZajXZJM",
  "key14": "3WNeZrGfwyzFJvXmihzK2JjEDpJ3Y3aunyNr5vBdgQT4mXe7LjCsfRbGSbYNpmQJW4U6phJ9YYYP2Seg9GHedeFP",
  "key15": "2xocpNRv6d9n2unCLfBTpyEC1pS61RxMg3SueNxYFLEsTvLKVLkTjhXP2f1uD3PVNyX7tmS6KzfdQ6DS495HKt5K",
  "key16": "DuDqFBdpmmZEnYvpLTeRD5hPcUBFGBkgNGjpgJGiTL2anX2mkaNQ5f17vA37C2ScRiwniCTWftN8jccBJuMLjJd",
  "key17": "4b376VxGMpydkjtdMx7JD2iseBWQK2Dp6sMRjAvTgpL3vmi3xnzJv2irqgwHQTarbYy8Jn36yxQn6LcgdQjaVYHB",
  "key18": "3hbY3dDZ9Vwmfw5H28CZJ7drGHuBM8qPeca1xFHRetyuG4GZ9C8n86gVE5hXwbnokmnAVE3LPLqTHEHyxuyg1Ry8",
  "key19": "4gopehxFpLfadaArtC1T6EXmnkov9ER3niDi1XkiZxsd1eXF2z5kfYk5WarehHrng3vmdtd2rWxoSscjDAv2Kn2y",
  "key20": "5hSUqhzGjBLEvNdfSQJsbEjWK6teZKPtHja3yPyG6JaAM4VBNr8KE66PitRfCS8PftDc3B8RGQmZ5yB7oqdktZ6m",
  "key21": "4F3TeayHRswTyF1gHpgCV9HDyb4sXH5G9Yf4B6RootFGCFXxo4b6UtMpLEQe9vUcoGnBVKP4tUYmkUz4zKn7Mrfs",
  "key22": "d8zi1ChhjgmTHxSCdPhKykaGrmgYJJrpMbwNm7xZNbyW2jQH5TJSsuhmeWBzQypzxrQFD6pFEtofXvoo7Ltfmx2",
  "key23": "3TsJSjARSjE8ridnE8VuvoFh5zuVPfzEjf64gYtv9EX9GXHSiTgmY8nebRug5cmHdXE2YYjqc6C9iZpr2jnKALqt",
  "key24": "3483Jr2UCVpiJo74W9RZt8eeH6bs1JJXFKx2qwt31Gj5NDxdMZg4xeDYq48EjXdCbp5j22Dz7r8MD4Ba8xPMJ8XR",
  "key25": "6go4uTCiDm2CKMJhfppqKbEj6kj9CBSYk5T45PrDgeFBYh7uVf9pUBGzPPKzoBHgZUfuoFrUCKET1u7PvtvFSCu",
  "key26": "57sVn5Bo1P7WhaHHF7yGQPE9UgtwXYHWLJLqtfZ3HcYFLSTNMwXsuxLpxDMkb6q3iJkQFj53APoH79UixEemuLRP",
  "key27": "2vFu2TzPFE8NqGfJsH6z84HzASSFfJzAwrnctALdqud2Z8Hiaxr8kLPRfGSe8oewcs273XH6m7zs7tvKoFmyUBfg",
  "key28": "5T2xwH4raVLsBXrFpSiX58wnY9tLWb5vu1hpcvc9QCHDFjuX3TZvW1UNWVLzpiedJCX5TSe2wbBKkGnsPPFM1yJ1",
  "key29": "5GUk8JNTsL4pCZUREYpi4GNXjgV1M3kydFgGKX7AHUt6QnFK58g6RF1HysadVr1MMkRFEigKZEYhbvA4HbZ714ey",
  "key30": "29ZGWrGkWPSw84Rok8kxzqm8EYicTjCnhUs9AM7aMmwCR5MKvfSFWMzmH8j7k8ier4MTDJGFNyXu8o4gcZanJFiG",
  "key31": "4c9vkk8VsFM1cebCoh3CB3P5jK4UkpNbztFc3f87WbVdFTujEfeCfmx9XPjSAyNMVJMxc9ZypLMRMd5xqSYzke2t",
  "key32": "5SwceEsUpY3oBD8basga1hAuBB7yk9F1RT2xSjWaQDefihdKP81KLup57ef7UamU92AFx1FaarmNYARdoBrGYQ9q",
  "key33": "64oi8wtw7ZswKvCFvBuaJuZbNRU4RcsaprWwgNJXiGH25XRo4eVDYN3mx76ffWKSWT18wBms6xKnDUHLi6Dt7rqv",
  "key34": "3q7eWZxAFifA12Ymne4BMMyMh7d41K1kGNxrWndUBknn9ec5vDR5LgeugyLJxnFoZZkqy6f4ShDWQE45s4izm2JX",
  "key35": "5rnw7gosqXQszZjUMxkRiycDY8ghjVrDEENZUz2tmzJM1x1Q3TK2jfV3pamuRErB1qvsEhtDQYVBroBaVs1PG8Hr",
  "key36": "2hydwevp8k1FapPw37SxrcaqpE277wP8NBnEkEJTsqUxe3CAftRYJ6aRfnetfgmYFh5v3fCdFnrFvYaZ8nHCWYKB",
  "key37": "4eiXhwwabY398RXoXyHcJdJXxK16SiE3fSJByTxKkXDVFHXvv8nnnq6frJPRCsfomJM2MwLqZ6hN6w41PPhW9HHo",
  "key38": "2fC8aVzePyUvJyJTDYWqC7byo353VD5twkEWt56FCpyc9gT22zPdLNaN2o6KcJwHdLcKWPeQb9D6jrbDur91yBqX",
  "key39": "59NMvLQjsRKGLYTF5LvWm9ZmQJdcMj5jwdVtC4fMRNi7LrfKekaVrps4bE5c6XK5DtW3EVdBVnDF4gZpcXj8ZUBh",
  "key40": "ttZN7bPM6d93ukt3EnQDq25n4VtYF1CG3cBCcsBcKaPmb62HQHgPvXPN6jzwfSv29VvoiHdjeu9GJNn79nJsHKn",
  "key41": "EgQFGiVAFm4pxHE3GeaYaxoUXFDqz9SPhK5zfTWqCREo74UbMtwh3whAVd7hj5PtsGMVbR9iZvrJ61SpgqtWweo",
  "key42": "iK7hvcY7Kpd4gz9vYMddxr1U8RrVNLUxkBdYA8redfteWxq5txjX3EmCQDbktiRdShk3jVcargTsCnqZGHUetZB",
  "key43": "4ZNQ4aCcKWPv2iXTPBepbun1BRPAQkXS2z9NQbwivy4fL3h8xR92QZn148Q22ubRPtX8orLem5nyj1FJS1m1rGjY",
  "key44": "4gu8mzwgBsqd1hZuxWYU8a5fK9djYqq69vuFXMMavrB8ngQbejb18LyaeXuDj8MYWWPCVG8HeTag951tQwtMT8xA"
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
