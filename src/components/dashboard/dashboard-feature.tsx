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
    "3ihLwTjk5Yo6AF4catZcjQcRBt9nutSVziHkHhNXEBgWFFmJLVTQx7rxQcihvqgS4AFGNJRYR5iZYxdWavY6utsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "294yAr3dMCuVKAYb4Dvwq7mgbak4675ECdHwdS27ZKuEuVao9MUJJq2rEDS1rqQdxbTaDb53wv1SJkXj7jnZT715",
  "key1": "26RBjvfWfZV1mE6rooS1Ae4LuSTWWHXBNggbifX3QTbn52PDxjEo8K4PVsDPHs64MFYbB9Y7CHdPz8H3CmqvuJrX",
  "key2": "3vC8sS3wtA2riyG4Wp56bPBLQnwwq6w9Ty4DJ7ZGGfdvU2Dj4EjEcP3ZQdKaG43VHheGaHbo5uHoXKABsDNq1wLt",
  "key3": "e7S212yWFCG89a7W4tpCyJTAm6MTZqfx3osopp89Q5Kuq4YYaQaeDppEbw8V6Sy9V2ekss87qWDduU17S27JVNz",
  "key4": "4RqyarsTNkt7wWaeEPVxT7on9fRaiVmB9gfNFU1JR8a4HRE5fSnxJPZi2gufTZtLuUQcgbwu3pRgAxsuTLLGtsP9",
  "key5": "5Sdfrbi6pe19vwg1FLHEurcYNjkP8J82cD89sCkHn8wSo2M3RR3RM6LTEyA8ZJ8yZvMXAW6abFJcmwXEuB6TjxqM",
  "key6": "25q3f2vrrGpQtdmRgksiGJdbCLj1B9RRAhiSUzywyoGgaVZ7neUzJyL8i7P9KtNzjDZ5LqVG2cKT9ZaJUY86rCHr",
  "key7": "55JznqUpjtMYBw7pzRFZFA3Lce17GExM55Rr9C6AcUk3m3B5Xzcjom8vQLbZc5peGWp6unnXx22SwJbkomaLYFKC",
  "key8": "4CVsy4RzAKHnTAiZFjVZdaWnnjNoHeSnkjM6kCMcFCHJ2SehEfyX3N4tosa8B9mLe2NdS17VJPpzLFNQwi3yrbnt",
  "key9": "2EURRYWcjFFuD5r968CqvSRidaCrFAgd2CfRQPZtzvhNUnCfXpRaCNoZjWwmeq8GCvcr3Uq53uw6sv1yzJFMHGwj",
  "key10": "ovhraX4Tup9vVz79aEVzzLzxtFFD7D3gbLzadd8bkL4MbEGJ3ATa672DrER4d8NTw7YEgZoUaXeudKGh5rnay1v",
  "key11": "3KUoEAY8snuAu1ZZYt48nHp4pjwCkDVxtf9xL6jfrkRQiRmS5chmTAWYwcFKembapZJe3GCcg6NGSfHULqQxPAVD",
  "key12": "2TBbcipt17GLka7m5bUwyKVAbiaLuVHiHUaJ4g18GtA69jRY7ZGKU1G4wSZ2PDRZHoK1wJy3bortvts9tsqtLNXm",
  "key13": "2oo1VQkurcMYePE1onQo5DhcugxKqjYpyZ4cHcwe88gNZUGXnhwrzJYMJfW2ZC4aj9HnMn3RLkbkggUvMUN1ZnjY",
  "key14": "5tKuZan1wRgzKqLJBf7TrWr6gUp97YNHgb2cKQG13kFMAtXryu4HcCF2zNyqxSudP9zExNU2GADKPQCor2R73sY",
  "key15": "4zoJuEE3tt66xTEaMt39F8emo3g7QrFfsVmJxYdeyekSLUDLQJ615gkZpiTyJJ7pnebtKbR52WwBwUVpC1Hq1FWx",
  "key16": "5Ry1gaVL9XVDgMRnmVdgD79fdaKwaoM36jPg6vfchKLDKANqzJveukiCsF6naFkiLWmhhNmxWDbXojsS54opneBq",
  "key17": "3Lwt6e6UrirgktbgsNGoc6nJTUfB2BPnEm1bhZTZHnTEqdWhGiWuFhrc3kRrwyBCRzh9EkqQtY9BVXpvsXbiQ9Y",
  "key18": "4TNayM6RtL4jLSmL9bpGdbaMQZqdz4BWkmN895zpVsKCuVXsnq4rxFsVs3B9WpqDAXAzzQCTadZtcnoDpNdK2Xkx",
  "key19": "5b6X99jd1S7e7VR8zcHctrJoEooqBdxMYLMRZ1F8XGCEuRbsWE5CccYnchZuWnFLyQmNZP6iEspch4RymfkfSmAt",
  "key20": "iZACcd49jidGLq243sLnjCe1y9XDskC1jLLh37Lgq3ahgZgRE5wZ8USNKWmsxLmwe6qJ3kkhxhD2wRBF7yRvoLi",
  "key21": "TGxZrhaxKMPNZorAWEu7K4ozjgHt9oux3tJ5nQfHYR7dwQiDhthJZW3bQ3mt1Cw3AdJtCu7EZXRWda2rqTaS2s9",
  "key22": "5yigVQPMPucqVuuuwT6TWEobyz1xooMh6tTGXHDGXRf6prqLZNMerEW63CH9ZMYUrJakjAvCTZe6wBuZ25pTufZn",
  "key23": "595J8Mt8j2kn2uGgnHPQZZZ7DF2m8ncbJe1z2wXg6P7koKRhdUspFSzVNBmnB35RcZPeaLmzvgLY5qe25Qm1ydYg",
  "key24": "2a5YkG4nKGJJ8dRhZ3pcFhSgmxytiDtigDLK3VQHcimz462nXTAGL2Xd3MygNmBwgAko8VjNSxXmyeYNRc2cxiMS",
  "key25": "125qyya6xRydgmrCPkMR4pJvAum6pRX9rjzbXCnbZgsbQow8osHFWGuzK281Asm9c1MbKuB6ACHFLtAFqkCH3M7w"
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
