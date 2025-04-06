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
    "5tLstYzWHUZ5spo6mpWzR7TRTPwbSanzu5qqkegbzRkMizLfbAUw2ghL8NZtVcirkfsFbzNYurpMbQThHc2HyZTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fuD79gFUUAbHc212JQ7gMHftx4zVtipUFARJdjvT2CkP964N3NK42oax6NDGMciXNRH3HSQh7bZZPUrMLmdpXVb",
  "key1": "474Mk1i9h4vnrHM4XuvPLAEFVnJUzv2HdeKk8agfD1GeDGawu5xrgxwYWnaZ1X3UgyTUrjzYqD8v7MJFi6bcrchc",
  "key2": "37qeR4uaj4KwJGfKMjc3uAHiexsKqFtmtmFWXUGxfDek9NbfCeJ2rcaKrTDwXwWnhteCzJrWE81oQA7LXhbvxbsZ",
  "key3": "45VNEM9ZbCH42AUyheBNkUXsZKFP8qebr9eCL7K2xJqF4X9j1BKPFxL8GCD2JktcB4685u395NeKXSjZZwumV9hK",
  "key4": "46u8V1s7r6xWeWNw7jJsuYdiDcu6UUS5PNcXGHsiux5uRRVMz2BQ56XGymw3ezzh6saycc7KnWv7Qf2kLUEyBhad",
  "key5": "5VehRkmvyFuRe3JbKLUmAue3zs2APieopeEUn4XE71XwGjJBJBfrad1A63LjmBz19UG1H9W6bfm1erpoB2chfYLV",
  "key6": "2a7vYBmihGPk69y54cjGjathkikGCD2Gp3k6bhqPJhCoW453VXsradsxwEqoZYxkJuwBmXjXPehoyPPmqeQSh4Br",
  "key7": "4Gwcpvzytb5K82dqZpbzNZEVjf2WRcxPBsWtQBV5zACYBafcaV19sRSfgExLFAodv5rmXY1R8zFJhDGzx3FvYVb7",
  "key8": "4E6gyAdh8AiEoWvEjpdyVr5LDqAQ9aaDbkoKc5tyECVEqVJF1aBiPmDrz8LXBuUt3HV2VoVrdMR32STZjpR23DJS",
  "key9": "4vM46B8qoU5tiNR7KWXPMySQLNsTJmcmcaXxEBu6x2MNoN1WbrsFxFSeZnnKiwUgBZ7S55fur4nGDqSzrnRy2dNf",
  "key10": "59pPutys5qKonkdtdono3HwjJ6MQpvoGQyTGT72MR9xsugcZ68pQYRwwfkrXPxcWUK4CwX5zuzg6JrrP5fMgTqWA",
  "key11": "dG7uarjq4PM3RfV65dxdJUsxKPwnv7Jj4hrawMPn9jiDwnb4HwDW2bEe9wGCUyXsqw7AY333hEoQ4SgHQBB3Wbh",
  "key12": "5mKiMRpyGZQh9U2ET2NDP2t98NK5BaNkm7yuHqgJez2VxDy7iW8h5zbqRDeMt157erX68uVVQrSKeGeRkcKiYQyu",
  "key13": "2QSUMsQDqQiiw8KHHZffFs4Pcja74JosVu9w1QE7KK2ocQY2qWWiSAWZwUGvF8mfkc4cAUTUsL9BfP3MQA8TwqZ5",
  "key14": "5YDssMB5tUr4tHU6VuLFY88Eg4ihvcxfKD3jBzZEt7pEMBKNvgMTyosf7mx7tbG2g2Up9E2STKdefR2hCz2Sb5Vu",
  "key15": "28hqDr3ueZ7xihu84mxvbfq6CnWoc1oeWRkwSTnGminaz4CQS9yXrQNem8H5wJDgyZo6o7n1wwxmFnEkz9Kxatqm",
  "key16": "iF1ws3LYL1Y7fe31Tt6Z3waQDZF6WtfRf21Sopskhae3Fx982zkjvha4tfxPZF4nbm36m5Kr1qoCprf99U58nUB",
  "key17": "3wS8SY8N1LsNwYUHqcUkmioLkfgyZWgaf2XtnSE4BnGYpfXDhZf3D5ZJbXbpzPB83fancAz9sm4CDaxLEeC2f3Z5",
  "key18": "2FbEvFxqt3k7TY26pigA7u4G4UWtbA2MjsqvzRK6XAQaTd7VHXcQJhw9cWHR7Vis1ntJRQwXzB7FCvpDwCCoUKhb",
  "key19": "5rA9PfKJMYxeMpQjC936gXiJA9N1cGy8VnfxUZj4hjTuXtbJgcXsegEK9FZW9hWhYG6wMwMyW6LUfZskFqNhJevY",
  "key20": "2Jg7J2Cm8XvsTk8G9U66x6QNcdi7WG1tJD6eb1MsVANA9vUgTN5t83dnVjmEgRi4tWNXrXhmJkSobaY7hvDkzYib",
  "key21": "2CDY8VVj5eWtRrSB6KAiNHvsCdPg5d4HmqQY6K9ygmfxFUuqDXvP4u5zCowskmNP2X7Yb2Js9uVnRU6BMUH5iarR",
  "key22": "43MLefBX415gJmZXVhVmM8F9XwoDAz6Q7DkVucHuHHDXRV7XhkRj1ST3f8XJbgouyDYA8jzzkAkAiriu9uri1P4p",
  "key23": "427U46MsCtwo1Ph48DiKybLMk1opNELvmsSzF6VwuVZgo4RuPgBVZu62MZFBubUV2fQauMtP1avP1TnsWNwPShma",
  "key24": "4BSb5YUC995o8YbKHLSkth5mcGDKaePAdLCGN8sDeXJatnsWNY1u2Lu4heMbihf8GpzFxZgU7998JtwMY6nyB54k",
  "key25": "2zEiTejMNEbQxXK9ULhK9RN7qQpdww1QE9WDR6SwVpEqL254Zd1MigUMQc3V6cAoewqpqmX2quVfgQXvTQv5kSGX",
  "key26": "BwrD9Dw2jK1EgFAZVmtdi2sahpChGnAb3J4ADD9aPD5PYxZG8DVUftVhyzUEo8vGkE92AMekvH62mP6k9N2FUQM",
  "key27": "5U3qqquo54rxZJFSwYa2M3Sxa8cb9w5dDizQTRia7gHtE1wifPQkqg6EMnsk94XDe1b6uXNrpSRLF9bThKqYFnJL",
  "key28": "23HUgfRJGrtx3uY5EGiXHKMYGXhuDnJdULok6jFw7rdiGjeP4oKaU4GBGbAPf8ACeavfxmgYGnA7LHnMdjvwHJUn",
  "key29": "2WYLLYga59EnjtPHpY1ViYeLafS7xwaQaBaxxC7HJd75MGGmca2re4dkkbn3azgWjKYJhc1jxKKV13Nu4bRwY2ec",
  "key30": "42UQZEaDhvoTMqXrJoF3UJodBjtd9ky2VVQhY3L3QkGeDw9ARZ2MxxGmtBZBFRfb41w5Ko3gFFzPQ3MFGkXQc2ed",
  "key31": "4C1eSwuvhauVTPyXRf4hD2yXfs71i5SHeKPYiCVaLp2SnAV5ERCGtTPdSKijnhE3r21qA4XQSbxATqFwgz2mEYmi",
  "key32": "4xvW9Xrm2242NVKZJQkvRYehcGf786vG4rXY3kGt2phXcSJkXX8vNH3ZwU5ZtHu6tpLvpyTJz59Vs5prfMSFcJxN",
  "key33": "zgKz9hTAPMAuk4hK4H7nksg31onxWRxSQ6LpLHMLvhHjTBYkzktdrv3iiDBL4sUEZpKmSUxzop19Fu4pW3qpgEk",
  "key34": "5yuNBpgyHnJHtf2koQGUj3gU7ta8DEUt8LaKvbdYfs71bSZrBnadELmK6XJbhuJ7T8xip7bEqvh1BebxykUJXGzn",
  "key35": "4ihDzp7NgHFFNkTvjmCwTxSJpmbxTx7j6HSLPUn8vqWP9kjG43f7JJo1hCvxgDLGmKMCC7u8z5zpJkx7zbntMYLA",
  "key36": "gean1JFvsaaEri8oqKc9bp2oLQWkMQNg9yos1dD96URGSHER7hz869AXtq4gX3JkFDs5tuLa3CVhDuTzrXEvZfm",
  "key37": "3stouG1i22WjfyffQ8Es6ehsjXvdsiL8ucP8PvgoQCKEDrm893mgMjqR2kQDoPJNMS7CvTzNj84bFhyfKuTPcLi1",
  "key38": "2HUVJ8N2BBmZ8GDPtqRShjxpEgcRw1Cxv2HMMasppVUxhCDvqNYUauumSM21nZvxtqN6mM1p4ChDueg6HVK1xFjy",
  "key39": "251PnRxbnKH6FVcj3iNyhQf5bX5VWTLvVUGNTYMFsgYGd9YsT2TTUFt4T8fF7rAgWmZuG8h97nGyb2a1b7UJHnrM",
  "key40": "5reGW1vrbEAHjoD16oSsnFR6FuU4gzrvwhicDBB2f25odUjr9GpH3QHKT3p1QxisBhB2nKbiShLiXqnFfx7CxKtv",
  "key41": "2rvAuAWQ3qrCJTxTF1CRTCzPvPNGRKqrkitSNqUMWZHCCTj3dPjvtbRjd6h4K3YTfBgJPhftAqfFPK7eMMwARYnu",
  "key42": "5nEb75MdytdSG186koR8DoE3qwzZnM4zKkCn7nWwk2RnyH95vJe4YWjve19zkEDKvDHknWU6g9tqqnEbVWpPxWv3",
  "key43": "2RfnnU7rBTKRXYo8XaVb4q5xzS39C9P6MACn9TDD5QB4zYx3he2FqLVzGNh6GP25LTZ1623dWuTaDubrNdRmt664",
  "key44": "4GdCuGC14daAVzn8Kkar6ebN3Xx22iqBf5WwCXq2sZsPBWpvJbZQFX8swU6vDXqC4nYgaJYszFsAHVbBzkBzLVHc",
  "key45": "2DsUiTrLgp5paFdjb7dvcqJVYUNZbtTAusTYAQaX4369Gvxg11sAarQ8bPq6PHf5cn65h7Jeau5nfrKoNe3gjjF5",
  "key46": "63Yo9fjYhZcp1sCoWNwPw8xzmySizNLu9wULu89fzJS9Q6adQUuiaKzax4hdBTLSVNBAcovh5g9evSNKE9KbSy8n",
  "key47": "2kxJEYgyXMYfn11yhNxZZMpueerVVWx1VL8SwRiFDeLBsR4o8VAdWQ9QLLve2WSYH7LGyrAKFD7D8WzLWkMALMS",
  "key48": "4X9Dzn71fkWm5FNyUiZV73bpTYnDaRJvzPM4iYgDbZhDST3dVkyx4eEEjRQQxYysEvb7nthNUq3qHsT4EsiHbXST"
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
