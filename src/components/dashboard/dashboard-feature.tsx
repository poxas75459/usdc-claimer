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
    "3Ndfn29k81qhxQnRvBAaCC3XfuDEuvXFGn8299Hz6hVonrfiTmvfrxXiB2RyFaNR7BVBeJbL1ioDNN3J9VYe3wWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bhR8X68p6276cBpbCTak3XpYDkPxwnrKhCin3DjApqhrqKWxucG5wTzzgkLan3cFWMMWj7cY26MNn4mPsDN7Zw8",
  "key1": "52nrZKqWVN29v3WLaBVqB1LfWzH3VSRj2J4hLk1C7hxsxZtJGhDC4NVXRxAgCGE7m6WSmuo5rtK7D6AQpftfs2Sa",
  "key2": "P7dLKam9aemp8Jz4ebbA2DRRi8jF6EwqCBkLoGU4KVhtMRsDqfTtikyAnu8Xofs5kZdgKEtSo7AaJbgPCCTbpKL",
  "key3": "2DZPT67PbaujouNnbb2seDf1CBh3Zo5vFFzQfYnnsJLw6KabD3JVXxDUDZs1jA7CrmdW3tCCEwyg4EPGgFS7qHZJ",
  "key4": "62BMhQDQ527ydyUzpMsgsJzkHrgrvqegPBYSfKF1cZ5xzDGSdTL7QkrXEFvvBc2vmtN1bCVfm4Sonbw8MJNMc387",
  "key5": "5WBpawXf3N4jAvNMXQQMcDyeooWN8s51vqRFh2QL82n1J23aH9Syer2pjGwuqAEc5FQ2t2bgUwDpnBE61CgT3WYv",
  "key6": "2khRbQPJhoJZRdfmgXMzf1kgsWYcmxKwoGH68mq9wK3s2LYgYLHN4QxHXXRfGRm3bDMFt9VTD5edMvSoqQTSgZvu",
  "key7": "4pVQAYLsLYjyLVNLYFpoi5DWFCNWiyCo5ShftuLzhgecEhUUtr25caD21Aw6PMantsbiHRvwQgK8vwLJDKBgupa3",
  "key8": "4RdtmYqwTixZwrn5gmDVPNjHsN2V5V9NS4bLyZbeKPKJVvoZ69Z9f5Q8kfuuirukzt2p7R8sfVtaxiVrpEGfTaJ",
  "key9": "45SGB8rZp2R7LQ6EoK56eZSR3V7gJBwkx7TogJJZoTjSNmz8SVUKPJs21SxPTTVKXsVJsG4zHWGUf1RDCmg9tW1f",
  "key10": "4EMWcPTt35TMcNptvzqCG3M4nEYek5QBwdWP9QbQaHY2hYbrhicengFQWjkgw61d9Pa7gNGpazJ4VCh5aMqSK9n7",
  "key11": "4uAWxhoa2WFzb9crKvRZHJgNozErmKKya7fAsXyRwqZXkPYdHMuTXipo8iyHwq1dcMVJcZqtmsAcAx3XjYqF5qLb",
  "key12": "3SLjL5PhFMXanjnkRH42hEMTSyUiuUCJTmPnrcDCdgX2FyS25J4Gm6StzxUCxTvUYxAppY6bUQ4P8xNNHvZNCA6U",
  "key13": "3mZbavjZiTXX5QzQSp5vWa4CN2Uc3sbDZJEKF4hUpPKcsFpWJ5vWujTrKwXVmXKriuokkZqhfJBEjdSM7DYFLCXq",
  "key14": "2oofPiDq15BQSpXqScMr4ChE1XXuUtpxvKT9Mbnt9b7YnvGvar4d6zQn1Ufxk2RwR6Pv7amBtsS9SAZcZh7axCZ2",
  "key15": "5PJdnG1Cdng98HqHiH3gxErAwV1mF6CK4Dga1FsiJrLcebCngSpyQ7zjTyKK1kuXjJmeBX3Ma5UV6bMMBxMFQK5e",
  "key16": "aFRKmYzzSvL3odXQ2c76HxJtKUKUpGKFi4u7SyWEmehPjKux8RJ2VDrfQXkxNg9b4ejZjCr3QU9Cu87yK1kN6Mi",
  "key17": "5U7n4uygcGQr76WBzACCR7hLcGU6BVC48YUHMKQtUN7x7cr84qZ9R6P3L6mkiNcE3FFHefAPhcEg2PBFmLKD3HAN",
  "key18": "5NuqZh3vajUBrgYTF2ZcxC15PAfQP5hZEsKiZqckNHF3YkETTWxmb9pLYBMVfw4eosJBBQSBaVtKLi14qSQe8QrR",
  "key19": "RdpXSfVR5G7jVVkGnh2XHQYt9twkjEcrbAJgmGZKCFbTJRtzrLDvXEGU74THh6aoRACSwHiPX3sFsVuTidjqnLe",
  "key20": "2AHmKhstUgf1uUWogv7iQqiQ9RoqJfoZ9T1SEdiNJud6zUKRz8wcMSpiD5v5Z3PqmzNCYTacmxXQeQd7RET1Fsov",
  "key21": "27WwuRm8T83SCNSJJHqCbs6hJs2G325PzanQQzRkvZ5Y8sNaVRhgJdPoMjSmuKPrzapM9A5ErVY2N5F84m6pRytY",
  "key22": "2ZHUvVx3skDQJZ4RAJtay74vruuxGmBaPfq7u2oXN9SGzkpD1r9J2k2zLBygqa2aqpomqHmFMdY7nwBpFwZJ9vNG",
  "key23": "2VJsKhGX3h3TdZu9EiG94bWoNaNU8tvf35gMYMJ4HFDgCyRGBrvyfmNrZidtFMBRvoNkq7WnUDQdceW6TkquiaK8",
  "key24": "9DeQcmdn7pkFDg95SU29ETb5c2XcP43ybxEjQN9RbnNAgJSmCHRMPGgSvvVpCFRboCUorxfngd27UfWHZYUdXat",
  "key25": "QfxBegd9nMddkycsJqw4v7edk2i3zo8AjU1gGi4tCxBxSHaL1hUJ6CDAbRUAm4RfQvbT5yP7KDG4ao1sS49PhKV",
  "key26": "4TCcgsKrbMN5Uw9f2NkvmcHipTvoR3H4ySQ1gnawxrVfq2USBDVVhVxt2T5BZbewQJorwFNZPe9q1fAEdovPcZDU",
  "key27": "5FofaCbviT9THgFV7Ys4yRAK5Wzfiw3s8nG52Hxdp4y6aWjagHNZXj6gaqUQSbpj7ZZwg1mNhGifbgYjAa4MjGoP",
  "key28": "2B6tLDD9mXneVKqn9WiWsVtqrZ55yAxDzJnoD5fjT2pPXkXe1MQrmpDGFzeiXPneE1FEhUESkL8k11AgcoEQjSiN",
  "key29": "4nzotsx8MD9CPFu7J67JmLMYkKCgmoiUXFdDghzkSETHBTXbWiwoKPnXBGUTSmsHHxnZUfeHhCKc1fE7gPN2VmqG",
  "key30": "2bGvahFndFDmKyrZKEZimLnqujKevku6URmYm2g2q8LMkedGLqbC4gFCSSfR59HbRqtK1qU5uM2fAbZjq3fUTqcZ",
  "key31": "4RS8YXHbLL7bgtU77cDRbbt2Den854pttngdC5VJcuYd1qC37J4vaZfGWRKXubEzfXed81EPxVbgEZktfqe7PriE",
  "key32": "5xFoCHKvfMfd3CPy7oaXHLuXWQDBk4cJjNXYhb4awn3MHF1xyXkU1VXBguci1duWeDToAC727ZRp2A4ZfCWdWdxa",
  "key33": "uyL7krC3qZmfHMVL7YcwDLvZThL37Tp2mFJsVgAr9uLQjCv1YtpYckdXBhndaWeoerwxmhMoLwwYCAvDsgBSJZE",
  "key34": "2UQt8br4FkAwtc1eVBWwftC6161CwqXwpKy6G3kfXw234z1oyh1QVNP46cGfosboDRcy1fhUxr2XTTyye94iZ3Mi",
  "key35": "bzyVndapcw3tTeTwmdjLenwni4hmaEPBxRHx2Ns5r1bSd2gS94UZ5VDs8q85fubFigJmrgZBd2nkdxw8pf2qF1Y",
  "key36": "5vKLVJYZDmujtj5csYL8Eukga61Z66YeUB7j9qhBqDT86VZPiT19FDiF5FEZPwxMUUVmkzzh38B9fddcZNjdbQkq",
  "key37": "3MmCiPxdjkecUhV4Q59wT9caRkEFWLSaB5j4tgMgvco7WtGup1oE4KbWuGYK8PdfDTwQaVmHkqfttUj58bL4qpSt",
  "key38": "51VyMSyQtMKqURHFxABaafs2EN2cqabw98vNusaTjpY2wDMqPuTnVrPjTTKHWN2fyNahL5tX1oTfPH1XN569c5bE",
  "key39": "2tdUksrZZWsnHhtaPsWJiV23vGum86oath6xKHZtYbHNjssaYRSZVNGtXa4Wo64ufpRgMqYk3wfPFEsXezFvsWmr",
  "key40": "354HHTnN3PmSqj84cRWJXcHz1x6Ap3vuyLUeoZG1zSZYemeiHEBuWPEMpfBhSNvYdBRwARf4AtSoA6YxpMHBuv54",
  "key41": "Ncxm3sLVXyESkiK1dEJjtq9KuyPbWr8W37fPML9FiDhtR47uy3c4zoDG6gXdjnwmoAYgN69vynPeE1BSizPrkA9",
  "key42": "36aRGyk3893uPw8GubFkyNJTVLK2LL1zoADgYraiKmxN1okbMCcm5VYtbNevSSYKd1G2sGrmffBVeYgQfgZtQVjf",
  "key43": "5wEb5RswqiaNfsjJHLSxD4s8AUFh7bUPvyLk2eA5aAQ7BZ5zjgJEowuoYKJEDYGNdhnqSxym36UvUQvxDsARmMRX",
  "key44": "3MTzMEf6ajHhFVwJgYCvqGJp7S5GViVWKo5va8FiAGsnXWeFWWKAB4TuWfsNvATr48FTESs1JmACeiGcX1VM78Y8",
  "key45": "3pH12FKzdaZgXydt4PvJySxNeMWjeXDr4o2JveEdXnvN7T34uxgs8T87kezSwJonzuoKLDWihwsaA6Mgrvueck3R",
  "key46": "3Vw7RWi6a9gPUo4ardqXotDgadYDBU3QKgwduNEEwaaZw1fhMxzA5Mmh4Yh2axDtqg75YzPaunp9a6t1VjNxNAuE",
  "key47": "5VpneDEARTaijWdvZMCcemFLFRNYGt8WLHWs9mQ6Z64GHUDnaJ5SnUsujHgD59k3ZnQohb7RvjWWpgAxEwN81mKq",
  "key48": "46r1UjFsaSJKWTsz682yv4p5XjXnGnzUPMRFQYboCoEhETxxbttqxynz1sG3qBo8EhPtWmj5RYwaWKnrHtUuyjDN",
  "key49": "62vBwUKF5hW6xS7ku8np6tr8WisEZChMQ7mS3u6TcKNH8HXrsrt6hUfPgRmwxPRhWBTgFTeXbAWoKdmsnu3Tf1rF"
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
