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
    "ZizvAcjx5FJQkUNxTueUmYgZrTsxnqACUCS8QMwy9Q81cqiuVHvxKrGkrT8uD8JJcBMkeLCSjbhkFvE1kys4tY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uimJB6DE45y1UDjqVAes7A1AiMvoA6Wajz3YJsvyie8bY2zcqECc1wWgedBjfaSrgmJeLcWvnJJuJyuR2HCPSNh",
  "key1": "5TkYFQRCzwtpWhq7rsVBBvxZXvFaZnSgsWrp13br67jEmaMQZPh3Trki3QoJUsRihrbHoSz1Y2QdaRTR5sokai3a",
  "key2": "5TPSJSufgrDTcwjo3CT5KL7u7mq7V4UmpSqMbmDaCmCAHVgvpN2jfs2yjtWkoCatARmj1cmVssDHnQbmjNMQvuQp",
  "key3": "tntzccVxPpEFFsUvQFF74svmBcXQrL9HsyyCvCVvDYgocybF3e9WUC6S2DUetB4HD6yUm4nvcuot7AvEYhJAeYT",
  "key4": "65vzGWPZUUjRNbF4m6gRqhXvEjWooGjioNzNZiaQDGNr55bb3NZ4kyrq6U7QWMy72JcmA1Qn6K5DDTaFzsJPKcMW",
  "key5": "R7sZFpPwaxA3wDPR8PfE2qyRpzmqpXomq4wDKmbVEC2qArkvpj2vPFiMf5aUP8bxbncstz9SVxbXuuU73EJGugR",
  "key6": "2gBiwQCN4R8bKnvbMkJbJRyyHcwgDNULdrZG4s8V8mBnC8ZoBWS3ofr8jWNWhtE38NZSTuSRzPBcA5US3MwcaufG",
  "key7": "5W3eexH9t9QGjTMuV8cEmzcppYyQA7pZggPfuQVs8nE8WKB248uGyf1BasXUYbfrhnsHcJCCRWUGTotakhwoHB7u",
  "key8": "32xNufNxUMBkL4a3PxSn4PdKBrSXdL77U42Ah6JUzFeTiSKv9HDzYTddfcixm9FgS3xeE5JHvN3Rq93gZ2zy6RJP",
  "key9": "2btMVkRXyutTcp1TchwK3Z3qYnABtWjS2rPrJc2trFh52KBx4PjBmvbF7BW9YExLLMdZaQq2GYPe6oXj1F9M9hsa",
  "key10": "usiw7gQJQqDq531uUttt7hf8MN879yWhavmM4Juc7F3u5CYAkfw1aYrLWeU2WdU6EG6LBfnGnrPG1YrrrZLgQTj",
  "key11": "43ew5PFsLuGgp8AFhQ5ZxvZzWb1a7LbAkCcZ8nKdyqADv5Kh8t4j4Gcky6ZnGqeAupbUtTbcxErcfzr2NTruydFb",
  "key12": "64CYGQ12ygHCK8MYpLV38WF8wuFRbEYTrGrnbbNV3JvwW4Pe9aWUSzktnoyPrMWm7NPWXE9ydzRcHFwxR3hv614R",
  "key13": "3F9QdGx2xr4StgnDUi4bsS4mqTq1uN9mc4mbB7c4PZ3S8XK4Gkb6RGLDRnGKw89nqkV1Dfb3pBgSD8utjiM7nsEV",
  "key14": "2zPmY8mNw5RaZFQAN9BSoGKyDZc5ou7SBSMeghoXTMHUNwDqnU8mJJLALAWBAABuuX5qvqfzPtU4eQzJ9ec6LjNV",
  "key15": "4mawexsDJTZbY8g9QPT4iwTTJnprvsFqRcinELJUa416ptvyo8SJmc74u88bzQjD7mF92XbV3zWwZhzc8BUaFmr7",
  "key16": "4khrv3f1WgQVPgqF4hoH9WM78Zuqvzoa1FWv8yrEyNHECaR9TTCS9wSCYK74V3K4zBPywgwHSh6vMfX3dF9KQs5P",
  "key17": "5Bqt8ZTeWDGZmv8aJrusUF6wV7nY5wcNq69tw5F2aSYWAxNq6WdKMHKYmFMsSa6UT78rag6nXbH84kSnTB8o4JPA",
  "key18": "2sEFhYE5xgzr8QicJR8iN37FFr6F3p5tkFapyg8BVSJjLiwR9AC3jH3FnnwNLf979nuocqscQWCFTRSGUL3zwp6Y",
  "key19": "3DhL5pTzEsiHHRf8Psr897En2HihSmQrW2EV5xhnWohCnw1LhoC1gjBSFAY4J9B9MPtkcB9qCw9jdu6FuvmVgSZu",
  "key20": "3LvRzGjD4xvqrHfBEdbhyuqD2YrkHAbSz88xpDDxAJmxbTfCGxtGSWsvciaBKhE9WzsBadJFhC7FQKNeVHhs4wmk",
  "key21": "4NsiEaivgBs9i1gQhJqfS24YmWgZ4ejTHpieKeYfXjsFvk1YLa4YYuaxaTopnsfGeJUBmybsrbRMmfe7aAS3YcrZ",
  "key22": "Xz6w7reNzGf1XssxbHP1UeFxCm7qTg3EBG687SXXyoxVptTowGzz24Rvm4THRs8xDA7RFwVbJJBHZ35rPU8984Z",
  "key23": "4pXXG4aR5UmMoKMdzhGYdAaSQz2xhZRuPF9fw8pBtuPp91hC6WwUcxP82892oV2BWk31D3FmayA2ZS8UHfzfjAJM",
  "key24": "3RMYSwrCNxuMKQp4ftZzvovPqiuuJrTNA4bXGki6QRR4Gkgc2G1WhJ6u6Z6BtrSmpq31S5NmH4YUL1RYSEUmtGXS",
  "key25": "22RNAB6yJqoF3yFSWpRMyV4DZBhhHQvwTX7zHsMYfgrKY8cVB4euUyzFEtRh5XWp7GhF2NLfe9oCfPWCrgU79JzY",
  "key26": "Tw6hqiNMdt6VENk3AWGbVTZTZZ7H3bQ2v6HFD6AshecY9W9qHRStn2Reu3qb9G3ffkAswJSbh25wF2XaikRh8Z3",
  "key27": "5tgFC9CYzQ5NjDRL35tjsi18JtHQrWiwJUtzTTDSAZV9LaPpnvuGmA4F5apBMALaeeWct5nGa1eeKKa6QqM6htu3",
  "key28": "2ExhVszGKndKqUndMzwEQTtDMH41cTpqa7JFAbCvvoSLzsCcza6JjFFF3azferuqow5zLkGLfzT3NcQ3tehj15No",
  "key29": "5VDC3LZmUxP25B7nTuS3zfGPPa4G3dArc2773mtn9wKFK3Y5ogsxgANFcYQHLgvL1xMePKY5JxN7PnCeEBfunrwY",
  "key30": "467YA9dnPwUXQfiFxtMpgRczkJt7wsWo6eVZ1DSVvEiGXedmFPBMBDyAiJMGb3SPoxzDhneyp3opBPLeveTRRqxi"
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
