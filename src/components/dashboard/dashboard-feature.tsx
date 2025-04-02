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
    "47YfZB4Xzn631qZse8uVNqC2juHGFtyy2WpMgNAwPUBD2mCRQwcqgKW9Qnfh6eT8Rq9ePQjzDngVkkoB6FS8sTwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dcxWrvihFEmaw5yow5mpH4LkS24wtGvhni4ZWEvZeXU6BVhVgU1PsHeJPWMp2zHzBKCnDy3GCK6G3YEoRDSPdwF",
  "key1": "3eafEwjFrwsoYgP3mhxryVxDbNzaTvJBFj6GWSkJs9XuAEgvVsi75XwBLhkNcbzb9biusowVjG94K4NNnRev1xUm",
  "key2": "32sUwR2Nd1BfdwSqKizrfFexKZMJ34JZtEd3xV8bdm6TDduKMedEp5W9KtyYS1s7ptLW7xsBQFqqN5cXxzWfabsb",
  "key3": "EA74eA9VpjHLEM3zZVV3bKTrys3AWvmocFB917KsqGECPDadEyttuSKirWGrAjq4jrhMcoTT3yGCbYFCcwUxy9W",
  "key4": "Co2E5C2RpJDU48k3ZWtB4caJFwbx3nTN88qXjkP8w8dQtCGLBExMnQPEq5U24WyWxQwCLTJ2hwXqsKMCznFE8h8",
  "key5": "37gaeg51dTWEjnbyrypdVBRNCHhmQG4uCikmfzu3jQ2xASJWCfTTdJXB7SdGNbznGjhZTTXYghRtEpYC3b6iGd8",
  "key6": "3UFa94SHsMTAxETP6DaqPGGzXAUcL2LgAGW8s5zi5Vy8hsxhqAB5nuCfVQpMeJAHr3EVZQyJebpvhwYozK2RG879",
  "key7": "2FPptxbE1bxtN2hDD7A4N9tSbD1eeo8yts9HDSizMzR6mEmvXA6vACZGMMAmAoFeCJy5Nvu4P1Jvq57mdJNDaNMN",
  "key8": "xAkhiHuCXQHx3Ahj1wxajsf3gLBrHxPVAZvs7U7sjcsU7kSfEoUK7Rh41Ag1F6GnZYpbRG3yvWqxWr7JzyFU5qd",
  "key9": "32pXJ3xUHM7UyHciabys66Q3AbgqK56rXX55YiBL7RRpztahUBqGayKPJsHp6DGsGs5c7EYTKsJCfVLJQxbCKkBh",
  "key10": "5QciPwvDLzK1VjbK5QQKvgLrRZZaSZVn9dK8TgLmmU6VcTvobTsuvkDgVNDevdc9SGYfmfA1h2cvrWaqTtELg3XX",
  "key11": "2aPx4yEtxAfGrXc3NNRkoXrUBkxjJUyB7MtydyXQxXhSx6BbaeGwpqGbw1zsKPGBTjbzvxeLuBUhogKjsLhpE1RS",
  "key12": "4CudJXV92kHbwgp3NbuU5FKrGWAaCYbmdXeFiBJu89pv8rm8cNFUSyjVqTHUq5wfEusQfJEUR5nzRc5P9AiGuo1",
  "key13": "54NAh1Xjedf3ePNKjrDmkD5sPPiUbpvPJgoBvCVJKfuJehgBgbbWBjmB9HsRD3xztvf78f6u6JfikwW1Ye5zmzeH",
  "key14": "4rRL4gsz9o5wHLDvna5zxLkS1PtLJ6auPhm4ysxeQ6WQxuw9d2grG59yxmUJ3G2Qb5RjXKMY3ezbZ45MfQuAUvA7",
  "key15": "3WRMQ4ruyiusm6y8ozwQMh1bvWmXxigKuXWWRQsxVDVkcdB5WrKyJEQrr7E1p3fBuhB2BTEg9jJjx1wa8ij1SSNQ",
  "key16": "4cxNZbM9TzaQv4PDhrseHQadUukarvn7ruv3sbub9tFATvfUQW9r42B1WGWFDAcijUSWrE6MqjZdS3eV1YYXLfDS",
  "key17": "3VKPe4nFyHqNR5Fm4NjnBnFjDoaKZsvLDBGBLZsyrjmqgK5njDFjVSmCDb9Rk5ewYDTRMQBHrqqvowVzuK2vdfDK",
  "key18": "45z1TLTPn5rxAekXGnCAsLgwZXw3FxcTxaonjRufbgHLt8xN3GAdU3Um2mX2SCD846tyJS9UhLFy3DeBKMTHW6rh",
  "key19": "2tmAXQYVxZ4TywBPg98S3qdfJZUK9NGtW1ZMAAztwfxSBE5hB2Eb16hR4hg9YeK4nUmKJijmZ3MSTAo3CE8Z4m3i",
  "key20": "4uHTY1L2CpFwzWrGbA8SwPF7uAfpb8oJYVjzD1p7QkSmoNgmFrWngDoGa3zqwvppyH3uxRAxBq9DQMahDGVxr5pC",
  "key21": "FgyYmgqFVggQogqwthgkYMphk1HQhbMhYgZ18g4Xtkk6L9FgyoVyo9UYwPtT9fj6gY9dhiyHC7NHUAANu8ZpVpg",
  "key22": "5Go5ZBhTCbcxmcTgSc4AL5S4kb9feYfQeTKqsk2YGd4qi4KCN5KgsSwbRnDGxBHNyeMWkFrKgWMpx961qYQ6uc4U",
  "key23": "3QxSthNS86LDNHYCW7yq5WDoTAYh1Tc8C8sYCu5hpvBD7QyREXcJB8JaKX5VALvqu1LLEjCDD8ANn4atM5tNVSVC",
  "key24": "4CGtWwqssYXKe3U1Tab6QboLgVAxa9GagQmrUGVWANJ6cTAMb41c8BrZc4SfnP3MHfGnu56cdcPBHZQPLdc2zd71",
  "key25": "4ePYz62uS8SpGRiVrVCe5L4bjuoQ9qrjQBQ7dCDRSVyD4jFmzVvUNJMKJzp1u9FMt4J2KGT8RASL36iez4WxHbfo",
  "key26": "2sipHbvkHQoV4Du1oR68u5c1fNnr2XVjoJZdkWFEFgPrHhrQkm4YYRrvpDyi326jCKeRCiW5DjR74HnqdnJs6nT9",
  "key27": "2XaptRPdMCsNvJNfGtkm34Ni8L1jJZWX1Gj4j95iUUqWYBJ7GFSa2ScYUXPCmKGtCHX98wJdsqsvwMvm6JwVGsbo",
  "key28": "2zxgpqHpAFwn4bTPXdXeugnwNfV1mggXhojFB7Jyr9R73pDk5Z3ogq6XFcvJkDaue7TG5f52ZMNGaTtnJKnCjZ3K",
  "key29": "DU86KRAeRMDNQvhLXZ7bQ2FZsBZ6NMNK63swHnneCwMjeewWwnEVYGZ1J7mpZShgUohCXpkXdeZSn6fqyEV8H5d",
  "key30": "43FFRXwGAKNFxHGsXC7gcPcc3qiVCwxdiinB6sQa1oLnLEe9AbUi2LQRXmJcsGQB1whWzVF343JW3uxqeaMQThcb",
  "key31": "2zhr7qUQycLXymvEqNdmJDyAuw33eR4nNrKsrEdnq81XMkDvdEdvXPLAv46VFvMkiBbDrixowBFDqEwWrSQU5kTr",
  "key32": "5DkSjbjqERSht5EYog5EUPZd52UwrszB7JxseRnG2ydSF9j1rXY2sKqZHz486nPdUYdPf4qWCXsbeLbGRoNpe9s2",
  "key33": "9D9EEyZmbbRFF4CbzkSsR9nTwdqVKGAgTLax3MyfFt4mgRbsP1YfvBkpoDptbCEd9Ju5UN64tesnjbmrsMkgQf8",
  "key34": "nzgRNhkebpq1MtdNFw7ZkToMPvJiWvaWuDA9T3Yj9vKJQvK92Xy8LPj6EMU4YRNini9ygEq6rFzCGxpnq3yVgxu",
  "key35": "3yiwjJorKXUqnSQkyPdkh2jkwRkLkynL9kXRcuXboxxZSYSrWFQgKBzh2UDuRNYjkVXr7MpoAYdCaL5mDeF2Moot",
  "key36": "7tm7sF53bRKH6W7cvmdrNuPo2VpgwUyUBPB4JhnHbRccBhkY3Vo7roNDb56nXVfB4MxTVjABMFapBFpY1ysjiTg",
  "key37": "2JuyPWmuH5cXgnvVsE22oqYJKeX57MqVtujMaftdQyMqjPWfrBwDUrAM9hXxA2ZyCRRGCfGnJh1dnN8yhT9dJqsX",
  "key38": "RFXaUQB5YcsEQv2sennhHHK8LqL3kbs6bduCuh1dGj76XMMUWcXdpJEwXqMhuw6UdjmfdpSW2QyDrpvSBb698x3",
  "key39": "63ELf9XVwsG5R2HYbnuzvu8GL1z99MZStv9qoAWsKf7P4EvPVLTmVPexJrLezyTKKBKA2CjRqkVNofMznLicBCfT",
  "key40": "34torep2SzdS4JcSzhhSuyczir9ZtgGKy6Nz21UUKtV6kVSBX76YWWbcNHxPNbDSAkA7UxLxFcH6YDM8jnzWDUL4",
  "key41": "3ytcWffi1bKNnt259ZQLCwpegwFtXmgvWc3TKip5nmcMybYDj7aC9QvkgqWWb7xBth3vwcKY3TM1esgvidoYR3b1",
  "key42": "3M2KQZZympUTMbTtgFbYcXsDNkzA4MDtJ4BsoRy8DcnQQ8kXjgHj8aUcBLzd2bWPbbWvt5wBeijQLB4RQzWcfD57",
  "key43": "4ey2DHRPuUGECFTuC9CvzMcSByJGdQLFKiUA5CaRhYupLAdAXPAHfMhZMYn2JS8kEFkk3E6kWUFxGSsuLkFaRYdW",
  "key44": "4pMxL88zeMh9nV2ZLQXRGuquQDA8ULyWCCuKQtxhH1j11zBNRAEVUY923MNU2p1iJiEJJk5PACJvh2Qo7DW3xZG3",
  "key45": "4zbwtZw76bZExz4ZatHuHwXDmg1r7xWA66st4wWp2ELNEVfuUhu4paPoMQFSGCuW4FZmsR3yJvX6opvhjG1k3ug5",
  "key46": "5FLVRFXPKT4Vx8ehNqwrY336ptCzdfP8MHnhH6dUwefAAUg4xDcN9m6DVKdXkJwkhoijRER3NUJYrTQb1Wj9cvAa"
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
