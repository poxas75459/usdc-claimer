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
    "5ZbVEquEU18AX9644Go2HzUsVmMdcefKkhHuPmZ5YaCPAQ2MZBjFcJEAVgaN5aQcixoZaAMtES6pL8nXjHZtKAQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67YCx4UDMFgAcEq2MjkbJ7AYmjh2ReNapFeTJhSb6wo1vb6opGa2Hr28JCqqtux5pSpKL1zzMSQKfFN3ZWSqchFe",
  "key1": "4vcyS3UgZ9cfzoSMjhTEMh3Csv45iP8hnvQ1Wi9v4aWtpVsN4hN2Sbk63wczWi6RzTYqyRwxB7utSPiPqwWS4Qjf",
  "key2": "Cru2sJu1LkYjVQt9XUvfUSrPCqjiHE47GtnhWwfDpiYn3yovFLeFnAp2VKJiKVcn5bsf2bM97VWmadD5KyAgcdh",
  "key3": "swKTwzZkLmFjhUxiEWRp9fSGZoQQmrinwyMtqGyaRRZnTHKwe8wc8rJ1zcQRuQm9ZbfTpS6t5fLKAxezbnnVbqm",
  "key4": "2waouMonzzNLpc8EQRksrrPVfsiUHvqDYuEZvyFs5m9pasddTcqb8PZfFacD1zzfLFMonb2bDgvtu7Viwiz6CL15",
  "key5": "313Gbpb7fggfyjpBuwdinCNXpK2Qfef5dqCZqGAn7Xa56oDMxLFr19FBDJdQC4n5eaucn9vb38AsQmiQYvZvKJdB",
  "key6": "iNXhnurwnEW4Z3bQ56EqRJjm6PRoMVmrToqMDXPT3g9e3v6nyU2NHyc7hkALFFEtrhXgrUwxykbWN5Dk5QHWiz2",
  "key7": "4CCkthH7syM64CemcaTaCH6X7MbYjcyKLLEMfghWLNrYCyxB4QzAWf6mC1UeBCiRyPibz4TUm6SY98zcg6toiwuj",
  "key8": "3TyHBDuapERdrqZXJNmNrWFQ3N4yqc4Hw1koAQYb7YctVpJ9H7FsSwQjg4kqFxpJsGbp6WAL7VKSi9N7HdtoppGn",
  "key9": "3FLojaDp7n5PTFrhiSiMK85phQ3eHVB8q6i8W8b9jktaKCQ5we6wiy18xPNSx8f9ceQDBRCe1nvNNy4kKRsMDU9P",
  "key10": "RF8tGYXG8NyWbhSEvihrFhCCXzkkxhZb93sXMEvecVvKSV6B2FkSucQkHwTcnqBAXiUeynp1XRNTPE6e5kWcoHa",
  "key11": "5pWdTCVWy3kN21SdHbpXnLWNjvjscVYg1QQh9cWNU9n399y2YAxLD8JkEYbmeF8Gadr6RFfrBnFd1pZpAzM5Wxp8",
  "key12": "seiYrSPvxdWYPdDJLpFUWu2wEPz7u3QRmTAqLKzjpnC1N2ZDJ2eX8BmiMfJmY47iFjYZVAaafKiEFBcS5caYCFe",
  "key13": "2Da5zh9MAouqhBswKsWkRrrYfXshVQgq8HpCHiBWLyM4mTqAxc6pGEWfiwBeKPCDLRgebE28Ts7DWC4P9WftYkRg",
  "key14": "vQxFWXvr5YumSqRoebWoVCWNBto5zLQPvbWY4utXMgMd9rtFqZAU9N9ZwJLdCHJXCgRnb6L9MEXq3t2d3CJFkG2",
  "key15": "2LWUPd6Niyu8aRaKasjtPeACrZoBgM5SEA66UdhGzG62xDg22KA3zjoVXPWyfmkYHLvjREhJdEe6Dc4zrqM6LiKp",
  "key16": "4s17JJY79teELMA9Cmsva89XCqoUS89kdXdW4SQVMrwoU2r7E5JoxoWDENWwULSLABHrGbX7ejU8S51t7xNJodgV",
  "key17": "c8J55b3UhmAm3qjRrAoYgh9MHxgXZZg4SQCyaMR81A16CfSXpVtbcTaVnWpgG2yKDCL3CSiyNxHNSdQ8GqG3Hkf",
  "key18": "5Ljx6CFmboYe4NfCBqrv4rUHScB5Qwiwa9cDbuqn6Kr8jGApp6QQixWwbn14hMrCVATDwhVpDyMTK2AQ5agLjXWh",
  "key19": "5aHa4Z3GsYvx6fZSUPkaL9VYjoos2dpR2ZdZjRruiS4BmygrtrnoYusVFSDWpbzxjSqUXyc5xBCSXKebBRRiWqUg",
  "key20": "NLZZj6MA1M7FJRWGKaMm6tANseX68G5E33gbtETrWgB3qkZCiW7aVGqpoxeVSpNmuga5sHKBBeqtDAVbdPGMDWX",
  "key21": "3TNGG76ogzvEAveyjqj9V74YXWhSgnfk4CbN7gMaPit2U7tm8txkYt825qgdbckkZbs2dByqtBUyBpvJp3zCmJsu",
  "key22": "5VhnY3MZMMpqUpApUvkUpDdLCU6uc5i6JCNRKhWBA5jtxXPMeNoYSHegGfLooy9u8p16TYVcDKMVh16wN4Gef7vX",
  "key23": "4r7gevccjvCeDd7y3paL5kEZDWi3ivxP4jXjQU7Ab6qssCzpaqVsUgmYjU74SZVrUBWy3gtcTteaXFpEVi3j28Ut",
  "key24": "58k2Ep8pCRmd1G5nHeTD6A13BpBTXfY5L9ED9VXWyS9LiW7omUyeRFutPs3SFD298g5ZSCSgAaF7bhj69y7xeA3P",
  "key25": "4UNJ1BCTdZSCAhGYDBDsL6S2WsecDSgJ1yFtQPV5GGJwjecfsd3rdRsWZqmG7bnJrLSnKLKQLMsxVxnxckTgD2z1",
  "key26": "2GJ5XHCYLcEbTH7mioQqWqngp9h1hrr8xEZr3Lruap28wuifdzVfmA4fVxHnibcx6bbpPGgec1yU8VXeWuj4KKta",
  "key27": "451gAsTztS5eJj7cb6vcjJukFV5s1XxfFxLqM2hX1JjME2p6VA2RWMWAAcjbRwnmB9eD17EPgZJxCApB7tQ5LwjF",
  "key28": "5e2VwyaV3LSU9J39znQpnchbL5igyvsQVKon5cxPtGgUwU5PaYMkMX3E64o3zyt6VcFvLSTUoX4YUhpmr2weK2ng",
  "key29": "2DJv4PG5NgHYiKPKbVkfBHSxy9x5pd6mgmxQVbgXaSyo9K4bKLcqCWEM4RrgVPrSDnCCBb6jSU4gcAB8bHzVcLCm",
  "key30": "5nzCTd68w2S8DViPt2ebVipJSZsjxgFSG92JyXwYc11GhATwQBQxS7BiuNXQN5NABuDwyL2sgrRDcYKycqGk5JLD",
  "key31": "4hq9SYbW1HmAArAf3w1h183i4Hz4h3P4AjJDJkWD8WwgMwDudPFqZtdZkPDQQmQuT2PkSxXofS3Sxn5s1EAdSpCf",
  "key32": "52YUY9DEfETNpDW7cDrSxjDUgcxCPZcTcmEN3ALLbxX1Dgt2eDNqcFiMGcyCajHMWWVUAjAoFKb9U6LmmWbxbXDo",
  "key33": "2C5U3LpFRvHW8DPSLBGy1dEgCyBEA6kfeiyAjsYo6HxK88irmvw9m8hNv1tkyjY5XRXbYdrhxWZaYciPXVtKoi7e",
  "key34": "3QbU8sSYZiJxpSnzTUWsT28yzHEJ4BZ2YZx6JW1AXhpd69KaWdFAZqRiUh4MDXgCF7BcT22im3FKZBANLUNjqAUr",
  "key35": "c9GWVFMbJz99r6V5JPX8PmC26gh9hfNjLZgUAnwLa9wqc6CsoP7CpN4jn2J2WxsdTYBqTyeRjtHzDCGf6MsWbp5",
  "key36": "5j3hsMJXejzXPuRbHnLVccuXGnZ6LhBt6DNq4kFLs5HZZmN7rUdcmGmnHNydffTnACJGKby8X5bRF3AzEXAaFYD4",
  "key37": "5Xvmbjj1TzqoDq8dvDqb8zNby9Tt6E6DVpzXywrV5AsYyZsFWB6vTHJ42croavSgDy2zZFNq5id2LSEbM3WswUnD",
  "key38": "3PVSqYQvKNcftpSsyMwz4F5BdLaEn7dcWnXPS4LApdc148SXYuWunJgdFVMuUgV91Uje1uB3jpL4KCDsote9bqbN",
  "key39": "3kqETX5bc8wYeLjPtLVFicFYg2unmeUgMXYctGH8EfjuDf9q7XbXuhJCNYQMvMsSLLrXpePcyU4uJhvjdkMkDG38",
  "key40": "bJTercx95tqc4heuUkPjxTvEytTv5pq9nYHkwuJkQDaZdv5Lurxth2KKwAL4PrXNsWMcHRWt5W3SmNaDjzSTFbe",
  "key41": "5nSA6wiPPaTb6SC8dqvHXop4g6isX4xHihn6wRJ5UJJDGG2aqe5ub1mqawhfFJrVBfFyyYzTq3snnDKoYyVbMx1E",
  "key42": "tbXKdLQqnN3f31DGUbGVTz4jTjC1R26zWMRECo9yzTshusVTJGs24FCU5TaUmz2bKe2kCv5frL4iBK4feKcy7PE",
  "key43": "52LwRUeayDnDznTkr3HZzaPt2twFQxuSfQwGxu4rjGehbQvEKGkPVGzJZQtkTnqKcwG1waLxHSPrdA4w3z5MA6Xt",
  "key44": "3jxckw3VisMghmmj6nkYdGKNbmuBeLNB1t3LWZL49YSAg6cjF89YpnDTBq8RDR52dCtPvd2Xy6jsVMLQfbeUDwZA"
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
