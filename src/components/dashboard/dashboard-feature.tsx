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
    "3xbnxEaH15GaF5yExJHRmemnAd8dzbuA4B7SJum42QF4ZVqZZ8DpPyoJ8pqbwy9damhUJMqBkRnVJ4PbW9VENiMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w63Buj5UdtJpu9a5i1zUzeofGkxDvy8NseNX7KAFALGoWtc45jvZcDtMbbhGsyWf3hH8vFTuxYzB3Dx7YqwFgpo",
  "key1": "3ubfrZjMzcrQivgdR39ieqV4yQHuvSxFwct24X9kbVaLoSn6bYfBpGW8F2GCN9Fv8i2pYCvL1GnPvgtbo1S85KcL",
  "key2": "3EiQvc6Abw2azCmkMo1XcXVQU3VSSAANjZN8qcKoNeGTvrPkRjDHzvhNRKi2U3RkrgtzdjkySRzEDYpoQcRjrkce",
  "key3": "33wyb4TT6mW5qgGYXDBmgNuq2wY8nqoTXta9yQb2s4K3rdEaqFMEqMkVoUYMRodjEnSaBzbvgZBFLi6ghcXLdLmq",
  "key4": "3eXTJW3dfN1SV48b5RXvWq5JoDR5T2EqCFkK9BZtpvqe7VuBWtS6qU6HdJtewysY63fXT3FKFXbT1DcrziuUVLYK",
  "key5": "4zrRn6HHL5zz1eTyQwJm2sH1yFUdE7RBDkkPXiEbBbi7i9gFQz2GgUC33WyAUgsNqpcpzR5dN5iYbuaQWCkzEL8n",
  "key6": "46ZSWsKkWPvVeoesg2FDVyiyAAbj8J8VG7r11k2MSsXMwzVFAmQC3ezQgdtVjpBvGFeKctheMAsWJ41Sn55uaekw",
  "key7": "2WLriWdBUHDpMzBDbwmPF1dpbqBHzvTVkTMe13tvPaiHUf3UougjzwLNdAmcz6UNoinP7oWgHBnao2TmKKjVCGe2",
  "key8": "FLAAiHb7VFfvg74vnVL7SMDQy9SzjoCwRWVTzfrVh39KgDwufzcemtekiRmqdpkyQopkKHCboQR5xf7NZjzVq2g",
  "key9": "2knuZXqiHZrTcUVQvdAdm4Xzn9gmM8RbRmJczBm8eaNZ4M35CQtRcPjE5PY32tsZqMiy1E9zgLL6RFhYrHstY9jH",
  "key10": "5ypeZmrZVeCE7w1RVyY1FHrusTmcDN1kB4Koyn6MHBCB5jhtYG52pXTe7NQsKg8jc4gVWapkbaJEiHnPBELFsf55",
  "key11": "3sGg9KdfEjhJ8mtcYDNuRJFJSyaBhdW9WFrJLLu8xmXeSd3tMdoeqtLRBsz6ntB4erBxEoFUpo7va6xnUYd2UFfu",
  "key12": "54APYbgrD4pW4ysmfUYvNa67rn68TLppoXqXvPxXGmfeoGw1YPdMJxJwxMKHgWSFKdNKSiW3cLYwR8HKzEf7ARP8",
  "key13": "25nMWVSDs4AYDRHECBPoJTY4dWSUHTDMxYihcTLT8zBzvynJ6KWNTqyF7WtZKTJRhNamdr5GTzro7EWNhaYWX2Gg",
  "key14": "9S5MN4xKYMSncA4gKsWNgsmS6go1vqrUTjAbWYxiYoTwoLUD9tEtE892unGzjgSQBH2KuRYDh7GkGo47kB4gW8g",
  "key15": "4NiVkyzGr7zVQuHN2Fij4NqFaBMzy8zfxQRvyLM1e91tSuSyGNq7U8mYDvhwNw18roANUHZRJzMbk5rvFQy5yA7r",
  "key16": "5L2mKLQM8rSa3auSDYnqn9NkBPkFUuwFkjVmmiAN4VJmHSHPuQtXfSY7w3aiit5saG5eRV7WKCa4G1YQhheafxmD",
  "key17": "3qjayzPhWrqRLjh6hJcFvhY5VvRYQRtYFTPX7iUSKMnS2nxK7oYzAkuMjBo7DrPpnhXdSveAHmyKbYTVum9d9HA9",
  "key18": "mHTLCd2F23NZKp9GCoyqenxsZigMUc8ajNjH6tetQeMsDmZoSDWdGaqkV1hAS7N6CEtzs9zRZgyr2pvZ8rUHp9E",
  "key19": "5XkC18Xr5WUgnvzKD5iSYfYdhFNWyMjoNKRGRfzRJhNoiL824mTA3hFdTT3ixrqUfbFUCheFbKvDsjerinbLSSKv",
  "key20": "2nyVXqo99pzva3RuF9153n7zNFpHWV4fU74h3VjZXH2q1yGAea2X1HBiwWwiQxrqdKCpLn4yaU7es5JKVS1gZvQu",
  "key21": "4zyiiGkyqjP5sHUsUFom58pWCYbaxy9Zsb6hNaZdAnZtjdFhdNNqV1GyzZSCJdt6hA8jWnBPxTT7LgA8pwB8xubh",
  "key22": "42VRNhfEuhen16e5zcrgkKb5eSfrkgvYNpJP3zCdUn61eU4oneWVKy4T6CET2g1CYSzmUPVVdueWmE55StjSq1sg",
  "key23": "3f6udhA2hCx4zJNDbghanoHbwcnbWDWZ4GHNKzkfByRe6foywrdmcbRbBLYkJpZTr9nofMj6obbF4e4rH2Kf4Vdx",
  "key24": "21cvcCNYGKrV98VfGWeXnpheabYPGYqVm9UAJQRVKx414pSxz4svigWGQaz31mZvi5K7PN4B34pqyZTkiHefyW3c",
  "key25": "oLg2o4kv59Co8fNHbm2T2R2SDV89CnDnqF2evgSiGbYig99EeXdDRhK6BbZgiffyGs78PNJ2L5VraaQ8aqbjYu1",
  "key26": "wxtHKDiQS2yvpEdAqULCCeuFXAgi4HpNJakjt7XSiYT9xfoPKnRBVEd589WW5ZLjFfEWopqod5u8xtqT5Xoqv6u",
  "key27": "65DSjPBjJdqAjTSpsXiiN8K5ApepQ9wWwito2DE32faZwKqMWDoFcFUGQtmKnEpjucfJVRQFuhvxkAnUEMY2xN9T",
  "key28": "3vsD9toYXTVH96NF6pdWFEKkhs34KVkPLQ8tspHhXdgyAdHAvn3SNieQw3wmn7cm6xGBLjDxbeCtCwiW9Xv5eEEF",
  "key29": "QxvpHuYiBSiFNZkYeLPNWhxU7xq9fTzggWobk2skJuPk8EPkGNh7pE5gRSTFFQuiGTWZr5jNaKxr3QrrLRP8fSU",
  "key30": "5Li4g6VaaAYBApVwZxnANAphJPaqJmZkuyiozVWinCbuDZKbBFEWMiQzfvaMK7t1SiuKchnMcv2DyeDgWxxEotHt",
  "key31": "hVdUU9BtL2K6ykUJpP21Qu3tWsViAZAACkR5SKvjsuTx3VtBVryVy5LCtfpz5WPtgDNjCGrWXG5SeaByqsvf4Zo",
  "key32": "62SSTmKQq5ZPzz9qpM5Eggp6eBq5nbuuDPUUW2FzbSyXcUhSLjJkdQndRC1vLbZMH3faBZiLAUisYBD5QKSUFdhw",
  "key33": "ncq3F8BRPQgxGhmNjfwctGiW3QCmwhzJ4rjWcPhfoSE2Jku5JjrdbzKkp9F2bC7hcHDxbTStVNpRq4aSrBydS11",
  "key34": "3zu216E9SHFLVFia2WKSrXaawWEv4jBkzBkRBvDHct9K5NWGGeeLUW2Lk3vHS6brMAiQrGcMWhVFGdnMxxSsmTbC",
  "key35": "4vLp22Ph2e8whfeN6DXWrKKFLLsWuDZjZx5mcoUgTubTCnZC5m1zsR8okYbxYmvCNEHcG4UBixJYb76m82UaKhrD",
  "key36": "2UpqXemUx6yibCSrrbEMaivm5gGbvqtJarZRXRxQMC5dBFKfraBti2GUadj3xC3iFJwJFZDiyo1xd1dDHxGjG88d",
  "key37": "2RbByf5URAv2hLtGEpGxRAmzyexPnthQgowSZh31j9cVZNg24zskXvmnyZ9iZmsWWZqRuBM6uqQgevnx3G35ojxc",
  "key38": "26mCzrBFb34HW7g3CjzvfRHibRy819AFLyqJWMEtFYqhYA22HGdLLXrnrkoEjACXwz2wgDnJ6KJ6hjCgKFm31kdt",
  "key39": "3oJHHr4Av996oDHri3FtAqnxohJQEawAgQEwNxNk9ZXzVdSiqE5QrUz5cDGEBByCJgxTk6b6971hGT38X6gUKWrs",
  "key40": "T48vwmk9KTY1RgPM2BS5gn9B3AQda9hHbs6DhugnBpp5JF2AGsS8dYPvv1EiaPZiS31ZQAnLyEJTPaozS7Jku8v",
  "key41": "5zsD9Brb7Xkvmu7YxMi7FX34TQyruCu9RzRta9zHE83NxiCcj24QiszGACRMKiwCAHYrMksNzTVeheLsy7w5U598",
  "key42": "53fbPxF79P5WC4bjyeRYw1KK1gYs2asiqmcADHZfKrm7fAmevVVJjuJN5gWJ2x8uNBaU6n4pyfpUGcFaxU7mY3j5",
  "key43": "551aUWZDruWsgY72wasC59rwu8PHgftP9M8wXp58Wv2NZd1W6wm9nr5g8URTWrmraU68tZjVMCBDtKUhKQHAKKeZ",
  "key44": "5BgKERQFP4L23eLjQxqtb8ygbXS1qUe9m8EAKzfN4LWCt6ibGeUEcYENm7tEgcD9NzKfgQjtSyq73fF6XP5L8sT8",
  "key45": "29XwVYq1Uyn8nSSBmCHHnVcsMHyGMBPCi7XAEKhyCvJxDewgvdTY9YaCzBtD9qBbQXobV9sVXoTF7DBW12WNkyXS"
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
