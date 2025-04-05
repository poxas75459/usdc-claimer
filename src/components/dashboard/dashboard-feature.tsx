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
    "vW4eJchEa5kaG81EuWNq8TuwsGYqs7wVoY4YVx3D7zRuVJm96sYTf6UHNeBqwDcAjnfViAgp3eaaNNQg6C86dHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kioERVp8iFLWtEc6F7ZEYdxd2zLSiM3MfuH36RvdqKwNgBnmHAXdUFFoaKftVy3EqA9xo87KZ7GTA4vsDB7AUcP",
  "key1": "5NzaSv9nrMoVYv23xTJ8srw5prmxohFACQ2EhsopNAdtSK1DnTUnxrCPZHXbJLbFxgCkGWMoWvYz4G8B7e7VfEsu",
  "key2": "2myFDT24V31kjiDmNoZgC789YygAFLZ7SouMbdtrw8DFdAwSmiPqXFqgD8kovkNw2fgDfKF8EDokTqatUUxQ9YoU",
  "key3": "iWGpvUnjD9zX612tMpq4bCMBs1DpsCJNUyGfEKiHyNoUq1q1HRaCNk7273Hh2SHXtpveagYaRnBgJuLBvD15UXt",
  "key4": "3UvtHfXxZ4YBFHAtNWPNaViABZyKq3d26VjufRp5KQdD9rnJPmvv1o4bvwdW3KbFNW73tw5x8sMQMK8VvMd2rqe3",
  "key5": "5uHF2MzcgRcRSqz7Fj8Z2YhnJMvdQmYrGn6ZBuMKmwHVVsUZ6KE8GD8AXVyhKgN9iiteocyeLrSj8uXkq61U8TRq",
  "key6": "2jGDhbNQoZo9RNkMG8nYxN5NDakpYHcyetjDVMisV8qN4T9cS6XxGp76Qtb9ZxXmu93VCLF4M64GnquoBX1u9BRW",
  "key7": "3uMX9t6iAHjtJxSR2DcKDguXTzBA5B319QAdbCxFfKDQtRdhouQ3NhtAfimrF7NkoWKMEGzrjU7FEFQA2BKDT3yt",
  "key8": "5WdBKWrjqES4GZXtoZsiu3hQy2WtW3JT7XDABUqkU9UX3tgd43tk2Hu9nEqPUNb1jqfQRnyqd6GUYFwS7jErwBTb",
  "key9": "2HpsUBqfjMXDg12u23Y14Mf2EvfyV8qZRTHJ25xgiPX5ECxW2dZH3MqBDMt3yzq3wpomiBLNUTiZ2TdY5xorFzvD",
  "key10": "35tPXJGMRP8Bs8B8832sTXtR3fRK5dqNjdKPVnW4rn4BKM9DkKCxAAMnLB4mwk4wXpBq3JXLtFxejunzcLNbtKk",
  "key11": "4aJB8fMxE7kZbQdZLk5ezcvxr4fYoSfS5bm7uYki9WaEcSGjtVSUyiQjTy3CJCDReMCJ8ueKGkxLgiQ31KaAJCHh",
  "key12": "4njc3opcf8z9q6FXStRnMgVU7mid7Nx5js9tEP599MsXvuDTbRR9Gk9vvg8fKMVd3ush25mcZeSHW42irZzyeCX6",
  "key13": "4oenuBRSoy8JRCLcqQ4W5fRqgxtUVZQYADTqgZG8jyAkfzPTZQF9L7MBNiL3V7vSzhpEAsDr1N8Jw7LwF2MfeVqQ",
  "key14": "566bLXVk475XwqhfEPpACy9MNiR9DoGnkiNWs8Um8WPGqJNyGwxzEXkmdiDh5hTt3sRiNfCjxQY5fnhkb5imN1p9",
  "key15": "4XyXkt8fxC6hpmCmuLDDxpTdM2QdSYnoEkxWmMmGL6HJRmUscW5HFSxWFViWF6bUzYwQC5gXPCFgcGyYeb1rSQta",
  "key16": "3BJsHdKSrH7TQkSih51q8Pk1PoX9ppGVB5pTGpgNnzdPC2JmeJveFLtR96LK8ex2k8muA68khyh6Gc1vK4HsMqnh",
  "key17": "32VvdTt7xL1KWScnidJT1P7b5EwpEPT4tuUghJC3sgQDd7LgpBDiJEZBakMZtQ2K5aje4trCc9nazzz2ig74rDKw",
  "key18": "4fWLzKM2jGCBq2xk5gk6KD8dPkSmBXDFFxyhh1kroVQ74ZHWA3kUKWBXqRaEgDXgtKc9UwAoptwb5abL1nYQbXyG",
  "key19": "3fb6by7HywGQtnjQXCGWd52DNg2NoAmjs87qtsL5w7jsRE3rn4ssCK5vYDf2VadXh4JCjmuv2tkZdsKskZn5K8HQ",
  "key20": "2AdRwHaVrrNmrhHQbwdTRrxEEei6xWHAPuaCbzbrFWQU99Wyv7jg51oVB2d2gzqNSveevErtmMcAHczsQC8dQTph",
  "key21": "5cApEoNZu9kMHYEwDb7ChmsLcYxxxEnEpGaMBNFyTBEQppW44xyVwKyLmi8aLfa34xJSumeiQZKsdV4VFxgMxZ8H",
  "key22": "59iAQTchkCSCzidMm1LBZpe2AuZSX5pZkaau6CGxGEJ2FXiEqGA6oWZLBvDxDxTbwSDDnRbpCFcww2RQPfLGaqaY",
  "key23": "3USrXmH8iew5RM6KZhzk2sEnJBe3HXNAWdsVLvZRjRygdkJ6WCM3bMrkmSZzxSX9onmgXTHma8HzwtJUGTEjRHWj",
  "key24": "3dWZErsVwJascfTLG3Q6coTNPdLwoe4Ek5ep5CLAHLp4CeqznV98MBmDLum5w179Nh4QSUF56QVK8AxfNuVon6G",
  "key25": "36vC4C2bGxCmRUQoiwVjMAVzZoBDHPKH4HjmXeUgwaRLdRaxPtPFDmURSoCCN1prnbn14rGREPGGULz3MsqtiTZk",
  "key26": "4NhGswYPTehYwanUftvoVCixp4VnHfM8LyBEBZtYX88xaiuF26txiNC99XzPJKFtPbR6omp5bgsoRky6Fh2wMBbN"
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
