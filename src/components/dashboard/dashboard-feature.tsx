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
    "4YjeWiYb136GPADyNG1NBmRz1ieyiCK9CtJ8Unhy4i1mfD28cpNEGxTK5Nu3t3gUdTFy8fxxnwk24YXwmaxREhve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M7JW6T27ntokeztNYHkoLf6yB4miYmsBser3JgWuuf4hRNMyBJhE7C5L2iRArZZZGRqEA34C87ex1oE93d1QPBf",
  "key1": "28XXavvCR3K6ZKJPJBb67kr569rkCkjzHXd3pVeX8N1kVnUNgkrt2q7vYrQ8KHqbESQoniJJykRKnfczDnxzwdyK",
  "key2": "49F7xB2Jej3Gbvj1ATTHRAZ6GZo4GBwWADBU6VZ4Hi119TLNjEEvoLcmrB8EHfbQV7FjVikuWCgo6mFwq34JnQtn",
  "key3": "cZyb9DhvY6vnS2fbo5PVSuHGRSXWxyYiz34FgexNLHc4qWDxyhCAotJbmmXgRJz8sKdRPJ82hvJSax8g7CaP998",
  "key4": "2J2h36eHNAGAp7ULVV1fgqpfTsWYsj31x3gqC7h8TkyUckretUPSYKRfGnkGxKGqaMuP8dcNLaPqaf7Ubz65JAJR",
  "key5": "337NqQWx83GdXdk3yDwE4TFR1G85eQbaeRCkCC9AuLjVbsqR1MqM4HdrCDZLAAstimzKQfDeEmU4Eyyk2aKkJ8WQ",
  "key6": "5d3CEA7xCGb5Yeg8cSZyn2Ui7GBtjSrbqXjTxj3qRMBPMyNSEXcZRLgLFpWEE7tVHJ7EeU77xW6BY5ctmNwcR5fD",
  "key7": "48aThtkWNjjNGHJ8Fjc5qmmEuVKfJUC9mbWooESCUznqEKsDyVtwVRCnmskkUvX6Jmxv7CT9d6QoaNKaXxRLVtXK",
  "key8": "4igZbBXNWRNNmWEAjJwPaEbMowMsCe4u9i4DLn13Wk78477LGCXAvC7W2D99TYmTkZLcp1q5AMmDarbfD8aP8Krv",
  "key9": "yT84Fb72BQaMTFLD3DkLc7T4kRRVRZiwrKUK8fWXF1ihorCKtDUH5M8YfUsW6SWwtYdBMyMnpADViHr64PZHN8W",
  "key10": "557jbas6pUJWptwJHxtbUvyQG3xJbwPRMboSYcSz2DVsTUiuixuVpWpethqDcTBPT2WqnbmtmCspoqpDP3sk3EeP",
  "key11": "234fZXvU7cqcZBMPaezHpdbHNYbSc2RZLrTUj1nf4tXqoV3KjAJpfm8TMKMLEFL61yPL3A8rB92tTCHFijE4t8dB",
  "key12": "cbqdAQDgjUAAE453X7miqKJoMsBvzYPAjANzvWYMum93sRRqjARiY6nujKCHkeXpr3F2pmggBubmo2YdRHka1jc",
  "key13": "3av9CPBTQ7xiNNXuXFd4BPS1ze5n8oZmfRhGCUxgfPFMtB9y7XfqBBtkS1ukUTsr8KAgPmLBSKcy1FPgQxcyvqiP",
  "key14": "2rNABXs7UfMJg8BGUkvLtmZfsWZRxrZvVQtVWhse6dkcAeK9EADDmqrf3fvawjyMr5pJTnxE1AYS9LMh9GUyANQV",
  "key15": "4GvrH7NjAsThe6gw155jo1htAeJ1pgfKhzcvg9wAws94ugDMjBFME1sf5EzTG5qmrAx7cpAmJYai1iRF5gcUbSQV",
  "key16": "52aDU1Qrn29RnKNqL1SiTKuxZCRsKEBDZsJVmEmQxZ8pTw3J9eCnq9hW9ALWxzmCxsuzbFJf5nbuhervTuej8YqD",
  "key17": "5rtUhKw4ZsuX9Rxv2qzdt1msWYP9yfoJWh2PKp4t8bgRuXvBDc1aKv42pNtZNSYfLsx14ww6o32QqMgTWuDsRABU",
  "key18": "VoxKsU8zsevWJvr9VTH7rKvQ6U198goLCdjzsG2gwYFBtCRPQKmzEoRsp1HEsp8z2jcerjagTafE3peRSFqR9Lr",
  "key19": "5UB2mbynGRn9gRmgMuF9R6qMvk1EqeH4LBZ3bP2UrTvFQSgKgw2tUn1q98Vemj57UWNBSYQV2mCCh7SVzmBbLDCZ",
  "key20": "2q9iWVwngxtdnLGW64Xr46iyUbBJ8qR2YvZRLMdrYy7Q2fHzJU4G2XAi9e5qTU3Gqx1bX5FLZswjjGHmUBaEdebB",
  "key21": "5aPjc1T7vXhQxR4NeH54geA3ybCCcarXmCxYHAhD3Tyarg58mqNTr7E76JgKotbJod1ZiLgoSbcF5uFQD4q12XBk",
  "key22": "66X3PMFsojkHptF8wVpaZCiyqttMLN88K6H3eHtsdqihUdooT4wYGPHhsvHfZPBub86AzJF8DKSVfa2xARo2Aywp",
  "key23": "5nzwyUDvfuFTF2ryz8veVYBywMMzT5MdH6brLTg9brE8mU4LDU68bebnTnnFh8cE4yz3iegdvnMXsw56DpAvjLc9",
  "key24": "3mELKJq1s5BjokbZdyLvjX8CeDNYcwjuyGf8Lr6KBsgLLijTDh21HQenLVay7ZU8kGLwitMn6hbFVhQHJDZkQrdY",
  "key25": "4AJjyEM9xxsq9bgMz51s22U9W847irByL5k7EsZiQfWV9Q5N7WmUm8jjjhpSyrz5mN3yKNCA321xzzewMeiTxcHN",
  "key26": "5YnU5vmVsEZFeUgHmLh7fpQh5vdDWxANdphWGQUuF7L93CWRArZMMM3ySgm7nbA1RmpXPov6CCSkEjgUBsNWoNG1",
  "key27": "61Uzx8Qm4szL6nSU3ecEqXLMhDepH9zCwoQ78tDrHkKqtQmZdunKXuraVuB9YXT3FMaEKVBYa5B6FYubMDrjdqcz",
  "key28": "53gMRVxxVFs1o4oCdPoR5bo8jAWm7FtVCqfpKeeaz7UHCbwAEygSvhF41vVL5yJnTnCa7qgn3VQzFJKKtp4ffP52",
  "key29": "36skvAWQAHvwgx2Dp6ksy7hfgeqpEo7HPxs6WaomCvvZehdDPD8s2pBCXRLBgr6SEdiFZGEuas623QrwN44AvobC",
  "key30": "2w5iGWoiZR6t8pzdwx62qw2Ed6ivoUiGZ1fijiFhk51dyv17YD1opFXC3VRAibUrXaxiDc5CmQZadE4isvCUJAvR",
  "key31": "4dpEMyzrgVBkYSmqg2LC5ccMnDbCarzWRH4pxDfTYkQqwYQosALS7jZDfykkfuW2uvhEyXi5CeDoce9NYJTGwLoK",
  "key32": "7qrcJL4DkaZaFmKmSDPZu4uLzYu6bMspw59APbSDzEreLTXUdYZdx7oMGy5oJwM9WJkicpW6yXa6JTjqc155WpN",
  "key33": "2ifeRfE2cracbMB3ei3wfJioXRKXoiAc5qitsA6n8zz6prq529FyABNqxnq1RNEGMB4wJLcuGMMYfWxnXfgfRZp3",
  "key34": "LfQvYoFNdJP9LvSGjGB7aS8H4oroVunFpsmgkZfr1eccvQs8QNPRuTkLJgcCmLHKzxdGLd9ofJQCek5mgkKKwSK",
  "key35": "3p4cM78SSwLAYAoxdycLun9bHP4P8heo8qJYvgYZCuE8TJdAhzwhkFAMXmmryFPW5ShnkTEAKtScbc1NMjGNPR8K",
  "key36": "2cRZ75XZnTnXvsmeUSs2zuagsMcGWZG8M9LGsjQYx6gX44vVmW6j9QYGUXDx2qDbmuhVmfrF2mrPg6GmThnHM9B9"
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
