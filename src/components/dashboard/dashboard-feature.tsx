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
    "R7ak2i3GDqf5rsG57CvDdfkheo5hNRh3meshuk2bzUZhvqE6YL6QFJUVU8tqPCc9fPVm73mH9APfooS5W4rdCsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5endoPGv1413PZBEvVjVLrWdE266XoCJAXReTedUK5rF99DkL67gy6bNDahGGfGxbtwXXkCvH1SFvPqmxS8qKi4r",
  "key1": "L216irUWwmLvHABEyy1gza6hTVD53Vwo7eiPm8rJChpfnCUBVfQSCT3YEBvS4ai1WREyt4vHmRgTEx4D2AG6qvb",
  "key2": "4dE61i5RedttDoU7o9MWDN5QdYxTupsiQYBjLwQYU3rGApivPVC4tSFTDBB1czTawbDPxe3sJqkY956V5CdjF3JE",
  "key3": "4caGYvahRQimNGKjBMnTWUxvD6yffPHRi4o2B5rtHe5Kka3VfRnAUrgHuN8e8LMP7e7ZdT9z8GuGZivMhPiALgeg",
  "key4": "4foz2UiJini3cb5FPr1J2eWQ2FHsgvzkWasw6KRbyfrAQrACJohpBK9HDJin2rcSTHZiBw2btC1cmkU5mjPwHzaZ",
  "key5": "2qVMbJ6km21sMDXeK3uBopZHcCoHqwvUnY48GgwhKQmYSriLh2qk12ueEmesVuhtRjFV7MqrTHzkC5WtXysHH9qP",
  "key6": "5css6tKBTVQAfujLKMCbDhUXV2MbnYwVAMSoZYa5nFWPvpytn7bgkDpRGWyPz1ZxPm3b2TUrKMDm9FCBnetgmSAM",
  "key7": "37kvuQnwPKymjjChXD19vtrVDxEL7bUhyZL6o3NGuqG4gxgTVtPvKRNXGhrtUEPLqLjY9RvAN4XcRwXFynMbXE6f",
  "key8": "2Zm7CEE2KCGx17T3arRUdWHeUzfA4jVniUyGSrp6xwLcLZ3idLVAWSJ6rAFK3j1hL1BNMqbSmtJK2TszGFL4etEq",
  "key9": "2VZgQxCQdbhXHBTDwisK1ypaVVWje8s8cEpF2twYBt9c3xnhQo5JUpqdK8nabSEgSCcSywki7mH2gn6MoHSBFYwp",
  "key10": "3NzkWLYvtbkBrLnQGUnGQtUxKqqbaxtK4ici8t3753k9rNP2wWvDzYbd7rvYzca2pMQD7Keqbhr1hZqwcPBkcwtw",
  "key11": "5VXgqPoarvhubmH5tCt9EqY4rdv3AVaqxHY4Z2vau3zx8gxKeZZKgzMJ6ogYY3DfyMTHQ5y9s2Cv9s234FucSnzF",
  "key12": "4JPjtQz48qpC6XQk7VGm9Hf2SpQC48Jfm9LSHwwyAAaup3HGLTYbbGNqCZGhMZfxV9EWqYxFueCLmyv4EePxccUh",
  "key13": "5NQFp4NHHwP1DxDvGtdGz545cT3LYTCY7SnaEUVBpdYkoVZq3trN5smBrgBtqLS1Qn75rtGAZEMyBtCbgmWxgahS",
  "key14": "664oPwvyo7oxrA9JeLSjdrPRBQfqRY5Kv7n8j3TxXR6223SgCU387S1U2K1HbXSgvvfopmXriPdXquopTTbusTA",
  "key15": "26YFTH5zGQEMp95NrJEFrCnMLLFGzsPmR6pGpdvScqTx8AgvLBJhkFY9PgKCSxCauDLg2oEk2NA8Rj7AWxou3EZx",
  "key16": "4SYCQGeJafYswsFBXaKDdiANf1DcPjdjfdhwH9tYYw9nrJjPQjzqS9ZRMDNKkVfd6Xk6miwbtuNmfa9wMjnVAqUc",
  "key17": "5sENrkWE923BzPTfMpnqpVuLZadpjsfKuMqNvhNGYNVmrGrkErkP7BPTMBTqoCVfPrtipRG2qRbwXxXW1dYTpEZQ",
  "key18": "5FCKz27CxfMEBz8aDh1JKSm5z6VTBPXv4HFUdfmw3EqQiyVFtm6tNqpKwqCj5ShxMJzyVFv2n44rQVwYKFY89AHj",
  "key19": "3jnaHv8WGRh7qVHcwK7vq4vC7r2jvPvTaiFhNojz8oN9fBKBZmBYvgBzqmmM9KgJ7n9v7ix8CgqdVWhtyVqdHE3f",
  "key20": "5dQ1RnYcSMbvRLN3mH5S2CAqqYm3TAW7758VNRMgjgKageNKoQjg6dugfBEnDBBDMBoG4E2bcFEK7ZVTTFxz2c9g",
  "key21": "43RV5RG7nQXjcqBiWZq4NTdVTB7ZWDyQ3PckDJPidgEtJkanLNxWpNdXEbNhuQKS1Pyd8JNQEwb4Q2YZevQLKB3a",
  "key22": "2ZgeXNEk9dC3LzpfL1eTpLyUPrt9EgGyk4quRjNRTQ4JVg2mb7aoXEpdFTkQcnQKwZ2rGcECeDbFKgaSWCcHdsCd",
  "key23": "4HaoscLGkvc7KQbFrX6YWYkKK34XEffoxLStnxE1qTpxH6bvPFq38noThdCCp2GjptZVraqu3Mz2t9ue12TnER3w",
  "key24": "7FgzX3fCuBDkfnwKXA9R55siPstzM287MWk96SJuwmpKD14fKSdX2TcqhiVsweSRJpVktLmxAiDUcnsWfn8Z3RC",
  "key25": "59hfWi9UazpvquoaSVB17k5hWUNQcJExWd59QCCy5bT1JsYTiWSdRAJnszmjSpgMtTZNAL5XQ6AB2tJBgLFvb1FQ",
  "key26": "3CbJzDifa5pNQwWRue9drZDWt5UkqEx7m7Z258XbdbHvoGZechX7R6F7g5wjVqnC6ZQQPLvERVq2sAeEpRhKqbZN",
  "key27": "YmiPm8ko5Q4uqu2ZfrRNpx1VUYukPNqCP4G99EY8kKXeYwvoiwzudLQiMZfekS5V7THpBp8sarTMzA93C5qJYmr",
  "key28": "2AZviroG6TNyV21sHQgpvDBf29drcP9YMUVG3P5RTMaQzivX5E5mvfhoorkm5CWtYgrHtPTyvysnLqakEHUgCasU",
  "key29": "452nPnLukzsTNWGj9Sm6NttRpCusVkr83tVSQtUxTMcp8VJtikxvat9KUqPj1SqdZXBw7JcBcBUEwhV1hEfQvx4m",
  "key30": "4AuseijBYDjTBjtsLrHL1pE9ACSYcGCnQaWdcgF3V2iN7wZ572xEGJ6E3KcQnjK5BjkCxp4Khnz6dw4YXyNwGZ1d",
  "key31": "4xrYCh4xkS67AUmKQwwCoh481ukjPhjCGQovNrpYR6vm1u7kNHZH65NTajf4kA6CTn1BKk1P6oTea4BVRnZrKwEV",
  "key32": "3K8YcNPoDsAvpNJTg1cEPwiKirRuR7M7e6toQM7pXmnwEMLwtn1EqUYpPEj7HqwiozBF4vvUsxAnybCf3XQkxfi7",
  "key33": "65YBuqcF7FdhPk8FKs3gvC7sRWzNDZTDq1Dqmhw7wzRQ5oAiVsnNEN38dx9GCd9mdd7Var5XTqMsC66RBeBZbnQY",
  "key34": "dzmkEXnC5kRn4zbTUT4HKf5QkXf4G85FwkF8bY2fNwS4hzdaeGiToWAWpJSqsNMSMxymjkMisuRaEUBck8dvAYc",
  "key35": "YXgSqUbxfg8M4S2EZKC6YGaa4gzvdtX2bnWZnoNwvtHoErk21mUUuuivZjcJntUB9BmnXMKfrP8dQBYPkrkDxTZ",
  "key36": "3vHUJM7vybzkvGckofVmotgDxdzYRiNCnvm8irmBiZaNox2bGvk8VniWKz5wsKBR8Jkb31uRXJVaTt5JR6xri7gd",
  "key37": "56TikEeQrDAApJPncxS4yNu3JH94wrqbWyDtG7U52uCfMbQt9Zm9YagApw5PK23Fay3SwoMQUU7TbJLd4qMhtcyn",
  "key38": "5TMziWQfXneZP4ds7944HXqBgqciVv646bVTezvZpTXZxN5NB214kEbqM47CvyK2NCHh6p5bksPng5ZMYk8jGuBJ",
  "key39": "4T7SwgnvSUmb2ftb61eFS8QMmRbxqsC9T7GBvRaacEM5d7BEqYsvDXVCDgkekUCe1a4YhBepiZBqBEY337shp1Xe",
  "key40": "4UazS23MYEKfLzymfdxR6psHuXxqJVQHSJcbqDxqYJfSkrb4K8SDqu9EPJQkBxswZBscwouSK8oRmYoHhBFRWvec",
  "key41": "2FJzpWM4kram5EEwJdE973Z8BV3vz7zSynsCN77vTXK26t38QYpyfuVKFJGK4VKKb9TVENvv7Ym2YPhgJR6cpdbs"
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
