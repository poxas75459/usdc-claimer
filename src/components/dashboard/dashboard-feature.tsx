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
    "3Yf1bKMg5w5SqTgbbFdGPNSTqSwGs8GL6cDt4JqdymEjZCYzTjYkPrgtgQ9j7vNXBMQVF6Vun4emDHnU1c3B9xJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t66UY9YBfvvJVZdU63CrBmURHt4o3Xc5wRz1cPvgiVzDQdFYXdVbKbhBt3dGujyPRRKkC5cUQWujtcJgA4ZV16T",
  "key1": "oVzaaFGqcqXFCLSJF4xaD5NAQWxH6y658WwN8BoFovoRHHpf7DiTSDLpm6f4PxjzaZCoKdEBSS34bppqQVcerAj",
  "key2": "2SWydxL7xLBPtsWitEoZQmgvYvowGeK92UmSQeuLqXbPPaYpWyZ8vMfEivy8SCrvrDtNrxtg8s1f86JP2sepSHEg",
  "key3": "C5iHSmLbUP87z8NdMw8QrC5aaRVUxfHcMSCmM9pMGeU5JLx4QyKGDA9y7bnJd3KeSxHG56UMEUwZ6yezehngjQx",
  "key4": "mj8otJLtQD2MWAeeFAY2yn81LA8aadQHBefuvrABe1n86epqsT3jVm7pu2FDJAfYVjPkkUWTDnWsX4VgVZJ1UWP",
  "key5": "3y2YgqtyQX4cWZo6yrM5pq1vrw8aWXosUgnaSNsGno2waX4DPPUWpYsWDHV39PuxFNSzvDdyZhMWMBVGe4WSBBER",
  "key6": "4wgznUHdQnQEBy5e1VzPySuk6bfAYQWYwgBHjyQBiPkSaVgGxXnExbK93noN95Gcfy7VAfd2UCetafcj9ctMwgi9",
  "key7": "kShtGqckQjQpftSgqaUr1JVfSbCRJotqvZj3XP4ZPyVZ3ZSR8sz2NKGDPXUhMfB8KUBcSedEwLdPnvZjSQXf3RF",
  "key8": "5fts2M5rPWaXGm9zYd8LU3oEKLNTRg4zGcXk1Ej99GiNeRzZqkqfwJZFc4gd9csJVTDAeA6M9yVjN2uQ7vB91aX9",
  "key9": "EWNRnXgGCrKxPTjv3S7cnxngUYyMabMq1QUkwDDB5fJGCmNivJ6LeG73nip6cGy6AG2BUvn8h8xfcUDhLQbDbiF",
  "key10": "2AzuVesnMg3AKC3hywnWjKKeNd6CLUoxUZo38fkckeMNFr1sSaCoqtiRHurzeUHS8p85Hs6fD7v6skt1rbfBrVju",
  "key11": "35EJ2cRcprRtU29S5bmhTJR5srh92erDnCvWuw4GzRWgq5mWC1H3gBRqnrxbjCwUERnHZrNFQym8wHNu7LgpbQYt",
  "key12": "6sjb8EgTq3Hy7LqDmcUJnCj4MZC8oEUbxCyGPbFVuFP3RNdzBdYdMfneasfsUYneSCt1m5Ft19WAUm2y6mGBBUy",
  "key13": "ExNv72ACKjLbJ4eMWXgjp2NhQxJsnSVP3CsRTKN7HE5FiMhsf4Qx52UjjCp1WB5dwjkeRNPyL1kB9iNoW4qj9E1",
  "key14": "24VWHgdteyRKpXbKf4W1cKN7XWY6VMpjx28m9kLyXMAifj99e1ZWqWcKWhwH3M5CDWhTf31tMDcZgtus6LbNVRQm",
  "key15": "4EyMw6KHUVQDQYc7MCtvZdhMPbaw1nKsCbBgPDjZ7piBTDftWvpRK6c8i8CrgaUfNRY5zz5uFQz5jdomGkomuSX4",
  "key16": "vT7cUCuxuBqhzGnKC5ez5EXvsiB15s8pqCsGSqzi9rFk1y2NWMCm4Lraj246xGcoFk49MEpsUgsjMdyAjqEXLUX",
  "key17": "38rMKABK3hNgTa7VqsMLzp1S24zNjx5EN19fS4RRbnWVJKerB9qYQvVNobQqP2xZxNUTkDzABVU5zBvzpPBPTKbq",
  "key18": "4GKvsmKw86qqJsAVz1EstBx4Fa9jDcJd9PPw6LkMiDgPteTGXTsqTFnaCsgyC8fUWTeB9k7L6grRfKhVFkFGpWZM",
  "key19": "5wo4w9Tu9xb2kYrpxCiVEwPpumZQ46WViKw8stGJixE42h98a13uqVS3tTyFxMcAFAGYd1dahcnkuWHJ7XtHiWU9",
  "key20": "5HrVxYp7BUGdbUBYzAdPQopGZh3EG3jLbjhuMnBRzGSorTUNmv7oHR4q3JFR35Szq4kNxSAGPor9SXBmoi5Nsgvq",
  "key21": "3Mk3AX16E98Xw3gHz898DqehXMkKbQo8BpU3vXi7bDqMst558HRLqp4n7tnTW5NfxGYjGNAgPn986pRT8czkRpti",
  "key22": "25phLLCnGe5hp4pEG8xzrAmpwtjJC18GRKy6XD8nWog2UEhwkDh4AuG81WNFFAadCHQ1cQPjy3KR1PoTdaH4b9Wf",
  "key23": "4vUFWaAYVhrjKW661G5WrWKXQ6BvUj4BSCnvN3WLwAAa4qp871GguYenJ5RpbZAuSLipRnAyXxMhnZEsUFgLaEFH",
  "key24": "3czoeEJDrtonEkbq3VTEasHgcpJUbc6nqQnTQpAseB2YDgj1wsZpPWKJtvWVSw2BEBQxxm4wjmtGbTPv8Pypwtp9",
  "key25": "2E7TF4kwvoyf3E3JbL7PcDmwFCfjJM5F3qa1P8jeCDiFbKSTmvA2oWmL7Kn9M7RuFAKfLcizX2pArCbnXsS9avZc",
  "key26": "4KnsUwTyFNPmWSDqCABn7Eu6hMSneY9DGRX2bZ6YUU3DYMv2VjBtjPgMnBc7A3ERA9ZRofSrrUt5GrUpTLjchL28",
  "key27": "59p6FXYCNFETuqSfwTM2CWDQaPeE54CewsX8dpcQeUBS2cttL1FQaAckdpk2YJ35ctyDBkUnrRjB3mQX7q2HcDrz",
  "key28": "5gdntKw99wGE3wjyTyiRx1EmNDwmia1jd1WhxTNvHu27LDtwa3zrejGFJKDfx2aTpJTxyfP1HGRoUE6MRRSv8sUX",
  "key29": "FGRJhpsZzd59YRm7pKKaE8HFTEitSsbm5jSMrKoFXjtqCL6Xm9oW3PEnfXPB6mvk1WJmdJhZdt3ZCusuPqhPc6e",
  "key30": "3qZiAo7cifHYC9dAwnMAUYPquqWrw3dWGbt6hfwja3PJYr6nGqK1dBAmQEgiLepZPjYeM6cbWZ8hBomMW3hker4Q",
  "key31": "4iLoyYvTgv79treC61VjXv91oF3mda34QMo9BNRDW4dhLnH9XVxmY771CG79xQo1dNPYqb7dwpnThSTEAaFKSAZL",
  "key32": "hjS8oMnC3hinoXnVzT6ymwgHJUa9TfG2JXGJLVC3BbjfoSMLArfUAoTEeBbKC6xr2VE2KS1ARH5trLrhakUsZAX",
  "key33": "5QQ67HEuASD2c2xET2pEsu6SXd3sTTHBSJMSuiuKGDuHf5dfp4JXmotx6JGVuVzWCvfNnJnmyaJBhL94MGMy5MSh",
  "key34": "3vmia7xTSXyV3m2imGWrZirPfMKHLik8fPNd8r6q2LWvCVP53nyJdPcKoJQ1dyv6wVAEdkMqfcw3BVy1BSxCiS8X",
  "key35": "3pxoWWUzMkxGVmGUXdQF1kQefoontDKQDyTdFbhWSABoofbbHwvity1YPS465u4YBDgmzpVcXkf8GN95uboM8YFf"
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
