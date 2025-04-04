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
    "uSGQ4QEWZLS1RWtSPeLBUycDsckLToBUT85A4NaLofpwvKmH4NzuEcqVA7bJmNivFV2tJRLtLq1oFzhr8TPbSoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43GprkTUbZuthZqCpnEJTLjqij85ULX1HEipRs69op9rkHD1x3WLd43Qs4f2ACyigVaCKxmjSm6ZdiTMZWz1xnfs",
  "key1": "3CPc31muinpvEzBrTvQk61LFaoxsQ5y2iq5GaNqfQmTAhu8DwcRvkiAnDC2831EUUJqTB3QokymLU8LnL8dvhkxm",
  "key2": "2ynPuKgb7QDNQLhw7JeG8U4dc6osKn37HWs6udgkdjGTja4KZwjBiByy9Je9VQavPUbPSVZUqUPnJrGXrQfXTP9M",
  "key3": "4wicqyKFekeqJDP1LcmdA2be9aSazGm6tvige9dmhHXMD7Xt1rvjRUGpUXtXJz2Cqx9MKDboCz4FWFi3Fdbwiuaq",
  "key4": "AnpXGvsUsBsVSDX81NA5FkfmNL2enyCm2JW9NXA3AJVpb9uHzQKXo9CB7GCvhEKuainRrYx7CzDYYUNfn72sC59",
  "key5": "2e1gVpsC4tfpVRTLc5WBfeWdMpvRM4QnGzrfVNQVw93TDcwzomkNMvcrPjx55ugVMR3SNQfLvoocLAWpEWjprWys",
  "key6": "51HiXDe8EnsXQv3k1pBUoWY42EFKYTd2P9FxrkqhCaq3k9Dt2UfwcQNtYJ7EUML2tka7pPRvqgJRoPpXDSxBtbrZ",
  "key7": "3ZpvRsp3kav2SuHLRHovbzsTezGNnSh59MHybxqAJ3TSSiFHqErAcd1K9AE6oFBmxtmqWmwA5zx4R6h8J9XVugK8",
  "key8": "5BHvcZfXGUYzXJbQfcPYvYyP1xs64xc8iB7ebGWEMB3sXHzRbNGmq3bN7w1V4SDLVCRm8EVqFK9KhTE2fMtxd1Be",
  "key9": "5q9NbHdFPm7fuXY6ZUfnSHTW3FByXdxPGvQLT9xPPvwedU2xKVREPPL1tMiZyuze7n7oQBsfNjyiahCwhR3KvMSj",
  "key10": "57nnFDJGBjtD3FW4huFQaRC8LkqKqgH4sznvU8kdg9Bf9QBFtiNRBha7VmaPYfumhnHDjimEhtD3zsfjYb1b7poY",
  "key11": "3k97LJFkbRXTevdc6oh2A82hWkB7jSYaKEWNc8kkfZzRbR7GQJNjJobz9mtB2BWL3vsTJrqponf3CFhhpTRnWf3e",
  "key12": "4pbVgcjKqGXo7L8S2QMPznBqwoYAihmmcFwTAWvzuYWxCcJZY4jrm6xtitxqRk5x6GzVvJTP2f8atwQqPac3eS28",
  "key13": "4EE2UjFXHU6XbA1nh4mod6SmX3a2m5N2f3B3k5MDzv9giQBqFkjCoBeBLU64kHpgSPbfXLdwn7sgjTWDLJSNkvcF",
  "key14": "39Va4sEu7UTPH8fjj47NCxVE8KJvFQN28Dc3ufQqqzFV1YMF6jymGM3nJbUUEFSvScKxFKRwfbhrx5hWEu261crq",
  "key15": "4Xh1bgPWiAtDF1A88HavNr8eV4EA9Ne8nmGAxqqPmwK5GPE7nwzYCth8nuaxRndxt5B6yQwJyX3EftKbgenvKqkc",
  "key16": "3qRLQyQEqdUT15akxv73y2JM8UMkUiWkoiJbgrCokn4AbNFMgQ8NfPWkB5vPxnakj8k13tjgPQVRzdm4e3ExwAVp",
  "key17": "3JZ9CYMMbEtTsobHLBTm18TWyPrpN3A28GxvbT4777WdY7hSJuuZLR1UJSvzSfu6Cc9cQP3sANLQDdj6Quj5kUst",
  "key18": "5NJ1DbjhK4YmocnCYNFCVxUJ4JDiAjxNsqLtSUr9vojAPoiVyzE6onenGiyfh32HyHLG76zd4bGpTezUWwGxgxyx",
  "key19": "3n822xz9chJPsdjA57rbMC2eGZApgh5Gjr1ZZZbqfSyFUcodNMb8iXsGUyL6Yb8HGCoSd26cCDMP9TdtMwLhCuLA",
  "key20": "53PSopo32Dm9k64QWn1ymS5vh2tNjhqbgHboPj8g8C6d1qqxyCd7qeGUswC56ECeAjgwSUThgZmw4TPFi9uqHLsB",
  "key21": "2XySd7yfb7zDP5exhhUfpZJ7rQZCAatiT5Pweur8UvRmEuVBHoJ8eAovzAZC87Huy5C8pyuobvGmFuWNtdwLhnR4",
  "key22": "3KR38UQniHKSXkfiJCfzPsEqxsp8UsFQMQYWjTUKug3qawDkbkZ5HPrKF1USsijAxDBsXX82XGk4u6thKZwK6HNw",
  "key23": "3fFQFCgH3KkyEK7yazVRyazrHoFbgdHcyiRJva1i6XGbVSjku4yhQsUZUbDPb1c7f7SDJ8CUmgrS9GEgvbVZKxHN",
  "key24": "3cFBkYV8PVACm7NNm1cDdf8brZd1QXRKiNC1X2mNMX9YdA1BFsi7k3dgjAFApGfAAopkyCuXJ5Qy68ec2GWhDcUB",
  "key25": "5zPwA2zjwqib2iPMyGDNUDdd4Jxm71DGJCHLJXxje1KLqYiNxEyVCA3LkKduG9AZw3GZsT3hapFqLcd1xc6NmXeE",
  "key26": "sXox5p6QbBHtzoXrsVAebWiqSTbpumiXtk6ABojB7DZTidjrXN5CkL2wdte3nPeGgyFhTHzXLqPM8WxapuR6ga8",
  "key27": "3ez7Eyu55bHN7md4LGed1M4s2XFSuDqHdkEjL52xyMghX6YjLxVueiuSij7fzpoWeSLn7APZJvuJuUzgDjNsQTnh",
  "key28": "3P7KCnVbTT9ZZMtpgT6ivGKpVw7dHpeZ4KmpiE4e95oWss8tgg8mbbonaVn38bshToLUJEhSBwQjjA2QyheVEFH1",
  "key29": "2uUwH1ppE9jkdcC99JsyudZNMWukbKqsmqApAdjksTxLTBSpZbgbRdfJcD6nuxUmrLsEh2L34CnRLr369VmvT888",
  "key30": "5Y3u6kvUXYiwFJCn65hXtP3gfirqKxAV3QVuAaxZq7XMoytmtWyKxogp5SptztiACxo83rt7ex5op4PhurgHSNtL",
  "key31": "XWGoewsRuJgmCUkdaujgCz6Y4YHKM7TUNcL8MEPHVGhHvq6hH6QXQZjPmvyRqyPEknDzMC9KGe7NnQokHMXHNhV",
  "key32": "5mEE58tZQG8t2nK7QRwWaoQP8hRx4G2a7Px5W6cSURirbiwUnBNZN8wve538hKfwKhZzg5hMWjfyguCqK2XEifZs",
  "key33": "2FuhSy8mU57kwRUMHJo2JSURJGfoQ4oWg6hfqCpWWtroe566Ufe7v94prha5v5jei4bEJLUjnsHe1b4rFLZEuotK",
  "key34": "2VYh8Jv3tr5nSeqwKQpzM3V4ReaTgDYfxZD7ckMw1VWiHXNC2czK4HxKr9ydzQiJdr3nCKtFAM1kmdJfDSBUe5bs",
  "key35": "ewfVdE8F9iM2HkTgD6HoxZ6T9KYPuN1fWaH5vYGTCf1iNgGXQrrtPq7x8mhn3YC7Hq1E5SJCoyNnUsvLzfDPEut",
  "key36": "5y5MsVUCXSXDdo3guAYuZzRniFBiHSrDL8f9E6vkXRz3LKnEyx9PVLw5HGw4Z6n4UhCftuQLQwM7DGCcoeMBWrZe",
  "key37": "4GUsq5FcQypc66kn4VvtRpC5z6G2BCctFgeJsTiifDLDGuS7P47uGH7zV7xfVGbSa3fnWj2P5sYezLJ4ZcQJNno9",
  "key38": "5tty633LVL4HkM54uaaFFV45cuXQZYZ6oSqj5XcUuXFHWc7SA89NVTcVbGiNb5uGCL1Cven16yhLt7X1jdhpL82q"
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
