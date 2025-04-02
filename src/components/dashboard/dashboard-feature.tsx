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
    "3m6HYJXvEihEwoAqhHx8Mz6WZyP6E5gEf62kvufVkZcxQ4gFuAS8LgQNwkQDWaxraaGtHt4MXxj9huu1LcvVcvtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FXVdLGpAv2QnRHdhhgK15SZTyP4AaVP5Nm25PhF8c5GistkdxadQRNbQjtyEtz3iPu7Wp32n87qTFzUfgt8wwap",
  "key1": "5ssgUynRma2fUVyAtQCv3M7NMuFCc7BVbLQCuUYbfcKTb4BHkiTCfhPwkEX5sL2K8k3a6G18oyEdkxJC5vk26jib",
  "key2": "5GDaPeTb87PmaDNtXMXcAoLASsmWUej8DgD81qCAZeH9nfLtmbdu3cNy8zT3CJvw2v4RtdTVi6BdE69gEHwpuDRT",
  "key3": "2VFcBHAvk4oZFdypEuhMi84yka6U7NMoGSmDKYQ1BtZvvD6XHDDTfQzA84LgoRGXmgstoMusDznvaCri4Hc9LrZW",
  "key4": "5ybFcKbwsdjuc3qzCdthDx1fJnbWdMQJbNVuhyo3sWFBiq8pFp8QYituCSJpPhWt8XLKBjjn6ovpdp1kiGNvsEQf",
  "key5": "34wtgbgjSygvVtTyrtBUN2YwKad6KD7mPo9YeW5Wqd8qSjJ5VXDT97BgMnBXWxHRf5Z8kFBArAR892hpTsFH7UGa",
  "key6": "21mSJSk6FzaqDCQjjqfzEnphV8Rwu1h1bPtTYJgkgL3UjFirYMHSd1VWCrudgnpnEhcBRi6TVuDmma7Xiiygz7ej",
  "key7": "2STUehHfUxZXYxfPabL4tEt75LBibefMTibykZPTvfZp4AkRZSfKWTqeaKeiUfFqdyNQBd12ipc9aP24kMzZHvMQ",
  "key8": "35ZYE79D4WuvYxet7ymyx4P5BZ1YWhDXQRfCWAAkbGVV5PxdqpLdFZz3YhXXJSRnuhKmd9BVF4bB4ZCrMNQBp9Yt",
  "key9": "4PTAbsR4YPDM3CTEigVrAADRLqPzXkx22WYNpPbj5UvSuLe4SEgikEuEPiqaEXHbVCotjmBGubs8hs3tfASHF19G",
  "key10": "4w6jZeouj3Y69rwiyHR6uHH7i6NsYDnToH6dUtZZK3tUmcK5Mnxb8JEFj7ycPiPLQZ2VQKC8kJGsyH1NprsDPSev",
  "key11": "3KNs8DqJKsXbmy4R8HUYyZXadziRpWRsqbCF6rsZXVaGXhCYR3pVazMaD3VAph15rZZ16EoMHzFdpPSjYiJKbqPo",
  "key12": "4RyGQnrSyqd33KdGedmJDL5n9GAzz7geeKFp9e3sWJNkEg3koUPsvERxRnEB7UnE8fvPPz6WEV66djtBaE1g6i6g",
  "key13": "m3qQppkw4v97FBJGGpDfzhFZuaTae5EjxHyauUECqRxsTGbhWB6SMD3xCsZUP9xzg7F61iioYXFbXiyXaVQvgcw",
  "key14": "ufBBsBz2zZynyd8okemqLkw5oqYo7xkBZwdASLs1puRMxABNJY4ZDBoA2QfD1YFWVPd8BA7FdVPz8TrmjopEwCs",
  "key15": "4c6HiziTRwKKEAVdiBeaGsVhkBoApCABaj5z6GfcMgtvzxqmF5hCt7m2SYXEHE7mJwiKuZ2XpFs2pD3QYfPz3Qkq",
  "key16": "47JugWr9u5wTiMmwSee76Ur2HSq1pQZVzNwnZQjHwjqkcnJJUmW7LxvRKtk3kTN4r86FoQe5AqA6bfqeyCHKzELL",
  "key17": "3s7a8TvoPNyT4wRPJZsjsDArtg7eXLGV6DJHS62ZRH3NSj8nBtFSPDs8MmL7REfZxqt9tTMBpTKpfDXJnTwYGtDU",
  "key18": "4PBeFK7qQpY3R7XjgH3TsVbqtKtUS76aSVsVFifNw58Y4UupK3MZiRUPZXiTiqgYBnQ61YtFrWq3uH2JGakBUtbt",
  "key19": "23ixzG89RDJ6vaZVYixt7pKpWHrXKAJRDqk43onE163VBA2FM3ydkWEzyKyFY3JxvjKmVA3LZQtGi5L1bwAgFB5Y",
  "key20": "5sWhHGwZfV5ZxBohbsipVDrVUfmHNd4t1T9tqtwqMeiAAwFqFwno7c9TmBFfgeZ6PNHdi4cnKvddcUZZzZW4mrGS",
  "key21": "3WRTp5rxH9S6vyWmiaS3HvVj8ZZg9GrqzdNrGnyuUFzXJqap8HWXsbpZYsbUorNYSqh71UYe8VFSvG176P6i3ByH",
  "key22": "ahzohYEB4xak3sjokSEvXTF4QGrqMsi1CuyV5QbjYMhSrsUrVdcjP5fAgg3MUKWPrmP2UhjBsdssUMUtzrbUf53",
  "key23": "4FzNLYQpd1GWJRDTXMxGM5YRtrAS93vqjrGL1kw6ki9HhU645Dok5WyGDJYG97Dv3D7XmEhPsAgPqdMXKm5hsMG9",
  "key24": "5pAskJHUBUHhTDim7ntapo6uW6wDf3YTUaW4mX2RgAAqJsuGrTkCmXSH2yeo3WdGYgVDJL2QbCwuotvehT4gF4U3",
  "key25": "5pZnUMFKTSvP2AKVu6BaCspejQ8Hhq9EpeEkSSAZ7JpJyzYFrNdKCnjn2DrSPPBzc6x8A9pinYC8BKrTyF7hDyFY",
  "key26": "2vzJETjfoDqxFBtfMtvcoamCVXPaUuL92wCfcvFddxBKupinQBg6jVDcJarwpFVbBJwqNwLnCeoU5F9bmyUU8dCm",
  "key27": "5CHtNfDoPD2pB9ZbHVU6N5KZnzwxujWzaqpSLb5eaETAe4FQWtDvsmvK45DeVLKkAvnrWYhkvmpzJeo2pTtwwnmC",
  "key28": "3GnPNUmdXivEVAJ9PpiWqBZcEkWm6srDsZGSX2iyHQo5HCK968uohJZTLnRc11CTyF6QVbR9hdHgBJ2R2pWy4xUv",
  "key29": "3ahRBfxEAiK2Tdos1tXSkyNzjNhcYDrJy3jY2GbHremwDPcTDqyt8V1FBEAvmo45wm8FKKd7d6U1LFK6xz4Yw7MC",
  "key30": "2eFBE6PEUvLPfzNpRFE7iJNsqGF2PLA7f32HwaPCBrevFiuYagh2ZhXyEVqo8vQfWkiDwYarpQXdbKyu5jtPFcqr",
  "key31": "4GLtWFkqisaGJDo149B3vDH4dab4ooqc57tSzTEua2w3W6eLzg7dd4gbBSHB8ZtKKPoKqgyKbgNo8hbA25zWV4zN",
  "key32": "66ENrBuPJ9xyeGeZsrDKsDynyxW4FtUJbbnuVoerk97v47RfRiwZnaGcGhfdDpTxpSuLbKqn3MgJ1K77oMoMAPav",
  "key33": "3sWdJHENVgqMq7CFosEW3SKaafYWz8vo3Q16B7H8L4mgnwPZMK6KzuAoEWQioRtpZJyYXRv6um5x9gCghh9Ws3hH",
  "key34": "5JH1rbcCZj2Sv7vUE4tgGErfuMCpLZJKozGdqqUpbdbQrQN95ATs896gffgvptWTn1Eo35isNYpP7jaSgoN8Q78v",
  "key35": "p61BKLV5pLdXn4ymqWdASrRxsc3nkw3X3FLPQRGSv5z6JJfZUy4usdumSEnoQjRfa2eUi5Rp7JzjMwtorhmdM8Z",
  "key36": "KiKDGcJJoE1ExBr22FdVC7pHkiHxDi5TjxQib6hvsKLdyPvETonwgWxAs6gB8a3q2d5KDcxGWunHnGeHmMkcvaG",
  "key37": "kUe8eg3vFs5t3DZKC2W6ayLBs5KVQhY8NvLEZxwsiWeMADZDhJrhafVE3B9GsdAG3sQdX1P6rk59whUfiUEpf1s",
  "key38": "sao8WtLjQum8cJGpe7RMD638a4MTVS7nthBv6Q5bXdPSPyLFaHakGFF36JCSNhKJVKvy3XwKBSBUuGS2FEPP3ad",
  "key39": "3hDjhxaWTYXxaifdyteDAvSvpDJsjcJdb6WbFg7FB6hzHvc18ZpFbmbYLmHBAUpJy7USjxE3PXEJgqAMxfvcr93v",
  "key40": "2bpBhUtCXNHFivrNV5Jg7WMMB8Qdgifi27Mq6JkS12bnUeZy19hnZiZSWFhAurzjCXkWtRhqAMviu9dVDYBWG2U7",
  "key41": "2aycPWysn16jYjhqpwBguerhme52cWKce4v7g3sd4A2ua8Vrb8RqsebzcyUXYv4Lggp37yRMpo7EURqbhLGzfqoF",
  "key42": "5qVTKTybLTDiyGtbLVkwbJALQzbm6nHVyLPr9FTiDDYnabLTLxrwKhzqNrEpKRoiYioGYAMnEjgCWCQwZHHjnSJa",
  "key43": "4Piso9ydHMXDesZXwCKRknuXWELed6xegx54CTrScaJM4GFNDnMQFomVKHWnmRWJH96BmeU7duUYVkTDoHpGjZxo",
  "key44": "3sGzukZdJrcEJRSjbtGe2NjrdhiaQp3igYHruBCzXBjvh6RCYpyMohUhCkHGvQAqy4j8WMerTjYezuVRg8714P2J"
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
