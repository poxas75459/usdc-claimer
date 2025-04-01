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
    "3FNmJmJTR4grnEJQ6oNt4p7PuLVGpNsokQMHBZD3KgayVPQ567Sjo5JZ7XZCXNvhj2m9jKZP34xz8gqSEr8x4hLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Suha7CkZt5DskJ3s8ggycbVrqV5nvmxNLD3NdvcuX2qrhKYdDuEhDjnsPPBGQfVtazFJ4R2WioBZc3yAJMAhDzo",
  "key1": "3uF8dzL8u31a7cCjd44kQc5kc7gZG6pku8jov4EdmEwZjrsrXpZxV3YvhKsQpJNktDpsyJqMuK6vBFEi2AKyDhoA",
  "key2": "23GZPh27RUhYy8HpLjCUiTQC3D84bAnmhfy7qBVtLyBwDn2tySTr67JocWCjUd9uXGYUo3h9Kwiua4tGGYQpxbZq",
  "key3": "2Y8LR4sHhFQsarcWLWfewdJxc2qB98awQM7ewJotoYYkm4Nmf5Ka7ep5Eh3cpF9DkD3SmoSMosVqvvbCEwZhhwdq",
  "key4": "2pz5P6zVJz4cFM4Yz4JqNc7ixh38j1ztVsgxLKw2AN2quGMeRcuK9Hu7hhuCTmZtXpTjprRwSjLjPXXvQEXd4UTR",
  "key5": "5xr7giXxJJcg8UXhV64kL2qy3QFGWJ6zW3q8oEV5ERrFqCFxCrRt63JqVucLYwXMCfWVC8rhwFyponcmtckmS3Pg",
  "key6": "2zr5tEvhExgG6Vwa8ptho8yPt1rccMAbRpyKKk8zU77ZWtKsttQpDwWDfE6bQqwzTQViAdM3CdAkk4G5Hgbg9Vbt",
  "key7": "4hjsYyurd95cn8FzrtVvjHikGq9b8ft8u2vs7hEe89abqn4PyeVDHdGV2FiZnNcs9k4UZ8xagv4xEk4UNK27mTud",
  "key8": "4thQbRryFp4EiN8eUJZ3ZaVQmACtVpmuBaYJUHYpz5bzmSDtFS4FXfDSEA7njit5H24Ejv2A38KZz7DkkXY3Qtjj",
  "key9": "3LLAghqbT7SvxTmQEMDHBzrBUay7k6ADHDSjRTtPFvXSxo9bCaTtv8NPx6pvBi1dS482refdnkGSafn7sPUs68i9",
  "key10": "5SDTq3XnKnYLpfzMYzeXjRhYELv5LXNbkWrEMV8kDNJeBWeASiV7nRzh3eXQa7pRMpMjzLVAJDgr3m6CaAD5SjA2",
  "key11": "AU34bAzNU62s6yagvaWcrC2fGFU3ry44cmV5LQRYcEJ2L8PfE3i5gDz14WKYvovCm4cR8bmFH9KB6fcnkhyfqaq",
  "key12": "33HgcFJbBWH19rrxyuVSQwpcyGpdZmZwKhHSiNqRrNNtR7WvKFc7cJe8cZ8nLRjtSQY3EZWkd1vCy1Ru42YBc6Xx",
  "key13": "5NBefTYzQauMry8GfsmStd9euG7PvJdnkULfrcmcTkYhtSQBVTd7nPxLPLrkjLq2AZ89KSisCixwEZvCQYF88H62",
  "key14": "beAh3XBRbYNjLtqty7WfvnBupZQN1RJ2hR8UpCFk9338NHLfseUzfEM8kRrugDbtsKHmoW9ADzaotPsRPjDS7FM",
  "key15": "4DARW1NftZ4oHyvzZAYW1XoCj74YeLt1iRMxdxXTMUkqNX3Y42ERNkRtueVuohkyMDboSFnHUaUTAVxAMUUHVmre",
  "key16": "5HXx2u6HYzzWrBX9ERjRfeVFB9Ygnsr1quaHVdBcS4Bm8xTeJVkapDjFxeo2ezyaoJFpw5su4t4FB48mVvp5ssE4",
  "key17": "s1SKbqB9HPVPEArQWAP1xGT4fWiPqFe7yWJp7MyiHgeACF4gaEgWPt3xQ7X7b5e7s8eFmZXDdVsxxBpk66wWEGL",
  "key18": "KPwd6eW85Fq7KHK2YjF9frbaRCYzS39yEuzyuwKFXaHs3BWYA7GWCqq16p68s3WG7Ro1inBTrPjzwe1AAvgTrUq",
  "key19": "2QY8JLmrS3QDNUi6yKnd9BNMNvmT7Hh5qqnGPw42rPcXveCEd7xZJXHyA42MnwWbUMLDXsoFUsUb5tKdbcue7CCT",
  "key20": "354JRCLynoJeFTsFrf7hNPW9dLHsqXe9HgxsrjnSXjVds5hHaLuZ1EJKhD7EpQTjSonDHB2HBmQaLDK7dtbbmq4K",
  "key21": "ZpsjntZnNrDaYPpsHuvdHtVmarhaZjXFEALBWwBJbYSbWYmjQcjxJXb7M4xmG13vREVnTWGTtY5XqLxVHdd2UaH",
  "key22": "47WrYqUpni1HR3AYV3D6MBWYD8Txdi2ZpvU5fxCz3Hdn5n4bL9298t4auktnpqW4y7XFS1LuH1iXBjtVBNCRP5NR",
  "key23": "3LZ9m1pGNfqmoCYN8BeYcdh2nQnFAFFggYZAEsyZvPgHShaBM5t2eetK2Cfo5FU7ttNzWr7YdbfG9qjRUtMwiJ4S",
  "key24": "WZ4syXzWckxsDpPmBCL5QRfvcnvL46AUfPXsk2fZgWPJmWCFD3bpwMnATKez74Z1jMSJ4dvaR43R8P71gmrRUVh",
  "key25": "94iPdpPr6JxGMs2Pg1Hr2NifEc9XBvhAdDGnxNKURR9JLaKD4xNUqD1aMywzTMryPYYqEJaDfEo3QUzh835oosd",
  "key26": "2CtL7JNisgEeZBrmbV5dSXyHQkHZqUQMXFzLd8uDp9Guusn232GdaPhKMRjvKpy56sHDin9M3HKMmsJEKB99Ti66",
  "key27": "455qvtAs63f6PWDopESBEtQAVwyzhHXjiboTdByVvKFuGhPWdZbY4c1Tvf6k7Y15UYzdtwhrMVBcZbHeXm9sLG5u",
  "key28": "3JPYmCMuHYCSQYb5DwycpKV3Zk3PzArbatsmyAW3HLdiTxNZLxpR3WyjhgojfZREfMiwVMzYLWBSV6tLLkwrtk1u",
  "key29": "4ouxyAvxCC2La3qfdDgyWXTRyDnXCiUdJc11jZHLHK8MbNghsyGuHHdxxkZ9CbKhY9SaEJZmwsXNdz3fZZPoBNvV",
  "key30": "3cEP79u9hypw4PSKMEQxyBjcpULmrUCHnnamDNBdbF5QjCqQMNRDFhkFe6uZ8ZBPzsU7nYeLggXnKYaazLinUcXX"
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
