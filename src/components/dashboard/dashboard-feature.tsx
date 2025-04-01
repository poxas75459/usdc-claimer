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
    "3NGinZaJGx57otLchCgy8hS2wGuroh3aKLwXARobKYcwPELken9FPJhnUmVJPGVwH5aMfjHuFxZJcBcWgtpmZ7FJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43PK6tuMmqv9CEMrRRg67TmMvj3vXSvnqGtgiby5cmLYoYwwHFNcsj5kuijfJzYCrD6uRSt4NF8itCdjyVtajyQ4",
  "key1": "5ju7v1x7TtyrrkPsknUGsge3LbUu7JC95MzRta9Q7uPRpbJTpuefwwJBPZjXTdMQ75CTXYEviL2MmvC2jwrPLAbR",
  "key2": "2tss7jdr5eQJ51B67KPxRSoPGs8A4hs9Hb2hvPfGpmutntMipAZHBRrfRfCodVYsBm4oW5aRPDcMzeM4B8wZhhjE",
  "key3": "nZLMAf3ua5wgRWyBR7nH4bxGeZZaoZ3rpFxiWKTaNRxadqsyCKDmK9VM3o8j11HVQ76ChWcVp54wm7FqJRrMkPg",
  "key4": "5s354ETznbTjNs5LazgKFHatq3xN8ZQboBJbKs5dCAPRiugFox8d6ycVYciHPijrAxwTbxVJKe4kmLhQj8jseS7Z",
  "key5": "5zeZcnvjZmumEfhS81eDVaq6nnZvSiVRboh85xRuisFcCptFDfwtPdNkCygzK5qcQDJtd98whCF5RkEmnWnJqaD3",
  "key6": "5hjGVzUnEkZAFnQsCFaEnqxvkMjX566YHDDvuy8qQurWsxw1Avs7op3Z3bG62nud9VQ4kR9mpNqeVaMK9H9z3RaC",
  "key7": "44dmNmbbZF8koYCztn8MjjQyBGfkhsWsbCXaewSJvvd7Dp4doPnQtzQUyf3acegkYXABP46CszoECwgrp3cKi2ZA",
  "key8": "3Uu1A9ZxxeVLcYtDbjMNhEGaJTfRr6ck35DyxhXmHLv2s1btTTxXXxpYUKFCWuJM1fJ1VzEoUUEkbS8tpYQCKyq8",
  "key9": "5axb7bZpAt1aEYmnckVoN55hYdL4n74wRgpJ9u5Aq1MBmTF6h8zWH117NSzKpBavP7s61PCVvtwCoDA9MUe7tDaC",
  "key10": "5X5LA5EDkMZh1M4kAYRgCGtn9jVZW9ToBd5mRLNMqB1aZGEDxaVwGsuoVCJYYh22NAHgFCHchzjmH2R2tfvvXw6c",
  "key11": "UQMdBn2fxw9WuvYqukAw4WZhQN4f5c3cUFqiLyf1NPSYaKegWBXWrEYjGFFbVMZe9gTKdheiY1wmyEH9qZoEcGm",
  "key12": "3YH3VgsLtoxNuAu6oKkBM261xjymw8bemqDfogpzY1aSYSAnwDGRs7kzvSjgTDnsuUhbdKeQGDadn7FirdNbiQTk",
  "key13": "MQ9brw8rucfkGCHSgrAn64sZVCNxE6huo5dqxCmkcMSFPz2XjF1XQNiw3ow2jqc27DqozCp3SduH2sjYFB24zVk",
  "key14": "SKMvkFv8xwqypuvstJQSQg6iYQxkbv1a6ZXUEgd1f1JYfpmuuANe178Kiv55g8MURvPkqs5ZAQe9dHeLUgHtxvB",
  "key15": "32Cgf17Bn5RTGkXhCFepRsnDn43eWpA4jvKpT2WtxkYy3HibokTvVhLgDNr9gjLFAbPo4djq2Lbq8R4UtfHsX2UR",
  "key16": "3cPw2u7LeXtwK16e37aesdgXrEEJNpNTAxpyUSvyawpEYVbZp2q9hiak5sznyXnTMb3zYzoA61GALa4Hfn5wzM7",
  "key17": "2hd39dYP6toMhdAhRsRGAfNBnxXJEqF3tuFm538FL23w1cUte6FtQqM51gAZTgPE1bdQe2GxNcpPxqMBmCiy14A3",
  "key18": "4p5nNR9BDzbtvhHKWEtQReLKx3yghpGP6W3GenAp6cgUdYwyDw2hteHsVm5s1gwbW5rqx5NBvvBHT9k5iuyn98ka",
  "key19": "4DyeF7srveGM6mVAHz5YxBdP4yTECnXmq3JESxYcoSXtD35Fhgye2G1ZTqjFASMkev1kfjwmN19TGpzcMaJpiUHc",
  "key20": "2gv8WJRZTQtGNTxCnaawRd8hiVqGME52T2XW6Gx3p4wwnSAHeC24K6yUBCRbDhd6gg79xrRouNxahkf7W7CDQChG",
  "key21": "549bdj7zWGcVtw9CLM34Vq4dKhnC1jd8bPoFxx8qRneHZ91EtNh3aB21PrcXWsz7cj34wLybUTWCnTx26P745P8b",
  "key22": "5HVKhAp8M9oNTkG4xfjpcMBBxrM3DqqFNBGSy8u4xidd1bsvUPmv2XP8AhjAmf8iv6TKQfGhWwA94Xp5cpNExQig",
  "key23": "5mM3rykZy3fNZ6VhUeVhp5RSZwsaKjxpBqskcDDEPYqG8bBwjv35SJkEB24dkomxqdmSBy67ydpQx3Jp59U2zB5e",
  "key24": "2eGPCavfsdG38duGUoZypyH1hnSzsas3am9jsWmXrniZn83CWqHmcgsGv4KL7rQowx53UvVBhGrRbBVAv4xgarNv",
  "key25": "pVsYnJppWsYn8w3D8RjjSDngZ1V7H4DF3gYJzQR3PbtaZtUUjgF9HbNvdqrN4Yi369LTG8YtCiFmiimmqbQibih",
  "key26": "4mM8cpAC3AQrWxCcmL46jDTDWYGhnuBBwQvbdjg75Lb7FKEU5QzbrvjBfD5SidkfbCbP5xYy7WzW97NUpviD53Ge",
  "key27": "27Dhuzm6x4R6zVWHGhqNXHUmEeKMXkmyXv5NUGCBKBigwZarc3WfJQGpGMw4nomYb4BX4bge7VnukBntbrrdZG6s",
  "key28": "3dCo1PvRFT2dvTZqAGM7zqjBaxq1xrB5JTmN4x5AZ96s8pLQyf1XLZiyXiExuTV5G9Y17hirPi5GqHRErVx8j8in",
  "key29": "2v1HAA6xzA6yW95GjYiNg9am7dQwjDGGV2s6XmCqt1d7bsXScJsSGBPjrxHg3QmsZJXppSos69p8hqYceXBrahcf",
  "key30": "2fNNDvjYAq3fawdZqez97W5Tt9U7T5EwG7UJc3a8uWMPojhrAPmLowWgs1YcVCfSe5Hhmov71voHXwd2wDoC8NTP",
  "key31": "4EzCVwVWcJHuYm3ocS8kL1WEsWVyAj5W2Mr6a2vitDkkYkz9wTs8YnR8SynnN315NbCSiMLABPf137L8dRp4ci35",
  "key32": "2hVugPddtxWSi8igTQ5ChyZ6tyg8Sjb6cdYCXiD1WHjdRbDkRBkf2gxFqr6Ge4J15fKJ7Ktadh915ZYqSzEGJJ86",
  "key33": "3jirVri9sQPMEADBA3ojXLK5HyftFM8WJZFHB9RSkmFfGFG3hVPVpiADmwv6DqKuTondev7WNLA3pt7uWkbWxtkp",
  "key34": "39qYJphZkGF9J9tD4odE1ogShJm3ryc1nSEN15oYBm9BJ6DJnj2K6bV3nApgFLY4kLH3scKaVkLsD53uSMCmvYox",
  "key35": "2MxJK4exV34Ex4yLyFKABjzk2bfUU5TwC3ZwiEyF7zgS4EJyPeNAwbpvtYpyTJK7mmNg5J9p4tTAxnMunNkziQE2",
  "key36": "45Ync1FL7y4Kby5ZzSsjbtjGQHqWfuWNsbeqRDbehAN7Xgzt82rAgS86hHppAGjtXZEXV1XwvunAL8mFHuz2wt9n",
  "key37": "4XnThC2xCFMYsjXEs2GTZ3zaWGo3y59dXLWew5U9Bk1LnqwKoH569ogHiBXeCZU73zdnM6Uq3irLY23s7KZAoppL"
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
