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
    "2rHHsCxFrTuWvZG9fbGZebSWnPijWx6LXBEBasG5agpt6ZkRbnFFQx6RBfLuh8nNN77VyQGZnpGWsMDd4uXuNvsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wXYiXyGLF1b2wDz9CQmBMpGPzns8Qf9Fj6xgDedmYmxXu48xeVUqDxFxczrBKCXwwZnUhUFokTrGstXj8ghMX2s",
  "key1": "wsHddJd3Ao8QXtyTnM9ndMJnx3Z9XuabELLLt4mUGDFsK6Esw9Uopdbo3s5H2FRaVncNQ1e19Ar3tZWX5L8CMT9",
  "key2": "4MkHeiKQ5mCP2HWJ15HWdBD2DVz1rADwvdgaHHAeua2EtLghH4PKcNoPR3rnMR2ZL8s6TeeL2yWmcdaFvgVkHqa6",
  "key3": "3uVG1q9iMmpfr5ncyVoFitgdUumuQNFizaMnzq6oKeqKG46fyoV3NDfhyV7Qu5Up7Ta1nS2mJWTrTcNDLAUQ4GCz",
  "key4": "3nvqx54Lmt4gPSSX9voghkE3nXuQJbehDbQTXe3hjrFuwbP2eyYQm6HBMaXbVgeFvceNgW9Drx9SM3fYqr9H7S1s",
  "key5": "UyVGgPDymyfqxBUZrq9KxFS6go9UDsQawPSMs9LW8dsQdy6Y8C6W3bLZb54X4ymBqkFAukMbPhyu6Ryc9fvo39R",
  "key6": "58pcgjZg1urcNj5kw3cUzDjmmd1sfbaMacnPuUGFYQMtJG7FVJA6AoXf8ryAUcuJyFf1vSjufZJ8334yTbh3nSwY",
  "key7": "5ghu2e3b66sqSKaU5Vv3KXsVwgQkaBgYyeWwpU3CqE9QT6dW2e72ABqPBnPSFjFE6fkj2ZQRnK2WNL4YStqFb2K",
  "key8": "4YebZw86Vtn5rtgTcbZLSBJVoXCgWGkAiLd8Pgffb1aVb42MdbMizC7feh76MMLem45RkvKbkitLdzAeRRFNSXku",
  "key9": "49VyoLHRShWj29umbGormg5neEwNaY8be1tTc9UxhL5J2neDe9Rwa2zP3j8R4U4Jq7fTFRoyzAeSj67vu5jcP9T4",
  "key10": "5D29UFpHZU9JNVqnm93SZrga47BXFh4HyAUhkmpWwuDKjsKaagEkZKzv4uz4UpqdTmPnFPqKt2eKKhewNNYzCnEA",
  "key11": "4znZrNxfFr9h8egKZyna92CZi9pcGPEyJ53uPS6qnWfM5sFExqhNHEWMsKT3ge3mEwhFBZ8bbQYfxh5ebmRKmfXZ",
  "key12": "6mErHDwa21aXDcqvoXJz1iVfYtBp2bU1Qy889un7nVj2Cfhs8GnBZB8KZuRbXbudBVWmU2YCuvorgqK8of2rHm6",
  "key13": "hv1H3Nx3SD7iuXBxJ6aKCgs2CRqHP4iYMoZC7uMCRiwhE3o85z8KKRy8cVTCT8PxzvVFX9h34Yrf6x3e5rtfcGp",
  "key14": "29irHm6Pr3cXBWxDtKtUWfNfAQMqvuUysQv7c1VSGCjuz8TqPGUHZGwPQoz1tUtz55LcY6d6t8qqpwuUiZKkp3c5",
  "key15": "5DUHP4QgtE9MYZaF32HaDLehThnaLrd59WyQTxoHS6m3NEzHKtKBqER3e7tMLw8wZ36yrT96ohSqQwKoGgJLxyve",
  "key16": "2ikyXoYFt99to391JoTbSghF3ZfRKZUuuy8KD2sa5Tzf3SaFA7AJfQqaLuMBVmqaV19PZh5KRzn5MW83CXy9FANA",
  "key17": "3BCp7VXr1PHXrGQi9RFn1Bn41Sq9JDot8AFNU6wJtDhaunuqxFeBVjKnFLR6UjdJfG4HPbxG9HYqBBPUzYeB2GD4",
  "key18": "285qyc8fwATKt6ZM7VVzLnb6inFY1nCxDJ9fK5JDrjX2b9KC9CVditBkVj5WraY2sqTrkiSBBphTMx5PTPAeVqre",
  "key19": "5g8hdJimgA5sXNEeauQPDCP6iafVuj152ebFqp9xbgNRd34mArViuxW5utpsSZtucUgPcAgWZj2rZcUMMReBC9iC",
  "key20": "3a9F6DPAujHVNfgPXZWfVsUCFHZ7o72Ny85C9PrXFjb23x2ii4M6twWnq59vTW3EmZbke3EjwHcY2DZkGYNMJf7n",
  "key21": "5QeXUeKsPMNAwf4dPEiByAu8e9hpiB4VdkVbaZgc3YMx48QGfyUHc5wLNbrAGUotvCTgUr3mfBSmMCerTdK55ZZi",
  "key22": "2nCAUysQ2D2nPUBe4UnVgXVaMePtF6K7J2pEZz1H3sLUMSSV5vSRVtgPazXUvr11m8UMECZhB16ZqMXYMwvc8wiw",
  "key23": "3ihHaQaGMvi13gmVHoh5YqdTWT1KnYW4vJ2TiUKAwHqp5oZ7zHw6ZqVp6uc6bNevekBGpkT3E7ihjALWkR6kWTDU",
  "key24": "kbxfBVkBu45W8JrBAaJ32D7D6f5zZgBFiyNfd5UHGoz3ubFcnPtGZ9KgG1zskdTC7j7PBFrSkz7Uxw7TGhnFuc2",
  "key25": "5EQzBNqH6ptGohgKz8YXx7zG2EGPn9hPXRjdnKJYXY6HtFNFCLY6f5pVzXE87khj2Qyrsau6AF3ZF4qEG7rr2obD",
  "key26": "QuqrdooedBNgnjD1B2gSjApNdh1B8iD4NKmxStDeRBKjBrezj56AMmC4UfQFs8dnEwbWE4ChCCUCFyYjUJHstrx",
  "key27": "5CDsvAWzt4i7oYY1RszZBUWquw46HdUVKECg3mv5v8eRDNqe3voriRBb8NJ1FWCrmFgPKWWhChVdEYo7Rp4fgQ3o",
  "key28": "4cXo5MgttPwSZzTirtRVS1cBroMwo5b66DCs4zKmk64ED25zTtdbUpZBS8xoHCwZjJMmZjip1FpkUAQRcWrqd4Qb",
  "key29": "24gftPgmkT5WcGpasQn9BXGwhDHCQzpb7yLdJa8GoSQc3DfCuQykWFuBqyqtJpTWLT44pxf9x1gnQP3y3UEpV4q8",
  "key30": "4yiz2TDDNTbUnbLCpjtpCZgj2t7T4oyf66Kjs3GnKqQ4W4h3x6LhRyS6fNUr8Ww98xbxq9Zzu8j7GyMEkZvctvtC",
  "key31": "eJ5fQBr1mM953LtMCzgTLQ7iQY4Ce4y9hdCoVeB7BP7SDxwSuGJc2WFLbwmEMaKSmGJ2rCxHA5tSPKcZXP5HWsp",
  "key32": "67TAsNr4xvH7upKxz4JCqN4FLKHPduvvRDVHxahqwuKSN5C4Jk8d9rzdYz3As63YUPBphUkkKFnuMmX6QrtAzrV8",
  "key33": "nJryeCEt46mQ8qeiKXLCLPQTF3SbJPQkgzKuCcRmCD6K3TQQem599XHzCCBiJZvJbB4VTGReei2PrkUifBjt4Gs",
  "key34": "3jxY3UgMdGRHzGoRKZXGSYv9cTsQ5tiTksbhdDqNy258G1fVgSAkzFgZLVGYZsEG9myefdsrmoAwnoDEdrJD8dpJ",
  "key35": "uYVrfKsKRZP82DBzU4AGT6qmEnEAfazNvW2kk87xuAuDeSSrVLAQhNWEYUHkh1y8R71PjYqHFAVHipM673DRUFv",
  "key36": "3H4QqPDySxT2Dwc8ZCMUoLTbFn1FWqq3qcbDLMJu5EWKD5jV85GL3zw2Pibm5ES98PhqjCRYCdt7tYvRMXBLoUEv",
  "key37": "47m18DfFrQWbxRX1DDuWHR3DtPiXRwjuUwPubXGeegkuRhyVKojxyjkowhCeYfesqbPF46zJYC6a1AsrjqvnmiFo",
  "key38": "3mTFhUYqCaMWyN9XWz3k5qexhVhiMmrnUHNFKiiq6UJH4hfwkTrfjZwSVrrybsuLt9aPxojefp6wH1WBs6Qajb7R",
  "key39": "31g54Po29nryvStoM3cs99wyujvrKw1pGPv8Pg6wwREmzP1vGiTfKpemWSXmwdctJdsa5xN3SLpBQcCApyYK31HE",
  "key40": "39zdtt6i8Fzro1HTEXw73NgFrVDM5mMAWWnGfkcQaQUh5YRL4HLdfqQQSrLFmaGyWzzwUe9AtVJs2idAFDL8FKnY",
  "key41": "5HvUVXPNsAdHEdbkxQDEyamWkiKTTfxPrQPKQod3GtJakdU4aFWHjgmogz1CvReZwYN6SMqWRNhtPys3iwd7CBZy",
  "key42": "5eRhkPHyLGsYKpHQ2uS4okpJdGuTyB62V4JGbtk6kADMS2VJBSMqd8MJecJAYz4K4nYaA4BDotJRsNNJXu75jAxA",
  "key43": "vcAnVVGVaykB9qBiDSiD1oiDpU8SzUTGLUzdPnUQ9CTusZNjn6Pkwyp8Z4k8P91fKzdkxyoJ8o3NEU2F11EQ6Xy",
  "key44": "52RbnGbKLMppLCtkEZK4D4G6hHa7DYBf5LhiwUVzK77fyjXampwj7VcyzKVJEVpa2p6UiGphLTHHyPU4G8H1K713",
  "key45": "zQdQRDo9fukg245RBDjELZJ7WQsC1n3hjSaWKaQ51v5chsQ5S7GpFomLQFnLxyUrQzK8dirMm1don98WY9bWXAj",
  "key46": "2JqfNUfyoJEJtjtKwSdJhWiqhjTKwT4XxnhBSkmjtzYmwLi4jaz9XWeukZDWRTTMfbgzPpKSEPM2HUgCSXLSPph9",
  "key47": "4YAHzm4XALZn415E28AzG14mpJnAbAvj8ZwH2MYY4pt7r5VHGZcZzbpd6Sq7qxt3Csctr3LVpUJtvWfL5zsJQodq",
  "key48": "5umBL5fy3pefkZHkaqxGGzawVUs2X8PMy81wi45pGHxAMakuFqL4WSnYVZRCFvhw7dAgadpaK7QKxeCu7SuFo3CT",
  "key49": "2k2wKL84xhb2EDcW9FkNkM11UQJoTdahLR9wKS3jgFbkP5HR5FjQbiQuiy8AoFAuPe8GJ1Xz6QRqDVjjiaQye3xp"
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
