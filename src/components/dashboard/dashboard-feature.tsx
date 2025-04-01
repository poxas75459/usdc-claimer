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
    "24A51gCGYsHU4yJXFU3Kqpg7hhhknMSJAhBYGRULVdPA19YzAj7dK8W3JUxfH58Ep8QoW3dDQRNC9wXAYJmbRMBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ohRjjpqQ4E96grJRBYpSdNyweqo61jv8VuEj9FoYKiXf5TgwZLrdXsfBaLzdpqXiCM94WNei1LmYp8pPb2vk2zu",
  "key1": "2m8df8eHZMaeNLYwqZhaArFgXngLgjToQYXiv8NheBEVhkYizaiK7bRCP7c7Nhegnkfq6U5jFYsdrV2ygpMKLZXV",
  "key2": "42nV9P4MnKeY26BX5QnwqeMEGBnhHrTGd6qWyPT3twhhAj4boFKfXR4JhXzrm87qQMMTdguXGc5CWh9UhEbBSSkt",
  "key3": "HVkgeBdEDzvt9TKRTafVbkfWcCpNDRG22p4jd7UGnTkzcWJZAWtngRqVcBLj7mfU8H8QTi8fn2AiHDGpdfkEoF1",
  "key4": "45AbzQm6XsPCd6TkDhs2TmGCm4n84srrKcYMhzZHPbWeSZUc3CmokSHbmTBCv9pe5t3XAVdBSrzRBVtc2yir8oxT",
  "key5": "33zSJ5PTYqBWZjz4AFs2VaVo79yZs1qaYvDAG4EXSBeWdQNVqn2cfWxymEG77r15Bb7jRrPYajmtmjyHryJgHUvd",
  "key6": "8i7G8uXKk4hWfSzqCC2ZHrzVEmexufcMJTAEjt6Tmuwi75cP3K6ZNBUa3ufn9d6uz49bt1uQmr9m7mQYjftKM8R",
  "key7": "3yt2NzAfzWadMxbmMDcai3j923392MvUQw1Q1W7HJLqtu9zR4bnqPEUyjygNFCQZH6cN1eRt2QC4rfTYiG2PvmWo",
  "key8": "H2aHu8XJRTi6xCuc8HSb3QmUBEAXwecybiwTdLBSuKPSgwWc2g7N2sgrXHXM9T8PyzcrGrxWc1NTyPujEoFQu4A",
  "key9": "5yK35AvsLxrkvFkeVVZ2sofaZsi78r9Vugwvzmz3oCGQF8kSDMgYN8G5biGoLt9ZCfWd7J8EDPKyAeRZXu1MsajB",
  "key10": "4C495P5TfchXAouq5nMRML5T1gG2cJx54g2LuaWBw5VT4KAszDERpWFzureMnTmrHSrshMGLQRKpc2yJGk1VHfvx",
  "key11": "2qvoA8c2C8JhQXUp3X1Jk6m1QSzTbKJXvKQaG7FFRZJ13ZzeqRi9edunDrmPyXM91tD4bNJQKaHH6kjVFoSYUJ9i",
  "key12": "4sfa8dErn1T1sAE7KpCCsfWSEdDpE5XY4sJ3ATyj1mgDudUdnYJQupGVEpAjxWnjrhgckBCY9AaFcjPLr5YdZudT",
  "key13": "TCRFkACKCywhzuETzGgqWNYKM3aeNJTAm9AKSjsRpoETW8RPuVAo8KQBNhA8SCLwir2JLAL4V4NkAvmyCLNmNWN",
  "key14": "3cwgr83vTTf5HHXLhcqdEqycHQQkhbAiCL6RppWRi1sWawMnqedDLxX7gcKyR6GsuSuMw6h7HQk1G9My4hjXunUd",
  "key15": "A6Da9EgwnG5AFsCADgf9EwTFGxeor41vQxPrNgb1BNjj1fKYxaAh4UZ2ZxLqTdg8Z3zN1ML1KEf4pJPY2k4J9QL",
  "key16": "5W7qHv4MqbmQSHFtT5fZmUGaG3EdPu2PFd6XjL5tS7CZLgqgyJ9en9jmaYViWXEz8ANYY4Lhup9nS7v7A6VDkeUz",
  "key17": "3Ai68LGHDaSMHtFmnq7ZK1JyvJhByycAwb1v8GKjijAo8PcUWmKLqP1tTXCtrDrZgTYSBCRz98xm8RcutRC1EL34",
  "key18": "4CJTKBrTiP8k5Ykq7bKMj6v72mnonf8ZDfyq1GioJXRPaQ2awjqhhWXHXRXgctxTmME8FxKGfEUgprJveV96e6yt",
  "key19": "2VvbYSut2hMMHMRugzrxMoot31UzFUy96PL3UzMUVodqJPQac5XtTJ1UNKv2yRxpsMqZ9jBxetngrQYrxD62vUXm",
  "key20": "3jycHmxJ1ukaAbLU3janmbkf8eHY9aVjqwPiVeu46LvFkNQC7DmATR4FNTv6BVoDQzSZrj6EDNfNuRXGYEnGdd3p",
  "key21": "5u2k5n9chKFqN6HfBWNy9axymebLRQGv23n3MtvdcHURsMBMfpmziRTcUww8tosHEQr9bAg93Fjv1J94cNxb9e1o",
  "key22": "5X1ArNnsce9CjdZVWB9yY6BUn47wZNa1NkEkMCN6H5uoMNT4Nbn6YTV7RktvXeuFU5QDCESGuRtC3H59NDCWvwXK",
  "key23": "5FDGbDmUHYxgnwaQxQDMpShBaQXw2kpufKcRc6dx3kAwfHbwxB5qaPQ9u9KMbdGizqgUtgcUBpEqs83Ejzn14xba",
  "key24": "3vYkkgPZ8shWtd5BYVAUcHfWUwtzCSpUcD1SmnKMixJinsA9B8RpiZ5ocyC6796tvG1PcrogK1qAxAyD1X12eSs8",
  "key25": "5o6gSE3uLdsmSzApKccvS4Tbyfp5Gr3ScQ62UNibXGtDMzuVoCk6e66Y1H1dUu7WCxZMxX9HtFDZXdQBeRWDhe3R",
  "key26": "2XFK3dMFQrTJ3daCZBFCoGxq7TGvzBi3Xmzsw9qZgJL2WL5wL2arj3o4B5FGdMJyt3KHmQRBwLq1z4MH6bWEDQRZ",
  "key27": "5WsTALSPcHKffnnpBRc2EzQwvAYH3Qu2Nkc1g269mhojV6KgEBJ39LwCatjsMkqVBgFQszsQi18AEXusP2G7rFBh",
  "key28": "5NLymKV1SqhKBGPLpq5LAx81JXLR4jtczWhseK1apyqmRLL98FjXPxJUigdQR1wy2Xxy3iWbZLmEunBYoFBy1jSF",
  "key29": "WMKVfg2edDPcemGCghGvXbqsRdQeKo3VraJiG2oMStRdSW6YVGTrPgA8qHBNKL6rBdkEKxLvQsZg7xi2SgFvpxe",
  "key30": "64XnQD8RKthvYfZzknvV7uYnMhJVVMe8XRia6SP3u7BJ56R12cR11x1t3GgXLxJkiFRsBoQHcuddNKdc1CTGiLrs",
  "key31": "4sYQYAbUEFZcbBPPXSuDKGoj7mNiaAYvhV5H2dngZg9Tu164A1fxEoBBD63SFtgARckyF93QDfQdvpVP7z7T2cxd",
  "key32": "36pWeMm9BEiNYoxmWxCc4mvWrtvsRNWe6ri6xviTxVHQ3QXSuex3SZzp7h1WjAjfssDZEtvk2rQbMCEX82KcXQNd",
  "key33": "25ykBPUGXBUJ6fWWtpMyLyPBG4rKbMu5R9HD9cJySosskXzQ6GTJGeB5HzYRb5vn2ZBfdHTsuoi2tt7VBYJ7cjfe",
  "key34": "3C5MDFGWxkWp2WzATSb7xmM9c96TPde2LTL9LBTnnL7Jd2ssB7jb1yseHfVhhx9dEVQyW4LbpgZZrCSWjvCzfnR8",
  "key35": "3ABcUwgZ5kCgWCMwvBoyRWdF8WdpftdaQexUkAvH9JfRb5MyzXJpmo6L4U6TowyQU3xhADqmmLf1yeU4JcovHbNJ",
  "key36": "BisDRNJUXKCYsstP5P82D4CMkM6UqM7LrjjU1sqjRLs1xwcL4Wcxuqn5vF7VsP9fR9mXtF1QD1KTiPFX4H658Z7",
  "key37": "4xMbJxmmGR3ShnPVNDQH7YwnstKsPjxbpExc5gdgEU7Z3eG7KhfbmgjJkytewzPFVGGnAaRURHP5sGCzupTaKuH",
  "key38": "4c8ZaJsPqmfiiRiqyUXajVu6FdxurxYhQtrNotb8oRzKhagoUNtobkg8YxAFPpp6jBuVrag2ho61RuyepdFp61nC",
  "key39": "FUkKAXRYZ3MTLTJpxpNtgZurDHUpoVpn6TEgExpiDPDUKoAkiFVXurcsnhWfC85T45Xi7Ek6J7V21KTP68GRS7S",
  "key40": "KeCp2bgd6HM7xBzjwUFtfamTcWVPnzT9PLmizCoYVN9YbqPtdwxpauE4SdEodYLRcD5WJdx4ij7LZpXeMffv1Rf",
  "key41": "5FpjebChqUXP4jGd6Rx7k5bLND63FqX89WtAJoLXHjUG7NHrNCT7XAysWPf2SCDeKxfh7GG7GsbVqy8sWxb1TZjw",
  "key42": "EnNmqbjNJnWZUXf9Po9YCA3VK7yF3zaYMx2uQc6B9dsM6YRwhsz3fGZidGD9kgvtHC5VnbFtZnBit2bAxUgGhsd",
  "key43": "UHR7goqZsD1ft9i1v9uNsem6eP6tzwciQfotg3iM2o7aRc95P5f8vXfvY4VVWGqsiNBAbsEJnyH6vixYXtoEDEg",
  "key44": "41tdy9KV6teuNenwb1MhADg7fv9a8frKitjatXtMwpjkLXJwhcekJi7M3GhfSWHZWWTekQaErTKeJePqLa2hnSa7",
  "key45": "2z3Dd3tcqZ7P6m7umw5hJj1kKud8bgs8GpkP6r34r5wSjqx3BqGDaSWgn91ZPWCKqTFNvf1ZZL8y971Yq1XGzHG1",
  "key46": "4qe9BsSqTfJQQaKuKKynRNd8h26qrK8gSMVrWfKbTquJiPUd9AmTJL3WmU5BET3pGiP8aiPKA5UnsByuQBEwiKJ4",
  "key47": "56itjVX33KdEeW7ZY1WaqhYXwtXmy31RPYpxgpPhxM4NygbFP1GxVhQUe2NrzNKhiuNKzXJuNMEFAFaAEfj5szEv",
  "key48": "4aSAi9pUZ18W5FS8H3Ci9qn5irJnV3hx3Vhv8PY33Rurhm2xWkzkXRnS3rL6QTtKwjC2stru2UhuFgzxwZLqaads"
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
