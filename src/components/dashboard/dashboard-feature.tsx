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
    "V6u83ZeJvU3PZvHxkGc38yjLPNHjNYaPkxtvCT163VBQUjeJAVLdULtyTgSaoWN2whKB1Ammgn3BTTSPKLrN9hp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W1hFP1mxfuq359a9Aqj6wDNyVy93XB9wzCdU8VAppPiAWPr2273g99bNPUpdpTQCsmcTx2QKVsc8ypL6hQSq1t6",
  "key1": "2hQgMgmBnnUaWy3VDGcQDM3tWNsi3Qg5b9wruscrkdko67uYZAxRDfBLB8iz3jbQKKhqxS1JbLHySDXwHSLNFamG",
  "key2": "2FRkTdbrqzS8LBi8BXjRgLSuGyAcDtrWWYk7AHQAKXipcDyeGAVZu1yu9H9jj7BWrpbDMWj7vk95ei3VVp8ihm4x",
  "key3": "L4bPynjUdmGTAm5fjzfsQr1NidDgT8ZyKDG1iaewK7F4vXA2ecVLMuYUzNmAmPZAuuMxCvtgQ1xp1kYYTK8G2je",
  "key4": "3Mj1vQft1zn7GbPXvbwimY8pEod6ZuGD5qoyovGNQDHG7Q85MztV3qpx7LrqbcKfsZVGCnYHfENDGqBBttqDEvUd",
  "key5": "xJhK2mPACPLW7r2ZUFdd4WR6Us2aeqDioYpHovG6WzNmrHivSjBYWESdGiULCnEjPTuKkX2YdqVLssXBKnZW6Rm",
  "key6": "4mHxcs9ooj7hvNetbK4qjddbeHWMBqq2WUHv9JZLyJoebqQ11Qw8Z65BCjvJBuho8U43rTPwcswa6j7v1WAjjzyf",
  "key7": "2SNLQwG9yYG6pBRC2vrBRsP5PUua1PUE4pVFt8StJnw7nrFrvQ7pxqMowt1iQdemfvotdYH6pnQfBuSLgJTKABrF",
  "key8": "4WoZSgtkhH9keBcni8rCXUoxHyKC6b5Hx8uz2jugeY7U7DoUeM2aSQkpEk9qbrKTajF3N3bnixXCZsmih7VirJfQ",
  "key9": "3sDbQ2Fzi9hfUqJcAujVuvKu86UoRPVD55TDusUzjeMinSxoP6V8Lcrac3ccz6ZzGkqvqpWBz4s3NfuMMq9Mdfwu",
  "key10": "2CNWrGXod8TBufmsYeCM2WSP779bHD8tjcbCbtk7MKFou1s3UKgwcxcsG7YfmE5mwvF7N7jpipz8DgbyzK8DNCiM",
  "key11": "1252cy1hEfAALFkUsFvALw24w5tTrUTNUZUjgwnfVAr75zKEc47t9RHw5AGaHmL6b3g24k1KJaZwy2NuAgK5NhpC",
  "key12": "5YZVzyvH5LpZKteyN4eMChzmg6vWuQcDpZHdj88gJGwnAz5Uu5EvZsifJTBnBy9EA35T3sR6XgL1jiXrd9dNyT1h",
  "key13": "3y3GoL8VyZng6YaoWT4MAZM8Mc8Exudr79F88rREAAH3y7u7rxoL6qVDJa5vpZmCSneHZaBAzjT7AZyHd384U867",
  "key14": "517zkKPxgGaQXEn1m8JjxRAKaP13kfpa4yrQuYYBG2GUxAmcMTEuT1AFuU2KE3mT9GM3WXphx3imaR1ijwMaUeaK",
  "key15": "3ErM3qQjrEpr6KQURys3iwBZDt663at5sKXGLorKSHLUrFoHW1P8ut62J8tpthgSHsDdmh2DW8hhAdHucX64Ptpr",
  "key16": "5dpwc79SVfGHiPQGgd44vHZwMoVCqJBt2Nx3rjd66NV9VhvdxqkrvQ8kKmbeZkyF8fbadYDqHvDKtxMBhvGSV8fU",
  "key17": "2ExfdDEr8Do9296QCZs6QipPAwB2fjYr4EecBsy4cpzwBvzcXoUVisLos4XBcUwRm9PVfDCeAs2YaZw3LuPo4RdM",
  "key18": "4TKjFJ98TUa6z6iMH2tKbxnKqJDiHs1Qoe2TFPZhnZhjt67cKzo9ZVnuJ7wisbQAsbJJpd8SAEVLVYbd6SX4VPq1",
  "key19": "3fmZjZpHHYpr8o3P43tWxSYRTxLMJ2MzCRPYEMERnX8utfWuRD4wpR42UUAifMcz2B7XS8h59J428nzdnBxBJ9x5",
  "key20": "5ZecGbGT8VkeWe6aKHoGjtU9o8BA4StBHZzzwV5h8n1H679X4AuvQtcinSYWGXK1vRm3WaCAvFB9YMA39YiPHfpr",
  "key21": "58TcMVKWGjw4RP46BFTq6phU4buXnqDThnfQox6xWiyX4SaE5NnKFgy5Y1xs9dZ2KnHjxoBtgysZcFHJiLiLMPJZ",
  "key22": "674apWta7wQXSRohmJm7srwcZycjfnSCH1iCh5BMSP1VHxUn9mwXx1cqwGAtjVC3tnEViCF3kRxXTBT2Cff1CkBs",
  "key23": "3f5ewPYnRwv6iQe23VDu65paK6mutgBQGvfWvE3QktgM7m9aXXrYEg32uxdJuPdck4MgVpFwVtE8QLhtZFJ1EzUf",
  "key24": "hakqDmZQCUE6y4nHzYMqJZsAQeNhefGgDXGKSFw1AcWvN1RFHB6gCenwyHRyN971FN1JhqV5L3fNXtUmHQJmpoW",
  "key25": "4odsBb2gXy5QZJLm1PG7cu9C7kFWTFtkzCuoVfUYPTvzLGK7NbZCn5H8kFVgs9vaoSfe3USWYLemKcy6m8H6uyeM",
  "key26": "2tTGeP4xhv1AP2LjJAVUgfoiRpWm3NtvdahUUaRP4By5M2hFAaPf5ktXHHPom6fEA11cApwLYeLF4d3o3GyZDSqC",
  "key27": "2N8qSPL4K3VyUkrerPNnvrojeXnv8G3CmDhUwbMAWeU3fFPCdB7Xg8d6RSM6mwdozpASiTdy5WWCZomdgi7rQ2g9",
  "key28": "41tynQoY8E2qYkctV1LuxoVXcXbdbCYNKhCRtEAMPrKCVAPZGbZ7rFT77ZHM28WLBZ9g5DAfwvWF1WmtJR2V3Wym",
  "key29": "3M8P83YktRHD7hacDPVrh11g8TpdcezHWzXoewmsYqpYhBNWkFtbzNqRwrCRin2gFSUYdTECk7yokeRhZ9XBV5Cu",
  "key30": "3KKaVzQSrwJqpbHdA8RK9ArcgAHYDhEHJgan6nujDTvDWCcF5epaw6UHTZ3WGVG2fdXsB5jU9uCUGez8ti1KstJw",
  "key31": "5rWAAay6dKiZ7oAxfGcmoM8HRHehVmZ8UvC4hLYzvQxR8rTpvDXu8emu4pq388T2aMj3Uq13vWovpvAhz4qbnd58",
  "key32": "3sxKFAJTVPrXCuCyF1weQYX3etMdifjfvcVzocSXj5a1RJG12qNicpuq7FviGqfm7i6VidYvyf5vaxGxK3oP1BGh",
  "key33": "EjJHeZCauqoKucvZ7jpg17zroHJ8qMaHkU6tqT6pAb5H7zZL4BrvzfF5hasfGcnzibWLdTCtWh9aJZBbdjEzaQK",
  "key34": "3q8prVeHw3rL8mLdrVKLp6RFGDbVxjhuY4cWjzmGYyYjsrGVyGwoKexFFYstPyGysuD18zaCvjSx9DrPtUNgVXSY",
  "key35": "4FnxwsGr29urcxFHNaKCApNe8HVhtSnGH3aZhjU8tQoiQV3umSnBQjYzUZMHyo8BCTbqSvGUMcrHVRZtfZVaRqRb",
  "key36": "4Vip81kynDBfgFUo4TH46yZhFi68Vj3V6modd9zimtwFF7NxJEmdvyTfBhdWGQgqWq6Qwo3bVLnNKDAmhPWXab15",
  "key37": "TtKuo69smihnF5nbEYTaURBPTDLwuQBHUE1T63D7qTpt2M5hRCC4MPr7NDywcqF3mxTP79Y1nGtuyjGVJsR4rCS",
  "key38": "4BGqau5a861Frzk2dNJF9TBFWLBjFLfVdEzJgfQtnzLNoF1qny7otebzyvKm2xqrY4uHVpFa27nDz41XdQatghXP",
  "key39": "4RLvM7LRGfiReV6JbfSToY91gR8PsjjquDjEkCGQMShL8Ns72fM8VsgBJRqXiZVXFJqoi5qVuYCCRsh7dei5Tn7p",
  "key40": "5bVgsRqiA8tFJ5pT653FYm2PY3Dc3HV3AMdcJTJ5TjoeN36USbkxzp97ws35mQ6MJZnwADgzFWJPzdvPosvgDiu5",
  "key41": "5azNwJFwp46n3GvLcAByNPaChnQrSf68TgK6vdZR9UEh8nDQaLJs9dM7oGUJaqcS9L9CD5dLvzJt3ug1D57RX8BP",
  "key42": "6NhDocRkJ39D3fABaAHKJjmtgQRo3FLQDvntdLRyRDZ2wwuw8tPBc46SSw8ry6zUUvcFxT9UZtuqDqX88kkd27Z",
  "key43": "28j2Pvb1jE38BCb17P3CeF9jKQfEZ7TxfPj3NoQsGToycxnsEMuf8tqJZyAZsomBW1f1ezUHGHBSVGhGFpGA8Qp7",
  "key44": "4sNycNHdXXHrzYBDAPzYPmH1tVM4Jxnt2F6e1SYD8BghTfD6uJHiYouyvwpt2KGcCMHWtHLMEfMqMDZcQMaG4fX2",
  "key45": "2CTYXJz2AP48npAgzDeMXFcMVVZJGwPYdzQ9KAqG7mNMQv9vP5PbfksWnrKLvSpkRQh7TBHaSQc73asWyb7Kf8nN"
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
