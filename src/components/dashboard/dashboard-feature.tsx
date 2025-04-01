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
    "4tZYsU5XLArqy66GLDjsLCLMCF1ggUm2aJ97us97mVgQJVZ7NSgZZFzU8NVi5Bm8H9bD827dkqtqbeh2bYVb9ZvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZX8ciBfmizSqAQQnSZUNvA1iGVQdr2rmxcgrfiqi6VK1zRA3j85KHiZJ15ZexQF3fLhiKCqbDXwzkGuNrvCoeZ",
  "key1": "2c2AEpgryFhYx5yiF3ZYyCo1gFmP48x9VFR2YA9yofz3S2zcBhshxnmjdcP8gpSJswwB6f3N1Dt9oEr39h8PdUbh",
  "key2": "kVL6KpkwbPzbBkziqkoc79ASq4iCV9Ldpb7Rxwz86cFMCv6C91LAzJXvgTGqqqeqLGq8fDPmVoUpvQBcTYtaVJp",
  "key3": "Wq38cPZ1BkDGRFxTzCb8XvaQbAze9oEtL8C8koFSNmqKwegRKkbpmg2FK6zsS1C35FiPq7iBT6dZ1F9zVUeAohR",
  "key4": "3Fg6N7EP4PUBEKXdPaEYAg78TCHc5vb3D1KwfQEoK8sRGDdzTtyaxoFpZ77fgfHRTtyXoTY9RV64MiE1hPj3c2nN",
  "key5": "5HzkvDx7RQQ42JmheD7iLYJz6sou3wox12MQRyKV7rR8XyyQBxs2BiCff6fhoNtw1UdaeEJTPvicUKzdMmHoKjWb",
  "key6": "4eqreUMZ9jnAFPXJoXvKZ2TZgi1S9uLQxnSmWXTgsg6RAbeNdGKPxmY3USSTBtkKnrXKVLxZvu2ShWxynxC7RPhh",
  "key7": "5qHg3LMWwTVEEPxZpaKM6Ds9hPHwdA4vwvDuaJfNcDpqmAWXLP8G668c3FWs6xVqWJCGurrSesSWhDjr224sxwH7",
  "key8": "4PKVUZhauWWidUqdjvaBQbAYCYEUCSeCrQfcjiFDeYSycVexKFwwEZ46cTkw4XEB5Qzapme7FYCXc3PyyGvc2rSb",
  "key9": "kQpaoY9rPAt4nYqmMFgXFdRMKRu9KcwB3eXJnaEhTcJ7gDjfp685xYpHMM7ieF9BC5hZbbcnWMrMBoBJ6gEozrr",
  "key10": "k79GRodPSuUyDNngC3ApYPjKtHwLJHC2EpFqcMRpm3sWbFJmh1k9g6z5cHQAcf2eDQpUAGszA1VEjv1x1r1Y4nF",
  "key11": "37wQvucGZ2bpdzVBj45z7Wb4DHwDHpwK6tw1cXV2EWysjSB13tgPQ9DiH6sKogWW5LKvnsojHLXPEenHs15T6KvG",
  "key12": "128WwHJT9XagbQ1yZtMKJzw331LtteT6wDsPpfvMWmvVuCkK5qbt5mWjfUCn8Mu9gmpXznjpcpGT5FnXqNzuXeqb",
  "key13": "5UM51Qjo83mnkvwifrTZ2REEd1osemMEdMjShaSE4Z6TyxW2QRLbTT1rrzjnp6sYKmZDAhw4QEDkBHQWw8JyN7Ae",
  "key14": "5ZCypNnE2sysp1XJDn1WNyBUMf8WiBNhQwxQyru3CKwgU1MY3DE5g9ajMbyNgGiBPTz42Lc5MDCwhHsepTo7GrvW",
  "key15": "3KxQtS67Zrp5EiTbndsSqyx6ucb5ZebkNeapSHMxvgXTtCRbjioo117W9sd4VWk8sVHmJ8wbAeM7XmbvA1e6243c",
  "key16": "3PTWE445PYSMEaLcxs51YbUUVuC6keaMcRB4SvaXp46nbMtR6hhxFwVbnFPdce64qGP5ETHvYdb8infHjnbGo7WM",
  "key17": "9Kce5tKa4pgUDLxY89MmRDFqboFiZ4JfqsrWYJs1UPx1zpsF2wBSfKR5WWztVNhRjrUfRtK6HNmhdWSQDQuMqQy",
  "key18": "3XyPuVvn8jjx3bPuE2ba8pUDqwmZiqFeFr5FFrum1oeVsy5NiU1SGLWWwvDBn8robizaEkHrdLmmgo21kDCPic9v",
  "key19": "4iaYhEm3K9B44Ayv62fkhw9m8X6UaBMtbAjDCWCGnu574247DE1thB2dZ3r6iGfsPeGAbhWX9vUypfnZGH16FCuE",
  "key20": "2YiXKPjN5FNLiYaAhT2av5X1MPGeTQ1hYoEsHwZLZKRnP6SejK6WTZHsnWRHYT7quAHLScvnK8E1aLHeBptZ4ZrW",
  "key21": "5hNTPE99bn4h9ejzvuta774xmN3gbSbjJVs28KuHWZyabWnPU25cVDyK4FyPcn88wtTQZQiAp9TkMMBjSy2VpZ5Z",
  "key22": "4ZsqKZt2dCYFotBVdMFyYzPD337YQee3exHbcm3n6cjPCQUYouxFgFKjBtUwuwGT5kQBS5GYjFrMSgg34VLk1Zvx",
  "key23": "4NMtBjZYjmcGZtswcm2iGYA3y4PNZVXfvrHM2cF3dcZtewB4iJAHv7iuUxrLkXgivsgNKMWXqcrCKWGDvB9zrhPc",
  "key24": "34o4ascEzMrX41PRYcTGwzDHa8pZQjXdqN5jhgaEhouDQCuv3Kv5mqE6UnJNSX4Gi3NbdD68tocLd82kAJsvjfTc",
  "key25": "2WTzgv4kwtnbVPLyd5nE8Fgkx5mdNhNQS1AUXsNaQ4YpBUgFVncENHJqVPp4vuPL6EhGxLC6YLSTUJhpYBZErpor",
  "key26": "EMZhMMSFi4xQVBEN9JMX9zS4wmaYjkAUf1TZtdzty7YRuVVXM2bGZD9dvhBQfkEpBFN3DDgcXAqM4Qw8n7mFVUh",
  "key27": "5jAHEUpB8L4WCPXtgSRYvzKgWn1EU4UFGy6Hh9DKZ5PX8EXgtUsW2kiqRyKarGAYcHSEcLvWqB9KKokthgyGJRUx",
  "key28": "2nRCxfw6hzV7GzE8E5CvgWFgESNHWgTUtxNxjLxY88FawuPAnfjJJoLihT5oUcPY4w6MdPuiYQtEGFkFs7d8yTVA",
  "key29": "4Hct6siRRpurWew4tiZoQFGzHjRPRES3xctpxXF76RkRdSBQCxrh9J16Z2DrFwATySs8v9ZUDceDn5ndmXTtQsaP",
  "key30": "oLTazzC4fYCQ4yAKjxqATxp3Jx823WvP7jv2JdGMhRf4gDozMCbVMW1HweFjURexRgziRpd1BqrftJ8A6qh4Ze1",
  "key31": "5ZHaZJHZV6tovBUR4oXrfwkWTLxNyjXHE2uofs6uavUEUpnDqhhsPR1gCsPj8Gye3NytK3dXjeUWBAniymnp4PMM",
  "key32": "4myUSto8Q9VuMKiMkoyqf8R8bNu6kRg7WH9d4ZtkPTUzJKikNms78ceddskVkGzdru9oK7XYrSDYVFgZUorvXbb2",
  "key33": "2e7SKR7ucE1HGcmQD4v57SvmVSSAgPMUSKNWC41pjVAm1LdneTBsJfAne6MnfDkzEZ2F7rXGAbGBoBjwpyTSW3kd",
  "key34": "3kag56ebxfF5RxtDzCb5x6v7tNDJ9u5V5htsm2TUWG5XSHGdAKN8ZNJzcrn72b3eBeQigyTFbKWRXgYHGzBLQcXq",
  "key35": "3T1Mc5jFrzieUE6xYHhrmxN7XFodEaEx8vpCEy5hoDqacUeWcuPih9Gfrwi4oTbJvn6Fm8Y3NSB1oGvwdtbSM2VW",
  "key36": "2Ju1E6dSH1WJoDaX87rWG1FrT97tznKYzb7sEpmNR2nbA9CpRFXpcDZpFwN4WUUu3TGKXt9jUzLpfHRhojBRtzGK",
  "key37": "57goMYat5tZosHdCXLgGsLDpMQ8VLMyPJZxGmkRt4fUFJWL3ph64rbmg1KdQyKwmwNn8r2ZKsPpAhZ2LGwz4ggF9",
  "key38": "2P8CbJsLTXWf8HESKLaS6vF6uJT8oMsn4nqtsWHvWUDQzkDDtqbteDhfzgj8kLBT5bdfZQSjt7A9zRmg1H4ubKm6",
  "key39": "RX1t2m24SSdpoYeifPjyv78LZb3dNq8uAQAQpQZh3XdkjRbuAUkWCXweGCJegu6wtNYNbsL3buB6D2f4csMfncL",
  "key40": "2ayJafyqLj9whs9fzCLGNkey2Z8UU3anUAj768ntfEq9VNjshpSJaG2cXabxvvYNTTWPxWvpr7gSYb1JpvYutWC6",
  "key41": "5wiqkq7mQEEw411vk3k3GbKAZo8sSN2vfv5TXDgdFxYLJXU6dK9W1VT1U8xLuD9j88dpyPgTRsS2f75GYF5A33ZZ",
  "key42": "5qgEK6YzwqCjzFFD5YkQL2ocY7GgEEWy3ycLb1gPhXxZSEBQctUWF7dYwrFeW3kg1Xmn9YbRqwmVL5HjfycVtadq",
  "key43": "TmqqZqJmGu4S4c1n47UdPu71vPnUuPprCUZ9bvxk8kd9mMd1igGNM65bheypsioqM4CDxLD6kqZyNYp4qtrnRUG",
  "key44": "28RmCZi1wpemssRMtZPbGypJXvUevgBwhWSDHuhy1EKhAzxeWDFthmZ2Vdw5QeBGkCDGD56u7tUAVy87oyCLSq54"
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
