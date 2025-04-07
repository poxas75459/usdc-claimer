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
    "5dwWsxmS4yBXsHVGgBpVyZcLuxHDhThn8yMQGPQF1CvFwY6Tk9n3GA42P9B2GWq3sXFWhwmpCD6RgVVv3TzdkHL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BK8CZKCdmG5qVHs1yLcb79wKDwUNKXdLocKZboHyqAfcBpqag6qMUDb5cWuRho8RCjL1jUnEw4y2GbMwcj3GHR8",
  "key1": "4fHh6rT7pDT1ZnRx6TVJQwJsKkKFxaL2B4W9hgXot9dSTTn9ZSiiHjE8PqxCNQvfbXzTqymWPthX3sLbLSziyXm6",
  "key2": "5Fdtk52BeqZZ9Tf5xtXQZTHpzi21MxWMi7zSarpAsy2DQZFknfQnNo1eGWNsHURyapS4ALdL8PJmtiE562RmN9YD",
  "key3": "4zN9EUv7v9X6JVLoHuKL6PiRGRXHPxs9LAwzdRJFJGHL49w1Z1qp8oUGE9RSvh5qipYxkqC3yL5WMdY9jZpxptSE",
  "key4": "2fBFhWjh4KZgvT2PZ3twbeGk6M2941vHq8UocfLaD9bscZz2WWn57zUFBmLiNxh4T6RTA5KLfDskJxLYLyipdeq5",
  "key5": "QAo5UhgYkBCN4AmBXioituoWE7KhSKn2PAdMDgUCrnKssT5jpMfRroDnRZu7zuYHQdvtiyaBWYNtCkTDxFZ3uHW",
  "key6": "PmhfW5X5UujMV2rEGemYR1VDiwdkyJARFjaBgMyz6RfKPQirkZx385fHUcN55nMnnRVwk49p9G5JhD5gu2CVbm2",
  "key7": "g1khvzKdsMqgmRKbcxUkqXRbu6EqtbPx3UFTNvLpBAVnWJV1GhdacCrdkkRd9gSrJ4ggKFLiZwKeyDxjML4szRL",
  "key8": "z26qZiFtqCV2iibrCjwMVJjAPV28zGfKEx5MiU285HBmbGSez8EGK686GdyS6oBQrTXUMJNEhFJLRzHq1QLqgNv",
  "key9": "43u4E5AFWH1GyryGXku622ZfGhaqvUsUmJbsabvq7aNgcmHuPwjsdDVMsDRBgS6dmqAektPDL6FWuAdJXDhu3x72",
  "key10": "4GC7URxwm8fW4ghZqqoay8QcdavKwo1Xs9BMR7iNJfHvShbdCkhrbHcbuySHP9EzQPVL5rW7NVpJYJRPy5pKqsz7",
  "key11": "2MBKxG2PSTqkHysPqsYBmdnqxYo9QDzym4xcFZCzE2J1iyTXdzs4JmfkZgC1i2wPeAy7bPGADS3xZn6S5sMuhgZp",
  "key12": "caq32KnovDk2hNe99zVec42h18RuALUMo2hgVQZUeE5X2ztjb36CWjZW6GqC8SPJE7LRcmYV9t7A7HJG7gKVoqM",
  "key13": "rkfkd75JjxvioRiHY5ULGiDhK1vRsK5QC6EyHraWVGDGrdiy68EaS2SS8TfKjFvorp1wpn26UWsJtz8Pw4C4Bqz",
  "key14": "4fszMkVKSWAZHpbP7h8JN8VCsXMPPHunyzVp6SnzE2AaeUJhJx5qArA1HCnsmgGD8AnkW7HcmRMGENwDf2Qa6M1Z",
  "key15": "3u97nYwsrFu8CDApxLD2TxQnXtoQorkRm6dsnWPtJY4RrenhaTQy7U3R7hQg9RKskQ3ZzqWdAK53T3NuH5RNomTd",
  "key16": "3VkviTo38uTme4mKRug2WeBHbgy5DsVvDn1rvhJQo3vQD71bu2TmqmobMjNn8MPjyoDS9VGDsSZD1QBfvkAAL1kF",
  "key17": "433Y12bak1n5wLruALuBc9N8MZ25BFy47qTmfLBQGuDxvePR5F5WcDqxhLkMFNDXHuxC2u9KvtULEgGaDdUTatXt",
  "key18": "2E5B1RiubHn9UHqvX2Rzbp5EBbCjVkfrLi7RXqwYjuxTP9iuugHwsxCkG5XZea66KBu3w27VqgKPUzfFGJPzqMA1",
  "key19": "2rvusydvbtEy95ibZmzcizs9bYayqAPRY8iJt2e7MS7Ze9MKZ2R62EXDW9fGzPVefYMRrDVcbEU4KwuUsnNkjKRB",
  "key20": "3pqnMNbau8SVckhDH6wUd4UZiSNf4KHTHnRrTr5CUqESEYLJHRDvB17Tx311afBCu7GHBPxb3gCJMUsXU6pB31QA",
  "key21": "1dV7tZcdXRVK58AAKDdvqkT2X3qJwhK2j63eQehcFdN9hoaXEDuLMCPouKBUX1GoRzkJzoHTndvSvndbRvuCWFC",
  "key22": "5EUcwnTHkBM7FX1gnCatp9EUgnh9sRjeQ52MSkWy9sSJZLzm1BuYRQAQKCoawwgdN1AVfADMEZgcTLDm2itFZGXJ",
  "key23": "2rSRfKgvAYgTCAad3rfP45DRUTRbsSHLBtdVKJy48hUNai2ZdTCewmMEHrdwdvqEshFDMNxDH9joLzoxz3S4KbX",
  "key24": "39nAf1HLwhLUM25v5J1ZbpuJ9ACVksv5bv4TckJSztnZ9mU2QLMzyECt9C8KFCXdZpNrGCuvNAHvY9XyWYTZsjCs",
  "key25": "3ZPWmywoXhFV2bfJNosPrsHfh17JxTspCLBiqf6ZpJdsrWoFaKttf7JUHFGxPesvfXnLdYqcspz856Mh5NsPv3aB",
  "key26": "W8dQUiZwiEQ81D98xXnnPLMT1XdKZKSq6sFmx95a6J6GEA2Nt491rxjw7mpHEojUUWnZGyZZ1jiV6TPLgQmd98v",
  "key27": "5fk1yLnR1QM3GCgReiPRC8pGVGkQUCTwD3y1qRNRAWeooshb3s5shQsuf7ce6aDX2qDXoDHcPfRPQ2w75wh3NgDP",
  "key28": "jfXq7vkHoRMuB3CHRZfGMkDFLXiCkdWinK1nKEoiQNPe477ca4NTqBFwGgcBGBg8j2Aia5dv14x4k6B9REDJSKd",
  "key29": "2se3zkHV5FpwHy478xLsS8MN6UwkzPK7TTtWt8RsFFZTddBFGmMcGnnd892ig2mrrfuvVi8AquBuxGjgky6KBTa3",
  "key30": "3jNatnfyQ5PiRaZg44TaKm9rKMGuuZB5Ag48HVVdPgJj9PkSLjoZQMeNYxb2kxcXg2KHWZDiJyDrEQkgEpCYo3im",
  "key31": "hYxLYBZcueeyFTLJQupSXX1k99ZV9EEs9ey6hXFyTMz6AmbRV3vNLKgZ35VbSdgNjLLEPQfsW8VYbCtoN2sC3Hb",
  "key32": "jjgviRG2M39e9VFRyMC9MDv1ZNrv5YiqUTGRdALG5Ymn4cwp6zju52wJxDDq3dM7BE3QrFFvFq7V717ZBHq6VZq",
  "key33": "3xVZPayhMnr8B4iNzYjHDNx7BA3rHX7rfy4PQ2otfGeXqPUcE14snQjPhafUE9DG8NqQtzRyG9tNXHhLweqwTB4V",
  "key34": "3VvUQ6YWeZqsBdPr1LjBMsk6G3myj6SaV6ZpVTTbG1XtoRPGnKcSjCPCxVT4U6DntQybufJFKv9rjVLmv9cxz6Rp",
  "key35": "5msxXtf4CRS1vWXMGDpvNeBm2bvr188mpuQxJCcUo2GQDGzsLc4bVjZa9zERYUuhWF55aBwSrr2WsPHBBXrDPENJ",
  "key36": "bHXpZvFuLe6vxSJcUypBSk9oSXuApr8B2J4u5Q53of3Te4oviQjkQzBr43oguVN3Tcm3dZzFHwtMrjbTKziSiot",
  "key37": "4XjcmHEurB9rxM64AuvC3437EeqkDz6LkwpWDoCpiReWBVRyEpUvXdottLgjcm3hasvvqXGiEVU46p9ji5jqu58R",
  "key38": "2ULe37XyZTxvfRf42P6cHThdEACxqALkjASBXysBprw2SxLJVv1aHxy7UH3ZBob7MhM5Sqzoxojk95msKAR24Axe",
  "key39": "35GSbBTYza6wxXqBpRgMzHtCcv9jkmeX6BFAxJp7Q4Wr3kfKX9EbAfhqoZEsatBzUS4xCJC9xcPLi7s4CeXgw1e4"
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
