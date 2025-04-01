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
    "5SRySJTVfUhZDQkETNxinXsZEgBgD3A3fzT27565pPbmtD1MYuywAa6kuBbrpx56Ma78CSJoRnkaEGgN8BgcwaLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wz4VccoJkPtb3RznudWY676FqSA1TZx4RmFue17NnhapDPPDcEvGGrmNNMXp4XckSVgCepb2397cEBSmZKUrgoh",
  "key1": "3yFnCnh6GmxGRTatAWk5B5TpCUjeBUY6x3pfjQmRiH713uHs9ZSR2Gj2qV1ZbjKbcexgwmjCE4izrLLBMys5gJtB",
  "key2": "2PHyFdbzFuRr15KSsLtw4TNECKC4Gr5k4c36qn5e577FUhX7PzaRD5rLXvAvzrj1rFESYo5uM13xgYuP78frkzZF",
  "key3": "z4CVa5UX6ALw4NjvmdZFSoxgnYiyRtMF6GihTfF1eyHbk3P6HtSeqQGH83rvLxqsCjk8Yds4SvtEL8pYr9CXNBw",
  "key4": "5yRiWz49MwwBZaj2hPKrH9pdfG7wF2jKhgp4T7nvEKbh2WDEzLBsf5aAAgcrbgv4utdRnoo1s2EPha78Vn3wDvN2",
  "key5": "3XMfAZ5i4NPHSZygtZXTyG8SsUfiatpG6XXDrXikCF9CoTptzQ97952KbZFQHL6h6k2eDdLLZY8d5z51qAQ7kVbs",
  "key6": "3ZFfNp6UPu9dFh6HVCHagEK3Z7x4TjgcGxSNKep5rCBJUd9K8kJ1UyHihit3mMUswVRJHSn45KSEBS4FdMzpuVoQ",
  "key7": "5LvuMKCsfhAmqDPkf5jiHV9RbYpSgcjyeqiWbSxiFBk3jMFk92uyb9ZnToCLXNcqvWoqLjyrDzpLBK2yCJSRxv8v",
  "key8": "hnJwKQ5FBKcKPsuHJUEscQRbiAinv8aUuojCEN1QmfihZMCbZZj6Rm6ukRu8bVkaxv2KkCzWC1ULUDSrcSgCeat",
  "key9": "t6FkPh6fBLSeepyixq64CJxjfLFdRQe9eWYg2vNAnWyz1qL49KzTFQbG7HFsj1s7Cbf8aNez57ccE5DuyXWqm7q",
  "key10": "4qWU4HF51Ak79fMoWtXGXgxnuuCYRv8kjjKadJXMVK5ynZbRW6jKf1utd4n5kX1y99KTwJgpMuageQVAzJTVcKHy",
  "key11": "5knPadDurNW6U6AcgBpHAvUY7yFKDc4mLvimQngoicvMtB7moZT97VnAv3UdVaETbRYs9qZKop2dpfe56wXciFac",
  "key12": "49YBHpvD9gdb7oVKE6FS9jH75rGWqhUiiST9dRCc9X5zX7wcDVyZ2i21Cyh4fZzezdupevVrVKxfh216UfnmdutF",
  "key13": "rU1Q1Vo1114enpss9ZvrPaSZDmkHa5QZugHcimbVmmSi7BfW9zXiy1e5zS86WfPfXtW6MWaTogC1Bf8nj1F39WU",
  "key14": "65BPoyy2DvB62YR5DA8GjUBNkp2wQm6RAWChfhnJEpGNX3XsCFpsZomDuegntLq7zw1Z4bHZAwjwRtdyR3LJpeCm",
  "key15": "5ooHHHaZh3ntg7UWsj8AzA1GH2MKQsxJUUEiDkbJfhTRaDZFdMQ9go7CMeSg25F99NGSBrwdB5DzdnEhVxCDmjTi",
  "key16": "2CeZmZHiN52ohHZ2fpyPnQzMZ3AbMXQRdzTqpqTrAeCaUaF6YNrcggVYD2qU2KJXEmEawCs3fZG6gdDrPum4uzoB",
  "key17": "TEMJ6JcrwdLPyKCzryYAjWkH1K6DVqWKBTDanQyNUkEZ9eG8f8xgUU1SHkwYfa2e2sXfPdZvHNk8N74ez8kPAhj",
  "key18": "2DNPj1kzhfW7Pa1vAZT8ykJtxuehibYgxCM3PM7HocTN7Qk8M3ggD7EZRpWjPpH1tgxmoVAgZLfJSjM9Jj877HTt",
  "key19": "2kFnk1QJzv2ck9jeKMHPLVa3TUPrXbYPCawbKbTK25yTQ5ojn1fix4znN7RgqzHXwhG821ubjM7yUxFZER2caPdB",
  "key20": "pkernSTdMXXWV1Zjm2tNqrPi4LDBqCazUDcqR8JfPbhr1qLCdQwozGNhoUun2udJASdmba1TKftehzSSrHREobf",
  "key21": "3JGjqQ5VcktLEu8hz6VeX3HNu2KF1HqViEnWD4kCEPpkm57Pw5MBYbXjULn32GJPensqA2G27KhpxgXNzQPEx9aW",
  "key22": "4H4fwR9KctuekFjQxBsiy4Sstfq8n42bdYwDM4N7QjyDYUn3DDFZp3Qp9Wa2jN1Xu1MS8u6vUVfC4F5n7qwSUMXp",
  "key23": "5Rq5DdZcpyG1SxcAvUd7FovWr8j8FRcHpZHV4CsBMZRN2AKZraByRSuqiucdBfSwgcWHmjwN25vv3TjyRaCRruex",
  "key24": "3bmighSK6nvcthRDqLVhsntLRau3VLoAaqCQaWaghd4znurZbvUSNk35n5YpTZY8uNnernPYSpsFJ6j9LNJN2wnj",
  "key25": "4zY8DEj1CquAWtXq4vT9U3sUKHhGGb7CTAeUBiUSL3U63NYwmz8uEo9N4XbNQHf3pELv9URekFux3Vaz4b97isc2",
  "key26": "2XNiaqpwNex8Ko1BLMRToLjf4Ni22otcX2YWG5evig1wsQ4zBihbMaa4T9F2ZpDm483Le29hkerkqJq6N363AWRC",
  "key27": "55ET3GAErNfiQ3RupyxvuBYNQUbyJpZ8CysQAk2Ra7cXraRtPzkF9rci8ffVGVKs6ATJ7iLLDXasWFMYzF7HgUNk",
  "key28": "4HR7UXqJsRxt2S56PLv5ydU7tahuQ1YABNv3PZVu1iDSNXvAguTRBv8G1Jp7F9VJDEdmkJkx1JrnWK7LdWViv22B",
  "key29": "4szWEh6HHMW4ac8ifauvxtSKZ1Y9sHvx9szfYvcTAMVU8uYvivuRoRHmiX4K74M9gdDuqkLMCxkLvA7i7mkbgsxH",
  "key30": "61c2NPqefDXsi1jn5EBTCRwjCgBmY5BYvkMuLXfHqwzEBPE8ZEtHZ2PcSSr7AMFyuy7XJmsq11C4oe6o25uRJ7H3",
  "key31": "37sW3JJk9c6Fkb9GyTJfyJz8aKDAHdnAHkLvXmU4T8sByjwpeMGHPcZfVpY4GkWXEybe4jyP5fQXNUbPgvcD6kST",
  "key32": "4V7X3vKXsNUSZtLzA7iVv1JfpJMhG9yYHdYvA7pLyhHaMHDxt4gHb9wmFQWgovsVN8D3F15C6E82Supc8kZX7AFZ",
  "key33": "2z6ZDK5qt6ZBwWtXoWPN9otGPKkt7MUa4wSBVpbD5FvZSiFAQ3pv5QYVXptyXGuFfYxTEnmS9XvbXv9qwCXKPmMp",
  "key34": "fVjV7UPBBfCjMsyaK9YhcZpt61nvkT1PjeuQ6sM68dsJ8kSUDdsk98UzLm7K5nbd5pNrMuunsC1XttwXu6bM9qr",
  "key35": "24MjJf9MdgmpAUK5ifbXSCCf6Rr7NPjR2Q8BFjxR9k16SzbNNcPs9XzJieD8tMBTyQc9H1iD4pW5qVsmHXTyuGAp",
  "key36": "2erS642xMbPjB9JTXtGQpUWfkwgbCt1Uzdi1ENDrvxSN8j3kxC5uFnrW3LxpmvpWpqdHpYjYPD7FkmVs23iFNbs3",
  "key37": "2qqKXjggD1jqPMYWx8K8WxMfDhfeMpAa1mMVeC4eXFDBasGxAeGuFA8FSzWkv4L8NfWoHW74nw6PybzSpNSKwYSi",
  "key38": "5wppQYwMwYvqkQ6PSBaNEHzDA5bnKxRRwrekVJ4Jraepo2XRMX7vUcukCMW1LodVZ4vdeqoS8qkNXK4oVKbQeTMe"
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
