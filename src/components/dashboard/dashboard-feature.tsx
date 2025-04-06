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
    "4TGwKSDjNkGw465LsmGMpG74Jh669g8zo3jhhaA1kYB5ZSkjZ8WsfeXPsBjNZuydhMRSZWAAeYQGRZrJxkQ2L4Nw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tUJ1xP4ZynKp5HsqwJEEQWeSj2jXwiS2miwRXEySpnRUmy9bLeJgcT3LmVnVCAUe2y7bwa57Vo285ArmHDTgAai",
  "key1": "2zfVWGJ2JwhYj1KMKPsFEyAJETydpYBYyTCvZARDYDVYqVW3N1EBHwk5XQLiScCYJY2FErnUMyxJFELzZiKhsmnh",
  "key2": "5m6L4cQt9mihXDp8Kd9dpkvP3UfvPKPcicQEtLP5vuErpVdbEJFvVZ5KUqvtLCJ8RLZcZfLuiNHNCEd3u8JkKLNt",
  "key3": "4AWQFpbP5M91ircBf1WJMBxgZ8T4c4UjwQKUuVkqb8zDMCierthYthb9Fjce4W3zGMHbfD2mA2mUzAPn1C4uTmYc",
  "key4": "5VnjP69b1xFJvTGz2WiG8uBNCrN7TqGwfcK9EFFfGmDww3DmnB3TW9GwnejJxvgoMAjFeH9k1izDz2qEsp6m51qS",
  "key5": "3ycKcw6C6oyp5Ag3jfve9hUqzdmD7LLgwK59jWZyRhFm8tctb9fiPXMU5dooEQFJh6esmEimDfDNbmeBuxdoYPF9",
  "key6": "2VztG27CGzvmzrNXYGdhN33qkTV7pXU1C3qiFRS4eS5ZzST8SXwM9adDyAEBCYnZTfN1Mawo3xEf6fimHuK32b7W",
  "key7": "3kPGAeKmzmkqnZsfUAiZJELq7q3F4J7KSVw5sALaeT8C22B7PtuSr9Lkc7gKXsTK1MwygcfLYswrAedysVnS7KJM",
  "key8": "4yeTtbwHgvmrxevj2rDuLfggFUmjcCQXQS9XXppNSD4uMR4KAp98kBzR4g7CLwv6esThZ7tEf1bJz6M6UYxEFk27",
  "key9": "51LhRy51drP2aweA4X1EZwRGcErX8pxPgjMvb4QXJ84hRHsLu4mS7p48Qh7dYKyYkmkA5NmdDq6bGfo5hc5SbNkD",
  "key10": "5nFARhVfHdJcg9dAThG1sPdr3v4pdeWCzHkjX9n3CzbawRY8j93ozetZKUmw8eDEaVeh1fMgZYbXfvjnd1ec7NvB",
  "key11": "3D3C18puZQRMj1D4E7vzGKZSqkcXeQGsNrjnJCaqAWtGeQX7euPoYTqFDoTXWDJB3kPJdNQmfuJkQGP87N8rthgt",
  "key12": "3LBcpjHqB2SYi3v3wXQjD3QNc7J4ig2y53PoBjKC2AJhLrCk5BGGruNRbz5prZBoTvDH1QsugzKvAdaVMwYWPUGz",
  "key13": "423s9zsiiLeKHQqm26Kxu3gxRC8tewrfpA3HyEFPNTSwJpCrBbWatJgNKUziGtyc2jNmjLNJbPdQ3TTAnduoAf9g",
  "key14": "2WCqp1hjukdUrjjnsBBx62YAeXcF4ZBZPmvzSB3i11drdYmdMAYjRcqqYcJaam582666Ax4zhJSBeNxQd7AMvbpF",
  "key15": "5b8B4dX7bYJbcEYxKTL7otSeds3MQyziRQMESAjzrSjqAqwr4fvLNuwp7rPR7oH9bqiNf2iCbaKrhmQUUJxN6dQb",
  "key16": "3vj5pUi9Wd83aSLPdm3LVEdA9URa62CxfbG14sx4XUcb4FPRxvPudEBsWfHDK1V1sogQ58ZCHZi6VoFD2F3vWKf5",
  "key17": "iKxgVCTYigm8o9XNraCVA92JH7NLv7hC4CUSsur6cnsy8EPZRUgT2wL78PZXtVJUQux9JCaMJBApjNs3cB2RDsH",
  "key18": "4jBjAQxSfa5gwvvV4BxcifgmR9qwznPFK1UHkR6v9bheP29VgSchtDJvkcdYEGV8GLNDgnGpbDRQ381qvPAv7vtH",
  "key19": "4JpAe9asqLgwdYwd6mrjZSJzWbr7BKFB2Qvx7JG2sUy5CvbhtzpuRanTpQJPnCRGq4PHHaJCVvkyxS7xqh5u8hFg",
  "key20": "2W1wsNoGpoy2QYhBe17fFVyoC5rfhQYoBW4BuJRmjXMYWKrbStaEH99P6wF1xeGdYNjjDhHjZewzjQaxMFYVAsrb",
  "key21": "4so4yWUaCMTRKqTRtpcHmdPATn4DcxVWQV5FHuPTb19tjcQcvX39ANZcFt6k94ULW26goQgdNYa3bMcvrJSwLgx6",
  "key22": "9vYa8h5kKquPygGA1F6RCHyxMHbgpUkbMsxsdmWyZCNqNoxWjVBFSQrknnv3y59SAytkodCDTGVqRZ88wKzRaof",
  "key23": "3kziiF4yos7Mg2RSPCzhqEL3LHsk2FdUFhoapvxKVmhYo1rR9Em4vZAdn6Zv3orzP5TGSNMecDtV7ixkdQyD86aL",
  "key24": "35EfjpukyCu2XUJ4MYpfVLrXrNRiCEioZSyun9y8sWpxuE9WseBi5TsLvSBY8TSkqs8AjaHeiiYjw3GKLpcZLPW9",
  "key25": "5zLgN4AsjaKi8CUXg4uk7PgxAHMZAw5qTMndsnv4u1P8poiaPGi2hKY6GtC1333HwdnPpbFTkbAAykgfP1MoeS8U",
  "key26": "xTCajujWMGdiiD8LdrK4gD4u9n7HZynkTSmrjCAgYggcgnCC92dV5BH5ohLBK7aLKDjGc5EKmnkfvGBPfHEzeFk",
  "key27": "5ataTW7wRqESXH8UDLVc1YgkmP7t9YGpz6NfXtXmG3tZQiGD89qrfzepNkW17QU6CAw5CHEi69St5N1CV2R9zXRp",
  "key28": "41CKmCwUxYzZVkhgC28inSJHkx8ae4CfZFWqfcuWvGc5Hns5PEXmDstUtmK7i95LhML6rdXFktdaRYAyCGiAZWsn",
  "key29": "3NhSUhDWXJwUroXkWHVZ33LtzkBKE7N3qpsWB7TAoKXMhHnTG9GnYRNmX55XQW7q5Cmh9D8JAwtSwRuRZfDWZn85",
  "key30": "4bpaB283fEwA9Uxspb4kDtpqRUAJVbThgiV7TqABkzz4YFbibe2Ppt9PZJJE8TzKeQKn6p5XSAbU3cm2fZYourYM",
  "key31": "3eHXoHmengEzFQKdoB7mSgrXfPECA4UrgTyw7zGLnUwRNDQq3R5JonJrA5D9GJqh96tSmmkQgvrzdQXvkMJaAJnV",
  "key32": "2L4JJuM7u6eNXoWZpJQwhfRS7FUkpWptB8Q9QReU51JgtsAvXc6HLVqXAct6pSEHo9n8RLgfqjv1j8J89VAJr3W4",
  "key33": "5rp7TaTUco2wGkkipakmvCnM8QPE1gQiXN11qszsR3JvDWSQyrn2izGhpvq4oLkuWp8nMS57ycQVemsUadPfMHYN",
  "key34": "2X7kPdxuB16jLGKzmDY9Mbb76DGc7EKgRENtNZE1uy4cRZLcrr9W5aT49MjbydCXQFT78WxfYDFByDEcvgH6gexg"
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
