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
    "2VmiSxsyzX4PNVH6aDuwq2UhpR18R7R9bkXijcir1xyUa8Gp9D4avfVbTVDvM2dfQ52qxhdRfptkdYXzzYR6GSdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZhzqhY6ZQi4Umf2zEZWfCZwesWHaSPX7QbBn6RQ1PaTCzssxuQsPT7Ftz8UNyKLgf2bAtZ6qgLxE3B1J9j1C5Wt",
  "key1": "5vaTuFfjjSfzi7cEdsushKrBYFJkokJ7uZ3sMJB3JQpeDMM79chF7S4RLYRWFrCV6UZzAhyhiy92BcXwxQD3JL2m",
  "key2": "4JzLHaZjoS3z1ZBTgMCNm1oJaPkcdUQAhd8354BTW5ZHztyhQoZpeqd9pYAeUNAGNQcXDVu1e2HwXY6i3WRWLAnh",
  "key3": "4rfVuGV37dfrFZnL9aZXSTQzJvqK2QbjAnHgm6E2VpxS8TmWAnw6zpDAG43oSttBFf9d1bQeuPoLz9GR6CmNUxd5",
  "key4": "43xSnUf4uiGndeSiyWf4c6aCNFvZcSPYYCtFscz1WSiXczM4S4ES7L5idqv4upSffUfNAi7bp5daVNt9xanuPPsS",
  "key5": "2fy5DvLafRsHYAZf3hsq1zoudBgGgPPov7TGjd6Wvo5tUbeMKSQk8kySbrcyGY4DRLjH6srfb5Taxa9uxtgbaXcy",
  "key6": "4R9Nj1xMYUa2LTHMsw9BtbkkoweT7ic5CEofbakQw5Cgww87bD7xaXyjufcYdd3x1CYwnwHVh8PzcUgGJjS3t2ec",
  "key7": "2hmNng6kQvhVQrKZD8NCCUKfcf2XjGJcrFS5krbgLLNJMMoCPv4eWkKKAjGfQA1tXKnk7D3aWsKbLcPRg7dxvuMZ",
  "key8": "2p9C9vfcC2wRDhKUBWPesjg18MFpDz2rKXEUAhXdRq645ZSywEV7mTs8a26C5TfiNtWduKrFWhVgRSUMiBo2FQK8",
  "key9": "4Bqf3BaLxzDWNfkZnhHJpQwVH86SEDkDofNXXd7K1KtjJ9N2Hcv9Trkq794yWcazytFNsgZW9UHVRjKY2zBUr3gY",
  "key10": "2HK3pKPmfRGfC1nJ9J24utYxNcN9VsyJyJvFSnGm1GAPU8qaBS5xcibtQn5Tq5W8QVt2ms1Jkg9KCmhDEXw1Qry7",
  "key11": "ryAtyGPcbRLXfo47tkxdDbsDJZp4bLnZERC7znCTSoMuhhWG2D7niuNhivpcW9NbsoDjbWbd6HzAagWgtMPD7MS",
  "key12": "4tsJHyujdi2C4ZjfLNofndRQub3koDrYut98syz5YhmcNAPbHS1536Jh6D7WXRyhk99HNzTd79B8FLPX9dRZnfz8",
  "key13": "57AgGVN94f6bPFm1xwBgAGDV7YPpEMPZcCsHnPfANsnDCdRy6qyxbmmLJMRPkoEvqnAo37NVWQcgbiSZtt4VNs6P",
  "key14": "3EuhvGE2DhaofS8NxCAYJ6dQCfcF54iRfr4z8suEbR2kMb5XtPwuU5QanErYmA4vrTbheyxovFB3tq6ZHNBuRPxH",
  "key15": "3HbKQJ2UBEpggyUmQKBEezLm2zf3CpZtuAYZHkdGH1pbRnXzREZVfAjxhupTQHryTTmLNqzJ5AyJQ4BuYJ9aqLCE",
  "key16": "55Mss1BTXy1Hb3kvQanZPoEV5RvXecbSXvauG4QZe6GcdHuipnpyJ18WnKauscHC9fGC9v1vs2Wmp4vaDpr4C7xD",
  "key17": "2ujdqGVCHACqmQfvriLxwj3JfcaUZXcUrkksa39cgF39xHjx9ZAdNyP1zu7w6vC75mm18GzVGaUthPL6h6WZ6JUF",
  "key18": "tKxFuKWeqRxd9apiV4Zbim27dqxXCyKWN2A7rmjudp8ePz6AdsBnJiHe5WUDGxJhVWKyzKD5szMWf3RyLoevi3j",
  "key19": "2YUfd5rnPMYhz13McGo42UAEMqyArvXxEtrYv66Fiy83uCdR1iM3xC1UgAH8sqFEB36AqXELKiBRUE6tMWiH5QeL",
  "key20": "4VaRg3Ra964zXr5XBxLhLpz8wA7DDhetqoVFmdMUTzsHQ4vye2LnCw2Mv9LvAFSYJ1btKoQ772VK2axnfeALVYKF",
  "key21": "rcQJq634vfZT3rN8x4uDQcCMfftDuB3b6LpMMwKshEXo536yqH69s9riHLpuD8jDFEe2wg2hWoPg8D312vyazUr",
  "key22": "xfsoQhHQ2e5aEvsWBea4A5NWL4vfo8rUGsBqGTTVp9guapktqW8m5ZjtCTMnkmQV5kPhRgVXer18u2oz9HtGzCj",
  "key23": "5M5qgzTS82im3NK1XZ6Ar1Bj4ejYnGPF7ZmSayrLnzZfXJcq6cAGfnjfC3qSFQb4bpZdXziYSrL9VcpXeRje7gvy",
  "key24": "5kUevpcnNAfXSD1bi8dNPsxgvB3udvACYRC1DbqaDqsByTgW7snELy5kT3L92j4v6LAg2QSwuuTiFzBW5Yna6KK1",
  "key25": "28jPvDKnrSN9sZCwEdBp5XPe5zJuNmboHimxifJRAYy6ZXXZhvm2zbLmUu4F6hUqShNkzMt2QFvdWyepqLpptxsK",
  "key26": "3nbhG7ASnVwyrhesnnuF1sgAXRypZPoNuWiLvfnkgSBgbtejeFFYBQMEQmyE5FoQtYr8Q7ern1SrSgJhxevpKJYU",
  "key27": "65DrDy7LCc9jqhrYPiYCdBkAWXV83Kwgh4WhAcfKxLhBBrSJaJsoX4nNsyZKJjsHfkDESSNhVGES5QTLe4LQ5c35",
  "key28": "XieiX8AikePHe55zHPq4Nx8j3PmeC5zaWqnjh4CC93pVVWKeVDtmBsL6ZRQAhmKrAqLRk5JVKJ5Tj75sFoKxRVQ",
  "key29": "3WEVUqofcGQnAc9jQUpN3F2nhupnFJgVFHGL4YVQ8yTSNss1goqisn84sCKnwZGdS4e67vmYZo3uKzgcEiCiUPLg",
  "key30": "24CpFp65kp34XxQM2iepCFdt6iWrRZ9oi79WRzRWsB1a9t5CmZw4x6pRrpcEzFpcXNEaejULnccjdnDd2cK5TJgE",
  "key31": "66ex1xSwNu48NBvdHBA2bK7jyttFTRuN8srdoEAt32HZa1N3FKB6xTZ5hUZCfzdvWrdX5KJcBwbyj5cVgygKHuZ7",
  "key32": "3znwR7bdnHEnW8RWcD53XdguUmC32eyHwWwR8uJJdb9zYCT77UUs578BbyzJie1ujjNiGEovo8gjsTLy2yyhd8q1",
  "key33": "3U9k7P9XpFKoWtVQATbpzb7LLYCVM2crrXgqHFyjRonsvGqsWySXzg2f825QZAZiR4kdxUY2XdrWV7Q4KkgLMdQA"
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
