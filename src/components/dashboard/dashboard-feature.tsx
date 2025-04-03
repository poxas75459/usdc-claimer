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
    "62fwhgNaKFqDT9dKJzEZu4stayuf64rhuyefP57DPXjhxdvWjRJQwY7XbFfi46AdYrFuQdnNUH9fojyX5eJ9mVAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "523B5MxigyDLji2XSZehy7nDQWKe8EDScQaehUf7fxnhc95hvTo2tcNiypDstqdiznbCyXKjWVmjnETWNPfJyZEC",
  "key1": "61V925mCSp92Zo6P6KUiDcL3isneaAn6E7ty94KeAzHf3DEFwMGMGBCVZn1MfPmFoEYVSpcuELxASJ3NWZWmYU8r",
  "key2": "5DbBtuuorcxkb4knyt4QLz7HpjJJpxj5SECSRFn7Z2Vo5DUKV6gg5cKDMzcYXEcN1o11h2TFpQhQ11Y1HbtBu2sS",
  "key3": "5Uj7kYezUBpA5xaBRabTUyi5bbX3nnx75h7V9bvhdYkcPh8u1BEgvrW3iXgmSUCiH8LgbPtxej6CrYqyAkLF13Uw",
  "key4": "5eRbmuGNyT8mY6SibFLKEfvXmUHjehQ6vWhsjHBwCyttxeNih4Cyf5ii4sQZ2F3zrGWy8337XyKTbQw3CRYusCJE",
  "key5": "47y3GEBp4c5XkAwvvHShigBqphiuxtMZ8aHPRySRP9QYanFLpHDdre3M2YnKFUtnY24it9zyCGu5J7JsShFB9SwR",
  "key6": "54a7nvPb8bCEF5kySXW5g2EBQ8Ar8EBeZo8ZQQpcTgV9ioPbCFrnYE1QKwZsjB3Ecqei1SH1CfmSRscfJVZCHqhV",
  "key7": "Pa4ugubUN3tu5AgkxFrhBbXVQkxEZuN2K7Jjoa5ouPVv1XAwU4pBGFnEan8ddo1bzWiMWdLzkwJVN2x4AB98qZH",
  "key8": "4RcWLVtMV9cS53hAoGtHTbA4rroNHjtdtiStk6qsTQix2d577bD9wMfhF2mvbFEtFQ8WeHLpMMKWibVDPPKinf3Y",
  "key9": "2azw7ooH3NaW7wrqvPdhsnDLDNot8PvBydf1CrmZkDLyFJ16CAKTMjX4WsGiUsFcaqApZrUNV4VzNi8atYtTMsZ4",
  "key10": "3njG57LvkZrca1bDUzBqHp1U9shf1tFxMWLdP1vhWx7wu2wB5ht8S6UcMGzCL7u47QbnD1o4UDwEG2uAXZCGL9jv",
  "key11": "5AizWkBGihTzEf4UoFd2UtTNuvcMPrbUiLZEx9njHepKEkDib2Qf1w1kUfP46GKGbv4HP1CjykZo73yyyzd1z9a6",
  "key12": "4k57z73XoDjdC6WKbETaqS6DoAJJM4KmhaMGG9PXpTk9eKNPrsJBBt53TAi72UBhXh2tGKXbe9badHW5YB23Fhge",
  "key13": "55r8qndrwtXqbbwVJ2r8AWJtp5saQWK1gApxEseAUWzY5E3oR3p71HVA8Z8d5gCigGqxMK4hCWun3LJEjKnQAkbu",
  "key14": "MnXWbDggexc7YdkQF6UBKFWAnau2zXEZJucYFCpciTbPjN2idNmLEXAWt3vf3dJNVgpaekhNdWviVAhZiVdA3Aj",
  "key15": "3EqVxmuRu7t1rKWMUV98yx98kfNakKG4sF1UWvqpgqyNxTz6ggFNWAtoBfDSQN7ZT3LRAVFHVc2VtF12okN81Rwi",
  "key16": "3gNgFSme2RzRVTxqPM3dvSD8zBBdRcdMHdCLBwhgaw1bZ6VZXmrdWUsSpGfDJ3EfB21hUDCR9DVWAED4XzXCPR7f",
  "key17": "f5AwJ5uwgg6GEQEFv5kyLpdE2oVsM4HHV9rNwwdWAAE2voBMRi2jbpksapDdxLNFqFVrerKyU5TH2FhuczyZKZo",
  "key18": "5oBBNgHKLjuDNKYCm88AgrbHTyWL6vAJoa1QcKGWRBbhJVMgZXae5AEJdoC5EnvGznD9DX1VPenNsrpPXRp2xZst",
  "key19": "2DdvsgcVKcW3AAUni2S4czmsiP65EKrLgX9Fm7AGLxJaJqR5GmR8daBL9jHHCYj24eS42pzQ1bwSuuKUWrh1MPDM",
  "key20": "4aKX1doREHMUMQGYXdQyEZU6C65Pt1asoyBUZsrZx4tqbFcGdQXdbXV8hi84qt7VczNfdNTuaVfLPVRzwn4oYV1S",
  "key21": "5432WukYF17rHm6LrMuaTAYb9zux9JKmKyE2Jnu3YqJ7Fw6XSd7rUzfuRVpvTDHbkMFd46JWijzY97KTJp5y9HhE",
  "key22": "2XmFNgQFG6oFMX5SagqvsaMFA4zQGhErYfqmNZewo9gAa41upYpa1TrTa2nZPXSM2cnkhrVNLdLsq7RGsEDGVx7G",
  "key23": "2yDVNBBE7yWSketqXYmfkpo95pYnnZyjnt2MPX4Y47SdKsfyw7t7ckjVZqaqVWvzMLRuMtK2Z1cdNVfABA7G3cj7",
  "key24": "uR9MHsM6JnDM3knpFiLjypFwjd1FCtgQU2okspHcacjSaFJYfoCZTPz7UFTBMAj4GSPCA9AkHMe8jNoRKAkbA6e",
  "key25": "4JsVR2Xugb5NjfFdB8LGugfDoyAL3v1VJnnLadvMEWWo7jZBoakKnnUuUrzhJvA9eeHT7rkAzG2hRUuDvY42Fybk",
  "key26": "5wDWrhcXPYN7a3wZ7c9CvFEc6kP9aFPUXR5Wn6DFfyvK7wtbFEevJNFNwj7kcg1JbvCDEq4oZxnRpps9chNTBsf9",
  "key27": "5yAxzbuqYA8Sgbtjw45X888UZccdjfhUQyMEyR6N2TXUJ9uaoPSsTtLoRKec1jWvVS8QxQm8QpuLWT1WKBRCE2oZ",
  "key28": "2rBebgwnJmVXkDFsfLvGs6psCcTekMGLGFM2r36m5Y1ANcy3t3bkYV3B5Z9v8BkMByMABftViLHuLyog3HzmjTQi",
  "key29": "s1F1mwP6C3waoZMqR7EQhRHYWiKYb8uBWh4zTSANntdE1YVxjJ6z8MCtipUpJn7Cx9L9YNWw4dHUPfKiVonqbCy",
  "key30": "5kiHmj2dXecJpJxpBSAT1LpefFwXtXRJoquvrbWgLpCESR98qvvmMSA6Nzkca1oyut58PsAhPf9aW3xTwJpjmHhT",
  "key31": "5SbXVFS6vQngKaRnVnyZk6eE74KyKaZWHJzboj1PMCyFp8gubHbgHp8iGBfNzgGrXD8BzTCCz6z3dQMcebTkhE7r",
  "key32": "61e2p5CPdhdDcSxcvg1yXVbbu2T2qPch7A7h7sTwLkWM6YqBy1WtEznNfhRTXEt5x8BX4vk7zASpsEoxqoMZhEZ",
  "key33": "r81c9SDBF4qargAf2WBVgaGqMb6seRmhH6ZJn3WpWhxvWCpWEevwaPNmQybeGGYfhx5Xep5gEJVMRmmT6S6CMYn",
  "key34": "28JebUP8xjqkPssMLmr1ZSh3vt3XMdMk6h9FnyWzLEqmJboY9fcsR4yZewDdxPFnBSR5VfyKeH2km9JrphM7B2BP",
  "key35": "3u1K1vdiBtM5yeEWovBdYhAUytNr4b4Tkb5gzu3DUGfDeZc3Aee8wj9RsLxD7Vo87a3VKdeGKLrG6g1cYdCRHgLD",
  "key36": "2t9JVQLNi2SNQBP2QSaXShCejMB7fBUYhHoK9L9kzSj2k4BePJidW2aQ164LkmhXCX2Hjzq4bnzMmcSeCzfJcqMk",
  "key37": "4C7cfRSNJS1qZFw58J4v8qfnWyKL18byYTkN5tGegJDpihQraJAGJ1Yjf8aNKCLcN9WyRx7Q4MMPQp2zbtBVAJMx",
  "key38": "FsWvoiLk3PC1otA8XE9E3JWqbXGeM7uEJFkfWR6KKFCTCDHYeZWe5viRa6Z73WnNrc2qx37iDwuF2TshsYQomMN",
  "key39": "2RoFGVnsh5XXw3cBXHSYpMAY7wMvwrdiDRFkBHs3GWtpXpUF2uVVk6MgaLdXiCgKxYwQZg6xkqsKh778K19nffM6",
  "key40": "4S2c9C8HMBzmgeCGJsrTBrZJKupP7RMDSkdWh3Xogh9M4UnR8sDtEfZgxYcmkHudjiV9UBFy7jQkA8pXZF3Kwqis",
  "key41": "46MybXXF4DQAnqjs5pbAgfWp7f6rs6jX6sqbNvwLbkGKztjx5K7VjhsRiew6n97ewqJv38QovSXdnydiohoE49Jy",
  "key42": "58uD1whhP6D2BwpB9757Gsp5bBCBmMccGEQY6VzQ26dwZdSxPqtvgHyNgSTXEzxGMb6P6THe1cFmeANWEUPYHDaJ",
  "key43": "384mm3VT3zHT4k6T3isMn4oMKmwaGygSRdihiWa82Uac4vKMWkugYBe1vsEZ6AT7yCKKvzfUDYtHfh9cf3PrTqho",
  "key44": "24gDBLwj2S8M9yWhWQbK7BCuKjYnoY7j3GKgam6Y9whm5JTSTuVCS8SdLTmAgK6DJPaJJ8t6T6YjgeiFAFPn3ADp",
  "key45": "4Nd5yU3FugGBEWRmWtfe2qU5oqkCRjZzTG4rHT7vhCfSLDzSAUQZvmxtqRr3c9t8kon6oBT9Yyi8kVXVFzPEmHNU"
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
