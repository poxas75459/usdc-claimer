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
    "5G2Fa2Z6wepgpi2P1zDKDdrUih6ncPvTvmk4GYzSeHeW1Jj2uVCvZQAm5egzqX77SB5SW57LEVQy4ybEs6FGhrto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qNp2sdBG5ZvSFN2B7tfNdTt55XDfSFzCus3cN9vC5iYWbQKk15piH62yrThkih9xmSZA6aWUWkMo5ZMvq5x4a9X",
  "key1": "22YuAMkJxdN6ELh3FPNotV4GwhdiyZfPY1J4tM4qiZHXRaBqb7DTrbY3n9LhK598QxQoV1fj6bSpMN65E1fRxiZt",
  "key2": "2iUCyCtLjNAke4Bkp5GjSxQTTzJBwR4MudPYbS3GG1wVEgMQvFnrTafTC29WCyE4AEvAqyeTdJY97rZRW1ejc9iW",
  "key3": "35ygscqfc65p7kmwc9QuLRFdYYCZ1G7aQg5ecXyFeZCrUdyVdJZupYfgE5yDRjPFUkjMVyX9UNMmnNKy5iyzgxbr",
  "key4": "3vDdbJiNrtbe25JHqqTLUBZ5WFrBCg4Gtduq1ZS4FPhr6SFyKraYNJrzAhespqhmSXKdkQ6QvcAdpWWL5Q9ophXc",
  "key5": "25L2aSuDadVmSiZ6QsnJgEMbDdbrVNXc3WXcXFxjxBd2Xo2i2CVLfsKJxhKTYKhmFnCPDFeCLJhYq4AiKaf28tg1",
  "key6": "3uaoDpBB6R9icjyEK5H1233K9CpsirnegkjCyJX99zHtwsRhPRNaV3Vtvt9RKrfTpHdteg3BdaFNdLKkDhGifezP",
  "key7": "4P3BZQF1ZCo9TPzbgRsy5N2gHygfoDQnGb4QhuM1n9aNrDyWqJYJ7s79zE9rDJKDNoBvLQnfaDJF7hEoitfTDXDZ",
  "key8": "5FQisyZkqvzUaQBvbPer8GXy2eVKG55U2WwcUQGfvSi7io7rWY6wC8j1RwT44eCnnzR6KS6rgkfQY7wL6cdNvHtT",
  "key9": "ChDJhrAyd7GKaQCM2MXRxRb5WHppFew51RGFH73kSjXPVVUUrpPstqvU3SfKEumZwbgY6stTeigWaSSGjpB929S",
  "key10": "3J5Sf2AALkcbAFe91rUz6HW2VWq1FXoEVupo2Fqs6jYydyuryYp1iBb1zveJo21UBTba5Et8ieanRq9V6F3iyxd",
  "key11": "4yvxCpM6fBtvucdFiZKutt2BVmTx5R9aDs5GSfb4eu1dr1hYhaGTsd1VSZGPzmz1kHTfimb6xT631NvjGKkt57aB",
  "key12": "2tvD8KRm4nuHrWqcKQGANt1VMAZGuUDCpDYuGimXMxFgRoTdWMa7jp5qym4HucQ925arRPvyrR7p5j4bWSuRgyLn",
  "key13": "3L2kCyW3LrAESKorb1AjMHDYhde8fjJCxK7myxEBTtfCnvcMg4v3VTufPc3Dh4VPKzt8M9iPkfogTp5eYLrFd5Nc",
  "key14": "zUkwqQP8ATUi4WHCBCncP6HN5nNHcH7sTwxrxzJ7bgC2v3UTbeMtEsoLiLEcwfFL3mauNiZ1JfKCX8kStURn7TN",
  "key15": "3fYv59vRX1udakRhP4ENnFTKMycw4qhJe8RAz2F1xFLPkvM2ERErrPwouFuEsepDxQQniUptek1uyeF6Uj84uBqW",
  "key16": "2jFg8m8qHP1NYAG7Ear3R2ZZPCmop2f31smGoGFj8qc1coL6Gtmg33AXZmHGsoWNuttuAQPsNRNb1MCgARvM8uvK",
  "key17": "uPsnhv3NgJqSn7AJCcStzShh4nWkoyyHtsinJg6DJkJqdDobiaiBf7zUaBgT43Af6PeLqbaW9cdk1gSWT2XuDzj",
  "key18": "2cRcHfPmtmVUGbrbponNjNRzdf8S6HbxciJfUssAGCXarVHGidZH9TJyW56dh9yktBHz72ssPtVXtyTHHu8btUzR",
  "key19": "5XfHTYo4tYNqhhs4eky3AguxS1PnuzbLXLgR8okBQbHBmx2fEnrrvqekZouhJUjz18EzmAckhDibLEbFpF43CSdf",
  "key20": "5bgXU1dRQqChZ2Fb5tHzeGoh8bZBAdsjj5qWEtebanRSzUnV5JwEViMRMTpGRd3S2FJsEHjPhQqG9Gu1ds2Us6Ci",
  "key21": "61BEoR4omRuT4yoZMBXdCQtAVgNtAMLRKQ7T7j58hT9tQTVnNYXiWsjnwy3TYMAz7NPbHdDf2zGbnMrfZs4PnN7T",
  "key22": "45dpXUrtgPwLbAXeLU3jik8qLuqrXWdWFNhCmTH3ZpPQGSypLesbHu1ymUZNdfyh9HHznm3fciWxNzU1kex5hbvL",
  "key23": "3CQ7jeasGtLKAGGW6DbMErv5PjB47ssqdUeeHtcSgn9ej6zCvNvpCS1QwBnbd7Efiei9hkFng4hb1ePrqUCNdXcr",
  "key24": "2xzcj133zSs7M8rrSxA8JMTC4zoox9dgF3F5uceP8TZzvLSeHiMpzihxDqEVPRgFGQg2Wp8dUZiK1n2y63sj2GLh",
  "key25": "5MJNCwrtzyJvbLJSP2ytjG1Rto8Vpqmq7mGffkznrjGaWD3hZpnoiEFAdWLA6gkntvg78u7j8utxtPWBxKWEnKxp",
  "key26": "5ZWLQ9UTAFzs5ycytAZtVFLHHXnPyEhrRfZbG2DcCs2erMapPfa6qxZZ1QvKRpif9bKcMAHdSncjxxPeBNuim1CM",
  "key27": "3V3QK4xc3o5KhBV3wYuVfUxQcFaHxcGfeSGASA91t4hzo2Nk4pbVkxXRG4FnR15MtRFq95hiwmiwwHMLMNthV1YN",
  "key28": "5DX6meS5MGZxUQXJoedj1d1tN9PAweKBzGyTK3urn8FjCo6wjAJKzgFyB9PUtLJhKM3oMokZtSZJsXbndrhwjs5D",
  "key29": "nWxmXV5My6dkvS7mEzsucxZpwiVeX8ZxS358XRjLRhMviEnDcUJERfdTVPQDeatWgCjD4WkasNRgb4Y6CnWg8rw",
  "key30": "4eA57cb1mk7KZm12NBszscki9gm3eKC2h32QoLK1JVMNCNTAuCZTknnfjiuvH91mHC9xP6Zwd2FDHVRH5FFr1bvy",
  "key31": "5mRMSCsuPcyALN8Fos9Jaz6RbXAt9Jk5vZx7py7cVd1594bpN69satjmA1ybpFBctAarDxJ73GDXoSPEJE8qHNWb",
  "key32": "4WVDXJBSpYtG2DRAJZUrrnQGX8wxRuKE2R58cBRtBArMKd1ouxp4quZq22fu8bczULLgnSXAR2xaytkED7bhDYZa",
  "key33": "eUXnkTxbg878xMznwABsW1QMWk4LezcY9pP1vhi9vPUohJQTyjPgDeWbqPdxNbCQNSVmmZoMxHxCzfeZCe3EVeC",
  "key34": "4EerT769p7h4NQXF1JfpiKCFxPHFaGafwnr6d4JLNSTVuhJGTqTXW8YgA1AR5a54zcBTV4P7fte3u39hDvwfGfQe",
  "key35": "GoPy2h8sR4tQMwbQoE2NPwHSicbV42uTgwvqULjxB1tFczdkTBeKnMFaMTkKfpA9PwGHE97VjqNbscJgJjWDRzU",
  "key36": "3gSgkmdJH4vbbT7TW4Jcs6YkQotJ1hWxAzZvfkCDeUXT93hiEhWHyVugRsZk91BTkY7UsKvQTexEYeb4M97DAEGz",
  "key37": "62KLQzgWLbkuVno5aEv4sGjqskQuQbFgf44oiA8CQpti4aTAzp5oAfi1uHLzTnGo5CQRugb6vGUjUpCzj3tTAmhY",
  "key38": "2jw6uZM3nMmRW3sMxTHxs6aezjxW3eAWTC1CDr4jd7FnNFiHZ567TWVCBqr1tokE516tAEXrv9D3zVopCxP2vMD5"
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
