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
    "52QrdZoFV7GikPzvaNQwiNLH8SXpUyFvDWWW6niVgrLc1ZQAPk5vUwuRaqwUuBxHKdyd2DYFS6jCuFREEzCKa1y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RbQyrYMzQzXEiGhN9mZVF4JD82ZUSDR74J2gxHxUCEmLUn2YGNwZTHs1noTmzaMwApScrTx3NUNJ9HtBTUprZDC",
  "key1": "4qPftgSrzL9ZYYGPUtjyHYsBL8qW7UpyWvRvMUD8AwAdvumEZmRoXSMtri2Sinmi48MZeNjrTi9LsY74jdFkRjtz",
  "key2": "4yCaPboNbj785AGqzhwBakGv8hVG6EXmHJcA7MnKJyqLUmjSZm1mxLtdRHv2SDcv3vQm9iFD2HZNywbNNgYo5wAZ",
  "key3": "pHuJfS1X3dGcAhGb5uxKPwvftmBakf6q1AN5uXqRXXuD4SoksYtVbnPJFGfp7fcE5D3oWX4CmDde7P8nBPEcQYP",
  "key4": "24pxQnHC8vum7dGrZEfZCvL3KgZvdGYBwfPjq25vzEuM2wJc6Ex7hmfazzSVinSPJfykZgxCaGTzno3tzxGpai4B",
  "key5": "3cvUrj4gfyKw91F7p6nJhLyZ4ggZ7DmGGLFHUfLZbvvLSiUvqNjGhPNCxPxKyNQHQ5FtKT9ZxyRDS1omykh8D9Pu",
  "key6": "4eB7siXacx4MM93Uqw3XwAsppNMWtqZYpHssJmLkSFja3BBswciZ7MhPL9UnarW1fXDhEeEQDFGg5K8G6hb3JiXR",
  "key7": "2Q125wfjcFFrAfQvAagcffp5E41GY7pi4xT3APmtRHknMueT1HSS385VCs2o8Zg77duxUNuTJzVcswvMi6zMwFNf",
  "key8": "4tfxqzxadpF1KYCtCLvv2xz1MNKdNm8Tq61KknZHQdWADf2PiD84ZTLoudJpC5EZ3Re4k1wyMusVLspdNXjbhUr",
  "key9": "VYDYECxgCzd1qThjcJG3QfgwjGmNWQkE9p2Qx3ixne1CfKkuNaVoiXq8v1BD5iHsf5E7HZY7tPQfLu1AMq3oyr9",
  "key10": "5AySZGUZna4ZapPRPj91HgttxQ8Azaa9un9qGvE8xCys16jYHdoPyDdjUmc81JUaQ4dkWgZBPfs5XLygF1w5J8bQ",
  "key11": "5EZAPmojWT4NopraB3KC7r4CvVHUuaLt8xWQtw3pncETFDyAtdwWcxEXtnUs7hiC5Rn91iBKiLfBCiEL6bRAfC2M",
  "key12": "2sE84tscQqdHPnzVEK7RQHoLfKsWCY1vy5xNNmQKXBB3i4yhBAVqGAqoBki86E1Smievk4rKqvLgFczLHbJ9FjhL",
  "key13": "fbHDVgdMvvMbjNNq8t63aCgjGvRkKCGtc1kaZbENZrjGTPnrDvBZUvaEXpqxCmQzTEHVitwhMicqVucZdHEcRod",
  "key14": "4PSna7ZE9LxTNSNEwc8FKgmJrjNKYfX7uR3TzLHcJfHAQW12eAVsxM4gABjEM94Wh38tC7FQuT4KaDd6rLPJzUbZ",
  "key15": "5ByDH7R9L86SHG91TtaTXAUm3bjyqQk7FUHkkxpZF9W31t2Cb1G2remfTF1cSFbn8QpKsjcP83EnPfvucQGFfwvn",
  "key16": "4xpyYce1AZRfDYAX2Eh5xnw3hPnEhTfsNNcnfnHkSVRL2oxCpxUT7HDPadEUMepziETNgqucLnBdNTncK1YEUHon",
  "key17": "eVca8YiuuMYcYmSQtPTHZFs2V2cgqiMEdLPWHdUxuo6kr3mrVUPNFPxggxJ9pgYxvrnG4VSAd1fV9Xyi9MfrfUF",
  "key18": "2WF4UMcjYNSJiftPPATxBVfZsgGUozCgzJaQ1ttavJFh3FTv94RPBdhN2zRcL2MXLmMcbdd2B3wFRLcSiKiFGdte",
  "key19": "28guBNSjXpo6YoPavQYQZ8ZJfrRFRwqravQZ6u9bCRsALQXiK5VXHG9SSXXJYCtpChcyfYC7VzCFEux6VBKUQvFA",
  "key20": "26NYtUNSYpdFv44g2dvap9PhtEGKt1WiHDfHB5Dc49P5VbJyAAc4SGkbEXps3B23ZE9SXmHVNKE8uHBKknD7hqer",
  "key21": "5dFQRoE8pj3CrAC9KTfHknouZJ3BXf21Ybs2e2kmW1Fss5MmnzP6DQgVrJzhjMxxU9P6X8eL8KiLsq1kEDzFW7Zq",
  "key22": "3CCG44b63EVN9FUpNr8mXoM3zwGYNtzJaYhtkLQkp24iZwhT2ivSiLjgt91dPhtyvGAFkP9v7hyTZJr3Heaj2kCo",
  "key23": "5N7yRZRQyRMZENrToVYWJaQ6eCAvccLuM5ZQroNTqJVL7UN1r9i656bPt8KCeaogdvAGQ9wrJ2W9SPzf6cSHKxUd",
  "key24": "54hETNaNKUVQo2XT9auF4zy7Lo21RsntZu5H5ZaFVkkGddTki7UKSckuV9CzsJef1jWdwTtBEKC9d2M8RMBpxTLS",
  "key25": "4GbZLTA2VaPxBbjRdxtoan4qZibTypKGknfeULT1H7jQETfMJPKzsc9eHsePcZiCMPLBHNsqKk4fCwVZjPQ3bH4R",
  "key26": "5uuafzSNs8aQUzHwTPz5MkdNpu2wtdZ4MvmzzvCHoDED3hBQw6opGBZQVGe9tAgA8fnnKXAE3PryrmnKcGyzFkZL",
  "key27": "3WsavWW5FKNe9ZAXYEmbB8ciuz9hSbpMgGLZydRTD2oZdf8ex9XdZXM1DszV7nfNiXSYacJHCCVjdKtpDsirJTDx"
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
