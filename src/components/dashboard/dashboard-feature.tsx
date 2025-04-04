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
    "3MnkoyAZGyDfRwL7ao15uMujD8MDGgd2rC6gf5MuCVZHs5Hg9ZG2BX1cgfC8MEV6eYdnzeqcfeSqMJnj3Jdn7bhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjhfWXYENiQJdYFzcNJW8HJtCS2vGJnpFSYbNk2uyHUsQkuMaaNSP7jVJ2RjpQMCfb1te9hDxNaVQbXHHbWjqDv",
  "key1": "2uxwH7NePQJKhnsUDrcSGUMQTPhLqgQ2AHkA7Uf1iuD8PXjy4GimQ7nyrd6igK2u7t1GKmyK7y8fDrPXgmA8URcz",
  "key2": "9uQKkT2tQ4P1fqFrxz4ibiJqjuQuT6HBF7tDavP38orFpFLYdfss9GEJ8zpZzWCDup8Zs7UkUYNRSX3Vg2fBT5g",
  "key3": "52x2WzWVEXFrZLLeEjc2hmyaQ2f17HwgsYHCzVYsJfp1wKshBpR3LNrxX8kXxUVwXxQuQUeQNKpZkjBH5d5MMFpd",
  "key4": "3SweA6fVUJY87AqA68grFY4RPJfQBhpKQcf9GiZ37YfzTrsbWFzck8cRM1FormYZguNxAf1z98DnJw4Eoo3s6ZVz",
  "key5": "3n5tFpnVPsmKhBCaCCJ2jynx5asbTvuoYtgm8coGV1FrgZVh4rCTmhfKaQ3FAcMLFa9EbaHi5UNipkRVgxnhQ7fC",
  "key6": "4S1pJnhmEEFQMEr7UPpCmXeFddVuKCotH73tERdAmb57ztpyDrpvRwCR7iYTDFxeThRxAuNh9pTUNW81uEGkzDk4",
  "key7": "2HwrooLxnKCQXYk5futsAVKa45bo49Bf787fXabcq5oqvpToK1L2VRd6NHfmrfXxurPcUjDdYT77PjG1d1TukNmo",
  "key8": "2LxLSberMu4WsbKDfwuiuxauGDhrKFsbMVjrqmGCQfYKXEVmaNSg985X8K1ZyBVbwYwU6TerEVAnfM73tQX65uFG",
  "key9": "3fCgNPzMnV6Ho1V24wrrpaxu9dttvWkKBhdfXr8SpWEpk36fbm82sp4fazTykEEKApAWAjThxvUeeA7v3ZxzLPrd",
  "key10": "r92Y4DhVGEp5A8xMzqyMr7VHpoBTj7SgmYwUo3uZySbWLLhoCrLPEwhRbyJvqUDu6UTWyaCZmajGm19TpyhW9Lw",
  "key11": "2FGAS6xQWAKFmY7ocDG3FokBaNCYW4RfhWCw64TrbBHxw2xdVsKDQyrbwMyjuG8ADVYzHpCP9i8WofKvFvwGsmER",
  "key12": "4hekzNaqFB4s5cSS1U8YjpXAgMzZPMVLtnCWTVg8XrUm73Q9KiD5V3wJT1ccWf4hfijFVaTbHjyjkJYYNxs4Xt25",
  "key13": "kAYrPExMPeKxy8SaD6knhZjPCmhsdrfoe9BMEJMfcqxfBarEGDrcZgWSZ4Yji5ZdvBf7mh8FMhAc2hbPeHhAaRv",
  "key14": "LgzbyiACacxAVcAHShiJJCmPGV7ToCK5YeDtxk5qe4T4u9ZCkmFHAX2iBqoWqc1VxVcFdjMwYVhqodyJkwEThRa",
  "key15": "2Aiucz5A7FBqoRLFvqjmBoLUy4EaRJBWt6jNrrANNgTrxfCJFZhqbwA9jHR1yzYK6bmw4rd8iNDzhdbHCQ2gcVFX",
  "key16": "58RAebtpsDvaU76iHSVGKtYQ9Pmyi7VugiS5P69SjSHLT7rXsURjv4V5UtGBmobVtsgYcLXwvmxuJ6zQ8V28Qbmv",
  "key17": "4USsBk3kz9gqdgcQZck9NpQwM9pJ56pbHJCc9vEu9yFjBcCnDJvPmjAzRANuJ3dpiVWhSqF98zUV2Zm2cDB8snJp",
  "key18": "gyCexidQmTLSMnL7fKi9eMXC1Fx8r3xfZpn247hFukoiyZ6165rA3YymeUP7k6uEGMHFhKSdEJtaormBVqgQ4KY",
  "key19": "44QF1xyCErfb9zcbnyvnJ4VzvgtSaeVN1Av5LSCzdxWxt1BMp3wraJGugh7rGKjYxo9G1WL8ojbGXQFncbxpZqYp",
  "key20": "5TCHHqRK2DfgMqiiyMgNuPBAxXXZzYus6uXNd8arEwyFwTvpQhmWezBTakR5EixKJ4k7tWpHPmJdAnvryHMBoqsw",
  "key21": "5pepVyC98curGaSfi9H53VxVy3WQDzsdkj98Vm4RvUAkEWucVip4e8ZFm1k15YdKKKwNqwppcJ1wQsmxBXQx4fc6",
  "key22": "5nz9K5VJk9eaxU9TsMCDxyPQJHyZwDjnVgvgj6TxmhnHraRGdsNdiQrcf7nDZH2birMz8BTKXWL9J6nZymwVzgvn",
  "key23": "3jz9pjoMMNanLA5oicZDAWF4BvSM83zJHJWUR1sTxdvjmTNHsJcdvNq6N11cED46fKzsqvxGBHfav9zjQuQCY1Hu",
  "key24": "2tzyDtUo9Uf5rSUB8fUZCKZwyfRSvTqDPuFxWANWCzkyPNW18Uyw6J7fwKqAVRRuuhTeioXSNYvCw8UKQNpAK5zQ",
  "key25": "4JDB1P2iJuPHtEf1nhBWGrQKoJdmAQiTSK57kmLwWPfGuDcZe4okK4m8xJbdP3DXW24U6KcMHydNMwUe7K1xqHCr",
  "key26": "2pXqNurTdhD6R7xoKa4fY7LDiwqgtyMgaxzpzcTFYYkBQEJcWFbFdmZAhQnj92oakTDWCFrF5fW4Zf1gGjkqWv6T",
  "key27": "2uscsdk7z5hLDRfJkgaqYkqq4i9MNMUJTPn4YrPAkrag3NTUugXgZpQbnLdSJ2s3Wn7yRs6pUn9j5Y7piTpWcn4k",
  "key28": "53Wc1hvKy87d8YRwcYrJ69awmVqvyTKb9iHtBLfygPEZbyTCbfrsRqC5mf9Gm3qpNsvE5KGzjYDNbUJYYhVVja2m",
  "key29": "55hMJJ8ZhsQnsmDq3CEZq7RvTDmaftbaFjDsABh247zBR6wJW1ipHcZjPZQWiTMqxyRGrXPeKDMu17Vxz4aQJvic",
  "key30": "31m9Dx8ToTH7PYdzyFHASBGbdTAzALXVHCuBmQShaPF2yMii1AwUsk9KPUD3XMnpJggm92EhjEFYuK2FcqsUjVM3",
  "key31": "2dZpjAwPHYSWGFFeT79wAwqiTKPnWQMnVUqNxgz55jEyQMPfgEF1Xqy7ZKnezZYmiUyZtz6bBRRLvVYeGstFcqpZ",
  "key32": "3t6HaYxECdtMG6QiE3hZVCAXKgGR7XYm7471vMD5RriPZMwtLNSBmNCMPuagZaB8poLVGu6ftTSZ85Q1XWSt68SZ",
  "key33": "3GAGsQRNiX53rPMuaQxtcprdVuSwFcqeKz3QLPxJysrjrBzsaJE6GtBeJYzousWJRzaaYauxRs4zAyYKx3V7HZW2",
  "key34": "3Tqt6aitMPuELR9NaH5h9nPthGMKMX5VgwPqgNCtThuVgSCaCTpakrqcutmumb5r5Bu7MAEVXQZXu9EexujJLcXN",
  "key35": "4zQ4yXWRqTFXwSdVZLg1VdL5GHFurNPcsNLMXMTf7WUwWUWgudn7quuMCBZT7q6RfFJPZKcL9BqxaKJxT1efkkxM",
  "key36": "4FG5R6iCaJtYPUn3zXC7hRTqHEVq4izfyS35kJcgxbf4Wn4ubKB9fLSSkdtpnrBtKeFjxUZXRBW221duzQMLDv52",
  "key37": "tTbcjyCysYLcBydgrp4JUh5k6uJ1GEXerRMM2rPNYB7nZ427qw8LUYUcukcCddeoPCMuE4t2LMWqhw5zQQzUWoi",
  "key38": "unAizsiPavsGz2UVHBC1BoBDvLW65Pf2ZC3zfNHZeNSZBBzS3R92jV8gLhvnUpeapb9PggzwbGyBZwXaMnh9ewk",
  "key39": "31BUcvq7eRK3GQ14MpcqNc4G1RXhXpA7mJd8WrFVo7VsBTCEgDeYZ5Uz1riDfP9HKQQsRxex4RtvNAKm6y8EmNYs",
  "key40": "665JtYwV5a7vzMSxkqDT8qb7ENkVpypAw9xdbJyuVNKxTF5SDMxXz9YarVvdjTErUNQoMvXrFdQrF7EsivJkvQG",
  "key41": "2AEcXm4MZ8a5VEs351EU9teh9ZS4pmfpKZghGSk2oLj36zx2mznaeNf5qTuVHqZedcXDeQ5g8pUNaxFRP91DJ1h1",
  "key42": "49hoGEK5rgND7cr1d3jrw1ThxzCh6FipZGfMWEbgAtEv17DMRpFnmZu5vVudQDyxyaB8Dopy3vSiCZ4ekwY57fPz",
  "key43": "3VCS7KdwKdyHQmagwDUQ8BoBGjyakFicXTzCYZXyPW7wfJF7TyvXW6o6uMM22ovTEEWTyBtvbF4FCiQPNQ1oQ1Gs",
  "key44": "HiphKC3aEEzR2GAcY3usYG6Yu6GoSNRtjJrPtDYWZeJbM7HYbghcgz476RMHQ8kNNoYCFUUGiqiDFxMoHTNLsN4",
  "key45": "5PSY91QeDTZWouQQ6uz2FGJoK8hQkS3XrEJsP8aSGyQwmwjG5pmpdG4GNCnF4qPJduFGjqtuEYJ9KkqigUp6BUMx"
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
