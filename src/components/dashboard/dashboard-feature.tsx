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
    "5gt8TAzx5FT2xagLvjyoeZVoY38V61nTnsjfWcEVgbHzPR5jwGLXFdhugmY3KYL3YpHMbsz11yuobWPdykigkfKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44VVkjT4U7NaCqGfHYJKAMUGNmupR4PBEtFz68BNDyaBuziwAFdM23UvrtPuSuMNW2SHojJRATMvzWSrE844Cwb6",
  "key1": "3Yjgnxupe33G4Y4mYvdCPbj5ur9KstPVtHKNzEW3RSACvcCtsHMegBHCZUL4YE8cCJv83SYYcdkwNz7oLQwAUmdE",
  "key2": "5aPeUA38HYjwaew1jZVFExKnmbFsAboy6ScfgygHEvvTXT8qqtchtWnqbEXtCeXV43dJQujLahJ982jow72tUmGP",
  "key3": "4CF8sgW8gMu7feNNrGx977MmhpDwHJ4brz6SNWLLWx9gtxCSrLUZanNnJgHsPUvqLQdWM5s4rPuy95kxTQZUPm65",
  "key4": "zZQpqQkTUFuDCzqy9bsBpFyPqgGFQjUXtw6xtmzqEdgah4jwhZYuc2GjRvHLCormLR1jpZcmHk9gXAiVHDdM9P5",
  "key5": "2hsKGETC7tweJm8w1MCeTYW6o3nLBK1kU3FWbt2Tc67onWrciXg5gdE2JZSMRBTZ3on9YqEGH9paZcsaG6opRKQy",
  "key6": "BNxyfXp89QnGSFnbc6fdUx71MiqHNwd7rSxZ2SZXJNP5gkFzezvGYWumECiy8rXkTgoCjCVEUg6TdbTtmticAnR",
  "key7": "4rQxFKmhmMqJARJj3BaAEGC8tQ2ynQTMejtv4SMk1JvR9Qy1AnKz6TaWYG63bTCNBNNfPo3HPWj98WPZC9Ym8YqY",
  "key8": "hj5zDwxF3Uyo8ZWxofDCjNmkfJy8Do8TsueWr7StiEKsCXX5HamJmLpXuTv9Mo3gx6grqABeDLsXwrUSJvEFZE6",
  "key9": "4v7Ukk4i67kXTMERfv3BuYhxYqAMUU8PrVtKRWNd2GfVLKaGbdibouJh5MtrharpGCrhETGn282mbRWYLgaW2aog",
  "key10": "3p68wWiDJHeQ5gFv9dnTwZHprRsGg192Bn3fejogTgoVc6pSXPJTJBJER5x87uFkBVrMCZuyvAW781tyPLu7hF97",
  "key11": "4CJXMJ6Avnn3NFGhfgyzLyMSisATswmRHf8kGiiWu5vNGzgJUxMZXQAupp5kMjUTfuQY2LSpLULByxyBPNb8aaDG",
  "key12": "ze52kQwNPCHnKguoMZ9nE5PnuVWF7vBevZD9LKnrYHPGf3zr6M9P4gubadvfgSsYoMjfskaXVYXS21BisupTZcE",
  "key13": "uGTx9G3VqbA3RcAVt5fGc9f95JjBM1dpj1zt3zdT2b6WNJXXaKmK5wNYgtaxDXxYJsVa898XaiCdxVn9aESAfWU",
  "key14": "3GHq9dJ51ZfD1dDgAmNNTfxA23D6ocw8Qt3PGm6aGdwmaDyZjxCDuwiTknsjSc5cbkV6S9Yh8sBv7gQofLKGxKLp",
  "key15": "AHgi75FWTji5FPfM5mb4GECvAB52jBMuppQxVzTVuRskuxhZyVENCDkkey7k65C6ZTeT2sMZUX78QQCtKnpSknR",
  "key16": "tAhDUV4H6x3mXGhNJhzDS7gENbvadZvjmbiR9w4r4udZuhaYESyjkLtrRasPM3MdsC2xvhYd5ZugSQ89bY29NxV",
  "key17": "4zDkXUTFrXpMKKb6DGMy9AwzxpRuHdmdGPtdgNRyJFvLP1Lr6eZGiFGBiDhuqofpWd3nPgznJkJ9LAGree1LBw5y",
  "key18": "4GfTHbwjzzHQWZF8om4TGmrbcXLktieV9Q4a8jdgZYm71gJsw7qR3cnp2XKP3z51ffAoZYeHpweuucf7zU7ef5pM",
  "key19": "5MqdyS2nLgpLiZ7RKBMxXj2aevJmSkfJ7GPPki4z3ApfyGfYSz7eWYRdqWBHkfmi4ewNWghQerofZ5eJNStggiZ3",
  "key20": "4gjxADEe5JPkXrjzb8QCoWm34QMXpnVKjTuTtj29972en2Gmk68AzM6moD8b1ZFMdnyBFXtUXTjXzVKrQyo6qgcm",
  "key21": "4diGx7HCJ119rvN2RUDy4BUDps8qfLravCzCW8y5hqVK8Vb6GXu3K2yxB6rKT4xVzyGYNgMB6EH9Mx69aM1in81W",
  "key22": "2ZXpmeq8d7FFNgadZjmaQqZJ8ZcpTFCAeg4Dsts786sQCoDg5HNG5XJn4WEBNvhsgH8Ymzju98PRY7zvQ1RhtKH3",
  "key23": "3ybEaBVeZcSzNfbdKukZV1ZWfVJgU7zZGm5dm35QqYRDSoNuWWBPrdUKHTJNo88EBmoEixWxB6UqaCDTJBJJVzef",
  "key24": "65N9QeecaDn3A2QUSvEXmwSZijVrr53euL9kVAovoMZVBqhG2w1rsitkXDSswZ2es4CvqVwG4HvBchKStn3L5snP",
  "key25": "3dUomX7NQp83vi7YhhGNbfCzCkHAEMHSFXGWHC4tVM2XHWKhWtfe5937QNRGkzNWL81DtskcpBjbC3hH8cmjnMgY",
  "key26": "297tVGBQacTMoXiprwGjT6aSKZzvxiwMKzDbJHCVnhdiDZiWQDoSA1wcv5EsRAo8DeuoEaQcSUuBE4y73zLtxmrG",
  "key27": "512uQ5kf2LVXEFqapyXzErNegzzpfy3TU6F3FL6fx1CTZCajwYQX9Xvm7Q1pdf8n4JByd46u524Jhp2UvTbJx5Nn",
  "key28": "24AkKggzsFRnHviqWzy5w6YcWz3DLLPUYeRuWLhADRfmQMnQKdEw1iyiasqCFioudGuzj4w5q5YfiiUDk5AB5Er7",
  "key29": "Uzh9nJ34oAFMxJ17LLY7F8HPC7HiKK4XkwnE5WDYuU56m9NaGfNhTex1qJQbbZcYqkD72hkVNPCHKBabY2oke2A",
  "key30": "4zwvYD4BtERYGW3ZxpApNUoGUQsKaoCy9ss1Fxx7JJsgWTsvur9P31Qe6Ccg3QBMsTms2cJNmSiXSYuzwnJH4J4f",
  "key31": "4qhjq9nhJtvjFxKCNsbmALAgYPp3aoKpot9RmUZQfsCgE5HJDgwvBZ6rCZgN4nh1juCvgn4Nq8MN43GZCaJaAGkJ",
  "key32": "WwW4SU4uQyCF4uwA3kjt4JNAEthQBxHDE9Mkma1f4giqqXzVEid9Y6tunVwmpCgitqf848EfVMSkTa7GCjXd1Tc",
  "key33": "3dax9tWRWknaQVcAmHoyxmUDQBx383P3VGCUCwXStyxtuLKCbPxdtYEh538wnEDXkREmAzKbTMtyLuDC61g9rcJ1",
  "key34": "j2RDE3VW4kwgtKhVvuggh1fKqCXNPCqusge15YnZgbHhXSD3RfgmEgSujTTkosDdZZBqw4wdfhd5hd1Eosg3kE5",
  "key35": "25GeNg33UL1v7qFad99ndX6YBDA7NyHrtPWdDAXLWK5438nXYoMZF9eQQwaEkiMR471YJAMgkps6kxFQfDxTBxx4",
  "key36": "4QuRbbUBN4PV8fRVbcBjdD9FtXwoY6yw4Gfi6vNoYxhHcZ5khs2sjiCAY2cN65oRsBMkjcfKU1AB2fJCW1juLU4N",
  "key37": "5pPfK7GZ1yzvdTwBx5Uk9MAQSHagG4t7gDg7ubkqLMaLZBfWUVfv7ViVpSWHnYowaiMkCMkGkfawonDb89cDDPQR",
  "key38": "2AsvfzDDunLhCh65DMekZ4iWgse4QLj9yYq1smrG3pTX33SbSwTfXEW1siM9mMGQ6ML3zv91KmryoCrdyQaikzFX",
  "key39": "4WdAMcWuHMQGF8u8NupVo1BDeMte3iE2qo3iChJ6Y9rnoeQE1owyCBGzmsoebbYjiZjjrUn3nbtZAzkdDit3GdTD",
  "key40": "4c2ZKu2Xh4bi6jLMWoZgLumBE9tZ48XLHo5Kr6MMbmK6EfhzL2uYLrHmFbpaC3oy4dv7epCbD5SZYbZvCYvwoL6z",
  "key41": "vN84UFopq9tD2QuWNFK5KNp9vH8ish2c7qge8iHt2eQj4tGPaFkdZGTtcTQEyQFA5wcXiA6iCsvMDX29DG56UCZ",
  "key42": "rJDDrevbGNfGnycd91hKQsHSXT2RFRSj4cPrzmyzmYfJpmWA5UoxceVjFhLiJauPFb5hFJxHa2W2Ap6HCxg177j",
  "key43": "1CTRLvyfXC9mGUFFJkccvZN4f42p7EkqqxbhxsJMQkym4XNbtnkTsq3ShViQFXqjz3se64nt9BwL9WjuLhSC9BR"
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
