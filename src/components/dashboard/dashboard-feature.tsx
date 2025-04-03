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
    "3C95jcQ7bgLJbzQSg49tMYRjCrCja3kA4K86rkYBpN4b48MHktxC1gWnywxJciKjBv6CnDWEghRYNFkdXjfQm9s4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56mHWG1ExUtbp8fwYFGgMmZ5DyiMiy87DdSKbYPnL1ye2RHfZUaCbNu62S3Ghma7Stp8ya7FGPYzFL4ATSJ23RJ5",
  "key1": "59pazc4FTiVjJ32318UHCAHR5m95mk14nhuG3ZyPaUw1gP2q7af7UeAfutHke3Fyg9HsUvvEqe1viGkmgjFH4zst",
  "key2": "5rg78b8VmECpoYUgdet65G2hEK9siBi5vMhQMronJiuBJiNTG31GTdyY3yETNWzfuvWYmU4cBGcn6bZEF1MYWF4X",
  "key3": "5rtTpp8tEcvYk6hrMpgWJjZo9198CW8EWKxCtrjyjxfkC3mxhnhcWsJ7JaxzfvU6oyfAvqAxqNp98CgN6J5uXKJS",
  "key4": "5DaoXEGkDPbPWJiv9skRwuGAPYxJqwpbWHb4T4pqYHuzinfSJA4rVCiDf6p1y6ACRFPq9QCM8AE1CHQtYNN8WMWh",
  "key5": "41FdRg7h3Q1wBo82sh5T9HEyDuTaSTKps24T14ekMo9joWZreZgFxMsfvGHN7S1r4kPKf3yjXGjXFhFGk6FsgRBd",
  "key6": "4PHzCdo2oBqauHPNKxdQ9it1ePRz5JQMuoDGZB8KQ1wWiLG5UZhhgnVLbwJbXdLxChjGPBmJSHBqCZAfidfbJ44L",
  "key7": "1uhZhKTNZeWHhCWpD1p8JUmGJDzkg5J1yCuJjs8boyMaRdD4pCxez6y4TAjasXwWmyMiRLqGDr9gmpK2AbWbvJ8",
  "key8": "6765oWPnPGQgAXvQcPoBKEotq3P3TvimZthGh253Mt9xVduGc4s9kBy6uZhSGGSQtCATGeHtYs6aJNSfADaW6tF3",
  "key9": "23VgeibGDab9EUXS8Eq7G427RG4SnmrLDAaaX7MQTW1UhWUw7h55AmoNg9UdppqJuERitQpF2qJwXTN6oyz5vvkd",
  "key10": "4EojKqUbHXcgaFWmp7CfvKwJXG6PUUidSfJte6ZdzZpLSYXVKy3KDbenPgroNvH65x8Etru8jC6yBM3ZaEGDe2rW",
  "key11": "9jYszmEWj5HDWzhBU26CqLsNYU69VoWVmknLJD7ZJVJh1yJtGRqC5U76dfb9zJf4e7o9BPW3L2FSaTPVAM6mRPB",
  "key12": "31hEA327Th3Tm5xV1Q94Lzvm1VEqoebmi1MqXJnWFva5n1UyU7cododxTpcTwhgsrgJ8hCwPWxG1dqHazkqnnsAG",
  "key13": "5WhQuwBb4WEVGYx3E2QTHV8mAqAY2U1fTKCDQ8W868DX1Tu6z77KKZ4Fb2aF81bQsuruTeiVp7Gft23Ap9zHVfFD",
  "key14": "33362tBjzJbPnQvuS55KG6F4PrJduZZBzSAMrdzkQMCN7bTcCXQpmR2M17G5841X3prHW4g1FyjW1Fx4YLjwEVf",
  "key15": "JdwdnRQBk6pecNzquEHFdtciixdFmMw8Jn6MMenc7TWoyRjP7cfbhQ54rMEWXQt9aTByGVDFoCSVoXUpBFKGSb6",
  "key16": "4EFs8RFecFu3hhuoBhbMX8pSgn5ycN9nGBau7vfzxxcZ4j4Ft51iGf6366q37FJMfv3R6p5qTAfAZ3wCDEps3hsm",
  "key17": "4rW4WrBEw1bcn9qkg9SELNqGmQ1sVfn9ERnQPQSAxozT6JtPiz77WUryEzrW9fCcjyB4uei78BEvMB51ZFqezfND",
  "key18": "3Td57Go9YrPfcB35cjnQhCqqTmxC7FaqNuoh2XhPzd2AePcnRgjYyx3w4rQAcjbWDqN9HqeagesCdw5vU8E6R6Bs",
  "key19": "4EuR8XFGS8WboVW3RssgDAfMZCutHUTbfpLDFNkEXKiDtGfDiK8RMvaRWWgswMkVMgTXtYNW5qBxoCZLA2nwEN5s",
  "key20": "2rd5M2MPJNfCY8vwcumTZ2eRAwLhvgsDWtbc67yKgxEpYT2zDzsC6cut2XrSabPTVKdWvYYZ1ajQYc5tdZsq4t3L",
  "key21": "334KYfRUr36UhFyih81sW4rnN7ZRnyKtsW6WPd5Y7wy7U6zYWvzxrzJMnnHUmLbzE226RTykJTiEi93z6FJwTjfc",
  "key22": "5ZM3CudnuXwTQaQ6fNZKew5QFvYJQ1KJfHvEsYg3AeaPCzBn6uLHqqb9kLGA72egFzCzQBcLXYjEgQXEFGgfdXff",
  "key23": "WnuwJwr9kuY8wxd2DLzUU36rRQzcsLyfPBTseYnKd5FFFEYCYJdYzrYNzKErgXAa6bVBUetSX1PQruPKcDGMgCY",
  "key24": "3XFCzwq6bdjEUtjqETfRFzkma4rx1h3fvnZE8p8wbqbFvEEtSJHyWcq11y3qo9x2hcUrnEkaPnRTrRgwugHzXkGf",
  "key25": "Udrjr4e181DZwK5APdstqFswTnrTFMJn1iT75zW3oGkcCD94Dr1ATR5yi6J7pft72yP4TMR9vK6kzejjQvuyEYS",
  "key26": "k5T1jvxAE11VKvrqyxgKf96yLrfqHM7vtCc4m34Fyky1x7HQEHYUWR5tRcBswrHo4A8SCBNvCsDVPtaVq37R2Pf",
  "key27": "2dynDfXbWs5PDHuzuBBXmnNhNmxfApLYxQzJNhdb2tJLC4PYD78Qody4dG14UsLLPUxVSz1Q8jP1CJeTguzEjbF",
  "key28": "3huU7115Yf7di94NE4B6EKMxH2kvwer6gTZV1ngi2XMK3mft5xL6vprjZCQxhXzkLahonL9Q4DAAnNAmfYxHjk5x",
  "key29": "3R6jwChwcpNpKy9VubJtfWYhpb49geTVLVu9LjWFBoYjdY7m6fANLKxkV76jo1w3DSTneBVpoVeQJrdQqSfEcj3T",
  "key30": "3zLRZ4rxn5bowbdnFTy9CrF8H1jmxTyyh2YPsnFt4o8YPVSFFWSNsjN8bex6vht57csud2GoDfreBLeVq6tceGj",
  "key31": "64PPGA1AX7pyGPjG8ZbWTtvCf7P6cF64YugfSx6JcAAv9EGxkL7JztMWySA5C3HQUcNqKJk67Pvu6wVZn9JbTCpu",
  "key32": "JewKvScAxH2LjEoVFxiWGdeCp324E8NHjmRAJH64BwCzApJarMjwvD4Z7tTfz2pR3m1dRfVhzi2KkbowR2kfC26",
  "key33": "3s1TpfkrUzSN69n4Txsf3bC2sA3pskKyEJ4M1S87RYdp4tUakrTCvS7ZGeecr8v17FvozrEDxLfk5kmeDE1FHJV8",
  "key34": "2rkxsrtcQZuJU36Qg38TdT4986r81jmZ2G8FWFXK2bpHH8QMhuDfX5zqvoHWRAC3Hj8D3wXyEUFXGUzLCvFpUNhy",
  "key35": "4bYZFaRdf4rd6H3qJZQVKwi6Yxb2BWQtUV66FH2MXnoitM5iNxK9EsYFvGSSAX1bNNZUu1vh9SfDNmHGFJGVUAWd",
  "key36": "2u5nAucQdjwxz4XWbhAHs1hiv7QEV25q2hotvMx42Mk5EWaa17WDJx9WzV4Z3DjAJRvTmb8fzkkfQ56vAVg7LnJU",
  "key37": "4ghMdnpqk9iu2sJGZ6Wd5CqHVvjELsBtMKodK2WVAPQVnknLXmTcT8KSj7Cv9j2AM4SrrS4EeohvQzd9PocekQEz",
  "key38": "bEyy3Hb6AsjQVrLzP38ai5W85GxP3H26SGnQ9MyvqYarrqiM24HFyriYgjT3wj42qFcWU5pQGr6NUXk117TQLzZ",
  "key39": "2FU2aMhTXv4yTCQF48E7jVYPgdB8zmMbGKzmnN72qeqcvDxxnCi3hsMSoyTv3tc8mhafGu9aTGyXVqLvDuzsB6x",
  "key40": "3vTSi2jkcCkXW6xDJXok2NHt24nBY8z4KVGnLRdcG387ogXxQ62bUPN9Kb1dhsXfWPDR6hVqYwsMoUXASTpxoGhT",
  "key41": "4Gqg6UD9Kv8pJnf27FsHdXNAibx8RVaom3HATYDv7hNsy8RmZ5WnGwmyPBzWXZKoZj3EiUPUZzpHpkfRwiJ7UVgW",
  "key42": "3fhpcREXSi1cJWmYJAXNsQ5S7Nc3rTpNA4BoEXg4XiyQdY8GGJmXa4q8VdR6E5S3Htozy8JyzZvu7zyq4rjJqu38",
  "key43": "3Ck7Nq7Y88wMHeoVQYCBfyu1smeFXojFsEjDnCs3a3Zp87jPji8Gh4B4u1tHKGw5XaU8SJ2Adv64UnGZF9QZNW4v",
  "key44": "iwLS7TryJ7SWxkVNA55G4WKJxSJ3PAHrwdoXBtXAYg7d7561cwEgB5KwYyd7TBnFGAqGkp3WvGJzR2VHWWaSBAE"
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
