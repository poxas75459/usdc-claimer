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
    "LE9B6mUcTqp5a1R19k5Qb3pLNuBLCg9J9Z5EZzwDagSGqTLimsLSCw6TQMA3BRUNhgETdtUJgL74cznv9YpuJmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pwyKgefkRHuXgrrpgD6bpVybpiytoTzupk613bd3Na7yT195rVjgAu8aZ9sAPpBbU7tQ4CSV6L9HhUxzjqBqwB3",
  "key1": "2TwKV6jpyXsiGL4MkGyJxXqhJEY2RqvTSLqRtgHr2vWqngMryit4iYArddgnDirpqCjYD5TaAe8vHmCHzTWAodsD",
  "key2": "6aLS9JScKrrUJ1QtNk4CoGjcWqkPgc2qHpWWmYqXR9KK3jGPkqu4UaaQRKg7M5Ru6vE78thDkj4DNcxjKmQgCFJ",
  "key3": "4mvQXEvzFvG5Fm8xRwPgWRNG79taQQurRKhuwa9aBT125pZ2B6vm7VWsQEY55dBCne6DZZNBYLbjL9gF34BB5odY",
  "key4": "67ZB7BhADZkVdvMRVmuJncGkqG2V5SGdYsiJfDDpQm5rMdfsVa34UsYWS85V5zohhACDZaJpn7oaWkEeryV1Uo1o",
  "key5": "4bnF3Jo9WiEzR3DEEruZvX5K4PhQRyxyVqXPcnPtfogBJiA9X9pXityYRmgVUz429dKzLi7bjWu9WyiUUYWSZSb2",
  "key6": "3Un3haDDFnfQQS6CDTinqNbiP9VyZNUDw1hRhD6i3KViDJMKQCpbS1HcwBFnxUzxWCuBXsSUvTSLc7EDtcqnLA6C",
  "key7": "TLKk85q7ANUZcgactZhtY8Yuf7LpgcwdxddjH5E7Bcn83zkXxnFuyCMcDTChJurmzUZz5QCRpRZpa2H7jMqRs6S",
  "key8": "65kauY4BrdNwU1QnctYWVwhrJZoS7Dmc6pQVDbhdN83PTKcyqiCeWUdjN2KAfeXWT2RzoGYS5afPD2PUcqQntcQV",
  "key9": "tLwUuSAdKg5pQ65FYaoqWSEJqRTxEbaug6CF9HEgxJTEckndTfUizquwfdjdFPnSQ3CW8kLrMs4SYPXfNAWZ55D",
  "key10": "4327XR4wv9fCrvLK31PqKhwW5zfg2d1bM6Jq27kqbmnHEanNmxijdtcfQEA4YpS88j4CGxUDMVULpmae1xMssVkF",
  "key11": "44ooCdj3KQhLBrADCmngJbkDsvnaV8NLfxS7APgQPExBAq4XwoweBxVfE6sqAJgvUaF122oJCTctci7ShJBEzigb",
  "key12": "LoMS6Pagug4gM9HPdJcG4y6NLRKVttFj7UVC3y4NjKewYLL5jauvNb76cQGf61s8yYNicKbbqL6ufMUVmSCY5qz",
  "key13": "5965N59VfdfdYYx7bUAVH6qp4KPBvbnLSEMQQHfMSmvRv6b1dJgoFMCwxiW3AeZsEPHB6F71UfAJxGyfi1fMrD8F",
  "key14": "2N7kjScfsQxwYbrzb333DgXCcjknkRMmNiRuE8EUwzz81uKy3WHTfbNNzwLjrnGr4k3ydZtQjrbbkMKS6hsA3xre",
  "key15": "3HJAvMKTLzBaFfbvfzFPm5siKgxnqMK1mur5kstCE81acNduNXGX4mGgjypBksWVoNuBXMMnUPS2MHENLyHvX6kU",
  "key16": "2oWEaHF9xtY86CsfoHfyud34e52kvPpwJyMNNWDymPFMYMZGdMaHaAozdQo4gx4hVRt9z9GSyyzpn3Fw5DGjh1ho",
  "key17": "3ARhPswEd5TjUJ6wkMVu4ZcozCh8zp4yaDTxtpA6fkxt895w79m3jYfGpbGM7p9fpmxDFor5VveQedHbtJu9CMty",
  "key18": "BmtdWWWxuMnVTRpRq7Q63ah8cKYnqucCKZ5xwHk4J6VUfqGhi48XBieZ6bHZCRaGQtEMPwkTf5N7R4qR1mvFPkq",
  "key19": "4rgMdGUFzpuKrGRMW2SLMUwsKeCgnWY8Rb4V7uHnn5uTQpvCYcEubUueuvKebv19BLKqG4iy5t3UvJAZ539ALSDn",
  "key20": "3RRQhWZFZvEYsHK2FPzcuPGd8JuqgJ2VpedB7rCsVjWtKy1FEm9mH3fnnNQzTUdybACQpVovW8CjW1iS5hCX1sJ4",
  "key21": "2cij8DPcG71efcdpVXkhbrC8xQzp2iHD8fASVApuPeVr3wh3LTwKkiGpQ9TwmbpbCEiwRcbpDU7CQ4ARLsC1rgM7",
  "key22": "418S9QywLBoH7i34PxwLs8WQnFX6SvapyVk6GukB6fYuxq8fCcVaPegyQRZyUfbc6p7YYZFh4yZ6dELCQKSKjx5x",
  "key23": "4bnFewYBANjLAo9Sgng5DxeiaEWq6Jvp8om1oDGoQTZ3PVcHF3MHQK3GAZ7GrjCfbeP3HAJDvUcb9hMBnA9CZASA",
  "key24": "2YH9JbD8fQnUrNecTv9qQWu6merWD9MW1R1ETDdD3Hr6WqkQro3HEgVTmx3vo7uCUNJkTZG1PFJfaMmi69nVVEkH",
  "key25": "5mxGX5eVJ672zNdMmWvTvfnHAuWGi1uy9Q3cFfE1Wge8pkZWpyUCVQCFvuzzbmepXzmu8afLXQusL6F9YXPeQjRT",
  "key26": "5ECcscCs6bShx1EZg7BhQUMnhLWcMTqkiUTK5o2eVeaMoZrLmBus2NHPHmQkkgKgCi2aj3d4n1g9zMdG42Upm18G",
  "key27": "4FZC7w7EYc2iRhRGApfqBbazgKMU5nDwuFXVtn6LEkrh93S1PAUGBMEc5Tp4B6paxjHyBVatptMn6PA6vRudZJmY",
  "key28": "5yKHsTztR6C6pAWkXo2Ypa1XLpe2XEMzE8UQiVSdD1HcqZE8BZYXpQRbWUUoorH9n2b4z1JgGJqFF3Gtkh23V2SZ",
  "key29": "23nWYzj4AF2sXCMv3WhB2YuLXf8gnmphUxf3SdEGYiUGtK194LJv1n8GBbtKHFpUSEUpvAJmTpJAqiR3XFtCsKhH",
  "key30": "3WcrTYE6j3QzG87ginnhg4Rm14Uw6Vos18ARmEzigueeu8Py836DcsTxSUn3PGQTJQw2LvJBLEJZFMaLjAJHVNPQ",
  "key31": "5vpxovP1WybbmtcLNwk6bJPqQDSGswevakqmnnoaJGJJCRA2bk21qPvYSq5o9DV9qBRsbJZMJuVosF56UUFUUVNP",
  "key32": "2HdnGoempWGC6mFRKiopFA7X1YK59Jmj22wVqAZvYdqdNf77quGY1Rd8Aozja6iNeBV6BNaic8PXVFavmMPJspqq"
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
