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
    "MR3ZVmjin9HTv64Nhen8XYYJorGHyw9wujY8cohMiDoqXPgpiCvvVDkJC2vBN2oTtEZj3S8sPhmyxfnP4UZNLWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z76QEXDL2jxU14a3CsoyE7hpEQeVKvUjCs6ZYHiBcZaNAUa3qECS66XWbzWVQVES1PgPiNFVDGTE7mNYXtUWg4K",
  "key1": "4knEuUJ24Zj8C3Meace5dAaCo7PCLEzdXooRYsSUtBvQxj9crRgh33LYGB6u5Cda9mEn1gyLYQwmo8qsKfYe3Dwc",
  "key2": "4jZK7zfFoeKRNTwA9tWQ4y8qAJA6h8EoXu6mKT1EdR5fSa6r54j1maKmcrJR8cDySttjnPuD7CET9oeBHNVKrC3Z",
  "key3": "5pVoi557UiqDSy41cPfgdHAbqTsGzm72MNZfWbM9D4qmZ7qZGt8N7r7oVkW47XhpHtbTzfzV8qmQaWcig7tFf48X",
  "key4": "DMXCCWLtPo3yPsYNGa3nCEawpkNhcoHPBz6ZJYsidk37v56sqXTYLj8bRPq2sSH2Z8UAa2e6j2eFrLJYV5Aogsi",
  "key5": "4aDtrKUoLEfKFU5yVEQe6AHqrLumLdtt5a13rsywxDZ9ZLyh98yFXLDgEGNrRpmBZ731zeqX1Eyro5Lmo4dfcUXf",
  "key6": "5pX5a5ysWPcgCQm9aNpECUKpeEf3mAcFxvtjwVyUagdajBeXvTCghkfKwjbm2FNuEKtH66PeQ8kE4kZavSSoVGLT",
  "key7": "PMK9WNfRcEPGhMcn1vJ3LKs2UQFuH6rxzC71BGgWcUJ6m3ZFMtV1K3ryTtnc2Sx82Qp4YoQa9EgC6ZaTbnmNeEf",
  "key8": "fZi4sL4UDZY2cg6manuxK4oQRUojEydgftezST8ueuMQUTmwstYFNDw2oJXyhtC7ap9YLYogpDky2K8Mq1wDEmc",
  "key9": "DgEQMwWYmwfwHMiR13tMPXSfYMf2bw7uVpwDZnL85kUWXKmnNJnZT9JDUDMVW9hmQF1MxFx5FvcUujjMtELCgnE",
  "key10": "4t8HpeZtLVqahbtZqWfrJBJFuigDTnTLKGgYD42svmzERPwYEKDBQ7jcXMMXHXR3PkFvyLycx9JrWzDRzrHzgbvR",
  "key11": "2GXnwp1dCidoptiNKwwKXD14EeULhYrfEA4fM1Uo128p7PcPtgmYLXdd1p85NxCmkmbJ4RrNrPp8guiKMnNEzSSr",
  "key12": "XLCuEpWJLNZzwwMDEGYwFK8gxbUvByq5nyuWibmyF4Yh4RdcPyy6HfH5Aq5vZMVRoQZfB7KBkaQpNDZCXtPU8dy",
  "key13": "sxUhhXUMUsuT1ReTLdAfoqRs1G2kKk82wsaJ2PbNKRH7XFWGxoYYVZZLUSwDX7kturgfBYUBmkDi9BWmZtwD8C2",
  "key14": "4mCG4NY9RScJAckBTuiQQfG79CMGNvB5SrPBxs8xUxSSgX54wQ2inEuDTRzStCqmrisnKJJjm9rMTqDVMDbheVzH",
  "key15": "46Bb42S6GJNWqd6NrbjU9LZ4Hop35ZikUuYRdRf9VLsrMaARYhW4jZmsbFkd8vidDzhXgTTueLBEnHFdPjDwknvZ",
  "key16": "2yNUP8qqkAnXtgk88Q83BCPg544vMotDN3ruTBW991Jadn2gnWGSn9hRnkzYxkgeFbvFNWEeZ5K9YnJz1QQgPWR6",
  "key17": "gTLyEu7Hz6teQb4qeLE6PyZu4S3ck9aeMvBvY6bn2gduKV5wef7RoAXfF8E1J4RGqnnD1tCcbPqdmoyQTQX6uQk",
  "key18": "4vdHRUd5xhC7ohnywaDKQHwE7t1VNUA1YdK1wNDwAtKDmZ6gRofCgSiHNsBpCZg7B456t9NV2EN2Z8QDRrhvjYsZ",
  "key19": "2bmdcLSu6MYzG2v5yWcxPWDnmULqyFg1wSVze7oLyKYtdoPKkcFBPdFs3Ap44dX5s2xNXeDvStqgdNNwdZX96nGj",
  "key20": "2SAqnu35P8jMHNw1MQHBMPKUGmY9MhDuKQ7QuyVnVAgEnvPAiqTpTRoEgVeE6mobEucX7paHbM11A7iMQDBGzphf",
  "key21": "5EAi9toK3nbKhWhf2e4Bgk9PBhRw7EuZCuSf3RWdeLwUVwdgos6sWzxo3zbC5U9KkY2g5dwQcrZXk8mNP7WaN64a",
  "key22": "oNst9auMbJ9fhGs8zSCVmTH7eFQzWUcZiPeAPRyJgCjEhcS1qjwLpzkfmqHUnEsUNLgEY4TC9zp8mKastMp7wcq",
  "key23": "2KvRjp5MuDpbEgf1ZZ3EhZPENRWWv5j3XGEgacje5cq83jyhPVu7918QQyTLgXZMUED7F7bpX6p4B1SVuAjDTAxy",
  "key24": "3BJ34abgvAi6aWmQanphemLydMfMpM2H2Bth5iMM2zRoNi4cTYoiQ5EyRYhWUYHmBQ99h7oh9TyYtc2xq3dM9g3i",
  "key25": "4i7gjBsMqfhrXknseT2b2aztYrPs31NfbYVUtfpjME3w18ziaMCZ17333GKy56Zt3trAnbkyuaVLYE63oivCneXR",
  "key26": "3mcSQ6vsMLjT26ePoqZshCWm4vznuh2q5TLG8aU7hVaWEZSJpAy2ejnmVSW5V97ezuk36q7PUErLaJ9p3Eg6q2UT",
  "key27": "vyEpaNJqJHkwoCTrRZyf2GQrebJRAUPUsC4Lc2k1zfpssdi7QQxkhbKNiZC5F4hfuFs5QTghR4NWMwvG4tQcTMV",
  "key28": "4idb7Y2AHVfHy1exvL79g97tR447YUX8aAHVC3K7YbxHRavcnUvwSisjvefb95uoapE1Mqn5xBDqHH98Vk5wk3vp",
  "key29": "53uFfy7PQ1WNwi1nTfyTG9w9GMtPYgbKiq2ZaeZF2S4aFqtsK86WXvZCp4nqGhpK5UETvznyJUn4FMKTJ4z5bZr8",
  "key30": "529bjjifYcoN5aGUuudikZCBMgDGKHBzsPxwLPfZwxYwtC7M6JFq9CkpyoPgRgJJmoCty5oLsYhdAkijXvpcFwpo",
  "key31": "4tKsex2obfnuf6Q1UnGnkSwMXKHT6HRnbXgHhk9V8fidSxZGPQwVtdLUxKEvc7zQhXmPMgAnQ6H2Jhtfc3YrnEpv",
  "key32": "4mRhGctta6ZE9KxtWnzvF7cx4YtegrFXkVJFPUwtSFzU9a72SYruQ7eJbaKqEsnRUNomxffvhFEGG5XsAWiZNUTb",
  "key33": "29RtqdcjGDsuKzKb7dwM718eGKV7RHSZPgahUjDeibDxabsTXGQGjYpu9eSjbX8FDk59XLXiKR4Q128sxSXKZWPX",
  "key34": "2ctpzH4UkgPetVy6QSFqQcEVgxK9txQeKrpJ6F3cyYpaN1F5mtt7UVa2rGVhLqJyTs5GFB5pJFeTqCk1QQuBbABY",
  "key35": "2o8eVFmG8ptRVjG9Ze7efRLEFaNWvfD1PUuHywqBZ786hiDxttF93wcFgJXSiVQLMyDcDc1eCkNHX8ZippGqXAEs",
  "key36": "zWMQRUC47FHUGwWSW3BrLivFGzj7k7UWpogYUCnemPSYYybf1Rgvgc9Ds8DT9ZaXMYWFvhjDAkTAnWe9Zo514YS",
  "key37": "xhqscZrzaP13jHUhfWdFhqpKgxsk7864LqENTfyzXk7SMc5B9i6FCSRbc4boCbw7Ftoc9mMwgJWBsk7Sw7Hi2HZ",
  "key38": "5ZJXzZwveVSdH2qNdEh9jxGZ82RYt6nH8wFaVCi9vhRkMTLHmrdFdxSwr3Lvdm6YXP3AFWAoVGmtCkoddtJLhHjU",
  "key39": "2ANQ67Qz6azvxjWLZBNeaHDrRYr8TjnXSSbWtmhcj948MnCWeFMxvpvN5krZV8yhucDW7AZUPM8hkvK6traVb1Lg",
  "key40": "4D7whcYiRggYSZ9ZrtZwEyWVjyRqroiqGzgDJ2rf3kuML3qoJbXymxSTYBdbXqbAFtYRJ1LorHN8Grtj7RiFzwzu",
  "key41": "3uUt5f612gTAW2MKxdpPh9WvW72bp1CKXDJ6s2Wi5J5m5raon7cBw9aaPDJxqxgKEQNfsPfTpCpNbfU1vR2PYd2T"
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
