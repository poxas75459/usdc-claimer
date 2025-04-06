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
    "LshFjkBCYmNieA59KCpxjma7RbotCxANvTA1Z6LLBSPLKjbtac5Q5BPNQbniHCcd4Vnnnnhjt1ajyy8EUiZAsQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aYqbCZwu33MkXQAH7QSkA2xXB1C1u62aBXYzGdQQrzhQugKKgMMH7jhjLmXBgx1ZBMamQpxVeSWd5A8xjJptJCX",
  "key1": "3jagoSHQPNQC7s3cnznDYT87QjqdUVHduVQ5eiFCESZahTcJNVjk4426GdJ13wguURSVjx2Lm42miro4XvxCMfzc",
  "key2": "3wxWnfoRRdJxmhjakmNvH76X1JcrsXMFCZFWGjnbzdHEJYp1yKrio95P5rBGHzXHzD3VAcBPA1w8vuQhkjjkd36N",
  "key3": "259sYA5Evsp2QGRZwHTVNsiChKpfD7yWiDpNQsLxSqyn11BWTQJNUW6f6pnzMVb3HkYckX7vxJbm582KLLKbGDWa",
  "key4": "3M8Poxh1r6yKdH96zcesUCkmkQXG2qaiHj2hbeMvQaowRwfXkZPTeTaazfUEGhRvuV8qsW4m3xTJuRf1hknp4P1M",
  "key5": "39vZiK2XqVMabGgytmUYxw7fQBsjcuRoe2cto7PWjen6pZqnu6TQLTkU2r17Ga5BGHYmVLHAfuQLRhuLMQGrbtMz",
  "key6": "4DsMqt1mW3oTCy2jrbM9u1tBrPQtMn5bN2skuuhtfBMa4VZNgeZbC5fAbcisTnZgyZLu7tmmvsQhhdgo3dFPFJBd",
  "key7": "4azae1j5iEdWrJPuYtvUgcrvWiEjegLskLZBPstznToPy1GZsk8aQHEhcZHsgzxFkGsi9ZSJZXXGUoqAq3qGrJt5",
  "key8": "5Ry2k2SrtaEQBpUSa7HXp8hgNR4zVotoJbM1L6sH5EZRHbUhh2N48HrKZTT5Tzs7zzmcqUz5nDkeKZPRo2356Ycr",
  "key9": "4dCnHUucgiiRH6Rf6zFnkcZcg1E9RGA5FG1reQuM3Pr7k19dEDEmtcDNiSPngrCfMFsJmJthoG7kH1FW8yzLLZkX",
  "key10": "4zr21dFRyLRoi76LRsbvNRvT3AENE9YpruL9kQH8TA5PxjFfT8DnFgmxVz6MdwAQjVA4n8e4uZPEVLUQWJWNHj9E",
  "key11": "4V93VqGDW5aEzadQncwq2fyG5edWtGZMwVvr52LMpG8uCfEkM2STdVT7pSB1zrcNChdZLTDeoGECukpMsiLUrhRq",
  "key12": "2q8e7VvjeNrjBLFLbFAcwDmXNEvFSMYCb8VUYJL7HAfssNE1vYU8d31vBtEsBVXG8C6kdpLp7Yu4bghcsDcdBEva",
  "key13": "3xueH694bbx1dPckjnFGhVTwyLkGDS2GEEVGR2auyWrcwqVs3R7jZjMmsmTANqBwPyyNik1SH5f4GKVcwB17i3aE",
  "key14": "gejVj4HwvCnpHVTZehyeNQF3NybqigXcNqgUXyVdyPH9thNnEFYRzwZRjLqQZ45NzBvJVCTc9s3yKCzoe2i6Wsb",
  "key15": "5RbKFPcgPdgt8TR6RmLbFGQQJqayomGK3wWaRCJFoauadAWEm8Zb2LqrsMhjnAAVQ5Rs4MzjnzVE8UzgoLhKDzNE",
  "key16": "41rSDjuUAyNPGYQyCYr2UFYDuWkxKEMbenLskLbfNF1szJBcicMbqrfxqZSzeBPtiV1e6T3J4TEAx8KXx2JjHKkp",
  "key17": "3ZLWAJQkdWxAJbLjNbfgAZL6gmEwjNQs4UzrrBqwwxpE1Ke4a7RZPZs6Xq6Yt1WrLXmbhD6urNB2e3RFpJ1NQrTB",
  "key18": "3zsGyjHXycVJ2jS297SM6c6Bwt8iFFL5q51DZUk1NXRZqsHJaAJkF5TmPKb8se2JFFgyyzm3dnJY7WHeacc6WHqq",
  "key19": "2dsbYk5YpDrC23aeVrKagQ8qyNJEYwYdFKKtd3nnp8yaVQ5xgBYbTc7eoZNZ9ABxbVY3b211QYvCSQFqbS3VvYXm",
  "key20": "49dVoZm5CaJZ2Qd4jfvRiKpy4GZK4R3ZmWt92pJdnYrXFgCm5bNWPtZoLz8KtWZtPUxcQ2LvMvnS2p21fVTFVrQB",
  "key21": "4xtbshrdwRqjKVY1Knd1YZ5hegdzPDqUf3o6sA4EmzY18SBQTY1NbKo8dQ4TahEbwEAyRUpwHtkQyUzDDLmtxVSh",
  "key22": "2Tw9ayBbhMsgkmd7gxJHXzoLXZgD6zpbkSKZhh8ZkcMtCi4Y9Gp87FWgJtpp4mpCKp3bWmBzbiosUsyx78BmAXe6",
  "key23": "4aVWdLBVumZUgynVKwDJH44gwZkN3CqjhrtUuTZL8CQQtyniHd4mM7uX1YSFfduFs7HjD1dVeRCFAQNKWSJYraDo",
  "key24": "2AkXkgYVL13Coe33HRgEaziaffhzv5QWwfN7STDFRqTAXpJJj26pa3SNTme27jZ3x5qyrVB2xrxi2DtdFpab17Z",
  "key25": "2xXxaNrfBVYUhjQopqvqX75Wn4eUjTy4yoo6WxcjCZQUQZi1UYYXsPF68jTEzvZCx4fRhKQvQuYsrCor5qiuSPX1",
  "key26": "2omp1fkt1XuSqHhRomGjEuCfeQb1UqBkL4cYEHkDAqkgSQkr3bKUa1s53jV3AtX4Hwgg2qsVzhCL7oJoTRUiFaBt",
  "key27": "54ezMZeTAmHH43pK4xQ6YKaNdHMnQmt8W4uorxHMzx3SLacbfaRZMHqoN5jAyesTnrzux3xxXEhNDeGBpR86kBsP",
  "key28": "5crqjeb8bBzbg29EvBuNzDzjvbhtHzCFPbA3eaU9WhR39c5oe8aapPbezbK84Eyo2SBEaHf6c3qBXCLcbyoy2Cwd",
  "key29": "YQMxUhbZSVrvbHAmTjP7yaGdwJNqmzRsCTt7cm9c4DVsDE9rnjiTPvpxZCFGUfx3v7V7XijCBAkY9974wRX8uNp",
  "key30": "2ifdreJ5UW5G5Kgtjs9g2c3S1fHrzNiTUiEVDH6pvCf55M2stb99Crhi2MtJXv88X6uFtC4QJdeuotHMQsZvyg6n",
  "key31": "vbeyc5J7TyYmkXcGmrg3Q1jbauXNkWLR3tYtV9g6adiLsX4FhPqDqMzFF7w8u2YPRNRQgAvyiYhaTumS3dZtEwy",
  "key32": "54oHww8hyBJZBGLj4cZsdBbR8biGEAkytJW657XBB51UFzHs47gfhzLwYJDjzPnETjWqYWEhuqHQ2n5WuMaJJumk",
  "key33": "4mkv4vvWYGhCDR9AW6NqUS97MMEWGySZZ7H3bVgcE2YHQT7nWSbqX4kuTqYR3f8eoPpJvyFhJZHaKJyfxuWksVBe",
  "key34": "4PCPYfDoF6YHo1fu3acEY6S2EC3Axz4mcJdVSkoJkAESaDw5BFszhSRdxrqU3NsXc6NwADv4uocjVwdphT3XfArt",
  "key35": "2BQqfqPh4rg3TiDxgNGCggVaNCjfauh1Gg9PyxszQW5N4k32dimkkySAWfGfii7yEnAeBPgbU6UxeB8fufp2nhyn",
  "key36": "496eDp8af4DBdantL1pcxcydNKFY1aS3xi4Nu4DAxwZNDavap3vM7N9ffnGFrA8Sg1GWkK4xESUwZrA4jaWs9KAT",
  "key37": "2yGCPyagiGPM4UMkNyurNBqjAcyHDVGLTJZ7Cxz1nScKSUbbn2S9sVBpLp9ZCHo3t86mbDE43gGc5eD7MvZDCBrJ",
  "key38": "5BUzMfrA9JMwBRhnzRQKCZEq9C5U3QjNrisiFwrAwpnLTiNpz4EhdPPpMf6mhV4Bj4gbiDmwbKuoXFzCFNMZeF5D",
  "key39": "5bJScuFKUX3jg8qAuNWkMzvdgFn3tjsncRJhiBxoik6YdPSDKZkf7LFti3ym5BFuEXbEnK5Kj8Le6q6yBwWiahxa",
  "key40": "2PEnNSHZx7dtLRogN238HgtWSSDuj9cARAd3odND4GTJowiHDPhRewFvqvkNByQtyZuqansh4X5LemJwQeWahF4A"
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
