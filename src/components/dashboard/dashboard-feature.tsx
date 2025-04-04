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
    "uczmNzvkA6Why1VQiXmgPGL7RyitpwwneRPz3mZDYU5qLvBiVbkw7K5ypUu4HzQJohRGhM32F3uXburghfNKCGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fzvVhbu8Thd7Dbqu6GbHuUJ9dHnCx83evtd8Lo93BNH7hS5gChjopPp5TGv5yR4N4NsM63tRvo1ZqXjqy31Z2Nd",
  "key1": "4jbQY5z52waeZj4LkPEsz6eFcGdAeS1sBSciSVJ4LjngU4Tgq8NVS1ZoCNgpafWbhxLFxvmLDAw3o8zbZDwzsais",
  "key2": "5gpQWa94KKmyQUqTKToYCr8oeaNpL8ma22K9kFwcHaox34GzaWHbKnHcXcfmaPiKcN2xGZ1DaduqW2kdMvNeAV6x",
  "key3": "25t7oPk8WMGdJrSabL515MQq1CinTZoXH33WJ211pZS3DY6qGyfBGpKpVBAP57iG6nCC26LDdrJ23dZH4APDR6HY",
  "key4": "4kRDr792GLt6xcj6Y5gM971CYz5cHqhoeF1C6KX6PKF2qUnbBpA94uoMopz82gSiVDHi52BFqftQmyCXJBGtXbhb",
  "key5": "3RRUNUNLb8QGK6dZDEHDu2WwFf5GVeW8EqPCxemwpEE9PWc7DhqgyWbswYcRAimNkjMgmRdX3Fnv9SBSxp6j259c",
  "key6": "SRA3E4WgG8JZbMg8rwPKBtfHEXrUakb52ytJ79i2CSfNwLp5xpRy3AguW7o5Sm3vzGXPaksux6pUYGhTwfZq7dL",
  "key7": "4mSp97mi5Yb6Pj4V1UoQw9TRLXCixjDQ2nrVdEgaP4oLchELMsem4Frhcpen7ZYn1aLfjrH2hDUYvrHPXfsqHbph",
  "key8": "4vtkbC9c14AokiTazJv7Pdumbnry7XmHMZF8d8AynWQ4t4dhRpCsdJUswnzLpfu8Tx6vcg7WiBasuuyniCP5xFvV",
  "key9": "2baB36SB4bdjmFLqEeP927mZeH86NBs9gJudHUbUWK7DG6jpPR8Kg3Neo9nWCeoa1yN9fdZ2khQjUjWu6kr77ss2",
  "key10": "4WGL9ZfF6X45vX41TMAHkR911ypUoEt9ZuG6EKcRvtNHjRYz75M2n1VDfsDzsFZVs7VgwynoCXDid7D5NTyPCQ3H",
  "key11": "3uUKsVAZM7yT1dpfJkrktVko8GnFSpU1gUgEiqQ2xCK9akwP9ANPMPwWqGrgzGkZ1w2QEJSVPSdVWXhS26AHqHgy",
  "key12": "xW9RTJ1koksf73BMyR5fhK9rWRXAw88id9DMzvq8W2KappaRubbVszgvSVL1vd1GsZAoGPDVKvVRv5RonjXJgv8",
  "key13": "5vjEVeN9ivy1DUvvG75zjaXRviBt297hLiBBRqCaDuZkZ1JZCbSZf56f9GGDuDghE4RrVZs5HwkbA95xPNspXeNd",
  "key14": "5PX7xbRFN1KTUSyNq4qP4iMdX4CMJR1mmhWZXQtQb3GbP4ZK1QtBHjkPHSmwYQnt33K6WRt9CTTXSQAhkWMgxCB8",
  "key15": "2X5zyg3qXjvgcLyvrbLbtCTfbxmqKHRuyV3H5qEBtB5hqKc7HQ7YSSyKtGfaeJZzErA1LxrKhezm7i5oWfhYkF5y",
  "key16": "2rtnfa9Z2ZLan2qTBDEgZCNnLf3kZPh1YCgfUHPUfgYvwzbY18JH8Ah4aw7SCSXPfYQ3tu3KB8UL3bhBsNs4mVNi",
  "key17": "2EehHT86sQjoFAvSFEnwKkxCeKnLwRmGht9rG5kndzSrL5v4isE2hTQNS5umefgmvumFQtbnRPo5eUmmhY5epGzL",
  "key18": "3DQdr1fRX2sBZwjrHQxeKGbQyS7ERYrkp13VANH81cexw5rCJVcAgccGEQY2cqTrE4wFg5xYiVGV6fWf9NAqCJCH",
  "key19": "2aFaa1dFJqV6MdWGv76k2sXYurFxUHwzVLhiWFtdEM8zUthmiNMtg5J2gcdpJFFD38KM7aepVjDCVngVsmt2owLu",
  "key20": "573SfYMRDzgjRK9cuiR6u9jCKBNJPvE38sqsmkBdyDtoSwNNqrhsAynBEPtRyA5gYYBmBkN32B65vBft14kNgMue",
  "key21": "5oRzQAowgtKP4RKWd4N7ygCsT4cSniR6vW8YvWaonht8Z3fL5jTpSBCaaxChm8q1rAeQrnRH8zFLV2VfrQqVg1pR",
  "key22": "5KmxPdUtQeU5uKxX3GHBHuXAM2vQPqHCRBXg8WkaitEA1Gz9XYaFk3W7o5dRi7A5KFjhwV7uGwiCAyBepLYXyiwu",
  "key23": "z16CoGd1a5Az5CECi6j3yaQsFg6xbbAzNSgNeZfoUUc2sVFSv2FnZuzSpVYzqj7ws1izDcpsEuTZkYKD7PDDmDR",
  "key24": "5hgfbQwA9GZvdWXjJtDHhKyEPH3TfVq6qswKHFP3e3RRpomgb362VEg8GGSPXuT5UvSwaTGFoyYZEPchV3opUmpU",
  "key25": "4d7UswnS29WWTpSn2uKuswunv1xA4yZ7ZzSDMH5kxy8F7LzrikkbCPjaU7GzVpuLeiFMthWiW3f5D45onfnHzK9e",
  "key26": "5cfNzxYvNfRmEN3dudQTyM95DqM22b3MyLspGLDMAzJomq3sNo9AVTvgNUuyHSDSub1YEa2YYCyUbgjDHWc9pou5",
  "key27": "4a67ubGcLA8QtfunTZZeuGrBHMLw8PgjAR6vzBiF2u35iEqyEoyQ552bt6aZK5atWBek5ncXsJqSd6RKEjBbYdnL",
  "key28": "5g4vS5iUFBVciJEe1S5t76iW6hDxkGET16ZRPDqkMPd1dqo8Mfeb46T45DRGzAvwZpMmAw4XAXknUZkNS2MqFgEb",
  "key29": "3KbArGkEhaNRyp2LosFPhz4RwwcbCTdevga1zagNDWALEGY38zLLjLgGR8uTz6tF8sKLr6o9oghPjKxafhTfyyam",
  "key30": "3CHUUn698MoCZ73NsXo7NUFpT7iw1zPwyRnWQYrojt7JWqQwzGAdR9jhHKFQNZzSQ3yqu1bwWJb2kLcyNaksuiWw",
  "key31": "4dfsCyBvs3NEDVfYsxHyNiMwdpwmg1FQtr137osAcHDnMDoppRc42E6xi7EpiUBYur1eVvUAc9zLvUz25dun9kjJ",
  "key32": "42a7PRx63EDQWUFMw8VSbmZwjX1fQ3tDp4PPYaDzUQY7ZmmcJgNMmrhsDrmXLUA1xyGQvxTKqbsboRnYop3SNqtv",
  "key33": "UcXcJknQyUUrNEnCxRdjT8xYmnF8W7gd6oVHAWVxmghYMg9tx5VyWHNbPkFrmgSWghNrapazf4DhBS4Xv8LKnfS",
  "key34": "53kNpBuJXAxTgbfkeKm2A1bVw9k1QudFXKxxWT2Z5GRti2HHrtNr7qgFjhbECvgTpFPi9gwEScsriEVEGk1ZTwH1",
  "key35": "bip7oUE7DZL658dBEoiPwpG2YM5hbkiypEPFeNjkEBqcrS9Ck88CvGJdJTh4P45znfZeZfkLs3KMkXti2tTykky",
  "key36": "3yJikZoGE4VF8gpuA8VDUyBwoLoQpJ9GoEZfd9LoeBummEd4nKPofWT2hTb79jwxBJLocFbtvzkBE8zEC7hXtwcc",
  "key37": "TAPNPLaMV28ssq3Tm6yoBj2SoDcKUJBSMZCQ9gNy2SrSTDjkQGz44mQoc4tFYjSxcrHGZ5Mhc63Aur9DRzDmmEW"
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
