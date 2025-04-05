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
    "3irR3wW2L38g51JQRXRUqgiahoBhn1mMKVU9cUdibY7CcrAsTjsotf7CAk6uXuZy4iWP3c2LgdDjGc4NXPhqvdkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yuzVKTxXbZehQU6BuPtaYpSmdbXbhqwDapzSSoKFVKU87ZNFw5eteuWkhEs4b18UgPxttyR2SMcx3uyZRpttWTR",
  "key1": "2KRaMidiVp6XsFHC7qf6cxNGTjtVaLaPhxWpVokhqF9opRP8ca5WGuyP7gCeTQ5Ckv2iNFVF6AF6yGc9Rfzntr84",
  "key2": "4h3FH9aCf8ZJe5aDzDm3szNCiQZLxN3xCEUaENxM8tN4hjbx15nSshD9EtV8jE64uFbMFHqFwY6TY38nn9dCXAbz",
  "key3": "pNJWXHAAJ2acXu4h7s3uGNynCVbkDzGvquK8mT47FZdoJ5x29nG7xwH8igrmLyc3N82L6MGb9vG7v5o3k2rEH4r",
  "key4": "gRYD6DCjGq94JCsign2pDK9yooUPi8TeH3mWNVtPdBx1NMkQEwUEiphnJwamcwhRz5bRFricYoA8YHtFWYS4qaM",
  "key5": "xU9kwrdu1r7CCnAJqjZrNpc8JrYaER5kxrSzjGwoSuiSVPydrw9teSVohim99LvsuzX4dhhvvkbQ7Y17N6vL9n4",
  "key6": "5Mr9DkERrKDiAseUnQAbBWGwDMcvaoLX8dJM17jf7j3BkCf2yuLCFGCCpaAm7DabTvpBufGAC9oNiDFngEy29sLG",
  "key7": "2tZa1XrVPR1nCGq3Po1vk8ZVzdiNz7KGmPDJzSRXJsZjWjaesbCce2v9joHTTBiNHa1sZsGASRhinkY3fQoz3g6V",
  "key8": "2v44tAQCEcuvozbfsLDHU1GyZoNtYBe9gAoBseywt88Fweyc16tJwiqVm4XRj3zf44Q6hrHJSH2aUV7Tv3a2r7E9",
  "key9": "2FtYppwi7xNfR8EXANHFmFzJfriB95ym6qcfGgvPS4drnYYw8V8aFpnjLH1pZbdsJYzgTwZeZtw2wuLvnUxfscJx",
  "key10": "3nzZkYgcarn6NG2sgPsGhaLmFXP7Duw6FCW1NksSbk49uK8Nv1SbWiYz3tDABBEq3qFR5qnbLt6KtRuHiWQK2y3w",
  "key11": "3HHwKP85wztXSoeyvXyiba14EFpu5p4CViWKa9czAusgePVJtX2wzxZVT2e8sDB81avj5heJjiRC235dteVedHQU",
  "key12": "26EyfG64J9BdqNjAdYX7dbuKKw4MmJ7mdLLAV2BEJXd5VrnRV7D7KnXqiarezXv9biMzn4zfaYZqX5KJCu9NXM4u",
  "key13": "53yYb8yzqzrwxAZHSchwGjgas1yfGBKDcnkhr3TLeJd7p6mXksZnwvdFE8Kh5s5i16XgeKtsDPL55BSdXbRWfvQS",
  "key14": "2doCiWTnbSFZmmfv9gFpTDiiZWQn9v3FLCg9ZiKP7UUFFhPQcpxkjMdEFdyymVGaUYythwxfzt1wD9YSydyPu6GU",
  "key15": "5zzc7KT9oK7VCuG8EimNMRNcjwv6ZPsomxs5nmdfFoKTgx2umq27zco7EVmbvn2zJ4BzuUnWuZzMBnR8A7MJd4VU",
  "key16": "5JpswbJ8TXiuwWJjdxrc1WhsJgdNwD2T4P83PvEk5mkw8n2LmdjUjQjgH8P68dgJvgqisjwzFdd27hT9TUFG9fkK",
  "key17": "27prjxpAUDtx3F9zwkLs1MPkELWpcremgUyepbSBxsGv8z5EJiMCWBP6GfBhKcndovB3U2xcCGrpH1r2t6cZJurY",
  "key18": "3xW7FdAe5GmVUPtvokEKNho9HyqLKYLh51Mfjj11WZ2acSRpoKNNiRb4JZaRKD44uj2aG7UmtnASw8HwNtBydq9g",
  "key19": "2oJVrs7ZomVbvWBdyNJPEYePhPjjJNuBYEAZrwVDt7DTnFiMhr4RoLFS12gasTzgLL3TM56Nrv2QDG9ATy5bXmmo",
  "key20": "3EJ1TZg9uKKcLmDqwd9W4hiNjzNSDyhrszeQJvMLshnU7b5TQX778XbQUSicw5f4WsxSDJRZKmrrgyvZGgLp3HpR",
  "key21": "2PPshrN4X7PCZj1oxH53F84Sw7LPjcTgyh1w8PuVoYksob1vc82seq2EDtrnUWAbcWADYCqEgsvbySApofAhvEtd",
  "key22": "5JDUmLKxg2iQ2sb6JBg6u5DuMj1p3xfYfsfxsswJLvaVEkw59jK5MwvCM8KuVU2y4sPo4GjSyp4EzcZeuD5jpiQd",
  "key23": "2HmsXejDEVQkfuD6XoXEUimSSVsvJTjGz1r97P7AKEV3gF5vmqJvnsmVjeceZvywncm7F7J58vHyRVSKqnmnkgcV",
  "key24": "4UbgxdGRZwwnvPF6UP7vVXZYVa5qCAQNDNQNXKTkf2pS13oXFtD7xK6ieNuArSjNr9XnLScQd6prfEeY7UDDRNxR",
  "key25": "2Azq7vZJh2T59sxzrBJAJL5YtACnDcBzvVBEChPk3xzWKtYUFNRqExpJmwdpKRueSX6VUvqtdWjQEB6Bhc5CGna8",
  "key26": "2djYpKqZHGLZhLB68xpJap3S8LNURPZ6gwkd5F5NHeUAdhu3t8h5p9yc5akusAKRDmJQzWmY5WocTmGVr58rV9fD",
  "key27": "35Z8LZ5Y6YS5EZCo84YgWFxyxR8nXfrjrEEzobyZBMAhxTamGVCUt5QyGJfbF7PcdqdTveQtaBURdMqhMmaW3vBa",
  "key28": "2A94S9P7JNeu8NZuvSuXE56QAZCcHtx1N7AnkYXsvbBqE6uLF55Mc6ccZdH6ZnsQ8FkmU11wnVdEjg6pAmTfbcNX",
  "key29": "3FfyjuQskndGafxKreSZakfybQTfMT2AbfWbX6XH2KTVE8eaeVtFBQJbzvziVTpUytC9nff6zdALLT2TMLFG38JJ",
  "key30": "4b9zrZ99eSq2MEpGea29KNFbFLrSruS4N2QsaPmfhSE6gza7HsT3xcvHR88EDR4qPU29fAtkRT4TrAor83HnqZt2",
  "key31": "3xfcLj69zbLgDjmXfWKAmk8Bft1qWpr1N7FEHt9mGHyC5yktzJri3YkneBEFzYT3z9TLdt3VKUjKpBb6zctnmZhH",
  "key32": "2ozP3mCeoPDGkepzQTkBda84FCeTniQ3USqpGWESgWPWcxmYnKAsCEMrRYzgj5ttZpybEeyHWW1jUcDiiQpVHU4n",
  "key33": "4xb5ieyyp8GgYgokDjgguavhhcor24LrXoYUqENuLccJsDX2HrSoonqLR79zWaVFHksXphBo12GrhqQeVCwgD3ES",
  "key34": "5U3LqWNttNbhX5eHRL9t3aYiMPNSpHtKUtVkiwikymKUTrCbKD3P7HSHuk6z9Vx8DTSNqWxXgvCyPyJ2xjpqQu2T",
  "key35": "5XDsKmRA2471MvAiSgD6XwsqhSDgLWf3TNzSA5eYeLQxkExY4gMkdY1skEgJ6PV5AFLsmzuK4RxXjKzctX9GKrfS",
  "key36": "3nkmDQr6QnE4Bn7NmroS6R896DyCrNwpoD6LM27FaigWNDuwGcJ8DVihyarDntcXBEMXgiRfdJyfJ5G6hew65YZm"
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
