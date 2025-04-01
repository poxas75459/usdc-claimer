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
    "3eDGBdoyxbCa1o5KaN1bpU7yz88QMRbcHMLxQ5Zq3Ume663Z8b4sVhiPMez4yt8JC1XjSPpJDNksFiifc9v2zNxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pNizDzVvYpT1Y2LmALsmiKbuH1NDMWH65oA9rhavBAtUZHHpfP6FpzBminNNPJJjftVxzHz4Cc1pojHQKz9XXAB",
  "key1": "2DwBGdrAd2pdnBBHSWcpBPjw1F2F4wtbPehRduCxsH57WLkJW657JSSXZ34tHXW1pSSCwDaT8B2ErcuEnXSs72Yn",
  "key2": "4D3esQETikAejq7afCWRdaZm9TEFz4PxYt8vsVXEqihriVv6i8u7KqEQMcsAAcfqEp5gFuh9prdHLmecsp5QB4v4",
  "key3": "2CMvEir9XdGdKHghGZkcVcMPU486RvaxE1UrwiG7B5cz9gTpqLA1TM84yrnLRBCK4DpLbnfM8Y4a6RxNBH5v5kNh",
  "key4": "4KyxLM289gmbpWcmGobpzERg2xj5Gp1Chuzy9mHYaS175DUZS5LrGCfywhuPopEJTpUgxz2xxwLVmPWHJn1UWFHq",
  "key5": "2iwvxKDEiDCpyqHDT7A29T7gd5Ys7hfRjG3AahZcKf5e3aMCqoRwmYCDaCBNmrRcQpKC8CxQmMeNmrHDvshzVji",
  "key6": "4Lz6sU95322VAB5VTdcHDZoRtpNcM4e4YFw1eS7s2ZRqpBcEBmnNBybiu6dX6X6Ns4mKpwSE5Vs2mhJa3yk1Qnaw",
  "key7": "5UHN5UHWT2eFeSRZWRz9EFkH5MJtnr33qwMGLNQu1gEqWWjg47Y8fZbg6hnYkV7e6iAzKZNYnQ3ihPNRyJ5QhqEe",
  "key8": "5TuW1h3fBhvyMHf6ZF2iDZQqtVGvVmyoxbRZfo5d73NJPEBuDj5m3keQZvwGLszfN2C7JFEdMht2tNtxK2HvMBLG",
  "key9": "BnybxLnuSnLvUgg6DAJQSVT8rikWbxktW8NEQkr9zgJ5QDaT1M2rayE5gJgcitrXthjbnj8YQutXVSTCXfTttZz",
  "key10": "5vxH4Pwn5743Tg7TXbPSUAszLwDGqUF8dtfaU7xHsqpWdNX29HgiC1SbMHn88dMEv9m23BahgkrP1iTdh3fEwGB6",
  "key11": "2CvSdW2yND4TY3FkEQFtzhc4XTv1TFr6tq9dQsMnhTK3XJd6EjmnChtLeH48XwfPndGdagcujEBNtuGUzinJpcHN",
  "key12": "34kaD3ziMo38SBkJJd7fXa2kMBJPfhVigVhD73jriFwa1c5V2Vujyp9yyDenBYNnmDtnbvdeHZnPJww2zdERYjd",
  "key13": "5Y3toeBxqV5GfW1YBTci6evzV1DWF6UDFdepr6A1UGsE9RgdUcZvnpyFdaCtN49FdECgSA5idCZbWD1RYdu9HuJv",
  "key14": "3VUUfHzWZb5dXXrJRvnmbSwiJfFL4inLhzLERb8QizbL4sBMzFtxnvem5DvwDMU9665od1roLwCLv4bRypVjrik5",
  "key15": "3o1bDic5N5X1HEezLwv2TMc9iPmRmZ78GvszkhYj8enGng869GDMrXmvfPoujLPATCwUaj5k3648oAojfmDokqB5",
  "key16": "5DRCyLd6qTNAy8bqpPsPaVXA9aWF1b7niUT267yUuAp21TgU2WGUJYSxALJ14GBgcgqe8BD8x12xbX4QdYWT2KTW",
  "key17": "2EK5ucdfi8DoqKvUkJmwBAmciKNLUmL1opH3wwCwqZXrDHYVBGkEtCzJZWHoMASu4YboefVMJt3LPD7dPNp1XPTT",
  "key18": "wurgTFU5SQHnBBHwEAGo59NyH6cJpSVV4A8QrLcMFRVxWrq5uaWHQRR1kYufs8jfn2qPUuqBrjvTTUUVVY5mF3n",
  "key19": "64AmjZtksGHahk3ADncb5o3Nmn7dXAuKm6jVFaEYq1Sh2neUvimsBad3MxHvaHPURVserqQyxnNwHNwm191SWYfb",
  "key20": "3QjfUUZqwPx8AuashSELt3uLopj3DxQGYVuubPBM4sLQ3HuXVAHXXokJX2Hssf8wqVhoWcgoVNVw7dDNT4gopbc9",
  "key21": "RdMNZbNFyY4d9m59h3Licj4BWwWkWRZMSvu4ciENx7rk1acsFB7AR8GGbEkKeNSmJaRAqXgEEMMAuCoRo84rrMF",
  "key22": "38ki4XYLDMTTh3h1Q1RQxthjakABHMiwXK9GyhUDmF2APWG51MfrcjNW6kZzCH2o5bhWATCfaPH6qokpujJsaZP5",
  "key23": "3ERSkzcZ2UKAy7AQz2APAs64hcUwBKC2Etyoo9MY3Nh4NKCbYWxHWbrn4CHjn33oUKekL7Keohnm25MmtNYJzKZA",
  "key24": "5NiMorawTuHzNUXUfvBwtuH835HBhrxT3hjdsX1hoPDnF18yTfHBccFNPzqhYeLU83PGu5rvYWxLru1qBP1dRrqd",
  "key25": "2MSnjbzDbbmgQsQkBDabR4ZhEToC5pM7KBtcSDhf8m8RJxxFoJVpu4kXaxoykcbhHx59SiYqLFGQE6z3Yp2ap8US",
  "key26": "4phtr39uhnUFmR7mmNRPsPCp97rCX48SNbikiYYGm6Q35SwVvEzBp2iKs8ZMDMFVavca491Zf1aTkdKT6vSLEn9x",
  "key27": "2wo617PXWrGDQbWFJ4VAVnbwtiApuUf7nRjwChvVvn19UgjNnmgp6NAEXpU21oib6tRcfQu3GMtGPSc37zMEyAPT",
  "key28": "3Ai7z9TrUxPGbdVKSov3kVzPpYqr2DXeTrb3ryokbU4hMdwf7E8CMnJP99FCoouAwVJwuQsfUuyg7R3cDgu9ABN6",
  "key29": "jNhsTmW9hL8RhBziKaGjoytXsw9Pk6iR8JidPoWhjPjcMLtyHv9nCAGK5bfBePFQpdiMHgf8ZLRHktEr59dW5Ji",
  "key30": "4GHCnxm5Yqjm7j5yNEE5xHET3apVQWFfTyjyffafhmsH6mDg8zLE52xJCnnSDSou72WReGiqgwo7Sbkj8Gxyhtj5",
  "key31": "p8WFymrEiFQcTwMd31U5k2zM28TPN2R4w139JyfRr2q2wX9KwxKCHu52nPHjRBzxhZPYKoLVV5PPnD1gBTDQdTX",
  "key32": "3LVjkjebztkv5hmFvJJrNqe8tmsvyLhxCjG5tw2xxUPpawwaLoCpAPSkSLD3FM6LEwvxgieK2neWFX9qJ8Yb9Yxa",
  "key33": "3wi5AMusEhdwK7UuYZgBpq87BKkwKR7MQALLTuQaukTtjy5oeFm6ZhwuYkqYTRvpP9R91f9FvMkWgHb1jtyb4Lkd",
  "key34": "2zRnKXaaJAe6ed1M1rD9est8yxoAVRVMW6BRFLEvwTBLwo14tFZmUXXUye1ZqgbEQbc3WTvzhejizJfRhom5GQN8",
  "key35": "LCqUhXbJiAWQzt5vvNHCynUJBQ58y9iZBrf4zuC5j9qqiNAX3pNVgMbXqTTp327n86fytXEWz5zK4yTmmzqLpjP",
  "key36": "2byYajh8Ef1h7uNJAdgPet11nwgUjYgzEZQ78KtvzUVFehcjcerxft7z7djDhWebrrUppMpSWX1PVkL8vADwWLZ3",
  "key37": "5D3Poq2MbKbpxHiWBKWeq7sTkF3JBCdGUZbbkeNU5G9GvZYpm4biff8XxHomWifYkKhBzuXw5rBK5Fuy3XHK2bxW",
  "key38": "4PYz3RNxf2uQkSNgnUjrMNCECbEU5knz4dxJtmNaygUbga8DdRBXhk4wviw4JJJrJTycGBCBKKNryR8bspt4bSQt",
  "key39": "5Lxcj8Dc8paeXWmgrtHMpfNohfZiQXsFj9vDHgkr2trnrPdpfwJfxEUaPRQgPoHz9c6JwuPRAebc7AXHZRQBntUb",
  "key40": "2HQXphGrgtokjpTcgCFvhjbYxrG3ZhD7qQYjex7z4oF96LCbYdF1QWnLJZezgcB8NHxRrjWmReafb6eJrVg2TpGv",
  "key41": "37xhCMDr9brt7iVBewxAQ9hXt5hdyjd7NqsH7YY2htuWrQNhbxVW6q7FsVjzD1iCforaoHVjvG1hBzRPVDvADRkW",
  "key42": "57odhaSsMcQYDxgVx1VnLYrMjPDx3ZVudJSY4STdrUYeGNJarD8fcstDj6gUxrgR9FC3ARixtxCervmJKgyRugdx",
  "key43": "3JLGkKTfjSTM7mG5TF6UorZHtx1W8gEd6GVm4JDBQ8W8HebszurxgwSTYLCj2x6WWjt5HRAsjuf5NoGCnHP1BK1g",
  "key44": "5bd3x8aDzj8P5v9oRBwzAZFpkUK7p2p4norKWqpLz7p5a98rKq4TZug1GVh47gfDN9m3Rxy6qiQMkMcGemh5xMi7"
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
