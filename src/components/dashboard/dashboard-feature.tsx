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
    "3nk1uEGTHCZVRo8oXSFHjHtHTZk1XMhk5ppdjy1Y5H9wu7So8PzWYQfwvSNxSYTD4oseK2Zq76VLmHanUGEi36Cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54FdzCsL49EhRnPanGjQamQLiyffRgv2RcujPCiSVoWiSGbDPm8CbYYGYGEXEdRLGQxVbZD593YbN7yD8kVp443M",
  "key1": "2cJzK1gic1RQJevj4grXbLXmsTztobwoLttSRR1rXwouqQH5mPPQ2MLCQ32zDvXYdnfkc9p4eJqmQ9mvcrjywpeD",
  "key2": "23ZTweCL3p8pu8SbM8URjr8SNkzAiLKuZSDH6rCYMTpLiPVEsMAzvpBLyFwMAHTAdYVL2UM9vFkKpVGw3CXGV8AA",
  "key3": "5qwr8USmbtHrjYkQ5UzQU1dPEckimXu8x9qLeTQfk99wpJCRotW9xDrdRdAsipoiXcK8yMFrMH4NmCxEdxtAhTDW",
  "key4": "5khpkLueSTqGuLYkxDp5coZHEJDQSDBruduooQYFa7Tko8xddjhPKRqqCASMfpMXv5GedyB4h56LGXoiLVUKGu6v",
  "key5": "4RvTRHY7wTp417mw3DSZ2yaS19W9ocVKcW9UL69qjr1t8Fahr35qPEqgwWwLjgB8MrzysN1vNtE1JD5bkEZsyGAV",
  "key6": "39gBY12uegHJK3Pi6umdtXKWJpmAwZkaMaVfvZrayZ1mt61fVyvDdLFaPkrEf7wy3DLgVCAjonTYF7oNRuoDrZ3y",
  "key7": "5G8qQfRtxRxBexq7jSzWvRA2a5vJSrf2e5AkQrj5H5jhmE8kNK3dBwncNhqkLRFPUu1Lj5pqfcEdHNasP2dvEuNM",
  "key8": "zJxkv8zdoJyZURGoHptgUKMq1EpYRnVPwHdUtZe64qX8CxQ1tgmfGocKYoHsEL1DsRrBq8m2tUUoC71Kxi7vMDa",
  "key9": "4keWrbA8MZjjH5M2XHZ5tpPyAL3Mg7DxP6aJrucPt3Ta4d9Xvvx3ruSPZZoqjCQtfc3NtJJbdo3K8pnDtXuNS7RL",
  "key10": "4RcuHYjQaf5RT2tfBU3v1ExHLJL9Tyw9GPLDHT6qeKJZPmq2xY9oAEWohDpfLWzYTkBYxhkd2nhFG3AiQtY3ZYRw",
  "key11": "42oEkkVSa29nSj2cWWWMkPbMop1ShQvsHyo6DcSaGJ9QMuZMHfjgx5HsT8KHHNsQgiv8ooALdKE5fzbGFbdq1jFj",
  "key12": "57y1ShXv6hRMoXGu3QNQqjYXupn98uC4jo7CYd42jMp1FPQ6i4CAngEEyZXt6upeXznoFNELGkQq3ExCeWsJHBss",
  "key13": "ddoSXkie9iWgYMHF8wQ3DCjZD9KXDvcVdhgrjmNURrcWKHg53Uk3JLdBTNrJHKaDye7FTFjUQLLmfVLnP5paecJ",
  "key14": "2Vts3BqtNaFDUaPJcbV8FPFgHt3yrphRT626bJ3RGCa3EKRziC9vitK9GcaRvBzV1uiaR8XunYWmc3j4ySFW73ka",
  "key15": "5q5DZhS4d8qt53p9AZNCmr6F7NLLNdHMR221q2F29G5Qzc4DeMuUaL92j6guuX8TTX5WyCzD3of4nKHrLETFhSW2",
  "key16": "53GSLqTKMsKx6XQaS2LPrM2G8J49jrNWdepXaaDZ926hKsa6aFCSnMb22Ywx1Yhjoih2qT6Nf2t15PM8dW7c7NX8",
  "key17": "5fd2y28YgtZ8UfxxvCuxz6YjR8krj4UR9zfZi2beznpJdzn5DQyW3Wzhp1nDprhfgKuxYCsy1JEscNfvX8rcFGiE",
  "key18": "6xbojNET2V3wWwDPLgmKP2wrFiqwZc5BqDFhKhZdyq5RBGnoLPgi2Hj3at3dm4JfXKGP1wZ8SWfbxwZAHn2LaKa",
  "key19": "5rzhZTsKKKeH6ky9J6My7ArSRdc4pmm5SsqzD9DHaWbYqWj3ZiYueGNzWdcQKv48mKfKXa66eYXKthVqYxP7u3gB",
  "key20": "524mttCZZVD2KkniLjNWMcPqTwrAcAtLExnRv97zFhY6VTDCPXox7iAYMspo8982YaBHTksr2H2uZdLLT426n96S",
  "key21": "2aEHTn66UW481bQ33fdBuuecYz4YD6zux9Vve3UEsqNHJRBBp7bPZKxafDuAWZ6uiqyEeYGwjLan7cQ4EuaA49nS",
  "key22": "2Sn1Bo5xe6tdRJBh8C3eqySDAdDPXAYtjwjKLecGzGyDAdhNRNmQsyMbSvgCuS8LLmkyHDV6aLyui4esZS2L3pPy",
  "key23": "3yEZgnJ2QWfyV3qMazHjPV2i5sCSLWsrkFPdfruG1QJjwizhqSGkEoYC4gxB4fcaqVUNaAqo9ZAu2TfBkq69Zd2X",
  "key24": "2b6ajdeQUZM4YJ3oSiR1iS3kgPtBg2aZQML7skQtStmNPS3gTshv5aRCauyxvjt1wafY5Xs6koqaXvQqatXsKGZU"
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
