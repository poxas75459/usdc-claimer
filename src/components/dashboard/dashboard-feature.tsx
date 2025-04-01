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
    "4upWzoedXUwvdTv2vVKCtRAbnCfBbsR5Ls7fhUVcjYKa5uRtgKc4u1V2qHcYRdMyxCqaj7xPxHrt3QEpDMzp6TAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XF4GdCok1QJh7GxWt6pxXfrwQe1hPvRTS7D7JSuYdN9vnAGneNYLRzLdHdhFATw1c3Vomfz1aVAiqj4tBoK9F5J",
  "key1": "4HLz2cRCgEH6whmneHvYmtqyM6jnxPg9y7Gg3F6Tqe5rvFTWQ31WQowXL4mF3U4XDc9tmM92tQ9FFYb3rdSXPTVy",
  "key2": "5WWwoTinNxVvLaQZq6LNyQogZQNNqR4Y3RRkofGRik5CYJcq2ph4W3u2KF5V7ebBSowiErVAt2oz6vDE56ue54Jx",
  "key3": "2uun5R9un7BhDaacbydp9H2zQJapgdf6Ny8Aq98QPHZSegdN7QVVMEfJMw2p4gfbQJhtQ3CJckUEATeVfwJrKSEz",
  "key4": "5rVRWCwuFLxPVTn3b3HE1AWnkaVQdiWD8cW1Xg5LdjaU7HXF2tsvuYX4SD41nrGamoLu4hKPnU7si4NaGzuS7KJL",
  "key5": "4zoB4zqqSBMExqk6EaDWZ8EyH6Jw3PUhBxKu6L3Yoygt5wTf6aWtAM5MpExeYKMBi17uiRYEm3fm9vGHXvPT8uh",
  "key6": "4wWQDd5CX8gZhVtmhV8JxH8Tp1kSPmCLbWWoZnFQYQABK9zGynZgPJ5ojNjtPazQMHyEyMzZtLAAL1GYwX8C67tf",
  "key7": "st49ndJeZ2D791GzafoaePehqiHJABSDYqsV2ia4JQWuZQQ12fkUZPSyditc4LBQ6ai8mg7JX9dbEpGZcBaByWW",
  "key8": "5uZfbs8H5rf8EvCv9KArJADtmZqEUcYvLRMqzSVExxg4KZ616NmXUa5a3RYd4FhiZWgRooGMk4xq6yK4Zsm6DALD",
  "key9": "BbbcSTdseVJvbnuXLe3vTsKM4oHRe7yqTzTnHxsP39VUZGv8qNU6Jj3mCwakdURaGV53Zyiq8sXYUfpjTHc2yAp",
  "key10": "DvAPhrtJe8wMeG2MYTiSjJZUTSH7LtyKKtUL2uYMtUvmj8MS1mnnQYS7LS6BPvBGUDtmrLQynXXMWDtvPVRo8bH",
  "key11": "3nZhVXgPt3c9PQAhrzVNfpPSPrctkHG4ByTv7ky2C6MKWDSnZBnSBUQir8D6FrR2F48y7ERDCUCYuXH9tSAJTHxi",
  "key12": "3MYHz3eiTLLzhEPHBoQwaGVGV1wkJpd3rt6cQyZQeqXxg8kePN7CtHzYyP19Uf54odmmLXiH1jdyXLem7RZ6Dfyi",
  "key13": "3eR34s1ipZ2r1RFCatSRkEQtS2CxuUoXPsLB9nWvvynLVmL9zcGPEcruNiRZJS1UHPksYDmNQYZKKFS9bP5STEmn",
  "key14": "4HniA4EyX4M3rjkdkvj4CD6wWV4RPsKVYc64nJsGj5q8kveE4fCLTCMirhZX9cbFveoiETMcFtJNS5Q35c8akVBc",
  "key15": "2DkkNGikRymmESSpKVZduTYAoKoJusaNoUQhd19GDNpDqjXxGVA8FW1m8e3gCxW7mkgjnGErGmcXsegLKjUQeP2D",
  "key16": "W38GUSYNLsS7ZA4F1BNa6bkGKPHsFqDDKK5npRc7sSEqP31TFv4ExC66zkMShwNHLLskR2ainKqmiQLKpcttArM",
  "key17": "3cgcpkJ32oxb2R8akEZdUsfS3PyDQ7pxvW231ZoPSkAwoQQ9LrYdecuE89VvwNBFEp3f7gVT3K5KHT8u3sRUcseQ",
  "key18": "2sbrmDVN7gED9hcqsjm5bqFt3jS4JVwSsVVHQburT8ZvzP1ssVBcCmGr3Za2VteAnNtQYvFxhtw8YKy6v7W7ha6Q",
  "key19": "2LnGDVmGTveeobR2bmf4ybWvVV8Br7k4dULBg2TqoZwHC8yUgLeqTayfEWMNHB9iq7A37EASvFLBLU8gz678xeP9",
  "key20": "2wPrNNowzoe5EjPRPHVSu5bzsBet7cAoSQnDmfaiYyWYimVpcLe74uamhHp5naCHJKjtQkgSo1h7BqVt1gDAznJF",
  "key21": "dmjGtsK9ingBKFhvdfieKzK5GVEX8wbkxZtsUJ3gji87MWmBbgQw58W6FDVrhJBtXMYoiFmcxxUBZzRuYDDsUA1",
  "key22": "43XNbBPJXnrkKhVAWbXLqGZ5saJwUuyMZjuXM6beky2YPU6qUTmz8k2XYv5W2WbJmdaaZRxhPayv2uVoXj85ZkGn",
  "key23": "2JxSD7BihNL2K9mnFh1KQVFUo3aefW2tSzUEyEng4VaqRwuiSsiL5AKXQv6hDhcrdnh7MvkB6ZKCQrp3ZaQZRNSu",
  "key24": "55LjdjTSRVUcA8trQbvKprfKM9J4Spg8Kq9KhMgZ2EyhrxxcR6WTEQN1vTe47FSNp6rBriqXoZ2AyositvWjm8sF",
  "key25": "4cvFn3NN1PvtJHn5EHrU76tnfQgRB8YK1A4E9Eg6JsXr6a4t2TCsnAo9SfZVFfBBfsohSx1kdgKPuEagrM4Jsfmc",
  "key26": "3uSGEni6mnZXt3kFSUHs1tDNcZCyQAunoAcQNq2NJt6FJu186V4Q7uSQ7iXQUGb3XBVeJJf4L4nnkGGswTnZWRgZ",
  "key27": "4L57RrVHT8iArQyGXmmxFEfHXsbqwFwnbm4bCXLLqvLKyVLAnW5mHdqeuf66twbRtFX8Cz3pWKqTmjBT33Te1PqC",
  "key28": "Y3KBjL5mxWKrFuVsauW6MP22ehXnyKDcZbvYXr2tRCgNLVgzqcvGRgh2bDb3GHUAWHJF1xgpDYRDTrNqnV4rGPf",
  "key29": "Kzha9Qv8uYxBbf6vvGGco7dcN7dhMAhUhWyet9pLuNjBn1YrvUyxe6HNMrRpuQM7QPYhEYysJNsy7bfvaGBq4cj",
  "key30": "4pptogmiG3gGWDnDFhGcdP7YNoPUfnvsNtYArKKa2YMDvFjJMpe5dGAuUTjKcsVY16ezTpaoYqUf7Jgxbuuqi8vG",
  "key31": "5bvCuivav9wiheuqDTbBk8FPeysV4vCA69tHmUa497q5VK5L2qgakqza1KY8mfwtDg6hHbghC3PUgsFkMc3TZjK3",
  "key32": "4fEuoUdF4bUr9Da7jBfNsAc5eY91nuwrWSPtUi9Uze8ttDoimkAQpVZ9eoZ6KoCdPAH3wfHfm77PZgWw8R4w8rFm",
  "key33": "2SnshDvBecaEVUhdWNXncSgDhyrXdBYjq1Z4erW5gJRbj6hy8g8yr2CXFc9hYvPXfRKktWPHZXjGnJqb2j5kirPT",
  "key34": "57Qa6Q9mJwTgqA4vSYKog7DwSH2eB6964UuibtX3kezX6xyX1JxZ99BcV4ECePsxCwSHKouUrFfnGSLirkTG4dkU",
  "key35": "p9YwvJpGLSha7FqZUdeFnVeMSqV5SwfVAmC8N3H7fsrUM8JR2cw8oA3uU8jjenasVG7QEpHAy3aGSTCBf8TZ57y",
  "key36": "4XrudVRqbMbYKXrf1qqw6Xj5rqRBopHDnBPA4gtyxutsfCxgZgRTPfVKzxt2PzvSSHqaKFp2RBvfJPHjZFp9C8mY",
  "key37": "3eiB4ZPKRHWFspxHT8PfmNcmbGEXP1smJUmhsMoQxpZVZpBAqYJhftbLAJ2qKH5dChT7FeXPbZEHaDRyeQcJ9pZ3",
  "key38": "4AYdAcgMfCQ5227xxixQedg57x5wATePG3Y4de6VFMArkpep1Az7wsB67v2jANtRUThKPTXfUgZV6kDGXvHwQEq5",
  "key39": "XC7TrLx3jomUqAzRpyrkAoFg4gHBcYDvdYsYFQk4ao4vy7GtRhjyp2UffjUN2J7FAFn18YYtZ6Ryz33Mu6fNd8X",
  "key40": "5BPv9mfd4FNnRXxg8DsRcHmLh9t3SiGWgyBRZ4sCFPDYBcSEk2vAv4hxujaEXkMrg9wbVj65YivUW6XiHLqviBBZ",
  "key41": "5L9f8cGwjYtmd41CSetn8t7QZBurkSEbudqhxhp99nuSEYiDHVscoUBDj85Ptkf6w9rhRm1vy6nunjpJW8LH51qa",
  "key42": "3Nzc1RmCpBK7vo4ZUrk2Pi3vhKAYjitsRBNE8nEmV4axnMx17oHBp9kZ7NmXRLrRfoLycx1gn6owozGXpJPKZBFe",
  "key43": "hzhHHTZWumNxivBkFf29USYKRyDMGNEPbHLcsPAibqbKZMdHzgDLSeodNcwPkktkhwWKPsonmRSYbUauWFb5Ff4",
  "key44": "56UJ38shWW2z49qoTB7SjRLxd44o8VbEAkkgZjYNmqgie7UCybnuYg1wivAcSR3cCYMgVzGxv5XQecfCphwDMyz4"
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
