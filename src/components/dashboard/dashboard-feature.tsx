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
    "2qYj6nHvBWXGC7m8SeBcE1kqPBUaa3FHmBoETtsEqYjwTCTrS9GwJqyriC2HjZywVPvyokQFwB7vzNDkAZLjrPAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XJ1Fxm9pjtVHnZsq3CioKU2geN88JW3mrnffB6zhy4z6XNfM15tJT5sUtbv5yUTRo2EJRhB5vPYVTnadieFNhpR",
  "key1": "HFYdsfMSSiZ4FErntZ5rpQsKMDJwAndAsQtKRuaCTFaBPf86UmHFZEAmqHWUiD5HuRwdED3QAPyKusHk9mCHr1U",
  "key2": "P6ujb3fZZbTHRRdGjMZzuBBeDRQKTpvuyFG4cM7a9vruhybArD2tf65cfaAzUGtLnQqozCY3frTLyqih1nMYhqy",
  "key3": "1e1oND68848RPZyYxJE87TJ6x8eH79Lnc98ucP7KxV3tvXatrK2hUYZZoGyWotUAyXHW8yCQ7oDdoPa7CCBf11u",
  "key4": "5DzZv54Xi5gwTL3o9ULTvyqaonm6skTEzvW1aHi81eMcCfhPXSR6SA7hGLPn19Lz2aVuiMqg7YksXX7sEoAFiRTq",
  "key5": "4YYkhFeKXSX4z6A4woLk82W4dz8Xu2fHo1treJoMmhcmmjSFWdRHHYw8p1WKU8bGkUXhn9ud2kggxBdpxokP51dL",
  "key6": "2dUUkYqm7ia2mrWU9szbDRhcEAoE8Q7Lsdjf6RELk6t6CZAd5NVh5MnohP978U8vhVpPKphbHeiGd9vY4oaUntvE",
  "key7": "2Wp5rr1iQg8gF9ygnNkFHcNNATPjbZYxF2ynRd4PXH2uiEcFu2AKZMT5FPzVkGmrspX8ufjbDLkjFJ4NNHAbUSAL",
  "key8": "vLMX8bQCVXdnuYpfXMgrRr5TrXYTHeW22b29DnnK4DEvVnBsJYmYgJVDMaKJnoZyV8QZnpackpEq5dNoDCQZPuW",
  "key9": "2oEFceKwKK1Uigeh6LxpGx7HUV8awtTMHrzkASFuDY5uwobjmkmNHCpFoMumYNhzCdMC5E8GMW7Z7Wg1Wz9eCVAy",
  "key10": "35udwQkuFrTCsv8Ym7FUJbRURXAnBrQ3ZNdV4azCPjSM9QCyfg5JFapLThifaHUJ896PQBqGunuQPoMMbvUHJbNZ",
  "key11": "5GcWjDykfYt9H7KXx7iiSyP7iq9r2NyQTqbh7HgpUNv6sYQbeXdpTeM2Mz3rMTchLuMPcM6tWL8PprSiMNxM3bHB",
  "key12": "54y98S6H6jThWvBkmPQBRirg4GFZXNVZn2jjaMwnRwbPzz8eb1DKPAKRDU4i3rGYHVZZmBL8s2GRzRr7JtLmWEEx",
  "key13": "2CeKq7fgchvw8HYn3pY6aDeAFM2FqB4tCSfwksfz5WtPBti3AEEvoMg86L7wn4hZRh9BaLQn9ktbmEo1F1Hw2YDF",
  "key14": "5VfJDSgjCrtry5gEnZystbZLtXSraARqZqFBsSZ2azxKmYh5KRY7oAQBmozfW1NE4M6AAwhA8QYYCuvaFfMDMPHj",
  "key15": "4MfzYyGXhnoWrWVYM9Pi6pGeiiYVM4NsAtHUXb3ShAxYaCquq1uwJBSeaXQX1ogaeTatJcmQw56F8FYhLCtcwazx",
  "key16": "3QvWbBQAbnHxeo5pyz2G5g4TAk2VhsBaSHpBuaVprEmXngQ9qjpb5QGC69sNG5eqd1XEfwc83ADAKsisk9LcT27o",
  "key17": "2RpDTzoMvfz2bjjjPLEoH7PybGtgyAZmivXqYSVmhamb2Z4Tuc6RLaVvsy6Rp3HHVkW1Efchjno1c4apF6Aes8BH",
  "key18": "4Jh95QwQ6WccPPrFbxBEzdcHjiJrMknTPi4Qjm7m1ZFrckjeiPpZRaxSvMfvQUv9Si3LhjhYDRr1hs6tR4pYpftn",
  "key19": "XfhZ7NtS899LdHn1coppdUJ6MZTnMHeQ1CDJJqpTsBzWrtWfGD3tBBVLBppNkowzZrad4a8dpK24aChTuSsp6sK",
  "key20": "2FtdR6fZsYmKYZjvLaZKzacMoXJbBUAkjTcnBTwrhBERuqTDLqFQ5HxJdZhoY9N8uhpPEL6D5YBV8eM5KcffsMA",
  "key21": "2b4BYsW69MugmyzZGiRZV5GXNEdotPvtkA2hJdXRnbYf2mKRKv84R3wNkRvv9NsrT97t1aXfh7RegPtj65AbTeNq",
  "key22": "FxQDc5nfVUx6cGBmCnpsdRbhgRUJjW5Dzj1zXSWnF5JVMAxsDtL7MxuDKFXPrApS99QFEiLpvwZsJwXCs3YqTC7",
  "key23": "LMMX2izxwgDe3qd5penY9nnRu8Fdr748UhJhGAukqDr5hVbaqsKtQ28jqjVtkCXLXS6j1FUhGtpv1vKV23d8YXu",
  "key24": "3PQZqifaZVa3PRgBD2AV3NirMxjB6iGtA8CdNBDYhP3KCYUcAHRPRnxgvVPToxEjd7U2AEps3BbopyHxxkYSVPqz",
  "key25": "5fijo4UUj1dDc7XtCZ2KSF4t2vHEXdJhNwJE7v24YFdMa8utzmcJSWJMPMewYem1y2o37gWqiQaa7WRdeqwRaFza",
  "key26": "2WeVWPpE3wJYWDoFJYvSPPxdtGocQDQLrQAewPYu9L9J13jcNDxaybehFLQuG6LuUuX3ELU138P1NW6CqAWEAGRb",
  "key27": "28bxcftXiPdg9gYGf71bRVf1B6oDAcnM3eD1RHH2B9EzTZ19JDAcxwyNgwFNaZgHLjfePhj3F4m8Pu6kDpmAMCAf",
  "key28": "58sqVQKABYRjmYtwSzjdE7H8PAyEmgTjrYz5YWWY1ZAyYvu9cbVDB4g9eMCfK1KoZMQ6KcxMRg7xh5ftfHrNF4fq",
  "key29": "44ZL5pSXquJKgsd2s6McPi4qUoTftSichCpVpVBnCbTLryuE6K4ZyzK4QCgy3j7d2ZLKfrLYjgW2Xib5StVyeNnP",
  "key30": "4LmBfQGo7TeKYu55yiaQvqcBU7r9bVwVSHBbBebzwbvuBFkUKUQrVyqoCTSazPJSEtMJyr8fwyt66NH81KktcMpU",
  "key31": "4xeCBVoqryweVjMRRRdfd9BpwmKB7XYxLY5X15bVchFyhppB8eMoNumQhqgSuk1S7fXKQQDtMMZv42oBxtx4DhEa",
  "key32": "2wrL4rA8iSRMs5kPLtenM4WcDBfbzo3XQZf4o8L5KsfqMw6MyWPA1BdPULYz3wpvrPVwSLL9cU8ZBs9Tti45c5nb",
  "key33": "hzhJRFVD6Cr1cTXWNPwvGEVUZdQwHtpniV4QEdPaA64KJcZP7KTzhF8mc9PXPRXK28jC7dVqe26P2dQtX3MQWu3",
  "key34": "Vd8tBDf2zdn2dR6BagsNcWdc3G3kLbG7z2cYppMpJkKVioGXMwWsaR7p7GhebbdoPVkj8YciC5mn5bjTh8Fu8dZ"
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
