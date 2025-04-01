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
    "UBBedGiqduBva5S7Rwk6atsuNLTciuCdPT3egpg1u1dZfSiPsbqY2cu4CoHurMiQLLdtPnNu5X3TFhthJZn7vPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GxXcTQ7qogVvhjbiMbZrp4m2zPtyfuuKcshM62g1oRfUvdhN2CrhxD5wLzs7ekN1YqS4PNeMDzW5kmPjqkMCjkV",
  "key1": "5MR8rcX4jVK8mCjbv85gAZGQFi8VptzYBaBNU93hSq4JKGDMyJVhXgpesDgsHmr8kJs3NKyXaJtPA1pxtmnSBtf2",
  "key2": "5M2Z2Mvf2Fr32VMQG7mqntAKUZ4b9ExzBTHntVKqzjY11tfNQs2re82cgfddGEqJnrwER19aARSiHZaei6LGQP5L",
  "key3": "5Qaemya6CQgagmsMemP2vRH8uJtv2FGiy3UAew6aqVXkTDSz9GK1LMpnRJ69TkPcHivFFMbLWuFyfNTHqQA6pHfW",
  "key4": "2rb743su2qxkU7Xga3mKmKnRWYsXMTUUeezUsoBvE2Tmre1kvsv5YoNyeiuap579w5ZSUeBjGFEL3ibiqw7tGAzd",
  "key5": "4VBP2UK9gdkLpi8yChvCFH6t3Fxd49mn86VYhpTUscXTiaRejjvqsRK4zzANHWLwsnZPrq63kPFK32Zo44odPUDQ",
  "key6": "3pjuAAo8XcQH96o99qBWCxC8ioJKrURy7Fgy4t58EivnxBb3JCCGCwKSec8cieazc1KxWh5zf5bpxnFzTNo5qriq",
  "key7": "44jZygiertbB4Kddxja1er8MJcDpBodgvWhbDxSmGYkJbCg9qR2XtEhZX3kN2fQY8pcGfYS1vfThGd6QbNLTKgYs",
  "key8": "2bgBoMCw1DrtQgr4oFBg9SZUXsKYGr8shJDHMhXN1Ki5pTWCzJRrdGTTSrQeNyxFE3iueCV1umyUeovWfeVvWuVV",
  "key9": "9rDiUjtBhHwgmMQU1u7iCpxmmDYT8Xuq6snaGihXGGSaHfNmDvpybsyyRUwXazHfjaAc1fgM7G38eDjX3UyvsYY",
  "key10": "cY7Y1PVoxcM33uPbX4SjPWuiieB2gVTQ2FzCpAokw4SGe4Bb9SppPyN3wmFVsbEYa3CTV8akPAPTjJV17JfsLHE",
  "key11": "56N76mW2Eju9iC5ai1rWpGv3xTszfpcyLxpo2jFXaCXvZ5ncXNHtZxVbCi7vqVcKQUjqnd3H6ZSjV16MrZFBdHtk",
  "key12": "2AWd93UnCGAsm6voTLcF8PVYDDGhYhDucj6LN4XpU5RxfJCrah6EM7sqHNYrDQe4xkTwt8bbSJHppsbEMghfcdNU",
  "key13": "5HgnebwHyQhvEQRTz8Nk5HqgEEwctPiZjsLSwM7SamkExd3Qi1mJmQeuSvKwwWMDegxvkTL1qEZaUGFSbZJnu9xL",
  "key14": "5ryXBTbpHSLnr9yj8Sw5etgDYqXGURQvJRHzSGr8ag487tWy8cfTL96MigF97moCAihqUe58KyCWVa2XzWiZ5yeK",
  "key15": "4fQQVVnDqqJ4rr8rTZjGyhxu8ZtGJ2xXpHGswCnqvHYKMM3EHTaMfbVe9Aj78UcNTa39Qw4zeCAAS6WhR5nVmRYH",
  "key16": "bQq2QNBpGauETAdyDFPWkha4HQUeJhX3JnVeEHUWfMxYEww7qX5rxTF912YYRUqrGtJdHZFcq4e8a88P2zmpzrF",
  "key17": "52Y6dxQ9g6KrSKomQBobJgi7oExgr1bYueWuv2ySuvyKXasV4HkMzMEsHy1RnPR645NjQXu2u9KDQs6YcbwBczCx",
  "key18": "5DfDojtRugUeppextcwNZbRveTtrA1G2c2XEnosiSBe3VD7Letjk1EXED4jpnK6mZsH6VRCUeNkXya54Q5iCgFLC",
  "key19": "3fuKdTQ952knpiuXLLfwXy6ehLq12waf5Zibhssarqd52R6NKkpwm2xb5f1i8GbVz4M29wu6Wi4MHsQto1oHrwZ4",
  "key20": "631eHEvZMFwDYLqDzZY2zp9UAf573sFNXrQjS7NGP1Nbgx39TMXSNAXuVyLMN9fw3ZzahK3VmzKfh2xJvpSriyQR",
  "key21": "eb7jhmat8nm3QqvtEgNPTVBgRFZA7wJ3GdexoETzrovtQaQRJVAeobiqCVUkowW9TfE8kWYUjMFaGzmngUTfd59",
  "key22": "4HALiubuQtH2xBrgUk7gCpbQihxuAnH6kYK5gPoHRPSD4r39Zis8mQD6WfDfd7kk5VTo5zqqh54ftSyJs6ExdcdA",
  "key23": "4x3ZsYf5TsCbfJJzcDQo6mSVeb9V2jpr6Wnwb7rwceCzqChcE6JqdwTmGHgnPb94HHHrdjJbHpqwDGs3Eg7mUw28",
  "key24": "3RtWbGqj9wRLB3y4NfVJCrZ2heqJmP7tNBAYqjr8uEUGxNGmxVptTvsiAZRBfWoGQZNH3rLkW8ZFMcA3HxA1oAS3",
  "key25": "4WtGDCx5YWPxsYe6niLoT4nzUt4MBM1d9GBxSj8NDygJuXUS2zUZ8EVAugDZSDVz2xDLNoC3PfvsKvM5eG6Axm2J",
  "key26": "3sXwNF1SwVkdNPNuLEu4XjrTPQZE3D9iWSpJVU1wVMU9TahVjxwGBWyCZnfHeZowEEuZ5vbc8iRruxLyZU3V46Gk",
  "key27": "226k3wHTXMBNShiDrmsZRNiZ1hNyViEPAMMSPryPx1ufZrRZGRSD3YbeSRdiqbm4sgNpfJvqCP8PCUU8aGkmwRVu",
  "key28": "5EWNkdEzWbhLHHL5NUqrh98baCywQLVbe4a26xk2jYq8fBiWob5YcDPN8XFzmc72QW8XBYRtvqmKCrvmd6Z4un48",
  "key29": "3oACNpNW6TZHH7X4FLx6mMa4RDQePLx4CvvYvvjhdQVH9XuqHc4JvtiMy1k6MDomC6pRK4EosXAfachARqstP51p",
  "key30": "5tzcB99Bh4a9cpdJiTCZUDqcirYSfBQzcwgCVVnwVcB4kBZdk9LREMJgX2yKYPqvKpiHSAEzQQZmYtiSrtgKQGws",
  "key31": "2y7UuvRRGPnYCpCFTsxDCKRCDUmxaN7a3MsufmGDRPexPpPUUx5Vnfc2Uitu54K5Lj5D5xN1Zi1GH8PeTaHc5nZ7",
  "key32": "4rzJatCRyn4X1wrD3Ve2XFBZtQH9RbnMWiGGQhqGePeUWynEwtoDUTVQAmSwBTFbZcy2F8Eyz9iQWjhgqaGkSFdv",
  "key33": "3ogPjHgqpDZg5raXFKfBgA51B2sySVaauaWuoTjxi2gGRi3g23L9k1THfNmMVRZ9V45UqNY1sC88zMLfppDsffoJ",
  "key34": "2AdyMz23fgj816nDCmhw1Rat7mixq2pikHwqLZuFQ8R1QhfLPgfxDgzkznUSq9SSmYPvPBFSfiiF8YMQ2jt8HuLp",
  "key35": "KpDNEYWFhMc5CPVN1Sc3RdH2ZbY9qJ6KmKg6bbKxKhcHdZHtAzyEdkNiVdYMabVYboATpgQc7nDVmzGE4rP7XhK",
  "key36": "4VnbEaP9xgU6dK9GeUJ1yaoj8DGLbFuTwA6EDn9U6BARz17hpqsxKSHcxJd7Gz3houzhmY7wRtChuEDqV1mqDQsj",
  "key37": "5Nq1cBAJVpLywwTiXZYf39xkoxTWwBM9ZEjGTY6ViuWnaFynt5MLr4MddLMv1AsJdVE1h851pGZEiPAGRKZXY6mX",
  "key38": "4k4VQ21bBkkdpvs9oFSshLpkeTz4SNSTcPxYXZUbyPL9mdydmUcHGrPyXXXrkzU8KH1HiPAYNz8d46vABKxhe9fu"
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
