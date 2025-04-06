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
    "2HWZfBoK4KroQNiwEDYTp43R7MY9LBkvTiDw2hm1XEo6dgrwrNpPvqwSMQszyR8e3ZJVtX5nKCYJ8skM4G32omyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AjPBHPz4eNtWNLCxX7vdRNcKbppAtapPU2VaSs6DvT8AP1XVDRLHnE4bzWu2RUARUmMtqkYmFwZSw75zMmRGgfp",
  "key1": "3BztGRRsTs5UUCzETBpXtdhvt4W81gc1YWzJJZGoyKGxNnKDJEtq1VYXAbQ1d3bqQdTPdMMdj439UHdUr5HtjFU3",
  "key2": "3xyptttwjsTRGXTWWKYyjxy9RDuk3M7zCp5E5aHikcKb89FS9TDra1BLUBzYcbQviL8kn4fxXNFBS9Lh77e9Ugw",
  "key3": "4R6PxWyxvirWMRfHJmKw2ieNRKwcWeSvSxyKtB2duPoqCVoQVmjsiLHco3ekCFqUpuduzBhBq1Xd2P7xwFU4cazR",
  "key4": "5tWwbnhYg4Gw7PRaBSCBYqReX2xA4vHJ8CJdeGPWsL2kaQspqF9UWtka7HBsayxTHLMd2JpLiHAzghHf1nG2LUEa",
  "key5": "5sNC4z5U2N2iZWKqZdFSrCZCGNngXKjZ3pQV499Xji8Y2tPPDrZz7YfiLC1U4E3dzEMShRsLAhu8ATjzFVEXj2YQ",
  "key6": "5Homq9gtpTh4WEqgEh92d2MPaii2dqFfuu7eVzFnXJg5dgHj5ZxNX7irzTPRVfhAXYP8mtXyegGkWEeFKsGXJfbe",
  "key7": "4wrp8zaAMANdnUygpJ8Xu92DEcpRdF8n5NuBxmkMM2FeDybWryhL8HByK88qfjRsUFRPwSNk9QJBPVDGeWAkzuR2",
  "key8": "2rLzWboPpDvfXX36C1QRZJbkMKChRbRPRtWr8TVjoAfhCTszJ4BhBEhdqE31ApQKXsGQVM5qKKZBs6Qjii9H8Tts",
  "key9": "4yrLmkAxcYGbo3cia6RAyhPCLAibsVwGGLP1Gjho4Mm1mL9ygdQBkKHDYutdqYWsvdpPs5D3xmCZRpoj4NCd3Rs7",
  "key10": "3rbi7kLoTs2K46RMq7keHoPHyJPxhQG5HdNTEkY9xvC96iyzMpknKyyU6dTwrx2ag2LxcPv3kmqMpWMEuUQmfboq",
  "key11": "2ukx75eYNePV7JrgV9JiDtKaoC3PVXQcnaKZQGc2ajnYZFd9XTkQn361DXBmSG3de5MWSLVQf55Cjyub5U8GSHyc",
  "key12": "53dRRygS6X49W53AJ6EhEYfdx9Xxkd7HvkLQGmBDh6gVYCg69jzXp9mcohPV6H5AgDM7k9zqdPXDU99HU8F1MBBC",
  "key13": "49KpTA6cuUyvBwaFqKxAQ5UEUCC1tBSdNZSZqAJGeciiEES4hWanVRSqa8N114MGRFrG5j5eH9rxtukmGvoxyFgD",
  "key14": "23XM5YjkHQEiLPpikNQfgnVXxYc8uG51mGWE7byj5fqkYs9yUfqXHUPBAZD91eEt5drUFZ5utSHgM1VAbnNT5uaQ",
  "key15": "PxD3NzRcjJUAuzKMMmUhtVQmhA6v4fyLNgcTPn29awCZAUEiFBqY6s8JCocSNabGW7GVMYbYAiiXvjocAbQ6o4Q",
  "key16": "4wkhKqyzNDHeZca8GS9phQ2Yshop4NuvUqXWLAw16ZD82hT2vtSwvdU8fYCbkwuh93LiWxDswnoxPw2eCsNjFMv5",
  "key17": "3RQhB6Pnpe1uhvKharmyy8J3LBWwcDy7fmM7JoWKy7Ksf4fGLgSPvST92YYe4AMvJDtHrkFWS178AhEmJMwprVAS",
  "key18": "63oZkDWzfrStkGRUwJB1PcP5b3iB4ZTT3Fr8eJiaKHgn64LWg1AiyYtCmejyofoRaq4i5HgqJTd3pM539X1fvYkr",
  "key19": "Cke1m7FtCp8w1ATjBz17BmrWfXuU8k2RTiHnLXvbnDKbkXsYhbgK9wGqX7Wb9iahTikgtVeUVEJSTgzcaHk5CsC",
  "key20": "2y9hhWtRLHdF34cz4joSqYhbW66MREYTKoFcgsFJbfY7zeK2oP1F7abU79qxuSE5W3xtU7oL76z4mfTnNJMKoVtE",
  "key21": "spP7v3oNhapgCCPPoUeyHZavj3rDr2tdi3XknA3aP4RSQxsv5QAFrwCv7dcoL39pEpxNSL754szMeny6TRuG1Ag",
  "key22": "3e62fq5BNgEjWcqT7RVaaSgLk1LAadEE3cd4NcYRGGT1ycS1qqDVposmf4j71bN63T7X33PeajJQqaBQseEszQsH",
  "key23": "2BgyAJ73S6KyskTgcNURF5CF5VbWLZqJuPo2Ly1w4d38FE92heaR9kSzdW7xH9rXKUqA8wGuFHWjBkak9wcHT8zn",
  "key24": "3iY563xJM3uNoCXyZLsAAJxD6z1oYxf78Tw6DzZApaZfHT3YPuPK9W41iC48CA2Jasym5uepXuTshBv5o8yZo424",
  "key25": "3K9vYuFaqoRn6pquHEYoJFWb3bj5byE79H2aaUrUvF55zR2pjJnfVxCNHx838YaJY5HzaguBe6HuVTyL7v6RNhsJ",
  "key26": "5ZChxoTV7REqBnjeYjeVMZU1qhdeYvB2NQqcWV4otn8KFvwyjt3tt1x9JdaXztVJMqWuSQTdMXTQoh9eK6YdSZpi",
  "key27": "359n5TDjLQrM5tQpo6oWtZVZQ7KvCn4op5nzvGaugUw9dAbtxexwWJWt4uccMsRh5aZN1jhUxB9sTG2yCNqnERiA",
  "key28": "3ApecY9QjRkF9afRcJ6Y9PM7KJFH6wWhKU2k4Arxie1hEusK76sFrLQQbYpRTd6KJkkdtBFBmactjcE4s9TzvtQw",
  "key29": "4hip5qjL4rmcquQK8d7eY7Zr6D2qmkYjtBk1qLmTWnF6r16CBb4mRfx6c9ypY7AYngqLmNCgchcCwGo6q6JWKwYP",
  "key30": "2Asrz6DHsHZXQBrZpgZZ9p27ScjiaVsTXAx5aovsRJzqSUtHFMfd6idCfyFisCvAbGqERLDrCADh4Hiu1riHLaPf",
  "key31": "4E9a9VatANnkSHYYCFQQ5yBVsAcb4fQNZYJkHzfN3PuVge7mbVXFL2Yu4Ru4XFsWFXcqsa2oBHp4pDH59Dg5VV9z",
  "key32": "41oiaWpaxCbPHPvXxgon6Gu1AA6RQbeDusSbWBFyXVuPNxjn55kZpBJ7CLyJxy53HPUZgfBv6mLiwifgzgrgERrH",
  "key33": "26Pa88TWKKJvJeWs6smWLCTm2ww9Ah65B1tzDLraLggNAKb8FbDh8yg4RBJiwr3eVC9yg6DCbwVFMvjxT5iki4eC",
  "key34": "2DcCmUbr45YEjyEiRSSfBYCjPvxkovSvYXV2LpgmGV8RGTd6XBXqzPbsGmo3i1fpeenfEcpHrs4Wi5Eur5U5Ebzw",
  "key35": "4HeieVJkprq2JViWrjN1TwQP5uaSZMrjWmh1PmJvWLFQfmpyxXtLqLtuZpJSsaEqtYTh4wqR4MpW2aSFJ6HuMztq",
  "key36": "38cJxCic6NgUmoBdmwYCZ3WieoUGMEKcPLLAQM9eQENHMEdnT9wfncCWsH6Gzr7pzZXNXg5QJihfFHCjXmCvzbin",
  "key37": "4ZXDg3UduaKCjuECjhvmHjdWNnWE1fxn7CVWLWBmfFh3bzVnZn3sNqcjbvy7HrGChcph5EvuGB8bMmUg5FT93UFb",
  "key38": "5yYz8d6Xf3BP7cJQUK4kmXZz69381ZmHb5EWUQUehPV76SfHqa5VZdppxASmcNiVR8wC41YzbCJbhP2ickLVJNFz",
  "key39": "pUS1hN4KaCZrKFT54MhPb8kpxQWfo73i4KvxZumgKBpcaHZWamQAeVPoGuSb5bAaxtdUyXTpMa1JRdw2PYUNeEq",
  "key40": "4sMFWY938zqyTsbgyKq7fo8AruBqL3pGzJPWbhqcPCHRxwSQHQJZpZuhX6eLNRRpxwPKM7FQPGMR5zAY4Rcmdg5i",
  "key41": "3VWFmCcu7XoRLh8hbe6bA7Vx2XDvBjnjayvhoUiM692wD4TnPFxd5zFXbicShZZBPydBW4Qy2uLtCccdyYCs6JEX",
  "key42": "3rHhS2rZJgiMmCnN6zaVEQyDDnWGApCXTf8LA12DiCwCZwpPUDzGKHrpbxVkeq6t4C3RHzsJjpK9ahy3FyHStr5G"
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
