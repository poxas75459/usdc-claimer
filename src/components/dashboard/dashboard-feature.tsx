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
    "4Cq1B6sFFuVQ7Jy5n6KsLNNoKS1LSt5yd17qxvkdNXdxEZJndWF75vtGhXXYKHwjHLdEgK8sFS9C8UYKdYhaQkEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MKUPJeu6ThzGG5ZRe5snZzmT2wm4r7Juh54j1LLiK1F1qA7ST9HEovDbV9yW3hXHU3GdAhRJgPg5zbnjbGgMGNx",
  "key1": "4DQWzCrkP14xsGYzBDyMiyKY1btP3vL5YgycAMNTAFYuT2AqjpV6nRxouyPWmXGDSw6dkdnQbKyiKTCYtoZJ2Ysk",
  "key2": "4oFGGknuAXohNGUez4MrRL1DVn5oC2sKb93UHq9AqvF2TwSchbXK1XjfTXHNqTu7MS5cga317qd59fuEr3MJGcHW",
  "key3": "4o6CjPwinknhJUELAorQHuaHutdNSwNNbjU4NUAACcsignQ39BRNLddMAt1NmxZUv5nebY7JpNKGbk6VQMjM8EpM",
  "key4": "3isEMjLvy7QGaGnQFbgWyGtyDRBgwYnXV1Y5qt2dQQgY5edEkzcXLDMmJNneaLVBFLDXtqv42zWDrPegjYwgkUrj",
  "key5": "pMrNqQEKTaPC7heebcpauzTQxHipEtSt8wMBJdi5aGn9mDLSMAKbXuuNoV74PiNcmQrDnYaaizeoDg9a4JBqVUe",
  "key6": "51CXkiFJaPo9sgXNLtNSAxCBuXD11e6qaPtLebrkgcqvGhA1Ly5VRmAiqqGZGpR8KXkZgNJKHCmB2tXBJoMKk8pw",
  "key7": "2JirPRtkjbwXVUpXZEwCg1iaepP8k2qsWuHNWXAvDg324X2kRtF5vZDnqTZk73DfyzyWX6XQqxCdnjvcYNi78P6w",
  "key8": "3yH4YgJsUpYCUbinP7uxX95dGN1FbGq6g5Lh5U3W8do4WbXjmj2xRiA9Z3HQm3rNpNt1ahJVov9ynXUMDqKtrk9S",
  "key9": "3CwNZqijJioeY2VeaAZGbhWTSszRBinHFm4kQtt8ufT1UUTLE1fZyWPWeEr6yjShCnqDP1X1vmdeU2WAh8KsJbfW",
  "key10": "45RTUVqASJVxnKrxg4y9kjn4TdBf8H6nv7GRp7nmQV7Y1jcWx8zcKNnprJ9JmHeG6vjzsz1MHKZ2fgN3bWEENZqy",
  "key11": "3VjRQSVXB8p5ECQbfyqjDtVQQKGodAHqMVWqQwSfgUtrZ9gf7BThevPMqq8RsJNan8H5P5VA67SvmqwdDsb3bA6P",
  "key12": "45a96P2QywNLkX3qQfRDujRCQohKydwUHLpqUBhJqgPzTzMxDuURb1ZhztVqHQP22B3idLC6g9e31s61BfTKCTR2",
  "key13": "5xTE41fuQmJmpQXTk6btAoZPjntQBHAtjYFJiHm5QM8kmSV3V7K8A6dHh3AqTDkXbTdNCVRDXe9PU7dYMug9Rtos",
  "key14": "42TpYCpTGM2NXq7Z42etqutq51zvim2RUy6qrmEhbsJctL5o522KjSTdUi7QGYFa82SYdTUYykYbhbT25cMuUTXr",
  "key15": "3Kjjew9syRJRkUAieZ4PC5Cge8GUZjEBhKXHZ5y4CkVxjSawmy7Km4HCTpzVjGAYdBGFYxLfUUsbMEhhay9MKi9o",
  "key16": "2UB7hMFjsxrRC2vsLoot72aBGHkMgsrCAYNfPLjg4PUe47Zcnz73K4i8tFwNkDJ5UM6hA1mfzix9mjEd71B8gPHr",
  "key17": "21BjPgAruCHRkCmCtexgcrgjh41TifZ9725uLrwa2DzHGobyAyXUxBvfUy5o3fnD9qfbbaGm8MawBtXLeLXqkfKg",
  "key18": "5c5magCPCJZERCzCfQsujm3s2cWg9PEkgA51FoejRMb56oewMroJ4keLuPqDWTMo1ALsednQiAbwuStSywbkNrCX",
  "key19": "4z46gNQXgof31SmGVuRJgwtiP3VK5B9R4yvEAdzqF2PMA5iBbexFrmNZkwqpvAmSCLaX66wRuLsgQdY4yn6ifHW2",
  "key20": "QShGLNU7StnxKbQpCEPUAPEz9NZTA9LnaAbh9Rb9csC1FS1cLhYiHQSSPEdNp3JcoXGmk5nJ4z66inNe3KxkjQ3",
  "key21": "WwM5nqmnip99oKtXPPhJc4mHL2nf6H8EdJSrU8zb77VQUpVT7tPh7dfw438Nxsy4As7im55TpgYnBMiUrpFwYiJ",
  "key22": "4oRSThaJPNdKVK9erxUwxRzttPBPPyTmQkxsrZXS8rkoYkQixtpXzMNZfNmH5HKFj4vaji5sTcxvXo9CSgicSgUh",
  "key23": "4Ptw3WexYTifr7VTXut6xYHsSEonLrafkzMk5W4ufpaWc4pmsUvtfD5Vqprtq9w74ZqB6WdcbmM2XJQpdQSstyJ4",
  "key24": "3GBCX1VE6zEPRFGu3mmgZ57JCQir7x6nd964b5udc6HwcSFcwrb3d9tzsutDNRdwTeYzcRGSXEqUHbWFRiTxHaPf",
  "key25": "2ZsogJdiGXb27wgpNp7vyEUXs6ruMGfajov489u3zsaFVGDN14haHwX5DhJGXZzzUbZKhMLvJ3EckMtARzT7u8n5",
  "key26": "3Y3h1anTkZJ7fCmivSEsj6L4Ju3PuFRjdfXYxTtdCenpso2XB3rpD9nFnP8ewpBH5tRgJjqqn1HWHUZwwaWq3frJ",
  "key27": "z3ALuMPbDzGXCeRACF8NuhnHBA6HicDK6daaXSQSeMy2bPj3VGm6HAwddE1SrrW9WkZa58NdtHgoYS3BCpbkhvp",
  "key28": "7frDohKwG6pXC8Gu8o9uuVhr5DqaXBMdsLGp7g2vRxCB5suJbbYPNaoD5S4BjZeFdSgPpZdVmxuFvmC821EVX3R",
  "key29": "LBWE2Twe5xnSFbWA6orEotyXzed4Cjnh3ws8ycncPCJ8ArzfT6CjpaVjez9LdabbYXw6d3AmenFeH8ksJ9w5jmb",
  "key30": "3UG2qXyUeiSodSUUgdi7d2gno8zsfrpnoaBa36BgfVjbPzsEg31WqdbXUkUTjAYtjMQHunySSrBQdXUhx3hKfUAU",
  "key31": "3Lmt5WVB1uXmUPW4NvD6UeuNWiVqYBKiY6mHu5BmqfEGdwUw6ayrMDhTkoave6GmffZvCH2ZH5JJzPzdRdtCJnGc",
  "key32": "41o1bVo2WiZ7FvyWn2rdbUVWHvNhqkpojDMo6zQW7tMHApQXHGucMqYDbasYxs3LUiMwRCU1FH5e3Cza9QdKmxc6",
  "key33": "2kCaque18dJYSEQrKCg2wZsAdk336Ex4F8ySswWvPbnmjZbbaF1xcUkic46vQkAus7hpVwdCWRKxDbtzW8YMiaKe",
  "key34": "ukAekwyTJZsdwoJ8xqkfRi7DTX36Stsy2f3ppSD8DE1JgDATmMTHLUffoC9uqYo9N4BheDbqjyPNAXybskpGp6v",
  "key35": "3aXnoR2rhf44cVxq8jGUhHwrYmCTLL1zibGorg9kDNyM8KnWecaXM4dhF88B3NFMEYaFg2Rsyk5vdJ8i8KCWw8Ek"
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
