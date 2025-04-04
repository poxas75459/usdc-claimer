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
    "61zbuJJgZNCg1Yt7B129iFAFNScTr9Q1t1qfQxR74F6RcsmQ628RTFxSygiJYGh8Nr6EyPfqUvtN6LKpAAsTjWNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7r1bWRqXU3f2YSxXSAJt3xs3xa8EfnHvJG7JJzW3fc79sAyd2vvCWfdyZiRpXKeJ5KTxhWAXTBGPi1mnfeqHaZR",
  "key1": "5XbSBJnwrzdS2YaW75h5WpPFw1LJVUnBnDjnZmJFUL6Az8gfewRatPzjtwcf23o9jk2VZFYRbCWwKUqzZWuqeoHS",
  "key2": "43imQqacuqvji79Brvqo7GKe7JdpUToEd5YwHHWJ8y2CrvTdma7UR4r7iDpqFJn9Ugg7ynfrNmW5rkZmYfhQ9qW4",
  "key3": "2FCxRArJKxAJvLM5SaDhpefrMFzm4ootZcte7YStKfxZM3jUeMMHqiHdamTHepEqGqxeiCXuYiB1tuKN8BfKcgWr",
  "key4": "5s4TvzFMnK4wJtUNEaNCgZqVr5VFaQEkXmN1hAPBKSM2Zc6nt7m3cvEReeNoqFVhu5ibpuUgEbNfocG4pVHG6bsV",
  "key5": "5zReHm8ooGPcEMAXjbmorwBfjsKJ8jb1pfjFy8LHVbxshD2YSNoDYAfHvkW64WJB9me54b4SrZD85gGNHtRW7Xay",
  "key6": "xhRKUWhifTmUrwfXGz5wLd5NhUkrbCxaFyvadttuSbRtkXMer1iVmneKfsjvixfFhAVcRsRJFSGkViqkw8xt9YJ",
  "key7": "4n7pffLDHhgnVQEfydaLsum17ZjkomWQKMp3aoFs6FrbwMaH7aSGGmpatpE5kBWfhUFhjLiVkACXXG4B5o4YTEnA",
  "key8": "3nbxAMXCa4aLHH4jkRnPtoThbYPSz9tNRRYDZg2vKDZrLCCmVvzqPJ5LrQJZAb9jNSS3VnJT9RFscCEAw3p7EMmQ",
  "key9": "3xjwW6jgrPqb22tpW7v43dcV5ThMy6DyvGRVgMf1hkv9GQhBSHC1UoqPUJxfwq744UjRnydYasbAcbbAjZEy4SYD",
  "key10": "2xFnnyLfEaLnjxnGdPtLkqBDmZ4riKBnTP62eQLCmr5yY22WG9SMLr9ahwmhw3FsYQn5AQUmCxM2sM9yRSUe3SbM",
  "key11": "2kpwtJViXJBCdy38wUrR71ck9vqLX5gSf3KLzt5sQTDBYisQjdeteerUwYoVaM5235hEvfBzrAnc87XYWjZjQAjZ",
  "key12": "3RCrgqdStiW9fas7vUSMXi8Mde2J7ZTwEsK8ct9LY9kW9ugMfaHDvj9wwBq2PohtKr8ctHPH3QxrqyjqpMLHJ4aG",
  "key13": "DpJQgdHkzigRsmL2hGXfFuXb5VzydLb49nHsDG1YenfceDhhcDvCtqSwijVubRugATzStmzudARZaxUtmJv1bLW",
  "key14": "34b5sGJfmP342tdoDgvbiDFcZWkmChDytnCizibU9ynvSb2TpkYTFdFybmz7V2aGPn9R9Lu8aHTgML38bwUALggD",
  "key15": "5Qs3Pt1JvH6ry2d88nnFqWzQcc4YpPWZYsYrsBiHkLXMUd9wwFwXuWs7a56MqqfqEj4yuThxbYuMrcH7u4tn2FgM",
  "key16": "5Qc987sXyShPkahVAnHkrMaM9jmsbiFRTXfjQVqtXfQj1TY2j2cPE13uZ2cGrbPmEx2JSbvkN8Pa74QbCJwaAuoq",
  "key17": "5WX8aq9v6grVfbNEyTgSxDnm4ny7TF5mz8Y1uLUrMiZ7zBKN56G8eT5rXkzf89V6gtZCSPev2mZth1qut28oKke9",
  "key18": "2fXsi8WnR7bLudofz9W3xsFRVSHSWo2XJpy4FxP6NfBY6dJ5eAbhdUVttptwvnZWGh92cAzfAUndNWMDZ44bSsV8",
  "key19": "5LJmVYmVTdQF43DoRkAupPGbThnbYfGoAirHnVLVvxjWRWdfCcMzgaeRnpAzVDaQ96qDTTNbpVoko9CK9saao9xQ",
  "key20": "5WqxQTB4mkqHTN7o1cQDC5e5o9Bjeh8pJfZ1tseUV5aHGxv8jD89dM3zpevgpZch8qnGQxJK6tPM9mai9fhktwH6",
  "key21": "4ufkWHyKQyQwAaKWqDDZ65Vwpjdv7Xh9awvACtEzDU8osTXkEB1A9LPkd4wt2WmMKriixP8iEA6vvPXRMhng344o",
  "key22": "2Zbk6CEwdpuSceedszTq1eDEmvM1SzyHhvVo8pAi42zsGM6Q8p6og3NYcTDeYjoRB5uH44Du7u2cf2VANy9wXCNM",
  "key23": "3cuATDqBEjQLfnCcAz8dxGSMwk7xq7rRfjhDrvBkV3qpDuHaXY31oEDpqRQnS73YZgf73GE69BBLyDDRvnBDW2JK",
  "key24": "3dYv54cveEWjRToUxtSDwwnzuL4rdNw2kZq4DUz2bPcsuiYQ4nTfaDnn7FVwdi3k559iaRzixiBbcVnzcbvrGKPL",
  "key25": "3dQMGKtoGTjGSrnpA3BWGHkf4NeXDbK6b7rq3BPGeCoKEhL83VEN5GF7T5uFCCPGuD8dqwHRzVtkx4UDP9YAYryG",
  "key26": "35WACazas6xME7KCixS8VQgnhGEM9BFegBV5nS2xttZ35aX1UkvPpR3cQVAzMd5RCzKPXaqzBpzGHwwwJWAWXfU7",
  "key27": "5YUiurAHyxoiyteNonBpWthiLnRHfqnH9BPKLP6XktYGexM2uLWMJ37iz4wLRuQA8YzsqqYoSnQDNLW9BiTBw8qs",
  "key28": "3ptXejQzZ6Wu4jWUZuqKa2f3EY2hvP2T2cx1xYx4yZQdWNFzcZteQr11YZbCp2rKg1E3LTjDSQmbRiyWHihvxSbC",
  "key29": "4qvdNEQfuR1653wzA9svKtqL9j38ad9hJrLpM2XhCjf8mQU5YKqND1rwtUdp4Qr53bFYcnyCeL7J5cnnYi4Mvakg",
  "key30": "q5hKv8wgR4PxQsdQEp56WHcrurtQr29TqX2fJyL813r684HhNYzdWprHz4Bjx8s3yxvU386JUQbSATvQ4QPKCnG",
  "key31": "2Rbey3ukpEUN3jfChhw1qzhs1r4uTrvHe9aadPPdoYU13W3PG5DYFtSvnRY8hrtaZBUVkBDjvaBY49qTJ9FwGEC1",
  "key32": "58azMxoKXkRQ5jrR7hV7Sh4aitbxmm9bLusEUFCMGmGnZkrNmZkVpA8QwtMwf8TuF3tY9vjp2qi8XK5bks5NLKy5",
  "key33": "4Dtd8tveAjvRVNhJjuhjuuxRbZdF3kCoJu2ePorKk4UvWVHxTx37PzfH68citJAAeaqqyNL3wQcDmdoUgwHd9Szt",
  "key34": "2PvKW5EEhtkPhmg5vDGGrNNPbTKVwdrK6Zr96niXTdQ238w7J6URaN5mm7Kgfp3Ba7MsNE9pANyA5n1YGdUdBq64",
  "key35": "2ooqMYJCnt6m7GWcgLA31g4qkxJRMM6vb5asE3pHTmnx6XJ7WG6ZUdXpe3yKxnkzG4pmdNT9NkaSsKvWM33tfLSQ",
  "key36": "32nYPDsBdf1NNpeBJHVwMXWuoU3cySw75ffL8428et2wkr63C1GM7zYF2vfixVdBq9Ub7XwbDjWFzmdHp6zYNjw4",
  "key37": "JNnrSoReH2iE1wqACTETZPszPyhKstmcDjHUouQjcMpsLjBPLUScRhj2vRppEH5sXURqJcpiGbTyBNtFBLX9vJs",
  "key38": "3R6HdY9N4YjXxJX7eJwTxbhsQpXr9pub1LBJeuQKw54hCjMxdQb5qemzE96qep76kGDhrBWwjxgkur21yhMCH6p5",
  "key39": "61s2YHKuwgPzLQ3KdjBf17pkojYFkCPfJPttZXfFaFiZ7ZPoA8YPDt877JWUXQHnSb67AzGk5LUpKRV5rXzRbXuF",
  "key40": "2ofe7nWAnMfFbiJoBNYGcbNkVjZBP7gX3B9FhVS4sp9BTwxFczfe92bKG3efWxhuiqbc1i8horwd1igPenCRDMM6",
  "key41": "5XqzVkrAwqEViet9dM3shjFBDaAw7hpU4YrDCu3gQJ9DkpRm5K9yM99oS1rto7nvjmg6HnmVe1xWYvGhFev2M8eq",
  "key42": "5iqrHxorVqvi4SWkSJ8XM1mMnAPEQLXwZ8wssRxMQUZFGusoHjy3PHXrjiXJoSUrsZQWeiLeCEh2pv1rDJQ1mJKq",
  "key43": "4jLT3mp1aJve8cEpimSXJvh1eDv5ZAJdhiCaJNepxHt1VPXy9RetKE7718tAVDT9dkkdbvn3Coe4ckQ48nnLvJeK",
  "key44": "5CQJFh5LyvWmpp9WpSJMzSt1uigvN7SKfdECnTDQUHsuiD2BNNNUurPmFtPC5bdT9qR6ZLVfiLxQbzQKW3RnKpn9"
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
