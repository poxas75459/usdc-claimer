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
    "42vx2bEKWUwk46bEDYNnRh6KX9RqyLe6E973CSxRUUxrkjQs3hjUQnAEyr7JDcneHHcCCkifkZzAMN93RPZg7fd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W2q2GM2wQRG2VudDijJbJfDsEXyZrfKx6cGuLrk6oMEVhorEsMrVkmcgeeq8xBvGkBNp1wj9oURiaDk9A3Z1Toq",
  "key1": "4Dh8osmVsUdC1Xw8ZhUXwXA5cMBLLxadjeJzKBBEobhCU9qTruMUQQ1uNXvcpiVCy7SEU3VQVpheVfXsrADmZ93K",
  "key2": "5v2svdpQBVgYaxcwfHaQjdohs8TpqYx4To69HPi5EeTKZxx7c7yCjRJXqTBYaTWtC2Vfqs7kzNerVNM8FKnUzdXm",
  "key3": "5fXjMBJujfke5RinxJ2jVE99mzhjqiAANuTDGx71qJyH7e4NF5XwHodak3zgBwXDure2i4N5rrZk5FwXDRGrTUbq",
  "key4": "2zEor85jtgqDiCiKaUQNcinwwHimEHJjaweQfFCddVSKHdD2VdCAUAnZGaeAnwA8po5UQ4F5mHDFDN2bMgAzG5tp",
  "key5": "5DUkraLMGnznUPvKpZu2Ev6aZwEkhn2UjxikwPSnYZFQDC4btExxJTdaKdDcaQmw5TChFZurjiinubKA5FesT12p",
  "key6": "3zf7u62aht4Npa5h7MAKkvfQtw3fk6q47G2fGWkUtg9s5JVgtkRtZugwntTJvEVv5WXZpa2xhyqnjCHZQsrmy7Z7",
  "key7": "2EQaLXpiXLY5g1g8MgHpNSaU3qZYwXeAcsERr5wpgszhqSE7PZAPN9pRjaFHddvMxdXhEdrAxxUEosrRJ3LYTGuN",
  "key8": "3Uhq2CdrEUJxoBzBH5Na76Rvh6aKe8fEynNZXGcYaYQcszxkffqESj9HJLFLV6a1uqTdEKEvG4fkFSm4jym4c5Cv",
  "key9": "3QvkFRDoHxQQ5zRSnQ2oKteNn2JnGeqg2yr8oA66us3eQzCQBiUfdEAEWAb6CBZuwa9Aa7Ekap7N1p77RzpvNXCM",
  "key10": "hvSEieTAaFWB3avDSrTSHU86ejguwye379J2ePWUm3nrtmMXVTH4vjst3stz66GxwNscwwKuhCeMApYHpvjNhSr",
  "key11": "5Fdh4itptYJgFvkorfM6ytFp6tyNQDxDf6Wjxpfv2tXMZVY1bewTmtzUvm9EvBuB24WyyA88wUMrWz25TBgxxBBo",
  "key12": "4gV34faMX2X3AiMFaSRSNbFfhwKbYG5jj7TCr9sFnjWLhBbpmFiUd8tHc7mNiY79Dx8UuVDJk6bydV8Y2Zc1ejG5",
  "key13": "5e4P8nAKsC7pHjBMxr6aKEc3FeETppAgVhGZPxde5FEPxuSwnMFsasu6VWSzsXC9UmcftpzKjygHsSnhdLNMasUC",
  "key14": "5ZK8ZoaAnbqucuB6E3BvCz2jVjCn5JnQA8ncQkZYZyd58Xch7e6dyvm7SQXzWXxsca7hKjNogZPqE2jVpTnNHBRd",
  "key15": "2beu5zEb26LaATnBUhvCchgiD5p1Mk3St9GDZirkjUAa9BSde1CXomSS5xHQQe8XeENsvM5RdLqt6dMbNqGjVqYg",
  "key16": "2Gwu5X9R9wH9BkNVfZe7maScXstdqJ4XZfzHuRvGq5LcSrvkCtBpjN2RfetikyyxTVgnsNenBQthJZfaCAF3rR3b",
  "key17": "483gXmYKuNwtCzrHq2hGTxNAJG5Fp1Ng2QjRNf3kwTHUdAP9JzYcmpXKSRaHzyJ2nPBZr4wEfjB5HNKyZxCwaFYE",
  "key18": "4WueuaxhwqiKtiu8Y3hiXQegLGQGpqe9Td9FwcJzFcPypgzZrdPZ9wTcgxwMbbWNSWqBgbUCc63RaqcBUbFPAvYi",
  "key19": "2FAS8r7Zigz4Xgmq6pD3qMGwhPZGAfKKExKRcQpTMpG82gWpu2AqQ2ySPySiwvWyoU5zTAEN3bQaWjfMNLKnrMKg",
  "key20": "BVTDfSbYYC2Q6ZyjQFrkAiDW3ff1AnhThxW2WoXGPPLzYCHFC8QAWGNzJpqGbXrQdkWPWJAiEXg1cKGUTNxCnZL",
  "key21": "GrpBSPzDvEgvuXu2LMci9b7rLRLuemSe7FZZjHYbKyKsiLMjDxYyEx1ypTiPDvEMw6qno93wW5S32p4VWtLthrQ",
  "key22": "5BppZnJgqWSHtgL3ZzWuF4GQb8xnNjzJXYhfTr8pTpzAWaoZweDVjxAXPrkyccwBnB25CGPrPQ18EwL4ZrpkQrfF",
  "key23": "5WV8G8a6kSShvxzFPwHuajiPmGrhaX9Gfu9fNNFsT55DQq2FxqcfSKdUB8xCWxqV4GgrujTtf5Aj8JvFqZbhm9EJ",
  "key24": "zaiA5VAFcGdXMHVVwtHmGCk29sLcaD3QdneU8rfjSkkaCWE22mCPHpzEVCMCF6ZNTLnWpJRjEswGjpNnz6ah8wi",
  "key25": "4A6jEfZmhprLEg5VsVxsV9fGRXT5hjDH8wiWZsLcmrSAiyvvycqW8K6oWmPXX8BSZLUWb2CpaE2KkySY7gnv2QkZ",
  "key26": "5czGg2eWoK1uQFPJ1XNtD8ivYdbkRg4g8QNCGHYRd5fZd1K8ALva6oiVaVDsRYUStHwGVxowVaVgpERc9712T8G4",
  "key27": "4EGPfNpkR16mrrmLVZdXVvJGros4wxuUhU1ig483Ki6KKbr1UMsHEMGMnmx3BPh9hMu51MFr6TCPjU4RtVAQr9MK",
  "key28": "4D3gpqA3JVDp6giFAV6V8eQb8U2NdR6RSBiNLVUA7gnYfEEJvke4ruD2oj1oHpwiqHDa7L3nYi1yv5LCNhfig3se",
  "key29": "3PvUtXde9TzmPU7zdygoLb1qVf4URT2D7FJQGNFUuyYuiuaUEFyjTJAxjhSKTbtrRQoy4xCDhZJ9kyatyS4gJSfF",
  "key30": "3sj4Q1aaimf3AyYcLzD7vVBBkU1fopbj5JPt8FbgqfiEaJhxkJg2sCwJGAmfVnzon5qacf672RwoxRdhbsZQNQVJ",
  "key31": "5RcVdfcAPtqM5HgZ7NdTTNvbhDbLQR4zCiS4YSYCvgQXTKHUQpNNefzKJ6MnRN7Tx5krJ5dpjcSYyMzmEK34miCk",
  "key32": "2Hrd2qqqECrPZpBsKnsbzVW1DuXArK5k8LBWqoz8hMTyszRnABqgse3sdG8ZUJ9HgkHR3RwVJx59LPoEYh2HiJCo",
  "key33": "2sNPtrkGv1z11MW87fxsSiVXb2r1u58f1fdxAvamgoUDaS7mosYEUP2oucZymVbxbSVNBPALFemMNYXCHMmF8tYj",
  "key34": "5v1necY5GAGyNcDnBN6QQyJv2Y3cLo6PLABxPETajvaAEF9EUoB3wpsh1BLj4ByTXXEfAvays1P5obAhKhzqw8f4",
  "key35": "3YP65nzWMbyXmBpiqEuHDScNEy5TAD7FzaRXuagDTd8gSQyMTH5yr8KaGSuFTXkvCzcyrpU9EFXXCSiv7KTfikEp",
  "key36": "2j7XrWEr5ciqi1QHecXJt4dBqjXQ9AjtkkbD2PXohnj8mxzjkawjBJEhoopnPcmpwmYfwJKBfdnRSjKxZojc963f",
  "key37": "4dZqLbus8g6hThGXYZebRrnsdWpGVG3AA6Rw7FQVBPPqmQV2G8GPHwwoR5AbRSM4BDRkRP9DmdjbWpQXpHin2cJt"
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
