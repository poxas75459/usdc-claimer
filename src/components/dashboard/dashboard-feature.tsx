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
    "2GQbheemdL1Z6b3f4odudsC7jXX2dwevUL4LnrHfTCb8nFxtFvk59fA5XCeGutaQmpSEjgg9qYXRjsvqh2n4hiQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VD6Mbnimr74ZVCfLwSkaGRJKVeqPbVtohi43MPG3CcAvPCmsPerybgJUqrkqLV5UAuLyUkGHZTrVc7YzMQqLjZS",
  "key1": "4devzKsQpdqcTVwsEPx39yLW4QmwiofgDfwbVG5poG4LKFyU4Q2A6BUPWrUcKn1wwcX44sFBpqwTW1HEZo3yRL9r",
  "key2": "2YSEtF775FimLjgpkXPbCQarVDLQr5W9LkFsBhqnTPViSWTSuGBm3YJMERvFMmnatUX4wRqvNGYrsSK88RiBqbwv",
  "key3": "nsLYi8zVQxa51K6LysZutNoEgGdY2NbhfsP8LgL7dkKAG2USzeeZ2NiceWZwqi5FFKjzSgsXfR5FqN6sejdKgpJ",
  "key4": "3YHeKrB2nEHEq3UjoFxeiDCcynFRFtrLmChFgZjj5CgsSZJWWtD13eEjAQxzj9JBPDkTXLiHiaynwDXSHqEDq8Mn",
  "key5": "YuCyvoSUjZk8tsyz7B7DkLnEk3MiD5hqBLNqDRdNdg8nuckxcqHUGroxKm7Mbbq4ruiKtcHhktuxTvku1VCgHU2",
  "key6": "4r784LGS9GTwAe9FzPgEZYsag7wEEVSsTgbsc3QP43zydFZadXD5kVXR1HYCXvqs58GZh8rxSAjchW7we5tyWg51",
  "key7": "29LDxNpGNoWmpvemVRozdEHaXbSVo5iduaPtbQjBbCmonFUjHhHsiAGtv5pjiRGWABt2Qygw9wNgSt9hywpyDVZs",
  "key8": "4ku86sHUVYcoCZ4XFoSTxbpydejRUF1cqgcmXnAtTfk1KXNmtEJBdrRafG38TQhFrWcorA3fQMxanMnnUCkzxUq6",
  "key9": "4NqaY2WXmMVKgDXVmTQuVt7Pbmc6zDnUxmp7QB9rETB2H8WLZxZ4Ym8UKRVZbk6M2wmK4DMzLTAwa9ZkuRs4kpFm",
  "key10": "32bgRnsocacQWQZKLHTrawKD2JTcjqBCxfpZAVZwoj7GzGnShTnzWssFCPELZMDiB6Sgz2GtMrcAgLmedPyDVSRd",
  "key11": "4HC631rQQ9UTA6nZdMtTtwrvJbv1JHjHkbGaCcTxU3zbPdZV2RCgc9F3uJb3pU6nbri684cKuVC6GGxLsb9LLw62",
  "key12": "rMTrCufyuh9FJzMPoMEsD8V8dP5MTxt2EMvP34FNJc2vWvStVg4xyC8PkMW3EivVV73tdkQioqkVYLVbVQ6UjwK",
  "key13": "3u6TSrbAqzhbRKUR3NiMC2EgGT6PJmcRUGJ7YoVamqSgFFh3ZexWRk4P66NwfJyLqe13Xxehu8upQmfv3jsUD59A",
  "key14": "3hJKgHLkk8QETtqVe4CetWtmofpnkM5v9wmcFDKiQoLoYmKaLUK763xM42Ra6z2EVUdRTKAAZLvUeQo1wX3TsEKm",
  "key15": "4GbPJ7ruqKgpoDMZyN47fcTCykKaaFbfK2tFRhYBk22i5QwaqAoNq2udMDn27h3eD7sSGZBxD9EGYLrnJVkax3kb",
  "key16": "3Sdbh96KZo92wmBE9vgucski266HucKvG3kLoSe3sRKbyLBtJSEjB6sG4P8qtswJs8iTtHax7KBCNakKTiG2j5Uq",
  "key17": "34Q9AyJunq54hmcWfgMetu4RYz7h63k2ffPW2vDb8nyDx7Djt6sDsB1j1TKkjaGLUpz6tPbrANjB1QuLB5qJSrKg",
  "key18": "44zQWSnWkr8uMeaGbY1cDi5SuvMMPhJ3nv5YV3XjmSBU3xGoLMHYoL2cyQfP2F64pnguNcmhZm9Rqip4xFdKuE5t",
  "key19": "2j4omaE7qjT4vDTqXpatx9dhmLbCnQhNwSWrY9HuQYbCFYBkMycKQHoHGHDNRnsHQq6oauEL89bkMYEBWtYbmhGg",
  "key20": "5rCWKkCL2hdEs4t3FNfiLdp2jCeQfKTurQPQe5SE5HduTiQHgfGwhSytw7eiA1J3r2jrueaRMB9eH7WNKg18YmQ3",
  "key21": "4QJENadYUXUCm2Q57BkockgZJ1C8UhG7z7ZbhcoyXZnkhutYJnHPChp68GmscUrfQLHiwweiMB2hpz6WrPYq1cZt",
  "key22": "3SXz55qmsa1x2u5wWdJceD2Z919h8h8VK5J8sggbaRn7cxhXb6YWyMq6wCUbDyTVM7FQhwxt5xzipM3yW7cQF9kx",
  "key23": "3eFUbaFoEx2tCU43PDKmPJ32jCBZ8FjZ2r2S2Qk4YmjB3NrUmn8XvUGMZr1wK4V5pMPv4rW3YqJPsLcmB894QzNG",
  "key24": "4igEJ8p4qDMKneHUnMeweJduxVhHD6KkUDYPy9PQ4zewgiaHkMAoRDiNVACA4gcAMr6t4FiB917YCAzX2aSQd2L4",
  "key25": "Gy9YGHK1sv4XzXxUidryEZf8SMVrzkxgk9xFQ6C18i5kNpmX6ZpPhscucjm6S8LDSg47isLK2VwQSd5HKrnswL5",
  "key26": "4UjdgG9FD9UfzYgUaPjXgUmjPBE6MJxdTUgjDYnHH3nQd8mq3N7fkUFAtAEQxUFMyZmfuND2W4mhizhqBtd859gU",
  "key27": "5M8cTj2LHuKAqY9EbbqKJ46UCWiWkZSn9U5PAVWiynd5PUbs5kwT5PRyaD1FN2S6zNaLfamiwMN765mq8H6PPVJ4",
  "key28": "3NJ4LoRjwwAPFjcrBeyDfeoc6zYBZTULcPy3LUv4VFcW4myhWVzrNmsDGJszLjjUGSU4vzXYtdkqw5r6LDwwTs48",
  "key29": "35wkCvjD5bgdkdrU9QiEPs5GMJcTyQ6qNb5CG7JGZBiszycJzfg15WemVTmZQ8FbTvkSvkYkGYoecDnNojDpfgoE",
  "key30": "Qrs5iCoseqtUTCKGUo9aEaKCJ9LEjGZo4i49AYyQN2y7Du7F331L8WXa7eTHWLQ3CZeX4RLdaf46UZQ2U3qoppi",
  "key31": "29Vm3nYCa7epQgWqLrwNPEPzMoktnhjuWEzFdLq1eNUcvZXfcp82LctyC7NJWozapApbF5ea9Gxw6bgkhFnzDpP7",
  "key32": "s7xWUKGUEggP4VKhcETSih7XTus6GTjSGxSJRqyJGxkz5751mbJdGBRVnjfoDGK6BAi7vxdq3AiC7qtGqmiX4jD",
  "key33": "gC8MMtkp4wGGmB36XqJ9n6SeePwuWhzvfFEXvNMzJQawB5b5QYF47tX6Zih4xf4ExerCztrcpQhVkzwgy5nTZcC",
  "key34": "3YcD26xvN28aj8t1oHH16jJ8jzgoeTcUqD1k6ss4soWGTohGoEJhnZrWybAZFC6kRmvPWdEDqHhu14gEhQjRWqwt",
  "key35": "5CF34SpaPQdwFsdSzVms7SEaru4iWMjMTwVS9Kw3njPuBbYvdj3VyqbbD3y3eizA5zM2owXtwwzL6e7Pc7HZdf93",
  "key36": "2bAYHSbTQqPTPPHr7nxxKRHdfcP42ZuGfgqHVFuAZAb4uQaANnADz9RtcLJs66N7aqeZy4wUvKZbVyqqdogEqQ7n",
  "key37": "5RdF4ySSpScofWrkBoaugWTm1JD555jL9GDHdAMyeUbCrL4kq2o5QHvXd9YmGnvYcRUyrz1xcJVvFttUGVenMC31",
  "key38": "4znaUdaw38UV7zXyxoPbqDK1iTRPYXq3Mt96WfRTX62zFgempHqc95TWgqjFVQ2VjrSCAK96k8ixmHNvjUEhrYnw",
  "key39": "4oTs5UNNjPGXRzcCuAgJirE8axvxYoGAUbLL1yHY1V6Su7znNgdiy6i6ttcmDsgNxjYvAcGxtdsUkFfuYsQu9dUX",
  "key40": "5P1YrXJko4gQ3xH1S1K6zPy2x5WETmXkbgSex73iZ6J1H2CwNjsBz8ethtG3fEFhF1jBfRkeufSCqktMqSg819tw",
  "key41": "2ex2FxvdNiZitfN957JEAqZ2xmJ3ncHzQKqSLFJExpetsaCHCsmZwEiesnWgufR1PGnH5KBiBp83bxwcco2AsUtJ",
  "key42": "5cznCmtfFi6vagMWzsXc2uQ3zXmSMBKRfKxvvTyZqPynFyh4wh8SiWekbbqqAa36YupYj8jMcKKtuip3jpJjLUcq",
  "key43": "65MsgdquWimf3BpSj85nSyoGRun4ZXQJmNyz2uysPtTFnJV1x9qDmPzuz8Wc3gxEC3XUXpdjgQy5nGCnbQkLsHEd",
  "key44": "65EmgPVMkxdTDkHFWeEyGhWP7QDxxR9fEanq8sGZNZtANSyLVXNq4QLoUkM9xPGXttoGURCxWbEfPD61xDFDLjZb",
  "key45": "SJSrUnADGTFzx6tsVp7UWULa758V2XdgLFDho4fJGHakbzwizPhWSVVR4jerzBocrqJ4oJNzTtjnh2whRxENKEJ"
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
