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
    "4vb7LRtjaXYhQixr6Cj6VJaf3KDcvyqV4PLY2xWLeQPQdfqKtPvXzWehi6kAAzBeEhXHo379UU9vEwmx8X9t5WZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vDERRZ59PEdk7D8TCMrjCTJNoEBMHePkBYWqeBD3zrRq6FHeca4gUYka4BA6xoMYSca5ZRNKC4bXZuiuSvMqjrt",
  "key1": "v4WAvPThJj1K27ZjLhLhrRVyhWDACW4KUy3mW6Zs4MWwcv7yNBVCNQ9ccfFRBCdjV4trYyeCworTNJVAesU6PCk",
  "key2": "67WHqnsNTfjQFwN7usTcTxCAy9Lbj8xNLKbVnviMSapvm5YKvsEsoUXmCxBCGekpMK4Mt1HRUx3z8v3q1y7fZkuB",
  "key3": "AGcBL76LthMQ4Ju9oPFzzaYgPTLZoWxEmETosazyCSGy74VG5SsYvF4kcmsKFwFYvyYZWSMkkYdL6QHCwWpTbby",
  "key4": "GAJ3jWanaH1VGJb2ikjwSPH46B3JF43KfRZxBERDHJVPdf9GFGoZZq9aN5VzQgxapBQ9FUJ8wUsKddLB3tfwxSa",
  "key5": "ZcaxK9rLSVBuF6KeARqMKyKnpva2RieiiJJ733uG9CWzM8JKBWwSXK6FnhsZjHyu7v3YFHnfd7ZNDV9973ve9zV",
  "key6": "2JgSY8w86egVixE5x2rvkpjBu31oFcxcFKW1VB5hMf1AYqjKT8yrr6Xca4cxPzJEKPsGQJAwZtvJuoeaqQLhGHc6",
  "key7": "5RW1gY2vj1VTKbajfywQA539VB21YFFZXHk9uR2LfRZVhP5Uz7GPCtSXuuV5VygLpUpXffTfnSVPVQiCLxkSCWhz",
  "key8": "4ELezUAAgtAA3cHzJZB5NZaeLA3abacNUeZSHLUPhQtE5yqx4qABsAmPccHQU7N6Aur2QSwHUqC6ZCzEH16Fet85",
  "key9": "2BWUoVHftp8KJ72LkavsNpB17ATiavqVVhGGWTAt7rcxuXvWffxMimhe5RuosVqVTDVgPin86KuVuZMP62V9HMuJ",
  "key10": "3e97QJsY1GKNofReacoLLRfBg7GDkRCxiDknYVoStWxM3wQAScakk9xZG4qNS4KfLtVGpuQ6N4BRhYcXH1XycbJn",
  "key11": "5YW6YfLPyn4N5Q5B2RcGTkhtQUodQjNCHJxE6DuRVaRvW2J1WZb2pPogggUgpy3y8y2wyQPxNv9UcfdTNudiPqz8",
  "key12": "3jNuWiWZEAWZvx6AQVBHMk3WemuHrJnDAht75vxtk5BwMJSyrkDCR5A4EpKh8w51XGq2DGypMhKC1q9pZmSodVcs",
  "key13": "5yPgrMAd4ngVN1gbHotu6rPo6XUbaxLFh7HE2F7KnWtjae5n4rr7QLNNjXVtUcCFdoYe95ooRZjN33DJvHz2XHr8",
  "key14": "2YNnmVBHBAMPQztsf3F5Rg7MtUcCZcgKn4uSaGrUyqW7Zsn7Q9zd1Yy65ZB83cGGjMtVdQLbmFhSC5Se3Ud4HWG9",
  "key15": "63nuv1aUdw98F9B1yu1NR46uhnD8P37zFLc8rhQ1MfdaKVSaSEkXKmEF5qgnBoKfRAjaVpH7PZsDWQ1wQ5UiWkJu",
  "key16": "2sSQqp5xMYFQDzxKKKLokStUvKBrL98avyCh7vdKPc8HxAvmZAhhf3Cv7nLD16MC5dUQAJ8j8JVD1X13kAWn8Lov",
  "key17": "T5Xo7CKupmRop14VVG4YGU3MZ3ZszoFpD5Tdu6jeYj9VVwS8UvfXnvky46eerF7qJJKC6m9XD6DRfaYZu5DYisB",
  "key18": "5JF31WdwHpbDNfwBnzTgEE9rpwF6TmR3kBKVcWPbqknGknWZxGfzgmwEAAVGR5w43aYxGdqadf7bXvTsYXHebyFk",
  "key19": "2c2A6pLz37pum2f6Uu91dk16myEufg41DKvCqucEMT4MsGs5XDuhkGbGMjccmBQNCfuQ7SkMDv4QH6JGRoVaHoUR",
  "key20": "2NKmDxG7AQ3kPXpzYZhFZ1dQ3ngLajLqoRveM1RmwqQFigstCkD2JD7TB5Dq5JbndchBS934TE6Ei5zv1u3WhB2F",
  "key21": "2VZ4UsLPYivnpQhssoXhv5dsg2p32zFcQrvbZNzrDARmcKgfFsTMsEjGvB4CCTtiXRv9qbyMJFiRAhrKP7jWL7Sc",
  "key22": "2rnSAvJAvxDbGeJawUfjbpMtzfuPRZ79bUMdP2AeiuA229cQpERX86nWxUMQ9oAmPRd21UvbdgWejRFouuimh2U9",
  "key23": "2Dqth4NkshB1mhvkBdK3yW4bpUhWc3KM7pqnMt7MNh77r9Yf4XTyfw2moQ1Hi4ssragMgBAgzhA5KayFMZvjCFpf",
  "key24": "4t1pFdCtnFqmWgeDYQwVWKKMtbDyBDE1YBqDprZLv8Mt2hwFry3VPLFM7VgRESpa7BPoXkaTFtm1M3GwBffRdq8C",
  "key25": "xmSsU1o2ZiBnSNFJe91JgzSXxK3Ef64aMjS7Lo8iE5afaHT9gwx3ompied6LgB5ND9W9QrqACFw2YFXjZU76fsu",
  "key26": "X4ceVUvXqvLKiSS2DYg8SY9tPXJSqtLvGqB8VwtfWyot39YvxRfLe8yHQQhxYpHf5QqD46LfbD2TEiVhhYPVBmr",
  "key27": "5HpNUqngezDUYe1XSjguCJadd1swYYeW7JJMxftf5QZDYfTLfZLqk2u8PCNwJyBvzQVKQKZepSNq8yXPuzYvxDmB",
  "key28": "4WogfmfZi1xaCpcsoJPAxUw6g38DSXhWsC9W21fmKGA8mtmVjtUb2ua25p6CoqHogwVqPuYD9pxyojtEHiKa7dA8",
  "key29": "VUyNWGcyGBjWxeQXT8AvoFGG27GBpguxwmzjogkFox3hifCXNV3oWWzcz9MVXDX4FrerBE5Zf6V181tNrTE5Ycx",
  "key30": "3nHJ1rKXecfpnUDMjQ45mcQLxnBvdSv5cGPA8iJFs7PDq2NPGvk86ntj5mmMtrGvSb8XSs5SbrfLYenLYhKVksM8",
  "key31": "31syDxHeFGyUsz679xHZjvdfVXkyiiBekbYapPa4HwRWuWShxmssTtaTT6J6wPfcYavZNKkCDeqfcs6SAJNvxPwy",
  "key32": "3AXW7FYBbZjvS1apYK49VyR3tS82jY6PVf9hvM2X4bWxYhpPq3Eu5G4zcfP58fjF8AvRXqaoPug3WjUndw9W5F4L",
  "key33": "4JjF6znidU5VEiRrvHAh2jFxPpvVmrapic9ZCTW7AXgYZhwUzRSCfsBD7fNczjKgsCXo1pzdd8DpPdwDJP6zW96p",
  "key34": "2fVBVgHH8xKZPuur4pTQGJKh4Efpx8eLxy6qqeokN7w3dyyUFZA8kfaUGhHubWyg4Y6PoMPqph1hrSY4vP818d12",
  "key35": "2yHVkXsmPNar35SkSqm2XL7prgXHa4YykjRMMSWEzBnyzcHEfqVyj5pEcA54CtLb4LR1A8Yftm4zxbxLrS7B4oDP",
  "key36": "ZQ5E5Rp3Nhewscm2qMZKsjkf91JYRV6L4fwZz9wkf9x6VoUobTAyJFmzXfpQw256py7J1Y4pyominQ8BHdXmJK7",
  "key37": "2FdK9HPbv91yb5sQtHfxuV1V5CBy27uyoMc1CqhLpmpgmoKZTRRiE5zdWV71sWAvheke9hEwvBCiPM5t85Aa8vHT",
  "key38": "2riLbR31aTacFNAPVd2rmV7UXUk9BPEwkpS5tJcaKVgxBLYMHe57EqpQoBLe57ZipKyiaBCKZg3eoWP77x9QujLw",
  "key39": "PeKwocpSsKcCh31J56S8WxBLqfsft35eMYAsKcURVfKBFKXfLm4NrcmdxY91Y4SLadZUgxRgmwRFkvmwSofDsL9",
  "key40": "3j6UQU6ywcSPx87RtXNVdVEbGtRxieKYVKg9vj5dceYebjcKKmHHThoYqr4r7e1sKGUBQj1PVj6i4BVTFMDVZQtr",
  "key41": "3a2kFjfvCT8Lb1cyZNQQrorMyprCP5RaKVnNwgw3et2wiQzA8JTVyVyXxFJk5kxxocJrCVdhqUVr51KCyJzBWtbg",
  "key42": "21CNGEudNM6jx1woxBpPDWB6SdhoiobvycY149eGMhFLbpA6tUptrYmANBLaVQ27Wh4E1wDR9g9a25ruBvvJWJ2e"
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
