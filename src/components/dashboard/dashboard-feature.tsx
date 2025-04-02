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
    "5WGzb71fS1diFF8iXKMsWAeMcfQexfYtyJ64djJHbuy24Cnj58BNrGkdFh8Q7j1YUDYKN1Unw5K8a9XyHurcNmA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AZVMTpdyqAcidnwEzF6bPP9nnmGBZEA26wSb54qMpjzKJ96ATtXt72JBbWSB2TEzWxpFhkZewaWaJAmrncBtZu8",
  "key1": "WVAVaN5FKXWwo7xEqCSzEtMruXusDKyfRQsbUx7MWsKQjTCTzk3Atg9TYRCVXzkcmvFJffTFxaMVrAKgUGjKHhZ",
  "key2": "U39MBxdMSmpJB5r1PZF8V59yRmD44xukLcAJP5i87qKoSa2qQZskFUMvoE6MKEhMfMnJEddkfT6F8GiBpyaXFaX",
  "key3": "gg6SPTtEGue9iJtU8jBcrt9fbVtDEiNKibyEyTL1Ehd35iMQeuaSHgPc3K1tFM9u6k2KRpAw1onrrZSL6uxHGwM",
  "key4": "65oSjjrqVSkhAEpuFrNXemAEZbQmoYePQa5C6V4YJm2CWHhaoyNNc7LCtwDjcyoFigeUqH4o1PeRz4LRH4QyK18s",
  "key5": "3uZfDfwQRK54teBRAJ6GWz3DTF83WAK8HPWnYQ5ysFzNXn2wWdMMdGPCuyCE6ms1eJXq8CH8KVYeVwx6HPMQ2zE9",
  "key6": "2wT51Qosr9dzRpcgNCH1Q2eUMNr6MzJNta4q1V3DQQjR3QR7mMZBMh8jtsQEMghnCkuJrtNwQeFouDzt5WCbF9gU",
  "key7": "4rD5HhELEWTtgcwHAsbV3iLbb7jJCwK94abtwBLV8okQcKFk4h27HnM9XUKf8NV4iWt8tDpJAc2LW9JoqzXMXMAT",
  "key8": "5uk7phK6HbUQ5ZgaQ6iixCMoe99mxtkFQFkPhBnMrD2GwgYmcmaeDFuyDFXF7gcwAxA7PaPRLqcnWsTRkjcx7tqg",
  "key9": "5GLqgv4SGV4AbDc5kPSaRrLTr7D4k2BhSQQ7B8ARh8XMo5231dFd1UemxMnmCYhbxV7uavyu1Qw4t4d1xNypGdCP",
  "key10": "2RLrwin98dXdYnHYfPFyffLe3AamJ9AGtjDVb6vgWSVhn6gi9jwj7KTfZcfB1oFBphmrTubLCjmZrP7PwChN9GZL",
  "key11": "7yYwGKr7ofAREmxhws7t8XGcDmuVR1JBdEg8C7Uz7mxHU8bx7nCeU3reSpp3KTHfg4EdoxAZExmWDH17exCYcdm",
  "key12": "5BmC8btjGxxEL6cB3yAjLRKmUMRz8RZHfGNTN3bV5Gs6zUhpimAP3FoXYep6JFPUrzz2MCbSkzSSnbuqeRSWMArC",
  "key13": "FpSNvviQATkHnnJFmHBosUkJM8PYfUxq2eoHTXjpH5d2r7aadrupQ9ZbUtHF3oPdcVxQ2eQXqdb9EVGGBpCFKmp",
  "key14": "2faSmSozCyWMGtxvHejMGtNDCLSssA4RQ2s86qoHeYPAQ2XWuM8WEZqEYiSpNnUxgz5h5zjAfaxDZ4U6BiBG7QhS",
  "key15": "2ps7rEYTgC3ydFDhYiTfq8v5dWNuk2SNqugh7GBeJeQLEdDq8nm9q77N5hWg1JBh1wCW1vcYbgNzxTgANN4aYUP7",
  "key16": "3DK3ARPG5jTCTZ5aCSG9ttFuSEwFBLmVhFuHHgSyXtXDFPVPgPxuVMtYAmNqh222NdFmWMu74uFSAGu3AEFQPPAj",
  "key17": "4SbFX1pjE4sVAYBA7hYt6E4rLUVjgtcTCsABtu8rGoagkxGCtm6Ev8AZpv36XC3CeXL9StpEP6khqvXTWR3rfEUt",
  "key18": "VBLpmFwJvLuDCXPWQYtKWHpZTy55vZBi4hJuDKs3TUgmta361MbCuy2V7PHsXQWxhV4iFL2wp99Y3owzhbp1SSz",
  "key19": "4emvKTGMsyEdgvQkbAMewy2nEiGbTGopmA8PpqgDibogPS6tdh41MyFkwvGPDV4duBdufrwCcyJDaw35j6gqvGau",
  "key20": "enT5WCrXKvCZYFrFLHoH9A683PepYB3NHqk91PGcxwHN2UyVLamuXoVCVCqogjERDsA1YTJja6FgZe3KPYK7kRn",
  "key21": "2j4yUHFTkiKwcDsygS9ddw7iDzxagGA8FVLV71jXXXci23RhBJarVCL53St3CBvusjB5u88AJnvjfAA8ic7EdBxX",
  "key22": "9tsvopmbQWRk6hJoEUNBwx3bUhohPuTQ4RuWfVjTTtepM6tMbVuy4TpBGcjvinTexYhR1FhECCaVSxWPrqyEDKy",
  "key23": "4pHjKGzGpdFahk7yWLFMoufseDDYDA81R8GAfDrfQeEt98bCdUrwGi9cSauQp3gdSpgNZAsr1NMSHsLMcP7nQuCs",
  "key24": "37dFnZxPMas5izaMCHi8JsUPxAUCZdvgF976FgxtcbnUXKPeb93m8n5frAot7DAscsxqpvk8LNeZayrWKvd8W19",
  "key25": "5kXChpgQBVqEuh5BGoeFkkMEJdo3R4EoARwh5WMFepaxx8wMruDZAe2JSd7sC639VTTVxZmqWATtHhAwbVYDQKo5",
  "key26": "4YzwrLSdiCZgxRGkkCQ3L44etDuHzY5nWvYnyYdRfLHPRgUsDyNmqfV2iDS3hvWHRggFGqb4dGrYZ71HKhH239Tr",
  "key27": "28RRiB7gAsFfpZnwRZ664RmBhyMESNyk3Y4pMPA1F5FGkGFj5gNQ3tr9bPaXSTzrUu6TmcqSWfHsv2hmJEZvRHDM",
  "key28": "58FQJK9AuP56uCQhj1taxXJJ9xVngEqfQknbCDTSGn3VmZ4pvvWhtLYLiy6nX3oNAyGZHjFpKNtsG2wuRmHotvue",
  "key29": "66iF7eQD1zpyZUeWXtNmfnujTAb5HBZkJXNUkXDgqefhxB5tm8jfstLr9Q46oEBB12eLoq1kqHPSdRkgL41GETPt",
  "key30": "3cQxnYfZRSyW6gBZ2xfQz2pdyBRvVKGVYwEhMu2TziJ3W2NL2GPeNE91CBZN3kHWDRJMuEEtCejzwwXk7jeS1efT",
  "key31": "4QD3WKAUeLWVuaKaPKDgEKPDwc5kiumZpSqCZPL4QGBRcsVCnsekA5XsZRasL2BQRKBcF55omSdJpUHU1fJy5UgM",
  "key32": "4Ymp7Wmf4nPgyA4anD8hCD1SyKk4195UKufLFFnioyNHAgZ3HtukrZgzHYLeehtDWTwDdbSw5XcMuE2EEpPPsDKt",
  "key33": "2iAbu6Dj4rWCY9PkemTEqU4FhCapvsYJEGsqNCWsBwNn3zKRfB9y1cXERMwrws8Qu64FK5vMDk3BSkg15ySToEz7",
  "key34": "4dqohdLgHJY3QV8pVD4SBAeB9Z3SKBWBB8m3EVLmywxDARckiVQsGQSoRXMZkrEmpTL9twpy6tSX5LD5qCsjA7bQ",
  "key35": "4p9MThba5iprdfcKXCSwk1XDhDF3W3H7t8Qj85Kqq51fnXoB6aY1P7xjKTZdg6iuPxowu9AZr5M3TMevAYAtJ3X6",
  "key36": "44zFRiEvTyENfRGNkQMKtk4JLzF6Z8sq1dx8S5uZaEzJhi5tRukkPhYiafHb3XtTVkqMEQYUas4No4MyHJhvH6kc",
  "key37": "8qmr8UGVvDm9khJWmqf276Vb5QafcV9NNhqZzCi5hT4i1kEAjPBxFMtWEmypVTinroC5pNh9gdZ61DwftQ9zp5a",
  "key38": "3hJbJHKrstRb11LYYcNiysYvbHwy9vE75a9HEsfjzRVGSRSMbEaZbTfz7FKZumxS5uvYUaC7f9T9d1TG3uku8Ak1",
  "key39": "2pujiqwQYR6xVu5kaKfDPAThFiMbzPmwfXS2j7Rafq4UVizM2xHwcS5Lp822iCHVGnqV3kgjMDsAx4cWY8LV9jpH",
  "key40": "4WWJRbccr9XauMctXfmBVZPCq7Pon6Ug65DmXh2n3aciQhoHTX4q6XjeT5wUcNt5pjVffCFkpaYEdXpQQCteuQeB",
  "key41": "235PwKMRgQeVmTNAu2Jk85LZnkk2dPHSiecJtFvpmYX59nWc3vv66zFz4qVD9RkqwcRM4LaNCzZpQW1vp2RwAAYo",
  "key42": "29Vk9B6xsR9yR3YmzFkNPwBnDLRP7zGVegRpd4BZXNkh2npzg5phqxYCwDZEEMjqnMoi6M9eHnoe95d65X4rR2pb",
  "key43": "22sAimG379utRk5M1y4NDDjX9SE7eaCHbwp9td4qAsYyVY8LKDWF2gtT9mxY6XPX35Y3kFKprxad8pKb1L96ye6h"
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
