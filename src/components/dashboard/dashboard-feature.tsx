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
    "5rJZXUjbMVUsSV9uPuDK9jMFdgmQ1NoCNGGMRi53XF7CHNysHuvdaA6C88ywvMZatfh4yQaPKp9i3tXFnf5tTq9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TFBfzoPU7U9vKySFxMndnSGYVeiyFekpfPBQJZxJmk1aZyjEieCgeFq9M5ejbcBFvggMTb3P1fKjr7CkzxKPU5S",
  "key1": "hDeiEy4pMARu56Pqgrc3gRyFCyqnaUt167p1hgSuqWP9kXeKqh2NA18fyLrZVTMKfMxxQ6dfsb3L8Rtc3u59MJf",
  "key2": "2CV5iKzgPsGpW1dXooHKNFhaPhgDtJ3fgyo3XMwiiJcFjYP5kxpfJssTno2w1MCiTvuPZsT2KA7TCm6s5UKva6Fn",
  "key3": "2YFpWNrJ7HzcaA5jTHNGVLMDEr5h68DvVpmDQAWDCa6qgh5vbonhkWb6ZPPWf3BZ7YnwgaWPvCfNrAEEb6TWViYW",
  "key4": "5eoSejtH83auw5jpEDwD63D9QAdzwizm2tSCsFhgn42c15GSyCcdRzyqoq7SzMau2bapJYzqFZHkBVS9avYCxB4g",
  "key5": "3T3z8AGVFoQLTa62CbMoMZRhooEpxyiUcS7jVpVYfiWhVMwYuMx9xVgdgtyK6s7BytJQfQEd5LABY1nJHk7f6aEA",
  "key6": "2kFp974mpJgjWBbbyaKhsgJjZ9hgGgmWzMVLWBtbHz99DbfYLuVZbhLCboJrK7ekV24ttfS9qhL39RCpCkwhfxps",
  "key7": "AQa3dCAuPVnTm9qoJbG4eEebCXf1LNUGn3sutPNMRBn2FdfFyFeHFrpUmEkvhhbE1ko2feguFq1jJd9aCLYmciy",
  "key8": "3biK5GooBs52t9gEPdabDjxHYD6FRzihzAGNL6Wo3hjbu9kyj3saYisQgF5TZPFgttKtNw76SDMcdaKcJCf7PwFp",
  "key9": "35iTakVV3pknxiAin9GZjp9aXAvzCWhhbm5RwtZK38ZFHD17x5fRFcovzCENRma2dPgG3FhnX6xQoX68YMrPtdWR",
  "key10": "K6pz9bGpqmb5sb7NnBgwsgo3ZpjjZkoY8NRsbtb3g6G63oM1HpNyg8RAH95FD2ZEGNMzgj4C9YJ8H3qbmHPXSP7",
  "key11": "5JGZFdXF9D4SNNRAiPenJCZNh5YszKKKoTNpPK7xPSWLswK5KeayweMwH2YbkM3o7BNLCepHA6ZQTaaNhaLM8QKA",
  "key12": "2FGb6jWcfX411RQNFQ64fLytFwEgFLQpG3ucVMSsmLUij13uvBZ9JgnZo1FbnX9U8YoyRN5UkpSvCCFNE5ccEZkP",
  "key13": "2tQ8ZJD5K77uLJw79uidqkpFGvSXhUJacswr8aLLd5JiUx9P8YmK8jVgdmuZYGVwqzUjkaL4zgsQh7Vs7GyLVAfU",
  "key14": "vhDw9xdecwkEFc8ZsTHuF8DkWzRFHR4eu2frwq1itLm61R9uoXE21ZmgT66pbSeDYq75FGAp6PhemitXkkyvAr4",
  "key15": "5SB5Jd8gkF8htrNyaP1nupWpyvg2fVLHT37cSTq3Qi4b1DZiMUs5UKjLvknWn95evN3gmtS96viaidqD4nsjmJfq",
  "key16": "3fekLswXgXJZZWUcuSdvnwig9GFm5WGLATFiAXkp4X8mCPYanMKdeNabgURvRUGubxWCC1Pq4dEgq4BAQVXfkKfo",
  "key17": "3CBEiDrALdDWPqXEmvQjDSv7aLYBYdoPZ5RMoSG8zGuT4wbP5UQzBWiKfUJ4iWhGFoxMnhvgDJ63XygVMkbKuzFQ",
  "key18": "53EV2hGxDodJMx1YKFUUwrExVsPdWfb9UCAfn92EBhdYJcQd3ZKst3oAmT7Ge9zV51mRESBjdt8zNw4yoxN8US6H",
  "key19": "29KwBt8BhZ8Vrf9HDyV2Bg2msSAKsNSqaQuKyp4sdFoAYysfZb7iFbMVasP8HtB6wdfyU4ayV5H6kE7Yhhd1mVwr",
  "key20": "3DwjAm1mp5XQnszS83C5GPEh9pvD55n11WWSE6HuDnYZJP2PQmABQSGXHeRY4gEQ6bgGikQjHJzisLCzUQirPWMX",
  "key21": "4DcXvoY1vGfjxzT5nRKS57bvpopnArWEkPnpLyoCy9HZaMSmLMcHCgAZExdPUq11g3CaK8dFfXNPVcxJ5dfeVX2k",
  "key22": "gCWjLZ5hTJuk1XdHmnm6BGRV68WiiNcS9mViLK5vVWSxFUzdCoSXVYrMVKmPFLoRMXw2sGh3jXkCwrLPAwYbMbX",
  "key23": "2WNJitHnqxevQiUu5MtFtoJP7GhwMQ5MHjUNDS7AZHvnsFEvQXP2DnCe7uBvPKZ27JhXBjpYtKDRYeg2fHgJSd4K",
  "key24": "4SW9327qdFtLzw1UHp9VQ4kGBFBkDCQDFj271Ff4VFTuVFnUyDyS5dSgwYMEfNBJkBWHnCD7TWj67AV4BtdwDW31",
  "key25": "513fbyChuMPR2bXXqzPs21WPQiZXLKHjxYBV34D3Ku7duGMSU5NDkWHJJwdhiz7GBynn23tWkoNonsV7yGpHSwxU",
  "key26": "2ZBhKMFMRMFgwpakUG68wrwHbE15WnwGJKUcLVfCNzqtmxtxZvBY3ZQUS2a5DnT12dSCdvNNhu8psiroHcixXtmU",
  "key27": "3uiEFYZHGYyhTWf8KDovgKeXVyQ8axNjEVYm9WLi1YQmejSRUJ2LcB4R2rGdGCcpvBSCD2ySSEkotA6VtY3C4kF1",
  "key28": "5P4Cst45TcEHgzVrg6Qe9cURoyyAGgj9ukGpRHgzDheUBBD8Q1ExLP8vMsPCzb98KkRLPQmAX4eu5qWm4RLrLRP3",
  "key29": "677kKL9ZYBb4azgDQ7vmgZHWoq11qcufmEJ98sf9x1oHTZqjn3HeLamJSuovSAzLoPFXBd3gBJzZ2Dm9KrZHLtBN",
  "key30": "S7TkLauCy291Smzobq9C8MGYQZBjkgbvasA39gEVjurJt9vrKJc2zPLVfv7QGUu9Vd2J6P7nmnprJP5Gs7Si5NK",
  "key31": "3THULzwHzPsE1GV3RugVSYKjVdecGd5EcUrrLwxFsAb2JTfWrFhYYzmkni5DfyTMY93evK1a17xtuQi766mpvuTj",
  "key32": "w7h2iVgRGPazLYeRDiAYuoeGQd1rqU8Zgs93Lt3srs7qp8eb4mapP5qZkRPh8ER3qVKqf6w2dnXfUYRcDWEuJQ5",
  "key33": "2Cg5LshefjMYrx9ucCEDeSQqmWnhePWJEznzxnCRGzWDR2GZCcdHeCoPxR7739XoPddVtzitwAheEtcynXTSDtyc",
  "key34": "5aRkN2wqu8mEBXgHL8P9ya6sRnfVSUy3uGA8ASJU6b9B2XR8pNsYXq2yG1Ckq2HXgXSUg5umYbtRkDsJZdjutggu",
  "key35": "rRJzMhoaaWMZet9oqGK3rdJpwqMCNpKBEzcoZUBxsP5ksVJaNV9TmdWPUZXWgvGoH3rjR8wKKpks6oxEpk5Apcv",
  "key36": "54xykWk71iNBiPcM8Fj763VNv4hMoKKe4BuFc7ffKCR55VhAfVu8a7Ey33PvGGHV44suAHRQpDhMbRQVQSiZ2ETt",
  "key37": "2fgXktwE78dkaWj3X7goJQTapBKcz2HFgAtAtE16oWXRjzUo3Q6WHje8aVZN5BuHiKZUetTPbphHxMhgLzBfFDC9",
  "key38": "2mqsw4pSc1zEydc2LWeeEyUnsrZEbDdme9zKEjCEoU3zeAE1iNtXz1LJy1aXvLU4CWde2BmBzm1SiQWcpePCy7Cv",
  "key39": "5C7nJXaUiuRpFbFpaCmkzaf4G9Q4JpBv2NfCoraCu5CocqqctFd9t25dhj3g911KiAwUQnvkrpXMqmFsRivwHGJA",
  "key40": "2nFTyWGF7yr9xn3M45Z1eivZXhRkKNBFXcSizHGLQqGcpkzsYPvCQuQ8jKz4jokoX49FsTrbc15mBgqp6AP3dHHc",
  "key41": "4oKZEVK5MkApCpyVtAovoXRSFijozQFcieP24fJk3DrjJdV8nwaPcmpmBhAgs7iASsuAqAjJJXzCrzNpgfBP2kuJ",
  "key42": "2DAqJQUN1K8VYVnkqjeKZ6oVG1yg8iBHdM1aAgkVGqZP972CrGveVxYxxr8PgDK2tVyXnJuxDBqwpVC9zP5aTvsu",
  "key43": "5g3BpjB2RqqEBxEsbWdPB3biT2STYeVpLu7k7n1PqGNLs6zvHrSNHmgFBNUHvWXFt3Lbfcf8JdfQNm2QwEKnSQb2",
  "key44": "2CTXrpiXhXfBwDtwFhzrgdULTUkXvPi4Uhb7aBLS25Y4DVNQJNyvu9sqZk94UXEj2cuyWGEt7r7LxmC9SWmnVFs7"
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
