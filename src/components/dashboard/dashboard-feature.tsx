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
    "4e6wL5jEhHM8ZCSZnvHHELvFHPotWHRUxj49HhFZniRXzhqEPrnJdrGwXKN275hDfD8oeiLzpp63B9PQyfDZGkCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F2p2q8TK3SFEi28SqxvJcVm1TVrPiMLL6emFzMV75SVh71hhnYHVPDQfmeS5vEH2HWzGgBKfNK2SgzDfoUben4F",
  "key1": "N4nfztb65f9jLJiK6zZ9fziRdCdMawwiKKvtiZejCCXG64E6bXDUtJiJwhofpGMKZZWX5CK3aeaMxrjgjruGEWD",
  "key2": "5ifCUbKHvSUkA1NcfNAtg3tS2A49r5D2KLkBPKPSNQUGjYdYQCAr2Gfn2wBLtaTPuyHk2gDkTr5wwf4paqavwHGH",
  "key3": "5sCh3ctcS88bfuWxKYf13BugamkXwqdueNw8upV2R8vyVbryqwoSTnazsMidZH2RJktyVETUWs2n8mnxBHf6Qkdr",
  "key4": "2auqa1iUfJXWANJ3xEKCXmPi8cZZcUtqamN3Z5awaptwxAQ44rpGsqKMZTempVTucFxZDCGa2MWZYs24vNJ6KnCg",
  "key5": "wQWJBK8LspoZCG1cDCUf24n4CUC1FkWxcoES7fH2ynApEuyL5SPqsxzUQ8UEDbocqxgMjabGTvSQmQoKUDyPpXx",
  "key6": "2iZFeR272TUc8EA4Sk4yhxkvzfXe3mVbrLA8PfkEA7NVTtDjZ585aJF9EtZFtv9Vks5a5x94cJBrt1EQTcJH9R5v",
  "key7": "5ay2U9jSvANbBm2oQ9uvVBYWUqfhspvviNV2iDzKWGJQWfAjYPfWQajiJ1pDdz9KrbCAnS3tDTo6LRoUTBjRptVD",
  "key8": "4ibpcomDUbVdoX3T92qt2hREpU6vdHKtSJHG8o4MbzEzXypXHnawwzqdhEZczgd1tAgSpiDNA7CVoJRJAC8HNg1o",
  "key9": "5c6GJrUKf7BScSAxcMzopVyKxonCdRT5GW8K4ZH3tdNBpE9XPrZZj511bQ8gVUgVWxFvF2bgVS9GBjDPY8CdUFpW",
  "key10": "2CeeddyjsGeZq2KadEpbibZokGq5GZvjpsdpQ6u1Gds4Fa5dtKPKHyeXaU8bvoP8t93n9vfRPRaRzB3zFW6B5tfq",
  "key11": "pLv1r38m1YfpbuVqvJAswEdJdjEbSn63C9aLseFPbK1tz8GEjv75MhXzwqiEwBrAXoA4CuGKdRyoTXX3QSFtZgo",
  "key12": "3wgvucLTCJeFeGuHbhU4VageaL7tfhuHATnPVZ2Tcce4o2y4PpUCFnnMRZGhJysFVPUBZ1WCZ1oA1d9R6RTLSusH",
  "key13": "62wahNo2N4XEvWxFtx2ctr1DcDfucH2kYKWUgayPgnh4HmeyG1AVTGb8GcP4JtH38hJmrGqC3YnwpFVFtxYHUptE",
  "key14": "3wxqQpTi14LhdkF9YuHiM6XC1ih9q8E8TEmh3hwR96B6wpuJmLzVZ9bFYbpdGZscbjf8JqnTcYqYNTBHJK4ne2i4",
  "key15": "32jtTh4FZKPsEv1ezBnbpm9HxYDDRVc6ogcnKRB53MwxG3DY3yTTskw63CwcQLH2Vq5cpJqj7R2HayHXE5coi7JB",
  "key16": "EELn66VUTvQt9k7wkAeK59WFGbrjrKmnw1vj35RMjGeoKcqQndpwHj6Z3CwTyY6sxHwuqcYzVtFDXJ9WL9GfujH",
  "key17": "47xpoQ4V73m7Gs3AJmvPYA8kbEvdXh9jF15wnUrd5gnExGy9B3ndt1DXrwoU5pXWBgQcSSZ7jd3F6LCSZnRJzYM7",
  "key18": "23xLz6KuRJtkYGVR5dxGEkJbmBAy6qrVTG8bwfkR9YVhaKE7d61cDbKb7kzyf9e7dzBUVA89bzKCUJPacnC7QQJM",
  "key19": "2yFukcH1MmZRQFGxhSLzxVkkrjPqJjNAE4xy6vtYvWn37cMA1Y9igATwbuKRzFsirTEQXvcim4EJ1uqkfFfKDJ5m",
  "key20": "2wT46JcdRaok2FC2Pfo5dZ2BA9WSLRqRDYwHKR9nAmKLrLYE3SXJF76kFuCR1agZxPJtwcosDtS1rtW8wvo3nJT1",
  "key21": "5kyz3t8BmqzSdh6MGkbnYj43KaUSpriDEbUu52UyTrBWYKqwCame4sZCKQYRh8Dv5Edjr6g4nZ8t9Zi9hCrWqfVp",
  "key22": "3UD8mR6ZMH2NRWg8Y2TsoMVvGWHoY2yt9CdqacUm9968DwZDiyKt2XRQjgrR438Nj7huY19fSAqZGnBQ7aDt5NGt",
  "key23": "5bcwSL2Nm3jFQ7ZDBBBNGS4QRj15qXNgi3L9tMmoHkGFrcqsM6CSSEtsMauHbRCyseowJtNB9xAKBhob4VdRNGeU",
  "key24": "2ZTDafBjRTa3HywdBAtJRCqZVWL6mwfGNDZTGxciZL7Yjn46UFteWGaDdkLUbDZh99YcRFfvwx76LFzmW8FvwrkD",
  "key25": "5W7PQY6d5VnBNmmW418W9nT74gGYYwVzZeAYnB4k3G18BpqHzM9SKM9uGEy7Hm9H1yRFsjNKYHfp5izoiLxgjFyx",
  "key26": "3VvNYnAYUHm5VxK8NpyUjTmtUN8DHSn33pGAfYpQ71eKzSvpPTGfQmHh7aLtwdL5FYgtMFadtR71qpGJhvhcT2VC",
  "key27": "2uVV6ynZSNhGD5jsaoUh7NhpcKdGczMjjGPic6WDrRVdiF43yEEHSQ6WPCgn5NaS8Hrf6vR72Ug9mssfB4AkDAGe",
  "key28": "42QBiZqfnxW5xmwg3PS3VMbCr4HWzHt5iUWaLwBmZLJf6xXeQiQmeQAXZtjvtrDWaBftZ2dBwEEkZp8u8KjE1deV",
  "key29": "3GTqmZpXpzCdYzQ2VBBi7KtRnNnhaLmpS8gSmDsCVsiDEKicZ7NFPSRVNw8hzV23HSxYe6DfbYycpRxNe2isgYKQ",
  "key30": "4LfSPkXvf1XDDqGHaqqgG15E29oRAq9gkCkKGUH7ErQ2owTwd3A5gGpSku8pSzSZDvBLUWLsuvhoN8QGeoy3kEi4",
  "key31": "3FUmifqCdwuhn8Nc5w3XHzbBsdug9AW7QoABjbWNm3zUngLfYXv7enT7UZJu6MG4g1Ckjs8HZ8XqXF93aeycmHok",
  "key32": "55SDj2YC2XMn9hvPAH5xkpnVBbtRXRWEBNHFMXMioN76oHRLuybBzJ1aEuuwV12yuQrurZvmn2qdQCBzrD6XfGry",
  "key33": "47wgwuMRSPqvdVktceR8EjDEWhpbqZXhNu271Y79t3fFeLhiRcWoRF3mr1TRam99rgjPRq5kVobnLDQCqUPxDiNA",
  "key34": "5mWUKx1P69w7ryEtN2WHbHGveQTQpayNQWCDdcwqHWin9vCJYYajLACFGH3qs72cxVbpJUKk2nYQ2fG1Gi2AJTCW",
  "key35": "vte8mWoEwHt1cqnkdsgmhYrUSYNp6YnUDZefcvG9zC8moma2H8Tb2V96uVPU8MJhRC5HotbPJorVqPd49MoNVg5",
  "key36": "4GqT7VxTC42ZFuRjwqzsJgxYFsvJVHk6KYwxDKLZgNxeJeQk5qEZ2rySuB65a8ohi9NWxyN3yVc39CGnU19Whihz",
  "key37": "5upKwieFDw1212pUBB6qztkBeJ6SSrXdewNkzehNdfLcoVigg5MJGQN8tkDnLB9qvAM5Zuv3Gbpp755qeMLVXTZU",
  "key38": "2RGhkVeUjuriv6YygNYcm4vFewA9Tt7XvrH5bcUomwnSZPTdyXbht73nwi3sNpAXMeAM5tYeo26Zyy26HcFcW3GQ"
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
