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
    "29umuxEz7jEhn88E86yqiSp2NJJHzy3gmE7K6dysUSZ7SkwWbEdozCQMsvXWT2vc9BxrX8r6DMqh2F3tfwmwwhwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66RKGbGwycJRuTG6hmgh3WSohMPUwz67MxrUsXjFx4H4MByd9hWUfvZFYpek4bWNkJTNEL8dneV626MgGgfHbg5U",
  "key1": "4eMzL2yyE1YVLe7928gj7mq9mYcMdzTpRAWMa3StdVwV6V8AGedFBi1xtPRxD6C7RSU4ECP7XRq5btveJgX7hudC",
  "key2": "2CWLViTW36WqYLG7Jy4JbyzRNidS7dTPDnuKsbdozPzZ8KSpb7d3sYuHL8LPFoodz8GwzZhxPUbVMECoqAXtJqdA",
  "key3": "2Vhm2rH6BuRZUYDoM2NaryX8dvR51c87FkWEpi5oFQyMTKLYtEWARRbT6NpDG3tu9joVG263REwYpb4RQz1WxUPB",
  "key4": "4Ncyg4T1xvS2QmfzoqKsnKBEMyx6tggikyiFTbt7RR7obiDRAxZXf2e5cNDap98kGqJWQ8wC4jztyxWrJ5hqhUpy",
  "key5": "3XJUxVPnHtj8YntimNieKVWbyG2V8XgB8FfC4iHiMhTyDKsMNaAZmtv1SYru5casU9nK6NJs6nocqPW8B5WnzbxE",
  "key6": "5vyBCykXBHjSzF6ir5bLYAtWYTjc38DAxW8AQagy7RWH119wX5pypDokkcUjdS7REQgLsjcd8XGsic2hSUbbtmnm",
  "key7": "3P11sMunsDzZ598Y9RiQuMBkxB7DE6E4tfhHQ9RBSUb2k52x6kL2HYCLEZZP5eZ3S4TaAHHMXTX3PsQdKD3eixSw",
  "key8": "4LWBQf3DFi8Nu3fUk6xvfrbgcsdauCYNnYVgUCoVttpSHkcrSHF9Kg1uoG5iuC9xo5gVqkVn6qCnJbHsTANKYJ2b",
  "key9": "4HcnbBpjgdftRQk277ZreqtVqm5o95ivjPXNrb8KkHwEGp9xeNkYA1ySJ5EQvKEM8yv3uNihL4vybJU8p6BD488x",
  "key10": "hXzXGGZFQja2mM2rcxHEWDgn7HpFUhSkrtPG5ZF9TrpJEAuksckz5NeF7SbUo1ZUSetttxJoMnWjZKxCBrJwCAp",
  "key11": "4FUYfGZoCp4ggWd151AS3dqwupcXYQ6SBbrzxdTTerahhA4NLvNc2QQt2G9m4NofHumxrTdKkLJ1zhXYJeiPKsoh",
  "key12": "TWF4uiktzcRSKRRLG1oRyrunr8mh29TyG7wQTesJnRJKG7KJuzMThWmxWNiPGjFPHUEUmpNAeqsEwVhSK9uWUgT",
  "key13": "5iEgwBygXeYsUXM82d7qcLcXfTWhZm5AibQX8HepXEbGv614JhJE8XrQ7WDuFf11PEia4u8hEsksHeVmdLFkKb8V",
  "key14": "2HoxYN57Te8mys1sGcemPrtGu5TVi57Vu3jFkj53oVUb6wPDqE8Uo57u2Gbwvweyg5Cc5pcU8xY8hbDUH8WLBzDS",
  "key15": "2Ww2TkYxz2FCgpQNAnpxxjf7St6XuvZnAVgtpu7iZaKDFktmuyAY6rFmiFBG7yjtPJqVZVzm4ererUtnR6nu6irh",
  "key16": "DwbfU7jgRjaxuDC4q9T83rjhksnngyMt96D2RCDnp3NtvEHhNFEXG5ZknnhKXmxFHsxTmLAMF4UHEosYEMjnf7w",
  "key17": "2AFH4NtZ1RgxD725Gp1sXYmp9iytKLDt31jrpu4AezRW8cXGCb3AeN9yVvj6QE4ouF1HqJsBheNvmebR2DYh9YN3",
  "key18": "2wpceF8JWv6fkgJdDAyv55zoUbMJLqiRD5YrtkfQiMXYJoi8Dc8Te7qF7pDsBCNaLqGR4dq6hNnHdzdxs342h4kB",
  "key19": "EVbFRLDrxdyBBKKLY6rkbD73GajMYXpaoXVbKqYH268tUZEFroWZiN7nP9kd6eUE6G3ue445fK8WHWg9MYBiNqy",
  "key20": "2TytyM5pf9UKkKDC4Urf5jSSHxaEdgDDNYvvLjUGq79QX7cfcBaewYaYKfNoy196u8xv1qCiyYgSLCVLsBFWYU86",
  "key21": "qHA15iRYznNB9gRGwK92yGAsr9iPBmeaAceHzsNC3thJKQkkUotcanZp91cRevUq8gNx6ZsxNCDphGcQ9sVzHHE",
  "key22": "2H2pds6uzUExbCScwBTJYva9Cdx1LWDryNDPSKXsGh6gWrPRU64UbxaHsUZXCrZNdnohi7CCdsQRyuenN9CB9mMS",
  "key23": "4cqWSjdLpCocqigXwsaqsETF3HsogwvfsYefBD2cRFJzH5NbhV1iU6rid4aq37t4uH3skQyDdousVQCmYymWbjH",
  "key24": "5rhmytfpFQSfbxUZNCdrEcghKg8YZRBp2Gj58jSnZ3WASjzhgQL1fmxZLerxsrrvbNsPdahcB2BSfgU75U6j1K2B",
  "key25": "tsLGvBj43w4ejzCDPAartbbtHdearjodyL326KCcVoa1ejNDmAofQG2svpFHFFYUVUgn26Eury2j8Sd1yuMMZDQ",
  "key26": "3btcb4Xa9bFCM3x3tsZxENp8d1Wxg43XGwzcKt9cbzUWvF2Uttt6gPP28YZrYpHQaE2RroYFbrPz3CiGhKqNvLHr",
  "key27": "4GJUaZzsCQJJXWjFxzkRzmoFAmTztb9iXt3LqMvih3qrCu5nW9tNHSeVUZwW8oyoJpgb5qPQuFBKyJLjpBSRouYN",
  "key28": "CNVBBhiwyvE9G9ofCGDFntNM34rLqrBG1fgub5S8oVgTqTPKp3STfFx1o3J7uex9QgYx2vQCAx5B6bHHGAvi6R4",
  "key29": "2RegnVSYqZhFffhWwBihJybW3JnxTFb7yGi19ipgaeYpXTKhLwcbRNkcA2ijhq7USZ2EaedzFADTdRtLZcRLqSaP",
  "key30": "2b3LtWCASSiaHGA3CbgA91JT1U4ZzTB1iLvJYywXH6RYeGcWfvKfQhhXBNqHzMot5NU61ek14JNsnRCEkr3GzWyQ",
  "key31": "4X6x5zsBUDeEX3BuvApKqM9tNX2ovxSqSqmAU1yNitRBCWdaeYoL4KNfYttsagTckVFoaBANUmSgHpeVrm7qwJMN",
  "key32": "4CS6T3ErtUxw8oNy8fanpcxkfA5WDPskBrM29w2bzmA83vuy3b2u4UcQ64VMjr8o7xQC9acLfpuuHH112oDdjRo7",
  "key33": "4YYT8cJ1KwLkz3hrYxS3MhJ7XDjjwUoH1GMMstdRTU7RorPyXhUriijsPryBs6B9MmQMLkYJyubVUiiRuQUM927F",
  "key34": "3zU9W2Mg9BruLyQwppQUrm6AeCy1ZbcxCaXkyuMxeed554F1ms5ykXa3MKA2NUNF3vJYLW5KNfPkzpBVqCQcYryq",
  "key35": "5jgh26S8kifQ6yL9qffhhftwBP9DR6p6ZVqWZABzdzexxdi7eFVQXYJm38T5jZGpBprZpeGNv5nDcnF7jnskmrKQ",
  "key36": "3z1mavqHo4Quzpcy4uE8LUcZtamTcup5E8mHbVHxZHthPmSR1CphuMJfDcweycKguV1K8yJ68QVugiksLLhmNsZj",
  "key37": "3vF1YRjsxk9kCs9DPnhSk4uqojdvQohZmSYDUC2H89XmMMqVcE7Bu9chubzSVytV86FksBREhzg1Zaxzg42DsDz5"
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
