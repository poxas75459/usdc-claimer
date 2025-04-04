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
    "2MFjaFg4zwF2zxbY57n1pkLu2wtncGL4VLwkbPLRV4DcQ7CQqUTCQzLSYLfMpPFvivcZM5sPTzmKFxGCVEfYPNzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "URfQ7KitMeN7SMcaZ2QWTmQxoAqiYb1MK5ZKmFmcNWbp5bQrFTZsdSrmA2i4bPYmBxTECvVKzENo2L9LUGj2QZc",
  "key1": "4At9Ha1utkUeyZxu735nwjnpJZmWDxeakKgEkmc7KsY3xnKJWdD1Xs1HiGw8tTEe8UDB7XVXeCnhp4DNNmXb4kVP",
  "key2": "3uGDUrwEHAn4a6miFCaCTXpp9yTS8r8qQBgQurCf5r6BcHdhPCs5HSjCeBbh49RkZ3RUXtpJaCPeKRirLbdA3Rsc",
  "key3": "3UK2oEnn1onNqVTNGtqZsHfmUaTZMuiUsM3isHADoanw1jse7wuk55q8yV4aYKdKzDKXwqxk2G5KRj23ZZkVpR1C",
  "key4": "4XzCZWMXugZvJBdijqPk7YRUcztF9ZjvrteeSmFeRLXdSYpdG8boxCFzq2fPiiunbLJPuYatC6Sb7yrfkvs3y8C5",
  "key5": "4BqveKRp8bxSnoiVw4rhuHf1f4fe1VtQbne3iVEfTJhdELbPdmUekB4p2dokScZUZLa3SoNkesLXWojFQAm8ySk2",
  "key6": "5ZBtdrMf17qyiDZYncx4bytecR4twPC6WYE9bG4sJQyAM3ccex34H8sud8fXijHB5tQqcTmbhrmTek3muw2Gj2Bj",
  "key7": "4upBk8mr35Wh5se6x7RcMRzfysZ2yf9pgKeH2dk2fVD6hpThWxfwHsnNjVf7d3UhUMV3hKumHxYq3hoNqNrEt8CN",
  "key8": "4kJSXHjJ2bwHL2g3ztska8AgtvV1bpcnew9edmW42Wa31bmsR2e9XokbkDRSuzYZ6RVPo8uhGEFB7qSLWiZnLjGD",
  "key9": "4YoPqba3iUgLSQoHhrjbPRiXVHquLt9XQCCQwhuSjznFRi2pQnhaFeUcfe2iY99mh5RQX7AR5TR8Wjpq3QJk4NWz",
  "key10": "2ZRccJTGpSWRLoaQnVsQNdL8rVq8yN9Ko4Cz6AkprQDStrQuoKBzjH1qKfCo55n2PeJVo8MjDad2ehMobMQPqDUH",
  "key11": "5WR9565pz4dnyeJdipgZx46hamapJ9RXLFqZJFEbtZvvoxsPESYMc9BvWgafSpPXux7LsYaDSNMRZ75AN1FajU4B",
  "key12": "5T1kiBvr16hMAnRSq8ugSpxVun7RDbahDY93X8ttmiq6vLJ5hgC2qnbsgUqVC7hke67gqxWyWdZiwShRJLdr8LRY",
  "key13": "2Fnrd99Vezcx3pp9pDaG7Zy1Kmz3inJxurQPKVtWEi5dTXiSXcwjuvWxSxzW9d9oUTr9HTYUh611C1oZPipeQ32f",
  "key14": "5PhjzJQkRpQR9Vf4WJkSLxzm1XHtjLZ1FTV9Jy9wke5EmgXCYgfy9UhqXdomWchRrzpAspxFwoeFkGVFm9c9Vzv",
  "key15": "sXvt9uhjb4AxW3QBFBJQtcGR8PbDnWgcyjW1tdt5m8wz575cqgjZ4aRTcT8hyqvSyaRnfhBENbFbTSHhvzwrRrw",
  "key16": "427MrCeRRXzr185sPvst23Arg5NE5cxG3FKTRoryXUFQdYRhUAvotHiU2qYHgyDWPimx8h8RCo1E7KzWiTXdJ69h",
  "key17": "2AvQJFvM9q7pxpNwMCiRQnVFtsNskkyCaSKaP6f8VLjGRP5TPRihWUCBN58zJy62S7itvpTGeeW5DxUfXdYeBwD4",
  "key18": "2y6rFr6bi7hCxPaUUuPuzYnbjhsowDXtK3aecWghgriqu2E4A5khUspMazTHBkYozT4d5JqXggMjToBiekrmYAQr",
  "key19": "4FBpQ23WpEcJoLzfyMHPGHpPWDRTuU9BksAtBEQ1idkYUNBTbm1B8G6TXmKR3cg8HLdX6qaiLysHhX2Kjei9GgYM",
  "key20": "2YkzEEk9K3rjvxeW13fDECDavUiE63jBtf9j9J2JgC1arkz6KLpN1uyv64wnh5Pkwxd5KhJJVuRUYWEbUfcTb7e9",
  "key21": "5ZG2U3beik8YVxwbA9Wq4fMS6Haire1XtfuFJMicUA97WyG9wk67aircKXU9jSyNyjUNQftQP6tngmk3pRoEr8tp",
  "key22": "3Jz4EC9zKx2bzU1mWJuVmpzFLwFv1yVDxnU4KTngWHBbPZjuUnc2Q8wNYzPeSsuKVdr6Q7g8UEJuVHcFnmXTmMrr",
  "key23": "3BzojVNeTRTt3nf9tUWVVEjYP8cRR3NPXrwc4JMJbMyBX64y5HS1HeZWCanPw7sd8t7Bkua9PnrZmN7dLa3gwxNw",
  "key24": "477q4JC3ajKxHr4j5uWFMZWs8tpPzzeQhFVce4PUX6vee6Q7KRMhhQns5JP3jnfuEafp4orVSjU1ukntXWUzpiia",
  "key25": "4bBbjxVAwywCNcDXEFi8EYWnoNi9dcycP29QpTL8KswVcEE4zHpyBUVz48KbWRnieqkPYvrpdysJtsVEYWt3cRGa",
  "key26": "486LomJPsW6iaCVMWMpBeRCEsqGGEdnprLhL3fteHzZfrQ2A8TyE33TCnJgeKZK6NvhZAZuLnHk3dBmJvZuU6bJ2"
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
