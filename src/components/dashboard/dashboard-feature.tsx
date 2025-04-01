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
    "53VLsuP2RWsnsjjRhjnsMr4dXNoYXSreJr869V8vPzgQQS2dU5qc7d2f3J6Uni29qjXEhxw2dyBmRw4g3xoQR3EX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56hjzWHh75b4KRja9Fad7A4mX4ZtvYJoeZABARG7cCiSR62S2ofXm3nydyqTakxbxznvsoHY5wbMU6jxP4c77gWC",
  "key1": "3n3MhYsh5r8a17wkq8mbLvj5ougADgTHNSxq5VwohDLyHYRcG12ei1fquZ9hbw6KnzXJesSaqYdEb3cLbLXpKXL7",
  "key2": "3ipwDppiu88Ag4ybSejG6jiu2Uub8jTxSsrKSMK4tJSLDTu5uoJT4y81iohm7aRFS26hAE9tj9M5WSrsR647a5ha",
  "key3": "66mEFC53VXSkYRPUVCxMBYbBExu7NLTZArwUJzxKtqbzd45VscftbGqzFRcVhyq6Jw6vj2eiUDHdbHiUjVeG5Nk5",
  "key4": "sQ8Nt3KbFxjoPjNofiCMzxgZGjNcRWFUDWPyBwJniYjxu2T8mrVg8VwAq7NBF8Yrj7HpExqCzKHtzQhUXpodTjL",
  "key5": "3n31Bck2Z2JJsikkwY5iadAQjWLsjKReLVvxzAyimgtVvtqLp5qUUVSSLmQftQRVNHNohGdsXKg8wEMwMvTN7HTB",
  "key6": "5SkUXBiKyGg2ThQLkxoVXiDuXrxXHEa9AnLCAcSwN5eafcNMiwv1g5zQoo38SHFSxywwXR7dtGkCVKbXMUSbNVrr",
  "key7": "3DwVbuJUmHVLK1qsM7arPqzPrMgtQWPynqvt85Kgnk3c3vKXbs8g5cxdyqyVwvx6c1nfp6MKMj9Ao8hqY6ZRxasK",
  "key8": "QrJGDruA7uKt9teWmiCYkEa8i5Zajiy5rifxHRJxsKm9RVUzad4b4MekCoUpXqHfSN7xJmUGtP6hgz8Aom1b8yJ",
  "key9": "fEaj8mCNfCaL7Z2BFh2vujqjJqYHp9W3j3htMmtBwE2wsLJ8JQvHUDd9zyNgxUPsxSheYcrhBc8TnXUozH6JW7i",
  "key10": "twyjCfWU5gd7FFT19TYYP1Smr1qGzY4QdZtHMvFmmfof5vCnyLmdT23JXfv7vefAHPZk7jqtLFcPep2FSNZKJAW",
  "key11": "dMorjnScz4XQGrdVpYxC5px1K3eZoju611M4pR6bsvCG7haeGSwTmYnQm5NMbJFi8PjSVBrKUrDtjHJBsk5h28v",
  "key12": "2ZMT84W1jrSFVe7XFywjW6K7ZNC1Zs7zwmQHF6XZfwa76YXpbMmACWJo4vU91PmtF7QcdMDtZhLC4nBHuZupHJ6j",
  "key13": "3CsPDB6JR7C3S6psrtVAjyr2L4AFXGjpcbvJGMf2ZJKZZRqjvHcuvbRF4zm1sdYeGufGKFKWy4TvBSF7kwxyMLmV",
  "key14": "nahrFXFZWHpmPbR1h2fextEq2yFStm5ocqh5kdFPkQdxaf1TWET2CbcvZKu5YXoRxTxBinUoCcDYAPahok8Mn4u",
  "key15": "XgxeTNwfqXDNonjHBXCc57iV7max7WjPzuWQJtCQWQFgzArGh8d9Hi6JxpYARFrGxnJcT4A3xD1vEzpa9BNJSB9",
  "key16": "4W5xMViTAyKH5eHSmRRMi62EuT5MhF2K4dNLhSgbo7QGJMV4aQbSL3dxdNGPNRSTkvRvgDzRcnxXd23UaoyrbyzH",
  "key17": "2H5oKZJdKSvija1XGjTFgE41iKF1X9MaxtyUDeZ3J5LKae8zzQnkDcNFTTaKYjkEwz9nPJ11VUAgzNxNhRVQQD5i",
  "key18": "55jYeW3Va5e9RxpGjoqfigJoaJd2rYV7K49Ns2A52wRn5G9PN6w5u119F83upJ2n2S5Lc9ifustaxmyxsKXZtNjN",
  "key19": "3ukaFj8s2iRpQ7G2CuKjzin8pC7JDLEmomvXgAsxhegXD8NPEGVLzcMc9sbeSDSNAyLDtKwjXDTujyGv4KFJEVpF",
  "key20": "5wd4r9TcL7SZGMbV6997Rg1yMCLrsMryD8YaBubMg2QJmRoYq4484jLvmXLAy6bNSjE193DgWJ6uRawxsejQgDiD",
  "key21": "5uhyVpS5qRqot8W1JV8bd7Dn8j8eE1vsExXUxmoqorHd9qKXfzQHQwCvuqY8Xgsvn7kYEUU95MBPLREW8S4jBMez",
  "key22": "2GpvBLyf1xbUywhCQ9QqqLSBmr1ps6RBgxoa4Wryk8wA2Yjh1H5FH78Q6oZXaMgLL2D3ELpv6LVWtsEzoRjHdcmz",
  "key23": "4msQvsRWPMrtzePjrQZTcQBZU3yvNWziC8bi5JybXi2dfBsPWbmNXpgEtK9zxGGgvVM7zTcaBYRmrMEWibTRYDDg",
  "key24": "5oqLhxFNmLGD7XMGosqXnHHn2US8pzjFgsftpYC5H9FhAQ5PD9XieHBcX4VGja3F8789muTKuiNrh6xUgSHJMYm1",
  "key25": "3TXa5FBEvKQcUSWWqqpe5KpyLabKveA76SKhghHxjppAXxgV5cD7qNAp18maHGEqTiEt7Joy2kXtDrzj2KDS4arm",
  "key26": "5UZmiKT4oDbM2knPYSUubEqtAWRUgDAiA4D62b9CXQbp6u8w7qccQ12n22j53v7RYpQFkN7tPTEhiR2W3p3tP4rC",
  "key27": "3SDcM7kKfvVCEMWFJ1XU4hpSf1i1gcGHLPm2NYxBMMFiEfQeyr39tpjmhNfUQh86T95Cs6urH52V2UUnq7Xo1Fzg",
  "key28": "3N9k4SVXfYrfFC9JcJoeeT9PXiN86HehHd8QFA1cjwHDWbY3D6VRchDzVjwrq4f4ugQSRCHoJWvUL9UJiuDHyNok",
  "key29": "5WzYb9XYaEuFvmu5pRhWqEnQpvFbs4RJRbRWgnVXdDBBMTHaYkYZkE8DewV2L2H8ou7WAArZP2xhWdzNqvEGj3Hw",
  "key30": "2484Zxd1Tvfw6Asx7dvodfeSjeYvLgYdgDvaYGeqbMqFoawN9nWc3LnLdRqeF7uyg6we6WJJGZ91AB7pmyYvgUXX",
  "key31": "GnLTm4SgJH55uEiXVeFf85U1p7agmVaETMPBNpNtbWXws2KaxAeHj7xZfZUVk47QwjQR9uS4t92AJRoXEn9ksB9",
  "key32": "5wtqZ7LugzmSa7oYPt2spLCYtM2WHJhJGp434DSL8TrZmR4HFByohsAUHVYddzhfRrTDHQreoW8c6ThAo92AkVGL",
  "key33": "4K74JQtTqALFvZpMKrM79jziuFAQJRKtM4bpZkySsvQtsfGHsrsUB1wgtdK9zDMSyM5B9eUCsH7oc9wPjqFZLNTQ",
  "key34": "4HbWHXEhwZ1LmPXuh7UZGrDTk1LPWRiq6EKgYEAuXorJRfN1uL1ALDPkKuS5eBrQssti8Q1vQD7FAx8P3wsDscSa",
  "key35": "3TavW3fZa32RHnMxwKX3PWU8VHzxPv7yACVCfDsgnRbUQNcNYwUPhdEq9WtAK7BPpcdT5zd2j9VTtXB2bHtA6pyF",
  "key36": "5yDUHZL1E6p1yq1L8Em37oiGovxAM9aHouqkanwMHM6e817gTVUmjiMhRd6k99iGUgaGN4h5wfkkzVhWijuy2Pq1",
  "key37": "4qzBnP9NAE1xGG5QF2ETQznPV1eLBBmVsz9d5w9txX1osAyytQ9t2EPQLFYK96X7eDFCoXMPG2q2i6SnZXVGE7eu",
  "key38": "R6ybwXtphmrjecUenMuRsu4Mdewf6nJxSKsZFq4Be1niPozuAJHmKJSXJi5a56TMfm4qPAPvBX4n3UxbMpz33XY",
  "key39": "4Mi39mcxw3c9rymMKn4rVVwsj7VDmPdERsCpRNu6Xw7DtW7oMnE4r84uAnCYxvEHuiNnk6QbGmpZm7u6yjFRy8x",
  "key40": "286ciWyVeMM2D97Xj4N65ZTXwPrwcGQkApvQAzmPZURHtDubwBGYFas1rXrGk6pMRYyMFUdCMrDKs4CM6gyhGxL5",
  "key41": "4o9XNrsvR3X3bs7uj9xJW6t62pe43vBFsZQuCKMJhbh1BRViPd2TGeuneSnSJoSJLRaqA9BwQfesYjcpai4EXdAb",
  "key42": "4a7qMQPTZ13TXgFPcDGTUWmgWQd4Vik6hjmcraC2w8MoATbsTJQTmgbZmK3rULo63W6MZScQVjR3ezirmuKyC864",
  "key43": "3wp6D1nt28vT9uMCPvSnzeaNXRGuNVoE8mk1rbKh3N9LpLpw7XP5bN3nSYmN5ugP8cAb5CsjWmwYpPmfgSEjb9un",
  "key44": "5sxgaT67MenpqsGst8qYUyU5YFdbBXmh4xeXDUSerx9PyG8WH3Q4CDkHV9J6aEzbmTb92M6ZV8JvSE6BJKAzPa3j"
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
