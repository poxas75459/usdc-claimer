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
    "29NrwfR9zLuE38wNXqsMuf5o7eR6wwJJvyjXngNE347tvmZQ6PSqYE7jwTPiUrzM6nq6JgB8YJCa3yBYSt88hYLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VaXnoEqVW3MSiHcFYeX3VkYdNhhMYqwx4nD84ycCZGt5jwpmu7KR6KRfc8E93J6RHvAGxzHhKqx16yRvzHL1h6Y",
  "key1": "3aNYN1rszcu4ZZEPpTvH4FrqeJXg8zV9p1EbkMbcHu6hSuk1WpWiNLWKN9stf9gfG5dRf1jtwbEBX3Fw3C7Gk2q9",
  "key2": "2zMKK7DVxQXP2iiAQu2zXmq4CVn4kVDdBMVLdeDDxmyvoUvkpLjASeL7c39QhNkAdbarRxgecDVsSMxxfVzEb67p",
  "key3": "55RxH4tErSJi849Wy1nuwL8vkBU87RaMF6t7PexwA2H7d3MpwFPWQVPRhAzNYyKJ6DvWcpBxwBunagCTEBiHi3b6",
  "key4": "dADoR8mujHvMtfKRLD8JZCh62ZowGfi8MXGoRpWosaqvstDccGAS1HLo9DVGzN9VGCPoF6Po2QttUNTdN2Lt4gS",
  "key5": "67To6B5vfdrhYMa8SLVmXyPLzaFBR1jw2egRR1TB3GnPTXzVbQAW4jPmotkXFQCWnMnfCC7n6PuAJUsYPfAhSb3",
  "key6": "3GfFfVMhz5o5B3SgCWSaekV9BFaJCvbpwPgdwVNeFGKzUzuTZV5YLjun6RqPiMLnkcmXtPAK8ytDK6v8cQTSN6Zq",
  "key7": "nrX3t23aRHK12BhtJxKh4my4gSDfhbDdTjkMwH4jTuJWhopAAwnE1zGVSK1PNLCmGpzbf5NWFTvXFFQihjzLnnq",
  "key8": "PateKxfQAJPrraLmdNyLtJ6fRsLt8HiEy57co3oAGgqnL6xqq7AqsWAcuN4rnh9DSKSt8dHC2qnqh1CgKWXg4eQ",
  "key9": "4wyiBzwAHpzTUp7WTdT2ph19YMqYwVErNFo2rvfmwxNkkW9pCs1NzUu4NDhxFCNSTomHW1TxbKx6KBvoD5M3Zw7z",
  "key10": "2Ck5e7nHh2BAiDjvG2pDi43e8bbi8eMd46qQ6nJPb5zkRx7X16yifcqY98sgq8gThfDusTCDem9VDrdDShtTeeBT",
  "key11": "5sPnYqbXhjDq9usTc2rFACPjSRxdsTPDoNbjDNPtZJCN6hVRfqMrRhtZ77MNHq9YpBzmY12UEdkpXRiaPf8HvHEw",
  "key12": "5dWVedvFM4w4QcXp17TyWeBSQUtWvTSui2zrp8rF9Fj9p9wRMDd2BDPyXz3QdGZDFJA9GSfhyq23znDK4w9RvwuY",
  "key13": "4uy3te7U3tFayaqfJv45xefQv2Ug9UWtsa7qXXLmAdydoYHiWtz63u7Vx2icY3xJspWRFUPPT3zkeaF7gHQLeR8p",
  "key14": "2Z6FXCojbV1mUJoe8nAt73He3s5ZUvKUN3ZgAz8sLdkpUA9u6VFvrEgdJbjWzysX4r8ekpibBb8vrgSZgAMo4k7z",
  "key15": "4vmWG1hrc4gQ9t79bB4huaHxUPsB9h8pVSRUCWFsPPyNMn4Ko7jxcE9MKTE5JVMvV5WCGVgVKc9Ma2DsmZNAPkbQ",
  "key16": "pKemHVr3QYXFGjZYYx8GFLqwBo48JcPmR7tkqJ5vXsFtKCfSyWHRcxDixZrbAL4bEX6XQFJLENnfEzmM5FwE54U",
  "key17": "2yKbRJ8zs3V7N2bMh2r675Njb8zktza3ASk85r8pmvpsD9bPGttQ7nStUUfdEzbscNo3CxPjyo45CZorgSx94ufG",
  "key18": "2KQmmW6Xd3yjGAB1hC142sRviB9xUEuEbA9TUdVEZveKkEw6rrjmx4owsQGy4UM4ApZAakzApPnhNAepNzNuG3Tx",
  "key19": "2z9geudhnCKcrMqdPWFe61ZZAFQbJhynjJr1DY36p8Ph9qSojifD7BMJMypKiyFkqzAvANidt5gnRo6FH8L52LDf",
  "key20": "YJa4AhEGFUBTxb1cnPum3GQFbsHKoDgdgn1rKH88BBfSSZ3hLXz4ZwmGJrjpucTtrULLEFVfDSwq5t14KwmQwC4",
  "key21": "paqv772UVKCWmfH5SyyJWo86ALFzgvZZRTFFbRpXG4GTvZnLgqFyg4W9HJz1YfJi2ECeB9V8ruAVVLLAPo5xKiv",
  "key22": "2xB2vyriQGDRG9W8rwyAdLfZqJqw1q5f6q1VNp4HPJydSPcxv1xzoANzvpiTLVAiBESfxfq6GypKdU9gvbVsx58M",
  "key23": "4KGqQtMo4wYyBQfGfUtoSo7tmyRAbccLM5251FQP42rRUHMd9mQJy6GVkc55EQh9kCsyGMjtVNYY8sVdkgQ4HRrQ",
  "key24": "5G8aokbDLXBtZsoZnKzZ6NqwpypKorrpZPGKJJaL2H5nDazTTFP4gWs63nEypVZvpAfoCtudGHWcy1pQM8PjDRu8",
  "key25": "hUp1Noqy1srt8ug6p5bTVi9bKKbsCgayjHdvwpUo8cpZaHkTmUDbQwHCUwFPJGcmuXYZnv7L68N3AheP1cCtDmY",
  "key26": "26sdCQvFXSCndC2jMkJoxL2Q11Cw2i8A2quys1fM5RJBXca3PKfoC8EFXYwV2w82KTUik5vRT4fAYpnPxQShEZvm",
  "key27": "5v9bh9yQhW8eeDW5DFtRvAqpRyP2569ukwDYZPe7xwix8XK9ayHir9hhuFZcs1Tka2X7Ygeg6B15FBxVa3swzkmN",
  "key28": "3pQ5rHKKnEpiEXyBg1VEia6dKjHNyZm2xdYH7ct5nePN73nsK99FXkHZmJbDgNA9yNNG1Kh5x1hMzsyXLSyLLwGr",
  "key29": "5Kn8ksD1JY5kMLifqRvn5mRbTB6TW5ZPWo3WjaPJieoxULdqeUa4JaA2Lt8oFc2wrGCMLSmCsr5H46N1J2ucZ1wf",
  "key30": "2o5caHcUjqgmRfWbm458scPXb2JcCY3XZcdQSdmWHrEwt1t4TbNKGnf99Qwn7Y3CF6Ufaip3b7rPcXkFPmg5paC5",
  "key31": "28jqGCKdxTF2tT51j2FtyVsYhLtjhCdjsBggD35rccHmu6QedCfEKr53K8o5o3JpAjmueT4Wi5eE4hv3EJZZwvJ6",
  "key32": "AXNkV3NRoWYnARaoktXY5k1qTCQ3gAF9Qw7E1MsJhx4nBvwYyMB9j6WVrqrqH3cWFyVmjEzGRSXCkQrZqghiZGC",
  "key33": "5WMax8fHZnEkgVm7MR5PVRMUaAWn47a4seZSSxp9EDGE8gKSPVanoJ5tiK7nkJmD32LTmj17VHYsYU3E2DyxzmR9",
  "key34": "3RKE1rpjWCGRH1UGM7qtVkRVp2LzciSodpKmEhiih6xhLDuucttpmeyoCArXxq9yHt5YhsTcBWRjeeQWL92YVKLG",
  "key35": "4L6fsFoGAMUqHiDbN3ps8Ha16Vwe9PoS6KktMHexKWEukMm3mfzY19djecFXNUCVbZhE2Eh5vfBrWjkhuWkN4WkB",
  "key36": "Rud9a6xJdsE9tse8ZsMWoLB5cqxADP8iHGkRxa5uQgTctdhksqSpuvZpXeadkgG7V8Hi7ZGHY3TvCcBaUiPQWgL",
  "key37": "4u2Jbsij6ftja1hAt4dzHqggesPsGmWwuqdpA2AUXzDPUhX1FBmMt7miE9Hpf6P8gi1Qf2FLW8Y6Mkf3DjF9bBUc",
  "key38": "5UWBVyWYRTu7xmef8s86jBpXAXt7wHfkV4i2irGnrd63iRFLSGs4pBwHUbH1FcwnVygafaSAFQDKbF62ABQbuRtd",
  "key39": "6Nw1whGVhz52Gdt1wcfodVrh2wSyVfYNwt2QD4bf8GGnuMjaauhkMeEVc8JBYS2FJGAcJA6uFvjKqXeQtK41MsB",
  "key40": "46j4J1Nn6wThipNSgJXGDAFLR54BaTbH3HWkTEaWw7hR7ST4NetquCLNbPJMRV2S1szFDLJncXRY1QeknXvnyGuK",
  "key41": "2HjkEUhrBXdj3utEHoAr1tafEwT4BTpGPw9dsRayYqahJzYY6qHozaguVLN4FXX7ZANQnC83iyjbQ4JFbjDsyYd5",
  "key42": "2bsJPsG5VNwCDezwMHFqezgFN3D6GJMKdqnu1kwwU1y7AL5rZVzNb2XpPcphF2bRasvM6ak5exTTULhrys5SZzLD",
  "key43": "2Dpz9G1n4VM1V73vLXkqKDtpck7dLANXpAGM8CeUGpwAKJtVqYLnB2RhtueZrndVZqaocf7jTgeJ314gjK35pxEn"
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
