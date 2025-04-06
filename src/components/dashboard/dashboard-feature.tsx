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
    "3d1E6ABQ1oNnwjZGSXuoBKRYrPrkwvSM1iwuekNMHyp8nVFuiZpmsAp27eLJqTFMnxoDEFvoEKmaPg9zi4DTq8qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wFCwy5TS8Crev58qruHgWc165HJksoxSe1A4dJd5Tf7Fx6EmCk8iFxTcTH9iGUpRw5BYJgHWJKE1zWPyvRaLYMv",
  "key1": "Hyai1V4KYYk4FF3DeTNdZ7QEhVKea2wLQgzvbVbAtscE6yd9dnerma2tU8rKAg1G6rxPmDVQcXKzzhVJA8ijoe4",
  "key2": "5MAeDHZDXC5FnjUMqZyXMyf4B2N8j89LE4P7V14Wbca5fb3KbPeiZqYby7j8p4YD83QMN94NEqYzy7uieLLg9wt8",
  "key3": "4sCzXZgVaNrMW4jS3zSfXBXW9EW1ACEpg35pvuaFdtJr5RSwWM5q43Kj1up3E2qsRRj3rk8uTpyJiS7Ne22EGwrM",
  "key4": "3G4htjybLAVfakJybUyGjMNHUvG2r9XyXPbTKjv7sEaxPeN5bzhPPyjXKrpWYRs6CM6aLAtuCRj3JhyGiBXBDLa2",
  "key5": "4V6B7DpRtoRJS55SYtUZVhqR3RzqSQEJuhANoCFUYv8fxC3JazoEt67fAnvXeeimwpQuDeNaXFnjoMUMiDHKUn7Y",
  "key6": "wPy6UrryLgBX9eeZNrTpCXoJJoB4imfU5oNKsiST3dGV1juPSCQoejubZBCf4jTFmPK5m2qnXYAU7MzHLC8hjE1",
  "key7": "2WSkvZBu73v1JjaV3Go1S8cz36Zbpd6udhW1DNqcpPELXX6jS9v9VnGEKfCS88MwmzRZLYaHtSwV5nwD2HfZgHZJ",
  "key8": "2pAF8z5HF4dnhzxRNcqQcQziQ2i6E4KxZPphpjF5bfHb7CKQpkBaTFDeJyG4gUs8hYDRSXL1ZD3MfEEJD356U144",
  "key9": "3J1gyqbuiDmhpBRc7nQEU7pqQEQDJ5S6aT3vSYRgckLzJqa9534C25Fri6rodHDJiHBd2unxXx33g3KqbwrEfp8C",
  "key10": "5FAa85jDTqHyx6gve9DGd7AcGLfu5jwCQGhogdqeB7HVxpSnjrYwiKT6SJ1KHr3hfctrDs3JLbBqjGKwvuwEWRVQ",
  "key11": "4Zuxx756Tnf4ZKrFpeGKZsGqjepx99TGLaWS77BYAsDXtQiPGh7qGh83hjNKmpwdPPnHwFkYY5gmNYhSnHpc2EFv",
  "key12": "41ZNuaM6vkdkxBkhYW7aYPGB1AWXw7xLj3L7tVZGksGED3UBemxpuZwyYdny9t4LCpSCRhtTbfm2LvTeuNx5YvRR",
  "key13": "44U349rHUqnPesNeGaWWFbbD52fVwooPafNimpT416bX1tNyMxJNgfQ9KaKSFrHR8xszffJzHQg2vfDEWmrhTQze",
  "key14": "3R2FbfiTZ2MZL1NC5hrP6MxNKu6y8LhCh3uJ8HMQg82qnDm4XZjv2zKXGsfn76ZoBNz7jp7FeA7qE325MGdXFHJH",
  "key15": "485k3RcDXnpknxVa32NZnqYK7xeYzb4R8CqDZ197VVDGJJSnEg51w6ZJ4XynTmgZkEyA6S3DPsSPMBvXYTX5iz5r",
  "key16": "5jYpCaPPxuZEDgugoH4d6G9NV8NuCfkEcUtm2FXjp3oDgQPyvUkPByNUFRGCLtb2QqZHExnHZA4SYnxezTagRY6x",
  "key17": "26maV9hifuf9Z2NK3Je7MatCTmXgUHCAWMyBiSYRQ1kXSnjA8owm1RSa6pqpq3r2RCUtGj41ZKNvtjRn59SAe7h2",
  "key18": "4fYfqNjAS6wjhWkkkxLpYut4Te5jf3LzCLxv2TUdHhZ9HqGnj9LxsSiM8TACEkM3MqCqyT1dYPpyA2VPtsKk7ogj",
  "key19": "3wacZtymmFwJLvvKdM1bEHGWdWoCXDDELVDzE62uchiV8e14DkhKSw6ywLvZi2XTkqAmtuLUUTCZ4uU9mDBvhGb9",
  "key20": "3UA32XJJsvUXiGgTZKTbsRSftPCNVi6rcY97qfpVEUumx4ZWRLjVat91BzH2jYrZH8RRfaTpKMKWggJogoBJLpAv",
  "key21": "214Wi6es6Z5oEWEw8JfCYGn5rD81uDZX8i4KSUHEK6BsgBYjmtwSuvLWjwHL5keD7UnAVD7BcFo6JsNkVn7wBWeP",
  "key22": "tDJBS8Ab2y1qHhhA9qnDNNvviQ7ayukW1LDVr3VYgfGcYBL1Q4KP2Tiq8vh62XJ4zckNCLFBfLFxCAQh7QgpRbK",
  "key23": "3GXEbQYz3FExXUmDYuAKrjQN1vENyZgzUHzn3hEkj37qN2TqHiu4XQav3pRnHuv55N2wcyBDU3vrXfw9h3SdpAhU",
  "key24": "2gN7QiUbXQCgvwVSvpamzQkvsEiBXD6QkkwK4r2cPJHr29ohuWUWLjYUFQCoXXWMN6bsRWcWUECrDXYKPqmFhWSa",
  "key25": "5B68MZByjJn2V3BFzsq78WQC2VLQFrd3utfFeYEP23sEX6ghBTHQLGfa8FcxJsAJwnZdZDBTXcJHJVqnn2ke8f2m",
  "key26": "2bTtYS1WtwBHovdfHaVee3gp6Tk3VATo53VT6YLHnanTvPrEnKTDNniWd994r3ApFoqS1hM7jeXR6nNSrPskvbR2",
  "key27": "5dbVhbCvZNkHwKKe6NUac37JXyjkcd8e63HeLi1guwBfFyWwL1fCCMndVkEbK4bPz3FLmbp9FTVh62DxMuQJAPgE",
  "key28": "4Ga8HVwKDBB9N7vGhoPJmRXjU6uYKk5Ea5b1B8iXdREyEbZxGtHNYKtpfipMHJGu1bxyLJf6RM6hQhLGL2hYf1Gx",
  "key29": "2rvKWF1UBcZQ1hYJPnCbmMzVjHFSxzAPxuc7UNkemhkGPYm7jsbd8o9MssjnVtXJFr5UMiGYH37uiibgHeHFuzmr",
  "key30": "5ur1uLe6CxzLiGMYvRa7qYYY4NTQhJYhskcHSQy3wqfcziBEcpbrhAu7F8XHqx3mxdkiyhxMRbL2UHJ9A5AMtzHQ",
  "key31": "dErz9WFaGSedBdj8a9y5dgQuewKCrcaHUXXea7Vt3y6eLJCRReokoSZMXbSBKTLL2e7JCx7Ysb1BW5f59rw3iU8",
  "key32": "dV4gVJp4vGKSfgLAnr9M91tQipyAsfjU391UvQ8ZcNGk6e7gmMTY9hgiEPA2eYBfZu6MjU2ZdjRxWmGExWABVno",
  "key33": "rrFUSwTC3UFsNDogV91PjCSKtW3qYgB66YjWLzkioAshvr1MBmKu2m3XcHk9WcNWNzPVCb4Z4Jeqa29d5j2FvnU",
  "key34": "4xi9p8tF7KAuWz2vbQYbzjpDw62y6CH7KRFHEDvGiT3u5LHaYs4YQfheJSBJZ7aC1Etjakv2ZbTAmgA4P5UFyKPL",
  "key35": "4mkEWnqfMbVMKLuuUFU8bkpSewFnRUyWAjVSMzEbK8A42j6RMQonNekRMLwfTtbwTeeT6WFuqHqw2PFZEWhrUkJS",
  "key36": "5G4E5cXA9p2dfrL2SM1bsU5uMnfJ4SJgNRekcqBH6MfuwjYhJpGFM6YRTMWugBjiCu4axf536mu437e1JBZ5n7xS",
  "key37": "2nnygPpxY9BXVkGsg8sGU2YmpWKkHyiwgpCkQXGVXVzj6hdwHJunBTUSiHEHxbyZEq7whWcVkXe4tjdWywhp99Wj",
  "key38": "7XPsxSsGgGYVwqyMWcKtuErLDNfL6Knd6DrkLxXRrRu2rmw4isrUmAzWmD6kefZrEvuiMK11qhdZ2Mv1zeDHeRv",
  "key39": "2AL2m2UT8mtgSig8CB8P4RL6GsBhMynitq4FoGmKhbKGjzqjVDvpKoix3iK5F1jqrU16u7QeKnKqo8DR5XsC3Kig",
  "key40": "4oCZR8MAqgi4tYNcaiz2HEyTrn58CcTjunh5MjtKx2VbTs4kCmqX2hcY9aQSFjWh1Bz1X3Ki8QyH4Sous6YKBrYJ",
  "key41": "4j2w6iLaq6r1yLaLRcZWnwuoghqyCu7fM2cv1FahP9snB6K2XYA6JEAVVVC8fJ2t2SCBHh16z6mP5kZAm2otwd37",
  "key42": "2dDA1555YXaLeGS4XQLUy9MXctJmLtUzohHhBov8CwfkSnWTm9apPyV43BxmEkVqUADd9nt7eC8qBPLuebQka1Kk"
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
