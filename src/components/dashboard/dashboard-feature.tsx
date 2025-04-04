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
    "39V1aa2CGqc7pvsygcJ2Swz63s3ggfffHTN8eYLCnJ5rT4ufmje6qYHJ77YwAuQWDKJCCjBohvumstbbRWo1cdHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "346g3zH4QsuBQkGgf5F6NLBwWF5ArTzdGwdyXUmnUTuXUQ7rZaqZ1ucSzfmyMBkaPpEtMZFc1MMAZmuk6BYSNLso",
  "key1": "64EnfADzkMXZoA6j6XDKZ8h38dtKkSR7EYsaFuFtWyuLR994pGbUUq8LtwNk5MzzVKGfc4ZQht6Sw1VBVkPVDXTm",
  "key2": "5gcqzG1mXCT4vfH3P4qTUvPZdotkatQVDjP76UgDHLBNRVr59QoZJAL2VD9hsqp6p5sR68buuFwgKtjGFE75LNtT",
  "key3": "52rm6NbZrsAWBGkJy6FJxMyE82VAiPMAAaJMJEzNgwXV5XmKB2hJmBBgBbUvyr3bkd7vBuqFBooACqjQQRPgTaek",
  "key4": "57Zdq9zZ95izKTKazbiBVzAPx274iTZaj7Q2Zx4MDcrKEz2UbfMCgwFTRLUF7rW9nEXXfVLBCMTja6boyzpUvREw",
  "key5": "2Hd1hcpYxerwhMCcuNTAD3ytYxJozygrAKSV1yoWzTbQ9gtPvBWG43SsprqJZ2VoRnGu2ZzCy48bg7ZmDm3BjybJ",
  "key6": "3UTBxXxV91PjnB5YRdCPH54M3Fxp1uYRrquStS15z1HXvuvJGyquqBYCNcMPXd12XHeWKx1MUsj8SL5UvHcCUXaU",
  "key7": "9QPmWXtBDxQk7JpL4wMrE2J8cr8D7WYrHtaJpp6m8wPZL8oL5EoQQJQwAEjV84uVyjfyToPKw9fqHDCGUhAWYVq",
  "key8": "CxxTBEcvihdhLGs79NM1psbrmHaGnCbr4Xr37Yg6q4273PNHCPbUVsv7hjdCBLJnUtFu1hJGqWw1mppT3tX33rA",
  "key9": "4cLuZRgVedqp7fx4BRt9hKXA7sdxKx9cv7Pr5tJ6fszU4XBfuEM71SDjtahr1nwFaFhw8qfnjoyVGVQTjj6pMZ5k",
  "key10": "3xvAgCPRrZEdcL2czi2diw9k14ka2UWSmDDaYrumZg23VXNzUywjwUcYTu13CY1oMrtc57nxQPc69iYcF8X9b5xw",
  "key11": "5ekjFxTKhzfKZPM5wPa6ZadoRpoQSi2SQ9JFczn7mZtHtw9RvDrcdtGEBXgZnFhd4wrttRL118xGVPc7QRUSLMJN",
  "key12": "5SeQYYoF5hBdiPJNinVsgx8ib4sDVEja5nJ41m5mGcApDrC8Vzf1z91nnxHbxjZSAL8jbyCZ8G78pCQ4G2QXEDuk",
  "key13": "45pte25ukWQQmrU2PHMHr3v7TkhxocuR1AXs63doKF9tNQwNx11s7okcCSJvKNxYeDhZuM7UuA1iNDjMMZ6WWPC7",
  "key14": "3tHHZtMSTAgi3LgGSKjb24obZUmMCfXm9K2ENNihZ8jEBCDT3N3q74bPxNfb4NZfnq72inWco7dUG5Pw3wr8NvVp",
  "key15": "4XfL6NGrRrTmN5w2mZ4pjyt9c9ZoRWB1scLAPG6EuaiWGNpd4fRGeyCaqsAHHW2AiRpqSXXEtL93Cr7K3vEgYo6w",
  "key16": "3b8YGQ7HLP5UmFn1ges7ojxryXmJGWqRGuGx3untBtV1HeNhdxJr9gcP9XcUUzhz2uAJJdqye3nCozqZ4mSmm45x",
  "key17": "5SR1PhbwCXgCVTZvqcarGwXfhFJ515V8B5c3VmxNoqo9rExUR5XWbPToSqBSdABuoa4kfD5g9XCrWhE1DzLF3VvW",
  "key18": "4BDfg32UY7SaeHCTT1SB2d7kPxgafSkbayez4hX5jAnunyJxmAjojuTVPGoUAPZ3xfUZRKeBpc9V4tCouLjpJep6",
  "key19": "4mAzywBb3Wyj33RMCYhRk6bP1aRiC5EoW3smHnbPthAUL7i27PPiChmhNxEUsd34xGmtBtogQ1cBau3gJWSpCiXJ",
  "key20": "5zfzocj3BJDoNRzhgTeebbRgLDbaTeJSyHU4Y2woNF81kjN5gjhPVSftbP9BNyqiojRTDrGPo7GUD2bdYiQdccUX",
  "key21": "3N2vLVq3Y1HSDVseesbuwBgkwsxJzhPkzGSsqNQyYXUdzx8dTKqWqMFK1Q8CdhC27Dxgi1C3NU3eNdahhunyrFf5",
  "key22": "4W5sH6LwiqFpsdbmdeX49dFkvEHc9haat7W2seZdoVC4WmrtLet3aGXKK6rxWxxnfyqwtaEhrTkMUBWJ1as2FSrK",
  "key23": "3uiB9xHytxgSdtxpWSya2pqf8Boy5NF9Zyry9YfFgMBTgJY49S5N5ZpsiT3JipqbBRKfLPGWfJD5vck3oHbor9ob",
  "key24": "5Vs6rfhqMuskX1s6UeVP1GRXzQnkNc4udQwkLaXNqGJr3LqfMdF6dxSfqFBpWcNeamC3JBTTrzc4Pk7ot4HGedRF",
  "key25": "5txkW63GJPYFjectrdKEAmgbpWEWCDvstq59D49fdwGQRe8Uqa7j89jaFNpW5poN3BwumACVT5fHdkcSJma98jcH",
  "key26": "5hXD1HYB7K8te8XRvY4CdWeTE84qm9puz1SVWro3afcMJCnZLhQmdmZjt9QcKY3a2gy4BZfsySVaHzmHASEiVytY",
  "key27": "4NzFwxeoziY48tYthbRMkSbaSV1zLpPhUox6xysE1Mwe7TEyY8YJpZKy6VZUKVmw9xzpvFb5fXrVbtF3f11Mz3EF",
  "key28": "ZFh3aTbMqgKyMDvgT2vAX8Xct1YKYVaCpdtztrdCP6BHP9SrVyyN8APCEZupLPgkDq7Bz4Y2aVUkZGtRqM2CCNE",
  "key29": "yik1KSKWmbXCXyjfdpfyZNEXdmq5hqYvW8PmAVTw4i8Lx5YjmViUzDpQbrbLZXVSbNPNNUy3KrYAUbev5P7LQDX",
  "key30": "47VjjQHqettaThP31Zizfj9SzsQTdp1JRK6F7LX8vPVjQD2tJMsFP57BZ2NLsAr6PhYN4cA2AowCVRiMMmeHkL8v",
  "key31": "oZmDDoUrTSwsuNgobf4c6KBxkqyzTbGskgMZCArU2DziSZBDmAjSDQBV53qfXrCiq9H7xX9c9rTu9rJSh9jfy2Q",
  "key32": "27NhdDrC55e8VLztMQWNvxWAWCD4y5phpufCtskXMhrSws8B2nsyVQyw5xQphium3H3C7BugHJwnCmLCfTsNpT7i",
  "key33": "2feHtDszrpiAtVWZ9RQTmaJXF5oHqYNtVXjhzvxNhukACqFGqEc8ojqPtEpbLffbnmUct3JrvVLsjZZtxJ3FDhCB",
  "key34": "2wg6whzUtrwp1qLJ2K1EnahSHWXuJRZaGB3B8xMQWxTmk4wmuro7dq5wceodMCYyVJJr6go8nqbQvUCZyLdzUWqP",
  "key35": "5YKG2bHZEpXnkLfCESe5LeRi89QiyaaCL1kAGKVotPqJHkdSEbD8BbJKTr9y3fJtVPrhkw6r237S9Tb57eNCT48Y",
  "key36": "4PhotjAiNFyWJeHs7qwHY2Nt2oWFZWPYA27UGbSGzqWnYTvZFTjPmd4FaWWn5EZnxWy2So2YHmFj9papKmow6voj",
  "key37": "4tzUn6BQSKHDsw1ohEA5ufJMkkEPuRbYjbuBQ4cD8Krd8RDgdnGmd7iZeR3v54Xf7mwiXf9gmvcVaDKbF2pxpMCy",
  "key38": "5CYWVFWgUjipVqSruz4bMSvuuV2ZaqeYinZxL4JJkqpQqPpNZnEAESGuFYNd2QsY1PtwJ25rpVyaSWRcJ13Q7T5N",
  "key39": "4Bxg6fQdUbpxm7DH68CVQEeq4eaJSXoahEEUBx1yT2c3bgAQvsypKA68UprC9zJX3w6oUKLupc3EJNCdihXEeEdY",
  "key40": "3NAGWTtYoMQksWqKkvgGKM7BxLLSj5JA9bFKf8cuZoEgSyzMSw5fqxVWu98xkYk4YK54HqJycKk4MhKwDD5UNxF5",
  "key41": "cRfC8pQkHjhVQofjwgWE74kHu2XG8sdbUTU6xYzRRWxZUFE1RsLaabtcEzgKoDeEUvt8M8dRhMXs5PDjzARuSP5",
  "key42": "4hFV3ZPLcqiEUD5ZhHtH5aZTSCN51xnYwtb3Kqzf1ceX8QULJUKGgEn63vaemmP6W6PZYFeoZCeyMUQPmV37hgm5",
  "key43": "XH1Lw7A1Jx8qYGjbcxGMwRXPwz1HfmUMYMRNoZpznJnQBcVgmPHq4EhkcGwai6Nzo3AGtQ2wBJ4c5gN5m5aGfet",
  "key44": "VH8XuBaaMEhocmhmKTZ1ewV5Nnz4qEsGenXaYsFo1T2G34jahagMEjRoce83yUryAyZXCw7nHWoivsxSZcmsjRt",
  "key45": "2FMeBoh1svRxWQqpcUh4BNfron8QdKNRGbYenHNp3paR1VJADkUGsjvF83z2xtfjbz7onUjaG82rsAcNKUWYCCJ3"
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
