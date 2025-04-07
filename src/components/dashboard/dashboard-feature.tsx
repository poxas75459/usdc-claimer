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
    "4iwiGEKKaZi8VAnRrwzDcLDDvpoejgMv9CZRJdowa1XXzHQG6ZAM5YFffgCpcvuJ6t7E7UnJe2MPz5iqQPuDC9Un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34KeBiufzQrcZJsKnesYza5qBVihatatgWAenrPB5aAktpzgUqMGEyVwMPYZiBDe4dr8iNHpp1phpR6xX9iZBFtB",
  "key1": "2mr2ZhktRv6di1uPFA3QBT8PEvb3Yt125QNdwFrML36VnnjswfPASRGJ9VH7Mfo5d3byZd2qEvFVivFRDF6jR4N5",
  "key2": "5nnTRAmddyodFvrSHyTG3pmUZFMXS3i68SUMEBMWbsDpXg2uC8D4jR2g65umtHjEmSo3Ra5mZDdQDoT8z7X7QyPs",
  "key3": "gNpFAejRRrSjrJvzyLXDLTruV88j5gR7k8ryt5gKYUJ1XAtdvQQKYwukRkHpBusqnqDDPo97gYHqztKJMXz3Tai",
  "key4": "zuspKEv5d3PeW3SvLgqkdgwuDo4pQhocGVemcL57YF2kjSHdnPw5xDLcVjpQmRQzrDwEPGab8Lo5cYemcodHzuz",
  "key5": "5ffh9523KzQw5NY5uN2EEaHf3eGp5VJPFMrUvdQGFrZBvX2sPCgCY1DnxsyBdwzpcinCXk8NvVJjDsmCsy5v9XFx",
  "key6": "2afiFnGe7TwYBJxbkFUb7x94FPMacjPsFo7wrpWwBPRVisKWBK8UrmNLUpADGSb8Mg14nz1AAa6FCA4AKojJJBfH",
  "key7": "CKsijc77h2Q5JTXb9rvSHt2wB6kh9mtqjMRSSmknm2xAF4AaFoTkSttC6ueycpyq5pMxQXXFwLBbNTM4KHLi7xU",
  "key8": "331Q6kafVHNvjZUoiTkrmjTa2P21oidKCzdcHKLqAbydDv4rt2S6B3ZbqS59NnNanzYNLY7kug3k9Yiq12kYhwZH",
  "key9": "5WuXcqnWR26h1fNwyyZoPx9Q1zHwGGQp2F21qq4oF1TYkLwTvHvbSSCqMuSng3t3USP3DvHvXRi9zttNs8UK4seV",
  "key10": "ZqugBu9R3r2hGqzkBZqwBiU6ayQRGDKEh9moAYpsoLpGBSfWBLR7Tm8CjYFh6abLJkkdyVcBVCtuFVS6oSGptUf",
  "key11": "n38Ddm3pn73XYJs7ZAZvy9JPuo41GUfhAfbQhG5HPAcfYPoK9mupUaMhBfMTPctqyX1cLZVpXp5PAJ5nSbTNNzc",
  "key12": "4iwbfvH8PqG7NcLSSNpSYxE3vP6gC8VT92TDtE9kXScK5JEsJBKsLXzZ2d5zhyZbUGEM3QpCvH77hrs2a3Prq2i3",
  "key13": "33U8t7hSmwXVu5tUFh2iQap9AJxkbEZyem1645d1bcsJjjWbB6HQDj6gnqdAxcjJodqdvA1ZMB6c8wAYhjtzF3zJ",
  "key14": "5EyVzeACjyWJ3agLAa3pehQAeiD3QLb6kgxh69L3Eqcq5HtZFQK5fBKvGykDdZwdLCrQcFKn91u8RxHtdp7ycD3N",
  "key15": "4CvE3r14eKVpB4LuyQQEkEgcLdRqMR8ThHuhP7VuijbXkkVkp51AS6SVifi198anJZHYeVkAwJ2MUQtkDMTjFEhf",
  "key16": "TUu4qMx9sSrViQNRchEdLu8r9f5cvLs4Jz2kDiCUf1QzPrWbUof3yWLjTqhnKtWxJbqnyQ8DbQdKjQ7dmw7h8BZ",
  "key17": "493teGhAZjT7HNXXjfjra7PrUrDBw76UFau7Qwaepek7Ko2EneQnzApNhPqe2CDd8vDbuTu9Grbd84tSLzwF659i",
  "key18": "2JGEG9g3qLtje82M88dX1JGPiLHKZK1fG3vuTWu9UUVnrLjo6zAESSQUvkvdHekQmyBkgWHn719piyW6CAkAEUxy",
  "key19": "4iyWtUguAY3jScpZSMBJN97hpKE18vcD1VakF8g9HGkVBbzjLQGgWRpfRjJiMV5vgnce5LXLynPxkPkP6PqxYxkJ",
  "key20": "3LtyTGwYaHwtxXVtwnf7MQEgd3jBxgqxRFsugVUqHST96AUxpBUdcguTy22EGmT2fV1Qt11Jfq9d54PdUJPLz6VH",
  "key21": "jq6yQKhi9AeYfhZYiJxTzWx6nU7Eg51U7peWuCCe18GZSeDboiTsS3D8T3c65MZQXTwHyMNF1JhyuueKM6seVFe",
  "key22": "5rgRc1xTz79RUwubv8emgFWyxLCzZ2RYAJArouaBRxyv59E62X73nPYt2uH2GmTRRtPHtTN9NzXyKz1QEvdHhZEL",
  "key23": "2SNZx3Cywv3yNbtK99FgrGimF7ho8bLCbDiJ3KzwfJAuxKrnY4mrxggetMQk8LG5ZM9WpeLM31eDUvNRRsEWfpRA",
  "key24": "2dvNuBsAjafpba19WEwyCR8MLyZbFkB9Kx5DitNDqdwXcqtSvATL4gop8Di1bvupMt2dsG45QAeiCotScyxT6qi1",
  "key25": "2h7xwzowyCGhnw2AgZjvY1BdVxgaUck8SmH9RMezUG4rQzytbJ2KEYjBTtbRfxLH2rdJWbhRrM1fX9WNCFNQbHCj",
  "key26": "3SkTRr6vWqfH7ygDwfL93DLBcs2ULa3csd1cv4tb1LRBdv1VnfANsy1UucvmLu9yy2PagfsFJURgzMDpsPYn8Zt6",
  "key27": "2zX26WadHHoPFQrpNRuFFRGQb3Q1ccoh1fzAKV8wrXEmVXWtuAYYydq9snvGxabHmoqKW3zDZTkN8iEdM8ZjUCwo",
  "key28": "cJGhishmapp4e1kcWY7qWXRwAKVChnmxarpfB7eQkaH7A5L3zHH8UwKQmfCXFQkDYQg1FfsQ1d9NGpPvV6UzULM",
  "key29": "g41wym8haCnvX95ZAC7m8W5AASU2XSUgj4fF4BiUvwvVVybvC5qXS6zJjD7K5rSbNS3SxcqF9m4i2YEDs8C8veM",
  "key30": "MAhTUStGthjrS4LmimTCsvvZ6a1d5Bp5HTeZrCrX8AMob4sPL5GNNZu3DAcgEY1HdHq986WgFjaU11KYhELsm99",
  "key31": "2wuNUJts5F5G38qpuuGgVmvwBBfrRsgRtq9Z5FiVxvw9Z7oRZFAi2HY1s6ZRcwjbFsEL815bERik9B4fuFCBHocG",
  "key32": "5Y9YGTW52kMmk9zzQa2CoSQxDtskJMbWZGgdJMkn9hQpYPVzsZNC9BNb4EizVB96YTSwfWVBctNpWJHDtgBTrdSk",
  "key33": "5kvZfpZzD8VL2gqbiT1SmcVVFiy2SdiH5aLUp3LLfM2QkgcqPGZzQ1RLG3jkAeJW4JnDLar6e1Jr8yXG1MZedGn",
  "key34": "5Jms5MrHBDRgYFX4sUbV4ssbjP9Bv5ztEG2eWnCaN42o3BNgp56dkaUTEtdjn57KQsBbJe4JByLLLJ7m9wA8UrGN",
  "key35": "5wSvvqo3nAym6Xq1q6pSiHLtpVdiMwJfPUjVfC7psQqCXSfHvrPku1UyaKQ9GmGUxvaCawXLp6JfXYtAjmJo9sFc",
  "key36": "2X75fW3k5upv1gRKpyap7E9tWmmsEsGjmd6oJoEzuYTh1B3ciseX8kWzWr19TZi2C42gnE2NpMgujxYst5TJnbqh",
  "key37": "5GFoCfRUhE35QAGU7doeAnD4SUx9daGmzHNxcPc2Qy1FxeXmVobJnJGai43ve2kJLDvcd3oiuY2FqZiuzc3iH8Mv",
  "key38": "SUeD31LQG2Fuxz9BRX8FVgfW2TVmtffzk2QM2txBMzKtM2dfWWMwKKVm7J3CxZ84j2g8nCsn92m6V6PS8VGWzgx",
  "key39": "2Drm8RDHTbRP3FFntap5zqs6MFkxxwBtXaakxUjRhXn6kKBRWVFS5nwXLY1XipzcPx6XzR41XMu1guDUcTjwUnMF",
  "key40": "5pNED6t7ESJwGrsRYxnWjFBGbmN9YPzea8J2cPz6bLm4wJnWTR2F1WoQv1x74QhQt8EAfV9op7y7FavntUAjHupQ",
  "key41": "27tsQzPFpZeAUQ9dix6uyFiFKwdNBd5g2tK6jA3EGdmgVyvbbL9dHjNuob1iNrwmpR73gvxeFH3TbaYfJcg3yimU",
  "key42": "wZH4xWmGtLFwJW1raDs5hyuMD9R8Yp8wKCKVmChPpHApeJEFURMedmEBwxZPaRrV8Atm9A4n1bYwrmJvZnjA77Y",
  "key43": "4E2g43ZCga34jJmGV1dUEqtsFAB3qpreg8pkw5FquQAP87J4tz8bCie21sYbySbZkHhNFac2Qp2nm9EJwmy7Dd65",
  "key44": "4DVoVF463XPYei8jL9Hjs1vyfVWS7k9EHW3JirfzgPmTjyVhNbtMAia1xPM419QdK3NmMdYen1cDHRU3rBSMvbpF",
  "key45": "38f92R7YZi1pTmeALVBZ2QaZgcRBixSTMxa6qWfwSgrPLkRhmGpY89hSzRy8S2oqjYJhuaFCHP3DoVcwjPNsMiAE"
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
