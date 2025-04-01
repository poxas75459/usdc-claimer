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
    "2jnvRQgMxHm4nPNUidxxUoAabASuEXByGk1m8e6PTVg4LhUJNoACfgYUhc4PMr3SRbHypSHxjhHhc94xWJAGoP9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WQA8g7ja8Dh7S343UvTBtJECgevZnvZzyk8QvAhWhsMWbQryayXW48uVnYeugRk87wtTjb7VnvpYR2Jw5guJB8n",
  "key1": "3TL2a4DSphhT2CgNwjSdgbDXApt9a9nGPK6Bfpz4zhwJV4hkHPUNnPHNpFba7xDN6r5KTTmMhCPTCVpVu4XW8sKm",
  "key2": "4VoZipgEt8g52koMTH8pwYnHFoyn8FWdgJACz1t24AHKXHRfUJCmgCHapyaTyCg8k3G8Zb2XF1jdQwPWg82L5BLx",
  "key3": "RR8oeiuJFu1CdrJQkmCrRY8C2zzzPW8LbqZXMyqom65Ap4Z36zyVc13foQpvYmM9TM2N7nGBzJpyFHpcPn24u7u",
  "key4": "5UwSZbHtAfZ7Vg6wAjLrUevag4RyYk31kk5Hb7ificdCkiiEZrGjKyEMzyf8WBgEEKZ5VSphgPNmM8dDaxHMWKoJ",
  "key5": "5A3zGVEdD9Wu6K6PnMNTZZT3dPbaYZZgZKPiUajp6hMH28t5VXvvRRYg6DjJVXCn6ewkdPdveT9ekmFP66eSxFQy",
  "key6": "3JG7SiA2DGLkddQt63G1uHGcqBVCkvysH7dd35NhvKac3FuqeKfyckrw2Dd7sj1eAeCbBdy9gH7SoN4X44iCXqhN",
  "key7": "5uoEEhNsWfkKhYuyQwQXfp1n81ve1RpPjBWwKYyFEwDbQYsE1Dmk4ysxeAb4uvyhrAjowuzwVP6Zr1evTtbJmRj9",
  "key8": "1S4NgS1kSf3jcePaouzEB2sR9gMYjr4FJNJ2YfeVWHHX1GcDdSUe1aaTu1gAXcDCMbriZLytgMs2VjSfFPe4EfS",
  "key9": "2J91eqRbocNXMCgCqUhmQBGJmJr2SbXPFNzJVcjvhzp2aB9bVPeik3EmuA373a4WHQTyrvkGwhwtuoa2kbFQhZmH",
  "key10": "LVwLucgqnYTFwGFBEWKjqEPSaNTqjnbJtkBVMAoqecu8gXmNTApuRDZCkgnNE8zfP9Yo7igz7o5rDygqA4Jnrph",
  "key11": "3Jc7qx4EJoTBpG5H3RnJgG6eXHyKgBpuwDZM8KF7HvHzrQyDXzMnvdd7GntWutnpgFDegaJZJPJQUa3EDiho1o4S",
  "key12": "3r9nCcaxXPAyGvXBAiy5T78dMqmm2QQK54Lo5dGaJVbpfKYwQo6Fwo2rw6TUUzuWZQvC9cZs5p36MSs6U6ExX2ZX",
  "key13": "43gsgxmuerDbvyayiJ17tgD49KE6ecLVjgdTrH1L9Ke9RPcSZiQcB6xLAX37tdAsKn1Y3kwvcTVUUMvwcWvMb7aA",
  "key14": "gZWLj6ZTfnibDjgFySBp3PvdHqdGnbk4wJNYrVzssfAw5roBknCFevKx8EUNJ9F64AKrd4y2pUx9J2QoJqetmTT",
  "key15": "3mLRftgGzTUx2LFZq8x4w7fmXvnt2ufWFtunsmw36w1AmvX9pfrvv7L87b7CUoVLLCxWnSGNvMaKpgLBbBABMEDu",
  "key16": "2gdCzmGSVN48nMqPpvvfNJev7BXg5a8pZpxP8vQ7oLp53etveqUKdxKGbqPU4itSYrG5fn1gRUUaA17VW1n6BAwd",
  "key17": "3jhMjaaGao1Rf4p4akgRtjywtPo8NBGiC9p1pXGpsA58fbDQNvkY2wHDEBumBPWtHBaNgHyhT3Na7K6zm5NMBYmy",
  "key18": "2ysskgHf47pDn1fJXAi9ursF9q9S49nSAofx2DkCj72q9HrUwMpBhrSU3fCGgxS86TspBbHYAQBCjDvTrEdrhDpU",
  "key19": "4tKMk6RG7Ab3FhoLpnY33URE3DEHoGreqwWWeMK3kNUufQgrkfFxDxaiNcHbZPArvdnbqFuLKR7tL2Ytb6xY6Kuo",
  "key20": "5hSdcijB8xSPbcKkuLZtJTjMyLjTwfAcRce1gFYZkfranjmvE61tsPhbeFJpqGag5ww9VJpeDLQ7pivyPKUYcWNo",
  "key21": "dptDbzS4tLgSCBPZEh9oGCX5TLkCMu99TMTXAAuqHLBrFCgsBRLKy5eTudjEcBNUBfiaBy8NnPc6ZASBoEGESuc",
  "key22": "2XgRPha1f8iXbFzMGYCsqREsjVhtwUzh42v8PuBxNPDw1e5JDvwuHJQqLEiM4tjUwnCXo3y4q4gD1PeXZPH9sFgw",
  "key23": "5n6hz8JyQjNPFVDGNKzDa7o2ygu9ysZA7n4VC2n8GgKquHGbgrwifwX7rJcjxjpps5mmzffcjNBQn4u4PniCrv5q",
  "key24": "4jxXv4C8KZ9iEH3xCPkgqrX3kmJWhisiEzbQJbDh8EoyzPwR1HFquZo8SeBRXqcQ382dVZUZ1QKHGdfFtfhxUaRJ",
  "key25": "4rk67WsAFYBKfpdjCCtmnhppuyo9Hc5yAjsWcFvPJ64KBJyYChixsR6dtYTZsQr9dKHtv7Au9kkFWFJFdyQhg3F6",
  "key26": "4ArCXYsLXWtDG1bejEzchEJR4nGxs4ECjGZbGQukuuYHubYY81rvgQU8EMKPn9HJZZsFvALD2kuhYSgkYTu2Xq7d",
  "key27": "61FHAjjcoeAWqt3vLdwPDm45y6KVcquSc4PJzPFNL8UgaQHG4S2AGSUXYijX8JyxjC6uRtHnPnbrbPsPQTbBPigB",
  "key28": "44z7sVauuF3hhsHQxDMW7Tfk55ippqBtuJKuXfDa6YYfxpF8KPExaZPuPSeMMTdExpXuFqnpQ9ahJMmGyS4QWTc1",
  "key29": "3w1cKjyHsJUfcgKsQ43MhCpjVNXFMuSoKkjNEwtVwTjfcMV2UiHZo5vF8Uj9ZbxPF3LXsogySRg1WZYroadYUyxL",
  "key30": "29BJGrYd24qaZrmHzpxJB68TvDmomzKV5RujJnedYGQu1cL6sSany6Mtg3uzpF5npvBJ17DzqZaZtzpECCgiePhQ",
  "key31": "5dtGqELjXK2MPGuSeqiMdvAoSMJtmBpLW1o9WaDRBevQAapRKxY6FLPHjyq8qyWovV9KYe2aFDWUX1MBgg3RfwuU",
  "key32": "4U39565DPidUhRnVhYvBbyD65EzTeBrCyuJPiB2TRdeHMrnzXN2qqFWon6x1KZvqJFFvxbh4K9q5C3xbFMSb193g",
  "key33": "3CUyimhG7N4R9EKb28QHxSFJ6QwZC3KHMUMM9w38x6otpeCGA1b6gTxKP412LEQZLCL6YGGDrMt1ih2gV8uZgFCx",
  "key34": "k21ycn6t5p5Ngjngp7YjvFpfKSsZKAzs9zeRMpWqHXh3y3J2khTBYfTp418cpGx4B4obic7FU9hNmQHrLosBibd",
  "key35": "7CEU6oHTvswB7yhqRQKtoXwLD2sFqjwthcRk5ku5HAfpxvVYCY4M86iADnRo7bGuQ2PDwWpmEYqrZSkq1a35eBw",
  "key36": "WjPfKtLN3Z5cWw5za4XPy9Dcg5JcraGw8FKFd2LnvF3teySQn1PuhU7DUVmU5BMGDCKA8RCvySNmoaDpNyBK9sc",
  "key37": "Gvk62yWSRMX9ZQTHumgyF6wcFj41TjReMnCabrVN9PNXBREWEFB2RpGzUKwgYVNykgVwsPF8zdsMocHWv741qoq",
  "key38": "4sroy6GKA11wKLKUWRZqvDxBMEdMG4xCf6e5XkdbxgQW85zim87S3jtHnpAzkeJj9N8RE5vdcmeuVURKJVAsb3Cz",
  "key39": "pHMNMEBbfqaURJjWXkBYAHFi8PEq9rQqFtKnzoyNexezqSmRcrehfALvUetC6AowY2fbtKGGaGDeQP9XK2dMR2m",
  "key40": "nvdGxuV3pe6h9btBRKqqr27YtuJFvRKamJKE8rxFyM1gRpjX6w1to6umVe7mhPkcLs59AYEZMsjgDptK3hLwUgz",
  "key41": "2whrmRnoLM4bTP8Fkp3HV9KtaW3RCDEdP1UVGd72CoYTP5a8qMYmQok14fqswLvLcfBWnZNSda949GTeQAEy2mmk",
  "key42": "4LJo7smVi1H8d3tt96ZdbgHANbkhbCiHqrUpaTNZk7iuurPcYVgHEV4fVdjCbyhtU5K3BCFaYiZNpffQf8TpXBS1",
  "key43": "2CGfbkkbnxZCj8tJK3w4urfN7892fM4ij4wLa5sFNTFZMiWvjRmRWxiYu2jCTiR39RhDon976iNFUkxf7gdh3nLQ",
  "key44": "348gDmrEzybNEbRCtYfqiBTAFRDFsJy89cPKMdES8TBT1CYno5EniqpTrZz4Ueor355h7gvuAYoKdupZys4gr58C"
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
