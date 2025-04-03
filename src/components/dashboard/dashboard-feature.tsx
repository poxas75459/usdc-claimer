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
    "3jd1v3H7Kg6ZnX8UmnAqzkvXdJhJxFJxVsKMyUgzBRToAMSPuZWJepGDRhgevbfPktZPKQNcen8C5XfM7qduu73W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31autm9bzS2hcifcisKtAQaNhxf63uiVAGqZfVye5e1bCeri2fPxXGG5ueYvhjsGWr6GaUWyAQAz1dmjyzFA2GX1",
  "key1": "3owmxaygQXKme1nshYPvbbBFVwk6xFXpDQwjFGvsnuoRA8JycY9chyePGWULUzre9jvzxn4fmtyxntrfEPpLJNK4",
  "key2": "eR5UGwCHGvDugZVwXxKZt2XLX9WKu9MPbLBFdiBCN5i1fyfmczBp6aYADWEfV6afrS1b5vvrtjRL61xkBxg4ZcP",
  "key3": "56WWrqmqPm3F18EKJhsd3VG4iWecXg6GDx9PjnECm4BQoWYUeBHJPrwnfBmMU8twPNpKpTbTrooZfqabHVBaPS7J",
  "key4": "2mTmMaBuSEjYxGyDb8jeDN7qHwAJf1dB4mmuXFz4U23vnKGcyoPbmXZKcixPGVYFx1WirgnDL7E3FGibvYhckybq",
  "key5": "zCkbnUddjATtmfCrrfPqVrkj6593ujRJgSqSUk3wSonkRUhfrE2ks9h4S5xFaVeXFGBdrSiAJ5T93XuxBYv35u9",
  "key6": "2CpZcqPXhitaV9Fny58U7cWy7iJATXyhLBVqQNLYXZrqvtNhvT2MLXMZGeHdh18PT4A1NPDRBWegg7uZJe4RJwSM",
  "key7": "56LXXw31k8K1DYgXgWHGcowkujLHHCwxA1DBBoL6wnU4WifnD4Ecop4udMFpVSaQNqhNEL97nV4tZFtMFMfSz3TD",
  "key8": "4TK1azzKtBcJ3uSQVZ2Yfc7xp5KcQoGvyHze8sPC4wtS2ockTyck9Z2MHhhohFyLqaJFgEFJeejUxVyFU1PrwpmE",
  "key9": "eLErhVS3mvXzcxkxDDXwLGpxyB59QJe5nJMkqgbgMftYJgUFoTJ4SdYg2sJXQJhaLFK9LXezUkefSMsP5WRLoTc",
  "key10": "3Z3b4t5YcK963RapEKCFomeiuHDVTtBpu6pLAktmHeLvEZ1CoA2z8Sy8FKtziMm9RithXvd8rMfHnJUCxV1bUxmV",
  "key11": "58au3RAyCk53FqRBhvVDkiurz5adynU9hXwcxJdCy9YSek6HM88h2kqHg1KKiaMzskxkEPPTxmua29XXHPNDch6J",
  "key12": "3dCYKLekFbpJKYguTzDrHGB8jhudqhm3iuR2Q9AVAkuRuZJ4XWfpDsBMDtgGjWg8TKnoDzjggaxxkdr6yBzfF5R1",
  "key13": "4Xo19iATeoeUdtZ6TqJTAxuzZCzrG6hZFJcbtgKSQZyMAFkpUH4rLD5UBVUy31V8j2a68dcgGGX7boxpycbfzjkT",
  "key14": "ckFPeREytfHdGNPfWsj7cLL79VGjQkBn9PpCjEDahNof3SjkezUowA9Mnw3ZA4rQyPaFHzvPwtaehyyuDad8VDw",
  "key15": "22drFMAKwQuj4xfcxNUuCdXbT5drSKZk4Q8kUw5aP4cayqGVjjL6EB4zh4pziSpbCAB59wvVD8AuiEfB6wZ6Hvi7",
  "key16": "5bJ7LATDgj9SQW4uUQxb4iL5CzUTiY5skH35NtvJjAiA3X77vF37Lfj3oFcCVg96ZhbKDKb9SerfToQvBtkjresx",
  "key17": "5Duq8vVHQhojVWLbvaknZfqDwfTDgvPAksCovu5c6P8APXNajPcdvFcK22QfKiv5hidvSHCEiLNtYrLoZMLLLs71",
  "key18": "248DF1qWwj1bKnrZqQAbS8GnaqbTYho8zm5tvqiKiC7hGWEzxdwQ5q5HrTqw42RsdeoJRhX7imfswxjzmQHKrFsW",
  "key19": "51kZBfHaiejhbFS6MbA2qJXpzyyfz5KdwSmF66uurXMUm22zdRXSFeoRXkS5VVjoQYyqew8p5bcFxuHW8N2BQYUR",
  "key20": "qu3pPYRnGydssVB1H27e7hAHySpN11aKeVq2qxBGBc8sXmHsJjgUh2sNhN8io6hRZdaJuxiKDgVio9PAowuNLSY",
  "key21": "4g4JWMkFYEDmkCCd4zwY2oxrJHmpEHvd4hJXxy8YAkYqMbLHsTBa9By7a7o7wBLfydzzPvkruyp5riz4i6wXhGR2",
  "key22": "4B2Ht1Bumok1gpvyVW8Ckze3UVn29fUQhRrHgvg4PK1wrU2ZzborJPvFgr8mzdKX3Vwz4rwD6L9AGSiJMj8zVtfa",
  "key23": "3UYmpDXzfZ78vnBgRnhF8EW5z8XZYL9qvbruGCa4umexcEAvFQYe5ZdUws2PG8CVuZZzXGyErMdykNMMPhxj5rsX",
  "key24": "3qipAQ4YDdv81oZotGWDDoXjKq6QzUff1hTT2ACrpd9f9aQwi1CJat4v8L1U1jXmVMBbsPqhZxwMoheCR5YsLiid",
  "key25": "2QTjHHeNWevrRzCTTz1GjpdSrErp5zFYnP9cRorsbTxRyXo5xZt8ntYt7z2hD5SWvaJ2g3wSumjAhVY4oGW3kDrg",
  "key26": "pYU5K5LeLgdPefTyhLrzh7xqhoRBgmznJK8tdAeGsWNizRBQ6QjkapU3Jv2yvgdn3Dh152tZtspGhJAxkwKQ3Na",
  "key27": "29unJNJj5mwA993SSoxjDPVwvd1yPsCCp9xBfurkaQPf1cQcVjsATLnfwcFVp6MkGBSAqyB7PQYPnddYJ3NDthdc",
  "key28": "2PsztYWLsUAe3WqZSH3JTtFpMDRarBswNT2h4ST1Euth8R237H3E6AvCSCAEbyKKKgMuWyE58QfWkS9PttJFT1B7",
  "key29": "2tncQxubxEDhEMqDFpUohknWr89C84GNq5kWmDuQUC6RMEtyBbt3FQidTCPgPbwp91YzXnbg6nVTycW3Ttsf94VF",
  "key30": "448ZuqyxKb5bgtbnXQYRF48H2cDzsSAGW8W9Nhxi5akQU9ejmarrtCd7csWZDvYNWuwkMSXAxyzi4fZ11AMT72gR",
  "key31": "2EB53r3DZVn66c6gyyuB5kHn9Vw4LDroDa1ByVNjbHVmoS3CRayBhbHPyuodxwABiM1yasWky8JcE43DEKuW6uZK",
  "key32": "2Td38qD21y1BCC4HE1njTui8Sg3gvfHBCpzXqAwTeVM5jUNeKabv3KfhgumWgpfarjUujTZ1tB43XKuFFKQmLJGg",
  "key33": "2FQnwcSEAqYpNtUFV9SVfnMKYkMG96LMJnLM3C6NVQApagQV83yMjnwPGYpn8dke23zggF3SUZ4ig9GHG74PnTL8",
  "key34": "4S79yjqRuW3SMP5ynT9ekJAEHT26sHWKNorbH8tKU3bu8ojSyQLS2CbwEGNQkqw46iEojwzGvZwNJsFe79MiQZiV",
  "key35": "3HxeEd3cGdtNsXRewHmik3GCBPzBZcj7xncnjm7U1rLt7J1xKuhTo4V12dUW9VYEBUoGc1NHFpXpdJbpyiY1o1t4",
  "key36": "3kNoGcwg5AJYMtjmQmK1Wp76nQ3HSvzHa7cDKmvVf7aMpdGFCMbKQaFMEkdZQLSMACGBWNpfWJeWH3jLe37AdQFa",
  "key37": "3CsDxtPpjzFtDYLuj56rsTZA1Uc1VsjFCpeiCt7CmcXw5rCRXHWNW4meyypqeLLr1abEYn9j6xdcDZz3gio5N3F6",
  "key38": "3PHPDp1PATdKLC8ovqAHXxpmrEVyAqGBrThfAY6PwW6CaJvZr87rVwDmY8RAMWbGYYtp7zWYB7b6BntgquVd6HWU"
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
