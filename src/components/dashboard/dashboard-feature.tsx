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
    "5iWkKQmrynxY9y6AsAcYVDJnNhG8wyAuknvGomfhk1uXa6qbdsXXQCgw7dLUp1C2BSzpoHNgSNXNHfqNVU4a9bsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rim8yBCNJva8YQ5fCUxGHbrWPFAU5v2cxVopJYx1ncNTx4gLq9YUv4bd1Jvd2NxSg4RxEbaaZoQ6mYUJcvPEXrs",
  "key1": "EMFwe9UggL6G4qLhL68xzjQXrnU6zb92pFBe5yvgoadu8eTQraca9pvZL4zwnsup2GKTA4c3G3dazB1RNRU7R8X",
  "key2": "yPvwye86aHLsz2ophJaEjjr4WQNqj13X7iDQJQMrFVpSD26t8qjCApV4rU45RoMMqCxLFpaQfZ2zMyttUEJQi4S",
  "key3": "BgUHpVmnAgg94bw8c4PCzkyqcESZ11vQ9ax2rvihyBJjdhhQY11WP5467xxN1Aa437LN8AFbDqJSWVNYBRKLfMZ",
  "key4": "4VZi819xp2roekjzvvFE5Nb7v38u94ZQTxPLsSNAbaUbr5qx5Loe3yJHRwQppyQeZDgpN66RkmyZtyP1WojD2BVC",
  "key5": "59FVvmrP9u7fDVhCF6GxbKuFaYrYto4PEUtxGAz7mSbL4cu8MVwBzxHD8y2xpH61ttoAsMvoq4CV1DchFyNvwn4v",
  "key6": "5oG2WRztb8J9hX3kbvFcdMsxvVXePXm3bfEVuGm79dd8kjL6xaNNXX6uoDrfgCw5xYtUTSK24vaBrTSCjKJK44WK",
  "key7": "42ZHmP8ohab8UBuK2CiXkE2J6AoXrX1wQE5NDw4GgNCgh5EBhZN2Y85pj7MqfHKjkkuVMJCtdmNGsfcdoHSMHrnU",
  "key8": "5pvau1Bd9KT8pVAMWVMYbWt8RoAsNjQpzsB4ukEA8uHzm9491avZGpHue8RtNR6viWgJWmCa2SR4Bea6DyPX3MxY",
  "key9": "4yfA4yXt8wuX1dUarS7Qqb1HwyEfKN5e3r3UARJn13M94MNo67TRrUMeEFubrzeghwvV4mxyupwSdTuWkXSktZvu",
  "key10": "4dQ7nppqGpCjjxrZmGLk9rzm8frsCsW2MuTBj2sZgtGDEPzw6dSVx3E9ic3AyhKkqgXcW4c8UhDVdMeFtHPS2Txh",
  "key11": "3PFhrLKbUgpTWYg9NAMPVY4uurL8fMqP16Qp3XDcuDBSVKmAmvpBWqBLLuuYdqgCTWKkjGPUfTHgEGkULNEaXo2f",
  "key12": "4gbqgN6VGF8XXqygXEEkcRvwDaGrL5C2WG29JMrCD9F5pM5gbNbYNGrF4UceU98HmNUFPi9Ui5WADvs2PpRbJRnu",
  "key13": "KP4mPabtTP96VZEWQjNUtWJnt6iW4Um4ohyp5RU8BUFbpgv8FUeU7pfRbBAUoQPkn6HzUVDDRgHVpMpQkeWfCr6",
  "key14": "49wbUxHSwKvvjVs9Ki9hLzy47Mr3w8EaYCjSkzfTDkQsjT527Q1dX4VoMTM5uG7Cr16adTDZrjpvRzXZUZjagbQV",
  "key15": "TdM4sKKnuxDPxJFNcrcToAvJCznQVA4r8GaAAu1MWTe2HwpV9ADGWdXiyHPXKsjgoYt1RvtgpSidW48jaNSiaFu",
  "key16": "4vCkKYYXRyKYZxx21hJ5Gg1FTJ73CC4aHWtHCV6mGStbJq1jHBVoE5wursscz9S6Ekg8AGSaWocpJCrwqSTUFymS",
  "key17": "5HgNR157iniJY9ACYumMnuY9dgo1jkzz8byhNGYCnqAhc13dBuwELqjZF9keYnbGj5uTmitJCczMordruJaxRZb",
  "key18": "5vEEkN2JmteQ35doNevdGcFBLXUp1DWN43MRJGkVxBnZ62VvTReja8NQ4ec2HCLD7VqVWpwTX6rjrXNZDd52c9FX",
  "key19": "3rwZVkAJMWL8FmsUHCCuwmHzYk3GX4Wg6CXqDad1vB8MjhoBp8NLd8EU15R1DDXh1SEDBUFuLbtmrvdoVseZjdZj",
  "key20": "5mqjMqWHFh2dZ6QVwYxSCT9pmRZmYQ5qs7eCmBifWseBn7CvDX8Fw1nPtLyFxpuvPhoTQyHvwpSzHT7nSXLMEfhg",
  "key21": "2PTACh4NBUoECrCdpK1ReP6rQJBzn2mtnEvvreRv5MepxkEh6fJJ4v82BJ8tGBxcZthLU8gmYVx6qhYn1Ggv71nY",
  "key22": "4c3f8rG2JYdtkDhwHXjW9dvrabEhdHC5z4494BoaS7j1BaAeEtwz18Y32BWCxjxxcXjBnrmzGgqjeAPpTJss4eyR",
  "key23": "2xJnDqw3deuaMguuLpVVSV1d432Ys2eWVVro9xyS7BKi1BAhExz2vVz328CCky1rS3swRSVs8WyefsEzt3cctzyq",
  "key24": "22uE9cvu54ArbqT1R3MVCMft5rYCrF7qckXR85Mfa9HjfP2uG31rRD7jm3HCVYGve9e4zrF3cKGKvs2PQ9AkdS8K",
  "key25": "2umuejexG8TBzAwcMz7FdtcuY2AojZFHrMcXV8JZDXNmMnjm2BANtEPjuJcGKbXV8QD4VNqPai2kwWxSG2TQuCZo",
  "key26": "5BWC3amx1Jbio2HkZukdfc7qgKBptk23AVEpyiavPjEGPazJwbMXr95X2XzUBXUaxfD6rBHnmwfKKshfP2AWuEJH",
  "key27": "99Knobj7Bq37SRNdnnEhZqiepGTE2Z1DszajzkJn9NJwjTsxwFyAhzwssYSg2FfbxcaaoV2kNVCWQRAbQ1mrutC"
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
