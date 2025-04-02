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
    "4PpFXYCwxWzwhrbwRmbg4yrThts6ZphKwrTAiBNTo4pcSkAjwpESosBWR4GPFuXHArgLrhmx8nqVmKU9CmacpJL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dv5MCgeTJk9BSxgQRFg7CA6Uf7haCkFNFsndkQxfonEyvoLuzq7ZqTzKpiE8nZfCYkMtJDXavm6zSzXauUcFRRu",
  "key1": "BMLXCzJgRv8fq9c1Q4HfD1LDBSgTxy9FqoGzqS12PYvULMb3KvFAWSkFQn2viG5tPxVHVbnCyziosLyR9BF8tnB",
  "key2": "4mgBFVuvLdzsp1JdcKFguGQiBX8sqiC1gbVEpaMLP7C9BqtTKaSSLd41eCjAV2rF7JoerF7dEjB7t6rM31DKHCJF",
  "key3": "4GepsvkLzztEhwkVhJBoJbfCCudXDs5yg4GpKXejQcVZEW9duFQLo4pNApEXTFC7jVXjPSz4wT3euogd948rbuKm",
  "key4": "5iu4yFnhnf8UYTsqq6uSTRFXG1NZ1gznH5YBU9NMt5RWEx7bYSbcivdTSs8s5zq6spJZ4AJB9vd9zeSkWzEF924z",
  "key5": "4zH1o3nCw2XzRxPge4VpsdpijEQdhrYjBzmq7JN7wWStLz5djdqHdTF2NcGLtssQiQbEEbjWWSirfRRSPArE12vT",
  "key6": "3YE4WZ2LFmts7sEFpGmEhRSnZPcoSfxDHskgN7maT6pyyTkRAjetZK6gk3ApSzmb4bCxSavpx5MkeqoMdiTkwvr3",
  "key7": "3RgzNwHvoRL6Jfr8XiwpLJt6aRbBzotWK2zfp9VWgdfe9KivstRm9UWHGV7VraiUPyUTghnxLBVpHg7Xx7ENGXv6",
  "key8": "4oHGTKaJ55bVNbLATwR8JMmRhGVyBSirrTem2qanFtU3tVjB7WwPcFS844gjEjscVRBeLBCFvq89ooEzxVj5mse5",
  "key9": "2jmNYLiM4LVyS4oPJgCn1m6UyQsVFbhkwyxxzZ31r756rJdVT3q1Zbf9wdeT3LPofHfWVf5dcMmMKhnAWgTJk4LK",
  "key10": "2nSEjYdPScCu1PZcEAphHGQpvBazCv5S8b1tL5y4v5Comzrtsepr9n3fBRfDSEJQqyzddbT85Yp8jqkwH5oqoXcG",
  "key11": "47NKinDaU5LY6RZb9fGyUvuTfmXS4kF1Ha5F8RmSv7YwaWRNYtyDE6ee6NZvcwrkZ4LPXapc4g9wLjuhFJNcr7TZ",
  "key12": "5kfnZJPBkrQ2y9KyTvRHWPcMtkeJRMBtdCTv4KAzszGSSgBxiQJdWYzjA425bTNcMkRt9i8UecA5nyT7oZatiUyn",
  "key13": "2SRxGTistHhb9B9fBTuYpMThLaDjN8eSfDUrRiz8RzPiTUaPFv1DLCHc6PKt6J3cQikij5mLJMn8gDkrwenKeffe",
  "key14": "67H933zwA7V3xShqYx6B2rrsRfcHkAo4s7eg1MymBajrN7eoqJf4fymo4spXAEbGQDt3oeE96L8Cb2coqyfsP5LR",
  "key15": "4LHyG6i9aDYKSoNJZA9hhjfidUKD75wtb61tf1bP5WrqGNZ3pW5jB8LgieD6nuAAWSsR7sNrFH6pYMoHU249d6Hr",
  "key16": "yrT3mNaGjbniGfcTKAaUjYhmT8S6ar5t8TN5HgJBMEiRh8c5YMiWpdB2pTydMpGYQqFHvNXQRvCo8dBQWpUvShC",
  "key17": "4Kxfxq2VRT6nXDisZvdn8Z3faJYxdBkDUycH2yL2qSbL95s9KYwvwBboKLWa5Ljxb8V18DpmtoZoGHU1Aaq8UFBe",
  "key18": "2VAqqJy9EhbM5moVSXEJPGCEu7YUYWMCH2mPyrrR2s5CQHJo9Ayq7AS2gWa72psEJ4iNZeDtdy5DTTZUQbL1ei2P",
  "key19": "EMpu531LABzCav5E2d2Ed5xCdqekfHJmhk87phB2vNHYRAyywo44PCdE5JGk63CygWu5gxsGdzLhEKVR1D998hD",
  "key20": "2gLof8bdFM7c8BWXFcCmWZJJjSTbuJ25nHhPHyYN4N4JKoFoEoVV17psnDSYyMRJB561eY6173P226fG1avwovb4",
  "key21": "2KWNuZ9fxBpLCYSWC4Bz1GquFh6cG71fTYVvE6ffswX3Bp5eBmdAdkmcSGNcTzqvmfNrFpE7qy2erut93cykBzXy",
  "key22": "4RL8wboP8V3ZjGs79MY3HuMB7XGnsHRcc8WCgVEeXkzyuWZiXctq5ouNq4QRi2Z1qbNh1UtkZ2kdD4A6HSFByL7i",
  "key23": "h1X69MSo8S73AiKPR4BhBskRGL17vvZMLd3cVVf3UcF2beHr7MSRJAzwpMJAj13y8LTZodfW7ksQB228P2akVae",
  "key24": "2PgHL3c8GgmR9C1CjgCrXTSKBVqAMPRMbAjtmQt8W6FpqwAdipuQjhJNMNDSgHHMpGPuHCwYnj71ktCB3zAzwJ1q",
  "key25": "FttC4Y6TEZ2KAqNVfQyiuos5tqk3CWSN8ZP9pyC76ztW6wD8prJspeVWGrMBaFXXjtkcLoK8AgYuPcFFXFwhL3Y",
  "key26": "2LWCiFri6ZfmkkGAVxqkhDbD4FWtAs6FCPwbttEecf5t2DoKacKBwz14aRTe5ccmXbvtxrsjM8yuw8HffhibsfhH",
  "key27": "guEbreiT5TaXJsqHV9Sgy8fBgBY9oH2bGCDRQSnEiddc9YuFuGU3gLurNNtSC7WziSXVjgSfFLomADXtVKgsiDq",
  "key28": "3Q7NNNh3dQnwzt76UTRVDJQsMo3HhKAaaWofMfpXVBabjUp5JAMFHA89g48CDmeSxbxkWUYpGQJVDjqSX1BtHUBj",
  "key29": "2mfbtNYhhSWcz9cpiidkVp2raypn1zQBrsQMpkgwSkJAf9mPmknqDApGDWc9swUeRgLc6vd8GBJGGSwFb5XRdqPZ",
  "key30": "4dxH12PMJCjdJhgU4DNPrFD9Ku3cxvW2dNHhPWnEkyVfwD2T3KB6v3fvSVdBaK1AhoRcRuJ5A2Pjo986vsYLsno6",
  "key31": "4JXpFknVKJQHft1MtFoqENq897xuNmZSjenghHM96XiwoeoygCRt4g4RhxMmDCBym6urCqV2fxmMyg5ypQAbtBqM",
  "key32": "3gNKcrSpy8nh1RFfmCfLkGPNanStde7ixg5TeNhedJHVvupBpkfoEeo4ya8KHnfMQBJ78chuwXQkBfE2GuFNUxCg",
  "key33": "2CG9XeVP5d8SY4A72p6hGhrHwNtAzvPuAmuFEmvV7c6edyufY7jVV7WjLTUQyr9pFjcm7itjYuJNHHB5aLDhmTbp",
  "key34": "5XJFdeUBhm8b2TxuSDLAzihorFrXzdZeHbo1vRwkqgB1mkLovoJvCSzVRUSKTP5QsaoV1VhgeGPTsK4u6BSSvecM",
  "key35": "2hBpsffsLAogLLCx7nQtjCGkn7vcpAYQ7ZXc7d9ijR7LUYxECbFuAAAf3fQ4KRnbaqqJ7a6dk1GeN6U6ncJcK1vs",
  "key36": "3gVKVHpEhwD3a3tVyLjY2vHNRJTSNNFVy3ahgFBH6PGZDUNeq1aoFp8fozb6778Bons2ZjnTqJwBrGVoQ7AxkpLE",
  "key37": "2CSv75t1r3pGzRPMp76s1h5yQ5XsDeKrgeSUhkadUBxSrZessPcNfhaYLedKF9YjmpPf28qADeKkYnMfMWtMxeYZ",
  "key38": "yyiNF457EimApmMzQw4HGXJaFXUkjXRkKMNjVFhDCs6bptizmkMNPiBXB4BuiPVurK9qPCNofhi3XoVCRphncap"
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
