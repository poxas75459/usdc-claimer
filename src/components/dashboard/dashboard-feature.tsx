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
    "4ugunSN2of55Zm6thYjKTBzeQbU3KDk6r8cK6TZKsJYohkYYQyEB711u6NLhRVfHaaDZ8DgenPXnRgzmrkM8Xcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NGWqjBEpcJuDVJ9kymKeqp7WycHJx9DSpYWVRNGZDHTL1gYe3HrXjxEzHwonRpK7Ragm5a5MzePx5pZJkMcs9ft",
  "key1": "5EiDC5KVqVQrWqbTu91q73kwZsUDrjdHnFX79P7qRb4P8V5mEAqDJNPQWv1sioUZABPonFgtg6Trzmz3jcCaMaeJ",
  "key2": "596ZTTV57hupJS9RNDiJ5NT1rVid5fX7zBQBhCSLzgG1yYewCKN6MGSiLkKcVvvNRPkSzFHXxogz54MDKdh6QHq4",
  "key3": "5JB7D4Kmn7cBSkQVv4aotgwDmYUqc4WK3Tmt5mkR31rhUBVhibn2dnKEXP21bF1NktGtzMSmSok634nQmLA1X5FK",
  "key4": "5Gv8GiEV11ZnzZzxQRrGTUsCBxjYcD4h4Tu2vmCqsNBL6TPjQtVskvcbQVod4ogdm6Z5k4nuXY3euUPFVndz5LyD",
  "key5": "35DszQDSXXFEdQTTiD64hmgN6picXjGcaxgaW8sN1fpaWQZyxtEH5atBs929rwJgq5P6iBno6QAgMZiMnJCU6zjt",
  "key6": "5twLmzTVSLDdvg9wgnt3NawB9d4rCfbVndh8YjSbrbrwZ4NrHQkzdpLisBFdomAp2GSrLHB6SoX1Hii8xoXTYSNE",
  "key7": "iNvG3b57Mg4E2cdKPW9kHXyqGFPbGzyuMT823NxePPPbjsWN5dShHz4wofcH37j5aduyqh6x6trAE2tGbMi4jxv",
  "key8": "4eiheQKU6kv3ghSjCaMMRYdreuvNsDh7c4A3zvVrXc94Pm2PJN5HMJNiYucmrF6pEAanUPD8FD92nyi4L1MuNeN",
  "key9": "2R4TsGRaKtT5VGnYQAuM3mwLvCqFzxTTWpBHfpVoi8xXCFZTgrSbhFmeiDudyd96eY89yHqbukEyCPZRY3YTinh3",
  "key10": "5jSDfaimzh5yT4dxpzCC9vjvJ2ncXRzBHDMRrm3EkgoFGAGzeMKBGtmHn37FjjYa4VKMS6fQtyEUG6SGKYNTCJTq",
  "key11": "5ea3fr54YsiryzczeSstDeY45gxu49EPYSzRMspKqxEV8a4vJmySyexR29vJQ56yHun69z4Q7iZLJTh1p6pgiBFZ",
  "key12": "4d3S9TnCTjSqB3qRkNgbL9Ypn4zfvJi863CpPezhEWmMcPkHCSKDRtYkH5JMUEtMPmNohbQE6crANqqFUktX2epe",
  "key13": "chRLqAmMugYxUaXPSwJK6HKtG8T6ci6HTfXb6ZwYXr8brhedDAEt4NuM1PXvKkQFKMjSBk61vWR6PQgwnFq897S",
  "key14": "5e4we4B8oRJtX548mQAz53sY4bcrKJAVgswzfAQwfe987qZW5rVkFAVJUANC1WYGGnouaTQZViwhdz2JjEq77mKh",
  "key15": "59mV5jmjhzsSpPmA58yNxziU118xH7jY2sx9SCtmaCfiYFeHuStu36ofdHfqBtPzrbjZ8v7Y6PWhSvUpbZRSCwNg",
  "key16": "Ns2xeVWSJ2E88XGF4iLi6EfAwvEi68mbSW9bFuazpGWPXr83t5XXF3BksuPusk4nsB5cwxkaK2bdaicxyFeLcpt",
  "key17": "y7EJxM6Zo298LRmKV4SurwSpQhNR4d9VvFMmfoWpMMLKzqZ9AVUK2u2oFFjeMHgk3MnCAF9FSguDhgcgUWpcPwG",
  "key18": "rP1xMABVpo26yWbFQuigYFmxhdppy1YwDzaKLJu2euAtkX8nVPUZwqj5Rzfp4mhGUGa9SnYiS3y3Dcqxw4AZ7qP",
  "key19": "3u7qGVWR7tDpuvfgNmy9p7T2PhgrueWxeW3fPZ5S137tCXnTHL6xbVGFAW83hywHdaTqeWGi1cGohZg2zB2STzTA",
  "key20": "3di8rXX54FbcdhQ5VHX1fbNsbWoa2GC2dHHyafCjw3sMTddggn2WAiBnCxmbfKMCfsnXFZ4Qi51HymmuQCvByPFc",
  "key21": "2naGhNHUsoqA7zXJX1SSNqmj26FCLththcWdXWTF6GPmqncJmYz9dRVGmyCtyoqXAHjT3LDxYXig2j6RVo8d44C2",
  "key22": "5eMmqdRNUJyBtf7eshc8xpw5SB9Xkh9L7s6mFMZBzMPq1jPS7xnuetCSyNPFhwout5GwxvNmiSVjhisJSTk7ep1W",
  "key23": "47zENMAiWTPCtrAjHTjZfhTeMUsNvVxKLxybUV7equijy2nro1ho5kHRxw6TgQyogiPD2nYqLVKv57S7XTcCTCNg",
  "key24": "zTK7CKfonSfJqNoAsVgDZZazLsjvhSaYJkku3Mu4rpUjLncNBfrE11vhAp8k2s8YYp1ihmeuyDsebJvxW4BuMHX",
  "key25": "51V5kVJgLZzBrvX2tRhDXLrCc7xoJw8z5v7Pc118GxkJFYvwWPAnepcQQqiyyPpCAmymhd3YEgJBusVUhLjSbFea",
  "key26": "tN5BR6xhfEg2Nd9EViAyi4erL9duhQaWWte9QtpPWs1siChnC1k7ZrVmx5KdYZ2mdDQWpiYdqcFkaHqPq84w1bm",
  "key27": "5B4yhiwVc3CJtfsDoDaN9XcZ1wd7FbPzLGVMRTyy8nmHELnVKwP9ikF47KHEpL1S3SxmtS5cde9PBVf9gEXPyvTH",
  "key28": "SUL1F5Sei9Qp7aGTDysJSqy4PtmybfMMAAZroeLarsGS5i2VAMLmaHGnf9cFGnVtnJiqgq1BqqPkoaw2zURBFJy",
  "key29": "5Qdtv3vvHuW5pYGmzqLSAhwgyGHNZrfF8GhY3FnVePYS8YPs3uVKo58nYDfqitYj6GgzcJJcPfG9LFqVsCGpJxjg",
  "key30": "5bDtd48T5fC3DxQkCqCZydUhK11JUbn46rcVyyy7H7ZrPuqBBi2pifCoBVcqUSETANz5qYqq5Wd24gMieod9oeES",
  "key31": "4ARWXf8S2ZMxcHDLCrdXt9RhmZqE44bxdZnDzzwnETUq6GuZE2nTxToHBjCgoR9VNaTNcj65hJkvedrwaoP1kQ6g",
  "key32": "TvjgWYWRqz5CTvjMTzfvnLkNZL3Fg1qDSDrrKiuaSqpnKGPJYq75ujcx2FYQu9ARaTsUYbpbz2PivuZvgk5yeeA",
  "key33": "zf4Fng2jFUbehacCFLVPaP8WaXN93MWcouhjE5YerbfDf1cqyAdpgWrNEqg6KN4vJr9yFPqu2JwYKneyFSYTsXs",
  "key34": "49QTBp7bmq6yc7Hh1vJ8uUjsUotFBFZudCE8quQPF2jx8iN5iT3bHkSsyxAiwxDYEkkmSRzxMuqMdiVZVebr6JyS",
  "key35": "QA7ueBe17JQgusfcMfd4YNySeEyPRrjbkk76t4szaSFDeMsZJPjnZxfDUntqGbwYKqenDcxcbmgF6cTG8mKknft",
  "key36": "4PMeg4qe3Y879fJShXQTvLVQGAXLzYQRcQf6WNrSuwLL5FeEFovjYb9WZTN7oJHPqmEueTTEP6MPtpq2LVw9mpJh",
  "key37": "46MBFnGkFZjKQCeTjnB2QVw4SLu7fgvBsuFYm3fuf85YVgCge1hE6RamayVQHqHQLktiqX6whXzZnmSDgzxFxeWu",
  "key38": "KYhYkedu4523SseCUwysRkxFa3CUz4w4nwwkwsYdKQyEK6xdEg3cNCrjqHa8XiTywcPxubwd4rpQwSaCNPksBkD"
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
