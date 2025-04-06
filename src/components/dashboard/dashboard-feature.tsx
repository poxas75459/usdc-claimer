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
    "c4QEAw9eS3Ydtmp36XVJTMxtfmqsQn7opcRsL9GQ2FyMcSn8WGrBqKNB7daM7Eg32sbQjd4BQ5GH2E8h9UVYCGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r961aWGLpq6GrgmdoCFbPtBJHiMk7sxyZkKGetbT7R7VurRgf8b8eMLypDpc6L3u8gwPKU1XwoBjEYwNBza1fh",
  "key1": "5DspaMKDWbgjkXyjp6MPkCN1iny74sqpCnBRCAkA7aJAohjg7kdcWFMLdbZMH7asY1ahrumP7mG2uoR7wFjfY7ps",
  "key2": "5t8vt55c7nAdeHYJfoBDz6UyzSco8HTSs4VdXSzmdAvqAsYJr821WZ7dHLr1ZaCVsBjyMFUgqU7rjDPksboRZV4y",
  "key3": "2sWGCofr1U19K5U2cz6tUYskRrUCaXaSQTeQPa3jsHyGhgMj69Qu4fXG3MwJAy8Aqegj4Y2dBvsbLXDzXpMpV3f4",
  "key4": "5H5NkHthhX9qvEsvjDwo5umwknMovSWtXqCML53yau7DrmzFJ81JR5BheLT13WnCJ4uqwYsyK3uH2wwxwuertTR8",
  "key5": "4o5MjVucpJkxbLdX8dkKSx7yUgS5M1Khm2UzSBda4GXZUz63Zwhc2GkHK8DGAroZryia2p7ZYCghAiZZJoKNxbmG",
  "key6": "2jfgWMVhzCbQqnPzzZoxxdP5P78KcEG64uSeTrV2PzcNzhYaDvv1NmSeir1w7YFwEopmc23CFeYKBdEVfs8PHxhU",
  "key7": "4x4gnQuh1awyuWUm8tTvprktYkxCHiA7ULidPkTp7BWPbGiG7SNLTbzfo2oBiZFS9aBfq5R7pTMSCvapveTo7ySx",
  "key8": "3PRMzRHXFXqhEvLhFo7qg6wsY1zQ3fzV7EbS2xis5TS5FuVkpQNdSZ6Vx5joxnRJZPpbTokjDG6ZbuMRNP9iEwc4",
  "key9": "4kdkuwhY3TdpwMenm4yqisFkpuXz1gc4UXDpSxpCEsbRnk4ZWsmoJJkBCY6ZGGTyXCCkEbmXuFqdTW5g1mExj4Gp",
  "key10": "58PRQ56yWumSC37FomUGw49Po6M9yX8icSo9zJkxZQgXuuLwgUsvEDU5proQWkR6SLdsMKTfuASE9BBgvuwmtDWZ",
  "key11": "3DKrTx9jdX9SnREv3wVx2yVxWjLfFqYkQNPn2sDL3x5WjiuaddB552sYzgKv8aRM6UXCLwTWYMyNsUnkA7k5Yaoi",
  "key12": "RYosbLcMAEDYy4VkaFrYs5uykPUNsPenAheBH8pGDfNZTwSKTB23LHc8YevKKisAqqMFdxG3q29D5nTuBcDUDJ6",
  "key13": "2owZRDDKyoAUTTAbKZfQZj2DFqDDguNdG83GRyaE5fuMB7V5H9hr9XPrwFJG2uEfjZrj1PGBmdvL61E9JbxDfVYP",
  "key14": "1BJJ4BJ3pxfUVzKcHeSoKfznAmd13qu6S3jnHe5pLmoiDm441Y34F9J45EAi3t5fESigesXUrUdg5r6yEAkLhJn",
  "key15": "rdQrri19ViLXDGbFiEEimyu7HfxkX7kbAmbowvYd1Zfnk3TqQpzCP6sarAfaquzY9vxKXoLTiu2wSBkM9zVk2wJ",
  "key16": "3Cm14oByM3G7r7GtA2HCneseiZCNqKXBzdJseHzh3tdfn5NJKNsgwdNPX2sX2f8kLbC1RmGe4FwfKF25uqfy7iwc",
  "key17": "5mchMDTDSYDLXM8feHahT4yePrk373uP6zaHP42fAz5dEKZuSDJnUQ6UPzddm9dAdfdf2NzPSWtNJHGhR4pst92X",
  "key18": "3gAWnxdVafoYNeUgUczy546o5F6G2zM68jvJD3bPKKiMPzLuker9sLA8D8u2TFkaHvD7TmdnnV6PA1en2sxr6Zrv",
  "key19": "Rte9SspikvGERA315xJDE27trNe4oaP2fvRcZ8TasUDLVNb6KuNzLLzcWoFnJZZQojLa5MEzCxQxHhPeMPDgVSJ",
  "key20": "5t5RXZN2sCtjKdvaozE2Yz4JfhiSHssYWLPKTGCLtJUhhq1nxBCnDzUee7EuE8veFUJcBP8sDFU7UfZJQnf2a5QM",
  "key21": "4xxb7C9oNgQDzT5hXnJZZmy1vMjRPrdmqYjTdP5jaRL3HLH9vESsKzds5NYazpgW5m7vucte2SGLTFX1dirUM7RJ",
  "key22": "2GTRHpRAjJSAYthzkpfRTJk99gGbiqWwc85gFw3wHtMHPYrENbvQKPvEJnwBrZmm2vUK982vzJmZ9EGwW9u6tH7X",
  "key23": "1us3rPaNp5yXgGsVnmU3F3LsqdyPGLdJGgTP79vCdohovECkomMvjHePhz6vQCa9ou8cxrVgqA3U1AnRm46omWC",
  "key24": "3xDXxEKXHviGZeHmx6atQB3DmDSuoPdd7gtGBhvAFXn2oi3NBUkFeFqVN6dShmFskaYEQUdAaVwcHr2AQm5tHeD9",
  "key25": "5MaZJRVntdgKVkuNPMEJ7TSpgNYQ4HkgGQi5bsDtjVvFWFyrmw8qjbfmjkmiUMEfhsQ37QorUaJkMRymvzXqu1aC"
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
