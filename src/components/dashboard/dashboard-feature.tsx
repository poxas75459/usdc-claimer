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
    "3aXPcHRzLr4PCFRb8JoXKkvqUwBhfHHt7k4v4m9ibzTpoLWXeZvEJjzVSyHruoDHdtmRqDMaX2MsY5otyvC3dxVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oMk6QH5ayJzoBFgjtEUUFdrwKtUnbKkF5TfawaM2tHomoiR8wrZAKz2gVEPCyhZhLZDCbaGyQmmb9eSdCMQxsfZ",
  "key1": "5Kwto7uvXGhfCiuu9ce8doJqc43Ew65p59qSU34iaosHZiMN3EjGx8Rjgdi2cxEf8nRxEe3v8JGTh6V5oJnqhNP5",
  "key2": "2QnUXB27zcUa61Zg66GyTMmvPWTeoEhuZNwVC9G4bgozERPFsZNrcvRUYQdRTQzSFExokCrfW9pbSW58HoMwsbtU",
  "key3": "BJSZAhLJronZUeyCu3iRcRfUYRnnEH5k1uUmX4zqkZpNuo3C3hdupAsZMKzpQUxdmFJU15QG71hfPGP3wYuoNmj",
  "key4": "VUK95H42d3jA5MEaSh71NwbuYJr8iLr3G7C8U7F6Es6U4FWZ8SjzSTKjj2NNgkYMZEHQVQVbFiEt3kNKRMSyHcr",
  "key5": "3aysLpSxjR3aTwhHfRmrrbeRQTDfzZ8fo5QrZ4hZuzBwdCvC2i6sAGv7mU1wejUc3uAFXBbX6SBb3kB1nMj4qP3R",
  "key6": "66iHtXBNkeP6Nzr1HT9Bhkyg7S7YGpJQ7z3LmzrFNQuXnakUxQ1ybBvdCKYsH2JqXWSyFge1xMy9mduqFkcL5KBc",
  "key7": "uiL2JLkUjSVfW1qbFdRBEaeqWX2qoX2nR3Vptp1ST87WhS5Mgo5vhc59JLPHze35PEyF5iKMP3kopx2WP3pGQ5q",
  "key8": "4fq5ZBAjRvc6RnDa4fM93Qkm88f5kXjLVjpFJ3d2qyZp41QU78qr56dRsfrxpoLshBRy4nQZ5weU9UZHxwRiyjNu",
  "key9": "ryfhhHQ1Ys5YjFrjJYaJW2Nbks6TShErdAzN6t8K9ttCMZFKkJXeSDPu53m4jseb3TBpvonTycezPNhQErtT3BK",
  "key10": "3uCeyQbK36DCwQyfhHN3suwDfEyovVZXcZdFTVwAUoGFvaycwkpeFEnTAzb4MEZdkhJaTpWVBGUzMfksxkAWiRY8",
  "key11": "5jbacLQsniKsGULp6DQJY91T4CAQ8G4ELy1eTAy5N9aPSJA3gY8fdopR7vEWFnjSyEQyCpq9eYPMTY3qwX6ad4h1",
  "key12": "2AgP1Zny1ToDSssZa7vE1EcMZFZKpbD2ZCLZn71KZdhXw1FT9tLdJyFH5wFdDZeHneoGu9yPGCEj1f4JoWXdk4za",
  "key13": "2CPLYCsSSWZGaqWPEbG5sYJCDxgavGGsABSdCENvqKMRYVGqTjGFHe5oYdHXCefFbRs1T5HTed6aHqUNTX5aLe2r",
  "key14": "2yE4xbBLxC5U81EBBDVjkJjKpXVpZDt18env75Gu8kPDuJH49672dKXrkhBoPTzadm2WqoMhWDoJYSu1aNCsESTz",
  "key15": "5B7kXowKMk49QpEr8RDARxJo88H6jdBiiJftPehsFTj1yMCrEBkeGCNoLFcfmDWD41VKiKAHKJ3Uh2haTeeGjyrY",
  "key16": "5NhXQ2c84S8zJbwZscAhHokAVG2Vq7vdbs4c61mSssNTwHRsKN4TZqsYvCjcXVTqgF94CMczNAuDmUsPBjHtUmKn",
  "key17": "8Mp2r2n9aLGHCHtzvFH3Ty7Sd5MY6ggbmbCYrq6kZoYEBx3gFQFEs4w1gPBYVFt7DeTaij47PJNCb1Rds9ftKMM",
  "key18": "5n2P3LCeYhXJJzKn33sZQpyU1UyJFqCej4Z8rPFNVtyk5BG8azNWBAJo6oUBt3DAKr4tH4CUbNBLFhLBsxUjRCrA",
  "key19": "2cZWEsZ75xQBpeqGFmNmAy7Ex72W9SrPt3hLt4UzWTbi1rTD7EspR8duwUoUjzRSyGQJQp9s1ndhJ1QvhzTHVB9P",
  "key20": "CG3efjUexhxJox1mEQD6ZwkWmhGyCVsBqV6V7ANnYxWPvrwBm5ZxGniC6dJxvFccD2mj5jkfkPXJKkWTaHYjh4s",
  "key21": "5rjPuXJfp2Ze12pJt4rf8eeHxCCtDQFfnFmeRVB2LdjnDsKshHGpXpq4zW1Pog6QuBjj5aMGUZ86Ev4QXNudSY9U",
  "key22": "phHAtSANpVodkzWKLMbPhqgbfM2zgHVLPb4m9C2Q16FQhK2Fx6qcKbEXDwSx9fxo9cfQ62bVoFfPPcYbUxgKhcm",
  "key23": "4n1Jd8hbwMSxgtMrbGPKFYxSCfvgtMHkt8R99sWL8wVeVMZkwh4zYxBS1UFmmeKF8iRUAkP9BVdMzdQA9jjstiNc",
  "key24": "49tdbDkRHjAu7Cd4f8mv9DUbBho89aRu3bNGkKbyTSdejggpLRSAEWuCk1NuKw65zPrGkm513M4v7ngDvmjbzw54",
  "key25": "3PZvD4c4Q4RD9sDNVKesVhqT8iGd5Gb7ffQ8XwhTjUs9vTtjwLLgKyhBT5hWab5SiEELM1bFT9XmiFAgG8vcu3ka",
  "key26": "Uxa5jzrupXErvmZ5ArNrkVp3VoC1K2bBkPmS5wQjrVYhxtxg3YWwKzEL9mhDdtqSrZPfho82CanxMSNp3tFPfsM",
  "key27": "k8R8RUxSFnSHwViPf6DXx4DcwHDAxs9tcCUqgBC1ScX3mJsHcLgMAcTedQNxW8SH6HhykJjqxtSo9D6ExFD5cXY",
  "key28": "4cpz6sMKvy6mqyqPWETNRQuKxC3vS7rYYC8jX79yt6DiBUqNgMDCc4sjDPeL5u2CxTwekvnqHyyfuP3hQJLvCHhz",
  "key29": "23VpH2jNh7gfQtce9H1p3PYbPfY4UooWY7SpntLSYrrXYiSDFEoidCmjnwoUGhuskmz1UXSuLm8qQMNgHqUQTB2i",
  "key30": "3dJ1FzzSTbWCSijfUQHDaE41Z5YEMWnexZjT5WaKT2bBp3yRyKXJFx3G85C6DNNmAmzz3zpV9oetCqDF2LqVsqjV",
  "key31": "45vT3KJHUtB6QLrWFJPJowrVWmZknDdvrBmnVoskweYTc8XJ7eFo3cmWk3GK1GgTrJ9tDKCSdncMuQRBeiNG7q2H",
  "key32": "5EZG4H4Kgydsn8P9k8NGeEgNX2wDFLXx6JC7hAvZzBqCtpN5xJPzdQm3L6eyyceT2SvNbKaK7EQvUqZz6N31eWYC",
  "key33": "2usLCgBkyBXzHsK4rjMrgtEd9GVDffCcgpdf6JoeTULeQv46Pgp8qn4CRtzwg33Tf38bB615gxwvcKvuZTYsi63X",
  "key34": "4cZd4wtQNfZZ2EWFqJbkC75a8xtY84VhbDpLk2fjb77vKRouabSQKtdFZtVCg5n3Jj8cCo3h7PbY5SPGbvTCfPzN",
  "key35": "42TagZuwKMpChF6VzVqQj36dM2XnEeCnHDLLH3VKYW5KtUmre6S9ao1tuxyHtAuDNkh9m1UeEqaCNYQPwJD2gHrE",
  "key36": "2TNbw4uiuGXc9GbGuzVshx5AwL57wYPUSdeB56NHrps369Z6QZgRPrbRotdaEZuonvoTjrDjQMVnJk2CBaRSLkgm",
  "key37": "42ZnwknR5LrncRNbSY3RpdoFmSjT5MisapmbgLxC5EhqZNrdMhYpAfiNFbdQj65zTjfcLujg8V6Eem9tVdRixNZb",
  "key38": "3z96BZEzuLEMp4ej2uxMKkGgL7U7cvRHP133QnzdEChYxKMf2sgtxVaNrQM9rhHJJx7r3iMmrbEX4uVQpsSsgfAQ",
  "key39": "37fYH4DatXXC4owT6gY1kmvoKAJXvGBXWT7f9rVwgRhsDBJ5jRXSg1xGNTad7so8cgnwxfNFRoEDg9vpYxVfdQmp",
  "key40": "55XY62xCnKcyDjcUwE9ss757JuyPo6S1TTuDt9wa9Qna3SwHdtBT1fF1fpBGPa7M3GQafktzpczKWLRV3msG9TLm",
  "key41": "b84SqpDgH6ge9sU45eoMRoYv7DvxYSwLfJAotsSGihnnDtbnMqqs2o3WRXxQSUMGxHhDY3bPJvhVAr68zoxFGaf",
  "key42": "2oYzzgDXB4XsWfR1hTRh7ATQbmb2vzC6VNN2QtZKv79RGoLfKjHr3ucQUX63RvdEuBUQqbWEYA7TaAkbC8gYiNyY"
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
