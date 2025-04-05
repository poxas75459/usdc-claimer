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
    "4mqJZojFg9tsr8M4Fy7MrDM77Gq6vRodLFWMCFGgng7YaJpt1XByXCTJ9QFZdzRMPmKaT9ALRAFo6zMFcUHiVxQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EN7NizF7kGL962ZjkFo9GwLQcYg5z97ip2smi761awRfzXNeHN5HVKhCoLDGk85znTqSBZLi6eopSjKvgQfbDeS",
  "key1": "5YnTsohGWGqrAp9hxcD87VyW6r7Tms7XSZUcfqBPaSMiDhYNSX5Uj1VZH3Bt9trPBLppdKhMDW1brfDPtHPwsyEc",
  "key2": "2GUnkfYJTLFPrCRqWxyHDvoW2KnZqxBFX8CZgMLm3CcETua9BJZyTKji1aL1ZJF2tbdXQhrV3njrN6XtZNu7mNzv",
  "key3": "24bT49s1Yp8WPfhSK1eY2v3pZftiW8GCxViBeYZQcYwrqYxJd6cR62nHQSGWYmRB57BHdmbq6NbRMxQ2Fx7SNwJC",
  "key4": "4wWCQmekLn4gjz5cBqJcvfiKfxBjCVQ1Mx8hQVGppy2A8gGkFVaunVUCgiustFuSNHQoyN6p9mbau2WhsM7bxv69",
  "key5": "2Jtsj7NnMzou6JxQs1heVM236yp84eF4aSB84tcX2SPSPHcFT32EL3PEQYALret9AkMTA5FijFZ6BiLRurc4mq5S",
  "key6": "2QzAJzyr7zmFyXXGJ7qvefEKBTTs8JyHn3q79QrnVBxNBKAtEiTpzP8sfLwLZ3YvPA4yzgJkw8neJjaSfNR2M9x8",
  "key7": "2iXUf9smNcpJxQymYgh6o3ToLKQwA6ZecuwfJw6sNiyQhq1qnArorXCAEHJdYKksUxRhmQdT5X5Qa6xPv3a9x4Rx",
  "key8": "4APXqoYbSMDGwVtA59fyeUsh5pbttervtca2QKvLFwmXxYmZ2vw5J3EANeihweqCeHpft1qLtQ9YrCZQWQZ9VDf3",
  "key9": "4e7bWtvW7qgMTdmZbMnPAt6DuvPpfcxKGFGdFyWBvzX27qD9HUqxQXCQQxkjQtVUkFDABWwodVAsW51kMrZwjk3y",
  "key10": "3i5hPBVrSN9R9JvTVrzvUjMvqtQJaN8pBA8nC89WCexytdJJRthHFpbVX3m2xuKLyVyMoQrCsAePDvoAYziZZkXV",
  "key11": "4D7Tqe6wwzuHqLBxNCJesqQguD9oZvJuDqmwiuUpQqYqHeETi4qC5mu1kY8RT3SXoWwvqUacZdX6n9o4YJ4YSyVc",
  "key12": "3SVrw5zR4SG7vhZAfvLdq76ziwxvhGn5tqujDBkVBb8FTZDR8TPkYRRZcS2xrTjMbrcZHVRkUXZhaYzpNeCBCdYD",
  "key13": "64inc88VTRcHWhJPtEMUAQyQVU7EvAt849cecVfHvoUEKniBFtSD4GfQZgkP3m1gvXgpoXitGqcRWDf9v2fijrVT",
  "key14": "47yV6CF94jVGmwntf8xLHZBFsQcXfBwU2PdbURuGJYk2fdHhh4uzGeAXVGB5HS7X2XNYWj2SLR6qysDF4gmYbQMN",
  "key15": "XTjiPSz7rzn6EDTzbwdoy6wtUL8sTuogwcKVDgpcrMDxLZtmhh4GvtMdRjVkihVS1qCqyiYZQvyKViZZnpV4Z9V",
  "key16": "jZV8xthpoVSdXHTWkTaZuhGqHPrebAGQqB6N86PATa6vhufoKuzrwLmwREE4VwiTESG1bQi94MeSbtWCfKRhwAK",
  "key17": "GaoxLZyx9dzJwodspbEPwi5NQvkp4HCihHZHEoGtVASRMoKbWbTuh3mL4YifqNwGe4QRzUYujisAKQP9oD78rS8",
  "key18": "3NYAf1Q1yZFj9cRyQqfTQVAQK9JhXoeCKFjC4zc1qLv16UvBvucXF1GUWZQDLrS4Lf71CBW6DnMr2kmcSxviDyd7",
  "key19": "4Z4YiRiNo4a5eEQhvG44UitFQadTzFdaHM9yV9WeTMELvnFzt7YrmQn5SZ2ZZ5rvk2MqneviFicQDyyTgMfJdTmA",
  "key20": "4Yjkr4kfP6zLEqxKRwprrcwHmzEaKeB49p9NNoqdhXMvsgn19q1yGErGPt5opW3n9bavqUh3BLQrECXA528nhdJQ",
  "key21": "o9QridhmhDZCM2JqidxxoddM6D3itt436iXxtZiANA5zxqrf6AyZEgeoP8avEAGoyBfJjruqMZeZSkCpKyiwNaM",
  "key22": "67P5DofVGpYT3TviykczY7K2dW8yHWjpM5jmJspkJ6YFcH8xsKm5wk7d8pzJiVRz8p69G3Yjtz3jzfq2xkm3KH9C",
  "key23": "2MryzwCEaM7i45soC6CKmM8FTbqsg9u1P1N8vmgDNsvTNxQG2rY5GLu4G4YtdpHkugYPCqwXtRG1czbUGYHYmiXu",
  "key24": "38vsW4MpzcCibs82tMvH4jJMGXaghi3Kjhk9p4ontZpT6ogu4cVhD9Tk5z2JAPd3PB9Nj42yBHGXru4GuwRZBL41",
  "key25": "DGCFMzm7VqwGAMiwfXT6eZRMijo4ck372LZUDWAvAjE3WDLBxNNT2wCc3xAc8aME2ZLoJuVQpWMB1UEyipJ78od",
  "key26": "G7aBbztYJzY8s7i7wVb7D85kPzgR2jniczPXn3USjE7XTSj6dbjgN5xJk1D4qhrXfhp76z5utirQCB74uuCY5ge",
  "key27": "4WEK7KQ9JTaNA8FXbiD6Y1msjAmBUbZ9JhbjQ9ivd4jvfJhL8Q4wVJ179uUPdaGngUjou17KP1P52BunC5uLiHAX",
  "key28": "59gsaXQiyKUgxCLy1VYUBsemWuWx1mpMiPKESyp7HHJQtmUdQvmd9BYYAyRHhfodPdrEVtQQGJUXZXduSCa5ofoK",
  "key29": "2RtkZZKBtwQMsyT3LysozwS8NAt65E13y2Cy3cSNFCcYUyGwyduDjdNRceFZP8bWVXmirUdG3e2fNBcPUip1LjGG",
  "key30": "4xnXgPyCSyEcNJEXDTm2pwCkeHHiZ4rkVMMqFJXYFuMTvdMZjqVPe3RN25Xk6QmzCPE4PT7R8B3u6BF3NDGid7M8",
  "key31": "4FVGGKRRFYRUwppyrZ3DX8XL5HCNCsRg6sC4B9mHwuhwPj2niByJmgRnyKZNuVmSjx98pCAKLw2ZZb4B8HPQaHbp",
  "key32": "41qdqQ8WmdSLefQ5M649ZkEu9pwypvGCDmb2ps6AaafkFsV2e5RHRBC4wy1eRDnApeRyMt6xLcRS7oVb3iFj2d5t",
  "key33": "3mFB1aqnR3D786ZwwoXxYSbsLrX7xVqqDUnvpxG4qp2UhXoEMYcriDtZp3NXxMLmebDoq9zDhA7uC5EA5nrhQUtG",
  "key34": "5GB1pSPJYhoiqdxuizd1kx8ps6CdcTTZYazuMNywTzXGkik5CYntdHZ2opqPSy4WByTZuAMut3Kj9CUhNzv4wgTs",
  "key35": "3np1KGnQnhJLz5BCQneCATsnEgs26ZEmxWQ3wmjNj9TKMGmuQwG7UQtW4GxghtwvfgyxYJKJ4QWqtoPGrypLrzfy",
  "key36": "9mfnnpro1wHa4b429p2Fft3GXonaqHDrecbdzPZbL8HdvaMXBvRWSaQxkEggm7FAxkYhQ95b1yBHmC1FYQxadtS",
  "key37": "5LnVsytaf6qRmYnvGUbY9JVC8rmuaJKpEkksE2PXD6LBmYip99CQjZzEqH7MefGEDLedb4jcuuEwUmfmWreU2yW5",
  "key38": "U7TVRoKRs7h27aMVDbiLsf9KK8hRibjqq5aQrTu1L3frjoAKHkQ1noACv3AAYFcFjniy1zZS6mRnuwtuyXZTEd1",
  "key39": "127w6eTWt8E8SFySxBi8LVuWchvFmC25XbJWoNwZWJaJNAmGpQCSmCi6hB2R7AYmgcVG4doR7U9i9dU1PXP7eRJh",
  "key40": "3UiMsPL1m6xaviHaKi3w6gz9mQkk46WpF7vHANCLM8m4Gx4opQyuXXFCVzyTvTmXqdQec1RTXmPDeDngGyyniA7u"
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
