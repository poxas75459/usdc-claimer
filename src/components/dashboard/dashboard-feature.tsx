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
    "4k1Ue9DhHkWPJE1VqcivAwXmQUSmZaBAgHuV7S5dgGbuvWUBBfpuheAuzngKFBeE6a5oicCAYJELjU5vEYhzDMbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28F23oih7jPULVmHQt4fgZysbUEktunNrwFs6uPQoMYTmffEtU6apQZBj6UHVUXwFZVGZMg6MsgVGevCxvU9PfXd",
  "key1": "5YhP3mpC8H2k1z28By4nKTxKdkhXFJdvrDbfN6uExus5ZNLVDpre4RxstbDu9g284dNAtC7Yx15oqKKJdnxsNeDM",
  "key2": "5GcWdx8irmB3zTZDngSE7PyW6Ey7acTVULtCDMwMvTXbeX1kh6tjJKo6SiAicLheAnAMsj97nNKBQTWb2h3ZT9dd",
  "key3": "5QxKd5yTAqEhZHxZwv11NPTSGmJr3dUsxj6Ch6s6PKr5GhPSgLywhdvfwBuAEiEN1tXgRV1RaseZUXRfER1GmRp5",
  "key4": "49xT74rXmdGJ2287SGMyEmKfqX9n3JbM62kV6uJTq3SHz5Ptf4FT1J3Hc6e989JmMT4pYsMx4MdUmvKyEaHie1VT",
  "key5": "hewPF9rMbiUps7f5Sm8XePmTQ1MnaE2We15xsgkckQo5vhGVvZwe1Ju9FPU4GeMQhLoE6yMcEWMtmHHofxqvTDS",
  "key6": "2asM2RPLeJMZrmEGTawhFwYrCUedHKQ2qvVqnhZkst39kxrrz2gBLMYAWXSkgTyDVRSa6N1NNdMwF3akzDMRHhaB",
  "key7": "uByCcb2m1EV6K5peCFRsyPv1Fp3NDCZHdJVV5rCEh3Pho45Gg4wqWu2XHMNVV7KsMEhivAHjDjxZjhR3zFCNPGr",
  "key8": "57894PHS7N1iG4BgYvnwsEfUUDqonoUahHKj62uAxoewkzex95yVaAngTpRWDibmW1U8AqQAYA244Ubn37FFEYJU",
  "key9": "2KvcDhJvzUUhgBHj3WUrteixb4DzHPHoAf6P6TZTAj4LFrdPtkCtvKjqokx8onQXDTpbKFNuHehr7aKNDgGNbUZV",
  "key10": "2kAo9NgdktRCCehWDcfCVBfAji4FiUXNk3aVspmgC6nYNuVGhYx5urEGo5xY8XeKTHBXoQpfXCoop2FZdtfg3yAn",
  "key11": "2jLBgqagEYJcP1RBkKT5MoDNRfpMX7zrKi2PkG99wUk96N1dgMuVpJWYyujdVDijko9wKkjmrXqZBeoAzNyjA3Gy",
  "key12": "4FBnu1u4kznL4Qr42zQpAwm9iAv1gGP5eHAzgsDRT5MH7iQ4TBKNf6pwwVo8NcbmgapHcFmvwU9ZQkVQ8JixbgpH",
  "key13": "3taWdrQcKhXBiVEPwDy48E15WkCf7ftFgjRezSTvZGqWGSRZH5TWj6WV5oyTQJJUhAua3i3qPMRaE1dZ2BkgZ93Q",
  "key14": "4Ak2y4rTDVkEowMYaG3HSJecHxxsrJMNtgByyGrqKQUBSatnY28bu2UQnyg5HbUimYfGdSGH6k3Wb7Htm6iBu5Ux",
  "key15": "HMynQkDSXNQVXMPCAj6oS9VyPVhin8WvgWqe6x5jSVKutBuzSZEDH23vb1QaY7s9koaspf7E9oGykji1cdZzn3h",
  "key16": "JRTewcV4X6zaJg7QsW9nCvKrRDLKZu6NML2ThZ9yETj9XnKKgG9c6YP1neD37ZxvW2xQmkJDQSSJ7NBcTh7Re9k",
  "key17": "5wzzuoaF3dtQWser5ptG14yW3jogA32hiKwsN3R8XXSazyHm2bTEaxsY2jiy6s3WiSD4iyQ2cvbdpY9kncqQR4Ku",
  "key18": "5y6cHxArpJEt8dMcTSD2fRJTUdA6F55xTiiw4ptR4TfwSoALLD11wix2LUwJBArFaaNgrdBGCr4aapJnCWJEv5ax",
  "key19": "634Z6RLfER6DEyGCFoAq1nrz9qeVhRMk9tTFuaA4txLz56QoZpir4u7XLRT9zMsHt35y8QBbJNFwbWdixtvobGaZ",
  "key20": "3n4E4ZgyfXwqzmYmNdDC3Lnc5P3jHxJce7PpuzAvjhcHUgQ7fpbnhtagqWL3WQEXm7dGEikr37rcbQvzAE5m9A6j",
  "key21": "2wmYY17tnCzrLk6nERGE169fQXbyQZMXn5Hp1FM1z4SSwureY49mBZ1GK1tmShReDMMvdFM6ZxAC1ASL2nH8GQwY",
  "key22": "5kfApHeAzudmXn4RP5ouMZ9fX6pCLe91VzMhf3HXQk2vr7vaLBERzttyvdDKhpKMNC1vZpskSLXMDvx6pXtz8Yue",
  "key23": "3Lg8DyRVPM7Aysrq5pt6C96f4AhFUa5bAYwJ7zMCBSo82Xa8U4TGGKQazrtuedu53QNSJFFJxiuqEZ9x8srQCg1R",
  "key24": "5GvpQpQG3bqM2isQRThroEudSU6ydcmNkNx4HMY8WYY3LUiRzLZP9rvwKu8gw7PuoS2keAN45EqMmNMHpUYwz8DP",
  "key25": "3AeMKCoYbT5bdt44ern3KYftjuhHzgYBMx3NGx746XX8uhqKv29aBLwKcvZR2cnALg9aFi4AJpuwZfAQoq5f4xRh",
  "key26": "2JUZ71SLXuwch1RxELmE9UeynyMovFXTsMsNhBgbYYfZjL3ni7Di5vcgq5u347NNB6NvWyYxgHpeEPt6VvcQK2AA",
  "key27": "3EAQTQYyb2ytuy9sZXB2yW3FuqHNnqA4j3Wp7GdhpZhDvP22uxfptcffNKVkmQiJ4APcsiasi3WkbGKsRcgoyNvS",
  "key28": "4k6WQjhJC3CVmYqzrGKcckWSoT4FfqL2W415tW58TjwgteaB3xoMS4RmksjMbPpKLF3TWQNQdbKcEGgB68uH3Y3M",
  "key29": "37M6RzqWN6zpUkM8iQZWwdUNxgXAE6i7ratrNzVfJpdatga3UU8bguRUZjABeVQHCPyyt2p3B7aCvgY2Mnzin1oz",
  "key30": "52uADPmtVJGdPJTkH6wdVi3NTkihvgsgT6Jd3p2SK8CtFRgMKuTj7KSY2os24QcpdMjgfnhFnT4VJpaifbXKFLzM",
  "key31": "4yRXWxX2crWnzK4zdtCbkRZwJsG8kYDS4iRGpdpioWZzCtT2CoCZ6iH7hdsMfcEDATodcBZY1MEgw84ao9iNGcxU",
  "key32": "5y6tH631K18aidTzaGST6UiLG5HQEn9jULrGZkW2HMmUQ5ZmpZWNn4aRQhg6zkBpbHd6KGZ7UH29jLDjW2WYTF17",
  "key33": "28sjBdn5SrkAr2PtgBmPiqp4tWqYvRmXXBXzmx6teu8brMpPJj5eGAQ2sPxzU368euk4yCAHXanuETRqzpbhFsmr",
  "key34": "3M9g4Us5AKWBgABdfghGcoTaDE9LHozXuauRXhwND1VqE3chXT55dGC9C1yGPUEyAhee3dVUvKADrJw3woE1NzhD",
  "key35": "21qJyeGcYJ6K4U6adtk8xyaH5rzJgUW3qP77q67k7GKYKam49wvpNmKJZ8eZyBpo2yt5iWUEhpAhZmcR7ngGAXGK",
  "key36": "4hKvebAi9eAU2NWXQSKkNUhdAzr3RtD42DAc1XMbUG9FQRSavBD3X1KwCUEpUg3XFNLPfzwvJJ19SnjrL2RcmUmr",
  "key37": "6WMSi3VkxUh7zfh1895aeBsKazD7cxM9pdKa3tCVz6HL4MQFY4CgEHdcdpQ3XDWC8jjYHFsC28cip9sSgqYCbdU"
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
