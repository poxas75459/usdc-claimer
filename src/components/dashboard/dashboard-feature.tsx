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
    "5CJwLAqPEKUrNW71nwsBFufL76XpfcRZMnuB6TgeEvkzcKMd1ihv5W588dbiW6cZgGGj4wbUuxxJRKQ4mjLt3DJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MuH7vQF9cKXhjexgAHXJCeYpStCRvsd1bXNojXHRV7sMA7suobbSydjpEoWDDYkxp3SEtioKRLdjFFLp2f1VF8e",
  "key1": "4vsJ1P6og7zMmDQBgobmhv8phHrLVnhSadVs7j6mpHwS78iKSDxwPCKK7S8H7RasAx3ZssuHeRncbhYYmDZZxUeN",
  "key2": "4jw3DuzrTLVuvrq7FeL64RVvVo28qia94hxaBhzGA4DW2tAgcCbkZ7mPsMi5YRjKboQMJNTDhhosuSkaBQKtviv3",
  "key3": "38Bn6MS4FFS4pEqxfDLqP54Eo9H6FrJnyvVEru3Jbs5FSgZVrdJSht4nVn8RkihZXTW77dhREufUm9q18G5P3M3S",
  "key4": "9HmMHsbmr4BC1LfEPx2qqCQXEvsoczLLxvYM686wdQX7sLeLsi3WSGFSD2KQg7RsM2aRLKGPZ7NVvwEWLSNYMH1",
  "key5": "p7w4P7fmdBtxF328umvDMy1kbhcaVtxK6Gn2zUz8bKzNsQVxrsAS6z3znj5vWYiGtX5WGJRUrnLxunvMZsmin62",
  "key6": "2cU7pJaWrkXXb6boVis9fWn89DLmqjx2uj8vBbYErPtJmjbzHYrd8e582QVasdxBVrKjZfNqsk8CWCX6M675yRFh",
  "key7": "3KduA3fFcNng4Fn33jsswq8oBTui1v9AZcx8aJ6iuPUx6PBs496yK5xEUhuPYuykBga17g8SiNhgnU54mAz1Zzkj",
  "key8": "cJn3kswkyUijyppCqCqPJCDxktMHzmcVcRdzRBJqrT69uc1HUvFvUQDywCaqci5Yv555CjmiJFy64Ug7NR6Y8iS",
  "key9": "42rwiMwY1GRh2V7WGPhXqT3pbaNjS5o6qzgqArQR8kvZ5ivcS2b5K9DTQoeo5cLHEth22JCaHXNt49KDwWnYLtvo",
  "key10": "aDzm3YZn7zadde5qX9FKVbCjucKeU9m9sgMcCWeCe3UnCouEBz1Dhiczwh4QbBxXzQqLXuXZT2cdyM3afE1Hzid",
  "key11": "4tJ8WLJEg1kHL7tQ8A6aWvdYcHGAdZg7VdZk5HUz6jSeJufzeQzMb2vb4sqKfETERMW8DrCR7FBwKmPgaTzLnnQW",
  "key12": "3dAoyxcwyQNmrQqLmUw8j3pqt4Ry9MisQULEzshhk2x1KKf8HezZ1u5dgL4ehWRN3tTvCdsxuM73D8AstNZGRUC4",
  "key13": "5drF22565jugS95eNWHr188FKyiUPz4Bq9a9CXiXGViJPpUV5qmZeFwhBZNX4ioQ1ezxB9pqP1dHtF4oRTzhg336",
  "key14": "KsxcDYKeAG2HkFC1Up6r3qGdcw5uf7YxqvYPPNY5tAwhAUBqhzFvAQrCiHRkUWTWCPSu4e1neJrstXLisz1Fop3",
  "key15": "1yiczT9NquP2HWKEXZATdPGTPBVKva5r3P8BhGBbYXAFdHLWTNWoLNVZexkMepShRcv5nSwBUXA8zLhACPZJzRT",
  "key16": "jXVU3BzEJDpqmSxT6AX6ray2HbZzzQoZRQFVWysAigQ2GSU7ryC2m4QfPVvSzwNVJFELrdsxUQjmk8GfKFWn4uY",
  "key17": "4B23moui76wp7J41pdvVLHLPyFx9r6YcBC7ywPuJt6f4mHTrjf7QuWD7HetuMuAVpuXonsM6nG5D23Tia326QTLx",
  "key18": "2wNz3twGU8mwxcPGJVFiEbuSxinFijjiNn1XLuuWxDaXQfBaYkBLKmjSvW1imvV2tMcterj1CXEPbFYSdLBr4rRs",
  "key19": "4Jx4sbdubhG4hmkDpxgtyGrLr3j9pfTSYS8H88upn24fmb3wrWXtyJcyTD9dQSPTLFYfZC8DMUP2gWc2jwtVY7HE",
  "key20": "5wXZXVGNoSxRFRb9FFKiGpP89uSahdima5wtYupwPwBgPZke3XoEF5V2AbSYBPf53ktfCzA5vDDstaSEbAVEyBML",
  "key21": "72nQAfXoYACMhAKy2a5L2DheAm4nosWkYzh56dPgtESdkzJuK34HP3L5j1ouZcTG6hgw8zKwM58xiL9xRHRiKDQ",
  "key22": "4C5ecK5SyVqNHeQ88mcokHFZKePaAaeYBNdBMgs6Tb584MX7K2xzokj1qH1T6TWked7VNceQcoAeDfsgtTyvwKU5",
  "key23": "4RxPufdrVBWkrHNAgJJNhYyDoKLVnSVtLhFoD5qiYS5o25LEnj3cVfwzaiPE6WEXa4iXPLaxLjPF4CjAcKcbSP7w",
  "key24": "2vH9io8CywEwGsLcvrgBigWppFbhuW4fn23srFWm3B3ke4igq6fSsUgVdFLnfnd2LaE1BDkFTapQhiFVDG2um43L",
  "key25": "4Mis5SurGECvfMFhpDQhHrCG6ukCnefXnqscUFXSY1KhYVQRLAVsB1WACjpbVCRykpX19iP6YMbMgssHTm3yjmTM",
  "key26": "5xAZqqTjoYfu2iJHev1Qmwkr7hmS8oH9Pj6vvQsQcvJ14NUC9Gv7Xnxobm5SyN4CgPQmMz7gXzgwb8Mcg9e9Aw3D",
  "key27": "44fZE4h6JZYXUFPsc9NdFoMnYqtqC2N4kfqNuzFSPAtbXJniWwt93fwALuigtx5t59DbyNCSmYEkq65wejdj1wb5",
  "key28": "9NgxBeyfe3fKZfgRexpdGGFU21vs7ccrqtWqmh8YvYUmwavf6kj2MVJqsJhVZTv9NDP2YNi77Cv8pJQud7kpZ59",
  "key29": "5rnekpK6JwWGs8U32cpfanTvhhgCjKzXQiyTg2tVzudGCn5hCbQ5zTjLyGKtb4SgVcEhTBWJxhGJApb5AVHi6AHX",
  "key30": "3fZPhbEttNZiyeFHpiG8cjHXxZAxm4k33b7LySoSGMxSs5cXTnnk3ywVE6MTaov5Z5MjXV1db1PNNeeVU2wnvL1F",
  "key31": "21NHnqQfCo761UFpongYG6bz6VzFxPdfNg9oTr2k8eGp6ZZ1URegJeoESV9nKTLgnbQ85GtFz1qo7wsXdp2BJ1YJ",
  "key32": "2nYHtZyh2pFNY4BFY5EuYvZj2fSHVyW6G4LLkEoC78SXYuXmxDGeGvqmynGSb5oBmWxahKLCFRdhnpu2Bj8KsBvo",
  "key33": "DCXWpnzBccKm4KDMQonzWQ9nGLcK7QHzJrZpfs6ymC7Y6PC8MkeJD58PKLGcYMksZtvfTxvGY1qdERcmq5v7xb3",
  "key34": "3RjxmA9mFUr511iS7XRjiGCxUD1Qhi2pj4qJMzEiXkzJXXiqtzJF3kC2kQzL4fxqjxq2PVinUR5fCgaNvsxCFTp4",
  "key35": "ifbdE4iRCVLwLCvNkyxELesByZouznmHeu3HdVe95LhZeiJbe9oH3KEkEVZgb52apCSMJDdzYkDgzCa9vXoCeTM",
  "key36": "4h9v6jBZXDLYm6mVkSeyHyFwV7SSA3W4iYr1LauC2sjtZucxK4xDpjAJvjSRBggTQJKzwAxgA167UeqzsHRuPGf3",
  "key37": "3XvdpLUiKG5CENfDjZYHcztQQSpd8UcMAzaUPFvR4RHHq2VkfsYkXMNdHx9T25XxtJWSqdRGAednR9DPF3Yn3Biu",
  "key38": "2TeJMcRkFVfLvuVcQzQ14YvZ4AWEi6ZgfadM1HChG7ZK2B4CA2ESUPxiB85N28jfpWfPWHX4P5QQTxGYs3o2BJPt"
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
