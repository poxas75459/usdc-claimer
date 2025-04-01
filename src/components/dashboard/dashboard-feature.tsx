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
    "4LUNiYf4mYmx3DSRyj63tMLqhgb1ykpek8jyJsx8hV5X7QkHEj4HJ2STzfbsoaY5TF5KyXwLEVoaFqsBJo6WjA8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bdj8PADRQyXMgxQYawGqdWKjds1ZLYiJqmzhV1vewBXxhUYFGA6PWCV8adtDucidtjcTThcb1Wve9AVmCtfZotQ",
  "key1": "5EkbSbpmcYQ5dhT3knRCCpm8zt7nJD1cQvAMsiYbdmb6JeZiAzxLVHTQiZnuZ6xgkH6roFQYrEAwAMxE9SG6LJNq",
  "key2": "4iB5nfwRYawtMJ1iaSdEvLZrPnXiFe9vmM52cNFGPaySry5CNjgTXacHBK7PRgXhkP8E4MZqThjYBshBFQYo1TVp",
  "key3": "4JNVssEYih45YzaQCs53bmraU81SX3SvGdKxMHZEv8QjyaAEB29bfCav6KLVGAmebjaCc4REGTfsaB8RQuuwK9UX",
  "key4": "3M5Z6diEpfpWVvXzYB2eTiTEUmDQQVzXoiywJbW7gmgnZ7hn5AqTBFAdtUApizG2Acfzn1nqJ6pks5G3LLeR3Yax",
  "key5": "3kWL34FYRctcYLajPg3KNrPcd7rfEVMbVq6ZfrHhu4C3jHDYYAjrn3oVEXEoCxcXssewsRzCUNMKFsT6XzGpg9Zh",
  "key6": "5Ue5p5Z5apik4NUCZVucVAV3nG8J64rVb43M9TWdWssY1kcFPk6GYoVYCQzYDZVqYXnsZ5HbT43BNdkCXz6pYwT9",
  "key7": "5V6Hi58gXHqWFRTDBAeVsp6UqDRJEVcARk2QrvBMy2PUTiafDzg6nZAfe1UVcNjh8WL38t2iPz1g23qdEruzhzcj",
  "key8": "5MJFXrqtr28YWA9JejgvuA22bRpGw6BBcY9FZKaWryNBvRoUSeT2cTBKLq3gkQySmM66Zjxpk7s9hsQPbdwcFiYc",
  "key9": "2hxSbJS73HFyJQMstonyZS6rjATG3GGuwjcZrWrdjT2SrKDDAQ3aPWfcRgi4g1bc9QoRKZXmgqYbWoyXuegr24o3",
  "key10": "4618n8nNZ3cv8bs57wiXNNJNDgcwbKjeTYe1wn7ehsQKQLrqv11KkVw6sH6ahMQRLGYnmiorUvWY5nyvxYa4zmeX",
  "key11": "dv2u6FUTpu6fXzAbHH1JQXg1WfgCBgrm4nmmmz9TaeFEoVHJUrLifgRMGqFxDaQ8uocMqRLJFm9qUBmfy3mpGvy",
  "key12": "4CvJF5iauMErgGZNSzMjyaVkhKxgYce6LH164Y2X3FoXbxQFu8BrDULafyMg4hnaXkzZvMjXPpNYz8NPEBGD8kna",
  "key13": "2gxSYJUnV2cfdCVTjbV5kDXquqey1XirAg51NhCqqqEMXJ7dfvJGum9uTKLNK8vmZdFMyDFHtPv71ErZNsmW43WM",
  "key14": "QzAiB6v2R2zRAtdK7B5bCw9W7zReeb41rCvuKoTZRoHBno6nKZCzPeoSfm1VK4XS94NmmLzxLK1RtXJr1kZPbXS",
  "key15": "Abu1bngukf49h9NTTuSCqRtvsr5viCQzmpf8esnVa6xwUsWKUyaRniZKZZXkAaZ8i8tXsnd8sQH4MwnxXKf5jqc",
  "key16": "Qp2VDeJABeC7GsYFJQu4jQYPy2JpNDzj4AZnWyTiEMD6KfqxPHddqEoJD4xXYznAnuNnT2A5dEdGfYvA7ztP6Uj",
  "key17": "kW8nTchouQ8SYH4WzKwT1ghNLHggF6iGY4byofPDe45gAZv1k1rhVczAGUqe9FEDnsRJru6VBFKHzJSy8auDCB1",
  "key18": "4eyPYWTzPyBXFBLSH6m2aUY8VY98pgQDbeVgZoUmqEULG68vb8zUnkzqM8Ct6L9BCs2n2ZeREgSzTxNNYEpyCMw4",
  "key19": "55xa2CdyzcQ3aBf7TRwuTWsupSdMeafMFrFZzyEqt9CmwswafVeHSeczAQKvChLZQ6hEtKVfng46yFAKJhdzRUNc",
  "key20": "2hALa2PQN4vFPy64HQM3qDWAKTrDoSFr5XXuaQ19cTPj34hYRKLpTD7JRVT8sztaYvcMRMJx1Bnz4EhCJ83cxMjp",
  "key21": "35WeNiMBU1LGsUgA9pjzY5k239VGkFvJqAFoHq7R1yY4gCkUc8yfQD18GKH7bVCTEXwaiuHjK9JLj68kiK2mtNoc",
  "key22": "21gWAu8uRnuKcz4kN4dRo7BZ4LM4FqsPovnLGUcwvPcHgP9rVmEMF6HSbJmvJhXUwQpaehYaCVsZY5HhQrEdXx3p",
  "key23": "4iJC9d2tXRTUfPVb2YNcYT43yFe6759ru4GmvqsrBY93uk8g52B1YdyzAqWsKXrMSksRcQ5fFD12Ucz3EFL7g76r",
  "key24": "4CKYJWuqC5gYbpey5rTkBG3LTBPAJqXBnEsZwbhKUvZMxLfs3bLjwkoVs28R7MJtJPU783bjZQcoYNjFPPeymhne",
  "key25": "67T4EdzQK6wNPWgCv91eN9HEXepgggVDDgRbydDWydToK3eccAJz7DvPWRgcjXzJhwcCN3JBrkSAYLvh7hHSBNeT",
  "key26": "39maZfu6CpXz29ML5ApXspK5w7W3BW8QQJSN3pYJ9QTsbbPxudewWRdii3nuESLFHjAze5w5mWsP6Vz6aLK4xmwZ",
  "key27": "55YuMMCHVD8p3PvQ1uTx9Fn4oicYsr2ug422iqDhQRKUThzWPRrhFo9fu8RGXaG44UQgFG9a23E32dr4RFrpdZhZ",
  "key28": "2x39KRkTu8zd5oM2ixXcY4aqgobkPg98YG9CkGpGryQLVCo3UnuoCSQx7XDQc7zPr6a8vmNevgEmG5kbrkvpkPbB",
  "key29": "3tGfb6PGs7LfLdyBTEBBx41vGXMRpnVdDXsbNcTywBXTeZtVkdehpXhLxB2y4tTs64LgFVq2X2xtaQvWi19GSWYr",
  "key30": "5hAxfySboAXE6Eu1pWXPYbjCRuAayUfyyohXa1buu67mXoWsTqLLykQAwG8HzmLEzUXhWR1VyG3ko4oefoxA4GvK",
  "key31": "4JyyuC9A6AADfYba9xz8EnZztPJ9ErDgCVtmsgEv7KZCbq4JiSx8cyzxx6eFas1WAKfbtanSjzLqeUTP13Zj7ybG",
  "key32": "4wX9QbiHKrrxWuEDTacrdDYVGi4jpxtT5fnQAZcMJiVG5La4HNGJgHMW7GVTbHtn6NxEUDrkRFJAgMznpdTuM8wk",
  "key33": "4cRPmASKe7fSp3QMc2HWNKQDmep5xKUEzYzaimhzidPqv172KkJniju9jCWyyCuykwdEuMfQVuFxQe9ecgRu4qjb",
  "key34": "5AUjwL9heQWx74MRWN4VmP5PiT7b3j5yRiH9NpPix4DtU3S8veSvmGTkE5UNV5oZW1usWhL5YVjFyzf9biiViYuW",
  "key35": "5YZd8V3PUjL14yujECUup29Ya7Jr97iGhxK6typkCi7q62MhVbgaBtpiHnZPP6pHyT56utFx4oJJCkuXLqzhNrjv",
  "key36": "kmp8kTTxm7JyEv3qSoWCMJHEbmHgUFzykFcYqZaVQJSEC5vkAyVScg71WurwG9hDRUxLcCa2d9zCqwqhETUNnNg",
  "key37": "U6GgFzVCnqCcuYRRMnTuvoiZ9xbfsUxx3t4UAigMW8hG6UFv1rsPEdRNxt49nXLdknN5WqN4r9RCNBJHgmqx8Pk"
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
