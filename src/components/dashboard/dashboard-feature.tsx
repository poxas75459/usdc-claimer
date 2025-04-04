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
    "3FQihFU9XZE4M8dnDRrPZ2yBsb2jMKD98BPj2bETRkLktmWqY9a4M96Jk28X45iUErSEDeL98bKX26EL9eJ4pumQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GJdKLkXAGKtWvn4x5e1TRjMPFqB9sHyM81iDju3nACKGshaV5VzbJpZMqGL5upwvh2GW1JQpXrjhxNptCCQGPym",
  "key1": "4SdNuQXDDiMJX9fQmMVfnsZZn38tbyJQobGuU5jHNJGdzkQWjN5ZrcmSWH2bDf14eSCVyUmnMSWJ3NnBfYR4oubu",
  "key2": "4SdzExuFdUj7xizXEkiWDMpWpAbueGc7RmGrtiskkpmAs53QZgvm4a1c8EARrFENAgiMiqcRCaohjFUwoLo9pVBW",
  "key3": "5WnitD75Y3iYteZBXUHL7deW4U54zaFXGMEDyWD7h5cDqHZejSZ5y9bBDwocfKXD5TS3sQE9BfagmhDbadp7km7C",
  "key4": "5Yf4CHSiBrm3NbMKYf942rhXdYgqPKXaHTkdXiwy3NJTrVM4WWPSan7whB7b37e9eAR5yWhMF8YuTij79nvsn9n4",
  "key5": "4NLf86iofJHFrJGuZ7ucxpA7CK5z41azbzDSMZFhfCgcXeE72UCJQQsZ5KYVCCouBedhAWjbZR8FBEf8zsdDigp6",
  "key6": "5XHBYAgFiVZgCwVLquitTvJ94S5avjtbEihGjLHQmSB1HAevL2Li8mjMyM8GQfD4QWjtBowGHETdvz25AaknArYv",
  "key7": "23BqdjadGfarELjBVsXaxufeViBjUmCYPiW8H94ZR6wik1yjxHApM1bQrUXm7mvxxUYEH5APpVekPXcb5rE7BYWa",
  "key8": "4tWG4pr9CzS7b2eycXG7XbKJB7kVD1N1JBe3PLruZwpW4Y1CKKxENAxyjNTTiXEXuZW9KoR9b5bCpevEEzz1sCHs",
  "key9": "65QyTpamEsqBznutRJNQFBhNMYYD6iPzicrRHwzunCi1s3PeG1Q3Wju4ezLuBaK4i8q9yE8bU38v31fXGuiTb7tA",
  "key10": "3gPYoG5gK1RpFNzCvGyHhAJzJ1sCwWJ3CUp5CJnwjPWTbrQjfchvVZDxFmE6mtCzGq2uCmj881kZeWCVRvrsSZqa",
  "key11": "dTpafTv1uPzhtrQfRdPrjxwN4owLfzu8r3BxJbsN3Hpe4nBDNs56DtTQMcFFZuJGNmzNR9kUsifzKSErji28AxZ",
  "key12": "3K2NawviBFfvKUExohZsygrGip6EGRC2EnHwsWdQMEttUbgjgvh6xyD3Z9rNEismdBZPkteA4p5go4KuSHWLWPCo",
  "key13": "3u7Ma3ubEjzdm5jUn9LDeBWhkwwwpBkGoDXQKNDQ8CaHpNeB18Uow6Q6BbDkFkr6cskxK4EBCBTPAtRurhVzWrhN",
  "key14": "2rxpBUvdGuCi3kvi7dEFGLh9xT8buzYWpvwNNKdLYUEsJ6r461eopMCy2e6a7kqdHt2WXTm2Kd1YcMZ8X1xw58ta",
  "key15": "HQ8CU8DsanhhrFyj8by2nzFwXEt5VVLNQmeR6tqBSJQqJPVC4z8so3Z6sLHMwbZEktB8uZFpvu8gXRQznaJYKYV",
  "key16": "4fKSMT84ZEBrerzxC9yCjWHk8ysM5FthaEDhAwkv2LwYs6A1pV8faUwgXXpTPiCk33siJdV8aKu2sNiEhaR8b7T",
  "key17": "5bdzgvmmtkVx9yKByRwxVksyxKP8RMTTbVsSCxGCUfDw8vcB5qhY8h1xDNHUm41SLLPEoGiHYBsSMYJr8yVk1AUg",
  "key18": "SHsodpVHWVtQd3nqtk8ghKnvWgkQpK7gAFshDUuGgBEhaz5RH5CL89E342Rnjgdgv67Gyisbqs3RK5Gz8va66w3",
  "key19": "U4jDLUjjNfnuRxQNpYtwbQgj7zVB5UreDZrPkTRrHq3uPXXfRdTwj36jZxbQSBQsXgFoQxxoCVQY4pVP3jTPVfY",
  "key20": "X77dmtNaNkEHC7WCqsC2DzcYaWrdCXyhgHExyz913XCtoCCsMLjUj3gBeEbaDA3WY2XSDFxsGJRFLEyDQ79ji4m",
  "key21": "3MvnkdgfTLcghgdPaeeyoAA7FpCh8SMqq1T5pJVQPRShj7UFcfs2MxQgSFQkUMekJpcpZPvki2HVdj7fwqY3b39o",
  "key22": "3yNVKBWP3BYUBUhzL3UFEFWhYgjgQ1wBZbC87ir8GGDytm9AcuikD59dkeYY3ymkhybRQs3u7cZPpDm5hHp1y71z",
  "key23": "5G86GdVBFK6TmgX7U2X6PEvvGzmzBJg9wXTnZbiseZwodV6ypLXr2uWQ2eGkRtPxAw7C9t5NAxL6bmV1hLN4CXKQ",
  "key24": "3G4yybNN8AMjR8hwK7xDj55fB9XMMHKV4VPEFFeRQT7zbyx8RBQtYWqA7fsvTvDQ46bzzhhZ4dZEX8hbpUamza3M",
  "key25": "2ozHj8GafLGj2RrrfDFkHGdrJabgaFNfgR6jmEZJvq5cCjPXWigzH2NqF3ur6NEL1V6y2eQHokjNPYYUYpmPxN1k",
  "key26": "3wf1NgUXnqUEdewMeqKzumgpjZwuV2sb2ENyBWaNa6BTqcRHtw9DM3CDVnuCPhP6fdYNowErZF225i7wwLwf4SB6",
  "key27": "2AjBB7Gk1A4sw38uqt6a3BZjSFFokXCXSeJJ79HThm5v2XGwF5YdtXNnqz3u1sxyDcSJfwtfJdQMj5Gn9B5qyk8M",
  "key28": "4QNuPVeiAG4tsdgtAJoxnrckkZiy1shwdD1GVGP4kNiTi39VSNt8ZRhuB5QqUs8ekiDihFB41xke4PFnZ3Vcu9W",
  "key29": "3KRKjnqKt1J56X7zxmEsVxv3A5pZtkyuLP9iuAh7JCRKxkwVFFs1EZMzJEVAQTq9U6thjzUGNboLGdRRA9ozaZ6d",
  "key30": "3HQ5pLjsffX1fa1obXvDqJb27dFG1pURJWmjGvuDxVyyb7FcZVkgtHcXaZepXoJHGmQu6SDFwYay5erLDF7a7Qs6",
  "key31": "3hxHF6ZEtPQ4jewXKnEntrymHswTwyAVbr2d19BE3Msrpp21EqazLG2iUuZJ8sJsLCRqshw4imw7B4jCgiH5WYMT",
  "key32": "2s3JqDhjT2b4fzPqzr4WfNYFoEs3jMLyZcWPPgySZZVe1vRsk7DUGcXcXMoXhCSwacqj7VAge2VZstYQq4tF1514",
  "key33": "5yBVaTbdwoGWJf1WK3h6qKDVk7GEmNi5Q9N7cWMxoFDFwYACG1nDk5Bj7Zm2H7Drsnn7GxvqDFWRVcGQPom8Peyt",
  "key34": "45hXhEAdXjmnFenjSUbDq1MEyjReFJJB43dXntcubZNTp4z6SQ2LkXZp125y56zBTuRvawdWqfcW8Pti31MPKAyj",
  "key35": "2pjj4edJUHn5hJ6GQQBop3EEkJb2QCim1gWZpW5iafL4zwuuRur45po2KMVKn4Kjyo8mLJnBxVA5kfAgMHaE1mY2",
  "key36": "5demPoHQopogBmR4tVqD65Ac8ZRRrHHFLNLS6fn2JvmMkfzTB2vyS3HF62rZ3PC7CKL42xxz22rxvYhbHn65su2X",
  "key37": "Bt3HRxzKpf3cQ9pK8S6yvaoxn4hAFCsMLDS1Xq2qm2hZsdQR4hUCotwCSu9jFqEH4J1Wuc2H3Rcq7x1bTfgfqQL",
  "key38": "5zgJb2pK47ogxMKjXtMgQfLGutQFWUDRtAhqurfuHxeguFRpQEj17MR1Edwtwq2EC4EZz4BNG3Q6fcDMTUEfmZvx",
  "key39": "4hzrDPqvdS7c6Ly9HzjcgTXspgUGZCgiBYvYoHFKYAg1f3dPBPe7bPdbDEUwDiR6wZK1g5MJC9Q1RkQMjywQDDv5",
  "key40": "4EipKE3AoTWdj84PMKokjFthrMEd7D91wrjWFknAyL992HYjAuApojJg6tuqH6UZYzLXEZMba7pwxEVeHH6zmjS7",
  "key41": "4wZAHb8jki4oCaWdZkh7pocdnn1q6S41y6iLQyfqBYTvP7rbNyt2vYve1PR74HcZ5K4G4CEdJB24W8KzBT28cgGw",
  "key42": "5HwpZJPqZusCnnept4hmWMST2QqRzmYya6B8unu5xe5KSFaNP9HVKzXrsL7orCTT1XLq9MsYJ5xZCF8HaX4XrYqv",
  "key43": "Kba8Ju8zN1HHY1LugDXYXczY259KgoxxAao3Qka4Uuf1su1p2ehY7zvRu4rCQ1iRzvJd7wyjimyQrFVtWBTi9aQ"
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
