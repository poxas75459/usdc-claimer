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
    "5QUmggwPK94kTDBnXzru81RtajPmPkmGEmsGVgsLBCaNZTDNeuZRMHDm342KoCpzeV4CizpjQDp3H751PWGB9Bag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hF5Bbbyt3WQWSBFvRd5W65Gt5YJcDKKfVqTnuTpMcYw25WqbHpoiCr1Uw4tENRHZwhXAuhxFsSHFrgekPDbyMcq",
  "key1": "64Ghzap37J58vA6SEfPTbuVGcB8kKtL64uZ6FeAk5LjTqH9AKHvuFX5LYTv57zAUNAZckqJX13gubjcSx28UmRDV",
  "key2": "5BqyCn278anaYfBcKp627T9WGgsoeP7qqGba8N4CYF2wsh17FbYV75ffrW7dH9H4PeAG1ARVaBWqgLdi66PHQtj7",
  "key3": "32hz2qSQNWEmJfdrWqAAdXAGpM97UViLQzi5rWP5gmxyVXc5pnMiqzDsu9n1Az9UWtDcHTMyemNAc8rtSqvaMw5q",
  "key4": "4qFDBj297vqVkfnvMjovKwhHDKRTJZgBzvxdaPkk3NPjCvuX9CWrjtVKWKiZ9ABac9ErChRRp5FkVsV8bE12ourV",
  "key5": "4RAGzeSDPkcE3wGvr3GXDMhWHRwCRDzTXNFej5UWMYHoyUMBsvaxKngBP3KxXs2Nru9dnvmnYBjYtUwyB4DLsZH4",
  "key6": "5nJ9N8UtTV2HqBnjhHBAc8TU4aL3NBrb3MkqB3ToGwxva4cadT98BbjDr2cBaSApWoJuAqRzNaA6yiox11ZeRPEh",
  "key7": "WzD5JE6vMnS6ybc6TWvZbbY9uTGgcHdjuRxPw5vos3xfdQmgdxfNDfjDx3M3VHjL6cKJCE4Xhkd5zb4iWoTrdkz",
  "key8": "ieyexRP7h8kokAEe8fGvMgsQpTEe7e6JkE5tqf8gHNeEUkzsaqT1d1zkt4q5iyncVE9ZnA16B42jKMmyRLV9W9y",
  "key9": "4xBysao2fkjUqwzL6yxHZcpT3Kg6LxWDGUPVGJu7nUVWFNS4BSQUCV5v56D68gkego9G4RezzaLt1w9wAsdVBku4",
  "key10": "3QKVP6Fyvqxfb7z89EV22Y2UYjLdLVnPtHzo5HdvfwWWKhQ6aPCbWNoGCFkU9dhUyDw8BUgKcj6kxaP85xX5iHMK",
  "key11": "4xvRpDePKsF31zcqmVCNirUwot1BsgpQcWG8vZCyeBr5TcXVvWSyLRVPgqc3YL8j5P68TSBBHTqakL6RJPE5i5Ej",
  "key12": "2h3UbspTyyrAuaut8sjZ2ZM6UkaJxoaq6dEK9vyFxEqUEkhx3GChRj96HFfApFqKSZedZvBPGw6wU6zQtfzUE8Dq",
  "key13": "5noWx7vQM718AJZmsshAwzm4dT6KUEj7iStWy15YUbJPWgbnD7Xyucbd7ibzHS3owryvR2PXXxMZrMeeSDb3ZiUn",
  "key14": "5FQuMJRGnkvU8seBREgRaG8yUyrEBrZABn6D4jmXQpaPW7YEDCF22JZ5kw4sLYhGaFKfQoDmcYCVYGrKkphjvwPx",
  "key15": "4CXeR83uRHSsBGty7yxUK5ictowgAuPVZkJB6LYBkUbTR5JtcZhCX456nurGBZJonr6KY7N1bQeB3WChKPL8Fhhg",
  "key16": "4Msjo11q4TFCMaHBpadXaWrRmQzMkyTauZnECjs3KxUgLTS2icz11HZHgLCm1Mf58gaEsFw3BTdgmThE1iwkmF6W",
  "key17": "3p1Tpjbz8ijd9BxdFpdbqKUrBDFs4j8JpZotBuHML8SQoSUvSC7XmBnkcSRLUzdRz3cTNZrcE2wJhExAQTR6LCTG",
  "key18": "59ZuToLffR8CtZVfG9Wrb1VnXZ1VfMYZcLNAaseP1AQwi7e675kcHAdmHWBvVAgn6M9wx5jjSdVnx9gszEey2FuQ",
  "key19": "2uijdxAy1LMFT88EubzL5g4UTqvwFbgbPWLqFmm7YEtMv2zF66YYUohH8kAokM5kcJuSxUoAmVmszi4ToLWgiesm",
  "key20": "679YEvrFnVVWgipBRmWK4jimq6kY57BC9KgsFHHiq93Fi3fXsLYxCocCar2ax83jzrbNCJpCqDJH1iCR76nf7EHz",
  "key21": "MFPRSgB5MEU78wiKPx1ohT6cE5eNC8Qxp8VPWMVNGYGyH9RcH6B3MUm4UdyvxqfZEJpURpNUwvQvfQrscCJi3PK",
  "key22": "49tHDcBmVQWk53e3QTrfK95WM8RwyWhuWMaqu3bLwBT46oNuQu6BoBGNJZP1Wxh9YLR7FCiikDuz7Znq97ySg28",
  "key23": "5E6FfZZHJErdoqWxJtAERXBXpXAYpN9BZJTX8kuze8vWco7xsF3qSsHVx652UnW1YXNY9Hi1ndAfFoj7DPNcoKgy",
  "key24": "4optif3kwXR1mFKJ9yKEq4UeHiWcGopE1xSNwYHLrepZDGbdBf44VNhWFWeuCDrRrH8LmYyvqAuP9Uo1wn4j9yEi",
  "key25": "4whASNFVWoKZUYheWTrZeVuYVu6EJfCRsh2r2FGxzJq7QyzFwXE4tVdvxR1aHU14SYbxE3xVmtrQ4pTUYbRKLmWc"
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
