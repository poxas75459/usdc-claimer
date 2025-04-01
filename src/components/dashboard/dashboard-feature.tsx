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
    "2nhraezNJbh8oYvLwHBodzoTr51g9DJGJyiSo34ak4y7zPowXBRXJSdpziVqk4UQTfL18Vorw17ZNNhsaKktu5t2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qviuJj2a4ndksmzBSqj9ampse3PS9eq6uQafVGPV9b1whCm3GQzE6TCioVMeVz8QUFzVEcHhmfxjivdGnmq5U3w",
  "key1": "64okf9jmMwqVnRJMyF1dLicJaLkRoh3z4WfcU6JjCSSWkofxfw3tAKEVXCXckHqhwHJp9iAdjvLPmZN1GPiXDg4a",
  "key2": "4JxV9ohZpPnju9UyNympF4dsJZeRAFmCaiJhckqyDvTLVHatwEQjkUkbTMmKsGkWWK3VKbuTj5Cnv7iWRSAcfnkD",
  "key3": "2ztBpXhrm5NrNtGLvpV3N1MxgGXCF1U1fCBkmTsMa8M3t56UKpsHVpZS5aWop2ymR1GfbUaoc93bjLQJP5kGkizq",
  "key4": "5D3Te6Vn8Qtemnu4rJW8EoVLKkLgtram4ub3bVbko5ccSMBoj1jBomR3QqnbnW58wFzmRsaLFdcvsd1KTY1tBum9",
  "key5": "639uXBjwaRJFWjs7ezwRhPaocDd6c19yh4CYmVSWCfu3nA5KjLMhjcSrbbf4q2NVL2om74M6of66ddfLdUehG1Cp",
  "key6": "49UKTY165xbTC9wyCBtdLT6i435giE4RnAxSVwd64D8p5LUeX2mkt1bFLLzhW7vUJPfKP5Nz225LN9y9JjMRUBG8",
  "key7": "3ANitUYUE21ujLx1UHwSTVgRVZzWqpwVMjEUGCWhBhCJXtVk1mFaW3GWFHebzWj4m3UpK3sYFxa96D9LR7zn1hHH",
  "key8": "3fRkqo2bszvkmjnwHKv5vuuazLaZ7aWBD29d519fe5qVob4hCBPegatVP9eGkGBtbwBGF6SdYARwC2YwzfJduhtd",
  "key9": "4eYjmhr1wYrEd6fnG431KGBpDaDXGSxQrqEsr76wvYpZPopHJ4kHzGAvDgvLCzUMiU2DVrAA9ctfopdvKiCosxPA",
  "key10": "UKi8g8JKmR1rNkPcK3whvGzBnN6G2jfZvjocvjz3Xs8FbPFwPz17As7k6xjn9a7kAd7SHPJieLyGN9QZAueAKES",
  "key11": "aStPquMRcfwzqaeE7LHJCaEB9wGJMA99DaNghQE49Un11KitNbLddtVSY6v7czfTy8XjMKNGDQh8BkCbPZHXNY2",
  "key12": "jK45boAR6Zx57otUmpZktnn8nh8i9FhBABHENhGjtaqA1M2oLr2QnLzJicQqW2z799du6XRWyFZWVkLRYZkX4sj",
  "key13": "2QETAkgPyYP7GtdgzXGmjQ4JkdvjXrRNn5igxw3n1Tg5nPFpKfznBjReHbrRuSrW264jJLZvHNcB9L8NH9wgny7N",
  "key14": "46UEbKKcsTMsUbXPvBmZykj3ZdbJUL3DpEX8oJdVuhYNPVrEXDDUGvgFoXzWQCTU8Woijb1yzmLgzry3VK6FSxjP",
  "key15": "64tYjnSSEfYffps8pjc2kxaSuRLWJqis7tFpXvFJBfDGHYiTgGCH1kgoRrT7njcRM6117o7VV5BM1qH3Uixc39R7",
  "key16": "2gKrpkRr3jwR3W7dVtvExPfv9fcsWF1rSY4o2GJjdvJgiAEa5UkjXnamnFMuCGEdorvJ12nrDMX8MJmqEMp1w5FM",
  "key17": "5eX3VoS4rwpKdAtPMxuaeXXa94JMvkMUKVHWiUxLs5X5GUCyJFiGjDL5g9dagwma9jFQmXZgdra8BuPQd5jCzCPv",
  "key18": "5iA2VBFhQDNMXsHk1RqcRmCNMHJY2p3moBw5BUaXHKVSEtWGZx7647qYZoZHahrkefoFXPKa38kWXadBi9KP5UJ1",
  "key19": "374c5vDCcLZDJ6tqDSgcrWHRA4wHdG23hT9MXCsMyqwvpbRi1RXQReUSivNS2jtLuNV9ZbdDL6hxgezUkpWXXELF",
  "key20": "44iZQUApBkA5ZLnneKcTyQqZBXhxaEjsKvK3hMJTVKAnPGee2xBGXt76g9snUUhUAmzzURdGm9L5J4MuDdwQdhEH",
  "key21": "3BUxXzETTAgW3MGPkFWEFqy8fMTgiL4V214yivkNScjiSJVJkzcNo57kFE55rZ6yZ3LCpzG5FT8AwZz7bVxusnLq",
  "key22": "5CXfWe2yZh2fGJENMBDL9z5AUvS7WCSMuQ6yknXz7CVaqfLE6tt9oSrqtSncLsM8FBKXwPZf8gpt9poPmUFimYej",
  "key23": "4hNdmcd6h7KV3dcd1U1wQPJFj6EY7H9RDvongULKS74NwtGHY2crFBY3bXRrYguQ8JKuLSz1AnR1aTY1fvGHq4ky",
  "key24": "4uyHsdXKrf18SDKs7SaPzZhDP3u9SZiK4Kyo2qPaDbSQArdRD9XSL8BJztWDS5akKoPtRFeJKm7ebqgEn6UiYHVe",
  "key25": "4TTKc7m2teyDvaQ2qCYSuNLoLZvUG1YG2uL7UY6LFLjyBVymnaN3iTepYskurCbcC1rHiTx17Ke8FV7aLHmM7YQC",
  "key26": "5YeMZ1Et9sFoZUST14dXj5r6c4MG5pieR5rxa6NpG1ifKYg5RJ5QxxdY47wriDwYsqTYscYZtv9vc4YaPgptWyjX",
  "key27": "37edBNEA4UtpbRwUF4zKrJJN4SYMogTavL49KVd4RvPRdRnxQzRBkmuEmpYfKNQJfsbVxJ1AqqinPdZV6rT2cYXM",
  "key28": "534kzD3UW9oMu83aHuG5DR4wiNXMameoRpu2TAjjyS5dMFb8rcxg9AL68AenCvw7Y4P6AciDx54SBdAWPuPdTNp9",
  "key29": "oBux3o6FJptR568V6GznHM4KgYGZs8aFjMYfh7nGouWPRemFpvc4F29BYts58tkiVwSDsXLRHniAofGz1Cbz1tY",
  "key30": "4MQhez6kWa7gaHwCqV5SYyDxhgWKr5cDzUDnKGdoJE9FeaVtfJ5e4JwxPhsF6zAH7AQsca8ze6P9pemoftp7JzGV",
  "key31": "2FfWy5zxAm3UxHaVwDFRgRwiZTaVam1YHFShExcCp9T82UpSPkJJ1CXHNMHKmf4yFVgn6kj2ucDGqQm2cP3YpZrQ",
  "key32": "2MV5HFH4vPP1SMeqePZ2GJeUdXi4p8R4hdUhcnWgWFwUA2vkppCq3nM4SWQj7UPzYi8WWpDiV63QXrMFRM1tZTXT",
  "key33": "KPEprUQSWAA1cZfHV4JYNXWiLG5tsqJYywYGcBaH97XbnsbcHnMRhRC8GsspufWLgmCyy5Hp2qj9Dv1JwBmURB3",
  "key34": "4cK4SJ7bzbCY8w9EFHCE34Us51gwaPL23ZusWBm23oN9w9MMn6jTaDSF1aUuM7ADHBoD1cRKVxLBqgUEtjVka4Ym",
  "key35": "59MuD2ZC6D9uBiVotHATngSPs8BExU2xc17WsxjBCVTEcPL4cuPZTQvYKmsWvr6YGdQu2mN4WZyPTbefMBwvQ8V3",
  "key36": "5UnHUFWdrihiHyGQynJm4eR2oCp1CQ1DMbHck1KQWFb33fvYAnaCj82L7waNkpKPRn6a6i7AHfb1oSDEZw58Rrp1",
  "key37": "2FwGWTww3Q5D57ok7P82dj16B1g8a5tnVRFj6VvfP4CH7Cb9iHa9eKwW2nStw55g9Kjt7NPBuWBJ1uMA4Zm1i7YH",
  "key38": "63q8KaYVAbPbuD3kSLys1D6L8kMARW4enLiisBJsJ1CL5xAFsZNY9NbkY36SvgKe4wWposGL7xdnLqvYWXgB72zH"
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
