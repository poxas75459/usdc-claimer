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
    "5yv9U2fgeBD2xHnBWByaJYhWRuYWrEowHbQTaT9TeYHRfeG258J7wTSgE8z5QvxdKPg3h1vGmdTcdyk4vb74qAAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ghrTJACoCdBtXBE8zGm2FqGovpbYjEZ4VNfLg6BVf71MUWN2GeUTkDdGCNmCFn933A7BSETm1k2Wy4mv5Efqgz8",
  "key1": "5fGZ4sKgVs7fbL2578X3h2qPTsZBZQQKeJRhMmEhfsUnBp2yUovsup3ef7dKae3G43w1TdS7LYuiArUBd81uxDpW",
  "key2": "39bvjyzD3HoJDQZjVQyFiDnFy5SDLcwXtG7fixj4wwBCJu1mHu2iAboY2zkXfG3xcfd2uqL5aF9iTMzx9djr3SBP",
  "key3": "4d6iKctE6NbRQjJFFpzzeDYa8VX4VsXAazR3JLV7cgju26xphWMxewUE8aPztgbiB99baHmDjPZshvbwEixNBVcB",
  "key4": "4Y2QvKZK7LKrh9G2UebPh3TXuJF9HSU7Xb1BZ8eurqBXYhNdbiVtHEJn6uXz9oWPops79wFxtxZw1b1nLBRazY6W",
  "key5": "385kBhAGVPVBesK6SQnyQfGfoYM998sGke23TgcepPqGZYRjA4pzM3ooix6jR6yKgTrdn9pSzUjH9NgqgSv898v5",
  "key6": "3V9i16XE1ZWxbmvi9P9hVofyaZu3Qqvron6swcHpf6HUN2yt1cUvxRCtXush9tocY9NQ8ZjCcYtk7rLHi9cKexvo",
  "key7": "2cCpCTipYtrWLaY2DSgA5Xk8xBQ8kGRaEK2rMyXGYmUYbarR4ktES8x2ysr2NG5MyuUFZ5tCTnWHhBVSuuq47Cge",
  "key8": "52NWySJmgruf7XC7rj6B1KwGttdLTNJtjKt1WB7TCckWKibsFWcyLAARHka6qDhyAAJSrbTvfyRJtFmi972Ux7Es",
  "key9": "25SERX58FDfMPUHqvo7WzufiejPoXMViMmGX4GFgQ97Y4kUz5wqPwHhp8P5eJrorXfwp8eVLEwDKpU4WcRwNsgby",
  "key10": "213th7ZsKbYirYfKRGdsZoMSBo6yF58gw4wECEf1tN2BmvtpF5w6iojbVW7HqvPBqkWKfBdqby21ZdJeM5JYYhib",
  "key11": "TFC7qV481bweUCV9JRBdaCsZ1mUS7UpKD499KuxfiBNP1oFiVQWLhupywBz6YLfmA7nFWuZFifTcQfRE4RytBfM",
  "key12": "jhrmYbcEKwbXc556t5EPUrEPLW2tiZFiSzsZb2nZNEzxRfmtye5Soixx1zubMJMLbxRJZioJmyGSi84YScVDDpw",
  "key13": "kxXck1hgibk6a53PdBB6ScDYZbNKLKzhZTNW19F72QaucSCvXz1gyfruYcL924xBtyR4Z1D4ZJizvwq8RVTjwYS",
  "key14": "4p96ArvnAvmBM5XVaQaECgANAMFbbBZkAVuQejfkpvx7Tw1hZoHy5xG5wU7K98DLtmwdq9mxZHAttTh5Ebi62ca7",
  "key15": "4cKbrwLm6xZ6WDGRnZBBshDxwxq6T1uz9eoEAJbGqTzszx9gzrcVddwZJEZdYnsQStr9Agatfk28QdzfP4pWGu1n",
  "key16": "3aokQLrcdins1CBcoqqRNwYv9q74fN5qjC4r4aqwvuXpFq5QGKS8jttLxdN9wJRKqvs19VMx8sJRRLCM8QoUcd14",
  "key17": "3xfbsjGieE4pJnPQ249cj9NdWmW8xeaTnof71Fmf4DMkE3he3vy3TNjRGpYsPc7vUzVwuDXjA8AW7XsY2v55cuZm",
  "key18": "5YCx8NiCJCnuuCF5bpGDc5K7FN4MipBbkbTu6HyASQT8PiLhddbE8SZvyyyBciofqMyesjNr6dpBSo9R1aUb8LAU",
  "key19": "pnm4KL9DyspnKyQpqcEfUhinSUHGUwnyEYopCivBSKE1M5RpN6sKFSzq4VSyPuuxqYTw9fvLnoZtWwq5Yusu7hU",
  "key20": "3ZjiSLYKo7iEnEydj2dHL32N2SCPpQSS4qvAoHYwCPU6YMTSzGc2oTzc5SatwWs1u5tAJv25Jp69dMZk9RwYdgzh",
  "key21": "4hfgWKUAf7ufSgk9e4EhLCEcf6mcFtvqhR56vuMVqqoK6i8Yw2ZaWT1QeUGh81n7E8Y6CaepnU2kYA1a8hEE3mR1",
  "key22": "2FnWp7aXVdTDbDzzVKp8AeqfzS1J2QTeLDk2nbFBufi5oRbaTxz4fVw6KUjK531VaMRJFhwMDDGXsEXgoRb6N37h",
  "key23": "fjeH4kazczCmTzu8f58GHCVkfyPfY1CpQBREXpj1zEc6Ex6WZXHEysgnPKyYtmjGnETtGnVSCrnJyhXUrNAXH8B",
  "key24": "xWASVxbV5113CYWmA8jbUMMMpZJQ6M2DuEHNJPaPjutPnibQWiWgnBNNk5G35XpeDWTCmWWQpyeDMsS98E4vzqH",
  "key25": "qoY78VyduZJvQxpWGTf4bsmWaGfLE6ypJYePVyt31qDPt9abQFdc8NQ9NMkG1hJ8ZRwpYf8gU3LaTkjjDNMa9UK",
  "key26": "4qxUKwFCm5obnXWXc2SiW55mpXPCYBCWKCTYoRGz3vSfRxKpCKZjoTac1UBcNDAfbpVt2CSiqMxcoEevVez54Vpo",
  "key27": "2Hrf3rUsk389qRiuYis398hWTfwk1WF7Sqy31BPxXkhPsjYKWZnbEgChrJa35NuDBVstDgVGmoVVtLMCkKkLtYex",
  "key28": "4pfGDNhKhx9rohfCUmxYHiCB1UpUFzUNvf6cV8P2Z2syu49rPFRizLhzrTqkQmXS3QEPvhgKaobPBPuaGnHjUDtj",
  "key29": "3x1CVLVggVDZuBdbAxhZqQ1E1SYZ2BE5u8mxzkR58qUaUvPRmSFFnuVPnPCzFAPWQmBscxKyWk2Tp5h7hT7ht8eg",
  "key30": "24iMLPDzSXTvvVGa2YJVoinoEjZemTckjrKWpVyDUV1Kd7ohNY7ysnr7BRksTC6fFuse2HFgVb9Hg9GrA6xyV93K",
  "key31": "Aobf2STJd2QwwaFaFBG8kWFNb9YGrArtDWXr7f5wK7AVd3XmERPPAMWWB86HiRJCDF7Mkmh5XwLxvTnPFRykWP2",
  "key32": "9a1KjyuornDiDrVgmdzVkKvTeTbiW7xFktgbc2tkLXqTyj88w2nyLoJcdhsKU6R3J6Fo6A4CwKv6YfYK83Krco2",
  "key33": "4F4txUN8BSb9LwdHWjj85kF6uEaYtHNQTfDgbHZuBs7Vp2QEkgqFHGEpqWVZ5id9pRwq8AvCvVz4jyrSSMQJPMnY",
  "key34": "2cuFnguQhxPk3j1eWtCbQgbtRd1L9GB6aBBQvYK9BqjjpmXWEZDg7hsTEHsH2gy2BzXHRLXy8N6wwgcJi5wuaP7P",
  "key35": "2zpfyduyhn2HZnvRxURU1dZrqKK4XnkcTMe2bh9uQDEktU1vwmsab4rCRhbXRjUwRq5Fnqzu4JxVb8GsU1YuX1oE",
  "key36": "3UKcfJhvhxXntPb7Djj3aqnMzVGKqCTpnY9NM9zfDLWeRUEtaZNgr8AZnr7Ksva2ArxXz8iqTWdhrawfzMSdoDFG",
  "key37": "3bS2NoitCCuA6DBkTCC7Cq6i6BD8dGzGmHwfbJNMSCDrribrs9Xp9KhmMva8GrwCJU1UwMyh9NzNAFTcLN8stWem",
  "key38": "5TbM2xzkUwE6CCjtjuP8n2fehNTtDEU5yS1boFJEqEK6onzb3YoJcXiKQRvUtotAeoe6FQ6fqYYYxtQcBhM2Dt9V",
  "key39": "2SdQDv5GSBSSPCSJd7774caWCFVUUoYd5E5XT9ZKxpZie8FjzhMXmCjZou88Cc9ir3jHEG5P7VvPHVKwRG9HLPcb"
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
