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
    "3z7ofY7MaSiz3x4He16d9LknLYxF274ZvaS3sDc6uyAuSaGErgZ1RszaBE5AxszLM6mWebGGnMQfWaUrYZbaURd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42u8SYdGMXbZt9ZrvA1J8EXYa6FA1fDK6ME59tYS37b4qWC8AZAF4BjY3pdEWPFF3eVV95NLqdnMyeFZsRVfHBkc",
  "key1": "5JNv3TN7b1ts2srrnU27kCtonk8YSmfUyf51Q2BSeb9RXDfwn57zycGKUY8nxgKrkMiPs86UFb5vk48pxhMUWi4e",
  "key2": "5zBS8RrksP5T36dFHENsWmNKuQFVyFL56USz42tT6xAttgCxccq3aPmThZXT2WyGMC96sqyy5Y3FPuihz3CMLEqY",
  "key3": "5oAwMtYsuJmHUjvLxfv2YCxLAKQRKMpepbHtNwt98j6ZqqL7FGR7xoaLeTjLeZxdMfAwi5tjwgBBqgA5fXGNntbU",
  "key4": "3ZkPXxMtjj3fUUC4J361ucgD6zkxb2Y3VUC4taazzrWgEUix9v2sdFJcaoxgoJRW511gn5HHmkokdLbbz4dJtNyE",
  "key5": "aBUaHkrp4AhAN2tW6hKzWAYEi2ZobxdsgUgRxPr8q2yBALzGP5ycnUeJoCm7uUCBuzUa6PBDBvKmEgN2YHqALTA",
  "key6": "3w32LMGLwzM2GHjCHfqnRqsvuja8Av2V1R8RfFmCFoDwUMsPkkebHjVFYfpZ9Jfi4X89XmS2rpFXjLYqDuToguPh",
  "key7": "669fV8yPyMc3ANWvfTfKjjCjN39Mi3ycEWykhLftC8x6KQvjcH57sKqgCtLebTg4iDopPwXmLvquoE9gRepQpXEj",
  "key8": "5PwC5YqaqsD1dLBF8ZAZSthhXAXAw1jcYmcyXCb5AAmKM8Xdp7vWDeeZP9Q9pzL3KemLLYxobg46zjwdjumx9Svf",
  "key9": "4n1jqf8E8KjtZBR1vy3hMdntTW1muQ3qyUveeFuX51qb74WJ5sApazPe3GNU3LjZWy4C3GTm3Nx8cnjavtpeyjnM",
  "key10": "4VhCQiKGQrMKAMq7tGMpqJrWTUrR5W6MgmkPguSCoAzixsZJZJ6THqiqkeBg6AvZYKGfZm8jGeCZiAQ2cK1fVzCM",
  "key11": "3L3BGi4vKwCJSdXXLAjSkcqEHUHySaMURBhGFnL27ySfCdWqZ8Mwo26kqJB4u23cHM7Amnwx2RDJ2i9hVoxRRTjE",
  "key12": "4PiSmB9ucuU1rkrze6usfSLHiMP8jU49e2VRwYxP24G92TomhHudN7uGHrGCvX47woyn8cmDDmKGaH6hyTia2hYk",
  "key13": "5YooacKN8zVSiWLLZmocmz7h499ndJAJXs5r9SkkP96khTwZxr6ew6dZVUQ1Gra7V5QfkFgZfrfGf7SuBoZdckrN",
  "key14": "356We3boAjguYshmvUXvjz6emX6WzmCVgvwdbssivMUgQGmeV7hUtVFk3a2QTHsx4WDdcKC1LV8T5F2noTe9H6Km",
  "key15": "3mDY8de3rdEPyAMy3f1mZGsWhxeZfzQ6hPdEcxeGrRYa1PZ3YnznuVVw1Wx6ehnxdXuuhfqWzubfo3zZkW5GPni4",
  "key16": "32JX9pYAwHyaLFBf8ouv76qbqtko9LqSPTcdB2p6M7AM2t92kPMrkKBouUVFzoz6w815PkFcH8gu2t1sXjEsPCCs",
  "key17": "WtaSHDEXkqjaEmdVm1DaLd8Ey966e8emftYdie2Mus8Em5BjYaaHKgtx9zbUr8CihkoBkBmSFHTXCueCFZ2u3oj",
  "key18": "5JURpwiTCQK5hRU1gWGr52KWFm1MKDwwxx25NMdZWAqioJz1iW9nAQYSbPfrFbQf8dH4NVSBkuha3i4QU888yRz4",
  "key19": "21GonrMZofWMCi3xUeiR9szn5GLTYfQTNtZAaTLANL7StbLtBG68yYXnsUbExxm1Lcsgtp1Qz5uFRczSpGFtR76S",
  "key20": "QnqvBWgzUzsD2DqN1NU7zZkeNPKbSdzUQ55L8mjywthCcQhiKM7ekXTSA894Ry8965zos1FUrH7MTbEQCBH7c6G",
  "key21": "3AqktTDDXvXWLzWMyjYfscXPAshYofyVhmd75jqkMQz3ZGrjvMnwyao6pfeer38v1DQNLJwxRDT1tr5Ujf48FcyG",
  "key22": "3g8yoGhwwoFQdZGm26piSjLiTbLWFSLdwMAQ7oddEHuEzdJDoesbfkvi3mgpagsLjBrANmYf2mXjAo1focKTyzMz",
  "key23": "4xKJXZHBCg2M5khrpbd59oBog9N1ntof1sVyrwWxc19gREQrzDer6qZ9vetsLmyo3Gni1YTb9q2hFrq9FJCq5yWQ",
  "key24": "3hMVvEBhHUrovWwys1XyBKihHuwQywnyNSSe9UFkjj5w8QTZmNHJRuaJ6a3URgHNAWJgbhmzEj8yMmiEB7i4CCnQ",
  "key25": "5anC5RrvpZuj39TVC4wWjTJt5uUN9B16bVLdnGJxkbz5DUogZ2vVJqnipern2YkFsDsFHM75TzS5K6PTTrxkCiRk",
  "key26": "RqskZrPjkFg8nwWbdgz3RVzVrmwkfu69C2mfb31FjxdT6LRbVYq3iSCe6uBPtRKt5T4bBP95YUUrBtEGxUkjbQD",
  "key27": "MJCu7YGgikbEdWBEAq4HAgt7Np8WKDBkydEgSJD6t7aNqp7Z3SwSRTFtX11LkQxVJ69uXZGV7ppU5G8vxBi7YcD",
  "key28": "xKMzsNPxTR4mAnXSjesorMsPHHsxuUccAhJAwhgNZemn7BhAEUcUtoBLCwQMvnKHd79qBaUDWgrepN9st2UHLvZ",
  "key29": "5jaRDgbGeESyrJ6oqQQPm4gGBqRkjyDMKKpDHYYXb82ZEghwnN6X5ZM4dejyt9FEnq6GeTuGycbaMyYiJtgskc7g",
  "key30": "2U88RdTTZPpvG1mtk6DxaVqxzMA6ZvubHVS6HfM2tRir5oXEjj5iCfrSfC5bMLyArJkkeeBTLoqZUCnrx3dEPKz9",
  "key31": "4rjsLifjLzvBgkdRNXHAafLheRKoDMbW2s8WZLxzUZdY1qcSgtEJQc3ooe8hspPrQ3pZXkvfQ6uLWhcVNXrW73NN",
  "key32": "9yiPwwSCv1KvdnNtTpFfZdmEknLaw1h4HWWWxwCLXD2T8SRfBugCZBXahsa5jwsrtXp5RCL6gL8maPRfKwPxnAf",
  "key33": "3tBfWy6EAaWtepMGHxQ323dFuyR2Wgp5nr8oftEf1Kpu1zh9GwaUtoEUjziC8atVSjMu9Cm18hX7MrpWZZsS43v7",
  "key34": "54cVdqj3BcBbG3nKMaS5CUNAQSnB8ndVQMRvcjjk66fdFQc27AUUtcV8kDBommMVn2VSZvFxtnQd3LrV9FBktFdX"
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
