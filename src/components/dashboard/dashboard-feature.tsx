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
    "5iYtJbGQGdQAf8nUSaTvgZKL5asyaAXedUFtFT1mw2qoLRk5LwfVRgQgS2KzheJiLp37TgjzWw1qCbro54m5L7Dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XdcmapqQ4LfQXQD9ded66pJ2jYaDEWVSxnNQDRLJqbLeSQw47QGe8ygiivfDcrtyXhP2KaAmwr7wUymj1yTDkZh",
  "key1": "48nwan7rHmztwgoUKEAZ6APMEWbayq1jjhsWnQNmEZYwTQoDq7LEFqSRDJv6A7sefaYuAdcNkjjm4QQoDyYMZPrn",
  "key2": "2jC5UwVLvwuRgn6rwhJL6WbVKir1uD97Cx6oGzZoZQMsKgWTfgjvBJAy3ezKgnkUSocVauwTs9WLfeR7MaNrao9c",
  "key3": "7voC1MGtaHzrH3XuVLTdUvJo6UBtZ3kWK9ZbYQAUrC9KdRtLw4KWxGfB8Untb1PMrbiCN1Y3n6itnX4tn9Vbc7J",
  "key4": "3YpCjxnAdWrXu7tGempyb2oEvE6fmw25kqp2vJB2SsWJoESQnUvpuZ3pg7ecBNBsjeKiHdW3SviuooWMoDQh4CNZ",
  "key5": "4x3yjJXaEKUjnXbPvbpdz5mS5CTGoTqiXbUdau8U28zYF1MmUq6zdYnMtcM5vXthkAoGE17ZmDSjBMKPD94kr8QH",
  "key6": "3F6BLZTEkrATe14A5xisFyRP8ajFDvFZGdo2Cxa4Xa7v8ME7kiJWibocgeUGSxhuXRYyZQo3zet4BYam4AFYipyD",
  "key7": "3VD3TLKRHJ4ArSnWvjM5FjfGPyGJoxUsixw5xGFVN6cWYQgnVnie8uBoUxZEsSZio6xMxK7L6T61q8QM7xiP2Tdw",
  "key8": "4wzVucxvjSdtVJ4xoJhc7DY5mCBH1C1v3GFnkafMVttHL7ovZzevuBquuSSfgW1YzjQRiSCSDVG7FmNMWxYnsb3r",
  "key9": "GW4e9omwRM6SgX6NRCMisJEdmyLUMmRUu4nqiHm5QcKisQdPkaV1JPgKPWb7ZWYug5Co2JnxxLTuD3vKm5XrGwW",
  "key10": "guNtGJDKuYKK6rAJzT6eiXqoGDyyrzcCXhgCuzsSEm4b8sZL2J1JiFVRcJjcnnWSQstnRWxRmQiuTsGqXDMJLSc",
  "key11": "35x57ft1fNU7GZMWF6c4sDEhCut4eRv9hzqYdHb17rfxH1eWUtU5kwfZtE7Sn7MWof6KnvWpFf9yR5tqKnnHheyD",
  "key12": "58FDBYLkSSMUubxxkcdNUx2BYWS9s9tUoEzxMzuka8wp3EUBUDGd5EsYd7s47YtqxGEKEHKRphN3uy8ZAFMXK4TN",
  "key13": "565nSh21gvLjTyRgPL3TLm7Q7r6uZdsbVAxKDV9da3zshP7NBJdUjRrPYyhz6Xmhn5Pxe4keRciGNuepEc54Fd7c",
  "key14": "3PxbrBevxGaLQnW1PLmv9ZJmXzCWpiAZWxrw3rPDAYWDwSaKukNY4VNeXT7dmYbQHpw3UYFMpZxaNwDEw9ubM5Xw",
  "key15": "5opgEb8iJ5QVdaYdrxH8eadUGnN2qKjg7jqjBRhvEL3ZxkDza3oXeihZBbmRVEpdBHpGf3aBYRJJi9HhoV7bHAtp",
  "key16": "5L57LyVayGZECDFqxoyEJDzLNSAMREavNRr2B5mtjB94D9itVXRdh57jFshWCbyCw3acCHbvuVabTHziqa5pKYEU",
  "key17": "59jbtqcQW7Y16sRC7LVu8zqfUfDGERRfiLiiXgiY9yLNtLpEsxcrkoE886atFw4iTLNp41JXfv2BEm9j7VzkjonN",
  "key18": "2je4a34SGvzmuKGc9N6zKmzgB4aTSX7LzUcFCauQcHpyKJzxahW8ryVxg6DnGCLvZq5oEhWpcaqm1SsU3irrCkfF",
  "key19": "5UQVcNMshP5Gf98XXLT2RWuMH4WY3j2b1Ghkcu78ftPmNMo5EGf4hJ83CPJdCdyFWBCzQiuKEjuHfV84XgdCGEp2",
  "key20": "5Jq4vZNQjnZ8FG76PhDSVZNCUz2cFxJy69fixH9ov5Sre1i3oo8ocgPKXZrkXytz272mW3keA9LxWZCQq4Chxm1N",
  "key21": "5ZsZbCn7dsGuHneh8BGoj7Kwe9kJowJbAoKh3JFMb5v1FfLNfKoe57i8dxB5rYsGxfzzAwDBqaqMAAD7BMjJVKus",
  "key22": "2d5GnvB3kmF1H6ssaix4hdCL7m4VFfgQRTyGALFWLTn5D7pTYxAn2vwmVZP9dprAzJv72m88toHHrzsf7tujDfee",
  "key23": "5PYww5tEcJMEE3uo5gMvqZZGoGsVNgyqAMn7LkWZocnPzVJTexoYcbq2ESFW9oSwKjHZPyqLnvgGLa3AjLrqA5wa",
  "key24": "67Ah4DtGCbotrJ8HhrKECJfuzrAwpbMfJqsMQhVkKXaXKnEtdUAAKPhCb5wbtkZuiwVFwYKxmTLzNUGVj1ZxNHZi",
  "key25": "4eTNrt4xYNRma2bBenTxLVCNvgewUUhNBFNaFjLnGGPVazAZMgY3vELVyjEx7wJFH7c1wKt2hMCUV8hh23uLfb5x",
  "key26": "RyS4W6YhF8JxaZ4AMHgdwtTZYeboCTyfvSQkz67N13n3mHv6S7aQ9Z1TRMyuoAJvtfJGXVy9jktJUJ7yxY1qFZz",
  "key27": "313dpm4Ks75s3gwPmCMgaYvekyMuzEpUfdVmsbYB66DKCoC674DVEDvMWM4dZM2DuE72qcfw5nC9qZv966At5fyq",
  "key28": "4S3rFchvEk26vpdVN4VjSwBNDkLKf4KKTh8JYJFvxQjq7ptYAYpvgaiCJe1tveGMJDmV99B3D1X6va8jLZGstAVW",
  "key29": "2Co3uHmmmtu8mZdU61Q2WdYFMSM6h16ssbvhKPpGpi3TJ2oFMyrzQsNSwDppwQGcpqPKk1unU9yq7QiAJv1UhEDG",
  "key30": "5jvDYpFgzpEVgKy4eprGS2J3gdva6eVCQ6cg3jGN5x5Zw59EZsi3nPdtqNJUm6wc8GhAfsbong6mgdcuaBqWq5cm",
  "key31": "26hp5CQ79wcPnVBrMDiFxQGvo2ncuirL7XJhP9g3BZZqMnJsivFpzLipq1dkPepXyK8R6xhhWoMNLmvMJxk87uYw",
  "key32": "qjDGzS5nv4hKj8XscKtDrck324qGh1crxNQHWjiQJhtPh3DmDi3PZ6EmVFdjkMgNqK3FNprgjujCEFufCiy6cDG",
  "key33": "TJ4HJSBv4WKjcCKmrcvsm7hdhL2yE81Jqa5VjGLox4wBWraG7PcxDffrxXstMjx8WDNmJd44TFi4fMHREecJ5se",
  "key34": "2YrUpz6zZu99iQCbm1gMf3kwGHmXDf7uvYmcSZU9t2dFwmWrDbCer8P9G6vZ1CJiqHziiQN81SgNHcTTX3NgL32F",
  "key35": "2f3rAyna3M14ydRsyr21QSKKAh6iMNyDaLuvBdbRAVZz9Tyfz95uoRQ4fGrQxHwsvo2vjRoM7P1ZnGS1jaB5xc9q",
  "key36": "2GmxmgPM64JLyusfkDhbzHroLss6JCyPTsnTraNS7Wd3XCo3UkUSwT2vXieMLbqzhZhKveszRyratx6tJP4duNUW",
  "key37": "3kb6yfcMx94S1AkpmiBNLYYtioU5YaRqVg4NQRkJ4wiAFvWQ62TTCgWSAavRzZaS4XdTuXjSNBcjTKBCdSLPwFVs",
  "key38": "23GmB2UP5sXd9wCwBnji5R1dK5rNGqZqyeQQWm57nEke9xysNq4XcNLpf7zU1cjkkWVKu5KfJs4zPVJt8HEYF4uV",
  "key39": "2qWJid3TowmVK1w5X1XocvhLZTtHzNGoJh4KWidcD8pXFfp2imB6NHoEDfPyNJXb8if4P8hpq15Cj6k3cLYYoNms",
  "key40": "5Z5jMWQ6SQGu1hGF16h72fajUcTMqpDGiYYikueveGPaX1M1eDLdm1ktkqDhGwBUrawJsP63pUDtdpi5jgmmYhiX"
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
