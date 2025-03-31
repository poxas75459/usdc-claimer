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
    "4wFYqZ2Q8fPC7YNqebzksHGMwUoURuSpYaPb8PMdoK5g3Q1Qyqbf2Dr6bdK7QC6xU6NfKUjk4T4MzF5XAoqeK8nX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FNrjcg4RLBNVVJbz5Hcb9oTHVY6o28SvhYtV187gTgKvHDMv7Rqhd9hDPeCTTU4sDedBRb3dgFnadzCHcDnrRmX",
  "key1": "5hr3MRiXzo3HihMH4mFCUaobz51wBH3teSe5LeF8LanuqZyuMzDARaX7snCoAo3BeKCzAhVpGzUnpRRUF6GXMS9m",
  "key2": "33nLDCnyTgxYpSbfpnbRSKeizxwEJBHwzUW138rek1fuHXZRfHUqnRjmcwdusbGWe16Rv3SjTJPgsNmKEmoSpk7Q",
  "key3": "5Q6CkdyKx48wWt93ss1eWB31BfNUiRXCswfeSwD3fSPhCKSd33giacq1CK15HeQEN9y6DbbjQhBzu1BA7r9QfAno",
  "key4": "24VdqNSwiByXcCYJasjZNAj3cnqHQBN1tEGbdKJzci43BKjShv1ofFEonBY6MLANp2H2bJ8wRr6r34WsgFmgWC8i",
  "key5": "2FrSXwCc7fLeNfXkM7bZWBNJWG6yYuzzfmbzzeSTuy13vWJdqBLq5gyaieZZnj4XMztEVpkyV4SL61hWPeiAYJ7o",
  "key6": "4LFqjaiWCpbpgQFnnycrr1jkTGk16Vg1cTeLG5zCKRGpmAhfzHhVx8fAmcwAhGptnSJzULSJaQHar9itsTAEBZzk",
  "key7": "54iuxp7nqgHHoo8dEue4VNYRyx3wSFVncdK9Nboqu7iqDa5jKjZvZag3BYGk36oJxAHtpjZuqPoXhr8tvjcXbgk9",
  "key8": "5JPJne7D2evH6VjNodTWyQv2WJnwoCPXbUYLVKWa31c2GUwiYPe7v1hotQnsYW2eRbjzfSXh98uyKmKmF7FYMPdf",
  "key9": "5BVEj3JNQZWQDkY68yEFDQpe2FsgumegpYDLBNdZGfXgJDfytFoaaemQK9yKHo9iNBPRVKisnoUf4wScHksKUwTj",
  "key10": "4wP3NZk43utF9XnjAEzBJQ5Tpus23vvUnFpH7yDFoTqdb8ne9pKy6afqRMq3CPvGezdaKUWkQb5XLN4pWf83dbTr",
  "key11": "58RvkzMq9fWQpkMEXFErKkTuCiHAM7afcpjS2dsp41F6E9YrcEsPbYvj3FbW8vur2zMmYUcbDh8wBYAKFCVa9ebi",
  "key12": "5mhxn73P19nGDcPssm384e7MK9YmVn9BEGztwhoLyDHJuMpJ9BbMNB3QJ8CGoYS28QctA1jhsH8f4V3TRgby5oGK",
  "key13": "2rj1jqSnacEaWctmVEo4gvgxVgPHtAxH52ph5nsCxx1npcGywr6E2NL7Qauw2zgSAiUaRk9FTtKNkZF5uyXMZQKE",
  "key14": "5ZszLhdU769eYt76LpzP6SatV5cC6NpsKKbvcaVZoi5yHd43r9V6r9NgzTief7Kws7X4cWTb7nVECigMMzyEhLkk",
  "key15": "4wstehnR1yZ9NTFfFbdrb6sj4Se6cAzqgEtJG37MivHo2F1FnW45YrvgmeVP5LmYDZWBttajEVuPwDZuWdSg3RSq",
  "key16": "5Jz2rQCefVWXrKrh9ADvFACmw8VaUrYy4FAVT96VV4qAgiuR45tPNEoFQCKTnFskyZUijPZUxhNPEU6YG8QEbFWq",
  "key17": "2R1pieepPWFwYudJf8YrmFGUyQyTLWQ4JDRx668Jp5DHSgooBnPsroD38PmBLpHNMcpTFvzdZxbksDfhSwGGPKZ5",
  "key18": "QGLDVXEHxnTgEarzutsD4W7Za6K76sVCBaD3X9WkwmX68MUnQWpne7mtNQaxehYVu5JX4AZ7r4fbKb7xGRqrPQ4",
  "key19": "2jAKKn5Eo54dczLFUF5rccSYXYx9TMXW46GokBv24cyuuhi971yndMY44JfranohQcxFw2dWHMpdacYkr2mLQzVv",
  "key20": "4d4ppzSvtGWKTUWg46f3qccY3Rufk7NPMeCJQgB47YbHRGcEYjBozjwAHbTYiyHg6JVVSRC6TWUTBgkuRaSiGqBT",
  "key21": "4pykKnLzUnN4oJ7r68VRmuHMvxP5nv8jmFDsdJsuDR7S18FzSbDUEabyHazUK6fsrpGmrzBU7XCFRSWf2T32GdbZ",
  "key22": "4s3R46U2WtHPHi92cLT34YJwhz8W5jtLaKNL59ZzqFjycv8nFBPwYXVvLki6Co3vuA9vHrcdYseU4MWubFaQ6mF1",
  "key23": "4SNuhHn92dgLMjK79sH5rkS94TFXYy8Tg43baYENWgyon7Bt815weGKffK2p1z2T8gwjLkvmVEUJgyqAjgXSucoB",
  "key24": "4HavdPaVxG1FFMGk3R11dgcYhyyyvvrDe4rgcdCqxRogQzHgFKpEeRNAuzz4QvcjviU4ednnZTKQq2rMLLmPb2sy",
  "key25": "4x8ym53wufmkURvrdRCWqRGxbBijnpBLM6zNPc8hgnW8Z29RMosxtU198r3NKBnYa5J4tZnVV6s6xujaJLsmoVTp",
  "key26": "ZRAKM6tpf4PowqU6i5DosWURGgUGBnHeo8PRZ4XeBr1g9k7MvpSV36Xp7iAuVbxRWxZuCMhaUrUvMmHbxLFDewZ",
  "key27": "32gDQWMBLqn9F6Mn9NxkErHgxEZ3NKYg66DbJbyqP3SrbrC8LRkZohcBdmWCNa13Fd2cciSVUBtBiPLayeJfwUgR",
  "key28": "3KD4pWMFE8kNamifQeSJAxbnCv9fZwBbbyFcEXJQG8VtU5nwHPHYpF85WYRaLRLrDH8xMcva3aqZYnpkxqEdRD6u",
  "key29": "4ywkSFpPnj7osWCpvopBn1BTh6byDSfoyiSua12piAXgMTVdnP1EV4bHF4J78R5Ekxsj5nLUSpifRjGSDC4zS873",
  "key30": "V4cF5QHtXpYXAZd3Jhxk1uea2H2ZD8p9MtcbVBnvXNvdDZdXZRaGCDrN3iofMhKiLSdkxU9SS9wFDB9Ga76JVbZ",
  "key31": "4va2XQmBVcr6R6cZog2dfgn34tqjRPyPNjhjWLWiAAZcT3gnsHDkSgwQmRUn4ERQwgSgXwyVeJmKp7arMtmKNKot",
  "key32": "2g3n4xGia32yFn8g2UX11TpGkppiNrdV4Uope5roiBjvCuPUVwgbCa7jAjUQRHioZ5tpXDP9gk4apvo7SyQF8VvP",
  "key33": "2wdrfruwcFc258NQavmhotVp5eMCsNoSX47S5eUWvNC3GCfyiD6L9LuBVwU3ec4YCobrPXjpeJtjg6heVRzi6Tby",
  "key34": "4x8JyRbKZyLVv8d1yc3o6FHT7KdVP7Z99TBB3VcAtAYXDfPfc26HWooQy47nd29qpgoGS893UH9XmitYykqbEPFW",
  "key35": "56x6W2eE2itLEzTXPbLXyXvonvmFXeQ3t62XTUh2EXtfvogPRSBhxueV7qFFKN57UHg5NACnJ1swXEzXgmTSyfuA",
  "key36": "DfNqbdXdDXC6b9hnhRr5fPGVgUbnJQDjTBLbHkPDNZLkt5BaaVw5P37CnhZ1PwkeVhXKb9BpC5ugPLrhz4ZuneU",
  "key37": "4EAYdDkxdohtX7fxRE61jayVXkCLMrCGQKJxNWTLwn2nBF6hAKDQKZ9ebQQZ4EQ2ZbkMfeg1LeiuDSCAdWTDhV4b",
  "key38": "4w4i6EmhdTqeo6kq8FzxaUbHoKf3NMR7tooAZcY3wTJfYRq45pSPSYGkGMKiRbbKvBjhGVZVCNyQonW9UBUrew5V",
  "key39": "4m2GnC1XDSEU2ztydY5KU1KpmZqfJdkcyyZFuFA2p4shWchnMiJbBQ9G1Hm8N7kqQT5jdZYEhdCJpU7Vk5ExD6UV",
  "key40": "4ZjLRpreU3qnx8LjL7ppSAsdnA45E6C1MQXE9ZXpWHXpFKVxYcA9y4XhCcA9JU8ezvXJmxRPteK7DMz3xtEDhD41",
  "key41": "3Vir6GZX7xSmi9zj4kLNNqjvXcGkS6bmP4vArTSuTNMeKxc6W2oSwRN8ejZBj2Tzj85mVdEYztevsfVZ4U9jRrLB",
  "key42": "5Ld1y7m1aWo5bZXTBL2RTHVeTKyjv95pHMLEM8wsiFXgKTysHUKktDmZnqPTwzL6uc7kya7VcS576kiJxkkmbVmA",
  "key43": "3Zm8y5H6Y7v9CBTFh4m9p6w5rzvQkasn9HetsJq2WskJPc5tSTCoMatBuv6v7cv49WQn1QeVCQTijwEyU8rvqdYT",
  "key44": "5YyUNgb2MxpKzvF9wWySBwP4bGYDfdDpE9LmrGZTM19xrY5SeafxAA3jKQgvNqMRKrfo7w1kKUk1BGHKHz4ztbrX",
  "key45": "3u7f1Q6PiAG79CcNrwVvWJLDnKS3bJMeaVDNiUApAZVdwAqCm7HZGNRvVFh8xY156gBW4itXpseZFbZigQqrjJgQ",
  "key46": "4GAWm2XK7ZhV4U7rCgjyR4qpYxFGxpzszwJWBd4mibuGb2ng38v3n7ZYkou3egRX3ULVfXQJwBz6dZ9BrhCUAGCh"
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
