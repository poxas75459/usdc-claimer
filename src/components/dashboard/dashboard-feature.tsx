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
    "4EwfuffLkKkUBVGxG48cq7yA6Fufn5CHW9tWZgsLBu78AmevnqnBndEAXLyAs8E3vvT15rtKb6UbrrpvX6bBuwnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QctoWEMneutdZzXJaXQRNuz2eZT74AiTVAiF6aAjbwGx9eg3oMomhUFF4sUatoj8ADoAAshUJByBof5J9U7udnW",
  "key1": "5qebijVEdMpxyhKtFcgP4AueeoyJ5B3YKjLVgTSYy4bkHm3mthKAcc6YGPZtb4MTTcB4p8zHtLRRidJ8aDcaUSN3",
  "key2": "5hsh6zzJ4KCUfqT44myddS2S1ZeJZKhFMPiA2ASmZgpS5YTAvHFfh23cgvnvTUGptmyG9LWWV5Aiym59jesN1fPq",
  "key3": "49z3Nwy1ymGgCdbd4tJpntCvp3Tgk6a26TZLbZAymbi8gtuHpHTyqjTW9GdxLTSAwZ2Fq9e399zLZJpMEkt6fvws",
  "key4": "SRH68pnkpBg4Mwr5dXiwaq5CX7sybcJVLQ3ZsVy34yKTZVcdxjhBHmqAksJqPquWUh7MYR6DfrwWWWEgmnVBXzv",
  "key5": "3sSn4a1hRbxFz2qoGpAh5Jaw9ReoJj6DxrECxKpKz4mVswv82gtx4mcXoaT7woDBQEukioPJSKm2sNM8vrjG3LMB",
  "key6": "65yycxUNGbfajCA7m6XETFb5hDyvozw863FJGHDeWoSXkMcsygdyJqoomksZgmiBQYazyVGuCEFAMQKvqLrZtswb",
  "key7": "5nzSmiKgQ5EpAJd4SUU16y4TBpsagkJtT2Rag2JKJBRYFcZoLAxkNfhCSpk2NkXFXKR3GQLZxiqNynK44k6VFpFb",
  "key8": "3A4M2af1VZkRk4mndzU1LvYyRpdeorz3AkDVHwGCMPBQsmC7Ve2dAevcjYwKHFZtXLssYoJXhXL5KSdc4UNp3u2z",
  "key9": "5gcag2QTd3rHkdJTuqu2L4MAuLArzdWwV4CdFDnsw8HNXTfosYjNhuErp6FdQCGj7AwQemUqmMwXYY4og78w5ERJ",
  "key10": "5uB4ianUMQYDx6dVmsSPvMTPXLUVdZ925hUKnT2HPBnajzyUSEHAq8J865iQE8syT5xikPgsvz8YJy94LVACAbE7",
  "key11": "8NheDaQXSYGvWUPCyQA51kZxskkXBQvaT64zxjxkRvbB8UqrKASABJ6v1bJbj5FPC2Sf6gU76u8RCcXMqdNgKZY",
  "key12": "2qZj2meHeSy4usPewJAn7KyNr8BZtfoQ2faH6s23UZitXNPWmQiwwr1GtTaBwgmVUgE7Ni6LGC6ksR1t5Svv4HXd",
  "key13": "2UNXBtPJ5n5xrbcAPaCYM5RVw5aCL7Uy5TXXFowVeT6UrFTvxLXNoSbQgmBmMNm7GGUhbuKin23GKby41pHorAkf",
  "key14": "5V2EUzh6gLoSchJFi4XNTQoz7ELyNdFWhjTWYF6ReKoW2bCDYERSwKNsDuKXbjtsbz6FedZabhGvovG9oPkQV6o2",
  "key15": "2UNjN1C9WjpxR5uQXUGdWZZeqirYuaTMyyCUtfhx9yPncazh9Pc8VqtTtMZyEEyjUwAzH9rrZssPzabZE1xUCoaA",
  "key16": "3XMuyh8hsFiVejPgevsCQ69KCCEnBENud3Lk9oKbCGZgFG6ANvQLD54u5kAATEXAeqp9vsmzeSxCytWwFcyciwy4",
  "key17": "3xWFetxFpvbhHDHZS4pSHqWG5HPqVYy6nkciCZeA4kGCbm3VTdCBvGCApuctyWc4tTCdghCpkR8E2vatGVaECxZg",
  "key18": "4gAQwhG7kgMWYvvMpUE5Snn7sgiieFsv7ZSsDM812BfMMHFcGk1NhNPvwyvhuzwoRkZj13sLmFoXAStp68f8Kq16",
  "key19": "rzu6sV7F8TY9z7G82EU1Xfv4Ysv2Vr8bFTpDuwAD5yyCih4apse4mthSor7HK7LTXHaebUJ11TcqCRkGcHYHrGz",
  "key20": "kbtNixZkRK9W9hFP1kUwH55ctuxzY3Wqp5bfE4p6vQhEwxAur9s5WRAu2NovsKCN2BCqTjwE15QEENRYrBs3Btm",
  "key21": "4dGTzeNjrBzuuMR8mV1SJjHrg2f6RgActcfAzy2ggSKVY4PYREfr8vdUY9B4Dvk8eNceCqzVEbtGUH1Hh2tpqXen",
  "key22": "3Khfeo76SLDUXp1vUzveFBvFomDwsoHYTSWMrDgQ7E3TKF51WGsSbTPQZJV1xTZYperyC9hi5zhJjAMihsDEEYf",
  "key23": "2vL6XetThyz9PPS4Sst23jHZnYEG2zqirHJ4XnnHbTk64XoU7y6ncQWCz2kPJ45c9bihFkBrwnonN2VJuMPYXvFg",
  "key24": "czaGpWd6ZruoGFthm3yfMJY7KdFFKKPwntsMdJLKqUu3DQKSUjVERgBu3sEhQE88aDCQaooB1DKPeuiL4E3pG1F",
  "key25": "25zC9GmoPtm1RddywXcBJYHNVVhVe7tdn7YjSpKSmn1aRZjM1v9aFUZcG64Co5oqLwqeRY84CY7o6mMrcsdPcmpQ",
  "key26": "48GrHFDPpJHqSMf6HsKdoZ2JJx6j1LenxxJddMCWZjoUg3tYnkqYhJe2gZ3UBXYdk5M7v2Ywo3vsf5FeRvcHjmiK",
  "key27": "4RJdEFHscxT2pUr85A3ETvAomS3A32bPG4BcMwJk1qhxXJM9xmmT8SFuUh12LbrXSmcQUj8eSCiZ7Dj2TpY1Ry31"
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
