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
    "4b9k3kWxnpk5B4Qmui7jbszn4p1LW7snnNRhi8ruFnXxLzSwkRAVgpZwRfreVJAdjxaaiMi3YMgywoxj12BvMDem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HGAMb9hEeRiwQfRWAdKTr54ugpafCTwmNvx824bcGSWuMt8akn5gNTMEf9ee9AkwXtND2T3rMhn88FWDVNhXNTS",
  "key1": "4ExtEebZEqPHaKj28sTQVe2Wk4Novvx2s5at61C26t6k7p2YhjrBX7RP6yBzo4kyeVH49esZGjdBGAT2zZfdwMZR",
  "key2": "4hF85Mps2kizBMuRU6UiVvq2GjwymfXFivGU7k3FC8DphzrUPeg5GyXyGFGAerHDhFJTgPHWMdaur5TmiDJBDq6k",
  "key3": "2RHoThbRHStkWY5yGHUsnbBYZ32S4pRtBcSWBXerySrj93HB52zGufqwKx5egxAZmA5qm5CoHCgWsmSKqKyJoPvT",
  "key4": "58BzYNjj8BonhdBeccCwiJEwydFgA1t8DPKbE4GwBgBM9V62KH4oSDtDMQ7pACruKgpEJFJcmrPGev8rNGUgm17A",
  "key5": "4BrXgF5LkZXYMYQvN7qEmnrp4Qrb5zS9FFJxe3m4XWKPWm9AbNpCK7f2NrwHWk2wyraKgJW8pnbkajuXQW6UwMAD",
  "key6": "DvuKDNYVVGvCqhZArMYRgSRo1oVh6wn9Ve5KanJ7JitnCAd7ZAgJJaDTv2qYXjXRQEFWZkj2syTykUGMYJRVMBz",
  "key7": "2325pymRs7ujchT3KPWAD7wf4EA3MjnjDaVX5ArqqVrm3zyZ6m6ZehmJ6cqJ3wJ3UFcMQHTsJaaPFpup3Smn7MXL",
  "key8": "FtQo5xpRhJbPHT5aVNs2iRCahCZtoSMrJXxfdEFDAJ1G1MHVdq8jYiSiNCuU5P85oLEiSfiCbKt7NpV2cHoZwNm",
  "key9": "5p9Sxq1hLG4vZyRhUthkWrihEaWXQjuvzb8Bx6e4pESV6bA91PzKcBmG2Vu2mGrnGsCmMk9vv5gWB4kNEueH9hGf",
  "key10": "3gALnkJbaxiJrYweDxCWDHNqveDHLY6A1MpfiUWVvNTxiH1fCmLBc73vg2KUz6utXQiyKLHYFPsdJekA4kPhGYDy",
  "key11": "2wsWHPWNHWW8mGfPAffgYj9vWyFqita782WLyFW1B9SWpwo55GytfajphLVb7w3qhZMdZWa8dvPuex9Z738mbNeb",
  "key12": "3w8jkHPjRkonozSURkMQV3cGwSTB2yW4965UDjYqYhUGmJts61FgfSgRQhFMFMnJQ1mxCBBUDTk8Gv9QFw2VAjZo",
  "key13": "4WxU984utcvRPT5vStXARa2UxY6Hoz2JT6E3SGPwoaiChdR6PFwB3GTG5A9rdRmjZ7AX93sygetciwFQtsRxPVHD",
  "key14": "61NntLUjJ16z1Aex9LShptRDEoodqQ6QmiLaLe6L9UPQio3usWh2ok2fqD325Phmms6hc5NaCCoKc7j6gYTvKm9Y",
  "key15": "22yg3S1R1oFSsc2bEWoNMhdH6KUFRiCn8acqfezFH8NgAdCMJkAUVRx26wBzP7bzcQoSJz9rynjCbK29D6ByvqtQ",
  "key16": "2EBYvWnEShFRSZ5NFp2Aa3epBLtobmTLPoF2JPNx8kfwzhMjBcY3gT5ZAUVeeee8tArMKxfkfiKCkr5roH3wYy1K",
  "key17": "4yS4ssTcZ93TbJvPiRCCVFWHWoyi4NmdxKTWP3A676yejZ6bRQQ7LW84bviZHhQvy6MzF4NYv1ynfYKRscKdJyPi",
  "key18": "MPQrDmVxjHoD2uArFmz54cuaFUzzmYPeGUGkwMj1d7icvhuzHYtKVc8YUntDcaCdsNMq4MzfaoxSYkAxenj21M5",
  "key19": "4Ep7g8H4cT3eaafhUkcJ3DMyhPVbftVSds9nGY1uxSeZgHg58iQWDEPs3kWvUHYA5Y8KaAijdtXXWNGsRfCcvP3v",
  "key20": "V7PZDKWcqtvHnZqmkDjL4wYWVoSmdh4KviiykMpQzmgU6RdfqsQrm86NjGghYcWS9sHnLWsWm3D7EdaatmJRYdm",
  "key21": "AmYdwEs5uHMvMuNW57tsJ5euwyH1DuDSe6xamKqeJZW3QDGUNKPFRRNMQ7dhKqozfZjHRXKYLgzgvxkpMSGLBKe",
  "key22": "TQ71h4dhZQs1GCsc5TUZnNWEL3HKuVXzCfMgjBWM4nkJvd7M79WT4jxR1XU84jhaisuozYtAJsVXbufTTPbqhMa",
  "key23": "2BXMxAmmpvYWbCtRPwUKYWYsfm341SrYG7erb7CMJiqMRrD9MZeDby5a3y9C7ohdjjoetGusn531gkjjT7unT363",
  "key24": "4MBfF6pzXiCf814cSrWYqWKAsNkKxjQ9vAbZT4jfPHgZexnw7MHojfoJrrBM7TAB6reNE6BXLJiUJGKqjLZe7p4r",
  "key25": "57pWsCdHTkUMwqxd9pL71T5xZJUmZkhGUmKcwBuxtyJGEvcwXTMrGBGqhSdEgNcwmTBWfYcUskPvbC24mxRgbeM1",
  "key26": "4sE1DfqNUyqaCU4MhFtTZKJmWLMZVnUcrxTCZrt8keNwk7JHXhZnv9E5PXXWxmeyN5KYcot8Xu8LPvww2G8iMQcU",
  "key27": "5SuvQea4Z3HWfTLLEkJsM8gCQmgcirx6wiNoJycqSF7opvcbPEPP2ZASNeyWXi5bMfsXJUm58SJYGSLzNdA6gMj9",
  "key28": "2XZT2HpCfsXYE1yuALoDxit85kAenbEcqqmTnLA4SDc6J3Sy6SomncCyNnkddcxXJds5tmetuwyCGwCADJrex9g8",
  "key29": "33qcJcGvGsAnCLGDbKhrR3geB5BiXHijQ46FwKpiA6YGhzq4nXvTqB9eQ1kzopPsTUrGojkNCpyw1yKN9Su6mBUf",
  "key30": "4EoaFnmm48wnhMaqEihW83ub2pvLFmdLgSDjBFxUaPqkKx3hym2y1obqfcwuLLt6WsfGG4sAgCo4nEHKaTUd6uTe",
  "key31": "3ownqDVv4vwrUBM3PNdZecXeA5AdGdhD4PML8T7R9KExKq1yRp8XKfL2LaFZjFckTfszbCJBxTH7afHxVditfMNf",
  "key32": "KMn13FcDtRSYa5YuKvC3gxFq5rmDsYqECbCdai18k5K726gDpC2wrdvXSWg5CsjWLt4yhKKqaJVJKyfdhc4Hmux",
  "key33": "4SjxirndMm2Zrh8K86UzYSEByzNYWYpWuj9JvFe71NguGdbXfU9NR8AZZcENHoByPSp85yJ8sP9EcZQjy5LrFsct",
  "key34": "2bvuk5mW5anTVgPpEsfzyaQDwAaEvW7Eu6kfqpMt1iexkhooQ9kv6Wj38NCekDA6Hbahk4dTRWRsxzAGzfRy9ZCg",
  "key35": "2swppnq6r1d5vwqGD2jpccjRvtmHB16vmmWbLRk9wGdN6gRfpUG7rh4U1U71x1HWabLzWjyWzbxcVYqvhMKUJMke",
  "key36": "3NZTGjxUvfPJEn84Ypwm5SwGy2QjN2S7Fb4FHLWeJ4wi1CQREq5TAhZG9oMHkEnuPtZE2YXJu6TJGMhptdQnjprq",
  "key37": "5XhT9KGXoQcHnRct1iNCNCUtmqLJQb9tRp21V34nbwVD6UKscKMFXEnBHg24LycWrXfNWrghPZK2PxZUQW32Bu67",
  "key38": "JF4SQADMgoXBM8Z7gci7TKrG7Amm4zYZp9MXs1hENx2U4Bx7iBEBeRHjfDkgRtd4MHSKBRzJZ5sZNozxFZr61xN",
  "key39": "2SudZzqpe3evE7zBhSqFhRRzG2GjgLTBht89xM5EgH6b6s6j75q5YfFXt9rUTDEq5au875jNYjToHsomgtxqRzsW",
  "key40": "2YGqnpqPHMzxzsxETozBnKZqHhjQVRapPYiUfP3jsMFFEkLcrXNHecgY9bBXaAe79dDWa6apv9fyLmrvGB3aj1za",
  "key41": "3xgu3esGGw4y3rRg32AXiboMthbfi4v2ugGbonh4BZu1hMg5w7utWVVP9ju3tZfcHMMH8J4BSiK6o76WE4ep1ovH",
  "key42": "FVH79uj5yCUAqbDZCJZboAbaLiEqthQxrWDWgVU9k96QzDL7cEeqN8mAMeEkQ6pz1cUiYrKJ4BzJ5jwKu6RUFjs"
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
