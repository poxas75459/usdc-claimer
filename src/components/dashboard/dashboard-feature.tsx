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
    "YB2C8qjW6C3sVz82FDw5REwgu4BLr3PXSr1HdCqKoJAUbqSa6gaAZAVLZHyZtTq4BqDpFHJ6YZ9sXjsqnE9rezK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TiaSqTXajdbJFcDfZgRn5z21Ua6fx5BaS2kg64wpJB6ZeHFjTxfKWX6dsffai9rWsgyZKNXsB9xkhRgz2NyX9zR",
  "key1": "3FBXzUCUR2YGgY3WDfrJgrHjMdUY2QUZvHLqUCptbRDTMiZHHrWjXtgdDmHGX1h4DGAmqnuN49Vy2sLsvMFdKj8r",
  "key2": "jSNt4ej5QZ9aafSdvjvanEffaPzbbbvFh5wY1PkQqEgNiGiJkonpSKkMwnWFWn9AAwhqDk6AgMLYo7he1oJeCno",
  "key3": "45WWXi7iqPVQ6jdmg8YA5Nc1fXjDKfa8qjdtdxZLF7ZRFXE3oVtML4TaPnuySpZDzZibpsuMb3TXYs955PhZufRM",
  "key4": "3Tr8kePVquxRvC3pr1i2kDPnvq8yMBS7Cdkn68RxSJPUBwVcoumq69Dv917FZGtfSKb4vD5RkG9E2i44JcCofdQC",
  "key5": "42pBdzr9ikEbUy7j1dw8Ew7Wgbyp3dSBny48hht3y7D1q8HzCBvjtfvSCueBtMycJzvZdYe3v8EG29vTdeMuaubi",
  "key6": "5o7zsPLaNWC8kFq7YrGRR9L5EykK6yepSTLQ1rgAwBuBs62hT8YQg29gNf84bdBMMgL2BtbJ5uCoYXgPE38spVSV",
  "key7": "5cRPE6JAsWw6CEoe6BrSbHkDAqPN9bumiyS3A3vDRATEbPSwCF4KeK2UgKv4jcyeTDiTyb69rn8EetJKUj64jvgm",
  "key8": "2ekFT9diNqvhCte2wZXpBAieeyakGid8e9VrB3xyzoFxHnwMr2kV6AnsF8ncJyg9gB1WyDQZQBbxRmS9RXiQ3Xkv",
  "key9": "3u2Mo26HLHZvENGisr2YeaVJnUJnvt5Feg1b8h5dHK6Gnqdn3rWE2edPkEeP2VsrRfbky93RjMDLcEXCtdNiBPte",
  "key10": "2jSZKbHum8URZJP1FNcGC7mAgyqSfoFjtD7AN1AEczskEWGHqAcGtqQKPLPgyiHLM4h8KpAfMQAPWpHS49APgsi7",
  "key11": "38JaQKEonjNx3WkGo3ZJLpF1v24RyLRmSG5ZAh3vgi9kZY2UtesmNcQcFTage6dUb7icupzmB7RiB7dKRzn97XVz",
  "key12": "2knAut3K1XQTbRP78WVKLsSspunRfKoVfjtgnQ1Nr9FR4aqisSKSKXRuUU7sz6eyEg4JbMY7BaWQS17zMCkwf1XB",
  "key13": "2sfwNtP1CchMvc1F4q1qAsvkSXEDaytpkKHj4asAqRgai8hCzg5bTCtLzP6rF3kBC42BFtaMQXsthvxdU3aLnfpo",
  "key14": "3bFxwuqPj1fJBjVRfvXh2ey3z4GmzqA19Li97onz7Jkj2bQr8FbwgfQmEPsTbHZKTzM5eHY2VE8maqgsLd8d4AjC",
  "key15": "m32AYcRBrDsEmGpeNYiQ3oc3XqefM5CUFQkJRCNq1GswsBtZEsFb6nscDR2FABPRZ5LBqh3QEeebh7JvL8dNQNS",
  "key16": "3NVvvsmF1jdCwnprLhz7ow2pGu1d7g1YeieQ3Tpt41mhVrnbwVPcS9XRMKzoS5JKNEQpquqU7GTJva96k6vLsc9n",
  "key17": "65boCzQceqqnGGALV3ZBLuGLvoh2dEfnpzLxPeksrqxWP4bW7ZV5RWfoBmh2T9fK33657z4T312Z8NxpXwqypBBM",
  "key18": "3q4aqcZdby2G8v1wWHxxYRsQnvD3zBREMMRNbbZYVhQK2xwwaE2BP2eZMGGyFtV5G5DBukPwRjpeM5YnoN2SMRZf",
  "key19": "4njqoUoTB59JL7m5NtDjXbkJxTfyn1Z1Bx6gYiZCqT3BT6HS1Cw1n67FwYCSmBHdWcTgG2zCQ6vmEu8m9J4GWqXh",
  "key20": "4AVynSDRLPpK2hnAJMtT3Wo5gefZQfvyf1TFijna4oY6Mv2D4QVSeUSrJsXfFpWQbFeT9yueB3kTYJw4xxdAkBbL",
  "key21": "5bqCSx34yfvab4u65aoiBA15XRkKiWL8BbgQfgBEWaBdcgg5CivJx18b5RRsfmPDW2ATidcf5cEtVUBcgoRzPHUR",
  "key22": "253s2Cd95D9QZEVU3G8hyrQfNcWScSo2wdfdCXaY9gEqFZfAE53UdUWkUKJj7nGaQnx6N7E2KUzvcEnB8UgdLMqc",
  "key23": "AY7jajWjZZigjQkiu3qrDoRxZyXA9XseJZKvKYQbs48JhSMWxc6L8ahk69pJTDqm4Jke1KshXwDrZHEtmXmfGqn",
  "key24": "4okWETa7gwCFY8zMSAjDzPmLNAa7k4NHBkZU4v5j45ghfKYwug9Wzwu1TdR4nbk5UYaekQ22R5p64HasupGaU6PC",
  "key25": "3p8d7q2Qx1ftANC8fHz5p2MaNJj27p3n19WAAEo9wKdRtnDDFN9vdBbLHFZU2xAtkNQCKFJ6sCyYhgDBXrZL2c4W",
  "key26": "tEiMfonpfcSQigavmLsJ9QVfd7uxX9ePJZyDeP7JTPkh2xNup6PP2U9s6uxvcaPY14UTYp4pLXTt6wzgfEkSf7k",
  "key27": "2ZTLeCh6p4kdtUxe6UU7ATadzzSxaUvzNWziD7D8zGAXgeRKsxiE6ztxjxru5pLQvBY23XYoz1TB6hkdQU94Z3Qz",
  "key28": "5MxEtrpnvzWSsJDEbeMdbHXVNou5v1ETmJRUKQa6AGiuA2fBuzrDxns72gxTnAyVBgnojif9VPuhBMfQEaBzk1mt",
  "key29": "5dVtk3k9Zw2a8eqbn878PdPwK5PkFaGBikLi8GhcycT5qieqAdty7df69BSxnMtFeCw4LGcyJcgXCV9NqLWVgopH",
  "key30": "3Kv7hdj67di7TnDANu7Kuubug2TykKJaXK2wFHpAP4aQFZubwcgYpNTnHTJFdPFd3QJSBoAKsvVPqrPYfD5kAjio",
  "key31": "62DzuBKLACoShkgpcFVHPKTcbHhXszMDFSevBGnhaRK9FycDejVroxoJfZK8CSVunnCSSmJ3RiUGv6r26C3zTBjW"
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
