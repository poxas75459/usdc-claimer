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
    "4KkjLLVdGgPJV2qpUZJ4E5pPRw7JDwNvVRK3ceybRo7x5UU5vjMsatjL8zZ4rWYAP927mWBHuCEgy9rJVZ899Q8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29eK8fFDh6vZMPzGLNnSjZAnRGsmmBDtPhWGjHMvw4EF8hV7QuSooDzVZsBQ4w7qnBBbh64nxTNkeh3J6Gqz6bb9",
  "key1": "2D7Bb6jhgMnFPdwTbtRzPR4wk1ayK46oXegHf4hRV4unWe9ooSNzukYtiDjx8yR33hy3BgxQpeZp3nQtJRBvpHt2",
  "key2": "2e3VCdAqQNcUxeVszuBscvJMLxYunb5YhbwCjtWxbfAUMufqWQBFcx6hjNPeCZuZk5qKYM2BAGYyTYLoRYnSGBhZ",
  "key3": "3nmkHeSMqc6GLV6j2oLGBEdM9qY1d6aFiXKXvMxkfnJvTosBYiX3YDTzn4h1Y9Uyi4pw6A4BYgW8San7LsuptHg6",
  "key4": "4QtUtCy8HrrPBGYkg9tu52WMSnSvNZNsFCMmPGBNgfDVysyPq39mgT7cvmMZwkSVe674mrSAwk1XruwVEtPdPi7P",
  "key5": "22qrThAwYvirBdS1yyAnc2sv57aufNy37uhikjG45191sKsyDyxqaNomxjdoLLK7GYgT4iAbN1RWatGsVLWoLFr9",
  "key6": "2EDUNCgzMC3TSjqm7u9GCFGpkkSWD5LrsDcj55TaWnWEqJPru4T6moZTTRnekTLctQtjk4iXynfJGkFM28xQ5f5F",
  "key7": "4jcTyg85UD4RyVZKXueRnvLj4DSyE8MsLZWFcd6VPcV1khdZxV4RZMEDjVwwEyWpd14gvctTCjDXDPSfnHpvLagt",
  "key8": "2XvB4vY1sb7VNd45oE15zVvpJaMc6QuFM6uzcVAK31TEV9c84uAfkjoSVZJcoRuS691Sjy8eiKLKe7cfPPhD1nWN",
  "key9": "2Cg1VxDpf8d2cveS2i7HGfyRiPNuA25x5G6t84xsiqTKmYqsicpfzG4WBw6aWWoWTd9S9LZSkVsemd7BAYVG5F5Q",
  "key10": "4bHr9Z364uoF9UX4m8Ag6cY4QR1Y8fxELRE2Ho1iD8A9WmK5hanvKRc3eFL6Tyg3gVj8mbCSFBLgMyrRBYUYcHSw",
  "key11": "4CExifLRhNdb4LPNSPBBBKh1vXn8mGX7Zqpe2i8kxBCrU392v3QNmvtGN8iCL7RENEnZJKimaWg7bpbqpdHSs8UD",
  "key12": "2y2EyoyKiixm6u57Hjn25GoBCMhVd2Pu3zu9tASHA4Hu3TzeqYdGASVt5WrKKvjSLgVousNenWeCTFwNjovzs3xT",
  "key13": "CVMSX5niRkiuKDKKX8SaPjbrakFRgjUHomxPhC1AFhXv7mpfpxmPHDFeHpuoyiB26EnKFqQJwhGGxpBksUjB2Tw",
  "key14": "5QdMYNh4Fn9uxovd44GUU2WDzEDtyhddvXteUbPGngchXUPXS8Vz7yNcs2edp7FW9frppADGU534sHKk4RRRWdrW",
  "key15": "2FnCeNZLNuRuKSb1DYb2WTZGL8ruR6v9Dqw82ybvZNh5GfpjAP4HfHhUhNmx7XYFza6uJ3XioGhBr3Lsy6FTiUVC",
  "key16": "5agSKanqpgr7DLDWgagKyhnxzAHQvZdn9LHfMJ3J2BQ2wzYjwF2Vsg6oiUMFiTqJBaMCa3Qkebx35uuVUh6pzbFV",
  "key17": "2cr7BvRHjYuZDnQf3THSf613Puf6NPkWJeTtLN7pzgFZTAiufdGP6YwEAKpXueuZSnRJ1DdpSmwDsm4V3RP89fgz",
  "key18": "RQYD8izRrPXtrNNPj2PYdJtZdr7GJLR7cxQQf71X4wzLG7f3akK76TthnbZANzq2XtTgEDzdRLj91Zgjh3erhfV",
  "key19": "3DRXyAvkZyS2nhebBrdhSnTeV94VYadMihUxwJnaUHx5KAxyRAHyiDjFBGcgcrRiiVje9fRdfoCXCNmjvX4n5qsq",
  "key20": "4sML828t8e7nKHQ6m2FRyJs9K13Vk7aY6HHncDQFQMQrC2dyqTULwojgyG8CvyQUQJ3dnwSr1oJJBtJDoY9pdCt9",
  "key21": "5YBtifzxxNdyURY9Je2pj5ZTWuMkBQbNR8AymQFRf8ZPc56uQvsofWNvBwofCk7ZE6vevdHYLSLPNTBoWBVrdtay",
  "key22": "4RjpxPV8yv9jeXs346oAb6Pb2zHm5k7dfjCi26BshcGtqefySvBFvKqinycDx29mLfrkymfjHEiweE1xfcAkkTox",
  "key23": "3uTSQDGMw5es9d8a6PnncuWrhA5jtQt7JN1KN1XJFNTesZZwdEwV8UVDLVgiqDNkSHvNHbHeQF1NeceyMsY1tCmV",
  "key24": "i6Lg3rJnceKsGB2VyJ11NE9BfqjNQdhv9yq7Cm8bPHCBGfifZ9A3jEuu1L4dvkKp1uVE2uyCygVz4EJ2AnduSM6",
  "key25": "2aRAyRcWRpteDDAkNNpQb9jCrKfWFe5F7reutZrzmjgRHnQiYCh22Tpgr6yvGjamv7yRtqacu6TdJx9T69Tn8phg",
  "key26": "3QUACbtrETHFqB5xDaqHq2TbiKC59VwZ1oCrMsLoxUUokR4szQbQsrWFhNetaAm4tGUDAt6JaTPYpsV3PcGyHq9W",
  "key27": "TYgcpFMR5w29tz87rP87PtQKCJNbkKkTPRGfrdNxSwNjXmYKkmwredByzvfCFANrc7B2pUz2oDbZ6Hpts2ijetn",
  "key28": "4Au8oH5RcYsAgXaqQWZXab4tKLmXgwoMH6rdRAM1DH1o2Lzo8pnJokWv391aAngabPgsyJrj32unKs6Kdt12dMZ9",
  "key29": "grbwC7cCAPphaQoQGD2Rp1SWy4QRJ5tbaMpKNn52Q1xWy31Fr2oiyekMgKGrVGWnsFosb7f5X9wS3SxyoCKi3Mp",
  "key30": "G7CBDAy2Sda3YBAtj3sZzCT1S8vF9Y6png8oC6rhcq4v6UZB4fL3WBvVMTRPQFsZ5rSZAz5m4GU3v6a2nvo2CDZ",
  "key31": "2bZcnSvpbGJYKDymiYmVMikLzpzgAMmGTYswtwLRgRxdVQjAAepGVrGEYnx3P9tnzyZ7KJzfvb1DhpdqJD424Nd3",
  "key32": "5JcEbGipUk6UGUjKkByMYaYLtLRB6HNPTkXXHtVrtZPZkfVcacD6DcaENApBXA21fZRDnuyfG4BWhDPxHeQXwjja",
  "key33": "4w1iu9B4B9btMxiMJbPjV2RffvrBoAKZkueuHkzcoryEDgSyWSzY1B9ZCu52FpwAJVnG8ZXghtRAJBkGHGzuqi36",
  "key34": "37EbqiqaMJ4ZxH5ikoVWJqHoxh5hGWzSxR85J4vcvggLqMJx1nwCioz35F4W3zBTjorebGye6kZnAwKM9strQ1fb",
  "key35": "5r3kgBMAcQJjijagB8az1DZEUttye1ueMY9kt25L5Y5cW1WCffERVN7HK9JX1ExbQ4vD9g54XTGJv4Wit32ZKWRE",
  "key36": "LbSymXPsqkmY8m8bdW9tMdFFBLfzvQfyp4KXuU55MLgu9cffpoqhYs8VZkAF8aM1QMKE2fPHnGy2jLmD2hjPAKu",
  "key37": "22Ya3Ca8keMPAqRuthC64JoEHMq9MKPAXoH72Hr53vLJWvDo2YHCZfM2rhnBb5h8dK5m5fg4Yd42RsGTdmWMNvsy",
  "key38": "p8WvCzfFCMY6edSum5Rn2J1zW5MWp7isP2gvEkUqY8SZytFAPyYeTqSY7tG1NAMNZzpYqs6gD3ccgmHQb4QRdBq",
  "key39": "3sBSwz4BgCXRPnzN4bxbVKTA3L66LQbC9CuZb96CRfS2F71H8tr1q1yZ33VKCTUcSEXp2RVqcCEszfcbGCPsHxCr",
  "key40": "4Kgv24vQSfKi6JYWWttBMtv4N2ZZfv45bX86EDxWEYBSRvbQYhgwV5eLxMeQxeSkLoVGdxJYqUPiKfaB8LrwAyod",
  "key41": "2RaJst2HY5At52r3q92JWhVzvJAeV8rxpESFQLjZWiPhN686oojXQdcwYGF5HKVhXRZT3dGkhmBoJBMceZcJi2xJ",
  "key42": "3bL2fq2T7o7pgCWCVe2Ct2bLLuBMxYAQs3ARDKtQSwRuN3ZTBTNLwQveEHpptQcFkWAjXm9on62rW1f3pD2j3FaB",
  "key43": "aVT5ecRjqSCNv2p8YshhMTHh1iuynWX3D5QBmfEuCb9EPq5jxCxZtipRagGRgityCVsvQBV9p12AuwAXq56wYHm",
  "key44": "3Hk6pkbRiEArcgSPASqqN2KkgT1CVicqx3G2rvcYrrpRfmXSryExCeCck9aUNezsnyfb1FSehKz8YXorGpz6wX8n",
  "key45": "2biG9kPggQjcpqrnsBbDD2se5eHbnCNb3oU65sJ6psWNJqeQiQZKbuUUMSPgS5QCYo7RuS6tak45uEZcdqMdETfL",
  "key46": "QgTcBLrzXkriBwCdgNwfv5nwfBPw7LQw3oN9h29Xgfcb1EJt1qMWifYmgbkTywn9bcuLPYV2pvQis7iV1Y8ELYs",
  "key47": "3wZF3VS8YsG77U46y7Mf5SAz8jJ9FTQyzSfuPHvPXVRa6vpS8x8Qe7vSp1eqt1ZJ1Hq7AWdp4LYZbcbj4qLpZ82g",
  "key48": "KE2iTEjdwsmWRtjyYCR34791zmpNtW9VLcHGWPu6yKEA7fYhKKsweyjzmnVwK32u5TzMcCnvTpUDdYpahhYVk19"
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
