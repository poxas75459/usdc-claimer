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
    "4te6UyVen74CRKN4G9Wmy4RNiD9tp49KRViWHSjqQDpHoDSNokCs4y33nSwP3uutSRh4dJU37rabgH4SQWv8JuRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vyRdE3Ewm6P4LCSBVzpFvgWpinjQPit5DhyEGrhfeJ2bEf6uMG1nFRHiqDGZ7SmRMPfW8wLLyMgBAEAKYCcghha",
  "key1": "m6sQbdFo3TZzzhXkgVdxPnuSJAJQsQyNeUArwNxE74w4rje7uAhxumjCCrCCoZJ9CBmGpSJHzoH4cDksMaJT5wQ",
  "key2": "4uf8wPC8T687F64PE6HMEfmVf3AVHZJ6YdTRrCo4rpWYRbiJnNtbacYBD5yC7pBxBq4SUvPuHg1Nd32K3ttv2rvK",
  "key3": "2SEF8bnv8LcuyEUM6qNNwZZweFMZMqnbj9fVDMBWXNkcxhfH6pksf6996wqKBVHUCmPX6bGuXTcy1qHRScNhbutU",
  "key4": "3QAd39owWsFXbCsDyWv89bzoiDWsrNc6cv9pGbjYNw6eh82QVSkzNMFHz5ChMTcLpidbwC4RBNQ7mWZnc4buwihi",
  "key5": "2T4XJv3Eo4b44aYhaTQL6xtnaEf7Pj27ZAKRddmyEyJXVE4JkjTb5yGQtNSXKDC6VQWbHtXiBuSK2NuqtXwuS6qA",
  "key6": "2QETs8MzoY9Eh2qu7vjC8H7yFErYWz8azmDZUfD6fscQiqsm2mz492EzZXv9jGfYv2ogWR8qemHq3mCVEfyAfCog",
  "key7": "3feZcKfP5tuAkXfvH3CtgB6UgWQGhcUmsniqXKveCNEHURquZJ928o3AtBc3rroEkFwfkgKRCfCyzd62tiYvgCaK",
  "key8": "2QAFy2CQVMuyawxsh7BDLPb3DPu35EVubEgSm2xGxEo8hsmKDcHyuvNNRPvNFTuUj6aoAXRZiMm28otsLSdiS5XR",
  "key9": "Nk9PB7gVrZefFGuLUkGM4N62jVg8yXbFvmcXHjJZNMJUFhtYeAmBLEPeWZ5hoLF9qkWLAtDwNW4Fr7VRCCc2vae",
  "key10": "R5xNQkybX63oBkm5eS8EX9oVezXE8pU8yZZDAQj3QejN1qCWCnYVFg9mvvETK24iGWf7M2Dq7tX8yKDT1q7No6X",
  "key11": "gRVr1beQiD4QSFDXxndTo9r6jCudNpwM7G5agsQNij7jFN5q5L3YirFJ3FMYxdjQLNqbPKPK9NFbFi7eBdXWgZQ",
  "key12": "jCDDMPkHxhqC9FPprYi8rgEhAgiXvuGfewyeQ9HC96hQuNwZ4JNTwJj8UhDeGre7mLoVZ62wy9shZiL4HgqvVoW",
  "key13": "5c8thXfAEH83iqBZH4PrtsufFu7YaShC1Fqip6LFk76u4JnXkyFh3SUtbX21aPsEfDGDm4VQYi8BFcGhz1wg4eGy",
  "key14": "2PHDo2B91Rx23JM4cSQ4E7sGaFUpmAwVYBjS3BRSiDxQ4sxutUqDG9Z9xwGLMTmrJSsj32LqKoANRiXDBY8qTAqy",
  "key15": "2vYyLLGh4XSNuEGFgEJ5tV4w73o3zUdJC3AnoGvbPTXdrpqr2EiXzx1d8EWcaqp9Lcxb7SYpwWsWjqBcbtto3J9j",
  "key16": "WCuwLd36PpDCxfa8NJkxr8PGqhcM2tbTZM588uWJPyZd9DV9ahyxzWjtxqTSicXoyyaX98nzG221JEx1d9tTD2M",
  "key17": "3BZuv5gZUQN8hFTdD3WcSboP3sbJ76xCg9U48Dky5Uitnj5v2s6WouAeNauXMT8FxzDKj8vpGteDG3Yyhs2KQkAX",
  "key18": "4RrKAbk4JBkouJ4tn3V9z2qtUxwsV9KXHJCNKghkUyDr8zhwv7WL2crNWc4idt5BmUb19vfU2kc9Lhht89Zo6c6s",
  "key19": "3hPkRd1N1WF7vfjKnVUw2AtXcYd5HndEbQxmHY78uK5XudHoJX6hQsKQi7wZKLdZ1EtjiPPQAYnwoe7YqiyWbmdz",
  "key20": "3uzoMH7PxVRxmyMckjR6p1zxAwroDB63CsYXQiuQXCgXCBLptJqAStpmQwGsYqikmAJK3FqZyDUFmKrmgXS8N7Mj",
  "key21": "5WvKRFGRpXxopoKPqi6WGpMFUrehrvvSD1qiutE4C2UyrZw4Jagv8w1gWA1MjxfYPbNykUqGmyMUSVG7QZhPpk7t",
  "key22": "2zBgrUkX9duekAAH7iF2k9aUJrWnjDASZV1bAw4ygDvruCRsatMpdmy31G6tm2aTBHUAr47UmcuM3AwXNiHnUiSf",
  "key23": "2RUPf3F3RTtrHDcVQSYM6BMAxXSQkn4DwhaED7WoGTPRo1teHkQcPgAYrtrtQzNy6rSQ4Gfauz158LuFVatau6yv",
  "key24": "hVmG5F4Mn7hd4bNjx6nf3P7AW2JUiCqqt6GdAbSNXnykgjyCvWWC4Ey7CXxKmgWnibMPk2qv5waHJJ3r8vUhJGj",
  "key25": "2Zs4BLdmboRi8EoAYSTShMnudndUvw9czEC1JdxtHZ4WCdHzaXfW2WpSfeQfEkXFK7KGGqPXWgvqhGp65MVxSP5t",
  "key26": "2iHeT5LBMSnumJxEzhHR4Y8DUS88dpofmnz859BUBWezQjpVYCthkXajJWWCwiQ9ptAwH1hYHBhhwjyQ6hed2jwB",
  "key27": "54xbYmG57jA2Ny15fFUptPGhjR11RQ2QC4c1KdzkasGPmhAzgyF37zPoe3inhnCYQDdZKkb3KMA5NfrxapZ22hNN",
  "key28": "4UCbskKYnkgunRFmAkqRbTuMnpAmqefBkedZjUxNZyeyJHfb6UzNWdwDXzejwrELygKja25EsGPYh3K99RwHWY3S",
  "key29": "2RRpfm8bqRVXpR22bzExqL3UiQXh3kdu1KczYXJaEoSjP9KLXjEpouKPxxzpiSGwvinhC5aRa8h8mjozgSMjG3Hu",
  "key30": "5MqfD8J6WbxuAypnZZD2GNrHLjUqPsC6g4Cnup1HZqE8PwFKq1n7N3wns69cScTqnnW3gvwyCHiWY1fbPimPAoth",
  "key31": "3VQbm3KxihazqpbBJEon6AVuEJ8XipUQBe9rzndwXNi6HvEDxwuKaJo178EDGyJZN2wbuhduFDLBowgQqsZFb73R",
  "key32": "DA3d32jdncEhSdCJK7GPxxvSQxYmCzxgafzAccdBT8c1MZLUu9x1KsZk6Ljny6PyiFTA3tf8KpKSXpkFrdJBFiw",
  "key33": "3wUPkDJfRRmFvmsoNC2ddrgBjBdmCJQvjtQaWSCwnepQevHgan4WmicqdPNB9qed3JcmV4Z9uhew17xUfSPs4GUZ",
  "key34": "5Nf6cpB7nHKWGQk7JS7w7KVaLg5EWubZmsknDFHhCQjK8D3XsM1gxAwxMzio7XrHgQxuGme3TEK2CFUn4Ubq5YJH",
  "key35": "2rhyWtjThW6Hx8LESVskr5mAzEBiiaK6gABpSkPzCqohxTMznqFRa1ftVh2WXKBdjRVZF1vyPgEvpMQpDVakcMYs",
  "key36": "3DVCgfbi7M3YQXV6QeSHNTYXCmKbmtqSbBuDuzniARdpDiUrmK7wFeJLUr3Lt7nuvZVMD17AeckqbwgekihuFh6Z",
  "key37": "52AZfaAfbw4VMNNu7YjUPy8J8SbhrXXQGTpcQwKE7gFa6mGbFPNVN1ipftoa7F6ZjEoGGvwTeRCJbayEhkv5VKRm",
  "key38": "5en34dDozz8ABJeZytXaEvGRWUcAtqtT1C5RcsRX1YT6K9vYcRdgnW6a9Aw3Xg27ktXgdSsBQm95Z9UApSXZrAxp",
  "key39": "Xyo6bckC34smjm4RcWYkdN56rjPBExDFobwCqme2tZ7PtT1TuWbWEMM9ap2ySsx7XRG72i9TUi2tGnib5c7sCfF",
  "key40": "4SwDZv2cgxXDsAaodA1L9wgin1cZSx1Gxh6hkpB1hEzKSiRNp9LQYbcq3dFeyaXVoCVrVA2VgPkRMVgp3uBXQVxq",
  "key41": "127ThpLU3VA3x74fuu9MKJXyPFENwxaxPEZsLiP6fneAqdDWjuCb8TAFmMrst3ttsvC1KQA3wSJFK7V2o3uD9WPm",
  "key42": "5AWWM5ZE6FBnpTLh3yNyZeqMu3g9iEh2ToCGDqyLWs1x8cDfZqqHtB8LpWH3Zc45wRD5ahRBVi64uZQPwX7D9XkC",
  "key43": "4PZ68gn5NmoJLFSmutY6nUxnysuQwMFw7b8i2Ver8rRUpzYW632cqgk9VFMr9zqM55d2DKyGbcUSww2M6ZWwMmPR",
  "key44": "62p4VsfudnXaAoJjXR5dhQhdG5LTJs54vVy7UYSwDsSdG1xjrF1fUvpBghosJkMBqj5dspQFdKf2wb45eLJ8tXkQ",
  "key45": "2BSud3xsAA323o7ALJBzqjUTHTnvwx2pwx9PFy956e96GWU3cGTxNkCEVK1cc8gfUzhBVZgnWU2bk3ZAnFMxayR7",
  "key46": "XWDCDSV4NoRRjKfkhYrvfUkF2CcKqGqUxE2dCdQ6NDsjqzoAHaLVgnksom5goWeMbh8aJXURAd496tP93mgS4Yk",
  "key47": "4ms2sqoQYFRREBH6XS6tSUhcJYMdTvaLVC4gLWayi9cTxrAgd7fjQUbbC1n4W386wWR8i9gKzmR9h5dCH58NXzCi",
  "key48": "3TBLyKAaUcKKQAWiaBDKCDxURiJcx95SSDBzVsgictGx3Wz3hM8J2BciwPzSQhmccGaGtVwi1V52yrN56AT2iUzX"
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
