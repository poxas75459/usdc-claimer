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
    "571LFAWFRXwoD1KVVL5ekLg3RJCwu8oWMnnxide5r1Qn9h6UXmbHUw81ATXPEnRuz3TatMTEbpHCCt4Du4svSkri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ld5hx8BGBnrGXj8vXa8fNFBR7WGfrGeKuryisn4kmvWNADEe7hXc3m7S24Eh79tXqqai8QyMhiVmv4Px5foC5jN",
  "key1": "5JmLF4yLBo26A8pLJYc6tcwRWjbGvv9eXH6F9xeqFfDMBREUo5xSxAC7LuE8xLbdkWGcPQW7H4eHiVGXeP6HQ519",
  "key2": "2nJ5TVDquzm6yHCvdDuuaqnxUdT1ZF2JgZwd2BNm3KTUXb8wrCL1PojFHqVe65pJnMTBF2ffv5JupnYFgFL6AbWr",
  "key3": "4JNxrwyqe2zGv2CR4zF99zPKN97aNUNxLh8yUko1etrNFQrPFXkCgtQbvS4U3CjGhLs6sT96G4BTG4erhiXqkPFA",
  "key4": "KC7CinwBpeBLJvrKc1Leegi9dsLCVqSiUYktQc95CSsYCGoepVLwVYLVkyyri2soCdnApLK8KiBy8vHZNAC5LDc",
  "key5": "4isEhFkNNp8NAqBPQ9RHG5zogvHSJUZy54owkPrKWFFzhttpaeEDWe6SWsnWKpzbu4GxHVj3adzoQbZ2rBoYABFm",
  "key6": "2y5cWZAgFiCGbdEBqpf3XDE8Qb68iE5fur61vp7VMB6dtj4hHcJFNFsCFFqLRrELwnF19QbcVEit9sfYZkUVkeiU",
  "key7": "58wRTTBCGKX6wbFp5MBgDfXwWsharHTdikEokDDxTwqDDdQrZrxBpktFXgeT6LBMf7tgorGzq1ju8CGTXLH3eYCi",
  "key8": "2uyRdvjVYwruWvxXcAn5Roxa8iLnsfdffqcqVv1MczyAVLWmaQ6YUiNNGZCJBjRhZ1FmFfYg91J6FYaWY8oHThdF",
  "key9": "4tqFJA917kni3a1ngLENsd5TvyheGKYuQjYPhEMejpSa8sYXsMv58eRQ9FimQWiGsB5qyHnQTTKXvfvVFXVHTQ1K",
  "key10": "5ztwRkybMQ4vdc2tbgNTDa7r1zgNkUBB3mQHeGZd3H3wypc4QdSo96JFhCYMsYT1tfUSekHFPQb4i1t9XVM7s5iP",
  "key11": "5gNJxF3SR9yYwKsk4tmCq3L3AiyVcwhY55RsU7Cc8W4L7n1oDDBkCidxCEyAbSYbskTUcnhbpfgUYSmTWLamZEo6",
  "key12": "5iAk9kbp46cpCbL8kUCSu27u4DuwouBhsG5PczTocKVn2W83qwAgXsAwfA7BFdkMQM3oi2L73TybVrY1tLa5jzt1",
  "key13": "5K8XDSMYdGPMXDF2PSMuGiVKnVDjti3bGz4UkfULvNthZ7skij1rpVhsXaovZmWX4dmsw6Gi1rkuHdXJuftPNb1K",
  "key14": "4VTvsTSLAX5kPdqYdPTcEjcwAva61QLsGtjcji4kddR5UVeaALJCerxeAvCTDVo87wAcVZMU3Lu9zFuixk1dfSh4",
  "key15": "5pTT1KgCeJrZsrcSD2Lgd1tfq2S3gfEK1FCkp2TxfAYJMBrQ5tzyfH8EiHGXB5AKtsbrEEEkxjhJNJ831aub2nrJ",
  "key16": "3B3wGuKfqisFvGzdR82ASKRDpH5QcZJfAfAx2Tj7Q6vF56d765qTgSGFWqxEJ9qBBdz4Y6y142q5ddx2zh4XLeam",
  "key17": "4J8iLWtHdjQmfdNFxTDBA5J1Ys2aHXgwXiPMesjM7buecqcS9pvz7NduYWNaL4dXH4XtteHo66J17s1gQ36zrUQJ",
  "key18": "4UA9ddtRvrdLJyUUL7oUDbSU5Kh6P1DgCfkdWQYZaB6KddA5xj5wc2xfJGBTZ6ebesFpbP6yHu15mddp6GGSz8Ws",
  "key19": "4CE4ABBQW1S3ELLTsoYeqyAeZ7Jt6YS6mBmLe3TcWPMbCAbUXkuk7dWLBFkJyh6SQMcpXxiget1mwJSkKo1HvKyn",
  "key20": "2xMMFbhkxVSQeDM5e4uaW1fQQEm1qznPm9mTRCokxArLdzArUDtgJKUJRCZ87vVLJDYAetpqMsTzadFTpprQLjuq",
  "key21": "67VJ7LRHmo2ociYQmr7Wv28RVNywfb9adcaskH1g25x4pJY6D4cEjdULKXi5YmbPD1UE9H54dqy3RH4XWPsef7Qx",
  "key22": "3Z4AFfqc2J2pHcDXdzPee8h4ZYij4nUJVQX9zZaPCkNuStMN1ev9gr4wM9ag3yMotRXiiaa6WFY735iRD8ovmSfe",
  "key23": "3YDW4eCTnVE7VfoMQWV74CyNvw5miqUcvGP5LfywwzF65JMRdFBUVWdykXcvYWfeTGDh5hxgBSG1QsAhn3PDJSFp",
  "key24": "4xQEUFNtjdtNT6EpLtN5rN9tF9dE6dGXxq7qu1XeVqPq1H9j7F5pZfdg2koi1kYziHWS2b5uPaTn6Kq4248QgTMc",
  "key25": "5rPEMstponwxhjt4ZgjjWm1z4jaoyL1dRif8XJftf122nusnVzEqok3adQ42zdyHMiowo3dqxe9bHe4NbgPxupxH",
  "key26": "4ZCcCMB4AtDGJ1exL2hL9o9533gqp61n7oxAYqJnAzMwrqKW1HWMKfD6bfaSCDXH44mheN4q7WTtjcmskNGXRXxw",
  "key27": "66RqLWqSmH6uYgpXc99sKzSSYtMgeG3rhmzF5Z8iArAaaSRVdfQwx4HZ7dYGqgUYNhgDCW9FnFgXYe6yza25BDDo",
  "key28": "5Y3Pi4EeaC1MgpvBv3dF3mezMSwRWqbPWouBbE3qix64txW6Dw6bj72e4aLJh158euAYrwoPnGtRCHJtiRGwUef",
  "key29": "5y9nAz4rXC1CGsaApfw2LTroBkPe9r5MQWBLpBjE1Pr31uXGJTo7xE8U2LKEsYNzXJcRVmo1TSUbfJ2pzs4FmGsy",
  "key30": "5AfF5G13Jmp75dZLK5Dwom3vtx54rfYgpuMYZ2AZrWdSE6b1S9tz6cgs6HLQ5kNXr7RTgvtAJN2uuU8oMzer3PEv",
  "key31": "2JD7DvH6eSbymfTyAPUKuC5E7MCfemsUb27bfFri5KZPrL6aBcqUZrbSqUuZ3BSv8XEr8nvefsNFixKx1vp7ZahD",
  "key32": "5rdviy2dV9dSaSNCnMbyydtqDbfYMqib7nb5RUA32kAg5m4aCidgTakmiXA1QMKZfv6c6PAFZQHAkEKFFUoQGqiv",
  "key33": "4s8VY74X3p3Rfkq6wUJxegsFquCFatcgRuejSgJ49spf1BMRsdF1zjRgD7RjCQFrev8rFvGxjKA1cWywhgdp9UAw",
  "key34": "xJXDgQSj3ZCRVWi2X2yH1GtbXke9ThW2i4X4M25CCnjj5ymVLcuQdxN2RQWuJRx9oHKkxFd9f2ox3N9eMPDzoy2",
  "key35": "44zrHfComLwm4gwo4ukAE9n377Mreq7vKreZh39yP3JvUmYgTkU3bMzbTn58fq89MABHhTFJ7LXkdnU9J58NooJ1",
  "key36": "24opcAJGkVkSZH9QfC8TUxA3MJ8CEfVbievpKWdsHYMAm6V6x9UsW7Uu7BZ3f5Ue8BCSVHKbjbbvaTW9S1dTKtiQ",
  "key37": "3WXoDFDGosxhbrMtYnZn8jaV37WrnrrqQsWx9h6x1Cn4kXJnLwRdmvdeCLfEFWwW97Ka4ATCDJZthx69cHcQ3mox",
  "key38": "4YYhTgxdtoGZC411vwXo5bjEXgLNHKdYNghppy6weTTn3srCQjTRx6JDpJED5ctk2L1Htho9D7umXgRNHZTRfKn7",
  "key39": "61P45or5puAZ4oNv3nYYUjZWjYsGyoPdMnCQFU1RQ2F2xwdZU3s8NFCtVAryAPsZ4tjuV6PWBYSY4jhxYPW1JC66",
  "key40": "57cfLpqCshbRwuMvyvdvb4o7yynF42mH4pG7PFJZ25fRs7kj3agRYZZo86qV1BKRMA8GpdQ2tDVrNUTxYdcjfJm5",
  "key41": "4a4mF3NagVt7AL44zj4RrZqGhCA5yWyNZiNVgQeB6UoJiSPpUgH5ZDNmd5oZxFpNqFxDAkgVhnJe66iT9548U5Li",
  "key42": "2xyp7wKj74yShtzTmW6xj3RvrhnynPRSrAt2W8UkUpn86MvoTvtLe4N3K7HfUFcA3yCxBTmaDWRhLPhaxybmVbuv",
  "key43": "2xDKSnHaQNXvK1pHjHMhN7EvKR12fTSAzcXDRoD2jsuQr78irhT5h3YM4mAwv7q6JbBwi1r9p5copYyr9Ej4JV2C"
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
