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
    "3sXBoG4ofceAmrbkBHBgq4Ccb83aHQXATxunUENXYkCtf8TQCmKq1LvrkGx753ZupASrQnoD34R29hVUqAwyf9si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FWtdrc8pCSAeAYUBj6rsjGvcm23Qe7TnzTEtNQNse89xew3pNqwJ7ecZY3HYNNtE9FkqkHZccWuZxQeCrkh71fX",
  "key1": "3qCCnz7r9MXKxCRQHGuKMSnDHLzqwKc6mPU2xojenWFPhdaXXcQPgmycf3mF1NWUm7Q2oSixKmTi6GP8uACJoQkk",
  "key2": "5sNY3oox81esMg6vrKqtkQJoN333xqVan2w4pSVwi4Y9pzyBWTy8ArTTG9E5mQVpmppLokvSdpHw3DFgdc5qs2KP",
  "key3": "Qcnx3iFiddtt8hDUfkU479wj3NM68HzfYT2CG8LHFbFxdDDmwziKv9Ha9VfHQo8BFLMZjKqifPLrd31byfh3xrT",
  "key4": "5WpXRzGMWUDSQRUPH837tXusp9G7vPj2GNTh1PedHhfeBA4WNRppWoakechQvFXA3ofQ9zZx7AxYLDXG8jyrFxb6",
  "key5": "47xSdmzAJWpD7kS9duUGS94pDkBcxJdgL8kt1gQjUXi8CGqizwq2dMFyqRS3Ata4q3h4xnkWya9naQ1Kbkp9ZpiF",
  "key6": "4wXCFe7g5W5pCMRDQ7aWy2ERV5ssSAMKiYTszCKXPMrvtT9tyLhkoEkR2gG6KyNw86jfuk5dVLpxALaRfMm5WnhE",
  "key7": "XqV3khhHPiaxHjBG5fmZ5J7wnaN8CA4XM5YWFgXzuS6jn2YcHEadgFf8gczm1ywFijhNajS4U3uMVbQsBfM1RRc",
  "key8": "54UR5oK253vzwNFEwX5JA2pNPUQRyLLJomQHCnhDVYShqCwKeXV69Q6Q1CY8fvfMoWkxND2BW3NP4ugtmCuAz2ZW",
  "key9": "jbUfVFizDMzLAy81rk7Dyo9dqb38neMGFU2gutAJD3XHduTBRCtCSmGtet3LsRAfjBqUjMDZ1i1gkJPWqttKsWu",
  "key10": "5ZTkNVTurPgUt6MuquwhYcuDLo6Uzzy8JpN2pRLR1zSo2RnddvMviwjQVAEDicUAD6QtS3oKmZQ1fJyDKMuPEzhv",
  "key11": "3Evmj3aDBwWoEvGDZ4kXcbCN7RQif2yDPuCH3WGvrQoQ3iytutSKv4zn9KSEyaDGt1bkCRP3VJRuoPyNkVweyiQg",
  "key12": "x8UWZ1vZeAW51MMavJPqrXX9pz6wPFU7QTWECqcQPvwLaBV7iMRxBWiTifzmhk9ufo3wjAX4MRc2KEVCR8xwDZM",
  "key13": "5PqUDa7YB1Gxp9TCXqx4P5PRtGSpg7k7ecp7in4rmwGgaLvTtqtSAANrpmDu8JwNyJdG15JVwGVcHfhLCUKtqxE8",
  "key14": "2mZH9Bo8W628AX5RnZK6YZZ1cQMxBZjWqhHFLwnQqKi4f4jLw4eM89zvS78FGGLPBgPdDTCyL7neQyBXFY8dYxZQ",
  "key15": "5t8csrrX1cmLg9P5MrwUVscmnsT81LABF62hbhqtHPc8yStPFuN8VzBmhzpbbf2gJb7D71uV7ZHveQcXgwB9Zxfs",
  "key16": "5TJPyro6sXuApsGfqC3318taJ7LQ8jSgmbR93G9w6UyVcu2mkKXZ9feDK54uzEq4YcRwQuiLRb8jdaxzTVKiV2dq",
  "key17": "2mRHRp6MRbi2PcSW15yo24UWZB7msrf5ySmWFgQPeuZi4hRg3xYURiGq5aZm9jUJbXozvWf3psqy9qWjGFUhT4Em",
  "key18": "2hrp8E5bH1ziCeyDRwnzqsXYxQc1YbA4XeihjPn7b42z4WqXySjcJR4JUAmqyaxDfsnTc2uXs62TjRHwbcv55KTM",
  "key19": "4CEsnqhjCZLWVpURbjw2xYBfKUVRMfYTCUR4Q263XobPxVpMDU9P4gEpN9di14z1NJGcw6aBDgAsRDUZF7baxpym",
  "key20": "2Aqqy5ZkACtdXarqiG53C1gVpcBuCyw3AmhgXTmxNMFfiuCu7tC1e5Mkizuv76vmyjuACfWSnRTGMLLngezoqYEX",
  "key21": "4cCTMb4bHdpqTm6UUUzVzQi14grTdKFRLUb1TtFC4PitdHk48DLPBnjveoMymPsjvJkCdeDY85xgjKoCG1hxSRoC",
  "key22": "dSFWxrg8eJ3sqNp3ceoPkTrHz4dyHqUf38SUt5ovTGne82X38S8G4N519Wz8eT45UEh1sLCQT4U7gy3obnDxNBY",
  "key23": "3VsAWwAc1miwXdKi5Qd8fGDzvbFna2BU1tKqDBcXz7NYZe3yWBYVwjBq6tD8oyi6avxxz54iM9edU4CbuJzDiXne",
  "key24": "31zLphKS7qcKnGpZVbvdpQ9MFxiFYvmkriGq3K9XhWr4u3PRwCDCXLoVw6NaqYmhHDjPYo2k2HJJG3PXSqpG4vvs",
  "key25": "RuwdYWEq2Z4fndaAskGvWg9wuRFrGpxfaKWHAh4Eby2C36aubNyPPShesCFx72qx8vEspxbLcudZuBEyTYsPV1z",
  "key26": "2veWcxhybxka4G6ukLfWVgYosZe8AUd4TvN2o95Lx5ULYDKBGDqx7KFQahefmYqTxqZGyESC2VzDuLVShfccLdBk",
  "key27": "2oAaHnNw7nkwYweqgENhozJ1fYQ86vd3ZNyyHCkzs6tCMDGEYfsXZQjefoBMFqeqrFcPeEt6XpNwznUARmAcBwBq",
  "key28": "5hWSeoZNVkyHiE3KGUmgbgCWcSHUjLn59KZBvzrW8XtwT6DqpRg1qP832Wqnf8V4NXJHpSZ8dCuLV2taWkHy16A7",
  "key29": "2d4Tn2q9Auz2D1zJyE9zxAqHjM4sVDB2FUZyt6C7pcQES6WBSHVtFQtgEJNsGDyaFZweQfYJU3UT48xUwfoj84k6"
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
