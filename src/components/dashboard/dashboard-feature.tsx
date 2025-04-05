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
    "BP1vSXjvu674G9EoZNBSz56XcqqFxBcM2uzxFNzgAiCs8PnJGM9QseFJEh3sJDB315kD96NfbC2Z3DF3AWnp6E4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CkzejSn95RSjRMm6qGnv7LL3QEZiNdPPwdUGXZneTRhXj78jvJP81b4qVLc1LYxrfngPwhwj8oodd6rmmoJb7oq",
  "key1": "5px2BYQNPCKbvyJmYrjspJdc2RZU4b6FDCdsGgYU3fSwBtKStDVSAi3k8e71U2jXEWhr7iJa3eUJQgp3x1yDewtW",
  "key2": "miBrMc7TXdHCherVAzt434jywGT2fjnNt8a6pcqzchtSaHsth976VsvLWtKrBF7fJtoUGXbxXDSkFH9GqaBpz3K",
  "key3": "5cctBRakW2ZVqTE24iALQ23LrGQ9pkGe3GTx2ZBEi8NeK6BCwKqxaypJGipqCj4P3c2pshWwEgFw741niS6q4BNG",
  "key4": "5pvMCDdB7n6AyQjNexWxB9qcGkKMDTjHSL1k2nWuad944ny8NFugwpf1LuhKmrPQhGXfg9WgU33dN2anSjVs9YzE",
  "key5": "5KA2pntQ5cxWaVGvYSKGVD7zKuQvPnYCzFPAqJMneib5nH34SeoV1y1tfhUS3zvNBHYA93pdnBbNPL8c144bMoNX",
  "key6": "5ogKgmx93Z1L4U9Xc3Tr7QiBU936JwXagmotTrAArmgfzC29nPrQDBcHV1yG2im3Db5TWjmgNzyKwhjmMHLsd36t",
  "key7": "3P1SQpo5jcmgokVjgA9P3uB68e6RDUxg8nBFhixFqTS7GxY87NSY2GVxczDhUbNkBUFHb61GcUwBC4MjzEeSsHFi",
  "key8": "3ogwbgYKDDu7koqwc3cHXfbwYofvHc1AUJvhEtRYfDkSWnzk5cvoTLnSxcXH5ktdf3EcoA8223XDDPmJWRQA6RBv",
  "key9": "5BCghUmyUFW7j23Zyya98g7q7WgoPR4f4YMLp4VmzKTcZZeXuH4SYhDccHN1uwHJyVTPrPcvtb6byAr6JMMp2skV",
  "key10": "3ZbjDf7opSn8hU2XJbuSX3E63s1FR39rb7FzQju33Xzji12wo8htzEWEAF2unFMZMCTQgV5k3sdZDsYtVgm1MT7k",
  "key11": "2puRRjskaP5cYSGyvbawe5C2LBVYvw2Cg6wLPVoM3wBecdpz78ZEG1RR77jnREnJA4ZDgcZscmskGnzFUagbtmzN",
  "key12": "44aCbNbaw5TDxRSoWU8f8Jwec5gqTbntNvkwCYfctDuxfMW5zxEeYKhZBA8KaYUeUosRkdvr6t4gyM2nkeaDTn24",
  "key13": "5Gav2yNDb91TKhBehFkWSy9vK2vCuHY6fqA2PtEWCtByz9NNx4M5oKeoU7FRVvtdPpRWAdR6hutLZZgwLq39ToYQ",
  "key14": "2eXwdpy82tf5kxfeFooGhaGQXs3qoEEpMpUwyWwenXdznMhDs6ha2MDRTtFUhyQ6QwppRrFjsCbYXoESZ8X6nn79",
  "key15": "5hF1EvjXcY4m4yFjx3MhFsxXvN5Zj4FSiQEhJVBmZnyPuUXKTwkvS3GvoyuhazLSfcYFu6AE44yPu2oaH4DXEf4N",
  "key16": "5Ad7oEdRPyKEU6SuQdkHUnTMmT1UAPfFJDLEFYGN7DR1dsjmVBoFac1D8z7eCNPqKp8J6S2B6yvb37hJ3uRXGzpW",
  "key17": "4PasWB3YqF5SqDTEQUvrGD9CWKDYdsTY9hrQrXCZgYQnyUXNrEAgUWGFFrF36Uvxq5ttRDLrPpt8Cr63dtF9URs6",
  "key18": "581BT1adEh8mw5FGZu1k5fNLyVpSnbNrX4FWPhL9vtNTewnv11yEaX5qxZjHefyEiXLNP8Jiht5Wyd39Mqwab6j1",
  "key19": "eabTBsGJKXh9wijn1731gLmSyRGYvjfFSpdXo4AdqRfJThF6Epf7ovkLbH1D9Ps5Zr2zqQxejsHiiTD8nE1N9Vq",
  "key20": "3qTRNL9TiN2Svcqzf4ZViQnRbcCTX5scJW9isZggX38DbRhTJUZcNggCHW95Qfs4bGpsSxXsq5C4qivq2upLpAj8",
  "key21": "5zkhWgGjHw3VQxt6VhgEnGiqtGDAFsXhQaQRMTjNDTr9mhpjv5qq9K7bpPw1tcQaGGKNZg6rCdAqHaqrrtiZE7ec",
  "key22": "4gs1zuYSCjTWQsdmsmQrmURCsJxF13cXTQWr5ibdGdnCPyEqdVr59Vcq5VnjKxmbdrPAJ5AB6Hc89ooLagMvbiv7",
  "key23": "4G97SprCJ2ZsNzCLHsrQU46xAeATvmGEC3WP39tNr8dcqwp9M6i3g7YtMWHKM7FNEKwVwz1NtA42JNDz6hAqtRup",
  "key24": "4hEHJoW15srZZkCNws1LJvMwAE5k7ipgxANWH82c4zZy8WzVmkPZiMaovctNFwr96g4ms57vm2ArxtK5jkvwyFFX",
  "key25": "5KU8c1CdNhLKbRyCpybMwEjcfBHdrjSQh8G9sGMmo5SL5oFSUEkD18ZRc6s6ZscoEf5XTGjEycMhGKfmS7Sfa2qx",
  "key26": "5U3QtW3M7kdVCpPM2GmgsnxqDXoK8FpQsRT6zADm4h5VJSwnEPm3E2pRBBEUbW425wEB5aW2gabjC2mUJtHrryav",
  "key27": "3Vq7wmBA15Ff3ykRWAkFNqwA6YyASAmnvLKACa5B8XaUNuisR8dGyrJCRKdSKFsYX8jr8CuCqpcGiRo7rrLXSEwi",
  "key28": "5wUV8WC5XmRctRCH4iRRvRPRL8Xf1TrVCgATFCY3tRYvJrh37TBxCvSQBrt9vYEXxDQEVSdKG3ZAMotBEhDfJyZf",
  "key29": "3FGCXDTdb4tPhCQSkp2SzqHStrh9xjeVX9STLGhoVygQSGiFjxTqNDoTKcFUSuHJyVbs7UxEEyY9DB6sLrqqA9L8",
  "key30": "62ZkZdP8qcrTVQz9G1niUGg1yx85dWtutvjLg3VXFa3QcMaAt5jiFj9X6s33225D26hBFe2S7saoj3ShfqryJeSv",
  "key31": "3YKgfXSZhoKYpvCAN9mfni9Hx1DuaTUhP2fLSL7U87bQ8nX8WkMbd2hGLHm9ydS3Ayzf6qBY9c2Zq5vijWvR3LMa",
  "key32": "4cksx2ByVaevUrwm9So759gQdd474ukZQqDFtNw4FouxUT9Q59hpZUtcNcFMYuWNEjSe73CQcJuJ2DscbUJx51Kk",
  "key33": "4Kk7vKV58r4LwrgmgZzPqCjVPucoYuS6kk2XbkTH37LMPeY2b1wcY4ehyL6PdkBwqssVxnv4dKxQhaMSqrUCL6wB",
  "key34": "3DAZaBQaSopfM626dxGMP27DFvBpu8CNf9TUF7QaJRBZfJHfcnKMzk9DM5mmEEjMhmJRvxfDzjuANpTT8MAZGRJ6",
  "key35": "3hX67oL311E6YLqDUmVaZa6nSfq6vfAUxCwWLG4Wbn7KLZWUdkoL4afcWR5HoncJW8Sz32AaTTGbDu76THJ319N5",
  "key36": "2T1nTuLPzukcx3KFEU5WR6UXLJcddiGqr5mq4g5jvLU5dS1Q1HNJYBC9NVjxxp3nxFsd1xoxhtK3y2cfFHjt1bJq",
  "key37": "46RZjVvzrQxCJo5y6WXjhumRJPvkqrZZjmxAoXy9X3quKpSMKM81Lwz6U924hXZGem712E3DbgT3oNEXC6BfeTck",
  "key38": "2RqeriVoVUmDoqXTJmp2gnbTniaYLezaVeYUMpe2ZLXhVPzcyb414D9eMGdzVafFL14sVXenrdL4Ra5W4v9Q5dN2",
  "key39": "3aGKp2aC9SQiCSgNsJVuyvj9JAubLPqsfKVCQ6vmNB9vkJqWUJXbq1z9K1RKNrEmuR2wkF1qGExKCrhgfiSuBw5T",
  "key40": "4MpYnH5py8cE4sosyJmFsC45DLji1M4Sq13ozpWL8KXVRK3zv2EEumA4fHXBr1BsYVQx4DSBofEzPDu5j4E1T2g8",
  "key41": "2RFJo67K8zNfw3zwpZNRCCbMcHwKNtodzANuZgNu1KEgiVjKxsRB44swy9kTPmmmcrJEriK8LzcyGkZQNDzpQcSu",
  "key42": "57NT6k4fYdWQF1UHHnu1cMsubUNi7FZYQQdqE3wCyB1K5fo8MmmAfxvLwBXeZWxFV8wbzBFmF5V9kT7L6Nt4CACB",
  "key43": "2EDoDGeFDayMc3AGAvj2a4wty4umUChUGXZXJFQAXYgMiwGqgjX62pTiMNoa15RzGUPYADGUm1PshYEbiUEfhrSF",
  "key44": "1NUL1fodcXZZjesUf83oKZ4J75DxeBjQFDqmHN7eGJ7pwKn8bKmQAvbFXqAZNcrBDbDgNcefSWbak8bqYuR1K3u",
  "key45": "233TgH8GJ2KwB3CYRAdwmTKfRvoxand1THYPHaPBxMwnNjY2FbGbsHFhhXZ5wbWJCuZi9QGXN22fakBa4Ghk85Sy",
  "key46": "ssC697shFW7XGjTm3K5qrx6W9j3H9aZHfgQitZb2r2GvpRAbz5JANBwjnur8F5MtTX8tEhXTNxyWqCnabwwwu5J"
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
