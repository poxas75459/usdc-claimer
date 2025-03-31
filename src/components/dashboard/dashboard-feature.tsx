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
    "54UehT9cktLSiQVPPFuV7MrYoDyXdJnRJnrWWxTKo9KjCSpBYxAmiFyioUnicZfe2PMUKymLhrAP1yCtSs9MNzXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Am9KW4UWE1snqZnsaGpWtfxoNNUxpWurR1cCnUa14upyP6nyutvbsDJCrCQgbBjmhvDuvQTdjtkMe2ixedGTwkK",
  "key1": "2D47nNcKGRvkTiZGCURHUU8WDXFNjvjQnJtqxwXhzL21pUvCmMviPG6rfEXAguugefsXF5XA82s3MXs9T4kDVp1j",
  "key2": "4JDQpPts8KrJAUX5BQgibQyubedcA41YPtG7p1Qbk8mRPKwaDibDFTjk833afj8CEwNhYzC8wGHJjSeGPSmAnTv8",
  "key3": "3AqtZ2EJowcVjV27N3LJTxbmqztSGw9sQVQy6y1PVpHVBJvxWQyE8zzJWJQ2NtZp9xg9hUnqGcvbwqgpUkDPnj4e",
  "key4": "58kdKqyBWwiwaFqmosj1qUJivBk4SmzWpTAw523JxdxqvzgbjTCaBDDErbocayrpFkB3qFHDSfJ81ozSwsRX9J7h",
  "key5": "5rxXfGGiX91oTsnxKbvj5mS9PML5MKTnjg1WuDwikAjz9MHKH5Njg56XKDLF6nsxDiP96smMkbYbNztS2s8xAQQ5",
  "key6": "37RxHzKZhL6AhwZ6mmsQLq4vSXZVEtZnopmfRPksCZzZmq4etvxSBFYu4bzZLDE97usejfdKRPtoAwLiJhfKS2GT",
  "key7": "5dShvkjkGGaffJspnFczopFVXvVD2hC75hX2aaQB912yQoZAXYyTVr551kkpHdL1wQrWaPcbVg1JiKzPyRmbskCw",
  "key8": "6Fc5kLRdVbomKdP1Nn6bKVqatq5ZHob5RZC9cpesb413fL5om9KifnkeP5fxjBHNRCEztQoh9nYfrNVVbLhPxPB",
  "key9": "nHD6mfmCjCdbkfDXe7MMQ4E1tkxQn99iKJxwyJh3AEuc4PmzFj3xKcpiq4Z6cu1rxM3gm2w7si7Gx9KsfuGt5WE",
  "key10": "3SoxBucVqr3XNkUGmuXdNwx6p3Am7C8peKG5Qh29qehx1dsJQPFg7caEvkWswQrHBmMLzpc2UcWm3sYAcvL6n5fq",
  "key11": "4UmZukqjSpFZJUywTcrM5V9pT2jx1uMGcXYf1FXyqi8rVbqXq7mnYxeKLwRzuV7ySvchd5XQmMkSZNDwioN6pKCW",
  "key12": "2qoSope4vefoAegURgb91ejkYWtuWFRx9fnVuvCiGTyBZGApAmBSD9qJ294miqpUMG9WXvXfreNWfWCmENMfBrwe",
  "key13": "48C2HRTfVMUL1ayyt4eQEWT71zA4aQA9Jtuhp3C78DX5SWEyK9Yhohfhoxg3aaRA4sarBn7h98MivGyRY1yV6aEG",
  "key14": "2NM9VfzFncyvameFnZ7B7fMVahsJz8ajNTmAYaMYTbt77hp5MfawyouK62Vo3VPZaWTVQdyGtr4ADYLii1By272M",
  "key15": "wCW1xLu7hy3VVe3YVnUzeP9jQktKrE7tMw4SAfg8L31zqD3twrPABZMBF8RkxBFFTZ1L1TzbDggGzJYEK3peWoH",
  "key16": "4yjEZ6YTxTUj5NYs4aqRHjKvydCQWp9eQcqeaMuQ1H2RJhKpi1bEDHBqsRXDPBpS4MShH5tUMp175Q3btT64YGqk",
  "key17": "2SGbrCjiH8erpgDMGGHQ9HLPJpvvACGebVZGSyKj6qkhiztCm6vYC88n8sYFdWGA8voGX11mz1YwneaF9AsZqsvF",
  "key18": "2DhG85tbNsawjHdxGqaSqdtAxhfDXEe29tabXRrh9kUHqobs2hy9u4AQ2ghAFLFMPTjaMLUvtbkXXtWSLum8nMj",
  "key19": "2Q13Vd21QH7CRLDycmyTkTBt5dr8qnDLdVPkA7pYqxfNCtcCh4LiAA2mSUxADj58fpcfh716NmNNp463XDHYwCoy",
  "key20": "4hiUUDpNYSKQovH77nyN3LLPu79kd6hZp3rfTxC5w1XzNqrQnECxKCUmhfLuQP7B8rPsEUPR9KLDQVy5u4U7j1hx",
  "key21": "ribpK1TquAxd7zWrXNVFxYF7R5i4YSXd5CeJkNo7cJTeunEip6DUmibZThQ8dJhqoXfG68nisGVzDPcYjHgPKkh",
  "key22": "4pMujjjS9WNwQm7wMrW7mVfheJUDz2AdnmwWzGwaKBCthRYX1CwcEoEgKaDQg7mkc9cCBSViV9auSNV9vjnABq7c",
  "key23": "2fJHd49jxKtLVGo3B6Xaxm2RxAzVUW8CTkRWQ7y64g7zezy7L4XedJkJDKFSGWFMySsGSU3uxx2mUSo7sH8Vcj7C",
  "key24": "3ALzDpfqznib5mK5QjUdXyU5REYjcn84DnwpgdMggGP2EhRfnwqJHhKvYPiWwA2hnY8jStaeiYWuErDYWX8HyKxQ",
  "key25": "5dSzzZi4ikQuSeSsHosF1Mv86FpqSEPFF5sPF1utdkXYk7ymvCd4Rib3ND3YYZjwXpdy5h53trh3wWDpjdA5vupJ",
  "key26": "2cWVUJvESfnWbN93dkMcQfvoYLUMTyh7xqu8kVsF4S6Z7Vfy4RTMT2LV8ZHs4CAF4V58rR9hP6oyzKmGZiKMyn6e",
  "key27": "5bsa2XkTUrxYRCZXHsph67D2bQ4VSe2xAU5ebh3vNqC3ugctbzH9BJ82USdNcowyy4i69H9KuAi4456RD2QLD9aD",
  "key28": "2gnWos3VJ78LYfc7RHzvToJe7YChRe5gdtgdkX69M4vsiiLwvwR1o5jm2iGtQSp6n4pnjxkKq8QL7uft45PUF7N6",
  "key29": "2Szjs9S8kMTwpPgbsSYDNudHKVjxuzHT4Z7iSz5jSMd3vmMJrm2xKphhNnuKFFuohfvcdao8q9535NNDh9TEsmQ2",
  "key30": "syBFcHZ3bG2NQpUMs8Ai1oxBoU8ZwJ8sTcPiPgbKBM3HPEp2koVeDiHjHz4he6fbmpAgb5pUFM5eeiPMS3xVhNf",
  "key31": "2ZCqtjjQrHmYaYhoAsS5JkgwRW84tzE4CdCGvC5uiuK5fFFHs2z5TfqcVRka7zcVA6THsuYbDXrN8xqVu3G7WQHp",
  "key32": "5W1wANX4hY1Vh9p4m9o3sLGWjZe9jx7pt97VWf65BaQsRop3oL1hDDhp6cDPtCePghVCDNusfh5DbvaoAXX4XKoc",
  "key33": "3MSxxDwTqW4KFJimUReuzdkaaPyDKknAUvfGgmM6SPpsaRSto788zZADbDHzGPV97G6dJGEgJCsDyb2dLN43eYLs",
  "key34": "4U15FinqHpC32qm4oKdsiYP3XnerNGVgyUY1bmpwM7DJk5i4S7tGbfH4xbdP9f7M9mxfu3hsDzVbjh3dCui59iVu",
  "key35": "2pBnKnRPDidRWDSxZ7LQ6WeFG3HRnmMKvD97VsvU4JQnUzrqH754dN2koKroFrfCnMAAs8cTKzuxbaQDJQmxMiWp",
  "key36": "3PqBVdj6HdgJJGKdE2zX1KDGDfkN7dYEou3ArHDP6WpkCFS4JUfkMMwkmGWGtK9rgLiZRmHsz7m6X2nLS5epK6TE",
  "key37": "35CKeU1g2V8VSj6eFrzXf6jfULLf24pFtf1ZvWn4gfKqBCWpqQ9q5CyHHHEBizefST6xrhC2d2MmUQhUjZfMwoQC",
  "key38": "5j9xLrufFfvAweywcKKhQYRCRFBWhn5VA52LmUn56Bvb2eYTg2RRpQ1mS2c2m37TSA8bwfnzENvwVT9juXf7FueM",
  "key39": "3jBKDn894JGEjiHgxjq3m8phwF9dVj1vbQuDeq9TcVeppCGJTSeSWfYkmiuhkMKF21cWtRw1UriimPDoJ5sEgb7o",
  "key40": "3yJNEvjwbkWQ3f4bnGtWVouyMuCnXuSVSiYUk1DzjyPvQZTXSszX4PhwLFF3gydC4ZGFPubmMDmjhR4uZ5cXtHPU",
  "key41": "36YLYWKivgei1Anj1CRs3gtQp23vGn6x2iYBEMwSHEGNckLaDo7G6AKc4HqK2CCubZBAjDcozbE6e4dzLcBUyqbD",
  "key42": "49rLVrqua95MR5Zre8D77bDT8bRKQuvYGZhb5s6vtTyxmNV2hWRfjHpLyKh41ZKggTA6L9ueaH4VD2gsNqtaajEM"
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
