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
    "2JSXZd56D241gZ1wJGximeWg52eKEAGCPf3zn1mhSmSgbkaEgyM3xKbAJwM9NiXEpFeHL7LQB5TtDWLCzq62hmyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H62d1mJDUM55sqsKmj2vDebyVRTZ9Ji4xmDyvpt1csTqKquHtsrJaBBErjtobzAHUJRsex8ZYSfKqXzg6f3pitK",
  "key1": "qXdSNodZbT3kwpGcyE1NV5DLwiFCQwnSmkRU2d8ZA1j7Re4Xkb98RKe1CDcoL6MpFMqSuPAYbrZTg7wZA8KjvCJ",
  "key2": "4xMdHHfsAhGAXexnQWESWPicds6HGS9qypzgkD4tV6gDxrJMMVUUueJF6yGveUPXx1WYiFUTShKGdLPvJEfKRtGW",
  "key3": "3megLmYL9wHiFweQKLFNpzYyv9mAZ5MGnoRjy3qVj5ECNV2MmgpKACE73Fib5V5eTFQ9voQyibqvCETVLQLpgxmz",
  "key4": "4bw5Y3mErf8QCBKzcqBcW4u4rTn4BEFdm9qo4QKcgoRdjTjM3Egi26tRozjhUTVbWL3G68DnWuWtidzHAGh1PUdz",
  "key5": "JPgfGe4tAmyse8dRgo11WMGQp5YxMjt2gTSUEwYqjhGpvmCZP6E1Jt8zRdzadGLrQ4xstg3h7QE7D4EtFcn2ckz",
  "key6": "2uSkUqxRJYNbQCmiCUzqZ4X2J6FR2NXHKspxgD3mFyY1wVyoyguVBTzud7kqXWjhcAKPYxFwUFaeJ5EBpX4Pc1fz",
  "key7": "5VZ1RtdRZe35esHzK76iDSsVcaL7m19kpJwAVRAti8MV9vMjtAFqMxznEFnJ4tCYqexgupsSSg7y6sEHdzRXkhDb",
  "key8": "4VS33FRm1w66Sq146Z4NYyzAiXBVph5g7T86Lp4bCkuxsEGFeD8zMsGvNChKrKoCpGg4FFpPDGuchnHCkPRqeFDR",
  "key9": "4QYqWRrss53R3kJiCs4upNFqiGjpnMGx1KmAPwkYvUCBjd1F3QhH2H1HgbgjMDE8qbnSErDKnrzmtidZC2eHguXi",
  "key10": "4ghpuY7b2iv6AcWoQsNar4XTk8jmZA3ekLd9uPenkAWTa1DL2kaPa4Rqw4UYPqERD3nVVNjpxTRfVXuTPV9AJaTe",
  "key11": "4QoWVgvY88wefPWAsmxeg3pUNAQnykLyMBPRszt6ugSrbvszF7XEvv3PThZZD7Nmu4kbMdsTJwn6auhSMCajVY8w",
  "key12": "4HkcYmtBep7b3FfpwTM89ZDxc1KrQKytVCpF2q6Hp9YvfNQgXr4guJMa5hCVF854nGHde9xsPvwruwB7eo45jEDr",
  "key13": "5SYE9CYJEaFzQdhy1x1J6GG6XYoBMMGgnzN4NkywRds459QfKfBHUQcCJ1Wr4BmoLyVjZpePy7omzzXAhtdP7CaT",
  "key14": "5H6ZDPLEbvcU9M9nVkywR3sbEZfD4fR17UbTYJyPa1RgyekbVdGXMrj3NPyBvt9H3Urz3R2pNEt6MpycudsQQHt4",
  "key15": "3jveKTSgAXa5pEGxMt4ohfNbhHHooKB5BhC4fY9ThqBgfjeEhsAMASg9dPQZFRCSnrABNyqbExa2ak68ZrUCfQZX",
  "key16": "2HUJjn5jvy8xRsH6vZ4iuFZyS2SM9zQprd4K8K7NgfFhKDCPqLJEVZAd17pLiuR1xVXyPTQWq3QgCCskq94j5zpm",
  "key17": "FtQ7m4kgmgmEfuQDWFLwZyVfhnHNh7qFbX9HfhW7B675QhG6HBs4Kz7BdF94ZE5FMDLJtMuMNo6HjMxPxArNjjd",
  "key18": "59eAcP2WqQ7S7TMH3MF6zWmr7y3CT5aNUu18WwcnMyAPsbcsfYvXWH1LTcfR1XaXBkRmMJwWtmj1uNdJK3jqbgNf",
  "key19": "45z7jbqoBSn6EyNcHduuqMZST7uvCyYmrAhes9b6hN1L8bibzfNkKFNoK2t92EC4gWGdVwvaPiKy3Ti5F1YWgV4E",
  "key20": "TUrHL3QYN9QGhjMsDmzz9LzG57eS5JrRgphpgkk83T1t86cq1w4wdGN6yGuyvPMTuSbYCzPBZPuoDLzkoGNorC6",
  "key21": "K3kmNXvncQ3a8fgQ6hmQ38RyjZq1iBWg9bQ5mGtZ4mRFYVufZCtDqZLuz4iq3L7ErsHf6iRSbj9qmNb3YL41c36",
  "key22": "24DPDqkoMSB2NUndGxCgEjHnaKZgVU2wT3RekfKCZLcbx9n9S1z3BuctpNjnfxx3FvMxKyRwyJSJZ6pgxNFZnaYq",
  "key23": "pHfE5pVAzJ9erjiDst5rPfEFj9m8K73xY4iePYSQqTC24reAxj5EDKRLE4T8NFNoGDYr5Kht3Ftw3mLFaHqdjqv",
  "key24": "54SUwCyxs9RTNdnnq9Rh7xbHbf5qHbR8hfas7iLy5aaddwpGkAr8zDwiMBLrivktU881r7zCidEpt6NWqEZJ5YzQ",
  "key25": "66PC8xiVBgNHwm9EnyFrRHiSMCGMLkTNYhPj65Fc4vhhCEY7PPFnoQcKWUZWRn92fTSRqD5fGHmJHEX7VGfwm6QG",
  "key26": "4CAm11MdfoSATLnvFBrS21Y2XBo8zfiVZJibp2DGoCiSmmu4H73YDCrQaCttpkbXNYf3BR4bCvCczvZZ91rNi8DH",
  "key27": "eGHxCDoK3Wf9FbthndHRjo1v3qd4wd1tzHtcrizUBGF5DxHmRvWVbxPRD8BjFipMdh9KrMXXaK3HYwGXNDg5j85",
  "key28": "4GKNzhynoQh6Ng53TL4GNDRbqLeVrHoarzu1L6LABJHw892zqe4UUX3PaA3Ms2w9hv6BZbNYspyKZMPK5skMipwB",
  "key29": "5Q1Gj1sBZ5BHBR9vwUjRQcDkuyC37dGaQRAXwBNrgtMnWYg8TRnYTfpZAtj5YTqedYAhsCeDCBMh7CmUL9pfuEyV",
  "key30": "4YZtyTnU1yrCoMEYtHPF3xCdJafAG2ptuEAqRwnrrhGypSCLGAQzsyYCp5o35bBRRpdh3vNqH3Ua4Co6bdZrbGnZ",
  "key31": "5QJWTt1zWTXVnFDBuknk97T7N1Gu6oci5rDjeKzbTQKi4xCh6KyBy1tkGoMG92bsWiRpQ9o6567oGaQpwFfLrr9U",
  "key32": "4oZ5R2sK7isHE5VDkLQN4ysQFMobaxSjZJSHLg2xpa8jWW8n6pP6vPhxfEscyPR5toprHoyn3r4UC1sNnjhLupmD",
  "key33": "3vWeruBc4nkULcK3CDNGSaiHBjRSWd5NouC8BhSnm34uBiDpGWKqdhKoBj8iXF1qz3ZE8swW9KhkCC9qNtJF7DcK",
  "key34": "4oNi9yEDSxMrGXqCPXCZVdfzwDrgnBMJqsCEWrnHcbwu7oNsHM7NXdT7jY5RbbioB5VXXYPQAMfXGByqpCLjoAHt",
  "key35": "XLytcAn9P4k7tocWzS8QY3ww5Hh1e9bECJpVRLoDyx4fiBB1tXipJD3CgZh75aJG1TTfut7tSeLNAZ3uqhymWxp",
  "key36": "36eQGpGRccab36KNT8gZUznCqUcXvCPiHNywcMZRcYjnPUoZdKSC6BCHogyZa7v2qqz2stBSE3KBbYuGXG61oLp4",
  "key37": "1hRSXLtkJa4s7UNkiBm6TPS3Y3cJqbBozRepkm7XG1F871vtdA5KTogoaRheqZvtvUippC8D8RyBNGvmqkHHbKB",
  "key38": "4QK71ZjxKfssdHtrfTTVNagW41v65Vo762c474eVwmyMcf8kM4td7tmd6ddPGahXEV9woaXQVEjnmCnzf8HmoP5T",
  "key39": "4znS5J4YCvkGVgEyJ1EuYvtwAmif2zREu5a5hMK325p8NG4uorcpaxifKLAojQCVJYtY2g9YWwSHbnZD27o5LdsD",
  "key40": "3ccxrT9Xf7veihAP2RJuM3B5wBCBa7nZiYykWvgtnjAKzPw8sx1BWD8oa3GvbPxGZz4Hn3g8JA99hxFvbPF46pNv",
  "key41": "5DhAECa8NCW7aHsyuTmu3KPFKLb48v6Eo31WtmGcraq7YgnuW8wGzEuJkng3EmJh67CEefbyqgFP2dAZ5pXEUKEj",
  "key42": "5nBitvAtqaWxzbfsFFuf4DzWiMU2WKJKbqGCS49X3HkMizSnrZi5CUpiABWRVaRZ1z6FWguCc1MqTWqmFKU1z2wQ",
  "key43": "2ah4QNemFnmucUvHNzp4HEhmCiTVhknzQV5df1FDX1DawBAzisyDsRQYEF6jVAkPh9SRWwULETJzqC9TMRw5gwws",
  "key44": "4PCddfYwWpwJHFod7MhgUXr9ucVBjcJhoDSCjpkwiyJodHDjnBpW1nF5uZegH89SaoXNuqZzQcAjaKHYeqZVTQ71",
  "key45": "4aFnBK2YdcA81RP2Lw1JLZuddFWBmxV4ZHeHHoduxn3PwT1buF3ruwDYhk4AMy8gDQurqt7xoKScEmY4chYeDUJ2",
  "key46": "5LvfM5ix7FmhrXVpWEUJa1QC31PhS2AcrYVTK5nVBkdfbR3nrz65dAkFejXCrjYf7gME3kavwzYsFo5dqRVFxE8c"
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
