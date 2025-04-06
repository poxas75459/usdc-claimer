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
    "2GAWX9ewqe71NtqKgZNbhuSJdXvovcuyVQ45jGqKA93tBVVEBbwGXVUY4KNWxS66M3TLxYd9JFsxaVHECya1kQSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QcgDptiscsHWGQW2zfVEN7MaJEKV7F3Sm6dir2Cob2dZycHLadhaFRXyJsAwgy7RWsokxjR23TdCz6pVR1pcsZE",
  "key1": "2xD2aznEnwsrPs3wqtF6A8iwLhb6KenrmD6qMEUof9LZ2fpAVnUtVQMtScKc89zRekZJ6HkswTiog5vB9hwUZqXr",
  "key2": "2YSB7y3m6HBLwdVPnRyEW9bkTZ3sXnA79gNkgBevtSSgJmBQ2WM4dbMAUpk4cJMwMWgfyoN1xK9RVopWhMugYDTq",
  "key3": "49S7jCFEh2nvYswFbtCbqfan4Ga9xVCiy83WqvR3G97KQ8jFKFthyvwmyEQZsmHLE9Bj7kdG9t1gnYzgesqa1xj3",
  "key4": "7rQ9k5YwDapPZxKe4ph2Gx24X8dtY4czuNWgsuLwWJfAvKC7ySX4gQ2WfjZnJJuVDHP3zhbrJDuxaXifvHhD2wG",
  "key5": "3xQ648m4SJMqPGucqxkxSNfqnMCrBo9FzgzpA2a6ast4T4G8AySYHbZhBYsgkq6bEJkjuovsre89jAMXg2iEQoTL",
  "key6": "7KVwzYcC4RP7AvMteeyAb4qq3KNBrw782PFrQHTYbopc17QRqAGgk6gJZjZNzPc99HsE1SKisFh39BCPzFmAg2m",
  "key7": "3o6WkbJaw6QWHtiaamXiRfLeYBeFW9kYFQEFuZTArNeYxk8TCdDPo9PzaF7GyqnpCmpqXQxwZH2hFQ3qgAxx17fP",
  "key8": "nAuCdHFQLPCWcaLA3RhmJbfeqAYSwtVKonu2n4HLVenY8LxS4N4qMJK1en4eCYQw23eMmyNhcPyCK3T4rdHRAjC",
  "key9": "4WkJx1pLWY1WGFqCBwwxnWCc7SYxYUfoix2kX1fkpaCNHFvcn8xAu85BVLysnS2fkBvfw2mZvudqZF1A8WKD8QmM",
  "key10": "5cHgCpUMNbJyG4NEBA7PsXhz2GB3KrfgYiKFZuYBNgVhUEGUb35h5aGJWC1JjzonKqwaoi81iDtsLd4AYKRaLSyC",
  "key11": "3Y3iDfz2hCj1dKwkDN8aMZEmPMHzTa7KNEGiLTXV7uFz6UEYHEmF2rBy9T3RdyphEWP7G6dYcLvcvjbPibWJmELx",
  "key12": "H96Zaj37ZRFtntzSzx5MS86ZXNv74ScfwJCL9SjPULdrdWz9PNFiZrsi4QeQzgYwQRvHrWot9VdjCJWbFfQdc8J",
  "key13": "4ZDhxjKNS2AH7LtF8sJzT31kXKrp925VTQXLFV4aEwrRtb9WdxiPRygf1VVPksQQT6sap2U9FKG9ktVfTEAvspKa",
  "key14": "5ytNtG9YAKKkwocfZoMox2GKCNmYAGw4Pqs62aeuBuTubcFaPsm4B3VkctSp1UY6RoRcifmkSz8AF31MD6zP86ns",
  "key15": "21UbFERT9MhD2VajzwMeoTvoafVm7njaT231N6kPEKwYdJFtSDwdzYR3kYic53jCLzXHmhWMZZJmRudCX38c6Grd",
  "key16": "3e4ERUESDgnCUbw6Y1U8Yzn5nxj3uvf2J1Z2aCmxikhMJdSbAkdkfUpwGaCfXZW3RSrit3v4HGuhQ6kpF211GWaB",
  "key17": "5wcJBvjExm8CWwWEcmgfv84LEM1gSvT3GwHHMnMUoN2gDF52xzxYqrVRLVon5aPoan6VeTXxcfx2dTjo5sS3kmFg",
  "key18": "337heeB1S5YTWt9truXiJuK2hSNK97y1fdnkuJXixgxXaKURb7XaLQRtWY6rniZMP26hyTuHWk8FFpdMbX9EEjVm",
  "key19": "4DpCB4VhMHGkwdnFUfMjn5CytEAVRJB4wkWS8DqJmC3gMF1i6YPU1cFQy59Z4SdVSrqa8q4TG9XJsgq6f9BejDav",
  "key20": "4AGUn28jSyzJ6iHVbRiz8Eugqezd3CTZVyQ4mcGzDTVLK7BRkWTyDv5vDR4ftg2vF98t6z61LERY5v2RKmNz7XjY",
  "key21": "55f8hUBB3fPLVboZehvYZsv85w54zoXvsfchqY4L4mjarv9WsnkBjPTRbXjcevuMhp99hM5fk7zqSjS12SvbS5gg",
  "key22": "T5DQ8fuCGU8Rtewo4qnLqRyphuDQPC3FCxR88ZF8TNMzVeSAY5ywY837cSNS3o29DkQJ2njJg3pTmG7wxXnzFoy",
  "key23": "4Hm3T43dKDUvLe52fYoEETw87oPpCsADmMMvWueX3NX5A8kcK3NmjmmhPeZ7xWSA3pxHTxDt5jjDRnkRqwCCquB1",
  "key24": "2si9NrXXuiWADU91N1DCcVWbc9A4QczCcxwyAngd6sADHJpKZKwZ1dv23CJGLtsnFPwjfs5D8LeDxoxrMBHMUzRp",
  "key25": "3jyqkKPwoT3QYfxQBfCVDUF4HqUJVVGS1Vz4eR8UFdw9ESRZfTLDiZfhBsMMYsBfjdAQHZoMP5BFdQQJsjGayhAA",
  "key26": "2gd2iHHnsfbf4B44FC1bPdihN9qENWqm15jtLayH7VxxxhXuKjobVkF4dssSqf4uBXV2k758wu66i7gxPvWgL6HR",
  "key27": "zgFLkmSpQJYoseheBF9wBLstfA7kuKDytpLFTbXDFnfEDhzfVapKeibd3iUCcvXGJxTXoLf35BVcrSAJHFfxBGF",
  "key28": "2uzSDgVptxJU8TcqSVRrAsRYa2Fi78f5m7fsVWUNVzzvx688LY8beM7XjyBnGNNP2khSPmLtwD8qZZ2QSuk9oybi",
  "key29": "N16osHo75uJdu7SWuiaWmdjUhRCC4LmmJwLHfQvJbAfPM1sHesQQwBkneqU3M6rf7V6qTxvhQMizoNkJQJBHsPN",
  "key30": "44wMGt2TuwTRY97eQs7MamVMjTat4yvFG8kuVX2BcL5WP6cWS8xR7gRdQTNJje1NK4QQiXicv6Qipj3ynJDNv34k",
  "key31": "2aaZ8qTQkKQzDNbe7v9ZrTnGgCACEdZybKvLjNdbra577m5S8LvhPuLriQVff31KWWUfK3zRvZL8wVUCbKU4csFq",
  "key32": "3JA9Z3F1BT2wYidhK3QCYYkxGw3Uq5vJqhD3qFdti9odY8XCe3xzcwgaoGsV7vYTpJAn1ecHjfryUTcFGJe81XU7",
  "key33": "5s6dgzAP2yQK41iNfPRzB5qv3oRF1qPmEAgQNMkLahULjoN1PvcqGc67SLz9XYqHjjLKBCLvW568thqUP4HPeH3g",
  "key34": "4EqZ8FsSepkv9xmdwG5XTA1v8B5SJZeS2qGgcdGpmAHqQrTvqYjsKDPZiNfFLsNnPi6F2BYcivnqXP93AiKGix13",
  "key35": "5tTs5bEWJM9UVFfXYsibQzX4nvNfvavQnrPHLypbLEYE13FTqmQf2Vr3BWDeiruKt5upqonJVdnZSKqbtqXUvVhB",
  "key36": "3kKW8yxtfktKi94kiQgbJdAhSAxVAMQQZvQsc2TshqS9spyzsfipMr7LRjYiLUA8UvCb75vKSmdm4ba5PpUZ9UaR",
  "key37": "5rTVZG91JockWeqHXQrwdrCG1pi3DWV4puA1LB2q2tK2Vo9Y7qmUKXP3UDYWndtn3aBv45Z9jCYcdJb7YWXEGLaq"
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
