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
    "5QF46WdhPaEPQwPU9NzJbpxcom1g45CC7VjCCp9ztkfX3ewTrh1qi4qT2ouisR6LQnMty82QDDR5QqRoVrCL2vLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26FPbavqaZXjLpVewcis9SLUUgf6SMChAGh2EFwKqGRew5AR5sz4z5Uteg8mLym8tjJuwLekbbjWRSfdDbKg1nXr",
  "key1": "2MmvWJZtXVyw4VUepvPVS9RFTo72KZ4z9Tc1yWexkqU673UKFFVJhsNXPZXqTZeTT4XTY53oUdhMmgK9Jjo6hmhh",
  "key2": "u1sT2qijarEHS2tNbPctD3H4zfL1j4QAiDLrgSVTk2yaR3Phy9ecc5pbbY8LsiGPb2G7duRKpLy6mgLpJesAaWj",
  "key3": "3PDjnKDugXbfTW2cJpMRumfsaWsXvg2xpb5TahnN9od13JU3AhybJN9oc4NXBLEu5EcPw8EAnw5Z67V3XMSBG9Di",
  "key4": "3xPfFfVf7joMZ3pVu1WLuRCmnXCFBAT7TPwmKTFyZqjoRPq7FMaWmmXFiehnZm1gQSjDce2pHLrkvVHpAFhpjjXQ",
  "key5": "2gYRtc1N2TLfd3pvkr9QcmkQMuZZKRmELcBXQwzAX24ZzdBiGjRXWnX4PHuBs8aFHNNd7BdK1YM5t3NNdMfiaH5F",
  "key6": "5x1Cf32ZRUwf3JwUvQsoMcdn1BYh9vNr5UWwFSpbdm8yigRz7dzcyWxqCwVVwE4cdhH7rZkpjwA9PQUdcoLqz1fT",
  "key7": "AszN2WPFmS7N34JVmwaZpJTQzfeHEYn1fmtGoT3X8JUxsiJtUu5ZNSVSwjy5MYYSjzFtFtpeseY39viwCvo9tVw",
  "key8": "392LN3xBQfYSBw2LzsUgj92vGfvz87aeEXWJoe45PZCvfZzUkfB7jZVwDt9ZP7H212cztndoKH1v5piRyd81G1TD",
  "key9": "2vmzYHpMTkoYTYBU77YK6zyHJnZDuMCrsFs54AR83haWTfPr4XTagxwhTmXeQkBQvomZTYQmjK4wYiTxD4DrqcSw",
  "key10": "67FysxaeeLJeVQg9GcKzwyVibAFy1WCrLaSSTnQNAvJWRVjn6m4BJRvfSHDdv8Mj7ZrhwXj2w3YXYDSTvS7oagW6",
  "key11": "4KWrSQMNR7JbEP8nXmEN9wuKMoDnETQoQBUznsPywZsGKyYUNA4dJjgNR6BSqXWz28dcbsHUgVSCepv5AnF1aAxv",
  "key12": "FXujfBQcmEYiiQTDn6v23qY7tfw1aU4VJTyJWBJc4BHvzzbEAub85WpCRmsgkTNpR4fb8eNVge1REtooPWLgvGJ",
  "key13": "45vGXcuuQnSbkgLGPrVv2CrZ9Aumjra1tBUtpbWLDSagYCADg5HZxxyXPiQGhb29so1x7EW1SjusN3rpWHHu1utT",
  "key14": "3LFs1uyiM11Auc39MA2UvpRKXpwSwUNNuxSPbsWxQmcyPYjYUCb2884QYrsTa8jBx3rZgu1yp26UiWjKm38PUF52",
  "key15": "4UaDqQSCYWLij2FevdjJMwynPzVxeHnK2pjpRbodUJcccvZjghYeQySmGKnDdoakGDYMSVFeRvPWnNDstEj6Pi8P",
  "key16": "2kdt3FLS9quT7hgcYaKzxibg5ZBVyg1UK4Vz3B4oHh2ScR437BMjuYmY3SsnyywQqYxP3bKPsew2sd4EMGCCsWeJ",
  "key17": "5EvwbK7JJbX86cCHwRWteXZNGBdPwnYJj18CcK75G6EVkDvy3mvXpotyGqZNSc4uHQdDqzcXaNBsTM9QS2EisDZf",
  "key18": "4M2VsoesujGDzXSLqByw71nRmC5RDY2wcCV8Pi2LFRT8VbKwRYyhT1nBpcTVV4YrP3ZegWD57xaYb13sYzhPj6JD",
  "key19": "4JL3rZ9DxFDSKBXk71JSuXtJ9pYDKFFF1PUqcKQwefg1MXSTyZMYAfrUEU5M3gfFfyDymrBD2vn17JskwCnr4Mgf",
  "key20": "2d5W4WELLt9wKr1d8qZYizs2aGhuUnUEv8BFtoAt3xczfM8d7Ch4kLbXLqibsjk9H9H1z7P6eZ9iGga6CB6qMKXX",
  "key21": "4WYt3gDMdnqbC9htxnK2zpF2aJrtqLf27YYWAs4Fh6ViZBuucSYeoRWtZQvCKofag3dSYfJWXAtWts398eU1zCcH",
  "key22": "3sEXiKYitAz2QyACjzMavENj4cAwHztJ25MVvrAbvZ6TotbM6D46yUo1oVmmYtmbgnxgv2zb7AS8NFCnvTpN7n4h",
  "key23": "3YqKFEFwzGNuhenkrkp9J7EQDSRajp4eAkB5xbqum2KN5KD5knsu9FdmspK3ohduFrZUZiAcvJVYmg2HjHDX7Bws",
  "key24": "bKYvGi3auMnEuGucpsG8Wzvxj3icPyDuLBqzXk2SDaLPozUfY3VwMY8HVDhWoy4EWE3xZKspjqYEDpt4CE4Xj4g",
  "key25": "4cmLFaziJwmbSG1LZ9ZG9BbkmpuTqUdJtxcq2xEgdtytWKBYJr2wr28reimG4HHoXj2Mys8ufPEDxLsoTfpp2kHs",
  "key26": "wuNRHJGP42RLMdCKmPcLThM5ibxYg4SwzLMKKgZqwY34KDWvER3JdfXfwjHDnBUSGQVd7j1oC4UjfgNVmKp92sW",
  "key27": "5NSWxUuvL84rTR62kNfgjDGz9uz1j5Rf7mnn1ZdjbPpccWw89orffLU87iVfsGsjoaBmsVMpNgxo12EwGXMak3Ew",
  "key28": "2UHEYBcta38uax493deixYTqqxxZqNvTtZMuNxc7HT8pzEG3w9MDGnYwq1VYz7X7YcNgnYagLjbuppy9R7T2Nuyq"
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
