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
    "2GKQd8Ngy9R5M2JEi9HjPFpsZo9jwGSP1SpUmWGzzkxwsSKC8QMxXcTSHvZ9ZfpchXGB3vGBpqmNRXG1wsv7Miut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2HMyg5G4f9Kar33xwfNZpA8cA8LkswBokxqxuxL6SD2T9Rt2mi6yUFSQ18h4cRQ6LiLoxPNavS2NVgPzk1T1uA",
  "key1": "553aSoo2NvJpmoe3PXWi8HvjxJwh2zPXYtBVxCLhtaQm4L9LAp1Yxw2pSvq6BQqcTL6j9TuwvGE8USbVACTAXWoK",
  "key2": "phckYb2AGHgtJBpGTbyT6swrX98FrAhpCNEcAVKUNjdyCatmagwjrDXguDXR84zMNHzg9dkdwXAZcrGZv56Tsss",
  "key3": "GGJGtGtnuKkkKhMVRxF11WAr9WgFKeuQG5oE16tyzdt6ZfApmUwwGeu7kSZEBpUPJaogvsVenPMD7RRtS5yYvWF",
  "key4": "2in9Par9zuYfmktyk7yJ8QaZ79fsyGh26rQSikLFBXXjvYLYekDSN5qvWiCAs16DZu98NZn4kRuQ24Fc5ymYkksy",
  "key5": "4HKhcf9sMxtTaFb7YTw67Vm8AZtpTGQz4sAC2MjkaFd4jVLSGv6LmUL7hYsaGjCBxKh4sbHEN6Y15TqPTiW3ftK9",
  "key6": "SeUhpmsJ5Qq64m7RCfrf3RhtNjQzN9kZ8ZF7q1g5JGhHPn29sm9s7VFVzfeGjHMHH1Ren9nUeKv1rfWAP2rUqJq",
  "key7": "4mHt6pC1yb8nJkvrNnaUjDxrwVHUiCpyDJr59LiSuJ88AvR45HDFAaY2LkQ3MU5yUgaPtBsQXZtweNuJuQuiinor",
  "key8": "SzDryBjnNhs8eqhpkr7SMrCyH2wnKzs5UFhBv8i3PW9ikzbYyytDN7TqcMqzo6dtQhtxsqShhHmBeo6tZk1sypk",
  "key9": "513aSfPYp8xFTFDVUUHCkvLAvabHX1jP6v17ykTQk8UpZqwkmhJd6qpU3gQuVbF2NqyLg4bFFKk7kDBebZAS18e3",
  "key10": "4v4ps28UERAqTTegRejDTxKL9MkvcTsWySSaM1nBDgHWdU9tnhWRncA3HostpxAcKL14wNYKPwJxt8TGc1qaAqpk",
  "key11": "5Vx1EVTdSWisMnSGuLax94PFA5M1Jq7v5kvDGDRDVJEo4tkao4TYdJfB4KcFbDTaCwZL7ZQXzRmV4KMyB8USMvUX",
  "key12": "4rdyt39FDygDeGr7jAgY4iSWopxzWtPy1Mni17mRXYUjPvKg5JZ1UJ1trKQ2jJRC4bdFDsw476pkhtMsEZQKH47R",
  "key13": "3ZKrL8WGQD5Kd6mnFqG8CZFpJkpVADBYhGwNQnfAcejefATrncqKvJ3Wf5ccAKBRkYTcZfny3UfWG5U9cxHy1LyY",
  "key14": "2tiC6pfZjnjejJqhSQoz2hETVtDC8PnZe8g5qbf5VF3nE5a62Htc7yzLbgxfU6ZEVChcCvhuXXohXuGRuBSHECtc",
  "key15": "gap21vy67EKZinoNjh1TPd7Rrfx83iB5r46wSyQzCf8944Xd8tx57KhbFna5pCKoDnfKPkAJVQazCHZ8GkXRuL1",
  "key16": "57o4BeuCB3aj69jjNGmKmpyrSNpY4aCRvX22ZmHjz4S12qup9MwYLNELdA2YqELuXaB3Vjg3LF2pMUvB5r1jxyjv",
  "key17": "3rXCv5q8XdLcWaddyYCssEpc2WCh8jJyXZJkQyTiR4Nv2jG41o9mcnAGcANtSZxFzHyGMHbAQ4HYhogbif2UxBiV",
  "key18": "3jfFX7sjP6BosbySzczcnr1xhvRDAEDe9ia2d453SrVWFeEHTqFcEc7tbGrpEqiyy4t1C3Vft5WCM4vdEhYmyUEx",
  "key19": "5iU1c6TrBM3dYdHakkWdHaA73NF2f1H15Uau9Bbkw8synKsGCH99uM3tkoVdoM3vfK7HKvQADFvp6sNGTJBzdk5f",
  "key20": "2LXJ6PnMXRseA4MHpwXXiwLJGNinGcMJaQxqC49WvsCo85fJhDsomq4SJdyrWHBPGRga16s3LPNfMoaYZjuYK2o7",
  "key21": "5YkuyTSqQW1bqvo8Ky2mZt5GBpY2WmMxe2ntfCtEQCdgF1P5R3yUZc2hJ8poq8RBhuNd4BWMjFQdnVUtuS3HSrze",
  "key22": "4iDmJyhFPJ7k57DZCFqNfNL5jBiBkh2oVmg6hD22edufUWdBJwyaKL7CgaieGMdvaz9EJDFhFMHSXYxQ7W1vtMS1",
  "key23": "4EL6RcYrQkXvuNBTxu4yjU76J7FhWgDwrzCE5N8anQMBuB1fr8KuRVaVWNaayEasjYhByNGhHXT639sC9oaq3QAt",
  "key24": "3Fn4bN37gKkNvRCNar6iYNVx91UAq5t1tkuodhk5b89qpEoc2Lovj8mowKU6kEnLMpKqxcxYxAMBL75c91j2UgTH",
  "key25": "54VpWK8buCUeYTTryaYdpEH8oxawNNLJ4PHudo3dxNv4xFvWLBs9oC1ijn1Dysszg53zrj8oJGPs5kNacyPkuFKs",
  "key26": "5qQszmTJ1EAczwkCjEp6q9B91QRScDjbkcLqDb59q7CWcE3oXj8MvnKRKY5e4pmAvU56fjTJqBj3UfEpfNH6yP6U",
  "key27": "5dhWR2WNbWErqwWyVidTDFQt6h6xmXGPaHz81sSynzVX65zJocVnajfhsWzsno8k3q7a4zYk5TPbcUmkS3gi3SMA",
  "key28": "3YAZkXNVFqvpkDVMgqsgMoXj4MtYtXYfuDsozRMMDhLaiirN4zTU2ESkvAyyUTeH78Q9f1di1yumHraYc64hEhyd",
  "key29": "5bCYX3HaHbUxwDNvBLsgk626p5sD5CYECZyhR3HLfDUrSSYKvrBf7xnkXCh8xPYKEmA1nkTinN2g9J6gAHZvQZHJ",
  "key30": "5Eo4nJQ9Jkt5LpnD3w831UEB6E1kjaLSuRRa7Z2U3tyDaf3i5yD1TH6sYFLpT6gpY7MGTiuKKxqWJMsvKy63v7kY",
  "key31": "3YUfSCq5woqDZQyhUhxUfPwEyA7MVE3dEkbgfzxwtjfeJnyRPLJyBEnCnwkgN5A2gHaTJDPoLVyLiFXmNu2XyGih",
  "key32": "2rDM2ajHwnLadwKQUHRxJHibzrHmDLKDa78qyAUSBKFopHkrFfApNSazHrs9TwpzKfnQGymDgJAe4Jf8MfuC3hx",
  "key33": "5W6m3aibWf73qfyPQijc66y6fAnhpXBfJxvqBk4z3MNqHEhFd4F9a1XT8FuFMcttfEAxdEMTrAkRupHzpmaE7WYW",
  "key34": "67ApFvqUL43ECnjNyNnhAmPm6QssGRNW5u4ao3p2auASzBdbpd7Qrmd2u3JxDunAgQ6L4fX2cPhmXKHBLgPuL336",
  "key35": "F76nfFUR3vUhtRNTke4gyehBWba7b56GczaDhiTtu7JJijJyFRvm3beAhRWq15feEFEuga6rFF9iBSvK78GsqZ8",
  "key36": "5qM1WDoPJ56Muerea2mkhH6VqfcnfQpzsxkpKq2kubjedDbMZKjvA5nEU2dzCtUJ69rUJPXLVu5nnfZ2qxs366Y2",
  "key37": "55NBDvifYkeg76uprzM9tjA9FFrXGcP3pJZLDzQ2gwjjsPKYTBpMqhsgZdShgEXMac8geTSBZd52QLuNF5EybZ4d",
  "key38": "5YMT7uMZqJzwjUZ3T163bkb9k5yL3pmC36UTw3jNqHkKPJszHuAVt5VbyC5ZFySPTdiK1zx1iZh6TJQJBHmXsLsg",
  "key39": "2BjxaHitaURU5TQGu6NmiLkra3mawrqNLbaDRu9rgWV3X8MESeNEoC2ky6E7f8VpgToXukgrTxxsKChgee59oJnk"
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
