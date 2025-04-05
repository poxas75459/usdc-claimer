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
    "3ukTgZEdSgesGh2uthwtyQYaNmHW1yLNnBrjkCk2TqMBjfFRPnN3zap5adU7WdvcRbMLC7JKRJpC5uErSWumWbTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FSjkPuiiCgRvcxRs5kUe7cyuC8HcxR6vVyWsaXMGDeoJToRJEfedPaaVQPrrUoBKdCkQkQ4aHxZwQEYeimxgSUW",
  "key1": "6Jqc2pT3wsxiruUR6on2w5MrJkJ5VoBMwLNqwG56LhScf1ykhDtKV7oAptYMELVK65xGRshtHn5RzC2knnLzi45",
  "key2": "3uy3T14NwGXhQ6NsswyJkfKmSVECH3fjNe2QK5DEqdhUD11eprvAMu6brfsp91Dmi9SMPmirsMb6iiEn31LuhG1N",
  "key3": "5vqeaqNeaDcXu2NyzwEegChXzS7YQuw7XfyBoT8a6DDnJX5p1GBZ11TgJkRLbKvWne9rsuDQKEKux57Thj2wxRHX",
  "key4": "3FvG4exeK4BVXP2YULdJEwEU27tXNbtodEBWQ3PEqoK9gcnzpE5BzHJtDNYuAgWMThi8yXmnw6NnYb3TGicY2smE",
  "key5": "wPhQCq1aWUsbW98LbqPcLUNm97mWKMR2tTVZ1JYVQ6UYCNPPU4Sfc4qrJ954terWzqoccqHgUMabfcTcarvACUL",
  "key6": "2GTMgm4rMTpA7fLkBZ32nH2jePUcEkuZEqfMov1LifkYg8AxURjHVkLUrf5boSbzdPkDzkNgurDPHPNCmHyJifV7",
  "key7": "4R7Va6esfgMiVPBx9Sma6w3SPMECC7Y27H6L6uVM1Ws2gBpCCxWJDME1vk6VZYM8HKU8N7JmQi5YjsxLebLDPVU2",
  "key8": "63zkXqCifNxSWXY2yGFmyjmGgtiyJ8LuhaZJdFeqgMRhBSfm37bNNejNR7BkRshHQwNqLJiqNnaAiKEoHWSmy2fV",
  "key9": "5bs7GwqqX268ofqXKVq7ZDL6UG8iAqn7J5ANWpDLqAc3f3d49iRasYhXH7bDg5Ybhu3U32UD17g5Hq1Mu4xxdz5b",
  "key10": "2CCMT2L45i9YxptRAF1YJF7cyCXk1zGz2C3THDU8SPYLDuH5eYEZHaY1jQbPGbuhoxtLWP8ATi3Q3zQ1NEPsFw6n",
  "key11": "4QWmqPnorbxShW7YRn7gaPwnWZBSpjbHQhrBaauwKEPZo645yemGWqP1DhWS9eFY5bHd4PEAXCvqxK2aub3E6QBx",
  "key12": "TcUu7s9k9mQ3FKev6z8bPxpEmDXCnH4JidVi8LK5LwZErjtEndtj6tMQC59xbxng4SVcRF7rfK8y6zHibVMGANa",
  "key13": "jr3qQbbNfH9tbboFbRtKWfjJmGtb4JbSM3JKLVBrQa3YSPWX1hg9j6oEGS5UjyfoXea1axFMbAakRgXVs6FTCLe",
  "key14": "XSWbwSt6jzaB2uzg1upvFcSKw1VNxJmhhfbVCZuyVQhG1xxQHYDQJP9vHjBLAuMRXRoJy8ymfUZiPC4A8uaiwZ8",
  "key15": "3qgozqQWQVTdtJTn9GZ63Xh3YYE7YYrT3uFg4ETmLZWV3FX2xWwHpHVxe1LMVYwL7aicnFTgZvDFA5SWupfAKL3z",
  "key16": "46NxHxkMMnrgnmcrovKbH4jPkLgTCSwBucuKD9WkQ7CHX45bmpgueRNqxdCdL5PmSiN231T1Um4LTW2Ck8cne79C",
  "key17": "4qEGGH37A1EdUuPGBPcDjpUfTbpQVwavaezEtUeWEtnLq6PDiQfhQLpyEVKZNTcBnbezJWmq5jLqUKCmkzEMzozW",
  "key18": "3mxXd2mceg7KXmb6dN4LSgN15w9EftuX7xaiY2XjhuRTMRzG97JyDy3syohFMQmfAYg4inWFXEA9MqoT3HYxSzzd",
  "key19": "5Bu31kCESq6nsGW9R2y9SBfkH4bovnYHDNyUWdXU3AoTcgZTkERZBNrc6Bvkv12cVFZMUJsVLcRVCfd3hDx2drtR",
  "key20": "5pft51HEuRmqngjm7VR4V4ME9KKSgYyffP5SRaSoyC9BPaA95qyHo5nnNLUvkko6MeHdkdKrzD2xq7jvhgHXHNnL",
  "key21": "4G2RvpKgyXLEdtAwFdf29TkDwZrWoBEwozEkZbDw6D3a4sBPH1WxYhM9G2HumSedn4eMS9V1DfdxRHbbN71Z2Cpo",
  "key22": "4LuFnG8fLcNhheD4ofEQt43gWGnVcnAo1oWK4KGYzQkTXgJghFJ1BcPGhefRb7as9wRwrcgnWEUfkH4BFGEZQEtG",
  "key23": "5Guxr9Cm441bcsRLncYBF3rSWGGWubwDeU2GXuzbVtU6XCJtrpsmvm8V7RCVinUKCX2jdGd3ur53kKXMoayA9cBj",
  "key24": "KkwMYWbtUpvDS5K7954T65JtqPPQEtgFVMu7fH3a2XXXT2SeNffA5LdLPyeR7cPpzTMJ1pzgm8Qip2VsCrHmU7N"
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
