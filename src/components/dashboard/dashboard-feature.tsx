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
    "5LPpiRNQzBwXC45V4jpGHWuephPcJrNCTxVPmCs11zAmaMuN2SbFqZKGfKBGs1bSf12YHBoe3aUhXEdduiPyRcxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fndLUzgzR8gu7kWudzq7Zzx2fUnfThDCzUc3iVQVitNwXSHvqadxSnc6LNEqPijJ13n9idfaANRX33GVRJdv3Vi",
  "key1": "v1EaPXM76QLT1PSzfbZzbTKkcJm6ACdBmPV4jbde4jWYQvxrJzrvJpxTM4k8nMHuGVCGsJeBjtf7jdPa4YmhNCm",
  "key2": "3nmjrYmRvcQhVJG2sQdw2Z7XW7qd8pNWyvEJJPRwpjvGeb3kfDvkDcovQeEuLbziGFUcAzx2iq62p4463gLE9zdW",
  "key3": "35YSnMXddXuPox3oDTwi4BKq6LszGGVnFzYs1wHWVR7oPSw3X3iZbrtuHTvxmchqETPw3tj4oDczUvrmjz9UGN38",
  "key4": "2LhpnSfNiFyY6FUzLNh9yALLTTBs4zhYEaZCJGucUcBvwNUq6JouU34r5JpNojkKkkbkajsdoykdaav4ZxR9ruxn",
  "key5": "61w2z6a2hV6ZHUwTyyu4xWYRPvGfyCbVb8PriyCNyn5U7fkx957gUdSbEz1c9faUymuvGLHSnB4Hz2MhKT29Jc8R",
  "key6": "4QHuH86Kv44KpGUguRLss7UAdaVxnVysQsP9YBHKwfbT8ZU2Tz3ag9XDc139pukyHSEzWXkgrGeCWRnw3zSKpj42",
  "key7": "hh2NYVBbJL6vjqMZGsBjHntbR2kdppVNoeG2YzkeXer2AZMwJ3H8L7X23n3f2QyEaNSnRPSMZnJjBjjQy4m4QAd",
  "key8": "229ySy29efnQvxcmYLwnYCqrRVdmmAmbfRttpjQKQdzTA2u3uZPrf8WwcqzpQbDqagJn9Ro9JEuz6bxLDbU55JtM",
  "key9": "55YAg4mY4PeFcKc4VhDraNdUb9QkVk9bvDb8wJ6iPZxDHJorbGi5gsvBdKHjfCUAuRkDpvXQ9ihoDDT8PKPwGaeU",
  "key10": "4NVVJdfBfaJn3S7GRsdZzfw4BTmAtuGc39SHcK4CPtFvvjCGFuXjgS6tTcYMVCyFHL12PLgHRYYUsiNpzPqdNYPw",
  "key11": "BcPLiVLC5HtUwbkgDHtNXctCdUXoZ9GgWYDdePWfkKbbeZpbpKyf3eCss3JZ9aFA5Ztv3DugsMK3M7YMkxfX9kb",
  "key12": "4hCBBpgx7qouUYsKTiPYaFRSqbQ2NfLvQK52965UtX2eBYVPH8CQDAZXVzdsPNhMqDTNTvMcx9XFitqmYi2SWDVM",
  "key13": "2bPihJ2bsKKugykS2skpjvvARttXZ6e8APAvdHSNijjwUs3Jvxw3kPEJHCjGpGz4AyokZ2Usr2xnU5QhwNw4vnsy",
  "key14": "25QZQh82VrBfpHDtTsgJADgGzooPbFaUB4y59AvYDspzxwJKwy4wVo1Xi8wPz7XTQm8WfeM92pyrSRYBrFkSCdsz",
  "key15": "qDbkEXzMTNHatyECL2qfvkwxvmcfnTWmkDXnFGdx3R4qV2e7ar598x6YEJ9T5zZzr5mFgCCjwDuTLcDxabYAP6H",
  "key16": "3Ea9CigXJwXgBNnsa942rSnhtMSgJwWwFSLtQZoPQADM6GeReCTTY2CGLVg8jYcix47KYAVZYS6oinFLYkdyyS4f",
  "key17": "cPgLow1tqkJty8kPYrKsFSm74qyS5phqsN53ngsh33vGyPqPZXoaMii4j3dJHcwJRrmpiekNakxuH7F5oYthVJv",
  "key18": "4thziUZFXvKnEZN7nAc86SA3xcWcnVvbBY6XUGzqiWEBZkShCAiBSPcUqXg2LaYD4bE42WGi5yTX6m6LJ5tyPGcE",
  "key19": "5St1xEsu9tWM6QDDUhuxJ3KBqYxcrXFMXojHjf5VwRgJzHesSHzCT5GxMvRkf88wyLraDzzB4WsbHw3Hn6eFe8Np",
  "key20": "2aSTKmT9pmYXZAKSU4w8f79B8BRd8EwzSavMx1v8XaANHKVsnSg28GSUhCN38rcr5qj8ARysaBav3P6qSWYqfEsh",
  "key21": "95RFeeytPCPf9dX2tJD7eyefg2BnCF6VUQT9DjiQMUgAPX2LUkdbWjvak5KzBfsm8xT97zo2ZwDkAuNDfpJnTDG",
  "key22": "2Uzbx9htLZM6thaaQki8fCfJTUo4GZMEouCtLPWGMFLFJQgzCMq24JpyyocWj3RJT8KXLH5oAAJqjaLWUCWLnKqp",
  "key23": "46HZFW9Nz6FJdQDCsAZgARtwL4acNXad9ayCkfBbKhjWV7McexgvgAvn7jRe9ZvdvRm15f455WsySMj5xNen7J5R",
  "key24": "3LXJ7SNxiCoSSKn6amrC6P2FH2e55BBLtvBrHZ7G1Xk9dEnTSxBri1TZ3pF3AEVzKLjWHcVT2mTAZk4pA68QhKz5",
  "key25": "2QQcrfQxAZ2McfbmaYKx7qziNBxgJy7k6eKqmnc5STby3MqcTFg33wc6XQjYqQfDSw1aqNgRDZQ4thQoeFEVVRrG",
  "key26": "3C63ppPRGGiLK3m2b5GboVwkVCp6pushcHJMWQKGVVTzDSvvfgbtGCgThHosze63Y1LVBHwxeMaBbXmvt4v2NytK",
  "key27": "3MNo3bXWGqZQ6ipUKpttcpuRZooRU7HzyY2UDqpZS8wVNXJFWwR1fAQHQLweG6HeeiAkHx9wBszaejyogWgwydS1",
  "key28": "5eztpF7tBk7vVJKTp6U85rcvp2HNfXDkQLmHN6uirXRNGrZPy3zBLxoLVp1CAHaENWZnjLqXNgJhNXe2TDxD4smX",
  "key29": "4iXq9H2f2QPRMCkBaXyzhhF2EtVskyr27g9mUr23SE71KpgpfxKckrw1cD2CgUThsUJGMQWL6bjhMNr7uERw6wSj",
  "key30": "5Z5arLqEm3pqUM4o7sthdmDR4N3kzEq3nyhBguGavWtXGk4uiSxvMFkA7jePGetwCuFdzzYDPD9ViamsWrSj8W6G",
  "key31": "DrZqumc52iW3783DMLXcKTNoPURejpPYo18nrKkoQuptnBrZPFmQYbH5j56LnmRuUSGi2AbwDXaVfjcWvmfzxPW",
  "key32": "5SKV7wCBsXKF7faDgiSdBtvrqJHHnSxUFeF54KY3dn45FSaynApsPXboijc8a1i9R9yoxkPUrLDJo8WGVZCxN3nH",
  "key33": "2Jsz9aCWYNHPRGUnDnWbEdbYWEUSxwHLnxZ4iBVGmVsbu5eBMcvk7NXRd37PuxSRBkofgViMo7j23YmE7HnK3yRK",
  "key34": "3UxdczBAEPHoGr2pSaiH3XwLJsSuwCby4jHJGRpgQRW9JhDNUxD9EcE2cWGw6eencyWnsnuoN2AJkNuV1jeketi2",
  "key35": "2bKWPRmB1pCRQ2yhHKZk28eSKz79YKXbQfTN2pwvXnXkKSY7yrGjz3SbfEZhP33wWwaUdgPdSvDXuGNddiwy8ggm",
  "key36": "2TyH79zpXkUk7qhKwT1zyGeKC1uBoxch4mpFqvAwsX12iQv1KR9eKZsYNLR7WqGSDCcz6GPZ6E7f92YdrLLiCJFC",
  "key37": "5F8YfHHxZ8Zf495h7NdUhyj2pDDKHcSJFZgc1Eq2LYPHF3FoUh2hbGRAzAc22DjYFWAUcADivK56uQw6X7AiuJhp",
  "key38": "4CPNmVhSpJd7hwZEeZRh9VpKdGyNVriBBn8TfXcGvw6VVVomEXLDNUjMt9RcHQWoC7PPsHGcwJAz7oscQxa8nD5y",
  "key39": "25GKd1SpbQdpnmWaqcaibGT2A42T7qF1r4zqbAv9s1h5YYm7DJz3PtuhEqCCV4NUVEkWjfD5a8fbA38mwtQbFvPa",
  "key40": "59syD5pwRuv6hYChRhc5bcDi3VZ7uzrxC5WNqJxnb4mChwYKCjAhrqQrYC7GEtZuAT9aDCkUkLmu1enHadqv551N",
  "key41": "2e1NFH5LkoxWmHu1FJBjW49huze6Fn3Zouf9VyziguvBZZKfk4MRS174EE9Zi3Zk5AKhj2a5GK9WbMp2ecVguZ3U",
  "key42": "4DThWk94sfW1G9vhJfaAig8qZYtRTwwoXu62KyHvBEGxzXxFZjQM8ZahJsZjh69WUKQg7mmwCbQg4mt4Q5mWF2BG",
  "key43": "3J2RvfWsRUjEXdQPitDuud6Y7GpVF5nYKV8WsPJpXGAKMGTnZZ8PTP8JcuMq7c7KMjka1wYNrt3ozz9wSGswej37",
  "key44": "37JrRpSg9z7F7xLmUcffkuJkDvUze9Dgh6moP5Lb7RqAPtcnvpNP4Jrsa8kb6A6uh8tg25tpmT5Qw9tgfaAU1Jg8"
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
