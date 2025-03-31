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
    "4yBckN6gPtqRQf19MeRYu1qzV6GTHzBjjSbmsLxCVgYoT4L6PdwsQ87whWXf7B8gvv2CEnRJSm3UhS2MST5a99FW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kgBNSFtvawrRVDNZYLkTbzrE55dXAG5Mty1prxatKoB57bsxmR46sZsMjAHVYxoVtEjHpvNDJsn7i83hXwAVz6j",
  "key1": "3bofiAWN1WWfa5sM9498aVKqdea7aNrRodHeanGQbGFi9j7szXCWtQQVAmK8suLkX2VfMgMEv9UXJ8yfsfVW8TAQ",
  "key2": "3M8B9wZQRum78WW2EFAo7sQXGADnNMyf3QprLx6mFQvWeEKKrutKa48trHvsPbTWh5GZgMLQ7WWiZX2WtQmE8TFk",
  "key3": "2SkYW4K3yCEpgz4vNYTuPk7vbDGRRSJN5RKmD38fCe3WxBXb6NeFAEj2RBKPTM34tqwVSpxFUaXCfSfxPJWehjpT",
  "key4": "2gqEq5nVHu5xWNLPbhXdWYnqCW6m92UC6LiJoFPazxERxTnCpFkfwTAi12nZrmWwFfWKy9CmoJoomDTDHvKnjP6W",
  "key5": "29dKmLgB5xosp3RHDg4LEvfEz9qA1yGueZJWeoMgGqPN4t9J1NH2sewXGMsiLx3ZkqXALeEU6cRTdv1kgBtqGLn2",
  "key6": "5sCshQ4B8YNu4DRfcg8jX1iUY74pdegNSLXa8DKiGnZZzdtArTbjUddogs3vvqEh8x9oWoJTxuCTt7N62ngc1nnz",
  "key7": "3DqdG9Ad1JdCEBYKwmHpQR1FKAMP6wKmKzedxVZQV49C6JHa54vxHvEP7Q5Z328TmxSHmyZ8pv98seKr9BtPVJMm",
  "key8": "MGeFsFCRJKQ2guUeV7EGiizAEPtjRi8fX2eCz6UoXiNUu5TdTNCV48W1FiuziLxpt82uYreiSSAy9TzvL565BoC",
  "key9": "3ScC8CcnzCFvMLxUVtPh6wJxVnbpfaqkLL1q1cep8rdmPozL5Sn5naermBYib4LMipXDGm5Bx9UCCUgjqCPtGxyf",
  "key10": "QMHobYsg2rzwffoUrhS5jErkWD8Ee3Hnb58fg7TRzuNy4qoWbPCmMfXZuWgvr9dwfhuEo1sNPyzVhEGCLh7Aiub",
  "key11": "5Y8u2xbZDuThG3JGJ97Y9c9DGVqiHLo98MQdAPEsBSGQhgEdr9F91iJLosQBkSVSqsxTXuuxurV38w7PAWBF3uLs",
  "key12": "3sNrynihLbY6ADkKaa2skmACwZ4H9eux6YcFSeGfJbb5DQqmpnNufhssBW6qdnMLcZbVCcXg4VvxZeZjT7ToAa3a",
  "key13": "Qh1UzV7mg8mM5bem3GvN5RXnD5RsxM7A2EDGWdJ6ECyc6io4bgUi7gXM3dtzYUdEUieovQX4pQ8ze88EeASPnvE",
  "key14": "2bSCJwcdJU8upvGzHm8ijW6kbUrWmDLfA5onfb8eRPde1qu61zu8N8Rbjd1FLdTeQdHfDgfa2bbgZZcDF36a3yKs",
  "key15": "P5MUprToK4SJEcPnMmH4iLJ9Z4sLGXFMCgKnpQiFZnXyMBNsK5J7j5GEk1Hf46tVqs9SP3mRnpNkDDbYMU9E6Mk",
  "key16": "3aQAjzvCoBuRk1vLVFTEzyKW6YZkoJcB4d8yCNkY86uWRttopDVv69uRqE62LRs8bhk6VVRcDbLCajfwpEfqEq5D",
  "key17": "2NTHzhmyWdYkpA5J5sAHJAZYG3fuap9SUz7tJcdsAqkZN6omzkbPEw76rPPPs7eQFfLd2zQ8zqmYZYSgst78FtaC",
  "key18": "2uMqopUyXiX4TPYMGBCSeU15LxHikMrarhnJgusqEaZi7rDL5bNTYCHwvDqmLpNbuigE29dbGiFzYVmmpXCoP1dV",
  "key19": "yNKXUZTcPrBe2bimSx8rPQxyVk9CHDKCx3QcSRTSdBQWS1CrqZpBc8M4fzkfjp7tCq2UFPaXYdCR5wUxtcgoPvK",
  "key20": "66aHW9GjHdkkAowCMaaznnuXSJHAmTTzde26rS5DmiNcKaiHLNy3PtRb6A1SpgqjSjsMJ98LxnWKTQ7TEnw1x7L",
  "key21": "5Nr2RcYfK3R4TSrnQJbHx1aNjVrcewkzAA52GvnXRrnvLg6XXs7dfd6oDAFDJoooj4tSuKarXRLwgtZG3wZUkpmZ",
  "key22": "ipiz9ru5cGYchZjsFGdt1qnoSsudBZd7zjNJh8U5EPznJajrq3LYo4xye264C7oz8XKstQPn1d4JUQRZxMqW1Hx",
  "key23": "3mC787d7eqgsSPeCAZQZ8zGYBJGnj64PDcbRjudmxYYf2zsHSzG7YhjsccD4sgMm8KD1dw1iNvGBYur676KNrGi1",
  "key24": "ifYsfGPZVks9d5iN4QLfXVg6NjQwBWw9Dhp7GAE5nfNc1GeFMxGM8uoM19QW1eArS2YH2Dzui56W7FtzQvGAjPb",
  "key25": "4o4hWqsA6uwgXpQSLaREDNdmJQnYDYeZV7d3Spc9nNqNBtGUnxKCtU64J9Sz2mV6kgq37t4CDPSX1p4gjbTw8gFS",
  "key26": "5M414h5RK6myPq1EwQMah15rsS5swyJU9VpHsNKRwMfxZXPXgYaY8ETMTd7u4R2oQxAwRh7Jh7hj8PLaPCK6vT3Q",
  "key27": "58xL2ZVtHK79MPNDvGLjrN8s8TPMYEyanmPmxJrDW2SqFvNxUAFpTCb7uqoMQSGNDRUuQyMhGDRr6bM3MQvFn31M",
  "key28": "4jUZCKYun88XzJ6Ebk56R3PMVqDZpu2ET1DNzNbJuPgiqbF1vp4QkUuDFhuRLoofh7ogFbQ6MMqsuEtsayWMTbqV",
  "key29": "51JKbTQchJP4Cb9AqMXb23L1CiAfA4uBnqp8fZYpLhUXpUovixmXWgCcfPczEvnmk2fszanJSrk3c9hHATNXad4Q",
  "key30": "3Qy1oxxpoNfvtBajMwxeNhiZnAebYKE81MQeTqhwE59p8rZoin7jWGGXLrxBnMNtYxNb16FTMCn7djenYkLqMEYW",
  "key31": "39qnTwKoQcxFXE3x1L1CLveDJxexubbtZwC5xu55seQdts93zXBMUJT6GzQHbcdR9GGpvPkHhMs7rdBWaCNyBBVw",
  "key32": "5GWMGB2nWooBsa9eUUKVPaVSCssLQ1odssRQwYQuz2i1vuwMMjAMW5LEPiTPrmn16EAiD7AMttYWt1yshpfZjfZW",
  "key33": "45SoFrZaRANkEvRDKEvxifVoTQudBSyYr52AXyw9UZmWxReqQRbDe4PRZdVzYPsQ8WdUauHhNENykgrte1EoJWs5",
  "key34": "7dbCY9rf2woZRnfVDXZ2zGuhug5vuhKJydMJrKuZ6wFbSAaP3qJiZ1uWnzzQ2XofMwbybP7S3v4LNEG5eiXKnP9",
  "key35": "cDi1q88fdkdYm8DSzHj9pLVwZzz9HMA8fC4XsXfw63C7sCAjUbryQ5w5mBtSS8teB2dzocg2kY5NcWiTAH652vn",
  "key36": "5TcYRoEbBusdRyKgkjwrrcawN2pYX3W793vUnB5TQcrs4Wrc8fpqsiHj76XLkZtV8eTgmxcZB4fFufAzvRVhVZ8w",
  "key37": "2NdL7SCUPQYhnsJrVuu86Jkv25kZHSCj3WThsHiVXndxqDFYg1rbX9GuHZ92gSnKHMdNnRdLjQvNhHprjvqfvtne"
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
