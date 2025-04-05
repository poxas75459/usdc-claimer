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
    "58EFxkNsqEsdK73apeyRWm4EKKHovbRhDF2HzVcdqmsE5Ys3RpMojbmJQ196XHiiwyLbTR9GT6pU8Bs1PKDtT4zA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NW9LLGRPYJ3rowmQ6UmkesQftsgVwMhDQKrTjNsemWhK39hrfQqs4EJRaDNkaeuvjvLrQChPYsy9ekJN1zmw6eK",
  "key1": "3Ag3yXxY2F4cyrTEpDkyWr4rCKyHqj9ScnP2numtXFESC5k1zdshxuYcGmKWkHtFqKkYjw8xcFv2CEfPa5NTP29r",
  "key2": "2nJvTfL3Rt2UDvMTsKGjvjt3Km7miKiYxhkLBB4zA6g5Xjrgyjun51gPnNsY3B7UTmnnuJyS68PANHTvF7KtT2dB",
  "key3": "3uzsUQsbvkk6gQTiHUDMFHfpm4Xc4JbSTE2258mDMpirbkfeVixKyLxL3V7XkrVksdY7Lcz3EXaG6Pt6M8YQysuP",
  "key4": "2Yq67d2Raj5nDkRf7VWdamzF5jYS6Hs6MQiNmWQVYtBWPcWpFeMusM9uPpgaXeLEeFKt1UECYgCuZswSkLYrXtK8",
  "key5": "45jbBcpoUo3asbo3usU1fM1j1YngdSQvqrsaSZSJYw4BRKojabmJzikDc2yaM7bZAyuePfSLpwq46PoAuW5kP6tF",
  "key6": "2eNGZr1sYHvQTdp6dcg1SzNgkcVdcLQk7K1nG5g73Cn2RgKy8dAf2bAN8PzEHG5za53swxuC7xRw7krp5e7XPvUF",
  "key7": "4MR6MWhjvK2syPjSnmo4BFasLgGXFq3QX5FQvZpdDz2rVGXCRbsK8hMkYcVtufCwbN8sdgV4CDwTbwZnFPyKsnX8",
  "key8": "5mByQnFiwzUremmFDrDUgZqBDyxYQH3q5PF7wiomAdXscriQjF2rjXUnwGHYu3MhVgq9DKorjeDT2nKLaTnss46p",
  "key9": "45FchaSPWBJUQrLDfiiCAgvo5XYBhTMAgtoRCsBPwLERSFikcCma627Epe8ACe6es1jLvrTgJqH8nB3jVDgTRS6a",
  "key10": "H745uYJUMbFwkw5T5JXfcot9faeGtTAVMmwB38njs9AgcV9JcGoAct7BhSVp8Vx1qqLbUTzywkYPkst8qytg5Ww",
  "key11": "yVBQZtzRLgvFcQAVs1V34jKF8LVD1AFh3LKyfbYJTGmNcLTEMq4jo8XEynTVkPP7tjAey5QeT5gWtCa5DMt8P9R",
  "key12": "5KWWTXFc3YGZhNC3E9epWWwKXU5LTa3UUFQfvsFNEbHbKPchoYWBNtHCWxZXgaXrcq1k84mWLKKGLsKGMjr3H6Co",
  "key13": "5t5CwFcmAEjqcqJvDcFuyQGdu29AvzbL4rTKkoabkE4dKDoCdFen1Z82VgVm7dcn8uqDTjNQczuPfR54fbSohNHi",
  "key14": "sM8iPkdjW39NwApxBjQi1xhyRduSc6xU8a3WkFF2LPXErxXZLW5ANcDB7R2fFuz5FtMsWELXXD8NWbGZyZcSVQt",
  "key15": "5kDrBxrX2ajdnCNkrViTjJAraNGkLKssB744MzFL7uzVwhCLbmEjSCSuSWsymyBPS5Q85rq14eJDYPRSUCP3xeYc",
  "key16": "4253cWGVmjSkSk2u6y2AgF6TnBgjiQdd2nunB3Utq633zPSiNTfKxiGDovZoXh37qoBQuTzzGSgu8bSgtHju66mL",
  "key17": "3o1AAU1ESQh7DqjushJTmBCBparyrL7vkeg76EBhYrpjHxj7a4WnpYPsaR987Ht29sYua7jAk22iGz2yMtWJYQpN",
  "key18": "4RRKkAJiFzFVTj8dsZiT467fbEKhMrSWVMrcNbo3A129rsN67WkbyjnLS79xiibvaxGfRazjkkGYotDQgqNrg2mY",
  "key19": "44rCZNxPP6anXqn7VsHkxRxUqRNQi8JYCo2eV4kqvSkz3LuvbnHU3aPiK6qVoWko8o2frZA3o2V3r3nKnYho5gXQ",
  "key20": "pnvzUAD29hVz5TGWQhHShJWyiWcqw4GbYvirKchbdatr9KeUdMB9dLanTCotZqAgskGTtiCmZYhZ3EpWMrf5ZiR",
  "key21": "62pwof6NFd1eTtXNTssLvyNrXn41GD9gSwp39r1R48s4vS9m6zreJkNH3DB3Ca4DDYTDrEVmeU6R39BC8oPaQQh4",
  "key22": "5U4G4qnZdCb1Gm3pQ1QztP9ymQfC1D1pT4CiKT1i6SAttbPsv1q5ZrBMEcDR1ff1dutUMYLgmvdayoiakH6kPmHT",
  "key23": "mqaBAPpSSUkWg9mLmXTM1r3NQ3PvfYXvxYauz2EcRm7tResczFDe21gcFCKbdA6ZvfNCMEyxFpEfAEPzomTzsrF",
  "key24": "4k5RR54Xxh97eCsf97H7RGFPE1ekg6uWHZkGYmgkShUNP3m2zxBARtNTeJoAwY54whJ1QtFXr3GdPqWFwU4Xb1pf",
  "key25": "41fUxZooC8n7C8ecAM6yidmPEEjrqLFde8NqfBSGs3bYzfZVg4cNh7Rn6oHub1NCLzKkwa6nFh32XeQoHhBqaQp",
  "key26": "3rjXsgAEQJtF7rhrxrUoHmKZrY3so8Jjs4cDEJ8pcjBbBnKv29u8xC3XjFRWWWGRdQ9uff82QwpbW7ZqYeUPY5vp",
  "key27": "2zFPo2EPikc6reiox1C9B3Rg6nXbizbYv4xatLXn5DCdpjAdCr7X1qYo7sLJuUdfNSKdnsRJxhbisJmkngjiyRw2",
  "key28": "2JcnN1MdsJNNTeDcejdBakAF2E7cfxUa9tw6C9GZzPwYL6QuH5rNhm36GW6ABCHseLfsSpJpXjxCEGxAp5bXwNEZ",
  "key29": "3EdeWnu4gWv9J7ks9iroq7hx9dJHv2Yt2sU248BTQ1j4cHtHr3rENwM3Qsk6cKEtd9a1uqNSpsj1g9VEY5UfpbsV",
  "key30": "3YAD8W4uF6txJg984rBe6JF2eW5UiwpA24uFtYUErYHSek3LTCjTBf9oX81EHYHSLPs32RQyJBn5kYiDHR5DjawF",
  "key31": "56o6ziieS3Dp41ugke44urpNLZxu63o4BggkDooQ3LwNsFFujgokQt7qKGkpKMcGHdscB5HGVtGjoJvepaog3W4Z",
  "key32": "2dcFLMSu3cW4J9FRbCBM1rip2g4JHwefHwHoTXbKFjpJ2qdpZquDjHnuu9BDvGqc9nZtbWT2GeYXYKK89ScNWvS",
  "key33": "5TVcxiRoYJ6K8jW3ynvVFuVk6xfZWHbMegeKdze7Yxmv5t1iRLep9fRw1QVQ6fwxgJGJgeZbMdbfqcbhE8TRH3Zo",
  "key34": "k3HRUxyZYC6NK1NmXqmqWKCJwhdqsqKDTGxVu7hZKXJhYZ7sbeT8UCx44p15a9DFqm6W2mJ7TWb7f4NDi9CcYCq",
  "key35": "5fNMLkGmkDL8owYUwBPa7FgiHdgB3PZhkzSuGqBFwhF4nFUw2BoN5T6MiZ2HaPn3Aj3NwWyuijmU2tnAr2nGLKHM",
  "key36": "2vSmGUdcdczP4EMMkUubvb1t1bg5zbJSTahyYzsjGnUY4z2mQrs3fvqgfVzsbphzTJ8rcH5xiPKf6k9a4uN9uATe",
  "key37": "3FRuzyKdmx1HPSrhRg9jMGmRXK649SA2vkrQG7mhrpfboU8AdXAdFa3Qoj5UJxbXd3vKgDM53GjFNUrd3vFA4mJQ",
  "key38": "5WdAQRFCUE2bdZLeoa999p9fbDA9HS6P3rRz2fxawe7PdR6cAzt4dTT2ryfexnLUV4kRzNUEs4ByhZ6pX6DDLZR1",
  "key39": "5rmcJCArZpHRKFZRmt7Tzez8WqHUiT5xWxEQFL2C93LPDLRXoNanwrKueoiAFhJ2mmjyQYTCK52DurbQdb3dEdBm",
  "key40": "2VeduaPM55CtbtZDQZYBGUJA3gL1o5Le9RYN9qjckfJVwCp7xF7xPaUSqP4cxYZSdDk98QEdfPnogCTLRPP4CFYR",
  "key41": "2cwNpuYdZF7gu33oEkoCPjKrggDxBjGaoKSGwFrASEdkXMVNMhtuzpUqBdAiLTepz28VssoYUBWCK9xgmiqm8Ddk",
  "key42": "LnGtCertZUCVNgNCrCXcz2dDAi2gd7NVT675JreZ1Jkc73qp5b4fx1yeqXnj8X2HS1e7rxBZQNYjEb34NEbPip5",
  "key43": "3BX6exxKU3LWXUme9njf65M64xJqYxhoH66drXgzNMjAAQSidnnN96cFxBa2EY7YaLjuwMxUZ5VFhteP5XJDbH47",
  "key44": "35d1xr4JhoZ3wCsu785n2AXM8F4Ysb31XenoRnrHdzNcpRNKjR72hQ7thb3DGx3kp9GhJ29fci7fT7DnSEeLjEua",
  "key45": "3VfC1SmGPKeYCSNyoLZVzRgjz74BqLabqAUYsgc6BzBqYPe6j31KWoQxvcbGhr76JgabbLHrZDkvtzejvdWrCLtb",
  "key46": "28q1Kr1ZHsrKFjXgCcfDgdYWFBwmKoUPyBFQyXB74YmEtYi5KZEbdBDtTG2YcG5XszMeTb4vnSStgiaZCD9BRk4p",
  "key47": "5xYYWjEhgbBHwXQHti6LtmoJefAexQTRRMBRpBnWavMxWfp8P4aJvFcgMCheRmagShBEbaE7kUv8cmFtTagj3Pod"
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
