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
    "3rWu6E99P3gMSms4BWBAdfc7gxfWJtDeQd8JgVuQSo5k76qje1Qf6HQXTb3QHdNR52b1TsucNbFgncW57GUGhKhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TKcmcbrRqKeMJM71FpSLodx3a2ydM9pDF1t587y7V5uBdMfu4YHrMKMP56MUFBswPXfiYwosYnuRaYUNxcVNxLQ",
  "key1": "4hi35cwQNAZsm7FR3ctNho3bqk6QDLYFYPaVXR741ys1jmDjc1xXdqcAER9WcuK1GZSv36QBaE3VYWNLQBtd7Kfy",
  "key2": "4ByQXdpfbxurNHXgzVnKYqf3JARdHWai9bjFAWNFXNfit67kBTzUA2d1PJVqm4u6Wq7TttHWwvxjEzQCXspJRCkk",
  "key3": "4uSc9rGWfe61F5WTxEgsHjLaVsTTtKWhePXULmRj9taN6ucE6xEzT9Vu5d8CTsJ7eyXbcSXHGZk7Y9xB18eTMWmV",
  "key4": "538XKLm28FQ4bB5DiuBHVMKkkvcpT8R6DLo5Sk5FV6vB4T64faUuYNNUqUauWkEGrvKCdVLsMuRYxxyYMT88m9mk",
  "key5": "c52UoRuSPWLYV7F7d4Cs9nh8jWsTTJYStx7qvitFpqzy8uN5XAquCHQEsQwv51Q3Jz2bk8XUc9yn8ppYEhkkm7z",
  "key6": "3Ug4K3a8Z1uvY4Q8b762SqF1cRafEzujMst2GgFELhypPyocrAufFk59RSams5LCpVxswy6ZvADZCSci5PiaqCuT",
  "key7": "MvRUJNNhFTc4VuU89JoZFdcHobM9BCssVXLtkJJX5g1ZFbQjbUKTT2WszSBoZBwz41fJ7h67pMpvWxNWiHntgzU",
  "key8": "4NmZwG3h563U8Sg4NAv7ZEa4tuTzHrWSHQaBZAtLihGYZ1i4boHYw2ddWW4xGeXwxZGMnWScgnag4Q4E9fN8otCN",
  "key9": "4Qbq3TZeTHB4UYXhs425fhMGtdW4QzeABFb5cqUcsRCWPjBXxWYgb2wrYSTc7xjwWVFjrqWeQXAjqvnaSNRSV95u",
  "key10": "4bZFxfUTayXc1W41oR5aULSy51ahx5HJPMv1uioJzZN2Qbh5ns5CpdfXTaLEGow4SbtmQcamrSwfQxnxFtYRmzpa",
  "key11": "2D3CFq6i8zrEu5kTUQ1fE4Kkdwfw59xnStxHNns1cVvhzThHjdb7RdeFz6h2Rszw2j7HGLAF7eUfUbgGkD89TN6h",
  "key12": "3VJUAyaMFpHVnsYswtiidtpxgLP8GxKYSGRXnn6LnsJYpGaTDBPBtQxNSJBienB7MQNYrpUiz86bgvoPPBjgzik1",
  "key13": "VRHNe2cQGfretZRyes6GnK6dwUc1U6C1eLBewCbqZ52zBdokgGiqmhvK48omf2GFBjxFRS8Z6M3TbeNjAy6n5Ec",
  "key14": "adaRNkzYomdvKG2hYW8aeoLR7fD8sHbBU6Lse86hHDc8j35TVD1jeuyYQUyFAWeFE56iqArUY3cdoGiMVRu8DiX",
  "key15": "2hE8WefvX4c28AJ66AuWnhpJracjm1xaprPxuSj9egrJCW9epBCUYSamgcqE6brczgGtTZLdmvZbwhKAEbnE34n4",
  "key16": "4ZxSp7ePBBaNVtteZZtf22d4wVoFqX1rT7opTuaTBbZBAsEJrdeMDbo2n6eNZip8i3CQJmXbjbgfHjSxNnANbsvf",
  "key17": "i5x14j8QJbMnWZEbVo2A2USEasHDDgqFoZa2v5585XsSaoxYmQ1tHCupFgc2khcDCYMbs47iF7W4zT3fqf2fTQf",
  "key18": "3zn3WA7QVU9Y6X9mPhLogWqwJLF1NHqZzS97p9HXNVhJVp22imH4fjWudMLTqh9cM89kPM8VLFdKPjo5i2LGL91s",
  "key19": "5KW2wK18jwajdA3PEUBHQMkxW6V2MP3Aq3cm8iUZQTGKNVBpWEk65WWqTaqiMx3LoFKpX14YaKV3LvPVnRxko4NN",
  "key20": "43kpETwFqtCSnytKxmvUdzuByzxyDog7US96UYPAZE6zH9aipHuvFPw8bwHw7gcynXe7AZXB19bLXH6xZvVxg2aY",
  "key21": "5S5qptPcV75DP5YcViGaxsU3QZ5DDNRxUBScQ5Gv5j7ba2derA2hwrxxKoBbeWVs6BkGr5EqciVAEUfPgigi4iad",
  "key22": "4t6VHSNd6TYSSuBSyYtRKKpaek5ssaeXL8Df9hZGdcJmN4D6CxRLAwuJMsa35kXiLAbU9AwQU2C5gAn77j8g68CR",
  "key23": "3cFnbp48vvZfuq69JMnLkAFQrLuwu5bL18NrUD6jpiHTejLVMEKApSScuXUJiLJcerDEq6u8c3wyXZwZdD66Rvho",
  "key24": "4pv9771Knc5cH1dYKya7ZpSxSSqNdihWLKG67gsFSgn6nzKzRqnWE9BsPfxiBiVBTsBgJog1n5be86HLHg8Xn1Na",
  "key25": "2TAed3PFa23knG5Stiz8cyqqNgo3g5YTBK5XMXXCWdvN9aTERvQbhtN74Uob4aaH6AZGTCPpK7sb2D8SpmH5V9xb",
  "key26": "4FZCY3YvttYpthHYQUBk2WZK9oeT3Y9KYFRHBNySrDw3j2cgPm589gCujULVFTbCigGYMgjKdPUcs8FCMPjPqu9M",
  "key27": "vYvwbGL3NG7gt69jVGCbQdZmdGsGHYHVVpHcpZMbjQFPm9W99k3WHhcaoDMbJUNbrB6fsLhZk6ps26cXEDVCoFo",
  "key28": "5HFSG1YK1DMgXNey7m7zuqHcbyt4eEZdAMaMsFp3TsbPJQvpXp3AWTHf2CoKRbsU6vuvotkjM9mMi1cdLSD46K2R",
  "key29": "3U1WhVfb71Ma97FQcWADcoAX6542B5ujVFX8YJxxQSxkfJ2wkmSZWE18AjEbn9rSM9sFeWt3dPiVUY8dA41fhP79",
  "key30": "5wp8gtKyVqfn9zeH1LQEm3GJYDbkvdVnFs1RJJPHGstwdFN1j5mYs1Dagt2Jrj2j1rNj5XxZkk2AV4ZSWrBAuRwi",
  "key31": "4D7vKr1CPPrtaQkovyMmB56FjEao1inJmSdNZTFZx8VrkEAwaEbrEwuGHSwb4TxMMRjBAKFi1BAYWAGVTtXZzVvu",
  "key32": "2QRTehFZcujNF4w9YPoPbeqXg4GwyKg9tyEBKiTkGsvdcDSbQvtToncSaLNjJVJEmUGkz4EN9rUhPwAbnoHk3vFB",
  "key33": "5rGSFwQf6RqjmpSSwENZ6aPovVxtJuz1aKA1qAnmH3j5awPH6mcceY41Edm3ufyutHDy8RJcSbeFvZ3VsupBYGr8",
  "key34": "4PtSTr3Mb51jwD7SF4NSJqXqGiD51emgoEcK4MbpyGMSpWZdFWvBBSq7MxGy2cRAF97ZYQ3Cc6xcxxEtzyr56Kmc"
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
