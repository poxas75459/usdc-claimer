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
    "4jSqeoFjqPF8gYc2gPJvEDFbjpRhu8zLj57YXacgy9zkitX6pYGmKHEAGSo4ameL9baHnrwxan9buQvZRhG28FqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jh2WcJqzHPsTnhvp9uoptqob5ixTDCKcvt4sLQyDvWwuSmnRxdShULkCPNna2uCRvok1bMabMbwxuAT7WS97Vj6",
  "key1": "2HYLb3gxhw9N33dh6PYfk72gqcLmCZsaHtQSrSKgckDrwMAry5owBZuDWbArWnnwb1EXtGa1eUGPLr3EEFqTDLUg",
  "key2": "arVG66fjmkRxkJ7m2QFL2mNV5owRJC2cvWQ1UCbimiCYZAmsDyAbi4XeNyzR7ycUAxUHKhtqe3VW4xR45NM94yL",
  "key3": "5zPJvmgeiwPh95xX71hhREqLUAG1tTF9maeseGSu29KpAu5tfJPkehQvhU7yLJbMCje7Cy6tgiSn3BKx68UTfG1t",
  "key4": "5iVVSqZF1ZjhiTwKMoCFzdmG2VLPyTk9rzGQ1RTiLpXKaHDXvChmwcwvuUDtgZhiZms7mQEDEsCeBxV5SYmr1jAp",
  "key5": "frnfgGw2cxzisdBY2Log2FxEgRhKwCubgANHUC9Z1xNY7PKVSjuSaXXNKwZwwNQTrbHKnHRtyuhoNMceEDFGkji",
  "key6": "5ndReUv5wQmjHaf1UJ2f18v2agJAT9NMytZbW5zrdULetDi8N5WRWej64tnZnK2a7kWfu6ZxyVjJJaVL3tBHhEZs",
  "key7": "4AMuSyL9UDbeYNF44zUtjEYuEUPpHHRpEVpCtfM1KZaoyx9KrpBgFfEB6VQWPVgAKL7G9AvoqxgZbXis28K755Uh",
  "key8": "2Ud8xJoD7DEprZwx3Feo6B92JCqZjqKN4uQAimDEc1gXmBBmqSeMyCvmcpQ8szaBMLvMNJXgkKEERceAyTPhYC1Y",
  "key9": "5KwT6UY12LBz3ds18fTfLMzvjo6SMcXaLFqm4LVphxx4ZoVCtuuf1Z4S2LzYM1XuZfdLMJJ25rEMqZD3WakCuTfL",
  "key10": "oUcVXfUztJkeDYAWX3qEGbtbRqNEEwg6iyjAW5rBmnnRfTxNiE3cokLtWdf6aJjMV4mVYxUfZE3Yiws6JyY5wNt",
  "key11": "3DL2ovJvKc1HSwco616xAcph7pAKxmrqQTvYGiL6zTmfDHw7VdEXPQNkkZiAsP598C8Uu7UWouAEd5N8F7ChJ5WW",
  "key12": "4pSgnUwfB2WdmbGtbcFY2JNSVAQAMk1TkDf6UoQp4YQgMJP82Dertmzqh4SVGjVHZ3ZLVq5JTYJEXmjHR4pZNDwW",
  "key13": "3jXZwVT9572sZXnS6DVQyok6269PmZ6JT2dRW6oWj3TssQ6CuTgJanDzz3uAAw3VBck3zgpiYGtdNQgxTQVUxguu",
  "key14": "2zFU8eKNsvXW8sLLY1UMtpr1NafhL8o5q3Gi2iJCWG6fdX9FGdueAoLEU5XncfQg3TmtBWtzmsTZ6yRTXxxfxZ49",
  "key15": "66WXtQVnGvFaE9bSCUJq6y6fXvc3khAYBYfXzoxbfukFz8M5GHCjdE1ggLvd2rEkz2vP3xUQVXtQ1nJgZn2LfV1",
  "key16": "5q4re6YkUonVyxMe5zoMm3pcHMkmWbStTCjNx4k32m9zvzoqcaCZL88paGYSBBkg7JKNcbrQLrCSTbPVReSDLYAs",
  "key17": "3dcCwikxmhef7fmiecZtsoyV5WgMtRAwDaMvm5tGdK9PeF5kyqfEe7ieLsBBH4KKgcwbu7SGYYUChZUkt3pfy7L4",
  "key18": "5eLx9L5QQ74AXyzPY36BKosZnUw1WVDS1bG462uEQRTLiPyP3YKGFLpxAi6X6wfYeEwp5WRh8BRUbNfkm8K7haZd",
  "key19": "5kre3Q23jsrymeT3EwXmPk4Y3suGL6zxueV2Wt71Fno21MCq6eShvRQmNecctRQggmCo6zqNUoVSKxvFGEhajqH2",
  "key20": "v48svjkwPzxFUUbaZ6inovm9gFWTVqKxcoKTPb3FZo6SH72EyGGi1sote3XK98jmZSThfLKcjbEfPUxHAC3LDWP",
  "key21": "2E1kG1mpATM9fK7hebmpMdvCBtnDGSwzpeRALwH8THnaivyrPo6aJiDmsefTNpxr3CqqWcEMbWzyX6XkztY9Kt98",
  "key22": "mp4Y6whC8eVjGMZJMcvuZdcL6j7qfRaKwFGm22DeXm3geUuPe4gn8RKnTn56D82DTjLPTWnVjDUfZbxMP4audho",
  "key23": "2M5A2Kuc5vhoywzwJULpZnqERBGJ9G6kvL1KTVmnM6YJEkYQDHYuQsxtR7diV4CyPLChXY6LJ5edznJV8vqcN7im",
  "key24": "55N32jWgx68iFy3qVTs5jNa5MxDZ89wpWoYBHKToArm8cE53AcFXC1PBLwcqSGgJq3e8jJ8VGrXDsz37w3Y3KysU",
  "key25": "3giebbiSnUsbEtaiNgrYkM7rEJymJNQMwosWRKNVyXLCEsAeU3mZq3onm6b74RywtSwpYwhCQqeLzgbfm66ji8vJ",
  "key26": "2wBQE7PBdsQcsV1CRxNQ4YZz1ByQCYLiRh3ftNzqQnwnmUnrraRkSCDcNe72JBCoXNNqvJ3mbS4hZC6oD3EQ9bio",
  "key27": "5VLCzQGGoDAJS6c7YwzAYMt1iUojUDAobykAbPo31DgJnkg69AVtS9xpcHdqfdmi7KHRAzmcsdTCdAgFbbJ3FGex",
  "key28": "3SY1M174ESfABEN2wSHyr8mEyGGjQeXLiK27mi12Pv4opoGLJYEtfSxFkJWBfkkHXUhpuNBG1HiTTiPZ2Bzzh5bP",
  "key29": "ZSegAigAkyh1BcNmz2kyfKVM9h5iRtobHcpeR8afx2YDnH6hjF8fXct1b9EhqfMhZgBZMK8wBHc4dXa7eAY5JfW",
  "key30": "4U8p3zBWAMizHkubzjLPJDXpU4ZcLG7CaY9TbmCfnmxL11wzmALv8PNKBKSSLuZKswAu1QAeArafHURQUhUKzfWE",
  "key31": "5kXSwuAHg9yP6ZfEA9hqEF2JYADnMN3m9PUUpceZbtioaSHcryBK3BctYMxuc9wnTnD5MaSMNEjQaVwU1vZG9p6B",
  "key32": "2a3JTApKKAR8Gfv93mhwe5VctbLboUiP2e29h1jbG5F7DnSnv68CkndUneXJxm9X24o1ddo4SbrH4T4YvYkTbzNR"
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
