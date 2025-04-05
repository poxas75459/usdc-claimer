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
    "5Pr3jtbiWu2qBRfhpBks2KgFF7XGuaSrhwAbEt3UQ5v8QzaqxXeLCcrDvm6vYUoKiiuJGhPcfUBUR3PrPWgocSzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vYLSgAt9GX7zMoUTzd5XNujSvYUcXZDNQ5j8hVPvWvf5es4aj2RUa8jgigisREfvygPinEFEigN2EnzVLbzUggm",
  "key1": "T9qnyLJvw48mbQdWzhVaYr6vZaCp3jEj87nx6FxsWdkGfrjHowEwKBYBV74X5ZWaDmvtfkoeXJhMqSUgYJ7qP4p",
  "key2": "35yswdAFkcgLjjUhUaJyyjBypF22CbtPLkiQn1DBG9pwo9M6ceHjL7Fi2R81RuF1AYhUKyFKz2g4kmXEoKDLQ34G",
  "key3": "5PbbxS7Nx1r2kb1YWVYQeEXKqVgf8JsvDdrpucuJm7qVDupWW4wcHW3qzrUteeoW4M8gNPQBBVuhisi6raKQpC6a",
  "key4": "5gtictGsuwhcJ61ikX8iyuLXjCW2Voqmqe8nC6h8y47yK8UfL4ufw1MjC1a7hB166vnL6k3CBnrceH63KxgycUDq",
  "key5": "ftU9AXm6ZBMURKSjoF8cXgiaoAUTKoKTvn8DD5eGDqiKj8LgWJZRbN7KQd1HM9Ejek61r9yWjbyyYyBiDWdp9M2",
  "key6": "2NdejSHDb8H4Sn7nvFMAbA3Q3JfoP4mrFRoRVtepat49D7gFr5P9jYEw9qXn8vmUCCfiaoNDuskFi3X5aWZK8pFJ",
  "key7": "uiQaTSrvQZyurKDqfananNgs9JAY3g7ftVLfSWwCg6QTNUHRZ4J5qDhYAznZw3HUVL25PXkaV2KvGkgfjzncw7X",
  "key8": "2RqTuB39f427taGfeAbWu88BnqEXi53ibaWftFBFywhkJCBTEb3LPVaUZWwg2gn946BpQgdzvrUuJB98U14RxTRF",
  "key9": "C8nNnnz3cionhJwo2Go6NKiQmhULwafcRtX8MgdYVsYh5C1jajHwnnTVogcusphkJRcFgpUhqW9KuS3obsTQxFn",
  "key10": "4aVpAC4nXyqvz7s1WTxh8GF31RULzSaJJ3upUzXxNAVcDBSfLqSvKQ19dZXsBwrENDaFFsEW34CPHFtBKvf8ZLSA",
  "key11": "2mrDLnHod4WQpTKyGCnkppJ9iXYuFNVRHDG4RGTiDqUjkiivZuRXHADCEavUyvTzZUDEUjHTLHrbLRNEzfVUd56T",
  "key12": "t3bdNczB4wKoHa5dVeBiWHMZXr1qWT5mj8Bb5HGMN9uJmwG2Nv7GYPy3tx4wkdDgCN1eSpQYjsvgeSTKpEfFvzV",
  "key13": "3NPfVJu6b7uCXicrFZzAV2LBr7MuZRaH6S5C5ANaMBRung35YE5ZuQnWdKWs1G2KaUvT4cVRzb62jLTzajSH3SYN",
  "key14": "1AwZrfu3HmDrugTvCCdtgbryrXhZtYw2zWq5RFi9CEcPgvsrZMfZHRxo7JY9yV38TTYxgxmqW5bRGXHqYL2YyCn",
  "key15": "4ZnaYa2pfHb4bYJd4TLSatf7HBQakiQbDDwueYJWXo1Mpqq3dVNTp3e6MrgYL9TDWEs2FZ6rQCSunUB4hpp29XhM",
  "key16": "4U4R2n3rJ6gqzfYf3vsd5fAhgtukis8nUeJxPGcW8Qi4u3Mfip39qsF2Q1N39d8e9ox4hZtPV1fHnLLTrS4CqvGJ",
  "key17": "X3qUyV9FphP84ctKVBxBsbmv7HDVQeeSF41q5RxXUnUtoKZS2TFc1JuV9H2vzf3qwDJxREXMjaDCGmfhCPAUTXi",
  "key18": "62CGcsi84ktGAGQixTg8z1m8bZ22YgBPBQMU54Btt6uaER7ba4mDXt3Wuyi951BnUHKB7iE4ttFzZ9EPcmQUtvqS",
  "key19": "5gRvpoaQvyid4dBxhhpMvRsrpzpyZ5kqz7XYidJtpN1Gu2nSwDZzjrS3NeGEbLE2hTret1WeNheU4x4XRaA112de",
  "key20": "3XH1AAu6PYapdqH59e1PDsQt4xT8yx6qJhicjDFKsGChbob5b7dTNzwyv8LsVwbUTok1Dr7WZ61E2igkaAaoykGh",
  "key21": "2DQivgtBnnYTcp84svqwoC8w9P3U3a2w6eUmMKVfUyaSMLoTJsPkFimiDHWvsWt5mVtb23pSk4cWGxCYi2vkquba",
  "key22": "dg3KkPiXKQTUJjWB8TkcA8xsyEyD3DWXkxSfeDWzmPyYGJhAj99556VPGmtCG9QYab41QYbbj63zw5nKQ2JN1MP",
  "key23": "3efb5KBkTRimRqie6Be98sFR3rfV73a4R9WcTtuWdNVkyQy1ZtxJ4aFZpTLca4jvapyKd4f4sr5ibpukZ2fG2v6n",
  "key24": "33v5kZMHG91CGHweCC8rb9rfQNGaZqEvSQUAjhKWZS9NArfpGBXq8pXwx2b3fN1WUfKrCEQsQVMk66znb1UKMQjU",
  "key25": "2ZHRXLRQ94bGevprBF3wPfuEgU37CaDbaH6xkTaMWfF5Xc7R73pJe1bSY3JXa1vkTzNcds4dpQeBvurYVyJTSGg5",
  "key26": "FZDez2a6zqUcRSzDK4zgSnE1HCFPfJAs8xxYQG458sn9WezcyfHb2ei8tyJkjGiMRTHMv5Pf9oVrgVUb523e8Ug",
  "key27": "3Li1JziuED1Cv9TPCMxFeUFtap1kRWiEZ6aby4fLG8tUqfAaN2qVJGmvCXzMKx5HBzNFeYBrW9BLHY28Nvo1ZwGp",
  "key28": "3LmaxrYv6jnHrw9GZRqmWvKipwEevGTFHBMfSn7e3rGS3BxjG3CHpEwKzqcBhK9NCrw193yEkdPx5RkCyLWQK8PY",
  "key29": "4d4X6LB5xfoVUxra2w1SGeaBPfJqvtAqz5r4yaJ3ns1mdEUZgVtGZnrKhYsrEwjJV96xF1LtLKR1yShDzq3Rd9ZZ",
  "key30": "3WL6hjiVwWtmxFTym2z7ZQHXzh81sQkw5KA9EWkDDCjQVGJb3pjphDtRzafWxEBdrRgCT9nLWSEcRoXDJ3CEfJhp",
  "key31": "3zuMDZrz7SWyfpr9trZdbpyLbPb3aDoSHyHE6tPhbkAopkVpWbyXHKYxX6vCBPG45Fizd2eUK5hJfqwXXkVpAyLh",
  "key32": "4KnU8o181cnf2stEF3iB7KmMLxj4uBw967hKBnEcNDYzag6q5qn31rBafJt3UEjobtZUnnpoJvArKTUwUnKfSBdL",
  "key33": "7RKFMn8MMTAZLk6u1FZeA2KrUAo4Uqdd7Nbk13o3ckGrMMdC9459G9ZvyRhU7ueEs57Tjg7aghkcc1zbsw4JPKb",
  "key34": "5BeE5fY5ukqqQLwhAGUeamfduAgf8moUp5TnKKg9W6K4J7QYnmHZAAbSQ7HqzQMqxtWxLhZj4ButBCokKVBEpdRd",
  "key35": "5uS6f7yuAfES3qdhM4H3PE6X64tsMc7NRTo4PwXvGSZwFAnphzrkS3WAqna4Rc15cdAwy8P6xeHWfG8znd94PNaa",
  "key36": "4SDB4tjmR5yt4KCZiEEP4YUcDibbStcLTQcwYd4pQeREYJG1UVRkLmdhmPLMvc5yJgikHJ721tZrgHDAx9fPL1cb",
  "key37": "2z6jSFWSYJdBgafviASrx6z9NkBYdxeoFGFtYHdZXBxWVuaeb8QHfeyu3AdAeBT5oPuNCkM5WUrqSfQnjy2EJ1k",
  "key38": "5Wqqb8BQrKhFbQA12SKNQ4CkT9GvmFp7qtAf9QfaXzhbnLvL6khCXhRWJiKhdWdGqxdV3Zf3roGZdwMFdNsBkGCR",
  "key39": "3LmPm7ccNymb8czbbvKFVhZHksH4AHrKs89ZzPP8rxewe8ndWoRnZf15cdjJ6viGyFi2iXhHn1gHtmcvF88VJAXZ",
  "key40": "3XxkiEmtDSHc8KobQY75pviZYYAV76AoiEURL23XtJ7yLp4YpP8fgEcQck8HaMyPA9aVyhJcxNqnmnReNnQF8BgY",
  "key41": "7EEKNiRfu9gUVLhQvWCRnQyE1BhV5CuRWmkXqC6UsJqhFR34WThFjP16nXEpNxTBmUmExt1VRukgVQRHth5sGL3"
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
