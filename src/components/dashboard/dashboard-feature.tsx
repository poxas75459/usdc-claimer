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
    "ooXhuvvfYAJhe447ynqi5rc4erEb7o1Vuf2QSt14xBXvVJghRmaHVLs3xqMFjXrGoWcDmEnw9ZNq8mnRHDi2bDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VQZJ8bh5zJ4TVTDPcCR5EGDgkHegCKkmnEG3M1hb5hrmiEVvZsHWxqkPkZ9b9AQ7h8ErnQdRFsvBgVBz3U5TP11",
  "key1": "535thQgrAMcUQuiqPZ2NtkHKUECciDa7Ac7vYmGyZex3DVXDKBqiNEx92zF6ggGxFH6FcSUS9mBTL3sMRzmNXqZr",
  "key2": "4pMChQyty5R2h6WySVXbhCkuwcehumVzvPVq386n6jAHeRaeSheEUHZwVqRXvZFDpFscAzt3339WM67chyMUsXwP",
  "key3": "2xoUiB81CohbUqUFJvbYtS49PdcsjbnWcpZSpyet2zhj1Y5LuTvaAwzvctQ469fJhCBQ2CR4xDLmPMV7Pq7HnHc4",
  "key4": "4hvHfocTy5tG8JuoPfg3yaGByBW3BmjkRwJVzUkHWVBaPBgE3Ye3MAPLozp5HHuCKY1f931tpfVC8QFRPeR1jCmH",
  "key5": "2ckp5WtfjUebynLcyKRycDxe79En5TWPdkLCRfqCk1k9c6VQTvPDihAzXjibcoyMQPe2nvNDNGbNZnziuDGJaUFy",
  "key6": "5dX9UDV2AMNTLjLf6Gj95WEUyjjQiHVXnqfEp2u3saePS6ARjM622t7pdvsrhFVsHfjpiGJ8V6m44D2NwehvaRPG",
  "key7": "4B8KTBKRxrext8FQaDK9ZAQ3429F92geVjrg6obR2ZgHB4EAKgWWNeiRczcnx2coNxyUjEsVKcS85bxQrhEt2N3R",
  "key8": "21MX9ZtiJm5yBuszS7LekTyb5tpGw7FdXVY1SvGssrUNnP4rbi6YoA5UG2uFezWj86YXE7vXM2rhw7y5cyi3gmum",
  "key9": "36H4pTKg4272RNDbo4JFFG69NaRBgTAazjCZwftCp7tnvMzFVwNHDW5SEJFCVqVy6nRFqRL7vZ8KpRmXLUerjgEj",
  "key10": "4FJKEPp5BNQ4ZkuZzRFEUSAao57u7PwdRekJUFbvqsjfeNQmpmsuWYiZBjZsXsLoS7FCwc4LDBGinQ9MqHrKKNrb",
  "key11": "2kQGpnmpccRJW28mXASVNK9p5z27ayqYj3m9wDyz5xHoRNMrpdZUGHW1tNT28Kb42ohDxHnvrwHFDeQ96cB7Pt9s",
  "key12": "fcbEDkRnotKk7CAu1uPqfLZYDM9xq9hVt8ftr8t9sCBtugtpEqEPqRkcCAGGWC6na61G899KVUugKFZhvRy7CjJ",
  "key13": "2PNQAWWVNZam8WGqc98DtEDjUeASUSe7gpcf9osqVaifqeu687WNSRrtPuQE3CbsG7fCN9NMcrpXx7rSvV6Bjg8J",
  "key14": "64tV3xeDnjCcDi6jup6bSL26vWxjUja3K3Li5KVyd6Uowo2H1sLcj3zYrfnnnrd4ZxLf5tFZWY3iVDCiM1CwgdR2",
  "key15": "4rinBuTu2iZG2yq7sBYuHwDwZ8JCsUGiUXPbniXaGswmh4vpCzeCi8S5k1NsPabqSMmTWVk7NV3V8G5rSetDEpnT",
  "key16": "4JjvFT4cspXz9cNV9Xkhgd8VkrEPRGWy6eUrH6sMWBvLcTnySb51Wt8tzNhmBfP8DS5f8MaJ1hvJCy5yKXxNQQha",
  "key17": "5bMNVBacCW53Pe327btrMRfrPe1a93E9pUyigHHr4f3SvQ4WbkDedFKdCv7XDfZuerP1UzMzLYSbCYNWXYBqbyXh",
  "key18": "5Qsu2zXHYwD7e8KgSGD7AuCXdRbV3GTVFAGGmDFFN2YZ7HvtB1XZY5RbYRsS2T4htWkmbmBqfqtK8tmKZUztHDcF",
  "key19": "zSdRzHycHXJUySKFsA98Rq1TCtzGpRnxLRCbKB8sqvzJAJbs9cqjvkRmYKDToGrKHdamMVWPMfbmehG8s7Z7JML",
  "key20": "5oiRQjxSBqm7ykciV4pNvgPGSeK4upWyNFpAva4fAsbEPr6kKAx4T4MfhcdWf1m35gXY2JRLGxt5PzmAJeHFQShg",
  "key21": "56Z3YMhyyjEemPLJKxYPE1ioLykwjMLJcbwLCU9jrxUwfCNUCiLLcbU5iAbfn9hduDrkFEXvAkHgMbuiM92FuXRh",
  "key22": "58K8dgGSJ7V21ocauBqSwUZs8v14JEhhJwY1CYzSTqnExUN5GDpSdTTjN42hr3BUPFPDYxfWwjhmb23vT8gUMUe5",
  "key23": "2sUhL9B8QpkL3WHAYihhFArc963bfL2Vwd4FiGrktupKyQUvR5obQ8oqFBrSMnTrmGaqvDVTybX473f27hwPUGPv",
  "key24": "UNq2EkpxWA84spqrD3kML5HT612ETW3MHVRLErouVa8SicC3bTuMLy7m7P9rccLiDx1D1E6Mr3oAczUFcsQMEg1",
  "key25": "LSW8dXuPKwATkuw2qURJ4tmJNt6N6KirhJaYK1GtqnFiGgR9pehRydu6hSCiS6y8Lbo9HY4iS2pLzgCeJCMEYR7",
  "key26": "5QoqRptZhvQaH3MsFh75aeYP7rkQgZdpmQziPMxvf7iUqAuVJR332DgfeU35qJST6jo2GU9Eae7uWuxsPZb6FJbU",
  "key27": "5ieTSCCzpjKjM7eoA4TV54ZTHeP6Eg8D5ksMDjFeToqzwnzfKGtRbhkUYiXLpjRCUCpNhKxuH1HZio3Bt3DWDM47",
  "key28": "2VXMh9Z4LJonuLfWYRxsSg8o3bhqBSvmkBh3z5oECz12XVj8sE1EpxgvWAbCJDCbqYKxod14MQmZVKxirePd67fr",
  "key29": "4uFjVTqxUAboWqxFRMDDqAMSGpdzWKxQR83sWmrkxAbezxxfgPKty6QPTBCGRabFMT4cVj2C7vs9VJuohccpr4p2",
  "key30": "2ogL2D9hneCs1GsN33kT1WB4511rxHDg3BKwqBKxfzcjUK5vdSEc4zbaZDdpf4G9jaTrR7BN7keiqV3BiX2jX8NS",
  "key31": "UnxAeFLq1GoajLMh3jChHNBXNfVKwV82PF15WN2TuHj6NYMzw3fZFq3oMPYuJBB19JrDX9Y2p92WCQbN7szSQUT",
  "key32": "3QBJii3yH5U8wX28UHUjmQkViQtnCY76QArbueHtVJdceFu1qWbVqDtU9tXfHEkQp4TNFo3bfGifZf4zsjxT5mwK",
  "key33": "4PZyc3WHcHkuWf75Wx3z4eBnTRztBdBQeQzr9Etgmf7vcB6UdghcPbs62BFe4wmVx49uuEZ7gXFCj3K2WxTmjwZJ",
  "key34": "6211WbiicZdka1TSHjuq5NVserkPFazsua7uNjSZ7m69xL1uG4hc3t4WnhzeNpCntyjNy66nTSsqfRpBDTY65PbF",
  "key35": "3XCKmD2H6b6yQzrVVbZeDR9fPfDASaxPxXzrq4jC42oPimUznY3ByLSAM22tyhC89N53v8TrbjEwuVWDBWGMiAQc",
  "key36": "5AEtkbv8VpYuK3QNrWh4LKUhNYj49XotnewAEAFT7bmaaoUejiduitYvi5WhyLn8KX5KS9wKP551vd2sn1neP86R",
  "key37": "2zYozQYbfwsvxfxLDKVfDBMVrg61drXSsAoMniXApYdNVwS5Kbwjtib4bNTtEV8GX4dgQNiXd8ggUmGXmY4Ptv42"
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
