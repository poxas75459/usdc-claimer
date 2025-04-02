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
    "5qUKmgW68YxHizhwMjNGcCrMPkMK6UK7rnmu9hMqaemCQwH74oAVNqeNGc2JZn1EJMS3EzYmvp4cXTxHhm445JoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31HiEpskh7wJwPBfvp3vxS8QRFhZvcT6RHxp3xRahmoVvd1nciW1fAfoYjjmpam63SFpRgDcLDURhptFW7GAgM3P",
  "key1": "Lwe38GKAX9kUbyhJYvcPqaadsqvdN2iwCbxkvEBLyK3wXrUxZ6daLxRT2y7KviB9zptwUnpxz2B6QfZf6A14rAj",
  "key2": "3ii47HbchLABY4vMPTWHnsV9mQedeUyJU8AVBfCMU64wagjuEcWCCWF1w67snP84gHKSeY1Ve2cgpLfZA8uSqDj6",
  "key3": "2TwWQ7cJQ1Q4GXe97Yb7joatQJC86Y8jWSTQS7rio5r2VUB1Q3TunqErbpRcXi8ZsYh8QvkJaPuVxLuG27EL4hDG",
  "key4": "WnLxkDtNraVQbchCLTTLF6egtfYEfMgV6Wg9v64ACmQsprfWNyfvhA6vFMbewvSWcA9qrmn99fcMQXFstJ9CMCE",
  "key5": "4Xt42mBL5nR7YEqJQ9DNQJ7BWeyTitptikhkVH4TwSmvt7SgSVshKqpHs4ukSNKtjawrKdNP3Z3kVUPXaAaockP3",
  "key6": "3CHStbJA3YoKRXNh7PfZUY9LfcAxA7RFpmLcptVRXs8G2ekv6KDsLSva5YCGKWirRgpVym8o53CxU9vTkh7b32ST",
  "key7": "26ejzcEQB7ZRRxFpiWWTDArbfaoAG1ivqoysseJ9VTbhQHVFgWebvxndFeEFAYcuyASXDJGJtBAstiUMuvQusgk4",
  "key8": "2YUpYkSURTQqsdjr9rkSKkfdn8oSjCBRVwhNxJdXFPmaGX8U4rbuD31NW2RPDLwYcwUdGSp7hXz3vH5TCHsGfUsv",
  "key9": "YTmKrerJo2SVV8Sa1zVSQ6STbHyrnV5GMDMSkgygezQgYCm6Mbm6X52abFHJ6qFw3jghMD891uGucaWkZXRiRr2",
  "key10": "2oZ7WA742WsRTrVYxN3YU79A4Wx4dYe14iAPG4ruQY13eSzbP4uTTYMd8HWRyezKRRBqmmtngdGPj2GPD2xAt6BX",
  "key11": "5Xs1M313wfcMxyx7iPLB89cxVaLQ9DeazoUfgLqfHMeMt7vUT3A2DeiRg2j5LxcQ6BSqZUaaeYnxWLrE9AataBwD",
  "key12": "4H8SdK4eeST72izTpXa9b12yuQRD66g9UHyPFJtQVoh4EsrnfeWbBYjgXWR78kMEfTSaw4QADekRkkpYBzpwVNui",
  "key13": "2WxGBKSgEhheuj59r4dqC1paqZLzntr7ExmczsRxrC4DxAKWZidt4pTK1exySetS6fkscnAsGdNdubjBojkp8BdC",
  "key14": "595x1pxQRFAiGhsQQhdz7EP8ZWePLQRKtEBZ8zsac4UFEZTMMqCC2SdiWAs8HWmhUipGkieiCxd5boz8o5t6omgG",
  "key15": "5tZiPhuBHEWaKst9u8MnUzNS6dEyA3kvMEqc8kWSzUJRrPsWqziPiHM5uMy1gvY6Lxx41GXpYUTGeNHRpHDryoy7",
  "key16": "4W3vyHY4Ft4dXas2TGp5Qj79ozAN7ahTp5t4E1GWxZFp8z1sgVxQXLadNdBt7xRjPHW5aCKU1Lz5MCUbNbAUXBEk",
  "key17": "4eEK8Y6rrkbjwrE2N4iewe4e8vfGGzacSJUPz7jnRqTk2EwiKVVQQbgmmhALPvgLoVij86tzBRP3VpgUubekiAcp",
  "key18": "34E2Rpi5SEcpfUvjDxQm4AyJW4qB1qjqdZ5jeZ7JbgqatnFeLvcKJAXtJFFNiXZRXkB7JN8Xb6pKNnDwvS7B9ja6",
  "key19": "41SPrb4cZwxqhrdisnkjVczYd8fHf2f4w8myghU9HSMeeFrcuMAF7HLgiyBwsr8W7mPmXzHMq2HyCVjfZMLJqwY8",
  "key20": "RDGzPT33MaFqXmHpPY6G7cGK8f7NmVfD57XAeHzhUejFy9aYXKtQyDftreG4kjJ62QGWqKm3LwQwG7Zyf2tEBSs",
  "key21": "4y9ixgACndmpSz6MZZXgnHuVYxHXQu2U6S2QtEo4ufHjDAiYXK5S8iMTSxMJyyLzTBuV3NuW5wKEM28hnYNxtPXU",
  "key22": "1yox4F7xN9LMMSJEEHtPtvJWshmhVWJbFZyQ7XRwcfyUetg7gpbdK3yd1n8C2GFpcU1ryH49CDs5L99b3N7oN5U",
  "key23": "4c8PuVcLmBad5vhW39DeopNRKCrn9FWrY38FitVmhXe1qjfd6tfRxN8gqzJYYRxnEZtw9uMdQSGbA2KQ89pP2RWS",
  "key24": "49tbsgrQ3XQwqNNjzPBAZ8jurFgScGUSRkArLtwdtNQQVBkfh9nMKqfmMidEkDFo2cywD3n4PypYxDtADdv4nDpF",
  "key25": "4sBZZVyw3NpWdwyTmJZPF8EPQd9VPxgFHcPTU29gHU7ENr2Fvukt4YsLDnUejrXA7khxK5QMVHvtdDDGS4d5Lu4V",
  "key26": "5XbiPq8KLLgBpQw7oMJdY1GyLmiG2BmzyqnWWaqvSrgK3gVcY6Gmx3AzUW6bC9rGJZhgkihUiYEvUtpAeny4kW2q",
  "key27": "2ctNw1RTpZQTwBmsfDBcDwwGe1LhLRx3AC8xDLV6iF32oGK1tqbtBHfWn9tWsKDMUkzoe3SMWst54XQyrBQGB6aa",
  "key28": "FAXmYTBjZbrutcXAA2Q8GrtWy42o4FoEgBSApM9ax6J41Q3afJQFv56UBiAidHpiYuoxrBzj9ytkkTnJr9358uK",
  "key29": "4gG8yFZ32YFRDWYShKqKNwC8bfwm5QXRWByMuhD7suLFYhHjp3eCsywdeaXsqoMeTGrLRKuMxegfHvxDN5NShr1p",
  "key30": "5yKy6joL6ToQEocaNBYUAbkscSnCvnFfMyFqMXwpMQpPMW3F6WbyyPbrsmv82PuZ7yCdZKYoPzZ2h8FhsSdfMPUX",
  "key31": "4GzYaqGQAFQ7sVUgRJYe5N5CYpFbBCXosS5kvmkJRjQ6ke237Qb46Qb7Yyr2nqfF8cvHuUeyGgH4QQsCi9ttmPnN",
  "key32": "3J7RHVKr5XrUMC2tx7acBk6NK8X8AUhfYCFLgeYL62qvtKsVTEftZQ1jn9Bj82AF6eGTSP3zNqL2vgobPHciKdgF",
  "key33": "3s3xQu2P66twi1xS1min6ddnZM5t58bQ5GdyBdg8H6LirLESvfUyW2iax7DZwhZzHyvf9iSM9i5PUuqgPsRPHEF5",
  "key34": "MMhJhZGD3XpPNhCwASNrcJkFUYaoJuurECPLGtx3khEcCfQk9YPBpxnHa4a96JaYrkRj1vP94PYCRMZHEacbPw8",
  "key35": "5y9Q1jYgjKbNpQezUPw8GDhbFECpRbF6Zy7uHihDTsQ38dDLz7ksitbH7myEjgYcmUkizYFR7jy584U3wFbKEsf2",
  "key36": "3NLAEA12Epgwi71ErTapKyQcW8ZX7ZNK9L2S9ASPR4eTNhtPPAqpzc6WDXddwgirpy3b6qNgUryc72gWvJxG8THn",
  "key37": "5swCQZRtw6LfybUcPkmQvCHnGjmZGjVGFVufaZQsQhxtUXzhijVPS5kn4N2gswVbFZmZZJHMhyAtNuTzzMEZV8QM",
  "key38": "21C1aqpmttoxqCSycQyfTJ5WpR2aK5qaDytGLCnSLFWBaNVsn4udi7f4NXPkXDbtvixAHKhRPReJnnWnb6F6RCDA",
  "key39": "NbmA5w7BBSbN6TXTnMcBF49nptyU6WrenzPGicZ5Er24VCZf8Hk9bhywAE1YtXvrQsUEEujdPuKPr2dKj4DoTTi"
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
