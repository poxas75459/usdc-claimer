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
    "4aWH1YE3PSEQyaXreYLAaPbjvjCdKRuuEc5dpFcqWfWxLd3Tq4Wy5MssbF5tA7qWppBM3gnCcDjCCpSy7uqQEyYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HU3dVNL3c7Chkz9eFFCoCtrxhCZau7QNjRBtJNPfG3icwXRaH8y9mdNG8u8KjsZQfyF2iAcp5HbQ3vPNYfbgwWd",
  "key1": "61u6CgdWtzaWmYufFnjiHRDWGyJYNMAV1nF61xKteCUEJaTdcj9kcVuSn82PCMfzxhguc6nAEx5edbjXz8fdTWZb",
  "key2": "2sfNiWjFh1MG9h3Q9yZThtMmYAyYmzDLizymL8Z9r8vazqD5enRrs17Qo9FQTNN3jTudyKfNx8GUCi4mRrTsRo5N",
  "key3": "2Vy4h5rv3UeXCmX3HxwG2qv2uFupxTTF3zLchRdYYbwpE5EcLHcgZTSDT8GasBi8dDW5LfXU6VFFgtsXkosBNNw8",
  "key4": "2Drzc3a3h7Q6RfLNWdARWE3UnLnGHYKrwYPXACX4QP7NzErLFoiQndsDfEUrsz4b1xPPFPQtTv8UyqmqXJn4nF4e",
  "key5": "4P6UeeHvYBGPCSXYyPSqvDJpGiSrPymZjf2zE7nNpT5wrwDYyW23GWULcDyBPfpFbz3hhyThFBKs3xwMisuDKpjG",
  "key6": "42n6Y31sxjsXKF7FxaqP7VSvdEQsh1hLq3BZBT2EZpNRPQEsxR2GnHrz27BXEDeRdim5wducjaJovZoadPCp5qtc",
  "key7": "q1zoXvWDt1ApghmoBkkU5TvBqQXeCekc8yy5qUyogB1UBqMVxhexZVRZbhMDYBC3r1rpBHvcovFUV71cZ6tmYys",
  "key8": "2FZJvsUDh5jCCc8F1fA9iVtmxh5nQJ4HKVUrCPVH5UMvqHegsTpz7LGrafMzsd5fxSSb12BRuCFiDwTAitX8N881",
  "key9": "2sVWuGNcoLCWYZN3DVKa53RniBfkF7woXtk4rrYhotZhYGRGRSP5zKPCpLVoFuR2VpZgqyu7qKkc79G1dRfSUvKQ",
  "key10": "3cw72R94ktv5j6j9Aps9UcNgQLMkqfJUWrhQD4oYyTECoLmXhcFuxX1SRmdJRLPEJSeNVhs5gpAj28QG2gxiMiic",
  "key11": "MsTHQ9V7jimW7jEDkuodbcqeYe6wFjjjwd4eKbvraGnFB4P9qf3STkjRvu4CCPRHwzbLeZRoaqRsHg1HxPvE1GA",
  "key12": "5roV1cZj5VjUcUa4ypGkHeo7fH5BPj2NgQUPh5BuwPZbHfpXZNBp8UFspPQFFuPArvFE7hZVwiASmkVmdSmEybtK",
  "key13": "4uzmHCEHUmcEDtdQkLCMwrZgR3P9krcSmsTprqkx4gGrMSKYZKDf9LB9oSSknVpz2KkD2vo3XWXM7LvDTcD95c28",
  "key14": "UYUbw1UsC2KhGMKXL81h9S7y7VRNtWQKZ8MiUgdjxkKYX5p9Fh88moeg6wB87ZtDtGWcy852EmPoAtP1LScMPsA",
  "key15": "3HtAvTMiQGHW1PNbKHPEMGkAByZhC3HY2WZqCeifyvuCpTZYGDHhbziQK8CJoJfk7GY7pFhiU1Nnq7vLoHAFnEny",
  "key16": "JKqZpN6c2mUAdMznxxftSbTLw8mKkSjJEHvfm4tGxnTNWVAwbQxnhSYkXaxj9nw7if15EPXU6QJ21ZQF4yFj7DJ",
  "key17": "5qe6cKCocM4yfVj94ZPSH94oJZ8o8E3TUkXBCXcE1KMXacUyLSyeWicfQYKAd16w1qxARX9EUNKpR9WpvF6czgCu",
  "key18": "3dYhq8yXCLyqzkhVMJFKu2rwBdwrSPx8xf6jocBMVMmQgCCsBEqn8BZgyrbwhVW1jA2bdbo5ZzXnCqmVxxBjer6f",
  "key19": "3ZQbPjWtnJuas7cUDVX9x5JxrRh6bWA4iuSo6HFX2RiZYoWWo9R3TeJQ1sgk4rt16q2mFYpTJGezoreepiQjD7YB",
  "key20": "5VGP6QAacYzS9PWvb33WYoUDJmZyDguioz9YfsqLtWi9jttng2fcboDa4c6u1SegL8gnHSMd2sTgbpo1BQsJwwTb",
  "key21": "3PWFnN1fC5Ws9G7iNmr1oZdvCfv7qSqFKe51LTNo9SWMbVT2KN6gw2wogiAc2rKZAY4m4hMzGgbGLf6xf4MM2T6H",
  "key22": "3wymWBygDQE325qFbSwuuFNTWsNMqEzE6RdohQgeX3LJ53mnzbLBH2euiuMhR5SQWYFzpyTZdLv3ZPRpTTuRPjLy",
  "key23": "43hf2VzyV8Cjc95Mju5dKfvASBJHL2rJ7zGrqH9XP8oQ6oBSrd2gkx3PoUTV4ssaRW5mrWsxcCadZzkPURhuFCC7",
  "key24": "5CHqJdSnY8SjxKb4ZfNjeimCsGD2z95h9XvMh1aiH8ZuC8pJvtNgJR2VUeqkYFxeX896giZNsxMjBKkiMWVgrkz",
  "key25": "UTB9ktCs7qdfPi9qxbEFJrgN89fd4EePu4LUP4VdTW8ReWL5QdDinwgHK3SRzcJwK5xW1AKyUFJ9csJ92uhddQm",
  "key26": "5Df6YZV3CJQKxtN39d37J8oM2Z1euoaAcc7hqngb8Dx1XiQR9etR3pr3qKW1CMSxTEAS8CKfKq3RkJNJXSYPVsh4",
  "key27": "56Hoq721JpU5ggbreiWYG8gqwuHu9yXqXMtyE7rUzXLEB99e2RSgS1mQsjnxAdkKwbjPcQCeXmdfiH3bMZ9z7Z4Z",
  "key28": "3pRa3AxfKFeK6vcSzduwi4SDEKK7HvrTX2z1H1FTapmbQEViCHvY2jkQdcZYHBJm1y4FDes6uYbcze6z71aGAhoK",
  "key29": "2NmMrHAAgBb4uARBdajKMkqgJYqpG3pzMEw7GH2r5JMtnkBPF5AppXSboHvbZ9Cf9V5xEpzfAGuatRgQzT6kmwYe",
  "key30": "3RokZDrG6Sb1m9PcEUk3rHh8oRMnPThLkG8wg8s65oz9Cdpwmkx6cwSwhVzA6J7Q9kKcA3T1VxDbirbZMQP5LT2N",
  "key31": "2Moo8j2Gw6yAj14h7U4DKkNrBdikhwZgHYshabL9bJTB96w1EEagtFyRAuiwxPrrry1vA67WqpcDbcdiXmUyMjvM",
  "key32": "34ZbDpG4XeN21Syk5z1HYZKSsQnA27DQ3DFnnE7TT8SLAhAuxMYS9Dup4CAvsMNNcVHXMY9YUF9g1FK6rGm3JLYd",
  "key33": "58gKtW3fxry8nRtuVkJA7gHV95VsNBXmihohFoTdwsCR4FQKTikABE9ZXHwM2JRbZK9dANVymPQsiXiq8YTJJ6od",
  "key34": "2VcoGbKjZeArUHpcCchWwgTZ6aBAomiyigZWDGm5153giSVtkTLb7GNHtPh6JDPr4LDsKznD43m69bP5Trz3dMY1",
  "key35": "4rZAegDPfzbsWfMFgRALx4Aun2qXiRm8TM9sTQVpLQvyZwg52tV9vZFrtR2uRJH62Bbm7rbb3SDvH2UYQ6btwqzJ",
  "key36": "4nZaxzHb48hXnTZ6ogBWoBT4vQ9SKdovqMYAWRwsLDU6CDKVTBKNFKkwuRjnKzwA8DuRuF4QQ1sT4WrDveWbBXdj",
  "key37": "5mHqvdLpr7jdgLQ6cBw1Bk1fZ5cHgaDSK1UxqaqmtYACk2xEQHE1wsKJ3Gnk4JW8Ktbc46mrMvdx76WYAdnZqW5n",
  "key38": "Lm8Eqqs5LzHePoMZAuMXT5khvs5e7wNo6vna3bY8NM3Fc4Hox7oFNQiixCH1Kxq4i2AqTVTtMd6bfqJvLU3frAC",
  "key39": "3AoLCRQz2cxnNwCDeHz4BnsfGMAjmDpo47i82RVvBiRPGMgAdarEPkAymWyz2o8dHpb8YUYFt21RP7GWzYcjfAdd",
  "key40": "2nNimZhUhQrsLnb8Y9MFizX7dCd2cpAwch198a3bdh7WyAwDbTV1rxqqBeDj5ctnigAguPLbQ6Vecb84CxAeeNB5",
  "key41": "2P9nibf5hPn4en4xVDdQRgjCmtFCYtP286HQtabZ6G3T6JmT8KtPtFWVKgNgQuVWdxzP4BKFqQCuERugs9BbYd58",
  "key42": "52gKN2eQ1g7s1FzrW9j2iPBqpjiMigny12qXEuEafKskwSdYRtwQnEFpgfAU5FYtEeXGmxjwqTZsLX2eJDCMcsyH",
  "key43": "2YBDUNfaN3AYez5kcRa4CqWMvtKe3ZyEdmYT8iSnb3zmfXyATZ7rKY2D6AZZKgZi4Bps9ASfcQsAAPFTNVDRSmip",
  "key44": "3pBqkTL1WgDzMoJM38v8sSJoZS14Fud1Mg73v2DgGZEajGNEcqgkLNaKv4BaTXo8EtniRzrBmznkStCP55yQrxoA",
  "key45": "3jEi5urpWLcWv6ELGmrGmz6ELVZSiNCtX7gfZ8hvz5YeciGLZPsnKQXaKxJNd3jUFraELwpdLWPuLz97zaapwvf4",
  "key46": "39eqU4YSc1sU7XwBWjkciagjwt8NaBxCHV9qZR5M23yDWZFmBVs7wEAnHVcAZcBkXafKt4Yk1k5RtbrcXrGKxhy1",
  "key47": "nQgzb2gQRpbeHHTMMYWcYf9pBLqKtjJeu1pWkLdLHy2BWZkvN2AazuSNtmLN8V3DUEngXdjSKj4PHcEhQdamB7V"
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
