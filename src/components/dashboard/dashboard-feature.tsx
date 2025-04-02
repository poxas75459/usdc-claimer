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
    "2YnywJhCEwSuBMKvFnVEw5KZdAazDq1ekBjRcG63cJM1RDzzDEUjumgjqaVkDDEUko91nuwgoyNs6KYXV3p3vRzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h63SAZXLb7UL86Au1KLhuYztMmJs5S6rF4F3RmB2FWvvFSFPDKjBawvjrmMRz5gLoeaPbg9RRoeWCBKrhoRFT5M",
  "key1": "4EsxqaowuyF7qADhy8w1W4BzhFbygFVycHnZbvrynYWaUbDgtV5icV4UVtU87CBpUH6Su1PF87arWjsU2PDmjqJA",
  "key2": "5asnoV6aVPxfiaHCXJjhsR7xoJd6XCruX4ZV3tz5PPynUGxfLmHemBiHAXCWVtKwHRgq85rXCw8sz69pDkwzbyRJ",
  "key3": "iXMKNRQT32eASqqgeyBhAWLLKjEAV1dcW8y34JDU1rYTyYYQ8BbAuxUMo1M5it3fP2vks1qtTjfQZ3EuepZ1eUE",
  "key4": "6JVSYbFpbrTE8vDKZxsAyZyR4qPRXqPd7NfewiEbAKi1hrytXn8xi1YjxaQg6AKPfuxm5QGRgvSabi7cYeXT7ed",
  "key5": "33qCZAWXN5Ed3Wut5PPw3qdzMqDgAYjgLmRVppaSVaU1sKrNCx9dnTHLJhFmNuEzs9fU4MpqWnN2xeM3PnFHrVZ3",
  "key6": "4tynfTX3kHnunCziRHca2CYVjY8MMEUWFTq7PiaTPGqgyZXJpMM2CndMZYoNY1duxrGGGKrsPBCihHy9fRouJVph",
  "key7": "2LcSXG3p6w3jZooXjMmDmKM3goDo5nQkxSpEzmhCSzKaqPiSL1dEUb2S9kR56u1dQDWSLx4DfRhL2NGSuj4jNgWX",
  "key8": "4CwAHsHEBrXSrAjHucq7DuigR4YVQ3hxyYAdGy9UweTKwrePpPH74EqScYZm93H2a8PKsDfPPRPhD6ceeSusYxy4",
  "key9": "2LEM1vvYiDtWTvyBQLhxUKeTaqnR76RNLjPqCfX1kmMVvjStdpF6GrUSQbQrg7jT1QR49ix5FVhvmUnZmamrc5cm",
  "key10": "3GxW39XKyUv9B2QCQq8h1E1FBrSDc8Zcoy44MbBWDezsSz6f4ofKy6himWKMgJfghPb5LTS7UmC6CsyDYf4YCGsv",
  "key11": "5PMEptBHbdeFiTL39EKyboUL91fQKKe4mWzkkM4poTjDjeJfiYknqCqgzwMhHe7MhXUHmp1vHxrzFkeBYLjtA5BT",
  "key12": "3zFaRxSq6rwBMxVU3VLGcdRQSUPfVtTbcpCFKuKmHoiBbkuZQxb2HpKNCfRKMCTcWz7AyjnczbRrP1FmTawB1ipV",
  "key13": "4HUGhHkzX1e53Y2Vw8LyAfeEUHFa8LofrJQ1NhBBLgA3vvVaBYF9qDqoXvdcRpeazS2dgu1c69J3ynSXyhormd59",
  "key14": "4S9LUaHCRdCqndw1bLLCpEuVFJDHHujYNhzkYXJMfvzvYxstG1z4BVXtZN1e5bMDA9WnDfPjTikfUX2pqP9H9MxN",
  "key15": "5d1PHDtJodxXfdPTJ7Gd4HWQ5Hu5xNijbwmkGQvaJ3FMxpb3KT1f3uW9T8tZHTDLDtDnr5ZJgE2ArgF3RGzd1SPN",
  "key16": "5cnnzUdtakc87QRH3inkeUrVcU89aXHASSTVhRtWourv3EkSE91UpbZaNk9cuqTBem21AczbDKs5Q1hBhZVdtaXa",
  "key17": "3SYSMbc5RrRhhDkZGfr1pXwQdofz6JzNuGBULMAv74osFp3uqP1hu2XCyvWs3nfdUwGvq8t24n5imwr1id7p61q1",
  "key18": "2ga6jckYEXJw8w5Vs521gyfTJByNi1iCVLdUSVwRxRhkH1sKxYP4JpEvmvq5S32X7yTUWb2AfqmZggAKTkExWEDF",
  "key19": "2Rwa6UJRvcGjmUcxMa8WXVdzfubdevZmTsmLhSffRSLCPrvt4jXvYybfGf9ruySo7AX5Jg7k9oRXTGYLHuVXr3yc",
  "key20": "zG8hqvspb2b66WDwUywaeCX9buZiqiXJkh5djzpYswquchQ2bL8XT8obLNmcgtm3TY6FvXLuzRgkEJAjdeYZqVm",
  "key21": "2tEjZt5LUsoQ9ygk9HqecLmpHPLgVrKfujXtZHsGqCettXSoUbTxWjBxficG7FBHuRH4gwmgtwxnGWTL8uvCFG9r",
  "key22": "5uMndT2joiKkfpt7DGxnZ6Dy6BqYuKN1wfgBtF2CjLgdAv68tSKHc7ewQz5m1ZDN1MBXRR24CCWBhQfTNpXAQGPm",
  "key23": "5Zz8FUEDCydMcamJzXqsndYiZervqgSXw2ViHFs9HCbLyYv4YdMFV4giyUpivzr4QVqJ5KiSDvQamEQaRWd4s4wS",
  "key24": "2oSLtTgoKPkoEPjQND5xXxkjzETdSnXyn8FWscmjobo7MfTXxxuDF943b6aSBiTzaVDtyavjkLtMZUJkiJHdEVt2",
  "key25": "XuwyLJHLx8MvFBenkYQoyStQ58fuiQEfjRmicQ2kcQQyhPDBopiiaFrTaXDTFrLL5Fzp4Egz8wxHR3QGk27Ko58",
  "key26": "42BRkenYdc3Q8UNyeR1TPNU6KtnTAVpHuixRztCeKhFwCM9xmgcMnH1pE1tGcTeG2dtBMsfW6daMA7q8BNMiRn9f",
  "key27": "5nCTTLCesvKco8fRXZyQbupSMgDWYV4whoshesfVqnACCbQwS1MERCmfVXcQGAuftexeh3a8u4R8Dq3PcdGWAkLQ",
  "key28": "41fbUPaYffvnwVrQtqxKmfALdayx2yQ1BMESMNhjzvhFc4VFMeBkvmyPcLKBjC4XLyAepbudRyJCqYtb1H3DScPE",
  "key29": "tFR6ARSsM7sToGjoEZARHHKmdrDEj5PrRUUpG2gR3wxUf5jeW5F9eUok1mh7MEyx3hdUBQkZFL8GyGriD9EAzKH",
  "key30": "e64i1M9dVBfD6pEmyGMHcs2MaAjB9HsuGB189tDDAhcePRhkPmvk5dFJTnuHY3Y6mrYNssjwWJ6dZ3vt3t2sfvv",
  "key31": "2iRZQLoWgEeQ4qTgY9kHPczKBWacKdpe3qARvnHnFbVhaLnQJhKmx1kVCcXwgve9zDG3tNhF9aWysj6wmFTJfqmP"
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
