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
    "22aCfumgEvvmQcJKgYJvEch1dNnuMc9e1Yt4SBrsERTevzreZTfskhfg2bkroMTgzoYU4VXd33quhPCSmijEgmYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53a4GeuurdvdZzGGjJUEAZLZ9MFby8bTbpCcuNqL4rvkq8Z5tAscxTAYBdVp7UVrYi8w27CELdc5Z6AMaVPSyZQ4",
  "key1": "5fEtdT6MCsYfKVKc4PRS3s7kNEEQqSrmLe4mtFmg7gVdbpgk5GyJZQp2RTuM8xqEi9A9hUTDgVoetpi6Tn9wjRgS",
  "key2": "2t95GEdZhbxMwDG55Wbd3NUr3Hi7HmgybrRg5GV7cz5XCD2ojgqSvVxTbAkwYArTo8FaWt4rVzYCVAhWUs894xjE",
  "key3": "2LrRZWN9N58MfePgNdm3BYZv57VGPc7mLaijXddkg9fenmcwYygB34YuWvGue9XVrqTwFfpwPSpkju4GJdhrRSPK",
  "key4": "57R6j6rSk1BgnKvFPhTd4TBzVRvXvNAQ2PC6FPRbD6hD6ooPyrCxf1ArbL143w9Bx7kcAhSJqq9VycMFQENVQy7k",
  "key5": "TGEXncxEutnDNbPJ6H7aVnGo69GcCpxLFm7i38Y4t1dgiowc9VoChh3LKxiA9JmYy1bHjxo9JQAZ3DGCZQ74mRH",
  "key6": "iGV5WqhFkfQ8M9WJzCmYL7kjs587N5NicdNTMrQEJaXjjgrfKezrLbTPL6kMZvNDRswCr6P5mbbkkZUS3LyigP3",
  "key7": "5ihavtF8TNyweQqz1gVCSmucFXsS6QH6TUP75JWTKt9krAsDu5L6mUCSGVVZyX7dDDoDqVWFz7bDM6K8Kqra68d9",
  "key8": "64PSsCF34UVV3tPFQ1Euh1ASog2CuUYBWdoRSeQdMzSjcEPokMdqNJoF9GbC4uTSaKAzeaotS7Xh72or16sACYZ9",
  "key9": "4PzJx5PDNjD6sEzav7kLeLutQtTSWveJDJWaVGwMz6SZi1WcbbSSred66SFMmaBbTgemh3pfkGbAcoWmUYY2xQFX",
  "key10": "48J853Yt4QzFxaXkKofJCBzKbNu6w5RwrFm9M9fpH7eAgCfai3Ky91s8PmXdBZQU7sBJfjEqV6u2n3RBou91EoQ",
  "key11": "QLzUbtZkDcT2LvZtLMynRHFebTtQFsBH463vwn6kZwf4ava5DBJ4vbrwuMVzVbZqvX2X3ujWn4KwSwMS7uZhUQX",
  "key12": "2GVsA9Cinim4HbqTQPe5bWFWAJHZ4yVmANjGdGsFzLZLrToPhHbenW86GY5HhNEwmiZ2xdtw1aQgoysmtsxCDL6C",
  "key13": "35sa8ATehLMKxtU9u8kVBtrpdxtq8znnr5UpguqiK9faPSAwCurF6rx4E7TqkHGyTtwDib1syuXkEK41X4NGMrfF",
  "key14": "4dWcWbcDdJ1qNkBFe72zqaK7xBYoWq9TSfXcSC624NTBoQk6EpjDtc7bBdXonMDbCJYgtrJtW27R7ZDph7m5YQ4q",
  "key15": "3uK8JkjEvQunGob2h6to5V5Fj6ByhgaZFC4r4dFv7a9asFYiuYrbsY3LsU95GP4Sq2WX56McquJiuvV6PFa4SUv2",
  "key16": "4CUPdEV6AKpbm6ezX6ejYiZ2QDRbwWFMsRA3dVmJWzqD7yn59kP3YcJU4LxSogvD8CqKyR6G9K6KXocfJoUAtvfy",
  "key17": "4RVn4x83eANwASY3nRMpYYLZiEqahTGrtYNjTj6T2NMM1fwYBcayzYtkFjyNiwidKtqYcxgP8Pqdzaw4Lhxmn1bo",
  "key18": "3xbHamF5ZHYJQGjgEZretmEjPP626Rc2g34diDb43DYQX988YTvGE3XyUqBq9NBsHMKZFjAiKAzgAuQsR7nAFQNn",
  "key19": "253RYw42zCnTrq4pj5T1CrrsnbSt6Tb1fiDffuZpoKhQ9keETFHUPmqwUXVZpLQZuTFNGQBYYu4seMYa6zPRJoLG",
  "key20": "5BhqCgmRuTvqWcHu5zH1cp349ZXAY8ZLSWgf5LSWN1za9h9X4ouFPkb3F5X1ukjPB75guhh296sDBrhxp8zPcY2T",
  "key21": "JwQuSvYu4bw8G3QEFdVKnZ3WDqKTAhNg4NhDRdgwCBfUGGZG184DQuuhJwbiGwqNL5BNUcCj8bNi6qX8dhjRE7Z",
  "key22": "yQ2AgjK3VGB2GGkmcH8hBXJrwFgKUJwn4ECiuCSv98rCtUimam687ugLbnFc2AhE5cehfPvvx3vzEabE6xRFiR5",
  "key23": "4c6TVh8nU7MbSTBWnSCmqX9q4UodWC3xgNBfYfM7LK9vTdtrpxfUWGKqeZfTu93XMmFYSWvXXgnyB4hSLM6Y61VX",
  "key24": "65RpqjjigtF4gxTQoMx81Vav3Lk4DSdvWav8Yn9KRRRwby5R5kg3Q21jKP8RzFk5DZZKpDtG6ffNw2U17CaSPEFZ",
  "key25": "2hGzUdLFNEGjX5uBuAtYvsgNh2n2nWKWixZ5RAr1GjpZD2pk8dwjf3SC58v6B81ZceQC382QSdDZQT8n44R58x1i",
  "key26": "4x964VgTvC6ms2vpraAbhSuwVG2TTiHgoBD4TiCdeNRUF3CzjmD9cReyDuQ6bwja8xB3NdDGN9jUuDr9f7ofVBuG",
  "key27": "5Q3MpM58DFb6ULiqYVavQgpQLkAK22KEgn2xdSZgZSp596mZtgypL6tpJuAcgUCEAaaS9byxkwBtGLi1mb3zk4BB",
  "key28": "3AfPmA1dySckeSnVFetHs6dv3aenX2WsiYCpGkjT1jQua3H5yWy1k1U7zCFr6XVTDvcK2XypSCkRKzCAZYjFWc4t",
  "key29": "5AuQTJL6aEWmosaQf25tn7bHTjLkqsQTnxqpD72UMystgWj4hLuUBCRoyxCQo69BWpX1jMUTfpULQj2weJUjCCp2",
  "key30": "34zD6wSTAaSFgqtPFgkANoE5wqmdFRmccPSrfz8kSKnAzCRcqeXFTDRu2s91T1dMSqCZRfp3ZGKwYuSNRoLrNbJP",
  "key31": "64Yice7YdMv2oXXCcCxRjvUo7L3ZcQw8QZr4ASrj7bdLn7LAmmNhaCMbCidTds2RUrxoYT8dQsZsGdfWi9X4Y1sZ",
  "key32": "641shecr5ZXiuzx9Jc31Qt2UscAAhpCQwbhLAfFoS8kvdksLPEFW9UymuKRQRTXnMGacZG6iWYnXi9SK8y6Qg8FQ",
  "key33": "yUmcXpWoXuMrAEL6fWtNpYoRX1pfNxe95FhyHyHM7QirYSoCJ7hT6ySNVzC164LVvbds9skxagHYGVUZHHW2LBn",
  "key34": "2Te2jAAN2Qv5TincSdQ4ckmT3W4944B827wbYVWsjwAjqm4F19tDFajbrFBpacTE7ReFiZNLJXNYFtj1Skg1zuxL",
  "key35": "5nQ9H9XUr6DBnCZrz8CjtWpeK8Rpvgv88gKh8d9j4ZNhPnYtZ5nzxXfVWux2WKGWjV4sYPXfnAsWhi7TUVmMxuXk",
  "key36": "2rs7fSW7pQLKyPZyPWSiEs6jiQUCPHgmMr3LfegLatdf8FD9ygSFxdLY4XXho2mQkAxhTAE12SvTUq9C5J3WQJrX",
  "key37": "62zjuyv4KEXziQmhGakJRa4LPe7TuXyyc3ZLRWUi8o8NTYiRRYHgpuwDWtazMS9dozVjwFwRjYYeDV1tht99aXfh",
  "key38": "2aSiwFzPhmmPVmQrLDWRfcH43LYRW6ZMMCr4ratr3fVMFxJpknTiQnMpaMu911LioMxmniEAsbscgx8j1ZaKJjLd",
  "key39": "3T5Qk1QajarrzS15frCjNc1TiHuDZ4Xzj8bwfPJYPH179kiV8h6ZstTZWXq69UGaBc1gPjYFSPJPnqFyq8X5j4ar",
  "key40": "4tQLhRwXL1ZhXMh3jbevf24ggVpb9PFk37TiMKSCUq4ywcfgwre45JUN4onBxhmSsVyzRoWzsP3rQBUcudHTufo2",
  "key41": "3gbqPNfvaGygsZKAw3p5QPV8fDdvDtdjnr7Tv6yCiivK4aBzvHbVVfE7PQ8koeA6JD27iiyJGHUAjQPMQBewBKdU",
  "key42": "4yNvyHz9p9VcyoB2JM2idaqivBNQA3U4qUZ5RjnmsTS8wUMAoU3jB5Npn6keQgkwWC8wr51io1wXgFMf5o6wULCs",
  "key43": "4XA7sTxS1fxLoMJMYS5HxXMpNtrCCjUwXu4YVpocR2mKNB5WuS1MTT1QY1VQHuksUto5batdxd3mq5yLwT1NAYUV",
  "key44": "NB9TK1LTjq1C6Hgv28Y6rPfKveDbNRrByovnTPzGWLDV1VpCVeAKzFCUsGC5MRUQFd4gKdy5p2KdNatDj3gz9Cp"
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
