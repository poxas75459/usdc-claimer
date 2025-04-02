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
    "5YvxDqLtzkjjhEDynuGhf2RqbQYBaX9ZEAZ6NrVRojQpUCpCRfpDWY6C5iGZHXNQuccTHP2mt4twzAaZUsBpEU3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44pYBjfYSMUcny5SPYCfJ8j2WH31Jhfv2mMeko5Rbqc7zh6EoZrCEeHs1pJsZYryoUKSeYf2pzwVJ6h2buFTwjNM",
  "key1": "7wUQQtW8A5svejAqS7x3CMmHAUGnnqiqUkbdUBeArNUg691epsArE9NAgoWcgzNtxC9rCFr8HwzNgrfey2MVLtx",
  "key2": "57aeX93kiRirE5t9AWJmEve1RnhUdS918TMs5yVepRRnUm9xAjdv5TEkVysvQWHmyKenKptovnqiHWRYbqt2FD7J",
  "key3": "2amZp9mz7WVcarkw8dq5BFfVeNzmC69w4zkqDzJUJwyLg6ZJFxYoJ7n2AUd3nG5px5dGJHncVCVnFVRzJJ9zTs3n",
  "key4": "shAxMXYtsecL1aHfT9cgmvd6Ta34VZ27TxfSGvUSYLSn59axuGkkYF6U2yrDb4bbMK2aPSqvv5joGw293VBAHPq",
  "key5": "2mqECLWqEeXdC26E85FfjisAme6ydP2yRkjcuqRq9uVfG7ESmukBHPCwu3MqtzhRK1pS1rNBTVyvpQzr8ZDQfxBj",
  "key6": "534nuhPgmwRQ5uUikFLyk2cTbfySYso8aaZeZH2dMKhRroC1pdzFxTdUWhQFxvCfP1QZFpqFxNDHamWeiLVKk1iU",
  "key7": "oSbSayotyVwcCRmyAkCVv7A89tztLNV6FX91Ghx1sRsGFLh8NAgnLzpYvvaYwNhEpJNTYqZa7V5Xxnoc4pEN8Xr",
  "key8": "21c8gW72cSc4puqDs37vFyWjtoCoDPWsYoC9y3HmqWsX8y6rpHPPhxy64LFPttJpoycTv8ZFY4fzS1ypnTr2zBme",
  "key9": "3CTT42TmYCH2ufXhVbPWfMxZzUXWQNbhCdoLUNNETtNNXfnakmbKXYq4feWHLNrpxgEKkgXHtTj3orzbv6kje8Qk",
  "key10": "3LSSb3EqzvfmpytEfk5dxRHKvACVVXBiQuTmABiRXVhwzoXLT5xuVnYUrgStGsGBaVUcK9HG9yu8w1KyExg8ssXv",
  "key11": "2oZqbxgxHxcTC17krGyjAjuWfHGNXCosTBStwzGpYoBiCBYpBGbwruFTsWvMpMo6jN1v22fRb5MFRGnzvB29wsgh",
  "key12": "3HVuuCRZK1o6bpUfooYNY9Sp4o6CKh9tkBwb2ERVfjZUwqRbKfP1bnGiw3Y3CUGpCvVLrSzoYaEhaPQzrGLqDKQi",
  "key13": "66t1zbwARUumKZNYTy19T2n62etjiynM1AmR93fwRkDbjuVtvaABsLiqS3ujsm6Y5Pmo2VS6iza4ETxrm6GT7sp2",
  "key14": "5FNFYpkf26hVKRVUE4dSDedSU1VMKnDXFRkE8CsqjuZ1uXTMCPjUVD5Xhk14Tbz2cLhb8T74V2642sck887dFz3M",
  "key15": "2FYMuxU8Z2L3DxrEFyBrS6h5MV5JVr8YcnJ2xGtJLE88gzeePLekbf6UZS79YnTfyvjhcFW6XiSLf1sicXvJzdSH",
  "key16": "61xCsEYMJijcea86gcpNc4A44k2oQiALYue4Q4BChYgvy3bUSBsF4tbCnH9Yd2GEg2pfwA6VJXdcdt1mDiidQoxd",
  "key17": "2SRi3fLrpbKWNgQFoBHMhmY12zs4TwZDQi43GyGV4bHitmh2hNdLjZEHwL5oFeomdp7efw9wSXUwQPKtm866miwr",
  "key18": "4y4tt6XNjqpRn1Pq7WXzg2zpdbpmN5m6eMiKtwavusqytX4S3syGj1KoiLdvBKYmGRdNg7zwh2eLGHJ9hcBWa1d3",
  "key19": "5i3YsE2G3gjRCYT3Jz7gGmaAoQ4WYRi8pmvGzH1m5XojBracw8RTWEdx2JndvCh4TVktFTnBrJHYhhgRZiwTXaHz",
  "key20": "3NcNbtWJGi4K1ZkFjnPqf1bVZYtYswrMfGyqvQXzZ9LPvp9L8siuF6v9TWFCJwKweLXqDZ37pErFd1H1jUGjd9tp",
  "key21": "n9LEoU7AJWB7Nz6vT9GDMqSeen64fGHENnno1KXxEsewxQwoHCcMHX6Ve6Mz5f44YDz7oGpKMYtRk6DmX2eDj1x",
  "key22": "iBNX4RVWJkJeTdDE6Z5V4t3DeBvwhxdCbe55MjdDU1M4ijXibwgHEp629Lqfyeoyaaawf2iA4o4Y35ymQUd7XQo",
  "key23": "4mETdeYzFYTNmjpHoLTvyyidZaSMe4W9eW5ByZ774H8cxMpnhUAk8XBtXs1bk1er1v4PH1jZ9p9e4CMcPZD7HMCm",
  "key24": "3JArjTu6tVKLmFrbHA5YN1iAzqEXhcC1tb1jZfJWy9ZcLEvC4vVCBHAPBPZYV3i65ZwQVat8U5mnfdUGwB4CwCaz",
  "key25": "2YBtTAkd11uFMqt2fqoEi9ZDYqJB7kcKujjqe7oiDyneNyJGusxzTZcaQtaywo3Q6kg9REw851QxfirLVHxE5Hfp",
  "key26": "46ZyMEchXkVX1s84gGLY3zYhtUAz8o1csU4Qx7RSbsvZELCYivmNC3rp6gr1UTuqCsesF3H3CPkjts5LChu3om8z",
  "key27": "5nfmq6xRXLuTh3QcB9pouc1AyHVoAbffTixGHFCJa1uyMeg8S82uVmBREeSdxf4M9ZoTcwydNn1mXZ8m4sCTMvZM",
  "key28": "5C1K4XkLXiQGxMZDTppkufko9Bb7LTZgQpsoQpddjzszvzvBSsQHiewRdnUjG6DqDZVuVp1MCiAPZpx7gSp3PGTs",
  "key29": "zsXqMVEm8CoCYDYkMG7ZmByEsikQUs5cThbJaeEgMxu6s5abJ46NWaGG44uNffSLdU1jjfqY5Qb7zmf6MyqmKm5",
  "key30": "5XxToipBX7Hj8eZR3MzJUHZxqjM3nVLgH4rquwFQAWhvRHuu6xNh9RrVf7zP9kMyVyCv1PbM1gBqKmsmFaA9TPeq",
  "key31": "5GWPktb3BRmCPrEWJS6UF15dpuewK39n8YeUdjLjKyyaof8yjaNnPTJVYSS5FNrQz3ewuMzt5crgy3GY2xtZLiQg",
  "key32": "4NST81UX861LXcWpdYa6v14GHETHeKTHXfYGxaGeUS7TytwY41W8sqUh5p7z5oaow449bFmZhmqAfiX5F5b1KU5g",
  "key33": "zVr2vsQYqaYr9WnkRkQR1UEkJ5aJSLihA1a2xDgyrXuMSt8nJxVwPegKYJtNrTs3C2Lia6oZqtfnXHAY8kBJeYG",
  "key34": "3yqG45WxVEWjMtZKWB2HQ8nSVA4bXXGoSEGCZuwivGq8xoc6jKQ4TWaugoRevH3b9YM3nuk7Q1o6Q1d1TVQQ6SvW",
  "key35": "4dce8hLJYdTo7Z9iwGyXC3V9wNT53nxSeuLUbieTimKk8SWpXMZAy4i14m1vjcRQPCHcQS3iPd3gmVYnjP7dN4Bk",
  "key36": "3GTpusWAV6mt7K62W33e9XeZcitphtezTrxt2tW2JULNy7nfcb7X5ZGcZEDztz4FczDcz8iiqcsDmkEfQRtPBXsR",
  "key37": "kZ1cG3PUBzNVjSMNwfkRQdMN9RfNgvYj5Sv5UtAx3mdN1X6x66A9rBXqXR5VC3zkGDRU5E3Uw5n9FEdfGiXd88t",
  "key38": "3ySd9Xx1ekTvX3TK8XsP1B8yp6DV4xMmNwd7DvWW7SPq7h4deZ53SzD9xas5LzQXeQmMPDhgAanJLSmvGqRzBjfo"
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
