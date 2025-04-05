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
    "2DwNzr1qN4EWSAYntbeP5TAWb4xQhrXSdUMFVAmSLWwdErBChup4xs7WmUXroYwKL7Na4HSXY3CuuWJeuAB619Ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQVqtvD7mxTWhteqXcBpjHNTqGLpZULKaAa3Qc7b1oMCrNoRc31wzYKixqwW1SVfPCkXvySSgGinyQXqHSB9m2V",
  "key1": "2eLeXZmMkKLhhxLhLTewpTmu57DQ1uh182vzpbZKaFbmMoXqAhFERBWnQ59dqSgd3GcHm2dbaQ2gJaAAyzhUEAKK",
  "key2": "rc8sBn6HLJcumzGYqHw9vBHmGy14kLkJ2Vh2oHXbFjyxBZzcZLNPST2ZQ9ca9ztUcXFt1vBNTjHtgX7T5F8qRwQ",
  "key3": "4oYRXV6e2FW5nwpefkerz3jQfoaKBp9XDM7Hj6MNta4LdyVzyKNzexKN65yXNm3eynxEizRx1P7ePirT9VzJnqp7",
  "key4": "2BXguBqphFJmMF3KpfRowHMUpguYNgUEvcxjXUZMFqXt2JrQMj1Lo1gHqxyk5YKQLnBgoEbpCg7B11nsgzKVpgPL",
  "key5": "tchbx7oEAudshXMLhWG61r4TJ4sDC3G3WTHRGDmZn1owHttry67fKisNoDSfUGiiKN2mDtok83FCJYwuuraALyb",
  "key6": "4XbFGFT8GEWjLABW9TiG5wXxWqMi6jA4L2hHYDndemmkUrkho7MSyyaJJv2wDaL9wzhnaCPHwUVwFgBRJGkxvfJe",
  "key7": "3J6pLzykGAtk9s1bvX6cD8keKpYNGQeDivfHuK7t9TiQjgEENBoQm88z5xWbhfgRnDGHvf6PckXaX9mavQStHYWz",
  "key8": "4EqeoZ3ggiebe721pmukyKTtfTkjpN6qtYBThVEKTQHiui9DBNLPnxe1PFDAossPSFh5DPpKiPRkLh9a2pC7Y7Nu",
  "key9": "4CPNj7iP3nUbqXQWp1gTiZXVkNwRVmQCbBWYGYzfpbSR8PiP7Pe7JeisoTtivjQaAKQQZfe5Csp2fu7f6gMouanC",
  "key10": "5iwp9mSaVQj67nJffwCy2kqxSAB1QCYSy5x96qp5C4schD4P9TuFuihTG1pTeAiuWYGqKuud57ib4Eg3Fi8FXR2",
  "key11": "4DAfXJ9ML4k8D363183UBUaPdNeYdRrRPsZCjYKe828wq6Rpa18xLFsjfqYJfdqxANNT1vT3izn3Y4T5E3Jrkf2w",
  "key12": "4JB8hxNeyEgGDuYSQUypJZEMErupjsZ6btKDRuFjTfuzuFYFQiEpAuTp5fqwKRKhzWzm7W4Tf4rSCTPJM3Hg2Dos",
  "key13": "NYcbD3hgiKnmQunvYxzV4zzVqyRQWBNPd7dmGmtr2YgFCvK9h4Kcr3JNtwdAUb6G2cg5y1eGdvVYeJQotPwDKpV",
  "key14": "67HE4qXga73cD3xzFsEhN9EHYmyC61NYbwj6rgnb3xmX9vHDakDRrJh9a9WpXDwfMpWZbFwGbYcoXMfGNTTiVbfr",
  "key15": "2GNe9MyiZsRpAx81WT9dgC6P3byfDrXZTnT3MmvEhzTdakpYxnAj4PX911YsUZQuKP9aTkz6LAKgrUpMZP2imNKp",
  "key16": "4iENuWCdycXkbmv3F53oPE4whhyCUMCU6ZhaBWvxVXP6vg9czifPj7yWJf5ZcsVb4sn61okFzig7EzY8JcDnw8Wr",
  "key17": "UL6APE4nVAE4pqLJLidkcwJM2q5om72zoLzi4MkyW3xxZjVLimfuVDVoxa2JYMMjUFRa8ms4uQN1Pxju3PJJTM1",
  "key18": "4fcvqsdmxjaFM2p53TyhA1p8nWeqgpQsfb9EqCnabd6e5LaBQpbYHBZBELddx3nnwd1Tdhm9dGmDb22gvZQHkD2w",
  "key19": "2GjH9HQQigVxnwZsPVrsnUeL7bYbH7caRZ59mgbWmv89ZdFQLewFvBP95zBjbveimsXG3wsW47xjnAgWM8xrajia",
  "key20": "4rKL8Xcfc2JdcGRoREZobGYst2XjQJZWSFrf2QQX8PNddXtrrt8FazHR7X7cFLNfFgcpavjosdqtf6VJmEruEpG1",
  "key21": "2UBipwF77KwGauXdbKNL9m9EiNEVJN4sXRs9hufsEMWMig59z2ZHTL6Tixdxabrfhds8SZmrbpff4dpVpatmTTBU",
  "key22": "5bnPWPpiRSyTGpjfabWStonitvMatP8A8uGtMWFG9LET4iQBU2NvVxdyLyFFyCDgvS6WLM19mBdm3UaEgic1mgtb",
  "key23": "5eFEeXspLsTjwobBg27CXpUah4f6azdUQ8cVtzCnFEwr3AAtFpmmJMBMtJsYEQwgG72Y5gd3aFMZfiR4ezjVuNuf",
  "key24": "4TNdSJ7DSdLKMzR25UCmD1SPbRLKkgwffVcFgpWZYzJ1YWyXSpp3A3Q4sgNrP6S1T9aW6Km3WKz6ZsgXpGZ3NUUD",
  "key25": "5hCdz9frYfAPpvvRy9DoAi1UqgSRfk32C4oC5J9oFTEsmd6TgeeGcbapq2MybBKbMBEKE2vxVMwMtaa3DyvtfnNv",
  "key26": "4ae3z42iBEaSYvydhFGGpXxWkYc6Tea6BZSR9v3pG4vFdSP35YjcnqZZ8aTEh2DTffqVBBqcapiargyFZzJg243Z",
  "key27": "ic5r3f1wYBPTi4wuLL2fAJPnEHRBmQRaJ3n2dS9ENRdivBVriFLYXcmmavMz7HS23BhdE7JEjsJg4d6aK9yFjnu",
  "key28": "41LPBmsrXsMKsm7SFzHaWdUYLzVV8enV6DPnMjhqbWTRCgWTMtv3C2ipjub6pH6BcEGCcEVCkeyebPYhSEQLo3PQ",
  "key29": "3KoU86eh2GZ7mDAjCYJ4QkhThv6p2Uf3jp5iA7acAgRMqMBZbaq2Yk8WfXi1VWNAu6xDN9799LPfss6ojPUfGG5z",
  "key30": "595UKZyzUnZLcXTeyDf32zssVxM9oH9LsuC8NN6DVWCRkRjCYwhz9ekf4SppYA2ubHsCURmaMpqCtT4AWV9jL4wV",
  "key31": "5yrtHYWqyHg5WA3E7YYjkvvwocdLdQcF8a72n5mLbgz9moxTjseDbp4LmKN6iuwTHvKkj4goNEugTv4XGy4RcGpa",
  "key32": "5sgJcY375QR5k6NBUs5EhEo5mAwk4Sgzna51mXjDn5t74HkEAbjNoeLCd2hLtPvdgrXyrPGnDq5z2WkiyVK1TV6W",
  "key33": "j7CgZUN7VN2GiecDoVNEi6AJWPXz4km4KM5EqZmUQMdvK231mAC5YA5LQbagZtQmu4JxkvjvASXrYM4FN2yGcCp"
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
