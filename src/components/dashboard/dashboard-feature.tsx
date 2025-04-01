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
    "26anP6RcrkAjEVejRLWJDB3ZX54Vs55v9VbSY7r6Jz3yFu853pvjeCLwU51FYj8LC4CMqNMNHuJVpC9tN9kYqdsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eaXwwLNEkNEqQZoBXvVxzMMBSC8RQEtBbo7rSGmGia3JCoFbqmXSHnKikpTcTB5fdQu1GZu3VKpnXFKpnEqNu1U",
  "key1": "5n3J4LNPR7MfjwY6b2Bf22eX1NWsKJ8qKkEpRtbEQh4EK8TqeeF9tPnRjoeeobp4ALyYYGw8GeuKQAXtVaW51CZb",
  "key2": "46uzGYBwZMitHgcdRAfAkSjonc87LyYuW2b5xugxi2CvvbWH52BmAg7iZFZkKgPuX9BWzTmUatJdkXv9b16SF4q6",
  "key3": "4UBS2eCKgzGtNGevEJ19RtMfc72UxjmxAMK2UjdR3qUqNrr7V8QJ17pyocZJmNvcs4Dgh8CABghGAXpbuQZXKYCJ",
  "key4": "5AugWabXDofrRsa3SM6eQAiY1rfQMFWSQmUq22gdEEgNQDkofKFJsFcGDCzcxmFAoBBjJhBcbCuAmmfMG9QRhsNP",
  "key5": "sgySsep7SDtSU2tfGnFeXWoYAztRsNFKRoKKJ4TnmsZidL6gKVXAQa7ZwvuKkXx9MrxkCmwxpAUntgn4A1jTdpw",
  "key6": "g8NJqGxC6HD1ysV7vXrcZom5AnMRVSwbCfBfiiRmn8Mztz3cqoTQ69ZQCbKgzAiyS2bsvUWcSsDZBGGzbd8JWRA",
  "key7": "3AmQsCVGMEasby3xEpvnRfGdXkVPZAAjdvSaWPuGCcfxbRR7ig3o56foaxXcxJXL3i9HkjwgK4nna1rgoEU1Bo5K",
  "key8": "3mCPvMPKier28wNGcSftt2mHr5KnUYTvBFiDNyuyFox1hvqjvr5nLbps4MUJnZkf3H7g3ZDyNvu2YHKXEBzVEj2m",
  "key9": "5e7zw7PUEZ5DvZiakjTMTqaAvZ5pqTi5HxqQFA6714m3ZmZpbLxm91TNYYRajM3rziLfD57DRHXYSboEyxbVr8q2",
  "key10": "4rM4eYXTyZRJURbYz9SNtmJxj68kvKoB1JLcb4mLxvRxDA8TxXWUqaxE5ZVrBWpconL6XLbzv7SbEXa3Uvshwyjd",
  "key11": "5DCsevVDyyNnYWB4zVVgPwaFP8PvxTPvs4cEZBysc1X5eY7BgnJjLcLMzk6YNv4EH2rFjbcHATR4N6sc2BPHAmnU",
  "key12": "4h9sbcYuFqpJiyBMebSVHq4TvvPVqxnL7GmGdkDV7oDvYafC9DxCB9noVu7Eamxh8SDgUnYSJCCkPSioZX51tTrx",
  "key13": "2J59V1YZhiwvm8xV9Xw3fj1SGLwb11Fi5LavfZi85PrhrxnfU23iLkYwgtDv29CXcESHrd8YkE6ca4HiWiogb9h6",
  "key14": "d5MWkhYy6KfPAYZ3Z28rchHq75oMQGGv1Seb7g67samUrGpsJWzXKpvxoo2k7PBQrf6bsNCQxZ7MFTdPK8xYW4y",
  "key15": "3GRe1VNsV41BfAc6H2NirbHmxD7QGPbmY9V2GDhVX19Ayx1DXJU8FSxhQR3sz9T6d4YKpJ46SSZ2TnjbWCKoTZPk",
  "key16": "B2gxrnh4it7QAvNJwKRpzrPMAn5hhBSvMcvTx499qoXyhAnSVWdqnaAyohkhu5FmmRQoyq2CxfDsBgghjKsGK3b",
  "key17": "3iyhroy1t9oPn1Z8chuqUEMzgtx1doBhmHvt65xWeDNjHcKvm3sDsxoXpM6GyfNgsAQwuwTmZwoFdB7zTpGuZX7A",
  "key18": "2gAgxKMRTqJXbtRB4c3Y6pGFL8M3q8dZUbk6fSTPCNr4LJC6yFCfpLwoTi8h3wsLJNFCRJEAYo9eMLNRWrTFZodr",
  "key19": "63cxZ43gz3pGsJTNj8jCwC9fgo1HquzYP2cnvEtVk6jKMDvihpMuuSJtHW818qN7Q67KuxdVxqevXWnZh4Es6Y6A",
  "key20": "4twUz5s64rLzizKww7DYef1qtF3x1vDt52mjwrBMT8ifrTC8BRZBY825t6iPxwPKVmxvqP9DP8gnTHahZan41Pq",
  "key21": "2pZFdkJF4nhaaehikEah9oadaer4RavWBL5JKUZE82tbUYueJEnkaU8bS63s64fq1VnMEcwvQa5C17DgAEfLY1FE",
  "key22": "2RXAnS1br5EDo88SEhAXe9KX4agpMKGdk5jyjqtySkpGZvKTfirZAeGfbvRFtA9HYeGbWi3SejmLMhD7BUgTRwWu",
  "key23": "yDT3QLxKzVmzgPLCepeakT4T3QemidtR8U38VoCLorNNGbfYzHSN1WY3GG6tKjoaYsBstsSLcCTNyrn4rQv7Pfd",
  "key24": "5bQjvj2jvkE3UXwGArDUa6QcXHZMGu1xBb7tgDn6ykzaUmXt4jBPJmc6vTnDDqHatzmvPXKnLjgdfJwzzqYRPzzC",
  "key25": "4uMtP1ryUXcoTP4KaeLpgjU55YauaBbtYwML7nGrQRboFgCvxNdGZqJfQEK2NLtBWkBxyNzCztQeqZEjiCXVP9tz",
  "key26": "2DWi6BZPv8BrK3qjoxPvR2rTVp2h3yp2GcmQYiC2eAmToQqB73Mdh2sDbAPEvFNVdEBGbJzZ8isqGf9GWeSg7U1Z",
  "key27": "3DkU1vvKfPsjLG9spRFBLrM8cwJi3Qm6jwTr84X3tiTkBTkYZki6SaGE1GFsRth9g1BRn6vYdAw5KxFLXucCvzsL",
  "key28": "54taGUpnRgUrYwSpxfVTTVxyMgqzPTec4NvgcLJcCiosHsiuv1ozAStGqCkpQybxskBBBgxXo69Lr9qtftRNpktP",
  "key29": "7SdPuJNgyABsRDrXDg6sMNz1YmcHS7JRhbn9Z1ifQUgvFfDVYPCagWzAWmHfWKZmx4oKA9chFZzAvfdHSXyE1Zk",
  "key30": "4ZMM1dkbmUWdcXFrEnjJHKQSmzDqA5dAWUWLe2efN92X75BAw9nhLdYvuppByvWswbJCNjxDxrHiFxfKvtmt4rd2",
  "key31": "3R9nvoraE31kcqowU9yhjdbE1W9PBssdX1kWdeekfdrzLZamyVvjiyahKX2NhNB2TijxqZbUf3oe2iXLhRoqcxA",
  "key32": "4d2wCtJNsTaN8CnngfygMZEM5zp8nweuoFAZqFafJaxzsPP6nr54fM9F8n9jwtx1ibrczDtCXWfa19sVeMWtn8VY",
  "key33": "4mkcWxanE6pVREwd6RiJmKi1VNnFJEZpbBiuqYVi9xjeqYJZvjuCViBekK8MBLUXt5z4icD2aK3na8RtrUKxPbA4",
  "key34": "4Jwbo5kt4VKwX1Ei5yCUgUR7913nmyxBjVFZiZCLGdkQeGVayLZPTnQTmrRnJzoG6nMqUTXdFxqGbueBqsaWmq2d",
  "key35": "5XmegoNgsLZo8LwpQ6Qii4wdBRNiV6yGiX2czSKvW5CqAC1yQG3d4RRMBfxwofHXXCtXczoQQ1QZ1mTt5NPP7bNp",
  "key36": "393wmpbcQwzetDVfSCAqinkqNdX9E5DYGoCi3Czh7Yhzsu45H1LyqZxTSX59aptkpDXXhuVd8n2bpX1MZK8YcSjq",
  "key37": "5LZt1wcYL75QtFySA34z5cajwavokRM3ZZo4HP6XKre3xp1JUjQTyuUXMLsFGWHaK7PoRxwGnCgdJeLSQGBf4Bae",
  "key38": "4byUEH6pTKf7hKUZ3qLskqPJ8jaGccMbhj9HmbpwqTv6urWzxBCzEP4hNtJrXJejdThTYqbyX4dhXKwMJ6dbfdSk",
  "key39": "QbvvpDGcnRATYREG1Zo5jauUwudVhZ1JGys3isi1mu77eVnrWioag24fTQhoPGWruLxMKqNLC5fTSxd9yS3y2np",
  "key40": "3s42XNxGmodF9JH1f6W27Dh1jCQAUW5siBTBNwQeCg4r5P1s3ETKvrrgzJUsoCqfsG7ZG2eSH2JWoU9Xgik4QK9M",
  "key41": "3BirDcHmFx5tksaUuhmS2tQdEu5boDn56f6GMxLThEP7ZB3h5tVxc6jZWP6PcbdxVJSdewGyimN62GiqduR8azTp"
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
