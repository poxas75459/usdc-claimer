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
    "4keEfQEEn5qVGiuwjPtjNEG444Z9sby1WXWzEjuKRVJZSrNdG8y4Jnh3mnJUtESAtpf67ZnNkN47FEkjAfz3QiZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44aTHoVjZi1XM2dMFA9Bc9HnbvipT54tHEte2G5DH2MA6axaqsfbf8cjfxUaHA2477EohzFwPAiWKLhBoX9ywWJ",
  "key1": "51HJ4vFSCTAbFdo9MkWiCm4ua6qqXUhvNYLaD1ZXxfD7svRzNUQMVXRXpr1wc7w5D7UYQdtvLbKWFyWK1PaKPUQu",
  "key2": "2w1JehshRuYC26Hoam3qNkjRSRxgmFoah3Vp2W9r8TtNYh5iHPiHV2sWCxoEufQti8DwZ9dWuoRB1w85uuYA2qkT",
  "key3": "GNzpsh9e6s76SWv7BZ1E355EXeDwreaNeopJgdW2KLVpaCzjtbWYnGojZVUmuxoMXiEnrYxcQFx7dgPAyR3XvyK",
  "key4": "5EPYdLsQA7n9jGd58gDefcdPYFx9CdJJQvFaCknAGAoP5Q1rhjNDnRE6EzmwX592L8R3hVpW36bTKFj4WXbph25C",
  "key5": "d4VGMgPwmxKkpkWAc1oS9YPnbHUwU6AYnDUHBaB9XbWdghi8aAaYRCGmzjhDSzTTpNMRGTQgEjSD2qhhW52Fk66",
  "key6": "569CZse3u2fqYVcbiMUeZY5pq2K25r6iXqr6MZeveaermorC8eKMEnZkyJXLKUmx36nJv8pqjLdAbRZX3eiSNdgC",
  "key7": "2uChd1TstfoKd3HypVBU5wyKw8xDf5RpTXaioAV44wB2xU4S8ZQ9mk9Qg4yHW5HpmmW49NoqNQWghNxt69h8R5qg",
  "key8": "2WtEJ6tXFezyM643tizv8EZ8tCEgT5Akat7NS2ZXD7KjpEWN2oUj5fCgfntdmuG4iaY8AwbvfMEDHDqirf1iiLyc",
  "key9": "2XPTJu7eovtZw5muy2EPbZvxHSZKAcq7WhJnArwnJRfpi8GGErsQ3qMWQCvje9MEFrwA78sXbyd6YR87z19kD5X6",
  "key10": "55jkxJgYHMyeSGrYnJAE537SvqFSoSeHTYDojLMVQg5phMtEHpsrdXuscf3W2W5nAZZxKsoMxxCiQn5w3b284PDC",
  "key11": "AzEpaQDVBAdNteLLYXn5LuL9FkcztwKptzmLMhU9HqE7bJHzB55jRVLUaqYCRfzd9hNcSuZ8s617yiqgyqBR7uP",
  "key12": "3ZRKuzd8vnqPdxiLudGZt9p7sycL1g2NrvCsxPiGMicmb83ecpB3Lo9gWH2nwdFHvayjmwa4PhEDm6UVBiaNbxQ8",
  "key13": "2fKF7Ad1CfbVQXp5NYekjVfWeYvVyQsmT8rCoT9sUhLmCE4oMPKAx7qekqm1UHNrAZ1sRhANiHSevVAezzKLycfH",
  "key14": "BGYFdH5osGscuXmUeVtPpHkZ4ELmBHJbG9woKLUjedaamx1jC6U1Sd9xCcgUESYAHVZJqqoVToRN1Amm7NcRxZP",
  "key15": "21FSA6JuDmgeeZCJMqbA6e4v8hKbqvtSxkPcqSGy1LVCN5i12HCSPDMUjDuZemCDXLsS5LDnQXGA5GmrhS5W4HX1",
  "key16": "Cis27p1e3ac4vixyJgEjwfsscAde9BBcsGCyph2tY5sFXFPwTeviwx5nTS7aXajiNzPcmHY3CtTcKDsK9asipNg",
  "key17": "dRWQnfnFxaXQH7Z6bmo43Zv33Tmp8X7fBzgWAvRHUC78EFmLYweWM7esp7WJHfMfnHLa3aSph8dH6rzSvoLtTEC",
  "key18": "31HzfDaTYSLyhu5e8gpudysGLupgkRthggagb1rWfiUAVJfQY7yAEZdGqHbD62B3yzvk1nNXfutZ1FjBuajdicya",
  "key19": "oEuZLpWgn3xnnd6sj1esLGSaT9iCH8Z1Lp6qiVrgaUW1kogcWiey1W3QendGBkw8G9NGN2ySQ6mNp2ii9FkLLGj",
  "key20": "64ZWGDk4CRAKSdWpyoGp7oiCUVF4D9x9GUSxmzQRPQBGiC6VnhoB4b7SZraUuywbK82ce6WVHJiXiWooDe2GLMCz",
  "key21": "4JZBeTsgeCXA9LNxMrsWHvo2eHUjEhyDijfsvPGZy2kRr6mJrG8TrVoMTV65ErSCid25cx7rXGB192qKXffgjqpa",
  "key22": "5ofqkLXkLc9oGKxDG16o82PR7RwZNDac9GgkuKnWMD6dqS6fkqHbGeQwPmmU8NT7CXCy94fMYidK8gL5sjqbbqn3",
  "key23": "35eHEGHEpKt33quWbJMM57YjekASf5HdkvUfQxgBwUTnAyPNbr9p3EvKJiuBRm9TtekVZ1x414iva6L13btfMmFt",
  "key24": "2jwQNReQNkFL1pLXgGXA4Cc32PaviAUBq7DP278vcjkCAc3WD8T1ECUzhRBma5k6f8C7HFNwZ8N9BQKhjni1z4fr",
  "key25": "3bj6v3pcTY6HfHRbTFGG7SkFbmB3uq4DoLu1Qd6p9Nv7vMCGS1zGhKa5i8JMWHyeSYnt1Ha4YWQ8Nb68JSVLMvEV",
  "key26": "4EfBbDF16BtbpY9nZ18zTf9pDGRypFfujGi1sZFPmxirhmi67H5NhboDosGDLdmp9JqFqGk3PbesK82rKug1ZF4A",
  "key27": "5LxrCp9eShjR6jnfWcTBKPcfySGhw7NccNt4AFjSqRW1he93ZBYR5nVQxK67e94uixfufgEuGEbbVSaYd1WSbcdX",
  "key28": "644Tage92EmfeVvnvjdybuJZgtrYCEcViSae2tGPfqJQ9hjLdPcqXsTg4uDSxuB9oUEkFHn4BsBvAh23kYmxRUMb",
  "key29": "2PGxgnsoVDecURLpMHMYESHx7k6GE1mSH4nqAVjhDn72Dozsv118Rqf2nTvu5hMz2VSAoN3tFaGPSzckAGEm5Tmh",
  "key30": "49t2c3iuYdHx8YRWDZ2soFu17qYBNwfrkkUoY9tb4gAe3zTfNTBx4o1ZDT7zJTRgoNuCPfbzdqPnrMcr4UobkQdW",
  "key31": "4MfFWvZ8E2pRkRhD4MVqNYkwkXXBYDVRYpe8jE6Snq2HwbTZq2VhGKzydYP2Hzonrx4VjuCGLi9vpWcNgw5fFMVA",
  "key32": "3DvcdFjmRUjJLq2i5HG41nrH5sBds32xaVensM71C51NnSvRzjxKtfJVD12wDhohHwEZ2bZYY21n2DaNgwNnQtUa",
  "key33": "3EkdAhcpd2faHyF1XAhsZU7m3x62PkJSEQ2urKhpdY6LxZCmvSCCAsiKMwEqnpXZXZAUat778JBaJf1LupkAFzv2",
  "key34": "5tbRJ37wfvEhwLLKKP5Zz2qgCds9H1PuBWhXjMwBGoK8dexRCigYyzGPaZcAX1tUbwa29wHEbC1n3Z7SYzpoy6vq",
  "key35": "2DXPQBR1ExkcBpe7X1b7yDFpXA9SYxqMq7c6zuSQ6avK3oE6obechUNpN8mwcBH2NRFBVpnoB3i6cVtavZb91FVE",
  "key36": "344uRNjvs6UJPDMQcpore8XT7Xqzxd3NCmSaSn47Vo9qo7wJaUJ9z9gSudZrYz5RxmV2Vev8krVjbQaY237gnJ4S",
  "key37": "3TsBBYHdq9hPEWQ71ubuHzFHjPwW3UdZYTRfR3SsRxraHF7XGV537pfEYPgG2bhShfquoTvzJXLBghfDNNdKoT5w",
  "key38": "y3Un6yb7NKqsCDquXymD5MKbuxM7ARCn7PLfBo5bfohMHVVdZxQPEgv2gzwn3bCaQXXBpMD8wCDD2Py16fwAVXj",
  "key39": "TBtp1GjYBJXX78PebLGjEptiZ2zXnEGo5tt1RG4Z6zvZD95qrbS6MUv9zSwT3E6aG6F4wD4wEEyBDVoMvSbpLvJ",
  "key40": "4u3rjXynVhPz5Y46idUSXbqRB8VbpJGGBreBY9bmVqBRBf6Qs9ZSU72ifATBzeRCEGMv4vkZBX9k5whdo4SuBb1F",
  "key41": "45shBFSRrpVJMeWuf7WdRGKAqiHNjmp8MYmTTby58RjqzkC7uV9aqqko5UZNkwHju2F39z4RnYyq7JxLTk6J6zen",
  "key42": "4aSyKNrQAzSZ3MJbHRRhcmQvATLn2G97BGVshts4izCnXuYseQboJqCitrrgyqdX3xxE3VDy54ruxmJnKTwjFmxJ",
  "key43": "47WidV2SseBJLxnXhppRUyjMF9J7Wp2ohb9Lu9SavbjGG3nQt1S59VdeqxCA9yXvFrWr4V3GNmamjVB28R8X4uwW",
  "key44": "2vNwxHai1Coeo6P8v2mDzWpbpo9sRgZv4hVVvTxHMnzRjdz8UqXqKh8fSqkZfVYPj1VKPY8wAXcTSpfkcytNAkzE",
  "key45": "BTgyTVLHjuYH8yHVkcC8x5FfcRxDyuX1hiVckgdxZKM7pvLktNs5qBcvtKBfp92DjxYwiAJ8K2iJQUi5KVzB2PM",
  "key46": "EXSrrcN3n4UakqRHEnCaWcpoYwr779rn1pqbmbNLJjXBoL2Q7Ht69CHpETxYhFJWsZZ5NL2bSKRnkYaDBzC6gzR",
  "key47": "3zvRKTzRAVuDG6xGhBH1TuhJoVUJjjuQLmSHgHJQkV9eq1ZSea6ydFTpTpShhiLrbKjcgzdWQdhSRDsxpcfm29Xo",
  "key48": "w4fPfULLhVvN9jkXoyYm2oHwhk5H3BHFeLbhGe3wKU832frMosHZmimzFd7sR39BvBEiFskHw8A5wChA16uHqER"
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
