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
    "64wNrCCCXGKR9evVVZM7rjmuA3sqQtJMpxK7HPFVWYjJ47oPJohir4yFC3wTFBFh9c9uhg3CnWFEjkvFQzD9SrBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32zcTk4c2Kpuf4LrwJ5eLpDo4Y4WsW7P8uzF5pFsB4FWoNWkWNw47rbv5nEi3b5q4RcFTCg6F1bvvAjgz2q2PCGh",
  "key1": "5tV1L4ABXN2hFULTSTV4hJw4HFfk9S6jriCM3VzxHfvBppWaGAPehuaRCeuuqi9LbK6tpQRxMmdTb8oDTzxPHiC4",
  "key2": "3zTe1uwgtXc96UC8U5W3tWVZGpGdpR7wk5r5A1ePfdVyPS3QhK23yG4bEKGLgg7esihJcP8c4RxegiMZ8JMa3fTL",
  "key3": "5LfdvYAC4RPXhAsY1DrY7uwyAoAs4LM8uVjFAUDdhgFfZrwLT7wpoxyDHF12tPVy9S5T3PCnfKVjehgS3JP2XG8M",
  "key4": "3H4nQUpsStywVSijKyD2p1uSgRxsJhTXZtQP8aaPeiHSyq6UA65dzuDbVM5cnpswT2qFN6ULAgzHn6MhAkj4b8pk",
  "key5": "5J3VzPGhzSuQwXrSHf4Grth8FDTHQS3Ny16Qx2AAvAc2e8TyBxaKw9YS7rSjieqgAh8Y7DgJCo46KkQuTgK2XbGq",
  "key6": "2t6ihqe3ZfaATQUanZv1VitixqKmoHoQdw8RRfwWiXHVU4Z3UcdHc5ooG2JwbdEQ39XTVis2xBpPUo24ReKr9Zvh",
  "key7": "1hsRTyg7GBpRXntb6wV7z92tdV4qtpcXwfSamJmSgbHJhFZJaoBqKF56w9w9zVCdNAghH5TaejY1FKGW8zXJ8Rq",
  "key8": "3cHLsnUzAAma1MrGs6NhJF6yAKQXSLWejersN6umAsqwQiRNTNpRGzuuyJR9ZABUv2jgwJorX72ZsyCBgwJD9fRm",
  "key9": "39syoryTWWnwfweLsgbrkpeQTMUfUPBuzhqQoiyCWZ8Nrq4ynmFoxGXNwuZkKubes7KhwwDTp5yq6BScvayzjPr",
  "key10": "2n8ZqQVU4WMxWNDkTdRfjHeDoGikbGtRvpyW1xcHYgsJcuQatQKBCmaxSTkt4QN5mKopzoRKWTveXE4mhn3B7rBe",
  "key11": "3tAxS4Gh9PLukoTdSKjQ3Q5YxCZgt2D6nNmR1D5HgB7j9GA4fHaHzwudfsqHyP7NWxR75rQZDEu6GVwBt2GywALY",
  "key12": "5weJDjmpqxM2J3PGQVPBr7XaAXWtCn3V3bGWVmmHiFRyPczjL3s86reFxu4F4yYzsDLRQp9bsCRRuDvyN9kAKrw7",
  "key13": "2C18YtctFZgRaePYjTZYFAR5b3fqmRaKhAERtZ7g3fGBZfw5XqcCeD2B9Nvy3eu2sWEcz6rszgTJD8ZEPJGNYJKZ",
  "key14": "49Gg7DBpVKzqtGRvo2tjkB13hKrCNEcCkhHHaMfZcvmSLLwCwLiq5VU7zcBzkGKuWUa1QESZSgqGXkcutPiMVK8F",
  "key15": "5UWgYCYb9yxZiwLTxhN6ADGECpXtBMa7a34pnpG2Hqgi2fhLfwwDwR6MsuZ8UoneGZMXD4gX1kevUhHe8TKF6rQb",
  "key16": "jzitqBEJLpasvieWDKWRWe7tVch1rfu4jvdTgmT3Cg4QiDs7DzJLJU8idu1e1c93tKcYR1dESYkR4rUnLnNQ6Q6",
  "key17": "5EQKLRvinNJJ4VdEe4BMQq2MqdXbkHQHnSYQvV6Tj5DCPCUbF8s3nh3JRRsYHk6ZABXtSRtKJE6M3Kn7Q9C7z6AY",
  "key18": "49XjwRvDurYQ7WLmJr4FSkJ8G4J3u9fCa7kobwjUDo8n36ZStWf8Bom6tenv3g7oD2uSca8piPVf7zCkhzpEspBH",
  "key19": "54jkhi21bRz3CoDanHbSDPQ38r2eP1BcsJGvtshsnAeiSb9XD9YPniggCkRVDRo1vwsTRCzojUW7AL8RTvKnTR73",
  "key20": "3iEHMNtXZPFzRbXUhb8dtXiasa5H2NhfhMQK4UBdM8uLJh3fDbgFFRdzrQCBabCDQfmCLVj7XUtpCMgv51zbj3ky",
  "key21": "5QA15YcaeR4TL7kTDXVrrhVP3Bx2LUEWDnuHPdGGR5uU8XsYN79jv5uzCWYQ85prTStChqJW4QcUUiDcoVZj5RcK",
  "key22": "4DpvwETq9Ms6KsKdwjTZvGRARWmQc78yHh2cCajSR411UKqrg1tVktzjUNVVAGFNos4hKjBuH1As4P8zDotx2xVV",
  "key23": "bWNjey1Pn1GyUgUqbwos8j6pxy8y3yYwcrkJ8c9h5PXNDZpMHD641LXtdPw4oVpVi2uajAq8ejqoNCWnESbXcmZ",
  "key24": "5qdyu96DnX9KDMc6iUcR31f3ersB3WfdnuZh4pLiU2r7yTdU676MFHbr9wd1jdShkCDJTupMmvBPDJa7ff4uhwFD",
  "key25": "RapHKerMrHjzGE1x1VMeBXTjt25Hk92yDRxDd3A777F1WdTitjQfrgfxHaw1mNCgG4P8vogUqCfw5JYhZsGGMUh",
  "key26": "KGwbA8DRmWsJsUxyUaLhhgRhpgaVnNDfvnZV9CQTGSGSPvX5uZBKL18nNja47ycA42hz8qet3TEK5Y4PCgBnWpx",
  "key27": "4rv23qDC3d9doh4YmPeVbWy1A9Rxs4pKtmVTsuzroPfvV9yNcBvzZQW6gUrNUjzRjX9w6QcVFLzPcThC6dX9geeB"
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
