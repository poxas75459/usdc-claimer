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
    "2m41qDaxSwY7TPA56LHV78RYkHC25nDtfZ7y6shDfiKsFqRwsFWQL4jEJbquAC39vFp59RH1sUpznJ69srvmw4Wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ongZnEYQfvq1krijSvjzx8jpa5rakxxMnuXX4mBh9BU8VRSvoiBJD8XbB9MX4rqMhZPqr8q71Qg2fk6UJAhGLgB",
  "key1": "25HfASq6bR79SW7Uc5XJtAnbPr5MKKUxhAPc36Cbi8DSneUhSSKdg5mPCLxJL2DPVQxMq8JiZdBtn42jShXemvSm",
  "key2": "4U5k2AGW7asfDxJUP1ZQdfWm73eHqsy6Nze9ycTYQP41DFWFnYFfGqjya53BX9XrXi47hAzCUPJAjeJtjZoY7kxD",
  "key3": "uZufSfUvbmR9MdXxB8QBv6SJ8DALvUhyKUeNonYFbjJDjK287X8dq344JaqyzA9GrtdwTiGskV8h1QXGsDJTEbL",
  "key4": "2satJdUU3xs7shesXsy38Z8ZnbRWmSHvMyVx7WCgk1ZzVQ1rALr2APMN3fM2b7g6MJnzCMwu85GcRz8rxfmYe47D",
  "key5": "4AVoiUNXTTrav4XbzmVTYAFxFuockW3MriCUwfXMSEncNuMJVhdfuFRTW55uaQ6cJcjabEou1mLT3xXkvKxFq9Eh",
  "key6": "3S4Yo6nSA7X8jcmeYKk8r9THR2xNbHbUCL6W6x6sWtML6jodnf7QJsjMiMJTZwyKD3Hnm5U6UNaoy5wk18FAx2Ud",
  "key7": "5zNupAzGVeLswW8PZ4aiBHB6vxKHQZunHjarVo8mfskAGDowJZoe63cTUmn7AYGWZNrwixpz7azgPWDFufqe9TAP",
  "key8": "P55nztbtdwbDJCPydRz9fDrbAwacqrWEem348PiJjP8iBEN5QFRDrZzKLZgguHz25658T26x37j3K8RiEDMGaGB",
  "key9": "2jKQaw2akeNzB3A8DDzhNvmCqY6u5BBNuZUDRHHr56ypuow5ZtyekF26RbZXmQjMGC61CPHCSjTr2A2r2e9iA5x4",
  "key10": "3jzmLd4ESA4Kq5xYgF9gumGp5doNowm7KQ7QEwVH5PtrESFotRZ1Pr4PWd845TXvV5Fg2vkGy9ShNrsuhcmnYwt2",
  "key11": "59yKH4vxTrN31QPAmDJLSkSHxAXxLqzj8tD1wSdzbvh8agULr1M1isutLgQykkBnhHjp6F3toXy4Woqwe2jh8piU",
  "key12": "2a3hz5gZMntHXuBKDHbXWtiYSxRpNk72xWcseewwUuprc3SJ8zedCRYkVM5i7jhWvXp3BJBj5kfYy1W8xF1q48qx",
  "key13": "5BGefkHmTBbUoxkni5fBbk9jU8Rb1wYcaCSLT7gArNiyLjcXWXXoKhJe1pUGxGx7NgXZfe2zDKHyQ4hFzerhd8jJ",
  "key14": "5mcbTGsfsvFDotvQ7cqotAyEKq9aZtTDNs1SkaxrwYd7f2nuZ5rBc9KcCB8rTsRzcQ6bftyLMwKxyTMDRmZaFDJq",
  "key15": "5Y4WYrcD6L6bxxBLeTYd7GATxCXvkjxz6FbKPLbHWf4KVZRXWTL5c3Rcv3os4e6AYLCps2gJfpndx3uQCDBGC4xC",
  "key16": "2SuiJSGhipuz3xjkf4Dh2UzaJTVHzDB3xAeHG1NBnKA7hT1QZEseuYe9tWTLqTreQBigRs6LoZPDxPqH64BN3sw7",
  "key17": "3CD4PDp2CqvAXMwPWhKZTxRwupaw8qaPtRogujATfTSbvW8AAoypLik7v7BRwFWApTpF5TWdWvmyUgQ2UvMNceCQ",
  "key18": "2vVekTPnARNWtYpsZRBk1zQ9JgGNU5qvpcnBsZi7PSiVwpCUUccq88PK66PbWUPUKnRL7j2jnUQucztDvk7PaMVq",
  "key19": "4HSyvt79P9aofYGtSko4HapzgFHNekQ2LJVmR2v3oKHJgnKurFRW6YsHuAUuvgx6kG4MuZGqKymmauLwcSvhszhc",
  "key20": "4KmEzyL9cAKsPeEVaV7afbRur9Tu5BWPjREAALT4RDxQXfxXETTCkYmf9C4EK6MkppAMtsN1ca2PULdAxcf1FJjg",
  "key21": "5eTk7RyqA1gUE6HJuQ4d9GVTj5G5utzprtRHJ27HCJ7G4pELH2JFVcnjKUfuudfBywGbtCmd5asMcvsws7Znrwyt",
  "key22": "49cLikAZ7PaY9sYaewSeWtkJwofi94p1dpuq9CAQRaLuhEC3bL89E4U2pu4qT18HYUxdizkPaXhA7RfT41HL53Xj",
  "key23": "RMwFrFoQmKpC9GpNweYNgG55yNAAypJFKTnnXLgPrJK4ADqqPLHHZWKUiURJeEBKzZBhKxzdt8fj8TbWf87csST",
  "key24": "MUhSPJaZGb9AE39Th9qYW3aSoxQffpTu1oYVwbeJHmg9QKg43saoqsLGSRyFnxZY8JB1DbvCuW4v5q223xbtPo9",
  "key25": "2oz9Y6nLLK7tH2UW4EmXjVNLiwVVJzjBoFgrv5vbtF8S6DfTVqBUprRuSHXfmbunUDNX1U7EgxQqZvCmKYDbpMUZ",
  "key26": "3GzzznMfgAopn6GfZtaBqt3n45Wk5Hn2MaHuoNL3Swgm9nvMvzFsznPq6vdNW5ojVfAk2DXZWmF29SmXiuWCyZQ5",
  "key27": "4Vdai4sfc5rkzoG6tXezgLruQaHzjJB8pPpcvNNQUuGDLwMuzr4ajxmw4pgis8jTYM1bHyKt5aWLNLdbVbPbyeQ4",
  "key28": "4zAFu7LwdTF2CJnGNCN2pNoimG2mKweswdVRRm2FD3KbVGDCxno82uospJ3cxMRFGbW5JKiMrGuc2LavQCpUTBnX",
  "key29": "57w3oKrwsRZKF2sBLNBQwm6LhDDdWsfXyWDZQATH3285u5rbMWsmfjLDJmVJ2V4SGH2RLJGb3zW3tZYhXjybF3v7",
  "key30": "5id4qTtJbLoLNBtRdeuoQ4W76CwzE8ibha1yPyPRh6bve9nz5wKr8skQbuUR8MqCYTvXHZgnd9LMJbR4rebfWZxB",
  "key31": "5N8V6iPC8zH3Yac9StokFRBSFATrdCgKXwgwXgvZh5zNJcXXBX6pJrzzA7WX7RXd1a6h7hGCXichTEJ3gTyi2HM4",
  "key32": "AE1rihazLUfSoUCwkoefHrYMfsCH8y9ZpXnr4CvGCbiEuDn79fU7wK7JA6dxezBcVsKYmZuHaRb6f9tKWG6aguo",
  "key33": "4SdHjsof9xN6M8F5Vv74vpp4QD7R4pnTyMxAUsknhWzqeLxji62j2D3BzHssjrEVoBNbwN8NyQMCmgwCf9MCsSyq",
  "key34": "4MNUsohtGdDtiu1US5juKG19XkTQZRvsFSuodZ1iJ4MVaQTpdwcBnVyzHT8XzSNHdby6kEhtnSpSoK2nE9x9pX1n",
  "key35": "3LqG3p726GcAmtTN9FzLC6Kvv9NqYMbKrCuKSFu26NVU3CFkp4NE1kNjsenfaKb8q3LPVcTciXUyVxtiVdJDz6Yt",
  "key36": "67TBvM328Z4jwxTsrMzLZy5gwWnFkx61YxBjCN4Ju2nUcFiRFSNHa97F7qdBwJ6JgmdFTyr3wo45pdHtZu2XF7Fq",
  "key37": "5KwrgDUZd8B19N9n9cgtSTwrzksUqi2fP3ynE5PEcemg6ed2ytL8HcNRZWoNSL3CTgeQGn1fVEuLubZQ29eyapxG",
  "key38": "576FNYkdiSoJNfEdsg4QbRZrH4WsD2waGP8BajPPBKChyzdvLEb2mRGsT9NHE9YxNRiykqsaWmhwNYKLkmTcVMbQ",
  "key39": "4rsaaehD7PXmKcS2iULVvHr5rFyP1XbhahZ4sLzdUwsHGsERSaMGUwKW9jNggNffhTkTNmmrrgiMib5dA9sDRtAU",
  "key40": "3zsdhPNeypz1W6Mjw7yrh9wMerfkzptStr57GH5jSmwi8PvRL1G6X3G7gHJzzkH8QPwWsWrimWsQQZwRgG4eT5Ey",
  "key41": "4gFiY77AG4uKQCnhwx9gBbJi4n1UQMkY8SvA4uCnV42UtPXvPgb7DYRSd21SM9xAyxNahMQXWSfV5y4ZFwqfUAHE",
  "key42": "5AkHZBRD17nbqAYtEQUEvozwUpcanU4V1Q3qLhst69XJcCRQ4mqHebvRMNvN2VDmjf2p21ddnNWg4q1mRXYgZb1q",
  "key43": "4p9qcNxFBbsUvydxx5WmQz6M81fzDD1Kz2yveZe8kNBnDx4KBbYdqizKTmGuZv7v4hgkcUf6WBj6LWcjNU7JAi6p",
  "key44": "5JeX6fcFLTAAVsygaAr8qL64oLqZT5XvG9YuJdiGRDENJbsn3YidNX2iDGJcMuCXFZHNpwFu3ARcVjqWwNFeDfSv",
  "key45": "2VSTVuLPD22JLtN91MKVCPzKYSNNdoSg9qmHmkZdg4i858LXeEidP83F1fV3UKeBC1c9hofseEHXRnqQBKFm6UQo",
  "key46": "51HGBDbYwwYg2aqFq5T5M5yJj4XuFAENP4imPXR9jQWAQguGurtyWKGUQ9xdaLdh2aSGSxsgkARTidJUfoJxFpo9",
  "key47": "5CAD3DT2kQiuWP4Vd9MDRtpDH4gNoKGYFkWg47nBwbChfxn1K9xRsGX6UMNWXC2kTjZXRgg61ukYhSGQShNG9v6r",
  "key48": "5DNpEgNEZDLF22Qn73gdVUzL4ELtBNtyXRWKTjnqGGYpX5HPbBQQzbx8EVyCaonpvieTTaQEDgST2ZNTEdqTLwWK",
  "key49": "22YBqpzHAQPUEgqTS55ZYqUMzPBaDDMobrEmvHBLjAnHpJZ5xDfMJ4sXQtbcbiAcAADuxAQWRRfVdPMSgfkEtMfb"
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
