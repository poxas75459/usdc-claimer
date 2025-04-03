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
    "65uTjT1otcaykLfFdCAX8L51k7ZivzXN3SJ9JP1PiHgTWvKh42yUrK2tzzLksR9a7rtiCBxhDfPaPrHnjKN5qo2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQJ4hsWE8vwtBAAK1svF7ZXrBsUyRZQiH2dDsJDujXbn1N3hrn28rC7VVeJqU7ybdX1rNJCYkx5SFAgFLf6MYFw",
  "key1": "5HeTxAMX94ek87Gv27u4yRTAkpux8QzXeTWKy9JphAPTMzh4ZbaitKCJ6wEuwBt36G9rbF8Pi1Hm8pJA62YA1FpT",
  "key2": "5SwoqrrNedRLv46uq9z3EFNBvV5rCu5EEL577o4wbMBVEn8LpGuq9AopbiJZq6RR1noh9ddSkRBXCG8xSzvXra1U",
  "key3": "2vcuYqALg7GscPbqZ9si5jkPteCBQ5cS7zoKNhtPmNT4yPTut5BCshCqQjQTnU5yowVV54ttrjtHKp99vRPJPsnP",
  "key4": "3YbU77fRxG6gjtT6DmY9Jsmew36FTiA6xnaHgEFqAsufdwhSFu88vuB13CSUivybCMq29VqZNS4fjZ6ppVrFTmne",
  "key5": "2jkkj4VjYgnCEFvpfRZZxcYJ1JNK5cgsJHhSFTBhfJwdBktwogw3jUmLfrQ1sTY2vTFNTNFyjGjWKJCvmtqqsDPR",
  "key6": "5MYvTiJoR7qhN8uFBtNNH3rQouA1qqzj9GXdL8AFUGcbf1rtndumfE8ZbqmZzgaLjUtndkzkWjyUksbeUn52SyR4",
  "key7": "2Jhu9uEFobftLzEpZwwaywmye9vQMdM367vx1ccMWMmVBEHyveMVsc2RrETsfsg67it68q8TR69MPTAyCiERQWjc",
  "key8": "5Aopgk9GvJCTsNtBZqoCtGipTi19w8RWDtXbhc4QCE8hLZTy4AdfGkYPiTAB9cVPpY2WpVUNQkfMZ9obcHYY6sij",
  "key9": "3UkU3kXfP3USoZUtqr3YP1jfdsGRGGnjPqZKbjiLbyFKNhtT2czjHYYVsNmpi3YEknJYRKcywQy2QpHRJJdm7bAd",
  "key10": "kDgm6MQvm4jxDEU3RJxVC8mrFAogSj8FfyYdxnc9qn36F1Y5eF9TUEBbBJe8KAPUkBWCn7tPGN46mdSsrSnCbiy",
  "key11": "64Y5zS45asHdJfTp3gihP7tJgp8a5fcbVk1h6SQjGt5rJbirDz8jNfUKX5eWvU2GyiAc4u1J8rmhohM2HWhvahjG",
  "key12": "vDPN9AxgoeWRfWoXaJj3cWAuGLYwJuMQvrkN4WwuNpoQErSMyJrnWHseR15rGiB6XrdkdmfrBHv7nnxn2hGFRuc",
  "key13": "M51Q9ysCmsiPw2YLyanJNVYyhC5bSA9covCWVPWwaQL95iu2PUL1RNB7nsSTSrF6dzPJy1tAFc9XxWCmsLUNxwp",
  "key14": "4KQA7BLzre67QaNDRu7PXW8WXax93bKzKq5n4Lurug2fVbQVUTzPxXxtJahojFVv59suprNHhq36P5Vesr7wMb28",
  "key15": "FMbBSixR353vBcje8ffkqWG66oWtbJb6fLhJhtyPgyc5mwon7jmFB1Yv359xjYnUGhGyEeXyKC6p2ogA8kBoTFU",
  "key16": "5T98Ah2d7zsCWRYCCyWfYaNr3pghXsoU7FuNnB4pVRzdKr3mTcvxWv8A3W4KeZyJFXFhePWrYpoqQBqVKTXh3DFA",
  "key17": "3k6aLZK9bToLprrZrTAgep6zZmyrbqYKa7pb19ybL675Zy2ZBh2dpucQEzyGKQnnutk4Xh3q4d2B7iPCaYgKttx3",
  "key18": "4z3U84yHkitbVLLByFBGuYtPKJjXjwoEwASfqSsLFV2C23F2s83bvSmKB6ZCPzbGMDa7DnmCgx5XXNeTcd2pb339",
  "key19": "3zv8QcsWAzpoPEUSwjj7dEt3gnTjqd6DmZxipJ8KRUNu3agWx9jZAfATEWWPtZks6NRF2Zy8w5ffR7Ja5YZQR1dL",
  "key20": "5wHUbS3yhhSDQRBFDGSATh8dnessDuVcZ7X4iZPs9rKH3KH25Q8Ui5ntEKJFyyi9KYkKne5juZAiuc3wkzecremA",
  "key21": "5fE5zUGRzyJcoSqYoU1pWw5MPUNDbk5WpFookK36StQX76BERc15BDztVnLkSA2nshEwQkF6hFjZ4t98gpb2afPy",
  "key22": "3DGTKTZjhRw88Hrawg9k91kB9sStuonatjDJJe55qckqiostYqRbeSYipedxQLfHVMaw1f5gQH746fYCFcsmGMyc",
  "key23": "4hiUsAeTfzLhuNNVWywJMP5j2XJwjRo57tUF42E5Nh4nc9MotZjaLtcFMazApstrUS88DnNGn6uSfEXqVPbaBqgv",
  "key24": "4KHCc5XzhAoTQ6oc2DoVhhfynnK4bP5HXwYkkGvo5fwDqZUfi3iVwAVTGvaCkQGus3373gL8EykBQjK72NEqsJYx",
  "key25": "bydNLF9Pooij57fypCFJzE2bYySmGL9S1XZRRdfDK7AioNNa25YDdj6dyxnBSSxGHR5CSWFx2FNqUAQmgpJC5Pe",
  "key26": "5B35aNEdpxayPtJBV35r27J63rpK1STxzugALQtt8nD3DtJfRGAkGcPVq8rTRsHJ9P5rVDkEwi8wqnZnTQHZnkYY",
  "key27": "256WJKwsk2iJVjNHbnvdrRdRxEWnSLX4ypf48TeyFF4aEFMomFqxivC8HB98cjujWGgYZT5umfsK3Bp1uYEmMffT",
  "key28": "3TxEV7f2gF3K1zZq2MJJQJysUJ7LNfsi3d4d6ZGdySGv9V9r1fF4QYHr14d39zBUhMu9Vzbtsc2KG3FDNb2pqvpY",
  "key29": "3C7AdBnvw9wo5sEYbQ9Rf2saB9sMG86gFn62VKvEbsiGPJz6APTPyM3vt5xtqh3DoNWGbYaxE7TD9ShxWoprKYQW",
  "key30": "5FyFo9VA2TPMaD2Dm9ipb1ujbU3u6tj11rzgcnvkfmrH4ppRSKjrqGQBWeRcgGgWtvufc3x1evDHgkTQtGLyNGD6",
  "key31": "5AgKfbPKD9xwhGgUN5jNQczLao4TGic5oCkhLucpKyiw1yKcXQty1UA3zpBBheR5UKyArzYWEFU3qsXmdsADyXUL",
  "key32": "5Emf4vugKKPBsjRVpTL9D2UGdeQq2MKV6XyQL1d7xmTy2R7WNqUrZuebC3L7zCWMG4ECa9rvdfeQX7YXrfyRPX4R",
  "key33": "2JwxVkLBVNyje45mFevSTbBPyPodf6H6dyg9txNqnxFTXf8Xq3VTSgioGwquyv8boaQc7qzo1pAfibRet6ybJpmJ",
  "key34": "5bLwUqh2pGHXTsM3En9x7p5hb9o9d24hDJNzXVdNTqK4eyzZAAQGKrNioA49xfqUNJw14GrTACCsTcLuC5Dtv3aM",
  "key35": "473pmC9HmeQLQghpP3WfHyDR8Ksfsbr9PAEc41mf4f2i24C4rbLWwvWWNhQkefHb5M15e1BgKfLwQVv9xNp1PujZ",
  "key36": "3VGQFyQ5iQZCCbucDsoC42bPiwyoo25Ygei4P2hxRJtU1Nn6NG9PhuRU12Y46hchtSScTfC9E9UFzBkWcW4g3eyy",
  "key37": "4w6BxCXmFCTS34CFkWZb21t63z5bX62NkGUA1nvNzg32i5tq6A39WYYbXWQCXHuiLEXoz87EXSAb1DmRppkhemjf",
  "key38": "2zLzdVEBPWvewqtL75Sm6PhgXaW2kiteam8UqBoYu5AinSas6LTcLGKRffqTXSumhrbPxMJiscconnfaommcDGaK",
  "key39": "3H5pFbQQ7Gy3QZctnB3bdmihhKjbNjLVimptwrkuS6fyh4oj79ZKoy7U6VihQ2G4rFAtXe1mrMLMY2sQH6XW3z1c",
  "key40": "2Jjp6qYTiuuhxBbyC9jKFpn6WJkFzXi4fdkXpdyvhWCRJrAEB2hW93FxxfP18tLkN27JiwV3XkdeQ69ecXbgFFK3",
  "key41": "2YuYw6zkLRzoP8ot3HBtNnuj2RSEQtt5SrAcpjA1bDQChsojERA2q91uuEQvj4JPWQCokZDFFRd7wWRtvipUjBdm",
  "key42": "4L2MRV9hEZRXQ8ruMSjiHjU3yrsLKAQxvpQYR98Q33xarAX6uf5D9JuQMPuvkyAaSLym9VwkVFNmGodVF254UJXj"
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
