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
    "2kJh1RVvSgZsrtbtUrugzgWxbgucb5JuBe9diD2tGCqjtsXZRdm6zC9axpb9F8dxYBAF8Ldbrvvd9Xauzcw64RBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ob8NGrrvfMKKxekGeXauBXd8w7LTnxRsZY1gsHdRXiSyFh9DM89EibYRVJhhxUJsHw9BX92wAFXKKp2EN8NX39z",
  "key1": "3yAuiJsAvkWKJbpAETTXp8yk6ER16Wd6tJZR6DCvoZjZEUpBxeJAE6fbdpHKqybUA2KJwx5cZeUMBsRDZ7c7vd3f",
  "key2": "2ArWYChMYFDdhHh4WYKimiLgkGoLgYAPRggYvXXsbiZb31M3NNJbU2tQvA1SYiS1CcftbxS4GV9DohpPc139BvxU",
  "key3": "3uLHVJGY29Rf7jfC9ENR3ficxPFeit43fWqm4XhR5LKg3KfBk9mAyMQc3STcBzHmPXx3ZFbMDQWhLt14Jsue9MLk",
  "key4": "65oCvcDetwNbVswq6Rdh4wPrhEm5m7QYtnaZFg38rsTikjDe794GKGzU4XoK3bnqYcqT9WqQZy7HrS8jgx8eUGH3",
  "key5": "33VWeaizZNJk9pnmcMnnmgN53jkMrW4FjFs6FvUg3HvzVT2rwywAY4K31dx6giSRQLysrTnV23AeqhwEZZTTabaF",
  "key6": "2qojzeNK9bo9aDpkJLx5UMpXjrCxBGsnUH9AH9SUhqZAQMvPfdmsZ9X2fYgJdLCauXCs7QQgEZS9WYPhSa1cJVhh",
  "key7": "3bH9L9dMNHV87ZNCHYS44wJKRfxtQj1iERN3eNTjja9UNT8qFZUfzqcCvHvCQ48o1ghLQswdRoE2s27ehCXAhpEX",
  "key8": "3qxEhkvq5jxqKJpYgSbT5bU9Ab4CSCf61SB3GJrCGPDn3rc67wpE3bg71heCWtNjGjq9JU5DLudz58vRFVqY25At",
  "key9": "54chLNXYfJYzgUpNvaUCYpNmkM12DkJY5N4ta7N9Q22TKByWjCVJAFSAywQi33QfxsTohReRq1YHHrUEuTdssn5t",
  "key10": "23fho84WcgQTWb31yr66FS7D2z718StkQejxwzShrbQo2sujz3xiqYd4M8LL7DCyotQymWN1sCCxVch6phZzcyVx",
  "key11": "2yXvxC53s8wS4nZHvaXyjTJ2EVGNPXAGL1aPQqCsK3CP7Lf7Kh5hPHkuP4mTEDZEBmJFVu6GjvYkKapVSUvdBshx",
  "key12": "o9pMuL2zRFcW8QZvKumS1ha3GWJT4sQxfeKzhnn45mRN9pwhVnm6RCLJGMUsD2gPNz8KJRiUd84oDynAgQqSkCG",
  "key13": "3VvqkGrHCFboXUcuC4Pzo2UhA6hvEX76RrtTp34imWBcaQyeCPE7NyctVRTvn44qyQpKUuPk9TxZYH624o7c98PV",
  "key14": "4s8usa2DsW3thzFmtRHFuetKEnxto4eAg97PXVjAWAtPzYJd7g3zH4D11bThprYYSZyUeBgs69EHyyRu2AXsg9oj",
  "key15": "3BVHtrGHnCUqNbpb8KmXd2T7gFpGTSPjhtcZFViasZ3uF5cneE9ViDEAvP3sBqksttiSV1gRzcAeFthvuUvNSLb",
  "key16": "5SMyhcuWBdjd6MRS8h2CVf5wwLiPE1L2n7qtzcf5u8R31zqZr97prNBABDSZ3NzWQQC6zn1Ndgf4mwVmPww5mRLk",
  "key17": "2LjsfgvZzCinU5SEuNQisf46agFeZQLresS9Vt4AkcvS7ivHLK21c2xy4DG93GgtgvR148H64tDB2UNwhiY7v8cZ",
  "key18": "SDrxVZDZyk1W26po5t77NLfnketcP35zPMp6rdq85MASQSmENF1ZkM1jbQmXVWo4Sc48pZkHK17QZ8Wi326MPeY",
  "key19": "jRyVjyFo9H2DMrCz9s521p9EEy3AGfbr1BdeQrekKcPW9cymxhkf7R6Xekwj4wfNx1sUcG1AnABnTtyZXUegnSa",
  "key20": "4K3hKXTc93evyEq6UrHVJ2MLTsk6VysMnoWWn9UEZEcdkZBgTvD3Hp6s3qMbgzQGtfeTY8QQmhddKvSqDxJLrzLL",
  "key21": "PxyhQuYu8faa3U69D5pF69UjUr1FfSwsD4WNDQgALd5NVHpgaePFe6gJFPtKn5Qme94XqtZTa9o6YiFuGxuWyUR",
  "key22": "4pcmnr9rQe8wiNGkDS6nRpywmA7yFEusEkzm5YsKkvdSpg9UvXR4gCzvUioKpZghaxzDev7oLHb6wZjVAWcYK4yM",
  "key23": "2oR7LZYDbdFmZtSrQdLhAQ9nMv4MPWjVAGKvLUU7dLgEL6gT8WS4AYV8QLUp3hPEpYG5Qn8xTAmBtvRXaUS69tUV",
  "key24": "JEezchP5BPEWhd7WWoXh9wi2UEfufYeSjEKbAMxqbvQqxsVGw84odw7FLeJbgWsRt7uZeovtuZHNLDuQZsTKebh",
  "key25": "2UYwEEEcrhA1mvqeWymaZS2YYKZwR8Nc1auKtVW7VM15G1wUnNJeXSLQix6g3SNXweBJgZXmNH4nSWEjayBBXiWT",
  "key26": "2GGKcNydUGysSV5SLcEZSrvxVRHu796ZzAxoCZ9vyd7aG4njsxAdjAQX1xHt9vzgQnDXWMXKytmZXznA1kECmT4A",
  "key27": "4RgbUZ75gjUoG94BJVbpqgSwmkFrndJDXXyKkw9gmXXztRVzKpdRPkvEneUE6Nzs7uUg8AWoCxEBG3M9atz2JfJf",
  "key28": "3XAHwGuJSkgvbF4oNBhPM1w68xMqYekEQyRaLCr7yXVD96dinKVpqxmTBkgVmzLbVZ32nnqKhVoT2b8XpvJHe72F",
  "key29": "549GizcihWQaWHS6fErFoz3ZfGhScM3ZH3Vak8mHW8y4dDjNw59Qf28Xrrk9Mb3BXSqkTWYk46R3xKaY2rqvE5Sx",
  "key30": "41WoKLV8y3Tn5xdLZPEbg9t3BGHY5WFgxdAmAxfymPknBSqbfCWc3samLqigmHR4HnGurenHBzLsvrriZ2ji6jxD",
  "key31": "3oc7BggKpZZVThdAB3wNzHjmrXYCS1WpmyU4Q8DBUXHxrTVVNHQbg3WXgPBaoyuftrcFJxg4kUzENP4oJhM2j5dM",
  "key32": "4jQV2TqbogzxXB2if1UVDiRL5jjW2e5HgscrZfaPx8L15d2siVwfTWQUX77aQvQT7H9SQU32YYPBPc7egXy9XH47",
  "key33": "WMSJb114nrAPJvZHGv9a3TJDyTWoHsjkZpDaUau3QZgsuioPgXMxvTfpP7E7fLtnDnhoYEsotC8rVw6kLYneQ5k",
  "key34": "xVbodSVcBZvjPhh5cvXcQAjCBHNiAw4eD9PLXaMTkLz2SrNTRwqSrqtgGAe8Y97iopuRcd3Tdo7zaV7TjAqHuPn",
  "key35": "5pTHuNUkoyNmHJBLxFPBdH9aaNFg27p9NrkdKzrD8JU28pXPHzE4fWM9WsDkjzYrKABmXwaYyuDe15NYnTLU4pup",
  "key36": "32AQDkzYRRaZHJfigufEQ8nf1ouy7KgMZNXjhGPR6aGBGLSvmwMV6iJNQbTgpoa2QTpb1TzcfRjxBoYNbkRmrP19",
  "key37": "t4eZh2ztUmkdoQ4KjsMDjvDJBsCauPz6n7TCXURayFGmP8osYuwyBKKYSSSDza1GoQrdcvpWjojvqz9T7dDXdxC",
  "key38": "2ncDVViq82Wgky5SdMP2tqEYppiLZGDWPvVGqSBGZ4JcSkwefh4NvzkkEtu2Ls77uVHbgyMRT5nRuLDZmpUixM3Z",
  "key39": "28d9MmLD23qSHctRc7Tkn2aHPCtrsi6E47y4uNMAbCwvNMpDKTJKHLVgzCcBfZhwpMR4rdL6oiCiSLRef1CXQu2x"
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
