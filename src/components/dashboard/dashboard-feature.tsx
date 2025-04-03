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
    "2AebtbXnVJXBA9SuzLhTpSwGEu2NMajn6tdyJvHeiERZo35ckjJUNffzGnYKg36c9k3PQ12k9Dba9ENjXb3ti2ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EhUNsBtTn76BbCj83MwxygC1FXBx3kgrRbZQkG7R7MqzZawicAXHcZgHk51vBrTN9edR2x17wfWB7WKym2UtRQF",
  "key1": "3fGcLxihdPQB86UHJtVGEhzFSDdYT4UAF9qgoh3BfFC6BYmxDaPwePaeRM2j9yoQAeiWncLNdG3GHMdswHyNkKsZ",
  "key2": "3SAz9aKv7SEcybxsfJohmrUYX3aWShudEwqj196yD95mxPaEbFG6xLiM46ZEABR3d7f2LyyVXcaoRmCQZkfM6qmJ",
  "key3": "3h2rCp6zw87kZkDfXecQ8ao3fkU59a5cgHZBZesCTtqxxzFjswCSFNxjdEueixkqLSoqcLMkAzzqYwLaiRK4p4U9",
  "key4": "3vb9LT1htZ6QLUSSqfNcN7mg9if583MzLT8UPnvQpytppZAGVJFKCcX6cnEGGrFDF1HNyC4YG4Qh5tyGKJzxMpxb",
  "key5": "2f3NtA59n5DA1zerxd1HiErC1GauNWr3r7F8BZoJpYmEmmKSUcekX1Mrh2LjQGvoS4tj5suCJzagjUUtbxh5NEDD",
  "key6": "2xaqgcG5X2A81iz4snXNqCCZf9pDepJCcZg2v9saDf6BX9WhcpLVzxUc2iix1eb1Hf6PDiLFKepN8GadxRznQhyx",
  "key7": "3fwzSqdTXpwFwdJbGMurbPgHcERebLQP4AJjEL8gg2crkXdkVTMwLPhysrn4346KkEcSd7wmbrSHAwVGGjqgz94X",
  "key8": "3bhCbAPtYupQT7wVTVReeR7cfLYzt6DyVipVeFHYwovuKYJaMWSGzxwMNjWPpQieMjZa1E5D5dEEwND7NnMjPyEr",
  "key9": "czbCHFoAvsvvks8dexyvUaPnmtsxLGVkajeJrtSf4Mmndo6qKCKay9An4RfAya64YBqHZHPnzE4dAvv2fbirocB",
  "key10": "4qsY4cpvUgsmGARixiCrWd9D3mmQdinEwtzodsWfux5ANuAyQ6F1ic9Q3yNLK6mjHTKm4bTPCzCj4sKKYf2JM1PG",
  "key11": "4gNtpejmxzfL2STybR4KQEPDsk44SzuNkr1d46kreF7jLT4icY5P6MBCMi8eTdkfLrfrymYRqFRRGVNaCm95B4xz",
  "key12": "2ooMz2n8TNUDHYcsmjAtwfx3zARCdED5XrY4RM74Uv1o2EkiJgfK1XUR29p8P6HLCPbnZiMKWz1tbLdh9QeGZoRW",
  "key13": "37YPmoiwQ1yC2HRs6bSd7aPQjofwUMXTUFf4qGEe2Q3EnLHMVvGyWioC4u9kYdic91Ac1DDVxwjBSjroHcu57oGT",
  "key14": "2JXLFPyMWNfvdg59i69ZngHWREp2WaH64hXH67sjafXiLVJadBWArBak6rwP2TzqxgY7fjfVUr4HBmRuD8yj3fHN",
  "key15": "6Bv2D9hQqcMasvsjtaZ8Mvp2vSeBdJGL5NKfK3bXejBUE3jfZQSDk33wd75QiYLxpBw3cehmLjXcakJXXZcieT3",
  "key16": "JDC3KNLT8WfZdgYoFMT6qgS9eE8e46PQVhhz17dvUquPneCWTq9isZXbG8eBzKCbrWmBL8dtAwEVSRsofH6UyMs",
  "key17": "2zrxFshtPiYGqt5TjsZ5oZFJNSjr6VbCScW24oiKP8NkYtHiYZHDyh7Q8ZeA3ULGJGNbWTmrwqgMvSa1FP451Nx7",
  "key18": "5QfxUDg5cnkrMmU8HpyaXQuQbkKxEXreKG3GtDBURo6AZYWhj6vDFFNxgmTCGFPmy2mjKKzFnGZXthQFy7kDmALG",
  "key19": "kji6oUZiSvnoXnRCrU2i7LTMow22hyShzWjqCzn4RywsLQ1j6MpbDj7MgoQn8MqT85T3axjJ6t27L2aFmKjTifY",
  "key20": "4DX5vV1LJXG1644yM1nw38rar5tn9DxhVhvbNaviNGgvKJXeHEjookVy9trNvQREfLHxEmMNd6zqFND4J3uFh95u",
  "key21": "sGkMjmSjfyGoZKSVN7qCuhQKv745avfwNbudp81oTvg1CLZzYCrWkt13QvYKMESkjxQ2XhfceuWrYHgGFi5kQt8",
  "key22": "2sHBTjEHja6Afnw7zJcRMDc1EAA38YdmdbKLDgjBtXMSwf99ZkXVkttj1kH8FStjtWj1FgS4q5AsFjzWoKKsdpfL",
  "key23": "3QeuZuDnwiJ4j42vUj65KPSr3vWbCdUP2X4QweJ9LUNMD91Yt336YQ7La7t3DTUAFFiMoX7WnXgtYNLwmvFXvxXy",
  "key24": "V742otsQenTQycRVSZNr3VPPatjv1yEmbv4vGGBcbUVr26MQNVFuma5aQqbo6fV7nfkwofmfTqV78EZUvNwuZBt",
  "key25": "EguofZQDBTg7h3rjhu454T6RWVjrrFZhDeVPJNxSfrNScn9useNQcyX4c7E3NYXP6ZVMg2nMG2jTfKP3w2pAVGh",
  "key26": "j9Ng9rffqkVVHXLdcEobJhYwrqeqeZHayGawGSLTz8h2WjQ1XDWNng3udhafWe8AZqWEPQFgSXQ1vvaT8cfbsfy",
  "key27": "2GjxVzE6w24iGCkhygPT78FHATPd7GSYPTPa4oorohBE8iBvtFZtghMoMsd3JLWUCotiEXgQRWE5zxn6xda46x8C",
  "key28": "5zKfywAw4vWj96x4pjwdEpsoYGnjq5aDdWvvMEssgwCPE7DyRmWisSGTGcQZRYrkACyib3imXttVXzAPXojJ2C9Y",
  "key29": "5CEY6KndzeozHsyYMQc8ms53SeLhDC53eDvw2rbaHHXZZs6GLh8JipTs88kZSnpxfB54p8dzDwjqkWZqcGcxHPpJ",
  "key30": "5KmkP2QjpKYQa8cxhgieNZEKruFyY88PwH8KjsfyVP6Hx1RyZQxep2ANK2uMLLmVsQbWzw5JRyCkgG5SYMR7Sa8f",
  "key31": "26N3DjWCA9Uruoz3HeTyqApFLzp99f1D9CB354v4zYPp9CX87BUhK3bg9TcU3nUpqn3TavoMowgJfsZAR9znGTku",
  "key32": "2nBEtsVKMnwMb4YNEmmiM7aUSMjH8njJ4PdxYzNVuE4X3TMmSLcnZscqJFp5ZhpUhQJk4L6353mvvLPUA5FFJLwN",
  "key33": "gvgRpGYDqSt4XTEx2aHsKdsToqU8TcdUAYbrNC8RKbAdtC9c2xRmLzEkeoB7ZfbXJavaeDwTuXEizqjXn4T3He2",
  "key34": "4bnFYVajz9v1VkZczkz92tQZAbwPqM2taqEpKgGHY2zLUi1MGw4jeFpL41P3NQvvWrfpX2zLEWAbHJCHJ8hyZgdS",
  "key35": "k3U6BEryuAUpu6UvFhhW1Nxqauet3ECbvT41odzqEWVhMS2MzaY2nmGgmSFnN1LWZKYYax7nou1cJw87pcfGL47",
  "key36": "66HWqcWUiAY3kjZq6YQEKGyz6XFR6ac1osnEWwCvg1qP1V2M5dDgmuLaQQ5CbwPG2KV2f7gzL4UzyFFwbeeQna6o"
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
