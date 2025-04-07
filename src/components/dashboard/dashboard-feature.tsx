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
    "211XRZP72A6xCkjwLGtTMfnteaktHBJuj3grPZLUifMJBwd6u99yW1ZASThE4yrRZShhAmFKw5F4c63zqQ5ZVNfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qgEnUVXA4g5MeiPzbUCFU39mRra7oSG11DpotMvKH764SowrDrznhcZCw1fhpa3696vFBaoRsRNTYYPuxDYuK7t",
  "key1": "2J9Gjhb6MmiVeVC2yGxH7ysV1k6LgnC8FVuB6bRXmZk3HBqEvaQfzBNCZi8iRnRNHVpEnHnGU7NXyRU3U8mkFvKy",
  "key2": "S4zJSNfuzY65JwzJTBPkikYH8KJ4yGuYouahVCKBE669hh12e4TBzbyRgFaz9ze22ayQ645RdoAuVTu4s9TLXqS",
  "key3": "4SULJMm7KqwXMQadgZx4XTFLFieAbQQGgVGj5bDGaogb3pye5hD5k71QbFbL5KEnR6aCcxzDsSK1hVbYc2mjYEZU",
  "key4": "dzreha5dhScYCKpxhoCtUq4zgnMmUvHFAJvJP9LE9WtMmEhTAvtXVkECazRJGqSQUD34U2JrLFMtqaLS3tRib7M",
  "key5": "63Ep24Wuuno2rYLNCkXpCxyqJPPp8EfzB4XgTuoCxYbFeUp4EFxfFaTmEzV5PBHrCWoxyUPMqSyAQ6GW6XPnhXUv",
  "key6": "QgKXfwgDj6C7AQRE2JGHmNmFZ5nf8HUUV1uXierewXmgjXbJx15StCtsAVbU9TUqzpJMTufdUpWaf6N47GTxnGZ",
  "key7": "4sUAtRZi1UkkTACnjmY6WHaLvH6ydM1X21cCgY832mPCZ17GkFnFF9iu3CeKFsn63hsgSpqtFq6tutVwB7vSoPkS",
  "key8": "2WMwZDFxnffd9o5j59jjp7EuhtGaDmrpk5yqio2YjDc4MiPi1LJWhgyeJgSZuNTFeD7dhGLBFerN6aciLsmMDfZC",
  "key9": "2DnrzqjxAAynDJ5esWDCnet3zDPY2KcQECb4vjHPWwgf8QsGjYVpbhTgEDDaKWzmPPa2sjbkT6rQBrLTCQWBqVAJ",
  "key10": "4SpExXLgxmkt5KgayCp6hGG638EAm66uXpqpzUWoiJzZEDoAPbgYHaQ3Bu3ivZzSrdPgcFtnmd2BdQSobV3Y858L",
  "key11": "4EYv8iAWBrjRAn7C9oa4UEBnbGSe5gqgPFGjzC61dXQ7GaJmoztcNY3J1uZ49xpcWmTDocf9FayonkPMRYpRAaKo",
  "key12": "3AwbqsPftZMFtpuKfnHXtgrAAmN9Q5fe7nDh3eqyArUPECsdcizkDnBeLGftgwhMCBAJsQB9qWZNAuTSxtZjYaLQ",
  "key13": "HWbqygkyTmPnCFWY1fYSiB22iK2ELcoK4a5nXHPumFuv6XSbagBUafuJfYAE75b5d4dDLvtqm3v1dSQKti6Ev5P",
  "key14": "38hnHc5ft64b7k57b8Wzrf9J1a4iDt37zu6LtQDRqZVH8iHr7FUXX5GP744PVdEv4iDspcDfESQ6dJPKeMcAkeUt",
  "key15": "3NpMpMkhCpHKwWYdEK6fpwBBd7yZvMD5LyD7FZaswNGZJ7TA5kSQhAbevfyT1XRajx17LFHUDbRL769ZTYG6f1HG",
  "key16": "3BeLAJhs1LayH5irQuCtN3krZM9gbJ5qQArXsKELcVWz4L17nteBGZAox5thmP94xe4AsdSPbjscWEyGh8EJbPWM",
  "key17": "64eAHsHyR1C6Y1QRhQpuuhXXW33XoS7prrT92imGz7JQRJgUrspqd9XC51FGcFje8w34vezxTEG6yzai27qQ1DAe",
  "key18": "4xr7aBLFQBxu1tEHNpwQkKxgZmJvtAxURUnWzm7xZLwcFiCymXEoAqE48XjJ2xLdz4EhbviZJVSdAAvXmkGd4aTV",
  "key19": "4e5XTJ156ie9MyMWj8GujUVtXzYt99ckfmxPFZtzNwzhe3nvzpPRL7cRLun5vAYvx1RE4FEdxwe2ya9KQwFc7GV",
  "key20": "5zgKsWMshudJXZcFpqZgsn8AgJH8heFdebpmfTQm7jtTzSb8QkX3YuzXAiNpjUXu1n1NkuX1sLSSEcqCswdkh9y",
  "key21": "2oskmHi3zQPostJSK62fUj19o8nbYnxn63uZ5vDjZoeUfKsxzBcxkL8d4jaHWhFpckkxEbZQA6DmERLwxBfaDVbx",
  "key22": "24k36Xnabz7d8cgrxCyxi72yfYnRFMtEGo8oYX28GJhbrvBSSB2jSE9ZeWKH4oRekL4UvnArXQpetWkxSjGnUHZQ",
  "key23": "51jnUUoMXUQsCULY7C8AqNpijViHh1KuWd9NfhWM7VAviBtF9pwwqEoKmzkaE2A7sjg7gas8hoazu6DDUfnH9vv7",
  "key24": "37UThreBm7GDHXkfShvfmiNVsXRUgKsw2qudTRnBWHBBGNSRDQcAyeeN8a4qYGurWcerZhmZPrcFbKU7xtSSZD6V",
  "key25": "4GGKsKMqgwgycjhbb36PhKx9nfrfZPUK3ChUU2osA2D3GYJkebdGFAAVUUBGRoXoRw9FKxYfAXNgtXTeCbcKHg7U",
  "key26": "3wFT1NPtiu9wCisC83KNUSCmqJnfrN1kewiqrsp3togv8rnk4Ag5PbRPwRQzSkz4yh4W5HStWvwYS7mg3BvYVLCE",
  "key27": "49sQ3hix1zwrab9oKqFqFAcWbTYAcAMjQQtvPKpbSmFaTLd1XWoqDpwX1PKfKHm67gobLf4A7AxCowXvaPQDnVRW",
  "key28": "5kNcbJvDkyP5QqTG9ALtfvMdgfcmHEp6yAAtccab6fY8PU3g5MTjUm8J4yk2jotnMZyVdkYuo93LJqDFSStpnuH3",
  "key29": "zQiY8vLdhkqNKoKLxGW3aRzsMFkk2kW2XqeXD4cWno3MJCxCcc61CkU3HB4umPdLBQapBqZ2LdtKoGHupo1UzNx",
  "key30": "3LnFYDYBotEepQ5aU3xVH8uC3zYsLmHLvqG5gpPLY4WyCimSEB5863bkUB84vtEb4mSDHZmGazTneZogFvsjN9PW",
  "key31": "2GKXweFB9AzRWTLfPUgmwsgtiND3bYis3qRnuzSiAeanuzgtxE1dJUsdCYFwvfgvrpmGwrnKZNGA9zqkjwiS5znk",
  "key32": "3hgUn5R61C1Lp6TWyaBeoXV3vBvmHaSPZmSbYswmLdTi5D8VKoELDr3XDwcRYgtajKoBrB5tKohJBTMVCnH1nGHD",
  "key33": "deFAyP6cnttnuJX3KxivwFwWRhmCxD2KjtWsi24BT2vw5pnWZHCsYQtUoKXgjpwcNkCFjMRmec869ajSCUqG4z9",
  "key34": "muqEfmEjotRumfFLScvHUgJfHG62vRgW1nDrXxvcB4GPyGBjq9pMCqQNYgrf2hiTyoPaLjc8nWKKGZq5fY3t8fM",
  "key35": "4nqafLy2MwrddPjYGwqQEr8CoUaEXjoE6jb3Jsky6Ak9RMCq2dTh4VytvSVAjUdpGnb2BNKMW9gmy46W3BJV8hH",
  "key36": "5qexuZetMnboa8rKEGM9qsiRsTkXMd15YYTF1r2YUFNx7CZMVSDdMjJpqdQfgiLdtzWufxrFpUyAm8oRYdyKtU8f",
  "key37": "3Haq65RmrPra4utavdx59QdET1924pxtHwm8u1x4bRcjmfVGgMhAFJjHzXsb95BtieASHUfJmYbgiCedvj5SP6gT"
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
