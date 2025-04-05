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
    "4q5X4FABy6WxMFpBpGBhyTu76vuyerg871eNTTBUViKexbGwbBV41f7HzXMqovqWkG95DNDYKAP6fYhDyC11ZYxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xEkUPj6sjwcNfJss1Jd6uwuSCXEGQqGyCn3KVwSf91S7JvGNhHA8pxGADnxhTondEeRXyt2SWZTvBvyZK9qSbmz",
  "key1": "2QTVNb8VshLb6UpEpq1mijXSST4zyEv2FUjcqp5m1yhs59rNWhXF7a1wpMLjixtZMkHwcaPspxeg1xkDMFoTUKR1",
  "key2": "4gQteRaaeBUr5oBbrL4mudhN1mbZnnLbeRE5Fyk1sNsLojNd5dtFYvcqDgkLymQqKm6rVULcey6en8HdijshPHtS",
  "key3": "qqWB1M25rr3EquBkwZSQeQxLGFiJTtvuS71NcSykp4FPeEevzTSHUN4xjYYjQ1zKm7sDVL91cxaRTVNxY7ndHYp",
  "key4": "23zwGRHmERLKx6jsUPqtY9sh6L4UKHR3zfznomEQzhiKgETFLCFNVJbRvaRBMNyCeY29rLvcpkZSKZLyxiiVtz41",
  "key5": "4Et1j77Vu5dPTntb1SnJnBiGDBotwvEFe8yBYz9N4W4VoUbK3oE692XtmRcCoY1jAYGf1tDDpuinUFzQBJtF7DU6",
  "key6": "43nKq7mBFMFFfiUbaYSxFMCuy5Fk62K9q2TX6TtadcCrycs8xdcwx48KijAxV2RUf31Ucfe1CaVDHze18wdTWqC5",
  "key7": "itkgDGzfzuFab1BigAnVREtFpioS9WJ6guYupPmZz6ska7DE9PKaGAdgNn7FEJBvqjeY97jUnUSog6kDcqbHyYM",
  "key8": "4YNvmdiW4Bz7VQtdUNp2eaTWmYd1HAPS1JqxMfz3Lxpzjd2H2zhfjwKkYDVgfRDN1Gi4Kn8yG9U68HgdR3ckkbZh",
  "key9": "479QhQeqm8eBJmiRKHWo2BZcnNpswSGqFTxMWpkUfxtHJoXuWdRVkB1QFYRBs3D4UE2twhn4J49CcUmqtk8zteTF",
  "key10": "2qV11QCH899CaZ28tjR1rfzhBmBcvG3WrVPrFcUanufd1E2PsLKV3TH9zkynJ2trvEj7anfEUJrvuc1wVqmfzxrk",
  "key11": "5fVFeWsAoXcxc9mFUZSKRSBNctZcBPigQpzf8HtJgLXL7cKwsJib3pvswe7oLRWm7wpWE979L9eXsrmA4jNNX8e9",
  "key12": "5DdnsBauyHr2Qef9TWVb76VK3WMcWM7Qt3H9L1WDJixZzRTP3MgCWd75CWboCDprMGLVro976pCVnXcUQzSjB9A6",
  "key13": "3eS54jnt5EWgzJAhEcncxeEHEjf6T3JkjJeDMgvBcNUu91KW49EzSWSLNgeZaU5oX97jFVfd9WBkfQdn3KxV5ew7",
  "key14": "42zViRbkN88ecyaBMWEBDkKeE9x7tq9kLwkpAe1fSYvqKKW8Qe63CBxXyQhuBBMpijavmXy1DwDNUffrsjiJMQE7",
  "key15": "3DPjzguTApb5XKk1qhdXxNNXBReKJaGkBhpiKTBnpQuhdWGvWS8tRhDqsJpduVSTkmoYA6A8GzHkv8njBcRS9ykd",
  "key16": "Bp3nXxTnHXhfgmFjf2jmHvYXvE4rGqUUeqddbD4PWBvnB5r4G2UKC8Fqej2drUQMRGcJimVmA1fCoQa1UfbFxsz",
  "key17": "5fStvgv3bQTHENpfyhbDyhK4b1bZGtKcSzoqvdbBfhGqzy6yFtCz2Q5qn6xjczNj9Kp8Qpve7Mo1W27cchRWeTfi",
  "key18": "4MwP6GxGfvVvbXFMLMQavW3CJ6ZuSWY2GXAvD6zy9Rp22JT3466UeXJP93cVcwtRioDJUjdZb6hLzzLqBkN556wd",
  "key19": "2bemRuq4kDPSE9vSfw7EFikF39PWh3WLvhxJq3gSAwkBLEzbbaZBaJKcvpQkvqGSntu9V8GRsfnAVCCZV98JTbU4",
  "key20": "3HUCB8jdYrxTQqo2UEfTjHRqNz5BskHn2GhGiAn1NCxCicSuUjPzfTRLzbzSx626TqU5Z6stQwSXAJNgveunqSSV",
  "key21": "54JhZMTHxCr68SfcsWkEHhUJHsLgR7QS6r7B9K6tkcfdjQEUEsbmosefVESp1rVG5MFmwKK7Lpb9hbUuPExCmhg1",
  "key22": "63FtDVo7v5hxuKUPdiRZerwmxCF7MEmYH91A4KNQHm89H8DBpiMrModcjH5Q618M9iag8uMrSmjGnPBupH42cxsi",
  "key23": "5SW3mrqAieZng5kEvdo14N9c6QNLDcaq8WNS9WFeEjKPXfjMioiHJmuGzcaY8HGT5echntGNoJq2eBsbAMTp4TSS",
  "key24": "5bdDZJWoaEBY9oTPER9S1k4bekCM6c8jJAkaqCSgB1USURGL1agnfLiVat8b49H1e6XrWrYA31WYBZsguCaZ5hKv",
  "key25": "4RuD1NUJmVcCiGnz8fHphFkuatUUpDGWf1uesJVEH7LkmwPZ6uC6zNqxMD8YBy18CDp2ZKsdJqsCRZNroqjxGUCy",
  "key26": "u7ahcY6emTubTRf41dg5KBmRATeScEeCVTd3QtBKruX73kQq5neDHwwDSwchGfec5QiTp2YpvsZegFhqYhqRnVB",
  "key27": "Upmq5EmxdwvSnHfk19T2TJ8xJN8G4Utm8uEdKLBY1C1bdCe8bxnuQHg6pPycjVdiGdTqxkVuN4pD9EVuDMS8n5a",
  "key28": "5EGBEpsHSwpET1RWNHfBbj9EaXzefSsB57qTenTioN9XDwwaJyE5qiUtqgLtVwaYve4YXguvCY5YrWGPT1khaBjE",
  "key29": "3HMQuLQ46XRRHFTh8evNN9bHZNV6T1VUbG91wvsL75g2g98ui4ZBxLs3gjoqhAogWnZGzywn4Z6QWGaXLSsbgQxZ",
  "key30": "2GivKyYkHAJJutfhbwZrnSscZNp2p9S9q9yJSWsX86A1Tv6RuS2nfK6GKJwQfwzBFv26Mg1wEDuAes6Yfq2EHtr3",
  "key31": "2rrb8RFZxxG44qVs8qzmsKgcRzSkHksfdHRUbiUWKcq8JjHpxjndKx4LurNbbQ16Ustbe3JhbDpxaPNCGGm8x3ZR",
  "key32": "3Z2qknVcasPiAjwMn5nqPynkgYbGYSY5XqZindVV7NZspk5KAimBixRMuZhEzoaEC6W3hfJKboYaqvar6WnLBrRh",
  "key33": "2YgMtmYGvyJMgMcy4JWVGjwKZec5beNuYRRncrz833hPjAxgUnfcgoDDY1DqDdt38AqqDvR8qQtrXfW5gE9dnF6n",
  "key34": "41zdBpAiS4SdNUUzrWmvTEfcVPavTCfhD8e5dUNAdv79f21ZtrEfTTrSGT2RT1CJHgsBLJeTusva5YB65jRahYQS",
  "key35": "dq5gFRo3LQYuN5LzvQSyyX3FmJN1bA8TLM3vUpovB6SDHQA3M22MFsh7qjFiHT3AqZbsRteBhiw4ZW14ELoS8bm",
  "key36": "3WxmxFiruHzNL21eLLDDYvXFLjG2VnA7XSxkyk7gfSwrtagTutw4C7bNn2hZRNwcm6Zbswb5uojr9B2Ur5TSxBQT",
  "key37": "3TFYbef6JRyrPvyYUHwrg6mujSmv5jyuYXXSVeB1Z7W165vMjXYAEDFVdaXA4Tw8aQx1LNWnGDz5ZRZfVFY8BnaC",
  "key38": "8WtaktZnyWHRci5eULmdFBU7jz598k7emtGktyqGsfpgrcpL3xxmNPzNN6rG854h9ufGewdSJhixsZ9LMgfyeKy",
  "key39": "5Y3AxYTRJjBm6JM5j6udAvH9D8KZ82SAect6XsnzoV1SznyJBNYHNSnNeapS21KZoFEFjJiTaeqN4iJy7PhGe9jd",
  "key40": "2DucNQeA9Xip9argJeh8vto7hHzEs8PV4r7Gg9UgpXqdJtL6fXswCVmmZdWEp7Wj2R7R5d6yJtSPM3AaWjrDWeTH"
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
