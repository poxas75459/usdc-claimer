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
    "3AW43dYHvgVE22SWzV2LGtHvf78THa9TvLdS58WkaTTeZ84aeH4PgUxbvupgHYuuNDjn7Mgsf2dAvmeK9A5mjcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vG7A7ECr5G3ivbcduV5mMPGBhKFrFwiAVtqZtDknF9ahdtK1ECGRCHnG8aurraWmEkvhEJ7jNBFBBK2QcTgkNSM",
  "key1": "fVHc1or7LyHrnc4kDQrh1Kc5VKshswKmqzGS62USwhcGwjDU3sGpYmHajcCTp2uNzN7twfEcFY72nKTof7qSX5a",
  "key2": "3qq5Rziy8CQyfZse4Nqi3CvGfZTz7NNRw4TSQ3JtrrCPvUgURaXa7bfMdcaLgraDEuQGMPQVtGDGZBwJv4oxL6D7",
  "key3": "2keFhrjS2y4dd958rtPoqFYZc8S5UCLuhyqQ9h5Th6qkxWycQx234NDYY5Af8KHd9ViJ4YYwzWg6JtXeQdp1R1P8",
  "key4": "h45tfY7omJpM8uUb68JAS2uxx88nUXcXrrCxWroHFuvtXnVzr7BAYmFqsLcf6bmmFPeznMJpgwsnrE379CkYwVK",
  "key5": "KD1hm7pVRnWRbowzX18GqJ7wyhkpCGSZGuJapG3gqtoY2oMzLnArAYiMDmn2KifRTi8VzU8iMkM3mzpKz9ywN5s",
  "key6": "5MR3c2QKHoiMyt9HGXL7A2oqMfwtcYua2rrY2hoMJU7TcTLwG1zav5a6Jr1PWPHak7js1PvqF8Pc1HG45T3UsW3Y",
  "key7": "2z5dsY9yYHstpXbZ7iPDE86mqbEN4b5PSvSF8DYd9EDQNRQRGDFMtrxy8ZwGLW1wvkmQYsCoyUBkfvHBZ1sYCEbR",
  "key8": "tCgnAtPWdquhBePw6YtDsjTLvq1WYJUW9vHQGNwKvPT8tEJYZDpcYP8LRJGRcfKot3CpCmvbsd1BPuqXdGgSP6E",
  "key9": "HJ7vcXTSLiQvYNeviL3yUEzcmeSH7BqjGfJe8GefoT2dyiPiH28A2oeGihxfod5E133QTJAR7cwq3NNYPxTqVZM",
  "key10": "36W1hnJRYwFJpoMfrUpR9hH1nb3Zy994NY7Z1Gz9ij5zeWMqJZXq9o3vgVKejn7ByShKKHGKsNimDFGMpar52HWt",
  "key11": "44xyxKjT3vqrUYjE78kqoME4c5a5DC7PtpCkbCTz7dHT9EwJdqYcGjyoee7C5GJMx3br9AXVonuJo8fLTq6TxsBi",
  "key12": "36y4qbtDLmyC2x9Zm3BSahJvzigHnCKjY5royBatDpkcM7rS4KiGBTrgKQ5R4gEi99yC65KhGDa1ZDwQ9FvUPUqs",
  "key13": "3hb9yzaJakqLbJGN5j3mCi7Cj6xpYAP2bqArwbYhLCgJ259BkKqSXKtLYAkTcmGHNyRhu1F5ESvdkrK2uLyWbZJg",
  "key14": "nbKNWqkcLEBjUx2F3no4JJE7UxMSdoZjCoePaPde2njjZxYb3ji91pWQWJ2SQBMLm6uX7Piqer689J8BAoq4QBT",
  "key15": "4R17j37mCMQd5ZDP8Ua1p3NhvgmJwQLvZowcctMCdC8eJHS4XTWKASuF6U3v29bFMBGePuuC8Y2KJMvhUqc5ZLk6",
  "key16": "34c4mfJpVX7oF7LGN3cM3rynB5HFRdffzYnacWfpf1FRAWDnXGqk7qBrYai5xYaVxTHXWD74fjqcKT5gi9WpfWnY",
  "key17": "4LJVRXXp8AShZnC8k4ZgKxXhuuR61NiSRqtEkTA2HgTT3ZSnEqRvLcLPWoz98WFKpeTqC7DC6tt8FzpwS8AX4KMn",
  "key18": "MAntA3Kb7apmerWCQge3QgPZiuLXAtwKGnv2uEZi87PJQm8PDN64gSy9GVpGCjamGxfT8oRkesrCh3TcLCLgagS",
  "key19": "3fqhTD4k6MHL6QWRPNyeDEwdgd2ZmjpQWuEBX1vprbBBATudWxK4a3e3dWQ4oXZonEjvvqh7H72CeMCCfqtaude7",
  "key20": "23KnPhmDvun7PZcQaihvy2tUFHNuG663Cr3D6H6Xm7e9HHkXiCYtDop1FENRfDv4xuR4X9MtUEa8bM1qPGsodx65",
  "key21": "2Zr376C4uHveV6siuwEe9AVU8N6boDfU2YrbVs91BTrokahVA1VJVyYFqyQfq4HQi4jT564f62AGoh8jjWRipqSp",
  "key22": "fEb4Ccj1J2mHRa8xSUxWorxckx263o7usrjR5oEHq68UyUUygTrGr5uyPqjxxEh9woaG9CVaMihR7EmrbUK32vK",
  "key23": "KrraZWfA6kDFmHNzn6CwD5UkxMTzAEhB4dSGbAQtZPyyaJyTmmEonRrCFCT5RrmeSLv2Lz4dSVrEWd6wFcQZdUH",
  "key24": "2AGRhQnUuyxnBup4mbnHQKJKs2uze2wQ6Ajro6x1mdECdohiZdRvRpGAvbrPZbkDao8bRttPkmjrvFTUjebEm9bN"
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
