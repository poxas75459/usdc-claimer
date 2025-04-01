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
    "4CP7gqJtWRk9QnH2Xvk3Aisjzyy1H8k3wCqiCXcS7mrd8c6WPW741kbapS3WTkgJqEoysTxiVqB8jeuxyGFV6L96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syHpQHcaGmb8o2onUDULSW6yAWgHnALvLaqttmtJKKSEcQkRqFsdtr7apccZadzftp3ofiyg7QZ2icZGTY6b9YH",
  "key1": "5RNAv8uZFpSLaCD2HdpUgtfhjeGCyGxRYc8SBC1W4A4wCBM5ChNAeBs5iC6nHXNTncgV51nP2T9h1dxHrwqAtZh9",
  "key2": "62zQcdihFFYo4JAaoEowF1iLVrHGvos7EwbGkUVkzLsQEyYuwZFdbeoqhsZaXnMrWtAyuGNZinnra8BPcESjaSSt",
  "key3": "4zUcQhT5K6w9UYp8WPtLeR9zrDirErSeQTFZT2UnyZPQ2Am4E8C79q1ULqVbFQ4Wez62S1jG3mD3AjmDjY8isqoq",
  "key4": "3zuq5MXWkAwM4eeHoRqCHNob8RPxpGVzgFgbTWTSb3aoBX9qzw1LPGFK2fxsJuSs4coAG5hSEVxhqvtLhVKYNjVg",
  "key5": "5vYaobgV7dbvD5tz6zcfFrHmYRtKmpHHgxJxFn9CKkRTQi6M1ns4NuQxzGFMwJtyZs49HNxp2a9AqP5Ss7e88fCz",
  "key6": "4kzdvbyabaKkPrR5kdVGbAoHN5mgTGwMq5QZyAgKm5QVxzC6ccdpjvaPKGmpGApmg4Nf3uNeQ19gisYzqASixGMf",
  "key7": "4p11SZpA2h7qeyqF281QwBKu2BfWFZd2SSUKecz8ULtHNydgNRa1oY3nnaYcewynnN8KjJyhPr4QBkH9eyARKqJ6",
  "key8": "PAiyKi54jrikN8skL2F3rEECV7K172tQrRfzMcVZJRXrnJjTWcW7VTtQan16eK2w6DTzKoz2MaCzuR6KqsjJi4T",
  "key9": "34S2a2fcCicEKhX1N4SQJ7mYhehhMJrinVvXodVw9YHMjDEQRpipyJjbaD7RE4WEqtc7GYa84QKoNy6o4sRHwFZm",
  "key10": "2BDtC8qSQFbcsWeoCkosjTFio1F5XcVN3oEydFK7tCfDR8YZv4U2sCyAQbyvZ157MRvsYaq4sq9ACPigfyYo4uJt",
  "key11": "4d3BnZttSHMgZQ2LwWxvXDyz1Lsd39fuhRh6yt7RmFvQxiR4LNTrm2VXuQAd4s6vKusZDJs9ifAVNe2hW1qGhj8R",
  "key12": "2WHiG2ckkyBQNRvvG49hTvX1kstvULYsrxSdDU3w3jvn53bgYQxrDaM114o24qiA8pKMksKV8DMyLjz1EyS3KqUn",
  "key13": "5TNwb2F1awRGrCvrLq8E9pHzYS3g3MLkv1rE4FKiizSMUvgPtan6PQtrNhu7Aqsjes5t162M6onC8s2jjpo5jc2m",
  "key14": "JWLP1edfnKTk4PJoQuokpt3Bvx83r1niSLJSFqSoczmpRAdQ5ESatJsVTGJunjcxRzT9mrqrHmz6MnZ3fK7x3UP",
  "key15": "51mUn3zCn9KNWEVLJmPtNNsAfb9WNGzmcRVe9zJDZVrMdYwyXYEjBPM399NnjUKvJhusMMBTHtxAQvZ98yN1WX3c",
  "key16": "4cf2qzpGP3JSQxGxCFbkwsMSQ1qQBsuV4ypkWqDL1HG5216ZhyGr6qhb1jaSPece6Dn7kyh4FCM8RU1JsUwKfu92",
  "key17": "GBa9tWXNhqJNUQTfsm4GiWdJfBwNq7A4YYYRm4Mppbp8o9xat87Ra3yibLUDBEw6FEbBTiXmd6zWcuFvVRkZ4eh",
  "key18": "53SMNy2gBcEKb7ig7CLTHSiBNzGWpxrMBre2E94dBb4mv6jTnX5j8iC4zr1k9wuBQ7ctfxjM9ReXYFewDoa9fSUZ",
  "key19": "4jYEsXDFNQ4SuEJUrccg8qyrGZu8Ve9zi74fNeer9Pts9cWNUAxPuqas4cqErsk6WryqvMjaTriTS8yr2yk5z6dc",
  "key20": "5JvWq6PFXkk8KntJDBDzMt8gKnX5TzWiweiRvHDH4WnBgwLxcB4rZbCcPqZmNqZQCfgzVJetYb9qvGPAVmMRjZN",
  "key21": "2qkivY1xmNHHooFVbZZVKM512EwBheUWenV7owMVPFtjp9sikZFmwjSQ4HyT1JnDJNamsjm1HPLKBzpcwtP37D32",
  "key22": "3T2tHoNY5sZMEQpYC7mWfSv8D2JYwjgjroJqq1Uzmi7Jfj4gCXzxQxGGTTnXfo2Krze7VgsEyWfWaNa5nawW2YUW",
  "key23": "3Dh6dEncENnsSb6ftLihCY3u5kXUafvzHVtnTBYzjoer36wvPrDU71iXZv13S1gTxJ89wUoeAHnTg3DrFFuax9Yg",
  "key24": "3DbDUu9TgZiyrH2tQwDiY89giTsjBLDGvhjPVcP9hTS8BhLyvWqR4fdPyJA1bFciChoAADZK1PMgR3QLyc3kn34g",
  "key25": "2NXeqoCJWkMWh4CvEodNtnqVJXt4WnFtgADJGKkVeexZZsDctrhY1Km5TTCoJQ9s7KXToszWn6CiqeUrEU3QMSqL",
  "key26": "ZoBX2vDZfzxJfC7EXBydVZ2TSk6CAhhmW9Vijrrpwou7sEyYrjFjoU9hetT6fQCmnFBry75fGQBXyquSk9pvBFj",
  "key27": "2A47zzBww2KmjeftnVBsTeaq4Gewj3tHUmFhX4MnPgxWFLfKpeLTWor96yubE1Fb8Y8Z2PYDtmpyPFqT5383pLaX",
  "key28": "nCND91kg4CQVMFgyHgqvQrXYP2dv7MFRCe88HPLfnqVZLokPhcAPLy114e6UeuxLxFNBMdttLpw7d7msZGvZ6xW",
  "key29": "64tzC2fNxYPY3pXRUv3MT9PTsk7YpBYtBa6SYfxjZbMkitN3TyMi3iXyRehMvZLpuajL9EosPtQ2AR7wEgYR2UeB",
  "key30": "2sY7FAWXTQiS3p382VWGexZLNG4hW3ye9MhU72jQa2y942hsRpzxxRBjf4bts8vu29ZiEvuYHPswqezFpUbTqkYV",
  "key31": "5QmD9Aha1cdJPcwtrnd3K96K5JDjSdghLzNoPBQ1Lwn1ySEXVJ8x7Cgb8pwyexJyAhtGZoF7HTQAw4f5BNBv6Pr4",
  "key32": "3SsKepXScYQopRbyPXEYgUVcGa1Aznc62mi5g5zFpydWwJ7Vtn21DmrELdq9WeRNcKNjf9Uho9mNczQKkf3thiam",
  "key33": "3TrFsXMbqtLkV4ynhwzgLu38i6siN8ScuEAcLSfYRTvZqwL5YXu118DKfjdQQCDyoWfEzXScXnx8HzmeMY6K3FBZ",
  "key34": "5ngDHRwtALkLWJjH6Zhbkp7wNhrifDmGuvSWrHM1NXUPx6Zj5ucAHEV7fbC7NfZjyEFfBAxg3iDVRuxgC1NTrPWh",
  "key35": "4ebn2z5YnBEmhsXwWTrWQZqYvNhbbWu6j6m4nngZu23zYunMXGLJ1oiaufYbxgv4E7VGccwH817oNZCUXhuknnGy",
  "key36": "2bp6ne3Cdfo4p8ujiGGs5dZ8fPgf9b8zeCsR4EKPBxRt1NE2wbVSwqJ2GZ858V6ZfF1wHNXnW6SgLsekcykBNpTm",
  "key37": "NLc97CwLbQW8fFURpTCamjJsv7TdNmuRc6fVugT5EDGbXDAqKr6rzonEGyVq4NXiohPS6DUsLaWcru7k3fgKCUh",
  "key38": "4aZMFM9jnL1nJxj5CGH4e7UFR6N4hxegpx5kK9pSUu1CoWMkRvnkPeCtEHCdHs5B9xoaDybWPkQh4RJ8GMBZsFEz",
  "key39": "3BF2a3PMCA9g6igr2NoTYkBUiYNU2yE4bftGXuJfCJHYqpcDuSmxgMU5HA6vEHacqwq9fm3bY2pJsgjHmkxrDkEr"
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
