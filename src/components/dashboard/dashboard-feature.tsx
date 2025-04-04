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
    "57kxCxvWQbFqSCBSHN9d6RnHR5piHpgfujyseyQicNXdPJaLjTYpvwqa7BvKzbWQUEhC7v4TLQt2DUpPRfHK8LFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51HJwdRFiQPVAuLbPjPXASBgi2Kg3ousWENKtr9eNgvsvfZnveWLuRsujQXDrQtnBedpcSLwGYwoyAbMFBwWMj4i",
  "key1": "3gG6AwFg634w9aSQggPihTMe7XEkJKJNfGLibgSharxv5CMZppoj9jWpy4F4trsz5exZeHE1dgrCwV2iH359jXCo",
  "key2": "318FPCacZ4yfszSvasXDXquzoqQMQ412Au9Bm3Jj5pSKmNbZDYFeLF621bE33ypLfaN3pwoc5HuKpaQWp7PPmWhn",
  "key3": "4j2SSFhfF7SP6L7gKJPtpWGuv7wAdGmRJeFY7zSaH3m5Ms9uZULho8qr9wqxwhZqLLCCE4BGxiNefVLjP43Wb6ey",
  "key4": "3b9d1k9yLkdRszUk8HLUbgXvxemeb6M51Jj5v5Mme9iQLFWCZogj5L2dCFNwL6rZc9ukAaHfdQ36txUACTmjwPYi",
  "key5": "4AcfCHsxTA1HE3EAtyCYvoWiEwaMA9fastckaxRuUPeX79g4b4iddKkfYmLa2MSxEMSQ875kYSiCo1iSZoUhuH8W",
  "key6": "4JUiQZbBwvRpPGcBu6Cjtc4VuHMqHEULnaSzxZzh5MgFaK3mvnmzV8m8PTDp72e6WZTSX1stV44oUbQfs3QSNMxk",
  "key7": "63JsqTWpG1QLAWnGTtXX4ER7hakrFdiURGPqWDH3vQAqsAfrfMCtppjfZ7Gjm5R2TMrj1B3Q5fBLKN676XF9vUxU",
  "key8": "4m1GynYJ5F8YmPSNCAvgjDXnTNLjr9NwQoEHMYZD4jtoSXmPmuypA1Gue5MnHZqgYnrcqLyn93R392ibDXferC2c",
  "key9": "29Fr3y1S9PTZmPDGG6oCdKaopJaFnA52Kr5JJizJnsEhpuCCjDgZxJLafjNTaXrmWrA58fMMrng4aYuSgPXiMDQM",
  "key10": "fHZSaHTFLJm1HKkvqPvt3vbeGKNB8B6T97KsJTrpUoJKvGYTWru3ipvdRfifEJjR4vc6VtYqSrLaU9n85w1SbUe",
  "key11": "rGZKPstnf1UiSRRQo4EuFe3GYHuXYDP1rGGkf3hqnjMtXht4XAQJ8zUXLSFb75rMfK1KZpYYqTD8CGd5HxdpxQg",
  "key12": "h6faDYKFVXT2dbSaqBAMcvNuwH7sESvU9YPEiFHNvfiLbxF4b11RauUp9gogAv5yz87uzAMWcke2UrTSLWPGkLZ",
  "key13": "2GCuvwU6RM2gNoinksfyXcXtTGo75y97tfsia6bbCg36WmBSZnk259rX1uSnrhwCXic6gZfYEwpHcts8Xvh8V6rr",
  "key14": "5pdT5PZLDAgL2Qz1HJybfRykt2EpTP7Ds1XkYDnk45eswVsRcWYtoJDj1LMVe1FGPHGtiwTK7H9QLGaNQiyck3Dm",
  "key15": "3XrmQAGed8fzkvYZFgKBWjbQMdxn4bpAGSQ2qgEgjWjA2Hp633QaofD4iQDN4CmYL5LLeEYJUUsiMiN2sA4xQGcK",
  "key16": "2NghRsXztwBP356iS6XKaSdnFHfEP6mJVxnUsZiKAstvtaJkSwnHmNMyLkaQJjhzyc3TW2ej25exeW6VCd3PyUGQ",
  "key17": "4CrunweNZpdTLun4ka376ZTaRa1HWM5XxVQFAp6s5T9C2wK3RLp7894RyuG8ZGbHZJ8L9hNcoTddoHa2SWKtYHsv",
  "key18": "5yr3ypB67e4QhxpsSizizdiZDLFo1dhVQoLyNrotFXUquTT6tr1usZnjLiw9csGbmwJYT4HupWLx4uukN8DAzcZv",
  "key19": "5NPNgbCpbUMuTG1Fu8QAc4xiEf4ZbXZAemVAR7SyHJxTfZVz41nEdbq9WcSvawa5f7mep97upLf4ceY7KWgMbwff",
  "key20": "U6pnPuGhnmcfpBGyqMpSjfEhoXspuAMDARY7zcGhvBSpSMEAFtuQpaDySqUFxRmxLCvAbnMhotDSDmriTfpTSdY",
  "key21": "34mb49r2Ld9LJHqtiLScdijVdxZszVZLQuU1jcCPaF1V4TsMNjn5V9iSh1RJCtmj95kuoEbA8YiZA4WA7KM8KN7B",
  "key22": "a2PapBCqorFeTLpxKbKoSkT3NpHms6Bd7UUCchkSFP9VZm6dw5phB7PrvqMPzS46voqNHVwaB7VMyJBqorg2PNF",
  "key23": "5wMPmcnvmJnZLSLK7Wtsa4oBeYUT9amZSrZr836uUYDK1VqHZmG9ZvD7JnJ6n5T5doUqxPrbNjv5QU9ubSUgwYf4",
  "key24": "uvGbNwKDtQxN5qTXXhGEru3w3ZnsL2iinHStrEDCcgJLXjvQnZmXH1oeLAUgu7avmWJqNdCfKVguab3L9r2RAPe",
  "key25": "3ZQzhYHosVTCgsPSnL3TeC6oYfyMoXu3rr3T1dbmzLVKxMb6Rcr7a4bcobgLW3xmwKTYopqydE5mwXkMxPespDcn",
  "key26": "5hNoY3PL5EdXhZ88TUyrrJqy7buHZTDgckti7DnCQvHbqwz6zXiyifhENXSbu3SxdvrhWAbnU3DpiUGEiyiLC4r7",
  "key27": "53oh8yYBcXH5hhh4PWv3yuBs4DmZXnH695CmWR2k4yeyzxB69qaPY44ywuTKYhwG9WFFXMStMNPR7FD5NA44KFva",
  "key28": "2UDJsWqkxFV3RpyW3AGotHcJDE5TYKkyDzwQC8VGhFC4nXArBagZyLum3Gw9ibkztSnEE1TPfsb91ey1kAGFp3iq",
  "key29": "2L8PDAw5UUxhcwXLd61Cc8h3NqAJ6n8W7y9yiYGjyRJ4D6fYaVwJh5w6qieaRaYehPMfXrjnimj4LgRoUVjYYLuc",
  "key30": "3zwzqTw4Y2bk1nFMrS85SuGhxXKLy9atwi81ADGdK9P882PyikrYLASm9THezpzaCtvGdDAXhjC4LMTcJ1HCSqRG",
  "key31": "4St7Pk6cGzggCeMatYLKC7BhK5Cb5VRsU35vBjjN1ePVBgFqa42rKGBJ3TAWMxQr1iCPZLSAFCPBkjhXhWdHJNTR",
  "key32": "vUCqkEZrzki1JumZNFNGCTYkGQ6xnmou8pAnCp2u2nxwhVAifeRNPbneuBVsftcrAznk4MqrdDSJMHrs3SQ14kk",
  "key33": "5qqEqvjvYq2BQnvKhjTwhSpSbtQg1LXeru7mGBou5qyK7AzKM3AJPzWZEGo98nnruEQBtPGnskcZDgQjAuQKsT9D",
  "key34": "2sRLsodDssPkzhMW8pjgXv9ZEKoxrt8GbdKdWcQ32n7GTTcWpShZu5VTty5tFYiQyy2f2WjnE5AKXmx1mq9kwNTC",
  "key35": "3E1AKfW6REkQQcQfuR2FreCjTAFPtm6rd7KHoBtgmwYwUZS99RvL74Uc1J6T6o43sJ5F3bjk6D7H59K2J2dMyweJ",
  "key36": "3d6SBhsARX8K6RWFB8RRT3SkDRK9XQUh8kh4cGTwxpkJ77ZtcToDUiDKy3Mqjs1bNNr79VzGL3FcgM7Dz8HoBwqT",
  "key37": "bVv8bc2J97Esoj4koyrKYsaWQTiBqpuoWfLsysiqHKBxvZ5r21jd7FhZzRBXfAePZBZ7G6DySy25r9wWnZXVLHY",
  "key38": "5M7ytVwqbPxuap1YjVUTj14FVTrCdFTfg8FfDb8bXx3EsoAt8nbdSLBhRBEfdtTWMjjqB19M2TEsDVEbxBo2hEYv",
  "key39": "yYMCmApVxtBz6JtGJnYSkMTRLu9PpzMjk4ujMEm4pw2t4zckKMFVkQFChPtQQrtyTUaN9YrFKQQo8nzHMNW6ztY",
  "key40": "52mVkhUC7caw7V2uKvLHH5hajgfNdyZvbUEJfYJPo2fv51w2Ck5wKMQXC5fbHcaJcjYdw1uzmJSpe8ubPo8b4qbB",
  "key41": "2szATLzPTQ7nFoLmsuLZrUA16JXJfDrE3tbNp6g8XF7MQnpDHfUQt2RgfbcgF3DjV4eXvGQwYZaAVJRMfvz4fT3p",
  "key42": "42fFLfjNczgA5vTe7tB9T6UU45G5ThLfwisdRApAHJuYmmtqRc4AdvvJVxHNQSfWkyWwXDxrBf3cfmub8E6rVB7u",
  "key43": "2pQSS74JEqT3BbCopiegM6BgBEgye24f3tyckKBReyR6a5DMypuEFTToWWLjSd2GxMHtrPJCAAmrywZsstMuPJ2s",
  "key44": "4rETb3HKHBzbvfG7XPsuvdFt93wKEVHNx5T5XxiEopgUN9LP35YbnqEunKhjTeH3Lhwr5fLjjuFqZLKbDkR1Jsx5",
  "key45": "32mPR3iroZnDfqBab4SQux4ftvKM7XTRz5sdCYKVa1zhmw4cwZLGBceG7rJ91fwA3xsAGs82gdwJU1KFTbTw5MWQ",
  "key46": "3JY1tSLjGFfhG9ATYAK6QrhvgDTfs7qnnaDzDLffSkVjRVGzBMx7MhaNShxjH6fHnWHkTpUdK2kSPnN7SNtRAsoV"
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
