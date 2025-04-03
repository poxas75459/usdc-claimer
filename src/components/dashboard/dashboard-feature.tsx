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
    "36NdYWUXdUnrtvZB4V5BatEEmNoMimoiHGKzvg2hyDtg47aQmiqhCZ95iwULWVGxxWFuu9hNCM24agu8gJm4MxR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7b5PaWVcqEey65YNMze9FV2ig328s9U9kdJqMhQpZidyk1Jb5KUCzZPqghz1PR6fC1kX5fBcrTLmYcTnT6aj16r",
  "key1": "3rMetiyuGimBcUgxbbw3sno6kvLjrwGjWuCroShzkuAM6Arwi69aLT4QEt1iafjTWSW5UbMCcq6TnLJu5JrSPTBe",
  "key2": "5cz9PX4k12tWGKbioEWvxDeoyNFaw5TCUfiPWmLYmfDauQNqeQv9kqLAmesXAsUtYYgapG7UJxThLsTAr8X9SQVc",
  "key3": "3e7ga3baYQJDKrHtueg7BPFbdJBdfCJJky7aq1ASheU4VMv8s8zTpd1RPsWC9ugNJTkbMCKK7YARvrChzr5goa4c",
  "key4": "39b4ZDRELhPJdXTWNKN62HN78NGQRCNne3NsPmUy39MUB5T4FozCfMHpbNB17vQ5hsZhj8HvtxvFXFaMgmNf3zzM",
  "key5": "DMKREhssnunUJae8TdXByWeP9QDQsoijBAVkxQqaGNsndVWpvQrYP9hhoxRQMDGJXrKrVkjUBSQM2zJbiY2MKTQ",
  "key6": "3zaoHZn9LR4FptQ8uED8Kg66L4MeNomj2f4oo3BoZNUANt3BCeFf62pMEc6KzArNxTtuLttrF8Y5hKjHZ6zxnYen",
  "key7": "3bgVCF6WpDN2CrMta5kP8weaToji7fGvCXsqmrzoWDv4oTrspBBQNhAMEBRgkZDWNztczNydN9Xf3qwncsNLaARA",
  "key8": "5MW5tgxDmPAEzQxU1BXhTiTy7qyDRT9TM196Uvm1kSiDoFP5cZL2aPpKYq4drtCyu9TSLzcniS1vz2dFEdVRCNhL",
  "key9": "WVpwbZHNF2EpP4Cgnnn91DJr48ZsY9L49QDgDmpQ11ewfPxF5QqVBUNupooq2hrnHLyo1GDXH4kZfWHTt5cKihN",
  "key10": "4D3HiQCiweX3pFDqLEB78FdvgBJKrv6xxXqxQwteBfMw91Cb9zuR6xWTcA9F7fWFFciLYeM8ZHR3o4ZN7RxoV1QZ",
  "key11": "52sTD8HCRa3JjinuZjqVqLWPdncwnWmRJ1mshRLGDmSrpFDoqfmVVD4nYX7kK8KuzF9Cgnfj7A9vKYtnBJkT1g4T",
  "key12": "8yVTpg8DdAzSzkLjagNswjSqtMiAVMs5KeDdmBFgbgBH19jUu1q6bR8rdMfg3fq3EXpHZ7b7Th7pNKzNLCyLPY4",
  "key13": "iaqVoCcHsLDYhucC2BcC13ctfVjCFCm3GBkcQjyB1NmP3CXBtWqF5jo7QhXJ2pmkRvkQuBCDdetjfyEwDHxHm9Q",
  "key14": "tS53fNWxdgukdDzS9ivRUEH8LEES3f12A4pg3gkaYHkoWzqb73eYA348FopqwNNvTtyLvW9xkfJDWFtUJamb1Hf",
  "key15": "4pqM4eT8s54pi5go4mpjWtSzdm8PLEd5QLutjoeJ7kgPWbgFZR6RQ31EtWnF7WDXVvEyPQeaA9aaonyWdY5fxreq",
  "key16": "2JLwpR4QLqZEiPBZMTenN2S3EUHjndx7C1qTUv3q9d1QDfbzC9YRxSniEeYdkzYLhnTuDBF3aEKaBkrUvqav8bFM",
  "key17": "3k6VC1mSHrx7SNAKBnHAxkPYpBx3mY8LjftHXAodFxp5PVNBEkbBdP2BJ3aeFshGaZm2fw9LB5RyrRDsYqUAMahW",
  "key18": "51eKpQJJ9sSC1MaPo3zWRbJZE1GmzLCWRGbWVNKmq7raCmRr9EEZjXY9RyUZXeRnhbHw15HwAijGtonGhNusRAb",
  "key19": "5J8uSYY5hGMfmcsr5A7aj8G1bcTtmaBjeidjWCAXdiBNV3ULNizHim8Pj9ZE3VrA5nyNdmzc8EEFiycgWxtLDMPq",
  "key20": "vprviqfP3KVzq2JpQfqkH9KyfdYh7h7ABJZ4KFUTSZ8tfzzKzs6ZeGY98AtAEuCHZdifoAGsmMQvwUoVqwFFVDV",
  "key21": "4UeodAhe39bPe6NPDu1eWTp3DZQ5AwAUYrt7uQW2iTcgjsF4zEbFPTwbf3ZUQgXN9RcvbMJjSXTG6HEF1gned75E",
  "key22": "HYqhBs4BHawaa6PAwFi2NoHxWJJ7sjH4LLDev7E5LCQYfjcvqfVixrxTCSCYtFgmTEV7hXmJPQvL74HAYjCvJ3R",
  "key23": "44Qcfi1U9DNbzXi61xTuHKEnATMvpxbEFiC9SSgZ4dx1RwvSQt24XYJu69ZbWijwuMB1rVY3xJoKHkvysB3WD8hH",
  "key24": "2mMPw95dfaQk3PCikxmfCzPApidj25f7u4KNPJUa2GabwrCZxpvgx55C2GBeuf1mMvTwi3M4kq1rZebo4FzdVgU5",
  "key25": "55rktJcShFc5DJLsUpRqEQvLFsMmqNAJpTrM2QJRTUzwzYbZ4XHTHN2ZAL58ejQfFvhCbAYPyKw3437eaS28ZEUC",
  "key26": "FBG6ESozSN2yPDQtvj2xV7xwdXrDuML83nYeRcaLXt5jdYhCX9bNghu1cWfHWBCn3D6sH5hiBkq3pc53GodsLFE",
  "key27": "3Rxt5Fka98GtaxxMJrg8XAwUrJFMZJeGgcp8hPU1Do8urtNJnPy3CANnF5Byyq6uVMXBuRauUf1q8oeSXVCdkemt",
  "key28": "24yunTAvHqwQHXGYH9bzezau7AX1XLfJtGmErrWAuLGjqUvYWpJFkBosXvHcVBzF2V4zu5eAqhzZbjv4fGAU2Kr9",
  "key29": "4aYuiJ3AKGnUfeeXDyW2qoVHbMkN5k5zHCLrJbD5Qyn24dKus6Yf1B4ovubVVTgPx3Xus86Mi9c8XVtC6TTyRMRo",
  "key30": "3tkG4WgKJ6VfsCyaN3X2wAoyg7uk2Jde9R6DLXX9WfTLUbUSP7PFDX4ZemDuCGhyJdkSz7ddkryVAsYPkCsg21DQ",
  "key31": "5iyJtSbpnEfkH9insMxdKDoeF8aVnKEJuw3PLsz5P5KZraxykg1ipjfKZWtELSbF3Tv5xKWXQR29YKG2MCzDNf7J",
  "key32": "5qCHr3ZTB8cjRN5R7wqNeUNn891H1pYJjP6cLNZo2hfdkV41PoQZiT6kLZr4cCDQxAGEwBUBr6Fs1EGM6Dp9Q9bU",
  "key33": "3R2TcWDMsPiXTLs1QJC9jdYNGQoxydefRiWWSSPA6euuiZFDc1exY5U2VrYWm2ETdrhMT3FMQeDxukhWDfihZwAn",
  "key34": "5oRcS5xbGGdeQqhZtzLdeqMpwuxeWvBwVCBMzTs3meNzT7x2vjCthVu36WZsXnuu8EnmAZfDXpDsbuo2LGcXu7FD",
  "key35": "2anuKsL5izqGf21fJ3GzXEC1UazG9to1gcLpCzEo2ofVet2JGac3zXdP5ntKrN14V7AbToZTWrxfCB1tVpoudbUJ",
  "key36": "5XRfoi3Cs5F2w3MiZMSYxehd8uafNdY1vUKd2Av2CYqws3AXQZknxS8oRQ7f3ejWQ3iWKJELPf1gdydLVTCV8LDf",
  "key37": "qhJgeJsdpouEMYWjUYKuswVQUt4S7fPBmBP7GAwZgr3tdikC1myo2Rj2k43UEUFd5fL45Qc7pnR2RSNrn6tmj1J",
  "key38": "4bx61hckr7qQXeJHqMsKS7BGzr4eGJ6MKTa4fNEMBksAtypQrD4fnQUBLUZiDjiLGECRGUu5HogDRdLC7LYBcyzm",
  "key39": "5BwZ6bo1SWhuEojJWDD8GCBzeBLqygjxTUb12NxqcT5bwxZbzYBZZoZxinaAbjZVEYYs5sXtn3QwoRUjwnCfxX5M",
  "key40": "pFS6wBsqwJNQirRbvFGZ6XpSP9bb4ZPvZ2ZPAg75EVn6RGQ12M7CCYeMVT2Lt7sM6hpbc9EveUrG67abxKf575t",
  "key41": "63JNPpGRCh54HQyGtYgeCcnJY8narhm1RFEo2PRKQkY12oJbJwvxQnKGd7opcFT9EqpoM3j5o1x2NuSuuaC9NNZE",
  "key42": "2mKLQoi4eH1h8eu4UcwzRWrLmH6vYpZr7GWqWT2HX2CkEd4B8pcYRK39CHJHFTCjSG2jB8JyzSVSCt2gDJAQVKya",
  "key43": "48pgjanDiTD9KLER9SX7W3pX92UpxFRXWgD1xg9kPCgGtkt4VPXfowRpizm32R2qUqExBPVRQ1KHUUv8jeEAbi7T",
  "key44": "4jUgeg25NPrAmfv9Wg6zsFwbMf3KNh9VQjms5Bqac2cU6SnQtyB699iuyu1VprvXNtfWoEEu2ogp7pd7yQSvpidt",
  "key45": "i69bPxduzUNNjnZ4m3GGPmGzd5mmXzxrzRXETVxWSkkbvgpmFZtVi5sVgvSqCPDzgRpdSfBDvs2mC8Qzjsn3dxj",
  "key46": "2EMCycgtrrmeS7t5P6dNEFy9vnUeumnNhzo8FT2hAZgvVFUt1fKZdC5xRWAwtPi6jE9Mu4DVLTgGWMacETnNnmb"
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
