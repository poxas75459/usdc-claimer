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
    "3zMJuxFkysw3eS2VQVyRc1KM5XztX3Gm49AUBM9vfua1H94Qj2SjaQRziHgig6XyXzqoh8kUwRv25DvFjGzJW1Vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QoRp2NyHrTkF57pddkfBCJj6u9oPjmpZpqwvbjodveGZddfDSg654QLwQ5yqybAn2FgHeBBRX72rhXnLSFfHEbb",
  "key1": "5QdL7GPT2YR6khFx2Bd9J15S5vicptrWhf887qw26A1A76aVA2ndYpUuXAXdTG7n3Lna2xhg4q8fLRLMdSE6mPK",
  "key2": "22ChaaHr2NK2DMgGABhFLC9ir19W9hVcYHttkwnFvfJsypV9qqK1j3Vd5DedJiRoPNrEEMQgMjYPLJmupoCSWfZv",
  "key3": "4o26fC9zktEK19P2MjvKKU3H4JmHuC3o8HcpYxQc7VCwVeScKeTf8cH3Bon9Td4ZPxJmEWVv3fGF3fUeuzrwTgUJ",
  "key4": "vrf2eMP3S1UsHZKRVKLmSySoA4JRnJrAsx7mLLSQAzUQqGDvJpaMpPhkWBbfiRF7iNDgje7EbYD4sW98scJK5dQ",
  "key5": "izBXokWKWWCfLesTtLrrDaVosj15LU4RqKcECyUBbuicxX9GN3CBwGBHgZN7jx4rpoTVR18TWQQhmkPZcmfUnbp",
  "key6": "2hL7m45xzugNQBvLpzvrbhvNM9HQ2RhchEEk8hP5FBp2mMJxns1hwafTEm2QmTQRcyUKwxDYB4zhWhVpd98aykPA",
  "key7": "61hVdn2viyHoonhHsG5Hpyntsj4m5G2YYMujD8hkUMiq1Z8fz2sQ9jsMxoS28tTyTY5oeh6W9auunovAfsJ4D6oz",
  "key8": "31n4FAy6nPhFSyUJB84e6ye19vrCTedbd287EQRJggvh5k2NaN547ySgremxjxZayU42czooJvaiaLGBPwZapfM5",
  "key9": "44GG1C3fQDJMBXemzR8qsekwBDwCyNWeh2CtoCv9h2SGREzYhSTHoHdtoXWg9p8u9Rxm1vmnZksp84qr2HPpZByg",
  "key10": "48wmMoWqhoRJkErf2xhie5LCyAs8iTKkMHEtwJUW9tzaJLi78SQgKPtnQ4PbXhDfQoRWQaDViE5GJtXfkWg87zrh",
  "key11": "1csb8yMHtWRvpxdEaYqiXCqAq8VzWTGPG3A3MfL9NvF6r6cyg2zP3dxEowtukcXL8CNREAH7FnMACy6ZgNLSGYD",
  "key12": "2CZnCLHyDh39Mca74CSQiaPpmkyy6xXYLgWZ2L5ZGCTBAZXVY9idAZrYfcN6gJoRAbQTo5Qi84NUXGJz64od8NSn",
  "key13": "5bsB2J2nRvrFLitEjtr9A1UemFgorXXC8eSGqWJxcgGaS5ZrZLE3kvq33yfEmGCKF1CKn65ixVoq4CiDFme8YNx4",
  "key14": "4RAACdCUY8YsD1vdSGcUAnKXPB6gRXeR7oK8safAVtsTgmiZqHy9zhWugWXqvXz3KuyUTK3wNvt5xLR1X5CiNX3m",
  "key15": "3J2gK79nonnCMScjVL9vHVN5xsa6wDmhj1BbY2miGXfBiUPGDpz7NCcd46vfnUpTW5WtY6WGBUPS4J8qmvuCRnPD",
  "key16": "2GeaCShr4dvHYQTkvtAzDwmLPF1z3SGzX7urJqVRj959DkLbW485SQZz1Nwnhw439A41RpDv41GrvHW6kr1c3XHL",
  "key17": "2JpchNJUQ6wxwetVdVWpxfzYzseZKU43CU5VDovPtyzpF8MLSVNe2yVq6cNjLtzyy3Y24LsHDBgRaxgQdMCSXVgE",
  "key18": "4cPjzk6Kw3k5kVYT7Qgnaz4XBZnCzzm1dbJn4AEVjN9yVE9wbQ2syN8QVdNNGAxP85dcCxcGyL8Aa88tjehhdVBu",
  "key19": "A9XsB3GBDC6o1yppE33Vhq6zkq91G3u6JPGWb4yymC8MRGcvBEVe6asyy3Bt7rrcpyAbLjRgxRYNDNwefghJqux",
  "key20": "35LovuiFEVR6JWitF5Ac4hxPyvMg9VxhBRWNz4CMGwRbVPVCzMVyEGRTddQNPaceG8s16pXbBWRnyDFezgkqr5Kw",
  "key21": "2rtCDaAgk2njgbB9xMztuXXZWTue4AXS1xWrW9SJhjNpamNATWcdiUWLFosWq71N1DcB5Mx2FLPd1DyVJpQUtYE9",
  "key22": "2LdLJFDzDynbZyjzexJkJnkXqWkV2bpYaYBqGmN4uFzu7xRNkzZBqdfAREA49Maw8M7vpXuzMRhSvh1dmPv1BEQU",
  "key23": "62GrN2LMKYo9pxfUEDAdjsVdr8oSyyVMBvdfMSkBUJXyW97jJxnQYcNJJ86svtW4HnYNr4z9ayDxaQNgDmPTEu81",
  "key24": "5mAZXKtYUxek678HQ6PsCqKvg9bUk9P1rTZhsDVLDmaHHYkNe6H3PXevyzg2srea9ebM5UDVy8zcPnMcvGwMZQBK",
  "key25": "38YEy9k28PU9v2jz2tDLiz7fEbhAu6nTjXAor8gFzucyCv8bZsALMLNfgAAXJS4tYvzWQpjhZCv9jAfpNzD2aaet",
  "key26": "5vanXAVPA4EdTeaaTxYQyUqkQhLReHwAaJtMNyzXPGThLDdkBcMAVk2NAtuhZ9fXQ6mPc4MrQgH9Hn6x4KhNWaYk",
  "key27": "3knZqrhV82VNEaiDWPcmhCmuCxtrNfKJ3piqbH4Xo3ip8eTXUDZ2mXtDYraE4XW8h6fQB5Qa3jhR858iCju9xG38",
  "key28": "j9LT8BSbduVLPjd839Ff8dpNkGwFNfUaf9ZxsS1ous15hGCnn3YEc8AcdPDvEbEDssjU6cVhwoguzWWXxUumkCR",
  "key29": "3JTR4XVQGGam893gwfFCoPmozMhq5TLtjeW5hfaJkrhXmk8HpYLUKZj7G8StRnzaRY35PEuRySLkgzq8vBmFau1u",
  "key30": "61t87a6hLbuwmoLoD8AeHzFmrbARj81eouLqfyXBCNMvKagnM4CeaGvZpEAnavBXMGFgf7kE8375Byy7jYUvw2zJ",
  "key31": "4nmS743XPhho7qqHa9fiwoMWFHSFFiojYX3BWLqN6AS24hTYM4CaXPE3yrWbqkV9r5fSLzLJGXZ8pwNTCPQD5Saz",
  "key32": "5cmRBxkfskAHB59AXwLYaRNdUVpnBXes549pfzyxT1ucLe61F1QKxa1j7aUhYZTY37PwLzrvaioj8RH8GowhyuQv",
  "key33": "iD7u657RCCPCM6nSZSjE1oXY2YnTBAdxtkxmjgvzFFvJGWxSdcrzs5VoV99R19pBnWK4VoAZsbsvqcFk2QPaNk5",
  "key34": "dQHL3TYVMRgbELZV5tQ2xrrG5DGXyN8mimV67ypt47cAysWQDc69hj7k4Y2yRKrKqmEQy1nmtYbBmQymvcz1VGu",
  "key35": "4dS39wGXPJKgcBrZ7yRQwukdZFvfB592qFtRRw9RE68jRUg4GvZPLF8mCiQsDpCqsT9WgPFjx2dfPLPvfUaqDQJd",
  "key36": "66xkAyqC7iNLRsAYAXewNxgzpDxjg3VVY4zGAKBduV541o7H6by2MhyyGsAUdX6WC5yNF4MNoYwTWjAHQnrVoiSd"
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
