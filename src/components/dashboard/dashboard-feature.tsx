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
    "4SWhsLZU4NvTR7iRHEPZsd5UgNVmFGxQ9Mz7F4tbBJsrR8YJwk5o7f3VNFnpQKiz5XQayPSeiXKbYeYkjV1PwApD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nhvNFeuSKHuucDFaXMkFiRYMkyE3g8CXCLzVR4c2ooY6ukGb7eFZXNF862h5zNykM7jeqGL8aWzHVskJKe9c51Y",
  "key1": "4C9YjtcD7QtNXga9zzQqLhmDHGuz41URdG53SRC7LRCnEiGuuaVq1bXWgk4xDDkBJ3WJcAtoSymFTUziZxkvsdM6",
  "key2": "4AEiHgrqxAq3e8a2vwYL8jQWTfwY3XMM8YhitFn2X5NiZZKiFHDMFWdmsiUkqc9XT8deXh5C85HbdHRhTfVkwHsG",
  "key3": "3pA2TjmqaxDXm3J3a8cycSGh9gi8uh1vmufBpVVqd8ro93rNFUHmjWEQHxafLEfgKbxnvK2djfTKNYFU5BT2YxeA",
  "key4": "33gaf6sZgEAYVTzQAzwnNxfDBjCR4JDXxmSGbtL6VG2oaugoAYhS3XxkcAcwK7T9BX3nRcg5PTvMLNMaLWduBgkG",
  "key5": "3Mtd2seuWoozuDxwsAiv39ACxyeoufm5GibeeACyYwwuEizQDNcBf7NqMbhDsX2y7VzH7BWfDf8jrGrgEvEZeGVT",
  "key6": "Vfs4HC1rKRpTSvHVRXoXELnmVvNLDNeDthHPYexmLMppPLSmNB6jjtU6q2B94httQbnRjkLzreDDS4bRYwsU7Da",
  "key7": "2efTGFAvax6yLFpwb7vsSM7bPBDaTxxHXae6fcRZJcshZnfMZwzYG9GefQuPyQ9uK6GVtywvJ5TxbHMCbYGhnfn9",
  "key8": "54F5QWmKWwPQww71Z8oACRGHW4CHDAuEQZbR6ghq5p2SaUWD9wqkrc1roBLiT5D96c6iiDMTi2RJBaFmhiDvp6rX",
  "key9": "2SKxaEA5Zu9xMuMhHjhQfQETM23d4AdhWcVk5b8HA9c6666sbjT5C4kUXciNShR6GHVK8XLDLDcdcgsPW6fprrkX",
  "key10": "38oJPAqm6EszmtEmn2jLhEm1C35ddAXaV3DbLQ7jGSMdkyCBtGgZM53Ch8Vju9TrREDjdt6W9pKx3pbkmJRF47GK",
  "key11": "3TPViMif4mdEaSoD1Q1mf9xv9JKfUbuoj8Y1nTvxPBazvuePHnyrR1Eb3Vyg6E4NGJLE7Uxp9CdDMB1PBTnUBmWy",
  "key12": "wki3LGVejPbqCzroQku8KxtZsX7aXfxDmxLt8jomn5HQbTM5cB2eoYc1Rh8fWvs9LN6pNDBQvdYNxKhTm9LT6AY",
  "key13": "5zVcrugiizAJEKnX4sRGL3zRXjb3WJt74YHqRcg1bwrYbYZckPbJJo7aYvHx6AZAxK124Ta2MNf5DH57RHRWLQfY",
  "key14": "7Wfn8hyDzPyjEFBiVDCg8SF4ava179FSJxk3vdnd5CW16rFSXuwaXrznwTjn7acidRSk9Jvhs9iiQABxp6kRSNQ",
  "key15": "qKCqwr925bjoCsVDZgwaZsapvmZf7QwsYkxkTXe7t6ZFDw1qRrZwgMtjEosvz6Kza77bddTtZsr8ZeK7Cj61oah",
  "key16": "3JDgxGLrmHMv7sHuE3birKAdjmTh6i7TxvsQvZo3v7csLswVZQ1a998d6JGiKPeYA5sUXz33Eus8f8UgPSm8sRgX",
  "key17": "3PYaSvoZe8CAWgG6P1KKEdqZSiK8LQC2nbRTMEtb2LAZShg8qdseyLUz1cEVBMQZHMm8k9n9eGLG7uKtHrGZvrov",
  "key18": "gTvKubcqcuy7G5V7aZbXXxYqhRkunPgDMHYQRGRPoMwS9Yg7Jw66ZQLYJkmjgCcVb66MQsngaE6bwX6gjRLbcc8",
  "key19": "4aFqTkb2WYoYvej4hCb5Bm4vhCNDtzNdXf8Kczv3StrqMF4a6kaShHihcSTnAq85Df37etrfdnYuVQhkF8Zr5aR7",
  "key20": "4Nji4Hx97KTYEmghduxWqYcmSkC48BaAVJZ9Xhbcsni4wZA2185MBYRwfhQrckKDbr6kKMRsaiYqQXwyXrsrboDE",
  "key21": "2pneXuRddcmHYCF57feq4HHatBUpBioaV6TTYZqvhS5Lc2cTZd78LyLPjAxPdQoWiemAiBBfDozDPERhSYoTU3m6",
  "key22": "3sEhX8MZHMMtvttPdY77TGjt95Y5DY76R6dS8T4KuD2SFjcGQU5JQZUEoosfUChpXmLVbE4AVdoPbhNLdF4xsabv",
  "key23": "3twtgEnfsaV5gqXKWpYSVEoucRY7nbkEMQyXeTfpe94jv4squ8vymbDkTojzYL6ep6LghuVWL7QAXh8XEuerCGRB",
  "key24": "Fp6pezPaFPZsUQXd8mXkR2K6s8MwTfSgxsGZt2GrrD6f5MhzpeKACsX5uC3QcCy6LV9wAZisESpdBJSoZH2TF2J",
  "key25": "2T5UJBjfU5Ks7dfrZNLyUKzXbgg1cHL4Muh3EV2adbVk7T6LNyome2VG4mUs9eMTo9XraijPg1cKACVtxH1wJMWz",
  "key26": "5mmkeDYmWk99G7yqt7ZpT9fTf9oyk8UXZdJACZERVnrFPAutFHZAjEavGaLW6sHEXgaWppXWccNWmXU8FAdU3o7g",
  "key27": "33MPMfdmG9fZpJ2GeFc8fsYgq5znFWSCbspx1cPRrmKFmdFs7PyZCn8snxCnzFhuCWvLco5Sd1EjotLh7EzGTNkf",
  "key28": "4b1w7MgbzoKC9cuva7CGNjsAYQ8CnQ3eqxAStC3QaWsZWA4mw6tBJjG8SKQve6e8q2Gyme141ygkPnF6tBxQ3Agt",
  "key29": "2sVaxC1aWZwFKW8mk2mdaZ2kc2jmQVtZQzsiyq3c7vsKywDk6NXxXDAcCSaKpn5N7dd8uFtAdMt38AC17rJTQ7Fw",
  "key30": "vE5bgRZmtjv9SRS7MJY2KBt88Fvc9H9z6auMPJgXdb6qjGAbnFNVLyxw9b9XWofqCCJwbFRocgRrUZqgQfYSprp",
  "key31": "4CUEkE88ued7eGmHvPY6pE5axE7pgXDCYFcH3XsQKxMEx19g99Uq4K6mdfz24odxzVVipP16XwGzzscj2HiYhWjh",
  "key32": "qtccEj6BnnKuTY3XF23Gvi7EKW7k9BSqgvJBEBnWVdeTGBTEk81DoNUbnMr4QY4Fx4v8Hbjwz1zsXwaLJUYDAgA",
  "key33": "2s2Zqx2F4FgXEu9HMK59K3xZmFAKX4qM6nBzU8opX2yQFNEsEFtj4TmPNWYgx4CKgsdrRiEdocYaXL3AVm584Tpq",
  "key34": "aE5XSaCfuEYdhFYyaQDjn1vmc1X9sXcbpvrCcMEcDkPqzwJm6nwp1hXtLLqp9MR8GfiwTajpXtVYzzspnd8nYzF",
  "key35": "9bELJArBw8eut8yDC2q59dMvri7sS9B5FBgT4aUFDTt1WZSeXA9W3xdLHX6AX4sBdkganaYidCwW3uM1QSyVD2G"
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
