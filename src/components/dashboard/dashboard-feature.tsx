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
    "5wPR9WCh85cAHAvb9JYqSxEUJbk5wDJ3srXV4NDfgMpphRjMuT6YhfFB8W9z523f1uySp3F8utXU869g224QRqmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XLgLetAcrcYFDpt7rMbhq6qGEjapmvr5RxskSCTEYQAgG7o9sa2xqaifLpJPu9YY6PxDLGHiBLPAD9FJhetHskx",
  "key1": "2yCRY422HN1D8ozzv26mCVE38ZAB8oAnU4reE1VxDZFK8jpWvWHb82gmXqrEjt2pu5cyvZSSKk9QdSr8ayckH1Ph",
  "key2": "dwjMJptrdaCzY9joL1JJc7pEjePQhE8VUkM4ZhnGDS68s3iWSTtyN8YUmrp4oV1gPSrHZkicQZ3VEAicyTAMcEi",
  "key3": "4oLdxTuDFMC84vWbPcUDXJkb3Srmab7fkoXw1HJeX12Y554a5ssTPdySeWxtrn61fxN1i5r52e5RkZLKJJZtCGeC",
  "key4": "3iKjAwRFvjGMrvgLaWfwr9GvzBjC5QoDU3AGZm77Fd9FzwBYhcxt9BZbY5QkPn9vCznXqxZnRyif2wMCdAAZVneJ",
  "key5": "4C5toAUsTZDPAxZjoVoX4xaBWrxbiiybpJauqZVnLSp5LARZZPGr9DZmB1yyDwWFuLpn4dR5qWBLfZ3rPEMbpsNt",
  "key6": "3oXJFgLttLmUcakHPJy45PLYESnuNSDtR8FSpuSe61drTRnVpZg2GjgqnF5vjMK1YaWWpkTEHXXAssibNkmDwxDo",
  "key7": "5SoXaZKfgcJRdZ5cCbDKw15mxze4niyBRZFABWEpZfN5hAZeo2Ca9Vvrzn5FNGgUo8Cco3e9XqpPLgGWiZiNsc6h",
  "key8": "4ZxNdaFYEcRqf6EfcHnWDH1VBMvmtx8xmnwRqNFsNLRHdMPeBnZyAXXhd4qppkebQf6CyQ9yHifmjVQEr7aZs7K8",
  "key9": "5St4a16zXGFxRStYm6NaRVoEemJ7rJGEdQPLRgpNRKAnTnyEucsNpngSW5f7qBV6iAKD45NewkXWmM8QSPPM9V6L",
  "key10": "C4M43bStoBB1SAKcpMEVsioEA61wF7MPXD2Unct1pje1qAzxJEdLE8YStPbmm7ZrFwzd6CHXEuSk3QAMfaE79Qg",
  "key11": "faBfDJZPssBN8sbobPsZMQmsEvMTVPdkDxonbL3MA8j4K6eBS2fxjtWVpX1cjLfj4R22ovSstayfmYSqv7LMHjD",
  "key12": "zNoNRxbc4KGwEazmDEhTceQECgT9rqgGYMHzLd1EtMLWtj3Qv4G3TUFn9AheSutBJWhtUMavSadAepE13rMaC3e",
  "key13": "CRBU8VqdyYLm7diQNcRZgAWJ26kH4TihoSXyhJRfoh4d6zda1QNuqBnFh9DCLd6wQhRwvnfoP4BtfcbnTwK2w8J",
  "key14": "42yoPFR9LgqU49aBx2KfScRAg18oQLWuuZcmsN9c9jmddZCq3ckSPcEcuYK4wLXGQCR5dB9hrDTCEXJqkzy3hsSb",
  "key15": "2Spdxn3PKNinmFSMMbxVmBaVLeGAC2eMCcAsa57gHHfUq7La1Wt5Lrakao2vR6PE36wiFLbQoVM2N2DdZfrwXnGP",
  "key16": "2mwS1rJNMYuG3PZjSs5gzEhkfaf2aF1cDw6J6GTsf9LZEh7WYnFYjj8DRd35dXXR2VdsZ9PEq2eY8PopLd5XLASo",
  "key17": "3oqsWzEJPJ2woLitb9zy8pLeGByTAGMrk8YqDAecwS1qmmY8xYTky7ycAKWPqw5hAJkR64cfKhDHKsAwQfdMJsdi",
  "key18": "3noBdbj5jPcd2tismjhJ9pwwvpLtK2CARYgKJ3ZzdU4Y3iC2w4CpFtJy3WH8TEwaeHWUtba4d88wmEk6BdXdXqML",
  "key19": "4MLs7Sx6Jpw4aP4p7Fwyw3prWUu67ieB1q63ykCw6MJYtEZuoSEgygLD1qi7KcdiTtwRMGJ6BmmRJHHWYLZhKCbK",
  "key20": "4W3gm1T89efYA12DToe5tDgpTcd4DyCWtZHBQBX69NoiBtrPREZC48R2FcNV4Enzt6zUodLTgsWJ84enxt5dMcyf",
  "key21": "2pM3eXCQ4FL7Bg6ASJBY8U41Wpd6k2JaXxaBuvYYrv6gSAH3qK9tX9d2hqUCwSxfZw9A5VQK26d5n1q9BgYGP63R",
  "key22": "66pKcn1oQT8AiCQHx4GJwwLrNpbKzU84UFkpJY4LWob5otkqfvGFxZpizQGHkjGhrwHjyKMwowFK1Ft1QRR5GJ5t",
  "key23": "2Ki3bkA56z1AQeExqNxMnxYbkgwYpteo5SgMf4kBLUi7dNSGSX1yhGBjRuaBUKaARHmrfdfSXQVorFELLz91szyr",
  "key24": "VjEXBJWRvfhmsXJMgxzn1QZRNXK9nDEtN5sacQRyb9mpash9Hcz5XpZ1gEhNYFrinsnX2QWMviQuXiXP2JTK8nA",
  "key25": "2jpeUvieakSWxWmf1oncGRNxEsRBtsXmnc1cDpVenFhwDJQFQqjUxcF2j3KkngsgAxacdXXkXhx4k1rBKTYTqyZU",
  "key26": "5njHy4yzYrTDRFt5C7SsMYA4gQCkekf6SVUD6vGWTMxA8ARuoGoyxkA2JFEAjyznbNLgA9r6ceieMesq7bqxDadB",
  "key27": "4V9FEYXpoLgKcDwQ5nHhr2r6Gc8d9UFchMPW4aiqPNcvgjmpKzuBbVHPvfkzSQBM3mhdNYAaZGmAwFht9DXLAeFP",
  "key28": "5d33b1HzFkrHv97V7BGpanfv6Y78V5hxGRWMYHwDvSwoMEAWptAr2EQPDLCWmqYxhHfegCNDJJZYYX7pCGb7FTi9",
  "key29": "c1ArirDmj8ZJ8uWHkzd6AXwTqarmsvNJZcv21UsVaQyRRH2XcRACUd5ayRtqep9mkA7EZoD8xhtdX45jDRMmicd",
  "key30": "4mDZVCxMJGg1MgMNVkkfLjdDEjrKapixRz2Jwoisb77xBRqpvb9bkQmAgmr3LmEPk2ctR6YYnrwAWTkbPHoC35Jn",
  "key31": "3Aa3TYpkXS2PukLdtzAuQnaiuJd4nxEnhGpuwctuk9QaK3SK339c1P22ntQ3R9X3rKvQXBk6tSMKoGgZ32PasHst",
  "key32": "szBafNFbgvWyC5MCHCHTDFPt5wCRSjYJioxob78PovZUKNU5wUgwzJHYy4VPctkPNSTLBi8rmXoNesFMU4ECaRq",
  "key33": "4U63nn5xZjFTUU65wcgnzCGaqAhVzrs3iFFuMp8gbAuNEwg6DCpuX2pb9xBdR6DkdbSPeuFtBa2vyN6eaRVm477P",
  "key34": "5BiBLFw2ztSHVVmpqxpCYmqnT6P6y3h8PBrY3ajimW8LrJAcneVZAsAAwPPLRXcQQjhYC556iQijX5cJAW8nh1Kz",
  "key35": "P1CUXCGupmBdfwVsMzN9tt5H5y9TSeQ9eDrwo7pWMLjGb3zcQK7nTk1RUhiou94xem5bdvTgnMZH5Wp2ha13Mi3",
  "key36": "3mFHdRt64EHGGdrQGXr6TmM5Kf6RkmGyksbTU6JVcJkS2vkgdqPDjHQgoMB9TsG9NVwSNq1HvSdCi8Tup2PXHBYU",
  "key37": "2A7JVcvi4huo98xNcCZF8WWKG5uPfiNQbR5XrbzKosEfEpNH31E8DrQE2E9x6KaVCTahkqY5pLZTuhH7aV1Nw5zu",
  "key38": "31HzeybqK5gVKNW9WVxtS6KEPD2xoHMJrMktSEJdQBpiWtVUxAGein8JXLyhxu9ZqmBJ11gWDpA6hHQ6Hhoy8QeJ",
  "key39": "5uBEMBBBkbtguLL5L6GKUMsfjzF5Qaza4YdG9VFMcSFMS6nnL2EMkaNnHuvo8aXxm7RbWPWkyaduMxLuFzLr3cJf",
  "key40": "5aLMnHsFgtfEWzJUiDo7kmFzB1sjzZoxgUqafnD6c6mxwpUHojq9PjJ2bKphZojqxdETcBehpGVQQG77eNMzmoyr",
  "key41": "4CRLEYyuSsz6GRqXiAwHGfaHdrceRq5NBxyfUqYf8MhBm1qeKMQ2ufqcmjfvBMhgm91Jk8dHq8TC8tMvPEwPzW8W",
  "key42": "5vjD8NW5FeZ2V15PA8VnN2jz7vsdKXP2hTGrnBePpbkTraewaDqXsUBFKsGtScPDJJZpK98vFgRiTtqjgxHK5eGT",
  "key43": "FzYP2F5SXEaREawZZpSiNrH2tqE1wHpHDkE2tUFYNS2st6j3hmTNxHyFetG7ej4anRi1agMteGBBiytqEyevvzw",
  "key44": "3ystdPUtdM7Rnb7AnemKbixCRCARFgsVRMVEtpCvjYe79zLz3J9ZPJ16LuvTAN82JwNqboHQJshoKUKAYSDwQtHS",
  "key45": "GdGa4frYrzghDR1yimsCr6tCb4RrCyQvQxGpPbc71EV4Ht1iopQFNABYQMVg1tbWQib7WvtKrTvaxCcGLXKYiDu",
  "key46": "5fDqqWWPwAw4pE7PmtUmenG251N6f8brufSao4gEDCbqtMmFHw4zXzbd8q2orHdAqGW3s5eF6aE1K6ALXuzRKWbJ",
  "key47": "2FzZujzMXPSg2zVktoY143mfAVywvRtnYNKYpGnWKZLka7KZhrQjBZ2Qb6AymZhk1HyMKgJ3iHopxmsBH96nrcGA",
  "key48": "5jacuENPeMKrWZyYXrnV44HcMKMQk4ZBTtfJwig3fkE2FN8kYeaSugR8KzmWgSs3AmV1VxNuCqMKyQNXs4dt48PK",
  "key49": "8JR1VaMqHaRXivFtpLvo6GMdWrRMJ86PshP8ZEL47S21R4PdVF5ZMjLtRtUGfj2fHWdQbi9SitZ78PuaCZRwrkW"
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
