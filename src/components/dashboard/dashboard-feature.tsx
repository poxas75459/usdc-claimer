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
    "5PhmrGngw8e4vUSWaZRJuszctXHitQo4pPvwdga86QjjMdsHZdKJmMF7cVNQi2Qt6zK9oAFpgjRv9TqimZSpe69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2529iogT8iHY95BocibFvJV1eaLNC4GuTdbgcMvufB9EKpd2pYsUt1yiFmxnAAaLXLEqq7grSw9EUbvT6obBC8tR",
  "key1": "2VsGSiPWuB7uJD4kqc2tDj8yHLWNDpAxhGWXdQsJq4KskfeVGYXMsuewEhxKdftUCiWxgaParaFWM1vEyTpgZrym",
  "key2": "5szCnQRDU2Q66VzcDs34fvN1TMHXmYexrnEvUPQdYqmJfxaStMBPA9oBRfQZDPvoHq9LkvNPfcnRWvTZRzsrNFmd",
  "key3": "SSeMHvenQuA5p89BDLSESWJ7XYDKiXnze57kf94m1Vq4CPzdeS57wBDFj6YtdiGkBXLhYraS1LG89FVK3rR1Lb3",
  "key4": "4Rzoe7xKd9RVRqJe5foXtzue5F4HMjwz98KL43AQTiNqwX9gsEuewSjk7u8YgpmWRy84bvW9HJTiRjv14DFLtNcj",
  "key5": "ro7rZjvfJNQX8DCRJc6xawG6SQskSoqzPZV933pgHYeqtmnXRPtFZP17RYQvdAFdW3Bm8zhWBmCwNShqFgK7mwZ",
  "key6": "38UZwJaZmv4yMGs4TmR5FbtmL1ng9uDSG3mxD92fkzH5w7SZKDeFp9nJi8iefZvEnUA7xvq3yo6RGgUtD2uEWD1T",
  "key7": "2tn3vvJ59s15xMMwcD32u1oDFBS9i1z9VtVSQ3KyNgTUSA3TAxz6Tyerr91nvJBsYUDAXuuaMbFrxzvm52yJnstx",
  "key8": "4Y7RLbWLZaYXEzbf13q3cyh39PESgkeyQwVXA6MBP4AL9C2QTuMt5vMi5CsS1mQogBZUJ75JhNoNSD5AbdBM1nMj",
  "key9": "2YpNdXRN5A1XFoCS99cxTs3zUDLtfZbUZ8pFABk5cNg4xNTboyuHEpWG88DY8G7ajGLKeXBKW85bjo2MUXMqCcgP",
  "key10": "GqpYp9oYzTrsn5rXUPQFVD4EqKmFjDVDxZipHP66Gaf5dj6Ys7P16zcWUZyrVZAQHiKW7VtBZkrocM5zZJZxLxD",
  "key11": "4ksWTXgWVG2wQyTH592oUBQ5dx1yujF368qRDzhD2c1rnQ99NduQnTHKrYLN9LSZrm9wzqgyfGtj2c3cjBhW9b38",
  "key12": "oHhWgqGsgsUCCmuJBjaLkqTDJjevQat3gbu5snsaZFK26X5AzAE3hwovcnnBv5wEoXZhNd4WzHmuc8yzb5iHigx",
  "key13": "5yxPX9VLzxPSNCofca44rY8EPBggZStTSsy6YbVbuEcGRoXFjWR2LK6vY64Zfmstc57PyoxP3CMDpaTYDcufLtZR",
  "key14": "2DPNgtpu2uaoGUAPE1eJtpdFeZqPJnMYQ49pZijmesnRAXbzncwSe1i5Uz9MaTLVb1146RUbieyk2YoGYCjw3QuD",
  "key15": "3Y3dF5FwegrbURy3DNLbpbR3gw5bG7eQ7yWzJVjjwhRhjiPwJCpoGa3F8uzBae2mWCj6Px5Uz2P6qKfnu9T44nWA",
  "key16": "8Fc2LpJvQPivXMaVb7BYanu9Cut3mPgwoiC4RRVbv3sjZp5PbDWBTgo8x8a8gTDRA8ypyEpDiotkhsM4rWbMMTp",
  "key17": "5L3rCCp8S3QwnjwLBqZMsGoBASt9BR123auvYEAEbWUyRVCtFxQKEq76AbgzNjiCDCsaJvVUBqCevU4ZrE48HjEB",
  "key18": "4SZDm8PJStJBiW5kvxdNDKR6F21inSyaeW4AA7g7NWnurvfBTiNQmQRWyvTzVaGQ4gnqgHpisTB9eZwft7SkNP6T",
  "key19": "3mUb7BMkBPC8opV6sYnzinKrXETejUupAWxHmRkTwRTAXmnprETSLgGyKYsY8NVLpZzBVDYD8KUPjNpwDNFoWsKU",
  "key20": "5S4Nrttmxx9ipzXgVa5QeFZHKdwpfPumrrh8yDxzcVnpttyu4J1c8bqDat8hpZkUKVuRviQhnJTm5GGU9f1NFhBs",
  "key21": "24KhsGThJePtZaiuW8b888zCQEbSA2gH1hrBsBR7bXx1B9pXJ8YR9VNr8mAc3RzdNN5wUCDb6SockJHX9acrbWYF",
  "key22": "5KEdccFaEZjhsoJCknhNTKghhPdJ7VjUHZAt28p3Ltbepyqafc8WLyqJUN5QfoR8MfGmRhJp7qHRG547QWuSCUgk",
  "key23": "2VsdGPVhF2jaC9BPn1AcHGEa7kZ5ZmNo33DeCFrB9mU6dmogRrLunihRbmSHGxsLBA1wqvP1B2Xpn6kvx6USdXoz",
  "key24": "5YStZbdWvW8qirRtZgMGiMd2CvxCH3vD8YhiRpg9U5nxK1pvFpXMxGvWkvH1R2Fe5iGCENNe1nb78EvRWykhp7Qm",
  "key25": "2yjeqFyrJjX4V4ZGpa3P3cpdfcnhFDBRc99ASzwwL5BqLbkaAejBQaLdbZNmdDTDvcA7Mo3w9u8ai1ngbC864KaV",
  "key26": "4yYMBgW34cHBdThP9eJzhKp67bS4UKHEQwH6QCMSuzqdXLpK98H9RcxghKDS16Dnmm6evSBgrRKX2WYm4G8GXZST",
  "key27": "2wwTAtPyiJExcWkerTV7WsQ5Q54VkxdLJ6ox4MtBTUM6Rc7BeK8zBAJRrzt3jWvz3E1jdcdgKmsSEDzRK9xbVxaV",
  "key28": "XsjaPE86JfSN6DoBE66VxiFsnctmFmrPrn6G82VLLsPqguSZntqvSxopzJH9DrDGEtrdJrZKb8PaqQpFpQ8aEnt",
  "key29": "2vCbCtWURY6Zagqa1rTxiP6A3NfvYNex7GNojJ3xWwVkUPcpZRPxFRtx9pH8fSDwrCD42UyvxoZ5tKBdGqrtaXSh",
  "key30": "Sqa34jmcmJNdyXEQ4xNZkJUEW1iBU6PbrFEomWWA2izCv2tm3k6ABD8eA4WWzZJjMhJi1PYtCi6DA5ie1VK4FFU",
  "key31": "3UjQVGKsU4ZtFirMZYN1f9erzGNxts2ka9YuduJhNgFon4PLv7rrNmqxPCLpMCaXtTdRtenhUzX373d2cpRwqsCZ",
  "key32": "5m7WcUdLzi1RkWU8aZe4g6zT26qQLDMBsDWMWSgxJ5bupPVuRTVxnvjb2dMGHFmiZd1bHQJP6xRf7KHHW5iyCsNj",
  "key33": "2HQeg7AiG6vd7F5y24g4RpCe5biTM1DvZXLGQ8zmmMRNi61eNyMHQR3k5defBadc3kCqmTTVEW2Y4jJcH6Qk6z9a",
  "key34": "gftsVVZCwmiWoNrtDoUjskQePnSYowQLX5QjMvufGQsiiuqf5wJTWkQcLvbvRshv67NtejGNkNxWx6ZDgLPFJ5D",
  "key35": "3XRbaYAEfCywHdrQiG7NQ1EqTVMf9ZzxiymJpUFdsN2ACo1vSonyiQWFCmavZb95B6jr1i7sz118szTiBefifyNN",
  "key36": "2dDbVdU3Wi5pETnTxigEihFLDtHS6hsQVKPxArHpXGhEzYCzz1ugRPWdQbrPR8HmanQoizrSm82WKnF1X7XBcfdh",
  "key37": "41v1NaaHe57Q8yxBWBeeCoka4suRDfAF4aqZ5qyKLsWgHS7B7ZkUpsXmXsdw9AwLA4rpz1khtanpkhR9GXqus3rq",
  "key38": "3PER9PtRi91Nj8fmqxUMb8Z1P3vv8ccPcVBxpBfUGNafW6CFFbToNRBipguT3rykFwfFdCuRNypgFGdpMDCSVr3Z",
  "key39": "htAoUVhfGgmWmspRrkMjif6Y1wi7scJDzJLoEmf1mwwxjnJ7FWSj7HT9qUJpMVD262U36tWwHFJR8Zh6tsuwntJ",
  "key40": "47i13YWaXdMxZrPzQ2XiCZJuG5CYDm7LGoscnRRmKrBiCEdqvSeGbSdARAyrqZ1akJGFRmEcLKUJ7fwg9VwniARL",
  "key41": "2SkjeJvvxQ9rg3VLvJJ3EXkepW8Bu8uSiaKr93iSnjxHFrYjRZScN7gHavH7aFVdRpBpfsUtB1LDV9gf7kk2L9U7",
  "key42": "5GJiJ5HCJfUZsJZf9RvX6f3tj5qdD1KuGMTv3y9Q8tJvKjEpYseoLnrozwk4nR9MgMQp7LTtfpxjzrE8GVYbQ6QK",
  "key43": "55yM3HEtLVfdKjGLWVi4RFGRSRqJFRG8ze77SWLyf4wD7T9Cp3JeLFnRzZVtTZkpFEq795vqT9nJn1Zuz1hUjLWr",
  "key44": "5cQUhv6ca17nvPYSh6kNmhGMgU7qtxeJTekJ744vJBooR49CLs2xq4mihoxMXnQyeKcmb2T69wDNPtUyJtbBj2a8",
  "key45": "zu4y1QgnaDS78XAck1sTV1xLKLj5NnS7ZMHgBXVxvmBCHRbfRn3s9shVheLw8skdTnfQCjJmqrbUNujatDfzafC",
  "key46": "EBqLD6LVkb7ybQEj2gLqAWV4LpZRgAqn95HMxacERMK8ZmyD3ZB6E6dRuY3MsS59oy7qPmPHiRsRS7Z6Zm8ircG",
  "key47": "2KCzCyEQ4BavEeBSJDBwwCgVpXohZuT4z2NfZNMPfdmdzogQomd9NS2W4nDdYxPM5WgmWgRFTpoytQH1nMbiV12H"
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
