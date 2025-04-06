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
    "3d5vubyrQywENu2empwYgYSd9t5jC8yFimSfTxunRf7dSHV74nwvUCPVfysQb5cHZoDohnEoWCiaimEcku81mih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mFd1UKavwucgYVHPizt1mspiZmhGVJftnCjr46mPVf1HxPWdaGokFgTg3uNgZYsTBgcgxBQt4Uz16kPyBSouHji",
  "key1": "4irZSQZ8VC18vHNBEgp7rzLfGK9RPPxGf8aDbiL3TJdTZdChvzdhaKxM2EEpoveawxvWeGV9XViVUnugX2eK1831",
  "key2": "5cd5sX7j3tHBiDtytPPXxxuDJqLyAA4QyFQYhfc1DopUNk23uSxkWQnauBRkFFtv7sgowFyGuCqmvqctYbE72vhU",
  "key3": "PTtwLVZd9gDUCx31bvvzQXVwDEw8A6CGqT3tQngYHjhx7A4Y5LQvWXRg61Ef1GGY9Quxk3paCfTsm77hUeGqqLr",
  "key4": "23rWQk1cusmq2FwBBeRBjRE7EftMmB3xwgiTAbMc8TxT6fhJnkb4qBLDGMzbSJs2rSPoAG3GDcJ2cwCi951rjKyG",
  "key5": "2Mmuc6SfrrTfRSf9ze7sKViNuNnS3iM1CyqFCom6KPPG7z6XtmmjUFwfycsr3DmituKGQZazJAguSZAhiHkckpoM",
  "key6": "61dLgBtzgBqitVqAHJpfPp43RCzW2eSN1fHuuyjSnDL9aBL29BZYtcEsZNRztLZptEKgdeqqEFugU8u2i7xwRv55",
  "key7": "2XVV64sdQ3XEX6gUHSY3yRs9KVZkSbFLhH7DjQbNa1CudH6EmBzeivJ3FHWGZjE4uDgHCsjzy1dgCuSZuShgDQiU",
  "key8": "5pq9SatGWp6EHX3hsfKPw9ndjvA6M2CsLZJYnCUbyVCZwmfWngVins2b3ri4ph5Au4z22aYqZvYSZcGbtU3MHdom",
  "key9": "2JLWrCxwAAMnNbAfjPpiKWKX62znpu2GPmZJDue4V6XBvMyqcchgGVVRb6BxjM9gs9XXudie7HmRiT1xfKVSrtQ7",
  "key10": "5xvXdxFb8jYB5fj1e3F29w9dK9NxNnfHsvC8V6F1LUpDyHPcv8D7fHaLnaV7Vw4a3vjhWqZyHFY8QdCrLoj1gKV1",
  "key11": "5Um1vSGbdEjTSQqCoAPVRpzzejNaixFn8X7Do3Z3THkyKxKQnWQnJbLXKi9AKANqjmyQA2WFQL1Ptk9KEk6w2sB1",
  "key12": "4Q5v8KmVu2X8VDeZTDHRW3kq8vPnR5tRntpNom374Pj2Y17EERGBPnViPMrWscmy6B8wCnWsB4d33Z9toNYLF4CF",
  "key13": "EUmRixhVaqoGhbRJhsF6Tn2ikTqoBz7DaiPKd6WDRzXS1wFTaXcqEiXmJ6kCvyBpUguuyxJN4MKFAiTuLxC48pc",
  "key14": "3bzt4vkUNv7n5G68RpZNWJASgGAPZJh6Y4tYnvK4g5GU9R3CKv4zDDcQaaLGXv2Jp5qW4ahyetj9kWc1PSy2UH42",
  "key15": "4VFi76PcpUHW7VHzMtthXyaRnfddkrghXKNeLyw6gx2WuLhFXT7JjtZzBVmm5Bw1ZDwjNJQ56WRkFcCu8BTGruru",
  "key16": "ZEiVCg2PjcioBdD2JtScsT6Y425MaiUNmLGC1m21WPMrtvemhk27NXSe4RQKv96y6FzL9jb2b7JuGzRWd6NUh9x",
  "key17": "UQM1FrU6kgwDHmv4APdbuSRC39n126TGHscgjBg5RK4CLHbcE31fmTb2ystGy69ZgoKDNkGPYcJFF8JpoXohhch",
  "key18": "vL9NU8E5hKZK2r2Rygu3DMcPi9KMD5bUAdrASEKJ9Lvmy3upD1hh8a7knzM56tD9piF7q7VHkaemoMqu2nEC7oZ",
  "key19": "UXwvuvCydJpWWQozLNykH32YRUnDKk5RvhT5oWduCcjadAr2oSW9XiwgXbY9mutcT2V1SB8Zw7kfJpi8igoszun",
  "key20": "NMRqi3tEgsVgrE5zx4YL5HfywbxwgqL8onQur9hurXHRazVSGyb6js2YXVKhYzPKCPA3p4RkwzUzJuyTfb49gEA",
  "key21": "3KmVSq35Gf376WLtQRuQLog8CA8r9R3Zy5ZWNJ6GLvSiwwysuheTHQGVkf1nY9i4pbTcQ6kqRjrXoqDoCNNiNMgT",
  "key22": "XVChuzkpvs3ByqLXw3zKnSszBbmGoP5J6xu5UzoY6p3WgrtCVVSGJR4dN56nyh9GZrbeMdM11gkRs2HoZ45smye",
  "key23": "R8J9aarbr2F44ZJ24dZHEnMdYNrZxc6GDVmbqMBtNYLwRKkikMtsMFYzPo6WLk72L5JgGQDeUWGRFB2qk8zGx2V",
  "key24": "5TMYmWxkwiUD1bpCrrSzPbvvYkTYmMzoYfDbH36ZaWjR39QaJfwWJ2uKbwiAhbhzRaQsj4vRz9yP1YSSXY8Fvvo4",
  "key25": "4sacomjh31RZBCiCgHmRYuUXgXDEXuJ9Fpttv6v82JcKk8TZz93nHARp7UNZSYsWAj3LcG1Ppsnic4whtUEQMG8Z",
  "key26": "kLf1VQQfeahkVyAZrDzWJBSkyJbVEULEMHtjQXCe8LeoTPEQ6ByyrfGZYvZRfYKQjPxqqvFKAy5WeKy8wx4qMMG",
  "key27": "S8QNDLHs5uJtQCTq5FF2nC9kSZeYsjnhEnxFTBFUjFfDCZhJ9RPnHdpMgftkuJGj2pH2fctoJkRCdJQyokNqXcM",
  "key28": "2YmwyubN7K3MkPszz27pVRnWgs1YNEktRFGFa5cdp3JyheDiaaP5nLyxtMTKTVW3UkNQS35XSmpTaS8zRdrL2i2L",
  "key29": "5xMQ7g58VKTpqDafYG8kvMnYjswMb33B1UBRcE49sDcGSfZ6dFj5hRUsiMfzRWRP2fb2PiWiwhiRETQeqEuaaNBo",
  "key30": "2P6irJr1GzgbT2ND5vFr9muZWdNWydcnT5ZjytV2NmPDWrGRaE2kdKHV5LWpuoVPZFyMErhC7ybnCtmzjxTidcto",
  "key31": "23AxQk2oAEXUnzDMf6EQFtuZbe1FDvgVz5tEBt9SkAZyXuQxAdBqSw3ZRd3BhCsTGWS2xBXGHav1vUdZQ6TvRgMi",
  "key32": "36a2NDXKPFzdqEGQG4JM8uesciUHDzBJq5tGWD3xKJHvKwoahfnTdEcxrV3sw8kqXiK3sMk6qbUoSC3P6cJESWDU",
  "key33": "WmitFsaeV7tG1ZnaN7Zg49rVMSQPJoFN5EyH4h6jgTfguKkTQhctX9fUh2ajinYUKuv8j4yN21NmVqUF5V8Vqeq",
  "key34": "5zPAPHeaqA1yR5boMV7WB2JcVr8MxD1U6QtmW1PwjkcTPkPTo5SZFGAKCW5Vy9tNPsN9e6bVZ6r7nAHPyWaYTgQh",
  "key35": "267u1iaLQjC59pMCmwF5pU5YSaHF9y2yFfXdgHUYnnEq2wAVJmLEgPEdhiw2cxSovdM38xX7YX2Ffyqyqnd6KmQC",
  "key36": "4jdibb6yNPcsNn3LUykrJdia44xcwwyc5PLUXH53ZnUMSvaDKCqkLWqhxZyFq7PaTC9CFoNmvwHLo71FQif8vg5h",
  "key37": "WrxkKBcYC8PuwLXVXBbSiB5upkUCdaQnaW9kti9ZnzgnvNGnaiZKRygJc2y4J3nW63zGR9ymv7Vy1uDU6VzTcC1",
  "key38": "5oePbnzjL2XWb3hFt4V28Qif6YMghEk7QLeUxdGu2B6vjESD2kvH4jEFNvDtL255bWHYPdjM6zMRCy5bmsK1FmUS",
  "key39": "92hyHBva68mfTDKRAKhEHmb7tWCBvtyHMsXWEcck5AUXi7cKzEdaSXcJMBN96aLAMdQAT3gjHFvLUHjzqvgB3Wz",
  "key40": "2fyzbhPGCVtwreEUNUtLbBxk2RXuJBdLfbPLGbTjDW4uS1aThAezcaJoeu2RB8GjtHhXbG8pJ1FKzg85qKFQAozQ",
  "key41": "3VSPyhXzr2bjx3JGMLuLxrSTaE51HdMsLE5gdXRhdwNd8k8ndJ3YuP7vdgJVDV3fURuwCfbpFJX1LotFXiexbZ8E",
  "key42": "5eteRQjq38t5y3uGLZzXyzq6J3DBL1bFCHdePUhCGAJ9pdbxzoWLV2iCJffnnD4j2zbiN635i1PqtFV31sQiibcQ"
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
