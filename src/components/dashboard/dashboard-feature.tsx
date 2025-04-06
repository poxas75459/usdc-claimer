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
    "4ZaoNGfm6pSm2x9gETEhJS92mNTsWU8cwN97dcyP515XTMYa18nBoyRuuh5MmfZeGdJ1wTHmktiBZ3zxKiCACpDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FX6ocgmF98CLD9D2XJjkx1YjSR4AxAgesS6ZVwsoyiomaCAmhXw26xpmjknRmVB3Fujv4truoKnMXsyqmdPSD12",
  "key1": "5QuJ3kFJ5SW1Nm93d5VuAaD5sypyfKgrJsbun7RkGFkEQQhDqVCQr9HfvkCw1aeXuimCYxGjkofevNayyVeBZgus",
  "key2": "5NT8UKXKp4VgAkpmrXYfBoYAgW27Rq8dEeJsnKfy21ceLccGifUyLkf9PzhiYzW8SiSbUg1fyWcAzVw873QfFvru",
  "key3": "47oSiUqyM1FogGvC81unTAbCxenwcmc6bAfJKVrArJpM92frfjAbjiJhWD3ZANtGgAeH1G93BnjkQVdkuHMY7GPH",
  "key4": "2eeUc2uBFb64N9xTxA8ic5SujUUYHaJg2XrubfNkHtYYouJeuBoC9KxQfQaXzQ7HB6fV6D8NPS7GdV6FXxM9ZaMj",
  "key5": "5mipHhT2VeCx1jZb4bJVoGwpt4PVCtgojTVYVFxmLMfLu7Kd7uqSfBBJZ8TksyktjiV9R92N7gppAdBwkARWwGYj",
  "key6": "2zez5WkEJD8S6t5hdhHEubN5xFBkU3L72cNPN1EpqRXBkvC7hMsEdUC1WRs6HNRCEP2iy5iYPtZg4sQqfGeZrC7R",
  "key7": "4MfzvFVKQeKg8cLVbSwkTNyit1osNqxWcWPBPnjJKqxRY8DHRjotbVhmTie6GvEZhfeAh62GwKVDMvPxcHyLqtTz",
  "key8": "3icp6NTXRAYYZbLH6R97B8SfAPg1pNx9baedRMbhb4xEUHrbiKZ6WvZRsU6VxMim5AgK3qNSnR4yBLKrJgu3jzSQ",
  "key9": "5K8fyGLPwnWkSCVKBkk5raeMCoxYFP6uwPhRisuXHyahwfBVSckqVnJNcgshzh9HhEoEYgHMLApLukLzTanUU4pE",
  "key10": "2sP4hZ5XWvmg6eY72pXtvdANmsLDUM84teBpvDUXxduWFViZqsrM7PvY4mibvJdfw5ALwERsChVup2skeHdoHuV2",
  "key11": "4Zi85GHgMjvrEPabzNetHQdJ3YAdzzzbHyzQT4neVC5gQgdo6ZXpWWBQvj2UHtQtTWzS2P2vKds7iVYi5b8uaHLE",
  "key12": "JnRekSX1YcPjPwTvWUSRuCvw7YCmKVjxfeDgrX8PUBCyPvxr7WwAk14Y15MwBiayNY6Wp9YFwnXVnWGmwiWsgwQ",
  "key13": "3WhsA7ZD3L1gRph77tfiSEMpNwky4v76EwTdpqFGqx8d5v65cvigtDgkWgxTMydkegcmWzTihdBtJudFUUPdfQFs",
  "key14": "3svmnubHqjmwcBFEXSxRdSyjZcxNk6uKJpuzC4Rvp9XU7Hbp5eyn3FJnRfHntQV7o7cVoiJBQgzxZWECudibPBau",
  "key15": "VJsnZVRpPxXWBpyAXAXktbfF5bVrDxkF3JeuttasXLL13XBdNRJUystuk6fmGoJo67MWd5EesqLvRn6rLWcThur",
  "key16": "4DwXGWoX7EpwMwNi6jnPCCvF7UZRJLMKR51Hsu3ezGgKo7gbcEirSZU84vcQw23yUNqvVxtyfKfmYLsN68m6BiLW",
  "key17": "59D4V8PUvLbzSy8hEMm7g1su8AXXnpyds7YrkMQ3jT5ZtBb5PL63ZvLp7nV27q3NY1LCdbtDfueuuGYxCZRBa4e9",
  "key18": "MHtonDQBgJwTZ4HFmNNYpVqj92YJUbZmZjEEWxtWYEU5H2ggCTdPSme9UvfUKvsNv1eKoHQjkpCRKS8p963Wawb",
  "key19": "aoLf6jNKy2bfvWSB99YPP5v6zNjNCvPnwXQuSGBaDHyJ5YV1sbgXroR4kvna3GL3DG85MZLTma2J5haCqDBQzs7",
  "key20": "2AHJcwScJotrMm8TpdLWCzFw3JmUvoYfHBNfEek7N65q9fo2DQ3HENJ1aYP4TVvtM6BGcmfyejDkcKwzVikVX5xY",
  "key21": "4TfCS6VYGaFijPb3doZw135iN3c1Fq4rGXzUXLCR9iSsn1vGPSJKKruVb1f7pQjHfawJNpLpYUoZBGZMGwV8R642",
  "key22": "U3PGF6WG9f1mZDxsiijWs2DHFKnBbP6SPu2aqRTaiXBCzJQ6ikT5biRsCAQjMkRu7UVi1xj3eaoWPstZpNPDUbQ",
  "key23": "3oPX9f6jAmuzWD8HcmHAKgvWU9w2vRYEdWwT4d6pB8bqqC5D9AFpkin7TNxF1UPTmokwqBHvW1U2i3ZSujx9Djg5",
  "key24": "3qJHxS3hkohDhEiznkbo4bCkSMLPsBkLrcZ9cUnpphzPPYyT5yoNKsJXr5hha587ZLCNoU1Ne1oxtXdNK8ma4ejP",
  "key25": "Md5doGye4CHCDXDxhcy9qGnuV83gtG1ZDS3bVZkY38o13Wjyxu65AJrCNYxPSxkNpmXccBmkkzjCnbKpXKVqUhY",
  "key26": "328BYnTqWG53M5e2Unfp4F8P645ZhDMMWWeWHRXL5aZG5JHZ9KkqKD3qUpa7TDtJoZJm9LJ6ftG1jS8mjTZ1kpwL",
  "key27": "5xxxxhgZ7Juu1fBvHJsuwtgE1rP2iMKAjnQQsYY48n71gWRDCSbsQnNTLsAtNHZAaWfrQxu27n3goUmbTddsbXW2",
  "key28": "2MMeBpU78YbywT4Dx1Xv4UBSuMMYtLGQAkMgaQrNYPkmd9siGK1FB2bGyaQ5TtkZ8h5XSiNmKRSkRjAVyEyimpa",
  "key29": "5k3ztHe5o8xbJ6db6P4DrJkkSs3jC3LgcjoUeCHhXeWbBuR4wrWBshnZVj5wUsCmGaNMdjPW76FdWoLSoM6FNqhP",
  "key30": "5zpHPKVfVYronc8qWV3pY2U3fmFjKwiUJRSYEq6QkfnQNNGsZkFTRNQR8VyWKADXMBHgvjDwDgxvbNGoK2obhy25",
  "key31": "4qzJpN8k8Hsmc59nBL2vo3BUkgC5D2pduNkR2zgygAkm1EyyENz8utsxUtqWGQ6MiwiozrswzLcLELNgysn9YzhQ",
  "key32": "5Lb8z6biqYUyjJ3eWgT4Dwz7FAeKDvdRSEw2trsjUFt5D2kV7qRc3wLTEpjToiGQeGmrSDuSWNeC5ThpFPU6JVsU",
  "key33": "Uo5PVrMQiBMabZbwBr8tBZ9MfUvhFVgbouVE5uBqwh2fPQkLkfh35ZiSpfCDz34Yzi15Ns73HWKwW8Hwqsr3zvb",
  "key34": "oZPFcKdJkX8LMAyDfaQyfcoH5YK6vpEhkev1zWNYLjx3bSFsXdMWVqejqrdo6ckuM7wJKXNvYw8xwhxo3AbTvq2",
  "key35": "fvfpoT5bvHwb6yyTCXNh7jv59uxrvR4mpqGbJUHG4iKHsnvuZx9hY8twuvZiikYnkY3Ptxgg8wWreHeE4C4P78G",
  "key36": "4j8c9jivmkef7YBYDUZD3hN8YqWX6cUJwoJnZbPTLZWM3Cr5737M5uVQBdZBYkPt3k4QUrHt6ah6fBNbyEEcrnBp",
  "key37": "4xF1MeqiuYsj4fZe7mQWjUQGebxD5yDJ47XFCAdoV9YPqHcVXUr32YKxEhPDe3WmKrg47aksNaszQxNhXL3hQyPp",
  "key38": "36zgFXE2BNhgWncmx6Re8y88Qsp2taLvA6udA7KBn66N69S9JuLdi8Hp1zGGzbnVVSCUpFdQ9jaYkuodnpUnrZnq",
  "key39": "fD6ADX4T3rmcuYCCPmN7P4uB4hp89gyqB5odnKFno9CuWfydjKkJ77FVXLSFWpBzYekCcYvLrfmyTBpZvw7wL2d",
  "key40": "2dx7piAgYJKxCj8iNUaDEUZ4qe83CGL5R4zd59r4zotnrPkiv4mxWEFAKDQ3hbgJGvbmie1j8bpRn5QLNH48xijq",
  "key41": "49VsWwX1EytyVkv2Jn2uxNErWQDqeFUXuFBmorT59yE36HbWwTx2sHQBxpvvdXUmqfGhnK5fXdFUa131Pi7vibeb",
  "key42": "3DoUCpgDBCXrqbbGouY2VHK4SynoFgXB5mMa2CBYgG5wVnZ5hNmhzTCukoFbPCJ1eC9scWmVhQLZh2T1qfdotNC6",
  "key43": "uBfBJgE6SrhFQeiF7r7qXbh4BmT9DiqpzcDwNs4G6Ybr5P4DYQySQjsH95cvcxrSNMv5uqN6WTUJ1yVPpudN3tJ",
  "key44": "3JfcWwHWvfGV6drtW9YEzJX9WWUEuZ9KuqrkHL3zzxRJCGkwHyyjWj9u9fskJAMeCEsLJhWnkdzNp755hpQHHSnW",
  "key45": "4JjWyx9w9bcn5qHwCCjrYWZ24UyCfLgi8NztEEmnwCjw99twvgrDqcQa2GWtWVJb15bcJwVvA2ceCn6XHj5GTSyh"
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
