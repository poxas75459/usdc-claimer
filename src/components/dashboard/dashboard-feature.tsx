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
    "2yyD5iRd6QtHXDXWds3xPwt8829T4YSqcsSfuA4PjtAsocKMLG1ioGsQZQ3sJaKPPxXZh32PpYbKaaXhz8AckBZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XYmaoKnAz6kuBwxTQQaycLyPU9cYF8R4BbW6ggiev6ymEQGpKhHqntEjp9PjNsd4cwUnnngZVhJcAA5smpiNfzC",
  "key1": "3aypzD8CN6cJkSPCtnjdp3TvqttV7MUmSiBvUDVezwCsySU4kVuYzi8zf8E7JJZawSvdWm5Jb9rFXXEYbr1k7Mcz",
  "key2": "5tmBPGXPhUEBqX72abdyvmNobC22heNQkRFhqvJoh5RkDa7zcjVjKVqmw45Te5U76EMAbUeYRQMX19KpUBw3RXPt",
  "key3": "5fecbCU9epCx6GRyFV7GD2Ebz9nWhuTggV1TtPZBhLDPHFLvT73KPZoLjh51tN72a2V6wgH9HUWiEPESBVNDjiNj",
  "key4": "efp9ZmoQCwiC8Zp3RVUJXdmnLkm8B6VXzt6wp9uNVcUHzsdSTjAf4StRqCx1pa5jos1A8VNccv9MbC34phP8C6n",
  "key5": "3HohhQHjjtUA1BquR72vNHCeaNAPcsCVMmEc7UT3gjrSh1YkGji9s5zda3RSKyogPbVa4ZwD29RQsiNVgcrwmmsy",
  "key6": "2TPKy4xqXKvkckJHhks7zta53Lh54c2Eb4kDsNEMiNNTPH6qCiejvjMxF5nm83dAdABNT34EHHdh3VGrNR8tUXiq",
  "key7": "39Pb4RzTDJP75Q2NqaQfSo85dxJbnrv5EwRypLJjB37gtVMnMZh2Fbte3hossZ2gPyitF5pjJZ5X2en3jikZLaUw",
  "key8": "2K1HWvtWYZ47JNomZ4DgtAew1CTZ9CY8hQmshBLQ9swqHGdyCHKzDwqh8zMPh2Gh4GnSSTLNnpkXxy3SwKqezawy",
  "key9": "3kURMPerNWBPe849EV9MuGx29gMhA39r2zdxh2RWKdyzTuSaJbJt1ACLhpVpxA2M4isrceWiXivte9xEaSkK8EPm",
  "key10": "3TsYt4TNVbvcbdtu2ayQkAgBhUHCVmTjdgPz8PsybpGjHfSPFviGGdjwRZxsip4YEP1zkXa19YuqNooXGrEwG2af",
  "key11": "gEfaDMdbu7ai69SnxwiRag4wy8kPXR25QRUTRafCLV5hjKW8BKYj5dZkYpda5v7g9EhxBttyYuDXBSwsuuT9xtZ",
  "key12": "tAZ3WafRXQWgSvnBLkh9xwaRFdehzUYxbybpwa5dr6w3sZ4J42V5n9bLUgpBRnU1CSS3SbEiBcQfBYTbMaezmHR",
  "key13": "5FvuukdsK23FYkC1GkoicKki1sHyKmxnhGMViTecED96S7be6MmRvGrzm1qdmGZRVnhSUWALvq1PTSYtepFonEG6",
  "key14": "39PVt7j5b9dHdxUKdZJnZUHTbGcK6v2mRpTdrEj4fmJE7hn7ei3soYPaC2Y3xq3dfJQPVUtDGFE4UkCEcrckZFBL",
  "key15": "674tnKGvbeTDfNiPvgTaSkeCFkubDsdMrJMt2UsoNAqxhbG9RrP5AbJivuMQvTMkNdNW3d3vpU5bEhyVBEXcACg4",
  "key16": "AdD5xK3JwxzpJwocL9utmhds432RMedR42eNc9L5sDT6gGybe1dcU6YnCbgK9eyV4DCKBHizMXw485ccxokWbWH",
  "key17": "5nioPa5jRq3ndQcJyjANw6cQUHQThr7tn1T4SQFj8LoRpDuLaN6QNkNxNZG4dLokQChEZQLhwM1UvTsK39s6Xu3i",
  "key18": "3U2JzxFHUjv4VBTXB76rjiWyxkv5KKRLGgkMmpqFL3qo5NxrbYk45tZ81s3MNicqfWSraSztYjVr6DHTrqNqcvbr",
  "key19": "3q7XxSxQDxzvnE6HKdR9ptZBksgcDcgjGN2JshPWFyaBrh1LbVUtkWqTiR8pD1H9LFSLxXWHHrpxmuSpPP3yLNfT",
  "key20": "3fJRvpgMJeX5t1fKrNRB1g2aknWf1UNRgwC8HTKndSXVEQfA8fVvX99keCKnLNSjnvp9Ci4iG2ANutbHaDby5ggj",
  "key21": "3bpZoaNSQwqCKPAovGrqnpUoySxwnyjRqvrraQWLrvPjPWPey6rFQZhUcsBVqhfT4WSJk4k2bXqP7QeThqSBWdmu",
  "key22": "4EWQhgTJedpit2rGULHE9hvmW7ouyCL4sN6LP6GD1fU1FByyPJztaMqC3YLvhzeR4PRMvGWxKvAAcCfy2gxXK7pz",
  "key23": "3USrQMtyBxZ9wzLkmx2rUYDmaGAM9QAkyJ6a6SBHNZFkc5dp7rLcavfKK1YLT3uTwg8CD9wAig4FNdmRaAn8tZs",
  "key24": "2fh5bqPWUXmm8spVRWEpEEeLnwauaYqkscGktcWC2MNeVLc1ThvouJLY7uELqmQuGp9KtH7GqKkM8WRXzQtdQ9Z3",
  "key25": "4L3MuUj2Hm35v2TvyaMNXPsCMHvYAn59zLEet6P7rjt782sADQHBNZgwpnVnMNCQsVoyLaFMGaKD6uX9onkDULA",
  "key26": "31CdhrQKm9ShTaiX7q9HdqtpNachXWXgrwHxRRGpzpKv3bJz5n8wABNpskbsigUS4xwmwGQSW1rA58J8m1ngVHzD",
  "key27": "3agwJHieDUjoQ9nnztet9n6gi8KVsziNdx3Nu5e8x3DDFhz4Xo7dFxifc17oggiNQnbUni6FDkat5PfdHLwqEXSt",
  "key28": "4eh6myMYb3zRHcnPiPBkg4kLwbzJu44DjvvpSXnyDf9q94dJB23r3E1JY6BFCsQifLjzWBYTemGnHL7AvyF5GPX5",
  "key29": "2Fw2mvm2uVXJhM7xkq1yeQqHtDwHXXq7aDfaHjEb1QbWimmz7dqPoVz8h3mBYv2uL8nYt2JH7Y8oVNmwjP99mUdF",
  "key30": "4aA3SWSiFtPganVu5ZMki8m3UYczPcF8m3XdFmLFwFYRzKbeNddcEi1h9SabsPciKGSYruQKNRZP9J2DTyvcc3ic"
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
