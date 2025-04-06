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
    "2wwndWADQyJAuFmaK7JKtsvrFHjG6TrD9NCrr3e1vXVWUwJjRkSFkXnF8TAXB8DS6ekNaH1e4aFkLj861ZxfuDpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YvXRa63A7yFokFpP52hnJBibd1PVQVXnFMyXVJ4Z1oz3DKDLbcnZzqWwXBnBPwsSZrZb4pjkPJGZ42VTiQDYhkm",
  "key1": "2LsyZ3Mn9TVtPdyPkhbGKuuTXZNLo6SVi6iq5ahGrYe5XmbzVHBHxjvfbP3dPCmKCPEE3xWcJWk9ksr3BDkTtRGo",
  "key2": "4CmRVogZd9SwWLn8Byp2Xb9s9iaVYr4zijBqzvPBEHtMK9Vgx66ouSrYGxjRpnBSfek5FWmV8s2X4L6UHCDSj8qG",
  "key3": "5czRx2havEysR6q2opiySbep9nUF8XKoGxmmH1bHwtf7kXbNXyumpnuBAyDM5gF2xd8BBEwYiFmHc5ftPVZxcFFk",
  "key4": "2kRnRiDK1Qdf6iojVvnRaXM6D7jj3RGhkHgrf2Y8Mc2gnARSZz2q1jChhHkFCfDKFWGM9PVRbg5a12agKwwdL3mc",
  "key5": "4yDyEP4XGvW8J7AnRzHZ1zA5jc9tng3CN56eqGK5m6oDo3m41HnQpF8QZPq8rGZMqBjBL952HcDsL8HeB6FwQNwH",
  "key6": "4ZFZECkMpf13K8W3VYwb5BZB6fM7N87661HZZf9PSfeTYShrH8EwU59vdFkioGwDcNF46YZQPbcvs471FwnM9rdd",
  "key7": "tYPxrb7QaACgkmu7mE9a6ZxbmyiYe19ByquutxVnKMWSJsKrmHsy1p3vAyjMXXrhzC3iDzbDs8BofH1fTdbL6TN",
  "key8": "5omVKmXrF9WuMgbfyF8euPMvCFWny88BVrMtnWPjToQEsXQqepmbDovD1YXdmi1izYDS4iYhrpHWUcyUy8d3oa1b",
  "key9": "2Ca1mz7cFJjWHgTrHn5YiP9Syv7yfjVtzrP1H3pc6J1mLvoSdpG4wgxzEvNCPvt86UVNP4t1uP8Tn8zUCSDpNkJP",
  "key10": "agXLinUwfZD7AEJbf6NRaDNLDpM5dCN3PZZLSuh4Kkjfs52u9Bf1rdBHPxeYRGbnAZDREgvku9GAAU3TT2fCheA",
  "key11": "3iHZNCH1U9qX31NULYDVUHoYwUwn8Zp78TWJJRgLoewtKEXqPqnxEL1GjFyadXxvM7FFGzQUmg2s8yB28rVQ443C",
  "key12": "48htqLEQaAZbd2PiXCS8A5FPGRj2TUdmMh38oyZmr6F9ou7dKnUDrBziQkoxbGusqn3JMYBvfvEAuCCQbiQuYuL",
  "key13": "cG4WSba3Mq1QMjUsDqvJkz7tthKxuVTQQWBG2B4Qx97xPhgxsSuV1F4j7v3wgCK3qmk6a18Dg7zYUNSds9qwFms",
  "key14": "4UWoXvasZ9u1e9JZRZK6suJKPkUjeHyAAwiJAPJjNsVcXaigabcgHJ5mP7GVK7RWUR5xYw3aUrgPFr5gJHqz9LeT",
  "key15": "4M5JPDMC4RTEkgiTQMzk38LHurKz7Pi156QkX1Y6AYhFnmPc6QHA5ASYo2fMRJgkKNeJQiGV5hJqRyCdwh8yczrK",
  "key16": "4c6kVEtXZwkXTeysTKgLyBZLXKSbdqvdqWjW1KDaN8wcTvovqjFjj6JS1CHmaQXEPbqvdbWfeyLmqrUdxdKk1j8U",
  "key17": "suP1bTsz1MLUmEqYYBs5s5Pm28XWxQELzRM9A1VwhC1cw6u9eQLo1ZCZigNs5aqMPjExoixpSJvAbn16gK665YG",
  "key18": "2VnWDpGarbLGkqaSWF8hvCH9ERAoZzAzT4DZWwcpBvhWNsCzs8Cci8eYtHj2bZZfNi7Z5xMVEA1jJuP1RUXJDgGz",
  "key19": "5ndxDaYP1WJcr4YbspPdn4qeGVpZifR27wnF5cK8grHSEDckKKDLhHFbJzM5U6wtDeLCpiHEdH1cDAM2EczU9yRa",
  "key20": "43fUQfpCDgPo24Z1dCqv8GPCz7AnZi1LitxGjcAXzczbZRoDy6zez13KTch91shHGMf1nzdCY8rkQWrmaF6QFoev",
  "key21": "5BmCXQJabxu4nemWdCgzczgQjFjeDNbZdh8fJNsn4hps2gUPzLetUYZrKzH8cKzbPNzz1QebLupf1XJzeHV2H42b",
  "key22": "392ZzZUpJCoyEbWLr98idVCPth6woXcKWwH1mMaW1Lz8B5aadEnUpzTgCBtEqnWhYti3x22v4WdSihwRgua1Hg7e",
  "key23": "3yDYD6VvWyJG8j4gwm93f5R5WiJyL5TBzaSSsYg6A4QxTbowCjYksEpdA2VK7qcJoGyEAo7BAzVSgkb6NuMvt1jw",
  "key24": "ev7dL96fpR3embECUyAdsGSupvBr4kMmpErRniZGbtYRHMXGso16MEXx1WTQSzdAepacqRmtWkg7DoN8QLojqbf",
  "key25": "21myVfXE4rLPBpNm9sKDRqTCXqz8Jbi9dFxVkwwW5qDR6LU6ti665kiat2rMgeWmuVjJ9hg33vkfjgjZF4bn3Cu1",
  "key26": "3zgniCyDCP7R8HMBrkrYAzz5MB7APc3aHdmrBQE7YjwwV6aVpqBgcpthdyr4razPE8vKmrwYxSBcLcDUzdNNTuFV",
  "key27": "4ZyHb4JWKWKVNcZiq7QKGmWaKN6hXsAE8z6gkgQwLscLWfGoqv8Jt8fyKFpnACUr7dRMz8LwjsdKHyZUMHvrCUDA",
  "key28": "3CQphnmGdvKPbxRSx6VHTwB8c1fr7bbSrXYhx7W353NVpXprCD6pfkGZE6GsDZWRTNaoVfWMKLeTYBzu8v2CeAZa"
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
