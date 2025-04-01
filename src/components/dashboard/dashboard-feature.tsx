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
    "5MHxwFqS3ic8xHFeQHKxb1k2N7Ny9wrMFdj5g5dBzLfuqVF68SaeddCbncQGmtKe9j4UV92cVST5MR54Eqk1JwH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "byudiDcFWxwMUZTTcvSquVNXFfb7WsR7eHYCLy9yhfogh7qtGdmLDKuWjij1axp8uoE3BPH6DiMLF1i61zejjV2",
  "key1": "LCUy1mbBZ7HuPgDsNiu2ocJva2s3xWbEvVcVk5bgYLNtPHMi2hkFUeeEWPLWoC3LW3hj2sGgsnD6n9xX1Y1GLFk",
  "key2": "4x8EKeFFvXRJv1JGVHKHwTKw5Na9YD3ytqEQArhog8nKQfFQkVMTs2KmQT9Qi8EThAQQkAmhoZSSQcokp2mgdQwP",
  "key3": "1tGCqaLKx2cxZZLwPgAm4aRbdAcUxSi5JfVG6ewW6DXAm5SH81RtWrf34cJZt4QweJRMpseazTDqwADdXGSfayG",
  "key4": "4bwkcBnMhZHjai8vsusAD4A61fiKCEpzYzK6M16QN93RFBoMupqYpd1xQNViWs7PHGdrGsmmWnkF62FToRDfaLjj",
  "key5": "2vtjxpoorKiuVkmRAAGn5gcWU1F15JKb7FXeLAPt1mYJba95uQMPG2xjnzd8JV7eXGCvgMdsuHC51n4ALwbPJZSk",
  "key6": "PjRBdbTq6fFMiTvzCYyt1s2f4cq86g4GeRXiQ3ieUx6Vo47o9MmzXRBMk9MkvRsVCoMqWqBFKwNn8aBm1ccMTsy",
  "key7": "3DjrKsFHHSsE8QQwmE7z7G9HEdUJPFCJEWwnrr6R7iLrF3Q9UraYX9wDRtM2ZXxiUBM1kQHJzrYzEPMoqX5kvRJp",
  "key8": "4AqbACc92JnPKcdYrgE6VAwHMhxXaK7fpyKeCf2zwjaRca5eBnBZ924JKQLS2B3pjGy2w2kmC22omL7u5ae3FwVE",
  "key9": "4PYmBGSgXd1zVQQcCh4gxMfvhRJ7D3m3boTzqBwXdYKXhNKvtN4MjsGqxHbVsqeNrWQHPzoeWh14BvHZo4fmHxBs",
  "key10": "3BuXgUHF52Bu2wCzVaCiuJ511chziM2XYUfaxybzok9jnSVdagnXyMjy61Ej6uAPgQ2zr4mt6EE9vR8ZjpENZv5J",
  "key11": "4RhZJ6y9xZS7qgDL6TqVooEhWFdFi3icxuxrTWfPPyygEAL49RMMduZsJhayA2zad7uRo2ahe5BbRxhtpm5vLZv8",
  "key12": "4KRXXr9kjRK4SZfcK7tK85yF3HATShtitjaYgySDzDoNWKhb5JMDSTxPRrtiQ1Ka5xkbA2JqgTtUr8Mu6RAZjjxH",
  "key13": "41RHwuePRu3jd3hC6PxzUw31MEMitgPCj66JPTygk4RtYDiQPqyF8yDP1BVFXB4MVTR162XSWKV9YQdr2yrjGziw",
  "key14": "3sD1B5fYdf9SGu4xgwxaZkSLzTxpNrzxBYUPheb3cFprjue3C6uZEadeks3VeMzXfgNBfy3RASLx6XKoPxkhENd1",
  "key15": "4DpBLnHneTL2unSijA9bzm7oNMtDRbxFc3Kf6oYUQMsS4NximMAowCUeRhC4MB5z4Ya1qg79uyHBDiAQLyj3HL3i",
  "key16": "2tmY8U7RctbVCZ1gZy7wVJH3PQNMdh3g2mKVqbFHnubZqpAp41fWUGzEdTZwKtopASRKEQfSx5ToeLobQEQP9Hc2",
  "key17": "2gxU9VvyWFZVunCGdssmwkSpJHxnYM7d9cpQM1Yy6KjmaL6aAMvzGfLuk7Me9ZxoHbJPB9H7FJAXWP4kqJ6YtThm",
  "key18": "67arHXomUkTdsgC8M24eTuGp1qoPoCWf5nUd55YPvDiN3fSWcszqHzUcGpBpC1aKtrTXfbJnJWoKzKPWLMheGbmg",
  "key19": "3FHoGncU4Ny8wAjRzN2Pfp5S9ougufRAEx4tsBccJa5eJeCnAQsXwfcTkuFbT9RWebHHvLPodL41WBifEdEk7VJZ",
  "key20": "7wng2pBd4aVtgJaGkcitsJ2V9SLjzCtWnk1XTm4Q9V7E4geuJA7Chkk5PJZTENYk4UAXozujfXjqgK2Kin8DBrs",
  "key21": "4t4arGpnCBHcrxHYzc1p7C3unhWXQTg9nLysyUYVXmSeUMpdguese54jWPgZ6kDNbdvzoXdzLqvXxHrBb2XBZDSv",
  "key22": "5qXtCT7Hd6Aui3m5qdPUsoKGmJTh32uezZbkMRJmZcpaRPHNRAq1BCrW9aDZ3ehZtfqw9JVkFEt6k2WMdAT8DsBL",
  "key23": "2aPqLtvpCQNNepMqsjmPCHs9GCd9VxB2YawdddaucX3Zz7UGLDW4uziZLy4oh2tqQWzHGFtx7WnADYEjrsAS4D4A",
  "key24": "2FkZVtrqjyYno8mAS5VAbR2tXbJE9HM8wZMYy9872a3KdZeb444H2xhchwTUt1Faso4seuPrPiF4FS1WypPDbgSe"
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
