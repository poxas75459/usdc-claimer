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
    "3nTmKPHkZjoKnX6SvG4hvqXCErtNmiQfPrMrHjFhuWrUJ7U24TWcorTbCSHmzNHCxJHBAJ2x7mQuvGZ2oxoLgw3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mfezwsjyav2htARfJCk2saMMwG6yxUJMGmUmQYnJVDwKCwHzcdwHkPAqrXKtzEKL66DszabdSjz8uoNTDqMa8Hh",
  "key1": "4pGRpy81F7nHFZTT9MoXcwGqCeu92ajufHjsihhecfijGrGJjPcAP4iHNCfHymNmwsHbggYHZcz2sCJAUMc6WG9M",
  "key2": "3q7vz8SteWmqMPx8DkcZcWCX1aNV4d9WbJdvx3eKRgmrRNneBAahj9GRrhFY6qoX56odkKcAFrDcF8THxr7TQoAG",
  "key3": "4APffXskbs1aYZupdV1MqR18NUTZKuodEzKkTCA2atnQtoEuand4pUZ4GXyGVsMqDaFRAHcURfCXmVXn9quo4of2",
  "key4": "3NRw4SuKkJgAmeMANKhbWmtLbMWFz4ogVNNfncDMr9kCTs93hB83hs1UDQu7CoPFEhs2f5ipsy22u3k6kiHhV5gy",
  "key5": "2xyFarEL1Lc4wHt4nRGCusMiS1nWgiYEb3SXwhcQfCDJ4T4cJNePzauYDPLjUCrA6JuDC79B2Qe8ZpBYmZ8VTmqM",
  "key6": "5ajTqC2MfyLeoG8QqQ4dt5LNsmDCov8WxLxAivp5DGw3TJssgUbzrb39vdy7neZ9pAkrG2m18jAPEPbYNgdY87je",
  "key7": "tPTxfWPGFtZMcCLLw3as2NX9uyoFrKkJLtdQ9aL1EWDuXrQFcVFevyi2eARrGEkJu8x9vEpxZzwNUFUBJN6x5Sg",
  "key8": "3uzcFstKZmqVvW4sQy9duRD6e3Vc3dg9L3fhBPJG5hRCvCVjkvtNzBk6oRjgoX24HvYhuhv7QrBepgQ4aLL34s8X",
  "key9": "2GBb9VqKxaMhVvYPwxKBXPYrsdQaEMERDCrHRBgRWv9Dr3QvTANMxAanEfKiziYgm5V9hu8jQQafBUpwswZARpjL",
  "key10": "38rK2AwUSDJQQNke18HNR48wKtb5WPRWD7Mutu42qpN6nwdLjQc1tYVgRMUHBXnTe8kG59K4dKd85nhhcDsTAYGA",
  "key11": "5DjoyBczoGfkme5mjEUFnX8qc9RrVZwjmFz6WPQNh4tNwDSrm5h3HV63kNv79pCqoeJvVFGmu67g7GARXqbXysgy",
  "key12": "21uhNNTc6L8EX88gJWTBhYxGutSLVZvbj7AgdoUN8xUTZecFnibzUaAbzoU5tis8KDckwTLZe4jbtTLJg3cfopE8",
  "key13": "RWVWpY1q2ekdmJ7zzsGCTr1St4Z5rcvvTMAHzUbtHzndGVF1Hz3Lcg8P92xSx4QBV4fhDBzT2hWASX7wggsgRpB",
  "key14": "3Yr1zvy6dtYpRcAKCmy1paqd6Eb93CKP8EBFzccGJqudBscAPkEN1wWunozharLJMFsWSy3BdHU1qnuWW21yy75U",
  "key15": "4cMmF3EJeQ6ZF3Jpg29AiTCpQCByRsTPzJRLAkHXmNkkfq1GTnhRiHmWMb1eH3hwdJKc6ggUWQVqUtsaWEQSNcwq",
  "key16": "5toAAuEnUAYmRC7L32DKHd4ZrfFK58iZpvKLAAZ89aCYAqMPjfgZqBB8MuazpUk8sVz2XFkT5agRUm8Mf1nBGeBN",
  "key17": "3JfuZGoBQ7mSNZgNreTfZAoVta49KEZbyDx1YNuXUnQjYwa8N4m4miRtPtRfoidtufFuHE6JyoFPmDQCjwtLdzs9",
  "key18": "21mZ2uL2Eu2RABBaz8ZicwVy6hmN1bCiJJNPPcxj7JEoBAJxJM5uQubXi9FCRepaHSZffc1DVbWFgPSus98sWZaN",
  "key19": "3jo3jfRaEGA2v9mPUWEg7hYzmPTWaKKHxuNzJwhMtahzfuetFtG6NAsz2bueCRB2vkyTWFqUJoanHEHYNm8k6ymS",
  "key20": "4Z4DXAnWSRxj1ZHE38SWZ6cth9CLqPASEcpZDon873NEfRPQf7fyhduiPHvDrzxKs4SEXv44evPxHKa7wQ91qLia",
  "key21": "1tq1NKbDbVWUHaecvsBLjYkQWhvUdUELzkbSUG95zaBxdqNZs1tqSutt5dFCgVHpSpxv8T4gRNipU6CVzQs6x9u",
  "key22": "E8DdD3U1Qja1fwhiKaix9gqF8Pds6Qqf6j5aEkoJnxhwNjHJ49vKmUiS3hQutgfWAGskj11ERXPpC2DjtS99kQV",
  "key23": "3U85wxipDsSNtggSP5xK11k6ExikcGRwvsgZxbLSJtP3LtnMeBmbkvk7PEKeR8QQz12wBrXMFbZGdeyAvrDVLQms",
  "key24": "4groDgu2xjf86qmSTaxsNhU5Jy5TdcNTFfpTsz4A2J5dVXDz6JTRjh9KBSw2epZ471SZ8Y9nqjgwzBPtKY4QakTW",
  "key25": "5NmhH82keK6H9H5kXfVbZo6yxa2qYwu9bgGSg564sH4NW6CNTsHnNw8R9SPcdsLNYX5R1xVyLce4qY4sJ6kaZCy8",
  "key26": "5ajQSYaqu7daWQkekp1JpqAHQDR3E8RNCztGf25n1XxDsYUCyZhmQ2jJ5HnRPGMB6Wh9CrJBs5877RHmNtNKUt2A",
  "key27": "n6Y3Vb3SdW8jPy8T7jREwyHMovorUHqTtx9QMNi9vxfSbZpnWJ4HsW5WeWztvehMrj8wRxpPLgw72nPomMDB1rn",
  "key28": "3XaPL6ap8FB3jVjyAg2rPfjAKnSUUKhJwyxhX8VdvQrLErhtsyDJEcygcW6XWd6xG6hn7uXTo9yQ9r3RnkzayE3T",
  "key29": "VfcEwGPhRWjHEZ2wjnffJmsFmFdHYb4DWgcrJX7B9YyE3EKyYScixV7bcJor9vmDfN2VrZ34iWxLDA2iDM5SAKM",
  "key30": "4ZmjtYpinYd2X4hzzk9KeTuCxssbs1A5URAMHc9RVpFZGcua4oBYSXetiPXptNJanFnDQdCkrLRB6y2gAiyBPG17",
  "key31": "5Zbo2sTNQQoNR93hHq2faJX3s8i1e6zexg72szkwk2Nxri7LiJ1ZEas3Je1cUWaArjtV1ahNjeJbR7sge9wZRmae",
  "key32": "5YZ36z86Ff9W8vZmfJGi4H38jpJKvhbyogevVeUJgRKfXGXdeNvU51jPDCjN1qwRxSGeWKKXtcGCUGNqVbPaVZt",
  "key33": "5dbxdGsUqsUGFcX2JukbQ9HGXnJCKH88iYRwjX3Dgmd7YnLB8YSuEwakuxxENth34L5VNCKBxJSLUQ38NGbaanpz",
  "key34": "4qTz4Gf9FStT4fAdmU3yS1HhRFAw5RKkQ9qy1nrNa1YPSWisrZ4Frj2DLLESwqRXW55N1h2L31YfKG1uJjK4L2m4",
  "key35": "56NwSG84WBB9mtH1mSjbPLQV5DxpQpjwra3GLHqSoAQsRmV2FD4fARQqGpB8KPYpgHnf34Mp1dvchhgQQBnmeynh",
  "key36": "5KvszswY8cb1kX7siDCZDtNSdJvopUascR4rcf7nioNZZGM224xost4EHECxy5BGumNWAEzjgEVJC6TRyRz7ZnWV",
  "key37": "3eucDDaFX9J6Jv4DExemPYorSo91zhUjqMSB2RGznfsftiG7uqC3KUNEsSHdS9mtTwczdkhgYqjf3kyirCjS5V8N",
  "key38": "3YsVsHkmRTi2uU3Bhqzob8yHB8Wk6kFyS7RaAKbyoJr4YastpGkuNftegryYKXH8AMMx8uvu4NZo2B9TyqCMjUtQ",
  "key39": "5paE9h5KjJyG4sVS5Y9tKrM3Z29XXQJE11Gn2VC6Yjdjm9qJRVHqV6gThRq1sScSsKoX3EmKn57coo35bnRKeLsv",
  "key40": "4qKZ2nnYJdtBAwmTPkri7Gxfk63Bkg7hevP6sRcJ2EvzW4hUyjmEvftuFm7k1TokWr12wENYUf1T4UsAMWtYXTbt",
  "key41": "235N6eNZGthgvUD3UQF5xqv82YWwRWpKpqXbyxpF5gJgvy9im7iLG5YosV6yh3mFjHktaGwu8LJvtsDpqCytX478",
  "key42": "5aK9kyqEb426NKzy5eyKSSxSUPvW5Z6K6Pu37ALNh6tdVQDgeJsENJs4WUvH6JzzCWt2WQ9pesk5kRfwwYmpy6Vj",
  "key43": "5DXhq2ca3LEqEWbRar1iYj2QzRW8HrAgUwMw9CfEvgRFM883gziPq2U72iJQmQq9JAxBfxiZU2DmTwUZ1ikw21Un",
  "key44": "5FXYarAxV25A8X8FhApTixYPnBwTAg3JN88QZ1H2NCyQtEB8Pu3iPm7XZzNM6MtK1rEtjPPRPT3ukvJnJRcVrFxZ",
  "key45": "2CGCgnr5DpPTk4UF3Aw1LdhUq8kBSCYE9sJ7sv963THbRZbXUMnrSAwvoisMMSh6GN8PUFwhffMN3vTM99Ne2g7b"
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
