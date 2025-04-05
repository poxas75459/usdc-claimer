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
    "5vbpP7pVuzh8K1soxHkptNTgpe3JauGNe5WboJTxfzm6f9Ts55xedgtkvmY7VTnUBhtzJapyiyivggA747bUYtyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YVBqoUWCHrUacoeUJay6kCiXPHPVPyTrqggCkvYLtpPFtncc8zdNTygeKCokiWF79vy49LyC6L6quT9MfCqP5sg",
  "key1": "4RsCZRQyiVye2SDpchbAwEyY5vjKf7umTnw1T1L8abjYBYEttEvDuxasB5aGC8YLE1esMkNVms3V7JsHBN7NMXKh",
  "key2": "yLcn9WCfBvwruVqVQhbi9oShse5rfYgqL7H1J1KZhzVFSCAvh9bMBHuB5LhMuEhpanPmX8JWrZ6scgF2u1GYG4G",
  "key3": "36CLTzCad1GQRahvPvBFu8saf5NGJjukny7KkubZZSLHTYu2hQbSTPeSuEUQMFaVdxLKHdW5YLQaAjnuRJ5jdLBN",
  "key4": "5DRSeu93yys3zTyTmWmZF9n29DGzbEdEd9MppEqkLeYoF79a18rhyngLMkC2qpktGYqWaAeBVtNZ1zuR3fg5R7e3",
  "key5": "3JgpfCSQgTdtss7CXsFAxq95MMKhuKDgwLmyZ8Gq235wyikAJZox1ZSZS2semEA8msiJpD3T1eXCXvLbTJAsPGdV",
  "key6": "668YRvodAhi1YukkR871uPjiXm2bxYT2kFtH4kpAwPFM21u7amTpYh11oFBukKCko3oEahdx6wDTozjCK7GSSRUS",
  "key7": "2WUQrh9Wz2GowRT17VBm1fEH836VP46MKokwkTunGfveHMoTwjj6KNpssVJGD5hBdPy22oZ7Mw98Zu4aPNbVNGu9",
  "key8": "kABF5TxvbB4NzdyvX9jsLrghCYY3qxqSLkQjb8fbcc8qJbSZdweRgeL8xgSve8b2ShVgnw8rw7Frw6r27RkNxVx",
  "key9": "pn47djqYd8xN2KrzxE9QFsMqBFtgDrLix2wC5U2txQEdzVQuZVzPu2hv7xYNzTu7wobZD98461uHnTNV8doG1rh",
  "key10": "3bNiLQTyReFHmsbqf91xVzetrvxcJaxPkfYHxqMF9YdqadwussCxF5XPgLBnKd2jduaAq9FXnfQkpXRFG5RuXmES",
  "key11": "3vMFwTwtbAfa8EGhJqFeWvYRuCLrpxzzXPwSsZ9RJab1oth3WwtBB5yjCTdupyvNc4tv9qemgNfrQ47kSMJKZBCB",
  "key12": "ibUCCFvbgM9U1k6bPFdoUxyora8qEUD3bcXTv9XHYYyStEswZZtWPq8k7GBfBaFMQXVgMqPiyxVHtViFEaM8K6A",
  "key13": "5eTWRbGrSG4iNwcwGWNugA5zoTbcfDqDKDPiqZoCTub6BuDW8Vw33o1vMjuFRGCkS4kpb7b77XdzFuP1orN2jhs5",
  "key14": "5vwUztwjt12N7SdPt7Ev9ix7hnLsh7NVAKLgfnm3jffuLdRa49RtsLVXf9CZLRUMWVTFHG1LzHBwTVA4d3CCTu6Q",
  "key15": "VehNnbNp3RDXVcNAhy9NPRxicS7mbitat73w3Sr5rTbHpXFr5GGoSE2wnLueDe296VGRQqv8XYDzRcaoiK3wkF2",
  "key16": "6kw1e4ZwhLGNRQBsCqTKjsgFSQFiWpzJxxZ6KWRu1u3cJ7Na7CZSuKFh6K5BpjuR6aZ9nvwD8RTkCdU2gJcbwMM",
  "key17": "51aU9MKNa85i8UPKJfBSjYTEHPSJLdeLS619RUtPWQD98AHJVsfKfGGQmwVrQ4cVC8ABzjkb7exrTbTnCLM7Zsm6",
  "key18": "289o4CcSdFvW1trgCDJFiHeJxYEEFnn1j8Aozpz9JpA1tPMNi7VSujUXgGxt8YX9ENC8NX2zhErx75LnRgGzkWoR",
  "key19": "3sLGwnihtMKUqAfVssn7w2t1Qo4kNjmLSyCMMsr4F3HNZLneNkjiktMvgHdrTYKL5PufqqVtwoE17Vc8PW7whBZd",
  "key20": "2zRRJRSn1FoYN3o2oMv52uoYJxQgacxXwkDaR6NyWEjDYF3cQrPrACAfzvtJgsXMNMoQzCCFVHNQtJh5AnaNLbD7",
  "key21": "2YnzveWh6qh7fmxuNBu4xj12yEVos6L9fVpRT9RyNYyJasxKRo36EdezXjhxKoKwjdKHzANotPkW24hdTH21s3zG",
  "key22": "2u8m7gkj8SV3j719zjMv76BQdb6zuN8N4Y8UnjMtuSesQPsrjyazK2e7dbZ91cFMo6UvYHEeuHvu7SoWCbVRTFus",
  "key23": "k6azYEMDwfiUsV8z4Uc4jhKWY2KRHgfBqVxjJW5szTt8cBchpmJZt8E9UEPNp3vJDHctq5aZqpjafey8qmnz2Ex",
  "key24": "2Ld7HvMtsVwjXHNWGYKoDTtsLgb5XYtiwTKbCfpKzpFXKpi8xWA5Y9FHUtG1AYfenDJW4iUu6ayGCLZXHG8xrC2h",
  "key25": "5LXwNzteGf23bJJXBmQcwz4UTyL21W1YT6exBRQqvNPPoMRjPeQyhiNQMkf11QuWpFX6ogaSJjsSSG6766HkFKD2",
  "key26": "44uNURLUyvmR8r7bE2QifepxPyxYsyGgTKuFrxNyDLindp8UfY5WvfCZwsxvnZEs5dNceEzwWLXrjPWAjjydZAqo",
  "key27": "4nLApKURxw6PJVL1zhtPzcfNniKkfpPQ2S5PjUrCVUFWiAuq1XKqRAKzAE6FEq8h5vnsJcqzLumDSvQy2WNooUVS",
  "key28": "2HDnKFbDPf839KCeHiP7JUX9faDSLzprmR8ZdpTcjiqDtS3xTrmaG8nYYvTgZ8YSg7xAgoQXLkNYXrLZpQbo1EVv",
  "key29": "3W4RzCG32nnkXobX6Qy2hivSSFWpzB5m1b2GhWRrWopvEc4gs5a2TeF23MUS6SBj7zGaVPfahC92Ynz8Pu5JvbXF",
  "key30": "4VH9YC3DSrCKPVn2atDQxRY8N86ZCefNPqRLYJN8Ez2uaoh9BjvrDkrcivczcJj6L38x8z8ZM8wZ5mmfjo7AiXiZ",
  "key31": "4ZcrYwp8k5rdQc7jovC6EKyPxv1nuESN7Zqx5uTs8msLdM8ZUKzUQL7C7TuHMLbJppWrrWFHmynnT5LhYhgWrXX2",
  "key32": "4e2ix3oe2fZdeoogJrv6vgZSF1omJoGUQfJodL6oc6gjGvm4prFRKwkCX7ahgFoWWYp3fP592ce98kknKMrAjv2r",
  "key33": "2h559ExUAEB2mM913bqSWFqXKLQereCwdyUdT7GzBm2EXftBqAQWWYsh6Y9KeZPmb3PvzjXbEQ1zVErxrJP9Si5S",
  "key34": "5KjpF3T9KLQJeoE97si1e2yffCvQZFubGdSPyNQ1KdnTGX7dWkFN3ZS4tcxoUaqPNtzj1LV6x9gerNUgKMyhxppt",
  "key35": "FCdQyqv9V24Q8ym49Wpr8vpZF2RkTi2eZ2vMb4o8xUcy2BGQgoyCxyCXAyWddcKowkC7mVieu2ZffckKUkFvUTB",
  "key36": "4Z3EYYyeRkUjygLJ4NeCeTrNgrHkjLUM4MH1TrCJnp6VLHNCkZG8bVMDa5qks1sFWiGPkPZzpKcz8sRWXV5Sqh27",
  "key37": "4bEXu3NoyJSphT1pmTkUUNioLyghsUYGEdGA8s77gVBYXiYjsJDjf1tHb22B79qAJNB2DanUzDHK463ZxfTJbUre",
  "key38": "2GUSao7Btk9he3vbv3HUNTjkrr9WMPwVxStZzatEH1Qq7UhLuVDuw6raJVF1ka5kdiDv6fULJbLBkZfQ3i51nEnc",
  "key39": "3sXxPQmm3aB3QwS9yDTSWGeLKcqQ4W1TLfq9SMdkxoucmXQZw3aH3EXSMbwcTA7wpDAujUVXWK31XtwUuXKksTov",
  "key40": "3121DxyZpchPM1iXBmcsf84ab6Qr4Z5tPY5WvMvE1eyDGC85v5V32oS6CQvcrrEz45tjzk2ANeT6nyHKPvejPCQf",
  "key41": "2wVyFiaa7gyS3oJCfa211fceozcLb1Y6yjSyodEcpvLAFKwT9womLGYTgYq1AqPqZjTwavYtJXaVj2N2kMvosi69"
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
