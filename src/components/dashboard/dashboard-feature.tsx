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
    "84R6SG3cmCr9CEhSU4wXDSscu83ntPq34Z8Hxe7S2CaJ3WhG81T51Eh39SkFx9vSnubyxJNyLKHeSG44HDyzUL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N5fy4d1623RCB8CSbnv1FaRTkfMPq1thi6RYCNzsh26r8ZpSk4i2XVyEpjGDE7XNVMa1aurD5ceQK2pdSMHPLrc",
  "key1": "3mCCopopf7PQW4ju12miB4aDvqjDvYCo9eBd4i867CwFPvwAvdfKhABsDmKebb9TMhgAgkAtxNy5b8U8EYG4qCL",
  "key2": "iGTMQcPcNk4xbkBqpJQLmn3sPxngAfxyTq4Q7yLPEzZmK4T6xpyF57yU5ZY4du6xtMsUK2UR4zrkhTJEjX4tknf",
  "key3": "4BHGw7DnKsBtbziP24qYzL3hNMtcFma9Q9n7HoVyAfvqvc3y1bHTcX19zyVSrZAZ1kBxxu9SqoQDkv6dnrxdnfk2",
  "key4": "3vFehxoFpCWgVWRtewsKsXumjV5P1yMteN1xU3e7KMgCMM7Kb1vpZKZYRpWY3ywqo148RST4tuCrregjrTet99bp",
  "key5": "5A99UG2SE3vryein1utsbzERpz89hkWoX2jQCDJdd17msnAyLAgbNbk2eFriVMJL8dfpgvzehumsP8PaManYX6x1",
  "key6": "G7uYV7qFEXaSC7LMQtto8QdHCvXVtx5gxCuY9CjDWHUoGseRgZMc4Km5zYWdHt85wmdUzmUhvMT4eTMxaBDU8HH",
  "key7": "2DAFovwjM64fpd8pcASgBn1g3rnZm7kd9ETwzgMxLKbeto48pXo2L8qCPQiFP7BUiUr9pMuwWaikVz8XeLpzjsYN",
  "key8": "5XGkwzSW9ArH5HJwuswf8H92QPPUTgauxTSKyVFJ6cN5eQM2Jp5osTY89Xygs8EeTxBxLHWQgWN81C7jpjq2P4JW",
  "key9": "xbNur5rzvhDRr1ZaShvtFgHPkLTF6LXw1nFeXR75vt1FDQfPMmnKsfdGMRYAygkprnLEQLpAgKvQAjEtUYgoiqN",
  "key10": "5bkU9KVWZz1K6EDubMimw8qFGeK7bXc56yUFErwwibYMSVXKtpgoU1CLEyuV3ZUyDxmYxJDYcVRjL39dk4wgWtfa",
  "key11": "5obwZmfmch8ZZyMNk9CLbXAAoVw263LZ2cRgBU3nMWwXFvaQha9RyTfKVfPiw9Xb3Sw9LDwt4PQPMNifFKMtjtHE",
  "key12": "5Yk7L9jpzu6vebDcoZxXwXrhvF6tSiJzhSzMNykYdG8Nh7LMrDV7bN2gV8436nUWngzGbKXSRKPzB4N5ck1QD4tE",
  "key13": "4PnQ9hNs4nE8EbsPEJfeMrXXiTiJF9V31VsCCzxfZkaoGnWmsaLGETTDKZBmQWSAYLZs5vhuk3ZD4dPG1kYks8h",
  "key14": "hGHiYQvL6QESF9KqB1wmasJBFnd1cf8HckNSaM1neHuXThB9HkfLUJMpTaH12yfegPR23YNiPXgfW6FWHynw6ET",
  "key15": "4EKTrKbaBVQmwN9ma5cehoKrL6VZmq6EiMV4UQvYKCWEpteKx18bMo3hwruPWpfgM8XuaKepSfkJXKovz1w7HYNC",
  "key16": "5Gze3u8Lrr8kALeoHbZpegXaW22s3jkdzREE7vbvWTCATUXaQFzq1V9vMBLUHN7hqjztvBuHvN2PRSeQ23k99fuJ",
  "key17": "3YEvKDsfDyTCsSBARMdVUdYj7BAUrLMygvfP5Cx83N3Z59ezYfTJxK96Z2kwEApQ8Ejn5Bojn8P2rmTP3KseBGye",
  "key18": "4CCES9XYFYLcg65jXCWLZJ1rHhjndnQcHpSqgetN86sT2DLcwfSR6PAh8MCqNabhDse86mL1Ksj1RMPZ5nLVtLm",
  "key19": "259287iQpXhRWxXuZwDP7KpAm4BQapTRp2ZQVtKBATa1VqeTgsuyNg4Fb5UB3ME1Qwy5LEkM1pQKUNTBWFcLE7YQ",
  "key20": "2hWWrKTWyxxokdaGmSDxhUPpQKkb8ndjcdzQxNepjgkGykcwFwhFtuniYGozuGNZSz3obZEG19Dvk8EbtpppRN9Q",
  "key21": "GKCd6hy4s7jcoHpvPoHYgVC1DEsB7tjSt3ea1TZ2Cn8h1UMwRfNaSbNGFQT2toh52xuL8CLrMT97uysygKyGKPm",
  "key22": "GXDfJCSmejaNKRpgi5hA7Cg4rk17rgavPRSBth75JQUej6KTAN74dvsf2RY2PKkDhYDQtAdatQ6DWx3yQmqm2L7",
  "key23": "22EuG899EH1iqQ6pnvBYdtZbFZ7jCjgKQQ7ecx21vyvBmWbz8kR969ivR432Ra8RkkGmx3dTSeJQ28j3pEJ1m3uW",
  "key24": "2KDckK5uHPJdV8DhN9ZBF7EVFPpDat2ypTFt1M221qp2WY2AdNjJNA4QAsWFEiGUWwpr2ZTt64qeQKxHxattVE96",
  "key25": "5wXS2Q5arhcWQZnV192dhShShC7eG3gMChGopNZyzmSDnV2h51xK6Sqkbg3CjvYVbgbNicgst5YKhcPYNhvsdnxz",
  "key26": "5kPgnmTXt2LJ8gVhgh9aHbmo8wHBVNkYdWNT6XJ4mFpkoFJ5ynfZcvjjZ491gp3PC5LkjZLNrtPw2bornShbSwTa",
  "key27": "3PJjBszf2zVFkE7ZaRz8DVHWHCgoi4pqjgG2MhaNHACys6BJPaMz4wkVXupGeGvpuF9FqNwfY3UeeW6TqWcj3baw"
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
