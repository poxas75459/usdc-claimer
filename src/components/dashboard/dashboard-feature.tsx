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
    "Z7hgu71TTMeHpZVxRAAs9YD66kRiGUbRPhXsBESKQWhHs5ZnpZ2BJ7ZGzbCrZ5WNi9L74uEx1sctwdeHfyDtZPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CbVq32oRDVpbrmRga2CciNYUj28X3NoR2zf3NwYYhRTLo1zchuZuZGZdtXef9Wk9ygeaSTgVhf2wNnZcJDHiuwk",
  "key1": "584YgjX8CEdQQjcui1XnqVeEXMaeYFMYiMLUdp4gUFTAo4ocvpgNWqBsbXr8YytPJQxeSdPWTe1CpF5uoPWLvEf4",
  "key2": "1dkwds8y2vKTYRU74Kmi4L5K28T2SDAHot6NkKZq5VrouA3Q7bRdbZGa9ReBdZmB42FmMFTqBhDo32Kwomzy471",
  "key3": "4nGj4RWaMQgv6j5s3D6aBtANqXBvmacWkE1FsAbovU79wxJ4Yp5YCvA3RCfmB6xJAFmYrNHQaBJj54FXeMNMR7Kv",
  "key4": "56CU1tZCp6hYPtsDShjK3GxWSqEUR3i5Jv7q2zNmbLVctXgbhR5iPfrLQfbnZtrzzedynio8HJdVvcMxQYyq2LQt",
  "key5": "24yqG1myrs2Tmtxiess5oVxRcSJ1qByJ5T3hPZmHRL5fofMFRxwmMcm6it8y7aCkYvQaRpP7CXtsjMMvochyD1sd",
  "key6": "cqtHLH8cJFGd1246KeMnshdTTQEa2vkfHwJPyqZ4NKEofbZfLLafJGtiW7pwcUt762jNyD1QXVCWC7CPT2BiomR",
  "key7": "4UNkjxQLa6jDUhyVzuDW8oZo5ak5iFeXfeTQwF9M5LBirJK2UvYWu8WBWFth2abhWXMapL8ZFUsL2kP5PPtmtNgg",
  "key8": "2H9zXffvL1ZtFbRBVGVktSY6fEApczPgUVktdWkLD3KXXjjxZYQSEBxjADCwUw84jGbdJ7xkYDsgbp9pjnsafYhm",
  "key9": "2QUPC5G2VSnbSu7SpwptDx9iyyJLNA6dGgUtDVngq6juQmuTBPUrKY9KVmLdcu71u5pFujrpnoVTYK4WuVVttnuS",
  "key10": "tQeUUjFrfTD6AV4DMcrwZztnegb9Rhes9pyCeyQ5qGs2ARk1C2R3B6FCjGsQYV5pf3h3z5stXdxnG92578Q33hP",
  "key11": "58EUgoT4Vbdp61heAUsEZ5ykM12UUYXDXjctsdL8mALkR4yiAJGnpx4drJZ3yMY44BqdMABqBavgj2b3EZgd4LEM",
  "key12": "4L2jRFMeagT8535ECxeEu6hTqUXARjjD9rMQEBuJRz7EPPinY1f2iYw6NAMC5k2pNqkX5tTmNPYvgDBRwfoY39Xf",
  "key13": "5rKtFGXa45ZzDmN9qRQCqouCLJQ2uf2VzLcbgqF2ER53Nfho3LqKRXNWaEXzL4HuTdUyTUAiV3H6PnCm6hHDTtva",
  "key14": "4AgS8sSuEhZ29ASj1rcaik6enSBqtwHQeg7FJ39dVAKmTxAdNLv22KsjMMHgqYD3GPbSnmZZ8Zk5bvt2wEZKCTTn",
  "key15": "23PHmRGZBJ2ch2a4FzoGJjrqcqEFtDj6oV8mng7f7Dwq1TJef1gLHbqpRhaRC1u1Zax2Mppxn2TibuPLb63bMp3c",
  "key16": "4NSZd1bqNGuqPn1vyf8p7fwTQDvggw5DjQd8j1yTLQBz9peSLQJdHh5AQpjSbhbyN87Rp7e3QCEkub8gUaXRb6mz",
  "key17": "3fo3UT6Bbrr6xGmaXRwK3ph5QN5zh8JLe6nNTc2sMgcqRQErGRANeApiyrpFpvDbQn2UR3SpoXF1FVBMkdHGMvna",
  "key18": "5EzFeWXrtU4VYNU2Ht3t9YD2FNW6rmxUUUHh6QXFj98EDbHwPTeMqqeFh3xx5GbU7dqa5XhXEeH4R2yWordciTBa",
  "key19": "3UjeB27JTGc7eUcHy8CxCcxcrzfpnrRyaXMHM25ffCEoK44mpHzessZM4GQsi8CSpLe5q1V7BaQasRbwJtW1PqhK",
  "key20": "2F5TieV8C2GyV3mNf1R5fKZ2mUR8akV9exBSg8GFNKdteDLLpwrn4BqGjkLsPA5C65gvaRTP6Q7ntANuMc1bYPm1",
  "key21": "67V1RLs9u1YVLbisjse5tedLJMKEevw54fpvuDNGuyK3yPa2DiqH92XW4AhLNsh452oA3uvYbQKCBMwNzkCiw6TX",
  "key22": "4344wyFbSsBGQjtkd7DT278Mt37ec6GGcRfzL8itbvuDbvNvzx3Vj6wfyj1qEsHgPYrx3918WwDi6FqM29XUpLD9",
  "key23": "5FJhbDFEdsvxY75gV8WSsKtdjft4xnMiKucq3aHissWUKrGtN5JSppn782jYVoPzDiGkVoL5KknFgfA2MfUgQ3Hy",
  "key24": "5R71xNLpsdKGDhnyHwUrBQ64Y6PnVjPmwJdd8ErC6WuckaBhTfHzYBa9sm93h92v7aFru5dmkkzKPj4pMjE97LEr",
  "key25": "5LzD3PbQYbk72GuxWmD2LmvS7F8Zq1yFvaAfRrTcnmoj5BSt1YWLUqWPz9LckUdhgDpAyWR23Ywt3K57AKoHb6EF",
  "key26": "3Xfiw12k92cpqcmseS8LNU4FBwVLghfWUaXryMk7pi3r5uu1VB6T7Vkmzr3UJ24nk8jgXfzXYYE5itYK1FeR9pVw",
  "key27": "LqEc76HiaUKEP8EAWSuJ4MmvmvLCuXibVrdPbMsjtAXTqRJGQtG2sprHzsRTtWdSco21DxpCU6genz2Yfj6KDWS",
  "key28": "3LA6P6xXPP5VxZ5PKFFjtqKzyBgUshnfxzQHZcUavRccAyzPEDWVeuyLJ1yqkWEJVtiCYWXBcJR5opxC9Y5hRkQu",
  "key29": "qspWTm6seeCfxcm9XLL1m62ZWbet6tXdU2ZJkue2G8b6SgHPhzNteuhhrUHQyecFpok7TfpzZyNPPNQDhyM9Pnz",
  "key30": "1xYVwXjBU1kCp5jFggEbE5TUXb1n4LG8tJrpq9XkmKRMsUjQEpQPbwh53duLELQ7kyJDT5bpxhkkqa9paQpp2Bt"
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
