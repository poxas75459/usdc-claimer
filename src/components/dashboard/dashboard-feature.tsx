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
    "2m8mHerrdruPmnhBd5M5782W1gnPDLN8cYcjiZADFedKm7nh1LaGVrkDrkGfN6qpJhsRcnCRaungoD5sVgaZyGwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nQW71fTj8RUrgJaTvwEzLzFmYAPBrfXrFK9vEwYSHueB12MMCLbLeFNZMDxoQbARuEA8mUf5yX1zmmn6tFViAWq",
  "key1": "4B7TBuxk4RyBa7pysQ4ZisAKGsAfPprstiFmxetpvLoUvod8kVH6HGXBpTLrYi5Eig18MJjLJy51eRmegCMDB9KH",
  "key2": "5ENuAmiiRXeKEPsKgBqa5jzvfSfUbJMUPbxJDrcDEU7nxLrgCRTXDVTYaxr11kNRWQKJ1LtqqSGcyYhJsFJcQCcD",
  "key3": "YL1z3oqLfonaAxrqFjeFjWFBP2pmmWzxf2Y9F9uEtXAHvsJTuGJVac5emY2g4Qb6q55z7Uahtx7XRSRjvFerJq5",
  "key4": "2VLRue8UjvY21SToGw5vwmuT4N3RgPSxzCWKZri7qQuTjouS4uhVVA4oC5jYATyMqqTSPtwYajyyd4dvGPWTspLA",
  "key5": "4WfGBR2UpzmN4JukdDTz8fixw3MPEjdQsGYf6WxuXRxp8LkdQtaDDN4GgE1PE9FYBbrwzGoUrs1UEnAZPc8t2dTG",
  "key6": "5LztDYpzYU2fSqfjp8J6fx3LPykknxVNcZC7DoTS6ncrcVHbsyuvxnqJF2JNY4Ejvg9vQVc1tT5aQyQ9T5UqbSRk",
  "key7": "3qUcFBCCcvkNWpUBain82SYq4tzStw3EQVfwjpjbHk8M2WQ44R3rC9k3ct928RLNero9fs3sb53eSsQtkfo4Qxc",
  "key8": "2r8C7kJM9Hrrqh2z464W5TBqxsfAK31rSs9s8S3a6maG4t4EZLGREGvSjFVF1HywcJ892W6eW9D2C1pWSSJ3HFz7",
  "key9": "25Cags7ftLPBVz2qGsTbQrG2dSzvT4rNAdeaYn61uyn7ciR6CuDod9vKwMmxHsGDsoFvUyTen1YYvaf5P8x5BkdA",
  "key10": "5E7U6bWmaHuTTZwaUaz7udVwUWumy4iWH2J9ipd21z6JhNsQe5xWr23nBhjr6T1eJL6Co5wWdUofapb3n9iH7RWq",
  "key11": "619xKfmCXWnmkWjvNPjqrBNWbGijGobBZnCjnKHKX9Y5KxtFDnRucEdbYtQpg2bGWBtdNcweTCLbnNGzkmjav1tN",
  "key12": "34TWCgYuYGoKQCbNwq6GDcgLGvkLjbFyRu78krcY5otEwAyDRFsgjijpDG6fHEsCwjvFCRgbsuhMG84f69LZ7bVS",
  "key13": "2rqBraUTc2yTASqKPB55SkLNbZDvLcJ6eigY1V34cSFuVfbWSNkGpBVhjuPQ49GyYr9D3o6QEL94yH55yuat7tDe",
  "key14": "5j6jeCrkvFpJnoDFmoL13NwaSPofbv3esPQY8pCuyc6qb8Es1ho1zkBqcxDEvHQnbJfLDAYLmkvHmr17Q3wWpwq4",
  "key15": "4FJoCi7cE68bbbyt5eTTUTCp2eDAzDuJELcFM1AbPUKpmdxcxZVBis6Hijp7JHsddkJqgpe2uvPA2KRg5UufoGe7",
  "key16": "4GCpFbZK8nnNpJPPtcb3ijKcjQDbxmgmAjQiXL5PKnXxp4vx9hdgdBHvZ5iQwBGugCq3ST3Zvo9MuVWizb7Z7PNE",
  "key17": "3fCnLHEa3TdLNgqtUiKWNJyh34tXzNfJ7iMEEZpPSaptwwnzrfgzQeFcuNPSqSq8T8MsCksmPpPGMLTmG4X2676P",
  "key18": "5DF1xnGR6UBhdQnGNTuQ4UsXUrYCyFqZ98EaMexBMaNtcidWDSV68izm5NK2wWqR2bGHoz2uy7fF9pwq9w5HSQqT",
  "key19": "CsPrx824L3C1ARG5Rd9rtuZXzgTu6SBZ7zgDDTmp5QGEk7KoKmteu6FVkb1eM8ks1HG6M5MdVJV4BQDEagr16fq",
  "key20": "3Go8gFNHdg9bFcTWJRsgTFV4N23aY8u2fWuN7hYuh3etjRiZY8EqovV8jHBxKLX2FBZvLKJjFQAEqC7bWBPU2KEA",
  "key21": "39SyGHy7kW7EdXD3u3n53di4K68cirNZkk4meFbxafJQoi4yxfYGbdPdQGRuLxbb4riHxKfgv4KiyJKUQWbetxzq",
  "key22": "5b3HZLYkdxkLANBwyj4ft6aC11o2Lwfw7sDCgwrThV93X7FkSeqkCabRM7V33ZaCngVWWx5LjUshiaLvXEBivEyB",
  "key23": "HAMHAyujWAryA8769hpZ6F5D5gW21KxaJcpnHAR9BSXh9FrB1pejVykVeds5sPPPPdJMk6ZG78ygrtGQRa1m7iX",
  "key24": "2zZyoAmMF95cSDyjxyrBx7DDCACzmRAQknPVqSGpxqAsZ4i4WqWi1B7ckjr19Cg9PpVsL6G86xrWHuNNTxSfQ6mX",
  "key25": "3GLjt1CQrJ7xsWUPcmsazSsDKbWzm4i5dd3avWP21vNjM6J7z3Fpy3nPg5Ya3XMY6M173Tswe8ifjZaBBUDAD2EB",
  "key26": "3uSTEDpWhLxPxa6xZeL8W2eVpojuuuyakuziaTJ7Wi5F1Zg1fkHKhM8FV6kRnLmExetwLo1XDSVXDgsKE4c6DBsK",
  "key27": "4P2kfc11HeDZRisuJuKLkTfebFHJBx7rWokqkhme1aSP4jF1gBnR8ZQ3mtGdvYqM9eSEHQfuF1YpMN7YCZ1Td7hh",
  "key28": "p9ZcyK5kg32dKUdMR2ZE6iEruu416tzDBg3McsS3ok1nWwCgkt1kD7bgX2P5Aua7XtWHXFSjiCBVdsgdQCeTs2d",
  "key29": "hq31FW6hiRDzgPQgwWYxAKJKwuYM93YvDbY6hwtYBByMD8JWJHdPs3QuzLHbvTBFd1fwMoHE97Lp6YsivKvh4EY",
  "key30": "4tzp9tvoYkZMMQg4cfNJ1RqR5d5p8cF4CHZ2i78CaCSDZA9SxdtecSKwwnrBi2w92nWPPsXBo9rbL8bHmU34exe5",
  "key31": "4Av9fZpQC5gvq1J6E8CR27YADcuuEVKceR9TrH2jASrDtpFuNsT8okWX28crxrUQWmRQZgcSwkZoLpYix2Phv4TU",
  "key32": "4Hek99KV5Hh18AEmGLxzbfDHLt3jwtZdadBUUcB2gnGx3eCtftuwhdsLTmsyKh4tFzqtr33yirR6M4aN9ctAw2DE",
  "key33": "49S66aGnBQ4BkYRYEYL8121Ta3VAzfCHC8wqMFSqEuTAKF9Kw9viJ3GWqRpYN6fXezB4hdoqG1CHHPB42iwueoHq",
  "key34": "4n3CZyRtWDoJi5ivPEHUxeSUoUi2rnzP7tqDnMiykX6QdJJjoC54tgw74LkKYyT9Z8PqySohG4hp8tHVSxFkq4rT",
  "key35": "5ki9mFqNqRXQF7qbpU72muX8oGfMsk9KfBP4w35eF1tLeob6bgo1RDtmv17Q5dQX9gDjrK5wwy8feGYQsZ9VFddV",
  "key36": "5U9Z6zHwgCMnwd5LVjvUiQpcA9S2MEEHYmcceRSgWAwpSZ9oTeWsbWtiHWRfnzDJYQp8pvHnmfHbdCPUvsVfc1BP",
  "key37": "589U1PXfBxmARE5p6QZYbNo8anE2jUuzxtLEoz1SJaCAQG4Xqey1WgaWx2UrptMmYPB7MzdCXFndgLoWgsGm24qQ",
  "key38": "xNiYFkbrwNPSxm4w7UygWXSnAy8JyPTX5MvCCD4nrvrBwJQWPYSCnnGdFnk9kSBe3sou6YJJbfAgeQ3ZSZWKc4i",
  "key39": "PQbnRHLya5FfAx3xV4Pk2Z5wk1P4hvTVsz1TVKwwQ2ZMzT9QFjD2KydaPLjrcB5cWz9nMMZMDmj7J8pSELhRagk"
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
