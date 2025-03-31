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
    "4DLXPdUJobRiigE3SRpBsaJdsr5M5oxsJBTau33jh9buQuwqWa4cT6vc34hYrp21ZZKsU5LAzcVRKkQDibUjCMcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bDyMBJrU8PC4pBjnKMGZ9P9Wqd5kfsp1HYQsEkERXk4JXSpBWpJzQj2H7anMWdFXx5TZYdRjy3mfJBtMooHMUCL",
  "key1": "5xjaXBpkUxN1C9VFh3GWTCLNVuJmJaFPFGiweXqi9ck1dKSrkTBVFF8XRduNoUJ7Ny9ETMaNTFJMH5uPme5Qw5u4",
  "key2": "3KajVbwKXEubaRRmUMDVfRm6BrvapHYWJeYnxuYcwAEZTkxM2ueH2gXZb2vU9EBaqFvr4NrS84rBPXAXtrBRCvHQ",
  "key3": "2kXDH6hCmLs9aHujDMAMtaSWdfp4TPNnNTFVkBj9rxdiYheizykPzYKoBVp7j2QkYMBcQYsnehKQiAVVrAE4ZuEn",
  "key4": "64dgGJ3gAFiNS3L3d9Ydu62srk46gFvE4pUvVCzbyDuWUpz89VegdknyWTvNXVApZjoDkZWagfksZGx9fJGJSQxF",
  "key5": "3vqeUeFYZryKaQPNmSdk4HcHZHeM6Xu3XEuLr435AZJmAEyeP77GykBFUbmdDx7mKUqSwxcsrkoYhgvASyjGhN9x",
  "key6": "341AsuU76PKJWSMP8L1xr6MtvwwqmpSMpppWSaW8djniamjWajrtBUkZfmKA6vG1QQpzXJnDH6z8ziSxocfGyBWh",
  "key7": "5QozdDrxkV1S26oQCkwZe6zNz6Vd41WgDgaVmehmfNvoXicV2H3o2m9cbZjvLExL3XMKGeDAQEmhmnYrJYoUajVc",
  "key8": "2dmNg5HEaWgSySVybGPr36ZAgr3u27adUi9PjDozcD8da3TwAsbw9xYnzGcF3PMkVRTLSCDxg9t9niMcE4GHsjcU",
  "key9": "2iQpuhNQMc8y3ibDdoiusn3b7GywhSge3yAooSNaJUZRfZ97nMLmG6fgQZPtyWkZhiQi7GxPuP4B7XYoGbmoFo9m",
  "key10": "28iSPPfdgV8PSnUek3hEZuv6FVrh35z4k7KAtrrSF8hr65XjkFA78oV6CXp1k3MMq7dV1xKq7T7PYpHxW2W6fXQH",
  "key11": "34y5SeWV2o6xgqDffBq9rrpjcV4VQ2sdgNamrRWvh466EtixqnFWag7BYUBmiEwCYiQkhsEhyLcHEqb3SyyumWKR",
  "key12": "2uU32Bm69tQJ7He9Yj6pmhktLGeghAyLSR5yksb2cDTiU78whQgqCso8Uc8LkKbHU4Ce1id5RzhdGGYsyo79Miyw",
  "key13": "2Mpepny7SRBJ2U7Jbp9Ly9ariWt4sdzkuTLjUPT13dbq2qnrRTXqKj5vTM8iJ4cWM1hF75nb4W9zUGGnkkJkuydL",
  "key14": "33oPDFxNLQVhku6geykfPWxciLgB7wSP4eTfKpyARsZNnfBVD5v1ajy95wGbtDwB6ydQexiFCRvhAM6kvLJqeGDL",
  "key15": "4xF6gqsijPU2RAFDgQcCm3zc3PfWqFtWZ1joqnLeeFyydhqiYCaKUFJmNArhQBtjRZSQHFBhF51qiuWtPMvEc2mC",
  "key16": "5bUG2WvWEYAJ67ed9BaFGJYRx7RmxbXYdvmcCaZS9LuxsZ1mf3oRWEja3izuyy3oVNQJWt11emX12nacPxiJ8aUv",
  "key17": "3D17A2tuYWk81DLqd8v1WFVngBB2oZFHZRnVvtaAeQTbmE6J9jvogrSooFBqN9dH65p2mf5tGCyq4QcPM6t2iDKR",
  "key18": "3pt5xZFp3cKU2TcxWxjPBQmGVvw7Ttbb2X2Lq1ep6z1Ek9aKbUeNLjywqRubvWAAjjHrJMsY11dxRKv2tbNMPqba",
  "key19": "2aEjzLzepf8DmoAgcUMgZ13XRTu2mgiJzwdRFtdHLhktcdeubUB6WR1kV9CfrozuRSXtDgkj6EiaTymxURW4gtbj",
  "key20": "4zw63kwoReXLTHpj6BRyHahDWN77kyFHNZsBXVkbHu1nrqvRK6pM3uE61TNcCQHREGQc2XFyBmaPX1KbBjzBuS1q",
  "key21": "k2yEep9tdSfENzLYhw9dp8vXsdVvnYPFySuwa2kJpAa1A2Zo9FTpU7iqiQiKydETNZhSicYmZhbyMomtUXSk8Nj",
  "key22": "5T3feErzHnUnTWw37KuhNLNiXWH6apJtqUcqyjVaDXHFRxRK2zdXxtRtZgeNt4Rc7DeybKDUNN93Q44PR28smrpg",
  "key23": "3dq93JvqR6MbWroanraqCKQaCgtWKoqXzTHKBMDdha5BKaCVB8erriTPDYPFq2sDQZq3LsG2sayHfwFk2ccZ1nby",
  "key24": "2JjMKEtqm2msW1sdYu9KyXR9BRmpDvNvzfCUhoRaXPmZyhJJkSy7ByyM6tSS627sKPUQwmekoyDUnWop4WqE8gwj",
  "key25": "2oVq56khzX5mgoWoWFeidTcZed2wLsFrz3Tsw4xYiQKsWVnSMXXxAiwLyBm2KHufP7Lmyw7sz8iLvsPqYBHeZWRJ",
  "key26": "FtpzsFiyDNoGRR6Ty6j5sYCVPaTzLs5FCNFEw7vXT6N4qke4mSZQX5jpobCbUfehK7Fgh4tLbnurMgA6WFQSMSd",
  "key27": "aTVckD4ukY2LN4yMgTvUKSnTdVCnY5tDBXKrpTAR1jSjM5XsbrgTkCg44K32KgrdGm1bEDe44D88FhTkWRqjciq"
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
