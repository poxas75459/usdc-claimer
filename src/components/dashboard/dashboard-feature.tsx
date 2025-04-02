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
    "5wCPm644r8Jg4qn576pLUSAUscY11em2nMbWgS5PQBr99ctnJqQ9q6ZHzQJZZHL4BYMsPqosQDQ4FsvYVX13ueRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31XGq83GooLPDbtGKkApXpscpswrCrGvmsvaWdm2qQQaaews3qntX45zSo2YMfJJuKxkvvSwrHrRPTgVj8HqHoqe",
  "key1": "5itWHwxqcHQE24iP9eXUAriVZ9vnvFnm64X7bZ7Pzvz8BYDfC4SqtGtNtp6KynQ86mTvKNaXwwq3KPDrtLsqRTo2",
  "key2": "31ALeyPANz2wWpDpwqDYPG3YwuYavzVoF1KoxCDPrfpdaCH7HYp4j3mitm5nZogkuCJgpE8AeCE9HeBCpgzULhn2",
  "key3": "2SvEu5q9rjBrtsXAUYoAao9hzADzM2VQrqumttxgxCPEeMK7zLa6nwCnZmFJ6ewbVJ5WYkpTaex8bu7pbFeyBawm",
  "key4": "3BqHds861ENKQdmu8HANTecYbJA4ErtCPfsqPDQ4PstGNdEoccg8vnZahekXDZnbWbgNcpHHbTeVb3mKSnfsXKqw",
  "key5": "wvBqFH1YxqBDMdT4VpnwYWjQ2QCdXVGVnfGsbmAwr2Ck8GZBTUrVxmW6nRXHzFhyJRZdB6LTEY3C27YztGb5QEr",
  "key6": "2TNfHSCHCbb26pPL66o5kFpfjLo3rLESvnH3qwQ9tCqFMzwPTqrht4wfL6rJHTqDALGnuWUntYZMfyquDtWWi2JQ",
  "key7": "4f2wsN22LLtuvjLCdMR39pbvojq1dk6wWHKcGmD4gyJBYDTx1wiSkCvoRgcQQ4apAm319DpS9igH65DmtE3bxjjS",
  "key8": "DLkDeY5JdZv3aTornnVoMkVqe6G5YsrJSKUbH8PoLLusrjyLa98M9NDMUB6od2ATbWK6HhYMXRRcCreedn2NiaF",
  "key9": "4pixpyjgG5xh8kgVcbBNV3chFWceFATdedVoiLHmM3EaFzRkPpWFm3PQvVoACBzsWpbVsRGGP9MeM37fBK8XSioh",
  "key10": "5UCGjjt69Pw5Vu7EDUQ35hgPEmzmePP9VsAbbbPgZ9P6mttZ5QVrj3VscWQLoHe1S8xA2TARvYXM2sNKVac19TqF",
  "key11": "2NbwdeyReUNC65rmkYkom7u7YJ6Hoi7aFXo8D7jG445g65fYkWdcoT9RQYRQBqVXucZ9L1ipwARaYgirpVAN2q78",
  "key12": "4kxYrVVm4chiYfYPFmQZaduESVizLXjNoMqkGxfirq3rvfMqHABDmsUFh4rUPbe1hUgm1BU2P3MJpdtm1RpuQGn1",
  "key13": "3VbriKs2ubJxJxX3NvjEY4TTkbLCxkUdeDGYGAhhfzy8NpV5CbnvMTaq52qftEntyh2bPDmPFghcwN3pZTxbE32E",
  "key14": "4P3zLjgBVUxQ7t2XYjfxgmG9t6P9MiYruq1Rt7XZUS6192qdodD8PAvbJ5DpaRCzaxaP7RhUWvfZikZDikseUr27",
  "key15": "4bJK7eM9gXhXE6TAkJA1maQaHFVy2khW2g2mcrkCfVAnHTz4G35MiRyACba3LCWExsjdwr1wekDWNAGZppejwcPE",
  "key16": "5cLkLBKQB8KGcH5PZULqLzkWHYEjpZwpaLNTQgGcAKxNsSYNH5zNhACKW98EKnUah62XvM9VEStHFCegHFKhAQux",
  "key17": "4pKavCdyyBgHQGrPMm5G3LLkxcRRG8BvgY71z41VhKEj5bQTBMNDDAEXpmspAbBxGpJpYPmdyL1uvAikAWRaXbkt",
  "key18": "3S4xRendU7uCHp2yzxUDcq3DKTQuopdAF5KLCw2pQoF45GyeP8TZ2vydEFJ2FuWRX57vTSd4CttYTcpDQmWsBsp3",
  "key19": "21wNo2rXuboT1nM5E2HonXdCgD2noZz88zGRrJZYMKbN5LkCZ1B7ZcieCSX5iZTs2LE1s1vsyKX9vwNGpwqzcRfx",
  "key20": "5TVquodPNXHCcNaBXqriwcZE65ykvArQMud95tFy8J8LnFcPHosoErxHFKPGHWFKcVK5an2PbzM7UrKnQiDmkXHD",
  "key21": "3DNpygFCd54iD9PzsCenE6Ekax9X6iExt9Cr9k5pwq8oGNjFxiZbQEU9Zj3vAZDeDXQfDKDqXKw1iYV8z2HNQgSS",
  "key22": "2Nms2jJmSeVcDxZgv3PxBzvr2tgLXWGzHhrPJ5LdNaTXanToL5MaE47k23NhyxJwNzn24b3fH4nBrfF2LN2KuBQU",
  "key23": "MDPtsYrRej4Vukyx3sqQhxKJ3hn6P3hbSNF9ScSBwC2sT2wTDAg8CwGF6UGqTSMHevRSYgdpjgMBH8T8oQ4AEqM",
  "key24": "44a8rJ6GHe1Te7XCWBisFJz7Gm4D6B4GiAMkc93ZBejYmoUpDKpekQ2dmzbLX31fuqCb4TteJPouFVbgtH56zgU1",
  "key25": "KWB2z7yoDGtEeqnnXS1nNPRZ7xHqVMPXhSUWS5cPYowBLi1Fynf2cN4apiTCNtWszqaXE9hkc4mKkfnacAoAYWe",
  "key26": "22qJxGy4FWPB81Vf4MGjJME4yF2uenat6Hb3PJFnmUCNxRHemDDwvUXmK89B8qDw4dr662XqXqPA84dwBfUEooD9",
  "key27": "2LLFMxgNnXSGiEtczVm7WxgEZuknumpkeKfBQmmofsb3TpXQp5kPXah8YjWYVanDze1FPA4h8b3xc3LiwXumZS2J",
  "key28": "2YT3LYtwoM6mbiibpX63orXaStaRSCbQQzWqpwq8Ah58TQ8hCA7tdc5mYKqDibFohov9xMip72hgb15SqJX7AkcS",
  "key29": "4gMJsABvuvArEY5NkLKWhYovj4XJCLiYPHHXTbTuQWNLqg7G1aR7Ck3e951SAhTVtQvMFJpmQFCen9by9Y5ofNJC",
  "key30": "QdTEREWu2MGkU7dbcTwkZa3R3kLsdzdQGeGkhnphztsWCBSxCsuXZNbJHPBNGDS639ym7u49ThRTmiRKPm8rDEe",
  "key31": "v5hXxLmrw89n9PYQYDAKV7Aqx4wVW8ucE3e6YhLX5e4N3dFguCKPBTidS9FGMa2GvTVgEdB2Z1VbSJqfLG9MX5S",
  "key32": "3DiinMZv8ZfY63oxSi8HbPT1ubHpXhmHM5QvzY9eN2Scnkyf1qz4N59Q8Co13HTzpzJce9w975fbWGzxKNMYcnsw",
  "key33": "ApH1zYurwq3PGq2FrbjEF4hqN6Ts5XLWgRbVdJryL3Z8FfGauBvW6WwtTYysjdP1M5GuCNTqy5Wp24NrTKhSV5A",
  "key34": "46pgNt2LgwxHvvXazaL44PVJqPZv9nUqQ2wUo31jCStABQ9kv1nZGcXnQbNoyga6kFPaS24SHevdWARezhK1wDty",
  "key35": "2xyFsVdtA2vxYepC5AzopReoBHAnfgHp8Giv6tFubrGfB491L2FJhAufn6pXW9ufNQJm4jgVcCHFVUffVij7N2eo",
  "key36": "2A1ZxrQgu69CxmLj5CCVCgkGWWZgoRL5HuHZjVC59HkB4bfYEjc4WzxSvZkFferVLTrdJhDw44DstwwE3FtKW78R",
  "key37": "3ztCTxhMcbGFQnEzCyENi7rdZ7gabpPP4oA7oMcKN6KXfZpz8S3aUfHuS7ZUKVscpGXP2ft7zYpac5LQQNLHGwHf",
  "key38": "2xvmYLva8YMa3s98mgvcxSQZa4zYtnkHS1bTyxn2UtX6aTjhW8vXVpFotRnTo4C56m691R4b6Vd2jTQ1b72YiRVV",
  "key39": "5fTpoPRf81daqnuyZY5KTaJFwkh4HzSVtHqsjN4gFTWxUKK5tTVau5h6ULyStKD4dofnBSqFbAQKQ5jNnsqF9RBE",
  "key40": "39KYUPnHpZwpufZPobt1nC6xm4XdxSED4HJ7wQyNkuEFQQCguvUfpnAhmD77dosBvNwpLJuwWKL1EaWDSsFbj8JQ"
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
