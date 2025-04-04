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
    "Ydi3PypNGhxLHiCHnB328F2emZB8RUkBuuSR7pafQx8L9Me1P7dUjNSsSwABtWPrB6TZXu7AwGE9ViaieMo8GkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1WCMgrjx9hT8L6tonrvGmUD318rhmQCA6CQphY5FVUZYd56hAN7AsJsNhAFQjFdQRxxLVtsUGvt5msn11VLVN3D",
  "key1": "3UdjsGp1yvqaduVorfJ5B9cigAQ19mToK6v8qJx8gDJWKnmx231w68h3hmnij5nZFr9uKk2YAgibNycU69Zvep3J",
  "key2": "4iyzAwQdQeL4QTqAuBkcbgjSvVbDLQgo7PVJzrVCBAZ7Yycf1MRWNVmiDRgrPgAf9JQ1b9U8gBi53pJhgeQAPGJX",
  "key3": "d7mTwrNVYDXgXGmXkwPU1uHnPY5XMTXGR2yHzVgugTFCnKnb7byZP9ZdSvHhzJhd3frL5EU1fKi1Rz4Rzx9eHyX",
  "key4": "2g3dAPj6zCgNpkZSZ6xU5KeU5p8byMeyqAFXZjgxpFRX3SgL72EjUXCRvh5No6LQKVFf3fNX3GVVSyLfwfdi7raW",
  "key5": "3UyjHVdNTTfHkkMhpGgbWFNSkxhfN9bsB3oqRdqj2GrHuAVvqnigp8r5SkdZEETbB95gi51YfqMkq2CdJB4ZpHfQ",
  "key6": "4auC5xTR6CUWKftr3SkejLfbEjiSybEknULLP12zGx8fBNYoL63eDzzCHwxeXD6sKjLZAigZ661334RMb1tSy4Uc",
  "key7": "5FBJo1dq7m58diDr8wzTgi18WPGUaf8WH5NNmjjVLRZZmDgWRCWyqpZAD5wRQ7cHoJFA86oKsfHBELkmsK4XkzYr",
  "key8": "4fHgJBPayoNsBPBjeAoZsf9KJxBNY13FM5XhRNiQCTQDTX3MQK9d6ttUpgPCEwHGwC9vznpJBR2ZcnpKixGKQWZL",
  "key9": "3qwuWxbwGQ4LgDRLgS4YdyAYwY5F2NK4GVQqh1U2MRH9B1q95qjv7raJqVotFVpRpED6rq2pGNMSr6mX7Bx4K3Nj",
  "key10": "3YphMKeMuqkmKNqo9t4dWaeKg4TbEDd4vWetnyrZpX2vnqmb31m5yh9Yv9FmdhA6qM3ZEB7En7Y6mSw2Ui1GVoUq",
  "key11": "4HQfwDqzjwz8sLXMMfzUVxyF8NySakQzed37wzRGQTqdQYsC5SNb9SoJaSykkMHXiWEL8dcvPrq4XrzPvSS81n2N",
  "key12": "5Wzbtsb3c9VewgmrGXe1vqN56GPQZ3LZbtND6NfmLqgBesDFMh7atW4UaYCccMhwFDEmipLrQvjDXBZvFZnZgYoF",
  "key13": "1cpLD92DcWgrCAGWoK6MJVH8AJ8HSohmtiEY7LbQaDeijPvs6X1kpBgkLZrzFDRYtef5bAbSaJytDRbv71m3WCN",
  "key14": "Fd8Dgffminq4UyHyPG3knpQZuZYXaJZZFd963KAHdmLoZgcYRyGZMtUhejWZGKFeGQ5nVyTE7trvpMKGAykE4DC",
  "key15": "2RSKRVRRPMqwVyhmRzHDovqdtVz9jKAhwJnT8PTLvBEEELJskZYXrRM8UXhSDh8ETZ69ViBQ3nWvrvtxie6dfahb",
  "key16": "P96neUonVNEfvbix5U7pcavyDtxzEaCYUgmanHCfPS2C4t1UQ4LtHkHBEMWCpt1fnLXB8hPuYKmmjc5gD3Jrzt7",
  "key17": "3N2CuLheZ9d98TxiJP9JRxDqKcPyRknb2HX5kHzQincBjxXRSJXJNQWxHWNV5B6YywSrwyVreKdPmLFXc9JfbDLb",
  "key18": "22g2b78gU4ZHbjE4HVsKqkdRYrpHq2Wy8zF7yH5jBud6kh6zKT4iUeCyTy5xJUf6v1nSKrmguSdGVSyDwSYjhFhr",
  "key19": "4wHrYiynW6hSih85k3f5QBB2TiR2ik6KUY79CeYybtJFKyB62ntZYQWMvcGBKQGCoBs81Jcjz6u5jd62voTE6Zku",
  "key20": "3TirFzy4qDTFNk77e1sCYZ4u74hP8h1EKdo6v4CoL6W41ALcQEunQa8nkFdwyJ8bdFhSwVB73bv91W5V64ND8jzo",
  "key21": "2PzCnpKG75qWmwUzAY7nZRGvnzbBg7D5KVfpBRomZdtWL3uJaspQSZRaQ6SBu3SQmdPznsTzGQxbbxZy21CXVMu3",
  "key22": "5RysZFG87ioweZZD5aier9hAm55duckMYzv6DUTbSMhoF2DhrReLtDuepudzVErEFZFL2fXF4WR9NfTApbqbSFrF",
  "key23": "5vurkgEHLwEFqJetNPTKwEePhaGL3WHnWTSyN612TPNpdtWYUSksimQoNt7tm4eXnowZeVT8LDNzUqFKCHYKBiEY",
  "key24": "319ahHSqrZGJoGxFFie7Yt9RfWf5ubjYZyAWip4cum3h68C16QQxHiHVCnLEXQAMs9cFZzQ9WZYWr6o77aBkyoZv",
  "key25": "dDnE9QG9rVBRfFugaqFuRs3pB517EreXmU3EFJirm9JVyaYzy21nWX1mCQgb2bhbPX8xsLdZvAs9xco7sVZzG3t",
  "key26": "339KE2H8G1HMaT6aLofemcrsWfup2bzwm5WfjLDZAPK5wseTeRjTF9Zn9ahqWQABqQ61KFghrQo3DjUWgPgVKgjt",
  "key27": "3sv7W2BdkhtwoRPLAje7iKDnjUBZqew9LqFjXotsX381Cky9Yrmw1jX596WMpWEPxyCb5isdNv3EYHHhvrHM8MHA",
  "key28": "4252rig43ok7ge8ggh74cnBNTocmoRZYyRrXQiNb9x3oxUieifi2CPp3pDE4rHGAkyAi5sxPdcG1BeVHJdzn67uQ",
  "key29": "3WRcv8KxSbfv2QaeZfYHCH7M4WhTnq4U2NeCd9D6hqj6uYqi7QJzNkVoevTh4C1jpgDknfmLmqp9Xshpz8N1PQES",
  "key30": "2SNvjpwh1P13XLQxnu2kSLVYHaPtfEvGYisYDsTivH9hwvvunj6xpDkPr1FWpVNxybQCKLftc4j44rXouBTsVvXq",
  "key31": "4k3747KdAC6oYjkPzcb3VbqFg7YaLanHSzRkYeuR1WS5yV1qKn9fy7QMVJiUr2iMNdavvp9eM166GZuB6fW9BZfQ",
  "key32": "28VuNRpjuQ7zZyttDhvvAUkQxKoacUeZBrnYoH1RmUbzbRcrKD8LdDNdDoh87Z9tJ3xodiMKhtLrq6sDG8EhLswC",
  "key33": "5QZw1G7L4hmcRgPDQBeWRn9PzfofBM4s77YLuo7iyrWto9NrbHyZgLayUMZs42uAgfZCH3TN7f2bmhSLek8ZjiyK",
  "key34": "55qYPNbi1yDYNreecoqq6drsDdVmKzVUtDZXiNRzJofeHzSYaLo4x9EArsv54ofZ7wdA1KejWLYUyohdWdL11bCt",
  "key35": "TxdwpbsjAZh2q9n6tJfw5zKiyN8qB7Ziz1QzKdW73QDfNqaTh8wi6DjSXZhHADLWTYArkJMYC8sU3Asyf1AcJ6s",
  "key36": "57UZW75yLST5nYcSR3s6esN1KRWPjFjTUHDttSSekbvtP5BRpFMZnhUwCLXVSZqpwvTdhhi2bKqsnrKizcae5Hys",
  "key37": "4YMpRWtaFmdetkHF4EJEY6Mu8GcvT5MMK2FTL2P9bherMj8FPewr6UrzFXm12jzAHrXZPa9hHrtG8Fh6AqzUGZzy",
  "key38": "5V1BPVhyMPSpDUN9HBH3GMwE4TdxkNjU1RtbZUGuMQVDiTf7yGv5sxK5sc5vUHQWYd8KsoUFHU6GEnUwFM5zhShs",
  "key39": "32GpGR91bW2kNvGY7xVtWRcAtqTim93QKzzBq6ysJzE29wNS9jjxpxpPYhNYBox77HeXw4AuF48HqpLj7vmJZ3wi",
  "key40": "2312yCYCpXhFmnZ1ayMwqGh9MZhvYAPgPXjPFSmNCdKoA3TiSBxuNgzLGtbMHZ1dGhCSuXQvkuoWa6itNBcUxDdz",
  "key41": "5kJqtCEbo2efD1ZmWEZMaCT9Ut3z9erVaceLWY9hSeDvD23bxSuHEXtV5zPSmqfDvHzvfdHSv2EyBhJndWs7C1qp",
  "key42": "3UDdscV1hEDtSqVBSUn1WSyXr1gEuyLHX3sGNg3rFciP2L2q8z4AMq6gfMabAi2FD9iNiVccCQf6MHdXWUnEPqMU",
  "key43": "3KwCgQd5jPM9jU9QMNHrDSCzyy46UtXWTcr5t8GxgNWVWnnmdf7J2ATcJNuVkXDet8227ZQ7ePrJKTMiSyfhVk47",
  "key44": "2u56HHYahVbh9pMzyDHBnqzDx9QH5PUpxPMJ4EzBxVqe7dCATC1mMzi16Ntafduxj2eYLV2FmyLnKWcSPESwfZuj"
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
