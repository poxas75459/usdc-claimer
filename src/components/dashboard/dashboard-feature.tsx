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
    "2QEM27UT2MVzYZHuiwuw97ncr6sg7o8tNMfqk3in9PVC99TuKhtuVdhxxrv6EeVeNhTaGEcGmQX4CstG2XvT9RFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ekPp99Ce7vdwte7NKbFXU1dWaPV6HMwoY1AGcFNpiLnwck2seBTd5k876EaecqKBVKFUYCJVgmy2JCfm2AfGoTm",
  "key1": "2z8GLPaWcHzR43DGsBkPnbZ3HWLYJWPsGapDfTr49Fmik3ahYdYTMmna8yht8F1hV5c6z5UvEvxy25CzQhrPN6RX",
  "key2": "5WtxSvqHNxvQpX7cCvHA95Xbm8PFgS3NukTR4esBLA9K4zxovhmRU2hwfYt9dp3VfhNZjjgiYQwQ2PbjadbZdFTm",
  "key3": "f6yxPqHH22Am6u4jQYQKsVndvkzzHXgrwLzf9PV7sgRZe6fzC8ncEj5FLGJhZznBqw935yQJqpUjafYmHhPJNHz",
  "key4": "3feG9kB8oCCnPua6wLRAScsQrVyi62yBY657M2U7WGxdYDmuguHcCSm3R9jcQ4Z3BWHVHoNu3A62KHrNSPa9Vuuw",
  "key5": "2mtyNjchRvwhggJQfPzXWbx4Tm2WwW6sTXJuLPSK2tkGJHy51tQv56DV7qkkXrbbFATU8ZeRpVhRKGrAkBqeS3v3",
  "key6": "2a9XMk2qZtF4JUj1g47EdMsGaSxzW8WMBR2HBjU25yfvozzkCL121UEWhqHES6GgKVhE3zCNJ93dSQpyGrL2Dntd",
  "key7": "5WKK6hf1oCUJzmUCdzb4CJBrQ6MGQ7cCZqjdXZMZoD6NFkXZbhvu9sMxUw6hv9XRAJHPUvH3Ezciob1LJXwAvbwv",
  "key8": "5TWcwQr27yAvjVUudhjDAEHTyfVTUAss9fJQNPTp4WSAf8ZPoyp2SJRBRzLqi8TKcwftgcnMKQRwQpeKmiuWwoBp",
  "key9": "5hnBvY9sZYA4E4WK2ELc9dgbeRjX7eKeHhLtQZVsyYcfXmGRwExknYwcDfe3RPrpzw38saCo5DKA9iET4HKt9HFk",
  "key10": "QmLDUWj3W3Kxxhwg2Cw7QTxXgwxdiFF88RJPgWZq2PVMP8Y2jzv6JVk1HeaEGJ5ebf78gXUwcaueEXoK7Fa3LHX",
  "key11": "7ZDzkswtNSRCPdv5JUSxm4Di1L55FuzorpmiE6j8PCkSMgjuSWJ8SmfNbCmhq3z54AWpLcoNmrKPDWURdDc5ftj",
  "key12": "5HiNraAAMPdZWc4qR7W1hWix27Wi9iiAUa1a7rBAt2AxCyxxLKdWBjkdeezoLBXRWPeZYgYxFigNwQZm4JFmKuPU",
  "key13": "4okavN6B1ft3bQRLhEAFaaQwH4MLqJ6u3pDorwnc8L4sNxP19Ypg2TWaukjx2sj8eJYHWSqqFAp4XgAiDfcf5BBd",
  "key14": "65DDz2627tiZbvi8N4g5rWeh4HbeQRJvbAcAzezUpw7V9ByLj7NbC2ZEv4PqBnEsjuPyw3G14WbVfNmFZHhqsNHV",
  "key15": "2RMHdF9wmeNTR1gbwmVvCkrKHacdAJ3MfKGb5eHRYkFvLPfvsRYPHUXLubhNFdA4CisGiZmwTFzBaKVB5hdCrebh",
  "key16": "mrXphL3by2eu7WkdQ8Dr9BQZWPSHSwyxJv7QdCo9YayWYRgh99gY6HtNNGFZNjdsKbcFcoJifGbEFtcwq5UDyyA",
  "key17": "4aLnRZqBndQAKrXgehd2G2KDAAzUiqwwewWPVx4gViCbnzWVTDCxPkSSBFCwR2ZoRhoee46YWV3GpZWGLF4Lvrof",
  "key18": "Vssv9N1gG6xLm9LZPG6Kc8Ltj3F1AWFqWrsyKAAnbPbeMVSbDg7HSJEdbZP4idQfDBMVztabbGxJwkRM1eHuVdy",
  "key19": "58529rnoayZx7T1zSUuEG5ybgjpLhqWb8cUsGBRoadd9jKwdDRa6nw9QLknqBsyzsgo3EtXfBk84XpTYLmgEYLe3",
  "key20": "3shD26BEX1izzwSZ6WvgwqFPyezR2psCtP2eivhVfoV5PmSYDhLjJUTHXmCRLjZyt3S3Ddc8un4yght4mqZovFiU",
  "key21": "4VUYL9KuB1AAkL7cskR9aVgfYDBVG6refsGysWA4Pb1XzdJtRikTQVkWYL15NTUpQ2y4gRb6Y3JaZSVXeychy51x",
  "key22": "4xa6igrPbMXkbRNCDNyKeFJHN29ZekjdP7GL5Gq1VwqMmx69z9kNbNGKP8JnkumPd3LVWA7jpkSx6BCTjm7DLkaj",
  "key23": "2rnBHaUGjjUNygXguqVREYppcwDvMZUhKPLQXTc8PabPs7erzV71h9aMFZTvX9jCnbgeUGZvxJx2cChx55HWSX7f",
  "key24": "2uzmWPkw9CS7fRqLT65i5W7Xr9KQAbyFvUYgii8ftzhg39K6UGHpXMSzg3VnfkqmHhuez1uc8S6dz1ZTqE7aqrHY",
  "key25": "mwSsSbRrmxKTXtKWqxhWYvsJPK42WkKZvL18zJNxThaLeNmhm7vCD5gAYJ1VpKDUvysh4Nv9KJ59t2WWSr13qZa",
  "key26": "2W4s2icmwHNSBTQsxE9tcg6m7nFkxTDW32vPQ28MddjDdP3yC7hQcWXGyRF4XjSey6fu4XUsk1AwNFmZGeq4kAQy",
  "key27": "5ZbacReGm1rzwbYcaPoHKs9kdwm6FCpbJtnC72TtAffnDCZFJkKCkYQ3hG85tDEqUf5GM4poWH1dKmKgkSJLgyX8",
  "key28": "2XxoMnHpgxAySMGsxfXsL5zcyCY6RABE6nhsBYeNBpFHRabbNyNeKUeB5wRWwaNCaYbD1Zu6ahG2kH6ewnLoWDjD",
  "key29": "3PMNqCbWpEf9a3qCxmjMzLiAUTN3FuD7vLcMjJACd68LdHmMy1oqJNAaYFSkRMQ3M9X2kSyZphVV77zdiC6M8eSV",
  "key30": "3ay9fTTeUZn1im7t2qVVLzm96jaL3nBLqHT5Xiqvp5Nuu1xLv5N1MzdCEhniiDyaSdD4jKe8RvqMhwR5Gxor6SWe",
  "key31": "3hFBpsYwgrWbRRawWCFFgTsCgebehoZJbSSAwtvFbW4LnPoRaNZupQn1p1MKHEzZVXX1W8qbb98KkXWu5YoonYhN"
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
