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
    "3KEBf5g4kZGfbvSEyipjfLVfjJyjVMMmMcBBnd6niEBgyFa17qqsripYC5znMQP9zXsfaU6wDqj4zSLbfFctNoJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8L8CXXsupkxWZyaroZ6Fxt9aSFTEfbied35q8hDhreJMoDW8n9qHB52VYvg79RCecnzqs7GUKpiZiWeCxDdpHzT",
  "key1": "3XiscQArDjVaa4arCKETLJFzijahK4BEcXqMX67ejhMud8xMqoHD1QJmY2aArZicuwdd8da6MSkgeyLd8njAajet",
  "key2": "YYxHCbw4rShzfUAdSgk11tpXFknnR4nMj6845gi4Lv6wzGT7GrcNvN7vGipfmTjtXJDzuuwoGXx36U5zQ7DnAx5",
  "key3": "64Xbv3Wtz5k9WTif9e6qAy1DHCwvngy9K5EirSqcsh1etz4U7uhZVHj91U2JBpnXZjMP1fuVb331phjpXd1ETapj",
  "key4": "2vR9HFJbNvZnMs3Z3HtanpcgE5xRMr6uc1B9Ev67aD9vNoFWg4pwtQuVxp6qdNsg5g1KcaS44G2fXjx2zujzxZKS",
  "key5": "4XrwDXcE1ZVQDhCH4tXDArwRmYcYDSVcC5u3YHr2aMAcDQ34GPmWeULaLuTyDpKfuxutnnFviGih9tqxpgMKBpun",
  "key6": "Yw8XyGcaKiAYPNQKyLvnK1M6a1rJhFVG1zfFmQ53a6amqzRtjSEABwfto7K5JW4psjniKp15cg9xBi2MQD7w8qY",
  "key7": "5q1vngs4ram3aEDxEc541V4vkKLKUXHnYeLKbVFmK5QwQQs8uh22sSSBRmjcagxYXngiaRFjdUP1nCXeLLE8zhJS",
  "key8": "34XZXskYs1Zd5WvyGYDUGgtY6naYxHZCxbMHiHxUyp3UzQouTvMwaRXYgx7QPpeo16UD5SPHZbGiBtZBaPW88Xqg",
  "key9": "53cTia5NgbduqrZmiNiRePo1HhbHngAvkmmXmivNjPBLJSDzCdPagwM21P23rwkLnvxviaHt8Vz9xJQ4WhUg4CyQ",
  "key10": "4QKCRDAktYTsPzz2LAUrKWgYWjq3SVscCGdAqYD2gmtMrMJCAebQzrnVr9ENpnPBSzaUVd3qqHhoiprE1R4eBGyy",
  "key11": "qE7FdF7NbkJzi5bKMNCamsJWvu7fWfjAXeVptoVKtFQeNHuwqZKs4GB2yPiSTwSpmwpLZBG7yR8Bxb1cbkeZkrm",
  "key12": "2if251J6hMnYuBAyL6ahw3YmfXMGPrDT55MqW66U2ZBzZbtHHJ2qUCHxgwrKHFBA76RaTwk82Rb45AHt9RMbLrtj",
  "key13": "3hkYikNHLvnWUALyT8FntdhNs5hJefn6r49CTAgHVvtMXzibFywujRmdnbP7crs2go3ivy2mdSTyfMgVSETm2KmB",
  "key14": "5AV23Gmz7hQQ1r3d2dMjc2LJU2pciphZ9eusEqv5jREDarPt2fRikeMc3LULx2Dsd3QJhn9MpLT2QRyWbEwb2a4t",
  "key15": "5hZhfJcqrpVy71Mp2hMWhXR6Rp7tnz5oL8QLxbpcRq85rrSpP253hjeCs9dNVjLKwyunn2GCTe59ZacJDVqSKrah",
  "key16": "276uCLmqGipFAk9YStPrZkDoN9pSQAoTwjv7tq2QmCp1WWi92oAXrGfdquDEFbYBZQktmC2kS7s4s2RaQMLbHU9k",
  "key17": "4VifNqJoBLzNgqXAPSeRzzVZ8jVJafkB26n21Q5RBpD7WFNYwExXw7g5svRt65becpGRTkf5hqJmDf1hMiKNU7KW",
  "key18": "5f74GpReReU72yzSGLTiwSkcJWmieogPLb5NneQLsuirGqyCWRkzCr4QWkgeBfRD28GQ5oBHDUFVaL5fuTbncRyt",
  "key19": "2dT7QKmwiLFDcgJZrHJEJ1QyXZiEvL7CVBHZMdCzFnN5PPZiCWyES52byNneKcfuo69jJXzMqZSUrvYNZ5v75cgy",
  "key20": "4nf6KxWYPJcUQ41BqgikoS7j6b58hwJd4PLASwfZiJjFQsBkczNVfcyyY5kjQaXXnRhYuQGqiF6Ba8wwcSCTN8pT",
  "key21": "27p7q1fGqaJNwPMH9T1LjMdtpvrEYthqShy28pwSENKqsxGLSYkhL6vaKSEbGieMQ3GfXhqHS6yaGZ5RFXMPpM8h",
  "key22": "59qX5uV8SDSS25ELkLoKZhaGrMxKYULgAi2m3BeFRBChFQLRr5EGqdJpKdyURoCk2vT8prGD87LNqkRFb6jhnKp5",
  "key23": "4Z6Q9CERvEkhPx7BiWc5LvNKVJA5cKeG2nrQFzyzHt9kDJiscrRTT9eKy6zfVpU5Tz3Tvq2qgLEyhvCLC2swgbuz",
  "key24": "x5sjoSFi1nzYd11BGnLngMfsmrSjJo4TTXiye8DvLvNbb8FtErSw9duyggpNQP8fxgNXjFK5ZnQ2PRJtECFeTfJ",
  "key25": "iXp85iwHyC2PYqQhEkafP4owebpgoU7pyRQD36sj4hcdz2oSfFvtBZq5LeowkxVuaYocm9YfYcXk7KATC6qBoYa",
  "key26": "3JvFvaACzCmCiWZpRttWfXefJw8fbdYNkCXj4FdjuCAD4peMHSBDRoSn9bwSKpktrBiw9Nh3P6wLdt42gKhVg47C",
  "key27": "hYwSJPDjaPe9yXqdiX1bTdFY6a4WDmkF86ghqLkFqAfphnivzhdZsw612VbtqazTXvkN7YJjaHybVMKKmCdCEsL",
  "key28": "3vv65zyA7RtEeRA3mzrMH8nyWUhZQndUnisNqvUCAeQh9Mg75XoeD9Rahm4E2CzCH5ngKhuDwVfqGzfVBkMbWMX8",
  "key29": "5tAHR8U8rVG8LZJUTH5k3HeRFDGagqwBpTyQjnXEwdndWFkLAGQHMPJ1sEW93GFCijG3w8693csZepVEupim8uin",
  "key30": "4J9GphXRNnAL4ZMeSKmT6bNZ7GF9CiUjx2Wyd3Uo42iXmdjwPtCFkY9Qb4edPLcFmkNpNmaLkR2oJnVCAmacmyrW"
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
